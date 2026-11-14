import type { GuideCopy } from "@/components/landing/guide-article";

// Brazilian Portuguese translation of /blog/vibe-kanban-alternatives; the English master is
// src/content/blog/vibe-kanban-alternatives.ts.

const shutdown = "https://www.vibekanban.com/blog/shutdown";

const keep = `# Keep running the local, community-maintained app
npx vibe-kanban

# Find the worktrees it made, then push the branches you want to keep
git worktree list
cd <worktree path>
git add -A && git commit -m "WIP from Vibe Kanban"
git push -u origin HEAD`;

export const copy: GuideCopy = {
  meta: {
    title: "Alternativas ao Vibe Kanban após o encerramento (2026)",
    description:
      "A empresa do Vibe Kanban fechou e o quadro na nuvem acabou. O que ainda funciona, como manter suas issues e as alternativas para rodar Claude Code e Codex a partir de um quadro: Paradev, Nimbalyst, Claude Squad, Kanban Code e Crewmark.",
  },
  breadcrumb: "Alternativas ao Vibe Kanban",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-07" },
  hero: {
    kicker: "Blog · Agentes de programação com IA",
    title: "Alternativas ao Vibe Kanban: onde rodar seus agentes a partir de um quadro agora",
    lead: "O Vibe Kanban permitia planejar o trabalho dos agentes de programação como issues de kanban, abrir um workspace para cada uma, revisar o diff e abrir um pull request, com Claude Code, Codex e outros oito agentes. Em 10 de abril de 2026, a bloop, empresa por trás dele, anunciou que estava encerrando as atividades. O app open source ainda roda localmente, mas as issues, comentários, projetos e organizações hospedados acabaram, e a última versão saiu em 24 de abril de 2026. Este guia mostra o que ainda funciona, como preservar o seu trabalho e quais são as alternativas.",
    cta: "Começar",
    secondary: "Compare as alternativas",
    secondaryHref: "#alternatives",
  },
  sections: [
    {
      kind: "text",
      title: "O que aconteceu com o Vibe Kanban",
      text: [
        "A bloop disse que a maioria dos usuários estava em planos gratuitos e que não encontrou um modelo de negócio que quisesse seguir. Os serviços remotos ficaram no ar por 30 dias após o anúncio, e depois o Vibe Kanban passou para uma arquitetura totalmente local; as páginas de projeto agora levam a uma exportação de dados. As faturas pagas nos 30 dias anteriores foram reembolsadas.",
      ],
      points: [
        "Ainda funciona: `npx vibe-kanban` inicia o app local, e os workspaces locais continuam funcionando. O código segue open source sob Apache 2.0 e é mantido pela comunidade.",
        "Acabou: as issues de kanban, comentários, projetos e organizações hospedados que as equipes compartilhavam.",
        "Perdendo fôlego: não sai nenhuma versão desde a v0.1.44, de 24 de abril de 2026, então as novas versões dos agentes não estão sendo incorporadas.",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Como preservar o seu trabalho",
      steps: [
        {
          title: "Exporte seus dados",
          text: "Abra a versão mais recente do app e use a exportação de dados. As páginas de projeto agora levam direto a ela.",
        },
        {
          title: "Faça push de cada branch que importa",
          text: "Cada workspace era uma git worktree na própria branch. Faça commit e push das que você quer manter, para que o código fique no seu repositório e não no app.",
          code: keep,
        },
        {
          title: "Leve as issues abertas para um lugar compartilhado",
          text: "Se a sua equipe usava o quadro hospedado, recrie as issues abertas no GitHub Issues ou no quadro da ferramenta que você escolher, antes que alguém esqueça do que se tratavam.",
        },
        {
          title: "Teste uma tarefa real no substituto",
          text: "Compare as opções abaixo e leve uma issue do início até o pull request antes de migrar tudo.",
        },
      ],
      source: { label: "Fonte: o anúncio de encerramento do Vibe Kanban", href: shutdown },
    },
    {
      kind: "table",
      id: "alternatives",
      title: "Alternativas ao Vibe Kanban comparadas",
      text: ["Dados do site ou do repositório no GitHub de cada projeto em 7 de novembro de 2026."],
      headers: ["", "O que é", "Agentes", "Plataformas", "Quadro", "Licença"],
      rows: [
        ["Vibe Kanban (comunidade)", "App local: issues de kanban, um workspace por issue, revisão de diff, PRs", "Claude Code, Codex, Gemini CLI, Copilot, Amp, Cursor, OpenCode e outros", "Roda com `npx`; remoto via Docker", "Sim, agora só local", "Apache 2.0"],
        ["Paradev (antigo Superset)", "Workspace desktop que roda vários agentes em paralelo, cada um na própria worktree; automações e sandboxes na nuvem", "Claude, Codex, Cursor Agent, OpenCode e qualquer agente de CLI", "macOS; Linux experimental; ainda sem Windows", "Nenhum quadro descrito", "MIT"],
        ["Nimbalyst", "Workspace visual para agentes, tarefas, docs, wiki, diagramas e código", "Claude Code, Codex", "macOS, Windows, Linux", "Tarefas ao lado de docs e código", "Open source; gratuito para uso individual"],
        ["Claude Squad", "App de terminal: uma sessão tmux mais uma git worktree por agente", "Claude Code, Codex, Gemini, Aider", "Precisa de tmux e gh", "Não (lista em TUI)", "AGPL-3.0"],
        ["Kanban Code", "Quadro kanban para sessões do Claude Code com uma worktree por card", "Claude Code", "App para macOS 26, Windows (Tauri)", "Backlog, In Progress, Waiting, In Review, Done", "Apache 2.0"],
        ["Crewmark", "Funcionários de IA: sessões de agentes com papéis, metas, horários de trabalho e um heartbeat que pega a próxima issue", "Claude Code, Codex, DeepSeek Harness, OpenCode", "Quadro web; daemon no macOS, Windows, Linux", "Sim, hospedado e compartilhado com a sua equipe", "Comercial"],
      ],
    },
    {
      kind: "text",
      title: "Qual alternativa ao Vibe Kanban combina com você",
      points: [
        "Você quer o mesmo app, do jeito que é: continue rodando a versão da comunidade localmente e acompanhe o repositório para ver se surge um fork mantido.",
        "Você rodava principalmente agentes em paralelo e revisava diffs: o Paradev é o app desktop mantido mais parecido, no Mac e no Linux. A própria flag `--worktree` do Claude Code também cobre sessões paralelas isoladas; veja o [guia de worktrees do Claude Code](/blog/claude-code-worktree).",
        "Você vive no terminal: o Claude Squad dá a cada agente uma sessão tmux e uma worktree.",
        "Você quer o quadro em si, só para o Claude Code: o Kanban Code move os cards entre colunas conforme as sessões começam, esperam e abrem PRs.",
        "Você usava o quadro hospedado com uma equipe, ou quer que os agentes peguem issues sem você: é o Crewmark (abaixo). O Conductor era outra opção, mas [vai para a Meta e está sendo encerrado](/blog/conductor-alternatives).",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Com o Crewmark",
      title: "O Vibe Kanban esperava você iniciar cada card. O Crewmark não.",
      text: [
        "No Vibe Kanban você escrevia a issue e depois iniciava o agente. O Crewmark mantém o quadro, hospedado e compartilhado, e transforma uma sessão do Claude Code, Codex, DeepSeek Harness ou OpenCode em um funcionário de IA que acorda com um heartbeat durante o horário de trabalho e pega a próxima issue sozinho, na assinatura que você já paga.",
      ],
      steps: [
        {
          title: "Traga seu repositório e seu agente",
          text: "Rode o comando de setup no projeto. Cada funcionário trabalha na própria sessão e no próprio checkout, como um workspace do Vibe Kanban.",
        },
        {
          title: "Recrie seu quadro",
          text: "Adicione suas issues abertas e atribua-as a um funcionário, ou deixe-as sem responsável para quem estiver livre.",
        },
        {
          title: "Deixe o heartbeat iniciar o trabalho",
          text: "A cada 15, 30 ou 60 minutos, o funcionário pega a próxima issue, comenta enquanto trabalha e avisa você quando precisa de uma decisão. Leia [o que é um funcionário de IA](/ai-employees).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Preservar o seu trabalho após o encerramento do Vibe Kanban" },
  mid: {
    title: "Perdeu o quadro hospedado? Mantenha o quadro e adicione funcionários.",
    text: "O Crewmark dá à sua equipe um quadro compartilhado em que funcionários Claude Code e Codex pegam a próxima issue a cada heartbeat.",
    button: "Começar",
  },
  faq: {
    title: "Perguntas frequentes sobre o encerramento do Vibe Kanban",
    items: [
      {
        q: "O Vibe Kanban vai acabar?",
        a: "A empresa, sim. A bloop anunciou em 10 de abril de 2026 que estava encerrando as atividades. O app open source continua como um projeto mantido pela comunidade que roda localmente; as issues, comentários, projetos e organizações hospedados foram removidos após 30 dias.",
      },
      {
        q: "O Vibe Kanban ainda funciona?",
        a: "Localmente, sim: `npx vibe-kanban` ainda o inicia e os workspaces locais continuam funcionando. A última versão é a v0.1.44, de 24 de abril de 2026, então versões mais novas dos agentes podem não ser suportadas.",
      },
      {
        q: "Como exporto meus dados do Vibe Kanban?",
        a: "Use a exportação de dados da versão mais recente do app; as páginas de projeto agora levam a ela. Faça push também das branches dos seus workspaces para o seu remote git.",
      },
      {
        q: "Qual é a melhor alternativa ao Vibe Kanban?",
        a: "Para agentes em paralelo com revisão de diff, o Paradev (antigo Superset). Para um kanban de sessões do Claude Code, o Kanban Code. Para um fluxo no terminal, o Claude Squad. Para um quadro compartilhado em que os agentes pegam as issues sozinhos, o Crewmark.",
      },
      {
        q: "Existe alguma alternativa open source ao Vibe Kanban?",
        a: "Sim: Paradev (MIT), Claude Squad (AGPL-3.0) e Kanban Code (Apache 2.0) são open source, e o próprio Vibe Kanban continua open source sob Apache 2.0.",
      },
      {
        q: "Existe alguma alternativa ao Vibe Kanban para Windows?",
        a: "O Nimbalyst tem download para Windows e o Kanban Code tem um app para Windows. O quadro do Crewmark roda no navegador e o daemon dele roda no Windows. O Paradev ainda não suporta Windows.",
      },
    ],
  },
  cta: {
    title: "Seus agentes precisam de um quadro novo. Dê a eles um emprego também.",
    text: "O Crewmark transforma sessões do Claude Code, Codex, DeepSeek Harness e OpenCode em funcionários de IA com papéis, metas, horários de trabalho e um heartbeat.",
    button: "Começar",
  },
  checked: "Conferido com o README, as versões e o anúncio de encerramento do Vibe Kanban, e com o site ou o repositório de cada alternativa, em 7 de novembro de 2026.",
  disclaimer:
    "O Crewmark é um produto independente, sem afiliação nem endosso de bloop, Vibe Kanban, Paradev, Nimbalyst, Claude Squad, Kanban Code, Anthropic ou OpenAI. Os nomes de produtos são marcas de seus respectivos donos.",
};
