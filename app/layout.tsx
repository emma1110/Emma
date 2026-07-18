import type { Metadata } from "next";
import { Inter } from "next/font/google";
import MotionRuntime from "../components/motion/MotionRuntime";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
export const metadata: Metadata = {
  title: "Emma | Product Designer",
  description: "Emma crafts intuitive, human-centered products that move the needle.",
  icons: {
    icon: [{ url: "/images/emma-logo.svg", type: "image/svg+xml" }],
    shortcut: "/images/emma-logo.svg",
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
