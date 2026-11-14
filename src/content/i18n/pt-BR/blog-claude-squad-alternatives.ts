import type { GuideCopy } from "@/components/landing/guide-article";

// Brazilian Portuguese translation of /blog/claude-squad-alternatives; the English master is src/content/blog/claude-squad-alternatives.ts.

const repo = "https://github.com/smtg-ai/claude-squad";

const usage = `# Claude Squad: Claude Code by default, or another agent with -p
cs
cs -p "codex"

# Claude Code on its own: one worktree and branch per session
claude --worktree fix-login
claude --worktree add-billing`;

export const copy: GuideCopy = {
  meta: {
    title: "Alternativas ao Claude Squad (e Claude Squad vs Conductor)",
    description:
      "O que o Claude Squad faz, onde ele deixa a desejar (só tmux, sem Windows, você inicia cada tarefa) e as alternativas para rodar vários agentes do Claude Code ou Codex: os worktrees do próprio Claude Code, Paradev, Kanban Code, Conductor e Crewmark.",
  },
  breadcrumb: "Alternativas ao Claude Squad",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-07" },
  hero: {
    kicker: "Blog · Agentes de programação com IA",
    title: "Alternativas ao Claude Squad: outras formas de rodar vários agentes de programação ao mesmo tempo",
    lead: "O Claude Squad é um app de terminal de código aberto (AGPL-3.0) para rodar vários agentes de programação lado a lado: cada tarefa ganha sua própria sessão do tmux e seu próprio worktree do git, e você revisa as mudanças antes de fazer push. Ele funciona bem se você vive no terminal no macOS ou Linux. As pessoas procuram uma alternativa quando querem um app gráfico, precisam de Windows ou querem que os agentes peguem o trabalho sem precisar iniciá-los um por um. Este guia compara as opções, incluindo Claude Squad vs Conductor.",
    cta: "Começar",
    secondary: "Compare as alternativas",
    secondaryHref: "#alternatives",
  },
  sections: [
    {
      kind: "text",
      title: "O que o Claude Squad faz bem e onde ele para",
      text: [
        "A versão mais recente do Claude Squad é a v1.0.20, de 20 de agosto de 2026, e ele continua sendo mantido. Ele roda o Claude Code por padrão e outros agentes de terminal com `-p`, como Codex ou Aider.",
      ],
      points: [
        "Bom: uma sessão do tmux e um worktree do git por tarefa, então os agentes nunca editam os mesmos arquivos.",
        "Bom: você revisa o diff de cada instância e faz checkout da branch dela antes do push.",
        "Bom: um modo experimental `-y` (auto-yes) aceita os prompts para que as tarefas terminem em segundo plano.",
        "Limite: precisa do tmux e do GitHub CLI; o README não menciona Windows, onde tmux significa usar WSL.",
        "Limite: é uma interface de terminal. Não há quadro nem visão compartilhada para uma equipe, e você inicia cada tarefa.",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Como rodar vários agentes em paralelo, com ou sem o Claude Squad",
      steps: [
        {
          title: "Dê a cada tarefa seu próprio worktree",
          text: "Essa é a base do Claude Squad, e o Claude Code agora faz isso sozinho: `claude --worktree <name>` inicia uma sessão em sua própria branch e checkout. Veja o [guia de worktrees do Claude Code](/blog/claude-code-worktree).",
          code: usage,
        },
        {
          title: "Escolha como acompanhá-los",
          text: "Uma lista no terminal (Claude Squad), um app desktop (Paradev, ou Conductor enquanto durar) ou um quadro kanban de sessões (Kanban Code). Veja [quadros kanban para Claude Code](/blog/claude-code-kanban).",
        },
        {
          title: "Decida quem inicia a próxima tarefa",
          text: "Em todas essas opções, você inicia cada sessão. Se quiser que os agentes peguem a próxima issue sozinhos, dê a eles um agendamento ou um heartbeat; veja [como tornar o Claude Code proativo](/proactive-claude-code).",
        },
        {
          title: "Revise antes do merge",
          text: "Seja qual for a ferramenta que roda os agentes, deixe o merge com uma pessoa: leia cada diff, rode as verificações e então faça o merge.",
        },
      ],
      source: { label: "Fonte: README do Claude Squad", href: repo },
    },
    {
      kind: "table",
      id: "alternatives",
      title: "Alternativas ao Claude Squad comparadas",
      text: ["Dados do site ou repositório de cada projeto, conferidos em novembro de 2026."],
      headers: ["", "Interface", "Agentes", "Plataformas", "Quem inicia as tarefas", "Licença"],
      rows: [
        ["Claude Squad", "Interface de terminal (tmux)", "Claude Code, Codex, Gemini, Aider", "Precisa de tmux e gh; Windows via WSL", "Você", "AGPL-3.0"],
        ["Claude Code sozinho", "`claude --worktree`, sessões em paralelo no app desktop", "Claude Code", "macOS, Windows, Linux", "Você (ou um agendamento)", "Comercial (Anthropic)"],
        ["Paradev (antigo Superset)", "App desktop, um worktree por tarefa; automações", "Claude, Codex, Cursor Agent, OpenCode e qualquer agente de CLI", "macOS; Linux experimental; ainda sem Windows", "Você, ou uma automação", "MIT"],
        ["Kanban Code", "Quadro kanban de sessões do Claude Code", "Claude Code", "App para macOS 26, app para Windows", "Você", "Apache 2.0"],
        ["Conductor", "App para Mac de agentes em paralelo; vai para a Meta, a nuvem acaba em 20 de novembro de 2026", "Claude Code, Codex, Cursor, OpenCode", "macOS", "Você", "Comercial"],
        ["Crewmark", "Quadro hospedado com funcionários de IA que acordam com um heartbeat", "Claude Code, Codex, DeepSeek Harness, OpenCode", "Quadro web; daemon no macOS, Windows, Linux", "O funcionário pega a próxima issue", "Comercial"],
      ],
    },
    {
      kind: "text",
      title: "Claude Squad vs Conductor",
      text: [
        "Os dois rodam vários agentes em worktrees paralelos. O Claude Squad é um app de terminal gratuito e de código aberto; o Conductor era um app para Mac caprichado, com fluxo de revisão e workspaces na nuvem. O Conductor [vai para a Meta](/blog/conductor-alternatives): novos cadastros estão fechados, a nuvem dele desliga em 20 de novembro de 2026 e o app local recebe atualizações só até o início de 2027. Se você fosse escolher entre os dois hoje, o Claude Squad é o que continua em desenvolvimento.",
      ],
    },
    {
      kind: "text",
      title: "Qual alternativa ao Claude Squad combina com você",
      points: [
        "Você só usa o Claude Code: experimente a flag `--worktree` embutida e as sessões em paralelo do app desktop antes de adicionar outra ferramenta.",
        "Você quer um app desktop para muitos agentes no Mac: Paradev.",
        "Você quer ver as sessões como cartões: Kanban Code, ou leia [quadros kanban para Claude Code](/blog/claude-code-kanban).",
        "Você usa Windows: a CLI e o app desktop do Claude Code rodam nativamente; o Claude Squad precisa de WSL.",
        "Você quer que os agentes continuem trabalhando sem que você inicie cada tarefa, com um quadro compartilhado pela equipe: Crewmark (abaixo). Veja também [vários agentes do Claude Code](/blog/multiple-claude-code-agents).",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Com o Crewmark",
      title: "De um squad que você pilota a uma equipe que trabalha sozinha",
      text: [
        "O Claude Squad facilita rodar agentes em paralelo, mas cada um espera você iniciá-lo. O Crewmark transforma uma sessão do Claude Code, Codex, DeepSeek Harness ou OpenCode em um funcionário de IA com um papel, uma meta e um horário de trabalho. Ele acorda com um heartbeat, pega a próxima issue de um quadro compartilhado, trabalha no próprio checkout e manda mensagem quando precisa de uma decisão, na assinatura que você já paga.",
      ],
      steps: [
        {
          title: "Conecte seu repositório e seu agente",
          text: "Rode o comando de configuração no projeto. Vários funcionários podem compartilhar um repositório, cada um no próprio checkout.",
        },
        {
          title: "Dê um papel a cada um",
          text: "Um engenheiro, um revisor, um redator de SEO, cada um com uma meta. Veja [papéis de funcionários de IA](/ai-employees).",
        },
        {
          title: "Preencha o quadro e revise",
          text: "A cada 15, 30 ou 60 minutos durante o horário de trabalho, cada funcionário pega a próxima issue; você revisa os pull requests e responde às perguntas.",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Rodar vários agentes de programação em paralelo" },
  mid: {
    title: "Cansado de iniciar cada agente você mesmo?",
    text: "Os funcionários de IA do Crewmark pegam a próxima issue a cada heartbeat, no plano do Claude Code ou Codex que você já paga.",
    button: "Começar",
  },
  faq: {
    title: "Perguntas frequentes sobre o Claude Squad",
    items: [
      {
        q: "O que é o Claude Squad?",
        a: "Um app de terminal de código aberto (AGPL-3.0) da smtg-ai que roda vários agentes de programação ao mesmo tempo, cada um em sua própria sessão do tmux e seu próprio worktree do git, para que você revise cada mudança antes do push.",
      },
      {
        q: "O Claude Squad funciona com o Codex?",
        a: "Sim. Rode com `cs -p \"codex\"` depois de configurar sua chave de API da OpenAI. Ele também inicia Gemini e Aider, e o Claude Code por padrão.",
      },
      {
        q: "O Claude Squad funciona no Windows?",
        a: "O README dele não menciona Windows e ele precisa do tmux, então no Windows você o rodaria no WSL. A flag `--worktree` do Claude Code e o app desktop dele rodam nativamente no Windows.",
      },
      {
        q: "O Claude Squad ainda é mantido?",
        a: "Sim. A versão mais recente é a v1.0.20, de 20 de agosto de 2026.",
      },
      {
        q: "Claude Squad ou Conductor?",
        a: "O Conductor vai para a Meta e está sendo encerrado, com a nuvem acabando em 20 de novembro de 2026. O Claude Squad é de código aberto e continua em desenvolvimento.",
      },
      {
        q: "Ainda preciso do Claude Squad agora que o Claude Code tem worktrees?",
        a: "Não só para isolamento: `claude --worktree` dá a cada sessão sua própria branch. O Claude Squad ainda ajuda se você quer uma única visão no terminal para gerenciar muitas sessões e agentes além do Claude Code.",
      },
    ],
  },
  cta: {
    title: "Comande uma equipe, não só um squad.",
    text: "O Crewmark transforma sessões do Claude Code, Codex, DeepSeek Harness e OpenCode em funcionários de IA com papéis, metas, horários de trabalho e um heartbeat.",
    button: "Começar",
  },
  checked: "Conferido com o README e as versões do Claude Squad e com o site ou o repositório de cada alternativa, em 7 de novembro de 2026.",
  disclaimer:
    "O Crewmark é um produto independente, sem afiliação nem endosso de smtg-ai, Claude Squad, Paradev, Kanban Code, Conductor, Anthropic ou OpenAI. Os nomes de produtos são marcas registradas de seus respectivos donos.",
};
