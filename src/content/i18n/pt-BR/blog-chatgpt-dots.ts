import type { GuideCopy } from "@/components/landing/guide-article";

// Brazilian Portuguese translation of /blog/chatgpt-dots; the English master is src/content/blog/chatgpt-dots.ts.

const announcement = "https://openai.com/index/introducing-dots/";

export const copy: GuideCopy = {
  meta: {
    title: "ChatGPT dots: o que são, como usar e preço | Crewmark",
    description:
      "Os dots do ChatGPT são os agentes sempre ativos da OpenAI. O que fazem, quais planos incluem, como configurar, as regras, os limites e as alternativas.",
  },
  breadcrumb: "ChatGPT dots",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-02" },
  hero: {
    kicker: "Blog · ChatGPT",
    title: "ChatGPT dots: o que são e como usar",
    lead: "Os dots são agentes sempre ativos dentro do ChatGPT, anunciados no OpenAI DevDay em 29 de setembro de 2026. Cada dot tem o próprio computador na nuvem e o próprio navegador, se conecta aos seus apps, aprende com o seu feedback e continua trabalhando nas suas metas enquanto você está fora. Este guia mostra quem pode ter um, quanto custa, como configurar, as regras que o mantêm sob controle e o que ele ainda não faz.",
    cta: "Acesso antecipado",
    secondary: "Ir para a configuração",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "O que são os dots do ChatGPT",
      text: [
        "A OpenAI descreve os dots como “agentes sempre ativos, extremamente capazes, feitos para cuidar de tudo”. Um dot roda no GPT-6 Astra e trabalha no próprio computador na nuvem, com o próprio navegador, usando os apps que você conectar. Você conversa com ele no ChatGPT no desktop, na web ou no celular, no Slack e no Teams, por voz no app para celular e, em um beta nos EUA para o Pro, por mensagem de texto.",
      ],
      points: [
        "Ele trabalha quando você não está: com acesso somente leitura aos seus apps conectados, procura formas de ajudar e executa lembretes agendados e verificações recorrentes.",
        "Ele toca vários projetos ao mesmo tempo e te atualiza com progresso, perguntas e decisões que dependem de você.",
        "Ele lembra: começa com as suas memórias do ChatGPT e aprende as suas preferências conforme vocês trabalham juntos.",
        "Ele escreve código delegando: um dot pode iniciar tarefas do Codex, que contam para os seus limites do Codex.",
        "Você pode acompanhar: abra o computador do dot a qualquer momento, assuma o controle e devolva quando quiser.",
      ],
    },
    {
      kind: "table",
      title: "Quem pode usar dots e quanto custam",
      text: [
        "Seu primeiro dot está incluído nos planos abaixo, sem custo extra. No primeiro mês após o lançamento, o uso de dots não contava para os limites do plano; a OpenAI diz que vai divulgar os termos de uso por plano depois disso, e ainda não tinha divulgado quando verificamos. A compra de mais dots ou de mais trabalho por dot foi anunciada, ainda sem preços.",
      ],
      headers: ["Plano", "Dots", "Observações"],
      rows: [
        ["Free, Go, Plus, Business", "Não", "Não incluído"],
        ["Pro (Pro 100, Pro 200, Pro 500)", "Sim, em liberação", "Não disponível no EEE, na Suíça nem no Reino Unido"],
        ["Business Premium", "Sim, em liberação", "Regiões suportadas, sujeito à elegibilidade do workspace"],
        ["Enterprise, Edu, Healthcare", "Beta", "Desativado até um admin do workspace ativar"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Como configurar seu primeiro dot",
      text: ["Você precisa ter 18 anos ou mais. A liberação é gradual, então o acesso pode levar alguns dias para chegar à sua conta."],
      steps: [
        {
          title: "Abra o dots",
          text: "Acesse chatgpt.com/dots, ou abra o dots no app do ChatGPT para desktop, na web no desktop ou no app para celular no iOS ou Android.",
        },
        {
          title: "Crie e dê um nome ao seu dot",
          text: "Siga o onboarding: dê um nome a ele, que vira o seu identificador (@yourname-agentname), e escolha um avatar. Você pode mudar os dois depois, no perfil dele.",
        },
        {
          title: "Conecte seus apps",
          text: "No perfil do dot, abra Customize e depois Plugins, escolha um app e revise as permissões que ele pede. Conecte o Slack pelo desktop. Um dot pode usar uma conta de e-mail pessoal que você conectar, mas ainda não pode ter o próprio endereço de e-mail.",
        },
        {
          title: "Defina regras personalizadas",
          text: "Em Customize, Custom rules, escolha para cada tipo de ação se o dot deve agir sem perguntar, agir só se houver aprovação prévia no seu prompt, perguntar antes de agir ou passar para você.",
        },
        {
          title: "Dê uma meta a ele",
          text: "Descreva o resultado que você quer e compartilhe contexto; anexe arquivos com + e responda na thread para orientá-lo. Peça lembretes ou verificações recorrentes e gerencie tudo em Scheduled.",
        },
        {
          title: "Acompanhe, pause ou exclua",
          text: "O perfil mostra o trabalho In progress, Scheduled e Completed. Pause o dot pelo menu ••• quando precisar. Excluí-lo apaga as memórias e as tarefas agendadas dele, e isso não pode ser desfeito.",
        },
      ],
      source: { label: "Fonte: anúncio dos dots da OpenAI", href: announcement },
    },
    {
      kind: "text",
      title: "Segurança: o que um dot faz e não faz sozinho",
      points: [
        "Trocar uma senha ou enviar dinheiro sempre exige que você assuma o controle e faça isso por conta própria.",
        "Apagar dados permanentemente ou instalar software pode exigir a sua aprovação a cada vez.",
        "O Auto-review confere ações arriscadas, como para quem vai um e-mail, com base nas suas instruções e regras, e as suas regras personalizadas não conseguem desativá-lo.",
        "Um dot pode comprar com um cartão salvo no site de uma loja, mas só com a sua aprovação a cada vez ou com uma aprovação específica antecipada.",
        "O seu próprio computador fica separado, a menos que você o conecte com Allow access no app do ChatGPT para desktop; isso vem desativado por padrão.",
        "A OpenAI diz que as proteções contra prompt injection reduzem o risco, mas não o eliminam, e que algumas ações concluídas não podem ser desfeitas.",
      ],
    },
    {
      kind: "text",
      title: "O que os dots ainda não fazem",
      points: [
        "Você tem um dot principal; times de dots são descritos como um caminho futuro.",
        "Um dot não tem endereço de e-mail próprio, não pode te ligar e não funciona na web pelo celular.",
        "Não há webhooks nem gatilhos de eventos para iniciá-lo; ele trabalha a partir das suas mensagens, dos agendamentos dele e da própria pesquisa somente leitura.",
        "Você não pode ver, editar nem apagar memórias individuais; excluir o dot é a única forma de apagar o que ele aprendeu.",
        "Usuários do Plus não têm dots, e usuários do Pro no EEE, na Suíça e no Reino Unido também não.",
      ],
    },
    {
      kind: "table",
      title: "ChatGPT dots vs Grok Bot vs Crewmark",
      text: [
        "A xAI anunciou o Grok Bot em agosto de 2026 como “seu time de agentes sempre ativos”, com computador próprio. O Crewmark segue outro caminho: em vez de um novo agente na nuvem de alguém, ele transforma o agente de programação que você já usa em um funcionário na sua própria máquina.",
      ],
      headers: ["", "ChatGPT dots", "Grok Bot", "Crewmark"],
      rows: [
        ["Onde roda", "Computador na nuvem da OpenAI", "Computador próprio, segundo a xAI", "O seu computador, dentro do Claude Code ou do Codex"],
        ["Modelo", "GPT-6 Astra", "Grok", "O que o seu Claude Code ou Codex usar"],
        ["Quantos", "Um dot principal", "Vários, que podem trocar mensagens entre si", "Um funcionário por cargo, quantos você configurar"],
        ["O que inicia o trabalho", "Suas mensagens, agendamentos, pesquisa própria", "Aprende rotinas vendo você trabalhar", "Um heartbeat a cada 15–60 minutos no horário de trabalho"],
        ["Fila de trabalho", "Threads de conversa e Scheduled", "Não documentado", "Tarefas em um quadro kanban"],
        ["Meta", "Metas que você descreve", "Não documentado", "Um KPI em números, como +10% de cliques por mês"],
        ["Planos", "Pro, Business Premium, beta no Enterprise", "Planos SuperGrok e Cursor, beta", "Acesso antecipado; roda no seu plano atual do Claude ou do ChatGPT"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Com o Crewmark",
      title: "Já paga pelo Claude Code ou pelo Codex? Deixe-o sempre ativo",
      text: [
        "Se o seu trabalho contínuo está em um código ou em um site, você não precisa de um agente novo. O Crewmark dá à sessão do Claude Code ou do Codex que você já usa um cargo, uma meta e um horário de trabalho, e a acorda com um heartbeat para pegar a próxima tarefa de um quadro.",
      ],
      steps: [
        {
          title: "Transforme uma sessão em funcionário",
          text: "Escolha um cargo, como especialista em SEO ou engenheiro de software, escreva a meta dele como um número e rode o comando de configuração no Claude Code ou no Codex.",
        },
        {
          title: "Deixe o heartbeat mantê-lo trabalhando",
          text: "Durante o horário de trabalho, o funcionário acorda a cada 15, 30 ou 60 minutos na mesma conversa, então lembra o que fez; veja [como deixar o Claude Code proativo](/proactive-claude-code).",
        },
        {
          title: "Atribua tarefas e responda às mensagens dele",
          text: "Coloque o trabalho no quadro; o funcionário pega, comenta enquanto avança e te manda mensagem quando trava. Leia [o que é um funcionário de IA](/ai-employees).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Configurar seu primeiro dot do ChatGPT" },
  mid: {
    title: "Quer um agente sempre ativo para o seu código?",
    text: "O Crewmark mantém a sua sessão do Claude Code ou do Codex trabalhando com um heartbeat, no plano que você já paga.",
    button: "Acesso antecipado",
  },
  faq: {
    title: "Perguntas sobre ChatGPT dots",
    items: [
      {
        q: "O que são os dots do ChatGPT?",
        a: "Agentes sempre ativos no ChatGPT, anunciados em 29 de setembro de 2026. Cada dot roda no GPT-6 Astra com o próprio computador na nuvem e o próprio navegador, se conecta aos seus apps, aprende com o seu feedback e continua trabalhando nas suas metas.",
      },
      {
        q: "Quanto custam os dots do ChatGPT?",
        a: "Seu primeiro dot está incluído no Pro e no Business Premium sem custo extra. A OpenAI pretende vender mais dots e mais trabalho por dot, mas não divulgou preços nem os termos de uso para depois do mês de lançamento.",
      },
      {
        q: "Posso usar dots no ChatGPT Plus?",
        a: "Não. Os dots não estão incluídos no Free, Go, Plus nem no plano Business padrão. Eles estão sendo liberados para Pro e Business Premium, e estão em beta para Enterprise, Edu e Healthcare.",
      },
      {
        q: "Como usar um dot do ChatGPT?",
        a: "Abra chatgpt.com/dots, crie e dê um nome ao seu dot, conecte apps em Customize, defina regras personalizadas para o que ele pode fazer sem perguntar e depois dê uma meta a ele. Acompanhe o trabalho no perfil dele, em In progress, Scheduled e Completed.",
      },
      {
        q: "Qual a diferença entre ChatGPT dots e Grok Bot?",
        a: "Os dois são agentes sempre ativos com computador próprio. Um dot roda no GPT-6 Astra e você tem um no lançamento; o Grok Bot da xAI é um time de agentes que podem trocar mensagens entre si, em beta para o SuperGrok e alguns planos do Cursor.",
      },
      {
        q: "Os dots do ChatGPT escrevem código?",
        a: "Sim, delegando ao Codex: um dot pode iniciar tarefas do Codex na nuvem, ou tarefas locais do Codex se você conectar o seu computador, e elas contam para os seus limites do Codex.",
      },
    ],
  },
  cta: {
    title: "Deixe sempre ativo o agente que você já usa.",
    text: "O Crewmark transforma sessões do Claude Code e do Codex em funcionários de IA com cargos, metas, horário de trabalho e um heartbeat.",
    button: "Acesso antecipado",
  },
  checked:
    "Conferido com o anúncio, a central de ajuda, as notas de versão e a página de preços da OpenAI em 2 de novembro de 2026.",
  disclaimer:
    "O Crewmark é um produto independente, sem vínculo com a OpenAI, a xAI ou a Anthropic e sem endosso delas. ChatGPT é marca da OpenAI, Grok da xAI e Claude Code da Anthropic.",
};
