import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from '@clerk/nextjs'
import "./globals.css";


import { Toaster } from "@/components/ui/toaster"
import {ModalProvider} from "@/components/modal-provider";
import {CrispProvider} from "@/components/crisp-provider";
import {UserProvider} from "@auth0/nextjs-auth0/client";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Eve",
  description: "Your AI Assistant",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      // <ClerkProvider>
          <html lang="en">
          <CrispProvider/>
          <body className={inter.className}>
          <UserProvider>
              <Toaster/>
              <ModalProvider/>
              {children}
          </UserProvider>
          </body>
          </html>
      // </ClerkProvider>
  );
}
