# Vaayu Website Agent Instructions

## Browser Capture Preference

- Use CloakBrowser for website navigation, screenshot capture, and design-audit evidence in this project.
- Prefer `python scripts/cloak_capture.py ...` for local and remote page captures.
- Do not use Playwright MCP/browser tools for audits or screenshots unless the user explicitly asks for Playwright or CloakBrowser cannot complete the capture.
- If CloakBrowser is blocked, report the blocker and ask before falling back to another browser automation tool.

