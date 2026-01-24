import ChatwootWidget from "@/components/ChatwootWidget";
import { Footer } from "@/components/Footer";
import { GlobalNavbar } from "@/components/GlobalNavbar";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import { Figtree, Geist_Mono } from "next/font/google";
import type React from "react";
import "./globals.css";

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
  weight: ["400", "500", "600", "700", "800"],
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "CareTracker - Intelligent Clinic Management Software",
  description:
    "Streamline your healthcare practice with CareTracker - the all-in-one clinic management platform for modern healthcare providers. HIPAA compliant, secure, and built for growth.",
  keywords: [
    "clinic management",
    "healthcare software",
    "medical practice",
    "EHR",
    "patient management",
    "HIPAA compliant",
  ],
  authors: [{ name: "CareTracker" }],
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    title: "CareTracker - Intelligent Clinic Management Software",
    description: "Streamline your healthcare practice with CareTracker",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#1d326d",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${figtree.variable} ${geistMono.variable} font-sans antialiased`}>
        <ScrollToTop />
        <GlobalNavbar />
        <div className="pt-16 sm:pt-20">{children}</div>
        <ChatwootWidget
          websiteToken={"mbCVNYgkFPAgo19fD2jBtoLE"}
          baseUrl={"https://app.chatwoot.com"}
          position="right"
          locale="en"
          type="expanded_bubble"
          hideMessageBubble={false}
        />
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
