import type { GuideCopy } from "@/components/landing/guide-article";

// pt-BR translation of /blog/claude-code-vps; the English master is src/content/blog/claude-code-vps.ts (the `en` value of claudeCodeVps).

const docs = "https://code.claude.com/docs/en/remote-control";

const server = `# Start a tmux session, so the server keeps running after you close SSH
tmux new -s claude

# Inside tmux, from your project folder: run the Remote Control server and
# restart it whenever it exits (it gives up after ~10 minutes offline)
cd ~/my-project
while true; do claude remote-control; sleep 10; done

# Detach with Ctrl+B, then D. Reattach later with:
tmux attach -t claude`;

export const copy: GuideCopy = {
  meta: {
    title: "Claude Code em uma VPS: rode 24/7 em um servidor Linux",
    description:
      "Instale o Claude Code em uma VPS Linux ou servidor Ubuntu, rode o Remote Control em modo servidor, mantenha-o no tmux e controle pelo celular. E os limites.",
  },
  breadcrumb: "Claude Code em uma VPS",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-14" },
  hero: {
    kicker: "Blog · Claude Code",
    title: "Claude Code em uma VPS: rode em um servidor Linux e controle pelo celular",
    lead: "O Remote Control permite controlar o Claude Code pelo app do Claude no celular, mas só enquanto o computador em que ele roda está ligado. Um servidor Linux alugado, uma VPS, não desliga. Instale o Claude Code nele, rode o Remote Control em modo servidor e você pode abrir as sessões dele pelo celular onde estiver. Este guia cobre a configuração no Ubuntu, no Debian ou em qualquer outra distribuição, como mantê-lo rodando, como adicionar uma área de trabalho para fazer login em sites e o que um servidor Linux não faz em comparação com [um Mac mini em casa](/blog/claude-code-mac-mini).",
    cta: "Começar",
    secondary: "Ver os passos",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      id: "what-you-need",
      title: "Do que você precisa",
      points: [
        "Um servidor Linux em que você consiga entrar por SSH, de um provedor como DigitalOcean ou OVHcloud. Qualquer distribuição serve para a CLI do Claude Code; o Claude Desktop exige Ubuntu 22.04 ou mais recente, ou Debian 12 ou mais recente.",
        "Um plano Claude Pro, Max, Ultra, Team ou Enterprise. O Remote Control não funciona com chaves de API, e nos planos Team ou Enterprise um Owner precisa ativá-lo antes.",
        "O app do Claude no celular (iOS ou Android), ou o claude.ai/code em um navegador.",
        "Opcionalmente, um ambiente de desktop e uma área de trabalho remota no servidor, para as vezes em que o Claude precisa de um site em que você tem que fazer login.",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Como configurar o Claude Code em uma VPS Linux",
      steps: [
        {
          title: "Alugue um servidor e conecte-se a ele",
          text: "Crie um servidor Linux em um provedor como DigitalOcean ou OVHcloud e conecte-se a ele por SSH. Escolher Ubuntu 22.04+ ou Debian 12+ mantém o Claude Desktop como opção; em qualquer outra distribuição, você usa a CLI.",
        },
        {
          title: "Instale o Claude Code e faça login",
          text: "Instale a CLI do Claude Code com o script de instalação da Anthropic. Ela roda em um terminal (a Anthropic lista Ubuntu 20.04+ e Debian 10+ entre os sistemas suportados), então combina com um servidor headless que você só acessa por SSH. No Ubuntu 22.04+ ou no Debian 12+, você pode instalar o Claude Desktop no lugar dela, com apt; ele está em beta no Linux (veja [Claude Desktop no Linux](https://code.claude.com/docs/en/desktop-linux)). Depois rode `claude` e faça login com a sua conta do Claude, não com uma chave de API.",
          code: "curl -fsSL https://claude.ai/install.sh | bash",
        },
        {
          title: "Inicie o Remote Control em modo servidor",
          text: "Na pasta do projeto, rode `claude remote-control`. Ele inicia um servidor que pode hospedar várias sessões do Claude Code ao mesmo tempo, e você pode abrir cada uma delas pelo celular. Adicione `--chrome` para ativar a integração com o Chrome nessas sessões. Para que, em vez disso, toda sessão interativa se conecte, defina `remoteControlAtStartup` como true em `~/.claude/settings.json`.",
          code: server,
        },
        {
          title: "Mantenha-o rodando depois de sair",
          text: "O Remote Control só funciona enquanto o processo claude roda: feche o terminal e as sessões dele ficam offline. Rode-o dentro do tmux ou do screen para que ele sobreviva ao fechamento da conexão SSH, ou como um serviço. O modo servidor também encerra depois de cerca de 10 minutos sem rede, então reinicie-o automaticamente, como faz o loop acima. Para modos de permissão e limites de uso em execuções longas, veja [como rodar o Claude Code 24/7](/blog/run-claude-code-24-7).",
        },
        {
          title: "Abra pelo celular",
          text: "Abra o app do Claude no iOS ou no Android, ou o claude.ai/code, e escolha uma sessão. O Claude roda no servidor; o celular mostra a conversa e envia as suas mensagens. Detalhes de configuração e soluções estão no [guia do Remote Control](/remote-claude-code). Para mandar mensagens ao Claude Code pelo Telegram, veja [channels do Claude Code](/blog/claude-code-channels).",
        },
      ],
      source: { label: "Fonte: documentação do Remote Control da Anthropic", href: docs },
    },
    {
      kind: "text",
      id: "desktop",
      title: "Adicione uma área de trabalho para fazer login em sites",
      text: [
        "Um servidor acessado por SSH não tem tela, o que não é problema até o Claude precisar de um site em que é preciso fazer login. Adicione uma área de trabalho remota e você pode fazer esse login por conta própria, e depois deixar o Claude usar o navegador.",
      ],
      points: [
        "Instale um ambiente de desktop e um servidor de área de trabalho remota na VPS, e conecte-se pelo notebook quando precisar fazer login em algum lugar.",
        "Instale o Google Chrome ou o Microsoft Edge com a extensão Claude in Chrome e faça login nos sites que o Claude deve usar. O Claude in Chrome funciona no Linux; ele não é suportado no WSL.",
        "Inicie o servidor com `claude remote-control --chrome` para que as sessões dele possam usar esse navegador.",
        "Acesse a área de trabalho remota via Tailscale, que coloca os seus dispositivos em uma rede privada, uma tailnet, em que só eles conseguem se alcançar. Veja [o que é o Tailscale](https://tailscale.com/kb/1151/what-is-tailscale).",
        "Com um desktop no Ubuntu ou no Debian, o Claude Desktop também é uma opção, além da CLI.",
      ],
    },
    {
      kind: "text",
      id: "limits",
      title: "O que um servidor Linux não faz",
      text: [
        "Se algum destes pontos importar, use [um Mac mini em casa](/blog/claude-code-mac-mini), a configuração que quem fundou o Crewmark usa.",
      ],
      points: [
        "Sem uso do computador. O Claude não consegue operar apps e a tela no Linux: na CLI, o uso do computador é só no macOS, e no Claude Desktop é uma prévia de pesquisa no macOS e no Windows.",
        "Sem desenvolvimento para iOS. O Xcode e o iOS Simulator rodam só no macOS, então um servidor Linux não consegue compilar nem rodar um app para iPhone.",
        "Um app desktop mais limitado. O Claude Desktop no Linux é um beta para Ubuntu e Debian, sem uso do computador, Cowork nem ditado.",
        "Um processo que precisa ficar de pé. Como em qualquer configuração do Remote Control, as sessões só ficam acessíveis enquanto o claude roda no servidor.",
      ],
    },
    {
      kind: "table",
      id: "mac-mini-vs-vps",
      title: "Mac mini vs VPS Linux para o Claude Code",
      headers: ["", "Mac mini em casa", "VPS Linux"],
      rows: [
        ["Onde roda", "Um Mac seu, em casa; os arquivos ficam nele", "Um servidor alugado em um provedor como DigitalOcean ou OVHcloud"],
        ["Remote Control pelo celular", "Sim: Claude Desktop ou a CLI", "Sim: a CLI em qualquer distribuição, ou o Claude Desktop (beta) no Ubuntu 22.04+ e no Debian 12+"],
        ["Uso do computador", "Sim: CLI no macOS; Desktop como prévia de pesquisa no Pro, Max ou Ultra", "Não"],
        ["Desenvolvimento para iOS (Xcode, iOS Simulator)", "Sim", "Não: exige um Mac"],
        ["Claude in Chrome", "Sim", "Sim, com Chrome ou Edge"],
        ["Área de trabalho remota", "Screen Sharing, acessado via Tailscale", "Um ambiente de desktop e uma área de trabalho remota que você adiciona"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Com o Crewmark",
      title: "Dê ao servidor um trabalho fixo",
      text: [
        "Um servidor que nunca dorme responde sempre que você manda uma mensagem, e espera quando você não manda. O Crewmark transforma uma conversa do Claude Code nele em um funcionário de IA com cargo, metas, horário de trabalho e um heartbeat: durante o horário de trabalho, a CLI `crewmark`, que roda no Linux e também no macOS e no Windows, acorda o funcionário para avançar nas issues dele em um quadro compartilhado. O computador em que ele roda precisa ficar ligado, e uma VPS fica.",
      ],
      steps: [
        {
          title: "Contrate um funcionário",
          text: "Escolha um cargo entre os [cargos de funcionários de IA](/ai-employees), como engenheiro de software ou especialista em SEO, e escreva as metas e os KPIs dele.",
        },
        {
          title: "Conecte o Claude Code do servidor",
          text: "Cole o link de configuração em uma conversa do Claude Code na VPS. Ele instala a CLI `crewmark` e vincula essa conversa ao funcionário. O Codex também funciona.",
        },
        {
          title: "Defina o horário de trabalho e um heartbeat",
          text: "Só em dias úteis ou todos os dias, um horário que pode passar da meia-noite e um despertar a cada 15, 30, 60, 120 ou 240 minutos.",
        },
        {
          title: "Atribua issues pelo celular",
          text: "Crie e atribua issues no quadro em crewmark.ai de qualquer navegador; atribuir uma acorda o funcionário na hora. Quando precisa de uma revisão ou de uma decisão, ele marca a issue como Needs action e pergunta a você ali mesmo. Trabalhos para dar a ele estão em [casos de uso do Claude Code](/use-cases/claude-code).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Configurar o Claude Code em uma VPS Linux com o Remote Control" },
  mid: {
    title: "Quer que o servidor continue trabalhando quando você não está mandando mensagens?",
    text: "O Crewmark acorda o Claude Code com um heartbeat durante o horário que você definir e entrega a ele a próxima issue de um quadro.",
    button: "Começar",
  },
  faq: {
    title: "Perguntas frequentes",
    items: [
      {
        q: "Posso rodar o Claude Code em uma VPS?",
        a: "Sim. Instale a CLI do Claude Code em um servidor Linux, faça login com um plano Pro, Max, Ultra, Team ou Enterprise e rode `claude remote-control` dentro do tmux para que ele continue rodando depois que você sair. Depois abra as sessões dele pelo app do Claude no celular ou em claude.ai/code.",
      },
      {
        q: "Como instalar o Claude Code em um servidor Linux?",
        a: "Instale a CLI do Claude Code, que funciona em qualquer distribuição, inclusive em um servidor headless acessado por SSH, e faça login com a sua conta do Claude. No Ubuntu 22.04+ ou no Debian 12+, você também pode instalar o Claude Desktop com apt; ele está em beta no Linux e não inclui uso do computador, Cowork nem ditado.",
      },
      {
        q: "O Claude Code Remote Control funciona no Linux?",
        a: "Sim. Rode `claude remote-control` para ter um servidor que hospeda várias sessões, ou ative o Remote Control para uma sessão com `/remote-control`. Ele exige login pelo claude.ai em um plano Pro, Max, Ultra, Team ou Enterprise; chaves de API não são suportadas.",
      },
      {
        q: "Como manter o Claude Code rodando em um servidor depois de fechar o SSH?",
        a: "Rode-o dentro do tmux ou do screen, ou como um serviço. Fechar o terminal encerra o processo claude e deixa as sessões de Remote Control dele offline. O modo servidor encerra depois de cerca de 10 minutos sem rede, então coloque-o em um loop ou em um serviço que o reinicie.",
      },
      {
        q: "O Claude Code tem uso do computador em um servidor Linux?",
        a: "Não. O uso do computador não está disponível no Linux, nem na CLI nem no Claude Desktop. O Claude in Chrome funciona no Linux, então o Claude ainda consegue usar sites em um navegador. Para uso do computador ou desenvolvimento para iOS, use um Mac, como [um Mac mini em casa](/blog/claude-code-mac-mini).",
      },
      {
        q: "Do que eu preciso para rodar o Claude Code em uma VPS?",
        a: "Um servidor Linux em que você consiga entrar por SSH, um plano do Claude que inclua o Remote Control (Pro, Max, Ultra, Team ou Enterprise) e o app do Claude no celular. Qualquer distribuição serve para a CLI; o Claude Desktop exige Ubuntu 22.04+ ou Debian 12+.",
      },
    ],
  },
  cta: {
    title: "Coloque o seu servidor para trabalhar.",
    text: "O Crewmark transforma sessões do Claude Code e do Codex em funcionários de IA com cargos, metas, horários de trabalho e um heartbeat.",
    button: "Começar",
  },
  checked:
    "Verificado com a documentação do Claude Code da Anthropic (Remote Control, Claude Desktop no Linux, uso do computador, integração com o Chrome) e a documentação do Tailscale em 14 de novembro de 2026.",
  disclaimer:
    "O Crewmark é um produto independente, sem afiliação ou endosso da Anthropic nem de qualquer empresa citada nesta página. Claude e Claude Code são marcas registradas da Anthropic.",
};
