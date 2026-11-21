import type { GuideCopy } from "@/components/landing/guide-article";

// Brazilian Portuguese translation of /pricing/devin; the English master is
// src/content/product-pricing/devin.ts.

export const copy: GuideCopy = {
  meta: {
    title: "Devin: preços e planos 2026 (Free, Pro $20, Max $200, Teams)",
    description:
      "Preços do Devin: Free a $0, Pro $20 por mês, Max $200, Teams e Enterprise. Como funcionam cotas, créditos sob demanda e licenças, e o Devin comparado em preço.",
  },
  breadcrumb: "Preços do Devin",
  parent: { name: "Comparações", href: "/compare" },
  hero: {
    kicker: "Preços · Cognition",
    title: "Preços do Devin: cada plano e o que você paga além dele",
    lead: "O Devin, o engenheiro de software de IA da Cognition, tem um plano Free a $0 com uma cota leve. O Pro custa $20 por mês e o Max $200 por mês, ambos para um usuário. O Teams aparece como \"$80/mês pelo plano de equipe + $40/mês por licença de desenvolvedor completa\" (\"$80/month for team plan + $40/mo per full dev seat\"), e o Enterprise é negociado com o time de vendas. Cada plano self-service vem com uma cota diária e/ou semanal; acima dela, você paga com créditos sob demanda pré-pagos. Veja os planos, os custos extras e como o preço do Devin se compara ao da Factory, do Claude Code, do Codex, do Cursor Projects e do Crewmark.",
    cta: "Começar",
    secondary: "O que você paga de fato",
    secondaryHref: "#costs",
  },
  sections: [
    {
      kind: "table",
      id: "plans",
      title: "Planos e preços do Devin",
      text: [
        "Segundo a página de preços do [devin.ai](https://devin.ai) e a documentação de cobrança do Devin, conferidas em 13 de novembro de 2026. Preços em dólares americanos.",
      ],
      headers: ["Plano", "Preço", "O que está incluído"],
      rows: [
        ["Free", "$0", "Uma cota leve e disponibilidade limitada de modelos"],
        [
          "Pro",
          "$20 por mês",
          "Devin Cloud, disponibilidade completa de modelos, uso extra a preço de API; um usuário",
        ],
        ["Max", "$200 por mês", "Cotas maiores; um usuário"],
        [
          "Teams",
          "\"$80/mês pelo plano de equipe + $40/mês por licença de desenvolvedor completa\" (\"$80/month for team plan + $40/mo per full dev seat\")",
          "Até 100 usuários; um \"Free mode\" (SWE-2) com até 2 sessões simultâneas na nuvem por membro",
        ],
        ["Enterprise", "\"Vamos conversar\" (\"Let's talk\")", "VPC e implantação dedicada"],
      ],
    },
    {
      kind: "text",
      id: "costs",
      title: "O que você paga de fato pelo Devin",
      points: [
        "Primeiro, uma cota. Os planos self-service do Devin usam uma cota diária e/ou semanal.",
        "Depois, créditos pré-pagos. O uso além da cota consome créditos sob demanda pré-pagos. No Pro, o uso extra é cobrado a preço de API.",
        "O seu plano do ChatGPT para modelos GPT. Pro, Max e Teams podem usar um plano do ChatGPT vinculado para o uso de modelos GPT.",
        "Modelos conforme o plano. O Free tem disponibilidade limitada de modelos; o Pro tem disponibilidade completa. O Devin usa o SWE-2 da Cognition mais \"modelos de fronteira da OpenAI, Claude, Gemini e SpaceXAI, além dos principais modelos open source\" (\"frontier models from OpenAI, Claude, Gemini, and SpaceXAI, plus leading open source models\"), e um roteador Adaptive escolhe um modelo para cada tarefa.",
        "Licenças. Pro e Max são planos de um usuário só. O Teams permite até 100 membros, e equipes maiores são direcionadas ao Enterprise.",
        "Créditos no Teams. No Teams, as Automations param quando os créditos sob demanda compartilhados acabam.",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Preços do Devin vs outros agentes de programação",
      text: [
        "Preços de entrada da página de preços de cada produto, conferidos em 13 de novembro de 2026, em dólares americanos. Nos planos que não incluem uso de modelos, esse custo fica com o seu provedor de modelos.",
        "Lado a lado: [Devin vs Claude Code](/compare/devin-vs-claude-code), [Devin vs Codex](/compare/devin-vs-codex). Mais opções em [alternativas ao Devin](/blog/devin-alternatives).",
      ],
      headers: ["Produto", "Preço a partir de", "Opção grátis"],
      rows: [
        ["Devin", "Free $0; Pro $20/mês", "Sim: plano Free com uma cota leve"],
        [
          "[Factory](/pricing/factory)",
          "Free $0 com a sua própria inferência; Pro $20/mês",
          "Sim: Free se você trouxer a sua própria inferência",
        ],
        [
          "[Claude Code](/compare/devin-vs-claude-code)",
          "No Claude Pro, $20/mês ou $17/mês no plano anual",
          "Não: não está no Claude Free; créditos de API no pagamento conforme o uso também funcionam",
        ],
        [
          "[Codex](/compare/devin-vs-codex)",
          "No ChatGPT Plus, $20/mês; ou uma chave de API da OpenAI, a preço de API",
          "O ChatGPT Free ($0) lista o GPT-6 Luna no app para desktop, \"sujeito a liberação gradual\" (\"subject to rollout\")",
        ],
        [
          "[Cursor Projects](/personal-agent/cursor-projects)",
          "Cursor Premium $30/mês, ou $300/ano",
          "Não: não está no Free, no Plus nem no Hobby antigo",
        ],
        [
          "[Crewmark](/pricing)",
          "Free $0; Pro $5/mês em breve",
          "Sim: 1 projeto, até 3 funcionários de IA; o uso do agente é pago ao seu provedor",
        ],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Com o Crewmark",
      title: "Já paga pelo Claude Code ou pelo Codex? Dê a ele um trabalho e um quadro.",
      text: [
        "O Devin é um agente próprio, cobrado por cota de plano e créditos. O Crewmark é um gerenciador de issues para um time de funcionários de IA. Cada funcionário é uma conversa do Claude Code ou do Codex no seu próprio computador, com um cargo, KPIs e horário de trabalho. Ele acorda com um heartbeat e pega issues de um quadro compartilhado. O uso do agente continua na assinatura do Claude ou do ChatGPT que você já paga.",
        "Os preços do Crewmark: Free a $0 (1 projeto, até 3 funcionários de IA, 1 pessoa). Pro a $5/mês e Team a $10/mês chegam em breve. A cobrança ainda não foi implementada, então qualquer conta pode usar o Crewmark de graça até lá. Ele é open source (GPL-3.0) e pode ser auto-hospedado.",
      ],
      steps: [
        {
          title: "Escolha um cargo",
          text: "Entre os [cargos de funcionários de IA](/ai-employees), como engenheiro de software, especialista em SEO ou analista de dados.",
        },
        {
          title: "Coloque o trabalho em um quadro",
          text: "Atribua issues e faça as recorrentes se repetirem; o heartbeat acorda o funcionário para pegar a próxima.",
        },
        {
          title: "Veja os planos",
          text: "[Preços do Crewmark](/pricing), e trabalhos com a configuração em [casos de uso do Claude Code](/use-cases/claude-code) e [casos de uso do Codex](/use-cases/codex).",
        },
      ],
    },
  ],
  mid: {
    title: "Já paga pelo Claude ou pelo ChatGPT?",
    text: "O Crewmark transforma o seu Claude Code ou Codex em funcionários de IA com cargos, um heartbeat e um quadro compartilhado.",
    button: "Começar",
  },
  faq: {
    title: "Perguntas frequentes sobre os preços do Devin",
    items: [
      {
        q: "O Devin é grátis?",
        a: "Existe um plano Free a $0 com uma cota leve e disponibilidade limitada de modelos. O Pro, a $20 por mês, acrescenta o Devin Cloud e a disponibilidade completa de modelos.",
      },
      {
        q: "Quanto custa o Devin por mês?",
        a: "O Pro custa $20 por mês e o Max $200 por mês, ambos para um usuário. O Teams aparece como \"$80/mês pelo plano de equipe + $40/mês por licença de desenvolvedor completa\" (\"$80/month for team plan + $40/mo per full dev seat\"), para até 100 usuários. O Enterprise é \"Vamos conversar\" (\"Let's talk\"). Preços em dólares americanos.",
      },
      {
        q: "Qual é o modelo de preços do Devin?",
        a: "Um plano com cota diária e/ou semanal, mais créditos sob demanda pré-pagos para o uso além dela. No Pro, o uso extra é cobrado a preço de API. O Teams soma uma taxa de equipe e uma taxa por licença de desenvolvedor completa.",
      },
      {
        q: "Como funcionam os planos Teams e Enterprise do Devin?",
        a: "O Teams permite até 100 membros, e as Automations dele param quando os créditos sob demanda compartilhados acabam. Equipes maiores são direcionadas ao Enterprise, que tem preço negociado com o time de vendas e oferece VPC e implantação dedicada.",
      },
      {
        q: "Posso usar o meu plano do ChatGPT com o Devin?",
        a: "Sim, no Pro, no Max e no Teams. Um plano do ChatGPT vinculado cobre o uso de modelos GPT.",
      },
      {
        q: "O Devin é open source?",
        a: "Não. Não há código-fonte nem licença open source publicados para o Devin; github.com/CognitionAI/devin-cli contém pacotes de instalação, documentação e scripts. Opções open source estão em [alternativas ao Devin](/blog/devin-alternatives).",
      },
    ],
  },
  cta: {
    title: "Compare o preço. Depois, dê um trabalho ao seu agente.",
    text: "O Crewmark transforma sessões do Claude Code e do Codex em funcionários de IA com cargos, KPIs, horário de trabalho e um heartbeat.",
    button: "Começar",
  },
  checked:
    "Conferido em devin.ai/pricing e na documentação de cobrança do Devin em 13 de novembro de 2026. Os preços dos outros produtos vêm da página de preços de cada um, na mesma data.",
  disclaimer:
    "O Crewmark é um produto independente, sem vínculo com a Cognition nem com nenhuma outra empresa citada nesta página, e sem endosso delas. Os nomes de produtos são marcas de seus respectivos titulares.",
};
