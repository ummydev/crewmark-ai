import type { GuideCopy } from "@/components/landing/guide-article";

// Brazilian Portuguese translation of /skills; the English master is src/content/skills-hub.ts.

const repo = "https://github.com/ummydev/marketing-team-skills";

const install = `# Every skill, into the agents you have installed
npx skills add ummydev/marketing-team-skills

# Or as a Claude Code plugin
/plugin marketplace add ummydev/marketing-team-skills
/plugin install marketing-team-skills`;

export const copy: GuideCopy = {
  meta: {
    title: "Skills do Claude para marketing e design | Crewmark AI",
    description:
      "Skills open source e gratuitas para o Claude Code, de uma equipe de marketing com IA que as usa todo dia: palavras-chave em alta, páginas de SEO, páginas comparativas, indexação, busca com IA e um relatório diário, além das melhores skills de design comparadas.",
  },
  breadcrumb: "Skills do Claude",
  hero: {
    kicker: "Skills do Claude",
    title: "Skills do Claude de uma equipe de marketing com IA",
    lead: "Marketing Team Skills é um conjunto gratuito e open source de Agent Skills para Claude Code, Codex e Cursor: os passos que o especialista em SEO com IA do próprio Crewmark segue todo dia para encontrar palavras-chave, escrever e traduzir páginas, fazer com que sejam indexadas e relatar o que mudou. Cada skill é um SKILL.md com comandos que funcionam e os erros que cometemos. Abaixo: o que tem no pacote, como instalar e os nossos guias das melhores skills para cada tarefa.",
    cta: "Começar",
    secondary: "Instalar as skills",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "table",
      id: "skills",
      title: "O que tem no Marketing Team Skills",
      text: ["A versão 0.1 cobre o SEO on-page. Depois vêm o SEO off-page, os vídeos UGC e a divulgação nas redes sociais."],
      headers: ["Skill", "O que faz"],
      rows: [
        ["trend-keywords", "Identifica termos que as pessoas acabaram de começar a buscar depois de um lançamento, encerramento ou aquisição, e publica uma página no mesmo dia"],
        ["keyword-research", "Escolhe palavras-chave em que um site novo consegue ranquear e mantém um mapa de palavras-chave"],
        ["seo-page", "Escreve uma página para uma palavra-chave: definição primeiro, depois passos, tabela, FAQ e fontes"],
        ["competitor-pages", "Cria páginas de alternativas e comparativas (vs) a partir da documentação de cada produto"],
        ["programmatic-pages", "Páginas com template em escala, sem conteúdo raso"],
        ["multilingual-seo", "Publica cada página em vários idiomas com hreflang"],
        ["index-push", "Faz as páginas serem rastreadas: IndexNow, Search Console, Bing"],
        ["ai-search", "Torna o site citável pelo ChatGPT, pelo Claude e pelo Perplexity"],
        ["seo-daily-report", "Escreve o relatório do fim do dia em relação à meta"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Como instalar as skills",
      steps: [
        {
          title: "Adicione as skills ao seu agente",
          text: "A CLI de skills instala tudo no Claude Code, Codex, Cursor e outros agentes; ou use o plugin do Claude Code.",
          code: install,
        },
        {
          title: "Copie o brief do cargo",
          text: "Coloque `roles/seo-specialist/CLAUDE.md` (ou `AGENTS.md` para o Codex) no repositório do seu site e preencha a meta, para que cada sessão conheça a rotina diária. Veja o [especialista em SEO com IA](/ai-employees/seo-specialist).",
        },
        {
          title: "Rode todo dia",
          text: "Use `/loop` ou tarefas agendadas, ou rode como um funcionário de IA com um heartbeat; veja [como deixar o Claude Code proativo](/proactive-claude-code).",
        },
      ],
      source: { label: "Fonte: Marketing Team Skills no GitHub", href: repo },
    },
    {
      kind: "text",
      id: "guides",
      title: "Melhores skills do Claude por tarefa",
      text: [
        "Nossas comparações das skills que valem a pena instalar para cada tipo de trabalho, a partir do repositório de cada projeto:",
      ],
      points: [
        "[Melhores skills do Claude para web design e UI](/skills/website-design): frontend-design da Anthropic, Taste Skill, Impeccable, UI UX Pro Max, unslop e mais.",
        "Para criar um agente de SEO passo a passo, leia [Agente de IA para SEO: como criar um](/blog/ai-seo-agent); para skills em geral, [skills do Claude Code](/blog/claude-code-skills).",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Com o Crewmark",
      title: "Skills para a sessão, funcionários para o trabalho",
      text: [
        "As skills deixam uma sessão boa em uma tarefa. O Crewmark transforma o Claude Code, Codex, DeepSeek Harness ou OpenCode em funcionários de IA com um papel, uma meta e um horário de trabalho, que acordam com um heartbeat para pegar a próxima issue de um quadro e usam as skills que você instalar.",
      ],
      steps: [
        {
          title: "Escolha um papel",
          text: "Um [especialista em SEO](/ai-employees/seo-specialist), um [agente de marketing](/ai-employees/marketing-agent), um [UI designer](/ai-employees/ui-designer) e mais.",
        },
        {
          title: "Conecte o seu projeto",
          text: "Cada funcionário trabalha na própria sessão e no próprio checkout, na assinatura que você já paga. Veja os [preços](/pricing).",
        },
        {
          title: "Revise, sem ficar de babá",
          text: "Ele comenta enquanto trabalha e pergunta antes de qualquer coisa que esteja na sua lista de aprovação.",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Instalar o Marketing Team Skills" },
  mid: {
    title: "Quer alguém rodando as skills para você todo dia?",
    text: "Os funcionários de IA do Crewmark usam essas skills com um heartbeat, no plano do Claude Code ou do Codex que você já paga.",
    button: "Começar",
  },
  faq: {
    title: "Perguntas frequentes sobre skills do Claude",
    items: [
      {
        q: "O que são skills do Claude?",
        a: "Pastas com um arquivo SKILL.md que ensinam o Claude Code, o Claude.ai e outros agentes a fazer uma tarefa específica. Só uma descrição curta é carregada até a tarefa precisar da skill completa.",
      },
      {
        q: "O Marketing Team Skills é gratuito?",
        a: "Sim. É open source sob a licença MIT e está no GitHub em ummydev/marketing-team-skills.",
      },
      {
        q: "Funciona com o Codex e o Cursor?",
        a: "Sim. A CLI de skills instala no Codex, no Cursor e em outros agentes compatíveis com Agent Skills, e há um manifesto de plugin para o Codex.",
      },
      {
        q: "Qual a diferença para outras skills de marketing?",
        a: "É operacional, não enciclopédico: cada skill é a rotina passo a passo que um funcionário de SEO com IA segue em um site de verdade, com scripts e os problemas que encontramos. Combina bem com bibliotecas amplas como coreyhaines31/marketingskills.",
      },
    ],
  },
  cta: {
    title: "Contrate a equipe que escreveu as skills.",
    text: "O Crewmark transforma sessões do Claude Code, Codex, DeepSeek Harness e OpenCode em funcionários de IA com papéis, metas, horários de trabalho e um heartbeat.",
    button: "Começar",
  },
  checked: "Lista de skills conforme o Marketing Team Skills v0.1, em 8 de novembro de 2026.",
  disclaimer:
    "O Crewmark é um produto independente, sem vínculo com a Anthropic ou a OpenAI e sem endosso delas. Claude, Claude Code e Codex são marcas dos respectivos titulares.",
};
