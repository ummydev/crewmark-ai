import type { GuideCopy } from "@/components/landing/guide-article";

// pt-BR translation of /use-cases/weekly-competitor-digest; the English master is
// src/content/use-cases/weekly-competitor-digest.ts.

const brief = `# Cargo: observador de concorrentes
Roda a partir da issue recorrente "Weekly competitor digest", às segundas às 9:00.

Lista de acompanhamento: competitors.md (uma linha por página: nome, URL, o que é).

1. Busque cada página do competitors.md, uma de cada vez.
   Só páginas públicas; nunca entre no produto de um concorrente.
2. Salve o texto legível em competitors/<name>/<page>.md.
3. Compare com a cópia da semana passada (git diff). Ignore datas,
   contadores e banners de cookies.
4. Escreva o resumo: o que mudou, com um link e o texto antigo e o novo
   para preços, planos e limites.
5. Diga o que devemos fazer: páginas de comparação para atualizar, uma resposta
   a um lançamento, ou nada.
6. Faça commit dos snapshots, publique o resumo na issue e marque-a como concluída.`;

const watchlist = `# competitors.md
Acme | https://acme.com/pricing   | preços
Acme | https://acme.com/changelog | changelog
Acme | https://docs.acme.com/limits | limites dos planos
Beta | https://beta.dev/pricing   | preços
Beta | https://github.com/beta-dev/beta/releases | releases`;

