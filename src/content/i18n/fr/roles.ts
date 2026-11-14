import type { RoleData, RoleTemplate } from "@/content/roles/build";
import type { RoleSlug } from "@/i18n/roles";

// French translation of the role pages; the English master is src/content/roles/en.ts. Role names follow the
// marketplace presets in messages/fr.json (Landing.marketplace.presets) with the search phrasing ("spécialiste SEO
// IA", "agent marketing IA").

const cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

export const template: RoleTemplate = {
  kicker: "Employés IA · Rôle",
  parent: "Employés IA",
  cta: "Commencer",
  secondary: "Copier la fiche de poste",
  doesTitle: (name) => `Ce que fait un ${name}`,
  goalsTitle: "Les objectifs à lui donner",
  goalsText:
    "Donnez à un employé IA un seul chiffre à faire bouger, comme vous le feriez pour une nouvelle recrue, et faites le point chaque semaine. Choisissez-en un pour commencer.",
  goalsHeaders: ["Objectif", "Comment on le mesure", "Une bonne première cible"],
  routineTitle: "Sa routine quotidienne",
  howToTitle: (name) => `Comment mettre en place un ${name} avec Claude Code ou Codex`,
  howToName: (name) => `Mettre en place un ${name}`,
  briefStep: {
    title: "Rédigez la fiche de poste",
    text: "Enregistrez-la sous `CLAUDE.md` (Claude Code) ou `AGENTS.md` (Codex) dans le dépôt où travaille l’employé, pour que chaque session démarre avec sa mission, son objectif et ses règles. Voir le [guide CLAUDE.md](/blog/claude-md).",
  },
  toolsTitle: "Donnez-lui les outils dont il a besoin",
  approvalsTitle: "Décidez ce qui exige votre feu vert",
  scheduleStep: {
    title: "Donnez-lui un planning",
    text: "Un rôle a besoin d’un rythme, pas d’un prompt isolé. Utilisez `/loop` ou les tâches planifiées pour un prompt récurrent, ou donnez-lui des horaires, une pulsation et un tableau de tickets ; voir [comment rendre Claude Code proactif](/proactive-claude-code).",
  },
  relatedTitle: "Guides associés",
  crewmark: {
    kicker: "Avec Crewmark",
    title: (name) => `Recrutez un ${name} au lieu de le scripter`,
    text: (name) =>
      `Crewmark propose un ${name} prêt à recruter. Il tourne dans votre session Claude Code, Codex, DeepSeek Harness ou OpenCode, avec l’abonnement que vous payez déjà, se réveille à chaque pulsation pendant les heures de travail, prend le ticket suivant sur un tableau partagé et vous écrit quand il a besoin d’une décision.`,
    steps: [
      {
        title: "Choisissez le rôle",
        text: "Ses compétences, son objectif et son planning sont déjà configurés. Remplacez l’objectif par votre propre chiffre.",
      },
      {
        title: "Connectez votre projet",
        text: "Lancez la commande d’installation dans le dépôt ou le dossier où il travaille. Il obtient sa propre session et sa propre copie de travail.",
      },
      {
        title: "Relisez, ne surveillez pas",
        text: "Il commente ses tickets au fil du travail et demande avant toute action de votre liste d’approbation. Lisez [ce qu’est un employé IA](/ai-employees).",
      },
    ],
  },
  faqTitle: (name) => `${cap(name)} : FAQ`,
  ctaText:
    "Crewmark transforme des sessions Claude Code, Codex, DeepSeek Harness et OpenCode en employés IA, avec des rôles, des objectifs, des horaires et une pulsation.",
  checked:
    "Pages de rôles rédigées le 7 novembre 2026, à partir des profils de la marketplace Crewmark et de la documentation des agents.",
  disclaimer:
    "Crewmark est un produit indépendant, sans lien avec Anthropic ou OpenAI ni approuvé par eux. Claude, Claude Code et Codex sont des marques de leurs propriétaires respectifs.",
};

