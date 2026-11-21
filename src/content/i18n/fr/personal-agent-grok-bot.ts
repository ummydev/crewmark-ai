import type { GuideCopy } from "@/components/landing/guide-article";

// fr translation of /personal-agent/grok-bot; the English master is src/content/personal-agents/grok-bot.ts.

const docs = "https://docs.x.ai/grok-bot/get-started";

export const copy: GuideCopy = {
  meta: {
    title: "Grok Bot : ce que c’est, comment l’utiliser, offres et configuration",
    description:
      "Grok Bot de xAI expliqué : ce que fait cet agent toujours actif, quelles offres X, SuperGrok et Cursor l’incluent, l’essai gratuit, comment le télécharger sur Mac, Windows, Linux et smartphone, comment configurer votre premier Bot, et des cas d’usage.",
  },
  breadcrumb: "Grok Bot",
  parent: { name: "Agents personnels", href: "/personal-agent" },
  hero: {
    kicker: "Agents personnels · Grok Bot",
    title: "Grok Bot : ce que fait l’agent personnel de xAI et comment l’utiliser",
    lead: "Grok Bot est l’agent toujours actif de xAI, que l’éditeur présente comme « votre coéquipier IA proactif ». Chaque Bot travaille sur un ordinateur cloud avec un navigateur, des fichiers et un terminal, se connecte aux applications que vous utilisez, retient votre façon de faire et continue après la fermeture de votre ordinateur portable. Il a ouvert en bêta anticipée en août 2026. Ce guide explique ce qu’il fait, quelles offres l’incluent, comment configurer votre premier Bot, comment fonctionnent les routines et les approbations, et à quoi les gens l’utilisent.",
    cta: "Commencer",
    secondary: "Le configurer",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "Ce qu’est Grok Bot",
      text: [
        "Grok Bot n’est ni le chatbot Grok ni le compte @grok sur X. C’est un agent doté de son propre ordinateur : il peut utiliser des applications et des sites web comme une personne, écrire et exécuter du code, et mener des tâches en plusieurs étapes comme construire une présentation, lancer une campagne, faire une réservation ou garder un agenda synchronisé.",
      ],
      points: [
        "Un ordinateur cloud : vos Bots partagent une même machine persistante avec un navigateur, un système de fichiers et un terminal. Chaque Bot a son propre écran, et vous pouvez regarder n’importe lequel en direct.",
        "Plusieurs Bots, une équipe : donnez une tâche à chaque Bot ; ils peuvent s’envoyer des messages et se passer du travail, et votre premier Bot peut faire le point sur les autres.",
        "Applications : Gmail, Google Calendar, Google Drive, Slack, Notion, Granola, GitHub et d’autres, plus n’importe quel serveur MCP ou API. Il utilise les mêmes serveurs MCP, plugins et skills que Cursor.",
        "Mémoire : chaque Bot garde ses propres notes sur vos préférences et un journal de travail daté ; quelques informations, comme votre nom et votre fuseau horaire, sont partagées par tous vos Bots.",
        "Routines : les Bots exécutent des tâches selon un planning ou quand quelque chose se produit, comme une mention Slack ou un webhook. Voir les [routines Grok Bot](/personal-agent/grok-bot-routines).",
        "Vous pouvez le joindre sur ordinateur, sur smartphone, dans Slack et sur X, par écrit ou à la voix.",
      ],
    },
    {
      kind: "table",
      id: "plans",
      title: "Quelles offres incluent Grok Bot",
      text: [
        "Grok Bot fonctionne sur un compte Cursor. Voici les offres qui l’incluent, d’après la page des offres Grok Bot de Cursor ; ni xAI ni Cursor n’indiquent de prix propre à Grok Bot ni d’usage hebdomadaire chiffré.",
      ],
      headers: ["Offre", "Grok Bot", "Usage"],
      rows: [
        ["The X Subscription : Premium, Super, Ultra", "Inclus, en siège individuel ou d’équipe", "Réserve hebdomadaire partagée, plus grande sur Super et Ultra ; usage supplémentaire sur crédit prépayé"],
        ["The X Subscription : Plus, Free", "Non inclus", "-"],
        ["Anciennes offres Cursor : Pro, Pro+, Ultra, Teams", "Inclus", "Usage hebdomadaire croissant de Pro à Ultra ; usage à la demande au-delà s’il est activé"],
        ["SuperGrok, SuperGrok Plus, SuperGrok Heavy, X Premium+ liés", "Inclus via un compte lié", "Heavy obtient le plus ; un compte lié et une offre Cursor ne se cumulent pas"],
        ["SuperGrok Lite", "Non inclus", "-"],
        ["Essai gratuit", "Un crédit d’usage valable 7 jours", "Consommé par les étapes de l’agent et les tokens ; non rechargé"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Configurer Grok Bot",
      steps: [
        {
          title: "Téléchargez l’app",
          text: "Récupérez-la sur x.ai/bot. Elle tourne sur macOS (Apple silicon et Intel), Windows (x64 et Arm64) et Linux (x64 et Arm64), ainsi que sur iPhone (iOS 18 ou ultérieur) et Android (9 ou ultérieur).",
        },
        {
          title: "Connectez-vous",
          text: "Choisissez Sign in et terminez dans votre navigateur ; Grok Bot utilise votre compte Cursor, donc le SSO de votre entreprise s’applique. Si votre accès vient de SuperGrok ou d’X Premium+, liez votre compte Grok sur la page d’accueil. Les comptes en Privacy Mode (Legacy) doivent d’abord changer de mode, car les Bots ont besoin d’un stockage cloud.",
        },
        {
          title: "Donnez une seule tâche à votre premier Bot",
          text: "L’app crée un Bot nommé Grok Bot et ouvre une conversation. Ajoutez-en d’autres avec New Bot (Cmd/Ctrl+N). Donnez une tâche à chaque Bot dans son premier message et demandez-lui de retenir comment vous voulez que le travail soit fait. Vous pouvez aussi lui apprendre une tâche en l’enregistrant une fois sur l’ordinateur du Bot.",
        },
        {
          title: "Connectez les applications et fixez des règles",
          text: "Connectez les applications dont il a besoin. Les identifiants viennent de son Vault, puis d’un gestionnaire de mots de passe comme 1Password, puis d’un formulaire sécurisé, et le Bot ne voit jamais le mot de passe. Auto Review est activé par défaut et vérifie les actions avant leur exécution ; ajoutez des règles Ask first dans Settings > General > Bot pour tout ce qui doit toujours attendre votre accord.",
        },
      ],
      source: { label: "Source : documentation Grok Bot de xAI, Get started", href: docs },
    },
    {
      kind: "text",
      id: "safety",
      title: "Comment Grok Bot vous laisse le contrôle",
      points: [
        "Cartes d’approbation : quand une action demande votre accord, le Bot affiche une carte et attend. Dans les exemples de xAI, il rédige des réponses Slack et des messages Gmail que vous approuvez.",
        "Auto Review vérifie les actions avant qu’un Bot exécute des commandes, utilise des applications ou agisse sur son ordinateur, et ne considère que vos propres messages comme des instructions. xAI précise que cela réduit le risque lié aux contenus malveillants sans le supprimer.",
        "Un Bot n’a pas de compte à lui ; il agit en votre nom, donc chaque action remonte jusqu’à vous.",
        "Tous les Bots partagent un même ordinateur et ses connexions : si un Bot se connecte à un site, les autres peuvent aussi utiliser cette connexion.",
        "Pour l’authentification unique ou les passkeys, choisissez Open computer, puis Take control, terminez l’étape et dites au Bot de continuer.",
      ],
    },
    {
      kind: "table",
      id: "use-cases",
      title: "Cas d’usage de Grok Bot",
      text: ["D’après la documentation des cas d’usage de xAI. La plupart préparent le travail et attendent votre approbation avant tout envoi."],
      headers: ["Cas d’usage", "Ce que fait le Bot"],
      rows: [
        ["Point du matin", "Résume ce qui a changé pendant la nuit dans vos applications"],
        ["Gestion de la boîte de réception", "Trie les e-mails non lus par urgence et rédige des réponses"],
        ["Coordination des voyages", "Trouve deux options de vol et d’hôtel et vous laisse réserver"],
        ["Préparation de réunion", "Rédige un brief d’une page sur les participants, les échanges passés et les sujets en cours"],
        ["Marketing de contenu", "Rédige une newsletter et des posts à partir du travail livré dans la semaine"],
        ["Développement commercial", "Qualifie les leads entrants au regard de votre client idéal et rédige des réponses"],
        ["Veille concurrentielle", "Rend compte chaque semaine des lancements et changements de prix des concurrents"],
        ["Équipe de campagne", "Plusieurs Bots récupèrent les données d’inscription, rédigent le contenu de lancement et le vérifient"],
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Grok Bot vs Muse, Dots et Claude Duet",
      headers: ["", "Grok Bot", "Meta Muse", "ChatGPT dots", "Claude Duet"],
      rows: [
        ["Éditeur", "xAI", "Meta", "OpenAI", "Anthropic"],
        ["Fonctionne sur", "Un ordinateur cloud partagé par vos Bots", "Une VM cloud dédiée par personne", "Son propre ordinateur et navigateur cloud", "L’app Claude Duet"],
        ["Planification", "Routines selon un planning, Slack, GitHub, e-mail ou webhook", "Rappels et tâches récurrentes", "Rappels planifiés et vérifications récurrentes", "Vient vers vous avec ce qui demande votre attention"],
        ["Qui peut y accéder", "X Premium et au-delà, SuperGrok, offres Cursor", "États-Unis, gratuit avec limites ; Power $20/mois", "ChatGPT Pro et Business Premium", "Claude Pro, Max, Ultra aux États-Unis, liste d’attente"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Avec Crewmark",
      title: "Un coéquipier à la Grok Bot pour votre code",
      text: [
        "Grok Bot travaille dans vos applications ; Crewmark travaille dans votre dépôt. Il transforme votre propre Claude Code ou Codex en employé IA doté d’un rôle, d’un objectif chiffré, d’horaires de travail et d’une pulsation : il se réveille selon le planning, prend le ticket suivant sur un tableau, ouvre des pull requests et vous écrit quand il a besoin d’une décision.",
      ],
      steps: [
        {
          title: "Choisissez un rôle",
          text: "Partez d’un [rôle d’employé IA](/ai-employees), comme ingénieur logiciel ou spécialiste SEO.",
        },
        {
          title: "Donnez-lui des horaires et une pulsation",
          text: "Il se réveille toutes les 15 à 240 minutes pendant les horaires que vous fixez. Voir [comment faire tourner Claude Code 24 h/24, 7 j/7](/blog/run-claude-code-24-7).",
        },
        {
          title: "Comparez les agents personnels",
          text: "Voir le [comparatif des agents IA personnels](/personal-agent) et le [guide Meta Muse](/personal-agent/meta-muse).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Configurer Grok Bot" },
  mid: {
    title: "Vous voulez un coéquipier proactif pour votre code ?",
    text: "Les employés Crewmark se réveillent au rythme d’une pulsation, prennent le ticket suivant sur un tableau et ouvrent des pull requests.",
    button: "Commencer",
  },
  faq: {
    title: "FAQ",
    items: [
      {
        q: "Qu’est-ce que Grok Bot ?",
        a: "L’agent toujours actif de xAI. Chaque Bot travaille sur un ordinateur cloud, se connecte à vos applications, retient vos préférences, exécute des routines selon un planning et continue après la fermeture de votre ordinateur portable. Ce n’est ni le chatbot Grok ni le compte @grok sur X.",
      },
      {
        q: "Combien coûte Grok Bot ?",
        a: "Il n’a pas de prix propre : il est inclus dans les offres Premium, Super et Ultra de The X Subscription, les anciennes offres Cursor Pro, Pro+, Ultra et Teams, et les abonnements SuperGrok, SuperGrok Plus, SuperGrok Heavy et X Premium+ liés. Les limites d’usage varient selon l’offre.",
      },
      {
        q: "Existe-t-il un essai gratuit de Grok Bot ?",
        a: "Oui, un crédit d’usage valable 7 jours. Il est consommé par les étapes de l’agent et les tokens, n’est pas rechargé et ne se transforme jamais en offre payante ; ensuite, vous passez à une offre supérieure ou liez un compte.",
      },
      {
        q: "Grok Bot fonctionne-t-il sur Windows, Linux et Android ?",
        a: "Oui. L’app de bureau tourne sur macOS, Windows et Linux (x64 et Arm64), et il existe des apps pour iPhone (iOS 18+) et Android (9+).",
      },
      {
        q: "Grok Bot peut-il exécuter des tâches selon un planning ?",
        a: "Oui, avec les routines : selon un planning décrit en langage courant, ou à l’arrivée d’un message Slack, d’un événement GitHub ou Linear, d’un e-mail ou d’un webhook. Voir les [routines Grok Bot](/personal-agent/grok-bot-routines).",
      },
      {
        q: "Grok Bot vs Meta Muse : lequel est le meilleur ?",
        a: "Muse est conçu pour l’administratif personnel de tous, avec une offre gratuite aux États-Unis. Grok Bot est conçu pour le travail : plusieurs Bots en équipe, des routines avec déclencheurs et les outils de Cursor pour le code.",
      },
    ],
  },
  cta: {
    title: "Donnez un poste à votre agent de code, pas seulement un prompt.",
    text: "Crewmark transforme les sessions Claude Code et Codex en employés IA avec des rôles, des objectifs, des horaires de travail et une pulsation.",
    button: "Commencer",
  },
  checked: "Vérifié dans la documentation et les guides Grok Bot de xAI et la page des offres Grok Bot de Cursor le 10 novembre 2026.",
  disclaimer:
    "Crewmark est un produit indépendant, sans lien avec xAI, SpaceX, X, Cursor, Meta, OpenAI ni Anthropic, et non approuvé par eux. Les noms de produits sont des marques de leurs propriétaires.",
};
