import type { GuideCopy } from "@/components/landing/guide-article";

// French translation of /pricing/opencode; the English master is src/content/product-pricing/opencode.ts.

export const copy: GuideCopy = {
  meta: {
    title: "OpenCode prix : agent gratuit, Go $10, Go Plus $40 (2026)",
    description:
      "OpenCode prix : l’agent MIT est gratuit, avec des modèles gratuits. Go coûte $10 par mois, Go Plus $40, ou payez au million de tokens ou avec vos propres clés.",
  },
  breadcrumb: "Prix d’OpenCode",
  parent: { name: "Comparatifs", href: "/compare" },
  hero: {
    kicker: "Tarifs · OpenCode",
    title: "Prix d’OpenCode : un agent gratuit, et quatre façons de payer les modèles",
    lead: "OpenCode est un agent de code gratuit et open source (MIT). Il est fourni avec des modèles gratuits qui ne demandent aucun compte, dans la limite d’un nombre quotidien de requêtes. Au-delà, vous payez les modèles, pas l’agent : OpenCode Go à $10 par mois ou Go Plus à $40 par mois, des modèles en paiement à l’usage facturés par million de tokens, ou une offre ou une clé API que vous avez déjà, comme ChatGPT Plus ou Pro ou GitHub Copilot. Enterprise passe par l’équipe commerciale. Voici chaque option, son coût, et la comparaison d’OpenCode avec Claude Code, Codex, Hermes Agent et OpenClaw.",
    cta: "Commencer",
    secondary: "Ce que vous payez vraiment",
    secondaryHref: "#costs",
  },
  sections: [
    {
      kind: "table",
      id: "plans",
      title: "Offres et prix d’OpenCode",
      text: [
        "D’après [opencode.ai](https://opencode.ai) et ses pages de console pour Go, les modèles et Enterprise, vérifiées le 13 novembre 2026. Prix en dollars américains.",
      ],
      headers: ["Offre", "Prix", "Ce qui est inclus"],
      rows: [
        [
          "OpenCode (open source)",
          "Gratuit, licence MIT",
          "L’agent sous forme d’interface terminal, d’application de bureau, d’application web et de SDK ; des modèles de 200+ fournisseurs, y compris des modèles locaux",
        ],
        ["Modèles gratuits", "$0, sans compte", "Une sélection de modèles gratuits avec une limite quotidienne de requêtes"],
        [
          "OpenCode Go",
          "$10/mois",
          "Des modèles sélectionnés avec des quotas sur 5 heures, à la semaine et au mois ; recharges de crédit ; résiliable à tout moment",
        ],
        [
          "Go Plus",
          "$40/mois",
          "Des modèles sélectionnés avec des quotas sur 5 heures, à la semaine et au mois ; recharges de crédit ; résiliable à tout moment",
        ],
        ["Paiement à l’usage", "Par million de tokens", "Des modèles facturés sur votre solde au fil de l’usage"],
        [
          "Votre propre offre ou vos clés",
          "Ce que vous payez déjà à ce fournisseur",
          "Connectez-vous avec ChatGPT Plus ou Pro ou GitHub Copilot, ou apportez vos propres clés API",
        ],
        ["Enterprise", "Contacter l’équipe commerciale", "Prix fixé par l’équipe commerciale d’OpenCode"],
      ],
    },
    {
      kind: "text",
      id: "costs",
      title: "Ce que vous payez vraiment pour OpenCode",
      points: [
        "Rien pour l’agent. OpenCode est sous licence MIT, avec des binaires CLI pour macOS, Windows et Linux et une application de bureau (marquée bêta dans le README).",
        "Les modèles gratuits ont une limite quotidienne de requêtes. Ils ne demandent aucun compte.",
        "Les quotas de Go varient selon le modèle. Sur Go et Go Plus, les quotas se réinitialisent sur des fenêtres de 5 heures, d’une semaine et d’un mois. Vous pouvez recharger du crédit et résilier à tout moment.",
        "Le paiement à l’usage se fait au token. Les modèles en paiement à l’usage sont facturés par million de tokens sur votre solde.",
        "Ou une offre que vous payez déjà. Connectez-vous avec ChatGPT Plus ou Pro ou GitHub Copilot. Avec vos propres clés API, l’usage est facturé par ce fournisseur ; OpenCode fonctionne avec 200+ fournisseurs de LLM via Models.dev, y compris des modèles locaux.",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Prix d’OpenCode vs autres agents de code",
      text: [
        "Prix d’entrée tirés du site de chaque produit, vérifiés le 13 novembre 2026, en dollars américains.",
        "Côte à côte : [OpenCode vs Claude Code](/compare/opencode-vs-claude-code), [OpenClaw vs OpenCode](/compare/openclaw-vs-opencode), [Hermes Agent vs Claude Code](/compare/hermes-agent-vs-claude-code). D’autres options dans [les alternatives à OpenCode](/blog/opencode-alternatives).",
      ],
      headers: ["Produit", "Prix à partir de", "Option gratuite"],
      rows: [
        [
          "OpenCode",
          "Agent gratuit ; OpenCode Go $10/mois",
          "Oui : l’agent (MIT) et des modèles gratuits avec une limite quotidienne de requêtes",
        ],
        [
          "[Claude Code](/compare/opencode-vs-claude-code)",
          "Dans Claude Pro, $20/mois ou $17/mois en facturation annuelle",
          "Non : pas dans Claude Free ; les crédits API en paiement à l’usage fonctionnent aussi",
        ],
        [
          "Codex",
          "Dans ChatGPT Plus, $20/mois ; ou une clé API OpenAI au tarif de l’API",
          "La CLI est open source (Apache-2.0) ; l’usage passe par un forfait ChatGPT ou une clé API",
        ],
        [
          "[Hermes Agent](/pricing/hermes-agent)",
          "Agent gratuit ; Nous Portal Plus en option, $20/mois",
          "Oui : l’agent (MIT), et Nous Portal Free à $0 (paiement à l’usage, modèles gratuits uniquement)",
        ],
        [
          "[OpenClaw](/pricing/openclaw)",
          "Gratuit ; ni offre payante ni service hébergé",
          "Oui : tout le projet (MIT) ; vous payez votre fournisseur de modèles",
        ],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Avec Crewmark",
      title: "OpenCode est l’agent. Crewmark donne aux agents un poste et un tableau.",
      text: [
        "Crewmark est un gestionnaire de tickets pour une équipe d’employés IA. Chaque employé est une conversation d’agent sur votre propre ordinateur, comme Claude Code, Codex ou OpenCode, avec un rôle, des KPI et des horaires de travail. Il se réveille au rythme d’une pulsation et prend des tickets sur un tableau partagé. Comme OpenCode, Crewmark ne facture pas l’usage des modèles : vous payez le fournisseur de votre agent.",
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
    title: "Vous voulez que votre agent de code continue de travailler ?",
    text: "Crewmark donne à Claude Code ou Codex un rôle, une pulsation et un tableau partagé. Gratuit pour 1 projet et jusqu’à 3 employés IA.",
    button: "Commencer",
  },
  faq: {
    title: "FAQ sur les prix d’OpenCode",
    items: [
      {
        q: "OpenCode est-il gratuit ?",
        a: "Oui. L’agent est open source sous licence MIT, et gratuit. Il est aussi fourni avec des modèles gratuits qui ne demandent aucun compte et ont une limite quotidienne de requêtes.",
      },
      {
        q: "Combien coûte OpenCode Go ?",
        a: "OpenCode Go coûte $10 par mois et Go Plus $40 par mois. Les deux donnent accès à des modèles sélectionnés, avec des quotas sur des fenêtres de 5 heures, d’une semaine et d’un mois et des recharges de crédit, et vous pouvez résilier à tout moment.",
      },
      {
        q: "Quel est le modèle de tarification d’OpenCode ?",
        a: "L’agent est gratuit, et vous payez les modèles de l’une de ces quatre façons : les modèles gratuits, un abonnement Go ou Go Plus, le paiement à l’usage facturé par million de tokens sur votre solde, ou une offre ou une clé API que vous avez déjà. Enterprise passe par l’équipe commerciale.",
      },
      {
        q: "Comment OpenCode est-il facturé selon le modèle ?",
        a: "Les quotas d’OpenCode Go varient selon le modèle. Les modèles en paiement à l’usage sont facturés par million de tokens. Avec vos propres clés API, l’usage est facturé par ce fournisseur.",
      },
      {
        q: "Puis-je utiliser OpenCode avec mon abonnement ChatGPT ou GitHub Copilot ?",
        a: "Oui. Vous pouvez vous connecter avec ChatGPT Plus ou Pro ou GitHub Copilot, ou apporter vos propres clés API.",
      },
      {
        q: "OpenCode fonctionne-t-il avec des modèles locaux ?",
        a: "Oui. OpenCode fonctionne avec 200+ fournisseurs de LLM via Models.dev, y compris des modèles locaux, et l’agent lui-même est gratuit.",
      },
    ],
  },
  cta: {
    title: "Choisissez vos modèles. Puis confiez un poste à vos agents.",
    text: "Crewmark transforme les sessions Claude Code et Codex en employés IA dotés de rôles, de KPI, d’horaires de travail et d’une pulsation.",
    button: "Commencer",
  },
  checked:
    "Vérifié sur opencode.ai et sur les pages de console d’OpenCode le 13 novembre 2026. Les prix des autres produits proviennent de leurs propres sites à la même date.",
  disclaimer:
    "Crewmark est un produit indépendant, sans lien avec Anomaly, l’éditeur d’OpenCode, ni avec aucune autre entreprise citée sur cette page, et non approuvé par celles-ci. Les noms de produits sont des marques de leurs propriétaires respectifs.",
};
