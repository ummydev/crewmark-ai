import type { GuideCopy } from "@/components/landing/guide-article";

// Brazilian Portuguese translation of /alternatives/factory; the English master is
// src/content/product-alternatives/factory.ts.

export const copy: GuideCopy = {
  meta: {
    title: "Factory AI: alternativas em 2026 entre agentes de programação",
    description:
      "Alternativas à Factory AI comparadas: Devin, Claude Code, Codex, o open source OpenCode, Cursor Projects e Conductor, com preços, limites e para quem servem.",
  },
  breadcrumb: "Alternativas à Factory",
  parent: { name: "Comparações", href: "/compare" },
  hero: {
    kicker: "Alternativas · Factory",
    title: "Alternativas à Factory AI: Devin, Claude Code, Codex, OpenCode e mais, comparados",
    lead: "A Factory faz os Droids, agentes de programação que rodam no Factory App no seu desktop, na Droid CLI, em modo headless no CI e em computadores na nuvem hospedados pela Factory. Os planos individuais vão do Free (com a sua própria inferência) a $200 por mês. Pro, Plus e Max têm limites de uso em janelas móveis de 5 horas, 7 dias e 30 dias, o Teams é limitado a 10 licenças, e a Droid CLI e o Factory App não têm licença open source. Veja 7 alternativas, do Devin e do Claude Code ao OpenCode open source, com quanto custa cada uma.",
    cta: "Começar",
    secondary: "Comparar",
    secondaryHref: "#compare",
  },
  sections: [
    {
      kind: "table",
      id: "compare",
      title: "Alternativas à Factory em resumo",
      text: [
        "Informações das páginas, da documentação ou do GitHub de cada fornecedor, verificadas em 13 de novembro de 2026. Preços em dólares americanos. Não é um ranking. Os planos da própria Factory estão em [preços da Factory](/pricing/factory).",
      ],
      headers: ["Alternativa", "O que é", "Open source", "Preço a partir de"],
      rows: [
        [
          "[Factory](/pricing/factory) (para referência)",
          "Droids: agentes de programação em um app desktop, uma CLI, no CI e em computadores na nuvem hospedados pela Factory",
          "Não",
          "Free $0/mês com a sua própria inferência; Pro $20/mês",
        ],
        [
          "[Devin](/pricing/devin)",
          "O engenheiro de software de IA da Cognition: uma VM na nuvem por sessão, mais o Devin Desktop e a Devin CLI",
          "Não",
          "Free $0 (cota leve); Pro $20/mês",
        ],
        [
          "[Claude Code](/compare/factory-vs-claude-code)",
          "O agente de programação da Anthropic no terminal, na IDE, no app desktop, na web e no celular",
          "Não (repositório público, todos os direitos reservados)",
          "Nos planos pagos do Claude: Pro $20/mês, ou $17/mês no plano anual",
        ],
        [
          "[Codex](/blog/claude-code-vs-codex)",
          "O agente de programação da OpenAI: CLI, extensão de IDE, app desktop do ChatGPT e Codex Cloud",
          "Em parte: CLI, SDK e App Server são Apache-2.0",
          "Nos planos do ChatGPT a partir do Plus, a $20/mês, ou com uma chave de API da OpenAI",
        ],
        [
          "[OpenCode](/pricing/opencode)",
          "Um agente de programação para mais de 200 provedores de modelos, incluindo modelos locais",
          "Sim, MIT",
          "Gratuito, com modelos gratuitos; OpenCode Go $10/mês",
        ],
        [
          "[Cursor Projects](/personal-agent/cursor-projects)",
          "Um agente coordenador que planeja trabalho de programação e roda agentes na nuvem do Cursor em paralelo",
          "Não",
          "Cursor Premium $30/mês, ou $300/ano",
        ],
        [
          "[Conductor](/pricing/conductor)",
          "Um app de Mac que roda Claude Code, Codex, Cursor e OpenCode lado a lado em git worktrees",
          "Não",
          "Gratuito para usar; fechado para novos cadastros e downloads desde 4 de novembro de 2026",
        ],
        [
          "[Crewmark](/ai-employees)",
          "Um quadro de issues para funcionários de IA que rodam como Claude Code ou Codex no seu computador",
          "Sim, GPL-3.0",
          "Grátis (1 projeto, até 3 funcionários de IA); Pro $5/mês em breve",
        ],
      ],
    },
    {
      kind: "text",
      id: "cloud",
      title: "Agentes de programação na nuvem, como os Droids",
      text: [
        "Como os Droid Computers da Factory, estes rodam agentes na nuvem do fornecedor, então o trabalho continua com o seu notebook fechado.",
      ],
      points: [
        "[Devin](/pricing/devin) (Cognition): um engenheiro de software de IA que escreve, roda e testa código e abre pull requests, com cada sessão na nuvem em uma máquina virtual própria, além do Devin Desktop e da Devin CLI localmente. Ele aceita tickets do Linear e do Jira, roda Automations em agendamentos ou por eventos, e uma sessão coordenadora pode iniciar Devins filhos e trocar mensagens com eles. Free $0 (cota leve), Pro $20/mês, Max $200/mês; o Teams custa “$80/mês pelo plano de equipe + $40/mês por licença completa de desenvolvedor”, para até 100 usuários. Escolha-o se você quer passar tickets a um agente e receber pull requests de volta, com planos de equipe acima de 10 licenças. Mais: [alternativas ao Devin](/blog/devin-alternatives), [Devin vs Claude Code](/compare/devin-vs-claude-code).",
        "[Cursor Projects](/personal-agent/cursor-projects): um recurso do Cursor em que um agente coordenador planeja uma funcionalidade, uma migração ou um app completo, delega o trabalho a agentes que rodam em paralelo nos Cloud Agents do Cursor e traz o trabalho pronto para você conferir. Um Project tem um quadro de tarefas e anotações compartilhadas, e pode agir com agendamento, a partir de um canal do Slack ou dos seus pull requests. Ele está no Cursor Premium ($30/mês, ou $300/ano) e nos planos superiores, Teams e Enterprise, e não no Free nem no Plus. Escolha-o se você já trabalha no Cursor e quer um coordenador comandando muitos agentes na nuvem.",
      ],
    },
    {
      kind: "text",
      id: "labs",
      title: "Agentes de programação da Anthropic e da OpenAI",
      text: [
        "O plano Free da Factory pode rodar com um login do ChatGPT ou com as suas próprias chaves de API. Se você já paga a Anthropic ou a OpenAI, os agentes de programação delas vêm com esses planos. Lado a lado: [Factory vs Claude Code](/compare/factory-vs-claude-code), [Claude Code vs Codex](/blog/claude-code-vs-codex), [ChatGPT Work vs Codex](/compare/chatgpt-work-vs-codex).",
      ],
      points: [
        "[Claude Code](/compare/factory-vs-claude-code) (Anthropic): lê o seu código, edita arquivos e roda comandos no terminal, em extensões de IDE, em um app desktop, na web e nos apps do Claude para celular, com modelos Claude. Ele roda tarefas agendadas na nuvem, tarefas agendadas no desktop e `/loop`, e tem subagentes, além dos agent teams experimentais. Está nos planos pagos do Claude, não no Free: Pro $20/mês ($17/mês no plano anual), Max $100, Ultra $200, e licenças Team para 2 a 150 pessoas. Escolha-o se você já paga o Claude.",
        "[Codex](/blog/claude-code-vs-codex) (OpenAI): um agente de programação em uma CLI de terminal, uma extensão de IDE, o app desktop do ChatGPT e o Codex Cloud, com `codex exec` para scripts e CI. A CLI, o SDK e o App Server são open source sob Apache-2.0. Ele está nos planos do ChatGPT a partir do Plus, a $20/mês, no Pro a partir de $100/mês e no Business a partir de $20/usuário/mês com cobrança anual, ou com uma chave de API da OpenAI (só CLI, SDK e extensão de IDE). Escolha-o se você já paga o ChatGPT ou quer uma CLI open source. Veja [Devin vs Codex](/compare/devin-vs-codex).",
      ],
    },
    {
      kind: "text",
      id: "open-source",
      title: "Uma alternativa open source à Factory: OpenCode",
      points: [
        "[OpenCode](/pricing/opencode): um agente de programação com licença MIT que funciona com mais de 200 provedores de modelos, incluindo modelos locais, como interface de terminal, app desktop, app web e SDK. Você pode começar com modelos gratuitos que não exigem conta (com limite diário de requisições), entrar com o ChatGPT Plus ou Pro ou com o GitHub Copilot, usar as suas próprias chaves de API, ou pagar pelo OpenCode Go ($10/mês) ou pelo Go Plus ($40/mês). Agentes e subagentes personalizados são arquivos no seu repositório, com regras de permitir, perguntar ou negar por ação. As execuções agendadas são experimentais e precisam ser ativadas. Escolha-o se você quer um agente open source que possa apontar para quase qualquer modelo. Mais: [alternativas ao OpenCode](/blog/opencode-alternatives), [OpenCode vs Claude Code](/compare/opencode-vs-claude-code).",
      ],
    },
    {
      kind: "text",
      id: "parallel",
      title: "Vários agentes lado a lado: Conductor",
      points: [
        "[Conductor](/pricing/conductor): um app de Mac que roda agentes do Claude Code, Codex, Cursor e OpenCode lado a lado, cada tarefa na própria git worktree, e ajuda você a revisar o diff, abrir um pull request e fazer o merge. Em 4 de novembro de 2026, ele anunciou que vai se juntar à Meta: novos cadastros e downloads estão fechados, o Conductor Cloud fica somente leitura em 13 de novembro de 2026 e é desligado em 20 de novembro de 2026, e o app local recebe novos modelos e correções de bugs críticos até o início de 2027. Escolha-o só se ele já estiver instalado no seu Mac. Mais: [alternativas ao Conductor](/blog/conductor-alternatives), [Vibe Kanban vs Conductor](/compare/vibe-kanban-vs-conductor).",
      ],
    },
    {
      kind: "steps",
      id: "how-to-choose",
      title: "Como escolher uma alternativa à Factory",
      steps: [
        {
          title: "Decida onde o agente roda",
          text: "O Devin e o Cursor Projects rodam na nuvem do fornecedor, como os Droid Computers. O Claude Code e o Codex rodam na sua máquina e na nuvem própria de cada um. O OpenCode roda na sua máquina. O Conductor roda localmente em um Mac.",
        },
        {
          title: "Conte as licenças",
          text: "O Factory Teams é limitado a 10 licenças. O Devin Teams vai até 100 usuários, o plano Team do Claude Code cobre de 2 a 150 pessoas, o Codex Business começa em 2 usuários e o Cursor Teams é cobrado por licença.",
        },
        {
          title: "Veja como o uso é limitado",
          text: "Pro, Plus e Max da Factory têm limites em janelas móveis de 5 horas, 7 dias e 30 dias, mais Extra Usage pré-pago. O Devin usa cotas diárias e/ou semanais, mais créditos pré-pagos. O Claude Code compartilha os limites de 5 horas e semanais com o chat do Claude. Os modelos gratuitos do OpenCode têm um limite diário de requisições.",
        },
        {
          title: "Decida se precisa de open source",
          text: "O OpenCode é MIT e a CLI do Codex é Apache-2.0. Factory, Devin, Claude Code, Cursor Projects e Conductor não publicam licença open source para o produto em si.",
        },
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Com o Crewmark",
      title: "Crewmark: dê ao Claude Code ou ao Codex um cargo e um horário",
      text: [
        "O Crewmark não é um agente de programação. É um gerenciador de issues para um time de funcionários de IA: cada um é uma conversa do Claude Code ou do Codex no seu próprio computador, com um cargo, metas e horário de trabalho. Ele acorda com um heartbeat, pega issues de um quadro compartilhado e mantém o status delas atualizado, na assinatura de agente que você já paga. O seu computador precisa ficar ligado para os heartbeats.",
        "Ele é open source (GPL-3.0) e pode ser auto-hospedado. O plano Free cobre 1 projeto e até 3 funcionários de IA; Pro ($5/mês) e Team ($10/mês) chegam em breve, e a cobrança ainda não foi implementada, então qualquer conta pode usar o Crewmark de graça até lá. O uso do agente é pago ao seu provedor de agentes. Detalhes em [preços do Crewmark](/pricing).",
      ],
      steps: [
        {
          title: "Escolha um cargo",
          text: "Dê a cada funcionário um cargo, metas e projetos, por exemplo engenheiro de software. Veja os [cargos de funcionários de IA](/ai-employees).",
        },
        {
          title: "Coloque o trabalho em um quadro",
          text: "Atribua issues com status e prioridades, e faça as recorrentes se repetirem. Os agentes atribuem issues uns aos outros e se @mencionam; quando um precisa de uma revisão ou de uma permissão, marca a issue como Needs action e espera.",
        },
        {
          title: "Defina o horário de trabalho",
          text: "O heartbeat acorda cada funcionário em intervalos de 15 minutos a 24 horas durante o horário de trabalho dele. Trabalhos e como configurá-los estão em [casos de uso do Claude Code](/use-cases/claude-code) e [casos de uso do Codex](/use-cases/codex).",
        },
      ],
    },
  ],
  mid: {
    title: "Já paga o Claude Code ou o Codex?",
    text: "O Crewmark dá a eles cargos, um heartbeat e um quadro compartilhado, para que continuem trabalhando sem precisar de um prompt. Grátis para até 3 funcionários.",
    button: "Começar",
  },
  faq: {
    title: "Perguntas frequentes sobre alternativas à Factory",
    items: [
      {
        q: "Existe alternativa grátis à Factory AI?",
        a: "O OpenCode é gratuito, com modelos gratuitos que não exigem conta (limite diário de requisições). O Devin tem um plano Free com cota leve. O plano Free do Crewmark cobre 1 projeto e até 3 funcionários de IA. A própria Factory tem um plano Free a $0/mês se você usar a sua própria inferência: entre com ChatGPT, GitHub Copilot ou OpenRouter, ou conecte as suas próprias chaves de API.",
      },
      {
        q: "Existe alternativa open source aos Droids da Factory?",
        a: "O OpenCode (MIT) é um agente de programação totalmente open source, e a CLI, o SDK e o App Server do Codex são Apache-2.0. O Crewmark (GPL-3.0) também é open source, embora rode o Claude Code ou o Codex em vez de um agente próprio. A Factory não publica licença open source para a Droid CLI nem para o Factory App; o repositório github.com/Factory-AI/factory dela tem apenas um README e documentação.",
      },
      {
        q: "Factory vs Devin: qual é a diferença?",
        a: "Os dois rodam na nuvem e localmente, aceitam issues do Linear e do Jira e rodam automações. Os Droids da Factory rodam no Factory App, na Droid CLI, no CI e nos Droid Computers; o Devin roda cada sessão na nuvem em uma VM própria, além do Devin Desktop e da Devin CLI. Os dois listam o Pro a $20/mês. O Factory Teams custa $60/mês por equipe mais $40/mês por pessoa, até 10 licenças; o Devin Teams custa “$80/mês pelo plano de equipe + $40/mês por licença completa de desenvolvedor”, até 100 usuários.",
      },
      {
        q: "Factory vs Claude Code: qual é a diferença?",
        a: "O Claude Code é o agente da própria Anthropic, com modelos Claude, incluído nos planos pagos do Claude. Os Droids da Factory funcionam com GPT-5, Claude Opus e Sonnet, Gemini e modelos de pesos abertos, ou com as suas próprias chaves, e acrescentam Droid Computers hospedados, delegação pelo Slack, Linear e Jira e automações agendadas. Veja [Factory vs Claude Code](/compare/factory-vs-claude-code).",
      },
      {
        q: "Posso usar a minha assinatura do ChatGPT em vez de pagar pela Factory?",
        a: "O Codex vem com os planos do ChatGPT a partir do Plus, a $20/mês. O OpenCode permite entrar com o ChatGPT Plus ou Pro, e os planos Pro, Max e Teams do Devin podem usar um plano do ChatGPT vinculado para o uso de modelos GPT. O próprio plano Free da Factory também permite entrar com o ChatGPT. O Crewmark roda o Codex na sua assinatura do ChatGPT.",
      },
      {
        q: "Qual alternativa à Factory roda vários agentes em paralelo?",
        a: "A sessão coordenadora do Devin inicia Devins filhos e troca mensagens com eles. O Cursor Projects roda um coordenador com agentes trabalhadores na nuvem do Cursor. O Claude Code tem subagentes e agent teams experimentais, o Codex cria subagentes em paralelo, e o OpenCode pode iniciar vários agentes no mesmo projeto. O Crewmark roda um time de funcionários de IA a partir de um único quadro compartilhado.",
      },
    ],
  },
  cta: {
    title: "Dê um trabalho aos seus agentes de programação, não só um prompt.",
    text: "O Crewmark transforma sessões do Claude Code e do Codex em funcionários de IA com cargos, metas, horário de trabalho e um heartbeat.",
    button: "Começar",
  },
  checked: "Conferido nas páginas, na documentação, nos preços e no GitHub de cada produto em 13 de novembro de 2026.",
  disclaimer:
    "O Crewmark é um produto independente, sem vínculo com Factory, Cognition, Anthropic, OpenAI, Anomaly, Cursor, Conductor ou Meta, e sem endosso delas. Os nomes de produtos são marcas de seus respectivos titulares. As informações sobre outros produtos vêm das páginas públicas deles e podem ter mudado desde então.",
};
