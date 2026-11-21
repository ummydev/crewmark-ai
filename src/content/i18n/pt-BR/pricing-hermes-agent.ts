import type { GuideCopy } from "@/components/landing/guide-article";

// Brazilian Portuguese translation of /pricing/hermes-agent; the English master is
// src/content/product-pricing/hermes-agent.ts.

export const copy: GuideCopy = {
  meta: {
    title: "Hermes Agent: preços, agente grátis e planos do Nous Portal",
    description:
      "O Hermes Agent é grátis e tem licença MIT. O Nous Portal opcional custa $0, $20, $100 ou $200 por mês. O que cada plano inclui e o que você paga a mais.",
  },
  breadcrumb: "Preços do Hermes Agent",
  parent: { name: "Comparações", href: "/compare" },
  hero: {
    kicker: "Preços · Nous Research",
    title: "Preços do Hermes Agent: um agente grátis e uma assinatura opcional do Nous Portal",
    lead: "O Hermes Agent é grátis: a Nous Research o publica sob a licença MIT, e você paga o seu provedor de modelos. Se preferir obter os modelos da Nous, o Nous Portal opcional tem quatro planos: Free a $0, Plus a $20 por mês, Super a $100 e Ultra a $200, e os pagos incluem um agente hospedado na nuvem. Veja o que cada plano inclui, o que você paga a mais e como ele se compara ao OpenClaw, ao OpenCode, ao OpenWorker e ao Grok Bot.",
    cta: "Começar",
    secondary: "Ver os planos",
    secondaryHref: "#plans",
  },
  sections: [
    {
      kind: "table",
      id: "plans",
      title: "Planos do Hermes Agent e do Nous Portal",
      text: [
        "Segundo hermes-agent.nousresearch.com e portal.nousresearch.com, conferidos em 13 de novembro de 2026. Os preços são mensais; nenhum preço anual é publicado. Você não precisa de um plano do Nous Portal para usar o agente.",
      ],
      headers: ["Plano", "Preço", "O que está incluído"],
      rows: [
        [
          "Hermes Agent",
          "Grátis, licença MIT",
          "O agente: interface de terminal, app desktop, apps de chat por um único gateway, skills, memória, um agendador cron e o Bot Mode. Traga qualquer provedor de modelos",
        ],
        ["Nous Portal Free", "$0", "Pagamento conforme o uso; só modelos grátis"],
        ["Nous Portal Plus", "$20/mês", "Modelos grátis e pagos; um agente hospedado na nuvem (4 GB de RAM, 25 GB de disco)"],
        [
          "Nous Portal Super",
          "$100/mês",
          "5× o uso do Plus; modelos grátis e pagos; um agente hospedado na nuvem (4 GB de RAM, 100 GB de disco)",
        ],
        [
          "Nous Portal Ultra",
          "$200/mês",
          "10× o uso do Plus; modelos grátis e pagos; um agente hospedado na nuvem (8 GB de RAM, 100 GB de disco)",
        ],
      ],
    },
    {
      kind: "text",
      id: "costs",
      title: "O que você paga de fato para rodar o Hermes Agent",
      points: [
        "Seu provedor de modelos. Você troca de provedor com `hermes model`: Nous Portal, OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, AWS Bedrock, Ollama Cloud, LM Studio, endpoints personalizados e outros. Com uma chave de API, esse provedor cobra de você.",
        "Uma assinatura do Claude só funciona no Claude Max com uso extra comprado. A documentação diz que \"assinantes do Claude Pro não podem usar este caminho\" (\"Claude Pro subscribers cannot use this path\"), então no Pro você precisa de uma chave de API.",
        "O login do ChatGPT/Codex funciona por código de dispositivo. Quais planos do ChatGPT funcionam, e como o uso conta nos limites do plano, \"não está documentado no momento\" (\"not currently documented.\").",
        "Um lugar para rodar. O Hermes Agent é instalado localmente ou em um servidor: o README cita \"uma VPS de $5, um cluster de GPUs ou infraestrutura serverless\" (\"a $5 VPS, a GPU cluster, or serverless infrastructure\"). Os seis backends de terminal são local, Docker, SSH, Modal, Daytona e Vercel Sandbox.",
        "Ou um plano pago do Nous Portal, que inclui um agente hospedado na nuvem (tamanhos na tabela acima).",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Preços do Hermes Agent vs agentes parecidos",
      text: [
        "Preços do site de cada produto, conferidos em 13 de novembro de 2026.",
        "Lado a lado: [Hermes Agent vs OpenClaw](/blog/hermes-agent-vs-openclaw), [Hermes Agent vs Claude Code](/compare/hermes-agent-vs-claude-code), [Grok Bot vs Hermes Agent](/compare/grok-bot-vs-hermes-agent), [Multica vs Hermes Agent](/compare/multica-vs-hermes-agent). Mais opções em [alternativas ao Hermes Agent](/alternatives/hermes-agent).",
      ],
      headers: ["Produto", "Preço a partir de", "Opção grátis"],
      rows: [
        [
          "Hermes Agent",
          "Grátis; Nous Portal Plus opcional, $20/mês",
          "Sim: o agente (MIT) e o Nous Portal Free a $0",
        ],
        ["[OpenClaw](/pricing/openclaw)", "Grátis; você paga o seu provedor de modelos", "Sim: o projeto inteiro (MIT)"],
        [
          "[OpenCode](/pricing/opencode)",
          "Agente grátis; OpenCode Go $10/mês, Go Plus $40/mês",
          "Sim: modelos grátis com limite diário de requisições, sem precisar de conta",
        ],
        [
          "[OpenWorker](/personal-agent/openworker)",
          "Sem preço publicado; a sua própria chave de modelo ou um modelo local",
          "Sim: o app (MIT)",
        ],
        [
          "[Grok Bot](/personal-agent/grok-bot)",
          "Premium $30/mês; Super $100, Ultra $200",
          "Nenhuma informada",
        ],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Com o Crewmark",
      title: "O Hermes Agent é o seu agente pessoal. O Crewmark comanda um time de agentes de programação.",
      text: [
        "O Crewmark é um gerenciador de issues para um time de funcionários de IA. Cada funcionário é uma conversa do Claude Code ou do Codex no seu próprio computador, com um cargo, metas e horário de trabalho. Ele acorda com um heartbeat e pega issues de um quadro compartilhado. Os agentes rodam na assinatura do Claude ou do ChatGPT que você já paga, sem uma conta de tokens à parte.",
        "Os preços do Crewmark: Free a $0 (1 projeto, até 3 funcionários de IA, 1 pessoa). Pro a $5/mês e Team a $10/mês chegam em breve. A cobrança ainda não foi implementada, então qualquer conta pode usar o Crewmark de graça até lá. Ele é open source (GPL-3.0) e pode ser auto-hospedado.",
      ],
      steps: [
        { title: "Escolha um cargo", text: "Entre os [cargos de funcionários de IA](/ai-employees), com metas em números." },
        {
          title: "Coloque o trabalho em um quadro",
          text: "Atribua issues e faça as recorrentes se repetirem; o heartbeat acorda o funcionário para pegar a próxima.",
        },
        {
          title: "Veja os planos",
          text: "[Preços do Crewmark](/pricing), e o que os agentes fazem com ele em [casos de uso do Claude Code](/use-cases/claude-code) e [casos de uso do Codex](/use-cases/codex).",
        },
      ],
    },
  ],
  mid: {
    title: "Quer agentes que continuem tocando um trabalho?",
    text: "O Crewmark dá ao seu Claude Code ou Codex um cargo, um heartbeat e um quadro compartilhado.",
    button: "Começar",
  },
  faq: {
    title: "Perguntas frequentes sobre os preços do Hermes Agent",
    items: [
      {
        q: "O Hermes Agent é grátis?",
        a: "Sim. O agente é open source sob a licença MIT. Você paga o seu provedor de modelos ou, se quiser, assina o Nous Portal.",
      },
      {
        q: "Quanto custa o Hermes Agent por mês?",
        a: "O agente custa $0. O Nous Portal opcional tem o Free a $0, o Plus a $20 por mês, o Super a $100 (5× o uso do Plus) e o Ultra a $200 (10× o uso do Plus). Nenhum preço anual é publicado.",
      },
      {
        q: "Preciso de uma assinatura do Nous Portal para usar o Hermes Agent?",
        a: "Não. O Nous Portal é um dos muitos provedores que você pode escolher com `hermes model`, ao lado de OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, AWS Bedrock, modelos locais e endpoints personalizados.",
      },
      {
        q: "Posso usar a minha assinatura do Claude com o Hermes Agent?",
        a: "Só no Claude Max com uso extra comprado. A documentação diz que assinantes do Claude Pro não podem usar o caminho da assinatura, então no Pro você precisa de uma chave de API.",
      },
      {
        q: "Algum plano de preços do Hermes Agent inclui hospedagem?",
        a: "Os planos pagos do Nous Portal incluem um agente hospedado na nuvem: 4 GB de RAM e 25 GB de disco no Plus, 4 GB e 100 GB no Super, 8 GB e 100 GB no Ultra. Fora isso, você o roda na sua própria máquina ou servidor.",
      },
      {
        q: "Posso usar a minha assinatura do ChatGPT com o Hermes Agent?",
        a: "O login do ChatGPT/Codex funciona por código de dispositivo, mas a documentação diz que quais planos do ChatGPT funcionam, e como o uso conta nos limites do plano, não está documentado no momento.",
      },
    ],
  },
  cta: {
    title: "Dê aos seus agentes de programação um cargo e um horário.",
    text: "O Crewmark transforma sessões do Claude Code e do Codex em funcionários de IA com cargos, metas, horário de trabalho e um heartbeat.",
    button: "Começar",
  },
  checked:
    "Conferido em hermes-agent.nousresearch.com, portal.nousresearch.com, na documentação e no README do Hermes Agent no GitHub e na página de preços de cada produto comparado em 13 de novembro de 2026.",
  disclaimer:
    "O Crewmark é um produto independente, sem vínculo com a Nous Research nem com nenhuma outra empresa citada nesta página, e sem endosso delas. Os nomes de produtos são marcas de seus respectivos titulares.",
};
