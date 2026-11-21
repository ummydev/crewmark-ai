import type { GuideCopy } from "@/components/landing/guide-article";

// fr translation of /use-cases/daily-seo-report; the English master is src/content/use-cases/daily-seo-report.ts.

const brief = `# Rôle : rapporteur SEO
S’exécute depuis le ticket récurrent "Daily SEO report", chaque jour à 18:30.

1. Search Console, 7 derniers jours : impressions, clics, position moyenne.
   Lis les tableaux des requêtes et des pages. Note les requêtes dans le top 10,
   les pages dont les impressions augmentent, et les pages qui ont des impressions
   mais aucun clic.
2. Analytics, 7 derniers jours : visiteurs uniques, visiteurs venus de la recherche,
   visiteurs venus d’assistants IA, principales pages d’atterrissage depuis la recherche.
3. Compare avec l’objectif hebdomadaire : 10,000 impressions, 500 clics,
   2,000 visiteurs uniques.
4. Choisis une chose qui fonctionne et mise dessus dès aujourd’hui
   (une page associée, une FAQ, des liens internes ou une traduction).
5. Publie le rapport en commentaire sur le ticket, liste les décisions
   dont tu as besoin de ma part, puis marque le ticket comme terminé.

Règles
- Accès en lecture seule à Search Console et à l’analytics.
- Ignore les requêtes entre guillemets ou avec de longues listes -site: : ce sont
  des outils de suivi de positions, pas des personnes.`;

const schedule = `# Un ticket récurrent, assigné à votre employé SEO (CLI Crewmark)
crewmark issues create --title "Daily SEO report" --assignee "<employee>" \\
  --repeat "daily at 18:30" --timezone America/New_York`;

