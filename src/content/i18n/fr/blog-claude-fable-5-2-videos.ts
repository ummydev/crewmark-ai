import type { GuideCopy } from "@/components/landing/guide-article";
import { videoSections, type VideoLabels, type VideoText } from "@/content/blog/claude-fable-5-2-videos";

// fr translation of /blog/claude-fable-5-2-videos; the English master is src/content/blog/claude-fable-5-2-videos.ts.
// Prompts are not translated.

const text: VideoText = {
  "constructivist-chat-ui": {
    title: "Une app de discussion constructiviste qui change de forme",
    text: "L'interface d'une app de discussion avec une IA, refaite dans un style constructiviste : hirondelles, phases de lune, un œil non humain et un escalier en spirale, avec des écrans dessinés comme des relevés et des lettres.",
  },
  "art-history-cat": {
    title: "40 000 ans d'histoire de l'art en un prompt",
    text: "La même personne et le même chat redessinés à chaque époque, d'une fresque égyptienne à Van Gogh, Mondrian, le pixel art et 2026. Environ 4 900 lignes de code, sans modèle d'image.",
  },
  "crystal-bud-flight": {
    title: "Un bouton de cristal, puis un vol au-dessus de champs violets",
    text: "Un bouton de fleur givré, puis un vol en rase-mottes au-dessus de prairies, de sommets enneigés et de champs de fleurs violettes. L'auteur dit y avoir passé une demi-heure.",
  },
  "blender-island-rebuild": {
    title: "Une île reconstruite dans Blender d'après une référence",
    text: "Construite dans Blender uniquement par le code : 130 objets, 1,14 million de faces, aucune texture, une roue à aubes qui tourne et des poissons qui nagent. Fable a complété ce que la référence ne montrait pas.",
  },
  "locomotive-robot-anime": {
    title: "Un court métrage d'anime de 90 secondes : une locomotive à vapeur devient un robot",
    text: "Un anime 2D d'aspect dessiné à la main à partir d'un prompt : Fable a construit chaque plan dans Blender en Python, l'a rendu et encré image par image dans une seconde passe, puis a écrit la musique note à note avec numpy.",
  },
  "geonosis-battle-blender": {
    title: "Une bataille Star Wars construite dans Blender",
    text: "Le test Blender que l'auteur fait passer à chaque nouveau modèle : plus d'un millier de droïdes, des vaisseaux et des tirs laser dans l'arène. Un prompt, 1 h 30 dont 20 minutes de rendu.",
  },
  "laundry-in-the-sun": {
    title: "Du linge qui sèche dans la lumière de l'après-midi",
    text: "Deux personnes regardent des chemises flotter sur un fil dans un pré ensoleillé. Les plis, la lumière à travers le tissu, la caméra et le son sont du code.",
  },
  "fushimi-inari-travel-ad": {
    title: "Une pub de voyage pour Fushimi Inari en automne",
    text: "Vingt secondes du sanctuaire de Kyoto, une course sous le tunnel de torii rouges et un carton au coucher du soleil, entièrement en code, musique comprise.",
  },
  "rainy-tokyo-alley": {
    title: "Une ruelle de Tokyo sous la pluie, sans modèle vidéo",
    text: "Pluie, flaques et reflets de néons, un miroir de rue qui reflète vraiment et des enseignes japonaises lisibles. Publié par Higgsfield.",
  },
  "pet-robot": {
    title: "Un robot de compagnie qu'on pourrait construire chez soi",
    text: "Matt Shumer a demandé un robot à construire dans son appartement et a obtenu un petit robot rond qui se réveille, agite le bras et joue avec une balle.",
  },
  "lighthouse-in-a-storm": {
    title: "Un phare dans la tempête",
    text: "Un faisceau balaie une mer de nuit agitée jusqu'à ce que les nuages s'ouvrent autour de la lune. Effort élevé, avec le son.",
  },
  "piano-boy-short": {
    title: "Un court métrage de 46 secondes sans aucune image générée",
    text: "Un garçon au piano : chaque image dessinée et chaque note jouée par du code écrit par Fable, sans modèle d'image ni de vidéo.",
  },
  "ufo-area-51": {
    title: "Un OVNI se pose sur la Zone 51",
    text: "Un film de cinq plans et 30 secondes en three.js et Remotion à partir d'une phrase : aucun modèle importé, aucune texture ni son de banque, rendu en 4K.",
  },
  "spider-web-logo": {
    title: "Une araignée tisse le logo de Claude dans sa toile",
    text: "Sous la lune, une araignée tisse sa toile étape par étape, puis brode le logo de Claude au centre avant l'aube.",
  },
  istanbul: {
    title: "Istanbul, construite à partir d'un prompt",
    text: "La ville vue du ciel : Sainte-Sophie et la Corne d'Or, les ferries sur le Bosphore et la ligne d'horizon au crépuscule. Fable 5.2 Max, environ 46 $.",
  },
  "auric-voyage": {
    title: "Auric Voyage : un navire doré au-dessus des nuages",
    text: "Un voilier doré sur des nuages volumétriques, avec un cycle jour-nuit et un pont où l'on peut monter. Uniquement Three.js, environ 38 minutes et 17 $.",
  },
  "pirate-ship": {
    title: "Un bateau pirate au coucher du soleil",
    text: "Un trois-mâts avec son sillage, ses hublots éclairés et ses voiles gonflées. Du premier coup, environ 1 h 30 et 35 millions de tokens.",
  },
  "voxel-pagoda": {
    title: "Une pagode en voxels pleine de détails",
    text: "Une île flottante avec une pagode à cinq étages, des cerisiers en fleurs, des bassins et des lanternes qui s'allument la nuit.",
  },
  "voxel-paris-1888": {
    title: "Paris en 1888, la tour Eiffel en construction",
    text: "Des grues hissent des poutrelles, les riveteurs font jaillir des étincelles et un bateau à vapeur remonte la Seine, sur une île de voxels flottante. Du premier coup, avec un prompt long et précis.",
  },
  "night-tokyo-ramen-stall": {
    title: "Une échoppe de ramen par une nuit pluvieuse à Tokyo",
    text: "Un PROMPT.md, un dossier vide et aucune retouche, en 20 minutes pour 7 $. Appuyez sur T et la pluie se change lentement en neige.",
  },
  "floating-pixel-island": {
    title: "Une île de pixels flottante",
    text: "Une île en pixel art qui tourne en boucle, avec une tour de magicien, des cerisiers, un arc-en-ciel et des dirigeables. Un prompt en effort extra élevé.",
  },
  "talking-village": {
    title: "Un village européen où chaque personnage réfléchit",
    text: "Un village 3D dont les habitants pensent et se parlent grâce à l'IA, tiré du test de Fable 5.2 de Matthew Berman.",
  },
  "lighthouse-at-sunset": {
    title: "Un phare photoréaliste au coucher du soleil",
    text: "Le prompt de phare habituel de l'auteur, sur Fable 5.2 : un phare rayé, un faisceau qui tourne et une mer calme.",
  },
  "abyssal-landing-page": {
    title: "Abyssal : une landing page qui plonge au fond de l'océan",
    text: "Faites défiler depuis une surface éclairée par la lune, parmi des méduses lumineuses, jusqu'à une ville de lanternes et un œil géant dans le noir. En effort faible.",
  },
  "liquid-glass-type": {
    title: "Typographie en verre, ambre et métal liquide",
    text: "Des gouttes de verre, d'ambre et de métal liquide traversent d'immenses titres, chaque matière avec sa palette.",
  },
  "car-configurator": {
    title: "Un configurateur auto fait en effort moyen",
    text: "Tournez autour d'une berline rouge, changez la peinture et les jantes, puis passez à une vue de départ avec des traînées de lumière. Douze minutes.",
  },
  "doomsday-earth": {
    title: "Doomsday Earth : huit façons de détruire la planète",
    text: "La Terre avec de vraies cartes de la NASA et les lumières des villes, et huit façons d'en finir, d'un astéroïde à un dieu qui la croque comme une pomme. Du premier coup.",
  },
  "virus-capsid": {
    title: "Une capside de virus qui s'assemble toute seule",
    text: "Un fichier HTML : 420 sous-unités protéiques forment une capside T=7, d'abord 12 pentamères puis 60 hexamères, la géométrie des vrais virus.",
  },
  "drained-ocean": {
    title: "L'Atlantique vidé de son eau",
    text: "De vraies données de fond marin de la NOAA dans un survol 3D pendant que l'océan se vide : la Grande-Bretagne rejoint l'Europe en quelques secondes, puis la dorsale médio-atlantique apparaît.",
  },
  "deep-sea-dive": {
    title: "Une plongée de la surface à 40 mètres",
    text: "La lumière, les bancs de poissons et le faisceau de la lampe changent avec la profondeur, avec un profondimètre sur le côté. Tout en code.",
  },
  "pocket-black-hole": {
    title: "Un trou noir de poche",
    text: "À qui lui demandait quelque chose de viral, Fable a répondu par un trou noir interactif au disque lumineux courbé par la lentille gravitationnelle.",
  },
  "galaxy-dive": {
    title: "Plonger dans une galaxie spirale",
    text: "On part de l'extérieur d'une galaxie spirale et on s'y enfonce, avec un compteur d'années-lumière qui diminue. Environ 20 minutes de travail.",
  },
};

