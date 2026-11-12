import type { Locale } from "next-intl";

import { AI_EMPLOYEES_LOCALES, type AiEmployeesLocale, aiEmployees } from "@/content/ai-employees";
import { shareCard, shareCardSize } from "@/lib/share-card";

// The share card for /ai-employees: its own wording in English and Chinese, and the page's headline in the other languages.

export const alt = "What is an AI employee? An AI agent with a role, a goal and working hours";
export const size = shareCardSize;
export const contentType = "image/png";

export function generateStaticParams() {
  return AI_EMPLOYEES_LOCALES.map((locale) => ({ locale }));
}

const CARD = {
  en: {
    lines: [{ before: "What is an AI employee?" }, { before: "", marked: "An agent with a job." }],
    footer: "Role  ·  goal  ·  working hours  ·  Crewmark",
  },
  zh: {
    lines: [{ before: "什么是 AI 员工？" }, { before: "", marked: "有岗位的 AI agent。" }],
    footer: "岗位  ·  目标  ·  工作时间  ·  Crewmark",
  },
} satisfies Partial<Record<AiEmployeesLocale, unknown>>;

export default async function Image({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const c = aiEmployees[locale as AiEmployeesLocale] ?? aiEmployees.en;
  const card = (CARD as Partial<Record<AiEmployeesLocale, (typeof CARD)["en"]>>)[locale as AiEmployeesLocale] ?? {
    lines: [{ before: "", marked: c.hero.title }],
    footer: `${c.breadcrumb}  ·  Crewmark`,
  };
  return shareCard({ locale, ...card });
}
