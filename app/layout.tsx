import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vaayu AHU innovative",
  description: "Vaayu Aircon frontend clone generated from the live Vaayu India website.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
