import type { Locale } from "next-intl";

import { rolesCopy } from "@/content/roles";
import { roles } from "@/i18n/roles";
import { shareCard, shareCardSize } from "@/lib/share-card";

// The share card for each role page: the role's name over Crewmark's.

export const alt = "An AI employee role on Crewmark";
export const size = shareCardSize;
export const contentType = "image/png";

export function generateStaticParams() {
  return roles.flatMap(({ slug, locales }) => locales.map((locale) => ({ locale, role: slug })));
}

export default async function Image({ params }: { params: Promise<{ locale: Locale; role: string }> }) {
  const { locale, role: slug } = await params;
  const role = roles.find((r) => r.slug === slug) ?? roles[0];
  const c = rolesCopy[role.slug][locale] ?? rolesCopy[role.slug].en!;
  return shareCard({
    locale,
    lines: [{ before: "", marked: `${c.breadcrumb}.` }],
    footer: "Crewmark  ·  AI employees on Claude Code and Codex",
  });
}
