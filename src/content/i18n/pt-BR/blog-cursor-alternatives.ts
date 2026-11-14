import type { GuideCopy } from "@/components/landing/guide-article";

// Brazilian Portuguese translation of /blog/cursor-alternatives; the English master is src/content/blog/cursor-alternatives.ts.

const copilot = "https://github.com/features/copilot/plans";

export const copy: GuideCopy = {
  meta: {
    title: "Alternativas ao Cursor (2026): grátis, open source, baratas",
    description:
      "O Cursor entrou para a SpaceX e mudou para planos focados no Grok. Comparamos dez alternativas: Claude Code, Codex, GitHub Copilot, Devin Desktop (Windsurf), Zed, Cline, Kilo Code, OpenCode, Antigravity e Junie, com preços e planos gratuitos.",
  },
  breadcrumb: "Alternativas ao Cursor",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-06" },
  hero: {
    kicker: "Blog · Ferramentas de programação com IA",
    title: "As melhores alternativas ao Cursor em 2026",
    lead: "O Cursor passou a fazer parte da SpaceX em agosto de 2026, e os planos agora giram em torno do Grok: o plano Plus, de $8, oferece apenas modelos Grok, e Claude, GPT ou Gemini são cobrados à parte, pelo preço de tabela da API, a partir do plano de $30. Se não foi isso que você assinou, há boas alternativas: agentes que vêm com a assinatura que você já tem, editores com IA própria e ferramentas open source em que você usa a sua própria chave. Aqui estão dez, comparadas pelo que são, planos gratuitos, preços e modelos, em 6 de novembro de 2026.",
    cta: "Começar",
    secondary: "Ir para a comparação",
    secondaryHref: "#compare",
  },
  sections: [
    {
      kind: "table",
      id: "compare",
      title: "Alternativas ao Cursor comparadas",
      text: [
        "Os preços de entrada são os planos individuais pagos mais baratos listados na página de cada fornecedor, em dólares americanos por mês. \"Modelos Claude\" indica se você pode usar os modelos da Anthropic na ferramenta, incluídos ou com a sua própria chave.",
      ],
      headers: ["Ferramenta", "Tipo", "Opção gratuita", "Pago a partir de", "Modelos Claude", "Open source"],
      rows: [
        ["Claude Code", "Agente: terminal, IDEs, desktop, web", "Não", "$20 (Claude Pro)", "Incluídos", "Não"],
        ["OpenAI Codex", "Agente: CLI, IDE, desktop, nuvem", "Sim, ChatGPT Free", "$8 (ChatGPT Go)", "Não", "A CLI é Apache-2.0"],
        ["GitHub Copilot", "Extensão para a maioria das IDEs, CLI", "Sim, 2.000 autocompletes por mês", "$10 (Pro)", "Sim; Opus a partir do Pro+ ($39)", "Não"],
        ["Devin Desktop (antigo Windsurf)", "IDE", "Sim", "$20 (Pro)", "Sim", "Não"],
        ["Zed", "Editor nativo", "Sim, com as suas próprias chaves", "$10 (Pro)", "Com a sua própria chave ou um agente externo", "Sim"],
        ["Cline", "Extensão do VS Code e CLI", "Grátis; você paga o uso do modelo", "Sem plano individual", "Com a sua própria chave", "Apache-2.0"],
        ["Kilo Code", "Extensão do VS Code e do JetBrains, CLI", "Sim", "$19 (Kilo Pass Starter)", "Pelo gateway ou com a sua própria chave", "MIT"],
        ["OpenCode", "Agente de terminal, desktop, IDE", "Sim", "Não informado", "Com a sua própria chave; faz login com Copilot ou ChatGPT", "MIT"],
        ["Google Antigravity", "IDE agêntica, CLI", "Sim", "Business a partir de $30 por assento", "Nos planos pagos", "Não"],
        ["JetBrains Junie", "Agente nas IDEs da JetBrains, CLI", "Sim, Junie Lite", "AI Pro, listado a $8.33", "Sim, ou com a sua própria chave", "Não"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Como escolher uma alternativa ao Cursor",
      steps: [
        {
          title: "Comece pela assinatura que você já paga",
          text: "O Claude Pro ou Max inclui o Claude Code; qualquer plano do ChatGPT inclui o Codex; muitas empresas já têm o GitHub Copilot. Usar o que você já paga costuma sair mais barato do que uma ferramenta nova mais contas de API.",
        },
        {
          title: "Decida entre editor e agente",
          text: "Se você quer a experiência do Cursor (um editor com edições inline e autocompletar com Tab), veja o Devin Desktop, o Zed, o Copilot no VS Code ou o Antigravity. Se você mais delega tarefas a um agente, o Claude Code, o Codex e o OpenCode funcionam em qualquer terminal e editor.",
        },
        {
          title: "Se você quer algo grátis ou open source",
          text: "Cline, Kilo Code, OpenCode e Zed são open source e gratuitos com a sua própria chave de API; você paga ao provedor do modelo só o que usar.",
        },
        {
          title: "Veja de onde vêm os seus modelos",
          text: "Se você quer usar o Claude todo dia, uma ferramenta que o inclui no plano (Claude Code, Copilot, Devin Desktop, Junie) evita surpresas na cobrança por token. As ferramentas com chave própria dão acesso a qualquer modelo pelo preço de tabela.",
        },
        {
          title: "Leve as suas regras junto",
          text: "Muitas dessas ferramentas leem o AGENTS.md, então sair do `.cursor/rules` é basicamente copiar as suas regras para um único arquivo. Veja o [guia do CLAUDE.md](/blog/claude-md) para usar um só arquivo com vários agentes.",
        },
      ],
      source: { label: "Fonte: planos do GitHub Copilot e o site de cada fornecedor", href: copilot },
    },
    {
      kind: "text",
      title: "Notas sobre cada alternativa",
      points: [
        "Claude Code: o agente da Anthropic, incluído no Claude Pro ($20, ou $17 com cobrança anual), Max ($100) e Ultra ($200); também roda com uma chave de API. Compare em [Claude Code vs Cursor](/blog/claude-code-vs-cursor).",
        "OpenAI Codex: incluído em todos os planos do ChatGPT, do Free (GPT-6 Luna) e Go ($8) ao Plus ($20) e Pro (a partir de $100). Veja [Claude Code vs Codex](/blog/claude-code-vs-codex).",
        "GitHub Copilot: Free, Pro ($10), Pro+ ($39) e Max ($100); funciona no VS Code, Visual Studio, JetBrains, Xcode, Neovim, Eclipse e Zed, com Claude, GPT, Gemini e outros modelos.",
        "Devin Desktop: o novo nome do Windsurf, da Cognition; windsurf.com agora redireciona para ele. Free, Pro ($20) e Max ($200).",
        "Zed: um editor nativo e rápido para macOS, Windows e Linux; grátis com as suas próprias chaves ou com agentes externos como Claude Code e Codex, e Pro a $10 para modelos hospedados.",
        "Cline: uma extensão do VS Code e uma CLI open source; grátis, você paga só a inferência com as suas próprias chaves.",
        "Kilo Code: open source (MIT), agora da Anaconda; grátis com as suas próprias chaves ou com modelos gratuitos, e Kilo Pass a partir de $19.",
        "OpenCode: um agente de terminal open source com mais de 75 provedores de modelos; grátis, e pode fazer login com uma assinatura do Copilot ou do ChatGPT que você já tenha.",
        "Google Antigravity: a IDE agêntica e a CLI do Google, grátis para uso individual; os planos pagos adicionam o Gemini 4 Argon e modelos Claude.",
        "JetBrains Junie: o agente de programação da JetBrains nas suas IDEs e como CLI, com um nível Lite gratuito e os planos AI Pro e Ultimate.",
        "Fora da lista: Roo Code (o repositório no GitHub está arquivado), Gemini CLI (o uso pessoal passou para o Antigravity CLI em junho de 2026) e Aider (sem nova versão desde agosto de 2025).",
      ],
    },
    {
      kind: "text",
      title: "O que mudou no Cursor",
      text: [
        "O Cursor anunciou em 14 de agosto de 2026 que a SpaceX tinha concluído a aquisição. A página de preços agora lista Free, Plus ($8, apenas modelos Grok), Premium ($30, com agentes na nuvem, automações, revisão de código e modelos de terceiros cobrados por uso pelo preço de tabela da API), Super ($100) e Ultra ($200), junto com recursos do X, como menos anúncios na timeline. O uso é uma única franquia dividida com o Grok e renovada toda semana. Se você continuar no Cursor, ainda pode rodar a extensão ou a CLI do Claude Code dentro dele, no seu plano do Claude.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Com o Crewmark",
      title: "Vai trocar de ferramenta? Dê um trabalho à nova.",
      text: [
        "Seja qual for o agente para o qual você migrar, ele vai continuar esperando o seu próximo prompt. O Crewmark transforma uma sessão do Claude Code, Codex, DeepSeek Harness ou OpenCode em um funcionário de IA com um papel, uma meta e um horário de trabalho, e a acorda com um heartbeat para pegar a próxima issue de um quadro, na assinatura que você já paga.",
      ],
      steps: [
        {
          title: "Escolha um papel e uma meta",
          text: "Engenheiro de software, revisor, redator de SEO: cada funcionário tem uma meta escrita como um número. Leia [o que é um funcionário de IA](/ai-employees).",
        },
        {
          title: "Deixe o heartbeat iniciar o trabalho",
          text: "Durante o horário de trabalho, ele acorda a cada 15, 30 ou 60 minutos e pega a próxima issue; veja [como tornar o Claude Code proativo](/proactive-claude-code).",
        },
        {
          title: "Rode vários ao mesmo tempo",
          text: "Dê a cada um a sua própria worktree e o seu papel; veja as [ferramentas de orquestração para o Claude Code](/blog/claude-code-orchestration-tools).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Escolher uma alternativa ao Cursor" },
  mid: {
    title: "Trocando o Cursor pelo Claude Code, Codex ou OpenCode?",
    text: "O Crewmark os transforma em funcionários de IA que acordam com um heartbeat e pegam a próxima issue sozinhos.",
    button: "Começar",
  },
  faq: {
    title: "Perguntas frequentes sobre alternativas ao Cursor",
    items: [
      {
        q: "Qual é a melhor alternativa ao Cursor?",
        a: "Se você tem um plano do Claude, o Claude Code; com o ChatGPT, o Codex; para um editor parecido com o Cursor, o Devin Desktop (antigo Windsurf) ou o Copilot no VS Code; para algo grátis e open source, Cline, Kilo Code, OpenCode ou Zed com a sua própria chave.",
      },
      {
        q: "Existe alguma alternativa gratuita ao Cursor?",
        a: "Sim. Cline, Kilo Code, OpenCode e Zed são gratuitos com a sua própria chave de API, o Copilot tem um plano grátis com 2.000 autocompletes por mês, o Codex funciona no ChatGPT Free, e o Antigravity e o Devin Desktop têm planos gratuitos.",
      },
      {
        q: "Quais são as alternativas open source ao Cursor?",
        a: "Cline (Apache-2.0), Kilo Code (MIT), OpenCode (MIT) e Zed são open source; a CLI do Codex também é (Apache-2.0).",
      },
      {
        q: "Por que os preços do Cursor mudaram?",
        a: "Depois que a SpaceX comprou o Cursor (anúncio em 14 de agosto de 2026), os planos passaram para os modelos Grok e para uma linha que inclui o X: o Plus, de $8, só tem Grok, e modelos de terceiros como o Claude são cobrados à parte, pelo preço de tabela da API, a partir do Premium ($30).",
      },
      {
        q: "O que aconteceu com o Windsurf?",
        a: "O Windsurf agora se chama Devin Desktop e é feito pela Cognition; windsurf.com redireciona para devin.ai/desktop.",
      },
      {
        q: "Qual é a alternativa ao Cursor mais barata?",
        a: "As ferramentas com chave própria (Cline, OpenCode, Kilo Code, Zed) não custam nada além do uso do modelo. Entre os planos, o Codex começa em $8 com o ChatGPT Go e o Copilot Pro em $10; se você quer o Claude incluído, o Claude Pro custa $20.",
      },
      {
        q: "Posso manter as minhas regras do Cursor?",
        a: "Na maior parte, sim. Coloque-as no AGENTS.md, que o Codex, o Copilot, o OpenCode e outros leem; o Claude Code o lê por meio de um import `@AGENTS.md` no CLAUDE.md.",
      },
    ],
  },
  cta: {
    title: "Novo agente de programação, mesma assinatura, agora com um trabalho.",
    text: "O Crewmark transforma sessões do Claude Code, Codex, DeepSeek Harness e OpenCode em funcionários de IA com papéis, metas, horários de trabalho e um heartbeat.",
    button: "Começar",
  },
  checked: "Conferido com o cursor.com e o site, a página de preços ou o repositório no GitHub de cada alternativa em 6 de novembro de 2026.",
  disclaimer:
    "O Crewmark é um produto independente, sem vínculo com o Cursor, a SpaceX ou qualquer fornecedor listado e sem endosso deles. Os nomes de produtos são marcas dos respectivos titulares.",
};
