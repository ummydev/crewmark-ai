import type { GuideCopy } from "@/components/landing/guide-article";

// French translation of /pricing/devin; the English master is src/content/product-pricing/devin.ts.

export const copy: GuideCopy = {
  meta: {
    title: "Devin prix 2026 : Free, Pro $20, Max $200 et Teams",
    description:
      "Devin prix : Free à $0, Pro à $20 par mois, Max à $200, Teams et Enterprise. Quotas, crédits à la demande, sièges, et comparaison avec d’autres agents.",
  },
  breadcrumb: "Prix de Devin",
  parent: { name: "Comparatifs", href: "/compare" },
  hero: {
    kicker: "Tarifs · Cognition",
    title: "Prix de Devin : chaque offre, et ce que vous payez au-delà",
    lead: "Devin, l’ingénieur logiciel IA de Cognition, propose une offre Free à $0 avec un quota léger. Pro coûte $20 par mois et Max $200 par mois, tous deux pour un seul utilisateur. Teams est affiché à « $80/mois pour l’offre d’équipe + $40/mois par siège de développeur complet », et Enterprise passe par l’équipe commerciale. Chaque offre en libre-service comprend un quota quotidien et/ou hebdomadaire ; au-delà, vous payez avec des crédits à la demande prépayés. Voici les offres, les coûts supplémentaires et la comparaison du prix de Devin avec Factory, Claude Code, Codex, Cursor Projects et Crewmark.",
    cta: "Commencer",
    secondary: "Ce que vous payez vraiment",
    secondaryHref: "#costs",
  },
  sections: [
    {
      kind: "table",
      id: "plans",
      title: "Offres et prix de Devin",
      text: [
        "D’après la page de tarifs de [devin.ai](https://devin.ai) et la documentation de facturation de Devin, vérifiées le 13 novembre 2026. Prix en dollars américains.",
      ],
      headers: ["Offre", "Prix", "Ce qui est inclus"],
      rows: [
        ["Free", "$0", "Un quota léger et un choix de modèles limité"],
        [
          "Pro",
          "$20 par mois",
          "Devin Cloud, accès à tous les modèles, usage supplémentaire au tarif de l’API ; un utilisateur",
        ],
        ["Max", "$200 par mois", "Des quotas plus élevés ; un utilisateur"],
        [
          "Teams",
          "« $80/mois pour l’offre d’équipe + $40/mois par siège de développeur complet »",
          "Jusqu’à 100 utilisateurs ; un « Free mode » (SWE-2) avec jusqu’à 2 sessions cloud simultanées par membre",
        ],
        ["Enterprise", "« Parlons-en » (« Let's talk »)", "VPC et déploiement dédié"],
      ],
    },
    {
      kind: "text",
      id: "costs",
      title: "Ce que vous payez vraiment pour Devin",
      points: [
        "D’abord un quota. Les offres en libre-service de Devin reposent sur un quota quotidien et/ou hebdomadaire.",
        "Puis des crédits prépayés. L’usage au-delà du quota puise dans des crédits à la demande prépayés. Sur Pro, l’usage supplémentaire est facturé au tarif de l’API.",
        "Votre forfait ChatGPT pour les modèles GPT. Pro, Max et Teams peuvent utiliser un forfait ChatGPT associé pour l’usage des modèles GPT.",
        "Les modèles selon l’offre. Free a un choix de modèles limité ; Pro donne accès à tous les modèles. Devin utilise SWE-2 de Cognition ainsi que « des modèles de pointe d’OpenAI, Claude, Gemini et SpaceXAI, plus les principaux modèles open source » (« frontier models from OpenAI, Claude, Gemini, and SpaceXAI, plus leading open source models »), et un routeur Adaptive choisit un modèle pour chaque tâche.",
        "Les sièges. Pro et Max sont des offres pour un seul utilisateur. Teams accepte jusqu’à 100 membres, et les équipes plus grandes sont orientées vers Enterprise.",
        "Les crédits sur Teams. Sur Teams, les Automations s’arrêtent quand les crédits à la demande partagés sont épuisés.",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Prix de Devin vs autres agents de code",
      text: [
        "Prix d’entrée tirés de la page de tarifs de chaque produit, vérifiés le 13 novembre 2026, en dollars américains. Les offres qui n’incluent pas l’usage des modèles le laissent à votre fournisseur de modèles.",
        "Côte à côte : [Devin vs Claude Code](/compare/devin-vs-claude-code), [Devin vs Codex](/compare/devin-vs-codex). D’autres options dans [les alternatives à Devin](/blog/devin-alternatives).",
      ],
      headers: ["Produit", "Prix à partir de", "Option gratuite"],
      rows: [
        ["Devin", "Free $0 ; Pro $20/mois", "Oui : offre Free avec un quota léger"],
        [
          "[Factory](/pricing/factory)",
          "Free $0 avec votre propre inférence ; Pro $20/mois",
          "Oui : Free si vous apportez votre propre inférence",
        ],
        [
          "[Claude Code](/compare/devin-vs-claude-code)",
          "Dans Claude Pro, $20/mois ou $17/mois en facturation annuelle",
          "Non : pas dans Claude Free ; les crédits API en paiement à l’usage fonctionnent aussi",
        ],
        [
          "[Codex](/compare/devin-vs-codex)",
          "Dans ChatGPT Plus, $20/mois ; ou une clé API OpenAI au tarif de l’API",
          "ChatGPT Free ($0) mentionne GPT-6 Luna dans l’application de bureau, « sous réserve du déploiement » (« subject to rollout »)",
        ],
        [
          "[Cursor Projects](/personal-agent/cursor-projects)",
          "Cursor Premium $30/mois, ou $300/an",
          "Non : ni sur Free, ni sur Plus, ni sur l’ancienne offre Hobby",
        ],
        [
          "[Crewmark](/pricing)",
          "Free $0 ; Pro $5/mois bientôt disponible",
          "Oui : 1 projet, jusqu’à 3 employés IA ; l’usage de l’agent est payé à votre fournisseur",
        ],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Avec Crewmark",
      title: "Vous payez déjà Claude Code ou Codex ? Donnez-lui un poste et un tableau.",
      text: [
        "Devin est un agent à part entière, facturé selon le quota de l’offre et des crédits. Crewmark est un gestionnaire de tickets pour une équipe d’employés IA. Chaque employé est une conversation Claude Code ou Codex sur votre propre ordinateur, avec un rôle, des KPI et des horaires de travail. Il se réveille au rythme d’une pulsation et prend des tickets sur un tableau partagé. L’usage de l’agent reste sur l’abonnement Claude ou ChatGPT que vous payez déjà.",
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
    title: "Vous payez déjà Claude ou ChatGPT ?",
    text: "Crewmark transforme votre Claude Code ou Codex en employés IA dotés de rôles, d’une pulsation et d’un tableau partagé.",
    button: "Commencer",
  },
  faq: {
    title: "FAQ sur les prix de Devin",
    items: [
      {
        q: "Devin est-il gratuit ?",
        a: "Il existe une offre Free à $0, avec un quota léger et un choix de modèles limité. Pro, à $20 par mois, ajoute Devin Cloud et l’accès à tous les modèles.",
      },
      {
        q: "Combien coûte Devin par mois ?",
        a: "Pro coûte $20 par mois et Max $200 par mois, tous deux pour un seul utilisateur. Teams est affiché à « $80/mois pour l’offre d’équipe + $40/mois par siège de développeur complet », pour 100 utilisateurs maximum. Pour Enterprise, la page indique « Parlons-en » (« Let's talk »). Les prix sont en dollars américains.",
      },
      {
        q: "Quel est le modèle de tarification de Devin ?",
        a: "Une offre avec un quota quotidien et/ou hebdomadaire, plus des crédits à la demande prépayés pour l’usage au-delà. Sur Pro, l’usage supplémentaire est facturé au tarif de l’API. Teams ajoute des frais d’équipe et des frais par siège de développeur complet.",
      },
      {
        q: "Comment fonctionnent les offres Teams et Enterprise de Devin ?",
        a: "Teams accepte jusqu’à 100 membres, et ses Automations s’arrêtent quand les crédits à la demande partagés sont épuisés. Les équipes plus grandes sont orientées vers Enterprise, dont le prix passe par l’équipe commerciale et qui propose un VPC et un déploiement dédié.",
      },
      {
        q: "Puis-je utiliser mon forfait ChatGPT avec Devin ?",
        a: "Oui, sur Pro, Max et Teams. Un forfait ChatGPT associé couvre l’usage des modèles GPT.",
      },
      {
        q: "Devin est-il open source ?",
        a: "Non. Aucun code source ni aucune licence open source n’est publié pour Devin ; github.com/CognitionAI/devin-cli contient le packaging d’installation, de la documentation et des scripts. Des options open source se trouvent dans [les alternatives à Devin](/blog/devin-alternatives).",
      },
    ],
  },
  cta: {
    title: "Comparez les prix. Puis confiez un poste à votre agent.",
    text: "Crewmark transforme les sessions Claude Code et Codex en employés IA dotés de rôles, de KPI, d’horaires de travail et d’une pulsation.",
    button: "Commencer",
  },
  checked:
    "Vérifié sur devin.ai/pricing et dans la documentation de facturation de Devin le 13 novembre 2026. Les prix des autres produits proviennent de leurs propres pages de tarifs à la même date.",
  disclaimer:
    "Crewmark est un produit indépendant, sans lien avec Cognition ni avec aucune autre entreprise citée sur cette page, et non approuvé par celles-ci. Les noms de produits sont des marques de leurs propriétaires respectifs.",
};
