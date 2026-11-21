import type { GuideCopy } from "@/components/landing/guide-article";

// French translation of /pricing/relevance-ai; the English master is src/content/product-pricing/relevance-ai.ts.

export const copy: GuideCopy = {
  meta: {
    title: "Relevance AI prix : Enterprise uniquement, offre Free retirée",
    description:
      "Relevance AI prix : une seule offre, Enterprise, sur mesure via l’équipe commerciale, et l’offre Free est retirée selon la documentation. Ce que cela implique.",
  },
  breadcrumb: "Prix de Relevance AI",
  parent: { name: "Comparatifs", href: "/compare" },
  hero: {
    kicker: "Tarifs · Relevance AI",
    title: "Prix de Relevance AI : une seule offre Enterprise via l’équipe commerciale, et pas d’offre Free",
    lead: "La page de tarifs publique de Relevance AI ne liste qu’une seule offre, Enterprise, à prix sur mesure : il faut « parler à l’équipe commerciale » (« Talk to sales »). Sa documentation indique que l’offre Free est retirée pour les nouvelles inscriptions et les comptes existants. Pour les modèles, la documentation propose deux voies : des crédits, ou votre propre clé de LLM. Voici ce que comprend l’offre Enterprise, ce que cela implique si vous achetez aujourd’hui, et la comparaison du prix avec Lindy, CrewAI, LangGraph et Crewmark.",
    cta: "Commencer",
    secondary: "Voir les offres",
    secondaryHref: "#plans",
  },
  sections: [
    {
      kind: "table",
      id: "plans",
      title: "Offres et prix de Relevance AI",
      text: [
        "D’après relevanceai.com/pricing et la documentation de Relevance AI, vérifiées le 13 novembre 2026. La page de tarifs ne publie aucun prix d’offre en libre-service.",
      ],
      headers: ["Offre", "Prix", "Ce qui est inclus"],
      rows: [
        [
          "Enterprise",
          "Sur mesure (« Talk to sales » : via l’équipe commerciale)",
          "Des Actions personnalisées et des crédits fournisseurs ; agents, outils, utilisateurs et projets illimités. Selon la documentation, SSO, RBAC, journaux d’audit, évaluations d’agents, contrôle des horaires de travail et déclencheurs entreprise sont réservés à Enterprise",
        ],
        ["Free", "Retirée", "La documentation indique que l’offre Free est retirée pour les nouvelles inscriptions et les comptes existants"],
      ],
    },
    {
      kind: "text",
      id: "costs",
      title: "Ce que vous payez vraiment pour Relevance AI",
      points: [
        "Un contrat sur mesure. La seule offre affichée est Enterprise, dont le prix passe par l’équipe commerciale : vous n’obtenez un chiffre qu’après avoir échangé avec Relevance AI.",
        "Les modèles via des crédits ou votre propre clé. Le tableau des offres de la documentation mentionne « Utilisez n’importe quel LLM avec des crédits » (« Use any LLMs with credits ») et « Apportez votre propre LLM » (« Bring your own LLM »), ou BYOK. Enterprise inclut des Actions personnalisées et des crédits fournisseurs.",
        "Les fonctionnalités qui exigent Enterprise : SSO, RBAC, journaux d’audit, évaluations d’agents, contrôle des horaires de travail, et déclencheurs entreprise pour Salesforce, Snowflake et Zendesk.",
        "Aucun moyen gratuit de commencer. L’offre Free étant retirée pour les nouvelles inscriptions, il n’existe aucune offre à $0 pour essayer avant un échange commercial.",
        "En plus du produit, l’argumentaire commercial propose une équipe de déploiement intégrée, qui cartographie les cas d’usage pendant les semaines 1 et 2 et déploie à partir de la semaine 3, ainsi qu’« Invent », que Relevance AI présente comme un ingénieur solutions IA disponible 24/7.",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Prix de Relevance AI vs plateformes d’agents similaires",
      text: [
        "Prix tirés du site de chaque produit, vérifiés le 13 novembre 2026. Les produits qui utilisent vos propres modèles ont aussi besoin d’un modèle, payé à son fournisseur.",
        "Côte à côte : [Relevance AI vs Lindy](/compare/relevance-ai-vs-lindy), [CrewAI vs LangGraph](/compare/crewai-vs-langgraph). D’autres options dans [les alternatives à Relevance AI](/alternatives/relevance-ai).",
      ],
      headers: ["Produit", "Prix à partir de", "Option gratuite"],
      rows: [
        ["Relevance AI", "Enterprise, prix sur mesure via l’équipe commerciale", "Non : l’offre Free est retirée"],
        [
          "[Lindy](/personal-agent/lindy)",
          "$29.99/mois par utilisateur actif pour 3 000 crédits",
          "Oui : $50 de crédits valables 7 jours, sans carte bancaire",
        ],
        [
          "[CrewAI](/pricing/crewai)",
          "Framework gratuit (MIT) ; AMP Enterprise sur mesure",
          "Oui : le framework, et AMP Basic avec 50 exécutions de workflow par mois",
        ],
        [
          "[LangGraph](/pricing/langgraph)",
          "Framework gratuit (MIT) ; LangSmith Plus $39/siège par mois",
          "Oui : le framework, et LangSmith Developer à $0 (1 siège, jusqu’à 5k traces de base par mois)",
        ],
        [
          "[Crewmark](/pricing)",
          "Gratuit ; Pro $5/mois et Team $10/mois bientôt disponibles",
          "Oui : 1 projet, jusqu’à 3 employés IA, 1 personne",
        ],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Avec Crewmark",
      title: "Relevance AI crée des agents hébergés. Crewmark fait travailler vos propres agents de code en équipe.",
      text: [
        "Crewmark est un gestionnaire de tickets pour une équipe d’employés IA. Chaque employé est une conversation Claude Code ou Codex sur votre propre ordinateur, avec un rôle, des objectifs et des horaires de travail. Il se réveille au rythme d’une pulsation et prend des tickets sur un tableau partagé. Les agents tournent sur l’abonnement Claude ou ChatGPT que vous payez déjà, sans facture de tokens séparée.",
        "Les prix de Crewmark : Free à $0 (1 projet, jusqu’à 3 employés IA, 1 personne). Pro à $5/mois et Team à $10/mois arrivent bientôt. La facturation n’est pas encore en place : d’ici là, tous les comptes peuvent utiliser Crewmark gratuitement. Il est open source (GPL-3.0) et peut être auto-hébergé.",
      ],
      steps: [
        {
          title: "Choisir un rôle",
          text: "Parmi les [rôles d’employés IA](/ai-employees), comme le SEO, la croissance, les réseaux sociaux ou l’ingénierie, avec des objectifs chiffrés.",
        },
        {
          title: "Mettre le travail sur un tableau",
          text: "Assignez des tickets et rendez récurrents ceux qui reviennent régulièrement ; la pulsation réveille l’employé pour qu’il prenne le suivant.",
        },
        {
          title: "Voir les offres",
          text: "[Les tarifs de Crewmark](/pricing), et ce que les agents en font dans [les cas d’usage de Claude Code](/use-cases/claude-code).",
        },
      ],
    },
  ],
  mid: {
    title: "Envie de commencer sans appel commercial ?",
    text: "L’offre Free de Crewmark donne à votre Claude Code ou Codex un rôle, une pulsation et un tableau partagé.",
    button: "Commencer",
  },
  faq: {
    title: "FAQ sur les prix de Relevance AI",
    items: [
      {
        q: "Relevance AI a-t-il une offre gratuite ?",
        a: "Plus maintenant. La documentation de Relevance AI indique que l’offre Free est retirée pour les nouvelles inscriptions et les comptes existants.",
      },
      {
        q: "Combien coûte Relevance AI ?",
        a: "Sa page de tarifs publique ne liste qu’une offre, Enterprise, à prix sur mesure via l’équipe commerciale. Aucun prix d’offre en libre-service n’est publié.",
      },
      {
        q: "Que comprennent les tarifs entreprise de Relevance AI ?",
        a: "Des Actions personnalisées et des crédits fournisseurs, ainsi que des agents, outils, utilisateurs et projets illimités. SSO, RBAC, journaux d’audit, évaluations d’agents, contrôle des horaires de travail et déclencheurs entreprise sont réservés à Enterprise.",
      },
      {
        q: "Puis-je utiliser ma propre clé de LLM avec Relevance AI ?",
        a: "Le tableau des offres de la documentation mentionne « Apportez votre propre LLM » (« Bring your own LLM »), ou BYOK, à côté de « Utilisez n’importe quel LLM avec des crédits » (« Use any LLMs with credits ») : vous pouvez donc utiliser des crédits ou la clé de votre propre fournisseur.",
      },
      {
        q: "Puis-je auto-héberger Relevance AI ?",
        a: "Aucune option d’auto-hébergement n’est mentionnée. Relevance AI est une plateforme web hébergée, et elle n’est pas open source.",
      },
      {
        q: "Existe-t-il une alternative à Relevance AI avec une offre gratuite ?",
        a: "Plusieurs en ont une. Lindy offre $50 de crédits pendant 7 jours, CrewAI et LangGraph sont des frameworks open source gratuits, et Crewmark a une offre Free. Voir [les alternatives à Relevance AI](/alternatives/relevance-ai).",
      },
    ],
  },
  cta: {
    title: "Commencez gratuitement avec les agents que vous avez déjà.",
    text: "Crewmark transforme les sessions Claude Code et Codex en employés IA dotés de rôles, d’objectifs, d’horaires de travail et d’une pulsation.",
    button: "Commencer",
  },
  checked:
    "Vérifié sur relevanceai.com/pricing, dans la documentation de Relevance AI et sur la page de tarifs de chaque produit comparé le 13 novembre 2026.",
  disclaimer:
    "Crewmark est un produit indépendant, sans lien avec Relevance AI ni avec aucune autre entreprise citée sur cette page, et non approuvé par celles-ci. Les noms de produits sont des marques de leurs propriétaires respectifs.",
};
