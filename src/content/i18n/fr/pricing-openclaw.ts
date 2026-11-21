import type { GuideCopy } from "@/components/landing/guide-article";

// French translation of /pricing/openclaw; the English master is src/content/product-pricing/openclaw.ts.

export const copy: GuideCopy = {
  meta: {
    title: "OpenClaw prix : gratuit, et ce que vous payez vraiment",
    description:
      "OpenClaw prix : gratuit, sous licence MIT, sans offre payante ni service hébergé. Vous payez votre fournisseur de modèles : clé API ou abonnement existant.",
  },
  breadcrumb: "Prix d’OpenClaw",
  parent: { name: "Comparatifs", href: "/compare" },
  hero: {
    kicker: "Tarifs · OpenClaw",
    title: "Prix d’OpenClaw : gratuit et open source, vous payez votre fournisseur de modèles",
    lead: "OpenClaw ne coûte rien. Il est sous licence MIT, et son README indique que le projet « n’a ni offre payante, ni service hébergé, ni jeton » (« has no paid tier, hosted service, or token. »). Ce que vous payez, c’est le modèle qui tourne derrière : une clé API facturée par votre fournisseur, ou un abonnement que vous avez déjà, comme une connexion ChatGPT ou Claude Code. Vous faites tourner le Gateway sur votre propre machine. Voici ce que cela signifie en pratique, et la comparaison avec Hermes Agent, OpenCode, OpenWorker et Claude Code.",
    cta: "Commencer",
    secondary: "Ce que vous payez vraiment",
    secondaryHref: "#costs",
  },
  sections: [
    {
      kind: "table",
      id: "plans",
      title: "Offres et prix d’OpenClaw",
      text: [
        "D’après le README GitHub d’OpenClaw et docs.openclaw.ai, vérifiés le 13 novembre 2026. Il n’existe qu’une seule édition, et elle est gratuite.",
      ],
      headers: ["Offre", "Prix", "Ce qui est inclus"],
      rows: [
        [
          "OpenClaw (open source)",
          "Gratuit, licence MIT",
          "Le Gateway, la Control UI, la CLI et la TUI ; des applications natives pour macOS, iOS, Android, Windows et Linux ; des canaux de discussion comme WhatsApp, Telegram, Slack, Discord et iMessage ; plusieurs agents par Gateway ; le planificateur Automations",
        ],
        ["Offre payante", "Aucune", "Le README indique qu’il n’existe pas d’offre payante"],
        ["Service hébergé", "Aucun", "Vous faites tourner et maintenez le Gateway vous-même"],
        [
          "Usage des modèles",
          "Facturé par votre fournisseur de modèles",
          "Une clé API, ou un abonnement que vous avez déjà (OAuth ChatGPT/Codex, ou une connexion Claude Code sur la même machine)",
        ],
      ],
    },
    {
      kind: "text",
      id: "costs",
      title: "Ce que vous payez vraiment pour faire tourner OpenClaw",
      points: [
        "Votre fournisseur de modèles. Les modèles sont des plugins : OpenAI, Anthropic, Google Gemini, OpenRouter, xAI et d’autres. Avec une clé API, ce fournisseur vous facture ce qu’OpenClaw consomme.",
        "Ou un abonnement que vous payez déjà. OpenClaw peut se connecter via l’OAuth ChatGPT/Codex d’OpenAI, et il peut utiliser Claude en réutilisant une connexion Claude Code sur la même machine (également avec `claude setup-token`).",
        "La connexion Claude Code ne fonctionne que si OpenClaw tourne sur la même machine que cette connexion. Les installations en conteneur (par exemple Podman) ne montent pas `~/.claude` : la documentation recommande donc une clé API dans ce cas.",
        "Les serveurs de modèles locaux figurent aussi dans la liste des fournisseurs : Ollama, LM Studio et vLLM.",
        "Votre propre machine. Le Gateway est un daemon qui tourne sur du matériel que vous contrôlez, installé sur macOS, Linux, Windows ou WSL2, ou avec Docker ou Nix. OpenClaw ne propose aucun hébergement.",
        "Rien pour OpenClaw lui-même. Le projet n’a pas d’offre payante : il n’y a donc rien à lui acheter.",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Prix d’OpenClaw vs agents similaires",
      text: [
        "Prix tirés du site de chaque produit, vérifiés le 13 novembre 2026. Tous ont aussi besoin d’un modèle, payé à son fournisseur, sauf si une offre ci-dessous l’inclut.",
        "Côte à côte : [OpenClaw vs Claude Code](/compare/openclaw-vs-claude-code), [OpenClaw vs OpenCode](/compare/openclaw-vs-opencode), [Hermes Agent vs OpenClaw](/blog/hermes-agent-vs-openclaw). D’autres options dans [les alternatives à OpenClaw](/blog/openclaw-alternatives).",
      ],
      headers: ["Produit", "Prix à partir de", "Option gratuite"],
      rows: [
        ["OpenClaw", "Gratuit ; vous payez votre fournisseur de modèles", "Oui : tout le projet (MIT)"],
        [
          "[Hermes Agent](/pricing/hermes-agent)",
          "Agent gratuit ; Nous Portal Plus en option, $20/mois",
          "Oui : l’agent (MIT), et Nous Portal Free à $0",
        ],
        [
          "[OpenCode](/pricing/opencode)",
          "Agent gratuit ; OpenCode Go $10/mois, Go Plus $40/mois",
          "Oui : des modèles gratuits avec une limite quotidienne de requêtes, sans compte",
        ],
        [
          "[OpenWorker](/personal-agent/openworker)",
          "Aucun prix affiché ; votre propre clé de modèle ou un modèle local",
          "Oui : l’application (MIT)",
        ],
        [
          "[Claude Code](/compare/openclaw-vs-claude-code)",
          "Claude Pro $20/mois, ou $17/mois en facturation annuelle",
          "Non : pas dans Claude Free ; les crédits API en paiement à l’usage fonctionnent aussi",
        ],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Avec Crewmark",
      title: "OpenClaw vous répond dans le chat. Crewmark confie un poste à vos agents de code.",
      text: [
        "Crewmark est un gestionnaire de tickets pour une équipe d’employés IA. Chaque employé est une conversation Claude Code ou Codex sur votre propre ordinateur, avec un rôle, des objectifs et des horaires de travail. Il se réveille au rythme d’une pulsation et prend des tickets sur un tableau partagé. Comme OpenClaw, il ne facture pas l’usage des modèles : les agents tournent sur l’abonnement Claude ou ChatGPT que vous payez déjà.",
        "Les prix de Crewmark : Free à $0 (1 projet, jusqu’à 3 employés IA, 1 personne). Pro à $5/mois et Team à $10/mois arrivent bientôt. La facturation n’est pas encore en place : d’ici là, tous les comptes peuvent utiliser Crewmark gratuitement. Il est open source (GPL-3.0) et peut être auto-hébergé.",
      ],
      steps: [
        { title: "Choisir un rôle", text: "Parmi les [rôles d’employés IA](/ai-employees), avec des objectifs chiffrés." },
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
    title: "Vous payez déjà Claude ou ChatGPT ?",
    text: "Crewmark transforme votre Claude Code ou Codex en employés IA dotés de rôles, d’une pulsation et d’un tableau partagé.",
    button: "Commencer",
  },
  faq: {
    title: "FAQ sur les prix d’OpenClaw",
    items: [
      {
        q: "OpenClaw est-il gratuit ?",
        a: "Oui. OpenClaw est open source sous licence MIT, et son README indique que le projet « n’a ni offre payante, ni service hébergé, ni jeton ». Vous ne payez que votre fournisseur de modèles.",
      },
      {
        q: "OpenClaw a-t-il une offre tarifaire ?",
        a: "Non. Il n’existe qu’une seule édition, gratuite. La seule facture concerne le modèle que vous connectez : une clé API facturée par son fournisseur, ou un abonnement que vous avez déjà.",
      },
      {
        q: "Quel est le modèle de tarification d’OpenClaw ?",
        a: "Un logiciel gratuit, plus un modèle que vous apportez. Les modèles sont des plugins (OpenAI, Anthropic, Gemini, OpenRouter, xAI, Ollama, LM Studio, vLLM et d’autres) : le coût dépend donc du fournisseur et de l’offre que vous choisissez.",
      },
      {
        q: "Puis-je utiliser OpenClaw avec mon abonnement Claude ?",
        a: "Oui, en réutilisant une connexion Claude Code sur la même machine (ou avec `claude setup-token`). Les installations en conteneur comme Podman ne montent pas `~/.claude` : la documentation recommande donc une clé API dans ce cas.",
      },
      {
        q: "Existe-t-il une version hébergée d’OpenClaw ?",
        a: "Pas de la part du projet. Vous faites tourner le Gateway sur votre propre machine (macOS, Linux, Windows ou WSL2, ou avec Docker ou Nix) et vous le maintenez vous-même.",
      },
      {
        q: "Qui finance le développement d’OpenClaw ?",
        a: "L’OpenClaw Foundation, une organisation indépendante de type 501(c)(3) qui emploie l’équipe principale et signe les versions. Le README précise : « OpenAI est un donateur, pas un propriétaire » (« OpenAI is a donor, not an owner. »).",
      },
    ],
  },
  cta: {
    title: "Gardez votre facture de modèles. Confiez un poste à vos agents.",
    text: "Crewmark transforme les sessions Claude Code et Codex en employés IA dotés de rôles, d’objectifs, d’horaires de travail et d’une pulsation.",
    button: "Commencer",
  },
  checked:
    "Vérifié dans le README GitHub d’OpenClaw et sur docs.openclaw.ai, ainsi que sur la page de tarifs de chaque produit comparé, le 13 novembre 2026.",
  disclaimer:
    "Crewmark est un produit indépendant, sans lien avec l’OpenClaw Foundation ni avec aucune autre entreprise citée sur cette page, et non approuvé par celles-ci. Les noms de produits sont des marques de leurs propriétaires respectifs.",
};
