import type { GuideCopy } from "@/components/landing/guide-article";
import { motionSections, type MotionLabels, type MotionText } from "@/content/blog/opus-5-5-motion-graphics";

// fr translation of /blog/opus-5-5-motion-graphics; the English master is src/content/blog/opus-5-5-motion-graphics.ts.
// Prompts stay in the makers' own words and are not translated.

const basePrompt = "make a dynamic 15-second motion graphics video that shows what an incredible motion designer you are";

const text: MotionText = {
  "claude-motion-reel": {
    title: "Claude, motion designer : un reel de 15 secondes à partir d'une phrase",
    text: "Un reel façon portfolio : lettres en particules, courbes d'easing sous « Timing is everything », typo liquide et un carton final orange qui compte 899 images, 8 scènes et 1 image clé. À partir d'une phrase en chinois.",
  },
  "pelican-riding-a-bicycle": {
    title: "Un pélican à vélo, fait sérieusement",
    text: "Lassé des pélicans en SVG, l'auteur a demandé le plus détaillé possible. Opus 5.5 a tout écrit dans Claude Code : une scène Blender rendue avec Cycles, un moteur de nuages en Rust pour un ciel en 12K, environ 24 000 plumes, un vélo à 36 rayons et 92 maillons, et la musique. Aucun modèle, texture ou musique tout faits.",
  },
  "inference-startup-launch": {
    title: "Muda : la vidéo de lancement d'une startup d'inférence, en une minute pour environ 2 $",
    text: "« L'essentiel de l'inférence, c'est de l'attente. Plus maintenant. » Les grilles de requêtes s'allument à mesure que le débit grimpe, puis la marque apparaît. Ni modèle vidéo ni bibliothèque en plus : Claude a animé une page web et l'a enregistrée avec Playwright et ffmpeg.",
  },
  "typingmind-launch": {
    title: "TypingMind : un prompt au lieu de quatre semaines avec des freelances",
    text: "Opus a lu les pages du produit, écrit le script et animé une seule fenêtre de chat qui interroge plusieurs modèles à la fois. Un prompt et presque une heure dans Claude Code, sans aucun skill installé.",
  },
  "notion-launch-it-picked": {
    title: "Une vidéo de lancement Notion, produit choisi par Opus",
    text: "On lui a seulement demandé de choisir un SaaS connu et d'en faire une vidéo de lancement professionnelle : Opus a pris Notion, récupéré de vrais visuels sur le web et monté une vidéo de fonctionnalités soignée.",
  },
  "makermap-one-shape": {
    title: "MakerMap : une seule forme qui se transforme en tout le produit",
    text: "Vingt secondes où une forme devient l'inscription, une épingle sur la carte, 3 393 makers sur un globe, des mises en relation et la recherche. Ressorts, curseur et flou de mouvement sont des calculs déterministes dans un seul fichier HTML.",
  },
  "distilbook-oppenheimer": {
    title: "Distilbook, sur une musique façon Oppenheimer",
    text: "Deux chapitres, Fission et Fusion : des milliers de pages dorées forment des titres, un compte à rebours, une explosion, sur une musique qu'Opus a composée d'après le thème du film.",
  },
  "distilbook-film-strips": {
    title: "Distilbook : des pellicules qui s'enroulent en tunnel",
    text: "Un arc-en-ciel de pellicules traverse l'écran et s'enroule en un tunnel lumineux, dans le style d'une vidéo de référence. La version finale n'a aucune retouche manuelle.",
  },
  "motionsites-1m-visitors": {
    title: "MotionSites atteint un million de visiteurs par mois",
    text: "Une vidéo de cap franchi avec un compteur qui file jusqu'au million. Faite du premier coup en quatre minutes, avec une seule modification.",
  },
  "famewall-mascot": {
    title: "Famewall : il a trouvé la mascotte et l'a intégrée",
    text: "Une vidéo de lancement pour un outil de témoignages. Opus a fouillé les SVG du site, trouvé sa mascotte et l'a mise dans la vidéo sans qu'on le lui demande.",
  },
  "lumail-pricing": {
    title: "Lumail : l'e-mailing que votre agent IA peut piloter",
    text: "Des grilles de contacts qui n'ouvrent jamais un e-mail et une facture qui grimpe, puis l'argument. En moins de dix minutes, sans skill, juste le prompt.",
  },
  "founder-page-launch": {
    title: "founder.page : toutes les fonctionnalités en 20 secondes",
    text: "Une vidéo de lancement rapide et fidèle à la marque, avec des compteurs de revenus et de visiteurs. Faite du premier coup dans Claude Code.",
  },
  "tanstack-ai-launch": {
    title: "TanStack AI : un film de lancement pour développeurs",
    text: "Réalisé avec Opus 5.5 et Remotion à partir d'un long brief demandant un film premium digne d'ouvrir une keynote.",
  },
  "sahi-trading-terminal": {
    title: "Un terminal de trading qui recule jusqu'à n'être qu'un point dans l'espace",
    text: "D'un simple point aux graphiques, aux positions et à une chaîne d'options, puis un recul jusqu'à ce que le bureau soit un point dans l'espace, avant de revenir sur un téléphone. Fait du premier coup.",
  },
  "aisa-one-key": {
    title: "AIsa : des milliers de clés d'API n'en font plus qu'une",
    text: "Un essaim de noms de clés se resserre en une seule clé orange. Un prompt, du premier coup.",
  },
  "flowdrive-showreel": {
    title: "Flowdrive : streaming en 4K, livré partout",
    text: "Un film sombre et éditorial pour un service d'envoi de fichiers : relief en couches, globe de points lumineux, domaine personnalisé. Sans skill ; avec le son.",
  },
  "matra-apple-style": {
    title: "Matra : un film à la Apple pour une app",
    text: "Trente secondes en Remotion et React : police SF Pro, iPhone en titane, sous-titres synchronisés mot à mot sur une vraie voix, et de la musique.",
  },
  "no-hands-labs": {
    title: "No Hands Labs : des entreprises qui se construisent toutes seules",
    text: "Du texte vert citron sur fond noir et un 95 % en matrice de points pour un studio d'entreprises gérées par l'IA.",
  },
  "pen-designs-launch": {
    title: "norilu : déléguez le travail qui revient sans cesse",
    text: "Opus a lu les maquettes de l'auteur via le MCP de pen.dev et en a tiré un film de lancement posé. Un second prompt sans détour a nettement amélioré la musique et le rythme.",
  },
  "bento-surf": {
    title: "Bento.surf : un film produit de 40 secondes",
    text: "Un film ludique, pensé pour le mobile, pour une page de liens, à partir d'un seul prompt.",
  },
  quickemailverify: {
    title: "QuickEmailVerify : stoppez les rebonds avant d'envoyer",
    text: "Un film façon SaaS pour un vérificateur d'e-mails, de la saisie d'une adresse à une liste nettoyée. Opus 5.5 en effort élevé.",
  },
  "orbe-everyday-spending": {
    title: "Orbe : les dépenses du quotidien en 3D isométrique",
    text: "Un film vertical pour une app de dépenses : supermarché, station-service et restaurant, chacun enregistrant un achat. L'auteur précise qu'il a fallu plus d'un prompt.",
  },
  "winkz-pitch": {
    title: "Un pitch vidéo pour un grossiste sur Amazon",
    text: "Quinze secondes pour convaincre des marques, avec des compteurs de protection des prix et d'achat ferme.",
  },
  "queryglow-launch": {
    title: "QueryGlow : un film de lancement dans le style d'Anthropic",
    text: "Un film calme, en typo à empattements, pour un outil de base de données auto-hébergé ; l'auteur a demandé en allemand quelque chose « à la Anthropic », puis a ajouté de la musique.",
  },
  "opus-1984-ad": {
    title: "Une pub pour Opus 5.5, d'après le « 1984 » d'Apple",
    text: "Une silhouette qui court avec un marteau, des rangées de figures grises et un visage géant à l'écran, le tout fait uniquement en code. Opus a même vérifié les niveaux sonores.",
  },
  "paybox-brand-sting": {
    title: "PayBox : un jingle de marque à partir d'un logo",
    text: "L'agent a lu le logo, trouvé l'entreprise, écrit le scénario et construit un jingle visuel de dix secondes en une seule passe.",
  },
  "paymentform-logo-reveal": {
    title: "PaymentForm : un logo assemblé à partir d'éclats low-poly",
    text: "Un logo en fil de fer se remplit éclat par éclat, l'icône de l'app se pose et le nom s'écrit, avec le son.",
  },
  "opus-retro-launch": {
    title: "Un film de lancement rétrofuturiste pour Opus 5.5",
    text: "Une tête à rayures lumineuses avec grain de pellicule et effet CRT, à partir d'un prompt et d'une image de référence.",
  },
  "psychedelic-showreel": {
    title: "Phosphene : une étude de mouvement psychédélique",
    text: "Un œil géant, des tunnels qui tournent et des kaléidoscopes, image et son par Opus en effort extra élevé : 90 minutes de rendu, 14 $ en tout.",
  },
  "poster-breaks-out": {
    title: "Une affiche qui sort de son propre cadre",
    text: "De grandes lettres rouges et bleues transpercent leur affiche. Opus a composé la bande-son et calé chaque impact sur le rythme.",
  },
  "i-can": {
    title: "I CAN : flouter, boucler, rendre, essaimer, courber la lumière",
    text: "Des cartons en gras qui font exactement ce qu'ils disent, à partir d'un prompt d'une ligne.",
  },
  "light-speed-earth": {
    title: "Une seconde sur Terre",
    text: "Sans aucune consigne, Opus a choisi son sujet : tout ce qui se passe en une seconde, de la lumière qui fait le tour de la Terre à la naissance de quatre bébés.",
  },
  "no-samples-showreel": {
    title: "Un showreel dont la musique est créée de zéro",
    text: "L'auteur n'y connaît rien en motion design. Opus a écrit le code de chaque image et synthétisé la musique, sans samples, dans Cursor.",
  },
  "easing-explained": {
    title: "I make things move : Motion Designer Claude",
    text: "Une typo qui tourne et s'aimante, une leçon sur les courbes d'easing et un carton final, à partir d'un prompt d'une ligne en chinois.",
  },
  "portfolio-film": {
    title: "Le portfolio d'un designer, devenu film",
    text: "Opus a parcouru chaque écran du portfolio de l'auteur et son travail open source, et en a fait un reel percutant du premier coup.",
  },
  "it-thinks-in-curves": {
    title: "Rythme, typo, boucles : il pense en courbes",
    text: "Des boucles carrées de typo en aplats de couleur et une courbe de Bézier tracée en direct, sur l'idée d'Opus qu'il écrit des maths plutôt que des images clés.",
  },
  "who-are-you-opus": {
    title: "Salut, je suis Claude : Opus 5.5 se présente",
    text: "Dix secondes de typo : « je lis chaque mot », « je réfléchis », « je dis les choses franchement », « je construis avec vous ».",
  },
  "madhav-about-me": {
    title: "Un film de dix secondes sur la personne qui l'a demandé",
    text: "Invité à faire une vidéo sur ce qu'il savait de l'auteur, Opus a réalisé un film de particules sur son travail.",
  },
  "recursion-nine-styles": {
    title: "La récursivité expliquée en neuf genres",
    text: "Chaque explication change de style, du jeu vidéo rétro au film noir. Un vrai coup unique : scènes en React et SVG, musique et bruitages synthétisés en Python.",
  },
  "negroni-recipe": {
    title: "Un Negroni, étape par étape",
    text: "Une recette animée qui remplit le verre ingrédient par ingrédient, rendue en HTML à partir d'une seule image.",
  },
  "history-of-ai": {
    title: "83 ans d'IA en moins de trois minutes",
    text: "Recherche, script, animation et vrais sons enregistrés : les 5 160 images ont été codées par Claude à partir d'un seul prompt.",
  },
  "how-llms-work-fable": {
    title: "Comment fonctionnent les LLM, en motion design",
    text: "Tokens, embeddings, attention et couches du transformer, chacun dans sa scène, tiré du test de Fable 5.2 de Matthew Berman.",
  },
  "white-russian-recipe": {
    title: "Un White Russian dans un style dessiné à la main",
    text: "Un croquis et un prompt, et environ 25 minutes plus tard un MP4 en 1080p : un seul fichier HTML en SVG et JavaScript pur, sans bibliothèque d'animation.",
  },
};

