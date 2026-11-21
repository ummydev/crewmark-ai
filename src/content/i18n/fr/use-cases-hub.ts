import type { GuideCopy } from "@/components/landing/guide-article";

// fr translation of /use-cases; the English master is src/content/use-cases-hub.ts.

export const copy: GuideCopy = {
  meta: {
    title: "Cas d’usage des employés IA pour Claude Code et Codex",
    description:
      "Les tâches à confier à un employé IA sur Claude Code ou Codex, par équipe, chacune avec une fiche de rôle à copier et le planning sur lequel la faire tourner : rapports SEO quotidiens, veille concurrentielle hebdomadaire et plus encore.",
  },
  breadcrumb: "Cas d’usage",
  hero: {
    kicker: "Cas d’usage",
    title: "Cas d’usage des employés IA : les tâches à confier à Claude Code et Codex",
    lead: "Chaque cas d’usage est une tâche qu’un employé IA accomplit selon un planning : ce qu’il fait, la fiche de rôle à copier dans CLAUDE.md ou AGENTS.md, les accès nécessaires et comment la faire tourner. Ils sont regroupés selon l’équipe qui porte habituellement ce travail. Chacun fonctionne aussi comme prompt ponctuel dans Claude Code ou Codex.",
    cta: "Commencer",
    secondary: "Parcourir les cas d’usage",
    secondaryHref: "#use-cases",
  },
  sections: [
    {
      kind: "table",
      id: "teams",
      title: "Par équipe",
      headers: ["Équipe", "Ce qu’elle délègue"],
      rows: [
        ["[Marketing](/for/marketing)", "Pages et rapports SEO, suivi des concurrents, brouillons pour les réseaux sociaux, revues de funnel"],
        ["[Ingénierie](/for/engineering)", "Tri des erreurs, revue des pull requests, des tickets aux pull requests, notes de version"],
      ],
    },
    {
      kind: "table",
      id: "use-cases",
      title: "Cas d’usage",
      headers: ["Cas d’usage", "Équipe", "Fréquence"],
      rows: [
        ["[Rapport SEO quotidien](/use-cases/daily-seo-report)", "Marketing", "Quotidienne"],
        ["[Veille concurrentielle hebdomadaire](/use-cases/weekly-competitor-digest)", "Marketing", "Hebdomadaire"],
        ["[Tri des erreurs Sentry](/use-cases/sentry-error-triage)", "Ingénierie", "Deux fois par jour"],
        ["[Revue de code IA sur chaque PR](/use-cases/pr-review)", "Ingénierie", "À chaque PR"],
      ],
    },
    {
      kind: "text",
      id: "good-first-jobs",
      title: "Ce qui fait une bonne première tâche",
      points: [
        "Elle se répète : un travail quotidien ou hebdomadaire rentabilise le plus vite la configuration.",
        "Elle a une ligne d’arrivée : un rapport publié, une page mise en ligne, un récapitulatif envoyé.",
        "Elle est vérifiable : vous voyez en une minute si elle a été bien faite.",
        "Le dernier mot vous revient : la publication, les dépenses et tout ce qui est public passent par une personne.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Avec Crewmark",
      title: "Faites tourner chacune de ces tâches comme un employé IA",
      text: [
        "Crewmark transforme votre propre Claude Code ou Codex en employé IA doté d’un rôle, d’un objectif chiffré, d’horaires de travail et d’une pulsation. Les tâches récurrentes deviennent des tickets récurrents sur son tableau.",
      ],
      steps: [
        {
          title: "Choisissez un rôle",
          text: "Parmi les [rôles d’employés IA](/ai-employees).",
        },
        {
          title: "Ajoutez les tâches comme tickets",
          text: "Les tâches quotidiennes et hebdomadaires se répètent d’elles-mêmes ; l’employé prend chacune à son échéance.",
        },
        {
          title: "Répondez quand il demande",
          text: "Quand il a besoin d’une décision, il marque le ticket Needs action et pose la question ; tout le reste est sur le tableau.",
        },
      ],
    },
  ],
  mid: {
    title: "Vous voulez que ces tâches soient faites selon un planning ?",
    text: "Les employés Crewmark tournent sur votre Claude Code ou Codex et prennent la tâche suivante sur un tableau.",
    button: "Commencer",
  },
  faq: {
    title: "FAQ",
    items: [
      {
        q: "Que peut faire un employé IA ?",
        a: "Du travail récurrent qu’il peut mener avec des fichiers, le web et vos outils : rapports issus de l’analytics, pages pour votre site, suivi des concurrents, brouillons à relire, tri. Il travaille vers un objectif et vous rend compte selon un planning.",
      },
      {
        q: "Quels sont les bons cas d’usage de Claude Code hors code ?",
        a: "Le marketing est le point de départ le plus simple : pages et rapports SEO, veille concurrentielle et brouillons de contenu. Voir [Claude Code pour le marketing](/for/marketing) ; pour les tâches d’ingénierie au-delà de l’écriture de code, voir [Claude Code pour l’ingénierie](/for/engineering).",
      },
      {
        q: "Est-ce que ça fonctionne avec Codex ?",
        a: "Oui. Chaque fiche de rôle fonctionne dans AGENTS.md pour Codex comme dans CLAUDE.md pour Claude Code.",
      },
    ],
  },
  cta: {
    title: "Choisissez une tâche. Confiez-la à un employé IA.",
    text: "Crewmark transforme les sessions Claude Code et Codex en employés IA avec des rôles, des objectifs, des horaires de travail et une pulsation.",
    button: "Commencer",
  },
  checked: "Mis à jour le 10 novembre 2026.",
  disclaimer:
    "Crewmark est un produit indépendant, sans lien avec Anthropic ni OpenAI, et non approuvé par eux. Claude, Claude Code et Codex sont des marques de leurs propriétaires.",
};
