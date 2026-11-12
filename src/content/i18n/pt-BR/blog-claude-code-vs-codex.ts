import type { GuideCopy } from "@/components/landing/guide-article";

// Brazilian Portuguese translation of /blog/claude-code-vs-codex; the English master is src/content/blog/claude-code-vs-codex.ts.

const claudeDocs = "https://code.claude.com/docs/en/overview";

export const copy: GuideCopy = {
  meta: {
    title: "Claude Code vs Codex (2026): preços, limites de uso e recursos comparados | Crewmark",
    description:
      "Claude Code vs OpenAI Codex em novembro de 2026: modelos, planos e preços, limites de 5 horas e semanais, CLAUDE.md vs AGENTS.md, sandbox, subagentes, tarefas agendadas e qual escolher.",
  },
  breadcrumb: "Claude Code vs Codex",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-05" },
  hero: {
    kicker: "Blog · Claude Code · Codex",
    title: "Claude Code vs Codex: qual agente de programação você deve usar?",
    lead: "O Claude Code é o agente de programação da Anthropic; o Codex é o da OpenAI. Os dois leem o seu repositório, editam arquivos, executam comandos e funcionam em um terminal, em uma IDE, em um aplicativo de desktop, na web e no celular. Eles diferem em modelos, planos, limites, padrões e abertura. Esta comparação mostra quanto cada um custa, como funcionam os limites de uso, como os recursos se alinham e qual combina com cada tipo de trabalho, em novembro de 2026.",
    cta: "Acesso antecipado",
    secondary: "Ir para a comparação",
    secondaryHref: "#compare",
  },
  sections: [
    {
      kind: "table",
      id: "compare",
      title: "Claude Code vs Codex em resumo",
      headers: ["", "Claude Code", "Codex"],
      rows: [
        ["Feito por", "Anthropic", "OpenAI"],
        ["Modelo padrão", "Claude Opus 5.5; Sonnet 5.5, Haiku 5.5 e Fable 5.1 também disponíveis", "GPT-6.1 Sol; GPT-6 Astra, GPT-6.1 Terra e GPT-6 Luna também disponíveis"],
        ["Onde funciona", "Terminal, VS Code, JetBrains, aplicativo de desktop, claude.ai/code, aplicativos móveis do Claude, Slack", "Terminal, VS Code, Cursor e Windsurf, aplicativo de desktop do ChatGPT, chatgpt.com/codex, aplicativo móvel do ChatGPT, Slack e Linear"],
        ["Plano mais barato que o inclui", "Claude Pro, $20/mês", "ChatGPT Free (limitado), depois Go a $8/mês e Plus a $20/mês"],
        ["Código aberto", "Não: o repositório é público, mas com todos os direitos reservados", "A CLI, o SDK e o App Server são de código aberto (Apache-2.0); a extensão da IDE e a nuvem não são"],
        ["Arquivo de instruções", "CLAUDE.md (lê o AGENTS.md se não houver CLAUDE.md)", "AGENTS.md"],
        ["Sandbox", "Opcional para comandos de shell", "Ativado por padrão"],
        ["Tarefas agendadas", "Tarefas agendadas na nuvem (prévia), tarefas agendadas no desktop, `/loop`", "Tarefas agendadas no aplicativo de desktop e na nuvem"],
      ],
    },
    {
      kind: "table",
      title: "Preços: quais planos incluem cada um",
      text: [
        "Os dois vêm com a assinatura de chat de quem os criou, e os dois podem funcionar com uma chave de API, cobrada por token. Os preços são mensais, em dólares americanos.",
      ],
      headers: ["Plano do Claude", "Preço", "Plano do ChatGPT", "Preço"],
      rows: [
        ["Free", "Sem Claude Code", "Free", "$0, apenas GPT-6 Luna"],
        ["Pro", "$20 ($17 com cobrança anual)", "Go", "$8"],
        ["Max", "$100", "Plus", "$20"],
        ["Ultra", "$200", "Pro", "$100, $200 ou $500"],
        ["Team", "$25 por assento (Standard), $125 (Premium)", "Business", "$25 por usuário ($20 com cobrança anual)"],
        ["Enterprise", "$20 por assento com cobrança anual, mais uso nas tarifas da API", "Enterprise, Edu", "Fale com vendas"],
      ],
    },
    {
      kind: "text",
      title: "Limites de uso",
      text: [
        "Os dois usam uma janela móvel de 5 horas mais limites semanais, e os dois dividem uma única franquia entre chat e programação. Nenhum publica as horas ou mensagens exatas de cada plano.",
      ],
      points: [
        "Claude: o Pro tem um limite de 5 horas e um limite semanal. O Max recebe 5 vezes o uso do Pro. O Ultra recebe 10 vezes o Pro por semana e, em contas verificadas, nenhum limite de 5 horas. O chat do Claude, o Claude Code e a IDE usam o mesmo conjunto.",
        "Claude: se você atingir o limite de 5 horas no meio de uma tarefa, o Claude Code pode terminar a etapa atual (uma vez por semana no Pro, sempre no Max).",
        "Codex: a OpenAI estima as mensagens locais por 5 horas no Plus conforme o modelo, de 15–160 no GPT-6.1 Sol a 350–3,000 no GPT-6 Luna e 5–45 no GPT-6 Astra. O ChatGPT Pro não tem, no momento, limite de 5 horas; podem valer limites semanais.",
        "Codex: as tarefas na nuvem e as revisões de código no GitHub usam a mesma franquia, e o modo rápido gasta 2,5 vezes mais.",
        "Os dois deixam você continuar além do limite: o Claude com créditos de uso ou uma chave de API, o Codex com créditos ou uma chave de API (a chave de API cobre a CLI, o SDK e a IDE, não os recursos na nuvem).",
      ],
    },
    {
      kind: "table",
      title: "Recursos lado a lado",
      headers: ["Recurso", "Claude Code", "Codex"],
      rows: [
        ["Instruções do projeto", "`CLAUDE.md`, `.claude/rules/`, memória automática", "`AGENTS.md`, `AGENTS.override.md`, 32 KiB combinados por padrão"],
        ["Configuração", "`settings.json`", "`config.toml`"],
        ["Subagentes", "Sim, mais agentes em segundo plano", "Sim: default, worker e explorer integrados, mais agentes TOML personalizados"],
        ["Hooks", "Sim", "Sim, ativados por padrão"],
        ["Skills, plugins, MCP", "Sim", "Sim"],
        ["Modo plano", "Sim (Shift+Tab)", "Sim"],
        ["Modos de permissão", "Manual, aceitar edições, plano, auto (verificado por um classificador), bypass", "Pedir aprovação, aprovar por mim, acesso total, personalizado"],
        ["Sandbox", "Opcional: Seatbelt no macOS, bubblewrap no Linux; não no Windows nativo", "Ativado por padrão, incluindo um sandbox nativo do Windows"],
        ["Trabalho em paralelo", "Sessões paralelas no desktop e na web, agentes em segundo plano", "Worktrees no aplicativo de desktop, tarefas na nuvem"],
        ["Revisão de código", "`@claude review` no Team e no Enterprise; `/code-review` local em qualquer plano", "`@codex review` no GitHub; `/review` na CLI"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Como escolher entre Claude Code e Codex",
      text: [
        "Não existe um único vencedor: cada empresa publica benchmarks em que o próprio modelo lidera, e eles mudam a cada lançamento. Escolha pelo que afeta o seu dia a dia.",
      ],
      steps: [
        {
          title: "Parta da assinatura que você já paga",
          text: "Se você tem Claude Pro ou Max, o Claude Code está incluído; se tem ChatGPT Plus ou Pro, o Codex também. Testar os dois custa $40 por mês nos planos de entrada, e o Codex ainda funciona no ChatGPT Free e no Go, com limites menores.",
        },
        {
          title: "Ajuste os limites a quanto tempo você trabalha",
          text: "Para sessões longas todos os dias, compare os planos de topo: o Claude Ultra ($200) não tem limite de 5 horas em contas verificadas, e o ChatGPT Pro não tem no momento. Para uso ocasional, os planos de $20 de qualquer um bastam.",
        },
        {
          title: "Decida quanto você quer isolar em sandbox",
          text: "O Codex isola os comandos em sandbox por padrão, inclusive no Windows. O Claude Code pergunta antes de agir por padrão e oferece um sandbox que você ativa, além de um modo auto em que um classificador aprova ações seguras.",
        },
        {
          title: "Veja onde o seu time trabalha",
          text: "O Claude Code tem um plugin para JetBrains e funciona pelo Slack; o Codex se integra ao Cursor, Windsurf, Slack e Linear. Os dois funcionam no VS Code, na web e no celular.",
        },
        {
          title: "Mantenha as instruções portáteis",
          text: "Escreva as regras do projeto no AGENTS.md e importe-o no CLAUDE.md com `@AGENTS.md`; assim os dois agentes leem o mesmo arquivo e trocar não custa nada. Veja o [guia do CLAUDE.md](/blog/claude-md).",
        },
      ],
      source: { label: "Fontes: documentação do Claude Code e do Codex", href: claudeDocs },
    },
    {
      kind: "text",
      title: "E o Cursor, o Gemini CLI e o OpenCode?",
      text: [
        "O Cursor é um editor com agente próprio e também pode hospedar as extensões do Claude Code e do Codex. O Gemini CLI e o OpenCode são agentes de terminal como estes dois; o OpenCode é de código aberto e funciona com vários provedores de modelos. Todos leem o AGENTS.md, então a configuração portátil acima vale para eles.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Com o Crewmark",
      title: "Use os dois: dê um papel a cada agente",
      text: [
        "O Crewmark não obriga você a escolher. Ele transforma uma sessão do Claude Code, Codex, DeepSeek Harness ou OpenCode em um funcionário de IA com um papel, uma meta e um horário de trabalho, acorda a sessão com um heartbeat e entrega issues de um quadro compartilhado. Um funcionário pode rodar no Claude Code e outro no Codex no mesmo projeto.",
      ],
      steps: [
        {
          title: "Transforme uma sessão em funcionário",
          text: "Escolha um papel, como engenheiro de software ou especialista em SEO, escreva a meta dele como um número e execute o comando de instalação no Claude Code ou no Codex.",
        },
        {
          title: "Deixe o heartbeat iniciar o trabalho",
          text: "Durante o horário de trabalho, o funcionário acorda a cada 15, 30 ou 60 minutos na mesma conversa. Veja [como tornar o Claude Code proativo](/proactive-claude-code) e [como tornar o Codex proativo](/proactive-codex).",
        },
        {
          title: "Atribua issues e responda às mensagens dele",
          text: "Coloque o trabalho no quadro; cada funcionário pega o que combina com o seu papel, comenta pelo caminho e avisa você quando precisa de uma decisão. Leia [o que é um funcionário de IA](/ai-employees).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Escolher entre Claude Code e Codex" },
  mid: {
    title: "Já paga o Claude ou o ChatGPT?",
    text: "O Crewmark transforma o Claude Code e o Codex em funcionários de IA com um heartbeat e um quadro de issues, no plano que você já tem.",
    button: "Acesso antecipado",
  },
  faq: {
    title: "Perguntas frequentes sobre Claude Code vs Codex",
    items: [
      {
        q: "O Claude Code é melhor que o Codex?",
        a: "Nenhum é melhor para todo mundo. Os dois são agentes capazes, com subagentes, hooks, skills, MCP e modo plano. Escolha pela assinatura que você tem, pelos limites de que precisa, pelo padrão de sandbox que prefere e pelas ferramentas que o seu time usa.",
      },
      {
        q: "Qual é mais barato, Claude Code ou Codex?",
        a: "O Codex tem a entrada mais barata: está incluído no ChatGPT Free (limitado) e no Go, a $8 por mês. O Claude Code começa no Claude Pro, a $20. A $20 por mês, o Claude Pro e o ChatGPT Plus incluem o respectivo agente.",
      },
      {
        q: "Quais são os limites de uso do Claude Code e do Codex?",
        a: "Os dois usam uma janela de 5 horas mais limites semanais divididos com o chat. O Claude Max dá 5 vezes o Pro e o Ultra 10 vezes o Pro por semana. A OpenAI estima 15–160 mensagens do GPT-6.1 Sol por 5 horas no Plus. O Claude Ultra (verificado) e o ChatGPT Pro não têm, no momento, limite de 5 horas.",
      },
      {
        q: "Quais modelos o Claude Code e o Codex usam?",
        a: "O Claude Code usa por padrão o Claude Opus 5.5, com Sonnet 5.5, Haiku 5.5 e Fable 5.1 disponíveis. O Codex usa por padrão o GPT-6.1 Sol, com GPT-6 Astra, GPT-6.1 Terra e GPT-6 Luna disponíveis.",
      },
      {
        q: "O Codex é de código aberto? E o Claude Code?",
        a: "A CLI do Codex é de código aberto sob a Apache-2.0; a extensão de IDE e a nuvem não são. O repositório do Claude Code é público, mas não é de código aberto: todos os direitos reservados, com uso sob os termos comerciais da Anthropic.",
      },
      {
        q: "O Claude Code e o Codex podem compartilhar as mesmas instruções?",
        a: "Sim. Escreva-as no AGENTS.md, que o Codex lê, e coloque `@AGENTS.md` no CLAUDE.md para que o Claude Code leia o mesmo arquivo.",
      },
      {
        q: "Posso usar o Claude Code e o Codex juntos?",
        a: "Sim. Muitos desenvolvedores mantêm os dois e alternam conforme a tarefa. Com o Crewmark, cada um pode ser um funcionário de IA com o próprio papel, pegando issues do mesmo quadro com um heartbeat.",
      },
    ],
  },
  cta: {
    title: "Coloque o Claude Code e o Codex no mesmo time.",
    text: "O Crewmark transforma sessões do Claude Code, Codex e DeepSeek Harness em funcionários de IA com papéis, metas, horários de trabalho e um heartbeat.",
    button: "Acesso antecipado",
  },
  checked: "Conferido com a documentação do Claude Code, o claude.com/pricing, a documentação do Codex em learn.chatgpt.com e os dois repositórios do GitHub em 5 de novembro de 2026.",
  disclaimer:
    "O Crewmark é um produto independente, sem vínculo com a Anthropic nem com a OpenAI e sem endosso delas. Claude e Claude Code são marcas da Anthropic; ChatGPT e Codex são marcas da OpenAI.",
};
