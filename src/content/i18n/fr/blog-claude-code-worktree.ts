import type { GuideCopy } from "@/components/landing/guide-article";

// French translation of /blog/claude-code-worktree; the English master is src/content/blog/claude-code-worktree.ts.

const docs = "https://code.claude.com/docs/en/worktrees";

const start = `# Deux sessions isolées, chacune dans son propre terminal
claude --worktree feature-auth
claude --worktree fix-flaky-test

# Créer un worktree à partir de la pull request 1234 (mettez le # entre guillemets)
claude --worktree "#1234"

# Garder les worktrees hors de git status
echo ".claude/worktrees/" >> .gitignore`;

const settings = `{
  "worktree": {
    "baseRef": "head",
    "symlinkDirectories": ["node_modules"],
    "sparsePaths": [".claude", "packages/web"]
  }
}`;

const manual = `git worktree add ../app-feature-a -b feature-a
cd ../app-feature-a && claude
git worktree list
git worktree remove ../app-feature-a`;

export const copy: GuideCopy = {
  meta: {
    title: "Worktree Claude Code : --worktree, workflow, nettoyage et réglages | Crewmark",
    description:
      "Comment fonctionnent les git worktrees dans Claude Code : claude --worktree, emplacement, branche de départ, .worktreeinclude pour les fichiers .env, nettoyage, subagents et réglages.",
  },
  breadcrumb: "Guide des worktrees Claude Code",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-06" },
  hero: {
    kicker: "Blog · Claude Code",
    title: "Worktrees Claude Code : des sessions en parallèle sans conflits de modifications",
    lead: "Un worktree Claude Code est un répertoire de travail git séparé, avec ses propres fichiers et sa propre branche, qui partage l’historique de votre dépôt. Lancez une session avec `claude --worktree <name>` et Claude travaille là, au lieu de votre checkout : deux ou trois sessions peuvent alors tourner en même temps sans toucher aux fichiers des autres. Ce guide couvre l’option, l’emplacement des worktrees, la branche dont ils partent, la copie des fichiers `.env`, le nettoyage, les subagents et les réglages.",
    cta: "Accès anticipé",
    secondary: "Aller au workflow",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "Les worktrees Claude Code, expliqués",
      text: [
        "Git gère les worktrees depuis des années : `git worktree add` extrait une branche dans un second répertoire, adossé aux mêmes données `.git`. Claude Code s’appuie là-dessus. Avec `--worktree` (ou `-w`), il crée le worktree pour vous, démarre la session à l’intérieur, bloque les modifications qui atterriraient dans votre checkout principal et propose de faire le ménage quand vous quittez.",
        "Les worktrees isolent les fichiers, rien d’autre. Pour répartir une tâche entre plusieurs exécutants dans une seule conversation, utilisez des subagents ; pour comparer les options, voir [plusieurs agents Claude Code](/blog/multiple-claude-code-agents).",
      ],
      points: [
        "Emplacement par défaut : `.claude/worktrees/<name>/` à la racine du dépôt.",
        "Nom de branche par défaut : `worktree-<name>`. Sans nom, Claude Code en choisit un, comme `bright-running-fox`.",
        "Partagé avec votre checkout : le répertoire `.git` (commits et branches sont donc visibles partout), les plugins de portée projet et les autorisations « ne plus demander ».",
        "Non partagé : tout ce qui est dans le .gitignore, comme `.env`, `node_modules` et les fichiers de build. Un worktree est un checkout neuf.",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Le workflow des worktrees, étape par étape",
      steps: [
        {
          title: "Ignorez le dossier des worktrees",
          text: "Ajoutez `.claude/worktrees/` au `.gitignore`, pour que les fichiers des worktrees n’apparaissent pas comme non suivis dans votre checkout principal. Si vous n’avez jamais lancé Claude dans ce dépôt, lancez d’abord `claude` une fois pour accepter la demande de confiance de l’espace de travail ; sinon, les lancements interactifs avec `--worktree` s’arrêtent aussitôt.",
        },
        {
          title: "Une session par tâche",
          text: "Lancez `claude --worktree <name>` dans un terminal par tâche. Relancer la commande avec un nom existant rouvre ce worktree au lieu d’en créer un nouveau. Vous pouvez aussi demander à Claude en cours de session de « travailler dans un worktree » : il s’y installe lui-même avec l’outil `EnterWorktree`.",
          code: start,
        },
        {
          title: "Emportez les fichiers non suivis",
          text: "Listez les fichiers ignorés dont le projet a besoin, comme `.env` et `.env.local`, dans un fichier `.worktreeinclude` à la racine du dépôt, avec la syntaxe de `.gitignore`. Claude Code copie les fichiers correspondants dans chaque worktree qu’il crée, y compris ceux des subagents et de l’application desktop. Installez ensuite les dépendances dans le worktree, ou configurez-le dans les réglages : cet exemple part de votre travail en cours, réutilise un seul `node_modules` et n’extrait que le package web.",
          code: settings,
        },
        {
          title: "Laissez les sessions travailler",
          text: "Tant qu’une session est isolée, Claude Code refuse les modifications de fichiers qui visent le checkout principal, les commandes dont le répertoire de travail est le checkout principal et les commandes git redirigées vers lui (`git -C`, `--git-dir`, `GIT_DIR`). Il ne suit pas ce qu’écrit une simple commande shell comme `cp` : les permissions et le sandboxing restent donc importants.",
        },
        {
          title: "Relisez et fusionnez comme n’importe quelle branche",
          text: "Chaque worktree est une branche normale. Committez et poussez depuis l’intérieur, ouvrez une pull request et relisez-la comme celle d’un coéquipier. Comme tous les worktrees partagent `.git`, la branche est visible tout de suite depuis votre checkout principal.",
        },
        {
          title: "Quittez et faites le ménage",
          text: "Quand vous quittez, Claude Code vérifie le worktree. Un worktree propre issu d’une session sans nom est supprimé automatiquement avec sa branche ; une session nommée demande d’abord. S’il y a des modifications, des fichiers non suivis ou de nouveaux commits, il demande s’il faut garder ou supprimer le worktree, et affiche une commande `claude --worktree <name> --resume` pour y revenir plus tard.",
        },
      ],
      source: { label: "Source : documentation de Claude Code, Run parallel sessions with worktrees", href: docs },
    },
    {
      kind: "table",
      title: "Les réglages des worktrees dans Claude Code",
      text: [
        "Tous se placent sous `worktree` dans un fichier de réglages (`~/.claude/settings.json`, `.claude/settings.json` ou `.claude/settings.local.json`).",
      ],
      headers: ["Réglage", "Effet", "Par défaut"],
      rows: [
        ["`worktree.baseRef`", "`\"fresh\"` part de la branche par défaut du remote (`origin/main`) ; `\"head\"` part de votre HEAD local, commits non poussés compris", "`\"fresh\"`"],
        ["`worktree.symlinkDirectories`", "Crée des liens symboliques vers des répertoires comme `node_modules` du checkout principal au lieu de les dupliquer", "Aucun"],
        ["`worktree.sparsePaths`", "N’extrait que les répertoires listés (plus les fichiers racine) avec le sparse-checkout ; incluez `.claude`", "Arborescence complète"],
        ["`worktree.bgIsolation`", "`\"worktree\"` limite les sessions en arrière-plan aux modifications dans un worktree ; `\"none\"` les laisse modifier la copie de travail", "`\"worktree\"`"],
        ["Emplacement des worktrees (application desktop)", "Settings > Code définit un dossier personnalisé pour les sessions locales ; les connexions SSH ont le leur", "`.claude/worktrees/`"],
        ["`.worktreeinclude` (fichier, pas un réglage)", "Copie les fichiers ignorés correspondants dans chaque nouveau worktree", "Aucun"],
      ],
    },
    {
      kind: "table",
      title: "Worktree Claude Code, branche ou git worktree",
      headers: ["", "Changer de branche", "`git worktree add` + `claude`", "`claude --worktree`"],
      rows: [
        ["Fichiers séparés sur le disque", "Non : un répertoire, une branche à la fois", "Oui", "Oui"],
        ["Plusieurs sessions à la fois", "Non : elles s’écrasent mutuellement", "Oui", "Oui"],
        ["Emplacement", "Votre checkout", "Où vous voulez", "`.claude/worktrees/<name>/`, ou le chemin d’un hook"],
        ["Point de départ", "La branche sur laquelle vous basculez", "Toute branche existante ou nouvelle", "`origin/<default>`, votre HEAD ou une PR"],
        ["Copie `.env`", "Inutile", "Non", "Oui, avec `.worktreeinclude`"],
        ["Modifications bloquées à l’extérieur", "Non", "Non", "Oui"],
        ["Nettoyage", "Aucun", "`git worktree remove`", "Proposé en quittant"],
      ],
    },
    {
      kind: "steps",
      id: "git-worktree",
      title: "Le faire à la main avec git worktree",
      text: [
        "Passez par git directement quand vous voulez une branche existante précise ou un dossier hors du dépôt ; `worktree.baseRef` ne peut pas désigner une branche. Claude Code partage quand même les plugins et les autorisations avec ces worktrees.",
      ],
      steps: [
        {
          title: "Créez le worktree, lancez Claude, supprimez-le une fois fini",
          text: "Remplacez `feature-a` par un nouveau nom de branche, ou retirez `-b` pour extraire une branche qui existe déjà.",
          code: manual,
        },
      ],
    },
    {
      kind: "text",
      title: "Subagents et sessions en arrière-plan dans des worktrees",
      points: [
        "Demandez à Claude d’« utiliser des worktrees pour tes agents », ou ajoutez `isolation: worktree` au frontmatter d’un subagent personnalisé dans `.claude/agents/` : chaque subagent travaille alors dans son propre worktree temporaire.",
        "Le worktree d’un subagent sans modifications est supprimé quand le subagent termine. Celui qui contient des modifications reste jusqu’à ce qu’un nettoyage périodique puisse le supprimer sans perte, après `cleanupPeriodDays`.",
        "Les sessions en arrière-plan (`claude --bg`) ne modifient par défaut que l’intérieur d’un worktree ; lancez-en une avec `claude --bg --worktree` ou réglez `worktree.bgIsolation` sur `\"none\"`.",
        "Dans l’application desktop, activez Worktree sous la zone de saisie avant de démarrer une session.",
      ],
    },
    {
      kind: "text",
      title: "Nettoyage des worktrees et problèmes courants",
      points: [
        "Les lancements `claude -p --worktree` n’ont pas de question à la sortie : ils laissent donc leurs worktrees derrière eux. Supprimez-les avec `git worktree remove`, après `git worktree unlock` si git indique qu’ils sont verrouillés.",
        "`Can only use --worktree in a git repository` : lancez `git init` et faites un premier commit, ou configurez un hook `WorktreeCreate` pour SVN, Perforce ou Mercurial.",
        "Les fichiers Git LFS apparaissent comme des fichiers pointeurs quand LFS a été installé avec `--local` : lancez `git lfs pull` dans le worktree.",
        "Claude Code ne crée pas de worktree quand `.claude` ou `.claude/worktrees` est un lien symbolique.",
        "Dans les hooks, `${CLAUDE_PROJECT_DIR}` pointe toujours vers le checkout principal ; lisez le champ `cwd` de l’entrée du hook pour obtenir le chemin du worktree.",
        "Un worktree de base `\"fresh\"` sans commit propre, ou dont la PR a été fusionnée, revient à la branche par défaut quand vous le rouvrez par son nom.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Avec Crewmark",
      title: "Les worktrees séparent les sessions. Crewmark les fait travailler.",
      text: [
        "Les worktrees règlent le problème des collisions, mais chaque session reste inactive tant que vous n’écrivez rien. Crewmark transforme une session Claude Code, Codex, DeepSeek Harness ou OpenCode en employé IA avec un rôle, un objectif et des horaires de travail, et la réveille à intervalle régulier (heartbeat) pour qu’elle prenne la prochaine issue d’un tableau.",
      ],
      steps: [
        {
          title: "Un employé par worktree",
          text: "Donnez à chaque employé son propre worktree et son rôle, par exemple un développeur et un relecteur dans le même dépôt, comme dans [plusieurs agents Claude Code](/blog/multiple-claude-code-agents).",
        },
        {
          title: "Laissez la pulsation lancer le travail",
          text: "Pendant ses horaires de travail, chaque employé se réveille toutes les 15, 30 ou 60 minutes dans la même conversation ; voir [comment rendre Claude Code proactif](/proactive-claude-code).",
        },
        {
          title: "Assignez des issues et relisez les branches",
          text: "Mettez le travail sur le tableau ; chaque employé prend une issue, committe sur sa propre branche et vous écrit quand il a besoin d’une décision. Lisez [ce qu’est un employé IA](/ai-employees).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Lancer des sessions Claude Code en parallèle dans des git worktrees" },
  mid: {
    title: "Trois worktrees, trois sessions. Qui leur dit quoi faire ensuite ?",
    text: "Crewmark réveille chaque session Claude Code avec une pulsation, un rôle, un objectif et un tableau d’issues, avec l’abonnement que vous payez déjà.",
    button: "Accès anticipé",
  },
  faq: {
    title: "FAQ worktrees Claude Code",
    items: [
      {
        q: "Qu’est-ce qu’un worktree dans Claude Code ?",
        a: "Un répertoire de travail git séparé, avec ses propres fichiers et sa propre branche, qui partage l’historique de votre dépôt. `claude --worktree <name>` en crée un et y lance la session : des sessions en parallèle ne modifient donc pas les mêmes fichiers.",
      },
      {
        q: "Où Claude Code place-t-il les worktrees ?",
        a: "Dans `.claude/worktrees/<name>/` à la racine du dépôt, sur une branche nommée `worktree-<name>`. L’application desktop permet de choisir un autre dossier dans Settings, et un hook `WorktreeCreate` peut les placer n’importe où.",
      },
      {
        q: "De quelle branche part un worktree Claude Code ?",
        a: "Par défaut, de la branche par défaut du remote, en général `origin/main`. Réglez `worktree.baseRef` sur `\"head\"` pour partir de votre HEAD local, passez `\"#1234\"` pour partir d’une pull request, ou créez le worktree avec `git worktree add` pour toute autre branche.",
      },
      {
        q: "Pourquoi mon fichier .env manque-t-il dans le worktree ?",
        a: "Un worktree est un checkout neuf, donc les fichiers ignorés par git n’y sont pas. Listez-les dans un fichier `.worktreeinclude` à la racine du dépôt et Claude Code les copie dans chaque nouveau worktree.",
      },
      {
        q: "Comment nettoyer les worktrees de Claude Code ?",
        a: "En quittant une session, Claude Code propose de supprimer son worktree, et supprime automatiquement ceux qui sont propres et sans nom. Les worktrees des lancements `-p` restent : listez-les avec `git worktree list` et supprimez-les avec `git worktree remove`.",
      },
      {
        q: "Worktree ou branche : quelle différence ?",
        a: "Une branche est une suite de commits ; un worktree est un répertoire où une branche est extraite. Changer de branche modifie les fichiers de votre unique répertoire, alors que les worktrees donnent à chaque branche son propre répertoire : plusieurs sessions peuvent donc tourner en même temps.",
      },
      {
        q: "Les subagents peuvent-ils utiliser des worktrees ?",
        a: "Oui. Demandez à Claude d’utiliser des worktrees pour ses agents, ou ajoutez `isolation: worktree` au frontmatter d’un subagent personnalisé. Chacun reçoit un worktree temporaire, supprimé s’il n’apporte aucune modification.",
      },
    ],
  },
  cta: {
    title: "Donnez à chaque worktree un employé qui sait quoi faire ensuite.",
    text: "Crewmark transforme les sessions Claude Code, Codex et DeepSeek Harness en employés IA avec des rôles, des objectifs, des horaires de travail et une pulsation.",
    button: "Accès anticipé",
  },
  checked: "Vérifié dans la documentation de Claude Code (worktrees, réglages, référence CLI et application desktop) le 6 novembre 2026.",
  disclaimer:
    "Crewmark est un produit indépendant, sans lien avec Anthropic et non approuvé par elle. Claude et Claude Code sont des marques d’Anthropic.",
};
