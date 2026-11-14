import type { RemoteClaudeCodeCopy } from "@/content/remote-claude-code";

// pt-BR translation of /remote-claude-code; the English master is src/content/remote-claude-code.ts.
export const copy: RemoteClaudeCodeCopy = {
  meta: {
    title: "Claude Code Remote Control: use pelo celular | Crewmark AI",
    description:
      "Use o Claude Code Remote Control para continuar uma sessão local pelo celular ou navegador, veja o que ele não faz e como manter o Claude Code trabalhando.",
  },
  breadcrumb: "Claude Code remoto",
  hero: {
    kicker: "Claude Code remoto",
    title: "Controle o Claude Code pelo celular e depois deixe que ele trabalhe sem você",
    lead: "O Claude Code Remote Control é o recurso da Anthropic para continuar pelo celular, por um tablet ou por qualquer navegador uma sessão do Claude Code que roda no seu computador. Este guia mostra como configurá-lo, onde ele para e como o Crewmark transforma esse mesmo Claude Code em um funcionário que continua trabalhando no próprio horário.",
    cta: "Começar",
    secondary: "Configurar o Remote Control",
  },
  official: {
    title: "O que é o Claude Code Remote Control?",
    text: "O Remote Control conecta o claude.ai/code e o app do Claude para iOS e Android a uma sessão do Claude Code que roda na sua máquina. O Claude continua rodando localmente o tempo todo; o celular ou o navegador é só uma janela para essa sessão.",
    points: [
      "Seus arquivos, servidores MCP, ferramentas e configurações do projeto continuam disponíveis, porque nada vai para a nuvem.",
      "A conversa fica sincronizada, então você pode digitar no terminal, no navegador ou no celular, tanto faz.",
      "Você pode enviar fotos e arquivos pelo celular; o Claude Code os salva na sua máquina.",
      "Se o notebook entrar em repouso ou a rede cair, a sessão se reconecta quando a máquina voltar a ficar online.",
    ],
  },
  howto: {
    title: "Como usar o Claude Code pelo celular",
    steps: [
      {
        title: "Confira seu plano e o login",
        text: "O Remote Control funciona nos planos Claude Pro, Max, Ultra, Team e Enterprise, com login pelo claude.ai usando /login. Chaves de API, Amazon Bedrock, Google Cloud, Microsoft Foundry e gateways com ANTHROPIC_BASE_URL personalizado não são suportados. Nos planos Team e Enterprise, um Owner precisa ativá-lo antes.",
      },
      {
        title: "Inicie uma sessão com o Remote Control ativado",
        text: "Inicie uma nova sessão interativa com a flag ou ative o recurso em uma sessão que já está rodando. A extensão do VS Code e o app desktop do Claude aceitam o mesmo comando /remote-control.",
        code: 'claude --remote-control "My project"\n# ou, dentro de uma sessão em andamento\n/remote-control',
      },
      {
        title: "Abra no celular",
        text: "Escaneie o QR code que o Claude Code mostra no terminal ou abra a sessão na lista do claude.ai/code ou no app do Claude. Rode /remote-control de novo para ver o link, o QR code ou para desconectar.",
      },
      {
        title: "Mantenha o computador ligado",
        text: "A sessão roda na sua máquina, então o computador precisa ficar ligado e o processo claude precisa continuar rodando. Se você fechar o terminal, a sessão remota termina junto.",
      },
    ],
    source: "Fonte: documentação do Remote Control da Anthropic",
  },
  mid: {
    title: "Quer que ele continue trabalhando enquanto você está fora?",
    text: "O Remote Control permite conduzir uma sessão pelo celular. Um funcionário do Crewmark continua trabalhando no ritmo do heartbeat e manda mensagem quando precisa de você.",
    button: "Começar",
  },
  limits: {
    title: "O que o Remote Control não faz",
    text: "O Remote Control é uma tela remota para uma conversa. Ele não decide o que o Claude deve fazer em seguida, então o trabalho só anda quando você age.",
    points: [
      "O Claude age quando você manda uma mensagem. Quando termina uma tarefa, ele espera por você.",
      "Não há lista de tarefas, responsáveis ou status: cada sessão é uma conversa.",
      "Ele não conhece suas metas nem seu horário de trabalho, e nada o acorda em horários definidos.",
      "Rodar vários agentes do Claude Code significa administrar várias sessões por conta própria.",
    ],
  },
  compare: {
    title: "Remote Control vs. Crewmark",
    headers: ["", "Claude Code Remote Control", "Crewmark"],
    rows: [
      ["O que é", "Sua sessão local do Claude Code, no celular ou no navegador", "Um time de funcionários de IA, cada um uma conversa do Claude Code ou do Codex na sua máquina"],
      ["Quem inicia o trabalho", "Você, mandando uma mensagem", "Um heartbeat durante o horário de trabalho, ou uma tarefa que alguém atribui"],
      ["Quando você para de responder", "O Claude espera sua próxima mensagem", "O funcionário passa para a próxima tarefa e pergunta quando trava"],
      ["Acompanhamento", "Uma conversa por sessão", "Quadro de tarefas com status, projetos, comentários e KPIs"],
      ["Roda em", "Sua máquina, seu plano do Claude", "Sua máquina, seu plano do Claude Code ou do Codex"],
      ["Feito por", "Anthropic", "Crewmark (sem vínculo com a Anthropic)"],
    ],
  },
  crewmark: {
    kicker: "Quando você está fora",
    title: "Dê um trabalho ao Claude Code, não só um controle remoto",
    text: "O Crewmark transforma o Claude Code da sua máquina em um funcionário: ele tem um cargo, metas, horário de trabalho e um quadro de tarefas, e continua trabalhando nelas esteja você olhando ou não.",
    steps: [
      {
        title: "Contrate um funcionário",
        text: "Escolha um cargo, como especialista em SEO ou engenheiro de software, escreva as metas e os KPIs e defina o horário de trabalho e o heartbeat.",
      },
      {
        title: "Conecte uma conversa do Claude Code",
        text: "Cole o link de configuração no Claude Code. Ele instala a CLI do crewmark e vincula essa conversa ao funcionário. O Codex também funciona.",
      },
      {
        title: "Atribua tarefas de qualquer navegador",
        text: "Crie tarefas no quadro pelo celular ou pelo notebook e atribua a ele. O funcionário fica sabendo na hora.",
      },
      {
        title: "Ele trabalha no ritmo do heartbeat",
        text: "Durante o horário de trabalho, o funcionário é acordado em intervalos definidos, pega suas tarefas, atualiza o status e comenta o andamento. Quando precisa de uma decisão, ele pergunta a você.",
      },
    ],
  },
  both: {
    title: "Use os dois",
    text: "Um funcionário do Crewmark é uma conversa comum do Claude Code, então você ainda pode ativar o Remote Control nela e entrar pelo celular. O Remote Control permite falar com o Claude Code de qualquer lugar; o Crewmark dá a ele algo para fazer enquanto você não está falando.",
  },
  faq: {
    title: "Perguntas",
    items: [
      {
        q: "O Crewmark é o Claude Code Remote Control oficial?",
        a: "Não. O Remote Control é um recurso do Claude Code feito pela Anthropic. O Crewmark é um produto separado, sem vínculo com a Anthropic, que roda funcionários de IA sobre o Claude Code e o Codex.",
      },
      {
        q: "Posso usar o Claude Code pelo celular?",
        a: "Sim. Inicie o Claude Code com claude --remote-control, ou rode /remote-control em uma sessão, e abra-a no app do Claude para iOS ou Android ou em claude.ai/code. A sessão em si continua rodando no seu computador.",
      },
      {
        q: "O Remote Control funciona com uma chave de API?",
        a: "Não. Segundo a documentação da Anthropic, ele exige um plano Pro, Max, Ultra, Team ou Enterprise com login pelo claude.ai. Não funciona com chaves de API, Amazon Bedrock, Google Cloud, Microsoft Foundry nem com um ANTHROPIC_BASE_URL personalizado.",
      },
      {
        q: "Por que o Claude Code Remote Control não está funcionando?",
        a: "Geralmente é o login. Rode claude auth login e escolha a opção do claude.ai; remova ANTHROPIC_API_KEY ou ANTHROPIC_AUTH_TOKEN se estiverem definidas, porque elas têm prioridade; e não use um token de longa duração do claude setup-token, que não consegue iniciar o Remote Control. Nos planos Team e Enterprise, um Owner precisa ativar o Remote Control antes. CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC ou DISABLE_GROWTHBOOK também o desativam. O claude doctor mostra qual verificação falhou.",
      },
      {
        q: "Por que o Remote Control fica desconectando?",
        a: "\"Remote Control disconnected\" ou \"Can't reach\" significa que seu celular ou navegador perdeu contato com o Claude Code no seu computador. Uma sessão interativa se reconecta sozinha quando o computador está acordado e online; se o processo claude parou, inicie-o de novo e retome a sessão. Em uma máquina remota, rode o claude dentro do tmux ou do screen para que ele sobreviva ao fechamento do terminal, e se aparecer que não foi possível alcançar o servidor por cerca de 30 minutos, rode /remote-control de novo.",
      },
      {
        q: "Remote Control vs Dispatch: qual é a diferença?",
        a: "O Remote Control permite controlar uma sessão do Claude Code que já está rodando no seu computador, pelo claude.ai/code ou pelo app do Claude. O Dispatch permite enviar uma nova tarefa pelo app móvel do Claude, e o app de desktop no seu computador inicia uma sessão para ela; ele exige o app móvel pareado com o Claude Desktop.",
      },
      {
        q: "Posso usar o Remote Control com o DeepSeek ou outro provedor de modelos?",
        a: "Não. O Remote Control só funciona quando o Claude Code se comunica com api.anthropic.com. Se o ANTHROPIC_BASE_URL aponta para o DeepSeek, um gateway ou um proxy, ou se você usa Bedrock, Google Cloud ou Foundry, remova essa configuração e faça login com o claude.ai para usá-lo.",
      },
      {
        q: "O Claude Code continua trabalhando se eu fechar o notebook?",
        a: "Não sozinho: uma sessão do Remote Control precisa do computador ligado e do processo claude rodando, e depois de uma tarefa ela espera sua próxima mensagem. Os funcionários do Crewmark também rodam no seu computador, mas um heartbeat os acorda durante o horário de trabalho para continuarem avançando nas tarefas.",
      },
      {
        q: "O Crewmark precisa de uma assinatura de IA própria?",
        a: "Não. Cada funcionário roda no Claude Code ou no Codex da sua própria máquina, no plano que você já paga. O Crewmark guarda os funcionários, as tarefas, o quadro e as mensagens.",
      },
    ],
  },
  cta: {
    title: "Deixe o Claude Code trabalhando enquanto você está fora",
    text: "Cadastre-se com o Google e contrate seu primeiro funcionário no agente que você já usa.",
    button: "Começar",
  },
  checked: "Detalhes do Remote Control conferidos com a documentação da Anthropic em 7 de novembro de 2026.",
  disclaimer:
    "Claude e Claude Code são marcas da Anthropic, PBC. O Crewmark é um produto independente, sem vínculo com a Anthropic e sem endosso ou patrocínio dela.",
};
