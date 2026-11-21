import type { GuideCopy } from "@/components/landing/guide-article";

// French translation of /personal-agent/openbot; the English master is src/content/personal-agents/openbot.ts.

const repo = "https://github.com/CopilotKit/OpenBot";

export const copy: GuideCopy = {
  meta: {
    title: "OpenBot : collègues IA open source de CopilotKit, tarifs, guide",
    description:
      "OpenBot : l’espace open source et auto-hébergeable de CopilotKit pour collègues IA. Fonctions, prix d’OpenBot for Business, configuration, GitHub, vs Grok Bot.",
  },
  breadcrumb: "OpenBot",
  parent: { name: "Agents personnels", href: "/personal-agent" },
  hero: {
    kicker: "Agents personnels · Open source",
    title: "OpenBot : l’espace de travail open source de CopilotKit pour collègues IA",
    lead: "OpenBot est l’espace de travail open source et auto-hébergeable de CopilotKit pour collègues IA. Chaque Bot dispose de son propre ordinateur, avec un navigateur, des fichiers et des outils, et travaille avec des validations et un journal d’activité. Vous le faites tourner comme application de bureau sur votre ordinateur portable ou sur Kubernetes pour une équipe, vous apportez vos propres modèles et vous pouvez connecter via AG-UI des agents que vous avez déjà créés. Voici ce qu’il fait, ce que coûte OpenBot for Business, comment le configurer, comment il vous laisse le contrôle et comment il se compare à d’autres collègues IA.",
    cta: "Commencer",
    secondary: "Le configurer",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "Ce qu’est OpenBot",
      points: [
        "Un ordinateur par Bot : chaque Bot a son propre navigateur, ses fichiers et ses outils, ainsi que ses conversations, routines, mémoire, skills, applications, validations et activité.",
        "Où il tourne : une application de bureau pour Mac et Windows avec un backend Docker sur votre ordinateur portable, ou Kubernetes via Helm pour une équipe. Une version hébergée par CopilotKit est en accès anticipé.",
        "Vos modèles : OpenAI, Claude, Gemini ou des modèles ouverts via un endpoint compatible OpenAI. Vous payez directement les fournisseurs de modèles.",
        "Vos agents : utilisez les Bots intégrés, ou connectez via AG-UI des agents que vous avez créés sur d’autres stacks.",
        "Routines : du travail récurrent, exécuté par un routine worker.",
        "Outils et interfaces : outils MCP, et interfaces pour Mac, Windows, le web, iOS, Android, Slack et Teams, certaines en accès anticipé.",
      ],
    },
    {
      kind: "text",
      id: "github",
      title: "OpenBot sur GitHub et CopilotKit Intelligence",
      text: [
        `Le code se trouve sur [github.com/CopilotKit/OpenBot](${repo}). Le dépôt a été créé le 17 août 2026 et comptait environ 11 652 étoiles le 13 novembre 2026.`,
      ],
      points: [
        "Le modèle d’application est sous licence MIT : vous pouvez donc l’auto-héberger et le personnaliser.",
        "Il utilise CopilotKit Intelligence, qui a sa propre licence : une licence locale gratuite sur un ordinateur portable, et une licence d’essai ou de production sur Kubernetes.",
        "Une utilisation en production sur Kubernetes nécessite une licence CopilotKit Intelligence au-delà de l’évaluation.",
      ],
    },
    {
      kind: "table",
      id: "plans",
      title: "Tarifs d’OpenBot et OpenBot for Business",
      text: [
        "D’après open.bot/pricing le 13 novembre 2026, en dollars américains. Quelle que soit l’offre, vous payez directement les fournisseurs de modèles.",
      ],
      headers: ["Offre ou licence", "Prix"],
      rows: [
        ["Projets personnels", "Gratuit"],
        ["OpenBot for Business, paiement à l’usage", "Jusqu’à $29 par utilisateur actif et par mois, plus 5 % des dépenses mensuelles en modèles au-delà de $5 000"],
        ["Annuel", "Sur mesure"],
        ["CopilotKit Intelligence", "Licence locale gratuite sur un ordinateur portable ; licence d’essai ou de production sur Kubernetes"],
        ["Modèles", "Payés directement aux fournisseurs de modèles"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Configurer OpenBot",
      steps: [
        {
          title: "Choisissez où il tourne",
          text: "Sur votre ordinateur portable, l’application de bureau pour Mac ou Windows, qui tourne avec un backend Docker. Pour une équipe, Kubernetes via Helm. Une version hébergée par CopilotKit est en accès anticipé.",
        },
        {
          title: "Connectez vos modèles",
          text: "Utilisez OpenAI, Claude, Gemini ou des modèles ouverts via un endpoint compatible OpenAI. Vous payez directement les fournisseurs.",
        },
        {
          title: "Choisissez un Bot ou apportez un agent",
          text: "Commencez avec un Bot intégré, ou connectez via AG-UI un agent que vous avez déjà créé. Chaque Bot dispose de son propre ordinateur, avec un navigateur, des fichiers et des outils.",
        },
        {
          title: "Ajoutez des outils et des routines",
          text: "Donnez aux Bots des outils MCP et configurez des Routines pour le travail récurrent ; un routine worker les exécute.",
        },
        {
          title: "Retrouvez-le là où vous travaillez",
          text: "Les interfaces couvrent Mac, Windows, le web, iOS, Android, Slack et Teams ; certaines sont en accès anticipé.",
        },
      ],
      source: { label: "Source : README d’OpenBot sur GitHub", href: repo },
    },
    {
      kind: "text",
      id: "safety",
      title: "Comment OpenBot vous laisse le contrôle",
      points: [
        "Validations : les Bots demandent avant d’agir.",
        "Activité : chaque Bot tient un journal d’activité.",
        "Édition équipe : connexion d’entreprise, rôles, autorisations par outil et audit.",
        "Auto-hébergement : il tourne sur votre ordinateur portable ou votre propre cluster Kubernetes, avec les fournisseurs de modèles de votre choix.",
      ],
    },
    {
      kind: "table",
      id: "vs",
      title: "OpenBot vs OpenWorker, Suparagent et Claude Cowork",
      text: [
        "Informations tirées du README de chaque projet ou des propres pages de l’éditeur, vérifiées le 13 novembre 2026, avec le nombre d’étoiles GitHub de ce jour-là. D’autres collègues IA sont comparés dans [les outils de collègues IA](/blog/ai-coworker) ; pour Grok Bot, voir [OpenBot vs Grok Bot](/compare/openbot-vs-grok-bot).",
        "Guides : [OpenWorker](/personal-agent/openworker), [Suparagent](/personal-agent/suparagent), [Claude Cowork](/personal-agent/claude-cowork).",
      ],
      headers: ["", "OpenBot", "OpenWorker", "Suparagent", "Claude Cowork"],
      rows: [
        ["Éditeur", "CopilotKit", "Andrew Ng (andrewyng sur GitHub)", "Anil-matcha sur GitHub", "Anthropic"],
        ["Open source", "Modèle d’application MIT, CopilotKit Intelligence sous licence distincte ; environ 11 652 étoiles", "MIT ; environ 19 050 étoiles", "Apache 2.0 ; environ 7 050 étoiles", "Non"],
        ["Où il s’exécute", "Application de bureau (Mac, Windows, backend Docker) ou Kubernetes ; version hébergée en accès anticipé", "Votre ordinateur (macOS, Windows) ; un petit service cloud sert d’intermédiaire pour la connexion des connecteurs", "Application de bureau, serveur Linux auto-hébergé ou application web hébergée", "Cloud d’Anthropic ; travail en local via Claude Desktop"],
        ["Modèles", "OpenAI, Claude, Gemini ou modèles ouverts ; vos propres agents via AG-UI", "Votre propre clé pour OpenAI, Anthropic, Gemini, OpenRouter et d’autres, ou un modèle local", "Moteurs comme Claude Code, Codex, Gemini CLI et Cursor ; aucun modèle inclus", "Modèles Claude"],
        ["Prix", "Gratuit pour les projets personnels ; Business jusqu’à $29 par utilisateur actif et par mois", "Aucun prix indiqué ; apportez votre propre modèle", "Aucun frais indiqué en auto-hébergement ; offres hébergées de $0 à $99 par mois", "Offres Claude payantes ; Pro coûte $20 par mois"],
        ["Travail récurrent", "Routines, exécutées par un routine worker", "Points, rapports et autres tâches répétables planifiés", "Routines selon un planning, par webhook ou à la demande", "Toutes les heures, chaque jour, chaque semaine ou les jours ouvrés, dans le cloud"],
        ["Validations", "Avant les actions ; audit dans l’édition équipe", "Activées par défaut ; modèle relecteur facultatif", "Ask first, Accept edits, Approve for me ou Plan only", "Manual, Auto ou Skip"],
        ["Tableau de tâches", "Non précisé", "Non précisé", "Tableau de tâches et calendrier", "Pas de tableau de tickets ; une liste de tâches et une page Scheduled"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Avec Crewmark",
      title: "Des Bots dans votre espace de travail. Des employés IA sur vos agents de code.",
      text: [
        "OpenBot donne à chaque Bot son propre ordinateur dans un espace de travail que vous hébergez. Crewmark transforme vos propres sessions Claude Code ou Codex en employés IA dotés d’un rôle, d’objectifs chiffrés, d’horaires de travail et d’une pulsation, chacun prenant des tickets sur un tableau partagé.",
      ],
      steps: [
        { title: "Choisissez un rôle", text: "Partez des [rôles d’employés IA](/ai-employees) et fixez des objectifs chiffrés." },
        { title: "Mettez le travail sur un tableau", text: "Assignez des tickets sur le tableau partagé ; pendant ses horaires de travail, la pulsation réveille l’employé pour qu’il prenne le suivant." },
        { title: "Voyez ce qu’il sait faire", text: "Des missions, avec leur configuration, se trouvent dans [les cas d’usage de Claude Code](/use-cases/claude-code)." },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Configurer OpenBot" },
  mid: {
    title: "Envie d’employés IA sur les agents de code que vous utilisez déjà ?",
    text: "Crewmark donne à vos sessions Claude Code ou Codex un rôle, des horaires de travail, une pulsation et un tableau partagé.",
    button: "Commencer",
  },
  faq: {
    title: "FAQ sur OpenBot",
    items: [
      {
        q: "Qu’est-ce qu’OpenBot ?",
        a: "L’espace de travail open source et auto-hébergeable de CopilotKit pour collègues IA. Chaque Bot dispose de son propre ordinateur, avec un navigateur, des fichiers et des outils, ainsi que de validations et d’un journal d’activité. Il tourne comme application de bureau sur votre ordinateur portable ou sur Kubernetes pour une équipe, avec les modèles que vous apportez.",
      },
      {
        q: "OpenBot est-il créé par CopilotKit ?",
        a: "Oui. Il se trouve sur github.com/CopilotKit/OpenBot. Il utilise CopilotKit Intelligence, sous une licence distincte de celle du modèle MIT d’OpenBot, et il connecte des agents existants via AG-UI.",
      },
      {
        q: "OpenBot est-il gratuit et open source ?",
        a: "Le modèle d’application est sous licence MIT, et OpenBot est gratuit pour les projets personnels. CopilotKit Intelligence, qu’il utilise, a une licence locale gratuite sur un ordinateur portable et une licence d’essai ou de production sur Kubernetes. Vous payez directement les fournisseurs de modèles.",
      },
      {
        q: "Combien coûte OpenBot for Business ?",
        a: "Le paiement à l’usage coûte jusqu’à $29 par utilisateur actif et par mois, plus 5 % des dépenses mensuelles en modèles au-delà de $5 000 ; le tarif annuel est sur mesure. Une utilisation en production sur Kubernetes nécessite aussi une licence CopilotKit Intelligence au-delà de l’évaluation.",
      },
      {
        q: "OpenBot vs Grok Bot : quelle différence ?",
        a: "OpenBot est open source et auto-hébergeable : vous le faites tourner sur votre ordinateur portable ou sur Kubernetes et apportez vos propres modèles ou agents. Pour une comparaison côte à côte avec Grok Bot, voir [OpenBot vs Grok Bot](/compare/openbot-vs-grok-bot).",
      },
      {
        q: "Où trouver OpenBot sur GitHub ?",
        a: "Sur github.com/CopilotKit/OpenBot. Le dépôt a été créé le 17 août 2026 et comptait environ 11 652 étoiles le 13 novembre 2026.",
      },
    ],
  },
  cta: {
    title: "Hébergez vos Bots. Donnez aussi un poste à vos agents de code.",
    text: "Crewmark transforme les sessions Claude Code et Codex en employés IA dotés de rôles, d’objectifs, d’horaires de travail et d’une pulsation.",
    button: "Commencer",
  },
  checked:
    "Vérifié dans le README d’OpenBot sur GitHub et sur open.bot/pricing le 13 novembre 2026 ; informations de comparaison tirées des propres pages de chaque produit, le même jour.",
  disclaimer:
    "Crewmark est un produit indépendant, sans lien avec CopilotKit et non approuvé par lui. Les noms de produits sont des marques de leurs propriétaires.",
};
