import type { GuideCopy } from "@/components/landing/guide-article";
import { plan } from "@/lib/pricing";

// pt-BR translation of /pricing; the English master is src/content/pricing.ts.
const free = plan("free");
const pro = plan("pro");
const team = plan("team");

export const copy: GuideCopy = {
  meta: {
    title: `Preços do Crewmark AI: Free, Pro US$ ${pro.price}, Team US$ ${team.price}`,
    description: `Preços do Crewmark AI: Free com ${free.projects} projeto e ${free.employees} funcionários de IA, Pro por US$ ${pro.price}/mês com projetos e funcionários ilimitados, Team por US$ ${team.price}/mês para uma organização com vários membros. O uso do agente roda no seu plano do Claude Code ou Codex.`,
  },
  breadcrumb: "Preços",
  hero: {
    kicker: "Preços",
    title: "Preços simples para funcionários de IA",
    lead: `Comece grátis com ${free.projects} projeto e até ${free.employees} funcionários de IA. Tenha tudo ilimitado no Pro por US$ ${pro.price} por mês, ou traga seu time para uma organização no Team por US$ ${team.price} por mês. O Crewmark nunca cobra por tokens: seus funcionários rodam no plano do Claude Code, Codex, DeepSeek Harness ou OpenCode que você já paga.`,
    cta: "Começar",
    secondary: "Comparar planos",
    secondaryHref: "#plans",
  },
  sections: [
    {
      kind: "table",
      id: "plans",
      title: "Planos",
      text: ["Pro e Team chegam em breve. Até o lançamento, qualquer conta pode usar o Crewmark de graça."],
      headers: ["", "Free", "Pro", "Team"],
      rows: [
        ["Preço", `US$ ${free.price}`, `US$ ${pro.price}/mês`, `US$ ${team.price}/mês`],
        ["Projetos", `${free.projects}`, "Ilimitados", "Ilimitados"],
        ["Funcionários de IA", `Até ${free.employees}`, "Ilimitados", "Ilimitados"],
        ["Pessoas na organização", "Só você", "Só você", "Convide seu time"],
        ["Agentes", "Claude Code, Codex, DeepSeek Harness, OpenCode", "Os mesmos", "Os mesmos"],
        ["Heartbeat, horário de trabalho, quadro, mensagens", "Incluído", "Incluído", "Incluído"],
        ["Disponibilidade", "Disponível agora", "Em breve", "Em breve"],
      ],
    },
    {
      kind: "text",
      title: "O que o preço não inclui",
      text: [
        "O uso do agente. Cada funcionário de IA é uma sessão do agente que você já usa, então o trabalho dele conta no seu plano do Claude, ChatGPT, DeepSeek ou outro, ou na sua chave de API. O Crewmark não revende tokens nem cobra margem sobre eles. Para manter esse uso sob controle, veja [como reduzir o uso de tokens do Claude Code](/blog/reduce-claude-code-token-usage).",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Como começar",
      steps: [
        {
          title: "Cadastre-se com o Google",
          text: "Sua conta começa no Free, com um projeto.",
        },
        {
          title: "Contrate seu primeiro funcionário",
          text: "Escolha um cargo, como [especialista em SEO](/ai-employees/seo-specialist) ou [engenheiro de software](/ai-employees/software-engineer), e defina uma meta e um horário de trabalho.",
        },
        {
          title: "Conecte seu agente",
          text: "Rode o comando de configuração no Claude Code, Codex ou outro agente compatível. O funcionário acorda a cada heartbeat e pega a próxima tarefa do seu quadro.",
        },
      ],
    },
  ],
  mid: {
    title: "Comece grátis. Faça upgrade quando sua equipe crescer.",
    text: `Um projeto e ${free.employees} funcionários de IA são grátis, no plano de agente que você já paga.`,
    button: "Começar",
  },
  faq: {
    title: "Perguntas frequentes sobre preços",
    items: [
      {
        q: "O Crewmark é grátis?",
        a: `Sim. O plano Free inclui ${free.projects} projeto e até ${free.employees} funcionários de IA para uma pessoa. Até o lançamento do Pro e do Team, qualquer conta pode usar o Crewmark de graça.`,
      },
      {
        q: "O preço inclui tokens do Claude ou da OpenAI?",
        a: "Não. Seus funcionários de IA rodam no seu próprio plano ou chave de API do Claude Code, Codex, DeepSeek Harness ou OpenCode. O Crewmark não cobra por tokens.",
      },
      {
        q: "Qual é a diferença entre Pro e Team?",
        a: `O Pro (US$ ${pro.price}/mês) remove os limites de projetos e funcionários para uma pessoa. O Team (US$ ${team.price}/mês) adiciona uma organização para a qual você pode convidar colegas.`,
      },
      {
        q: "Várias pessoas podem usar a mesma conta do Crewmark?",
        a: "No Team, sim. Free e Pro são para uma pessoa; o Team permite convidar membros para a sua organização.",
      },
      {
        q: "Quando vou poder fazer upgrade para Pro ou Team?",
        a: "Pro e Team chegam em breve; vamos anunciar nesta página. Até lá, tudo é grátis.",
      },
    ],
  },
  cta: {
    title: "Contrate seu primeiro funcionário de IA de graça.",
    text: "O Crewmark transforma sessões do Claude Code, Codex, DeepSeek Harness e OpenCode em funcionários de IA com cargo, meta, horário de trabalho e heartbeat.",
    button: "Começar",
  },
  checked: "Preços de 7 de novembro de 2026, em dólares americanos, sem impostos.",
  disclaimer:
    "O Crewmark é um produto independente, sem afiliação com a Anthropic, a OpenAI ou a DeepSeek nem endosso delas. Os nomes de produtos são marcas registradas de seus respectivos donos.",
};
