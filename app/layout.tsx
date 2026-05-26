import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GuardPrompt | AI Agent Deployment Assurance",
  description:
    "GuardPrompt validates, tests, certifies, and enforces behavioral boundaries for autonomous AI agents before production deployment.",
  openGraph: {
    title: "GuardPrompt | AI Agent Deployment Assurance",
    description:
      "DevSecOps assurance for autonomous AI agents. Behavior contracts, adversarial testing, deployment certificates, and runtime boundaries.",
    type: "website",
  },
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
