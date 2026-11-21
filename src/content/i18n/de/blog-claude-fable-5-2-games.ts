import type { GuideCopy } from "@/components/landing/guide-article";
import { gameSections, type GameLabels, type GameText } from "@/content/blog/claude-fable-5-2-games";

// de translation of /blog/claude-fable-5-2-games; the English master is src/content/blog/claude-fable-5-2-games.ts.
// Game names and prompts are not translated.

const text: GameText = {
  saltline:
    "Ein Shooter in einem verregneten Containerhafen, in etwa acht Stunden ganz ohne menschliches Feedback gebaut: jedes Modell, jede Textur und jeder Sound von Grund auf, für rund 550 $ zu API-Preisen. Der Prompt war im Kern „bau mir auch noch einen FPS“.",
  "what-the-water-keeps":
    "Eine ruhige Bootsfahrt im Laternenlicht durch acht Traumwelten, von einer versunkenen Stadt bis zu einem verschneiten Wald, in Three.js. Der Macher nutzte Tripo 3D für die Modelle und Suno für die Spielmusik; Fable komponierte die Musik des Trailers.",
  "oil-paint": "Spaziere durch einen Herbstwald, der wie handgemalt aussieht: rund 1,5 Millionen Pinselstriche pro Bild bei 200 fps in einem Browser-Tab, gebaut in unter einer Stunde. Der Code ist offen.",
  "starry-night-rider": "Fahr mit dem Rad durch das Dorf aus Van Goghs Sternennacht, Himmel, Häuser und Pflaster in wirbelnden Pinselstrichen.",
  "mirror-earth": "Der ganze Planet aus Voxeln: geh überallhin, zerstör alles, mit Wetter, das live der echten Erde folgt. Gebaut auf Spawn.",
  "i-would-have-gotten-away-with-it":
    "Ein umgedrehtes Scooby-Doo von Ethan Mollick: Du bist der Bösewicht im Spukhaus und musst die neugierigen Kinder verjagen. Trailer, Musik und Sound hat Fable ebenfalls gemacht.",
  "gilt-and-gutter": "Ein stylischer 1-gegen-1-Shooter in einer vergoldeten Spielhalle, in der Schüsse in deiner eigenen Farbe deine Waffe aufladen. Figurenmodelle von Tripo3D, Rigging und Animation von Fable.",
  tidewright: "Segle über ein stürmisches Nachtmeer und entzünde die Leuchttürme der Thrumming-Inseln neu.",
  "the-clockmakers-heart": "Weck einen schlafenden Uhrwerk-Riesen, ein Zahnradrätsel nach dem anderen; ein erster Entwurf von Fable 5.2.",
  "turbo-tails": "Ein 3D-Kartrennen mit sechs Tierfahrern, Drifts, Rampen und Items, spielbar mit Freunden. Drei Prompts insgesamt; die Musik kam von Suno, Claude hat sie eingebaut.",
  rifts: "Ein Helden-Brawler im Overwatch-Stil, 3 gegen 3, mit 12 Helden, Rissen zwischen Welten und Bosskämpfen, kostenlos im Browser auf Spawn.",
  "memory-of-teresa-the-storm-spire": "Ein düsterer Bosskampf in kerzenbeleuchteten Steinhallen und auf einer regengepeitschten Kathedralenspitze, im ersten Anlauf gebaut und kostenlos auf Spawn.",
  "aidens-revenge": "Ein Pixel-Art-Beat-'em-up für 1 bis 4 Spieler, ausgedacht und gezeichnet von einem Kind namens Aiden, und mit Fable 5.2 über Nacht zum Spiel geworden.",
  "hogwarts-royale": "Ein Battle Royale in einer Zauberschule auf Besen, mit Burghof und verzaubertem Wald, aus einem einzeiligen Prompt.",
  "party-royale": "Ein Partyspiel im Fall-Guys-Stil für 60 Spieler, mit falschen Türen, drehenden Plattformen und Multiplayer, im ersten Anlauf.",
  fablecraft: "Eine unendliche Voxel-Sandbox in einer einzigen HTML-Datei: Blöcke setzen und abbauen, mit 4K-Schatten, Spiegelungen und 10 Chunks Sichtweite. Zwei Prompts mit extra hohem Effort.",
  "street-brawler-ii": "Ein Arcade-Prügelspiel in Pixel-Art mit mehreren Figuren, Spezialattacken, Kombos und Stages, im ersten Anlauf in unter 35 Minuten erzeugt.",
  "toy-room-adventure": "Schrumpf auf Spielzeuggröße und erkunde ein sonniges Kinderzimmer. Fable lehnte es ab, die Figuren aus dem Film zu kopieren, und baute stattdessen den Look nach: das Licht, den Staub und jedes Detail in Spielzeughöhe.",
  "tokyo-night-gp": "Ein three.js-Rennen durch das nächtliche Tokio auf nassem, spiegelndem Asphalt, fünf Gegner, drei Runden: ein Prompt, 30 Minuten, etwa 15 % des Wochenlimits eines 20-$-Plans.",
  "samurai-duel": "Zwei Samurai unter einem roten Mond, mit Lebensbalken, kritischen Treffern und Blut-Effekten, aus einem Prompt mit hohem Effort.",
  "the-clockmakers-mansion": "Ein Roblox-Horrorspiel: Fable baute das Spukhaus über MCP in Roblox Studio und schnitt den Trailer selbst.",
  "neon-coast": "Eine Strandstadt im GTA-Stil im rosa Sonnenuntergang: aussteigen und laufen, ein Auto nehmen, mit Minikarte und Fahndungssternen. Ein Prompt.",
  "mist-locked-gate":
    "Ein Wuxia-Actionspiel in einem verschneiten, laternenbeleuchteten Bergschrein, von Claude Fable 5.2 an einem Nachmittag als einzelne HTML-Datei gebaut.",
  "the-waking-river":
    "Fahre mit einem goldenen Boot durch fünf schlafende Welten, die erwachen, während du vorbeifährst. Der Macher hat den ganzen Prompt als PDF geteilt.",
  "cayley":
    "Ein Flugsimulator mit echter Flügelphysik, neun echten Flugzeugen und dem ganzen Planeten in 3D gestreamt, über Nacht gebaut. Open Source.",
  "maad-maxxing":
    "Autokämpfe im Mad-Max-Stil in der Wüste, mit three.js und WebGPU, komplett in Code geschrieben, ohne Modelle oder Texturen.",
  "lumenvale":
    "Eine sanfte Open-World-Fantasy: Erwecke die sieben schlafenden Schreine eines Blumentals. Fable hat das Spiel, die Musik und den Trailer gemacht.",
  "danfo-run":
    "Fahr einen gelben Danfo durch den Verkehr von Lagos, nimm Fahrgäste mit und kletter in der Live-Rangliste nach oben. Älter als Fable 5.2: gebaut mit Claude als Entwicklungspartner, Three.js für das 3D und GPT für die Grafik.",
};

