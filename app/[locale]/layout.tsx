import type { Metadata } from "next";
import "@/assets/fonts/vazir/Vazirmatn-font-face.css";
import "@/assets/styles/globals.scss";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import UseLocalePage from "@/components/UseLocalePage";
import NavBar from "@/components/NavBar";

export const metadata: Metadata = {
  title: "Mahan portfolio",
  description: "created by Mahan",
};

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
        <NextIntlClientProvider>
          <div dir="rtl" className={dir}>
            <NavBar locale={locale}/>
            <div>{children}</div>
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
