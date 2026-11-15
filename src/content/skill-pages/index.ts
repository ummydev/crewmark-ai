import type { Locale } from "next-intl";

import type { GuideCopy } from "@/components/landing/guide-article";
import { copy as zhWebsiteDesign } from "@/content/i18n/zh/skill-website-design";
import { copy as zhTWWebsiteDesign } from "@/content/i18n/zh-TW/skill-website-design";
import { copy as jaWebsiteDesign } from "@/content/i18n/ja/skill-website-design";
import { copy as koWebsiteDesign } from "@/content/i18n/ko/skill-website-design";
import { copy as esWebsiteDesign } from "@/content/i18n/es/skill-website-design";
import { copy as ptBRWebsiteDesign } from "@/content/i18n/pt-BR/skill-website-design";
import { copy as frWebsiteDesign } from "@/content/i18n/fr/skill-website-design";
import { copy as deWebsiteDesign } from "@/content/i18n/de/skill-website-design";
import type { SkillPageSlug } from "@/i18n/skill-pages";

import { websiteDesign } from "./website-design";

// Every "best Claude skills for <job>" page's copy, by slug and language. English lives next to this file, the
// other languages in content/i18n/<locale>/skill-<slug>.ts.

export const skillPagesCopy: Record<SkillPageSlug, Partial<Record<Locale, GuideCopy>>> = {
  "website-design": {
    en: websiteDesign,
    zh: zhWebsiteDesign,
    "zh-TW": zhTWWebsiteDesign,
    ja: jaWebsiteDesign,
    ko: koWebsiteDesign,
    es: esWebsiteDesign,
    "pt-BR": ptBRWebsiteDesign,
    fr: frWebsiteDesign,
    de: deWebsiteDesign,
  },
};
