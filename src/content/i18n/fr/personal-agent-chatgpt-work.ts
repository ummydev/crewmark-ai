import type { GuideCopy } from "@/components/landing/guide-article";

// French translation of /personal-agent/chatgpt-work; the English master is
// src/content/personal-agents/chatgpt-work.ts.

const docs = "https://learn.chatgpt.com/docs/get-started-with-work";

export const copy: GuideCopy = {
  meta: {
    title: "ChatGPT Work : le mode Work, prix, téléchargement et vs Codex",
    description:
      "ChatGPT Work expliqué : le mode Work face à Chat, les offres qui l’incluent et leurs prix, l’application de bureau, et Work vs Codex et Claude Cowork.",
  },
  breadcrumb: "ChatGPT Work",
  parent: { name: "Agents personnels", href: "/personal-agent" },
  hero: {
    kicker: "Agents personnels · OpenAI",
    title: "ChatGPT Work : ce que fait le mode Work d’OpenAI et comment l’utiliser",
    lead: "ChatGPT Work est un mode de ChatGPT pour déléguer des tâches au résultat clair. Vous passez de Chat à Work, décrivez ce que vous voulez obtenir, et ChatGPT planifie la tâche, utilise vos fichiers, vos plugins, le web, un navigateur et du code, puis vous renvoie un travail à relire, comme une présentation, un tableur, un document ou une analyse. Il partage ses capacités de base et ses limites d’utilisation avec Codex, l’agent de code d’OpenAI. Voici ce qu’il fait, quelles offres l’incluent, comment le configurer, comment il demande avant d’agir et comment il se compare à Codex, Claude Cowork et Copilot Cowork.",
    cta: "Commencer",
    secondary: "Le configurer",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "Ce qu’est ChatGPT Work",
      points: [
        "Un mode, pas une application à part : dans ChatGPT, vous passez de Chat à Work. OpenAI conseille d’utiliser Chat pour obtenir des réponses et Work pour faire réaliser des tâches complètes.",
        "Il renvoie un travail à relire : présentations, tableurs, documents, analyses et points récurrents, construits à partir de vos fichiers, de vos plugins, du web, d’un navigateur et de code.",
        "Il s’exécute dans le cloud : sur le web, les tâches tournent dans un environnement cloud géré sur l’infrastructure d’OpenAI et continuent après la fermeture de l’application. Dans l’application de bureau, vous pouvez aussi choisir de travailler en local avec vos fichiers, vos applications et votre navigateur, lorsque c’est activé.",
        "Il partage son cœur avec Codex : OpenAI présente Work comme les mêmes capacités de base, avec une expérience conçue pour le travail de tous les jours. Il laisse de côté les détails techniques comme les sorties Git et shell et le panneau des pull requests.",
        "Il découpe le travail : ChatGPT peut confier des parties indépendantes d’une tâche à des subagents, et vous pouvez suivre leur progression.",
        "Il répète le travail : tâches planifiées et, sur le web et le mobile, tâches déclenchées par des événements Gmail, Slack ou GitHub.",
        "OpenAI l’a présenté dans son récapitulatif What’s new de la semaine du 6 au 10 juillet 2026.",
      ],
    },
    {
      kind: "table",
      id: "plans",
      title: "Prix de ChatGPT Work : quelles offres l’incluent",
      text: [
        "Prix tirés de la documentation tarifaire d’OpenAI le 13 novembre 2026, en dollars américains. Work utilise les mêmes tarifs, crédits et limites d’utilisation que Codex, et les tâches plus longues ou plus complexes peuvent consommer davantage de crédits.",
      ],
      headers: ["Offre", "Prix", "ChatGPT Work"],
      rows: [
        ["Free", "$0/mois", "Accès limité, dans l’application de bureau uniquement ; pas de tâches planifiées"],
        ["Go", "$8/mois", "Accès limité, dans l’application de bureau uniquement ; tâches planifiées"],
        ["Plus", "$20/mois", "Bureau, web et mobile ; crédits supplémentaires disponibles à l’achat"],
        ["Pro", "À partir de $100/mois (offres à $100, $200 ou $500)", "Bureau, web et mobile ; crédits supplémentaires disponibles à l’achat"],
        ["Business (2 utilisateurs ou plus)", "$20/utilisateur/mois en facturation annuelle, ou $25 en facturation mensuelle", "Crédits partagés de l’espace de travail sur les contrats à crédits"],
        ["Enterprise et Edu", "Contacter l’équipe commerciale", "Crédits partagés de l’espace de travail ; les administrateurs contrôlent l’accès à Work, aux plugins et à l’utilisation du navigateur"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Configurer ChatGPT Work",
      steps: [
        {
          title: "Choisissez où l’utiliser",
          text: "Work fonctionne sur le web, dans l’application de bureau ChatGPT pour macOS, Windows et Linux, et dans ChatGPT pour iOS et Android. Sur Free et Go, téléchargez l’application de bureau : sur ces offres, Work n’est disponible que là.",
        },
        { title: "Passez de Chat à Work", text: "Lancez une tâche en mode Work et décrivez le résultat que vous voulez obtenir, comme une note de synthèse, une présentation, une analyse ou un tableur." },
        {
          title: "Donnez-lui des sources",
          text: "Importez des fichiers ou utilisez un projet, et connectez des plugins comme Slack, Google Drive, SharePoint, l’e-mail, les agendas, les CRM et les outils de suivi de projet. Dans l’application de bureau, il peut aussi utiliser des fichiers locaux, une extension de navigateur et Computer Use sur macOS et Windows, dans les régions prises en charge.",
        },
        {
          title: "Choisissez un modèle et sa façon de demander",
          text: "Le guide suggère GPT-6 Astra pour le travail exigeant, GPT-6.1 Sol pour le travail complexe à moindre coût et Luna pour les tâches plus simples. Dans l’application de bureau, commencez avec le mode d’autorisation Ask for approval.",
        },
        {
          title: "Rendez la tâche récurrente",
          text: "Créez une tâche planifiée depuis Chat ou Work sur le web ou dans l’application de bureau, ou, sur le web et le mobile, déclenchez-en une à partir d’un événement Gmail, Slack ou GitHub. Une même tâche ne peut pas combiner un déclencheur d’événement et un planning horaire.",
        },
      ],
      source: { label: "Source : documentation d’OpenAI, Get started with Work", href: docs },
    },
    {
      kind: "text",
      id: "safety",
      title: "Comment ChatGPT Work vous laisse le contrôle",
      points: [
        "ChatGPT affiche sa progression et s’arrête quand il a besoin d’informations ou d’une validation pour des actions importantes ; vous pouvez répondre à ses questions ou changer de direction en cours de tâche.",
        "Dans l’application de bureau, les modes d’autorisation sont Ask for approval (le point de départ recommandé), Approve for me (les demandes éligibles passent par une revue automatique) et l’accès complet là où il est disponible. Un sandbox fixe des limites sur les fichiers et le réseau.",
        "Par défaut, le navigateur cloud demande avant de visiter un nouveau site (Always ask, Auto approve ou Always allow) et peut redemander avant les actions lourdes de conséquences.",
        "Une tâche cloud n’hérite pas des fichiers, des applications, des sessions de navigateur ni de l’accès réseau de votre ordinateur, et le navigateur cloud ne peut pas utiliser vos onglets, extensions, historique ni mots de passe enregistrés en local.",
        "Les administrateurs de l’espace de travail contrôlent l’accès à Work, aux plugins, à l’utilisation du navigateur et à l’accès réseau. Dans les espaces de travail Enterprise et Edu, les plugins sont désactivés par défaut et l’accès au navigateur cloud doit être activé par un administrateur.",
      ],
    },
    {
      kind: "table",
      id: "vs",
      title: "ChatGPT Work vs Codex, Claude Cowork et Copilot Cowork",
      text: [
        "Informations tirées de la documentation et des pages de tarifs de chaque éditeur, vérifiées le 13 novembre 2026. D’autres collègues IA sont comparés dans [les outils de collègues IA](/blog/ai-coworker). Pour le code, voir [Claude Code vs Codex](/blog/claude-code-vs-codex) et [les cas d’usage de Codex](/use-cases/codex) ; pour l’agent d’Anthropic, le [guide Claude Cowork](/personal-agent/claude-cowork).",
        "Côte à côte : [ChatGPT Work vs Codex](/compare/chatgpt-work-vs-codex), [Claude Cowork vs ChatGPT Work](/compare/claude-cowork-vs-chatgpt-work). Guides : [Claude Cowork](/personal-agent/claude-cowork), [Copilot Cowork](/personal-agent/copilot-cowork).",
      ],
      headers: ["", "ChatGPT Work", "Codex", "Claude Cowork", "Copilot Cowork"],
      rows: [
        ["Éditeur", "OpenAI", "OpenAI", "Anthropic", "Microsoft"],
        ["Conçu pour", "Les tâches qui aboutissent à un travail à relire : présentations, tableurs, documents, analyses", "Le code : inspecte, modifie et exécute du code dans un dépôt", "Le travail intellectuel hors code", "Les tâches en plusieurs étapes dans Microsoft 365"],
        ["Où il s’exécute", "Cloud d’OpenAI ; en local dans l’application de bureau, si c’est activé", "CLI, extension d’IDE et application de bureau ChatGPT ; Codex Cloud", "Cloud d’Anthropic ; fichiers locaux via Claude Desktop", "Cloud de Microsoft, avec OneDrive et SharePoint"],
        ["Qui peut y accéder", "Offres ChatGPT ; accès limité sur Free et Go", "Offres ChatGPT, ou une clé API OpenAI (sans les fonctionnalités cloud)", "Offres Claude payantes, dès Pro à $20/mois", "Licence Microsoft 365 Copilot plus Copilot Credits"],
        ["Usage", "Partage tarifs, crédits et limites avec Codex", "Partage tarifs, crédits et limites avec Work", "Consomme les limites de l’offre plus vite que le chat", "Facturé à l’usage en Copilot Credits"],
        ["Travail récurrent", "Tâches planifiées ; événements Gmail, Slack et GitHub", "Tâches planifiées dans l’application ChatGPT et sur le web", "Tâches planifiées, de toutes les heures à chaque semaine, dans le cloud", "Prompts planifiés ; événements e-mail, Teams et connecteurs"],
        ["Validations", "Ask for approval, Approve for me ou accès complet ; un sandbox", "Ask for approval, Approve for me ou accès complet ; un sandbox", "Modes Manual, Auto ou Skip", "Boîte de dialogue de validation avec aperçu avant les actions sensibles"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Avec Crewmark",
      title: "Work pour vos documents. Crewmark pour votre base de code.",
      text: [
        "ChatGPT Work prend une tâche et vous renvoie un travail à relire. Crewmark transforme vos propres sessions Claude Code ou Codex en employés IA dotés d’un rôle, d’objectifs chiffrés, d’horaires de travail et d’une pulsation, chacun prenant des tickets sur un tableau partagé, pour que le travail d’ingénierie, de SEO et de marketing dans un dépôt soit fait selon un planning.",
      ],
      steps: [
        { title: "Choisissez un rôle", text: "Partez des [rôles d’employés IA](/ai-employees), comme ingénieur logiciel ou spécialiste SEO." },
        { title: "Mettez le travail sur un tableau", text: "Assignez des tickets et rendez récurrents ceux qui reviennent régulièrement ; la pulsation réveille l’employé pour qu’il prenne le suivant." },
        { title: "Voyez ce qu’il sait faire", text: "Des missions, avec leur configuration, se trouvent dans [les cas d’usage de Codex](/use-cases/codex) et [les cas d’usage de Claude Code](/use-cases/claude-code)." },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Configurer ChatGPT Work" },
  mid: {
    title: "Envie d’un collègue IA pour votre base de code ?",
    text: "Crewmark donne à votre Codex ou Claude Code un rôle, une pulsation et un tableau partagé.",
    button: "Commencer",
  },
  faq: {
    title: "FAQ sur ChatGPT Work",
    items: [
      {
        q: "Qu’est-ce que ChatGPT Work ?",
        a: "Un mode de ChatGPT pour déléguer des tâches au résultat clair. ChatGPT planifie la tâche, utilise vos fichiers, vos plugins, le web, un navigateur et du code, puis renvoie un travail à relire, comme des présentations, des tableurs, des documents et des analyses.",
      },
      {
        q: "ChatGPT Work vs Chat : quelle différence ?",
        a: "Ce sont deux modes de la même application. OpenAI suggère Chat pour les réponses et Work pour les tâches complètes : Work planifie des tâches en plusieurs étapes, continue dans le cloud après la fermeture de l’application et s’arrête pour demander une validation avant les actions importantes.",
      },
      {
        q: "ChatGPT Work est-il gratuit, ou faut-il Plus ?",
        a: "Free ($0) et Go ($8 par mois) ont un accès limité à Work, dans l’application de bureau uniquement. Plus ($20 par mois) et Pro (à partir de $100 par mois) ont Work sur ordinateur, sur le web et sur mobile, et peuvent acheter des crédits supplémentaires. Business coûte $20 par utilisateur et par mois en facturation annuelle ; Enterprise et Edu passent par l’équipe commerciale.",
      },
      {
        q: "ChatGPT Work vs Codex : quelle différence ?",
        a: "Ils partagent les capacités de base, l’exécution, les tarifs, les crédits et les limites d’utilisation. Codex est l’agent de code d’OpenAI, avec une CLI, une extension d’IDE et des tâches cloud pour les dépôts ; Work est l’expérience destinée au travail de tous les jours, sans détails comme les sorties Git et shell ni panneau de pull requests.",
      },
      {
        q: "Faut-il télécharger une application pour ChatGPT Work ?",
        a: "Pas sur Plus ni sur Pro : Work fonctionne aussi sur le web et dans ChatGPT pour iOS et Android. Sur Free et Go, il n’est disponible que dans l’application de bureau ChatGPT, qui tourne sur macOS, Windows et Linux. Travailler avec des fichiers locaux, l’extension de navigateur et Computer Use nécessite aussi l’application de bureau.",
      },
      {
        q: "Les étudiants peuvent-ils utiliser ChatGPT Work ?",
        a: "Sur les offres Free et Go, Work est inclus avec un accès limité dans l’application de bureau. Les espaces de travail ChatGPT Edu utilisent Work sur les crédits partagés de l’espace de travail, les administrateurs contrôlant l’accès à Work, aux plugins et à l’utilisation du navigateur ; les tarifs Edu passent par l’équipe commerciale d’OpenAI.",
      },
    ],
  },
  cta: {
    title: "Confiez les documents à Work. Donnez aussi un poste à vos agents de code.",
    text: "Crewmark transforme les sessions Codex et Claude Code en employés IA dotés de rôles, d’objectifs, d’horaires de travail et d’une pulsation.",
    button: "Commencer",
  },
  checked: "Vérifié dans la documentation et les pages de tarifs de ChatGPT Work et de Codex d’OpenAI le 13 novembre 2026.",
  disclaimer:
    "Crewmark est un produit indépendant, sans lien avec OpenAI, Anthropic ni Microsoft, et non approuvé par eux. Les noms de produits sont des marques de leurs propriétaires.",
};
