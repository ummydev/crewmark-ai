import type { GuideCopy } from "@/components/landing/guide-article";

// pt-BR translation of /ai-employees; the English master is src/content/ai-employees.ts.
export const copy: GuideCopy = {
  meta: {
    title: "Funcionário de IA: definição e exemplos | Crewmark AI",
    description:
      "Funcionário de IA é um agente com cargo, meta e horário de trabalho que pega tarefas de um quadro. Veja a diferença, exemplos e como contratar.",
  },
  breadcrumb: "Funcionários de IA",
  hero: {
    kicker: "Funcionários de IA",
    title: "O que é um funcionário de IA?",
    lead: "Um funcionário de IA é um agente de IA a quem você dá um trabalho em vez de um prompt: um cargo, uma meta medida em números, um horário de trabalho e um lugar para receber tarefas. Ele acorda sozinho, pega a próxima tarefa, informa o andamento e pergunta a você quando trava, como faria alguém recém-contratado. Este guia explica a diferença entre ele e um agente de IA ou um chatbot, mostra exemplos por cargo e mostra passo a passo como contratar o primeiro.",
    cta: "Começar",
    secondary: "Ver exemplos",
    secondaryHref: "#examples",
  },
  sections: [
    {
      kind: "text",
      title: "Funcionário de IA: uma definição",
      text: [
        "Um funcionário de IA é um agente de IA autônomo configurado para fazer um trabalho contínuo, não uma tarefa isolada. Ele tem as mesmas partes de um cargo ocupado por uma pessoa:",
      ],
      points: [
        "Um cargo, como especialista em SEO ou engenheiro de software, que define no que ele trabalha e quais ferramentas usa.",
        "Uma meta em números, como 10% mais cliques no Search Console por mês, para a qual ele planeja o trabalho.",
        "Horário de trabalho e um heartbeat: ele acorda em intervalos definidos durante o expediente e dorme fora dele.",
        "Uma fila de trabalho, geralmente um quadro de tarefas, onde você atribui tarefas a ele e acompanha o status.",
        "Um jeito de falar com você: ele pede revisões, permissões e informações que faltam em vez de chutar.",
      ],
    },
    {
      kind: "table",
      id: "vs-ai-agent",
      title: "Funcionário de IA vs agente de IA vs chatbot",
      text: [
        "Os três termos se sobrepõem, e os fornecedores os usam sem muito rigor. A diferença que importa é quem inicia o trabalho e quanto tempo ele dura.",
      ],
      headers: ["", "Chatbot", "Agente de IA", "Funcionário de IA"],
      rows: [
        ["Começa a trabalhar", "Quando você manda uma mensagem", "Quando você passa uma tarefa", "Sozinho, em horários definidos"],
        ["Escopo", "Uma resposta", "Uma tarefa, vários passos", "Um cargo contínuo"],
        ["Usa ferramentas", "Raramente", "Sim: arquivos, código, navegador, APIs", "Sim, as mesmas do agente em que roda"],
        ["Avaliado por", "A resposta", "Se a tarefa foi concluída", "Uma meta ou KPI ao longo de semanas"],
        ["Memória entre execuções", "O histórico da conversa", "Geralmente nenhuma", "Suas tarefas, comentários e anotações"],
        ["Quando trava", "Espera por você", "Para ou chuta", "Manda mensagem para você e passa para outro trabalho"],
      ],
    },
    {
      kind: "text",
      id: "examples",
      title: "Exemplos de funcionários de IA por cargo",
      text: [
        "Funcionários de IA rendem mais em trabalhos cujo resultado pode ser conferido e cuja meta pode ser contada. Seis cargos que funcionam bem hoje:",
      ],
      points: [
        "[Especialista em SEO](/ai-employees/seo-specialist): encontra palavras-chave que faltam, corrige títulos e links internos, envia sitemaps e relata o que mudou. Meta: cliques no Search Console.",
        "[Analista de growth](/ai-employees/marketing-agent): lê o funil, monta testes A/B, escreve rascunhos de anúncios e mantém as variantes vencedoras. Meta: cadastros no trial.",
        "[Social media](/ai-employees/social-media-manager): escreve e agenda posts, responde menções e aprende quais posts dão certo. Meta: seguidores ou engajamento.",
        "[Engenheiro de software](/ai-employees/software-engineer): pega bugs, abre pull requests com testes e pede revisão. Meta: pull requests mergeados.",
        "[UI designer](/ai-employees/ui-designer): ajusta tipografia, espaçamento e componentes no seu código de verdade e confere o modo escuro e a acessibilidade. Meta: telas entregues.",
        "[UI designer de apps](/ai-employees/app-designer): desenha telas para iOS e Android e confere tudo no simulador. Meta: telas de app entregues.",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Como contratar seu primeiro funcionário de IA",
      steps: [
        {
          title: "Escolha um trabalho com um número associado",
          text: "Comece por um cargo cujos resultados você consiga contar e conferir, como SEO ou correção de bugs. Escreva a meta como faria para uma pessoa: “10% mais cliques no Search Console por mês”, e não “ajudar com SEO”.",
        },
        {
          title: "Escolha o agente em que ele roda",
          text: "Um funcionário de IA precisa de um agente competente por baixo, capaz de ler arquivos, rodar comandos e usar ferramentas. Claude Code e Codex são os mais fortes hoje, e uma assinatura que você já paga pode rodá-lo, então não há uma conta de tokens à parte.",
        },
        {
          title: "Defina o horário de trabalho e o heartbeat",
          text: "Decida quando ele está de expediente e com que frequência acorda, por exemplo a cada 30 minutos, das 9:00 às 18:00, em dias úteis. É o heartbeat que o torna proativo; veja como fazer isso à mão no [Claude Code](/proactive-claude-code) ou no [Codex](/proactive-codex), ou rode uma tarefa avulsa com o [Claude Code em modo headless](/blog/claude-code-background-agents).",
        },
        {
          title: "Dê a ele um quadro, não um chat",
          text: "Atribua o trabalho como tarefas com status, prioridade e comentários. A cada heartbeat, o funcionário pega a próxima, atualiza conforme avança e deixa um registro que você pode revisar depois.",
        },
        {
          title: "Decida o que precisa do seu sim",
          text: "Liste as ações que ele pode fazer sozinho e as que exigem perguntar antes, como publicar, fazer merge, gastar dinheiro ou mexer em produção. Aprove essas ações em uma só caixa de entrada.",
        },
        {
          title: "Revise toda semana em relação à meta",
          text: "Confira o número, veja o que ele entregou e ajuste o backlog, a mesma conversa individual que você teria com uma pessoa. Só contrate um segundo funcionário quando o primeiro estiver dando retorno.",
        },
      ],
    },
    {
      kind: "text",
      title: "Quanto custa um funcionário de IA",
      text: [
        "Há dois modelos comuns. Algumas plataformas cobram por funcionário por mês e rodam o modelo para você. Outras, como o Crewmark, rodam o funcionário dentro de um agente que você já assina, como o Claude Code ou o Codex, então o custo é o plano que você já tem.",
        "De um jeito ou de outro, custa muito menos que uma contratação em tempo integral, mas não dispensa o seu tempo: reserve alguns minutos por dia para responder perguntas e revisar o trabalho, principalmente nas primeiras semanas.",
        "Para ver preços, planos gratuitos e como o trabalho começa em oito plataformas lado a lado, veja [as melhores plataformas de funcionários de IA comparadas](/blog/best-ai-employee-platforms).",
      ],
    },
    {
      kind: "text",
      title: "O que funcionários de IA (ainda) não fazem",
      points: [
        "Ser donos de uma decisão. Eles sugerem, e alguém responsável ainda aprova qualquer coisa arriscada.",
        "Trabalhar sem acesso. Um funcionário de IA só é tão útil quanto as ferramentas, contas e o contexto que você dá a ele.",
        "Substituir o julgamento em trabalhos pouco definidos. Cargos com metas vagas, muitas reuniões ou trabalho de relacionamento ainda precisam de pessoas.",
        "Rodar com o computador desligado, se trabalham com arquivos locais. Configurações na nuvem conseguem; as locais, não.",
      ],
    },
    {
      kind: "steps",
      kicker: "Com o Crewmark",
      title: "Contrate um funcionário de IA no Crewmark",
      text: [
        "O Crewmark transforma seu agente do Claude Code ou do Codex em um funcionário de IA: um cargo, uma meta, horário de trabalho e um heartbeat, com o trabalho atribuído em um quadro compartilhado.",
      ],
      steps: [
        {
          title: "Escolha um cargo no Marketplace",
          text: "Os funcionários prontos já chegam com habilidades, meta e horário configurados: especialista em SEO, analista de growth, social media, engenheiro de software, UI designer e UI designer de apps.",
        },
        {
          title: "Conecte o agente que você já paga",
          text: "Rode o comando de configuração no Claude Code, no Codex, no DeepSeek Harness ou no OpenCode. Essa conversa vira o funcionário e mantém a memória entre um despertar e outro.",
        },
        {
          title: "Atribua tarefas e responda às mensagens dele",
          text: "Ele acorda no ritmo do heartbeat, pega a próxima tarefa, comenta enquanto trabalha e manda mensagem quando precisa de uma revisão ou de uma permissão. Você também pode acompanhar pelo celular; veja o [Claude Code Remote Control](/remote-claude-code).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Como contratar seu primeiro funcionário de IA" },
  mid: {
    title: "Contrate um sem uma nova conta de tokens",
    text: "O Crewmark dá ao seu agente do Claude Code ou do Codex um cargo, uma meta e horário de trabalho, e o roda no plano que você já paga.",
    button: "Começar",
  },
  faq: {
    title: "Perguntas sobre funcionários de IA",
    items: [
      {
        q: "O que é um funcionário de IA?",
        a: "Um agente de IA configurado para fazer um trabalho contínuo: ele tem um cargo, uma meta em números, horário de trabalho e uma fila de tarefas, começa sozinho em horários definidos e pergunta a uma pessoa quando trava.",
      },
      {
        q: "Qual a diferença entre um funcionário de IA e um agente de IA?",
        a: "Um agente de IA faz uma tarefa quando você pede. Um funcionário de IA é um agente com um cargo fixo: ele começa a trabalhar sozinho, mantém um backlog e é avaliado por uma meta ao longo de semanas.",
      },
      {
        q: "Um funcionário de IA pode substituir um funcionário humano?",
        a: "Em trabalhos específicos e mensuráveis, como correções de SEO ou bugs de rotina, ele pode assumir boa parte da execução. Decisões, relacionamentos e problemas pouco claros ainda precisam de uma pessoa, e alguém precisa revisar o trabalho dele.",
      },
      {
        q: "Em que tipo de trabalho os funcionários de IA se saem bem?",
        a: "Trabalhos com resultado verificável e meta contável: SEO, experimentos de growth, posts em redes sociais, correção de bugs, refinamento de UI e telas de app.",
      },
      {
        q: "Quanto custa um funcionário de IA?",
        a: "Depende do modelo: algumas plataformas cobram por funcionário por mês, enquanto o Crewmark roda os funcionários no plano do Claude Code ou do Codex que você já paga, sem conta extra de tokens.",
      },
      {
        q: "É seguro dar acesso a um funcionário de IA?",
        a: "Dê a ele apenas o acesso de que o cargo precisa e exija sua aprovação para publicações, merges, pagamentos e mudanças em produção. Uma boa configuração registra cada passo para você poder revisar.",
      },
    ],
  },
  cta: {
    title: "Contrate seu primeiro funcionário de IA.",
    text: "Dê ao seu agente do Claude Code ou do Codex um cargo, uma meta e horário de trabalho, e atribua tarefas a ele em um quadro.",
    button: "Começar",
  },
  checked: "Última revisão em 2 de novembro de 2026.",
  disclaimer:
    "O Crewmark é um produto independente, sem vínculo com a Anthropic ou a OpenAI e sem endosso delas. Claude Code é uma marca da Anthropic; Codex é uma marca da OpenAI.",
};
