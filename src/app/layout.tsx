import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

import {Header} from '@/components/simple/header/Header';
import {Footer} from '@/components/simple/footer/Footer';

const montserrat = Montserrat({ subsets: ["cyrillic", "latin"] });

export const metadata: Metadata = {
  title: "Camera Shop",
  description: "Generated by create next app"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={montserrat.className}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