export const roles: Record<RoleSlug, RoleData> = {
  "seo-specialist": {
    name: "spécialiste SEO IA",
    meta: {
      title: "Spécialiste SEO IA : un agent SEO au quotidien | Crewmark AI",
      description:
        "Ce que fait un spécialiste SEO IA, les objectifs et la routine à lui donner, et une fiche de poste à copier dans Claude Code ou Codex. Ou recrutez-en un sur Crewmark, qui se réveille à chaque pulsation et avance sur votre backlog SEO.",
    },
    breadcrumb: "Spécialiste SEO IA",
    title: "Spécialiste SEO IA : un agent IA pour le SEO qui travaille chaque jour",
    lead: "Un spécialiste SEO IA est un agent de code, comme Claude Code ou Codex, chargé en continu de faire croître votre trafic organique. Il repère les sujets que les gens commencent à rechercher, rédige et corrige des pages dans le code de votre site, les fait indexer et rend compte de ce qui a bougé, chaque jour ouvré. Cette page présente ce qu’il fait, les objectifs et la routine à lui donner, et une fiche de poste à copier.",
    does: {
      text: "Contrairement à un prompt SEO ponctuel, le spécialiste est responsable du travail : il tient une carte des mots-clés et un journal, pour que chaque session reprenne là où la précédente s’est arrêtée.",
      points: [
        "Recherche de mots-clés : lit l’actualité produit et les changelogs, puis consulte l’autocomplétion Google, Trends et Search Console pour trouver des requêtes avec de la demande et des résultats faibles.",
        "Rédige et met à jour des pages : un mot-clé principal par URL, d’abord une définition, puis des étapes, un tableau comparatif et une FAQ.",
        "Corrige les problèmes on-page : balises title et descriptions, maillage interne, redirections, données structurées et hreflang.",
        "Fait indexer les pages : notifie IndexNow, soumet à nouveau le sitemap et demande l’indexation.",
        "Rend compte : trafic, écart avec l’objectif et travail effectué, dans une courte note quotidienne.",
      ],
    },
    goals: [
      ["Clics Search Console", "Clics hebdomadaires depuis Google", "+10 % par mois"],
      ["Impressions", "Impressions hebdomadaires dans Search Console", "+20 % par mois sur un nouveau site"],
      ["Pages publiées", "Pages nouvelles ou réécrites en ligne", "Une par jour ouvré"],
      ["Pages indexées", "Pages valides dans le rapport d’indexation des pages", "90 % du sitemap"],
    ],
    routine: [
      "Regarder ce qui a changé : nouvelles sorties sur votre marché, requêtes Search Console de la veille et pages avec des impressions mais sans clics.",
      "Choisir un sujet, et noter pourquoi dans le journal.",
      "Rédiger ou réécrire la page à partir de sources officielles uniquement, puis la traduire si votre site a d’autres langues.",
      "La tester en local et ouvrir une demande de déploiement ; il ne publie pas seul.",
      "Une fois en ligne, notifier IndexNow et demander l’indexation, puis mettre à jour la carte des mots-clés.",
      "Avant de terminer, publier le rapport quotidien.",
    ],
    brief: `# Rôle : spécialiste SEO
Objectif : +10 % de clics Search Console par mois.

## Chaque jour ouvré
1. Regarde les nouvelles sorties de notre marché et les requêtes de la veille.
2. Choisis un sujet à demande croissante et résultats faibles ; note pourquoi.
3. Rédige ou corrige la page. Faits issus de sources officielles uniquement.
4. Teste en local, puis ouvre une demande de déploiement. Ne publie jamais toi-même.
5. Après le déploiement : IndexNow, demande d’indexation, mise à jour de keywords.md.
6. Publie un rapport quotidien : trafic, écart avec l’objectif, travail effectué.

## Règles
- Un mot-clé principal par URL ; vérifie d’abord docs/seo/keywords.md.
- Demande avant de supprimer des pages, modifier des redirections ou toucher
  au code hors des dossiers de contenu.`,
    tools: "Recherche et récupération web pour la veille, le dépôt du site et un serveur de développement local pour tester les pages, un accès en lecture à Search Console et aux statistiques, et un script pour IndexNow. Préférez les CLI aux serveurs MCP quand les deux existent : ils consomment moins de tokens.",
    approvals: "La publication devrait passer par une personne ou un responsable des déploiements. Demandez aussi avant de supprimer des pages, de modifier des redirections, de toucher au code hors des dossiers de contenu ou au DNS.",
    related:
      "Pour construire pas à pas le même agent avec des skills et des hooks, lisez [Agent SEO IA : comment en créer un](/blog/ai-seo-agent). Pour les briques de base, voir [les skills Claude Code](/blog/claude-code-skills) et [les hooks Claude Code](/blog/claude-code-hooks).",
    mid: {
      title: "Le spécialiste SEO, sans avoir à le construire ?",
      text: "Le spécialiste SEO de Crewmark tourne sur votre Claude Code ou Codex, se réveille à chaque pulsation et avance sur un backlog SEO.",
    },
    faq: [
      {
        q: "Qu’est-ce qu’un spécialiste SEO IA ?",
        a: "Un agent IA, généralement un agent de code comme Claude Code ou Codex, chargé en continu de faire croître le trafic organique : recherche de mots-clés, rédaction et correction de pages, indexation et compte rendu des résultats.",
      },
      {
        q: "Un agent IA peut-il faire du SEO seul ?",
        a: "L’essentiel du travail quotidien, oui : recherche, rédaction, traduction, corrections techniques et demandes d’indexation. La publication, les redirections et tout ce qui est irréversible devraient toujours passer par une personne.",
      },
      {
        q: "Quelle différence avec un outil SEO ?",
        a: "Un outil SEO vous montre des données ; le travail reste à faire. Un spécialiste SEO IA fait le travail dans le code de votre site et vous rend compte, selon un planning.",
      },
      {
        q: "En combien de temps un spécialiste SEO IA donne-t-il des résultats ?",
        a: "Le SEO prend des semaines sur n’importe quel site. Un nouveau site a souvent besoin de quelques semaines avant que les impressions augmentent ; visez d’abord les pages publiées et les impressions, puis les clics.",
      },
      {
        q: "Existe-t-il un agent IA gratuit pour le SEO ?",
        a: "Vous pouvez en faire tourner un sur un agent que vous payez déjà, comme Claude Code ou Codex, avec des sources de données gratuites comme l’autocomplétion Google, Trends, Search Console et IndexNow.",
      },
    ],
    cta: "Donnez à votre site un spécialiste SEO qui ne saute jamais la checklist.",
  },
  "marketing-agent": {
    name: "agent marketing IA",
    meta: {
      title: "Agent marketing IA autonome : objectifs et routine",
      description:
        "Un agent marketing IA (growth marketer) qui mène seul des expériences sur tout votre tunnel : ce qu’il fait, les objectifs à lui donner, une routine quotidienne et une fiche de poste pour Claude Code ou Codex. Ou recrutez-en un sur Crewmark.",
    },
    breadcrumb: "Agent marketing IA",
    title: "Agent marketing IA : un growth marketer qui travaille en autonomie",
    lead: "Un agent marketing IA est un employé IA responsable d’un chiffre de croissance, comme les inscriptions à l’essai, sur lequel il travaille chaque jour : il lit les données de votre tunnel, repère l’étape la plus faible, rédige le changement, le lance comme expérience et garde ce qui gagne. Construit sur un agent de code comme Claude Code ou Codex, il peut modifier les landing pages, les e-mails et le tracking dans votre propre code. Cette page présente ce qu’il fait, les objectifs et la routine à lui donner, et une fiche de poste à copier.",
    does: {
      text: "Il travaille comme un growth marketer dans une petite entreprise : un tunnel, un chiffre, beaucoup de petites expériences.",
      points: [
        "Analyse du tunnel : lit les statistiques pour voir où les visiteurs décrochent entre la landing page, l’inscription et l’activation.",
        "Expériences : formule une hypothèse, fait le changement sur une page ou un e-mail, et lit le résultat une fois le trafic suffisant.",
        "Textes : titres, landing pages, textes d’annonces et e-mails d’onboarding, en variantes à tester.",
        "E-mails de cycle de vie : séquences de bienvenue et de réengagement, rédigées et branchées dans votre outil d’e-mailing.",
        "Rapport hebdomadaire : ce qui a été testé, ce qui a gagné et la suite.",
      ],
    },
    goals: [
      ["Inscriptions à l’essai", "Inscriptions par semaine dans les statistiques", "+8 % par mois"],
      ["Conversion des landing pages", "Visiteurs qui s’inscrivent, par page", "+1 point de pourcentage"],
      ["Activation", "Nouveaux utilisateurs qui terminent la première action clé", "+5 % par mois"],
      ["Expériences menées", "Expériences lancées et analysées", "Deux par semaine"],
    ],
    routine: [
      "Lire les chiffres du tunnel de la veille et toute expérience qui a assez de données.",
      "Conclure les expériences terminées : garder la gagnante, annuler la perdante, noter ce qu’il a appris.",
      "Choisir l’étape suivante la plus faible du tunnel et formuler une hypothèse.",
      "Faire le changement dans le code ou dans l’outil d’e-mailing, derrière un flag ou en variante si possible.",
      "Demander avant tout ce qui dépense de l’argent ou touche des clients.",
      "Publier un court rapport sur le tableau.",
    ],
    brief: `# Rôle : growth marketer
Objectif : +8 % d’inscriptions à l’essai par mois.

## Chaque jour ouvré
1. Lis les chiffres du tunnel de la veille et les expériences en cours.
2. Clôture les expériences qui ont assez de données : garder, annuler, noter pourquoi.
3. Choisis l’étape la plus faible du tunnel ; formule une hypothèse.
4. Construis le changement en variante ; ouvre une demande de revue.
5. Publie ce que tu as testé, ce qui a gagné et la suite.

## Règles
- Un seul changement par expérience ; n’arrête pas un test trop tôt.
- Demande avant de dépenser de l’argent, d’écrire aux clients ou de changer les prix.`,
    tools: "Un accès en lecture à vos statistiques (produit et web), le dépôt du site et un serveur de développement local, l’API ou la CLI de votre outil d’e-mailing, et un outil d’expérimentation ou de feature flags si vous en avez un.",
    approvals: "Demandez avant de dépenser de l’argent en publicité, d’envoyer des e-mails aux clients, de modifier les prix ou les offres, ou de publier quoi que ce soit au nom de votre marque sur un nouveau canal.",
    related:
      "Pour que l’agent se mette au travail seul, lisez [comment rendre Claude Code proactif](/proactive-claude-code) ou [Codex](/proactive-codex). Pour comparer les plateformes qui font tourner des agents comme des employés, voir [les meilleures plateformes d’employés IA](/blog/best-ai-employee-platforms).",
    mid: {
      title: "Un agent marketing qui tourne pendant que vous développez ?",
      text: "Le growth marketer de Crewmark tourne sur votre Claude Code ou Codex, se réveille à chaque pulsation et avance sur les expériences de votre tunnel.",
    },
    faq: [
      {
        q: "Qu’est-ce qu’un agent marketing IA ?",
        a: "Un agent IA à qui l’on confie un objectif marketing continu, comme les inscriptions, et qui analyse votre tunnel, rédige des textes et mène des expériences seul, en vous rendant compte des résultats.",
      },
      {
        q: "Un agent marketing IA peut-il fonctionner en autonomie ?",
        a: "La recherche, la rédaction et la construction peuvent tourner selon un planning, sans prompt. Les dépenses, les e-mails aux clients et les changements de prix devraient attendre le feu vert d’une personne.",
      },
      {
        q: "Un agent marketing IA convient-il à une petite entreprise ?",
        a: "Il convient aux petites équipes avec un seul produit et sans marketeur à plein temps : il fait avancer le travail sur le tunnel chaque jour, et vous relisez au lieu de faire.",
      },
      {
        q: "Puis-je créer un agent marketing IA avec Claude ?",
        a: "Oui. Claude Code avec une fiche de poste, un accès à vos statistiques et au code du site, et un planning suffit ; la fiche de poste de cette page est un point de départ.",
      },
      {
        q: "Agent marketing IA ou marketing automation ?",
        a: "L’automatisation exécute des scénarios fixes que vous concevez. Un agent marketing IA décide quoi essayer ensuite, le construit et lit le résultat.",
      },
    ],
    cta: "Mettez un growth marketer sur votre tunnel, avec l’agent que vous utilisez déjà.",
  },
  "social-media-manager": {
    name: "responsable réseaux sociaux IA",
    meta: {
      title: "Responsable réseaux sociaux IA : il publie et apprend",
      description:
        "Ce que fait un responsable réseaux sociaux IA, les objectifs et la routine à lui donner, et une fiche de poste pour Claude Code ou Codex. Il rédige, programme et répond, avec votre accord avant toute publication.",
    },
    breadcrumb: "Responsable réseaux sociaux IA",
    title: "Responsable réseaux sociaux IA : un agent qui rédige, programme et apprend",
    lead: "Un responsable réseaux sociaux IA est un employé IA qui garde vos comptes actifs : il rédige des posts et des threads à partir de ce que votre équipe livre, les programme, prépare des réponses aux mentions et apprend quels posts fonctionnent. Construit sur un agent de code comme Claude Code ou Codex, il travaille à partir de votre changelog, de votre documentation et de vos notes. Comme les posts sont publics, il rédige et vous approuvez. Cette page présente ce qu’il fait, les objectifs et la routine à lui donner, et une fiche de poste à copier.",
    does: {
      text: "Sa matière première, c’est votre propre travail : sorties, documentation, articles de blog et questions des clients.",
      points: [
        "Transforme les sorties et les articles de blog en threads pour X et en posts pour LinkedIn.",
        "Tient un calendrier éditorial et programme les posts approuvés.",
        "Prépare des réponses aux mentions et aux commentaires, que vous approuvez.",
        "Lit les chiffres de chaque post et note ce qui fonctionne.",
        "Réutilise ce qui a marché : formats, horaires et sujets.",
      ],
    },
    goals: [
      ["Abonnés", "Nouveaux abonnés nets par mois", "+5 % par mois"],
      ["Posts publiés", "Posts approuvés effectivement publiés", "Un par jour ouvré"],
      ["Engagement", "Réponses, reposts et likes par post", "En hausse d’un mois sur l’autre"],
      ["Clics vers le site", "Visites depuis les réseaux sociaux, dans les statistiques", "+10 % par mois"],
    ],
    routine: [
      "Lire ce qui a été livré ou écrit depuis la veille.",
      "Rédiger les posts du jour avec votre ton et les ajouter au calendrier pour approbation.",
      "Programmer les posts que vous avez approuvés.",
      "Préparer des réponses aux nouvelles mentions ; signaler tout sujet sensible à une personne.",
      "Lire les chiffres des posts de la veille et noter ce qui a marché.",
    ],
    brief: `# Rôle : responsable réseaux sociaux
Objectif : +5 % d’abonnés par mois.

## Chaque jour ouvré
1. Lis les nouvelles sorties, articles de blog et changements de la doc.
2. Rédige les posts du jour (thread X, post LinkedIn) avec notre ton.
3. Mets les brouillons sur le tableau pour approbation ; programme ceux approuvés.
4. Prépare des réponses aux nouvelles mentions ; signale les plaintes à une personne.
5. Note les chiffres de la veille et ce qui a marché.

## Règles
- Ne publie ni ne réponds jamais publiquement sans approbation.
- Aucune affirmation sans lien à l’appui ; aucun post sur les concurrents.`,
    tools: "Votre changelog, votre documentation et votre blog (le dépôt ou un dossier), l’API ou la CLI d’un outil de programmation, un accès en lecture aux statistiques de chaque plateforme, et un calendrier ou un tableau partagé pour les brouillons.",
    approvals: "Au début, chaque post et chaque réponse publics demandent votre approbation. Demandez aussi avant de suivre des comptes ou de leur écrire, de participer à des fils sur les concurrents ou de répondre à des plaintes.",
    related:
      "Pour faire tourner plusieurs agents côte à côte, voir [plusieurs agents Claude Code](/blog/multiple-claude-code-agents). Pour ce qui fait d’un agent un employé, lisez [ce qu’est un employé IA](/ai-employees).",
    mid: {
      title: "Garder vos comptes actifs sans écrire chaque post ?",
      text: "Le responsable réseaux sociaux de Crewmark rédige à partir de ce que vous livrez, programme ce que vous approuvez et vous dit ce qui fonctionne.",
    },
    faq: [
      {
        q: "Qu’est-ce qu’un responsable réseaux sociaux IA ?",
        a: "Un agent IA qui gère vos comptes sociaux au quotidien : il rédige des posts à partir de votre travail, programme ceux que vous approuvez, prépare des réponses et suit ce qui performe.",
      },
      {
        q: "Un agent IA doit-il publier sans approbation ?",
        a: "Pas au début. Les posts sont publics et difficiles à retirer : commencez par des brouillons que vous approuvez, et n’assouplissez la règle que pour des formats peu risqués, une fois que vous faites confiance à son ton.",
      },
      {
        q: "Puis-je créer un responsable réseaux sociaux IA avec Claude ?",
        a: "Oui : Claude Code avec une fiche de poste, un accès à vos contenus et à un outil de programmation, et un planning quotidien. La fiche de poste de cette page est un point de départ.",
      },
      {
        q: "Existe-t-il un responsable réseaux sociaux IA gratuit ?",
        a: "Vous pouvez en faire tourner un sur un agent que vous payez déjà, comme Claude Code ou Codex. Les outils de programmation et les API des plateformes peuvent avoir leurs propres coûts.",
      },
      {
        q: "Sur quoi un responsable réseaux sociaux IA devrait-il écrire ?",
        a: "D’abord sur votre propre matière : sorties, guides, questions des clients et leçons apprises. C’est ce qu’il peut écrire avec exactitude.",
      },
    ],
    cta: "Donnez à vos comptes un responsable qui écrit à partir de ce que vous livrez.",
  },
  "software-engineer": {
    name: "ingénieur logiciel IA",
    meta: {
      title: "Ingénieur logiciel IA avec Claude Code ou Codex",
      description:
        "Un agent ingénieur logiciel IA qui prend les tickets, ouvre des pull requests avec tests et demande une revue. Ce qu’il fait, les objectifs à lui donner, une routine quotidienne et une fiche de poste pour Claude Code ou Codex.",
    },
    breadcrumb: "Ingénieur logiciel IA",
    title: "Ingénieur logiciel IA : un agent qui prend les tickets et ouvre des pull requests",
    lead: "Un ingénieur logiciel IA est un agent de code, comme Claude Code ou Codex, qui a sa place dans votre équipe : il prend les tickets sur le tableau, travaille sur une branche dans sa propre copie de travail, ouvre des pull requests avec tests et demande une revue, sans qu’on le lui demande pour chaque tâche. Cette page présente ce qu’il fait, les objectifs et la routine à lui donner, et une fiche de poste à copier.",
    does: {
      text: "Il travaille comme un ingénieur junior à confirmé qui n’oublie jamais la checklist : de petits changements, des tests, une pull request claire.",
      points: [
        "Prend le prochain ticket prêt, ou celui qui lui est assigné.",
        "Travaille sur sa propre branche et sa propre copie, sans jamais toucher à la vôtre.",
        "Écrit ou met à jour les tests et lance les vérifications avant de demander une revue.",
        "Ouvre une pull request qui explique le changement et comment il a été testé.",
        "Répond aux commentaires de revue et corrige ce qui est demandé.",
      ],
    },
    goals: [
      ["Pull requests fusionnées", "Pull requests fusionnées par semaine", "10 par semaine"],
      ["Temps de cycle", "Heures entre la prise du ticket et l’ouverture de la PR", "Moins d’un jour ouvré"],
      ["Tours de revue", "Tours de modifications avant fusion", "Un ou deux"],
      ["Bugs fermés", "Tickets de bug fermés par semaine", "Tout ce qui est dans le backlog"],
    ],
    routine: [
      "Vérifier les commentaires de revue sur ses pull requests ouvertes et les traiter en premier.",
      "Prendre le prochain ticket prêt ; poser la question sur le ticket s’il n’est pas clair.",
      "Créer une branche, modifier, tester et lancer les vérifications en local.",
      "Ouvrir la pull request et passer le ticket en revue.",
      "Recommencer jusqu’à la fin des heures de travail, puis indiquer ce qui est en cours.",
    ],
    brief: `# Rôle : ingénieur logiciel
Objectif : 10 pull requests fusionnées par semaine.

## Pour chaque ticket
1. Lis le ticket ; pose la question dessus si quelque chose n’est pas clair.
2. Travaille sur une nouvelle branche dans ta propre copie de travail.
3. Écris ou mets à jour les tests ; lance le lint, la vérification des types et les tests.
4. Ouvre une PR : ce qui a changé, pourquoi, comment tu l’as testé.
5. Réponds aux commentaires de revue avant de prendre un nouveau ticket.

## Règles
- Ne pousse jamais sur main et ne fusionne jamais ta propre PR.
- Demande avant une migration de base de données, une mise à jour de dépendances ou
  la suppression de code que tu n’as pas écrit.`,
    tools: "Le dépôt et son gestionnaire de tickets, `gh` ou la CLI de votre hébergeur Git, les commandes de test et de lint du projet, et une copie de travail ou un git worktree séparé par tâche ; voir le [guide des worktrees Claude Code](/blog/claude-code-worktree).",
    approvals: "La fusion, le déploiement, les migrations de base de données, les mises à jour de dépendances et tout ce qui touche aux secrets ou aux données de production devraient attendre une personne.",
    related:
      "Pour choisir entre Claude Code et Codex comme moteur, voir [Claude Code vs Codex](/blog/claude-code-vs-codex). Pour faire tourner plusieurs ingénieurs à la fois, lisez [plusieurs agents Claude Code](/blog/multiple-claude-code-agents) et [les agents en arrière-plan de Claude Code](/blog/claude-code-background-agents).",
    mid: {
      title: "Un ingénieur qui prend lui-même le ticket suivant ?",
      text: "L’ingénieur logiciel de Crewmark tourne sur votre Claude Code ou Codex, prend les tickets à chaque pulsation et ouvre des pull requests à relire.",
    },
    faq: [
      {
        q: "Qu’est-ce qu’un agent ingénieur logiciel IA ?",
        a: "Un agent de code, comme Claude Code ou Codex, qui traite les tickets seul : il crée une branche, modifie le code, teste et ouvre des pull requests qu’une personne relit.",
      },
      {
        q: "Quel est le meilleur agent ingénieur logiciel IA ?",
        a: "Cela dépend du moteur auquel vous faites confiance : Claude Code et Codex sont les plus courants, et chacun peut fonctionner comme ingénieur logiciel IA avec une fiche de poste, sa propre copie de travail et un planning.",
      },
      {
        q: "Un ingénieur logiciel IA peut-il fusionner son propre code ?",
        a: "Il ne devrait pas. Laissez la fusion et le déploiement aux personnes ; l’agent ouvre des pull requests et corrige les commentaires de revue.",
      },
      {
        q: "Quelle différence avec utiliser Claude Code moi-même ?",
        a: "Vous n’avez plus à lancer chaque tâche. L’agent prend le ticket suivant sur le tableau pendant les heures de travail, et vous relisez des pull requests au lieu d’écrire des prompts.",
      },
      {
        q: "Puis-je faire tourner plusieurs ingénieurs IA sur un même dépôt ?",
        a: "Oui, si chacun a sa propre branche et sa propre copie de travail, comme un git worktree, pour que leurs changements n’entrent pas en conflit.",
      },
    ],
    cta: "Ajoutez un ingénieur qui transforme les tickets en pull requests, avec votre abonnement.",
  },
  "ui-designer": {
    name: "designer UI IA",
    meta: {
      title: "Designer UI IA : une UI cohérente dans votre code",
      description:
        "Un designer UI IA qui transforme des pages approximatives en une interface cohérente, dans votre code et vos composants. Ce qu’il fait, les objectifs à lui donner, une routine quotidienne et une fiche de poste pour Claude Code ou Codex.",
    },
    breadcrumb: "Designer UI IA",
    title: "Designer UI IA : des interfaces cohérentes, dans votre propre code",
    lead: "Un designer UI IA est un employé IA qui améliore l’interface de votre produit directement dans votre code : typographie, espacements, composants, mode sombre et accessibilité. Construit sur un agent de code comme Claude Code ou Codex, il travaille dans votre design system plutôt que dans un fichier de maquette séparé, vérifie son travail dans un navigateur et ouvre une pull request avec des captures avant/après. Cette page présente ce qu’il fait, les objectifs et la routine à lui donner, et une fiche de poste à copier.",
    does: {
      text: "Il produit du code : un changement est prêt à livrer dès que vous l’approuvez.",
      points: [
        "Audite les pages pour repérer les incohérences de typographie, d’espacement et de couleur, et les corrige avec vos design tokens.",
        "Transforme le balisage ponctuel en composants partagés.",
        "Ajoute et vérifie le mode sombre.",
        "Corrige les problèmes d’accessibilité : contraste, états de focus, libellés et navigation au clavier.",
        "Prend des captures avant/après en largeur bureau et mobile pour la revue.",
      ],
    },
    goals: [
      ["Écrans peaufinés", "Écrans qui passent sa checklist, par semaine", "Trois par semaine"],
      ["Problèmes d’accessibilité", "Problèmes ouverts signalés par un outil d’audit", "En baisse chaque semaine"],
      ["Composants partagés", "Motifs ponctuels remplacés par des composants", "Deux par semaine"],
      ["Régressions visuelles", "Bugs d’interface signalés après ses changements", "Zéro"],
    ],
    routine: [
      "Prendre l’écran suivant sur le tableau ou dans sa liste d’audit.",
      "Le capturer en largeur bureau et mobile, en clair et en sombre.",
      "Le corriger avec les tokens et les composants du design system ; créer un composant si un motif se répète.",
      "Le revérifier dans le navigateur et lancer les contrôles d’accessibilité.",
      "Ouvrir une pull request avec les captures avant/après.",
    ],
    brief: `# Rôle : designer UI
Objectif : 3 écrans peaufinés par semaine.

## Pour chaque écran
1. Capture-le : bureau et mobile, clair et sombre.
2. Corrige typo, espacements et couleurs avec nos tokens uniquement.
3. Réutilise les composants ; extrais-en un si un motif se répète.
4. Vérifie le contraste, les états de focus et les libellés.
5. Ouvre une PR avec des captures avant/après.

## Règles
- Aucune nouvelle couleur, police ou valeur d’espacement hors des tokens.
- Demande avant de changer les textes, la mise en page des parcours clés ou la marque.`,
    tools: "Le dépôt front-end et un serveur de développement local, un navigateur qu’il peut piloter pour les captures, vos design tokens et votre bibliothèque de composants, et un outil de vérification de l’accessibilité.",
    approvals: "Demandez avant de changer la marque (logo, couleurs, polices), les textes, la mise en page des parcours d’inscription ou de paiement, ou tout ce qu’un client remarquera sur une page qui convertit.",
    related:
      "Pour faire travailler un designer aux côtés d’un ingénieur, voir [plusieurs agents Claude Code](/blog/multiple-claude-code-agents). Pour qu’il prenne du travail de lui-même, lisez [comment rendre Claude Code proactif](/proactive-claude-code).",
    mid: {
      title: "Peaufiner votre interface sans backlog de design ?",
      text: "Le designer UI de Crewmark travaille dans votre code et vos composants, et ouvre des pull requests avec des captures avant/après.",
    },
    faq: [
      {
        q: "Qu’est-ce qu’un designer UI IA ?",
        a: "Un agent IA qui améliore l’interface d’un produit directement dans le code : typographie, espacements, composants, mode sombre et accessibilité, vérifiés dans un navigateur et envoyés sous forme de pull requests.",
      },
      {
        q: "Un designer UI IA remplace-t-il Figma ?",
        a: "Pas pour explorer de nouvelles idées. Il sert au travail régulier qui rend les écrans livrés cohérents et accessibles, un travail qui se fait de toute façon dans le code.",
      },
      {
        q: "Claude Code peut-il faire du design UI ?",
        a: "Claude Code peut modifier le code front-end et, avec un outil de navigateur, vérifier le résultat. Une fiche de poste et des design tokens gardent ses changements cohérents.",
      },
      {
        q: "Comment empêcher un designer IA de modifier la marque ?",
        a: "Limitez-le à vos design tokens dans la fiche de poste, et listez la marque, les textes et les parcours clés parmi ce qu’il doit demander d’abord.",
      },
    ],
    cta: "Donnez à votre interface un designer qui travaille dans votre code.",
  },
  "app-designer": {
    name: "designer UI mobile IA",
    meta: {
      title: "Designer UI mobile IA : écrans iOS et Android testés",
      description:
        "Un designer UI mobile IA qui conçoit des écrans iOS et Android dans le code de votre app et les vérifie dans le simulateur. Ce qu’il fait, les objectifs à lui donner, une routine quotidienne et une fiche de poste pour Claude Code ou Codex.",
    },
    breadcrumb: "Designer UI mobile IA",
    title: "Designer UI mobile IA : des écrans construits et vérifiés dans le simulateur",
    lead: "Un designer UI mobile IA est un employé IA qui conçoit et peaufine vos écrans iOS et Android dans le code même de l’app, puis les vérifie dans le simulateur ou l’émulateur avant de demander une revue. Construit sur un agent de code comme Claude Code ou Codex, il suit les conventions de chaque plateforme et vos composants, et peut préparer les captures pour l’App Store. Cette page présente ce qu’il fait, les objectifs et la routine à lui donner, et une fiche de poste à copier.",
    does: {
      text: "Il conçoit dans le code de l’app : ce que vous relisez est ce qui sera livré.",
      points: [
        "Met en page les nouveaux écrans et peaufine les existants avec vos composants.",
        "Suit les conventions iOS et Android : navigation, zones de sécurité, Dynamic Type et zones tactiles.",
        "Lance l’app dans le simulateur ou l’émulateur et capture chaque changement.",
        "Vérifie le mode sombre, les petits et grands écrans, et les libellés d’accessibilité.",
        "Prépare les captures pour l’App Store et le Play Store.",
      ],
    },
    goals: [
      ["Écrans livrés", "Écrans nouveaux ou repensés fusionnés par semaine", "Deux par semaine"],
      ["Vérifications au simulateur", "Changements avec captures sur petit et grand appareil", "Chaque changement"],
      ["Accessibilité", "Écrans avec libellés et prise en charge de Dynamic Type", "Tous les nouveaux écrans"],
      ["Captures pour les stores", "Captures à jour par version", "Chaque version"],
    ],
    routine: [
      "Prendre l’écran suivant sur le tableau.",
      "Le construire ou l’ajuster avec les composants de l’app.",
      "Le lancer dans le simulateur sur un petit et un grand appareil, en clair et en sombre.",
      "Corriger ce qui cloche, puis capturer le résultat.",
      "Ouvrir une pull request avec les captures.",
    ],
    brief: `# Rôle : designer UI mobile
Objectif : 2 écrans d’app par semaine.

## Pour chaque écran
1. Construis-le avec nos composants et les conventions de la plateforme.
2. Lance-le dans le simulateur : petit et grand appareil, clair et sombre.
3. Vérifie zones de sécurité, Dynamic Type, zones tactiles et libellés.
4. Ouvre une PR avec des captures du simulateur.

## Règles
- Ne change pas la structure de navigation ni l’onboarding sans demander.
- Ne soumets aucun build à l’App Store ni au Play Store.`,
    tools: "Le dépôt de l’app, Xcode et le simulateur iOS ou Android Studio et un émulateur sur la machine où il tourne, un moyen de faire des captures d’écran, et votre bibliothèque de composants.",
    approvals: "Demandez avant de modifier la navigation, l’onboarding ou les écrans de paywall, et ne le laissez jamais soumettre des builds ni modifier les fiches des stores lui-même.",
    related:
      "Pour l’ingénieur qui branche la logique derrière ses écrans, voir l’[ingénieur logiciel IA](/ai-employees/software-engineer). Pour les interfaces web, voir le [designer UI IA](/ai-employees/ui-designer).",
    mid: {
      title: "Peaufiner les écrans de votre app en pilote automatique ?",
      text: "Le designer UI mobile de Crewmark construit des écrans iOS et Android dans votre code et les vérifie dans le simulateur.",
    },
    faq: [
      {
        q: "Qu’est-ce qu’un designer UI mobile IA ?",
        a: "Un agent IA qui conçoit et peaufine les écrans d’une app mobile dans son propre code et les vérifie dans le simulateur iOS ou l’émulateur Android avant de demander une revue.",
      },
      {
        q: "Un agent IA peut-il concevoir des écrans iOS ?",
        a: "Un agent de code comme Claude Code ou Codex peut écrire des écrans SwiftUI ou UIKit, lancer l’app dans le simulateur et capturer le résultat, sur un Mac avec Xcode.",
      },
      {
        q: "Un designer UI mobile IA est-il un générateur de maquettes d’app par IA ?",
        a: "Non. Un générateur produit des maquettes à partir d’un prompt. Un designer UI mobile IA travaille dans le vrai code de votre app, avec vos composants, et ouvre des pull requests.",
      },
      {
        q: "Peut-il faire les captures pour l’App Store ?",
        a: "Oui, depuis le simulateur. Leur soumission, comme celle des builds, devrait rester entre les mains d’une personne.",
      },
    ],
    cta: "Donnez à votre app un designer qui vérifie chaque écran dans le simulateur.",
  },
};
