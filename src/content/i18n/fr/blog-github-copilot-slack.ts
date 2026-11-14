import type { GuideCopy } from "@/components/landing/guide-article";

// French translation of /blog/github-copilot-slack; the English master is src/content/blog/github-copilot-slack.ts.

const docs = "https://docs.github.com/en/copilot/how-tos/copilot-integrations/integrate-cloud-agent-with-slack";

const prompts = `@GitHub Add "Hello World" to the README in octo-org/octo-repo on the develop branch

@GitHub settings      # choisir les dépôts par défaut de ce canal
@GitHub help          # lister les commandes`;

export const copy: GuideCopy = {
  meta: {
    title: "GitHub Copilot dans Slack : configuration et alternatives",
    description:
      "@GitHub dans Slack et Teams est disponible pour tous depuis le 6 novembre 2026. Comment le configurer, ce que l’agent Copilot fait depuis un fil de discussion, les permissions et limites, et la comparaison avec Claude Code dans Slack.",
  },
  breadcrumb: "GitHub Copilot dans Slack",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-07" },
  hero: {
    kicker: "Blog · Agents de codage IA",
    title: "GitHub Copilot dans Slack : transformer un fil de discussion en pull request",
    lead: "GitHub Copilot dans Slack vous permet de mentionner `@GitHub` dans un fil pour que l’agent cloud de Copilot enquête sur un bug, ouvre des issues, écrive la modification et ouvre une pull request, en se servant de la conversation comme contexte. Il est disponible pour tous dans Slack et Microsoft Teams depuis le 6 novembre 2026. Ce guide explique comment le configurer, ce qu’il sait faire et ce qu’il ne fait pas, qui peut le déclencher, et comment il se compare à Claude Code dans Slack et à un employé IA toujours actif.",
    cta: "Commencer",
    secondary: "Aller à la configuration",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "Ce que fait @GitHub dans Slack et Teams",
      points: [
        "Enquête, planifie, écrit du code et ouvre des issues et des pull requests depuis un fil de discussion, en prenant tout le fil comme contexte.",
        "Travaille de façon asynchrone dans un sandbox cloud et publie un résumé avec des liens vers ce qu’il a créé.",
        "Crée une issue, plusieurs, ou des issues parentes et enfants ; travaille sur jusqu’à 11 dépôts appartenant à la même organisation ou au même compte.",
        "Permet de choisir le modèle, d’utiliser des serveurs MCP configurés par les administrateurs du dépôt et Copilot Memory (en préversion).",
        "Depuis la version du 6 novembre, il déduit le dépôt de votre message, indique dans chaque issue et PR de quelle conversation et de quel utilisateur elle provient et, dans Teams, affiche plans, diffs et aperçus dans un Canvas à côté du chat.",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Comment configurer GitHub Copilot dans Slack",
      steps: [
        {
          title: "Vérifiez que vous pouvez l’utiliser",
          text: "Il vous faut un forfait Copilot payant et un accès en écriture aux dépôts à modifier. Dans les organisations et les entreprises, la stratégie « Copilot in the cloud » est activée par défaut, mais un propriétaire peut la désactiver ; pour les dépôts appartenant à une entreprise, un administrateur installe l’application et choisit les dépôts auxquels elle a accès.",
        },
        {
          title: "Installez l’application GitHub pour Slack",
          text: "Ajoutez l’intégration GitHub à votre espace de travail depuis slack.github.com (pour Teams, teams.github.com).",
        },
        {
          title: "Connectez votre compte",
          text: "Ouvrez un message direct avec l’application GitHub, ou tapez `@GitHub` dans un fil, puis suivez les instructions pour associer votre compte GitHub. `@GitHub help` liste les commandes.",
        },
        {
          title: "Définissez les dépôts par défaut d’un canal",
          text: "Lancez `@GitHub settings` dans un canal pour choisir un propriétaire et des dépôts ; le premier devient le dépôt principal. Les messages directs n’ont pas de dépôt par défaut : indiquez donc le dépôt et la branche dans le prompt.",
        },
        {
          title: "Demandez le travail en langage naturel",
          text: "Mentionnez `@GitHub` avec la tâche, ou répondez avec elle à une notification GitHub. Copilot lit le fil, travaille dans le cloud et répond avec des liens vers l’issue ou la pull request.",
          code: prompts,
        },
      ],
      source: { label: "Source : GitHub Docs, Integrate Copilot cloud agent with Slack", href: docs },
    },
    {
      kind: "text",
      title: "Permissions et limites",
      points: [
        "Seules les personnes ayant un accès en écriture à tous les dépôts sélectionnés peuvent lancer ou orienter une session ; tout le monde dans le fil peut apporter des précisions.",
        "Les invités et les collaborateurs externes ne peuvent ni lancer ni orienter de session.",
        "Dans un message direct, Copilot agit avec les permissions de votre compte associé ; dans un canal partagé, il crée les issues et les PR sous l’identité de son application.",
        "Tout le fil est capturé comme contexte et conservé dans la pull request qui en résulte : ne partagez donc aucun secret dans la conversation.",
        "L’annonce de GitHub ne précise pas la facturation des sessions lancées depuis Slack ; vérifiez la consommation Copilot de votre forfait avant de le déployer largement.",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "GitHub Copilot dans Slack vs Claude Code dans Slack vs un employé IA",
      headers: ["", "GitHub Copilot dans Slack", "Claude Code dans Slack", "Employé IA Crewmark"],
      rows: [
        ["Comment le travail démarre", "Mentionner `@GitHub` ou écrire à l’application en message direct", "Mentionner `@Claude` dans un canal d’équipe", "Une pulsation pendant les horaires de travail prend l’issue suivante ; vous pouvez aussi la lui assigner"],
        ["Où il tourne", "Le sandbox cloud de GitHub", "Le cloud d’Anthropic (Claude Code on the web)", "Votre machine, dans Claude Code, Codex, DeepSeek Harness ou OpenCode"],
        ["Ce qu’il livre", "Des issues et des pull requests", "Des pull requests et des relectures", "Du travail sur n’importe quelle issue du tableau, avec des commentaires et des messages pour vous"],
        ["Forfaits", "Forfaits Copilot payants", "Pro, Max et Ultra, avec Claude Code on the web activé", "L’abonnement d’agent que vous avez déjà"],
        ["Continue sans vous", "Non : une tâche par mention", "Non : une tâche par mention", "Oui, pendant ses horaires de travail"],
      ],
    },
    {
      kind: "text",
      title: "Quand un bot de chat suffit, et quand il ne suffit plus",
      text: [
        "Copilot dans Slack est idéal au moment où un rapport de bug arrive dans un fil : une mention, et une pull request suit. Il reste toutefois réactif : rien ne se passe tant que personne ne le demande, et chaque mention correspond à une tâche. Si vous voulez un agent qui avance seul dans un backlog, avec un rôle et des objectifs, découvrez les [employés IA](/ai-employees) et [comment rendre Claude Code proactif](/proactive-claude-code). Pour d’autres façons de faire tourner plusieurs agents, voir les [outils d’orchestration pour Claude Code](/blog/claude-code-orchestration-tools).",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Avec Crewmark",
      title: "De « mentionner le bot » à un employé qui prend lui-même la tâche suivante",
      text: [
        "Crewmark transforme une session Claude Code, Codex, DeepSeek Harness ou OpenCode en employé IA doté d’un rôle, d’un objectif et d’horaires de travail. Il se réveille avec une pulsation, prend l’issue suivante sur un tableau partagé, commente au fil de son travail et vous écrit quand il a besoin d’une décision.",
      ],
      steps: [
        {
          title: "Assignez le travail comme dans un chat",
          text: "Créez une issue et assignez-la, depuis n’importe quel navigateur ou votre téléphone ; l’employé est prévenu immédiatement.",
        },
        {
          title: "Laissez-le continuer",
          text: "Entre vos messages, il avance dans ses issues avec une pulsation de 15, 30 ou 60 minutes.",
        },
        {
          title: "Gardez Copilot pour les correctifs rapides",
          text: "Les deux ne se gênent pas : utilisez `@GitHub` pour les demandes ponctuelles dans un fil et un employé pour le backlog au long cours.",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Configurer GitHub Copilot dans Slack" },
  mid: {
    title: "Vous voulez un agent qui n’attend pas qu’on le mentionne ?",
    text: "Crewmark réveille Claude Code ou Codex avec une pulsation, un rôle, un objectif et un tableau d’issues.",
    button: "Commencer",
  },
  faq: {
    title: "FAQ sur GitHub Copilot dans Slack",
    items: [
      {
        q: "GitHub Copilot dans Slack est-il disponible pour tous ?",
        a: "Oui. GitHub a annoncé le 6 novembre 2026 que @GitHub dans Slack et Teams est disponible pour tous.",
      },
      {
        q: "Comment ajouter GitHub Copilot à Slack ?",
        a: "Installez l’application GitHub pour Slack depuis slack.github.com, puis écrivez-lui en message direct ou mentionnez `@GitHub` dans un fil et associez votre compte GitHub. Utilisez `@GitHub settings` pour définir les dépôts par défaut d’un canal.",
      },
      {
        q: "Quel forfait faut-il pour Copilot dans Slack ?",
        a: "Un forfait Copilot payant, plus un accès en écriture aux dépôts qu’il doit modifier. Les propriétaires d’organisation peuvent désactiver la stratégie « Copilot in the cloud » dont il dépend.",
      },
      {
        q: "GitHub Copilot dans Slack peut-il ouvrir des pull requests ?",
        a: "Oui. Il enquête, écrit la modification dans un sandbox cloud et ouvre la pull request, puis publie dans le fil un résumé avec des liens.",
      },
      {
        q: "Fonctionne-t-il dans Microsoft Teams ?",
        a: "Oui. @GitHub est aussi disponible pour tous dans Teams, où un Canvas affiche les plans, les modifications de code et les aperçus à côté de la conversation.",
      },
      {
        q: "Qui peut déclencher Copilot dans un canal Slack ?",
        a: "Seules les personnes ayant un accès en écriture à tous les dépôts sélectionnés peuvent lancer ou orienter une session. Les autres membres du fil peuvent apporter des précisions ; les invités et les collaborateurs externes ne peuvent pas le déclencher.",
      },
      {
        q: "GitHub Copilot dans Slack ou Claude Code dans Slack ?",
        a: "Les deux transforment une mention dans Slack en tâche de code dans le cloud. Copilot fonctionne avec un forfait Copilot payant et crée des issues et des PR ; Claude Code dans Slack nécessite un forfait Claude Pro, Max ou Ultra avec Claude Code on the web.",
      },
    ],
  },
  cta: {
    title: "Offrez à votre équipe un coéquipier IA qui n’attend pas qu’on le lui demande.",
    text: "Crewmark transforme des sessions Claude Code, Codex, DeepSeek Harness et OpenCode en employés IA dotés de rôles, d’objectifs, d’horaires de travail et d’une pulsation.",
    button: "Commencer",
  },
  checked: "Vérifié dans le changelog de GitHub (6 novembre 2026), GitHub Docs et la documentation Claude Code d’Anthropic, le 7 novembre 2026.",
  disclaimer:
    "Crewmark est un produit indépendant, sans lien avec GitHub, Microsoft, Slack ni Anthropic et non approuvé par eux. Les noms de produits sont des marques de leurs propriétaires.",
};
