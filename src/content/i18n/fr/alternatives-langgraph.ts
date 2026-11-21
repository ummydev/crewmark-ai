import type { GuideCopy } from "@/components/landing/guide-article";

// French translation of /alternatives/langgraph; the English master is src/content/product-alternatives/langgraph.ts.

export const copy: GuideCopy = {
  meta: {
    title: "LangGraph : alternatives en 2026, CrewAI, AutoGen et autres",
    description:
      "Alternatives à LangGraph comparées : CrewAI, AutoGen, OpenClaw, Hermes Agent, Paperclip, Claude Code agent teams et Crewmark, par licence, prix et usage.",
  },
  breadcrumb: "Alternatives à LangGraph",
  parent: { name: "Comparatifs", href: "/compare" },
  hero: {
    kicker: "Alternatives · LangChain LangGraph",
    title: "Alternatives à LangGraph en 2026 : frameworks, agents prêts à l’emploi et équipes d’agents",
    lead: "LangGraph est le framework open source (MIT) de LangChain pour des agents de longue durée et à état : vous définissez un workflow comme un graphe d’état, de nœuds et d’arêtes, en Python ou en JS/TS. Il est bas niveau par conception et « n’impose ni prompts ni architecture d’agent ». Sur LangSmith, la plateforme de LangChain, l’offre gratuite Developer comprend un siège et aucun Agent Server, et le déploiement auto-hébergé est réservé à Enterprise. Si vous voulez des agents définis par leur rôle, un agent prêt à l’emploi plutôt qu’une bibliothèque, ou une équipe d’agents de code, voici sept options avec leur licence, leur prix et le profil auquel chacune convient.",
    cta: "Commencer",
    secondary: "Voir la comparaison",
    secondaryHref: "#compare",
  },
  sections: [
    {
      kind: "table",
      id: "compare",
      title: "Les alternatives à LangGraph en un coup d’œil",
      text: [
        "Informations tirées du README, de la documentation et de la page de tarifs de chaque produit, vérifiées le 13 novembre 2026. Prix en dollars américains. LangGraph lui-même est gratuit sous MIT ; LangSmith Plus coûte $39 par siège et par mois. Détails : [tarifs de LangGraph](/pricing/langgraph).",
      ],
      headers: ["Alternative", "Ce que c’est", "Open source", "Prix à partir de"],
      rows: [
        [
          "[CrewAI](/compare/crewai-vs-langgraph)",
          "Un framework Python pour des crews d’agents définis par leur rôle et des flows pilotés par des événements, plus la plateforme commerciale CrewAI AMP",
          "Framework oui (MIT) ; AMP est commercial",
          "Framework gratuit, plus votre fournisseur de modèles ; AMP Basic gratuit (50 exécutions de workflow par mois)",
        ],
        [
          "[AutoGen](/alternatives/autogen)",
          "Le framework multi-agents de Microsoft en Python et .NET ; son README indique qu’il est archivé et n’est plus maintenu par Microsoft",
          "Oui (code sous MIT, documentation sous CC-BY-4.0)",
          "Gratuit, plus votre fournisseur de modèles ; aucun service hébergé",
        ],
        [
          "[OpenClaw](/blog/openclaw-alternatives)",
          "Un assistant IA personnel qui tourne sur votre propre ordinateur et vous répond dans des applications de messagerie",
          "Oui (MIT)",
          "Gratuit ; aucune offre payante ni service hébergé ; vous payez votre fournisseur de modèles",
        ],
        [
          "[Hermes Agent](/alternatives/hermes-agent)",
          "L’agent personnel de Nous Research, qui écrit et affine ses propres skills, utilisable depuis un terminal, une application de bureau ou des applications de messagerie",
          "Oui (MIT)",
          "Agent gratuit, plus votre fournisseur de modèles ; Nous Portal Plus en option à $20 par mois",
        ],
        [
          "[Paperclip](/alternatives/paperclip)",
          "Un serveur auto-hébergé avec une interface web, qui fait tourner les agents que vous apportez (Claude Code, Codex, OpenClaw et d’autres) comme une entreprise, avec un organigramme, des budgets et des tâches",
          "Oui (MIT)",
          "Version auto-hébergée gratuite ; aucun prix publié ; version cloud sur liste d’attente",
        ],
        [
          "[Claude Code agent teams](/blog/claude-code-agent-teams)",
          "Une fonctionnalité expérimentale de Claude Code où une session principale crée des coéquipiers qui partagent une liste de tâches et s’envoient des messages",
          "Non",
          "Inclus avec Claude Code dans les forfaits Claude payants, à partir de Pro à $20 par mois ($17 par mois en facturation annuelle)",
        ],
        [
          "[Crewmark](/ai-employees)",
          "Un gestionnaire de tickets pour une équipe d’employés IA, chacun étant une conversation Claude Code ou Codex sur votre ordinateur qui se réveille au rythme d’une pulsation",
          "Oui (GPL-3.0)",
          "Gratuit (1 projet, jusqu’à 3 employés IA) ; Pro à $5 par mois bientôt disponible ; usage de l’agent payé à votre fournisseur d’agent",
        ],
      ],
    },
    {
      kind: "text",
      id: "frameworks",
      title: "Autres frameworks d’agents",
      text: [
        "Des bibliothèques que vous appelez depuis votre propre code, comme LangGraph. Côte à côte : [CrewAI vs LangGraph](/compare/crewai-vs-langgraph) et [CrewAI vs AutoGen](/compare/crewai-vs-autogen).",
      ],
      points: [
        "CrewAI : un framework Python sous licence MIT. LangGraph n’a pas de notion de rôle intégrée ; dans CrewAI, chaque agent est défini par un rôle, un objectif et une backstory. Quand la délégation est activée, les agents se passent du travail et se posent des questions, et les Flows ajoutent un contrôle étape par étape, piloté par des événements, avec état et embranchements. CrewAI AMP ajoute un Studio no-code, le tracing, la planification cron et le déploiement. Choisissez-le si vous écrivez du Python (3.10 ou plus, en dessous de 3.14) et voulez des agents organisés par rôle. Prix : [tarifs de CrewAI](/pricing/crewai).",
        "AutoGen : le framework multi-agents de Microsoft sous licence MIT, en Python et .NET, avec des group chats et des équipes selector et swarm. Le 13 novembre 2026, son README indiquait que le projet « a été archivé et n’est plus activement maintenu par Microsoft », déconseillait son utilisation en production et orientait les nouveaux utilisateurs vers Microsoft Agent Framework, son successeur. Choisissez-le si vous maintenez une application AutoGen existante ou voulez étudier des patterns multi-agents. Pour en savoir plus : [alternatives à AutoGen](/alternatives/autogen).",
      ],
    },
    {
      kind: "text",
      id: "agents",
      title: "Des agents prêts à l’emploi plutôt qu’une bibliothèque",
      text: [
        "Avec LangGraph, c’est vous qui construisez l’agent. Ces deux-là sont des agents que vous installez et faites tourner, chacun avec un planificateur intégré. Comparés dans [Hermes Agent vs OpenClaw](/blog/hermes-agent-vs-openclaw).",
      ],
      points: [
        "OpenClaw : un assistant personnel sous licence MIT qui tourne comme un Gateway sur votre propre ordinateur et répond dans WhatsApp, Telegram, Slack, Discord et d’autres applications de messagerie. Il fait tourner plusieurs agents sur un même Gateway, dispose d’un planificateur Automations intégré, et le projet n’a ni offre payante ni service hébergé. Choisissez-le si vous voulez un seul assistant sur du matériel que vous contrôlez, avec des fournisseurs de modèles interchangeables. Pour en savoir plus : [alternatives à OpenClaw](/blog/openclaw-alternatives).",
        "Hermes Agent : l’agent personnel de Nous Research, sous licence MIT. Il écrit des skills à partir de l’expérience, garde sa propre mémoire et exécute des routines grâce à un planificateur cron intégré ; en Bot Mode, des Bots nommés, avec leurs propres modèles, s’envoient directement des messages. Choisissez-le si vous voulez un agent qui améliore ses propres skills au fil du temps et que vous pouvez joindre depuis un terminal, une application de bureau et des applications de messagerie. Pour en savoir plus : [alternatives à Hermes Agent](/alternatives/hermes-agent).",
      ],
    },
    {
      kind: "text",
      id: "teams",
      title: "Coordonner les agents de code que vous utilisez déjà",
      text: [
        "Si les agents que vous voulez coordonner sont des agents de code comme Claude Code ou Codex, ces outils les font travailler en équipe. Voir [Paperclip vs CrewAI](/compare/paperclip-vs-crewai) et [Claude Code agent teams vs OpenClaw](/compare/claude-code-agent-teams-vs-openclaw).",
      ],
      points: [
        "Paperclip : un serveur Node.js et une interface web auto-hébergés, sous licence MIT, qui font tourner des agents comme une entreprise : un organigramme avec des rôles et des budgets, des tickets assignés à des agents ou à des personnes, des validations, et des routines déclenchées par cron, webhook ou API. Il se décrit comme « pas un framework d’agents » : il pilote les agents que vous apportez, comme Claude Code, Codex et OpenClaw, via des adaptateurs. Choisissez-le si vous voulez de nombreux agents au service d’un même objectif, avec des plafonds de dépenses, sur votre propre serveur.",
        "Claude Code agent teams : une fonctionnalité expérimentale de Claude Code, désactivée par défaut. Une session principale crée des coéquipiers, des instances Claude Code distinctes qui partagent une liste de tâches avec dépendances et s’envoient directement des messages. Choisissez-la si vous payez déjà un forfait Claude et voulez plusieurs instances Claude Code sur une même tâche de code.",
      ],
    },
    {
      kind: "steps",
      id: "how-to-choose",
      title: "Comment choisir une alternative à LangGraph",
      steps: [
        {
          title: "Besoin d’un contrôle bas niveau de chaque étape ?",
          text: "C’est précisément ce pour quoi LangGraph est conçu. Pour un point de départ de plus haut niveau, son README renvoie vers Deep Agents, construit sur LangGraph, qui ajoute des subagents.",
        },
        {
          title: "Vous voulez des agents définis par leur rôle ?",
          text: "Les agents CrewAI ont un rôle, un objectif et une backstory ; Paperclip a un organigramme avec des titres et des fiches de poste ; Crewmark donne à chaque employé IA un rôle, des KPI et des projets.",
        },
        {
          title: "Besoin d’exécutions planifiées ?",
          text: "LangGraph a des tâches cron sur LangSmith Agent Server, ce qui n’est pas précisé pour la bibliothèque seule. CrewAI a la planification cron sur AMP. OpenClaw et Hermes Agent ont des planificateurs intégrés, Paperclip exécute des routines, et Crewmark a une pulsation et des tickets récurrents.",
        },
        {
          title: "Vous surveillez les coûts ?",
          text: "Les frameworks open source sont gratuits, et vous payez les appels aux modèles. Les tâches cron de LangGraph envoient la même entrée à chaque exécution, et la documentation de LangChain recommande de supprimer celles qui ne servent plus, car les exécutions récurrentes peuvent entraîner des frais d’API LLM. Paperclip a des budgets avec des plafonds bloquants ; Crewmark utilise votre propre abonnement Claude Code ou Codex.",
        },
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Avec Crewmark",
      title: "LangGraph intègre des agents à votre application. Crewmark fait travailler vos agents de code en équipe.",
      text: [
        "Crewmark n’est pas un framework, et vous n’écrivez pas de graphe. C’est un gestionnaire de tickets pour une équipe d’employés IA : chacun est une conversation Claude Code ou Codex sur votre propre ordinateur, avec un rôle, des KPI et des projets. Il se réveille au rythme d’une pulsation pendant ses horaires de travail, prend des tickets sur un tableau partagé et, quand il a besoin d’une revue ou d’une autorisation, passe le ticket en Needs action et pose la question sur le ticket.",
        "Il est open source sous GPL-3.0 et gratuit pour 1 projet avec jusqu’à 3 employés IA. Vous continuez de payer votre fournisseur d’agent comme d’habitude, et votre ordinateur doit rester allumé pour les pulsations. Les offres sont sur la [page tarifs](/pricing).",
      ],
      steps: [
        {
          title: "Choisir un rôle",
          text: "Partez des [rôles d’employés IA](/ai-employees), comme ingénieur logiciel ou analyste de données, et rédigez ses KPI et ses projets.",
        },
        {
          title: "Mettre le travail sur un tableau",
          text: "Assignez des tickets à l’employé ou à des personnes, et rendez récurrents ceux qui reviennent chaque jour, chaque semaine ou chaque mois.",
        },
        {
          title: "Définir ses horaires",
          text: "Choisissez des horaires de travail et une pulsation comprise entre 15 minutes et 24 heures. Des missions, avec leur configuration, se trouvent dans [les cas d’usage de Claude Code](/use-cases/claude-code) et [les cas d’usage de Codex](/use-cases/codex).",
        },
      ],
    },
  ],
  mid: {
    title: "Une équipe d’agents sans écrire de graphe",
    text: "Crewmark réveille votre session Claude Code ou Codex au rythme d’une pulsation et lui confie le ticket suivant d’un tableau partagé.",
    button: "Commencer",
  },
  faq: {
    title: "FAQ : alternatives à LangGraph",
    items: [
      {
        q: "Quelles sont les alternatives open source à LangGraph ?",
        a: "Le framework de CrewAI, AutoGen (dont le README indique qu’il est archivé et n’est plus maintenu par Microsoft), OpenClaw, Hermes Agent et Paperclip sont tous sous licence MIT. Crewmark est open source sous GPL-3.0. Claude Code, qui fait tourner les agent teams, n’est pas open source.",
      },
      {
        q: "LangGraph est-il gratuit ?",
        a: "Le framework est gratuit sous MIT. LangSmith, la plateforme de LangChain, propose une offre Developer à $0 par siège et par mois (1 siège, jusqu’à 5 000 traces de base par mois puis paiement à l’usage, sans Agent Server), Plus à $39 par siège et par mois avec un Small Agent Server inclus, et Enterprise à tarif sur mesure. Pour en savoir plus : [tarifs de LangGraph](/pricing/langgraph).",
      },
      {
        q: "LangGraph vs CrewAI : quelle différence ?",
        a: "LangGraph est bas niveau : vous construisez un graphe d’état, de nœuds et d’arêtes, sans notion de rôle intégrée. CrewAI définit chaque agent par un rôle, un objectif et une backstory et les regroupe en crews, avec des Flows pour le contrôle étape par étape. Les deux frameworks sont sous licence MIT. CrewAI est un framework Python ; LangGraph existe en Python et en JS/TS. Voir [CrewAI vs LangGraph](/compare/crewai-vs-langgraph).",
      },
      {
        q: "Faut-il LangChain pour utiliser LangGraph ?",
        a: "Non. La documentation de LangChain indique que « LangGraph ne nécessite pas LangChain ». Les exemples utilisent souvent les intégrations de modèles de LangChain, mais LangGraph fonctionne avec les modèles qu’appelle votre code, quels qu’ils soient.",
      },
      {
        q: "AutoGen est-il encore une alternative à LangGraph en 2026 ?",
        a: "Son README indique que le projet « a été archivé et n’est plus activement maintenu par Microsoft » et déconseille son utilisation en production. Microsoft oriente les nouveaux utilisateurs vers Microsoft Agent Framework, qu’il présente comme le successeur direct d’AutoGen. Voir [alternatives à AutoGen](/alternatives/autogen).",
      },
      {
        q: "Quelles alternatives à LangGraph exécutent des agents selon un planning ?",
        a: "OpenClaw (Automations), Hermes Agent (un planificateur cron intégré), Paperclip (des routines via cron, des webhooks ou une API) et Crewmark (une pulsation pendant les horaires de travail et des tickets récurrents). CrewAI planifie sur sa plateforme AMP, et Claude Code propose des tâches planifiées à part des agent teams. LangGraph lui-même exécute des tâches cron sur LangSmith Agent Server.",
      },
    ],
  },
  cta: {
    title: "Donnez à vos agents de code des rôles et un tableau.",
    text: "Crewmark transforme les sessions Claude Code et Codex en employés IA dotés de rôles, de KPI, d’horaires de travail et d’une pulsation.",
    button: "Commencer",
  },
  checked:
    "Informations vérifiées le 13 novembre 2026 dans le README, la documentation et la page de tarifs de chaque produit.",
  disclaimer:
    "Crewmark est un produit indépendant, sans lien avec LangChain ni avec aucune autre entreprise citée sur cette page, et non approuvé par elles. Les noms de produits sont des marques de leurs propriétaires. Les informations sur les autres produits proviennent de leurs pages publiques et peuvent avoir changé depuis.",
};
