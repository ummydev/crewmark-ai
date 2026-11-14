import type { GuideCopy } from "@/components/landing/guide-article";

// French translation of /blog/claude-code-hooks; the English master is src/content/blog/claude-code-hooks.ts.

const docs = "https://code.claude.com/docs/en/hooks-guide";

const notify = `{
  "hooks": {
    "Notification": [
      {
        "matcher": "",
        "hooks": [
          {
            "type": "command",
            "command": "osascript -e 'display notification \\"Claude Code needs your attention\\" with title \\"Claude Code\\"'"
          }
        ]
      }
    ]
  }
}`;

const format = `{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Edit|Write",
        "hooks": [
          { "type": "command", "command": "jq -r '.tool_input.file_path' | xargs npx prettier --write" }
        ]
      }
    ]
  }
}`;

const block = `#!/bin/bash
# .claude/hooks/block-drop-table.sh, exécuté comme hook PreToolUse sur Bash
INPUT=$(cat)
COMMAND=$(echo "$INPUT" | jq -r '.tool_input.command')

if echo "$COMMAND" | grep -q "drop table"; then
  echo "Blocked: dropping tables is not allowed" >&2  # devient le retour adressé à Claude
  exit 2                                               # 2 = bloquer l’action
fi

exit 0  # aucune décision : le flux d’autorisations normal s’applique`;

const stop = `{
  "hooks": {
    "Stop": [
      {
        "hooks": [
          {
            "type": "prompt",
            "prompt": "Check if all tasks are complete. If not, respond with {\\"ok\\": false, \\"reason\\": \\"what remains to be done\\"}."
          }
        ]
      }
    ]
  }
}`;

