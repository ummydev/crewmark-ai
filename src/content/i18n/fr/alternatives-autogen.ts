import type { GuideCopy } from "@/components/landing/guide-article";

// French translation of /alternatives/autogen; the English master is src/content/product-alternatives/autogen.ts.

export const copy: GuideCopy = {
  meta: {
    title: "AutoGen : alternatives en 2026, CrewAI, LangGraph et autres",
    description:
      "Le README d’AutoGen indique que Microsoft ne le maintient plus. Comparez CrewAI, LangGraph, OpenClaw, Hermes Agent, Paperclip et Crewmark : licence et prix.",
  },
  breadcrumb: "Alternatives à AutoGen",
  parent: { name: "Comparatifs", href: "/compare" },
  hero: {
    kicker: "Alternatives · Microsoft AutoGen",
    title: "Alternatives à AutoGen en 2026 : les frameworks et agents vers lesquels migrer",
    lead: "AutoGen est le framework open source de Microsoft pour les applications multi-agents en Python et .NET, avec AutoGen Studio comme interface de prototypage no-code. Lors de notre vérification du 13 novembre 2026, son README indiquait : « Ce projet a été archivé et n’est plus activement maintenu par Microsoft. » Il oriente les nouveaux utilisateurs vers Microsoft Agent Framework, que Microsoft présente comme le « successeur direct » d’AutoGen. Cette page présente ce successeur et sept autres options, des frameworks de code aux agents qui tournent de façon autonome, avec la licence, le prix et le profil auquel chacune convient.",
    cta: "Commencer",
    secondary: "Voir la comparaison",
    secondaryHref: "#compare",
  },
  sections: [
    {
      kind: "table",
      id: "compare",
      title: "Les alternatives à AutoGen en un coup d’œil",
      text: [
        "Informations tirées du README, de la documentation et de la page de tarifs de chaque produit, vérifiées le 13 novembre 2026. Prix en dollars américains. AutoGen lui-même est gratuit et open source (code sous MIT), et vous payez votre fournisseur de modèles.",
      ],
      headers: ["Alternative", "Ce que c’est", "Open source", "Prix à partir de"],
      rows: [
        [
          "[CrewAI](/alternatives/crewai)",
          "Un framework Python pour des crews d’agents définis par leur rôle et des flows pilotés par des événements, plus la plateforme commerciale CrewAI AMP",
          "Framework oui (MIT) ; AMP est commercial",
          "Framework gratuit, plus votre fournisseur de modèles ; AMP Basic gratuit (50 exécutions de workflow par mois)",
        ],
        [
          "[LangGraph](/alternatives/langgraph)",
          "Le framework de LangChain pour des agents de longue durée et à état, construits sous forme de graphe, en Python et JS/TS",
          "Framework oui (MIT) ; LangSmith est commercial",
          "Framework gratuit ; LangSmith Developer $0 par siège et par mois, Plus $39 par siège et par mois",
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
      id: "successor",
      title: "Ce qui remplace AutoGen : Microsoft Agent Framework",
      text: [
        "La réponse de Microsoft elle-même, c’est Agent Framework. Microsoft Learn indique : « Agent Framework est le successeur direct, créé par les mêmes équipes », et propose un guide de migration depuis AutoGen. Le reste de cette page présente d’autres projets.",
      ],
      points: [
        "Le README d’AutoGen recommande Agent Framework pour les nouveaux projets et indique qu’AutoGen est « désormais géré par la communauté ».",
        "Sur l’usage en production, le README indique : « AutoGen a été développé pour la recherche et l’expérimentation et, alors qu’il passe au statut archivé, nous continuons à déconseiller son utilisation en production. »",
        "AutoGen Studio, son interface no-code, « n’est pas conçu pour être une application prête pour la production », selon le même README.",
      ],
    },
    {
      kind: "text",
      id: "frameworks",
      title: "Des frameworks multi-agents pour écrire du code",
      text: [
        "Les plus proches d’AutoGen : des bibliothèques open source que vous appelez depuis votre propre code, avec des agents qui travaillent ensemble. Côte à côte : [CrewAI vs AutoGen](/compare/crewai-vs-autogen) et [CrewAI vs LangGraph](/compare/crewai-vs-langgraph).",
      ],
      points: [
        "CrewAI : un framework Python sous licence MIT. Chaque agent est défini par un rôle, un objectif et une backstory ; quand la délégation est activée, les agents se passent du travail et se posent des questions, et les Flows ajoutent un contrôle étape par étape, piloté par des événements. CrewAI AMP, la plateforme commerciale, ajoute un Studio no-code, le tracing, la planification cron et le déploiement. Choisissez-le si vous écrivez du Python (3.10 ou plus, en dessous de 3.14) et voulez des agents définis par leur rôle dans votre propre application. Prix : [tarifs de CrewAI](/pricing/crewai).",
        "LangGraph : le framework de LangChain sous licence MIT pour des agents de longue durée et à état, définis comme un graphe d’état, de nœuds et d’arêtes en Python ou en JS/TS. Il se met en pause pour attendre une intervention humaine grâce aux interrupts et reprend après une panne ; LangSmith ajoute le tracing, l’évaluation et le déploiement sur Agent Server. Choisissez-le si vous voulez un contrôle bas niveau de chaque étape. Prix : [tarifs de LangGraph](/pricing/langgraph).",
      ],
    },
    {
      kind: "text",
      id: "agents",
      title: "Des agents prêts à l’emploi qui tournent de façon autonome",
      text: [
        "AutoGen est une bibliothèque pour construire des agents. Ces deux-là sont des agents que vous installez et faites tourner, avec des planificateurs intégrés. Comparés dans [Hermes Agent vs OpenClaw](/blog/hermes-agent-vs-openclaw).",
      ],
      points: [
        "OpenClaw : un assistant personnel sous licence MIT qui tourne comme un Gateway sur votre propre ordinateur et répond dans WhatsApp, Telegram, Slack, Discord et d’autres applications de messagerie. Plusieurs agents peuvent tourner sur un même Gateway, et un preset d’équipe crée un coordinateur avec des agents chercheur, rédacteur et relecteur. Choisissez-le si vous voulez un seul assistant sur du matériel que vous contrôlez, avec des fournisseurs de modèles interchangeables. Pour en savoir plus : [alternatives à OpenClaw](/blog/openclaw-alternatives).",
        "Hermes Agent : l’agent personnel de Nous Research, sous licence MIT. Il écrit des skills à partir de l’expérience, garde sa propre mémoire et dispose d’un planificateur cron intégré ; en Bot Mode, des Bots nommés, avec leurs propres modèles et routines, s’envoient directement des messages. Choisissez-le si vous voulez plusieurs agents spécialisés joignables depuis un terminal, une application de bureau et des applications de messagerie. Pour en savoir plus : [alternatives à Hermes Agent](/alternatives/hermes-agent).",
      ],
    },
    {
      kind: "text",
      id: "teams",
      title: "Faire travailler des agents de code en équipe",
      text: [
        "Ces outils coordonnent des agents de code qui existent déjà, plutôt que des agents que vous construisez. Voir [Paperclip vs CrewAI](/compare/paperclip-vs-crewai) et [Claude Code agent teams vs OpenClaw](/compare/claude-code-agent-teams-vs-openclaw).",
      ],
      points: [
        "Paperclip : un serveur Node.js et une interface web auto-hébergés, sous licence MIT, qui font tourner une équipe d’agents comme une entreprise : un organigramme avec des rôles et des budgets, des tickets assignés à des agents ou à des personnes, et des routines déclenchées par cron, webhook ou API. Il pilote les agents que vous apportez, comme Claude Code, Codex, OpenClaw et Hermes, via des adaptateurs. Choisissez-le si vous voulez de nombreux agents différents au service d’un même objectif, avec des plafonds de dépenses, sur votre propre serveur.",
        "Claude Code agent teams : une fonctionnalité expérimentale de Claude Code, désactivée par défaut. Une session principale crée des coéquipiers, des instances Claude Code distinctes qui partagent une liste de tâches et s’envoient directement des messages, et vous pouvez écrire à n’importe lequel d’entre eux. La consommation de tokens est plus élevée, car chaque coéquipier est une instance Claude distincte. Choisissez-la si vous payez déjà un forfait Claude et voulez un groupe d’agents qui se parlent sur une même tâche de code.",
      ],
    },
    {
      kind: "steps",
      id: "how-to-choose",
      title: "Comment choisir une alternative à AutoGen",
      steps: [
        {
          title: "Vous maintenez une application AutoGen ?",
          text: "Regardez Microsoft Agent Framework et son guide de migration depuis AutoGen sur Microsoft Learn. C’est la voie que recommande le README d’AutoGen.",
        },
        {
          title: "Vous voulez continuer à écrire du code d’agents ?",
          text: "CrewAI et LangGraph sont des bibliothèques sous licence MIT, comme AutoGen. CrewAI est une bibliothèque Python ; LangGraph existe en Python et en JS/TS.",
        },
        {
          title: "Besoin d’un service hébergé pour exécuter et tracer vos agents ?",
          text: "AutoGen n’a pas de service hébergé. LangSmith Plus ($39 par siège et par mois) inclut un Small Agent Server ; l’offre Basic de CrewAI AMP est gratuite pour 50 exécutions de workflow par mois.",
        },
        {
          title: "Vous voulez des agents qui continuent sans vous ?",
          text: "OpenClaw et Hermes Agent ont des planificateurs intégrés, Paperclip exécute des routines via cron, des webhooks ou une API, et Crewmark réveille Claude Code ou Codex au rythme d’une pulsation pendant les horaires de travail. Le README d’AutoGen ne mentionne pas de planification.",
        },
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Avec Crewmark",
      title: "AutoGen construit des applications d’agents. Crewmark donne un poste à vos agents de code.",
      text: [
        "Crewmark n’est pas un framework pour construire des applications multi-agents. C’est un gestionnaire de tickets pour une équipe d’employés IA : chacun est une conversation Claude Code ou Codex sur votre propre ordinateur, avec un rôle, des KPI et des projets. Il se réveille au rythme d’une pulsation pendant ses horaires de travail, prend des tickets sur un tableau partagé et, quand il a besoin d’une revue ou d’une autorisation, passe le ticket en Needs action et pose la question sur le ticket.",
        "Il est open source sous GPL-3.0 et gratuit pour 1 projet avec jusqu’à 3 employés IA. Vous continuez de payer votre fournisseur d’agent comme d’habitude, et votre ordinateur doit rester allumé pour les pulsations. Les offres sont sur la [page tarifs](/pricing).",
      ],
      steps: [
        {
          title: "Choisir un rôle",
          text: "Partez des [rôles d’employés IA](/ai-employees), comme ingénieur logiciel ou spécialiste SEO, et rédigez ses KPI et ses projets.",
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
    title: "Des agents qui prennent la tâche suivante d’eux-mêmes",
    text: "Crewmark réveille votre session Claude Code ou Codex au rythme d’une pulsation et lui confie le ticket suivant d’un tableau partagé.",
    button: "Commencer",
  },
  faq: {
    title: "FAQ : alternatives à AutoGen",
    items: [
      {
        q: "Qu’est-ce qui a remplacé AutoGen ?",
        a: "Microsoft Agent Framework. Le README d’AutoGen y renvoie les nouveaux utilisateurs, et Microsoft Learn le présente comme « le successeur direct, créé par les mêmes équipes », avec un guide de migration depuis AutoGen.",
      },
      {
        q: "Microsoft AutoGen est-il encore maintenu ?",
        a: "Pas par Microsoft. Le 13 novembre 2026, son README indiquait : « Ce projet a été archivé et n’est plus activement maintenu par Microsoft. Microsoft ne fournit ni correctifs de bugs, ni correctifs de sécurité, ni nouvelles fonctionnalités, ni support pour ce projet. » Le README précise aussi que le projet est désormais géré par la communauté.",
      },
      {
        q: "Existe-t-il une alternative gratuite à AutoGen ?",
        a: "Plusieurs sont gratuites et open source : les frameworks CrewAI et LangGraph, OpenClaw, Hermes Agent et Paperclip en auto-hébergement, tous sous MIT. Avec chacun, vous payez votre fournisseur de modèles. Crewmark est open source sous GPL-3.0 et propose une offre gratuite pour 1 projet avec jusqu’à 3 employés IA.",
      },
      {
        q: "Quelle alternative à AutoGen Studio ?",
        a: "Le README d’AutoGen indique qu’AutoGen Studio « n’est pas conçu pour être une application prête pour la production ». Pour un éditeur visuel, CrewAI AMP a un Studio no-code, et son offre Basic est gratuite, avec un éditeur visuel et 50 exécutions de workflow par mois. Côté LangGraph, LangSmith Studio est l’outil de LangChain pour le prototypage visuel.",
      },
      {
        q: "AutoGen est-il gratuit ?",
        a: "Oui. Le code est open source sous MIT (la documentation sous CC-BY-4.0), et vous payez votre fournisseur de modèles. Le README ne mentionne aucun service AutoGen hébergé ou payant.",
      },
      {
        q: "Quelles alternatives à AutoGen permettent aux agents de se parler ?",
        a: "Les agents CrewAI peuvent se déléguer du travail et se poser des questions quand la délégation est activée ; LangGraph utilise des subagents, des handoffs et des routeurs que vous concevez dans le graphe ; OpenClaw offre un accès d’agent à agent entre les agents d’un même Gateway ; les Bots d’Hermes Agent s’envoient des messages en Bot Mode ; dans les Claude Code agent teams, les coéquipiers s’envoient directement des messages. Dans Crewmark, les agents collaborent via les tickets : ils se les assignent, les commentent et se @mentionnent.",
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
    "Crewmark est un produit indépendant, sans lien avec Microsoft ni avec aucune autre entreprise citée sur cette page, et non approuvé par elles. Les noms de produits sont des marques de leurs propriétaires. Les informations sur les autres produits proviennent de leurs pages publiques et peuvent avoir changé depuis.",
};
