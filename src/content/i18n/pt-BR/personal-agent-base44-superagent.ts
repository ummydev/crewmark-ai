import type { GuideCopy } from "@/components/landing/guide-article";

// pt-BR translation of /personal-agent/base44-superagent; the English master is
// src/content/personal-agents/base44-superagent.ts.

const docs = "https://docs.base44.com/superagents/creating-a-superagent";

const prompts = `Toda manhã às 7h, resuma os meus e-mails não lidos, as reuniões de hoje
e as conversas do Slack que me mencionam. Mande aqui.

Quando chegar no Gmail um e-mail de um lead novo, rascunhe um acompanhamento pessoal
e me pergunte antes de enviar. Se ele não responder em três dias, tente outra abordagem.

Toda sexta às 17h, puxe os números de vendas, suporte e marketing da semana
e publique um resumo no #weekly do Slack.`;

export const copy: GuideCopy = {
  meta: {
    title: "Base44 Superagent: preços, créditos, WhatsApp e configuração",
    description:
      "Os Superagents da Base44 explicados: o que o agente pessoal faz, como criar um, os planos da Base44 e como os Superagents usam créditos de mensagem e de integração, como conectar WhatsApp, Telegram e Slack, workflows, exemplos e como ele se compara.",
  },
  breadcrumb: "Base44 Superagent",
  parent: { name: "Agentes pessoais", href: "/personal-agent" },
  hero: {
    kicker: "Agentes pessoais · Base44",
    title: "Base44 Superagent: o que faz, quanto custa e como configurar",
    lead: "Um Superagent é o “agente pessoal de IA que executa tarefas para você 24/7” da Base44. Você fala com ele no navegador ou no WhatsApp, Telegram, Slack e outros apps de chat; ele trabalha nas ferramentas que você conecta, roda workflows com agendamento ou gatilho, lembra das coisas entre conversas e pode até fazer ligações. Este guia mostra o que ele faz, como criar um, como funcionam os preços e os créditos, como conectar o WhatsApp, exemplos de workflows e como ele se compara a outros agentes pessoais.",
    cta: "Começar",
    secondary: "Preços e créditos",
    secondaryHref: "#pricing",
  },
  sections: [
    {
      kind: "text",
      title: "O que é um Base44 Superagent",
      text: [
        "A Base44 é mais conhecida como construtora de apps com IA. O Superagent dela é um agente pessoal separado, que você comanda conversando: “Descreva o que você quer, e o seu Superagent age por você nas suas ferramentas.” Ele só acessa as ferramentas e os dados que você conecta.",
      ],
      points: [
        "Chat em qualquer lugar: navegador, WhatsApp, Telegram, Slack, iMessage e LINE. No WhatsApp ele pode entrar em grupos.",
        "Conectores: Gmail, Google Calendar, Google Drive, Notion, GitHub, Slack e mais, além do seu próprio servidor MCP. Conectores compartilhados podem ficar como somente leitura.",
        "Workflows: trabalhos que rodam com agendamento ou quando algo acontece em uma ferramenta conectada.",
        "Memória: conhecimento, contexto de trabalho e um registro de memória, compartilhados entre conversas ou mantidos separados.",
        "Skills e metas: instruções reutilizáveis, e `/goal` para dividir um resultado maior em tarefas que você pode pausar e retomar.",
        "Voz: fale com ele, com compartilhamento de tela no desktop. Com um número de telefone, workflows agendados podem fazer ligações.",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Como criar um Base44 Superagent",
      steps: [
        {
          title: "Abra o Personal Agent",
          text: "Entre em app.base44.com e clique em Personal Agent, em Explore, na barra lateral (ou na aba Agent, se a sua barra lateral mostrar Apps e Agent).",
        },
        {
          title: "Escolha onde falar com ele",
          text: "Escolha Continue here para o navegador, ou WhatsApp, Telegram ou iMessage. Para o WhatsApp, escaneie o QR code ou abra o app pelo botão e envie a mensagem já preenchida; para o Telegram, envie a mensagem já preenchida ou toque em Start.",
        },
        {
          title: "Conecte as suas ferramentas",
          text: "Abra Plugins na barra lateral, clique em Connect em um conector, escolha um conector compartilhado ou de usuário do app e deixe-o como somente leitura se o agente só precisar olhar. Adicione o seu próprio servidor MCP com Add Connector.",
        },
        {
          title: "Descreva o trabalho",
          text: "Diga o que você quer feito; coloque o contexto do cargo ou do projeto na primeira mensagem e passe regras fixas que ele deve sempre seguir. Para trabalho recorrente, descreva o agendamento ou o gatilho e ele monta um workflow.",
          code: prompts,
        },
      ],
      source: { label: "Fonte: documentação da Base44, Creating a Superagent", href: docs },
    },
    {
      kind: "table",
      id: "pricing",
      title: "Preços e créditos do Base44 Superagent",
      text: [
        "Os Superagents rodam com os créditos do seu workspace da Base44. Estes são os planos da Base44 como listados em 10 de novembro de 2026, com cobrança anual; a página de preços diz que a cobrança anual economiza 20% e não lista preços mensais.",
      ],
      headers: ["Plano", "Preço (cobrança anual)", "Créditos de mensagem / mês", "Créditos de integração / mês"],
      rows: [
        ["Free", "$0", "25", "100"],
        ["Starter", "$16/mês", "100", "2.000"],
        ["Builder", "$40/mês", "250", "10.000"],
        ["Pro", "$80/mês", "500", "20.000"],
        ["Elite", "$160/mês", "1.200", "50.000"],
      ],
    },
    {
      kind: "text",
      id: "credits",
      title: "Como os Superagents usam créditos",
      points: [
        "Créditos de mensagem: toda mensagem que o agente processa e toda execução de workflow, igual a conversar. Isso inclui mensagens do WhatsApp, Telegram, Slack, da API e de automações.",
        "Créditos de integração: ações como geração de imagens, processamento de arquivos, upload de arquivos e links de download.",
        "Os créditos são renovados em um calendário fixo, e os não usados expiram quando zeram.",
        "Quando o workspace fica sem créditos, os workflows não rodam. Eles continuam ligados e voltam quando os créditos voltam, mas as execuções perdidas não acontecem depois.",
        "Confira o uso em Agent Settings > Credit usage. Um Superagent também pode pausar execuções que estão em loop, para parar de desperdiçar créditos.",
        "O plano Free tem 25 créditos de mensagem por mês. Toda execução consome créditos de mensagem, então um único workflow diário (cerca de 30 execuções por mês) já precisa de mais do que isso; conte com um plano pago para workflows diários.",
      ],
    },
    {
      kind: "steps",
      id: "workflows",
      title: "Workflows e exemplos do Base44 Superagent",
      text: [
        "Descreva o trabalho no chat, ou abra Workflows, clique em New Workflow e mande um dos sugeridos para o chat. O Superagent descobre se ele é agendado ou acionado por gatilho e pergunta o que precisa.",
      ],
      steps: [
        {
          title: "Agendado",
          text: "Roda nos horários que você define: um resumo matinal dos e-mails não lidos, reuniões e conversas do Slack; um fechamento do dia com a lista de tarefas de amanhã; uma ligação semanal para o consultório do dentista para ver se há um horário mais cedo (se o seu agente tiver um número de telefone).",
        },
        {
          title: "Por gatilho",
          text: "Roda quando algo acontece: um e-mail novo no Gmail, uma mudança nos dados do seu Superagent ou atividade em uma ferramenta conectada, como um lembrete quando um e-mail fica 24 horas sem ser lido ou um brief 30 minutos antes de cada reunião.",
        },
        {
          title: "Quando quebra",
          text: "Um workflow que falha várias vezes seguidas se pausa sozinho e a Base44 manda um e-mail para você. Confira a aba Activity, corrija a causa (muitas vezes uma integração desconectada), clique em Resume e depois em Run Now para testar.",
        },
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Base44 Superagent vs Meta Muse, Grok Bot e Claude Duet",
      headers: ["", "Base44 Superagent", "Meta Muse", "Grok Bot", "Claude Duet"],
      rows: [
        ["Onde você fala com ele", "Navegador, WhatsApp, Telegram, Slack, iMessage, LINE", "App Muse, muse.ai, WhatsApp", "Apps de desktop e celular, Slack, X", "O app Claude Duet"],
        ["Agendamentos", "Workflows agendados e por gatilho", "Lembretes e tarefas recorrentes", "Rotinas com agendamento ou gatilho", "Vem até você com o que precisa de atenção"],
        ["Preços", "Créditos do plano Base44, a partir de $16/mês no plano anual", "Grátis com limite semanal; Power $20/mês", "Incluído no X Premium ou acima, SuperGrok, planos do Cursor", "Incluído no Claude Pro ou acima, por lista de espera"],
        ["Guia", "Esta página", "[Meta Muse](/personal-agent/meta-muse)", "[Grok Bot](/personal-agent/grok-bot)", "[Claude Duet](/blog/claude-duet)"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Com o Crewmark",
      title: "Um Superagent para as suas tarefas, um funcionário de IA para o seu backlog",
      text: [
        "Um Base44 Superagent é construído em torno das ferramentas e dos chats de uma pessoa. O Crewmark é construído em torno de um trabalho: ele transforma o seu próprio Claude Code ou Codex em um funcionário de IA com um cargo, uma meta em números, horário de trabalho e um heartbeat, que pega a próxima issue de um quadro compartilhado, sem créditos para comprar além do plano do agente que você já tem.",
      ],
      steps: [
        {
          title: "Escolha um cargo",
          text: "Comece por um [cargo de funcionário de IA](/ai-employees): engenheiro, especialista em SEO, agente de marketing, gerente de redes sociais, designer.",
        },
        {
          title: "Rode no plano que você já tem",
          text: "O Crewmark trabalha dentro do seu próprio Claude Code ou Codex. Veja os [preços](/pricing).",
        },
        {
          title: "Compare mais agentes",
          text: "Veja [agentes pessoais de IA comparados](/personal-agent) e [o que é um superagent](/blog/superagent).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Criar um Base44 Superagent" },
  mid: {
    title: "Quer um agente com um trabalho, sem comprar créditos?",
    text: "Os funcionários do Crewmark rodam dentro do plano do Claude Code ou do Codex que você já paga e trabalham por um quadro compartilhado.",
    button: "Começar",
  },
  faq: {
    title: "Perguntas frequentes",
    items: [
      {
        q: "O que é um Base44 Superagent?",
        a: "O agente pessoal de IA da Base44 que executa tarefas para você 24/7. Você conversa com ele no navegador ou no WhatsApp, Telegram, Slack e outros apps; ele trabalha nas ferramentas que você conecta e roda workflows agendados ou por gatilho.",
      },
      {
        q: "Quanto custa um Base44 Superagent?",
        a: "Ele usa os créditos do seu plano da Base44. Com cobrança anual, os planos são Starter $16, Builder $40, Pro $80 e Elite $160 por mês, com 100 a 1.200 créditos de mensagem; o plano Free tem 25 créditos de mensagem por mês.",
      },
      {
        q: "Como funcionam os créditos do Base44 Superagent?",
        a: "Cada mensagem que ele processa e cada execução de workflow consomem créditos de mensagem; ações como geração de imagens e processamento de arquivos consomem créditos de integração. Os créditos zeram em um calendário, os não usados expiram, e os workflows param de rodar enquanto você estiver sem créditos.",
      },
      {
        q: "Como conecto um Base44 Superagent ao WhatsApp?",
        a: "Ao criá-lo, escolha WhatsApp e escaneie o QR code ou abra o WhatsApp pelo botão, depois envie a mensagem já preenchida. Você também pode conectar um número de WhatsApp para ele trabalhar em grupos.",
      },
      {
        q: "O que um Base44 Superagent consegue fazer?",
        a: "Fazer a triagem da sua caixa de entrada durante a noite, dar seguimento a leads, acompanhar preços de passagens, reservar um restaurante e avisar um amigo, publicar números semanais no Slack, reorganizar a sua agenda, tocar o grupo de WhatsApp de um projeto e, com um número de telefone, fazer ligações agendadas.",
      },
      {
        q: "Quais são as alternativas aos Base44 Superagents?",
        a: "Meta Muse (grátis nos EUA), Grok Bot (para equipes de agentes no trabalho), ChatGPT dots e Claude Duet (com planos Pro), Manus Cue e os open source OpenClaw ou Hermes Agent. Veja [agentes pessoais de IA comparados](/personal-agent).",
      },
    ],
  },
  cta: {
    title: "Tarefas avulsas para um Superagent. Um trabalho para um funcionário de IA.",
    text: "O Crewmark transforma sessões do Claude Code e do Codex em funcionários de IA com cargos, metas, horário de trabalho e heartbeat.",
    button: "Começar",
  },
  checked: "Conferido na documentação da Base44, na página de Superagents e na página de preços em 10 de novembro de 2026.",
  disclaimer:
    "O Crewmark é um produto independente, sem vínculo com a Base44, a Wix, a Meta, a xAI ou a Anthropic e sem endosso delas. Os nomes dos produtos são marcas dos respectivos titulares.",
};
