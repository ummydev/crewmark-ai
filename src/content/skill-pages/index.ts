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
import { copy as zhMobileAppDesign } from "@/content/i18n/zh/skill-mobile-app-design";
import { copy as zhSeo } from "@/content/i18n/zh/skill-seo";
import { copy as zhTWMobileAppDesign } from "@/content/i18n/zh-TW/skill-mobile-app-design";
import { copy as jaMobileAppDesign } from "@/content/i18n/ja/skill-mobile-app-design";
import { copy as koMobileAppDesign } from "@/content/i18n/ko/skill-mobile-app-design";
import { copy as esMobileAppDesign } from "@/content/i18n/es/skill-mobile-app-design";
import { copy as ptBRMobileAppDesign } from "@/content/i18n/pt-BR/skill-mobile-app-design";
import { copy as frMobileAppDesign } from "@/content/i18n/fr/skill-mobile-app-design";
import { copy as deMobileAppDesign } from "@/content/i18n/de/skill-mobile-app-design";
import { copy as zhTWSeo } from "@/content/i18n/zh-TW/skill-seo";
import { copy as jaSeo } from "@/content/i18n/ja/skill-seo";
import { copy as koSeo } from "@/content/i18n/ko/skill-seo";
import { copy as esSeo } from "@/content/i18n/es/skill-seo";
import { copy as ptBRSeo } from "@/content/i18n/pt-BR/skill-seo";
import { copy as frSeo } from "@/content/i18n/fr/skill-seo";
import { copy as deSeo } from "@/content/i18n/de/skill-seo";
import type { SkillPageSlug } from "@/i18n/skill-pages";

import { mobileAppDesign } from "./mobile-app-design";
import { seo } from "./seo";
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
  "mobile-app-design": { en: mobileAppDesign, zh: zhMobileAppDesign, "zh-TW": zhTWMobileAppDesign, ja: jaMobileAppDesign, ko: koMobileAppDesign, es: esMobileAppDesign, "pt-BR": ptBRMobileAppDesign, fr: frMobileAppDesign, de: deMobileAppDesign },
  seo: { en: seo, zh: zhSeo, "zh-TW": zhTWSeo, ja: jaSeo, ko: koSeo, es: esSeo, "pt-BR": ptBRSeo, fr: frSeo, de: deSeo },
};
