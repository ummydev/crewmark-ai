import type { GuideCopy } from "@/components/landing/guide-article";

// French translation of /blog/claude-code-background-agents; the English master is
// src/content/blog/claude-code-background-agents.ts.
export const copy: GuideCopy = {
  meta: {
    title: "Claude Code en arrière-plan : headless et --bg | Crewmark AI",
    description:
      "Lancer Claude Code en arrière-plan : tâches de fond, agent view avec --bg, claude -p en headless avec cron, sessions cloud, tâches planifiées et permissions.",
  },
  breadcrumb: "Agents Claude Code en arrière-plan",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-02" },
  hero: {
    kicker: "Blog · Claude Code",
    title: "Comment lancer des agents Claude Code en arrière-plan",
    lead: "Un agent en arrière-plan continue de travailler pendant que vous faites autre chose : une longue série de tests envoyée en arrière-plan, une session lancée avec --bg dont vous avez fermé le terminal, ou une tâche headless claude -p que cron lance chaque matin. Claude Code propose un outil pour chacun de ces cas. Ce guide montre comment les utiliser, ce qui maintient chacun en vie, et les permissions dont une exécution sans surveillance a besoin.",
    cta: "Commencer",
    secondary: "Aller au mode headless",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "table",
      title: "Cinq façons de lancer Claude Code en arrière-plan",
      text: ["Elles diffèrent par ce qui doit rester en marche, et par qui lance le travail."],
      headers: ["", "Se lance avec", "Continue tant que", "Idéal pour"],
      rows: [
        ["Tâches en arrière-plan", "Ctrl+B, ou Claude lance lui-même une commande en arrière-plan", "La session est ouverte", "Longs builds et tests, sous-agents, dans une seule conversation"],
        ["Agent view", "`claude --bg \"<prompt>\"`", "Votre ordinateur est allumé (le terminal peut être fermé)", "Plusieurs sessions lancées maintenant et vérifiées plus tard"],
        ["Mode headless", "`claude -p \"<prompt>\"`, depuis un script ou cron", "La commande tourne", "Scripts, tâches cron, CI"],
        ["Sessions cloud", "`claude --cloud \"<task>\"`", "Les serveurs d’Anthropic l’exécutent (le portable peut être fermé)", "Longues tâches sur un dépôt GitHub"],
        ["Tâches planifiées", "`/schedule`, l’app de bureau ou `/loop`", "Selon le type : cloud, app ouverte ou session ouverte", "Travail récurrent ; voir [comment rendre Claude Code proactif](/proactive-claude-code)"],
      ],
    },
    {
      kind: "text",
      title: "Les tâches en arrière-plan dans une session",
      text: [
        "Appuyez sur Ctrl+B pendant que Claude exécute une commande Bash ou un sous-agent pour l’envoyer en arrière-plan (deux fois dans tmux), et continuez à parler à Claude. Claude peut aussi lancer de lui-même une commande en arrière-plan. Les sous-agents que Claude crée tournent en arrière-plan par défaut.",
        "Tapez `/tasks` pour lister les shells et sous-agents en cours et vérifier où ils en sont. Dans une session de terminal locale, une commande en arrière-plan n’a pas de limite de durée, mais elle s’arrête quand Claude Code se ferme. Pour faire tourner plusieurs agents côte à côte, voir [comment lancer plusieurs agents Claude Code](/blog/multiple-claude-code-agents).",
      ],
    },
    {
      kind: "text",
      title: "Agent view : des sessions qui survivent au terminal",
      text: [
        "`claude --bg \"<prompt>\"` lance une session en arrière-plan et rend la main immédiatement ; `/bg` envoie en arrière-plan la session dans laquelle vous êtes. Un processus superviseur les fait tourner : fermer le terminal ne les arrête pas, mais éteindre ou redémarrer l’ordinateur, si. Une session inactive à laquelle personne n’est attaché est arrêtée au bout d’environ une heure.",
        "`claude agents` ouvre l’agent view ; `claude attach <id>`, `claude logs <id>` et `claude stop <id>` gèrent une session. Agent view est en research preview : les commandes peuvent changer.",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Lancer Claude Code en headless avec claude -p",
      steps: [
        {
          title: "Exécutez un prompt et quittez",
          text: "`-p` (ou `--print`) lance Claude Code sans l’interface interactive et quitte une fois le travail fini, avec le code de sortie 0 en cas de succès. Vous pouvez aussi lui envoyer une entrée par un pipe.",
          code: 'claude -p "List the failing tests and why they fail"\ncat error.log | claude -p "Explain this error"',
        },
        {
          title: "Obtenez une sortie lisible par un script",
          text: "`--output-format json` renvoie le résultat avec l’ID de session et des métadonnées, dont `total_cost_usd`, une estimation calculée sur votre machine. `stream-json` (avec `--verbose`) diffuse les événements au fur et à mesure.",
          code: "claude -p \"Summarize this repo\" --output-format json | jq -r '.result'",
        },
        {
          title: "N’autorisez que les outils nécessaires",
          text: "En mode headless, personne n’est là pour valider une demande. Depuis la v2.1.302, une exécution sans mode défini démarre en Manual et refuse tout ce qui nécessiterait une validation. Utilisez `--allowedTools` pour ce qu’il a le droit de faire et `--permission-mode dontAsk` pour refuser le reste au lieu d’attendre.",
          code: 'claude -p "Run the test suite and summarize failures" \\\n  --permission-mode dontAsk --allowedTools "Read,Bash(npm test)"',
        },
        {
          title: "Plafonnez l’exécution",
          text: "`--max-turns` s’arrête après un certain nombre de tours de l’agent, et `--max-budget-usd` à un coût estimé (qui peut être légèrement dépassé). Les deux ne fonctionnent qu’avec `-p`.",
          code: 'claude -p "Fix the lint errors" --max-turns 15 --max-budget-usd 3',
        },
        {
          title: "Reprenez la même conversation plus tard",
          text: "Enregistrez l’ID de session de la sortie JSON et passez-le à `--resume`, ou utilisez `--continue` pour la session la plus récente du dossier.",
          code: "id=$(claude -p \"Start a code review of src/\" --output-format json | jq -r '.session_id')\nclaude -p \"Now check the tests too\" --resume \"$id\"",
        },
        {
          title: "Lancez-le selon un planning avec cron",
          text: "La documentation d’Anthropic ne contient pas d’exemple cron ; celui-ci n’utilise que des options documentées. Cron a un PATH minimal : utilisez le chemin complet donné par `which claude`, et créez d’abord le dossier des logs. N’ajoutez pas `--bare` ici : cette option ignore votre connexion par abonnement et exige une clé API.",
          code: '# crontab -e : en semaine à 9:00\n0 9 * * 1-5  cd /path/to/repo && /path/to/claude -p "Summarize yesterday\'s commits and list new TODO comments. Do not edit files." --permission-mode dontAsk --allowedTools "Read,Bash(git log *),Bash(git diff *)" --max-turns 10 --output-format json >> "$HOME/logs/claude-daily.log" 2>&1',
        },
      ],
      source: { label: "Source : documentation d’Anthropic sur le mode headless", href: "https://code.claude.com/docs/en/headless" },
    },
    {
      kind: "text",
      title: "Permissions pour les exécutions sans surveillance",
      points: [
        "`dontAsk` plus une liste `--allowedTools` est le choix le plus verrouillé : tout ce qui n’est pas dans la liste est refusé.",
        "`auto` confie l’examen de chaque action à un classifieur plutôt qu’à vous. Anthropic précise que cela ne garantit pas la sécurité.",
        "`acceptEdits` valide les modifications de fichiers et les commandes de fichiers simples, mais pas les autres commandes shell.",
        "`bypassPermissions` saute les demandes et les contrôles de sécurité. Anthropic recommande de ne l’utiliser que dans des conteneurs ou VM isolés sans accès à Internet, car il n’offre aucune protection contre l’injection de prompt.",
        "Pour des règles qui s’appliquent à chaque exécution dans un projet, placez `permissions.allow` et `permissions.deny` dans `.claude/settings.json`. Les règles de refus l’emportent toujours.",
      ],
    },
    {
      kind: "text",
      title: "Options cloud : quand votre ordinateur est éteint",
      points: [
        "Sessions cloud : `claude --cloud \"<task>\"` tourne sur l’infrastructure d’Anthropic à partir de votre branche GitHub et continue avec le portable fermé. Envoyez des messages de suivi avec `claude -p \"...\" --cloud <session-id>`.",
        "Tâches planifiées dans le cloud : créées avec `/schedule` ou sur claude.ai/code, elles tournent selon un planning (au plus une fois par heure), via un appel API ou sur des événements GitHub. Pro, Max, Ultra, Team et Enterprise ; en research preview.",
        "GitHub Actions : `anthropics/claude-code-action@v1` avec un déclencheur `schedule`. Un token OAuth obtenu avec `claude setup-token` utilise votre abonnement ; une clé API est facturée au token.",
      ],
    },
    {
      kind: "steps",
      kicker: "Avec Crewmark",
      title: "Confiez un poste permanent à un agent en arrière-plan",
      text: [
        "Les tâches en arrière-plan, l’agent view et cron lancent tous un travail que vous avez déjà décidé. Crewmark donne plutôt à une session Claude Code un rôle dans la durée : elle se réveille au rythme d’une pulsation pendant les heures de travail, prend le ticket suivant sur un tableau et vous écrit quand elle est bloquée.",
      ],
      steps: [
        {
          title: "Transformez une session en employé",
          text: "Choisissez un rôle et un objectif chiffré, et lancez dans Claude Code la commande de configuration que Crewmark vous donne. Cette conversation devient l’employé.",
        },
        {
          title: "Laissez la pulsation lancer le travail",
          text: "Le daemon Crewmark réveille la session toutes les 15, 30 ou 60 minutes pendant ses heures de travail, avec l’abonnement que vous payez déjà, et la laisse tranquille en dehors.",
        },
        {
          title: "Assignez des tickets, répondez aux messages",
          text: "Ajoutez du travail sous forme de tickets sur le tableau ; l’employé les prend en charge, commente au fil de l’eau et vous sollicite quand il a besoin d’une relecture. Voir [ce qu’est un employé IA](/ai-employees).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Lancer Claude Code en headless avec claude -p" },
  mid: {
    title: "Vous voulez qu’il choisisse lui-même sa tâche suivante ?",
    text: "Crewmark réveille votre session Claude Code au rythme d’une pulsation et lui confie le ticket suivant du tableau, pendant les horaires de travail que vous définissez.",
    button: "Commencer",
  },
  faq: {
    title: "FAQ : agents Claude Code en arrière-plan",
    items: [
      {
        q: "Comment lancer Claude Code en arrière-plan ?",
        a: "Dans une session, appuyez sur Ctrl+B pour envoyer en arrière-plan une commande ou un sous-agent en cours. Pour lancer toute une session en arrière-plan, utilisez `claude --bg \"<prompt>\"`. Pour les scripts et cron, utilisez le mode headless : `claude -p \"<prompt>\"`.",
      },
      {
        q: "Qu’est-ce que le mode headless de Claude Code ?",
        a: "Lancer Claude Code avec `-p` (ou `--print`) : il prend un prompt, travaille sans l’interface interactive et se ferme, en affichant le résultat sous forme de texte, de JSON ou d’un flux d’événements JSON.",
      },
      {
        q: "Un agent en arrière-plan continue-t-il quand je ferme le terminal ?",
        a: "Les tâches en arrière-plan dans une session s’arrêtent quand Claude Code se ferme. Les sessions lancées avec `--bg` continuent après la fermeture du terminal, jusqu’à l’extinction de l’ordinateur. Les sessions cloud et les tâches planifiées dans le cloud continuent ordinateur éteint.",
      },
      {
        q: "Quel mode de permissions utiliser pour une exécution sans surveillance ?",
        a: "Commencez avec `--permission-mode dontAsk` et une liste `--allowedTools` contenant exactement ce dont la tâche a besoin. N’utilisez `bypassPermissions` que dans un conteneur ou une VM isolés sans accès à Internet.",
      },
      {
        q: "claude -p utilise-t-il mon abonnement Claude ?",
        a: "Il utilise la connexion active, sauf si vous passez `--bare`, qui ignore la connexion et exige une clé API. La documentation d’Anthropic ne précise pas comment les exécutions headless sont décomptées des limites d’utilisation d’un forfait.",
      },
      {
        q: "Comment suivre mes agents en arrière-plan ?",
        a: "Utilisez `/tasks` dans une session, `claude agents` pour les sessions lancées avec `--bg`, et le fichier de log ou la sortie JSON pour les exécutions headless.",
      },
    ],
  },
  cta: {
    title: "Confiez un poste permanent à Claude Code.",
    text: "Crewmark transforme une session Claude Code en employé IA doté d’un rôle, d’un objectif, d’horaires de travail et d’une pulsation.",
    button: "Commencer",
  },
  checked: "Vérifié dans la documentation Claude Code d’Anthropic le 2 novembre 2026.",
  disclaimer:
    "Crewmark est un produit indépendant, sans lien avec Anthropic et non approuvé par Anthropic. Claude et Claude Code sont des marques d’Anthropic.",
};
