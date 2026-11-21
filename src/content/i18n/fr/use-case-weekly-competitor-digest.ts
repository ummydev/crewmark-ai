import type { GuideCopy } from "@/components/landing/guide-article";

// fr translation of /use-cases/weekly-competitor-digest; the English master is
// src/content/use-cases/weekly-competitor-digest.ts.

const brief = `# Rôle : veilleur concurrentiel
S’exécute depuis le ticket récurrent "Weekly competitor digest", le lundi à 9:00.

Liste de veille : competitors.md (une ligne par page : nom, URL, ce que c’est).

1. Récupère chaque page de competitors.md, une à la fois.
   Pages publiques uniquement ; ne te connecte jamais au produit d’un concurrent.
2. Enregistre le texte lisible dans competitors/<name>/<page>.md.
3. Compare avec la copie de la semaine dernière (git diff). Ignore les dates,
   les compteurs et les bannières de cookies.
4. Rédige le récapitulatif : ce qui a changé, avec un lien et l’ancienne et la nouvelle
   formulation pour les prix, les offres et les limites.
5. Dis ce que nous devrions faire : pages comparatives à mettre à jour, une réponse à
   un lancement, ou rien.
6. Commite les instantanés, publie le récapitulatif sur le ticket, marque-le comme terminé.`;

const watchlist = `# competitors.md
Acme | https://acme.com/pricing   | pricing
Acme | https://acme.com/changelog | changelog
Acme | https://docs.acme.com/limits | plan limits
Beta | https://beta.dev/pricing   | pricing
Beta | https://github.com/beta-dev/beta/releases | releases`;

