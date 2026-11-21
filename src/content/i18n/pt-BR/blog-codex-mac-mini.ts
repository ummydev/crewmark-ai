import type { GuideCopy } from "@/components/landing/guide-article";

// pt-BR translation of /blog/codex-mac-mini; the English master is src/content/blog/codex-mac-mini.ts (the `en` value of codexMacMini).

const docs = "https://learn.chatgpt.com/docs/remote-connections";

const install = `# Codex CLI on macOS (either one; the script also updates it)
curl -fsSL https://chatgpt.com/codex/install.sh | sh
brew install --cask codex

# Open the ChatGPT desktop app, installing it if it's missing
codex app

# Sign in to the CLI with your ChatGPT account
codex login`;

export const copy: GuideCopy = {
  meta: {
    title: "Codex no Mac mini: rode 24/7 e controle pelo celular",
    description:
      "Rode o Codex 24/7 em um Mac mini: instale o app desktop do ChatGPT e a CLI, deixe o Mac acordado, ative o remote control, pareie o celular e use o Computer Use.",
  },
  breadcrumb: "Codex em um Mac mini",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-14" },
  hero: {
    kicker: "Blog · Codex",
    title: "Codex em um Mac mini: um host sempre ligado que você controla pelo celular",
    lead: "O remote control permite usar o Codex pelo app do ChatGPT no celular, mas só enquanto o computador em que ele roda está acordado e online. Feche um notebook e o celular perde o acesso. Para trabalhos mais longos, a OpenAI sugere um Mac dedicado e sempre ligado, e um Mac mini em casa serve bem: ele fica ligado, mantém seus projetos, logins e ferramentas em uma máquina sua e pode rodar o Computer Use e tarefas no navegador. Este guia cobre como instalar o Codex nele, mantê-lo acordado, configurar o remote control, parear o celular e acessar a área de trabalho dele a partir de um notebook.",
    cta: "Começar",
    secondary: "Ver os passos",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      id: "why-mac-mini",
      title: "Por que um Mac mini como host do Codex",
      text: [
        "O celular não roda o Codex. Ele envia prompts, aprovações e acompanhamentos, e o host fornece todo o resto: projetos, chats, arquivos, credenciais, plugins, servidores MCP, skills, o Computer Use, o navegador e as ferramentas locais. Então é o host que decide o que o Codex consegue fazer pelo celular, e se ele fica acessível. Um Mac mini que nunca dorme é um bom host:",
      ],
      points: [
        "Ele fica ligado. Um host que entra em repouso, perde a rede ou fecha o app corta o acesso remoto até voltar.",
        "Computer Use e tarefas no navegador. O app desktop do ChatGPT roda o Computer Use no macOS e no Windows; a versão prévia para Linux ainda não tem esse recurso. No Windows, o Computer Use assume a área de trabalho ativa e precisa da sessão desbloqueada. Um Mac tem o uso bloqueado (locked use), então uma tarefa do Computer Use que você inicia pelo celular pode rodar depois que o Mac é bloqueado.",
        "Apps para iOS. O Xcode e o iOS Simulator rodam só no macOS, então, se o Codex trabalha em um app para iPhone, o host precisa ser um Mac.",
        "Seus dados em casa. Repositórios, logins do navegador e credenciais ficam em uma máquina sua, e sites em que você fez login e apps desktop funcionam porque o host consegue acessá-los.",
        "Uma base também para servidores. O mesmo app desktop pode adicionar servidores Linux como hosts SSH, então o Mac mini pode ser o computador sempre ligado a que o celular se conecta enquanto os chats rodam em um servidor.",
      ],
    },
    {
      kind: "text",
      id: "what-you-need",
      title: "Do que você precisa",
      points: [
        "Um Mac mini que você possa deixar ligado e conectado à internet.",
        "Uma conta do ChatGPT com acesso ao Codex. A tabela de planos da OpenAI lista o remote control pelo celular nos planos Plus, Pro, Business e Enterprise; ele não está disponível com uma chave de API. Em um workspace do ChatGPT, um administrador pode precisar ativar antes o acesso ao Remote Control.",
        "O app do ChatGPT mais recente no celular, iOS ou Android, conectado à mesma conta e ao mesmo workspace que o Mac mini.",
        "Opcionalmente, o Tailscale no Mac mini e no seu notebook, para acessar a área de trabalho do Mac mini de qualquer lugar.",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Como configurar o Codex em um Mac mini",
      steps: [
        {
          title: "Instale o app desktop do ChatGPT e a Codex CLI",
          text: "Desde 9 de julho de 2026, o Codex fica no app desktop do ChatGPT, ao lado de Chat e Work. Instale o app para macOS, faça login com a conta e o workspace que você usa no celular e selecione Codex. A Codex CLI é opcional, mas útil quando você entra por SSH: instale-a com o script da OpenAI ou com o Homebrew, rode `codex` e escolha Sign in with ChatGPT. `codex app` abre o app desktop e o instala se ele não estiver lá.",
          code: install,
        },
        {
          title: "Mantenha o Mac mini acordado",
          text: "Em System Settings > Energy, ative Prevent automatic sleeping when the display is off, para que o Mac mini continue rodando com a tela desligada; Wake for network access permite que ele acorde para serviços compartilhados (veja as [configurações de repouso e despertar da Apple](https://support.apple.com/guide/mac-help/set-sleep-and-wake-settings-mchle41a6ccd/mac)). Depois, no app desktop, ative Settings > General > Prevent sleep while running, para que os chats locais continuem enquanto você está fora.",
        },
        {
          title: "Ative o remote control",
          text: "No app desktop, abra Settings > Connections > Control this Mac or PC e selecione Set up ou Add. Aprove o acesso remoto e conclua qualquer verificação; o app mostra um QR code. Em Settings > Connections você também escolhe manter o computador acordado, ativa o Computer Use, instala a extensão do Chrome e gerencia os dispositivos conectados.",
        },
        {
          title: "Pareie o celular",
          text: "Escaneie o QR code com o celular; ele abre o ChatGPT. Confirme a conta e o workspace e conclua qualquer etapa de MFA, SSO ou passkey. O Mac mini então aparece em Codex no app do ChatGPT (Remote nas versões mais antigas), e você pode iniciar chats nos projetos dele, aprovar comandos e revisar diffs. Um QR code pareia um celular com um host, então pareie cada celular que você vai usar. Para controlá-lo também de um notebook, use Settings > Connections > Control other devices no notebook, onde essa opção estiver disponível.",
        },
        {
          title: "Ative o Computer Use e a extensão do Chrome",
          text: "Para tarefas no navegador e na área de trabalho, o host precisa dos dois. Com o Codex selecionado, abra Settings > Computer use, encontre Any App em Control e selecione Install ou ative a chave, e instale a extensão do Chrome em Settings > Connections. O Computer Use só está disponível em algumas regiões. Para que uma tarefa do Computer Use iniciada pelo celular rode com o Mac bloqueado, ative o uso bloqueado em Settings > Computer Use. Ele instala um plug-in de autorização da Apple, desbloqueia só durante um turno ativo do Computer Use e bloqueia de novo se alguém usar o teclado ou o ponteiro do Mac mini.",
        },
        {
          title: "Adicione hosts SSH se o seu código está em um servidor",
          text: "Em Settings > Connections você também pode adicionar um servidor Linux do `~/.ssh/config` como host SSH; depois, escolha uma pasta de projeto nele. Os chats nesse projeto rodam no servidor, enquanto o celular continua se conectando ao Mac mini. A configuração está em [Codex em uma VPS](/blog/codex-vps).",
        },
        {
          title: "Acesse a área de trabalho do Mac mini com Tailscale e Screen Sharing",
          text: "Instale o Tailscale no Mac mini e no notebook e adicione os dois à mesma tailnet, uma rede privada em que só os seus dispositivos conseguem se alcançar, por conexões WireGuard criptografadas (veja [o que é o Tailscale](https://tailscale.com/kb/1151/what-is-tailscale)). No Mac mini, ative System Settings > General > Sharing > Screen Sharing; ele não pode ficar ativado ao mesmo tempo que o Remote Management. Depois, conecte-se pelo notebook ao nome do Mac mini na sua tailnet para fazer login em sites, responder a pedidos de segurança ou privacidade que o Computer Use não consegue aprovar ou acompanhar o Codex trabalhando (veja o [guia de Screen Sharing da Apple](https://support.apple.com/guide/mac-help/turn-screen-sharing-on-or-off-mh11848/mac)).",
        },
      ],
      source: { label: "Fonte: documentação da OpenAI sobre conexões remotas", href: docs },
    },
    {
      kind: "text",
      id: "keep-running",
      title: "O que o mantém acessível e o que o interrompe",
      points: [
        "O Mac mini precisa ficar acordado, online e conectado à mesma conta e ao mesmo workspace, com o app desktop aberto. Se ele entrar em repouso, perder a rede ou o app fechar, o celular não o alcança até ele voltar. Escolher Sleep por conta própria também corta o acesso.",
        "Sair da conta no app desktop desliga o Remote Control, mas mantém os pareamentos. Depois de entrar de novo, ative o Remote Control outra vez.",
        "Se aparecer um erro depois de selecionar Add, reinicie o app desktop no Mac mini e tente de novo. Pareamentos sem uso desde 8 de junho de 2026 exigem os dois apps atualizados e um novo pareamento.",
        "O remote control não começa a trabalhar sozinho. Quando uma tarefa termina, o Codex avisa você e espera o seu próximo prompt. Para tarefas agendadas e outras formas de iniciar trabalho sem você, veja [Codex proativo](/proactive-codex) e [tarefas longas no Codex](/blog/codex-long-running-tasks).",
        "Mais soluções em [remote control do Codex](/blog/codex-remote-control#troubleshooting).",
      ],
    },
    {
      kind: "text",
      id: "other-setups",
      title: "Outras formas de manter o Codex acessível",
      points: [
        "Um servidor Linux como host SSH roda o Codex no servidor, mas o celular continua se conectando a um Mac ou PC com Windows que roda o app desktop, então esse computador também precisa ficar ligado. O Mac mini pode ser esse computador. Veja [Codex em uma VPS](/blog/codex-vps).",
        "O Codex cloud roda tarefas na nuvem da OpenAI e continua trabalhando enquanto o computador está em repouso. Ele só enxerga o ambiente na nuvem dele, então seus arquivos locais, logins do navegador e acesso à VPN não estão lá.",
        "Para o Claude Code, a mesma configuração com um Mac mini sempre ligado está em [Claude Code em um Mac mini](/blog/claude-code-mac-mini), e a versão da Anthropic do remote control em [Remote Control do Claude Code](/remote-claude-code).",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Com o Crewmark",
      title: "Dê ao Mac mini sempre ligado um trabalho fixo",
      text: [
        "Um Mac mini sempre ligado responde sempre que você manda uma mensagem pelo celular, e espera quando você não manda. O Crewmark transforma um chat do Codex nele em um funcionário de IA com cargo, uma meta em números, horário de trabalho e um heartbeat: durante o horário de trabalho, a CLI `crewmark` acorda o funcionário para avançar nas issues dele em um quadro compartilhado. O computador em que ele roda precisa ficar ligado, e o Mac mini fica.",
      ],
      steps: [
        {
          title: "Contrate um funcionário",
          text: "Escolha um cargo entre os [cargos de funcionários de IA](/ai-employees), como engenheiro de software ou especialista em SEO, e escreva as metas e os KPIs dele.",
        },
        {
          title: "Conecte o Codex do Mac mini",
          text: "Cole o link de configuração em um chat do Codex no Mac mini. Ele instala a CLI `crewmark` e vincula esse chat ao funcionário. O Claude Code também funciona.",
        },
        {
          title: "Defina o horário de trabalho e um heartbeat",
          text: "Escolha o horário, só em dias úteis ou todos os dias, e a frequência com que o funcionário acorda: a cada 15, 30, 60, 120 ou 240 minutos. O horário pode passar da meia-noite, então, em uma máquina que nunca dorme, um turno da noite também funciona. Cada despertar vai para o mesmo chat do Codex, então ele continua de onde parou.",
        },
        {
          title: "Atribua issues e fale com ele pelo celular",
          text: "Abra crewmark.ai no navegador do celular para criar e atribuir issues, ou escreva para o funcionário no Work log dele; ele responde ali. Atribuir uma issue o acorda na hora e, quando precisa de uma revisão ou de uma decisão, ele marca a issue como Needs action e pergunta a você ali mesmo. Trabalhos para dar a ele estão em [casos de uso do Codex](/use-cases/codex).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Configurar o Codex em um Mac mini como host sempre ligado" },
  mid: {
    title: "Quer que o Mac mini continue trabalhando quando você não está mandando mensagens?",
    text: "O Crewmark acorda o Codex com um heartbeat durante o horário que você definir e entrega a ele a próxima issue de um quadro.",
    button: "Começar",
  },
  faq: {
    title: "Perguntas frequentes",
    items: [
      {
        q: "O Codex pode rodar 24/7 em um Mac mini?",
        a: "Sim, desde que o Mac mini fique acordado, online e conectado, com o app desktop do ChatGPT aberto. Ative Prevent automatic sleeping when the display is off em System Settings > Energy e Prevent sleep while running em Settings > General do app, depois configure o remote control para acessá-lo pelo celular. Depois de cada tarefa, o Codex espera o seu próximo prompt, a menos que outra coisa inicie o trabalho.",
      },
      {
        q: "Como instalar o Codex em um Mac mini?",
        a: "Instale o app desktop do ChatGPT para macOS e selecione Codex nele. Para o terminal, instale a Codex CLI com `curl -fsSL https://chatgpt.com/codex/install.sh | sh` ou `brew install --cask codex`, depois rode `codex` e escolha Sign in with ChatGPT. `codex app` abre o app desktop e o instala se ele não estiver lá.",
      },
      {
        q: "Como usar o Codex do meu Mac mini pelo iPhone?",
        a: "No app desktop do Mac mini, abra Settings > Connections > Control this Mac or PC, selecione Set up ou Add e escaneie o QR code com o iPhone. O Mac mini então aparece em Codex no app do ChatGPT, onde você pode iniciar chats, aprovar comandos e revisar diffs. O app do ChatGPT no Android também funciona.",
      },
      {
        q: "Quais são os requisitos mínimos do Codex em um Mac?",
        a: "Para a Codex CLI, o guia de instalação da OpenAI no GitHub lista o macOS 12 ou mais recente, com 4 GB de RAM como mínimo e 8 GB recomendados. A documentação da OpenAI que consultamos não traz requisitos separados para o app desktop do ChatGPT. Para o remote control, você também precisa de acesso ao Codex na sua conta e do app do ChatGPT mais recente no celular.",
      },
      {
        q: "Preciso do Tailscale para o remote control do Codex?",
        a: "Não. O remote control passa pelo relay seguro da OpenAI, então o Mac mini não fica exposto à internet pública. O Tailscale serve para acessar o próprio Mac mini, como a área de trabalho dele pelo Screen Sharing ou por SSH a partir de um notebook fora de casa; a documentação da OpenAI recomenda uma VPN ou uma rede mesh para acessar máquinas fora da sua rede.",
      },
      {
        q: "Mac mini ou VPS Linux para o Codex?",
        a: "Um servidor Linux basta quando o Codex só precisa de um terminal: a CLI roda no Linux, e o app desktop pode abrir projetos nele por SSH. Mas o celular continua se conectando a um Mac ou PC com Windows que roda o app desktop, então você precisa desse computador ligado de qualquer forma. Escolha um Mac mini para o Computer Use, tarefas no navegador pela extensão do Chrome, desenvolvimento para iOS ou para manter os arquivos em casa. Veja [Codex em uma VPS](/blog/codex-vps).",
      },
    ],
  },
  cta: {
    title: "Dê um trabalho ao seu Mac mini.",
    text: "O Crewmark transforma sessões do Codex e do Claude Code em funcionários de IA com cargos, metas, horários de trabalho e um heartbeat.",
    button: "Começar",
  },
  checked:
    "Verificado com a documentação da OpenAI (conexões remotas, Computer Use, Codex CLI, configurações, planos), o Suporte da Apple e a documentação do Tailscale em 14 de novembro de 2026.",
  disclaimer:
    "O Crewmark é um produto independente, sem afiliação ou endosso da OpenAI, da Apple ou do Tailscale. Codex e ChatGPT são marcas registradas da OpenAI; Mac, Mac mini e Xcode são marcas registradas da Apple.",
};
