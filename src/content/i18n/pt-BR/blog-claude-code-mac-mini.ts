import type { GuideCopy } from "@/components/landing/guide-article";

// pt-BR translation of /blog/claude-code-mac-mini; the English master is src/content/blog/claude-code-mac-mini.ts (the `en` value of claudeCodeMacMini).

const docs = "https://code.claude.com/docs/en/remote-control";

const remoteControl = `# Claude Code CLI: connect every new interactive session
# (add this to ~/.claude/settings.json)
{ "remoteControlAtStartup": true }

# Or run a Remote Control server that hosts several sessions at once;
# --chrome turns on Chrome integration in its sessions
claude remote-control --chrome`;

export const copy: GuideCopy = {
  meta: {
    title: "Claude Code no Mac mini: rode 24/7 e controle pelo celular",
    description:
      "Rode o Claude Code 24/7 em um Mac mini em casa: mantenha-o acordado, ative o Remote Control, controle pelo celular e acesse a área de trabalho via Tailscale.",
  },
  breadcrumb: "Claude Code em um Mac mini",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-14" },
  hero: {
    kicker: "Blog · Claude Code",
    title: "Claude Code em um Mac mini: um servidor sempre ligado que você controla pelo celular",
    lead: "O Remote Control permite controlar o Claude Code pelo app do Claude no celular, mas só enquanto o computador em que ele roda está ligado. Então dê a ele um computador que nunca desliga. Quem fundou o Crewmark mantém em casa um Mac mini como servidor sempre ligado: o Claude Code roda nele com o Remote Control, o celular o controla e um MacBook Air acessa a área de trabalho dele via Tailscale e uma área de trabalho remota. Todos os dados ficam no Mac mini. É a configuração que, na experiência de quem fundou o Crewmark, funciona melhor no momento, e aqui está como montá-la.",
    cta: "Começar",
    secondary: "Ver os passos",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      id: "why-always-on",
      title: "Por que o Claude Code precisa de um computador que fica ligado",
      text: [
        "O jeito mais rápido de começar é o computador que você já tem. O app desktop do Claude tem o Remote Control embutido: no computador que você quer controlar, abra Settings, ative Connect new sessions to Remote Control e abra a sessão pelo app do Claude no celular. O Claude continua rodando nesse computador; o celular é uma janela para ele.",
        "O problema é que isso só funciona enquanto esse computador está ligado. Feche o notebook e o celular não alcança o Claude Code até ele acordar de novo. Um Mac mini que fica ligado em casa elimina esse limite, e é isso que o resto deste guia configura.",
      ],
    },
    {
      kind: "text",
      id: "setup",
      title: "A configuração em resumo",
      points: [
        "Um Mac mini em casa, ligado e configurado para não dormir. Ele é o servidor: o Claude Code, seus repositórios, logins e arquivos ficam nele.",
        "O Claude Code com o Remote Control ativado, no app desktop do Claude ou na CLI.",
        "O app do Claude no celular (iOS ou Android), ou o claude.ai/code em qualquer navegador, para abrir essas sessões de qualquer lugar.",
        "Tailscale e Screen Sharing, para abrir a área de trabalho do Mac mini a partir de um notebook como se você estivesse na frente dele.",
      ],
    },
    {
      kind: "text",
      id: "why-mac-mini",
      title: "Por que um Mac mini e não um servidor Linux",
      text: [
        "Um servidor Linux alugado também fica ligado, e essa configuração está em [Claude Code em uma VPS](/blog/claude-code-vps). Um Mac acrescenta coisas que o Linux não faz:",
      ],
      points: [
        "Uso do computador, em que o Claude opera apps e a tela. Na CLI, é só no macOS. No Claude Desktop, é uma prévia de pesquisa no macOS e no Windows, nos planos Pro, Max ou Ultra (não no Team nem no Enterprise), e o app precisa estar rodando. Veja a [documentação da Anthropic sobre uso do computador](https://code.claude.com/docs/en/computer-use).",
        "Apps para iOS. O Xcode e o iOS Simulator rodam só no macOS, então, se o Claude Code trabalha em um app para iPhone, o servidor precisa ser um Mac.",
        "O app desktop completo. O Claude Desktop no Linux é um beta para Ubuntu e Debian, sem uso do computador, Cowork nem ditado.",
        "Seus dados em casa. Repositórios, logins do navegador e arquivos ficam em uma máquina sua, e não no servidor de um provedor.",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Como configurar o Claude Code em um Mac mini",
      steps: [
        {
          title: "Mantenha o Mac mini acordado",
          text: "Em System Settings > Energy, ative Prevent automatic sleeping when the display is off, para que o Mac mini continue rodando com a tela desligada. Ative também Wake for network access, que permite que ele acorde para serviços compartilhados. Veja as [configurações de repouso e despertar da Apple](https://support.apple.com/guide/mac-help/set-sleep-and-wake-settings-mchle41a6ccd/mac).",
        },
        {
          title: "Instale o Claude Code e faça login",
          text: "Instale o app desktop do Claude, a CLI do Claude Code ou os dois, e faça login com a sua conta do Claude. O Remote Control exige um plano Pro, Max, Ultra, Team ou Enterprise. Chaves de API não funcionam com ele, e nos planos Team ou Enterprise um Owner precisa ativá-lo antes.",
        },
        {
          title: "Ative o Remote Control",
          text: "No app desktop, abra Settings > Code (ou Settings > Claude Code) e ative Connect new sessions to Remote Control, para que toda sessão nova possa ser aberta pelo celular. Para uma única sessão, digite `/remote-control` ou `/rc` na aba Code. Na CLI, defina `remoteControlAtStartup` como true em `~/.claude/settings.json`, ou rode `claude remote-control` como um servidor que hospeda várias sessões ao mesmo tempo.",
          code: remoteControl,
        },
        {
          title: "Abra pelo celular",
          text: "Abra o app do Claude no iOS ou no Android, ou o claude.ai/code em um navegador, e escolha a sessão. O Claude continua rodando no Mac mini; o celular envia as mensagens e mostra os resultados. Se a rede cair, o Claude Code se reconecta automaticamente quando o Mac mini voltar a ficar online. Detalhes de configuração e soluções estão no [guia do Remote Control](/remote-claude-code).",
        },
        {
          title: "Coloque o Mac mini e o notebook no Tailscale",
          text: "Instale o Tailscale no Mac mini e no notebook de onde você vai trabalhar, e adicione os dois à mesma tailnet. O Tailscale cria uma rede privada ponto a ponto entre os seus dispositivos, com conexões WireGuard criptografadas, e só os dispositivos da sua tailnet conseguem se alcançar. Veja [o que é o Tailscale](https://tailscale.com/kb/1151/what-is-tailscale).",
        },
        {
          title: "Ative o Screen Sharing",
          text: "No Mac mini, abra System Settings > General > Sharing e ative Screen Sharing. Ele não pode ficar ativado ao mesmo tempo que o Remote Management, então desative o Remote Management antes, se estiver ativado. Veja o [guia de Screen Sharing da Apple](https://support.apple.com/guide/mac-help/turn-screen-sharing-on-or-off-mh11848/mac).",
        },
        {
          title: "Trabalhe nele pelo notebook",
          text: "Do notebook, conecte-se com o Screen Sharing ao nome ou ao endereço do Mac mini na sua tailnet. Você tem a área de trabalho dele: faça login em um site no navegador dele, abra o Xcode e o Simulator ou acompanhe o que o Claude está fazendo, de casa ou de qualquer outro lugar. Quem fundou o Crewmark trabalha assim a partir de um MacBook Air, e os arquivos nunca saem do Mac mini.",
        },
      ],
      source: { label: "Fonte: documentação do Remote Control da Anthropic", href: docs },
    },
    {
      kind: "text",
      id: "keep-running",
      title: "O que o mantém rodando e o que o faz parar",
      points: [
        "O processo do Claude Code precisa continuar rodando. Encerre o app desktop ou feche o terminal e a sessão fica offline, então deixe-o aberto no Mac mini.",
        "Repouso e quedas de rede têm volta: o Claude Code se reconecta automaticamente quando a máquina volta a ficar online. O modo servidor (`claude remote-control`) é menos paciente. Depois de cerca de 10 minutos sem rede, ele encerra, então inicie-o de novo.",
        "O Remote Control conduz uma sessão que já está rodando. Ele não começa a trabalhar sozinho: quando uma tarefa termina, o Claude espera a sua próxima mensagem.",
        "Pedidos de permissão e limites de uso também interrompem execuções longas. [Como rodar o Claude Code 24/7](/blog/run-claude-code-24-7) cobre os modos de permissão, o `/goal` e os limites dos planos.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Com o Crewmark",
      title: "Dê ao Mac mini sempre ligado um trabalho fixo",
      text: [
        "Um Mac mini sempre ligado responde sempre que você manda uma mensagem, e espera quando você não manda. O Crewmark transforma uma conversa do Claude Code nele em um funcionário de IA com cargo, metas, horário de trabalho e um heartbeat: durante o horário de trabalho, a CLI `crewmark` acorda o funcionário para avançar nas issues dele em um quadro compartilhado. O computador em que ele roda precisa ficar ligado, e o Mac mini fica.",
      ],
      steps: [
        {
          title: "Contrate um funcionário",
          text: "Escolha um cargo entre os [cargos de funcionários de IA](/ai-employees), como engenheiro de software ou especialista em SEO, e escreva as metas e os KPIs dele.",
        },
        {
          title: "Conecte o Claude Code do Mac mini",
          text: "Cole o link de configuração em uma conversa do Claude Code no Mac mini. Ele instala a CLI `crewmark` e vincula essa conversa ao funcionário. O Codex também funciona.",
        },
        {
          title: "Defina o horário de trabalho e um heartbeat",
          text: "Escolha o horário, só em dias úteis ou todos os dias, e a frequência com que o funcionário acorda: a cada 15, 30, 60, 120 ou 240 minutos. O horário pode passar da meia-noite, então, em uma máquina que nunca dorme, um turno da noite também funciona.",
        },
        {
          title: "Atribua issues pelo celular",
          text: "Crie e atribua issues no quadro em crewmark.ai de qualquer navegador; atribuir uma acorda o funcionário na hora. Ele mantém o status de cada issue em dia e, quando precisa de uma revisão ou de uma decisão, marca a issue como Needs action e pergunta a você ali mesmo. Trabalhos para dar a ele estão em [casos de uso do Claude Code](/use-cases/claude-code).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Configurar o Claude Code em um Mac mini como servidor sempre ligado" },
  mid: {
    title: "Quer que o Mac mini continue trabalhando quando você não está mandando mensagens?",
    text: "O Crewmark acorda o Claude Code com um heartbeat durante o horário que você definir e entrega a ele a próxima issue de um quadro.",
    button: "Começar",
  },
  faq: {
    title: "Perguntas frequentes",
    items: [
      {
        q: "O Claude Code pode rodar 24/7 em um Mac mini?",
        a: "Sim, desde que o Mac mini fique acordado e o processo do Claude Code continue rodando. Ative Prevent automatic sleeping when the display is off em System Settings > Energy, deixe o app desktop do Claude aberto (ou a CLI rodando) e ative o Remote Control para acessá-lo pelo celular. Pedidos de permissão e limites de uso continuam valendo.",
      },
      {
        q: "Como configurar o Claude Code em um Mac mini?",
        a: "Mantenha o Mac acordado nos ajustes de Energy, instale o Claude Code ou o app desktop do Claude e faça login, ative Connect new sessions to Remote Control (ou rode `claude remote-control`) e depois abra a sessão no app do Claude no celular. Adicione Tailscale e Screen Sharing para acessar a área de trabalho dele a partir de um notebook.",
      },
      {
        q: "Como usar o Claude Code do meu Mac mini pelo iPhone?",
        a: "Com o Remote Control. Ative-o para a sessão no Mac mini, depois abra o app do Claude no iPhone (ou o claude.ai/code) e escolha a sessão. O Claude roda no Mac mini; o celular envia as suas mensagens e mostra os resultados. É preciso um plano Pro, Max, Ultra, Team ou Enterprise.",
      },
      {
        q: "Preciso do Tailscale para o Claude Code?",
        a: "Não para o Remote Control: você abre a sessão no app do Claude. O Tailscale serve para acessar o próprio Mac mini, como a área de trabalho dele pelo Screen Sharing a partir de um notebook. Ele coloca os seus dispositivos em uma rede privada, uma tailnet, em que só eles conseguem se alcançar.",
      },
      {
        q: "O Claude Code consegue criar apps para iOS em um Mac mini?",
        a: "É o Mac que torna isso possível: o Xcode e o iOS Simulator rodam só no macOS, e é por isso que esta configuração usa um Mac mini em vez de um servidor Linux. Rode o Claude Code no Mac mini, na pasta do projeto do app, e abra a área de trabalho dele pelo Screen Sharing quando quiser ver o Simulator com os próprios olhos.",
      },
      {
        q: "Mac mini ou VPS Linux para o Claude Code?",
        a: "Uma VPS Linux basta quando o Claude Code só precisa de um terminal e de um navegador: a CLI roda em qualquer distribuição e o Claude in Chrome funciona no Linux. Escolha um Mac mini para uso do computador, desenvolvimento para iOS com o Xcode e o Simulator, ou para manter os seus arquivos em uma máquina em casa. Veja [Claude Code em uma VPS](/blog/claude-code-vps).",
      },
    ],
  },
  cta: {
    title: "Dê um trabalho ao seu Mac mini.",
    text: "O Crewmark transforma sessões do Claude Code e do Codex em funcionários de IA com cargos, metas, horários de trabalho e um heartbeat.",
    button: "Começar",
  },
  checked:
    "Verificado com a documentação do Claude Code da Anthropic (Remote Control, uso do computador, Claude Desktop no Linux), o Suporte da Apple e a documentação do Tailscale em 14 de novembro de 2026.",
  disclaimer:
    "O Crewmark é um produto independente, sem afiliação ou endosso da Anthropic, da Apple ou do Tailscale. Claude e Claude Code são marcas registradas da Anthropic; Mac, Mac mini e Xcode são marcas registradas da Apple.",
};
