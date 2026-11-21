import type { GuideCopy } from "@/components/landing/guide-article";

// French translation of /alternatives/factory; the English master is src/content/product-alternatives/factory.ts.

export const copy: GuideCopy = {
  meta: {
    title: "Factory AI : alternatives en 2026, agents de code comparés",
    description:
      "Alternatives à Factory AI comparées : Devin, Claude Code, Codex, OpenCode en open source, Cursor Projects et Conductor, avec prix, limites et profils visés.",
  },
  breadcrumb: "Alternatives à Factory",
  parent: { name: "Comparatifs", href: "/compare" },
  hero: {
    kicker: "Alternatives · Factory",
    title: "Alternatives à Factory AI : Devin, Claude Code, Codex, OpenCode et d’autres, comparés",
    lead: "Factory conçoit les Droids, des agents de code qui tournent dans la Factory App sur votre ordinateur, dans la Droid CLI, en mode headless dans la CI et sur des ordinateurs cloud hébergés par Factory. Les offres individuelles vont de Free (avec votre propre inférence) à $200 par mois. Pro, Plus et Max ont des limites de débit glissantes sur 5 heures, 7 jours et 30 jours, Teams est plafonné à 10 sièges, et la Droid CLI et la Factory App n’ont pas de licence open source. Voici 7 alternatives, de Devin et Claude Code à OpenCode en open source, avec ce que coûte chacune.",
    cta: "Commencer",
    secondary: "Les comparer",
    secondaryHref: "#compare",
  },
  sections: [
    {
      kind: "table",
      id: "compare",
      title: "Les alternatives à Factory en un coup d’œil",
      text: [
        "Informations tirées des pages, de la documentation ou du GitHub de chaque éditeur, vérifiées le 13 novembre 2026. Prix en dollars américains. Ce n’est pas un classement. Les offres de Factory sont détaillées dans [tarifs de Factory](/pricing/factory).",
      ],
      headers: ["Alternative", "Ce que c’est", "Open source", "Prix à partir de"],
      rows: [
        [
          "[Factory](/pricing/factory) (pour référence)",
          "Droids : des agents de code dans une application de bureau, une CLI, la CI et des ordinateurs cloud hébergés par Factory",
          "Non",
          "Free $0/mois avec votre propre inférence ; Pro $20/mois",
        ],
        [
          "[Devin](/pricing/devin)",
          "L’ingénieur logiciel IA de Cognition : une VM cloud par session, plus Devin Desktop et Devin CLI",
          "Non",
          "Free $0 (quota léger) ; Pro $20/mois",
        ],
        [
          "[Claude Code](/compare/factory-vs-claude-code)",
          "L’agent de code d’Anthropic dans le terminal, l’IDE, l’application de bureau, le web et le mobile",
          "Non (dépôt public, tous droits réservés)",
          "Dans les forfaits Claude payants : Pro $20/mois, ou $17/mois en facturation annuelle",
        ],
        [
          "[Codex](/blog/claude-code-vs-codex)",
          "L’agent de code d’OpenAI : CLI, extension d’IDE, application de bureau ChatGPT et Codex Cloud",
          "En partie : la CLI, le SDK et l’App Server sont sous Apache-2.0",
          "Dans les forfaits ChatGPT à partir de Plus à $20/mois, ou avec une clé API OpenAI",
        ],
        [
          "[OpenCode](/pricing/opencode)",
          "Un agent de code pour 200+ fournisseurs de modèles, y compris des modèles locaux",
          "Oui, MIT",
          "Gratuit, avec des modèles gratuits ; OpenCode Go $10/mois",
        ],
        [
          "[Cursor Projects](/personal-agent/cursor-projects)",
          "Un agent coordinateur qui planifie le travail de code et fait tourner des agents cloud Cursor en parallèle",
          "Non",
          "Cursor Premium $30/mois, ou $300/an",
        ],
        [
          "[Conductor](/pricing/conductor)",
          "Une application Mac qui fait tourner Claude Code, Codex, Cursor et OpenCode côte à côte dans des worktrees git",
          "Non",
          "Utilisation gratuite ; fermé aux nouvelles inscriptions et aux téléchargements depuis le 4 novembre 2026",
        ],
        [
          "[Crewmark](/ai-employees)",
          "Un tableau de tickets pour des employés IA qui tournent comme Claude Code ou Codex sur votre ordinateur",
          "Oui, GPL-3.0",
          "Gratuit (1 projet, jusqu’à 3 employés IA) ; Pro $5/mois bientôt disponible",
        ],
      ],
    },
    {
      kind: "text",
      id: "cloud",
      title: "Des agents de code dans le cloud, comme les Droids",
      text: [
        "Comme les Droid Computers de Factory, ils font tourner les agents dans le cloud de l’éditeur : le travail continue même ordinateur portable fermé.",
      ],
      points: [
        "[Devin](/pricing/devin) (Cognition) : un ingénieur logiciel IA qui écrit, exécute et teste du code et ouvre des pull requests, chaque session cloud tournant sur sa propre machine virtuelle, plus Devin Desktop et Devin CLI en local. Il prend des tickets Linear et Jira, exécute des Automations selon des plannings ou sur des événements, et une session coordinatrice peut lancer des Devins enfants et leur envoyer des messages. Free $0 (quota léger), Pro $20/mois, Max $200/mois ; Teams coûte « $80/mois pour l’offre d’équipe + $40/mois par siège de développeur complet », jusqu’à 100 utilisateurs. Choisissez-le si vous voulez confier des tickets à un agent et récupérer des pull requests, avec des offres d’équipe au-delà de 10 sièges. Pour en savoir plus : [alternatives à Devin](/blog/devin-alternatives), [Devin vs Claude Code](/compare/devin-vs-claude-code).",
        "[Cursor Projects](/personal-agent/cursor-projects) : une fonctionnalité de Cursor où un agent coordinateur planifie une fonctionnalité, une migration ou une application complète, la délègue à des agents qui tournent en parallèle sur les Cloud Agents de Cursor, puis vous rapporte le travail terminé pour que vous le vérifiiez. Un Project a un tableau de tâches et des notes partagées, et peut agir selon un planning, sur un canal Slack ou sur vos pull requests. Il est disponible dans Cursor Premium ($30/mois, ou $300/an) et au-delà, Teams et Enterprise, mais pas dans Free ni Plus. Choisissez-le si vous travaillez déjà dans Cursor et voulez un coordinateur qui pilote de nombreux agents cloud.",
      ],
    },
    {
      kind: "text",
      id: "labs",
      title: "Les agents de code d’Anthropic et d’OpenAI",
      text: [
        "L’offre Free de Factory peut fonctionner avec une connexion ChatGPT ou vos propres clés API. Si vous payez déjà Anthropic ou OpenAI, leurs propres agents de code sont inclus dans ces forfaits. Côte à côte : [Factory vs Claude Code](/compare/factory-vs-claude-code), [Claude Code vs Codex](/blog/claude-code-vs-codex), [ChatGPT Work vs Codex](/compare/chatgpt-work-vs-codex).",
      ],
      points: [
        "[Claude Code](/compare/factory-vs-claude-code) (Anthropic) : lit votre base de code, modifie des fichiers et exécute des commandes depuis le terminal, des extensions d’IDE, une application de bureau, le web et les applications mobiles Claude, sur les modèles Claude. Il exécute des tâches planifiées cloud, des tâches planifiées sur le bureau et `/loop`, et dispose de subagents ainsi que d’agent teams expérimentales. Il est inclus dans les forfaits Claude payants, pas dans Free : Pro $20/mois ($17/mois en facturation annuelle), Max $100, Ultra $200, et des sièges Team pour 2 à 150 personnes. Choisissez-le si vous payez déjà Claude.",
        "[Codex](/blog/claude-code-vs-codex) (OpenAI) : un agent de code en CLI dans le terminal, en extension d’IDE, dans l’application de bureau ChatGPT et dans Codex Cloud, avec `codex exec` pour les scripts et la CI. La CLI, le SDK et l’App Server sont open source sous Apache-2.0. Il est inclus dans les forfaits ChatGPT à partir de Plus à $20/mois, Pro à partir de $100/mois et Business à partir de $20/utilisateur/mois en facturation annuelle, ou utilisable avec une clé API OpenAI (CLI, SDK et extension d’IDE uniquement). Choisissez-le si vous payez déjà ChatGPT ou voulez une CLI open source. Voir [Devin vs Codex](/compare/devin-vs-codex).",
      ],
    },
    {
      kind: "text",
      id: "open-source",
      title: "Une alternative open source à Factory : OpenCode",
      points: [
        "[OpenCode](/pricing/opencode) : un agent de code sous licence MIT qui fonctionne avec 200+ fournisseurs de modèles, y compris des modèles locaux, sous forme d’interface terminal, d’application de bureau, d’application web et de SDK. Vous pouvez commencer avec des modèles gratuits qui ne nécessitent aucun compte (avec une limite quotidienne de requêtes), vous connecter avec ChatGPT Plus ou Pro ou GitHub Copilot, apporter vos propres clés API, ou payer OpenCode Go ($10/mois) ou Go Plus ($40/mois). Les agents et subagents personnalisés sont des fichiers dans votre dépôt, avec des règles allow, ask ou deny par action. Les exécutions planifiées sont expérimentales et à activer explicitement. Choisissez-le si vous voulez un agent open source que vous pouvez brancher sur presque n’importe quel modèle. Pour en savoir plus : [alternatives à OpenCode](/blog/opencode-alternatives), [OpenCode vs Claude Code](/compare/opencode-vs-claude-code).",
      ],
    },
    {
      kind: "text",
      id: "parallel",
      title: "Faire tourner plusieurs agents côte à côte : Conductor",
      points: [
        "[Conductor](/pricing/conductor) : une application Mac qui fait tourner des agents Claude Code, Codex, Cursor et OpenCode côte à côte, chaque tâche dans son propre worktree git, et vous aide à relire le diff, ouvrir une pull request et merger. Le 4 novembre 2026, elle a annoncé rejoindre Meta : les nouvelles inscriptions et les téléchargements sont fermés, Conductor Cloud passe en lecture seule le 13 novembre 2026 et ferme le 20 novembre 2026, et l’application locale reçoit de nouveaux modèles et des correctifs de bugs critiques jusqu’au début de 2027. Ne la choisissez que si elle est déjà installée sur votre Mac. Pour en savoir plus : [alternatives à Conductor](/blog/conductor-alternatives), [Vibe Kanban vs Conductor](/compare/vibe-kanban-vs-conductor).",
      ],
    },
    {
      kind: "steps",
      id: "how-to-choose",
      title: "Comment choisir une alternative à Factory",
      steps: [
        {
          title: "Décider où tourne l’agent",
          text: "Devin et Cursor Projects tournent dans le cloud de l’éditeur, comme les Droid Computers. Claude Code et Codex tournent sur votre machine et dans leur propre cloud. OpenCode tourne sur votre machine. Conductor tourne en local sur un Mac.",
        },
        {
          title: "Compter les sièges",
          text: "Factory Teams est plafonné à 10 sièges. Devin Teams va jusqu’à 100 utilisateurs, l’offre Team de Claude Code couvre de 2 à 150 personnes, Codex Business commence à 2 utilisateurs, et Cursor Teams est facturé par siège.",
        },
        {
          title: "Vérifier comment l’usage est limité",
          text: "Les offres Pro, Plus et Max de Factory ont des limites glissantes sur 5 heures, 7 jours et 30 jours, plus un Extra Usage prépayé. Devin utilise des quotas quotidiens et/ou hebdomadaires plus des crédits prépayés. Claude Code partage ses limites sur 5 heures et hebdomadaires avec le chat Claude. Les modèles gratuits d’OpenCode ont une limite quotidienne de requêtes.",
        },
        {
          title: "Décider si vous avez besoin d’open source",
          text: "OpenCode est sous MIT et la CLI de Codex sous Apache-2.0. Factory, Devin, Claude Code, Cursor Projects et Conductor ne publient aucune licence open source pour le produit lui-même.",
        },
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Avec Crewmark",
      title: "Crewmark : donnez à Claude Code ou Codex un rôle et un planning",
      text: [
        "Crewmark n’est pas un agent de code. C’est un gestionnaire de tickets pour une équipe d’employés IA : chacun est une conversation Claude Code ou Codex sur votre propre ordinateur, avec un rôle, des objectifs et des horaires de travail. Il se réveille au rythme d’une pulsation, prend des tickets sur un tableau partagé et tient leur statut à jour, sur l’abonnement d’agent que vous payez déjà. Votre ordinateur doit rester allumé pour les pulsations.",
        "Il est open source (GPL-3.0) et peut être auto-hébergé. L’offre Free couvre 1 projet et jusqu’à 3 employés IA ; Pro ($5/mois) et Team ($10/mois) arrivent bientôt, et la facturation n’est pas encore en place, donc tous les comptes peuvent utiliser Crewmark gratuitement d’ici là. L’usage de l’agent est payé à votre fournisseur d’agent. Détails sur les [tarifs de Crewmark](/pricing).",
      ],
      steps: [
        {
          title: "Choisir un rôle",
          text: "Donnez à chaque employé un rôle, des objectifs et des projets, par exemple ingénieur logiciel. Voir les [rôles d’employés IA](/ai-employees).",
        },
        {
          title: "Mettre le travail sur un tableau",
          text: "Assignez des tickets avec statuts et priorités, et rendez récurrents ceux qui reviennent régulièrement. Les agents s’assignent des tickets et se @mentionnent ; quand l’un d’eux a besoin d’une revue ou d’une autorisation, il passe le ticket en Needs action et attend.",
        },
        {
          title: "Définir des horaires de travail",
          text: "La pulsation réveille chaque employé à un intervalle de 15 minutes à 24 heures pendant ses horaires de travail. Des missions, avec leur configuration, se trouvent dans [les cas d’usage de Claude Code](/use-cases/claude-code) et [les cas d’usage de Codex](/use-cases/codex).",
        },
      ],
    },
  ],
  mid: {
    title: "Vous payez déjà Claude Code ou Codex ?",
    text: "Crewmark leur donne des rôles, une pulsation et un tableau partagé, pour qu’ils continuent de travailler sans prompt. Gratuit jusqu’à 3 employés.",
    button: "Commencer",
  },
  faq: {
    title: "FAQ : alternatives à Factory",
    items: [
      {
        q: "Existe-t-il une alternative gratuite à Factory AI ?",
        a: "OpenCode est gratuit, avec des modèles gratuits qui ne nécessitent aucun compte (limite quotidienne de requêtes). Devin a une offre Free avec un quota léger. L’offre Free de Crewmark couvre 1 projet et jusqu’à 3 employés IA. Factory lui-même a une offre Free à $0/mois si vous apportez votre propre inférence : connectez-vous avec ChatGPT, GitHub Copilot ou OpenRouter, ou branchez vos propres clés API.",
      },
      {
        q: "Existe-t-il une alternative open source aux Droids de Factory ?",
        a: "OpenCode (MIT) est un agent de code entièrement open source, et la CLI, le SDK et l’App Server de Codex sont sous Apache-2.0. Crewmark (GPL-3.0) est aussi open source, même s’il fait tourner Claude Code ou Codex plutôt que son propre agent. Factory ne publie aucune licence open source pour la Droid CLI ni pour la Factory App ; son dépôt github.com/Factory-AI/factory ne contient qu’un README et de la documentation.",
      },
      {
        q: "Factory vs Devin : quelle différence ?",
        a: "Les deux tournent dans le cloud et en local, prennent des tickets Linear et Jira et exécutent des automatisations. Les Droids de Factory tournent dans la Factory App, la Droid CLI, la CI et les Droid Computers ; Devin exécute chaque session cloud sur sa propre VM, plus Devin Desktop et Devin CLI. Les deux affichent Pro à $20/mois. Factory Teams coûte $60/mois par équipe plus $40/mois par personne, jusqu’à 10 sièges ; Devin Teams coûte « $80/mois pour l’offre d’équipe + $40/mois par siège de développeur complet », jusqu’à 100 utilisateurs.",
      },
      {
        q: "Factory vs Claude Code : quelle différence ?",
        a: "Claude Code est l’agent d’Anthropic sur les modèles Claude, inclus dans les forfaits Claude payants. Les Droids de Factory fonctionnent avec GPT-5, Claude Opus et Sonnet, Gemini et des modèles à poids ouverts, ou avec vos propres clés, et ajoutent des Droid Computers hébergés, la délégation depuis Slack, Linear et Jira, et des automatisations planifiées. Voir [Factory vs Claude Code](/compare/factory-vs-claude-code).",
      },
      {
        q: "Puis-je utiliser mon abonnement ChatGPT au lieu de payer Factory ?",
        a: "Codex est inclus dans les forfaits ChatGPT à partir de Plus à $20/mois. OpenCode vous permet de vous connecter avec ChatGPT Plus ou Pro, et les offres Pro, Max et Teams de Devin peuvent utiliser un forfait ChatGPT lié pour l’usage des modèles GPT. L’offre Free de Factory permet aussi de se connecter avec ChatGPT. Crewmark fait tourner Codex sur votre abonnement ChatGPT.",
      },
      {
        q: "Quelle alternative à Factory fait tourner plusieurs agents en parallèle ?",
        a: "La session coordinatrice de Devin lance des Devins enfants et leur envoie des messages. Cursor Projects fait tourner un coordinateur avec des agents exécutants dans le cloud de Cursor. Claude Code a des subagents et des agent teams expérimentales, Codex lance des subagents en parallèle, et OpenCode peut démarrer plusieurs agents sur le même projet. Crewmark fait tourner une équipe d’employés IA depuis un seul tableau partagé.",
      },
    ],
  },
  cta: {
    title: "Donnez un poste à vos agents de code, pas seulement un prompt.",
    text: "Crewmark transforme les sessions Claude Code et Codex en employés IA dotés de rôles, d’objectifs, d’horaires de travail et d’une pulsation.",
    button: "Commencer",
  },
  checked: "Vérifié le 13 novembre 2026 sur les pages, la documentation, les tarifs et le GitHub de chaque produit.",
  disclaimer:
    "Crewmark est un produit indépendant, sans lien avec Factory, Cognition, Anthropic, OpenAI, Anomaly, Cursor, Conductor ni Meta, et non approuvé par eux. Les noms de produits sont des marques de leurs propriétaires. Les informations sur les autres produits proviennent de leurs pages publiques et peuvent avoir changé depuis.",
};
