import type { GuideCopy } from "@/components/landing/guide-article";

// Brazilian Portuguese translation of /alternatives/relevance-ai; the English master is
// src/content/product-alternatives/relevance-ai.ts.

export const copy: GuideCopy = {
  meta: {
    title: "Relevance AI: alternativas open source e hospedadas em 2026",
    description:
      "A Relevance AI descontinuou o plano Free e lista só o Enterprise. Compare CrewAI, LangGraph, AutoGen, Paperclip, OpenBot, Lindy e Crewmark, com preços.",
  },
  breadcrumb: "Alternativas à Relevance AI",
  parent: { name: "Comparações", href: "/compare" },
  hero: {
    kicker: "Alternativas · Relevance AI",
    title: "Alternativas à Relevance AI: frameworks de agentes open source, times de agentes auto-hospedados e assistentes hospedados",
    lead: "A Relevance AI é uma plataforma low-code hospedada para criar agentes de IA e conectá-los em times multiagente, que ela chama de AI Workforce, para trabalho de vendas, suporte e operações. Em 13 de novembro de 2026, a documentação dela diz que o plano Free foi descontinuado para novos cadastros e contas existentes, e a página de preços lista um único plano, o Enterprise, via time de vendas. Ela não é open source e não informa nenhuma opção de auto-hospedagem. Esta página apresenta 7 alternativas: frameworks open source, times de agentes auto-hospedados, uma assistente hospedada e o Crewmark, com quanto custa cada uma.",
    cta: "Começar",
    secondary: "Comparar",
    secondaryHref: "#compare",
  },
  sections: [
    {
      kind: "table",
      id: "compare",
      title: "Alternativas à Relevance AI em resumo",
      text: [
        "Informações das páginas, da documentação ou do GitHub de cada fornecedor, verificadas em 13 de novembro de 2026. Preços em dólares americanos, quando o fornecedor informa algum. Não é um ranking.",
      ],
      headers: ["Alternativa", "O que é", "Open source", "Preço a partir de"],
      rows: [
        [
          "[Relevance AI](/pricing/relevance-ai) (para referência)",
          "Uma plataforma low-code hospedada para agentes de IA e Workforces multiagente",
          "Não",
          "Só Enterprise, via time de vendas; plano Free descontinuado",
        ],
        [
          "[CrewAI](/alternatives/crewai)",
          "Um framework em Python para crews de agentes baseados em papéis, mais a plataforma CrewAI AMP",
          "Framework sim, MIT; o AMP é comercial",
          "Framework gratuito; AMP Basic gratuito (50 execuções de workflows por mês)",
        ],
        [
          "[LangGraph](/alternatives/langgraph)",
          "O framework da LangChain para agentes stateful de longa duração construídos como grafos em código",
          "Framework sim, MIT; o LangSmith é comercial",
          "Framework gratuito; LangSmith Developer $0, Plus $39/licença/mês",
        ],
        [
          "[AutoGen](/alternatives/autogen)",
          "O framework multiagente da Microsoft para Python e .NET; o README diz que ele está arquivado",
          "Sim: código MIT, documentação CC-BY-4.0",
          "Gratuito; sem serviço hospedado",
        ],
        [
          "[Paperclip](/alternatives/paperclip)",
          "Um servidor auto-hospedado que comanda agentes que você traz como uma empresa, com organograma e orçamentos",
          "Sim, MIT",
          "Auto-hospedado gratuito; versão na nuvem em lista de espera",
        ],
        [
          "[OpenBot](/personal-agent/openbot)",
          "O workspace auto-hospedável da CopilotKit para colegas de trabalho de IA",
          "Sim, MIT (usa o CopilotKit Intelligence, com licença à parte)",
          "Gratuito para projetos pessoais; Business até $29 por usuário ativo por mês",
        ],
        [
          "[Lindy](/alternatives/lindy)",
          "Uma assistente de IA hospedada para caixa de entrada, agenda, reuniões e Slack, cobrada em créditos",
          "Não",
          "$50 em créditos grátis por 7 dias; depois, a partir de $29.99/mês por usuário ativo",
        ],
        [
          "[Crewmark](/ai-employees)",
          "Um quadro de issues para funcionários de IA que rodam como Claude Code ou Codex no seu computador",
          "Sim, GPL-3.0",
          "Grátis (1 projeto, até 3 funcionários de IA); Pro $5/mês em breve",
        ],
      ],
    },
    {
      kind: "text",
      id: "frameworks",
      title: "Frameworks de agentes open source (você escreve o código)",
      text: [
        "Estes trocam o builder da Relevance AI por uma biblioteca: você define agentes e workflows em código e paga o seu provedor de modelos. O CrewAI e o LangGraph também têm plataformas comerciais para implantar o que você cria. Lado a lado: [CrewAI vs LangGraph](/compare/crewai-vs-langgraph), [CrewAI vs AutoGen](/compare/crewai-vs-autogen).",
      ],
      points: [
        "[CrewAI](/alternatives/crewai): um framework em Python com licença MIT para crews de agentes, cada um definido com um papel, um objetivo e uma história de fundo, mais Flows orientados a eventos para controle passo a passo. Os agentes podem delegar trabalho e fazer perguntas uns aos outros. A plataforma comercial, o CrewAI AMP, tem um plano Basic gratuito com editor visual, um copiloto de IA e 50 execuções de workflows por mês, e um plano Enterprise com preço sob consulta que pode ser implantado na sua própria VPC. Escolha-o se você quer times multiagente baseados em papéis em Python, com um editor no-code à disposição. Preços: [preços do CrewAI](/pricing/crewai).",
        "[LangGraph](/alternatives/langgraph): o framework da LangChain, com licença MIT, para agentes stateful de longa duração, escritos como um grafo de estado, nós e arestas em Python ou JavaScript. Ele tem execução durável e pausas para intervenção humana (human-in-the-loop). O LangSmith acrescenta tracing, avaliação e deploy: Developer $0 (1 licença, sem Agent Server), Plus $39/licença/mês com um Agent Server pequeno incluído, Enterprise sob consulta. Escolha-o se você quer controle de baixo nível sobre cada etapa. Preços: [preços do LangGraph](/pricing/langgraph).",
        "[AutoGen](/alternatives/autogen): o framework open source da Microsoft para apps multiagente em Python e .NET, com chats em grupo, handoffs e o AutoGen Studio para prototipagem no-code. O README diz que o projeto “foi arquivado e não é mais mantido ativamente pela Microsoft” (“has been archived and is no longer actively maintained by Microsoft”) e indica aos novos usuários o Microsoft Agent Framework, que a Microsoft chama de sucessor direto do AutoGen. Escolha-o só se você mantém um app AutoGen existente ou quer estudar os padrões dele.",
      ],
    },
    {
      kind: "text",
      id: "self-hosted",
      title: "Times de agentes auto-hospedados (sem código de framework)",
      text: [
        "Como a Relevance AI, estes dão a você um time de agentes para gerenciar em um app web ou desktop, mas você os roda na sua própria máquina ou nos seus servidores. Veja [Paperclip vs CrewAI](/compare/paperclip-vs-crewai).",
      ],
      points: [
        "[Paperclip](/alternatives/paperclip): um servidor Node.js com interface web, sob licença MIT, que comanda um time de agentes de IA como uma empresa. Você define uma meta, monta um organograma com cargos, hierarquia e orçamentos, e atribui issues a agentes que você traz, como Claude Code, Codex ou OpenClaw. As rotinas criam tarefas recorrentes a partir de cron, webhook ou gatilhos via API, e aprovações e bloqueios rígidos de orçamento mantêm uma pessoa no comando. Por enquanto ele é só auto-hospedado; uma versão na nuvem está em lista de espera. Escolha-o se você quer coordenar muitos agentes diferentes rumo a uma mesma meta e limitar os gastos deles.",
        "[OpenBot](/personal-agent/openbot) (CopilotKit): um workspace auto-hospedável em que cada Bot ganha o próprio navegador, arquivos e ferramentas, com rotinas, aprovações e um registro de atividades. Ele roda como app desktop para Mac e Windows ou em Kubernetes para uma equipe, com login corporativo, funções, permissões de ferramentas e auditoria na edição para equipes. Você usa modelos da OpenAI, Claude, Gemini ou modelos abertos, ou os seus próprios agentes via AG-UI. Gratuito para projetos pessoais; o OpenBot for Business custa até $29 por usuário ativo por mês, mais 5% do gasto mensal com modelos acima de $5.000. Escolha-o se você quer colegas de trabalho de IA com aprovações e trilha de auditoria na sua própria infraestrutura.",
      ],
    },
    {
      kind: "text",
      id: "hosted",
      title: "Uma assistente hospedada: Lindy",
      points: [
        "[Lindy](/alternatives/lindy): uma única assistente de IA hospedada, em vez de um time que você monta. Ela cuida de caixa de entrada, agenda, reuniões, pesquisa, relatórios e follow-ups pelo Slack, por e-mail, iMessage, SMS, chamadas telefônicas e uma extensão do Chrome no Gmail, roda rotinas em um agendamento ou por um evento e espera aprovação antes de qualquer coisa com impacto externo. Ela começa com $50 em créditos grátis que duram 7 dias e depois cobra cada usuário ativo, a partir de $29.99/mês por 3.000 créditos. Escolha-a se você quer uma assistente pronta em que você mesmo possa se cadastrar. Veja [Relevance AI vs Lindy](/compare/relevance-ai-vs-lindy).",
      ],
    },
    {
      kind: "steps",
      id: "how-to-choose",
      title: "Como escolher uma alternativa à Relevance AI",
      steps: [
        {
          title: "Decida se você vai escrever código",
          text: "CrewAI, LangGraph e AutoGen são bibliotecas que você programa. Paperclip, OpenBot e Lindy são apps que você configura. O plano Basic gratuito do CrewAI AMP acrescenta um editor visual, se você quer algo no meio-termo.",
        },
        {
          title: "Decida onde ele roda",
          text: "Relevance AI e Lindy são hospedadas. O Paperclip, por enquanto, é só auto-hospedado; o OpenBot roda no seu notebook ou em Kubernetes; os frameworks rodam no seu próprio código, com o CrewAI AMP e o LangSmith como plataformas hospedadas opcionais.",
        },
        {
          title: "Veja no que você pode se cadastrar hoje",
          text: "A página pública de preços da Relevance AI lista só o Enterprise, via time de vendas. O CrewAI AMP Basic e o LangSmith Developer são planos gratuitos, a Lindy começa com créditos grátis e sem cartão de crédito, o OpenBot é gratuito para projetos pessoais e a versão auto-hospedada do Paperclip não exige conta no Paperclip.",
        },
        {
          title: "Confira se o framework é mantido",
          text: "O README do AutoGen diz que a Microsoft não o mantém mais e desaconselha o uso em produção enquanto ele passa para o status de arquivado. Para novos projetos, a Microsoft indica o Microsoft Agent Framework.",
        },
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Com o Crewmark",
      title: "Crewmark: um time de funcionários de IA no Claude Code ou no Codex",
      text: [
        "O Crewmark tem um escopo mais estreito que o da Relevance AI. Ele não cria agentes; dá um trabalho ao Claude Code ou ao Codex que você já usa. Cada funcionário de IA é uma conversa do Claude Code ou do Codex no seu próprio computador, com um cargo, metas e horário de trabalho. Ele acorda com um heartbeat, pega issues de um quadro compartilhado e mantém o status delas atualizado. Os agentes atribuem issues uns aos outros, comentam e fazem @menções, e cada evento acorda o agente envolvido.",
        "Ele é open source (GPL-3.0) e pode ser auto-hospedado. O plano Free cobre 1 projeto e até 3 funcionários de IA; Pro ($5/mês) e Team ($10/mês) chegam em breve, e a cobrança ainda não foi implementada, então qualquer conta pode usar o Crewmark de graça até lá. O uso do agente é pago ao seu provedor de agentes, e o seu computador precisa ficar ligado para os heartbeats. Detalhes em [preços do Crewmark](/pricing).",
      ],
      steps: [
        {
          title: "Escolha um cargo",
          text: "Dê a cada funcionário um cargo, metas e projetos, por exemplo especialista em SEO ou engenheiro de software. Veja os [cargos de funcionários de IA](/ai-employees).",
        },
        {
          title: "Coloque o trabalho em um quadro",
          text: "Atribua issues com status e prioridades, e faça as recorrentes se repetirem. Quando um agente precisa de uma revisão, de uma permissão ou de uma informação, ele marca a issue como Needs action e espera.",
        },
        {
          title: "Defina o horário de trabalho",
          text: "O heartbeat acorda cada funcionário em intervalos de 15 minutos a 24 horas durante o horário de trabalho dele. Trabalhos e como configurá-los estão em [casos de uso do Claude Code](/use-cases/claude-code) e [casos de uso do Codex](/use-cases/codex).",
        },
      ],
    },
  ],
  mid: {
    title: "Quer agentes que você pode começar a usar hoje?",
    text: "O Crewmark transforma o seu Claude Code ou Codex em funcionários de IA com cargos, um heartbeat e um quadro compartilhado. Grátis para até 3 funcionários.",
    button: "Começar",
  },
  faq: {
    title: "Perguntas frequentes sobre alternativas à Relevance AI",
    items: [
      {
        q: "Existe alternativa open source à Relevance AI?",
        a: "Sim. CrewAI e LangGraph são frameworks com licença MIT, e o código do AutoGen é MIT, embora o README diga que ele está arquivado. O Paperclip (MIT) e o OpenBot (um template de aplicação MIT sobre o CopilotKit Intelligence, que tem licença à parte) são apps auto-hospedados para rodar times de agentes, e o Crewmark é GPL-3.0. A própria Relevance AI não é open source.",
      },
      {
        q: "A Relevance AI tem plano gratuito?",
        a: "Não. Em 13 de novembro de 2026, a documentação dela diz que o plano Free foi descontinuado para novos cadastros e contas existentes, e a página de preços lista um único plano, o Enterprise, com preço sob consulta via time de vendas. Detalhes em [preços da Relevance AI](/pricing/relevance-ai).",
      },
      {
        q: "Existe alternativa grátis à Relevance AI?",
        a: "Os frameworks CrewAI, LangGraph e AutoGen são gratuitos; você paga o seu provedor de modelos. O plano Basic do CrewAI AMP é gratuito, com 50 execuções de workflows por mês, e o plano Developer do LangSmith custa $0 para 1 licença. O Paperclip é gratuito para auto-hospedar, o OpenBot é gratuito para projetos pessoais, a Lindy começa com $50 em créditos por 7 dias e o plano Free do Crewmark cobre até 3 funcionários de IA.",
      },
      {
        q: "Existe alternativa no-code à Relevance AI?",
        a: "O plano Basic gratuito do CrewAI AMP inclui um editor visual e um copiloto de IA. A Lindy é configurada na conversa, sem builder. O AutoGen Studio é uma interface no-code de prototipagem, mas o README dele diz que ele não foi pensado para ser um app pronto para produção.",
      },
      {
        q: "Posso auto-hospedar uma alternativa à Relevance AI?",
        a: "Sim. O Paperclip roda como um único processo Node.js ou uma imagem Docker, o OpenBot no seu notebook ou em Kubernetes, e o Crewmark a partir do repositório dele (Node.js, PostgreSQL e login com Google). Os frameworks CrewAI, LangGraph e AutoGen rodam no seu próprio código; o CrewAI AMP Enterprise pode ser implantado na sua própria VPC, e o Agent Server auto-hospedado do LangSmith é uma opção do Enterprise. A Relevance AI não informa nenhuma opção de auto-hospedagem.",
      },
      {
        q: "Relevance AI vs Lindy: qual é a diferença?",
        a: "A Relevance AI é uma plataforma para criar muitos agentes especialistas e conectá-los em uma Workforce, vendida via time de vendas. A Lindy é uma única assistente pronta para caixa de entrada, agenda, reuniões e Slack, cobrada por usuário ativo em créditos, a partir de $29.99/mês. Veja [Relevance AI vs Lindy](/compare/relevance-ai-vs-lindy).",
      },
    ],
  },
  cta: {
    title: "Dê um trabalho aos seus agentes sem precisar falar com vendas.",
    text: "O Crewmark transforma sessões do Claude Code e do Codex em funcionários de IA com cargos, metas, horário de trabalho e um heartbeat.",
    button: "Começar",
  },
  checked: "Conferido nas páginas, na documentação, nos preços e no GitHub de cada produto em 13 de novembro de 2026.",
  disclaimer:
    "O Crewmark é um produto independente, sem vínculo com Relevance AI, crewAI, LangChain, Microsoft, Paperclip Labs, CopilotKit ou Lindy, e sem endosso delas. Os nomes de produtos são marcas de seus respectivos titulares. As informações sobre outros produtos vêm das páginas públicas deles e podem ter mudado desde então.",
};
