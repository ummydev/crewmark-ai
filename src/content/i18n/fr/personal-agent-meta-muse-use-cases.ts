import type { GuideCopy } from "@/components/landing/guide-article";

// fr translation of /personal-agent/meta-muse-use-cases; the English master is
// src/content/personal-agents/meta-muse-use-cases.ts.

const daily = `Chaque jour de semaine à 7 h, envoie-moi un résumé : mon agenda du jour,
les trois e-mails qui m’attendent en priorité, et tout ce qui est à rendre cette semaine.

Chaque vendredi à 16 h, liste ce que j’ai dit que je ferais cette semaine et qui n’est pas fait,
et rédige les e-mails de relance pour que je les approuve.`;

const marketing = `Chaque lundi à 9 h, consulte les pages de tarifs de [concurrent 1],
[concurrent 2] et [concurrent 3]. Dis-moi ce qui a changé depuis la semaine dernière,
avec les liens, et enregistre un court rapport dans ma Library.

Recherche les questions que les gens posent sur [votre sujet] dans les forums et dans
les résultats de recherche. Regroupe-les en 10 idées d’articles, chacune avec un titre provisoire.

Rédige trois versions d’un e-mail de lancement pour [produit] avec mon ton,
à partir des notes de ce fichier. N’envoie rien.`;

const money = `Trouve ce que vaut ma Honda Civic de 2019 avec 60,000 miles,
rédige l’annonce et dis-moi quelles offres méritent une réponse.

Regarde mes trois dernières factures internet, trouve une offre moins chère chez mon fournisseur
ou un concurrent, et rédige l’e-mail qui leur demande de s’aligner.`;

