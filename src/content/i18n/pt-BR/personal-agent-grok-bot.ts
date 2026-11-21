import type { GuideCopy } from "@/components/landing/guide-article";

// pt-BR translation of /personal-agent/grok-bot; the English master is
// src/content/personal-agents/grok-bot.ts.

const docs = "https://docs.x.ai/grok-bot/get-started";

export const copy: GuideCopy = {
  meta: {
    title: "Grok Bot: o que é, como usar, planos e configuração",
    description:
      "O Grok Bot da xAI explicado: o que o agente sempre ligado faz, quais planos do X, SuperGrok e Cursor o incluem, o teste grátis, como baixar no Mac, Windows, Linux e celular, como configurar o seu primeiro Bot e casos de uso.",
  },
  breadcrumb: "Grok Bot",
  parent: { name: "Agentes pessoais", href: "/personal-agent" },
  hero: {
    kicker: "Agentes pessoais · Grok Bot",
    title: "Grok Bot: o que o agente pessoal da xAI faz e como usar",
    lead: "O Grok Bot é o agente sempre ligado da xAI, que ela chama de “seu colega de equipe de IA proativo”. Cada Bot trabalha em um computador na nuvem com navegador, arquivos e terminal, entra nos apps que você usa, lembra como você gosta que as coisas sejam feitas e continua trabalhando depois que você fecha o notebook. Ele abriu como beta antecipado em agosto de 2026. Este guia mostra o que ele faz, quais planos o incluem, como configurar o seu primeiro Bot, como funcionam as rotinas e as aprovações e para que as pessoas o usam.",
    cta: "Começar",
    secondary: "Configurar",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "O que é o Grok Bot",
      text: [
        "O Grok Bot não é o chatbot Grok nem a conta @grok no X. É um agente com computador próprio: ele usa apps e sites como uma pessoa usaria, escreve e roda código e cuida de trabalhos de várias etapas, como montar uma apresentação, tocar uma campanha, fazer uma reserva ou manter uma agenda sincronizada.",
      ],
      points: [
        "Um computador na nuvem: os seus Bots compartilham uma máquina persistente com navegador, sistema de arquivos e terminal. Cada Bot tem a própria tela, e você pode assistir a qualquer um deles ao vivo.",
        "Vários Bots, uma equipe: dê um trabalho a cada Bot; eles podem trocar mensagens e passar trabalho uns para os outros, e o seu primeiro Bot pode relatar o que os outros estão fazendo.",
        "Apps: Gmail, Google Calendar, Google Drive, Slack, Notion, Granola, GitHub e mais, além de qualquer servidor MCP ou API. Ele usa os mesmos servidores MCP, plugins e skills do Cursor.",
        "Memória: cada Bot guarda as próprias anotações sobre as suas preferências e um registro de trabalho datado; alguns fatos, como o seu nome e fuso horário, são compartilhados por todos os seus Bots.",
        "Rotinas: os Bots rodam trabalhos com agendamento ou quando algo acontece, como uma menção no Slack ou um webhook. Veja [rotinas do Grok Bot](/personal-agent/grok-bot-routines).",
        "Você fala com ele no desktop, no celular, no Slack e no X, por texto ou por voz.",
      ],
    },
    {
      kind: "table",
      id: "plans",
      title: "Quais planos incluem o Grok Bot",
      text: [
        "O Grok Bot roda em uma conta do Cursor. Estes são os planos que o incluem, segundo a página de planos do Grok Bot no Cursor; nem a xAI nem o Cursor publicam um preço próprio do Grok Bot nem o uso semanal em números.",
      ],
      headers: ["Plano", "Grok Bot", "Uso"],
      rows: [
        ["The X Subscription: Premium, Super, Ultra", "Incluído, assento individual ou de equipe", "Cota semanal compartilhada, maior no Super e no Ultra; uso extra com crédito pré-pago"],
        ["The X Subscription: Plus, Free", "Não incluído", "-"],
        ["Planos antigos do Cursor: Pro, Pro+, Ultra, Teams", "Incluído", "Uso semanal crescente do Pro ao Ultra; depois disso, uso sob demanda se estiver ativado"],
        ["SuperGrok, SuperGrok Plus, SuperGrok Heavy, X Premium+ vinculados", "Incluído por meio de uma conta vinculada", "O Heavy recebe mais; um vínculo e um plano do Cursor não se somam"],
        ["SuperGrok Lite", "Não incluído", "-"],
        ["Teste grátis", "Um crédito de uso com janela de 7 dias", "Consumido por etapas do agente e tokens; não é recarregado"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Como configurar o Grok Bot",
      steps: [
        {
          title: "Baixe o app",
          text: "Baixe em x.ai/bot. Ele roda no macOS (Apple silicon e Intel), Windows (x64 e Arm64) e Linux (x64 e Arm64), além de iPhone (iOS 18 ou posterior) e Android (9 ou posterior).",
        },
        {
          title: "Entre na sua conta",
          text: "Escolha Sign in e conclua no navegador; o Grok Bot usa a sua conta do Cursor, então o SSO da empresa vale. Se o seu acesso vem do SuperGrok ou do X Premium+, vincule a sua conta do Grok na página de onboarding. Contas no Privacy Mode (Legacy) precisam mudar antes, porque os Bots precisam de armazenamento na nuvem.",
        },
        {
          title: "Dê um trabalho ao seu primeiro Bot",
          text: "O app cria um Bot chamado Grok Bot e abre um chat. Adicione mais com New Bot (Cmd/Ctrl+N). Dê um trabalho a cada Bot na primeira mensagem e peça que ele lembre como você quer que o trabalho seja feito. Você também pode ensinar uma tarefa gravando-a uma vez no computador do Bot.",
        },
        {
          title: "Conecte apps e defina regras",
          text: "Conecte os apps de que ele precisa. Os logins vêm do Vault dele, depois de um gerenciador de senhas como o 1Password, depois de um formulário seguro, e o Bot nunca vê a senha. O Auto Review vem ligado por padrão e confere as ações antes de elas rodarem; acrescente regras Ask first em Settings > General > Bot para tudo o que deve sempre esperar por você.",
        },
      ],
      source: { label: "Fonte: documentação do Grok Bot da xAI, Get started", href: docs },
    },
    {
      kind: "text",
      id: "safety",
      title: "Como o Grok Bot mantém você no controle",
      points: [
        "Cards de aprovação: quando uma ação precisa do seu OK, o Bot mostra um card e espera. Nos exemplos da xAI, ele rascunha respostas no Slack e mensagens no Gmail para você aprovar.",
        "O Auto Review confere as ações antes de um Bot rodar comandos, usar apps ou agir no próprio computador, e trata apenas as suas mensagens como instruções. A xAI observa que isso reduz o risco de conteúdo malicioso, mas não o elimina.",
        "Um Bot não tem conta própria; ele age como você, então toda ação leva de volta a você.",
        "Todos os Bots compartilham um computador e os logins dele: se um Bot entra em um site, os outros também podem usar esse login.",
        "Para single sign-on ou passkeys, escolha Open computer, depois Take control, conclua a etapa e diga ao Bot para continuar.",
      ],
    },
    {
      kind: "table",
      id: "use-cases",
      title: "Casos de uso do Grok Bot",
      text: ["Segundo a documentação de casos de uso da xAI. A maioria rascunha o trabalho e espera a sua aprovação antes de enviar qualquer coisa."],
      headers: ["Caso de uso", "O que o Bot faz"],
      rows: [
        ["Resumo da manhã", "Resume o que mudou durante a noite nos seus apps"],
        ["Gestor da caixa de entrada", "Ordena os e-mails não lidos por urgência e rascunha respostas"],
        ["Coordenador de viagens", "Encontra duas opções de voo e hotel e deixa a reserva com você"],
        ["Preparação de reuniões", "Escreve um brief de uma página sobre os participantes, conversas anteriores e assuntos em aberto"],
        ["Marketing de conteúdo", "Rascunha uma newsletter e posts a partir do que foi entregue na semana"],
        ["Desenvolvimento de vendas", "Qualifica leads que chegam com base no seu cliente ideal e rascunha respostas"],
        ["Inteligência competitiva", "Relata lançamentos e mudanças de preço dos concorrentes toda semana"],
        ["Equipe de campanha", "Vários Bots puxam dados de cadastro, rascunham o conteúdo de lançamento e checam os fatos"],
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Grok Bot vs Muse, Dots e Claude Duet",
      headers: ["", "Grok Bot", "Meta Muse", "ChatGPT dots", "Claude Duet"],
      rows: [
        ["Feito por", "xAI", "Meta", "OpenAI", "Anthropic"],
        ["Roda em", "Um computador na nuvem compartilhado pelos seus Bots", "Uma VM na nuvem dedicada por pessoa", "Computador e navegador próprios na nuvem", "O app Claude Duet"],
        ["Agendamentos", "Rotinas com agendamento, Slack, GitHub, e-mail ou webhook", "Lembretes e tarefas recorrentes", "Lembretes agendados e checagens recorrentes", "Vem até você com o que precisa de atenção"],
        ["Quem pode usar", "X Premium ou acima, SuperGrok, planos do Cursor", "EUA, grátis com limites; Power $20/mês", "ChatGPT Pro e Business Premium", "Claude Pro, Max, Ultra nos EUA, lista de espera"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Com o Crewmark",
      title: "Um colega no estilo do Grok Bot para o seu código",
      text: [
        "O Grok Bot trabalha nos seus apps; o Crewmark trabalha no seu repositório. Ele transforma o seu próprio Claude Code ou Codex em um funcionário de IA com um cargo, uma meta em números, horário de trabalho e um heartbeat: ele acorda no horário, pega a próxima issue de um quadro, abre pull requests e manda mensagem quando precisa de uma decisão.",
      ],
      steps: [
        {
          title: "Escolha um cargo",
          text: "Comece por um [cargo de funcionário de IA](/ai-employees), como engenheiro de software ou especialista em SEO.",
        },
        {
          title: "Dê a ele horário e um heartbeat",
          text: "Ele acorda a cada 15 a 240 minutos durante o horário que você definir. Veja [como rodar o Claude Code 24/7](/blog/run-claude-code-24-7).",
        },
        {
          title: "Compare agentes pessoais",
          text: "Veja [agentes pessoais de IA comparados](/personal-agent) e o [guia do Meta Muse](/personal-agent/meta-muse).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Configurar o Grok Bot" },
  mid: {
    title: "Quer um colega proativo para o seu código?",
    text: "Os funcionários do Crewmark acordam com um heartbeat, pegam a próxima issue de um quadro e abrem pull requests.",
    button: "Começar",
  },
  faq: {
    title: "Perguntas frequentes",
    items: [
      {
        q: "O que é o Grok Bot?",
        a: "O agente sempre ligado da xAI. Cada Bot trabalha em um computador na nuvem, entra nos seus apps, lembra das suas preferências, roda rotinas com agendamento e continua trabalhando depois que você fecha o notebook. Ele não é o chatbot Grok nem a conta @grok no X.",
      },
      {
        q: "Quanto custa o Grok Bot?",
        a: "Ele não tem preço próprio: está incluído nos planos Premium, Super e Ultra da The X Subscription, nos planos antigos Pro, Pro+, Ultra e Teams do Cursor e nas assinaturas vinculadas SuperGrok, SuperGrok Plus, SuperGrok Heavy e X Premium+. Os limites de uso mudam conforme o plano.",
      },
      {
        q: "Existe teste grátis do Grok Bot?",
        a: "Sim, um crédito de uso com janela de 7 dias. Ele é consumido por etapas do agente e tokens, não é recarregado e nunca vira um plano pago; depois dele, você faz upgrade ou vincula uma conta.",
      },
      {
        q: "O Grok Bot funciona no Windows, Linux e Android?",
        a: "Sim. O app de desktop roda no macOS, Windows e Linux (x64 e Arm64), e há apps para iPhone (iOS 18+) e Android (9+).",
      },
      {
        q: "O Grok Bot consegue rodar tarefas com agendamento?",
        a: "Sim, com rotinas: com um agendamento escrito em linguagem comum, ou quando chega uma mensagem no Slack, um evento do GitHub ou do Linear, um e-mail ou um webhook. Veja [rotinas do Grok Bot](/personal-agent/grok-bot-routines).",
      },
      {
        q: "Grok Bot vs Meta Muse: qual é melhor?",
        a: "O Muse foi feito para as burocracias do dia a dia de qualquer pessoa, com um plano grátis nos EUA. O Grok Bot foi feito para o trabalho: vários Bots como equipe, rotinas com gatilhos e as ferramentas do Cursor para código.",
      },
    ],
  },
  cta: {
    title: "Dê ao seu agente de código um trabalho, não só um prompt.",
    text: "O Crewmark transforma sessões do Claude Code e do Codex em funcionários de IA com cargos, metas, horário de trabalho e heartbeat.",
    button: "Começar",
  },
  checked: "Conferido na documentação e nos guias do Grok Bot da xAI e na página de planos do Grok Bot no Cursor em 10 de novembro de 2026.",
  disclaimer:
    "O Crewmark é um produto independente, sem vínculo com a xAI, a SpaceX, o X, o Cursor, a Meta, a OpenAI ou a Anthropic e sem endosso deles. Os nomes dos produtos são marcas dos respectivos titulares.",
};
