import type { GuideCopy } from "@/components/landing/guide-article";

// Brazilian Portuguese translation of /blog/claude-code-mcp; the English master is src/content/blog/claude-code-mcp.ts.

const docs = "https://code.claude.com/docs/en/mcp";

const add = `# Servidor HTTP remoto (recomendado para serviços na nuvem)
claude mcp add --transport http notion https://mcp.notion.com/mcp

# Com um bearer token
claude mcp add --transport http secure-api https://api.example.com/mcp \\
  --header "Authorization: Bearer your-token"

# Servidor stdio local: tudo depois de -- é o comando do próprio servidor
claude mcp add --env AIRTABLE_API_KEY=YOUR_KEY --transport stdio airtable \\
  -- npx -y airtable-mcp-server`;

const manage = `claude mcp list            # todos os servidores configurados
claude mcp get notion      # os detalhes de um servidor
claude mcp remove notion   # remove o servidor (rode claude mcp logout notion antes para revogar os tokens)
claude mcp add-from-claude-desktop   # importa do Claude Desktop (macOS, WSL)`;

const project = `{
  "mcpServers": {
    "api-server": {
      "type": "http",
      "url": "\${API_BASE_URL:-https://api.example.com}/mcp",
      "headers": {
        "Authorization": "Bearer \${API_KEY}"
      }
    }
  }
}`;

