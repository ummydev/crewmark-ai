import type { Locale } from "next-intl";

import type { GuideCopy } from "@/components/landing/guide-article";
import { copy as zhForEngineering } from "@/content/i18n/zh/for-engineering";
import { copy as zhForMarketing } from "@/content/i18n/zh/for-marketing";
import { copy as zhDailySeoReport } from "@/content/i18n/zh/use-case-daily-seo-report";
import { copy as zhPrReview } from "@/content/i18n/zh/use-case-pr-review";
import { copy as zhSentryErrorTriage } from "@/content/i18n/zh/use-case-sentry-error-triage";
import { copy as zhWeeklyCompetitorDigest } from "@/content/i18n/zh/use-case-weekly-competitor-digest";
import { copy as zhTWForEngineering } from "@/content/i18n/zh-TW/for-engineering";
import { copy as jaForEngineering } from "@/content/i18n/ja/for-engineering";
import { copy as koForEngineering } from "@/content/i18n/ko/for-engineering";
import { copy as esForEngineering } from "@/content/i18n/es/for-engineering";
import { copy as ptBRForEngineering } from "@/content/i18n/pt-BR/for-engineering";
import { copy as frForEngineering } from "@/content/i18n/fr/for-engineering";
import { copy as deForEngineering } from "@/content/i18n/de/for-engineering";
import { copy as zhTWForMarketing } from "@/content/i18n/zh-TW/for-marketing";
import { copy as jaForMarketing } from "@/content/i18n/ja/for-marketing";
import { copy as koForMarketing } from "@/content/i18n/ko/for-marketing";
import { copy as esForMarketing } from "@/content/i18n/es/for-marketing";
import { copy as ptBRForMarketing } from "@/content/i18n/pt-BR/for-marketing";
import { copy as frForMarketing } from "@/content/i18n/fr/for-marketing";
import { copy as deForMarketing } from "@/content/i18n/de/for-marketing";
import { copy as zhTWDailySeoReport } from "@/content/i18n/zh-TW/use-case-daily-seo-report";
import { copy as jaDailySeoReport } from "@/content/i18n/ja/use-case-daily-seo-report";
import { copy as koDailySeoReport } from "@/content/i18n/ko/use-case-daily-seo-report";
import { copy as esDailySeoReport } from "@/content/i18n/es/use-case-daily-seo-report";
import { copy as ptBRDailySeoReport } from "@/content/i18n/pt-BR/use-case-daily-seo-report";
import { copy as frDailySeoReport } from "@/content/i18n/fr/use-case-daily-seo-report";
import { copy as deDailySeoReport } from "@/content/i18n/de/use-case-daily-seo-report";
import { copy as zhTWPrReview } from "@/content/i18n/zh-TW/use-case-pr-review";
import { copy as jaPrReview } from "@/content/i18n/ja/use-case-pr-review";
import { copy as koPrReview } from "@/content/i18n/ko/use-case-pr-review";
import { copy as esPrReview } from "@/content/i18n/es/use-case-pr-review";
import { copy as ptBRPrReview } from "@/content/i18n/pt-BR/use-case-pr-review";
import { copy as frPrReview } from "@/content/i18n/fr/use-case-pr-review";
import { copy as dePrReview } from "@/content/i18n/de/use-case-pr-review";
import { copy as zhTWSentryErrorTriage } from "@/content/i18n/zh-TW/use-case-sentry-error-triage";
import { copy as jaSentryErrorTriage } from "@/content/i18n/ja/use-case-sentry-error-triage";
import { copy as koSentryErrorTriage } from "@/content/i18n/ko/use-case-sentry-error-triage";
import { copy as esSentryErrorTriage } from "@/content/i18n/es/use-case-sentry-error-triage";
import { copy as ptBRSentryErrorTriage } from "@/content/i18n/pt-BR/use-case-sentry-error-triage";
import { copy as frSentryErrorTriage } from "@/content/i18n/fr/use-case-sentry-error-triage";
import { copy as deSentryErrorTriage } from "@/content/i18n/de/use-case-sentry-error-triage";
import { copy as zhTWWeeklyCompetitorDigest } from "@/content/i18n/zh-TW/use-case-weekly-competitor-digest";
import { copy as jaWeeklyCompetitorDigest } from "@/content/i18n/ja/use-case-weekly-competitor-digest";
import { copy as koWeeklyCompetitorDigest } from "@/content/i18n/ko/use-case-weekly-competitor-digest";
import { copy as esWeeklyCompetitorDigest } from "@/content/i18n/es/use-case-weekly-competitor-digest";
import { copy as ptBRWeeklyCompetitorDigest } from "@/content/i18n/pt-BR/use-case-weekly-competitor-digest";
import { copy as frWeeklyCompetitorDigest } from "@/content/i18n/fr/use-case-weekly-competitor-digest";
import { copy as deWeeklyCompetitorDigest } from "@/content/i18n/de/use-case-weekly-competitor-digest";
import { type AudienceSlug, type UseCaseSlug, useCaseAgentTask } from "@/i18n/use-cases";

