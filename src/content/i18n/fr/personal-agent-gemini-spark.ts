import type { GuideCopy } from "@/components/landing/guide-article";

// fr translation of /personal-agent/gemini-spark; the English master is src/content/personal-agents/gemini-spark.ts.

const help = "https://support.google.com/gemini/answer/17094507";

const prompts = `Chaque mois, le 3, vérifie les relevés de ma carte bancaire dans Gmail
pour repérer des frais d’abonnement nouveaux ou cachés, et envoie-moi la liste.

Surveille la boîte mail de l’école de mon enfant pour les échéances et envoie un récapitulatif quotidien
à moi et à mon conjoint à 19 h.

Résume les notes de réunion de la semaine, issues des e-mails et du chat, dans un Google Doc
et rédige l’e-mail de suivi. Ne l’envoie pas.`;

export const copy: GuideCopy = {
  meta: {
    title: "Gemini Spark (devenu tâches) : utilisation, offres, pays",
    description:
      "Ce qu’est devenu Gemini Spark : l’agent personnel 24 h/24 de Google s’appelle désormais tâches dans l’app Gemini. Qui peut l’utiliser (Google AI Pro ou Ultra, dans quels pays), comment l’activer, les plannings, les applications connectées, les limites et l’app Mac.",
  },
  breadcrumb: "Gemini Spark",
  parent: { name: "Agents personnels", href: "/personal-agent" },
  hero: {
    kicker: "Agents personnels · Gemini Spark",
    title: "Gemini Spark, devenu les tâches de Gemini : utiliser l’agent personnel de Google",
    lead: "Google a annoncé Gemini Spark le 19 mai 2026 comme un agent IA personnel actif 24 h/24, conçu pour gérer des tâches de manière proactive : il travaille dans le cloud, continue même ordinateur fermé ou téléphone verrouillé, et utilise Gmail, Docs et vos autres applications Google. Le Spark de la bêta s’appelle désormais tâches dans l’app Gemini, ce qui explique pourquoi le bouton Spark semble avoir disparu. Ce guide explique qui peut l’utiliser, comment l’activer, les plannings, les applications connectées, les limites et ce qu’il fait bien.",
    cta: "Commencer",
    secondary: "L’activer",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "Qu’est devenu Gemini Spark ?",
      text: [
        "Rien n’a été arrêté. L’article d’aide de Google appelle désormais la fonctionnalité tâches et précise qu’elle s’appelait auparavant Spark pendant la bêta. Vous en lancez une avec l’option Task sous la zone de texte de Gemini, et vos tâches et plannings existants sont toujours là.",
      ],
      points: [
        "Ce que c’est : un agent qui tourne sur Gemini dans le cloud, construit au lancement sur Gemini 3.5 et le harness Antigravity de Google.",
        "Ce qu’il fait : il désencombre votre boîte de réception, surveille les prix des vols et des hôtels, fait des recherches en citant ses sources, navigue pour acheter ou réserver, et crée des PDF, Docs, Sheets et Slides.",
        "Quand il travaille : en arrière-plan, selon un planning ou quand quelque chose se produit, et il demande avant les actions à fort enjeu, comme dépenser de l’argent ou envoyer un e-mail.",
      ],
    },
    {
      kind: "table",
      id: "who",
      title: "Qui peut utiliser les tâches Gemini (Spark)",
      text: ["D’après l’aide Gemini Apps de Google au 10 novembre 2026."],
      headers: ["Condition", "Détails"],
      rows: [
        ["Offre", "Google AI Pro ou Ultra (Google AI Pro coûte $19.99 par mois aux États-Unis)"],
        ["Compte", "Un compte Google personnel, 18 ans ou plus ; les comptes professionnels et scolaires ne sont pas encore pris en charge"],
        ["Pays", "Partout où Gemini Apps est disponible, sauf l’Espace économique européen, la Suisse, le Royaume-Uni et le Nigeria"],
        ["Réglage", "Keep Activity doit être activé"],
        ["Où", "L’app mobile Gemini, l’app Gemini sur Mac et l’app web sur gemini.google.com"],
        ["Offre gratuite", "Non incluse"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Utiliser les tâches Gemini",
      steps: [
        {
          title: "Activez le mode tâche",
          text: "Sur gemini.google.com, cliquez sur Task sous la zone de texte et suivez les étapes à l’écran. Les tâches fonctionnent aussi dans l’app mobile Gemini et dans l’app Gemini sur Mac.",
        },
        {
          title: "Connectez les applications dont il a besoin",
          text: "Les tâches peuvent utiliser Gmail, Calendar, Docs, Drive, Keep, Sheets, Slides et Tasks, Google Search, Flights, Hotels et Maps, Contacts, Photos et YouTube, ainsi que des applications personnalisées et tierces. Parmi les partenaires de lancement de Google figuraient Canva, OpenTable et Instacart.",
        },
        {
          title: "Décrivez la tâche et quand la faire",
          text: "Demandez une tâche ponctuelle ou fixez un planning : à une heure donnée ou quand quelque chose se produit. Ouvrez le fil de la tâche et son panneau de travail pour vérifier les autorisations et les plannings.",
          code: prompts,
        },
        {
          title: "Approuvez les étapes importantes",
          text: "Gemini demande avant de naviguer sur le web pour une tâche (après que vous avez autorisé Chrome une première fois), et avant d’envoyer des messages, de faire des achats, de soumettre des formulaires ou de se connecter avec Google. Il marque aussi une pause avant de partager des informations sensibles, comme des données de santé, financières ou d’identité, même si vous avez choisi « Always allow ».",
        },
      ],
      source: { label: "Source : l’aide Gemini Apps de Google sur les tâches", href: help },
    },
    {
      kind: "text",
      id: "limits",
      title: "Limites, plannings et désactivation",
      points: [
        "Jusqu’à 15 tâches peuvent tourner en même temps ; un planning ne se lance pas si 15 tâches tournent déjà.",
        "L’aide de Google indique que les plannings ne tournent pas quand le mode tâche est désactivé ou que votre appareil est éteint. Mettez en pause ou reprenez les plannings depuis le fil de la tâche, ou depuis la page Scheduled de l’app web.",
        "Les limites d’usage dépendent de la puissance de calcul et sont plus élevées sur Ultra que sur Pro.",
        "La navigation automatique de Chrome ne fonctionne que sur ordinateur.",
        "Désactivez-le sur le web dans Settings > Task settings (« Use task mode to hand off work »), ou dans l’app Mac sous Gemini > Settings > Tasks. Cela supprime le navigateur distant et les données de code ; vos tâches, plannings et fichiers sont conservés mais mis en pause.",
      ],
    },
    {
      kind: "table",
      id: "use-cases",
      title: "Cas d’usage des tâches Gemini",
      text: ["Les trois premiers sont les exemples de lancement de Google."],
      headers: ["Cas d’usage", "Ce qu’il fait"],
      rows: [
        ["Contrôle des abonnements", "Examine les relevés de carte mensuels pour repérer des frais d’abonnement nouveaux ou cachés"],
        ["Récapitulatif de l’école", "Surveille les échéances et envoie un récapitulatif quotidien à vous et à votre conjoint"],
        ["Suivi de réunion", "Résume dans un Doc les notes issues des e-mails et du chat et rédige le suivi"],
        ["Nettoyage de la boîte de réception", "Archive les newsletters et vous désabonne des listes"],
        ["Veille de prix", "Surveille les prix des vols et des hôtels et vous prévient quand ils baissent"],
        ["Rapport de recherche", "Étudie un sujet en citant ses sources et le livre sous forme de fichier"],
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Tâches Gemini vs Meta Muse et Grok Bot",
      headers: ["", "Tâches Gemini (Spark)", "Meta Muse", "Grok Bot"],
      rows: [
        ["Éditeur", "Google", "Meta", "xAI"],
        ["Accès le moins cher", "Google AI Pro", "Gratuit aux États-Unis, limite hebdomadaire", "Crédit d’essai gratuit ; X Premium et au-delà"],
        ["Point fort", "Gmail, Docs et les applications Google", "Démarches du quotidien, WhatsApp", "Applications de travail, équipes de Bots"],
        ["Planification", "À une heure donnée ou sur un événement", "Rappels et tâches récurrentes", "Routines selon un planning ou un déclencheur"],
        ["Non disponible dans", "EEE, Suisse, Royaume-Uni, Nigeria", "Hors des États-Unis (test limité)", "-"],
        ["Guide", "Cette page", "[Meta Muse](/personal-agent/meta-muse)", "[Grok Bot](/personal-agent/grok-bot)"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Avec Crewmark",
      title: "Un agent planifié pour votre travail, pas seulement pour votre boîte de réception",
      text: [
        "Les tâches Gemini s’occupent des applications Google d’une seule personne. Crewmark transforme votre propre Claude Code ou Codex en employé IA doté d’un rôle, d’un objectif chiffré, d’horaires de travail et d’une pulsation, qui prend le ticket suivant sur un tableau partagé et vous rend compte.",
      ],
      steps: [
        {
          title: "Choisissez un rôle",
          text: "Partez d’un [rôle d’employé IA](/ai-employees), comme spécialiste SEO ou ingénieur logiciel.",
        },
        {
          title: "Fixez des horaires et une pulsation",
          text: "Il se réveille toutes les 15 à 240 minutes pendant les horaires que vous choisissez. Voir les [tâches planifiées Codex](/proactive-codex).",
        },
        {
          title: "Comparez les agents personnels",
          text: "Voir le [comparatif des agents IA personnels](/personal-agent).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Utiliser les tâches Gemini" },
  mid: {
    title: "Vous voulez un agent qui traite le backlog de votre équipe ?",
    text: "Les employés Crewmark se réveillent au rythme d’une pulsation et prennent le ticket suivant sur un tableau, avec l’abonnement Claude Code ou Codex que vous avez.",
    button: "Commencer",
  },
  faq: {
    title: "FAQ",
    items: [
      {
        q: "Qu’est devenu Gemini Spark ?",
        a: "Google l’a renommé. Le Spark de la bêta s’appelle désormais tâches dans l’app Gemini : choisissez Task sous la zone de texte. Vos tâches et plannings existants sont conservés.",
      },
      {
        q: "Gemini Spark est-il gratuit ?",
        a: "Non. Les tâches nécessitent un abonnement Google AI Pro ou Ultra sur un compte Google personnel ; Google AI Pro coûte $19.99 par mois aux États-Unis.",
      },
      {
        q: "Gemini Spark est-il disponible au Royaume-Uni ou en Europe ?",
        a: "Pas encore. L’aide de Google le liste partout où Gemini Apps est disponible, sauf l’Espace économique européen, la Suisse, le Royaume-Uni et le Nigeria.",
      },
      {
        q: "Existe-t-il une app Mac pour Gemini Spark ?",
        a: "Oui, les tâches fonctionnent dans l’app Gemini sur Mac, ainsi que dans l’app mobile et sur gemini.google.com.",
      },
      {
        q: "Les tâches Gemini peuvent-elles tourner selon un planning ?",
        a: "Oui, à une heure donnée ou quand quelque chose se produit. Jusqu’à 15 tâches peuvent tourner en même temps, et les plannings sont en pause tant que le mode tâche est désactivé.",
      },
      {
        q: "Gemini Spark vs Meta Muse : lequel choisir ?",
        a: "Si votre vie tourne autour de Gmail et des applications Google et que vous payez Google AI Pro, les tâches Gemini. Si vous êtes aux États-Unis et voulez commencer gratuitement, Meta Muse.",
      },
    ],
  },
  cta: {
    title: "Des agents personnels pour votre boîte de réception. Des employés IA pour votre backlog.",
    text: "Crewmark transforme les sessions Claude Code et Codex en employés IA avec des rôles, des objectifs, des horaires de travail et une pulsation.",
    button: "Commencer",
  },
  checked: "Vérifié dans l’annonce de Gemini Spark par Google et l’aide Gemini Apps le 10 novembre 2026.",
  disclaimer:
    "Crewmark est un produit indépendant, sans lien avec Google, Meta ni xAI, et non approuvé par eux. Gemini et Google sont des marques de Google.",
};
