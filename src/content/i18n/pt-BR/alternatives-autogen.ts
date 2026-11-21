import type { GuideCopy } from "@/components/landing/guide-article";

// Brazilian Portuguese translation of /alternatives/autogen; the English master is
// src/content/product-alternatives/autogen.ts.

export const copy: GuideCopy = {
  meta: {
    title: "AutoGen: alternativas em 2026 (CrewAI, LangGraph e mais)",
    description:
      "O README do AutoGen diz que a Microsoft não o mantém mais. Compare CrewAI, LangGraph, OpenClaw, Hermes Agent, Paperclip e Crewmark por licença e preço.",
  },
  breadcrumb: "Alternativas ao AutoGen",
  parent: { name: "Comparações", href: "/compare" },
  hero: {
    kicker: "Alternativas · Microsoft AutoGen",
    title: "Alternativas ao AutoGen em 2026: frameworks e agentes para migrar",
    lead: "O AutoGen é o framework open source da Microsoft para aplicações multiagente em Python e .NET, com o AutoGen Studio como interface no-code para prototipagem. Quando verificamos, em 13 de novembro de 2026, o README dizia: “Este projeto foi arquivado e não é mais mantido ativamente pela Microsoft” (“This project has been archived and is no longer actively maintained by Microsoft.”). O README indica aos novos usuários o Microsoft Agent Framework, que a Microsoft chama de “sucessor direto” (“direct successor”) do AutoGen. Esta página apresenta esse sucessor e outras sete opções, de frameworks de código a agentes que trabalham sozinhos, com licença, preço e para quem cada uma serve.",
    cta: "Começar",
    secondary: "Ver a comparação",
    secondaryHref: "#compare",
  },
  sections: [
    {
      kind: "table",
      id: "compare",
      title: "Alternativas ao AutoGen em resumo",
      text: [
        "Informações do README, da documentação e da página de preços de cada produto, verificadas em 13 de novembro de 2026. Preços em dólares americanos. O AutoGen em si é gratuito e open source (código sob MIT), e você paga o seu provedor de modelos.",
      ],
      headers: ["Alternativa", "O que é", "Open source", "Preço a partir de"],
      rows: [
        [
          "[CrewAI](/alternatives/crewai)",
          "Um framework em Python para crews de agentes baseados em papéis e flows orientados a eventos, mais a plataforma comercial CrewAI AMP",
          "Framework sim (MIT); o AMP é comercial",
          "Framework gratuito, mais o seu provedor de modelos; AMP Basic gratuito (50 execuções de workflows por mês)",
        ],
        [
          "[LangGraph](/alternatives/langgraph)",
          "O framework da LangChain para agentes stateful de longa duração construídos como um grafo, em Python e JS/TS",
          "Framework sim (MIT); o LangSmith é comercial",
          "Framework gratuito; LangSmith Developer $0 por licença por mês, Plus $39 por licença por mês",
        ],
        [
          "[OpenClaw](/blog/openclaw-alternatives)",
          "Um assistente pessoal de IA que roda no seu próprio computador e responde a você em apps de chat",
          "Sim (MIT)",
          "Gratuito; sem plano pago nem serviço hospedado; você paga o seu provedor de modelos",
        ],
        [
          "[Hermes Agent](/alternatives/hermes-agent)",
          "O agente pessoal da Nous Research que escreve e aprimora as próprias skills, usado em um terminal, um app desktop ou apps de chat",
          "Sim (MIT)",
          "Agente gratuito, mais o seu provedor de modelos; Nous Portal Plus opcional, $20 por mês",
        ],
        [
          "[Paperclip](/alternatives/paperclip)",
          "Um servidor auto-hospedado com interface web que comanda agentes que você traz (Claude Code, Codex, OpenClaw e outros) como uma empresa, com organograma, orçamentos e tarefas",
          "Sim (MIT)",
          "Versão auto-hospedada gratuita; sem preços publicados; versão na nuvem em lista de espera",
        ],
        [
          "[Claude Code agent teams](/blog/claude-code-agent-teams)",
          "Um recurso experimental do Claude Code em que uma sessão líder cria colegas que compartilham uma lista de tarefas e trocam mensagens entre si",
          "Não",
          "Vem com o Claude Code nos planos pagos do Claude, a partir do Pro por $20 por mês ($17 por mês no plano anual)",
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
      kind: "text",
      id: "successor",
      title: "O que substituiu o AutoGen: Microsoft Agent Framework",
      text: [
        "A resposta da própria Microsoft é o Agent Framework. O Microsoft Learn diz: “O Agent Framework é o sucessor direto, criado pelas mesmas equipes” (“The Agent Framework is the direct successor, created by the same teams”), e há um guia de migração a partir do AutoGen. O restante desta página trata de outros projetos.",
      ],
      points: [
        "O README do AutoGen recomenda o Agent Framework para novos projetos e diz que o AutoGen agora é “mantido pela comunidade” (“now community-managed”).",
        "Sobre uso em produção, o README diz: “O AutoGen foi desenvolvido para pesquisa e experimentação e, enquanto passa para o status de arquivado, continuamos a desaconselhar o uso em produção” (“AutoGen was developed for research and experimentation and as it transitions to archived, we continue to advise against production use.”).",
        "O AutoGen Studio, a interface no-code dele, “não foi pensado para ser um app pronto para produção” (“is not meant to be a production-ready app”), segundo o mesmo README.",
      ],
    },
    {
      kind: "text",
      id: "frameworks",
      title: "Frameworks multiagente para quem escreve código",
      text: [
        "Os mais próximos do AutoGen: bibliotecas open source que você chama do seu próprio código, com agentes que trabalham juntos. Lado a lado: [CrewAI vs AutoGen](/compare/crewai-vs-autogen) e [CrewAI vs LangGraph](/compare/crewai-vs-langgraph).",
      ],
      points: [
        "CrewAI: um framework em Python com licença MIT. Cada agente é definido com um papel, um objetivo e uma história de fundo; com a delegação ativada, os agentes passam trabalho uns aos outros e fazem perguntas entre si, e os Flows acrescentam controle passo a passo orientado a eventos. O CrewAI AMP, a plataforma comercial, acrescenta um Studio no-code, tracing, agendamento por cron e deploy. Escolha-o se você escreve em Python (3.10 ou posterior, abaixo da 3.14) e quer agentes baseados em papéis dentro da sua própria aplicação. Preços: [preços do CrewAI](/pricing/crewai).",
        "LangGraph: o framework da LangChain, com licença MIT, para agentes stateful de longa duração, definidos como um grafo de estado, nós e arestas em Python ou JS/TS. Ele pausa para receber input humano com interrupts e retoma depois de falhas; o LangSmith acrescenta tracing, avaliação e deploy no Agent Server. Escolha-o se você quer controle de baixo nível sobre cada etapa. Preços: [preços do LangGraph](/pricing/langgraph).",
      ],
    },
    {
      kind: "text",
      id: "agents",
      title: "Agentes prontos que trabalham sozinhos",
      text: [
        "O AutoGen é uma biblioteca para criar agentes. Estes dois são agentes que você instala e roda, com agendadores integrados. Comparados em [Hermes Agent vs OpenClaw](/blog/hermes-agent-vs-openclaw).",
      ],
      points: [
        "OpenClaw: um assistente pessoal com licença MIT que roda como um Gateway no seu próprio computador e responde no WhatsApp, no Telegram, no Slack, no Discord e em outros apps de chat. Vários agentes podem rodar em um mesmo Gateway, e um preset de equipe cria um coordenador com agentes pesquisador, redator e revisor. Escolha-o se você quer um assistente em um hardware que você controla, com provedores de modelos que você pode trocar. Mais em [alternativas ao OpenClaw](/blog/openclaw-alternatives).",
        "Hermes Agent: o agente pessoal da Nous Research, com licença MIT. Ele escreve skills a partir da experiência, mantém a própria memória e tem um agendador cron integrado; no Bot Mode, Bots com nome, cada um com os próprios modelos e rotinas, trocam mensagens diretamente entre si. Escolha-o se você quer vários agentes especialistas que pode acessar por um terminal, um app desktop e apps de chat. Mais em [alternativas ao Hermes Agent](/alternatives/hermes-agent).",
      ],
    },
    {
      kind: "text",
      id: "teams",
      title: "Agentes de programação trabalhando em equipe",
      text: [
        "Estes coordenam agentes de programação que já existem, em vez de agentes que você cria. Veja [Paperclip vs CrewAI](/compare/paperclip-vs-crewai) e [Claude Code agent teams vs OpenClaw](/compare/claude-code-agent-teams-vs-openclaw).",
      ],
      points: [
        "Paperclip: um servidor Node.js auto-hospedado com interface web, sob licença MIT, que comanda um time de agentes como uma empresa: um organograma com cargos e orçamentos, issues atribuídas a agentes ou pessoas e rotinas por cron, webhook ou gatilhos via API. Ele controla agentes que você traz, como Claude Code, Codex, OpenClaw e Hermes, por meio de adaptadores. Escolha-o se você quer muitos agentes diferentes trabalhando para uma mesma meta, com limites de gastos, no seu próprio servidor.",
        "Claude Code agent teams: um recurso experimental do Claude Code, desativado por padrão. Uma sessão líder cria colegas, instâncias separadas do Claude Code que compartilham uma lista de tarefas e trocam mensagens diretamente entre si, e você pode escrever para qualquer um deles. O uso de tokens é maior porque cada colega é uma instância separada do Claude. Escolha-o se você já paga um plano do Claude e quer um grupo de agentes que conversam entre si em uma tarefa de programação.",
      ],
    },
    {
      kind: "steps",
      id: "how-to-choose",
      title: "Como escolher uma alternativa ao AutoGen",
      steps: [
        {
          title: "Mantém um app AutoGen?",
          text: "Veja o Microsoft Agent Framework e o guia de migração a partir do AutoGen no Microsoft Learn. Esse é o caminho que o README do AutoGen recomenda.",
        },
        {
          title: "Quer continuar escrevendo código de agentes?",
          text: "CrewAI e LangGraph são bibliotecas com licença MIT, como o AutoGen. O CrewAI é uma biblioteca Python; o LangGraph existe em Python e JS/TS.",
        },
        {
          title: "Precisa de um lugar hospedado para rodar e rastrear agentes?",
          text: "O AutoGen não tem serviço hospedado. O LangSmith Plus ($39 por licença por mês) inclui um Small Agent Server; o plano Basic do CrewAI AMP é gratuito para 50 execuções de workflows por mês.",
        },
        {
          title: "Quer agentes que continuem trabalhando sem você?",
          text: "O OpenClaw e o Hermes Agent têm agendadores integrados, o Paperclip roda rotinas por cron, webhooks ou API, e o Crewmark acorda o Claude Code ou o Codex com um heartbeat durante o horário de trabalho. O README do AutoGen não menciona agendamento.",
        },
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Com o Crewmark",
      title: "O AutoGen cria apps de agentes. O Crewmark dá um trabalho aos seus agentes de programação.",
      text: [
        "O Crewmark não é um framework para criar aplicações multiagente. É um gerenciador de issues para um time de funcionários de IA: cada um é uma conversa do Claude Code ou do Codex no seu próprio computador, com um cargo, KPIs e projetos. Ele acorda com um heartbeat durante o horário de trabalho, pega issues de um quadro compartilhado e, quando precisa de uma revisão ou de uma permissão, marca a issue como Needs action e pergunta ali mesmo.",
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
    title: "Agentes que pegam a próxima tarefa sozinhos",
    text: "O Crewmark acorda a sua sessão do Claude Code ou do Codex com um heartbeat e entrega a ela a próxima issue de um quadro compartilhado.",
    button: "Começar",
  },
  faq: {
    title: "Perguntas frequentes sobre alternativas ao AutoGen",
    items: [
      {
        q: "O que substituiu o AutoGen?",
        a: "O Microsoft Agent Framework. O README do AutoGen indica esse caminho aos novos usuários, e o Microsoft Learn o chama de “sucessor direto, criado pelas mesmas equipes” (“the direct successor, created by the same teams”), com um guia de migração a partir do AutoGen.",
      },
      {
        q: "O Microsoft AutoGen ainda é mantido?",
        a: "Não pela Microsoft. Em 13 de novembro de 2026, o README dizia: “Este projeto foi arquivado e não é mais mantido ativamente pela Microsoft. A Microsoft não oferece correções de bugs, correções de segurança, novos recursos nem suporte para este projeto” (“This project has been archived and is no longer actively maintained by Microsoft. Microsoft is not providing bug fixes, security fixes, new features, or support for this project.”). O README também diz que o projeto agora é mantido pela comunidade.",
      },
      {
        q: "Existe alternativa gratuita ao AutoGen?",
        a: "Várias são gratuitas e open source: os frameworks CrewAI e LangGraph, o OpenClaw, o Hermes Agent e o Paperclip auto-hospedado, todos sob MIT. Em todos eles você paga o seu provedor de modelos. O Crewmark é open source sob GPL-3.0 e tem um plano gratuito para 1 projeto com até 3 funcionários de IA.",
      },
      {
        q: "Qual é uma alternativa ao AutoGen Studio?",
        a: "O README do AutoGen diz que o AutoGen Studio “não foi pensado para ser um app pronto para produção” (“is not meant to be a production-ready app”). Para um construtor visual, o CrewAI AMP tem um Studio no-code, e o plano Basic dele é gratuito, com editor visual e 50 execuções de workflows por mês. Para o LangGraph, o LangSmith Studio é a ferramenta da LangChain para prototipagem visual.",
      },
      {
        q: "O AutoGen é gratuito?",
        a: "Sim. O código é open source sob MIT (a documentação, sob CC-BY-4.0), e você paga o seu provedor de modelos. O README não menciona nenhum serviço hospedado ou pago do AutoGen.",
      },
      {
        q: "Quais alternativas ao AutoGen deixam os agentes conversarem entre si?",
        a: "Os agentes do CrewAI podem delegar trabalho e fazer perguntas uns aos outros quando a delegação está ativada; o LangGraph usa subagentes, handoffs e roteadores que você desenha no grafo; o OpenClaw tem acesso entre agentes em um mesmo Gateway; os Bots do Hermes Agent trocam mensagens no Bot Mode; os colegas dos Claude Code agent teams trocam mensagens diretamente. No Crewmark, os agentes trabalham juntos por meio de issues: eles as atribuem, comentam e fazem @menções.",
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
    "O Crewmark é um produto independente, sem vínculo com a Microsoft nem com nenhuma outra empresa citada nesta página e sem endosso delas. Os nomes de produtos são marcas de seus respectivos titulares. As informações sobre outros produtos vêm das páginas públicas deles e podem ter mudado desde então.",
};
