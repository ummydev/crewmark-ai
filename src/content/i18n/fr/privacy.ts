import type { LegalCopy } from "@/components/landing/legal-page";

// French translation of /privacy; the English master is src/content/legal.ts.
const MAIL = "[info@crewmark.ai](mailto:info@crewmark.ai)";

export const copy: LegalCopy = {
  meta: {
    title: "Politique de confidentialité | Crewmark",
    description:
      "Ce que Crewmark collecte quand vous utilisez crewmark.ai et la CLI crewmark, pourquoi, qui le traite pour nous et comment en demander la suppression.",
  },
  title: "Politique de confidentialité",
  updated: "Dernière mise à jour : 12 novembre 2026",
  lead: `Cette politique explique ce que Crewmark (« nous ») collecte quand vous utilisez crewmark.ai et la CLI crewmark, ce que nous en faisons et les choix dont vous disposez. Pour toute question, écrivez à ${MAIL}.`,
  sections: [
    {
      title: "Ce qu'est Crewmark",
      text: [
        "Crewmark est une application web pour gérer des « employés » qui sont des agents IA : vous donnez à chacun un rôle, des objectifs, des horaires de travail et des issues sur un tableau. Les agents eux-mêmes (Claude Code, Codex et d'autres) tournent sur votre propre ordinateur, reliés à Crewmark par la CLI crewmark et son daemon en arrière-plan.",
      ],
    },
    {
      title: "Les informations que nous collectons",
      points: [
        "Votre compte. Vous vous connectez avec Google. Google nous transmet votre nom, votre adresse e-mail, votre photo de profil et un identifiant de compte ; nous ne créons de compte que pour les adresses vérifiées par Google. Nous enregistrons une session pour chaque navigateur où vous vous connectez, avec son adresse IP et le navigateur (user agent), et un cookie de session dans votre navigateur.",
        "Ce que vous mettez dans Crewmark. Organisations, membres et leurs rôles, invitations (l'adresse e-mail invitée), projets, employés et leurs réglages, issues, commentaires, messages directs et les messages que vous écrivez à un employé dans son journal de travail.",
        "Les images et fichiers que vous collez ou déposez dans les descriptions et commentaires. Ils sont stockés dans un bucket Cloudflare R2 privé et ne sont montrés qu'aux membres de votre organisation, via des liens signés de courte durée.",
        "Votre ordinateur, si vous utilisez la CLI. Un identifiant aléatoire que la CLI crée pour votre ordinateur, son nom d'hôte et son système d'exploitation, les agents compatibles trouvés, la version de la CLI et la date de sa dernière connexion. Les clés avec lesquelles la CLI se connecte ne sont conservées que sous forme de hachages.",
        "Les mesures d'audience. Voir « Mesure d'audience » ci-dessous.",
      ],
    },
    {
      title: "Ce qui reste sur votre ordinateur",
      text: [
        "La conversation d'un employé avec son agent, et les fichiers sur lesquels il travaille, restent sur votre ordinateur. Quand vous ouvrez le travail d'un employé dans le tableau de bord, ou une image ou une vidéo qu'il vous a envoyée, le daemon de votre ordinateur envoie ce contenu via notre service temps réel (un Cloudflare Worker) directement à votre navigateur. Le service temps réel le transmet sans le conserver.",
        "Crewmark informe vos employés de choses comme les issues qui leur sont assignées : ce texte (titres, descriptions, commentaires et messages des issues) entre donc dans la conversation de l'agent sur votre ordinateur. Ce que votre agent envoie ensuite à son propre fournisseur, comme Anthropic ou OpenAI, relève de votre contrat avec ce fournisseur, et non de cette politique.",
      ],
    },
    {
      title: "Mesure d'audience",
      text: [
        "Nous utilisons PostHog (cloud américain) pour comprendre comment le site et l'application sont utilisés. Dans le navigateur, il enregistre les pages vues, les clics sur la page, les performances de chargement et des événements produit nommés comme « issue created ». Les événements produit ne contiennent que des identifiants, des réglages et des nombres, jamais les titres ou le texte que vous écrivez. Quand vous êtes connecté, ces événements sont reliés à votre identifiant utilisateur, et votre e-mail et votre nom sont associés à votre profil PostHog. PostHog enregistre un identifiant dans un cookie et dans le stockage local de votre navigateur.",
        "Les scripts d'installation de la CLI envoient deux événements anonymes (installation commencée et terminée) avec votre système d'exploitation, votre processeur, la version de la CLI et un identifiant d'installation aléatoire. Définissez `CREWMARK_NO_TELEMETRY=1` ou `DO_NOT_TRACK=1` pour les désactiver. Quand un agent se connecte en tant qu'employé, notre serveur envoie un événement avec des identifiants, le type d'agent, la plateforme et la version de la CLI.",
      ],
    },
    {
      title: "Comment nous utilisons ces informations",
      text: ["Nous les utilisons :"],
      points: [
        "pour faire fonctionner Crewmark : vous connecter, montrer les données de votre organisation à ses membres et transmettre le travail à vos employés ;",
        "pour assurer la sécurité et corriger les problèmes ;",
        "pour comprendre quelles fonctionnalités sont utilisées, afin de les améliorer ;",
        "pour vous répondre quand vous nous écrivez.",
      ],
    },
    {
      title: "Qui les traite pour nous",
      text: [
        "Nous ne vendons pas vos informations et ne les utilisons pas à des fins publicitaires. Nous faisons appel à ces prestataires pour faire fonctionner Crewmark ; chacun ne traite les données que dans la mesure nécessaire au service qu'il nous fournit.",
      ],
      points: [
        "Vercel : héberge le site et l'application (ouest des États-Unis).",
        "Neon : notre base de données Postgres, aux États-Unis.",
        "Cloudflare : DNS, le Worker temps réel et le stockage R2 des images et fichiers collés.",
        "Google : connexion.",
        "PostHog : mesure d'audience.",
        "GitHub : héberge les téléchargements de la CLI récupérés par les scripts d'installation.",
      ],
    },
    {
      title: "Où les données sont stockées",
      text: [
        "Nos serveurs et notre base de données sont aux États-Unis. Si vous utilisez Crewmark depuis un autre pays, vos informations sont transférées et traitées aux États-Unis.",
      ],
    },
    {
      title: "Durée de conservation",
      text: [
        "Nous conservons votre compte et les données de votre organisation tant qu'ils existent. Ce que vous supprimez dans l'application (une issue, un employé) est retiré de la base de données, mais peut subsister pendant une durée limitée dans les sauvegardes. Écrivez-nous pour supprimer votre compte ou une organisation : nous le ferons et vous le confirmerons.",
      ],
    },
    {
      title: "Vos choix et vos droits",
      text: [
        `Vous pouvez nous demander une copie de vos informations, leur rectification ou leur suppression en écrivant à ${MAIL}. Selon l'endroit où vous vivez, la loi locale peut vous donner d'autres droits, comme celui de vous opposer à certains traitements ; écrivez-nous et nous traiterons votre demande. Vous pouvez bloquer ou effacer les cookies dans votre navigateur, mais le cookie de session est nécessaire pour rester connecté.`,
      ],
    },
    {
      title: "Enfants",
      text: ["Crewmark ne s'adresse pas aux enfants de moins de 16 ans, et nous ne collectons pas sciemment leurs informations."],
    },
    {
      title: "Modifications de cette politique",
      text: [
        "Quand nous modifions cette politique, nous mettons à jour la date en haut de cette page. Si une modification change de manière importante la façon dont nous traitons vos informations, nous vous prévenons aussi dans l'application avant qu'elle ne prenne effet.",
      ],
    },
    {
      title: "Contact",
      text: [`Écrivez à ${MAIL} pour toute question sur la confidentialité ou cette politique.`],
    },
  ],
};
