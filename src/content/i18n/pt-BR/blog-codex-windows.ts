import type { GuideCopy } from "@/components/landing/guide-article";

// pt-BR translation of /blog/codex-windows; the English master is src/content/blog/codex-windows.ts (the `en` value of codexWindows).

const appDocs = "https://learn.chatgpt.com/docs/windows/windows-app";
const sandboxDocs = "https://learn.chatgpt.com/docs/windows/windows-sandbox";
const wslDocs = "https://learn.chatgpt.com/docs/windows/wsl";

const cliInstall = `# Native Windows installer (run it in a new PowerShell window)
powershell -ExecutionPolicy ByPass -c "irm https://chatgpt.com/codex/install.ps1 | iex"

# Or with npm, if Node.js is installed
npm install -g @openai/codex

# Start Codex and sign in
codex`;

const tools = `winget install --id Git.Git
winget install --id OpenJS.NodeJS.LTS
winget install --id Python.Python.3.14
winget install --id Microsoft.DotNet.SDK.10
winget install --id GitHub.cli
gh auth login`;

const wslInstall = `# In PowerShell, run as administrator
wsl --install
wsl

# Inside WSL: the sandbox needs bubblewrap (apt or dnf), then install Codex
sudo apt install bubblewrap
curl -fsSL https://chatgpt.com/codex/install.sh | sh
codex`;

const mxcTest = `codex -c windows.sandbox=mxc sandbox --include-managed-config --permission-profile :workspace -- cmd.exe /d /c echo MXC_OK`;

const preferMxc = `# config.toml in your Codex home (%USERPROFILE%\\.codex)
[features]
prefer_mxc = true`;

const legacy = `# config.toml in your Codex home (%USERPROFILE%\\.codex)
[windows]
sandbox = "elevated"   # or "unelevated"`;

const provision = `codex sandbox setup --elevated --user 'DOMAIN\\alice' --codex-home 'C:\\Users\\alice\\.codex'`;

