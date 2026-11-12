import type { GuideCopy } from "@/components/landing/guide-article";

// French translation of /blog/deepseek-super-agent; the English master is src/content/blog/deepseek-super-agent.ts.

const repo = "https://github.com/deepseek-ai/dsh-superagent-prototype";

export const copy: GuideCopy = {
  meta: {
    title: "DeepSeek Super-Agent (dsh-superagent) : guide et installation | Crewmark",
    description:
      "Le Super-Agent open source de DeepSeek : agent de codage proactif pour un dépôt GitHub. Ce qu’il fait, installation, limites de sécurité, comparaison.",
  },
  breadcrumb: "DeepSeek Super-Agent",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-03" },
  hero: {
    kicker: "Blog · DeepSeek",
    title: "DeepSeek Super-Agent : ce que c’est et comment l’installer",
    lead: "dsh-superagent est l’agent de codage proactif et open source de DeepSeek pour un dépôt GitHub, publié le 31 octobre 2026 sous licence MIT. Il tourne sur DeepSeek Harness, surveille GitHub et, en option, Feishu, et transforme les demandes en pull requests, chacune traitée dans sa propre session et son propre répertoire. Ce guide explique ce qu’il fait, ce qu’il exige, comment l’installer, ce que « proactif » veut dire concrètement et comment il se compare.",
    cta: "Accès anticipé",
    secondary: "Aller à l’installation",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "Ce qu’est DeepSeek Super-Agent",
      text: [
        "Le dépôt décrit dsh-superagent comme « un agent de codage proactif pour un dépôt GitHub, packagé en bundle pour DeepSeek Harness ». Quand une personne figurant sur une liste autorisée lui demande du travail, il ouvre un élément de travail (un Ticket), le traite dans sa propre session d’agent et son propre répertoire, puis répond dans la conversation d’origine, par exemple avec une pull request. Un panneau web n’affiche que ce qui demande une personne.",
        "DeepSeek le présente comme un prototype de recherche, « pas un produit officiel de DeepSeek ». Le code public diffère de la version interne de DeepSeek, et certaines conceptions de l’article de DeepSeek sont des pistes futures que le prototype n’implémente pas.",
      ],
      points: [
        "Sources : notifications GitHub, issues et pull requests suivies, changements de CI et pull requests fusionnées ou fermées ; conversations Feishu si vous les ajoutez.",
        "Travail en parallèle : chaque Ticket a sa propre session d’exécution nommée `worker-<ticket id>` et son propre répertoire, en général un checkout `git worktree`, dans la limite de concurrence que vous fixez.",
        "Suivi : les commentaires ultérieurs sur une issue ou une pull request parviennent au Ticket qui la traite, sans qu’il faille mentionner l’agent à nouveau.",
        "Sa règle pour lui-même : « mobiliser le moins d’attention humaine possible et apporter le plus de valeur possible ». Il confirme une demande une fois, reste silencieux pendant qu’il travaille et n’écrit de nouveau que pour un résultat, une question ou un échec.",
      ],
    },
    {
      kind: "table",
      title: "Est-il vraiment proactif ? Les trois modes d’acceptation",
      text: [
        "La presse décrit un agent qui corrige les bugs avant qu’on le lui demande. La documentation est plus prudente : une demande directe d’une personne autorisée fonctionne toujours, mais le travail que personne n’a demandé exige une règle écrite par votre équipe, et le mode par défaut se contente d’enregistrer ce que l’agent aurait fait.",
      ],
      headers: ["Mode d’acceptation", "Ce qui arrive au travail que personne n’a demandé"],
      rows: [
        ["`off`", "Ignoré : seules les demandes directes de personnes autorisées lancent du travail"],
        ["`observe` (par défaut)", "Évalué selon vos règles et enregistré comme « aurait accepté », mais rien ne démarre"],
        ["`auto`", "Démarré dès qu’il correspond à au moins une de vos règles"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Comment installer dsh-superagent",
      text: [
        "Il vous faut Node.js 22.19+ ou 24+, pnpm, git 2.32+, tmux, Python 3.8+, GitHub CLI 2.48+, DeepSeek Harness 0.2.1-alpha.2 ou une version 0.2 ultérieure, et un fournisseur de modèle configuré dans DeepSeek Harness. L’installation est longue : le dépôt demande donc à votre agent de codage de vous guider pas à pas.",
      ],
      steps: [
        {
          title: "Installez DeepSeek Harness",
          text: "DeepSeek Harness (`dsh`) est le harness d’agents open source de DeepSeek, en préversion développeur. Lancez-le une fois et configurez un fournisseur de modèle ; l’interface web s’ouvre sur `http://127.0.0.1:3080`.",
          code: "npx @deepseek-ai/dsh web",
        },
        {
          title: "Clonez le dépôt et confiez SETUP.md à votre agent de codage",
          text: "Dans le checkout, demandez à votre agent de codage de lire SETUP.md. Il examine votre machine, pose une question par message, présente tout le plan une fois, et n’installe quoi que ce soit qu’après.",
          code: `git clone ${repo}.git\ncd dsh-superagent-prototype\n# puis demandez à votre agent de codage :\n# Read SETUP.md in this repository and set up dsh-superagent with me.`,
        },
        {
          title: "Répondez aux questions d’installation",
          text: "D’où viennent les demandes (GitHub seul, ou aussi Feishu), quel dépôt, sous quel compte GitHub l’agent agit (un compte dédié, jamais le vôtre), quels logins peuvent lui demander du travail, depuis quel clone chaque Ticket fait son checkout, quel auteur ses commits indiquent et s’il peut activer l’auto-merge (la réponse recommandée est non).",
        },
        {
          title: "Faites les étapes que vous seul pouvez faire",
          text: "Créez le compte GitHub de l’agent, acceptez l’invitation au dépôt avec ce compte et connectez sa CLI. L’agent ne demande jamais de secret dans le chat ; il vous donne les commandes exactes à lancer dans votre propre terminal.",
        },
        {
          title: "Vérifiez les valeurs par défaut appliquées",
          text: "Un profil DeepSeek Harness distinct nommé `superagent` sur le port 3082, des branches préfixées `agent/`, le mode d’acceptation `observe` et une vérification toutes les heures qui relance l’agent s’il s’est arrêté.",
        },
        {
          title: "Envoyez-lui la première demande",
          text: "Depuis un compte autorisé, commentez `@<agent login> <request>` sur une issue. Un Ticket apparaît dans le panneau en une minute environ ; l’agent accuse réception, travaille dans son propre répertoire et répond dans le même fil, généralement avec une pull request.",
        },
      ],
      source: { label: "Source : le dépôt dsh-superagent sur GitHub", href: repo },
    },
    {
      kind: "text",
      title: "Sécurité : ce qu’il faut savoir avant de le lancer",
      points: [
        "Les workers tournent avec `danger-full-access` sous votre utilisateur système. Ils peuvent lire votre répertoire personnel et exécuter n’importe quel programme par son chemin ; les wrappers de compte choisissent des identifiants, mais ne constituent pas une barrière de sécurité.",
        "Pour l’isolation, la documentation de DeepSeek recommande de le lancer sous un compte système dédié qui ne contient que les identifiants de l’agent.",
        "Tout ce qu’il écrit apparaît sous le compte GitHub de l’agent ; l’installation recommande donc un compte dédié et une courte liste de personnes autorisées pour commencer.",
        "Les messages et commentaires ne peuvent pas changer qui a le droit de demander du travail : les listes autorisées, les règles et le mode d’acceptation ne se modifient que dans le panneau.",
        "Après chaque tour, le travail en arrière-plan dispose d’au plus 30 minutes pour se terminer avant que ses tâches shell soient arrêtées et que le Ticket soit marqué en attente.",
        "C’est un prototype de recherche, et DeepSeek Harness est une préversion développeur où des changements incompatibles sont à prévoir.",
      ],
    },
    {
      kind: "table",
      title: "DeepSeek Super-Agent vs ChatGPT dots vs Crewmark",
      text: [
        "Ce sont trois agents qui continuent à travailler sans que vous soyez dans le chat, mais ils démarrent le travail différemment. Super-Agent attend une mention ou une règle écrite par votre équipe ; les [ChatGPT dots](/blog/chatgpt-dots) vivent dans le cloud d’OpenAI ; Crewmark réveille à heures régulières l’agent de codage que vous utilisez déjà, DeepSeek Harness compris.",
      ],
      headers: ["", "DeepSeek Super-Agent", "ChatGPT dots", "Crewmark"],
      rows: [
        ["Où il tourne", "Votre machine, dans DeepSeek Harness", "Ordinateur dans le cloud d’OpenAI", "Votre ordinateur, dans DeepSeek Harness, Claude Code, Codex ou OpenCode"],
        ["Ce qui lance le travail", "Une @mention d’une personne autorisée, ou une règle en mode `auto`", "Vos messages, ses tâches programmées et ses propres recherches", "Une pulsation (heartbeat) toutes les 15–60 minutes pendant les horaires de travail"],
        ["File de travail", "Tickets issus de GitHub et de fils Feishu", "Fils de conversation et Scheduled", "Issues sur un tableau kanban"],
        ["Périmètre", "Un dépôt GitHub par installation", "Vos applications connectées", "Un employé par rôle, comme le SEO ou l’ingénierie"],
        ["Coût", "Gratuit, licence MIT ; vous payez votre fournisseur de modèle", "Forfaits Pro et Business Premium", "Accès anticipé ; fonctionne avec l’agent et l’abonnement que vous avez déjà"],
        ["Statut", "Prototype de recherche", "Déploiement en cours", "Accès anticipé"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Avec Crewmark",
      title: "Rendez proactive votre session DeepSeek Harness, Claude Code ou Codex",
      text: [
        "Super-Agent demande son propre profil, ses comptes et sa configuration pour chaque dépôt. Crewmark fonctionne avec l’agent que vous utilisez déjà, DeepSeek Harness compris : il donne à cette session un rôle, un objectif et des horaires de travail, et la réveille avec une pulsation (heartbeat) pour qu’elle prenne la prochaine issue d’un tableau, pour tout type de travail, pas seulement un dépôt.",
      ],
      steps: [
        {
          title: "Transformez une session en employé",
          text: "Choisissez un rôle, comme ingénieur logiciel ou spécialiste SEO, écrivez son objectif sous forme de nombre et lancez la commande d’installation dans DeepSeek Harness, Claude Code, Codex ou OpenCode.",
        },
        {
          title: "Laissez la pulsation lancer le travail",
          text: "Pendant ses horaires de travail, l’employé se réveille toutes les 15, 30 ou 60 minutes dans la même conversation et reprend là où il s’était arrêté ; voir [comment rendre Claude Code proactif](/proactive-claude-code).",
        },
        {
          title: "Assignez des issues et répondez à ses messages",
          text: "Mettez le travail sur le tableau ; l’employé le prend, commente au fil de l’eau et vous écrit quand il a besoin d’une décision. Lisez [ce qu’est un employé IA](/ai-employees).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Installer dsh-superagent de DeepSeek" },
  mid: {
    title: "Vous utilisez déjà DeepSeek Harness, Claude Code ou Codex ?",
    text: "Crewmark rend cette session proactive : une pulsation, des horaires de travail et un tableau d’issues, avec l’abonnement que vous payez déjà.",
    button: "Accès anticipé",
  },
  faq: {
    title: "FAQ DeepSeek Super-Agent",
    items: [
      {
        q: "Qu’est-ce que DeepSeek Super-Agent ?",
        a: "dsh-superagent est un agent de codage proactif et open source pour un dépôt GitHub, publié par DeepSeek le 31 octobre 2026 comme prototype de recherche sous licence MIT. Il tourne sur DeepSeek Harness, reçoit des demandes de GitHub et, en option, de Feishu, et répond par des pull requests.",
      },
      {
        q: "DeepSeek Super-Agent est-il gratuit ?",
        a: "Le code est gratuit sous licence MIT. Il tourne sur DeepSeek Harness avec un fournisseur de modèle que vous configurez, donc vous payez l’usage du modèle. DeepSeek n’a pas annoncé de version hébergée.",
      },
      {
        q: "Où trouver DeepSeek Super-Agent sur GitHub ?",
        a: "Sur github.com/deepseek-ai/dsh-superagent-prototype. DeepSeek Harness, le harness d’agents sur lequel il tourne, se trouve sur github.com/deepseek-ai/deepseek-harness.",
      },
      {
        q: "DeepSeek Super-Agent corrige-t-il des bugs sans qu’on le lui demande ?",
        a: "Seulement si vous l’autorisez. Les demandes directes de personnes autorisées fonctionnent toujours, mais le travail non demandé exige une règle écrite par votre équipe, et le mode `observe` par défaut se contente d’enregistrer ce qu’il aurait fait. Passez à `auto` après avoir examiné ces enregistrements.",
      },
      {
        q: "dsh-superagent fonctionne-t-il avec Slack ou Teams ?",
        a: "Pas dans ce prototype. Il est livré avec GitHub et Feishu comme sources ; son cookbook explique comment en ajouter une autre.",
      },
      {
        q: "Est-il sûr de le lancer ?",
        a: "Ses workers tournent avec un accès complet sous votre utilisateur système et peuvent lire votre répertoire personnel ; la documentation de DeepSeek recommande donc un compte système dédié ne contenant que les identifiants de l’agent, un compte GitHub dédié et une courte liste de personnes autorisées.",
      },
      {
        q: "Puis-je utiliser Crewmark avec DeepSeek Harness ?",
        a: "Oui. Crewmark connecte DeepSeek Harness, Claude Code, Codex et OpenCode. Il transforme une session en employé IA qui se réveille avec une pulsation (heartbeat) pendant ses horaires de travail et prend des issues sur un tableau, avec le fournisseur de modèle que vous utilisez déjà.",
      },
    ],
  },
  cta: {
    title: "Rendez proactif l’agent que vous utilisez déjà.",
    text: "Crewmark transforme des sessions DeepSeek Harness, Claude Code et Codex en employés IA dotés de rôles, d’objectifs, d’horaires de travail et d’une pulsation.",
    button: "Accès anticipé",
  },
  checked: "Vérifié dans les dépôts GitHub dsh-superagent et DeepSeek Harness le 3 novembre 2026.",
  disclaimer:
    "Crewmark est un produit indépendant, sans lien avec DeepSeek, OpenAI ou Anthropic et non approuvé par eux. DeepSeek est une marque de DeepSeek, ChatGPT d’OpenAI et Claude Code d’Anthropic.",
};
