import type { GuideCopy } from "@/components/landing/guide-article";

// pt-BR translation of /for/marketing; the English master is src/content/use-cases/for-marketing.ts.

const install = `# Crewmark's open-source marketing skills, into the agents you have
npx skills add ummydev/marketing-team-skills

# Or as a Claude Code plugin
/plugin marketplace add ummydev/marketing-team-skills
/plugin install marketing-team-skills`;

const prompts = `Toda noite, leia o Search Console e o nosso analytics dos últimos
7 dias, me diga o que está funcionando, faça uma coisa a respeito e publique
o relatório na issue "Relatório diário de SEO".

Toda segunda, confira as páginas de preços e de changelog listadas em
competitors.md, compare com a semana passada e me diga o que
mudou e quais das nossas páginas de comparação atualizar.

Transforme o post do blog desta semana em cinco rascunhos para LinkedIn e X com a
nossa voz. Coloque-os no quadro para revisão; não publique.

Toda sexta, puxe cadastros e ativação do PostHog, compare
com a semana passada e escreva três coisas para testar na próxima semana.`;

export const copy: GuideCopy = {
  meta: {
    title: "Claude Code para marketing: funcionários de IA para a sua equipe",
    description:
      "Como equipes de marketing usam o Claude Code e o Codex como funcionários de IA: SEO, conteúdo, redes sociais, acompanhamento de concorrentes e relatórios com agendamento. Cargos, casos de uso, prompts e skills para copiar, e como configurar tudo para que nada saia sem você.",
  },
  breadcrumb: "Claude Code para marketing",
  parent: { name: "Casos de uso", href: "/use-cases" },
  hero: {
    kicker: "Para equipes de marketing",
    title: "Claude Code para marketing: funcionários de IA que fazem o trabalho recorrente",
    lead: "O Claude Code e o Codex não são só para engenheiros. Com um cargo, as skills certas e um agendamento, o mesmo agente escreve e corrige as páginas do seu site, faz com que sejam indexadas, rascunha posts a partir do que você lançou, acompanha os concorrentes e informa os números todo dia. O marketing do próprio Crewmark funciona assim. Esta página mostra quais trabalhos delegar, os cargos que os fazem, prompts e skills para copiar e como configurar tudo para que nada público saia sem passar por uma pessoa.",
    cta: "Começar",
    secondary: "Ver os trabalhos",
    secondaryHref: "#jobs",
  },
  sections: [
    {
      kind: "table",
      id: "jobs",
      title: "O que equipes de marketing entregam a um funcionário de IA",
      text: [
        "Os melhores primeiros trabalhos se repetem todo dia ou toda semana, têm um ponto final claro e deixam a palavra final com você.",
      ],
      headers: ["Trabalho", "Frequência", "Quem faz", "Guia"],
      rows: [
        ["Relatório de SEO: tráfego, o que está funcionando, a distância até a meta", "Diário", "Especialista em SEO", "[Relatório diário de SEO](/use-cases/daily-seo-report)"],
        ["Mudanças de preços, lançamentos e documentação dos concorrentes", "Semanal", "Agente de marketing", "[Resumo semanal de concorrentes](/use-cases/weekly-competitor-digest)"],
        ["Páginas novas para palavras-chave que estão começando a funcionar", "Diário", "Especialista em SEO", "[Especialista em SEO com IA](/ai-employees/seo-specialist)"],
        ["Páginas de comparação e de alternativas, sempre atualizadas", "Semanal", "Especialista em SEO", "[Skill de páginas de concorrentes](/skills)"],
        ["Posts para redes sociais rascunhados a partir do que você lançou", "Diário", "Gerente de redes sociais", "[Gerente de redes sociais com IA](/ai-employees/social-media-manager)"],
        ["Números do funil e experimentos para testar", "Semanal", "Agente de marketing", "[Agente de marketing com IA](/ai-employees/marketing-agent)"],
        ["Traduções de páginas que já recebem tráfego de busca", "Quando necessário", "Especialista em SEO", "[Skill de SEO multilíngue](/skills)"],
      ],
    },
    {
      kind: "steps",
      id: "prompts",
      title: "Prompts para copiar",
      text: [
        "Cada um destes funciona como uma issue recorrente para um funcionário de IA, ou como um prompt avulso no Claude Code ou no Codex.",
      ],
      steps: [
        {
          title: "Quatro trabalhos, uma frase cada",
          text: "Troque os nomes e os números pelos seus. Os dois primeiros têm guias completos com o brief do cargo: o [relatório diário de SEO](/use-cases/daily-seo-report) e o [resumo semanal de concorrentes](/use-cases/weekly-competitor-digest).",
          code: prompts,
        },
      ],
    },
    {
      kind: "steps",
      id: "skills",
      title: "Skills de marketing do Claude Code para instalar",
      text: [
        "As skills dão ao agente os passos de cada trabalho, para você não precisar explicá-los em toda sessão.",
      ],
      steps: [
        {
          title: "Marketing Team Skills (Crewmark, open source)",
          text: "As skills que o nosso próprio funcionário de SEO roda todo dia: palavras-chave em alta, pesquisa de palavras-chave, uma página por palavra-chave, páginas de concorrentes, SEO multilíngue, indexação de páginas, busca com IA e o relatório diário, além de skills de vídeo curto. Veja as [Marketing Team Skills](/skills).",
          code: install,
        },
        {
          title: "Mais skills de SEO e marketing",
          text: "O marketingskills de Corey Haines (seo-audit, ai-seo, programmatic-seo e mais), o Claude SEO e outros são comparados em [melhores skills do Claude para SEO](/skills/seo).",
        },
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Como montar uma equipe de marketing de funcionários de IA",
      steps: [
        {
          title: "Contrate um cargo de cada vez",
          text: "Comece pelo trabalho que mais toma o seu tempo toda semana. A página de cada cargo traz as metas, a rotina diária e o brief: [especialista em SEO](/ai-employees/seo-specialist), [agente de marketing](/ai-employees/marketing-agent), [gerente de redes sociais](/ai-employees/social-media-manager).",
        },
        {
          title: "Dê acesso de leitura e um repositório",
          text: "Acesso somente leitura ao Search Console e ao analytics, o repositório do site e um preview local para testar páginas. Prefira CLIs a servidores MCP quando os dois existirem; elas gastam menos tokens.",
        },
        {
          title: "Coloque o trabalho em um quadro",
          text: "Trabalhos recorrentes viram issues recorrentes; trabalhos avulsos viram issues que você atribui. Cada funcionário acorda com o seu heartbeat durante o horário de trabalho e pega a próxima.",
        },
        {
          title: "Mantenha uma pessoa em tudo o que for público",
          text: "Publicar, postar, gastar e qualquer coisa irreversível passam por uma pessoa. Quando um funcionário precisa disso, ele marca a issue como Needs action e pergunta.",
        },
      ],
    },
    {
      kind: "text",
      id: "results",
      title: "O que esperar",
      points: [
        "SEO leva semanas em qualquer site: aponte as primeiras metas para páginas publicadas e impressões, depois para cliques.",
        "O nosso próprio funcionário de SEO publica páginas todo dia; nas primeiras semanas, as impressões passaram de um punhado para centenas por semana, principalmente em páginas de cauda longa, enquanto termos amplos como “ai employee” ficaram além da posição 80.",
        "Rascunhos saem rápido, mas o bom gosto continua importando: revise posts para redes sociais e tudo o que estiver na voz da sua marca antes de sair.",
        "O uso sai do seu próprio plano do Claude ou do ChatGPT, então agende os trabalhos pesados dentro do horário de trabalho.",
      ],
    },
  ],
  howTo: { section: "how-to", name: "Montar uma equipe de marketing de funcionários de IA no Claude Code ou no Codex" },
  mid: {
    title: "Quer esses trabalhos feitos todo dia sem precisar pedir?",
    text: "O Crewmark transforma o seu Claude Code ou Codex em funcionários de marketing que acordam com um heartbeat e trabalham por um quadro.",
    button: "Começar",
  },
  faq: {
    title: "Perguntas frequentes",
    items: [
      {
        q: "O Claude Code consegue fazer marketing?",
        a: "Sim, no trabalho que dá para fazer por meio de arquivos, da web e de ferramentas: escrever e corrigir páginas do site, pesquisa de palavras-chave, acompanhamento de concorrentes, relatórios a partir de analytics e rascunhos de posts e e-mails. Publicar e gastar devem ficar com uma pessoa.",
      },
      {
        q: "Quais são as melhores skills de marketing do Claude Code?",
        a: "Para SEO e crescimento: as Marketing Team Skills, open source do Crewmark, e o marketingskills de Corey Haines são dois dos conjuntos mais completos; comparamos esses e outros em [melhores skills do Claude para SEO](/skills/seo).",
      },
      {
        q: "Existe um plugin de marketing para o Claude Code?",
        a: "As Marketing Team Skills se instalam como plugin do Claude Code com `/plugin marketplace add ummydev/marketing-team-skills`, ou no Claude Code, no Codex e em outros agentes com `npx skills add`.",
      },
      {
        q: "Também posso usar o Codex para marketing?",
        a: "Sim. Coloque o brief do cargo no AGENTS.md em vez do CLAUDE.md; as skills e a configuração são as mesmas.",
      },
      {
        q: "Qual é a diferença entre um funcionário de marketing com IA e uma ferramenta de automação de marketing?",
        a: "Ferramentas de automação executam os passos que você monta. Um funcionário de IA decide o que fazer em seguida com base em uma meta, faz o trabalho no seu site e nas suas ferramentas e presta contas, com agendamento.",
      },
      {
        q: "Ele vai postar nas redes sociais sem mim?",
        a: "Só se você permitir. Recomendamos rascunhos para revisão: o funcionário os coloca no quadro e espera o seu OK.",
      },
    ],
  },
  cta: {
    title: "Dê à sua equipe de marketing funcionários de IA que nunca faltam.",
    text: "O Crewmark transforma sessões do Claude Code e do Codex em funcionários de IA com cargos, metas, horário de trabalho e heartbeat.",
    button: "Começar",
  },
  checked: "Escrito em 10 de novembro de 2026, a partir de como trabalham os próprios funcionários de marketing do Crewmark.",
  disclaimer:
    "O Crewmark é um produto independente, sem vínculo com a Anthropic ou a OpenAI e sem endosso delas. Claude, Claude Code e Codex são marcas dos respectivos titulares.",
};