const labels: MotionLabels = {
  likes: "j'aime",
  views: "vues",
  prompt: "Voir le prompt (original)",
  alt: (title) => `Image extraite de la vidéo : ${title}`,
};

export const copy: GuideCopy = {
  meta: {
    title: "Motion design avec Opus 5.5 : 43 exemples et leurs prompts",
    description:
      "Des vidéos de motion design réalisées avec Claude Opus 5.5 : films de lancement, animations de logo, typo animée et explications, chacune avec le prompt de son auteur, les j'aime et les vues. Plus le prompt que tout le monde a copié et comment en faire une dans Claude Code.",
  },
  breadcrumb: "Motion design avec Opus 5.5",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-12" },
  hero: {
    kicker: "Blog · Claude Opus 5.5",
    title: "Motion design avec Opus 5.5 : 43 exemples et les prompts qui les ont produits",
    lead: "Depuis la sortie de Claude Opus 5.5, beaucoup lui demandent du motion design et publient le résultat : films de lancement, animations de logo, typo animée, recettes expliquées. Opus écrit chacun en code et le rend en MP4. Nous les avons tous regardés et gardé les 43 meilleurs, chacun avec le prompt de son auteur.",
    cta: "Commencer",
    secondary: "Voir les exemples",
    secondaryHref: "#launch-films",
  },
  sections: [
    {
      kind: "text",
      id: "how-it-works",
      title: "Comment Claude fait une vidéo de motion design",
      text: [
        "Aucun modèle vidéo n'intervient. Opus écrit l'animation en code (une page HTML avec du SVG et du JavaScript, un projet React ou [Remotion](https://www.remotion.dev), parfois Three.js), fait avancer un navigateur headless image par image et envoie les images à ffmpeg. La musique et les bruitages sont eux aussi synthétisés en code.",
        "Comme chaque image est une fonction du temps, les boucles se referment parfaitement et le son tombe pile sur l'image voulue. Le texte reste net et juste : noms de produits, prix et textes d'interface sans faute.",
      ],
      points: [
        "Le film de lancement de Deedy Das n'a utilisé que JavaScript, Playwright et ffmpeg, pour environ 2 $ d'API.",
        "La vidéo d'Ethan Mollick sur la récursivité dessine chaque scène en React et SVG et synthétise sa musique en Python.",
        "La recette animée de Sarutobi Sasuke est un seul fichier HTML en SVG et JavaScript pur, sans bibliothèque d'animation, terminé en 25 minutes environ.",
      ],
    },
    {
      kind: "steps",
      id: "make-one",
      title: "En faire une avec Claude Code",
      steps: [
        {
          title: "Lancez Claude Code avec Opus 5.5 dans un dossier vide",
          text: "Plusieurs auteurs disent n'avoir installé ni skill ni plugin : Opus choisit ses outils et installe ce qu'il lui faut.",
          code: "mkdir launch-film && cd launch-film\nclaude --model claude-opus-5-5",
        },
        {
          title: "Donnez-lui le prompt et votre produit",
          text: "Ajoutez votre site pour qu'il lise les pages et écrive le script lui-même. Un logo, une capture d'écran ou une vidéo de référence l'aident à coller à votre style.",
          code: `${basePrompt} for https://your-site.com. Visit the pages first to learn about the product, then write the video content yourself. Go all out.`,
        },
        {
          title: "Laissez-le faire le rendu",
          text: "Comptez de quelques minutes à une heure et demie selon la durée et l'effort. Demandez-lui de vous dire où il enregistre le MP4.",
        },
        {
          title: "Regardez et dites ce qui ne va pas",
          text: "Le premier montage de Sacha Arbonel était trop rapide et la musique faible ; un second message sans détour l'a nettement amélioré. Demandez un rythme plus lent, un morceau libre de droits ou un autre format.",
        },
      ],
    },
    {
      kind: "text",
      id: "the-prompt",
      title: "Le prompt que tout le monde a copié",
      text: [`Beaucoup des vidéos ci-dessous partent du même court prompt qui a circulé sur X : \`${basePrompt}\`. Ce que les auteurs y ont ajouté :`],
      points: [
        "Votre produit ou votre site : « for <votre url> », ou « visite d'abord les pages pour comprendre le produit, puis écris toi-même le contenu de la vidéo ».",
        "Une référence : « comme si c'était ton showreel », « à fond (go all out) », « un film de lancement premium pour un outil de développeurs », « à la Apple ».",
        "Une ambiance ou un son : « psychédélique et hypnotique », ou « inspire-toi de la musique d'Oppenheimer, mais compose-la toi-même ».",
        "Une limite : « évite les cadres et petits textes dans les coins, qui trahissent une vidéo faite par une IA ».",
        "Une référence visuelle : un logo, une image, un croquis à la main ou une autre vidéo à imiter.",
      ],
    },
    ...motionSections(
      "fr",
      text,
      labels,
      {
        launch: { title: "Films de lancement de produit", text: "Lancements, caps franchis et pitchs pour de vrais produits, presque tous à partir d'un seul prompt." },
        brand: { title: "Animations de logo et films de marque", text: "Jingles et pubs construits à partir d'un logo, d'une image de référence ou d'une pub célèbre." },
        showreel: { title: "Showreels et typo animée", text: "Opus qui fait la démonstration de son talent de motion designer : typo, boucles et mouvement pur." },
        explainer: { title: "Vidéos explicatives", text: "Recettes, histoire et informatique, expliquées en mouvement." },
      },
      "Voir la publication d'origine",
    ),
    {
      kind: "text",
      id: "more",
      title: "Plus de vidéos",
      text: [
        "La liste complète, avec trois images par vidéo et tous les prompts, est sur GitHub : [awesome-claude-motion-video](https://github.com/ummydev/awesome-claude-motion-video).",
        "Pour des mondes en 3D et des courts métrages faits avec le dernier modèle de Claude, voyez la [collection de vidéos Claude Fable 5.2 sur GitHub](https://github.com/ummydev/awesome-claude-fable-videos), et notre [guide de Claude Fable 5.2](/blog/claude-fable-5-2) pour ce qui a changé et la comparaison avec Opus 5.5.",
      ],
    },
  ],
  howTo: { section: "make-one", name: "Faire une vidéo de motion design avec Claude Opus 5.5 dans Claude Code" },
  mid: {
    title: "Un film de lancement à chaque mise en production ?",
    text: "Un employé Crewmark tourne sur votre propre Claude Code : donnez-lui les notes de version et il rend la vidéo pendant que vous préparez le lancement.",
    button: "Commencer",
  },
  faq: {
    title: "FAQ",
    items: [
      {
        q: "Claude Opus 5.5 peut-il faire des vidéos ?",
        a: "Oui, en écrivant du code. Il construit l'animation sous forme de page web ou de projet Remotion et la rend image par image en MP4, avec une musique qu'il synthétise lui-même. Il ne génère pas d'images comme un modèle vidéo, d'où un texte, des chiffres et une interface bien nets.",
      },
      {
        q: "Faut-il un skill, Remotion ou After Effects ?",
        a: "Non. Plusieurs auteurs disent avoir utilisé Claude Code tel quel, sans skill : Opus a choisi ses outils, en général Playwright ou Chrome headless avec ffmpeg, parfois Remotion.",
      },
      {
        q: "Combien de temps et combien ça coûte ?",
        a: "D'environ une minute et 2 $ (Deedy Das) à une heure et demie de rendu et 14 $ en effort extra élevé (monokern). La plupart parlent d'un prompt et de quelques minutes à une heure.",
      },
      {
        q: "D'où vient la musique ?",
        a: "Opus la compose et la synthétise généralement en code, en Python ou en JavaScript, et cale les impacts sur les coupes. Certains auteurs lui ont demandé d'utiliser plutôt un morceau libre de droits.",
      },
      {
        q: "Puis-je réutiliser ces prompts ?",
        a: "Les prompts sont ceux des auteurs, cités depuis leurs publications. Essayez-les sur votre propre produit ; les vidéos appartiennent à leurs auteurs.",
      },
    ],
  },
  cta: {
    title: "Confiez la vidéo à un employé IA.",
    text: "Crewmark transforme des sessions Claude Code et Codex en employés IA avec un poste, des objectifs, des horaires et un heartbeat.",
    button: "Commencer",
  },
  checked: "J'aime, vues et prompts vérifiés sur chaque publication d'origine sur X ou Xiaohongshu le 12 novembre 2026.",
  disclaimer:
    "Les vidéos et les prompts appartiennent à leurs auteurs ; chaque carte renvoie à la publication d'origine. Crewmark est un produit indépendant, sans lien avec Anthropic ni soutien de sa part. Claude, Claude Opus, Claude Fable et Claude Code sont des marques d'Anthropic.",
};
