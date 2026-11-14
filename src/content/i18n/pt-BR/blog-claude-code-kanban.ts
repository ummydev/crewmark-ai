import type { GuideCopy } from "@/components/landing/guide-article";

// Brazilian Portuguese translation of /blog/claude-code-kanban; the English master is src/content/blog/claude-code-kanban.ts.

const docs = "https://code.claude.com/docs/en/interactive-mode";

const setup = `// ~/.claude/settings.json: only needed if your model
// doesn't have the task tools by default
{
  "env": { "CLAUDE_CODE_ENABLE_TODO_TOOLS": "1" }
}

# Install the board, add its hooks once, then open it
npm install -g claude-code-kanban
claude-code-kanban --install
claude-code-kanban --open`;

const shared = `# Several sessions share one task list
CLAUDE_CODE_TASK_LIST_ID=my-project claude`;

export const copy: GuideCopy = {
  meta: {
    title: "Quadro kanban do Claude Code: tarefas e ferramentas",
    description:
      "O Claude Code tem uma lista de tarefas (Ctrl+T), mas não um quadro kanban. Como a lista de tarefas funciona, como levá-la para um quadro e as ferramentas kanban para sessões do Claude Code: claude-code-kanban, Kanban Code, Claudine, Vibe Kanban e Crewmark.",
  },
  breadcrumb: "Quadro kanban do Claude Code",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-07" },
  hero: {
    kicker: "Blog · Claude Code",
    title: "Quadro kanban do Claude Code: da lista de tarefas a um quadro de verdade",
    lead: "O Claude Code não vem com um quadro kanban. Ele tem uma lista de tarefas: um checklist que o Claude escreve para trabalhos com várias etapas, com itens pendentes, em andamento e concluídos, exibido ou ocultado com Ctrl+T. Um \"quadro kanban do Claude Code\" é uma de duas coisas construídas por cima: um quadro que mostra essa lista de tarefas no seu navegador, ou um quadro em que cada card é uma sessão ou issue inteira do Claude Code. Este guia cobre a lista de tarefas nativa, como montar um quadro e as ferramentas de cada tipo.",
    cta: "Começar",
    secondary: "Monte um quadro",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "O que o Claude Code tem de fábrica: a lista de tarefas",
      text: [
        "A lista de tarefas é o próprio checklist do Claude para o trabalho à sua frente. Ela não é a visão de tarefas em segundo plano: `/tasks` mostra os shells e subagentes em execução.",
      ],
      points: [
        "Pressione `Ctrl+T` para mostrá-la ou ocultá-la. Ela exibe até cinco tarefas por vez.",
        "As tarefas sobrevivem à compactação do contexto, então o Claude mantém o plano em trabalhos longos.",
        "Peça ao Claude \"show me all tasks\" ou \"clear all tasks\".",
        "Defina `CLAUDE_CODE_TASK_LIST_ID` para compartilhar uma lista entre sessões; ela fica salva em um diretório nomeado dentro de `~/.claude/tasks/`.",
        "As ferramentas de tarefas vêm ativadas por padrão no Opus 4.7, Sonnet 4.6, Haiku 4.5 e modelos anteriores. Em outros modelos a lista fica vazia, a menos que você defina `CLAUDE_CODE_ENABLE_TODO_TOOLS=1`.",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Como colocar as tarefas do Claude Code em um quadro kanban",
      text: [
        "Aqui usamos o claude-code-kanban, um quadro de código aberto que observa os arquivos de tarefas que o Claude Code escreve e os mostra no seu navegador.",
      ],
      steps: [
        {
          title: "Confirme que as ferramentas de tarefas estão ativadas",
          text: "Se o Claude nunca mostra um checklist com `Ctrl+T`, seu modelo não tem as ferramentas de tarefas por padrão. Adicione a variável de ambiente às suas configurações e reinicie o Claude Code.",
          code: setup,
        },
        {
          title: "Instale o quadro e seus hooks",
          text: "`claude-code-kanban --install` adiciona um plugin do Claude Code com hooks. Sem os hooks, o quadro mostra apenas as tarefas, sem atividade ao vivo nem prompts aguardando resposta.",
        },
        {
          title: "Abra e continue trabalhando",
          text: "Os cards passam por Pending, In Progress e Completed conforme o Claude trabalha, e você pode responder às perguntas do Claude pelo quadro. Ele escuta apenas em 127.0.0.1, sem login, então mantenha-o na sua própria máquina.",
        },
        {
          title: "Compartilhe um quadro entre sessões",
          text: "Inicie cada sessão com o mesmo ID de lista de tarefas, para que várias sessões do Claude Code leiam e atualizem uma única lista.",
          code: shared,
        },
      ],
      source: { label: "Fonte: documentação do Claude Code, Interactive mode (Task list)", href: docs },
    },
    {
      kind: "table",
      id: "tools",
      title: "Ferramentas kanban para o Claude Code comparadas",
      text: ["Dados do README ou da página de cada projeto em 7 de novembro de 2026."],
      headers: ["Ferramenta", "O que é um card", "Onde roda", "Agentes", "Licença"],
      rows: [
        ["claude-code-kanban", "Uma tarefa da lista de tarefas do Claude", "Navegador, na sua máquina", "Claude Code", "MIT"],
        ["Kanban Code", "Uma sessão do Claude Code, com sua própria worktree; colunas Backlog, In Progress, Waiting, In Review, Done", "App para macOS 26; app para Windows", "Claude Code", "Apache 2.0"],
        ["Claudine", "Uma conversa do Claude Code ou do Codex, com status, branch e erros detectados", "Extensão do VS Code", "Claude Code, Codex", "MIT"],
        ["Vibe Kanban", "Uma issue para a qual você inicia um workspace; a empresa encerrou as atividades e o app roda localmente", "`npx vibe-kanban`", "Claude Code, Codex e muitos outros", "Apache 2.0"],
        ["Crewmark", "Uma issue que um funcionário de IA pega sozinho, a cada heartbeat", "Quadro web hospedado, compartilhado com uma equipe", "Claude Code, Codex, DeepSeek Harness, OpenCode", "Comercial"],
      ],
    },
    {
      kind: "text",
      title: "De que tipo de quadro você precisa",
      points: [
        "Você quer acompanhar o plano de uma sessão: a própria lista de tarefas do Claude Code (`Ctrl+T`) pode bastar; adicione o claude-code-kanban para uma visão maior no navegador.",
        "Você roda várias sessões em paralelo e perde a noção de qual precisa de você: um quadro de sessões como o Kanban Code ou o Claudine mostra quais estão trabalhando, esperando ou prontas para revisão. Veja [vários agentes do Claude Code](/blog/multiple-claude-code-agents) e o [guia de worktrees](/blog/claude-code-worktree).",
        "Você usava o Vibe Kanban: veja as [alternativas ao Vibe Kanban](/blog/vibe-kanban-alternatives).",
        "Você quer que o quadro conduza o trabalho, para que os agentes peguem o próximo card sem você: é para isso que serve o Crewmark (abaixo).",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Com o Crewmark",
      title: "Um quadro kanban em que o Claude Code pega o próximo card sozinho",
      text: [
        "Todas as ferramentas acima mostram o que o Claude está fazendo; você ainda inicia cada sessão e move cada card. O Crewmark transforma uma sessão do Claude Code, Codex, DeepSeek Harness ou OpenCode em um funcionário de IA com um papel, uma meta e horários de trabalho. Ele acorda com um heartbeat, pega a próxima issue de um quadro compartilhado, comenta enquanto trabalha e manda mensagem quando precisa de uma decisão.",
      ],
      steps: [
        {
          title: "Conecte seu projeto e seu agente",
          text: "Rode o comando de configuração no repositório; o funcionário trabalha na própria sessão e no próprio checkout, na assinatura que você já paga.",
        },
        {
          title: "Preencha o quadro",
          text: "Escreva as issues como faria para um colega de equipe, e atribua-as ou deixe-as para quem estiver livre.",
        },
        {
          title: "Revise em vez de iniciar",
          text: "A cada 15, 30 ou 60 minutos durante o horário de trabalho, o funcionário pega o próximo card. Veja [como tornar o Claude Code proativo](/proactive-claude-code) e [o que é um funcionário de IA](/ai-employees).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Colocar as tarefas do Claude Code em um quadro kanban" },
  mid: {
    title: "Pare de mover os cards você mesmo.",
    text: "O quadro do Crewmark atribui issues a funcionários Claude Code e Codex que acordam com um heartbeat e pegam a próxima.",
    button: "Começar",
  },
  faq: {
    title: "Perguntas frequentes sobre kanban no Claude Code",
    items: [
      {
        q: "O Claude Code tem um quadro kanban?",
        a: "Não. Ele tem uma lista de tarefas, um checklist de itens pendentes, em andamento e concluídos que você mostra ou oculta com Ctrl+T. Quadros kanban para o Claude Code são ferramentas de terceiros construídas sobre os arquivos de tarefas ou de sessão dele.",
      },
      {
        q: "Como vejo a lista de tarefas do Claude Code?",
        a: "Pressione Ctrl+T em uma sessão. Ela mostra até cinco tarefas; peça ao Claude \"show me all tasks\" para ver a lista completa. Para shells e subagentes em execução, use /tasks.",
      },
      {
        q: "Por que minha lista de tarefas do Claude Code está vazia?",
        a: "Ou o Claude ainda não planejou nenhum trabalho com várias etapas, ou seu modelo não tem as ferramentas de tarefas por padrão. Defina CLAUDE_CODE_ENABLE_TODO_TOOLS=1 no seu ambiente ou nas configurações e reinicie.",
      },
      {
        q: "Várias sessões do Claude Code podem compartilhar uma lista de tarefas?",
        a: "Sim. Inicie cada uma com o mesmo CLAUDE_CODE_TASK_LIST_ID, por exemplo CLAUDE_CODE_TASK_LIST_ID=my-project claude; a lista fica salva em ~/.claude/tasks/.",
      },
      {
        q: "Existe um plugin kanban para o Claude Code?",
        a: "O claude-code-kanban instala um plugin do Claude Code com hooks que alimentam seu quadro no navegador. O Claudine é uma extensão do VS Code, e o Kanban Code é um app desktop.",
      },
      {
        q: "Existe um quadro kanban para Claude Code e Codex juntos?",
        a: "O Claudine lê conversas tanto do Claude Code quanto do Codex. O Vibe Kanban suporta muitos agentes, mas a empresa encerrou as atividades. O quadro do Crewmark atribui issues a funcionários Claude Code, Codex, DeepSeek Harness e OpenCode.",
      },
    ],
  },
  cta: {
    title: "Transforme seu quadro do Claude Code em uma equipe que trabalha nele.",
    text: "O Crewmark transforma sessões do Claude Code, Codex, DeepSeek Harness e OpenCode em funcionários de IA com papéis, metas, horários de trabalho e um heartbeat.",
    button: "Começar",
  },
  checked: "Conferido com a documentação do Claude Code (Interactive mode) e com o README ou a página de cada ferramenta em 7 de novembro de 2026.",
  disclaimer:
    "O Crewmark é um produto independente, sem afiliação nem endosso da Anthropic ou dos projetos citados aqui. Claude e Claude Code são marcas registradas da Anthropic.",
};
