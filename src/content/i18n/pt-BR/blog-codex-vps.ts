import type { GuideCopy } from "@/components/landing/guide-article";

// pt-BR translation of /blog/codex-vps; the English master is src/content/blog/codex-vps.ts (the `en` value of codexVps).

const docs = "https://learn.chatgpt.com/docs/remote-connections";

const install = `# On the server: install the Codex CLI (run it again to update)
curl -fsSL https://chatgpt.com/codex/install.sh | sh
# or: npm install -g @openai/codex

# Codex's sandbox on Linux uses bubblewrap
sudo apt install bubblewrap   # Fedora: sudo dnf install bubblewrap`;

const login = `# Headless sign-in (beta; turn on device code login in ChatGPT first)
codex login --device-auth

# Or forward the browser callback from your computer, then run codex login
ssh -L 1455:localhost:1455 you@devbox.example.com

# Exits 0 once you're signed in
codex login status`;

const ssh = `# ~/.ssh/config on the Mac or PC running the ChatGPT desktop app
Host devbox
  HostName devbox.example.com
  User you
  IdentityFile ~/.ssh/id_ed25519

# Check it works before adding it in the app
ssh devbox`;

const tmux = `# On the server: run Codex inside tmux so it outlives your SSH connection
tmux new -s codex
cd ~/my-project
codex

# Detach with Ctrl+B, then D. Reattach later with:
tmux attach -t codex`;