export const copy: GuideCopy = {
  meta: {
    title: "Codex no Windows: app, instalação da CLI, sandbox e WSL2",
    description:
      "Baixe o Codex no Windows no app do ChatGPT ou instale a CLI, rode no PowerShell com o sandbox do Windows ou no WSL2 e corrija falhas na configuração do sandbox.",
  },
  breadcrumb: "Codex no Windows",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-14" },
  hero: {
    kicker: "Blog · Codex",
    title: "Codex no Windows: instale o app ou a CLI e escolha entre o sandbox e o WSL2",
    lead: "O Codex roda nativamente no Windows. Desde 9 de julho de 2026, o app do Codex faz parte do app desktop do ChatGPT, então você instala o ChatGPT e muda para o Codex dentro dele; para o terminal, a Codex CLI se instala com um único comando do PowerShell. Por padrão, o agente roda no PowerShell sob o sandbox do Windows, e você pode passá-lo para o WSL2. Este guia cobre o download e a instalação, os três tipos de sandbox e a versão do Windows que cada um exige, as soluções documentadas quando a configuração do sandbox falha, o Computer Use e como controlar um PC com Windows pelo celular.",
    cta: "Começar",
    secondary: "Ver os passos",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      id: "what-to-install",
      title: "Qual Codex instalar no Windows",
      points: [
        "O app desktop do ChatGPT, se você quer uma janela. O Codex tem a própria visualização de programação ao lado de Chat e Work, com worktrees, tarefas agendadas, Git, um navegador embutido, pré-visualização de arquivos, plugins e skills. O app está disponível em todos os planos do ChatGPT, inclusive o Free.",
        "A Codex CLI, se você trabalha em um terminal. Ela se instala nativamente com um script do PowerShell, ou com o npm.",
        "A extensão de IDE, se você trabalha em um editor. A OpenAI a lista ao lado do app e da CLI como uma forma de usar o Codex nativamente no Windows.",
        "O Windows 11 é o recomendado. Um Windows 10 recente e totalmente atualizado é suportado sem garantias e precisa da versão 1809 ou mais recente, por causa do ConPTY; versões mais antigas do Windows 10 não são recomendadas. O `winget` deve estar disponível.",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Como baixar e instalar o Codex no Windows",
      steps: [
        {
          title: "Baixe o app desktop do ChatGPT",
          text: "Baixe-o pelo link da Microsoft Store na [página do app para Windows da OpenAI](https://learn.chatgpt.com/docs/windows/windows-app), ou instale-o com o winget pelo PowerShell. Abra o ChatGPT, faça login e selecione Codex.",
          code: "winget install --id 9PLM9XGG6VKS -s msstore",
        },
        {
          title: "Ou instale a Codex CLI",
          text: "Abra uma nova janela do PowerShell e rode o instalador da OpenAI; rodá-lo de novo atualiza o Codex. Com o Node.js instalado, você pode usar o npm. Pela CLI, `codex app` abre o app desktop, instalando-o se necessário, e `/app` move a sessão atual para ele.",
          code: cliInstall,
        },
        {
          title: "Faça login",
          text: "Na primeira execução, escolha Sign in with ChatGPT para usar o seu plano, ou faça login com uma chave de API, cobrada pelas tarifas padrão da API. O Codex cloud exige o login com o ChatGPT. `codex login status` sai com o código 0 quando o login está feito.",
        },
        {
          title: "Instale as ferramentas que o Codex vai chamar",
          text: "O Codex usa o que está instalado no PC. A OpenAI sugere Git, Node.js, Python, o .NET SDK e a GitHub CLI, todos pelo winget, e depois fazer login no GitHub.",
          code: tools,
        },
        {
          title: "Escolha onde o agente roda",
          text: "Por padrão, o agente roda nativamente no PowerShell sob o sandbox do Windows. Para rodá-lo no WSL2, abra Settings, troque o agente de Windows native para WSL e reinicie o app. Em qualquer um dos modos, selecione Ask for approval abaixo da caixa de mensagem para ter a proteção do sandbox. Para comandos que exigem direitos de administrador, inicie o app com Run as administrator; o agente herda esses direitos. O terminal integrado pode ser PowerShell, Command Prompt, Git Bash ou WSL.",
        },
      ],
      source: { label: "Fonte: documentação do Codex da OpenAI, app para Windows", href: appDocs },
    },
    {
      kind: "table",
      id: "native-or-wsl",
      title: "PowerShell nativo ou WSL2?",
      text: [
        "O conselho da OpenAI é usar o sandbox nativo por padrão e escolher o WSL2 quando você precisa de ferramentas nativas do Linux, já trabalha no WSL2 ou as opções nativas não servem para a sua configuração. O WSL1 não é mais suportado: ele funcionou até o Codex 0.114, e a partir do 0.115 o sandbox do Linux usa o `bubblewrap` e o suporte ao WSL1 acabou.",
      ],
      headers: ["", "Nativo (PowerShell)", "WSL2"],
      rows: [
        ["Sandbox", "O sandbox do Windows: MXC, elevated ou unelevated", "O sandbox do Linux, que precisa do `bubblewrap`"],
        ["Instalar a CLI", "Instalador do PowerShell ou npm", "`wsl --install` em um PowerShell elevado, depois o script de instalação para Linux dentro do WSL"],
        ["No app desktop", "O padrão", "Settings: troque o agente para WSL e reinicie o app"],
        ["Onde manter os projetos", "No drive do Windows; o WSL os alcança em `/mnt/<drive>/...`", "Na home do Linux, como `~/code`, e não em `/mnt/c`, por velocidade"],
        ["Home do Codex", "`%USERPROFILE%\\.codex`", "A home do Linux, a menos que você aponte `CODEX_HOME` para a pasta do Windows"],
        ["Quando escolher", "Por padrão", "Ferramentas nativas do Linux, ou um fluxo de trabalho que já está no WSL2"],
      ],
    },
    {
      kind: "steps",
      id: "wsl",
      title: "Como rodar o Codex no WSL2",
      steps: [
        {
          title: "Instale o WSL2 e o Codex dentro dele",
          text: "Em um PowerShell elevado, rode `wsl --install` e depois `wsl` para abrir o shell do Linux. Dentro dele, instale o `bubblewrap` para o sandbox (`sudo apt install bubblewrap` ou `sudo dnf install bubblewrap`), rode o script de instalação para Linux e inicie o `codex`.",
          code: wslInstall,
        },
        {
          title: "Mantenha os repositórios na home do Linux",
          text: "Clone em uma pasta como `~/code` em vez de em `/mnt/c`, que é mais lento. Se o VS Code no WSL não encontrar o Codex, confira onde ele está com `which codex`.",
        },
        {
          title: "Compartilhe as configurações com o app do Windows",
          text: "O app do Windows guarda a home do Codex em `%USERPROFILE%\\.codex`, enquanto uma CLI dentro do WSL usa a home do Linux. Para compartilhar uma só, defina no WSL o `CODEX_HOME` apontando para a pasta do Windows.",
          code: "export CODEX_HOME=/mnt/c/Users/<windows-user>/.codex",
        },
        {
          title: "Abra projetos do WSL no app desktop",
          text: "Escolha Add new project (ou pressione Ctrl+O) e digite `\\\\wsl$\\`. Se o agente continuar nativo, é mais confiável manter os projetos no drive do Windows e acessá-los pelo WSL em `/mnt/<drive>/...`.",
        },
      ],
      source: { label: "Fonte: documentação do Codex da OpenAI, Windows e WSL", href: wslDocs },
    },
    {
      kind: "table",
      id: "sandbox",
      title: "O sandbox do Codex no Windows: MXC, elevated e unelevated",
      text: [
        "O sandbox do Windows permite que o Codex rode nativamente no PowerShell, sem WSL nem máquina virtual, limitando o que os comandos dele e os processos filhos podem acessar no disco e na rede. Ele tem três implementações. O app desktop escolhe o MXC automaticamente para contas de consumidor em dispositivos compatíveis.",
      ],
      headers: ["Sandbox", "Como funciona", "Configuração", "Versão do Windows"],
      rows: [
        [
          "`mxc` (recomendado)",
          "Microsoft Execution Containers",
          "Sem configuração aprovada por administrador, sem contas extras do Windows, sem regras de firewall",
          "Windows 11 24H2 (build 26100.9278) ou 25H2 (build 26200.9278); a Microsoft ainda está liberando-o no Windows 11",
        ],
        [
          "`elevated` (legado, a alternativa preferida)",
          "Usuários de sandbox dedicados e com menos privilégios, e regras de firewall; os comandos no sandbox rodam sem direitos de administrador",
          "Precisa que um administrador aprove a configuração",
          "Nenhum requisito separado na documentação; vale a orientação geral (Windows 11 recomendado, Windows 10 1809 ou mais recente sem garantias)",
        ],
        [
          "`unelevated` (alternativa legada)",
          "Isolamento de rede mais fraco e nenhum caminho de leitura bloqueado",
          "A documentação o sugere como solução temporária quando a configuração do sandbox legado falha",
          "Nenhum requisito separado na documentação; mesma orientação geral",
        ],
      ],
    },
    {
      kind: "steps",
      id: "sandbox-setup",
      title: "Configuração do sandbox do Codex no Windows",
      steps: [
        {
          title: "Confira se o MXC funciona no seu PC",
          text: "Com a Codex CLI 0.162.0 ou mais recente, rode este teste. Ele deve imprimir `MXC_OK` e sair com o código 0.",
          code: mxcTest,
        },
        {
          title: "Dê preferência ao MXC na CLI",
          text: "O app desktop já prefere o MXC para contas de consumidor. Para a CLI, ou em uma configuração corporativa, ative-o no `config.toml` da sua home do Codex.",
          code: preferMxc,
        },
        {
          title: "Ou escolha um sandbox legado",
          text: "Onde o MXC não estiver disponível, defina `elevated`, ou `unelevated` como último recurso. O sandbox elevated precisa que um administrador aprove a configuração. Na CLI, o comando `/setup-default-sandbox` executa essa configuração; ele só aparece no Windows, quando o Codex está no sandbox degradado de token restrito.",
          code: legacy,
        },
        {
          title: "Ou deixe a TI configurá-lo com antecedência",
          text: "Um administrador pode provisionar o sandbox elevated para outro usuário. Para remover o sandbox legado depois, rode `codex sandbox uninstall` como administrador.",
          code: provision,
        },
      ],
      source: { label: "Fonte: documentação do Codex da OpenAI, sandbox do Windows", href: sandboxDocs },
    },
    {
      kind: "text",
      id: "troubleshooting",
      title: "A configuração do sandbox do Codex no Windows falhou? As soluções documentadas",
      text: [
        `A [página do sandbox do Windows](${sandboxDocs}) da OpenAI tem uma lista de solução de problemas. Veja o que ela cobre, com os títulos da própria documentação.`,
      ],
      points: [
        "“My legacy sandbox setup failed”: as causas mais comuns são um pedido do UAC ou de administrador recusado, uma política que bloqueia a criação de usuários e grupos locais, a alteração do firewall ou a concessão de direitos de logon ao usuário do sandbox, ou alguma outra política. Tente de novo e aprove o pedido, fale com a TI ou use o sandbox `unelevated` enquanto isso.",
        "“I see Windows error 1385”: o Windows nega ao usuário do sandbox o tipo de logon de que ele precisa. Direitos de logon para o usuário do sandbox estão entre as coisas que uma política pode bloquear, então, em um PC gerenciado, fale com a TI. O MXC não cria contas extras do Windows, então, no Windows 11 24H2 ou 25H2, ele não depende de um usuário de sandbox.",
        "“Codex switched me to the unelevated sandbox”, “Codex warns that some folders are writable by Everyone”, “Sandboxed commands cannot reach the network” e “Sandboxing worked before and then stopped” têm, cada um, a própria entrada nessa página.",
        "Para diagnóstico, leia `CODEX_HOME/.sandbox/sandbox.log`. Nunca envie a ninguém a pasta `CODEX_HOME/.sandbox-secrets/`.",
        "Procurando por “setup didn't finish”? A documentação da OpenAI não tem nenhuma entrada com essa redação. O caso documentado mais próximo é “My legacy sandbox setup failed”.",
        "Se o PowerShell não rodar o npm e disser `npm.ps1 cannot be loaded because running scripts is disabled on this system.`, a solução comum é `Set-ExecutionPolicy -ExecutionPolicy RemoteSigned`.",
      ],
    },
    {
      kind: "text",
      id: "computer-use",
      title: "No Windows, o Computer Use assume a tela",
      text: [
        "O Computer Use permite que o Codex opere apps desktop movendo o ponteiro e digitando. No app desktop, ele está disponível no macOS e no Windows, com o ChatGPT Work e o Codex, nas regiões suportadas. Para ativá-lo, abra Settings > Computer use, encontre Any App em Control e selecione Install ou ative a chave.",
      ],
      points: [
        "Ele roda na área de trabalho ativa e não consegue trabalhar em segundo plano. Enquanto uma tarefa roda, ele move o ponteiro, digita e traz janelas para a frente, então você não consegue usar o PC ao mesmo tempo.",
        "Para deixá-lo trabalhar enquanto você está fora, mantenha o PC desbloqueado e online e acompanhe pelo celular com o [remote control](/blog/codex-remote-control), ou rode o app desktop dentro de uma máquina virtual Windows, para que o Computer Use assuma a VM em vez da sua tela.",
        "O uso bloqueado (locked use), que permite que uma tarefa continue depois que o computador é bloqueado, existe só no macOS.",
        'Para guardar as aprovações de apps, liste os apps em `$CODEX_HOME/config.toml` sob `[computer_use.windows]`, por exemplo `always_allowed_app_ids = ["mspaint.exe"]`.',
        "Em qualquer sistema, o Computer Use não consegue automatizar apps de terminal nem o próprio ChatGPT, fazer login como administrador nem aprovar pedidos de segurança e privacidade.",
      ],
    },
    {
      kind: "text",
      id: "remote-control",
      title: "Controle o Codex no seu PC com Windows pelo celular",
      text: [
        "Um PC com Windows pode ser um host de remote control, como um Mac. O app do ChatGPT no celular envia prompts e aprovações; o PC roda os comandos com os próprios projetos, arquivos, credenciais e ferramentas. A configuração completa e as soluções estão em [remote control do Codex](/blog/codex-remote-control).",
      ],
      points: [
        "No PC, abra o app desktop do ChatGPT e vá em Settings > Connections > Control this Mac or PC, depois selecione Set up ou Add. Escaneie o QR code com o celular (iOS ou Android).",
        "O PC então aparece em Codex no app do ChatGPT. Versões mais antigas do app o chamam de Remote.",
        "Mantenha o PC acordado, online, conectado à conta e rodando o app desktop; se ele entrar em repouso ou perder a rede, o acesso remoto para até ele voltar. Para tarefas que usam o Computer Use, mantenha a sessão do Windows desbloqueada.",
        "A tabela de planos da OpenAI lista o remote control pelo celular nos planos Plus, Pro, Business e Enterprise, não para login com chave de API. Em um workspace do ChatGPT, um administrador pode precisar ativar antes o acesso ao Remote Control.",
        "O PC também pode abrir projetos em um servidor Linux como host SSH, então o celular conduz o Codex no servidor por meio do PC. Veja [Codex em uma VPS](/blog/codex-vps) e [Codex no Linux](/blog/codex-linux). Para usar um Mac sempre ligado, veja [Codex em um Mac mini](/blog/codex-mac-mini).",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Com o Crewmark",
      title: "Dê ao Codex do seu PC um trabalho fixo",
      text: [
        "O remote control e o Computer Use ainda esperam você iniciar cada tarefa. O Crewmark transforma um chat do Codex no seu PC com Windows em um funcionário de IA com cargo, metas, horário de trabalho e um heartbeat: durante o horário dele, a CLI `crewmark`, que roda no Windows e também no macOS e no Linux, o acorda para pegar a próxima issue de um quadro compartilhado. Para isso, o PC precisa ficar ligado.",
      ],
      steps: [
        {
          title: "Contrate um funcionário",
          text: "Escolha um cargo entre os [cargos de funcionários de IA](/ai-employees), como [engenheiro de software](/ai-employees/software-engineer), e escreva as metas e os KPIs dele.",
        },
        {
          title: "Conecte um chat do Codex no PC",
          text: "Vincule um chat do Codex no PC ao funcionário pela CLI `crewmark`. Essa conversa vira o funcionário. O Claude Code também funciona.",
        },
        {
          title: "Defina o horário de trabalho e um heartbeat",
          text: "Só em dias úteis ou todos os dias, no seu fuso horário, com um horário que pode passar da meia-noite. Durante esse horário, a CLI acorda o funcionário a cada 15, 30, 60, 120 ou 240 minutos. Veja [tarefas longas no Codex](/blog/codex-long-running-tasks).",
        },
        {
          title: "Atribua issues de qualquer lugar",
          text: "Crie e atribua issues no quadro em crewmark.ai de qualquer navegador; atribuir uma acorda o funcionário. Quando precisa de uma revisão ou de uma decisão, ele marca a issue como Needs action e pergunta a você ali mesmo. Trabalhos para dar a ele estão em [casos de uso do Codex](/use-cases/codex).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Baixar e instalar o Codex no Windows" },
  mid: {
    title: "Quer que o Codex do seu PC continue trabalhando quando você não está mandando prompts?",
    text: "O Crewmark acorda o seu Codex com um heartbeat durante o horário que você definir e entrega a ele a próxima issue de um quadro.",
    button: "Começar",
  },
  faq: {
    title: "Perguntas frequentes",
    items: [
      {
        q: "Como baixar o app do Codex no Windows?",
        a: "O Codex faz parte do app desktop do ChatGPT. Instale-o pelo link da Microsoft Store na página do app para Windows da OpenAI, ou rode `winget install --id 9PLM9XGG6VKS -s msstore` no PowerShell, depois abra o ChatGPT e selecione Codex. O app está disponível em todos os planos do ChatGPT, inclusive o Free.",
      },
      {
        q: "Como instalar a Codex CLI no Windows?",
        a: 'Abra uma nova janela do PowerShell e rode `powershell -ExecutionPolicy ByPass -c "irm https://chatgpt.com/codex/install.ps1 | iex"`, ou `npm install -g @openai/codex` se você tiver o Node.js. Depois rode `codex` e faça login com o ChatGPT ou com uma chave de API. Rodar o instalador de novo atualiza o Codex.',
      },
      {
        q: "O Codex no Windows precisa do WSL?",
        a: "Não. O Codex roda nativamente no PowerShell sob o sandbox do Windows, no app desktop, na CLI e na extensão de IDE. O WSL2 é opcional, para ferramentas nativas do Linux ou um fluxo de trabalho que já está no WSL2. O WSL1 não é suportado a partir do Codex 0.115.",
      },
      {
        q: "O que é o sandbox do Codex no Windows?",
        a: "Ele limita o que os comandos do Codex podem acessar no disco e na rede enquanto rodam nativamente no Windows. O MXC é a implementação recomendada e exige o Windows 11 24H2 ou 25H2; `elevated` e `unelevated` são alternativas legadas. O app desktop escolhe o MXC automaticamente para contas de consumidor em dispositivos compatíveis.",
      },
      {
        q: "Por que a configuração do sandbox do Codex no Windows falhou?",
        a: "A documentação da OpenAI não contém uma mensagem “setup didn't finish”. Para uma configuração do sandbox legado que falhou, ela lista um pedido do UAC ou de administrador recusado, ou uma política que bloqueia usuários e grupos locais, alterações no firewall ou os direitos de logon do usuário do sandbox. Tente de novo e aprove o pedido, fale com a TI ou use o `unelevated` enquanto isso. O erro 1385 do Windows significa que o usuário do sandbox teve negado o tipo de logon de que precisa.",
      },
      {
        q: "Posso controlar o Codex em um PC com Windows pelo celular?",
        a: "Sim. No app desktop do ChatGPT no PC, vá em Settings > Connections > Control this Mac or PC, escaneie o QR code com o app do ChatGPT no iOS ou no Android e mantenha o PC acordado, online e conectado à conta. Mantenha-o desbloqueado para tarefas que usam o Computer Use.",
      },
    ],
  },
  cta: {
    title: "Coloque o Codex do seu PC para trabalhar.",
    text: "O Crewmark transforma sessões do Claude Code e do Codex em funcionários de IA com cargos, metas, horários de trabalho e um heartbeat.",
    button: "Começar",
  },
  checked:
    "Verificado com a documentação do Codex da OpenAI (app para Windows, sandbox do Windows, WSL, CLI, login, Computer Use e conexões remotas) em 14 de novembro de 2026.",
  disclaimer:
    "O Crewmark é um produto independente, sem afiliação ou endosso da OpenAI, da Microsoft ou de qualquer empresa citada nesta página. Codex e ChatGPT são marcas registradas da OpenAI; Windows é marca registrada da Microsoft.",
};
