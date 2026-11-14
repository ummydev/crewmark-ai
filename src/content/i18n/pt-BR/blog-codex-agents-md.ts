import type { GuideCopy } from "@/components/landing/guide-article";

// Brazilian Portuguese translation of /blog/codex-agents-md; the English master is src/content/blog/codex-agents-md.ts.

const docs = "https://learn.chatgpt.com/docs/agent-configuration/agents-md";

const global = `# ~/.codex/AGENTS.md

## Working agreements

- Always run \`npm test\` after modifying JavaScript files.
- Prefer \`pnpm\` when installing dependencies.
- Ask for confirmation before adding new production dependencies.`;

const project = `# AGENTS.md (repository root)

## Repository expectations

- Run \`npm run lint\` before opening a pull request.
- Document public utilities in \`docs/\` when you change behavior.

# services/payments/AGENTS.override.md

## Payments service rules

- Use \`make test-payments\` instead of \`npm test\`.
- Never rotate API keys without notifying the security channel.`;

const config = `# ~/.codex/config.toml
project_doc_fallback_filenames = ["TEAM_GUIDE.md", ".agents.md"]
project_doc_max_bytes = 65536`;

const review = `## Code Review Rules

### Experiment cohorts

- Do not filter treatment comparisons on post-exposure behavior.
  Safe path: build cohorts from assignment or exposure.`;

