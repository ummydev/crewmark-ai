import type { Locale } from "next-intl";

import { alternativeImage } from "@/components/landing/alternative-page";
import { routing } from "@/i18n/routing";
import { shareCardSize } from "@/lib/share-card";

export const alt = "Crewmark vs Paperclip, compared";
export const size = shareCardSize;
export const contentType = "image/png";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function Image({ params }: { params: Promise<{ locale: Locale }> }) {
  return alternativeImage("paperclip", (await params).locale);
}
