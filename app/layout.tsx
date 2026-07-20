import type { Metadata } from "next";
import { Inter } from "next/font/google";
import MotionRuntime from "../components/motion/MotionRuntime";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  ?? (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3001");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Emma | Product Designer",
  description: "Emma crafts intuitive, human-centered products that move the needle.",
  icons: {
    icon: [{ url: "/images/emma-favicon.png", type: "image/png", sizes: "40x40" }],
    shortcut: "/images/emma-favicon.png",
  },
  openGraph: {
    title: "Emma | Product Designer",
    description: "Turning complexity into clarity through intuitive product experiences.",
    type: "website",
    images: [
      {
        url: "/images/og-thumbnail.png",
        width: 2400,
        height: 1260,
        alt: "Emma — Turning complexity into clarity",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Emma | Product Designer",
    description: "Turning complexity into clarity through intuitive product experiences.",
    images: ["/images/og-thumbnail.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var saved = localStorage.getItem('theme') || 'light';
                document.documentElement.setAttribute('data-theme', saved);
              })();
            `
          }}
        />
      </head>
      <body className={`${inter.className} ${inter.variable}`}>
        <MotionRuntime />
        {children}
      </body>
    </html>
  );
}
