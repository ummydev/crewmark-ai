import type { GuideCopy } from "@/components/landing/guide-article";

// Brazilian Portuguese translation of /alternatives/lindy; the English master is
// src/content/product-alternatives/lindy.ts.

export const copy: GuideCopy = {
  meta: {
    title: "Lindy AI: alternativas grátis e open source em 2026",
    description:
      "Alternativas à Lindy AI comparadas, inclusive grátis: Grok Bot, Claude Cowork, Copilot Cowork, ChatGPT Work, Relevance AI e os open source OpenWorker e OpenBot.",
  },
  breadcrumb: "Alternativas à Lindy",
  parent: { name: "Comparações", href: "/compare" },
  hero: {
    kicker: "Alternativas · Lindy",
    title: "Alternativas à Lindy AI: colegas de trabalho de IA hospedados, plataformas de agentes e assistentes open source",
    lead: "A Lindy é uma assistente de IA hospedada que trabalha na sua caixa de entrada, agenda, reuniões e Slack, roda rotinas recorrentes e pergunta antes de qualquer coisa com impacto externo. Ela é cobrada em créditos: você começa com $50 em créditos grátis que duram 7 dias e depois paga a partir de $29.99 por mês por usuário ativo por 3.000 créditos. Os créditos mensais não se acumulam para o mês seguinte, e todo usuário ativo é cobrado, inclusive quem só @menciona a Lindy no Slack. Veja 8 alternativas, hospedadas e open source, com quanto custa cada uma.",
    cta: "Começar",
    secondary: "Comparar",
    secondaryHref: "#compare",
  },
  sections: [
    {
      kind: "table",
      id: "compare",
      title: "Alternativas à Lindy em resumo",
      text: [
        "Informações das páginas, da documentação ou do GitHub de cada fornecedor, verificadas em 13 de novembro de 2026. Preços em dólares americanos. Não é um ranking.",
      ],
      headers: ["Alternativa", "O que é", "Open source", "Preço a partir de"],
      rows: [
        [
          "[Lindy](/personal-agent/lindy) (para referência)",
          "Uma assistente de IA hospedada para caixa de entrada, agenda, reuniões e Slack",
          "Não",
          "$50 em créditos grátis por 7 dias; depois, a partir de $29.99/mês por usuário ativo por 3.000 créditos",
        ],
        [
          "[Grok Bot](/alternatives/grok-bot)",
          "Os colegas de equipe de IA hospedados da xAI, cada um com o próprio computador na nuvem",
          "Não",
          "Premium $30/mês",
        ],
        [
          "[Claude Cowork](/alternatives/claude-cowork)",
          "O agente da Anthropic para trabalho intelectual que não é de programação, nos apps do Claude",
          "Não",
          "Claude Pro $20/mês, ou $17/mês no plano anual",
        ],
        [
          "[Copilot Cowork](/personal-agent/copilot-cowork)",
          "O agente da Microsoft para tarefas de várias etapas no Microsoft 365",
          "Não",
          "Licença do Microsoft 365 Copilot mais Copilot Credits a $0.01 cada",
        ],
        [
          "[ChatGPT Work](/personal-agent/chatgpt-work)",
          "O modo Work da OpenAI no ChatGPT, para tarefas que terminam em algo para revisar",
          "Não",
          "Free ($0) e Go ($8/mês): limitado, só no app para desktop; Plus $20/mês",
        ],
        [
          "[Relevance AI](/alternatives/relevance-ai)",
          "Uma plataforma low-code hospedada para agentes de IA e times multiagente",
          "Não",
          "Só Enterprise, via time de vendas; plano Free descontinuado",
        ],
        [
          "[OpenWorker](/personal-agent/openworker)",
          "Um app desktop de colega de trabalho de IA que roda na sua máquina",
          "Sim, MIT",
          "Sem preço publicado; a sua própria chave de modelo ou um modelo local",
        ],
        [
          "[OpenBot](/personal-agent/openbot)",
          "O workspace auto-hospedável da CopilotKit para colegas de trabalho de IA",
          "Sim, MIT (usa o CopilotKit Intelligence, com licença à parte)",
          "Gratuito para projetos pessoais; Business até $29 por usuário ativo por mês",
        ],
        [
          "[Crewmark](/ai-employees)",
          "Um quadro de issues para funcionários de IA que rodam como Claude Code ou Codex no seu computador",
          "Sim, GPL-3.0",
          "Grátis (1 projeto, até 3 funcionários de IA); Pro $5/mês em breve",
        ],
      ],
    },
    {
      kind: "text",
      id: "hosted",
      title: "Colegas de trabalho de IA hospedados da xAI, da Anthropic, da Microsoft e da OpenAI",
      text: [
        "Como a Lindy, estes rodam na nuvem do fornecedor e recebem trabalho na conversa. Mais deles lado a lado em [ferramentas de colegas de trabalho de IA](/blog/ai-coworker).",
      ],
      points: [
        "[Grok Bot](/alternatives/grok-bot) (xAI): Bots que ganham, cada um, um computador próprio na nuvem, entram nas suas ferramentas, trabalham no Slack e no Microsoft Teams, rodam rotinas em um agendamento e trocam mensagens entre si. Entre os Bots prontos estão Sales Outbound, Talent Scout e Chief of Staff. Ele está incluído no Premium ($30/mês), no Super ($100/mês) e no Ultra ($200/mês), com cobrança mensal e uso extra cobrado pelo custo dos tokens. Escolha-o se você quer vários Bots com trabalhos separados, inclusive no Microsoft Teams. Veja o [guia do Grok Bot](/personal-agent/grok-bot).",
        "[Claude Cowork](/personal-agent/claude-cowork) (Anthropic): você descreve um resultado e o Claude cuida de pesquisa, documentos, planilhas com fórmulas que funcionam e apresentações nos seus arquivos, em apps conectados como Gmail e Slack e em um navegador. As tarefas agendadas rodam a cada hora, diariamente, semanalmente ou em dias úteis, na nuvem. Ele vem com os planos pagos do Claude: Pro $20/mês ($17/mês no plano anual), Max $100, Ultra $200, além de licenças Team e Enterprise. Escolha-o se você quer receber arquivos prontos, e não ajuda com a caixa de entrada.",
        "[Copilot Cowork](/personal-agent/copilot-cowork) (Microsoft): envia e-mails, agenda reuniões, edita arquivos do Word, Excel e PowerPoint e posta no Teams, com uma caixa de aprovação antes de ações sensíveis. Ele exige uma licença do Microsoft 365 Copilot, e o uso é cobrado em Copilot Credits a $0.01 cada. Escolha-o se a sua empresa funciona no Outlook e no Teams.",
        "[ChatGPT Work](/personal-agent/chatgpt-work) (OpenAI): um modo Work no ChatGPT para tarefas que terminam em algo para revisar, com plugins para Slack, Google Drive, SharePoint, e-mail, agendas e CRMs, tarefas agendadas e gatilhos do Gmail, do Slack ou do GitHub nos planos elegíveis. Free e Go têm acesso limitado no app para desktop; o acesso completo começa no Plus, a $20/mês. Escolha-o se você já usa o ChatGPT.",
      ],
    },
    {
      kind: "text",
      id: "platform",
      title: "Uma plataforma de agentes para equipes: Relevance AI",
      points: [
        "[Relevance AI](/alternatives/relevance-ai): uma plataforma low-code hospedada em que você cria agentes especialistas com instruções, ferramentas e conhecimento próprios e os conecta em times multiagente, que ela chama de AI Workforce, para trabalho de vendas, suporte e operações. Em 13 de novembro de 2026, a página de preços dela lista só o Enterprise, via time de vendas, e a documentação diz que o plano Free foi descontinuado. Escolha-a se a sua empresa quer vários agentes no-code e uma equipe de implantação que trabalha junto com o seu time. Veja [Relevance AI vs Lindy](/compare/relevance-ai-vs-lindy) e [preços da Relevance AI](/pricing/relevance-ai).",
      ],
    },
    {
      kind: "text",
      id: "open-source",
      title: "Alternativas open source à Lindy",
      text: [
        "Os dois rodam no seu próprio computador ou servidor com o modelo que você escolher, e nenhum cobra em créditos: você paga o seu provedor de modelos diretamente.",
      ],
      points: [
        "[OpenWorker](/personal-agent/openworker): um app desktop de colega de trabalho de IA com licença MIT para macOS e Windows, em beta aberto. Ele trabalha com GitHub, Slack, e-mail e agendas; quando você o @menciona no Slack, a tarefa roda no seu desktop e a resposta volta na thread. Você pode agendar resumos matinais e relatórios semanais; as execuções agendadas nunca aprovam as próprias ações, e os pedidos delas esperam em uma caixa de entrada. Use uma chave da OpenAI, da Anthropic, do Google Gemini ou do OpenRouter, ou um modelo local. Escolha-o se você quer uma ajuda de escritório no estilo da Lindy, com as suas chaves guardadas na sua máquina.",
        "[OpenBot](/personal-agent/openbot) (CopilotKit): um workspace auto-hospedável em que cada Bot tem o próprio navegador, arquivos, ferramentas, rotinas, memória e aprovações. Ele roda como app desktop para Mac e Windows ou em Kubernetes para uma equipe, com interfaces para Slack e Teams, entre outras (algumas em acesso antecipado). Gratuito para projetos pessoais; o OpenBot for Business custa até $29 por usuário ativo por mês, mais 5% do gasto mensal com modelos acima de $5.000. Escolha-o se você quer hospedar colegas de trabalho de IA para uma equipe na sua própria infraestrutura.",
      ],
    },
    {
      kind: "steps",
      id: "how-to-choose",
      title: "Como escolher uma alternativa à Lindy",
      steps: [
        {
          title: "Conte quem vai usar",
          text: "A Lindy cobra cada usuário ativo, inclusive quem só a @menciona no Slack. O Grok Bot lista planos individuais a partir de $30/mês; o Copilot Cowork exige uma licença do Microsoft 365 Copilot e cobra por Copilot Credit; o OpenWorker não informa preço e o OpenBot é gratuito para projetos pessoais.",
        },
        {
          title: "Decida como quer pagar pelo uso",
          text: "Os créditos mensais da Lindy não se acumulam, e as recargas custam $10 por 1.000 créditos. O Grok Bot e os planos do Claude e do ChatGPT são assinaturas com limites de uso. Com o OpenWorker e o OpenBot, você paga o seu provedor de modelos diretamente.",
        },
        {
          title: "Combine com onde o seu trabalho acontece",
          text: "Slack e Microsoft Teams: Grok Bot. Microsoft 365: Copilot Cowork. Documentos e planilhas para entregar prontos: Claude Cowork ou ChatGPT Work. Muitos agentes para vendas ou suporte: Relevance AI.",
        },
        {
          title: "Escolha entre hospedado e auto-hospedado",
          text: "Lindy, Grok Bot, Claude Cowork, Copilot Cowork, ChatGPT Work e Relevance AI são hospedados. O OpenWorker roda no seu desktop, e o OpenBot roda no seu notebook ou no seu próprio cluster Kubernetes.",
        },
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Com o Crewmark",
      title: "Crewmark: funcionários de IA no Claude Code ou no Codex que você já paga",
      text: [
        "O Crewmark não é uma assistente de caixa de entrada como a Lindy. É um gerenciador de issues para um time de funcionários de IA: cada um é uma conversa do Claude Code ou do Codex no seu próprio computador, com um cargo, metas e horário de trabalho. Ele acorda com um heartbeat, pega issues de um quadro compartilhado e mantém o status delas atualizado. O Crewmark não cobra pelo uso: os agentes rodam na assinatura do Claude ou do ChatGPT que você já paga, e o seu computador precisa ficar ligado para os heartbeats.",
        "O plano Free cobre 1 projeto e até 3 funcionários de IA. Pro ($5/mês) e Team ($10/mês) chegam em breve; a cobrança ainda não foi implementada, então qualquer conta pode usar o Crewmark de graça até lá. Ele é open source (GPL-3.0). Detalhes em [preços do Crewmark](/pricing).",
      ],
      steps: [
        {
          title: "Escolha um cargo",
          text: "Dê a cada funcionário um cargo, metas e projetos, por exemplo especialista em SEO ou analista de dados. Veja os [cargos de funcionários de IA](/ai-employees).",
        },
        {
          title: "Coloque o trabalho recorrente no quadro",
          text: "Faça issues se repetirem diariamente, semanalmente ou mensalmente; quando uma vence, ela é reaberta e o funcionário responsável é avisado. Um agente que precisa de uma revisão ou de uma permissão marca a issue como Needs action e espera.",
        },
        {
          title: "Defina o horário de trabalho",
          text: "O heartbeat acorda cada funcionário em intervalos de 15 minutos a 24 horas durante o horário de trabalho dele. Trabalhos e como configurá-los estão em [casos de uso do Claude Code](/use-cases/claude-code) e [casos de uso do Codex](/use-cases/codex).",
        },
      ],
    },
  ],
  mid: {
    title: "Prefere não pagar por crédito?",
    text: "O Crewmark roda funcionários de IA na assinatura do Claude Code ou do Codex que você já tem. Grátis para até 3 funcionários.",
    button: "Começar",
  },
  faq: {
    title: "Perguntas frequentes sobre alternativas à Lindy",
    items: [
      {
        q: "Existe alternativa grátis à Lindy?",
        a: "Sim. O ChatGPT Free ($0) inclui acesso limitado ao ChatGPT Work no app para desktop. O OpenWorker não informa preço e roda com a sua própria chave de modelo ou um modelo local, e o OpenBot é gratuito para projetos pessoais. O plano Free do Crewmark cobre 1 projeto e até 3 funcionários de IA. A própria Lindy começa com $50 em créditos que duram 7 dias, uma vez por membro da equipe.",
      },
      {
        q: "Existe alternativa open source à Lindy?",
        a: "O OpenWorker (MIT) e o OpenBot (um template de aplicação MIT sobre o CopilotKit Intelligence, que tem licença à parte) são open source, assim como o Crewmark (GPL-3.0). Lindy, Grok Bot, Claude Cowork, Copilot Cowork, ChatGPT Work e Relevance AI não são.",
      },
      {
        q: "Lindy vs Relevance AI: qual é a diferença?",
        a: "A Lindy é uma única assistente hospedada para caixa de entrada, agenda, reuniões e Slack, cobrada por usuário ativo em créditos. A Relevance AI é uma plataforma low-code para criar muitos agentes especialistas e conectá-los em uma Workforce; a página de preços dela lista só o Enterprise, via time de vendas. Veja [Relevance AI vs Lindy](/compare/relevance-ai-vs-lindy).",
      },
      {
        q: "Qual alternativa à Lindy funciona no Slack?",
        a: "O Grok Bot trabalha no Slack e no Microsoft Teams como um colega. Com o OpenWorker, você o @menciona no Slack e ele responde na thread. O OpenBot tem uma interface para Slack (algumas interfaces estão em acesso antecipado), o ChatGPT Work tem um plugin do Slack e gatilhos do Slack nos planos elegíveis, e o Claude Cowork tem um conector do Slack.",
      },
      {
        q: "Existe alternativa à Lindy que rode no meu próprio computador?",
        a: "O OpenWorker roda o loop do agente na sua máquina e guarda ali as conversas e as chaves de modelo. O OpenBot roda como app desktop para Mac e Windows, ou no seu próprio cluster Kubernetes. Os agentes do Crewmark rodam no seu computador, dentro do Claude Code ou do Codex.",
      },
      {
        q: "Por que as pessoas procuram alternativas à Lindy?",
        a: "Pelos limites que a própria Lindy informa: os créditos mensais não se acumulam, e quando acabam a Lindy pausa as ações que usam créditos até o próximo ciclo ou uma recarga ($10 por 1.000 créditos). Todo usuário ativo é cobrado, inclusive quem só a @menciona no Slack. Os créditos grátis duram 7 dias, e o uso da Lindy no Microsoft Teams ainda está para chegar.",
      },
    ],
  },
  cta: {
    title: "Dê um emprego aos seus agentes, não um saldo de créditos.",
    text: "O Crewmark transforma sessões do Claude Code e do Codex em funcionários de IA com cargos, metas, horário de trabalho e um heartbeat.",
    button: "Começar",
  },
  checked: "Conferido nas páginas, na documentação, nos preços e no GitHub de cada produto em 13 de novembro de 2026.",
  disclaimer:
    "O Crewmark é um produto independente, sem vínculo com Lindy, xAI, Anthropic, Microsoft, OpenAI, Relevance AI, CopilotKit nem com os criadores do OpenWorker, e sem endosso deles. Os nomes de produtos são marcas de seus respectivos titulares. As informações sobre outros produtos vêm das páginas públicas deles e podem ter mudado desde então.",
};
