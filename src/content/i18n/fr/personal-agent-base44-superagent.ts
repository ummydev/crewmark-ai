import type { GuideCopy } from "@/components/landing/guide-article";

// fr translation of /personal-agent/base44-superagent; the English master is
// src/content/personal-agents/base44-superagent.ts.

const docs = "https://docs.base44.com/superagents/creating-a-superagent";

const prompts = `Chaque matin à 7 h, résume mes e-mails non lus, mes réunions du jour
et les fils Slack qui me mentionnent. Envoie-le ici.

Quand un e-mail d’un nouveau prospect arrive dans Gmail, rédige une relance personnalisée
et demande-moi avant de l’envoyer. S’il ne répond pas sous trois jours, essaie un autre angle.

Chaque vendredi à 17 h, récupère les chiffres de ventes, de support et de marketing de la semaine
et publie un résumé dans #weekly sur Slack.`;

export const copy: GuideCopy = {
  meta: {
    title: "Base44 Superagent : tarifs, crédits, WhatsApp et configuration",
    description:
      "Les Superagents de Base44 expliqués : ce que peut faire cet agent personnel, comment en créer un, les offres Base44 et la façon dont les Superagents consomment les crédits de messages et d’intégrations, la connexion à WhatsApp, Telegram et Slack, les workflows, des exemples et la comparaison avec les autres.",
  },
  breadcrumb: "Base44 Superagent",
  parent: { name: "Agents personnels", href: "/personal-agent" },
  hero: {
    kicker: "Agents personnels · Base44",
    title: "Base44 Superagent : ce qu’il fait, ce qu’il coûte et comment le configurer",
    lead: "Un Superagent est, selon Base44, un agent IA personnel qui exécute des tâches pour vous 24 h/24, 7 j/7. Vous lui parlez dans votre navigateur ou dans WhatsApp, Telegram, Slack et d’autres messageries ; il travaille dans les outils que vous connectez, exécute des workflows selon un planning ou un déclencheur, garde la mémoire d’une conversation à l’autre et peut même passer des appels téléphoniques. Ce guide explique ce qu’il sait faire, comment en créer un, comment fonctionnent les tarifs et les crédits, comment connecter WhatsApp, des exemples de workflows et sa comparaison avec d’autres agents personnels.",
    cta: "Commencer",
    secondary: "Tarifs et crédits",
    secondaryHref: "#pricing",
  },
  sections: [
    {
      kind: "text",
      title: "Ce qu’est un Base44 Superagent",
      text: [
        "Base44 est surtout connu comme générateur d’applications par IA. Son Superagent est un agent personnel distinct que vous dirigez en conversation : vous décrivez ce que vous voulez, et il agit pour vous dans vos outils. Il n’accède qu’aux outils et aux données que vous connectez.",
      ],
      points: [
        "Discutez où vous voulez : le navigateur, WhatsApp, Telegram, Slack, iMessage et LINE. Sur WhatsApp, il peut rejoindre des conversations de groupe.",
        "Connecteurs : Gmail, Google Calendar, Google Drive, Notion, GitHub, Slack et d’autres, plus votre propre serveur MCP. Les connecteurs partagés peuvent être réglés en lecture seule.",
        "Workflows : des tâches qui s’exécutent selon un planning ou quand quelque chose se produit dans un outil connecté.",
        "Mémoire : connaissances, contexte de travail et journal de mémoire, partagés entre les conversations ou séparés.",
        "Skills et objectifs : des instructions réutilisables, et `/goal` pour découper un résultat plus ambitieux en tâches que vous pouvez mettre en pause et reprendre.",
        "Voix : parlez-lui, avec partage d’écran sur ordinateur. Avec un numéro de téléphone, les workflows planifiés peuvent passer des appels.",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Créer un Base44 Superagent",
      steps: [
        {
          title: "Ouvrez Personal Agent",
          text: "Connectez-vous sur app.base44.com et cliquez sur Personal Agent sous Explore dans la barre latérale (ou sur l’onglet Agent, si votre barre latérale affiche Apps et Agent).",
        },
        {
          title: "Choisissez où lui parler",
          text: "Choisissez Continue here pour le navigateur, ou WhatsApp, Telegram ou iMessage. Pour WhatsApp, scannez le QR code ou ouvrez l’app avec le bouton et envoyez le message prérempli ; pour Telegram, envoyez le message prérempli ou appuyez sur Start.",
        },
        {
          title: "Connectez vos outils",
          text: "Ouvrez Plugins dans la barre latérale, cliquez sur Connect sur un connecteur, choisissez un connecteur partagé ou par utilisateur de l’app, et réglez-le en lecture seule si l’agent n’a besoin que de consulter. Ajoutez votre propre serveur MCP avec Add Connector.",
        },
        {
          title: "Décrivez la tâche",
          text: "Dites ce que vous voulez faire faire ; mettez le contexte de rôle ou de projet dans le premier message, et donnez les règles permanentes qu’il doit toujours suivre. Pour un travail récurrent, décrivez le planning ou le déclencheur et il crée un workflow.",
          code: prompts,
        },
      ],
      source: { label: "Source : documentation Base44, Creating a Superagent", href: docs },
    },
    {
      kind: "table",
      id: "pricing",
      title: "Tarifs et crédits du Base44 Superagent",
      text: [
        "Les Superagents consomment les crédits de votre espace de travail Base44. Voici les offres Base44 telles qu’affichées le 10 novembre 2026, en facturation annuelle ; la page de tarifs indique que la facturation annuelle fait économiser 20 % et n’affiche pas de prix mensuels.",
      ],
      headers: ["Offre", "Prix (facturation annuelle)", "Crédits de messages / mois", "Crédits d’intégrations / mois"],
      rows: [
        ["Free", "$0", "25", "100"],
        ["Starter", "$16/mois", "100", "2 000"],
        ["Builder", "$40/mois", "250", "10 000"],
        ["Pro", "$80/mois", "500", "20 000"],
        ["Elite", "$160/mois", "1 200", "50 000"],
      ],
    },
    {
      kind: "text",
      id: "credits",
      title: "Comment les Superagents consomment les crédits",
      points: [
        "Crédits de messages : chaque message traité par l’agent et chaque exécution de workflow, comme pour une conversation. Cela inclut les messages venant de WhatsApp, Telegram, Slack, de l’API et des automatisations.",
        "Crédits d’intégrations : des actions comme la génération d’images, le traitement de fichiers, l’envoi de fichiers et les liens de téléchargement.",
        "Les crédits se renouvellent selon un calendrier fixe, et les crédits inutilisés expirent à la réinitialisation.",
        "Quand l’espace de travail n’a plus de crédits, les workflows ne peuvent pas s’exécuter. Ils restent actifs et reprennent quand les crédits reviennent, mais les exécutions manquées ne sont pas rattrapées.",
        "Consultez la consommation dans Agent Settings > Credit usage. Un Superagent peut aussi mettre en pause des exécutions qui tournent en boucle, pour ne pas gaspiller de crédits.",
        "L’offre Free comprend 25 crédits de messages par mois. Chaque exécution consomme des crédits de messages, donc un seul workflow quotidien (environ 30 exécutions par mois) en demande déjà davantage ; prévoyez une offre payante pour des workflows quotidiens.",
      ],
    },
    {
      kind: "steps",
      id: "workflows",
      title: "Workflows et exemples de Base44 Superagent",
      text: [
        "Décrivez la tâche dans la conversation, ou ouvrez Workflows, cliquez sur New Workflow et envoyez une suggestion dans la conversation. Le Superagent détermine s’il s’agit d’un workflow planifié ou déclenché et demande ce dont il a besoin.",
      ],
      steps: [
        {
          title: "Planifié",
          text: "S’exécute aux heures que vous fixez : un point du matin sur les e-mails non lus, les réunions et les fils Slack ; un bilan de fin de journée avec la liste des tâches du lendemain ; un appel hebdomadaire au cabinet dentaire pour trouver un rendez-vous plus tôt (si votre agent a un numéro de téléphone).",
        },
        {
          title: "Déclenché",
          text: "S’exécute quand quelque chose se produit : un nouvel e-mail dans Gmail, un changement dans les données de votre Superagent ou une activité dans un outil connecté, comme un rappel quand un e-mail reste non lu pendant 24 heures ou un brief 30 minutes avant chaque réunion.",
        },
        {
          title: "Quand ça casse",
          text: "Un workflow qui échoue plusieurs fois de suite se met en pause et Base44 vous envoie un e-mail. Consultez l’onglet Activity, corrigez la cause (souvent une intégration déconnectée), cliquez sur Resume, puis sur Run Now pour tester.",
        },
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Base44 Superagent vs Meta Muse, Grok Bot et Claude Duet",
      headers: ["", "Base44 Superagent", "Meta Muse", "Grok Bot", "Claude Duet"],
      rows: [
        ["Où lui parler", "Navigateur, WhatsApp, Telegram, Slack, iMessage, LINE", "App Muse, muse.ai, WhatsApp", "Apps de bureau et mobiles, Slack, X", "L’app Claude Duet"],
        ["Planification", "Workflows planifiés et déclenchés", "Rappels et tâches récurrentes", "Routines selon un planning ou un déclencheur", "Vient vers vous avec ce qui demande votre attention"],
        ["Tarifs", "Crédits de l’offre Base44, à partir de $16/mois en facturation annuelle", "Gratuit avec une limite hebdomadaire ; Power $20/mois", "Inclus dans X Premium et au-delà, SuperGrok, offres Cursor", "Inclus dans Claude Pro et au-delà, sur liste d’attente"],
        ["Guide", "Cette page", "[Meta Muse](/personal-agent/meta-muse)", "[Grok Bot](/personal-agent/grok-bot)", "[Claude Duet](/blog/claude-duet)"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Avec Crewmark",
      title: "Un Superagent pour vos démarches, un employé IA pour votre backlog",
      text: [
        "Un Base44 Superagent est pensé autour des outils et des conversations d’une seule personne. Crewmark est pensé autour d’un poste : il transforme votre propre Claude Code ou Codex en employé IA doté d’un rôle, d’un objectif chiffré, d’horaires de travail et d’une pulsation, qui prend le ticket suivant sur un tableau partagé, sans crédits à acheter en plus de l’abonnement d’agent que vous avez déjà.",
      ],
      steps: [
        {
          title: "Choisissez un rôle",
          text: "Partez d’un [rôle d’employé IA](/ai-employees) : ingénieur, spécialiste SEO, agent marketing, social media manager, designer.",
        },
        {
          title: "Faites-le tourner sur l’abonnement que vous avez",
          text: "Crewmark travaille dans votre propre Claude Code ou Codex. Voir les [tarifs](/pricing).",
        },
        {
          title: "Comparez d’autres agents",
          text: "Voir le [comparatif des agents IA personnels](/personal-agent) et [ce qu’est un superagent](/blog/superagent).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Créer un Base44 Superagent" },
  mid: {
    title: "Vous voulez un agent sur un poste, sans acheter de crédits ?",
    text: "Les employés Crewmark tournent dans l’abonnement Claude Code ou Codex que vous payez déjà et avancent sur un tableau partagé.",
    button: "Commencer",
  },
  faq: {
    title: "FAQ",
    items: [
      {
        q: "Qu’est-ce qu’un Base44 Superagent ?",
        a: "L’agent IA personnel de Base44, qui exécute des tâches pour vous 24 h/24, 7 j/7. Vous discutez avec lui dans le navigateur ou dans WhatsApp, Telegram, Slack et d’autres applications ; il travaille dans les outils que vous connectez et exécute des workflows planifiés ou déclenchés.",
      },
      {
        q: "Combien coûte un Base44 Superagent ?",
        a: "Il consomme les crédits de votre offre Base44. En facturation annuelle, les offres sont Starter $16, Builder $40, Pro $80 et Elite $160 par mois, avec 100 à 1 200 crédits de messages ; l’offre Free comprend 25 crédits de messages par mois.",
      },
      {
        q: "Comment fonctionnent les crédits du Base44 Superagent ?",
        a: "Chaque message traité et chaque exécution de workflow consomment des crédits de messages ; des actions comme la génération d’images et le traitement de fichiers consomment des crédits d’intégrations. Les crédits se réinitialisent selon un calendrier, ceux qui ne sont pas utilisés expirent, et les workflows s’arrêtent tant que vous n’en avez plus.",
      },
      {
        q: "Comment connecter un Base44 Superagent à WhatsApp ?",
        a: "À la création, choisissez WhatsApp et scannez le QR code ou ouvrez WhatsApp avec le bouton, puis envoyez le message prérempli. Vous pouvez aussi connecter un numéro WhatsApp pour qu’il travaille dans des conversations de groupe.",
      },
      {
        q: "Que peut faire un Base44 Superagent ?",
        a: "Trier votre boîte de réception pendant la nuit, relancer des prospects, surveiller le prix des vols, réserver un restaurant et prévenir un ami, publier les chiffres hebdomadaires sur Slack, réorganiser votre agenda, animer le groupe WhatsApp d’un projet et, avec un numéro de téléphone, passer des appels planifiés.",
      },
      {
        q: "Quelles sont les alternatives aux Base44 Superagents ?",
        a: "Meta Muse (gratuit aux États-Unis), Grok Bot (pour des équipes d’agents au travail), ChatGPT dots et Claude Duet (avec les offres Pro), Manus Cue, et les projets open source OpenClaw ou Hermes Agent. Voir le [comparatif des agents IA personnels](/personal-agent).",
      },
    ],
  },
  cta: {
    title: "Les démarches pour un Superagent. Un poste pour un employé IA.",
    text: "Crewmark transforme les sessions Claude Code et Codex en employés IA avec des rôles, des objectifs, des horaires de travail et une pulsation.",
    button: "Commencer",
  },
  checked: "Vérifié dans la documentation de Base44, sa page Superagents et sa page de tarifs le 10 novembre 2026.",
  disclaimer:
    "Crewmark est un produit indépendant, sans lien avec Base44, Wix, Meta, xAI ni Anthropic, et non approuvé par eux. Les noms de produits sont des marques de leurs propriétaires.",
};
