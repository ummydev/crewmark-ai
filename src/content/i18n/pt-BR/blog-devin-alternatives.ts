import type { GuideCopy } from "@/components/landing/guide-article";
import { plan } from "@/lib/pricing";

// pt-BR translation of /blog/devin-alternatives; the English master is src/content/blog/devin-alternatives.ts.

const free = plan("free");
const pro = plan("pro");

const install = `# OpenHands Agent Canvas (precisa de Node 24+ e uv)
npm install -g @openhands/agent-canvas
agent-canvas

# OpenCode
curl -fsSL https://opencode.ai/v2/install | bash

# mini-swe-agent (o sucessor do SWE-agent)
pip install uv && uvx mini-swe-agent

# Cline CLI
npm i -g cline

# Goose CLI
curl -fsSL https://github.com/aaif-goose/goose/releases/download/stable/download_cli.sh | bash`;

export const copy: GuideCopy = {
  meta: {
    title: "Alternativas ao Devin (2026): open source, grátis e mais baratas",
    description:
      "As melhores alternativas ao Devin AI em 2026, com os preços atuais de cada fornecedor: agentes open source que você pode instalar hoje (OpenHands, OpenCode, mini-swe-agent, Cline, Goose), agentes na nuvem da OpenAI, Anthropic, Google e GitHub, e plataformas para equipes.",
  },
  breadcrumb: "Alternativas ao Devin",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-10" },
  hero: {
    kicker: "Blog · Engenheiros de software de IA",
    title: "As melhores alternativas ao Devin em 2026: open source, grátis e mais baratas",
    lead: "O Devin, da Cognition, é um engenheiro de software de IA autônomo: você o marca no Slack ou no Teams, atribui a ele um ticket do Linear ou do Jira, ou o aponta para um CI quebrado, e ele trabalha na própria máquina virtual e abre um pull request. Em 2026, ele tem um plano gratuito e planos a partir de $20 por mês. As alternativas se dividem em três grupos: agentes open source que você mesmo roda, agentes na nuvem dos criadores de modelos e plataformas para equipes. Cada um serve para um perfil diferente; veja qual, com preços tirados do site de cada fornecedor.",
    cta: "Começar",
    secondary: "Alternativas open source",
    secondaryHref: "#open-source",
  },
  sections: [
    {
      kind: "text",
      title: "Escolhas rápidas",
      points: [
        "Você quer open source e nos seus próprios servidores: OpenHands, o projeto que começou como OpenDevin, hoje uma central de controle self-hosted para agentes de programação.",
        "Você vive no terminal e quer qualquer modelo: OpenCode, com licença MIT e cerca de 226 mil estrelas no GitHub.",
        "Você já paga ChatGPT ou Claude: tarefas na nuvem do OpenAI Codex ou sessões na nuvem do Claude Code, incluídas em planos a partir de $20 por mês.",
        "Sua equipe trabalha no GitHub: Copilot na nuvem, atribuído a partir de issues e incluído a partir do Copilot Pro por $10 por mês.",
        "Você quer agentes guiados por tickets em toda a empresa: os Droids da Factory.",
        "Você quer um engenheiro de IA com um trabalho fixo no seu próprio Claude Code ou Codex: Crewmark.",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Alternativas ao Devin comparadas",
      text: [
        "Os preços são o plano mais barato que inclui o agente, da página de preços de cada fornecedor em 10 de novembro de 2026. As estrelas estão arredondadas, pela API do GitHub no mesmo dia.",
      ],
      headers: ["Ferramenta", "Open source", "Onde roda", "A partir de", "Ideal para"],
      rows: [
        ["[Devin](https://devin.ai)", "Não", "Uma VM própria na nuvem por sessão; Devin Desktop e CLI localmente", "Plano gratuito; Pro $20/mês", "Equipes que querem passar tickets a um agente pelo Slack, Teams ou Jira"],
        ["[OpenHands](https://github.com/OpenHands/OpenHands)", "Sim, MIT (~93 mil estrelas)", "Seu notebook, Docker, uma VM; também nuvem hospedada", "Grátis para self-host; Teams $500/mês", "Um agente no estilo Devin na sua própria infraestrutura e com suas chaves de modelo"],
        ["[OpenCode](https://github.com/anomalyco/opencode)", "Sim, MIT (~226 mil estrelas)", "Terminal, app desktop, SDK", "Modelos grátis incluídos; Go $10/mês", "Usuários de terminal que querem qualquer um de 200+ provedores de modelos"],
        ["[mini-swe-agent](https://github.com/SWE-agent/mini-swe-agent)", "Sim, MIT (~9,5 mil estrelas)", "CLI local", "Grátis (você paga o modelo)", "Pesquisa, benchmarks e correção reproduzível de issues"],
        ["[Cline](https://github.com/cline/cline)", "Sim, Apache 2.0 (~71 mil estrelas)", "CLI, VS Code, JetBrains, desktop", "Grátis (você paga o modelo)", "Um agente open source dentro do seu editor"],
        ["[Goose](https://github.com/aaif-goose/goose)", "Sim, Apache 2.0 (~56 mil estrelas)", "App desktop, CLI, API", "Grátis (você paga o modelo)", "Um agente para código e outros trabalhos, com extensões MCP"],
        ["[OpenAI Codex](https://chatgpt.com/codex)", "Só a CLI (Apache 2.0)", "Nuvem da OpenAI; CLI, IDE, desktop", "ChatGPT Plus $20/mês", "Assinantes do ChatGPT"],
        ["[Claude Code](https://code.claude.com/docs/en/claude-code-on-the-web)", "Não", "VM gerenciada pela Anthropic por sessão na nuvem; também localmente", "Claude Pro $20/mês", "Usuários do Claude Code que querem o trabalho seguindo com o notebook fechado"],
        ["[Google Jules](https://jules.google)", "Não", "VM na nuvem do Google", "15 tarefas/dia no plano básico; Google AI Pro $19.99/mês", "Desenvolvedores individuais no Gemini"],
        ["[GitHub Copilot na nuvem](https://github.com/features/copilot/plans)", "Não", "Sandbox na nuvem do GitHub", "Copilot Pro $10/mês", "Equipes que já estão no GitHub"],
        ["[Cursor Cloud Agents](https://cursor.com/docs/cloud-agent)", "Não", "VMs na nuvem do Cursor", "Premium $30/mês", "Equipes que já trabalham no Cursor"],
        ["[Factory](https://factory.com)", "Não", "Desktop, CLI, web; agentes na nuvem e locais", "Pro $20/mês", "Organizações de engenharia que comandam agentes a partir de tickets e chat"],
        ["[Crewmark](/pricing)", "Sim, GPL-3.0", "Seu computador, dentro do seu próprio Claude Code ou Codex", `Plano Free (${free.projects} projeto, ${free.employees} funcionários de IA); Pro $${pro.price}/mês em breve`, "Equipes pequenas que querem um engenheiro de IA em uma agenda, num plano que já pagam"],
      ],
    },
    {
      kind: "steps",
      id: "open-source",
      title: "Alternativas open source ao Devin que você pode rodar hoje",
      text: [
        "O Devin em si não é open source. Estas são, e cada uma instala com um único comando. Você traz a sua própria chave de modelo, então o software é grátis e você paga o seu provedor de modelo. Leia o script antes de mandá-lo para o seu shell.",
      ],
      steps: [
        {
          title: "OpenHands (antigo OpenDevin)",
          text: "Agora chamado Agent Canvas: uma central de controle self-hosted que roda o agente OpenHands, e também Claude Code, Codex, Gemini ou OpenCode, no seu notebook, no Docker ou em uma VM, com automações para Slack, GitHub e Linear. Grátis para self-host; um plano Teams hospedado custa $500 por mês para até 10 usuários.",
          code: install,
        },
        {
          title: "OpenCode",
          text: "Um agente de terminal com licença MIT que funciona com mais de 200 provedores de modelos, inclusive modelos locais, mais um app desktop em beta. Há modelos grátis incluídos, sem conta; o OpenCode Go custa $10 por mês, e você pode entrar com uma assinatura do ChatGPT ou do GitHub Copilot. Veja [alternativas ao OpenCode](/blog/opencode-alternatives) para agentes parecidos.",
        },
        {
          title: "SWE-agent e mini-swe-agent",
          text: "O agente de pesquisa de Princeton e Stanford que pega uma issue do GitHub e tenta corrigi-la. O README agora diz que o mini-swe-agent o substituiu, então comece por ele. Grátis; você paga só pelo modelo.",
        },
        {
          title: "Cline, Goose, Aider e Kilo Code",
          text: "O Cline é um agente com licença Apache para o terminal, VS Code e JetBrains, com modos Plan e Act. O Goose, agora sob a Agentic AI Foundation da Linux Foundation, cuida de código e outras tarefas por meio de extensões MCP. Aider e Kilo Code também são agentes de programação open source populares; o Devika, um dos primeiros clones open source do Devin, não é atualizado desde setembro de 2025.",
        },
      ],
      source: { label: "Fonte: OpenHands no GitHub", href: "https://github.com/OpenHands/OpenHands" },
    },
    {
      kind: "text",
      id: "cloud",
      title: "Agentes na nuvem dos criadores de modelos",
      text: [
        "Se você quer o fluxo “atribua e vá embora” do Devin sem mais um fornecedor, os criadores de modelos agora oferecem isso dentro de planos que você talvez já tenha.",
      ],
      points: [
        "OpenAI Codex: tarefas na nuvem em chatgpt.com/codex, incluídas a partir do ChatGPT Plus por $20 por mês; as tarefas na nuvem consomem mais da sua cota, e uma chave de API cobre a CLI e a IDE, mas não os recursos de nuvem.",
        "Claude Code: sessões na nuvem a partir de claude.ai/code, do app do Claude ou de `claude --cloud`, cada uma em uma VM isolada gerenciada pela Anthropic, nos planos Pro ($20 por mês), Max, Ultra e Team, sem cobrança à parte pela VM.",
        "Google Jules: clona o seu repositório em uma VM na nuvem e abre um pull request; 15 tarefas por dia no plano básico e 100 com o Google AI Pro por $19.99 por mês.",
        "GitHub Copilot na nuvem: atribua uma issue e o Copilot abre um pull request; incluído a partir do Copilot Pro por $10 por mês, com o uso cobrado em GitHub AI Credits.",
        "Cursor Cloud Agents: rodam em VMs isoladas, iniciados pelo Cursor, pela web, pelo Slack ou pelo Linear; a partir do plano Premium de $30 por mês.",
      ],
    },
    {
      kind: "text",
      id: "devin-pricing",
      title: "Quanto custa o Devin em 2026",
      text: [
        "Muitas listas ainda citam um plano de equipe de $500 e $2.25 por ACU. Hoje, no devin.ai, os planos self-serve não usam ACUs; a cobrança mistura cota incluída com créditos sob demanda, e só o Enterprise é cobrado em ACUs.",
      ],
      points: [
        "Free: $0, com uma cota leve.",
        "Pro: $20 por mês, incluindo o Devin Cloud; uso extra pelo preço da API.",
        "Max: $200 por mês.",
        "Teams: $80 por mês mais $40 por mês por assento de desenvolvedor completo, até 100 usuários.",
        "Enterprise: sob consulta.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Com o Crewmark",
      title: "Um engenheiro de IA com um trabalho fixo, no seu próprio agente",
      text: [
        "O Devin e os agentes na nuvem esperam você atribuir cada tarefa. O Crewmark transforma o seu próprio Claude Code ou Codex em um engenheiro de software de IA com papel, uma meta em números, horário de trabalho e um heartbeat: durante o turno, ele acorda, pega a próxima issue de um quadro, abre um pull request e manda mensagem quando precisa de uma decisão. Ele roda na assinatura que você já paga, no seu computador.",
      ],
      steps: [
        {
          title: "Contrate o papel de engenheiro de software",
          text: "O brief, a meta e a rotina já vêm configurados; veja o [engenheiro de software de IA](/ai-employees/software-engineer).",
        },
        {
          title: "Coloque o trabalho em um quadro",
          text: "Atribua issues como faria a um colega; o funcionário mantém status e comentários em dia. Veja [kanban para o Claude Code](/blog/claude-code-kanban).",
        },
        {
          title: "Deixe ele seguir em frente",
          text: "Defina o horário de trabalho, até de madrugada. Veja [como rodar o Claude Code 24/7](/blog/run-claude-code-24-7) e [tarefas longas no Codex](/blog/codex-long-running-tasks).",
        },
      ],
    },
  ],
  mid: {
    title: "Quer um engenheiro no estilo Devin no plano do Claude Code ou do Codex que você já tem?",
    text: "Os funcionários do Crewmark acordam com um heartbeat, avançam por um quadro e abrem pull requests.",
    button: "Começar",
  },
  faq: {
    title: "Perguntas frequentes sobre alternativas ao Devin",
    items: [
      {
        q: "Qual é a melhor alternativa open source ao Devin?",
        a: "O OpenHands, que começou como OpenDevin, é o mais próximo: uma plataforma de agentes self-hosted que você roda com as suas próprias chaves de modelo. Para um agente de terminal, o OpenCode; para pesquisa e benchmarks, o mini-swe-agent.",
      },
      {
        q: "O OpenDevin é o mesmo que o OpenHands?",
        a: "Sim. O OpenDevin foi renomeado para OpenHands, da All Hands AI. Ele tem licença MIT e agora é distribuído como Agent Canvas, que também roda Claude Code, Codex e outros agentes.",
      },
      {
        q: "O Devin é grátis?",
        a: "Há um plano gratuito com uma cota leve. Os planos pagos são o Pro por $20 por mês, o Max por $200 e o Teams por $80 por mês mais $40 por assento de desenvolvedor, segundo o devin.ai em 10 de novembro de 2026.",
      },
      {
        q: "O Devin ainda cobra por ACU?",
        a: "Só no Enterprise. Os planos self-serve agora combinam uma cota incluída com créditos sob demanda, então o antigo valor de $2.25 por ACU não se aplica mais a eles.",
      },
      {
        q: "Devin vs Claude Code ou Codex: qual devo usar?",
        a: "Se você já paga o Claude ou o ChatGPT, as sessões e tarefas na nuvem deles dão o fluxo “atribua e vá embora” do Devin sem custo extra. O Devin acrescenta fluxos com Slack, Teams, Jira e Linear feitos para equipes.",
      },
      {
        q: "Qual é a alternativa mais barata ao Devin?",
        a: "Os agentes open source não custam nada além do uso do modelo. Entre as opções hospedadas, o GitHub Copilot Pro por $10 por mês inclui o agente na nuvem, e o Google Jules permite 15 tarefas por dia no plano básico.",
      },
    ],
  },
  cta: {
    title: "Dê ao seu Claude Code ou Codex um trabalho, não só uma tarefa.",
    text: "O Crewmark transforma sessões do Claude Code e do Codex em funcionários de IA com papéis, metas, horários de trabalho e um heartbeat.",
    button: "Começar",
  },
  checked:
    "Verificado com o site, a página de preços, a documentação e o repositório no GitHub de cada produto em 10 de novembro de 2026.",
  disclaimer:
    "O Crewmark é um produto independente, sem afiliação ou endosso da Cognition ou de qualquer empresa listada. Os nomes de produtos são marcas registradas de seus donos.",
};
