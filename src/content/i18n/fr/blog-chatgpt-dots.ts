import type { GuideCopy } from "@/components/landing/guide-article";

// French translation of /blog/chatgpt-dots; the English master is src/content/blog/chatgpt-dots.ts.

const announcement = "https://openai.com/index/introducing-dots/";

export const copy: GuideCopy = {
  meta: {
    title: "ChatGPT dots : comment les utiliser et prix | Crewmark",
    description:
      "Les dots de ChatGPT, agents toujours actifs d’OpenAI : ce qu’ils font, quels forfaits, comment les configurer, leurs règles, limites et alternatives.",
  },
  breadcrumb: "ChatGPT dots",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-02" },
  hero: {
    kicker: "Blog · ChatGPT",
    title: "ChatGPT dots : ce que c’est et comment les utiliser",
    lead: "Les dots sont des agents toujours actifs intégrés à ChatGPT, annoncés lors de l’OpenAI DevDay le 29 septembre 2026. Chaque dot a son propre ordinateur dans le cloud et son propre navigateur, se connecte à vos applications, apprend de vos retours et continue à travailler sur vos objectifs pendant votre absence. Ce guide explique qui peut en avoir un, combien ça coûte, comment le configurer, les règles qui l’encadrent et ce qu’il ne fait pas encore.",
    cta: "Accès anticipé",
    secondary: "Aller à la configuration",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "Ce que sont les dots de ChatGPT",
      text: [
        "OpenAI présente les dots comme des « agents toujours actifs, remarquablement capables, conçus pour tout gérer ». Un dot tourne sur GPT-6 Astra et travaille sur son propre ordinateur dans le cloud, avec son propre navigateur, en utilisant les applications que vous connectez. Vous lui parlez dans ChatGPT sur ordinateur, sur le web ou sur mobile, dans Slack et Teams, à la voix dans l’application mobile et, dans une bêta réservée aux États-Unis pour Pro, par SMS.",
      ],
      points: [
        "Il travaille quand vous ne travaillez pas : avec un accès en lecture seule à vos applications connectées, il cherche comment vous aider, et il exécute des rappels programmés et des vérifications récurrentes.",
        "Il mène plusieurs projets à la fois et vous tient au courant de l’avancement, des questions et des décisions qui vous reviennent.",
        "Il se souvient : il part de vos mémoires ChatGPT et apprend vos préférences au fil de votre collaboration.",
        "Il code en déléguant : un dot peut lancer des tâches Codex, qui comptent dans vos limites Codex.",
        "Vous pouvez le regarder faire : ouvrez l’ordinateur du dot à tout moment, prenez la main, puis rendez-lui le contrôle.",
      ],
    },
    {
      kind: "table",
      title: "Qui peut utiliser les dots, et combien ils coûtent",
      text: [
        "Votre premier dot est inclus sans surcoût dans les forfaits ci-dessous. Pendant le premier mois après le lancement, l’utilisation des dots ne comptait pas dans les quotas du forfait ; OpenAI dit qu’elle publiera ensuite les conditions d’utilisation par forfait, ce qu’elle n’avait pas fait lors de notre vérification. L’achat de dots supplémentaires ou de plus de travail par dot est annoncé, sans prix pour l’instant.",
      ],
      headers: ["Forfait", "Dots", "Remarques"],
      rows: [
        ["Free, Go, Plus, Business", "Non", "Non inclus"],
        ["Pro (Pro 100, Pro 200, Pro 500)", "Oui, en déploiement", "Pas dans l’EEE, en Suisse ni au Royaume-Uni"],
        ["Business Premium", "Oui, en déploiement", "Régions prises en charge, selon l’éligibilité de l’espace de travail"],
        ["Enterprise, Edu, Healthcare", "Bêta", "Désactivé tant qu’un administrateur de l’espace de travail ne l’active pas"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Comment configurer votre premier dot",
      text: ["Vous devez avoir au moins 18 ans. Le déploiement est progressif : l’accès peut mettre quelques jours à arriver sur votre compte."],
      steps: [
        {
          title: "Ouvrez dots",
          text: "Allez sur chatgpt.com/dots, ou ouvrez dots dans l’application ChatGPT pour ordinateur, sur le web depuis un ordinateur, ou dans l’application mobile sur iOS ou Android.",
        },
        {
          title: "Créez et nommez votre dot",
          text: "Suivez la prise en main : donnez-lui un nom, qui devient son identifiant (@yourname-agentname), et choisissez un avatar. Vous pourrez modifier les deux plus tard depuis son profil.",
        },
        {
          title: "Connectez vos applications",
          text: "Dans le profil du dot, ouvrez Customize, puis Plugins, choisissez une application et vérifiez les autorisations qu’elle demande. Connectez Slack depuis un ordinateur. Un dot peut utiliser un compte e-mail personnel que vous connectez, mais ne peut pas encore avoir sa propre adresse e-mail.",
        },
        {
          title: "Définissez des règles personnalisées",
          text: "Dans Customize, Custom rules, choisissez pour chaque type d’action si le dot doit agir sans demander, agir seulement si c’est préapprouvé dans votre prompt, demander avant d’agir, ou vous passer la main.",
        },
        {
          title: "Donnez-lui un objectif",
          text: "Décrivez le résultat voulu et partagez le contexte ; joignez des fichiers avec + et répondez dans le fil pour l’orienter. Demandez des rappels ou des vérifications récurrentes, et gérez-les dans Scheduled.",
        },
        {
          title: "Suivez-le, mettez-le en pause ou supprimez-le",
          text: "Le profil affiche le travail In progress, Scheduled et Completed. Mettez le dot en pause depuis le menu ••• si besoin. Le supprimer efface ses mémoires et ses tâches programmées, et c’est irréversible.",
        },
      ],
      source: { label: "Source : annonce des dots par OpenAI", href: announcement },
    },
    {
      kind: "text",
      title: "Sécurité : ce qu’un dot fera ou non de lui-même",
      points: [
        "Changer un mot de passe ou envoyer de l’argent exige toujours que vous preniez la main et le fassiez vous-même.",
        "Supprimer définitivement des données ou installer un logiciel peut nécessiter votre accord à chaque fois.",
        "Auto-review vérifie les actions risquées, comme le destinataire d’un e-mail, par rapport à vos instructions et à vos règles, et vos règles personnalisées ne peuvent pas le désactiver.",
        "Un dot peut acheter avec une carte enregistrée sur le site d’un marchand, mais uniquement avec votre accord à chaque fois ou une autorisation précise donnée à l’avance.",
        "Votre propre ordinateur reste à l’écart, sauf si vous le connectez avec Allow access dans l’application ChatGPT pour ordinateur ; c’est désactivé par défaut.",
        "OpenAI indique que ses protections contre l’injection de prompt réduisent le risque sans l’éliminer, et que certaines actions terminées ne peuvent pas être annulées.",
      ],
    },
    {
      kind: "text",
      title: "Ce que les dots ne font pas encore",
      points: [
        "Vous avez un dot principal ; les équipes de dots sont présentées comme une piste pour l’avenir.",
        "Un dot n’a pas d’adresse e-mail à lui, ne peut pas vous appeler et ne fonctionne pas sur le web mobile.",
        "Il n’y a ni webhooks ni déclencheurs d’événements pour le lancer ; il travaille à partir de vos messages, de ses tâches programmées et de ses propres recherches en lecture seule.",
        "Vous ne pouvez pas consulter, modifier ni supprimer des mémoires une à une ; supprimer le dot est le seul moyen d’effacer ce qu’il a appris.",
        "Les utilisateurs Plus n’ont pas de dots, pas plus que les utilisateurs Pro dans l’EEE, en Suisse et au Royaume-Uni.",
      ],
    },
    {
      kind: "table",
      title: "ChatGPT dots vs Grok Bot vs Crewmark",
      text: [
        "xAI a annoncé Grok Bot en août 2026 comme « votre équipe d’agents toujours actifs », dotée de son propre ordinateur. Crewmark prend une autre voie : au lieu d’un nouvel agent dans le cloud de quelqu’un d’autre, il transforme l’agent de code que vous utilisez déjà en employé sur votre propre machine.",
      ],
      headers: ["", "ChatGPT dots", "Grok Bot", "Crewmark"],
      rows: [
        ["Où il tourne", "Ordinateur dans le cloud d’OpenAI", "Son propre ordinateur, selon xAI", "Votre ordinateur, dans Claude Code ou Codex"],
        ["Modèle", "GPT-6 Astra", "Grok", "Celui qu’utilise votre Claude Code ou Codex"],
        ["Combien", "Un dot principal", "Plusieurs, qui peuvent s’envoyer des messages", "Un employé par rôle, autant que vous en configurez"],
        ["Ce qui le fait démarrer", "Vos messages, ses tâches programmées, ses propres recherches", "Apprend des routines en vous regardant travailler", "Une pulsation (heartbeat) toutes les 15 à 60 minutes pendant les horaires de travail"],
        ["File de travail", "Fils de conversation et Scheduled", "Non documenté", "Des tickets sur un tableau Kanban"],
        ["Objectif", "Les objectifs que vous décrivez", "Non documenté", "Un KPI chiffré, comme +10 % de clics par mois"],
        ["Forfaits", "Pro, Business Premium, bêta Enterprise", "Forfaits SuperGrok et Cursor, bêta", "Accès anticipé ; tourne sur votre abonnement Claude ou ChatGPT existant"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Avec Crewmark",
      title: "Vous payez déjà Claude Code ou Codex ? Rendez-le toujours actif",
      text: [
        "Si votre travail en continu porte sur du code ou un site web, vous n’avez pas besoin d’un nouvel agent. Crewmark donne à la session Claude Code ou Codex que vous utilisez déjà un rôle, un objectif et des horaires de travail, et la réveille à chaque pulsation pour prendre le ticket suivant sur un tableau.",
      ],
      steps: [
        {
          title: "Transformez une session en employé",
          text: "Choisissez un rôle, comme spécialiste SEO ou ingénieur logiciel, formulez son objectif en chiffres et lancez la commande d’installation dans Claude Code ou Codex.",
        },
        {
          title: "Laissez la pulsation le faire travailler",
          text: "Pendant ses horaires de travail, l’employé se réveille toutes les 15, 30 ou 60 minutes dans la même conversation et se souvient donc de ce qu’il a fait ; voir [comment rendre Claude Code proactif](/proactive-claude-code).",
        },
        {
          title: "Assignez des tickets et répondez à ses messages",
          text: "Mettez le travail sur le tableau ; l’employé le prend, commente au fil de l’eau et vous écrit quand il est bloqué. Lisez [ce qu’est un employé IA](/ai-employees).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Configurer votre premier dot ChatGPT" },
  mid: {
    title: "Envie d’un agent toujours actif pour votre code ?",
    text: "Crewmark fait travailler votre session Claude Code ou Codex au rythme d’une pulsation, avec l’abonnement que vous payez déjà.",
    button: "Accès anticipé",
  },
  faq: {
    title: "FAQ : ChatGPT dots",
    items: [
      {
        q: "Que sont les dots de ChatGPT ?",
        a: "Des agents toujours actifs dans ChatGPT, annoncés le 29 septembre 2026. Chaque dot tourne sur GPT-6 Astra avec son propre ordinateur dans le cloud et son propre navigateur, se connecte à vos applications, apprend de vos retours et continue à travailler sur vos objectifs.",
      },
      {
        q: "Combien coûtent les dots de ChatGPT ?",
        a: "Votre premier dot est inclus sans surcoût dans Pro et Business Premium. OpenAI prévoit de vendre des dots supplémentaires et plus de travail par dot, mais n’a publié ni les prix, ni les conditions d’utilisation après le mois de lancement.",
      },
      {
        q: "Puis-je utiliser les dots avec ChatGPT Plus ?",
        a: "Non. Les dots ne sont pas inclus dans Free, Go, Plus ni dans le forfait Business standard. Ils sont en cours de déploiement pour Pro et Business Premium, et en bêta pour Enterprise, Edu et Healthcare.",
      },
      {
        q: "Comment utiliser un dot ChatGPT ?",
        a: "Ouvrez chatgpt.com/dots, créez et nommez votre dot, connectez des applications dans Customize, définissez des règles personnalisées sur ce qu’il peut faire sans demander, puis donnez-lui un objectif. Suivez son travail dans son profil, sous In progress, Scheduled et Completed.",
      },
      {
        q: "Quelle différence entre ChatGPT dots et Grok Bot ?",
        a: "Ce sont tous deux des agents toujours actifs dotés de leur propre ordinateur. Un dot tourne sur GPT-6 Astra et vous en avez un au lancement ; Grok Bot de xAI est une équipe d’agents qui peuvent s’envoyer des messages, en bêta pour SuperGrok et certains forfaits Cursor.",
      },
      {
        q: "Les dots de ChatGPT peuvent-ils écrire du code ?",
        a: "Oui, en déléguant à Codex : un dot peut lancer des tâches Codex dans le cloud, ou des tâches Codex locales si vous connectez votre ordinateur, et elles comptent dans vos limites Codex.",
      },
    ],
  },
  cta: {
    title: "Rendez toujours actif l’agent que vous utilisez déjà.",
    text: "Crewmark transforme des sessions Claude Code et Codex en employés IA dotés de rôles, d’objectifs, d’horaires de travail et d’une pulsation.",
    button: "Accès anticipé",
  },
  checked:
    "Vérifié dans l’annonce, le centre d’aide, les notes de version et la page de tarifs d’OpenAI le 2 novembre 2026.",
  disclaimer:
    "Crewmark est un produit indépendant, sans lien avec OpenAI, xAI ou Anthropic et non approuvé par eux. ChatGPT est une marque d’OpenAI, Grok de xAI et Claude Code d’Anthropic.",
};
