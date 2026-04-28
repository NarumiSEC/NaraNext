import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "../styles/utilities.css";
import "./globals.css";
import { site } from "@/lib/site";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#030303",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://88societysubang.com"),
  title: {
    default: `${site.fullName} · Rooftop · Café · Live Music`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  keywords: [
    "88 Society Subang",
    "Subang rooftop",
    "Subang cafe",
    "live music Subang",
    "West Java nightlife",
    "restaurant Subang",
  ],
  openGraph: {
    title: `${site.fullName} · Rooftop · Café · Live Music`,
    description: site.tagline,
    locale: "en_ID",
    type: "website",
    siteName: site.fullName,
    images: [
      {
        url: "https://images.unsplash.com/photo-1514362545857-f57bc8b1af00?w=1200&h=630&fit=crop&q=85",
        width: 1200,
        height: 630,
        alt: "Rooftop nightlife atmosphere",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.fullName,
    description: site.tagline,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${display.variable} ${sans.variable} font-sans min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
