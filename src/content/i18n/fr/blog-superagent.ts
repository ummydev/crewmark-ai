import type { GuideCopy } from "@/components/landing/guide-article";

// French translation of /blog/superagent; the English master is src/content/blog/superagent.ts.

const deepseek = "https://github.com/deepseek-ai/dsh-superagent-prototype";

export const copy: GuideCopy = {
  meta: {
    title: "Qu’est-ce qu’un Superagent ? DeepSeek, Base44, ClickUp",
    description:
      "« Superagent » désigne plusieurs produits d’IA à la fois. Ce qu’est un superagent, pourquoi le Super-agent de DeepSeek fait parler de lui et comment il se compare à Base44 Superagents, ClickUp Super Agents, Genspark et aux projets open source superagent-ai.",
  },
  breadcrumb: "Qu’est-ce qu’un superagent",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-06" },
  hero: {
    kicker: "Blog · Agents IA",
    title: "Qu’est-ce qu’un superagent ? Tous les « Superagent » de 2026 comparés",
    lead: "Un superagent est un agent IA qui continue de travailler seul : il repère le travail, prend en charge des tâches sans qu’il faille un prompt à chaque étape, les exécute en arrière-plan et ne revient vers vous que lorsqu’il a besoin d’une décision. Le mot est partout ce mois-ci parce que DeepSeek a publié en open source son prototype Super-agent le 31 octobre 2026, mais plusieurs produits portent déjà ce nom, de Base44 et ClickUp à un outil de sécurité open source. Ce guide explique l’idée, ce qu’est vraiment chacun d’eux et comment choisir.",
    cta: "Commencer",
    secondary: "Aller au comparatif",
    secondaryHref: "#compare",
  },
  sections: [
    {
      kind: "text",
      title: "Superagent : une définition",
      text: [
        "Il n’existe pas de norme, mais tous les produits vendus comme superagents partagent la même idée : passer d’un assistant qui répond quand on le sollicite à un agent qui prend en charge un travail continu.",
      ],
      points: [
        "Il démarre le travail de lui-même : à partir d’une planification, d’un déclencheur, d’un message ou d’une tâche assignée, pas seulement d’un prompt dans le chat.",
        "Il tourne en arrière-plan, souvent sur plusieurs tâches à la fois, chacune dans sa propre session.",
        "Il garde le contexte d’une tâche à l’autre et se connecte aux outils où le travail se fait, comme GitHub, Slack, Gmail ou un tableau de projet.",
        "Il ne sollicite l’attention d’une personne que lorsqu’il a besoin d’une décision ou d’une approbation.",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Tous les « Superagent » comparés",
      text: [
        "Informations tirées du site ou du dépôt GitHub de chaque éditeur le 6 novembre 2026.",
      ],
      headers: ["Produit", "Créé par", "Ce que c’est", "Comment le travail démarre", "Prix"],
      rows: [
        ["DeepSeek Super-agent (dsh-superagent)", "L’équipe Harness de DeepSeek", "Un agent de codage proactif pour un dépôt GitHub ; un prototype de recherche, pas un produit officiel", "Demandes sur GitHub (et, en option, Feishu) de personnes autorisées, ou règles écrites par l’équipe", "Gratuit, MIT ; tourne sur DeepSeek Harness"],
        ["Base44 Superagents", "Base44 (filiale de Wix)", "Des agents no-code que vous décrivez en langage courant, pour des tâches personnelles ou professionnelles", "Planifications, déclencheurs, webhooks, messageries comme WhatsApp, Telegram et Slack", "Consomme les crédits du forfait Base44 ; offre Free, puis à partir de 16 $/mois en facturation annuelle"],
        ["ClickUp Super Agents", "ClickUp", "Des coéquipiers IA dans un espace de travail ClickUp qui trient, planifient, font des rapports et créent des éléments", "@mentions, tâches assignées, messages privés, planifications et déclencheurs", "Ouvert à tous les utilisateurs ; usage facturé en crédits IA"],
        ["Genspark Super Agent", "Genspark", "Un agent généraliste pour la recherche, les présentations, les documents et plus encore", "Votre prompt", "Voir genspark.ai"],
        ["superagent-ai/superagent", "Superagent (open source)", "Lancé en 2023 comme framework d’agents ; protège aujourd’hui les applications IA contre l’injection de prompts et les fuites de données", "S’exécute dans le pipeline de votre application", "Open source, MIT"],
        ["superagent-ai/grok-cli", "Communauté, sans lien avec xAI", "Un agent de codage open source en ligne de commande pour l’API Grok", "Votre prompt ; sous-agents et pilotage à distance via Telegram", "Gratuit, MIT ; avec votre propre clé d’API Grok"],
        ["Crewmark", "Crewmark", "Des employés IA construits sur Claude Code, Codex, DeepSeek Harness ou OpenCode", "Une pulsation (heartbeat) pendant les horaires de travail prend la prochaine issue d’un tableau", "Inscriptions ouvertes ; fonctionne avec votre abonnement actuel"],
      ],
    },
    {
      kind: "text",
      title: "Pourquoi tout le monde cherche « superagent » en ce moment : DeepSeek",
      text: [
        "Le 31 octobre 2026, DeepSeek a publié un prototype de recherche appelé dsh-superagent ainsi qu’un essai sur la conception des super-agents, et le dépôt a dépassé environ 20 000 étoiles GitHub en une semaine. Il transforme DeepSeek Harness en un agent qui écoute GitHub, ouvre ses propres éléments de travail, exécute chacun dans une session distincte et répond avec des résultats comme des pull requests, tandis qu’un panneau web montre ce qui demande une personne. Son objectif affiché : mobiliser le moins d’attention humaine possible. Lisez l’analyse complète dans [DeepSeek Super-Agent expliqué](/blog/deepseek-super-agent).",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Comment choisir un superagent",
      steps: [
        {
          title: "Partez de l’endroit où se trouve le travail",
          text: "Du code sur GitHub oriente vers le prototype de DeepSeek ou vers un agent construit sur Claude Code ou Codex ; un espace de travail ClickUp, vers ClickUp Super Agents ; les tâches personnelles et la messagerie, vers Base44.",
        },
        {
          title: "Vérifiez comment il démarre le travail",
          text: "Un vrai superagent n’attend pas chaque prompt. Cherchez des planifications, des déclencheurs, des tâches assignées ou une pulsation, et un endroit clair où voir ce qu’il fait.",
        },
        {
          title: "Vérifiez ce qu’il peut faire seul",
          text: "Préférez les agents qui demandent avant les actions risquées, comme fusionner, envoyer ou dépenser, et qui gardent un historique que vous pouvez relire. Le prototype de DeepSeek n’agit que sur des demandes ou des règles écrites par l’équipe.",
        },
        {
          title: "Vérifiez quels modèles il utilise et qui paie",
          text: "Les produits d’espace de travail facturent des crédits en plus du forfait ; les outils open source tournent avec votre propre clé d’API ou votre abonnement. Comparez avec les [meilleures plateformes d’employés IA](/blog/best-ai-employee-platforms).",
        },
        {
          title: "Prototype ou produit ?",
          text: "DeepSeek précise que son Super-agent est fourni à titre de référence uniquement. Pour le travail quotidien, choisissez un outil maintenu, ou construisez sur un agent en qui vous avez déjà confiance.",
        },
      ],
      source: { label: "Source : le dépôt dsh-superagent de DeepSeek", href: deepseek },
    },
    {
      kind: "text",
      title: "Superagent vs agent IA vs employé IA",
      text: [
        "Un agent IA accomplit la tâche que vous lui confiez. Un superagent ajoute l’autonomie : il repère ou reçoit du travail et continue d’avancer en arrière-plan. Un employé IA va encore plus loin et donne un poste à cet agent : un rôle, un objectif chiffré, des horaires de travail et un tableau de tâches, comme lorsque vous intégrez une personne. Voir [ce qu’est un employé IA](/ai-employees) et [comment rendre Claude Code proactif](/proactive-claude-code).",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Avec Crewmark",
      title: "Un superagent avec une fiche de poste",
      text: [
        "Crewmark transforme une session Claude Code, Codex, DeepSeek Harness ou OpenCode en employé IA : il se réveille avec une pulsation pendant ses horaires de travail, prend la prochaine issue d’un tableau partagé, commente au fil de son travail et vous écrit quand il a besoin d’une décision, avec l’abonnement que vous payez déjà.",
      ],
      steps: [
        {
          title: "Choisissez l’agent en qui vous avez confiance",
          text: "DeepSeek Harness compris, le même environnement d’exécution sur lequel repose le Super-agent de DeepSeek.",
        },
        {
          title: "Donnez-lui un rôle et un objectif",
          text: "Ingénieur logiciel, spécialiste SEO, growth marketer : chacun avec un chiffre à faire bouger.",
        },
        {
          title: "Laissez la pulsation faire le reste",
          text: "Toutes les 15, 30 ou 60 minutes pendant les horaires de travail, il prend la prochaine issue ; vous ne répondez qu’à ce qui a besoin de vous.",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Choisir un superagent" },
  mid: {
    title: "Vous voulez un superagent qui travaille sur votre dépôt, avec votre abonnement ?",
    text: "Crewmark transforme Claude Code, Codex ou DeepSeek Harness en employés IA qui se réveillent avec une pulsation et prennent d’eux-mêmes la prochaine issue.",
    button: "Commencer",
  },
  faq: {
    title: "FAQ sur les superagents",
    items: [
      {
        q: "Qu’est-ce qu’un superagent ?",
        a: "Un agent IA qui travaille seul dans la durée : il lance des tâches à partir de déclencheurs, de planifications ou de demandes, les exécute en arrière-plan et ne consulte une personne que lorsqu’il a besoin d’une décision.",
      },
      {
        q: "Qu’est-ce que DeepSeek Super-agent ?",
        a: "Un prototype de recherche publié en open source par DeepSeek le 31 octobre 2026 (dsh-superagent, MIT). Il permet à DeepSeek Harness d’agir de façon proactive sur un dépôt GitHub. DeepSeek précise qu’il est fourni à titre de référence uniquement, et non comme un produit officiel.",
      },
      {
        q: "DeepSeek Super-agent est-il gratuit ?",
        a: "Oui. Le prototype et DeepSeek Harness sont open source sous licence MIT ; vous payez l’usage du modèle qui tourne derrière.",
      },
      {
        q: "Que sont les Base44 Superagents ?",
        a: "Des agents IA no-code de Base44 (filiale de Wix) que vous décrivez en langage courant. Ils tournent selon des planifications et des déclencheurs, se connectent à Gmail, Drive, Notion, GitHub, Slack ou à des serveurs MCP, et consomment les crédits de votre forfait Base44.",
      },
      {
        q: "Que sont les ClickUp Super Agents ?",
        a: "Des coéquipiers IA dans un espace de travail ClickUp, lancés en décembre 2025, que vous pouvez @mentionner, à qui vous pouvez assigner des tâches ou que vous pouvez planifier. Ils sont ouverts à tous les utilisateurs et consomment des crédits IA.",
      },
      {
        q: "Superagent sur GitHub, est-ce la même chose que celui de DeepSeek ?",
        a: "Non. L’organisation superagent-ai n’a aucun lien : son dépôt superagent est désormais un outil de sécurité pour l’IA, et grok-cli est un agent de codage communautaire pour l’API Grok.",
      },
      {
        q: "Quelle différence entre un superagent et un employé IA ?",
        a: "Un superagent travaille de façon autonome sur des tâches. Un employé IA est un agent autonome doté d’un rôle, d’un objectif, d’horaires de travail et d’un tableau, de sorte que son travail est organisé et mesuré comme celui d’un coéquipier.",
      },
    ],
  },
  cta: {
    title: "Faites de votre agent de codage un superagent avec un vrai poste.",
    text: "Crewmark transforme des sessions Claude Code, Codex, DeepSeek Harness et OpenCode en employés IA dotés de rôles, d’objectifs, d’horaires de travail et d’une pulsation.",
    button: "Commencer",
  },
  checked: "Vérifié sur le site ou le dépôt GitHub de chaque produit le 6 novembre 2026.",
  disclaimer:
    "Crewmark est un produit indépendant, sans lien avec DeepSeek, Base44, Wix, ClickUp, Genspark ou les projets superagent-ai et non approuvé par eux. Les noms de produits sont des marques de leurs propriétaires.",
};
