import type { GuideCopy } from "@/components/landing/guide-article";

// French translation of /pricing/crewai; the English master is src/content/product-pricing/crewai.ts.

export const copy: GuideCopy = {
  meta: {
    title: "CrewAI prix : framework gratuit, AMP Basic et Enterprise",
    description:
      "CrewAI prix : le framework MIT est gratuit, AMP Basic aussi (50 exécutions de workflow par mois), Enterprise est sur mesure. Et ce que coûtent les modèles.",
  },
  breadcrumb: "Prix de CrewAI",
  parent: { name: "Comparatifs", href: "/compare" },
  hero: {
    kicker: "Tarifs · Frameworks d’agents",
    title: "Prix de CrewAI : le framework gratuit, les offres AMP et le coût des modèles",
    lead: "Le framework Python open source de CrewAI est gratuit, sous licence MIT ; vous payez votre fournisseur de modèles, qui est par défaut l’API d’OpenAI. CrewAI AMP, la plateforme de l’entreprise pour créer, déployer et tracer des crews et des flows, a deux offres : Basic, gratuite avec 50 exécutions de workflow par mois, et Enterprise, à un prix sur mesure. CrewAI ne publie ni devise, ni période de facturation, ni prix de dépassement. Voici ce que comprend chaque offre, ce que vous payez en plus, et la comparaison de CrewAI avec LangGraph, AutoGen, Relevance AI et Paperclip.",
    cta: "Commencer",
    secondary: "Ce que vous payez vraiment",
    secondaryHref: "#costs",
  },
  sections: [
    {
      kind: "table",
      id: "plans",
      title: "Offres et prix de CrewAI",
      text: [
        "D’après la page de tarifs de [crewai.com](https://crewai.com) et le README de crewAI, vérifiés le 13 novembre 2026. CrewAI affiche les offres de la plateforme comme « Free » (gratuit) et « Custom » (sur mesure), sans devise ni période de facturation.",
      ],
      headers: ["Offre", "Prix", "Ce qui est inclus"],
      rows: [
        [
          "Framework CrewAI (open source)",
          "Gratuit, licence MIT",
          "Une bibliothèque Python pour des crews d’agents définis par leur rôle et des flows pilotés par des événements, exécutés dans votre propre code et sur votre infrastructure",
        ],
        [
          "AMP Basic",
          "Gratuit",
          "Éditeur visuel et copilote IA, intégration GitHub, 50 exécutions de workflow/mois, planification cron, intervention humaine dans la boucle (human-in-the-loop)",
        ],
        [
          "AMP Enterprise",
          "Sur mesure (aucun prix affiché)",
          "Déploiement sur le cloud de CrewAI, votre propre VPC ou votre propre infrastructure ; SSO (MS Entra, Okta), RBAC, VPC dédié et connecteurs entreprise ; planification cron et intervention humaine dans la boucle",
        ],
      ],
    },
    {
      kind: "text",
      id: "costs",
      title: "Ce que vous payez vraiment pour CrewAI",
      points: [
        "Votre fournisseur de modèles. Les agents CrewAI appellent les API de modèles que vous configurez : « Par défaut, vos agents utiliseront l’API d’OpenAI » (« By default your agents will use the OpenAI API »). D’autres fournisseurs et des modèles locaux (Ollama, LM Studio) sont pris en charge.",
        "Les exécutions de workflow sur AMP Basic. L’offre gratuite de la plateforme est limitée à 50 exécutions de workflow par mois. CrewAI ne publie aucun prix de dépassement.",
        "Les fonctionnalités Enterprise. SSO, RBAC, VPC dédié et connecteurs entreprise sont réservés à Enterprise, à un prix sur mesure.",
        "Où il tourne. Le framework est une bibliothèque Python (Python `>=3.10, <3.14`) dans votre propre code et sur votre infrastructure. AMP est une application web sur app.crewai.com ; Enterprise peut être déployé sur le cloud de CrewAI, votre propre VPC ou votre propre infrastructure.",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Prix de CrewAI vs autres frameworks et plateformes d’agents",
      text: [
        "Prix tirés de la page de tarifs ou du README de chaque produit, vérifiés le 13 novembre 2026, en dollars américains. Le README d’AutoGen indique « Ce projet a été archivé et n’est plus activement maintenu par Microsoft » (« This project has been archived and is no longer actively maintained by Microsoft »), et Microsoft désigne Agent Framework comme son successeur direct. Au 13 novembre 2026, la documentation de Relevance AI indique que son offre Free est retirée pour les nouvelles inscriptions et les comptes existants.",
        "Côte à côte : [CrewAI vs LangGraph](/compare/crewai-vs-langgraph), [CrewAI vs AutoGen](/compare/crewai-vs-autogen), [Paperclip vs CrewAI](/compare/paperclip-vs-crewai). D’autres options dans [les alternatives à CrewAI](/alternatives/crewai).",
      ],
      headers: ["Produit", "Prix à partir de", "Option gratuite"],
      rows: [
        [
          "CrewAI",
          "Framework gratuit ; AMP Basic gratuit ; Enterprise sur mesure",
          "Oui : le framework (MIT) et AMP Basic avec 50 exécutions de workflow/mois",
        ],
        [
          "[LangGraph](/pricing/langgraph)",
          "Framework gratuit ; LangSmith Plus $39/siège par mois",
          "Oui : le framework (MIT) et LangSmith Developer à $0 pour 1 siège",
        ],
        [
          "[AutoGen](/alternatives/autogen)",
          "Gratuit (open source) ; le README ne mentionne aucun service payant",
          "Oui : code sous MIT ; le README indique qu’il est archivé et n’est plus activement maintenu par Microsoft",
        ],
        [
          "[Relevance AI](/pricing/relevance-ai)",
          "Enterprise, prix sur mesure via l’équipe commerciale",
          "Non : sa documentation indique que l’offre Free est retirée",
        ],
        [
          "[Paperclip](/compare/paperclip-vs-crewai)",
          "Auto-hébergé gratuit ; aucun prix publié",
          "Oui : auto-hébergé (MIT) ; une version cloud est sur liste d’attente",
        ],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Avec Crewmark",
      title: "Vous ne développez pas d’application Python ? Donnez plutôt un rôle à Claude Code ou Codex.",
      text: [
        "CrewAI sert à construire des workflows multi-agents dans votre propre code Python. Crewmark est un gestionnaire de tickets pour une équipe d’employés IA, destiné à ceux qui utilisent déjà Claude Code ou Codex et veulent que des agents continuent de travailler sur un poste sans avoir à les relancer à chaque fois. Chaque employé a un rôle, des KPI et des horaires de travail, se réveille au rythme d’une pulsation et prend des tickets sur un tableau partagé. L’usage de l’agent reste sur l’abonnement Claude ou ChatGPT que vous payez déjà.",
        "Les prix de Crewmark : Free à $0 (1 projet, jusqu’à 3 employés IA, 1 personne). Pro à $5/mois et Team à $10/mois arrivent bientôt. La facturation n’est pas encore en place : d’ici là, tous les comptes peuvent utiliser Crewmark gratuitement. Il est open source (GPL-3.0) et peut être auto-hébergé.",
      ],
      steps: [
        {
          title: "Choisir un rôle",
          text: "Parmi les [rôles d’employés IA](/ai-employees), comme ingénieur logiciel, spécialiste SEO ou analyste de données.",
        },
        {
          title: "Mettre le travail sur un tableau",
          text: "Assignez des tickets et rendez récurrents ceux qui reviennent régulièrement ; la pulsation réveille l’employé pour qu’il prenne le suivant.",
        },
        {
          title: "Voir les offres",
          text: "[Les tarifs de Crewmark](/pricing), et des missions avec leur configuration dans [les cas d’usage de Claude Code](/use-cases/claude-code) et [les cas d’usage de Codex](/use-cases/codex).",
        },
      ],
    },
  ],
  mid: {
    title: "Vous utilisez déjà Claude Code ou Codex ?",
    text: "Crewmark le transforme en employés IA dotés de rôles, d’une pulsation et d’un tableau partagé. Gratuit pour 1 projet et jusqu’à 3 employés IA.",
    button: "Commencer",
  },
  faq: {
    title: "FAQ sur les prix de CrewAI",
    items: [
      {
        q: "CrewAI est-il gratuit ?",
        a: "Le framework, oui : il est open source sous licence MIT, et vous ne payez que votre fournisseur de modèles. L’offre CrewAI AMP Basic est gratuite elle aussi, avec 50 exécutions de workflow par mois.",
      },
      {
        q: "Quelles sont les offres tarifaires de CrewAI AMP ?",
        a: "Il y en a deux : Basic, affichée « Free » (éditeur visuel et copilote IA, intégration GitHub, 50 exécutions de workflow par mois), et Enterprise, affichée « Custom », sans prix. CrewAI ne publie ni devise, ni période de facturation, ni prix de dépassement.",
      },
      {
        q: "Combien coûte CrewAI Enterprise ?",
        a: "CrewAI n’affiche pas de prix ; Enterprise est « Custom » (sur mesure). Elle ajoute le déploiement sur le cloud de CrewAI, votre propre VPC ou votre propre infrastructure, le SSO avec MS Entra ou Okta, le RBAC et des connecteurs entreprise.",
      },
      {
        q: "Quel est le modèle de tarification de CrewAI ?",
        a: "Un framework open source gratuit que vous exécutez vous-même, plus la plateforme AMP facturée par offre : Basic est gratuite et plafonnée à 50 exécutions de workflow par mois, Enterprise est sur mesure. L’usage des modèles est facturé à part par votre fournisseur de modèles.",
      },
      {
        q: "Combien coûte CrewAI dans le cloud ?",
        a: "AMP est une application web sur app.crewai.com, et Basic est gratuite avec 50 exécutions de workflow par mois. Le déploiement sur le cloud de CrewAI, votre propre VPC ou votre propre infrastructure figure dans Enterprise, à un prix sur mesure.",
      },
      {
        q: "Faut-il une clé OpenAI pour utiliser CrewAI ?",
        a: "Par défaut, les agents CrewAI utilisent l’API d’OpenAI. D’autres fournisseurs et des modèles locaux, comme Ollama et LM Studio, sont pris en charge.",
      },
    ],
  },
  cta: {
    title: "Construisez une crew en code, ou confiez un poste à vos agents.",
    text: "Crewmark transforme les sessions Claude Code et Codex en employés IA dotés de rôles, de KPI, d’horaires de travail et d’une pulsation.",
    button: "Commencer",
  },
  checked:
    "Vérifié sur crewai.com/pricing, dans la documentation de la plateforme CrewAI et dans le README de crewAI le 13 novembre 2026. Les prix des autres produits proviennent de leurs propres pages à la même date.",
  disclaimer:
    "Crewmark est un produit indépendant, sans lien avec crewAI, Inc. ni avec aucune autre entreprise citée sur cette page, et non approuvé par celles-ci. Les noms de produits sont des marques de leurs propriétaires respectifs.",
};
