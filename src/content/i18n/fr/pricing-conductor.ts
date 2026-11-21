import type { GuideCopy } from "@/components/landing/guide-article";

// French translation of /pricing/conductor; the English master is src/content/product-pricing/conductor.ts.

export const copy: GuideCopy = {
  meta: {
    title: "Conductor prix : app Mac gratuite, offres cloud, il rejoint Meta",
    description:
      "Conductor est gratuit ; les modèles sont facturés par le fournisseur de chaque agent. Depuis le 4 novembre 2026, inscriptions closes et fin de Conductor Cloud.",
  },
  breadcrumb: "Prix de Conductor",
  parent: { name: "Comparatifs", href: "/compare" },
  hero: {
    kicker: "Tarifs · Conductor",
    title: "Prix de Conductor : une app Mac gratuite, des offres cloud, et ce qui a changé le 4 novembre 2026",
    lead: "« L’utilisation de Conductor est gratuite » (« Conductor is free to use. »). Il ne facture ni ne revend l’usage des modèles : Claude Code, Codex, OpenCode et Cursor tournent sur vos propres abonnements ou clés API. Les espaces de travail cloud nécessitaient une offre Pro, Team ou Enterprise, mais aucun prix n’est affiché aujourd’hui. Le 4 novembre 2026, Conductor a annoncé rejoindre Meta et a fermé les nouvelles inscriptions et les téléchargements. Voici ce que vous payez, ce qui a changé, et la comparaison du prix avec Vibe Kanban, Claude Squad, Cursor Projects et Crewmark.",
    cta: "Commencer",
    secondary: "Ce qui a changé",
    secondaryHref: "#change",
  },
  sections: [
    {
      kind: "table",
      id: "plans",
      title: "Offres et prix de Conductor",
      text: [
        "D’après conductor.build et sa documentation, vérifiés le 13 novembre 2026. La page /pricing redirige désormais vers la page d’accueil, et aucun prix d’offre n’est affiché nulle part sur le site.",
      ],
      headers: ["Offre", "Prix", "Ce qui est inclus"],
      rows: [
        [
          "Conductor (application Mac)",
          "Utilisation gratuite",
          "Claude Code, Codex et OpenCode (intégrés) et Cursor Agent côte à côte, chacun dans son propre worktree git ; revue des diffs, checks, pull requests et merge",
        ],
        [
          "Pro",
          "Aucun prix affiché ; depuis le 4 novembre 2026, les utilisateurs Pro conservent gratuitement les fonctionnalités Pro",
          "Espaces de travail cloud et Routines (exécutions d’agents planifiées ou déclenchées par GitHub)",
        ],
        ["Team (sur invitation)", "Aucun prix affiché", "Espaces de travail cloud et Routines"],
        ["Enterprise", "Aucun prix affiché", "Espaces de travail cloud"],
        [
          "Usage des modèles",
          "Facturé par le fournisseur de chaque agent",
          "Vos abonnements existants (par exemple Claude Pro ou Max, ou ChatGPT) ou vos clés API",
        ],
      ],
    },
    {
      kind: "text",
      id: "costs",
      title: "Ce que vous payez vraiment pour utiliser Conductor",
      points: [
        "Les fournisseurs de vos agents. Conductor ne facture ni ne revend l’usage des modèles. Chaque agent est facturé via le compte ou la clé API de son fournisseur ; Cursor Agent passe par l’API de Cursor.",
        "Un Mac. Conductor fonctionne uniquement sur macOS et « n’est pas encore disponible pour Windows ni Linux » (« not available for Windows or Linux yet. »). Les agents tournent directement sur votre machine, avec les permissions de votre compte utilisateur et sans bac à sable.",
        "Rien pour l’application elle-même. L’application locale est gratuite.",
        "Les espaces de travail cloud nécessitaient une offre Pro, Team ou Enterprise. Depuis le 4 novembre 2026, les utilisateurs gratuits ne peuvent plus passer à une offre payante, les utilisateurs Pro conservent gratuitement les fonctionnalités Pro, et les abonnés actifs sont remboursés.",
      ],
    },
    {
      kind: "text",
      id: "change",
      title: "Ce qui a changé le 4 novembre 2026",
      text: [
        "Conductor a annoncé rejoindre Meta. Le pied de page du site indique désormais « Conductor from Meta, © 2026 Meta. » Les dates qui comptent si vous l’utilisez ou si vous comptiez l’adopter :",
      ],
      points: [
        "4 novembre 2026 : fermeture des nouvelles inscriptions et des téléchargements. Les utilisateurs gratuits ne peuvent plus passer à une offre payante, les utilisateurs Pro conservent gratuitement les fonctionnalités Pro, les abonnés actifs sont remboursés.",
        "13 novembre 2026 : Conductor Cloud passe en lecture seule.",
        "20 novembre 2026 : Conductor Cloud ferme, et la suppression des données utilisateur du cloud commence.",
        "Jusqu’au début de 2027 : l’application locale reçoit de nouveaux modèles et des correctifs de bugs critiques, puis s’arrête progressivement. Toutes les données utilisateur sont supprimées à l’arrêt de l’application.",
        "Si vous cherchez une solution de remplacement, voir [les alternatives à Conductor](/blog/conductor-alternatives).",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Prix de Conductor vs outils similaires",
      text: [
        "Prix tirés du site de chaque produit, vérifiés le 13 novembre 2026. Avec chacun d’eux, vous payez aussi les agents de code ou les modèles que vous faites tourner, sauf si une offre ci-dessous les inclut.",
        "Côte à côte : [Vibe Kanban vs Conductor](/compare/vibe-kanban-vs-conductor), [Claude Squad vs Conductor](/compare/claude-squad-vs-conductor). D’autres options dans [les alternatives à Conductor](/blog/conductor-alternatives).",
      ],
      headers: ["Produit", "Prix à partir de", "Option gratuite"],
      rows: [
        [
          "Conductor",
          "Utilisation gratuite ; prix des offres cloud non affichés",
          "Oui, mais les nouvelles inscriptions et les téléchargements sont fermés depuis le 4 novembre 2026",
        ],
        [
          "[Vibe Kanban](/compare/vibe-kanban-vs-conductor)",
          "Application locale gratuite ; l’annonce de fermeture de bloop du 10 avril 2026 indique que les abonnements ont été arrêtés",
          "Oui : open source (Apache-2.0), maintenu par la communauté",
        ],
        [
          "[Claude Squad](/compare/claude-squad-vs-conductor)",
          "Gratuit ; aucune offre payante affichée",
          "Oui : open source (AGPL-3.0)",
        ],
        [
          "[Cursor Projects](/personal-agent/cursor-projects)",
          "Cursor Premium $30/mois, ou $300/an",
          "Non : ni sur Free, ni sur Plus ($8/mois), ni sur l’ancienne offre Hobby",
        ],
        [
          "[Crewmark](/pricing)",
          "Gratuit ; Pro $5/mois et Team $10/mois bientôt disponibles",
          "Oui : 1 projet, jusqu’à 3 employés IA, 1 personne",
        ],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Avec Crewmark",
      title: "Conductor fait tourner des agents côte à côte. Crewmark leur donne un poste et un tableau.",
      text: [
        "Crewmark est un gestionnaire de tickets pour une équipe d’employés IA. Chaque employé est une conversation Claude Code ou Codex sur votre propre ordinateur, avec un rôle, des objectifs et des horaires de travail. Il se réveille au rythme d’une pulsation et prend des tickets sur un tableau partagé. La CLI `crewmark` fonctionne sur macOS, Linux et Windows, et les agents utilisent l’abonnement Claude ou ChatGPT que vous payez déjà.",
        "Les prix de Crewmark : Free à $0 (1 projet, jusqu’à 3 employés IA, 1 personne). Pro à $5/mois et Team à $10/mois arrivent bientôt. La facturation n’est pas encore en place : d’ici là, tous les comptes peuvent utiliser Crewmark gratuitement. Il est open source (GPL-3.0) et peut être auto-hébergé.",
      ],
      steps: [
        {
          title: "Choisir un rôle",
          text: "Parmi les [rôles d’employés IA](/ai-employees), comme ingénieur logiciel, avec des objectifs chiffrés.",
        },
        {
          title: "Mettre le travail sur un tableau",
          text: "Assignez des tickets et rendez récurrents ceux qui reviennent régulièrement ; la pulsation réveille l’employé pour qu’il prenne le suivant.",
        },
        {
          title: "Voir les offres",
          text: "[Les tarifs de Crewmark](/pricing), et ce que les agents en font dans [les cas d’usage de Claude Code](/use-cases/claude-code) et [les cas d’usage de Codex](/use-cases/codex).",
        },
      ],
    },
  ],
  mid: {
    title: "Vous quittez Conductor ?",
    text: "Crewmark donne à votre Claude Code ou Codex un rôle, une pulsation et un tableau partagé, sur macOS, Linux ou Windows.",
    button: "Commencer",
  },
  faq: {
    title: "FAQ sur les prix de Conductor",
    items: [
      {
        q: "Conductor est-il gratuit ?",
        a: "Oui. « L’utilisation de Conductor est gratuite » (« Conductor is free to use »), et l’usage des modèles est facturé par le fournisseur de chaque agent. Depuis le 4 novembre 2026, toutefois, les nouvelles inscriptions et les téléchargements sont fermés.",
      },
      {
        q: "Combien coûte Conductor ?",
        a: "L’application Mac est gratuite. Les espaces de travail cloud nécessitaient une offre Pro, Team (sur invitation) ou Enterprise, mais aucun prix n’est affiché aujourd’hui pour ces offres, et la page /pricing redirige vers la page d’accueil.",
      },
      {
        q: "Conductor prélève-t-il des frais sur l’usage des modèles ?",
        a: "Non. Conductor ne facture ni ne revend l’usage des modèles. Claude Code, Codex, OpenCode et Cursor Agent utilisent vos propres abonnements, comme Claude Pro ou Max ou ChatGPT, ou vos clés API.",
      },
      {
        q: "Conductor est-il open source, ou faut-il acheter une licence ?",
        a: "Ni l’un ni l’autre. Conductor n’est pas open source (aucun dépôt de code source ni aucune licence n’est publié), et l’application est gratuite : il n’y a donc pas de licence à payer.",
      },
      {
        q: "Qu’advient-il de mon abonnement Conductor Pro ?",
        a: "Depuis le 4 novembre 2026, les utilisateurs Pro conservent gratuitement les fonctionnalités Pro et les abonnés actifs sont remboursés. Conductor Cloud passe en lecture seule le 13 novembre et ferme le 20 novembre 2026.",
      },
      {
        q: "Combien de temps l’application Conductor va-t-elle encore fonctionner ?",
        a: "L’application locale reçoit de nouveaux modèles et des correctifs de bugs critiques jusqu’au début de 2027, puis s’arrête progressivement, et toutes les données utilisateur sont supprimées à son arrêt. Voir [les alternatives à Conductor](/blog/conductor-alternatives).",
      },
    ],
  },
  cta: {
    title: "Gardez vos agents au travail après Conductor.",
    text: "Crewmark transforme les sessions Claude Code et Codex en employés IA dotés de rôles, d’objectifs, d’horaires de travail et d’une pulsation.",
    button: "Commencer",
  },
  checked:
    "Vérifié sur conductor.build, dans sa documentation, son changelog et son annonce, ainsi que sur la page de tarifs de chaque produit comparé, le 13 novembre 2026.",
  disclaimer:
    "Crewmark est un produit indépendant, sans lien avec Conductor, Meta ni aucune autre entreprise citée sur cette page, et non approuvé par celles-ci. Les noms de produits sont des marques de leurs propriétaires respectifs.",
};
