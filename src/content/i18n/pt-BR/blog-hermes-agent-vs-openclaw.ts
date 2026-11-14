import type { GuideCopy } from "@/components/landing/guide-article";

// Brazilian Portuguese translation of /blog/hermes-agent-vs-openclaw; the English master is
// src/content/blog/hermes-agent-vs-openclaw.ts.

const hermes = "https://github.com/NousResearch/hermes-agent";

const install = `# OpenClaw (macOS, Linux, WSL2)
curl -fsSL https://openclaw.ai/install.sh | bash

# Hermes Agent (Linux, macOS, WSL2)
curl -fsSL https://hermes-agent.nousresearch.com/install.sh | bash

# Move an OpenClaw setup to Hermes: preview first
hermes import-agent openclaw --dry-run`;

export const copy: GuideCopy = {
  meta: {
    title: "Hermes Agent vs OpenClaw vs Claude Code: qual usar (2026)",
    description:
      "Hermes Agent vs OpenClaw, e como os dois se comparam ao Claude Code: para que serve cada um, modelos e assinaturas, memória e skills, segurança e como migrar do OpenClaw para o Hermes. Com base na documentação de cada projeto.",
  },
  breadcrumb: "Hermes Agent vs OpenClaw",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-07" },
  hero: {
    kicker: "Blog · Agentes de IA",
    title: "Hermes Agent vs OpenClaw vs Claude Code: qual você precisa?",
    lead: "O OpenClaw e o Hermes Agent são os dois maiores agentes pessoais de IA open source: os dois rodam na sua própria máquina e respondem a você no Telegram, Slack, WhatsApp e outros apps de chat. O OpenClaw tem a comunidade maior (cerca de 394 mil estrelas no GitHub); o Hermes Agent, da Nous Research (cerca de 261 mil), gira em torno de um ciclo de aprendizado que transforma experiência em skills. O Claude Code é outro tipo de ferramenta: um agente de programação que trabalha no seu repositório. Este guia compara os três com base na documentação de cada um, para você escolher o certo, ou a combinação certa.",
    cta: "Começar",
    secondary: "Ver a comparação",
    secondaryHref: "#compare",
  },
  sections: [
    {
      kind: "text",
      title: "A resposta curta",
      points: [
        "Escolha o OpenClaw para ter o maior conjunto de canais e integrações e a maior comunidade: Discord, iMessage, Slack, Teams, Telegram, WhatsApp, Signal e mais de 20 outros.",
        "Escolha o Hermes Agent se você quer um assistente que aprende: ele cria skills a partir da experiência, aprimora essas skills conforme as usa e mantém uma memória curada, com um agendador cron integrado.",
        "Escolha o Claude Code para trabalho de software em um repositório: ler e alterar código, rodar testes, abrir pull requests.",
        "Quer que o Claude Code ou o Codex continuem trabalhando em uma tarefa sem precisar de um prompt, a partir de um quadro da equipe? Isso é um funcionário de IA; veja o final desta página.",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Hermes Agent vs OpenClaw vs Claude Code",
      text: ["Com base no README e na documentação de cada projeto, e na API do GitHub, em 7 de novembro de 2026."],
      headers: ["", "OpenClaw", "Hermes Agent", "Claude Code"],
      rows: [
        ["Criado por", "Peter Steinberger e a comunidade; OpenClaw Foundation", "Nous Research", "Anthropic"],
        ["O que é", "Assistente pessoal de IA nos seus apps de chat", "Agente pessoal que se aprimora sozinho com um ciclo de aprendizado", "Agente de programação para o seu repositório"],
        ["Onde você fala com ele", "Mais de 20 canais de chat, além de Control UI, CLI e apps", "Telegram, Discord, Slack, WhatsApp, Signal, e-mail, CLI; app de desktop", "Terminal, IDE, app de desktop; Remote Control pelo celular"],
        ["Modelos", "Intercambiáveis: Claude, OpenAI e Codex, modelos locais", "Qualquer provedor: Nous Portal, OpenRouter, OpenAI, endpoints personalizados", "Modelos Claude"],
        ["Assinatura do Claude", "Chave de API, ou reaproveitar um login do Claude Code na mesma máquina", "Só no Claude Max com uso extra comprado; não no Pro", "Incluído nos planos do Claude"],
        ["Memória e skills", "Memória local; skills e plugins compartilhados no ClawHub", "Memória curada pelo agente; cria e aprimora skills (padrão agentskills.io)", "CLAUDE.md, skills, hooks, subagentes"],
        ["Agendamento", "O Gateway roda como daemon", "Agendador cron integrado", "`/loop` e tarefas agendadas"],
        ["Isolamento", "As ferramentas rodam no host, a menos que você configure o sandboxing", "Aprovação para comandos perigosos; Docker ou Modal opcional", "Modos e regras de permissão; sandboxing"],
        ["Licença, estrelas", "MIT, ~394k", "MIT, ~261k", "Comercial"],
      ],
    },
    {
      kind: "text",
      title: "Hermes Agent vs OpenClaw: as diferenças reais",
      points: [
        "Aprendizado: o grande destaque do Hermes é o ciclo de aprendizado; ele escreve skills depois de tarefas complexas e as refina. A força do OpenClaw é a amplitude: mais canais, plugins no ClawHub e apps nativos para desktop e celular.",
        "Segurança por padrão: o OpenClaw trata mensagens recebidas como não confiáveis e faz o pareamento de remetentes desconhecidos, mas roda as ferramentas no host na sessão principal, a menos que você configure o sandboxing. O Hermes pede confirmação antes de comandos perigosos por padrão e pode isolar as ferramentas em Docker ou Modal. O OpenClaw publica suas correções de segurança abertamente: 722 avisos desde janeiro de 2026, todos os críticos corrigidos.",
        "Assinaturas: o OpenClaw pode reaproveitar um login local do Claude Code; o Hermes aceita uma assinatura do Claude só no Max com uso extra comprado, e os dois suportam login com ChatGPT/Codex.",
        "Governança: o OpenClaw é mantido pela OpenClaw Foundation, independente, com a OpenAI como doadora; o Hermes Agent é desenvolvido pela Nous Research.",
        "Migração: o Hermes tem um importador de um comando só para configurações do OpenClaw (persona, memórias, skills e configurações de mensagens).",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Como testar os dois, ou migrar do OpenClaw para o Hermes",
      steps: [
        {
          title: "Instale os dois lado a lado",
          text: "Os dois instalam com um único comando e rodam o próprio gateway, então você pode testá-los na mesma máquina com contas de chat diferentes.",
          code: install,
        },
        {
          title: "Conecte um canal primeiro",
          text: "Comece com um único app de chat e libere só a sua própria conta; os dois fazem pareamento ou usam lista de permissão para remetentes desconhecidos.",
        },
        {
          title: "Visualize a migração antes",
          text: "`hermes import-agent openclaw --dry-run` mostra o que seria migrado; adicione `--migrate-secrets` só se você quiser copiar também as suas chaves de API.",
        },
        {
          title: "Defina o isolamento antes de dar contas reais a ele",
          text: "Ative o sandboxing do OpenClaw ou o backend Docker do Hermes antes que o agente leia mensagens de outras pessoas. Para uma opção baseada em contêineres desde o início, veja [alternativas ao OpenClaw](/blog/openclaw-alternatives).",
        },
      ],
      source: { label: "Fonte: README do Hermes Agent", href: hermes },
    },
    {
      kind: "text",
      title: "OpenClaw vs Claude Code, e Hermes vs Claude Code",
      text: [
        "Eles resolvem problemas diferentes. O OpenClaw e o Hermes são assistentes para quem você manda mensagem: caixa de entrada, agenda, pesquisa, lembretes e tarefas entre apps. O Claude Code é onde o software é construído: ele lê o seu código, edita arquivos, roda comandos e testes, e abre pull requests. Muita gente usa os dois: um assistente de chat para o dia a dia e o Claude Code (ou o Codex) para o trabalho no repositório. O OpenClaw pode até reaproveitar o seu login do Claude Code na mesma máquina. Para fazer o Claude Code trabalhar no próprio horário, leia [como deixar o Claude Code proativo](/proactive-claude-code); para rodar vários ao mesmo tempo, veja [vários agentes do Claude Code](/blog/multiple-claude-code-agents).",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Com o Crewmark",
      title: "Quando você quer agentes com um trabalho, não assistentes",
      text: [
        "O OpenClaw e o Hermes respondem quando você manda mensagem. O Crewmark transforma Claude Code, Codex, DeepSeek Harness ou OpenCode em funcionários de IA: cada um tem um papel, uma meta e um horário de trabalho, acorda com um heartbeat, pega a próxima issue de um quadro compartilhado e manda mensagem para você quando precisa de uma decisão, na assinatura que você já paga.",
      ],
      steps: [
        {
          title: "Escolha um papel",
          text: "Um [especialista em SEO](/ai-employees/seo-specialist), um [engenheiro de software](/ai-employees/software-engineer), um [agente de marketing](/ai-employees/marketing-agent) e mais.",
        },
        {
          title: "Conecte o agente que você já usa",
          text: "Cada funcionário trabalha na própria sessão e no próprio checkout.",
        },
        {
          title: "Preencha o quadro",
          text: "Atribua issues; responda só o que precisa de você. Leia [o que é um funcionário de IA](/ai-employees).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Testar o Hermes Agent e o OpenClaw lado a lado" },
  mid: {
    title: "Precisa de agentes que deem conta de um backlog?",
    text: "O Crewmark roda Claude Code e Codex como funcionários de IA que pegam a próxima issue do seu quadro a cada heartbeat.",
    button: "Começar",
  },
  faq: {
    title: "Perguntas frequentes sobre Hermes Agent vs OpenClaw",
    items: [
      {
        q: "O Hermes Agent é melhor que o OpenClaw?",
        a: "Depende do que você valoriza. O Hermes Agent foca em aprendizado (skills que ele cria e aprimora) e pede confirmação antes de comandos perigosos por padrão. O OpenClaw tem mais canais, apps e plugins da comunidade.",
      },
      {
        q: "Posso migrar do OpenClaw para o Hermes Agent?",
        a: "Sim. O Hermes inclui `hermes import-agent openclaw`, que importa a sua persona, memórias, skills e configurações de mensagens; rode primeiro com `--dry-run`.",
      },
      {
        q: "Qual funciona com a minha assinatura do Claude?",
        a: "O OpenClaw pode reaproveitar um login do Claude Code na mesma máquina ou usar uma chave de API. O Hermes Agent aceita uma assinatura do Claude só no Claude Max com uso extra comprado; quem usa o Pro precisa de uma chave de API.",
      },
      {
        q: "O OpenClaw e o Hermes Agent são gratuitos?",
        a: "Os dois são open source sob a licença MIT. Você paga pelos modelos que usa; a Nous Research também oferece uma assinatura opcional do Nous Portal para o Hermes.",
      },
      {
        q: "OpenClaw vs Claude Code: qual devo usar?",
        a: "O OpenClaw é um assistente pessoal nos seus apps de chat; o Claude Code é um agente de programação no seu repositório. Eles se complementam, e o OpenClaw pode reaproveitar um login do Claude Code na mesma máquina.",
      },
      {
        q: "Hermes Agent vs Codex?",
        a: "O Codex é o agente de programação da OpenAI para o seu repositório. O Hermes é um agente pessoal de uso geral que pode fazer login com ChatGPT/Codex para usar modelos da OpenAI.",
      },
    ],
  },
  cta: {
    title: "Dê um trabalho aos seus agentes de programação, não só um chat.",
    text: "O Crewmark transforma sessões do Claude Code, Codex, DeepSeek Harness e OpenCode em funcionários de IA com papéis, metas, horário de trabalho e um heartbeat.",
    button: "Começar",
  },
  checked: "Conferido com os READMEs e a documentação do OpenClaw e do Hermes Agent, e com a API do GitHub, em 7 de novembro de 2026.",
  disclaimer:
    "O Crewmark é um produto independente, sem afiliação nem endosso da OpenClaw Foundation, Nous Research, Anthropic ou OpenAI. Os nomes de produtos são marcas registradas dos seus donos.",
};
