import type { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.css";
import toast, { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Health CareChat - ML",
  description: "Health CareChat - ML",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-white`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
