import type { GuideCopy } from "@/components/landing/guide-article";

// pt-BR translation of /alternatives/<product>; the English master is src/content/alternatives.ts.

type Alternative = "paperclip" | "multica" | "crewai";

const others = (except: Alternative) =>
  [
    ["paperclip", "[Paperclip](/alternatives/paperclip): orquestração open source e auto-hospedada para uma empresa inteira de agentes."],
    ["multica", "[Multica](/alternatives/multica): um quadro de tarefas para CLIs de agentes de programação, na nuvem ou auto-hospedado."],
    ["crewai", "[CrewAI](/alternatives/crewai): um framework em Python para criar workflows multiagente com chaves de API."],
  ]
    .filter(([slug]) => slug !== except)
    .map(([, text]) => text);

const newToIdea = "Novo no assunto? Leia [o que é um funcionário de IA](/ai-employees).";

const closing = (product: string) => ({
  title: `Experimente o Crewmark como alternativa ao ${product}.`,
  text: "Dê ao seu agente do Claude Code ou do Codex um cargo, uma meta e horário de trabalho, e atribua tarefas a ele em um quadro.",
  button: "Começar",
});

const mid = {
  title: "Contrate um funcionário de IA no plano que você já paga",
  text: "O Crewmark acorda sua sessão do Claude Code ou do Codex com um heartbeat e entrega a ela a próxima tarefa de um quadro.",
  button: "Começar",
};

const disclaimer = (owner: string) =>
  `O Crewmark é um produto independente, sem vínculo com a ${owner} e sem endosso dela. Os nomes de produtos são marcas de seus respectivos titulares. As informações sobre outros produtos vêm da documentação pública deles e podem ter mudado desde então.`;

