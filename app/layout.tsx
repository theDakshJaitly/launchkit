import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  title: "LaunchKit — Ship Your Next.js App This Weekend",
  description:
    "Production-ready Next.js templates with AI rules baked in. Auth, payments, database — configured in 5 minutes. 80% fewer tokens wasted.",
  openGraph: {
    title: "LaunchKit — Ship Your Next.js App This Weekend",
    description:
      "Production-ready Next.js templates with AI rules baked in. Auth, payments, database — configured in 5 minutes.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LaunchKit — Ship Your Next.js App This Weekend",
    description:
      "Production-ready Next.js templates with AI rules baked in. Auth, payments, database — configured in 5 minutes.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="font-sans antialiased bg-black text-white">
        {children}
      </body>
    </html>
  );
}
