import { defineRouting } from "next-intl/routing";

// The marketing pages are localized: English at / and every other language under its own prefix (/zh, /ja, …).
// Each language has its own URL so search engines can index all of them. The dashboard isn't localized yet.
// A new locale also needs messages/<locale>.json and its prefix in the matcher in proxy.ts.
export const routing = defineRouting({
  locales: ["en", "zh", "zh-TW", "ja", "ko", "es", "pt-BR", "fr", "de"],
  defaultLocale: "en",
  localePrefix: {
    mode: "as-needed",
    // URLs are lowercase; the locale itself keeps its standard casing for <html lang> and hreflang.
    prefixes: { "zh-TW": "/zh-tw", "pt-BR": "/pt-br" },
  },
  // hreflang links are written into each page's <head> (see i18n/metadata.ts), not sent as a Link header.
  alternateLinks: false,
});

/** Each language's name in that language, for the language switcher. */
export const localeNames = {
  en: "English",
  zh: "简体中文",
  "zh-TW": "繁體中文",
  ja: "日本語",
  ko: "한국어",
  es: "Español",
  "pt-BR": "Português",
  fr: "Français",
  de: "Deutsch",
} satisfies Record<(typeof routing.locales)[number], string>;
