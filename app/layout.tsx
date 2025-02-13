import type { Metadata } from "next";
import { ReactNode } from "react";
import Providers from "@/components/translate/Providers";
import "@/assets/fonts/vazir/Vazirmatn-font-face.css";
import "@/assets/styles/globals.scss";

export const metadata: Metadata = {
  title: "Mahan portfolio",
  description: "created by Mahan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="fa">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
