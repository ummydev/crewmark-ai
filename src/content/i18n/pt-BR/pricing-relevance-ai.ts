import type { GuideCopy } from "@/components/landing/guide-article";

// Brazilian Portuguese translation of /pricing/relevance-ai; the English master is
// src/content/product-pricing/relevance-ai.ts.

export const copy: GuideCopy = {
  meta: {
    title: "Relevance AI: preços, só Enterprise e plano Free encerrado",
    description:
      "A página de preços da Relevance AI lista só o plano Enterprise, com preço sob medida via vendas, e a documentação diz que o Free foi encerrado. Veja o impacto.",
  },
  breadcrumb: "Preços da Relevance AI",
  parent: { name: "Comparações", href: "/compare" },
  hero: {
    kicker: "Preços · Relevance AI",
    title: "Preços da Relevance AI: um plano Enterprise via time de vendas, e nenhum plano Free",
    lead: "A página pública de preços da Relevance AI lista um único plano, o Enterprise, com preço sob medida: você \"fala com vendas\" (\"Talk to sales\"). A documentação diz que o plano Free foi encerrado para novos cadastros e contas existentes. Para os modelos, a documentação lista dois caminhos: créditos ou a sua própria chave de LLM. Veja o que o plano Enterprise inclui, o que isso significa se você vai comprar hoje e como o preço se compara ao da Lindy, do CrewAI, do LangGraph e do Crewmark.",
    cta: "Começar",
    secondary: "Ver os planos",
    secondaryHref: "#plans",
  },
  sections: [
    {
      kind: "table",
      id: "plans",
      title: "Planos e preços da Relevance AI",
      text: [
        "Segundo relevanceai.com/pricing e a documentação da Relevance AI, conferidas em 13 de novembro de 2026. A página de preços não publica preço de nenhum plano self-service.",
      ],
      headers: ["Plano", "Preço", "O que está incluído"],
      rows: [
        [
          "Enterprise",
          "Sob medida (\"Talk to sales\": fale com vendas)",
          "Actions personalizadas e créditos de fornecedor; agentes, ferramentas, usuários e projetos ilimitados. Segundo a documentação, SSO, RBAC, logs de auditoria, avaliações de agentes, controles de horário de trabalho e gatilhos corporativos são exclusivos do Enterprise",
        ],
        ["Free", "Encerrado", "A documentação diz que o plano Free foi encerrado para novos cadastros e contas existentes"],
      ],
    },
    {
      kind: "text",
      id: "costs",
      title: "O que você paga de fato pela Relevance AI",
      points: [
        "Um contrato sob medida. O único plano listado é o Enterprise, com preço negociado com o time de vendas, então você só recebe um valor depois de falar com a Relevance AI.",
        "Modelos por créditos ou pela sua própria chave. A tabela de planos da documentação lista \"Use qualquer LLM com créditos\" (\"Use any LLMs with credits\") e \"Traga o seu próprio LLM\" (\"Bring your own LLM\", BYOK). O Enterprise inclui Actions personalizadas e créditos de fornecedor.",
        "Recursos que exigem o Enterprise: SSO, RBAC, logs de auditoria, avaliações de agentes, controles de horário de trabalho e gatilhos corporativos para Salesforce, Snowflake e Zendesk.",
        "Nenhuma forma grátis de começar. Com o plano Free encerrado para novos cadastros, não há plano de $0 para testar antes de uma conversa com vendas.",
        "Além do produto, a proposta comercial oferece um time de implantação integrado à sua equipe, que mapeia casos de uso nas semanas 1 e 2 e implanta a partir da semana 3, mais o \"Invent\", que a Relevance AI chama de engenheiro de soluções de IA 24/7.",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Preços da Relevance AI vs plataformas de agentes parecidas",
      text: [
        "Preços do site de cada produto, conferidos em 13 de novembro de 2026. Produtos que usam os seus próprios modelos também precisam de um modelo, pago ao provedor dele.",
        "Lado a lado: [Relevance AI vs Lindy](/compare/relevance-ai-vs-lindy), [CrewAI vs LangGraph](/compare/crewai-vs-langgraph). Mais opções em [alternativas à Relevance AI](/alternatives/relevance-ai).",
      ],
      headers: ["Produto", "Preço a partir de", "Opção grátis"],
      rows: [
        ["Relevance AI", "Enterprise, preço sob medida via time de vendas", "Não: o plano Free foi encerrado"],
        [
          "[Lindy](/personal-agent/lindy)",
          "$29.99/mês por usuário ativo por 3.000 créditos",
          "Sim: $50 em créditos que duram 7 dias, sem cartão de crédito",
        ],
        [
          "[CrewAI](/pricing/crewai)",
          "Framework grátis (MIT); AMP Enterprise sob medida",
          "Sim: o framework e o AMP Basic com 50 execuções de workflow por mês",
        ],
        [
          "[LangGraph](/pricing/langgraph)",
          "Framework grátis (MIT); LangSmith Plus $39/licença por mês",
          "Sim: o framework e o LangSmith Developer a $0 (1 licença, até 5k traces base por mês)",
        ],
        [
          "[Crewmark](/pricing)",
          "Grátis; Pro $5/mês e Team $10/mês em breve",
          "Sim: 1 projeto, até 3 funcionários de IA, 1 pessoa",
        ],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Com o Crewmark",
      title: "A Relevance AI cria agentes hospedados. O Crewmark roda os seus próprios agentes de programação como um time.",
      text: [
        "O Crewmark é um gerenciador de issues para um time de funcionários de IA. Cada funcionário é uma conversa do Claude Code ou do Codex no seu próprio computador, com um cargo, metas e horário de trabalho. Ele acorda com um heartbeat e pega issues de um quadro compartilhado. Os agentes rodam na assinatura do Claude ou do ChatGPT que você já paga, sem uma conta de tokens à parte.",
        "Os preços do Crewmark: Free a $0 (1 projeto, até 3 funcionários de IA, 1 pessoa). Pro a $5/mês e Team a $10/mês chegam em breve. A cobrança ainda não foi implementada, então qualquer conta pode usar o Crewmark de graça até lá. Ele é open source (GPL-3.0) e pode ser auto-hospedado.",
      ],
      steps: [
        {
          title: "Escolha um cargo",
          text: "Entre os [cargos de funcionários de IA](/ai-employees), como SEO, growth, redes sociais ou engenharia, com metas em números.",
        },
        {
          title: "Coloque o trabalho em um quadro",
          text: "Atribua issues e faça as recorrentes se repetirem; o heartbeat acorda o funcionário para pegar a próxima.",
        },
        {
          title: "Veja os planos",
          text: "[Preços do Crewmark](/pricing), e o que os agentes fazem com ele em [casos de uso do Claude Code](/use-cases/claude-code).",
        },
      ],
    },
  ],
  mid: {
    title: "Quer começar sem uma ligação de vendas?",
    text: "O plano Free do Crewmark dá ao seu Claude Code ou Codex um cargo, um heartbeat e um quadro compartilhado.",
    button: "Começar",
  },
  faq: {
    title: "Perguntas frequentes sobre os preços da Relevance AI",
    items: [
      {
        q: "A Relevance AI tem plano grátis?",
        a: "Não mais. A documentação da Relevance AI diz que o plano Free foi encerrado para novos cadastros e contas existentes.",
      },
      {
        q: "Quanto custa a Relevance AI?",
        a: "A página pública de preços lista um único plano, o Enterprise, com preço sob medida via time de vendas. Ela não publica preço de nenhum plano self-service.",
      },
      {
        q: "O que está incluído no preço Enterprise da Relevance AI?",
        a: "Actions personalizadas e créditos de fornecedor, e agentes, ferramentas, usuários e projetos ilimitados. SSO, RBAC, logs de auditoria, avaliações de agentes, controles de horário de trabalho e gatilhos corporativos são exclusivos do Enterprise.",
      },
      {
        q: "Posso usar a minha própria chave de LLM na Relevance AI?",
        a: "A tabela de planos da documentação lista \"Traga o seu próprio LLM\" (\"Bring your own LLM\", BYOK) ao lado de \"Use qualquer LLM com créditos\" (\"Use any LLMs with credits\"), então você pode usar créditos ou a chave do seu próprio provedor.",
      },
      {
        q: "Posso auto-hospedar a Relevance AI?",
        a: "Nenhuma opção de auto-hospedagem é informada. A Relevance AI é uma plataforma web hospedada e não é open source.",
      },
      {
        q: "Existe alternativa à Relevance AI com plano grátis?",
        a: "Várias têm. A Lindy dá $50 em créditos por 7 dias, o CrewAI e o LangGraph são frameworks open source grátis, e o Crewmark tem um plano Free. Veja [alternativas à Relevance AI](/alternatives/relevance-ai).",
      },
    ],
  },
  cta: {
    title: "Comece grátis com os agentes que você já tem.",
    text: "O Crewmark transforma sessões do Claude Code e do Codex em funcionários de IA com cargos, metas, horário de trabalho e um heartbeat.",
    button: "Começar",
  },
  checked:
    "Conferido em relevanceai.com/pricing, na documentação da Relevance AI e na página de preços de cada produto comparado em 13 de novembro de 2026.",
  disclaimer:
    "O Crewmark é um produto independente, sem vínculo com a Relevance AI nem com nenhuma outra empresa citada nesta página, e sem endosso delas. Os nomes de produtos são marcas de seus respectivos titulares.",
};