export const copy: GuideCopy = {
  meta: {
    title: "Hooks Claude Code : événements et exemples | Crewmark AI",
    description:
      "Les hooks de Claude Code expliqués : événements du cycle de vie, où les configurer, codes de sortie et sortie JSON, et des exemples prêts à copier pour les notifications, le formatage automatique, le blocage de commandes et les hooks Stop.",
  },
  breadcrumb: "Guide des hooks Claude Code",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-06" },
  hero: {
    kicker: "Blog · Claude Code",
    title: "Hooks Claude Code : événements, exemples et fonctionnement",
    lead: "Les hooks de Claude Code sont des commandes qui s’exécutent automatiquement à des moments précis d’une session : avant l’exécution d’un outil, après la modification d’un fichier, quand Claude termine, quand il attend votre réponse. Contrairement aux instructions du CLAUDE.md, que Claude suit en général, un hook s’exécute toujours : c’est donc le moyen d’imposer des règles et d’automatiser les corvées. Ce guide présente les événements, l’endroit où configurer les hooks, la façon dont les codes de sortie et le JSON déterminent ce qui se passe, quatre exemples prêts à l’emploi et les nouveaux types de hooks : prompt, agent et HTTP.",
    cta: "Commencer",
    secondary: "Aller aux exemples",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "table",
      id: "events",
      title: "Les événements des hooks Claude Code",
      text: [
        "La référence recense plus de trente événements. Voici ceux qu’utilisent la plupart des hooks ; un `matcher` limite un hook à certains outils, fichiers ou sources.",
      ],
      headers: ["Événement", "Quand il se déclenche", "Usage courant"],
      rows: [
        ["`SessionStart`", "Une session démarre ou reprend", "Charger du contexte, vérifier l’environnement"],
        ["`UserPromptSubmit`", "Vous envoyez un prompt, avant que Claude ne le voie", "Ajouter du contexte, bloquer les prompts sensibles"],
        ["`PreToolUse`", "Avant l’exécution d’un appel d’outil ; peut le bloquer", "Bloquer les commandes dangereuses, protéger des fichiers"],
        ["`PermissionRequest`", "Un appel d’outil nécessite une décision d’autorisation", "Approuver ou refuser automatiquement certaines demandes"],
        ["`PostToolUse`", "Après la réussite d’un appel d’outil", "Formater, linter ou tester les fichiers modifiés"],
        ["`Notification`", "Claude Code envoie une notification", "Alertes sur le bureau quand Claude a besoin de vous"],
        ["`SubagentStart`, `SubagentStop`", "Un subagent démarre ou se termine", "Journaliser ou vérifier le travail délégué"],
        ["`Stop`", "Claude a fini de répondre", "Vérifier que la tâche est vraiment terminée"],
        ["`PreCompact`, `PostCompact`", "Autour de la compaction du contexte", "Sauvegarder ou réinjecter le contexte essentiel"],
        ["`FileChanged`, `CwdChanged`", "Un fichier surveillé ou le répertoire de travail change", "Recharger l’environnement, reformater des fichiers"],
        ["`SessionEnd`", "La session se termine", "Faire le ménage, écrire un journal"],
      ],
    },
    {
      kind: "table",
      title: "Où placer les hooks",
      headers: ["Emplacement", "Portée", "Partagé"],
      rows: [
        ["`~/.claude/settings.json`", "Tous vos projets", "Non"],
        ["`.claude/settings.json`", "Un projet", "Oui, à committer"],
        ["`.claude/settings.local.json`", "Un projet", "Non, ignoré par git"],
        ["Paramètres de stratégie gérés", "Toute l’organisation", "Contrôlé par l’administrateur"],
        ["`hooks/hooks.json` d’un plugin", "Tant que le plugin est activé", "Oui, avec le plugin"],
        ["Frontmatter d’une skill ou d’un subagent", "Une fois la skill invoquée, ou pendant l’exécution du subagent", "Oui, dans le fichier"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Exemples de hooks Claude Code, étape par étape",
      text: [
        "Ajoutez chaque bloc sous la clé `hooks` d’un fichier de paramètres ; si le fichier contient déjà un objet `hooks`, ajoutez l’événement comme clé voisine au lieu de le remplacer. Lancez `/hooks` pour vérifier que Claude Code l’a chargé. Vous pouvez aussi demander à Claude d’écrire le hook pour vous.",
      ],
      steps: [
        {
          title: "Recevoir une notification sur le bureau quand Claude a besoin de vous",
          text: "Un hook `Notification` dans `~/.claude/settings.json`. Celui-ci utilise `osascript` sur macOS ; utilisez `notify-send` sous Linux ou PowerShell sous Windows.",
          code: notify,
        },
        {
          title: "Formater automatiquement chaque fichier que Claude modifie",
          text: "Un hook `PostToolUse` avec le matcher `Edit|Write` lit avec `jq` le chemin modifié dans le JSON reçu sur stdin et lance Prettier dessus. Placez-le dans `.claude/settings.json` pour que toute l’équipe en profite.",
          code: format,
        },
        {
          title: "Bloquer une commande dangereuse",
          text: "Un hook `PreToolUse` sur `Bash` exécute ce script. Le code de sortie 2 bloque l’appel, et ce que vous écrivez sur stderr devient le retour adressé à Claude, qui peut alors changer de cap. Sortir avec 0 signifie aucune décision : les autorisations normales s’appliquent toujours.",
          code: block,
        },
        {
          title: "Faire travailler Claude jusqu’à ce que la tâche soit finie",
          text: "Un hook `Stop` de type `prompt` demande à un modèle si tout est terminé. S’il répond `ok: false`, Claude continue de travailler avec le `reason` comme instruction suivante. C’est l’exemple classique de hook Stop.",
          code: stop,
        },
      ],
      source: { label: "Source : documentation de Claude Code, Automate actions with hooks", href: docs },
    },
    {
      kind: "text",
      title: "Comment les hooks décident de ce qui se passe",
      points: [
        "Entrée : chaque hook reçoit l’événement en JSON sur stdin, par exemple le nom de l’outil et `tool_input`, l’ID de session et `cwd`.",
        "Sortie 0 : aucune objection. Pour quelques événements, comme `SessionStart` et `UserPromptSubmit`, le texte écrit sur stdout est ajouté au contexte de Claude.",
        "Sortie 2 : blocage, lorsque l’événement le permet. Stderr est renvoyé à Claude ou à vous, selon l’événement.",
        "JSON sur stdout : un contrôle plus fin, comme `hookSpecificOutput` avec une décision d’autorisation, `updatedInput` pour réécrire l’entrée d’un outil, ou `additionalContext`.",
        "Autres codes de sortie : en général une erreur non bloquante, sauf si le hook définit `onFailure: \"block\"`.",
        "Les hooks correspondant à un même événement s’exécutent en parallèle.",
      ],
    },
    {
      kind: "table",
      title: "Hooks command, prompt, agent et HTTP",
      headers: ["Type", "Ce qui s’exécute", "Délai par défaut"],
      rows: [
        ["`command`", "Une commande shell", "10 minutes"],
        ["`http`", "Un POST du JSON de l’événement vers une URL ; le corps de la réponse fonctionne comme la sortie d’une commande", "10 minutes"],
        ["`mcp_tool`", "Un outil d’un serveur MCP configuré", "10 minutes"],
        ["`prompt`", "Un unique appel au modèle qui répond `ok` ou non", "30 secondes"],
        ["`agent`", "Un subagent qui peut lire des fichiers et lancer des outils avant de décider (expérimental)", "60 secondes"],
      ],
    },
    {
      kind: "text",
      title: "Hooks, skills ou CLAUDE.md, et autres pièges",
      points: [
        "Le CLAUDE.md et les [skills](/blog/claude-code-skills) sont des instructions que Claude suit en général ; les hooks s’exécutent toujours. Mettez dans un hook tout ce qui ne doit jamais être sauté.",
        "`PostToolUse` ne peut pas annuler une action déjà exécutée ; utilisez `PreToolUse` pour l’empêcher.",
        "`Stop` se déclenche chaque fois que Claude termine une réponse, pas seulement à la fin d’une tâche, et pas lors d’une interruption par l’utilisateur.",
        "Les hooks ne peuvent ni lancer de commandes slash ni appeler eux-mêmes des outils ; ils ne répondent que par codes de sortie, stdout, stderr ou JSON.",
        "`\"disableAllHooks\": true` désactive les hooks ; les hooks gérés continuent de s’exécuter, sauf si les paramètres gérés les désactivent aussi.",
        "Les hooks sont propres à votre installation de Claude Code. Les contrôles à l’échelle de l’organisation sur tous les produits Claude relèvent d’une autre fonctionnalité : les [inference hooks de Claude](/blog/claude-inference-hooks).",
        "Un hook PreToolUse qui filtre la sortie des tests est aussi l’un des meilleurs moyens de [réduire la consommation de tokens](/blog/reduce-claude-code-token-usage).",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Avec Crewmark",
      title: "Les hooks tiennent Claude Code dans le droit chemin. Crewmark le fait travailler.",
      text: [
        "Les hooks sont ce qui rend sûr un agent laissé sans surveillance : formatage, tests et garde-fous s’exécutent à chaque fois. Crewmark transforme une session Claude Code, Codex, DeepSeek Harness ou OpenCode en employé IA avec un rôle, un objectif et des horaires de travail, et la réveille à chaque pulsation pour qu’elle prenne la prochaine issue d’un tableau, avec les hooks de votre projet en place.",
      ],
      steps: [
        {
          title: "Committez vos hooks",
          text: "Les hooks de `.claude/settings.json` se chargent dans la session de l’employé comme dans la vôtre : ses modifications sont formatées et ses commandes risquées bloquées.",
        },
        {
          title: "Laissez la pulsation lancer le travail",
          text: "Pendant ses horaires de travail, l’employé se réveille toutes les 15, 30 ou 60 minutes dans la même conversation ; voir [comment rendre Claude Code proactif](/proactive-claude-code).",
        },
        {
          title: "Ne répondez qu’à ce qui a besoin de vous",
          text: "Il commente ses issues et vous écrit quand il a besoin d’une décision. Découvrez [ce qu’est un employé IA](/ai-employees).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Ajouter des hooks à Claude Code" },
  mid: {
    title: "Vos hooks s’exécutent à chaque fois. Et votre agent ?",
    text: "Crewmark réveille Claude Code avec une pulsation, un rôle, un objectif et un tableau d’issues, avec l’abonnement que vous payez déjà.",
    button: "Commencer",
  },
  faq: {
    title: "FAQ hooks Claude Code",
    items: [
      {
        q: "Que sont les hooks de Claude Code ?",
        a: "Des commandes, appels HTTP ou vérifications par un modèle, définis par l’utilisateur, que Claude Code exécute automatiquement à certains événements du cycle de vie, par exemple avant l’exécution d’un outil ou quand Claude termine. Ils offrent un contrôle déterministe au lieu de compter sur Claude pour se souvenir d’une instruction.",
      },
      {
        q: "Où configurer les hooks de Claude Code ?",
        a: "Sous `hooks` dans `~/.claude/settings.json` (tous les projets), `.claude/settings.json` (partagé avec l’équipe) ou `.claude/settings.local.json` (pour vous seul). Les plugins, les skills et les subagents peuvent aussi embarquer des hooks. Lancez `/hooks` pour voir ce qui est chargé.",
      },
      {
        q: "Comment bloquer une commande avec un hook ?",
        a: "Utilisez un hook `PreToolUse` avec le matcher `Bash`. Lisez la commande dans le JSON reçu sur stdin, puis sortez avec le code 2 et une raison sur stderr pour la bloquer ; Claude voit la raison et s’adapte.",
      },
      {
        q: "Qu’est-ce qu’un hook Stop ?",
        a: "Un hook sur l’événement `Stop`, qui se déclenche quand Claude a fini de répondre. Un hook Stop de type prompt peut vérifier si la tâche est terminée et, sinon, renvoyer Claude au travail avec une raison.",
      },
      {
        q: "Hooks ou skills : quelle différence ?",
        a: "Les skills sont des instructions et des fichiers que Claude charge quand ils sont pertinents et qu’il suit en général. Les hooks sont du code que Claude Code exécute à chaque déclenchement d’un événement, quoi que décide Claude.",
      },
      {
        q: "Pourquoi mon hook ne se déclenche-t-il pas ?",
        a: "Vérifiez qu’il apparaît dans `/hooks`, que le nom de l’événement et le matcher sont orthographiés exactement, que le script est exécutable et que la sortie de votre profil shell ne corrompt pas son JSON. Lancez Claude Code avec un journal de débogage pour voir ce que chaque hook a fait.",
      },
      {
        q: "Les hooks de Claude Code sont-ils la même chose que les inference hooks ?",
        a: "Non. Les hooks de Claude Code s’exécutent sur votre machine, pour vos sessions. Les inference hooks sont une fonctionnalité de Claude Enterprise qui envoie chaque prompt de l’organisation à un serveur de sécurité avant que Claude ne s’exécute.",
      },
    ],
  },
  cta: {
    title: "Les garde-fous dans les hooks, le travail sur un tableau.",
    text: "Crewmark transforme les sessions Claude Code, Codex et DeepSeek Harness en employés IA avec des rôles, des objectifs, des horaires de travail et une pulsation.",
    button: "Commencer",
  },
  checked: "Vérifié dans la documentation de Claude Code (guide et référence des hooks) le 6 novembre 2026.",
  disclaimer:
    "Crewmark est un produit indépendant, sans lien avec Anthropic et non approuvé par elle. Claude et Claude Code sont des marques d’Anthropic.",
};
