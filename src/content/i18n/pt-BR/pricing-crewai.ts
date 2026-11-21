import type { GuideCopy } from "@/components/landing/guide-article";

// Brazilian Portuguese translation of /pricing/crewai; the English master is
// src/content/product-pricing/crewai.ts.

export const copy: GuideCopy = {
  meta: {
    title: "CrewAI: preços, framework grátis, AMP Basic e Enterprise",
    description:
      "Preços do CrewAI: o framework MIT é grátis, o CrewAI AMP Basic é grátis com 50 execuções de workflow por mês e o Enterprise é sob medida. E o custo dos modelos.",
  },
  breadcrumb: "Preços do CrewAI",
  parent: { name: "Comparações", href: "/compare" },
  hero: {
    kicker: "Preços · Frameworks de agentes",
    title: "Preços do CrewAI: o framework grátis, os planos do AMP e o custo dos modelos",
    lead: "O framework open source em Python do CrewAI é grátis sob a licença MIT; você paga o seu provedor de modelos, que por padrão é a API da OpenAI. O CrewAI AMP, a plataforma da empresa para criar, implantar e rastrear crews e flows, tem dois planos: o Basic, grátis com 50 execuções de workflow por mês, e o Enterprise, com preço sob medida. A CrewAI não publica moeda, período de cobrança nem preço por excedente. Veja o que cada plano inclui, o que mais você paga e como o CrewAI se compara ao LangGraph, ao AutoGen, à Relevance AI e ao Paperclip.",
    cta: "Começar",
    secondary: "O que você paga de fato",
    secondaryHref: "#costs",
  },
  sections: [
    {
      kind: "table",
      id: "plans",
      title: "Planos e preços do CrewAI",
      text: [
        "Segundo a página de preços do [crewai.com](https://crewai.com) e o README do crewAI, conferidos em 13 de novembro de 2026. A CrewAI lista os planos da plataforma como \"Grátis\" (\"Free\") e \"Sob medida\" (\"Custom\"), sem moeda nem período de cobrança.",
      ],
      headers: ["Plano", "Preço", "O que está incluído"],
      rows: [
        [
          "Framework CrewAI (open source)",
          "Grátis, licença MIT",
          "Uma biblioteca Python para crews de agentes baseados em papéis e flows orientados a eventos, executada no seu próprio código e na sua própria infraestrutura",
        ],
        [
          "AMP Basic",
          "Grátis",
          "Editor visual e copiloto de IA, integração com o GitHub, 50 execuções de workflow/mês, agendamento por cron, intervenção humana (human-in-the-loop)",
        ],
        [
          "AMP Enterprise",
          "Sob medida (sem preço publicado)",
          "Implantação na nuvem da CrewAI, na sua própria VPC ou na sua própria infraestrutura; SSO (MS Entra, Okta), RBAC, VPC dedicada e conectores corporativos; agendamento por cron e intervenção humana (human-in-the-loop)",
        ],
      ],
    },
    {
      kind: "text",
      id: "costs",
      title: "O que você paga de fato pelo CrewAI",
      points: [
        "Seu provedor de modelos. Os agentes do CrewAI chamam as APIs de modelos que você configura: \"Por padrão, seus agentes vão usar a API da OpenAI\" (\"By default your agents will use the OpenAI API\"). Outros provedores e modelos locais (Ollama, LM Studio) são suportados.",
        "Execuções de workflow no AMP Basic. O plano grátis da plataforma é limitado a 50 execuções de workflow por mês. A CrewAI não publica preço por excedente.",
        "Recursos do Enterprise. SSO, RBAC, VPC dedicada e conectores corporativos são exclusivos do Enterprise, com preço sob medida.",
        "Onde roda. O framework é uma biblioteca Python (Python `>=3.10, <3.14`) no seu próprio código e na sua própria infraestrutura. O AMP é um app web em app.crewai.com; o Enterprise pode ser implantado na nuvem da CrewAI, na sua própria VPC ou na sua própria infraestrutura.",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Preços do CrewAI vs outros frameworks e plataformas de agentes",
      text: [
        "Preços da página de preços ou do README de cada produto, conferidos em 13 de novembro de 2026, em dólares americanos. O README do AutoGen diz \"Este projeto foi arquivado e não é mais mantido ativamente pela Microsoft\" (\"This project has been archived and is no longer actively maintained by Microsoft\"), e a Microsoft aponta o Agent Framework como sucessor direto. Em 13 de novembro de 2026, a documentação da Relevance AI diz que o plano Free foi encerrado para novos cadastros e contas existentes.",
        "Lado a lado: [CrewAI vs LangGraph](/compare/crewai-vs-langgraph), [CrewAI vs AutoGen](/compare/crewai-vs-autogen), [Paperclip vs CrewAI](/compare/paperclip-vs-crewai). Mais opções em [alternativas ao CrewAI](/alternatives/crewai).",
      ],
      headers: ["Produto", "Preço a partir de", "Opção grátis"],
      rows: [
        [
          "CrewAI",
          "Framework grátis; AMP Basic grátis; Enterprise sob medida",
          "Sim: o framework (MIT) e o AMP Basic com 50 execuções de workflow/mês",
        ],
        [
          "[LangGraph](/pricing/langgraph)",
          "Framework grátis; LangSmith Plus $39/licença por mês",
          "Sim: o framework (MIT) e o LangSmith Developer a $0 para 1 licença",
        ],
        [
          "[AutoGen](/alternatives/autogen)",
          "Grátis (open source); o README não menciona serviço pago",
          "Sim: código sob MIT; o README diz que ele foi arquivado e não é mais mantido ativamente pela Microsoft",
        ],
        [
          "[Relevance AI](/pricing/relevance-ai)",
          "Enterprise, preço sob medida via time de vendas",
          "Não: a documentação diz que o plano Free foi encerrado",
        ],
        [
          "[Paperclip](/compare/paperclip-vs-crewai)",
          "Auto-hospedado grátis; sem preços publicados",
          "Sim: auto-hospedado (MIT); uma versão na nuvem está em lista de espera",
        ],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Com o Crewmark",
      title: "Não está criando um app em Python? Dê um cargo ao Claude Code ou ao Codex.",
      text: [
        "O CrewAI serve para criar workflows multiagente no seu próprio código Python. O Crewmark é um gerenciador de issues para um time de funcionários de IA, para quem já usa o Claude Code ou o Codex e quer que os agentes continuem tocando um trabalho sem precisar de um prompt a cada vez. Cada funcionário tem um cargo, KPIs e horário de trabalho, acorda com um heartbeat e pega issues de um quadro compartilhado. O uso do agente continua na assinatura do Claude ou do ChatGPT que você já paga.",
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
    title: "Já usa o Claude Code ou o Codex?",
    text: "O Crewmark o transforma em funcionários de IA com cargos, um heartbeat e um quadro compartilhado. Grátis para 1 projeto e até 3 funcionários de IA.",
    button: "Começar",
  },
  faq: {
    title: "Perguntas frequentes sobre os preços do CrewAI",
    items: [
      {
        q: "O CrewAI é grátis?",
        a: "O framework é: ele é open source sob a licença MIT, e você paga só o seu provedor de modelos. O plano CrewAI AMP Basic também é grátis, com 50 execuções de workflow por mês.",
      },
      {
        q: "Quais são os planos de preço do CrewAI AMP?",
        a: "Dois: o Basic, listado como \"Grátis\" (\"Free\"), com editor visual e copiloto de IA, integração com o GitHub e 50 execuções de workflow por mês; e o Enterprise, listado como \"Sob medida\" (\"Custom\"), sem preço. A CrewAI não publica moeda, período de cobrança nem preço por excedente.",
      },
      {
        q: "Quanto custa o CrewAI Enterprise?",
        a: "A CrewAI não publica um preço; o Enterprise é \"Sob medida\" (\"Custom\"). Ele acrescenta implantação na nuvem da CrewAI, na sua própria VPC ou na sua própria infraestrutura, SSO com MS Entra ou Okta, RBAC e conectores corporativos.",
      },
      {
        q: "Qual é o modelo de preços do CrewAI?",
        a: "Um framework open source grátis que você mesmo roda, mais a plataforma AMP com preço por plano: o Basic é grátis e limitado a 50 execuções de workflow por mês, e o Enterprise é sob medida. O uso de modelos é cobrado à parte pelo seu provedor de modelos.",
      },
      {
        q: "Quanto custa o CrewAI na nuvem?",
        a: "O AMP é um app web em app.crewai.com, e o Basic é grátis com 50 execuções de workflow por mês. A implantação na nuvem da CrewAI, na sua própria VPC ou na sua própria infraestrutura aparece no Enterprise, com preço sob medida.",
      },
      {
        q: "Preciso de uma chave da OpenAI para usar o CrewAI?",
        a: "Por padrão, os agentes do CrewAI usam a API da OpenAI. Outros provedores e modelos locais, como Ollama e LM Studio, são suportados.",
      },
    ],
  },
  cta: {
    title: "Crie uma crew em código, ou dê um trabalho aos seus agentes.",
    text: "O Crewmark transforma sessões do Claude Code e do Codex em funcionários de IA com cargos, KPIs, horário de trabalho e um heartbeat.",
    button: "Começar",
  },
  checked:
    "Conferido em crewai.com/pricing, na documentação da plataforma da CrewAI e no README do crewAI em 13 de novembro de 2026. Os preços dos outros produtos vêm das páginas de cada um, na mesma data.",
  disclaimer:
    "O Crewmark é um produto independente, sem vínculo com a crewAI, Inc. nem com nenhuma outra empresa citada nesta página, e sem endosso delas. Os nomes de produtos são marcas de seus respectivos titulares.",
};
