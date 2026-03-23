import type React from "react";
import type { Metadata, Viewport } from "next";
import { Libre_Caslon_Text, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

// Serif font for headings
const serifFont = Libre_Caslon_Text({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  weight: ["400", "700"],
});

// Sans Serif font for body text and subheadings
const sansSerifFont = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const monoFont = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
  ),
  title: {
    default: "pupipat.com",
    template: "%s | Pupipat Singkhorn",
  },
  description: "Pupipat Singkhorn's Personal Website",
  keywords: ["Pupipat Singkhorn", "pupipat.com"],
  authors: [{ name: "Pupipat Singkhorn" }],
  creator: "Pupipat Singkhorn",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "pupipat.com",
    title: "pupipat.com",
    description: "Pupipat Singkhorn's Personal Website",
    images: [
      {
        url: "/profile/profile-photo.png",
        width: 1200,
        height: 1200,
        alt: "Pupipat Singkhorn",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "pupipat.com",
    description: "Pupipat Singkhorn's Personal Website",
    images: ["/profile/profile-photo.png"],
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${serifFont.variable} ${sansSerifFont.variable} ${monoFont.variable} font-sans`}
      >
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1 pt-20">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
