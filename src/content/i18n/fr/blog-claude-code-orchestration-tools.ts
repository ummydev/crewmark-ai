import type { GuideCopy } from "@/components/landing/guide-article";

// French translation of /blog/claude-code-orchestration-tools; the English master is src/content/blog/claude-code-orchestration-tools.ts.

const docs = "https://code.claude.com/docs/en/agents";

export const copy: GuideCopy = {
  meta: {
    title: "Meilleurs outils d’orchestration Claude Code | Crewmark AI",
    description:
      "Faire tourner plusieurs agents Claude Code à la fois : les options intégrées (subagents, agent view, agent teams, workflows) et 10 outils d’orchestration comparés, de Claude Squad et Orca à Paperclip, Multica et Crewmark.",
  },
  breadcrumb: "Outils d’orchestration pour Claude Code",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-06" },
  hero: {
    kicker: "Blog · Claude Code",
    title: "Les meilleurs outils d’orchestration pour Claude Code en 2026",
    lead: "Orchestrer Claude Code, c’est faire tourner plusieurs agents Claude Code à la fois et les coordonner : donner à chacun sa propre copie du code, une tâche et un moyen de rendre compte. Claude Code en fait désormais une bonne partie lui-même, et une vague d’outils open source et commerciaux ajoute par-dessus des interfaces, des tableaux et des planifications. Ce guide présente d’abord les options intégrées, puis compare dix outils selon l’interface, l’isolation, les agents pris en charge et la question qui compte le plus : l’agent se met-il au travail de lui-même, ou attend-il que vous le relanciez ?",
    cta: "Commencer",
    secondary: "Aller au comparatif",
    secondaryHref: "#compare",
  },
  sections: [
    {
      kind: "table",
      id: "built-in",
      title: "Intégré à Claude Code : cinq façons de lancer des agents en parallèle",
      text: [
        "Avant d’installer quoi que ce soit, vérifiez si Claude Code couvre déjà votre besoin. Dans toutes les options intégrées, les exécutants sont des sessions Claude ; les worktrees donnent à chacune son propre checkout (voir le [guide des worktrees](/blog/claude-code-worktree)).",
      ],
      headers: ["Option", "Ce qu’elle apporte", "Statut"],
      rows: [
        ["Subagents (sous-agents)", "Des exécutants au sein d’une session, qui traitent une tâche annexe dans leur propre contexte et renvoient un résumé", "Disponible"],
        ["Agent view (`claude agents`)", "Un seul écran pour lancer et suivre des sessions en arrière-plan, et intervenir quand l’une a besoin de vous", "Research preview"],
        ["Agent teams (équipes d’agents)", "Plusieurs sessions avec une liste de tâches et une messagerie partagées, pilotées par une session principale", "Expérimental, désactivé par défaut"],
        ["Dynamic workflows (workflows dynamiques)", "Un script qui lance de nombreux subagents et recoupe leurs résultats", "Disponible"],
        ["Projects (projets)", "Une conversation continue qui lance des fils parallèles dans le cloud ou sur votre ordinateur", "Bêta publique sur Pro, Max et Ultra"],
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Les outils d’orchestration pour Claude Code comparés",
      text: [
        "Étoiles et licences relevées sur GitHub le 6 novembre 2026. « Se met au travail de lui-même » signifie que l’outil peut confier à un agent sa tâche suivante sans que vous tapiez de prompt, via un tableau, une planification ou une pulsation.",
      ],
      headers: ["Outil", "Interface", "Isolation", "Agents", "Se met au travail de lui-même", "Licence, étoiles"],
      rows: [
        ["Claude Squad", "Interface terminal (`cs`)", "Une session tmux et un git worktree par agent", "Claude Code, Codex, Gemini, Aider et d’autres", "Non", "AGPL-3.0, ~9k"],
        ["Orca", "Desktop, CLI, mobile, runtime distant", "Un worktree par agent", "Claude Code, Codex et d’autres, sur vos abonnements", "Non ; un agent orchestrateur peut répartir le travail", "MIT, ~117k"],
        ["Ruflo (anciennement Claude Flow)", "Plugins Claude Code, CLI et serveur MCP", "Non précisé", "Claude Code, Codex, clients MCP", "Non ; essaims lancés par un prompt ou une mission", "MIT, ~81k"],
        ["oh-my-claudecode", "Plugin Claude Code (`/autopilot`)", "Non précisé", "Claude Code", "Non ; l’autopilot tourne une fois que vous l’avez lancé", "MIT, ~41k"],
        ["Vibe Kanban", "Interface web avec un tableau kanban", "Un espace de travail et une branche par tâche", "Plus de 10, dont Claude Code, Codex et Gemini CLI", "Non ; vous lancez un espace de travail par issue. En fin de vie, maintenu par la communauté", "Apache-2.0, ~29k"],
        ["opcode (anciennement Claudia)", "Interface graphique desktop", "Processus séparés pour les agents en arrière-plan", "Claude Code", "Non", "AGPL-3.0, ~22k"],
        ["CloudCLI (Claude Code UI)", "Interface web et mobile", "Sandbox Docker optionnelle", "Claude Code, Codex, Cursor CLI, OpenCode", "Non", "AGPL-3.0, ~15k"],
        ["Conductor", "App Mac", "Un espace de travail et une branche par tâche", "Claude Code, Codex, Cursor, OpenCode", "Non. Rejoint Meta ; le cloud ferme le 20 novembre 2026", "Code fermé"],
        ["Paperclip", "Interface web : une « entreprise IA » avec organigramme, objectifs et budgets", "Worktrees et sandboxes optionnels", "Claude Code, Codex, Gemini CLI, Cursor, OpenCode et d’autres", "Oui : pulsations planifiées, plus assignation et @mentions", "MIT, ~111k"],
        ["Multica", "Web, desktop, CLI et API", "Un daemon sur votre machine", "Claude Code, Codex, Cursor, Copilot, OpenCode et d’autres", "Oui : les agents prennent les issues qui leur sont assignées ; Autopilots via cron", "Multica License (source disponible), ~55k"],
        ["Crewmark", "Tableau web, CLI et un daemon sur votre machine", "Chaque employé dans sa propre session et son propre checkout", "Claude Code, Codex, DeepSeek Harness, OpenCode", "Oui : une pulsation pendant les horaires de travail prend l’issue suivante", "Inscriptions ouvertes"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Comment choisir un outil d’orchestration pour Claude Code",
      steps: [
        {
          title: "Essayer d’abord les options intégrées",
          text: "Pour quelques tâches parallèles que vous lancez vous-même, `claude --worktree` et agent view peuvent suffire. Pour un gros changement, `/batch` ou un workflow le répartit entre des subagents.",
        },
        {
          title: "Choisir l’interface que vous regarderez vraiment",
          text: "Les habitués du terminal préfèrent souvent Claude Squad ; d’autres veulent une app desktop (Orca, opcode) ou un tableau web (Vibe Kanban, Paperclip, Multica, Crewmark), qui fonctionne aussi depuis un téléphone.",
        },
        {
          title: "Décider qui lance la tâche suivante",
          text: "La plupart des outils accélèrent des agents que vous pilotez. Si vous voulez que les agents continuent entre vos prompts, cherchez un tableau associé à une planification ou à une pulsation : c’est ce que font Paperclip, Multica et Crewmark.",
        },
        {
          title: "Vérifier l’isolation et les agents pris en charge",
          text: "Des agents en parallèle ont besoin de checkouts séparés, généralement des git worktrees. Si votre équipe mélange Claude Code avec Codex ou OpenCode, assurez-vous que l’outil les fait tous tourner sur vos abonnements existants.",
        },
        {
          title: "Vérifier la santé du projet",
          text: "Regardez la licence, les commits récents et le statut : l’entreprise derrière Vibe Kanban l’arrête progressivement, Conductor part chez Meta et Crystal a été remplacé par une nouvelle app.",
        },
      ],
      source: { label: "Source : documentation de Claude Code, Run agents in parallel", href: docs },
    },
    {
      kind: "text",
      title: "Notes sur chaque outil",
      points: [
        "Claude Squad ([smtg-ai/claude-squad](https://github.com/smtg-ai/claude-squad)) : une app terminal qui donne à chaque agent sa propre session tmux et son git worktree ; `--autoyes` accepte automatiquement les prompts (expérimental).",
        "Orca ([stablyai/orca](https://github.com/stablyai/orca)) : fait tourner une flotte d’agents de codage avec vos propres abonnements, sur desktop, sur mobile ou sur une machine distante.",
        "Ruflo ([ruvnet/ruflo](https://github.com/ruvnet/ruflo)) : un méta-harnais d’agents pour Claude Code et Codex, avec des essaims et une mémoire d’une session à l’autre ; `ruvnet/claude-flow` redirige désormais ici.",
        "oh-my-claudecode ([Yeachan-Heo/oh-my-claudecode](https://github.com/Yeachan-Heo/oh-my-claudecode)) : un plugin avec des workflows par étapes (plan, développement, QA) dans Claude Code.",
        "Vibe Kanban ([BloopAI/vibe-kanban](https://github.com/BloopAI/vibe-kanban)) : planifiez des issues sur un tableau et lancez un espace de travail avec un agent pour chacune ; son README annonce son arrêt progressif.",
        "opcode ([winfunc/opcode](https://github.com/winfunc/opcode)) : une interface graphique desktop pour Claude Code avec agents personnalisés, historique des sessions, statistiques d’usage et checkpoints.",
        "CloudCLI ([siteboon/claudecodeui](https://github.com/siteboon/claudecodeui)) : une interface web et mobile pour vos sessions, avec shell, fichiers et git ; une version cloud payante ajoute des conteneurs hébergés.",
        "Conductor ([conductor.build](https://www.conductor.build)) : voir [les alternatives à Conductor](/blog/conductor-alternatives) pour les dates d’arrêt et la façon de migrer votre travail.",
        "Paperclip ([paperclipai/paperclip](https://github.com/paperclipai/paperclip)) et Multica ([multica-ai/multica](https://github.com/multica-ai/multica)) : ce qui se rapproche le plus d’employés IA ; voir nos comparatifs avec [Paperclip](/alternatives/paperclip) et [Multica](/alternatives/multica).",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Avec Crewmark",
      title: "Une orchestration qui continue quand vous arrêtez de taper",
      text: [
        "Crewmark transforme chaque session Claude Code, Codex, DeepSeek Harness ou OpenCode en employé IA doté d’un rôle, d’un objectif et d’horaires de travail, et le réveille avec une pulsation pour qu’il prenne l’issue suivante sur un tableau partagé.",
      ],
      steps: [
        {
          title: "Un employé par poste",
          text: "Un développeur, un relecteur, un rédacteur SEO : chacun a sa propre session, son propre checkout et un objectif chiffré. Voir [ce qu’est un employé IA](/ai-employees).",
        },
        {
          title: "Un tableau plutôt qu’une grille de terminaux",
          text: "Assignez des issues ; chaque employé commente au fil de son travail et vous écrit quand il a besoin d’une décision.",
        },
        {
          title: "Une pulsation plutôt que votre prochain prompt",
          text: "Pendant ses horaires de travail, chaque employé se réveille toutes les 15, 30 ou 60 minutes dans la même conversation ; voir [comment rendre Claude Code proactif](/proactive-claude-code).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Choisir un outil d’orchestration pour Claude Code" },
  mid: {
    title: "Cinq agents en route, et vous tapez encore chaque prompt ?",
    text: "Crewmark donne à chaque session Claude Code un rôle, un objectif et une pulsation, pour qu’elle prenne l’issue suivante sans vous.",
    button: "Commencer",
  },
  faq: {
    title: "FAQ sur l’orchestration de Claude Code",
    items: [
      {
        q: "Qu’est-ce que l’orchestration de Claude Code ?",
        a: "Faire tourner plusieurs agents Claude Code à la fois et les coordonner : des checkouts séparés, des tâches séparées, et un moyen de voir ce que fait chacun et de fusionner les résultats.",
      },
      {
        q: "Claude Code peut-il orchestrer des agents tout seul ?",
        a: "Oui. Subagents, agent view, agent teams (expérimental), dynamic workflows et projects sont intégrés, et `--worktree` isole les sessions que vous lancez vous-même.",
      },
      {
        q: "Quel est le meilleur outil d’orchestration pour Claude Code ?",
        a: "Pour travailler dans le terminal, Claude Squad ; pour une flotte sur desktop, Orca ; pour des essaims dans Claude Code, Ruflo ; pour des agents qui continuent à travailler depuis un tableau selon une planification, Paperclip, Multica ou Crewmark.",
      },
      {
        q: "Existe-t-il une interface graphique pour gérer des agents Claude Code ?",
        a: "Oui : Orca et opcode sont des apps desktop ; Vibe Kanban, CloudCLI, Paperclip et Multica ont une interface web ; et l’app desktop de Claude Code elle-même fait tourner des sessions en parallèle avec une option Worktree.",
      },
      {
        q: "Quels outils permettent aux agents de se mettre au travail sans prompt ?",
        a: "Parmi ceux comparés ici, Paperclip (pulsations planifiées), Multica (issues assignées et Autopilots via cron) et Crewmark (une pulsation pendant les horaires de travail). Les autres font tourner les agents que vous lancez.",
      },
      {
        q: "Ces outils sont-ils gratuits ?",
        a: "La plupart sont open source et gratuits en auto-hébergement : MIT pour Orca, Ruflo, oh-my-claudecode et Paperclip ; AGPL-3.0 pour Claude Squad, opcode et CloudCLI ; Apache-2.0 pour Vibe Kanban. Multica utilise sa propre licence à source disponible ; Conductor est à code fermé.",
      },
      {
        q: "Que choisir à la place de Conductor ?",
        a: "Voir [les alternatives à Conductor](/blog/conductor-alternatives) : le `--worktree` de Claude Code et son app desktop couvrent l’essentiel, et les outils ci-dessus ajoutent tableaux, flottes ou planifications.",
      },
    ],
  },
  cta: {
    title: "Laissez vos agents Claude Code prendre eux-mêmes leur tâche suivante.",
    text: "Crewmark transforme les sessions Claude Code, Codex et DeepSeek Harness en employés IA avec des rôles, des objectifs, des horaires de travail et une pulsation.",
    button: "Commencer",
  },
  checked: "Vérifié dans la documentation de Claude Code, le README ou le site de chaque projet et l’API GitHub le 6 novembre 2026.",
  disclaimer:
    "Crewmark fait partie des outils comparés. Les noms de produits sont des marques de leurs propriétaires ; aucun projet n’a relu ni approuvé cette page.",
};
