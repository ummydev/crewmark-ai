import { copy as de } from "./de/skills-hub";
import { copy as es } from "./es/skills-hub";
import { copy as fr } from "./fr/skills-hub";
import { copy as ja } from "./ja/skills-hub";
import { copy as ko } from "./ko/skills-hub";
import { copy as ptBR } from "./pt-BR/skills-hub";
import { copy as zh } from "./zh/skills-hub";
import { copy as zhTW } from "./zh-TW/skills-hub";

// /skills in every language but English (content/skills-hub.ts).
export const skillsHubTranslations = { zh: zh, "zh-TW": zhTW, ja: ja, ko: ko, es: es, "pt-BR": ptBR, fr: fr, de: de };
