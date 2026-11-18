import type { Locale } from "next-intl";

import type { GuideCopy } from "@/components/landing/guide-article";
import { copy as zhForEngineering } from "@/content/i18n/zh/for-engineering";
import { copy as zhForMarketing } from "@/content/i18n/zh/for-marketing";
import { copy as zhDailySeoReport } from "@/content/i18n/zh/use-case-daily-seo-report";
import { copy as zhPrReview } from "@/content/i18n/zh/use-case-pr-review";
import { copy as zhSentryErrorTriage } from "@/content/i18n/zh/use-case-sentry-error-triage";
import { copy as zhWeeklyCompetitorDigest } from "@/content/i18n/zh/use-case-weekly-competitor-digest";
import type { AudienceSlug, UseCaseSlug } from "@/i18n/use-cases";

import { dailySeoReport } from "./daily-seo-report";
import { forEngineering } from "./for-engineering";
import { forMarketing } from "./for-marketing";
import { prReview } from "./pr-review";
import { sentryErrorTriage } from "./sentry-error-triage";
import { weeklyCompetitorDigest } from "./weekly-competitor-digest";

// Every audience page's and use case's copy, by slug and language. English lives next to this file, the other languages
// in content/i18n/<locale>/for-<audience>.ts and use-case-<slug>.ts.

export const audienceCopy: Record<AudienceSlug, Partial<Record<Locale, GuideCopy>>> = {
  marketing: { en: forMarketing, zh: zhForMarketing },
  engineering: { en: forEngineering, zh: zhForEngineering },
};

export const useCaseCopy: Record<UseCaseSlug, Partial<Record<Locale, GuideCopy>>> = {
  "daily-seo-report": { en: dailySeoReport, zh: zhDailySeoReport },
  "weekly-competitor-digest": { en: weeklyCompetitorDigest, zh: zhWeeklyCompetitorDigest },
  "sentry-error-triage": { en: sentryErrorTriage, zh: zhSentryErrorTriage },
  "pr-review": { en: prReview, zh: zhPrReview },
};