export const copy: GuideCopy = {
  meta: {
    title: "Veille concurrentielle hebdomadaire avec Claude Code : prix, lancements",
    description:
      "Faites vérifier chaque semaine par Claude Code ou Codex les pages de tarifs, les changelogs et la documentation de vos concurrents, comparer avec la semaine précédente et vous dire ce qui a changé et quoi faire. La fiche de rôle et la liste de veille à copier, et comment planifier le tout.",
  },
  breadcrumb: "Veille concurrentielle hebdomadaire",
  parent: { name: "Cas d’usage", href: "/use-cases" },
  hero: {
    kicker: "Cas d’usage · Marketing",
    title: "Une veille concurrentielle hebdomadaire par un employé IA sur Claude Code",
    lead: "Les prix changent, les offres sont renommées et des fonctionnalités sortent discrètement, et la plupart des équipes l’apprennent par un client. Un employé IA sur votre propre Claude Code ou Codex peut lire chaque semaine les pages publiques de vos concurrents, garder une copie de chacune dans votre dépôt, la comparer avec celle de la semaine précédente et vous dire exactement ce qui a changé, avec les liens et l’ancienne et la nouvelle formulation, ainsi que ce que vous devriez faire. Voici la fiche, le format de la liste de veille et comment la planifier.",
    cta: "Commencer",
    secondary: "Copier la fiche",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "Pourquoi des instantanés valent mieux qu’un fil d’actualité",
      text: [
        "Un changement de prix fait rarement l’objet d’un article de blog. Enregistrer le texte de chaque page et le comparer permet de repérer les changements discrets : une limite abaissée, une offre renommée, une offre gratuite supprimée.",
      ],
      points: [
        "C’est exact : le récapitulatif cite l’ancienne et la nouvelle formulation, personne ne débat de ce qui a changé.",
        "C’est peu coûteux : du texte brut dans votre dépôt, versionné par git, sans service de scraping.",
        "C’est traçable : l’historique de la page de tarifs de chaque concurrent se trouve dans votre git log.",
        "Ça garde vos pages honnêtes : les pages comparatives vieillissent vite. Par exemple, de nombreuses listes sur Devin citaient encore une offre à $500 et une tarification par ACU après que devin.ai a fait passer ses offres en libre-service à des quotas et des crédits, comme le note notre page [alternatives à Devin](/blog/devin-alternatives).",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Mettre en place une veille concurrentielle hebdomadaire",
      steps: [
        {
          title: "Rédigez la liste de veille",
          text: "Une ligne par page publique : tarifs, changelog ou releases, limites des offres dans la documentation, et les pages comparatives qu’ils publient à votre sujet.",
          code: watchlist,
        },
        {
          title: "Copiez la fiche de rôle",
          text: "Dans CLAUDE.md pour Claude Code ou AGENTS.md pour Codex. La récupération web suffit ; pour les pages qui ne s’affichent que dans un navigateur, donnez-lui un outil de navigation.",
          code: brief,
        },
        {
          title: "Planifiez-la chaque semaine",
          text: "Faites-en un ticket récurrent, par exemple `--repeat \"weekly on mon at 9:00\"`, assigné à votre employé marketing ou SEO.",
        },
        {
          title: "Passez à l’action",
          text: "Quand le récapitulatif recommande de mettre à jour une page comparative, le même employé peut en faire son ticket suivant et ouvrir une pull request.",
        },
      ],
    },
    {
      kind: "table",
      id: "what-to-watch",
      title: "Quoi surveiller, et pourquoi",
      headers: ["Page", "Ce que signifie généralement un changement"],
      rows: [
        ["Tarifs", "Une nouvelle offre, un changement de prix ou une offre gratuite qui disparaît : mettez à jour vos tableaux comparatifs dans la semaine"],
        ["Changelog ou releases", "Une fonctionnalité qui comble un écart sur lequel vous vous vendez, ou un nouveau marché qu’ils abordent"],
        ["Documentation des limites", "Des quotas resserrés ou assouplis ; souvent le premier signe d’un changement de prix"],
        ["Leurs pages comparatives", "Comment ils se positionnent face à vous ; répondez avec des faits sur vos propres pages"],
        ["Page carrières", "Des recrutements commerciaux dans une région, ou pour une nouvelle gamme de produits"],
      ],
    },
    {
      kind: "text",
      id: "rules",
      title: "Règles de base",
      points: [
        "Pages publiques uniquement. Ne vous connectez pas au produit d’un concurrent et n’utilisez pas de compte d’essai pour collecter des données.",
        "Récupérez une page à la fois à un rythme normal, une fois par semaine ; vous lisez, vous ne crawlez pas.",
        "Citez, ne devinez pas : si une page est ambiguë, le récapitulatif le dit et donne le lien.",
        "Gardez une personne sur tout ce qui est public : les modifications de vos pages comparatives passent par une relecture.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Avec Crewmark",
      title: "Laissez votre employé marketing faire le guet",
      text: [
        "Le récapitulatif est un ticket hebdomadaire pour un employé IA qui s’occupe déjà de vos pages comparatives. Crewmark confie ce poste à votre Claude Code ou Codex, avec des horaires de travail et une pulsation.",
      ],
      steps: [
        {
          title: "Partez d’un rôle",
          text: "L’[agent marketing IA](/ai-employees/marketing-agent) ou le [spécialiste SEO IA](/ai-employees/seo-specialist).",
        },
        {
          title: "Ajoutez le ticket hebdomadaire",
          text: "Il revient chaque lundi ; l’employé publie le récapitulatif et ouvre des tickets de suivi pour les pages à mettre à jour.",
        },
        {
          title: "Voyez d’autres tâches marketing",
          text: "Dans [Claude Code pour le marketing](/for/marketing), et le [rapport SEO quotidien](/use-cases/daily-seo-report).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Mettre en place une veille concurrentielle hebdomadaire sur Claude Code ou Codex" },
  mid: {
    title: "Vous voulez les changements de vos concurrents dans votre boîte chaque lundi ?",
    text: "Un employé Crewmark sur votre Claude Code ou Codex vérifie, compare et rend compte, puis met à jour vos pages.",
    button: "Commencer",
  },
  faq: {
    title: "FAQ",
    items: [
      {
        q: "Claude Code peut-il suivre les prix des concurrents ?",
        a: "Oui. Il peut récupérer les pages de tarifs publiques, enregistrer leur texte dans votre dépôt et le comparer avec la copie de la semaine précédente, puis résumer les changements. Faites-le tourner chaque semaine avec une tâche récurrente ou comme employé IA.",
      },
      {
        q: "Est-il légal de surveiller les sites de ses concurrents ?",
        a: "Lire des pages publiques relève de la veille concurrentielle normale. Respectez les conditions d’utilisation et les règles robots de chaque site, récupérez les pages à un rythme normal et ne vous connectez pas à leur produit pour collecter des données.",
      },
      {
        q: "Pourquoi ne pas utiliser un outil de surveillance des changements de sites ?",
        a: "Vous pouvez. La différence tient à ce qui se passe ensuite : l’employé explique ce que le changement signifie pour vous et peut mettre à jour vos propres pages comparatives dans la semaine.",
      },
      {
        q: "Combien de concurrents peut-il surveiller ?",
        a: "Autant que l’usage de votre abonnement le permet ; une exécution hebdomadaire sur quelques dizaines de pages reste légère. Commencez par trois à cinq concurrents et leurs pages de tarifs, de changelog et de limites.",
      },
    ],
  },
  cta: {
    title: "Sachez ce que vos concurrents ont changé avant que vos clients vous le disent.",
    text: "Crewmark transforme les sessions Claude Code et Codex en employés IA avec des rôles, des objectifs, des horaires de travail et une pulsation.",
    button: "Commencer",
  },
  checked: "Rédigé le 10 novembre 2026 par l’employé SEO de Crewmark, qui écrit et met à jour nos pages comparatives.",
  disclaimer:
    "Crewmark est un produit indépendant, sans lien avec Anthropic ni OpenAI, et non approuvé par eux. Les noms de produits sont des marques de leurs propriétaires.",
};
