import type { GuideCopy } from "@/components/landing/guide-article";

// Brazilian Portuguese translation of /blog/ai-seo-agent; the English master is src/content/blog/ai-seo-agent.ts.

const indexnow = "https://www.indexnow.org/documentation";

const skill = `---
description: Encontra o tema de SEO do dia. Use no começo de cada sessão de trabalho de SEO.
---

1. Confira os changelogs e as notícias dos produtos que nossos leitores usam.
2. Para cada candidato, busque as sugestões do autocompletar do Google e
   anote as variações de cauda longa que as pessoas já digitam.
3. Fique só com os temas ligados ao nosso produto que ainda não têm
   uma boa resposta na primeira página.
4. Registre o tema escolhido, o motivo e os descartados em
   docs/seo/log.md e depois escreva o rascunho da página.`;

const claudeMd = `# Regras de SEO
- Fatos só da documentação oficial; inclua a data em que você conferiu.
- Toda página começa com uma definição de uma frase, depois passos,
  uma tabela comparativa e um FAQ.
- Uma palavra-chave principal por URL; confira docs/seo/keywords.md antes.
- Depois de um deploy: avise o IndexNow, solicite a indexação e registre.`;

export const copy: GuideCopy = {
  meta: {
    title: "Agente de IA para SEO: como criar com o Claude Code",
    description:
      "O que um agente de IA para SEO faz, o fluxo diário que funciona e como criar um com o Claude Code ou o Codex: regras no CLAUDE.md, skills, MCP, IndexNow e um agendamento. Baseado no agente que cuida do SEO deste site.",
  },
  breadcrumb: "Agente de IA para SEO",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-07" },
  hero: {
    kicker: "Blog · Funcionários de IA",
    title: "Agente de IA para SEO (AI SEO agent): como criar um que trabalhe todo dia",
    lead: "Um agente de IA para SEO é um agente de programação, como o Claude Code ou o Codex, encarregado de aumentar o tráfego orgânico: ele encontra temas que as pessoas estão começando a buscar, escreve e traduz páginas, publica, pede aos buscadores que as indexem e confere o que mudou. O SEO deste site funciona assim, nas mãos de um funcionário de IA no Crewmark. Este guia mostra o fluxo que ele segue, as regras e skills que o mantêm honesto, as ferramentas de que precisa e como montar o seu.",
    cta: "Começar",
    secondary: "Ir para a configuração",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "O que um agente de IA para SEO pode fazer",
      points: [
        "Encontrar temas: ler changelogs e notícias de produtos e depois consultar o autocompletar do Google e o Google Trends para ver as perguntas que as pessoas já digitam.",
        "Evitar que suas próprias páginas se canibalizem: manter um mapa de palavras-chave com uma palavra-chave principal por URL e consultá-lo antes de escrever.",
        "Escrever páginas que respondem à pergunta logo de cara: uma definição de uma frase, passos, uma tabela comparativa e um FAQ, formato que também combina com assistentes de IA que citam páginas.",
        "Traduzir e publicar: gerar a página em todos os idiomas que você oferece, testá-la localmente e encaminhá-la para o deploy.",
        "Fazer a página ser indexada: avisar o IndexNow, reenviar o sitemap e solicitar a indexação.",
        "Medir e ajustar: ler o Search Console e o analytics e reescrever títulos ou acrescentar links internos onde as páginas têm impressões, mas não cliques.",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Como criar um agente de IA para SEO com o Claude Code",
      steps: [
        {
          title: "Escreva as regras no CLAUDE.md",
          text: "Coloque o que é inegociável onde o agente lê em toda sessão: de onde os fatos podem vir, como as páginas são estruturadas e o que fazer depois de cada deploy. Veja o [guia do CLAUDE.md](/blog/claude-md).",
          code: claudeMd,
        },
        {
          title: "Transforme a rotina diária em uma skill",
          text: "Uma skill em `.claude/skills/` guarda a rotina passo a passo e só é carregada quando é usada. Comece cada sessão com ela. Veja [skills do Claude Code](/blog/claude-code-skills).",
          code: skill,
        },
        {
          title: "Mantenha um mapa de palavras-chave e um log no repositório",
          text: "Dois arquivos Markdown resolvem muita coisa: `keywords.md` (palavra-chave → URL → status) impede que duas páginas disputem a mesma busca, e `log.md` registra o que foi escolhido e por quê, para que a próxima sessão continue em vez de começar do zero.",
        },
        {
          title: "Dê a ele as ferramentas de que precisa",
          text: "Busca e fetch na web para pesquisar, o código do site e um servidor de desenvolvimento local para testar páginas, um servidor MCP ou uma CLI para o seu analytics e um script para o IndexNow. Prefira CLIs quando existirem; elas gastam menos tokens. Veja [MCP no Claude Code](/blog/claude-code-mcp).",
        },
        {
          title: "Proteja as etapas arriscadas",
          text: "A publicação deve passar por uma revisão ou por um responsável pelo deploy, nunca sair direto do agente. Use regras de permissão e [hooks](/blog/claude-code-hooks) para tudo o que nunca pode acontecer, e mantenha segredos fora de prompts e arquivos.",
        },
        {
          title: "Coloque-o em um agendamento",
          text: "SEO recompensa a constância, então o agente deve começar sozinho a cada dia útil. Use `/loop` ou tarefas agendadas para um único prompt recorrente, ou dê a ele um heartbeat e um backlog; veja [como deixar o Claude Code proativo](/proactive-claude-code).",
        },
      ],
      source: { label: "Fonte: documentação do IndexNow", href: indexnow },
    },
    {
      kind: "table",
      title: "Um fluxo diário de SEO com IA",
      text: [
        "Este é o checklist que o funcionário de IA responsável pelo SEO deste site percorre todo dia, com um relatório escrito no final.",
      ],
      headers: ["Etapa", "O que o agente faz", "Resultado"],
      rows: [
        ["1. Encontrar", "Varre changelogs, blogs de fornecedores, GitHub e notícias dos últimos 1–3 dias; puxa dados do autocompletar e do Trends", "Uma lista curta de temas candidatos"],
        ["2. Verificar", "Confere se o tema tem relação com o produto, se a demanda está subindo e se a primeira página não tem uma boa resposta", "Um tema escolhido, com o motivo registrado"],
        ["3. Escrever", "Redige só com base em fontes oficiais e depois traduz", "Uma página em todos os idiomas"],
        ["4. Publicar", "Checa os tipos, renderiza localmente e abre um pedido de deploy", "Uma página no ar no site"],
        ["5. Indexar", "Avisa o IndexNow, reenvia o sitemap e solicita a indexação no Search Console e no Bing", "Buscadores avisados"],
        ["6. Relatar", "Registra o tráfego, a distância até a meta e o que foi feito", "Um relatório diário para a equipe"],
      ],
    },
    {
      kind: "text",
      title: "O que aprendemos rodando um",
      points: [
        "Confira a demanda antes de escrever: uma palavra em alta nas redes sociais pode ser um termo pouco buscado; o Google Trends já mostrou um termo relacionado com cerca de 30 vezes mais buscas do que aquele de que todo mundo estava falando.",
        "Fatos só de fontes primárias: subagentes de pesquisa às vezes leem uma página errado; reabra a fonte oficial antes de publicar qualquer coisa surpreendente.",
        "Em um site novo, a indexação é o gargalo: solicitar a indexação colocou páginas novas no Google em cerca de um dia, mas as cotas diárias acabam rápido.",
        "Muitos idiomas multiplicam as páginas, não o esforço: uma página em inglês bem estruturada vira nove com uma etapa de tradução.",
        "Constância vale mais que picos: a meta é um ritmo diário que o agente mantém sem ninguém pedir.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Com o Crewmark",
      title: "Contrate um especialista em SEO de IA em vez de programar um",
      text: [
        "O Crewmark tem um especialista em SEO pronto para contratar: ele roda na sua sessão do Claude Code, Codex, DeepSeek Harness ou OpenCode, acorda com um heartbeat durante o horário de trabalho, pega a próxima tarefa de um quadro e reporta o que fez, do mesmo jeito que o SEO deste site é feito.",
      ],
      steps: [
        {
          title: "Escolha o cargo de especialista em SEO",
          text: "As skills, a meta e o horário já vêm configurados; troque a meta pelo seu número, como cliques por semana no Search Console. Veja o [cargo de especialista em SEO com IA](/ai-employees/seo-specialist) para metas, rotina e briefing.",
        },
        {
          title: "Conecte o seu projeto",
          text: "Rode o comando de configuração no repositório do site para que ele possa escrever páginas, testá-las e abrir pedidos de deploy.",
        },
        {
          title: "Revise, sem ficar de babá",
          text: "Ele comenta nas próprias tarefas e manda mensagem quando precisa de uma decisão sua. Leia [o que é um funcionário de IA](/ai-employees) e compare [plataformas de funcionários de IA](/blog/best-ai-employee-platforms).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Criar um agente de IA para SEO com o Claude Code" },
  mid: {
    title: "Quer o agente de SEO sem ter que construí-lo?",
    text: "O especialista em SEO do Crewmark roda no seu Claude Code ou Codex, acorda com um heartbeat e vai trabalhando em um backlog de SEO.",
    button: "Começar",
  },
  faq: {
    title: "Perguntas frequentes sobre agentes de IA para SEO",
    items: [
      {
        q: "O que é um agente de IA para SEO?",
        a: "Um agente de IA, normalmente um agente de programação como o Claude Code ou o Codex, com a tarefa contínua de aumentar o tráfego orgânico: encontrar temas, escrever e publicar páginas, fazer com que sejam indexadas e medir os resultados.",
      },
      {
        q: "Um agente de IA consegue fazer SEO sozinho?",
        a: "Boa parte do trabalho diário, sim: pesquisa, redação, tradução, verificações técnicas e pedidos de indexação. A publicação, as contas e qualquer coisa irreversível ainda devem passar por uma pessoa ou por um responsável pelo deploy.",
      },
      {
        q: "Existe agente de IA para SEO grátis?",
        a: "Você pode criar um sobre um agente que já paga, como o Claude Code em um plano do Claude ou o Codex no ChatGPT, usando ferramentas gratuitas como o autocompletar do Google, o Google Trends, o Search Console e o IndexNow.",
      },
      {
        q: "De quais ferramentas um agente de IA para SEO precisa?",
        a: "Busca e fetch na web, acesso ao código do site e um jeito de testar páginas, acesso de leitura ao Search Console e ao analytics, e uma forma de avisar os buscadores, como o IndexNow.",
      },
      {
        q: "Como evitar que um agente de IA para SEO publique fatos errados?",
        a: "Exija nas regras dele fontes oficiais e uma data de verificação, faça com que reabra as fontes antes de publicar afirmações surpreendentes e passe a publicação por revisão.",
      },
      {
        q: "Páginas escritas por IA ranqueiam?",
        a: "Páginas ranqueiam pela utilidade, não pela autoria. O que um agente de IA para SEO deve produzir são páginas que respondem primeiro a uma pergunta real e em alta, com passos e comparações corretos.",
      },
      {
        q: "Devo usar o n8n ou um agente de programação para SEO?",
        a: "Ferramentas de workflow servem para pipelines fixos; um agente de programação serve para trabalho que exige julgamento e mudanças de código, como escrever páginas em um repositório e testá-las.",
      },
    ],
  },
  cta: {
    title: "Dê ao seu site um colega de SEO que nunca esquece o checklist.",
    text: "O Crewmark transforma sessões do Claude Code, Codex, DeepSeek Harness e OpenCode em funcionários de IA com cargos, metas, horários de trabalho e um heartbeat.",
    button: "Começar",
  },
  checked: "Fluxo de trabalho como executado pelo funcionário de IA responsável pelo SEO deste site; detalhes do Claude Code e do IndexNow conferidos com a documentação de cada um em 7 de novembro de 2026.",
  disclaimer:
    "O Crewmark é um produto independente, sem vínculo com a Anthropic, a OpenAI ou o Google e sem endosso deles. Os nomes dos produtos são marcas dos respectivos titulares.",
};
