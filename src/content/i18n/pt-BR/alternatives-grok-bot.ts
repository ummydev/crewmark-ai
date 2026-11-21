import type { GuideCopy } from "@/components/landing/guide-article";

// Brazilian Portuguese translation of /alternatives/grok-bot; the English master is
// src/content/product-alternatives/grok-bot.ts.

export const copy: GuideCopy = {
  meta: {
    title: "Grok Bot: alternativas open source, grátis e hospedadas (2026)",
    description:
      "Alternativas ao Grok Bot comparadas: Claude Cowork, Copilot Cowork, ChatGPT Work, Lindy, OpenBot, OpenWorker, Hermes Agent e Crewmark, por licença e preço.",
  },
  breadcrumb: "Alternativas ao Grok Bot",
  parent: { name: "Comparações", href: "/compare" },
  hero: {
    kicker: "Alternativas · xAI Grok Bot",
    title: "Alternativas ao Grok Bot: colegas de equipe de IA open source, grátis e hospedados",
    lead: "O Grok Bot é o conjunto de “colegas de equipe de IA” hospedados da xAI: Bots que ganham, cada um, um computador próprio na nuvem, entram nas suas ferramentas e apps, trabalham no Slack e no Microsoft Teams, rodam rotinas e passam trabalho uns para os outros. Ele foi lançado em beta em 11 de agosto de 2026 e já saiu do beta. Não é open source, e os planos começam no Premium, a $30 por mês, com Teams e Enterprise via time de vendas. Veja oito alternativas, dos colegas de trabalho de IA do Claude, do ChatGPT e do Microsoft 365 a projetos open source no GitHub, com licença, preço e para quem cada uma serve.",
    cta: "Começar",
    secondary: "Ver a comparação",
    secondaryHref: "#compare",
  },
  sections: [
    {
      kind: "table",
      id: "compare",
      title: "Alternativas ao Grok Bot em resumo",
      text: [
        "Informações do site, da documentação e da página de preços de cada produto, verificadas em 13 de novembro de 2026. Preços em dólares americanos. Grok Bot: Premium $30, Super $100 e Ultra $200 por mês, com cobrança mensal, uso semanal incluído e uso extra cobrado pelo custo dos tokens. Mais no nosso [guia do Grok Bot](/personal-agent/grok-bot).",
      ],
      headers: ["Alternativa", "O que é", "Open source", "Preço a partir de"],
      rows: [
        [
          "[Claude Cowork](/compare/claude-cowork-vs-grok-bot)",
          "O agente da Anthropic para trabalho que não é de programação nos apps do Claude: pesquisa, documentos, planilhas e apresentações",
          "Não",
          "Planos pagos do Claude, a partir do Pro por $20 por mês ($17 por mês no plano anual); não está no Free",
        ],
        [
          "[Copilot Cowork](/personal-agent/copilot-cowork)",
          "Um agente do Microsoft 365 Copilot para tarefas de várias etapas no Outlook, Teams, Word, Excel, PowerPoint, OneDrive e SharePoint",
          "Não",
          "Licença do Microsoft 365 Copilot mais Copilot Credits a $0.01 cada, no pagamento conforme o uso, com cobrança mensal",
        ],
        [
          "[ChatGPT Work](/personal-agent/chatgpt-work)",
          "Um modo Work no ChatGPT para tarefas que terminam em algo para revisar, como apresentações, planilhas e análises",
          "Não",
          "Limitado no Free ($0) e no Go ($8 por mês), no app para desktop; completo a partir do Plus, a $20 por mês",
        ],
        [
          "[Lindy](/personal-agent/lindy)",
          "Uma assistente hospedada para caixa de entrada, agenda, reuniões e follow-ups, compartilhada com a sua equipe no Slack",
          "Não",
          "Grátis: $50 em créditos por 7 dias; $29.99 por mês por usuário ativo por 3.000 créditos",
        ],
        [
          "[OpenBot](/compare/openbot-vs-grok-bot)",
          "O workspace auto-hospedável da CopilotKit para colegas de trabalho de IA, em que cada Bot ganha o próprio navegador, arquivos e ferramentas",
          "Sim (template de aplicação MIT; usa o CopilotKit Intelligence, com licença à parte)",
          "Gratuito para projetos pessoais; Business até $29 por usuário ativo por mês",
        ],
        [
          "[OpenWorker](/personal-agent/openworker)",
          "Um app desktop, “um colega de trabalho de IA para o seu trabalho do dia a dia” (“An AI coworker for your everyday work”), que roda na sua máquina com aprovações e trilha de auditoria",
          "Sim (MIT)",
          "Sem preço publicado; a sua própria chave de modelo ou um modelo local",
        ],
        [
          "[Hermes Agent](/compare/grok-bot-vs-hermes-agent)",
          "O agente pessoal da Nous Research, com Bots que têm os próprios modelos e rotinas e trocam mensagens entre si",
          "Sim (MIT)",
          "Agente gratuito, mais o seu provedor de modelos; Nous Portal Plus opcional, $20 por mês",
        ],
        [
          "[Crewmark](/ai-employees)",
          "Um gerenciador de issues para um time de funcionários de IA, cada um uma conversa do Claude Code ou do Codex no seu computador que acorda com um heartbeat",
          "Sim (GPL-3.0)",
          "Grátis (1 projeto, até 3 funcionários de IA); Pro $5 por mês em breve; o uso do agente é pago ao seu provedor de agentes",
        ],
      ],
    },
    {
      kind: "text",
      id: "big-vendors",
      title: "Colegas de trabalho de IA da Anthropic, da Microsoft e da OpenAI",
      text: [
        "Hospedados, como o Grok Bot, e incluídos em planos que muitas equipes já têm. Os três são comparados em [ferramentas de colegas de trabalho de IA](/blog/ai-coworker).",
      ],
      points: [
        "Claude Cowork: o agente da Anthropic para trabalho intelectual. Você descreve um resultado e ele cuida de pesquisa, documentos, planilhas e apresentações nos seus arquivos, em apps conectados e em um navegador. As tarefas rodam na nuvem da Anthropic e continuam com o seu notebook fechado, e as tarefas agendadas rodam a cada hora, diariamente, semanalmente ou em dias úteis. Escolha-o se você já paga o Claude e quer trabalhos de várias etapas entregues como arquivos. Veja [Claude Cowork vs Grok Bot](/compare/claude-cowork-vs-grok-bot) e [alternativas ao Claude Cowork](/alternatives/claude-cowork).",
        "Copilot Cowork: um agente do Microsoft 365 Copilot que envia e-mails, agenda reuniões, edita arquivos do Word, Excel e PowerPoint e posta no Teams, com uma caixa de aprovação antes de ações sensíveis. O seletor de modelos inclui modelos GPT, Claude e Grok, conforme as configurações do locatário. Escolha-o se o seu trabalho está no Outlook, no Teams, no OneDrive e no SharePoint. Guia: [Copilot Cowork](/personal-agent/copilot-cowork).",
        "ChatGPT Work: um modo Work no ChatGPT que planeja uma tarefa, usa os seus arquivos, plugins, a web, um navegador e código, e devolve algo para você revisar. Ele compartilha limites de uso com o Codex; o Plus ($20 por mês) e o Pro (a partir de $100 por mês) têm acesso no desktop, na web e no celular. Escolha-o se a tarefa tem um resultado claro e várias fontes ou etapas. Guia: [ChatGPT Work](/personal-agent/chatgpt-work).",
      ],
    },
    {
      kind: "text",
      id: "assistant",
      title: "Uma assistente hospedada para o trabalho de escritório",
      points: [
        "Lindy: uma única assistente compartilhada em vez de vários Bots. Ela cuida de caixa de entrada, agenda, reuniões, pesquisa e follow-ups, e você a usa pelo Slack, por e-mail, iMessage, chamadas telefônicas e uma extensão do Chrome no Gmail. Qualquer coisa com impacto externo, como enviar um e-mail, espera a sua aprovação, e as Routines rodam em um agendamento ou por um evento. Cada usuário ativo ocupa uma licença paga, inclusive quem só @menciona a Lindy no Slack. Escolha-a se a sua equipe quer uma assistente que possa @mencionar no Slack para relatórios, pesquisa e atualizações de CRM. Guia: [Lindy](/personal-agent/lindy); mais em [alternativas à Lindy](/alternatives/lindy).",
      ],
    },
    {
      kind: "text",
      id: "open-source",
      title: "Alternativas open source ao Grok Bot no GitHub",
      text: ["Você mesmo os roda e usa as suas próprias chaves de modelo. As contagens de estrelas são do GitHub em 13 de novembro de 2026."],
      points: [
        "OpenBot (`github.com/CopilotKit/OpenBot`, 11.652 estrelas): como no Grok Bot, cada Bot ganha um computador próprio, com navegador, arquivos e ferramentas, além de rotinas, aprovações e um registro de atividades. Ele roda como app desktop para Mac e Windows ou em Kubernetes para uma equipe, e conecta os seus próprios agentes via AG-UI. Escolha-o se você quer colegas de trabalho de IA que pode auto-hospedar e personalizar sob MIT. Veja [OpenBot vs Grok Bot](/compare/openbot-vs-grok-bot).",
        "OpenWorker (`github.com/andrewyng/openworker`, 19.050 estrelas): um app desktop em beta aberto para macOS e Windows. Por padrão, as ações dependem de aprovação, cada chamada de ferramenta é registrada, as tarefas agendadas cobrem coisas como resumos matinais e relatórios semanais, e você pode mencioná-lo no Slack e receber a resposta na thread. Escolha-o se você quer um agente na sua própria máquina, inclusive com um modelo local. Guia: [OpenWorker](/personal-agent/openworker).",
        "Hermes Agent (`github.com/NousResearch/hermes-agent`, 262.923 estrelas): o agente pessoal da Nous Research. O Bot Mode transforma perfis em Bots com nome, cada um com o próprio chat, função, modelo, memória, skills e avatar, e eles trocam mensagens diretamente entre si. Ele responde no Telegram, no Discord, no Slack, no WhatsApp, no Signal e por e-mail. Escolha-o se você quer vários Bots especialistas na sua própria máquina ou servidor. Veja [Grok Bot vs Hermes Agent](/compare/grok-bot-vs-hermes-agent).",
      ],
    },
    {
      kind: "steps",
      id: "how-to-choose",
      title: "Como escolher uma alternativa ao Grok Bot",
      steps: [
        {
          title: "Comece pelo que você já paga",
          text: "Um plano pago do Claude inclui o Claude Cowork; os planos do ChatGPT incluem o Work (limitado no Free e no Go); o Copilot Cowork exige uma licença do Microsoft 365 Copilot mais Copilot Credits.",
        },
        {
          title: "Decida onde ele roda",
          text: "Grok Bot, Claude Cowork, Copilot Cowork, ChatGPT Work e Lindy rodam na nuvem do fornecedor. O OpenWorker roda na sua máquina, o OpenBot no seu notebook ou em Kubernetes, e o Hermes Agent na sua máquina ou em um servidor.",
        },
        {
          title: "Veja onde a sua equipe conversa",
          text: "O Grok Bot trabalha no Slack, no Microsoft Teams e em chamadas. No Slack, você também pode usar a Lindy, o OpenWorker, o Hermes Agent e conectores ou plugins no Claude Cowork e no ChatGPT Work. O Copilot Cowork trabalha no Outlook e no Teams.",
        },
        {
          title: "Veja como ele pede permissão antes de agir",
          text: "O Grok Bot consulta você quando precisa de aprovação e pode passar ações sensíveis pelo Auto Review. A Lindy espera aprovação para qualquer coisa com impacto externo, o OpenWorker exige aprovação para as ações por padrão, o Claude Cowork tem os modos Manual e Auto, e o Copilot Cowork mostra uma caixa de aprovação.",
        },
      ],
    },
    {
      kind: "text",
      id: "community",
      title: "O que as pessoas no Hacker News dizem sobre alternativas ao Grok Bot",
      text: [
        "Em 13 de novembro de 2026, lemos 7 threads do Hacker News que discutem o Grok Bot, de agosto a novembro de 2026, uma página por vez. As threads do Reddit só puderam ser encontradas pelos resultados de busca, então as listamos pelo título e não as resumimos; esta é uma amostra de discussões públicas, não uma pesquisa.",
      ],
      points: [
        "Reclamações sobre limites de uso apareceram em 3 das threads que lemos ([agosto de 2026](https://news.ycombinator.com/item?id=49261514), [novembro de 2026](https://news.ycombinator.com/item?id=50345698), [novembro de 2026](https://news.ycombinator.com/item?id=50366117)). Os usuários dizem que Bots que rodam o tempo todo esgotam rápido a cota semanal, e as threads de novembro discutem os limites mais baixos do Grok Bot.",
        "Agentes open source que você mesmo roda apareceram em 2 das threads que lemos ([agosto de 2026](https://news.ycombinator.com/item?id=49261514), [novembro de 2026](https://news.ycombinator.com/item?id=50366117)). Os usuários citaram o [Hermes Agent](/alternatives/hermes-agent) nas duas e o OpenClaw na de agosto; nessa thread, eles descrevem os dois como mais configuráveis do que um bot hospedado, e alguns dizem que o OpenClaw precisa de consertos frequentes. Veja [Grok Bot vs Hermes Agent](/compare/grok-bot-vs-hermes-agent) e [Hermes Agent vs OpenClaw](/blog/hermes-agent-vs-openclaw).",
        "Montar o próprio setup apareceu em 2 das threads que lemos ([agosto de 2026](https://news.ycombinator.com/item?id=49261514), [novembro de 2026](https://news.ycombinator.com/item?id=50366117)): um agente de programação como o Claude Code ou o Codex mais alguns scripts, ou modelos via OpenRouter. Os usuários dessas threads dizem que um setup assim cobre a maior parte do trabalho por muito menos dinheiro. Veja [Grok Bot vs Claude Code](/compare/grok-bot-vs-claude-code).",
        "Dúvidas sobre o que o Grok Bot acrescenta apareceram em 2 das threads que lemos ([agosto de 2026](https://news.ycombinator.com/item?id=49261514), [novembro de 2026](https://news.ycombinator.com/item?id=50366117)). Alguns usuários dizem que não conseguem pensar em uma tarefa que entregariam a ele, e outros o veem como uma versão hospedada de agentes open source como o OpenClaw, com um navegador a mais.",
        "No Reddit, threads com os títulos [Alternative to Grok bot](https://www.reddit.com/r/GrokBot/comments/1xp0dbt/alternative_to_grok_bot/) (r/GrokBot), [Grokbot alternative](https://www.reddit.com/r/GrokBot/comments/1wnayp2/grokbot_alternative/) (r/GrokBot) e [Is Grok Bot worth it?](https://www.reddit.com/r/cursor/comments/1vvx2fg/is_grok_bot_worth_it/) (r/cursor) apareceram nos resultados de busca. Listamos só os títulos; não lemos essas threads.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Com o Crewmark",
      title: "Bots para os seus apps. Funcionários de IA para o seu código.",
      text: [
        "O Crewmark é um gerenciador de issues para um time de funcionários de IA. Cada um é uma conversa do Claude Code ou do Codex no seu próprio computador, com um cargo, KPIs e projetos. Ele acorda com um heartbeat durante o horário de trabalho, pega issues de um quadro compartilhado e, quando precisa de uma revisão ou de uma permissão, marca a issue como Needs action e pergunta ali mesmo. Ele não tem integração nativa com Slack, GitHub ou Linear: os agentes usam as ferramentas e os logins do próprio computador.",
        "Ele é open source sob a licença GPL-3.0 e gratuito para 1 projeto com até 3 funcionários de IA. Você continua pagando o seu provedor de agentes como sempre, e o seu computador precisa ficar ligado para os heartbeats. Os planos estão na [página de preços](/pricing).",
      ],
      steps: [
        {
          title: "Escolha um cargo",
          text: "Comece pelos [cargos de funcionários de IA](/ai-employees), como engenheiro de software ou especialista em SEO, e escreva os KPIs e os projetos dele.",
        },
        {
          title: "Coloque o trabalho em um quadro",
          text: "Atribua issues ao funcionário ou a pessoas, e faça as recorrentes se repetirem diariamente, semanalmente ou mensalmente.",
        },
        {
          title: "Defina o horário dele",
          text: "Escolha o horário de trabalho e um heartbeat entre 15 minutos e 24 horas. Trabalhos e como configurá-los estão em [casos de uso do Claude Code](/use-cases/claude-code) e [casos de uso do Codex](/use-cases/codex).",
        },
      ],
    },
  ],
  mid: {
    title: "Quer colegas de equipe de IA para o seu código?",
    text: "O Crewmark dá ao seu Claude Code ou Codex um cargo, um heartbeat e um quadro compartilhado.",
    button: "Começar",
  },
  faq: {
    title: "Perguntas frequentes sobre alternativas ao Grok Bot",
    items: [
      {
        q: "Existe alternativa open source ao Grok Bot?",
        a: "Sim. O template de aplicação do OpenBot é MIT (ele usa o CopilotKit Intelligence, que tem licença à parte), e o OpenWorker e o Hermes Agent são MIT. O Crewmark é open source sob GPL-3.0. O próprio Grok Bot não é open source.",
      },
      {
        q: "Existe alternativa grátis ao Grok Bot?",
        a: "O OpenBot é gratuito para projetos pessoais; o OpenWorker não informa preço e roda com a sua própria chave de modelo ou um modelo local; o Hermes Agent é gratuito, mais o seu provedor de modelos. O ChatGPT Work tem acesso limitado no plano Free, no app para desktop, o plano Free da Lindy dá $50 em créditos por 7 dias, e o Crewmark é gratuito para 1 projeto com até 3 funcionários de IA. O Claude Cowork não está no plano Free do Claude.",
      },
      {
        q: "Quais alternativas ao Grok Bot estão no GitHub?",
        a: "OpenBot (`github.com/CopilotKit/OpenBot`, 11.652 estrelas), OpenWorker (`github.com/andrewyng/openworker`, 19.050 estrelas), Hermes Agent (`github.com/NousResearch/hermes-agent`, 262.923 estrelas) e Crewmark (`github.com/ummydev/crewmark-ai`). As contagens de estrelas são de 13 de novembro de 2026.",
      },
      {
        q: "O Claude é uma alternativa ao Grok Bot?",
        a: "O Claude Cowork, nos apps do Claude, é o agente da Anthropic para trabalho intelectual: ele roda tarefas na nuvem da Anthropic e com agendamento, e vem com os planos pagos do Claude a partir do Pro, a $20 por mês. Para código, o Claude Code é o agente de programação da Anthropic. Veja [Claude Cowork vs Grok Bot](/compare/claude-cowork-vs-grok-bot) e [Grok Bot vs Claude Code](/compare/grok-bot-vs-claude-code).",
      },
      {
        q: "Quanto custa o Grok Bot?",
        a: "O Premium custa $30 por mês, o Super $100 por mês (3,5x o uso do Premium) e o Ultra $200 por mês (12x o uso do Premium), com cobrança mensal. O uso semanal do Grok Bot está incluído, e o uso extra é cobrado pelo custo dos tokens. Teams e Enterprise são via time de vendas.",
      },
      {
        q: "Quais alternativas ao Grok Bot funcionam no Slack?",
        a: "A Lindy trabalha como colega de equipe no Slack; o OpenWorker responde quando você o menciona em uma thread do Slack; o Hermes Agent se conecta ao Slack pelo gateway dele; o Claude Cowork e o ChatGPT Work se conectam ao Slack como conector ou plugin; o OpenBot lista o Slack entre as suas interfaces, algumas em acesso antecipado.",
      },
    ],
  },
  cta: {
    title: "Dê um trabalho aos seus agentes de programação, não só um chat.",
    text: "O Crewmark transforma sessões do Claude Code e do Codex em funcionários de IA com cargos, KPIs, horário de trabalho e um heartbeat.",
    button: "Começar",
  },
  checked: "Informações verificadas em 13 de novembro de 2026 no site, na documentação e na página de preços de cada produto.",
  disclaimer:
    "O Crewmark é um produto independente, sem vínculo com a xAI nem com nenhuma outra empresa citada nesta página e sem endosso delas. Os nomes de produtos são marcas de seus respectivos titulares. As informações sobre outros produtos vêm das páginas públicas deles e podem ter mudado desde então.",
};