export const copy: GuideCopy = {
  meta: {
    title: "Cas d’usage de Meta Muse : prompts, routines et idées",
    description:
      "À quoi utiliser Meta Muse, avec des prompts à copier : routines quotidiennes et tâches récurrentes, recherche marketing et SEO, administratif de petite entreprise, économies, voyages et démarches, plus des conseils et ce que Muse ne fait pas.",
  },
  breadcrumb: "Cas d’usage de Meta Muse",
  parent: { name: "Agents personnels", href: "/personal-agent" },
  hero: {
    kicker: "Agents personnels · Meta Muse",
    title: "Cas d’usage de Meta Muse : quoi lui confier, avec des prompts à copier",
    lead: "Muse, l’agent personnel de Meta, ne se contente pas de répondre : il envoie des e-mails, réserve des voyages, remplit des formulaires, achète avec votre accord, crée des fichiers et exécute des tâches récurrentes pendant que l’app est fermée. Le plus difficile est de savoir quoi lui demander. Voici les cas d’usage que Meta met lui-même en avant et ceux qui fonctionnent le mieux pour une routine quotidienne, la recherche marketing et l’administratif d’une petite entreprise, chacun avec un prompt de départ, plus ce pour quoi Muse n’est pas conçu.",
    cta: "Commencer",
    secondary: "Routines quotidiennes",
    secondaryHref: "#daily",
  },
  sections: [
    {
      kind: "text",
      title: "Ce que Muse fait bien",
      text: [
        "Les exemples de Meta sont personnels et concrets : vendre une voiture plus cher, faire baisser une facture, ajuster un programme d’entraînement, transformer un reel de recette enregistré en liste de courses, organiser un dîner en tenant compte des régimes alimentaires des amis. Ils ont trois points communs, que partagent aussi les meilleurs cas d’usage.",
      ],
      points: [
        "Un objectif, pas une simple réponse : Muse en fait un plan et continue d’y travailler en arrière-plan.",
        "Du travail sur le web et dans vos applications : e-mail, formulaires, réservations et paiement, depuis son propre navigateur cloud.",
        "Un moment où vous décidez : il revient vers vous pour approbation avant d’envoyer ou d’acheter, vous gardez donc la main sur tout ce qui compte.",
      ],
    },
    {
      kind: "steps",
      id: "daily",
      title: "Routines quotidiennes avec Muse",
      text: [
        "Muse exécute les tâches récurrentes que vous créez en les demandant. Le centre d’aide de Meta précise qu’elles se répètent jusqu’à ce que vous les annuliez, suivent votre fuseau horaire et arrivent sous forme de messages dans votre conversation.",
      ],
      steps: [
        {
          title: "Créez la routine en un seul message",
          text: "Dites quoi faire, à quelle fréquence et à quelle heure, et ce que vous voulez en retour. Muse confirme le planning avant de l’enregistrer.",
          code: daily,
        },
        {
          title: "Vérifiez ce qui est planifié",
          text: "Demandez « Quels rappels ai-je ? » ou touchez l’icône Assistant en haut et ouvrez Upcoming.",
        },
        {
          title: "Ajustez au fil de l’eau",
          text: "Dites à Muse quelle tâche modifier, déplacer ou annuler, par exemple « Déplace ma revue du vendredi au jeudi à 15 h ».",
        },
      ],
    },
    {
      kind: "steps",
      id: "marketing",
      title: "Meta Muse pour le marketing et le SEO",
      text: [
        "Muse est un agent personnel, pas une plateforme marketing, mais la recherche et les premiers jets lui conviennent bien : il peut naviguer, comparer, résumer et écrire des fichiers dans votre Library, selon un planning si vous le souhaitez. Gardez la publication entre vos mains.",
      ],
      steps: [
        {
          title: "Surveillez vos concurrents chaque semaine",
          text: "Donnez-lui les pages à consulter et le jour où le faire ; demandez ce qui a changé, avec les liens.",
          code: marketing,
        },
        {
          title: "Transformez les questions en idées de contenu",
          text: "Demandez-lui de rassembler les questions que les gens posent sur votre sujet et de les regrouper en idées d’articles. Vérifiez ces idées avec un outil de mots-clés avant d’écrire ; Muse n’affiche pas les volumes de recherche.",
        },
        {
          title: "Faites rédiger, puis approuvez",
          text: "Faites-lui rédiger des e-mails, des posts ou des briefs à partir de vos notes et avec votre ton, et n’envoyez rien sans vous. Meta n’indique pas que Muse peut publier sur les réseaux sociaux à votre place.",
        },
      ],
    },
    {
      kind: "text",
      id: "small-business",
      title: "Meta Muse pour une petite entreprise",
      points: [
        "Tri de la boîte de réception : une liste matinale de ce qui vous attend, avec des brouillons pour le reste. Pour l’e-mail, vous choisissez la lecture seule ou la lecture et l’envoi.",
        "Vérification des fournisseurs et des prix : comparer des devis, suivre un prix et vous prévenir quand il baisse.",
        "Formulaires et réservations : remplir inscriptions, candidatures et réservations, et s’arrêter avant l’envoi si vous le lui demandez.",
        "Achats : Muse paie via Link by Stripe avec une carte à usage unique, et demande avant d’acheter.",
        "Documents : briefs, tableaux comparatifs et rapports enregistrés dans l’onglet Library.",
        "Gardez à l’esprit que c’est un outil de compte personnel : le compte Meta d’une seule personne, pas un espace de travail partagé en équipe.",
      ],
    },
    {
      kind: "steps",
      id: "money",
      title: "Économiser (ou gagner) de l’argent avec Muse",
      text: [
        "Deux des exemples de lancement de Meta portent sur l’argent : vendre une voiture plus cher et faire baisser une facture. Les deux fonctionnent parce que Muse peut chercher, rédiger et négocier, et vous consulte avant de s’engager.",
      ],
      steps: [
        {
          title: "Vendez quelque chose plus cher",
          text: "Demandez-lui d’estimer le prix de l’objet, de rédiger l’annonce et de trier les offres.",
          code: money,
        },
        {
          title: "Faites baisser une facture",
          text: "Donnez-lui votre offre actuelle et demandez-lui d’en trouver une meilleure et de rédiger la demande.",
        },
        {
          title: "Surveillez les prix",
          text: "Demandez-lui de vérifier régulièrement le prix d’un produit, d’un vol ou d’un hôtel et de vous prévenir quand il passe sous un certain montant.",
        },
      ],
    },
    {
      kind: "table",
      id: "more",
      title: "Autres cas d’usage de Meta Muse",
      headers: ["Cas d’usage", "Essayez de demander"],
      rows: [
        ["Voyages", "« Trouve trois options de vol et d’hôtel pour [dates] et attends que j’en choisisse une avant de réserver. »"],
        ["Démarches", "« Transforme ce reel de recette enregistré en liste de courses pour quatre personnes. »"],
        ["Événements", "« Organise un dîner pour six samedi ; n’oublie pas que Sam est végétarien ; rédige les invitations. »"],
        ["Santé et sport", "« Ajuste mon programme de course ; ce mois-ci je ne peux m’entraîner que trois jours par semaine. »"],
        ["Maison", "« Trouve un plombier près de chez moi, avec de bons avis, qui peut passer cette semaine, et rédige le message. »"],
        ["Apprentissage", "« Chaque soir à 20 h, interroge-moi sur cinq phrases d’espagnol de la semaine. »"],
      ],
    },
    {
      kind: "text",
      id: "tips",
      title: "Conseils pour de meilleurs résultats",
      points: [
        "Décrivez le résultat et les limites (budget, dates, ce qu’il ne faut pas faire), pas chaque étape.",
        "Dites où il doit s’arrêter : « rédige mais n’envoie pas », « compare mais ne réserve pas ».",
        "Mentionnez vos préférences une seule fois ; Muse les retient d’une conversation à l’autre, et vous pouvez lui demander d’oublier.",
        "Ne connectez que les applications dont une tâche a besoin, et choisissez l’e-mail en lecture seule quand des brouillons suffisent.",
        "Surveillez la limite hebdomadaire : les longues recherches consomment plus de tokens. Power ($20 par mois) offre 500M tokens par semaine.",
        "Consultez l’historique de ce qu’il a fait et prévoit de faire ; Meta prévient qu’il peut être inexact ou faire des actions inattendues.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Avec Crewmark",
      title: "Quand le marketing est un poste, pas une démarche",
      text: [
        "Une veille concurrentielle hebdomadaire est une démarche. Faire croître le trafic organique est un poste : recherche de mots-clés, pages, indexation et rapport face à un objectif, tous les jours. Crewmark transforme votre propre Claude Code ou Codex en employé IA pour ce type de poste, avec un rôle, un objectif chiffré, des horaires de travail et une pulsation.",
      ],
      steps: [
        {
          title: "Recrutez un rôle marketing",
          text: "Partez du [spécialiste SEO IA](/ai-employees/seo-specialist) ou de l’[agent marketing IA](/ai-employees/marketing-agent) ; chacun arrive avec une fiche de poste, un objectif et une routine quotidienne.",
        },
        {
          title: "Donnez-lui les skills",
          text: "Nos [skills marketing](/skills) open source sont celles que notre propre agent SEO fait tourner chaque jour.",
        },
        {
          title: "Lisez son rapport quotidien",
          text: "Il se réveille au rythme d’une pulsation, avance sur un tableau et vous écrit quand il a besoin d’une décision. Voir le [guide Meta Muse](/personal-agent/meta-muse) pour le côté personnel.",
        },
      ],
    },
  ],
  howTo: { section: "daily", name: "Créer une routine quotidienne dans Meta Muse" },
  mid: {
    title: "Vous voulez un marketing fait chaque jour, pas seulement étudié ?",
    text: "Les employés IA SEO et marketing de Crewmark avancent sur un tableau au rythme d’une pulsation et vous rendent compte.",
    button: "Commencer",
  },
  faq: {
    title: "FAQ",
    items: [
      {
        q: "À quoi Meta Muse sert-il le mieux ?",
        a: "Aux objectifs qui demandent plusieurs étapes sur le web et dans vos applications, avec un moment où vous décidez : vendre quelque chose, faire baisser une facture, organiser un voyage ou un événement, trier vos e-mails, et des vérifications récurrentes comme un résumé quotidien ou une veille de prix hebdomadaire.",
      },
      {
        q: "Meta Muse peut-il exécuter une tâche tous les jours ?",
        a: "Oui. Demandez une tâche récurrente avec l’heure, comme « Chaque jour de semaine à 7 h, envoie-moi un résumé ». Elle se répète jusqu’à ce que vous l’annuliez, et vous la retrouvez sous l’icône Assistant, dans Upcoming.",
      },
      {
        q: "Peut-on utiliser Meta Muse pour le marketing ou le SEO ?",
        a: "Pour la recherche et les brouillons, oui : veille concurrentielle, idées de contenu, brouillons d’e-mails et de posts, enregistrés sous forme de fichiers. Il n’affiche pas les volumes de recherche, et Meta n’indique pas qu’il peut publier sur les réseaux sociaux : la publication reste donc entre vos mains.",
      },
      {
        q: "Meta Muse convient-il à une petite entreprise ?",
        a: "Pour l’administratif d’une seule personne, comme le tri des e-mails, les devis, les formulaires, les réservations et les achats avec approbation. Il fonctionne sur un compte Meta personnel plutôt que sur un espace de travail partagé en équipe.",
      },
      {
        q: "Meta Muse peut-il me faire gagner de l’argent ?",
        a: "Il peut y aider : parmi les exemples de Meta figurent la vente d’une voiture plus cher et la baisse d’une facture. Il cherche, rédige et négocie, et vous consulte avant de s’engager.",
      },
      {
        q: "Quels sont les bons prompts pour Meta Muse ?",
        a: "Ceux qui indiquent le résultat, les limites et où s’arrêter, comme « Trouve trois vols à moins de $400 pour ces dates et demande-moi avant de réserver ». Les prompts de cette page sont un point de départ.",
      },
    ],
  },
  cta: {
    title: "Les démarches pour Muse. Un poste pour un employé IA.",
    text: "Crewmark transforme les sessions Claude Code et Codex en employés IA avec des rôles, des objectifs, des horaires de travail et une pulsation.",
    button: "Commencer",
  },
  checked: "Vérifié dans l’annonce de Muse par Meta et les articles du centre d’aide de Meta le 10 novembre 2026.",
  disclaimer:
    "Crewmark est un produit indépendant, sans lien avec Meta et non approuvé par Meta. Muse et Meta sont des marques de Meta. Les prompts de cette page sont des exemples de Crewmark, pas de Meta.",
};
