import type { GuideCopy } from "@/components/landing/guide-article";

// Brazilian Portuguese translation of /blog/claude-code-deepseek; the English master is src/content/blog/claude-code-deepseek.ts.

const docs = "https://api-docs.deepseek.com/quick_start/agent_integrations/claude_code";

const env = `export ANTHROPIC_BASE_URL=https://api.deepseek.com/anthropic
export ANTHROPIC_AUTH_TOKEN=<your DeepSeek API Key>
export ANTHROPIC_MODEL=deepseek-flash[1m]
export ANTHROPIC_DEFAULT_OPUS_MODEL=deepseek-flash[1m]
export ANTHROPIC_DEFAULT_SONNET_MODEL=deepseek-flash[1m]
export ANTHROPIC_DEFAULT_HAIKU_MODEL=deepseek-flash
export CLAUDE_CODE_SUBAGENT_MODEL=deepseek-flash
export CLAUDE_CODE_EFFORT_LEVEL=max
export CLAUDE_CODE_AUTO_COMPACT_WINDOW=786432`;

const windows = `$env:ANTHROPIC_BASE_URL="https://api.deepseek.com/anthropic"
$env:ANTHROPIC_AUTH_TOKEN="<your DeepSeek API Key>"
$env:ANTHROPIC_MODEL="deepseek-flash[1m]"
$env:ANTHROPIC_DEFAULT_OPUS_MODEL="deepseek-flash[1m]"
$env:ANTHROPIC_DEFAULT_SONNET_MODEL="deepseek-flash[1m]"
$env:ANTHROPIC_DEFAULT_HAIKU_MODEL="deepseek-flash"
$env:CLAUDE_CODE_SUBAGENT_MODEL="deepseek-flash"
$env:CLAUDE_CODE_EFFORT_LEVEL="max"
$env:CLAUDE_CODE_AUTO_COMPACT_WINDOW="786432"`;

