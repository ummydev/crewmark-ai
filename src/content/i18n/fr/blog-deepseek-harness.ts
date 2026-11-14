import type { GuideCopy } from "@/components/landing/guide-article";

// French translation of /blog/deepseek-harness; the English master is src/content/blog/deepseek-harness.ts.

const repo = "https://github.com/deepseek-ai/deepseek-harness";

const install = `# Lancer l’interface web avec Node.js
npx @deepseek-ai/dsh web
# puis ouvrir http://127.0.0.1:3080

# Ou compiler depuis les sources
git clone https://github.com/deepseek-ai/deepseek-harness.git
cd deepseek-harness && pnpm install && pnpm run build && pnpm dsh web`;

const headless = `# Une tâche, sans interface, avec un mode de permissions
dsh headless "Add tests for src/auth" --permission-mode workspace-write

# Diffuser les événements en JSON, par ex. pour des scripts
dsh headless "Summarize open TODOs" --json

# Ajouter un plugin à un profil
dsh plugin --profile default add <package>`;

export const copy: GuideCopy = {
  meta: {
    title: "DeepSeek Harness : installation, tarifs, vs Claude Code",
    description:
      "DeepSeek Harness (dsh) expliqué : le harness d’agents open source de DeepSeek, application de bureau et CLI, installation, tarifs de l’API DeepSeek, plugins, super-agent et comparaison avec Claude Code, Codex et OpenCode.",
  },
  breadcrumb: "Guide DeepSeek Harness",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-06" },
  hero: {
    kicker: "Blog · DeepSeek",
    title: "DeepSeek Harness : ce que c’est, comment l’installer et comment il se compare",
    lead: "DeepSeek Harness (`dsh`) est le harness d’agents open source de DeepSeek : une application qui fait tourner des agents IA pour les tâches du quotidien, le code, la recherche et le travail en arrière-plan, conçue pour que presque tout, des outils à l’interface, soit un plugin. Il est sous licence MIT, en préversion développeur et compte parmi les dépôts les plus étoilés de GitHub ; les recherches à son sujet ont grimpé depuis l’apparition du prototype Super-agent de DeepSeek le 31 octobre 2026. Ce guide explique ce que c’est, l’application de bureau et la CLI, l’installation, ce qu’il coûte, ses principales fonctionnalités et comment il se compare à Claude Code, Codex et OpenCode.",
    cta: "Commencer",
    secondary: "Aller à l’installation",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "table",
      id: "at-a-glance",
      title: "DeepSeek Harness en un coup d’œil",
      headers: ["", "DeepSeek Harness"],
      rows: [
        ["Éditeur", "DeepSeek AI"],
        ["Ce que c’est", "Un harness d’agents open source à l’architecture « tout est un plugin », construit sur le framework Cordis"],
        ["Licence", "MIT ; environ 275 000 étoiles GitHub au 6 novembre 2026"],
        ["Statut", "Préversion développeur ; DeepSeek prévient que des changements incompatibles sont à prévoir, et toutes les versions sont marquées prerelease (la dernière, v0.2.2-rc.1, date du 4 novembre 2026)"],
        ["Façons de l’utiliser", "Application de bureau (macOS Apple silicon, Windows x64), interface web (`dsh web`), CLI headless, modes ACP et SDK"],
        ["Modèles par défaut", "`deepseek-flash` (DeepSeek-V4.1-Flash) et `deepseek-v4-pro`, chacun avec un contexte de 1 048 576 tokens"],
        ["Autres fournisseurs", "Anthropic, OpenAI, Kimi, GLM, ou tout endpoint compatible OpenAI ou Anthropic, y compris un serveur auto-hébergé"],
        ["Prix", "Logiciel gratuit ; vous payez l’usage de l’API DeepSeek (ou d’un autre fournisseur)"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Comment installer et utiliser DeepSeek Harness",
      steps: [
        {
          title: "Choisissez le bureau ou le web",
          text: "Téléchargez l’application de bureau sur deepseek.com/en/harness pour macOS (Apple silicon) ou Windows (64 bits) ; sur macOS, elle peut aussi installer une commande `dsh`. Sur n’importe quelle machine avec Node.js, lancez l’interface web avec npx, ou compilez depuis les sources.",
          code: install,
        },
        {
          title: "Connectez-vous ou ajoutez une clé d’API",
          text: "Au premier lancement, connectez-vous avec votre compte DeepSeek dans le navigateur, ou collez une clé d’API de platform.deepseek.com dans Settings → Models (Réglages → Modèles). Les clés sont stockées dans `~/.dsh/.credentials.yaml` (`$DSH_HOME`).",
        },
        {
          title: "Donnez-lui les instructions du projet",
          text: "DeepSeek Harness lit `AGENTS.md` ou `CLAUDE.md` dans votre projet (ainsi que les variantes `.local.md`), et un fichier global `~/.dsh/AGENTS.md`. Les instructions déjà écrites pour Claude Code ou Codex restent valables ; voir le [guide CLAUDE.md](/blog/claude-md) et le [guide AGENTS.md pour Codex](/blog/codex-agents-md).",
        },
        {
          title: "Choisissez ce qu’il a le droit de faire",
          text: "Choisissez un mode de sandbox (`read-only`, `workspace-write` ou `danger-full-access`) et une politique d’approbation (`ask` ou `never`). Les notes de sécurité de DeepSeek indiquent que le harness est expérimental, n’a pas fait l’objet d’un audit de sécurité et que la sandbox ne garantit pas l’isolation : commencez donc en lecture seule sur le code qui compte pour vous.",
        },
        {
          title: "Lancez des tâches en headless et ajoutez des plugins",
          text: "Utilisez `dsh headless` pour des tâches ponctuelles dans des scripts, `--resume` ou `--session-id` pour reprendre une session, et `dsh plugin` pour ajouter des plugins comme les tâches programmées, les sous-agents ou les équipes d’agents.",
          code: headless,
        },
      ],
      source: { label: "Source : dépôt et documentation de DeepSeek Harness", href: repo },
    },
    {
      kind: "table",
      id: "pricing",
      title: "Tarifs de DeepSeek Harness : ce que coûte son utilisation",
      text: [
        "Le harness est gratuit et open source. L’usage est facturé par l’API DeepSeek aux tarifs suivants, en dollars américains par million de tokens (api-docs.deepseek.com, 6 novembre 2026). Les tarifs heures creuses valent la moitié des tarifs heures pleines ; les heures pleines vont de 01:00 à 04:00 et de 06:00 à 10:00 UTC en semaine, hors jours fériés chinois. DeepSeek ne documente aucun quota gratuit : « l’utiliser gratuitement » signifie donc en pratique un logiciel gratuit plus le crédit d’API dont vous disposez.",
      ],
      headers: ["Par million de tokens", "deepseek-flash, heures pleines", "deepseek-flash, heures creuses", "deepseek-v4-pro, heures pleines", "deepseek-v4-pro, heures creuses"],
      rows: [
        ["Entrée, cache hit", "0,006 $", "0,003 $", "0,044 $", "0,022 $"],
        ["Entrée, cache miss", "0,30 $", "0,15 $", "1,32 $", "0,66 $"],
        ["Sortie", "1,20 $", "0,60 $", "3,96 $", "1,98 $"],
      ],
    },
    {
      kind: "text",
      title: "Principales fonctionnalités",
      points: [
        "Des plugins pour tout : outils, modèles, interfaces et comportements sont des plugins ; installez-les par profil ou créez-en un en le demandant dans le chat (« Creator mode », le mode créateur). Les plugins de la communauté utilisent le topic GitHub `dsh-plugin`.",
        "Parmi les plugins officiels et expérimentaux listés par DeepSeek : équipes d’agents, revue d’approbation automatique, tâches programmées, saisie vocale, un terminal, une boucle d’agent et des sous-agents.",
        "Skills (dossiers `SKILL.md`), serveurs MCP et hooks, dont une passerelle expérimentale qui exécute les hooks Claude Code existants.",
        "Sous-agents dans le même processus, ou adossés à ACP, Codex, Claude Code ou un autre Harness.",
        "Sessions que l’on peut reprendre, compaction, mode headless avec événements JSON, et un SDK pour construire par-dessus.",
        "Le Super-agent : un bundle MIT distinct, dsh-superagent, rend le harness proactif sur un dépôt GitHub ; DeepSeek le qualifie de prototype de recherche. Voir [DeepSeek Super-Agent expliqué](/blog/deepseek-super-agent).",
        "L’article souvent cité avec lui, \"A Programming Paradigm for Spatiotemporal Composability\" (arXiv, août 2026), décrit Cordis, le framework sous-jacent, et non le harness lui-même.",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "DeepSeek Harness vs Claude Code vs Codex vs OpenCode",
      text: [
        "DeepSeek ne publie pas de comparaison ; voici notre lecture de la documentation de chaque outil au 6 novembre 2026. DeepSeek documente aussi l’utilisation de ses modèles dans Claude Code, Codex et OpenCode : vous pouvez donc les combiner.",
      ],
      headers: ["", "DeepSeek Harness", "Claude Code", "Codex", "OpenCode"],
      rows: [
        ["Éditeur", "DeepSeek", "Anthropic", "OpenAI", "Anomaly (open source)"],
        ["Licence", "MIT", "Propriétaire", "CLI Apache-2.0", "MIT"],
        ["Mode de paiement", "Usage de l’API DeepSeek (ou d’autres fournisseurs)", "Forfait Claude à partir de 20 $/mois, ou API", "Forfait ChatGPT (à partir de Free), ou API", "Vos clés d’API, ou connexion Copilot ou ChatGPT"],
        ["Interfaces", "Bureau (macOS, Windows), interface web, CLI headless", "Terminal, IDE, bureau, web, mobile", "CLI, IDE, bureau, web, mobile", "Terminal, bureau, IDE, web"],
        ["Fichier d’instructions", "AGENTS.md ou CLAUDE.md", "CLAUDE.md (AGENTS.md en repli)", "AGENTS.md", "AGENTS.md"],
        ["Extensibilité", "Plugins pour tout, skills, MCP, hooks", "Skills, plugins, MCP, hooks", "Skills, plugins, MCP, hooks", "Plugins, MCP"],
        ["Maturité", "Préversion développeur, changements incompatibles à prévoir", "Disponible pour tous", "Disponible pour tous", "Open source actif"],
      ],
    },
    {
      kind: "text",
      title: "Les questions les plus recherchées",
      points: [
        "Linux : pas encore de version de bureau pour Linux ; sous Linux, lancez l’interface web avec `npx @deepseek-ai/dsh web` ou compilez depuis les sources.",
        "VS Code : DeepSeek ne propose pas d’extension VS Code ; utilisez l’interface de bureau ou web à côté de votre éditeur, ou les modèles DeepSeek dans un agent d’éditeur documenté par DeepSeek, comme Claude Code ou Codex.",
        "Ollama et modèles locaux : non documenté. Le harness accepte un endpoint personnalisé compatible OpenAI ou Anthropic pour un serveur auto-hébergé, ce qui est la voie documentée pour vos propres modèles.",
        "TUI : aucune interface terminal n’est fournie par défaut ; un profil personnalisé ou le plugin expérimental de terminal sont les options documentées.",
        "Article : voir l’article sur Cordis ci-dessus ; DeepSeek demande de citer le harness lui-même sous le titre \"DeepSeek Harness: Everything is a Plugin\".",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Avec Crewmark",
      title: "Confiez un poste à DeepSeek Harness, pas seulement une tâche",
      text: [
        "Crewmark prend en charge DeepSeek Harness aux côtés de Claude Code, Codex et OpenCode. Il transforme une session en employé IA doté d’un rôle, d’un objectif et d’horaires de travail, et la réveille avec une pulsation (heartbeat) pour qu’elle prenne la prochaine issue d’un tableau partagé.",
      ],
      steps: [
        {
          title: "Choisissez DeepSeek Harness comme agent",
          text: "Lancez la commande d’installation dans votre projet ; l’employé tourne dans une session DeepSeek Harness sur votre machine, facturée sur votre compte API DeepSeek.",
        },
        {
          title: "Donnez-lui un rôle et un objectif",
          text: "Un ingénieur logiciel, un spécialiste SEO, un growth marketer : chacun avec un chiffre à faire progresser. Lisez [ce qu’est un employé IA](/ai-employees).",
        },
        {
          title: "Laissez la pulsation lancer le travail",
          text: "Pendant ses horaires de travail, il se réveille toutes les 15, 30 ou 60 minutes, prend la prochaine issue et vous écrit quand il a besoin d’une décision. Comparez les approches dans [qu’est-ce qu’un superagent](/blog/superagent).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Installer et utiliser DeepSeek Harness" },
  mid: {
    title: "Vous utilisez DeepSeek Harness ? Mettez-le sur le tableau.",
    text: "Crewmark réveille DeepSeek Harness, Claude Code ou Codex avec une pulsation, un rôle, un objectif et un tableau d’issues.",
    button: "Commencer",
  },
  faq: {
    title: "FAQ DeepSeek Harness",
    items: [
      {
        q: "Qu’est-ce que DeepSeek Harness ?",
        a: "Un harness d’agents open source de DeepSeek AI (`dsh`, licence MIT) pour les tâches du quotidien, le code, la recherche et le travail en arrière-plan, construit autour de plugins. Il est en préversion développeur.",
      },
      {
        q: "DeepSeek Harness est-il gratuit ?",
        a: "Le logiciel est gratuit et open source. Pour fonctionner, il utilise l’API d’un modèle, par défaut celle de DeepSeek, facturée au token ; DeepSeek ne documente aucun quota gratuit.",
      },
      {
        q: "Comment installer DeepSeek Harness ?",
        a: "Téléchargez l’application de bureau pour macOS (Apple silicon) ou Windows sur deepseek.com/en/harness, ou lancez `npx @deepseek-ai/dsh web` avec Node.js et ouvrez http://127.0.0.1:3080.",
      },
      {
        q: "DeepSeek Harness fonctionne-t-il sous Linux ?",
        a: "Il n’existe pas de version de bureau pour Linux, mais l’interface web et la CLI tournent sous Linux via npx ou une compilation depuis les sources.",
      },
      {
        q: "DeepSeek Harness vs Claude Code : lequel est le meilleur ?",
        a: "Ils répondent à des besoins différents. DeepSeek Harness est open source, peu cher au token avec les modèles DeepSeek et extensible par plugins, mais en préversion développeur. Claude Code est un produit mûr inclus dans les forfaits Claude. Les modèles DeepSeek peuvent aussi tourner dans Claude Code.",
      },
      {
        q: "DeepSeek Harness peut-il utiliser les modèles Claude ou GPT ?",
        a: "Oui. Il intègre des fournisseurs pour Anthropic, OpenAI, Kimi et GLM, et accepte tout endpoint compatible OpenAI ou Anthropic.",
      },
      {
        q: "Qu’est-ce que le super agent de DeepSeek ?",
        a: "dsh-superagent, un bundle prototype de recherche pour DeepSeek Harness publié le 31 octobre 2026, qui le rend proactif sur un dépôt GitHub. Voir [DeepSeek Super-Agent expliqué](/blog/deepseek-super-agent).",
      },
    ],
  },
  cta: {
    title: "Faites de DeepSeek Harness un employé IA.",
    text: "Crewmark transforme des sessions DeepSeek Harness, Claude Code, Codex et OpenCode en employés IA dotés de rôles, d’objectifs, d’horaires de travail et d’une pulsation.",
    button: "Commencer",
  },
  checked: "Vérifié sur deepseek.com, dans le dépôt deepseek-ai/deepseek-harness, la documentation de l’API DeepSeek et sur arXiv le 6 novembre 2026.",
  disclaimer:
    "Crewmark est un produit indépendant, sans lien avec DeepSeek, Anthropic ou OpenAI et non approuvé par eux. Les noms de produits sont des marques de leurs propriétaires.",
};
