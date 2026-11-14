import type { GuideCopy } from "@/components/landing/guide-article";

// French translation of /blog/claude-code-plan-mode; the English master is src/content/blog/claude-code-plan-mode.ts.

const docs = "https://code.claude.com/docs/en/permission-modes";

const enter = `# Démarrer une session en plan mode
claude --permission-mode plan

# Ou, dans une session, planifier uniquement ce prompt
/plan ajoute une limitation de débit à l’API publique`;

const settings = `{
  "permissions": {
    "defaultMode": "plan"
  }
}`;

export const copy: GuideCopy = {
  meta: {
    title: "Plan mode Claude Code : raccourci et auto mode | Crewmark AI",
    description:
      "Comment fonctionne le plan mode (mode plan) de Claude Code : le raccourci Shift+Tab et /plan, ce que Claude peut faire pendant la planification, valider un plan, en faire le mode par défaut, et la comparaison avec auto, accept edits et manuel.",
  },
  breadcrumb: "Plan mode de Claude Code",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-06" },
  hero: {
    kicker: "Blog · Claude Code",
    title: "Plan mode de Claude Code : comment il fonctionne et quand l’utiliser",
    lead: "Le plan mode (mode plan) est le mode de permissions de Claude Code dans lequel Claude étudie et propose des modifications sans les appliquer : il lit les fichiers, lance des commandes pour explorer et rédige un plan, mais ne touche pas à votre code tant que vous n’avez pas validé. Appuyez sur `Shift+Tab` pour y passer, ou commencez un prompt par `/plan`. Ce guide couvre toutes les façons d’y entrer et d’en sortir, ce qui est permis pendant la planification, les options de validation, comment en faire le mode par défaut et comment il se compare aux modes auto, accept edits et manuel.",
    cta: "Commencer",
    secondary: "Aller aux étapes",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "table",
      id: "modes",
      title: "Plan mode, auto mode, accept edits ou manuel",
      text: [
        "Le mode plan est l’un des modes de permissions de Claude Code. Chacun échange du confort contre du contrôle ; le tableau montre ce que Claude peut faire sans vous demander dans chacun d’eux.",
      ],
      headers: ["Mode", "S’exécute sans demander", "Idéal pour"],
      rows: [
        ["Manuel (`default`)", "Lectures uniquement", "Relire chaque action, travail sensible"],
        ["Accept edits (`acceptEdits`)", "Lectures, modifications de fichiers et commandes de fichiers courantes comme `mkdir` et `mv`", "Itérer sur du code que vous relisez ensuite avec `git diff`"],
        ["Plan (`plan`)", "Lectures, plus les commandes d’exploration validées par le classifieur de l’auto mode, quand il est disponible. Aucune modification avant votre validation", "Explorer une base de code et s’accorder sur une approche avant de la modifier"],
        ["Auto (`auto`)", "Tout, avec des contrôles de sécurité en arrière-plan", "Tâches longues, moins de demandes de confirmation"],
        ["Don't ask (`dontAsk`)", "Uniquement les outils pré-autorisés ; tout le reste est refusé", "CI et scripts verrouillés"],
        ["Bypass (`bypassPermissions`)", "Tout", "Conteneurs et VM isolés uniquement"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Comment utiliser le plan mode dans Claude Code",
      steps: [
        {
          title: "Passer en mode plan",
          text: "Dans le terminal, appuyez sur `Shift+Tab` pour faire défiler les modes jusqu’à ce que la barre d’état affiche `⏸ plan mode on` ; depuis Manuel, le cycle passe par accept edits, puis par plan. Ou commencez un seul prompt par `/plan`. Dans VS Code, cliquez sur l’indicateur de mode sous la zone de prompt et choisissez Plan ; dans l’application de bureau, utilisez le sélecteur de mode.",
          code: enter,
        },
        {
          title: "Décrire la modification et laisser Claude explorer",
          text: "Demandez ce que vous voulez construire ou corriger. Claude lit le code et lance des commandes pour enquêter, puis rédige un plan. Quand l’auto mode (mode automatique) est disponible, un classifieur examine ces commandes au lieu de vous demander ; sinon, tout ce qui dépasse les commandes intégrées en lecture seule demande d’abord votre accord.",
        },
        {
          title: "Relire et modifier le plan",
          text: "Répondez aux questions de Claude, contestez, ou appuyez sur `Ctrl+G` pour ouvrir le plan dans votre éditeur de texte et le modifier vous-même. Les plans sont enregistrés sous forme de fichiers dans `~/.claude/plans/`, ou dans le dossier défini par le paramètre `plansDirectory`.",
        },
        {
          title: "Valider, ou continuer à planifier",
          text: "Choisissez Yes, and use auto mode (oui, et utiliser le mode automatique), ou Yes, auto-accept edits quand l’auto mode n’est pas disponible, pour que Claude l’implémente ; Yes, manually approve edits pour relire chaque modification ; ou No, keep planning pour continuer à planifier. Valider fait quitter le mode plan et donne à la session le nom du plan.",
        },
        {
          title: "Sortir sans valider",
          text: "Appuyez de nouveau sur `Shift+Tab` pour quitter le mode plan sans plan. Pour planifier la modification suivante, revenez-y dans le cycle ou commencez le prompt par `/plan`.",
        },
      ],
      source: { label: "Source : documentation de Claude Code, Choose a permission mode", href: docs },
    },
    {
      kind: "steps",
      id: "default",
      title: "Faire du plan mode le mode par défaut",
      text: [
        "Pour une session, démarrez avec `claude --permission-mode plan`. Pour toutes les sessions de terminal d’un projet, réglez `defaultMode` sur `plan` dans `.claude/settings.json` ; pour tous les projets de votre machine, mettez-le dans `~/.claude/settings.json`.",
      ],
      steps: [
        {
          title: "L’ajouter aux paramètres",
          text: "Les conversations VS Code ne lisent pas les paramètres du projet pour le mode de départ : réglez plutôt `claudeCode.initialPermissionMode` sur `plan` dans vos paramètres utilisateur VS Code.",
          code: settings,
        },
      ],
    },
    {
      kind: "text",
      title: "Quand le plan mode vaut le coup",
      points: [
        "Les modifications qui touchent beaucoup de fichiers, ou pour lesquelles la première idée est souvent mauvaise : une migration, un refactoring, une nouvelle fonctionnalité entre front-end et back-end.",
        "Du code que vous ne connaissez pas encore : laissez Claude le cartographier et vous expliquer l’approche avant que quoi que ce soit ne change.",
        "Les erreurs coûteuses : schémas de base de données, authentification, paiements, API publiques.",
        "Passez-vous-en pour les corrections d’une ligne et les tâches que vous décririez exactement comme le plan ; les modes manuel ou accept edits sont plus rapides dans ces cas-là.",
        "Associez-le à un contexte propre : quand `showClearContextOnPlanAccept` est activé, la validation peut aussi effacer la conversation de planification pour que l’implémentation parte du seul plan.",
      ],
    },
    {
      kind: "text",
      title: "Pièges à connaître",
      points: [
        "Le mode plan bloque les modifications, pas tout : avec l’auto mode disponible, les commandes shell validées s’exécutent pendant la planification, donc une commande à effets de bord peut tout de même s’exécuter.",
        "Dans une session de terminal interactive démarrée avec bypass permissions disponible, les blocages du mode plan ne sont pas appliqués ; Claude reçoit seulement la consigne de ne pas modifier.",
        "Les exécutions headless (`claude -p`), les sessions de l’Agent SDK et le panneau de chat de VS Code conservent les blocages du mode plan.",
        "Choisir Plan dans VS Code ne vaut que pour cette conversation ; les nouvelles reviennent à votre mode de départ habituel.",
        "Les règles deny s’appliquent toujours dans tous les modes, plan compris. Voir [les commandes slash de Claude Code](/blog/claude-code-slash-commands) pour `/plan`, `/permissions` et les autres commandes.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Avec Crewmark",
      title: "Le plan mode rend Claude prudent. Crewmark le fait continuer à travailler.",
      text: [
        "Le mode plan vous permet de garder la main sur une grosse modification ; la session attend malgré tout que vous lanciez la suivante. Crewmark transforme une session Claude Code, Codex, DeepSeek Harness ou OpenCode en employé IA avec un rôle, un objectif et des horaires de travail, et la réveille à intervalle régulier (heartbeat) pour qu’elle prenne la prochaine issue d’un tableau.",
      ],
      steps: [
        {
          title: "Des plans en commentaires d’issue",
          text: "Un employé peut publier son plan sur l’issue et attendre votre feu vert avant une modification risquée : vous validez depuis le tableau plutôt que depuis le terminal.",
        },
        {
          title: "Laissez la pulsation lancer le travail",
          text: "Pendant ses horaires de travail, l’employé se réveille toutes les 15, 30 ou 60 minutes dans la même conversation et prend la prochaine issue ; voir [comment rendre Claude Code proactif](/proactive-claude-code).",
        },
        {
          title: "Plusieurs employés, un seul dépôt",
          text: "Donnez à chacun son propre [worktree](/blog/claude-code-worktree) et son rôle. Lisez [ce qu’est un employé IA](/ai-employees).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Utiliser le plan mode dans Claude Code" },
  mid: {
    title: "Vous avez validé le plan. Qui prend la tâche suivante ?",
    text: "Crewmark réveille Claude Code avec une pulsation, un rôle, un objectif et un tableau d’issues, avec l’abonnement que vous payez déjà.",
    button: "Commencer",
  },
  faq: {
    title: "FAQ plan mode Claude Code",
    items: [
      {
        q: "Qu’est-ce que le plan mode dans Claude Code ?",
        a: "Un mode de permissions dans lequel Claude étudie le code et rédige un plan sans modifier vos sources. Les modifications restent bloquées tant que vous n’avez pas validé le plan.",
      },
      {
        q: "Quel est le raccourci du plan mode ?",
        a: "`Shift+Tab` fait défiler les modes de permissions dans le terminal ; arrêtez-vous quand la barre d’état affiche `⏸ plan mode on`. Vous pouvez aussi commencer un prompt par `/plan` ou lancer `claude --permission-mode plan`.",
      },
      {
        q: "Plan mode ou auto mode : quelle différence ?",
        a: "Le mode plan explore et propose sans modifier. L’auto mode fait le travail, en modifiant les fichiers et en lançant des commandes avec des contrôles de sécurité en arrière-plan. Un enchaînement courant consiste à planifier d’abord, puis à valider avec Yes, and use auto mode.",
      },
      {
        q: "Plan mode ou accept edits ?",
        a: "Accept edits laisse Claude modifier les fichiers sans demander, et vous relisez ensuite. Le mode plan ne change rien tant que vous n’avez pas validé un plan ; après validation, vous pouvez choisir d’accepter les modifications automatiquement.",
      },
      {
        q: "Comment utiliser le plan mode dans VS Code ou l’application de bureau ?",
        a: "Dans VS Code, cliquez sur l’indicateur de mode sous la zone de prompt et choisissez Plan, ou réglez `claudeCode.initialPermissionMode` sur `plan`. Dans l’application de bureau, choisissez-le dans le sélecteur de mode.",
      },
      {
        q: "Où sont enregistrés les plans de Claude Code ?",
        a: "Sous forme de fichiers dans `~/.claude/plans/`, sauf si vous définissez un autre dossier avec le paramètre `plansDirectory`. Appuyez sur `Ctrl+G` pour modifier le plan en cours dans votre éditeur.",
      },
      {
        q: "Comment quitter le plan mode ?",
        a: "Validez le plan, ce qui bascule dans le mode que vous choisissez, ou appuyez sur `Shift+Tab` pour sortir sans valider.",
      },
    ],
  },
  cta: {
    title: "Laissez Claude Code planifier, construire et prendre la prochaine issue.",
    text: "Crewmark transforme les sessions Claude Code, Codex et DeepSeek Harness en employés IA avec des rôles, des objectifs, des horaires de travail et une pulsation.",
    button: "Commencer",
  },
  checked: "Vérifié dans la documentation de Claude Code (modes de permissions et paramètres) le 6 novembre 2026.",
  disclaimer:
    "Crewmark est un produit indépendant, sans lien avec Anthropic et non approuvé par elle. Claude et Claude Code sont des marques d’Anthropic.",
};