const labels: GameLabels = {
  likes: "Likes",
  views: "Aufrufe",
  prompt: "Prompt anzeigen (so, wie der Macher ihn geteilt hat)",
  play: "Im Browser spielen",
  trailer: "Trailer und Screenshots",
  source: "Quellcode",
  alt: (name) => `${name}: Titelbild aus Screenshots des Spiels`,
};

export const copy: GuideCopy = {
  meta: {
    title: "Spiele mit Claude Fable 5.2: 28 zum Spielen oder Ansehen",
    description:
      "Spiele, gebaut mit Claude Fable 5.2: ein Shooter mit AAA-Optik, eine Radtour durch einen Van Gogh, eine Voxel-Erde, Kartrennen und Bosskämpfe, die meisten im Browser spielbar. Jeweils mit Macher, Spiel-Link, Likes und, wenn geteilt, dem Prompt.",
  },
  breadcrumb: "Spiele mit Claude Fable 5.2",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-12" },
  hero: {
    kicker: "Blog · Claude Fable 5.2",
    title: "Spiele mit Claude Fable 5.2: 28 Spiele aus der Community, und wie sie entstanden",
    lead: "In den Tagen nach dem Release von Claude Fable 5.2 haben viele gepostet, welche Spiele es gebaut hat: einen Shooter im Regen, eine Bootsfahrt durch Traumwelten, eine Voxel-Erde, Kartrennen und Bosskämpfe. Wir haben jeden Post geöffnet, die Links geprüft und die 28 schönsten behalten. 20 laufen direkt im Browser.",
    cta: "Loslegen",
    secondary: "Jetzt spielen",
    secondaryHref: "#play-now",
  },
  sections: [
    {
      kind: "text",
      id: "what-it-builds",
      title: "Was Fable 5.2 baut",
      text: [
        "Die meisten sind Browserspiele in JavaScript und Three.js, oft eine einzige HTML-Datei, die man öffnet und spielt. Andere entstehen auf Plattformen für KI-gebaute Spiele wie Spawn oder in Roblox Studio über MCP. Fable schreibt den Code, die Shader und oft auch die Musik und den Trailer.",
      ],
      points: [
        "Felix Riesebergs Saltline dauerte etwa acht Stunden ohne menschliches Feedback; jedes Modell, jede Textur und jeder Sound entstand von Grund auf.",
        "Fablecraft ist eine unendliche Voxel-Sandbox in einer HTML-Datei, aus zwei Prompts: \"make minecraft single file\" und \"eh looks basic, make it hdr\".",
        "Peter Yangs Turbo Tails bekam Touch-Steuerung und Multiplayer durch zwei kurze Nachfragen.",
        "Manche Macher kombinierten andere Werkzeuge: Tripo 3D für Figuren, Suno für Musik.",
      ],
    },
    {
      kind: "steps",
      id: "make-one",
      title: "So baust du ein Spiel mit Fable 5.2 in Claude Code",
      steps: [
        {
          title: "Starte Claude Code mit Fable 5.2 in einem leeren Ordner",
          text: "Fable 5.2 braucht einen Pro-Plan oder höher oder API-Zugang. Mehr Effort dauert länger und sieht meist besser aus.",
          code: "mkdir my-game && cd my-game\nclaude --model claude-fable-5-2",
        },
        {
          title: "Beschreib das Spiel in ein, zwei Sätzen",
          text: "Kurze Prompts reichen: Matt Shumers Hogwarts Royale entstand aus einer Zeile. Bitte um eine einzige HTML-Datei mit Three.js, wenn du es sofort öffnen und teilen willst.",
          code: "Create a three.js third-person game in a single HTML file: a toy-sized hero exploring a sunlit kids' bedroom, jumping across furniture to find hidden toys. Make it look polished.",
        },
        {
          title: "Spiel es und bitte um eine Änderung nach der anderen",
          text: "So ist Turbo Tails gewachsen: erst „mach, dass es auf dem Handy läuft“ (Let's make mobile work please), dann „füg Multiplayer auf die einfachste Art hinzu“ (Ok let's add multiplayer the simplest way).",
        },
        {
          title: "Teil es",
          text: "Stell den Ordner auf einen statischen Host wie Vercel oder Netlify, oder veröffentliche es als Claude-Artifact, wie Saltline und Tidewright.",
        },
      ],
    },
    ...gameSections(
      "de",
      text,
      labels,
      {
        playable: { title: "Spiele, die du jetzt spielen kannst", text: "Sie laufen im Browser. Jede Karte führt zum Spiel, zum Post des Machers und zu einer Seite mit Trailer und Screenshots." },
        video: { title: "Spiele, die als Video geteilt wurden", text: "Noch keine öffentliche Version: Sieh dir das Gameplay im Post des Machers an." },
      },
      "Original-Post",
    ),
    {
      kind: "text",
      id: "more",
      title: "Mehr von Claude",
      text: [
        "Die vollständige Liste mit Screenshots und Prompts steht auf GitHub: [awesome-claude-fable-games](https://github.com/ummydev/awesome-claude-fable-games). Für Kurzfilme und 3D-Welten siehe [awesome-claude-fable-videos](https://github.com/ummydev/awesome-claude-fable-videos), für Launch-Filme mit Opus 5.5 [Motion Graphics mit Opus 5.5](/blog/opus-5-5-motion-graphics). Was sich am Modell selbst geändert hat, steht in unserem [Leitfaden zu Claude Fable 5.2](/blog/claude-fable-5-2).",
      ],
    },
  ],
  howTo: { section: "make-one", name: "Ein Browserspiel mit Claude Fable 5.2 in Claude Code bauen" },
  mid: {
    title: "Soll Fable 5.2 jeden Tag ein Feature liefern?",
    text: "Crewmark-Mitarbeiter laufen auf deinem eigenen Claude Code, wachen mit einem Heartbeat auf und nehmen sich das nächste Ticket vom Board, auch bei Spielen.",
    button: "Loslegen",
  },
  faq: {
    title: "Häufige Fragen",
    items: [
      {
        q: "Kann Claude Fable 5.2 Spiele bauen?",
        a: "Ja. Es schreibt spielbare Browserspiele in JavaScript und Three.js, oft in einer einzigen HTML-Datei, und kann über MCP in Roblox Studio bauen. Die Macher berichten von Ein-Prompt-Spielen in 30 Minuten bis zu einem achtstündigen Shooter mit komplett selbst erzeugten Assets.",
      },
      {
        q: "Wo kann ich Spiele von Claude Fable 5.2 spielen?",
        a: "20 der 28 Spiele oben laufen im Browser: auf den Seiten der Macher, als Claude-Artifacts oder auf Spawn. Die übrigen wurden als Gameplay-Video geteilt.",
      },
      {
        q: "Wie lange dauert es und was kostet es?",
        a: "Tokyo Night GP brauchte einen Prompt, 30 Minuten und etwa 15 % des Wochenlimits eines 20-$-Plans. Street Brawler II unter 35 Minuten. Saltline lief etwa acht Stunden, rund 550 $ zu API-Preisen.",
      },
      {
        q: "Kopiert es Figuren aus Filmen und Spielen?",
        a: "Nicht immer. Gebeten um ein Toy-Story-Spiel, lehnte Fable die geschützten Figuren ab und baute nur den Stil nach. Fan-Mashups wie Hogwarts Royale sind Projekte der Macher.",
      },
      {
        q: "Sind die Prompts öffentlich?",
        a: "Fünf Macher haben ihren geteilt, wir zitieren sie auf den Karten. Die meisten waren kurz: ein, zwei Sätze.",
      },
    ],
  },
  cta: {
    title: "Gib dem neuesten Modell einen festen Job.",
    text: "Crewmark macht aus Claude-Code- und Codex-Sessions KI-Mitarbeiter mit Rolle, Zielen, Arbeitszeiten und Heartbeat.",
    button: "Loslegen",
  },
  checked: "Jeder Post, Link und Prompt am 11. November 2026 geprüft; Likes und Aufrufe sind die Zahlen von diesem Tag.",
  disclaimer:
    "Die Spiele, Titelbilder und Prompts gehören ihren Machern; jede Karte verlinkt auf den Original-Post. Die Titelbilder wurden aus den Screenshots des jeweiligen Spiels erzeugt. Crewmark ist ein unabhängiges Produkt, nicht mit Anthropic verbunden und nicht von Anthropic unterstützt. Claude, Claude Fable und Claude Code sind Marken von Anthropic; andere Spiele und Figuren gehören ihren Inhabern.",
};
