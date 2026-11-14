import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import { Inter } from "next/font/google";

import { siteUrl } from "@/i18n/metadata";
import { routing } from "@/i18n/routing";
import "./landing.css";

// The static weights the landing page was designed with; its 650 headings render as 700.
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: siteUrl,
};

// Every language is prerendered at build time.
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

// Root layout for the localized marketing pages. The dashboard has its own in (dashboard).
export default async function MarketingLayout({ children }: LayoutProps<"/[locale]">) {
  const locale = await getLocale();
  const { Landing } = await getMessages();
  return (
    <html lang={locale} className={inter.variable}>
      <body>
        {/* Client components only get the strings they render; everything else is translated on the server. */}
        <NextIntlClientProvider messages={{ Landing: { demo: Landing.demo } }}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
