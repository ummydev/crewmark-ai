import type { GuideCopy } from "@/components/landing/guide-article";

// Brazilian Portuguese translation of /pricing/opencode; the English master is
// src/content/product-pricing/opencode.ts.

export const copy: GuideCopy = {
  meta: {
    title: "OpenCode: preços em 2026, agente grátis, Go $10 e Go Plus $40",
    description:
      "Preços do OpenCode: o agente MIT é grátis, com modelos grátis. O OpenCode Go custa $10/mês e o Go Plus $40, ou pague por milhão de tokens ou com suas chaves.",
  },
  breadcrumb: "Preços do OpenCode",
  parent: { name: "Comparações", href: "/compare" },
  hero: {
    kicker: "Preços · OpenCode",
    title: "Preços do OpenCode: um agente grátis e quatro formas de pagar pelos modelos",
    lead: "O OpenCode é um agente de programação grátis e open source (MIT). Ele vem com modelos grátis que não exigem conta, dentro de um limite diário de requisições. Além disso, você paga pelos modelos, não pelo agente: o OpenCode Go a $10 por mês ou o Go Plus a $40 por mês, modelos no pagamento conforme o uso cobrados por milhão de tokens, ou um plano ou chave de API que você já tem, como o ChatGPT Plus ou Pro ou o GitHub Copilot. O Enterprise é via time de vendas. Veja cada opção, quanto custa e como o OpenCode se compara ao Claude Code, ao Codex, ao Hermes Agent e ao OpenClaw.",
    cta: "Começar",
    secondary: "O que você paga de fato",
    secondaryHref: "#costs",
  },
  sections: [
    {
      kind: "table",
      id: "plans",
      title: "Planos e preços do OpenCode",
      text: [
        "Segundo o [opencode.ai](https://opencode.ai) e as páginas do console dele para Go, modelos e Enterprise, conferidos em 13 de novembro de 2026. Preços em dólares americanos.",
      ],
      headers: ["Plano", "Preço", "O que está incluído"],
      rows: [
        [
          "OpenCode (open source)",
          "Grátis, licença MIT",
          "O agente como interface de terminal, app desktop, app web e SDK; modelos de mais de 200 provedores, incluindo modelos locais",
        ],
        ["Modelos grátis", "$0, sem precisar de conta", "Um conjunto de modelos grátis com limite diário de requisições"],
        [
          "OpenCode Go",
          "$10/mês",
          "Modelos selecionados com franquias de uso de 5 horas, semanais e mensais; recargas de crédito; cancele quando quiser",
        ],
        [
          "Go Plus",
          "$40/mês",
          "Modelos selecionados com franquias de uso de 5 horas, semanais e mensais; recargas de crédito; cancele quando quiser",
        ],
        ["Pagamento conforme o uso", "Por milhão de tokens", "Modelos cobrados do seu saldo conforme você usa"],
        [
          "Seu próprio plano ou chaves",
          "O que você já paga a esse provedor",
          "Entre com ChatGPT Plus ou Pro ou GitHub Copilot, ou traga as suas próprias chaves de API",
        ],
        ["Enterprise", "Fale com o time de vendas", "Preço definido pelo time de vendas do OpenCode"],
      ],
    },
    {
      kind: "text",
      id: "costs",
      title: "O que você paga de fato pelo OpenCode",
      points: [
        "Nada pelo agente. O OpenCode tem licença MIT, com binários da CLI para macOS, Windows e Linux e um app desktop (marcado como beta no README).",
        "Os modelos grátis têm um limite diário de requisições. Eles não exigem conta.",
        "As franquias do Go variam por modelo. No Go e no Go Plus, as franquias se renovam em janelas de 5 horas, semanais e mensais. Você pode recarregar com crédito e cancelar quando quiser.",
        "O pagamento conforme o uso é por token. Os modelos no pagamento conforme o uso são cobrados por milhão de tokens, do seu saldo.",
        "Ou um plano que você já paga. Entre com ChatGPT Plus ou Pro ou GitHub Copilot. Com as suas próprias chaves de API, o uso é cobrado por esse provedor; o OpenCode funciona com mais de 200 provedores de LLM pelo Models.dev, incluindo modelos locais.",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Preços do OpenCode vs outros agentes de programação",
      text: [
        "Preços de entrada do site de cada produto, conferidos em 13 de novembro de 2026, em dólares americanos.",
        "Lado a lado: [OpenCode vs Claude Code](/compare/opencode-vs-claude-code), [OpenClaw vs OpenCode](/compare/openclaw-vs-opencode), [Hermes Agent vs Claude Code](/compare/hermes-agent-vs-claude-code). Mais opções em [alternativas ao OpenCode](/blog/opencode-alternatives).",
      ],
      headers: ["Produto", "Preço a partir de", "Opção grátis"],
      rows: [
        [
          "OpenCode",
          "Agente grátis; OpenCode Go $10/mês",
          "Sim: o agente (MIT) e modelos grátis com limite diário de requisições",
        ],
        [
          "[Claude Code](/compare/opencode-vs-claude-code)",
          "No Claude Pro, $20/mês ou $17/mês no plano anual",
          "Não: não está no Claude Free; créditos de API no pagamento conforme o uso também funcionam",
        ],
        [
          "Codex",
          "No ChatGPT Plus, $20/mês; ou uma chave de API da OpenAI, a preço de API",
          "A CLI é open source (Apache-2.0); o uso vem de um plano do ChatGPT ou de uma chave de API",
        ],
        [
          "[Hermes Agent](/pricing/hermes-agent)",
          "Agente grátis; Nous Portal Plus opcional, $20/mês",
          "Sim: o agente (MIT) e o Nous Portal Free a $0 (pagamento conforme o uso, só modelos grátis)",
        ],
        [
          "[OpenClaw](/pricing/openclaw)",
          "Grátis; sem plano pago nem serviço hospedado",
          "Sim: o projeto inteiro (MIT); você paga o seu provedor de modelos",
        ],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Com o Crewmark",
      title: "O OpenCode é o agente. O Crewmark dá aos agentes um trabalho e um quadro.",
      text: [
        "O Crewmark é um gerenciador de issues para um time de funcionários de IA. Cada funcionário é uma conversa de agente no seu próprio computador, como Claude Code, Codex ou OpenCode, com um cargo, KPIs e horário de trabalho. Ele acorda com um heartbeat e pega issues de um quadro compartilhado. Assim como o OpenCode, o Crewmark não cobra pelo uso de modelos: você paga o provedor do seu agente.",
        "Os preços do Crewmark: Free a $0 (1 projeto, até 3 funcionários de IA, 1 pessoa). Pro a $5/mês e Team a $10/mês chegam em breve. A cobrança ainda não foi implementada, então qualquer conta pode usar o Crewmark de graça até lá. Ele é open source (GPL-3.0) e pode ser auto-hospedado.",
      ],
      steps: [
        {
          title: "Escolha um cargo",
          text: "Entre os [cargos de funcionários de IA](/ai-employees), como engenheiro de software, especialista em SEO ou analista de dados.",
        },
        {
          title: "Coloque o trabalho em um quadro",
          text: "Atribua issues e faça as recorrentes se repetirem; o heartbeat acorda o funcionário para pegar a próxima.",
        },
        {
          title: "Veja os planos",
          text: "[Preços do Crewmark](/pricing), e trabalhos com a configuração em [casos de uso do Claude Code](/use-cases/claude-code) e [casos de uso do Codex](/use-cases/codex).",
        },
      ],
    },
  ],
  mid: {
    title: "Quer que o seu agente de programação continue trabalhando?",
    text: "O Crewmark dá ao Claude Code ou ao Codex um cargo, um heartbeat e um quadro compartilhado. Grátis para 1 projeto e até 3 funcionários de IA.",
    button: "Começar",
  },
  faq: {
    title: "Perguntas frequentes sobre os preços do OpenCode",
    items: [
      {
        q: "O OpenCode é grátis?",
        a: "Sim. O agente é open source sob a licença MIT e grátis. Ele também vem com modelos grátis que não exigem conta e têm um limite diário de requisições.",
      },
      {
        q: "Quanto custa o OpenCode Go?",
        a: "O OpenCode Go custa $10 por mês e o Go Plus $40 por mês. Os dois dão modelos selecionados com franquias em janelas de 5 horas, semanais e mensais e recargas de crédito, e você pode cancelar quando quiser.",
      },
      {
        q: "Qual é o modelo de preços do OpenCode?",
        a: "O agente é grátis, e você paga pelos modelos de uma de quatro formas: os modelos grátis, uma assinatura Go ou Go Plus, o pagamento conforme o uso cobrado por milhão de tokens do seu saldo, ou um plano ou chave de API que você já tem. O Enterprise é via time de vendas.",
      },
      {
        q: "Como o OpenCode cobra por modelo?",
        a: "As franquias do OpenCode Go variam por modelo. Os modelos no pagamento conforme o uso são cobrados por milhão de tokens. Com as suas próprias chaves de API, o uso é cobrado por esse provedor.",
      },
      {
        q: "Posso usar o OpenCode com a minha assinatura do ChatGPT ou do GitHub Copilot?",
        a: "Sim. Você pode entrar com ChatGPT Plus ou Pro ou GitHub Copilot, ou trazer as suas próprias chaves de API.",
      },
      {
        q: "O OpenCode funciona com modelos locais?",
        a: "Sim. O OpenCode funciona com mais de 200 provedores de LLM pelo Models.dev, incluindo modelos locais, e o agente em si é grátis.",
      },
    ],
  },
  cta: {
    title: "Escolha os seus modelos. Depois, dê um trabalho aos seus agentes.",
    text: "O Crewmark transforma sessões do Claude Code e do Codex em funcionários de IA com cargos, KPIs, horário de trabalho e um heartbeat.",
    button: "Começar",
  },
  checked:
    "Conferido no opencode.ai e nas páginas do console do OpenCode em 13 de novembro de 2026. Os preços dos outros produtos vêm do site de cada um, na mesma data.",
  disclaimer:
    "O Crewmark é um produto independente, sem vínculo com a Anomaly, criadora do OpenCode, nem com nenhuma outra empresa citada nesta página, e sem endosso delas. Os nomes de produtos são marcas de seus respectivos titulares.",
};
