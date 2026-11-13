import type { GuideCopy } from "@/components/landing/guide-article";

// Brazilian Portuguese translation of /blog/claude-code-vs-cursor; the English master is src/content/blog/claude-code-vs-cursor.ts.

const cursorPricing = "https://cursor.com/pricing";

export const copy: GuideCopy = {
  meta: {
    title: "Claude Code vs Cursor (2026): preços, modelos, limites e qual escolher | Crewmark",
    description:
      "Claude Code vs Cursor em novembro de 2026: os novos planos do Cursor focados no Grok após a entrada na SpaceX, quanto custam os modelos Claude em cada um, agentes, CLI, regras, MCP, hooks e como escolher.",
  },
  breadcrumb: "Claude Code vs Cursor",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-06" },
  hero: {
    kicker: "Blog · Claude Code",
    title: "Claude Code vs Cursor em 2026: o que mudou e qual escolher",
    lead: "O Claude Code é o agente de programação da Anthropic: ele roda no seu terminal, na sua IDE, no aplicativo de desktop ou no navegador, com uma assinatura do Claude. O Cursor é um editor de código com IA que tem agente próprio, CLI e agentes na nuvem. A comparação mudou este ano: o Cursor passou a fazer parte da SpaceX em agosto de 2026, os planos agora giram em torno dos modelos Grok e os modelos Claude no Cursor são cobrados à parte, pelo preço de tabela da API. Este guia compara preços, modelos, limites e recursos em 6 de novembro de 2026 e mostra como escolher, ou como usar os dois.",
    cta: "Acesso antecipado",
    secondary: "Ir para a comparação",
    secondaryHref: "#compare",
  },
  sections: [
    {
      kind: "table",
      id: "compare",
      title: "Claude Code vs Cursor em resumo",
      headers: ["", "Claude Code", "Cursor"],
      rows: [
        ["Feito por", "Anthropic", "Cursor, parte da SpaceX desde agosto de 2026"],
        ["O que é", "Um agente de programação para terminal, IDEs, desktop, web e celular", "Um editor de código com IA, mais uma CLI (`agent`), agentes na nuvem e revisão de código"],
        ["Modelos principais", "Claude Opus 5.5, Sonnet 5.5, Haiku 5.5, Fable 5.1", "Grok 4.5 a 4.7 e Composer 2.5; Claude, GPT, Gemini e outros pelo preço de tabela da API"],
        ["Plano pago mais barato", "Claude Pro, $20/mês", "Plus, $8/mês, apenas modelos Grok"],
        ["Custo dos modelos Claude", "Incluído nos limites do seu plano do Claude", "Cobrado à parte por uso, pelo preço de tabela da API (Premium e acima)"],
        ["Instruções do projeto", "`CLAUDE.md`, `.claude/rules/`; lê o AGENTS.md se não houver CLAUDE.md", "`.cursor/rules/*.mdc`, `AGENTS.md`, regras de usuário e de time"],
        ["Plataformas", "macOS, Windows, Linux", "macOS, Windows, Linux"],
      ],
    },
    {
      kind: "table",
      title: "Preços: planos do Claude vs planos do Cursor",
      text: [
        "Preços mensais em dólares americanos, conforme claude.com/pricing e cursor.com/pricing. Os planos do Cursor agora também incluem recursos do X, como menos anúncios na timeline, e dividem com o Grok uma única franquia de uso de IA que é renovada toda semana.",
      ],
      headers: ["Plano do Claude", "Preço", "Plano do Cursor", "Preço"],
      rows: [
        ["Free", "Sem Claude Code", "Free", "$0, solicitações ao agente limitadas"],
        ["Pro", "$20 ($17 com cobrança anual)", "Plus", "$8, apenas modelos Grok"],
        ["Max", "$100", "Premium", "$30: 4 vezes o uso do Plus, agentes na nuvem, automações, revisão de código, modelos de terceiros pelo preço da API"],
        ["Ultra", "$200", "Super", "$100: 15 vezes o uso do Plus"],
        ["Team", "$25 por assento (Standard), $125 (Premium)", "Ultra", "$200: 50 vezes o uso do Plus"],
        ["Enterprise", "$20 por assento com cobrança anual, mais uso nas tarifas da API", "Teams, Enterprise", "A partir de $30 por usuário; Enterprise sob consulta"],
      ],
    },
    {
      kind: "table",
      title: "Recursos lado a lado",
      headers: ["Recurso", "Claude Code", "Cursor"],
      rows: [
        ["Agente no terminal", "`claude`, com modo headless `-p`", "CLI `agent`, com modo print `-p`"],
        ["Modo plano", "Sim (Shift+Tab, `/plan`)", "Sim (Shift+Tab, `/plan`)"],
        ["Agentes na nuvem", "Claude Code na web, sessões na nuvem", "Agentes na nuvem em VMs (Premium e acima), iniciados pela web, iOS, GitHub, Slack, Linear ou pela API"],
        ["Trabalho em paralelo", "`--worktree`, subagentes, visão de agentes", "`/worktree`, `/best-of-n` entre modelos"],
        ["Automações", "`/loop`, tarefas agendadas no desktop e na nuvem", "Automações por cron, Git, Slack, Linear, webhooks, Sentry, PagerDuty (Premium e acima)"],
        ["MCP", "Sim: `claude mcp add`, `.mcp.json`", "Sim: `.cursor/mcp.json`"],
        ["Hooks", "Sim, mais de 30 eventos no `settings.json`", "Sim, cerca de 20 eventos no `hooks.json`; pode carregar hooks do Claude Code"],
        ["Revisão de código", "`/code-review` local; `@claude review` no Team e no Enterprise", "Bugbot no GitHub, GitLab, Bitbucket e Azure DevOps"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Como escolher entre Claude Code e Cursor",
      text: [
        "Nenhum é melhor em tudo, e os benchmarks publicados favorecem quem os publicou. Decida pelo que muda o seu dia a dia.",
      ],
      steps: [
        {
          title: "Decida por quais modelos você quer pagar",
          text: "Se você quer usar modelos Claude todo dia, um plano do Claude já os inclui dentro dos limites; no Cursor eles são cobrados além do plano, pelo preço de tabela da API. Se o Grok e o Composer bastam para você, os planos de $8 e $30 do Cursor saem mais baratos que os do Claude.",
        },
        {
          title: "Decida onde você quer trabalhar",
          text: "O Cursor é antes de tudo um editor: edições inline, autocompletar com Tab e o agente em uma só janela. O Claude Code é antes de tudo um agente: funciona em qualquer terminal e se conecta ao VS Code, JetBrains, aplicativo de desktop, web e Slack.",
        },
        {
          title: "Veja quanto deve rodar sem você",
          text: "Os dois rodam na nuvem e de forma agendada. Os agentes na nuvem e as automações do Cursor exigem o Premium ou superior; as tarefas agendadas e as sessões na nuvem do Claude Code vêm com os planos do Claude. Veja [como tornar o Claude Code proativo](/proactive-claude-code).",
        },
        {
          title: "Mantenha a configuração portátil",
          text: "Escreva as regras compartilhadas no AGENTS.md (os dois leem) e importe-o no CLAUDE.md; o Cursor também consegue carregar hooks do Claude Code. Assim, trocar ou combinar os dois custa pouco. Veja o [guia do CLAUDE.md](/blog/claude-md).",
        },
        {
          title: "Ou use os dois",
          text: "A documentação de VS Code da Anthropic traz um link de instalação para o Cursor, então a extensão do Claude Code roda dentro do editor Cursor, no seu plano do Claude.",
        },
      ],
      source: { label: "Fontes: documentação do Claude Code e preços do Cursor", href: cursorPricing },
    },
    {
      kind: "text",
      title: "Se você usa a extensão do Claude Code no Cursor",
      text: [
        "Em 29 de outubro de 2026, o Cursor informou que as versões maliciosas 2.1.312 e 2.1.313 da extensão Anthropic.claude-code, que não foram feitas pela Anthropic, ficaram disponíveis no marketplace de extensões do Cursor por cerca de 11 horas, para Windows e macOS. O Cursor as removeu, reconstruiu o marketplace e publicou uma verificação: uma chave SSH com o rótulo `svc-telemetry` no seu `authorized_keys` indica que a máquina foi afetada. Se você instalou ou atualizou a extensão nesse dia, siga o aviso de segurança do Cursor.",
      ],
    },
    {
      kind: "text",
      title: "E o Codex?",
      text: [
        "O Codex, da OpenAI, é a terceira opção comum: vem incluído nos planos do ChatGPT a partir do gratuito e também roda dentro do Cursor. Compare em [Claude Code vs Codex](/blog/claude-code-vs-codex) e veja as [ferramentas de orquestração para o Claude Code](/blog/claude-code-orchestration-tools) para rodar vários agentes ao mesmo tempo.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Com o Crewmark",
      title: "Seja qual for a escolha, dê um trabalho a ele",
      text: [
        "Editores e agentes continuam esperando o seu próximo prompt. O Crewmark transforma uma sessão do Claude Code, Codex, DeepSeek Harness ou OpenCode em um funcionário de IA com um papel, uma meta e um horário de trabalho, e a acorda com um heartbeat para pegar a próxima issue de um quadro, na assinatura que você já paga.",
      ],
      steps: [
        {
          title: "Escolha um papel e uma meta",
          text: "Engenheiro de software, revisor, redator de SEO: cada um tem uma meta escrita como um número. Leia [o que é um funcionário de IA](/ai-employees).",
        },
        {
          title: "Deixe o heartbeat iniciar o trabalho",
          text: "Durante o horário de trabalho, o funcionário acorda a cada 15, 30 ou 60 minutos na mesma conversa e pega a próxima issue.",
        },
        {
          title: "Revise no quadro",
          text: "Ele comenta pelo caminho e avisa você quando precisa de uma decisão.",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Escolher entre Claude Code e Cursor" },
  mid: {
    title: "Já escolheu o seu agente? Agora deixe-o trabalhar sem esperar por você.",
    text: "O Crewmark acorda o Claude Code ou o Codex com um heartbeat, um papel, uma meta e um quadro de issues.",
    button: "Acesso antecipado",
  },
  faq: {
    title: "Perguntas frequentes sobre Claude Code vs Cursor",
    items: [
      {
        q: "O Claude Code é melhor que o Cursor?",
        a: "Depende de como você trabalha. O Claude Code combina com quem quer os modelos Claude incluídos em uma assinatura e um agente que funciona em qualquer terminal ou IDE. O Cursor combina com quem quer um editor com IA e edições inline, e não se importa em usar modelos Grok ou pagar preços de API pelos outros.",
      },
      {
        q: "Posso usar modelos Claude no Cursor?",
        a: "Sim, no Premium ($30) e acima, mas modelos de terceiros como o Claude são cobrados à parte por uso, pelo preço de tabela da API. O plano Plus, de $8, oferece apenas modelos Grok.",
      },
      {
        q: "Qual é mais barato, Claude Code ou Cursor?",
        a: "Os planos de entrada do Cursor são mais baratos ($8 e $30 por mês), mas usar o Claude no Cursor custa à parte. Se você usa principalmente modelos Claude, um plano Claude Pro ($20) ou Max ($100) costuma sair mais barato do que pagar preços de API.",
      },
      {
        q: "O Cursor agora pertence à SpaceX?",
        a: "Sim. O Cursor anunciou em 14 de agosto de 2026 que tinha sido adquirido pela SpaceX, concluindo um processo iniciado em abril. Os planos agora vêm com recursos do X e modelos Grok.",
      },
      {
        q: "Posso rodar o Claude Code dentro do Cursor?",
        a: "Sim. A extensão do Claude Code é instalada no Cursor pelo link de instalação da Anthropic, e a CLI `claude` roda no terminal do Cursor. Use a extensão oficial e confira a versão dela depois do aviso de segurança do Cursor de 29 de outubro.",
      },
      {
        q: "O Claude Code e o Cursor compartilham configuração?",
        a: "Em parte. Os dois leem o AGENTS.md, os dois suportam MCP (cada um com o próprio arquivo de configuração) e o Cursor consegue carregar hooks do Claude Code. Fora isso, os arquivos de regras e de configurações são separados.",
      },
      {
        q: "E os limites de uso?",
        a: "Os planos do Claude usam uma janela de 5 horas mais limites semanais divididos com o chat do Claude. Os planos do Cursor dividem com o Grok uma franquia renovada toda semana, dimensionada em múltiplos do plano Plus, com recargas ou cobrança pela API além dela.",
      },
    ],
  },
  cta: {
    title: "Transforme o seu agente de programação em um colega que não para.",
    text: "O Crewmark transforma sessões do Claude Code, Codex e DeepSeek Harness em funcionários de IA com papéis, metas, horários de trabalho e um heartbeat.",
    button: "Acesso antecipado",
  },
  checked: "Conferido com a documentação do Claude Code, o claude.com/pricing e o cursor.com (preços, documentação, changelog e blog) em 6 de novembro de 2026.",
  disclaimer:
    "O Crewmark é um produto independente, sem vínculo com a Anthropic, o Cursor ou a SpaceX e sem endosso deles. Claude e Claude Code são marcas da Anthropic; Cursor, do seu proprietário.",
};
