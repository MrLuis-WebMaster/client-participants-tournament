"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import ButtonFloat from "@/components/Common/ButtonFloat";
import { Toaster } from 'react-hot-toast';

import "node_modules/react-modal-video/css/modal-video.css";
import "../styles/index.css";



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="es">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body className="dark:bg-black">
        <Providers>
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
          <ButtonFloat />
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}

import { Providers } from "./providers";