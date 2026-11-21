import type { Locale } from "next-intl";

import type { GuideCopy } from "@/components/landing/guide-article";
import { copy as zhDevin } from "@/content/i18n/zh/pricing-devin";
import { copy as zhTWDevin } from "@/content/i18n/zh-TW/pricing-devin";
import { copy as jaDevin } from "@/content/i18n/ja/pricing-devin";
import { copy as koDevin } from "@/content/i18n/ko/pricing-devin";
import { copy as esDevin } from "@/content/i18n/es/pricing-devin";
import { copy as ptBRDevin } from "@/content/i18n/pt-BR/pricing-devin";
import { copy as frDevin } from "@/content/i18n/fr/pricing-devin";
import { copy as deDevin } from "@/content/i18n/de/pricing-devin";
import { copy as zhFactory } from "@/content/i18n/zh/pricing-factory";
import { copy as zhTWFactory } from "@/content/i18n/zh-TW/pricing-factory";
import { copy as jaFactory } from "@/content/i18n/ja/pricing-factory";
import { copy as koFactory } from "@/content/i18n/ko/pricing-factory";
import { copy as esFactory } from "@/content/i18n/es/pricing-factory";
import { copy as ptBRFactory } from "@/content/i18n/pt-BR/pricing-factory";
import { copy as frFactory } from "@/content/i18n/fr/pricing-factory";
import { copy as deFactory } from "@/content/i18n/de/pricing-factory";
import { copy as zhOpencode } from "@/content/i18n/zh/pricing-opencode";
import { copy as zhTWOpencode } from "@/content/i18n/zh-TW/pricing-opencode";
import { copy as jaOpencode } from "@/content/i18n/ja/pricing-opencode";
import { copy as koOpencode } from "@/content/i18n/ko/pricing-opencode";
import { copy as esOpencode } from "@/content/i18n/es/pricing-opencode";
import { copy as ptBROpencode } from "@/content/i18n/pt-BR/pricing-opencode";
import { copy as frOpencode } from "@/content/i18n/fr/pricing-opencode";
import { copy as deOpencode } from "@/content/i18n/de/pricing-opencode";
import { copy as zhCrewai } from "@/content/i18n/zh/pricing-crewai";
import { copy as zhTWCrewai } from "@/content/i18n/zh-TW/pricing-crewai";
import { copy as jaCrewai } from "@/content/i18n/ja/pricing-crewai";
import { copy as koCrewai } from "@/content/i18n/ko/pricing-crewai";
import { copy as esCrewai } from "@/content/i18n/es/pricing-crewai";
import { copy as ptBRCrewai } from "@/content/i18n/pt-BR/pricing-crewai";
import { copy as frCrewai } from "@/content/i18n/fr/pricing-crewai";
import { copy as deCrewai } from "@/content/i18n/de/pricing-crewai";
import { copy as zhLanggraph } from "@/content/i18n/zh/pricing-langgraph";
import { copy as zhTWLanggraph } from "@/content/i18n/zh-TW/pricing-langgraph";
import { copy as jaLanggraph } from "@/content/i18n/ja/pricing-langgraph";
import { copy as koLanggraph } from "@/content/i18n/ko/pricing-langgraph";
import { copy as esLanggraph } from "@/content/i18n/es/pricing-langgraph";
import { copy as ptBRLanggraph } from "@/content/i18n/pt-BR/pricing-langgraph";
import { copy as frLanggraph } from "@/content/i18n/fr/pricing-langgraph";
import { copy as deLanggraph } from "@/content/i18n/de/pricing-langgraph";
import { copy as zhOpenclaw } from "@/content/i18n/zh/pricing-openclaw";
import { copy as zhTWOpenclaw } from "@/content/i18n/zh-TW/pricing-openclaw";
import { copy as jaOpenclaw } from "@/content/i18n/ja/pricing-openclaw";
import { copy as koOpenclaw } from "@/content/i18n/ko/pricing-openclaw";
import { copy as esOpenclaw } from "@/content/i18n/es/pricing-openclaw";
import { copy as ptBROpenclaw } from "@/content/i18n/pt-BR/pricing-openclaw";
import { copy as frOpenclaw } from "@/content/i18n/fr/pricing-openclaw";
import { copy as deOpenclaw } from "@/content/i18n/de/pricing-openclaw";
import { copy as zhHermesAgent } from "@/content/i18n/zh/pricing-hermes-agent";
import { copy as zhTWHermesAgent } from "@/content/i18n/zh-TW/pricing-hermes-agent";
import { copy as jaHermesAgent } from "@/content/i18n/ja/pricing-hermes-agent";
import { copy as koHermesAgent } from "@/content/i18n/ko/pricing-hermes-agent";
import { copy as esHermesAgent } from "@/content/i18n/es/pricing-hermes-agent";
import { copy as ptBRHermesAgent } from "@/content/i18n/pt-BR/pricing-hermes-agent";
import { copy as frHermesAgent } from "@/content/i18n/fr/pricing-hermes-agent";
import { copy as deHermesAgent } from "@/content/i18n/de/pricing-hermes-agent";
import { copy as zhRelevanceAi } from "@/content/i18n/zh/pricing-relevance-ai";
import { copy as zhTWRelevanceAi } from "@/content/i18n/zh-TW/pricing-relevance-ai";
import { copy as jaRelevanceAi } from "@/content/i18n/ja/pricing-relevance-ai";
import { copy as koRelevanceAi } from "@/content/i18n/ko/pricing-relevance-ai";
import { copy as esRelevanceAi } from "@/content/i18n/es/pricing-relevance-ai";
import { copy as ptBRRelevanceAi } from "@/content/i18n/pt-BR/pricing-relevance-ai";
import { copy as frRelevanceAi } from "@/content/i18n/fr/pricing-relevance-ai";
import { copy as deRelevanceAi } from "@/content/i18n/de/pricing-relevance-ai";
import { copy as zhConductor } from "@/content/i18n/zh/pricing-conductor";
import { copy as zhTWConductor } from "@/content/i18n/zh-TW/pricing-conductor";
import { copy as jaConductor } from "@/content/i18n/ja/pricing-conductor";
import { copy as koConductor } from "@/content/i18n/ko/pricing-conductor";
import { copy as esConductor } from "@/content/i18n/es/pricing-conductor";
import { copy as ptBRConductor } from "@/content/i18n/pt-BR/pricing-conductor";
import { copy as frConductor } from "@/content/i18n/fr/pricing-conductor";
import { copy as deConductor } from "@/content/i18n/de/pricing-conductor";
import type { PricingSlug } from "@/i18n/product-pages";

