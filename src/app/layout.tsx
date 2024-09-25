import type { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.css";
import './globalicons.css';
import Menu from "../components/menu";
import Home from "./page";
import Pesquisa from "@/components/pesquisa";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Hotel",
  description: "Aula de programação de aplicativos",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Menu/>
        <Pesquisa/>
        <Home/>
      </body>
    </html>
  );
}