const labels: VideoLabels = {
  likes: "j'aime",
  views: "vues",
  prompt: "Voir le prompt (tel que partagé par l'auteur)",
  open: "L'ouvrir en direct",
  alt: (title) => `Image extraite de la vidéo : ${title}`,
};

export const copy: GuideCopy = {
  meta: {
    title: "Vidéos Claude Fable 5.2 : 32 films et scènes 3D faits en code",
    description:
      "Des vidéos réalisées avec Claude Fable 5.2 : un court d'anime rendu dans Blender, Istanbul vue du ciel, un navire doré au-dessus des nuages, des landing pages et des visualisations scientifiques. Pas de modèle vidéo : Fable écrit le code. Avec l'auteur, les j'aime et le prompt.",
  },
  breadcrumb: "Vidéos Claude Fable 5.2",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-12" },
  hero: {
    kicker: "Blog · Claude Fable 5.2",
    title: "Vidéos Claude Fable 5.2 : 32 films et scènes 3D, tous faits en code",
    lead: "Claude Fable 5.2 ne génère pas de vidéo comme un modèle vidéo. Il écrit du code en Three.js, WebGL, Remotion ou avec le Python de Blender, et rend ce que ce code dessine. Voici les 32 meilleurs résultats publiés dans ses premiers jours, chacun avec son auteur, les chiffres et, s'il a été partagé, le prompt.",
    cta: "Commencer",
    secondary: "Les regarder",
    secondaryHref: "#films",
  },
  sections: [
    {
      kind: "text",
      id: "how-it-works",
      title: "Comment Fable 5.2 fait de la vidéo",
      text: [
        "Générer une vidéo avec Fable 5.2, c'est lui demander une scène ou un court métrage et le laisser tout construire sous forme de programme : les modèles, la caméra, l'éclairage et souvent la musique. Certains auteurs la rendent en MP4 ; d'autres partagent la scène sous forme de page qu'on peut ouvrir et explorer.",
      ],
      points: [
        "L'anime de 90 secondes de 0kncn a été monté plan par plan dans Blender en Python, avec une bande-son écrite en numpy.",
        "Le navire doré de Marcel est du pur Three.js, sans Blender ni modèles externes : environ 38 minutes et 17 $ en effort moyen.",
        "L'Istanbul de Peter Gostev, la plus aimée de toutes, a tourné sur Fable 5.2 Max pour environ 46 $.",
        "Le film d'OVNI de Dante est sorti d'une seule phrase, en three.js et Remotion, sans textures ni sons de banque.",
      ],
    },
    {
      kind: "steps",
      id: "make-one",
      title: "En faire une dans Claude Code",
      steps: [
        {
          title: "Lancez Claude Code avec Fable 5.2",
          text: "Fable 5.2 demande un forfait Pro ou supérieur, ou un accès API. Pour une scène à partager sous forme de page, un dossier vide suffit ; pour Blender, installez-le afin que Fable le pilote en Python.",
          code: "mkdir my-film && cd my-film\nclaude --model claude-fable-5-2",
        },
        {
          title: "Décrivez la scène, ou le film plan par plan",
          text: "Une phrase suffit (\"make me a 30 second video of a UFO visiting Area 51 and greeting humans, ultra detailed, cinematic lighting\") ; des prompts longs et précis comme celui de Paris 1888 ci-dessous donnent plus de contrôle.",
        },
        {
          title: "Demandez un rendu, ou gardez-la en direct",
          text: "Demandez un MP4 avec une résolution et une cadence précises, ou une seule page HTML à ouvrir dans le navigateur et à partager.",
        },
      ],
    },
    ...videoSections(
      "fr",
      text,
      labels,
      {
        film: { title: "Courts métrages et animation", text: "Des films courts avec une caméra, une histoire ou une bande-son." },
        world: { title: "Mondes 3D et dioramas", text: "Villes, navires et îles ; plusieurs sont des pages en direct à explorer." },
        web: { title: "Sites et pages interactives", text: "Landing pages et pages produit qui s'animent au défilement ou au clic." },
        science: { title: "Science, espace et données", text: "Galaxies, trous noirs, virus et fonds marins, souvent à partir de vraies données." },
      },
      "Voir la publication d'origine",
    ),
    {
      kind: "text",
      id: "more",
      title: "Plus de créations Claude",
      text: [
        "La liste complète, avec trois images par vidéo, est sur GitHub : [awesome-claude-fable-videos](https://github.com/ummydev/awesome-claude-fable-videos). Pour les jeux faits avec Fable 5.2, voyez [jeux avec Claude Fable 5.2](/blog/claude-fable-5-2-games) ; pour les films de lancement et le motion design avec Opus 5.5, [motion design avec Opus 5.5](/blog/opus-5-5-motion-graphics). Ce qui a changé dans le modèle est dans notre [guide de Claude Fable 5.2](/blog/claude-fable-5-2).",
      ],
    },
  ],
  howTo: { section: "make-one", name: "Faire une vidéo avec Claude Fable 5.2 dans Claude Code" },
  mid: {
    title: "Fable 5.2 sur un poste permanent ?",
    text: "Les employés Crewmark tournent sur votre propre Claude Code, se réveillent au rythme d'un heartbeat et prennent le ticket suivant sur le tableau.",
    button: "Commencer",
  },
  faq: {
    title: "FAQ",
    items: [
      {
        q: "Claude Fable 5.2 peut-il générer de la vidéo ?",
        a: "Pas comme un modèle vidéo. Il écrit du code qui dessine chaque image, en Three.js, WebGL, Remotion ou Blender, et le rend en MP4 ou le fait tourner en direct dans le navigateur. D'où des textes, des logos et des détails bien nets.",
      },
      {
        q: "Quels outils utilise-t-il ?",
        a: "Le plus souvent Three.js ou WebGL dans un seul fichier HTML. D'autres ont utilisé Remotion pour des montages façon cinéma, Blender piloté en Python, et Python ou numpy pour la musique.",
      },
      {
        q: "Combien de temps et combien ça coûte ?",
        a: "D'environ 20 minutes et 7 $ (l'échoppe de ramen de Tokyo) à 1 h 30 et 35 millions de tokens (le bateau pirate), ou environ 46 $ sur Fable 5.2 Max (Istanbul).",
      },
      {
        q: "Puis-je ouvrir ces scènes moi-même ?",
        a: "Quatre ont une page en direct sur leur carte : le navire doré, le bateau pirate, le trou noir et la galaxie. Les autres ont été partagées en vidéo.",
      },
      {
        q: "Fable 5.2 ou Opus 5.5 pour la vidéo ?",
        a: "Les deux sont utilisés. Dans ce qui a été publié, Fable 5.2 sert surtout aux mondes 3D et aux courts métrages, Opus 5.5 aux films de lancement et au motion design, que nous avons rassemblés dans [motion design avec Opus 5.5](/blog/opus-5-5-motion-graphics).",
      },
    ],
  },
  cta: {
    title: "Confiez un poste permanent au modèle le plus récent.",
    text: "Crewmark transforme des sessions Claude Code et Codex en employés IA avec un poste, des objectifs, des horaires et un heartbeat.",
    button: "Commencer",
  },
  checked: "Chaque publication et prompt vérifié sur X et Xiaohongshu les 11 et 12 novembre 2026 ; les j'aime et les vues sont ceux de ces jours-là.",
  disclaimer:
    "Les vidéos et prompts appartiennent à leurs auteurs ; chaque carte renvoie à la publication d'origine. Crewmark est un produit indépendant, sans lien avec Anthropic ni soutien de sa part. Claude, Claude Fable, Claude Opus et Claude Code sont des marques d'Anthropic.",
};
