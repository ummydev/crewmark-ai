import type { GuideCopy } from "@/components/landing/guide-article";

// fr translation of /for/engineering; the English master is src/content/use-cases/for-engineering.ts.

const prompts = `Deux fois par jour, lis les erreurs Sentry nouvelles et en régression en production,
crée un ticket pour celles qui ne sont pas sur le tableau avec leur impact et une cause
probable, et ouvre une pull request pour tout correctif d’une ligne.

Relis chaque pull request marquée ready for review au regard des règles
d’AGENTS.md. Commente uniquement ; n’approuve et ne merge jamais.

Chaque vendredi, rédige les notes de version à partir des pull requests mergées
cette semaine : ce qui a changé pour les utilisateurs, regroupé par domaine, avec les liens.

Prends le prochain ticket étiqueté "good first issue", travaille dans ton propre
git worktree, et ouvre une pull request avec des tests.`;

export const copy: GuideCopy = {
  meta: {
    title: "Claude Code pour les équipes d’ingénierie : des employés IA qui livrent",
    description:
      "Comment les équipes d’ingénierie utilisent Claude Code et Codex comme employés IA : tri des erreurs, revue de code, des tickets aux pull requests, notes de version et équipes de nuit, selon un planning. Rôles, cas d’usage, prompts à copier et les règles qui laissent les merges aux humains.",
  },
  breadcrumb: "Claude Code pour l’ingénierie",
  parent: { name: "Cas d’usage", href: "/use-cases" },
  hero: {
    kicker: "Pour les équipes d’ingénierie",
    title: "Claude Code pour les équipes d’ingénierie : des employés IA qui prennent le ticket suivant",
    lead: "La plupart des équipes utilisent Claude Code ou Codex quand quelqu’un s’assoit et lui écrit un prompt. Le vrai gain, c’est de lui confier des tâches permanentes : trier les nouvelles erreurs chaque matin, relire chaque pull request prête, prendre le ticket suivant sur le tableau et ouvrir une pull request, rédiger les notes de version le vendredi. Cette page présente les tâches d’ingénierie à déléguer, comment faire tourner plusieurs agents sans qu’ils se marchent dessus, des prompts à copier et les règles qui laissent les merges aux humains.",
    cta: "Commencer",
    secondary: "Voir les tâches",
    secondaryHref: "#jobs",
  },
  sections: [
    {
      kind: "table",
      id: "jobs",
      title: "Ce que les équipes d’ingénierie confient à un employé IA",
      headers: ["Tâche", "Fréquence", "Guide"],
      rows: [
        ["Trier les nouvelles erreurs Sentry, corriger les petites", "Deux fois par jour", "[Tri des erreurs Sentry](/use-cases/sentry-error-triage)"],
        ["Relire les pull requests prêtes", "À chaque PR", "[Revue de code IA sur chaque PR](/use-cases/pr-review)"],
        ["Prendre le ticket suivant et ouvrir une pull request", "En continu", "[Ingénieur logiciel IA](/ai-employees/software-engineer)"],
        ["Traiter un backlog pendant la nuit", "Chaque nuit", "[Faire tourner Claude Code 24 h/24, 7 j/7](/blog/run-claude-code-24-7), [tâches longues Codex](/blog/codex-long-running-tasks)"],
        ["Rédiger les notes de version à partir des pull requests mergées", "Hebdomadaire", "Prompt ci-dessous"],
        ["Tenir le tableau à jour : statut, commentaires, liens", "Chaque ticket", "[Kanban Claude Code](/blog/claude-code-kanban)"],
      ],
    },
    {
      kind: "steps",
      id: "prompts",
      title: "Des prompts à copier",
      text: ["Chacun fonctionne comme ticket récurrent pour un employé IA ou comme prompt ponctuel dans Claude Code ou Codex."],
      steps: [
        {
          title: "Quatre tâches, une phrase chacune",
          text: "Remplacez les noms et les plannings par les vôtres. Les deux premières ont des guides complets avec la configuration : [tri des erreurs Sentry](/use-cases/sentry-error-triage) et [revue de code IA](/use-cases/pr-review).",
          code: prompts,
        },
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Mettre en place des ingénieurs IA sur Claude Code ou Codex",
      steps: [
        {
          title: "Écrivez les règles une fois",
          text: "Mettez les commandes de build et de test, les conventions et les règles de revue dans CLAUDE.md ou AGENTS.md, pour que chaque session parte du même point. Voir [CLAUDE.md](/blog/claude-md) et [AGENTS.md pour Codex](/blog/codex-agents-md).",
        },
        {
          title: "Donnez à chaque agent son propre worktree",
          text: "Deux agents qui modifient le même checkout s’écrasent mutuellement. Utilisez un git worktree par agent ; voir les [worktrees Claude Code](/blog/claude-code-worktree) et [faire tourner plusieurs agents Claude Code](/blog/multiple-claude-code-agents).",
        },
        {
          title: "Connectez les outils dont les tâches ont besoin",
          text: "GitHub via sa CLI, Sentry via son serveur MCP hébergé, votre outil de suivi via son serveur MCP ou sa CLI. Préférez les CLI quand les deux existent ; elles consomment moins de tokens.",
        },
        {
          title: "Laissez les merges aux humains",
          text: "Les agents ouvrent des pull requests et commentent ; les humains approuvent et mergent. Quand un employé a besoin d’une décision, il marque le ticket Needs action et pose la question.",
        },
      ],
    },
    {
      kind: "text",
      id: "expect",
      title: "À quoi s’attendre",
      points: [
        "Les tickets petits et bien décrits aboutissent le mieux : un bug avec une stack trace, un test manquant, une modification de texte sur de nombreux fichiers.",
        "Les grosses fonctionnalités ont toujours besoin d’une personne pour les découper en tickets ; les agents sont bons sur les morceaux, moins sur le plan.",
        "L’usage vient de votre propre abonnement Claude ou ChatGPT ; planifiez les tâches lourdes pendant les horaires de travail ou la nuit, dans la limite de vos quotas.",
        "La charge de revue se déplace, elle ne disparaît pas : plus de pull requests, c’est plus de relecture, d’où la présence de la revue IA dans cette liste.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Avec Crewmark",
      title: "Des ingénieurs avec un tableau, des horaires de travail et une pulsation",
      text: [
        "Crewmark transforme votre propre Claude Code ou Codex en employés IA : chacun a un rôle, un objectif chiffré, des horaires de travail et une pulsation, prend le ticket suivant sur un tableau partagé, commente au fil de son travail et ouvre des pull requests à relire.",
      ],
      steps: [
        {
          title: "Recrutez le rôle",
          text: "Partez de l’[ingénieur logiciel IA](/ai-employees/software-engineer).",
        },
        {
          title: "Ajoutez les tâches permanentes comme tickets récurrents",
          text: "Le tri, la revue et les notes de version reviennent selon leur propre planning.",
        },
        {
          title: "Voyez les autres équipes",
          text: "Les équipes marketing utilisent la même configuration : [Claude Code pour le marketing](/for/marketing). Toutes les tâches sont dans les [cas d’usage](/use-cases).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Mettre en place des ingénieurs IA sur Claude Code ou Codex" },
  mid: {
    title: "Vous voulez des ingénieurs qui prennent eux-mêmes le ticket suivant ?",
    text: "Les employés Crewmark tournent sur votre Claude Code ou Codex, se réveillent au rythme d’une pulsation et ouvrent des pull requests à relire.",
    button: "Commencer",
  },
  faq: {
    title: "FAQ",
    items: [
      {
        q: "Quels sont les meilleurs cas d’usage de Claude Code pour les équipes d’ingénierie ?",
        a: "Les tâches qui se répètent et ont une fin claire : tri des erreurs, revue des pull requests, petits bugs avec une stack trace, tests, notes de version et tenue à jour du tableau. Les grosses fonctionnalités ont toujours besoin d’une personne pour les planifier.",
      },
      {
        q: "Plusieurs agents Claude Code peuvent-ils travailler sur un même dépôt ?",
        a: "Oui, si chacun a son propre git worktree et ses propres tickets. Voir [faire tourner plusieurs agents Claude Code](/blog/multiple-claude-code-agents) et les [agent teams](/blog/claude-code-agent-teams).",
      },
      {
        q: "Est-ce que ça fonctionne avec Codex ?",
        a: "Oui. Les mêmes tâches et règles fonctionnent avec Codex ; mettez les règles dans AGENTS.md.",
      },
      {
        q: "Un agent IA doit-il merger ses propres pull requests ?",
        a: "Non. Laissez-le ouvrir des pull requests et commenter ; gardez l’approbation et le merge entre les mains des humains.",
      },
      {
        q: "Quelle différence avec Devin ou d’autres agents cloud ?",
        a: "Les agents cloud exécutent chaque tâche dans le cloud de l’éditeur au moment où vous l’assignez. Crewmark fait tourner votre propre Claude Code ou Codex sur votre abonnement, avec des tâches permanentes selon un planning. Voir les [alternatives à Devin](/blog/devin-alternatives).",
      },
    ],
  },
  cta: {
    title: "Donnez à votre équipe d’ingénierie des employés IA qui prennent le ticket suivant.",
    text: "Crewmark transforme les sessions Claude Code et Codex en employés IA avec des rôles, des objectifs, des horaires de travail et une pulsation.",
    button: "Commencer",
  },
  checked: "Rédigé le 10 novembre 2026 ; informations sur les outils vérifiées le même jour dans la documentation de Sentry, d’Anthropic et d’OpenAI.",
  disclaimer:
    "Crewmark est un produit indépendant, sans lien avec Anthropic, OpenAI, GitHub ni Sentry, et non approuvé par eux. Les noms de produits sont des marques de leurs propriétaires.",
};
