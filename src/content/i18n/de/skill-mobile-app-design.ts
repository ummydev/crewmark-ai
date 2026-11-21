import type { GuideCopy } from "@/components/landing/guide-article";

// de translation of /skills/mobile-app-design; the English master is src/content/skill-pages/mobile-app-design.ts.

const expo = "https://github.com/expo/skills";

const install = `# Die offiziellen Skills von Expo (Claude-Code-Plugin)
/plugin install expo@claude-plugins-official

# Die React-Native-Regeln von Vercel
npx skills add vercel-labs/agent-skills --skill vercel-react-native-skills

# SwiftUI Pro (Paul Hudson)
npx skills add https://github.com/twostraws/swiftui-agent-skill --skill swiftui-pro

# SwiftUI Expert (Antoine van der Lee)
/plugin marketplace add AvdLee/SwiftUI-Agent-Skill
/plugin install swiftui-expert@swiftui-expert-skill

# Die Skills des Flutter-Teams
npx skills add flutter/agent-plugins

# Apple-Design-Review für jedes Framework
npx skills add dickwu/apple-design-skill

# Mobile Taste Skill für React Native und Expo
/plugin marketplace add draftbit/mobile-taste-skill
/plugin install mobile-taste-skill`;

export const copy: GuideCopy = {
  meta: {
    title: "Die besten Claude Skills für Mobile-App-Design und -Entwicklung",
    description:
      "Die besten Claude Code Skills für Mobile Apps 2026, nach Plattform: Expo und Vercel für React Native, SwiftUI Pro und SwiftUI Expert für iOS, die Skills des Flutter-Teams, Apple-Design-Review und mehr, mit Installationsbefehlen.",
  },
  breadcrumb: "Skills für Mobile Apps",
  parent: { name: "Claude Skills", href: "/skills" },
  hero: {
    kicker: "Claude Skills · Mobile Apps",
    title: "Die besten Claude Skills für Mobile-App-Design und -Entwicklung",
    lead: "Ein Mobile-Skill ist eine SKILL.md-Datei, die Claude Code (oder Codex, Cursor und anderen Agenten) beibringt, für Smartphones zu bauen: die Designregeln der Plattform, die APIs, die sich seit dem Training des Modells geändert haben, und die Fehler, die Agenten in SwiftUI, React Native oder Flutter typischerweise machen. Die meisten betreffen eine Plattform, also wähle nach der, auf der du auslieferst. Das sind die Skills, die sich 2026 lohnen, nach Plattform gruppiert, auf Basis des Repositorys jedes Projekts.",
    cta: "Loslegen",
    secondary: "Skills vergleichen",
    secondaryHref: "#compare",
  },
  sections: [
    {
      kind: "text",
      title: "Schnelle Empfehlungen",
      points: [
        "React Native und Expo: die offiziellen Skills von Expo zum Bauen und Ausliefern, react-native-skills von Vercel oder die Skills von Callstack für Performance, und Mobile Taste Skill für Screens, die nicht nach KI aussehen.",
        "SwiftUI und iOS: SwiftUI Pro von Paul Hudson für modernes, barrierefreies SwiftUI, SwiftUI Expert von Antoine van der Lee für State und Performance, und Claude Code Apple Skills für den Weg von der Idee in den App Store.",
        "Flutter: die eigenen Skills des Flutter-Teams für Architektur, Layouts, Routing und Tests.",
        "Design für jedes Framework: Apple Design Skill prüft ein Design anhand von Apples Human Interface Guidelines, in SwiftUI, Flutter, React Native und mehr; UI UX Pro Max wählt Stile, Paletten und Schriften.",
        "Vor dem Einreichen: App Store Review prüft ein Projekt gegen die Regeln von App Store und Google Play.",
        "Eine Web-App, die sich wie eine App anfühlen soll: mobile-native von Emil Kowalski behebt das CSS und die Meta-Tags, die sie auf Smartphones verraten.",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Skills für Mobile Apps im Vergleich",
      text: [
        "Sterne und Lizenzen laut GitHub-API am 8. November 2026, gerundet. Bei Repositorys mit vielen Skills gelten die Sterne für das ganze Repository.",
      ],
      headers: ["Skill", "Plattform", "Am besten für", "Sterne", "Lizenz"],
      rows: [
        ["[UI UX Pro Max](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill)", "Web, Mobile, Desktop", "Stile, Paletten, Schriftpaare und UX-Regeln", "~147k", "MIT"],
        ["[mobile-native](https://github.com/emilkowalski/skills/tree/main/skills/mobile-native) (Emil Kowalski)", "Mobiles Web, PWAs", "Eine Web-App auf dem Smartphone nativ wirken lassen", "~54k (Repo)", "MIT"],
        ["[react-native-skills](https://github.com/vercel-labs/agent-skills/tree/main/skills/react-native-skills) (Vercel)", "React Native, Expo", "Performance-Regeln für Listen, Animation, Navigation und UI", "~34k (Repo)", "MIT (laut README)"],
        ["[SwiftUI Pro](https://github.com/twostraws/SwiftUI-Agent-Skill) (Paul Hudson)", "SwiftUI, iOS 26+", "Die Fehler beheben, die LLMs in SwiftUI machen; Barrierefreiheit", "~6.5k", "MIT"],
        ["[Expo skills](https://github.com/expo/skills) (Expo)", "React Native, Expo", "Expo-Apps bauen, gestalten und ausliefern: Router, native UI, Animation, EAS", "~4.1k", "MIT"],
        ["[SwiftUI Expert](https://github.com/AvdLee/SwiftUI-Agent-Skill) (Antoine van der Lee)", "SwiftUI, iOS, macOS", "State, Performance, Navigation und Liquid Glass; Tools für Instruments-Traces", "~3.9k", "MIT"],
        ["[Flutter agent plugins](https://github.com/flutter/agent-plugins) (Flutter-Team)", "Flutter", "Architektur, responsive Layouts, Layout-Korrekturen, Routing, Tests, Lokalisierung", "~3.2k", "BSD 3-Clause"],
        ["[Apple Design Skill](https://github.com/dickwu/apple-design-skill)", "SwiftUI, UIKit, Flutter, React Native, Tauri, Electron", "Ein Design anhand von 123 Seiten der Apple-Richtlinien prüfen", "~3k", "Nicht angegeben"],
        ["[agent-skills](https://github.com/callstackincubator/agent-skills) (Callstack)", "React Native", "Performance, Navigation, Upgrades, Migration und Tests auf einem Gerät", "~1.7k", "MIT"],
        ["[Claude Code Apple Skills](https://github.com/rshankras/claude-code-apple-skills)", "iOS, macOS, watchOS, visionOS", "165 Skills von der Idee bis zum App Store, 8 davon für Design", "~870", "MIT"],
        ["[Sleek](https://github.com/sleekdotdesign/agent-skills)", "React Native, HTML", "Screens, die der KI-Dienst von Sleek gestaltet und die dann in Code gebaut werden", "~600", "MIT"],
        ["[Mobile App UI Design](https://github.com/ceorkm/mobile-app-ui-design)", "Beliebig (Mockups in React und Tailwind)", "Designregeln aus bekannten Apps: Farbe, 8-Punkt-Raster, Daumenzone", "~500", "Nicht angegeben"],
        ["[Apple Skills](https://github.com/Prisma-Labs-Dev/apple-skills) (Prisma Labs)", "iOS 26+", "Aktuelle Apple-APIs: SwiftUI, UIKit, HIG, Liquid Glass, StoreKit", "~360", "MIT"],
        ["[App Store Review](https://github.com/devsemih/appstore-review-skill)", "Beliebig", "Eine App vor dem Einreichen gegen die Regeln von App Store und Google Play prüfen", "~100", "MIT"],
        ["[Mobile Taste Skill](https://github.com/draftbit/mobile-taste-skill) (Draftbit)", "React Native, Expo", "Screens, Navigation und ein Designsystem, die nicht nach KI aussehen", "~10", "Siehe Repo"],
      ],
    },
    {
      kind: "text",
      id: "installs",
      title: "Die meistinstallierten Mobile-Skills",
      text: [
        "Installationen über die Skills-CLI, laut skills.sh-Registry am 8. November 2026. Plugins, die mit `/plugin install` installiert werden, tauchen hier meist nicht auf; sieh die Zahlen also als Untergrenze.",
      ],
      points: [
        "ui-ux-pro-max (Web und Mobile): etwa 440.000",
        "vercel-react-native-skills: etwa 270.000",
        "mobile-native (Emil Kowalski): etwa 116.000",
        "expo-dev-client, der meistinstallierte Skill von Expo: etwa 74.000",
        "flutter-apply-architecture-best-practices, der meistinstallierte des Flutter-Teams: etwa 45.000",
        "swiftui-pro (Paul Hudson): etwa 37.000",
        "swiftui-expert-skill (Antoine van der Lee): etwa 36.000",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "So richtest du Claude Code für eine Mobile App ein",
      steps: [
        {
          title: "Wähle nach Plattform: ein Skill, der baut, einer, der gestaltet",
          text: "Für Expo die Expo-Skills plus Mobile Taste Skill; für SwiftUI SwiftUI Pro oder SwiftUI Expert plus Apple Design Skill; für Flutter die Skills des Flutter-Teams plus Apple Design Skill oder UI UX Pro Max. Zwei Skills, die beide den Stil vorgeben wollen, kommen sich in die Quere.",
          code: install,
        },
        {
          title: "Gib ihm das Briefing und eine Referenz-App",
          text: "Sag, für wen die App ist, welche drei oder vier Screens zählen, und nenne eine App, deren Gefühl dir gefällt. Mobile Taste Skill lässt den Agenten sich auf eine Einschätzung der App festlegen (Art, Zielgruppe, Gefühl) und die Navigation planen, bevor er Code schreibt.",
        },
        {
          title: "Prüf es im Simulator, nicht im Code",
          text: "Starte die App im iOS-Simulator, einem Android-Emulator oder in Expo Go und sieh dir echte Screens in mehr als einer Größe an. Mit dem agent-device-Skill von Callstack kann der Agent ein Gerät steuern und seine eigene Arbeit prüfen.",
        },
        {
          title: "Speichere das Designsystem im Repository",
          text: "Mobile Taste Skill schreibt eine MOBILE-DESIGN.md, und Expo hat einen Skill expo-design-system. Behalte das Ergebnis im Repository, damit spätere Sessions und andere Agenten dieselben Farben, Schriften und Abstände verwenden. Siehe die [Anleitung zur CLAUDE.md](/blog/claude-md).",
        },
      ],
      source: { label: "Quelle: die Agent-Skills von Expo", href: expo },
    },
    {
      kind: "text",
      title: "Gut zu wissen vor der Installation",
      points: [
        "Sleek braucht für echte Nutzung ein bezahltes Konto: Kostenlose Konten bekommen Test-Credits für etwa einen Design-Durchlauf, und Pro kostet laut Skill $69 im Monat. Jedes Briefing geht an sleek.design.",
        "Die EAS-Skills von Expo nutzen Expos gehostete Build- und Update-Dienste, und jeder Expo-Skill bittet den Agenten, Feedback über Expos Agent-CLI zu senden.",
        "Die Trace-Tools von SwiftUI Expert brauchen xctrace aus Xcode und Python 3; sie zeichnen Instruments-Traces auf deinem Rechner auf und werten sie aus.",
        "Claude Code Apple Skills folgt seinem main-Branch ohne Versions-Pins, und laut eigenem Hinweis wurden die Skills mit Hilfe von Claude Code geschrieben und können Ungenauigkeiten enthalten.",
        "mobile-native von Emil Kowalski ist für Web-Apps und PWAs auf Smartphones gedacht, nicht für native Apps.",
        "Keiner davon stammt von Apple oder Google, und App Store Review kann keine Freigabe versprechen. Die Registry führt außerdem design-mobile-apps von Sleek mit etwa 1,3 Millionen Installationen unter einem Repository mit wenigen Sternen; wir konnten diese Zahl nicht überprüfen, deshalb steht er nicht in der Liste oben.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Mit Crewmark",
      title: "Gib den Skills einen App-Designer, der jeden Tag arbeitet",
      text: [
        "Ein Skill macht eine Session besser in Mobile-Arbeit. Crewmark macht aus Claude Code oder Codex einen KI-App-Designer mit einem Ziel, etwa drei fertige Screens pro Woche, mit Arbeitszeiten und einem Board voller Screens, die zu verbessern sind; er wacht per Heartbeat auf und öffnet Pull Requests mit Screenshots aus dem Simulator.",
      ],
      steps: [
        {
          title: "Stell die Rolle App-Designer ein",
          text: "Rollenbeschreibung, Ziel und Ablauf sind schon eingerichtet; siehe den [KI-App-Designer](/ai-employees/app-designer) und den [KI-Softwareentwickler](/ai-employees/software-engineer).",
        },
        {
          title: "Installiere deine Mobile-Skills im Repository",
          text: "Der Mitarbeiter nutzt die Skills in `.claude/skills` wie jede andere Session. Für Web- und UI-Arbeit siehe die [besten Claude Skills für Webdesign](/skills/website-design).",
        },
        {
          title: "Prüf Pull Requests, nicht Prompts",
          text: "Gib die Screens frei, die dir gefallen; fordere Änderungen auf dem Board an. Lies, [was ein KI-Mitarbeiter ist](/ai-employees).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Claude Code mit Skills für die Arbeit an Mobile Apps einrichten" },
  mid: {
    title: "Du willst einen App-Designer, der diese Skills jeden Tag nutzt?",
    text: "Der KI-App-Designer von Crewmark arbeitet per Heartbeat in deinem Code und öffnet Pull Requests mit Screenshots.",
    button: "Loslegen",
  },
  faq: {
    title: "FAQ zu Claude-Skills für Mobile Apps",
    items: [
      {
        q: "Welcher Claude Skill ist der beste für Mobile-App-Design?",
        a: "Das hängt von der Plattform ab. Für React Native und Expo Mobile Taste Skill zusammen mit den eigenen Skills von Expo; für SwiftUI SwiftUI Pro oder SwiftUI Expert zusammen mit Apple Design Skill; für jedes Framework Apple Design Skill oder UI UX Pro Max für die visuelle Seite.",
      },
      {
        q: "Gibt es einen offiziellen Claude Skill für React Native oder Expo?",
        a: "Expo veröffentlicht expo/skills, auch als Plugin in claude-plugins-official, und Vercel und Callstack veröffentlichen React-Native-Skills. Keiner davon stammt von Anthropic.",
      },
      {
        q: "Was ist der beste Claude Code Skill für SwiftUI und iOS?",
        a: "SwiftUI Pro von Paul Hudson zielt auf iOS 26 und Swift 6.4 und die Fehler, die LLMs in SwiftUI machen; SwiftUI Expert von Antoine van der Lee deckt State, Performance und Liquid Glass ab. Beide lassen sich als Plugin oder mit der Skills-CLI installieren.",
      },
      {
        q: "Gibt es einen Flutter-Skill für Claude Code?",
        a: "Ja. Das Flutter-Team veröffentlicht flutter/agent-plugins, mit Skills für Architektur, responsive Layouts, Layout-Korrekturen, Routing, Lokalisierung und Tests, und bündelt die MCP-Tools für Dart und Flutter.",
      },
      {
        q: "Kann Claude Code die UI einer Mobile App gestalten?",
        a: "Mit einem Design-Skill deutlich besser als ohne: Der Skill bringt die Regeln der Plattform und eine Richtung mit. Prüf die Screens im Simulator oder auf einem Smartphone, denn der Code allein zeigt keine Probleme mit Abständen und Touch-Zielen.",
      },
      {
        q: "Funktionieren diese Mobile-Skills mit Codex und Cursor?",
        a: "Die meisten ja. Expo, SwiftUI Pro, SwiftUI Expert, Apple Design Skill und die Skills von Callstack dokumentieren Codex oder Cursor, und die Skills-CLI installiert SKILL.md-Skills in Dutzende Agenten.",
      },
    ],
  },
  cta: {
    title: "Hol dir einen App-Designer aufs Board, mit den Skills, denen du vertraust.",
    text: "Crewmark macht aus Sessions von Claude Code, Codex, DeepSeek Harness und OpenCode KI-Mitarbeiter mit Rollen, Zielen, Arbeitszeiten und einem Heartbeat.",
    button: "Loslegen",
  },
  checked:
    "Am 8. November 2026 mit dem GitHub-Repository jedes Skills, der GitHub-API und der skills.sh-Registry abgeglichen.",
  disclaimer:
    "Crewmark ist ein unabhängiges Produkt und steht in keiner Verbindung zu Anthropic, Apple, Google oder den Autoren der aufgeführten Skills, die es auch nicht unterstützen. Produktnamen sind Marken ihrer Inhaber.",
};
