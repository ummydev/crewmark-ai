import type { LegalCopy } from "@/components/landing/legal-page";

// French translation of /terms; the English master is src/content/legal.ts.
const MAIL = "[info@crewmark.ai](mailto:info@crewmark.ai)";

export const copy: LegalCopy = {
  meta: {
    title: "Conditions d'utilisation | Crewmark",
    description:
      "Les conditions d'utilisation de crewmark.ai et de la CLI crewmark : votre compte, les agents IA que vous faites tourner sur votre ordinateur, votre contenu, les tarifs et nos responsabilités.",
  },
  title: "Conditions d'utilisation",
  updated: "Dernière mise à jour : 12 novembre 2026",
  lead: `Ces conditions encadrent votre utilisation de crewmark.ai et de la CLI crewmark (« Crewmark »). En utilisant Crewmark, vous les acceptez. Pour toute question, écrivez à ${MAIL}.`,
  sections: [
    {
      title: "Le service",
      text: [
        "Crewmark vous permet de gérer des agents IA comme des « employés » : vous leur donnez des rôles, des objectifs, des horaires de travail et des issues, et ils font le travail sur votre propre ordinateur, via l'agent IA de votre choix (comme Claude Code ou Codex) et la CLI crewmark.",
      ],
    },
    {
      title: "Votre compte",
      text: [
        "Vous vous connectez avec un compte Google et êtes responsable de ce qui se passe sous ce compte. Si vous créez une organisation ou y invitez des personnes, vous êtes responsable de qui obtient l'accès et des rôles que vous attribuez. Les membres d'une organisation peuvent voir ses projets, issues, employés et messages.",
      ],
    },
    {
      title: "Vos agents IA et votre ordinateur",
      points: [
        "Vos employés tournent sur votre ordinateur, avec l'accès que vous y donnez à l'agent. Ils peuvent lire et modifier des fichiers et exécuter des commandes. Choisissez avec soin les dossiers et autorisations que vous leur donnez, et relisez leur travail.",
        "Les agents IA font des erreurs. Crewmark ne contrôle pas ce qu'un agent fait ou produit, et ne garantit pas que son travail soit exact, complet ou sûr à utiliser.",
        "Vous utilisez votre agent avec votre propre compte chez son fournisseur (par exemple Anthropic ou OpenAI). Les conditions et la facturation de ce fournisseur s'appliquent à cet usage. Crewmark ne paie ni ne revend l'usage de votre agent.",
        "Vous êtes responsable de ce que vos employés font en votre nom, y compris ce qu'ils publient, envoient ou modifient.",
      ],
    },
    {
      title: "Votre contenu",
      text: [
        "Ce que vous mettez dans Crewmark et le travail produit par vos employés restent à vous. Vous nous autorisez à les stocker, les traiter et les afficher uniquement dans la mesure nécessaire pour faire fonctionner Crewmark pour vous et les membres de votre organisation. Notre [Politique de confidentialité](/privacy) explique comment nous traitons les informations.",
      ],
    },
    {
      title: "Utilisation acceptable",
      text: ["N'utilisez pas Crewmark, ni les employés gérés avec, pour :"],
      points: [
        "enfreindre la loi ou les droits d'autrui ;",
        "envoyer du spam, ou harceler, tromper ou nuire à d'autres personnes ;",
        "accéder à des systèmes ou des données auxquels vous n'avez pas le droit d'accéder, ou perturber Crewmark ou d'autres services ;",
        "contourner les limites que nous imposons au service, ou le revendre sans notre accord.",
      ],
    },
    {
      title: "Tarifs",
      text: [
        "Pour l'instant, Crewmark est gratuit. Nous prévoyons de proposer des offres payantes ; voir [Tarifs](/pricing). Nous ne vous facturerons rien sans votre accord, et nous vous montrerons les prix et les conditions avant que vous ne souscriviez à une offre payante.",
      ],
    },
    {
      title: "Évolutions et disponibilité",
      text: [
        "Crewmark est récent et évolue souvent. Nous pouvons ajouter, modifier ou retirer des fonctionnalités, et le service peut parfois être indisponible. Nous essaierons de vous prévenir des changements qui vous concernent de manière importante.",
      ],
    },
    {
      title: "Arrêter d'utiliser Crewmark",
      text: [
        `Vous pouvez arrêter d'utiliser Crewmark à tout moment et nous demander de supprimer votre compte en écrivant à ${MAIL}. Nous pouvons suspendre ou fermer un compte qui enfreint ces conditions ou met en danger le service ou d'autres personnes ; quand c'est raisonnablement possible, nous vous prévenons d'abord.`,
      ],
    },
    {
      title: "Absence de garantie",
      text: [
        "Dans la mesure permise par la loi, Crewmark est fourni « en l'état » et « selon disponibilité », sans garantie d'aucune sorte. Nous ne promettons pas qu'il fonctionne sans interruption, sans erreur ni qu'il convienne à un usage particulier.",
      ],
    },
    {
      title: "Limitation de responsabilité",
      text: [
        "Dans la mesure permise par la loi, Crewmark n'est pas responsable des pertes indirectes ou consécutives, ni de la perte de données, de bénéfices ou d'activité, résultant de votre utilisation de Crewmark ou des agents IA que vous faites tourner avec. Pour toute réclamation ou tout litige, quelle qu'en soit la cause, notre responsabilité totale ne dépassera pas 50 USD. Certains pays n'autorisent pas ces limites ; elles peuvent donc ne pas toutes s'appliquer à vous.",
      ],
    },
    {
      title: "Modifications de ces conditions",
      text: [
        "Quand nous modifions ces conditions, nous mettons à jour la date en haut de cette page. Si une modification est importante, nous vous prévenons dans l'application avant qu'elle ne prenne effet. Continuer à utiliser Crewmark ensuite vaut acceptation des nouvelles conditions.",
      ],
    },
    {
      title: "Contact",
      text: [`Écrivez à ${MAIL} pour toute question sur ces conditions.`],
    },
  ],
};
