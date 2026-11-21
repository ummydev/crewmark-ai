import type { GuideCopy } from "@/components/landing/guide-article";
import { motionSections, type MotionLabels, type MotionText } from "@/content/blog/opus-5-5-motion-graphics";

// de translation of /blog/opus-5-5-motion-graphics; the English master is src/content/blog/opus-5-5-motion-graphics.ts.
// Prompts stay in the makers' own words and are not translated.

const basePrompt = "make a dynamic 15-second motion graphics video that shows what an incredible motion designer you are";

const text: MotionText = {
  "claude-motion-reel": {
    title: "Claude, Motion Designer: eine 15-Sekunden-Reel aus einem Satz",
    text: "Eine Reel im Portfolio-Stil: Partikel-Lettering, Easing-Kurven unter „Timing is everything“, flüssige Typo und eine orange Endkarte mit 899 Frames, 8 Szenen und 1 Keyframe. Aus einem einzigen chinesischen Satz.",
  },
  "pelican-riding-a-bicycle": {
    title: "Ein Pelikan auf dem Fahrrad, richtig gemacht",
    text: "Der SVG-Pelikane müde, bat der Macher um den detailliertesten, der möglich ist. Opus 5.5 schrieb alles in Claude Code: eine Blender-Szene, gerendert mit Cycles, einen eigenen Wolken-Renderer in Rust für einen 12K-Himmel, rund 24.000 Federn, ein Fahrrad mit 36 Speichen und 92 Kettengliedern, dazu die Musik. Keine fertigen Modelle, Texturen oder Musik.",
  },
  "inference-startup-launch": {
    title: "Muda: ein Launch-Video für ein Inferenz-Startup, in einer Minute für etwa 2 $",
    text: "„Inferenz ist meistens Warten. Nicht mehr.“ Request-Raster leuchten auf, während der Durchsatz steigt, dann erscheint die Marke. Kein Videomodell, keine Zusatzbibliotheken: Claude hat eine Webseite animiert und sie mit Playwright und ffmpeg aufgenommen.",
  },
  "typingmind-launch": {
    title: "TypingMind: ein Prompt statt vier Wochen mit Freelancern",
    text: "Opus las die Produktseiten, schrieb das Skript und animierte ein einziges Chatfenster, das mehrere Modelle gleichzeitig fragt. Ein Prompt und fast eine Stunde in Claude Code, ohne installierte Skills.",
  },
  "notion-launch-it-picked": {
    title: "Ein Notion-Launch-Video, das Produkt hat Opus selbst gewählt",
    text: "Die Vorgabe war nur, ein bekanntes SaaS zu wählen und ein professionelles Launch-Video zu machen: Opus nahm Notion, holte echte Assets aus dem Netz und schnitt ein ausgefeiltes Feature-Video.",
  },
  "makermap-one-shape": {
    title: "MakerMap: eine einzige Form verwandelt sich durch das ganze Produkt",
    text: "Zwanzig Sekunden, in denen eine Form zur Anmeldung, zur Kartennadel, zu 3.393 Makern auf einem Globus, zu Matches und zur Suche wird. Federn, Cursor und Bewegungsunschärfe sind deterministische Mathematik in einer einzigen HTML-Datei.",
  },
  "distilbook-oppenheimer": {
    title: "Distilbook, vertont wie Oppenheimer",
    text: "Zwei Kapitel, Spaltung und Fusion: Tausende goldene Seiten formen Schlagzeilen, ein Countdown, eine Explosion, zu Musik, die Opus nach dem Filmthema selbst komponiert hat.",
  },
  "distilbook-film-strips": {
    title: "Distilbook: Filmstreifen, die sich zu einem Tunnel drehen",
    text: "Ein Regenbogen aus Filmstreifen zieht über den Bildschirm und windet sich zu einem leuchtenden Tunnel, im Stil eines Referenzvideos. Die finale Fassung hat keine manuellen Änderungen.",
  },
  "motionsites-1m-visitors": {
    title: "MotionSites knackt eine Million Besucher im Monat",
    text: "Ein Meilenstein-Video mit einem Zähler, der auf eine Million rast. Im ersten Anlauf in vier Minuten, mit einer einzigen Änderung.",
  },
  "famewall-mascot": {
    title: "Famewall: Es fand das Maskottchen und baute es ein",
    text: "Ein Launch-Video für ein Testimonial-Tool. Opus durchsuchte die SVGs der Website, fand das Maskottchen und brachte es ungefragt ins Video.",
  },
  "lumail-pricing": {
    title: "Lumail: E-Mail-Marketing, das dein KI-Agent bedienen kann",
    text: "Punktraster aus Kontakten, die nie eine Mail öffnen, und eine Rechnung, die immer weiter steigt, dann das Angebot. In unter zehn Minuten, ohne Skill, nur mit dem Prompt.",
  },
  "founder-page-launch": {
    title: "founder.page: alle Funktionen in 20 Sekunden",
    text: "Ein schnelles, markentreues Launch-Video mit Umsatz- und Besucherzählern. Im ersten Anlauf in Claude Code.",
  },
  "tanstack-ai-launch": {
    title: "TanStack AI: ein Launch-Film für Entwickler",
    text: "Gemacht mit Opus 5.5 und Remotion aus einem langen Briefing für einen Premium-Film, mit dem man eine Keynote eröffnen könnte.",
  },
  "sahi-trading-terminal": {
    title: "Ein Trading-Terminal, das bis zu einem Punkt im All herauszoomt",
    text: "Von einem einzelnen Punkt zu Charts, Positionen und einer Optionskette, hinaus, bis der Desktop ein Punkt im All ist, und wieder hinein auf ein Smartphone. Im ersten Anlauf.",
  },
  "aisa-one-key": {
    title: "AIsa: Tausende API-Schlüssel werden zu einem",
    text: "Ein Schwarm aus Schlüsselnamen zieht sich zu einem einzigen orangefarbenen Schlüssel zusammen. Ein Prompt, im ersten Anlauf.",
  },
  "flowdrive-showreel": {
    title: "Flowdrive: Streaming in 4K, überallhin ausgeliefert",
    text: "Ein dunkler, editorialer Film für einen Datei-Versanddienst: geschichtetes Gelände, ein leuchtender Punktglobus, eine eigene Domain. Ohne Skills; mit Ton.",
  },
  "matra-apple-style": {
    title: "Matra: ein Film im Apple-Stil für eine App",
    text: "Dreißig Sekunden in Remotion und React: SF-Pro-Schrift, ein Titan-iPhone, Untertitel Wort für Wort synchron zu einer echten Stimme, und Musik.",
  },
  "no-hands-labs": {
    title: "No Hands Labs: Firmen, die sich selbst aufbauen",
    text: "Limettengrüne Schrift auf Schwarz und eine 95 % in Punktmatrix für ein Studio von KI-geführten Firmen.",
  },
  "pen-designs-launch": {
    title: "norilu: Gib die Arbeit ab, die immer wiederkommt",
    text: "Opus las die Entwürfe des Autors über den pen.dev-MCP und machte einen ruhigen Launch-Film. Ein zweiter, sehr direkter Prompt verbesserte Musik und Tempo deutlich.",
  },
  "bento-surf": {
    title: "Bento.surf: ein 40-Sekunden-Produktfilm",
    text: "Ein verspielter, mobil gedachter Film für eine Link-in-Bio-Seite, aus einem einzigen Prompt.",
  },
  quickemailverify: {
    title: "QuickEmailVerify: Bounces stoppen, bevor du sendest",
    text: "Ein Film im SaaS-Stil für einen E-Mail-Prüfer, vom Eintippen einer Adresse bis zur bereinigten Liste. Opus 5.5 mit hohem Effort.",
  },
  "orbe-everyday-spending": {
    title: "Orbe: Alltagsausgaben in isometrischem 3D",
    text: "Ein Hochformat-Film für eine Ausgaben-App: Supermarkt, Tankstelle und Restaurant, jeweils mit einem erfassten Kauf. Laut Autor brauchte es mehr als einen Prompt.",
  },
  "winkz-pitch": {
    title: "Ein Pitch-Film für einen Amazon-Großhändler",
    text: "Fünfzehn Sekunden, um Marken zu überzeugen, mit Zählern für Preisschutz und Vorabkauf.",
  },
  "queryglow-launch": {
    title: "QueryGlow: ein Launch-Film im Stil von Anthropic",
    text: "Ein ruhiger Film mit Serifenschrift für ein selbst gehostetes Datenbank-Tool; der Autor bat auf Deutsch um etwas „à la Anthropic“ und ergänzte am Ende Musik.",
  },
  "opus-1984-ad": {
    title: "Eine Werbung für Opus 5.5 nach Apples „1984“",
    text: "Eine laufende Gestalt mit Hammer, Reihen grauer Figuren und ein riesiges Gesicht auf der Leinwand, alles nur aus Code. Opus prüfte sogar die Lautstärke.",
  },
  "paybox-brand-sting": {
    title: "PayBox: ein Marken-Sting aus nur einem Logo",
    text: "Der Agent las das Logo, fand die Firma, schrieb das Szenario und baute in einem Durchgang einen zehnsekündigen Sting.",
  },
  "paymentform-logo-reveal": {
    title: "PaymentForm: ein Logo aus Low-Poly-Splittern",
    text: "Ein Drahtgitter-Logo füllt sich Splitter für Splitter, das App-Icon landet und der Name tippt sich ein, mit Ton.",
  },
  "opus-retro-launch": {
    title: "Ein retrofuturistischer Launch-Film für Opus 5.5",
    text: "Ein leuchtend gestreifter Kopf mit Filmkorn und CRT-Effekt, aus einem Prompt und einem Stil-Referenzbild.",
  },
  "psychedelic-showreel": {
    title: "Phosphene: eine psychedelische Bewegungsstudie",
    text: "Ein riesiges Auge, drehende Tunnel und Kaleidoskope, Bild und Ton von Opus mit extra hohem Effort: 90 Minuten Rendern, insgesamt 14 $.",
  },
  "poster-breaks-out": {
    title: "Ein Plakat, das aus seinem eigenen Rahmen bricht",
    text: "Große rote und blaue Lettern durchbrechen ihr Plakat. Opus komponierte den Soundtrack und legte jeden Schlag auf den Beat.",
  },
  "i-can": {
    title: "I CAN: verwischen, loopen, rendern, schwärmen, Licht biegen",
    text: "Fette Titelkarten, die genau tun, was draufsteht, aus einem einzeiligen Prompt.",
  },
  "light-speed-earth": {
    title: "Eine Sekunde auf der Erde",
    text: "Ganz ohne Vorgabe wählte Opus sein Thema selbst: alles, was in einer Sekunde passiert, vom Licht, das die Erde umrundet, bis zu vier Babys, die geboren werden.",
  },
  "no-samples-showreel": {
    title: "Ein Showreel mit Musik von Grund auf",
    text: "Der Autor kennt sich mit Motion Design nicht aus. Opus schrieb den Code für jedes Bild und synthetisierte die Musik, ohne Samples, in Cursor.",
  },
  "easing-explained": {
    title: "I make things move: Motion Designer Claude",
    text: "Typo, die sich dreht und einrastet, eine Lektion zu Easing-Kurven und eine Endkarte, aus einem einzeiligen chinesischen Prompt.",
  },
  "portfolio-film": {
    title: "Das Portfolio eines Designers als Film",
    text: "Opus ging jeden Screen des Portfolios und die Open-Source-Arbeit des Autors durch und machte im ersten Anlauf eine starke Reel.",
  },
  "it-thinks-in-curves": {
    title: "Rhythmus, Typo, Loops: es denkt in Kurven",
    text: "Quadratische Loops aus farbiger Blocktypo und eine live gezeichnete Bézierkurve, zu Opus' Aussage, es schreibe Mathematik statt Keyframes.",
  },
  "who-are-you-opus": {
    title: "Hi, ich bin Claude: Opus 5.5 stellt sich vor",
    text: "Zehn Sekunden Typo: „Ich lese jedes Wort“, „Ich denke es durch“, „Ich sag es geradeheraus“, „Ich baue mit dir“.",
  },
  "madhav-about-me": {
    title: "Ein Zehn-Sekunden-Film über die Person, die fragt",
    text: "Gebeten um ein Video über alles, was es über den Autor wusste, machte Opus einen Partikelfilm über dessen Arbeit.",
  },
  "recursion-nine-styles": {
    title: "Rekursion, erklärt in neun Genres",
    text: "Jede Erklärung wechselt in einen anderen Stil, vom Retro-Videospiel bis zum Film noir. Ein echter One-Shot: Szenen in React und SVG, Musik und Sound in Python synthetisiert.",
  },
  "negroni-recipe": {
    title: "Ein Negroni, Schritt für Schritt",
    text: "Ein Rezept-Erklärvideo, das das Glas Zutat für Zutat füllt, in HTML aus einem einzigen Bild gerendert.",
  },
  "history-of-ai": {
    title: "83 Jahre KI in unter drei Minuten",
    text: "Recherche, Skript, Animation und echte Tonaufnahmen: Alle 5.160 Bilder hat Claude aus einem einzigen Prompt programmiert.",
  },
  "how-llms-work-fable": {
    title: "Wie LLMs funktionieren, als Motion Graphic",
    text: "Tokens, Embeddings, Attention und Transformer-Schichten, jeweils in einer eigenen Szene, aus Matthew Bermans Test von Fable 5.2.",
  },
  "white-russian-recipe": {
    title: "Ein White Russian im handgezeichneten Stil",
    text: "Aus einer Skizze und einem Prompt etwa 25 Minuten später ein 1080p-MP4: eine einzige HTML-Datei aus SVG und reinem JavaScript, ohne Animationsbibliothek.",
  },
};

