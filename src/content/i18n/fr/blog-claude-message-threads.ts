import type { GuideCopy } from "@/components/landing/guide-article";

// French translation of /blog/claude-message-threads; the English master is src/content/blog/claude-message-threads.ts.

const docs = "https://platform.claude.com/docs/en/build-with-claude/message-threads";

const sdk = `import anthropic

client = anthropic.Anthropic()

# Crée l'assistant. Cet appel n'envoie aucune requête.
thread = client.beta.messages.thread(
    model="claude-opus-5-5",
    max_tokens=1024,
    cache_control={"type": "ephemeral"},
    system="You are a coding agent. Keep replies short.",
)

# Le tour 1 crée le thread et envoie toute la conversation
thread.send({"role": "user", "content": "Read the failing test and explain it."})

# Le tour 2 n'envoie que le nouveau message
reply = thread.send({"role": "user", "content": "Now fix it."})`;

const raw = `# Tour 1 : la conversation complète, plus
"thread": {"type": "create"}

# Chaque tour suivant : uniquement les nouveaux messages, sans system ni tools, plus
"thread": {"type": "continue", "previous_message_id": "<id of the last response>"}

# Sur chaque requête du thread
anthropic-beta: message-threads-2026-08-12`;

export const copy: GuideCopy = {
  meta: {
    title: "Claude Message Threads : des sessions d’agent longues et plus rapides | Crewmark",
    description:
      "Les message threads d’Anthropic envoient une conversation Claude une fois, puis seulement le nouveau. Ce qui change pour Claude Code, l’API bêta, l’expiration à 5 minutes et les limites.",
  },
  breadcrumb: "Claude message threads",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-04" },
  hero: {
    kicker: "Blog · Claude",
    title: "Claude message threads : ce que c’est et comment les utiliser",
    lead: "Les message threads sont une fonctionnalité de l’API Claude en bêta publique depuis le 2 novembre 2026. Au lieu de renvoyer toute la conversation à chaque tour, un agent l’envoie une fois, puis uniquement les nouveaux messages. Anthropic indique les avoir activés pour la plupart des utilisateurs de Claude Code, et que le temps médian avant le premier token baisse d’environ 35 % sur les requêtes de 500 000 à 1 million de tokens. Ce guide explique ce qui change, ce qui ne change pas, comment les utiliser dans votre propre agent, et les limites.",
    cta: "Accès anticipé",
    secondary: "Aller à la configuration",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "Ce que sont les message threads",
      text: [
        "Sans thread, chaque tour d’une boucle d’agent renvoie toute la conversation, et l’API la valide et la tokenise en entier à chaque fois. Un agent de codage fait des centaines de requêtes par session : une fois la conversation à plusieurs centaines de milliers de tokens, ce renvoi retarde le début de la réponse de Claude. Avec un thread, l’API garde la conversation entre les tours et l’essentiel de ce travail ne porte plus que sur le nouveau tour.",
      ],
      points: [
        "Premier token plus rapide : Anthropic a mesuré une baisse médiane d’environ 35 % sur les requêtes Claude Code de 500 000 à 1 million de tokens. Plus la conversation est longue, plus le gain est net.",
        "Requêtes plus légères : chaque tour ne transporte que les nouveaux messages, résultats d’outils ou captures d’écran.",
        "Mêmes tokens, même prix : Claude relit toute la conversation à chaque tour, et la tarification comme les limites de débit ne changent pas.",
        "De courte durée : un thread expire 5 minutes après sa dernière requête et reste en mémoire, chiffré, sans jamais être écrit sur disque.",
        "Où : l’API Claude, Claude Platform on AWS, Claude Models on Google Cloud (géré par Anthropic) et Microsoft Foundry, sur tous les modèles.",
      ],
    },
    {
      kind: "table",
      title: "Avec et sans thread",
      headers: ["", "Sans thread", "Avec un thread"],
      rows: [
        ["Chaque requête envoie", "La conversation complète, `system` et `tools`", "Uniquement les nouveaux messages et l’`id` de la réponse précédente"],
        ["Temps avant le premier token", "Augmente avec la conversation", "Plus bas et plus stable dans les longues conversations"],
        ["Tokens facturés", "Toute la conversation à chaque tour", "Pareil"],
        ["Prix et limites de débit", "Standard", "Inchangés"],
        ["Qui garde la conversation", "Votre application", "Votre application, plus l’API pendant 5 minutes après chaque requête"],
        ["Zero data retention", "Éligible", "Non éligible"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Comment utiliser les message threads dans votre propre agent",
      text: [
        "Claude Code le fait déjà pour vous. Pour utiliser les threads dans un agent construit sur l’API Messages, l’assistant thread du SDK est le chemin le plus court.",
      ],
      steps: [
        {
          title: "Créez un assistant thread",
          text: "Passez les mêmes champs qu’une requête Messages. L’assistant ajoute l’en-tête bêta `message-threads-2026-08-12`, crée le thread au premier tour, n’envoie ensuite que les nouveaux messages et garde la conversation complète en mémoire.",
          code: sdk,
        },
        {
          title: "Ou envoyez vous-même le champ thread",
          text: "Avec cURL ou un simple appel `create`, ajoutez `thread` à chaque requête et envoyez l’en-tête bêta à chaque fois. Continuez toujours depuis l’`id` de la dernière réponse ; chaque `id` ne peut être poursuivi qu’une fois.",
          code: raw,
        },
        {
          title: "Gardez le modèle et les réglages fixes",
          text: "`system` et `tools` ne figurent que dans la première requête. `model`, `thinking`, `tool_choice`, le `cache_control` de premier niveau et les en-têtes bêta doivent rester identiques à chaque tour ; un changement renvoie une erreur 400 avec `thread_fingerprint_mismatch`. Pour les modifier, démarrez un nouveau thread.",
        },
        {
          title: "Gardez votre propre copie et rejouez sur 404",
          text: "Les threads sont fournis au mieux. Quand une requête continue renvoie 404 avec `thread_not_found` (le thread a expiré, le dernier tour n’a pas été stocké, ou un modèle de repli l’a écrit), renvoyez la conversation complète dans une nouvelle requête create. L’assistant du SDK le fait une fois tout seul.",
        },
        {
          title: "Activez le prompt caching",
          text: "Un thread ne met pas votre prompt en cache à votre place. Envoyez un `cache_control` de premier niveau à chaque requête pour que chaque tour relise la conversation précédente depuis le cache ; une requête avec `thread` peut contenir au plus 4 points d’arrêt.",
        },
      ],
      source: { label: "Source : la documentation d’Anthropic sur les message threads", href: docs },
    },
    {
      kind: "text",
      title: "Limites et ce que les threads ne gèrent pas",
      points: [
        "Pas avec Message Batches, le comptage de tokens, la compaction à la demande ni l’édition du contexte (hormis `clear_thinking_20251015` avec `keep: \"all\"`).",
        "Pas pour les organisations avec HIPAA readiness ni avec des Inference hooks ; ces requêtes renvoient une erreur 400 avec `thread_unsupported_request`.",
        "Non éligible à la zero data retention : l’API garde un thread en mémoire et le supprime au plus 1 heure après sa dernière utilisation.",
        "Il n’existe pas d’API pour lister, lire ou supprimer un thread, et un thread est en ajout seul. Pour compacter, démarrez un nouveau thread à partir de votre propre résumé.",
        "Après un refus, ne poursuivez pas le thread : démarrez-en un nouveau sans le tour qui l’a provoqué.",
        "Utilisez la même clé d’API et le même workspace pour toutes les requêtes d’un thread, sinon il ne peut pas être poursuivi.",
      ],
    },
    {
      kind: "text",
      title: "Ce que cela change pour les utilisateurs de Claude Code",
      text: [
        "Vous n’avez rien à changer : Anthropic indique que les threads sont activés par défaut pour la plupart des utilisateurs de Claude Code. Le gain se voit dans les longues sessions, où un tour au fond d’une grosse conversation commence à répondre plus tôt. Votre consommation ne baisse pas, puisque Claude relit toute la conversation à chaque tour.",
        "D’après la documentation de l’API, un thread expire 5 minutes après sa dernière requête. Quand vous reprenez une session après une pause plus longue, la première requête renvoie la conversation complète, et les tours suivants sont rapides. C’est aussi ce qui arrive à une [session Claude Code proactive](/proactive-claude-code) qui se réveille selon un calendrier.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Avec Crewmark",
      title: "Faites travailler seules les longues sessions Claude Code",
      text: [
        "Les message threads rendent les longues sessions plus rapides ; Crewmark les rend proactives. Il donne à une session Claude Code, Codex, DeepSeek Harness ou OpenCode un rôle, un objectif et des horaires de travail, et la réveille avec une pulsation (heartbeat) dans la même conversation, pour qu’elle garde son contexte et prenne la prochaine issue sur un tableau.",
      ],
      steps: [
        {
          title: "Transformez une session en employé",
          text: "Choisissez un rôle, par exemple ingénieur logiciel ou spécialiste SEO, écrivez son objectif sous forme de chiffre et lancez la commande d’installation dans Claude Code.",
        },
        {
          title: "Laissez la pulsation lancer le travail",
          text: "Pendant ses horaires de travail, l’employé se réveille toutes les 15, 30 ou 60 minutes dans la même conversation ; voir [comment rendre Claude Code proactif](/proactive-claude-code). Plusieurs peuvent tourner côte à côte, comme avec [plusieurs agents Claude Code](/blog/multiple-claude-code-agents).",
        },
        {
          title: "Assignez des issues et répondez à ses messages",
          text: "Mettez le travail sur le tableau ; l’employé le prend, commente au fil de l’eau et vous écrit quand il a besoin d’une décision. Lisez [ce qu’est un employé IA](/ai-employees).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Utiliser les message threads de Claude dans votre propre agent" },
  mid: {
    title: "Vous lancez de longues sessions Claude Code ?",
    text: "Crewmark les réveille avec une pulsation, un rôle, un objectif et un tableau d’issues, avec l’abonnement que vous payez déjà.",
    button: "Accès anticipé",
  },
  faq: {
    title: "FAQ Claude message threads",
    items: [
      {
        q: "Que sont les Claude message threads ?",
        a: "Une fonctionnalité de l’API Claude, en bêta publique depuis le 2 novembre 2026, qui conserve une conversation côté Anthropic entre les tours. La première requête envoie la conversation complète et crée un thread ; chaque requête suivante n’envoie que les nouveaux messages et l’`id` de la réponse précédente.",
      },
      {
        q: "Les message threads accélèrent-ils Claude Code ?",
        a: "Dans les longues sessions, oui. Anthropic indique que les threads sont activés par défaut pour la plupart des utilisateurs de Claude Code et que le temps médian avant le premier token baisse d’environ 35 % sur les requêtes de 500 000 à 1 million de tokens. Les conversations courtes y gagnent peu.",
      },
      {
        q: "Les message threads économisent-ils des tokens ou de l’argent ?",
        a: "Non. Claude relit toute la conversation à chaque tour, donc la consommation de tokens, la tarification et les limites de débit restent les mêmes. Le gain, ce sont des requêtes plus légères et un premier token plus rapide. Pour réduire le coût, utilisez le prompt caching.",
      },
      {
        q: "Combien de temps dure un thread ?",
        a: "Il expire 5 minutes après sa dernière requête, et chaque réponse stockée relance ces 5 minutes. L’API le supprime au plus 1 heure après sa dernière utilisation. Ensuite, renvoyez la conversation complète pour démarrer un nouveau thread.",
      },
      {
        q: "Quel est l’en-tête bêta des message threads ?",
        a: "`anthropic-beta: message-threads-2026-08-12`, envoyé sur chaque requête du thread. L’assistant thread du SDK l’ajoute pour vous.",
      },
      {
        q: "Les message threads sont-ils éligibles à la zero data retention ?",
        a: "Non. Le contenu d’un thread est gardé en mémoire, chiffré avec une clé gérée par le serveur, jamais écrit sur un stockage durable, et supprimé au plus 1 heure après sa dernière utilisation. Les organisations avec HIPAA readiness ne peuvent pas utiliser les threads.",
      },
      {
        q: "Les message threads sont-ils les mêmes que les session threads de Managed Agents ?",
        a: "Non. Les message threads sont une fonctionnalité de l’API Messages ; les session threads relèvent de Claude Managed Agents.",
      },
    ],
  },
  cta: {
    title: "Rendez vos longues sessions Claude Code proactives.",
    text: "Crewmark transforme des sessions Claude Code, Codex et DeepSeek Harness en employés IA dotés de rôles, d’objectifs, d’horaires de travail et d’une pulsation.",
    button: "Accès anticipé",
  },
  checked: "Vérifié dans l’annonce d’Anthropic et la documentation de Claude Platform le 4 novembre 2026.",
  disclaimer:
    "Crewmark est un produit indépendant, sans lien avec Anthropic et non approuvé par elle. Claude et Claude Code sont des marques d’Anthropic.",
};
