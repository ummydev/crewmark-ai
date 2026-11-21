import type { GuideCopy } from "@/components/landing/guide-article";

// French translation of /personal-agent/cursor-projects; the English master is
// src/content/personal-agents/cursor-projects.ts.

const docs = "https://cursor.com/docs/agent/projects";

export const copy: GuideCopy = {
  meta: {
    title: "Cursor Projects : fonctionnement, tarifs et vs Grok Bot",
    description:
      "Cursor Projects : un coordinateur planifie un gros chantier de code et le confie à des agents cloud. Offres, configuration, tests locaux, revue et vs Grok Bot.",
  },
  breadcrumb: "Cursor Projects",
  parent: { name: "Agents personnels", href: "/personal-agent" },
  hero: {
    kicker: "Agents personnels · Cursor",
    title: "Cursor Projects : comment l’agent coordinateur planifie et délègue les gros chantiers",
    lead: "Cursor Projects est une fonctionnalité de Cursor pour les travaux d’envergure, comme une fonctionnalité, une migration ou une application complète. Vous discutez avec un agent coordinateur qui n’écrit pas de code lui-même : il planifie le travail, le délègue à des agents qui tournent en parallèle sur les Cloud Agents de Cursor, puis vous rapporte le travail terminé pour que vous le vérifiiez. Chaque Project conserve des fichiers partagés que tous ses agents lisent, et il peut effectuer du travail récurrent sans qu’on le lui demande. Voici comment il fonctionne, quelles offres l’incluent, comment le configurer, où il s’exécute et comment il se compare à Grok Bot et Claude Code.",
    cta: "Commencer",
    secondary: "Le configurer",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "Ce qu’est Cursor Projects",
      points: [
        "Un coordinateur et ses exécutants : vous parlez à un seul agent coordinateur, qui crée des agents exécutants, les nomme selon leur tâche et les gère. Le coordinateur n’écrit pas de code lui-même ; il planifie le travail et le délègue aux exécutants, qui tournent en parallèle.",
        "Il s’exécute dans le cloud : chaque Project a son propre ordinateur cloud sur les Cloud Agents de Cursor, donc fermer votre ordinateur portable ne l’arrête pas.",
        "Des fichiers partagés : un Project conserve des préférences, des notes et des workflows que tous ses agents lisent. Un `notes.md` partagé suit ce qui est en cours, en file d’attente et terminé.",
        "Une liste de tâches et un tableau : chaque Project en a un, et dans les Multiplayer Projects, tous les membres le partagent.",
        "Du travail récurrent : demandez au coordinateur de surveiller un canal Slack, de s’exécuter selon un planning ou de suivre vos pull requests, et il agit sur ces signaux sans prompt.",
        "Conçu pour le travail qui dépasse une seule conversation : une fonctionnalité en plusieurs pull requests, une migration, ou une tâche menée pendant votre absence.",
      ],
    },
    {
      kind: "table",
      id: "plans",
      title: "Tarifs de Cursor Projects : quelles offres l’incluent",
      text: [
        "Les Projects tournent sur les Cloud Agents : ils sont donc inclus dans toutes les offres Cursor qui comprennent les Cloud Agents. Prix tirés de la page d’aide tarifaire de Cursor le 13 novembre 2026. Les offres payantes de Cursor incluent une réserve d’usage pour les modèles Cursor (Grok et Composer).",
      ],
      headers: ["Offre", "Prix", "Cursor Projects"],
      rows: [
        ["Free", "-", "Non inclus"],
        ["Plus", "$8/mois", "Non inclus"],
        ["Premium", "$30/mois, ou $300/an", "Inclus"],
        ["Super", "$100/mois", "Inclus"],
        ["Ultra", "$200/mois", "Inclus"],
        ["Teams", "$30, $100 ou $200 par siège et par mois", "Inclus ; les Multiplayer Projects nécessitent un compte d’équipe et Cursor 3.26.13 ou ultérieur"],
        ["Enterprise", "-", "Inclus ; nécessite Cursor 3.21.9 ou ultérieur"],
        ["Anciennes offres", "-", "Inclus dans les anciennes offres payantes ; pas dans l’ancienne offre Hobby"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Configurer Cursor Projects",
      steps: [
        {
          title: "Vérifiez votre offre et votre paramètre de confidentialité",
          text: "Il vous faut une offre avec Cloud Agents : Premium ou supérieure, Teams, Enterprise (Cursor 3.21.9 ou ultérieur) ou une ancienne offre payante. Les Projects ne sont pas disponibles avec le Privacy Mode (Legacy).",
        },
        { title: "Ouvrez l’Agents Window", text: "Les Projects se trouvent dans l’Agents Window de Cursor et s’exécutent dans le cloud." },
        {
          title: "Décrivez le gros chantier",
          text: "Dites au coordinateur quoi construire, comme une fonctionnalité, une migration ou une application complète, dans vos dépôts GitHub. Vous choisissez le modèle du coordinateur.",
        },
        {
          title: "Ajoutez des fichiers partagés",
          text: "Notez les préférences, les notes et les workflows du Project ; tous ses agents les lisent, et `notes.md` suit ce qui est en cours, en file d’attente et terminé.",
        },
        {
          title: "Vérifiez le travail et rendez-le récurrent",
          text: "Le coordinateur vous rapporte le travail terminé pour que vous le vérifiiez. Demandez-lui de surveiller un canal Slack, de s’exécuter selon un planning ou de suivre vos pull requests pour qu’il continue sans prompt.",
        },
      ],
      source: { label: "Source : documentation de Cursor, Projects", href: docs },
    },
    {
      kind: "text",
      id: "safety",
      title: "Comment Cursor Projects vous laisse le contrôle",
      points: [
        "Revue : le coordinateur vous rapporte le travail terminé pour que vous le vérifiiez.",
        "Visibilité : la liste de tâches et le tableau, ainsi que le `notes.md` partagé, montrent ce qui est en cours, en file d’attente et terminé.",
        "Séparation : chaque Project s’exécute sur son propre ordinateur cloud. Le coordinateur lance un agent local quand quelque chose doit être testé sur votre machine.",
        "Équipes : dans les Multiplayer Projects (compte d’équipe, Cursor 3.26.13 ou ultérieur), chaque membre a son propre coordinateur, les coordinateurs s’envoient directement des messages et tous les membres partagent le tableau.",
        "Confidentialité : les Projects ne sont pas disponibles avec le Privacy Mode (Legacy).",
      ],
    },
    {
      kind: "text",
      id: "run-locally",
      title: "Cursor Projects peut-il tourner en local ?",
      text: [
        "Non, pas de bout en bout. La documentation de Cursor indique qu’un Project tourne sur son propre ordinateur dans le cloud, donc fermer votre ordinateur portable ne l’arrête pas, et le cloud lui permet de faire tourner plus d’agents en parallèle qu’un ordinateur portable ne le pourrait. Quand quelque chose doit être testé sur votre machine, le coordinateur lance un agent local pour l’y exécuter.",
        "Les Self-Hosted Machines de Cursor déplacent l’exécution des outils vers une machine que vous gérez : My Machines pour l’ordinateur portable, la devbox ou la VM d’une personne, et Team Pools sur l’offre Enterprise. Les modifications de fichiers, les commandes du terminal et les autres appels d’outils s’exécutent alors sur cette machine, mais la boucle de l’agent, l’inférence et la planification restent dans le cloud de Cursor, et le worker envoie à Cursor le contenu dont l’agent a besoin. (Documentation de Cursor, vérifiée le 13 novembre 2026.)",
        "Si vous voulez toute une équipe d’agents qui tourne sur votre propre ordinateur, ces outils fonctionnent ainsi :",
      ],
      points: [
        "[Les agent teams de Claude Code](/blog/claude-code-agent-teams) : une fonctionnalité expérimentale de Claude Code, désactivée par défaut, où une session principale crée des coéquipiers qui partagent une liste de tâches et s’envoient des messages, le tout dans vos propres sessions Claude Code.",
        "[Claude Squad](/compare/claude-squad-vs-conductor) : une application de terminal open source (AGPL-3.0) qui fait tourner plusieurs agents de code à la fois, chacun dans sa propre session tmux et son propre worktree git.",
        "[Vibe Kanban](/compare/vibe-kanban-vs-conductor) : un tableau kanban open source (Apache-2.0) pour agents de code, qui tourne en local dans votre navigateur ou comme application de bureau ; sa communauté le maintient depuis la fermeture de l’entreprise qui l’éditait, en avril 2026.",
        "[Crewmark](/ai-employees) : open source (GPL-3.0). Chaque employé IA est une conversation Claude Code ou Codex sur votre propre ordinateur, avec un rôle et des objectifs, et une pulsation le réveille pour qu’il prenne le ticket suivant sur un tableau partagé. Le travail ne se limite pas au code : des rôles comme [spécialiste SEO](/ai-employees/seo-specialist) fonctionnent de la même façon, et l’application web peut être auto-hébergée.",
      ],
    },
    {
      kind: "table",
      id: "vs",
      title: "Cursor Projects vs Grok Bot et Claude Code",
      text: [
        "Informations tirées de la documentation et des pages de tarifs de chaque éditeur, vérifiées le 13 novembre 2026. D’autres collègues IA sont comparés dans [les outils de collègues IA](/blog/ai-coworker) ; voir aussi le [guide Grok Bot](/personal-agent/grok-bot) et [Grok Bot vs Claude Code](/compare/grok-bot-vs-claude-code).",
        "Côte à côte : [Cursor Projects vs Grok Bot](/compare/cursor-projects-vs-grok-bot). Guides : [Grok Bot](/personal-agent/grok-bot).",
      ],
      headers: ["", "Cursor Projects", "Grok Bot", "Claude Code"],
      rows: [
        ["Éditeur", "Cursor", "xAI", "Anthropic"],
        ["Conçu pour", "Les gros chantiers de code : une fonctionnalité, une migration, une application complète", "Des coéquipiers IA qui travaillent dans vos applications, Slack et Teams", "Le code : lit votre base de code, modifie des fichiers, exécute des commandes"],
        ["Plusieurs agents", "Un coordinateur planifie et délègue à des agents exécutants en parallèle", "Les Bots s’envoient des messages et se coordonnent dans des discussions de groupe", "Subagents dans une session ; agent teams expérimentales"],
        ["Où il s’exécute", "Cloud Agents de Cursor, un ordinateur cloud par Project ; un agent local pour les tests", "Cloud : chaque Bot a son propre ordinateur", "Terminal, IDE et application de bureau sur votre machine ; sessions cloud sur le web"],
        ["Tableau de tâches", "Une liste de tâches et un tableau, plus un `notes.md` partagé", "Non précisé ; le travail se transmet dans le chat, les fils Slack et les réunions", "Pas de tableau de tickets ; les agent teams partagent une liste de tâches"],
        ["Travail récurrent", "Surveille un canal Slack, s’exécute selon un planning ou suit vos pull requests", "Routines planifiées", "Tâches planifiées cloud et sur le bureau, `/loop`"],
        ["Prix", "Cursor Premium à $30/mois et au-delà", "Premium $30, Super $100 ou Ultra $200 par mois", "Offres Claude payantes, dès Pro à $20/mois"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Avec Crewmark",
      title: "Projects pour un gros chantier. Crewmark pour des rôles permanents.",
      text: [
        "Cursor Projects coordonne des agents sur un travail d’envergure. Crewmark transforme vos propres sessions Claude Code ou Codex en employés IA dotés d’un rôle, d’objectifs chiffrés, d’horaires de travail et d’une pulsation, chacun prenant des tickets sur un tableau partagé, pour que le travail d’ingénierie, de SEO et de marketing dans un dépôt continue d’avancer.",
      ],
      steps: [
        { title: "Choisissez un rôle", text: "Partez des [rôles d’employés IA](/ai-employees), comme ingénieur logiciel ou spécialiste SEO." },
        { title: "Mettez le travail sur un tableau", text: "Assignez des tickets et rendez récurrents ceux qui reviennent régulièrement ; la pulsation réveille l’employé pour qu’il prenne le suivant." },
        { title: "Voyez ce qu’il sait faire", text: "Des missions, avec leur configuration, se trouvent dans [les cas d’usage de Claude Code](/use-cases/claude-code) et [les cas d’usage de Codex](/use-cases/codex)." },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Configurer Cursor Projects" },
  mid: {
    title: "Envie d’agents qui gardent un poste permanent ?",
    text: "Crewmark donne à votre Claude Code ou Codex un rôle, une pulsation et un tableau partagé.",
    button: "Commencer",
  },
  faq: {
    title: "FAQ sur Cursor Projects",
    items: [
      {
        q: "Qu’est-ce que Cursor Projects ?",
        a: "Une fonctionnalité de Cursor pour les travaux d’envergure, comme une fonctionnalité, une migration ou une application complète. Un agent coordinateur planifie le travail, le délègue à des agents qui tournent en parallèle sur les Cloud Agents de Cursor et vous rapporte le travail terminé pour que vous le vérifiiez.",
      },
      {
        q: "Quelles offres Cursor incluent Projects ?",
        a: "Toutes les offres avec Cloud Agents : Premium ($30 par mois, ou $300 par an) et au-delà, Super ($100) et Ultra ($200), Teams ($30, $100 ou $200 par siège et par mois), Enterprise et les anciennes offres payantes. Free, Plus ($8 par mois) et l’ancienne offre Hobby ne l’incluent pas.",
      },
      {
        q: "Cursor Projects fonctionne-t-il en local ?",
        a: "Non, il tourne sur les Cloud Agents de Cursor, chaque Project sur son propre ordinateur cloud, donc fermer votre ordinateur portable ne l’arrête pas. Quand quelque chose doit être testé sur votre machine, le coordinateur lance un agent local. Les Projects ne sont pas disponibles avec le Privacy Mode (Legacy).",
      },
      {
        q: "Comment vérifier ce qu’a fait Cursor Projects ?",
        a: "Le coordinateur vous rapporte le travail terminé pour que vous le vérifiiez. La liste de tâches et le tableau du Project, ainsi que le `notes.md` partagé, montrent ce qui est en cours, en file d’attente et terminé.",
      },
      {
        q: "Une équipe peut-elle partager un même Cursor Project ?",
        a: "Oui, avec les Multiplayer Projects, sur un compte d’équipe et avec Cursor 3.26.13 ou ultérieur. Chaque membre a un coordinateur, les coordinateurs s’envoient directement des messages, et tous les membres partagent la liste de tâches et le tableau.",
      },
      {
        q: "Cursor Projects vs Grok Bot : quelle différence ?",
        a: "Cursor Projects est un espace de travail de code dans Cursor : un coordinateur délègue un gros chantier à des agents exécutants sur les Cloud Agents. Grok Bot, ce sont les coéquipiers IA hébergés de xAI : des Bots qui disposent chacun de leur propre ordinateur cloud, se connectent à vos applications et travaillent dans Slack et Microsoft Teams. Voir le [guide Grok Bot](/personal-agent/grok-bot).",
      },
    ],
  },
  cta: {
    title: "Coordonnez un gros chantier dans Projects. Donnez aussi un rôle permanent à vos agents.",
    text: "Crewmark transforme les sessions Claude Code et Codex en employés IA dotés de rôles, d’objectifs, d’horaires de travail et d’une pulsation.",
    button: "Commencer",
  },
  checked: "Vérifié dans la documentation Projects, le centre d’aide et la page de tarifs de Cursor le 13 novembre 2026.",
  disclaimer:
    "Crewmark est un produit indépendant, sans lien avec Cursor, xAI ni Anthropic, et non approuvé par eux. Les noms de produits sont des marques de leurs propriétaires.",
};
