import type { GuideCopy } from "@/components/landing/guide-article";

// Brazilian Portuguese translation of /blog/claude-code-slash-commands; the English master is src/content/blog/claude-code-slash-commands.ts.

const commands = "https://code.claude.com/docs/en/commands";

const skill = `---
description: Corrige uma issue do GitHub pelo número, com um teste
argument-hint: [issue-number]
disable-model-invocation: true
allowed-tools: Bash(gh issue view *)
---

Issue: !\`gh issue view $ARGUMENTS\`

Corrija esta issue seguindo as nossas convenções do CLAUDE.md.
1. Escreva um teste que falhe e a reproduza.
2. Faça a menor mudança que faça o teste passar.
3. Rode a suíte de testes e resuma o que mudou.`;

const positional = `---
description: Migra um componente de um framework para outro
argument-hint: [component] [from] [to]
---

Migre o componente $0 de $1 para $2.
Mantenha todo o comportamento atual e todos os testes passando.`;

export const copy: GuideCopy = {
  meta: {
    title: "Comandos de barra do Claude Code: guia rápido e skills",
    description:
      "Um guia rápido dos comandos de barra (slash commands) do Claude Code que valem a pena conhecer, como criar os seus com argumentos e como os comandos se relacionam com as skills.",
  },
  breadcrumb: "Comandos de barra do Claude Code",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-06" },
  hero: {
    kicker: "Blog · Claude Code",
    title: "Comandos de barra do Claude Code: o guia rápido e como criar os seus",
    lead: "Comandos de barra (slash commands) são os atalhos que você digita no começo de uma mensagem do Claude Code, como `/init`, `/compact` ou `/code-review`, para controlar a sessão ou rodar um prompt salvo. Este guia traz um resumo dos comandos que valem a pena conhecer, agrupados pelo momento em que você precisa deles, e depois mostra como criar comandos de barra próprios com argumentos e como eles se relacionam com as skills.",
    cta: "Começar",
    secondary: "Ir para os comandos próprios",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "Como os comandos de barra funcionam",
      text: [
        "Digite `/` no Claude Code para ver todos os comandos disponíveis para você, e continue digitando para filtrar a lista. Um comando só vale no começo de uma mensagem; o que vem depois do nome dele vira os argumentos.",
      ],
      points: [
        "Os comandos nativos são programados na CLI, como `/clear`, `/model` e `/compact`.",
        "As skills incluídas vêm com o Claude Code e funcionam como prompts entregues ao Claude, como `/simplify`, `/loop` e `/batch`.",
        "Os comandos próprios são os que você escreve: skills em `.claude/skills/` ou arquivos antigos em `.claude/commands/`. Plugins e servidores MCP podem adicionar outros.",
        "Se você enviar um comando enquanto o Claude ainda está respondendo, ele roda depois do turno atual; alguns, como `/status` e `/usage`, rodam na hora.",
        "Nem todo comando aparece para todo mundo: alguns dependem da sua plataforma, do seu plano ou da política da sua organização.",
      ],
    },
    {
      kind: "table",
      id: "cheat-sheet",
      title: "Guia rápido de comandos de barra do Claude Code",
      text: ["Os comandos mais usados, na ordem em que uma sessão costuma precisar deles."],
      headers: ["Quando", "Comando", "O que faz"],
      rows: [
        ["Na configuração", "`/init`", "Escreve um CLAUDE.md inicial para o projeto"],
        ["Na configuração", "`/memory`", "Edita os arquivos CLAUDE.md e liga ou desliga a memória automática"],
        ["Na configuração", "`/mcp`", "Gerencia as conexões com servidores MCP"],
        ["Na configuração", "`/permissions`", "Gerencia as regras de permitir, perguntar e negar para as ferramentas"],
        ["Na configuração", "`/config`", "Abre as configurações: tema, modelo, estilo de saída e mais"],
        ["Durante uma tarefa", "`/plan`", "Entra no modo plano antes de uma mudança grande"],
        ["Durante uma tarefa", "`/model`, `/effort`", "Troca o modelo e define quanto raciocínio ele usa"],
        ["Durante uma tarefa", "`/context`", "Mostra o que está ocupando a janela de contexto"],
        ["Durante uma tarefa", "`/compact [instructions]`", "Resume a conversa até aqui para liberar contexto"],
        ["Durante uma tarefa", "`/btw [question]`", "Faz uma pergunta paralela sem adicioná-la à conversa"],
        ["Durante uma tarefa", "`/goal`", "Define uma condição que o Claude continua perseguindo"],
        ["Em paralelo", "`/tasks`", "Lista o trabalho em segundo plano e os subagentes da sessão"],
        ["Em paralelo", "`/background`", "Desacopla a sessão para rodar como agente em segundo plano"],
        ["Em paralelo", "`/batch <instruction>`", "Divide uma mudança em todo o código em unidades, cada uma na própria worktree"],
        ["Em paralelo", "`/fork`", "Copia a conversa para uma nova sessão em segundo plano"],
        ["Antes de entregar", "`/diff`", "Mostra as alterações na sua cópia de trabalho"],
        ["Antes de entregar", "`/code-review`", "Revisa o diff atual ou um PR em busca de bugs; `/review` é um alias"],
        ["Antes de entregar", "`/security-review`", "Procura vulnerabilidades nas alterações da branch"],
        ["Entre sessões", "`/clear`", "Começa uma conversa nova com o contexto vazio"],
        ["Entre sessões", "`/resume`, `/rename`", "Volta a uma conversa anterior; dá um nome à atual"],
        ["Entre sessões", "`/branch`, `/rewind`", "Ramifica a conversa; volta o código e a conversa a um checkpoint"],
        ["Automação", "`/loop [interval] [prompt]`", "Repete um prompt enquanto a sessão continuar aberta"],
        ["Automação", "`/schedule`", "Cria e gerencia tarefas agendadas na nuvem"],
        ["Quando travar", "`/doctor`, `/debug`", "Diagnostica problemas de configuração; lê o log de depuração da sessão"],
        ["Quando travar", "`/usage`, `/status`", "Mostra o custo e os limites do plano (`/cost` e `/stats` são aliases); mostra a versão, o modelo e a conta"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Como criar um comando de barra próprio",
      text: [
        "Os comandos próprios foram unificados com as skills. Um arquivo em `.claude/commands/fix-issue.md` e uma skill em `.claude/skills/fix-issue/SKILL.md` criam o mesmo `/fix-issue` e funcionam do mesmo jeito; o formato de skill é o preferido para comandos novos porque pode guardar arquivos de apoio.",
      ],
      steps: [
        {
          title: "Crie a pasta e o SKILL.md",
          text: "Para um comando que o time inteiro recebe, crie `.claude/skills/<name>/SKILL.md` no repositório e faça commit. Para um que só você usa em todos os projetos, coloque em `~/.claude/skills/<name>/SKILL.md`. O nome da pasta vira o comando: `fix-issue` gera `/fix-issue`.",
        },
        {
          title: "Escreva o frontmatter",
          text: "Entre linhas `---`, adicione uma `description` (o Claude a usa para decidir quando a skill se aplica), `argument-hint` para mostrar no menu os argumentos esperados, `disable-model-invocation: true` se só você deve acioná-la (para qualquer coisa com efeitos colaterais, como deploys) e `allowed-tools` para pré-aprovar ferramentas naquele turno.",
        },
        {
          title: "Escreva o prompt, com argumentos",
          text: "Abaixo do frontmatter, escreva as instruções em Markdown. `$ARGUMENTS` é substituído por tudo o que foi digitado depois do comando; `$0`, `$1` e assim por diante (ou `$ARGUMENTS[0]`) pegam argumentos individuais. Uma linha com `` !`command` `` roda antes esse comando de shell e cola a saída dele no prompt.",
          code: skill,
        },
        {
          title: "Rode o comando",
          text: "Digite `/fix-issue 123`. As skills que você adiciona ou altera durante uma sessão carregam sozinhas; se alguma não aparecer, rode `/reload-skills`. Sem `disable-model-invocation`, o Claude também pode rodar a skill por conta própria quando o seu pedido combina com a descrição dela.",
        },
        {
          title: "Use argumentos posicionais em comandos com várias partes",
          text: "Rodar `/migrate-component SearchBar React Vue` preenche `$0`, `$1` e `$2` em ordem.",
          code: positional,
        },
      ],
      source: { label: "Fonte: documentação do Claude Code, Commands e Skills", href: commands },
    },
    {
      kind: "table",
      title: "Onde ficam os comandos de barra próprios",
      headers: ["Local", "Caminho", "Nome do comando"],
      rows: [
        ["Pessoal", "`~/.claude/skills/<name>/SKILL.md`", "`/<name>` em todos os seus projetos"],
        ["Projeto", "`.claude/skills/<name>/SKILL.md`", "`/<name>` para todos no repositório"],
        ["Arquivo de comando antigo", "`.claude/commands/<name>.md`", "`/<name>`; uma subpasta adiciona um prefixo, por exemplo `commands/frontend/component.md` → `/frontend:component`"],
        ["Plugin", "`<plugin>/skills/<name>/SKILL.md`", "`/<plugin>:<name>`"],
        ["Servidor MCP", "Prompts expostos pelo servidor", "Aparecem no menu `/`"],
      ],
    },
    {
      kind: "table",
      title: "Comandos de barra vs. skills",
      text: [
        "Depois da unificação, a pergunta é menos \"qual dos dois\" e mais \"qual formato de arquivo\". Se uma skill e um arquivo de comando têm o mesmo nome, a skill vence.",
      ],
      headers: ["", "`.claude/commands/<name>.md`", "`.claude/skills/<name>/SKILL.md`"],
      rows: [
        ["Cria `/<name>`", "Sim", "Sim"],
        ["Frontmatter", "Os mesmos campos, exceto `name` e `paths`", "Todos os campos"],
        ["Arquivos de apoio (scripts, templates)", "Não", "Sim, na pasta da skill"],
        ["O Claude pode carregar por conta própria", "Sim, a menos que tenha `disable-model-invocation: true`", "Sim, a menos que tenha `disable-model-invocation: true`"],
        ["Status", "Continua funcionando", "Recomendado para trabalho novo"],
      ],
    },
    {
      kind: "text",
      title: "Dicas e pegadinhas",
      points: [
        "No prompt do terminal você pode empilhar skills: `/write-tests /fix-issue 123` carrega as duas e passa `123` para cada uma, até seis. No `claude -p` e no Agent SDK só a primeira carrega.",
        "Comandos nativos de que você se lembra podem ter sumido: `/pr-comments`, `/vim` e `/ultraplan` foram removidos. Confira o `/help` ou a documentação.",
        "`allowed-tools` dá permissão só no turno que invoca a skill, e skills de um repositório podem conceder ferramentas a si mesmas, então leia-as antes de rodar o Claude Code em um repositório desconhecido.",
        "A descrição de cada skill fica no contexto; `/skill-doctor` mostra quanto cada uma custa e com que frequência é usada. Procedimentos longos pertencem a skills, não ao [CLAUDE.md](/blog/claude-md).",
        "`/loop` repete um prompt só enquanto a sua sessão está aberta. Para o trabalho começar sozinho, veja [como tornar o Claude Code proativo](/proactive-claude-code).",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Com o Crewmark",
      title: "Os comandos de barra deixam você mais rápido. O Crewmark faz o Claude Code começar sem você.",
      text: [
        "Todo comando de barra ainda precisa de você no teclado para digitá-lo. O Crewmark transforma uma sessão do Claude Code, Codex, DeepSeek Harness ou OpenCode em um funcionário de IA com um papel, uma meta e um horário de trabalho, e a acorda com um heartbeat para pegar a próxima issue de um quadro, usando as mesmas skills e comandos que você já configurou.",
      ],
      steps: [
        {
          title: "Mantenha as suas skills no repositório",
          text: "O seu `.claude/skills/` e o seu CLAUDE.md carregam na sessão do funcionário como na sua, então o `/fix-issue` e as suas convenções vão junto.",
        },
        {
          title: "Deixe o heartbeat iniciar o trabalho",
          text: "Durante o horário de trabalho, o funcionário acorda a cada 15, 30 ou 60 minutos na mesma conversa e pega a próxima issue. Vários podem compartilhar um repositório, cada um na própria [worktree](/blog/claude-code-worktree).",
        },
        {
          title: "Atribua issues e responda às mensagens dele",
          text: "Coloque o trabalho no quadro; o funcionário comenta conforme avança e avisa você quando precisa de uma decisão. Leia [o que é um funcionário de IA](/ai-employees).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Criar um comando de barra próprio no Claude Code" },
  mid: {
    title: "Você automatizou a digitação. Quem decide o que digitar em seguida?",
    text: "O Crewmark acorda o Claude Code com um heartbeat, um papel, uma meta e um quadro de issues, no plano que você já paga.",
    button: "Começar",
  },
  faq: {
    title: "Perguntas frequentes sobre comandos de barra do Claude Code",
    items: [
      {
        q: "Como vejo todos os comandos de barra do Claude Code?",
        a: "Digite `/` no começo de uma mensagem para abrir o menu, e continue digitando para filtrá-lo. `/help` e `/skills` também listam os comandos, e a página Commands da documentação do Claude Code tem a referência completa.",
      },
      {
        q: "Como crio um comando de barra próprio no Claude Code?",
        a: "Crie `.claude/skills/<name>/SKILL.md` (ou `~/.claude/skills/<name>/SKILL.md` para todos os projetos) com um frontmatter curto e o seu prompt. Ele vira `/<name>`. Um arquivo antigo `.claude/commands/<name>.md` também funciona.",
      },
      {
        q: "Como passo argumentos para um comando de barra?",
        a: "Digite-os depois do nome do comando. No prompt, `$ARGUMENTS` guarda tudo o que você digitou, e `$0`, `$1` e assim por diante guardam argumentos individuais. Adicione `argument-hint` ao frontmatter para mostrar o que é esperado.",
      },
      {
        q: "Qual é a diferença entre comandos de barra e skills?",
        a: "Os comandos de barra próprios foram unificados com as skills: os dois criam um `/name` e funcionam do mesmo jeito. As skills acrescentam uma pasta para arquivos de apoio e são o formato recomendado; os arquivos de comando em `.claude/commands/` continuam funcionando.",
      },
      {
        q: "Os comandos de barra foram descontinuados?",
        a: "Não. Digitar `/name` é como você roda qualquer comando ou skill. O que mudou foi o formato de arquivo dos comandos próprios: `.claude/commands/` ainda funciona, mas as skills são as preferidas. Alguns comandos nativos específicos foram removidos.",
      },
      {
        q: "O Claude pode rodar o meu comando de barra sozinho?",
        a: "Sim, quando o seu pedido combina com a descrição da skill. Adicione `disable-model-invocation: true` ao frontmatter dela para que rode só quando você digitar.",
      },
      {
        q: "Os comandos de barra funcionam no modo headless?",
        a: "As skills próprias funcionam: `claude -p \"/fix-issue 123\"` roda uma, porque o `-p` carrega skills e comandos próprios como uma sessão interativa. Só a primeira skill da mensagem carrega, e `--bare` pula totalmente a descoberta de skills.",
      },
    ],
  },
  cta: {
    title: "Dê às suas skills do Claude Code um funcionário para rodá-las.",
    text: "O Crewmark transforma sessões do Claude Code, Codex e DeepSeek Harness em funcionários de IA com papéis, metas, horários de trabalho e um heartbeat.",
    button: "Começar",
  },
  checked: "Conferido com a documentação do Claude Code (commands e skills) em 6 de novembro de 2026.",
  disclaimer:
    "O Crewmark é um produto independente, sem vínculo com a Anthropic e sem endosso dela. Claude e Claude Code são marcas da Anthropic.",
};
