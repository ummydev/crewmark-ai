import type { GuideCopy } from "@/components/landing/guide-article";

// Brazilian Portuguese translation of /blog/github-copilot-slack; the English master is src/content/blog/github-copilot-slack.ts.

const docs = "https://docs.github.com/en/copilot/how-tos/copilot-integrations/integrate-cloud-agent-with-slack";

const prompts = `@GitHub Add "Hello World" to the README in octo-org/octo-repo on the develop branch

@GitHub settings      # escolha os repositórios padrão deste canal
@GitHub help          # lista os comandos`;

export const copy: GuideCopy = {
  meta: {
    title: "GitHub Copilot no Slack: configuração e alternativas",
    description:
      "O @GitHub no Slack e no Teams está disponível para todos desde 6 de novembro de 2026. Como configurar, o que o agente do Copilot faz a partir de uma thread, permissões e limites, e como ele se compara ao Claude Code no Slack.",
  },
  breadcrumb: "GitHub Copilot no Slack",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-07" },
  hero: {
    kicker: "Blog · Agentes de programação com IA",
    title: "GitHub Copilot no Slack: transforme uma thread de chat em um pull request",
    lead: "Com o GitHub Copilot no Slack, você menciona o `@GitHub` em uma thread e o agente de nuvem do Copilot investiga um bug, abre issues, escreve a mudança e abre um pull request, usando a conversa como contexto. Ele ficou disponível para todos no Slack e no Microsoft Teams em 6 de novembro de 2026. Este guia mostra como configurar, o que ele faz e o que não faz, quem pode acioná-lo e como ele se compara ao Claude Code no Slack e a um funcionário de IA sempre ativo.",
    cta: "Começar",
    secondary: "Ir para a configuração",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "O que o @GitHub faz no Slack e no Teams",
      points: [
        "Investiga, planeja, escreve código e abre issues e pull requests a partir de uma thread de chat, usando a thread inteira como contexto.",
        "Trabalha de forma assíncrona em um sandbox na nuvem e publica um resumo com links para o que criou.",
        "Cria uma issue, várias, ou issues pai e filhas; trabalha em até 11 repositórios da mesma organização ou conta.",
        "Permite escolher o modelo, usar servidores MCP configurados pelos admins do repositório e o Copilot Memory (em preview).",
        "Desde a versão de 6 de novembro, ele escolhe o repositório a partir da sua mensagem, registra em cada issue e PR de qual conversa e usuário veio o pedido e, no Teams, mostra planos, diffs e prévias em um Canvas ao lado do chat.",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Como configurar o GitHub Copilot no Slack",
      steps: [
        {
          title: "Confira se você pode usar",
          text: "Você precisa de um plano pago do Copilot e de acesso de escrita aos repositórios que quer alterar. Em organizações e empresas, a política “Copilot in the cloud” vem ativada por padrão, mas um owner pode desativá-la; em repositórios de uma empresa, um admin instala o app e escolhe quais repositórios ele pode acessar.",
        },
        {
          title: "Instale o app do GitHub para Slack",
          text: "Adicione a integração do GitHub ao seu workspace em slack.github.com (para o Teams, teams.github.com).",
        },
        {
          title: "Conecte sua conta",
          text: "Abra uma mensagem direta com o app do GitHub, ou digite `@GitHub` em uma thread, e siga as instruções para vincular sua conta do GitHub. `@GitHub help` lista os comandos.",
        },
        {
          title: "Defina os repositórios padrão de um canal",
          text: "Rode `@GitHub settings` em um canal para escolher um owner e os repositórios; o primeiro vira o principal. Mensagens diretas não têm padrão, então informe o repositório e a branch no prompt.",
        },
        {
          title: "Peça o trabalho em linguagem natural",
          text: "Mencione o `@GitHub` com a tarefa, ou responda a uma notificação do GitHub com ela. O Copilot lê a thread, trabalha na nuvem e responde com links para a issue ou o pull request.",
          code: prompts,
        },
      ],
      source: { label: "Fonte: GitHub Docs, Integrate Copilot cloud agent with Slack", href: docs },
    },
    {
      kind: "text",
      title: "Permissões e limites",
      points: [
        "Só quem tem acesso de escrita a todos os repositórios selecionados pode iniciar ou direcionar uma sessão; qualquer pessoa na thread pode contribuir.",
        "Convidados e colaboradores externos não podem iniciar nem direcionar sessões.",
        "Em uma mensagem direta, o Copilot age com as permissões da sua conta vinculada; em um canal compartilhado, ele cria issues e PRs com a identidade do app.",
        "A thread inteira é capturada como contexto e fica guardada no pull request resultante, então mantenha segredos fora da conversa.",
        "O anúncio do GitHub não detalha a cobrança das sessões pelo Slack; verifique o uso do Copilot no seu plano antes de liberar para todo mundo.",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "GitHub Copilot no Slack vs Claude Code no Slack vs um funcionário de IA",
      headers: ["", "GitHub Copilot no Slack", "Claude Code no Slack", "Funcionário de IA do Crewmark"],
      rows: [
        ["Como o trabalho começa", "Mencione o `@GitHub` ou mande DM para o app", "Mencione o `@Claude` em um canal do time", "Um heartbeat no horário de trabalho pega a próxima issue; você também pode atribuí-la"],
        ["Onde roda", "No sandbox na nuvem do GitHub", "Na nuvem da Anthropic (Claude Code on the web)", "Na sua máquina, no Claude Code, Codex, DeepSeek Harness ou OpenCode"],
        ["O que entrega", "Issues e pull requests", "Pull requests e revisões", "Trabalho em qualquer issue do quadro, com comentários e mensagens para você"],
        ["Planos", "Planos pagos do Copilot", "Pro, Max e Ultra, com o Claude Code on the web ativado", "A assinatura de agente que você já tem"],
        ["Continua sem você", "Não: uma tarefa por menção", "Não: uma tarefa por menção", "Sim, durante o horário de trabalho"],
      ],
    },
    {
      kind: "text",
      title: "Quando um bot de chat basta, e quando não basta",
      text: [
        "O Copilot no Slack é ótimo para o momento em que um relato de bug cai em uma thread: uma menção e vem um pull request. Mas ele continua reativo: nada acontece até alguém pedir, e cada menção é uma tarefa. Se você quer um agente que avance sozinho por um backlog, com um papel e metas, veja os [funcionários de IA](/ai-employees) e [como tornar o Claude Code proativo](/proactive-claude-code). Para mais formas de rodar vários agentes, veja as [ferramentas de orquestração para o Claude Code](/blog/claude-code-orchestration-tools).",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Com o Crewmark",
      title: "De “marcar o bot” a um funcionário que pega a próxima tarefa",
      text: [
        "O Crewmark transforma uma sessão do Claude Code, Codex, DeepSeek Harness ou OpenCode em um funcionário de IA com um papel, uma meta e um horário de trabalho. Ele acorda com um heartbeat, pega a próxima issue de um quadro compartilhado, comenta enquanto trabalha e manda mensagem para você quando precisa de uma decisão.",
      ],
      steps: [
        {
          title: "Atribua trabalho como faria no chat",
          text: "Crie uma issue e atribua, de qualquer navegador ou do seu celular; o funcionário fica sabendo na hora.",
        },
        {
          title: "Deixe ele seguir em frente",
          text: "Entre as suas mensagens, ele avança pelas issues dele com um heartbeat de 15, 30 ou 60 minutos.",
        },
        {
          title: "Mantenha o Copilot para correções rápidas",
          text: "Um não atrapalha o outro: use o `@GitHub` para pedidos pontuais em uma thread e um funcionário para o backlog contínuo.",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Configurar o GitHub Copilot no Slack" },
  mid: {
    title: "Quer um agente que não espera ser mencionado?",
    text: "O Crewmark acorda o Claude Code ou o Codex com um heartbeat, com um papel, uma meta e um quadro de issues.",
    button: "Começar",
  },
  faq: {
    title: "Perguntas frequentes sobre o GitHub Copilot no Slack",
    items: [
      {
        q: "O GitHub Copilot no Slack está disponível para todos?",
        a: "Sim. O GitHub anunciou em 6 de novembro de 2026 que o @GitHub no Slack e no Teams está disponível para todos.",
      },
      {
        q: "Como adiciono o GitHub Copilot ao Slack?",
        a: "Instale o app do GitHub para Slack em slack.github.com, depois mande uma DM para o app ou mencione o `@GitHub` em uma thread e vincule sua conta do GitHub. Use `@GitHub settings` para definir os repositórios padrão de um canal.",
      },
      {
        q: "Qual plano preciso para usar o Copilot no Slack?",
        a: "Um plano pago do Copilot, além de acesso de escrita aos repositórios que ele deve alterar. Owners de organizações podem desativar a política “Copilot in the cloud”, da qual ele depende.",
      },
      {
        q: "O GitHub Copilot no Slack consegue abrir pull requests?",
        a: "Sim. Ele investiga, escreve a mudança em um sandbox na nuvem e abre o pull request, depois publica na thread um resumo com links.",
      },
      {
        q: "Funciona no Microsoft Teams?",
        a: "Sim. O @GitHub também está disponível para todos no Teams, onde um Canvas mostra planos, mudanças de código e prévias ao lado da conversa.",
      },
      {
        q: "Quem pode acionar o Copilot em um canal do Slack?",
        a: "Só quem tem acesso de escrita a todos os repositórios selecionados pode iniciar ou direcionar uma sessão. Os outros na thread podem contribuir; convidados e colaboradores externos não podem acioná-lo.",
      },
      {
        q: "GitHub Copilot no Slack ou Claude Code no Slack?",
        a: "Os dois transformam uma menção no Slack em uma tarefa de programação na nuvem. O Copilot funciona com um plano pago do Copilot e cria issues e PRs; o Claude Code no Slack exige um plano Claude Pro, Max ou Ultra com o Claude Code on the web.",
      },
    ],
  },
  cta: {
    title: "Dê ao seu time um colega de IA que não espera ser chamado.",
    text: "O Crewmark transforma sessões do Claude Code, Codex, DeepSeek Harness e OpenCode em funcionários de IA com papéis, metas, horários de trabalho e um heartbeat.",
    button: "Começar",
  },
  checked: "Conferido com o changelog do GitHub (6 de novembro de 2026), o GitHub Docs e a documentação do Claude Code da Anthropic em 7 de novembro de 2026.",
  disclaimer:
    "O Crewmark é um produto independente, sem vínculo com o GitHub, a Microsoft, o Slack ou a Anthropic e sem endosso deles. Os nomes dos produtos são marcas dos respectivos titulares.",
};
