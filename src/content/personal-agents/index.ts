import type { Locale } from "next-intl";

import type { GuideCopy } from "@/components/landing/guide-article";
import { copy as zhBase44Superagent } from "@/content/i18n/zh/personal-agent-base44-superagent";
import { copy as zhGeminiSpark } from "@/content/i18n/zh/personal-agent-gemini-spark";
import { copy as zhGrokBot } from "@/content/i18n/zh/personal-agent-grok-bot";
import { copy as zhGrokBotRoutines } from "@/content/i18n/zh/personal-agent-grok-bot-routines";
import { copy as zhManusCue } from "@/content/i18n/zh/personal-agent-manus-cue";
import { copy as zhMetaMuse } from "@/content/i18n/zh/personal-agent-meta-muse";
import { copy as zhMetaMuseUseCases } from "@/content/i18n/zh/personal-agent-meta-muse-use-cases";
import type { PersonalAgentSlug } from "@/i18n/personal-agents";

import { base44Superagent } from "./base44-superagent";
import { geminiSpark } from "./gemini-spark";
import { grokBot } from "./grok-bot";
import { grokBotRoutines } from "./grok-bot-routines";
import { manusCue } from "./manus-cue";
import { metaMuse } from "./meta-muse";
import { metaMuseUseCases } from "./meta-muse-use-cases";

// Every personal agent guide's copy, by slug and language. English lives next to this file, the other languages in
// content/i18n/<locale>/personal-agent-<slug>.ts.

export const personalAgentsCopy: Record<PersonalAgentSlug, Partial<Record<Locale, GuideCopy>>> = {
  "meta-muse": { en: metaMuse, zh: zhMetaMuse },
  "meta-muse-use-cases": { en: metaMuseUseCases, zh: zhMetaMuseUseCases },
  "grok-bot": { en: grokBot, zh: zhGrokBot },
  "grok-bot-routines": { en: grokBotRoutines, zh: zhGrokBotRoutines },
  "manus-cue": { en: manusCue, zh: zhManusCue },
  "gemini-spark": { en: geminiSpark, zh: zhGeminiSpark },
  "base44-superagent": { en: base44Superagent, zh: zhBase44Superagent },
};
