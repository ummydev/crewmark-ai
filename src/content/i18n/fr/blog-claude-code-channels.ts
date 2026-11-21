import type { GuideCopy } from "@/components/landing/guide-article";

// fr translation of /blog/claude-code-channels; the English master is src/content/blog/claude-code-channels.ts.

const docs = "https://code.claude.com/docs/en/channels";

const telegram = `# Dans Claude Code : installez le plugin officiel (choisissez la portée user)
/plugin install telegram@claude-plugins-official

# Enregistrez le token donné par BotFather
/telegram:configure <token>

# Relancez Claude Code avec le canal activé
claude --channels plugin:telegram@claude-plugins-official

# Écrivez à votre bot, puis appairez avec le code qu’il renvoie
/telegram:access pair <code>
/telegram:access policy allowlist`;

export const copy: GuideCopy = {
  meta: {
    title: "Channels Claude Code : Telegram, Discord, iMessage",
    description:
      "Comment fonctionnent les channels de Claude Code et comment configurer les plugins officiels Telegram, Discord et iMessage : commandes, appairage, listes d’expéditeurs autorisés, prérequis, pourquoi les channels ne sont pas disponibles, et Slack.",
  },
  breadcrumb: "Channels Claude Code",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-08" },
  hero: {
    kicker: "Blog · Claude Code",
    title: "Channels Claude Code : écrire à Claude Code depuis Telegram, Discord ou iMessage",
    lead: "Les channels poussent des messages dans une session Claude Code qui tourne déjà sur votre ordinateur : vous pouvez lui écrire depuis votre téléphone et recevoir la réponse dans la même conversation, pendant que le travail se fait sur vos vrais fichiers. Telegram, Discord et iMessage ont des plugins officiels. Ce guide explique comment fonctionnent les channels, comment configurer chacun, comment tenir les inconnus à l’écart, pourquoi ils n’apparaissent parfois pas, et comment ils se comparent à Remote Control et à Claude in Slack.",
    cta: "Commencer",
    secondary: "Configurer Telegram",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "Ce que sont les channels de Claude Code",
      text: [
        "Un channel est un serveur MCP qui pousse des événements dans votre session Claude Code en cours. Il peut fonctionner dans les deux sens : Claude lit le message et répond par le même channel, comme une passerelle de chat. Les événements n’arrivent que pendant que la session est ouverte.",
      ],
      points: [
        "Plugins de channel officiels : Telegram, Discord et iMessage, plus fakechat, un chat de démonstration sur localhost.",
        "Chacun est un plugin de claude-plugins-official et nécessite que Bun soit installé.",
        "Vous pouvez aussi créer votre propre channel, par exemple un récepteur de webhooks pour les échecs de CI ou les alertes d’erreur.",
        "Les channels sont une research preview : l’option `--channels` n’apparaît pas dans `claude --help`, et sa syntaxe peut changer.",
        "Dans le terminal, vous voyez le message entrant et une confirmation comme « sent » ; le texte de la réponse lui-même s’affiche dans l’application de chat.",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Comment configurer le channel Telegram",
      steps: [
        {
          title: "Créez un bot",
          text: "Dans Telegram, ouvrez BotFather, envoyez `/newbot`, donnez au bot un nom et un nom d’utilisateur se terminant par « bot », puis copiez le token.",
          code: telegram,
        },
        {
          title: "Installez et configurez le plugin",
          text: "Dans Claude Code, lancez `/plugin install telegram@claude-plugins-official` et choisissez la portée user. Si la marketplace est introuvable, ajoutez-la avec `/plugin marketplace add anthropics/claude-plugins-official`. Enregistrez ensuite le token avec `/telegram:configure <token>`, ou définissez `TELEGRAM_BOT_TOKEN` avant de lancer Claude Code.",
        },
        {
          title: "Relancez avec le channel activé",
          text: "Quittez puis relancez Claude Code avec `--channels plugin:telegram@claude-plugins-official`. Vous pouvez passer plusieurs plugins de channel, séparés par des espaces.",
        },
        {
          title: "Appairez et verrouillez",
          text: "Envoyez n’importe quel message à votre bot ; il répond avec un code d’appairage. Validez-le avec `/telegram:access pair <code>`, puis lancez `/telegram:access policy allowlist` pour que seul votre compte puisse joindre la session.",
        },
      ],
      source: { label: "Source : documentation Claude Code d’Anthropic sur les channels", href: docs },
    },
    {
      kind: "text",
      id: "discord-imessage",
      title: "Discord et iMessage",
      points: [
        "Discord : créez une application dans le Discord Developer Portal, copiez le token du bot, activez Message Content Intent et invitez le bot avec la portée `bot`. Puis `/plugin install discord@claude-plugins-official`, `/discord:configure <token>`, relancez avec `--channels plugin:discord@claude-plugins-official`, écrivez au bot en message privé et appairez avec `/discord:access pair <code>`.",
        "iMessage : macOS uniquement, sans bot ni token. Il lit votre base de données Messages : donnez donc l’accès complet au disque à votre terminal. Installez `imessage@claude-plugins-official`, relancez avec `--channels plugin:imessage@claude-plugins-official` et envoyez-vous un message. Ajoutez d’autres personnes avec `/imessage:access allow <phone or Apple ID email>`.",
        "Slack : ce n’est pas un channel. Claude in Slack lance une session cloud à partir d’une mention @Claude au lieu d’écrire à votre session locale.",
        "WhatsApp et les autres applications : pas de plugin de channel officiel ; il faudrait créer le vôtre avec la référence des channels.",
      ],
    },
    {
      kind: "text",
      id: "not-working",
      title: "Channels indisponibles ou qui ne fonctionnent pas ?",
      points: [
        "Votre type de compte : les channels nécessitent une connexion via claude.ai ou une clé API Console. Ils ne fonctionnent pas via Amazon Bedrock, Agent Platform de Google Cloud ni Microsoft Foundry.",
        "Votre organisation : sur Claude Team et Enterprise, les channels restent bloqués tant qu’un Owner ne les a pas activés dans Organization settings > Claude Code > Channels. Un avertissement au démarrage l’indique. Les comptes Pro, Max et Ultra sans organisation échappent à cette vérification.",
        "Le plugin n’est pas approuvé : pendant la preview, `--channels` n’accepte que les plugins de la liste autorisée d’Anthropic (ou de votre organisation). Tout autre plugin démarre sans le channel, et le message de démarrage vous dit pourquoi.",
        "Le bot ne répond pas : Claude Code doit tourner avec `--channels` ; le bot ne peut répondre que pendant que le channel est actif.",
        "Il s’arrête en pleine tâche : une demande de permission met la session en pause jusqu’à ce que quelqu’un réponde. Certains channels peuvent relayer la demande vers votre téléphone.",
      ],
    },
    {
      kind: "text",
      id: "security",
      title: "Tenez les inconnus à l’écart",
      points: [
        "Chaque channel officiel tient une liste d’expéditeurs autorisés ; les messages de toute autre personne sont ignorés sans avertissement. Telegram et Discord vous ajoutent par appairage ; iMessage laisse passer vos propres messages.",
        "Seuls les serveurs nommés dans `--channels` peuvent pousser des messages ; figurer dans `.mcp.json` ne suffit pas.",
        "Si un channel relaie les demandes de permission, toute personne de sa liste autorisée peut approuver ou refuser l’utilisation d’outils dans votre session. N’ajoutez que des personnes à qui vous feriez confiance pour cela.",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Channels vs Remote Control vs Claude in Slack",
      headers: ["", "Ce qu’il fait", "Où il tourne", "Idéal pour"],
      rows: [
        ["Channels", "Pousse messages de chat, alertes et webhooks dans votre session ouverte", "Votre ordinateur", "Écrire à la session depuis votre téléphone ; réagir à la CI et aux alertes"],
        ["[Remote Control](/remote-claude-code)", "Vous pilotez votre session locale depuis claude.ai ou l’application Claude", "Votre ordinateur", "Diriger un travail en cours loin de votre bureau"],
        ["Claude in Slack", "Une mention @Claude lance une session cloud", "Le cloud d’Anthropic", "Lancer des tâches depuis une conversation d’équipe"],
        ["Hook Notification", "Exécute votre commande, comme une alerte de bureau, quand Claude a besoin de vous", "Votre ordinateur", "Savoir quand un tour se termine ou attend une réponse"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Avec Crewmark",
      title: "Laissez Claude Code vous écrire, pas seulement vous répondre",
      text: [
        "Un channel permet de parler à une session que vous avez laissée tourner. Crewmark transforme cette session en employé IA : il se réveille au rythme d’une pulsation pendant les horaires de travail, prend l’issue suivante sur un tableau et vous écrit dans Crewmark quand il est bloqué, sans que vous ayez à lui écrire d’abord.",
      ],
      steps: [
        {
          title: "Recrutez un employé sur votre Claude Code",
          text: "Lancez la commande d’installation dans une conversation Claude Code ; cette conversation devient l’employé. Voir [ce qu’est un employé IA](/ai-employees).",
        },
        {
          title: "Donnez-lui des horaires et une pulsation",
          text: "Choisissez ses horaires de travail et la fréquence de ses réveils, toutes les 15 à 240 minutes. Voir [comment rendre Claude Code proactif](/proactive-claude-code).",
        },
        {
          title: "Répondez quand il a besoin de vous",
          text: "Les décisions arrivent en messages privés ; une réponse et il continue. Pour le travail de nuit, voir [comment faire tourner Claude Code 24 h/24, 7 j/7](/blog/run-claude-code-24-7).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Configurer le channel Telegram de Claude Code" },
  mid: {
    title: "Vous voulez que Claude Code vienne vers vous quand il est bloqué ?",
    text: "Les employés Crewmark se réveillent au rythme d’une pulsation, avancent sur un tableau et vous écrivent quand ils ont besoin d’une décision.",
    button: "Commencer",
  },
  faq: {
    title: "FAQ sur les channels de Claude Code",
    items: [
      {
        q: "Que sont les channels de Claude Code ?",
        a: "Des serveurs MCP qui poussent des événements dans une session Claude Code déjà en cours : messages de chat depuis Telegram, Discord ou iMessage, ou webhooks de la CI et de la supervision. Claude peut répondre par le même channel. C’est une research preview.",
      },
      {
        q: "Existe-t-il un plugin Telegram officiel pour Claude Code ?",
        a: "Oui : `telegram@claude-plugins-official`. Installez-le avec `/plugin install`, enregistrez votre token BotFather avec `/telegram:configure`, lancez Claude Code avec `--channels plugin:telegram@claude-plugins-official` et appairez votre compte avec le code envoyé par le bot.",
      },
      {
        q: "Peut-on utiliser les channels de Claude Code avec Slack ou WhatsApp ?",
        a: "Il n’existe de channel officiel ni pour l’un ni pour l’autre. Pour Slack, Claude in Slack lance plutôt des sessions cloud à partir d’une mention @Claude. Pour les autres applications, vous pouvez créer votre propre channel avec la référence des channels.",
      },
      {
        q: "Pourquoi les channels de Claude Code ne sont-ils pas disponibles ?",
        a: "En général parce que vous vous connectez via Bedrock, Google Cloud ou Foundry, que votre organisation Team ou Enterprise ne les a pas activés, ou que le plugin ne figure pas sur la liste approuvée. Le message de démarrage indique la raison.",
      },
      {
        q: "Les channels fonctionnent-ils quand mon ordinateur est éteint ?",
        a: "Non. Les événements n’arrivent que pendant que la session est ouverte sur votre ordinateur ; pour une configuration toujours active, faites tourner Claude Code dans un processus en arrière-plan ou un terminal persistant sur une machine qui reste allumée.",
      },
      {
        q: "Comment recevoir une notification quand Claude Code a terminé ?",
        a: "Ajoutez un hook `Notification` ou `Stop` qui déclenche une alerte de bureau, comme `osascript` sur macOS. Voir [les hooks de Claude Code](/blog/claude-code-hooks). Pour être prévenu sur votre téléphone, demandez à Claude de répondre par un channel quand il a fini.",
      },
    ],
  },
  cta: {
    title: "De la réponse aux messages au traitement de sa propre file.",
    text: "Crewmark transforme des sessions Claude Code et Codex en employés IA dotés de rôles, d’objectifs, d’horaires de travail et d’une pulsation.",
    button: "Commencer",
  },
  checked: "Vérifié d’après la documentation Claude Code sur les channels le 8 novembre 2026.",
  disclaimer:
    "Crewmark est un produit indépendant, non affilié à Anthropic ni approuvé par Anthropic. Claude et Claude Code sont des marques d’Anthropic ; Telegram, Discord et iMessage sont des marques de leurs propriétaires.",
};
