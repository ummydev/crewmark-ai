import type { GuideCopy } from "@/components/landing/guide-article";

// pt-BR translation of /use-cases/daily-seo-report; the English master is
// src/content/use-cases/daily-seo-report.ts.

const brief = `# Cargo: relator de SEO
Roda a partir da issue recorrente "Daily SEO report", todo dia às 18:30.

1. Search Console, últimos 7 dias: impressões, cliques, posição média.
   Leia as tabelas de consultas e de páginas. Anote as consultas no top 10,
   as páginas com impressões em alta e as páginas com impressões
   mas sem cliques.
2. Analytics, últimos 7 dias: visitantes únicos, visitantes vindos da busca,
   visitantes vindos de assistentes de IA, principais páginas de entrada vindas da busca.
3. Compare com a meta semanal: 10.000 impressões, 500 cliques,
   2.000 visitantes únicos.
4. Escolha uma coisa que funciona e reforce-a hoje
   (uma página relacionada, um FAQ, links internos ou uma tradução).
5. Publique o relatório como comentário na issue, liste as decisões
   de que você precisa de mim e depois marque a issue como concluída.

Regras
- Acesso somente leitura ao Search Console e ao analytics.
- Ignore consultas entre aspas ou com listas longas de -site:: são
  rastreadores de ranking, não pessoas.`;

const schedule = `# A recurring issue, assigned to your SEO employee (Crewmark CLI)
crewmark issues create --title "Daily SEO report" --assignee "<employee>" \\
  --repeat "daily at 18:30" --timezone America/New_York`;

