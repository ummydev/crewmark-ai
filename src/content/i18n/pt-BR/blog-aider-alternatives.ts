import type { GuideCopy } from "@/components/landing/guide-article";
import { plan } from "@/lib/pricing";

// pt-BR translation of /blog/aider-alternatives; the English master is src/content/blog/aider-alternatives.ts.

const free = plan("free");
const pro = plan("pro");

const install = `# cecli, um fork comunitário do Aider
curl -LsSf https://cecli.dev/install.sh | sh

# OpenCode
curl -fsSL https://opencode.ai/v2/install | bash

# Pi
curl -fsSL https://pi.dev/install.sh | sh

# Nanocoder (modelos locais via Ollama)
npm install -g @nanocollective/nanocoder

# Codex CLI
npm install -g @openai/codex`;

const conventions = `# O Aider carregava suas convenções com --read
aider --read CONVENTIONS.md

# OpenCode e Codex leem o AGENTS.md na raiz do repositório
mv CONVENTIONS.md AGENTS.md

# O Claude Code lê o CLAUDE.md; importe o mesmo arquivo lá
echo "@AGENTS.md" >> CLAUDE.md`;

export const copy: GuideCopy = {
  meta: {
    title: "Alternativas ao Aider (2026): o Aider morreu? O que usar agora",
    description:
      "O Aider ainda é mantido? A última release, o último commit e as issues abertas, e depois as melhores alternativas ao Aider em 2026: o fork cecli, OpenCode, Pi, Crush, Cline, Nanocoder, Codex CLI e Claude Code, com comandos de instalação.",
  },
  breadcrumb: "Alternativas ao Aider",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-10" },
  hero: {
    kicker: "Blog · Agentes de programação",
    title: "Alternativas ao Aider em 2026: o Aider morreu, e o que usar no lugar",
    lead: "O Aider foi o pair programmer de IA original no terminal: open source, qualquer modelo, um mapa do seu repositório e um commit no git para cada mudança. Ele ainda instala e roda, e tem cerca de 50 mil estrelas no GitHub. Mas a última release com tag no GitHub saiu em agosto de 2025 e o último commit foi em 22 de maio de 2026, então muitos usuários procuram algo que acompanhe os novos modelos. Veja em que pé o projeto está, as alternativas mais parecidas com o jeito do Aider e como migrar a sua configuração.",
    cta: "Começar",
    secondary: "O Aider morreu?",
    secondaryHref: "#is-aider-dead",
  },
  sections: [
    {
      kind: "text",
      id: "is-aider-dead",
      title: "O Aider morreu?",
      text: [
        "Oficialmente, não. O repositório não está arquivado e ninguém anunciou o fim. Mas, por todos os sinais públicos, ele quase não é mantido:",
      ],
      points: [
        "Última release com tag no GitHub: v0.86.0, 9 de agosto de 2025. O último pacote no PyPI, aider-chat 0.86.2, foi publicado em 12 de fevereiro de 2026.",
        "Último commit na branch principal: 22 de maio de 2026, um merge que adicionou nomes de modelos Claude mais novos.",
        "Cerca de 1.960 issues e pull requests abertos.",
        "Em janeiro de 2026, um usuário abriu uma issue perguntando sobre o futuro do Aider. Uma resposta o descreve como um projeto basicamente de uma pessoa só que desacelerou; o mantenedor não respondeu ali.",
        "O README ainda diz que o Aider funciona melhor com Claude 3.7 Sonnet, DeepSeek R1, o3-mini e GPT-4o.",
      ],
    },
    {
      kind: "text",
      title: "Escolhas rápidas",
      points: [
        "O Aider, mas ainda atualizado: cecli, um fork comunitário do Aider.",
        "O agente de terminal open source mais popular, com qualquer modelo: OpenCode, MIT, cerca de 226 mil estrelas.",
        "O espírito minimalista do Aider: Pi, um harness pequeno que você mesmo estende, MIT, cerca de 121 mil estrelas.",
        "Modelos locais em primeiro lugar, como muitos usuários rodavam o Aider: Nanocoder, com Ollama.",
        "O watch mode do Aider, em que você pede mudanças em comentários no código: Cline ou Kilo Code dentro do VS Code e do JetBrains.",
        "Você já paga ChatGPT ou Claude: Codex CLI ou Claude Code.",
        "Um agente que avança por um backlog em uma agenda, não só quando você digita: Crewmark, sobre o Claude Code ou o Codex.",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Alternativas ao Aider comparadas",
      text: [
        "As estrelas estão arredondadas, pela API do GitHub em 10 de novembro de 2026; “último commit” é o commit mais recente na branch principal naquele dia.",
      ],
      headers: ["Ferramenta", "Licença", "Feito em", "Modelos", "Quanto custa", "Ideal para"],
      rows: [
        ["[Aider](https://github.com/Aider-AI/aider)", "Apache 2.0 (~50 mil estrelas)", "Python", "Quase qualquer um, inclusive locais", "Grátis; sua chave do modelo", "A referência; último commit em 22 de maio de 2026"],
        ["[cecli](https://github.com/cecli-dev/cecli)", "Apache 2.0 (~420 estrelas)", "Python", "Como o Aider", "Grátis; sua chave do modelo", "Ficar perto do Aider em um fork que ainda é atualizado"],
        ["[OpenCode](https://github.com/anomalyco/opencode)", "MIT (~226 mil estrelas)", "TypeScript", "Qualquer provedor, modelos locais", "Modelos grátis com limite diário; Go $10/mês", "Um agente de terminal completo com modos Plan e Build e um app desktop"],
        ["[Pi](https://github.com/earendil-works/pi)", "MIT (~121 mil estrelas)", "TypeScript", "Sua assinatura ou chave de API", "Grátis", "Um harness mínimo que você estende com ferramentas e skills"],
        ["[Crush](https://github.com/charmbracelet/crush)", "FSL-1.1-MIT (~29 mil estrelas)", "Go", "A maioria dos provedores, Ollama", "Grátis; sua chave", "Uma interface de terminal caprichada com LSP e MCP, em todas as plataformas"],
        ["[Cline](https://github.com/cline/cline)", "Apache 2.0 (~71 mil estrelas)", "TypeScript", "Sua chave do modelo", "Grátis", "Um agente no VS Code, no JetBrains ou no terminal"],
        ["[Kilo Code](https://github.com/Kilo-Org/kilocode)", "MIT (~28 mil estrelas)", "TypeScript", "500+, pelo preço do provedor", "Grátis para começar", "Extensões de IDE mais uma CLI derivada do OpenCode"],
        ["[Nanocoder](https://github.com/Nano-Collective/nanocoder)", "MIT (~2,6 mil estrelas)", "TypeScript", "Ollama ou qualquer API compatível com OpenAI", "Grátis", "Programação privada, com modelos locais em primeiro lugar"],
        ["[Codex CLI](https://github.com/openai/codex)", "Apache 2.0 (~134 mil estrelas)", "Rust", "OpenAI", "Qualquer plano do ChatGPT, inclusive o Free; ou uma chave de API", "Usuários do ChatGPT que querem um agente nativo e rápido"],
        ["[Claude Code](https://code.claude.com/docs)", "Proprietário", "-", "Anthropic", "Claude Pro $20/mês", "Usuários do Claude"],
        ["[Plandex](https://github.com/plandex-ai/plandex)", "MIT (~16 mil estrelas)", "Go", "Vários provedores", "Grátis; sua chave do modelo", "Projetos grandes; último commit em 3 de outubro de 2025"],
        ["[Crewmark](/pricing)", "Proprietário", "-", "Pelo seu Claude Code ou Codex", `Plano Free (${free.projects} projeto, ${free.employees} funcionários de IA); Pro $${pro.price}/mês em breve`, "Um agente com papel, horário de trabalho e um heartbeat que pega a próxima issue de um quadro"],
      ],
    },
    {
      kind: "steps",
      id: "open-source",
      title: "Alternativas open source ao Aider que você pode instalar hoje",
      text: [
        "Cada uma instala com um comando. Leia o script antes de mandá-lo para o seu shell.",
      ],
      steps: [
        {
          title: "cecli, o fork do Aider",
          text: "O cecli começou como fork do Aider em agosto de 2025 e ainda é atualizado. Ele se descreve como um agente de CLI feito para extensibilidade e personalização, instala como o comando `cecli` no macOS, Linux e Windows, e também está no PyPI como cecli-dev.",
          code: install,
        },
        {
          title: "OpenCode",
          text: "O mais próximo do Aider em alcance: open source, terminal em primeiro lugar e qualquer um de mais de 200 provedores de modelos, inclusive locais. Ele acrescenta um agente Plan somente leitura ao lado do agente Build com acesso total, subagentes e um app desktop em beta.",
        },
        {
          title: "Pi e Nanocoder",
          text: "O Pi mantém o núcleo pequeno e deixa de fora, de propósito, sub-agentes e modo de planejamento; você adiciona o que precisar com extensões e skills. O Nanocoder é feito por um coletivo sem fins lucrativos para modelos locais via Ollama, com modos plan e architect, este último familiar para quem usa o Aider.",
        },
      ],
      source: { label: "Fonte: o README de cada projeto no GitHub", href: "https://github.com/cecli-dev/cecli" },
    },
    {
      kind: "steps",
      id: "migrate",
      title: "Migrando do Aider para outro agente",
      steps: [
        {
          title: "Leve seu arquivo de convenções junto",
          text: "O Aider lê as convenções de código de um arquivo que você carrega com `--read`. OpenCode e Codex leem o `AGENTS.md` na raiz do repositório, e o Claude Code lê o `CLAUDE.md`, que pode importar o `AGENTS.md`. Veja [AGENTS.md para o Codex](/blog/codex-agents-md) e [CLAUDE.md](/blog/claude-md).",
          code: conventions,
        },
        {
          title: "Decida como quer os commits",
          text: "O Aider faz commit de cada mudança com uma mensagem gerada. Claude Code, Codex e OpenCode deixam os commits com você por padrão, então peça um commit quando uma mudança estiver pronta ou escreva sua regra de commit no AGENTS.md.",
        },
        {
          title: "Traga seus modelos",
          text: "Se você rodava o Aider com DeepSeek ou um modelo local, OpenCode, Crush, Nanocoder e Pi aceitam suas próprias chaves, e os três primeiros falam com o Ollama. Veja [Claude Code com DeepSeek](/blog/claude-code-deepseek) para o caminho inverso.",
        },
      ],
    },
    {
      kind: "text",
      id: "vs",
      title: "Aider vs OpenCode, Claude Code, Pi e Cline",
      points: [
        "Aider vs OpenCode: os dois são open source e independentes de modelo. O OpenCode recebe mais de 100 commits por semana e acrescenta agentes, subagentes, MCP e um app desktop; o Aider é mais simples e faz os commits por você.",
        "Aider vs Claude Code: o Claude Code tem código fechado e roda os modelos da Anthropic, incluído a partir do Claude Pro por $20 por mês; ele recebe primeiro os novos recursos do Claude. O Aider é grátis e funciona com qualquer modelo.",
        "Aider vs Pi: os dois são pequenos de propósito. O Pi está em desenvolvimento ativo, com SDK, modo RPC e um sistema de pacotes para extensões.",
        "Aider vs Cline: o Cline vive principalmente no seu editor, com uma CLI também; o Aider é terminal em primeiro lugar, com um watch mode para comentários no editor.",
        "Aider vs Codex: o Codex CLI é open source e escrito em Rust, incluído em todo plano do ChatGPT; ele roda os modelos da OpenAI.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Com o Crewmark",
      title: "De pair programmer a colega de equipe com um backlog",
      text: [
        "O Aider e todas as ferramentas aqui esperam a sua próxima mensagem. O Crewmark transforma o seu próprio Claude Code ou Codex em um funcionário de IA com papel, uma meta em números, horário de trabalho e um heartbeat: durante o turno, ele acorda, pega a próxima issue de um quadro, faz commit, abre um pull request e manda mensagem quando precisa de uma decisão.",
      ],
      steps: [
        {
          title: "Contrate um funcionário no seu agente",
          text: "Rode o comando de configuração em uma conversa do Claude Code ou do Codex; essa conversa vira o funcionário. Veja o [engenheiro de software de IA](/ai-employees/software-engineer).",
        },
        {
          title: "Dê a ele horário e um heartbeat",
          text: "Ele acorda a cada 15 a 240 minutos durante o horário que você definir. Veja [como rodar o Claude Code 24/7](/blog/run-claude-code-24-7).",
        },
        {
          title: "Compare as outras opções",
          text: "Para mais agentes de terminal, veja [alternativas ao OpenCode](/blog/opencode-alternatives); para editores, [alternativas ao Cursor](/blog/cursor-alternatives).",
        },
      ],
    },
  ],
  mid: {
    title: "Quer um agente que continue trabalhando entre os seus prompts?",
    text: "Os funcionários do Crewmark acordam com um heartbeat durante o horário de trabalho e pegam a próxima issue de um quadro.",
    button: "Começar",
  },
  faq: {
    title: "Perguntas frequentes sobre alternativas ao Aider",
    items: [
      {
        q: "O Aider morreu?",
        a: "Ele não está arquivado e ainda instala e roda. Mas a última release no GitHub foi a v0.86.0, em agosto de 2025, a última no PyPI em fevereiro de 2026 e o último commit em 22 de maio de 2026, e uma pergunta de janeiro de 2026 sobre o futuro dele não tem resposta do mantenedor.",
      },
      {
        q: "O Aider ainda é mantido?",
        a: "Mal e mal. Não há commits desde 22 de maio de 2026, cerca de 1.960 issues e pull requests estão abertos, e o README ainda recomenda modelos do começo de 2025. O cecli, um fork comunitário, continua sendo atualizado.",
      },
      {
        q: "Existe um fork do Aider?",
        a: "Sim: o cecli, um fork do Aider no GitHub iniciado em agosto de 2025, Apache 2.0, instalado como o comando `cecli`. Ele é bem menor que o Aider, com cerca de 420 estrelas.",
      },
      {
        q: "Aider vs OpenCode: qual é melhor em 2026?",
        a: "Para a maioria das pessoas, o OpenCode: ele é open source e independente de modelo como o Aider, mas é atualizado quase todo dia e acrescenta subagentes, MCP e um app desktop. O Aider é mais simples e faz commit de cada mudança por você.",
      },
      {
        q: "O Aider é grátis?",
        a: "Sim. O Aider é Apache 2.0 e grátis; você paga o seu provedor de modelo, ou nada se rodar um modelo local.",
      },
      {
        q: "Qual é a melhor alternativa grátis ao Aider?",
        a: "O OpenCode inclui modelos grátis com limite diário; Nanocoder, Crush e OpenCode rodam modelos locais via Ollama de graça; e o Codex CLI funciona com uma conta gratuita do ChatGPT.",
      },
    ],
  },
  cta: {
    title: "Dê ao seu agente de programação um backlog, não só um prompt.",
    text: "O Crewmark transforma sessões do Claude Code e do Codex em funcionários de IA com papéis, metas, horários de trabalho e um heartbeat.",
    button: "Começar",
  },
  checked: "Verificado com o repositório no GitHub, o README e as releases de cada projeto, o PyPI e as páginas de preços dos fornecedores em 10 de novembro de 2026.",
  disclaimer:
    "O Crewmark é um produto independente, sem afiliação ou endosso do Aider ou de qualquer projeto listado. Os nomes de produtos são marcas registradas de seus donos.",
};
