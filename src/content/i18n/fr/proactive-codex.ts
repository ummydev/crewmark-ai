import type { GuideCopy } from "@/components/landing/guide-article";

// French translation of /proactive-codex; the English master is src/content/proactive-codex.ts.
export const copy: GuideCopy = {
  meta: {
    title: "Codex proactif : tâches planifiées et cron | Crewmark AI",
    description:
      "Codex et ChatGPT qui agissent sans vous attendre : tâches planifiées (ex-Automations), codex exec et cron, GitHub Action, pulsation (heartbeat).",
  },
  breadcrumb: "Codex proactif",
  hero: {
    kicker: "Codex proactif",
    title: "Comment rendre Codex proactif",
    lead: "Un agent Codex proactif n’attend pas dans une conversation. Il gère lui-même les validations de routine, tourne selon un planning, réagit à une pull request ou à un message Slack, et rend compte. OpenAI propose une brique pour chacun de ces points, et ChatGPT en partage certaines. Ce guide montre comment les configurer, ce que chacune ne sait pas faire, et comment confier à Codex un poste permanent plutôt qu’un prompt ponctuel. Aucune ne vous donne une pulsation (heartbeat) : réveiller la même conversation à intervalles réguliers pour qu’elle prenne sa tâche suivante. Nous présentons l’option intégrée la plus proche et la façon dont Crewmark en ajoute une.",
    cta: "Commencer",
    secondary: "Aller aux étapes",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "Ce que « proactif » veut dire pour Codex",
      text: [
        "Tel quel, Codex répond quand vous lui demandez. Une configuration proactive demande trois choses, qui se trouvent à des endroits différents du produit :",
      ],
      points: [
        "Il ne s’arrête pas à chaque validation : un mode de permissions qui laisse passer les actions de routine.",
        "Il se met au travail tout seul : une tâche planifiée, un déclencheur d’événement ou une tâche cron qui lance le travail sans vous.",
        "Il sait quoi faire ensuite : un backlog et un objectif, pour que chaque exécution ait du travail utile.",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Pas à pas : rendre Codex proactif",
      steps: [
        {
          title: "Choisissez un mode de permissions qui ne s’arrête pas pour tout",
          text: "Dans la CLI, tapez `/permissions`. « Approve for me » ne demande que pour les actions détectées comme potentiellement dangereuses, ce qui convient au travail que vous ne surveillez pas. « Full access » lève les limites sur les fichiers et Internet ; réservez-le aux machines isolées. Si un guide plus ancien vous dit d’utiliser `--full-auto`, sachez que cette option n’est plus prise en charge : utilisez `--sandbox workspace-write` à la place.",
          code: "/permissions",
        },
        {
          title: "Créez une tâche planifiée (anciennement Automations)",
          text: "Ce qui s’appelait Codex Automations s’appelle désormais Scheduled tasks (tâches planifiées). Demandez-en une dans une conversation Codex : dites quel est le travail, quand il doit tourner, et si les résultats doivent revenir dans la même conversation. Les tâches peuvent tourner toutes les quelques minutes, chaque jour ou chaque semaine, et vous les gérez dans la vue Scheduled de la barre latérale. Une tâche qui travaille sur des fichiers locaux a besoin que l’ordinateur soit allumé et l’app ouverte ; dans un dépôt Git, elle peut travailler dans un worktree séparé en arrière-plan. La CLI Codex ne gère pas les tâches planifiées.",
          code: "Every weekday at 9am, check this repo for failing tests,\nfix what you can in a background worktree,\nand post a summary in this chat.",
        },
        {
          title: "Déclenchez des tâches à partir d’événements",
          text: "Au lieu d’une heure, une tâche peut démarrer quand quelque chose se produit : un nouveau message Gmail, un message Slack dans les canaux de votre choix, ou de l’activité sur une pull request GitHub. Les déclencheurs d’événements se configurent depuis ChatGPT sur le web ou sur mobile, avec les forfaits éligibles, et une tâche utilise soit des événements, soit un planning, pas les deux.",
        },
        {
          title: "Lancez Codex depuis cron avec codex exec",
          text: "`codex exec` lance Codex sans l’interface interactive : la progression part sur stderr et seul le message final sur stdout, ce qui convient aux scripts et aux tâches planifiées. Il est en lecture seule sauf si vous passez `--sandbox workspace-write`. La documentation d’OpenAI cite les tâches planifiées parmi les usages mais ne donne pas d’exemple cron ; celui-ci est le nôtre.",
          code: '# crontab -e : chaque jour de semaine à 9:00\n0 9 * * 1-5  cd ~/my-app && codex exec --sandbox workspace-write "Fix any failing tests and summarize what you changed" >> ~/codex-cron.log 2>&1',
        },
        {
          title: "Intégrez Codex à votre workflow GitHub",
          text: "La GitHub Action `openai/codex-action` lance Codex dans un workflow, et vous choisissez ses déclencheurs. Sur les pull requests, commentez `@codex review` pour obtenir une revue, ou demandez à `@codex` de corriger les échecs de CI. Dans Linear, vous pouvez assigner un ticket à Codex.",
          code: "# .github/workflows/codex.yml\nsteps:\n  - uses: openai/codex-action@v1\n    with:\n      prompt-file: .github/codex/prompts/review.md\n      openai-api-key: ${{ secrets.OPENAI_API_KEY }}",
        },
        {
          title: "Utilisez les hooks pour réagir dans une session",
          text: "Les hooks Codex exécutent vos commandes à certains moments, comme le démarrage d’une session, avant et après un appel d’outil, ou à la fin d’un tour. Ils réagissent pendant que Codex travaille ; ils ne le lancent pas. Pour lancer le travail, utilisez une tâche planifiée ou un déclencheur d’événement.",
        },
      ],
      source: {
        label: "Source : documentation Codex d’OpenAI sur les tâches planifiées",
        href: "https://learn.chatgpt.com/docs/automations",
      },
    },
    {
      kind: "steps",
      id: "heartbeat",
      kicker: "La brique manquante",
      title: "Ajoutez une pulsation : réveillez la même conversation pour sa tâche suivante",
      text: [
        "Une pulsation (heartbeat) est un petit message envoyé à intervalles réguliers dans la même conversation Codex, par exemple toutes les 30 minutes pendant les heures de travail, qui dit : vérifie ton travail, prends la tâche suivante. Une tâche planifiée répète un prompt ; une pulsation fait vivre une seule conversation : Codex se souvient de ce qu’il a fait la dernière fois et prend l’élément suivant d’une file. C’est la différence entre une tâche qui se répète et un employé qui continue de travailler.",
      ],
      steps: [
        {
          title: "L’option intégrée la plus proche",
          text: "Une tâche planifiée Codex peut renvoyer ses résultats dans la même conversation : vous pouvez donc rédiger son prompt comme une pulsation, par exemple « toutes les 30 minutes, consulte TODO.md, prends la prochaine tâche non cochée et coche-la ». Vous gérez toujours vous-même le fichier de file, et le planning ne connaît ni les horaires de travail ni les autres agents.",
        },
        {
          title: "Avec Crewmark : une pulsation intégrée",
          text: "Le daemon de Crewmark met la pulsation en file dans la conversation Codex de l’employé avec `codex queue --resume` toutes les 15, 30 ou 60 minutes pendant ses heures de travail, et le tableau sert de file : à chaque pulsation, l’employé prend son ticket suivant et rend compte de son avancement. Les détails sont [plus bas](#crewmark).",
        },
      ],
    },
    {
      kind: "text",
      id: "chatgpt",
      title: "Et ChatGPT ?",
      text: [
        "ChatGPT peut lui aussi prendre l’initiative. Les tâches planifiées de ChatGPT vous envoient des rappels, des synthèses récurrentes et les résultats de ce qu’il surveille ; vous les trouverez sur la page Scheduled de la barre latérale. Leur nombre et leur fréquence dépendent de votre forfait. ChatGPT Pulse, qui envoyait un point quotidien proactif, a été retiré en juin 2026 ; OpenAI recommande désormais une tâche planifiée pour une synthèse quotidienne.",
        "La différence avec Codex : une tâche ChatGPT travaille avec ce à quoi ChatGPT a accès, pas avec votre code. Pour travailler dans un dépôt, utilisez les tâches planifiées de Codex ou `codex exec`.",
      ],
    },
    {
      kind: "table",
      title: "Quelle option choisir",
      headers: ["Option", "Se met au travail tout seul", "L’ordinateur doit être allumé", "Idéal pour"],
      rows: [
        ["Approve for me", "Non, il s’arrête moins une fois que vous demandez", "Oui", "Moins d’interruptions pendant une tâche"],
        ["Tâche planifiée sur des fichiers locaux", "Oui, selon un planning", "Oui, avec l’app ouverte", "Travail quotidien dans un dépôt"],
        ["Tâche planifiée sur le web", "Oui, selon un planning", "Non", "Travail qui n’a pas besoin de vos fichiers"],
        ["Tâche déclenchée par un événement", "Oui, sur activité Gmail, Slack ou GitHub", "Non", "Réagir aux messages et aux PR"],
        ["codex exec + cron", "Oui, selon votre planning cron", "Oui", "Des scripts que vous maîtrisez de bout en bout"],
        ["GitHub Action Codex", "Oui, sur les déclencheurs du workflow", "Non", "Revues et corrections de CI"],
        ["Tâche planifiée ChatGPT", "Oui, selon un planning", "Non", "Rappels et synthèses"],
        ["Tâche planifiée utilisée comme pulsation", "Oui, selon un planning, résultats dans la même conversation", "Oui, pour les fichiers locaux", "Un agent qui avance dans un fichier TODO"],
        ["Pulsation Crewmark", "Oui, toutes les 15 à 60 min pendant les heures de travail, dans la même conversation", "Oui", "Des agents avec un backlog, des objectifs et des horaires"],
      ],
    },
    {
      kind: "text",
      title: "Ce que ces fonctionnalités vous laissent encore à faire",
      text: [
        "Chacune des options ci-dessus lance une exécution. Aucune ne décide de ce sur quoi Codex devrait travailler cette semaine :",
      ],
      points: [
        "Une tâche planifiée répète un prompt. Elle ne prend pas l’élément suivant d’un backlog et ne sait pas ce que la dernière exécution a laissé inachevé.",
        "Il n’y a pas de tableau partagé où confier du travail à Codex et voir ce qui est en cours, terminé ou bloqué.",
        "Il n’y a ni horaires de travail ni cibles : impossible de lui demander de faire bouger un chiffre d’ici la fin du mois.",
        "Faire tourner Codex à côté de Claude Code, c’est deux jeux séparés de prompts, de plannings et d’endroits à surveiller.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Avec Crewmark",
      title: "Confiez un poste permanent à Codex",
      text: [
        "Crewmark transforme une conversation Codex en employé IA doté d’un rôle, d’un objectif, d’horaires de travail et d’une pulsation, et lui confie du travail via le même tableau que vos employés Claude Code. Il tourne dans votre vrai Codex, avec le forfait ChatGPT que vous payez déjà.",
      ],
      steps: [
        {
          title: "Recrutez un employé et connectez sa conversation Codex",
          text: "Choisissez un rôle et lancez dans Codex la commande de configuration que Crewmark vous donne. Cette conversation devient l’employé : il se souvient de son travail d’un réveil à l’autre.",
        },
        {
          title: "Définissez des horaires de travail et une pulsation",
          text: "Le daemon Crewmark, un petit programme en arrière-plan sur votre ordinateur, met le prompt de pulsation de l’employé en file dans cette conversation avec `codex queue --resume` toutes les 15, 30 ou 60 minutes pendant ses horaires, et le laisse tranquille en dehors.",
        },
        {
          title: "Assignez des tickets sur le tableau",
          text: "Assigner un ticket ou le commenter envoie l’information dans la même conversation : Codex prend en charge le nouveau travail de lui-même au lieu d’attendre que vous le colliez.",
        },
        {
          title: "Évaluez-le sur un chiffre",
          text: "Donnez à chaque employé un KPI. Il organise ses tickets en fonction de ce chiffre, les fait avancer sur le tableau, commente son avancement et vous écrit quand il a besoin d’une décision.",
        },
      ],
    },
    {
      kind: "text",
      title: "Utilisez-les ensemble",
      text: [
        "Gardez les tâches planifiées de Codex pour les petites corvées récurrentes et utilisez Crewmark pour le poste dans la durée : réglez la conversation de l’employé sur « Approve for me » pour que chaque pulsation produise du travail, et laissez les revues de pull requests continuer via `@codex review`. Vous êtes plutôt sur Claude Code ? Voir [comment rendre Claude Code proactif](/proactive-claude-code).",
      ],
    },
  ],
  howTo: { section: "how-to", name: "Rendre Codex proactif" },
  mid: {
    title: "Un poste permanent pour Codex, pas un prompt planifié",
    text: "Crewmark réveille votre conversation Codex au rythme d’une pulsation pendant les heures de travail et lui confie le ticket suivant du tableau.",
    button: "Commencer",
  },
  faq: {
    title: "FAQ",
    items: [
      {
        q: "Qu’est-ce qu’une pulsation (heartbeat) pour Codex ?",
        a: "Un message envoyé à intervalles réguliers dans la même conversation Codex, par exemple toutes les 30 minutes pendant les heures de travail, qui lui demande de vérifier son travail et de prendre la tâche suivante. Comme elle poursuit une seule conversation, Codex se souvient du travail précédent. Une tâche planifiée qui rend compte dans la même conversation s’en approche le plus ; Crewmark intègre une pulsation, avec des horaires de travail et un tableau qui sert de file.",
      },
      {
        q: "Que sont devenues les Codex Automations ?",
        a: "Elles s’appellent désormais Scheduled tasks (tâches planifiées). Vous les créez en les demandant dans une conversation Codex et les gérez dans la vue Scheduled de l’app ; la page de documentation se trouve toujours à une URL qui se termine par /automations.",
      },
      {
        q: "codex --full-auto fonctionne-t-il encore ?",
        a: "Non, `--full-auto` n’est plus pris en charge. Utilisez `--sandbox workspace-write` pour laisser Codex modifier des fichiers, ou le mode de permissions « Approve for me » pour qu’il ne demande que pour les actions qui semblent dangereuses.",
      },
      {
        q: "Comment lancer Codex selon un planning ou avec cron ?",
        a: "Dans l’app Codex, demandez une tâche planifiée. Depuis votre propre planificateur, appelez `codex exec` dans une tâche cron, en passant `--sandbox workspace-write` s’il doit modifier des fichiers. Dans un dépôt, vous pouvez aussi lancer la GitHub Action Codex depuis un workflow.",
      },
      {
        q: "ChatGPT peut-il m’écrire de façon proactive ?",
        a: "Oui, grâce aux tâches planifiées et aux tâches déclenchées par des événements. ChatGPT Pulse, le point quotidien proactif, a été retiré en juin 2026, et OpenAI suggère plutôt une tâche planifiée pour une synthèse quotidienne.",
      },
      {
        q: "Codex continue-t-il à travailler quand mon ordinateur est éteint ?",
        a: "Les tâches planifiées sur le web, les déclencheurs d’événements, les tâches cloud de Codex et la GitHub Action, oui. Tout ce qui travaille sur vos fichiers locaux, y compris les tâches planifiées locales, les tâches cron et Crewmark, a besoin que votre ordinateur soit allumé.",
      },
      {
        q: "Crewmark coûte-t-il des tokens en plus ?",
        a: "Non. Les employés tournent dans votre propre Codex, avec le forfait ChatGPT que vous avez déjà : pas de seconde facture de tokens.",
      },
    ],
  },
  cta: {
    title: "Faites de Codex votre premier employé IA",
    text: "Donnez-lui un rôle, un objectif, des horaires de travail et une pulsation, puis assignez-lui son premier ticket.",
    button: "Commencer",
  },
  checked: "Vérifié dans la documentation Codex d’OpenAI le 2 novembre 2026.",
  disclaimer:
    "Crewmark est un produit indépendant, sans lien avec OpenAI et non approuvé par OpenAI. Codex et ChatGPT sont des marques d’OpenAI.",
};
