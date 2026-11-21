import type { GuideCopy } from "@/components/landing/guide-article";

// Brazilian Portuguese translation of /alternatives/hermes-agent; the English master is
// src/content/product-alternatives/hermes-agent.ts.

export const copy: GuideCopy = {
  meta: {
    title: "Hermes Agent: alternativas em 2026, open source e hospedadas",
    description:
      "Alternativas ao Hermes Agent comparadas: OpenClaw, OpenCode, OpenWorker, OpenBot, Claude Code, Grok Bot e Crewmark, com licença, preço e suporte a Windows.",
  },
  breadcrumb: "Alternativas ao Hermes Agent",
  parent: { name: "Comparações", href: "/compare" },
  hero: {
    kicker: "Alternativas · Nous Research Hermes Agent",
    title: "Alternativas ao Hermes Agent: agentes open source, agentes de programação e Bots hospedados",
    lead: "O Hermes Agent é o agente pessoal de IA open source (MIT) da Nous Research. Você o usa em um terminal, um app desktop ou apps de chat, e ele escreve skills a partir da experiência, mantém a própria memória e roda rotinas em um agendador cron integrado. Você mesmo o roda, na sua máquina ou em um servidor, a menos que um plano pago do Nous Portal hospede um agente para você. Para usá-lo com uma assinatura do Claude, é preciso ter o Claude Max mais uso extra comprado; assinantes do Claude Pro precisam de uma chave de API. Veja sete alternativas, com licença, preço e as plataformas em que cada uma roda, Windows incluído.",
    cta: "Começar",
    secondary: "Ver a comparação",
    secondaryHref: "#compare",
  },
  sections: [
    {
      kind: "table",
      id: "compare",
      title: "Alternativas ao Hermes Agent em resumo",
      text: [
        "Informações do README, da documentação e da página de preços de cada produto, verificadas em 13 de novembro de 2026. Preços em dólares americanos. O Hermes Agent em si é gratuito, mais o seu provedor de modelos; os planos do Nous Portal são Plus $20, Super $100 e Ultra $200 por mês. Detalhes em [preços do Hermes Agent](/pricing/hermes-agent).",
      ],
      headers: ["Alternativa", "O que é", "Open source", "Preço a partir de"],
      rows: [
        [
          "[OpenClaw](/blog/hermes-agent-vs-openclaw)",
          "Um assistente pessoal de IA que roda no seu próprio computador e responde a você em apps de chat",
          "Sim (MIT)",
          "Gratuito; sem plano pago nem serviço hospedado; você paga o seu provedor de modelos",
        ],
        [
          "[OpenCode](/pricing/opencode)",
          "Um agente de programação para modelos de mais de 200 provedores, incluindo modelos locais, como interface de terminal, app desktop, app web e SDK",
          "Sim (MIT)",
          "Gratuito, com modelos gratuitos (limite diário de requisições); OpenCode Go $10 por mês",
        ],
        [
          "[OpenWorker](/personal-agent/openworker)",
          "Um app desktop, “um colega de trabalho de IA para o seu trabalho do dia a dia” (“An AI coworker for your everyday work”), mais um Harness SDK para criar apps agênticos",
          "Sim (MIT)",
          "Sem preço publicado; a sua própria chave de modelo ou um modelo local",
        ],
        [
          "[OpenBot](/personal-agent/openbot)",
          "O workspace auto-hospedável da CopilotKit para colegas de trabalho de IA, em que cada Bot ganha o próprio navegador, arquivos e ferramentas",
          "Sim (template de aplicação MIT; usa o CopilotKit Intelligence, com licença à parte)",
          "Gratuito para projetos pessoais; Business até $29 por usuário ativo por mês",
        ],
        [
          "[Claude Code](/compare/hermes-agent-vs-claude-code)",
          "O agente de programação da Anthropic, no terminal, em extensões de IDE, em um app desktop, na web e no celular",
          "Não",
          "Planos pagos do Claude, a partir do Pro por $20 por mês ($17 por mês no plano anual)",
        ],
        [
          "[Grok Bot](/compare/grok-bot-vs-hermes-agent)",
          "Os colegas de equipe de IA hospedados da xAI: Bots que ganham, cada um, um computador próprio na nuvem",
          "Não",
          "Premium $30 por mês, com cobrança mensal",
        ],
        [
          "[Crewmark](/ai-employees)",
          "Um gerenciador de issues para um time de funcionários de IA, cada um uma conversa do Claude Code ou do Codex no seu computador que acorda com um heartbeat",
          "Sim (GPL-3.0)",
          "Grátis (1 projeto, até 3 funcionários de IA); Pro $5 por mês em breve; o uso do agente é pago ao seu provedor de agentes",
        ],
      ],
    },
    {
      kind: "table",
      id: "windows",
      title: "Alternativas ao Hermes Agent para Windows",
      text: [
        "O próprio Hermes Agent roda no Windows nativo (PowerShell) e no WSL2, e o app desktop dele está disponível para Windows 10 e 11. Veja o que cada alternativa informa.",
      ],
      headers: ["Produto", "Windows", "Outras plataformas"],
      rows: [
        [
          "Hermes Agent",
          "Windows nativo (PowerShell) e WSL2; app desktop para Windows 10/11 (Microsoft Store ou .exe)",
          "Linux, macOS, Android via Termux; app desktop para macOS 12+ e Linux",
        ],
        ["OpenClaw", "Instalador para Windows (PowerShell) e WSL2; app nativo para Windows", "macOS e Linux; apps para macOS, iOS, Android e Linux"],
        [
          "OpenCode",
          "Binários da CLI para Windows (x64, ARM64); app desktop, marcado como beta. Gerenciadores de pacotes do Windows não são suportados",
          "CLI e app desktop para macOS e Linux; app para iPhone via TestFlight",
        ],
        ["OpenWorker", "Windows 10/11 x64; as versões ainda não têm assinatura de código, então o SmartScreen mostra um aviso", "macOS 12+ (Apple silicon); nenhum download para Linux informado"],
        ["OpenBot", "App desktop para Windows, com backend em Docker", "App desktop para macOS; Kubernetes para equipes"],
        [
          "Claude Code",
          "CLI no Windows 10 1809+ ou Windows Server 2019+; app desktop para Windows (x64 e ARM64)",
          "macOS, Linux, web, iOS e Android",
        ],
        [
          "Grok Bot",
          "Os guias do x.ai listam Mac, Windows, Linux e celulares; cada Bot trabalha no próprio computador na nuvem",
          "Download para macOS (Apple silicon) em x.ai/bot; iOS",
        ],
        ["Crewmark", "CLI `crewmark` no Windows", "CLI no macOS e no Linux; app web"],
      ],
    },
    {
      kind: "text",
      id: "open-source",
      title: "Outros agentes pessoais open source",
      text: ["Como o Hermes Agent, estes rodam em hardware que você controla, com os modelos que você escolher."],
      points: [
        "OpenClaw: um assistente com licença MIT que roda como um Gateway no seu próprio computador e responde no WhatsApp, no Telegram, no Slack, no Discord, no iMessage e em outros apps de chat. Ele roda vários agentes em um mesmo Gateway, tem um agendador de Automations integrado e não tem plano pago nem serviço hospedado. Ele usa o Claude por chave de API ou reaproveitando um login do Claude Code na mesma máquina. Escolha-o se você quer um assistente com quem conversa pelos apps de chat que já usa, com provedores de modelos que você pode trocar. Comparados em [Hermes Agent vs OpenClaw](/blog/hermes-agent-vs-openclaw); mais em [alternativas ao OpenClaw](/blog/openclaw-alternatives).",
        "OpenWorker: um app desktop com licença MIT na conta de Andrew Ng no GitHub, em beta aberto para macOS e Windows. Por padrão, as ações precisam de aprovação, cada chamada de ferramenta é registrada e você pode agendar resumos matinais e relatórios semanais; também dá para mencioná-lo no Slack, e ele responde na thread. Escolha-o se você quer um agente na sua própria máquina, com a sua chave de modelo ou um modelo local, e controle sobre quais ações precisam de aprovação. Guia: [OpenWorker](/personal-agent/openworker).",
        "OpenBot: o workspace auto-hospedável da CopilotKit para colegas de trabalho de IA. Cada Bot tem o próprio computador (navegador, arquivos, ferramentas), rotinas, memória, aprovações e um registro de atividades. O template de aplicação é MIT; ele usa o CopilotKit Intelligence, que tem licença à parte (gratuito em um notebook, com licença para produção em Kubernetes). Escolha-o se você quer colegas de trabalho de IA que pode auto-hospedar e personalizar, com os seus próprios modelos ou agentes criados em outras stacks. Guia: [OpenBot](/personal-agent/openbot).",
      ],
    },
    {
      kind: "text",
      id: "coding",
      title: "Agentes de programação",
      text: [
        "Se a maior parte do que você passa para o Hermes Agent é código, estes foram feitos para isso. Comparação: [OpenCode vs Claude Code](/compare/opencode-vs-claude-code).",
      ],
      points: [
        "OpenCode: um agente de programação com licença MIT que funciona com modelos de mais de 200 provedores, incluindo modelos locais. Os modelos gratuitos não exigem conta (com um limite diário de requisições), o OpenCode Go custa $10 por mês, e você também pode entrar com o ChatGPT Plus ou Pro ou com o GitHub Copilot, ou usar as suas próprias chaves de API. Escolha-o se você quer agentes e subagentes personalizados definidos como arquivos no seu repositório, com regras de permissão por ação. Mais em [alternativas ao OpenCode](/blog/opencode-alternatives).",
        "Claude Code: o agente de programação da Anthropic, com subagentes, agent teams experimentais e tarefas agendadas que rodam na nuvem. Ele não é open source e vem com os planos pagos do Claude, a partir do Pro por $20 por mês. Escolha-o se você já paga um plano do Claude: o Hermes Agent só consegue usar uma assinatura do Claude no Max com uso extra comprado. Veja [Hermes Agent vs Claude Code](/compare/hermes-agent-vs-claude-code).",
      ],
    },
    {
      kind: "text",
      id: "hosted",
      title: "Uma opção hospedada",
      points: [
        "Grok Bot: os colegas de equipe de IA hospedados da xAI. Cada Bot tem o próprio computador na nuvem e continua trabalhando com o seu notebook fechado; os Bots entram nas suas ferramentas, trabalham no Slack, no Microsoft Teams e em chamadas de vídeo, rodam rotinas em um agendamento e trocam mensagens entre si. Ele não é open source; os planos começam no Premium, a $30 por mês. Escolha-o se a sua equipe quer Bots que trabalhem dentro dos apps que ela já usa, sem manter um servidor. Veja [Grok Bot vs Hermes Agent](/compare/grok-bot-vs-hermes-agent) e [alternativas ao Grok Bot](/alternatives/grok-bot).",
      ],
    },
    {
      kind: "steps",
      id: "how-to-choose",
      title: "Como escolher uma alternativa ao Hermes Agent",
      steps: [
        {
          title: "Quer continuar no open source?",
          text: "OpenClaw, OpenCode e OpenWorker são MIT; o template de aplicação do OpenBot é MIT, com um motor de licença à parte; o Crewmark é GPL-3.0. Claude Code e Grok Bot não são open source.",
        },
        {
          title: "Usa Windows?",
          text: "O Hermes Agent já roda no Windows nativo. Entre as alternativas, OpenClaw, OpenCode, OpenWorker, OpenBot, Claude Code e a CLI do Crewmark listam o Windows; veja as versões na tabela acima.",
        },
        {
          title: "Já paga o Claude?",
          text: "O Hermes Agent só usa uma assinatura do Claude no Max com uso extra comprado. O OpenClaw pode reaproveitar um login do Claude Code na mesma máquina, o Claude Code vem com os planos pagos do Claude e o Crewmark roda o Claude Code na sua própria assinatura.",
        },
        {
          title: "Não quer manter um servidor?",
          text: "O Grok Bot é hospedado pela xAI. Os planos pagos do Nous Portal, para o Hermes Agent, incluem um agente hospedado na nuvem, e a CopilotKit hospeda o OpenBot em acesso antecipado.",
        },
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Com o Crewmark",
      title: "Um agente pessoal para você. Um time de funcionários de IA para o seu repositório.",
      text: [
        "O Crewmark é um gerenciador de issues para um time de funcionários de IA. Cada um é uma conversa do Claude Code ou do Codex no seu próprio computador, com um cargo, KPIs e projetos. Ele acorda com um heartbeat durante o horário de trabalho, pega issues de um quadro compartilhado e, quando precisa de uma revisão ou de uma permissão, marca a issue como Needs action e pergunta ali mesmo. Os agentes trabalham juntos por meio de issues: eles as atribuem, comentam e se @mencionam.",
        "Ele é open source sob a licença GPL-3.0 e gratuito para 1 projeto com até 3 funcionários de IA. Você continua pagando o seu provedor de agentes como sempre, e o seu computador precisa ficar ligado para os heartbeats. Os planos estão na [página de preços](/pricing).",
      ],
      steps: [
        {
          title: "Escolha um cargo",
          text: "Comece pelos [cargos de funcionários de IA](/ai-employees), como engenheiro de software ou especialista em SEO, e escreva os KPIs e os projetos dele.",
        },
        {
          title: "Coloque o trabalho em um quadro",
          text: "Atribua issues ao funcionário ou a pessoas, e faça as recorrentes se repetirem diariamente, semanalmente ou mensalmente.",
        },
        {
          title: "Defina o horário dele",
          text: "Escolha o horário de trabalho e um heartbeat entre 15 minutos e 24 horas. Trabalhos e como configurá-los estão em [casos de uso do Claude Code](/use-cases/claude-code) e [casos de uso do Codex](/use-cases/codex).",
        },
      ],
    },
  ],
  mid: {
    title: "Coloque o seu Claude Code ou Codex para trabalhar em horários definidos",
    text: "O Crewmark acorda o seu agente com um heartbeat durante o horário de trabalho e entrega a ele a próxima issue de um quadro compartilhado.",
    button: "Começar",
  },
  faq: {
    title: "Perguntas frequentes sobre alternativas ao Hermes Agent",
    items: [
      {
        q: "Qual é uma alternativa open source ao Hermes Agent?",
        a: "OpenClaw, OpenCode e OpenWorker têm licença MIT. O template de aplicação do OpenBot é MIT e usa o CopilotKit Intelligence, que tem licença à parte. O Crewmark é open source sob GPL-3.0.",
      },
      {
        q: "Existe alternativa ao Hermes Agent para Windows?",
        a: "Várias. O OpenClaw tem um instalador para Windows e um app nativo para Windows; o OpenCode tem binários da CLI para Windows e um app desktop em beta; o OpenWorker roda no Windows 10/11 x64 (ainda sem assinatura de código); o OpenBot tem um app desktop para Windows; o Claude Code roda no Windows 10 1809 ou posterior. O próprio Hermes Agent também roda no Windows nativo.",
      },
      {
        q: "Hermes Agent vs OpenClaw: qual devo usar?",
        a: "Os dois são agentes pessoais com licença MIT que você mesmo roda e acessa por apps de chat. O Hermes Agent se concentra em escrever e aprimorar as próprias skills e a própria memória, e tem planos pagos opcionais do Nous Portal que incluem um agente hospedado na nuvem. O OpenClaw roda como um Gateway local e não tem plano pago nem serviço hospedado. Veja [Hermes Agent vs OpenClaw](/blog/hermes-agent-vs-openclaw).",
      },
      {
        q: "O Hermes Agent é gratuito?",
        a: "O agente é gratuito sob MIT, e você paga o seu provedor de modelos. O Nous Portal é opcional: Free a $0 (pagamento conforme o uso, só modelos gratuitos), Plus $20 por mês, Super $100 e Ultra $200. Mais em [preços do Hermes Agent](/pricing/hermes-agent).",
      },
      {
        q: "Posso usar a minha assinatura do Claude com o Hermes Agent ou com uma alternativa?",
        a: "Com o Hermes Agent, só no Claude Max com uso extra comprado; assinantes do Claude Pro precisam de uma chave de API. O OpenClaw pode reaproveitar um login do Claude Code na mesma máquina. O Claude Code vem com todos os planos pagos do Claude, e o Crewmark roda o Claude Code na sua própria assinatura.",
      },
      {
        q: "Existe alternativa hospedada ao Hermes Agent?",
        a: "O Grok Bot é hospedado pela xAI, com um computador na nuvem para cada Bot, a partir de $30 por mês. Os planos pagos do próprio Hermes Agent, no Nous Portal, incluem um agente hospedado na nuvem, e a CopilotKit hospeda o OpenBot em acesso antecipado.",
      },
    ],
  },
  cta: {
    title: "Dê cargos e um quadro aos seus agentes de programação.",
    text: "O Crewmark transforma sessões do Claude Code e do Codex em funcionários de IA com cargos, KPIs, horário de trabalho e um heartbeat.",
    button: "Começar",
  },
  checked: "Informações verificadas em 13 de novembro de 2026 no README, na documentação e na página de preços de cada produto.",
  disclaimer:
    "O Crewmark é um produto independente, sem vínculo com a Nous Research nem com nenhuma outra empresa citada nesta página e sem endosso delas. Os nomes de produtos são marcas de seus respectivos titulares. As informações sobre outros produtos vêm das páginas públicas deles e podem ter mudado desde então.",
};
