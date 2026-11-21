import type { GuideCopy } from "@/components/landing/guide-article";
import { plan } from "@/lib/pricing";

// pt-BR translation of /blog/opencode-alternatives; the English master is src/content/blog/opencode-alternatives.ts.

const free = plan("free");
const pro = plan("pro");

const install = `# Pi (macOS e Linux; o Windows tem um instalador em PowerShell)
curl -fsSL https://pi.dev/install.sh | sh

# Crush
brew install charmbracelet/tap/crush    # ou: npm install -g @charmland/crush

# Kilo CLI (um fork do OpenCode)
npm install -g @kilocode/cli

# Nanocoder
npm install -g @nanocollective/nanocoder

# Freebuff (grátis, mantido por anúncios em texto)
npm install -g freebuff

# Codex CLI
npm install -g @openai/codex

# Goose CLI
curl -fsSL https://github.com/aaif-goose/goose/releases/download/stable/download_cli.sh | bash`;

const local = `# Nanocoder com um modelo rodando no Ollama
nanocoder --provider ollama --model llama3.1

# Crush: adicione o Ollama no seu crushrc
provider add ollama --type ollama --base-url "http://localhost:11434/v1"
model add ollama/llama3.3 --name "Llama 3.3" --context-window 128000`;

export const copy: GuideCopy = {
  meta: {
    title: "Alternativas ao OpenCode (2026): grátis, open source e locais",
    description:
      "As melhores alternativas ao OpenCode em 2026: agentes de terminal open source (Pi, Crush, Kilo CLI, Goose, Cline, Nanocoder), opções grátis sem chave de API, escolhas em Rust e para Windows, LLMs locais, interfaces gráficas, e Claude Code, Codex e Copilot CLI.",
  },
  breadcrumb: "Alternativas ao OpenCode",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-10" },
  hero: {
    kicker: "Blog · Agentes de programação",
    title: "As melhores alternativas ao OpenCode em 2026: grátis, open source e locais",
    lead: "O OpenCode é um dos agentes de programação open source com mais estrelas no GitHub, cerca de 226 mil: um agente de terminal com licença MIT que funciona com qualquer provedor de modelos, mais um app desktop em beta. As pessoas procuram outras opções por alguns motivos: um harness menor que dê para moldar ao próprio fluxo de trabalho, um único binário em Go ou Rust, melhor suporte a modelos locais, um app em vez de um terminal, uma opção grátis que não exige chave de API, ou o agente que a empresa já paga. Aqui estão as alternativas para cada caso, com licenças, comandos de instalação e preços tirados da página de cada projeto.",
    cta: "Começar",
    secondary: "Comandos de instalação",
    secondaryHref: "#open-source",
  },
  sections: [
    {
      kind: "text",
      title: "Escolhas rápidas",
      points: [
        "Um agente mínimo que você mesmo molda: Pi, com licença MIT, cerca de 121 mil estrelas.",
        "Um app de terminal caprichado que roda em todo lugar, inclusive Windows e Android: Crush, da Charm.",
        "O OpenCode com uma IDE e um agente na nuvem em volta: Kilo CLI, que é um fork do OpenCode.",
        "Grátis e sem chave de API: Freebuff, pago por anúncios em texto.",
        "Modelos locais em primeiro lugar: Nanocoder, feito por um coletivo sem fins lucrativos.",
        "Escrito em Rust: Codex CLI ou Goose.",
        "Você já paga Claude, ChatGPT ou Copilot: Claude Code, Codex CLI ou GitHub Copilot CLI.",
        "Um agente que continua trabalhando em uma agenda, não só quando você digita: Crewmark, sobre o Claude Code ou o Codex.",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Alternativas ao OpenCode comparadas",
      text: [
        "As estrelas estão arredondadas, pela API do GitHub em 10 de novembro de 2026. Os custos são o que você precisa para começar; a maioria dos agentes open source é grátis e você paga o seu provedor de modelo.",
      ],
      headers: ["Ferramenta", "Licença", "Feito em", "Onde roda", "Quanto custa", "Ideal para"],
      rows: [
        ["[OpenCode](https://github.com/anomalyco/opencode)", "MIT (~226 mil estrelas)", "TypeScript", "Terminal, app desktop (beta)", "Modelos grátis com limite diário; Go $10/mês, Go Plus $40/mês", "A referência: qualquer provedor, modelos locais, agentes Plan e Build"],
        ["[Pi](https://github.com/earendil-works/pi)", "MIT (~121 mil estrelas)", "TypeScript", "macOS, Linux, Windows; SDK e RPC", "Grátis; sua assinatura ou chave de API", "Um harness mínimo que você estende com suas próprias ferramentas e skills"],
        ["[Crush](https://github.com/charmbracelet/crush)", "FSL-1.1-MIT (~29 mil estrelas)", "Go", "Todo terminal: macOS, Linux, Windows, Android, BSD", "Grátis; sua chave ou os modelos Hyper da Charm", "Uma interface de terminal caprichada com LSP e MCP"],
        ["[Kilo CLI](https://github.com/Kilo-Org/kilocode)", "MIT (~28 mil estrelas)", "TypeScript", "CLI, VS Code, JetBrains, nuvem", "Grátis para começar; 500+ modelos pelo preço do provedor, sem margem", "O motor do OpenCode mais extensões de IDE e revisões de código"],
        ["[Goose](https://github.com/aaif-goose/goose)", "Apache 2.0 (~56 mil estrelas)", "Rust", "App desktop, CLI, API", "Grátis; sua chave do modelo", "Um agente para código e outros trabalhos, com extensões MCP"],
        ["[Cline](https://github.com/cline/cline)", "Apache 2.0 (~71 mil estrelas)", "TypeScript", "CLI, VS Code, JetBrains, SDK", "Grátis; sua chave do modelo", "Um agente open source no seu editor e no terminal"],
        ["[Nanocoder](https://github.com/Nano-Collective/nanocoder)", "MIT (~2,6 mil estrelas)", "TypeScript", "Terminal", "Grátis; modelos locais ou qualquer API compatível com OpenAI", "Programação privada, com modelos locais em primeiro lugar, usando Ollama"],
        ["[Freebuff](https://github.com/CodebuffAI/freebuff)", "Apache 2.0 (~14 mil estrelas)", "TypeScript", "CLI, desktop, web, nuvem", "Grátis com anúncios em texto; sem chave de API", "Experimentar um agente de programação sem pagar nem se cadastrar em um modelo"],
        ["[Qwen Code](https://github.com/QwenLM/qwen-code)", "Apache 2.0 (~29 mil estrelas)", "TypeScript", "Terminal", "Assinatura Qwen Plus ou Pro, ou uma chave de API", "Usuários dos modelos Qwen"],
        ["[Codex CLI](https://github.com/openai/codex)", "Apache 2.0 (~134 mil estrelas)", "Rust", "Terminal; também IDE e desktop", "Qualquer plano do ChatGPT, inclusive o Free; o Go custa $8/mês; ou uma chave de API", "Assinantes do ChatGPT que querem um binário nativo e rápido"],
        ["[Claude Code](https://code.claude.com/docs)", "Proprietário", "-", "Terminal, IDE, desktop, web", "Claude Pro $20/mês", "Usuários do Claude que querem o agente da própria Anthropic"],
        ["[GitHub Copilot CLI](https://github.com/github/copilot-cli)", "Proprietário", "-", "macOS, Linux, Windows", "Um plano do Copilot; o Pro custa $10/mês", "Equipes que já pagam o Copilot"],
        ["[Aider](https://github.com/Aider-AI/aider)", "Apache 2.0 (~50 mil estrelas)", "Python", "Terminal", "Grátis; sua chave do modelo", "Pair programming centrado no git; sem commits desde 22 de maio de 2026 (veja [alternativas ao Aider](/blog/aider-alternatives))"],
        ["[Crewmark](/pricing)", "Proprietário", "-", "Seu computador, dentro do seu próprio Claude Code ou Codex", `Plano Free (${free.projects} projeto, ${free.employees} funcionários de IA); Pro $${pro.price}/mês em breve`, "Um agente com papel, horário de trabalho e um heartbeat que pega a próxima issue de um quadro"],
      ],
    },
    {
      kind: "steps",
      id: "open-source",
      title: "Alternativas open source ao OpenCode que você pode instalar hoje",
      text: [
        "Cada uma delas instala com um comando. Leia o script antes de mandá-lo para o seu shell.",
      ],
      steps: [
        {
          title: "Pi",
          text: "Um harness de agente mínimo e extensível. Ele vem com padrões sensatos, mas deixa de fora, de propósito, sub-agentes e modo de planejamento: você os adiciona com extensões, skills e templates de prompt, ou pede ao Pi que os construa. Rode `/login` para conectar uma assinatura ou chave de API. O Pi não tem sistema de permissões embutido, então rode-o em um contêiner ou sandbox se precisar de limites; a documentação descreve três formas.",
          code: install,
        },
        {
          title: "Crush",
          text: "O agente de terminal da Charm, escrito em Go. Ele lê seus servidores de linguagem para ter contexto, aceita servidores MCP via http, stdio e sse, e deixa você trocar de modelo no meio da sessão. Instala com Homebrew, npm, winget, scoop, apt e pkg, e o README lista Windows (PowerShell e WSL), Android e os BSDs. A licença é FSL-1.1-MIT, uma licença source-available, e não open source.",
        },
        {
          title: "Kilo CLI",
          text: "O README do Kilo diz que a CLI dele é um fork do OpenCode. Por cima, o Kilo acrescenta extensões para VS Code e JetBrains, um agente na nuvem, revisões automáticas de pull requests e 500+ modelos que você pode trocar no meio da tarefa. Licença MIT.",
        },
        {
          title: "Goose, Cline e Nanocoder",
          text: "O Goose é um agente em Rust com app desktop e CLI, agora sob a Agentic AI Foundation da Linux Foundation. O Cline roda como CLI, extensão de editor ou SDK. O Nanocoder é um agente de terminal com modelos locais em primeiro lugar, do Nano Collective, com modos normal, auto-accept, yolo, plan e architect, e comandos que revisam uma branch ou fazem checkout de um pull request em uma worktree própria.",
        },
      ],
      source: { label: "Fonte: o README de cada projeto no GitHub", href: "https://github.com/earendil-works/pi" },
    },
    {
      kind: "text",
      id: "free",
      title: "Alternativas ao OpenCode com modelos grátis",
      text: [
        "O próprio OpenCode inclui modelos grátis com limite diário de requisições, e você pode voltar para eles quando os limites do Go acabarem. Se quiser outra coisa grátis:",
      ],
      points: [
        "Freebuff: sem assinatura, créditos ou chave de API. Anúncios em texto pagam os modelos incluídos, com o DeepSeek V4.1 Flash como padrão; indicações e recompensas acrescentam horas à cota diária grátis.",
        "Modelos locais: Nanocoder, Crush, Goose e OpenCode falam com o Ollama, então o único custo é o seu próprio hardware.",
        "Plano grátis do Google: o Gemini CLI não tem mais. O README diz que as contas individuais grátis e o Google AI Pro e Ultra passaram para o Antigravity CLI (`agy`) em 18 de junho de 2026.",
        "Codex CLI: open source, e funciona com uma conta gratuita do ChatGPT.",
        "Agentes open source com a sua própria chave: Pi, Kilo CLI, Cline e Goose não custam nada; você paga só pelo modelo.",
      ],
    },
    {
      kind: "steps",
      id: "local",
      title: "Alternativas ao OpenCode para LLMs locais",
      text: [
        "Se o motivo de usar o OpenCode é rodar modelos na sua própria máquina, estes dois tratam modelos locais como caminho principal.",
      ],
      steps: [
        {
          title: "Nanocoder",
          text: "Feito para modelos locais via Ollama, ou qualquer API compatível com OpenAI, como o OpenRouter. Passe o provedor e o modelo como flags, ou rode-o de forma não interativa com `nanocoder run`.",
          code: local,
        },
        {
          title: "Crush",
          text: "Adicione o Ollama como provedor no seu `crushrc`, um arquivo de configuração no estilo Bash que funciona igual em todas as plataformas, inclusive Windows, e depois registre os modelos que você baixou.",
        },
      ],
    },
    {
      kind: "text",
      id: "by-need",
      title: "Rust, Windows, Android ou interface gráfica",
      points: [
        "Em Rust: o Codex CLI e o Goose são escritos em Rust. O Crush é um único binário em Go.",
        "Para Windows: Crush (winget, scoop ou npm), Pi (um instalador em PowerShell), GitHub Copilot CLI (winget) e o app desktop do OpenCode rodam nativamente.",
        "Para Android: o README do Crush lista o Android entre os terminais suportados.",
        "Com interface gráfica: o próprio app desktop do OpenCode (beta) para macOS, Windows e Linux; o Goose Desktop; o Freebuff Desktop, que também pode rodar o Claude Code e o Codex que você tem instalados; e o Kilo ou o Cline dentro do VS Code e do JetBrains.",
        "O OpenCode Go custa $10 por mês para modelos open-weight (o Go Plus custa $40). Se preferir uma única assinatura para um modelo de fronteira, o Codex vem com o ChatGPT Go por $8 por mês, o Copilot Pro custa $10 e o Claude Pro, $20.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Com o Crewmark",
      title: "Quando você quer que o agente trabalhe sem você digitar",
      text: [
        "Todas as ferramentas desta lista esperam o seu próximo prompt. O Crewmark transforma o seu próprio Claude Code ou Codex em um funcionário de IA com papel, uma meta em números, horário de trabalho e um heartbeat: durante o turno, ele acorda, pega a próxima issue de um quadro e manda mensagem quando precisa de uma decisão. Ele roda no seu computador, no plano que você já paga.",
      ],
      steps: [
        {
          title: "Contrate um funcionário no seu agente",
          text: "Rode o comando de configuração em uma conversa do Claude Code ou do Codex; essa conversa vira o funcionário. Veja [o que é um funcionário de IA](/ai-employees).",
        },
        {
          title: "Dê a ele horário e um heartbeat",
          text: "Ele acorda a cada 15 a 240 minutos durante o horário que você definir, até de madrugada. Veja [como rodar o Claude Code 24/7](/blog/run-claude-code-24-7) e [tarefas longas no Codex](/blog/codex-long-running-tasks).",
        },
        {
          title: "Responda quando ele perguntar",
          text: "As decisões chegam até você como mensagens; todo o resto fica no quadro. Para comparar mais agentes, veja [alternativas ao Cursor](/blog/cursor-alternatives) e [alternativas ao Devin](/blog/devin-alternatives).",
        },
      ],
    },
  ],
  mid: {
    title: "Quer um agente de programação que continue trabalhando entre os seus prompts?",
    text: "Os funcionários do Crewmark acordam com um heartbeat durante o horário de trabalho e pegam a próxima issue de um quadro.",
    button: "Começar",
  },
  faq: {
    title: "Perguntas frequentes sobre alternativas ao OpenCode",
    items: [
      {
        q: "Qual é a melhor alternativa open source ao OpenCode?",
        a: "O Pi, se você quer um harness pequeno que você mesmo estende; o Crush, para um app de terminal caprichado em todas as plataformas; e o Kilo CLI, se você quer o motor do OpenCode com extensões de IDE em volta. Goose e Cline também são boas opções com licença Apache.",
      },
      {
        q: "O Kilo CLI é baseado no OpenCode?",
        a: "Sim. O README do Kilo diz que o Kilo CLI é um fork do OpenCode, estendido para funcionar com a plataforma do Kilo: extensões para VS Code e JetBrains, um agente na nuvem e revisões de código.",
      },
      {
        q: "Existe uma alternativa grátis ao OpenCode?",
        a: "O Freebuff é grátis e sem chave de API, mantido por anúncios em texto. Nanocoder, Crush, Goose e o próprio OpenCode são grátis com modelos locais via Ollama. O plano grátis do Gemini CLI passou para o Antigravity CLI em junho de 2026.",
      },
      {
        q: "Existe uma alternativa ao OpenCode escrita em Rust?",
        a: "O Codex CLI, da OpenAI, e o Goose são escritos em Rust e têm licença Apache 2.0. O Crush é escrito em Go e é distribuído como um único binário.",
      },
      {
        q: "O Crush é open source?",
        a: "O código do Crush é público sob a FSL-1.1-MIT, uma licença source-available. OpenCode, Pi, Kilo CLI e Nanocoder são MIT; Goose, Cline, Codex CLI, Qwen Code e Freebuff são Apache 2.0.",
      },
      {
        q: "OpenCode vs Claude Code: qual devo usar?",
        a: "O OpenCode funciona com qualquer provedor, inclusive modelos locais, e é open source. O Claude Code é o agente da própria Anthropic, de código fechado, incluído a partir do Claude Pro por $20 por mês. Se você já paga o Claude, o Claude Code recebe os recursos primeiro; se troca de modelo com frequência, o OpenCode ou o Pi se encaixam melhor.",
      },
    ],
  },
  cta: {
    title: "Dê ao seu agente de programação um trabalho, não só um prompt.",
    text: "O Crewmark transforma sessões do Claude Code e do Codex em funcionários de IA com papéis, metas, horários de trabalho e um heartbeat.",
    button: "Começar",
  },
  checked: "Verificado com o repositório no GitHub e o README de cada projeto, o opencode.ai e as páginas de preços dos fornecedores em 10 de novembro de 2026.",
  disclaimer:
    "O Crewmark é um produto independente, sem afiliação ou endosso do OpenCode ou de qualquer projeto listado. Os nomes de produtos são marcas registradas de seus donos.",
};
