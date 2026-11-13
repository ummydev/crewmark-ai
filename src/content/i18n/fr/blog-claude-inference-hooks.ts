import type { GuideCopy } from "@/components/landing/guide-article";

// French translation of /blog/claude-inference-hooks; the English master is src/content/blog/claude-inference-hooks.ts.

const docs = "https://platform.claude.com/docs/en/manage-claude/inference-hooks";

const verdict = `// Autoriser la requête
{ "action": "allow" }

// La refuser : deny_reason est affiché à l’utilisateur (500 caractères max.),
// reference_id va uniquement dans votre flux d’activité de conformité
{
  "action": "deny",
  "deny_reason": "Ce prompt semble contenir des données de carte bancaire de clients.",
  "reference_id": "scan_01HXPT4R9V"
}`;

export const copy: GuideCopy = {
  meta: {
    title: "Inference hooks de Claude : fonctionnement, configuration, Claude Code | Crewmark",
    description:
      "Les inference hooks de Claude, disponibles depuis le 5 novembre 2026, envoient chaque prompt et chaque appel d’outil à votre serveur de sécurité, qui autorise ou refuse. Fonctionnement, configuration, limites et différences avec les hooks de Claude Code.",
  },
  breadcrumb: "Inference hooks de Claude",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-06" },
  hero: {
    kicker: "Blog · Claude",
    title: "Inference hooks de Claude : un contrôle autoriser ou refuser avant chaque prompt",
    lead: "Les inference hooks (hooks d’inférence) permettent à une organisation Claude Enterprise d’envoyer chaque prompt, et en option chaque appel d’outil, à son propre serveur de sécurité et d’attendre un verdict d’autorisation ou de refus avant que Claude ne s’exécute. Ils sont disponibles pour tous depuis le 5 novembre 2026, avec un nouveau centre de sécurité en bêta. Comme le contrôle a lieu sur les serveurs d’Anthropic, une seule configuration couvre claude.ai, Claude Code, Cowork et les autres produits Claude, sans rien installer sur les ordinateurs portables. Ce guide explique leur fonctionnement, leur configuration, leurs limites et ce qui les distingue des hooks que vous écrivez dans Claude Code.",
    cta: "Accès anticipé",
    secondary: "Comment les configurer",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "Comment fonctionnent les inference hooks",
      text: [
        "Votre organisation (ou son fournisseur de sécurité) exploite un serveur de sécurité IA : un endpoint HTTPS. Quand quelqu’un envoie un prompt, Anthropic transmet la transcription de la conversation à cet endpoint, signée selon le schéma Standard Webhooks, et attend un verdict. Sur allow, l’inférence continue ; sur deny, la requête n’atteint jamais le modèle et l’utilisateur voit votre motif ainsi qu’un message permanent de vos administrateurs.",
      ],
      points: [
        "Deux événements : `prompt`, avant chaque requête d’inférence encadrée, et `tool_call`, avant l’exécution des appels d’outils de la réponse de Claude, lorsque Validate tool calls (valider les appels d’outils) est activé.",
        "Une seule configuration pour toute l’organisation : claude.ai, Claude Desktop et mobile, Claude Code (CLI comprise), Cowork, Claude for Microsoft 365, Claude Tag et Claude in Chrome.",
        "Ce que voit votre serveur : le texte de la transcription, les appels d’outils et leurs résultats, et le texte extrait des pièces jointes. Jamais les octets bruts des fichiers ou des images, ni les prompts système ni les définitions d’outils.",
        "Les verdicts sont uniquement allow ou deny. Réécrire ou caviarder un prompt n’est pas pris en charge.",
        "Chaque refus est consigné dans l’Activity Feed de votre organisation.",
      ],
    },
    {
      kind: "table",
      title: "Inference hooks vs hooks de Claude Code vs Compliance API",
      text: [
        "Les noms se ressemblent, mais il s’agit de trois outils différents. Les hooks de Claude Code se configurent par projet ou par utilisateur et s’exécutent sur la machine du développeur ; les inference hooks sont définis une fois par l’organisation et s’exécutent côté Anthropic.",
      ],
      headers: ["", "Inference hooks", "Hooks de Claude Code", "Compliance API"],
      rows: [
        ["Qui les configure", "L’Owner ou le Primary owner de l’organisation", "Chaque développeur ou projet, dans `settings.json`", "L’équipe sécurité ou conformité"],
        ["Où ils s’exécutent", "Les serveurs d’Anthropic appellent votre endpoint HTTPS", "Commandes shell sur la machine du développeur", "Vous appelez l’API d’Anthropic"],
        ["Quand", "Avant l’inférence, et avant l’exécution des appels d’outils", "Sur des événements comme PreToolUse, PostToolUse et Stop", "Après coup"],
        ["Périmètre", "Tous les produits Claude de l’organisation Enterprise", "Les sessions Claude Code avec cette configuration", "Activité, conversations, fichiers, transcriptions"],
        ["Peuvent bloquer", "Oui : allow ou deny", "Oui, pour les événements qui le permettent", "Non : audit et export"],
        ["Offre", "Claude Enterprise", "Tout utilisateur de Claude Code", "Claude Enterprise"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Comment configurer les inference hooks",
      text: [
        "Il vous faut le rôle Owner ou Primary owner (Admin ne suffit pas) et un endpoint HTTPS public sur le port 443. Les tunnels comme ngrok sont bloqués : hébergez donc le serveur de test sur un domaine que vous contrôlez.",
      ],
      steps: [
        {
          title: "Autorisez la fonctionnalité",
          text: "Dans claude.ai, ouvrez Organization settings → Data and privacy (paramètres de l’organisation → données et confidentialité) et activez Allow for your organization sous Inference hooks. Cela ne démarre pas l’inspection : Enforce verdicts (appliquer les verdicts) reste désactivé.",
        },
        {
          title: "Ajoutez votre endpoint et conservez le secret de signature",
          text: "Cliquez sur Configure, saisissez votre URL `https://` et enregistrez. Le premier enregistrement affiche une seule fois un secret de signature du webhook : conservez-le, car votre serveur s’en sert pour vérifier chaque requête.",
        },
        {
          title: "Ajoutez des en-têtes et testez",
          text: "Ajoutez jusqu’à 16 en-têtes statiques pour que votre serveur puisse authentifier Anthropic, puis cliquez sur Test connection. Un prompt synthétique est envoyé, et le verdict ainsi que le temps aller-retour s’affichent.",
        },
        {
          title: "Renvoyez un verdict en JSON avec HTTP 200",
          text: "Répondez à chaque requête avec HTTP 200 et un `action`. Un statut autre que 200 est un échec, pas un refus.",
          code: verdict,
        },
        {
          title: "Choisissez la gestion des échecs et un délai",
          text: "Block the request échoue en mode fermé, Allow the request en mode ouvert. Le délai du verdict va de 1 à 10 000 ms, 5 000 par défaut ; un verdict trop lent compte comme un serveur injoignable. Des échecs répétés déclenchent un disjoncteur (circuit breaker) qui applique votre réglage d’échec jusqu’au rétablissement du serveur.",
        },
        {
          title: "Déployez progressivement, puis appliquez",
          text: "Commencez en Shadow mode, qui envoie les verdicts sans rien bloquer, inspectez un pourcentage des requêtes, excluez des rôles personnalisés si besoin, puis activez Enforce verdicts. Les changements atteignent tous les serveurs en une minute environ.",
        },
      ],
      source: { label: "Source : documentation de Claude Platform, Inference hooks", href: docs },
    },
    {
      kind: "text",
      title: "Limites et pièges",
      points: [
        "Enterprise uniquement : pas sur Team, Pro ou Max, pas pour les organisations Claude Platform (API), ni sur Amazon Bedrock ou Google Cloud.",
        "Le contenu uniquement en image, comme une capture d’écran d’un document, n’est pas inspecté, car les octets bruts ne sont jamais envoyés.",
        "Un message refusé reste dans la transcription et est renvoyé avec chaque message suivant. Dans Claude Code, lancez `/rewind` jusqu’au prompt qui l’a introduit, ou `/clear` pour repartir de zéro.",
        "Certains appels de modèle en arrière-plan d’Anthropic elle-même ne sont pas encadrés, comme les analyses hébergées de Claude Security, Code Review sur les pull requests GitHub et les rapports intelligents. Lancer `/code-review` en local dans Claude Code est encadré.",
        "En mode vocal, une petite part des appels d’outils n’est pas envoyée : ne comptez donc pas sur les hooks comme seul contrôle dans ce cas.",
        "La même annonce a ajouté un centre de sécurité (bêta) qui compare vos paramètres Claude, Cowork et Claude Code à la configuration recommandée par Anthropic, ainsi qu’une gestion centralisée et des contrôles d’accès en bêta.",
      ],
    },
    {
      kind: "text",
      title: "Pourquoi c’est important pour les agents qui travaillent seuls",
      text: [
        "Quand Claude Code travaille sans surveillance, selon un planning ou en arrière-plan, personne ne lit chaque prompt avant son envoi. Les inference hooks donnent à une entreprise un contrôle en ligne sur chaque requête et chaque appel d’outil, où que tourne l’agent, et le shadow mode permet aux équipes sécurité d’affiner la politique avant de bloquer quoi que ce soit. Pour des garde-fous par projet sur une seule machine, les hooks et les règles de permissions de Claude Code restent valables ; voir [le plan mode de Claude Code](/blog/claude-code-plan-mode) pour les modes de permissions.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Avec Crewmark",
      title: "Des garde-fous pour les employés IA qui travaillent en votre absence",
      text: [
        "Crewmark transforme une session Claude Code, Codex, DeepSeek Harness ou OpenCode en employé IA avec un rôle, un objectif et des horaires de travail, et la réveille à intervalle régulier (heartbeat) pour qu’elle prenne la prochaine issue d’un tableau. Avec une offre Claude Enterprise, les inference hooks vérifient ses prompts comme ceux de n’importe qui.",
      ],
      steps: [
        {
          title: "Décidez de ce qui exige votre accord",
          text: "Chaque employé demande avant les actions risquées, comme publier, fusionner ou dépenser de l’argent, et vous validez depuis une seule boîte de réception.",
        },
        {
          title: "Gardez la trace sur le tableau",
          text: "Chaque issue conserve les commentaires et changements de statut de l’employé : vous pouvez ainsi revoir ce qu’il a fait à côté des journaux de votre équipe sécurité.",
        },
        {
          title: "Laissez la pulsation lancer le travail",
          text: "Pendant ses horaires de travail, l’employé se réveille toutes les 15, 30 ou 60 minutes dans la même conversation ; voir [comment rendre Claude Code proactif](/proactive-claude-code) et [ce qu’est un employé IA](/ai-employees).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Configurer les inference hooks de Claude" },
  mid: {
    title: "La sécurité est en place. Donnez maintenant un travail à Claude Code.",
    text: "Crewmark réveille Claude Code avec une pulsation, un rôle, un objectif et un tableau d’issues, avec l’abonnement que vous payez déjà.",
    button: "Accès anticipé",
  },
  faq: {
    title: "FAQ inference hooks de Claude",
    items: [
      {
        q: "Que sont les inference hooks de Claude ?",
        a: "Une fonctionnalité de Claude Enterprise qui envoie chaque prompt, et en option chaque appel d’outil, au serveur de sécurité de votre organisation, qui répond allow ou deny avant que Claude ne s’exécute. Ils sont disponibles pour tous depuis le 5 novembre 2026.",
      },
      {
        q: "Les inference hooks fonctionnent-ils avec Claude Code ?",
        a: "Oui. Une seule configuration couvre tous les produits Claude de l’organisation Enterprise, y compris Claude Code en CLI et dans l’application de bureau, sans rien installer sur les machines des développeurs.",
      },
      {
        q: "En quoi les inference hooks diffèrent-ils des hooks de Claude Code ?",
        a: "Les hooks de Claude Code sont des commandes shell que chaque développeur ou projet configure dans `settings.json` et qui s’exécutent en local sur des événements comme PreToolUse. Les inference hooks sont définis une fois par l’organisation et s’exécutent sur les serveurs d’Anthropic avant l’inférence, pour tous les produits Claude.",
      },
      {
        q: "Quelles offres incluent les inference hooks ?",
        a: "Claude Enterprise uniquement, configurés par l’Owner ou le Primary owner. Ils ne sont pas disponibles pour les organisations API de Claude Platform, ni sur Amazon Bedrock ou Google Cloud.",
      },
      {
        q: "Un inference hook peut-il caviarder des données sensibles ?",
        a: "Non. Les verdicts sont uniquement allow ou deny ; réécrire ou caviarder un prompt n’est pas pris en charge.",
      },
      {
        q: "Que se passe-t-il si mon serveur de sécurité est en panne ?",
        a: "C’est votre réglage de gestion des échecs qui décide : bloquer la requête (échec fermé) ou la laisser passer sans inspection (échec ouvert). Un disjoncteur cesse d’appeler un serveur défaillant et se réinitialise quand celui-ci se rétablit.",
      },
      {
        q: "Qu’est-ce que le centre de sécurité de Claude ?",
        a: "Une page en bêta dans Organization settings, annoncée avec les inference hooks, qui compare vos paramètres Claude, Cowork et Claude Code à la configuration recommandée par Anthropic et produit un rapport pour les auditeurs.",
      },
    ],
  },
  cta: {
    title: "Des employés IA sur Claude Code, dans le respect de vos garde-fous.",
    text: "Crewmark transforme les sessions Claude Code, Codex et DeepSeek Harness en employés IA avec des rôles, des objectifs, des horaires de travail et une pulsation.",
    button: "Accès anticipé",
  },
  checked: "Vérifié dans l’annonce d’Anthropic, le centre d’aide de Claude et la documentation de Claude Platform le 6 novembre 2026.",
  disclaimer:
    "Crewmark est un produit indépendant, sans lien avec Anthropic et non approuvé par elle. Claude et Claude Code sont des marques d’Anthropic.",
};
