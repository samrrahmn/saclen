import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
import "@fortawesome/fontawesome-free/css/all.min.css";

export const metadata: Metadata = {
  title: {
    default: "Saclen — Building intelligent systems",
    template: "%s — Saclen",
  },
  description:
    "Saclen is a web development and AI automation agency helping businesses build modern websites, custom systems, and intelligent automation to scale faster and operate more efficiently.",

  keywords: [
    "web development agency",
    "ai automation agency",
    "custom software development",
    "business automation",
    "saas development",
    "dashboard development",
    "internal tools",
    "workflow automation",
    "saclen",
  ],

  openGraph: {
    title: "Saclen — Web Development & AI Automation Agency",
    description:
      "We design and build modern websites, custom business systems, and AI-powered automation to help companies run and scale their business from one intelligent platform.",
    url: "https://atlas.saclen.com",
    siteName: "Saclen",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Saclen — Web Development & AI Automation Agency",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Saclen — Web Development & AI Automation Agency",
    description:
      "We build modern websites, custom dashboards, and AI automation systems for growing businesses.",
    images: ["/og-image.png"],
  },

  icons: {
    icon: "/favicon.ico",
  },

  metadataBase: new URL("https://atlas.saclen.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-0K6TGNHKQ0"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-9C86PZ711F');
        `}
        </Script>
      </head>

      <body>{children}</body>
    </html>
  );
}
