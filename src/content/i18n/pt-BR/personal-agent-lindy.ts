import type { GuideCopy } from "@/components/landing/guide-article";

// Brazilian Portuguese translation of /personal-agent/lindy; the English master is
// src/content/personal-agents/lindy.ts.

const docs = "https://docs.lindy.ai";

export const copy: GuideCopy = {
  meta: {
    title: "Lindy AI: o que a assistente faz, preços, créditos e configuração",
    description:
      "A Lindy AI explicada: uma assistente hospedada para e-mail, agenda, reuniões e Slack. Preços em créditos, rotinas, aprovações, onde usar e vs Relevance AI.",
  },
  breadcrumb: "Lindy",
  parent: { name: "Agentes pessoais", href: "/personal-agent" },
  hero: {
    kicker: "Agentes pessoais · Lindy",
    title: "Lindy AI: o que a assistente faz, quanto custa e como configurar",
    lead: "A Lindy se descreve como um funcionário de IA que conclui trabalho nas ferramentas que você conectou. Ela é uma única assistente hospedada que atua como assistente executiva pessoal de cada usuário e como colega compartilhada no Slack. Ela cuida de caixa de entrada, agenda, reuniões, pesquisa, relatórios e follow-ups, roda trabalho recorrente como rotinas e espera a sua aprovação antes de qualquer coisa com impacto externo. Veja o que ela faz, como funcionam os preços em créditos, como configurar, como funcionam as aprovações e como ela se compara à Relevance AI e ao Grok Bot.",
    cta: "Começar",
    secondary: "Configurar",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "O que é a Lindy",
      points: [
        "Uma assistente, não um construtor de agentes: a documentação descreve uma Lindy por workspace. Ela é vendida para muitas funções, como anúncios pagos, SEO e conteúdo, contabilidade, recrutamento e suporte ao cliente.",
        "Duas formas de usar: em particular, como a sua assistente executiva pelo iMessage, por e-mail ou por DMs no Slack, e como uma colega compartilhada que o seu time pode @mencionar no Slack para pesquisar, escrever relatórios ou atualizar um CRM.",
        "Ela aprende: mais de 40 skills integradas e as suas próprias, uma memória editável e o Watch and Learn, em que você mostra uma tarefa a ela uma vez.",
        "Ela repete trabalho como rotinas: cada uma tem um gatilho (um agendamento ou um evento), um prompt e um destino. As rotinas integradas cobrem resumos diários, redação e rotulagem de e-mails, lembretes de follow-up, e gravação, preparação e agendamento de reuniões.",
        "Ela escolhe um modelo por tarefa, e você pode escolher o modelo por conta própria.",
        "Ela é hospedada: a Lindy roda na nuvem e é feita pela Crivello Corp, que opera com o nome Lindy.",
      ],
    },
    {
      kind: "table",
      id: "plans",
      title: "Preços da Lindy: créditos e licenças",
      text: [
        "Segundo lindy.ai/pricing em 13 de novembro de 2026. A cobrança anual não aparece. Todo usuário ativo em um workspace é cobrado, inclusive quem só @menciona a Lindy no Slack, e os créditos mensais não se acumulam para o mês seguinte.",
      ],
      headers: ["Opção", "Preço", "O que você recebe"],
      rows: [
        ["Início grátis", "$0, sem cartão de crédito", "$50 em créditos que duram 7 dias; a semana grátis vale uma vez por colega de equipe"],
        ["Por usuário ativo", "A partir de $29.99/mês", "3.000 créditos para cada usuário ativo, compartilhados pela equipe"],
        ["Faixas de créditos maiores", "Até $9,999.50/mês", "Até 1.750.000 créditos"],
        ["Recargas", "$10 por 1.000 créditos", "Quando o saldo compartilhado de créditos acaba, as ações que usam créditos ficam pausadas até o próximo ciclo ou uma recarga"],
        ["Enterprise", "Sob consulta", "-"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Como configurar a Lindy",
      steps: [
        { title: "Comece com créditos grátis", text: "O início grátis dá $50 em créditos que duram 7 dias, sem precisar de cartão de crédito." },
        {
          title: "Escolha onde falar com ela",
          text: "Slack, e-mail, iMessage e SMS, ligações telefônicas, a extensão do Chrome no Gmail ou a página Home da Lindy na web, que mostra o que a Lindy tem feito. O Microsoft Teams aparece como em breve.",
        },
        {
          title: "Conecte as suas ferramentas",
          text: "Gmail, Google Calendar, gravação de reuniões no Google Meet, no Zoom e no Microsoft Teams, servidores MCP e credenciais de API salvas.",
        },
        { title: "Ensine como você trabalha", text: "Use as skills integradas, adicione as suas, edite a memória dela ou mostre uma tarefa uma vez com o Watch and Learn." },
        {
          title: "Configure rotinas",
          text: "Dê a cada rotina um gatilho, um prompt e um destino, ou comece por uma integrada, como um resumo diário. As rotinas do workspace rodam pelo Slack e só os admins podem configurá-las.",
        },
      ],
      source: { label: "Fonte: documentação da Lindy", href: docs },
    },
    {
      kind: "text",
      id: "safety",
      title: "Como a Lindy mantém você no controle",
      points: [
        "Tudo o que tem impacto externo espera a sua aprovação, como enviar um e-mail, atualizar um ticket, postar em outro canal ou publicar um documento.",
        "Consultas somente leitura em fontes aprovadas não precisam de aprovação.",
        "Os admins podem limitar os créditos por licença, e só os admins configuram as rotinas do workspace.",
        "Quando o saldo compartilhado de créditos acaba, a Lindy pausa as ações que usam créditos até o próximo ciclo ou uma recarga.",
        "A memória dela é editável.",
      ],
    },
    {
      kind: "table",
      id: "vs",
      title: "Lindy vs Relevance AI e Grok Bot",
      text: [
        "Dados do site, da página de preços e da documentação de cada fornecedor, conferidos em 13 de novembro de 2026. Outros colegas de trabalho de IA estão em [colegas de trabalho de IA comparados](/blog/ai-coworker); veja também o [guia do Grok Bot](/personal-agent/grok-bot).",
        "Lado a lado: [Relevance AI vs Lindy](/compare/relevance-ai-vs-lindy). Guias: [Grok Bot](/personal-agent/grok-bot).",
      ],
      headers: ["", "Lindy", "Relevance AI", "Grok Bot"],
      rows: [
        ["Feito por", "Crivello Corp (Lindy)", "OnSearch Pty Ltd (Relevance AI)", "xAI"],
        ["O que é", "Uma assistente hospedada por workspace: uma assistente executiva e uma colega no Slack", "Uma plataforma low-code/no-code para criar agentes e Workforces multiagente", "Colegas de equipe de IA hospedados: Bots, cada um com o próprio computador na nuvem"],
        ["Vários agentes", "Não informado; a documentação descreve uma Lindy por workspace", "Sim: agentes conectados em um canvas visual", "Sim: os Bots trocam mensagens entre si e se coordenam em chats em grupo"],
        ["Onde você usa", "Slack, e-mail, iMessage e SMS, telefone, extensão do Chrome, web", "App web", "Apps para macOS e iOS, Slack, Microsoft Teams, chamadas"],
        ["Trabalho recorrente", "Rotinas com agendamento ou por um evento", "Tarefas agendadas e gatilhos de apps", "Rotinas com agendamento"],
        ["Aprovações", "Tudo o que tem impacto externo espera aprovação", "Fluxos de aprovação e escalonamentos por e-mail e Slack", "Os Bots pedem confirmação quando precisam de aprovação; Auto Review"],
        ["Preços", "$50 em créditos grátis por 7 dias; a partir de $29.99/mês por usuário ativo", "Plano Enterprise pelo time de vendas", "Premium $30, Super $100 ou Ultra $200 por mês"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Com o Crewmark",
      title: "A Lindy para a sua caixa de entrada. O Crewmark para o seu repositório.",
      text: [
        "A Lindy trabalha na sua caixa de entrada, agenda, reuniões e Slack. O Crewmark transforma as suas próprias sessões do Claude Code ou do Codex em funcionários de IA com um cargo, metas em números, horário de trabalho e um heartbeat, cada um pegando issues de um quadro compartilhado, para que o trabalho de engenharia, SEO e marketing em um repositório seja feito com agendamento.",
      ],
      steps: [
        { title: "Escolha um cargo", text: "Comece pelos [cargos de funcionários de IA](/ai-employees), como engenheiro de software ou especialista em SEO." },
        { title: "Coloque o trabalho em um quadro", text: "Atribua issues e faça as recorrentes se repetirem; o heartbeat acorda o funcionário para pegar a próxima." },
        { title: "Veja o que ele pode fazer", text: "Trabalhos com a configuração estão em [casos de uso do Claude Code](/use-cases/claude-code)." },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Configurar a Lindy" },
  mid: {
    title: "Quer um funcionário de IA para o seu código?",
    text: "O Crewmark dá ao seu Claude Code ou Codex um cargo, um heartbeat e um quadro compartilhado.",
    button: "Começar",
  },
  faq: {
    title: "Perguntas frequentes sobre a Lindy AI",
    items: [
      {
        q: "O que é a Lindy AI?",
        a: "Uma assistente de IA hospedada que trabalha nas ferramentas que você conectou. Ela atua como assistente executiva pessoal de cada usuário e como colega compartilhada no Slack, cuidando de caixa de entrada, agenda, reuniões, pesquisa, relatórios e follow-ups, e roda trabalho recorrente como rotinas.",
      },
      {
        q: "Quanto custa a Lindy?",
        a: "Você pode começar com $50 em créditos que duram 7 dias, sem cartão de crédito. Depois disso, todo usuário ativo do workspace é cobrado, a partir de $29.99 por mês por 3.000 créditos cada, compartilhados pela equipe. As recargas custam $10 por 1.000 créditos, e o preço do Enterprise é sob consulta.",
      },
      {
        q: "A Lindy é um agente ou vários?",
        a: "Um. A documentação descreve uma Lindy por workspace, e as rotinas não são um bot separado. Ela é vendida para muitas funções e aprende por skills integradas e personalizadas, memória e Watch and Learn, mas personas de agente separadas não são mencionadas.",
      },
      {
        q: "Existe um app da Lindy?",
        a: "Você usa a Lindy pela página Home dela na web, pelo Slack, e-mail, iMessage e SMS, ligações telefônicas e uma extensão do Chrome no Gmail. A documentação não descreve um app para desktop nem para celular; o Microsoft Teams aparece como em breve.",
      },
      {
        q: "Como eu me cadastro na Lindy?",
        a: "Comece com os $50 em créditos grátis, que não exigem cartão de crédito, duram 7 dias e valem uma vez por colega de equipe. Depois disso, todo usuário ativo ocupa uma licença paga: colegas que entram pelo Slack ganham um teste grátis de 7 dias, e quem se cadastra diretamente é cobrado na hora.",
      },
      {
        q: "A Lindy age sem perguntar?",
        a: "Não para nada que tenha impacto externo: enviar um e-mail, atualizar um ticket, postar em outro canal ou publicar um documento espera a sua aprovação. Consultas somente leitura em fontes aprovadas não precisam de aprovação.",
      },
    ],
  },
  cta: {
    title: "Passe a sua caixa de entrada para uma assistente. Dê um trabalho aos seus agentes de programação também.",
    text: "O Crewmark transforma sessões do Claude Code e do Codex em funcionários de IA com cargos, metas, horário de trabalho e um heartbeat.",
    button: "Começar",
  },
  checked: "Conferido em lindy.ai, na página de preços da Lindy e na documentação da Lindy em 13 de novembro de 2026.",
  disclaimer:
    "O Crewmark é um produto independente, sem vínculo com a Lindy, a Relevance AI ou a xAI e sem endosso delas. Os nomes dos produtos são marcas dos respectivos titulares.",
};
