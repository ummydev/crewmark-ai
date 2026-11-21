import type { GuideCopy } from "@/components/landing/guide-article";

// Brazilian Portuguese translation of /alternatives/langgraph; the English master is
// src/content/product-alternatives/langgraph.ts.

export const copy: GuideCopy = {
  meta: {
    title: "LangGraph: alternativas em 2026 (CrewAI, AutoGen e mais)",
    description:
      "Alternativas ao LangGraph comparadas: CrewAI, AutoGen, OpenClaw, Hermes Agent, Paperclip, Claude Code agent teams e Crewmark, por licença, preço e perfil.",
  },
  breadcrumb: "Alternativas ao LangGraph",
  parent: { name: "Comparações", href: "/compare" },
  hero: {
    kicker: "Alternativas · LangChain LangGraph",
    title: "Alternativas ao LangGraph em 2026: frameworks, agentes prontos e times de agentes",
    lead: "O LangGraph é o framework open source (MIT) da LangChain para agentes stateful de longa duração: você define um workflow como um grafo de estado, nós e arestas, em Python ou JS/TS. Ele é de baixo nível por design e “não impõe prompts nem arquitetura de agentes” (“does not prescribe prompts or agent architecture”). Na plataforma LangSmith, da LangChain, o plano gratuito Developer tem uma licença e nenhum Agent Server, e o deploy auto-hospedado é exclusivo do Enterprise. Se você quer agentes definidos por papel, um agente pronto em vez de uma biblioteca ou um time de agentes de programação, veja sete opções com licença, preço e para quem cada uma serve.",
    cta: "Começar",
    secondary: "Ver a comparação",
    secondaryHref: "#compare",
  },
  sections: [
    {
      kind: "table",
      id: "compare",
      title: "Alternativas ao LangGraph em resumo",
      text: [
        "Informações do README, da documentação e da página de preços de cada produto, verificadas em 13 de novembro de 2026. Preços em dólares americanos. O LangGraph em si é gratuito sob MIT; o LangSmith Plus custa $39 por licença por mês. Detalhes em [preços do LangGraph](/pricing/langgraph).",
      ],
      headers: ["Alternativa", "O que é", "Open source", "Preço a partir de"],
      rows: [
        [
          "[CrewAI](/compare/crewai-vs-langgraph)",
          "Um framework em Python para crews de agentes baseados em papéis e flows orientados a eventos, mais a plataforma comercial CrewAI AMP",
          "Framework sim (MIT); o AMP é comercial",
          "Framework gratuito, mais o seu provedor de modelos; AMP Basic gratuito (50 execuções de workflows por mês)",
        ],
        [
          "[AutoGen](/alternatives/autogen)",
          "O framework multiagente da Microsoft em Python e .NET; o README diz que ele está arquivado e não é mais mantido pela Microsoft",
          "Sim (código MIT, documentação CC-BY-4.0)",
          "Gratuito, mais o seu provedor de modelos; sem serviço hospedado",
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
      id: "frameworks",
      title: "Outros frameworks de agentes",
      text: [
        "Bibliotecas que você chama do seu próprio código, como o LangGraph. Lado a lado: [CrewAI vs LangGraph](/compare/crewai-vs-langgraph) e [CrewAI vs AutoGen](/compare/crewai-vs-autogen).",
      ],
      points: [
        "CrewAI: um framework em Python com licença MIT. O LangGraph não tem um conceito de papel integrado; no CrewAI, cada agente é definido com um papel, um objetivo e uma história de fundo. Com a delegação ativada, os agentes passam trabalho uns aos outros e fazem perguntas entre si, e os Flows acrescentam controle passo a passo orientado a eventos, com estado e ramificações. O CrewAI AMP acrescenta um Studio no-code, tracing, agendamento por cron e deploy. Escolha-o se você escreve em Python (3.10 ou posterior, abaixo da 3.14) e quer agentes organizados por papel. Preços: [preços do CrewAI](/pricing/crewai).",
        "AutoGen: o framework multiagente da Microsoft, com licença MIT, em Python e .NET, com chats em grupo e times selector e swarm. Em 13 de novembro de 2026, o README dizia que o projeto “foi arquivado e não é mais mantido ativamente pela Microsoft” (“has been archived and is no longer actively maintained by Microsoft”), desaconselhava o uso em produção e indicava aos novos usuários o Microsoft Agent Framework, o sucessor dele. Escolha-o se você mantém um app AutoGen existente ou quer estudar padrões multiagente. Mais em [alternativas ao AutoGen](/alternatives/autogen).",
      ],
    },
    {
      kind: "text",
      id: "agents",
      title: "Agentes prontos em vez de uma biblioteca",
      text: [
        "Com o LangGraph, você constrói o agente. Estes dois são agentes que você instala e roda, cada um com um agendador integrado. Comparados em [Hermes Agent vs OpenClaw](/blog/hermes-agent-vs-openclaw).",
      ],
      points: [
        "OpenClaw: um assistente pessoal com licença MIT que roda como um Gateway no seu próprio computador e responde no WhatsApp, no Telegram, no Slack, no Discord e em outros apps de chat. Ele roda vários agentes em um mesmo Gateway, tem um agendador de Automations integrado, e o projeto não tem plano pago nem serviço hospedado. Escolha-o se você quer um assistente em um hardware que você controla, com provedores de modelos que você pode trocar. Mais em [alternativas ao OpenClaw](/blog/openclaw-alternatives).",
        "Hermes Agent: o agente pessoal da Nous Research, com licença MIT. Ele escreve skills a partir da experiência, mantém a própria memória e roda rotinas em um agendador cron integrado; no Bot Mode, Bots com nome, cada um com os próprios modelos, trocam mensagens diretamente entre si. Escolha-o se você quer um agente que aprimora as próprias skills com o tempo e que você pode acessar por um terminal, um app desktop e apps de chat. Mais em [alternativas ao Hermes Agent](/alternatives/hermes-agent).",
      ],
    },
    {
      kind: "text",
      id: "teams",
      title: "Coordenar os agentes de programação que você já usa",
      text: [
        "Se os agentes que você quer coordenar são agentes de programação, como o Claude Code ou o Codex, estes os colocam para trabalhar como um time. Veja [Paperclip vs CrewAI](/compare/paperclip-vs-crewai) e [Claude Code agent teams vs OpenClaw](/compare/claude-code-agent-teams-vs-openclaw).",
      ],
      points: [
        "Paperclip: um servidor Node.js auto-hospedado com interface web, sob licença MIT, que comanda agentes como uma empresa: um organograma com cargos e orçamentos, issues atribuídas a agentes ou pessoas, aprovações e rotinas por cron, webhook ou gatilhos via API. Ele diz que “não é um framework de agentes” (“not an agent framework”): controla agentes que você traz, como Claude Code, Codex e OpenClaw, por meio de adaptadores. Escolha-o se você quer muitos agentes trabalhando para uma mesma meta, com limites de gastos, no seu próprio servidor.",
        "Claude Code agent teams: um recurso experimental do Claude Code, desativado por padrão. Uma sessão líder cria colegas, instâncias separadas do Claude Code que compartilham uma lista de tarefas com dependências e trocam mensagens diretamente entre si. Escolha-o se você já paga um plano do Claude e quer várias instâncias do Claude Code trabalhando em uma mesma tarefa de programação.",
      ],
    },
    {
      kind: "steps",
      id: "how-to-choose",
      title: "Como escolher uma alternativa ao LangGraph",
      steps: [
        {
          title: "Precisa de controle de baixo nível sobre cada etapa?",
          text: "É para isso que o LangGraph foi feito. Para um ponto de partida de nível mais alto, o README dele aponta para o Deep Agents, que é construído sobre o LangGraph e acrescenta subagentes.",
        },
        {
          title: "Quer agentes definidos por papel?",
          text: "Os agentes do CrewAI têm papel, objetivo e história de fundo; o Paperclip tem um organograma com cargos e descrições de função; o Crewmark dá a cada funcionário de IA um cargo, KPIs e projetos.",
        },
        {
          title: "Precisa de execuções agendadas?",
          text: "O LangGraph tem cron jobs no LangSmith Agent Server, o que não é informado para a biblioteca sozinha. O CrewAI tem agendamento por cron no AMP. O OpenClaw e o Hermes Agent têm agendadores integrados, o Paperclip roda rotinas e o Crewmark tem um heartbeat e issues recorrentes.",
        },
        {
          title: "De olho nos custos?",
          text: "Os frameworks open source são gratuitos, e você paga pelas chamadas ao modelo. Os cron jobs do LangGraph enviam a mesma entrada a cada execução, e a documentação da LangChain recomenda apagar os que não estão em uso, porque execuções recorrentes podem gerar cobranças da API do LLM. O Paperclip tem orçamentos com bloqueio rígido; o Crewmark usa a sua própria assinatura do Claude Code ou do Codex.",
        },
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Com o Crewmark",
      title: "O LangGraph coloca agentes dentro do seu app. O Crewmark põe os seus agentes de programação para trabalhar em time.",
      text: [
        "O Crewmark não é um framework, e você não escreve nenhum grafo. É um gerenciador de issues para um time de funcionários de IA: cada um é uma conversa do Claude Code ou do Codex no seu próprio computador, com um cargo, KPIs e projetos. Ele acorda com um heartbeat durante o horário de trabalho, pega issues de um quadro compartilhado e, quando precisa de uma revisão ou de uma permissão, marca a issue como Needs action e pergunta ali mesmo.",
        "Ele é open source sob a licença GPL-3.0 e gratuito para 1 projeto com até 3 funcionários de IA. Você continua pagando o seu provedor de agentes como sempre, e o seu computador precisa ficar ligado para os heartbeats. Os planos estão na [página de preços](/pricing).",
      ],
      steps: [
        {
          title: "Escolha um cargo",
          text: "Comece pelos [cargos de funcionários de IA](/ai-employees), como engenheiro de software ou analista de dados, e escreva os KPIs e os projetos dele.",
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
    title: "Um time de agentes sem escrever um grafo",
    text: "O Crewmark acorda a sua sessão do Claude Code ou do Codex com um heartbeat e entrega a ela a próxima issue de um quadro compartilhado.",
    button: "Começar",
  },
  faq: {
    title: "Perguntas frequentes sobre alternativas ao LangGraph",
    items: [
      {
        q: "Quais são as alternativas open source ao LangGraph?",
        a: "O framework do CrewAI, o AutoGen (cujo README diz que ele está arquivado e não é mais mantido pela Microsoft), o OpenClaw, o Hermes Agent e o Paperclip têm licença MIT. O Crewmark é open source sob GPL-3.0. O Claude Code, que roda os agent teams, não é open source.",
      },
      {
        q: "O LangGraph é gratuito?",
        a: "O framework é gratuito sob MIT. A plataforma LangSmith, da LangChain, tem o plano Developer a $0 por licença por mês (1 licença, até 5 mil traces base por mês e depois pagamento conforme o uso, sem Agent Server), o Plus a $39 por licença por mês com um Small Agent Server incluído e o Enterprise com preço sob consulta. Mais em [preços do LangGraph](/pricing/langgraph).",
      },
      {
        q: "LangGraph vs CrewAI: qual é a diferença?",
        a: "O LangGraph é de baixo nível: você constrói um grafo de estado, nós e arestas, e ele não tem um conceito de papel integrado. O CrewAI define cada agente por papel, objetivo e história de fundo e os agrupa em crews, com Flows para controle passo a passo. Os dois frameworks têm licença MIT. O CrewAI é um framework Python; o LangGraph existe em Python e JS/TS. Veja [CrewAI vs LangGraph](/compare/crewai-vs-langgraph).",
      },
      {
        q: "Preciso do LangChain para usar o LangGraph?",
        a: "Não. A documentação da LangChain diz: “O LangGraph não exige o LangChain” (“LangGraph does not require LangChain”). Os exemplos costumam usar as integrações de modelos do LangChain, mas o LangGraph funciona com quaisquer modelos que o seu código chamar.",
      },
      {
        q: "O AutoGen ainda é uma alternativa ao LangGraph em 2026?",
        a: "O README diz que o projeto “foi arquivado e não é mais mantido ativamente pela Microsoft” (“has been archived and is no longer actively maintained by Microsoft”) e desaconselha o uso em produção. A Microsoft indica aos novos usuários o Microsoft Agent Framework, que ela chama de sucessor direto do AutoGen. Veja [alternativas ao AutoGen](/alternatives/autogen).",
      },
      {
        q: "Quais alternativas ao LangGraph rodam agentes em horários agendados?",
        a: "O OpenClaw (Automations), o Hermes Agent (um agendador cron integrado), o Paperclip (rotinas por cron, webhooks ou API) e o Crewmark (um heartbeat no horário de trabalho e issues recorrentes). O CrewAI agenda na plataforma AMP, e o Claude Code tem tarefas agendadas separadas dos agent teams. O próprio LangGraph roda cron jobs no LangSmith Agent Server.",
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
    "O Crewmark é um produto independente, sem vínculo com a LangChain nem com nenhuma outra empresa citada nesta página e sem endosso delas. Os nomes de produtos são marcas de seus respectivos titulares. As informações sobre outros produtos vêm das páginas públicas deles e podem ter mudado desde então.",
};
