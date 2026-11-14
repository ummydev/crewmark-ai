import type { Locale } from "next-intl";

import type { GuideCopy } from "@/components/landing/guide-article";
import * as de from "@/content/i18n/de/roles";
import * as es from "@/content/i18n/es/roles";
import * as fr from "@/content/i18n/fr/roles";
import * as ja from "@/content/i18n/ja/roles";
import * as ko from "@/content/i18n/ko/roles";
import * as ptBR from "@/content/i18n/pt-BR/roles";
import * as zh from "@/content/i18n/zh/roles";
import * as zhTW from "@/content/i18n/zh-TW/roles";
import { type RoleSlug, roles } from "@/i18n/roles";

import { roleCopy, type RoleData, type RoleTemplate } from "./build";
import * as en from "./en";

// Every role page's copy, by slug and language: each language's template and role data, put together by roleCopy().

const languages: Partial<Record<Locale, { template: RoleTemplate; roles: Record<RoleSlug, RoleData> }>> = {
  en,
  zh,
  "zh-TW": zhTW,
  es,
  "pt-BR": ptBR,
  ja,
  ko,
  fr,
  de,
};

export const rolesCopy = Object.fromEntries(
  roles.map(({ slug }) => [
    slug,
    Object.fromEntries(
      Object.entries(languages).map(([locale, lang]) => [locale, roleCopy(lang.template, lang.roles[slug])]),
    ),
  ]),
) as Record<RoleSlug, Partial<Record<Locale, GuideCopy>>>;