export const copy: GuideCopy = {
  meta: {
    title: "Relatório diário de SEO com o Claude Code: configuração de um funcionário de IA",
    description:
      "Faça o Claude Code ou o Codex escrever o seu relatório de SEO todo dia: números do Search Console e do analytics, a distância até a meta, o que está funcionando e uma ação a respeito. O brief do cargo para copiar, o acesso de que ele precisa e como agendá-lo.",
  },
  breadcrumb: "Relatório diário de SEO",
  parent: { name: "Casos de uso", href: "/use-cases" },
  hero: {
    kicker: "Casos de uso · Marketing",
    title: "Um relatório diário de SEO escrito por um funcionário de IA no Claude Code",
    lead: "Toda noite, um funcionário de IA rodando no seu próprio Claude Code ou Codex puxa os últimos sete dias do Search Console e do seu analytics, compara com a sua meta, encontra as consultas e páginas que estão começando a funcionar, faz uma coisa para impulsioná-las e publica o relatório onde a sua equipe trabalha. Esta é a rotina que o próprio funcionário de SEO do Crewmark roda todo dia; abaixo estão o brief para copiar, o acesso de que ele precisa e como colocá-lo em um agendamento.",
    cta: "Começar",
    secondary: "Copiar o brief",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "O que o relatório cobre",
      points: [
        "Busca: impressões, cliques e posição média dos últimos sete dias, com as consultas e páginas por trás deles.",
        "O que está funcionando: consultas no top 10, páginas com impressões em alta e páginas com impressões mas sem cliques, o que em geral significa que o título ou o conteúdo não corresponde à busca.",
        "Visitantes: visitantes únicos, visitantes vindos de buscadores e visitantes vindos de assistentes de IA como o ChatGPT e o Perplexity, com as páginas em que entraram.",
        "A distância até a meta: os números desta semana contra o alvo semanal.",
        "O que ele fez hoje e as decisões de que precisa de você.",
      ],
    },
    {
      kind: "table",
      id: "example",
      title: "Um exemplo: o nosso próprio relatório, 10 de novembro de 2026",
      text: [
        "Este é o topo do relatório que o funcionário de SEO do Crewmark publicou para o crewmark.ai, um site com poucas semanas de vida.",
      ],
      headers: ["Métrica", "Últimos 7 dias", "Meta semanal"],
      rows: [
        ["Impressões no Search Console", "537 (eram 309 no relatório anterior)", "10.000"],
        ["Cliques no Search Console", "2", "500"],
        ["Visitantes únicos", "93, dos quais 16 da busca e 0 de assistentes de IA", "2.000"],
        ["Funcionando", "“base44 superagent” na posição 4 sem cliques: caía em uma página de visão geral", "-"],
        ["O que foi feito", "Escreveu no mesmo dia uma página dedicada ao Base44 Superagent", "-"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Como configurar um relatório diário de SEO no Claude Code ou no Codex",
      steps: [
        {
          title: "Dê acesso somente leitura aos números",
          text: "Para o Search Console: a API do Search Console com uma conta de serviço somente leitura, um servidor MCP ou um navegador que o agente possa controlar enquanto você está logado. Para o analytics: a CLI, a API ou o servidor MCP da sua ferramenta; o nosso funcionário usa a CLI do PostHog. Acesso de leitura é tudo de que ele precisa.",
        },
        {
          title: "Copie o brief do cargo",
          text: "Coloque-o no CLAUDE.md para o Claude Code ou no AGENTS.md para o Codex e troque a meta pela sua. As [Marketing Team Skills](/skills), open source, incluem uma skill seo-daily-report com os mesmos passos.",
          code: brief,
        },
        {
          title: "Coloque em um agendamento",
          text: "Transforme o relatório em uma issue recorrente, para que ele volte ao funcionário todo dia no mesmo horário e você veja se o de hoje foi feito.",
          code: schedule,
        },
        {
          title: "Leia onde você já trabalha",
          text: "O relatório chega como comentário na issue. Quando precisa de algo de você, ele marca a issue como Needs action e pergunta.",
        },
      ],
    },
    {
      kind: "text",
      id: "double-down",
      title: "Transforme o relatório em ação",
      text: [
        "Um relatório que só descreve os números não os move. A parte útil é a regra do que fazer em seguida, e ela está no brief:",
      ],
      points: [
        "Uma consulta no top 10 ou em alta: escreva a cauda longa relacionada (outros usos da mesma ferramenta, “vs”, alternativas, erros, plataformas), acrescente um FAQ, coloque links para ela a partir de páginas que já recebem visitantes ou traduza-a para um idioma que já busca por ela.",
        "Impressões sem cliques: a página não corresponde à busca. Mude o título para a consulta que as pessoas usam ou escreva uma página para essa consulta.",
        "Termos amplos travados além da posição 50: pare de gastar tempo com eles; um site novo ganha primeiro a cauda longa.",
        "Registre a decisão e o resultado em um log, para que o relatório de amanhã possa conferir se funcionou.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Com o Crewmark",
      title: "Contrate o funcionário de SEO que escreve o relatório",
      text: [
        "O relatório é uma parte do dia de um especialista em SEO. O Crewmark transforma o seu Claude Code ou Codex nesse funcionário, com um cargo, uma meta em números, horário de trabalho e um heartbeat.",
      ],
      steps: [
        {
          title: "Comece pelo cargo",
          text: "O [especialista em SEO com IA](/ai-employees/seo-specialist) vem com as metas, a rotina diária e o brief.",
        },
        {
          title: "Adicione o relatório como issue recorrente",
          text: "Ele acorda com o heartbeat, vê que o relatório está na hora e o publica.",
        },
        {
          title: "Veja o resto do marketing",
          text: "Mais trabalhos para equipes de marketing estão em [Claude Code para marketing](/for/marketing); o próximo caso de uso é um [resumo semanal de concorrentes](/use-cases/weekly-competitor-digest).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Configurar um relatório diário de SEO no Claude Code ou no Codex" },
  mid: {
    title: "Quer o relatório, e o trabalho por trás dele, todo dia?",
    text: "O especialista em SEO do Crewmark roda no seu Claude Code ou Codex e publica o relatório com agendamento.",
    button: "Começar",
  },
  faq: {
    title: "Perguntas frequentes",
    items: [
      {
        q: "O Claude Code consegue ler o Google Search Console?",
        a: "Sim, pela API do Search Console com uma conta de serviço, por um servidor MCP para o Search Console ou por um navegador que ele possa controlar enquanto você está logado. Dê a ele acesso somente leitura.",
      },
      {
        q: "Como agendo um relatório diário de SEO com o Claude Code?",
        a: "O Claude Code não começa sozinho; algo precisa acordá-lo. Use uma tarefa recorrente ou um heartbeat, veja [como deixar o Claude Code proativo](/proactive-claude-code), ou rode-o como funcionário do Crewmark com uma issue recorrente.",
      },
      {
        q: "O que um relatório diário de SEO deve incluir?",
        a: "Impressões, cliques e posição dos últimos sete dias, com as consultas e páginas por trás deles; o que está no top 10 ou em alta; visitantes vindos da busca e de assistentes de IA; a distância até a meta; o que foi feito hoje; e as decisões necessárias.",
      },
      {
        q: "Também funciona com o Codex?",
        a: "Sim. Coloque o mesmo brief no AGENTS.md; o acesso de que ele precisa é o mesmo.",
      },
      {
        q: "Por que olhar sete dias em vez de um?",
        a: "Os dados do Search Console chegam com um ou dois dias de atraso, e dias isolados oscilam muito. Sete dias mostram a tendência; o relatório diário só a lê todo dia.",
      },
    ],
  },
  cta: {
    title: "Receba o relatório de SEO todo dia, e o trabalho que ele pede.",
    text: "O Crewmark transforma sessões do Claude Code e do Codex em funcionários de IA com cargos, metas, horário de trabalho e heartbeat.",
    button: "Começar",
  },
  checked: "Escrito em 10 de novembro de 2026, a partir da rotina que o próprio funcionário de SEO do Crewmark roda todo dia.",
  disclaimer:
    "O Crewmark é um produto independente, sem vínculo com a Anthropic, a OpenAI, o Google ou o PostHog e sem endosso deles. Os nomes dos produtos são marcas dos respectivos titulares.",
};
