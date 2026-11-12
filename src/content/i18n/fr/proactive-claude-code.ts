import type { GuideCopy } from "@/components/landing/guide-article";

// French translation of /proactive-claude-code; the English master is src/content/proactive-claude-code.ts.
export const copy: GuideCopy = {
  meta: {
    title: "Rendre Claude Code proactif : /loop et heartbeat | Crewmark",
    description:
      "Claude Code qui travaille sans vous attendre : style Proactive, auto mode, /goal, /loop, tâches planifiées et une pulsation (heartbeat) pour un vrai poste.",
  },
  breadcrumb: "Claude Code proactif",
  hero: {
    kicker: "Claude Code proactif",
    title: "Comment rendre Claude Code proactif",
    lead: "Un agent Claude Code proactif n’attend pas votre prochain message. Il prend lui-même les décisions de routine, continue jusqu’à ce que le travail soit fini, se réveille selon un planning et réagit quand quelque chose se produit. Claude Code propose une brique intégrée pour chacun de ces points. Ce guide montre comment les activer, où chacune s’arrête, et comment confier à Claude Code un poste permanent plutôt qu’un prompt ponctuel. La brique que les fonctionnalités intégrées laissent de côté, c’est la pulsation (heartbeat) : réveiller la même session à intervalles réguliers pour qu’elle prenne sa tâche suivante. Nous montrons comment la mettre en place à la main, et comment Crewmark s’en charge pour vous.",
    cta: "Accès anticipé",
    secondary: "Aller aux étapes",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "Ce que « proactif » veut dire pour Claude Code",
      text: [
        "Par défaut, Claude Code est réactif : vous écrivez, il travaille, il s’arrête et attend. Pour le rendre proactif, il faut trois choses distinctes, et la plupart des guides n’en traitent qu’une.",
      ],
      points: [
        "Il agit sans demander à chaque étape : un style de sortie et un mode de permissions qui lui permettent de prendre les décisions de routine.",
        "Il se met au travail tout seul : une boucle, un planning ou un événement qui lance un tour sans que vous ayez à écrire.",
        "Il sait sur quoi travailler ensuite : un objectif ou une file de travail, pour que chaque réveil serve à quelque chose.",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Pas à pas : rendre Claude Code proactif",
      steps: [
        {
          title: "Activez le style de sortie Proactive",
          text: "C’est généralement ce qu’on appelle le « mode proactif de Claude Code ». Ce n’est pas un mode mais un style de sortie intégré (Proactive output style) : Claude commence à implémenter dès que vous lui donnez une tâche, fait des hypothèses raisonnables sur les décisions de routine au lieu de demander, et saute la planification sauf si vous demandez un plan. Il vous consulte toujours avant de supprimer des données ou de toucher à des systèmes partagés ou de production, et il ne modifie pas vos demandes de permission. Vous pouvez aussi le choisir sous Output style dans `/config`.",
          code: "/output-style Proactive",
        },
        {
          title: "Choisissez un mode de permissions pour le travail sans surveillance",
          text: "Un agent qui s’arrête à chaque demande de permission n’est pas proactif. L’auto mode exécute les actions avec des contrôles de sécurité en arrière-plan au lieu de demander, et `acceptEdits` laisse passer les modifications de fichiers tout en demandant pour les autres commandes. Réservez `bypassPermissions`, qui saute tous les contrôles, aux conteneurs et VM isolés.",
          code: "claude --permission-mode auto",
        },
        {
          title: "Faites-le continuer jusqu’au bout avec /goal",
          text: "`/goal` prend une condition. Après chaque tour, un petit modèle vérifie si elle est remplie ; si ce n’est pas le cas, Claude lance de lui-même un nouveau tour. L’objectif s’efface une fois atteint. Écrivez une condition que vous pourriez vérifier vous-même, comme une suite de tests qui passe.",
          code: "/goal all tests in test/auth pass and the lint step is clean",
        },
        {
          title: "Répétez un travail avec /loop tant que la session est ouverte",
          text: "`/loop` exécute un prompt à intervalle régulier, ou laisse Claude choisir le délai après chaque exécution si vous omettez l’intervalle. La boucle vit dans la session en cours : la session doit rester ouverte, les boucles récurrentes expirent au bout de 7 jours, et les exécutions manquées pendant qu’il était occupé ne sont pas rattrapées.",
          code: "/loop 30m check CI on my open PRs and fix anything that failed",
        },
        {
          title: "Planifiez-le pour quand vous n’êtes pas devant le clavier",
          text: "Les tâches planifiées de bureau (Desktop scheduled tasks) lancent une nouvelle session sur votre ordinateur selon un planning, tant que l’app de bureau Claude est ouverte et que l’ordinateur est allumé et éveillé. Les tâches planifiées dans le cloud, créées avec `/schedule`, tournent sur le cloud d’Anthropic, votre ordinateur peut donc être éteint ; elles tournent au plus une fois par heure et nécessitent un forfait Pro, Max, Ultra, Team ou Enterprise. Pour les dépôts, la GitHub Action officielle peut lancer Claude Code selon un planning cron.",
          code: '/schedule every weekday at 9am, triage new GitHub issues and label them\n\n# .github/workflows/claude.yml\non:\n  schedule:\n    - cron: "0 9 * * 1-5"',
        },
        {
          title: "Laissez des événements le réveiller",
          text: "Les Channels envoient des événements dans une session en cours : un message Telegram, Discord ou iMessage, un échec de CI ou un webhook, pour que Claude réagisse sans que vous ouvriez le terminal. Les hooks exécutent vos propres commandes à certains moments du cycle de vie de Claude, par exemple avant un appel d’outil ou à la fin d’un tour. Les deux nécessitent que la session tourne.",
          code: "claude --channels plugin:telegram@claude-plugins-official",
        },
      ],
      source: {
        label: "Source : documentation Claude Code d’Anthropic sur les tâches planifiées",
        href: "https://code.claude.com/docs/en/scheduled-tasks",
      },
    },
    {
      kind: "steps",
      id: "heartbeat",
      kicker: "La brique manquante",
      title: "Ajoutez une pulsation : réveillez la même session pour sa tâche suivante",
      text: [
        "Une pulsation (heartbeat) est un petit message envoyé à intervalles réguliers dans la même conversation Claude Code, par exemple toutes les 30 minutes pendant les heures de travail, qui dit : vérifie ton travail, prends la tâche suivante. Contrairement à une tâche planifiée, qui lance chaque fois une nouvelle session avec le même prompt, une pulsation fait vivre une seule conversation : l’agent se souvient de ce qu’il a fait la dernière fois et prend l’élément suivant d’une file. C’est la différence entre une tâche qui se répète et un employé qui continue de travailler.",
        "Claude Code n’a pas de réglage de pulsation, mais le mode headless peut reprendre une session : vous pouvez donc en mettre une en place à la main.",
      ],
      steps: [
        {
          title: "À la main : cron plus claude -p --resume",
          text: "Lancez une session, enregistrez son ID, et laissez cron la reprendre à intervalles réguliers avec un court prompt de pulsation. Gardez la file de travail dans un fichier du dépôt, comme TODO.md. C’est notre propre exemple, construit à partir d’options documentées ; la documentation d’Anthropic ne décrit pas de configuration de pulsation.",
          code: "# Une fois : lancer la session et garder son ID\nclaude -p \"You own TODO.md. Each time I say heartbeat, take the next unchecked task, do it, tick it off.\" --output-format json | jq -r '.session_id' > ~/.heartbeat-session\n\n# crontab -e : toutes les 30 minutes, de 9:00 à 17:30 en semaine\n*/30 9-17 * * 1-5  cd ~/my-app && claude -p \"heartbeat\" --resume \"$(cat ~/.heartbeat-session)\" --permission-mode auto >> ~/heartbeat.log 2>&1",
        },
        {
          title: "Ce que la version maison ne couvre pas",
          text: "Vous gérez vous-même le fichier de file et les horaires cron, rien ne l’arrête en dehors des heures de travail à moins de les coder dans cron, une pulsation qui se déclenche pendant que vous utilisez la session entre en collision avec vous, et vous ne voyez pas, d’un agent à l’autre, ce que chacun est en train de faire.",
        },
        {
          title: "Avec Crewmark : une pulsation intégrée",
          text: "Le daemon de Crewmark envoie la pulsation dans la conversation de l’employé toutes les 15, 30 ou 60 minutes pendant ses heures de travail, attend si l’agent est occupé, et le tableau sert de file : à chaque pulsation, l’employé prend son ticket suivant et rend compte de son avancement. Les détails sont [plus bas](#crewmark).",
        },
      ],
    },
    {
      kind: "table",
      title: "Quelle option choisir",
      headers: ["Option", "Se met au travail tout seul", "L’ordinateur doit être allumé", "Idéal pour"],
      rows: [
        ["Style de sortie Proactive", "Non, il agit plus vite une fois que vous demandez", "Oui", "Moins de questions pendant une tâche"],
        ["/goal", "Oui, le tour suivant, jusqu’à ce que la condition soit remplie", "Oui", "Terminer une tâche sans relance"],
        ["/loop", "Oui, à intervalle régulier, jusqu’à 7 jours", "Oui, avec la session ouverte", "Surveiller un déploiement, la CI ou une PR"],
        ["Tâches planifiées de bureau", "Oui, selon un planning", "Oui, éveillé avec l’app ouverte", "Tâches quotidiennes sur des fichiers locaux"],
        ["Tâches planifiées dans le cloud", "Oui, au plus une fois par heure", "Non", "Tâches qui n’ont besoin que d’un dépôt"],
        ["GitHub Actions", "Oui, via cron ou des événements GitHub", "Non", "Maintenance de dépôt"],
        ["Channels", "Oui, à l’arrivée d’un événement", "Oui, avec la session ouverte", "Réagir aux messages, à la CI et aux webhooks"],
        ["Pulsation à la main (cron + `claude -p --resume`)", "Oui, au rythme de votre cron, dans la même session", "Oui", "Un agent qui avance dans un fichier TODO"],
        ["Pulsation Crewmark", "Oui, toutes les 15 à 60 min pendant les heures de travail, dans la même session", "Oui", "Des agents avec un backlog, des objectifs et des horaires"],
      ],
    },
    {
      kind: "text",
      title: "Ce que ces fonctionnalités vous laissent encore à faire",
      text: [
        "Chaque fonctionnalité lance un tour. Aucune ne décide de ce que l’agent devrait faire cette semaine. En pratique, il reste des manques :",
      ],
      points: [
        "Un planning répète le même prompt. Il ne prend pas la tâche suivante d’un backlog et ne se souvient pas de ce que l’exécution d’hier a terminé.",
        "Il n’y a pas de tableau où confier du nouveau travail à Claude et voir ce qu’il fait, ce qu’il a terminé et où il bloque.",
        "Il n’y a ni horaires de travail ni cibles : une boucle tourne jusqu’à expirer, pas jusqu’à ce qu’un chiffre bouge.",
        "Avec plusieurs agents, rien ne les coordonne : chacun a besoin de ses propres prompts et plannings.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Avec Crewmark",
      title: "Confiez un poste permanent à Claude Code",
      text: [
        "Crewmark transforme une conversation Claude Code en employé IA doté d’un rôle, d’un objectif, d’horaires de travail et d’une pulsation, et lui confie du travail via un tableau. Il tourne dans votre vrai Claude Code, avec le forfait que vous payez déjà.",
      ],
      steps: [
        {
          title: "Recrutez un employé et connectez sa conversation",
          text: "Choisissez un rôle, par exemple spécialiste SEO ou ingénieur logiciel, et lancez dans Claude Code la commande de configuration que Crewmark vous donne. Cette conversation devient l’employé : il garde la mémoire de son travail d’un réveil à l’autre.",
        },
        {
          title: "Définissez des horaires de travail et une pulsation",
          text: "Un petit programme en arrière-plan sur votre ordinateur, le daemon Crewmark, envoie le prompt de pulsation de l’employé dans cette même conversation toutes les 15, 30 ou 60 minutes pendant ses horaires, et le laisse tranquille en dehors. Une pulsation qui arrive pendant que l’agent est occupé attend qu’il soit libre.",
        },
        {
          title: "Assignez des tickets sur le tableau",
          text: "Quand vous assignez un ticket ou le commentez, l’information arrive dans la conversation de l’agent sous forme de message. Si la conversation est fermée, Crewmark la reprend avec `claude -p --resume` en auto mode : le travail est quand même pris en charge.",
        },
        {
          title: "Évaluez-le sur un chiffre",
          text: "Donnez à chaque employé un KPI, par exemple les clics Search Console par mois. Il organise ses tickets en fonction de ce chiffre, les fait avancer sur le tableau, commente son avancement et vous écrit quand il a besoin d’une décision.",
        },
      ],
    },
    {
      kind: "text",
      title: "Utilisez-les ensemble",
      text: [
        "Les fonctionnalités intégrées et Crewmark se combinent. Activez le style de sortie Proactive et l’auto mode dans la conversation de l’employé pour que chaque pulsation produise du vrai travail, utilisez `/goal` dans un ticket dont la fin est clairement définie, et suivez l’avancement depuis votre téléphone avec [Claude Code Remote Control](/remote-claude-code). Pour des tâches ponctuelles qui tournent sans vous, voir [comment lancer des agents Claude Code en arrière-plan et en mode headless](/blog/claude-code-background-agents). Vous utilisez plutôt Codex ? Voir [comment rendre Codex proactif](/proactive-codex).",
      ],
    },
  ],
  howTo: { section: "how-to", name: "Rendre Claude Code proactif" },
  mid: {
    title: "Ni tâche cron ni session ouverte",
    text: "Crewmark réveille votre session Claude Code au rythme d’une pulsation pendant les heures de travail et lui confie le ticket suivant du tableau.",
    button: "Accès anticipé",
  },
  faq: {
    title: "FAQ",
    items: [
      {
        q: "Qu’est-ce qu’une pulsation (heartbeat) pour Claude Code ?",
        a: "Un message envoyé à intervalles réguliers dans la même conversation Claude Code, par exemple toutes les 30 minutes pendant les heures de travail, qui demande à l’agent de vérifier son travail et de prendre la tâche suivante. Comme elle reprend une session au lieu d’en lancer une nouvelle, l’agent se souvient du travail précédent. Vous pouvez en mettre une en place avec cron et `claude -p --resume` ; Crewmark l’intègre, avec des horaires de travail et un tableau qui sert de file.",
      },
      {
        q: "Claude Code a-t-il un mode proactif ?",
        a: "Pas sous forme de mode. Claude Code a un style de sortie intégré, Proactive, activé avec `/output-style Proactive`, qui le fait agir sur les décisions de routine au lieu de demander. Il ne modifie pas les demandes de permission ; associez-le à l’auto mode pour cela.",
      },
      {
        q: "Comment lancer Claude Code selon un planning ?",
        a: "Utilisez `/loop` tant qu’une session est ouverte, les tâches planifiées de bureau pour des tâches sur votre ordinateur, `/schedule` pour des tâches planifiées dans le cloud qui tournent ordinateur éteint, ou la GitHub Action de Claude Code avec un déclencheur cron.",
      },
      {
        q: "/loop continue-t-il après la fermeture de Claude Code ?",
        a: "Non. Une boucle appartient à sa session : elle s’arrête quand la session se termine, et les boucles récurrentes expirent au bout de 7 jours. Pour quelque chose qui survive à la session, utilisez les tâches planifiées ou une pulsation Crewmark.",
      },
      {
        q: "Claude Code peut-il travailler quand mon ordinateur est éteint ?",
        a: "Les tâches planifiées dans le cloud et GitHub Actions le peuvent, car elles tournent sur les machines de quelqu’un d’autre. Tout ce qui utilise vos fichiers locaux, y compris les tâches planifiées de bureau, Channels et Crewmark, a besoin que votre ordinateur soit allumé.",
      },
      {
        q: "Est-il sûr de laisser Claude Code tourner sans surveillance ?",
        a: "Utilisez l’auto mode plutôt que `bypassPermissions`, donnez-lui un dépôt où chaque modification passe en revue, et gardez les identifiants de production hors de sa portée. Crewmark ajoute des horaires de travail et un tableau : vous voyez chaque modification qu’il a faite et pourquoi.",
      },
      {
        q: "Crewmark coûte-t-il des tokens en plus ?",
        a: "Non. Les employés tournent dans votre propre Claude Code, avec l’abonnement que vous avez déjà : pas de seconde facture de tokens.",
      },
    ],
  },
  cta: {
    title: "Faites de Claude Code votre premier employé IA",
    text: "Donnez-lui un rôle, un objectif, des horaires de travail et une pulsation, puis assignez-lui son premier ticket.",
    button: "Accès anticipé",
  },
  checked: "Vérifié dans la documentation Claude Code d’Anthropic le 2 novembre 2026.",
  disclaimer:
    "Crewmark est un produit indépendant, sans lien avec Anthropic et non approuvé par Anthropic. Claude et Claude Code sont des marques d’Anthropic.",
};
