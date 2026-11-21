import type { GuideCopy } from "@/components/landing/guide-article";

// pt-BR translation of /blog/codex-remote-control; the English master is src/content/blog/codex-remote-control.ts.

const docs = "https://learn.chatgpt.com/docs/remote-connections";

const ssh = `# ~/.ssh/config no computador que roda o app desktop do ChatGPT
Host devbox
  HostName devbox.example.com
  User me

# Confira se funciona e depois entre no Codex no host remoto
ssh devbox
codex   # precisa estar no PATH do login shell do usuário remoto`;

export const copy: GuideCopy = {
  meta: {
    title: "Remote control do Codex no ChatGPT: use o Codex pelo celular",
    description:
      "Controle o Codex no seu Mac ou PC com Windows pelo app do ChatGPT: configuração com QR code, hosts SSH, acesso 24/7 e soluções se o remote control falhar.",
  },
  breadcrumb: "Remote control do Codex",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-08" },
  hero: {
    kicker: "Blog · Codex",
    title: "Remote control do Codex: use o Codex do seu computador pelo celular",
    lead: "As conexões remotas permitem trabalhar com chats do Codex que rodam no seu Mac ou PC com Windows pelo app do ChatGPT no celular. O repositório, os arquivos, as credenciais e as ferramentas continuam no computador; o celular envia prompts e aprovações e mostra os resultados. Este guia explica como configurar, o que dá para fazer pelo celular, do que o computador precisa, como resolver quando não funciona e como isso se compara às tarefas na nuvem e a um funcionário de IA que trabalha sozinho.",
    cta: "Começar",
    secondary: "Configurar",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "O que é o remote control do Codex",
      text: [
        "A OpenAI chama isso de conexões remotas (remote connections). Um computador rodando o app desktop do ChatGPT vira um host; o seu celular, ou outro desktop, o controla. A sessão usa os projetos, chats, arquivos, credenciais, permissões, plugins e ferramentas locais do host, então o Codex trabalha exatamente como se você estivesse sentado ali.",
      ],
      points: [
        "Hosts: o app desktop do ChatGPT no macOS e no Windows. A documentação da OpenAI não lista o Linux como host.",
        "Celulares: o app do ChatGPT no iOS e no Android, sempre atualizado. Abra o Codex no app (versões mais antigas o chamam de Remote).",
        "A conexão passa por um relay seguro, então o computador não precisa ficar exposto à internet.",
        "A configuração é feita no app desktop; a OpenAI diz que não dá para configurar o acesso pelo celular a partir da Codex CLI ou da extensão de IDE.",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Como configurar o remote control do Codex",
      steps: [
        {
          title: "Ative no app desktop",
          text: "No computador, abra o app desktop do ChatGPT e vá em Settings > Connections > Control this Mac or PC. Selecione Set up ou Add, aprove o acesso remoto e conclua qualquer verificação. O app mostra um QR code. No mesmo lugar, você pode escolher manter o computador acordado.",
        },
        {
          title: "Pareie o celular",
          text: "Escaneie o QR code com o celular; ele abre o ChatGPT. Confirme que é a mesma conta e o mesmo workspace e conclua qualquer etapa de MFA, SSO ou passkey. O computador então aparece em Codex. Um QR code pareia um celular com um computador, então pareie cada combinação que quiser.",
        },
        {
          title: "Trabalhe pelo celular",
          text: "Inicie um novo chat em um dos projetos do computador ou abra um existente. Envie acompanhamentos, responda às perguntas do Codex, aprove comandos e revise diffs, resultados de testes, saída do terminal e capturas de tela. Você recebe uma notificação quando uma tarefa termina ou precisa de você.",
        },
        {
          title: "Opcional: controle uma máquina remota via SSH",
          text: "O app desktop também abre projetos em um host SSH. Adicione uma entrada Host ao ~/.ssh/config, confira se `ssh <alias>` funciona, instale o Codex e entre nele nesse host, depois adicione o host em Settings > Connections e escolha uma pasta de projeto.",
          code: ssh,
        },
      ],
      source: { label: "Fonte: documentação da OpenAI sobre conexões remotas", href: docs },
    },
    {
      kind: "text",
      id: "requirements",
      title: "Do que o computador precisa",
      points: [
        "Ele precisa estar acordado, online, conectado à mesma conta e ao mesmo workspace e rodando o app desktop do ChatGPT. O modo de repouso corta o acesso.",
        "Um MacBook continua acessível com a tampa aberta e ligado na tomada; com a tampa fechada, precisa de um monitor externo.",
        "No Windows, mantenha a sessão desbloqueada se o Codex usar o Computer Use, que roda em primeiro plano.",
        "Fora da sua rede, use uma VPN ou uma ferramenta de rede mesh em vez de expor o computador à internet.",
        "O administrador do seu workspace pode precisar ativar o acesso ao Remote Control.",
        "Não dá para passar um chat para um ambiente do Codex na nuvem; para isso, inicie uma tarefa na nuvem.",
      ],
    },
    {
      kind: "text",
      id: "windows-linux",
      title: "Remote control no Windows e no Linux",
      text: [
        "Os passos acima são os mesmos em um Mac e em um PC com Windows, já que os dois podem ser hosts. A diferença está no Linux.",
      ],
      points: [
        "Windows: instale o app desktop do ChatGPT e ative Settings > Connections > Control this Mac or PC como descrito acima. Se o Codex usar o Computer Use, ele trabalha na área de trabalho ativa: move o ponteiro, digita e assume o primeiro plano, e não consegue rodar em segundo plano. Mantenha a sessão do Windows desbloqueada e online enquanto ele trabalha, e use o celular para iniciar e acompanhar o trabalho enquanto a tela do PC fica por conta dele. A documentação da OpenAI também sugere rodar o app desktop em uma máquina virtual Windows, para que o Computer Use assuma a VM em vez da sua área de trabalho. Mais em [Codex no Windows](/blog/codex-windows).",
        "O uso bloqueado (locked use), que permite que uma tarefa do Computer Use iniciada pelo celular continue rodando depois que o computador é bloqueado, existe só no macOS.",
        "Linux: a OpenAI lista apenas macOS e Windows como hosts, então controlar um computador Linux pelo celular não está documentado, mesmo que agora exista um app desktop do ChatGPT para Linux em versão prévia. O que funciona é uma máquina Linux como host SSH: o app desktop em um Mac ou PC com Windows abre projetos nela, e o celular controla esse Mac ou PC. Mais em [Codex no Linux](/blog/codex-linux) e [Codex em uma VPS](/blog/codex-vps).",
      ],
    },
    {
      kind: "text",
      id: "troubleshooting",
      title: "O remote control do Codex não funciona?",
      points: [
        "O computador não aparece no celular: confira se o app desktop está rodando, se “Allow other devices to connect” está ativado, se os dois apps usam a mesma conta e o mesmo workspace e se ambos estão atualizados. Pareamentos sem uso desde 8 de junho de 2026 precisam ser refeitos.",
        "O Remote Control desligou depois que você entrou de novo: sair da conta desliga o recurso, mas mantém o pareamento. Ative o Remote Control de novo.",
        "Um erro depois de selecionar Add: reinicie o app desktop no computador e tente outra vez.",
        "Nenhum pedido de aprovação chega: abra o Codex no app, confirme a conta e o workspace, escaneie o QR code de novo e peça ao administrador que confirme o acesso ao Remote Control.",
        "A conexão cai toda hora: o computador entrou em repouso, perdeu a rede ou fechou o app. Mantenha-o acordado e conectado.",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Remote control, tarefas na nuvem ou um funcionário de IA?",
      text: [
        "O remote control é uma janela para o Codex no seu computador: ele espera você dizer o que fazer em seguida. As outras duas opções continuam trabalhando sem você.",
      ],
      headers: ["", "Quem inicia o trabalho", "Onde roda", "Computador ligado?", "Ideal para"],
      rows: [
        ["Remote control", "Você, pelo celular", "Seu Mac ou PC com Windows", "Sim, acordado e online", "Conduzir o trabalho local quando você está longe da mesa"],
        ["Tarefa no Codex Cloud", "Você, uma vez", "Nuvem da OpenAI", "Não", "Delegar uma tarefa que só precisa de um repositório"],
        ["Funcionário de IA do Crewmark", "Um heartbeat, durante o horário de trabalho", "Seu computador, no seu próprio Codex", "Sim", "Um trabalho fixo: a próxima issue de um quadro, a cada turno"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Com o Crewmark",
      title: "Acompanhe pelo celular e deixe ele trabalhar sozinho",
      text: [
        "Com o remote control, você ainda decide cada próximo passo. O Crewmark transforma o seu Codex em um funcionário de IA com papel, meta, horário de trabalho e um heartbeat: ele acorda em uma agenda, pega a próxima issue de um quadro e manda mensagem quando precisa de uma decisão. O remote control passa a ser a forma de dar uma olhada pelo celular.",
      ],
      steps: [
        {
          title: "Contrate um funcionário no seu Codex",
          text: "Rode o comando de configuração em um chat do Codex; esse chat vira o funcionário e mantém a memória entre um despertar e outro. Veja [o que é um funcionário de IA](/ai-employees).",
        },
        {
          title: "Dê a ele horário de trabalho e um heartbeat",
          text: "Durante o turno, a CLI crewmark coloca uma mensagem na fila do mesmo chat do Codex a cada 15 a 240 minutos, para que ele pegue a próxima issue. Veja [tarefas longas no Codex](/blog/codex-long-running-tasks).",
        },
        {
          title: "Dê uma olhada pelo celular quando quiser",
          text: "Abra o chat do funcionário em Codex no app do ChatGPT para acompanhar ou redirecionar, ou apenas responda às mensagens dele. Para a versão do Claude Code, veja [Remote Control do Claude Code](/remote-claude-code).",
        },
      ],
    },
    {
      kind: "steps",
      id: "what-crewmark-adds",
      kicker: "Com o Crewmark",
      title: "O que o Crewmark acrescenta",
      text: [
        "O remote control permite acessar o Codex de qualquer lugar, mas o Codex continua trabalhando só quando você pede. O Crewmark transforma o Codex do seu computador em um funcionário de IA com um trabalho próprio e dá a você um quadro em crewmark.ai para acompanhá-lo pelo celular.",
      ],
      steps: [
        {
          title: "Um cargo e uma meta em números",
          text: "Cada funcionário é um chat do Codex no seu computador com um cargo, como engenheiro de software ou especialista em SEO, além de KPIs e projetos. Ele os relê com `crewmark me`, então cada despertar começa pelo trabalho dele, e não por um prompt em branco. Veja os [cargos de funcionários de IA](/ai-employees).",
        },
        {
          title: "Horário de trabalho e um heartbeat",
          text: "Escolha o horário dele, só em dias úteis ou todos os dias, no seu fuso horário; ele pode passar da meia-noite. Durante esse horário, a CLI `crewmark` acorda o mesmo chat do Codex em um intervalo que vai de 15 minutos a 24 horas, para que ele continue de onde parou.",
        },
        {
          title: "Ele continua avançando nas issues",
          text: "Cada vez que acorda, ele pega as issues atribuídas a ele no quadro, trabalha nelas e mantém o status delas em dia. Quando precisa de uma revisão, de uma permissão ou de alguma informação, ele marca a issue como Needs action e pergunta a você ali mesmo.",
        },
        {
          title: "Fale com ele pelo celular",
          text: "Abra crewmark.ai no navegador do celular e escreva para o funcionário no Work log dele. A mensagem chega ao chat do Codex dele no seu computador, e ele responde ali.",
        },
        {
          title: "Uma equipe em um só quadro",
          text: "Contrate mais funcionários com cargos diferentes. Eles compartilham um quadro, atribuem issues uns aos outros, comentam e se @mencionam, e cada uma dessas ações acorda o funcionário envolvido. Para o agendamento que já vem no Codex e como um heartbeat é diferente, veja [Codex proativo](/proactive-codex).",
        },
      ],
    },
    {
      kind: "table",
      id: "vs-chatgpt-app",
      title: "O remote control do app do ChatGPT vs o Crewmark",
      text: [
        "O app do ChatGPT já resolve muita coisa pelo celular: você pode iniciar chats novos nos projetos do computador, continuar os antigos, responder perguntas, aprovar comandos, revisar diffs e resultados de testes e receber uma notificação quando uma tarefa termina ou precisa de você. O Crewmark é para o trabalho que deve continuar quando não é você quem o inicia.",
      ],
      headers: ["", "Remote control do app do ChatGPT", "Crewmark"],
      rows: [
        ["O que é", "O app do ChatGPT no celular controlando chats do Codex no seu Mac ou PC com Windows", "Uma equipe de funcionários de IA, cada um sendo um chat do Codex ou do Claude Code no seu computador, com um quadro em crewmark.ai"],
        ["Quem inicia o trabalho", "Você: inicia um chat ou envia um acompanhamento pelo celular", "Um heartbeat durante o horário de trabalho, ou uma issue que alguém atribui"],
        ["Pelo celular", "Iniciar e continuar chats, aprovar ações, revisar diffs, resultados de testes e capturas de tela, receber notificações", "Escrever para um funcionário no Work log dele, criar e atribuir issues, responder quando uma issue precisa de ação"],
        ["Quando você para de responder", "O Codex termina a tarefa, avisa você e espera o seu próximo prompt", "O funcionário passa para a próxima issue e pergunta na própria issue quando fica travado"],
        ["Acompanhamento", "Chats nos projetos do host", "Um quadro de issues com status, prioridades, comentários e KPIs"],
        ["Uma equipe de agentes", "Você mesmo alterna entre hosts e chats", "Vários funcionários com cargos diferentes em um quadro, atribuindo issues uns aos outros e se @mencionando"],
        ["Meta e horário", "Nada além do chat", "Uma meta em números e um horário de trabalho para cada funcionário"],
        ["Roda em", "Seu Mac ou PC com Windows, no seu plano do ChatGPT", "Seu computador, no seu próprio Codex ou Claude Code, no plano que você já paga"],
        ["Feito por", "OpenAI", "Crewmark (sem afiliação com a OpenAI)"],
      ],
    },
    {
      kind: "text",
      id: "always-on",
      title: "Acesse o Codex 24/7, de qualquer lugar",
      text: [
        "O remote control só alcança um host que está acordado, online, conectado à conta e rodando o app desktop do ChatGPT. Se ele entrar em repouso, perder a rede ou o app fechar, o celular não o alcança até ele voltar, e escolher Sleep por conta própria também corta o acesso. Para trabalhos mais longos, a OpenAI sugere um Mac ou PC com Windows dedicado e sempre ligado, com seus projetos, credenciais e ferramentas instalados nele. Duas configurações oferecem isso, e o Codex cloud é uma terceira opção:",
      ],
      points: [
        "Um Mac mini em casa como host. Impeça que ele entre em repouso, rode o app desktop do ChatGPT com o remote control ativado e pareie o celular com ele. Por ser um Mac, ele também roda o Computer Use e tarefas no navegador pela extensão do Chrome, e com o uso bloqueado uma tarefa do Computer Use pode continuar depois que ele é bloqueado. Veja [como configurar o Codex em um Mac mini](/blog/codex-mac-mini).",
        "Um servidor Linux como host SSH. Instale a Codex CLI no servidor e faça login nela, depois adicione o servidor em Settings > Connections no app desktop; os chats nos projetos dele rodam comandos e alteram arquivos no servidor. O celular continua se conectando ao Mac ou PC com Windows que roda o app desktop, e não ao servidor, então esse computador também precisa ficar ligado. Um Mac mini em casa pode ser esse host. Veja [como rodar o Codex em uma VPS](/blog/codex-vps).",
        "Codex cloud. No app do ChatGPT, abra o Codex e escolha Cloud e um ambiente. A tarefa roda na nuvem da OpenAI e continua trabalhando enquanto o computador está em repouso, mas só enxerga o que está no ambiente na nuvem dela: seus arquivos locais, processos em execução, logins do navegador e acesso à VPN não estão lá. Também não dá para passar para ele um chat do seu computador.",
        "Os funcionários do Crewmark também rodam no seu próprio computador, então a mesma regra vale. Em um Mac mini ou servidor sempre ligado, o horário de trabalho deles pode cobrir todos os dias e passar da meia-noite.",
      ],
    },
  ],
  howTo: { section: "how-to", name: "Configurar o remote control do Codex" },
  mid: {
    title: "Quer que o Codex continue trabalhando quando você não está no comando?",
    text: "O Crewmark acorda o seu Codex com um heartbeat durante o horário de trabalho e entrega a ele a próxima issue de um quadro.",
    button: "Começar",
  },
  faq: {
    title: "Perguntas frequentes sobre o remote control do Codex",
    items: [
      {
        q: "O que é o remote control do ChatGPT?",
        a: "É como muita gente chama as conexões remotas da OpenAI: o app do ChatGPT no celular, ou outro Mac ou PC com Windows, controla chats do Codex que rodam no app desktop do ChatGPT em um computador host. O host faz o trabalho; o celular envia prompts e aprovações.",
      },
      {
        q: "Como ativar o remote control no ChatGPT?",
        a: "No computador host, abra o app desktop do ChatGPT, vá em Settings > Connections > Control this Mac or PC e selecione Set up ou Add; depois escaneie o QR code com o app do ChatGPT no celular. O host precisa ser um Mac ou PC com Windows que fique acordado.",
      },
      {
        q: "Posso controlar o Codex pelo celular?",
        a: "Sim. Ative Settings > Connections > Control this Mac or PC no app desktop do ChatGPT, escaneie o QR code com o celular e o computador aparece em Codex no app do ChatGPT, no iOS ou no Android.",
      },
      {
        q: "Dá para controlar a Codex CLI remotamente?",
        a: "O acesso pelo celular só é configurado no app desktop do ChatGPT; a OpenAI diz que não dá para configurá-lo pela CLI ou pela extensão de IDE. A CLI tem, sim, um comando experimental `codex remote-control` (start, stop, pair), que a OpenAI descreve para clientes de remote control gerenciados e fluxos de trabalho com SSH, mas a documentação não descreve como parear um celular com uma máquina que só tem a CLI. Para chegar a uma máquina em que você trabalha pelo terminal, adicione-a como host SSH no app desktop, com o Codex instalado e conectado lá.",
      },
      {
        q: "O remote control do Codex funciona no Linux?",
        a: "A documentação lista o app desktop no macOS e no Windows como hosts e não menciona o Linux. Uma máquina Linux ainda pode ser acessada como host SSH a partir do app desktop no Mac ou no Windows.",
      },
      {
        q: "O computador precisa ficar ligado?",
        a: "Sim. O computador precisa ficar acordado, online e conectado, com o app desktop rodando; o modo de repouso corta o acesso. Para trabalho que continua com o computador desligado, use uma tarefa no Codex Cloud.",
      },
      {
        q: "O remote control do Codex é seguro?",
        a: "A conexão passa por um relay seguro, então o computador não fica exposto à internet pública, e o sandbox, os controles de segurança e as aprovações do Codex continuam valendo. Só pareie dispositivos que são seus e em que você confia.",
      },
      {
        q: "Por que o remote control do Codex não funciona?",
        a: "Normalmente o app desktop não está rodando, “Allow other devices to connect” está desativado, o celular está em outra conta ou workspace, algum app está desatualizado ou o computador entrou em repouso. Refaça o pareamento com o QR code se a conexão não é usada desde 8 de junho de 2026.",
      },
      {
        q: "O remote control do ChatGPT funciona no Windows?",
        a: "Sim. O app desktop do ChatGPT no Windows pode ser um host, configurado do mesmo jeito em Settings > Connections > Control this Mac or PC. Se o Codex usar o Computer Use, ele assume a área de trabalho ativa, então mantenha a sessão do Windows desbloqueada e online enquanto ele trabalha. Veja [Codex no Windows](/blog/codex-windows).",
      },
      {
        q: "Dá para usar o remote control com o Codex cloud?",
        a: "São coisas separadas. O remote control conduz chats no seu próprio Mac ou PC com Windows. No Codex do app do ChatGPT, você também pode escolher Cloud e um ambiente para iniciar uma tarefa na nuvem, que roda na nuvem da OpenAI e continua enquanto o computador está em repouso, mas não enxerga seus arquivos locais nem os logins do navegador. Não dá para passar um chat do seu computador para um ambiente do Codex cloud.",
      },
      {
        q: "O remote control do ChatGPT funciona via SSH?",
        a: "Sim, pelo app desktop. Adicione o servidor ao `~/.ssh/config`, instale o Codex nele e faça login, depois adicione-o em Settings > Connections e escolha um projeto remoto. O celular se conecta ao Mac ou PC com Windows que roda o app, e é ele que roda o chat no servidor, então esse computador precisa ficar ligado. Veja [Codex em uma VPS](/blog/codex-vps).",
      },
    ],
  },
  cta: {
    title: "Deixe o Codex trabalhar enquanto você está fora, não só responder quando você olha.",
    text: "O Crewmark transforma sessões do Claude Code e do Codex em funcionários de IA com papéis, metas, horários de trabalho e um heartbeat.",
    button: "Começar",
  },
  checked: "Verificado com a documentação do Codex da OpenAI (conexões remotas, mobile, Codex Cloud, CLI) em 14 de novembro de 2026.",
  disclaimer:
    "O Crewmark é um produto independente, sem afiliação ou endosso da OpenAI. Codex e ChatGPT são marcas registradas da OpenAI.",
};
