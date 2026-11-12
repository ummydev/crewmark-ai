import type { GuideCopy } from "@/components/landing/guide-article";

// French translation of /alternatives/<product>; the English master is src/content/alternatives.ts.

type Alternative = "paperclip" | "multica" | "crewai";

const others = (except: Alternative) =>
  [
    ["paperclip", "[Paperclip](/alternatives/paperclip) : orchestration open source et auto-hébergée pour toute une entreprise d’agents."],
    ["multica", "[Multica](/alternatives/multica) : un tableau de tickets pour les CLI d’agents de code, dans le cloud ou auto-hébergé."],
    ["crewai", "[CrewAI](/alternatives/crewai) : un framework Python pour construire des workflows multi-agents avec des clés API."],
  ]
    .filter(([slug]) => slug !== except)
    .map(([, text]) => text);

const newToIt = "Vous découvrez le concept ? Lisez [ce qu’est un employé IA](/ai-employees).";

const closing = (product: string) => ({
  title: `Essayez Crewmark comme alternative à ${product}.`,
  text: "Donnez à votre agent Claude Code ou Codex un rôle, un objectif et des horaires de travail, et assignez-lui du travail sur un tableau.",
  button: "Accès anticipé",
});

const mid = {
  title: "Recrutez un employé IA avec le forfait que vous payez déjà",
  text: "Crewmark réveille votre session Claude Code ou Codex au rythme d’une pulsation et lui confie le ticket suivant du tableau.",
  button: "Accès anticipé",
};

const disclaimer = (owner: string) =>
  `Crewmark est un produit indépendant, sans lien avec ${owner} et non approuvé par ${owner}. Les noms de produits sont des marques de leurs propriétaires respectifs. Les informations sur les autres produits proviennent de leur documentation publique et peuvent avoir changé depuis.`;

