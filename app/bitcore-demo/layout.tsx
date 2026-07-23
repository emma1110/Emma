import { Archivo, Inter } from "next/font/google";
import "./bitcore-demo.css";

const geist = Inter({
  variable: "--font-geist",
  subsets: ["latin"],
});

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["700"],
});

export default function BitcoreDemoLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className={`bitcoreDemoRoot ${geist.variable} ${archivo.variable}`}>
      {children}
    </div>
  );
}