export const copy: Record<Alternative, GuideCopy> = {
  paperclip: {
    meta: {
      title: "Alternativa ao Paperclip AI: Crewmark vs Paperclip",
      description:
        "Procura uma alternativa ao Paperclip? Compare Crewmark e Paperclip em hospedagem, agentes, heartbeats, metas e configuração e veja qual é melhor para você.",
    },
    breadcrumb: "Alternativa ao Paperclip",
    hero: {
      kicker: "Alternativa ao Paperclip",
      title: "Crewmark vs Paperclip",
      lead: "Paperclip e Crewmark transformam agentes de programação como o Claude Code e o Codex em um time que pega trabalho em horários definidos. O Paperclip é um servidor open source que você mesmo roda para orquestrar uma empresa inteira de agentes; o Crewmark é um quadro hospedado em que cada agente é um funcionário com cargo, meta numérica e horário de trabalho. Veja como eles se comparam.",
      cta: "Começar",
      secondary: "Ver a comparação",
      secondaryHref: "#compare",
    },
    sections: [
      {
        kind: "text",
        title: "O que é o Paperclip",
        text: [
          "O Paperclip é um servidor Node.js com interface em React, sob licença MIT, que “orquestra um time de agentes de IA para tocar um negócio”. Você define uma meta da empresa, monta um organograma com cargos, hierarquia e orçamentos, e contrata agentes por meio de adaptadores para Claude Code, Codex, Cursor, Gemini CLI, OpenCode, OpenClaw e outros.",
          "Os agentes acordam para tarefas atribuídas, follow-ups ou heartbeats opcionais por timer; rotinas rodam via cron ou webhooks; e orçamentos, aprovações e aprovações de contratação mantêm uma pessoa no comando. Hoje ele é auto-hospedado, com uma versão na nuvem em lista de espera.",
        ],
      },
      {
        kind: "table",
        id: "compare",
        title: "Crewmark vs Paperclip em resumo",
        headers: ["", "Paperclip", "Crewmark"],
        rows: [
          ["Hospedagem", "Auto-hospedado (Node.js 24+ ou Docker); nuvem em lista de espera", "App web hospedado, mais um pequeno daemon no seu computador"],
          ["Licença", "Open source, MIT", "Comercial, com cadastro aberto"],
          ["Agentes", "Claude Code, Codex, Cursor, Gemini CLI, OpenCode, OpenClaw e outros, ou chaves de API", "Claude Code, Codex, DeepSeek Harness e OpenCode"],
          ["Unidade de trabalho", "Tarefas ligadas às metas da empresa e dos projetos", "Tarefas em um quadro kanban"],
          ["Estrutura", "Organograma: cargos, hierarquia, orçamentos", "Funcionários: cargo, KPI numérico, horário de trabalho"],
          ["Quando os agentes acordam", "Trabalho atribuído, mensagens, heartbeats opcionais por timer, rotinas", "Um heartbeat a cada 15, 30 ou 60 minutos durante o horário de trabalho"],
          ["Controle de gastos", "Orçamentos por empresa, por agente e por projeto", "Roda na sua assinatura atual; dorme fora do horário de trabalho"],
          ["Quando trava", "Fluxos de aprovação e comentários", "Uma mensagem direta para você, e depois segue em frente"],
        ],
      },
      {
        kind: "text",
        title: "Qual escolher?",
        points: [
          "Escolha o Paperclip se você quer um software open source que possa hospedar e modificar, precisa de orçamentos e de um organograma para muitos agentes, ou usa agentes que o Crewmark não suporta, como Cursor ou Gemini CLI.",
          "Escolha o Crewmark se você prefere não manter um servidor, quer cada agente avaliado por um número (cliques, cadastros, PRs mergeados) e dentro de um horário de trabalho, e quer um único quadro em que os agentes mandam mensagem quando travam.",
        ],
      },
      {
        kind: "steps",
        id: "how-to",
        title: "Como migrar do Paperclip para o Crewmark",
        steps: [
          {
            title: "Exporte o que você quer manter",
            text: "O Paperclip exporta uma empresa em Markdown legível: agentes com seus cargos e instruções, skills e, opcionalmente, projetos, rotinas e tarefas. Segredos, aprovações e histórico de custos não são incluídos.",
          },
          {
            title: "Recrie cada agente como um funcionário",
            text: "No Crewmark, escolha o cargo mais próximo, cole as instruções do agente e transforme a meta dele em um número que ele possa acompanhar, como “+10% de cliques no Search Console por mês”.",
          },
          {
            title: "Conecte o mesmo agente",
            text: "Rode o comando de configuração na conversa do Claude Code ou do Codex em que o funcionário vai viver. Ele continua usando a assinatura que você já paga.",
          },
          {
            title: "Leve as tarefas abertas para o quadro",
            text: "Recrie as tarefas abertas e atribua-as. Defina o horário de trabalho e um heartbeat, e o funcionário as pega no próximo despertar.",
          },
        ],
      },
      { kind: "text", title: "Outras alternativas", points: [...others("paperclip"), newToIdea] },
    ],
    howTo: { section: "how-to", name: "Migrar do Paperclip para o Crewmark" },
    mid,
    faq: {
      title: "Perguntas sobre alternativas ao Paperclip",
      items: [
        {
          q: "O Paperclip é gratuito?",
          a: "A versão auto-hospedada é gratuita e open source, sob a licença MIT. O Paperclip não publicou preços para a versão na nuvem, que está em lista de espera.",
        },
        {
          q: "Qual a principal diferença entre o Crewmark e o Paperclip?",
          a: "O Paperclip é um servidor auto-hospedado para tocar uma empresa de agentes com organograma e orçamentos. O Crewmark é hospedado e trata cada agente como um funcionário com meta numérica, horário de trabalho e heartbeat.",
        },
        {
          q: "Os dois funcionam com Claude Code e Codex?",
          a: "Sim. Os dois controlam o Claude Code e o Codex de verdade. O Paperclip também suporta Cursor, Gemini CLI e outros agentes; o Crewmark também suporta DeepSeek Harness e OpenCode.",
        },
        {
          q: "Posso hospedar o Crewmark por conta própria?",
          a: "Não. O Crewmark é um app hospedado; só o daemon que acorda seus agentes roda no seu computador.",
        },
        {
          q: "Paperclip vs OpenClaw ou Hermes Agent?",
          a: "O Paperclip se descreve como a empresa e o OpenClaw como um funcionário: OpenClaw e Hermes são agentes pessoais, e o Paperclip organiza agentes como eles em um organograma com metas e orçamentos. Compare os dois agentes em [Hermes Agent vs OpenClaw](/blog/hermes-agent-vs-openclaw).",
        },
      ],
    },
    cta: closing("Paperclip"),
    checked: "Conferido com o README, a documentação e o site do Paperclip em 2 de novembro de 2026.",
    disclaimer: disclaimer("Paperclip Labs"),
  },
  multica: {
    meta: {
      title: "Alternativa ao Multica: Crewmark vs Multica | Crewmark AI",
      description:
        "Procurando uma alternativa ao Multica? Compare Crewmark e Multica em agentes, agendamento, metas, licença e configuração e veja qual combina com seu time.",
    },
    breadcrumb: "Alternativa ao Multica",
    hero: {
      kicker: "Alternativa ao Multica",
      title: "Crewmark vs Multica",
      lead: "Multica e Crewmark permitem atribuir tarefas a agentes de programação como o Claude Code e o Codex como se fossem colegas de time. O Multica é um workspace para times de software, disponível na nuvem ou auto-hospedado; o Crewmark trata cada agente como um funcionário com meta numérica, horário de trabalho e um heartbeat que o acorda sozinho. Veja como eles se comparam.",
      cta: "Começar",
      secondary: "Ver a comparação",
      secondaryHref: "#compare",
    },
    sections: [
      {
        kind: "text",
        title: "O que é o Multica",
        text: [
          "O Multica é um workspace source-available em que “você atribui trabalho a agentes de programação de IA do mesmo jeito que atribuiria a um colega de time”. Ele não traz um modelo próprio: um daemon controla as CLIs de agentes em que você já está logado, 26 delas, incluindo Claude Code, Codex, Cursor Agent, Copilot CLI, OpenCode e DeepSeek Harness.",
          "Os agentes pegam tarefas de um quadro, o trabalho vai para revisão e uma caixa de entrada avisa você quando um agente precisa de uma decisão. Os autopilots criam tarefas via agendamento cron ou webhook, os squads encaminham o trabalho por meio de um líder, e ele se integra a Slack, Feishu, DingTalk, WeCom e Telegram.",
        ],
      },
      {
        kind: "table",
        id: "compare",
        title: "Crewmark vs Multica em resumo",
        headers: ["", "Multica", "Crewmark"],
        rows: [
          ["Hospedagem", "Nuvem, ou auto-hospedado com Docker ou Helm", "App web hospedado, mais um pequeno daemon no seu computador"],
          ["Licença", "Source-available (Apache 2.0 com condições); hospedá-lo para terceiros exige licença comercial", "Comercial, com cadastro aberto"],
          ["Agentes", "26 CLIs de agentes, incluindo Claude Code, Codex, Cursor e DeepSeek Harness", "Claude Code, Codex, DeepSeek Harness e OpenCode"],
          ["Unidade de trabalho", "Tarefas em um quadro, squads, chat e canais", "Tarefas em um quadro kanban"],
          ["Trabalho agendado", "Autopilots criam tarefas via cron ou webhooks", "Um heartbeat acorda cada funcionário a cada 15, 30 ou 60 minutos"],
          ["Metas", "Nenhuma informada por agente", "Um KPI numérico por funcionário, ex.: +10% de cliques por mês"],
          ["Horário de trabalho", "Nenhum informado", "Definido por funcionário; ele dorme fora desse horário"],
          ["Quando trava", "Caixa de entrada e etapas de revisão", "Uma mensagem direta para você, e depois segue em frente"],
        ],
      },
      {
        kind: "text",
        title: "Qual escolher?",
        points: [
          "Escolha o Multica se você precisa hospedar por conta própria, quer a maior variedade de CLIs de agentes ou trabalha no Feishu, no DingTalk ou no WeCom.",
          "Escolha o Crewmark se você quer agentes que começam a trabalhar no próprio horário sem você criar tarefas para eles, que são avaliados por um número e respeitam um horário de trabalho para não gastar seu plano durante a madrugada.",
        ],
      },
      {
        kind: "steps",
        id: "how-to",
        title: "Como migrar do Multica para o Crewmark",
        steps: [
          {
            title: "Liste seus agentes e as tarefas abertas",
            text: "Anote as instruções de cada agente e as tarefas que ainda estão abertas. A CLI e a API do Multica conseguem listá-las.",
          },
          {
            title: "Recrie cada agente como um funcionário",
            text: "No Crewmark, escolha o cargo mais próximo, cole as instruções e dê a ele uma meta em números, além de horário de trabalho e um heartbeat.",
          },
          {
            title: "Conecte a mesma CLI de agente",
            text: "Rode o comando de configuração na conversa do Claude Code, do Codex, do DeepSeek Harness ou do OpenCode em que o funcionário vai viver. Ele continua usando o login que você já tem.",
          },
          {
            title: "Troque os autopilots por heartbeats",
            text: "Em vez de um cron job que abre tarefas, coloque o trabalho recorrente no backlog do funcionário. Ele confere o quadro a cada heartbeat e pega a próxima.",
          },
        ],
      },
      { kind: "text", title: "Outras alternativas", points: [...others("multica"), newToIdea] },
    ],
    howTo: { section: "how-to", name: "Migrar do Multica para o Crewmark" },
    mid,
    faq: {
      title: "Perguntas sobre alternativas ao Multica",
      items: [
        {
          q: "O Multica é open source?",
          a: "Ele é source-available: a Multica License é Apache 2.0 com condições extras. Usá-lo dentro da sua própria organização, inclusive auto-hospedado, é gratuito; oferecê-lo como serviço hospedado para terceiros exige licença comercial.",
        },
        {
          q: "Qual a principal diferença entre o Crewmark e o Multica?",
          a: "Os dois colocam agentes de programação em um quadro de tarefas. O Crewmark acrescenta uma estrutura de funcionário: uma meta numérica, horário de trabalho e um heartbeat que acorda cada agente sozinho para pegar a próxima tarefa.",
        },
        {
          q: "Os dois usam meu login atual do Claude Code ou do Codex?",
          a: "Sim. Os dois controlam a CLI de agente em que você já está logado, então o trabalho roda no seu plano atual.",
        },
        {
          q: "Posso hospedar o Crewmark por conta própria?",
          a: "Não. O Crewmark é um app hospedado; só o daemon que acorda seus agentes roda no seu computador.",
        },
        {
          q: "O Multica é gratuito?",
          a: "O Multica é source-available: auto-hospedá-lo é gratuito para uso dentro da sua própria organização, e oferecê-lo a terceiros exige licença comercial. A nuvem dele tem um teste gratuito; os preços dos planos ainda não foram publicados.",
        },
        {
          q: "Multica vs Linear: qual a diferença?",
          a: "O Linear é um gerenciador de tarefas para pessoas. O Multica é um quadro em que agentes de programação são colegas de equipe: você atribui tarefas a eles, e eles as assumem, executam e reportam por meio de um daemon no seu computador ou de um runtime na nuvem.",
        },
        {
          q: "Multica vs Hermes Agent?",
          a: "São camadas diferentes. O Hermes Agent é um agente pessoal da Nous Research; o Multica pode rodar o Hermes, junto com Claude Code, Codex, OpenClaw e mais de 20 outras CLIs de agente, como runtimes no quadro dele. Veja [Hermes Agent vs OpenClaw](/blog/hermes-agent-vs-openclaw).",
        },
      ],
    },
    cta: closing("Multica"),
    checked: "Conferido com o README, a documentação, a licença e o site do Multica em 2 de novembro de 2026.",
    disclaimer: disclaimer("Index Labs"),
  },
  crewai: {
    meta: {
      title: "Crewmark vs CrewAI: alternativa sem código | Crewmark AI",
      description:
        "Procurando uma alternativa ao CrewAI? Compare Crewmark e CrewAI em código, modelos, preços e atribuição de trabalho e veja qual combina com seu time.",
    },
    breadcrumb: "Alternativa ao CrewAI",
    hero: {
      kicker: "Alternativa ao CrewAI",
      title: "Crewmark vs CrewAI",
      lead: "O CrewAI é um framework em Python para criar workflows multiagente, com uma plataforma comercial por cima. O Crewmark não é um framework: ele transforma o agente do Claude Code ou do Codex que você já usa em um funcionário de IA e passa trabalho para ele em um quadro, sem código para escrever e sem conta de API. Veja como eles se comparam.",
      cta: "Começar",
      secondary: "Ver a comparação",
      secondaryHref: "#compare",
    },
    sections: [
      {
        kind: "text",
        title: "O que é o CrewAI",
        text: [
          "O CrewAI é um framework open source em Python, sob licença MIT, “para criar workflows multiagente prontos para produção”. Você define agentes com cargo, meta, história de fundo (backstory), ferramentas e um LLM, e depois os combina em crews e flows orientados a eventos. Por padrão, os agentes usam a API da OpenAI, e outros provedores e modelos locais são suportados.",
          "O CrewAI AMP acrescenta um editor visual, um copiloto de IA, agendamento via cron, intervenção humana no processo (human-in-the-loop), rastreamento e deploy na nuvem do CrewAI ou na sua própria infraestrutura.",
        ],
      },
      {
        kind: "table",
        id: "compare",
        title: "Crewmark vs CrewAI em resumo",
        headers: ["", "CrewAI", "Crewmark"],
        rows: [
          ["O que é", "Um framework em Python mais uma plataforma para fazer deploy de workflows", "Um quadro de funcionários de IA que rodam no seu agente de programação"],
          ["Exige programação", "Sim, para o framework (Python 3.10–3.13); um editor visual na plataforma", "Não: escolha um cargo e rode um comando de configuração"],
          ["Modelos", "Chaves de API: OpenAI por padrão, outros provedores e modelos locais", "Claude Code, Codex, DeepSeek Harness ou OpenCode, no seu plano atual"],
          ["Capacidades do agente", "As ferramentas que você define no código", "Tudo o que o agente de programação faz: arquivos, terminal, navegador, MCP"],
          ["Unidade de trabalho", "Tarefas dentro de uma crew ou de um flow", "Tarefas em um quadro kanban"],
          ["Agendamento", "Agendamento via cron na plataforma", "Um heartbeat a cada 15, 30 ou 60 minutos durante o horário de trabalho"],
          ["Metas", "Um campo de meta no prompt de cada agente", "Um KPI numérico por funcionário, acompanhado ao longo do tempo"],
          ["Preço", "Plano gratuito com 50 execuções por mês; Enterprise sob consulta", "Cadastro aberto; sem custo extra de tokens além do seu plano"],
        ],
      },
      {
        kind: "text",
        title: "Qual escolher?",
        points: [
          "Escolha o CrewAI se você é dev e está criando um workflow multiagente dentro do seu próprio produto, precisa de controle preciso sobre cada etapa ou precisa de um deploy corporativo com SSO e sua própria VPC.",
          "Escolha o Crewmark se você não quer escrever nem manter código de agentes, já paga pelo Claude Code ou pelo Codex e quer agentes que façam trabalhos contínuos, como SEO ou correção de bugs, e prestem contas em um quadro.",
        ],
      },
      {
        kind: "steps",
        id: "how-to",
        title: "Como migrar do CrewAI para o Crewmark",
        steps: [
          {
            title: "Associe cada agente a um cargo",
            text: "Pegue o cargo e a meta de cada agente do CrewAI e escolha o cargo mais próximo no Crewmark. A backstory vira as instruções do funcionário.",
          },
          {
            title: "Transforme a meta em um número",
            text: "No CrewAI, a meta é uma frase no prompt. No Crewmark, escreva o que você mediria, como “10 pull requests mergeados por semana”.",
          },
          {
            title: "Conecte um agente de programação",
            text: "Rode o comando de configuração no Claude Code ou no Codex. O funcionário usa as ferramentas do próprio agente, então a maior parte do código de ferramentas personalizadas deixa de ser necessária.",
          },
          {
            title: "Transforme as tarefas em tarefas no quadro",
            text: "Coloque o trabalho que sua crew rodava como tarefas no quadro e defina o horário de trabalho e um heartbeat para que o funcionário as pegue sozinho.",
          },
        ],
      },
      { kind: "text", title: "Outras alternativas", points: [...others("crewai"), newToIdea] },
    ],
    howTo: { section: "how-to", name: "Migrar do CrewAI para o Crewmark" },
    mid,
    faq: {
      title: "Perguntas sobre alternativas ao CrewAI",
      items: [
        {
          q: "O CrewAI é gratuito?",
          a: "O framework é open source, sob a licença MIT, mas você paga ao provedor do modelo pelos tokens. A plataforma hospedada tem um plano Basic gratuito com 50 execuções de workflow por mês e um plano Enterprise com preço sob consulta.",
        },
        {
          q: "Preciso programar para usar o Crewmark?",
          a: "Não. Você escolhe um cargo, escreve a meta e roda um comando de configuração no Claude Code ou no Codex. O trabalho é atribuído como tarefas em um quadro.",
        },
        {
          q: "O CrewAI consegue rodar o Claude Code ou o Codex como agente?",
          a: "Os agentes do CrewAI são chamadas a um LLM com ferramentas que você define, então usam APIs de modelos em vez de rodar dentro do Claude Code ou do Codex. Os funcionários do Crewmark rodam dentro do agente de programação de verdade.",
        },
        {
          q: "Qual é uma boa alternativa open source ao CrewAI?",
          a: "Se você quer open source e agentes construídos sobre CLIs de programação, dê uma olhada no [Paperclip](/alternatives/paperclip). O Crewmark não é open source; é um app hospedado.",
        },
      ],
    },
    cta: closing("CrewAI"),
    checked: "Conferido com o README, a documentação e a página de preços do CrewAI em 2 de novembro de 2026.",
    disclaimer: disclaimer("CrewAI"),
  },
};
