import type { GuideCopy } from "@/components/landing/guide-article";
import { videoSections, type VideoLabels, type VideoText } from "@/content/blog/claude-fable-5-2-videos";

// de translation of /blog/claude-fable-5-2-videos; the English master is src/content/blog/claude-fable-5-2-videos.ts.
// Prompts are not translated.

const text: VideoText = {
  "constructivist-chat-ui": {
    title: "Eine konstruktivistische Chat-App, die ihre Form ändert",
    text: "Die Oberfläche einer KI-Begleiter-App im konstruktivistischen Stil neu gestaltet: Schwalben, Mondphasen, ein nicht menschliches Auge und eine Wendeltreppe, die Chats gezeichnet wie Vermessungskarten und Briefe.",
  },
  "art-history-cat": {
    title: "40.000 Jahre Kunstgeschichte in einem Prompt",
    text: "Dieselbe Person und dieselbe Katze in jeder Epoche neu gezeichnet, vom ägyptischen Wandbild über Van Gogh, Mondrian und Pixel-Art bis 2026. Rund 4.900 Zeilen Code, ohne Bildmodell.",
  },
  "crystal-bud-flight": {
    title: "Eine Kristallknospe, dann ein Flug über violette Felder",
    text: "Eine bereifte Blütenknospe, dann ein Tiefflug über Wiesen, verschneite Gipfel und violette Blumenfelder. Laut Macher eine halbe Stunde Arbeit.",
  },
  "blender-island-rebuild": {
    title: "Eine Insel, in Blender nach einer Vorlage nachgebaut",
    text: "Nur per Code in Blender gebaut: 130 Objekte, 1,14 Millionen Flächen, keine Texturen, ein drehendes Wasserrad und schwimmende Fische. Was die Vorlage nicht zeigte, hat Fable ergänzt.",
  },
  "locomotive-robot-anime": {
    title: "Ein 90-Sekunden-Anime: Eine Dampflok wird zum Roboter",
    text: "Handgezeichnet wirkender 2D-Anime aus einem Prompt: Fable baute jede Einstellung in Blender per Python, renderte sie, tuschte jedes Bild in einem zweiten Durchgang und schrieb die Musik Note für Note mit numpy.",
  },
  "geonosis-battle-blender": {
    title: "Eine Star-Wars-Schlacht, gebaut in Blender",
    text: "Der Blender-Test, den der Macher jedem neuen Modell stellt: über tausend Droiden, Kanonenboote und Laserfeuer in der Arena. Ein Prompt, 1,5 Stunden inklusive 20 Minuten Rendern.",
  },
  "laundry-in-the-sun": {
    title: "Wäsche an der Leine im Nachmittagslicht",
    text: "Zwei Menschen sehen Hemden an einer Wäscheleine auf einer sonnigen Wiese flattern. Falten, Licht durch den Stoff, Kamera und Ton sind alles Code.",
  },
  "fushimi-inari-travel-ad": {
    title: "Ein Reise-Spot für Fushimi Inari im Herbst",
    text: "Zwanzig Sekunden Schrein in Kyoto, ein Lauf durch den roten Torii-Tunnel und eine Titelkarte im Sonnenuntergang, komplett in Code, Musik inklusive.",
  },
  "rainy-tokyo-alley": {
    title: "Eine verregnete Gasse in Tokio, ohne Videomodell",
    text: "Regen, Pfützen und Neonspiegelungen, ein Verkehrsspiegel, der wirklich spiegelt, und lesbare japanische Schilder. Gepostet von Higgsfield.",
  },
  "pet-robot": {
    title: "Ein Haustier-Roboter zum Selberbauen",
    text: "Matt Shumer bat um einen Roboter, den er in seiner Wohnung bauen könnte, und bekam einen kleinen runden Roboter, der aufwacht, den Arm schwingt und mit einem Ball spielt.",
  },
  "lighthouse-in-a-storm": {
    title: "Ein Leuchtturm im Sturm",
    text: "Ein Lichtstrahl streicht über eine aufgewühlte Nachtsee, bis sich die Wolken um den Mond öffnen. Hoher Effort, mit Ton.",
  },
  "piano-boy-short": {
    title: "Ein 46-Sekunden-Film ohne ein einziges generiertes Bild",
    text: "Ein Junge am Klavier: jedes Bild gezeichnet und jede Note gespielt von Code, den Fable schrieb, ohne Bild- oder Videomodell.",
  },
  "ufo-area-51": {
    title: "Ein UFO landet in Area 51",
    text: "Ein Film mit fünf Einstellungen und 30 Sekunden in three.js und Remotion aus einem Satz: keine importierten Modelle, Texturen oder Archivsounds, gerendert in 4K.",
  },
  "spider-web-logo": {
    title: "Eine Spinne webt das Claude-Logo in ihr Netz",
    text: "Im Mondlicht spinnt eine Spinne ihr Netz Schritt für Schritt und webt bis zum Morgengrauen das Claude-Logo in die Mitte.",
  },
  istanbul: {
    title: "Istanbul, gebaut aus einem Prompt",
    text: "Die Stadt aus der Luft: Hagia Sophia und Goldenes Horn, Fähren auf dem Bosporus und die Skyline in der Dämmerung. Fable 5.2 Max, etwa 46 $.",
  },
  "auric-voyage": {
    title: "Auric Voyage: ein goldenes Schiff über den Wolken",
    text: "Ein goldenes Segelschiff über volumetrischen Wolken, mit Tag-Nacht-Wechsel und einem Deck, das man betreten kann. Nur Three.js, etwa 38 Minuten und 17 $.",
  },
  "pirate-ship": {
    title: "Ein Piratenschiff im Sonnenuntergang",
    text: "Ein Dreimaster mit Kielwasser, beleuchteten Kajütenfenstern und vollen Segeln. Im ersten Anlauf, etwa 1,5 Stunden und 35 Millionen Tokens.",
  },
  "voxel-pagoda": {
    title: "Eine Voxel-Pagode voller winziger Details",
    text: "Eine schwebende Insel mit fünfstöckiger Pagode, Kirschblüten, Teichen und Laternen, die nachts angehen.",
  },
  "voxel-paris-1888": {
    title: "Paris 1888, der Eiffelturm im Bau",
    text: "Kräne heben Träger, Nieter sprühen Funken und ein Dampfboot fährt die Seine hinauf, auf einer schwebenden Voxel-Insel. Im ersten Anlauf, aus einem langen, präzisen Prompt.",
  },
  "night-tokyo-ramen-stall": {
    title: "Ein Ramen-Stand in einer verregneten Nacht in Tokio",
    text: "Eine PROMPT.md, ein leerer Ordner, keine Handarbeit, in 20 Minuten für 7 $. Drück T, und der Regen wird langsam zu Schnee.",
  },
  "floating-pixel-island": {
    title: "Eine schwebende Pixel-Insel",
    text: "Eine Pixel-Art-Insel in Endlosschleife mit Zaubererturm, Kirschbäumen, Regenbogen und Luftschiffen. Ein Prompt mit extra hohem Effort.",
  },
  "talking-village": {
    title: "Ein europäisches Dorf, in dem jede Figur denkt",
    text: "Ein 3D-Dorf, dessen Bewohner mit KI denken und miteinander sprechen, aus Matthew Bermans Test von Fable 5.2.",
  },
  "lighthouse-at-sunset": {
    title: "Ein fotorealistischer Leuchtturm im Sonnenuntergang",
    text: "Der übliche Leuchtturm-Prompt des Machers auf Fable 5.2: ein gestreifter Turm, ein kreisender Strahl und ruhige See.",
  },
  "abyssal-landing-page": {
    title: "Abyssal: eine Landingpage, die bis auf den Meeresgrund scrollt",
    text: "Scroll von einer mondbeschienenen Oberfläche vorbei an leuchtenden Quallen bis zu einer Laternenstadt und einem riesigen Auge im Dunkeln. Mit niedrigem Effort.",
  },
  "liquid-glass-type": {
    title: "Typo aus Glas, Bernstein und flüssigem Metall",
    text: "Tropfen aus Glas, Bernstein und flüssigem Metall drängen sich durch riesige Überschriften, jedes Material mit eigener Farbwelt.",
  },
  "car-configurator": {
    title: "Ein Auto-Konfigurator mit mittlerem Effort",
    text: "Umkreise eine rote Limousine, ändere Lack und Felgen und wechsle in eine Startansicht mit Lichtstreifen. Zwölf Minuten.",
  },
  "doomsday-earth": {
    title: "Doomsday Earth: acht Arten, den Planeten zu zerstören",
    text: "Die Erde mit echten NASA-Karten und Stadtlichtern und acht Arten, sie zu beenden, vom Asteroiden bis zu einem Gott, der sie wie einen Apfel isst. Im ersten Versuch.",
  },
  "virus-capsid": {
    title: "Eine Virushülle, die sich selbst zusammensetzt",
    text: "Eine HTML-Datei: 420 Proteinuntereinheiten bilden eine T=7-Hülle, erst 12 Pentamere, dann 60 Hexamere, dieselbe Geometrie wie bei echten Viren.",
  },
  "drained-ocean": {
    title: "Wie der Atlantik ohne Wasser aussieht",
    text: "Echte NOAA-Meeresbodendaten in einem 3D-Überflug, während der Ozean abläuft: Großbritannien verbindet sich in Sekunden mit Europa, dann taucht der Mittelatlantische Rücken auf.",
  },
  "deep-sea-dive": {
    title: "Ein Tauchgang von der Oberfläche auf 40 Meter",
    text: "Sonnenlicht, Fischschwärme und der Lampenstrahl ändern sich mit der Tiefe, mit Tiefenmesser am Rand. Alles Code.",
  },
  "pocket-black-hole": {
    title: "Ein Schwarzes Loch für die Hosentasche",
    text: "Gebeten um etwas, das viral geht, baute Fable ein interaktives Schwarzes Loch mit einer leuchtenden Scheibe, die der Gravitationslinseneffekt krümmt.",
  },
  "galaxy-dive": {
    title: "Flug in eine Spiralgalaxie",
    text: "Start außerhalb einer Spiralgalaxie und hinein, während ein Lichtjahr-Zähler herunterläuft. Etwa 20 Minuten Arbeit.",
  },
};