import { dailySeoReport } from "./daily-seo-report";
import { forEngineering } from "./for-engineering";
import { forMarketing } from "./for-marketing";
import { prReview } from "./pr-review";
import { sentryErrorTriage } from "./sentry-error-triage";
import { agentTaskBundles, taskLinksSection } from "./agent-tasks";
import { weeklyCompetitorDigest } from "./weekly-competitor-digest";

// Every audience page's and use case's copy, by slug and language. English lives next to this file, the other languages
// in content/i18n/<locale>/for-<audience>.ts and use-case-<slug>.ts.

export const audienceCopy: Record<AudienceSlug, Partial<Record<Locale, GuideCopy>>> = {
  marketing: { en: forMarketing, zh: zhForMarketing, "zh-TW": zhTWForMarketing, ja: jaForMarketing, ko: koForMarketing, es: esForMarketing, "pt-BR": ptBRForMarketing, fr: frForMarketing, de: deForMarketing },
  engineering: { en: forEngineering, zh: zhForEngineering, "zh-TW": zhTWForEngineering, ja: jaForEngineering, ko: koForEngineering, es: esForEngineering, "pt-BR": ptBRForEngineering, fr: frForEngineering, de: deForEngineering },
};

const pageCopy: Record<UseCaseSlug, Partial<Record<Locale, GuideCopy>>> = {
  "daily-seo-report": { en: dailySeoReport, zh: zhDailySeoReport, "zh-TW": zhTWDailySeoReport, ja: jaDailySeoReport, ko: koDailySeoReport, es: esDailySeoReport, "pt-BR": ptBRDailySeoReport, fr: frDailySeoReport, de: deDailySeoReport },
  "weekly-competitor-digest": { en: weeklyCompetitorDigest, zh: zhWeeklyCompetitorDigest, "zh-TW": zhTWWeeklyCompetitorDigest, ja: jaWeeklyCompetitorDigest, ko: koWeeklyCompetitorDigest, es: esWeeklyCompetitorDigest, "pt-BR": ptBRWeeklyCompetitorDigest, fr: frWeeklyCompetitorDigest, de: deWeeklyCompetitorDigest },
  "sentry-error-triage": { en: sentryErrorTriage, zh: zhSentryErrorTriage, "zh-TW": zhTWSentryErrorTriage, ja: jaSentryErrorTriage, ko: koSentryErrorTriage, es: esSentryErrorTriage, "pt-BR": ptBRSentryErrorTriage, fr: frSentryErrorTriage, de: deSentryErrorTriage },
  "pr-review": { en: prReview, zh: zhPrReview, "zh-TW": zhTWPrReview, ja: jaPrReview, ko: koPrReview, es: esPrReview, "pt-BR": ptBRPrReview, fr: frPrReview, de: dePrReview },
};

// A use case that has agent × task pages (MC-386) links down to them, just before its Crewmark section.
export const useCaseCopy = Object.fromEntries(
  Object.entries(pageCopy).map(([slug, copies]) => {
    const task = useCaseAgentTask[slug as UseCaseSlug];
    if (!task) return [slug, copies];
    return [
      slug,
      Object.fromEntries(
        Object.entries(copies).map(([locale, c]) => {
          const bundle = agentTaskBundles[locale as Locale];
          if (!bundle || !c) return [locale, c];
          const at = c.sections.findIndex((s) => s.id === "crewmark");
          const sections = [...c.sections];
          sections.splice(at < 0 ? sections.length : at, 0, taskLinksSection(bundle, task));
          return [locale, { ...c, sections }];
        }),
      ),
    ];
  }),
) as Record<UseCaseSlug, Partial<Record<Locale, GuideCopy>>>;
