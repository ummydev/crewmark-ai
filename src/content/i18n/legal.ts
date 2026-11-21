import { copy as dePrivacy } from "./de/privacy";
import { copy as deTerms } from "./de/terms";
import { copy as esPrivacy } from "./es/privacy";
import { copy as esTerms } from "./es/terms";
import { copy as frPrivacy } from "./fr/privacy";
import { copy as frTerms } from "./fr/terms";
import { copy as jaPrivacy } from "./ja/privacy";
import { copy as jaTerms } from "./ja/terms";
import { copy as koPrivacy } from "./ko/privacy";
import { copy as koTerms } from "./ko/terms";
import { copy as ptBRPrivacy } from "./pt-BR/privacy";
import { copy as ptBRTerms } from "./pt-BR/terms";
import { copy as zhPrivacy } from "./zh/privacy";
import { copy as zhTerms } from "./zh/terms";
import { copy as zhTWPrivacy } from "./zh-TW/privacy";
import { copy as zhTWTerms } from "./zh-TW/terms";

// /privacy and /terms in every language but English (content/legal.ts).
export const privacyTranslations = {
  zh: zhPrivacy,
  "zh-TW": zhTWPrivacy,
  ja: jaPrivacy,
  ko: koPrivacy,
  es: esPrivacy,
  "pt-BR": ptBRPrivacy,
  fr: frPrivacy,
  de: dePrivacy,
};
export const termsTranslations = {
  zh: zhTerms,
  "zh-TW": zhTWTerms,
  ja: jaTerms,
  ko: koTerms,
  es: esTerms,
  "pt-BR": ptBRTerms,
  fr: frTerms,
  de: deTerms,
};
