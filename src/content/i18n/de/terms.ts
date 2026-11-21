import type { LegalCopy } from "@/components/landing/legal-page";

// German translation of /terms; the English master is src/content/legal.ts.
const MAIL = "[info@crewmark.ai](mailto:info@crewmark.ai)";

export const copy: LegalCopy = {
  meta: {
    title: "Nutzungsbedingungen | Crewmark",
    description:
      "Die Bedingungen für die Nutzung von crewmark.ai und der crewmark CLI: dein Konto, die KI-Agenten auf deinem Computer, deine Inhalte, Preise und unsere Verantwortung.",
  },
  title: "Nutzungsbedingungen",
  updated: "Zuletzt aktualisiert: 12. November 2026",
  lead: `Diese Bedingungen gelten für deine Nutzung von crewmark.ai und der crewmark CLI („Crewmark“). Mit der Nutzung von Crewmark stimmst du ihnen zu. Fragen bitte an ${MAIL}.`,
  sections: [
    {
      title: "Der Dienst",
      text: [
        "Mit Crewmark verwaltest du KI-Agenten als „Mitarbeiter“: Du gibst ihnen Rollen, Ziele, Arbeitszeiten und Issues, und sie erledigen die Arbeit auf deinem eigenen Computer, über den KI-Agenten deiner Wahl (etwa Claude Code oder Codex) und die crewmark CLI.",
      ],
    },
    {
      title: "Dein Konto",
      text: [
        "Du meldest dich mit einem Google-Konto an und bist für alles verantwortlich, was darunter geschieht. Wenn du eine Organisation anlegst oder Personen einlädst, bist du dafür verantwortlich, wem du Zugang gibst und welche Rollen du vergibst. Mitglieder einer Organisation sehen ihre Projekte, Issues, Mitarbeiter und Nachrichten.",
      ],
    },
    {
      title: "Deine KI-Agenten und dein Computer",
      points: [
        "Deine Mitarbeiter laufen auf deinem Computer, mit den Rechten, die du dem Agenten dort gibst. Sie können Dateien lesen und ändern und Befehle ausführen. Wähle die Ordner und Rechte, die du ihnen gibst, mit Bedacht, und prüfe ihre Arbeit.",
        "KI-Agenten machen Fehler. Crewmark kontrolliert nicht, was ein Agent tut oder erzeugt, und garantiert nicht, dass seine Arbeit richtig, vollständig oder sicher nutzbar ist.",
        "Du nutzt deinen Agenten über dein eigenes Konto bei seinem Anbieter (zum Beispiel Anthropic oder OpenAI). Für diese Nutzung gelten die Bedingungen und Gebühren dieses Anbieters. Crewmark bezahlt die Nutzung deines Agenten nicht und verkauft sie nicht weiter.",
        "Du bist für das verantwortlich, was deine Mitarbeiter in deinem Namen tun, einschließlich allem, was sie veröffentlichen, senden oder ändern.",
      ],
    },
    {
      title: "Deine Inhalte",
      text: [
        "Was du in Crewmark einträgst und was deine Mitarbeiter erarbeiten, gehört weiter dir. Du erlaubst uns, es zu speichern, zu verarbeiten und anzuzeigen, nur soweit es nötig ist, um Crewmark für dich und die Mitglieder deiner Organisation zu betreiben. Wie wir mit Daten umgehen, steht in unserer [Datenschutzerklärung](/privacy).",
      ],
    },
    {
      title: "Zulässige Nutzung",
      text: ["Nutze Crewmark und die damit verwalteten Mitarbeiter nicht, um:"],
      points: [
        "gegen Gesetze oder die Rechte anderer zu verstoßen;",
        "Spam zu versenden oder andere zu belästigen, zu täuschen oder zu schädigen;",
        "in Systeme oder Daten einzudringen, auf die du keinen Zugriff haben darfst, oder Crewmark oder andere Dienste zu stören;",
        "Beschränkungen des Dienstes zu umgehen oder ihn ohne unsere Zustimmung weiterzuverkaufen.",
      ],
    },
    {
      title: "Preise",
      text: [
        "Crewmark ist derzeit kostenlos. Wir planen kostenpflichtige Pläne; siehe [Preise](/pricing). Wir berechnen dir nichts ohne deine Zustimmung und zeigen dir Preise und Bedingungen, bevor du einen kostenpflichtigen Plan abschließt.",
      ],
    },
    {
      title: "Änderungen und Verfügbarkeit",
      text: [
        "Crewmark ist neu und ändert sich oft. Wir können Funktionen hinzufügen, ändern oder entfernen, und der Dienst kann zeitweise nicht verfügbar sein. Änderungen, die dich wesentlich betreffen, versuchen wir vorher anzukündigen.",
      ],
    },
    {
      title: "Beenden der Nutzung",
      text: [
        `Du kannst Crewmark jederzeit nicht mehr nutzen und die Löschung deines Kontos verlangen, indem du an ${MAIL} schreibst. Wir können ein Konto sperren oder schließen, das gegen diese Bedingungen verstößt oder den Dienst oder andere gefährdet; wo es zumutbar möglich ist, sagen wir dir vorher Bescheid.`,
      ],
    },
    {
      title: "Gewährleistungsausschluss",
      text: [
        "Soweit gesetzlich zulässig, wird Crewmark „wie besehen“ und „wie verfügbar“ bereitgestellt, ohne Gewährleistung jeglicher Art. Wir versprechen nicht, dass es unterbrechungsfrei, fehlerfrei oder für einen bestimmten Zweck geeignet ist.",
      ],
    },
    {
      title: "Haftungsbeschränkung",
      text: [
        "Soweit gesetzlich zulässig, haftet Crewmark nicht für indirekte Schäden oder Folgeschäden oder für den Verlust von Daten, Gewinnen oder Geschäft, die aus deiner Nutzung von Crewmark oder der damit betriebenen KI-Agenten entstehen. Für jeden Anspruch und jede Streitigkeit, gleich aus welchem Grund, übersteigt unsere Gesamthaftung 50 US-Dollar nicht. Manche Rechtsordnungen lassen diese Beschränkungen nicht zu, sodass sie für dich möglicherweise nicht alle gelten.",
      ],
    },
    {
      title: "Änderungen dieser Bedingungen",
      text: [
        "Wenn wir diese Bedingungen ändern, aktualisieren wir das Datum oben auf dieser Seite. Bei wesentlichen Änderungen informieren wir dich in der App, bevor sie wirksam werden. Wenn du Crewmark danach weiter nutzt, akzeptierst du die neuen Bedingungen.",
      ],
    },
    {
      title: "Kontakt",
      text: [`Schreib an ${MAIL} bei Fragen zu diesen Bedingungen.`],
    },
  ],
};
