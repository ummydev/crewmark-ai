import type { CompareBundle } from "@/content/compare/types";

// French translation of the comparison pages (MC-387); the English master is src/content/compare/en.ts.
//
// The ui templates put {a}, {b} and {x} right after "vs", "entre", "et", "à" or a verb ("Choisissez {x} si"), never
// after "de" or an article, so no elision or contraction depends on the product name. Prices keep the English "$20"
// form, as the other French pages do.

export const copy: CompareBundle = {
  ui: {
    kicker: "Comparatif",
    hubName: "Comparatifs",
    cta: "Commencer",
    secondary: "Voir le tableau",
    shortTitle: "{a} vs {b} : une ligne pour chacun",
    tableTitle: "{a} vs {b} vs Crewmark en un coup d’œil",
    rows: {
      category: "Ce que c’est",
      openSource: "Open source",
      pricing: "Prix",
      runs: "Où il tourne",
      agents: "Agents et modèles",
      board: "Tableau de tâches",
      schedule: "Travail planifié",
      talk: "Échanges entre agents",
    },
    differencesTitle: "Principales différences entre {a} et {b}",
    pickTitle: "Choisissez {x} si",
    crewmarkTitle: "La place de Crewmark",
    crewmarkText:
      "Crewmark se situe à un autre niveau que les deux. Il ne remplace pas votre agent de code ; il lui confie un poste. Chaque employé IA est une conversation Claude Code ou Codex sur votre propre ordinateur, avec un rôle, des objectifs et des horaires de travail.",
    crewmarkPoints: [
      "Une pulsation réveille chaque employé pendant ses horaires de travail, de toutes les 15 minutes à une fois par jour, pour qu’il prenne le ticket suivant.",
      "Un tableau partagé avec statuts, priorités, commentaires et @mentions ; assigner, commenter ou mentionner réveille l’agent concerné.",
      "Open source sous GPL-3.0, et gratuit pour 1 projet et jusqu’à 3 employés IA.",
      "Les messages directs entre agents et une chaîne hiérarchique sont à venir.",
    ],
    sourcesTitle: "Comment nous avons vérifié",
    sourcesText:
      "Chaque information de cette page provient du site, de la page de tarifs, de la documentation ou du dépôt GitHub de chaque produit, vérifiés le 13 novembre 2026. Les prix et les offres changent : vérifiez la page de l’éditeur avant d’acheter. Sites officiels :",
    relatedTitle: "Autres comparatifs",
    moreTitle: "Alternatives et tarifs",
    alternativesLabel: "Alternatives à {x}",
    pricingLabel: "Tarifs de {x}",
    midTitle: "Vous voulez que vos agents travaillent selon un planning ?",
    midText:
      "Crewmark donne à Claude Code et Codex un rôle, une pulsation et un tableau partagé, pour qu’ils prennent le travail suivant d’eux-mêmes.",
    midButton: "Commencer",
    faqTitle: "FAQ",
    crewmarkFaq: {
      q: "Crewmark est-il une alternative à {a} et {b} ?",
      a: "Il couvre une autre partie du travail. Crewmark ne fournit pas son propre agent : il transforme Claude Code ou Codex en employés IA dotés de rôles, d’une pulsation et d’un tableau partagé. Selon la façon dont vous utilisez {a} et {b}, il peut fonctionner à leurs côtés ou prendre en charge la partie qui planifie et suit le travail des agents.",
    },
    ctaTitle: "Donnez un poste à vos agents Claude Code et Codex, pas seulement un prompt.",
    ctaText:
      "Crewmark transforme les sessions Claude Code et Codex en employés IA dotés de rôles, d’objectifs, d’horaires de travail et d’une pulsation.",
    ctaButton: "Commencer",
    checked:
      "Informations vérifiées sur le site, la page de tarifs, la documentation ou le GitHub de chaque produit le 13 novembre 2026.",
    disclaimer:
      "Crewmark est un produit indépendant, sans lien avec les entreprises citées sur cette page et non approuvé par elles. Les noms de produits sont des marques de leurs propriétaires respectifs. Les informations sur les autres produits proviennent de leurs sites publics et de leur documentation à la date indiquée ci-dessus.",
    hub: {
      meta: {
        title: "Comparer les outils d’agents IA : 30 comparatifs côte à côte",
        description:
          "Outils d’agents IA comparés : Paperclip, Multica, CrewAI, LangGraph, OpenClaw, Hermes Agent, Claude Code, Codex, Devin, Conductor et d’autres, prix à l’appui.",
      },
      breadcrumb: "Comparatifs",
      title: "Les outils d’agents IA comparés côte à côte",
      lead: "Chaque comparatif place deux outils côte à côte, avec Crewmark en troisième colonne, en s’appuyant uniquement sur des informations tirées du site, de la page de tarifs, de la documentation ou du GitHub de chaque éditeur. Il n’y a ni note ni gagnant : simplement ce qu’est chaque outil, ce qu’il coûte et ce qu’il fait, pour que vous choisissiez celui qui vous convient.",
      tableTitle: "Tous les comparatifs",
      tableHeaders: ["Comparatif", "En bref"],
      productsTitle: "Produits couverts",
      moreTitle: "Pages alternatives et tarifs",
      productsHeaders: ["Produit", "Ce que c’est", "Open source"],
      midTitle: "Vous voulez que vos agents travaillent selon un planning ?",
      ctaTitle: "Donnez un poste à vos agents Claude Code et Codex, pas seulement un prompt.",
      faq: [
        {
          q: "Comment ces comparatifs sont-ils réalisés ?",
          a: "À partir du site, de la page de tarifs, de la documentation et du dépôt GitHub de chaque produit, vérifiés à la date indiquée en bas de chaque page. Nous n’attribuons ni note ni classement aux produits.",
        },
        {
          q: "Pourquoi Crewmark figure-t-il sur chaque page ?",
          a: "Crewmark est notre produit : il apparaît donc en troisième colonne, pour situer les choses. Il se place à un autre niveau que la plupart de ces outils : il transforme Claude Code ou Codex en employés IA dotés de rôles, d’une pulsation et d’un tableau partagé.",
        },
        {
          q: "Les prix sont-ils à jour ?",
          a: "Ils étaient exacts à la date indiquée. Les éditeurs changent souvent leurs prix et leurs offres : vérifiez leur page de tarifs avant d’acheter.",
        },
      ],
    },
  },

  products: {
    paperclip: {
      name: "Paperclip",
      href: "https://paperclip.ing",
      what: "un serveur et une application web auto-hébergés qui font tourner une équipe d’agents IA comme une entreprise, avec un organigramme, des budgets et des tâches, en pilotant les agents que vous apportez, comme Claude Code, Codex ou OpenClaw.",
      category: "Orchestration multi-agents (« entreprise IA »)",
      openSource: "Oui, MIT",
      pricing: "Auto-hébergé gratuit ; aucun prix publié ; version cloud sur liste d’attente",
      runs: "Serveur Node.js auto-hébergé avec Postgres, ou Docker",
      agents: "Les agents que vous apportez, via des adaptateurs : Claude Code, Codex, OpenClaw, Cursor, Gemini CLI, OpenCode et d’autres",
      board: "Oui : tickets liés à des objectifs et des projets, assignés à des agents ou à des personnes",
      schedule: "Oui : pulsations, et Routines déclenchées par cron, webhook ou API",
      talk: "Via les fils de discussion des tâches et la délégation le long de l’organigramme",
    },
    multica: {
      name: "Multica",
      href: "https://multica.ai",
      what: "un espace de travail où vous assignez des tickets à des agents de code IA comme à des coéquipiers, tandis qu’un daemon sur votre machine exécute les CLI d’agents que vous avez déjà.",
      category: "Tableau de tickets pour humains et agents de code",
      openSource: "Source disponible (Apache 2.0 avec des conditions supplémentaires)",
      pricing: "Auto-hébergement gratuit au sein de votre organisation ; prix du cloud non publiés",
      runs: "Cloud, auto-hébergé (Docker ou Helm) ou application de bureau ; les agents tournent sur un daemon que vous contrôlez",
      agents: "29 CLI d’agents, dont Claude Code, Codex, Cursor Agent, OpenCode et Hermes",
      board: "Oui : vues tableau et liste, avec des agents comme assignés",
      schedule: "Oui : Autopilots via cron, webhooks ou lancement manuel",
      talk: "Oui : dans les squads, un agent leader @mentionne les membres pour leur passer le travail",
    },
    linear: {
      name: "Linear",
      href: "https://linear.app",
      what: "un gestionnaire de tickets hébergé pour les équipes produit, qui permet aussi de déléguer des tickets à son propre Linear Agent et à des agents tiers comme Cursor, Codex et Devin.",
      category: "Gestionnaire de tickets avec une plateforme d’agents",
      openSource: "Non",
      pricing:
        "Free $0 ; Basic $10 et Business $16 par utilisateur et par mois, facturés annuellement ; crédits IA pour l’agent de code et les Loops",
      runs: "Cloud",
      agents: "Linear Agent ; un agent de code cloud basé sur Claude Code ou Codex ; des agents tiers installés comme membres",
      board: "Oui : tickets, projets, cycles et initiatives",
      schedule: "Oui : Loops, planifiées ou déclenchées par des événements",
      talk: "Non précisé",
    },
    openclaw: {
      name: "OpenClaw",
      href: "https://openclaw.ai",
      what: "un assistant IA personnel open source qui tourne sur votre propre ordinateur et vous répond dans des applications de messagerie comme WhatsApp, Telegram et Slack.",
      category: "Assistant IA personnel (auto-hébergé)",
      openSource: "Oui, MIT",
      pricing: "Gratuit ; aucune offre payante ni service hébergé ; vous payez votre fournisseur de modèles",
      runs: "Un Gateway local sur votre propre machine ; installation via Docker et Nix",
      agents: "Fournisseurs de modèles sous forme de plugins : Anthropic, OpenAI, Gemini, OpenRouter, Ollama et d’autres",
      board: "Non (son registre Tasks et TaskFlow ont été supprimés)",
      schedule: "Oui : un planificateur Automations intégré, plus des webhooks",
      talk: "Oui : plusieurs agents par Gateway avec accès d’agent à agent, et un preset d’équipe avec un coordinateur",
    },
    "hermes-agent": {
      name: "Hermes Agent",
      href: "https://hermes-agent.nousresearch.com",
      what: "l’agent IA personnel open source de Nous Research, utilisable depuis un terminal, une application de bureau ou des applications de messagerie, qui écrit et affine ses propres skills à partir de l’expérience.",
      category: "Agent IA personnel (auto-hébergé)",
      openSource: "Oui, MIT",
      pricing: "Agent gratuit ; Nous Portal en option : Free, Plus $20, Super $100, Ultra $200 par mois",
      runs: "Votre machine ou un serveur ; les offres payantes du Portal incluent un agent hébergé dans le cloud",
      agents: "Tout fournisseur de modèles : Nous Portal, OpenRouter, OpenAI, Anthropic, Gemini, modèles locaux et d’autres",
      board: "Non",
      schedule: "Oui : un planificateur cron intégré, et des routines par Bot",
      talk: "Oui : des subagents et, en Bot Mode, des Bots nommés qui s’envoient des messages",
    },
    "relevance-ai": {
      name: "Relevance AI",
      href: "https://relevanceai.com",
      what: "une plateforme low-code hébergée pour créer des agents IA et les relier en équipes multi-agents, qu’elle appelle une AI Workforce, pour la vente, le support et les opérations.",
      category: "Plateforme d’agents IA (« AI Workforce »)",
      openSource: "Non",
      pricing: "La page de tarifs publique ne liste qu’Enterprise, via l’équipe commerciale",
      runs: "Cloud",
      agents: "Ses propres agents, créés dans un éditeur no-code ; n’importe quel LLM avec des crédits, ou votre propre clé",
      board: "Pas de tableau de tickets ; un historique des tâches et un Activity Center",
      schedule: "Oui : tâches planifiées et déclencheurs d’applications",
      talk: "Oui : des agents reliés sur un canevas se passent le travail",
    },
    lindy: {
      name: "Lindy",
      href: "https://www.lindy.ai",
      what: "un assistant IA hébergé qui travaille dans votre boîte de réception, votre agenda, vos réunions et Slack, exécute des routines récurrentes et demande votre accord avant toute action ayant un impact extérieur.",
      category: "Assistant IA (« employé IA »)",
      openSource: "Non",
      pricing: "Gratuit : $50 de crédits pendant 7 jours ; à partir de $29.99/mois par utilisateur actif pour 3 000 crédits",
      runs: "Cloud ; utilisé depuis Slack, l’e-mail, iMessage, le téléphone et une extension Chrome",
      agents: "Son propre assistant ; il choisit un modèle par tâche, ou vous le choisissez",
      board: "Non ; vous lui confiez des tâches dans la conversation",
      schedule: "Oui : Routines, planifiées ou déclenchées par un événement",
      talk: "Non précisé (un Lindy par espace de travail)",
    },
    crewai: {
      name: "CrewAI",
      href: "https://crewai.com",
      what: "un framework Python open source pour créer des crews d’agents définis par leur rôle et des flows étape par étape, plus une plateforme commerciale, CrewAI AMP, pour les déployer et les exécuter.",
      category: "Framework multi-agents (Python) et plateforme",
      openSource: "Framework oui, MIT ; la plateforme AMP est commerciale",
      pricing: "Framework gratuit ; AMP Basic gratuit (50 exécutions/mois) ; Enterprise sur mesure",
      runs: "Une bibliothèque dans votre code ; AMP dans le cloud de CrewAI ou sur votre propre infrastructure",
      agents: "LLM via API (OpenAI par défaut ; autres fournisseurs et modèles locaux pris en charge)",
      board: "Non ; les tâches sont définies dans le code",
      schedule: "Sur AMP : planification cron ; non précisé pour le framework seul",
      talk: "Oui : les agents se délèguent du travail et se posent des questions ; un agent manager en mode hiérarchique",
    },
    langgraph: {
      name: "LangGraph",
      href: "https://www.langchain.com/langgraph",
      what: "le framework open source de LangChain pour créer des agents de longue durée et à état, sous forme de graphe d’état, de nœuds et d’arêtes dans le code, déployés via LangSmith.",
      category: "Framework d’orchestration d’agents (Python, JS)",
      openSource: "Framework oui, MIT ; LangSmith est commercial",
      pricing: "Framework gratuit ; LangSmith Developer $0, Plus $39/siège/mois, Enterprise sur mesure",
      runs: "Dans votre application ; Agent Server dans le cloud de LangChain, ou auto-hébergé avec Enterprise",
      agents: "Les modèles qu’appelle votre code",
      board: "Non",
      schedule: "Sur Agent Server : tâches cron ; non précisé pour la bibliothèque seule",
      talk: "Oui, selon la conception de votre graphe : subagents, handoffs, routeurs",
    },
    autogen: {
      name: "AutoGen",
      href: "https://microsoft.github.io/autogen/",
      what: "le framework open source de Microsoft pour les applications multi-agents en Python et .NET. Son README indique désormais qu’il est archivé et n’est plus maintenu par Microsoft, et renvoie vers Microsoft Agent Framework.",
      category: "Framework multi-agents (Python, .NET)",
      openSource: "Oui : code sous MIT, documentation sous CC-BY-4.0",
      pricing: "Gratuit ; aucun service hébergé",
      runs: "Une bibliothèque dans votre code ; AutoGen Studio tourne en local",
      agents: "Clients de modèles pour OpenAI et Azure ; Anthropic, Ollama et Gemini marqués comme expérimentaux",
      board: "Non",
      schedule: "Non précisé",
      talk: "Oui : group chats, équipes selector et swarm, passage de messages",
    },
    conductor: {
      name: "Conductor",
      href: "https://www.conductor.build",
      what: "une application Mac qui fait tourner des agents Claude Code, Codex, Cursor et OpenCode côte à côte, chacun dans son propre worktree git. Elle a annoncé le 4 novembre 2026 rejoindre Meta et a fermé les nouvelles inscriptions et les téléchargements.",
      category: "Exécution d’agents de code en parallèle (application Mac)",
      openSource: "Non",
      pricing: "Utilisation gratuite ; aucun prix d’offre cloud affiché aujourd’hui",
      runs: "Application Mac ; Conductor Cloud en lecture seule à partir du 13 novembre et fermé le 20 novembre 2026",
      agents: "Claude Code, Codex, OpenCode et Cursor Agent, avec vos propres abonnements ou clés",
      board: "Pas de tableau de tickets ; une liste d’espaces de travail, qui peuvent partir d’un ticket GitHub ou Linear",
      schedule: "Des Routines réservées au cloud, qui disparaissent avec lui",
      talk: "Affiche les messages entre agents quand les agent teams de Claude Code sont activées",
    },
    "claude-squad": {
      name: "Claude Squad",
      href: "https://github.com/smtg-ai/claude-squad",
      what: "une application de terminal open source qui fait tourner plusieurs agents de code à la fois, chacun dans sa propre session tmux et son propre worktree git, pour qu’ils travaillent sur des branches séparées.",
      category: "Exécution d’agents de code en parallèle (terminal)",
      openSource: "Oui, AGPL-3.0",
      pricing: "Gratuit",
      runs: "Votre terminal ; nécessite tmux et la CLI GitHub",
      agents: "Claude Code par défaut ; Codex, Gemini, Aider ou tout programme défini dans sa configuration",
      board: "Non ; une liste d’instances avec aperçus et diffs",
      schedule: "Non précisé",
      talk: "Non précisé",
    },
    "vibe-kanban": {
      name: "Vibe Kanban",
      href: "https://www.vibekanban.com",
      what: "un tableau kanban pour le travail des agents de code, où chaque ticket obtient un espace de travail avec un worktree git et l’agent de votre choix. Son entreprise, bloop, a fermé en avril 2026, et le projet continue en open source, maintenu par sa communauté.",
      category: "Tableau kanban et exécution d’agents de code en parallèle",
      openSource: "Oui, Apache-2.0",
      pricing: "Application locale gratuite ; abonnements payants arrêtés en avril 2026",
      runs: "En local dans votre navigateur ou en application de bureau ; sa partie cloud peut être auto-hébergée",
      agents: "Claude Code, Codex, Gemini CLI, GitHub Copilot, Amp, Cursor, OpenCode et d’autres",
      board: "Oui : tickets kanban avec priorités et tags (connexion requise)",
      schedule: "Non précisé",
      talk: "Non précisé",
    },
    "claude-code": {
      name: "Claude Code",
      href: "https://code.claude.com/docs/en/overview",
      what: "l’agent de code d’Anthropic : il lit votre base de code, modifie des fichiers et exécute des commandes, depuis le terminal, des extensions d’IDE, une application de bureau et le web.",
      category: "Agent de code",
      openSource: "Non (dépôt public, tous droits réservés)",
      pricing: "Dans les forfaits Claude payants : Pro $20/mois, Max $100, Ultra $200 ; Team et Enterprise par siège",
      runs: "Terminal, extensions d’IDE, application de bureau, web et mobile",
      agents: "Son propre agent, sur les modèles Claude",
      board: "Pas de tableau de tickets ; les agent teams partagent une liste de tâches",
      schedule: "Oui : tâches planifiées cloud, tâches planifiées sur le bureau et `/loop`",
      talk: "Dans les agent teams expérimentales, les coéquipiers s’envoient des messages ; les subagents renvoient leurs résultats",
    },
    "claude-code-agent-teams": {
      name: "Claude Code agent teams",
      href: "https://code.claude.com/docs/en/agent-teams",
      what: "une fonctionnalité expérimentale de Claude Code, désactivée par défaut, où une session principale crée des coéquipiers : des instances Claude Code distinctes qui partagent une liste de tâches et s’envoient des messages.",
      category: "Mode multi-agents d’un agent de code",
      openSource: "Non (fait partie de Claude Code)",
      pricing: "Inclus avec Claude Code dans les forfaits Claude payants",
      runs: "Vos sessions Claude Code",
      agents: "Instances Claude Code sur les modèles Claude",
      board: "Une liste de tâches partagée où les coéquipiers viennent se servir, avec dépendances",
      schedule: "Hors du périmètre des agent teams ; Claude Code propose des tâches planifiées à part",
      talk: "Oui : les coéquipiers s’envoient des messages, et vous pouvez écrire à n’importe lequel d’entre eux",
    },
    codex: {
      name: "Codex",
      href: "https://learn.chatgpt.com/docs/codex/cli",
      what: "l’agent de code d’OpenAI, en CLI dans le terminal, en extension d’IDE, dans l’application de bureau ChatGPT et dans le cloud, inclus dans les forfaits ChatGPT ou utilisé avec une clé API.",
      category: "Agent de code",
      openSource:
        "En partie : la CLI, le SDK et l’App Server sont sous Apache-2.0 ; l’extension d’IDE et le cloud ne le sont pas",
      pricing: "Dans les forfaits ChatGPT à partir de Plus à $20/mois, ou avec une clé API OpenAI",
      runs: "Terminal, extension d’IDE, application de bureau ChatGPT et Codex Cloud",
      agents: "Son propre agent, sur les modèles OpenAI",
      board: "Pas de tableau de tickets ; prend en charge les tickets Linear sur les forfaits payants",
      schedule: "Oui : tâches planifiées dans l’application de bureau ChatGPT et sur le web",
      talk: "Subagents : un agent parent lance des agents et récupère leurs résultats",
    },
    opencode: {
      name: "OpenCode",
      href: "https://opencode.ai",
      what: "un agent de code open source qui fonctionne avec les modèles de 200+ fournisseurs, y compris des modèles locaux, sous forme d’interface terminal, d’application de bureau, d’application web et de SDK.",
      category: "Agent de code",
      openSource: "Oui, MIT",
      pricing: "Agent gratuit, avec des modèles gratuits ; OpenCode Go $10/mois, Go Plus $40/mois",
      runs: "Terminal, application de bureau, application web et SDK sur votre machine",
      agents: "Son propre agent ; 200+ fournisseurs de modèles, y compris des modèles locaux",
      board: "Non précisé",
      schedule: "Planifications expérimentales, à activer explicitement (depuis octobre 2026)",
      talk: "Les subagents rendent compte à l’agent parent",
    },
    devin: {
      name: "Devin",
      href: "https://devin.ai",
      what: "l’ingénieur logiciel IA de Cognition : il écrit, exécute et teste du code et ouvre des pull requests, dans des sessions cloud sur leurs propres machines virtuelles et en local via Devin Desktop et Devin CLI.",
      category: "Ingénieur logiciel IA",
      openSource: "Non",
      pricing: "Free $0 ; Pro $20/mois ; Max $200/mois ; Teams $80/mois plus $40 par siège de développeur",
      runs: "Une VM cloud par session ; Devin Desktop et la CLI en local",
      agents: "Son propre agent ; SWE-2 de Cognition et des modèles de pointe de plusieurs laboratoires",
      board: "Pas de tableau propre ; prend des tickets dans Linear, Jira et GitHub",
      schedule: "Oui : Automations, planifiées ou déclenchées par des événements",
      talk: "Oui : une session coordinatrice lance des Devins enfants et leur envoie des messages",
    },
    factory: {
      name: "Factory",
      href: "https://factory.com",
      what: "des agents de code appelés Droids, qui tournent dans une application de bureau, une CLI, en mode headless dans la CI et sur des ordinateurs cloud hébergés par Factory.",
      category: "Plateforme d’agents de code (Droids)",
      openSource: "Non",
      pricing: "Gratuit avec votre propre inférence ; Pro $20/mois ; Plus $100/mois ; offres supérieures",
      runs: "Application de bureau et CLI en local ; Droid Computers dans le cloud ; headless dans la CI",
      agents: "Son propre agent, sur des modèles de pointe et à poids ouverts, ou avec vos propres clés",
      board: "Pas de tableau général ; prend des tickets Linear et Jira ; les Workstreams (bêta) listent des tâches",
      schedule: "Oui : Automations planifiées ou déclenchées par Slack, GitHub ou des webhooks",
      talk: "Oui, dans les Workstreams (bêta) : un orchestrateur dont les agents lui rendent compte",
    },
    "grok-bot": {
      name: "Grok Bot",
      href: "https://x.ai/bot",
      what: "les coéquipiers IA hébergés de xAI : des Bots qui disposent chacun de leur propre ordinateur dans le cloud, se connectent à vos outils, travaillent dans Slack et Microsoft Teams, exécutent des routines et se passent le travail.",
      category: "Collègues IA (hébergés)",
      openSource: "Non",
      pricing: "Premium $30, Super $100, Ultra $200 par mois, avec un usage hebdomadaire inclus ; Teams et Enterprise via l’équipe commerciale",
      runs: "Un ordinateur cloud par Bot ; applications de bureau et mobiles ; dans Slack, Teams et les appels vidéo",
      agents: "Ses propres Bots, construits avec Grok",
      board: "Non précisé ; le travail se transmet dans le chat, les fils de discussion et les réunions",
      schedule: "Oui : des routines planifiées, et des workflows qu’il apprend en vous observant",
      talk: "Oui : les Bots s’envoient des messages et se coordonnent dans des discussions de groupe",
    },
    openbot: {
      name: "OpenBot",
      href: "https://open.bot",
      what: "l’espace de travail open source et auto-hébergeable de CopilotKit pour collègues IA, où chaque Bot dispose de son propre navigateur, de ses fichiers et de ses outils, et où vous apportez vos propres modèles et agents.",
      category: "Espace de travail pour collègues IA (auto-hébergeable)",
      openSource: "Oui, MIT (utilise CopilotKit Intelligence, sous licence distincte)",
      pricing: "Gratuit pour les projets personnels ; Business jusqu’à $29 par utilisateur actif et par mois",
      runs: "Application de bureau pour Mac et Windows ; Kubernetes pour les équipes",
      agents: "Bots intégrés ou vos propres agents via AG-UI ; OpenAI, Claude, Gemini ou modèles ouverts",
      board: "Non précisé",
      schedule: "Oui : Routines",
      talk: "Non précisé",
    },
    "claude-cowork": {
      name: "Claude Cowork",
      href: "https://claude.com/product/cowork",
      what: "l’agent d’Anthropic pour le travail hors code dans les applications Claude : vous décrivez un résultat et il mène la recherche, les documents, les tableurs et les présentations dans vos fichiers, vos applications et un navigateur.",
      category: "Collègue IA pour le travail intellectuel",
      openSource: "Non",
      pricing: "Forfaits Claude payants : Pro $20/mois, Max $100, Ultra $200 ; Team et Enterprise par siège",
      runs: "Cloud d’Anthropic ; fichiers locaux et navigateur via Claude Desktop",
      agents: "Modèles Claude",
      board: "Pas de tableau ; une liste de tâches et une page Scheduled",
      schedule: "Oui : toutes les heures, chaque jour, chaque semaine ou les jours ouvrés, dans le cloud",
      talk: "Subagents au sein d’une tâche",
    },
    "copilot-cowork": {
      name: "Copilot Cowork",
      href: "https://learn.microsoft.com/en-us/copilot/cowork/",
      what: "un agent de Microsoft 365 Copilot qui exécute des tâches en plusieurs étapes dans Outlook, Teams, Word, Excel, PowerPoint, OneDrive et SharePoint, avec une validation avant les actions sensibles.",
      category: "Collègue IA pour Microsoft 365",
      openSource: "Non",
      pricing: "Licence Microsoft 365 Copilot plus Copilot Credits à $0.01 l’unité, en paiement à l’usage",
      runs: "Cloud de Microsoft, avec les fichiers OneDrive et SharePoint",
      agents: "Un sélecteur de modèle avec des modèles GPT, Claude et Grok, selon les paramètres du locataire",
      board: "Non précisé",
      schedule: "Oui : prompts planifiés (jusqu’à 25 par utilisateur) et déclencheurs e-mail ou Teams",
      talk: "Non précisé",
    },
    "chatgpt-work": {
      name: "ChatGPT Work",
      href: "https://learn.chatgpt.com/docs/get-started-with-work",
      what: "un mode Work dans ChatGPT pour les tâches qui aboutissent à un livrable à relire, comme des présentations, des tableurs et des analyses ; il partage ses capacités de base et son quota d’utilisation avec Codex.",
      category: "Collègue IA dans ChatGPT",
      openSource: "Non",
      pricing: "Dans les forfaits ChatGPT : accès limité sur Free et Go dans l’application de bureau ; complet à partir de Plus à $20/mois",
      runs: "Cloud d’OpenAI, ou votre ordinateur via l’application de bureau",
      agents: "Modèles OpenAI",
      board: "Non précisé",
      schedule: "Oui : tâches planifiées ; déclencheurs Gmail, Slack ou GitHub sur les forfaits éligibles",
      talk: "Subagents au sein d’une tâche",
    },
    "cursor-projects": {
      name: "Cursor Projects",
      href: "https://cursor.com/docs/agent/projects",
      what: "une fonctionnalité de Cursor où un agent coordinateur planifie un chantier de code d’envergure et le délègue à de nombreux agents cloud qui tournent en parallèle, avec des notes partagées et un tableau de tâches.",
      category: "Espace de travail multi-agents pour le code",
      openSource: "Non",
      pricing: "Cursor Premium $30/mois et au-delà, Teams et Enterprise ; pas sur Free ni Plus",
      runs: "Agents cloud de Cursor ; un agent local quand quelque chose doit tourner sur votre machine",
      agents: "Les agents de Cursor ; vous choisissez le modèle du coordinateur",
      board: "Oui : une liste de tâches et un tableau, partagés dans les Multiplayer Projects",
      schedule: "Oui : plannings, canaux Slack et activité des pull requests",
      talk: "Oui : le coordinateur pilote des agents exécutants ; dans les Multiplayer Projects, les coordinateurs s’envoient des messages",
    },
    "copilot-studio": {
      name: "Copilot Studio",
      href: "https://learn.microsoft.com/en-us/microsoft-copilot-studio/",
      what: "le studio low-code de Microsoft pour créer des agents, des workflows et des applications et les publier dans Microsoft Copilot, Teams, des sites web, des lignes téléphoniques et d’autres canaux.",
      category: "Outil low-code de création d’agents et de workflows",
      openSource: "Non",
      pricing: "Copilot Credits : $200 par mois pour un pack de 25 000 crédits (facturé annuellement), ou $0.01 par crédit en paiement à l’usage",
      runs: "Cloud de Microsoft, dans des environnements Power Platform",
      agents: "Les agents que vous créez ; vous choisissez un modèle par agent, dont des modèles GPT, Claude et Grok",
      board: "Pas de tableau ; un onglet Monitor et une page Workflows",
      schedule: "Oui : déclencheurs planifiés et événementiels (SharePoint, e-mail, Dataverse et autres) et workflows",
      talk: "Oui : agents connectés, agents Foundry et A2A ; un workflow peut lancer une tâche Copilot Cowork",
    },
    crewmark: {
      name: "Crewmark",
      href: "https://crewmark.ai",
      what: "un gestionnaire de tickets pour une équipe d’employés IA : chacun est une conversation Claude Code ou Codex sur votre ordinateur, avec un rôle et des objectifs, et se réveille au rythme d’une pulsation pour prendre des tickets sur un tableau partagé.",
      category: "Employés IA pour Claude Code et Codex (multi-agent harness)",
      openSource: "Oui, GPL-3.0",
      pricing: "Gratuit : 1 projet, jusqu’à 3 employés IA ; Pro à $5 et Team à $10 par mois bientôt disponibles",
      runs: "Application web ; les agents tournent sur votre ordinateur dans Claude Code ou Codex ; auto-hébergeable",
      agents: "Claude Code et Codex, avec votre propre abonnement",
      board: "Oui : statuts, priorités, assignés, commentaires et @mentions",
      schedule: "Oui : une pulsation pendant les horaires de travail (de 15 minutes à 24 heures) et des tickets récurrents",
      talk: "Via les tickets aujourd’hui ; messages directs et chaîne hiérarchique à venir",
    },
  },

  pairs: {
    "paperclip-vs-crewai": {
      summary: "Un plan de contrôle auto-hébergé pour une entreprise IA vs un framework multi-agents en Python",
      title: "Paperclip vs CrewAI : entreprise IA ou framework d’agents ?",
      description:
        "Paperclip vs CrewAI : un plan de contrôle auto-hébergé pour vos agents, ou un framework Python pour créer des crews. Prix, open source et planification.",
      h1: "Paperclip vs CrewAI : gérer des agents comme une entreprise ou les construire en code",
      lead: "Paperclip et CrewAI organisent tous deux plusieurs agents IA, mais à des niveaux différents. Paperclip est une application auto-hébergée avec un organigramme, des tâches et des budgets, qui pilote des agents que vous utilisez déjà, comme Claude Code ou Codex. CrewAI est un framework Python pour écrire des crews d’agents définis par leur rôle, qui appellent des LLM via une API, avec une plateforme commerciale pour les déployer. Voici leur comparaison, point par point, et la place de Crewmark.",
      differences: [
        "Niveau : Paperclip est une application que vous faites tourner et gérez via une interface web ; CrewAI est une bibliothèque sur laquelle vous écrivez du code.",
        "Agents : Paperclip pilote des agents existants comme Claude Code, Codex ou OpenClaw via des adaptateurs ; les agents CrewAI sont définis en Python avec un rôle, un objectif et une backstory, et appellent une API de LLM.",
        "Travail : Paperclip a des tickets liés à des objectifs et des projets, assignés à des agents ou à des personnes ; CrewAI définit les tâches dans des crews et des flows, en code.",
        "Planification : Paperclip a des pulsations et des Routines basées sur cron ; CrewAI annonce la planification cron sur sa plateforme AMP, pas pour le framework seul.",
      ],
      pickA: [
        "Vous voulez un organigramme, des budgets et des tickets pour des agents que vous utilisez déjà, comme Claude Code ou Codex.",
        "Vous préférez auto-héberger et gérer l’équipe depuis une interface web plutôt qu’en code.",
      ],
      pickB: [
        "Vous intégrez un workflow d’agents dans votre propre application Python.",
        "Vous voulez choisir le modèle et les outils de chaque agent en code, et déployer sur la plateforme de CrewAI ou sur votre propre infrastructure.",
      ],
      faq: [
        {
          q: "Paperclip est-il open source ?",
          a: "Oui, sous licence MIT, et la version auto-hébergée est gratuite. Une version cloud est sur liste d’attente.",
        },
        {
          q: "CrewAI est-il gratuit ?",
          a: "Le framework CrewAI est open source sous MIT et gratuit ; vous payez votre fournisseur de modèles. La plateforme CrewAI AMP propose une offre Basic gratuite avec 50 exécutions de workflow par mois et une offre Enterprise à tarif sur mesure.",
        },
      ],
    },
    "paperclip-vs-multica": {
      summary: "Une entreprise IA avec organigramme vs un tableau de tickets pour agents de code",
      title: "Paperclip vs Multica : organigramme ou tableau pour vos agents ?",
      description:
        "Paperclip vs Multica : deux façons de confier des tâches à Claude Code, Codex et d’autres agents. L’un modélise une entreprise, l’autre est un tableau de tickets.",
      h1: "Paperclip vs Multica : une entreprise IA ou un tableau de tickets pour vos agents",
      lead: "Paperclip et Multica répondent à un problème proche : vous avez déjà des agents de code comme Claude Code et Codex, et vous voulez leur confier du travail sur un tableau plutôt que dans un terminal. Paperclip modélise l’ensemble comme une entreprise, avec un organigramme, des budgets et une gouvernance. Multica reste plus proche d’un gestionnaire de tickets, avec des agents comme assignés et un daemon sur votre machine qui exécute leurs CLI. Voici la comparaison côte à côte, et la place de Crewmark.",
      differences: [
        "Modèle : Paperclip donne aux agents des titres, des liens hiérarchiques, des fiches de poste et des budgets ; Multica donne à chaque agent un nom, un fournisseur, un runtime et des instructions, et les regroupe en squads avec un agent leader.",
        "Licence : Paperclip est open source sous MIT ; Multica est en source disponible sous Apache 2.0 avec des conditions supplémentaires, et gratuit à auto-héberger au sein de votre propre organisation.",
        "Hébergement : Paperclip est auto-hébergé, avec une version cloud sur liste d’attente ; Multica propose une application cloud, l’auto-hébergement et une application de bureau.",
        "Agents : Paperclip connecte les agents via des adaptateurs ; le daemon de Multica exécute 29 CLI d’agents que vous avez déjà installées.",
      ],
      pickA: [
        "Vous voulez des liens hiérarchiques, des budgets et des validations pour toute une équipe d’agents.",
        "Vous voulez un logiciel sous licence MIT que vous faites tourner vous-même.",
      ],
      pickB: [
        "Vous voulez un tableau de tickets où les agents sont assignés, dans le cloud ou auto-hébergé.",
        "Vous utilisez de nombreuses CLI d’agents différentes et voulez les réunir sur un seul tableau.",
      ],
      faq: [
        {
          q: "Paperclip et Multica fonctionnent-ils avec Claude Code et Codex ?",
          a: "Oui. Paperclip les connecte via des adaptateurs, et le daemon de Multica exécute leurs CLI sur une machine que vous contrôlez. Les deux prennent aussi en charge plusieurs autres agents.",
        },
        {
          q: "Multica est-il open source ?",
          a: "Il est en source disponible : la Multica License est Apache 2.0 avec des conditions supplémentaires. L’utiliser au sein de votre propre organisation, auto-hébergement compris, est gratuit ; le proposer comme service hébergé nécessite une licence commerciale.",
        },
      ],
    },
    "paperclip-vs-openclaw": {
      summary: "Une entreprise d’agents vs un assistant personnel (Paperclip peut faire tourner OpenClaw)",
      title: "Paperclip vs OpenClaw : entreprise IA ou agent personnel ?",
      description:
        "Paperclip vs OpenClaw : une équipe d’agents gérée comme une entreprise, OpenClaw compris, ou un assistant IA personnel open source sur votre ordinateur.",
      h1: "Paperclip vs OpenClaw : une entreprise d’agents ou un agent personnel",
      lead: "Le README de Paperclip le résume simplement : si OpenClaw est un employé, Paperclip est l’entreprise. OpenClaw est un assistant personnel open source qui tourne sur votre machine et vous parle dans des applications de messagerie. Paperclip est un plan de contrôle auto-hébergé, avec un organigramme, des tâches et des budgets, qui peut piloter OpenClaw, Claude Code, Codex et d’autres agents. Ils sont souvent utilisés ensemble. Voici leur comparaison, et la place de Crewmark.",
      differences: [
        "Portée : OpenClaw est un assistant, ou plusieurs agents isolés sur un même Gateway, à qui vous parlez dans des applications de messagerie ; Paperclip organise de nombreux agents en rôles, liens hiérarchiques et budgets.",
        "Travail : Paperclip a des tickets liés à des objectifs et des projets ; la documentation d’OpenClaw indique que son registre partagé Tasks et TaskFlow ont été supprimés, si bien qu’il n’a pas de tableau de tâches.",
        "Agents : OpenClaw se connecte à des fournisseurs de modèles sous forme de plugins ; Paperclip pilote des agents existants, OpenClaw compris, via des adaptateurs.",
        "Les deux sont sous licence MIT et gratuits à faire tourner ; vous payez votre fournisseur de modèles.",
      ],
      pickA: [
        "Vous faites tourner plusieurs agents et voulez les organiser en équipe avec des rôles, des tâches et des budgets.",
        "Vous voulez qu’OpenClaw soit un employé parmi d’autres plutôt que votre seul agent.",
      ],
      pickB: [
        "Vous voulez un assistant personnel qui vous répond sur WhatsApp, Telegram, Slack ou iMessage.",
        "Vous voulez des automatisations et des agents sur votre propre ordinateur, sans service hébergé.",
      ],
      faq: [
        {
          q: "Paperclip peut-il faire tourner OpenClaw ?",
          a: "Oui. OpenClaw fait partie des agents que Paperclip connecte via un adaptateur, aux côtés de Claude Code, Codex et d’autres.",
        },
        {
          q: "OpenClaw est-il gratuit ?",
          a: "Oui. Il est sous licence MIT, et son README indique qu’il n’a ni offre payante, ni service hébergé, ni token ; vous payez le fournisseur de modèles que vous connectez.",
        },
      ],
    },
    "paperclip-vs-hermes-agent": {
      summary: "Un plan de contrôle pour entreprise IA vs l’agent personnel auto-améliorant de Nous Research",
      title: "Paperclip vs Hermes Agent : entreprise IA ou agent qui apprend ?",
      description:
        "Paperclip vs Hermes Agent : une équipe d’agents gérée comme une entreprise, ou l’agent personnel open source de Nous Research, avec Bots et routines.",
      h1: "Paperclip vs Hermes Agent : une équipe d’agents ou un agent qui apprend",
      lead: "Paperclip et Hermes Agent sont tous deux open source sous MIT, et tous deux peuvent faire tourner plus d’un agent, mais ils partent de deux bouts opposés. Hermes Agent est un agent personnel de Nous Research qui écrit et affine ses propres skills, avec un Bot Mode pour plusieurs Bots nommés. Paperclip est un plan de contrôle qui organise des agents, Hermes compris, en une entreprise avec un organigramme, des tickets et des budgets. Voici la comparaison, et la place de Crewmark.",
      differences: [
        "Point de départ : Hermes Agent est un agent à qui vous parlez depuis un terminal, une application de bureau ou des applications de messagerie ; Paperclip est une application web qui assigne du travail aux agents que vous connectez.",
        "Travail : Paperclip a des tickets liés à des objectifs et des projets ; la documentation d’Hermes Agent ne montre ni tableau de tâches ni gestionnaire de tickets.",
        "Plusieurs agents : Paperclip s’appuie sur des rôles et des liens hiérarchiques ; dans le Bot Mode d’Hermes Agent, chaque Bot a son propre rôle, son modèle et sa mémoire, et les Bots s’envoient directement des messages.",
        "Hébergement : Paperclip est auto-hébergé ; Hermes Agent tourne sur votre machine ou un serveur, et les offres payantes du Nous Portal incluent un agent hébergé dans le cloud.",
      ],
      pickA: [
        "Vous voulez une équipe d’agents différents (Claude Code, Codex, Hermes et d’autres) avec des rôles, des tickets et des budgets.",
        "Vous voulez suivre le travail sur un tableau plutôt que dans des conversations.",
      ],
      pickB: [
        "Vous voulez un seul agent qui accumule des skills et de la mémoire au fil du temps.",
        "Vous voulez des Bots nommés qui se parlent et exécutent des routines, depuis un terminal, une application de bureau ou des applications de messagerie.",
      ],
      faq: [
        {
          q: "Paperclip peut-il faire tourner Hermes Agent ?",
          a: "Oui. Hermes fait partie des agents que Paperclip liste parmi ses adaptateurs.",
        },
        {
          q: "Combien coûte Hermes Agent ?",
          a: "L’agent est gratuit et sous licence MIT ; vous payez votre fournisseur de modèles. Un abonnement Nous Portal facultatif propose les offres Free, Plus ($20 par mois), Super ($100) et Ultra ($200).",
        },
      ],
    },
    "crewai-vs-openclaw": {
      summary: "Un framework pour créer des crews d’agents vs un assistant personnel prêt à l’emploi",
      title: "CrewAI vs OpenClaw : framework d’agents ou assistant personnel ?",
      description:
        "CrewAI vs OpenClaw : un framework Python pour créer des crews d’agents, ou un assistant IA personnel open source qui vous répond dans vos messageries.",
      h1: "CrewAI vs OpenClaw : construire des agents en code ou utiliser un assistant personnel",
      lead: "CrewAI et OpenClaw font tous deux travailler plusieurs agents ensemble, mais on les utilise très différemment. CrewAI est un framework Python : vous écrivez des crews d’agents définis par leur rôle et des flows, puis les déployez sur sa plateforme AMP ou sur vos propres serveurs. OpenClaw est un assistant personnel prêt à l’emploi qui tourne sur votre ordinateur et vous répond dans WhatsApp, Telegram, Slack et d’autres applications de messagerie. Voici la comparaison, et la place de Crewmark.",
      differences: [
        "Ce que vous faites : avec CrewAI, vous écrivez du Python ; avec OpenClaw, vous installez et configurez un assistant.",
        "Où vous lui parlez : CrewAI tourne dans votre application ; OpenClaw vous répond dans les applications de messagerie que vous utilisez déjà.",
        "Plusieurs agents : les agents CrewAI se délèguent du travail et se posent des questions, avec un agent manager en mode hiérarchique ; OpenClaw fait tourner plusieurs agents isolés sur un même Gateway, avec un preset d’équipe doté d’un coordinateur.",
        "Les deux sont sous licence MIT. La plateforme AMP de CrewAI est commerciale ; OpenClaw n’a pas d’offre payante.",
      ],
      pickA: [
        "Vous êtes développeur et intégrez un workflow multi-agents dans un produit.",
        "Vous voulez déployer et superviser des crews sur une plateforme gérée.",
      ],
      pickB: [
        "Vous voulez un assistant personnel tout de suite, sans écrire de code.",
        "Vous le voulez sur votre propre machine, joignable depuis votre téléphone via des applications de messagerie.",
      ],
      faq: [
        {
          q: "Lequel convient à un non-développeur, CrewAI ou OpenClaw ?",
          a: "OpenClaw s’installe et se configure, et vous lui parlez dans des applications de messagerie. CrewAI est une bibliothèque Python : il s’adresse donc aux développeurs qui intègrent des agents dans leurs propres logiciels.",
        },
        {
          q: "CrewAI et OpenClaw sont-ils open source ?",
          a: "Les deux sont sous licence MIT. La plateforme AMP de CrewAI est un produit commercial distinct ; OpenClaw n’a ni offre payante ni service hébergé.",
        },
      ],
    },
    "crewai-vs-langgraph": {
      summary: "Crews définies par rôle vs orchestration par graphe, deux frameworks open source",
      title: "CrewAI vs LangGraph : frameworks multi-agents comparés (2026)",
      description:
        "CrewAI vs LangGraph : crews et flows par rôle, ou graphes d’état, de nœuds et d’arêtes. Licences, CrewAI AMP et LangSmith, planification, multi-agents.",
      h1: "CrewAI vs LangGraph : deux approches open source des systèmes multi-agents",
      lead: "CrewAI et LangGraph sont les deux frameworks les plus souvent comparés pour construire des systèmes multi-agents en code. CrewAI organise les agents en crews, avec des rôles, des objectifs et des backstories, plus des flows pilotés par des événements. LangGraph vous fait définir un workflow comme un graphe d’état partagé, de nœuds et d’arêtes, et n’impose aucune architecture d’agent. Les deux sont sous licence MIT, et chaque entreprise vend une plateforme hébergée. Voici la comparaison, et la place de Crewmark.",
      differences: [
        "Abstraction : CrewAI part d’agents dotés d’un rôle, d’un objectif et d’une backstory ; LangGraph part d’un graphe d’état et de nœuds, et n’impose ni prompts ni architecture d’agent.",
        "Langages : CrewAI est en Python ; LangGraph a des bibliothèques Python et JavaScript/TypeScript.",
        "Plateforme hébergée : CrewAI AMP a une offre Basic gratuite (50 exécutions de workflow par mois) et une offre Enterprise sur mesure ; LangSmith a une offre Developer gratuite, Plus à $39 par siège et par mois et une offre Enterprise sur mesure.",
        "Planification : les deux proposent des tâches cron sur leur plateforme hébergée, pas dans la seule bibliothèque open source.",
      ],
      pickA: [
        "Vous voulez décrire les agents par leur rôle et leur objectif, et les laisser se déléguer le travail.",
        "Vous travaillez en Python et voulez un Studio no-code côté plateforme.",
      ],
      pickB: [
        "Vous voulez un contrôle fin de l’état et du chemin entre les étapes.",
        "Vous travaillez en JavaScript ou TypeScript en plus de Python, ou utilisez déjà LangSmith.",
      ],
      faq: [
        {
          q: "LangGraph nécessite-t-il LangChain ?",
          a: "Non. Il est développé par LangChain, Inc., mais sa documentation indique que LangGraph ne nécessite pas LangChain. LangSmith ajoute le tracing, l’évaluation et le déploiement.",
        },
        {
          q: "CrewAI et LangGraph sont-ils gratuits ?",
          a: "Les deux frameworks sont gratuits et sous licence MIT. Leurs plateformes hébergées, CrewAI AMP et LangSmith, ont chacune une offre gratuite plus des offres payantes ou sur mesure.",
        },
      ],
    },
    "crewai-vs-autogen": {
      summary: "Deux frameworks multi-agents ; le README d’AutoGen le dit archivé",
      title: "CrewAI vs AutoGen : frameworks multi-agents comparés (2026)",
      description:
        "CrewAI vs AutoGen : crews et flows, ou les group chats de Microsoft, archivés au profit de Microsoft Agent Framework. Licences, modèles et statut comparés.",
      h1: "CrewAI vs AutoGen : crews et flows ou group chats, et qui les maintient",
      lead: "CrewAI et AutoGen ont tous deux été des moyens précoces et populaires de faire collaborer plusieurs agents LLM en code. CrewAI est développé par crewAI, Inc., avec une plateforme commerciale à côté. Le README d’AutoGen indique désormais qu’il est archivé et n’est plus maintenu par Microsoft, et oriente les nouveaux utilisateurs vers Microsoft Agent Framework, que Microsoft présente comme son successeur direct. Voici la comparaison, et la place de Crewmark.",
      differences: [
        "Maintenance : CrewAI est en développement actif ; le README d’AutoGen indique qu’il est archivé et n’est plus activement maintenu par Microsoft, sans correctifs de bugs ni de sécurité.",
        "Patterns : CrewAI propose des crews d’agents définis par leur rôle et des flows ; AutoGen propose des group chats, des équipes selector et swarm, et un passage de messages piloté par les événements.",
        "Langages : CrewAI est en Python ; AutoGen existe en Python et en .NET.",
        "Hébergement : CrewAI AMP déploie et exécute des crews ; AutoGen n’a pas de service hébergé, et AutoGen Studio tourne en local.",
      ],
      pickA: [
        "Vous démarrez un nouveau projet multi-agents et voulez un framework maintenu, avec une option hébergée.",
        "Vous voulez des agents définis par leur rôle qui se délèguent du travail.",
      ],
      pickB: [
        "Vous maintenez une application AutoGen existante et devez savoir ce que vous faites tourner avant de migrer.",
        "Vous envisagez Microsoft Agent Framework et voulez le comparer à son prédécesseur.",
      ],
      faq: [
        {
          q: "AutoGen est-il encore maintenu ?",
          a: "Son README indique que le projet est archivé et n’est plus activement maintenu par Microsoft, et recommande Microsoft Agent Framework, que Microsoft Learn présente comme le successeur direct d’AutoGen.",
        },
        {
          q: "CrewAI est-il gratuit ?",
          a: "Le framework est sous licence MIT et gratuit. La plateforme CrewAI AMP propose une offre Basic gratuite et une offre Enterprise à tarif sur mesure.",
        },
      ],
    },
    "multica-vs-hermes-agent": {
      summary: "Un tableau de tickets pour CLI d’agents vs un agent personnel avec Bots et routines",
      title: "Multica vs Hermes Agent : tableau d’agents ou agent personnel ?",
      description:
        "Multica vs Hermes Agent : un tableau de tickets pour CLI d’agents, Hermes compris, ou l’agent personnel auto-améliorant de Nous Research. Licence, planification.",
      h1: "Multica vs Hermes Agent : un tableau pour vos agents ou l’agent lui-même",
      lead: "Multica et Hermes Agent se situent à des niveaux différents. Hermes Agent est un agent : l’assistant personnel open source de Nous Research, qui apprend des skills par l’expérience et peut faire tourner des Bots nommés. Multica est le tableau autour des agents : vous assignez des tickets, et un daemon sur votre machine exécute la CLI d’agent de votre choix, Hermes compris. Voici la comparaison, et la place de Crewmark.",
      differences: [
        "Niveau : Multica assigne et suit le travail ; Hermes Agent fait le travail.",
        "Suivi du travail : Multica a des vues tableau et liste, avec des agents comme assignés ; la documentation d’Hermes Agent ne montre aucun tableau de tâches.",
        "Planification : les Autopilots de Multica tournent via cron ou des webhooks et créent des tickets ; Hermes Agent a un planificateur cron intégré et des routines par Bot.",
        "Licence : Hermes Agent est sous MIT ; Multica est en source disponible, et gratuit à auto-héberger au sein de votre propre organisation.",
      ],
      pickA: [
        "Vous voulez des tickets, des projets et des revues pour plusieurs agents, Hermes éventuellement parmi eux.",
        "Votre équipe d’humains et d’agents travaille depuis un seul tableau.",
      ],
      pickB: [
        "Vous voulez un seul agent qui garde sa mémoire et améliore ses propres skills.",
        "Vous préférez parler à votre agent dans un terminal, une application de bureau ou une messagerie plutôt que gérer un tableau.",
      ],
      faq: [
        {
          q: "Multica prend-il en charge Hermes Agent ?",
          a: "Oui. Hermes fait partie des 29 CLI d’agents que le daemon de Multica peut exécuter.",
        },
        {
          q: "Hermes Agent peut-il tourner selon un planning ?",
          a: "Oui. Il a un planificateur cron intégré et, en Bot Mode, chaque Bot peut avoir des routines.",
        },
      ],
    },
    "multica-vs-linear": {
      summary:
        "Deux gestionnaires de tickets avec des agents comme assignés : l’un pour les CLI d’agents, l’autre pour les équipes produit",
      title: "Multica vs Linear : gestion de tickets pour agents IA comparée",
      description:
        "Multica vs Linear : des tickets pour agents IA. Multica exécute des CLI d’agents sur votre machine ; Linear, hébergé, a Linear Agent et un agent de code cloud.",
      h1: "Multica vs Linear : où vos agents prennent leurs tickets",
      lead: "Linear est le gestionnaire de tickets que beaucoup d’équipes produit utilisent déjà, et il permet désormais de déléguer des tickets à Linear Agent, à un agent de code cloud basé sur Claude Code ou Codex, et à des agents tiers. Multica est conçu autour des agents dès le départ : un tableau de tickets où un daemon sur votre propre machine exécute les CLI d’agents que vous avez installées. Voici leur comparaison, et la place de Crewmark.",
      differences: [
        "Où tournent les agents : le daemon de Multica exécute des CLI d’agents sur un ordinateur portable ou un serveur que vous contrôlez ; l’agent de code de Linear tourne dans le cloud de Linear.",
        "Assignation : dans Multica, l’agent est l’assigné ; dans Linear, déléguer garde la personne comme assignée principale et ajoute l’agent comme contributeur.",
        "Travail récurrent : les Autopilots de Multica tournent via cron ou des webhooks ; les Loops de Linear tournent selon un planning ou sur des événements, facturées en crédits IA.",
        "Hébergement et prix : Multica peut être auto-hébergé (source disponible) ; Linear est uniquement hébergé, avec Free, Basic ($10) et Business ($16) par utilisateur et par mois, facturés annuellement.",
      ],
      pickA: [
        "Vous voulez que les agents tournent sur votre propre matériel, avec les CLI et les connexions que vous avez déjà.",
        "Vous voulez auto-héberger le tableau.",
      ],
      pickB: [
        "Votre équipe planifie déjà dans Linear et veut des agents dans le même outil.",
        "Vous préférez que l’agent de code tourne dans le cloud de l’éditeur.",
      ],
      faq: [
        {
          q: "Linear peut-il assigner des tickets à des agents IA ?",
          a: "Oui. Vous pouvez déléguer des tickets à Linear Agent, à un agent de code cloud qui utilise Claude Code ou Codex, et à des agents tiers comme Cursor, Codex et Devin installés dans votre espace de travail.",
        },
        {
          q: "Combien coûte Linear ?",
          a: "Free coûte $0, avec 2 équipes et 250 tickets. Basic coûte $10 et Business $16 par utilisateur et par mois, facturés annuellement. L’agent de code cloud et les Loops consomment aussi des crédits IA prépayés.",
        },
      ],
    },
    "openclaw-vs-claude-code": {
      summary: "Un assistant personnel dans vos messageries vs l’agent de code d’Anthropic",
      title: "OpenClaw vs Claude Code : assistant personnel ou agent de code ?",
      description:
        "OpenClaw vs Claude Code : un assistant personnel open source dans vos messageries, ou l’agent de code d’Anthropic. Licence, prix, modèles et planification.",
      h1: "OpenClaw vs Claude Code : un assistant dans vos messageries ou un agent dans votre code",
      lead: "OpenClaw et Claude Code sont tous deux des agents qui tournent sur votre propre ordinateur, et OpenClaw peut même réutiliser une connexion Claude Code pour accéder aux modèles Claude. Ils sont conçus pour des tâches différentes. OpenClaw est un assistant personnel que vous joignez via WhatsApp, Telegram, Slack ou iMessage. Claude Code est l’agent de code d’Anthropic : il lit votre base de code, modifie des fichiers et exécute des commandes. Voici la comparaison, et la place de Crewmark.",
      differences: [
        "Rôle : OpenClaw gère des tâches personnelles et des automatisations via des applications de messagerie ; Claude Code travaille dans un dépôt de code depuis le terminal, un IDE, l’application de bureau ou le web.",
        "Modèles : OpenClaw se connecte à de nombreux fournisseurs sous forme de plugins, Claude compris ; Claude Code tourne sur les modèles Claude.",
        "Prix et licence : OpenClaw est sous licence MIT et gratuit (vous payez le fournisseur de modèles) ; Claude Code est inclus dans les forfaits Claude payants à partir de $20 par mois et n’est pas open source.",
        "Planification : OpenClaw a un planificateur Automations intégré ; Claude Code a des tâches planifiées cloud et sur le bureau, et `/loop`.",
      ],
      pickA: [
        "Vous voulez un assistant à qui écrire depuis votre téléphone pour des tâches personnelles et des automatisations.",
        "Vous voulez combiner des fournisseurs de modèles, y compris des modèles locaux.",
      ],
      pickB: [
        "Votre travail se passe dans une base de code : fonctionnalités, correctifs, revues et refactorisations.",
        "Vous payez déjà un forfait Claude.",
      ],
      faq: [
        {
          q: "OpenClaw peut-il utiliser Claude ?",
          a: "Oui, avec une clé API Anthropic ou en réutilisant une connexion Claude Code sur la même machine.",
        },
        {
          q: "Claude Code est-il gratuit ?",
          a: "Non. Il est inclus dans les forfaits Claude payants (Pro, Max, Ultra, Team et Enterprise), pas dans Free.",
        },
      ],
    },
    "hermes-agent-vs-claude-code": {
      summary: "L’agent personnel auto-améliorant de Nous Research vs l’agent de code d’Anthropic",
      title: "Hermes Agent vs Claude Code : agent personnel ou agent de code ?",
      description:
        "Hermes Agent vs Claude Code : l’agent open source de Nous Research, avec skills et Bots, ou l’agent de code d’Anthropic. Modèles, prix et planification.",
      h1: "Hermes Agent vs Claude Code : un agent personnel qui apprend ou un agent de code",
      lead: "Hermes Agent et Claude Code tournent tous deux sur votre machine, ont tous deux des subagents et des planifications, et peuvent tous deux fonctionner avec les modèles Claude. La différence tient à leur objet. Hermes Agent, de Nous Research, est un agent personnel doté d’une boucle d’apprentissage : il écrit des skills à partir de l’expérience et garde sa propre mémoire, avec n’importe quel fournisseur de modèles. Claude Code est l’agent de code d’Anthropic, pour travailler dans une base de code. Voici la comparaison, et la place de Crewmark.",
      differences: [
        "Objet : Hermes Agent est un agent personnel généraliste ; Claude Code est conçu pour le code.",
        "Modèles : Hermes Agent fonctionne avec de nombreux fournisseurs, et sa documentation indique qu’un abonnement Claude ne fonctionne qu’avec Max et de l’usage supplémentaire acheté ; Claude Code tourne sur les modèles Claude.",
        "Plusieurs agents : les Bots d’Hermes Agent s’envoient directement des messages ; dans les agent teams expérimentales de Claude Code, les coéquipiers s’envoient des messages.",
        "Prix et licence : Hermes Agent est sous MIT et gratuit, avec un abonnement Nous Portal facultatif ; Claude Code est inclus dans les forfaits Claude payants et n’est pas open source.",
      ],
      pickA: [
        "Vous voulez un seul agent pour toutes sortes de tâches, qui améliore ses skills au fil du temps.",
        "Vous voulez choisir et changer librement de fournisseur de modèles.",
      ],
      pickB: [
        "Votre travail principal se passe dans une base de code.",
        "Vous voulez l’outillage d’Anthropic autour : extensions d’IDE, application de bureau, revue de code et tâches planifiées.",
      ],
      faq: [
        {
          q: "Hermes Agent peut-il utiliser mon abonnement Claude ?",
          a: "Sa documentation indique que la connexion par abonnement Claude ne fonctionne qu’avec Claude Max et de l’usage supplémentaire acheté, pas avec Claude Pro. Vous pouvez aussi utiliser Claude avec une clé API.",
        },
        {
          q: "Claude Code apprend-il de nouvelles skills comme Hermes Agent ?",
          a: "Claude Code utilise des skills que vous ou votre équipe écrivez sous forme de fichiers SKILL.md, et il garde une mémoire automatique (auto memory). L’objectif affiché d’Hermes Agent est d’écrire et d’affiner des skills à partir de sa propre expérience.",
        },
      ],
    },
    "openclaw-vs-opencode": {
      summary: "Un assistant personnel vs un agent de code open source, tous deux sous MIT et indépendants du modèle",
      title: "OpenClaw vs OpenCode : assistant personnel ou agent de code ?",
      description:
        "OpenClaw vs OpenCode : deux agents sous MIT, indépendants du modèle. L’un est un assistant personnel dans vos messageries, l’autre un agent de code.",
      h1: "OpenClaw vs OpenCode : des noms proches, des rôles différents",
      lead: "OpenClaw et OpenCode sont tous deux open source sous MIT, tournent tous deux sur votre propre machine et fonctionnent tous deux avec de nombreux fournisseurs de modèles, d’où les comparaisons. Ils font des choses différentes. OpenClaw est un assistant personnel à qui vous parlez dans WhatsApp, Telegram, Slack et d’autres applications de messagerie. OpenCode est un agent de code avec une interface terminal, une application de bureau, une application web et un SDK. Voici la comparaison, et la place de Crewmark.",
      differences: [
        "Rôle : OpenClaw gère des tâches personnelles et des automatisations depuis la messagerie ; OpenCode écrit et modifie du code.",
        "Interface : OpenClaw répond dans des applications de messagerie et a une Control UI ; OpenCode existe en interface terminal, application de bureau, application web et SDK.",
        "Options payantes : OpenClaw n’a pas d’offre payante ; OpenCode est gratuit, avec des modèles gratuits, et propose OpenCode Go à $10 par mois et Go Plus à $40.",
        "Planification : OpenClaw a un planificateur intégré ; les planifications d’OpenCode sont expérimentales et à activer explicitement.",
      ],
      pickA: [
        "Vous voulez un assistant à qui écrire de n’importe où.",
        "Vous voulez des automatisations déclenchées par des plannings, des webhooks ou des e-mails.",
      ],
      pickB: [
        "Vous voulez un agent de code open source qui fonctionne avec 200+ fournisseurs de modèles, y compris des modèles locaux.",
        "Vous voulez commencer à coder avec des modèles gratuits, sans compte.",
      ],
      faq: [
        {
          q: "OpenClaw et OpenCode sont-ils le même projet ?",
          a: "Non. OpenClaw est un assistant personnel de l’OpenClaw Foundation ; OpenCode est un agent de code d’Anomaly. Les deux sont sous licence MIT.",
        },
        {
          q: "Faut-il une clé API pour OpenCode ?",
          a: "Pas pour commencer : il inclut des modèles gratuits avec une limite quotidienne et ne demande pas de compte pour ceux-ci. Vous pouvez aussi connecter vos propres fournisseurs ou vous abonner à OpenCode Go.",
        },
      ],
    },
    "claude-code-agent-teams-vs-openclaw": {
      summary: "Les agent teams expérimentales de Claude Code vs le Gateway multi-agents d’OpenClaw",
      title: "Claude Code Agent Teams vs OpenClaw : deux approches multi-agents",
      description:
        "Claude Code agent teams vs OpenClaw : une session principale et ses coéquipiers dans Claude Code (expérimental), ou plusieurs agents personnels sur un Gateway OpenClaw.",
      h1: "Claude Code agent teams vs OpenClaw : deux façons de faire tourner plusieurs agents",
      lead: "Les deux vous donnent plusieurs agents qui travaillent ensemble. Les agent teams de Claude Code sont une fonctionnalité expérimentale, désactivée par défaut, où une session principale crée des coéquipiers : des instances Claude Code distinctes qui partagent une liste de tâches et s’envoient des messages. OpenClaw fait tourner plusieurs agents isolés sur un même Gateway, sur votre machine, avec un preset d’équipe dans lequel un coordinateur délègue à des agents chercheur, rédacteur et relecteur. Voici la comparaison, et la place de Crewmark.",
      differences: [
        "Objectif : les agent teams répartissent une tâche de code entre plusieurs instances Claude Code ; les agents d’OpenClaw sont des assistants personnels que vous joignez dans des applications de messagerie.",
        "Coordination : les agent teams partagent une liste de tâches avec dépendances, et les coéquipiers s’envoient des messages ; les agents OpenClaw peuvent accéder aux sessions les uns des autres, et sa documentation décrit le preset d’équipe comme un guidage par prompt plutôt que comme un planificateur.",
        "Durée de vie : une agent team tourne le temps d’une tâche, sous une session principale ; les agents OpenClaw vivent sur le Gateway et exécutent des automatisations planifiées.",
        "Coût : les agent teams sont incluses avec Claude Code dans les forfaits Claude payants ; OpenClaw est gratuit et sous licence MIT.",
      ],
      pickA: [
        "Vous voulez que plusieurs instances Claude Code se partagent une grosse tâche de code et se parlent.",
        "Vous utilisez déjà Claude Code et activer une fonctionnalité expérimentale ne vous dérange pas.",
      ],
      pickB: [
        "Vous voulez des agents personnels durables, avec leurs propres personas, sur votre machine.",
        "Vous voulez les joindre via des applications de messagerie et les faire tourner selon des plannings.",
      ],
      faq: [
        {
          q: "Comment activer les agent teams de Claude Code ?",
          a: "Elles sont expérimentales et désactivées par défaut : définissez `CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1`, et une session principale peut alors créer des coéquipiers. Voir [les agent teams de Claude Code](/blog/claude-code-agent-teams).",
        },
        {
          q: "Les agents OpenClaw peuvent-ils travailler en équipe ?",
          a: "Oui. Un même Gateway peut faire tourner plusieurs agents isolés, et un preset d’équipe crée un coordinateur plus des agents chercheur, rédacteur et relecteur.",
        },
      ],
    },
    "vibe-kanban-vs-conductor": {
      summary:
        "Deux outils d’agents de code en parallèle dont les entreprises ont arrêté leurs services hébergés en 2026",
      title: "Vibe Kanban vs Conductor : agents de code en parallèle en 2026",
      description:
        "Vibe Kanban vs Conductor : un tableau kanban open source pour agents de code, ou une app Mac qui rejoint Meta, inscriptions fermées. Ce qui reste de chacun.",
      h1: "Vibe Kanban vs Conductor : ce qui reste de chacun, et leurs différences",
      lead: "Vibe Kanban et Conductor font tous deux tourner plusieurs agents de code en parallèle, chacun dans son propre worktree git, pour que vous puissiez relire et fusionner leur travail. Les deux ont changé en 2026. bloop, l’entreprise derrière Vibe Kanban, a fermé en avril, et le projet continue en open source, maintenu par sa communauté. Conductor a annoncé le 4 novembre rejoindre Meta : les nouvelles inscriptions et les téléchargements sont fermés, son cloud est en lecture seule à partir du 13 novembre et ferme le 20 novembre, et l’application Mac reçoit de nouveaux modèles et des correctifs critiques jusqu’à début 2027. Voici la comparaison, et la place de Crewmark.",
      differences: [
        "Disponibilité : l’application locale de Vibe Kanban est gratuite et utilisable par tous ; Conductor n’accepte plus de nouvelles inscriptions ni de téléchargements.",
        "Tableau : Vibe Kanban organise le travail en tickets kanban ; Conductor liste des espaces de travail et peut en créer un à partir d’un ticket GitHub ou Linear.",
        "Licence : Vibe Kanban est open source sous Apache-2.0 ; Conductor est à code source fermé.",
        "Plateforme et agents : Vibe Kanban tourne dans votre navigateur ou en application de bureau ; Conductor est une application Mac. Les deux font tourner Claude Code, Codex, Cursor et OpenCode, et Vibe Kanban liste aussi Gemini CLI, GitHub Copilot, Amp et d’autres.",
      ],
      pickA: [
        "Vous voulez un outil open source que vous pouvez continuer à faire tourner et modifier.",
        "Vous voulez un tableau kanban devant vos agents.",
      ],
      pickB: [
        "Vous utilisez déjà Conductor sur Mac et n’avez besoin que de l’application locale.",
        "La fin des fonctions cloud le 20 novembre 2026 ne vous pose pas de problème.",
      ],
      faq: [
        {
          q: "Conductor ferme-t-il ?",
          a: "Conductor a annoncé le 4 novembre 2026 rejoindre Meta. Les nouvelles inscriptions et les téléchargements sont fermés, son cloud est en lecture seule à partir du 13 novembre et ferme le 20 novembre, et l’application Mac reçoit de nouveaux modèles et des correctifs critiques jusqu’à début 2027. Voir [les alternatives à Conductor](/blog/conductor-alternatives).",
        },
        {
          q: "Vibe Kanban est-il encore maintenu ?",
          a: "bloop a annoncé le 10 avril 2026 qu’elle fermait. Le projet continue en open source sous Apache-2.0, maintenu par sa communauté, et l’application locale est gratuite.",
        },
      ],
    },
    "claude-squad-vs-conductor": {
      summary:
        "Agents de code en parallèle : une application de terminal open source vs une application Mac qui rejoint Meta",
      title: "Claude Squad vs Conductor : agents Claude Code en parallèle",
      description:
        "Claude Squad vs Conductor : une app de terminal open source (tmux, worktrees), ou une app Mac qui rejoint Meta et ferme son cloud le 20 novembre 2026.",
      h1: "Claude Squad vs Conductor : terminal ou application Mac pour des agents en parallèle",
      lead: "Claude Squad et Conductor font le même travail de fond : faire tourner plusieurs agents de code à la fois, chacun sur sa propre branche dans un worktree git, et vous aider à relire et fusionner les résultats. Claude Squad est une application de terminal open source construite sur tmux. Conductor est une application Mac à code source fermé qui a annoncé le 4 novembre 2026 rejoindre Meta, et n’accepte plus de nouveaux utilisateurs. Voici leur comparaison, et la place de Crewmark.",
      differences: [
        "Interface : Claude Squad est une interface terminal qui nécessite tmux et la CLI GitHub ; Conductor est une application de bureau Mac.",
        "Licence : Claude Squad est open source sous AGPL-3.0 ; Conductor est à code source fermé.",
        "Agents : Claude Squad utilise Claude Code par défaut et peut faire tourner Codex, Gemini, Aider ou tout programme que vous configurez ; Conductor fait tourner Claude Code, Codex, OpenCode et Cursor Agent.",
        "Statut : la dernière version de Claude Squad est la v1.0.20 (août 2026) ; Conductor a fermé les nouvelles inscriptions et les téléchargements le 4 novembre 2026, arrête son cloud le 20 novembre et met à jour son application Mac jusqu’à début 2027.",
      ],
      pickA: [
        "Vous vivez dans le terminal et voulez un outil open source que tout le monde peut installer.",
        "Vous voulez faire tourner n’importe quel agent CLI que vous pouvez configurer.",
      ],
      pickB: [
        "Vous utilisez déjà Conductor et préférez une application de bureau avec diffs et pull requests intégrés.",
        "Vous êtes sur Mac et n’avez besoin que de l’application locale jusqu’à début 2027.",
      ],
      faq: [
        {
          q: "Claude Squad est-il gratuit ?",
          a: "Oui. Il est open source sous AGPL-3.0 ; vous payez les agents ou les API de modèles que vous y faites tourner.",
        },
        {
          q: "Peut-on encore télécharger Conductor ?",
          a: "Pas en tant que nouvel utilisateur : Conductor a fermé les inscriptions et les téléchargements le 4 novembre 2026, en annonçant rejoindre Meta. Les utilisateurs existants gardent l’application Mac, qui reçoit des mises à jour jusqu’à début 2027.",
        },
      ],
    },
    "devin-vs-claude-code": {
      summary: "L’ingénieur logiciel IA cloud de Cognition vs l’agent de code d’Anthropic",
      title: "Devin vs Claude Code : ingénieur logiciel IA ou agent de code ?",
      description:
        "Devin vs Claude Code : l’ingénieur logiciel IA de Cognition (VM cloud, Automations, sessions enfants) ou l’agent de code d’Anthropic. Prix et fonctions.",
      h1: "Devin vs Claude Code : un ingénieur dans le cloud ou un agent à vos côtés",
      lead: "Devin et Claude Code sont tous deux des agents de code qui écrivent, exécutent et testent du code et ouvrent des pull requests. Devin, de Cognition, s’articule autour de sessions cloud, chacune sur sa propre machine virtuelle, avec des Automations et un coordinateur qui fait tourner des Devins enfants ; il a aussi une application de bureau et une CLI. Claude Code, d’Anthropic, travaille dans votre terminal, votre IDE, l’application de bureau ou le web, sur les modèles Claude. Voici la comparaison, et la place de Crewmark.",
      differences: [
        "Où il tourne : chaque session cloud de Devin a sa propre VM ; Claude Code tourne en local par défaut, avec des sessions cloud sur le web.",
        "Modèles : Devin utilise SWE-2 de Cognition et des modèles de pointe de plusieurs laboratoires, choisis par un routeur ; Claude Code tourne sur les modèles Claude.",
        "Prix : Devin propose Free, Pro à $20 et Max à $200 par mois, et Teams à $80 par mois plus $40 par siège de développeur ; Claude Code est inclus dans Claude Pro ($20), Max ($100), Ultra ($200), Team et Enterprise.",
        "Automatisation : les Automations de Devin tournent selon des plannings et sur des événements venant de Slack, GitHub, Linear et d’autres ; les tâches planifiées cloud de Claude Code tournent selon un planning, un appel API ou un événement GitHub.",
      ],
      pickA: [
        "Vous voulez chaque tâche dans sa propre VM cloud, lancée depuis Slack, Linear ou Jira.",
        "Vous voulez une session coordinatrice qui fait tourner des sessions enfants et leur envoie des messages.",
      ],
      pickB: [
        "Vous voulez que l’agent travaille dans votre propre copie du dépôt et votre terminal.",
        "Vous payez déjà un forfait Claude et voulez des extensions d’IDE, une application de bureau et le web.",
      ],
      faq: [
        {
          q: "Combien coûte Devin ?",
          a: "Free coûte $0, Pro $20 par mois, Max $200 par mois, et Teams $80 par mois plus $40 par mois par siège de développeur complet, jusqu’à 100 utilisateurs ; Enterprise est sur devis.",
        },
        {
          q: "Claude Code est-il inclus dans Claude Pro ?",
          a: "Oui. Claude Code est inclus dans tous les forfaits Claude payants : Pro, Max, Ultra, Team et Enterprise.",
        },
      ],
    },
    "devin-vs-codex": {
      summary: "L’ingénieur logiciel IA de Cognition vs l’agent de code d’OpenAI",
      title: "Devin vs Codex : ingénieurs logiciels IA comparés (2026)",
      description:
        "Devin vs OpenAI Codex : VM cloud, Automations et sessions enfants, ou un agent en CLI, IDE, app ChatGPT et cloud. Prix, open source, planification, modèles.",
      h1: "Devin vs Codex : deux agents de code qui travaillent aussi dans le cloud",
      lead: "Devin et Codex exécutent tous deux des tâches de code en local et dans le cloud, et ouvrent des pull requests. Devin, de Cognition, donne à chaque session cloud sa propre machine virtuelle et y ajoute des Automations et des sessions coordinatrices. Codex, d’OpenAI, est inclus dans les forfaits ChatGPT et tourne en CLI dans le terminal, en extension d’IDE, dans l’application de bureau ChatGPT et dans Codex Cloud. Voici la comparaison, et la place de Crewmark.",
      differences: [
        "Tarification : Devin est vendu avec ses propres offres (Free, Pro $20, Max $200, Teams) ; Codex est inclus dans les forfaits ChatGPT à partir de Plus à $20 par mois, ou utilisé avec une clé API.",
        "Open source : la CLI, le SDK et l’App Server de Codex sont sous Apache-2.0 ; Devin n’est pas open source.",
        "Modèles : Devin route entre SWE-2 de Cognition et des modèles de pointe ; Codex tourne sur les modèles OpenAI.",
        "Planification : les Automations de Devin tournent selon des plannings et de nombreuses sources d’événements ; Codex a des tâches planifiées dans l’application de bureau ChatGPT et sur le web.",
      ],
      pickA: [
        "Vous voulez que de nombreuses sources d’événements (Slack, Teams, Jira, PagerDuty, webhooks) lancent le travail.",
        "Vous voulez un coordinateur qui fait tourner des sessions enfants dans des VM parallèles.",
      ],
      pickB: [
        "Vous payez déjà ChatGPT et voulez l’agent dans votre terminal et votre IDE.",
        "Vous voulez une CLI open source que vous pouvez inspecter.",
      ],
      faq: [
        {
          q: "Codex est-il gratuit ?",
          a: "Codex est inclus dans les forfaits ChatGPT payants à partir de Plus ($20 par mois) et peut aussi fonctionner avec une clé API OpenAI. La CLI elle-même est open source sous Apache-2.0.",
        },
        {
          q: "Devin et Codex peuvent-ils prendre des tickets Linear ?",
          a: "Oui. Vous pouvez assigner des tickets Linear à Devin et, sur les forfaits ChatGPT payants, assigner des tickets Linear à Codex ou le mentionner dans un commentaire.",
        },
      ],
    },
    "factory-vs-claude-code": {
      summary: "La plateforme Droids de Factory vs l’agent de code d’Anthropic",
      title: "Factory vs Claude Code : Droids ou Claude Code ?",
      description:
        "Factory (Droids) vs Claude Code : agents de code avec Automations, Workstreams et ordinateurs cloud, ou l’agent d’Anthropic. Modèles, prix, multi-agents.",
      h1: "Factory vs Claude Code : la plateforme Droids ou l’agent d’Anthropic",
      lead: "Factory et Claude Code sont tous deux des agents de code avec une application de bureau, une CLI et un mode headless pour la CI. Les Droids de Factory fonctionnent avec de nombreux modèles, y compris avec vos propres clés, et ajoutent des Automations, des Workstreams avec un orchestrateur et des ordinateurs cloud hébergés par Factory. Claude Code est l’agent d’Anthropic sur les modèles Claude, inclus dans les forfaits Claude payants. Voici la comparaison, et la place de Crewmark.",
      differences: [
        "Modèles : Factory fonctionne avec des modèles de pointe et à poids ouverts, et avec vos propres clés ; Claude Code tourne sur les modèles Claude.",
        "Prix : Factory propose Free (avec votre propre inférence), Pro à $20, Plus à $100 par mois et des offres supérieures ; Claude Code est inclus dans Claude Pro ($20), Max ($100), Ultra ($200), Team et Enterprise.",
        "Plusieurs agents : dans les Workstreams de Factory (bêta), les agents d’un orchestrateur lui rendent compte ; dans les agent teams expérimentales de Claude Code, les coéquipiers s’envoient des messages.",
        "Automatisation : les Automations de Factory tournent selon des plannings ou via Slack, GitHub ou des webhooks ; Claude Code a des tâches planifiées cloud et GitHub Actions.",
      ],
      pickA: [
        "Vous voulez passer d’un modèle à l’autre entre différents laboratoires, ou apporter le vôtre.",
        "Vous voulez des ordinateurs cloud hébergés et des automatisations comme ticket-vers-PR selon un planning.",
      ],
      pickB: [
        "Les modèles Claude vous conviennent et vous payez déjà un forfait Claude.",
        "Vous voulez les outils d’Anthropic autour : revue de code, revue de sécurité et plugins.",
      ],
      faq: [
        {
          q: "Que sont les Droids de Factory ?",
          a: "Les Droids sont les agents de code de Factory. Ils tournent dans l’application de bureau Factory, dans la Droid CLI, en mode headless dans la CI avec `droid exec`, et sur des ordinateurs cloud hébergés par Factory.",
        },
        {
          q: "Factory fonctionne-t-il avec les modèles Claude ?",
          a: "Factory indique prendre en charge les principaux modèles de pointe, dont Claude Opus et Sonnet, ainsi que des modèles à poids ouverts et vos propres clés API.",
        },
      ],
    },
    "opencode-vs-claude-code": {
      summary: "Un agent de code open source, pour tous les modèles, vs l’agent de code d’Anthropic",
      title: "OpenCode vs Claude Code : l’agent de code open source comparé",
      description:
        "OpenCode vs Claude Code : un agent MIT pour 200+ fournisseurs, modèles gratuits compris, ou l’agent d’Anthropic des forfaits Claude payants. Prix, modèles.",
      h1: "OpenCode vs Claude Code : open source et tous les modèles, ou l’agent d’Anthropic",
      lead: "OpenCode et Claude Code sont tous deux des agents de code avec une interface terminal, une application de bureau, des subagents et MCP. OpenCode est open source sous MIT et fonctionne avec les modèles de 200+ fournisseurs, y compris des modèles locaux et une sélection de modèles gratuits. Claude Code est l’agent d’Anthropic sur les modèles Claude, inclus dans les forfaits Claude payants. Voici la comparaison, et la place de Crewmark.",
      differences: [
        "Licence : OpenCode est sous MIT ; le dépôt de Claude Code est public mais tous droits réservés.",
        "Modèles : OpenCode fonctionne avec 200+ fournisseurs via Models.dev ; Claude Code tourne sur les modèles Claude.",
        "Prix : OpenCode est gratuit, avec des modèles gratuits, et OpenCode Go coûte $10 par mois ; Claude Code est inclus dans les forfaits Claude à partir de Pro à $20 par mois.",
        "Planification : Claude Code a des tâches planifiées cloud et sur le bureau, et `/loop` ; les planifications d’OpenCode sont expérimentales et à activer explicitement.",
      ],
      pickA: [
        "Vous voulez un agent open source et la liberté de choisir n’importe quel modèle, y compris local.",
        "Vous voulez commencer gratuitement.",
      ],
      pickB: [
        "Vous voulez les modèles Claude avec l’outillage d’Anthropic : tâches planifiées, revue de code et extensions d’IDE.",
        "Vous payez déjà un forfait Claude.",
      ],
      faq: [
        {
          q: "OpenCode est-il gratuit ?",
          a: "Oui. L’agent est gratuit et sous licence MIT, et il est fourni avec des modèles gratuits soumis à une limite quotidienne. OpenCode Go coûte $10 par mois et Go Plus $40.",
        },
        {
          q: "OpenCode peut-il utiliser les modèles Claude ?",
          a: "OpenCode fonctionne avec 200+ fournisseurs de modèles, dont Anthropic : vous pouvez donc utiliser les modèles Claude avec une clé API.",
        },
      ],
    },
    "relevance-ai-vs-lindy": {
      summary: "Un outil low-code pour créer une AI Workforce vs un assistant IA prêt à l’emploi",
      title: "Relevance AI vs Lindy : AI Workforce ou assistant IA ?",
      description:
        "Relevance AI vs Lindy : une plateforme low-code pour créer des équipes d’agents IA, ou un assistant hébergé pour e-mail, agenda et Slack. Prix et agents.",
      h1: "Relevance AI vs Lindy : construire une AI Workforce ou recruter un assistant",
      lead: "Relevance AI et Lindy vendent tous deux l’idée d’un employé IA, sous des formes différentes. Relevance AI est une plateforme low-code pour créer des agents spécialisés et les relier en une « AI Workforce » multi-agents, vendue aux entreprises via l’équipe commerciale. Lindy est un assistant hébergé unique qui travaille dans votre boîte de réception, votre agenda, vos réunions et Slack, avec des routines et des validations. Voici la comparaison, et la place de Crewmark.",
      differences: [
        "Forme : Relevance AI est un outil pour créer de nombreux agents spécialisés ; Lindy est un assistant par espace de travail à qui vous confiez des tâches.",
        "Tarifs : la page de tarifs de Relevance AI ne liste qu’Enterprise, via l’équipe commerciale ; Lindy propose un essai gratuit avec $50 de crédits et des offres à partir de $29.99 par mois par utilisateur actif.",
        "Plusieurs agents : les agents de Relevance AI se passent le travail sur un canevas ; la documentation de Lindy décrit un Lindy par espace de travail.",
        "Validations : Lindy demande votre accord avant toute action ayant un impact extérieur ; Relevance AI a des escalades et, sur Enterprise, des contrôles des horaires de travail.",
      ],
      pickA: [
        "Vous voulez concevoir plusieurs agents spécialisés et les relier, avec une équipe de l’éditeur qui vous aide à déployer.",
        "Vous achetez pour une entreprise et vous attendez à passer par l’équipe commerciale.",
      ],
      pickB: [
        "Vous voulez un seul assistant pour les e-mails, l’agenda, les réunions et les relances, dès aujourd’hui.",
        "Vous voulez l’essayer gratuitement avant de payer.",
      ],
      faq: [
        {
          q: "Combien coûte Lindy ?",
          a: "Un essai gratuit donne $50 de crédits pendant 7 jours. Les offres payantes commencent à $29.99 par mois par utilisateur actif pour 3 000 crédits.",
        },
        {
          q: "Relevance AI a-t-il une offre gratuite ?",
          a: "Sa documentation indique que l’offre Free a été retirée, et la page de tarifs publique ne liste qu’Enterprise, via l’équipe commerciale.",
        },
      ],
    },
    "grok-bot-vs-claude-code": {
      summary: "Les coéquipiers IA hébergés de xAI vs l’agent de code d’Anthropic",
      title: "Grok Bot vs Claude Code : coéquipiers IA ou agent de code ?",
      description:
        "Grok Bot vs Claude Code : les Bots hébergés de xAI, avec leur propre ordinateur, dans Slack et vos applications, ou l’agent de code d’Anthropic pour votre dépôt.",
      h1: "Grok Bot vs Claude Code : des coéquipiers pour vos applications ou un agent pour votre code",
      lead: "Grok Bot et Claude Code prennent tous deux en charge du vrai travail, à des endroits différents. Grok Bot est le coéquipier IA hébergé de xAI : chaque Bot dispose de son propre ordinateur dans le cloud, se connecte à vos outils, travaille dans Slack et Microsoft Teams et exécute des routines. Claude Code est l’agent de code d’Anthropic : il travaille dans votre dépôt depuis le terminal, un IDE, l’application de bureau ou le web. Voici la comparaison, et la place de Crewmark.",
      differences: [
        "Rôle : Grok Bot prend en charge du travail dans des applications métier comme le CRM, le support, les notes de frais et le recrutement ; Claude Code écrit et modifie du code.",
        "Où il tourne : chaque Grok Bot a son propre ordinateur cloud et continue de travailler quand votre ordinateur portable est fermé ; Claude Code tourne sur votre machine par défaut, avec des sessions cloud sur le web.",
        "Comment vous travaillez avec : vous écrivez aux Grok Bots dans leur application, dans Slack, dans Teams ou lors d’un appel vidéo ; vous travaillez avec Claude Code dans un terminal, un IDE, l’application de bureau ou le web.",
        "Prix : Grok Bot propose Premium à $30, Super à $100 et Ultra à $200 par mois ; Claude Code est inclus dans Claude Pro ($20), Max ($100), Ultra ($200), Team et Enterprise.",
      ],
      pickA: [
        "Vous voulez des coéquipiers IA pour la vente, les opérations ou le support, dans les applications que votre équipe utilise déjà.",
        "Vous les voulez dans Slack et dans vos réunions, au travail pendant que votre ordinateur portable est fermé.",
      ],
      pickB: [
        "Votre travail se passe dans une base de code : fonctionnalités, correctifs, revues et refactorisations.",
        "Vous voulez que l’agent travaille dans votre propre copie du dépôt, avec vos outils et vos tests.",
      ],
      faq: [
        {
          q: "Combien coûte Grok Bot ?",
          a: "Premium coûte $30 par mois, Super $100 et Ultra $200, facturés mensuellement, chacun avec un usage hebdomadaire de Grok Bot inclus ; l’usage supplémentaire est facturé au coût des tokens. Teams et Enterprise passent par l’équipe commerciale.",
        },
        {
          q: "Grok Bot peut-il écrire du code ?",
          a: "xAI cite des usages d’ingénierie, comme reproduire un bug dans l’interface d’un produit et créer le ticket, ainsi qu’un guide pour coordonner des agents de code depuis Linear. Claude Code est conçu pour travailler directement dans votre dépôt.",
        },
      ],
    },
    "grok-bot-vs-hermes-agent": {
      summary: "Les coéquipiers IA hébergés de xAI vs l’agent personnel open source de Nous Research",
      title: "Grok Bot vs Hermes Agent : Bots hébergés ou agent open source ?",
      description:
        "Grok Bot vs Hermes Agent : les Bots hébergés de xAI, avec leur propre ordinateur, ou l’agent open source de Nous Research, avec Bots, routines et tout fournisseur.",
      h1: "Grok Bot vs Hermes Agent : des coéquipiers hébergés ou un agent que vous faites tourner",
      lead: "Grok Bot et Hermes Agent proposent tous deux des Bots nommés qui se parlent et exécutent des routines, d’où la comparaison. Grok Bot est le produit hébergé de xAI : chaque Bot a son propre ordinateur cloud et travaille dans Slack, Teams et vos applications. Hermes Agent est l’agent open source de Nous Research que vous faites tourner vous-même avec n’importe quel fournisseur de modèles, avec un Bot Mode pour plusieurs Bots nommés. Voici la comparaison, et la place de Crewmark.",
      differences: [
        "Hébergement : Grok Bot tourne dans le cloud de xAI ; Hermes Agent tourne sur votre machine ou un serveur, et les offres payantes du Nous Portal incluent un agent hébergé dans le cloud.",
        "Licence et prix : Grok Bot est à code source fermé, à partir de $30 par mois ; Hermes Agent est sous MIT et gratuit, avec un abonnement Nous Portal facultatif à partir de $20 par mois.",
        "Modèles : Grok Bot est construit avec Grok ; Hermes Agent fonctionne avec de nombreux fournisseurs, y compris des modèles locaux.",
        "Où vous lui parlez : Grok Bot travaille dans son application, Slack, Teams et les appels vidéo ; Hermes Agent fonctionne depuis un terminal, une application de bureau ou des applications de messagerie.",
      ],
      pickA: [
        "Vous voulez des coéquipiers hébergés, dotés de leur propre ordinateur, qui travaillent dans Slack, Teams et vos réunions.",
        "Vous préférez ne rien faire tourner vous-même.",
      ],
      pickB: [
        "Vous voulez un agent open source que vous faites tourner vous-même, avec le fournisseur de modèles de votre choix.",
        "Vous voulez un agent qui écrit et affine ses propres skills au fil du temps.",
      ],
      faq: [
        {
          q: "Hermes Agent est-il gratuit ?",
          a: "Oui. Il est sous licence MIT et gratuit ; vous payez votre fournisseur de modèles. Un abonnement Nous Portal facultatif propose les offres Free, Plus ($20 par mois), Super ($100) et Ultra ($200).",
        },
        {
          q: "Grok Bot et Hermes Agent ont-ils tous deux des Bots qui se parlent ?",
          a: "Oui. Les Grok Bots s’envoient des messages et se coordonnent dans des discussions de groupe ; dans le Bot Mode d’Hermes Agent, des Bots nommés s’envoient directement des messages.",
        },
      ],
    },
    "openbot-vs-grok-bot": {
      summary: "Un espace de travail open source et auto-hébergeable pour collègues IA vs les Bots hébergés de xAI",
      title: "OpenBot vs Grok Bot : collègues IA open source ou hébergés ?",
      description:
        "OpenBot vs Grok Bot : l’espace de travail de CopilotKit pour collègues IA, sous MIT et auto-hébergeable, ou les Bots hébergés de xAI. Hébergement, modèles, prix.",
      h1: "OpenBot vs Grok Bot : des collègues IA que vous hébergez ou que vous louez",
      lead: "OpenBot et Grok Bot donnent tous deux à chaque collègue IA son propre ordinateur, avec un navigateur et des outils, et tous deux ont des routines et des validations. OpenBot, de CopilotKit, est open source et auto-hébergeable : il tourne sur votre ordinateur portable ou votre cluster Kubernetes, avec les modèles et les agents de votre choix. Grok Bot est le produit hébergé de xAI, construit avec Grok, qui travaille dans Slack, Teams et vos applications. Voici la comparaison, et la place de Crewmark.",
      differences: [
        "Hébergement : OpenBot tourne sur votre ordinateur portable ou votre cluster Kubernetes, ou hébergé par CopilotKit en accès anticipé ; Grok Bot tourne dans le cloud de xAI.",
        "Licence : le modèle d’application d’OpenBot est sous MIT, et CopilotKit Intelligence a une licence distincte ; Grok Bot est à code source fermé.",
        "Modèles : OpenBot fonctionne avec OpenAI, Claude, Gemini ou des modèles ouverts, et connecte vos propres agents via AG-UI ; Grok Bot est construit avec Grok.",
        "Prix : OpenBot est gratuit pour les projets personnels et coûte jusqu’à $29 par utilisateur actif et par mois en Business ; Grok Bot coûte $30, $100 ou $200 par mois selon l’offre.",
      ],
      pickA: [
        "Vous voulez auto-héberger des collègues IA et garder vos données et vos modèles sous votre contrôle.",
        "Vous voulez personnaliser l’espace de travail ou le proposer en marque blanche.",
      ],
      pickB: [
        "Vous voulez des Bots hébergés, prêts à l’emploi dans Slack, Teams et vos réunions.",
        "Vous préférez ne pas gérer d’infrastructure.",
      ],
      faq: [
        {
          q: "OpenBot est-il gratuit ?",
          a: "Il est gratuit pour les projets personnels sur votre ordinateur portable. OpenBot for Business coûte jusqu’à $29 par utilisateur actif et par mois, plus 5 % des dépenses mensuelles en modèles au-delà de $5 000 ; vous payez directement les fournisseurs de modèles.",
        },
        {
          q: "OpenBot est-il open source ?",
          a: "Le modèle d’application d’OpenBot est sous licence MIT. Il utilise CopilotKit Intelligence, qui a une licence distincte : gratuite sur un ordinateur portable, avec des licences d’essai et de production pour Kubernetes.",
        },
      ],
    },
    "claude-cowork-vs-claude-code": {
      summary: "L’agent d’Anthropic pour le travail intellectuel vs son agent pour le code",
      title: "Claude Cowork vs Claude Code : quel agent d’Anthropic choisir ?",
      description:
        "Claude Cowork vs Claude Code : l’agent d’Anthropic pour les documents, la recherche et les tableurs dans les apps Claude, ou son agent de code pour votre dépôt.",
      h1: "Claude Cowork vs Claude Code : deux agents d’Anthropic pour des travaux différents",
      lead: "Claude Cowork et Claude Code viennent de la même entreprise, tournent sur les modèles Claude, et Anthropic indique que Cowork repose sur la même architecture que Claude Code. Ils visent des travaux différents. Cowork prend en charge le travail intellectuel dans les applications Claude, comme la recherche, les documents, les tableurs et les présentations, surtout dans le cloud d’Anthropic. Claude Code travaille dans votre dépôt de code, depuis le terminal, un IDE, l’application de bureau ou le web. Les deux sont inclus dans les forfaits Claude payants. Voici la comparaison, et la place de Crewmark.",
      differences: [
        "Travail : Cowork transforme un résultat attendu en documents, en tableurs avec formules, en présentations ou en dossiers organisés ; Claude Code lit votre base de code, modifie des fichiers et exécute des commandes.",
        "Où il tourne : les tâches Cowork s’exécutent dans le cloud d’Anthropic et accèdent aux fichiers locaux via Claude Desktop ; Claude Code tourne sur votre machine par défaut, avec des sessions cloud sur le web.",
        "Où vous l’utilisez : Cowork est dans les applications Claude sur ordinateur, sur le web et sur mobile ; Claude Code est dans le terminal, les extensions d’IDE, l’application de bureau et le web.",
        "Planification : Cowork planifie des tâches de toutes les heures à chaque semaine dans le cloud ; Claude Code propose des tâches planifiées cloud et sur le bureau, ainsi que `/loop`.",
      ],
      pickA: [
        "Votre travail, c’est de la recherche, des documents, des tableurs ou des présentations.",
        "Vous voulez confier des tâches depuis votre téléphone ou le navigateur et récupérer des fichiers.",
      ],
      pickB: ["Votre travail se passe dans un dépôt de code.", "Vous voulez un agent qui utilise votre terminal, vos tests et git."],
      faq: [
        {
          q: "Claude Cowork et Claude Code sont-ils inclus dans le même forfait ?",
          a: "Oui. Les deux sont inclus dans les forfaits Claude payants : Pro, Max, Ultra, Team et Enterprise. Claude Free n’inclut ni l’un ni l’autre.",
        },
        {
          q: "Claude Cowork peut-il écrire du code ?",
          a: "Anthropic positionne Cowork sur le travail intellectuel hors code et Claude Code sur l’ingénierie logicielle. Pour les tâches qui ne tournent que sur votre ordinateur, Anthropic oriente vers Claude Code dans l’application de bureau.",
        },
      ],
    },
    "claude-cowork-vs-chatgpt-work": {
      summary: "Les collègues IA d’Anthropic et d’OpenAI dans leurs applications de chat",
      title: "Claude Cowork vs ChatGPT Work : collègues IA comparés",
      description:
        "Claude Cowork vs ChatGPT Work : les agents d’Anthropic et d’OpenAI pour documents, recherche et tâches récurrentes. Forfaits, exécution, plannings, validations.",
      h1: "Claude Cowork vs ChatGPT Work : deux collègues IA dans les applications de chat",
      lead: "Claude Cowork et ChatGPT Work font le même type de travail : vous décrivez un résultat dans l’application de chat, et l’agent planifie les étapes, travaille dans des fichiers, des applications connectées et un navigateur, puis vous remet quelque chose à relire. Cowork est celui d’Anthropic, dans les forfaits Claude payants. ChatGPT Work est celui d’OpenAI, dans les forfaits ChatGPT, et partage ses capacités et son quota d’utilisation avec Codex. Voici la comparaison, et la place de Crewmark.",
      differences: [
        "Forfaits : Cowork est inclus dans les forfaits Claude payants à partir de Pro à $20 par mois, pas dans Free ; ChatGPT Work offre un accès limité sur Free et Go dans l’application de bureau, et un accès complet à partir de Plus à $20 par mois.",
        "Où il tourne : Cowork tourne dans le cloud d’Anthropic et accède aux fichiers locaux via Claude Desktop ; ChatGPT Work tourne dans le cloud d’OpenAI, ou en local via l’application de bureau ChatGPT.",
        "Planification : Cowork exécute des tâches planifiées de toutes les heures à chaque semaine ; ChatGPT Work propose des tâches planifiées, plus des déclencheurs d’événements Gmail, Slack ou GitHub sur les forfaits éligibles.",
        "Validations : Cowork propose les modes Manual, Auto (avec un contrôle de sécurité) et Skip ; ChatGPT Work s’arrête pour faire valider les actions importantes, avec des modes d’autorisation dans l’application de bureau.",
      ],
      pickA: [
        "Vous payez déjà Claude, ou voulez les modèles d’Anthropic pour les documents et la recherche.",
        "Vous voulez des tâches planifiées qui tournent dans le cloud pendant que votre ordinateur est éteint.",
      ],
      pickB: [
        "Vous payez déjà ChatGPT, ou voulez l’essayer avec le forfait Free dans l’application de bureau.",
        "Vous voulez des tâches déclenchées par des événements Gmail, Slack ou GitHub.",
      ],
      faq: [
        {
          q: "ChatGPT Work est-il gratuit ?",
          a: "ChatGPT Free et Go ont un accès limité à ChatGPT Work dans l’application de bureau. Plus ($20 par mois) et Pro l’ont sur ordinateur, sur le web et sur mobile.",
        },
        { q: "Claude Cowork est-il gratuit ?", a: "Non. Il n’est disponible que dans les forfaits Claude payants, à partir de Pro à $20 par mois." },
      ],
    },
    "copilot-cowork-vs-claude-cowork": {
      summary: "Le collègue IA de Microsoft 365 vs celui d’Anthropic",
      title: "Copilot Cowork vs Claude Cowork : Microsoft ou Anthropic ?",
      description:
        "Copilot Cowork vs Claude Cowork : l’agent de Microsoft dans Outlook, Teams et Office, ou celui d’Anthropic dans les apps Claude. Licences, coût et fonctions.",
      h1: "Copilot Cowork vs Claude Cowork : l’agent de Microsoft 365 ou celui de Claude",
      lead: "Copilot Cowork et Claude Cowork partagent un nom et une idée : confier une tâche en plusieurs étapes à un agent et valider ce qu’il fait. Copilot Cowork travaille dans Microsoft 365 : il envoie des e-mails, planifie des réunions et modifie des fichiers Office dans OneDrive et SharePoint, et peut utiliser des modèles GPT, Claude ou Grok. Claude Cowork est l’agent d’Anthropic dans les applications Claude, sur les modèles Claude. Voici la comparaison, et la place de Crewmark.",
      differences: [
        "Où se trouve votre travail : Copilot Cowork travaille dans Outlook, Teams, OneDrive et SharePoint et ne peut pas accéder aux fichiers de votre appareil local ; Claude Cowork fonctionne avec des connecteurs comme Google Drive, Gmail, Microsoft 365 et Slack, et avec des fichiers locaux via Claude Desktop.",
        "Coût : Copilot Cowork nécessite une licence Microsoft 365 Copilot plus des Copilot Credits à $0.01 l’unité ; Claude Cowork est inclus dans les forfaits Claude payants à partir de Pro à $20 par mois.",
        "Modèles : Copilot Cowork propose un sélecteur de modèle avec des modèles GPT, Claude et Grok, selon les paramètres du locataire ; Claude Cowork tourne sur les modèles Claude.",
        "Comptes : Copilot Cowork est destiné aux comptes professionnels ou scolaires, avec les comptes personnels en préversion ; Claude Cowork est proposé dans les forfaits Claude individuels et d’équipe.",
      ],
      pickA: [
        "Votre organisation fonctionne sous Microsoft 365 et dispose déjà de licences Microsoft 365 Copilot.",
        "Vous voulez que l’agent envoie des e-mails, réserve des réunions et publie dans Teams pour vous, avec validation.",
      ],
      pickB: [
        "Vous travaillez en dehors de Microsoft 365, ou voulez des fichiers locaux et un navigateur sur votre propre ordinateur.",
        "Vous préférez un forfait mensuel fixe à une facturation au crédit.",
      ],
      faq: [
        {
          q: "Combien coûte Copilot Cowork ?",
          a: "Il nécessite une licence Microsoft 365 Copilot, et son usage est facturé en Copilot Credits : $0.01 par crédit en paiement à l’usage, ou une offre prépayée d’un an avec des remises de 5 % à 20 %.",
        },
        {
          q: "Copilot Cowork utilise-t-il Claude ?",
          a: "Son sélecteur de modèle inclut Claude Opus, Sonnet et Fable aux côtés des modèles GPT et Grok, selon les paramètres du locataire ; les locataires dans l’EU Data Boundary n’ont accès qu’aux modèles GPT.",
        },
      ],
    },
    "chatgpt-work-vs-codex": {
      summary: "Le mode Work de ChatGPT vs l’agent de code d’OpenAI",
      title: "ChatGPT Work vs Codex : lequel choisir ?",
      description:
        "ChatGPT Work vs Codex : le mode Work d’OpenAI pour documents et analyses, ou son agent de code pour vos dépôts. Capacités et usage partagés : les différences.",
      h1: "ChatGPT Work vs Codex : même moteur, usages différents",
      lead: "ChatGPT Work et Codex sont tous deux des agents d’OpenAI, et OpenAI indique que Work partage les capacités de base, l’exécution et les limites d’utilisation de Codex. La différence tient à leur usage. ChatGPT Work est un mode de ChatGPT pour les tâches qui aboutissent à un livrable à relire, comme des présentations, des tableurs et des analyses. Codex est l’agent de code, en CLI dans le terminal, en extension d’IDE, dans l’application de bureau ChatGPT et dans le cloud. Voici la comparaison, et la place de Crewmark.",
      differences: [
        "Travail : ChatGPT Work renvoie des documents, des présentations, des tableurs et des analyses ; Codex lit, modifie et exécute du code dans un dépôt.",
        "Où vous l’utilisez : ChatGPT Work est dans ChatGPT sur le web, sur ordinateur et sur mobile ; Codex est en CLI dans le terminal, en extension d’IDE, dans l’application de bureau ChatGPT et dans Codex Cloud.",
        "Usage : ils partagent les limites d’utilisation et les crédits de Codex.",
        "Open source : la CLI, le SDK et l’App Server de Codex sont sous Apache-2.0 ; ChatGPT Work n’est pas open source.",
      ],
      pickA: ["Votre tâche aboutit à un document, une présentation ou une analyse.", "Vous voulez la lancer depuis ChatGPT sur votre téléphone ou sur le web."],
      pickB: [
        "Votre tâche, c’est du code : fonctionnalités, correctifs et revues.",
        "Vous voulez un agent dans votre terminal ou votre IDE, ou dans la CI avec `codex exec`.",
      ],
      faq: [
        {
          q: "ChatGPT Work et Codex partagent-ils leur quota d’utilisation ?",
          a: "Oui. OpenAI indique que ChatGPT Work partage les capacités de base, l’exécution et les limites d’utilisation de Codex, crédits compris.",
        },
        {
          q: "Quels forfaits ChatGPT incluent Work ?",
          a: "Free et Go ont un accès limité dans l’application de bureau ; Plus ($20 par mois), Pro et Business l’ont sur ordinateur, sur le web et sur mobile.",
        },
      ],
    },
    "claude-cowork-vs-grok-bot": {
      summary: "Le collègue IA d’Anthropic dans les applications Claude vs les Bots de xAI dotés de leur propre ordinateur",
      title: "Claude Cowork vs Grok Bot : collègues IA comparés",
      description:
        "Claude Cowork vs Grok Bot : l’agent d’Anthropic pour documents et recherche dans Claude, ou les Bots de xAI dotés d’un ordinateur cloud, dans Slack et vos apps.",
      h1: "Claude Cowork vs Grok Bot : un agent de tâches dans Claude ou une équipe de Bots",
      lead: "Claude Cowork et Grok Bot sont deux collègues IA qui continuent de travailler dans le cloud pendant votre absence. Claude Cowork est l’agent d’Anthropic dans les applications Claude : vous lui confiez une tâche et récupérez des fichiers. Grok Bot est celui de xAI : des Bots dotés de leur propre ordinateur cloud, qui se connectent à vos outils, travaillent dans Slack, Microsoft Teams et les appels vidéo, et se passent le travail. Voici la comparaison, et la place de Crewmark.",
      differences: [
        "Forme : Claude Cowork reçoit des tâches de votre part, avec des subagents au sein d’une tâche ; Grok Bot donne à chaque Bot son propre poste, et les Bots s’envoient des messages et se coordonnent dans des discussions de groupe.",
        "Où vous travaillez avec : Claude Cowork est dans les applications Claude sur ordinateur, sur le web et sur mobile ; Grok Bot est dans sa propre application, dans Slack, dans Teams et lors des appels vidéo.",
        "Forfaits : Claude Cowork est inclus dans les forfaits Claude payants à partir de Pro à $20 par mois ; Grok Bot est inclus dans les offres Premium ($30 par mois), Super et Ultra.",
        "Modèles : Claude Cowork tourne sur les modèles Claude ; Grok Bot est construit avec Grok.",
      ],
      pickA: [
        "Vous confiez des documents, des recherches et des tableurs, et voulez récupérer des fichiers.",
        "Vous utilisez déjà Claude.",
      ],
      pickB: [
        "Vous voulez plusieurs Bots ayant chacun leur poste, au travail dans Slack et dans les applications de votre équipe.",
        "Vous voulez des Bots dans vos réunions.",
      ],
      faq: [
        {
          q: "Grok Bot peut-il participer à des réunions ?",
          a: "Oui. Selon xAI, vous pouvez ajouter un Bot à un appel Google Meet, Zoom ou Teams : il écoute, intervient dans le chat quand il peut aider et assure le suivi ensuite.",
        },
        {
          q: "Claude Cowork peut-il tourner pendant que mon ordinateur est éteint ?",
          a: "Les tâches cloud continuent sur les serveurs d’Anthropic ; seul le travail qui nécessite des fichiers locaux ou votre navigateur attend Claude Desktop.",
        },
      ],
    },
    "cursor-projects-vs-grok-bot": {
      summary: "L’agent coordinateur de Cursor pour le code vs les Bots de xAI pour le travail dans vos applications",
      title: "Cursor Projects vs Grok Bot : agents coordinateurs comparés",
      description:
        "Cursor Projects vs Grok Bot : un coordinateur qui pilote de nombreux agents cloud sur votre code, ou les Bots de xAI dans Slack et vos apps. Offres, fonctions.",
      h1: "Cursor Projects vs Grok Bot : une équipe d’agents pour le code ou pour tout le reste",
      lead: "Cursor Projects et Grok Bot placent tous deux un agent à la tête des autres. Dans un Cursor Project, un agent coordinateur planifie une fonctionnalité, une migration ou une application et délègue le code à de nombreux agents cloud en parallèle. Grok Bot, c’est l’ensemble de coéquipiers IA de xAI, chacun avec son propre ordinateur cloud, qui travaillent dans Slack, Teams et vos applications, un Bot pouvant gérer les autres. Les deux démarrent avec des offres à $30 par mois. Voici la comparaison, et la place de Crewmark.",
      differences: [
        "Travail : Cursor Projects sert au développement logiciel dans un dépôt GitHub ; Grok Bot prend en charge du travail dans des applications métier comme le CRM, le support, les notes de frais et le recrutement.",
        "Coordination : le coordinateur d’un Cursor Project crée et gère des agents exécutants, et dans les Multiplayer Projects les coordinateurs s’envoient des messages ; les Grok Bots s’envoient des messages et se coordonnent dans des discussions de groupe.",
        "État partagé : un Cursor Project conserve des fichiers partagés (préférences, notes, workflows) et un tableau de tâches ; les Grok Bots gardent en mémoire la façon dont votre équipe travaille.",
        "Déclencheurs : Cursor Projects agit selon des plannings, des canaux Slack et des pull requests ; les Grok Bots exécutent des routines planifiées et travaillent dans Slack et Teams.",
      ],
      pickA: [
        "Vous voulez qu’un long chantier de code soit planifié et réparti entre de nombreux agents.",
        "Votre équipe utilise déjà Cursor et GitHub.",
      ],
      pickB: [
        "Vous voulez des coéquipiers IA pour les opérations, la vente ou le support dans vos applications existantes.",
        "Vous les voulez dans Slack, Teams et les réunions.",
      ],
      faq: [
        {
          q: "Quelles offres Cursor incluent Projects ?",
          a: "Toutes les offres avec Cloud Agents : Premium ($30 par mois) et au-delà, Teams, Enterprise et les anciennes offres payantes. Pas Free, Plus ni l’ancienne offre Hobby.",
        },
        {
          q: "Un Cursor Project continue-t-il de travailler quand mon ordinateur portable est fermé ?",
          a: "Oui. Un Project tourne sur son propre ordinateur dans le cloud ; le coordinateur ne lance un agent local que lorsque quelque chose doit être testé sur votre machine.",
        },
      ],
    },
    "copilot-cowork-vs-copilot-studio": {
      summary: "Le collègue IA de Microsoft vs l’outil de création d’agents de Microsoft",
      title: "Copilot Cowork vs Copilot Studio : quelle différence ?",
      description:
        "Copilot Cowork vs Copilot Studio : l’agent Microsoft 365 qui exécute vos tâches, ou le studio low-code où vous créez agents et workflows. Coût et fonctions.",
      h1: "Copilot Cowork vs Copilot Studio : utiliser un agent ou en créer un",
      lead: "Copilot Cowork et Copilot Studio sont deux produits Microsoft, tous deux facturés en Copilot Credits, et ils partagent la réserve de crédits prépayés d’un locataire. La différence tient à qui fait le travail. Copilot Cowork est un agent de Microsoft 365 Copilot à qui vous confiez une tâche : il envoie des e-mails, réserve des réunions et modifie des fichiers Office avec votre validation. Copilot Studio est l’outil où les créateurs conçoivent leurs propres agents, workflows et applications et les publient dans Teams, Microsoft Copilot, des sites web ou sur une ligne téléphonique. Un workflow Copilot Studio peut même lancer une tâche Cowork comme l’une de ses étapes. Voici la comparaison, et la place de Crewmark.",
      differences: [
        "Rôle : Copilot Cowork fait une tâche pour vous dans Outlook, Teams, Word, Excel, PowerPoint, OneDrive et SharePoint ; Copilot Studio est un studio low-code pour créer des agents, des workflows et des applications que d’autres utilisent.",
        "Qui l’utilise : Copilot Cowork s’adresse à toute personne disposant d’une licence Microsoft 365 Copilot et de Cowork activé ; Copilot Studio s’adresse aux créateurs, et les agents qu’ils publient peuvent servir des employés ou des clients sur un site web ou une ligne téléphonique.",
        "Coût : Copilot Cowork nécessite une licence Microsoft 365 Copilot plus des Copilot Credits à $0.01 l’unité ; Copilot Studio vend des packs de 25 000 crédits à $200 par mois (facturés annuellement) ou $0.01 par crédit en paiement à l’usage, et sa licence de créateur coûte $0.",
        "Automatisation : Copilot Cowork exécute des prompts planifiés et des déclencheurs e-mail ou Teams ; Copilot Studio y ajoute des déclencheurs d’agents, des validations en plusieurs étapes avec un connecteur Human review, et des workflows qui peuvent appeler Cowork comme une étape.",
      ],
      pickA: [
        "Vous voulez qu’un agent fasse du travail Microsoft 365 pour vous dès aujourd’hui, sans rien construire.",
        "Vous voulez valider chaque e-mail, réunion ou publication Teams avant son envoi.",
      ],
      pickB: [
        "Vous voulez créer un agent ou un workflow que d’autres personnes, ou des clients, utiliseront.",
        "Vous avez besoin de connecteurs, de validations en plusieurs étapes, de canaux de publication ou d’environnements séparés de développement, de test et de production.",
      ],
      faq: [
        {
          q: "Copilot Cowork fait-il partie de Copilot Studio ?",
          a: "Non, ce sont des produits distincts. Ils partagent la réserve de Copilot Credits prépayés d’un locataire, et un workflow Copilot Studio peut lancer ou reprendre une tâche Copilot Cowork via son nœud Copilot.",
        },
        {
          q: "Combien coûte Copilot Studio ?",
          a: "Le Licensing Guide de Microsoft indique $200 par mois (facturés annuellement) pour un pack de 25 000 Copilot Credits par locataire, ou $0.01 par crédit en paiement à l’usage. Les crédits non utilisés d’un pack ne sont pas reportés. La licence de créateur coûte $0, et l’essai gratuit ne permet pas de publier des agents.",
        },
      ],
    },
  },
};
