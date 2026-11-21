import type { GuideCopy } from "@/components/landing/guide-article";

// fr translation of /blog/gemini-4-hydrogen; the English master is src/content/blog/gemini-4-hydrogen.ts.

const blog = "https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-hydrogen/";

const api = `# Gemini API : code du modèle gemini-4-hydrogen
curl "https://generativelanguage.googleapis.com/v1beta/models/gemini-4-hydrogen:generateContent" \\
  -H "x-goog-api-key: $GEMINI_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"contents": [{"parts": [{"text": "Trouve et corrige le test en échec dans ce diff"}]}]}'`;

export const copy: GuideCopy = {
  meta: {
    title: "Gemini 4 Hydrogen : prix, benchmarks, vs Argon et 3.8 Flash",
    description:
      "Gemini 4 Hydrogen, modèle rapide de Google pour le code : $1.50 / $7.50 par million de tokens, contexte de 1M, benchmarks, vs Argon, Carbon, 3.8 Flash et Claude.",
  },
  breadcrumb: "Gemini 4 Hydrogen",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-13" },
  hero: {
    kicker: "Blog · Nouveau modèle",
    title: "Gemini 4 Hydrogen : prix, benchmarks et comparaisons",
    lead: "Google a sorti Gemini 4 Hydrogen le 12 novembre 2026 : un modèle Gemini 4 rapide pour le code au quotidien et le travail agentique, facturé $1.50 par million de tokens en entrée et $7.50 par million de tokens en sortie sur toute sa fenêtre de contexte de 1 million de tokens. Il se place sous Gemini 4 Carbon et Argon, que Google réserve au raisonnement approfondi sur des tâches longues, et remplace Gemini 3.8 Flash comme le modèle vers lequel la plupart des gens se tourneront. Voici les nouveautés, les chiffres publiés par Google, la comparaison de son prix avec Argon, Carbon, 3.8 Flash et Claude, et où l’utiliser.",
    cta: "Commencer",
    secondary: "Voir les prix",
    secondaryHref: "#pricing",
  },
  sections: [
    {
      kind: "table",
      id: "at-a-glance",
      title: "Gemini 4 Hydrogen en un coup d’œil",
      headers: ["", "Gemini 4 Hydrogen"],
      rows: [
        ["Sortie", "12 novembre 2026, par Google"],
        ["Code du modèle", "`gemini-4-hydrogen`"],
        ["Conçu pour", "L’exécution rapide dans les workflows de code et les workflows agentiques"],
        ["Contexte", "1 million de tokens en entrée, jusqu’à 1 million de tokens en sortie"],
        ["Niveaux de réflexion", "Low, medium, high (par défaut) et un nouveau niveau xhigh"],
        ["Prix de l’API", "$1.50 en entrée, $7.50 en sortie par million de tokens, identique sur toute la fenêtre de contexte ; une offre gratuite dans la Gemini API"],
        ["Où l’utiliser", "Gemini API, Google AI Studio, Android Studio, Gemini pour les entreprises, l’application Gemini, Google Search, et Google Antigravity pour les abonnés payants Google AI Pro et Ultra"],
      ],
    },
    {
      kind: "text",
      id: "whats-new",
      title: "Les nouveautés de Gemini 4 Hydrogen",
      points: [
        "Un modèle rapide dans la famille Gemini 4 : Google réserve Carbon et Argon au raisonnement approfondi sur des tâches longues et positionne Hydrogen sur l’exécution rapide, seul ou comme exécutant à leurs côtés.",
        "Orchestrator, dans Google Antigravity, alterne entre Carbon et Hydrogen au sein d’une même session. Selon Google, il atteint un taux de réussite proche de celui de Carbon sur Terminal-Bench 4.0 tout en consommant 24% de quota en moins et en terminant 19% plus vite.",
        "Un net progrès par rapport à Gemini 3.8 Flash, selon Google : 2,5 fois plus rapide avec le réglage par défaut high, un score Terminal-Bench 4.1 qui passe de 18.2% à 57%, et plus de cinq fois moins d’affirmations inventées.",
        "Exploration groupée des grands dépôts : il lit et fouille les fichiers en parallèle plutôt qu’un par un. Des partenaires l’ont vu tourner 2 à 2,8 fois plus vite avec 12% à 23% de tokens en moins que 3.8 Flash.",
        "Quatre niveaux de réflexion, dont un nouveau niveau xhigh : vous ne payez que le raisonnement dont la tâche a besoin.",
        "Sécurité dans le travail agentique : Google annonce jusqu’à 81% de dépassements de consigne en moins, 12 fois moins d’actions désalignées et de raccourcis dans ses évaluations d’utilisation d’outils et de code, et un taux d’honnêteté de 96.7% sur son évaluation interne d’agents.",
      ],
    },
    {
      kind: "table",
      id: "benchmarks",
      title: "Benchmarks de Gemini 4 Hydrogen",
      text: [
        "Ce sont les chiffres que Google a publiés dans son annonce ; des résultats indépendants suivront. Quand Google donne une comparaison, elle figure dans la dernière colonne.",
      ],
      headers: ["Benchmark", "Gemini 4 Hydrogen", "Comparé à"],
      rows: [
        ["Artificial Analysis Intelligence Index", "51 en high ; 54 en xhigh", "Gemini 4 Argon : 50"],
        ["Terminal-Bench 4.1", "57%", "Gemini 3.8 Flash : 18.2%"],
        ["HLE-Diamond", "58.8%", "En tête de sa catégorie"],
        ["Vals Tax Agent Bench", "52.3%", "N° 1 au classement général"],
        ["Vals Legal Research Bench", "55.8%", "N° 1 ex aequo"],
        ["Multimodal Knowledge Agent (MKA)", "53.4%", "Devant les autres modèles, selon Google"],
        ["Agents' Last Exam v1.1", "71.6%", "Devant les autres modèles, selon Google"],
        ["Agent Arena (arena.ai)", "5e", "Classement en direct"],
      ],
    },
    {
      kind: "table",
      id: "pricing",
      title: "Prix de Gemini 4 Hydrogen",
      text: [
        "Prix de la Gemini API par million de tokens, en dollars américains, d’après la page de tarifs de Google au 13 novembre 2026. Les prix de sortie incluent les tokens de réflexion. Carbon et Argon bénéficient de prix de lancement jusqu’au 30 novembre, puis leurs prix doublent ; celui de 3.8 Flash double le 1er janvier 2027. Les prix de Claude sont ceux d’Anthropic, repris de notre article sur [Claude Fable 5.2](/blog/claude-fable-5-2).",
      ],
      headers: ["Modèle", "Entrée", "Sortie", "Lots (entrée / sortie)", "Offre gratuite"],
      rows: [
        ["Gemini 4 Hydrogen", "$1.50", "$7.50", "$0.75 / $3.75", "Oui"],
        ["Gemini 4 Argon", "$2.00 jusqu’au 30 nov., puis $4.00", "$10.00 jusqu’au 30 nov., puis $20.00", "$1.00 / $5.00, puis $2.00 / $10.00", "Non"],
        ["Gemini 4 Carbon", "$2.00 jusqu’au 30 nov., puis $4.00", "$10.00 jusqu’au 30 nov., puis $20.00", "$1.00 / $5.00, puis $2.00 / $10.00", "Non"],
        ["Gemini 3.8 Flash", "$0.75 jusqu’au 31 déc., puis $1.50", "$3.75 jusqu’au 31 déc., puis $7.50", "-", "Oui"],
        ["Claude Sonnet 5.5", "$2", "$10", "$1 / $5", "-"],
        ["Claude Opus 5.5", "$4", "$20", "$2 / $10", "-"],
      ],
    },
    {
      kind: "text",
      id: "vs-argon-carbon",
      title: "Gemini 4 Hydrogen vs Argon vs Carbon",
      text: [
        "Google répartit le travail selon la profondeur de raisonnement. Carbon est son modèle de raisonnement le plus performant, pour l’ingénierie logicielle complexe, les mathématiques et les sciences poussées, et les agents autonomes en plusieurs étapes. Argon est le modèle de pointe efficient, avec des réponses plus rapides et une consommation de tokens plus faible que Carbon. Hydrogen sert au code et au travail agentique rapides du quotidien, et peut jouer le rôle d’exécutant ou de vérificateur pendant que Carbon coordonne.",
        "Côté prix, Hydrogen coûte aujourd’hui moins cher qu’Argon et Carbon, et l’écart se creusera le 1er décembre, quand leurs prix de lancement prendront fin. D’après les chiffres de Google, il devance aussi légèrement Argon sur l’Artificial Analysis Intelligence Index (51 contre 50 en high). Ni Carbon ni Argon n’ont d’offre gratuite dans la Gemini API ; Hydrogen, si.",
      ],
    },
    {
      kind: "text",
      id: "vs-flash",
      title: "Gemini 4 Hydrogen vs Gemini 3.8 Flash",
      text: [
        "Si vous utilisez 3.8 Flash, Google présente Hydrogen comme la mise à niveau : plus rapide avec son réglage par défaut, un score plus de trois fois supérieur sur Terminal-Bench 4.1 et beaucoup moins d’affirmations inventées. Il coûte deux fois plus cher par token que 3.8 Flash jusqu’au 31 décembre ; à partir du 1er janvier 2027, les deux affichent le même prix, $1.50 et $7.50. Les partenaires de Google font aussi état de 12% à 23% de tokens en moins par tâche, ce qui compense une partie de l’écart.",
      ],
    },
    {
      kind: "text",
      id: "vs-claude",
      title: "Gemini 4 Hydrogen vs Claude Sonnet 5.5 et Opus 5.5",
      text: [
        "L’annonce de Google ne compare pas Hydrogen à Claude ; voici donc les éléments qui peuvent être comparés. À $1.50 et $7.50 par million de tokens, Hydrogen est affiché moins cher que Claude Sonnet 5.5 ($2 et $10) et nettement moins cher qu’Opus 5.5 ($4 et $20), et il offre un contexte de 1 million de tokens avec jusqu’à 1 million de tokens en sortie. Claude Code et Codex font tourner les modèles de leur propre éditeur : le choix du modèle découle donc généralement de l’agent avec lequel vous travaillez. Pour comparer ces deux-là, voir [Claude Code vs Codex](/blog/claude-code-vs-codex).",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Comment utiliser Gemini 4 Hydrogen",
      steps: [
        { title: "Essayez-le dans Google AI Studio", text: "Choisissez Gemini 4 Hydrogen dans AI Studio ; il est disponible sur toutes les offres d’AI Studio, y compris l’offre gratuite." },
        { title: "Appelez-le depuis la Gemini API", text: "Utilisez le code de modèle `gemini-4-hydrogen`. Laissez la réflexion sur high, la valeur par défaut, et passez à medium ou low quand la vitesse compte plus que la profondeur.", code: api },
        { title: "Codez avec lui dans Google Antigravity", text: "Les abonnés payants Google AI Pro et Ultra y ont accès dans Antigravity, où Orchestrator peut alterner entre Carbon et Hydrogen au sein d’une même session." },
        { title: "Utilisez-le dans d’autres agents", text: "Les agents de code qui acceptent une clé Gemini API peuvent appeler `gemini-4-hydrogen` dès qu’ils proposent le modèle ; vérifiez la liste des modèles de votre agent." },
      ],
      source: { label: "Source : Google, Introducing Gemini 4 Hydrogen", href: blog },
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Avec Crewmark",
      title: "Un modèle plus rapide, c’est une moitié. L’autre, c’est un job.",
      text: [
        "Les modèles sont de plus en plus rapides et de moins en moins chers, et les agents qui les utilisent attendent toujours le prompt suivant. Crewmark transforme vos sessions d’agent de code en employés IA dotés d’un rôle, d’un objectif chiffré, d’horaires de travail et d’une pulsation, pour qu’ils prennent d’eux-mêmes l’issue suivante sur un tableau.",
      ],
      steps: [
        { title: "Choisissez un rôle", text: "Parmi les [rôles d’employés IA](/ai-employees), par exemple un [ingénieur logiciel IA](/ai-employees/software-engineer)." },
        { title: "Mettez le travail sur un tableau", text: "Assignez des issues, rendez récurrentes celles qui reviennent régulièrement, et laissez la pulsation réveiller l’employé pour qu’il prenne la suivante." },
        { title: "Voyez ce qu’il sait faire", text: "Des jobs avec la configuration et les règles de chaque agent sont décrits dans [les cas d’usage de Claude Code](/use-cases/claude-code) et [les cas d’usage de Codex](/use-cases/codex)." },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Utiliser Gemini 4 Hydrogen" },
  mid: {
    title: "Vous voulez que vos agents traitent des issues selon un planning ?",
    text: "Crewmark donne à chaque agent un rôle, une pulsation et un tableau partagé, pour qu’il prenne le job suivant de lui-même.",
    button: "Commencer",
  },
  faq: {
    title: "FAQ",
    items: [
      {
        q: "Qu’est-ce que Gemini 4 Hydrogen ?",
        a: "Le modèle Gemini 4 rapide de Google pour le code au quotidien et le travail agentique, sorti le 12 novembre 2026. Il se place sous Gemini 4 Carbon et Argon et dispose d’un contexte de 1 million de tokens avec jusqu’à 1 million de tokens en sortie.",
      },
      {
        q: "Combien coûte Gemini 4 Hydrogen ?",
        a: "Dans la Gemini API, $1.50 par million de tokens en entrée et $7.50 par million de tokens en sortie, identique sur toute la fenêtre de contexte ; en lots, $0.75 et $3.75. Il existe une offre gratuite, et il est disponible pour tout le monde dans l’application Gemini.",
      },
      {
        q: "Gemini 4 Hydrogen est-il meilleur qu’Argon ?",
        a: "Google ne les positionne pas de la même façon : Argon et Carbon pour le raisonnement approfondi sur des tâches longues, Hydrogen pour l’exécution rapide. Sur l’Artificial Analysis Intelligence Index, Google indique 51 pour Hydrogen avec son réglage par défaut et 50 pour Argon, et Hydrogen coûte moins cher.",
      },
      {
        q: "Gemini 4 Hydrogen vs 3.8 Flash : faut-il changer ?",
        a: "Selon Google, Hydrogen est 2,5 fois plus rapide avec son réglage par défaut, obtient 57% contre 18.2% sur Terminal-Bench 4.1 et produit beaucoup moins d’affirmations inventées. Il coûte deux fois plus cher par token que 3.8 Flash jusqu’au 31 décembre 2026 ; à partir du 1er janvier 2027, les deux affichent $1.50 et $7.50.",
      },
      {
        q: "Quel est le code de modèle de Gemini 4 Hydrogen ?",
        a: "`gemini-4-hydrogen`, dans la Gemini API et Google AI Studio.",
      },
      {
        q: "Où trouver la model card de Gemini 4 Hydrogen ?",
        a: "Google l’a publiée en PDF : [model card de Gemini 4 Hydrogen](https://storage.googleapis.com/deepmind-media/Model-Cards/Gemini-4-Hydrogen-Model-Card.pdf).",
      },
    ],
  },
  cta: {
    title: "Confiez aux modèles les plus récents un travail permanent.",
    text: "Crewmark transforme des sessions d’agent de code en employés IA dotés de rôles, d’objectifs, d’horaires de travail et d’une pulsation.",
    button: "Commencer",
  },
  checked: "Vérifié d’après l’annonce de Google et les pages de tarifs et de modèles de la Gemini API le 13 novembre 2026.",
  disclaimer:
    "Crewmark est un produit indépendant, non affilié à Google ni à Anthropic et non approuvé par eux. Gemini et Claude sont des marques de leurs propriétaires respectifs.",
};
