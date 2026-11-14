import type { RemoteClaudeCodeCopy } from "@/content/remote-claude-code";

// French translation of /remote-claude-code; the English master is src/content/remote-claude-code.ts.
export const copy: RemoteClaudeCodeCopy = {
  meta: {
    title: "Claude Code Remote Control depuis le téléphone | Crewmark AI",
    description:
      "Reprendre une session Claude Code locale depuis votre téléphone ou un navigateur avec Remote Control, ses limites, et faire travailler Claude Code sans vous.",
  },
  breadcrumb: "Claude Code à distance",
  hero: {
    kicker: "Claude Code à distance",
    title: "Pilotez Claude Code depuis votre téléphone, puis laissez-le travailler sans vous",
    lead: "Claude Code Remote Control est la fonctionnalité d’Anthropic qui permet de poursuivre, depuis votre téléphone, une tablette ou n’importe quel navigateur, une session Claude Code qui tourne sur votre ordinateur. Ce guide explique comment la configurer, où elle s’arrête, et comment Crewmark transforme ce même Claude Code en employé qui continue de travailler selon ses propres horaires.",
    cta: "Commencer",
    secondary: "Configurer Remote Control",
  },
  official: {
    title: "Qu’est-ce que Claude Code Remote Control ?",
    text: "Remote Control relie claude.ai/code et l’app Claude pour iOS et Android à une session Claude Code qui tourne sur votre machine. Claude continue de tourner en local du début à la fin ; votre téléphone ou votre navigateur n’est qu’une fenêtre sur cette session.",
    points: [
      "Vos fichiers, serveurs MCP, outils et réglages de projet restent disponibles, puisque rien ne part dans le cloud.",
      "La conversation reste synchronisée : vous pouvez écrire indifféremment depuis le terminal, un navigateur ou votre téléphone.",
      "Vous pouvez envoyer des photos et des fichiers depuis votre téléphone ; Claude Code les enregistre sur votre machine.",
      "Si votre portable se met en veille ou si le réseau coupe, la session se reconnecte dès que la machine est de nouveau en ligne.",
    ],
  },
  howto: {
    title: "Comment utiliser Claude Code depuis votre téléphone",
    steps: [
      {
        title: "Vérifiez votre forfait et votre connexion",
        text: "Remote Control fonctionne avec les forfaits Claude Pro, Max, Ultra, Team et Enterprise, avec une connexion via claude.ai par /login. Les clés API, Amazon Bedrock, Google Cloud, Microsoft Foundry et les passerelles ANTHROPIC_BASE_URL personnalisées ne sont pas prises en charge. Sur Team et Enterprise, un Owner doit d’abord l’activer.",
      },
      {
        title: "Lancez une session avec Remote Control activé",
        text: "Lancez une nouvelle session interactive avec l’option, ou activez-le dans une session déjà en cours. L’extension VS Code et l’app de bureau Claude acceptent la même commande /remote-control.",
        code: 'claude --remote-control "My project"\n# ou, dans une session en cours\n/remote-control',
      },
      {
        title: "Ouvrez-la sur votre téléphone",
        text: "Scannez le QR code que Claude Code affiche dans le terminal, ou ouvrez la session depuis la liste sur claude.ai/code ou dans l’app Claude. Relancez /remote-control pour revoir le lien ou le QR code, ou pour vous déconnecter.",
      },
      {
        title: "Laissez votre ordinateur allumé",
        text: "La session tourne sur votre machine : l’ordinateur doit rester allumé et le processus claude doit continuer de tourner. Fermez le terminal et la session à distance s’arrête avec lui.",
      },
    ],
    source: "Source : documentation Remote Control d’Anthropic",
  },
  mid: {
    title: "Vous voulez qu’il continue pendant votre absence ?",
    text: "Remote Control vous permet de piloter une session depuis votre téléphone. Un employé Crewmark continue de travailler au rythme de sa pulsation et vous écrit quand il a besoin de vous.",
    button: "Commencer",
  },
  limits: {
    title: "Ce que Remote Control ne fait pas",
    text: "Remote Control est un écran déporté pour une conversation. Il ne décide pas de ce que Claude doit faire ensuite : le travail n’avance que lorsque vous intervenez.",
    points: [
      "Claude agit quand vous envoyez un message. Une fois la tâche terminée, il vous attend.",
      "Il n’y a ni liste de tâches, ni responsables, ni statuts : chaque session est une seule conversation.",
      "Il ne connaît ni vos objectifs ni vos horaires de travail, et rien ne le réveille selon un planning.",
      "Faire tourner plusieurs agents Claude Code, c’est jongler vous-même entre plusieurs sessions.",
    ],
  },
  compare: {
    title: "Remote Control ou Crewmark",
    headers: ["", "Claude Code Remote Control", "Crewmark"],
    rows: [
      ["Ce que c’est", "Votre session Claude Code locale, sur votre téléphone ou dans un navigateur", "Une équipe d’employés IA, chacun étant une conversation Claude Code ou Codex sur votre machine"],
      ["Qui lance le travail", "Vous, en envoyant un message", "Une pulsation pendant les heures de travail, ou un ticket que quelqu’un assigne"],
      ["Quand vous ne répondez plus", "Claude attend votre prochain message", "L’employé passe à son ticket suivant et vous sollicite quand il est bloqué"],
      ["Suivi", "Une conversation par session", "Tableau de tickets avec statuts, projets, commentaires et KPI"],
      ["Tourne sur", "Votre machine, votre forfait Claude", "Votre machine, votre forfait Claude Code ou Codex"],
      ["Édité par", "Anthropic", "Crewmark (sans lien avec Anthropic)"],
    ],
  },
  crewmark: {
    kicker: "Pendant votre absence",
    title: "Donnez un poste à Claude Code, pas seulement une télécommande",
    text: "Crewmark fait du Claude Code installé sur votre machine un employé : il a un rôle, des objectifs, des horaires de travail et un tableau de tickets, et il continue d’y travailler, que vous le regardiez ou non.",
    steps: [
      {
        title: "Recrutez un employé",
        text: "Choisissez un rôle, par exemple spécialiste SEO ou ingénieur logiciel, rédigez ses objectifs et ses KPI, et définissez ses horaires de travail et sa pulsation.",
      },
      {
        title: "Connectez une conversation Claude Code",
        text: "Collez le lien de configuration dans Claude Code. Il installe la CLI crewmark et relie cette conversation à l’employé. Codex fonctionne aussi.",
      },
      {
        title: "Assignez des tickets depuis n’importe quel navigateur",
        text: "Créez des tickets sur le tableau depuis votre téléphone ou votre portable et assignez-les. L’employé en est informé immédiatement.",
      },
      {
        title: "Il travaille au rythme d’une pulsation",
        text: "Pendant ses heures de travail, l’employé est réveillé selon un planning, prend ses tickets, met à jour leur statut et commente son avancement. Quand il a besoin d’une décision, il vous la demande.",
      },
    ],
  },
  both: {
    title: "Utilisez les deux",
    text: "Un employé Crewmark est une conversation Claude Code ordinaire : vous pouvez donc toujours activer Remote Control pour lui et intervenir depuis votre téléphone. Remote Control vous permet de parler à Claude Code de n’importe où ; Crewmark lui donne de quoi s’occuper quand vous ne lui parlez pas.",
  },
  faq: {
    title: "Questions",
    items: [
      {
        q: "Crewmark est-il le Claude Code Remote Control officiel ?",
        a: "Non. Remote Control est une fonctionnalité de Claude Code conçue par Anthropic. Crewmark est un produit distinct, sans lien avec Anthropic, qui fait tourner des employés IA par-dessus Claude Code et Codex.",
      },
      {
        q: "Puis-je utiliser Claude Code depuis mon téléphone ?",
        a: "Oui. Lancez Claude Code avec claude --remote-control, ou exécutez /remote-control dans une session, puis ouvrez-la dans l’app Claude pour iOS ou Android, ou sur claude.ai/code. La session elle-même continue de tourner sur votre ordinateur.",
      },
      {
        q: "Remote Control fonctionne-t-il avec une clé API ?",
        a: "Non. D’après la documentation d’Anthropic, il faut un forfait Pro, Max, Ultra, Team ou Enterprise avec une connexion via claude.ai. Il ne fonctionne pas avec les clés API, Amazon Bedrock, Google Cloud, Microsoft Foundry ni avec une ANTHROPIC_BASE_URL personnalisée.",
      },
      {
        q: "Pourquoi Claude Code Remote Control ne fonctionne-t-il pas ?",
        a: "Le plus souvent, c’est la connexion. Exécutez claude auth login et choisissez l’option claude.ai ; supprimez ANTHROPIC_API_KEY ou ANTHROPIC_AUTH_TOKEN s’ils sont définis, car ils sont prioritaires ; et n’utilisez pas un jeton longue durée issu de claude setup-token, qui ne peut pas démarrer Remote Control. Sur Team et Enterprise, un Owner doit d’abord activer Remote Control. CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC ou DISABLE_GROWTHBOOK le désactivent aussi. claude doctor indique quelle vérification a échoué.",
      },
      {
        q: "Pourquoi Remote Control se déconnecte-t-il sans arrêt ?",
        a: "\"Remote Control disconnected\" ou \"Can't reach\" signifie que votre téléphone ou votre navigateur a perdu le contact avec Claude Code sur votre ordinateur. Une session interactive se reconnecte d’elle-même une fois l’ordinateur réveillé et en ligne ; si le processus claude s’est arrêté, relancez-le et reprenez la session. Sur une machine distante, lancez claude dans tmux ou screen pour qu’il survive à la fermeture du terminal, et s’il indique qu’il n’a pas pu joindre le serveur pendant environ 30 minutes, exécutez à nouveau /remote-control.",
      },
      {
        q: "Remote Control ou Dispatch : quelle différence ?",
        a: "Remote Control vous permet de piloter une session Claude Code qui tourne déjà sur votre ordinateur, depuis claude.ai/code ou l’app Claude. Dispatch vous permet d’envoyer une nouvelle tâche depuis l’app mobile Claude, et l’app de bureau sur votre ordinateur démarre une session pour elle ; il faut que l’app mobile soit associée à Claude Desktop.",
      },
      {
        q: "Puis-je utiliser Remote Control avec DeepSeek ou un autre fournisseur de modèles ?",
        a: "Non. Remote Control ne fonctionne que lorsque Claude Code communique avec api.anthropic.com. Si ANTHROPIC_BASE_URL pointe vers DeepSeek, une passerelle ou un proxy, ou si vous utilisez Bedrock, Google Cloud ou Foundry, supprimez ce réglage et connectez-vous avec claude.ai pour l’utiliser.",
      },
      {
        q: "Claude Code peut-il continuer à travailler quand je ferme mon portable ?",
        a: "Pas tout seul : une session Remote Control a besoin que l’ordinateur soit allumé et que le processus claude tourne, et après une tâche elle attend votre prochain message. Les employés Crewmark tournent eux aussi sur votre ordinateur, mais une pulsation les réveille pendant leurs heures de travail pour qu’ils continuent d’avancer sur leurs tickets.",
      },
      {
        q: "Crewmark a-t-il besoin de son propre abonnement IA ?",
        a: "Non. Chaque employé tourne dans Claude Code ou Codex sur votre propre machine, avec le forfait que vous payez déjà. Crewmark gère les employés, les tickets, le tableau et les messages.",
      },
    ],
  },
  cta: {
    title: "Laissez Claude Code travailler pendant votre absence",
    text: "Inscrivez-vous avec Google et recrutez votre premier employé sur l’agent que vous utilisez déjà.",
    button: "Commencer",
  },
  checked: "Informations sur Remote Control vérifiées dans la documentation d’Anthropic le 7 novembre 2026.",
  disclaimer:
    "Claude et Claude Code sont des marques d’Anthropic, PBC. Crewmark est un produit indépendant, sans lien avec Anthropic, qui n’est ni approuvé ni sponsorisé par Anthropic.",
};
