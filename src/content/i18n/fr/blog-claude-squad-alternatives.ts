import type { GuideCopy } from "@/components/landing/guide-article";

// French translation of /blog/claude-squad-alternatives; the English master is src/content/blog/claude-squad-alternatives.ts.

const repo = "https://github.com/smtg-ai/claude-squad";

const usage = `# Claude Squad: Claude Code by default, or another agent with -p
cs
cs -p "codex"

# Claude Code on its own: one worktree and branch per session
claude --worktree fix-login
claude --worktree add-billing`;

export const copy: GuideCopy = {
  meta: {
    title: "Alternatives à Claude Squad (et vs Conductor) | Crewmark AI",
    description:
      "Ce que fait Claude Squad, ses limites (tmux uniquement, pas de Windows, vous lancez chaque tâche) et les alternatives pour faire tourner plusieurs agents Claude Code ou Codex : les worktrees de Claude Code, Paradev, Kanban Code, Conductor et Crewmark.",
  },
  breadcrumb: "Alternatives à Claude Squad",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-07" },
  hero: {
    kicker: "Blog · Agents de codage IA",
    title: "Alternatives à Claude Squad : d’autres façons de faire tourner plusieurs agents de codage à la fois",
    lead: "Claude Squad est une application de terminal open source (AGPL-3.0) pour faire tourner plusieurs agents de codage côte à côte : chaque tâche a sa propre session tmux et son propre worktree git, et vous relisez les modifications avant de pousser. C’est très bien si vous vivez dans le terminal sous macOS ou Linux. On cherche une alternative quand on veut une application graphique, qu’on a besoin de Windows ou qu’on veut que les agents prennent le travail sans devoir les lancer un par un. Ce guide compare les options, y compris Claude Squad vs Conductor.",
    cta: "Commencer",
    secondary: "Comparer les alternatives",
    secondaryHref: "#alternatives",
  },
  sections: [
    {
      kind: "text",
      title: "Ce que Claude Squad fait bien, et où il s’arrête",
      text: [
        "La dernière version de Claude Squad est la v1.0.20, du 20 août 2026, et le projet est toujours maintenu. Il lance Claude Code par défaut et d’autres agents de terminal avec `-p`, comme Codex ou Aider.",
      ],
      points: [
        "Point fort : une session tmux et un worktree git par tâche, donc les agents ne modifient jamais les mêmes fichiers.",
        "Point fort : vous relisez le diff de chaque instance et faites un checkout de sa branche avant de pousser.",
        "Point fort : un mode expérimental `-y` (auto-yes) accepte les prompts pour que les tâches se terminent en arrière-plan.",
        "Limite : il nécessite tmux et la GitHub CLI ; le README ne mentionne pas Windows, où tmux implique de passer par WSL.",
        "Limite : c’est une interface de terminal. Pas de tableau, pas de vue partagée pour une équipe, et c’est vous qui lancez chaque tâche.",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Comment faire tourner plusieurs agents en parallèle, avec ou sans Claude Squad",
      steps: [
        {
          title: "Donnez à chaque tâche son propre worktree",
          text: "C’est le cœur de Claude Squad, et Claude Code le fait désormais lui-même : `claude --worktree <name>` lance une session sur sa propre branche et son propre checkout. Voir le [guide des worktrees Claude Code](/blog/claude-code-worktree).",
          code: usage,
        },
        {
          title: "Choisissez comment les surveiller",
          text: "Une liste dans le terminal (Claude Squad), une application desktop (Paradev, ou Conductor tant qu’il existe) ou un tableau kanban de sessions (Kanban Code). Voir [les tableaux kanban pour Claude Code](/blog/claude-code-kanban).",
        },
        {
          title: "Décidez qui lance la tâche suivante",
          text: "Dans tous ces outils, c’est vous qui lancez chaque session. Si vous voulez que les agents prennent eux-mêmes l’issue suivante, donnez-leur un planning ou une pulsation ; voir [comment rendre Claude Code proactif](/proactive-claude-code).",
        },
        {
          title: "Relisez avant de merger",
          text: "Quel que soit l’outil qui fait tourner les agents, laissez le merge à une personne : lisez chaque diff, lancez les vérifications, puis mergez.",
        },
      ],
      source: { label: "Source : README de Claude Squad", href: repo },
    },
    {
      kind: "table",
      id: "alternatives",
      title: "Les alternatives à Claude Squad comparées",
      text: ["Informations tirées du site ou du dépôt de chaque projet, vérifiées en novembre 2026."],
      headers: ["", "Interface", "Agents", "Plateformes", "Qui lance les tâches", "Licence"],
      rows: [
        ["Claude Squad", "Interface de terminal (tmux)", "Claude Code, Codex, Gemini, Aider", "Nécessite tmux et gh ; Windows via WSL", "Vous", "AGPL-3.0"],
        ["Claude Code seul", "`claude --worktree`, sessions parallèles dans l’application desktop", "Claude Code", "macOS, Windows, Linux", "Vous (ou un planning)", "Commercial (Anthropic)"],
        ["Paradev (anciennement Superset)", "Application desktop, un worktree par tâche ; automatisations", "Claude, Codex, Cursor Agent, OpenCode et tout agent en CLI", "macOS ; Linux expérimental ; pas encore Windows", "Vous, ou une automatisation", "MIT"],
        ["Kanban Code", "Tableau kanban de sessions Claude Code", "Claude Code", "Application macOS 26, application Windows", "Vous", "Apache 2.0"],
        ["Conductor", "Application Mac pour agents en parallèle ; rejoint Meta, le cloud s’arrête le 20 novembre 2026", "Claude Code, Codex, Cursor, OpenCode", "macOS", "Vous", "Commercial"],
        ["Crewmark", "Tableau hébergé avec des employés IA qui se réveillent à chaque pulsation", "Claude Code, Codex, DeepSeek Harness, OpenCode", "Tableau web ; daemon sous macOS, Windows, Linux", "L’employé prend l’issue suivante", "Commercial"],
      ],
    },
    {
      kind: "text",
      title: "Claude Squad vs Conductor",
      text: [
        "Les deux font tourner plusieurs agents dans des worktrees parallèles. Claude Squad est une application de terminal gratuite et open source ; Conductor était une application Mac soignée, avec un flux de relecture et des espaces de travail dans le cloud. Conductor [rejoint Meta](/blog/conductor-alternatives) : les nouvelles inscriptions sont fermées, son cloud s’arrête le 20 novembre 2026 et l’application locale ne reçoit des mises à jour que jusqu’au début de 2027. Si vous deviez choisir entre les deux aujourd’hui, Claude Squad est celui qui est encore développé.",
      ],
    },
    {
      kind: "text",
      title: "Quelle alternative à Claude Squad vous convient",
      points: [
        "Vous n’utilisez que Claude Code : essayez son option intégrée `--worktree` et les sessions parallèles de l’application desktop avant d’ajouter un outil.",
        "Vous voulez une application desktop pour de nombreux agents sur Mac : Paradev.",
        "Vous voulez voir les sessions sous forme de cartes : Kanban Code, ou lisez [les tableaux kanban pour Claude Code](/blog/claude-code-kanban).",
        "Vous êtes sous Windows : la CLI et l’application desktop de Claude Code tournent nativement ; Claude Squad nécessite WSL.",
        "Vous voulez que les agents continuent de travailler sans que vous lanciez chaque tâche, avec un tableau partagé par votre équipe : Crewmark (ci-dessous). Voir aussi [plusieurs agents Claude Code](/blog/multiple-claude-code-agents).",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Avec Crewmark",
      title: "D’une escouade que vous pilotez à une équipe qui travaille seule",
      text: [
        "Claude Squad rend les agents parallèles faciles à lancer, mais chacun attend que vous le démarriez. Crewmark transforme une session Claude Code, Codex, DeepSeek Harness ou OpenCode en employé IA avec un rôle, un objectif et des horaires de travail. Il se réveille à chaque pulsation, prend l’issue suivante sur un tableau partagé, travaille dans son propre checkout et vous écrit quand il a besoin d’une décision, avec l’abonnement que vous payez déjà.",
      ],
      steps: [
        {
          title: "Connectez votre dépôt et votre agent",
          text: "Lancez la commande d’installation dans le projet. Plusieurs employés peuvent partager un dépôt, chacun dans son propre checkout.",
        },
        {
          title: "Donnez un rôle à chacun",
          text: "Un ingénieur, un relecteur, un rédacteur SEO, chacun avec un objectif. Voir [les rôles d’employés IA](/ai-employees).",
        },
        {
          title: "Remplissez le tableau et relisez",
          text: "Toutes les 15, 30 ou 60 minutes pendant les horaires de travail, chaque employé prend l’issue suivante ; vous relisez les pull requests et répondez aux questions.",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Faire tourner plusieurs agents de codage en parallèle" },
  mid: {
    title: "Marre de lancer chaque agent vous-même ?",
    text: "Les employés IA de Crewmark prennent l’issue suivante à chaque pulsation, avec l’abonnement Claude Code ou Codex que vous payez déjà.",
    button: "Commencer",
  },
  faq: {
    title: "FAQ sur Claude Squad",
    items: [
      {
        q: "Qu’est-ce que Claude Squad ?",
        a: "Une application de terminal open source (AGPL-3.0) de smtg-ai qui fait tourner plusieurs agents de codage à la fois, chacun dans sa propre session tmux et son propre worktree git, pour que vous puissiez relire chaque modification avant de pousser.",
      },
      {
        q: "Claude Squad fonctionne-t-il avec Codex ?",
        a: "Oui. Lancez-le avec `cs -p \"codex\"` après avoir configuré votre clé d’API OpenAI. Il lance aussi Gemini et Aider, et Claude Code par défaut.",
      },
      {
        q: "Claude Squad fonctionne-t-il sous Windows ?",
        a: "Son README ne mentionne pas Windows et il nécessite tmux, donc sous Windows il faudrait le lancer dans WSL. L’option `--worktree` de Claude Code et son application desktop tournent nativement sous Windows.",
      },
      {
        q: "Claude Squad est-il toujours maintenu ?",
        a: "Oui. Sa dernière version est la v1.0.20, du 20 août 2026.",
      },
      {
        q: "Claude Squad ou Conductor ?",
        a: "Conductor rejoint Meta et ferme progressivement, avec un cloud qui s’arrête le 20 novembre 2026. Claude Squad est open source et toujours développé.",
      },
      {
        q: "Ai-je encore besoin de Claude Squad maintenant que Claude Code a des worktrees ?",
        a: "Pas pour l’isolation seule : `claude --worktree` donne à chaque session sa propre branche. Claude Squad reste utile si vous voulez une seule vue dans le terminal pour gérer de nombreuses sessions et des agents autres que Claude Code.",
      },
    ],
  },
  cta: {
    title: "Dirigez une équipe, pas seulement une escouade.",
    text: "Crewmark transforme les sessions Claude Code, Codex, DeepSeek Harness et OpenCode en employés IA avec des rôles, des objectifs, des horaires de travail et une pulsation.",
    button: "Commencer",
  },
  checked: "Vérifié dans le README et les versions de Claude Squad, ainsi que sur le site ou le dépôt de chaque alternative, le 7 novembre 2026.",
  disclaimer:
    "Crewmark est un produit indépendant, sans lien avec smtg-ai, Claude Squad, Paradev, Kanban Code, Conductor, Anthropic ou OpenAI, ni approuvé par eux. Les noms de produits sont des marques de leurs propriétaires.",
};
