import type { GuideCopy } from "@/components/landing/guide-article";

// French translation of /personal-agent/suparagent; the English master is
// src/content/personal-agents/suparagent.ts.

const repo = "https://github.com/Anil-matcha/suparagent";

export const copy: GuideCopy = {
  meta: {
    title: "Suparagent : collègues IA open source, tarifs et configuration",
    description:
      "Suparagent : un espace de travail open source pour collègues IA sur Claude Code, Codex, Gemini CLI ou Cursor. Définition, tarifs, configuration et comparatifs.",
  },
  breadcrumb: "Suparagent",
  parent: { name: "Agents personnels", href: "/personal-agent" },
  hero: {
    kicker: "Agents personnels · Open source",
    title: "Suparagent : un espace de travail open source pour collègues IA",
    lead: "Suparagent est un « espace de travail pour collègues IA » (« workspace for AI coworkers ») open source. Vous créez des agents nommés, chacun avec un poste, un espace de travail, une mémoire, des routines et des réglages de validation, et ils tournent sur un moteur que vous utilisez déjà, comme Claude Code, Codex, Gemini CLI ou Cursor. Il fonctionne comme application de bureau ou sur votre propre serveur ; un service hébergé sur suparagent.ai est un produit distinct. L’application s’est appelée Open Dots, puis Open Duet, et a pris le nom de Suparagent le 9 novembre 2026, avec la version 0.8.5.",
    cta: "Commencer",
    secondary: "Le configurer",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "Ce qu’est Suparagent",
      points: [
        "Des collègues nommés : chaque agent a un nom, un rôle, un moteur, un espace de travail, une mémoire et des réglages de validation, avec des templates et des skills comme point de départ.",
        "Les moteurs que vous utilisez déjà : Claude Code ou Codex CLI, Gemini CLI, Google Gemini via Antigravity, Cursor, d’autres agents CLI via l’Agent Client Protocol (ACP), OpenRouter, ou des API compatibles OpenAI comme Ollama ou LM Studio. Aucun modèle n’est inclus.",
        "Travail et plannings : un tableau de tâches et un calendrier pour assigner du travail, planifier des exécutions ponctuelles et examiner les tentatives, ainsi que des routines qui s’exécutent selon un planning, par webhook ou à la demande tant que le backend tourne.",
        "Des équipes d’agents : un agent principal (Claude ou Codex) délègue à des spécialistes, et les agents se coordonnent dans des salons partagés.",
        "Validations : Ask first, Accept edits, Approve for me (Claude, Codex et Cursor) et Plan only. Une routine n’approuve jamais une action d’elle-même, et une vue Today rassemble les validations, les questions et les résultats des routines.",
        `Open source sous Apache 2.0 sur [github.com/Anil-matcha/suparagent](${repo}), avec environ 7 050 étoiles le 13 novembre 2026, dans un dépôt créé en mai 2023. Le projet est jeune et évolue : le serveur auto-hébergé, les ordinateurs Docker, les outils de navigateur et la préversion native de bureau pour macOS sont expérimentaux.`,
      ],
    },
    {
      kind: "table",
      id: "plans",
      title: "Tarifs de Suparagent",
      text: [
        "Aucun frais Suparagent n’est indiqué pour l’application de bureau ni pour un serveur auto-hébergé. Offres hébergées telles que listées dans le README le 13 novembre 2026, en dollars américains. Quelle que soit l’offre, vous apportez votre propre compte de fournisseur d’IA.",
      ],
      headers: ["Offre", "Prix", "Inclus"],
      rows: [
        ["Application de bureau ou serveur auto-hébergé", "Aucun frais Suparagent indiqué", "Votre propre moteur ; vous payez votre fournisseur de modèles"],
        ["Hébergé : Free preview", "$0", "Calcul en sandbox facturé sur votre compte Boat"],
        ["Hébergé : Starter", "$15/mois", "100 heures de calcul, 51 Go"],
        ["Hébergé : Standard", "$49/mois", "300 heures de calcul, 51 Go"],
        ["Hébergé : Pro", "$99/mois", "720 heures de calcul, 111 Go"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Configurer Suparagent",
      steps: [
        {
          title: "Choisissez où il tourne",
          text: "Lancez l’application de bureau depuis une copie du code source (les installeurs de GitHub Releases sont expérimentaux et non signés), configurez un serveur Linux auto-hébergé, ou utilisez l’application web hébergée sur suparagent.ai.",
        },
        {
          title: "Créez un agent",
          text: "Donnez-lui un nom, un rôle, un moteur comme Claude Code, Codex, Gemini CLI ou Cursor, un espace de travail et un mode de validation, ou partez d’un template.",
        },
        {
          title: "Donnez-lui du travail",
          text: "Assignez des tâches sur le tableau, ou configurez des routines qui s’exécutent selon un planning, par webhook ou à la demande ; le backend doit rester actif. Les validations, les questions et les résultats s’accumulent dans la vue Today.",
        },
      ],
      source: { label: "Source : README de Suparagent sur GitHub", href: repo },
    },
    {
      kind: "table",
      id: "vs",
      title: "Suparagent vs OpenWorker, OpenBot et Claude Cowork",
      text: [
        "Informations tirées du README de chaque projet ou des propres pages de l’éditeur, vérifiées le 13 novembre 2026, avec le nombre d’étoiles GitHub de ce jour-là. D’autres collègues IA sont comparés dans [les outils de collègues IA](/blog/ai-coworker).",
        "Guides : [OpenWorker](/personal-agent/openworker), [OpenBot](/personal-agent/openbot), [Claude Cowork](/personal-agent/claude-cowork).",
      ],
      headers: ["", "Suparagent", "OpenWorker", "OpenBot", "Claude Cowork"],
      rows: [
        ["Éditeur", "Anil-matcha sur GitHub", "Andrew Ng (andrewyng sur GitHub)", "CopilotKit", "Anthropic"],
        ["Open source", "Apache 2.0 ; environ 7 050 étoiles", "MIT ; environ 19 050 étoiles", "Modèle d’application MIT, CopilotKit Intelligence sous licence distincte ; environ 11 652 étoiles", "Non"],
        ["Où il s’exécute", "Application de bureau, serveur Linux auto-hébergé ou application web hébergée", "Votre ordinateur (macOS, Windows) ; un petit service cloud sert d’intermédiaire pour la connexion des connecteurs", "Application de bureau (Mac, Windows, backend Docker) ou Kubernetes ; version hébergée en accès anticipé", "Cloud d’Anthropic ; travail en local via Claude Desktop"],
        ["Modèles", "Moteurs comme Claude Code, Codex, Gemini CLI et Cursor ; aucun modèle inclus", "Votre propre clé pour OpenAI, Anthropic, Gemini, OpenRouter et d’autres, ou un modèle local", "OpenAI, Claude, Gemini ou modèles ouverts ; vos propres agents via AG-UI", "Modèles Claude"],
        ["Prix", "Aucun frais indiqué en auto-hébergement ; offres hébergées de $0 à $99 par mois", "Aucun prix indiqué ; apportez votre propre modèle", "Gratuit pour les projets personnels ; Business jusqu’à $29 par utilisateur actif et par mois", "Offres Claude payantes ; Pro coûte $20 par mois"],
        ["Tableau de tâches", "Tableau de tâches et calendrier", "Non précisé", "Non précisé", "Pas de tableau de tickets ; une liste de tâches et une page Scheduled"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Avec Crewmark",
      title: "Des employés IA avec des objectifs, des horaires et une pulsation",
      text: [
        "Suparagent fait tourner des collègues nommés sur le moteur de votre choix. Crewmark transforme vos propres sessions Claude Code ou Codex en employés IA dotés d’un rôle, d’objectifs chiffrés, d’horaires de travail et d’une pulsation, chacun prenant des tickets sur un tableau partagé.",
      ],
      steps: [
        { title: "Choisissez un rôle", text: "Partez des [rôles d’employés IA](/ai-employees) et fixez des objectifs chiffrés." },
        { title: "Mettez le travail sur un tableau", text: "Assignez des tickets sur le tableau partagé ; pendant ses horaires de travail, la pulsation réveille l’employé pour qu’il prenne le suivant." },
        { title: "Voyez ce qu’il sait faire", text: "Des missions, avec leur configuration, se trouvent dans [les cas d’usage de Claude Code](/use-cases/claude-code)." },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Configurer Suparagent" },
  mid: {
    title: "Envie d’employés IA sur les agents de code que vous utilisez déjà ?",
    text: "Crewmark donne à vos sessions Claude Code ou Codex un rôle, des horaires de travail, une pulsation et un tableau partagé.",
    button: "Commencer",
  },
  faq: {
    title: "FAQ sur Suparagent",
    items: [
      {
        q: "Qu’est-ce que Suparagent ?",
        a: "Un espace de travail open source pour collègues IA. Vous créez des agents nommés avec un rôle, une mémoire, des routines et des réglages de validation, et ils tournent sur un moteur que vous utilisez déjà, comme Claude Code, Codex, Gemini CLI ou Cursor. Il s’appelait Open Dots, puis Open Duet, jusqu’à son changement de nom le 9 novembre 2026.",
      },
      {
        q: "Suparagent est-il gratuit ?",
        a: "Le code est sous Apache 2.0, et aucun frais Suparagent n’est indiqué pour l’application de bureau ni pour un serveur auto-hébergé ; vous payez votre fournisseur de modèles. Le README liste des offres hébergées : une Free preview à $0 (calcul en sandbox facturé sur votre compte Boat), Starter à $15 par mois, Standard à $49 et Pro à $99.",
      },
      {
        q: "Avec quels agents IA Suparagent fonctionne-t-il ?",
        a: "Claude Code ou Codex CLI, Gemini CLI, Google Gemini via Antigravity, Cursor, d’autres agents CLI via l’Agent Client Protocol (ACP), OpenRouter, et des API compatibles OpenAI comme Ollama ou LM Studio. L’agent principal d’une équipe doit être Claude ou Codex, et les applications connectées ne fonctionnent qu’avec les agents Claude et Codex.",
      },
    ],
  },
  cta: {
    title: "Donnez un poste à vos agents de code, pas seulement un prompt.",
    text: "Crewmark transforme les sessions Claude Code et Codex en employés IA dotés de rôles, d’objectifs, d’horaires de travail et d’une pulsation.",
    button: "Commencer",
  },
  checked:
    "Vérifié dans le README, le changelog et la licence de Suparagent sur GitHub et sur suparagent.ai le 13 novembre 2026 ; informations de comparaison tirées des propres pages de chaque produit, le même jour.",
  disclaimer:
    "Crewmark est un produit indépendant, sans lien avec le projet Suparagent ni avec Vadoo Internet Services Private Limited, et non approuvé par eux. Les noms de produits sont des marques de leurs propriétaires.",
};