export const copy: GuideCopy = {
  meta: {
    title: "MCP no Claude Code: adicionar servidores, arquivo de configuração e .mcp.json | Crewmark",
    description:
      "Como configurar servidores MCP no Claude Code: claude mcp add para servidores HTTP e stdio, os escopos local, project e user, onde fica o arquivo de configuração, .mcp.json com variáveis de ambiente, OAuth e solução de problemas.",
  },
  breadcrumb: "Guia de MCP no Claude Code",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-06" },
  hero: {
    kicker: "Blog · Claude Code",
    title: "MCP no Claude Code: como adicionar servidores e onde fica a configuração",
    lead: "Servidores MCP (Model Context Protocol) conectam o Claude Code a ferramentas e dados externos, como Notion, GitHub, Sentry, um banco de dados ou a sua própria API. Você adiciona com `claude mcp add`, escolhe se cada um é só seu ou compartilhado com o time, e aí o Claude pode chamar as ferramentas deles. Este guia mostra como adicionar servidores HTTP e stdio, os três escopos e os arquivos de configuração por trás deles, o `.mcp.json` com variáveis de ambiente, o login com OAuth e o que verificar quando um servidor não conecta.",
    cta: "Acesso antecipado",
    secondary: "Ir para a configuração",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "steps",
      id: "how-to",
      title: "Como adicionar um servidor MCP ao Claude Code",
      steps: [
        {
          title: "Escolha o transporte",
          text: "Use HTTP para servidores remotos hospedados na nuvem; é o transporte recomendado, e o Claude Code recorre ao transporte SSE, já obsoleto, quando um servidor só oferece esse. Use stdio para servidores que rodam como um processo local. No stdio, tudo o que vem depois de `--` é repassado ao servidor sem alteração.",
          code: add,
        },
        {
          title: "Escolha um escopo",
          text: "Sem `--scope`, um servidor é local: só para você, só neste projeto. Adicione `--scope project` para gravá-lo no `.mcp.json` e compartilhar com o time, ou `--scope user` para todos os seus projetos. Veja a tabela abaixo.",
        },
        {
          title: "Faça login se o servidor pedir",
          text: "Muitos servidores remotos usam OAuth. Rode `/mcp` dentro do Claude Code e escolha o servidor para se autenticar, ou `claude mcp login <name>` no terminal. Execuções headless com `-p` não conseguem abrir o fluxo de login, então faça login de forma interativa antes.",
        },
        {
          title: "Confira se conectou",
          text: "Rode `/mcp` para ver o status e as ferramentas de cada servidor, e `claude mcp list` no terminal. Depois peça ao Claude para usar a ferramenta pelo nome.",
        },
        {
          title: "Gerencie seus servidores",
          text: "Liste, inspecione, remova ou importe servidores pela linha de comando. Se você quase não usa um servidor, desative-o no `/mcp` em vez de removê-lo.",
          code: manage,
        },
      ],
      source: { label: "Fonte: documentação do Claude Code, Connect Claude Code to tools via MCP", href: docs },
    },
    {
      kind: "table",
      id: "scopes",
      title: "Escopos do MCP e onde ficam os arquivos de configuração",
      text: [
        "É aqui que o Claude Code guarda a configuração do MCP. Repare que o escopo \"local\" do MCP fica em `~/.claude.json`, e não em `.claude/settings.local.json`.",
      ],
      headers: ["Escopo", "Carrega em", "Compartilhado", "Fica em"],
      rows: [
        ["Local (padrão)", "Só neste projeto", "Não", "`~/.claude.json`, sob o caminho do projeto"],
        ["Project", "Só neste projeto", "Sim, faça commit", "`.mcp.json` na raiz do projeto"],
        ["User", "Todos os seus projetos", "Não", "`~/.claude.json`, no nível superior"],
        ["Plugin", "Onde o plugin estiver ativado", "Junto com o plugin", "A configuração do próprio plugin"],
        ["Conectores do claude.ai", "Sessões logadas com essa conta do claude.ai", "Por conta", "As suas configurações do claude.ai"],
      ],
    },
    {
      kind: "steps",
      id: "mcp-json",
      title: "Compartilhe servidores com o .mcp.json",
      text: [
        "O `.mcp.json` permite que o time inteiro use os mesmos servidores. Deixe os segredos de fora com variáveis de ambiente: `${VAR}` é substituído pelo valor da variável, e `${VAR:-default}` usa um valor padrão quando ela não está definida. A expansão funciona em `command`, `args`, `env`, `url` e `headers`.",
      ],
      steps: [
        {
          title: "Use variáveis em vez de segredos",
          text: "O Claude Code pede que cada pessoa aprove os servidores de projeto do `.mcp.json` na primeira vez; `claude mcp reset-project-choices` zera essas respostas. Uma entrada JSON com `url` também precisa de um `type`, como `http`.",
          code: project,
        },
      ],
    },
    {
      kind: "text",
      title: "Precedência, conectores e outros detalhes",
      points: [
        "Quando o mesmo servidor está definido duas vezes, o Claude Code conecta uma vez só, usando o primeiro de: local, project, user, plugin, conector do claude.ai. As entradas não são mescladas; os servidores gerenciados de uma organização têm prioridade sobre todos eles.",
        "Se você faz login no Claude Code com uma conta do claude.ai, os conectores que você adicionou no claude.ai aparecem automaticamente.",
        "O Claude Code também pode ser um servidor MCP: `claude mcp serve` expõe as ferramentas dele para outro cliente, como o Claude Desktop.",
        "Os servidores também podem oferecer prompts que aparecem como comandos de barra; veja [os comandos de barra do Claude Code](/blog/claude-code-slash-commands).",
        "Remover um servidor remoto apaga os tokens que o Claude Code guardou, mas não os revoga; para isso, rode `claude mcp logout <name>` antes.",
      ],
    },
    {
      kind: "text",
      title: "MCP e uso de tokens",
      text: [
        "As definições de ferramentas são carregadas sob demanda por padrão: só os nomes das ferramentas e as instruções do servidor ficam no contexto até o Claude usar uma ferramenta, então uma lista longa de servidores custa menos do que antes. Mesmo assim, cada servidor acrescenta alguma coisa, então desative no `/mcp` os que você não usa e prefira uma CLI como `gh`, `aws` ou `gcloud` quando ela existir, já que ela não acrescenta nenhuma lista de ferramentas. Mais em [como reduzir o uso de tokens do Claude Code](/blog/reduce-claude-code-token-usage).",
      ],
    },
    {
      kind: "text",
      title: "Solução de problemas: quando um servidor não conecta",
      points: [
        "Aparece pedindo autenticação: abra o `/mcp` e escolha Re-authenticate, ou rode `claude mcp login <name>`.",
        "\"has a url but no type\": adicione `\"type\": \"http\"` (ou `sse` ou `ws`) à entrada JSON; sem um tipo, o Claude Code trata a entrada como stdio.",
        "As flags de um servidor stdio sumiram: coloque `--` antes do comando do servidor para que o Claude Code não as interprete como dele.",
        "Aviso de variável ausente no `claude mcp list`: defina a variável ou dê a ela um `:-default`.",
        "Um servidor de projeto nunca carrega no `claude -p`: no modo headless não há pedido de aprovação, então confira as suas configurações ou passe os servidores explicitamente com `--mcp-config` e `--strict-mcp-config`.",
        "Nomes de servidores adicionados com `claude mcp` só podem ter letras, números, hífens e underscores.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Com o Crewmark",
      title: "Dê aos seus funcionários de IA as mesmas ferramentas que você usa",
      text: [
        "O MCP é como o Claude Code chega ao seu gerenciador de issues, ao seu banco de dados ou às suas métricas. O Crewmark transforma uma sessão do Claude Code, Codex, DeepSeek Harness ou OpenCode em um funcionário de IA com um papel, uma meta e um horário de trabalho, e a acorda com um heartbeat para pegar a próxima issue de um quadro, com os servidores MCP do seu projeto disponíveis.",
      ],
      steps: [
        {
          title: "Faça commit do .mcp.json",
          text: "Servidores com escopo de projeto carregam na sessão do funcionário como na sua; para os servidores que precisam de OAuth, faça login uma vez de forma interativa.",
        },
        {
          title: "Deixe o heartbeat iniciar o trabalho",
          text: "Durante o horário de trabalho, o funcionário acorda a cada 15, 30 ou 60 minutos na mesma conversa; veja [como deixar o Claude Code proativo](/proactive-claude-code).",
        },
        {
          title: "Dê a cada papel só o que ele precisa",
          text: "Um funcionário de SEO recebe o Search Console; um programador, o GitHub e o Sentry. Leia [o que é um funcionário de IA](/ai-employees).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Adicionar um servidor MCP ao Claude Code" },
  mid: {
    title: "As ferramentas estão conectadas. Quem usa enquanto você está fora?",
    text: "O Crewmark acorda o Claude Code com um heartbeat, um papel, uma meta e um quadro de issues, no plano que você já paga.",
    button: "Acesso antecipado",
  },
  faq: {
    title: "Perguntas frequentes sobre MCP no Claude Code",
    items: [
      {
        q: "Como adiciono um servidor MCP ao Claude Code?",
        a: "Rode `claude mcp add --transport http <name> <url>` para um servidor remoto, ou `claude mcp add --transport stdio <name> -- <command>` para um local. Depois rode `/mcp` no Claude Code para fazer login, se necessário, e conferir se conectou.",
      },
      {
        q: "Onde fica o arquivo de configuração do MCP no Claude Code?",
        a: "Servidores com escopo local e user ficam em `~/.claude.json` (os locais, sob o caminho do projeto). Servidores com escopo de projeto ficam no `.mcp.json`, na raiz do projeto, e você pode fazer commit dele.",
      },
      {
        q: "Qual a diferença entre os escopos local, project e user?",
        a: "Local é só para você em um projeto (o padrão), project é compartilhado com o time pelo `.mcp.json`, e user é só para você em todos os projetos.",
      },
      {
        q: "Como deixo as chaves de API fora do .mcp.json?",
        a: "Referencie variáveis de ambiente com `${VAR}` ou `${VAR:-default}` em `command`, `args`, `env`, `url` ou `headers`, e defina as variáveis em cada máquina.",
      },
      {
        q: "Como uso no Claude Code os meus servidores MCP do Claude Desktop?",
        a: "Rode `claude mcp add-from-claude-desktop` e escolha os servidores que quer importar. Funciona no macOS e no WSL; adicione `--scope user` para que fiquem disponíveis em todos os projetos.",
      },
      {
        q: "Servidores MCP gastam muitos tokens?",
        a: "Menos do que antes: as definições de ferramentas só carregam quando o Claude usa uma ferramenta. Mesmo assim, cada servidor acrescenta nomes e instruções, então desative os que você não usa e prefira CLIs quando existirem.",
      },
      {
        q: "O Claude Code pode funcionar como servidor MCP?",
        a: "Sim. `claude mcp serve` o inicia como um servidor MCP stdio ao qual outros clientes, como o Claude Desktop, podem se conectar.",
      },
    ],
  },
  cta: {
    title: "Ferramentas conectadas, e um funcionário para usá-las.",
    text: "O Crewmark transforma sessões do Claude Code, Codex e DeepSeek Harness em funcionários de IA com papéis, metas, horários de trabalho e um heartbeat.",
    button: "Acesso antecipado",
  },
  checked: "Conferido com a documentação do Claude Code (MCP e custos) em 6 de novembro de 2026.",
  disclaimer:
    "O Crewmark é um produto independente, sem vínculo com a Anthropic e sem endosso dela. Claude e Claude Code são marcas da Anthropic.",
};
