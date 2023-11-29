"use client";

import { Analytics } from '@vercel/analytics/react';
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Toaster } from 'react-hot-toast';
import ProviderAuth from '@/components/Providers/ProviderAuth';
import { Providers } from "./providers";

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
          <ProviderAuth>
            <Header />
            {children}
            <Footer />
            <ScrollToTop />
            <Toaster />
          </ProviderAuth>
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}


