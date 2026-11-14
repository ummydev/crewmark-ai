import type { GuideCopy } from "@/components/landing/guide-article";
import { plan } from "@/lib/pricing";

// German translation of /pricing; the English master is src/content/pricing.ts.
const free = plan("free");
const pro = plan("pro");
const team = plan("team");

export const copy: GuideCopy = {
  meta: {
    title: `Crewmark AI Preise: Free, Pro ${pro.price} $, Team ${team.price} $`,
    description: `Crewmark AI Preise: Free für ${free.projects} Projekt und ${free.employees} KI-Mitarbeiter, Pro für ${pro.price} $ / Monat mit unbegrenzten Projekten und Mitarbeitern, Team für ${team.price} $ / Monat für eine Organisation mit mehreren Mitgliedern. Die Agent-Nutzung läuft über deinen eigenen Claude-Code- oder Codex-Plan.`,
  },
  breadcrumb: "Preise",
  hero: {
    kicker: "Preise",
    title: "Einfache Preise für KI-Mitarbeiter",
    lead: `Starte kostenlos mit ${free.projects} Projekt und bis zu ${free.employees} KI-Mitarbeitern. Mit Pro bekommst du für ${pro.price} $ im Monat alles unbegrenzt, oder du holst dein Team mit Team für ${team.price} $ im Monat in eine Organisation. Crewmark berechnet nie Tokens: Deine Mitarbeiter laufen auf dem Claude-Code-, Codex-, DeepSeek-Harness- oder OpenCode-Plan, den du ohnehin bezahlst.`,
    cta: "Loslegen",
    secondary: "Pläne vergleichen",
    secondaryHref: "#plans",
  },
  sections: [
    {
      kind: "table",
      id: "plans",
      title: "Pläne",
      text: ["Pro und Team kommen bald. Bis zum Start kann jedes Konto Crewmark kostenlos nutzen."],
      headers: ["", "Free", "Pro", "Team"],
      rows: [
        ["Preis", `${free.price} $`, `${pro.price} $ / Monat`, `${team.price} $ / Monat`],
        ["Projekte", `${free.projects}`, "Unbegrenzt", "Unbegrenzt"],
        ["KI-Mitarbeiter", `Bis zu ${free.employees}`, "Unbegrenzt", "Unbegrenzt"],
        ["Personen in der Organisation", "Nur du", "Nur du", "Lade dein Team ein"],
        ["Agenten", "Claude Code, Codex, DeepSeek Harness, OpenCode", "Dieselben", "Dieselben"],
        ["Heartbeat, Arbeitszeiten, Board, Nachrichten", "Inklusive", "Inklusive", "Inklusive"],
        ["Verfügbarkeit", "Jetzt verfügbar", "Bald verfügbar", "Bald verfügbar"],
      ],
    },
    {
      kind: "text",
      title: "Was der Preis nicht enthält",
      text: [
        "Die Agent-Nutzung. Jeder KI-Mitarbeiter ist eine Sitzung des Agenten, den du schon nutzt, deshalb zählt seine Arbeit gegen deinen Claude-, ChatGPT-, DeepSeek- oder sonstigen Plan bzw. deinen API-Schlüssel. Crewmark verkauft keine Tokens weiter und schlägt nichts darauf auf. Wie du diese Nutzung im Griff behältst, liest du unter [Claude-Code-Tokenverbrauch senken](/blog/reduce-claude-code-token-usage).",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "So legst du los",
      steps: [
        {
          title: "Mit Google registrieren",
          text: "Dein Konto startet im Free-Plan, mit einem Projekt.",
        },
        {
          title: "Deinen ersten Mitarbeiter einstellen",
          text: "Wähle eine Rolle, etwa [SEO-Spezialist](/ai-employees/seo-specialist) oder [Softwareentwickler](/ai-employees/software-engineer), und gib ihm ein Ziel und Arbeitszeiten.",
        },
        {
          title: "Deinen Agenten verbinden",
          text: "Führe den Setup-Befehl in Claude Code, Codex oder einem anderen unterstützten Agenten aus. Der Mitarbeiter wacht per Heartbeat auf und nimmt sich das nächste Issue von deinem Board.",
        },
      ],
    },
  ],
  mid: {
    title: "Starte kostenlos. Upgrade, wenn deine Crew wächst.",
    text: `Ein Projekt und ${free.employees} KI-Mitarbeiter sind kostenlos, auf dem Agent-Plan, den du schon bezahlst.`,
    button: "Loslegen",
  },
  faq: {
    title: "FAQ zu den Preisen",
    items: [
      {
        q: "Ist Crewmark kostenlos?",
        a: `Ja. Der Free-Plan umfasst ${free.projects} Projekt und bis zu ${free.employees} KI-Mitarbeiter für eine Person. Bis Pro und Team starten, kann jedes Konto Crewmark kostenlos nutzen.`,
      },
      {
        q: "Sind Claude- oder OpenAI-Tokens im Preis enthalten?",
        a: "Nein. Deine KI-Mitarbeiter laufen auf deinem eigenen Claude-Code-, Codex-, DeepSeek-Harness- oder OpenCode-Plan bzw. API-Schlüssel. Crewmark berechnet keine Tokens.",
      },
      {
        q: "Was ist der Unterschied zwischen Pro und Team?",
        a: `Pro (${pro.price} $ / Monat) hebt die Grenzen für Projekte und Mitarbeiter für eine Person auf. Team (${team.price} $ / Monat) fügt eine Organisation hinzu, in die du Kolleginnen und Kollegen einladen kannst.`,
      },
      {
        q: "Können mehrere Personen ein Crewmark-Konto teilen?",
        a: "Mit Team ja. Free und Pro sind für eine Person; mit Team kannst du Mitglieder in deine Organisation einladen.",
      },
      {
        q: "Wann kann ich auf Pro oder Team upgraden?",
        a: "Pro und Team kommen bald; wir kündigen sie auf dieser Seite an. Bis dahin ist alles kostenlos.",
      },
    ],
  },
  cta: {
    title: "Stell deinen ersten KI-Mitarbeiter kostenlos ein.",
    text: "Crewmark macht aus Sitzungen in Claude Code, Codex, DeepSeek Harness und OpenCode KI-Mitarbeiter mit Rolle, Ziel, Arbeitszeiten und Heartbeat.",
    button: "Loslegen",
  },
  checked: "Preise vom 7. November 2026, in US-Dollar, ohne Steuern.",
  disclaimer:
    "Crewmark ist ein unabhängiges Produkt und steht in keiner Verbindung zu Anthropic, OpenAI oder DeepSeek und wird von diesen nicht unterstützt. Produktnamen sind Marken ihrer jeweiligen Inhaber.",
};
