import type { GuideCopy } from "@/components/landing/guide-article";

// fr translation of /use-cases/sentry-error-triage; the English master is
// src/content/use-cases/sentry-error-triage.ts.

const docs = "https://docs.sentry.io/ai/mcp/";

const connect = `# Claude Code : ajoutez le serveur MCP hébergé de Sentry, puis connectez-vous avec OAuth
claude mcp add --transport http sentry https://mcp.sentry.dev/mcp

# Codex : via le pont mcp-remote
codex mcp add sentry -- npx -y mcp-remote@latest https://mcp.sentry.dev/mcp`;

const brief = `# Rôle : tri des erreurs
S’exécute depuis le ticket récurrent "Sentry triage", en semaine à 9:00 et 14:00.

1. Dans Sentry, liste les issues non résolues apparues ou en régression depuis la
   dernière exécution, dans l’environnement de production.
2. Pour chacune : cherche un ticket existant sur le tableau (recherche l’ID de l’issue
   Sentry). S’il y en a un, ajoute le nouveau décompte en commentaire.
3. Sinon, ouvre un ticket : titre tiré de l’erreur, utilisateurs et événements
   concernés, première et dernière occurrence, les premières frames de la stack, la version
   où elle est apparue, et ta meilleure hypothèse sur la cause, signalée comme hypothèse.
4. Priorité : Urgent si elle bloque l’inscription, le paiement ou les données ; High si elle
   touche plus de 1 % des sessions ; sinon Medium.
5. Si le correctif est petit et évident, prends-le comme ticket suivant et
   ouvre une pull request avec un test. Ne merge pas.
6. Ne résous, n’ignore ni ne supprime jamais rien toi-même dans Sentry.`;

