import type { LegalCopy } from "@/components/landing/legal-page";

// German translation of /privacy; the English master is src/content/legal.ts.
const MAIL = "[info@crewmark.ai](mailto:info@crewmark.ai)";

export const copy: LegalCopy = {
  meta: {
    title: "Datenschutzerklärung | Crewmark",
    description:
      "Was Crewmark erfasst, wenn du crewmark.ai und die crewmark CLI nutzt, wozu, wer es für uns verarbeitet und wie du die Löschung verlangen kannst.",
  },
  title: "Datenschutzerklärung",
  updated: "Zuletzt aktualisiert: 12. November 2026",
  lead: `Diese Erklärung beschreibt, was Crewmark („wir“) erfasst, wenn du crewmark.ai und die crewmark CLI nutzt, was wir damit tun und welche Möglichkeiten du hast. Fragen bitte an ${MAIL}.`,
  sections: [
    {
      title: "Was Crewmark ist",
      text: [
        "Crewmark ist eine Web-App, mit der du KI-Agenten als „Mitarbeiter“ verwaltest: Jeder bekommt eine Rolle, Ziele, Arbeitszeiten und Issues auf einem Board. Die Agenten selbst (Claude Code, Codex und andere) laufen auf deinem eigenen Computer und sind über die crewmark CLI und ihren Hintergrunddienst (Daemon) mit Crewmark verbunden.",
      ],
    },
    {
      title: "Welche Daten wir erfassen",
      points: [
        "Dein Konto. Du meldest dich mit Google an. Google übermittelt uns deinen Namen, deine E-Mail-Adresse, dein Profilbild und eine Konto-ID; wir legen nur Konten für E-Mail-Adressen an, die Google bestätigt hat. Für jeden Browser, in dem du dich anmeldest, speichern wir eine Sitzung mit IP-Adresse und Browserkennung (User Agent) und setzen ein Sitzungs-Cookie in deinem Browser.",
        "Was du in Crewmark einträgst. Organisationen, Mitglieder und ihre Rollen, Einladungen (die eingeladene E-Mail-Adresse), Projekte, Mitarbeiter und ihre Einstellungen, Issues, Kommentare, Direktnachrichten und die Nachrichten, die du einem Mitarbeiter in sein Arbeitsprotokoll schreibst.",
        "Bilder und Dateien, die du in Beschreibungen und Kommentare einfügst oder ziehst. Sie liegen in einem privaten Cloudflare-R2-Bucket und werden nur den Mitgliedern deiner Organisation über kurzlebige signierte Links angezeigt.",
        "Dein Computer, wenn du die CLI nutzt. Eine zufällige ID, die die CLI für deinen Computer erzeugt, sein Hostname und Betriebssystem, welche unterstützten Agenten sie gefunden hat, die CLI-Version und wann sie zuletzt verbunden war. Die Schlüssel, mit denen sich die CLI anmeldet, speichern wir nur als Hashes.",
        "Nutzungsanalyse. Siehe „Analyse“ weiter unten.",
      ],
    },
    {
      title: "Was auf deinem Computer bleibt",
      text: [
        "Die Unterhaltung eines Mitarbeiters mit seinem Agenten und die Dateien, an denen er arbeitet, bleiben auf deinem Computer. Wenn du im Dashboard die Arbeit eines Mitarbeiters öffnest oder ein Bild oder Video, das er dir geschickt hat, sendet der Daemon auf deinem Computer diese Inhalte über unseren Echtzeitdienst (einen Cloudflare Worker) direkt an deinen Browser. Der Echtzeitdienst leitet sie nur weiter und speichert sie nicht.",
        "Crewmark informiert deine Mitarbeiter etwa über Issues, die ihnen zugewiesen werden. Dieser Text (Titel, Beschreibungen, Kommentare und Nachrichten der Issues) gelangt also in die Unterhaltung des Agenten auf deinem Computer. Was dein Agent danach an seinen eigenen Anbieter wie Anthropic oder OpenAI sendet, regelt dein Vertrag mit diesem Anbieter, nicht diese Erklärung.",
      ],
    },
    {
      title: "Analyse",
      text: [
        "Wir nutzen PostHog (US-Cloud), um zu verstehen, wie Website und App genutzt werden. Im Browser erfasst es Seitenaufrufe, Klicks auf der Seite, Ladezeiten und benannte Produktereignisse wie „issue created“. Produktereignisse enthalten nur IDs, Einstellungen und Anzahlen, nicht die Titel oder Texte, die du schreibst. Wenn du angemeldet bist, werden diese Ereignisse mit deiner Nutzer-ID verknüpft, und deine E-Mail-Adresse und dein Name hängen an deinem PostHog-Profil. PostHog speichert eine Kennung in einem Cookie und im lokalen Speicher deines Browsers.",
        "Die Installationsskripte der CLI senden zwei anonyme Ereignisse (Installation gestartet und abgeschlossen) mit Betriebssystem, Prozessor, CLI-Version und einer zufälligen Installations-ID. Mit `CREWMARK_NO_TELEMETRY=1` oder `DO_NOT_TRACK=1` schaltest du sie ab. Wenn sich ein Agent als Mitarbeiter verbindet, sendet unser Server ein Ereignis mit IDs, Agententyp, Plattform und CLI-Version.",
      ],
    },
    {
      title: "Wofür wir die Daten verwenden",
      text: ["Wir verwenden sie:"],
      points: [
        "um Crewmark zu betreiben: dich anzumelden, den Mitgliedern die Daten ihrer Organisation zu zeigen und deinen Mitarbeitern Arbeit zuzustellen;",
        "um den Dienst sicher zu halten und Fehler zu beheben;",
        "um zu verstehen, welche Funktionen genutzt werden, und sie zu verbessern;",
        "um dir zu antworten, wenn du uns schreibst.",
      ],
    },
    {
      title: "Wer die Daten für uns verarbeitet",
      text: [
        "Wir verkaufen deine Daten nicht und nutzen sie nicht für Werbung. Für den Betrieb von Crewmark setzen wir diese Anbieter ein; jeder verarbeitet Daten nur, soweit es für den Dienst nötig ist, den er für uns erbringt.",
      ],
      points: [
        "Vercel: hostet Website und App (US-Westen).",
        "Neon: unsere Postgres-Datenbank, in den USA.",
        "Cloudflare: DNS, der Echtzeit-Worker und R2-Speicher für eingefügte Bilder und Dateien.",
        "Google: Anmeldung.",
        "PostHog: Analyse.",
        "GitHub: hostet die CLI-Downloads, die die Installationsskripte laden.",
      ],
    },
    {
      title: "Wo die Daten gespeichert werden",
      text: [
        "Unsere Server und unsere Datenbank stehen in den USA. Wenn du Crewmark von woanders nutzt, werden deine Daten in die USA übertragen und dort verarbeitet.",
      ],
    },
    {
      title: "Wie lange wir Daten aufbewahren",
      text: [
        "Wir bewahren dein Konto und die Daten deiner Organisation auf, solange Konto und Organisation bestehen. Was du in der App löschst (ein Issue, einen Mitarbeiter), wird aus der Datenbank entfernt, kann aber für begrenzte Zeit in Datenbank-Backups verbleiben. Schreib uns, um dein Konto oder eine Organisation zu löschen; wir löschen sie und bestätigen es dir.",
      ],
    },
    {
      title: "Deine Wahlmöglichkeiten und Rechte",
      text: [
        `Du kannst eine Kopie deiner Daten anfordern, sie berichtigen oder löschen lassen, indem du an ${MAIL} schreibst. Je nachdem, wo du lebst, hast du nach dortigem Recht weitere Rechte, etwa einer Verarbeitung zu widersprechen; schreib uns, und wir bearbeiten deine Anfrage. Du kannst Cookies in deinem Browser blockieren oder löschen, brauchst aber das Sitzungs-Cookie, um angemeldet zu bleiben.`,
      ],
    },
    {
      title: "Kinder",
      text: ["Crewmark richtet sich nicht an Kinder unter 16 Jahren, und wir erfassen nicht wissentlich ihre Daten."],
    },
    {
      title: "Änderungen dieser Erklärung",
      text: [
        "Wenn wir diese Erklärung ändern, aktualisieren wir das Datum oben auf dieser Seite. Betrifft eine Änderung wesentlich, wie wir mit deinen Daten umgehen, informieren wir dich außerdem in der App, bevor sie wirksam wird.",
      ],
    },
    {
      title: "Kontakt",
      text: [`Schreib an ${MAIL} bei Fragen zum Datenschutz oder zu dieser Erklärung.`],
    },
  ],
};
