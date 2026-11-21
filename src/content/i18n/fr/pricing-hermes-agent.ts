import type { GuideCopy } from "@/components/landing/guide-article";

// French translation of /pricing/hermes-agent; the English master is src/content/product-pricing/hermes-agent.ts.

export const copy: GuideCopy = {
  meta: {
    title: "Hermes Agent prix : agent gratuit et offres Nous Portal",
    description:
      "Hermes Agent est gratuit, sous licence MIT. Le Nous Portal, facultatif, coûte $0, $20, $100 ou $200 par mois. Ce qu’inclut chaque niveau et ce qui s’y ajoute.",
  },
  breadcrumb: "Prix d’Hermes Agent",
  parent: { name: "Comparatifs", href: "/compare" },
  hero: {
    kicker: "Tarifs · Nous Research",
    title: "Prix d’Hermes Agent : un agent gratuit, et un abonnement Nous Portal facultatif",
    lead: "Hermes Agent est gratuit : Nous Research le publie sous licence MIT, et vous payez votre fournisseur de modèles. Si vous préférez obtenir vos modèles auprès de Nous, le Nous Portal, facultatif, propose quatre niveaux : Free à $0, Plus à $20 par mois, Super à $100 et Ultra à $200, et les niveaux payants incluent un agent hébergé dans le cloud. Voici ce que comprend chaque niveau, ce que vous payez en plus, et la comparaison avec OpenClaw, OpenCode, OpenWorker et Grok Bot.",
    cta: "Commencer",
    secondary: "Voir les offres",
    secondaryHref: "#plans",
  },
  sections: [
    {
      kind: "table",
      id: "plans",
      title: "Offres Hermes Agent et Nous Portal",
      text: [
        "D’après hermes-agent.nousresearch.com et portal.nousresearch.com, vérifiés le 13 novembre 2026. Les prix sont mensuels ; aucun prix annuel n’est affiché. Vous n’avez pas besoin d’une offre Nous Portal pour utiliser l’agent.",
      ],
      headers: ["Offre", "Prix", "Ce qui est inclus"],
      rows: [
        [
          "Hermes Agent",
          "Gratuit, licence MIT",
          "L’agent : interface terminal, application de bureau, applications de messagerie via une passerelle unique, skills, mémoire, planificateur cron et Bot Mode. Compatible avec n’importe quel fournisseur de modèles",
        ],
        ["Nous Portal Free", "$0", "Paiement à l’usage ; modèles gratuits uniquement"],
        ["Nous Portal Plus", "$20/mois", "Modèles gratuits et payants ; un agent hébergé dans le cloud (4 Go de RAM, 25 Go de disque)"],
        [
          "Nous Portal Super",
          "$100/mois",
          "5× l’usage de Plus ; modèles gratuits et payants ; un agent hébergé dans le cloud (4 Go de RAM, 100 Go de disque)",
        ],
        [
          "Nous Portal Ultra",
          "$200/mois",
          "10× l’usage de Plus ; modèles gratuits et payants ; un agent hébergé dans le cloud (8 Go de RAM, 100 Go de disque)",
        ],
      ],
    },
    {
      kind: "text",
      id: "costs",
      title: "Ce que vous payez vraiment pour faire tourner Hermes Agent",
      points: [
        "Votre fournisseur de modèles. Vous changez de fournisseur avec `hermes model` : Nous Portal, OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, AWS Bedrock, Ollama Cloud, LM Studio, des endpoints personnalisés et d’autres. Avec une clé API, c’est ce fournisseur qui vous facture.",
        "Un abonnement Claude ne fonctionne qu’avec Claude Max et de l’usage supplémentaire acheté. La documentation indique que « les abonnés Claude Pro ne peuvent pas utiliser cette voie » (« Claude Pro subscribers cannot use this path ») : sur Pro, il vous faut donc une clé API.",
        "La connexion ChatGPT/Codex se fait par code d’appareil (device code). Les offres ChatGPT compatibles, et la façon dont l’usage est décompté des limites de l’offre, ne sont « pas documentées actuellement » (« not currently documented »).",
        "Un endroit où le faire tourner. Hermes Agent s’installe en local ou sur un serveur : le README cite « un VPS à $5, un cluster GPU ou une infrastructure serverless ». Ses six backends de terminal sont local, Docker, SSH, Modal, Daytona et Vercel Sandbox.",
        "Ou un niveau payant du Nous Portal, qui inclut un agent hébergé dans le cloud (tailles dans le tableau ci-dessus).",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Prix d’Hermes Agent vs agents similaires",
      text: [
        "Prix tirés du site de chaque produit, vérifiés le 13 novembre 2026.",
        "Côte à côte : [Hermes Agent vs OpenClaw](/blog/hermes-agent-vs-openclaw), [Hermes Agent vs Claude Code](/compare/hermes-agent-vs-claude-code), [Grok Bot vs Hermes Agent](/compare/grok-bot-vs-hermes-agent), [Multica vs Hermes Agent](/compare/multica-vs-hermes-agent). D’autres options dans [les alternatives à Hermes Agent](/alternatives/hermes-agent).",
      ],
      headers: ["Produit", "Prix à partir de", "Option gratuite"],
      rows: [
        [
          "Hermes Agent",
          "Gratuit ; Nous Portal Plus en option, $20/mois",
          "Oui : l’agent (MIT), et Nous Portal Free à $0",
        ],
        ["[OpenClaw](/pricing/openclaw)", "Gratuit ; vous payez votre fournisseur de modèles", "Oui : tout le projet (MIT)"],
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
          "[Grok Bot](/personal-agent/grok-bot)",
          "Premium $30/mois ; Super $100, Ultra $200",
          "Aucune indiquée",
        ],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Avec Crewmark",
      title: "Hermes Agent est votre agent personnel. Crewmark fait tourner une équipe d’agents de code.",
      text: [
        "Crewmark est un gestionnaire de tickets pour une équipe d’employés IA. Chaque employé est une conversation Claude Code ou Codex sur votre propre ordinateur, avec un rôle, des objectifs et des horaires de travail. Il se réveille au rythme d’une pulsation et prend des tickets sur un tableau partagé. Les agents tournent sur l’abonnement Claude ou ChatGPT que vous payez déjà, sans facture de tokens séparée.",
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
          text: "[Les tarifs de Crewmark](/pricing), et ce que les agents en font dans [les cas d’usage de Claude Code](/use-cases/claude-code) et [les cas d’usage de Codex](/use-cases/codex).",
        },
      ],
    },
  ],
  mid: {
    title: "Vous voulez des agents qui avancent d’eux-mêmes sur un poste ?",
    text: "Crewmark donne à votre Claude Code ou Codex un rôle, une pulsation et un tableau partagé.",
    button: "Commencer",
  },
  faq: {
    title: "FAQ sur les prix d’Hermes Agent",
    items: [
      {
        q: "Hermes Agent est-il gratuit ?",
        a: "Oui. L’agent est open source sous licence MIT. Vous payez votre fournisseur de modèles, ou vous pouvez, si vous le souhaitez, vous abonner au Nous Portal.",
      },
      {
        q: "Combien coûte Hermes Agent par mois ?",
        a: "L’agent coûte $0. Le Nous Portal, facultatif, propose Free à $0, Plus à $20 par mois, Super à $100 (5× l’usage de Plus) et Ultra à $200 (10× l’usage de Plus). Aucun prix annuel n’est affiché.",
      },
      {
        q: "Faut-il un abonnement Nous Portal pour utiliser Hermes Agent ?",
        a: "Non. Nous Portal est l’un des nombreux fournisseurs que vous pouvez choisir avec `hermes model`, aux côtés d’OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, AWS Bedrock, des modèles locaux et des endpoints personnalisés.",
      },
      {
        q: "Puis-je utiliser mon abonnement Claude avec Hermes Agent ?",
        a: "Uniquement avec Claude Max et de l’usage supplémentaire acheté. La documentation indique que les abonnés Claude Pro ne peuvent pas passer par l’abonnement : sur Pro, il vous faut donc une clé API.",
      },
      {
        q: "Une offre Hermes Agent inclut-elle l’hébergement ?",
        a: "Les niveaux payants du Nous Portal incluent un agent hébergé dans le cloud : 4 Go de RAM et 25 Go de disque sur Plus, 4 Go et 100 Go sur Super, 8 Go et 100 Go sur Ultra. Sinon, vous le faites tourner sur votre propre machine ou votre propre serveur.",
      },
      {
        q: "Puis-je utiliser mon abonnement ChatGPT avec Hermes Agent ?",
        a: "La connexion ChatGPT/Codex se fait par code d’appareil, mais la documentation indique que les offres ChatGPT compatibles, et la façon dont l’usage est décompté des limites de l’offre, ne sont pas documentées actuellement.",
      },
    ],
  },
  cta: {
    title: "Donnez à vos agents de code un rôle et un planning.",
    text: "Crewmark transforme les sessions Claude Code et Codex en employés IA dotés de rôles, d’objectifs, d’horaires de travail et d’une pulsation.",
    button: "Commencer",
  },
  checked:
    "Vérifié sur hermes-agent.nousresearch.com et portal.nousresearch.com, dans la documentation et le README GitHub d’Hermes Agent, ainsi que sur la page de tarifs de chaque produit comparé, le 13 novembre 2026.",
  disclaimer:
    "Crewmark est un produit indépendant, sans lien avec Nous Research ni avec aucune autre entreprise citée sur cette page, et non approuvé par celles-ci. Les noms de produits sont des marques de leurs propriétaires respectifs.",
};
