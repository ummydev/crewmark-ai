import type { Locale } from "next-intl";
import { getTranslations } from "next-intl/server";

import { routing } from "@/i18n/routing";
import { shareCard, shareCardLines, shareCardSize } from "@/lib/share-card";

// The home page's share card: the hero headline in the page's language, prerendered for every locale at build time.

export const alt = "Crewmark: AI employees that run on Claude Code and Codex";
export const size = shareCardSize;
export const contentType = "image/png";

// Image routes don't pick up the layout's static params, so they list the locales themselves.
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

const RUNTIMES = ["Claude Code", "Codex", "DeepSeek Harness", "OpenCode"];

export default async function Image({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Landing.hero" });
  return shareCard({
    locale,
    lines: shareCardLines(t.raw("title") as string),
    footer: `${t("runsOn")}  ${RUNTIMES.join(" · ")}`,
  });
}