export const copy: GuideCopy = {
  meta: {
    title: "AGENTS.md no Codex: local, ordem de carregamento e exemplos",
    description:
      "Como o Codex lê o AGENTS.md: o arquivo global em ~/.codex, os do projeto e das pastas, AGENTS.override.md, a ordem de carregamento, o limite de 32 KiB, regras de code review e exemplos.",
  },
  breadcrumb: "Guia do AGENTS.md no Codex",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-06" },
  hero: {
    kicker: "Blog · Codex",
    title: "AGENTS.md no Codex: onde fica, em que ordem carrega e o que escrever",
    lead: "O AGENTS.md é o arquivo de instruções que o Codex da OpenAI lê antes de começar qualquer trabalho: seus comandos de build e de testes, suas convenções e regras, em Markdown simples. O Codex combina um arquivo global em `~/.codex` com os arquivos do seu repositório, da raiz até a pasta em que você está trabalhando. Este guia cobre todos os locais, a ordem exata de carregamento e o limite de tamanho, os overrides, os nomes de arquivo alternativos, as regras de code review e exemplos para copiar.",
    cta: "Começar",
    secondary: "Ir para a configuração",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "table",
      id: "order",
      title: "Onde o Codex procura o AGENTS.md, em ordem de carregamento",
      text: [
        "O Codex monta a cadeia de instruções uma única vez ao iniciar (na interface de terminal, uma vez por sessão). Os arquivos são juntados de cima para baixo nesta tabela, então as instruções mais próximas do seu diretório de trabalho vêm depois e prevalecem.",
      ],
      headers: ["Ordem", "Local", "O que o Codex lê"],
      rows: [
        ["1. Global", "`~/.codex/` (ou `$CODEX_HOME`)", "`AGENTS.override.md` se existir, senão `AGENTS.md`; só o primeiro que não estiver vazio"],
        ["2. Raiz do projeto", "Normalmente a raiz do Git", "`AGENTS.override.md`, senão `AGENTS.md`, senão um nome alternativo; no máximo um arquivo"],
        ["3. Cada pasta abaixo", "Todo diretório da raiz até onde você iniciou o Codex", "A mesma verificação em cada diretório, um arquivo por diretório"],
        ["Fim", "Seu diretório atual", "As pastas abaixo dele não são lidas"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Como configurar o AGENTS.md para o Codex",
      steps: [
        {
          title: "Crie os padrões globais",
          text: "Execute `mkdir -p ~/.codex` e escreva em `~/.codex/AGENTS.md` as preferências que você quer em todos os repositórios. Para conferir se foi carregado, peça ao Codex um resumo das instruções dele.",
          code: global,
        },
        {
          title: "Adicione um arquivo de projeto e overrides onde os times divergem",
          text: "Coloque um `AGENTS.md` na raiz do repositório para a configuração comum. Em uma pasta com regras diferentes, adicione `AGENTS.override.md`: ele substitui o `AGENTS.md` dessa pasta, que o Codex passa a ignorar.",
          code: project,
        },
        {
          title: "Confira o que foi carregado",
          text: "Inicie o Codex na pasta que interessa, por exemplo `codex --cd services/payments`, e peça que ele liste as fontes de instruções que carregou. Ele deve listar o arquivo global, depois o da raiz e depois o da pasta.",
        },
        {
          title: "Reaproveite um nome de arquivo existente ou aumente o limite",
          text: "Se o seu repositório já guarda instruções em outro arquivo, adicione-o a `project_doc_fallback_filenames` em `~/.codex/config.toml`. O Codex para de adicionar arquivos quando o tamanho combinado chega a `project_doc_max_bytes`, 32 KiB por padrão.",
          code: config,
        },
        {
          title: "Adicione regras para o code review do Codex",
          text: "Para o `@codex review` no GitHub, adicione uma seção `## Code Review Rules` ao AGENTS.md mais próximo do código que ela rege. Diga o que deve ser apontado e qual é a alternativa segura; deixe formatação e lint para a CI.",
          code: review,
        },
      ],
      source: { label: "Fonte: documentação do Codex, Custom instructions with AGENTS.md", href: docs },
    },
    {
      kind: "text",
      title: "Boas práticas para o AGENTS.md",
      points: [
        "Fique no que o Codex não consegue descobrir sozinho: os comandos exatos de build, testes e lint (incluindo como rodar um único teste), as armadilhas do código e as decisões que não estão escritas em lugar nenhum.",
        "Coloque as regras mais específicas perto do código: um AGENTS.md aninhado em `services/payments/` é melhor do que um arquivo raiz longo com uma seção de pagamentos.",
        "Cuidado com o orçamento de 32 KiB: os arquivos são adicionados da raiz para baixo e o resto é cortado, então divida arquivos longos em arquivos aninhados ou aumente `project_doc_max_bytes`.",
        "Use `AGENTS.override.md` para mudanças temporárias, globais ou em uma pasta, e apague-o para voltar ao normal.",
        "Um AGENTS.md vazio é ignorado, e a busca naquele diretório passa para o próximo nome de arquivo.",
        "Use um `CODEX_HOME` separado para usuários de automação, para que as instruções globais deles não se misturem com as suas.",
      ],
    },
    {
      kind: "table",
      title: "AGENTS.md no Codex vs Claude Code e outros",
      text: [
        "O AGENTS.md é um formato aberto lido por muitos agentes, o que faz dele o melhor lugar para as instruções que você quer compartilhar. O Claude Code tem o próprio arquivo, o CLAUDE.md; veja o [guia do CLAUDE.md](/blog/claude-md) para os detalhes.",
      ],
      headers: ["", "Codex", "Claude Code"],
      rows: [
        ["Arquivo principal", "`AGENTS.md`", "`CLAUDE.md`; lê o `AGENTS.md` só se não houver CLAUDE.md"],
        ["Arquivo pessoal ou temporário", "`AGENTS.override.md`", "`CLAUDE.local.md`"],
        ["Arquivo global", "`~/.codex/AGENTS.md`", "`~/.claude/CLAUDE.md`"],
        ["Pastas aninhadas", "Da raiz até o diretório atual", "As superiores ao iniciar; as subpastas quando o Claude trabalha nelas"],
        ["Limite de tamanho", "32 KiB combinados por padrão", "Limites por arquivo; o ideal é ficar abaixo de 200 linhas"],
        ["Compartilhar um arquivo", "Nativo", "Coloque `@AGENTS.md` no início do CLAUDE.md"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Com o Crewmark",
      title: "O AGENTS.md diz ao Codex como. O Crewmark diz o que vem a seguir.",
      text: [
        "Um bom AGENTS.md faz cada sessão do Codex começar bem informada, mas a sessão continua esperando o seu prompt. O Crewmark transforma uma sessão do Codex, Claude Code, DeepSeek Harness ou OpenCode em um funcionário de IA com um papel, uma meta e um horário de trabalho, e a acorda com um heartbeat para pegar a próxima issue de um quadro.",
      ],
      steps: [
        {
          title: "Mantenha o AGENTS.md no repositório",
          text: "A sessão do Codex do funcionário lê o arquivo como a sua, então as convenções e os comandos de teste vêm junto.",
        },
        {
          title: "Deixe o heartbeat iniciar o trabalho",
          text: "Durante o horário de trabalho, o funcionário acorda a cada 15, 30 ou 60 minutos na mesma conversa; veja [como tornar o Codex proativo](/proactive-codex).",
        },
        {
          title: "Misture agentes em um só quadro",
          text: "Um único AGENTS.md pode atender funcionários do Codex e do Claude Code lado a lado; compare os dois em [Claude Code vs Codex](/blog/claude-code-vs-codex).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Configurar o AGENTS.md para o Codex" },
  mid: {
    title: "O Codex conhece suas regras. Quem passa a próxima tarefa?",
    text: "O Crewmark acorda o Codex com um heartbeat, um papel, uma meta e um quadro de issues, no plano do ChatGPT que você já paga.",
    button: "Começar",
  },
  faq: {
    title: "Perguntas frequentes sobre o AGENTS.md no Codex",
    items: [
      {
        q: "O que é o AGENTS.md no Codex?",
        a: "Um arquivo Markdown com instruções que o Codex lê antes de qualquer trabalho: comandos, convenções e regras do seu projeto. O Codex combina um arquivo global com os arquivos do seu repositório.",
      },
      {
        q: "Onde o Codex procura o AGENTS.md?",
        a: "Primeiro em `~/.codex` (ou `$CODEX_HOME`) e depois em cada diretório da raiz do projeto até a pasta onde você iniciou o Codex, lendo no máximo um arquivo por diretório.",
      },
      {
        q: "Em que ordem os arquivos AGENTS.md são carregados?",
        a: "Primeiro o global, depois o da raiz do projeto e então cada pasta aninhada até o diretório atual. Eles são juntados nessa ordem, então o arquivo mais próximo vem por último e tem prioridade.",
      },
      {
        q: "O que é o AGENTS.override.md?",
        a: "Um arquivo que o Codex lê no lugar do AGENTS.md no mesmo diretório, seja no nível global ou em uma pasta. Use-o para regras temporárias ou específicas de um time sem mexer no arquivo compartilhado.",
      },
      {
        q: "Existe limite de tamanho para o AGENTS.md?",
        a: "Sim: o Codex para de adicionar arquivos quando o tamanho combinado chega a `project_doc_max_bytes`, 32 KiB por padrão. Aumente o valor em `~/.codex/config.toml` ou divida as instruções em arquivos aninhados.",
      },
      {
        q: "Posso usar um único arquivo para o Codex e o Claude Code?",
        a: "Sim. Mantenha as instruções comuns no AGENTS.md e coloque `@AGENTS.md` no início do CLAUDE.md, com as notas exclusivas do Claude logo abaixo.",
      },
      {
        q: "O code review do Codex lê o AGENTS.md?",
        a: "Sim. Adicione uma seção `## Code Review Rules` ao AGENTS.md mais próximo do código, e o `@codex review` no GitHub vai aplicá-la.",
      },
    ],
  },
  cta: {
    title: "Dê um trabalho ao seu Codex bem informado.",
    text: "O Crewmark transforma sessões do Codex, Claude Code e DeepSeek Harness em funcionários de IA com papéis, metas, horários de trabalho e um heartbeat.",
    button: "Começar",
  },
  checked: "Conferido com a documentação do Codex da OpenAI (Custom instructions with AGENTS.md) em 6 de novembro de 2026.",
  disclaimer:
    "O Crewmark é um produto independente, sem vínculo com a OpenAI nem com a Anthropic e sem endosso delas. Codex é marca da OpenAI, e Claude e Claude Code, da Anthropic.",
};
