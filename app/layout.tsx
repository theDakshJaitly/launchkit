import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  metadataBase: new URL("https://launchx.page"),
  alternates: {
    canonical: "/",
  },
  title: "LaunchX — Ship Your Next.js App This Weekend",
  description:
    "Production-ready Next.js templates with AI rules baked in. Auth, payments, database — configured in 5 minutes. 80% fewer tokens wasted.",
  openGraph: {
    title: "LaunchX — Ship Your Next.js App This Weekend",
    description:
      "Production-ready Next.js templates with AI rules baked in. Auth, payments, database — configured in 5 minutes.",
    type: "website",
    images: [
      {
        url: "/launchx_twitter.jpeg",
        width: 1200,
        height: 630,
        alt: "LaunchX Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LaunchX — Ship Your Next.js App This Weekend",
    description:
      "Production-ready Next.js templates with AI rules baked in. Auth, payments, database — configured in 5 minutes.",
    images: ["/launchx_twitter.jpeg"],
  },
};

import { Space_Grotesk } from "next/font/google";
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space" });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased bg-black text-white">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
