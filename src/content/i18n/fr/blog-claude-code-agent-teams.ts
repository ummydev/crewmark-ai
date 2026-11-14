import type { GuideCopy } from "@/components/landing/guide-article";

// French translation of /blog/claude-code-agent-teams; the English master is
// src/content/blog/claude-code-agent-teams.ts.

const docs = "https://code.claude.com/docs/en/agent-teams";

const enable = `// settings.json: agent teams are experimental and off by default
{
  "env": { "CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS": "1" }
}

// Optional: give each teammate its own split pane (tmux or iTerm2)
{
  "teammateMode": "auto"
}`;

const prompt = `Spawn three teammates to review PR #142:
- One focused on security implications
- One checking performance impact
- One validating test coverage
Have them each review and report findings.`;

export const copy: GuideCopy = {
  meta: {
    title: "Agent teams Claude Code vs subagents | Crewmark AI",
    description:
      "Les agent teams de Claude Code expliquées d’après la documentation : différences avec les subagents, activation et lancement, panneaux tmux et iTerm2, taille d’équipe, coût en tokens et limites, avec des exemples de prompts.",
  },
  breadcrumb: "Agent teams Claude Code",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-07" },
  hero: {
    kicker: "Blog · Claude Code",
    title: "Agent teams Claude Code vs subagents : quand utiliser chacun, et comment monter une équipe",
    lead: "Les agent teams permettent à une session Claude Code de jouer le rôle de chef d’équipe et de créer des coéquipiers : des instances Claude Code distinctes, chacune avec sa propre fenêtre de contexte, qui partagent une liste de tâches et s’envoient directement des messages. Les subagents sont plus légers : des assistants dans une seule session qui font un travail précis et renvoient un résumé. Les agent teams sont expérimentales et désactivées par défaut. Ce guide compare les deux d’après la documentation d’Anthropic, puis montre comment activer les équipes, en lancer une, afficher les coéquipiers dans des panneaux tmux ou iTerm2 et éviter les problèmes courants.",
    cta: "Commencer",
    secondary: "Monter une équipe",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "table",
      id: "compare",
      title: "Agent teams vs subagents",
      text: [
        "Les deux exécutent du travail en parallèle dans des fenêtres de contexte séparées. La différence tient à qui coordonne : avec les subagents, l’agent principal gère tout ; dans une équipe, les coéquipiers prennent des tâches dans une liste partagée et se parlent entre eux.",
      ],
      headers: ["", "Subagents", "Agent teams"],
      rows: [
        ["Ce que c’est", "Des assistants dans une session, définis dans `.claude/agents/` ou intégrés (Explore, Plan, general-purpose)", "Une session principale plus des instances Claude Code distinctes comme coéquipiers"],
        ["Contexte", "Fenêtre de contexte propre ; seul un résumé revient à l’appelant", "Fenêtre de contexte propre ; entièrement indépendants"],
        ["Communication", "Renvoient un résultat à l’appelant (les subagents nommés peuvent s’envoyer des messages)", "Les coéquipiers s’écrivent directement ; vous pouvez écrire à n’importe lequel"],
        ["Coordination", "L’agent principal gère tout le travail", "Liste de tâches partagée avec prise en charge, dépendances et messages"],
        ["Idéal pour", "Des tâches ciblées où seul le résultat compte", "Un travail qui demande des échanges : revue, débat, fonctionnalités réparties par couche"],
        ["Coût en tokens", "Plus faible", "Plus élevé : chaque coéquipier est une instance Claude à part"],
        ["Statut", "Disponible pour tous", "Expérimental, désactivé par défaut"],
      ],
    },
    {
      kind: "text",
      title: "Quand utiliser les agent teams (et quand s’en passer)",
      points: [
        "Recherche et revue : les coéquipiers examinent un problème sous différents angles, puis remettent en question les conclusions des autres.",
        "Nouveaux modules ou fonctionnalités : chaque coéquipier prend en charge une partie distincte, comme le frontend, le backend et les tests.",
        "Débogage avec des hypothèses concurrentes : plusieurs coéquipiers cherchent chacun à prouver leur théorie et à réfuter celles des autres.",
        "Pas pour du travail séquentiel, des modifications des mêmes fichiers ou des tâches avec beaucoup de dépendances : utilisez alors une seule session ou des subagents.",
        "Pas pour le travail de routine : la consommation de tokens augmente avec chaque coéquipier actif.",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Comment monter une agent team Claude Code",
      steps: [
        {
          title: "Activez les agent teams",
          text: "Mettez `CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS` à `1` dans votre environnement ou dans le bloc `env` de settings.json. Les équipes nécessitent une session interactive ; avec `-p` (et avec l’Agent SDK), Claude ne crée pas de coéquipiers.",
          code: enable,
        },
        {
          title: "Décrivez l’équipe en langage courant",
          text: "Indiquez combien de coéquipiers vous voulez et ce que fait chacun. Claude crée la liste de tâches partagée, les lance et synthétise leurs conclusions quand ils ont fini.",
          code: prompt,
        },
        {
          title: "Choisissez un mode d’affichage",
          text: "Le mode in-process est le mode par défaut et fonctionne dans n’importe quel terminal : les coéquipiers apparaissent dans un panneau sous le prompt ; utilisez les flèches et Entrée pour en ouvrir un et lui écrire, et `Ctrl+T` pour la liste de tâches. Les panneaux séparés donnent à chaque coéquipier son propre panneau et nécessitent tmux ou iTerm2 avec la CLI `it2` ; réglez `teammateMode` sur `auto` ou `tmux`, ou lancez `claude --teammate-mode auto`.",
        },
        {
          title: "Réutilisez les rôles déjà définis",
          text: "Demandez un coéquipier « utilisant le type d’agent security-reviewer » pour réutiliser une définition de subagent de `.claude/agents/`, avec ses outils, son modèle et ses instructions.",
        },
        {
          title: "Pilotez, puis arrêtez",
          text: "Faites le point avec les coéquipiers, réorientez-les, et dites « attends tes coéquipiers » si le chef d’équipe commence à faire leur travail. Pour finir, demandez au chef d’équipe d’arrêter un coéquipier par son nom ; les répertoires de l’équipe sont nettoyés à la fin de la session.",
        },
      ],
      source: { label: "Source : documentation Claude Code, Agent teams", href: docs },
    },
    {
      kind: "text",
      title: "Bonnes pratiques et limites",
      points: [
        "Commencez avec 3 à 5 coéquipiers et environ 5 à 6 tâches chacun ; trois coéquipiers concentrés font souvent mieux que cinq dispersés.",
        "Donnez à chaque coéquipier un ensemble de fichiers différent : deux coéquipiers qui modifient le même fichier s’écrasent mutuellement.",
        "Mettez les détails de la tâche dans le prompt de création : les coéquipiers chargent CLAUDE.md, les serveurs MCP et les skills, mais pas la conversation du chef d’équipe.",
        "Utilisez des hooks comme contrôles qualité : `TeammateIdle`, `TaskCreated` et `TaskCompleted` peuvent renvoyer le travail avec le code de sortie 2.",
        "Limites : une équipe par session, pas d’équipes imbriquées, le chef d’équipe ne peut pas changer, `/resume` ne restaure pas les coéquipiers in-process, et le statut des tâches peut être en retard.",
        "Les panneaux séparés ne fonctionnent pas dans le terminal intégré de VS Code, Windows Terminal ni Ghostty ; le mode in-process fonctionne partout.",
        "Avec les agent teams activées, un subagent que Claude nomme peut se lancer comme coéquipier ; mettez la variable à `0` pour retrouver des subagents classiques.",
      ],
    },
    {
      kind: "text",
      title: "Agent teams vs les autres façons de faire tourner Claude Code en parallèle",
      text: [
        "Les agent teams découpent une tâche que vous suivez, dans une seule session. Pour des tâches indépendantes, lancez des sessions séparées dans des [worktrees git](/blog/claude-code-worktree) ou comme [agents en arrière-plan](/blog/claude-code-background-agents) ; pour une comparaison complète, lisez [plusieurs agents Claude Code](/blog/multiple-claude-code-agents). Pour limiter le coût, voir [comment réduire la consommation de tokens de Claude Code](/blog/reduce-claude-code-token-usage).",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Avec Crewmark",
      title: "Une équipe qui continue de travailler après la fin de la session",
      text: [
        "Une agent team vit dans une seule session et s’arrête quand vous la fermez. Crewmark transforme des sessions Claude Code, Codex, DeepSeek Harness ou OpenCode en employés IA dotés de rôles, d’objectifs et d’horaires de travail durables : chacun se réveille avec une pulsation, prend l’issue suivante sur un tableau partagé et vous écrit quand il a besoin d’une décision.",
      ],
      steps: [
        {
          title: "Donnez un rôle à chaque employé",
          text: "Un [ingénieur logiciel](/ai-employees/software-engineer), un relecteur, un [spécialiste SEO](/ai-employees/seo-specialist) : les rôles que vous créeriez comme coéquipiers, mais pour de bon.",
        },
        {
          title: "Travaillez depuis un seul tableau",
          text: "Les issues remplacent la liste de tâches de la session, et elles survivent aux redémarrages, aux jours et aux semaines.",
        },
        {
          title: "Laissez la pulsation lancer le travail",
          text: "Toutes les 15, 30 ou 60 minutes pendant les horaires de travail ; voir [ce qu’est un employé IA](/ai-employees).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Monter une agent team Claude Code" },
  mid: {
    title: "Vous voulez une équipe qui ne s’arrête pas avec la session ?",
    text: "Crewmark fait travailler des employés Claude Code depuis un tableau partagé, au rythme d’une pulsation, avec l’abonnement que vous payez déjà.",
    button: "Commencer",
  },
  faq: {
    title: "FAQ sur les agent teams de Claude Code",
    items: [
      {
        q: "Que sont les agent teams de Claude Code ?",
        a: "Une fonctionnalité expérimentale où une session Claude Code dirige une équipe d’instances Claude Code distinctes. Les coéquipiers ont leur propre fenêtre de contexte, partagent une liste de tâches et s’envoient directement des messages, entre eux et avec le chef d’équipe.",
      },
      {
        q: "Quelle est la différence entre les agent teams et les subagents ?",
        a: "Les subagents travaillent dans une session et renvoient un résumé à l’agent principal, qui coordonne tout. Les agent teams sont des instances distinctes qui se coordonnent elles-mêmes via une liste de tâches partagée et des messages directs, pour un coût en tokens plus élevé.",
      },
      {
        q: "Comment activer les agent teams dans Claude Code ?",
        a: "Mettez CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS à 1 dans votre environnement ou dans le bloc env de settings.json, puis demandez à Claude, dans une session interactive, de créer des coéquipiers pour une tâche.",
      },
      {
        q: "Les agent teams ont-elles besoin de tmux ?",
        a: "Non. Le mode in-process par défaut fonctionne dans n’importe quel terminal. tmux, ou iTerm2 avec la CLI it2, n’est nécessaire que si vous voulez chaque coéquipier dans son propre panneau séparé.",
      },
      {
        q: "Combien de coéquipiers faut-il utiliser ?",
        a: "Anthropic conseille de commencer avec 3 à 5 coéquipiers et environ 5 à 6 tâches chacun. Le coût augmente avec chaque coéquipier, et plus de coéquipiers ajoute de la charge de coordination.",
      },
      {
        q: "Les agent teams fonctionnent-elles dans VS Code ?",
        a: "Le mode in-process fonctionne dans n’importe quel terminal, y compris le terminal intégré de VS Code. Le mode panneaux séparés n’y est pas pris en charge.",
      },
      {
        q: "Pourquoi Claude crée-t-il des coéquipiers alors que je voulais des subagents ?",
        a: "Avec les agent teams activées, un subagent que Claude nomme se lance comme coéquipier. Mettez CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS à 0 pour retrouver des subagents classiques.",
      },
    ],
  },
  cta: {
    title: "Faites de votre agent team une équipe permanente.",
    text: "Crewmark transforme des sessions Claude Code, Codex, DeepSeek Harness et OpenCode en employés IA dotés de rôles, d’objectifs, d’horaires de travail et d’une pulsation.",
    button: "Commencer",
  },
  checked: "Vérifié d’après la documentation Claude Code (Agent teams et Subagents) le 7 novembre 2026.",
  disclaimer:
    "Crewmark est un produit indépendant, non affilié à Anthropic ni approuvé par Anthropic. Claude et Claude Code sont des marques d’Anthropic.",
};
