import type { GuideCopy } from "@/components/landing/guide-article";

// German translation of /blog/multi-agent-harness; the English master is src/content/blog/multi-agent-harness.ts.
// An agent's "+1" is rendered as "direkter Vorgesetzter" (German has no "+1" idiom for one's manager).

export const copy: GuideCopy = {
  meta: {
    title: "Multi-Agent-Harness: das Harness für ein KI-Agenten-Team",
    description:
      "Das Harness eines Agenten reicht für ein Team nicht. Ein Multi-Agent-Harness ergänzt Rollen, Aufgaben, eine Berichtskette, Gespräche unter Agenten und Weckrufe.",
  },
  breadcrumb: "Multi-Agent-Harness",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-13" },
  hero: {
    kicker: "Blog · Agent Harness",
    title: "Multi-Agent-Harness: Das Harness eines Agenten reicht für ein Team nicht",
    lead: "Ein Harness für einen einzelnen Agenten reicht nicht mehr: Sobald mehrere Agenten am selben Produkt arbeiten, brauchen sie ein Harness, das sie als ein Team laufen lässt. Claude Code und Codex geben jedem Agenten schon eine Schleife, Werkzeuge und Berechtigungen. Was sie dir nicht geben: wer was macht, wie Arbeit von Agent zu Agent wandert, wer an wen berichtet, wie Agenten miteinander sprechen und wann jeder aufwacht. Genau das ist ein Multi-Agent-Harness. Es hat fünf Bausteine, dazu Agenten, deren einzige Aufgabe das Führen ist, und diese Seite geht jeden davon durch, am Beispiel von Crewmarks eigenem KI-Team.",
    cta: "Loslegen",
    secondary: "Die fünf Bausteine",
    secondaryHref: "#parts",
  },
  sections: [
    {
      kind: "text",
      id: "what-is",
      title: "Was ist ein Agent Harness, und warum reicht eines nicht?",
      text: [
        "Ein Agent Harness ist die Software um ein Modell herum, die es zu einem arbeitenden Agenten macht: die Schleife, die das Modell nach jedem Werkzeugergebnis erneut aufruft, die Werkzeuge, die es nutzen darf (Shell, Dateien, Browser, MCP-Server), der Kontext, den es liest, und die Berechtigungen, die es von dem abhalten, was es nicht tun soll. Claude Code, Codex, OpenCode und [DeepSeek Harness](/blog/deepseek-harness) sind Harnesses, ebenso ein Open-Source-Framework wie Deep Agents von LangChain.",
        "Jedes davon beantwortet dieselbe Frage: Wie erledigt ein Agent eine Aufgabe? Lass fünf Agenten am selben Produkt arbeiten, und andere Fragen werden wichtiger. Welcher Agent ist für SEO zuständig, welcher für das Deployment? Wohin geht eine Aufgabe, wenn ein Agent seinen Teil erledigt hat? Wer prüft die Arbeit, und wen fragt ein Agent, wenn er feststeckt? Wer weckt die Agenten morgens? Ein Harness für einen einzelnen Agenten hat darauf keine Antwort, denn es wurde für einen Agenten und einen Menschen an der Tastatur gebaut.",
      ],
    },
    {
      kind: "table",
      id: "parts",
      title: "Die fünf Bausteine eines Multi-Agent-Harness",
      text: [
        "Ein Multi-Agent-Harness führt Agenten so, wie ein Unternehmen ein Team führt. Das sind seine fünf Bausteine und wo jeder davon heute in Crewmark steht. Bausteine, die als „Demnächst“ markiert sind, sind entworfen und stehen auf der Roadmap; sie stehen hier, damit du weißt, was kommt.",
      ],
      headers: ["Baustein", "In Crewmark", "Wozu"],
      rows: [
        ["1. Rollen und Zuständigkeiten", "Verfügbar", "Jeder Agent hat eine Rolle und eine klare Aufgabe, etwa CMO, Content Creator oder SEO-Spezialist; manche haben zusätzlich eine KPI"],
        ["2. Ein Aufgabensystem", "Verfügbar", "Aufgaben können an jede Rolle gehen, zwischen Rollen weitergegeben werden und werden von Anfang bis Ende verfolgt"],
        ["3. Eine Berichtskette", "Demnächst", "Ein Organigramm, das festlegt, wer an wen berichtet; jeder Agent berichtet an seinen direkten Vorgesetzten"],
        ["4. Agenten, die miteinander sprechen", "Demnächst; heute über Aufgaben, Kommentare und @Erwähnungen", "Manager und die Agenten, die an sie berichten, schreiben sich direkt, und die Antworten eines Agenten gehen an seinen direkten Vorgesetzten, der darauf antwortet"],
        ["5. Geplante Weckrufe", "Verfügbar", "Agenten wachen nach Zeitplan auf und machen sich an die Arbeit, ohne dass jemand zusieht"],
        ["Dazu: Manager-Agenten", "Verfügbar als Rolle, die du selbst einrichtest", "Agenten, die nur verteilen, führen und nachhaken und die Arbeit nie selbst machen"],
      ],
    },
    {
      kind: "text",
      id: "roles",
      title: "1. Rollen und Zuständigkeiten",
      text: [
        "Ein Agent, der nur die Aufgabe vor sich kennt, kann nicht entscheiden, was als Nächstes zu tun ist. In einem Multi-Agent-Harness hat jeder Agent eine Rolle und eine schriftliche Stellenbeschreibung: Der SEO-Spezialist ist für den Suchtraffic zuständig, der Video-Marketer für Kurzvideos, der Programmierer für den Produktcode. Jeder bleibt bei seiner eigenen Arbeit und weiß, wer für den Rest zuständig ist.",
      ],
      points: [
        "Eine Rolle und eine Beschreibung der Aufgabe, damit der Agent weiß, was zu seiner Arbeit gehört und was nicht.",
        "Eine KPI, wo die Aufgabe eine hat, etwa wöchentliche Impressionen und Klicks für den SEO-Spezialisten. Nicht jede Rolle braucht eine: Ein Programmierer wird an dem gemessen, was er ausliefert.",
        "Projekte, zu denen er gehört, damit er die Arbeit sieht, die ihn betrifft.",
        "In Crewmark hat jeder KI-Mitarbeiter all das, und ein Agent kann es jederzeit mit `crewmark me` abrufen.",
      ],
    },
    {
      kind: "text",
      id: "tasks",
      title: "2. Ein Aufgabensystem, das alle Rollen teilen",
      text: [
        "Arbeit zwischen Agenten braucht einen Ort, der länger hält als jedes einzelne Gespräch. In einem Multi-Agent-Harness ist das ein gemeinsames Aufgabensystem: Jede Aufgabe hat einen Verantwortlichen, einen Status und einen Verlauf, und sie kann von einer Rolle zur nächsten wandern, ohne zu verlieren, was vorher passiert ist.",
      ],
      points: [
        "Jede Aufgabe kann jeder Rolle zugewiesen werden, oder einem Menschen.",
        "Aufgaben gehen zwischen Rollen weiter: Der SEO-Agent schreibt eine Seite und weist dann das Deployment dem DevOps-Agenten zu; der Verlauf wandert mit der Aufgabe.",
        "Alles wird verfolgt: Status (Backlog, To-do, in Arbeit, Handlungsbedarf, erledigt), Priorität, Kommentare, @Erwähnungen und wer der Aufgabe folgt.",
        "Wer einem Agenten eine Aufgabe zuweist, sie kommentiert oder den Agenten @erwähnt, weckt ihn auf; eine Übergabe setzt die Arbeit also sofort in Gang.",
      ],
    },
    {
      kind: "text",
      id: "report-chain",
      title: "3. Eine Berichtskette (demnächst)",
      text: [
        "Ein Team aus fünf Agenten kann ohne Hierarchie arbeiten. Eines aus fünfzehn nicht: Jemand muss die Arbeit prüfen und daraus die nächste Entscheidung machen. Eine Berichtskette ist das Organigramm für Agenten. Sie legt fest, wer an wen berichtet, und jeder Agent berichtet an seinen direkten Vorgesetzten, also den Agenten eine Ebene über ihm, statt an die Person ganz oben.",
        "In Crewmark kommt die Berichtskette demnächst. Heute läuft dasselbe Muster per Konvention: Agenten @erwähnen den Manager-Agenten an der Aufgabe, wenn sie fertig sind oder feststecken, und der Manager übernimmt von dort.",
      ],
    },
    {
      kind: "text",
      id: "talk",
      title: "4. Agenten, die miteinander sprechen (demnächst)",
      text: [
        "In einem Harness für einen einzelnen Agenten spricht der Agent mit dir: Jede Antwort landet bei einem Menschen. In einem Team skaliert das nicht. Ein Manager-Agent muss oft mit den Agenten sprechen, die an ihn berichten, und das meiste, was ein Agent tut und sagt, sollte an seinen Vorgesetzten gehen, nicht an den Gründer.",
        "Deshalb schreiben sich Agenten in einem Multi-Agent-Harness direkt, und die Antwort eines Agenten geht automatisch an seinen Vorgesetzten, der aufwacht, um darauf zu antworten. Die Person ganz oben hört nur, was die Kette nicht selbst klären kann.",
        "In Crewmark kommen Direktnachrichten zwischen Agenten und Antworten, die automatisch an den Vorgesetzten gehen, demnächst. Heute sprechen Agenten über das Aufgabensystem: Kommentare und @Erwähnungen an Aufgaben, die jeweils den betroffenen Agenten wecken. Was ein Mensch schreibt, erreicht einen Agenten sofort, auch mitten in einer Aufgabe; was Agenten schreiben, wartet, bis der andere Agent frei ist, damit sie sich nicht ständig gegenseitig unterbrechen.",
      ],
    },
    {
      kind: "text",
      id: "wake-ups",
      title: "5. Geplante Weckrufe",
      text: [
        "Ein Harness für einen einzelnen Agenten wartet, bis du tippst. Ein Team kann das nicht: Niemand will jeden Morgen fünfzehn Agenten anstoßen. In einem Multi-Agent-Harness wachen Agenten nach Zeitplan auf und nehmen die Arbeit selbst auf.",
      ],
      points: [
        "Ein Heartbeat: Während seiner Arbeitszeiten, in seiner eigenen Zeitzone, bekommt jeder Agent in dem Intervall, das du festlegst, einen Prompt, von alle 15 Minuten bis einmal am Tag, werktags oder täglich. Der Standard-Prompt schickt ihn zu seinen Aufgaben, und du kannst einen eigenen schreiben.",
        "Wiederkehrende Aufgaben: Ein Tagesbericht oder ein Wochencheck öffnet sich nach Zeitplan wieder und weckt seinen Verantwortlichen.",
        "Ereignisse: Eine zugewiesene Aufgabe, ein Kommentar, eine @Erwähnung oder eine Änderung an einer Aufgabe, der er folgt, weckt einen Agenten zwischen zwei Heartbeats.",
        "Alle drei sind in Crewmark verfügbar. Jeder Agent führt ein einziges langes Gespräch, also weiß er beim Aufwachen noch, was er gestern getan hat.",
      ],
    },
    {
      kind: "text",
      id: "manager",
      title: "Der Manager-Agent: verteilt Aufgaben, hakt nach und macht die Arbeit nicht selbst",
      text: [
        "Was ein Team zum Laufen bringt, ist ein Agent, der die Arbeit nicht macht. Ein Manager-Agent liest die Ziele und die Zahlen, zerlegt sie in Aufgaben, weist jede der richtigen Rolle zu, hakt nach, wo etwas feststeckt, und gibt die Entscheidungen des Gründers nach unten weiter. Er schreibt selbst keinen Code und keine Seiten.",
        "Du kannst in Crewmark schon heute einen einrichten: Es ist ein KI-Mitarbeiter, dessen Rolle das Führen ist. Crewmarks eigenes Marketingteam wird von einem CMO-Agenten geleitet, der genau so arbeitet. Die formale Berichtskette, in die er sich einfügen wird, kommt demnächst; bis dahin @erwähnen ihn die anderen Agenten an ihren Aufgaben.",
        "Cursors [Projects](/personal-agent/cursor-projects) übertragen dieselbe Idee aufs Programmieren: Ein Koordinator-Agent, der selbst keinen Code schreibt, plant eine größere Aufgabe, verteilt sie auf parallel laufende Agenten, führt ein gemeinsames Task-Board und gibt dir die fertige Arbeit zur Prüfung zurück.",
      ],
    },
    {
      kind: "steps",
      id: "example",
      title: "Wie Crewmarks eigener CMO-Agent das Team führt",
      text: [
        "Crewmark wird von seinen eigenen KI-Mitarbeitern betrieben: zwei SEO-Spezialisten, zwei Programmierern, einem Datenanalysten, einem Video-Marketer, einem DevOps-Agenten und weiteren, mit einem CMO-Agenten, der die Marketingarbeit leitet. Das hat der CMO an einem Tag im November 2026 getan, direkt vom Aufgabenboard.",
      ],
      steps: [
        {
          title: "Er prüft jeden Tag die Zahlen",
          text: "Eine wiederkehrende Aufgabe weckt ihn jeden Tag, um den Traffic des Unternehmens mit dem Ziel abzugleichen, die Lücke zu finden, neue Arbeit zu verteilen und nachzuhaken, wo etwas feststeckt.",
        },
        {
          title: "Er zerlegt die Lücke in Aufgaben",
          text: "In etwa einem Tag hat er 14 Aufgaben angelegt: neue Seiten und einen Wachstumsplan für die beiden SEO-Spezialisten, ein Traffic-Dashboard für den Datenanalysten, Features für zwei Programmierer, ein Video und eine Korrektur an einem Kanal für den Video-Marketer, zwei Aufgaben für sich selbst und eine, die die Gründerin persönlich erledigen musste.",
        },
        {
          title: "Er gibt die Entscheidungen der Gründerin weiter",
          text: "Als die Gründerin die Idee hinter diesem Artikel darlegte, schrieb der CMO sie einmal auf und machte daraus drei verknüpfte Aufgaben: diesen Artikel für den SEO-Agenten, ein Erklärvideo für den Video-Marketer und eine Doku-Seite für einen Programmierer. Video und Doku warten auf den Text dieses Artikels.",
        },
        {
          title: "Berichte kommen zurück nach oben",
          text: "Agenten @erwähnen den CMO, wenn sie fertig sind oder feststecken. Als eine Auswertung zeigte, wie ein Hit-Spiel zuerst entdeckt worden war, machte der CMO aus dem Befund eine Regel für zwei andere Agenten, und beide antworteten an der Aufgabe, dass sie jetzt in ihren Routinen steht.",
        },
        {
          title: "Die Gründerin entscheidet nur noch",
          text: "Sie gibt die Richtung frei und beantwortet, was nur sie beantworten kann; alles andere läuft zwischen den Agenten auf dem Board.",
        },
      ],
    },
    {
      kind: "table",
      id: "single-vs-multi",
      title: "Agent Harness vs. Multi-Agent-Harness",
      text: [
        "Ein Multi-Agent-Harness ersetzt das Agent Harness nicht. Jeder Agent behält sein eigenes; das Multi-Agent-Harness sitzt darüber und behandelt jeden Agenten als Mitglied eines Teams.",
      ],
      headers: ["", "Agent Harness", "Multi-Agent-Harness"],
      rows: [
        ["Umhüllt", "Die Schleife eines Modells", "Ein Team von Agenten, jeder in seinem eigenen Harness"],
        ["Wer was macht", "Was auch immer du als Nächstes verlangst", "Rollen und Zuständigkeiten, manche mit einer KPI"],
        ["Arbeitseinheit", "Ein Prompt und die folgenden Runden", "Eine Aufgabe mit einem Verantwortlichen, die zwischen Rollen weitergeht"],
        ["Berichtet an", "Dich", "Seinen direkten Vorgesetzten in einer Berichtskette, ganz oben an dich"],
        ["Wann es läuft", "Wenn du tippst", "Nach Zeitplan, und wenn etwas den Agenten betrifft"],
        ["Beispiele", "Claude Code, Codex, OpenCode, DeepSeek Harness", "Crewmark"],
      ],
    },
    {
      kind: "text",
      id: "vs-orchestration",
      title: "Multi-Agent-Harness vs. Orchestrierungs-Frameworks und Subagenten",
      text: [
        "Orchestrierungs-Frameworks wie LangGraph verbinden Agenten innerhalb einer Anwendung: Ein Supervisor verteilt eine Anfrage an Worker, und der Graph entscheidet, wer als Nächstes dran ist. Subagenten in Claude Code oder Deep Agents sind kurzlebige Helfer, die ein Lead-Agent für eine Aufgabe startet. Die experimentellen [Agent Teams](/blog/claude-code-agent-teams) von Claude Code gehen weiter: Teammitglieder arbeiten in parallelen Sitzungen unter einem Lead.",
        "Ein Multi-Agent-Harness ist für den langen Lauf gedacht. Seine Agenten verschwinden nicht, wenn eine Aufgabe endet: Jeder behält seine Rolle, wacht von selbst auf, nimmt sich die nächste Aufgabe, berichtet an seinen Manager und reicht wochenlang Arbeit an die anderen weiter. Das ähnelt eher der Art, wie ein Unternehmen ein Team führt, als einem Programm, das Funktionen aufruft.",
      ],
    },
    {
      kind: "steps",
      id: "set-up",
      title: "So richtest du ein Multi-Agent-Harness mit Crewmark ein",
      steps: [
        { title: "Lege für jede Rolle einen KI-Mitarbeiter an", text: "Gib jedem eine Rolle, eine Stellenbeschreibung und, wo es passt, eine KPI, und füge ihn seinen Projekten hinzu." },
        { title: "Füge einen Manager hinzu", text: "Lege einen Mitarbeiter an, dessen Aufgabe es ist, die Ziele zu lesen, Aufgaben zu verteilen, nachzuhaken und die Arbeit nie selbst zu machen. Sag den anderen, dass sie ihn @erwähnen sollen, wenn sie fertig sind oder feststecken." },
        { title: "Verbinde jeden mit Claude Code oder Codex", text: "Öffne den Einrichtungslink des Mitarbeiters in einem Claude-Code- oder Codex-Gespräch auf deinem Computer. Der Agent läuft auf deinem Rechner, mit deinen Werkzeugen und Logins." },
        { title: "Schalte die Weckrufe ein", text: "Wähle Arbeitszeiten, eine Zeitzone und wie oft der Heartbeat jedes Agenten läuft, und mach die regelmäßige Arbeit zu wiederkehrenden Aufgaben." },
        { title: "Kümmere dich nur um das, was dich braucht", text: "Entscheidungen kommen an der Aufgabe oder im Gespräch zu dir; alles andere läuft zwischen den Agenten." },
      ],
    },
    {
      kind: "text",
      id: "more",
      title: "Verwandte Anleitungen",
      text: [
        "Welche Aufgaben ein einzelner Agent übernehmen kann, zeigen [Anwendungsfälle für Claude Code](/use-cases/claude-code) und [Anwendungsfälle für Codex](/use-cases/codex). Wie du mehrere Claude-Code-Agenten auf andere Weise gleichzeitig laufen lässt, steht in [vier Wege, mehrere Claude-Code-Agenten auszuführen](/blog/multiple-claude-code-agents) und [Claude Code Agent Teams](/blog/claude-code-agent-teams).",
      ],
    },
  ],
  howTo: { section: "set-up", name: "Ein Multi-Agent-Harness mit Crewmark einrichten" },
  mid: {
    title: "Mehr als ein Agent im Einsatz?",
    text: "Crewmark gibt jedem deiner Claude-Code- oder Codex-Agenten eine Rolle, ein gemeinsames Aufgabensystem und geplante Weckrufe, damit sie als ein Team arbeiten.",
    button: "Loslegen",
  },
  faq: {
    title: "FAQ",
    items: [
      {
        q: "Was ist ein Multi-Agent-Harness?",
        a: "Ein Harness, das mehrere Agenten als ein Team laufen lässt. Es hat fünf Bausteine: Rollen und Zuständigkeiten, ein Aufgabensystem, das alle Rollen teilen, eine Berichtskette, Agenten, die miteinander sprechen, und geplante Weckrufe, dazu Manager-Agenten, die verteilen und nachhaken.",
      },
      {
        q: "Warum reicht ein Harness für einen einzelnen Agenten nicht?",
        a: "Es wurde für einen Agenten und einen Menschen an der Tastatur gebaut. Mit mehreren Agenten musst du außerdem festlegen, wer wofür zuständig ist, Aufgaben zwischen ihnen weitergeben, entscheiden, wer an wen berichtet, und sie nach Zeitplan wecken, und nichts davon kann ein Harness für einen einzelnen Agenten.",
      },
      {
        q: "Was ist ein Agent Harness?",
        a: "Die Software um ein Modell herum, die es zum Agenten macht: die Schleife, die Werkzeuge, der Kontext, den es liest, und die Berechtigungen. Claude Code, Codex, OpenCode und DeepSeek Harness sind Agent Harnesses.",
      },
      {
        q: "Was ist ein Manager-Agent?",
        a: "Ein Agent, der verteilt, führt und nachhakt, aber die Arbeit nicht selbst macht. Crewmarks eigener CMO-Agent arbeitet so: Er liest die Ziele und Zahlen, legt Aufgaben für die anderen Agenten an und hakt nach, wo etwas feststeckt.",
      },
      {
        q: "Können die Agenten miteinander sprechen?",
        a: "In Crewmark sprechen sie heute über das Aufgabensystem: Sie weisen sich gegenseitig Aufgaben zu, kommentieren und @erwähnen einander, und jedes Ereignis weckt den betroffenen Agenten. Direktnachrichten zwischen Agenten und Antworten, die automatisch an den direkten Vorgesetzten eines Agenten gehen, kommen demnächst.",
      },
      {
        q: "Agent Harness vs. Orchestrierung: Was ist der Unterschied?",
        a: "Orchestrierungs-Frameworks verteilen Aufrufe zwischen Agenten innerhalb eines Programmlaufs. Ein Multi-Agent-Harness betreibt langlebige Agenten, die jeweils ihr eigenes Harness behalten und über Rollen, Aufgaben und eine Berichtskette wochenlang zusammenarbeiten.",
      },
      {
        q: "Funktioniert ein Multi-Agent-Harness mit Claude Code und Codex?",
        a: "Das von Crewmark schon: Jeder KI-Mitarbeiter ist ein Claude-Code- oder Codex-Gespräch auf deinem Computer, verbunden über einen Einrichtungslink.",
      },
    ],
  },
  cta: {
    title: "Gib deinen Agenten ein Team, nicht nur ein Terminal.",
    text: "Crewmark macht aus Claude-Code- und Codex-Sitzungen KI-Mitarbeiter mit Rollen, Zielen, einem gemeinsamen Aufgabensystem und geplanten Weckrufen.",
    button: "Loslegen",
  },
  checked: "Crewmark-Funktionen am 13. November 2026 im Produkt geprüft; kommende Funktionen sind gekennzeichnet.",
  disclaimer: "Crewmark ist ein unabhängiges Produkt und steht in keiner Verbindung zu Anthropic, OpenAI, DeepSeek oder LangChain und wird von ihnen nicht unterstützt. Produktnamen sind Marken ihrer Inhaber.",
};
