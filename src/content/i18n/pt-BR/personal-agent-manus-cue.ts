import type { GuideCopy } from "@/components/landing/guide-article";

// pt-BR translation of /personal-agent/manus-cue; the English master is
// src/content/personal-agents/manus-cue.ts.

const blog = "https://manus.im/blog/introducing-manus-2-0";

const prompts = `# Um agente para tarefas do dia a dia
Todo dia útil às 8h, confira a minha caixa de entrada em busca de qualquer coisa sobre a mudança e
me mande um resumo curto. Pergunte antes de responder a alguém.

# Uma pequena equipe com um objetivo (o próprio exemplo da Manus, como prompt)
Estamos planejando um offsite da equipe em março para 20 pessoas.
Um de vocês pesquisa locais perto de Lisboa, outro transforma isso em uma lista
de três opções, e outro rascunha uma apresentação com uma recomendação para eu decidir.`;

export const copy: GuideCopy = {
  meta: {
    title: "Manus Cue: código de convite, como usar e preços",
    description:
      "O Cue, da Manus, explicado: agentes pessoais com e-mail, número de telefone, carteira e computador próprios. Como conseguir acesso com um código de convite, como baixar, como usar agentes e chats em grupo, automações agendadas e quanto custa.",
  },
  breadcrumb: "Manus Cue",
  parent: { name: "Agentes pessoais", href: "/personal-agent" },
  hero: {
    kicker: "Agentes pessoais · Manus Cue",
    title: "Manus Cue: agentes pessoais com e-mail, telefone e carteira próprios",
    lead: "O Cue é um app independente da Manus para os seus agentes pessoais, lançado em acesso antecipado junto com o Manus 2.0 em 28 de setembro de 2026. O que o diferencia: cada agente ganha endereço de e-mail, número de telefone, carteira e computador próprios, então pode mandar mensagens para pessoas, atender as suas ligações e pagar dentro de um orçamento que você define. Este guia mostra como entrar com um código de convite, como baixar, como usar um agente ou uma equipe, automações agendadas, quanto custa e as questões em aberto.",
    cta: "Começar",
    secondary: "Conseguir acesso",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "O que é o Manus Cue",
      text: [
        "A Manus chama o Cue de “um novo app independente para os seus agentes pessoais, no celular e no desktop”. Ele foi construído sobre a mesma infraestrutura da Manus, mas é um app separado, não um modo da Manus.",
      ],
      points: [
        "Identidade própria: cada agente tem endereço de e-mail, número de telefone, carteira e computador.",
        "Ligações: um agente pode atender as suas ligações e deixar um resumo para você no Cue.",
        "Pagamentos: os agentes podem pagar dentro de um orçamento que você define.",
        "Equipes: vários agentes podem dividir um chat em grupo e um objetivo comum, passando trabalho uns para os outros enquanto você define a direção e dá a palavra final.",
        "No mundo real: em um restaurante, escaneie um QR code para o seu agente pedir por você ou guardar o seu lugar na fila.",
        "Um assistente só também funciona: mantenha um único agente para tarefas, lembretes e pesquisa.",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Como conseguir o Manus Cue",
      steps: [
        {
          title: "Consiga um código de convite",
          text: "O Cue está em acesso antecipado e exige um código de convite. No lançamento, a Manus ofereceu o código MEETCUE a um número limitado de usuários, por ordem de chegada; ela não disse se ele ainda funciona. Todo mundo que entra recebe códigos extras para compartilhar, então peça a alguém que já usa o Cue.",
        },
        {
          title: "Baixe o app pela Manus",
          text: "Na Manus, abra a aba Agents (Cue!) na barra lateral e escaneie o QR code para baixar o app. A Manus lista web, desktop e mobile; no lançamento, o iOS aguardava a revisão da App Store, então confira a App Store antes de contar com ele.",
        },
        {
          title: "Entre com o código",
          text: "Digite o código de convite ao entrar. A Manus também pode mandar uma cópia por e-mail.",
        },
        {
          title: "Crie o seu primeiro agente",
          text: "Comece com um agente para tarefas do dia a dia ou monte uma pequena equipe com um objetivo comum. Diga o que você quer feito, o orçamento que ele pode gastar e sobre o que ele precisa perguntar a você antes.",
          code: prompts,
        },
      ],
      source: { label: "Fonte: post de lançamento do Manus 2.0 e do Cue", href: blog },
    },
    {
      kind: "text",
      id: "automations",
      title: "Automações agendadas e skills",
      points: [
        "Scheduled Automations: descreva o que você quer feito e quando, e o Cue configura.",
        "Gatilhos de eventos, como um e-mail novo ou uma mensagem no Slack, são descritos para as Manus Automations; a Manus não diz que o Cue já os tem.",
        "As skills que você criou ou importou na Manus não são levadas automaticamente. Configure-as de novo dentro do Cue.",
      ],
    },
    {
      kind: "table",
      id: "pricing",
      title: "Preços do Manus Cue",
      headers: ["", "O que a Manus diz"],
      rows: [
        ["Acesso antecipado", "Grátis, com um código de convite"],
        ["Depois do acesso antecipado", "Não anunciado"],
        ["Assinatura ou créditos da Manus", "O post de lançamento não diz que um plano da Manus inclui o Cue nem que o Cue usa créditos da Manus"],
        ["Pagamentos dos agentes", "Os agentes pagam pela carteira dentro do orçamento que você define"],
      ],
    },
    {
      kind: "text",
      id: "questions",
      title: "Questões em aberto antes de entregar o seu número",
      points: [
        "Quem um agente pode contatar, e com o que ele pode comprometer você, não é descrito no post de lançamento. Defina um orçamento e diga a cada agente o que ele deve perguntar a você antes.",
        "Como a pessoa do outro lado sabe que está falando com um agente também não é descrito.",
        "Os preços depois do acesso antecipado e os países em que o Cue funciona não foram anunciados.",
        "Agentes que mandam mensagens e pagam por uma carteira podem cometer erros que custam dinheiro; comece com um orçamento pequeno.",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Manus Cue vs Meta Muse e Grok Bot",
      headers: ["", "Manus Cue", "Meta Muse", "Grok Bot"],
      rows: [
        ["Identidade do agente", "E-mail, número de telefone, carteira e computador próprios", "Age pelas suas contas conectadas", "Age como você; sem conta própria"],
        ["Equipes de agentes", "Sim, chats em grupo com objetivo comum", "Não descrito", "Sim, os Bots passam trabalho uns para os outros"],
        ["Agendamentos", "Scheduled Automations", "Lembretes e tarefas recorrentes", "Rotinas com agendamento ou gatilho"],
        ["Acesso", "Acesso antecipado, código de convite", "EUA, grátis com limite semanal", "X Premium ou acima, SuperGrok, planos do Cursor"],
        ["Guia", "Esta página", "[Meta Muse](/personal-agent/meta-muse)", "[Grok Bot](/personal-agent/grok-bot)"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Com o Crewmark",
      title: "Uma equipe de agentes para o seu trabalho, no agente que você já usa",
      text: [
        "O Cue dá uma identidade a cada agente pessoal. O Crewmark dá um trabalho a cada agente de trabalho: ele transforma o seu próprio Claude Code ou Codex em um funcionário de IA com um cargo, uma meta em números, horário de trabalho e um heartbeat, trabalhando por um quadro compartilhado com o resto da sua equipe.",
      ],
      steps: [
        {
          title: "Escolha cargos",
          text: "Comece pelos [cargos de funcionários de IA](/ai-employees): engenheiro, especialista em SEO, agente de marketing, gerente de redes sociais, designer.",
        },
        {
          title: "Coloque o trabalho em um quadro",
          text: "Cada funcionário pega a próxima issue atribuída a ele, comenta enquanto trabalha e manda mensagem quando está travado.",
        },
        {
          title: "Compare agentes pessoais",
          text: "Veja [agentes pessoais de IA comparados](/personal-agent).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Começar a usar o Manus Cue" },
  mid: {
    title: "Quer uma equipe de agentes no seu trabalho de verdade?",
    text: "Os funcionários do Crewmark trabalham por um quadro compartilhado com um heartbeat, no plano do Claude Code ou do Codex que você já paga.",
    button: "Começar",
  },
  faq: {
    title: "Perguntas frequentes",
    items: [
      {
        q: "O que é o Manus Cue?",
        a: "Um app independente da Manus para agentes pessoais, lançado em acesso antecipado em 28 de setembro de 2026. Cada agente tem endereço de e-mail, número de telefone, carteira e computador próprios, e vários agentes podem trabalhar juntos em um chat em grupo.",
      },
      {
        q: "Como consigo um código de convite do Manus Cue?",
        a: "No lançamento, a Manus ofereceu o MEETCUE a um número limitado de usuários, por ordem de chegada. Todo mundo que ganha acesso recebe códigos de convite extras para compartilhar, então o caminho mais seguro é pedir a alguém que já usa o Cue.",
      },
      {
        q: "Quanto custa o Manus Cue?",
        a: "Ele é grátis durante o acesso antecipado, com um código de convite. A Manus não anunciou os preços depois disso nem se uma assinatura da Manus vai incluí-lo.",
      },
      {
        q: "Como baixo o Manus Cue?",
        a: "Abra a aba Agents (Cue!) na barra lateral da Manus e escaneie o QR code. A Manus lista web, desktop e mobile; no lançamento, o iOS aguardava a revisão da App Store.",
      },
      {
        q: "Um agente do Cue consegue fazer ligações e pagamentos?",
        a: "Cada agente tem número de telefone e carteira próprios: ele pode atender as suas ligações e deixar um resumo, mandar mensagens e pagar dentro de um orçamento que você define.",
      },
      {
        q: "O Cue faz parte da Manus?",
        a: "Ele foi construído sobre a mesma infraestrutura, mas é um app separado. As skills da Manus não são levadas automaticamente, e a Manus não diz que o Cue usa créditos da Manus.",
      },
    ],
  },
  cta: {
    title: "Agentes pessoais cuidam de tarefas. Funcionários de IA cuidam do seu backlog.",
    text: "O Crewmark transforma sessões do Claude Code e do Codex em funcionários de IA com cargos, metas, horário de trabalho e heartbeat.",
    button: "Começar",
  },
  checked: "Conferido no post de lançamento do Manus 2.0 e na Central de Ajuda da Manus em 10 de novembro de 2026.",
  disclaimer:
    "O Crewmark é um produto independente, sem vínculo com a Manus, a Meta ou a xAI e sem endosso delas. Os nomes dos produtos são marcas dos respectivos titulares.",
};
