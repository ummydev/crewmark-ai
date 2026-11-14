import type { GuideCopy } from "@/components/landing/guide-article";

// French translation of /blog/claude-code-vs-codex; the English master is src/content/blog/claude-code-vs-codex.ts.

const claudeDocs = "https://code.claude.com/docs/en/overview";

export const copy: GuideCopy = {
  meta: {
    title: "Claude Code vs Codex (2026) : tarifs, limites d’usage",
    description:
      "Claude Code vs OpenAI Codex en novembre 2026 : modèles, forfaits et tarifs, limites de 5 heures et hebdomadaires, CLAUDE.md vs AGENTS.md, sandbox, sous-agents, tâches planifiées et lequel choisir.",
  },
  breadcrumb: "Claude Code vs Codex",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-05" },
  hero: {
    kicker: "Blog · Claude Code · Codex",
    title: "Claude Code vs Codex : quel agent de codage choisir ?",
    lead: "Claude Code est l’agent de codage d’Anthropic ; Codex est celui d’OpenAI. Tous deux lisent votre dépôt, modifient des fichiers, exécutent des commandes et fonctionnent depuis un terminal, un IDE, une application de bureau, le web et votre téléphone. Ils diffèrent par les modèles, les forfaits, les limites, les réglages par défaut et l’ouverture. Cette comparaison couvre ce que coûte chacun, comment fonctionnent leurs limites d’usage, comment leurs fonctionnalités se comparent et lequel convient à quel type de travail, en novembre 2026.",
    cta: "Commencer",
    secondary: "Aller à la comparaison",
    secondaryHref: "#compare",
  },
  sections: [
    {
      kind: "table",
      id: "compare",
      title: "Claude Code vs Codex en un coup d’œil",
      headers: ["", "Claude Code", "Codex"],
      rows: [
        ["Développé par", "Anthropic", "OpenAI"],
        ["Modèle par défaut", "Claude Opus 5.5 ; Sonnet 5.5, Haiku 5.5 et Fable 5.1 disponibles", "GPT-6.1 Sol ; GPT-6 Astra, GPT-6.1 Terra et GPT-6 Luna disponibles"],
        ["Où il fonctionne", "Terminal, VS Code, JetBrains, application de bureau, claude.ai/code, applications mobiles Claude, Slack", "Terminal, VS Code, Cursor et Windsurf, application de bureau ChatGPT, chatgpt.com/codex, application mobile ChatGPT, Slack et Linear"],
        ["Forfait le moins cher qui l’inclut", "Claude Pro, 20 $/mois", "ChatGPT Free (limité), puis Go à 8 $/mois et Plus à 20 $/mois"],
        ["Open source", "Non : le dépôt est public, mais tous droits réservés", "La CLI, le SDK et l’App Server sont open source (Apache-2.0) ; l’extension IDE et le cloud ne le sont pas"],
        ["Fichier d’instructions", "CLAUDE.md (lit AGENTS.md s’il n’y a pas de CLAUDE.md)", "AGENTS.md"],
        ["Sandbox", "Optionnel pour les commandes shell", "Activé par défaut"],
        ["Tâches planifiées", "Tâches planifiées dans le cloud (aperçu), tâches planifiées sur le bureau, `/loop`", "Tâches planifiées dans l’application de bureau et dans le cloud"],
      ],
    },
    {
      kind: "table",
      title: "Tarifs : quels forfaits incluent chacun",
      text: [
        "Les deux sont fournis avec l’abonnement de chat de leur éditeur, et les deux peuvent fonctionner avec une clé d’API, facturée au token. Les prix sont mensuels, en dollars américains.",
      ],
      headers: ["Forfait Claude", "Prix", "Forfait ChatGPT", "Prix"],
      rows: [
        ["Free", "Pas de Claude Code", "Free", "0 $, GPT-6 Luna uniquement"],
        ["Pro", "20 $ (17 $ en facturation annuelle)", "Go", "8 $"],
        ["Max", "100 $", "Plus", "20 $"],
        ["Ultra", "200 $", "Pro", "100 $, 200 $ ou 500 $"],
        ["Team", "25 $ par siège (Standard), 125 $ (Premium)", "Business", "25 $ par utilisateur (20 $ en facturation annuelle)"],
        ["Enterprise", "20 $ par siège en facturation annuelle, plus l’usage aux tarifs de l’API", "Enterprise, Edu", "Contacter les ventes"],
      ],
    },
    {
      kind: "text",
      title: "Limites d’usage",
      text: [
        "Les deux utilisent une fenêtre glissante de 5 heures plus des limites hebdomadaires, et les deux partagent un seul quota entre le chat et le codage. Aucun ne publie les heures ou messages exacts pour chaque forfait.",
      ],
      points: [
        "Claude : Pro a une limite de 5 heures et une limite hebdomadaire. Max reçoit 5 fois l’usage de Pro. Ultra reçoit 10 fois Pro par semaine et, pour les comptes vérifiés, aucune limite de 5 heures. Le chat Claude, Claude Code et l’IDE puisent dans le même quota.",
        "Claude : si vous atteignez la limite de 5 heures en pleine tâche, Claude Code peut terminer l’étape en cours (une fois par semaine sur Pro, à chaque fois sur Max).",
        "Codex : OpenAI estime les messages locaux par tranche de 5 heures sur Plus selon le modèle, de 15–160 sur GPT-6.1 Sol à 350–3,000 sur GPT-6 Luna et 5–45 sur GPT-6 Astra. ChatGPT Pro n’a actuellement pas de limite de 5 heures ; des limites hebdomadaires peuvent s’appliquer.",
        "Codex : les tâches cloud et les revues de code GitHub utilisent le même quota, et le mode rapide en consomme 2,5 fois plus.",
        "Les deux permettent de continuer au-delà de la limite : Claude avec des crédits d’usage ou une clé d’API, Codex avec des crédits ou une clé d’API (la clé d’API couvre la CLI, le SDK et l’IDE, pas les fonctionnalités cloud).",
      ],
    },
    {
      kind: "table",
      title: "Les fonctionnalités côte à côte",
      headers: ["Fonctionnalité", "Claude Code", "Codex"],
      rows: [
        ["Instructions du projet", "`CLAUDE.md`, `.claude/rules/`, mémoire automatique", "`AGENTS.md`, `AGENTS.override.md`, 32 KiB combinés par défaut"],
        ["Configuration", "`settings.json`", "`config.toml`"],
        ["Sous-agents", "Oui, plus des agents en arrière-plan", "Oui : default, worker et explorer intégrés, plus des agents TOML personnalisés"],
        ["Hooks", "Oui", "Oui, activés par défaut"],
        ["Skills, plugins, MCP", "Oui", "Oui"],
        ["Mode plan", "Oui (Shift+Tab)", "Oui"],
        ["Modes d’autorisation", "Manuel, accepter les modifications, plan, auto (vérifié par un classifieur), bypass", "Demander l’approbation, approuver pour moi, accès complet, personnalisé"],
        ["Sandbox", "Optionnel : Seatbelt sur macOS, bubblewrap sur Linux ; pas sur Windows natif", "Activé par défaut, avec un sandbox Windows natif"],
        ["Travail en parallèle", "Sessions parallèles sur le bureau et le web, agents en arrière-plan", "Worktrees dans l’application de bureau, tâches cloud"],
        ["Revue de code", "`@claude review` sur Team et Enterprise ; `/code-review` en local sur tout forfait", "`@codex review` sur GitHub ; `/review` dans la CLI"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Comment choisir entre Claude Code et Codex",
      text: [
        "Il n’y a pas de vainqueur unique : chaque éditeur publie des benchmarks où son propre modèle est en tête, et ils évoluent à chaque version. Choisissez selon ce qui compte dans votre journée.",
      ],
      steps: [
        {
          title: "Partez de l’abonnement que vous payez déjà",
          text: "Si vous avez Claude Pro ou Max, Claude Code est inclus ; si vous avez ChatGPT Plus ou Pro, Codex l’est aussi. Essayer les deux coûte 40 $ par mois avec les forfaits d’entrée, et Codex fonctionne aussi sur ChatGPT Free et Go avec des limites plus basses.",
        },
        {
          title: "Adaptez les limites à votre durée de travail",
          text: "Pour de longues sessions chaque jour, comparez les forfaits supérieurs : Claude Ultra (200 $) n’a pas de limite de 5 heures pour les comptes vérifiés, et ChatGPT Pro n’en a pas actuellement. Pour un usage occasionnel, les forfaits à 20 $ de l’un ou l’autre suffisent.",
        },
        {
          title: "Décidez ce que vous voulez isoler dans un sandbox",
          text: "Codex exécute les commandes dans un sandbox par défaut, y compris sur Windows. Claude Code demande avant d’agir par défaut et propose un sandbox que vous activez, ainsi qu’un mode auto où un classifieur approuve les actions sûres.",
        },
        {
          title: "Vérifiez où travaille votre équipe",
          text: "Claude Code a un plugin JetBrains et fonctionne depuis Slack ; Codex s’intègre à Cursor, Windsurf, Slack et Linear. Les deux fonctionnent dans VS Code, sur le web et sur mobile.",
        },
        {
          title: "Gardez vos instructions portables",
          text: "Écrivez les règles de votre projet dans AGENTS.md et importez-le depuis CLAUDE.md avec `@AGENTS.md` ; les deux agents lisent alors le même fichier et changer ne coûte rien. Voir le [guide CLAUDE.md](/blog/claude-md).",
        },
      ],
      source: { label: "Sources : documentation de Claude Code et de Codex", href: claudeDocs },
    },
    {
      kind: "text",
      title: "Et Cursor, Gemini CLI et OpenCode ?",
      text: [
        "Cursor est un éditeur avec son propre agent, et il peut aussi héberger les extensions Claude Code et Codex. Gemini CLI et OpenCode sont des agents de terminal comme ces deux-là ; OpenCode est open source et fonctionne avec de nombreux fournisseurs de modèles. Tous lisent AGENTS.md, donc la configuration portable ci-dessus s’applique aussi.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Avec Crewmark",
      title: "Utilisez les deux : donnez un rôle à chaque agent",
      text: [
        "Crewmark ne vous oblige pas à choisir. Il transforme une session Claude Code, Codex, DeepSeek Harness ou OpenCode en employé IA avec un rôle, un objectif et des horaires de travail, la réveille avec une pulsation (heartbeat) et lui confie des issues d’un tableau partagé. Un employé peut tourner sur Claude Code et un autre sur Codex dans le même projet.",
      ],
      steps: [
        {
          title: "Transformez une session en employé",
          text: "Choisissez un rôle, par exemple ingénieur logiciel ou spécialiste SEO, écrivez son objectif sous forme de chiffre et lancez la commande d’installation dans Claude Code ou Codex.",
        },
        {
          title: "Laissez la pulsation lancer le travail",
          text: "Pendant ses horaires de travail, l’employé se réveille toutes les 15, 30 ou 60 minutes dans la même conversation. Voir [comment rendre Claude Code proactif](/proactive-claude-code) et [comment rendre Codex proactif](/proactive-codex).",
        },
        {
          title: "Assignez des issues et répondez à ses messages",
          text: "Mettez le travail sur le tableau ; chaque employé prend ce qui correspond à son rôle, commente au fil de l’eau et vous écrit quand il a besoin d’une décision. Lisez [ce qu’est un employé IA](/ai-employees).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Choisir entre Claude Code et Codex" },
  mid: {
    title: "Vous payez déjà Claude ou ChatGPT ?",
    text: "Crewmark transforme Claude Code et Codex en employés IA avec une pulsation et un tableau d’issues, avec l’abonnement que vous avez déjà.",
    button: "Commencer",
  },
  faq: {
    title: "FAQ Claude Code vs Codex",
    items: [
      {
        q: "Claude Code est-il meilleur que Codex ?",
        a: "Aucun n’est meilleur pour tout le monde. Ce sont deux agents capables, avec sous-agents, hooks, skills, MCP et mode plan. Choisissez selon l’abonnement que vous avez, les limites dont vous avez besoin, les réglages de sandbox par défaut que vous voulez et les outils de votre équipe.",
      },
      {
        q: "Lequel est le moins cher, Claude Code ou Codex ?",
        a: "Codex a l’entrée la moins chère : il est inclus dans ChatGPT Free (limité) et Go à 8 $ par mois. Claude Code commence avec Claude Pro à 20 $. À 20 $ par mois, Claude Pro et ChatGPT Plus incluent chacun leur agent.",
      },
      {
        q: "Quelles sont les limites d’usage de Claude Code et de Codex ?",
        a: "Les deux utilisent une fenêtre de 5 heures plus des limites hebdomadaires partagées avec le chat. Claude Max donne 5 fois Pro et Ultra 10 fois Pro par semaine. OpenAI estime 15–160 messages GPT-6.1 Sol par tranche de 5 heures sur Plus. Claude Ultra (vérifié) et ChatGPT Pro n’ont actuellement pas de limite de 5 heures.",
      },
      {
        q: "Quels modèles utilisent Claude Code et Codex ?",
        a: "Claude Code utilise par défaut Claude Opus 5.5, avec Sonnet 5.5, Haiku 5.5 et Fable 5.1 disponibles. Codex utilise par défaut GPT-6.1 Sol, avec GPT-6 Astra, GPT-6.1 Terra et GPT-6 Luna disponibles.",
      },
      {
        q: "Codex est-il open source ? Et Claude Code ?",
        a: "La CLI de Codex est open source sous Apache-2.0 ; son extension IDE et son cloud ne le sont pas. Le dépôt de Claude Code est public mais pas open source : tous droits réservés, utilisation selon les conditions commerciales d’Anthropic.",
      },
      {
        q: "Claude Code et Codex peuvent-ils partager les mêmes instructions ?",
        a: "Oui. Écrivez-les dans AGENTS.md, que Codex lit, et mettez `@AGENTS.md` dans CLAUDE.md pour que Claude Code lise le même fichier.",
      },
      {
        q: "Puis-je utiliser Claude Code et Codex ensemble ?",
        a: "Oui. Beaucoup de développeurs gardent les deux et changent selon la tâche. Avec Crewmark, chacun peut être un employé IA avec son propre rôle, qui prend des issues du même tableau avec une pulsation.",
      },
    ],
  },
  cta: {
    title: "Mettez Claude Code et Codex dans la même équipe.",
    text: "Crewmark transforme des sessions Claude Code, Codex et DeepSeek Harness en employés IA dotés de rôles, d’objectifs, d’horaires de travail et d’une pulsation.",
    button: "Commencer",
  },
  checked: "Vérifié dans la documentation de Claude Code, claude.com/pricing, la documentation de Codex sur learn.chatgpt.com et les deux dépôts GitHub le 5 novembre 2026.",
  disclaimer:
    "Crewmark est un produit indépendant, sans lien avec Anthropic ni OpenAI et non approuvé par elles. Claude et Claude Code sont des marques d’Anthropic ; ChatGPT et Codex sont des marques d’OpenAI.",
};
