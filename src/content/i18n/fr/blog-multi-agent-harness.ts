import type { GuideCopy } from "@/components/landing/guide-article";

// French translation of /blog/multi-agent-harness; the English master is src/content/blog/multi-agent-harness.ts.
// An agent's "+1" is rendered as "N+1", the usual French term for one's direct manager.

export const copy: GuideCopy = {
  meta: {
    title: "Multi-agent harness : le harness d'une équipe d'agents IA",
    description:
      "Le harness d'un agent ne suffit pas à une équipe. Un multi-agent harness ajoute rôles, tâches, chaîne hiérarchique, échanges entre agents et réveils programmés.",
  },
  breadcrumb: "Multi-agent harness",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-13" },
  hero: {
    kicker: "Blog · Agent harness",
    title: "Multi-agent harness : le harness d'un seul agent ne suffit pas à une équipe",
    lead: "Un harness pour un seul agent ne suffit plus : dès que plusieurs agents travaillent sur le même produit, il leur faut un harness qui les fait tourner comme une seule équipe. Claude Code et Codex donnent déjà à chaque agent une boucle, des outils et des permissions. Ce qu'ils ne vous donnent pas, c'est qui fait quoi, comment le travail passe d'un agent à l'autre, qui rend compte à qui, comment les agents se parlent et quand chacun se réveille. Tout cela, c'est le multi-agent harness. Il compte cinq éléments, plus des agents dont le seul travail est d'encadrer, et cette page les passe en revue un par un, en s'appuyant sur la façon dont fonctionne l'équipe IA de Crewmark elle-même.",
    cta: "Commencer",
    secondary: "Les cinq éléments",
    secondaryHref: "#parts",
  },
  sections: [
    {
      kind: "text",
      id: "what-is",
      title: "Qu'est-ce qu'un agent harness, et pourquoi un seul ne suffit-il pas ?",
      text: [
        "Un agent harness est le logiciel autour d'un modèle qui en fait un agent qui travaille : la boucle qui rappelle le modèle après chaque résultat d'outil, les outils qu'il peut utiliser (terminal, fichiers, navigateur, serveurs MCP), le contexte qu'il lit et les permissions qui l'empêchent de faire ce qu'il ne doit pas. Claude Code, Codex, OpenCode et [DeepSeek Harness](/blog/deepseek-harness) sont des harnesses, tout comme un framework open source tel que Deep Agents de LangChain.",
        "Tous répondent à la même question : comment un agent mène-t-il un travail à bout ? Faites travailler cinq agents sur un même produit et d'autres questions prennent le dessus. Quel agent est responsable du SEO, et lequel du déploiement ? Où va une tâche quand un agent a fini sa part ? Qui vérifie le travail, et à qui un agent s'adresse-t-il quand il est bloqué ? Qui réveille les agents le matin ? Le harness d'un seul agent n'a pas de réponse, parce qu'il a été conçu pour un agent et une personne qui tape.",
      ],
    },
    {
      kind: "table",
      id: "parts",
      title: "Les cinq éléments d'un multi-agent harness",
      text: [
        "Un multi-agent harness gère des agents comme une entreprise gère une équipe. Voici ses cinq éléments, et où en est chacun dans Crewmark aujourd'hui. Les éléments à venir sont conçus et inscrits sur la feuille de route ; ils figurent ici pour que vous sachiez ce qui arrive.",
      ],
      headers: ["Élément", "Dans Crewmark", "À quoi il sert"],
      rows: [
        ["1. Rôles et responsabilités", "Disponible", "Chaque agent a un rôle et un travail clairement défini, comme CMO, créateur de contenu ou spécialiste SEO ; certains ont aussi un KPI"],
        ["2. Un système de tâches", "Disponible", "Les tâches peuvent être attribuées à n'importe quel rôle, passer d'un rôle à l'autre et sont suivies du début à la fin"],
        ["3. Une chaîne hiérarchique", "À venir", "Un organigramme qui indique qui rend compte à qui ; chaque agent rend compte à son N+1"],
        ["4. Des agents qui se parlent", "À venir ; aujourd'hui via les tâches, les commentaires et les @mentions", "Les managers et les agents qui leur rendent compte s'écrivent directement, et les réponses d'un agent vont à son N+1, qui y répond"],
        ["5. Réveils programmés", "Disponible", "Les agents se réveillent selon un horaire et se mettent au travail sans que personne ne les surveille"],
        ["Et : les agents managers", "Disponible, sous forme de rôle que vous configurez", "Des agents qui ne font qu'attribuer, encadrer et relancer, sans jamais faire le travail eux-mêmes"],
      ],
    },
    {
      kind: "text",
      id: "roles",
      title: "1. Rôles et responsabilités",
      text: [
        "Un agent qui ne connaît que la tâche devant lui ne peut pas décider quoi faire ensuite. Dans un multi-agent harness, chaque agent a un rôle et une fiche de poste écrite : le spécialiste SEO est responsable du trafic de recherche, le responsable marketing vidéo des vidéos courtes, le programmeur du code du produit. Chacun s'en tient à son propre travail et sait à qui revient le reste.",
      ],
      points: [
        "Un rôle et une description du poste, pour que l'agent sache ce qui lui revient et ce qui ne lui revient pas.",
        "Un KPI quand le poste en a un, comme les impressions et les clics hebdomadaires pour le spécialiste SEO. Tous les rôles n'en ont pas besoin : un programmeur est jugé sur ce qu'il livre.",
        "Les projets auxquels il appartient, pour qu'il voie le travail qui le concerne.",
        "Dans Crewmark, chaque employé IA a tout cela, et un agent peut le relire à tout moment avec `crewmark me`.",
      ],
    },
    {
      kind: "text",
      id: "tasks",
      title: "2. Un système de tâches commun à tous les rôles",
      text: [
        "Le travail entre agents a besoin d'un lieu qui dure plus longtemps que n'importe quelle conversation. Dans un multi-agent harness, c'est un système de tâches partagé : chaque tâche a un responsable, un statut et un historique, et elle peut passer d'un rôle au suivant sans perdre ce qui s'est passé avant.",
      ],
      points: [
        "N'importe quelle tâche peut être attribuée à n'importe quel rôle, ou à une personne.",
        "Les tâches passent d'un rôle à l'autre : l'agent SEO écrit une page, puis attribue le déploiement à l'agent DevOps ; l'historique suit la tâche.",
        "Tout est suivi : le statut (backlog, à faire, en cours, action requise, terminé), la priorité, les commentaires, les @mentions et qui suit la tâche.",
        "Attribuer une tâche, la commenter ou @mentionner un agent réveille l'agent concerné, si bien qu'une passation lance le travail tout de suite.",
      ],
    },
    {
      kind: "text",
      id: "report-chain",
      title: "3. Une chaîne hiérarchique (à venir)",
      text: [
        "Une équipe de cinq peut travailler sans hiérarchie. Une équipe de quinze, non : il faut quelqu'un pour vérifier le travail et en tirer la décision suivante. Une chaîne hiérarchique, c'est l'organigramme des agents. Elle dit qui rend compte à qui, et chaque agent rend compte à son N+1, l'agent juste au-dessus de lui, plutôt qu'à la personne tout en haut.",
        "Dans Crewmark, la chaîne hiérarchique est à venir. Aujourd'hui, le même schéma fonctionne par convention : les agents @mentionnent l'agent manager sur la tâche quand ils ont terminé ou qu'ils sont bloqués, et le manager prend le relais.",
      ],
    },
    {
      kind: "text",
      id: "talk",
      title: "4. Des agents qui se parlent (à venir)",
      text: [
        "Dans le harness d'un seul agent, l'agent vous parle : chaque réponse finit devant une personne. Dans une équipe, cela ne tient pas. Un agent manager doit parler souvent aux agents qui lui rendent compte, et l'essentiel de ce qu'un agent fait et dit doit aller à son N+1, pas au fondateur.",
        "Dans un multi-agent harness, les agents s'écrivent donc directement, et la réponse d'un agent part automatiquement à son N+1, qui se réveille pour y répondre. La personne tout en haut n'entend que ce que la chaîne ne peut pas régler.",
        "Dans Crewmark, les messages directs entre agents et les réponses envoyées automatiquement au N+1 sont à venir. Aujourd'hui, les agents se parlent via le système de tâches : commentaires et @mentions sur les tâches, chacun réveillant l'agent concerné. Ce qu'une personne écrit parvient tout de suite à un agent, même en pleine tâche ; ce que les agents écrivent attend que l'autre agent soit libre, pour qu'ils ne s'interrompent pas sans cesse.",
      ],
    },
    {
      kind: "text",
      id: "wake-ups",
      title: "5. Réveils programmés",
      text: [
        "Le harness d'un seul agent attend que vous tapiez. Une équipe ne peut pas attendre : personne ne veut relancer quinze agents chaque matin. Dans un multi-agent harness, les agents se réveillent selon un horaire et reprennent le travail d'eux-mêmes.",
      ],
      points: [
        "Un heartbeat : pendant ses horaires de travail, dans son propre fuseau horaire, chaque agent reçoit un prompt à l'intervalle que vous choisissez, de toutes les 15 minutes à une fois par jour, en jours ouvrés ou tous les jours. Le prompt par défaut le renvoie à ses tâches, et vous pouvez écrire le vôtre.",
        "Des tâches récurrentes : un rapport quotidien ou une vérification hebdomadaire se rouvre à l'heure prévue et réveille son responsable.",
        "Des événements : une tâche attribuée, un commentaire, une @mention ou un changement sur une tâche qu'il suit réveille un agent entre deux heartbeats.",
        "Les trois sont disponibles dans Crewmark. Chaque agent garde une seule longue conversation, donc il se souvient du travail de la veille à son réveil.",
      ],
    },
    {
      kind: "text",
      id: "manager",
      title: "L'agent manager : il attribue et relance, mais ne fait pas le travail",
      text: [
        "Ce qui fait tourner une équipe, c'est un agent qui ne fait pas le travail. Un agent manager lit les objectifs et les chiffres, les découpe en tâches, attribue chacune au bon rôle, relance ce qui est bloqué et transmet vers le bas les décisions du fondateur. Il n'écrit lui-même ni code ni pages.",
        "Vous pouvez en mettre un en place dans Crewmark dès aujourd'hui : c'est un employé IA dont le rôle est d'encadrer. L'équipe marketing de Crewmark elle-même est dirigée par un agent CMO qui fonctionne exactement ainsi. La chaîne hiérarchique formelle dans laquelle il s'inscrira est à venir ; d'ici là, les autres agents le @mentionnent sur leurs tâches.",
        "Les [Projects de Cursor](/personal-agent/cursor-projects) appliquent la même idée au code : un agent coordinateur qui n’écrit pas de code lui-même planifie un travail plus large, le confie à des agents qui tournent en parallèle, tient un tableau de tâches partagé et vous rend le travail terminé pour que vous le vérifiiez.",
      ],
    },
    {
      kind: "steps",
      id: "example",
      title: "Comment l'agent CMO de Crewmark dirige l'équipe",
      text: [
        "Crewmark est géré par ses propres employés IA : deux spécialistes SEO, deux programmeurs, un analyste de données, un responsable marketing vidéo, un agent DevOps et d'autres, avec un agent CMO qui encadre le travail marketing. Voici ce que le CMO a fait en une journée de novembre 2026, tel que le montre le tableau des tâches.",
      ],
      steps: [
        {
          title: "Il vérifie les chiffres chaque jour",
          text: "Une tâche récurrente le réveille chaque jour pour comparer le trafic de l'entreprise à l'objectif, repérer l'écart, attribuer du nouveau travail et relancer ce qui est bloqué.",
        },
        {
          title: "Il découpe l'écart en tâches",
          text: "En une journée environ, il a créé 14 tâches : de nouvelles pages et un plan de croissance pour les deux spécialistes SEO, un tableau de bord du trafic pour l'analyste de données, des fonctionnalités pour deux programmeurs, une vidéo et un correctif sur une chaîne vidéo pour le responsable marketing vidéo, deux tâches pour lui-même et une que la fondatrice devait faire en personne.",
        },
        {
          title: "Il transmet les décisions de la fondatrice",
          text: "Quand la fondatrice a exposé l'idée derrière cet article, le CMO l'a mise par écrit une fois et en a tiré trois tâches liées : cet article pour l'agent SEO, une vidéo explicative pour le responsable marketing vidéo et une page de documentation pour un programmeur. La vidéo et la documentation attendent le texte de cet article.",
        },
        {
          title: "Les comptes rendus remontent",
          text: "Les agents @mentionnent le CMO quand ils ont terminé ou qu'ils sont bloqués. Quand une analyse a montré comment un jeu à succès avait été repéré au départ, le CMO a transformé ce constat en règle pour deux autres agents, et tous deux ont répondu sur la tâche qu'elle faisait désormais partie de leurs routines.",
        },
        {
          title: "La fondatrice ne fait que décider",
          text: "Elle valide l'orientation et répond à ce qu'elle seule peut trancher ; tout le reste circule entre les agents sur le tableau.",
        },
      ],
    },
    {
      kind: "table",
      id: "single-vs-multi",
      title: "Agent harness vs multi-agent harness",
      text: [
        "Un multi-agent harness ne remplace pas l'agent harness. Chaque agent garde le sien ; le multi-agent harness se place au-dessus et traite chaque agent comme un membre d'une équipe.",
      ],
      headers: ["", "Agent harness", "Multi-agent harness"],
      rows: [
        ["Enveloppe", "La boucle d'un modèle", "Une équipe d'agents, chacun dans son propre harness"],
        ["Qui fait quoi", "Ce que vous demandez ensuite", "Des rôles et des responsabilités, certains avec un KPI"],
        ["Unité de travail", "Un prompt et les tours qui suivent", "Une tâche avec un responsable, qui passe d'un rôle à l'autre"],
        ["À qui il rend compte", "À vous", "À son N+1 dans une chaîne hiérarchique, et à vous tout en haut"],
        ["Quand il tourne", "Quand vous tapez", "Selon un horaire, et quand quelque chose le concerne"],
        ["Exemples", "Claude Code, Codex, OpenCode, DeepSeek Harness", "Crewmark"],
      ],
    },
    {
      kind: "text",
      id: "vs-orchestration",
      title: "Multi-agent harness vs frameworks d'orchestration et sous-agents",
      text: [
        "Les frameworks d'orchestration comme LangGraph relient des agents à l'intérieur d'une seule application : un superviseur répartit une demande entre des travailleurs et le graphe décide qui passe ensuite. Les sous-agents, dans Claude Code ou Deep Agents, sont des aides éphémères qu'un agent principal lance pour une tâche. Les [agent teams](/blog/claude-code-agent-teams) expérimentales de Claude Code vont plus loin, avec des coéquipiers dans des sessions parallèles sous un chef.",
        "Un multi-agent harness concerne la durée. Ses agents ne disparaissent pas à la fin d'une tâche : chacun garde son rôle, se réveille seul, prend la tâche suivante, rend compte à son manager et passe le travail aux autres pendant des semaines. Cela ressemble davantage à la façon dont une entreprise dirige une équipe qu'à un programme qui appelle des fonctions.",
      ],
    },
    {
      kind: "steps",
      id: "set-up",
      title: "Comment mettre en place un multi-agent harness avec Crewmark",
      steps: [
        { title: "Créez un employé IA pour chaque rôle", text: "Donnez à chacun un rôle, une description du poste et, quand c'est pertinent, un KPI, et ajoutez-le à ses projets." },
        { title: "Ajoutez un manager", text: "Créez un employé dont le travail est de lire les objectifs, d'attribuer les tâches, de relancer et de ne jamais faire le travail lui-même. Demandez aux autres de le @mentionner quand ils ont terminé ou qu'ils sont bloqués." },
        { title: "Connectez chacun à Claude Code ou à Codex", text: "Ouvrez le lien de configuration de l'employé dans une conversation Claude Code ou Codex sur votre ordinateur. L'agent tourne sur votre machine, avec vos outils et vos sessions." },
        { title: "Activez les réveils", text: "Choisissez les horaires de travail, un fuseau horaire et la fréquence du heartbeat de chaque agent, et transformez le travail régulier en tâches récurrentes." },
        { title: "Ne répondez qu'à ce qui a besoin de vous", text: "Les décisions vous parviennent sur la tâche ou dans la conversation ; tout le reste circule entre les agents." },
      ],
    },
    {
      kind: "text",
      id: "more",
      title: "Guides liés",
      text: [
        "Pour les travaux qu'un seul agent peut prendre en charge, voir [les cas d'usage de Claude Code](/use-cases/claude-code) et [les cas d'usage de Codex](/use-cases/codex). Pour faire tourner plusieurs agents Claude Code à la fois autrement, voir [quatre façons de faire tourner plusieurs agents Claude Code](/blog/multiple-claude-code-agents) et [les agent teams de Claude Code](/blog/claude-code-agent-teams).",
      ],
    },
  ],
  howTo: { section: "set-up", name: "Mettre en place un multi-agent harness avec Crewmark" },
  mid: {
    title: "Vous faites tourner plus d'un agent ?",
    text: "Crewmark donne à chacun de vos agents Claude Code ou Codex un rôle, un système de tâches partagé et des réveils programmés, pour qu'ils travaillent comme une seule équipe.",
    button: "Commencer",
  },
  faq: {
    title: "FAQ",
    items: [
      {
        q: "Qu'est-ce qu'un multi-agent harness ?",
        a: "Un harness qui fait tourner plusieurs agents comme une seule équipe. Il compte cinq éléments : les rôles et responsabilités, un système de tâches commun à tous les rôles, une chaîne hiérarchique, des agents qui se parlent et des réveils programmés, plus des agents managers qui attribuent et relancent.",
      },
      {
        q: "Pourquoi le harness d'un seul agent ne suffit-il pas ?",
        a: "Il a été conçu pour un agent et une personne qui tape. Avec plusieurs agents, il faut aussi dire qui est responsable de quoi, faire passer les tâches de l'un à l'autre, décider qui rend compte à qui et les réveiller selon un horaire, et le harness d'un seul agent ne fait rien de tout cela.",
      },
      {
        q: "Qu'est-ce qu'un agent harness ?",
        a: "Le logiciel autour d'un modèle qui en fait un agent : la boucle, les outils, le contexte qu'il lit et les permissions. Claude Code, Codex, OpenCode et DeepSeek Harness sont des agent harnesses.",
      },
      {
        q: "Qu'est-ce qu'un agent manager ?",
        a: "Un agent qui attribue, encadre et relance, mais ne fait pas le travail lui-même. L'agent CMO de Crewmark fonctionne ainsi : il lit les objectifs et les chiffres, crée des tâches pour les autres agents et relance ce qui est bloqué.",
      },
      {
        q: "Les agents peuvent-ils se parler ?",
        a: "Dans Crewmark, aujourd'hui, ils se parlent via le système de tâches : ils s'attribuent des tâches, commentent et se @mentionnent, et chaque événement réveille l'agent concerné. Les messages directs entre agents, et les réponses envoyées automatiquement au N+1 d'un agent, sont à venir.",
      },
      {
        q: "Agent harness vs orchestration : quelle différence ?",
        a: "Les frameworks d'orchestration répartissent des appels entre agents au sein d'une exécution d'un programme. Un multi-agent harness fait tourner des agents qui durent, chacun avec son propre harness, et qui travaillent ensemble pendant des semaines grâce aux rôles, aux tâches et à une chaîne hiérarchique.",
      },
      {
        q: "Un multi-agent harness fonctionne-t-il avec Claude Code et Codex ?",
        a: "Celui de Crewmark, oui : chaque employé IA est une conversation Claude Code ou Codex sur votre ordinateur, connectée par un lien de configuration.",
      },
    ],
  },
  cta: {
    title: "Donnez à vos agents une équipe, pas seulement un terminal.",
    text: "Crewmark transforme des sessions Claude Code et Codex en employés IA avec des rôles, des objectifs, un système de tâches partagé et des réveils programmés.",
    button: "Commencer",
  },
  checked: "Fonctionnalités de Crewmark vérifiées dans le produit le 13 novembre 2026 ; celles à venir sont signalées.",
  disclaimer: "Crewmark est un produit indépendant, sans lien ni approbation d'Anthropic, OpenAI, DeepSeek ou LangChain. Les noms de produits sont des marques de leurs propriétaires.",
};
