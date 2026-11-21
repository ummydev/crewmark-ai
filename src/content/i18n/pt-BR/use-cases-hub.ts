import type { GuideCopy } from "@/components/landing/guide-article";

// pt-BR translation of /use-cases; the English master is src/content/use-cases-hub.ts.

export const copy: GuideCopy = {
  meta: {
    title: "Casos de uso de funcionários de IA para Claude Code e Codex",
    description:
      "Trabalhos que você pode entregar a um funcionário de IA no Claude Code ou no Codex, por equipe, cada um com um brief de cargo para copiar e o agendamento em que rodá-lo: relatórios diários de SEO, resumos semanais de concorrentes e mais.",
  },
  breadcrumb: "Casos de uso",
  hero: {
    kicker: "Casos de uso",
    title: "Casos de uso de funcionários de IA: trabalhos para entregar ao Claude Code e ao Codex",
    lead: "Cada caso de uso é um trabalho que um funcionário de IA faz com agendamento: o que ele faz, o brief de cargo para copiar no CLAUDE.md ou no AGENTS.md, o acesso de que precisa e como rodá-lo. Eles estão agrupados pela equipe que normalmente é dona do trabalho. Todos também funcionam como um prompt avulso no Claude Code ou no Codex.",
    cta: "Começar",
    secondary: "Ver casos de uso",
    secondaryHref: "#use-cases",
  },
  sections: [
    {
      kind: "table",
      id: "teams",
      title: "Por equipe",
      headers: ["Equipe", "O que ela delega"],
      rows: [
        ["[Marketing](/for/marketing)", "Páginas e relatórios de SEO, acompanhamento de concorrentes, rascunhos para redes sociais, revisões de funil"],
        ["[Engenharia](/for/engineering)", "Triagem de erros, revisão de pull requests, de issues a pull requests, notas de versão"],
      ],
    },
    {
      kind: "table",
      id: "use-cases",
      title: "Casos de uso",
      headers: ["Caso de uso", "Equipe", "Frequência"],
      rows: [
        ["[Relatório diário de SEO](/use-cases/daily-seo-report)", "Marketing", "Diário"],
        ["[Resumo semanal de concorrentes](/use-cases/weekly-competitor-digest)", "Marketing", "Semanal"],
        ["[Triagem de erros do Sentry](/use-cases/sentry-error-triage)", "Engenharia", "Duas vezes por dia"],
        ["[Revisão de código com IA em todo PR](/use-cases/pr-review)", "Engenharia", "A cada PR"],
      ],
    },
    {
      kind: "text",
      id: "good-first-jobs",
      title: "O que torna um bom primeiro trabalho",
      points: [
        "Ele se repete: trabalho diário ou semanal paga a configuração mais rápido.",
        "Ele tem um ponto final: um relatório publicado, uma página no ar, um resumo enviado.",
        "Ele é verificável: em um minuto você vê se foi bem feito.",
        "A palavra final fica com você: publicar, gastar e qualquer coisa pública passam por uma pessoa.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Com o Crewmark",
      title: "Rode qualquer um destes como um funcionário de IA",
      text: [
        "O Crewmark transforma o seu próprio Claude Code ou Codex em um funcionário de IA com um cargo, uma meta em números, horário de trabalho e um heartbeat. Trabalhos recorrentes viram issues recorrentes no quadro dele.",
      ],
      steps: [
        {
          title: "Escolha um cargo",
          text: "Entre os [cargos de funcionários de IA](/ai-employees).",
        },
        {
          title: "Adicione os trabalhos como issues",
          text: "Trabalhos diários e semanais se repetem sozinhos; o funcionário pega cada um quando chega a hora.",
        },
        {
          title: "Responda quando ele perguntar",
          text: "Quando precisa de uma decisão, ele marca a issue como Needs action e pergunta; todo o resto fica no quadro.",
        },
      ],
    },
  ],
  mid: {
    title: "Quer esses trabalhos feitos com agendamento?",
    text: "Os funcionários do Crewmark rodam no seu Claude Code ou Codex e pegam o próximo trabalho de um quadro.",
    button: "Começar",
  },
  faq: {
    title: "Perguntas frequentes",
    items: [
      {
        q: "O que um funcionário de IA consegue fazer?",
        a: "Trabalho recorrente que dá para fazer por meio de arquivos, da web e das suas ferramentas: relatórios a partir de analytics, páginas para o seu site, acompanhamento de concorrentes, rascunhos para revisão, triagem. Ele trabalha rumo a uma meta e presta contas com agendamento.",
      },
      {
        q: "Quais são bons casos de uso do Claude Code fora da programação?",
        a: "Marketing é o começo mais fácil: páginas e relatórios de SEO, resumos de concorrentes e rascunhos de conteúdo. Veja [Claude Code para marketing](/for/marketing); para trabalhos de engenharia além de escrever código, veja [Claude Code para engenharia](/for/engineering).",
      },
      {
        q: "Isso funciona com o Codex?",
        a: "Sim. Todo brief de cargo funciona no AGENTS.md para o Codex, assim como no CLAUDE.md para o Claude Code.",
      },
    ],
  },
  cta: {
    title: "Escolha um trabalho. Entregue a um funcionário de IA.",
    text: "O Crewmark transforma sessões do Claude Code e do Codex em funcionários de IA com cargos, metas, horário de trabalho e heartbeat.",
    button: "Começar",
  },
  checked: "Atualizado em 10 de novembro de 2026.",
  disclaimer:
    "O Crewmark é um produto independente, sem vínculo com a Anthropic ou a OpenAI e sem endosso delas. Claude, Claude Code e Codex são marcas dos respectivos titulares.",
};
