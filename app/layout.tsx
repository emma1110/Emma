import type { Metadata } from "next";
import { Inter, Libre_Caslon_Text } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const libreCaslonText = Libre_Caslon_Text({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-libre-caslon",
});
export const metadata: Metadata = {
  title: "Emma | Product Designer",
  description: "Emma crafts intuitive, human-centered products that move the needle.",
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
      <body className={`${inter.className} ${libreCaslonText.variable}`}>
        {children}
      </body>
    </html>
  );
}
