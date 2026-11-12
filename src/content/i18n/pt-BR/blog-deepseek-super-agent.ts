import type { GuideCopy } from "@/components/landing/guide-article";

// Brazilian Portuguese translation of /blog/deepseek-super-agent; the English master is src/content/blog/deepseek-super-agent.ts.

const repo = "https://github.com/deepseek-ai/dsh-superagent-prototype";

export const copy: GuideCopy = {
  meta: {
    title: "DeepSeek Super-Agent (dsh-superagent): o que é e como usar | Crewmark",
    description:
      "O Super-Agent open source da DeepSeek: agente de programação proativo para um repo do GitHub. O que faz, o que exige, como configurar e seus limites.",
  },
  breadcrumb: "DeepSeek Super-Agent",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-03" },
  hero: {
    kicker: "Blog · DeepSeek",
    title: "DeepSeek Super-Agent: o que é e como configurar",
    lead: "O dsh-superagent é o agente de programação proativo e open source da DeepSeek para um repositório do GitHub, publicado em 31 de outubro de 2026 sob a licença MIT. Ele roda no DeepSeek Harness, acompanha o GitHub e, opcionalmente, o Feishu, e transforma pedidos em pull requests, cada um trabalhado em sua própria sessão e em seu próprio diretório. Este guia explica o que ele faz, o que exige, como configurar, o que “proativo” significa na prática e como ele se compara.",
    cta: "Acesso antecipado",
    secondary: "Ir para a configuração",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "O que é o DeepSeek Super-Agent",
      text: [
        "O repositório descreve o dsh-superagent como “um agente de programação proativo para um repositório do GitHub, empacotado como um bundle para o DeepSeek Harness”. Quando alguém de uma lista de pessoas autorizadas pede trabalho, ele abre um item de trabalho (um Ticket), trabalha nele em sua própria sessão de agente e em seu próprio diretório, e responde na conversa original, por exemplo com um pull request. Um painel web mostra apenas o que precisa de uma pessoa.",
        "A DeepSeek o classifica como um protótipo de pesquisa, “não um produto oficial da DeepSeek”. O código público difere da versão interna da DeepSeek, e alguns designs do artigo da DeepSeek são direções futuras que o protótipo não implementa.",
      ],
      points: [
        "Fontes: notificações do GitHub, issues e pull requests assinados, mudanças de CI e pull requests mesclados ou fechados; chats do Feishu, se você os adicionar.",
        "Trabalho em paralelo: cada Ticket tem sua própria sessão de execução chamada `worker-<ticket id>` e seu próprio diretório, normalmente um checkout com `git worktree`, até um limite de concorrência que você define.",
        "Acompanhamento: comentários posteriores em uma issue ou pull request chegam ao Ticket que trabalha nela, sem mencionar o agente de novo.",
        "A regra que ele segue: “exigir o mínimo possível de atenção humana e entregar o máximo possível de valor”. Ele confirma um pedido uma vez, fica em silêncio enquanto trabalha e só escreve de novo com um resultado, uma pergunta ou uma falha.",
      ],
    },
    {
      kind: "table",
      title: "É mesmo proativo? Os três modos de aceitação",
      text: [
        "A imprensa descreve um agente que corrige bugs antes de você pedir. A documentação é mais cuidadosa: um pedido direto de uma pessoa autorizada sempre funciona, mas o trabalho que ninguém pediu precisa de uma regra escrita pela sua equipe, e o modo padrão apenas registra o que o agente teria feito.",
      ],
      headers: ["Modo de aceitação", "O que acontece com o trabalho que ninguém pediu"],
      rows: [
        ["`off`", "Ignorado: só pedidos diretos de pessoas autorizadas iniciam trabalho"],
        ["`observe` (padrão)", "Avaliado com as suas regras e registrado como “aceitaria”, mas nada é iniciado"],
        ["`auto`", "Iniciado quando atende a pelo menos uma das suas regras"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Como configurar o dsh-superagent",
      text: [
        "Você precisa do Node.js 22.19+ ou 24+, pnpm, git 2.32+, tmux, Python 3.8+, GitHub CLI 2.48+, DeepSeek Harness 0.2.1-alpha.2 ou uma versão 0.2 posterior, e um provedor de modelo configurado no DeepSeek Harness. A configuração é longa, por isso o repositório faz o seu agente de programação conduzir você passo a passo.",
      ],
      steps: [
        {
          title: "Instale o DeepSeek Harness",
          text: "O DeepSeek Harness (`dsh`) é o harness de agentes open source da DeepSeek, em prévia para desenvolvedores. Inicie-o uma vez e configure um provedor de modelo; a interface web abre em `http://127.0.0.1:3080`.",
          code: "npx @deepseek-ai/dsh web",
        },
        {
          title: "Clone o repositório e entregue o SETUP.md ao seu agente de programação",
          text: "No checkout, peça ao seu agente de programação para ler o SETUP.md. Ele examina a sua máquina, faz uma pergunta por mensagem, mostra o plano completo uma vez e só então instala qualquer coisa.",
          code: `git clone ${repo}.git\ncd dsh-superagent-prototype\n# depois peça ao seu agente de programação:\n# Read SETUP.md in this repository and set up dsh-superagent with me.`,
        },
        {
          title: "Responda às perguntas de configuração",
          text: "De onde vêm os pedidos (só GitHub, ou também Feishu), qual repositório, com qual conta do GitHub o agente atua (uma dedicada, nunca a sua), quais logins podem pedir trabalho a ele, de qual clone cada Ticket faz checkout, quem seus commits indicam como autor e se ele pode ativar o auto-merge (a resposta recomendada é não).",
        },
        {
          title: "Faça os passos que só você pode fazer",
          text: "Crie a conta do agente no GitHub, aceite o convite do repositório com essa conta e faça login na CLI dela. O agente nunca pede um segredo no chat; ele dá os comandos exatos para você rodar no seu próprio terminal.",
        },
        {
          title: "Confira os padrões que ele aplica",
          text: "Um perfil separado do DeepSeek Harness chamado `superagent` na porta 3082, branches com o prefixo `agent/`, modo de aceitação `observe` e uma verificação a cada hora que reinicia o agente se ele tiver parado.",
        },
        {
          title: "Envie o primeiro pedido",
          text: "De uma conta autorizada, comente `@<agent login> <request>` em uma issue. Um Ticket aparece no painel em cerca de um minuto; o agente confirma o recebimento, trabalha no próprio diretório e responde na mesma thread, normalmente com um pull request.",
        },
      ],
      source: { label: "Fonte: o repositório dsh-superagent no GitHub", href: repo },
    },
    {
      kind: "text",
      title: "Segurança: o que saber antes de rodar",
      points: [
        "Os workers rodam com `danger-full-access` como o seu usuário do sistema operacional. Eles podem ler o seu diretório pessoal e executar qualquer programa pelo caminho; os wrappers de conta escolhem credenciais, mas não são uma barreira de segurança.",
        "Para isolamento, a documentação da DeepSeek diz para rodar sob uma conta dedicada do sistema operacional que tenha apenas as credenciais do agente.",
        "Tudo o que ele escreve aparece na conta do agente no GitHub, por isso a configuração recomenda uma conta dedicada e uma lista curta de pessoas autorizadas para começar.",
        "Mensagens e comentários não podem mudar quem pode pedir trabalho: listas de autorizados, regras e modo de aceitação só mudam no painel.",
        "Depois de cada turno, o trabalho em segundo plano tem no máximo 30 minutos para terminar antes que seus jobs de shell sejam interrompidos e o Ticket seja marcado como em espera.",
        "É um protótipo de pesquisa, e o DeepSeek Harness é uma prévia para desenvolvedores em que se esperam mudanças incompatíveis.",
      ],
    },
    {
      kind: "table",
      title: "DeepSeek Super-Agent vs ChatGPT dots vs Crewmark",
      text: [
        "Os três são agentes que continuam trabalhando sem você no chat, mas começam o trabalho de formas diferentes. O Super-Agent espera uma menção ou uma regra escrita pela sua equipe; os [ChatGPT dots](/blog/chatgpt-dots) vivem na nuvem da OpenAI; o Crewmark acorda em horários definidos o agente de programação que você já usa, incluindo o DeepSeek Harness.",
      ],
      headers: ["", "DeepSeek Super-Agent", "ChatGPT dots", "Crewmark"],
      rows: [
        ["Onde roda", "Sua máquina, no DeepSeek Harness", "Computador na nuvem da OpenAI", "Seu computador, dentro do DeepSeek Harness, do Claude Code, do Codex ou do OpenCode"],
        ["O que inicia o trabalho", "Uma @menção de uma pessoa autorizada, ou uma regra no modo `auto`", "Suas mensagens, agendamentos e pesquisa própria", "Um heartbeat a cada 15–60 minutos no horário de trabalho"],
        ["Fila de trabalho", "Tickets de GitHub e de threads do Feishu", "Threads de conversa e Scheduled", "Issues em um quadro kanban"],
        ["Escopo", "Um repositório do GitHub por instalação", "Seus apps conectados", "Um funcionário por cargo, como SEO ou engenharia"],
        ["Custo", "Grátis, licença MIT; você paga o seu provedor de modelo", "Planos Pro e Business Premium", "Acesso antecipado; roda no agente e no plano que você já tem"],
        ["Status", "Protótipo de pesquisa", "Em implantação", "Acesso antecipado"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Com o Crewmark",
      title: "Deixe proativa a sua sessão do DeepSeek Harness, Claude Code ou Codex",
      text: [
        "O Super-Agent precisa de perfil, contas e configuração próprios para cada repositório. O Crewmark funciona com o agente que você já roda, incluindo o DeepSeek Harness: dá a essa sessão um cargo, uma meta e um horário de trabalho, e a acorda com um heartbeat para pegar a próxima issue de um quadro, para qualquer tipo de trabalho, não só um repositório.",
      ],
      steps: [
        {
          title: "Transforme uma sessão em um funcionário",
          text: "Escolha um cargo, como engenheiro de software ou especialista em SEO, escreva a meta dele como um número e rode o comando de configuração no DeepSeek Harness, no Claude Code, no Codex ou no OpenCode.",
        },
        {
          title: "Deixe o heartbeat iniciar o trabalho",
          text: "Durante o horário de trabalho, o funcionário acorda a cada 15, 30 ou 60 minutos na mesma conversa e retoma de onde parou; veja [como deixar o Claude Code proativo](/proactive-claude-code).",
        },
        {
          title: "Atribua issues e responda às mensagens dele",
          text: "Coloque o trabalho no quadro; o funcionário pega, comenta ao longo do caminho e manda mensagem quando precisa de uma decisão. Leia [o que é um funcionário de IA](/ai-employees).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Configure o dsh-superagent da DeepSeek" },
  mid: {
    title: "Já usa o DeepSeek Harness, o Claude Code ou o Codex?",
    text: "O Crewmark deixa essa sessão proativa: um heartbeat, horário de trabalho e um quadro de issues, no plano que você já paga.",
    button: "Acesso antecipado",
  },
  faq: {
    title: "Perguntas frequentes sobre o DeepSeek Super-Agent",
    items: [
      {
        q: "O que é o DeepSeek Super-Agent?",
        a: "O dsh-superagent é um agente de programação proativo e open source para um repositório do GitHub, lançado pela DeepSeek em 31 de outubro de 2026 como protótipo de pesquisa sob a licença MIT. Ele roda no DeepSeek Harness, recebe pedidos do GitHub e, opcionalmente, do Feishu, e responde com pull requests.",
      },
      {
        q: "O DeepSeek Super-Agent é grátis?",
        a: "O código é gratuito sob a licença MIT. Ele roda no DeepSeek Harness com um provedor de modelo que você configura, então você paga pelo uso do modelo. A DeepSeek não anunciou uma versão hospedada.",
      },
      {
        q: "Onde fica o DeepSeek Super-Agent no GitHub?",
        a: "Em github.com/deepseek-ai/dsh-superagent-prototype. O DeepSeek Harness, o harness de agentes em que ele roda, fica em github.com/deepseek-ai/deepseek-harness.",
      },
      {
        q: "O DeepSeek Super-Agent corrige bugs sem ser solicitado?",
        a: "Só se você permitir. Pedidos diretos de pessoas autorizadas sempre funcionam, mas trabalho não solicitado precisa de uma regra escrita pela sua equipe, e o modo padrão `observe` apenas registra o que ele teria feito. Mude para `auto` depois de revisar esses registros.",
      },
      {
        q: "O dsh-superagent funciona com Slack ou Teams?",
        a: "Não neste protótipo. Ele vem com GitHub e Feishu como fontes; o cookbook dele explica como adicionar outra fonte.",
      },
      {
        q: "É seguro rodar?",
        a: "Os workers dele rodam com acesso total como o seu usuário do sistema operacional e podem ler o seu diretório pessoal, por isso a documentação da DeepSeek recomenda uma conta dedicada do sistema operacional com apenas as credenciais do agente, uma conta dedicada do GitHub e uma lista curta de pessoas autorizadas.",
      },
      {
        q: "Posso usar o Crewmark com o DeepSeek Harness?",
        a: "Sim. O Crewmark conecta o DeepSeek Harness, o Claude Code, o Codex e o OpenCode. Ele transforma uma sessão em um funcionário de IA que acorda com um heartbeat durante o horário de trabalho e pega issues de um quadro, com o provedor de modelo que você já usa.",
      },
    ],
  },
  cta: {
    title: "Deixe proativo o agente que você já usa.",
    text: "O Crewmark transforma sessões do DeepSeek Harness, do Claude Code e do Codex em funcionários de IA com cargos, metas, horário de trabalho e um heartbeat.",
    button: "Acesso antecipado",
  },
  checked: "Conferido com os repositórios dsh-superagent e DeepSeek Harness no GitHub em 3 de novembro de 2026.",
  disclaimer:
    "O Crewmark é um produto independente, sem vínculo com a DeepSeek, a OpenAI ou a Anthropic e sem endosso delas. DeepSeek é marca da DeepSeek, ChatGPT da OpenAI e Claude Code da Anthropic.",
};
