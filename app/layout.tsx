import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
