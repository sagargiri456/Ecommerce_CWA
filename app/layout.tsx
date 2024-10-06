import type { Metadata } from "next";
import localFont from "next/font/local";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import ModalProvider from "@/providers/modal-providers";
import prismadb from '@/lib/prismadb'
import { ToasterProvider } from "@/providers/toast-provider";


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
  title: "Create Next App",
  description: "Admin Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const store = prismadb.store
  {
    /*
      Now we can perfomr various functions such as prismadb.store.delete to delete a entity.
      or prismadb.store.find excetra.
    */
  }
  return (
    <ClerkProvider >
      <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <ToasterProvider />
          <ModalProvider />
          {children}

        </body>
      </html>
    </ClerkProvider>
  );
}
