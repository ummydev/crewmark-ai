import type { GuideCopy } from "@/components/landing/guide-article";

// Brazilian Portuguese translation of /blog/deepseek-harness; the English master is src/content/blog/deepseek-harness.ts.

const repo = "https://github.com/deepseek-ai/deepseek-harness";

const install = `# Rode a interface web com Node.js
npx @deepseek-ai/dsh web
# depois abra http://127.0.0.1:3080

# Ou compile a partir do código-fonte
git clone https://github.com/deepseek-ai/deepseek-harness.git
cd deepseek-harness && pnpm install && pnpm run build && pnpm dsh web`;

const headless = `# Uma tarefa, sem interface, com um modo de permissão
dsh headless "Add tests for src/auth" --permission-mode workspace-write

# Transmita os eventos como JSON, por exemplo para scripts
dsh headless "Summarize open TODOs" --json

# Adicione um plugin a um perfil
dsh plugin --profile default add <package>`;

export const copy: GuideCopy = {
  meta: {
    title: "DeepSeek Harness: instalação, preços e vs Claude Code",
    description:
      "DeepSeek Harness (dsh) explicado: o harness de agentes open source da DeepSeek, app de desktop e CLI, instalação, preços da API da DeepSeek, plugins, o super-agent e a comparação com Claude Code, Codex e OpenCode.",
  },
  breadcrumb: "Guia do DeepSeek Harness",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-06" },
  hero: {
    kicker: "Blog · DeepSeek",
    title: "DeepSeek Harness: o que é, como instalar e como se compara",
    lead: "O DeepSeek Harness (`dsh`) é o harness de agentes open source da DeepSeek: um aplicativo que roda agentes de IA para tarefas do dia a dia, programação, pesquisa e trabalho em segundo plano, construído para que quase tudo, das ferramentas à interface, seja um plugin. Ele tem licença MIT, está em prévia para desenvolvedores e é um dos repositórios com mais estrelas do GitHub, e as buscas por ele cresceram desde que o protótipo Super-agent da DeepSeek apareceu, em 31 de outubro de 2026. Este guia explica o que ele é, o app de desktop e a CLI, como instalar, quanto custa, os principais recursos e como ele se compara com Claude Code, Codex e OpenCode.",
    cta: "Começar",
    secondary: "Ir para a instalação",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "table",
      id: "at-a-glance",
      title: "DeepSeek Harness em resumo",
      headers: ["", "DeepSeek Harness"],
      rows: [
        ["Criado por", "DeepSeek AI"],
        ["O que é", "Um harness de agentes open source com uma arquitetura em que “tudo é um plugin”, construído sobre o framework Cordis"],
        ["Licença", "MIT; cerca de 275.000 estrelas no GitHub em 6 de novembro de 2026"],
        ["Status", "Prévia para desenvolvedores; a DeepSeek avisa sobre mudanças que quebram a compatibilidade, e todas as versões são marcadas como prerelease (a mais recente, v0.2.2-rc.1, de 4 de novembro de 2026)"],
        ["Formas de usar", "App de desktop (macOS com Apple silicon, Windows x64), interface web (`dsh web`), CLI headless e modos ACP e SDK"],
        ["Modelos padrão", "`deepseek-flash` (DeepSeek-V4.1-Flash) e `deepseek-v4-pro`, cada um com contexto de 1.048.576 tokens"],
        ["Outros provedores", "Anthropic, OpenAI, Kimi, GLM ou qualquer endpoint compatível com OpenAI ou Anthropic, incluindo um servidor próprio"],
        ["Preço", "Software gratuito; você paga pelo uso da API da DeepSeek (ou de outro provedor)"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Como instalar e usar o DeepSeek Harness",
      steps: [
        {
          title: "Escolha desktop ou web",
          text: "Baixe o app de desktop em deepseek.com/en/harness para macOS (Apple silicon) ou Windows (64 bits); no macOS ele também pode instalar um comando `dsh`. Em qualquer máquina com Node.js, rode a interface web com npx ou compile a partir do código-fonte.",
          code: install,
        },
        {
          title: "Entre na conta ou adicione uma chave de API",
          text: "Na primeira execução, entre com sua conta da DeepSeek no navegador ou cole uma chave de API do platform.deepseek.com em Settings → Models (Configurações → Modelos). As chaves ficam salvas em `~/.dsh/.credentials.yaml` (`$DSH_HOME`).",
        },
        {
          title: "Dê instruções do projeto",
          text: "O DeepSeek Harness lê `AGENTS.md` ou `CLAUDE.md` no seu projeto (além das variantes `.local.md`) e um `~/.dsh/AGENTS.md` global. Instruções que você já escreveu para o Claude Code ou o Codex continuam valendo; veja o [guia do CLAUDE.md](/blog/claude-md) e o [guia do AGENTS.md no Codex](/blog/codex-agents-md).",
        },
        {
          title: "Defina quanto ele pode fazer",
          text: "Escolha um modo de sandbox (`read-only`, `workspace-write` ou `danger-full-access`) e uma política de aprovação (`ask` ou `never`). As notas de segurança da DeepSeek dizem que o harness é experimental, não passou por auditoria de segurança e o sandbox não garante isolamento, então comece em modo somente leitura no código que importa para você.",
        },
        {
          title: "Rode tarefas em modo headless e adicione plugins",
          text: "Use `dsh headless` para tarefas avulsas em scripts, `--resume` ou `--session-id` para continuar uma sessão e `dsh plugin` para adicionar plugins como tarefas agendadas, subagentes ou equipes de agentes.",
          code: headless,
        },
      ],
      source: { label: "Fonte: repositório e documentação do DeepSeek Harness", href: repo },
    },
    {
      kind: "table",
      id: "pricing",
      title: "Preços do DeepSeek Harness: quanto custa usar",
      text: [
        "O harness é gratuito e open source. O uso é cobrado pela API da DeepSeek nestas tarifas, em dólares americanos por milhão de tokens (api-docs.deepseek.com, 6 de novembro de 2026). As tarifas fora do pico são metade das de pico; os horários de pico são das 01:00 às 04:00 e das 06:00 às 10:00 UTC em dias úteis, exceto feriados na China. A DeepSeek não documenta nenhuma cota gratuita, então “usar de graça” na prática significa software gratuito mais o crédito de API que você tiver.",
      ],
      headers: ["Por 1M de tokens", "deepseek-flash, pico", "deepseek-flash, fora do pico", "deepseek-v4-pro, pico", "deepseek-v4-pro, fora do pico"],
      rows: [
        ["Entrada, cache hit", "$0.006", "$0.003", "$0.044", "$0.022"],
        ["Entrada, cache miss", "$0.30", "$0.15", "$1.32", "$0.66"],
        ["Saída", "$1.20", "$0.60", "$3.96", "$1.98"],
      ],
    },
    {
      kind: "text",
      title: "Principais recursos",
      points: [
        "Plugins para tudo: ferramentas, modelos, interfaces e comportamentos são plugins; instale por perfil ou crie um pedindo no chat (\"Creator mode\", o modo criador). Os plugins da comunidade usam o tópico `dsh-plugin` no GitHub.",
        "Entre os plugins oficiais e experimentais listados pela DeepSeek estão equipes de agentes, revisão de aprovação automática, tarefas agendadas, entrada por voz, um terminal, um loop de agente e subagentes.",
        "Skills (pastas `SKILL.md`), servidores MCP e hooks, incluindo uma ponte experimental que roda os hooks existentes do Claude Code.",
        "Subagentes no mesmo processo ou apoiados por ACP, Codex, Claude Code ou outro Harness.",
        "Sessões que podem ser retomadas, compactação, modo headless com eventos JSON e um SDK para construir em cima.",
        "O Super-agent: um bundle separado com licença MIT, o dsh-superagent, faz o harness agir de forma proativa em um repositório do GitHub; a DeepSeek o chama de protótipo de pesquisa. Veja [DeepSeek Super-Agent explicado](/blog/deepseek-super-agent).",
        "O paper que costuma ser citado junto, \"A Programming Paradigm for Spatiotemporal Composability\" (arXiv, agosto de 2026), descreve o Cordis, o framework por baixo, e não o harness em si.",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "DeepSeek Harness vs Claude Code vs Codex vs OpenCode",
      text: [
        "A DeepSeek não publica uma comparação; esta é a nossa leitura da documentação de cada ferramenta em 6 de novembro de 2026. A DeepSeek também documenta como usar seus modelos dentro do Claude Code, do Codex e do OpenCode, então dá para combinar.",
      ],
      headers: ["", "DeepSeek Harness", "Claude Code", "Codex", "OpenCode"],
      rows: [
        ["Criado por", "DeepSeek", "Anthropic", "OpenAI", "Anomaly (open source)"],
        ["Licença", "MIT", "Proprietária", "CLI Apache-2.0", "MIT"],
        ["Forma de pagamento", "Uso da API da DeepSeek (ou de outros provedores)", "Plano do Claude a partir de $20/mês, ou API", "Plano do ChatGPT (do Free para cima), ou API", "Suas chaves de API, ou login com Copilot ou ChatGPT"],
        ["Interfaces", "Desktop (macOS, Windows), interface web, CLI headless", "Terminal, IDEs, desktop, web, celular", "CLI, IDE, desktop, web, celular", "Terminal, desktop, IDE, web"],
        ["Arquivo de instruções", "AGENTS.md ou CLAUDE.md", "CLAUDE.md (AGENTS.md como alternativa)", "AGENTS.md", "AGENTS.md"],
        ["Como estender", "Plugins para tudo, skills, MCP, hooks", "Skills, plugins, MCP, hooks", "Skills, plugins, MCP, hooks", "Plugins, MCP"],
        ["Maturidade", "Prévia para desenvolvedores, com mudanças incompatíveis previstas", "Disponível para todos", "Disponível para todos", "Open source ativo"],
      ],
    },
    {
      kind: "text",
      title: "Perguntas que as pessoas pesquisam",
      points: [
        "Linux: ainda não há download de desktop para Linux; no Linux, rode a interface web com `npx @deepseek-ai/dsh web` ou compile a partir do código-fonte.",
        "VS Code: a DeepSeek não oferece extensão para o VS Code; use a interface de desktop ou web ao lado do seu editor, ou use os modelos da DeepSeek dentro de um agente de editor que a DeepSeek documenta, como o Claude Code ou o Codex.",
        "Ollama e modelos locais: não documentado. O harness aceita um endpoint personalizado compatível com OpenAI ou Anthropic para um servidor próprio, que é o caminho documentado para usar seus próprios modelos.",
        "TUI: nenhuma interface de terminal vem por padrão; um perfil personalizado ou o plugin experimental de terminal são as opções documentadas.",
        "Paper: veja o paper do Cordis acima; a DeepSeek pede que o harness seja citado como \"DeepSeek Harness: Everything is a Plugin\".",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Com o Crewmark",
      title: "Dê ao DeepSeek Harness um emprego, não só uma tarefa",
      text: [
        "O Crewmark é compatível com o DeepSeek Harness, além do Claude Code, do Codex e do OpenCode. Ele transforma uma sessão em um funcionário de IA com um cargo, uma meta e um horário de trabalho, e a acorda com um heartbeat para pegar a próxima issue de um quadro compartilhado.",
      ],
      steps: [
        {
          title: "Escolha o DeepSeek Harness como agente",
          text: "Rode o comando de configuração no seu projeto; o funcionário roda em uma sessão do DeepSeek Harness na sua máquina, cobrada na sua conta da API da DeepSeek.",
        },
        {
          title: "Dê a ele um cargo e uma meta",
          text: "Um engenheiro de software, um especialista em SEO, um profissional de growth marketing: cada um com um número para mover. Leia [o que é um funcionário de IA](/ai-employees).",
        },
        {
          title: "Deixe o heartbeat iniciar o trabalho",
          text: "Durante o horário de trabalho, ele acorda a cada 15, 30 ou 60 minutos, pega a próxima issue e manda mensagem quando precisa de uma decisão. Compare abordagens em [o que é um superagent](/blog/superagent).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Instale e use o DeepSeek Harness" },
  mid: {
    title: "Usa o DeepSeek Harness? Coloque-o no quadro.",
    text: "O Crewmark acorda o DeepSeek Harness, o Claude Code ou o Codex com um heartbeat, com um cargo, uma meta e um quadro de issues.",
    button: "Começar",
  },
  faq: {
    title: "Perguntas frequentes sobre o DeepSeek Harness",
    items: [
      {
        q: "O que é o DeepSeek Harness?",
        a: "Um harness de agentes open source da DeepSeek AI (`dsh`, licença MIT) para tarefas do dia a dia, programação, pesquisa e trabalho em segundo plano, construído em torno de plugins. Está em prévia para desenvolvedores.",
      },
      {
        q: "O DeepSeek Harness é grátis?",
        a: "O software é gratuito e open source. Para rodar, ele usa a API de um modelo, por padrão a da DeepSeek, cobrada por token; a DeepSeek não documenta nenhuma cota gratuita.",
      },
      {
        q: "Como instalo o DeepSeek Harness?",
        a: "Baixe o app de desktop para macOS (Apple silicon) ou Windows em deepseek.com/en/harness, ou rode `npx @deepseek-ai/dsh web` com Node.js e abra http://127.0.0.1:3080.",
      },
      {
        q: "O DeepSeek Harness funciona no Linux?",
        a: "Não há download de desktop para Linux, mas a interface web e a CLI rodam no Linux via npx ou compilando a partir do código-fonte.",
      },
      {
        q: "DeepSeek Harness vs Claude Code: qual é melhor?",
        a: "Eles atendem a necessidades diferentes. O DeepSeek Harness é open source, barato por token com os modelos da DeepSeek e extensível por plugins, mas está em prévia para desenvolvedores. O Claude Code é um produto maduro incluído nos planos do Claude. Os modelos da DeepSeek também podem rodar dentro do Claude Code.",
      },
      {
        q: "O DeepSeek Harness pode usar modelos Claude ou GPT?",
        a: "Sim. Ele tem provedores integrados para Anthropic, OpenAI, Kimi e GLM, e aceita qualquer endpoint compatível com OpenAI ou Anthropic.",
      },
      {
        q: "O que é o super agent da DeepSeek?",
        a: "O dsh-superagent, um bundle de protótipo de pesquisa para o DeepSeek Harness lançado em 31 de outubro de 2026, que o faz agir de forma proativa em um repositório do GitHub. Veja [DeepSeek Super-Agent explicado](/blog/deepseek-super-agent).",
      },
    ],
  },
  cta: {
    title: "Transforme o DeepSeek Harness em um funcionário de IA.",
    text: "O Crewmark transforma sessões do DeepSeek Harness, do Claude Code, do Codex e do OpenCode em funcionários de IA com cargos, metas, horário de trabalho e um heartbeat.",
    button: "Começar",
  },
  checked: "Conferido com o deepseek.com, o repositório deepseek-ai/deepseek-harness, a documentação da API da DeepSeek e o arXiv em 6 de novembro de 2026.",
  disclaimer:
    "O Crewmark é um produto independente, sem vínculo com a DeepSeek, a Anthropic ou a OpenAI e sem endosso delas. Os nomes de produtos são marcas de seus proprietários.",
};
