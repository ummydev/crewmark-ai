import type { GuideCopy } from "@/components/landing/guide-article";

// fr translation of /use-cases/pr-review; the English master is src/content/use-cases/pr-review.ts.

const claudeDocs = "https://code.claude.com/docs/en/code-review-local";

const commands = `# Claude Code : relire une pull request et publier des commentaires inline
/code-review 142 --comment

# Codex : demander une revue dans un commentaire de PR sur GitHub
@codex review
@codex review for issues in the database migration`;

const rules = `## Code Review Rules
- Signale les tests manquants pour les nouvelles branches dans billing/ et auth/.
- Toute migration SQL doit avoir un rollback ; dis-le si elle n’en a pas.
- Ne commente pas le formatage ; le linter s’en charge.
- N’approuve rien et ne demande aucune modification : commente uniquement.`;

export const copy: GuideCopy = {
  meta: {
    title: "Revue de code IA avec Claude Code et Codex sur chaque PR",
    description:
      "Trois façons d’obtenir une revue de code IA sur les pull requests avec Claude Code et Codex : /code-review avec des commentaires inline, @codex review et les revues automatiques, et un employé IA qui relit chaque PR du tableau. Commandes, règles de revue à copier et limites.",
  },
  breadcrumb: "Revue de code IA sur chaque PR",
  parent: { name: "Cas d’usage", href: "/use-cases" },
  hero: {
    kicker: "Cas d’usage · Ingénierie",
    title: "La revue de code IA sur chaque pull request avec Claude Code et Codex",
    lead: "Claude Code comme Codex peuvent relire une pull request et laisser des commentaires inline sur GitHub. Vous pouvez lancer une revue vous-même, la faire démarrer automatiquement, ou confier à un employé IA la tâche de relire tout ce qui arrive sur le tableau. Cette page présente les commandes pour chaque option, les règles de revue qui valent la peine d’être écrites, ce que les relecteurs ne feront pas, et comment faire de la revue une tâche permanente plutôt qu’une chose qu’on pense à demander.",
    cta: "Commencer",
    secondary: "Les commandes",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "table",
      id: "options",
      title: "Trois façons d’obtenir une revue IA sur une pull request",
      headers: ["Option", "Comment elle démarre", "Où elle tourne", "Idéale pour"],
      rows: [
        ["Claude Code `/code-review`", "Vous la lancez, avec un numéro de PR ; `--comment` publie des commentaires inline", "Votre propre session Claude Code, sur n’importe quelle offre", "Relire votre branche ou une PR avant de merger"],
        ["Claude Code Review (géré)", "Un Owner de l’organisation l’active pour des dépôts ; n’importe qui peut commenter `@claude review`", "Le service d’Anthropic", "Les équipes sur les offres Claude qui veulent des revues à la demande"],
        ["Revue de code Codex", "`@codex review` dans un commentaire de PR, ou Automatic review dans les réglages de Codex", "Le cloud d’OpenAI", "Les équipes sur les offres ChatGPT ; signale les problèmes P0 et P1 sur GitHub"],
        ["Un employé IA", "Un ticket de revue sur le tableau, ou chaque PR qui lui est assignée", "Votre propre Claude Code ou Codex, au rythme d’une pulsation", "Une tâche permanente : chaque PR relue, suivis tracés"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Relire une pull request avec Claude Code ou Codex",
      steps: [
        {
          title: "Claude Code : lancez /code-review",
          text: "Dans une session Claude Code, `/code-review` trouve les bugs dans les changements de votre branche ; passez un numéro de PR pour relire cette pull request et `--comment` pour publier les résultats sur GitHub sous forme de commentaires inline. `--fix` les applique plutôt à votre copie de travail. `/review` est un alias.",
          code: commands,
        },
        {
          title: "Codex : mentionnez @codex review",
          text: "Dans un commentaire de pull request, écrivez `@codex review` ; Codex réagit avec 👀 et publie une revue. Ajoutez un point d’attention à la suite si vous en voulez un. Pour des revues sans avoir à demander, activez Automatic review dans les réglages de Codex et choisissez le déclencheur.",
        },
        {
          title: "Écrivez vos règles de revue",
          text: "Codex lit une section `## Code Review Rules` dans l’AGENTS.md le plus proche du code. Pour Claude Code, mettez les mêmes règles dans CLAUDE.md. Les règles rendent les revues cohérentes et les écartent des sujets que votre linter couvre déjà.",
          code: rules,
        },
      ],
      source: { label: "Source : documentation Claude Code, revue locale avec /code-review", href: claudeDocs },
    },
    {
      kind: "text",
      id: "limits",
      title: "Ce que la revue IA ne fera pas",
      points: [
        "Approuver ou bloquer : le Code Review géré de Claude n’approuve ni ne bloque jamais une pull request, et une bonne fiche de revue demande à un employé de se contenter de commenter.",
        "Remplacer la personne responsable du changement : elle repère les bugs et les tests manquants ; les choix produit et design restent aux humains.",
        "Tout voir : Codex sur GitHub ne signale que les problèmes P0 et P1 pour garder des commentaires ciblés. Demandez un point d’attention précis quand vous en avez besoin.",
        "Ne rien coûter : les revues consomment l’usage de votre abonnement. Lancez-les à la demande, ou au passage en ready for review, plutôt qu’à chaque push.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Avec Crewmark",
      title: "Faites de la revue le travail de quelqu’un",
      text: [
        "Les commandes relisent quand quelqu’un pense à les lancer. Un employé IA relit parce que c’est son travail : Crewmark transforme votre Claude Code ou Codex en ingénieur qui se réveille au rythme d’une pulsation, récupère les pull requests en attente de revue et les commente.",
      ],
      steps: [
        {
          title: "Partez du rôle",
          text: "L’[ingénieur logiciel IA](/ai-employees/software-engineer), avec vos règles de revue dans sa fiche de poste.",
        },
        {
          title: "Dirigez les revues vers le tableau",
          text: "Assignez-lui des tickets de revue, ou ajoutez un ticket récurrent pour relire chaque pull request ouverte marquée ready.",
        },
        {
          title: "D’autres tâches d’ingénierie",
          text: "Voir [Claude Code pour l’ingénierie](/for/engineering) et le [tri des erreurs Sentry](/use-cases/sentry-error-triage).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Relire une pull request avec Claude Code ou Codex" },
  mid: {
    title: "Vous voulez que chaque pull request soit relue sans avoir à demander ?",
    text: "Un ingénieur Crewmark sur votre Claude Code ou Codex relit ce qui attend, au rythme d’une pulsation.",
    button: "Commencer",
  },
  faq: {
    title: "FAQ",
    items: [
      {
        q: "Comment relire une pull request avec Claude Code ?",
        a: "Lancez `/code-review <PR number> --comment` dans une session Claude Code pour publier les résultats sous forme de commentaires inline sur GitHub. Sans `--comment`, il rend compte dans la session ; `--fix` applique les correctifs en local.",
      },
      {
        q: "/review est-il la même chose que /code-review dans Claude Code ?",
        a: "La documentation de Claude Code présente `/review` comme un alias de `/code-review`.",
      },
      {
        q: "Comment faire relire une pull request par Codex ?",
        a: "Commentez `@codex review` sur la pull request, ou activez Automatic review dans les réglages de Codex pour que les revues démarrent sur le déclencheur que vous choisissez. La revue de code doit être activée pour le dépôt.",
      },
      {
        q: "Peut-on donner au relecteur IA les règles de notre équipe ?",
        a: "Oui. Codex lit une section `## Code Review Rules` dans AGENTS.md ; pour Claude Code, mettez les mêmes règles dans CLAUDE.md.",
      },
      {
        q: "L’IA va-t-elle approuver ou merger des pull requests ?",
        a: "Le Code Review géré de Claude n’approuve ni ne bloque jamais, et le merge doit rester entre les mains des humains. La fiche de poste d’un employé IA doit lui demander de se contenter de commenter.",
      },
    ],
  },
  cta: {
    title: "Chaque pull request relue, sans que personne ait à y penser.",
    text: "Crewmark transforme les sessions Claude Code et Codex en employés IA avec des rôles, des objectifs, des horaires de travail et une pulsation.",
    button: "Commencer",
  },
  checked: "Vérifié dans la documentation de revue de code de Claude Code et la documentation de revue de code Codex d’OpenAI le 10 novembre 2026.",
  disclaimer:
    "Crewmark est un produit indépendant, sans lien avec Anthropic, OpenAI ni GitHub, et non approuvé par eux. Les noms de produits sont des marques de leurs propriétaires.",
};
