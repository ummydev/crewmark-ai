import type { GuideCopy } from "@/components/landing/guide-article";

// Brazilian Portuguese translation of /blog/reduce-claude-code-token-usage; the English master is src/content/blog/reduce-claude-code-token-usage.ts.

const docs = "https://code.claude.com/docs/en/costs";

const compact = `# Compact instructions

Ao usar o compact, foque na saída dos testes e nas mudanças de código.`;

const hook = `{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "Bash",
        "hooks": [
          { "type": "command", "command": "~/.claude/hooks/filter-test-output.sh" }
        ]
      }
    ]
  }
}`;

export const copy: GuideCopy = {
  meta: {
    title: "Como reduzir o uso de tokens do Claude Code: 12 dicas | Crewmark",
    description:
      "Por que o Claude Code gasta tantos tokens e como reduzir: veja o uso com /usage e /context, use clear e compact, escolha modelo e esforço, enxugue o CLAUDE.md e o MCP, e use hooks, skills e subagentes.",
  },
  breadcrumb: "Reduzir o uso de tokens do Claude Code",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-06" },
  hero: {
    kicker: "Blog · Claude Code",
    title: "Como reduzir o uso de tokens do Claude Code (e parar de bater nos limites)",
    lead: "O Claude Code envia a conversa inteira a cada requisição, então o uso de tokens cresce com o contexto: uma pergunta de uma linha no fim de uma sessão longa custa muito mais do que a mesma pergunta numa sessão nova. Este guia mostra como ver para onde vão os seus tokens e depois doze mudanças, tiradas da própria documentação da Anthropic, que reduzem o uso: de `/clear` e `/compact` à escolha do modelo e do esforço, enxugar o CLAUDE.md e os servidores MCP, e levar o trabalho barulhento para hooks, skills e subagentes.",
    cta: "Acesso antecipado",
    secondary: "Ir para as dicas",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "table",
      id: "measure",
      title: "Primeiro, veja para onde vão os seus tokens",
      headers: ["Ferramenta", "O que mostra"],
      rows: [
        ["`/usage`", "Tokens da sessão e custo estimado; no Pro, Max, Ultra, Team e Enterprise, barras de uso do plano, uma divisão por skills, subagentes, plugins e servidores MCP, recomendações e as suas tarefas `/loop` mais pesadas"],
        ["`/context`", "O que está enchendo a janela de contexto agora"],
        ["Barra de status", "O uso do contexto sempre à vista, se você configurar"],
        ["Contador do spinner", "Os tokens de saída do turno atual, como `↓ 5.5k tokens`; não inclui o seu contexto"],
        ["`/insights`", "Um relatório HTML sobre como você trabalha nas sessões recentes, com pontos de atrito e sugestões"],
      ],
    },
    {
      kind: "text",
      title: "Por que o uso dispara numa sessão longa",
      points: [
        "Contexto longo: cada requisição leva a conversa inteira, e cada rodada de chamadas de ferramentas envia outra requisição. O cache deixa as releituras mais baratas, não de graça.",
        "Cache misses: a sua primeira mensagem depois de uma pausa maior que a duração do cache reprocessa o contexto inteiro.",
        "O que roda enquanto você está parado: tarefas agendadas da sessão e `/loop`, mensagens das suas outras sessões, verificações de metas, resumos de sessão e compactação ociosa.",
        "Workers em paralelo: cada subagente, agente de workflow e colega de um agent team envia as próprias requisições. Agent teams usam cerca de 7x os tokens de uma sessão comum quando os colegas rodam no plan mode.",
        "A própria compactação: o `/compact` precisa ler a conversa que resume. O `/clear` não custa nada.",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "12 formas de reduzir o uso de tokens do Claude Code",
      steps: [
        {
          title: "Limpe entre tarefas sem relação",
          text: "O `/clear` começa uma conversa nova, então o contexto antigo para de ir junto. Rode `/rename` antes se quiser retomá-la depois com `/resume`.",
        },
        {
          title: "Compacte com instruções",
          text: "`/compact Focus on code samples and API usage` diz ao Claude o que manter. Você também pode deixar instruções fixas de compactação no CLAUDE.md.",
          code: compact,
        },
        {
          title: "Use o modelo certo",
          text: "O Sonnet dá conta da maior parte do trabalho de código e custa menos que o Opus; guarde o Opus para arquitetura e raciocínio difícil. Troque com `/model` e dê `model: haiku` aos subagentes simples.",
        },
        {
          title: "Baixe o esforço no trabalho simples",
          text: "Tokens de raciocínio são cobrados como saída e podem chegar a dezenas de milhares por requisição. Baixe o nível com `/effort` nas tarefas de rotina.",
        },
        {
          title: "Mantenha o CLAUDE.md curto",
          text: "Ele é carregado inteiro em toda sessão. Fique abaixo de umas 200 linhas e mova instruções de fluxos específicos para skills, que só carregam quando usadas. Veja o [guia do CLAUDE.md](/blog/claude-md) e [as skills do Claude Code](/blog/claude-code-skills).",
        },
        {
          title: "Enxugue os servidores MCP",
          text: "As definições de ferramentas são carregadas sob demanda por padrão, mas cada servidor ainda adiciona nomes e instruções. Desative os que você não usa em `/mcp` e prefira CLIs como `gh`, `aws` ou `gcloud`, que não adicionam uma listagem por ferramenta.",
        },
        {
          title: "Filtre a saída barulhenta com um hook",
          text: "Um hook PreToolUse pode reescrever comandos de teste para manter só as falhas, transformando dezenas de milhares de tokens de logs em centenas. A documentação da Anthropic traz um script de filtro pronto.",
          code: hook,
        },
        {
          title: "Delegue o trabalho verboso a subagentes",
          text: "Rodar testes, ler documentação ou processar logs num subagente deixa a saída no contexto dele; só um resumo volta. Dê a esses subagentes um modelo menor.",
        },
        {
          title: "Instale plugins de inteligência de código",
          text: "Em linguagens tipadas, um plugin de language server responde \"ir para a definição\" numa única chamada, em vez de um grep e várias leituras de arquivos.",
        },
        {
          title: "Escreva prompts específicos",
          text: "\"Adicione validação de entrada à função de login em auth.ts\" lê poucos arquivos; \"melhore este código\" varre tudo.",
        },
        {
          title: "Planeje primeiro, pare cedo",
          text: "Use o [plan mode](/blog/claude-code-plan-mode) em mudanças grandes para pegar uma direção errada antes de escrever código; aperte Esc assim que o Claude sair do rumo e use `/rewind` para voltar a um checkpoint.",
        },
        {
          title: "Fique de olho no que roda enquanto você está fora",
          text: "Cada tarefa agendada, execução de `/loop` ou mensagem ociosa envia o seu contexto inteiro. Pare os loops de que você não precisa, defina `crossSessionInbound` como `hold` para enfileirar mensagens de outras sessões e confira as linhas de Loops no `/usage`.",
        },
      ],
      source: { label: "Fonte: documentação do Claude Code, Manage costs effectively", href: docs },
    },
    {
      kind: "text",
      title: "Limites de uso e custos de equipe",
      text: [
        "No Pro, Max e Ultra, o uso conta contra os limites do seu plano em vez de virar fatura; veja [Claude Code vs Codex](/blog/claude-code-vs-codex) para entender como funcionam os limites de 5 horas e semanais. Na API, a Anthropic informa uma média corporativa de cerca de $13 por desenvolvedor por dia ativo e de $150 a $250 por mês, com 90% dos usuários abaixo de $30 por dia.",
        "Admins podem definir limites de gasto para equipes, e uma tabela `modelPricing` nas configurações gerenciadas faz o `/usage` mostrar os preços contratados em vez do preço de tabela.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Com o Crewmark",
      title: "Agentes que trabalham com horário, sem queimar tokens a noite toda",
      text: [
        "Tudo o que acorda uma sessão envia o contexto inteiro dela, então um agente sempre ligado precisa de limites. O Crewmark transforma uma sessão do Claude Code, Codex, DeepSeek Harness ou OpenCode em um funcionário de IA que acorda com um heartbeat só durante o horário de trabalho que você definir.",
      ],
      steps: [
        {
          title: "Defina o horário e um ritmo",
          text: "Escolha a cada 15, 30 ou 60 minutos e as horas em que ele trabalha; fora delas, ele dorme. Veja [como tornar o Claude Code proativo](/proactive-claude-code).",
        },
        {
          title: "Uma issue por vez",
          text: "Cada heartbeat pega a próxima issue do quadro, então a sessão trabalha numa tarefa focada em vez de explorar sem rumo.",
        },
        {
          title: "No plano que você já paga",
          text: "Os funcionários rodam na sua assinatura atual e contam contra os limites do seu plano. Leia [o que é um funcionário de IA](/ai-employees).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Reduzir o uso de tokens do Claude Code" },
  mid: {
    title: "Gaste os seus tokens com trabalho, não com espera.",
    text: "O Crewmark acorda o Claude Code no horário de trabalho com um papel, uma meta e a próxima issue de um quadro.",
    button: "Acesso antecipado",
  },
  faq: {
    title: "Perguntas frequentes sobre o uso de tokens do Claude Code",
    items: [
      {
        q: "Por que o Claude Code gasta tantos tokens?",
        a: "Ele envia a conversa inteira a cada requisição, e cada rodada de chamadas de ferramentas é outra requisição. Sessões longas, cache misses depois de pausas, subagentes e tudo o que roda enquanto você está parado vão se somando.",
      },
      {
        q: "Como vejo o uso de tokens do Claude Code?",
        a: "Rode `/usage` para ver os tokens da sessão, o uso do plano e uma divisão com recomendações, e `/context` para ver o que enche a janela de contexto. Uma barra de status pode mostrar o uso do contexto o tempo todo.",
      },
      {
        q: "Qual é o jeito mais rápido de economizar tokens?",
        a: "Rode `/clear` entre tarefas sem relação, use o Sonnet a menos que precise do Opus e mantenha o CLAUDE.md curto. Essas três coisas cobrem a maior parte do desperdício.",
      },
      {
        q: "O /compact economiza tokens?",
        a: "Ele encolhe o contexto para as próximas mensagens, mas a compactação em si lê a conversa inteira, então é uma requisição grande. Se você não precisa de continuidade, o `/clear` não custa nada.",
      },
      {
        q: "Servidores MCP consomem tokens?",
        a: "As definições de ferramentas só são carregadas quando usadas, mas cada servidor ainda adiciona nomes de ferramentas e instruções. Desative os servidores que você não usa e prefira ferramentas de CLI quando existirem.",
      },
      {
        q: "Por que bati no limite de uso tão rápido?",
        a: "Normalmente por uma sessão longa, alguns cache misses ou trabalho em segundo plano como `/loop`, tarefas agendadas, subagentes ou agent teams. Num plano pago, o `/usage` mostra qual deles está por trás do seu uso recente.",
      },
      {
        q: "Subagentes economizam tokens?",
        a: "Eles mantêm a saída verbosa fora da sua conversa principal, o que deixa as próximas requisições pequenas, mas as requisições deles também contam. Dê a eles um modelo menor para gastar menos.",
      },
    ],
  },
  cta: {
    title: "Coloque o Claude Code para trabalhar num horário que você controla.",
    text: "O Crewmark transforma sessões do Claude Code, Codex e DeepSeek Harness em funcionários de IA com papéis, metas, horários de trabalho e um heartbeat.",
    button: "Acesso antecipado",
  },
  checked: "Conferido com a documentação do Claude Code (Manage costs effectively) em 6 de novembro de 2026.",
  disclaimer:
    "O Crewmark é um produto independente, sem vínculo com a Anthropic e sem endosso dela. Claude e Claude Code são marcas da Anthropic.",
};