import { copy as devin } from "./devin";
import { copy as factory } from "./factory";
import { copy as opencode } from "./opencode";
import { copy as crewai } from "./crewai";
import { copy as langgraph } from "./langgraph";
import { copy as openclaw } from "./openclaw";
import { copy as hermesAgent } from "./hermes-agent";
import { copy as relevanceAi } from "./relevance-ai";
import { copy as conductor } from "./conductor";

// Every "<product> pricing" page's copy (MC-439), by slug and language. English lives next to this file, the other
// languages in content/i18n/<locale>/pricing-<slug>.ts.

export const pricingCopy: Record<PricingSlug, Partial<Record<Locale, GuideCopy>>> = {
  "devin": { en: devin, zh: zhDevin, "zh-TW": zhTWDevin, ja: jaDevin, ko: koDevin, es: esDevin, "pt-BR": ptBRDevin, fr: frDevin, de: deDevin },
  "factory": { en: factory, zh: zhFactory, "zh-TW": zhTWFactory, ja: jaFactory, ko: koFactory, es: esFactory, "pt-BR": ptBRFactory, fr: frFactory, de: deFactory },
  "opencode": { en: opencode, zh: zhOpencode, "zh-TW": zhTWOpencode, ja: jaOpencode, ko: koOpencode, es: esOpencode, "pt-BR": ptBROpencode, fr: frOpencode, de: deOpencode },
  "crewai": { en: crewai, zh: zhCrewai, "zh-TW": zhTWCrewai, ja: jaCrewai, ko: koCrewai, es: esCrewai, "pt-BR": ptBRCrewai, fr: frCrewai, de: deCrewai },
  "langgraph": { en: langgraph, zh: zhLanggraph, "zh-TW": zhTWLanggraph, ja: jaLanggraph, ko: koLanggraph, es: esLanggraph, "pt-BR": ptBRLanggraph, fr: frLanggraph, de: deLanggraph },
  "openclaw": { en: openclaw, zh: zhOpenclaw, "zh-TW": zhTWOpenclaw, ja: jaOpenclaw, ko: koOpenclaw, es: esOpenclaw, "pt-BR": ptBROpenclaw, fr: frOpenclaw, de: deOpenclaw },
  "hermes-agent": { en: hermesAgent, zh: zhHermesAgent, "zh-TW": zhTWHermesAgent, ja: jaHermesAgent, ko: koHermesAgent, es: esHermesAgent, "pt-BR": ptBRHermesAgent, fr: frHermesAgent, de: deHermesAgent },
  "relevance-ai": { en: relevanceAi, zh: zhRelevanceAi, "zh-TW": zhTWRelevanceAi, ja: jaRelevanceAi, ko: koRelevanceAi, es: esRelevanceAi, "pt-BR": ptBRRelevanceAi, fr: frRelevanceAi, de: deRelevanceAi },
  "conductor": { en: conductor, zh: zhConductor, "zh-TW": zhTWConductor, ja: jaConductor, ko: koConductor, es: esConductor, "pt-BR": ptBRConductor, fr: frConductor, de: deConductor },
};