export const copy: GuideCopy = {
  meta: {
    title: "Trier les erreurs Sentry chaque jour avec Claude Code ou Codex",
    description:
      "Faites lire les nouvelles erreurs Sentry deux fois par jour par un employé IA sur Claude Code ou Codex, qui les inscrit sur votre tableau avec la stack, l’impact et une cause probable, et ouvre des pull requests de correction pour les plus petites. La configuration du MCP Sentry et la fiche de rôle à copier.",
  },
  breadcrumb: "Tri des erreurs Sentry",
  parent: { name: "Cas d’usage", href: "/use-cases" },
  hero: {
    kicker: "Cas d’usage · Ingénierie",
    title: "Le tri des erreurs Sentry par un employé IA sur Claude Code ou Codex",
    lead: "Les nouvelles erreurs s’accumulent dans Sentry plus vite que quiconque ne les lit. Un employé IA sur votre propre Claude Code ou Codex peut consulter Sentry selon un planning, ignorer ce qui est déjà sur le tableau, créer un ticket pour chaque nouvelle erreur avec la stack trace, les utilisateurs touchés et une cause probable, et prendre lui-même les petits correctifs en ouvrant une pull request à relire. Voici comment connecter le serveur MCP de Sentry, la fiche à copier et les règles qui garantissent la sécurité.",
    cta: "Commencer",
    secondary: "Connecter Sentry",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "Ce que fait l’employé",
      points: [
        "Il lit les issues Sentry non résolues, nouvelles ou en régression depuis sa dernière exécution.",
        "Il dédoublonne par rapport à votre tableau : une erreur bruyante reçoit un commentaire, pas dix nouveaux tickets.",
        "Il crée un ticket utile : impact, première et dernière occurrence, la version où l’erreur est apparue, les premières frames de la stack et une cause probable, clairement signalée comme hypothèse.",
        "Il fixe une priorité selon les règles que vous écrivez, par exemple tout ce qui bloque l’inscription ou le paiement est urgent.",
        "Il corrige les cas évidents : une vérification de null, une clé de traduction manquante, une mauvaise redirection. Il ouvre une pull request avec un test et attend la relecture.",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Mettre en place le tri Sentry sur Claude Code ou Codex",
      steps: [
        {
          title: "Connectez le serveur MCP de Sentry",
          text: "Sentry héberge un serveur MCP sur mcp.sentry.dev avec OAuth : rien à installer, aucun token à coller. Ajoutez-le, lancez l’agent et connectez-vous à Sentry quand il le demande. Il donne à l’agent accès aux issues, erreurs, projets et analyses Seer de Sentry.",
          code: connect,
        },
        {
          title: "Copiez la fiche de rôle",
          text: "Dans CLAUDE.md pour Claude Code ou AGENTS.md pour Codex, dans le dépôt d’où viennent les erreurs, pour qu’il puisse lire le code derrière chaque frame de la stack.",
          code: brief,
        },
        {
          title: "Planifiez-le",
          text: "Faites du tri un ticket récurrent, par exemple `--repeat \"weekdays at 9:00\"`, et un second l’après-midi si votre volume d’erreurs le justifie.",
        },
        {
          title: "Relisez les correctifs",
          text: "Les pull requests de correction passent par votre relecture habituelle. Quand l’employé a un doute sur l’impact ou le responsable, il marque le ticket Needs action et pose la question.",
        },
      ],
      source: { label: "Source : documentation du serveur MCP de Sentry", href: docs },
    },
    {
      kind: "text",
      id: "rules",
      title: "Les règles qui garantissent la sécurité",
      points: [
        "Lire Sentry, écrire sur le tableau. Résoudre, ignorer ou supprimer dans Sentry reste l’affaire des humains.",
        "Production uniquement : dirigez-le vers votre environnement de production pour qu’il ne remonte pas le bruit du staging.",
        "Une hypothèse reste une hypothèse : la cause indiquée dans chaque ticket est signalée comme telle jusqu’à confirmation par quelqu’un.",
        "Pas de merge : les correctifs sont des pull requests avec un test, jamais des push directs.",
        "Données personnelles : les événements Sentry peuvent contenir des informations sur les utilisateurs ; limitez le ticket aux décomptes et aux identifiants, sans e-mails ni adresses IP.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Avec Crewmark",
      title: "Un ingénieur qui commence la journée par vos erreurs",
      text: [
        "Le tri est un ticket récurrent tout trouvé pour un ingénieur logiciel IA. Crewmark transforme votre Claude Code ou Codex en cet employé, avec des horaires de travail et une pulsation.",
      ],
      steps: [
        {
          title: "Partez du rôle",
          text: "L’[ingénieur logiciel IA](/ai-employees/software-engineer) prend des tickets sur un tableau et ouvre des pull requests.",
        },
        {
          title: "Ajoutez le tri comme ticket récurrent",
          text: "Il lance le tri à l’échéance, puis traite les tickets qu’il a créés.",
        },
        {
          title: "D’autres tâches d’ingénierie",
          text: "Voir [Claude Code pour l’ingénierie](/for/engineering) et la [revue de code IA sur chaque pull request](/use-cases/pr-review).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Mettre en place le tri des erreurs Sentry sur Claude Code ou Codex" },
  mid: {
    title: "Vous voulez les nouvelles erreurs enregistrées et les petites corrigées avant le stand-up ?",
    text: "Un ingénieur Crewmark sur votre Claude Code ou Codex trie Sentry selon un planning et ouvre des pull requests de correction.",
    button: "Commencer",
  },
  faq: {
    title: "FAQ",
    items: [
      {
        q: "Comment connecter Sentry à Claude Code ?",
        a: "Lancez `claude mcp add --transport http sentry https://mcp.sentry.dev/mcp`, démarrez Claude Code et connectez-vous à Sentry avec OAuth quand il le demande. Sentry héberge le serveur, il n’y a donc rien à installer.",
      },
      {
        q: "Le serveur MCP de Sentry fonctionne-t-il avec Codex ?",
        a: "Oui, via le pont mcp-remote : `codex mcp add sentry -- npx -y mcp-remote@latest https://mcp.sentry.dev/mcp`.",
      },
      {
        q: "L’agent peut-il résoudre des issues Sentry ?",
        a: "On peut l’y autoriser, mais nous le déconseillons : laissez-le créer des tickets et corriger, et gardez la résolution et l’ignorance des issues entre les mains des humains, pour que rien ne soit masqué par erreur.",
      },
      {
        q: "À quelle fréquence le tri doit-il tourner ?",
        a: "Deux fois par jour en semaine suffit à la plupart des équipes ; ajoutez une exécution horaire pendant un lancement. Chaque exécution consomme l’usage de votre abonnement d’agent, donc ne le lancez pas toutes les quelques minutes.",
      },
      {
        q: "Où vont les tickets ?",
        a: "Là où votre équipe suit son travail. Avec Crewmark, ils vont sur le tableau à partir duquel l’employé travaille ; sinon, utilisez le serveur MCP ou la CLI de votre outil de suivi, comme ceux de Linear ou de GitHub.",
      },
    ],
  },
  cta: {
    title: "Les erreurs enregistrées, les petites corrigées, avant même votre café.",
    text: "Crewmark transforme les sessions Claude Code et Codex en employés IA avec des rôles, des objectifs, des horaires de travail et une pulsation.",
    button: "Commencer",
  },
  checked: "Vérifié dans la documentation du serveur MCP de Sentry le 10 novembre 2026.",
  disclaimer:
    "Crewmark est un produit indépendant, sans lien avec Sentry, Anthropic ni OpenAI, et non approuvé par eux. Les noms de produits sont des marques de leurs propriétaires.",
};
