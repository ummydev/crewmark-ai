import type { GuideCopy } from "@/components/landing/guide-article";

// Brazilian Portuguese translation of /blog/best-ai-employee-platforms; the English master is src/content/blog/best-ai-employee-platforms.ts.

export const copy: GuideCopy = {
  meta: {
    title: "Melhores plataformas de funcionários de IA em 2026: 8 comparadas | Crewmark",
    description:
      "Lindy, Sintra, Marblism, Artisan, Ema, Devin, o projeto open source ai-employees e o Crewmark comparados: cargos, como o trabalho começa, quais modelos usam, planos gratuitos e preços.",
  },
  breadcrumb: "Melhores plataformas de funcionários de IA",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-06" },
  hero: {
    kicker: "Blog · Funcionários de IA",
    title: "As melhores plataformas de funcionários de IA em 2026, comparadas",
    lead: "Uma plataforma de funcionários de IA oferece agentes de IA configurados como equipe: cada um tem um cargo, trabalha em direção a uma meta e começa a trabalhar sem precisar de um prompt toda vez. Todos os produtos abaixo vendem essa ideia, mas mudam em quais funções cobrem, como o trabalho chega até eles, em quais modelos rodam e como cobram. Comparamos oito, incluindo o nosso, usando só o que cada fornecedor publica.",
    cta: "Acesso antecipado",
    secondary: "Ir para a comparação",
    secondaryHref: "#compare",
  },
  sections: [
    {
      kind: "table",
      id: "compare",
      title: "Plataformas de funcionários de IA lado a lado",
      text: [
        "Os preços são dos planos de entrada listados na página de preços de cada fornecedor em 6 de novembro de 2026, em dólares americanos. Para entender o que é um funcionário de IA e como ele difere de um agente de IA, veja [o que é um funcionário de IA](/ai-employees).",
      ],
      headers: ["Plataforma", "Ideal para", "Como o trabalho começa", "Roda em", "Opção gratuita", "Pago a partir de"],
      rows: [
        ["Lindy", "Trabalho de escritório em cerca de 17 funções: e-mail, agenda, vendas, suporte, recrutamento", "Agendamentos (Routines), Slack e iMessage, ligações telefônicas", "Os principais modelos escolhidos pela Lindy", "Grátis: $50 em créditos por 7 dias", "$49.99/mês por usuário (Team)"],
        ["Sintra", "Pequenas empresas: mais de 12 assistentes com nome para suporte, textos, SEO, redes sociais e vendas", "Você conversa com um assistente ou roda uma tarefa com um clique", "Modelos da Sintra (baseados no Claude Sonnet)", "Sem plano gratuito", "$48.50/mês, ou menos no plano anual"],
        ["Marblism", "Pequenas empresas: 7 cargos, de assistente a recepcionista e jurídico", "Você define uma meta; eles trabalham nela todo dia e pedem aprovação", "Não informado", "Sem plano gratuito", "$24/mês no plano anual, $44 no mensal"],
        ["Artisan (Ava)", "Vendas outbound: um SDR/BDR de IA", "Autônomo, com regras de aprovação e escalonamento", "Não informado", "Não informado", "Planos de créditos; agende uma demo"],
        ["Ema", "RH, TI e finanças em grandes empresas", "Teams, Slack ou voz; mais de 250 integrações", "Combinação de mais de 100 modelos da Ema", "Teste grátis", "Por resultado; preço não divulgado"],
        ["Devin", "Engenharia de software", "@menção no Slack ou no Teams, tickets do Linear ou do Jira, fluxos recorrentes", "Modelos do Devin (de vários fornecedores)", "Plano gratuito com cota pequena", "$20/mês (Pro)"],
        ["ai-employees (open source)", "8 cargos de negócio como pastas de rotinas agendadas", "Agendamentos no SCHEDULE.md de cada cargo", "Seu próprio agente: Claude Code, Codex, OpenCode e outros", "Grátis, licença MIT", "Grátis"],
        ["Crewmark", "Qualquer cargo que você definir, sobre agentes de programação: engenharia, SEO, marketing, design", "Um heartbeat acorda cada funcionário durante o horário de trabalho para pegar a próxima tarefa de um quadro", "Sua própria assinatura do Claude Code, Codex, DeepSeek Harness ou OpenCode", "Acesso antecipado", "Acesso antecipado"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Como escolher uma plataforma de funcionários de IA",
      steps: [
        {
          title: "Comece pela função, não pela ferramenta",
          text: "Anote um cargo e o número que ele deve mover, como reuniões agendadas, cliques no Search Console ou pull requests mergeados. Plataformas feitas para uma única função (Artisan para vendas outbound, Devin para código) costumam ser melhores nessa função do que as genéricas.",
        },
        {
          title: "Veja como o trabalho começa",
          text: "Um assistente de chat espera por você; um funcionário de IA começa sozinho. Procure agendamentos, gatilhos ou um heartbeat, e um lugar para atribuir trabalho, como um quadro, tickets ou um canal do Slack.",
        },
        {
          title: "Veja de quem são os modelos e quem paga a conta",
          text: "A maioria das plataformas revende o uso de modelos como créditos ou licenças. Se você já paga pelo Claude Code ou pelo Codex, ferramentas que rodam nessa assinatura (o projeto open source ai-employees, o Crewmark) acrescentam pouco ou nenhum custo de modelo.",
        },
        {
          title: "Veja como ele pede permissão antes de agir",
          text: "Um funcionário que envia e-mails, publica posts ou gasta dinheiro deve perguntar antes. Procure aprovações, regras de escalonamento e um registro do que ele fez.",
        },
        {
          title: "Teste um cargo por duas semanas",
          text: "Use o plano gratuito ou o teste, se houver, meça o número que você anotou e só então adicione outros cargos.",
        },
      ],
    },
    {
      kind: "text",
      title: "As plataformas em mais detalhes",
      points: [
        "Lindy: vendida como \"a colega que entrega mais do que custa\" (\"the teammate that punches above its price\"). As Routines rodam em um agendamento, você pode mandar mensagem para ela no Slack ou no iMessage, e o \"Watch and Learn\" grava uma tarefa que você mostra uma única vez. Preços: [lindy.ai/pricing](https://www.lindy.ai/pricing).",
        "Sintra: mais de 12 assistentes com nome, como Cassie para suporte, Seomi para SEO e Soshie para redes sociais, cada um funcionando como um chatbot com quem você conversa. Um único assistente custa $39/mês. Preços: [sintra.ai/pricing](https://sintra.ai/pricing).",
        "Marblism: sete funcionários de IA (Eva, Sonny, Stan, Walter, Penny, Rachel e Linda) que, depois que você define uma meta, \"trabalham nela todos os dias, por conta própria\" (\"work toward it every day, on their own\"); os planos incluem 50 horas de trabalho de IA por mês. Preços: [marblism.com/pricing](https://www.marblism.com/pricing).",
        "Artisan: \"funcionários de IA para equipes de go-to-market\" (\"AI employees for go-to-market teams\"). A Ava encontra leads, enriquece os dados, escreve a prospecção, responde às respostas e agenda reuniões, com aprovações humanas. Veja [artisan.co](https://www.artisan.co).",
        "Ema: um \"funcionário de IA universal\" (\"Universal AI Employee\") que você configura descrevendo a meta dele em linguagem comum, para RH, TI, finanças e mais. Veja [ema.ai](https://www.ema.ai).",
        "Devin: \"o engenheiro de software autônomo da sua equipe\" (\"your team's autonomous software engineer\"). Atribua um ticket e receba um pull request; o Max custa $200/mês e o Teams $80/mês mais $40 por licença. Preços: [devin.ai/pricing](https://devin.ai/pricing).",
        "ai-employees: um projeto no GitHub com licença MIT em que \"um funcionário de IA é uma pasta de rotinas agendadas que cobre um cargo de negócio\" (\"an AI Employee is a folder of scheduled routines that covers one business role\"), executado pelo agente de programação que você já tem. Veja [github.com/markfulton/ai-employees](https://github.com/markfulton/ai-employees).",
        "Crewmark: transforma uma sessão do Claude Code, Codex, DeepSeek Harness ou OpenCode em um funcionário com cargo, meta, horário de trabalho e um quadro de tarefas; ele comenta nas próprias tarefas e manda mensagem quando precisa de uma decisão sua. Veja [como deixar o Claude Code proativo](/proactive-claude-code).",
      ],
    },
    {
      kind: "text",
      title: "Funcionários de IA grátis e open source no GitHub",
      text: [
        "Existem planos gratuitos, mas são pequenos: a Lindy dá $50 em créditos por sete dias, o Devin uma cota pequena e a Ema um teste. O caminho open source é grátis em dinheiro e cobra em tempo de configuração: projetos no GitHub como markfulton/ai-employees rodam em uma assinatura de agente que você já tem, e em um plano Claude Pro ou Max usam os limites do seu plano em vez de dólares a mais.",
        "Se você está comparando frameworks de agentes open source em vez de funcionários prontos, veja nossas comparações com [CrewAI](/alternatives/crewai), [Paperclip](/alternatives/paperclip) e [Multica](/alternatives/multica).",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Com o Crewmark",
      title: "Funcionários de IA no agente de programação que você já paga",
      text: [
        "O Crewmark é para equipes cujo trabalho já passa pelo Claude Code ou pelo Codex. Em vez de comprar uma nova IA e os créditos dela, você dá um emprego ao agente que já tem.",
      ],
      steps: [
        {
          title: "Escolha um cargo e uma meta",
          text: "Engenheiro de software, especialista em SEO, profissional de growth marketing ou um cargo que você mesmo escreve, com uma meta em números.",
        },
        {
          title: "Conecte uma sessão",
          text: "Rode um comando de configuração no seu projeto; o funcionário trabalha em uma sessão do Claude Code, Codex, DeepSeek Harness ou OpenCode na sua máquina, no seu plano.",
        },
        {
          title: "Atribua tarefas; o heartbeat faz o resto",
          text: "Durante o horário de trabalho, o funcionário acorda a cada 15, 30 ou 60 minutos, pega a próxima tarefa, comenta enquanto avança e manda mensagem quando precisa de uma decisão sua.",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Escolher uma plataforma de funcionários de IA" },
  mid: {
    title: "Já paga pelo Claude Code ou pelo Codex?",
    text: "O Crewmark transforma essa assinatura em funcionários de IA com cargos, metas, horários de trabalho e um quadro de tarefas, sem uma segunda conta de IA.",
    button: "Acesso antecipado",
  },
  faq: {
    title: "Perguntas frequentes sobre plataformas de funcionários de IA",
    items: [
      {
        q: "Qual é a melhor plataforma de funcionários de IA?",
        a: "Depende da função. Para trabalho de escritório em várias áreas, Lindy; para marketing e suporte em pequenas empresas, Sintra ou Marblism; para vendas outbound, Artisan; para RH e TI em grandes empresas, Ema; para código, Devin; e, se você já usa o Claude Code ou o Codex, o projeto open source ai-employees ou o Crewmark.",
      },
      {
        q: "Existem funcionários de IA grátis?",
        a: "Algumas plataformas têm planos gratuitos ou testes pequenos: Lindy ($50 em créditos por 7 dias), Devin (uma cota pequena) e Ema (um teste). Projetos open source como markfulton/ai-employees são gratuitos e rodam em uma assinatura de agente que você já tem.",
      },
      {
        q: "Quanto custa um funcionário de IA?",
        a: "Em 6 de novembro de 2026, os planos de entrada iam de cerca de $20 por mês (Devin Pro) a $49.99 por usuário (Lindy Team), com preço sob consulta para Artisan e Ema. Ferramentas que rodam no seu próprio plano do Claude Code ou do Codex acrescentam pouco ou nenhum custo de modelo.",
      },
      {
        q: "Qual é a diferença entre um funcionário de IA e um agente de IA?",
        a: "Um agente de IA faz uma tarefa quando você pede. Um funcionário de IA é um agente com cargo, meta e horário, então ele começa a trabalhar sozinho e continua. Saiba mais em [o que é um funcionário de IA](/ai-employees).",
      },
      {
        q: "Uma pequena empresa pode usar funcionários de IA?",
        a: "Sim. A Sintra e a Marblism foram feitas para pequenas empresas, com funcionários com nome para suporte, redes sociais, SEO e vendas, e preços de cerca de $24 a $49 por mês.",
      },
      {
        q: "Existem funcionários de IA open source no GitHub?",
        a: "Sim. O markfulton/ai-employees (MIT) empacota 8 cargos de negócio como rotinas agendadas para Claude Code, Codex, OpenCode e outros agentes; outros projetos são o OpenCompany e o eggent.",
      },
      {
        q: "Como contratar um funcionário de IA?",
        a: "Escolha um cargo e um número que ele deve mover, escolha uma plataforma que comece a trabalhar sozinha e pergunte antes de ações arriscadas, rode por duas semanas e mantenha só se o número mudar.",
      },
    ],
  },
  cta: {
    title: "Dê um emprego ao agente que você já paga.",
    text: "O Crewmark transforma sessões do Claude Code, Codex e DeepSeek Harness em funcionários de IA com cargos, metas, horários de trabalho e um heartbeat.",
    button: "Acesso antecipado",
  },
  checked: "Conferido no site e na página de preços de cada fornecedor em 6 de novembro de 2026. Os preços mudam; siga os links para ver os atuais.",
  disclaimer:
    "O Crewmark é um dos produtos comparados. Os nomes dos produtos são marcas dos respectivos titulares; nenhum fornecedor revisou ou endossou esta página.",
};
