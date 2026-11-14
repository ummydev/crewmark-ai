import type { GuideCopy } from "@/components/landing/guide-article";

// French translation of /blog/vibe-kanban-alternatives; the English master is src/content/blog/vibe-kanban-alternatives.ts.

const shutdown = "https://www.vibekanban.com/blog/shutdown";

const keep = `# Keep running the local, community-maintained app
npx vibe-kanban

# Find the worktrees it made, then push the branches you want to keep
git worktree list
cd <worktree path>
git add -A && git commit -m "WIP from Vibe Kanban"
git push -u origin HEAD`;

export const copy: GuideCopy = {
  meta: {
    title: "Alternatives à Vibe Kanban après sa fermeture (2026)",
    description:
      "L’entreprise derrière Vibe Kanban a fermé et son tableau cloud a disparu. Ce qui fonctionne encore, comment garder vos issues, et les alternatives pour piloter Claude Code et Codex depuis un tableau : Paradev, Nimbalyst, Claude Squad, Kanban Code et Crewmark.",
  },
  breadcrumb: "Alternatives à Vibe Kanban",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-07" },
  hero: {
    kicker: "Blog · Agents de codage IA",
    title: "Alternatives à Vibe Kanban : où piloter vos agents depuis un tableau désormais",
    lead: "Vibe Kanban permettait de planifier le travail des agents de codage sous forme d’issues kanban, de lancer un espace de travail pour chacune, de relire le diff et d’ouvrir une pull request, avec Claude Code, Codex et huit autres agents. Le 10 avril 2026, bloop, l’entreprise qui l’éditait, a annoncé sa fermeture. L’application open source tourne toujours en local, mais les issues, commentaires, projets et organisations hébergés ont disparu, et la dernière version est sortie le 24 avril 2026. Ce guide présente ce qui fonctionne encore, comment garder votre travail et les alternatives.",
    cta: "Commencer",
    secondary: "Comparer les alternatives",
    secondaryHref: "#alternatives",
  },
  sections: [
    {
      kind: "text",
      title: "Ce qui est arrivé à Vibe Kanban",
      text: [
        "bloop explique que la plupart des utilisateurs étaient sur des offres gratuites et qu’elle n’a pas trouvé de modèle économique qu’elle souhaitait poursuivre. Les services distants sont restés en ligne 30 jours après l’annonce, puis Vibe Kanban est passé à une architecture entièrement locale ; les pages de projet mènent désormais à un export des données. Les factures payées dans les 30 jours précédents ont été remboursées.",
      ],
      points: [
        "Fonctionne encore : `npx vibe-kanban` lance l’application locale, et les espaces de travail locaux continuent de fonctionner. Le code reste open source sous licence Apache 2.0 et est maintenu par la communauté.",
        "Disparu : les issues kanban, commentaires, projets et organisations hébergés que les équipes partageaient.",
        "Au ralenti : aucune version n’est sortie depuis la v0.1.44 du 24 avril 2026, donc les nouvelles versions des agents ne sont pas prises en charge.",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Comment garder votre travail",
      steps: [
        {
          title: "Exportez vos données",
          text: "Ouvrez la dernière version de l’application et utilisez son export de données. Les pages de projet y mènent désormais directement.",
        },
        {
          title: "Poussez chaque branche qui compte",
          text: "Chaque espace de travail était un git worktree sur sa propre branche. Committez et poussez celles que vous voulez garder, pour que le code vive dans votre dépôt plutôt que dans l’application.",
          code: keep,
        },
        {
          title: "Déplacez les issues ouvertes vers un endroit partagé",
          text: "Si votre équipe utilisait le tableau hébergé, recréez les issues ouvertes dans GitHub Issues ou dans le tableau de l’outil que vous choisissez, avant que tout le monde oublie de quoi il s’agissait.",
        },
        {
          title: "Essayez une vraie tâche dans le remplaçant",
          text: "Comparez les options ci-dessous et menez une issue jusqu’à la pull request avant de tout migrer.",
        },
      ],
      source: { label: "Source : l’annonce de fermeture de Vibe Kanban", href: shutdown },
    },
    {
      kind: "table",
      id: "alternatives",
      title: "Les alternatives à Vibe Kanban comparées",
      text: ["Informations tirées du site ou du dépôt GitHub de chaque projet le 7 novembre 2026."],
      headers: ["", "Ce que c’est", "Agents", "Plateformes", "Tableau", "Licence"],
      rows: [
        ["Vibe Kanban (communauté)", "Application locale : issues kanban, un espace de travail par issue, relecture du diff, PR", "Claude Code, Codex, Gemini CLI, Copilot, Amp, Cursor, OpenCode et d’autres", "Se lance avec `npx` ; à distance via Docker", "Oui, uniquement en local désormais", "Apache 2.0"],
        ["Paradev (anciennement Superset)", "Espace de travail desktop qui fait tourner de nombreux agents en parallèle, chacun dans son worktree ; automatisations et sandboxes cloud", "Claude, Codex, Cursor Agent, OpenCode et tout agent en CLI", "macOS ; Linux expérimental ; pas encore Windows", "Aucun tableau décrit", "MIT"],
        ["Nimbalyst", "Espace de travail visuel pour agents, tâches, docs, wiki, diagrammes et code", "Claude Code, Codex", "macOS, Windows, Linux", "Tâches à côté des docs et du code", "Open source ; gratuit pour les particuliers"],
        ["Claude Squad", "Application terminal : une session tmux plus un git worktree par agent", "Claude Code, Codex, Gemini, Aider", "Nécessite tmux et gh", "Non (liste en TUI)", "AGPL-3.0"],
        ["Kanban Code", "Tableau kanban pour sessions Claude Code avec un worktree par carte", "Claude Code", "Application macOS 26, Windows (Tauri)", "Backlog, In Progress, Waiting, In Review, Done", "Apache 2.0"],
        ["Crewmark", "Des employés IA : des sessions d’agent avec rôles, objectifs, horaires de travail et une pulsation qui prend l’issue suivante", "Claude Code, Codex, DeepSeek Harness, OpenCode", "Tableau web ; daemon sur macOS, Windows, Linux", "Oui, hébergé, partagé avec votre équipe", "Commercial"],
      ],
    },
    {
      kind: "text",
      title: "Quelle alternative à Vibe Kanban vous convient",
      points: [
        "Vous voulez la même application, telle quelle : continuez à faire tourner la version communautaire en local, et surveillez le dépôt pour un fork maintenu.",
        "Vous faisiez surtout tourner des agents en parallèle et relisiez des diffs : Paradev est l’application desktop maintenue la plus proche, sur Mac et Linux. L’option `--worktree` de Claude Code couvre aussi les sessions parallèles isolées ; voir le [guide des worktrees Claude Code](/blog/claude-code-worktree).",
        "Vous vivez dans le terminal : Claude Squad donne à chaque agent une session tmux et un worktree.",
        "Vous voulez le tableau lui-même, pour Claude Code uniquement : Kanban Code déplace les cartes d’une colonne à l’autre quand les sessions démarrent, attendent et ouvrent des PR.",
        "Vous utilisiez le tableau hébergé en équipe, ou voulez que les agents prennent les issues sans vous : c’est Crewmark (ci-dessous). Conductor était une autre option, mais il [rejoint Meta et ferme progressivement](/blog/conductor-alternatives).",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Avec Crewmark",
      title: "Vibe Kanban attendait que vous lanciez chaque carte. Pas Crewmark.",
      text: [
        "Dans Vibe Kanban, vous écriviez l’issue puis lanciez l’agent. Crewmark garde le tableau, hébergé et partagé, et transforme une session Claude Code, Codex, DeepSeek Harness ou OpenCode en employé IA qui se réveille avec une pulsation pendant ses horaires de travail et prend lui-même l’issue suivante, avec l’abonnement que vous payez déjà.",
      ],
      steps: [
        {
          title: "Apportez votre dépôt et votre agent",
          text: "Lancez la commande d’installation dans le projet. Chaque employé travaille dans sa propre session et son propre checkout, un peu comme un espace de travail Vibe Kanban.",
        },
        {
          title: "Recréez votre tableau",
          text: "Ajoutez vos issues ouvertes et assignez-les à un employé, ou laissez-les non assignées pour le premier disponible.",
        },
        {
          title: "Laissez la pulsation lancer le travail",
          text: "Toutes les 15, 30 ou 60 minutes, l’employé prend l’issue suivante, commente au fil de l’eau et vous écrit quand il a besoin d’une décision. Lisez [ce qu’est un employé IA](/ai-employees).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Garder votre travail après la fermeture de Vibe Kanban" },
  mid: {
    title: "Vous avez perdu votre tableau hébergé ? Gardez le tableau, ajoutez des employés.",
    text: "Crewmark donne à votre équipe un tableau partagé où des employés Claude Code et Codex prennent l’issue suivante au rythme d’une pulsation.",
    button: "Commencer",
  },
  faq: {
    title: "FAQ sur la fermeture de Vibe Kanban",
    items: [
      {
        q: "Vibe Kanban ferme-t-il ?",
        a: "Son entreprise, oui. bloop a annoncé le 10 avril 2026 qu’elle fermait. L’application open source continue comme projet maintenu par la communauté qui tourne en local ; les issues, commentaires, projets et organisations hébergés ont été supprimés au bout de 30 jours.",
      },
      {
        q: "Vibe Kanban fonctionne-t-il encore ?",
        a: "En local, oui : `npx vibe-kanban` le lance toujours et les espaces de travail locaux continuent de fonctionner. La dernière version est la v0.1.44 du 24 avril 2026, donc les versions plus récentes des agents peuvent ne pas être prises en charge.",
      },
      {
        q: "Comment exporter mes données Vibe Kanban ?",
        a: "Utilisez l’export de données de la dernière version de l’application ; les pages de projet y mènent désormais. Poussez aussi les branches de vos espaces de travail vers votre remote git.",
      },
      {
        q: "Quelle est la meilleure alternative à Vibe Kanban ?",
        a: "Pour des agents en parallèle avec relecture des diffs, Paradev (anciennement Superset). Pour un kanban de sessions Claude Code, Kanban Code. Pour un flux de travail dans le terminal, Claude Squad. Pour un tableau partagé où les agents prennent eux-mêmes les issues, Crewmark.",
      },
      {
        q: "Existe-t-il une alternative open source à Vibe Kanban ?",
        a: "Oui : Paradev (MIT), Claude Squad (AGPL-3.0) et Kanban Code (Apache 2.0) sont open source, et Vibe Kanban lui-même reste open source sous licence Apache 2.0.",
      },
      {
        q: "Existe-t-il une alternative à Vibe Kanban pour Windows ?",
        a: "Nimbalyst propose un téléchargement Windows et Kanban Code a une application Windows. Le tableau de Crewmark tourne dans le navigateur et son daemon tourne sous Windows. Paradev ne prend pas encore en charge Windows.",
      },
    ],
  },
  cta: {
    title: "Vos agents ont besoin d’un nouveau tableau. Donnez-leur aussi un poste.",
    text: "Crewmark transforme des sessions Claude Code, Codex, DeepSeek Harness et OpenCode en employés IA dotés de rôles, d’objectifs, d’horaires de travail et d’une pulsation.",
    button: "Commencer",
  },
  checked: "Vérifié dans le README, les versions et l’annonce de fermeture de Vibe Kanban, ainsi que sur le site ou le dépôt de chaque alternative, le 7 novembre 2026.",
  disclaimer:
    "Crewmark est un produit indépendant, sans lien avec bloop, Vibe Kanban, Paradev, Nimbalyst, Claude Squad, Kanban Code, Anthropic ni OpenAI et non approuvé par eux. Les noms de produits sont des marques de leurs propriétaires.",
};
