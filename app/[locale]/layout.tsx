import type { Metadata } from "next";
import "@/assets/fonts/vazir/Vazirmatn-font-face.css";
import "@/assets/styles/globals.scss";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { ReactNode } from "react";
import NavBar from "@/components/NavBar";
import ogImage from "@/public/images/ogImage.jpg";
import {routing} from '@/i18n/routing';
 
export const metadata: Metadata = {
  title: "ماهان زندی | توسعه دهنده فرانت اند",
  description:
    "ماهان الوارزندی، توسعه‌دهنده فرانت‌اند با تجربه در React، Next.js و TailwindCSS؛ متخصص در ساخت رابط‌های کاربری سریع، مدرن و کاربرپسند.",
  keywords:
    "ماهان الوارزندی, توسعه‌دهنده فرانت‌اند, برنامه‌نویس وب, React, Next.js, TailwindCSS, طراحی رابط کاربری, توسعه وب, برنامه‌نویسی فرانت‌اند, پورتفولیو, پروژه‌های وب, توسعه‌دهنده React, توسعه‌دهنده Next.js",
  openGraph: {
    title: "ماهان زندی | توسعه دهنده فرانت اند",
    description:
      "ماهان الوارزندی، توسعه‌دهنده فرانت‌اند با تجربه در React، Next.js و TailwindCSS؛ متخصص در ساخت رابط‌های کاربری سریع، مدرن و کاربرپسند.",
    siteName: "ماهان زندی",
    locale: "fa_IR",
    // url: "https://www.mahanzandi.ir",
    // url: "https://localhost:3000",
    images: [
      {
        url: ogImage.src,
        width: 1200,
        height: 630,
        alt: "لوگوی وبسایت ماهان زندی",
        type: "image/jpg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: " ماهان زندی | توسعه دهنده فرانت اند ",
    description:
      "ماهان الوارزندی، توسعه‌دهنده فرانت‌اند با تجربه در React، Next.js و TailwindCSS؛ متخصص در ساخت رابط‌های کاربری سریع، مدرن و کاربرپسند.",
    // site: "https://www.mahanzandi.ir",
    // site: "https://localhost:3000",
    images: [
      {
        url: ogImage.src,
        width: 1200,
        height: 630,
        alt: "لوگوی وبسایت ماهان زندی",
        type: "image/jpg",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

type Props = {
  children: ReactNode;
  params: Promise<{locale: string}>;
};

export default async function LocaleLayout({children, params}: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const dir = locale === "fa" ? "text-right" : "text-left";

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider>
          <div dir="rtl" className={dir}>
            <NavBar locale={locale} />
            <div>{children}</div>
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