const labels: VideoLabels = {
  likes: "Likes",
  views: "Aufrufe",
  prompt: "Prompt anzeigen (so, wie der Macher ihn geteilt hat)",
  open: "Live öffnen",
  alt: (title) => `Standbild aus dem Video: ${title}`,
};

export const copy: GuideCopy = {
  meta: {
    title: "Videos mit Claude Fable 5.2: 32 Filme und 3D-Szenen aus Code",
    description:
      "Videos, gemacht mit Claude Fable 5.2: ein in Blender gerenderter Anime, Istanbul aus der Luft, ein goldenes Schiff über den Wolken, Landingpages und Wissenschaftsvisualisierungen. Kein Videomodell: Fable schreibt den Code. Mit Macher, Likes und Prompt.",
  },
  breadcrumb: "Videos mit Claude Fable 5.2",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-12" },
  hero: {
    kicker: "Blog · Claude Fable 5.2",
    title: "Videos mit Claude Fable 5.2: 32 Filme und 3D-Szenen, alle aus Code",
    lead: "Claude Fable 5.2 erzeugt Videos nicht wie ein Videomodell. Es schreibt Code in Three.js, WebGL, Remotion oder Blenders Python und rendert, was dieser Code zeichnet. Hier sind die 32 besten Ergebnisse aus den ersten Tagen, jeweils mit Macher, Zahlen und, wenn geteilt, dem Prompt.",
    cta: "Loslegen",
    secondary: "Ansehen",
    secondaryHref: "#films",
  },
  sections: [
    {
      kind: "text",
      id: "how-it-works",
      title: "Wie Fable 5.2 Video macht",
      text: [
        "Videogenerierung mit Fable 5.2 heißt: um eine Szene oder einen Kurzfilm bitten und Fable alles als Programm bauen lassen, die Modelle, die Kamera, das Licht und oft die Musik. Manche Macher rendern es als MP4, andere teilen die Szene als Seite, die man öffnen und erkunden kann.",
      ],
      points: [
        "0kncns 90-Sekunden-Anime wurde Einstellung für Einstellung in Blender per Python gebaut, mit einem in numpy geschriebenen Soundtrack.",
        "Marcels goldenes Schiff ist reines Three.js, ohne Blender und ohne externe Modelle: etwa 38 Minuten und 17 $ mit mittlerem Effort.",
        "Peter Gostevs Istanbul, das beliebteste von allen, lief auf Fable 5.2 Max für etwa 46 $.",
        "Dantes UFO-Film entstand aus einem Satz, mit three.js und Remotion, ohne Texturen oder Archivsounds.",
      ],
    },
    {
      kind: "steps",
      id: "make-one",
      title: "So machst du eines in Claude Code",
      steps: [
        {
          title: "Starte Claude Code mit Fable 5.2",
          text: "Fable 5.2 braucht einen Pro-Plan oder höher oder API-Zugang. Für eine Szene als teilbare Seite reicht ein leerer Ordner; für Blender installier Blender, damit Fable es per Python steuern kann.",
          code: "mkdir my-film && cd my-film\nclaude --model claude-fable-5-2",
        },
        {
          title: "Beschreib die Szene oder den Film Einstellung für Einstellung",
          text: "Ein Satz reicht (\"make me a 30 second video of a UFO visiting Area 51 and greeting humans, ultra detailed, cinematic lighting\"); lange, präzise Prompts wie der zu Paris 1888 unten geben mehr Kontrolle.",
        },
        {
          title: "Lass es rendern oder live laufen",
          text: "Bitte um ein MP4 mit fester Auflösung und Bildrate oder um eine einzige HTML-Seite, die sich im Browser öffnen und teilen lässt.",
        },
      ],
    },
    ...videoSections(
      "de",
      text,
      labels,
      {
        film: { title: "Kurzfilme und Animation", text: "Kurze Filme mit Kamera, Geschichte oder Soundtrack." },
        world: { title: "3D-Welten und Dioramen", text: "Städte, Schiffe und Inseln; einige sind Live-Seiten zum Erkunden." },
        web: { title: "Websites und interaktive Seiten", text: "Landingpages und Produktseiten, die beim Scrollen oder Klicken animieren." },
        science: { title: "Wissenschaft, Weltraum und Daten", text: "Galaxien, Schwarze Löcher, Viren und der Meeresgrund, oft aus echten Daten." },
      },
      "Original-Post ansehen",
    ),
    {
      kind: "text",
      id: "more",
      title: "Mehr von Claude",
      text: [
        "Die vollständige Liste mit drei Standbildern pro Video steht auf GitHub: [awesome-claude-fable-videos](https://github.com/ummydev/awesome-claude-fable-videos). Spiele mit Fable 5.2 findest du unter [Spiele mit Claude Fable 5.2](/blog/claude-fable-5-2-games), Launch-Filme und Motion Graphics mit Opus 5.5 unter [Motion Graphics mit Opus 5.5](/blog/opus-5-5-motion-graphics). Was sich am Modell geändert hat, steht in unserem [Leitfaden zu Claude Fable 5.2](/blog/claude-fable-5-2).",
      ],
    },
  ],
  howTo: { section: "make-one", name: "Ein Video mit Claude Fable 5.2 in Claude Code machen" },
  mid: {
    title: "Fable 5.2 in einem festen Job?",
    text: "Crewmark-Mitarbeiter laufen auf deinem eigenen Claude Code, wachen mit einem Heartbeat auf und nehmen sich das nächste Ticket vom Board.",
    button: "Loslegen",
  },
  faq: {
    title: "Häufige Fragen",
    items: [
      {
        q: "Kann Claude Fable 5.2 Videos generieren?",
        a: "Nicht so wie ein Videomodell. Es schreibt Code, der jedes Bild zeichnet, in Three.js, WebGL, Remotion oder Blender, und rendert ihn als MP4 oder lässt ihn live im Browser laufen. Darum sind Text, Logos und Details gestochen scharf.",
      },
      {
        q: "Welche Werkzeuge nutzt es?",
        a: "Am häufigsten Three.js oder WebGL in einer einzigen HTML-Datei. Andere nutzten Remotion für filmartige Schnitte, Blender per Python und Python oder numpy für die Musik.",
      },
      {
        q: "Wie lange dauert es und was kostet es?",
        a: "Von etwa 20 Minuten und 7 $ (der Ramen-Stand in Tokio) bis zu 1,5 Stunden und 35 Millionen Tokens (das Piratenschiff) oder etwa 46 $ auf Fable 5.2 Max (Istanbul).",
      },
      {
        q: "Kann ich diese Szenen selbst öffnen?",
        a: "Vier haben eine Live-Seite auf ihrer Karte: das goldene Schiff, das Piratenschiff, das Schwarze Loch und die Galaxie. Der Rest wurde als Video geteilt.",
      },
      {
        q: "Fable 5.2 oder Opus 5.5 für Video?",
        a: "Beide werden genutzt. In dem, was gepostet wurde, kam Fable 5.2 vor allem für 3D-Welten und Kurzfilme zum Einsatz und Opus 5.5 für Launch-Filme und Motion Graphics, die wir unter [Motion Graphics mit Opus 5.5](/blog/opus-5-5-motion-graphics) gesammelt haben.",
      },
    ],
  },
  cta: {
    title: "Gib dem neuesten Modell einen festen Job.",
    text: "Crewmark macht aus Claude-Code- und Codex-Sessions KI-Mitarbeiter mit Rolle, Zielen, Arbeitszeiten und Heartbeat.",
    button: "Loslegen",
  },
  checked: "Jeder Post und Prompt am 11. und 12. November 2026 auf X und Xiaohongshu geprüft; Likes und Aufrufe sind die Zahlen von diesen Tagen.",
  disclaimer:
    "Die Videos und Prompts gehören ihren Machern; jede Karte verlinkt auf den Original-Post. Crewmark ist ein unabhängiges Produkt, nicht mit Anthropic verbunden und nicht von Anthropic unterstützt. Claude, Claude Fable, Claude Opus und Claude Code sind Marken von Anthropic.",
};
