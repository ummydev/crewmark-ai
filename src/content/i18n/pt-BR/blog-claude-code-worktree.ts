import type { GuideCopy } from "@/components/landing/guide-article";

// Brazilian Portuguese translation of /blog/claude-code-worktree; the English master is src/content/blog/claude-code-worktree.ts.

const docs = "https://code.claude.com/docs/en/worktrees";

const start = `# Duas sessões isoladas, cada uma no próprio terminal
claude --worktree feature-auth
claude --worktree fix-flaky-test

# Crie uma worktree a partir do pull request 1234 (coloque o # entre aspas)
claude --worktree "#1234"

# Deixe as worktrees fora do git status
echo ".claude/worktrees/" >> .gitignore`;

const settings = `{
  "worktree": {
    "baseRef": "head",
    "symlinkDirectories": ["node_modules"],
    "sparsePaths": [".claude", "packages/web"]
  }
}`;

const manual = `git worktree add ../app-feature-a -b feature-a
cd ../app-feature-a && claude
git worktree list
git worktree remove ../app-feature-a`;

export const copy: GuideCopy = {
  meta: {
    title: "Worktrees no Claude Code: --worktree, fluxo e limpeza",
    description:
      "Como as git worktrees funcionam no Claude Code: claude --worktree, onde ficam, a branch base, .worktreeinclude para arquivos .env, limpeza, subagentes isolados e as configurações.",
  },
  breadcrumb: "Guia de worktrees no Claude Code",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-06" },
  hero: {
    kicker: "Blog · Claude Code",
    title: "Worktrees no Claude Code: sessões paralelas sem conflitos de edição",
    lead: "Uma worktree do Claude Code é um diretório de trabalho do git separado, com os próprios arquivos e a própria branch, que compartilha o histórico do seu repositório. Inicie uma sessão com `claude --worktree <name>` e o Claude edita lá em vez de no seu checkout, então duas ou três sessões podem trabalhar ao mesmo tempo sem mexer nos arquivos umas das outras. Este guia cobre a flag, onde as worktrees ficam, de qual branch elas partem, como levar os arquivos `.env` para elas, a limpeza, os subagentes e as configurações.",
    cta: "Começar",
    secondary: "Ir para o fluxo de trabalho",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "Worktrees no Claude Code, explicadas",
      text: [
        "O git tem worktrees há anos: `git worktree add` faz checkout de uma branch em um segundo diretório, apoiado nos mesmos dados do `.git`. O Claude Code se baseia nisso. Com `--worktree` (ou `-w`), ele cria a worktree para você, inicia a sessão dentro dela, bloqueia edições que cairiam no seu checkout principal e oferece fazer a limpeza quando você sai.",
        "As worktrees isolam arquivos, e nada mais. Para dividir uma tarefa entre vários workers dentro de uma única conversa, use subagentes; para comparar as opções, veja [vários agentes do Claude Code](/blog/multiple-claude-code-agents).",
      ],
      points: [
        "Local padrão: `.claude/worktrees/<name>/`, na raiz do repositório.",
        "Nome de branch padrão: `worktree-<name>`. Se você não der um nome, o Claude Code escolhe um, como `bright-running-fox`.",
        "Compartilhado com o seu checkout: o diretório `.git` (então commits e branches aparecem em todo lugar), os plugins do projeto e as aprovações de permissão de \"não perguntar de novo\".",
        "Não compartilhado: tudo o que está no .gitignore, como `.env`, `node_modules` e os artefatos de build. Uma worktree é um checkout novo.",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "O fluxo com worktrees, passo a passo",
      steps: [
        {
          title: "Ignore a pasta das worktrees",
          text: "Adicione `.claude/worktrees/` ao `.gitignore`, para que os arquivos das worktrees não apareçam como não rastreados no seu checkout principal. Se você nunca rodou o Claude neste repositório, rode `claude` uma vez antes para aceitar o aviso de confiança do workspace; até lá, as execuções interativas com `--worktree` se encerram.",
        },
        {
          title: "Inicie uma sessão por tarefa",
          text: "Rode `claude --worktree <name>` em um terminal para cada tarefa. Rodar de novo com um nome que já existe reabre essa worktree em vez de criar outra. Você também pode pedir ao Claude no meio da sessão para \"trabalhar em uma worktree\", e ele se move para uma com a ferramenta `EnterWorktree`.",
          code: start,
        },
        {
          title: "Leve junto os arquivos não rastreados",
          text: "Liste os arquivos ignorados pelo git de que o projeto precisa, como `.env` e `.env.local`, em um arquivo `.worktreeinclude` na raiz do repositório, com a sintaxe do `.gitignore`. O Claude Code copia os arquivos que combinam para cada worktree que cria, inclusive as de subagentes e as do app desktop. Depois instale as dependências na worktree, ou configure isso nas configurações: este exemplo parte do seu trabalho atual, reaproveita um único `node_modules` e faz checkout só do pacote web.",
          code: settings,
        },
        {
          title: "Deixe as sessões trabalharem",
          text: "Enquanto uma sessão está isolada, o Claude Code recusa edições de arquivo que apontam para o checkout principal, comandos cujo diretório de trabalho é o checkout principal e comandos git redirecionados para ele (`git -C`, `--git-dir`, `GIT_DIR`). Ele não acompanha o que um comando de shell comum como `cp` escreve, então permissões e sandbox continuam importando.",
        },
        {
          title: "Revise e faça o merge como qualquer branch",
          text: "Cada worktree é uma branch normal. Faça commit e push de dentro dela, abra um pull request e revise como faria com o de um colega. Como todas as worktrees compartilham o `.git`, a branch aparece no seu checkout principal na hora.",
        },
        {
          title: "Saia e faça a limpeza",
          text: "Quando você sai, o Claude Code verifica a worktree. Uma worktree limpa de uma sessão sem nome é removida automaticamente junto com a branch; uma sessão com nome pergunta antes. Se houver alterações, arquivos não rastreados ou commits novos, ele pergunta se deve manter ou remover a worktree e mostra um comando `claude --worktree <name> --resume` para você voltar depois.",
        },
      ],
      source: { label: "Fonte: documentação do Claude Code, Run parallel sessions with worktrees", href: docs },
    },
    {
      kind: "table",
      title: "Configurações de worktree no Claude Code",
      text: [
        "Todas ficam sob `worktree` em um arquivo de configurações (`~/.claude/settings.json`, `.claude/settings.json` ou `.claude/settings.local.json`).",
      ],
      headers: ["Configuração", "O que faz", "Padrão"],
      rows: [
        ["`worktree.baseRef`", "`\"fresh\"` parte da branch padrão do remoto (`origin/main`); `\"head\"` parte do seu HEAD local, incluindo commits ainda não enviados", "`\"fresh\"`"],
        ["`worktree.symlinkDirectories`", "Cria symlinks de diretórios como `node_modules` a partir do checkout principal em vez de duplicá-los", "Nenhum"],
        ["`worktree.sparsePaths`", "Faz checkout só dos diretórios listados (mais os arquivos da raiz) com sparse-checkout; inclua `.claude`", "Árvore inteira"],
        ["`worktree.bgIsolation`", "`\"worktree\"` faz as sessões em background editarem só dentro de uma worktree; `\"none\"` deixa que editem a cópia de trabalho", "`\"worktree\"`"],
        ["Local das worktrees (app desktop)", "Settings > Code define uma pasta própria para as sessões locais; conexões SSH têm a delas", "`.claude/worktrees/`"],
        ["`.worktreeinclude` (arquivo, não configuração)", "Copia os arquivos ignorados pelo git que combinam para cada worktree nova", "Nenhum"],
      ],
    },
    {
      kind: "table",
      title: "Worktree do Claude Code vs branch vs git worktree",
      headers: ["", "Trocar de branch", "`git worktree add` + `claude`", "`claude --worktree`"],
      rows: [
        ["Arquivos separados no disco", "Não: um diretório, uma branch por vez", "Sim", "Sim"],
        ["Várias sessões ao mesmo tempo", "Não: uma sobrescreve a outra", "Sim", "Sim"],
        ["Onde fica", "O seu checkout", "Onde você quiser", "`.claude/worktrees/<name>/`, ou o caminho de um hook"],
        ["Parte de", "A branch para a qual você troca", "Qualquer branch existente ou nova", "`origin/<default>`, o seu HEAD ou um PR"],
        ["Copia o `.env`", "Não precisa", "Não", "Sim, com `.worktreeinclude`"],
        ["Bloqueia edições fora dela", "Não", "Não", "Sim"],
        ["Limpeza", "Nenhuma", "`git worktree remove`", "Oferecida ao sair"],
      ],
    },
    {
      kind: "steps",
      id: "git-worktree",
      title: "Fazendo à mão com git worktree",
      text: [
        "Use o git puro quando quiser uma branch específica que já existe ou uma pasta fora do repositório; o `worktree.baseRef` não consegue apontar para uma branch. O Claude Code continua compartilhando plugins e aprovações de permissão com essas worktrees.",
      ],
      steps: [
        {
          title: "Crie a worktree, inicie o Claude e remova quando terminar",
          text: "Troque `feature-a` pelo nome de uma branch nova, ou tire o `-b` para fazer checkout de uma branch que já existe.",
          code: manual,
        },
      ],
    },
    {
      kind: "text",
      title: "Subagentes e sessões em background em worktrees",
      points: [
        "Peça ao Claude para \"usar worktrees para os seus agentes\", ou adicione `isolation: worktree` ao frontmatter de um subagente personalizado em `.claude/agents/`, e cada subagente edita na própria worktree temporária.",
        "A worktree de um subagente sem alterações é removida quando o subagente termina. Uma com alterações fica até que uma limpeza periódica consiga removê-la sem perder trabalho, depois de `cleanupPeriodDays`.",
        "Sessões em background (`claude --bg`) editam só dentro de uma worktree por padrão; inicie uma com `claude --bg --worktree` ou defina `worktree.bgIsolation` como `\"none\"`.",
        "No app desktop, ative Worktree embaixo da caixa de prompt antes de iniciar uma sessão.",
      ],
    },
    {
      kind: "text",
      title: "Limpeza de worktrees e problemas comuns",
      points: [
        "Execuções com `claude -p --worktree` não têm o aviso de saída, então deixam as worktrees para trás. Remova-as com `git worktree remove`, depois de `git worktree unlock` se o git disser que ela está travada.",
        "`Can only use --worktree in a git repository`: rode `git init` e faça um primeiro commit, ou configure um hook `WorktreeCreate` para SVN, Perforce ou Mercurial.",
        "Arquivos do Git LFS aparecem como arquivos ponteiro quando o LFS foi instalado com `--local`: rode `git lfs pull` dentro da worktree.",
        "O Claude Code não cria uma worktree quando `.claude` ou `.claude/worktrees` é um symlink.",
        "Os hooks mantêm `${CLAUDE_PROJECT_DIR}` apontando para o checkout principal; leia o campo `cwd` da entrada do hook para obter o caminho da worktree.",
        "Uma worktree com base `\"fresh\"` e sem commits próprios, ou cujo PR já passou pelo merge, volta para a branch padrão quando você a reabre pelo nome.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Com o Crewmark",
      title: "As worktrees mantêm as sessões separadas. O Crewmark as mantém ocupadas.",
      text: [
        "As worktrees resolvem o problema das colisões, mas cada sessão continua parada até você digitar. O Crewmark transforma uma sessão do Claude Code, Codex, DeepSeek Harness ou OpenCode em um funcionário de IA com um papel, uma meta e um horário de trabalho, e a acorda com um heartbeat para pegar a próxima issue de um quadro.",
      ],
      steps: [
        {
          title: "Um funcionário por worktree",
          text: "Dê a cada funcionário a própria worktree e um papel, como um programador e um revisor no mesmo repositório, como em [vários agentes do Claude Code](/blog/multiple-claude-code-agents).",
        },
        {
          title: "Deixe o heartbeat iniciar o trabalho",
          text: "Durante o horário de trabalho, cada funcionário acorda a cada 15, 30 ou 60 minutos na mesma conversa; veja [como tornar o Claude Code proativo](/proactive-claude-code).",
        },
        {
          title: "Atribua issues e revise as branches",
          text: "Coloque o trabalho no quadro; cada funcionário pega uma issue, faz commit na própria branch e avisa você quando precisa de uma decisão. Leia [o que é um funcionário de IA](/ai-employees).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Rodar sessões paralelas do Claude Code em git worktrees" },
  mid: {
    title: "Três worktrees, três sessões. Quem diz a elas o que vem depois?",
    text: "O Crewmark acorda cada sessão do Claude Code com um heartbeat, um papel, uma meta e um quadro de issues, no plano que você já paga.",
    button: "Começar",
  },
  faq: {
    title: "Perguntas frequentes sobre worktrees no Claude Code",
    items: [
      {
        q: "O que é uma worktree no Claude Code?",
        a: "Um diretório de trabalho do git separado, com os próprios arquivos e a própria branch, que compartilha o histórico do seu repositório. `claude --worktree <name>` cria uma e roda a sessão dentro dela, então sessões paralelas não editam os mesmos arquivos.",
      },
      {
        q: "Onde o Claude Code coloca as worktrees?",
        a: "Em `.claude/worktrees/<name>/`, na raiz do repositório, em uma branch chamada `worktree-<name>`. O app desktop permite escolher outra pasta em Settings, e um hook `WorktreeCreate` pode colocá-las em qualquer lugar.",
      },
      {
        q: "De qual branch uma worktree do Claude Code parte?",
        a: "Por padrão, da branch padrão do remoto, normalmente `origin/main`. Defina `worktree.baseRef` como `\"head\"` para partir do seu HEAD local, passe `\"#1234\"` para começar de um pull request ou crie a worktree com `git worktree add` para qualquer outra branch.",
      },
      {
        q: "Por que o meu arquivo .env não está na worktree?",
        a: "Uma worktree é um checkout novo, então os arquivos ignorados pelo git não estão lá. Liste-os em um arquivo `.worktreeinclude` na raiz do repositório e o Claude Code os copia para cada worktree nova.",
      },
      {
        q: "Como faço a limpeza das worktrees do Claude Code?",
        a: "Ao sair de uma sessão, ele oferece remover a worktree dela, e remove sozinho as que estão limpas e sem nome. As worktrees de execuções com `-p` ficam para trás: liste-as com `git worktree list` e remova-as com `git worktree remove`.",
      },
      {
        q: "Worktree ou branch: qual é a diferença?",
        a: "Uma branch é uma linha de commits; uma worktree é um diretório onde uma branch está em checkout. Trocar de branch muda os arquivos do seu único diretório, enquanto as worktrees dão a cada branch o próprio diretório, então várias sessões podem rodar ao mesmo tempo.",
      },
      {
        q: "Os subagentes podem usar worktrees?",
        a: "Sim. Peça ao Claude que use worktrees para os agentes dele, ou adicione `isolation: worktree` ao frontmatter de um subagente personalizado. Cada um recebe uma worktree temporária, que é removida se ele não fizer alterações.",
      },
    ],
  },
  cta: {
    title: "Dê a cada worktree um funcionário que sabe o que fazer em seguida.",
    text: "O Crewmark transforma sessões do Claude Code, Codex e DeepSeek Harness em funcionários de IA com papéis, metas, horários de trabalho e um heartbeat.",
    button: "Começar",
  },
  checked: "Conferido com a documentação do Claude Code (worktrees, configurações, referência da CLI e app desktop) em 6 de novembro de 2026.",
  disclaimer:
    "O Crewmark é um produto independente, sem vínculo com a Anthropic e sem endosso dela. Claude e Claude Code são marcas da Anthropic.",
};
