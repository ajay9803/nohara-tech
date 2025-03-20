import type { Metadata } from "next";
import { Geist, Geist_Mono, Londrina_Shadow, Pacifico, Roboto, Press_Start_2P, Play, Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

const openSans = Open_Sans({
  variable: "--font-open-sans",
  weight: ['300', '600'],
  subsets: ["latin"],
});


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const pacifico = Pacifico({
  subsets: ['cyrillic'],
  weight: ['400'],
  variable: '--font-pacifico'
});

const roboto = Roboto({
  subsets: ["cyrillic"],
  weight: ["100", "300"],
  variable: "--font-roboto",
});

const londrina = Londrina_Shadow({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-londrina",
});

const pressStart2P = Press_Start_2P({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-press-start",
});

const play = Play({
  subsets: ["latin"],
  weight: ["400"], 
  variable: "--font-play",
});

export const metadata: Metadata = {
  title: "Nohara Technologies",
  description: "Innovating beyond peaks, delivering smart and reliable tech solutions for today’s world.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <head>
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${roboto.variable} ${pacifico.variable} ${londrina.variable} ${pressStart2P.variable} ${play.variable} ${openSans.variable} relative`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
