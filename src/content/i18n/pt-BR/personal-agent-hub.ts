import type { GuideCopy } from "@/components/landing/guide-article";

// pt-BR translation of /personal-agent; the English master is src/content/personal-agent-hub.ts.

export const copy: GuideCopy = {
  meta: {
    title: "Agentes pessoais de IA em 2026: Muse, Grok Bot e Dots comparados",
    description:
      "O que é um agente pessoal de IA e quais são os que as pessoas estão procurando, comparados a partir das páginas de cada fabricante: Meta Muse, Grok Bot, ChatGPT dots, Claude Duet, Manus Cue, tarefas do Gemini, Microsoft Autopilot, OpenClaw e Hermes Agent.",
  },
  breadcrumb: "Agentes pessoais",
  hero: {
    kicker: "Agentes pessoais",
    title: "Agentes pessoais de IA em 2026: o que são e qual usar",
    lead: "Um agente pessoal é uma IA que trabalha para você, e não só com você: ele tem o próprio computador ou navegador, entra nos seus apps, lembra das suas preferências, continua trabalhando depois que você fecha o app e volta quando precisa de uma decisão. Nos últimos meses, Meta, xAI, OpenAI, Anthropic, Google, Microsoft e Manus lançaram o seu. Esta página explica o que eles têm em comum, compara todos a partir das páginas de cada fabricante e traz links para os nossos guias de cada um.",
    cta: "Começar",
    secondary: "Comparar",
    secondaryHref: "#compare",
  },
  sections: [
    {
      kind: "text",
      title: "O que é um agente pessoal",
      text: [
        "Um chatbot responde e espera. Um agente pessoal recebe um objetivo, planeja os passos e os executa na web e nos seus apps, muitas vezes enquanto você não está. Os novos têm cinco características em comum.",
      ],
      points: [
        "Um computador próprio: uma máquina na nuvem ou um navegador onde ele clica, digita e preenche formulários como uma pessoa.",
        "Seus apps: e-mail, agenda, arquivos e chat, com o acesso que você escolher.",
        "Memória: ele aprende suas preferências e não precisa das mesmas instruções duas vezes.",
        "Sempre ligado: tarefas agendadas e recorrentes, e trabalho que continua depois que você fecha o app.",
        "Aprovações: ele para e pede o seu OK antes de enviar, comprar ou fazer qualquer outra coisa que você marcar como sensível.",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Agentes pessoais de IA comparados",
      text: ["A partir das páginas de cada fabricante em 10 de novembro de 2026. A disponibilidade está mudando rápido; confira antes de assinar."],
      headers: ["Agente", "Feito por", "Feito para", "Quem pode usar", "Forma mais barata de entrar"],
      rows: [
        ["[Meta Muse](/personal-agent/meta-muse)", "Meta", "Tarefas do dia a dia e burocracias da vida", "EUA, 18+, conta da Meta", "Grátis com limite semanal; Power $20/mês"],
        ["[Grok Bot](/personal-agent/grok-bot)", "xAI", "Trabalho: uma equipe de Bots nos seus apps", "X Premium, Super, Ultra; SuperGrok; planos do Cursor", "Crédito de teste grátis"],
        ["[ChatGPT dots](/blog/chatgpt-dots)", "OpenAI", "Objetivos de longa duração dentro do ChatGPT", "ChatGPT Pro e Business Premium", "ChatGPT Pro"],
        ["[Claude Duet](/blog/claude-duet)", "Anthropic", "Um Claude proativo que vem até você", "Claude Pro, Max, Ultra nos EUA, por lista de espera", "Claude Pro"],
        ["[Base44 Superagent](/personal-agent/base44-superagent)", "Base44", "Um agente pessoal no WhatsApp, Telegram, Slack ou no navegador, com workflows", "Qualquer pessoa com conta na Base44", "Créditos do plano Base44; Starter $16/mês no plano anual"],
        ["[Manus Cue](/personal-agent/manus-cue)", "Manus", "Agentes com e-mail, telefone, carteira e computador próprios", "Acesso antecipado por convite", "Grátis durante o acesso antecipado"],
        ["[Tarefas do Gemini (Spark)](/personal-agent/gemini-spark)", "Google", "Tarefas, pesquisa e arquivos a partir do Gemini", "Google AI Pro ou Ultra, fora do EEE, Reino Unido e Suíça", "Google AI Pro"],
        ["Microsoft Autopilot (Scout)", "Microsoft", "Trabalho no Microsoft 365 e no Teams", "Organizações Frontier, com licença do GitHub Copilot", "Pela sua organização"],
        ["[OpenClaw](/blog/openclaw-alternatives)", "Open source", "Um assistente auto-hospedado nos seus apps de chat", "Qualquer pessoa; roda no seu computador", "Grátis; você paga o modelo"],
        ["[Hermes Agent](/blog/hermes-agent-vs-openclaw)", "Nous Research, open source", "Um agente auto-hospedado que aprende skills", "Qualquer pessoa; roda no seu computador", "Grátis; você paga o modelo"],
      ],
    },
    {
      kind: "text",
      id: "which",
      title: "Qual agente pessoal você deve usar?",
      points: [
        "Você quer ajuda com as burocracias da vida e ainda não quer pagar: Meta Muse, grátis nos EUA. Veja [casos de uso do Meta Muse](/personal-agent/meta-muse-use-cases).",
        "Você quer uma equipe de agentes em tarefas de trabalho, com agendamento: Grok Bot, com rotinas que rodam por agendamento ou gatilho. Veja [rotinas do Grok Bot](/personal-agent/grok-bot-routines).",
        "Você já paga o ChatGPT Pro: ChatGPT dots. Para Claude Pro ou acima: Claude Duet, por lista de espera.",
        "Você vive nos apps do Google: tarefas do Gemini com o Google AI Pro. No Microsoft 365 do trabalho: Autopilot, se a sua organização estiver no Frontier.",
        "Você quer um agente que faça ligações e pague dentro de um orçamento: Manus Cue, em acesso antecipado. Veja [Manus Cue](/personal-agent/manus-cue).",
        "Você quer tudo na sua própria máquina, com o seu próprio modelo: OpenClaw ou Hermes Agent, ambos open source.",
      ],
    },
    {
      kind: "table",
      id: "ai-coworkers",
      title: "Colegas de trabalho de IA para tarefas profissionais",
      text: [
        "Agentes feitos para tarefas de trabalho, e não para burocracias do dia a dia, com um guia para cada um. A partir das páginas de cada fabricante em 13 de novembro de 2026; veja mais em [colegas de trabalho de IA comparados](/blog/ai-coworker).",
      ],
      headers: ["Colega de trabalho de IA", "Feito por", "Feito para", "Forma mais barata de entrar"],
      rows: [
        ["[Claude Cowork](/personal-agent/claude-cowork)", "Anthropic", "Pesquisa, documentos, planilhas e apresentações nos apps do Claude", "Claude Pro, $20/mês"],
        ["[Copilot Cowork](/personal-agent/copilot-cowork)", "Microsoft", "Tarefas de várias etapas no Outlook, no Teams e em arquivos do Office", "Licença do Microsoft 365 Copilot mais Copilot Credits"],
        ["[ChatGPT Work](/personal-agent/chatgpt-work)", "OpenAI", "Tarefas que terminam em uma apresentação, uma planilha ou uma análise", "Limitado no ChatGPT Free, no app para desktop; completo a partir do Plus, $20/mês"],
        ["[Cursor Projects](/personal-agent/cursor-projects)", "Cursor", "Um agente coordenador que comanda muitos agentes de programação na nuvem", "Cursor Premium, $30/mês"],
        ["[Lindy](/personal-agent/lindy)", "Lindy", "Uma assistente no e-mail, no Slack, no iMessage e no telefone", "Teste grátis; depois, $29.99/mês por usuário ativo"],
        ["[OpenWorker](/personal-agent/openworker)", "Andrew Ng, open source", "Um colega de trabalho de IA para desktop que pergunta antes de agir", "Grátis; a sua própria chave de modelo ou um modelo local"],
        ["[OpenBot](/personal-agent/openbot)", "CopilotKit, open source", "Um workspace auto-hospedado para colegas de trabalho de IA", "Grátis para projetos pessoais"],
        ["[Suparagent](/personal-agent/suparagent)", "Open source", "Agentes com nome e rotinas no Claude Code, Codex ou Gemini CLI", "Grátis para auto-hospedar"],
      ],
    },
    {
      kind: "text",
      id: "safety",
      title: "Antes de entregar as suas contas",
      points: [
        "Conecte só o que uma tarefa precisa e prefira acesso somente leitura quando houver essa opção (o Muse deixa você escolher e-mail somente leitura).",
        "Mantenha as aprovações ligadas para envios, compras e qualquer coisa pública. O Muse e o Gemini perguntam antes de enviar ou comprar por padrão; no Grok Bot, onde o Auto Review deixa a maioria das ações seguir adiante, acrescente regras Ask first.",
        "Saiba quem mais pode usar um login: os Grok Bots compartilham um computador, então um site em que um Bot entra fica aberto para os outros.",
        "Confira os limites de uso: agentes que trabalham em segundo plano gastam tokens enquanto você não está.",
        "Leia o registro de atividades de vez em quando; os fabricantes avisam que esses agentes podem errar ou tomar ações inesperadas.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Com o Crewmark",
      title: "Agentes pessoais para a sua vida, funcionários de IA para o seu trabalho",
      text: [
        "Agentes pessoais são construídos em torno das tarefas de uma pessoa. O Crewmark é construído em torno de um trabalho: ele transforma o seu próprio Claude Code ou Codex em um funcionário de IA com um cargo, uma meta em números, horário de trabalho e um heartbeat, que pega a próxima issue de um quadro compartilhado, comenta enquanto trabalha e manda mensagem quando está travado.",
      ],
      steps: [
        {
          title: "Escolha um cargo",
          text: "Comece por um [cargo de funcionário de IA](/ai-employees): engenheiro de software, especialista em SEO, agente de marketing, gerente de redes sociais ou designer.",
        },
        {
          title: "Rode no plano que você já tem",
          text: "Ele trabalha dentro do seu próprio Claude Code ou Codex, então não há uma conta de tokens separada. Veja os [preços](/pricing).",
        },
        {
          title: "Deixe ele seguir em frente",
          text: "Ele acorda a cada 15 a 240 minutos durante o horário que você definir. Veja [como rodar o Claude Code 24/7](/blog/run-claude-code-24-7).",
        },
      ],
    },
  ],
  mid: {
    title: "Quer um agente com um trabalho, não só com tarefas avulsas?",
    text: "Os funcionários do Crewmark trabalham por um quadro compartilhado com um heartbeat, no plano do Claude Code ou do Codex que você já paga.",
    button: "Começar",
  },
  faq: {
    title: "Perguntas frequentes",
    items: [
      {
        q: "O que é um agente pessoal de IA?",
        a: "Uma IA que faz tarefas para você em vez de só responder: ela tem o próprio computador ou navegador, usa os seus apps, lembra das suas preferências, faz trabalho agendado e em segundo plano e pergunta antes de ações sensíveis.",
      },
      {
        q: "Qual é o melhor agente pessoal de IA em 2026?",
        a: "Depende de onde você já está. O Meta Muse é o mais fácil de experimentar (grátis nos EUA), o Grok Bot tem as rotinas mais detalhadas para trabalho, o ChatGPT dots e o Claude Duet vêm com os planos Pro, e o OpenClaw ou o Hermes Agent servem para quem quer auto-hospedar.",
      },
      {
        q: "Existe um agente pessoal de IA grátis?",
        a: "O Meta Muse é grátis nos EUA com limite semanal, o Grok Bot tem um crédito de teste grátis, o Manus Cue é grátis durante o acesso antecipado, e o OpenClaw e o Hermes Agent são software open source gratuito (você paga o modelo).",
      },
      {
        q: "Grok Bot vs Muse vs Dots: qual é a diferença?",
        a: "O Muse é o agente da Meta para tarefas do dia a dia, grátis para começar. O Grok Bot é o agente da xAI para trabalho, com vários Bots e rotinas. O ChatGPT dots são os agentes sempre ligados da OpenAI dentro do ChatGPT, nos planos Pro e Business Premium.",
      },
      {
        q: "Um agente pessoal é a mesma coisa que um funcionário de IA?",
        a: "Não exatamente. Um agente pessoal trabalha para uma pessoa, nas tarefas dela. Um funcionário de IA, no sentido do Crewmark, tem um cargo e uma meta, trabalha pelo quadro de uma equipe com agendamento e presta contas às pessoas com quem trabalha.",
      },
      {
        q: "Os agentes pessoais de IA são seguros?",
        a: "Eles são construídos com aprovações, máquinas isoladas e registros de atividade, mas os fabricantes dizem que podem errar. Conecte só o que você precisa, mantenha as aprovações ligadas para envios e compras e revise o que eles fizeram.",
      },
    ],
  },
  cta: {
    title: "Tarefas avulsas para o seu agente pessoal. Um trabalho para um funcionário de IA.",
    text: "O Crewmark transforma sessões do Claude Code e do Codex em funcionários de IA com cargos, metas, horário de trabalho e heartbeat.",
    button: "Começar",
  },
  checked: "Conferido nos anúncios, na documentação, na central de ajuda e nas páginas de preços de cada fabricante em 10 de novembro de 2026.",
  disclaimer:
    "O Crewmark é um produto independente, sem vínculo com a Meta, a xAI, a OpenAI, a Anthropic, a Manus, o Google, a Microsoft, o OpenClaw ou a Nous Research e sem endosso deles. Os nomes dos produtos são marcas dos respectivos titulares.",
};
