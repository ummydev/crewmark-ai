import type { GuideCopy } from "@/components/landing/guide-article";

// Brazilian Portuguese translation of /personal-agent/cursor-projects; the English master is
// src/content/personal-agents/cursor-projects.ts.

const docs = "https://cursor.com/docs/agent/projects";

export const copy: GuideCopy = {
  meta: {
    title: "Cursor Projects: o que o recurso faz, preços e vs Grok Bot",
    description:
      "O Cursor Projects explicado: um agente coordenador planeja trabalho de código maior e o passa a agentes na nuvem. Planos, setup, testes locais e vs Grok Bot.",
  },
  breadcrumb: "Cursor Projects",
  parent: { name: "Agentes pessoais", href: "/personal-agent" },
  hero: {
    kicker: "Agentes pessoais · Cursor",
    title: "Cursor Projects: como o agente coordenador planeja e delega trabalhos maiores",
    lead: "O Cursor Projects é um recurso do Cursor para trabalhos maiores, como uma funcionalidade, uma migração ou um app completo. Você conversa com um agente coordenador que não escreve código: ele planeja o trabalho, delega a agentes que rodam em paralelo nos Cloud Agents do Cursor e traz o trabalho pronto para você conferir. Cada Project guarda arquivos compartilhados que todos os agentes dele leem, e pode fazer trabalho recorrente sem que você peça. Veja como ele funciona, quais planos o incluem, como configurar, onde roda e como se compara ao Grok Bot e ao Claude Code.",
    cta: "Começar",
    secondary: "Configurar",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "O que é o Cursor Projects",
      points: [
        "Um coordenador e os seus trabalhadores: você fala com um agente coordenador, que cria agentes trabalhadores, dá a eles nomes de acordo com a função e os gerencia. O coordenador não escreve código; ele planeja o trabalho e o delega aos trabalhadores, que rodam em paralelo.",
        "Ele roda na nuvem: cada Project tem o próprio computador na nuvem nos Cloud Agents do Cursor, então fechar o notebook não o interrompe.",
        "Arquivos compartilhados: um Project guarda preferências, anotações e fluxos de trabalho que todos os agentes dele leem. Um `notes.md` compartilhado registra o que está em andamento, na fila e concluído.",
        "Uma lista de tarefas e um quadro: cada Project tem os seus, e nos Multiplayer Projects todos os membros os compartilham.",
        "Trabalho recorrente: peça ao coordenador para acompanhar um canal do Slack, rodar com agendamento ou seguir os seus pull requests, e ele age a partir desses sinais sem precisar de um prompt.",
        "Feito para trabalho que dura mais do que um chat: uma funcionalidade com vários pull requests, uma migração ou um trabalho resolvido enquanto você está fora.",
      ],
    },
    {
      kind: "table",
      id: "plans",
      title: "Preços do Cursor Projects: quais planos o incluem",
      text: [
        "Os Projects rodam nos Cloud Agents, então estão em todos os planos do Cursor que têm Cloud Agents. Preços da página de ajuda sobre preços do Cursor em 13 de novembro de 2026. Os planos pagos do Cursor incluem uma cota de uso para os modelos do Cursor (Grok e Composer).",
      ],
      headers: ["Plano", "Preço", "Cursor Projects"],
      rows: [
        ["Free", "-", "Não incluído"],
        ["Plus", "$8/mês", "Não incluído"],
        ["Premium", "$30/mês, ou $300/ano", "Incluído"],
        ["Super", "$100/mês", "Incluído"],
        ["Ultra", "$200/mês", "Incluído"],
        ["Teams", "$30, $100 ou $200 por licença/mês", "Incluído; os Multiplayer Projects exigem uma conta de equipe e o Cursor 3.26.13 ou posterior"],
        ["Enterprise", "-", "Incluído; exige o Cursor 3.21.9 ou posterior"],
        ["Planos antigos", "-", "Incluído nos planos pagos antigos; não no Hobby antigo"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Como configurar o Cursor Projects",
      steps: [
        {
          title: "Confira o seu plano e a configuração de privacidade",
          text: "Você precisa de um plano com Cloud Agents: Premium ou superior, Teams, Enterprise (Cursor 3.21.9 ou posterior) ou um plano pago antigo. Os Projects não estão disponíveis com o Privacy Mode (Legacy).",
        },
        { title: "Abra a Agents Window", text: "Os Projects ficam na Agents Window do Cursor e rodam na nuvem." },
        {
          title: "Descreva o trabalho maior",
          text: "Diga ao coordenador o que construir, como uma funcionalidade, uma migração ou um app completo, nos seus repositórios do GitHub. Você escolhe o modelo do coordenador.",
        },
        {
          title: "Adicione arquivos compartilhados",
          text: "Anote preferências, observações e fluxos de trabalho para o Project; todos os agentes dele os leem, e o `notes.md` registra o que está em andamento, na fila e concluído.",
        },
        {
          title: "Confira o trabalho e torne-o recorrente",
          text: "O coordenador traz o trabalho pronto para você conferir. Peça a ele para acompanhar um canal do Slack, rodar com agendamento ou seguir os seus pull requests para continuar sem um prompt.",
        },
      ],
      source: { label: "Fonte: documentação do Cursor, Projects", href: docs },
    },
    {
      kind: "text",
      id: "safety",
      title: "Como o Cursor Projects mantém você no controle",
      points: [
        "Revisão: o coordenador traz o trabalho pronto para você conferir.",
        "Visibilidade: a lista de tarefas e o quadro, e o `notes.md` compartilhado, mostram o que está em andamento, na fila e concluído.",
        "Separação: cada Project roda no próprio computador na nuvem. O coordenador inicia um agente local quando algo precisa ser testado na sua máquina.",
        "Equipes: nos Multiplayer Projects (conta de equipe, Cursor 3.26.13 ou posterior), cada membro tem o próprio coordenador, os coordenadores trocam mensagens diretamente e todos os membros compartilham o quadro.",
        "Privacidade: os Projects não estão disponíveis com o Privacy Mode (Legacy).",
      ],
    },
    {
      kind: "text",
      id: "run-locally",
      title: "O Cursor Projects pode rodar localmente?",
      text: [
        "Não de ponta a ponta. A documentação do Cursor diz que um Project roda no próprio computador na nuvem, então fechar o notebook não o interrompe, e a nuvem permite que ele rode mais agentes em paralelo do que um notebook conseguiria. Quando algo precisa ser testado na sua máquina, o coordenador inicia um agente local para rodar o teste ali.",
        "As Self-Hosted Machines do Cursor levam a execução das ferramentas para uma máquina que você gerencia: My Machines para o notebook, a devbox ou a VM de uma pessoa, e Team Pools no plano Enterprise. Edições de arquivos, comandos de terminal e outras chamadas de ferramentas passam a rodar nessa máquina, mas o loop do agente, a inferência e o planejamento continuam na nuvem do Cursor, e o worker envia ao Cursor o conteúdo de que o agente precisa. (Documentação do Cursor, conferida em 13 de novembro de 2026.)",
        "Se você quer um time inteiro de agentes rodando no seu próprio computador, estas opções funcionam assim:",
      ],
      points: [
        "[Agent teams do Claude Code](/blog/claude-code-agent-teams): um recurso experimental do Claude Code, desligado por padrão, em que uma sessão líder cria colegas que compartilham uma lista de tarefas e trocam mensagens entre si, tudo nas suas próprias sessões do Claude Code.",
        "[Claude Squad](/compare/claude-squad-vs-conductor): um app de terminal open source (AGPL-3.0) que roda vários agentes de programação ao mesmo tempo, cada um na própria sessão do tmux e na própria git worktree.",
        "[Vibe Kanban](/compare/vibe-kanban-vs-conductor): um quadro kanban open source (Apache-2.0) para agentes de programação que roda localmente no seu navegador ou como app para desktop; a comunidade o mantém desde que a empresa por trás dele encerrou as atividades, em abril de 2026.",
        "[Crewmark](/ai-employees): open source (GPL-3.0). Cada funcionário de IA é uma conversa do Claude Code ou do Codex no seu próprio computador, com um cargo e metas, e um heartbeat o acorda para pegar a próxima issue de um quadro compartilhado. O trabalho não se limita a código: cargos como [especialista em SEO](/ai-employees/seo-specialist) funcionam do mesmo jeito, e o app web pode ser auto-hospedado.",
      ],
    },
    {
      kind: "table",
      id: "vs",
      title: "Cursor Projects vs Grok Bot e Claude Code",
      text: [
        "Dados da documentação e das páginas de preços de cada fornecedor, conferidos em 13 de novembro de 2026. Outros colegas de trabalho de IA estão em [colegas de trabalho de IA comparados](/blog/ai-coworker); veja também o [guia do Grok Bot](/personal-agent/grok-bot) e [Grok Bot vs Claude Code](/compare/grok-bot-vs-claude-code).",
        "Lado a lado: [Cursor Projects vs Grok Bot](/compare/cursor-projects-vs-grok-bot). Guias: [Grok Bot](/personal-agent/grok-bot).",
      ],
      headers: ["", "Cursor Projects", "Grok Bot", "Claude Code"],
      rows: [
        ["Feito por", "Cursor", "xAI", "Anthropic"],
        ["Feito para", "Trabalho de código maior: uma funcionalidade, uma migração, um app completo", "Colegas de equipe de IA que trabalham nos seus apps, no Slack e no Teams", "Programação: lê o seu código, edita arquivos, roda comandos"],
        ["Vários agentes", "Um coordenador planeja e delega a agentes trabalhadores em paralelo", "Os Bots trocam mensagens entre si e se coordenam em chats em grupo", "Subagentes em uma sessão; agent teams experimentais"],
        ["Onde roda", "Cloud Agents do Cursor, um computador na nuvem por Project; um agente local para testes", "Nuvem: cada Bot tem o próprio computador", "Terminal, IDE e app para desktop na sua máquina; sessões na nuvem pela web"],
        ["Quadro de tarefas", "Uma lista de tarefas e um quadro, mais um `notes.md` compartilhado", "Não informado; o trabalho é passado no chat, em threads do Slack e em reuniões", "Sem quadro de issues; os agent teams compartilham uma lista de tarefas"],
        ["Trabalho recorrente", "Acompanha um canal do Slack, roda com agendamento ou segue os seus pull requests", "Rotinas com agendamento", "Tarefas agendadas na nuvem e no desktop, `/loop`"],
        ["Preço", "Cursor Premium a $30/mês ou mais", "Premium $30, Super $100 ou Ultra $200 por mês", "Planos pagos do Claude, Pro a partir de $20/mês"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Com o Crewmark",
      title: "O Projects para um grande trabalho. O Crewmark para cargos fixos.",
      text: [
        "O Cursor Projects coordena agentes em um trabalho maior. O Crewmark transforma as suas próprias sessões do Claude Code ou do Codex em funcionários de IA com um cargo, metas em números, horário de trabalho e um heartbeat, cada um pegando issues de um quadro compartilhado, para que o trabalho de engenharia, SEO e marketing em um repositório continue sendo feito.",
      ],
      steps: [
        { title: "Escolha um cargo", text: "Comece pelos [cargos de funcionários de IA](/ai-employees), como engenheiro de software ou especialista em SEO." },
        { title: "Coloque o trabalho em um quadro", text: "Atribua issues e faça as recorrentes se repetirem; o heartbeat acorda o funcionário para pegar a próxima." },
        { title: "Veja o que ele pode fazer", text: "Trabalhos com a configuração estão em [casos de uso do Claude Code](/use-cases/claude-code) e [casos de uso do Codex](/use-cases/codex)." },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Configurar o Cursor Projects" },
  mid: {
    title: "Quer agentes com um trabalho fixo?",
    text: "O Crewmark dá ao seu Claude Code ou Codex um cargo, um heartbeat e um quadro compartilhado.",
    button: "Começar",
  },
  faq: {
    title: "Perguntas frequentes sobre o Cursor Projects",
    items: [
      {
        q: "O que é o Cursor Projects?",
        a: "Um recurso do Cursor para trabalhos maiores, como uma funcionalidade, uma migração ou um app completo. Um agente coordenador planeja o trabalho, delega a agentes que rodam em paralelo nos Cloud Agents do Cursor e traz o trabalho pronto para você conferir.",
      },
      {
        q: "Quais planos do Cursor incluem o Projects?",
        a: "Todos os planos com Cloud Agents: Premium ($30 por mês, ou $300 por ano) e superiores, Super ($100) e Ultra ($200), Teams ($30, $100 ou $200 por licença por mês), Enterprise e planos pagos antigos. Free, Plus ($8 por mês) e o Hobby antigo não o incluem.",
      },
      {
        q: "O Cursor Projects roda localmente?",
        a: "Não, ele roda nos Cloud Agents do Cursor, cada Project no próprio computador na nuvem, então fechar o notebook não o interrompe. Quando algo precisa ser testado na sua máquina, o coordenador inicia um agente local. Os Projects não estão disponíveis com o Privacy Mode (Legacy).",
      },
      {
        q: "Como eu reviso o que o Cursor Projects fez?",
        a: "O coordenador traz o trabalho pronto para você conferir. A lista de tarefas e o quadro do Project e o `notes.md` compartilhado mostram o que está em andamento, na fila e concluído.",
      },
      {
        q: "Uma equipe pode compartilhar um Cursor Project?",
        a: "Sim, com os Multiplayer Projects em uma conta de equipe e o Cursor 3.26.13 ou posterior. Cada membro tem um coordenador, os coordenadores trocam mensagens diretamente e todos os membros compartilham a lista de tarefas e o quadro.",
      },
      {
        q: "Cursor Projects vs Grok Bot: qual é a diferença?",
        a: "O Cursor Projects é um espaço de trabalho de código no Cursor: um coordenador delega um trabalho maior a agentes trabalhadores nos Cloud Agents. O Grok Bot são os colegas de equipe de IA hospedados da xAI: Bots que ganham, cada um, o próprio computador na nuvem, entram nos seus apps e trabalham no Slack e no Microsoft Teams. Veja o [guia do Grok Bot](/personal-agent/grok-bot).",
      },
    ],
  },
  cta: {
    title: "Coordene um grande trabalho no Projects. Dê um cargo fixo aos seus agentes também.",
    text: "O Crewmark transforma sessões do Claude Code e do Codex em funcionários de IA com cargos, metas, horário de trabalho e um heartbeat.",
    button: "Começar",
  },
  checked: "Conferido na documentação do Projects, na central de ajuda e na página de preços do Cursor em 13 de novembro de 2026.",
  disclaimer:
    "O Crewmark é um produto independente, sem vínculo com o Cursor, a xAI ou a Anthropic e sem endosso deles. Os nomes dos produtos são marcas dos respectivos titulares.",
};
