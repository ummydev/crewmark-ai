import type { GuideCopy } from "@/components/landing/guide-article";

// Brazilian Portuguese translation of /blog/claude-md; the English master is src/content/blog/claude-md.ts.

const memory = "https://code.claude.com/docs/en/memory";

const example = `# Comandos
- Instalar: pnpm install
- Um único arquivo de teste: pnpm vitest run path/to/file.test.ts
- Typecheck: pnpm tsc --noEmit

# Convenções
- Lance erros com os helpers de src/lib/errors.ts, nunca com strings soltas.
- src/legacy/ ainda está em uso, mas não copie os padrões dele.

# Armadilhas
- Os testes de integração precisam de DATABASE_URL (veja .env.example).`;

const rule = `---
paths: ["src/api/**/*.ts"]
---
- Todo handler valida a entrada com o schema de src/api/schemas/.`;

export const copy: GuideCopy = {
  meta: {
    title: "CLAUDE.md: onde fica, boas práticas, template e AGENTS.md | Crewmark",
    description:
      "Como o CLAUDE.md funciona no Claude Code: onde os arquivos ficam e em que ordem carregam, imports, regras, o que escrever nele, um template e a relação com o AGENTS.md.",
  },
  breadcrumb: "Guia do CLAUDE.md",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-05" },
  hero: {
    kicker: "Blog · Claude Code",
    title: "CLAUDE.md: onde colocar, o que escrever e como ele convive com o AGENTS.md",
    lead: "O CLAUDE.md é um arquivo markdown de instruções que o Claude Code lê no início de cada sessão: os comandos a executar, as convenções a seguir e as armadilhas a evitar no seu projeto. Este guia cobre todos os lugares onde um CLAUDE.md pode ficar e a ordem em que carregam, imports e arquivos de regras, o que deve e o que não deve entrar nele, um template curto e a relação com o AGENTS.md.",
    cta: "Acesso antecipado",
    secondary: "Ir para o template",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "O que é o CLAUDE.md",
      text: [
        "O Claude Code começa cada sessão sem lembrar da anterior. O CLAUDE.md é a forma de dar a ele o contexto de que um colega novo precisaria: é lido na inicialização e enviado ao Claude como uma mensagem depois do system prompt. Isso o torna contexto, não configuração obrigatória. O Claude costuma segui-lo, mas o que precisa acontecer sempre ou nunca pertence a hooks ou a regras de permissão.",
      ],
      points: [
        "Markdown simples, sem campos obrigatórios: títulos e tópicos curtos funcionam melhor.",
        "Os arquivos são combinados, não sobrescritos: todo CLAUDE.md aplicável é carregado, então linhas contraditórias deixam o Claude escolher uma.",
        "Confira o que foi carregado com `/context all`, em Memory files.",
      ],
    },
    {
      kind: "table",
      title: "Onde ficam os arquivos CLAUDE.md e em que ordem carregam",
      text: [
        "O Claude Code os carrega do mais amplo ao mais específico, então o arquivo mais próximo de onde você iniciou é lido por último. Ele também sobe a partir do seu diretório de trabalho e carrega o CLAUDE.md de cada diretório pai.",
      ],
      headers: ["Escopo", "Local", "Para que serve"],
      rows: [
        ["Política gerenciada", "`/Library/Application Support/ClaudeCode/CLAUDE.md` (macOS), `/etc/claude-code/CLAUDE.md` (Linux), `C:\\Program Files\\ClaudeCode\\CLAUDE.md` (Windows)", "Regras que uma organização define para todos os desenvolvedores"],
        ["Usuário", "`~/.claude/CLAUDE.md`", "Suas preferências pessoais em todos os projetos"],
        ["Projeto", "`./CLAUDE.md` ou `./.claude/CLAUDE.md`", "As instruções da equipe, versionadas no git"],
        ["Local", "`./CLAUDE.local.md`", "Suas anotações sobre um projeto; adicione ao .gitignore"],
        ["Subdiretório", "`some/dir/CLAUDE.md`", "Carregado só quando o Claude lê ou edita um arquivo desse diretório"],
        ["Regras", "`.claude/rules/*.md` e `~/.claude/rules/`", "Arquivos por tema; com um glob `paths`, carregam só para os arquivos que combinam"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Como escrever um CLAUDE.md que funciona",
      steps: [
        {
          title: "Comece com /init",
          text: "Execute `/init` no seu projeto. O Claude Code lê o código e escreve um CLAUDE.md inicial; se já existir um, sugere melhorias em vez de sobrescrevê-lo. Ele também aproveita `.cursorrules` e as instruções do Copilot.",
        },
        {
          title: "Deixe só o que o Claude não descobre sozinho",
          text: "Mantenha os comandos exatos de build, teste e lint (incluindo como rodar um único teste), os pontos em que o código engana, as decisões que não estão escritas em lugar nenhum e tudo o que você precisou corrigir duas vezes. Tire árvores de arquivos e a arquitetura que o Claude consegue ler no repositório. A Anthropic sugere ficar abaixo de 200 linhas.",
          code: example,
        },
        {
          title: "Seja específico, sem gritar",
          text: "Escreva \"Use indentação de 2 espaços\", não \"Formate o código direito\". A documentação atual diz que IMPORTANT e CAIXA ALTA são um conselho ultrapassado: fazem o Claude aplicar uma regra demais. Se uma linha continua sendo ignorada, encurte o arquivo ou transforme a regra em um hook.",
        },
        {
          title: "Divida com imports e regras",
          text: "`@path/to/file` importa outro arquivo (relativo ao arquivo que importa, até quatro níveis de profundidade); um `@` dentro de crases continua literal. As regras que valem para uma parte do código vão em `.claude/rules/` com um glob `paths`, e carregam só quando o Claude mexe em arquivos que combinam.",
          code: rule,
        },
        {
          title: "Leve os procedimentos para skills",
          text: "Fluxos de várias etapas, como fazer um release, pertencem a uma skill (`.claude/skills/<name>/SKILL.md`), que carrega só quando é relevante. O CLAUDE.md é lido em toda tarefa, então cada linha custa atenção.",
        },
        {
          title: "Mantenha atualizado",
          text: "Adicione uma linha quando o Claude repetir um erro ou uma revisão apontar algo, e edite o arquivo com `/memory` ou pedindo ao Claude que o atualize. O `/doctor` sugere cortes quando o arquivo cresce demais.",
        },
      ],
      source: { label: "Fonte: documentação do Claude Code, How Claude remembers your project", href: memory },
    },
    {
      kind: "table",
      title: "CLAUDE.md vs AGENTS.md",
      text: [
        "O AGENTS.md é um formato aberto de instruções para agentes de programação, usado por Codex, Cursor, Gemini CLI, o agente de código do GitHub Copilot, opencode e muitos outros. O Claude Code agora também o lê, mas por padrão só quando o projeto não tem CLAUDE.md.",
      ],
      headers: ["", "CLAUDE.md", "AGENTS.md"],
      rows: [
        ["Lido por", "Claude Code", "Codex, Cursor, Gemini CLI, Copilot, opencode e outros; Claude Code como alternativa"],
        ["Quando o Claude Code lê", "Sempre", "Por padrão só se não houver CLAUDE.md, `.claude/CLAUDE.md` nem CLAUDE.local.md na árvore; o `/config` pode ler os dois"],
        ["Arquivo pessoal", "`CLAUDE.local.md`", "Não é lido pelo Claude Code (`AGENTS.override.md` é do Codex)"],
        ["Imports", "`@path`, até quatro níveis", "Nenhum no formato"],
        ["Regras por caminho", "`.claude/rules/` com `paths`", "Arquivos AGENTS.md aninhados por diretório"],
      ],
    },
    {
      kind: "text",
      title: "Um único arquivo para Claude Code e Codex",
      text: [
        "Se a sua equipe usa os dois agentes, deixe as instruções compartilhadas no AGENTS.md e faça o CLAUDE.md importá-lo, com as notas só do Claude embaixo. Ele nunca carrega duas vezes. Um symlink (`ln -s AGENTS.md CLAUDE.md`) também funciona, mas não para quem usa Windows, e um CLAUDE.md que só diz \"leia o AGENTS.md\" em palavras não é confiável.",
      ],
      points: [
        "O repositório deste próprio site faz exatamente isso: o CLAUDE.md dele é a linha única `@AGENTS.md`.",
        "O Codex lê os arquivos AGENTS.md da raiz do repositório até o seu diretório de trabalho e limita o tamanho combinado a 32 KiB por padrão.",
      ],
    },
    {
      kind: "text",
      title: "Limites e armadilhas",
      points: [
        "Um CLAUDE.md carregado na inicialização é lido inteiro até 4 MiB; um arquivo maior é ignorado.",
        "Arquivos carregados sob demanda, como os CLAUDE.md de subdiretórios e as regras por caminho, são cortados acima de um limite por arquivo (40.000 caracteres com uma janela de contexto de 200K).",
        "Imports organizam um arquivo, mas não economizam contexto: o texto importado carrega do mesmo jeito.",
        "Imports de fora do projeto pedem aprovação uma vez; comentários HTML `<!-- -->` são removidos e não custam nada.",
        "O CLAUDE.md da raiz do projeto é lido de novo depois do `/compact`.",
        "\"Lembre disto\" vai para a auto memory (`~/.claude/projects/<project>/memory/`), não para o CLAUDE.md.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Com o Crewmark",
      title: "O CLAUDE.md diz como trabalhar. O Crewmark diz em que trabalhar e quando.",
      text: [
        "Um bom CLAUDE.md faz cada sessão do Claude Code começar bem informada, mas a sessão continua esperando a sua próxima mensagem. O Crewmark transforma uma sessão do Claude Code, Codex, DeepSeek Harness ou OpenCode em um funcionário de IA com um papel, uma meta e um horário de trabalho, e a acorda com um heartbeat para pegar a próxima issue de um quadro.",
      ],
      steps: [
        {
          title: "Transforme uma sessão em funcionário",
          text: "Escolha um papel, como engenheiro de software ou especialista em SEO, escreva a meta dele como um número e execute o comando de configuração no seu projeto, onde o seu CLAUDE.md já está.",
        },
        {
          title: "Deixe o heartbeat iniciar o trabalho",
          text: "Durante o horário de trabalho, o funcionário acorda a cada 15, 30 ou 60 minutos na mesma conversa; veja [como tornar o Claude Code proativo](/proactive-claude-code). Vários podem compartilhar um repositório, como em [vários agentes do Claude Code](/blog/multiple-claude-code-agents).",
        },
        {
          title: "Atribua issues e responda às mensagens",
          text: "Coloque o trabalho no quadro; o funcionário pega, comenta pelo caminho e avisa você quando precisa de uma decisão. Leia [o que é um funcionário de IA](/ai-employees).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Escrever um arquivo CLAUDE.md para o Claude Code" },
  mid: {
    title: "Seu CLAUDE.md está pronto. Quem começa a próxima tarefa?",
    text: "O Crewmark acorda o Claude Code com um heartbeat, um papel, uma meta e um quadro de issues, no plano que você já paga.",
    button: "Acesso antecipado",
  },
  faq: {
    title: "Perguntas frequentes sobre o CLAUDE.md",
    items: [
      {
        q: "O que é o CLAUDE.md?",
        a: "Um arquivo markdown com instruções do projeto que o Claude Code lê no início de cada sessão, como comandos de build e teste, convenções e armadilhas conhecidas. É contexto para o Claude, não configuração obrigatória.",
      },
      {
        q: "Onde coloco o CLAUDE.md?",
        a: "Para uma equipe, na raiz do projeto como `./CLAUDE.md` ou `./.claude/CLAUDE.md`, versionado no git. Para você, `~/.claude/CLAUDE.md` vale para todos os projetos e `./CLAUDE.local.md` para um. Subdiretórios podem ter o seu, carregado quando o Claude trabalha neles.",
      },
      {
        q: "Qual deve ser o tamanho do CLAUDE.md?",
        a: "Curto. A Anthropic sugere menos de 200 linhas por arquivo, porque cada linha é lida em toda tarefa. Leve os procedimentos para skills e as regras de uma parte do código para `.claude/rules/`.",
      },
      {
        q: "O Claude Code lê o AGENTS.md?",
        a: "Sim, mas por padrão só quando o projeto não tem CLAUDE.md. Para compartilhar um único arquivo, coloque `@AGENTS.md` no topo do CLAUDE.md, ou ajuste a opção Project instructions no `/config` para ler os dois.",
      },
      {
        q: "CLAUDE.md ou AGENTS.md: qual usar?",
        a: "Se só o Claude Code lê o seu repositório, CLAUDE.md. Se os colegas também usam Codex, Cursor ou outro agente, escreva o AGENTS.md e importe-o de um CLAUDE.md que acrescente as notas só do Claude.",
      },
      {
        q: "Como crio um arquivo CLAUDE.md?",
        a: "Execute `/init` no Claude Code para gerar um a partir do seu código e depois enxugue. Edite mais tarde com `/memory` ou pedindo ao Claude que adicione uma linha.",
      },
      {
        q: "Por que o Claude ignora o meu CLAUDE.md?",
        a: "Confira se ele carregou com `/context all`, procure contradições entre arquivos e encurte: arquivos longos diluem cada regra. O que nunca pode ser pulado pertence a um hook ou a uma regra de permissão, não ao CLAUDE.md.",
      },
    ],
  },
  cta: {
    title: "Dê um trabalho ao seu Claude Code bem informado.",
    text: "O Crewmark transforma sessões do Claude Code, Codex e DeepSeek Harness em funcionários de IA com papéis, metas, horários de trabalho e um heartbeat.",
    button: "Acesso antecipado",
  },
  checked: "Conferido com a documentação do Claude Code, o agents.md e a documentação do Codex da OpenAI em 5 de novembro de 2026.",
  disclaimer:
    "O Crewmark é um produto independente, sem vínculo com a Anthropic nem com a OpenAI e sem endosso delas. Claude e Claude Code são marcas da Anthropic, e Codex, da OpenAI.",
};
