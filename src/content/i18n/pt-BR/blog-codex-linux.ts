import type { GuideCopy } from "@/components/landing/guide-article";

// pt-BR translation of /blog/codex-linux; the English master is src/content/blog/codex-linux.ts (the `en` value of codexLinux).

const linuxAppDocs = "https://learn.chatgpt.com/docs/linux/linux-app";
const cliDocs = "https://learn.chatgpt.com/docs/codex/cli";
const sandboxingDocs = "https://learn.chatgpt.com/docs/sandboxing";
const remoteDocs = "https://learn.chatgpt.com/docs/remote-connections";
const cloudDocs = "https://learn.chatgpt.com/docs/cloud";

const appInstall = `# Ubuntu or Debian (ARM64: chatgpt_arm64.deb)
sudo apt install ./chatgpt_amd64.deb

# Fedora (ARM64: chatgpt.aarch64.rpm)
sudo dnf install ./chatgpt.x86_64.rpm

# Arch Linux: download install-arch.sh from
# https://persistent.oaistatic.com/codex-app-prod/linux/install-arch.sh
# then run it (it does a full system upgrade)
sudo bash install-arch.sh`;

const appUpdate = `# Ubuntu or Debian
sudo apt update
sudo apt install --only-upgrade chatgpt

# Fedora
sudo dnf upgrade --refresh chatgpt

# Arch Linux
sudo pacman -Syu`;

const bubblewrap = `# Ubuntu or Debian
sudo apt install bubblewrap

# Fedora
sudo dnf install bubblewrap

# Ubuntu 24.04, if Codex still warns: copy the bwrap-userns-restrict
# profile to /etc/apparmor.d/, then load it
sudo apt install apparmor-profiles apparmor-utils
sudo apparmor_parser -r /etc/apparmor.d/bwrap-userns-restrict`;

const headless = `# On the server, with device code login turned on in ChatGPT
codex login --device-auth

# Or forward the sign-in callback from your own computer, then sign in on the server
ssh -L 1455:localhost:1455 user@remote
codex login`;

const sshConfig = `# ~/.ssh/config on the Mac or PC running the ChatGPT desktop app
Host devbox
  HostName devbox.example.com
  User you
  IdentityFile ~/.ssh/id_ed25519`;

