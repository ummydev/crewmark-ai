import { copy as de } from "./de/pricing";
import { copy as es } from "./es/pricing";
import { copy as fr } from "./fr/pricing";
import { copy as ja } from "./ja/pricing";
import { copy as ko } from "./ko/pricing";
import { copy as ptBR } from "./pt-BR/pricing";
import { copy as zh } from "./zh/pricing";
import { copy as zhTW } from "./zh-TW/pricing";

// /pricing in every language but English (content/pricing.ts).
export const pricingTranslations = { zh, "zh-TW": zhTW, ja, ko, es, "pt-BR": ptBR, fr, de };
