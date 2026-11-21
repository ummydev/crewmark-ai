import type { Locale } from "next-intl";

import { copy as de } from "@/content/i18n/de/compare";
import { copy as es } from "@/content/i18n/es/compare";
import { copy as fr } from "@/content/i18n/fr/compare";
import { copy as ja } from "@/content/i18n/ja/compare";
import { copy as ko } from "@/content/i18n/ko/compare";
import { copy as ptBR } from "@/content/i18n/pt-BR/compare";
import { copy as zh } from "@/content/i18n/zh/compare";
import { copy as zhTW } from "@/content/i18n/zh-TW/compare";

import { en } from "./en";
import type { CompareBundle } from "./types";

export { compareHref, compareHubPage, comparePage } from "./build";

// The comparison copy in every language it's written in. English is next to this file, the other languages in
// content/i18n/<locale>/compare.ts.
export const compareBundles: Partial<Record<Locale, CompareBundle>> = {
  en,
  zh,
  "zh-TW": zhTW,
  ja,
  ko,
  es,
  "pt-BR": ptBR,
  fr,
  de,
};
