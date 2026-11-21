import type { GuideCopy } from "@/components/landing/guide-article";

// French translation of /personal-agent/copilot-cowork; the English master is
// src/content/personal-agents/copilot-cowork.ts.

const getStarted = "https://learn.microsoft.com/en-us/copilot/cowork/get-started";

export const copy: GuideCopy = {
  meta: {
    title: "Copilot Cowork : coût, crédits, licences et vs Claude Cowork",
    description:
      "Microsoft Copilot Cowork expliqué : l’agent Microsoft 365, son coût en Copilot Credits, les licences, les skills, la configuration et vs Claude Cowork.",
  },
  breadcrumb: "Copilot Cowork",
  parent: { name: "Agents personnels", href: "/personal-agent" },
  hero: {
    kicker: "Agents personnels · Microsoft",
    title: "Copilot Cowork : ce que fait l’agent de Microsoft pour Microsoft 365 et comment il est facturé",
    lead: "Copilot Cowork est un agent de Microsoft 365 Copilot qui exécute des tâches en plusieurs étapes dans Microsoft 365. Il envoie des e-mails, planifie des réunions, crée et modifie des fichiers Word, Excel, PowerPoint et PDF, publie dans Teams, gère les fichiers OneDrive et SharePoint, effectue des recherches dans votre organisation et mène des recherches approfondies, et il demande une validation avant les actions sensibles. Il est passé en disponibilité générale pour les comptes professionnels et scolaires en juin 2026. Voici ce qu’il fait, comment fonctionnent les licences et les Copilot Credits, comment le configurer, comment fonctionnent les validations et comment il se compare à Claude Cowork, Claude Code et Codex.",
    cta: "Commencer",
    secondary: "Le configurer",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "Ce qu’est Copilot Cowork et à quoi il sert",
      text: [
        "Microsoft décrit Cowork comme un système agentique qui exécute des tâches en plusieurs étapes en votre nom dans Microsoft 365. Parmi les usages prévus : rechercher un sujet, rédiger un document et l’envoyer par e-mail aux parties prenantes dans une seule conversation, des points et rapports récurrents, et des tâches qui réagissent aux e-mails ou aux messages Teams entrants.",
      ],
      points: [
        "Il s’exécute dans le cloud de Microsoft, dans un environnement isolé. Les fichiers sont créés et lus dans OneDrive et SharePoint ; il ne peut pas accéder aux fichiers de votre appareil local.",
        "Il peut utiliser votre navigateur : dans Cowork sur le web, les tâches de navigation s’exécutent dans un onglet Microsoft Edge masqué sur votre propre appareil, avec vos connexions existantes.",
        "Il utilise des modèles de plusieurs éditeurs : un sélecteur de modèle réglé sur Auto par défaut propose des modèles GPT, Claude et Grok, selon les paramètres du locataire (tenant). Les locataires dans l’EU Data Boundary n’ont accès qu’aux modèles GPT.",
        "Skills et plugins : vous pouvez ajouter jusqu’à 50 skills personnalisées sous forme de fichiers `SKILL.md` dans OneDrive. Les plugins par rôle et par secteur incluent Accounting, Finance et Capital Markets pour Cowork ; d’autres plugins et connecteurs couvrent Dynamics 365, Jira, Salesforce, ServiceNow, SAP ERP, Workday HCM, Zendesk et les applications MCP.",
        "Il répète le travail : jusqu’à 25 prompts planifiés par utilisateur, rédigés en langage courant, plus des tâches déclenchées par un événement, qui s’exécutent quand un e-mail correspondant arrive ou qu’un message Teams est publié.",
        "Il suit les tâches : une vue Tasks filtre par In progress, Needs input, Done et Failed, une page Automations liste les tâches planifiées et déclenchées par un événement, et les Projects (octobre 2026) regroupent les tâches, les instructions et les fichiers liés.",
      ],
    },
    {
      kind: "table",
      id: "plans",
      title: "Copilot Cowork : coût, crédits et licences",
      text: [
        "D’après Microsoft Learn, Microsoft Support et le Copilot Credits Guide de Microsoft (novembre 2026), vérifiés le 13 novembre 2026, en dollars américains. Cowork est facturé à l’usage en Copilot Credits, en plus d’une licence Microsoft 365 Copilot. Une tâche n’a pas de coût fixe en crédits : il varie selon le modèle, la durée d’exécution, le contexte et les outils utilisés.",
      ],
      headers: ["Élément", "Coût ou condition"],
      rows: [
        ["Licence Microsoft 365 Copilot", "Requise pour les comptes professionnels ou scolaires et attribuée à l’utilisateur ; son prix n’est pas indiqué dans la documentation de Cowork"],
        ["Copilot Credits, paiement à l’usage", "$0.01 par Copilot Credit, facturé chaque mois à terme échu"],
        ["Copilot Credit Pre-Purchase Plan (P3)", "Une réserve d’un an payée d’avance, avec des remises de 5 % (300 000 crédits) à 20 % (300 000 000 crédits) ; les crédits non utilisés expirent à la fin de la période"],
        ["Configuration par l’administrateur", "Cowork activé, facturation à l’usage activée et une stratégie de dépenses qui sélectionne Cowork ; les administrateurs peuvent fixer des limites de crédits par utilisateur ou par groupe"],
        ["Comptes Microsoft personnels", "En préversion ; nécessitent un abonnement Microsoft 365 éligible, prix non indiqué"],
        ["Éducation", "Les enseignants et le personnel peuvent l’utiliser ; les étudiants ne sont pas éligibles"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Configurer Copilot Cowork",
      steps: [
        {
          title: "Obtenez la licence",
          text: "Sur un compte professionnel ou scolaire, une licence Microsoft 365 Copilot doit vous être attribuée. Les comptes personnels sont en préversion et nécessitent un abonnement Microsoft 365 éligible.",
        },
        {
          title: "Faites-le activer par un administrateur",
          text: "Un administrateur active Cowork, active la facturation à l’usage et vous donne accès via une stratégie de dépenses qui sélectionne Cowork. L’utilisation du navigateur nécessite aussi que Cowork Browsing soit activé.",
        },
        {
          title: "Ouvrez Cowork là où vous travaillez",
          text: "Sur le web (Edge ou Chrome recommandés), dans l’application de bureau Microsoft Copilot pour Windows et macOS, dans l’application mobile pour iOS et Android, ou directement dans Outlook et Teams.",
        },
        {
          title: "Décrivez la tâche",
          text: "Par exemple : rechercher un sujet, rédiger un document et l’envoyer par e-mail aux personnes qui en ont besoin. Laissez le modèle sur Auto ou choisissez-en un ; l’effort de raisonnement est réglé sur Medium par défaut.",
        },
        {
          title: "Ajoutez des skills et des automatisations",
          text: "Placez des skills personnalisées dans OneDrive sous forme de fichiers `SKILL.md`, rédigez des prompts planifiés en langage courant, ou configurez une tâche pour qu’elle s’exécute à l’arrivée d’un e-mail ou d’un message Teams correspondant.",
        },
      ],
      source: { label: "Source : Microsoft Learn, Copilot Cowork get started", href: getStarted },
    },
    {
      kind: "text",
      id: "safety",
      title: "Comment Copilot Cowork vous laisse le contrôle",
      points: [
        "Avant les actions sensibles, comme envoyer un e-mail, publier dans Teams ou planifier une réunion, Cowork affiche une boîte de dialogue de validation avec un aperçu. Les actions à risque moyen ou élevé indiquent un niveau de risque.",
        "Vous pouvez approuver une fois, ne plus être sollicité pour les actions similaires pendant le reste de la conversation (pour l’e-mail et Teams : pour un destinataire, pour un domaine ou dans tous les cas), ou annuler.",
        "Les tâches déclenchées par un événement fonctionnent par défaut en mode brouillon puis validation, et vous pouvez suspendre, reprendre ou annuler n’importe quelle tâche.",
        "Il ne peut pas supprimer de fichiers ni de dossiers dans OneDrive ou SharePoint, et il vous rend la main sur le navigateur pour les CAPTCHA, les mots de passe, les codes MFA et les modifications de compte.",
        "Les administrateurs contrôlent l’accès via des stratégies de dépenses, fixent des limites de crédits par utilisateur ou par groupe et peuvent désactiver des familles de modèles, dont celle d’Anthropic.",
      ],
    },
    {
      kind: "table",
      id: "vs",
      title: "Copilot Cowork vs Claude Cowork, Claude Code et Codex",
      text: [
        "Informations tirées de la documentation et des pages de tarifs de chaque éditeur, vérifiées le 13 novembre 2026. D’autres collègues IA sont comparés dans [les outils de collègues IA](/blog/ai-coworker) ; voir aussi le [guide Claude Cowork](/personal-agent/claude-cowork) et [Claude Code vs Codex](/blog/claude-code-vs-codex).",
        "Côte à côte : [Copilot Cowork vs Claude Cowork](/compare/copilot-cowork-vs-claude-cowork), [Copilot Cowork vs Copilot Studio](/compare/copilot-cowork-vs-copilot-studio). Guides : [Claude Cowork](/personal-agent/claude-cowork).",
      ],
      headers: ["", "Copilot Cowork", "Claude Cowork", "Claude Code", "Codex"],
      rows: [
        ["Éditeur", "Microsoft", "Anthropic", "Anthropic", "OpenAI"],
        ["Conçu pour", "Les tâches en plusieurs étapes dans Microsoft 365", "Le travail intellectuel hors code", "Le code : lit votre base de code, modifie des fichiers, exécute des commandes", "Le code : inspecte, modifie et exécute du code dans un dépôt"],
        ["Où il s’exécute", "Cloud de Microsoft, avec OneDrive et SharePoint ; pas de fichiers locaux", "Cloud d’Anthropic ; fichiers locaux via Claude Desktop", "Terminal, IDE et application de bureau sur votre machine ; sessions cloud sur le web", "CLI, extension d’IDE et application de bureau ChatGPT ; Codex Cloud"],
        ["Modèles", "Modèles GPT, Claude et Grok, selon les paramètres du locataire", "Modèles Claude", "Modèles Claude", "Modèles OpenAI"],
        ["Comment vous payez", "Licence Microsoft 365 Copilot plus Copilot Credits", "Offres Claude payantes, dès Pro à $20/mois", "Offres Claude payantes, dès Pro à $20/mois ; ou crédits API", "Offres ChatGPT comme Plus à $20/mois ; ou une clé API OpenAI"],
        ["Travail récurrent", "Prompts planifiés ; événements e-mail, Teams et connecteurs", "Tâches planifiées, de toutes les heures à chaque semaine, dans le cloud", "Tâches planifiées cloud et sur le bureau, `/loop`", "Tâches planifiées ; événements Gmail, Slack et GitHub"],
        ["Validations", "Boîte de dialogue de validation avec aperçu avant les actions sensibles", "Modes Manual, Auto ou Skip", "Modes d’autorisation, de `default` à `bypassPermissions`", "Ask for approval, Approve for me ou accès complet"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Avec Crewmark",
      title: "Cowork pour Microsoft 365. Crewmark pour votre dépôt.",
      text: [
        "Copilot Cowork mène des tâches dans Outlook, Teams, OneDrive et SharePoint. Crewmark transforme vos propres sessions Claude Code ou Codex en employés IA dotés d’un rôle, d’objectifs chiffrés, d’horaires de travail et d’une pulsation, chacun prenant des tickets sur un tableau partagé, pour que le travail d’ingénierie, de SEO et de marketing dans un dépôt avance selon un planning.",
      ],
      steps: [
        { title: "Choisissez un rôle", text: "Partez des [rôles d’employés IA](/ai-employees), comme ingénieur logiciel ou spécialiste SEO." },
        { title: "Mettez le travail sur un tableau", text: "Assignez des tickets et rendez récurrents ceux qui reviennent régulièrement ; la pulsation réveille l’employé pour qu’il prenne le suivant." },
        { title: "Voyez ce qu’il sait faire", text: "Des missions, avec leur configuration, se trouvent dans [les cas d’usage de Claude Code](/use-cases/claude-code) et [les cas d’usage de Codex](/use-cases/codex)." },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Configurer Copilot Cowork" },
  mid: {
    title: "Envie d’un collègue IA pour votre base de code ?",
    text: "Crewmark donne à votre Claude Code ou Codex un rôle, une pulsation et un tableau partagé.",
    button: "Commencer",
  },
  faq: {
    title: "FAQ sur Copilot Cowork",
    items: [
      {
        q: "Qu’est-ce que Copilot Cowork ?",
        a: "Un agent de Microsoft 365 Copilot qui exécute des tâches en plusieurs étapes dans Microsoft 365 : il envoie des e-mails, planifie des réunions, crée et modifie des fichiers Word, Excel, PowerPoint et PDF, publie dans Teams, gère les fichiers OneDrive et SharePoint, effectue des recherches dans votre organisation et mène des recherches approfondies. Il demande une validation avant les actions sensibles.",
      },
      {
        q: "Combien coûte Copilot Cowork ?",
        a: "L’usage est facturé en Copilot Credits, en plus d’une licence Microsoft 365 Copilot. Le paiement à l’usage est de $0.01 par crédit, facturé chaque mois à terme échu ; un Pre-Purchase Plan d’un an offre des remises de 5 % à 20 %. Le nombre de crédits par tâche varie selon le modèle, la durée d’exécution, le contexte et les outils utilisés.",
      },
      {
        q: "De quelle licence Copilot Cowork a-t-il besoin ?",
        a: "Pour un compte professionnel ou scolaire : une licence Microsoft 365 Copilot qui vous est attribuée, Cowork activé et la facturation à l’usage activée par un administrateur, avec une stratégie de dépenses qui sélectionne Cowork. Les comptes Microsoft personnels sont en préversion et nécessitent un abonnement Microsoft 365 éligible. Dans l’éducation, les enseignants et le personnel peuvent l’utiliser ; les étudiants, non.",
      },
      {
        q: "Comment se connecter à Copilot Cowork ?",
        a: "Connectez-vous avec le compte qui y a accès : un compte professionnel ou scolaire (disponibilité générale) ou un compte Microsoft personnel (préversion). Cowork est disponible sur le web, dans l’application de bureau Microsoft Copilot pour Windows et macOS, dans l’application mobile pour iOS et Android, et directement dans Outlook et Teams.",
      },
      {
        q: "Copilot Cowork vs Microsoft 365 Copilot : quelle différence ?",
        a: "Copilot Cowork est un agent de Microsoft 365 Copilot. Pour l’utiliser, il faut une licence Microsoft 365 Copilot plus la facturation à l’usage, car l’usage de Cowork est facturé en Copilot Credits en plus de la licence.",
      },
      {
        q: "Copilot Cowork vs Claude Cowork : quelle différence ?",
        a: "Copilot Cowork travaille dans Microsoft 365, conserve les fichiers dans OneDrive et SharePoint, ne peut pas accéder aux fichiers locaux et est facturé en Copilot Credits en plus d’une licence. Claude Cowork est l’agent d’Anthropic dans les applications Claude ; il est inclus dans les offres Claude payantes à partir de Pro à $20 par mois et accède aux fichiers locaux via Claude Desktop. Le sélecteur de modèle de Copilot Cowork peut aussi inclure des modèles Claude, selon les paramètres du locataire.",
      },
    ],
  },
  cta: {
    title: "Confiez les tâches Microsoft 365 à Cowork. Donnez aussi un poste à vos agents de code.",
    text: "Crewmark transforme les sessions Claude Code et Codex en employés IA dotés de rôles, d’objectifs, d’horaires de travail et d’une pulsation.",
    button: "Commencer",
  },
  checked:
    "Vérifié dans la documentation Copilot Cowork de Microsoft Learn, le Copilot Credits Guide de Microsoft et Microsoft Support le 13 novembre 2026.",
  disclaimer:
    "Crewmark est un produit indépendant, sans lien avec Microsoft, Anthropic ni OpenAI, et non approuvé par eux. Les noms de produits sont des marques de leurs propriétaires.",
};
