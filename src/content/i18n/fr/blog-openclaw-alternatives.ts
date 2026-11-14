import type { GuideCopy } from "@/components/landing/guide-article";

// French translation of /blog/openclaw-alternatives; the English master is src/content/blog/openclaw-alternatives.ts.

const openclaw = "https://github.com/openclaw/openclaw";

const sandbox = `# OpenClaw: tools run on the host for the main session
# unless you configure sandboxing (docs: gateway/sandboxing)

# NanoClaw: one Docker container per session, by design
# Hermes Agent: optional Docker or Modal isolation
# ZeroClaw: Landlock, Bubblewrap, Seatbelt or Docker
# IronClaw: WASM sandbox, plus a Docker sandbox for jobs
# NemoClaw: runs OpenClaw or Hermes inside NVIDIA OpenShell`;

export const copy: GuideCopy = {
  meta: {
    title: "Alternatives à OpenClaw (2026) : Hermes, NanoClaw, ZeroClaw",
    description:
      "Les alternatives à OpenClaw comparées d’après leur propre documentation : Hermes Agent, NanoClaw, ZeroClaw, IronClaw et NVIDIA NemoClaw. Comment chacune fonctionne, quels modèles et abonnements elle prend en charge, son modèle de sécurité, et quand une option pensée pour le travail comme Crewmark convient mieux.",
  },
  breadcrumb: "Alternatives à OpenClaw",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-07" },
  hero: {
    kicker: "Blog · Agents IA",
    title: "Alternatives à OpenClaw : Hermes, NanoClaw, ZeroClaw, IronClaw et plus",
    lead: "OpenClaw est l’assistant IA open source qui tourne sur votre propre ordinateur et vous répond dans WhatsApp, Telegram, Slack, Discord et plus de 20 autres canaux. Avec environ 394 000 étoiles sur GitHub, c’est le plus connu, mais pas le seul. On cherche une alternative pour trois raisons : une sécurité plus stricte par défaut, un autre modèle ou un autre abonnement, ou un runtime plus léger. Ce guide compare les principales options d’après leur propre documentation, et explique quand vous avez besoin d’un assistant personnel et quand vous avez besoin d’agents qui travaillent pour une équipe.",
    cta: "Commencer",
    secondary: "Comparer les alternatives",
    secondaryHref: "#alternatives",
  },
  sections: [
    {
      kind: "text",
      title: "OpenClaw en bref",
      text: [
        "OpenClaw s’est d’abord appelé Clawdbot, puis Moltbot, avant de devenir OpenClaw fin janvier 2026, après qu’Anthropic a demandé un changement de nom à cause de sa marque déposée. Peter Steinberger l’a créé ; il a depuis rejoint OpenAI, et le projet relève désormais de l’OpenClaw Foundation, indépendante et annoncée en juillet 2026, qui décrit OpenAI comme « un donateur, pas un propriétaire ». La dernière version est la v2026.11.1, du 5 novembre 2026.",
      ],
      points: [
        "Tourne comme un daemon Gateway local sur macOS, Linux, Windows ou WSL2, avec des applications pour ordinateur et mobile.",
        "Les modèles sont des plugins : Claude (par clé d’API, ou en réutilisant une connexion Claude Code sur la même machine), OpenAI et Codex, et des modèles locaux comme Ollama.",
        "Sécurité : il traite les messages entrants comme non fiables et associe les expéditeurs inconnus, mais les outils s’exécutent sur l’hôte pour la session principale, sauf si vous configurez le sandboxing.",
        "Le projet publie ses correctifs de sécurité : 722 avis depuis janvier 2026, dont 14 critiques, tous corrigés et divulgués, ainsi qu’un audit de Trail of Bits dont tous les constats ont été corrigés.",
      ],
    },
    {
      kind: "table",
      id: "alternatives",
      title: "Les alternatives à OpenClaw comparées",
      text: ["D’après le README, le site ou la documentation de chaque projet, et l’API GitHub, au 7 novembre 2026. Les étoiles sont arrondies."],
      headers: ["", "Ce que c’est", "Plateformes", "Modèles et abonnements", "Isolation", "Licence, étoiles"],
      rows: [
        ["OpenClaw", "Assistant IA personnel dans vos applications de messagerie", "macOS, Linux, Windows, WSL2 ; applications mobiles", "Claude par clé d’API ou une connexion Claude Code locale ; OAuth ChatGPT/Codex ; modèles locaux", "Hôte par défaut ; sandboxing en option", "MIT, ~394k"],
        ["Hermes Agent (Nous Research)", "Agent qui s’améliore lui-même grâce à une boucle d’apprentissage intégrée", "Linux, macOS, Windows, WSL2, Android ; application de bureau", "Tout fournisseur ; abonnement Claude uniquement avec Max et des crédits d’usage supplémentaire (pas Pro) ; OAuth ChatGPT/Codex", "Approbation des commandes dangereuses ; Docker ou Modal en option", "MIT, ~261k"],
        ["NanoClaw", "Assistant léger qui exécute les agents dans des conteneurs", "macOS, Linux, WSL2 ; nécessite Docker et Claude Code", "Claude par clé d’API ou abonnement via Claude Code ; Codex, OpenCode, Ollama par skill", "Un conteneur par session ; les identifiants n’y entrent jamais", "MIT, ~31k"],
        ["ZeroClaw", "Runtime d’agents en un seul binaire Rust", "Linux, macOS, Windows, FreeBSD, Docker ; cartes comme le Raspberry Pi", "Anthropic, OpenAI, Ollama et une vingtaine d’autres ; abonnement Codex ; Claude Max via setup-token", "Supervisé par défaut ; sandboxes du système", "MIT ou Apache 2.0, ~33k"],
        ["IronClaw (NEAR AI)", "Assistant axé sur la confidentialité et la sécurité", "macOS, Linux, Windows ; ou NEAR AI Cloud dans un TEE", "Clés d’API des fournisseurs (Anthropic, OpenAI, Gemini, Ollama et plus)", "Sandbox WASM ; identifiants injectés à la frontière", "MIT ou Apache 2.0, ~13k ; cloud de $0 à $200/mois"],
        ["NVIDIA NemoClaw", "Couche de sécurité qui exécute OpenClaw ou Hermes dans des sandboxes OpenShell (alpha)", "Linux et DGX Spark d’abord ; Docker, Colima ou Podman", "NVIDIA Endpoints, OpenRouter, OpenAI, Anthropic, Gemini par API", "Sandbox OpenShell avec contrôle du trafic sortant", "Apache 2.0, ~23k"],
        ["Crewmark", "Des employés IA pour le travail : rôles, objectifs et un tableau partagé", "Tableau hébergé ; daemon sur macOS, Windows, Linux", "Tourne dans Claude Code, Codex, DeepSeek Harness ou OpenCode, avec votre abonnement actuel", "Chaque employé dans sa propre session et son propre checkout", "Commercial"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Comment choisir une alternative à OpenClaw",
      steps: [
        {
          title: "Décidez à quoi il doit servir",
          text: "Un assistant personnel à qui vous écrivez depuis votre téléphone (OpenClaw, Hermes, NanoClaw, ZeroClaw, IronClaw) n’a pas le même rôle que des agents qui avancent dans le backlog d’une équipe sur un dépôt (Crewmark, ou plusieurs [agents Claude Code](/blog/multiple-claude-code-agents)).",
        },
        {
          title: "Vérifiez comment il isole les outils",
          text: "C’est la principale différence entre eux. Choisissez une isolation par conteneur ou au niveau du système par défaut si l’agent doit lire des messages d’autres personnes.",
          code: sandbox,
        },
        {
          title: "Vérifiez qui paie la facture",
          text: "La prise en charge des abonnements varie beaucoup : certains réutilisent une connexion Claude Code ou un setup token, Hermes exige Claude Max avec des crédits d’usage supplémentaire, d’autres demandent des clés d’API. Vérifiez les conditions de votre fournisseur pour l’usage par des tiers.",
        },
        {
          title: "Vérifiez la plateforme",
          text: "Sous Windows : OpenClaw, Hermes, ZeroClaw et IronClaw s’installent nativement ; NanoClaw nécessite WSL2 ; NemoClaw est d’abord testé sous Linux. Pour une empreinte minimale ou des cartes matérielles, ZeroClaw.",
        },
        {
          title: "Commencez avec un seul canal et des permissions restreintes",
          text: "Connectez une seule application de messagerie, n’autorisez que votre propre compte, et élargissez l’accès une fois que vous avez vu comment il se comporte.",
        },
      ],
      source: { label: "Source : le README d’OpenClaw", href: openclaw },
    },
    {
      kind: "text",
      title: "Quelle alternative à OpenClaw vous convient",
      points: [
        "Vous voulez OpenClaw avec une isolation plus stricte : NanoClaw (conteneurs par conception), ou NemoClaw pour exécuter OpenClaw lui-même dans la sandbox de NVIDIA.",
        "Vous voulez un agent qui apprend et améliore ses propres skills : Hermes Agent.",
        "Vous voulez un runtime petit et rapide, ou devez tourner sur une carte : ZeroClaw.",
        "Vous voulez des fonctions de confidentialité et une option de cloud géré : IronClaw.",
        "Vous hésitez entre OpenClaw et Claude Code : OpenClaw est un assistant centré sur la messagerie ; Claude Code est un agent de codage dans votre dépôt. Pour que Claude Code continue de travailler sans relance, voir [comment rendre Claude Code proactif](/proactive-claude-code).",
        "Vous voulez des agents qui font un travail pour votre équipe, depuis un tableau partagé, avec l’abonnement Claude Code ou Codex que vous payez déjà : Crewmark (ci-dessous). Voir aussi [le comparatif des superagents](/blog/superagent).",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Avec Crewmark",
      title: "Pas un assistant personnel : une équipe d’employés IA",
      text: [
        "OpenClaw et ses alternatives attendent votre message. Crewmark est conçu pour le travail : il transforme une session Claude Code, Codex, DeepSeek Harness ou OpenCode en employé IA doté d’un rôle, d’un objectif et d’horaires de travail, le réveille avec une pulsation pour prendre l’issue suivante d’un tableau partagé, et lui fait vous écrire quand il a besoin d’une décision.",
      ],
      steps: [
        {
          title: "Choisissez un rôle",
          text: "Un [spécialiste SEO](/ai-employees/seo-specialist), un [ingénieur logiciel](/ai-employees/software-engineer), un [agent marketing](/ai-employees/marketing-agent) et d’autres, chacun avec un objectif que vous pouvez modifier.",
        },
        {
          title: "Connectez l’agent que vous utilisez déjà",
          text: "Il tourne dans sa propre session et son propre checkout, avec l’abonnement que vous payez déjà.",
        },
        {
          title: "Assignez le travail et approuvez",
          text: "Remplissez le tableau ; l’employé prend l’issue suivante et vous demande avant toute action figurant sur votre liste d’approbation. Lire [ce qu’est un employé IA](/ai-employees).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Choisir une alternative à OpenClaw" },
  mid: {
    title: "Besoin d’agents qui travaillent, pas seulement qui discutent ?",
    text: "Crewmark fait tourner Claude Code et Codex comme des employés IA qui prennent l’issue suivante de votre tableau au rythme d’une pulsation.",
    button: "Commencer",
  },
  faq: {
    title: "FAQ sur les alternatives à OpenClaw",
    items: [
      {
        q: "Quelle est la meilleure alternative à OpenClaw ?",
        a: "Tout dépend de la raison pour laquelle vous partez : NanoClaw pour l’isolation par conteneurs, Hermes Agent pour un agent qui s’améliore lui-même, ZeroClaw pour un petit runtime en Rust, IronClaw pour les fonctions de confidentialité et un cloud géré, et Crewmark si vous voulez des agents qui font le travail d’une équipe plutôt qu’un assistant personnel.",
      },
      {
        q: "Existe-t-il une alternative open source à OpenClaw ?",
        a: "Oui : Hermes Agent (MIT), NanoClaw (MIT), ZeroClaw (MIT ou Apache 2.0), IronClaw (MIT ou Apache 2.0) et NVIDIA NemoClaw (Apache 2.0) sont tous open source.",
      },
      {
        q: "OpenClaw vs Hermes Agent : quelle différence ?",
        a: "Ce sont tous deux des assistants open source pour vos applications de messagerie. Hermes Agent, de Nous Research, repose sur une boucle d’apprentissage qui améliore ses propres skills et propose une isolation en conteneur optionnelle ; OpenClaw a la plus grande communauté et davantage de canaux. Leurs règles pour l’abonnement Claude diffèrent : Hermes exige Claude Max avec des crédits d’usage supplémentaire.",
      },
      {
        q: "NanoClaw est-il plus sûr qu’OpenClaw ?",
        a: "NanoClaw exécute chaque session dans son propre conteneur et garde les identifiants à l’extérieur, par conception. OpenClaw exécute les outils sur l’hôte pour la session principale, sauf si vous configurez son sandboxing. Les deux peuvent être verrouillés ; NanoClaw part de là.",
      },
      {
        q: "OpenClaw peut-il utiliser mon abonnement Claude ?",
        a: "La documentation d’OpenClaw décrit deux voies pour Claude : une clé d’API, ou la réutilisation d’une connexion Claude Code sur la même machine. Elle prévient aussi que le nom du fournisseur ne suffit pas à savoir si l’usage est facturé sur une API ou sur un abonnement.",
      },
      {
        q: "Existe-t-il une alternative à OpenClaw pour Windows ?",
        a: "Hermes Agent dispose d’une application de bureau Windows, et ZeroClaw et IronClaw s’installent nativement sous Windows. OpenClaw lui-même prend en charge Windows et WSL2 ; NanoClaw nécessite WSL2.",
      },
      {
        q: "Qu’est-ce que NemoClaw ?",
        a: "Une couche open source de NVIDIA, en alpha, qui exécute OpenClaw, Hermes ou LangChain Deep Agents dans des sandboxes NVIDIA OpenShell. C’est une façon d’utiliser OpenClaw de manière plus sûre, pas un remplaçant.",
      },
    ],
  },
  cta: {
    title: "Mettez des agents IA au travail sur le backlog de votre équipe.",
    text: "Crewmark transforme des sessions Claude Code, Codex, DeepSeek Harness et OpenCode en employés IA dotés de rôles, d’objectifs, d’horaires de travail et d’une pulsation.",
    button: "Commencer",
  },
  checked: "Vérifié dans le README, le site, la documentation ou le blog de chaque projet, ainsi qu’avec l’API GitHub, le 7 novembre 2026.",
  disclaimer:
    "Crewmark est un produit indépendant, qui n’est ni affilié à l’OpenClaw Foundation, Nous Research, NanoCo, ZeroClaw Labs, NEAR AI, NVIDIA, Anthropic ou OpenAI, ni approuvé par eux. Les noms de produits sont des marques de leurs propriétaires.",
};
