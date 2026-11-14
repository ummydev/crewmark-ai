import type { GuideCopy } from "@/components/landing/guide-article";

// Brazilian Portuguese translation of /blog/superagent; the English master is src/content/blog/superagent.ts.

const deepseek = "https://github.com/deepseek-ai/dsh-superagent-prototype";

export const copy: GuideCopy = {
  meta: {
    title: "O que é um Superagent? DeepSeek, Base44 e ClickUp comparados",
    description:
      "“Superagent” é o nome de vários produtos de IA ao mesmo tempo. O que é um superagent, por que o Super-agent da DeepSeek está em alta e como ele se compara ao Base44 Superagents, ClickUp Super Agents, Genspark e aos projetos open source da superagent-ai.",
  },
  breadcrumb: "O que é um superagent",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-06" },
  hero: {
    kicker: "Blog · Agentes de IA",
    title: "O que é um superagent? Todos os “Superagent” de 2026, comparados",
    lead: "Um superagent é um agente de IA que continua trabalhando sozinho: ele percebe o trabalho, assume tarefas sem precisar de um prompt para cada passo, executa tudo em segundo plano e só volta a você quando precisa de uma decisão. A palavra está em todo lugar este mês porque a DeepSeek abriu o código do seu protótipo Super-agent em 31 de outubro de 2026, mas vários produtos já usam esse nome, do Base44 e do ClickUp a uma ferramenta de segurança open source. Este guia explica a ideia, o que cada um realmente é e como escolher.",
    cta: "Começar",
    secondary: "Ir para a comparação",
    secondaryHref: "#compare",
  },
  sections: [
    {
      kind: "text",
      title: "Superagent: uma definição",
      text: [
        "Não existe um padrão, mas todo produto vendido como superagent compartilha a mesma ideia: sair de um assistente que responde quando é chamado para um agente que assume um trabalho contínuo.",
      ],
      points: [
        "Ele começa o trabalho por conta própria: a partir de um agendamento, um gatilho, uma mensagem ou uma tarefa atribuída, não só de um prompt no chat.",
        "Ele roda em segundo plano, muitas vezes com várias tarefas ao mesmo tempo, cada uma em sua própria sessão.",
        "Ele guarda o contexto entre tarefas e se conecta às ferramentas onde o trabalho acontece, como GitHub, Slack, Gmail ou um quadro de projeto.",
        "Ele só pede a atenção de uma pessoa quando precisa de uma decisão ou de uma aprovação.",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Todos os “Superagent”, comparados",
      text: [
        "Dados do site ou do repositório no GitHub de cada fabricante em 6 de novembro de 2026.",
      ],
      headers: ["Produto", "Criado por", "O que é", "Como o trabalho começa", "Preço"],
      rows: [
        ["DeepSeek Super-agent (dsh-superagent)", "A equipe do Harness da DeepSeek", "Um agente de programação proativo para um repositório do GitHub; um protótipo de pesquisa, não um produto oficial", "Pedidos no GitHub (e, opcionalmente, no Feishu) de pessoas autorizadas, ou regras que a equipe escreve", "Grátis, MIT; roda no DeepSeek Harness"],
        ["Base44 Superagents", "Base44 (parte da Wix)", "Agentes no-code que você descreve em linguagem natural, para tarefas pessoais ou de negócio", "Agendamentos, gatilhos, webhooks e apps de mensagem como WhatsApp, Telegram e Slack", "Usa os créditos do plano do Base44; plano Free e, depois, a partir de $16/mês no faturamento anual"],
        ["ClickUp Super Agents", "ClickUp", "Colegas de equipe de IA dentro de um workspace do ClickUp que fazem triagem, agendam, geram relatórios e criam itens", "@menções, tarefas atribuídas, mensagens diretas, agendamentos e gatilhos", "Disponível para todos os usuários; o uso é cobrado em créditos de IA"],
        ["Genspark Super Agent", "Genspark", "Um agente de uso geral para pesquisa, slides, documentos e mais", "O seu prompt", "Veja genspark.ai"],
        ["superagent-ai/superagent", "Superagent (open source)", "Começou em 2023 como framework de agentes; hoje protege apps de IA contra prompt injection e vazamento de dados", "Roda no pipeline do seu app", "Open source, MIT"],
        ["superagent-ai/grok-cli", "Comunidade, sem vínculo com a xAI", "Um agente de programação open source para o terminal que usa a API do Grok", "O seu prompt; subagentes e controle remoto pelo Telegram", "Grátis, MIT; use a sua própria chave da API do Grok"],
        ["Crewmark", "Crewmark", "Funcionários de IA construídos sobre Claude Code, Codex, DeepSeek Harness ou OpenCode", "Um heartbeat durante o horário de trabalho pega a próxima issue de um quadro", "Cadastro aberto; roda na assinatura que você já tem"],
      ],
    },
    {
      kind: "text",
      title: "Por que todo mundo está buscando “superagent” agora: a DeepSeek",
      text: [
        "Em 31 de outubro de 2026, a DeepSeek publicou um protótipo de pesquisa chamado dsh-superagent e um ensaio sobre como projetar super-agentes, e o repositório passou de cerca de 20 mil estrelas no GitHub em uma semana. Ele transforma o DeepSeek Harness em um agente que acompanha o GitHub, abre seus próprios itens de trabalho, executa cada um em uma sessão separada e responde com resultados como pull requests, enquanto um painel web mostra o que precisa de uma pessoa. O objetivo declarado é exigir o mínimo possível de atenção humana. Leia a análise completa em [DeepSeek Super-Agent explicado](/blog/deepseek-super-agent).",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Como escolher um superagent",
      steps: [
        {
          title: "Comece por onde o trabalho está",
          text: "Código no GitHub aponta para o protótipo da DeepSeek ou para um agente construído sobre o Claude Code ou o Codex; um workspace do ClickUp, para o ClickUp Super Agents; tarefas pessoais e mensagens, para o Base44.",
        },
        {
          title: "Veja como ele começa o trabalho",
          text: "Um superagent de verdade não espera cada prompt. Procure agendamentos, gatilhos, tarefas atribuídas ou um heartbeat, e um lugar claro para ver o que ele está fazendo.",
        },
        {
          title: "Veja o que ele pode fazer sozinho",
          text: "Prefira agentes que perguntem antes de ações arriscadas, como fazer merge, enviar ou gastar, e que mantenham um registro que você possa revisar. O protótipo da DeepSeek só age a partir de pedidos ou de regras escritas pela equipe.",
        },
        {
          title: "Veja de quem são os modelos e quem paga a conta",
          text: "Produtos de workspace cobram créditos além do plano; ferramentas open source rodam na sua própria chave de API ou assinatura. Compare com as [melhores plataformas de funcionários de IA](/blog/best-ai-employee-platforms).",
        },
        {
          title: "Protótipo ou produto?",
          text: "A DeepSeek diz que o Super-agent dela serve apenas como referência. Para o trabalho do dia a dia, escolha algo que tenha manutenção ou construa sobre um agente em que você já confia.",
        },
      ],
      source: { label: "Fonte: o repositório dsh-superagent da DeepSeek", href: deepseek },
    },
    {
      kind: "text",
      title: "Superagent vs agente de IA vs funcionário de IA",
      text: [
        "Um agente de IA conclui a tarefa que você entrega a ele. Um superagent acrescenta autonomia: ele percebe ou recebe trabalho e segue em frente em segundo plano. Um funcionário de IA vai um passo além e dá um emprego a esse agente: um cargo, uma meta medida em números, horário de trabalho e um quadro de tarefas, do jeito que você integraria uma pessoa. Veja [o que é um funcionário de IA](/ai-employees) e [como deixar o Claude Code proativo](/proactive-claude-code).",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Com o Crewmark",
      title: "Um superagent com descrição de cargo",
      text: [
        "O Crewmark transforma uma sessão do Claude Code, Codex, DeepSeek Harness ou OpenCode em um funcionário de IA: ele acorda com um heartbeat durante o horário de trabalho, pega a próxima issue de um quadro compartilhado, comenta enquanto trabalha e manda mensagem quando precisa de uma decisão, na assinatura que você já paga.",
      ],
      steps: [
        {
          title: "Escolha o agente em que você confia",
          text: "Inclusive o DeepSeek Harness, o mesmo runtime sobre o qual o Super-agent da DeepSeek foi construído.",
        },
        {
          title: "Dê a ele um cargo e uma meta",
          text: "Engenheiro de software, especialista em SEO, profissional de growth marketing: cada um com um número para mover.",
        },
        {
          title: "Deixe o heartbeat fazer o resto",
          text: "A cada 15, 30 ou 60 minutos durante o horário de trabalho, ele pega a próxima issue; você só responde ao que precisa de você.",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Escolher um superagent" },
  mid: {
    title: "Quer um superagent que trabalhe no seu repo, no seu plano?",
    text: "O Crewmark transforma o Claude Code, o Codex ou o DeepSeek Harness em funcionários de IA que acordam com um heartbeat e pegam sozinhos a próxima issue.",
    button: "Começar",
  },
  faq: {
    title: "Perguntas frequentes sobre superagents",
    items: [
      {
        q: "O que é um superagent?",
        a: "Um agente de IA que trabalha sozinho ao longo do tempo: ele inicia tarefas a partir de gatilhos, agendamentos ou pedidos, executa tudo em segundo plano e só consulta uma pessoa quando precisa de uma decisão.",
      },
      {
        q: "O que é o DeepSeek Super-agent?",
        a: "Um protótipo de pesquisa que a DeepSeek abriu em 31 de outubro de 2026 (dsh-superagent, MIT). Ele faz o DeepSeek Harness agir de forma proativa em um repositório do GitHub. A DeepSeek diz que ele serve apenas como referência e não é um produto oficial.",
      },
      {
        q: "O DeepSeek Super-agent é grátis?",
        a: "Sim. O protótipo e o DeepSeek Harness são open source sob a licença MIT; você paga pelo uso do modelo por trás dele.",
      },
      {
        q: "O que são os Base44 Superagents?",
        a: "Agentes de IA no-code do Base44 (parte da Wix) que você descreve em linguagem natural. Eles rodam com agendamentos e gatilhos, se conectam a Gmail, Drive, Notion, GitHub, Slack ou servidores MCP e usam os créditos do seu plano do Base44.",
      },
      {
        q: "O que são os ClickUp Super Agents?",
        a: "Colegas de equipe de IA em um workspace do ClickUp, lançados em dezembro de 2025, que você pode @mencionar, atribuir tarefas ou colocar em um agendamento. Eles estão disponíveis para todos os usuários e usam créditos de IA.",
      },
      {
        q: "O Superagent no GitHub é o mesmo da DeepSeek?",
        a: "Não. A organização superagent-ai não tem relação: o repositório superagent dela hoje é uma ferramenta de segurança para IA, e o grok-cli é um agente de programação da comunidade para a API do Grok.",
      },
      {
        q: "Qual é a diferença entre um superagent e um funcionário de IA?",
        a: "Um superagent trabalha em tarefas de forma autônoma. Um funcionário de IA é um agente autônomo que recebe um cargo, uma meta, um horário de trabalho e um quadro, para que o trabalho dele seja organizado e medido como o de um colega de equipe.",
      },
    ],
  },
  cta: {
    title: "Transforme seu agente de programação em um superagent com um emprego.",
    text: "O Crewmark transforma sessões do Claude Code, Codex, DeepSeek Harness e OpenCode em funcionários de IA com cargos, metas, horário de trabalho e um heartbeat.",
    button: "Começar",
  },
  checked: "Conferido no site ou no repositório no GitHub de cada produto em 6 de novembro de 2026.",
  disclaimer:
    "O Crewmark é um produto independente, sem vínculo com a DeepSeek, o Base44, a Wix, o ClickUp, a Genspark ou os projetos da superagent-ai e sem endosso deles. Os nomes dos produtos são marcas dos respectivos titulares.",
};
