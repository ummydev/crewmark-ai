import type { GuideCopy } from "@/components/landing/guide-article";

// French translation of /personal-agent/openworker; the English master is
// src/content/personal-agents/openworker.ts.

const repo = "https://github.com/andrewyng/openworker";

export const copy: GuideCopy = {
  meta: {
    title: "OpenWorker : le collègue IA open source d’Andrew Ng, guide et SDK",
    description:
      "OpenWorker, le collègue IA open source d’Andrew Ng sur GitHub : une app de bureau avec votre propre modèle, validations et plannings, plus un Harness SDK.",
  },
  breadcrumb: "OpenWorker",
  parent: { name: "Agents personnels", href: "/personal-agent" },
  hero: {
    kicker: "Agents personnels · Open source",
    title: "OpenWorker : le collègue IA open source d’Andrew Ng et comment le configurer",
    lead: "OpenWorker est une application de bureau open source que son README décrit comme « un collègue IA pour votre travail quotidien » (« an AI coworker for your everyday work »), accompagnée d’un Harness SDK en TypeScript et en Rust pour créer vos propres applications agentiques. Le dépôt se trouve sur le compte GitHub d’Andrew Ng, est sous licence MIT et comptait environ 19 050 étoiles le 13 novembre 2026. L’application tourne sur votre machine avec votre propre clé de modèle ou un modèle local, demande avant d’agir et enregistre chaque appel d’outil. Voici ce que fait OpenWorker, ce qu’il coûte, comment le configurer, comment fonctionnent les validations et comment il se compare à OpenBot, Suparagent et Claude Cowork.",
    cta: "Commencer",
    secondary: "Le configurer",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "Ce qu’est OpenWorker",
      points: [
        "Une application de bureau pour le travail de tous les jours : recherche, rédaction, revue de code et exécution de tâches dans vos outils. Elle est en bêta ouverte.",
        "Il tourne sur votre machine : la boucle de l’agent, les conversations, les jetons des connecteurs et les clés de modèle y restent. Le seul élément dans le cloud est un petit service qui sert d’intermédiaire pour la connexion OAuth des connecteurs.",
        "Vous choisissez le modèle : OpenAI, Anthropic, Google Gemini, OpenRouter et d’autres fournisseurs avec votre propre clé, ou des modèles locaux via Ollama, LM Studio, llama.cpp ou vLLM. Son moteur d’agent est écrit en Python sur aisuite, la bibliothèque d’Andrew Ng.",
        "Des collègues spécialisés arrivent avec les outils et les instructions d’un métier précis ; les premiers à arriver sont ceux dédiés à la sécurité.",
        "Connecteurs : GitHub, Slack, l’e-mail et les agendas parmi plus de 25, plus MCP. Mentionnez @OpenWorker dans Slack et la tâche s’exécute sur votre ordinateur, avec la réponse dans le fil.",
        "Plannings : points du matin, rapports hebdomadaires et autres tâches répétables s’exécutent selon un planning, avec des transcriptions à relire.",
      ],
    },
    {
      kind: "text",
      id: "github",
      title: "OpenWorker sur GitHub et le Harness SDK",
      text: [
        `Le code se trouve sur [github.com/andrewyng/openworker](${repo}). Le dépôt a été créé le 20 juillet 2026, son fichier LICENSE MIT désigne Andrew Ng comme titulaire des droits d’auteur, et il comptait environ 19 050 étoiles le 13 novembre 2026.`,
      ],
      points: [
        "Harness SDK : un SDK en TypeScript et en Rust, dans le même dépôt, pour créer vos propres applications agentiques de bureau ou web.",
        "Subagents et équipes : le SDK prend en charge les deux ; ce n’est pas précisé pour l’application de bureau.",
        "Déploiement : les applications construites sur le SDK peuvent tourner sur Kubernetes dans AWS, Azure ou Google Cloud.",
        "Contributions : les mainteneurs précisent qu’ils pourraient ne pas accepter de pull requests pour des fonctionnalités déjà en développement ou hors de leurs plans.",
      ],
    },
    {
      kind: "table",
      id: "plans",
      title: "Tarifs et licence d’OpenWorker",
      text: [
        "Ni le README ni openworker.com n’indiquent de prix (vérifié le 13 novembre 2026). Vous apportez votre propre clé de modèle, facturée par votre fournisseur, ou faites tourner un modèle local.",
      ],
      headers: ["Composant", "Ce que vous payez"],
      rows: [
        ["Application de bureau (bêta ouverte)", "Aucun prix indiqué ; licence MIT"],
        ["Harness SDK (TypeScript, Rust)", "Aucun prix indiqué ; licence MIT, même dépôt"],
        ["Modèle cloud : OpenAI, Anthropic, Google Gemini, OpenRouter ou un autre fournisseur", "Facturé par ce fournisseur, avec votre propre clé"],
        ["Modèle local : Ollama, LM Studio, llama.cpp ou vLLM", "Tourne sur votre propre machine"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Configurer OpenWorker",
      steps: [
        {
          title: "Téléchargez l’application de bureau",
          text: "Elle tourne sur macOS 12 ou ultérieur sur Apple silicon (signée et notarisée) et sur Windows 10 ou 11 en x64. Les versions Windows ne sont pas encore signées, donc SmartScreen affiche un avertissement. Aucun téléchargement pour Linux n’est proposé.",
        },
        {
          title: "Ajoutez un modèle",
          text: "Saisissez votre propre clé pour OpenAI, Anthropic, Google Gemini, OpenRouter ou un autre fournisseur, ou utilisez un modèle local via Ollama, LM Studio, llama.cpp ou vLLM. Les clés restent sur votre machine.",
        },
        {
          title: "Connectez vos outils",
          text: "Ajoutez des connecteurs comme GitHub, Slack, l’e-mail et les agendas, ou des serveurs MCP. La connexion passe par un petit service cloud qui sert d’intermédiaire OAuth ; les jetons restent sur votre machine.",
        },
        {
          title: "Décidez de ce qui demande votre accord",
          text: "Par défaut, les actions attendent une validation. Transformez des validations ponctuelles en règles permanentes et en listes d’autorisation, ou activez l’approbation automatique, où un modèle relecteur décide et vous transmet la décision quand il a un doute.",
        },
        {
          title: "Planifiez le travail répétitif",
          text: "Configurez des points du matin, des rapports hebdomadaires et d’autres tâches répétables. Les exécutions sans surveillance ne s’approuvent jamais elles-mêmes : leurs questions attendent dans une boîte de réception, et chaque exécution laisse une transcription à relire.",
        },
      ],
      source: { label: "Source : README d’OpenWorker sur GitHub", href: repo },
    },
    {
      kind: "text",
      id: "safety",
      title: "Comment OpenWorker vous laisse le contrôle : validations, revue et audit",
      points: [
        "Validation par défaut : les actions attendent votre accord, et un ensemble d’opérations dangereuses reste toujours entre les mains d’un humain.",
        "Des règles que vous construisez au fil du temps : une validation ponctuelle peut devenir une règle permanente ou une entrée de liste d’autorisation.",
        "Approbation automatique facultative : un modèle relecteur gère les validations, vous transmet la décision quand il a un doute et dispose d’un disjoncteur (circuit breaker).",
        "Une piste d’audit : chaque appel d’outil est enregistré avec la façon dont il a été approuvé, et l’application signale les actions où des données quittent la machine (« Leaves this Mac »).",
        "Isolation : les commandes peuvent s’exécuter dans un sandbox NVIDIA OpenShell ou dans le sandbox intégré de macOS ou de Windows.",
        "Les exécutions planifiées ne s’approuvent jamais elles-mêmes ; tout ce dont elles ont besoin de votre part attend dans une boîte de réception.",
      ],
    },
    {
      kind: "table",
      id: "vs",
      title: "OpenWorker vs OpenBot, Suparagent et Claude Cowork",
      text: [
        "Informations tirées du README de chaque projet ou des propres pages de l’éditeur, vérifiées le 13 novembre 2026, avec le nombre d’étoiles GitHub de ce jour-là. D’autres collègues IA sont comparés dans [les outils de collègues IA](/blog/ai-coworker).",
        "Guides : [OpenBot](/personal-agent/openbot), [Suparagent](/personal-agent/suparagent), [Claude Cowork](/personal-agent/claude-cowork).",
      ],
      headers: ["", "OpenWorker", "OpenBot", "Suparagent", "Claude Cowork"],
      rows: [
        ["Éditeur", "Andrew Ng (andrewyng sur GitHub)", "CopilotKit", "Anil-matcha sur GitHub", "Anthropic"],
        ["Open source", "MIT ; environ 19 050 étoiles", "Modèle d’application MIT, CopilotKit Intelligence sous licence distincte ; environ 11 652 étoiles", "Apache 2.0 ; environ 7 050 étoiles", "Non"],
        ["Où il s’exécute", "Votre ordinateur (macOS, Windows) ; un petit service cloud sert d’intermédiaire pour la connexion des connecteurs", "Application de bureau (Mac, Windows, backend Docker) ou Kubernetes ; version hébergée en accès anticipé", "Application de bureau, serveur Linux auto-hébergé ou application web hébergée", "Cloud d’Anthropic ; travail en local via Claude Desktop"],
        ["Modèles", "Votre propre clé pour OpenAI, Anthropic, Gemini, OpenRouter et d’autres, ou un modèle local", "OpenAI, Claude, Gemini ou modèles ouverts ; vos propres agents via AG-UI", "Moteurs comme Claude Code, Codex, Gemini CLI et Cursor ; aucun modèle inclus", "Modèles Claude"],
        ["Prix", "Aucun prix indiqué ; apportez votre propre modèle", "Gratuit pour les projets personnels ; Business jusqu’à $29 par utilisateur actif et par mois", "Aucun frais indiqué en auto-hébergement ; offres hébergées de $0 à $99 par mois", "Offres Claude payantes ; Pro coûte $20 par mois"],
        ["Travail récurrent", "Points, rapports et autres tâches répétables planifiés", "Routines, exécutées par un routine worker", "Routines selon un planning, par webhook ou à la demande", "Toutes les heures, chaque jour, chaque semaine ou les jours ouvrés, dans le cloud"],
        ["Validations", "Activées par défaut ; modèle relecteur facultatif", "Avant les actions ; audit dans l’édition équipe", "Ask first, Accept edits, Approve for me ou Plan only", "Manual, Auto ou Skip"],
        ["Tableau de tâches", "Non précisé", "Non précisé", "Tableau de tâches et calendrier", "Pas de tableau de tickets ; une liste de tâches et une page Scheduled"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Avec Crewmark",
      title: "Un collègue sur votre ordinateur. Des employés IA sur un tableau.",
      text: [
        "OpenWorker est un collègue IA que vous faites tourner sur votre propre machine. Crewmark transforme vos propres sessions Claude Code ou Codex en employés IA dotés d’un rôle, d’objectifs chiffrés, d’horaires de travail et d’une pulsation, chacun prenant des tickets sur un tableau partagé, pour que le travail récurrent d’ingénierie, de SEO et de marketing soit pris en charge et suivi.",
      ],
      steps: [
        { title: "Choisissez un rôle", text: "Partez des [rôles d’employés IA](/ai-employees) et fixez des objectifs chiffrés." },
        { title: "Mettez le travail sur un tableau", text: "Assignez des tickets sur le tableau partagé ; pendant ses horaires de travail, la pulsation réveille l’employé pour qu’il prenne le suivant." },
        { title: "Voyez ce qu’il sait faire", text: "Des missions, avec leur configuration, se trouvent dans [les cas d’usage de Claude Code](/use-cases/claude-code)." },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Configurer OpenWorker" },
  mid: {
    title: "Envie d’employés IA qui prennent des tickets sur un tableau ?",
    text: "Crewmark donne à vos sessions Claude Code ou Codex un rôle, des horaires de travail, une pulsation et un tableau partagé.",
    button: "Commencer",
  },
  faq: {
    title: "FAQ sur OpenWorker",
    items: [
      {
        q: "Qu’est-ce qu’OpenWorker ?",
        a: "Une application de bureau open source que son README décrit comme « un collègue IA pour votre travail quotidien » (« an AI coworker for your everyday work »), accompagnée d’un Harness SDK pour créer vos propres applications agentiques. Elle tourne sur votre machine avec votre propre clé de modèle ou un modèle local, demande une validation avant d’agir et peut exécuter des tâches selon un planning. L’application de bureau est en bêta ouverte.",
      },
      {
        q: "OpenWorker est-il créé par Andrew Ng ?",
        a: "Le dépôt est github.com/andrewyng/openworker, sur le compte GitHub d’Andrew Ng, et son fichier LICENSE désigne Andrew Ng comme titulaire des droits d’auteur. Le moteur de l’application repose sur aisuite, sa bibliothèque. Le pied de page d’openworker.com indique « © 2026 OpenWorker ».",
      },
      {
        q: "OpenWorker est-il gratuit et open source ?",
        a: "Il est open source sous licence MIT, et ni le README ni openworker.com n’indiquent de prix. Vous apportez votre propre clé de modèle, facturée par votre fournisseur, ou faites tourner un modèle local via Ollama, LM Studio, llama.cpp ou vLLM.",
      },
      {
        q: "Qu’est-ce que le Harness SDK d’OpenWorker ?",
        a: "Un SDK en TypeScript et en Rust, dans le même dépôt, pour créer vos propres applications agentiques de bureau ou web. Il prend en charge les subagents et les équipes, et les applications construites dessus peuvent tourner sur Kubernetes dans AWS, Azure ou Google Cloud.",
      },
      {
        q: "OpenWorker fonctionne-t-il sur Mac, Windows et Linux ?",
        a: "Il tourne sur macOS 12 ou ultérieur sur Apple silicon et sur Windows 10 ou 11 en x64. Les versions Windows ne sont pas encore signées, donc SmartScreen affiche un avertissement. Aucun téléchargement pour Linux n’est proposé.",
      },
      {
        q: "Quelles sont les limites d’OpenWorker ?",
        a: "L’application de bureau est en bêta ouverte, les versions Windows ne sont pas encore signées, et les mainteneurs précisent qu’ils pourraient ne pas accepter de pull requests pour des fonctionnalités déjà en développement ou hors de leurs plans.",
      },
    ],
  },
  cta: {
    title: "Gardez un collègue sur votre ordinateur. Donnez aussi un poste à vos agents de code.",
    text: "Crewmark transforme les sessions Claude Code et Codex en employés IA dotés de rôles, d’objectifs, d’horaires de travail et d’une pulsation.",
    button: "Commencer",
  },
  checked:
    "Vérifié dans le README d’OpenWorker sur GitHub et sur openworker.com le 13 novembre 2026 ; informations de comparaison tirées des propres pages de chaque produit, le même jour.",
  disclaimer:
    "Crewmark est un produit indépendant, sans lien avec Andrew Ng ni OpenWorker, et non approuvé par eux. Les noms de produits sont des marques de leurs propriétaires.",
};
