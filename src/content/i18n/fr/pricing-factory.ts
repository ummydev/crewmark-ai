import type { GuideCopy } from "@/components/landing/guide-article";

// French translation of /pricing/factory; the English master is src/content/product-pricing/factory.ts.

export const copy: GuideCopy = {
  meta: {
    title: "Factory AI prix : Free, Pro $20, Plus, Max et Teams",
    description:
      "Factory AI prix : Free avec votre propre inférence, Pro $20, Plus $100, Max $200 par mois, et Teams. Limites d’usage, Extra Usage et facturation des tokens.",
  },
  breadcrumb: "Prix de Factory",
  parent: { name: "Comparatifs", href: "/compare" },
  hero: {
    kicker: "Tarifs · Factory",
    title: "Prix de Factory AI : offres Droid, limites d’usage et tokens",
    lead: "Factory crée les Droids, des agents de code qui tournent dans la Factory App, la Droid CLI, la CI et des ordinateurs cloud hébergés par Factory. Son offre Free coûte $0 si vous apportez votre propre inférence : connectez-vous avec ChatGPT, GitHub Copilot ou OpenRouter, ou branchez vos propres clés API. Les offres payantes vont de Pro à $20 par mois à Max à $200 par mois, par personne, et Teams coûte $60 par mois par équipe plus $40 par mois par personne. Les offres payantes ont des limites d’usage glissantes, et Extra Usage est un crédit prépayé qui s’y ajoute. Voici les offres, la facturation de l’usage et des tokens, et la comparaison du prix avec Devin, Claude Code, Codex et OpenCode.",
    cta: "Commencer",
    secondary: "Ce que vous payez vraiment",
    secondaryHref: "#costs",
  },
  sections: [
    {
      kind: "table",
      id: "plans",
      title: "Offres et prix de Factory",
      text: [
        "D’après la page de tarifs de [factory.com](https://factory.com) et la documentation tarifaire de Factory, vérifiées le 13 novembre 2026. Prix en dollars américains, tels qu’affichés (« /mo »).",
      ],
      headers: ["Offre", "Prix", "Ce qui est inclus"],
      rows: [
        [
          "Free",
          "$0/mois par personne",
          "Apportez votre propre inférence : connectez-vous avec ChatGPT, GitHub Copilot ou OpenRouter, ou branchez vos propres clés API ou un endpoint personnalisé",
        ],
        [
          "Pro",
          "$20/mois par personne",
          "Application de bureau, CLI et SDK, accès à tous les modèles ; limites d’usage glissantes sur 5 heures, 7 jours et 30 jours",
        ],
        ["Plus", "$100/mois par personne", "Environ 5 fois l’usage de Pro ; mêmes limites glissantes"],
        ["Max", "$200/mois par personne", "Environ 10 fois l’usage de Pro ; mêmes limites glissantes"],
        ["Teams", "$60/mois par équipe plus $40/mois par personne", "Jusqu’à 10 sièges"],
        ["Business et Enterprise", "Contacter l’équipe commerciale", "Options de déploiement sur site avec Enterprise"],
      ],
    },
    {
      kind: "text",
      id: "costs",
      title: "Ce que vous payez vraiment pour Factory",
      points: [
        "L’inférence sur Free. L’offre Free fonctionne avec l’inférence que vous apportez : une connexion ChatGPT, GitHub Copilot ou OpenRouter, ou vos propres clés API ou endpoint personnalisé. Les tokens sont facturés par ce fournisseur ou cette offre.",
        "Le Standard Usage sur les offres payantes. Pro, Plus et Max ont chacune des limites d’usage glissantes sur 5 heures, 7 jours et 30 jours. Plus donne environ 5 fois l’usage de Pro, et Max environ 10 fois. Le Standard Usage non utilisé n’est pas reporté.",
        "Extra Usage. Pour aller plus loin, il y a Extra Usage, un crédit prépayé avec un minimum de $10 et sans date d’expiration.",
        "Les Missions exigent Extra Usage. Les Missions, qui planifient des fonctionnalités et des jalons, nécessitent qu’Extra Usage soit activé et se mettent en pause quand elles atteignent une limite d’usage.",
        "Les Workstreams consomment plus de tokens. Workstreams (bêta), sur Pro, Plus, Max et Teams, consomme plus de tokens qu’une session unique. Il n’est pas encore disponible sur Business ni sur Enterprise.",
        "Les modèles. Factory annonce « tous les principaux modèles de pointe et à poids ouverts, y compris les dernières versions de GPT-5, Claude Opus et Sonnet, Gemini » (« all leading frontier and open-weight models, including the latest versions of GPT-5, Claude Opus and Sonnet, Gemini »), un pool de modèles à poids ouverts « Droid Core », et vos propres clés API ou modèles locaux (BYOK).",
        "Les sièges. Pro, Plus et Max sont facturés par personne. Teams est plafonné à 10 sièges ; Business et Enterprise passent par l’équipe commerciale.",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Prix de Factory vs autres agents de code",
      text: [
        "Prix d’entrée tirés de la page de tarifs de chaque produit, vérifiés le 13 novembre 2026, en dollars américains.",
        "Côte à côte : [Factory vs Claude Code](/compare/factory-vs-claude-code). D’autres options dans [les alternatives à Factory](/alternatives/factory).",
      ],
      headers: ["Produit", "Prix à partir de", "Option gratuite"],
      rows: [
        ["Factory", "Free $0 avec votre propre inférence ; Pro $20/mois", "Oui : Free si vous apportez votre propre inférence"],
        ["[Devin](/pricing/devin)", "Free $0 ; Pro $20/mois", "Oui : offre Free avec un quota léger"],
        [
          "[Claude Code](/compare/factory-vs-claude-code)",
          "Dans Claude Pro, $20/mois ou $17/mois en facturation annuelle",
          "Non : pas dans Claude Free ; les crédits API en paiement à l’usage fonctionnent aussi",
        ],
        [
          "Codex",
          "Dans ChatGPT Plus, $20/mois ; ou une clé API OpenAI au tarif de l’API",
          "ChatGPT Free ($0) mentionne GPT-6 Luna dans l’application de bureau, « sous réserve du déploiement » (« subject to rollout »)",
        ],
        [
          "[OpenCode](/pricing/opencode)",
          "Agent gratuit ; OpenCode Go $10/mois, Go Plus $40/mois",
          "Oui : l’agent (MIT) et des modèles gratuits avec une limite quotidienne de requêtes",
        ],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Avec Crewmark",
      title: "Gardez votre abonnement actuel. Donnez à votre agent un rôle et un tableau.",
      text: [
        "Factory vend son propre agent, avec des offres et des limites d’usage. Crewmark est un gestionnaire de tickets pour une équipe d’employés IA. Chaque employé est une conversation Claude Code ou Codex sur votre propre ordinateur, avec un rôle, des KPI et des horaires de travail. Il se réveille au rythme d’une pulsation et prend des tickets sur un tableau partagé. L’usage de l’agent reste sur l’abonnement Claude ou ChatGPT que vous payez déjà, sans facture de tokens séparée.",
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
    title: "FAQ sur les prix de Factory AI",
    items: [
      {
        q: "Factory AI est-il gratuit ?",
        a: "Oui, si vous apportez votre propre inférence. L’offre Free coûte $0 par personne : connectez-vous avec ChatGPT, GitHub Copilot ou OpenRouter, ou branchez vos propres clés API ou un endpoint personnalisé.",
      },
      {
        q: "Combien coûte Factory AI par mois ?",
        a: "Par personne, Pro coûte $20, Plus $100 et Max $200 par mois. Teams coûte $60 par mois par équipe plus $40 par mois par personne, pour 10 sièges maximum. Le prix de Business et Enterprise passe par l’équipe commerciale.",
      },
      {
        q: "Quel est le modèle de tarification de Factory AI ?",
        a: "Une offre par personne, avec un Standard Usage soumis à des limites glissantes sur 5 heures, 7 jours et 30 jours, plus un Extra Usage facultatif : un crédit prépayé avec un minimum de $10, qui n’expire pas. Le Standard Usage non utilisé n’est pas reporté.",
      },
      {
        q: "Comment Factory AI facture-t-il les tokens ?",
        a: "Sur Free, les tokens sont facturés par le compte ou la clé API que vous apportez. Sur Pro, Plus et Max, l’usage des modèles est décompté du Standard Usage de votre offre et de ses limites, et Extra Usage est le crédit prépayé pour aller au-delà. Workstreams consomme plus de tokens qu’une session unique.",
      },
      {
        q: "Factory AI a-t-il des tarifs entreprise ?",
        a: "Business et Enterprise passent par l’équipe commerciale, sans prix affiché. Enterprise propose des options de déploiement sur site. Teams, à $60 par mois plus $40 par personne, est plafonné à 10 sièges.",
      },
      {
        q: "Factory AI est-il open source ?",
        a: "Non. Aucun code source ni aucune licence open source n’est publié pour la Droid CLI ou la Factory App ; github.com/Factory-AI/factory contient un README et de la documentation. Des options open source se trouvent dans [les alternatives à Factory](/alternatives/factory).",
      },
    ],
  },
  cta: {
    title: "Comparez les prix. Puis confiez un poste à votre agent.",
    text: "Crewmark transforme les sessions Claude Code et Codex en employés IA dotés de rôles, de KPI, d’horaires de travail et d’une pulsation.",
    button: "Commencer",
  },
  checked:
    "Vérifié sur factory.com/pricing et dans la documentation tarifaire de Factory le 13 novembre 2026. Les prix des autres produits proviennent de leurs propres pages de tarifs à la même date.",
  disclaimer:
    "Crewmark est un produit indépendant, sans lien avec Factory ni avec aucune autre entreprise citée sur cette page, et non approuvé par celles-ci. Les noms de produits sont des marques de leurs propriétaires respectifs.",
};
