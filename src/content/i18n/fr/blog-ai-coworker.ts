import type { GuideCopy } from "@/components/landing/guide-article";

// French translation of /blog/ai-coworker; the English master is src/content/blog/ai-coworker.ts.

export const copy: GuideCopy = {
  meta: {
    title: "Collègues IA (AI coworker) : Claude Cowork, Copilot, ChatGPT Work",
    description:
      "Collègues IA comparés : Claude Cowork, Copilot Cowork, ChatGPT Work, Gemini, Meta Muse, Grok Bot et l’open source, dont OpenWorker d’Andrew Ng.",
  },
  breadcrumb: "Outils de collègues IA",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-13" },
  hero: {
    kicker: "Blog · Collègues IA",
    title: "Les collègues IA comparés : ce que fait chacun, ce qu’il coûte et ce qu’il demande avant d’agir",
    lead: "Un collègue IA est un agent à qui vous confiez une tâche entière. Il travaille dans vos fichiers, vos applications et votre navigateur, continue en arrière-plan et vous consulte avant toute action risquée. En 2026, Anthropic, Microsoft, OpenAI, Google, Meta et xAI proposent chacun le leur, et il en existe des versions open source sur GitHub, dont OpenWorker d’Andrew Ng. Voici ce que fait chacun, qui peut y accéder, ce qu’il coûte et où il s’exécute, d’après les propres pages de chaque éditeur.",
    cta: "Commencer",
    secondary: "Voir le tableau",
    secondaryHref: "#at-a-glance",
  },
  sections: [
    {
      kind: "text",
      id: "what-is",
      title: "Qu’est-ce qu’un collègue IA ?",
      text: [
        "Un chatbot répond. Un collègue IA prend en charge une tâche au résultat clair, comme un rapport, une présentation, un tableur rempli ou une boîte de réception vidée, et en exécute lui-même les étapes. Les produits diffèrent beaucoup, mais ils ont quatre points communs :",
      ],
      points: [
        "Il travaille là où se trouve votre travail : fichiers, e-mails, agenda, applications connectées et navigateur.",
        "Il continue sans vous : dans un ordinateur cloud, ou sur votre propre machine tant qu’une application reste ouverte.",
        "Il peut répéter : la plupart exécutent des tâches selon un planning ou quand un événement survient, comme l’arrivée d’un nouvel e-mail.",
        "Il demande d’abord : l’envoi, la publication, l’achat et la suppression attendent votre accord.",
      ],
    },
    {
      kind: "table",
      id: "at-a-glance",
      title: "Les collègues IA en un coup d’œil",
      text: [
        "Informations tirées du site, de la page tarifs, de la documentation ou du GitHub de chaque éditeur, vérifiées le 13 novembre 2026. Prix en dollars américains. Ce n’est pas un classement.",
      ],
      headers: ["Collègue IA", "Éditeur", "Qui peut y accéder", "Prix à partir de", "Où il s’exécute"],
      rows: [
        ["Claude Cowork", "Anthropic", "Offres Claude payantes, hors Free", "Claude Pro, $20/mois", "Cloud d’Anthropic ; fichiers locaux et navigateur via l’application de bureau"],
        ["Copilot Cowork", "Microsoft", "Comptes professionnels ou scolaires avec une licence Microsoft 365 Copilot ; comptes personnels en préversion", "Copilot Credits à $0.01 l’unité, en plus de la licence", "Cloud de Microsoft, avec vos fichiers OneDrive et SharePoint"],
        ["ChatGPT Work", "OpenAI", "Offres ChatGPT ; accès limité sur Free et Go, dans l’application de bureau", "Accès complet dès ChatGPT Plus, $20/mois", "Cloud d’OpenAI, ou votre ordinateur via l’application de bureau"],
        ["Tâches Gemini (anciennement Spark)", "Google", "Google AI Pro ou Ultra, adultes avec un compte personnel ; pas dans l’EEE, en Suisse, au Royaume-Uni ni au Nigeria", "Google AI Pro, $19.99/mois (États-Unis)", "Cloud de Google"],
        ["Meta Muse", "Meta", "États-Unis et Canada, 18 ans et plus ; Singapour depuis le 27 octobre", "Gratuit pour l’essentiel ; abonnements disponibles", "Un ordinateur cloud par utilisateur"],
        ["Grok Bot", "xAI", "Offres Premium, Super, Ultra, Teams et Enterprise", "Premium, $30/mois", "Un ordinateur cloud par Bot ; Slack, Teams et appels"],
        ["Lindy", "Lindy", "Tout le monde ; essai gratuit", "$29.99/mois par utilisateur actif", "Cloud de Lindy ; Slack, e-mail, iMessage, téléphone"],
        ["OpenWorker (open source)", "Andrew Ng", "Tout le monde ; application de bureau en bêta ouverte", "Gratuit ; votre propre clé de modèle ou un modèle local", "Votre ordinateur (macOS, Windows)"],
        ["OpenBot (open source)", "CopilotKit", "Tout le monde", "Gratuit pour les projets personnels ; Business jusqu’à $29/utilisateur/mois", "Votre ordinateur portable ou votre cluster Kubernetes"],
        ["Suparagent (open source)", "Anil-matcha sur GitHub", "Tout le monde", "Gratuit en auto-hébergement ; version hébergée dès $15/mois", "Application de bureau, votre serveur ou version hébergée"],
        ["Crewmark", "Crewmark", "Tout le monde", "Gratuit : 1 projet, jusqu’à 3 employés IA", "Votre ordinateur, dans votre Claude Code ou Codex"],
      ],
    },
    {
      kind: "text",
      id: "guides",
      title: "Un guide pour chaque collègue IA",
      points: [
        "[Claude Cowork](/personal-agent/claude-cowork) : offres, configuration, modes de validation et Cowork vs Claude Code.",
        "[Copilot Cowork](/personal-agent/copilot-cowork) : licences, Copilot Credits et configuration dans Microsoft 365.",
        "[ChatGPT Work](/personal-agent/chatgpt-work) : ce que fait le mode Work, quelles offres l’incluent et son lien avec Codex.",
        "[Cursor Projects](/personal-agent/cursor-projects) : l’agent coordinateur de Cursor pour les chantiers de code d’envergure.",
        "[Lindy](/personal-agent/lindy) : tarifs en crédits et configuration.",
        "[OpenWorker](/personal-agent/openworker), [OpenBot](/personal-agent/openbot) et [Suparagent](/personal-agent/suparagent) : les projets open source, avec leur installation depuis GitHub.",
        "Côte à côte : [tous les comparatifs](/compare), comme [Claude Cowork vs Claude Code](/compare/claude-cowork-vs-claude-code) et [Copilot Cowork vs Copilot Studio](/compare/copilot-cowork-vs-copilot-studio).",
      ],
    },
    {
      kind: "text",
      id: "big-labs",
      title: "Les collègues IA des grands laboratoires",
      points: [
        "Claude Cowork (Anthropic) : du travail hors code dans les applications Claude, comme la recherche, les documents, les tableurs, les présentations et la gestion de fichiers. Les tâches s’exécutent dans le cloud et continuent même ordinateur portable fermé ; vous pouvez les planifier toutes les heures, chaque jour ou chaque semaine avec `/schedule`. En mode Manual, il demande avant d’agir ; en mode Auto, il soumet chaque action à un contrôle de sécurité. Offres payantes uniquement, à partir de Pro à $20 par mois.",
        "Copilot Cowork (Microsoft) : des tâches en plusieurs étapes dans Microsoft 365, qu’il s’agisse d’envoyer des e-mails, de planifier des réunions, de modifier des fichiers Word, Excel et PowerPoint ou de publier dans Teams. Il affiche une boîte de dialogue de validation avant les actions sensibles, exécute des tâches planifiées ou déclenchées par un événement, et vous laisse choisir des modèles GPT, Claude ou Grok selon les paramètres du locataire (tenant). Il nécessite une licence Microsoft 365 Copilot, plus l’usage facturé en Copilot Credits.",
        "ChatGPT Work (OpenAI) : un mode Work dans ChatGPT pour les tâches qui aboutissent à un livrable à relire, comme des présentations, des tableurs et des analyses. Il partage ses capacités de base et son quota d’utilisation avec Codex. Free et Go y ont un accès limité dans l’application de bureau ; à partir de Plus ($20 par mois), il est disponible sur ordinateur, sur le web et sur mobile, avec des tâches planifiées et des déclencheurs d’événements.",
        "Tâches Gemini (Google, anciennement Spark) : un agent cloud dans l’application Gemini qui utilise Gmail, Docs et d’autres applications Google, s’exécute selon un planning ou quand un événement survient, et demande toujours avant d’envoyer, de supprimer, d’acheter ou de soumettre des formulaires. La page d’aide de Google mentionne Google AI Pro ou Ultra.",
        "Meta Muse : un agent personnel basé sur le modèle Muse Spark de Meta, avec son propre ordinateur cloud pour chaque utilisateur. Il travaille selon un planning et en réaction à des événements, et rien n’est publié, envoyé ni dépensé sans votre accord. Meta le présente comme gratuit pour l’essentiel des besoins, avec des abonnements pour aller plus loin.",
        "Grok Bot (xAI) : des Bots dotés de leur propre ordinateur cloud, qui se connectent à vos outils, travaillent dans Slack, Microsoft Teams et les appels vidéo, exécutent des routines et se passent le travail entre eux. Inclus dans les offres Premium ($30 par mois), Super et Ultra de xAI. Voir [Grok Bot vs Claude Code](/compare/grok-bot-vs-claude-code).",
      ],
    },
    {
      kind: "text",
      id: "github",
      title: "Collègues IA open source sur GitHub",
      text: [
        "Si vous préférez faire tourner votre collègue IA vous-même, avec vos propres clés de modèle ou un modèle local, voici des projets open source :",
      ],
      points: [
        "[OpenWorker](https://github.com/andrewyng/openworker) (MIT, environ 19 000 étoiles) : le « collègue IA pour votre travail quotidien » (« AI coworker for your everyday work ») d’Andrew Ng, une application de bureau pour macOS et Windows en bêta ouverte. Il tourne sur votre machine avec des modèles OpenAI, Anthropic, Gemini ou locaux, soumet les actions à validation et peut planifier des synthèses et des rapports.",
        "[OpenBot](https://github.com/CopilotKit/OpenBot) (MIT, environ 11 600 étoiles) : l’espace de travail auto-hébergeable de CopilotKit pour des collègues IA, chacun avec son propre navigateur, ses fichiers et ses outils. Il utilise CopilotKit Intelligence, sous licence séparée. Voir [OpenBot vs Grok Bot](/compare/openbot-vs-grok-bot).",
        "[Suparagent](https://github.com/Anil-matcha/suparagent) (Apache-2.0, environ 7 000 étoiles) : « un espace de travail pour collègues IA » (« a workspace for AI coworkers ») qui fait tourner des agents nommés, avec routines et validations, sur des moteurs que vous utilisez déjà, comme Claude Code, Codex ou Gemini CLI.",
        "[ai-employees](https://github.com/markfulton/ai-employees) (MIT) : huit rôles métier sous forme de dossiers de routines planifiées, exécutés par l’agent que vous utilisez déjà.",
      ],
    },
    {
      kind: "text",
      id: "coding",
      title: "Un collègue IA pour le code : Cursor Projects",
      text: ["La plupart des collègues IA ci-dessus s’occupent de documents, d’e-mails et de recherche. Pour le développement logiciel, Cursor a ajouté Projects :"],
      points: [
        "Un agent coordinateur planifie un travail d’envergure, comme une fonctionnalité, une migration ou une application complète, le délègue à des agents qui tournent en parallèle sur les Cloud Agents de Cursor, puis vous rapporte le travail terminé pour que vous le vérifiiez.",
        "Chaque Project tourne sur son propre ordinateur cloud, donc fermer votre ordinateur portable ne l’arrête pas, et il conserve des notes partagées, des préférences et un tableau de tâches que tous les agents lisent.",
        "Il peut surveiller un canal Slack, s’exécuter selon un planning ou suivre vos pull requests. Dans les Multiplayer Projects, chaque membre de l’équipe a un coordinateur, et les coordinateurs s’envoient des messages.",
        "Il est inclus dans les offres Cursor avec Cloud Agents, à partir de Premium à $30 par mois, mais pas dans Free ni Plus. Voir le [guide Cursor Projects](/personal-agent/cursor-projects) et [Cursor Projects vs Grok Bot](/compare/cursor-projects-vs-grok-bot).",
      ],
    },
    {
      kind: "text",
      id: "free",
      title: "Existe-t-il un collègue IA gratuit ?",
      points: [
        "Meta Muse : gratuit pour l’essentiel des besoins, selon Meta.",
        "ChatGPT Work : accès limité sur ChatGPT Free, dans l’application de bureau.",
        "Open source : OpenWorker, OpenBot (projets personnels) et Suparagent ne coûtent rien à faire tourner ; vous payez votre fournisseur de modèle ou utilisez un modèle local.",
        "Lindy : un essai gratuit avec $50 de crédits pendant 7 jours.",
        "Crewmark : gratuit pour 1 projet et jusqu’à 3 employés IA, sur l’abonnement Claude Code ou Codex que vous avez déjà.",
        "Claude Cowork, les tâches Gemini, Copilot Cowork et Grok Bot nécessitent une offre payante ou une licence.",
      ],
    },
    {
      kind: "steps",
      id: "how-to-choose",
      title: "Comment choisir un collègue IA",
      steps: [
        { title: "Partir de là où se trouve votre travail", text: "Microsoft 365 au travail oriente vers Copilot Cowork, Gmail et Google Docs vers Gemini ; si vous payez déjà Claude ou ChatGPT, Cowork ou Work est inclus dans votre offre." },
        { title: "Décider où il doit s’exécuter", text: "Les collègues IA dans le cloud continuent quand votre ordinateur portable est fermé. Les projets open source gardent vos données, vos clés et vos fichiers sur votre machine." },
        { title: "Vérifier comment il demande", text: "Cherchez des validations avant l’envoi, la publication et les dépenses, ainsi qu’un journal de ce qu’il a fait." },
        { title: "Tester une tâche récurrente pendant deux semaines", text: "Un rapport hebdomadaire ou un tri quotidien de la boîte de réception montre vite s’il vous fait gagner du temps." },
      ],
    },
    {
      kind: "text",
      id: "coworker-vs-employee",
      title: "Collègue IA vs employé IA",
      text: [
        "Les deux termes se recoupent. En pratique, un collègue IA est un outil à qui vous confiez des tâches au fil de l’eau, alors qu’un employé IA occupe un poste permanent : une fiche de poste, des objectifs, des horaires de travail et une file de travail qu’il prend en charge de lui-même. Les plateformes construites autour de cette seconde idée sont comparées dans [les meilleures plateformes d’employés IA](/blog/best-ai-employee-platforms).",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Avec Crewmark",
      title: "Confiez un poste permanent à votre agent de codage",
      text: [
        "Crewmark transforme vos propres sessions Claude Code ou Codex en employés IA dotés d’un rôle, d’objectifs chiffrés, d’horaires de travail et d’une pulsation. Chacun prend le ticket suivant sur un tableau partagé et vous pose la question sur le ticket quand il a besoin d’une décision.",
      ],
      steps: [
        { title: "Choisir un rôle", text: "Parmi les [rôles d’employés IA](/ai-employees), comme un [spécialiste SEO IA](/ai-employees/seo-specialist)." },
        { title: "Mettre le travail sur un tableau", text: "Assignez des tickets et rendez récurrents ceux qui reviennent régulièrement ; la pulsation réveille l’employé pour qu’il prenne le suivant." },
        { title: "Voir ce qu’il sait faire", text: "Des missions, avec leur configuration pour chaque agent, se trouvent dans [les cas d’usage de Claude Code](/use-cases/claude-code) et [les cas d’usage de Codex](/use-cases/codex)." },
      ],
    },
  ],
  howTo: { section: "how-to-choose", name: "Choisir un collègue IA" },
  mid: {
    title: "Envie d’un collègue IA avec un poste permanent ?",
    text: "Crewmark donne à votre agent Claude Code ou Codex un rôle, une pulsation et un tableau partagé.",
    button: "Commencer",
  },
  faq: {
    title: "FAQ",
    items: [
      {
        q: "Qu’est-ce qu’un collègue IA ?",
        a: "Un agent à qui vous confiez une tâche entière. Il travaille dans vos fichiers, vos applications et votre navigateur, continue en arrière-plan, peut répéter des tâches selon un planning et demande avant d’envoyer, de publier, d’acheter ou de supprimer.",
      },
      {
        q: "Quel est le collègue IA d’Andrew Ng ?",
        a: "OpenWorker : une application de bureau open source pour macOS et Windows, sous licence MIT, sur github.com/andrewyng/openworker. Son README la décrit comme « un collègue IA pour votre travail quotidien » (« an AI coworker for your everyday work »). Elle tourne sur votre machine avec votre propre clé de modèle ou un modèle local.",
      },
      {
        q: "Claude Cowork est-il gratuit ?",
        a: "Non. Claude Cowork n’est disponible que sur les offres Claude payantes, à partir de Pro à $20 par mois (ou $17 par mois en facturation annuelle). Claude Free ne l’inclut pas.",
      },
      {
        q: "Combien coûte Copilot Cowork ?",
        a: "Il nécessite une licence Microsoft 365 Copilot, et son usage est facturé en Copilot Credits : $0.01 par crédit en paiement à l’usage, ou une offre prépayée d’un an avec des remises de 5 % à 20 %.",
      },
      {
        q: "Claude Cowork vs Claude Code : quelle différence ?",
        a: "Claude Cowork sert au travail hors code dans les applications Claude : recherche, documents, tableurs, présentations et fichiers. Claude Code est l’agent de codage d’Anthropic pour votre dépôt. Selon Anthropic, Cowork repose sur la même architecture que Claude Code.",
      },
      {
        q: "Existe-t-il des collègues IA open source sur GitHub ?",
        a: "Oui : OpenWorker (Andrew Ng, MIT), OpenBot (CopilotKit, MIT), Suparagent (Apache-2.0) et ai-employees (MIT), entre autres.",
      },
    ],
  },
  cta: {
    title: "Confiez un poste à votre IA, pas seulement une tâche.",
    text: "Crewmark transforme des sessions Claude Code et Codex en employés IA dotés de rôles, d’objectifs, d’horaires de travail et d’une pulsation.",
    button: "Commencer",
  },
  checked: "Informations vérifiées sur le site, la page tarifs, la documentation ou le GitHub de chaque éditeur le 13 novembre 2026.",
  disclaimer:
    "Crewmark est un produit indépendant, sans lien avec les entreprises citées sur cette page ni approuvé par elles. Les noms de produits sont des marques de leurs propriétaires.",
};