export const copy: GuideCopy = {
  meta: {
    title: "Rapport SEO quotidien avec Claude Code : la configuration d’un employé IA",
    description:
      "Faites rédiger votre rapport SEO chaque jour par Claude Code ou Codex : les chiffres de Search Console et de l’analytics, l’écart avec votre objectif, ce qui fonctionne et une action menée en conséquence. La fiche de rôle à copier, les accès nécessaires et comment la planifier.",
  },
  breadcrumb: "Rapport SEO quotidien",
  parent: { name: "Cas d’usage", href: "/use-cases" },
  hero: {
    kicker: "Cas d’usage · Marketing",
    title: "Un rapport SEO quotidien rédigé par un employé IA sur Claude Code",
    lead: "Chaque soir, un employé IA qui tourne sur votre propre Claude Code ou Codex récupère les sept derniers jours de Search Console et de votre analytics, les compare avec votre objectif, repère les requêtes et les pages qui commencent à marcher, fait une action pour les pousser plus loin et publie le rapport là où votre équipe travaille. C’est la routine que l’employé SEO de Crewmark exécute chaque jour ; voici la fiche à copier, les accès nécessaires et comment la planifier.",
    cta: "Commencer",
    secondary: "Copier la fiche",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "Ce que couvre le rapport",
      points: [
        "Recherche : impressions, clics et position moyenne sur les sept derniers jours, avec les requêtes et les pages correspondantes.",
        "Ce qui fonctionne : les requêtes dans le top 10, les pages dont les impressions augmentent, et les pages qui ont des impressions mais aucun clic, ce qui signifie généralement que le titre ou le contenu ne correspond pas à la recherche.",
        "Visiteurs : visiteurs uniques, visiteurs venus des moteurs de recherche et visiteurs venus d’assistants IA comme ChatGPT et Perplexity, avec leurs pages d’atterrissage.",
        "L’écart avec l’objectif : les chiffres de la semaine face à la cible hebdomadaire.",
        "Ce qu’il a fait aujourd’hui, et les décisions qu’il attend de vous.",
      ],
    },
    {
      kind: "table",
      id: "example",
      title: "Un exemple : notre propre rapport du 10 novembre 2026",
      text: [
        "Voici le haut du rapport publié par l’employé SEO de Crewmark pour crewmark.ai, un site de quelques semaines.",
      ],
      headers: ["Indicateur", "7 derniers jours", "Objectif hebdomadaire"],
      rows: [
        ["Impressions Search Console", "537 (contre 309 dans le rapport précédent)", "10,000"],
        ["Clics Search Console", "2", "500"],
        ["Visiteurs uniques", "93, dont 16 venus de la recherche et 0 d’assistants IA", "2,000"],
        ["Ce qui fonctionne", "« base44 superagent » en position 4 sans aucun clic : la requête arrivait sur une page de présentation générale", "-"],
        ["Action menée", "Rédaction le jour même d’une page dédiée à Base44 Superagent", "-"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Mettre en place un rapport SEO quotidien sur Claude Code ou Codex",
      steps: [
        {
          title: "Donnez-lui un accès en lecture seule aux chiffres",
          text: "Pour Search Console : l’API Search Console avec un compte de service en lecture seule, un serveur MCP, ou un navigateur que l’agent peut piloter pendant que vous êtes connecté. Pour l’analytics : la CLI, l’API ou le serveur MCP de votre outil ; notre employé utilise la CLI de PostHog. Un accès en lecture suffit.",
        },
        {
          title: "Copiez la fiche de rôle",
          text: "Mettez-la dans CLAUDE.md pour Claude Code ou AGENTS.md pour Codex, et remplacez l’objectif par le vôtre. Les [Marketing Team Skills](/skills) open source incluent une skill seo-daily-report avec les mêmes étapes.",
          code: brief,
        },
        {
          title: "Planifiez-la",
          text: "Faites du rapport un ticket récurrent : il revient chaque jour à la même heure vers l’employé, et vous voyez si celui du jour est fait.",
          code: schedule,
        },
        {
          title: "Lisez-le là où vous travaillez déjà",
          text: "Le rapport arrive en commentaire sur le ticket. Quand il a besoin de vous, il marque le ticket Needs action et pose la question.",
        },
      ],
    },
    {
      kind: "text",
      id: "double-down",
      title: "Transformer le rapport en action",
      text: [
        "Un rapport qui se contente de décrire les chiffres ne les fait pas bouger. La partie utile, c’est la règle qui dit quoi faire ensuite, et elle est dans la fiche :",
      ],
      points: [
        "Une requête dans le top 10 ou en hausse : écrivez la longue traîne associée (les autres usages du même outil, « vs », alternatives, erreurs, plateformes), ajoutez une FAQ, faites-y des liens depuis les pages qui reçoivent déjà des visiteurs, ou traduisez-la dans une langue où on la recherche déjà.",
        "Des impressions mais aucun clic : la page ne correspond pas à la recherche. Changez son titre pour reprendre la requête que les gens utilisent, ou écrivez une page pour cette requête.",
        "Des termes génériques bloqués au-delà de la 50e position : arrêtez d’y consacrer du temps ; un nouveau site gagne d’abord la longue traîne.",
        "Notez la décision et le résultat dans un journal, pour que le rapport du lendemain puisse vérifier si ça a marché.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Avec Crewmark",
      title: "Recrutez l’employé SEO qui le rédige",
      text: [
        "Le rapport n’est qu’une partie de la journée d’un spécialiste SEO. Crewmark transforme votre Claude Code ou Codex en cet employé, avec un rôle, un objectif chiffré, des horaires de travail et une pulsation.",
      ],
      steps: [
        {
          title: "Partez du rôle",
          text: "Le [spécialiste SEO IA](/ai-employees/seo-specialist) arrive avec ses objectifs, sa routine quotidienne et sa fiche de poste.",
        },
        {
          title: "Ajoutez le rapport comme ticket récurrent",
          text: "Il se réveille au rythme de sa pulsation, voit que le rapport est dû et le publie.",
        },
        {
          title: "Voyez le reste du marketing",
          text: "D’autres tâches pour les équipes marketing sont dans [Claude Code pour le marketing](/for/marketing) ; le cas d’usage suivant est une [veille concurrentielle hebdomadaire](/use-cases/weekly-competitor-digest).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Mettre en place un rapport SEO quotidien sur Claude Code ou Codex" },
  mid: {
    title: "Vous voulez le rapport, et le travail qui va avec, chaque jour ?",
    text: "Le spécialiste SEO de Crewmark tourne sur votre Claude Code ou Codex et publie son rapport selon un planning.",
    button: "Commencer",
  },
  faq: {
    title: "FAQ",
    items: [
      {
        q: "Claude Code peut-il lire Google Search Console ?",
        a: "Oui, via l’API Search Console avec un compte de service, un serveur MCP pour Search Console, ou un navigateur qu’il peut piloter pendant que vous êtes connecté. Donnez-lui un accès en lecture seule.",
      },
      {
        q: "Comment planifier un rapport SEO quotidien avec Claude Code ?",
        a: "Claude Code ne démarre pas tout seul ; quelque chose doit le réveiller. Utilisez une tâche récurrente ou une pulsation, voir [comment rendre Claude Code proactif](/proactive-claude-code), ou faites-le tourner comme employé Crewmark avec un ticket récurrent.",
      },
      {
        q: "Que doit contenir un rapport SEO quotidien ?",
        a: "Les impressions, clics et positions sur sept jours avec les requêtes et pages correspondantes ; ce qui est dans le top 10 ou en hausse ; les visiteurs venus de la recherche et des assistants IA ; l’écart avec l’objectif ; ce qui a été fait aujourd’hui ; et les décisions attendues.",
      },
      {
        q: "Est-ce que ça fonctionne aussi avec Codex ?",
        a: "Oui. Mettez la même fiche dans AGENTS.md ; les accès nécessaires sont les mêmes.",
      },
      {
        q: "Pourquoi regarder sept jours plutôt qu’un seul ?",
        a: "Les données de Search Console ont un ou deux jours de retard et les journées isolées sont bruitées. Sept jours montrent la tendance ; le rapport quotidien se contente de la lire chaque jour.",
      },
    ],
  },
  cta: {
    title: "Recevez le rapport SEO chaque jour, et le travail qu’il demande.",
    text: "Crewmark transforme les sessions Claude Code et Codex en employés IA avec des rôles, des objectifs, des horaires de travail et une pulsation.",
    button: "Commencer",
  },
  checked: "Rédigé le 10 novembre 2026, d’après la routine que l’employé SEO de Crewmark exécute chaque jour.",
  disclaimer:
    "Crewmark est un produit indépendant, sans lien avec Anthropic, OpenAI, Google ni PostHog, et non approuvé par eux. Les noms de produits sont des marques de leurs propriétaires.",
};
