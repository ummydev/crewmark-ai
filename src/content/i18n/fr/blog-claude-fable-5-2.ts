import type { GuideCopy } from "@/components/landing/guide-article";

// fr translation of /blog/claude-fable-5-2; the English master is src/content/blog/claude-fable-5-2.ts.

const docs = "https://platform.claude.com/docs/en/models/fable-5-2/whats-new-fable-5-2";

const claudeCode = `# Mettez à jour Claude Code, puis choisissez le modèle de cette session
claude update
/model                       # choisissez Claude Fable 5.2

# Ou lancez directement une session avec ce modèle
claude --model claude-fable-5-2

# Mode rapide sur Fable 5.2 (Claude Code v2.1.321 ou plus récent)
/fast`;

const api = `# Claude API : changez l’ID du modèle
model = "claude-fable-5-1"  # avant
model = "claude-fable-5-2"  # après

# La réflexion adaptative est toujours active ; réglez la profondeur avec effort
# low | medium | high (par défaut) | xhigh | max`;

export const copy: GuideCopy = {
  meta: {
    title: "Claude Fable 5.2 : benchmarks, prix, vs Opus 5.5",
    description:
      "Claude Fable 5.2, sorti le 9 novembre 2026 : nouveautés, benchmarks d’Anthropic, prix de l’API ($8/$40) et mode rapide, contexte de 1M, Fable 5.2 vs Opus 5.5, vs Fable 5.1 et vs Mythos 5.2, et comment l’utiliser dans Claude Code.",
  },
  breadcrumb: "Claude Fable 5.2",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-10" },
  hero: {
    kicker: "Blog · Modèles Claude",
    title: "Claude Fable 5.2 : nouveautés, benchmarks, prix et comparaison avec Opus 5.5",
    lead: "Anthropic a sorti Claude Fable 5.2 le 9 novembre 2026, en même temps que Claude Mythos 5.2, le même modèle avec des garde-fous différents. Anthropic présente Fable 5.2 comme son modèle disponible pour tous le plus performant pour le travail technique : il est plus rapide et moins cher que Fable 5.1, obtient de meilleurs scores aux benchmarks de code et d’agents d’Anthropic et ajoute un mode rapide. Ce guide couvre ce qui change, les chiffres, le coût, quand le préférer à Opus 5.5 et comment l’utiliser dans Claude Code.",
    cta: "Commencer",
    secondary: "Fable 5.2 vs Opus 5.5",
    secondaryHref: "#vs-opus",
  },
  sections: [
    {
      kind: "table",
      id: "at-a-glance",
      title: "Claude Fable 5.2 en un coup d’œil",
      headers: ["", "Claude Fable 5.2"],
      rows: [
        ["Sortie", "9 novembre 2026 (après Fable 5 en juin et Fable 5.1 en septembre)"],
        ["ID du modèle dans l’API", "`claude-fable-5-2`"],
        ["Prix", "$8 par million de tokens en entrée, $40 par million en sortie (Fable 5.1 : $10 et $50)"],
        ["Mode rapide", "Sortie jusqu’à 2,5x plus rapide, à $16 en entrée et $80 en sortie par million de tokens"],
        ["Fenêtre de contexte", "1M tokens, avec 128K tokens de sortie au maximum"],
        ["Réflexion", "Réflexion adaptative, toujours active ; effort `low`, `medium`, `high` (par défaut), `xhigh`, `max`"],
        ["Date limite des connaissances", "Juin 2026"],
        ["Vitesse", "Sortie jusqu’à 30 % plus rapide que Fable 5.1, selon Anthropic"],
        ["Qui peut l’utiliser", "Claude Pro, Max, Ultra, Team et Enterprise ; tous les clients de la Claude API ; Amazon Bedrock, Google Cloud et Microsoft Foundry"],
      ],
    },
    {
      kind: "text",
      title: "Les nouveautés de Fable 5.2",
      points: [
        "Meilleur sur le travail technique long et difficile : selon Anthropic, il peut mener des tâches d’ingénierie ambiguës pendant des jours et coordonner des centaines, voire plus d’un millier, de subagents.",
        "Moins cher : l’entrée et la sortie coûtent 20 % de moins que Fable 5.1, et le traitement par lots est à moitié prix ($4 et $20).",
        "Plus rapide : une sortie jusqu’à 30 % plus rapide que Fable 5.1, et un mode rapide encore jusqu’à 2,5x plus rapide, pour le double du prix.",
        "Robotique : Anthropic annonce un bien meilleur contrôle de robots physiques, y compris sur des tâches pour lesquelles il n’a pas été entraîné.",
        "Garde-fous : des protections en cybersécurité et en biologie sont intégrées. Les requêtes cyber signalées sont redirigées vers Claude Opus 4.8 et les requêtes de biologie signalées vers Claude Opus 5.",
        "Conservation des données : par défaut, les modèles Fable imposent une conservation de 30 jours pour la surveillance de sécurité ; la conservation zéro nécessite l’autorisation d’Anthropic.",
      ],
    },
    {
      kind: "table",
      id: "benchmarks",
      title: "Benchmarks de Claude Fable 5.2",
      text: [
        "D’après la page Fable d’Anthropic, garde-fous activés sauf mention contraire. Ce sont les chiffres d’Anthropic, pas des tests indépendants.",
      ],
      headers: ["Benchmark", "Fable 5.2", "Fable 5.1", "Opus 5.5", "GPT-6 Astra", "Gemini 4 Carbon"],
      rows: [
        ["FrontierCode 2.0 (code agentique)", "49.1% (xhigh)", "32.4% (xhigh)", "45.5%", "42.8%", "41.1%"],
        ["FrontierSWE v2 (code agentique)", "69.9%", "56.3%", "62.3%", "65.5%", "61.2%"],
        ["Terminal-Bench-Science 0.1", "74.6%", "52.6%", "58.7%", "68.1%", "64.8%"],
        ["OSWorld 2.1 (utilisation d’ordinateur)", "89.3%", "83.5%", "87.2%", "79.5%", "81.5%"],
        ["AutomationBench (workflows métier)", "51.4%", "31.4%", "42.5%", "41.4%", "53.9%"],
        ["Remote Labor Index", "41.3%", "17.9%", "21.3%", "20.8%", "-"],
        ["Humanity's Last Exam (avec outils)", "74.2%", "65.6%", "67.7%", "57.2%", "-"],
        ["RoboDojo Sim (robotique, mené par Anthropic)", "64.9%", "27.6%", "39.4%", "29.8%", "-"],
      ],
    },
    {
      kind: "table",
      id: "pricing",
      title: "Prix de Claude Fable 5.2",
      text: [
        "Prix de l’API par million de tokens, d’après la documentation d’Anthropic au 10 novembre 2026. Sur les forfaits Claude, Fable 5.2 puise dans l’usage de votre abonnement : sur Pro et les sièges Team standard, il peut consommer jusqu’à 50 % de vos limites hebdomadaires. Le mode rapide dans Claude Code est facturé sur les crédits d’usage.",
      ],
      headers: ["Modèle", "Entrée", "Sortie", "Lectures de cache", "Lots (entrée / sortie)"],
      rows: [
        ["Claude Fable 5.2", "$8", "$40", "$0.20", "$4 / $20"],
        ["Claude Fable 5.2, mode rapide", "$16", "$80", "-", "-"],
        ["Claude Fable 5.1", "$10", "$50", "$0.25", "$5 / $25"],
        ["Claude Opus 5.5", "$4", "$20", "$0.20", "$2 / $10"],
        ["Claude Sonnet 5.5", "$2", "$10", "$0.10", "$1 / $5"],
      ],
    },
    {
      kind: "text",
      id: "vs-opus",
      title: "Fable 5.2 vs Opus 5.5 : lequel utiliser ?",
      text: [
        "Anthropic conseille lui-même de commencer avec Opus 5.5 pour la plupart des travaux et de passer à Fable 5.2 quand Opus 5.5 avec un effort plus élevé ne suffit toujours pas.",
      ],
      points: [
        "Prix : Fable 5.2 coûte deux fois plus cher par token ($8 et $40 contre $4 et $20), et son effort par défaut est `high` alors que celui d’Opus 5.5 est `medium` : il a donc aussi tendance à réfléchir davantage par requête.",
        "Capacités : dans les tableaux d’Anthropic, Fable 5.2 devance Opus 5.5 en code agentique (69.9% contre 62.3% sur FrontierSWE v2), en sciences et sur le travail de longue haleine ; l’écart est plus faible en utilisation d’ordinateur (89.3% contre 87.2% sur OSWorld 2.1).",
        "Coût par tâche : selon Anthropic, Fable 5.2 en effort `high` obtient à peu près le même score qu’Opus 5.5 en `max` sur FrontierCode 2.0 (45.3% contre 45.5%) pour environ la moitié du coût par tâche ; sur les tâches difficiles, ce n’est donc pas forcément le choix le plus cher.",
        "Changer en cours de conversation : seuls Fable 5.2 et Mythos 5.2 peuvent lire la réflexion de Fable 5.2 ; passer une conversation de Fable 5.2 à Opus 5.5 lui fait perdre ce raisonnement pour les tours exécutés sur Opus.",
        "En pratique : Opus 5.5 au quotidien ; Fable 5.2 pour les jobs d’agent de longue durée, les bugs difficiles et le travail qui échoue sur Opus.",
      ],
    },
    {
      kind: "text",
      id: "vs-mythos",
      title: "Fable 5.2 vs Mythos 5.2, et vs Fable 5.1",
      points: [
        "Mythos 5.2 est le même modèle avec moins de restrictions sur le travail en cybersécurité et en biologie. Il est réservé aux organisations vérifiées via les programmes d’Anthropic, comme le Cyber Verification Program, et coûte le même prix.",
        "Dans les tableaux cyber et biologie d’Anthropic, Mythos 5.2 obtient de meilleurs scores que Fable 5.2 avec ses garde-fous activés ; pour tout le reste, c’est le même modèle.",
        "Face à Fable 5.1, Fable 5.2 est moins cher, jusqu’à 30 % plus rapide et mieux noté dans tous les tableaux d’Anthropic, par exemple 49.1% contre 32.4% sur FrontierCode 2.0 et 41.3% contre 17.9% sur le Remote Labor Index.",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Comment utiliser Claude Fable 5.2 dans Claude Code",
      steps: [
        {
          title: "Mettez à jour et choisissez le modèle",
          text: "Mettez à jour Claude Code, puis lancez `/model` et choisissez Claude Fable 5.2, ou démarrez une session avec `--model claude-fable-5-2`. Sur un forfait Claude, il faut Pro, Max, Ultra, Team ou Enterprise.",
          code: claudeCode,
        },
        {
          title: "Laissez l’effort sur high pour commencer",
          text: "Selon Anthropic, l’essentiel du gain est déjà là en `high`. Passez à `xhigh` pour votre travail de code le plus difficile et le plus long une fois que vous avez constaté que ça aide ; gardez `max` pour les rares cas où le temps et les tokens ne comptent pas.",
        },
        {
          title: "Activez le mode rapide quand la vitesse compte",
          text: "Lancez `/fast` sur Fable 5.2 (Claude Code v2.1.321 ou plus récent). Il est jusqu’à 2,5x plus rapide pour le double du prix ; sur les abonnements, il est payé avec les crédits d’usage, pas avec les limites de votre forfait, et il n’est pas disponible sur Bedrock, Vertex ni Foundry.",
        },
        {
          title: "Vous appelez l’API ? Vérifiez les changements incompatibles",
          text: "La réflexion adaptative est toujours active (`budget_tokens` et `disabled` renvoient une erreur 400), l’utilisation forcée d’outils n’est pas prise en charge, modifier des tours précédents invalide les blocs de réflexion, et l’ancien outil `computer_20251124` est remplacé par le jeu d’outils d’utilisation d’ordinateur. Claude Code et l’Agent SDK s’en chargent pour vous.",
          code: api,
        },
      ],
      source: { label: "Source : documentation d’Anthropic, What's new in Claude Fable 5.2", href: docs },
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Avec Crewmark",
      title: "Confiez un job de longue durée à Fable 5.2",
      text: [
        "Fable 5.2 est conçu pour un travail qui dure des heures. Crewmark transforme une session Claude Code en employé IA doté d’un rôle, d’un objectif, d’horaires de travail et d’une pulsation ; l’employé utilise le modèle sur lequel tourne sa session, vous pouvez donc mettre Fable 5.2 sur les jobs les plus difficiles et garder Opus 5.5 pour le reste.",
      ],
      steps: [
        {
          title: "Choisissez un rôle",
          text: "Par exemple l’[ingénieur logiciel IA](/ai-employees/software-engineer) pour un backlog d’issues difficiles.",
        },
        {
          title: "Réglez le modèle dans sa session",
          text: "Lancez `/model` dans la conversation Claude Code de l’employé et choisissez Fable 5.2.",
        },
        {
          title: "Laissez-le travailler",
          text: "Il se réveille au rythme de sa pulsation et avance sur le tableau ; voir [comment faire tourner Claude Code 24 h/24, 7 j/7](/blog/run-claude-code-24-7).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Utiliser Claude Fable 5.2 dans Claude Code" },
  mid: {
    title: "Vous voulez que Fable 5.2 traite vos issues les plus difficiles selon un planning ?",
    text: "Les employés Crewmark tournent sur votre propre Claude Code, se réveillent au rythme d’une pulsation et prennent l’issue suivante sur un tableau.",
    button: "Commencer",
  },
  faq: {
    title: "FAQ sur Claude Fable 5.2",
    items: [
      {
        q: "Quand Claude Fable 5.2 est-il sorti ?",
        a: "Le 9 novembre 2026, en même temps que Claude Mythos 5.2. Il succède à Fable 5 (9 juin 2026) et à Fable 5.1 (1er septembre 2026).",
      },
      {
        q: "Combien coûte Claude Fable 5.2 ?",
        a: "Sur l’API, $8 par million de tokens en entrée et $40 par million de tokens en sortie, contre $10 et $50 pour Fable 5.1. Le mode rapide coûte $16 et $80 ; les lots, $4 et $20. Sur les forfaits Claude, il est inclus à partir de Pro ; sur Pro et les sièges Team standard, il peut consommer jusqu’à 50 % des limites d’usage hebdomadaires.",
      },
      {
        q: "Fable 5.2 est-il meilleur qu’Opus 5.5 ?",
        a: "D’après les benchmarks d’Anthropic, oui pour le code agentique, les sciences et le travail de longue haleine. Il coûte aussi deux fois plus cher par token, et Anthropic recommande toujours Opus 5.5 comme point de départ pour la plupart des travaux.",
      },
      {
        q: "Quelle est la fenêtre de contexte de Claude Fable 5.2 ?",
        a: "1M tokens, avec jusqu’à 128K tokens de sortie.",
      },
      {
        q: "Quelle est la différence entre Fable 5.2 et Mythos 5.2 ?",
        a: "C’est le même modèle. Fable 5.2 a des garde-fous en cybersécurité et en biologie et est ouvert à tous ; Mythos 5.2 est réservé aux organisations vérifiées via les programmes d’Anthropic.",
      },
      {
        q: "Claude Fable 5.2 est-il gratuit ?",
        a: "Non. Anthropic le propose sur les forfaits Pro, Max, Ultra, Team et Enterprise et sur l’API ; le forfait Free n’est pas mentionné.",
      },
      {
        q: "Existe-t-il une system card de Claude Fable 5.2 ?",
        a: "Oui, Anthropic a publié la « Claude Fable 5.2 and Claude Mythos 5.2 System Card », accessible depuis sa page Fable.",
      },
    ],
  },
  cta: {
    title: "Confiez au modèle le plus récent un travail permanent.",
    text: "Crewmark transforme des sessions Claude Code et Codex en employés IA dotés de rôles, d’objectifs, d’horaires de travail et d’une pulsation.",
    button: "Commencer",
  },
  checked:
    "Vérifié d’après la page Fable d’Anthropic, l’annonce de lancement, la documentation Claude Platform et la documentation Claude Code le 10 novembre 2026.",
  disclaimer:
    "Crewmark est un produit indépendant, non affilié à Anthropic ni approuvé par Anthropic. Claude, Claude Fable, Claude Mythos, Claude Opus et Claude Code sont des marques d’Anthropic.",
};
