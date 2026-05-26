import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GuardPrompt | Deployment Assurance for AI Agents",
  description:
    "Validate, test, certify, and enforce behavioral boundaries for autonomous AI agents before production deployment.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
