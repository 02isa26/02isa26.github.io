import Footer from "@/app/_components/Footer";
import Header from "@/app/_components/Header";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const ZenKakuGothicNew = localFont({
  src: "./_fonts/ZenKakuGothicNew-Regular.woff",
  variable: "--font-body",
  display: "swap",
  preload: false,
});
const ZenMaruGothic = localFont({
  src: "./_fonts/ZenMaruGothic-Regular.woff",
  variable: "--font-title",
  display: "swap",
  preload: false,
});
const GeistSans = localFont({
  src: "./_fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "400",
});

export const metadata: Metadata = {
  title: "isa02の個人サイト",
  description: "isa02の個人サイトです．",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${GeistSans.variable} ${ZenKakuGothicNew.variable} ${ZenMaruGothic.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