export const copy: GuideCopy = {
  meta: {
    title: "DeepSeek no Claude Code (V4): configuração e custo",
    description:
      "Rode o Claude Code com os modelos da DeepSeek: as variáveis de ambiente que a DeepSeek documenta para deepseek-flash e deepseek-v4-pro, mapeamento de modelos, busca na web, preços e a configuração no Codex.",
  },
  breadcrumb: "Claude Code com DeepSeek",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-06" },
  hero: {
    kicker: "Blog · DeepSeek",
    title: "Como usar os modelos da DeepSeek no Claude Code",
    lead: "A API da DeepSeek fala o protocolo da Anthropic, então o Claude Code pode rodar com os modelos da DeepSeek se você apontá-lo para `https://api.deepseek.com/anthropic` com uma chave de API da DeepSeek. A DeepSeek documenta as configurações exatas: `deepseek-flash` (DeepSeek-V4.1-Flash) com contexto de 1M de tokens para a maior parte do trabalho, e `deepseek-v4-pro` por trás do nome Opus. Este guia mostra a configuração no macOS, Linux e Windows, explica como os nomes dos modelos do Claude são mapeados, quanto custa e como fazer o mesmo no Codex.",
    cta: "Começar",
    secondary: "Ir para a configuração",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "steps",
      id: "how-to",
      title: "Como configurar o Claude Code com a DeepSeek",
      steps: [
        {
          title: "Pegue uma chave de API da DeepSeek",
          text: "Crie uma em platform.deepseek.com, em API keys, e adicione saldo à conta; o uso é cobrado por token.",
        },
        {
          title: "Instale o Claude Code, se ainda não tiver",
          text: "O guia da DeepSeek instala com npm: Node.js 18 ou mais recente, Git for Windows no Windows, depois `npm install -g @anthropic-ai/claude-code` e `claude --version` para conferir.",
        },
        {
          title: "Defina as variáveis de ambiente (macOS e Linux)",
          text: "Elas apontam o Claude Code para o endpoint compatível com a Anthropic da DeepSeek, usam `deepseek-flash` com contexto de 1M para o modelo principal e os subagentes, e aumentam o nível de esforço e a janela de compactação automática. Coloque-as no perfil do seu shell para mantê-las.",
          code: env,
        },
        {
          title: "Ou no Windows (PowerShell)",
          text: "As mesmas configurações como variáveis de ambiente do PowerShell para a sessão atual.",
          code: windows,
        },
        {
          title: "Inicie o Claude Code no seu projeto",
          text: "Entre no projeto com `cd` e rode `claude`. Todo o resto, como CLAUDE.md, skills, hooks e servidores MCP, é configurado normalmente.",
        },
      ],
      source: { label: "Fonte: documentação da API da DeepSeek, Integrate with Claude Code", href: docs },
    },
    {
      kind: "table",
      title: "Como os nomes de modelos do Claude são mapeados para modelos da DeepSeek",
      text: [
        "Quando o Claude Code (ou o app desktop do Claude) envia um nome de modelo do Claude para o endpoint da DeepSeek, a DeepSeek faz este mapeamento. É por isso que a configuração acima define todas as variáveis de modelo como `deepseek-flash`: do contrário, tudo o que pedir Opus é cobrado com preços do V4 Pro.",
      ],
      headers: ["Nome de modelo que o Claude Code envia", "Modelo da DeepSeek usado", "Observações"],
      rows: [
        ["`claude-opus-*`", "`deepseek-v4-pro`", "Cobrado com preços do V4 Pro"],
        ["`claude-sonnet-*`, `claude-haiku-*`", "`deepseek-flash`", "DeepSeek-V4.1-Flash; aceita imagens"],
        ["`deepseek-flash[1m]`", "`deepseek-flash` com contexto de 1.048.576 tokens", "Como definido nas variáveis recomendadas pela DeepSeek"],
      ],
    },
    {
      kind: "table",
      id: "cost",
      title: "Quanto custa",
      text: [
        "Preços da API da DeepSeek em dólares americanos por milhão de tokens em 6 de novembro de 2026. As tarifas fora do pico (fora das 01:00–04:00 e 06:00–10:00 UTC em dias úteis) são metade das de pico. A busca na web do Claude Code também funciona com a API da DeepSeek, mas cada busca adiciona tokens do modelo para resumir os resultados e é cobrada pela Search API da DeepSeek.",
      ],
      headers: ["Por 1M de tokens", "deepseek-flash, pico", "deepseek-flash, fora do pico", "deepseek-v4-pro, pico", "deepseek-v4-pro, fora do pico"],
      rows: [
        ["Entrada, cache hit", "$0.006", "$0.003", "$0.044", "$0.022"],
        ["Entrada, cache miss", "$0.30", "$0.15", "$1.32", "$0.66"],
        ["Saída", "$1.20", "$0.60", "$3.96", "$1.98"],
      ],
    },
    {
      kind: "text",
      title: "Usando a DeepSeek no Codex",
      text: [
        "A DeepSeek também suporta o Codex, pela Responses API. O guia oferece um script de configuração que faz backup de `~/.codex/config.toml`, grava um catálogo `~/.codex/models.json` com `deepseek-flash` e `deepseek-v4-pro` e adiciona um provedor DeepSeek; uma única configuração passa a valer para a CLI do Codex, o app desktop do ChatGPT e a extensão do VS Code. Leia o script antes de rodá-lo, ou siga os passos manuais do mesmo guia. O script desativa a busca na web integrada, que só está disponível com `deepseek-v4-pro`. Para os arquivos de instruções do próprio Codex, veja o [guia do AGENTS.md no Codex](/blog/codex-agents-md).",
      ],
    },
    {
      kind: "text",
      title: "Claude Code com DeepSeek vs DeepSeek Harness",
      points: [
        "Claude Code com DeepSeek: você mantém a interface e os hábitos do Claude Code, incluindo CLAUDE.md, skills, hooks e plugins, e paga os preços por token da DeepSeek em vez de um plano do Claude.",
        "DeepSeek Harness: o app de agentes open source da própria DeepSeek, construído em torno de plugins, com app desktop e interface web; ele também pode rodar o Claude Code ou o Codex como subagentes. Veja o [guia do DeepSeek Harness](/blog/deepseek-harness).",
        "Nos dois casos, os modelos são os mesmos `deepseek-flash` e `deepseek-v4-pro`, cobrados pela DeepSeek.",
        "Para voltar aos modelos da Anthropic, remova as variáveis (ou abra um shell novo sem elas) e entre no Claude Code normalmente.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Com o Crewmark",
      title: "Modelos baratos, trabalhando o dia todo",
      text: [
        "Rodar o Claude Code ou o DeepSeek Harness com os preços da DeepSeek torna viável manter os agentes ocupados. O Crewmark transforma essas sessões em funcionários de IA com um cargo, uma meta e um horário de trabalho, e acorda cada um com um heartbeat para pegar a próxima issue de um quadro.",
      ],
      steps: [
        {
          title: "Use a configuração que você já tem",
          text: "Um funcionário roda em uma sessão do Claude Code, do Codex, do DeepSeek Harness ou do OpenCode na sua máquina, com o seu ambiente e as suas chaves.",
        },
        {
          title: "Deixe o heartbeat iniciar o trabalho",
          text: "Durante o horário de trabalho, ele acorda a cada 15, 30 ou 60 minutos na mesma conversa e pega a próxima issue; veja [como tornar o Claude Code proativo](/proactive-claude-code).",
        },
        {
          title: "Mantenha a conta sob controle",
          text: "O horário de trabalho e uma issue por vez deixam o uso previsível; veja [como reduzir o uso de tokens do Claude Code](/blog/reduce-claude-code-token-usage).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Use os modelos da DeepSeek no Claude Code" },
  mid: {
    title: "Claude Code com DeepSeek sai barato. Deixe-o trabalhar mais.",
    text: "O Crewmark acorda o Claude Code, o Codex ou o DeepSeek Harness com um heartbeat, com um cargo, uma meta e um quadro de issues.",
    button: "Começar",
  },
  faq: {
    title: "Perguntas frequentes sobre Claude Code com DeepSeek",
    items: [
      {
        q: "O Claude Code pode usar modelos da DeepSeek?",
        a: "Sim. A API da DeepSeek é compatível com a Anthropic em `https://api.deepseek.com/anthropic`. Defina `ANTHROPIC_BASE_URL` com esse endereço e `ANTHROPIC_AUTH_TOKEN` com a sua chave de API da DeepSeek, como mostra o guia da DeepSeek.",
      },
      {
        q: "Qual modelo da DeepSeek devo usar no Claude Code?",
        a: "O guia da DeepSeek define `deepseek-flash` (DeepSeek-V4.1-Flash) com contexto de 1M para todas as funções. O `deepseek-v4-pro` é usado quando uma requisição pede um modelo Opus, com preços mais altos.",
      },
      {
        q: "Quanto custa o Claude Code com DeepSeek?",
        a: "Só o uso da API da DeepSeek: no `deepseek-flash`, $0.30 por milhão de tokens de entrada em cache miss e $1.20 por milhão de tokens de saída no pico, metade disso fora do pico, e bem menos para entrada em cache.",
      },
      {
        q: "A busca na web funciona no Claude Code com DeepSeek?",
        a: "Sim. A DeepSeek suporta a ferramenta de busca na web do Claude Code; cada busca adiciona tokens do modelo para resumir os resultados e é cobrada pela Search API da DeepSeek.",
      },
      {
        q: "Preciso de uma assinatura do Claude?",
        a: "Não. Com essas variáveis, o Claude Code envia as requisições para a DeepSeek e cobra na sua conta da DeepSeek em vez de um plano do Claude.",
      },
      {
        q: "Também posso usar a DeepSeek no Codex?",
        a: "Sim. A DeepSeek documenta uma configuração do Codex pela Responses API, com um script ou edições manuais em `~/.codex/config.toml` e `~/.codex/models.json`.",
      },
      {
        q: "Claude Code com DeepSeek ou DeepSeek Harness?",
        a: "Se você gosta das ferramentas e do fluxo de trabalho do Claude Code, fique com ele e troque o modelo. Se quiser o app da própria DeepSeek, baseado em plugins e com interface desktop, experimente o DeepSeek Harness.",
      },
    ],
  },
  cta: {
    title: "Coloque seu agente com DeepSeek para trabalhar com horário.",
    text: "O Crewmark transforma sessões do Claude Code, do Codex, do DeepSeek Harness e do OpenCode em funcionários de IA com cargos, metas, horário de trabalho e um heartbeat.",
    button: "Começar",
  },
  checked: "Conferido com a documentação da API da DeepSeek (integrações com Claude Code e Codex, preços) em 6 de novembro de 2026.",
  disclaimer:
    "O Crewmark é um produto independente, sem vínculo com a DeepSeek, a Anthropic ou a OpenAI e sem endosso delas. Claude e Claude Code são marcas da Anthropic; Codex, da OpenAI.",
};
