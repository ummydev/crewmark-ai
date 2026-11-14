import type { GuideCopy } from "@/components/landing/guide-article";

// French translation of /blog/best-ai-employee-platforms; the English master is src/content/blog/best-ai-employee-platforms.ts.

export const copy: GuideCopy = {
  meta: {
    title: "Meilleures plateformes d’employés IA (2026) | Crewmark AI",
    description:
      "Lindy, Sintra, Marblism, Artisan, Ema, Devin, le projet open source ai-employees et Crewmark comparés : rôles, déclenchement du travail, modèles utilisés, offres gratuites et prix.",
  },
  breadcrumb: "Meilleures plateformes d’employés IA",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-06" },
  hero: {
    kicker: "Blog · Employés IA",
    title: "Les meilleures plateformes d’employés IA en 2026, comparées",
    lead: "Une plateforme d’employés IA vous fournit des agents IA configurés comme du personnel : chacun a un rôle, travaille vers un objectif et se met au travail sans qu’il faille le solliciter à chaque fois. Les produits ci-dessous vendent tous cette idée, mais diffèrent par les métiers couverts, la façon dont le travail leur parvient, les modèles qu’ils utilisent et leur tarification. Nous en avons comparé huit, dont le nôtre, en nous appuyant uniquement sur ce que publie chaque éditeur.",
    cta: "Commencer",
    secondary: "Aller au comparatif",
    secondaryHref: "#compare",
  },
  sections: [
    {
      kind: "table",
      id: "compare",
      title: "Les plateformes d’employés IA en un coup d’œil",
      text: [
        "Les prix sont ceux des offres d’entrée de gamme affichées sur la page tarifs de chaque éditeur le 6 novembre 2026, en dollars américains. Pour savoir ce qu’est un employé IA et ce qui le distingue d’un agent IA, voyez [qu’est-ce qu’un employé IA](/ai-employees).",
      ],
      headers: ["Plateforme", "Idéal pour", "Déclenchement du travail", "Modèles", "Option gratuite", "Payant dès"],
      rows: [
        ["Lindy", "Travail de bureau sur environ 17 fonctions : e-mails, agenda, ventes, support, recrutement", "Planifications (Routines), Slack et iMessage, appels téléphoniques", "Grands modèles choisis par Lindy", "Gratuit : $50 de crédits pendant 7 jours", "$49.99/mois par utilisateur (Team)"],
        ["Sintra", "Petites entreprises : plus de 12 assistants nommés pour le support, la rédaction, le SEO, les réseaux sociaux et la vente", "Vous discutez avec un assistant ou lancez une tâche en un clic", "Modèles de Sintra (basés sur Claude Sonnet)", "Pas d’offre gratuite", "$48.50/mois, ou moins en annuel"],
        ["Marblism", "Petites entreprises : 7 rôles, de l’assistant à la réceptionniste en passant par le juridique", "Vous fixez un objectif ; ils y travaillent chaque jour et demandent votre accord", "Non précisé", "Pas d’offre gratuite", "$24/mois en annuel, $44 en mensuel"],
        ["Artisan (Ava)", "Prospection commerciale : un business developer IA", "Autonome, avec des règles de validation et d’escalade", "Non précisé", "Non précisé", "Offres à crédits ; sur démo"],
        ["Ema", "RH, IT et finance en grande entreprise", "Teams, Slack ou la voix ; plus de 250 intégrations", "Combinaison de plus de 100 modèles par Ema", "Essai gratuit", "Au résultat ; non affiché"],
        ["Devin", "Ingénierie logicielle", "@mention dans Slack ou Teams, tickets Linear ou Jira, workflows récurrents", "Modèles de Devin (plusieurs fournisseurs)", "Offre gratuite avec un petit quota", "$20/mois (Pro)"],
        ["ai-employees (open source)", "8 rôles métier sous forme de dossiers de routines planifiées", "Planifications dans le SCHEDULE.md de chaque rôle", "Votre propre agent : Claude Code, Codex, OpenCode et d’autres", "Gratuit, licence MIT", "Gratuit"],
        ["Crewmark", "Tout rôle que vous définissez, sur des agents de codage : ingénierie, SEO, marketing, design", "Une pulsation réveille chaque employé pendant ses horaires de travail pour prendre le ticket suivant sur un tableau", "Votre propre abonnement Claude Code, Codex, DeepSeek Harness ou OpenCode", "Oui : 1 projet, jusqu’à 3 employés", "5 $/mois (Pro, bientôt disponible)"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Comment choisir une plateforme d’employés IA",
      steps: [
        {
          title: "Partir du poste, pas de l’outil",
          text: "Notez un rôle et le chiffre qu’il doit faire bouger : rendez-vous obtenus, clics Search Console ou pull requests fusionnées, par exemple. Les plateformes conçues pour un seul métier (Artisan pour la prospection, Devin pour le code) font généralement mieux que les généralistes sur ce métier.",
        },
        {
          title: "Vérifier comment le travail démarre",
          text: "Un assistant conversationnel vous attend ; un employé IA démarre de lui-même. Cherchez des planifications, des déclencheurs ou une pulsation, ainsi qu’un endroit où assigner du travail : un tableau, des tickets ou un canal Slack.",
        },
        {
          title: "Vérifier à qui sont les modèles, et qui paie",
          text: "La plupart des plateformes revendent l’usage des modèles sous forme de crédits ou de licences. Si vous payez déjà Claude Code ou Codex, les outils qui tournent sur cet abonnement (le projet open source ai-employees, Crewmark) n’ajoutent que peu ou pas de coût de modèle.",
        },
        {
          title: "Vérifier comment il demande avant d’agir",
          text: "Un employé qui envoie des e-mails, publie ou dépense de l’argent doit demander d’abord. Cherchez des validations, des règles d’escalade et un journal de ce qu’il a fait.",
        },
        {
          title: "Tester un rôle pendant deux semaines",
          text: "Utilisez l’offre gratuite ou l’essai s’il y en a un, mesurez le chiffre que vous avez noté, et seulement ensuite ajoutez d’autres rôles.",
        },
      ],
    },
    {
      kind: "text",
      title: "Les plateformes en détail",
      points: [
        "Lindy : présenté comme « le coéquipier qui vaut bien plus que son prix » (« the teammate that punches above its price »). Les Routines s’exécutent selon une planification, vous pouvez lui écrire dans Slack ou iMessage, et « Watch and Learn » enregistre une tâche que vous lui montrez une seule fois. Tarifs : [lindy.ai/pricing](https://www.lindy.ai/pricing).",
        "Sintra : plus de 12 assistants nommés, comme Cassie pour le support, Seomi pour le SEO et Soshie pour les réseaux sociaux, chacun fonctionnant comme un chatbot avec lequel vous discutez. Un seul assistant coûte $39/mois. Tarifs : [sintra.ai/pricing](https://sintra.ai/pricing).",
        "Marblism : sept employés IA (Eva, Sonny, Stan, Walter, Penny, Rachel et Linda) qui, une fois l’objectif fixé, « y travaillent chaque jour, en autonomie » (« work toward it every day, on their own ») ; les offres incluent 50 heures de travail IA par mois. Tarifs : [marblism.com/pricing](https://www.marblism.com/pricing).",
        "Artisan : « des employés IA pour les équipes commerciales et marketing » (« AI employees for go-to-market teams »). Ava trouve des leads, enrichit leurs données, rédige les messages de prospection, gère les réponses et prend les rendez-vous, avec validation humaine. Voir [artisan.co](https://www.artisan.co).",
        "Ema : un « employé IA universel » (« Universal AI Employee ») que vous configurez en décrivant son objectif en langage courant, pour les RH, l’IT, la finance et plus encore. Voir [ema.ai](https://www.ema.ai).",
        "Devin : « l’ingénieur logiciel autonome de votre équipe » (« your team's autonomous software engineer »). Assignez-lui un ticket, vous recevez une pull request ; Max coûte $200/mois et Teams $80/mois plus $40 par siège. Tarifs : [devin.ai/pricing](https://devin.ai/pricing).",
        "ai-employees : un projet GitHub sous licence MIT où « un employé IA est un dossier de routines planifiées qui couvre un rôle métier » (« an AI Employee is a folder of scheduled routines that covers one business role »), exécuté par l’agent de codage que vous avez déjà. Voir [github.com/markfulton/ai-employees](https://github.com/markfulton/ai-employees).",
        "Crewmark : transforme une session Claude Code, Codex, DeepSeek Harness ou OpenCode en employé doté d’un rôle, d’un objectif, d’horaires de travail et d’un tableau de tickets ; il commente ses tickets et vous écrit quand il a besoin d’une décision. Voir [comment rendre Claude Code proactif](/proactive-claude-code).",
      ],
    },
    {
      kind: "text",
      title: "Employés IA gratuits, et open source sur GitHub",
      text: [
        "Les offres gratuites existent mais restent modestes : Lindy donne $50 de crédits pendant sept jours, Devin un petit quota et Ema un essai. La voie open source est gratuite en argent et se paie en temps de mise en place : des projets GitHub comme markfulton/ai-employees tournent sur un abonnement d’agent que vous avez déjà, et avec un forfait Claude Pro ou Max ils consomment les limites de votre forfait plutôt que des dollars supplémentaires.",
        "Si vous comparez des frameworks d’agents open source plutôt que des employés prêts à l’emploi, consultez nos comparatifs avec [CrewAI](/alternatives/crewai), [Paperclip](/alternatives/paperclip) et [Multica](/alternatives/multica).",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Avec Crewmark",
      title: "Des employés IA sur l’agent de codage que vous payez déjà",
      text: [
        "Crewmark s’adresse aux équipes dont le travail passe déjà par Claude Code ou Codex. Au lieu d’acheter une nouvelle IA et ses crédits, vous confiez un poste à votre agent actuel.",
      ],
      steps: [
        {
          title: "Choisir un rôle et un objectif",
          text: "Ingénieur logiciel, spécialiste SEO, growth marketer ou un rôle que vous rédigez vous-même, avec un objectif chiffré.",
        },
        {
          title: "Connecter une session",
          text: "Lancez une commande d’installation dans votre projet ; l’employé travaille dans une session Claude Code, Codex, DeepSeek Harness ou OpenCode sur votre machine, avec votre abonnement.",
        },
        {
          title: "Assigner des tickets ; la pulsation fait le reste",
          text: "Pendant ses horaires de travail, l’employé se réveille toutes les 15, 30 ou 60 minutes, prend le ticket suivant, commente au fil de son travail et vous écrit quand il a besoin d’une décision.",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Choisir une plateforme d’employés IA" },
  mid: {
    title: "Vous payez déjà Claude Code ou Codex ?",
    text: "Crewmark en fait des employés IA dotés de rôles, d’objectifs, d’horaires de travail et d’un tableau de tickets, sans seconde facture d’IA.",
    button: "Commencer",
  },
  faq: {
    title: "FAQ sur les plateformes d’employés IA",
    items: [
      {
        q: "Quelle est la meilleure plateforme d’employés IA ?",
        a: "Tout dépend du poste. Pour le travail de bureau sur de nombreuses fonctions, Lindy ; pour le marketing et le support des petites entreprises, Sintra ou Marblism ; pour la prospection commerciale, Artisan ; pour les RH et l’IT en grande entreprise, Ema ; pour le code, Devin ; et si vous utilisez déjà Claude Code ou Codex, le projet open source ai-employees ou Crewmark.",
      },
      {
        q: "Existe-t-il des employés IA gratuits ?",
        a: "Certaines plateformes proposent de petites offres gratuites ou des essais : Lindy ($50 de crédits pendant 7 jours), Devin (un petit quota) et Ema (un essai). Les projets open source comme markfulton/ai-employees sont gratuits et tournent sur un abonnement d’agent que vous avez déjà.",
      },
      {
        q: "Combien coûte un employé IA ?",
        a: "Le 6 novembre 2026, les offres d’entrée allaient d’environ $20 par mois (Devin Pro) à $49.99 par utilisateur (Lindy Team), avec des prix sur devis pour Artisan et Ema. Les outils qui tournent sur votre propre abonnement Claude Code ou Codex n’ajoutent que peu ou pas de coût de modèle.",
      },
      {
        q: "Quelle différence entre un employé IA et un agent IA ?",
        a: "Un agent IA exécute une tâche quand on la lui demande. Un employé IA est un agent doté d’un rôle, d’un objectif et d’un planning : il se met au travail de lui-même et continue. Plus de détails dans [qu’est-ce qu’un employé IA](/ai-employees).",
      },
      {
        q: "Une petite entreprise peut-elle utiliser des employés IA ?",
        a: "Oui. Sintra et Marblism sont conçus pour les petites entreprises, avec des employés nommés pour le support, les réseaux sociaux, le SEO et la vente, à des prix d’environ $24 à $49 par mois.",
      },
      {
        q: "Existe-t-il des employés IA open source sur GitHub ?",
        a: "Oui. markfulton/ai-employees (MIT) regroupe 8 rôles métier sous forme de routines planifiées pour Claude Code, Codex, OpenCode et d’autres agents ; on trouve aussi OpenCompany et eggent.",
      },
      {
        q: "Comment recruter un employé IA ?",
        a: "Choisissez un rôle et un chiffre qu’il doit faire bouger, prenez une plateforme qui démarre le travail d’elle-même et demande avant toute action risquée, faites-la tourner deux semaines, et ne la gardez que si le chiffre bouge.",
      },
    ],
  },
  cta: {
    title: "Confiez un poste à l’agent que vous payez déjà.",
    text: "Crewmark transforme des sessions Claude Code, Codex et DeepSeek Harness en employés IA dotés de rôles, d’objectifs, d’horaires de travail et d’une pulsation.",
    button: "Commencer",
  },
  checked: "Vérifié sur le site et la page tarifs de chaque éditeur le 6 novembre 2026. Les prix changent ; suivez les liens pour les tarifs actuels.",
  disclaimer:
    "Crewmark fait partie des produits comparés. Les noms de produits sont des marques de leurs propriétaires ; aucun éditeur n’a relu ni approuvé cette page.",
};