export const copy: GuideCopy = {
  meta: {
    title: "Acompanhamento semanal de concorrentes com o Claude Code: preços e lançamentos",
    description:
      "Faça o Claude Code ou o Codex conferir toda semana as páginas de preços, changelogs e documentação dos seus concorrentes, comparar com a semana passada e dizer o que mudou e o que fazer. O brief do cargo e a lista de acompanhamento para copiar, e como agendar.",
  },
  breadcrumb: "Resumo semanal de concorrentes",
  parent: { name: "Casos de uso", href: "/use-cases" },
  hero: {
    kicker: "Casos de uso · Marketing",
    title: "Um resumo semanal de concorrentes feito por um funcionário de IA no Claude Code",
    lead: "Preços mudam, planos são renomeados e funcionalidades saem sem alarde, e a maioria das equipes fica sabendo por um cliente. Um funcionário de IA no seu próprio Claude Code ou Codex pode ler as páginas públicas dos seus concorrentes toda semana, guardar uma cópia de cada uma no seu repositório, comparar com a da semana passada e dizer exatamente o que mudou, com links e o texto antigo e o novo, além do que você deve fazer a respeito. Aqui estão o brief, o formato da lista de acompanhamento e como agendar.",
    cta: "Começar",
    secondary: "Copiar o brief",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "Por que snapshots são melhores que um feed de notícias",
      text: [
        "Uma mudança de preço raramente ganha um post no blog. Salvar o texto de cada página e comparar as versões pega as mudanças silenciosas: um limite reduzido, um plano renomeado, um plano grátis removido.",
      ],
      points: [
        "É exato: o resumo cita o texto antigo e o novo, então ninguém discute o que mudou.",
        "É barato: texto puro no seu repositório, versionado pelo git, sem precisar de serviço de scraping.",
        "É rastreável: o histórico da página de preços de cada concorrente está no seu git log.",
        "Mantém as suas páginas honestas: páginas de comparação ficam desatualizadas rápido. Por exemplo, muitas listas sobre o Devin ainda citavam um plano de $500 e preços por ACU depois que o devin.ai passou os planos self-serve para cotas e créditos, como aponta a nossa página de [alternativas ao Devin](/blog/devin-alternatives).",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Como configurar um resumo semanal de concorrentes",
      steps: [
        {
          title: "Escreva a lista de acompanhamento",
          text: "Uma linha por página pública: preços, changelog ou releases, limites dos planos na documentação e as páginas de comparação que eles publicam sobre você.",
          code: watchlist,
        },
        {
          title: "Copie o brief do cargo",
          text: "No CLAUDE.md para o Claude Code ou no AGENTS.md para o Codex. Buscar páginas na web é tudo de que ele precisa; para páginas que só renderizam em um navegador, dê a ele uma ferramenta de navegador.",
          code: brief,
        },
        {
          title: "Agende toda semana",
          text: "Transforme em uma issue recorrente, por exemplo `--repeat \"weekly on mon at 9:00\"`, atribuída ao seu funcionário de marketing ou de SEO.",
        },
        {
          title: "Aja a partir dele",
          text: "Quando o resumo recomenda atualizar uma página de comparação, o mesmo funcionário pode pegar isso como a próxima issue e abrir um pull request.",
        },
      ],
    },
    {
      kind: "table",
      id: "what-to-watch",
      title: "O que acompanhar, e por quê",
      headers: ["Página", "O que uma mudança costuma significar"],
      rows: [
        ["Preços", "Um plano novo, uma mudança de preço ou o fim de um plano grátis: atualize as suas tabelas de comparação na mesma semana"],
        ["Changelog ou releases", "Uma funcionalidade que fecha uma lacuna que você usa como argumento de venda, ou um novo mercado em que eles estão entrando"],
        ["Documentação sobre limites", "Cotas apertadas ou afrouxadas; muitas vezes o primeiro sinal de uma mudança de preço"],
        ["As páginas de comparação deles", "Como eles se posicionam contra você; responda com fatos nas suas próprias páginas"],
        ["Página de vagas", "Contratações de vendas em uma região, ou para uma nova linha de produto"],
      ],
    },
    {
      kind: "text",
      id: "rules",
      title: "Regras básicas",
      points: [
        "Só páginas públicas. Não entre no produto de um concorrente nem use uma conta de teste para coletar dados.",
        "Busque uma página de cada vez, em ritmo normal, uma vez por semana; você está lendo, não fazendo crawling.",
        "Cite, não chute: se uma página for ambígua, o resumo diz isso e coloca o link.",
        "Mantenha uma pessoa em tudo o que for público: mudanças nas suas páginas de comparação passam por revisão.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Com o Crewmark",
      title: "Deixe o seu funcionário de marketing de olho",
      text: [
        "O resumo é uma issue semanal para um funcionário de IA que já cuida das suas páginas de comparação. O Crewmark dá esse trabalho ao seu Claude Code ou Codex, com horário de trabalho e um heartbeat.",
      ],
      steps: [
        {
          title: "Comece por um cargo",
          text: "O [agente de marketing com IA](/ai-employees/marketing-agent) ou o [especialista em SEO com IA](/ai-employees/seo-specialist).",
        },
        {
          title: "Adicione a issue semanal",
          text: "Ela volta toda segunda; o funcionário publica o resumo e abre issues de acompanhamento para as páginas a atualizar.",
        },
        {
          title: "Veja mais trabalhos de marketing",
          text: "Em [Claude Code para marketing](/for/marketing) e no [relatório diário de SEO](/use-cases/daily-seo-report).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Configurar um resumo semanal de concorrentes no Claude Code ou no Codex" },
  mid: {
    title: "Quer as mudanças dos concorrentes na sua caixa de entrada toda segunda?",
    text: "Um funcionário do Crewmark no seu Claude Code ou Codex confere, compara e relata, e depois atualiza as suas páginas.",
    button: "Começar",
  },
  faq: {
    title: "Perguntas frequentes",
    items: [
      {
        q: "O Claude Code consegue acompanhar os preços dos concorrentes?",
        a: "Sim. Ele pode buscar páginas de preços públicas, salvar o texto no seu repositório e comparar com a cópia da semana passada, depois resumir as mudanças. Rode toda semana com uma tarefa recorrente ou como um funcionário de IA.",
      },
      {
        q: "É legal monitorar os sites dos concorrentes?",
        a: "Ler páginas públicas é pesquisa competitiva normal. Respeite os termos e as regras de robots de cada site, busque em ritmo normal e não entre no produto deles para coletar dados.",
      },
      {
        q: "Por que não usar uma ferramenta de monitoramento de mudanças em sites?",
        a: "Você pode. A diferença é o que acontece depois: o funcionário explica o que a mudança significa para você e pode atualizar as suas próprias páginas de comparação na mesma semana.",
      },
      {
        q: "Quantos concorrentes ele consegue acompanhar?",
        a: "Quantos o uso do seu plano permitir; uma execução semanal em algumas dezenas de páginas é pequena. Comece com três a cinco concorrentes e as páginas de preços, changelog e limites deles.",
      },
    ],
  },
  cta: {
    title: "Saiba o que os seus concorrentes mudaram antes que os seus clientes contem.",
    text: "O Crewmark transforma sessões do Claude Code e do Codex em funcionários de IA com cargos, metas, horário de trabalho e heartbeat.",
    button: "Começar",
  },
  checked: "Escrito em 10 de novembro de 2026 pelo funcionário de SEO do Crewmark, que escreve e atualiza as nossas páginas de comparação.",
  disclaimer:
    "O Crewmark é um produto independente, sem vínculo com a Anthropic ou a OpenAI e sem endosso delas. Os nomes dos produtos são marcas dos respectivos titulares.",
};
