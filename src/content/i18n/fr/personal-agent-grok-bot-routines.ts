import type { GuideCopy } from "@/components/landing/guide-article";

// fr translation of /personal-agent/grok-bot-routines; the English master is
// src/content/personal-agents/grok-bot-routines.ts.

const docs = "https://docs.x.ai/grok-bot/skills-routines-and-automations";

const prompts = `# Demandez-le au Bot qui doit s’occuper de la tâche, dans sa conversation
Crée une routine pour trier mes e-mails Gmail de la nuit chaque jour de semaine à 7:00,
rédiger des réponses à tout ce qui est urgent et m’envoyer la liste. N’envoie rien.

Crée une routine chaque dimanche à 18:00 : passe en revue le Google Calendar de la semaine suivante,
signale les conflits et les journées surchargées, et envoie-moi un plan pour lundi.

Crée une routine toutes les 2 heures en semaine : consulte le canal Slack #launch
pour repérer les questions sur les tarifs et rédige des réponses à approuver.`;

const webhook = `# Copiez "POST to" et "key" depuis la section Webhook de la routine (desktop)
curl -X POST "https://<POST to URL from the routine>" \\
  -H "Authorization: Bearer <key>" \\
  -H "Content-Type: application/json" \\
  -d '{"order": "1042", "status": "refund requested"}'

# 200 = une exécution a démarré (le résultat arrive dans la conversation du Bot)
# toute autre réponse = aucune exécution n’a démarré`;