export const copy: Record<Alternative, GuideCopy> = {
  paperclip: {
    meta: {
      title: "Alternative à Paperclip AI : Crewmark vs Paperclip | Crewmark",
      description:
        "Vous cherchez une alternative à Paperclip ? Comparez Crewmark et Paperclip : hébergement, agents, pulsations, objectifs et mise en place.",
    },
    breadcrumb: "Alternative à Paperclip",
    hero: {
      kicker: "Alternative à Paperclip",
      title: "Crewmark vs Paperclip",
      lead: "Paperclip et Crewmark transforment tous deux des agents de code comme Claude Code et Codex en une équipe qui prend du travail selon un planning. Paperclip est un serveur open source que vous hébergez vous-même pour orchestrer toute une entreprise d’agents ; Crewmark est un tableau hébergé où chaque agent est un employé doté d’un rôle, d’un objectif chiffré et d’horaires de travail. Voici comment ils se comparent.",
      cta: "Accès anticipé",
      secondary: "Voir la comparaison",
      secondaryHref: "#compare",
    },
    sections: [
      {
        kind: "text",
        title: "Ce qu’est Paperclip",
        text: [
          "Paperclip est un serveur Node.js avec une interface React, sous licence MIT, qui « orchestre une équipe d’agents IA pour faire tourner une entreprise ». Vous définissez un objectif d’entreprise, construisez un organigramme avec des rôles, des liens hiérarchiques et des budgets, et recrutez des agents via des adaptateurs pour Claude Code, Codex, Cursor, Gemini CLI, OpenCode, OpenClaw et d’autres.",
          "Les agents se réveillent pour les tickets qui leur sont assignés, les relances ou des pulsations minutées facultatives ; des routines tournent via cron ou des webhooks ; et les budgets, les validations et les validations de recrutement gardent un humain dans la boucle. Il est aujourd’hui auto-hébergé, avec une version cloud sur liste d’attente.",
        ],
      },
      {
        kind: "table",
        id: "compare",
        title: "Crewmark vs Paperclip en un coup d’œil",
        headers: ["", "Paperclip", "Crewmark"],
        rows: [
          ["Hébergement", "Auto-hébergé (Node.js 24+ ou Docker) ; cloud sur liste d’attente", "Application web hébergée, plus un petit daemon sur votre ordinateur"],
          ["Licence", "Open source, MIT", "Commerciale, en accès anticipé"],
          ["Agents", "Claude Code, Codex, Cursor, Gemini CLI, OpenCode, OpenClaw et d’autres, ou des clés API", "Claude Code, Codex, DeepSeek Harness et OpenCode"],
          ["Unité de travail", "Tickets liés aux objectifs de l’entreprise et des projets", "Tickets sur un tableau Kanban"],
          ["Structure", "Organigramme : rôles, liens hiérarchiques, budgets", "Employés : rôle, KPI chiffré, horaires de travail"],
          ["Quand les agents se réveillent", "Travail assigné, messages, pulsations minutées facultatives, routines", "Une pulsation toutes les 15, 30 ou 60 minutes pendant les heures de travail"],
          ["Maîtrise des dépenses", "Budgets par entreprise, par agent et par projet", "Tourne sur votre abonnement existant ; dort en dehors des heures de travail"],
          ["Quand il est bloqué", "Circuits de validation et commentaires", "Un message direct à vous, puis il passe à autre chose"],
        ],
      },
      {
        kind: "text",
        title: "Lequel choisir ?",
        points: [
          "Choisissez Paperclip si vous voulez de l’open source à héberger et modifier vous-même, si vous avez besoin de budgets et d’un organigramme pour de nombreux agents, ou si vous utilisez des agents que Crewmark ne prend pas en charge, comme Cursor ou Gemini CLI.",
          "Choisissez Crewmark si vous préférez ne pas gérer de serveur, si vous voulez que chaque agent soit évalué sur un chiffre (clics, inscriptions, PR fusionnées) et tenu à des horaires de travail, et si vous voulez un seul tableau où les agents vous écrivent quand ils sont bloqués.",
        ],
      },
      {
        kind: "steps",
        id: "how-to",
        title: "Comment passer de Paperclip à Crewmark",
        steps: [
          {
            title: "Exportez ce que vous voulez garder",
            text: "Paperclip exporte une entreprise en Markdown lisible : les agents avec leurs rôles et instructions, les compétences et, en option, les projets, routines et tâches. Les secrets, les validations et l’historique des coûts ne sont pas inclus.",
          },
          {
            title: "Recréez chaque agent sous forme d’employé",
            text: "Dans Crewmark, choisissez le rôle le plus proche, collez les instructions de l’agent et transformez son objectif en un chiffre qu’il peut suivre, par exemple « +10 % de clics Search Console par mois ».",
          },
          {
            title: "Connectez le même agent",
            text: "Lancez la commande de configuration dans la conversation Claude Code ou Codex où vous voulez que l’employé vive. Il continue d’utiliser l’abonnement que vous payez déjà.",
          },
          {
            title: "Déplacez les tâches ouvertes sur le tableau",
            text: "Recréez les tickets ouverts et assignez-les. Définissez des horaires de travail et une pulsation : l’employé les prendra en charge à son prochain réveil.",
          },
        ],
      },
      { kind: "text", title: "Autres alternatives", points: [...others("paperclip"), newToIt] },
    ],
    howTo: { section: "how-to", name: "Passer de Paperclip à Crewmark" },
    mid,
    faq: {
      title: "FAQ : alternative à Paperclip",
      items: [
        {
          q: "Paperclip est-il gratuit ?",
          a: "La version auto-hébergée est gratuite et open source, sous licence MIT. Paperclip n’a pas publié de tarifs pour sa version cloud, qui est sur liste d’attente.",
        },
        {
          q: "Quelle est la principale différence entre Crewmark et Paperclip ?",
          a: "Paperclip est un serveur auto-hébergé pour faire tourner une entreprise d’agents avec un organigramme et des budgets. Crewmark est hébergé et traite chaque agent comme un employé doté d’un objectif chiffré, d’horaires de travail et d’une pulsation.",
        },
        {
          q: "Les deux fonctionnent-ils avec Claude Code et Codex ?",
          a: "Oui. Les deux pilotent le vrai Claude Code et le vrai Codex. Paperclip prend aussi en charge Cursor, Gemini CLI et d’autres agents ; Crewmark prend aussi en charge DeepSeek Harness et OpenCode.",
        },
        {
          q: "Puis-je auto-héberger Crewmark ?",
          a: "Non. Crewmark est une application hébergée ; seul le daemon qui réveille vos agents tourne sur votre ordinateur.",
        },
      ],
    },
    cta: closing("Paperclip"),
    checked: "Vérifié dans le README, la documentation et le site de Paperclip le 2 novembre 2026.",
    disclaimer: disclaimer("Paperclip Labs"),
  },
  multica: {
    meta: {
      title: "Alternative à Multica : Crewmark vs Multica | Crewmark",
      description:
        "Vous cherchez une alternative à Multica ? Comparez Crewmark et Multica : agents, planification, objectifs, licence et mise en place.",
    },
    breadcrumb: "Alternative à Multica",
    hero: {
      kicker: "Alternative à Multica",
      title: "Crewmark vs Multica",
      lead: "Multica et Crewmark vous permettent tous deux d’assigner des tickets à des agents de code comme Claude Code et Codex, comme s’il s’agissait de coéquipiers. Multica est un espace de travail pour les équipes logicielles, disponible dans le cloud ou auto-hébergé ; Crewmark traite chaque agent comme un employé doté d’un objectif chiffré, d’horaires de travail et d’une pulsation qui le réveille de lui-même. Voici comment ils se comparent.",
      cta: "Accès anticipé",
      secondary: "Voir la comparaison",
      secondaryHref: "#compare",
    },
    sections: [
      {
        kind: "text",
        title: "Ce qu’est Multica",
        text: [
          "Multica est un espace de travail à code source disponible (source-available) où « vous assignez du travail à des agents de code IA comme vous le feriez à un coéquipier ». Il ne fournit pas de modèle : un daemon pilote les CLI d’agents sur lesquelles vous êtes déjà connecté, 26 au total, dont Claude Code, Codex, Cursor Agent, Copilot CLI, OpenCode et DeepSeek Harness.",
          "Les agents prennent des tickets sur un tableau, le travail arrive en revue, et une boîte de réception vous prévient quand un agent a besoin d’une décision. Les Autopilots créent des tickets selon un planning cron ou via un webhook, les squads font passer le travail par un responsable, et l’outil se connecte à Slack, Feishu, DingTalk, WeCom et Telegram.",
        ],
      },
      {
        kind: "table",
        id: "compare",
        title: "Crewmark vs Multica en un coup d’œil",
        headers: ["", "Multica", "Crewmark"],
        rows: [
          ["Hébergement", "Cloud, ou auto-hébergé avec Docker ou Helm", "Application web hébergée, plus un petit daemon sur votre ordinateur"],
          ["Licence", "Source-available (Apache 2.0 avec conditions) ; l’héberger pour d’autres exige une licence commerciale", "Commerciale, en accès anticipé"],
          ["Agents", "26 CLI d’agents, dont Claude Code, Codex, Cursor et DeepSeek Harness", "Claude Code, Codex, DeepSeek Harness et OpenCode"],
          ["Unité de travail", "Tickets sur un tableau, squads, messagerie et canaux", "Tickets sur un tableau Kanban"],
          ["Travail planifié", "Les Autopilots créent des tickets via cron ou des webhooks", "Une pulsation réveille chaque employé toutes les 15, 30 ou 60 minutes"],
          ["Objectifs", "Aucun indiqué par agent", "Un KPI chiffré par employé, par ex. +10 % de clics par mois"],
          ["Horaires de travail", "Aucun indiqué", "Définis pour chaque employé ; il dort en dehors"],
          ["Quand il est bloqué", "Boîte de réception et étapes de revue", "Un message direct à vous, puis il passe à autre chose"],
        ],
      },
      {
        kind: "text",
        title: "Lequel choisir ?",
        points: [
          "Choisissez Multica si vous avez besoin d’auto-hébergement, si vous voulez le plus grand choix de CLI d’agents, ou si vous travaillez dans Feishu, DingTalk ou WeCom.",
          "Choisissez Crewmark si vous voulez des agents qui se mettent au travail selon leur propre planning sans que vous ayez à créer des tickets pour eux, qui sont évalués sur un chiffre et qui respectent des horaires de travail pour ne pas épuiser votre forfait pendant la nuit.",
        ],
      },
      {
        kind: "steps",
        id: "how-to",
        title: "Comment passer de Multica à Crewmark",
        steps: [
          {
            title: "Listez vos agents et vos tickets ouverts",
            text: "Notez les instructions de chaque agent et les tickets encore ouverts. La CLI et l’API de Multica permettent de les lister.",
          },
          {
            title: "Recréez chaque agent sous forme d’employé",
            text: "Dans Crewmark, choisissez le rôle le plus proche, collez les instructions et donnez-lui un objectif chiffré, des horaires de travail et une pulsation.",
          },
          {
            title: "Connectez la même CLI d’agent",
            text: "Lancez la commande de configuration dans la conversation Claude Code, Codex, DeepSeek Harness ou OpenCode où l’employé doit vivre. Il continue d’utiliser la connexion que vous avez déjà.",
          },
          {
            title: "Remplacez les Autopilots par des pulsations",
            text: "Au lieu d’une tâche cron qui crée des tickets, placez le travail récurrent dans le backlog de l’employé. Il consulte le tableau à chaque pulsation et prend le ticket suivant.",
          },
        ],
      },
      { kind: "text", title: "Autres alternatives", points: [...others("multica"), newToIt] },
    ],
    howTo: { section: "how-to", name: "Passer de Multica à Crewmark" },
    mid,
    faq: {
      title: "FAQ : alternative à Multica",
      items: [
        {
          q: "Multica est-il open source ?",
          a: "Il est source-available : la Multica License est une Apache 2.0 assortie de conditions supplémentaires. L’utiliser au sein de votre propre organisation, y compris en auto-hébergement, est gratuit ; le proposer à d’autres sous forme de service hébergé exige une licence commerciale.",
        },
        {
          q: "Quelle est la principale différence entre Crewmark et Multica ?",
          a: "Les deux placent des agents de code sur un tableau de tickets. Crewmark ajoute une structure d’employé : un objectif chiffré, des horaires de travail et une pulsation qui réveille chaque agent de lui-même pour qu’il prenne le ticket suivant.",
        },
        {
          q: "Les deux utilisent-ils ma connexion Claude Code ou Codex existante ?",
          a: "Oui. Les deux pilotent la CLI d’agent sur laquelle vous êtes déjà connecté : le travail tourne sur votre forfait existant.",
        },
        {
          q: "Puis-je auto-héberger Crewmark ?",
          a: "Non. Crewmark est une application hébergée ; seul le daemon qui réveille vos agents tourne sur votre ordinateur.",
        },
      ],
    },
    cta: closing("Multica"),
    checked: "Vérifié dans le README, la documentation, la licence et le site de Multica le 2 novembre 2026.",
    disclaimer: disclaimer("Index Labs"),
  },
  crewai: {
    meta: {
      title: "Alternative à CrewAI sans code : Crewmark vs CrewAI | Crewmark",
      description:
        "Vous cherchez une alternative à CrewAI ? Comparez Crewmark et CrewAI : code, modèles, tarifs et assignation du travail.",
    },
    breadcrumb: "Alternative à CrewAI",
    hero: {
      kicker: "Alternative à CrewAI",
      title: "Crewmark vs CrewAI",
      lead: "CrewAI est un framework Python pour construire des workflows multi-agents, surmonté d’une plateforme commerciale. Crewmark n’est pas un framework : il transforme l’agent Claude Code ou Codex que vous utilisez déjà en employé IA et lui confie du travail sur un tableau, sans code à écrire ni facture d’API. Voici comment ils se comparent.",
      cta: "Accès anticipé",
      secondary: "Voir la comparaison",
      secondaryHref: "#compare",
    },
    sections: [
      {
        kind: "text",
        title: "Ce qu’est CrewAI",
        text: [
          "CrewAI est un framework Python open source sous licence MIT, « pour construire des workflows multi-agents prêts pour la production ». Vous définissez des agents avec un rôle, un objectif, une backstory, des outils et un LLM, puis vous les combinez en crews et en flows pilotés par des événements. Par défaut, les agents utilisent l’API d’OpenAI ; d’autres fournisseurs et des modèles locaux sont pris en charge.",
          "CrewAI AMP ajoute un éditeur visuel, un copilote IA, la planification cron, l’intervention humaine dans la boucle (human-in-the-loop), le traçage et le déploiement sur le cloud de CrewAI ou sur votre propre infrastructure.",
        ],
      },
      {
        kind: "table",
        id: "compare",
        title: "Crewmark vs CrewAI en un coup d’œil",
        headers: ["", "CrewAI", "Crewmark"],
        rows: [
          ["Ce que c’est", "Un framework Python plus une plateforme pour déployer des workflows", "Un tableau d’employés IA qui tournent dans votre agent de code"],
          ["Code nécessaire", "Oui pour le framework (Python 3.10–3.13) ; un éditeur visuel sur la plateforme", "Non : choisissez un rôle et lancez une seule commande de configuration"],
          ["Modèles", "Clés API : OpenAI par défaut, autres fournisseurs et modèles locaux", "Claude Code, Codex, DeepSeek Harness ou OpenCode, sur votre forfait existant"],
          ["Capacités des agents", "Les outils que vous définissez dans le code", "Tout ce que l’agent de code sait faire : fichiers, terminal, navigateur, MCP"],
          ["Unité de travail", "Des tâches dans une crew ou un flow", "Des tickets sur un tableau Kanban"],
          ["Planification", "Planification cron sur la plateforme", "Une pulsation toutes les 15, 30 ou 60 minutes pendant les heures de travail"],
          ["Objectifs", "Un champ goal dans le prompt de chaque agent", "Un KPI chiffré par employé, suivi dans le temps"],
          ["Tarifs", "Offre gratuite avec 50 exécutions par mois ; Enterprise sur devis", "Accès anticipé ; aucun coût de tokens en plus de votre forfait"],
        ],
      },
      {
        kind: "text",
        title: "Lequel choisir ?",
        points: [
          "Choisissez CrewAI si vous êtes développeur et intégrez un workflow multi-agents à votre propre produit, si vous avez besoin d’un contrôle précis sur chaque étape, ou d’un déploiement entreprise avec SSO et votre propre VPC.",
          "Choisissez Crewmark si vous ne voulez pas écrire ni maintenir de code d’agent, si vous payez déjà Claude Code ou Codex, et si vous voulez des agents qui tiennent des postes dans la durée, comme le SEO ou la correction de bugs, et rendent compte sur un tableau.",
        ],
      },
      {
        kind: "steps",
        id: "how-to",
        title: "Comment passer de CrewAI à Crewmark",
        steps: [
          {
            title: "Associez chaque agent à un rôle",
            text: "Reprenez le rôle et l’objectif de chaque agent CrewAI et choisissez le rôle Crewmark le plus proche. Sa backstory devient les instructions de l’employé.",
          },
          {
            title: "Transformez l’objectif en chiffre",
            text: "Dans CrewAI, l’objectif est une phrase du prompt. Dans Crewmark, écrivez plutôt ce que vous mesureriez, par exemple « 10 pull requests fusionnées par semaine ».",
          },
          {
            title: "Connectez un agent de code",
            text: "Lancez la commande de configuration dans Claude Code ou Codex. L’employé utilise les outils propres à cet agent : la plupart du code d’outils personnalisés devient inutile.",
          },
          {
            title: "Transformez les tâches en tickets",
            text: "Placez le travail que votre crew exécutait sous forme de tickets sur le tableau, et définissez des horaires de travail et une pulsation pour que l’employé les prenne en charge de lui-même.",
          },
        ],
      },
      { kind: "text", title: "Autres alternatives", points: [...others("crewai"), newToIt] },
    ],
    howTo: { section: "how-to", name: "Passer de CrewAI à Crewmark" },
    mid,
    faq: {
      title: "FAQ : alternative à CrewAI",
      items: [
        {
          q: "CrewAI est-il gratuit ?",
          a: "Le framework est open source sous licence MIT, mais vous payez les tokens à votre fournisseur de modèles. La plateforme hébergée propose une offre Basic gratuite avec 50 exécutions de workflow par mois et une offre Enterprise sur devis.",
        },
        {
          q: "Faut-il savoir coder pour utiliser Crewmark ?",
          a: "Non. Vous choisissez un rôle, rédigez l’objectif et lancez une seule commande de configuration dans Claude Code ou Codex. Le travail est assigné sous forme de tickets sur un tableau.",
        },
        {
          q: "CrewAI peut-il utiliser Claude Code ou Codex comme agent ?",
          a: "Les agents CrewAI sont des appels à un LLM avec des outils que vous définissez : ils utilisent les API des modèles au lieu de tourner dans Claude Code ou Codex. Les employés Crewmark tournent dans le véritable agent de code.",
        },
        {
          q: "Quelle est une bonne alternative open source à CrewAI ?",
          a: "Si vous voulez de l’open source et des agents construits sur des CLI de code, regardez [Paperclip](/alternatives/paperclip). Crewmark n’est pas open source ; c’est une application hébergée.",
        },
      ],
    },
    cta: closing("CrewAI"),
    checked: "Vérifié dans le README, la documentation et la page de tarifs de CrewAI le 2 novembre 2026.",
    disclaimer: disclaimer("CrewAI"),
  },
};
