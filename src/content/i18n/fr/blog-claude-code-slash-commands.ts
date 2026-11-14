import type { GuideCopy } from "@/components/landing/guide-article";

// French translation of /blog/claude-code-slash-commands; the English master is src/content/blog/claude-code-slash-commands.ts.

const commands = "https://code.claude.com/docs/en/commands";

const skill = `---
description: Corriger une issue GitHub à partir de son numéro, avec un test
argument-hint: [issue-number]
disable-model-invocation: true
allowed-tools: Bash(gh issue view *)
---

Issue : !\`gh issue view $ARGUMENTS\`

Corrige cette issue en suivant nos conventions de CLAUDE.md.
1. Écris un test qui échoue et reproduit le problème.
2. Fais la plus petite modification qui le fait passer.
3. Lance la suite de tests et résume ce qui a changé.`;

const positional = `---
description: Migrer un composant d’un framework à un autre
argument-hint: [component] [from] [to]
---

Migre le composant $0 de $1 vers $2.
Conserve tous les comportements existants et garde les tests au vert.`;

export const copy: GuideCopy = {
  meta: {
    title: "Commandes slash Claude Code : aide-mémoire et skills",
    description:
      "Un aide-mémoire des commandes slash de Claude Code à connaître, comment écrire vos propres commandes slash personnalisées avec arguments, et le lien entre commandes et skills.",
  },
  breadcrumb: "Commandes slash Claude Code",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-06" },
  hero: {
    kicker: "Blog · Claude Code",
    title: "Commandes slash Claude Code : l’aide-mémoire, et comment écrire les vôtres",
    lead: "Les commandes slash sont les raccourcis que vous tapez au début d’un message Claude Code, comme `/init`, `/compact` ou `/code-review`, pour piloter la session ou lancer un prompt enregistré. Ce guide propose un aide-mémoire des commandes à connaître, classées selon le moment où vous en avez besoin, puis montre comment créer des commandes slash personnalisées avec arguments, et leur lien avec les skills.",
    cta: "Commencer",
    secondary: "Aller aux commandes personnalisées",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "Comment fonctionnent les commandes slash",
      text: [
        "Tapez `/` dans Claude Code pour voir toutes les commandes disponibles, et continuez à taper pour filtrer la liste. Une commande n’est reconnue qu’au début d’un message ; tout ce qui suit son nom devient ses arguments.",
      ],
      points: [
        "Les commandes intégrées sont codées dans la CLI, comme `/clear`, `/model` et `/compact`.",
        "Les skills fournies avec Claude Code fonctionnent comme des prompts transmis à Claude, comme `/simplify`, `/loop` et `/batch`.",
        "Les commandes personnalisées sont celles que vous écrivez : des skills dans `.claude/skills/` ou d’anciens fichiers dans `.claude/commands/`. Les plugins et les serveurs MCP peuvent en ajouter d’autres.",
        "Envoyez une commande pendant que Claude répond encore et elle s’exécute après le tour en cours ; quelques-unes, comme `/status` et `/usage`, s’exécutent immédiatement.",
        "Toutes les commandes ne s’affichent pas pour tout le monde : certaines dépendent de votre plateforme, de votre abonnement ou de la politique de votre organisation.",
      ],
    },
    {
      kind: "table",
      id: "cheat-sheet",
      title: "Aide-mémoire des commandes slash Claude Code",
      text: ["Les commandes que la plupart des gens utilisent, dans l’ordre où une session en a généralement besoin."],
      headers: ["Quand", "Commande", "Ce qu’elle fait"],
      rows: [
        ["Mise en place", "`/init`", "Écrit un premier CLAUDE.md pour le projet"],
        ["Mise en place", "`/memory`", "Modifie les fichiers CLAUDE.md et active ou désactive la mémoire automatique"],
        ["Mise en place", "`/mcp`", "Gère les connexions aux serveurs MCP"],
        ["Mise en place", "`/permissions`", "Gère les règles allow, ask et deny des outils"],
        ["Mise en place", "`/config`", "Ouvre les réglages : thème, modèle, style de sortie et plus"],
        ["Pendant une tâche", "`/plan`", "Passe en mode plan avant une grosse modification"],
        ["Pendant une tâche", "`/model`, `/effort`", "Change le modèle, et la quantité de raisonnement qu’il utilise"],
        ["Pendant une tâche", "`/context`", "Montre ce qui remplit la fenêtre de contexte"],
        ["Pendant une tâche", "`/compact [instructions]`", "Résume la conversation jusqu’ici pour libérer du contexte"],
        ["Pendant une tâche", "`/btw [question]`", "Pose une question annexe sans l’ajouter à la conversation"],
        ["Pendant une tâche", "`/goal`", "Fixe une condition vers laquelle Claude continue de travailler"],
        ["En parallèle", "`/tasks`", "Liste le travail en arrière-plan et les subagents de la session"],
        ["En parallèle", "`/background`", "Détache la session pour qu’elle tourne comme agent en arrière-plan"],
        ["En parallèle", "`/batch <instruction>`", "Découpe une modification à l’échelle du code en unités, chacune dans son propre worktree"],
        ["En parallèle", "`/fork`", "Copie la conversation dans une nouvelle session en arrière-plan"],
        ["Avant de livrer", "`/diff`", "Affiche les modifications de votre copie de travail"],
        ["Avant de livrer", "`/code-review`", "Relit le diff en cours ou une PR à la recherche de bugs ; `/review` est un alias"],
        ["Avant de livrer", "`/security-review`", "Recherche des vulnérabilités dans les modifications de la branche"],
        ["Entre deux sessions", "`/clear`", "Démarre une nouvelle conversation avec un contexte vide"],
        ["Entre deux sessions", "`/resume`, `/rename`", "Revient à une conversation précédente ; nomme celle-ci"],
        ["Entre deux sessions", "`/branch`, `/rewind`", "Crée une branche de la conversation ; ramène code et conversation à un point de contrôle"],
        ["Automatisation", "`/loop [interval] [prompt]`", "Répète un prompt tant que la session reste ouverte"],
        ["Automatisation", "`/schedule`", "Crée et gère des tâches planifiées dans le cloud"],
        ["En cas de blocage", "`/doctor`, `/debug`", "Diagnostique les problèmes de configuration ; lit le journal de débogage de la session"],
        ["En cas de blocage", "`/usage`, `/status`", "Affiche le coût et les limites de l’abonnement (`/cost` et `/stats` sont des alias) ; affiche la version, le modèle et le compte"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Comment créer une commande slash personnalisée",
      text: [
        "Les commandes personnalisées ont été fusionnées avec les skills. Un fichier `.claude/commands/fix-issue.md` et une skill `.claude/skills/fix-issue/SKILL.md` créent tous deux `/fix-issue` et fonctionnent de la même façon ; le format skill est à privilégier pour les nouvelles commandes, car il peut contenir des fichiers annexes.",
      ],
      steps: [
        {
          title: "Créez le dossier et SKILL.md",
          text: "Pour une commande destinée à toute l’équipe, créez `.claude/skills/<name>/SKILL.md` dans le dépôt et committez-le. Pour une commande que vous seul utilisez dans tous vos projets, placez-la dans `~/.claude/skills/<name>/SKILL.md`. Le nom du dossier devient la commande : `fix-issue` donne `/fix-issue`.",
        },
        {
          title: "Écrivez le frontmatter",
          text: "Entre deux lignes `---`, ajoutez une `description` (Claude s’en sert pour décider quand la skill s’applique), `argument-hint` pour afficher les arguments attendus dans le menu, `disable-model-invocation: true` si vous seul devez la déclencher (pour tout ce qui a des effets de bord, comme un déploiement), et `allowed-tools` pour pré-autoriser des outils pendant ce tour.",
        },
        {
          title: "Écrivez le prompt, avec ses arguments",
          text: "Sous le frontmatter, rédigez les instructions en Markdown. `$ARGUMENTS` est remplacé par tout ce qui est tapé après la commande ; `$0`, `$1` et ainsi de suite (ou `$ARGUMENTS[0]`) désignent un argument précis. Une ligne avec `` !`command` `` exécute d’abord cette commande shell et colle sa sortie dans le prompt.",
          code: skill,
        },
        {
          title: "Lancez-la",
          text: "Tapez `/fix-issue 123`. Les skills ajoutées ou modifiées pendant une session se chargent d’elles-mêmes ; si l’une n’apparaît pas, lancez `/reload-skills`. Sans `disable-model-invocation`, Claude peut aussi lancer la skill de lui-même quand votre demande correspond à sa description.",
        },
        {
          title: "Utilisez des arguments positionnels pour les commandes en plusieurs parties",
          text: "Lancer `/migrate-component SearchBar React Vue` remplit `$0`, `$1` et `$2` dans l’ordre.",
          code: positional,
        },
      ],
      source: { label: "Source : documentation de Claude Code, Commands et Skills", href: commands },
    },
    {
      kind: "table",
      title: "Où se trouvent les commandes slash personnalisées",
      headers: ["Emplacement", "Chemin", "Nom de la commande"],
      rows: [
        ["Personnel", "`~/.claude/skills/<name>/SKILL.md`", "`/<name>` dans tous vos projets"],
        ["Projet", "`.claude/skills/<name>/SKILL.md`", "`/<name>` pour tous les membres du dépôt"],
        ["Ancien fichier de commande", "`.claude/commands/<name>.md`", "`/<name>` ; un sous-dossier ajoute un préfixe, p. ex. `commands/frontend/component.md` → `/frontend:component`"],
        ["Plugin", "`<plugin>/skills/<name>/SKILL.md`", "`/<plugin>:<name>`"],
        ["Serveur MCP", "Prompts exposés par le serveur", "Listés dans le menu `/`"],
      ],
    },
    {
      kind: "table",
      title: "Commandes slash ou skills",
      text: [
        "Depuis la fusion, la question n’est plus tant « laquelle » que « quel format de fichier ». Si une skill et un fichier de commande portent le même nom, la skill l’emporte.",
      ],
      headers: ["", "`.claude/commands/<name>.md`", "`.claude/skills/<name>/SKILL.md`"],
      rows: [
        ["Crée `/<name>`", "Oui", "Oui"],
        ["Frontmatter", "Mêmes champs, sauf `name` et `paths`", "Tous les champs"],
        ["Fichiers annexes (scripts, modèles)", "Non", "Oui, dans le dossier de la skill"],
        ["Claude peut la charger de lui-même", "Oui, sauf avec `disable-model-invocation: true`", "Oui, sauf avec `disable-model-invocation: true`"],
        ["Statut", "Fonctionne toujours", "Recommandé pour tout nouveau travail"],
      ],
    },
    {
      kind: "text",
      title: "Astuces et pièges",
      points: [
        "Dans le terminal, vous pouvez enchaîner les skills : `/write-tests /fix-issue 123` charge les deux et passe `123` à chacune, jusqu’à six. Dans `claude -p` et l’Agent SDK, seule la première se charge.",
        "Des commandes intégrées dont vous vous souvenez ont peut-être disparu : `/pr-comments`, `/vim` et `/ultraplan` ont été supprimées. Vérifiez avec `/help` ou dans la documentation.",
        "`allowed-tools` n’accorde l’autorisation que pour le tour qui invoque la skill, et les skills d’un dépôt peuvent s’accorder elles-mêmes des outils : lisez-les donc avant de lancer Claude Code dans un dépôt inconnu.",
        "La description de chaque skill reste dans le contexte ; `/skill-doctor` montre ce que chacune coûte et à quelle fréquence elle sert. Les longues procédures ont leur place dans des skills, pas dans [CLAUDE.md](/blog/claude-md).",
        "`/loop` ne répète un prompt que tant que votre session est ouverte. Pour que le travail démarre tout seul, voir [comment rendre Claude Code proactif](/proactive-claude-code).",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Avec Crewmark",
      title: "Les commandes slash vous rendent plus rapide. Crewmark fait démarrer Claude Code sans vous.",
      text: [
        "Chaque commande slash a encore besoin de vous au clavier pour la taper. Crewmark transforme une session Claude Code, Codex, DeepSeek Harness ou OpenCode en employé IA avec un rôle, un objectif et des horaires de travail, et la réveille à intervalle régulier (heartbeat) pour qu’elle prenne la prochaine issue d’un tableau, avec les skills et les commandes que vous avez déjà configurées.",
      ],
      steps: [
        {
          title: "Gardez vos skills dans le dépôt",
          text: "Vos `.claude/skills/` et votre CLAUDE.md se chargent dans la session de l’employé comme dans la vôtre : `/fix-issue` et vos conventions suivent donc.",
        },
        {
          title: "Laissez la pulsation lancer le travail",
          text: "Pendant ses horaires de travail, l’employé se réveille toutes les 15, 30 ou 60 minutes dans la même conversation et prend la prochaine issue. Plusieurs employés peuvent partager un dépôt, chacun dans son propre [worktree](/blog/claude-code-worktree).",
        },
        {
          title: "Assignez des issues et répondez à ses messages",
          text: "Mettez le travail sur le tableau ; l’employé commente au fil de l’eau et vous écrit quand il a besoin d’une décision. Lisez [ce qu’est un employé IA](/ai-employees).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Créer une commande slash personnalisée dans Claude Code" },
  mid: {
    title: "Vous avez automatisé la saisie. Qui décide de ce qu’il faut taper ensuite ?",
    text: "Crewmark réveille Claude Code avec une pulsation, un rôle, un objectif et un tableau d’issues, avec l’abonnement que vous payez déjà.",
    button: "Commencer",
  },
  faq: {
    title: "FAQ commandes slash Claude Code",
    items: [
      {
        q: "Comment voir toutes les commandes slash de Claude Code ?",
        a: "Tapez `/` au début d’un message pour ouvrir le menu, et continuez à taper pour le filtrer. `/help` et `/skills` les listent aussi, et la page Commands de la documentation de Claude Code donne la référence complète.",
      },
      {
        q: "Comment créer une commande slash personnalisée dans Claude Code ?",
        a: "Créez `.claude/skills/<name>/SKILL.md` (ou `~/.claude/skills/<name>/SKILL.md` pour tous vos projets) avec un court frontmatter et votre prompt. Il devient `/<name>`. Un ancien fichier `.claude/commands/<name>.md` fonctionne aussi.",
      },
      {
        q: "Comment passer des arguments à une commande slash ?",
        a: "Tapez-les après le nom de la commande. Dans le prompt, `$ARGUMENTS` contient tout ce que vous avez tapé, et `$0`, `$1` et ainsi de suite contiennent chaque argument. Ajoutez `argument-hint` au frontmatter pour indiquer ce qui est attendu.",
      },
      {
        q: "Quelle différence entre commandes slash et skills ?",
        a: "Les commandes slash personnalisées ont été fusionnées avec les skills : les deux créent un `/name` et fonctionnent de la même façon. Les skills ajoutent un dossier pour les fichiers annexes et sont le format recommandé ; les fichiers de commande dans `.claude/commands/` continuent de fonctionner.",
      },
      {
        q: "Les commandes slash sont-elles dépréciées ?",
        a: "Non. Taper `/name` reste la façon de lancer n’importe quelle commande ou skill. Ce qui a changé, c’est le format de fichier des commandes personnalisées : `.claude/commands/` fonctionne toujours, mais les skills sont à privilégier. Quelques commandes intégrées ont été supprimées.",
      },
      {
        q: "Claude peut-il lancer ma commande slash de lui-même ?",
        a: "Oui, quand votre demande correspond à la description de la skill. Ajoutez `disable-model-invocation: true` à son frontmatter pour qu’elle ne s’exécute que lorsque vous la tapez.",
      },
      {
        q: "Les commandes slash fonctionnent-elles en mode headless ?",
        a: "Les skills personnalisées, oui : `claude -p \"/fix-issue 123\"` en lance une, car `-p` charge les skills et les commandes personnalisées comme une session interactive. Seule la première skill du message se charge, et `--bare` désactive complètement la découverte des skills.",
      },
    ],
  },
  cta: {
    title: "Donnez à vos skills Claude Code un employé pour les lancer.",
    text: "Crewmark transforme les sessions Claude Code, Codex et DeepSeek Harness en employés IA avec des rôles, des objectifs, des horaires de travail et une pulsation.",
    button: "Commencer",
  },
  checked: "Vérifié dans la documentation de Claude Code (commandes et skills) le 6 novembre 2026.",
  disclaimer:
    "Crewmark est un produit indépendant, sans lien avec Anthropic et non approuvé par elle. Claude et Claude Code sont des marques d’Anthropic.",
};
