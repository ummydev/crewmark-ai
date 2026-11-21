import type { GuideCopy } from "@/components/landing/guide-article";

// fr translation of /skills/seo; the English master is src/content/skill-pages/seo.ts.

const corey = "https://github.com/coreyhaines31/marketingskills";

const install = `# marketingskills de Corey Haines : uniquement les skills SEO
npx skills add coreyhaines31/marketingskills --skill seo-audit ai-seo programmatic-seo schema site-architecture

# Claude SEO (dans Claude Code)
/plugin marketplace add AgriciDaniel/claude-seo
/plugin install claude-seo@agricidaniel-claude-seo
/seo setup

# Vos vraies données Search Console (seo d’Ian Nuttall, MCP hébergé)
claude mcp add --transport http seoskill https://seoskill.dev/mcp

# La skill SEO d’Addy Osmani, basée sur Lighthouse
npx skills add addyosmani/web-quality-skills --skill seo

# Marketing Team Skills (la nôtre) : routines SEO quotidiennes
npx skills add ummydev/marketing-team-skills`;

export const copy: GuideCopy = {
  meta: {
    title: "Meilleures skills Claude pour le SEO (2026) : audits, GEO, mots-clés",
    description:
      "Les meilleures skills Claude Code pour le SEO et la recherche IA, comparées d’après leurs propres dépôts : seo-audit et ai-seo de Corey Haines, Claude SEO, GEO-SEO Claude, les MCP Search Console, SE Ranking et d’autres, avec nombres d’installations et commandes.",
  },
  breadcrumb: "Skills SEO",
  parent: { name: "Skills Claude", href: "/skills" },
  hero: {
    kicker: "Skills Claude · SEO",
    title: "Les meilleures skills Claude pour le SEO",
    lead: "Une skill SEO est un fichier SKILL.md qui apprend à Claude Code (ou à Codex, Cursor et d’autres agents) à faire une partie du travail de référencement : auditer un site, planifier des pages, écrire du schema ou se faire citer par la recherche IA. Il en existe deux sortes. Les skills de méthode sont des checklists et des playbooks gratuits qui ne demandent aucune clé. Les skills de données relient l’agent à Search Console, DataForSEO, SE Ranking ou Ahrefs via un serveur MCP, pour qu’il travaille sur de vrais chiffres plutôt que sur des suppositions. Une bonne configuration en a une de chaque. Voici celles qui valent la peine d’être installées en 2026, d’après le dépôt de chaque projet.",
    cta: "Commencer",
    secondary: "Comparer les skills",
    secondaryHref: "#compare",
  },
  sections: [
    {
      kind: "text",
      title: "Le choix rapide",
      points: [
        "Un départ sûr : marketingskills de Corey Haines. Ses skills seo-audit, ai-seo et programmatic-seo sont les trois skills SEO les plus installées sur skills.sh.",
        "Un audit complet en une commande : Claude SEO. `/seo audit <url>` envoie jusqu’à 17 agents spécialisés sur le site et renvoie un plan priorisé.",
        "Recherche IA (GEO) : GEO-SEO Claude pour des audits façon agence et des rapports PDF, ou GEO Optimizer pour un score de préparation de 0 à 100 que vous pouvez lancer en CI.",
        "Vos propres chiffres : seo d’Ian Nuttall, un serveur MCP et une CLI Search Console gratuits ; les skills de SE Ranking si vous payez déjà SE Ranking.",
        "Le SEO technique dans les règles : la skill seo d’Addy Osmani, construite sur les audits Lighthouse et les consignes de Google.",
        "Faire du SEO tous les jours, pas une seule fois : Marketing Team Skills (la nôtre) couvre le choix de mots-clés qu’un nouveau site peut gagner, une page par mot-clé, les envois à l’index et un rapport quotidien.",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Comparatif des skills SEO pour Claude Code",
      text: [
        "Étoiles et licences issues de l’API GitHub au 8 novembre 2026, arrondies. Pour les dépôts qui contiennent de nombreuses skills, les étoiles concernent tout le dépôt.",
      ],
      headers: ["Skill", "Idéale pour", "Prérequis", "Étoiles", "Licence"],
      rows: [
        ["[marketingskills](https://github.com/coreyhaines31/marketingskills) (Corey Haines) : seo-audit, ai-seo, programmatic-seo, schema, site-architecture", "Audits, recherche IA, pages à grande échelle et schema, sous forme de méthodes", "Rien ; tout agent via la CLI skills", "~59k (dépôt)", "MIT"],
        ["[Claude SEO](https://github.com/AgriciDaniel/claude-seo)", "Audits de site complets avec des agents en parallèle : technique, E-E-A-T, schema, GEO, local", "Claude Code 1.0.33+ ; `/seo setup` ajoute son propre Python et un navigateur headless", "~27k", "MIT"],
        ["[GEO-SEO Claude](https://github.com/zubair-trabzada/geo-seo-claude)", "Audits GEO, vérification des robots d’IA et rapports PDF pour les clients", "Python 3.10+, Git ; s’installe avec un script shell", "~12k", "MIT"],
        ["[NotFair](https://github.com/nowork-studio/notfair-plugin)", "SEO, GEO et Google Ads à partir des données Search Console, GA4 et Ads en direct", "Connexion au MCP hébergé de NotFair", "~4.1k", "MIT"],
        ["[web-quality-skills : seo](https://github.com/addyosmani/web-quality-skills) (Addy Osmani)", "SEO technique et on-page d’après Lighthouse et les consignes de Google Search", "Rien ; Lighthouse ou le MCP Chrome DevTools pour les vérifications en direct", "~3k (dépôt)", "MIT"],
        ["[Claude Blog](https://github.com/AgriciDaniel/claude-blog)", "Articles de blog documentés et vérifiés, notés avant livraison", "Python 3.11+", "~2.7k", "MIT"],
        ["[opc-skills : seo-geo](https://github.com/ReScienceLab/opc-skills)", "Une vérification SEO et GEO rapide plus du schema, pour les fondateurs solo", "Python 3", "~1.9k (dépôt)", "Apache 2.0"],
        ["[GEO Optimizer](https://github.com/Auriti-Labs/geo-optimizer-skill)", "Un score de préparation à l’IA de 0 à 100 et des correctifs : robots.txt, llms.txt, JSON-LD", "Python 3.10+ et uv ; votre propre clé LLM pour vérifier les citations", "~1.3k", "MIT"],
        ["[seo-ops](https://github.com/tigerless-labs/seo-ops)", "26 vérifications SEO et GEO réussi/échoué pour une URL", "Python 3.9+ sous macOS ou Linux", "~1k", "Non précisée"],
        ["[seo](https://github.com/iannuttall/seo) (Ian Nuttall)", "Vos vraies données Search Console, Analytics et Bing, plus la recherche de mots-clés", "Connexion Google au MCP hébergé ; clé DataForSEO ou Ahrefs pour les mots-clés", "~600", "Apache 2.0"],
        ["[GEO Doctor](https://github.com/Fangx-AI/geo-doctor)", "Être recommandé par les assistants IA chinois (Doubao, DeepSeek) ; chinois et anglais", "Node 18+", "~470", "MIT"],
        ["[SE Ranking SEO skills](https://github.com/seranking/seo-skills)", "Clusters de mots-clés, écarts de backlinks et part de voix dans l’IA à partir des données SE Ranking", "Compte SE Ranking (essai de 14 jours, puis payant)", "~200", "MIT"],
        ["[Marketing Team Skills](https://github.com/ummydev/marketing-team-skills) (la nôtre)", "Le SEO quotidien d’un nouveau site : mots-clés, pages, envois à l’index, rapports ; plus la vidéo courte", "Rien ; tout agent via la CLI skills", "Nouvelle (nov. 2026)", "MIT"],
      ],
    },
    {
      kind: "text",
      id: "installs",
      title: "Les skills SEO les plus installées",
      text: [
        "Installations via la CLI skills, d’après le registre skills.sh au 8 novembre 2026. Les plugins installés avec `/plugin install`, comme Claude SEO, n’y apparaissent généralement pas : considérez ces chiffres comme un plancher.",
      ],
      points: [
        "seo-audit (marketingskills) : environ 249 000",
        "ai-seo (marketingskills) : environ 160 000",
        "programmatic-seo (marketingskills) : environ 158 000",
        "site-architecture (marketingskills) : environ 130 000",
        "schema (marketingskills) : environ 86 000",
        "seo-geo (opc-skills) : environ 56 000",
        "seo (web-quality-skills d’Addy Osmani) : environ 54 000",
        "seo (Ian Nuttall) : environ 24 000",
        "seo (la skill principale de Claude SEO) : environ 10 000",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Configurer Claude Code pour le SEO",
      steps: [
        {
          title: "Installez une skill de méthode",
          text: "Choisissez les skills SEO de marketingskills ou Claude SEO, pas les deux : elles couvrent les mêmes audits et se contrediront. N’ajoutez la skill d’Addy Osmani que si vous voulez en plus des vérifications techniques façon Lighthouse.",
          code: install,
        },
        {
          title: "Branchez de vraies données",
          text: "Sans données, les idées de mots-clés d’un agent ne sont que des suppositions. Connectez Search Console (seo d’Ian Nuttall ou `/seo google` de Claude SEO), ainsi qu’une source de mots-clés comme DataForSEO, Ahrefs ou SE Ranking si vous avez besoin des volumes de recherche.",
        },
        {
          title: "Auditez, puis corrigez dans l’ordre",
          text: "Lancez l’audit sur votre propre site, puis demandez à l’agent de corriger les premiers points et de relancer les mêmes vérifications. Les changements d’indexation et de classement apparaissent dans Search Console des jours ou des semaines plus tard, pas pendant la session.",
        },
        {
          title: "Faites-en une routine",
          text: "Le SEO paie quand on répète la même boucle chaque semaine : choisir un mot-clé, écrire la page, l’envoyer à l’index, lire les chiffres. Décrivez cette boucle dans CLAUDE.md ou dans une skill, et lancez-la à intervalles réguliers. Voir [comment construire un agent SEO IA](/blog/ai-seo-agent).",
        },
      ],
      source: { label: "Source : marketingskills de Corey Haines", href: corey },
    },
    {
      kind: "text",
      id: "ours",
      title: "Ce qu’utilise notre agent SEO sur crewmark.ai",
      text: [
        "Le SEO de Crewmark est assuré par un employé IA : une session Claude Code dotée du [rôle de spécialiste SEO](/ai-employees/seo-specialist), qui travaille par créneaux au rythme d’une pulsation. Son dépôt contient 25 skills de Corey Haines, plus nos Marketing Team Skills.",
      ],
      points: [
        "Le 7 novembre 2026, il a lancé les skills d’audit de marketingskills sur crewmark.ai. L’audit a signalé que le site n’avait ni tarifs publics ni page de confidentialité ; une [page de tarifs](/pricing) a été mise en ligne le lendemain.",
        "Chaque jour, il choisit des mots-clés à partir de l’autocomplétion Google et de Search Console (keyword-research), écrit une page par mot-clé (seo-page), soumet les nouvelles URL à IndexNow, Bing et Google (index-push) et publie un rapport quotidien (seo-daily-report).",
        "Le site est récent, nous ne pouvons donc pas encore montrer de résultats de classement. Nous ajouterons des chiffres Search Console à cette page dès qu’il y en aura qui méritent d’être montrés.",
      ],
    },
    {
      kind: "text",
      title: "À savoir avant d’installer",
      points: [
        "Les skills de données envoient vos données quelque part : seo d’Ian Nuttall, NotFair et Ryze passent par leurs serveurs MCP hébergés, et SE Ranking et DataForSEO facturent au crédit. D’après son README, une grosse exécution SE Ranking peut consommer des milliers de crédits.",
        "GEO-SEO Claude et Agentic SEO Skill s’installent avec `curl ... | bash`. Téléchargez le script et lisez-le avant de l’exécuter, comme le recommande le README de Claude SEO pour son propre installateur.",
        "Ne laissez pas une skill acheter des liens. Les seo-skills d’Illyism incluent linkdr, qui achète des backlinks auprès du service de l’auteur ; les liens payants qui transmettent du crédit de classement enfreignent les règles de Google contre le spam.",
        "Les chiffres de résultats dans les README, comme les gains de trafic, sont les affirmations des auteurs eux-mêmes. Les 10.8K clics Search Console en 12 semaines annoncés par Claude SEO concernent son propre site.",
        "Certaines skills gratuites vendent quelque chose à côté : Claude SEO et GEO-SEO Claude font la promotion de communautés payantes, et GEO Optimizer propose une offre Pro à partir de $19 par mois. Les skills elles-mêmes sont open source.",
        "Anthropic ne publie pas de skill SEO ; aucune de celles-ci n’est officielle.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Avec Crewmark",
      title: "Donnez à vos skills un spécialiste SEO qui travaille tous les jours",
      text: [
        "Une skill rend une session meilleure en SEO. Crewmark transforme Claude Code ou Codex en spécialiste SEO IA doté d’un objectif chiffré, par exemple 10 % de clics Search Console en plus par mois, d’horaires de travail et d’un tableau de pages à écrire ; il se réveille au rythme d’une pulsation, prend le ticket suivant et vous écrit quand il a besoin d’une approbation.",
      ],
      steps: [
        {
          title: "Recrutez le rôle de spécialiste SEO",
          text: "Sa fiche de poste, son objectif et sa routine quotidienne sont déjà configurés ; voir le [spécialiste SEO IA](/ai-employees/seo-specialist) et l’[agent marketing IA](/ai-employees/marketing-agent).",
        },
        {
          title: "Installez vos skills SEO dans le dépôt",
          text: "L’employé utilise les skills de `.claude/skills` comme n’importe quelle session. Commencez par [Marketing Team Skills](/skills).",
        },
        {
          title: "Relisez des pages et des rapports, pas des prompts",
          text: "Approuvez les nouvelles pages et lisez le rapport quotidien sur le tableau. Lisez [ce qu’est un employé IA](/ai-employees).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Configurer Claude Code pour le SEO avec des skills" },
  mid: {
    title: "Vous voulez un spécialiste SEO qui fait tourner ces skills tous les jours ?",
    text: "Le spécialiste SEO IA de Crewmark travaille par créneaux au rythme d’une pulsation, écrit des pages, les envoie à l’index et fait un rapport chaque jour.",
    button: "Commencer",
  },
  faq: {
    title: "FAQ sur les skills SEO Claude",
    items: [
      {
        q: "Quelle est la meilleure skill Claude pour le SEO ?",
        a: "Pour la plupart des sites, seo-audit, ai-seo et programmatic-seo de Corey Haines, les skills SEO les plus installées sur skills.sh. Pour un audit complet avec des agents en parallèle, Claude SEO. Ajoutez une source de données comme un MCP Search Console pour que l’agent travaille sur vos vrais chiffres.",
      },
      {
        q: "Existe-t-il une skill SEO officielle pour Claude ?",
        a: "Non. Le dépôt de skills d’Anthropic ne contient aucune skill SEO en novembre 2026. Claude SEO est un projet open source indépendant d’Agrici Daniel, pas un produit Anthropic.",
      },
      {
        q: "Quelle différence entre Claude SEO et marketingskills ?",
        a: "Claude SEO est un plugin unique conçu pour les audits : 26 sous-skills et 19 agents derrière une commande `/seo`, avec ses propres outils Python et un navigateur headless. marketingskills est une bibliothèque de skills de méthode distinctes couvrant tout le marketing ; vous n’installez que les skills SEO dont vous avez besoin, sans aucune configuration.",
      },
      {
        q: "Claude Code peut-il faire de la recherche de mots-clés ?",
        a: "Il peut choisir et regrouper des mots-clés, mais il ne voit pas les volumes de recherche par lui-même. Branchez une source de données : Search Console pour les requêtes sur lesquelles vous apparaissez déjà, et DataForSEO, Ahrefs ou SE Ranking pour les volumes. L’autocomplétion Google montre ce que les gens cherchent, pas combien ils sont.",
      },
      {
        q: "Quelle différence entre une skill SEO et une skill GEO ?",
        a: "Les skills SEO visent le classement dans Google et Bing ; les skills GEO (generative engine optimization) visent les citations par ChatGPT, Perplexity, Gemini et les AI Overviews de Google, avec des vérifications comme l’accès des robots d’IA, llms.txt et des réponses faciles à citer. La plupart des packs font désormais les deux.",
      },
      {
        q: "Ces skills SEO fonctionnent-elles avec Codex et Cursor ?",
        a: "La plupart, oui. Les skills installées avec la CLI skills fonctionnent dans Codex, Cursor et des dizaines d’autres agents, et celles basées sur MCP, comme seo d’Ian Nuttall, se connectent à tout agent qui prend en charge les serveurs MCP distants.",
      },
    ],
  },
  cta: {
    title: "Mettez un spécialiste SEO sur votre tableau, avec les skills auxquelles vous faites confiance.",
    text: "Crewmark transforme les sessions Claude Code, Codex, DeepSeek Harness et OpenCode en employés IA avec des rôles, des objectifs, des horaires de travail et une pulsation.",
    button: "Commencer",
  },
  checked:
    "Vérifié dans le dépôt GitHub de chaque skill, via l’API GitHub et dans le registre skills.sh le 8 novembre 2026.",
  disclaimer:
    "Crewmark est un produit indépendant, sans lien avec Anthropic ni avec les auteurs des skills présentées, et non approuvé par eux. Les noms de produits sont des marques de leurs propriétaires.",
};