const labels: MotionLabels = {
  likes: "Likes",
  views: "Aufrufe",
  prompt: "Prompt anzeigen (Original)",
  alt: (title) => `Standbild aus dem Video: ${title}`,
};

export const copy: GuideCopy = {
  meta: {
    title: "Motion Graphics mit Opus 5.5: 43 Beispiele und ihre Prompts",
    description:
      "Motion-Graphics-Videos, gemacht mit Claude Opus 5.5: Launch-Filme, Logo-Animationen, kinetische Typo und Erklärvideos, jeweils mit dem Prompt der Macher, Likes und Aufrufen. Dazu der Prompt, den alle kopiert haben, und wie du eines in Claude Code machst.",
  },
  breadcrumb: "Motion Graphics mit Opus 5.5",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-12" },
  hero: {
    kicker: "Blog · Claude Opus 5.5",
    title: "Motion Graphics mit Opus 5.5: 43 Beispiele und die Prompts dahinter",
    lead: "Seit Claude Opus 5.5 erschienen ist, lassen viele es Motion Graphics bauen und posten das Ergebnis: Launch-Filme, Logo-Animationen, kinetische Typo, Rezept-Erklärvideos. Opus schreibt jedes davon als Code und rendert es als MP4. Wir haben alle angesehen und die 43 besten ausgewählt, jeweils mit dem Prompt der Macher.",
    cta: "Loslegen",
    secondary: "Beispiele ansehen",
    secondaryHref: "#launch-films",
  },
  sections: [
    {
      kind: "text",
      id: "how-it-works",
      title: "Wie Claude ein Motion-Graphics-Video macht",
      text: [
        "Ein Videomodell ist nicht beteiligt. Opus schreibt die Animation als Code (eine HTML-Seite mit SVG und JavaScript, ein React- oder [Remotion](https://www.remotion.dev)-Projekt, manchmal Three.js), lässt einen Headless-Browser Bild für Bild durchlaufen und gibt die Bilder an ffmpeg. Musik und Soundeffekte werden ebenfalls in Code synthetisiert.",
        "Weil jedes Bild eine Funktion der Zeit ist, schließen Loops perfekt und der Ton sitzt auf dem exakten Frame. Und der Text bleibt scharf und echt: Produktnamen, Preise und UI-Texte sind richtig geschrieben.",
      ],
      points: [
        "Das Launch-Video von Deedy Das kam mit JavaScript, Playwright und ffmpeg aus und kostete etwa 2 $ an API-Gebühren.",
        "Ethan Mollicks Rekursionsvideo zeichnet jede Szene in React und SVG und synthetisiert die Musik in Python.",
        "Das Cocktail-Erklärvideo von Sarutobi Sasuke ist eine einzige HTML-Datei aus SVG und reinem JavaScript, ohne Animationsbibliothek, fertig in etwa 25 Minuten.",
      ],
    },
    {
      kind: "steps",
      id: "make-one",
      title: "So machst du eines mit Claude Code",
      steps: [
        {
          title: "Starte Claude Code mit Opus 5.5 in einem leeren Ordner",
          text: "Mehrere Macher sagen, sie hätten keine Skills oder Plugins installiert: Opus wählt seine Werkzeuge selbst und installiert, was es braucht.",
          code: "mkdir launch-film && cd launch-film\nclaude --model claude-opus-5-5",
        },
        {
          title: "Gib ihm den Prompt und dein Produkt",
          text: "Häng deine Website an, damit es die Seiten liest und das Skript selbst schreibt. Ein Logo, ein Screenshot oder ein Referenzvideo helfen, deinen Look zu treffen.",
          code: `${basePrompt} for https://your-site.com. Visit the pages first to learn about the product, then write the video content yourself. Go all out.`,
        },
        {
          title: "Lass es rendern",
          text: "Rechne je nach Länge und Effort mit ein paar Minuten bis anderthalb Stunden. Bitte es, dir zu sagen, wo das MP4 gespeichert ist.",
        },
        {
          title: "Schau es an und sag, was nicht passt",
          text: "Sacha Arbonels erste Fassung war zu schnell und die Musik schwach; eine sehr direkte zweite Nachricht hat sie deutlich verbessert. Bitte um ein ruhigeres Tempo, einen lizenzfreien Track oder ein anderes Seitenverhältnis.",
        },
      ],
    },
    {
      kind: "text",
      id: "the-prompt",
      title: "Der Prompt, den alle kopiert haben",
      text: [`Viele der Videos unten beginnen mit demselben kurzen Prompt, der auf X die Runde machte: \`${basePrompt}\`. Was die Macher ergänzt haben:`],
      points: [
        "Dein Produkt oder deine Website: „for <deine URL>“, oder „besuche zuerst die Seiten, um das Produkt zu verstehen, und schreib dann den Inhalt des Videos selbst“.",
        "Eine Referenz: „als wäre es dein Showreel“, „gib alles (go all out)“, „ein Premium-Launch-Film für ein Entwickler-Tool“, „im Apple-Stil“.",
        "Eine Stimmung oder ein Klang: „psychedelisch und hypnotisch“, oder „lass dich von der Oppenheimer-Musik inspirieren, aber komponier selbst“.",
        "Eine Grenze: „vermeide Rahmen und Texte in den Ecken, die typisch für KI-Videos sind“.",
        "Referenzmaterial: ein Logo, ein Bild, eine Handskizze oder ein anderes Video zum Nachahmen.",
      ],
    },
    ...motionSections(
      "de",
      text,
      labels,
      {
        launch: { title: "Launch-Filme für Produkte", text: "Launches, Meilensteine und Pitches für echte Produkte, die meisten aus einem einzigen Prompt." },
        brand: { title: "Logo-Animationen und Markenfilme", text: "Stings und Werbefilme aus einem Logo, einem Referenzbild oder einer berühmten Werbung." },
        showreel: { title: "Showreels und kinetische Typo", text: "Opus zeigt, was es als Motion Designer kann: Typo, Loops und reine Bewegung." },
        explainer: { title: "Erklärvideos", text: "Rezepte, Geschichte und Informatik, in Bewegung erklärt." },
      },
      "Original-Post ansehen",
    ),
    {
      kind: "text",
      id: "more",
      title: "Mehr Videos",
      text: [
        "Die vollständige Liste mit drei Standbildern pro Video und allen Prompts steht auf GitHub: [awesome-claude-motion-video](https://github.com/ummydev/awesome-claude-motion-video).",
        "3D-Welten und Kurzfilme mit Claudes neuestem Modell findest du in der [Claude-Fable-5.2-Videosammlung auf GitHub](https://github.com/ummydev/awesome-claude-fable-videos), und was sich geändert hat und wie es im Vergleich zu Opus 5.5 abschneidet, in unserem [Leitfaden zu Claude Fable 5.2](/blog/claude-fable-5-2).",
      ],
    },
  ],
  howTo: { section: "make-one", name: "Ein Motion-Graphics-Video mit Claude Opus 5.5 in Claude Code machen" },
  mid: {
    title: "Bei jedem Release ein Launch-Film?",
    text: "Ein Crewmark-Mitarbeiter läuft auf deinem eigenen Claude Code: Gib ihm die Release Notes, und er rendert das Video, während du den Launch vorbereitest.",
    button: "Loslegen",
  },
  faq: {
    title: "Häufige Fragen",
    items: [
      {
        q: "Kann Claude Opus 5.5 Videos machen?",
        a: "Ja, indem es Code schreibt. Es baut die Animation als Webseite oder Remotion-Projekt und rendert sie Bild für Bild als MP4, mit Musik, die es selbst synthetisiert. Es erzeugt kein Bildmaterial wie ein Videomodell, deshalb sind Text, Zahlen und Oberflächen gestochen scharf.",
      },
      {
        q: "Brauche ich einen Skill, Remotion oder After Effects?",
        a: "Nein. Mehrere Macher sagen, sie hätten einfach Claude Code ohne Skills benutzt: Opus wählte die Werkzeuge selbst, meist Playwright oder Headless-Chrome mit ffmpeg, manchmal Remotion.",
      },
      {
        q: "Wie lange dauert es und was kostet es?",
        a: "Von etwa einer Minute und 2 $ (Deedy Das) bis zu anderthalb Stunden Rendern und 14 $ mit extra hohem Effort (monokern). Die meisten berichten von einem Prompt und ein paar Minuten bis einer Stunde.",
      },
      {
        q: "Woher kommt die Musik?",
        a: "Meist komponiert und synthetisiert Opus sie selbst in Code, in Python oder JavaScript, und legt die Schläge auf die Schnitte. Einige Macher baten stattdessen um einen lizenzfreien Track.",
      },
      {
        q: "Darf ich diese Prompts verwenden?",
        a: "Die Prompts stammen von den Machern und sind aus ihren Posts zitiert. Probier sie mit deinem eigenen Produkt aus; die Videos gehören denen, die sie gemacht haben.",
      },
    ],
  },
  cta: {
    title: "Gib das Video an einen KI-Mitarbeiter ab.",
    text: "Crewmark macht aus Claude-Code- und Codex-Sessions KI-Mitarbeiter mit Rolle, Zielen, Arbeitszeiten und Heartbeat.",
    button: "Loslegen",
  },
  checked: "Likes, Aufrufe und Prompts am 12. November 2026 an jedem Original-Post auf X oder Xiaohongshu geprüft.",
  disclaimer:
    "Die Videos und Prompts gehören ihren Machern; jede Karte verlinkt auf den Original-Post. Crewmark ist ein unabhängiges Produkt, nicht mit Anthropic verbunden und nicht von Anthropic unterstützt. Claude, Claude Opus, Claude Fable und Claude Code sind Marken von Anthropic.",
};
