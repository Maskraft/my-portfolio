import type { Metadata } from "next";
import { Syne, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Syu | Web Engineer",
  description: "エンジニアリングの力で、美しくインタラクティブなプロダクト体験を創り出す。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="dark">
      <body className={`${syne.variable} ${jetbrainsMono.variable} bg-background text-foreground font-body antialiased`}>
        {children}
      </body>
    </html>
  );
}
