import type { GuideCopy } from "@/components/landing/guide-article";

// pt-BR translation of /personal-agent/gemini-spark; the English master is
// src/content/personal-agents/gemini-spark.ts.

const help = "https://support.google.com/gemini/answer/17094507";

const prompts = `Todo mês, no dia 3, confira as faturas do meu cartão de crédito no Gmail
em busca de cobranças de assinatura novas ou escondidas e me mande uma lista.

Acompanhe a caixa de entrada da escola do meu filho em busca de prazos e mande um resumo diário
para mim e para o meu parceiro às 19h.

Resuma as notas de reunião desta semana, do e-mail e do chat, em um Google Doc
e rascunhe o e-mail de acompanhamento. Não envie.`;

export const copy: GuideCopy = {
  meta: {
    title: "Gemini Spark (agora tarefas): como usar, planos e países",
    description:
      "O que aconteceu com o Gemini Spark: o agente pessoal 24/7 do Google agora se chama tarefas no app Gemini. Quem pode usar (Google AI Pro ou Ultra, em quais países), como ativar, agendamentos, apps conectados, limites e o app para Mac.",
  },
  breadcrumb: "Gemini Spark",
  parent: { name: "Agentes pessoais", href: "/personal-agent" },
  hero: {
    kicker: "Agentes pessoais · Gemini Spark",
    title: "Gemini Spark, agora tarefas no Gemini: como usar o agente pessoal do Google",
    lead: "O Google anunciou o Gemini Spark em 19 de maio de 2026 como “um agente pessoal de IA 24/7 feito para gerenciar tarefas de forma proativa”: ele trabalha na nuvem, continua com o notebook fechado ou o celular bloqueado e usa o Gmail, o Docs e os seus outros apps do Google. O Spark do beta agora se chama tarefas no app Gemini, e é por isso que o botão Spark parece ter sumido. Este guia mostra quem pode usar, como ativar, agendamentos, apps conectados, limites e no que ele se sai bem.",
    cta: "Começar",
    secondary: "Ativar",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "O que aconteceu com o Gemini Spark?",
      text: [
        "Nada foi desligado. O artigo de ajuda do Google agora chama o recurso de tarefas e observa que ele “se chamava Spark no beta”. Você inicia uma tarefa com a opção Task abaixo da caixa de texto do Gemini, e as suas tarefas e agendamentos existentes continuam lá.",
      ],
      points: [
        "O que é: um agente que roda no Gemini na nuvem, construído no lançamento sobre o Gemini 3.5 e o harness Antigravity do Google.",
        "O que faz: limpa a sua caixa de entrada, acompanha preços de voos e hotéis, pesquisa com fontes citadas, navega para comprar ou reservar e cria PDFs, Docs, Sheets e Slides.",
        "Quando trabalha: em segundo plano, com agendamento ou quando algo acontece, e pergunta antes de ações de alto risco, como gastar dinheiro ou enviar e-mails.",
      ],
    },
    {
      kind: "table",
      id: "who",
      title: "Quem pode usar as tarefas do Gemini (Spark)",
      text: ["Segundo a Ajuda dos Apps do Gemini em 10 de novembro de 2026."],
      headers: ["Requisito", "Detalhes"],
      rows: [
        ["Plano", "Google AI Pro ou Ultra (o Google AI Pro custa $19.99 por mês nos EUA)"],
        ["Conta", "Uma Conta do Google pessoal, de 18 anos ou mais; contas de trabalho e de escola ainda não são aceitas"],
        ["Países", "Onde os Apps do Gemini estiverem disponíveis, exceto o Espaço Econômico Europeu, a Suíça, o Reino Unido e a Nigéria"],
        ["Configuração", "A Atividade (Keep Activity) precisa estar ligada"],
        ["Onde", "O app Gemini para celular, o app Gemini para Mac e o app web em gemini.google.com"],
        ["Plano gratuito", "Não incluído"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Como usar as tarefas do Gemini",
      steps: [
        {
          title: "Ative o modo de tarefas",
          text: "Em gemini.google.com, clique em Task abaixo da caixa de texto e siga as etapas na tela. As tarefas também funcionam no app Gemini para celular e no app Gemini para Mac.",
        },
        {
          title: "Conecte os apps de que ele precisa",
          text: "As tarefas podem usar Gmail, Calendar, Docs, Drive, Keep, Sheets, Slides e Tasks, Google Search, Flights, Hotels e Maps, Contacts, Photos e YouTube, além de apps personalizados e de terceiros. Os parceiros de lançamento do Google incluíam Canva, OpenTable e Instacart.",
        },
        {
          title: "Descreva o trabalho e quando fazê-lo",
          text: "Peça um trabalho avulso ou defina um agendamento: em um horário fixo ou quando algo acontecer. Abra a conversa da tarefa e o painel de trabalho dela para conferir permissões e agendamentos.",
          code: prompts,
        },
        {
          title: "Aprove as etapas importantes",
          text: "O Gemini pergunta antes de navegar na web para uma tarefa (depois que você dá permissão ao Chrome uma vez) e antes de enviar mensagens, fazer compras, enviar formulários ou entrar com o Google. Ele também para antes de compartilhar informações sensíveis, como dados de saúde, financeiros ou de documentos, mesmo que você tenha escolhido “Always allow”.",
        },
      ],
      source: { label: "Fonte: Ajuda dos Apps do Gemini sobre tarefas", href: help },
    },
    {
      kind: "text",
      id: "limits",
      title: "Limites, agendamentos e como desativar",
      points: [
        "Até 15 tarefas podem rodar ao mesmo tempo; um agendamento não roda se 15 já estiverem rodando.",
        "A ajuda do Google diz que os agendamentos não rodam enquanto o modo de tarefas estiver desligado ou enquanto o seu dispositivo estiver desligado. Pause ou retome agendamentos pela conversa da tarefa ou pela página Scheduled no app web.",
        "Os limites de uso são baseados em computação e maiores no Ultra do que no Pro.",
        "A navegação automática do Chrome funciona só no desktop.",
        "Para desativar, na web vá em Settings > Task settings (“Use task mode to hand off work”), ou no app para Mac em Gemini > Settings > Tasks. Isso apaga o navegador remoto e os dados de código; as suas tarefas, agendamentos e arquivos são mantidos, mas pausados.",
      ],
    },
    {
      kind: "table",
      id: "use-cases",
      title: "Casos de uso das tarefas do Gemini",
      text: ["Os três primeiros são exemplos de lançamento do próprio Google."],
      headers: ["Caso de uso", "O que faz"],
      rows: [
        ["Checagem de assinaturas", "Varre as faturas mensais do cartão em busca de cobranças de assinatura novas ou escondidas"],
        ["Resumo da caixa de entrada da escola", "Fica de olho em prazos e manda um resumo diário para você e o seu parceiro"],
        ["Acompanhamento de reunião", "Resume notas do e-mail e do chat em um Doc e rascunha o acompanhamento"],
        ["Limpeza da caixa de entrada", "Arquiva newsletters e cancela a sua inscrição em listas"],
        ["Acompanhamento de preços", "Acompanha preços de voos e hotéis e avisa quando caem"],
        ["Relatório de pesquisa", "Pesquisa um tema com fontes citadas e entrega como arquivo"],
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Tarefas do Gemini vs Meta Muse e Grok Bot",
      headers: ["", "Tarefas do Gemini (Spark)", "Meta Muse", "Grok Bot"],
      rows: [
        ["Feito por", "Google", "Meta", "xAI"],
        ["Forma mais barata de entrar", "Google AI Pro", "Grátis nos EUA, limite semanal", "Crédito de teste grátis; X Premium ou acima"],
        ["Mais forte com", "Gmail, Docs e os apps do Google", "Tarefas do dia a dia, WhatsApp", "Apps de trabalho, equipes de Bots"],
        ["Agendamentos", "Em um horário ou a partir de um evento", "Lembretes e tarefas recorrentes", "Rotinas com agendamento ou gatilho"],
        ["Indisponível em", "EEE, Suíça, Reino Unido, Nigéria", "Fora dos EUA (testes limitados)", "-"],
        ["Guia", "Esta página", "[Meta Muse](/personal-agent/meta-muse)", "[Grok Bot](/personal-agent/grok-bot)"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Com o Crewmark",
      title: "Um agente agendado para o seu trabalho, não só para a sua caixa de entrada",
      text: [
        "As tarefas do Gemini cuidam dos apps do Google de uma pessoa. O Crewmark transforma o seu próprio Claude Code ou Codex em um funcionário de IA com um cargo, uma meta em números, horário de trabalho e um heartbeat, que pega a próxima issue de um quadro compartilhado e presta contas.",
      ],
      steps: [
        {
          title: "Escolha um cargo",
          text: "Comece por um [cargo de funcionário de IA](/ai-employees), como especialista em SEO ou engenheiro de software.",
        },
        {
          title: "Defina horário e um heartbeat",
          text: "Ele acorda a cada 15 a 240 minutos durante o horário que você escolher. Veja [tarefas agendadas no Codex](/proactive-codex).",
        },
        {
          title: "Compare agentes pessoais",
          text: "Veja [agentes pessoais de IA comparados](/personal-agent).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Usar as tarefas do Gemini" },
  mid: {
    title: "Quer um agente que dê conta do backlog da sua equipe?",
    text: "Os funcionários do Crewmark acordam com um heartbeat e pegam a próxima issue de um quadro, no plano do Claude Code ou do Codex que você tem.",
    button: "Começar",
  },
  faq: {
    title: "Perguntas frequentes",
    items: [
      {
        q: "O que aconteceu com o Gemini Spark?",
        a: "O Google mudou o nome. O Spark do beta agora se chama tarefas no app Gemini: escolha Task abaixo da caixa de texto. As suas tarefas e agendamentos existentes continuam valendo.",
      },
      {
        q: "O Gemini Spark é grátis?",
        a: "Não. As tarefas exigem uma assinatura do Google AI Pro ou Ultra em uma Conta do Google pessoal; o Google AI Pro custa $19.99 por mês nos EUA.",
      },
      {
        q: "O Gemini Spark está disponível no Reino Unido ou na Europa?",
        a: "Ainda não. A ajuda do Google lista o recurso onde os Apps do Gemini estão disponíveis, exceto o Espaço Econômico Europeu, a Suíça, o Reino Unido e a Nigéria.",
      },
      {
        q: "Existe um app do Gemini Spark para Mac?",
        a: "Sim, as tarefas funcionam no app Gemini para Mac, além do app para celular e de gemini.google.com.",
      },
      {
        q: "As tarefas do Gemini rodam com agendamento?",
        a: "Sim, em um horário fixo ou quando algo acontece. Até 15 tarefas podem rodar ao mesmo tempo, e os agendamentos ficam pausados enquanto o modo de tarefas está desligado.",
      },
      {
        q: "Gemini Spark vs Meta Muse: qual devo usar?",
        a: "Se a sua vida gira em torno do Gmail e dos apps do Google e você paga o Google AI Pro, as tarefas do Gemini. Se você está nos EUA e quer algo grátis para começar, o Meta Muse.",
      },
    ],
  },
  cta: {
    title: "Agentes pessoais para a sua caixa de entrada. Funcionários de IA para o seu backlog.",
    text: "O Crewmark transforma sessões do Claude Code e do Codex em funcionários de IA com cargos, metas, horário de trabalho e heartbeat.",
    button: "Começar",
  },
  checked: "Conferido no anúncio do Gemini Spark pelo Google e na Ajuda dos Apps do Gemini em 10 de novembro de 2026.",
  disclaimer:
    "O Crewmark é um produto independente, sem vínculo com o Google, a Meta ou a xAI e sem endosso deles. Gemini e Google são marcas do Google.",
};