export const copy: GuideCopy = {
  meta: {
    title: "Routines Grok Bot : plannings, webhooks et dépannage",
    description:
      "Comment configurer les routines Grok Bot : plannings en langage courant, fuseaux horaires, exécutions de test, déclencheurs webhook et Slack, les limites (50 routines, 5 minutes, 300 exécutions par heure) et que vérifier quand une routine ne se lance pas.",
  },
  breadcrumb: "Routines Grok Bot",
  parent: { name: "Agents personnels", href: "/personal-agent" },
  hero: {
    kicker: "Agents personnels · Grok Bot",
    title: "Routines Grok Bot : planifier un Bot, le déclencher par webhook et le dépanner",
    lead: "Une routine indique à un Grok Bot quand exécuter une tâche : selon un planning, comme chaque jour de semaine à 8:00, ou quand quelque chose se produit, comme une mention Slack ou un appel webhook. Comme les Bots travaillent sur un ordinateur cloud, les routines tournent même ordinateur portable fermé. Ce guide explique comment créer une routine sur ordinateur et sur smartphone, les formulations de planning qui fonctionnent, les webhooks et les déclencheurs d’événements, les limites, des idées de routines tirées des exemples de xAI et que vérifier quand une routine ne se lance pas.",
    cta: "Commencer",
    secondary: "Créer une routine",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "Ce qu’est une routine Grok Bot",
      text: [
        "Selon xAI, une routine indique à un Bot quand exécuter un workflow : selon un planning, ou quand quelque chose se produit. Elle appartient à un seul Bot, utilise la mémoire et les skills de ce Bot, et publie ses résultats dans sa conversation.",
      ],
      points: [
        "Plannings : des expressions simples comme « every weekday at 8:00 AM » ou « every 2 hours », dans le fuseau horaire défini dans Settings.",
        "Événements : un déclencheur Slack ; un événement GitHub, Linear, Sentry ou PagerDuty ; un e-mail envoyé à l’adresse propre du Bot ; ou un appel webhook.",
        "Une nouvelle routine ne s’exécute pas à sa création. Elle attend sa prochaine heure planifiée ; utilisez Test pour la lancer tout de suite.",
        "Les routines tournent sur l’ordinateur cloud du Bot, donc elles continuent quand votre ordinateur portable est fermé.",
        "Chaque exécution, tests compris, consomme votre usage Grok Bot.",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Créer une routine dans Grok Bot",
      steps: [
        {
          title: "Demandez au Bot qui doit s’occuper de la tâche",
          text: "Sur ordinateur, ouvrez la conversation de ce Bot et décrivez la tâche et le moment où elle doit tourner. Précisez d’où viennent les données, quel résultat vous voulez, ce qui nécessite votre approbation et que faire si une source manque. Sur smartphone, ouvrez le profil du Bot, touchez Add routine sous Routines et complétez le message qui commence par « Set up a routine to ».",
          code: prompts,
        },
        {
          title: "Vérifiez « When to run » et le fuseau horaire",
          text: "Ouvrez la routine et lisez When to run pour confirmer le planning enregistré ; s’il est faux, choisissez Edit et décrivez la correction. Le fuseau horaire se trouve dans Settings, sous Bot, dans le champ Timezone. La détection automatique utilise le fuseau de votre ordinateur : choisissez-en un fixe si le travail concerne une autre zone.",
        },
        {
          title: "Testez-la une fois",
          text: "Sur ordinateur, ouvrez la routine et choisissez Test. Elle affiche Running… jusqu’à la fin de l’exécution, et le résultat apparaît dans la conversation du Bot. Les tests font un vrai travail, comme modifier des fichiers ou utiliser des sites : gardez donc tout ce qui écrit ou envoie derrière votre approbation. Si une routine n’a pas de bouton Test, demandez au Bot de faire la tâche une fois dans la conversation avec des données sans risque.",
        },
        {
          title: "Mettez en pause, reprenez ou supprimez",
          text: "Sur ordinateur, cliquez sur le nom du Bot, ouvrez Details et utilisez l’interrupteur sur la ligne de la routine, ou ouvrez la routine et choisissez Pause ou Resume. Sur smartphone, ouvrez la routine depuis le profil du Bot et désactivez Active ; balayez la ligne pour la supprimer. La suppression est irréversible.",
        },
      ],
      source: { label: "Source : documentation Grok Bot de xAI, Skills and routines", href: docs },
    },
    {
      kind: "steps",
      id: "webhook",
      title: "Déclencher une routine avec un webhook",
      text: [
        "Un webhook permet à un autre service de lancer une routine, par exemple votre boutique quand un remboursement est demandé, ou un formulaire quand quelqu’un s’inscrit.",
      ],
      steps: [
        {
          title: "Ajoutez le déclencheur",
          text: "Demandez au Bot d’ajouter un déclencheur webhook à la routine.",
        },
        {
          title: "Copiez l’URL et la clé",
          text: "Sur ordinateur, ouvrez la routine et trouvez sa section Webhook : POST to (l’URL), key (le secret) et header (l’en-tête Authorization complet). Cliquez sur un champ pour le copier.",
          code: webhook,
        },
        {
          title: "Envoyez un POST et lisez la réponse",
          text: "Envoyez un HTTP POST avec la clé sous la forme `Authorization: Bearer <key>`. Vous pouvez inclure un corps JSON ; le Bot le reçoit avec les instructions de la routine. Un 200 signifie qu’une exécution a démarré, pas qu’elle est terminée. Toute autre réponse signifie qu’aucune exécution n’a démarré : vérifiez que la routine n’est pas en pause et que vous utilisez la clé actuelle.",
        },
      ],
    },
    {
      kind: "text",
      id: "events",
      title: "Slack, GitHub et autres déclencheurs d’événements",
      points: [
        "Slack : se déclenche quand le Bot est mentionné, quand un mot ou une expression apparaît, quand quelqu’un réagit à un message, ou sur n’importe quel message, dans un canal ou dans tout Slack. Connectez d’abord Slack sur le compte Cursor propriétaire du Bot.",
        "GitHub, Linear, Sentry et PagerDuty : lancent une routine à partir d’un événement dans ces outils ; ces déclencheurs passent par les intégrations du compte Cursor et peuvent nécessiter leur propre connexion.",
        "E-mail : une routine peut démarrer à partir d’un e-mail envoyé à l’adresse propre du Bot.",
        "Seule une activité nouvelle lance une exécution. Gardez des déclencheurs ciblés : un canal animé surveillé à chaque message consomme l’usage très vite.",
      ],
    },
    {
      kind: "table",
      id: "limits",
      title: "Limites des routines Grok Bot",
      headers: ["Limite", "Valeur"],
      rows: [
        ["Routines par Bot", "Jusqu’à 50"],
        ["Planning le plus court", "5 minutes entre deux exécutions"],
        ["Exécutions par heure, toutes routines confondues", "Jusqu’à 300"],
        ["Exécutions par heure, pour une routine", "Jusqu’à 200"],
        ["Historique conservé", "Les 20 exécutions les plus récentes par routine"],
        ["Limite de débit dépassée", "L’exécution échoue avec « Automation run rate limit exceeded »"],
        ["Après une longue absence", "Grok Bot peut demander s’il faut maintenir les routines, et les met en pause si vous ne répondez pas"],
      ],
    },
    {
      kind: "text",
      id: "not-working",
      title: "Les routines Grok Bot ne fonctionnent pas ? Que vérifier",
      points: [
        "Elle ne s’est jamais exécutée : une nouvelle routine attend sa prochaine heure planifiée. Choisissez Test pour la lancer tout de suite.",
        "Elle est en pause : sur ordinateur, l’interrupteur de la ligne est désactivé ; sur smartphone, Active est désactivé. Grok Bot peut aussi mettre lui-même les routines en pause après une absence.",
        "Mauvaise heure : lisez When to run, puis vérifiez Timezone dans Settings > Bot. La détection automatique suit l’ordinateur sur lequel vous êtes.",
        "Un déclencheur Slack ne s’est pas activé : le message doit être nouveau, dans le canal surveillé, et contenir l’expression attendue.",
        "Le webhook n’a pas lancé d’exécution : toute réponse autre que 200 signifie que rien n’a démarré. Vérifiez que la routine n’est pas en pause et que la clé est à jour.",
        "Une exécution a échoué à cause d’une limite de débit : ciblez davantage le déclencheur ou espacez le planning, puis relancez avec Test ou en renvoyant le webhook. xAI signale aussi comme problème connu des échecs dus à une limite partagée de Grok Bot ; ceux-ci ne sont pas relancés automatiquement.",
        "L’usage est épuisé : chaque exécution consomme votre usage hebdomadaire. Mettez en pause les routines inutiles et espacez les plannings. Sur The X Subscription, l’usage supplémentaire vient du crédit prépayé ; sur les anciennes offres Cursor, de l’usage à la demande s’il est activé.",
        "« Sync failed » : la documentation des routines de xAI ne décrit pas cette erreur. Ouvrez la routine, vérifiez son planning et son déclencheur, et lancez Test ; si l’échec persiste, contactez le support Grok Bot depuis l’app.",
      ],
    },
    {
      kind: "table",
      id: "ideas",
      title: "Idées de routines tirées des exemples de xAI",
      text: ["Elles viennent des cas d’usage de la documentation de xAI ; chacune prépare le travail et attend votre approbation avant tout envoi."],
      headers: ["Routine", "Quand", "Ce qu’elle fait"],
      rows: [
        ["Point du matin", "Chaque matin", "Résume ce qui a changé pendant la nuit dans vos applications et rédige un post pour l’équipe"],
        ["Gestion de la boîte de réception", "Pendant la nuit", "Trie Gmail par urgence et rédige des réponses aux fils urgents sans les envoyer"],
        ["Semaine à venir", "Dimanche soir", "Passe en revue Google Calendar, signale les conflits et envoie un plan pour lundi"],
        ["Notes de réunion", "Chaque soir", "Extrait des notes Granola les actions à mener avec leurs responsables et rédige un post Slack"],
        ["Points d’avancement", "Le vendredi", "Rédige des points d’avancement Notion et les ajoute après votre approbation"],
        ["Équipe de campagne", "Le lundi, 9 h", "Récupère les données d’inscription, rédige le contenu de lancement et le vérifie au regard des chiffres"],
        ["Veille concurrentielle", "Chaque semaine", "Rend compte des lancements et changements de prix des concurrents, avec les liens"],
        ["Clôture mensuelle", "Le 1er du mois", "Rapproche les factures, réconcilie les dépenses et liste les exceptions à valider"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Avec Crewmark",
      title: "Des routines pour votre agent de code aussi",
      text: [
        "Les routines Grok Bot conviennent au travail qui se passe dans Gmail, Slack et Notion. Si le travail se trouve dans un dépôt de code, Crewmark donne le même rythme à votre propre Claude Code ou Codex : un employé IA doté d’un rôle, d’un objectif chiffré, d’horaires de travail et d’une pulsation qui le réveille pour prendre le ticket suivant sur un tableau.",
      ],
      steps: [
        {
          title: "Recrutez un employé sur votre agent",
          text: "Lancez la commande de configuration dans une conversation Claude Code ou Codex ; cette conversation devient l’employé. Voir [ce qu’est un employé IA](/ai-employees).",
        },
        {
          title: "Fixez des horaires et une pulsation",
          text: "Il se réveille toutes les 15 à 240 minutes pendant les horaires que vous choisissez, même la nuit. Voir [comment rendre Claude Code proactif](/proactive-claude-code) et les [tâches planifiées Codex](/proactive-codex).",
        },
        {
          title: "Comparez les agents personnels",
          text: "Voir le [guide Grok Bot](/personal-agent/grok-bot) et le [comparatif des agents IA personnels](/personal-agent).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Créer une routine Grok Bot" },
  mid: {
    title: "Vous voulez la même routine pour un agent de code ?",
    text: "Crewmark réveille votre Claude Code ou Codex au rythme d’une pulsation pendant les horaires de travail et lui confie le ticket suivant.",
    button: "Commencer",
  },
  faq: {
    title: "FAQ",
    items: [
      {
        q: "Comment planifier une routine dans Grok Bot ?",
        a: "Demandez au Bot qui doit s’occuper de la tâche, dans sa conversation, de créer une routine et dites quand, par exemple « every weekday at 8:00 AM ». Sur smartphone, ouvrez le profil du Bot et touchez Add routine. Ouvrez ensuite la routine et vérifiez When to run et votre fuseau horaire.",
      },
      {
        q: "Pourquoi ma routine Grok Bot ne s’exécute-t-elle pas ?",
        a: "En général, elle attend sa première heure planifiée, elle est en pause ou le fuseau horaire est faux. Lancez Test pour vérifier qu’elle fonctionne, assurez-vous qu’Active est activé et lisez When to run. Les appels webhook qui ne reçoivent pas de 200 ne lancent pas d’exécution.",
      },
      {
        q: "Comment déclencher une routine Grok Bot avec un webhook ?",
        a: "Demandez au Bot d’ajouter un déclencheur webhook, puis copiez l’URL et la clé depuis la section Webhook de la routine sur ordinateur et envoyez un HTTP POST avec `Authorization: Bearer <key>`. Un corps JSON est transmis au Bot.",
      },
      {
        q: "À quelle fréquence une routine Grok Bot peut-elle s’exécuter ?",
        a: "Au plus toutes les cinq minutes. Chaque routine peut s’exécuter jusqu’à 200 fois par heure et toutes les routines ensemble jusqu’à 300, et un Bot peut avoir jusqu’à 50 routines.",
      },
      {
        q: "Les routines tournent-elles quand mon ordinateur est éteint ?",
        a: "Oui. Les Bots travaillent sur un ordinateur cloud, donc les exécutions planifiées et déclenchées continuent même ordinateur portable fermé, et le Bot vous prévient quand il a terminé.",
      },
      {
        q: "Les routines Grok Bot consomment-elles de l’usage ?",
        a: "Oui. Chaque exécution, y compris les exécutions Test, consomme votre usage Grok Bot, et les plannings fréquents ou les déclencheurs Slack sur des canaux animés le consomment le plus vite.",
      },
    ],
  },
  cta: {
    title: "Donnez un planning et un poste à votre agent de code.",
    text: "Crewmark transforme les sessions Claude Code et Codex en employés IA avec des rôles, des objectifs, des horaires de travail et une pulsation.",
    button: "Commencer",
  },
  checked: "Vérifié dans la documentation Grok Bot de xAI et la page des offres Grok Bot de Cursor le 10 novembre 2026.",
  disclaimer:
    "Crewmark est un produit indépendant, sans lien avec xAI, SpaceX, X ni Cursor, et non approuvé par eux. Grok est une marque de son propriétaire.",
};
