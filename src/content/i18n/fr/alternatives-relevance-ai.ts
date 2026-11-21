import type { GuideCopy } from "@/components/landing/guide-article";

// French translation of /alternatives/relevance-ai; the English master is
// src/content/product-alternatives/relevance-ai.ts.

export const copy: GuideCopy = {
  meta: {
    title: "Relevance AI : alternatives open source et hébergées en 2026",
    description:
      "Relevance AI a retiré son offre Free et ne liste qu’Enterprise. Comparez CrewAI, LangGraph, AutoGen, Paperclip, OpenBot, Lindy et Crewmark, prix à l’appui.",
  },
  breadcrumb: "Alternatives à Relevance AI",
  parent: { name: "Comparatifs", href: "/compare" },
  hero: {
    kicker: "Alternatives · Relevance AI",
    title: "Alternatives à Relevance AI : frameworks d’agents open source, équipes d’agents auto-hébergées et assistants hébergés",
    lead: "Relevance AI est une plateforme low-code hébergée pour créer des agents IA et les relier en équipes multi-agents qu’elle appelle une AI Workforce, pour la vente, le support et les opérations. Au 13 novembre 2026, sa documentation indique que l’offre Free est retirée, pour les nouvelles inscriptions comme pour les comptes existants, et sa page de tarifs ne liste qu’une offre, Enterprise, via l’équipe commerciale. Elle n’est pas open source et n’indique aucune option d’auto-hébergement. Cette page présente 7 alternatives : des frameworks open source, des équipes d’agents auto-hébergées, un assistant hébergé et Crewmark, avec ce que coûte chacune.",
    cta: "Commencer",
    secondary: "Les comparer",
    secondaryHref: "#compare",
  },
  sections: [
    {
      kind: "table",
      id: "compare",
      title: "Les alternatives à Relevance AI en un coup d’œil",
      text: [
        "Informations tirées des pages, de la documentation ou du GitHub de chaque éditeur, vérifiées le 13 novembre 2026. Prix en dollars américains, sauf quand l’éditeur n’en donne aucun. Ce n’est pas un classement.",
      ],
      headers: ["Alternative", "Ce que c’est", "Open source", "Prix à partir de"],
      rows: [
        [
          "[Relevance AI](/pricing/relevance-ai) (pour référence)",
          "Une plateforme low-code hébergée pour des agents IA et des Workforces multi-agents",
          "Non",
          "Enterprise uniquement, via l’équipe commerciale ; offre Free retirée",
        ],
        [
          "[CrewAI](/alternatives/crewai)",
          "Un framework Python pour des crews d’agents définis par leur rôle, plus la plateforme CrewAI AMP",
          "Framework oui, MIT ; AMP est commercial",
          "Framework gratuit ; AMP Basic gratuit (50 exécutions de workflow par mois)",
        ],
        [
          "[LangGraph](/alternatives/langgraph)",
          "Le framework de LangChain pour des agents de longue durée et à état, construits sous forme de graphes dans le code",
          "Framework oui, MIT ; LangSmith est commercial",
          "Framework gratuit ; LangSmith Developer $0, Plus $39/siège/mois",
        ],
        [
          "[AutoGen](/alternatives/autogen)",
          "Le framework multi-agents de Microsoft pour Python et .NET ; son README indique qu’il est archivé",
          "Oui : code sous MIT, documentation sous CC-BY-4.0",
          "Gratuit ; aucun service hébergé",
        ],
        [
          "[Paperclip](/alternatives/paperclip)",
          "Un serveur auto-hébergé qui fait tourner les agents que vous apportez comme une entreprise, avec un organigramme et des budgets",
          "Oui, MIT",
          "Auto-hébergé gratuit ; version cloud sur liste d’attente",
        ],
        [
          "[OpenBot](/personal-agent/openbot)",
          "L’espace de travail auto-hébergeable de CopilotKit pour collègues IA",
          "Oui, MIT (utilise CopilotKit Intelligence, sous licence distincte)",
          "Gratuit pour les projets personnels ; Business jusqu’à $29 par utilisateur actif et par mois",
        ],
        [
          "[Lindy](/alternatives/lindy)",
          "Un assistant IA hébergé pour la boîte de réception, l’agenda, les réunions et Slack, facturé en crédits",
          "Non",
          "$50 de crédits gratuits pendant 7 jours ; ensuite à partir de $29.99/mois par utilisateur actif",
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
      id: "frameworks",
      title: "Frameworks d’agents open source (vous écrivez le code)",
      text: [
        "Ils remplacent l’éditeur de Relevance AI par une bibliothèque : vous définissez les agents et les workflows en code et payez votre fournisseur de modèles. CrewAI et LangGraph ont aussi des plateformes commerciales pour déployer ce que vous construisez. Côte à côte : [CrewAI vs LangGraph](/compare/crewai-vs-langgraph), [CrewAI vs AutoGen](/compare/crewai-vs-autogen).",
      ],
      points: [
        "[CrewAI](/alternatives/crewai) : un framework Python sous licence MIT pour des crews d’agents, chacun défini par un rôle, un objectif et une backstory, plus des Flows pilotés par des événements pour un contrôle étape par étape. Les agents peuvent se déléguer du travail et se poser des questions. Sa plateforme commerciale, CrewAI AMP, a une offre Basic gratuite avec un éditeur visuel, un copilote IA et 50 exécutions de workflow par mois, et une offre Enterprise à tarif sur mesure qui peut se déployer dans votre propre VPC. Choisissez-le si vous voulez des équipes multi-agents définies par rôle en Python, avec un éditeur no-code à disposition. Prix : [tarifs de CrewAI](/pricing/crewai).",
        "[LangGraph](/alternatives/langgraph) : le framework de LangChain sous licence MIT pour des agents de longue durée et à état, écrits sous forme de graphe d’état, de nœuds et d’arêtes en Python ou en JavaScript. Il offre une exécution durable et des pauses pour intervention humaine (human-in-the-loop). LangSmith ajoute le tracing, l’évaluation et le déploiement : Developer $0 (1 siège, sans Agent Server), Plus $39/siège/mois avec un petit Agent Server inclus, Enterprise sur mesure. Choisissez-le si vous voulez un contrôle bas niveau de chaque étape. Prix : [tarifs de LangGraph](/pricing/langgraph).",
        "[AutoGen](/alternatives/autogen) : le framework open source de Microsoft pour les applications multi-agents en Python et .NET, avec des group chats, des handoffs et AutoGen Studio pour le prototypage no-code. Son README indique que le projet « a été archivé et n’est plus activement maintenu par Microsoft » et oriente les nouveaux utilisateurs vers Microsoft Agent Framework, que Microsoft présente comme le successeur direct d’AutoGen. Ne le choisissez que si vous maintenez une application AutoGen existante ou voulez étudier ses patterns.",
      ],
    },
    {
      kind: "text",
      id: "self-hosted",
      title: "Équipes d’agents auto-hébergées (sans code de framework)",
      text: [
        "Comme Relevance AI, elles vous donnent une équipe d’agents à gérer depuis une application web ou de bureau, mais vous les faites tourner sur votre propre machine ou vos serveurs. Voir [Paperclip vs CrewAI](/compare/paperclip-vs-crewai).",
      ],
      points: [
        "[Paperclip](/alternatives/paperclip) : un serveur Node.js et une interface web sous licence MIT qui font tourner une équipe d’agents IA comme une entreprise. Vous fixez un objectif, construisez un organigramme avec des rôles, des liens hiérarchiques et des budgets, et assignez des tickets aux agents que vous apportez, comme Claude Code, Codex ou OpenClaw. Les routines créent des tâches récurrentes à partir de déclencheurs cron, webhook ou API, et les validations et les plafonds budgétaires bloquants laissent une personne aux commandes. Il est uniquement auto-hébergé pour l’instant ; une version cloud est sur liste d’attente. Choisissez-le si vous voulez coordonner de nombreux agents différents vers un même objectif et plafonner leurs dépenses.",
        "[OpenBot](/personal-agent/openbot) (CopilotKit) : un espace de travail auto-hébergeable où chaque Bot dispose de son propre navigateur, de ses fichiers et de ses outils, avec des routines, des validations et un journal d’activité. Il tourne comme application de bureau pour Mac et Windows ou sur Kubernetes pour une équipe, avec connexion d’entreprise, rôles, permissions d’outils et audit dans l’édition équipe. Vous apportez des modèles OpenAI, Claude, Gemini ou ouverts, ou vos propres agents via AG-UI. Gratuit pour les projets personnels ; OpenBot for Business coûte jusqu’à $29 par utilisateur actif et par mois, plus 5 % des dépenses mensuelles en modèles au-delà de $5 000. Choisissez-le si vous voulez des collègues IA avec validations et piste d’audit sur votre propre infrastructure.",
      ],
    },
    {
      kind: "text",
      id: "hosted",
      title: "Un assistant hébergé : Lindy",
      points: [
        "[Lindy](/alternatives/lindy) : un assistant IA hébergé unique plutôt qu’une équipe que vous construisez. Il gère la boîte de réception, l’agenda, les réunions, la recherche, les rapports et les relances via Slack, l’e-mail, iMessage, les SMS, les appels téléphoniques et une extension Chrome dans Gmail, exécute des routines selon un planning ou sur un événement, et attend votre accord avant toute action ayant un impact extérieur. Il démarre avec $50 de crédits gratuits valables 7 jours, puis facture chaque utilisateur actif à partir de $29.99/mois pour 3 000 crédits. Choisissez-le si vous voulez un assistant prêt à l’emploi auquel vous pouvez vous inscrire vous-même. Voir [Relevance AI vs Lindy](/compare/relevance-ai-vs-lindy).",
      ],
    },
    {
      kind: "steps",
      id: "how-to-choose",
      title: "Comment choisir une alternative à Relevance AI",
      steps: [
        {
          title: "Décider si vous allez écrire du code",
          text: "CrewAI, LangGraph et AutoGen sont des bibliothèques que vous programmez. Paperclip, OpenBot et Lindy sont des applications que vous configurez. L’offre Basic gratuite de CrewAI AMP ajoute un éditeur visuel si vous voulez un entre-deux.",
        },
        {
          title: "Décider où il s’exécute",
          text: "Relevance AI et Lindy sont hébergés. Paperclip est uniquement auto-hébergé pour l’instant ; OpenBot tourne sur votre ordinateur portable ou Kubernetes ; les frameworks tournent dans votre propre code, avec CrewAI AMP et LangSmith comme plateformes hébergées facultatives.",
        },
        {
          title: "Vérifier ce à quoi vous pouvez vous inscrire dès aujourd’hui",
          text: "La page de tarifs publique de Relevance AI ne liste qu’Enterprise, via l’équipe commerciale. CrewAI AMP Basic et LangSmith Developer sont des offres gratuites, Lindy démarre avec des crédits gratuits et sans carte bancaire, OpenBot est gratuit pour les projets personnels, et la version auto-hébergée de Paperclip ne nécessite aucun compte Paperclip.",
        },
        {
          title: "Vérifier que le framework est maintenu",
          text: "Le README d’AutoGen indique que Microsoft ne le maintient plus et déconseille son utilisation en production pendant son passage au statut archivé. Pour les nouveaux projets, Microsoft oriente vers Microsoft Agent Framework.",
        },
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Avec Crewmark",
      title: "Crewmark : une équipe d’employés IA sur Claude Code ou Codex",
      text: [
        "Crewmark a un périmètre plus étroit que Relevance AI. Il ne construit pas d’agents ; il donne un poste au Claude Code ou au Codex que vous utilisez déjà. Chaque employé IA est une conversation Claude Code ou Codex sur votre propre ordinateur, avec un rôle, des objectifs et des horaires de travail. Il se réveille au rythme d’une pulsation, prend des tickets sur un tableau partagé et tient leur statut à jour. Les agents s’assignent des tickets, commentent et se @mentionnent, et chaque événement réveille l’agent concerné.",
        "Il est open source (GPL-3.0) et peut être auto-hébergé. L’offre Free couvre 1 projet et jusqu’à 3 employés IA ; Pro ($5/mois) et Team ($10/mois) arrivent bientôt, et la facturation n’est pas encore en place, donc tous les comptes peuvent utiliser Crewmark gratuitement d’ici là. L’usage de l’agent est payé à votre fournisseur d’agent, et votre ordinateur doit rester allumé pour les pulsations. Détails sur les [tarifs de Crewmark](/pricing).",
      ],
      steps: [
        {
          title: "Choisir un rôle",
          text: "Donnez à chaque employé un rôle, des objectifs et des projets, par exemple spécialiste SEO ou ingénieur logiciel. Voir les [rôles d’employés IA](/ai-employees).",
        },
        {
          title: "Mettre le travail sur un tableau",
          text: "Assignez des tickets avec statuts et priorités, et rendez récurrents ceux qui reviennent régulièrement. Quand un agent a besoin d’une revue, d’une autorisation ou d’une information, il passe le ticket en Needs action et attend.",
        },
        {
          title: "Définir des horaires de travail",
          text: "La pulsation réveille chaque employé à un intervalle de 15 minutes à 24 heures pendant ses horaires de travail. Des missions, avec leur configuration, se trouvent dans [les cas d’usage de Claude Code](/use-cases/claude-code) et [les cas d’usage de Codex](/use-cases/codex).",
        },
      ],
    },
  ],
  mid: {
    title: "Envie d’agents à lancer dès aujourd’hui ?",
    text: "Crewmark transforme votre Claude Code ou Codex en employés IA dotés de rôles, d’une pulsation et d’un tableau partagé. Gratuit jusqu’à 3 employés.",
    button: "Commencer",
  },
  faq: {
    title: "FAQ : alternatives à Relevance AI",
    items: [
      {
        q: "Existe-t-il une alternative open source à Relevance AI ?",
        a: "Oui. CrewAI et LangGraph sont des frameworks sous licence MIT, et le code d’AutoGen est sous MIT, même si son README indique qu’il est archivé. Paperclip (MIT) et OpenBot (un modèle d’application sous MIT reposant sur CopilotKit Intelligence, sous licence distincte) sont des applications auto-hébergées pour faire tourner des équipes d’agents, et Crewmark est sous GPL-3.0. Relevance AI lui-même n’est pas open source.",
      },
      {
        q: "Relevance AI a-t-il une offre gratuite ?",
        a: "Non. Au 13 novembre 2026, sa documentation indique que l’offre Free est retirée, pour les nouvelles inscriptions comme pour les comptes existants, et sa page de tarifs ne liste qu’une offre, Enterprise, à tarif sur mesure via l’équipe commerciale. Détails sur les [tarifs de Relevance AI](/pricing/relevance-ai).",
      },
      {
        q: "Existe-t-il une alternative gratuite à Relevance AI ?",
        a: "Les frameworks CrewAI, LangGraph et AutoGen sont gratuits ; vous payez votre fournisseur de modèles. L’offre Basic de CrewAI AMP est gratuite avec 50 exécutions de workflow par mois, et l’offre Developer de LangSmith coûte $0 pour 1 siège. Paperclip est gratuit en auto-hébergement, OpenBot est gratuit pour les projets personnels, Lindy démarre avec $50 de crédits pendant 7 jours, et l’offre Free de Crewmark couvre jusqu’à 3 employés IA.",
      },
      {
        q: "Existe-t-il une alternative no-code à Relevance AI ?",
        a: "L’offre Basic gratuite de CrewAI AMP inclut un éditeur visuel et un copilote IA. Lindy se configure dans la conversation, sans éditeur. AutoGen Studio est une interface de prototypage no-code, mais son README indique qu’il n’est pas conçu pour être une application prête pour la production.",
      },
      {
        q: "Puis-je auto-héberger une alternative à Relevance AI ?",
        a: "Oui. Paperclip tourne comme un seul processus Node.js ou une image Docker, OpenBot sur votre ordinateur portable ou Kubernetes, et Crewmark depuis son dépôt (Node.js, PostgreSQL et connexion Google). Les frameworks CrewAI, LangGraph et AutoGen tournent dans votre propre code ; CrewAI AMP Enterprise peut se déployer dans votre propre VPC, et l’Agent Server auto-hébergé de LangSmith est une option Enterprise. Relevance AI n’indique aucune option d’auto-hébergement.",
      },
      {
        q: "Relevance AI vs Lindy : quelle différence ?",
        a: "Relevance AI est une plateforme pour créer de nombreux agents spécialisés et les relier en une Workforce, vendue via l’équipe commerciale. Lindy est un assistant unique prêt à l’emploi pour la boîte de réception, l’agenda, les réunions et Slack, facturé en crédits par utilisateur actif à partir de $29.99/mois. Voir [Relevance AI vs Lindy](/compare/relevance-ai-vs-lindy).",
      },
    ],
  },
  cta: {
    title: "Donnez un poste à vos agents, sans appel commercial.",
    text: "Crewmark transforme les sessions Claude Code et Codex en employés IA dotés de rôles, d’objectifs, d’horaires de travail et d’une pulsation.",
    button: "Commencer",
  },
  checked: "Vérifié le 13 novembre 2026 sur les pages, la documentation, les tarifs et le GitHub de chaque produit.",
  disclaimer:
    "Crewmark est un produit indépendant, sans lien avec Relevance AI, crewAI, LangChain, Microsoft, Paperclip Labs, CopilotKit ni Lindy, et non approuvé par eux. Les noms de produits sont des marques de leurs propriétaires. Les informations sur les autres produits proviennent de leurs pages publiques et peuvent avoir changé depuis.",
};
