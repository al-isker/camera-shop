import {ReactNode} from "react";
import type { Metadata } from "next";
import { Jost } from "next/font/google";

import {QueryProvider} from "@/queries/QueryProvider";
import {Header} from "@/components/ordinary/header/Header";
import {Footer} from "@/components/ordinary/footer/Footer";

import './reset.css';
import './global.css';

const jost = Jost({ subsets: ["cyrillic", "latin"] });

export const metadata: Metadata = {
  title: "Camera Shop",
  description: "test assignment"
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={jost.className}>
        <QueryProvider>
          <Header/>
          {children}
          <Footer/>
        </QueryProvider>
      </body>
    </html>
  );
}
