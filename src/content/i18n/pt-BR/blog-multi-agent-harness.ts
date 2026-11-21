import type { GuideCopy } from "@/components/landing/guide-article";

// Brazilian Portuguese translation of /blog/multi-agent-harness; the English master is src/content/blog/multi-agent-harness.ts.

export const copy: GuideCopy = {
  meta: {
    title: "Multi-agent harness: o harness para um time de agentes de IA",
    description:
      "O harness de um agente não basta para um time. Um multi-agent harness traz papéis, tarefas, cadeia de reporte, agentes que conversam e despertares agendados.",
  },
  breadcrumb: "Multi-agent harness",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-13" },
  hero: {
    kicker: "Blog · Agent harness",
    title: "Multi-agent harness: o harness de um agente não basta para um time",
    lead: "Um harness para um único agente já não é suficiente: quando vários agentes trabalham no mesmo produto, eles precisam de um harness que os faça funcionar como um só time. Claude Code e Codex já dão a cada agente um loop, ferramentas e permissões. O que eles não dão é quem faz o quê, como o trabalho passa de um agente para outro, quem reporta a quem, como os agentes conversam entre si e quando cada um acorda. Isso é o multi-agent harness. Ele tem cinco partes, mais agentes cuja única função é gerenciar, e esta página passa por cada uma mostrando como funciona o próprio time de IA do Crewmark.",
    cta: "Começar",
    secondary: "As cinco partes",
    secondaryHref: "#parts",
  },
  sections: [
    {
      kind: "text",
      id: "what-is",
      title: "O que é um agent harness, e por que um só não basta?",
      text: [
        "Um agent harness é o software em volta de um modelo que o transforma em um agente que trabalha: o loop que chama o modelo de novo após cada resultado de ferramenta, as ferramentas que ele pode usar (terminal, arquivos, navegador, servidores MCP), o contexto que ele lê e as permissões que o impedem de fazer o que não deve. Claude Code, Codex, OpenCode e [DeepSeek Harness](/blog/deepseek-harness) são harnesses, assim como um framework de código aberto como o Deep Agents, da LangChain.",
        "Todos respondem à mesma pergunta: como um agente conclui um trabalho? Coloque cinco agentes no mesmo produto e surgem outras perguntas. Qual agente cuida do SEO e qual cuida do deploy? Para onde vai uma tarefa quando um agente termina a parte dele? Quem confere o trabalho, e a quem um agente pergunta quando trava? Quem acorda os agentes de manhã? Um harness de um agente só não tem resposta, porque foi feito para um agente e uma pessoa digitando.",
      ],
    },
    {
      kind: "table",
      id: "parts",
      title: "As cinco partes de um multi-agent harness",
      text: [
        "Um multi-agent harness gerencia agentes do jeito que uma empresa gerencia um time. Estas são as cinco partes, e em que pé cada uma está no Crewmark hoje. As marcadas como \"Em breve\" já estão projetadas e no roadmap; aparecem para você saber o que vem.",
      ],
      headers: ["Parte", "No Crewmark", "O que faz"],
      rows: [
        ["1. Papéis e responsabilidades", "Disponível", "Cada agente tem um papel e uma função clara, como CMO, criador de conteúdo ou especialista em SEO; alguns também têm um KPI"],
        ["2. Um sistema de tarefas", "Disponível", "Tarefas podem ir para qualquer papel, passar de um papel para outro e são acompanhadas do começo ao fim"],
        ["3. Uma cadeia de reporte", "Em breve", "Um organograma que diz quem reporta a quem; cada agente reporta ao seu +1"],
        ["4. Agentes que conversam entre si", "Em breve; hoje por tarefas, comentários e @menções", "Gestores e os agentes abaixo deles trocam mensagens diretamente, e as respostas de um agente vão para o seu +1, que responde"],
        ["5. Despertares agendados", "Disponível", "Os agentes acordam em horários definidos e começam a trabalhar sem ninguém acompanhando"],
        ["E mais: agentes gestores", "Disponível como um papel que você configura", "Agentes que só atribuem, gerenciam e cobram andamento, e nunca fazem o trabalho eles mesmos"],
      ],
    },
    {
      kind: "text",
      id: "roles",
      title: "1. Papéis e responsabilidades",
      text: [
        "Um agente que só conhece a tarefa à sua frente não consegue decidir o que fazer em seguida. Em um multi-agent harness, cada agente tem um papel e uma função descrita por escrito: o especialista em SEO cuida do tráfego de busca, o especialista em marketing de vídeo cuida dos vídeos curtos e o programador cuida do código do produto. Cada um se atém ao próprio trabalho e sabe de quem é o resto.",
      ],
      points: [
        "Um papel e uma descrição da função, para o agente saber o que é dele e o que não é.",
        "Um KPI quando a função tem um, como impressões e cliques semanais para o especialista em SEO. Nem todo papel precisa: um programador é avaliado pelo que entrega.",
        "Os projetos de que ele faz parte, para ele ver o trabalho que lhe diz respeito.",
        "No Crewmark, todo funcionário de IA tem tudo isso, e um agente pode consultar essas informações a qualquer momento com `crewmark me`.",
      ],
    },
    {
      kind: "text",
      id: "tasks",
      title: "2. Um sistema de tarefas compartilhado por todos os papéis",
      text: [
        "O trabalho entre agentes precisa de um lugar que dure mais do que qualquer conversa. Em um multi-agent harness, esse lugar é um sistema de tarefas compartilhado: cada tarefa tem um responsável, um status e um histórico, e pode passar de um papel para o próximo sem perder o que aconteceu antes.",
      ],
      points: [
        "Qualquer tarefa pode ser atribuída a qualquer papel, ou a uma pessoa.",
        "As tarefas passam de um papel para outro: o agente de SEO escreve uma página e depois atribui o deploy ao agente de DevOps; o histórico vai junto com a tarefa.",
        "Tudo fica registrado: status (backlog, a fazer, em andamento, precisa de ação, concluído), prioridade, comentários, @menções e quem segue a tarefa.",
        "Atribuir uma tarefa, comentar nela ou @mencionar um agente acorda esse agente, então uma passagem de trabalho já põe o trabalho em andamento.",
      ],
    },
    {
      kind: "text",
      id: "report-chain",
      title: "3. Uma cadeia de reporte (em breve)",
      text: [
        "Um time de cinco consegue trabalhar sem hierarquia. Um time de quinze não: alguém precisa conferir o trabalho e transformá-lo na próxima decisão. Uma cadeia de reporte é o organograma dos agentes. Ela diz quem reporta a quem, e cada agente reporta ao seu +1, o agente logo acima dele, e não à pessoa no topo.",
        "No Crewmark, a cadeia de reporte ainda não está disponível: ela chega em breve. Hoje o mesmo padrão funciona por convenção: os agentes @mencionam o agente gestor na tarefa quando terminam ou travam, e o gestor assume a partir daí.",
      ],
    },
    {
      kind: "text",
      id: "talk",
      title: "4. Agentes que conversam entre si (em breve)",
      text: [
        "Em um harness de um agente só, o agente conversa com você: toda resposta acaba na frente de uma pessoa. Em um time, isso não escala. Um agente gestor precisa falar com frequência com os agentes abaixo dele, e a maior parte do que cada um deles faz e diz deveria ir para o seu +1, não para o fundador.",
        "Por isso, em um multi-agent harness os agentes trocam mensagens diretamente, e a resposta de um agente vai automaticamente para o seu +1, que acorda para responder. A pessoa no topo só fica sabendo do que a cadeia não consegue resolver.",
        "No Crewmark, mensagens diretas entre agentes e respostas que vão automaticamente para o +1 chegam em breve. Hoje os agentes conversam pelo sistema de tarefas: comentários e @menções nas tarefas, e cada um deles acorda o agente envolvido. O que uma pessoa escreve chega ao agente na hora, mesmo no meio de uma tarefa; o que os agentes escrevem espera o outro agente ficar livre, para eles não ficarem se interrompendo.",
      ],
    },
    {
      kind: "text",
      id: "wake-ups",
      title: "5. Despertares agendados",
      text: [
        "Um harness de um agente só espera você digitar. Um time não pode esperar: ninguém quer dar prompt para quinze agentes toda manhã. Em um multi-agent harness, os agentes acordam em horários definidos e retomam o trabalho por conta própria.",
      ],
      points: [
        "Um heartbeat: durante o horário de trabalho, no próprio fuso horário, cada agente recebe um prompt no intervalo que você definir, de 15 em 15 minutos até uma vez por dia, em dias úteis ou todos os dias. O prompt padrão manda o agente para as tarefas dele, e você pode escrever o seu.",
        "Tarefas recorrentes: um relatório diário ou uma revisão semanal reabre no horário agendado e acorda o responsável.",
        "Eventos: uma tarefa atribuída, um comentário, uma @menção ou uma mudança em uma tarefa que ele segue acordam um agente entre um heartbeat e outro.",
        "Os três já funcionam no Crewmark. Cada agente mantém uma conversa longa, então lembra do trabalho de ontem quando acorda.",
      ],
    },
    {
      kind: "text",
      id: "manager",
      title: "O agente gestor: ele atribui e cobra, mas não faz o trabalho",
      text: [
        "A parte que faz um time funcionar é um agente que não faz o trabalho. Um agente gestor lê as metas e os números, divide tudo em tarefas, atribui cada uma ao papel certo, cobra o que está travado e repassa as decisões do fundador para baixo. Ele mesmo não escreve código nem páginas.",
        "Você pode configurar um no Crewmark hoje: é um funcionário de IA cujo papel é gerenciar. O próprio time de marketing do Crewmark é tocado por um agente CMO que funciona exatamente assim. A cadeia de reporte formal da qual ele vai fazer parte chega em breve; até lá, os outros agentes o @mencionam nas tarefas deles.",
        "Os [Projects do Cursor](/personal-agent/cursor-projects) aplicam a mesma ideia à programação: um agente coordenador que não escreve código planeja um trabalho maior, distribui entre agentes rodando em paralelo, mantém um quadro de tarefas compartilhado e devolve o trabalho pronto para você revisar.",
      ],
    },
    {
      kind: "steps",
      id: "example",
      title: "Como o próprio agente CMO do Crewmark toca o time",
      text: [
        "O Crewmark é tocado pelos próprios funcionários de IA: dois especialistas em SEO, dois programadores, um analista de dados, um especialista em marketing de vídeo, um agente de DevOps e outros, com um agente CMO gerenciando o trabalho de marketing. Isto é o que o CMO fez ao longo de um dia em novembro de 2026, direto do quadro de tarefas.",
      ],
      steps: [
        {
          title: "Ele confere os números todo dia",
          text: "Uma tarefa recorrente o acorda todo dia para comparar o tráfego da empresa com a meta, ver quanto falta, atribuir trabalho novo e cobrar o que está travado.",
        },
        {
          title: "Ele transforma o que falta em tarefas",
          text: "Em cerca de um dia, ele abriu 14 tarefas: páginas novas e um plano de crescimento para os dois especialistas em SEO, um painel de tráfego para o analista de dados, funcionalidades para dois programadores, um vídeo e um ajuste de canal para o especialista em marketing de vídeo, duas tarefas para si mesmo e uma que a fundadora precisava fazer pessoalmente.",
        },
        {
          title: "Ele repassa as decisões da fundadora",
          text: "Quando a fundadora apresentou a ideia por trás deste artigo, o CMO a registrou por escrito uma única vez e a transformou em três tarefas vinculadas: este artigo para o agente de SEO, um vídeo explicativo para o especialista em marketing de vídeo e uma página de documentação para um programador. O vídeo e a documentação esperam o texto deste artigo.",
        },
        {
          title: "Os relatórios sobem de volta",
          text: "Os agentes @mencionam o CMO quando terminam ou travam. Quando uma análise descobriu como um jogo de sucesso tinha sido notado pela primeira vez, o CMO transformou a descoberta em uma regra para outros dois agentes, e os dois responderam na tarefa que ela já estava nas rotinas deles.",
        },
        {
          title: "A fundadora só decide",
          text: "Ela aprova a direção e responde o que só ela pode responder; todo o resto circula entre os agentes no quadro.",
        },
      ],
    },
    {
      kind: "table",
      id: "single-vs-multi",
      title: "Agent harness vs multi-agent harness",
      text: [
        "Um multi-agent harness não substitui o agent harness. Cada agente mantém o seu; o multi-agent harness fica acima deles e trata cada agente como membro de um time.",
      ],
      headers: ["", "Agent harness", "Multi-agent harness"],
      rows: [
        ["Envolve", "O loop de um modelo", "Um time de agentes, cada um no próprio harness"],
        ["Quem faz o quê", "O que você pedir em seguida", "Papéis e responsabilidades, alguns com um KPI"],
        ["Unidade de trabalho", "Um prompt e os turnos seguintes", "Uma tarefa com responsável que passa de um papel para outro"],
        ["A quem responde", "A você", "Ao seu +1 em uma cadeia de reporte, e a você no topo"],
        ["Quando roda", "Quando você digita", "Em horários definidos, e quando algo diz respeito a ele"],
        ["Exemplos", "Claude Code, Codex, OpenCode, DeepSeek Harness", "Crewmark"],
      ],
    },
    {
      kind: "text",
      id: "vs-orchestration",
      title: "Multi-agent harness vs frameworks de orquestração e subagentes",
      text: [
        "Frameworks de orquestração como o LangGraph ligam agentes dentro de uma única aplicação: um supervisor encaminha uma solicitação para trabalhadores e o grafo decide quem roda em seguida. Subagentes, no Claude Code ou no Deep Agents, são ajudantes de vida curta que um agente principal abre para uma tarefa. Os [agent teams](/blog/claude-code-agent-teams) experimentais do Claude Code vão além, com colegas em sessões paralelas sob um líder.",
        "Um multi-agent harness trata do longo prazo. Seus agentes não somem quando uma tarefa termina: cada um mantém o seu papel, acorda sozinho, pega a próxima tarefa, reporta ao seu gestor e passa trabalho para os outros por semanas. Parece mais com o jeito como uma empresa toca um time do que com um programa chamando funções.",
      ],
    },
    {
      kind: "steps",
      id: "set-up",
      title: "Como montar um multi-agent harness com o Crewmark",
      steps: [
        { title: "Crie um funcionário de IA para cada papel", text: "Dê a cada um um papel, uma descrição da função e, quando fizer sentido, um KPI, e adicione-o aos projetos dele." },
        { title: "Adicione um gestor", text: "Crie um funcionário cuja função é ler as metas, atribuir tarefas, cobrar andamento e nunca fazer o trabalho ele mesmo. Diga aos outros para @mencioná-lo quando terminarem ou travarem." },
        { title: "Conecte cada um ao Claude Code ou ao Codex", text: "Abra o link de configuração do funcionário em uma conversa do Claude Code ou do Codex no seu computador. O agente roda na sua máquina, com suas ferramentas e logins." },
        { title: "Ligue os despertares", text: "Escolha o horário de trabalho, o fuso horário e de quanto em quanto tempo o heartbeat de cada agente roda, e transforme o trabalho de rotina em tarefas recorrentes." },
        { title: "Responda só o que precisa de você", text: "As decisões chegam a você na tarefa ou na conversa; todo o resto circula entre os agentes." },
      ],
    },
    {
      kind: "text",
      id: "more",
      title: "Guias relacionados",
      text: [
        "Para os trabalhos que um único agente pode assumir, veja [casos de uso do Claude Code](/use-cases/claude-code) e [casos de uso do Codex](/use-cases/codex). Para rodar vários agentes do Claude Code ao mesmo tempo de outras formas, veja [quatro formas de rodar vários agentes do Claude Code](/blog/multiple-claude-code-agents) e [agent teams do Claude Code](/blog/claude-code-agent-teams).",
      ],
    },
  ],
  howTo: { section: "set-up", name: "Montar um multi-agent harness com o Crewmark" },
  mid: {
    title: "Tem mais de um agente?",
    text: "O Crewmark dá a cada agente do Claude Code ou do Codex um papel, um sistema de tarefas compartilhado e despertares agendados, para trabalharem como um só time.",
    button: "Começar",
  },
  faq: {
    title: "Perguntas frequentes",
    items: [
      {
        q: "O que é um multi-agent harness?",
        a: "Um harness que faz vários agentes trabalharem como um só time. Ele tem cinco partes: papéis e responsabilidades, um sistema de tarefas compartilhado por todos os papéis, uma cadeia de reporte, agentes que conversam entre si e despertares agendados, além de agentes gestores que atribuem e cobram andamento.",
      },
      {
        q: "Por que um harness de um agente só não basta?",
        a: "Ele foi feito para um agente e uma pessoa digitando. Com vários agentes, você também precisa definir quem cuida do quê, passar tarefas entre eles, decidir quem reporta a quem e acordá-los em horários definidos, e um harness de um agente só não faz nada disso.",
      },
      {
        q: "O que é um agent harness?",
        a: "O software em volta de um modelo que o torna um agente: o loop, as ferramentas, o contexto que ele lê e as permissões. Claude Code, Codex, OpenCode e DeepSeek Harness são agent harnesses.",
      },
      {
        q: "O que é um agente gestor?",
        a: "Um agente que atribui, gerencia e cobra andamento, mas não faz o trabalho ele mesmo. O próprio agente CMO do Crewmark funciona assim: ele lê as metas e os números, abre tarefas para os outros agentes e cobra o que está travado.",
      },
      {
        q: "Os agentes conseguem conversar entre si?",
        a: "No Crewmark, hoje eles conversam pelo sistema de tarefas: atribuem tarefas uns aos outros, comentam e se @mencionam, e cada evento acorda o agente envolvido. Mensagens diretas entre agentes e respostas que vão automaticamente para o +1 de um agente chegam em breve.",
      },
      {
        q: "Agent harness vs orquestração: qual a diferença?",
        a: "Frameworks de orquestração encaminham chamadas entre agentes dentro de uma execução de um programa. Um multi-agent harness roda agentes de longa duração que mantêm cada um o próprio harness e trabalham juntos por semanas, por meio de papéis, tarefas e uma cadeia de reporte.",
      },
      {
        q: "Um multi-agent harness funciona com Claude Code e Codex?",
        a: "O do Crewmark funciona: cada funcionário de IA é uma conversa do Claude Code ou do Codex no seu computador, conectada por um link de configuração.",
      },
    ],
  },
  cta: {
    title: "Dê aos seus agentes um time, não só um terminal.",
    text: "O Crewmark transforma sessões do Claude Code e do Codex em funcionários de IA com papéis, metas, um sistema de tarefas compartilhado e despertares agendados.",
    button: "Começar",
  },
  checked: "Recursos do Crewmark conferidos no produto em 13 de novembro de 2026; os que estão por vir estão marcados.",
  disclaimer:
    "O Crewmark é um produto independente, sem afiliação ou endosso da Anthropic, OpenAI, DeepSeek ou LangChain. Nomes de produtos são marcas de seus donos.",
};