export const copy: GuideCopy = {
  meta: {
    title: "Codex no Linux: app desktop, instalação da CLI e sandbox",
    description:
      "Instale o Codex no Linux: a prévia do app desktop do ChatGPT para Ubuntu, Debian, Fedora e Arch, ou a CLI com bubblewrap. E login headless e hosts SSH.",
  },
  breadcrumb: "Codex no Linux",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-14" },
  hero: {
    kicker: "Blog · Codex",
    title: "Codex no Linux: a prévia do app desktop, a CLI e o que o Linux ainda não faz",
    lead: "Há duas formas de rodar o Codex em uma máquina Linux. O app desktop do ChatGPT, que inclui o Codex, está em versão prévia no Linux desde agosto de 2026, para Ubuntu, Debian, Fedora e Arch em x64 e ARM64. A Codex CLI se instala com um único comando e usa o `bubblewrap` no sandbox. Este guia cobre as duas instalações, o login em um servidor headless, o que o Linux ainda não tem (o Computer Use e o controle de um host Linux pelo celular), como uma máquina Linux ainda funciona como host SSH para o app desktop em um Mac ou PC, e o Codex cloud.",
    cta: "Começar",
    secondary: "Ver os passos",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      id: "options",
      title: "Qual Codex usar no Linux",
      points: [
        "O app desktop do ChatGPT, em versão prévia: uma janela com o Codex ao lado de Chat e Work. Essa é a interface gráfica (GUI) do Codex no Linux. O guia da OpenAI cobre o Linux de desktop; em um servidor sem desktop, use a CLI.",
        "A Codex CLI: roda em um terminal, em um desktop ou em um servidor headless que você acessa por SSH.",
        "A extensão de IDE, para VS Code, Cursor ou Windsurf, se você prefere ficar no seu editor.",
        "Codex cloud: as tarefas rodam nos servidores da OpenAI, então nada seu precisa ficar ligado. Veja [Codex cloud](#cloud) mais abaixo.",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Como instalar o app desktop do Codex no Linux",
      steps: [
        {
          title: "Confira a sua distribuição e a arquitetura",
          text: "A versão prévia suporta Ubuntu 24.04 LTS e 26.04 LTS, Debian 13, Fedora 43 e 44, e o Arch Linux atual e totalmente atualizado. Outras distribuições podem funcionar, mas não têm suporte formal. Há pacotes para x64 e ARM64: rode `uname -m`; `x86_64` significa x64, e `aarch64` ou `arm64` significa ARM64.",
          code: "uname -m",
        },
        {
          title: "Baixe e instale o pacote",
          text: `Baixe o pacote para a sua distribuição e arquitetura (veja o [guia do app para Linux da OpenAI](${linuxAppDocs})) e instale-o a partir da pasta em que você o salvou. No Arch, o script de instalação da OpenAI também faz uma atualização completa do sistema.`,
          code: appInstall,
        },
        {
          title: "Abra o app e selecione Codex",
          text: "Abra o ChatGPT pelo menu de aplicativos, ou rode `chatgpt` em um terminal, faça login e selecione Codex. No Wayland, o app usa o XWayland quando ele está disponível; o Wayland nativo é experimental, e você pode forçá-lo com `chatgpt --ozone-platform=wayland`.",
        },
        {
          title: "Mantenha-o atualizado",
          text: "As atualizações chegam pelo gerenciador de pacotes.",
          code: appUpdate,
        },
        {
          title: "Mantenha os chats longos rodando",
          text: "Ative Settings > General > Prevent sleep while running, que existe no macOS e no Linux, para que os chats locais continuem enquanto você está longe do computador.",
        },
      ],
      source: { label: "Fonte: documentação do Codex da OpenAI, app do ChatGPT para Linux", href: linuxAppDocs },
    },
    {
      kind: "steps",
      id: "cli",
      title: "Como instalar a Codex CLI no Linux",
      steps: [
        {
          title: "Rode o script de instalação",
          text: "O mesmo comando instala e atualiza o Codex; `codex update` também aplica uma atualização quando a versão instalada suporta isso. Com o Node.js instalado, `npm install -g @openai/codex` também funciona. A OpenAI publica builds para Linux em x86_64 e aarch64.",
          code: "curl -fsSL https://chatgpt.com/codex/install.sh | sh",
        },
        {
          title: "Instale o bubblewrap para o sandbox",
          text: `O sandbox do Codex no Linux precisa do \`bubblewrap\`. Sem um \`bwrap\` no PATH, o Codex recorre a um helper embutido que precisa de user namespaces sem privilégios, e mostra um aviso ao iniciar. No Ubuntu 25.04, o bubblewrap empacotado funciona como está; no Ubuntu 24.04, o aviso pode continuar até você carregar o perfil do AppArmor \`bwrap-userns-restrict\` (veja a [documentação de sandboxing da OpenAI](${sandboxingDocs})).`,
          code: bubblewrap,
        },
        {
          title: "Faça login",
          text: "Rode `codex` e escolha Sign in with ChatGPT para usar o seu plano, ou faça login com uma chave de API, cobrada pelas tarifas padrão da API. O Codex cloud exige o login com o ChatGPT. `codex login status` sai com o código 0 quando o login está feito.",
        },
        {
          title: "Em um servidor headless, faça login com um código de dispositivo",
          text: "Sem navegador na máquina, escolha Sign in with Device Code ou rode `codex login --device-auth`, que está em beta. O login por código de dispositivo precisa ser ativado antes, nas configurações de segurança do ChatGPT ou pelo administrador do workspace. Há duas outras formas: copiar o `~/.codex/auth.json` de um computador em que o login pelo navegador funcionou, tratando esse arquivo como uma senha, ou encaminhar o callback do login por SSH e rodar `codex login` no servidor.",
          code: headless,
        },
      ],
      source: { label: "Fonte: documentação do Codex da OpenAI, Codex CLI", href: cliDocs },
    },
    {
      kind: "text",
      id: "computer-use",
      title: "Ainda sem Computer Use no Linux",
      text: [
        "O Computer Use permite que o Codex opere apps desktop movendo o ponteiro e digitando. Ele não está na versão prévia do app desktop para Linux; o guia da OpenAI para Linux diz que uma versão futura vai adicioná-lo. Por enquanto, ele roda no app desktop no macOS e no Windows.",
      ],
      points: [
        "O trabalho que acontece em um terminal continua rodando no Linux: o Codex roda comandos e edita arquivos ali, dentro do sandbox do `bubblewrap`.",
        "Para tarefas que precisam de apps desktop, use um Mac ou um PC com Windows. No Windows, o Computer Use assume a tela enquanto trabalha: veja [Codex no Windows](/blog/codex-windows). Para um Mac sempre ligado, veja [Codex em um Mac mini](/blog/codex-mac-mini).",
      ],
    },
    {
      kind: "steps",
      id: "ssh",
      title: "Use uma máquina Linux pelo app desktop em um Mac ou PC",
      text: [
        "A documentação de conexões remotas da OpenAI lista só computadores Mac e Windows como hosts que o app do ChatGPT no celular consegue controlar, então controlar o app desktop no Linux pelo celular não está documentado. Uma máquina Linux ainda pode ser um host SSH: o app desktop em um Mac ou PC com Windows abre projetos nela, e o Codex roda comandos, lê arquivos e grava alterações ali. Você então a conduz pelo celular por meio desse Mac ou PC.",
      ],
      steps: [
        {
          title: "Adicione a máquina Linux à sua configuração SSH",
          text: "No Mac ou PC que roda o app desktop, adicione um host ao `~/.ssh/config`. O Codex lê desse arquivo os aliases de host concretos e ignora as entradas que são só padrões. Confira se `ssh devbox` funciona a partir desse computador. Trate isso como qualquer acesso SSH: chaves confiáveis, uma conta com o mínimo de privilégios e nada sem autenticação escutando em uma rede pública; para acessar uma máquina fora da sua rede, use uma VPN ou uma ferramenta de rede mesh.",
          code: sshConfig,
        },
        {
          title: "Instale o Codex na máquina Linux e faça login",
          text: "O app inicia o Codex na máquina remota via SSH, no login shell do usuário remoto, então `codex` precisa estar no PATH ali. Instale-o com o script acima e faça login, com `codex login --device-auth` em um servidor headless.",
        },
        {
          title: "Adicione o host no app desktop",
          text: "Vá em Settings > Connections, adicione ou ative o host SSH e escolha uma pasta de projeto nele. Quando o mesmo repositório Git está salvo como projeto dos dois lados, você pode passar um chat entre o seu computador e o host Linux pelo rodapé do chat.",
        },
        {
          title: "Controle-a pelo celular",
          text: "Pareie o celular com o Mac ou PC como descrito em [remote control do Codex](/blog/codex-remote-control). O celular conversa com esse computador, que precisa ficar ligado, e o Codex faz o trabalho na máquina Linux. Para um servidor alugado, veja [Codex em uma VPS](/blog/codex-vps).",
        },
      ],
      source: { label: "Fonte: documentação do Codex da OpenAI, conexões remotas", href: remoteDocs },
    },
    {
      kind: "text",
      id: "cloud",
      title: "Ou deixe o Codex cloud rodar a tarefa",
      text: [
        `Se você não quer manter nenhuma máquina ligada, o [Codex cloud](${cloudDocs}) roda tarefas nos servidores da OpenAI. Cada tarefa ganha o próprio workspace e continua enquanto o computador está em repouso.`,
      ],
      points: [
        "Inicie uma tarefa pela web ou pelo app desktop com Work in > Cloud, ou pelo Codex no app do ChatGPT no celular. Em um terminal Linux, `codex cloud` abre um seletor de chats na nuvem, `codex cloud exec` envia uma tarefa e `codex cloud list` lista as recentes.",
        "Ele exige login no ChatGPT e não está disponível com uma chave de API. A tabela de planos da OpenAI o lista nos planos Plus, Pro, Business e Enterprise.",
        "Uma tarefa na nuvem só enxerga o ambiente na nuvem dela. Os arquivos locais da sua máquina, processos em execução, logins do navegador e acesso à VPN não são levados junto, e não dá para passar para ela um chat do seu computador.",
        "Para uma configuração reutilizável, crie um ambiente em Work in > Cloud > Select environment > Create environment, com acesso total à internet pública ou uma lista de permissões.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Com o Crewmark",
      title: "Dê ao Codex da sua máquina Linux um trabalho fixo",
      text: [
        "O app desktop, a CLI e o SSH esperam você iniciar a próxima tarefa. O Crewmark transforma um chat do Codex na sua máquina Linux em um funcionário de IA com cargo, metas, horário de trabalho e um heartbeat: durante o horário dele, a CLI `crewmark`, que roda no Linux e também no macOS e no Windows, o acorda para pegar a próxima issue de um quadro compartilhado. A máquina precisa ficar ligada, o que um servidor Linux já faz de qualquer forma.",
      ],
      steps: [
        {
          title: "Contrate um funcionário",
          text: "Escolha um cargo entre os [cargos de funcionários de IA](/ai-employees), como [engenheiro de software](/ai-employees/software-engineer), e escreva as metas e os KPIs dele.",
        },
        {
          title: "Conecte um chat do Codex na máquina",
          text: "Vincule um chat do Codex no desktop ou servidor Linux ao funcionário pela CLI `crewmark`. Essa conversa vira o funcionário. O Claude Code também funciona.",
        },
        {
          title: "Defina o horário de trabalho e um heartbeat",
          text: "Só em dias úteis ou todos os dias, no seu fuso horário, com um horário que pode passar da meia-noite. Durante esse horário, a CLI acorda o funcionário a cada 15, 30, 60, 120 ou 240 minutos. Veja [como deixar o Codex proativo](/proactive-codex).",
        },
        {
          title: "Atribua issues de qualquer navegador",
          text: "Crie e atribua issues no quadro em crewmark.ai; atribuir uma acorda o funcionário. Quando precisa de uma revisão ou de uma decisão, ele marca a issue como Needs action e pergunta a você ali mesmo. Trabalhos para dar a ele estão em [casos de uso do Codex](/use-cases/codex).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Instalar o app desktop do ChatGPT no Linux e usar o Codex" },
  mid: {
    title: "Quer que o Codex no Linux continue trabalhando quando você não está mandando prompts?",
    text: "O Crewmark acorda o seu Codex com um heartbeat durante o horário que você definir e entrega a ele a próxima issue de um quadro.",
    button: "Começar",
  },
  faq: {
    title: "Perguntas frequentes",
    items: [
      {
        q: "Existe uma GUI do Codex para Linux?",
        a: "Sim. O app desktop do ChatGPT, que inclui o Codex, está em versão prévia no Linux para Ubuntu 24.04 e 26.04, Debian 13, Fedora 43 e 44 e Arch Linux, em x64 e ARM64. Se você prefere ficar em um editor, a extensão de IDE do Codex funciona no VS Code, no Cursor e no Windsurf.",
      },
      {
        q: "Como baixar o app desktop do Codex para Linux?",
        a: "Baixe o pacote .deb (Ubuntu, Debian) ou .rpm (Fedora) para a sua arquitetura, como descreve o guia do app para Linux da OpenAI, e instale-o com `sudo apt install ./chatgpt_amd64.deb` ou `sudo dnf install ./chatgpt.x86_64.rpm`; no Arch, rode o script `install-arch.sh` da OpenAI. Depois abra o ChatGPT, ou rode `chatgpt`, e selecione Codex.",
      },
      {
        q: "Como instalar a Codex CLI no Linux?",
        a: "Rode `curl -fsSL https://chatgpt.com/codex/install.sh | sh`, ou `npm install -g @openai/codex`. Instale o `bubblewrap` para o sandbox (`sudo apt install bubblewrap` ou `sudo dnf install bubblewrap`), depois rode `codex` e faça login.",
      },
      {
        q: "O Computer Use do Codex funciona no Linux?",
        a: "Ainda não. O Computer Use não está na versão prévia do app desktop para Linux, e a OpenAI diz que uma versão futura vai adicioná-lo. Hoje ele está disponível no app desktop no macOS e no Windows.",
      },
      {
        q: "Como fazer login no Codex em um servidor Linux headless?",
        a: "Ative o login por código de dispositivo nas configurações de segurança do ChatGPT (ou peça ao administrador do workspace que ative) e depois rode `codex login --device-auth`, que está em beta. Você também pode copiar o `~/.codex/auth.json` de um computador em que já fez login, ou conectar-se com `ssh -L 1455:localhost:1455 user@remote` e rodar `codex login` no servidor.",
      },
      {
        q: "Posso controlar o Codex no Linux pelo celular?",
        a: "Não diretamente: a documentação da OpenAI lista só computadores Mac e Windows como hosts de remote control. Adicione a máquina Linux como host SSH no app desktop do ChatGPT em um Mac ou PC com Windows e depois controle esse computador pelo app do ChatGPT no celular; o Codex roda na máquina Linux.",
      },
    ],
  },
  cta: {
    title: "Coloque o Codex da sua máquina Linux para trabalhar.",
    text: "O Crewmark transforma sessões do Claude Code e do Codex em funcionários de IA com cargos, metas, horários de trabalho e um heartbeat.",
    button: "Começar",
  },
  checked:
    "Verificado com a documentação do Codex da OpenAI (app do ChatGPT para Linux, CLI, login, sandboxing, Computer Use, conexões remotas e Codex cloud) em 14 de novembro de 2026.",
  disclaimer:
    "O Crewmark é um produto independente, sem afiliação ou endosso da OpenAI nem de qualquer empresa citada nesta página. Codex e ChatGPT são marcas registradas da OpenAI.",
};