export const copy: GuideCopy = {
  meta: {
    title: "Codex em uma VPS: instale, faça login e conecte via SSH",
    description:
      "Instale a Codex CLI em uma VPS Linux, faça login com device auth, adicione o servidor como host SSH no app desktop do ChatGPT e acesse-o pelo celular.",
  },
  breadcrumb: "Codex em uma VPS",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-14" },
  hero: {
    kicker: "Blog · Codex",
    title: "Codex em uma VPS: instale em um servidor Linux e conecte via SSH",
    lead: "Um servidor Linux alugado, uma VPS, nunca dorme, e a Codex CLI roda no Linux. O ponto que precisa dar certo é como você o acessa pelo celular: o app do ChatGPT não se conecta ao servidor em si. Ele se conecta ao app desktop do ChatGPT em um Mac ou PC com Windows, e esse app roda os chats no servidor via SSH. Este guia cobre como instalar o Codex no servidor e fazer login, adicioná-lo como host SSH, controlá-lo pelo celular, uma configuração só de terminal com tmux, como manter o servidor seguro e o Codex cloud, caso você prefira não manter servidor nenhum.",
    cta: "Começar",
    secondary: "Ver os passos",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      id: "how-it-works",
      title: "Como as peças do Codex em uma VPS se encaixam",
      text: ["Três máquinas estão envolvidas, e cada uma tem uma função:"],
      points: [
        "O servidor Linux roda o Codex. Os chats nos projetos dele rodam comandos, leem arquivos e gravam alterações ali, com as dependências, as políticas de segurança e o poder de processamento do servidor. O app desktop inicia o Codex nele via SSH, no login shell do usuário remoto.",
        "Um Mac ou PC com Windows roda o app desktop do ChatGPT, que mantém a conexão SSH. É com esse host que o celular conversa, então ele também precisa ficar acordado e online.",
        "O celular roda o app do ChatGPT e controla esse host pelo remote control. Ele envia prompts e aprovações e mostra diffs, a saída do terminal e notificações.",
        "A OpenAI documenta só macOS e Windows como hosts de remote control, então parear um celular direto com um servidor Linux não está documentado. Pareie o celular com o Mac ou PC, de preferência [um Mac mini sempre ligado](/blog/codex-mac-mini).",
      ],
    },
    {
      kind: "text",
      id: "what-you-need",
      title: "Do que você precisa",
      points: [
        "Um servidor Linux que você consiga acessar por SSH. O guia de instalação da Codex CLI no GitHub lista Ubuntu 20.04+ ou Debian 10+, com 4 GB de RAM como mínimo e 8 GB recomendados; existem builds de release para x86_64 e ARM64.",
        "Um Mac ou PC com Windows com o app desktop do ChatGPT, para adicionar o servidor como host SSH. Se você quer acessar o servidor pelo celular, esse computador precisa ficar ligado.",
        "Uma conta do ChatGPT para o Codex. A tabela de planos da OpenAI lista as conexões remotas por SSH nos planos Plus, Pro, Business e Enterprise e com uma chave de API, e o remote control pelo celular nos planos Plus, Pro, Business e Enterprise, mas não com uma chave de API.",
        "O app do ChatGPT no celular, iOS ou Android.",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Como configurar o Codex em uma VPS Linux",
      steps: [
        {
          title: "Alugue um servidor e confira o SSH",
          text: "Crie um servidor Linux e confirme que consegue entrar nele por SSH a partir do Mac ou PC que vai rodar o app desktop. Use login por chave e uma conta só com as permissões de que o Codex precisa, não o root.",
        },
        {
          title: "Instale a Codex CLI no servidor",
          text: "Rode o script de instalação da OpenAI no servidor; o mesmo comando atualiza a CLI depois, e o npm também funciona. Instale o bubblewrap para o sandbox do Codex: sem `bwrap` no PATH, o Codex recorre a um helper embutido que precisa de user namespaces sem privilégios, e mostra um aviso ao iniciar. O Ubuntu 24.04 pode continuar mostrando o aviso até você carregar o perfil do AppArmor `bwrap-userns-restrict`.",
          code: install,
        },
        {
          title: "Faça login em um servidor headless",
          text: "O servidor não tem navegador, então use o login por código de dispositivo: rode `codex login --device-auth`, ou escolha Sign in with Device Code, e siga as instruções. Ele está em beta, e o login por código de dispositivo precisa ser ativado antes nas configurações de segurança do ChatGPT ou pelo administrador do workspace. Se não puder usá-lo, encaminhe o callback do login com `ssh -L 1455:localhost:1455` e rode `codex login` no servidor, ou copie o `~/.codex/auth.json` de um computador em que você já fez login e trate esse arquivo como uma senha.",
          code: login,
        },
        {
          title: "Adicione o servidor à sua configuração SSH",
          text: "No Mac ou PC, adicione uma entrada Host ao `~/.ssh/config` e confira se `ssh devbox` funciona. O Codex lê desse arquivo os aliases de host concretos e ignora as entradas que são só padrões. O app desktop inicia o Codex no login shell do usuário remoto, então `codex` precisa estar no PATH ali.",
          code: ssh,
        },
        {
          title: "Adicione-o como host SSH no app desktop",
          text: "No app desktop do ChatGPT, abra Settings > Connections, adicione ou ative o host SSH e depois escolha uma pasta de projeto no servidor. Os chats nesse projeto rodam comandos, leem arquivos e gravam alterações no servidor.",
        },
        {
          title: "Controle-o pelo celular",
          text: "No mesmo Mac ou PC, abra Settings > Connections > Control this Mac or PC, selecione Set up ou Add e escaneie o QR code com o app do ChatGPT. Abra o Codex no celular, escolha esse computador e o projeto do servidor e inicie um chat. O chat roda no servidor por meio do Mac ou PC, então mantenha esse computador acordado e online; [um Mac mini em casa](/blog/codex-mac-mini) pode cumprir essa função. Detalhes de configuração e soluções estão em [remote control do Codex](/blog/codex-remote-control).",
        },
      ],
      source: { label: "Fonte: documentação da OpenAI sobre conexões remotas e hosts SSH", href: docs },
    },
    {
      kind: "steps",
      id: "terminal-only",
      title: "Só terminal: a Codex CLI via SSH no tmux",
      text: [
        "Se um terminal é tudo de que você precisa, dá para dispensar o app desktop. Entre no servidor por SSH, rode a Codex CLI dentro do tmux e desanexe a sessão: o Codex continua rodando depois que você se desconecta, e você volta a anexá-la de qualquer computador que consiga entrar por SSH.",
      ],
      steps: [
        {
          title: "Inicie o Codex dentro do tmux",
          text: "Instale o tmux pelos pacotes da sua distribuição se ele não estiver lá, inicie uma sessão e rode `codex` na pasta do projeto.",
          code: tmux,
        },
        {
          title: "Saiba o que essa configuração não faz",
          text: "Ela não fica conectada ao celular. A OpenAI diz que a configuração para o celular começa no app desktop e não pode ser feita pela CLI. A CLI tem um comando experimental `codex remote-control`, que a documentação associa a clientes de remote control gerenciados e fluxos de trabalho com SSH, mas ela não descreve como parear um celular com um servidor que só roda a CLI.",
        },
      ],
    },
    {
      kind: "text",
      id: "security",
      title: "Mantenha o servidor seguro",
      points: [
        "Trate-o como qualquer servidor SSH: chaves confiáveis, uma conta com o mínimo de privilégios e nenhum serviço sem autenticação escutando na internet pública.",
        "Não exponha o app server do Codex. `codex app-server --listen` e `codex --remote` servem principalmente para desenvolvimento e depuração, e a OpenAI desaconselha abrir os transportes do app server em uma rede compartilhada ou pública.",
        "Para acessar o servidor de fora da rede dele, use uma VPN ou uma rede mesh como o Tailscale, que conecta só os seus próprios dispositivos por links WireGuard criptografados.",
        "Mantenha o `~/.codex/auth.json` privado; a OpenAI diz para tratá-lo como uma senha.",
        "As configurações do sandbox, os controles de segurança e as aprovações valem para os chats no servidor do mesmo jeito que localmente, e o sandbox no Linux precisa do bubblewrap.",
      ],
    },
    {
      kind: "text",
      id: "handoff",
      title: "Mova um chat entre o seu computador e o servidor",
      text: [
        "O app desktop pode passar um chat, com o estado do Git, entre o seu computador e um host SSH conectado. Os dois precisam de um projeto salvo para o mesmo repositório Git. No rodapé do chat, escolha onde ele roda agora, selecione o host de destino (This computer o traz de volta), revise e selecione Hand off. O Codex cria ou reutiliza uma worktree ali. Uma resposta que ainda está em andamento é interrompida, e não dá para passar um chat para o Codex cloud.",
      ],
    },
    {
      kind: "text",
      id: "codex-cloud",
      title: "Sem servidor nenhum: Codex cloud",
      points: [
        "O Codex cloud roda tarefas de programação na nuvem da OpenAI. Cada tarefa ganha o próprio workspace e continua trabalhando enquanto o computador está em repouso.",
        "Comece pela web, pelo app desktop (Work in > Cloud) ou pelo app do ChatGPT no celular (abra o Codex, escolha Cloud e um ambiente). Com o ambiente padrão, você pode começar sem escolher um repositório, e o Codex pode fazer checkout de repositórios da sua conta conectada do GitHub ou do GitLab.",
        "Uma tarefa na nuvem só enxerga o ambiente na nuvem dela: seus arquivos locais, processos em execução, logins do navegador e acesso à VPN não são levados junto. Configurações reutilizáveis ficam em Work in > Cloud > Select environment > Create environment.",
        "Ele exige login no ChatGPT, não uma chave de API. No terminal, `codex cloud` abre um seletor dos seus chats na nuvem e `codex cloud exec` envia uma tarefa.",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Host Mac mini vs host SSH Linux vs Codex cloud",
      headers: ["", "Host Mac mini", "Host SSH Linux", "Codex cloud"],
      rows: [
        ["Onde o Codex roda", "No Mac mini, no app desktop do ChatGPT", "No servidor; o app desktop em um Mac ou PC o inicia via SSH", "Na nuvem da OpenAI, em um workspace por tarefa"],
        ["A que o celular se conecta", "Ao Mac mini", "Ao Mac ou PC com Windows que roda o app desktop", "À nuvem da OpenAI: abra o Codex e escolha Cloud"],
        ["O que precisa ficar ligado", "O Mac mini", "O servidor e o Mac ou PC", "Nada seu"],
        ["Arquivos, logins e VPN", "Tudo o que está no Mac mini", "O que está no servidor", "Só o ambiente na nuvem; arquivos locais, logins do navegador e acesso à VPN não são levados junto"],
        ["Indicado para", "Computer Use e tarefas no navegador pela extensão do Chrome, desenvolvimento para iOS, arquivos guardados em casa", "Trabalho de terminal em um servidor, com o poder de processamento e as dependências dele", "Tarefas de programação que só precisam de um repositório"],
        ["Planos (tabela da OpenAI)", "Remote control pelo celular: Plus, Pro, Business, Enterprise", "Conexões SSH: esses planos e uma chave de API; controlar o host pelo celular ainda exige um desses planos", "Plus, Pro, Business, Enterprise; não com uma chave de API"],
        ["Configuração", "App desktop, ajustes para não entrar em repouso, remote control", "CLI no servidor, configuração SSH, host SSH no app desktop", "Escolher ou criar um ambiente na nuvem"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Com o Crewmark",
      title: "Dê ao servidor um trabalho fixo",
      text: [
        "Um servidor que nunca dorme ainda espera o seu próximo prompt. O Crewmark transforma um chat do Codex nele em um funcionário de IA com cargo, uma meta em números, horário de trabalho e um heartbeat: durante o horário de trabalho, a CLI `crewmark`, que roda no Linux e também no macOS e no Windows, acorda o funcionário para avançar nas issues dele em um quadro compartilhado. O computador em que ele roda precisa ficar ligado, e uma VPS fica.",
      ],
      steps: [
        {
          title: "Contrate um funcionário",
          text: "Escolha um cargo entre os [cargos de funcionários de IA](/ai-employees), como engenheiro de software ou especialista em SEO, e escreva as metas e os KPIs dele.",
        },
        {
          title: "Conecte o Codex do servidor",
          text: "Cole o link de configuração em um chat do Codex no servidor. Ele instala a CLI `crewmark` e vincula esse chat ao funcionário. O Claude Code também funciona; veja [Claude Code em uma VPS](/blog/claude-code-vps).",
        },
        {
          title: "Defina o horário de trabalho e um heartbeat",
          text: "Só em dias úteis ou todos os dias, um horário que pode passar da meia-noite e um despertar a cada 15, 30, 60, 120 ou 240 minutos. Cada despertar vai para o mesmo chat do Codex, então ele continua de onde parou. As opções de agendamento do próprio Codex são comparadas em [Codex proativo](/proactive-codex).",
        },
        {
          title: "Atribua issues e fale com ele pelo celular",
          text: "Abra crewmark.ai no navegador do celular para criar e atribuir issues, ou escreva para o funcionário no Work log dele; a mensagem chega ao chat do Codex no servidor, e ele responde ali. Atribuir uma issue o acorda na hora e, quando precisa de uma revisão ou de uma decisão, ele marca a issue como Needs action e pergunta a você ali mesmo. Trabalhos para dar a ele estão em [casos de uso do Codex](/use-cases/codex).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Configurar o Codex em uma VPS Linux como host SSH" },
  mid: {
    title: "Quer que o servidor continue trabalhando quando você não está mandando prompts?",
    text: "O Crewmark acorda o Codex com um heartbeat durante o horário que você definir e entrega a ele a próxima issue de um quadro.",
    button: "Começar",
  },
  faq: {
    title: "Perguntas frequentes",
    items: [
      {
        q: "Posso rodar o Codex em uma VPS?",
        a: "Sim. A Codex CLI roda no Linux: instale-a com `curl -fsSL https://chatgpt.com/codex/install.sh | sh`, faça login com `codex login --device-auth` e depois use-a via SSH no tmux ou adicione o servidor como host SSH no app desktop do ChatGPT em um Mac ou PC com Windows, que você pode controlar pelo celular.",
      },
      {
        q: "Como fazer login no Codex em uma VPS sem navegador?",
        a: "Rode `codex login --device-auth`, ou escolha Sign in with Device Code, e siga as instruções. Ele está em beta e precisa ser ativado nas configurações de segurança do ChatGPT ou por um administrador do workspace. Caso contrário, encaminhe o callback com `ssh -L 1455:localhost:1455 user@server` e rode `codex login` lá, ou copie o `~/.codex/auth.json` de um computador em que você já fez login.",
      },
      {
        q: "Como conectar o Codex a uma VPS?",
        a: "Adicione o servidor ao `~/.ssh/config` no Mac ou PC que roda o app desktop do ChatGPT e confira se `ssh <alias>` funciona. Garanta que o `codex` esteja instalado, com login feito e no PATH do login shell do usuário remoto, depois adicione o host em Settings > Connections e escolha uma pasta de projeto remota.",
      },
      {
        q: "Posso controlar o Codex em uma VPS pelo celular?",
        a: "Sim, por meio de um Mac ou PC com Windows. O celular controla o app desktop do ChatGPT nesse computador, e o app roda o chat no servidor via SSH, então o computador precisa ficar acordado e online. A OpenAI não documenta como parear um celular direto com um servidor Linux ou só com a CLI.",
      },
      {
        q: "O app desktop do ChatGPT roda em um servidor Linux?",
        a: "Existe um app desktop do ChatGPT para Linux, em versão prévia, para as versões desktop de Ubuntu, Debian, Fedora e Arch Linux, ainda sem o Computer Use. A documentação da OpenAI não cobre um servidor sem ambiente de desktop, e o Linux não está listado como host de remote control. Em uma VPS, use a Codex CLI.",
      },
      {
        q: "É seguro rodar o Codex em uma VPS?",
        a: "Trate-a como qualquer servidor SSH: login por chave, uma conta com o mínimo de privilégios e nenhum serviço público sem autenticação. Não exponha o app server do Codex em uma rede pública, use uma VPN ou uma rede mesh para acessar o servidor de fora, mantenha o `~/.codex/auth.json` privado e instale o bubblewrap para que o sandbox funcione.",
      },
    ],
  },
  cta: {
    title: "Coloque o seu servidor para trabalhar.",
    text: "O Crewmark transforma sessões do Codex e do Claude Code em funcionários de IA com cargos, metas, horários de trabalho e um heartbeat.",
    button: "Começar",
  },
  checked:
    "Verificado com a documentação da OpenAI (conexões remotas, Codex CLI, autenticação, sandboxing, o app para Linux, Codex cloud, planos), o README e o guia de instalação do Codex no GitHub e a documentação do Tailscale em 14 de novembro de 2026.",
  disclaimer:
    "O Crewmark é um produto independente, sem afiliação ou endosso da OpenAI nem de qualquer empresa citada nesta página. Codex e ChatGPT são marcas registradas da OpenAI.",
};
