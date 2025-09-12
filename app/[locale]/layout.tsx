import type { Metadata } from "next";
import "@/assets/fonts/vazir/Vazirmatn-font-face.css";
import "@/assets/styles/globals.scss";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import NavBar from "@/components/NavBar";
import ScrollProgress from "@/components/ScrollProgress";
import { routing } from "@/i18n/routing";
import SmoothCursor from "@/components/SmoothCursor";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "ماهان زندی | Mahan Zandi",
  description:
    "ماهان الوارزندی، توسعه‌دهنده فرانت‌اند با تجربه در React، Next.js و TailwindCSS؛ متخصص در ساخت رابط‌های کاربری سریع، مدرن و کاربرپسند.",
  keywords:
    "ماهان الوارزندی, توسعه‌دهنده فرانت‌اند, برنامه‌نویس وب, React, Next.js, TailwindCSS, طراحی رابط کاربری, توسعه وب, برنامه‌نویسی فرانت‌اند, پورتفولیو, پروژه‌های وب, توسعه‌دهنده React, توسعه‌دهنده Next.js",
  manifest: "/manifest.json",
  openGraph: {
    title: "ماهان زندی | Mahan Zandi",
    description:
      "ماهان الوارزندی، توسعه‌دهنده فرانت‌اند با تجربه در React، Next.js و TailwindCSS؛ متخصص در ساخت رابط‌های کاربری سریع، مدرن و کاربرپسند.",
    siteName: "ماهان زندی",

    type: "website",
    locale: "fa_IR",
    url: "https://www.mahanzandi.ir",
    images: [
      {
        url: "/favicon.ico",
        width: 1200,
        height: 630,
        alt: "لوگوی وبسایت ماهان زندی",
        type: "image/jpg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ماهان زندی | Mahan Zandi",
    description:
      "ماهان الوارزندی، توسعه‌دهنده فرانت‌اند با تجربه در React، Next.js و TailwindCSS؛ متخصص در ساخت رابط‌های کاربری سریع، مدرن و کاربرپسند.",
    site: "https://www.mahanzandi.ir",
    images: [
      {
        url: "/favicon.ico",
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
  alternates: {
    canonical: "https://www.mahanzandi.ir",
  },
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const dir = locale === "fa" ? "text-right" : "text-left";

  return (
    <html lang={locale}>
      <body>
        <ScrollProgress />
        <NextIntlClientProvider>
          <div dir="rtl" className={dir}>
            <NavBar locale={locale} />
            <div>{children}</div>
          </div>
          <Footer />
        </NextIntlClientProvider>
        <div className="xl:block hidden">
          <SmoothCursor />
        </div>
      </body>
    </html>
  );
}
