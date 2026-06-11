import argparse
import hashlib
import json
import os
import time
from pathlib import Path

from cloakbrowser import launch_persistent_context


ROOT = Path(__file__).resolve().parents[1]
DEFAULT_PROFILE_NAME = "vaayu-website-cloak"
DEFAULT_PROFILE_DIR = ROOT / ".cloak-profiles" / DEFAULT_PROFILE_NAME
DEFAULT_LOCALE = "en-IN"
DEFAULT_TIMEZONE = "Asia/Kolkata"


def stable_fingerprint_seed() -> str:
    configured = os.environ.get("CLOAK_FINGERPRINT_SEED")
    if configured:
        return configured
    digest = hashlib.sha256(DEFAULT_PROFILE_NAME.encode("utf-8")).hexdigest()
    return str(10000 + (int(digest[:8], 16) % 90000))


def profile_dir() -> Path:
    configured = os.environ.get("CLOAK_PROFILE_DIR")
    if configured:
        return Path(configured).expanduser().resolve()
    return DEFAULT_PROFILE_DIR


def launch_context(*, headless: bool):
    proxy = os.environ.get("CLOAK_PROXY")
    launch_options = {
        "headless": headless,
        "locale": os.environ.get("CLOAK_LOCALE", DEFAULT_LOCALE),
        "timezone": os.environ.get("CLOAK_TIMEZONE", DEFAULT_TIMEZONE),
        "args": [f"--fingerprint={stable_fingerprint_seed()}"],
    }
    if proxy:
        launch_options["proxy"] = {"server": proxy}

    path = profile_dir()
    path.mkdir(parents=True, exist_ok=True)
    return launch_persistent_context(str(path), **launch_options)


def wait_for_images(page, timeout_ms: int) -> None:
    page.evaluate(
        """
        async (timeoutMs) => {
          const timeout = new Promise((resolve) => setTimeout(resolve, timeoutMs));
          const imageLoads = Promise.all(
            [...document.images].map((img) => {
              if (img.complete) return Promise.resolve();
              return new Promise((resolve) => {
                img.onload = resolve;
                img.onerror = resolve;
              });
            })
          );
          await Promise.race([imageLoads, timeout]);
        }
        """,
        timeout_ms,
    )


def capture(args: argparse.Namespace) -> dict:
    context = None
    try:
        context = launch_context(headless=not args.headed)
        page = context.new_page()
        page.set_viewport_size({"width": args.width, "height": args.height})
        page.goto(args.url, wait_until="domcontentloaded", timeout=args.timeout_ms)
        try:
            page.wait_for_load_state("networkidle", timeout=args.network_idle_ms)
        except Exception:
            pass
        if args.wait_seconds:
            time.sleep(args.wait_seconds)
        if args.wait_images:
            wait_for_images(page, args.network_idle_ms)

        output = Path(args.output)
        if not output.is_absolute():
            output = ROOT / output
        output.parent.mkdir(parents=True, exist_ok=True)
        page.screenshot(path=str(output), full_page=args.full_page)

        return {
            "url": page.url,
            "title": page.title(),
            "output": str(output),
            "viewport": {"width": args.width, "height": args.height},
            "full_page": args.full_page,
            "browser": "cloakbrowser",
        }
    finally:
        if context is not None:
            context.close()


def main() -> int:
    parser = argparse.ArgumentParser(description="Capture pages with CloakBrowser.")
    parser.add_argument("url")
    parser.add_argument("--output", required=True)
    parser.add_argument("--width", type=int, default=1440)
    parser.add_argument("--height", type=int, default=900)
    parser.add_argument("--full-page", action="store_true")
    parser.add_argument("--headed", action="store_true")
    parser.add_argument("--wait-images", action="store_true")
    parser.add_argument("--wait-seconds", type=float, default=0)
    parser.add_argument("--timeout-ms", type=int, default=60000)
    parser.add_argument("--network-idle-ms", type=int, default=15000)
    result = capture(parser.parse_args())
    print(json.dumps(result, indent=2))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())

