import type { GuideCopy } from "@/components/landing/guide-article";

// French translation of /blog/claude-code-kanban; the English master is src/content/blog/claude-code-kanban.ts.

const docs = "https://code.claude.com/docs/en/interactive-mode";

const setup = `// ~/.claude/settings.json: only needed if your model
// doesn't have the task tools by default
{
  "env": { "CLAUDE_CODE_ENABLE_TODO_TOOLS": "1" }
}

# Install the board, add its hooks once, then open it
npm install -g claude-code-kanban
claude-code-kanban --install
claude-code-kanban --open`;

const shared = `# Several sessions share one task list
CLAUDE_CODE_TASK_LIST_ID=my-project claude`;

export const copy: GuideCopy = {
  meta: {
    title: "Tableau kanban Claude Code : tâches et outils | Crewmark AI",
    description:
      "Claude Code a une liste de tâches (Ctrl+T), mais pas de tableau kanban. Comment fonctionne la liste de tâches, comment l’afficher sur un tableau et les outils kanban pour les sessions Claude Code : claude-code-kanban, Kanban Code, Claudine, Vibe Kanban et Crewmark.",
  },
  breadcrumb: "Tableau kanban Claude Code",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-07" },
  hero: {
    kicker: "Blog · Claude Code",
    title: "Tableau kanban Claude Code : de la liste de tâches à un vrai tableau",
    lead: "Claude Code n’inclut pas de tableau kanban. Il a une liste de tâches : une checklist que Claude rédige pour le travail en plusieurs étapes, avec des tâches en attente, en cours et terminées, à afficher ou masquer avec Ctrl+T. Un « tableau kanban Claude Code » désigne l’une de deux choses construites par-dessus : un tableau qui affiche cette liste de tâches dans votre navigateur, ou un tableau où chaque carte est une session ou une issue Claude Code entière. Ce guide couvre la liste de tâches intégrée, la mise en place d’un tableau et les outils de chaque type.",
    cta: "Commencer",
    secondary: "Mettre en place un tableau",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "Ce que Claude Code intègre : la liste de tâches",
      text: [
        "La liste de tâches est la propre checklist de Claude pour le travail en cours. Ce n’est pas la vue des tâches en arrière-plan : `/tasks` affiche plutôt les shells et les sous-agents en cours d’exécution.",
      ],
      points: [
        "Appuyez sur `Ctrl+T` pour l’afficher ou la masquer. Elle affiche jusqu’à cinq tâches à la fois.",
        "Les tâches survivent à la compaction du contexte, donc Claude garde son plan sur les longs travaux.",
        "Demandez à Claude « show me all tasks » ou « clear all tasks ».",
        "Définissez `CLAUDE_CODE_TASK_LIST_ID` pour partager une liste entre sessions ; elle est stockée dans un répertoire nommé sous `~/.claude/tasks/`.",
        "Les outils de tâches sont activés par défaut pour Opus 4.7, Sonnet 4.6, Haiku 4.5 et les modèles antérieurs. Sur les autres modèles, la liste reste vide sauf si vous définissez `CLAUDE_CODE_ENABLE_TODO_TOOLS=1`.",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Comment afficher les tâches de Claude Code sur un tableau kanban",
      text: [
        "On utilise ici claude-code-kanban, un tableau open source qui surveille les fichiers de tâches écrits par Claude Code et les affiche dans votre navigateur.",
      ],
      steps: [
        {
          title: "Vérifiez que les outils de tâches sont activés",
          text: "Si Claude n’affiche jamais de checklist avec `Ctrl+T`, votre modèle n’a pas les outils de tâches par défaut. Ajoutez la variable d’environnement à vos paramètres et redémarrez Claude Code.",
          code: setup,
        },
        {
          title: "Installez le tableau et ses hooks",
          text: "`claude-code-kanban --install` ajoute un plugin Claude Code avec des hooks. Sans les hooks, le tableau n’affiche que les tâches, sans activité en direct ni invites en attente.",
        },
        {
          title: "Ouvrez-le et continuez à travailler",
          text: "Les cartes passent par Pending, In Progress et Completed au fil du travail de Claude, et vous pouvez répondre aux questions de Claude depuis le tableau. Il n’écoute que sur 127.0.0.1, sans connexion, alors gardez-le sur votre propre machine.",
        },
        {
          title: "Partagez un tableau entre sessions",
          text: "Lancez chaque session avec le même ID de liste de tâches, pour que plusieurs sessions Claude Code lisent et mettent à jour une seule liste.",
          code: shared,
        },
      ],
      source: { label: "Source : documentation de Claude Code, Interactive mode (Task list)", href: docs },
    },
    {
      kind: "table",
      id: "tools",
      title: "Les outils kanban pour Claude Code comparés",
      text: ["Données tirées du README ou de la fiche de chaque projet le 7 novembre 2026."],
      headers: ["Outil", "Ce qu’est une carte", "Où il tourne", "Agents", "Licence"],
      rows: [
        ["claude-code-kanban", "Une tâche de la liste de tâches de Claude", "Navigateur, sur votre machine", "Claude Code", "MIT"],
        ["Kanban Code", "Une session Claude Code, avec son propre worktree ; colonnes Backlog, In Progress, Waiting, In Review, Done", "Application macOS 26 ; application Windows", "Claude Code", "Apache 2.0"],
        ["Claudine", "Une conversation Claude Code ou Codex, avec statut, branche et erreurs détectés", "Extension VS Code", "Claude Code, Codex", "MIT"],
        ["Vibe Kanban", "Une issue pour laquelle vous lancez un workspace ; l’entreprise a fermé, l’application tourne en local", "`npx vibe-kanban`", "Claude Code, Codex et bien d’autres", "Apache 2.0"],
        ["Crewmark", "Une issue qu’un employé IA prend lui-même, au rythme d’une pulsation", "Tableau web hébergé, partagé avec une équipe", "Claude Code, Codex, DeepSeek Harness, OpenCode", "Commercial"],
      ],
    },
    {
      kind: "text",
      title: "Quel type de tableau il vous faut",
      points: [
        "Vous voulez suivre le plan d’une session : la liste de tâches de Claude Code (`Ctrl+T`) peut suffire ; ajoutez claude-code-kanban pour une vue plus grande dans le navigateur.",
        "Vous faites tourner plusieurs sessions en parallèle et ne savez plus laquelle a besoin de vous : un tableau de sessions comme Kanban Code ou Claudine montre lesquelles travaillent, attendent ou sont prêtes pour la relecture. Voir [plusieurs agents Claude Code](/blog/multiple-claude-code-agents) et le [guide des worktrees](/blog/claude-code-worktree).",
        "Vous utilisiez Vibe Kanban : voir les [alternatives à Vibe Kanban](/blog/vibe-kanban-alternatives).",
        "Vous voulez que le tableau pilote le travail, pour que les agents prennent la carte suivante sans vous : c’est à ça que sert Crewmark (ci-dessous).",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Avec Crewmark",
      title: "Un tableau kanban où Claude Code prend lui-même la carte suivante",
      text: [
        "Tous les outils ci-dessus vous montrent ce que fait Claude ; c’est toujours vous qui lancez chaque session et déplacez chaque carte. Crewmark transforme une session Claude Code, Codex, DeepSeek Harness ou OpenCode en employé IA doté d’un rôle, d’un objectif et d’horaires de travail. Il se réveille avec une pulsation, prend l’issue suivante sur un tableau partagé, commente au fil du travail et vous écrit quand il a besoin d’une décision.",
      ],
      steps: [
        {
          title: "Connectez votre projet et votre agent",
          text: "Lancez la commande d’installation dans le dépôt ; l’employé travaille dans sa propre session et son propre checkout, avec l’abonnement que vous payez déjà.",
        },
        {
          title: "Remplissez le tableau",
          text: "Rédigez les issues comme vous le feriez pour un collègue, puis assignez-les ou laissez-les à qui est disponible.",
        },
        {
          title: "Relisez au lieu de lancer",
          text: "Toutes les 15, 30 ou 60 minutes pendant les horaires de travail, l’employé prend la carte suivante. Voir [comment rendre Claude Code proactif](/proactive-claude-code) et [ce qu’est un employé IA](/ai-employees).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Afficher les tâches de Claude Code sur un tableau kanban" },
  mid: {
    title: "Arrêtez de déplacer les cartes vous-même.",
    text: "Le tableau de Crewmark assigne des issues à des employés Claude Code et Codex qui se réveillent avec une pulsation et prennent la suivante.",
    button: "Commencer",
  },
  faq: {
    title: "FAQ sur le kanban dans Claude Code",
    items: [
      {
        q: "Claude Code a-t-il un tableau kanban ?",
        a: "Non. Il a une liste de tâches, une checklist d’éléments en attente, en cours et terminés que vous affichez ou masquez avec Ctrl+T. Les tableaux kanban pour Claude Code sont des outils tiers construits sur ses fichiers de tâches ou de session.",
      },
      {
        q: "Comment voir la liste de tâches de Claude Code ?",
        a: "Appuyez sur Ctrl+T dans une session. Elle affiche jusqu’à cinq tâches ; demandez à Claude « show me all tasks » pour la liste complète. Pour les shells et sous-agents en cours d’exécution, utilisez plutôt /tasks.",
      },
      {
        q: "Pourquoi ma liste de tâches Claude Code est-elle vide ?",
        a: "Soit Claude n’a encore planifié aucun travail en plusieurs étapes, soit votre modèle n’a pas les outils de tâches par défaut. Définissez CLAUDE_CODE_ENABLE_TODO_TOOLS=1 dans votre environnement ou vos paramètres, puis redémarrez.",
      },
      {
        q: "Plusieurs sessions Claude Code peuvent-elles partager une liste de tâches ?",
        a: "Oui. Lancez chacune avec le même CLAUDE_CODE_TASK_LIST_ID, par exemple CLAUDE_CODE_TASK_LIST_ID=my-project claude ; la liste est stockée sous ~/.claude/tasks/.",
      },
      {
        q: "Existe-t-il un plugin kanban pour Claude Code ?",
        a: "claude-code-kanban installe un plugin Claude Code avec des hooks qui alimentent son tableau dans le navigateur. Claudine est une extension VS Code, et Kanban Code est une application desktop.",
      },
      {
        q: "Existe-t-il un tableau kanban pour Claude Code et Codex à la fois ?",
        a: "Claudine lit les conversations Claude Code comme Codex. Vibe Kanban prend en charge de nombreux agents, mais son entreprise a fermé. Le tableau de Crewmark assigne des issues à des employés Claude Code, Codex, DeepSeek Harness et OpenCode.",
      },
    ],
  },
  cta: {
    title: "Faites de votre tableau Claude Code une équipe qui le traite.",
    text: "Crewmark transforme des sessions Claude Code, Codex, DeepSeek Harness et OpenCode en employés IA dotés de rôles, d’objectifs, d’horaires de travail et d’une pulsation.",
    button: "Commencer",
  },
  checked: "Vérifié dans la documentation de Claude Code (Interactive mode) et dans le README ou la fiche de chaque outil le 7 novembre 2026.",
  disclaimer:
    "Crewmark est un produit indépendant, sans lien avec Anthropic ni avec les projets cités ici et non approuvé par eux. Claude et Claude Code sont des marques d’Anthropic.",
};
