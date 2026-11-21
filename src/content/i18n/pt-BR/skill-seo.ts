import type { GuideCopy } from "@/components/landing/guide-article";

// pt-BR translation of /skills/seo; the English master is
// src/content/skill-pages/seo.ts.

const corey = "https://github.com/coreyhaines31/marketingskills";

const install = `# Corey Haines' marketingskills: just the SEO skills
npx skills add coreyhaines31/marketingskills --skill seo-audit ai-seo programmatic-seo schema site-architecture

# Claude SEO (inside Claude Code)
/plugin marketplace add AgriciDaniel/claude-seo
/plugin install claude-seo@agricidaniel-claude-seo
/seo setup

# Your real Search Console data (Ian Nuttall's seo, hosted MCP)
claude mcp add --transport http seoskill https://seoskill.dev/mcp

# Addy Osmani's Lighthouse-based SEO skill
npx skills add addyosmani/web-quality-skills --skill seo

# Marketing Team Skills (ours): daily SEO routines
npx skills add ummydev/marketing-team-skills`;

export const copy: GuideCopy = {
  meta: {
    title: "Melhores skills do Claude para SEO (2026): auditorias, GEO, palavras-chave",
    description:
      "As melhores skills do Claude Code para SEO e busca com IA, comparadas a partir dos próprios repositórios: seo-audit e ai-seo de Corey Haines, Claude SEO, GEO-SEO Claude, MCPs do Search Console, SE Ranking e mais, com número de instalações e comandos.",
  },
  breadcrumb: "Skills de SEO",
  parent: { name: "Skills do Claude", href: "/skills" },
  hero: {
    kicker: "Skills do Claude · SEO",
    title: "Melhores skills do Claude para SEO",
    lead: "Uma skill de SEO é um arquivo SKILL.md que ensina o Claude Code (ou o Codex, o Cursor e outros agentes) a fazer uma parte do trabalho de busca: auditar um site, planejar páginas, escrever schema ou ser citado pela busca com IA. Existem dois tipos. Skills de método são checklists e playbooks gratuitos que não precisam de chave nenhuma. Skills de dados conectam o agente ao Search Console, DataForSEO, SE Ranking ou Ahrefs por meio de um servidor MCP, para que ele trabalhe com números reais em vez de palpites. Uma boa configuração tem uma de cada. Estas são as que valem a pena instalar em 2026, a partir do repositório de cada projeto.",
    cta: "Começar",
    secondary: "Comparar as skills",
    secondaryHref: "#compare",
  },
  sections: [
    {
      kind: "text",
      title: "Escolhas rápidas",
      points: [
        "Um começo seguro: marketingskills, de Corey Haines. As skills seo-audit, ai-seo e programmatic-seo são as três skills de SEO mais instaladas no skills.sh.",
        "Uma auditoria completa em um comando: Claude SEO. `/seo audit <url>` manda até 17 agentes especialistas pelo site e devolve um plano priorizado.",
        "Busca com IA (GEO): GEO-SEO Claude para auditorias no estilo de agência e relatórios em PDF, ou GEO Optimizer para uma nota de prontidão de 0 a 100 que você pode rodar no CI.",
        "Seus próprios números: seo, de Ian Nuttall, um servidor MCP e CLI gratuito para o Search Console; as skills da SE Ranking se você já paga pela SE Ranking.",
        "SEO técnico seguindo as regras: a skill seo de Addy Osmani, construída sobre as auditorias do Lighthouse e as diretrizes do Google.",
        "Fazer SEO todo dia, não uma vez só: Marketing Team Skills (nossa) cobre a escolha de palavras-chave que um site novo consegue ganhar, uma página por palavra-chave, envios para indexação e um relatório diário.",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Skills de SEO para o Claude Code comparadas",
      text: [
        "Estrelas e licenças da API do GitHub em 8 de novembro de 2026, arredondadas. Em repositórios com muitas skills, as estrelas são do repositório inteiro.",
      ],
      headers: ["Skill", "Melhor para", "Precisa de", "Estrelas", "Licença"],
      rows: [
        ["[marketingskills](https://github.com/coreyhaines31/marketingskills) (Corey Haines): seo-audit, ai-seo, programmatic-seo, schema, site-architecture", "Auditorias, busca com IA, páginas em escala e schema, como métodos", "Nada; qualquer agente via CLI de skills", "~59k (repo)", "MIT"],
        ["[Claude SEO](https://github.com/AgriciDaniel/claude-seo)", "Auditorias do site inteiro com agentes em paralelo: técnico, E-E-A-T, schema, GEO, local", "Claude Code 1.0.33+; `/seo setup` adiciona o próprio Python e um navegador headless", "~27k", "MIT"],
        ["[GEO-SEO Claude](https://github.com/zubair-trabzada/geo-seo-claude)", "Auditorias de GEO, checagem de crawlers de IA e relatórios em PDF para clientes", "Python 3.10+, Git; instala com um script de shell", "~12k", "MIT"],
        ["[NotFair](https://github.com/nowork-studio/notfair-plugin)", "SEO, GEO e Google Ads a partir de dados ao vivo do Search Console, GA4 e Ads", "Login no MCP hospedado da NotFair", "~4.1k", "MIT"],
        ["[web-quality-skills: seo](https://github.com/addyosmani/web-quality-skills) (Addy Osmani)", "SEO técnico e on-page a partir do Lighthouse e das diretrizes da Busca Google", "Nada; Lighthouse ou o MCP do Chrome DevTools para checagens ao vivo", "~3k (repo)", "MIT"],
        ["[Claude Blog](https://github.com/AgriciDaniel/claude-blog)", "Posts de blog pesquisados e checados, com nota antes da entrega", "Python 3.11+", "~2.7k", "MIT"],
        ["[opc-skills: seo-geo](https://github.com/ReScienceLab/opc-skills)", "Uma checagem rápida de SEO e GEO mais schema, para fundadores solo", "Python 3", "~1.9k (repo)", "Apache 2.0"],
        ["[GEO Optimizer](https://github.com/Auriti-Labs/geo-optimizer-skill)", "Uma nota de 0 a 100 de prontidão para IA e correções: robots.txt, llms.txt, JSON-LD", "Python 3.10+ e uv; sua própria chave de LLM para checar citações", "~1.3k", "MIT"],
        ["[seo-ops](https://github.com/tigerless-labs/seo-ops)", "26 checagens de SEO e GEO de passa/não passa para uma URL", "Python 3.9+ no macOS ou Linux", "~1k", "Não informada"],
        ["[seo](https://github.com/iannuttall/seo) (Ian Nuttall)", "Seus dados reais do Search Console, Analytics e Bing, mais pesquisa de palavras-chave", "Login do Google no MCP hospedado; chave da DataForSEO ou do Ahrefs para palavras-chave", "~600", "Apache 2.0"],
        ["[GEO Doctor](https://github.com/Fangx-AI/geo-doctor)", "Ser recomendado por assistentes de IA chineses (Doubao, DeepSeek); em chinês e inglês", "Node 18+", "~470", "MIT"],
        ["[SE Ranking SEO skills](https://github.com/seranking/seo-skills)", "Clusters de palavras-chave, lacunas de backlinks e share of voice em IA a partir dos dados da SE Ranking", "Conta na SE Ranking (teste de 14 dias, depois paga)", "~200", "MIT"],
        ["[Marketing Team Skills](https://github.com/ummydev/marketing-team-skills) (nossa)", "Trabalho diário de SEO para um site novo: palavras-chave, páginas, envios para indexação, relatórios; mais vídeo curto", "Nada; qualquer agente via CLI de skills", "Nova (nov. 2026)", "MIT"],
      ],
    },
    {
      kind: "text",
      id: "installs",
      title: "As skills de SEO mais instaladas",
      text: [
        "Instalações pela CLI de skills, segundo o registro do skills.sh em 8 de novembro de 2026. Plugins instalados com `/plugin install`, como o Claude SEO, quase não aparecem aqui, então trate esses números como um piso.",
      ],
      points: [
        "seo-audit (marketingskills): cerca de 249.000",
        "ai-seo (marketingskills): cerca de 160.000",
        "programmatic-seo (marketingskills): cerca de 158.000",
        "site-architecture (marketingskills): cerca de 130.000",
        "schema (marketingskills): cerca de 86.000",
        "seo-geo (opc-skills): cerca de 56.000",
        "seo (web-quality-skills de Addy Osmani): cerca de 54.000",
        "seo (Ian Nuttall): cerca de 24.000",
        "seo (a skill principal do Claude SEO): cerca de 10.000",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Como configurar o Claude Code para SEO",
      steps: [
        {
          title: "Instale uma skill de método",
          text: "Escolha as skills de SEO do marketingskills ou o Claude SEO, não os dois: eles cobrem as mesmas auditorias e vão discordar entre si. Acrescente a skill de Addy Osmani só se quiser checagens técnicas no estilo do Lighthouse por cima.",
          code: install,
        },
        {
          title: "Conecte dados reais",
          text: "Sem dados, as ideias de palavras-chave de um agente são palpites. Conecte o Search Console (o seo de Ian Nuttall ou o `/seo google` do Claude SEO) e uma fonte de palavras-chave como DataForSEO, Ahrefs ou SE Ranking se precisar de volume de busca.",
        },
        {
          title: "Audite e depois corrija em ordem",
          text: "Rode a auditoria no seu próprio site, depois peça ao agente para corrigir os itens do topo e rodar as mesmas checagens de novo. Mudanças de indexação e ranking aparecem no Search Console dias ou semanas depois, não na sessão.",
        },
        {
          title: "Transforme em rotina",
          text: "SEO dá retorno quando você repete o mesmo ciclo toda semana: escolher uma palavra-chave, escrever a página, enviá-la para indexação, ler os números. Escreva o ciclo no CLAUDE.md ou em uma skill e rode-o com agendamento. Veja [como montar um agente de SEO com IA](/blog/ai-seo-agent).",
        },
      ],
      source: { label: "Fonte: marketingskills, de Corey Haines", href: corey },
    },
    {
      kind: "text",
      id: "ours",
      title: "O que o nosso agente de SEO usa no crewmark.ai",
      text: [
        "O SEO do próprio Crewmark é feito por um funcionário de IA: uma sessão do Claude Code com o [cargo de especialista em SEO](/ai-employees/seo-specialist), trabalhando em turnos com heartbeat. O repositório dele tem 25 skills de Corey Haines instaladas, além das nossas Marketing Team Skills.",
      ],
      points: [
        "Em 7 de novembro de 2026 ele rodou as skills de auditoria do marketingskills no crewmark.ai. A auditoria apontou que o site não tinha preços públicos nem página de privacidade; uma [página de preços](/pricing) entrou no ar no dia seguinte.",
        "Todo dia ele escolhe palavras-chave a partir do autocompletar do Google e do Search Console (keyword-research), escreve uma página por palavra-chave (seo-page), envia as URLs novas ao IndexNow, ao Bing e ao Google (index-push) e publica um relatório diário (seo-daily-report).",
        "O site é novo, então ainda não temos resultados de ranking para mostrar. Vamos acrescentar números do Search Console a esta página quando houver algo que valha a pena mostrar.",
      ],
    },
    {
      kind: "text",
      title: "O que saber antes de instalar",
      points: [
        "Skills de dados mandam seus dados para algum lugar: o seo de Ian Nuttall, a NotFair e a Ryze se conectam pelos seus servidores MCP hospedados, e a SE Ranking e a DataForSEO cobram por crédito. Execuções grandes na SE Ranking podem gastar milhares de créditos, segundo o README dela.",
        "GEO-SEO Claude e Agentic SEO Skill são instaladas com `curl ... | bash`. Baixe o script e leia antes de rodar, como o README do Claude SEO recomenda para o próprio instalador.",
        "Não deixe uma skill comprar links. As seo-skills de Illyism incluem a linkdr, que compra backlinks do serviço do autor; links pagos que passam crédito de ranking violam as políticas de spam do Google.",
        "Números de resultado nos READMEs, como ganhos de tráfego, são afirmações dos próprios autores. O relato do Claude SEO de 10.8K cliques no Search Console em 12 semanas é sobre o próprio site dele.",
        "Algumas skills gratuitas vendem algo ao lado: o Claude SEO e o GEO-SEO Claude promovem comunidades pagas, e o GEO Optimizer tem um plano Pro a partir de $19 por mês. As skills em si são open source.",
        "A Anthropic não publica nenhuma skill de SEO; nenhuma destas é oficial.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Com o Crewmark",
      title: "Dê às skills um especialista em SEO que trabalha todo dia",
      text: [
        "Uma skill deixa uma sessão melhor em SEO. O Crewmark transforma o Claude Code ou o Codex em um especialista em SEO com IA, com uma meta em números, como 10% mais cliques no Search Console por mês, horário de trabalho e um quadro de páginas para escrever; ele acorda com um heartbeat, pega a próxima issue e manda mensagem quando precisa de uma aprovação.",
      ],
      steps: [
        {
          title: "Contrate o cargo de especialista em SEO",
          text: "O brief, a meta e a rotina diária já vêm configurados; veja o [especialista em SEO com IA](/ai-employees/seo-specialist) e o [agente de marketing com IA](/ai-employees/marketing-agent).",
        },
        {
          title: "Instale as suas skills de SEO no repositório",
          text: "O funcionário usa as skills em `.claude/skills` como qualquer sessão. Comece pelas [Marketing Team Skills](/skills).",
        },
        {
          title: "Revise páginas e relatórios, não prompts",
          text: "Aprove páginas novas e leia o relatório diário no quadro. Leia [o que é um funcionário de IA](/ai-employees).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Configurar o Claude Code para SEO com skills" },
  mid: {
    title: "Quer um especialista em SEO que rode essas skills todo dia?",
    text: "O especialista em SEO com IA do Crewmark trabalha em turnos com heartbeat, escreve páginas, envia-as para indexação e faz um relatório todo dia.",
    button: "Começar",
  },
  faq: {
    title: "Perguntas frequentes sobre skills de SEO do Claude",
    items: [
      {
        q: "Qual é a melhor skill do Claude para SEO?",
        a: "Para a maioria dos sites, seo-audit, ai-seo e programmatic-seo, de Corey Haines, as skills de SEO mais instaladas no skills.sh. Para uma auditoria completa com agentes em paralelo, o Claude SEO. Acrescente uma fonte de dados, como um MCP do Search Console, para o agente trabalhar com os seus números reais.",
      },
      {
        q: "Existe uma skill oficial do Claude para SEO?",
        a: "Não. O repositório de skills da Anthropic não tem nenhuma skill de SEO em novembro de 2026. O Claude SEO é um projeto open source independente de Agrici Daniel, não um produto da Anthropic.",
      },
      {
        q: "Qual é a diferença entre o Claude SEO e o marketingskills?",
        a: "O Claude SEO é um único plugin feito para auditorias: 26 sub-skills e 19 agentes por trás de um comando `/seo`, com ferramentas próprias em Python e um navegador headless. O marketingskills é uma biblioteca de skills de método separadas, cobrindo marketing como um todo; você instala só as de SEO de que precisa, e elas não exigem configuração.",
      },
      {
        q: "O Claude Code consegue fazer pesquisa de palavras-chave?",
        a: "Ele consegue escolher e agrupar palavras-chave, mas não enxerga volume de busca sozinho. Conecte uma fonte de dados: o Search Console para as consultas em que você já aparece, e DataForSEO, Ahrefs ou SE Ranking para volume. O autocompletar do Google mostra o que as pessoas buscam, não quantas buscam.",
      },
      {
        q: "Qual é a diferença entre uma skill de SEO e uma skill de GEO?",
        a: "Skills de SEO miram ranquear no Google e no Bing; skills de GEO (generative engine optimization) miram ser citado pelo ChatGPT, Perplexity, Gemini e pelos AI Overviews do Google, com checagens como acesso de crawlers de IA, llms.txt e respostas fáceis de citar. A maioria dos pacotes hoje faz as duas coisas.",
      },
      {
        q: "Essas skills de SEO funcionam com o Codex e o Cursor?",
        a: "A maioria funciona. Skills instaladas com a CLI de skills funcionam no Codex, no Cursor e em dezenas de outros agentes, e as baseadas em MCP, como o seo de Ian Nuttall, se conectam a qualquer agente que aceite servidores MCP remotos.",
      },
    ],
  },
  cta: {
    title: "Coloque um especialista em SEO no seu quadro, com as skills em que você confia.",
    text: "O Crewmark transforma sessões do Claude Code, Codex, DeepSeek Harness e OpenCode em funcionários de IA com cargos, metas, horário de trabalho e heartbeat.",
    button: "Começar",
  },
  checked:
    "Conferido no repositório do GitHub de cada skill, na API do GitHub e no registro do skills.sh em 8 de novembro de 2026.",
  disclaimer:
    "O Crewmark é um produto independente, sem vínculo com a Anthropic nem com os autores das skills listadas e sem endosso deles. Os nomes dos produtos são marcas dos respectivos titulares.",
};
