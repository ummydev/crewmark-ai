import type { GuideCopy } from "@/components/landing/guide-article";

// Brazilian Portuguese translation of /blog/claude-duet; the English master is src/content/blog/claude-duet.ts.

const announcement = "https://claude.com/resources/articles/claude-duet";

export const copy: GuideCopy = {
  meta: {
    title: "Claude Duet: o agente proativo da Anthropic, lista de espera, acesso e limites | Crewmark",
    description:
      "O Claude Duet é o app de agente proativo da Anthropic, em prévia de pesquisa desde 21 de outubro de 2026. O que faz, quem pode ter, como entrar na lista de espera, quanto custa, seus limites de segurança e como se compara.",
  },
  breadcrumb: "Claude Duet",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-05" },
  hero: {
    kicker: "Blog · Claude",
    title: "Claude Duet: o que é, quem pode ter e como funciona",
    lead: "O Claude Duet é um novo app da Anthropic em que o Claude trabalha como agente proativo: ele avisa o que precisa da sua atenção, faz as tarefas que você entrega, continua trabalhando quando você se afasta e consulta você antes de agir em seu nome. Foi aberto como prévia de pesquisa com lista de espera em 21 de outubro de 2026, para assinantes do Pro, Max e Ultra nos EUA. Este guia explica o que ele faz, como conseguir acesso, quanto custa, seus limites de segurança e como se compara.",
    cta: "Acesso antecipado",
    secondary: "Como conseguir acesso",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "O que é o Claude Duet",
      text: [
        "Um chat comum do Claude espera você abri-lo. O Duet sai na frente: ele observa os apps que você conecta, envia um breve resumo matinal, fica quieto até que algo precise de você e manda mensagem quando uma tarefa termina ou exige uma decisão. A Anthropic o criou para profissionais e donos de pequenos negócios, com base no Claude Opus 5.5.",
      ],
      points: [
        "Resumo matinal: um breve resumo diário das coisas mais importantes nos seus apps conectados.",
        "Uma só conversa: você escreve por texto ou voz, como para um colega, e ele mantém uma única conversa contínua.",
        "Seu contexto do Claude: ele usa a memória, as skills e os apps conectados da sua conta do Claude desde a primeira mensagem.",
        "Seu próprio computador na nuvem: as tarefas rodam em uma máquina virtual com navegador próprio, então seu notebook e seu celular podem ficar desligados.",
        "Tarefas pequenas e grandes: marcar reuniões, redigir respostas, cobrar faturas em aberto, preparar a folha de pagamento para revisão ou criar painéis, projeções, apresentações e protótipos.",
        "Conectores: mais de 6.000 conectores e plugins do Claude Marketplace, como Gmail, Slack, QuickBooks, Stripe, HubSpot, Docusign e Shopify.",
      ],
    },
    {
      kind: "table",
      title: "Claude Duet em resumo",
      headers: ["", "Claude Duet"],
      rows: [
        ["Anunciado", "21 de outubro de 2026, como prévia de pesquisa"],
        ["Quem pode ter", "Assinantes do Pro, Max e Ultra nos EUA, por lista de espera"],
        ["Team e Enterprise", "Ainda não incluídos"],
        ["Onde", "Apps independentes para iOS e Android, e claude.ai no computador"],
        ["Preço", "Sem preço separado: incluído no plano, com os mesmos limites de uso do restante do Claude"],
        ["Modelo", "Claude Opus 5.5"],
        ["Com que frequência verifica", "A cada poucas horas; você escolhe sobre o que quer ser avisado e com que frequência"],
        ["API", "Nenhuma anunciada"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Como conseguir o Claude Duet e configurá-lo",
      steps: [
        {
          title: "Confira se o seu plano é elegível",
          text: "Você precisa de um plano Pro, Max ou Ultra nos EUA. Os planos Team e Enterprise ainda não fazem parte da prévia.",
        },
        {
          title: "Entre na lista de espera",
          text: "Cadastre-se na página do Claude Duet, claude.com/product/claude-duet. A Anthropic envia um e-mail quando o Duet estiver pronto para a sua conta.",
        },
        {
          title: "Abra o app",
          text: "Instale o app independente do Claude Duet no iOS ou Android, ou use-o em claude.ai no computador. Ele é separado do app principal do Claude, mas compartilha a sua conta.",
        },
        {
          title: "Conecte os apps que ele deve observar",
          text: "Os apps que você já conectou ao Claude são trazidos junto, e desativar um em qualquer um dos lugares o desativa nos dois. Comece pelos poucos que importam, como sua caixa de entrada, sua agenda e o faturamento.",
        },
        {
          title: "Diga sobre o que você quer ser avisado",
          text: "Defina o que conta como urgente e com que frequência você quer atualizações. Cada verificação em segundo plano usa os limites do seu plano, então regras menos numerosas e mais precisas duram mais.",
        },
        {
          title: "Entregue uma tarefa e aprove as ações dele",
          text: "Mande mensagem como faria a um colega. Ele lê e redige por conta própria e depois mostra a ação, os destinatários e o conteúdo, e espera a sua aprovação antes de enviar, pagar, assinar ou excluir qualquer coisa.",
        },
      ],
      source: { label: "Fonte: o anúncio do Claude Duet da Anthropic", href: announcement },
    },
    {
      kind: "text",
      title: "Segurança, privacidade e limites",
      points: [
        "Aprovações: antes de enviar uma mensagem sensível, pagar ou excluir, ele mostra exatamente o que vai fazer e espera. Uma verificação separada, fora do modelo, também avalia se cada ação corresponde à sua intenção.",
        "Nunca permitido, nem com aprovação: negociar valores mobiliários, mover dinheiro entre contas ou usar a conta de outra pessoa.",
        "Senhas: ele nunca vê suas senhas, cookies ou tokens de login. As compras usam um cartão de uso único limitado àquele comerciante e àquele valor.",
        "Dados sensíveis: um classificador bloqueia o compartilhamento de números de cartão, números de conta bancária e documentos de identificação oficiais; dados de saúde e finanças só são compartilhados quando você pede.",
        "Memória: ele guarda o histórico de conversas e a memória até você excluí-los ou redefini-los. Desconectar um app interrompe o acesso novo, mas o que ele já aprendeu permanece até você redefinir a memória.",
        "Prévia inicial: a Anthropic diz que ele pode entender mal uma conversa, julgar mal o que é urgente ou perder algo que chega entre uma verificação e outra, e que é mais fraco em tarefas pessoais do que em tarefas de trabalho.",
      ],
    },
    {
      kind: "table",
      title: "Claude Duet vs ChatGPT dots vs Crewmark",
      text: [
        "Os três são agentes que continuam trabalhando sem você no chat. O Duet e o [ChatGPT dots](/blog/chatgpt-dots) são assistentes para os seus apps de negócio que rodam na nuvem de quem os criou; o Crewmark acorda com um heartbeat o agente de programação que você já usa, como o Claude Code ou o Codex, para trabalhar em um quadro de issues.",
      ],
      headers: ["", "Claude Duet", "ChatGPT dots", "Crewmark"],
      rows: [
        ["Roda em", "O computador na nuvem da Anthropic", "O computador na nuvem da OpenAI", "Seu computador, dentro do Claude Code, Codex, DeepSeek Harness ou OpenCode"],
        ["Inicia o trabalho", "Suas mensagens e verificações a cada poucas horas", "Suas mensagens, agendamentos e a própria pesquisa dele", "Um heartbeat a cada 15–60 minutos no horário de trabalho"],
        ["Melhor em", "Caixa de entrada, agenda, faturas, resumos e painéis", "Pesquisa e tarefas nos seus apps conectados", "Código, SEO e outros trabalhos em um repositório, um funcionário por cargo"],
        ["Fila de trabalho", "Uma conversa contínua", "Conversas e Scheduled", "Issues em um quadro kanban"],
        ["Custo", "Incluído no Pro, Max e Ultra (EUA)", "Planos Pro e Business Premium", "Acesso antecipado; roda com o agente e o plano que você já tem"],
        ["Status", "Prévia de pesquisa, lista de espera", "Em liberação gradual", "Acesso antecipado"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Com o Crewmark",
      title: "Quer o mesmo hábito proativo para o Claude Code?",
      text: [
        "O Duet observa sua caixa de entrada e seus apps de negócio; a Anthropic não o descreve trabalhando no seu repositório de código. O Crewmark leva a mesma ideia aos agentes de programação: dá a uma sessão do Claude Code, Codex, DeepSeek Harness ou OpenCode um cargo, uma meta e um horário de trabalho, e a acorda com um heartbeat na mesma conversa.",
      ],
      steps: [
        {
          title: "Transforme uma sessão em funcionário",
          text: "Escolha um cargo, como engenheiro de software ou especialista em SEO, escreva a meta dele como um número e execute o comando de configuração no Claude Code.",
        },
        {
          title: "Deixe o heartbeat iniciar o trabalho",
          text: "Durante o horário de trabalho, o funcionário acorda a cada 15, 30 ou 60 minutos e retoma de onde parou; veja [como tornar o Claude Code proativo](/proactive-claude-code).",
        },
        {
          title: "Atribua issues e responda às mensagens dele",
          text: "Coloque o trabalho no quadro; o funcionário o pega, comenta ao longo do caminho e manda mensagem quando precisa de uma decisão. Leia [o que é um funcionário de IA](/ai-employees).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Conseguir o Claude Duet e configurá-lo" },
  mid: {
    title: "Gostou da ideia de um agente que manda mensagem primeiro?",
    text: "O Crewmark faz isso para o Claude Code e o Codex: um heartbeat, horário de trabalho e um quadro de issues, no plano que você já paga.",
    button: "Acesso antecipado",
  },
  faq: {
    title: "FAQ do Claude Duet",
    items: [
      {
        q: "O que é o Claude Duet?",
        a: "Um app da Anthropic, em prévia de pesquisa desde 21 de outubro de 2026, em que o Claude trabalha como agente proativo. Ele observa seus apps conectados, envia um resumo matinal, faz tarefas no próprio computador na nuvem e pede aprovação antes de agir em seu nome.",
      },
      {
        q: "Quando o Claude Duet foi lançado?",
        a: "A Anthropic abriu a prévia de pesquisa em 21 de outubro de 2026, com lista de espera. O acesso é liberado aos poucos, e a Anthropic envia um e-mail quando estiver pronto para a sua conta.",
      },
      {
        q: "Como consigo acesso ao Claude Duet?",
        a: "Entre na lista de espera em claude.com/product/claude-duet com um plano Pro, Max ou Ultra nos EUA. Depois, use o app do Claude Duet no iOS ou Android, ou claude.ai no computador.",
      },
      {
        q: "O Claude Duet está disponível para os planos Team ou Enterprise?",
        a: "Ainda não. A página do produto da Anthropic diz que os planos Team e Enterprise não estão incluídos na prévia.",
      },
      {
        q: "Quanto custa o Claude Duet?",
        a: "Não há preço separado. Ele está incluído no Pro, Max e Ultra e usa os mesmos limites de uso do restante do Claude; verificações em segundo plano e tarefas maiores consomem mais.",
      },
      {
        q: "O Claude Duet é seguro?",
        a: "Ele pergunta antes de enviar, pagar, assinar ou excluir, nunca vê suas senhas nem tokens de login, usa cartões de uso único nas compras e não pode negociar valores mobiliários nem mover dinheiro entre contas, mesmo com aprovação. É uma prévia inicial, então ele ainda pode julgar mal o que é urgente.",
      },
      {
        q: "O Claude Duet pode escrever código no meu repositório?",
        a: "Ele pode criar protótipos e apps web no próprio computador na nuvem, mas a Anthropic não o apresenta como um agente de programação para o seu repositório. Para isso, a ferramenta é o Claude Code, e o Crewmark torna proativas as sessões do Claude Code com um heartbeat e um quadro de issues.",
      },
    ],
  },
  cta: {
    title: "Deixe proativas também as suas sessões do Claude Code.",
    text: "O Crewmark transforma sessões do Claude Code, do Codex e do DeepSeek Harness em funcionários de IA com cargos, metas, horário de trabalho e um heartbeat.",
    button: "Acesso antecipado",
  },
  checked: "Conferido com o anúncio do Claude Duet da Anthropic, a página do produto e o artigo de segurança em 5 de novembro de 2026.",
  disclaimer:
    "O Crewmark é um produto independente, sem vínculo com a Anthropic nem com a OpenAI e sem endosso delas. Claude, Claude Duet e Claude Code são marcas da Anthropic, e ChatGPT, da OpenAI.",
};
