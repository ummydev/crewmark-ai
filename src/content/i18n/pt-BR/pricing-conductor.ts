import type { GuideCopy } from "@/components/landing/guide-article";

// Brazilian Portuguese translation of /pricing/conductor; the English master is
// src/content/product-pricing/conductor.ts.

export const copy: GuideCopy = {
  meta: {
    title: "Conductor: preços, app de Mac grátis, nuvem e a ida para a Meta",
    description:
      "O Conductor é grátis e o uso de modelos é pago ao provedor de cada agente. Cadastros fechados desde 4 de novembro de 2026, e o Conductor Cloud vai sair do ar.",
  },
  breadcrumb: "Preços do Conductor",
  parent: { name: "Comparações", href: "/compare" },
  hero: {
    kicker: "Preços · Conductor",
    title: "Preços do Conductor: um app de Mac grátis, planos na nuvem e o que mudou em 4 de novembro de 2026",
    lead: "\"O Conductor é grátis para usar\" (\"Conductor is free to use.\"). Ele não cobra nem revende uso de modelos: Claude Code, Codex, OpenCode e Cursor rodam nas suas próprias assinaturas ou chaves de API. Os workspaces na nuvem exigiam um plano Pro, Team ou Enterprise, mas nenhum preço é publicado hoje. Em 4 de novembro de 2026, o Conductor anunciou que vai se juntar à Meta e fechou novos cadastros e downloads. Veja o que você paga, o que mudou e como o preço se compara ao do Vibe Kanban, do Claude Squad, do Cursor Projects e do Crewmark.",
    cta: "Começar",
    secondary: "O que mudou",
    secondaryHref: "#change",
  },
  sections: [
    {
      kind: "table",
      id: "plans",
      title: "Planos e preços do Conductor",
      text: [
        "Segundo o conductor.build e a documentação dele, conferidos em 13 de novembro de 2026. A página /pricing agora redireciona para a página inicial, e nenhum preço de plano aparece em nenhum lugar do site.",
      ],
      headers: ["Plano", "Preço", "O que está incluído"],
      rows: [
        [
          "Conductor (app de Mac)",
          "Grátis para usar",
          "Claude Code, Codex e OpenCode (incluídos no app) e Cursor Agent lado a lado, cada um na própria git worktree; revisão de diffs, checks, pull requests e merge",
        ],
        [
          "Pro",
          "Sem preço publicado; desde 4 de novembro de 2026, quem tem Pro mantém os recursos do Pro sem custo",
          "Workspaces na nuvem e Routines (execuções de agentes agendadas ou acionadas pelo GitHub)",
        ],
        ["Team (só por convite)", "Sem preço publicado", "Workspaces na nuvem e Routines"],
        ["Enterprise", "Sem preço publicado", "Workspaces na nuvem"],
        [
          "Uso de modelos",
          "Cobrado pelo provedor de cada agente",
          "As suas assinaturas atuais (por exemplo, Claude Pro ou Max, ou ChatGPT) ou chaves de API",
        ],
      ],
    },
    {
      kind: "text",
      id: "costs",
      title: "O que você paga de fato para usar o Conductor",
      points: [
        "Os provedores dos seus agentes. O Conductor não cobra nem revende uso de modelos. Cada agente é cobrado pela conta do provedor ou pela chave de API dele; o Cursor Agent roda pela API do Cursor.",
        "Um Mac. O Conductor é só para macOS e \"ainda não está disponível para Windows nem Linux\" (\"not available for Windows or Linux yet.\"). Os agentes rodam diretamente na sua máquina, com as permissões da sua conta de usuário e sem sandbox.",
        "Nada pelo app em si. O app local é grátis para usar.",
        "Os workspaces na nuvem exigiam um plano Pro, Team ou Enterprise. Desde 4 de novembro de 2026, usuários grátis não podem fazer upgrade, quem tem Pro mantém os recursos do Pro sem custo e os assinantes ativos recebem reembolso.",
      ],
    },
    {
      kind: "text",
      id: "change",
      title: "O que mudou em 4 de novembro de 2026",
      text: [
        "O Conductor anunciou que vai se juntar à Meta. O rodapé do site agora diz \"Conductor from Meta, © 2026 Meta.\" As datas que importam se você usa o app ou estava prestes a usar:",
      ],
      points: [
        "4 de novembro de 2026: novos cadastros e downloads fechados. Usuários grátis não podem fazer upgrade, quem tem Pro mantém os recursos do Pro sem custo e os assinantes ativos recebem reembolso.",
        "13 de novembro de 2026: o Conductor Cloud passa a ser somente leitura.",
        "20 de novembro de 2026: o Conductor Cloud é desligado, e começa a exclusão dos dados de usuários na nuvem.",
        "Até o início de 2027: o app local recebe novos modelos e correções de bugs críticos, e depois é desativado aos poucos. Todos os dados de usuários são excluídos quando o app for desligado.",
        "Se você procura algo para onde migrar, veja [alternativas ao Conductor](/blog/conductor-alternatives).",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Preços do Conductor vs ferramentas parecidas",
      text: [
        "Preços do site de cada produto, conferidos em 13 de novembro de 2026. Com qualquer uma delas, você também paga pelos agentes de programação ou modelos que roda, a menos que um plano abaixo os inclua.",
        "Lado a lado: [Vibe Kanban vs Conductor](/compare/vibe-kanban-vs-conductor), [Claude Squad vs Conductor](/compare/claude-squad-vs-conductor). Mais opções em [alternativas ao Conductor](/blog/conductor-alternatives).",
      ],
      headers: ["Produto", "Preço a partir de", "Opção grátis"],
      rows: [
        [
          "Conductor",
          "Grátis para usar; preços dos planos na nuvem não publicados",
          "Sim, mas novos cadastros e downloads estão fechados desde 4 de novembro de 2026",
        ],
        [
          "[Vibe Kanban](/compare/vibe-kanban-vs-conductor)",
          "App local grátis; o post de encerramento da bloop, de 10 de abril de 2026, diz que as assinaturas foram encerradas",
          "Sim: open source (Apache-2.0), mantido pela comunidade",
        ],
        [
          "[Claude Squad](/compare/claude-squad-vs-conductor)",
          "Grátis; nenhum plano pago publicado",
          "Sim: open source (AGPL-3.0)",
        ],
        [
          "[Cursor Projects](/personal-agent/cursor-projects)",
          "Cursor Premium $30/mês, ou $300/ano",
          "Não: não está no Free, no Plus ($8/mês) nem no Hobby antigo",
        ],
        [
          "[Crewmark](/pricing)",
          "Grátis; Pro $5/mês e Team $10/mês em breve",
          "Sim: 1 projeto, até 3 funcionários de IA, 1 pessoa",
        ],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Com o Crewmark",
      title: "O Conductor roda agentes lado a lado. O Crewmark dá a eles um trabalho e um quadro.",
      text: [
        "O Crewmark é um gerenciador de issues para um time de funcionários de IA. Cada funcionário é uma conversa do Claude Code ou do Codex no seu próprio computador, com um cargo, metas e horário de trabalho. Ele acorda com um heartbeat e pega issues de um quadro compartilhado. A CLI `crewmark` roda no macOS, Linux e Windows, e os agentes usam a assinatura do Claude ou do ChatGPT que você já paga.",
        "Os preços do Crewmark: Free a $0 (1 projeto, até 3 funcionários de IA, 1 pessoa). Pro a $5/mês e Team a $10/mês chegam em breve. A cobrança ainda não foi implementada, então qualquer conta pode usar o Crewmark de graça até lá. Ele é open source (GPL-3.0) e pode ser auto-hospedado.",
      ],
      steps: [
        {
          title: "Escolha um cargo",
          text: "Entre os [cargos de funcionários de IA](/ai-employees), como engenheiro de software, com metas em números.",
        },
        {
          title: "Coloque o trabalho em um quadro",
          text: "Atribua issues e faça as recorrentes se repetirem; o heartbeat acorda o funcionário para pegar a próxima.",
        },
        {
          title: "Veja os planos",
          text: "[Preços do Crewmark](/pricing), e o que os agentes fazem com ele em [casos de uso do Claude Code](/use-cases/claude-code) e [casos de uso do Codex](/use-cases/codex).",
        },
      ],
    },
  ],
  mid: {
    title: "Vai sair do Conductor?",
    text: "O Crewmark dá ao seu Claude Code ou Codex um cargo, um heartbeat e um quadro compartilhado, no macOS, Linux ou Windows.",
    button: "Começar",
  },
  faq: {
    title: "Perguntas frequentes sobre os preços do Conductor",
    items: [
      {
        q: "O Conductor é grátis?",
        a: "Sim. \"O Conductor é grátis para usar\" (\"Conductor is free to use\"), e o uso de modelos é cobrado pelo provedor de cada agente. Mas, desde 4 de novembro de 2026, novos cadastros e downloads estão fechados.",
      },
      {
        q: "Quanto custa o Conductor?",
        a: "O app de Mac é grátis. Os workspaces na nuvem exigiam um plano Pro, Team (só por convite) ou Enterprise, mas nenhum preço desses planos é publicado hoje, e a página /pricing redireciona para a página inicial.",
      },
      {
        q: "O Conductor cobra taxas sobre o uso de modelos?",
        a: "Não. O Conductor não cobra nem revende uso de modelos. Claude Code, Codex, OpenCode e Cursor Agent usam as suas próprias assinaturas, como Claude Pro ou Max ou ChatGPT, ou as suas chaves de API.",
      },
      {
        q: "O Conductor é open source, ou existe uma licença para comprar?",
        a: "Nem um nem outro. O Conductor não é open source (nenhum repositório de código-fonte nem licença é publicado), e o app é grátis para usar, então não há preço de licença.",
      },
      {
        q: "O que acontece com a minha assinatura do Conductor Pro?",
        a: "Desde 4 de novembro de 2026, quem tem Pro mantém os recursos do Pro sem custo e os assinantes ativos recebem reembolso. O Conductor Cloud passa a ser somente leitura em 13 de novembro e é desligado em 20 de novembro de 2026.",
      },
      {
        q: "Por quanto tempo o app do Conductor vai continuar funcionando?",
        a: "O app local recebe novos modelos e correções de bugs críticos até o início de 2027, depois é desativado aos poucos, e todos os dados de usuários são excluídos quando ele for desligado. Veja [alternativas ao Conductor](/blog/conductor-alternatives).",
      },
    ],
  },
  cta: {
    title: "Mantenha os seus agentes trabalhando depois do Conductor.",
    text: "O Crewmark transforma sessões do Claude Code e do Codex em funcionários de IA com cargos, metas, horário de trabalho e um heartbeat.",
    button: "Começar",
  },
  checked:
    "Conferido no conductor.build, na documentação, no changelog e no anúncio dele, e na página de preços de cada produto comparado, em 13 de novembro de 2026.",
  disclaimer:
    "O Crewmark é um produto independente, sem vínculo com o Conductor, com a Meta nem com nenhuma outra empresa citada nesta página, e sem endosso deles. Os nomes de produtos são marcas de seus respectivos titulares.",
};
