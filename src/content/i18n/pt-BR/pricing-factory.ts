import type { GuideCopy } from "@/components/landing/guide-article";

// Brazilian Portuguese translation of /pricing/factory; the English master is
// src/content/product-pricing/factory.ts.

export const copy: GuideCopy = {
  meta: {
    title: "Factory AI: preços e planos (Free, Pro $20, Plus, Max, Teams)",
    description:
      "Preços da Factory AI: Free com sua própria inferência, Pro $20, Plus $100 e Max $200 por mês, e Teams. Limites de uso, crédito Extra Usage e cobrança de tokens.",
  },
  breadcrumb: "Preços da Factory",
  parent: { name: "Comparações", href: "/compare" },
  hero: {
    kicker: "Preços · Factory",
    title: "Preços da Factory AI: planos dos Droids, limites de uso e tokens",
    lead: "A Factory faz os Droids, agentes de programação que rodam no Factory App, na Droid CLI, no CI e em computadores na nuvem hospedados pela Factory. O plano Free custa $0 se você trouxer a sua própria inferência: entre com ChatGPT, GitHub Copilot ou OpenRouter, ou conecte as suas próprias chaves de API. Os planos pagos vão do Pro, a $20 por mês, ao Max, a $200 por mês, por pessoa, e o Teams custa $60 por mês por equipe mais $40 por mês por pessoa. Os planos pagos têm limites de uso em janelas móveis, e o Extra Usage é um crédito pré-pago adicional. Veja os planos, como o uso e os tokens são cobrados e como o preço se compara ao do Devin, do Claude Code, do Codex e do OpenCode.",
    cta: "Começar",
    secondary: "O que você paga de fato",
    secondaryHref: "#costs",
  },
  sections: [
    {
      kind: "table",
      id: "plans",
      title: "Planos e preços da Factory",
      text: [
        "Segundo a página de preços do [factory.com](https://factory.com) e a documentação de preços da Factory, conferidas em 13 de novembro de 2026. Preços em dólares americanos por mês (\"/mo\" na página da Factory).",
      ],
      headers: ["Plano", "Preço", "O que está incluído"],
      rows: [
        [
          "Free",
          "$0/mês por pessoa",
          "Traga a sua própria inferência: entre com ChatGPT, GitHub Copilot ou OpenRouter, ou conecte as suas próprias chaves de API ou um endpoint personalizado",
        ],
        [
          "Pro",
          "$20/mês por pessoa",
          "App desktop, CLI e SDK, disponibilidade completa de modelos; limites de uso em janelas móveis de 5 horas, 7 dias e 30 dias",
        ],
        ["Plus", "$100/mês por pessoa", "Cerca de 5x o uso do Pro; os mesmos limites de uso em janelas móveis"],
        ["Max", "$200/mês por pessoa", "Cerca de 10x o uso do Pro; os mesmos limites de uso em janelas móveis"],
        ["Teams", "$60/mês por equipe mais $40/mês por pessoa", "Até 10 licenças"],
        ["Business e Enterprise", "Fale com o time de vendas", "Opções de implantação on-premise no Enterprise"],
      ],
    },
    {
      kind: "text",
      id: "costs",
      title: "O que você paga de fato pela Factory",
      points: [
        "Inferência no Free. O plano Free funciona com a inferência que você traz: um login do ChatGPT, do GitHub Copilot ou do OpenRouter, ou as suas próprias chaves de API ou endpoint personalizado. Os tokens são cobrados por esse provedor ou plano.",
        "Standard Usage nos planos pagos. Pro, Plus e Max têm, cada um, limites de uso em janelas móveis de 5 horas, 7 dias e 30 dias. O Plus dá cerca de 5x o uso do Pro, e o Max cerca de 10x. O Standard Usage não usado não passa para o período seguinte.",
        "Extra Usage. Mais uso vem do Extra Usage, um crédito pré-pago com mínimo de $10 e sem validade.",
        "As Missions exigem Extra Usage. As Missions, que planejam funcionalidades e marcos, precisam do Extra Usage ativado e pausam quando atingem um limite de uso.",
        "O Workstreams usa mais tokens. O Workstreams (beta), no Pro, Plus, Max e Teams, usa mais tokens do que uma sessão única. Ele ainda não está no Business nem no Enterprise.",
        "Modelos. A Factory lista \"todos os principais modelos de fronteira e de pesos abertos, incluindo as versões mais recentes do GPT-5, Claude Opus e Sonnet, Gemini\" (\"all leading frontier and open-weight models, including the latest versions of GPT-5, Claude Opus and Sonnet, Gemini\"), um pool \"Droid Core\" de modelos de pesos abertos e as suas próprias chaves de API ou modelos locais (BYOK).",
        "Licenças. Pro, Plus e Max têm preço por pessoa. O Teams é limitado a 10 licenças; Business e Enterprise são via time de vendas.",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Preços da Factory vs outros agentes de programação",
      text: [
        "Preços de entrada da página de preços de cada produto, conferidos em 13 de novembro de 2026, em dólares americanos.",
        "Lado a lado: [Factory vs Claude Code](/compare/factory-vs-claude-code). Mais opções em [alternativas à Factory](/alternatives/factory).",
      ],
      headers: ["Produto", "Preço a partir de", "Opção grátis"],
      rows: [
        ["Factory", "Free $0 com a sua própria inferência; Pro $20/mês", "Sim: Free se você trouxer a sua própria inferência"],
        ["[Devin](/pricing/devin)", "Free $0; Pro $20/mês", "Sim: plano Free com uma cota leve"],
        [
          "[Claude Code](/compare/factory-vs-claude-code)",
          "No Claude Pro, $20/mês ou $17/mês no plano anual",
          "Não: não está no Claude Free; créditos de API no pagamento conforme o uso também funcionam",
        ],
        [
          "Codex",
          "No ChatGPT Plus, $20/mês; ou uma chave de API da OpenAI, a preço de API",
          "O ChatGPT Free ($0) lista o GPT-6 Luna no app para desktop, \"sujeito a liberação gradual\" (\"subject to rollout\")",
        ],
        [
          "[OpenCode](/pricing/opencode)",
          "Agente grátis; OpenCode Go $10/mês, Go Plus $40/mês",
          "Sim: o agente (MIT) e modelos grátis com limite diário de requisições",
        ],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Com o Crewmark",
      title: "Mantenha a assinatura que você já tem. Dê ao seu agente um cargo e um quadro.",
      text: [
        "A Factory vende um agente próprio, com planos e limites de uso. O Crewmark é um gerenciador de issues para um time de funcionários de IA. Cada funcionário é uma conversa do Claude Code ou do Codex no seu próprio computador, com um cargo, KPIs e horário de trabalho. Ele acorda com um heartbeat e pega issues de um quadro compartilhado. O uso do agente continua na assinatura do Claude ou do ChatGPT que você já paga, sem uma conta de tokens à parte.",
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
    title: "Já paga pelo Claude ou pelo ChatGPT?",
    text: "O Crewmark transforma o seu Claude Code ou Codex em funcionários de IA com cargos, um heartbeat e um quadro compartilhado.",
    button: "Começar",
  },
  faq: {
    title: "Perguntas frequentes sobre os preços da Factory AI",
    items: [
      {
        q: "A Factory AI é grátis?",
        a: "Sim, se você trouxer a sua própria inferência. O plano Free custa $0 por pessoa: entre com ChatGPT, GitHub Copilot ou OpenRouter, ou conecte as suas próprias chaves de API ou um endpoint personalizado.",
      },
      {
        q: "Quanto custa a Factory AI por mês?",
        a: "Por pessoa, o Pro custa $20, o Plus $100 e o Max $200 por mês. O Teams custa $60 por mês por equipe mais $40 por mês por pessoa, para até 10 licenças. Business e Enterprise têm preço negociado com o time de vendas.",
      },
      {
        q: "Qual é o modelo de preços da Factory AI?",
        a: "Um plano por pessoa com Standard Usage sob limites de uso em janelas móveis de 5 horas, 7 dias e 30 dias, mais o Extra Usage opcional: um crédito pré-pago com mínimo de $10 que não expira. O Standard Usage não usado não passa para o período seguinte.",
      },
      {
        q: "Como a Factory AI cobra pelos tokens?",
        a: "No Free, os tokens são cobrados pela conta ou chave de API que você traz. No Pro, Plus e Max, o uso de modelos conta no Standard Usage do seu plano e nos limites de uso dele, e o Extra Usage é o crédito pré-pago para usar mais. O Workstreams usa mais tokens do que uma sessão única.",
      },
      {
        q: "A Factory AI tem preços para empresas?",
        a: "Business e Enterprise são via time de vendas, sem preço publicado. O Enterprise oferece opções de implantação on-premise. O Teams, a $60 por mês mais $40 por pessoa, é limitado a 10 licenças.",
      },
      {
        q: "A Factory AI é open source?",
        a: "Não. Não há código-fonte nem licença open source publicados para a Droid CLI ou o Factory App; github.com/Factory-AI/factory contém um README e documentação. Opções open source estão em [alternativas à Factory](/alternatives/factory).",
      },
    ],
  },
  cta: {
    title: "Compare o preço. Depois, dê um trabalho ao seu agente.",
    text: "O Crewmark transforma sessões do Claude Code e do Codex em funcionários de IA com cargos, KPIs, horário de trabalho e um heartbeat.",
    button: "Começar",
  },
  checked:
    "Conferido em factory.com/pricing e na documentação de preços da Factory em 13 de novembro de 2026. Os preços dos outros produtos vêm da página de preços de cada um, na mesma data.",
  disclaimer:
    "O Crewmark é um produto independente, sem vínculo com a Factory nem com nenhuma outra empresa citada nesta página, e sem endosso delas. Os nomes de produtos são marcas de seus respectivos titulares.",
};
