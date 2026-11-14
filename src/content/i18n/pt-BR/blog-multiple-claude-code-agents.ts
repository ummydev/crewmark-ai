import type { GuideCopy } from "@/components/landing/guide-article";

// pt-BR translation of /blog/multiple-claude-code-agents; the English master is
// src/content/blog/multiple-claude-code-agents.ts.

const subagent = `---
name: code-reviewer
description: Reviews code for quality and best practices
tools: Read, Glob, Grep
model: sonnet
---

You are a code reviewer. When invoked, analyze the code and give
specific, actionable feedback on quality, security and best practices.`;

export const copy: GuideCopy = {
  meta: {
    title: "Claude Code multiagente: subagentes, worktrees | Crewmark AI",
    description:
      "Rode vários agentes do Claude Code de uma vez: subagentes, sessões paralelas em git worktrees, sessões com --bg e agent teams, sem conflitos de edição.",
  },
  breadcrumb: "Vários agentes do Claude Code",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-02" },
  hero: {
    kicker: "Blog · Claude Code",
    title: "Como rodar vários agentes do Claude Code ao mesmo tempo",
    lead: "O Claude Code consegue trabalhar em várias coisas ao mesmo tempo, de quatro jeitos diferentes: subagentes dentro de uma conversa, sessões separadas cada uma na sua git worktree, sessões em background que você inicia com --bg e os agent teams experimentais, em que os agentes trocam mensagens entre si. Este guia mostra como configurar cada um, qual escolher e como evitar que agentes em paralelo sobrescrevam o trabalho uns dos outros.",
    cta: "Começar",
    secondary: "Ir para as worktrees",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "table",
      title: "Quatro jeitos de rodar agentes do Claude Code em paralelo",
      headers: ["", "O que roda em paralelo", "Arquivos separados?", "Ideal para"],
      rows: [
        ["Subagentes", "Workers dentro de uma conversa, cada um com o próprio contexto", "Não, a menos que configurados com `isolation: worktree`", "Pesquisa, revisões e tarefas paralelas que voltam com um relatório"],
        ["Sessões em worktrees", "Sessões completas, cada uma na própria git worktree", "Sim, uma branch para cada", "Várias features ou correções ao mesmo tempo"],
        ["Sessões em background", "Sessões iniciadas com `claude --bg`, gerenciadas no agent view", "Sim, uma worktree para cada, por padrão", "Disparar tarefas agora e conferir depois"],
        ["Agent teams", "Uma sessão líder mais colegas que compartilham uma lista de tarefas", "Não: divida os arquivos entre os colegas", "Trabalho em que os agentes precisam conversar entre si"],
      ],
    },
    {
      kind: "steps",
      title: "Subagentes: ajudantes em paralelo dentro de uma sessão",
      text: [
        "Um subagente tem a própria janela de contexto, o próprio system prompt e as próprias ferramentas. Ele não vê a sua conversa, e só o resumo dele volta, o que mantém pequeno o contexto da sessão principal. O Claude Code já vem com alguns nativos, como Explore (somente leitura) e Plan, e você pode criar os seus.",
      ],
      steps: [
        {
          title: "Defina um subagente",
          text: "Crie um arquivo Markdown em `.claude/agents/` (compartilhado com o projeto) ou em `~/.claude/agents/` (só para você). Apenas `name` e `description` são obrigatórios; `tools` limita o que ele pode usar e `model` escolhe o modelo.",
          code: subagent,
        },
        {
          title: "Deixe o Claude rodar vários de uma vez",
          text: "Peça o trabalho em paralelo, por exemplo: “revise os módulos de auth, billing e search em paralelo”. Os subagentes que o Claude cria começam em background por padrão, até 20 de cada vez, e informam o resultado quando terminam. Digite `/tasks` para vê-los.",
        },
        {
          title: "Dê uma worktree própria aos subagentes que editam arquivos",
          text: "Adicione `isolation: worktree` ao frontmatter do subagente ou peça ao Claude que use worktrees para os agentes dele. Cada um passa a editar uma cópia temporária do repositório, que é removida se ele não fizer alterações.",
        },
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Rode sessões paralelas do Claude Code em git worktrees",
      text: [
        "Para todas as opções, configurações e soluções, veja o [guia completo de worktrees no Claude Code](/blog/claude-code-worktree).",
      ],
      steps: [
        {
          title: "Ignore a pasta das worktrees",
          text: "O Claude Code cria as worktrees em `.claude/worktrees/`, na raiz do repositório. O repositório precisa ter pelo menos um commit.",
          code: 'echo ".claude/worktrees/" >> .gitignore',
        },
        {
          title: "Inicie uma sessão por tarefa",
          text: "Em cada terminal, rode `claude --worktree` (ou `-w`) com um nome diferente. Cada sessão ganha a própria pasta e uma branch chamada `worktree-<name>`, baseada na branch padrão.",
          code: "# terminal 1\nclaude --worktree feature-auth\n\n# terminal 2\nclaude --worktree bugfix-login",
        },
        {
          title: "Copie os arquivos não versionados de que você precisa",
          text: "Uma worktree nova só tem os arquivos versionados. Liste arquivos como `.env` em um arquivo `.worktreeinclude` (com a sintaxe do gitignore) e o Claude Code os copia para lá.",
          code: ".env\n.env.local",
        },
        {
          title: "Faça o merge e limpe",
          text: "Quando uma sessão termina, uma worktree sem alterações é removida junto com a branch; se houver alterações, ele pergunta se deve mantê-la. Faça o merge das branches como faria com qualquer outra. Execuções headless com `-p` não perguntam, então remova essas worktrees com `git worktree remove`.",
        },
        {
          title: "Ou use o app desktop",
          text: "Pressione Cmd+N (Ctrl+N no Windows) para uma nova sessão e ative Worktree antes de iniciá-la; a opção vem desativada. As sessões podem ficar lado a lado na visualização dividida.",
        },
      ],
      source: { label: "Fonte: documentação da Anthropic sobre worktrees", href: "https://code.claude.com/docs/en/worktrees" },
    },
    {
      kind: "text",
      title: "Sessões em background com --bg e o agent view",
      text: [
        "`claude --bg \"<prompt>\"` inicia uma sessão em background e retorna na hora, então você pode iniciar várias em sequência. Cada uma vai para a própria worktree antes de editar qualquer coisa. `claude agents` as lista; `claude logs <id>`, `claude attach <id>` e `claude stop <id>` gerenciam uma delas.",
        "Elas continuam rodando depois que você fecha o terminal, mas não depois que o computador desliga. O agent view é um research preview. Para saber mais sobre execuções sem supervisão, veja [como rodar agentes do Claude Code em segundo plano](/blog/claude-code-background-agents).",
      ],
    },
    {
      kind: "text",
      title: "Agent teams: agentes que conversam entre si",
      text: [
        "Os agent teams são experimentais e vêm desativados. Ative-os com `CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1` no seu shell ou no bloco `env` do settings.json e depois peça ao Claude para “criar três colegas de equipe” para uma tarefa. Os colegas compartilham uma lista de tarefas e trocam mensagens; eles aparecem no terminal ou em painéis divididos com tmux ou iTerm2.",
      ],
      points: [
        "Só em sessões interativas: `-p` e o Agent SDK não criam colegas de equipe.",
        "Um time por sessão, sem times aninhados, e colegas que rodam no mesmo processo não são restaurados pelo `/resume`.",
        "Os colegas compartilham um único checkout, então dê a cada um um conjunto diferente de arquivos.",
        "Eles custam bem mais: a documentação da Anthropic estima que um time gasta cerca de 7 vezes os tokens de uma única sessão quando os colegas rodam em plan mode.",
      ],
    },
    {
      kind: "text",
      title: "Evite que agentes em paralelo sobrescrevam o trabalho uns dos outros",
      points: [
        "Se dois agentes podem mexer nos mesmos arquivos, dê a cada um a própria worktree. Uma sessão em uma worktree não consegue editar o checkout principal, e os subagentes dela também não.",
        "Em um agent team, divida o trabalho por arquivos: dois colegas editando o mesmo arquivo sobrescrevem um ao outro.",
        "Todos os subagentes e sessões consomem os mesmos limites de uso, então rodar vários multiplica o consumo. Use `model: haiku` para subagentes simples.",
        "Agentes que rodam os mesmos testes ou o mesmo servidor de desenvolvimento podem disputar portas; dê a cada um a sua porta.",
      ],
    },
    {
      kind: "steps",
      kicker: "Com o Crewmark",
      title: "Transforme agentes paralelos em um time com cargos",
      text: [
        "Worktrees e agent teams dividem uma tarefa que você está acompanhando. O Crewmark roda várias sessões do Claude Code ou do Codex como funcionários, cada um com cargo, metas e horário de trabalho próprios, e passa trabalho para eles em um único quadro.",
      ],
      steps: [
        {
          title: "Um funcionário por cargo",
          text: "Um especialista em SEO, um engenheiro de software e um UI designer vivem cada um na própria conversa, com as próprias instruções e a própria meta.",
        },
        {
          title: "Um quadro para todos eles",
          text: "Atribua as tarefas ao funcionário mais adequado. Cada um acorda no ritmo do seu heartbeat, pega a próxima tarefa e comenta enquanto avança, então você vê quem está fazendo o quê.",
        },
        {
          title: "Eles perguntam a você, não uns aos outros",
          text: "Quando um funcionário precisa de uma revisão ou de uma permissão, ele manda mensagem para você e segue em frente. Leia [o que é um funcionário de IA](/ai-employees).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Rodar sessões paralelas do Claude Code em git worktrees" },
  mid: {
    title: "Roda vários agentes todo dia?",
    text: "O Crewmark dá a cada sessão do Claude Code um cargo, uma meta e horário de trabalho, e coloca todo o trabalho delas em um único quadro.",
    button: "Começar",
  },
  faq: {
    title: "Perguntas sobre vários agentes do Claude Code",
    items: [
      {
        q: "Posso rodar vários agentes do Claude Code ao mesmo tempo?",
        a: "Sim. O Claude pode rodar subagentes em paralelo dentro de uma sessão, você pode rodar várias sessões em git worktrees separadas com `claude --worktree`, iniciar sessões em background com `claude --bg` ou experimentar os agent teams experimentais.",
      },
      {
        q: "Qual a diferença entre subagentes e agent teams?",
        a: "Subagentes fazem uma tarefa e devolvem um resumo para a sessão que os iniciou. Agent teams são instâncias separadas do Claude Code que compartilham uma lista de tarefas e trocam mensagens diretamente; eles são experimentais e gastam mais tokens.",
      },
      {
        q: "Quantos subagentes podem rodar ao mesmo tempo?",
        a: "Até 20 de cada vez, por padrão. `CLAUDE_CODE_MAX_CONCURRENT_SUBAGENTS` muda o limite. Os subagentes também podem iniciar os próprios subagentes, até três níveis de profundidade por padrão.",
      },
      {
        q: "Como evito que agentes em paralelo editem os mesmos arquivos?",
        a: "Coloque cada um na própria git worktree: `claude --worktree <name>` para sessões, `isolation: worktree` para subagentes. Sessões em background iniciadas com `--bg` ganham uma automaticamente. Os agent teams compartilham um checkout, então atribua arquivos a cada colega.",
      },
      {
        q: "Rodar vários agentes custa mais?",
        a: "Sim. Cada subagente e cada sessão envia as próprias requisições, que contam para os mesmos limites de uso, então rodar vários ao mesmo tempo multiplica o consumo.",
      },
      {
        q: "Onde ficam as worktrees do Claude Code?",
        a: "Em `.claude/worktrees/<name>/`, na raiz do repositório, em uma branch chamada `worktree-<name>`. Adicione essa pasta ao `.gitignore`.",
      },
    ],
  },
  cta: {
    title: "Rode um time de agentes do Claude Code com cargos.",
    text: "O Crewmark transforma sessões do Claude Code e do Codex em funcionários de IA com cargos, metas e horário de trabalho, em um único quadro.",
    button: "Começar",
  },
  checked: "Conferido com a documentação do Claude Code da Anthropic em 2 de novembro de 2026.",
  disclaimer:
    "O Crewmark é um produto independente, sem vínculo com a Anthropic e sem endosso dela. Claude e Claude Code são marcas da Anthropic.",
};
