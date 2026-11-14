import type { GuideCopy } from "@/components/landing/guide-article";

// French translation of /blog/multiple-claude-code-agents; the English master is
// src/content/blog/multiple-claude-code-agents.ts.

const subagent = `---
name: code-reviewer
description: Reviews code for quality and best practices
tools: Read, Glob, Grep
model: sonnet
---

You are a code reviewer. When invoked, analyze the code and give
specific, actionable feedback on quality, security and best practices.`;

export const copy: GuideCopy = {
  meta: {
    title: "Plusieurs agents Claude Code : subagents, worktrees",
    description:
      "Faire tourner plusieurs agents Claude Code à la fois : subagents, sessions parallèles en worktrees git, sessions --bg et agent teams, sans conflits d’édition.",
  },
  breadcrumb: "Plusieurs agents Claude Code",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-02" },
  hero: {
    kicker: "Blog · Claude Code",
    title: "Comment faire tourner plusieurs agents Claude Code à la fois",
    lead: "Claude Code peut travailler sur plusieurs choses en même temps, de quatre façons différentes : des sous-agents (subagents) dans une seule conversation, des sessions distinctes chacune dans son propre worktree git, des sessions en arrière-plan lancées avec --bg, et les agent teams expérimentales, dont les membres s’envoient des messages. Ce guide montre comment configurer chacune, laquelle choisir, et comment éviter que des agents en parallèle écrasent le travail les uns des autres.",
    cta: "Commencer",
    secondary: "Aller aux worktrees",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "table",
      title: "Quatre façons de faire tourner des agents Claude Code en parallèle",
      headers: ["", "Ce qui tourne en parallèle", "Fichiers séparés ?", "Idéal pour"],
      rows: [
        ["Subagents", "Des workers dans une seule conversation, chacun avec son propre contexte", "Non, sauf avec `isolation: worktree`", "Recherches, revues et tâches annexes qui rendent compte"],
        ["Sessions en worktree", "Des sessions complètes, chacune dans son propre worktree git", "Oui, une branche chacune", "Plusieurs fonctionnalités ou correctifs à la fois"],
        ["Sessions en arrière-plan", "Des sessions lancées avec `claude --bg`, gérées dans l’agent view", "Oui, un worktree chacune par défaut", "Lancer des tâches maintenant, vérifier plus tard"],
        ["Agent teams", "Une session principale plus des coéquipiers qui partagent une liste de tâches", "Non : répartissez les fichiers entre coéquipiers", "Un travail où les agents doivent se parler"],
      ],
    },
    {
      kind: "steps",
      title: "Subagents : des assistants en parallèle dans une seule session",
      text: [
        "Un subagent a sa propre fenêtre de contexte, son propre prompt système et ses propres outils. Il ne voit pas votre conversation, et seul son résumé revient, ce qui garde le contexte de la session principale léger. Claude Code en fournit de base, comme Explore (lecture seule) et Plan, et vous pouvez ajouter les vôtres.",
      ],
      steps: [
        {
          title: "Définissez un subagent",
          text: "Créez un fichier Markdown dans `.claude/agents/` (partagé avec le projet) ou `~/.claude/agents/` (pour vous seul). Seuls `name` et `description` sont obligatoires ; `tools` limite ce qu’il peut utiliser et `model` choisit le modèle.",
          code: subagent,
        },
        {
          title: "Laissez Claude en lancer plusieurs à la fois",
          text: "Demandez le travail en parallèle, par exemple « relis les modules auth, billing et search en parallèle ». Les subagents que Claude crée démarrent en arrière-plan par défaut, jusqu’à 20 à la fois, et rendent compte quand ils ont fini. Tapez `/tasks` pour les voir.",
        },
        {
          title: "Donnez leur propre worktree aux subagents qui modifient des fichiers",
          text: "Ajoutez `isolation: worktree` au frontmatter du subagent, ou demandez à Claude d’utiliser des worktrees pour ses agents. Chacun modifie alors une copie temporaire du dépôt, supprimée s’il n’a fait aucune modification.",
        },
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Lancer des sessions Claude Code en parallèle dans des worktrees git",
      text: [
        "Pour toutes les options, les réglages et les solutions aux problèmes, consultez le [guide complet des worktrees Claude Code](/blog/claude-code-worktree).",
      ],
      steps: [
        {
          title: "Ignorez le dossier des worktrees",
          text: "Claude Code crée les worktrees dans `.claude/worktrees/` à la racine du dépôt. Le dépôt doit contenir au moins un commit.",
          code: 'echo ".claude/worktrees/" >> .gitignore',
        },
        {
          title: "Lancez une session par tâche",
          text: "Dans chaque terminal, lancez `claude --worktree` (ou `-w`) avec un nom différent. Chacune obtient son propre dossier et une branche nommée `worktree-<name>`, créée à partir de la branche par défaut.",
          code: "# terminal 1\nclaude --worktree feature-auth\n\n# terminal 2\nclaude --worktree bugfix-login",
        },
        {
          title: "Copiez les fichiers non suivis dont vous avez besoin",
          text: "Un nouveau worktree ne contient que les fichiers suivis. Listez des fichiers comme `.env` dans un fichier `.worktreeinclude` (syntaxe gitignore) et Claude Code les y copie.",
          code: ".env\n.env.local",
        },
        {
          title: "Fusionnez et faites le ménage",
          text: "À la fin d’une session, un worktree sans modifications est supprimé avec sa branche ; s’il contient des modifications, Claude Code demande s’il faut le garder. Fusionnez les branches comme n’importe quelle autre. Les exécutions headless `-p` ne posent pas la question : supprimez-les avec `git worktree remove`.",
        },
        {
          title: "Ou utilisez l’app de bureau",
          text: "Appuyez sur Cmd+N (Ctrl+N sous Windows) pour une nouvelle session et activez Worktree avant de la démarrer ; l’option est désactivée par défaut. Les sessions peuvent s’afficher côte à côte en vue partagée.",
        },
      ],
      source: { label: "Source : documentation d’Anthropic sur les worktrees", href: "https://code.claude.com/docs/en/worktrees" },
    },
    {
      kind: "text",
      title: "Sessions en arrière-plan avec --bg et agent view",
      text: [
        "`claude --bg \"<prompt>\"` lance une session en arrière-plan et rend la main immédiatement : vous pouvez en lancer plusieurs à la suite. Chacune passe dans son propre worktree avant de modifier quoi que ce soit. `claude agents` les liste ; `claude logs <id>`, `claude attach <id>` et `claude stop <id>` gèrent une session.",
        "Elles continuent après la fermeture du terminal, mais pas après l’extinction de l’ordinateur. Agent view est en research preview. Pour en savoir plus sur les exécutions sans surveillance, voir [comment lancer des agents Claude Code en arrière-plan](/blog/claude-code-background-agents).",
      ],
    },
    {
      kind: "text",
      title: "Agent teams : des agents qui se parlent",
      text: [
        "Les agent teams sont expérimentales et désactivées par défaut. Activez-les avec `CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1` dans votre shell ou dans le bloc `env` de settings.json, puis demandez à Claude de « créer trois coéquipiers » pour une tâche. Les coéquipiers partagent une liste de tâches et s’envoient des messages ; ils s’affichent dans le terminal, ou dans des panneaux séparés avec tmux ou iTerm2.",
      ],
      points: [
        "Sessions interactives uniquement : `-p` et l’Agent SDK ne créent pas de coéquipiers.",
        "Une équipe par session, pas d’équipes imbriquées, et les coéquipiers in-process ne sont pas restaurés par `/resume`.",
        "Les coéquipiers partagent une seule copie de travail : donnez à chacun un ensemble de fichiers différent.",
        "Elles coûtent bien plus cher : selon la documentation d’Anthropic, une équipe consomme environ 7 fois plus de tokens qu’une session seule quand les coéquipiers tournent en plan mode.",
      ],
    },
    {
      kind: "text",
      title: "Éviter que des agents en parallèle s’écrasent mutuellement",
      points: [
        "Si deux agents risquent de toucher les mêmes fichiers, donnez à chacun son propre worktree. Une session dans un worktree ne peut pas modifier la copie de travail principale, et ses subagents non plus.",
        "Dans une agent team, répartissez le travail par fichiers : deux coéquipiers qui modifient le même fichier s’écrasent mutuellement.",
        "Chaque subagent et chaque session puisent dans les mêmes limites d’utilisation : en faire tourner plusieurs multiplie la consommation. Utilisez `model: haiku` pour les subagents simples.",
        "Des agents qui lancent les mêmes tests ou le même serveur de développement peuvent entrer en conflit sur les ports ; donnez à chacun son propre port.",
      ],
    },
    {
      kind: "steps",
      kicker: "Avec Crewmark",
      title: "Faites de vos agents en parallèle une équipe avec des postes",
      text: [
        "Les worktrees et les agent teams découpent une tâche que vous surveillez. Crewmark fait tourner plusieurs sessions Claude Code ou Codex comme des employés, chacun avec son rôle, ses objectifs et ses horaires de travail, et leur confie du travail sur un seul tableau.",
      ],
      steps: [
        {
          title: "Un employé par rôle",
          text: "Un spécialiste SEO, un ingénieur logiciel et un designer UI vivent chacun dans leur propre conversation, avec leurs propres instructions et leur propre objectif.",
        },
        {
          title: "Un seul tableau pour tous",
          text: "Assignez les tickets à l’employé le plus adapté. Chacun se réveille à sa pulsation, prend son ticket suivant et commente au fil de l’eau : vous voyez qui fait quoi.",
        },
        {
          title: "Ils vous sollicitent, vous, pas les uns les autres",
          text: "Quand un employé a besoin d’une relecture ou d’une autorisation, il vous écrit et passe à autre chose. Lisez [ce qu’est un employé IA](/ai-employees).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Lancer des sessions Claude Code en parallèle dans des worktrees git" },
  mid: {
    title: "Vous faites tourner plusieurs agents chaque jour ?",
    text: "Crewmark donne à chaque session Claude Code un rôle, un objectif et des horaires de travail, et réunit tout leur travail sur un seul tableau.",
    button: "Commencer",
  },
  faq: {
    title: "FAQ : plusieurs agents Claude Code",
    items: [
      {
        q: "Puis-je faire tourner plusieurs agents Claude Code en même temps ?",
        a: "Oui. Claude peut lancer des subagents en parallèle dans une seule session ; vous pouvez faire tourner plusieurs sessions dans des worktrees git séparés avec `claude --worktree`, lancer des sessions en arrière-plan avec `claude --bg`, ou essayer les agent teams expérimentales.",
      },
      {
        q: "Quelle est la différence entre les subagents et les agent teams ?",
        a: "Les subagents accomplissent une tâche et renvoient un résumé à la session qui les a lancés. Les agent teams sont des instances Claude Code distinctes qui partagent une liste de tâches et s’envoient directement des messages ; elles sont expérimentales et consomment plus de tokens.",
      },
      {
        q: "Combien de subagents peuvent tourner en même temps ?",
        a: "Jusqu’à 20 à la fois par défaut. `CLAUDE_CODE_MAX_CONCURRENT_SUBAGENTS` modifie cette limite. Les subagents peuvent aussi lancer les leurs, jusqu’à trois niveaux de profondeur par défaut.",
      },
      {
        q: "Comment empêcher des agents en parallèle de modifier les mêmes fichiers ?",
        a: "Placez chacun dans son propre worktree git : `claude --worktree <name>` pour les sessions, `isolation: worktree` pour les subagents. Les sessions en arrière-plan lancées avec `--bg` en obtiennent un automatiquement. Les agent teams partagent une copie de travail : attribuez des fichiers à chaque coéquipier.",
      },
      {
        q: "Faire tourner plusieurs agents coûte-t-il plus cher ?",
        a: "Oui. Chaque subagent et chaque session envoie ses propres requêtes, qui comptent dans les mêmes limites d’utilisation : en faire tourner plusieurs à la fois multiplie la consommation.",
      },
      {
        q: "Où sont stockés les worktrees de Claude Code ?",
        a: "Dans `.claude/worktrees/<name>/` à la racine du dépôt, sur une branche nommée `worktree-<name>`. Ajoutez ce dossier à `.gitignore`.",
      },
    ],
  },
  cta: {
    title: "Faites tourner une équipe d’agents Claude Code avec de vrais postes.",
    text: "Crewmark transforme des sessions Claude Code et Codex en employés IA dotés de rôles, d’objectifs et d’horaires de travail, sur un seul tableau.",
    button: "Commencer",
  },
  checked: "Vérifié dans la documentation Claude Code d’Anthropic le 2 novembre 2026.",
  disclaimer:
    "Crewmark est un produit indépendant, sans lien avec Anthropic et non approuvé par Anthropic. Claude et Claude Code sont des marques d’Anthropic.",
};
