import type { GuideCopy } from "@/components/landing/guide-article";

// Brazilian Portuguese translation of /pricing/openclaw; the English master is
// src/content/product-pricing/openclaw.ts.

export const copy: GuideCopy = {
  meta: {
    title: "OpenClaw: preços (é grátis) e o que você paga de verdade",
    description:
      "O OpenClaw é grátis, com licença MIT, sem plano pago nem serviço hospedado. Você paga o seu provedor de modelos: uma chave de API ou uma assinatura que já tem.",
  },
  breadcrumb: "Preços do OpenClaw",
  parent: { name: "Comparações", href: "/compare" },
  hero: {
    kicker: "Preços · OpenClaw",
    title: "Preços do OpenClaw: grátis e open source, você paga o seu provedor de modelos",
    lead: "O OpenClaw não custa nada. Ele tem licença MIT, e o README diz que o projeto \"não tem plano pago, serviço hospedado nem token\" (\"has no paid tier, hosted service, or token.\"). O que você paga é o modelo por trás dele: uma chave de API cobrada pelo seu provedor, ou uma assinatura que você já tem, como um login do ChatGPT ou do Claude Code. Você roda o Gateway na sua própria máquina. Veja o que isso significa na prática e como ele se compara ao Hermes Agent, ao OpenCode, ao OpenWorker e ao Claude Code.",
    cta: "Começar",
    secondary: "O que você paga de fato",
    secondaryHref: "#costs",
  },
  sections: [
    {
      kind: "table",
      id: "plans",
      title: "Planos e preços do OpenClaw",
      text: [
        "Segundo o README do OpenClaw no GitHub e o docs.openclaw.ai, conferidos em 13 de novembro de 2026. Existe uma única edição, e ela é grátis.",
      ],
      headers: ["Plano", "Preço", "O que está incluído"],
      rows: [
        [
          "OpenClaw (open source)",
          "Grátis, licença MIT",
          "O Gateway, a Control UI, a CLI e a TUI; apps nativos para macOS, iOS, Android, Windows e Linux; canais de chat como WhatsApp, Telegram, Slack, Discord e iMessage; vários agentes por Gateway; o agendador de Automations",
        ],
        ["Plano pago", "Nenhum", "O README diz que não há plano pago"],
        ["Serviço hospedado", "Nenhum", "Você mesmo roda e mantém o Gateway"],
        [
          "Uso de modelos",
          "Cobrado pelo seu provedor de modelos",
          "Uma chave de API, ou uma assinatura que você já tem (OAuth do ChatGPT/Codex, ou um login do Claude Code no mesmo host)",
        ],
      ],
    },
    {
      kind: "text",
      id: "costs",
      title: "O que você paga de fato para rodar o OpenClaw",
      points: [
        "Seu provedor de modelos. Os modelos são plugins: OpenAI, Anthropic, Google Gemini, OpenRouter, xAI e outros. Com uma chave de API, esse provedor cobra de você o que o OpenClaw usar.",
        "Ou uma assinatura que você já paga. O OpenClaw pode entrar com o OAuth do ChatGPT/Codex da OpenAI e pode usar o Claude reaproveitando um login do Claude Code no mesmo host (também com `claude setup-token`).",
        "O login do Claude Code só funciona quando o OpenClaw roda no mesmo host desse login. Instalações em contêiner (por exemplo, Podman) não montam `~/.claude`, então a documentação recomenda uma chave de API nesse caso.",
        "Servidores de modelos locais também estão na lista de provedores: Ollama, LM Studio e vLLM.",
        "Sua própria máquina. O Gateway é um daemon em um hardware que você controla, instalado no macOS, Linux, Windows ou WSL2, ou com Docker ou Nix. O OpenClaw não oferece hospedagem própria.",
        "Nada para o próprio OpenClaw. O projeto não tem plano pago, então não há nada para comprar dele.",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Preços do OpenClaw vs agentes parecidos",
      text: [
        "Preços do site de cada produto, conferidos em 13 de novembro de 2026. Todos eles também precisam de um modelo, pago ao provedor dele, a menos que um plano abaixo o inclua.",
        "Lado a lado: [OpenClaw vs Claude Code](/compare/openclaw-vs-claude-code), [OpenClaw vs OpenCode](/compare/openclaw-vs-opencode), [Hermes Agent vs OpenClaw](/blog/hermes-agent-vs-openclaw). Mais opções em [alternativas ao OpenClaw](/blog/openclaw-alternatives).",
      ],
      headers: ["Produto", "Preço a partir de", "Opção grátis"],
      rows: [
        ["OpenClaw", "Grátis; você paga o seu provedor de modelos", "Sim: o projeto inteiro (MIT)"],
        [
          "[Hermes Agent](/pricing/hermes-agent)",
          "Agente grátis; Nous Portal Plus opcional, $20/mês",
          "Sim: o agente (MIT) e o Nous Portal Free a $0",
        ],
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
          "[Claude Code](/compare/openclaw-vs-claude-code)",
          "Claude Pro $20/mês, ou $17/mês no plano anual",
          "Não: não está no Claude Free; créditos de API no pagamento conforme o uso também funcionam",
        ],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Com o Crewmark",
      title: "O OpenClaw responde a você no chat. O Crewmark dá um trabalho aos seus agentes de programação.",
      text: [
        "O Crewmark é um gerenciador de issues para um time de funcionários de IA. Cada funcionário é uma conversa do Claude Code ou do Codex no seu próprio computador, com um cargo, metas e horário de trabalho. Ele acorda com um heartbeat e pega issues de um quadro compartilhado. Assim como o OpenClaw, ele não cobra pelo uso de modelos: os agentes rodam na assinatura do Claude ou do ChatGPT que você já paga.",
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
          text: "[Preços do Crewmark](/pricing), e o que os agentes fazem com ele em [casos de uso do Claude Code](/use-cases/claude-code).",
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
    title: "Perguntas frequentes sobre os preços do OpenClaw",
    items: [
      {
        q: "O OpenClaw é grátis?",
        a: "Sim. O OpenClaw é open source sob a licença MIT, e o README diz que o projeto \"não tem plano pago, serviço hospedado nem token\" (\"has no paid tier, hosted service, or token.\"). Você paga só o seu provedor de modelos.",
      },
      {
        q: "O OpenClaw tem plano de preços?",
        a: "Não. Existe uma única edição, grátis. A única conta é a do modelo que você conecta: uma chave de API cobrada pelo provedor dela, ou uma assinatura que você já tem.",
      },
      {
        q: "Qual é o modelo de preços do OpenClaw?",
        a: "Software grátis mais um modelo que você traz. Os modelos são plugins (OpenAI, Anthropic, Gemini, OpenRouter, xAI, Ollama, LM Studio, vLLM e outros), então o custo depende do provedor e do plano que você escolher.",
      },
      {
        q: "Posso usar o OpenClaw com a minha assinatura do Claude?",
        a: "Sim, reaproveitando um login do Claude Code no mesmo host (ou com `claude setup-token`). Instalações em contêiner, como o Podman, não montam `~/.claude`, então a documentação recomenda uma chave de API nesse caso.",
      },
      {
        q: "Existe uma versão hospedada do OpenClaw?",
        a: "Não pelo projeto. Você roda o Gateway na sua própria máquina (macOS, Linux, Windows ou WSL2, ou com Docker ou Nix) e cuida você mesmo da manutenção.",
      },
      {
        q: "Quem paga o desenvolvimento do OpenClaw?",
        a: "A OpenClaw Foundation, uma entidade 501(c)(3) independente que emprega o time principal e assina as versões. O README diz \"A OpenAI é doadora, não dona\" (\"OpenAI is a donor, not an owner.\").",
      },
    ],
  },
  cta: {
    title: "Mantenha a sua conta de modelos. Dê um trabalho aos seus agentes.",
    text: "O Crewmark transforma sessões do Claude Code e do Codex em funcionários de IA com cargos, metas, horário de trabalho e um heartbeat.",
    button: "Começar",
  },
  checked:
    "Conferido no README do OpenClaw no GitHub, no docs.openclaw.ai e na página de preços de cada produto comparado em 13 de novembro de 2026.",
  disclaimer:
    "O Crewmark é um produto independente, sem vínculo com a OpenClaw Foundation nem com nenhuma outra empresa citada nesta página, e sem endosso delas. Os nomes de produtos são marcas de seus respectivos titulares.",
};
