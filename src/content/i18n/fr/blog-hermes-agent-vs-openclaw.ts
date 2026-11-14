import type { GuideCopy } from "@/components/landing/guide-article";

// French translation of /blog/hermes-agent-vs-openclaw; the English master is src/content/blog/hermes-agent-vs-openclaw.ts.

const hermes = "https://github.com/NousResearch/hermes-agent";

const install = `# OpenClaw (macOS, Linux, WSL2)
curl -fsSL https://openclaw.ai/install.sh | bash

# Hermes Agent (Linux, macOS, WSL2)
curl -fsSL https://hermes-agent.nousresearch.com/install.sh | bash

# Move an OpenClaw setup to Hermes: preview first
hermes import-agent openclaw --dry-run`;

export const copy: GuideCopy = {
  meta: {
    title: "Hermes Agent vs OpenClaw vs Claude Code (2026) | Crewmark AI",
    description:
      "Hermes Agent vs OpenClaw, et comment les deux se comparent à Claude Code : à quoi sert chacun, modèles et abonnements, mémoire et skills, sécurité, et comment migrer d’OpenClaw vers Hermes. D’après la documentation de chaque projet.",
  },
  breadcrumb: "Hermes Agent vs OpenClaw",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-07" },
  hero: {
    kicker: "Blog · Agents IA",
    title: "Hermes Agent vs OpenClaw vs Claude Code : lequel vous faut-il ?",
    lead: "OpenClaw et Hermes Agent sont les deux plus grands agents IA personnels open source : tous deux tournent sur votre propre machine et vous répondent dans Telegram, Slack, WhatsApp et d’autres applications de messagerie. OpenClaw a la plus grande communauté (environ 394 000 étoiles sur GitHub) ; Hermes Agent, de Nous Research (environ 261 000), est construit autour d’une boucle d’apprentissage qui transforme l’expérience en skills. Claude Code est un autre type d’outil : un agent de code qui travaille dans votre dépôt. Ce guide compare les trois d’après leur propre documentation, pour que vous choisissiez le bon, ou la bonne combinaison.",
    cta: "Commencer",
    secondary: "Voir la comparaison",
    secondaryHref: "#compare",
  },
  sections: [
    {
      kind: "text",
      title: "La réponse courte",
      points: [
        "Choisissez OpenClaw pour le plus large éventail de canaux et d’intégrations et la plus grande communauté : Discord, iMessage, Slack, Teams, Telegram, WhatsApp, Signal et plus de 20 autres.",
        "Choisissez Hermes Agent si vous voulez un assistant qui apprend : il crée des skills à partir de l’expérience, les améliore à mesure qu’il les utilise et tient une mémoire organisée, avec un planificateur cron intégré.",
        "Choisissez Claude Code pour le travail logiciel dans un dépôt : lire et modifier du code, lancer les tests, ouvrir des pull requests.",
        "Vous voulez que Claude Code ou Codex continuent à travailler sur une tâche sans qu’on les relance, depuis un tableau d’équipe ? C’est un employé IA ; voir la fin de cette page.",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Hermes Agent vs OpenClaw vs Claude Code",
      text: ["D’après le README et la documentation de chaque projet, et l’API GitHub, au 7 novembre 2026."],
      headers: ["", "OpenClaw", "Hermes Agent", "Claude Code"],
      rows: [
        ["Créé par", "Peter Steinberger et la communauté ; OpenClaw Foundation", "Nous Research", "Anthropic"],
        ["Ce que c’est", "Assistant IA personnel dans vos applications de messagerie", "Agent personnel qui s’améliore lui-même grâce à une boucle d’apprentissage", "Agent de code pour votre dépôt"],
        ["Où lui parler", "Plus de 20 canaux de messagerie, plus Control UI, CLI et applications", "Telegram, Discord, Slack, WhatsApp, Signal, e-mail, CLI ; application de bureau", "Terminal, IDE, application de bureau ; Remote Control depuis votre téléphone"],
        ["Modèles", "Interchangeables : Claude, OpenAI et Codex, modèles locaux", "N’importe quel fournisseur : Nous Portal, OpenRouter, OpenAI, endpoints personnalisés", "Modèles Claude"],
        ["Abonnement Claude", "Clé d’API, ou réutilisation d’une connexion Claude Code sur la même machine", "Uniquement Claude Max avec usage supplémentaire acheté ; pas Pro", "Inclus dans les forfaits Claude"],
        ["Mémoire et skills", "Mémoire locale ; skills et plugins partagés sur ClawHub", "Mémoire organisée par l’agent ; crée et améliore des skills (standard agentskills.io)", "CLAUDE.md, skills, hooks, sous-agents"],
        ["Planification", "Le Gateway tourne comme un daemon", "Planificateur cron intégré", "`/loop` et tâches planifiées"],
        ["Isolation", "Les outils s’exécutent sur l’hôte, sauf si vous configurez le sandboxing", "Approbation pour les commandes dangereuses ; Docker ou Modal en option", "Modes et règles de permissions ; sandboxing"],
        ["Licence, étoiles", "MIT, ~394k", "MIT, ~261k", "Commerciale"],
      ],
    },
    {
      kind: "text",
      title: "Hermes Agent vs OpenClaw : les vraies différences",
      points: [
        "Apprentissage : la fonction phare de Hermes est sa boucle d’apprentissage ; il écrit des skills après des tâches complexes et les affine. La force d’OpenClaw, c’est l’étendue : plus de canaux, des plugins sur ClawHub et des applications natives pour ordinateur et mobile.",
        "Sécurité par défaut : OpenClaw traite les messages entrants comme non fiables et associe les expéditeurs inconnus, mais exécute les outils sur l’hôte pour la session principale, sauf si vous mettez en place le sandboxing. Hermes demande avant les commandes dangereuses par défaut et peut isoler les outils dans Docker ou Modal. OpenClaw publie ouvertement ses correctifs de sécurité : 722 avis depuis janvier 2026, tous les critiques corrigés.",
        "Abonnements : OpenClaw peut réutiliser une connexion Claude Code locale ; Hermes n’accepte un abonnement Claude qu’avec Max et de l’usage supplémentaire acheté, et les deux prennent en charge la connexion ChatGPT/Codex.",
        "Gouvernance : OpenClaw est dirigé par l’OpenClaw Foundation, indépendante, dont OpenAI est donateur ; Hermes Agent est développé par Nous Research.",
        "Migration : Hermes dispose d’un importateur en une commande pour les configurations OpenClaw (persona, souvenirs, skills et réglages de messagerie).",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Comment essayer les deux, ou passer d’OpenClaw à Hermes",
      steps: [
        {
          title: "Installez-les côte à côte",
          text: "Les deux s’installent en une commande et font tourner leur propre gateway, vous pouvez donc les tester sur la même machine avec des comptes de messagerie différents.",
          code: install,
        },
        {
          title: "Connectez d’abord un seul canal",
          text: "Commencez avec une seule application de messagerie et n’autorisez que votre propre compte ; les deux associent les expéditeurs inconnus ou les filtrent par liste d’autorisation.",
        },
        {
          title: "Prévisualisez la migration",
          text: "`hermes import-agent openclaw --dry-run` montre ce qui serait transféré ; ajoutez `--migrate-secrets` seulement si vous voulez aussi copier vos clés d’API.",
        },
        {
          title: "Décidez de l’isolation avant de lui confier de vrais comptes",
          text: "Activez le sandboxing d’OpenClaw ou le backend Docker de Hermes avant que l’agent ne lise les messages d’autres personnes. Pour une option conteneurisée dès le départ, voir [les alternatives à OpenClaw](/blog/openclaw-alternatives).",
        },
      ],
      source: { label: "Source : README de Hermes Agent", href: hermes },
    },
    {
      kind: "text",
      title: "OpenClaw vs Claude Code, et Hermes vs Claude Code",
      text: [
        "Ils résolvent des problèmes différents. OpenClaw et Hermes sont des assistants à qui l’on écrit : boîte de réception, agenda, recherche, rappels et tâches entre applications. Claude Code est l’endroit où le logiciel se construit : il lit votre base de code, modifie des fichiers, lance des commandes et des tests, et ouvre des pull requests. Beaucoup utilisent les deux : un assistant de messagerie pour la vie quotidienne, et Claude Code (ou Codex) pour le travail dans le dépôt. OpenClaw peut même réutiliser votre connexion Claude Code sur la même machine. Pour que Claude Code travaille selon son propre planning, lisez [comment rendre Claude Code proactif](/proactive-claude-code) ; pour en faire tourner plusieurs à la fois, voir [plusieurs agents Claude Code](/blog/multiple-claude-code-agents).",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Avec Crewmark",
      title: "Quand vous voulez des agents avec un poste, pas des assistants",
      text: [
        "OpenClaw et Hermes répondent quand vous leur écrivez. Crewmark transforme Claude Code, Codex, DeepSeek Harness ou OpenCode en employés IA : chacun a un rôle, un objectif et des horaires de travail, se réveille au rythme d’une pulsation, prend l’issue suivante d’un tableau partagé et vous écrit quand il a besoin d’une décision, avec l’abonnement que vous payez déjà.",
      ],
      steps: [
        {
          title: "Choisissez un rôle",
          text: "Un [spécialiste SEO](/ai-employees/seo-specialist), un [ingénieur logiciel](/ai-employees/software-engineer), un [agent marketing](/ai-employees/marketing-agent) et d’autres.",
        },
        {
          title: "Connectez l’agent que vous utilisez déjà",
          text: "Chaque employé travaille dans sa propre session et son propre checkout.",
        },
        {
          title: "Remplissez le tableau",
          text: "Assignez des issues ; ne répondez qu’à ce qui a besoin de vous. Lire [ce qu’est un employé IA](/ai-employees).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Essayer Hermes Agent et OpenClaw côte à côte" },
  mid: {
    title: "Besoin d’agents qui avancent dans un backlog ?",
    text: "Crewmark fait tourner Claude Code et Codex comme des employés IA qui prennent l’issue suivante de votre tableau au rythme d’une pulsation.",
    button: "Commencer",
  },
  faq: {
    title: "FAQ Hermes Agent vs OpenClaw",
    items: [
      {
        q: "Hermes Agent est-il meilleur qu’OpenClaw ?",
        a: "Tout dépend de ce qui compte pour vous. Hermes Agent mise sur l’apprentissage (des skills qu’il crée et améliore) et demande avant les commandes dangereuses par défaut. OpenClaw offre plus de canaux, d’applications et de plugins communautaires.",
      },
      {
        q: "Puis-je passer d’OpenClaw à Hermes Agent ?",
        a: "Oui. Hermes inclut `hermes import-agent openclaw`, qui importe votre persona, vos souvenirs, vos skills et vos réglages de messagerie ; lancez-le d’abord avec `--dry-run`.",
      },
      {
        q: "Lequel fonctionne avec mon abonnement Claude ?",
        a: "OpenClaw peut réutiliser une connexion Claude Code sur la même machine ou utiliser une clé d’API. Hermes Agent n’accepte un abonnement Claude qu’avec Claude Max et de l’usage supplémentaire acheté ; les utilisateurs Pro ont besoin d’une clé d’API.",
      },
      {
        q: "OpenClaw et Hermes Agent sont-ils gratuits ?",
        a: "Les deux sont open source sous licence MIT. Vous payez les modèles que vous utilisez ; Nous Research propose aussi un abonnement Nous Portal optionnel pour Hermes.",
      },
      {
        q: "OpenClaw vs Claude Code : lequel utiliser ?",
        a: "OpenClaw est un assistant personnel dans vos applications de messagerie ; Claude Code est un agent de code dans votre dépôt. Ils sont complémentaires, et OpenClaw peut réutiliser une connexion Claude Code sur la même machine.",
      },
      {
        q: "Hermes Agent vs Codex ?",
        a: "Codex est l’agent de code d’OpenAI pour votre dépôt. Hermes est un agent personnel généraliste qui peut se connecter avec ChatGPT/Codex pour utiliser les modèles d’OpenAI.",
      },
    ],
  },
  cta: {
    title: "Donnez un poste à vos agents de code, pas seulement une conversation.",
    text: "Crewmark transforme des sessions Claude Code, Codex, DeepSeek Harness et OpenCode en employés IA dotés de rôles, d’objectifs, d’horaires de travail et d’une pulsation.",
    button: "Commencer",
  },
  checked: "Vérifié dans les README et la documentation d’OpenClaw et de Hermes Agent, ainsi qu’avec l’API GitHub, le 7 novembre 2026.",
  disclaimer:
    "Crewmark est un produit indépendant, qui n’est ni affilié à l’OpenClaw Foundation, Nous Research, Anthropic ou OpenAI, ni approuvé par eux. Les noms de produits sont des marques de leurs propriétaires.",
};
