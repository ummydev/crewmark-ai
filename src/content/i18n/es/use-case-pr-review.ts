import type { GuideCopy } from "@/components/landing/guide-article";

// es translation of /use-cases/pr-review; the English master is src/content/use-cases/pr-review.ts.

const claudeDocs = "https://code.claude.com/docs/en/code-review-local";

const commands = `# Claude Code: revisa una pull request y publica comentarios en línea
/code-review 142 --comment

# Codex: pide una revisión en un comentario de la PR en GitHub
@codex review
@codex review for issues in the database migration`;

const rules = `## Code Review Rules
- Señala los tests que faltan en ramas nuevas de billing/ y auth/.
- Toda migración SQL necesita un rollback; dilo si no lo tiene.
- No comentes el formato; de eso se encarga el linter.
- No apruebes nada ni pidas cambios en nada: solo comenta.`;

export const copy: GuideCopy = {
  meta: {
    title: "Revisión de código con IA en cada PR con Claude Code y Codex",
    description:
      "Tres formas de tener revisión de código con IA en las pull requests con Claude Code y Codex: /code-review con comentarios en línea, @codex review y revisiones automáticas, y un empleado de IA que revisa cada PR del tablero. Comandos, reglas de revisión para copiar y límites.",
  },
  breadcrumb: "Revisión de código con IA en cada PR",
  parent: { name: "Casos de uso", href: "/use-cases" },
  hero: {
    kicker: "Casos de uso · Ingeniería",
    title: "Revisión de código con IA en cada pull request con Claude Code y Codex",
    lead: "Tanto Claude Code como Codex pueden revisar una pull request y dejar comentarios en línea en GitHub. Puedes lanzar tú la revisión, hacer que empiece sola o darle a un empleado de IA el trabajo de revisar todo lo que llegue al tablero. Esta página recoge los comandos de cada opción, las reglas de revisión que vale la pena dejar por escrito, lo que los revisores no harán y cómo convertir la revisión en un trabajo fijo en lugar de algo que tienes que acordarte de pedir.",
    cta: "Empezar",
    secondary: "Los comandos",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "table",
      id: "options",
      title: "Tres formas de tener revisión con IA en una pull request",
      headers: ["Opción", "Cómo empieza", "Dónde se ejecuta", "Ideal para"],
      rows: [
        ["`/code-review` de Claude Code", "Lo ejecutas tú, con un número de PR; `--comment` publica comentarios en línea", "Tu propia sesión de Claude Code, con cualquier plan", "Revisar tu rama o una PR antes de hacer merge"],
        ["Claude Code Review (gestionado)", "Un Owner de la organización lo activa para los repositorios; cualquiera puede comentar `@claude review`", "El servicio de Anthropic", "Equipos con planes de Claude que quieren revisiones bajo demanda"],
        ["Revisión de código de Codex", "`@codex review` en un comentario de la PR, o Automatic review en los ajustes de Codex", "La nube de OpenAI", "Equipos con planes de ChatGPT; señala problemas P0 y P1 en GitHub"],
        ["Un empleado de IA", "Una issue de revisión en el tablero, o cada PR que se le asigna", "Tu propio Claude Code o Codex, con un heartbeat", "Un trabajo fijo: cada PR revisada, seguimientos registrados"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Cómo revisar una pull request con Claude Code o Codex",
      steps: [
        {
          title: "Claude Code: ejecuta /code-review",
          text: "En una sesión de Claude Code, `/code-review` busca bugs en los cambios de tu rama; pásale un número de PR para revisar esa pull request y `--comment` para publicar lo que encuentre en GitHub como comentarios en línea. `--fix`, en cambio, aplica los arreglos a tu working tree. `/review` es un alias.",
          code: commands,
        },
        {
          title: "Codex: menciona @codex review",
          text: "En un comentario de la pull request, escribe `@codex review`; Codex reacciona con 👀 y publica una revisión. Añade un foco detrás si quieres uno. Para revisar sin pedirlo, activa Automatic review en los ajustes de Codex y elige el disparador.",
        },
        {
          title: "Deja tus reglas de revisión por escrito",
          text: "Codex lee una sección `## Code Review Rules` del AGENTS.md más cercano al código. Para Claude Code, pon las mismas reglas en CLAUDE.md. Las reglas hacen que las revisiones sean coherentes y las apartan de los temas que ya cubre tu linter.",
          code: rules,
        },
      ],
      source: { label: "Fuente: documentación de Claude Code, revisión local con /code-review", href: claudeDocs },
    },
    {
      kind: "text",
      id: "limits",
      title: "Lo que la revisión con IA no hará",
      points: [
        "Aprobar o bloquear: el Code Review gestionado de Claude nunca aprueba ni bloquea una pull request, y un buen brief de revisión le dice a un empleado que solo comente.",
        "Sustituir a la persona responsable del cambio: detecta bugs y tests que faltan; las decisiones de producto y de diseño siguen siendo de personas.",
        "Verlo todo: Codex en GitHub solo señala problemas P0 y P1 para mantener los comentarios enfocados. Pide un foco concreto cuando lo necesites.",
        "Salir gratis: las revisiones consumen el uso de tu plan. Revisa bajo demanda, o al marcar la PR como lista para revisión, en lugar de en cada push.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Con Crewmark",
      title: "Haz que la revisión sea el trabajo de alguien",
      text: [
        "Los comandos revisan cuando alguien se acuerda de ejecutarlos. Un empleado de IA revisa porque es su trabajo: Crewmark convierte tu Claude Code o Codex en un ingeniero que se despierta con un heartbeat, toma las pull requests que esperan revisión y las comenta.",
      ],
      steps: [
        {
          title: "Empieza por el rol",
          text: "El [ingeniero de software de IA](/ai-employees/software-engineer), con tus reglas de revisión en su brief.",
        },
        {
          title: "Lleva las revisiones al tablero",
          text: "Asígnale issues de revisión, o añade una issue recurrente para revisar cada pull request abierta marcada como lista.",
        },
        {
          title: "Más trabajos de ingeniería",
          text: "Consulta [Claude Code para ingeniería](/for/engineering) y [triaje de errores de Sentry](/use-cases/sentry-error-triage).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Revisar una pull request con Claude Code o Codex" },
  mid: {
    title: "¿Quieres cada pull request revisada sin tener que pedirlo?",
    text: "Un ingeniero de Crewmark con tu Claude Code o Codex revisa lo que está esperando, con un heartbeat.",
    button: "Empezar",
  },
  faq: {
    title: "Preguntas frecuentes",
    items: [
      {
        q: "¿Cómo reviso una pull request con Claude Code?",
        a: "Ejecuta `/code-review <PR number> --comment` en una sesión de Claude Code para publicar lo que encuentre como comentarios en línea en GitHub. Sin `--comment` informa en la sesión; `--fix` aplica los arreglos en local.",
      },
      {
        q: "¿/review es lo mismo que /code-review en Claude Code?",
        a: "La documentación de Claude Code indica que `/review` es un alias de `/code-review`.",
      },
      {
        q: "¿Cómo hago que Codex revise una pull request?",
        a: "Comenta `@codex review` en la pull request, o activa Automatic review en los ajustes de Codex para que las revisiones empiecen con el disparador que elijas. La revisión de código tiene que estar activada para el repositorio.",
      },
      {
        q: "¿Puedo darle al revisor de IA las reglas de nuestro equipo?",
        a: "Sí. Codex lee una sección `## Code Review Rules` en AGENTS.md; para Claude Code, pon las mismas reglas en CLAUDE.md.",
      },
      {
        q: "¿La IA aprobará o hará merge de las pull requests?",
        a: "El Code Review gestionado de Claude nunca aprueba ni bloquea, y el merge debería seguir en manos de personas. El brief de un empleado de IA debería decirle que solo comente.",
      },
    ],
  },
  cta: {
    title: "Cada pull request revisada, sin que nadie tenga que acordarse de pedirlo.",
    text: "Crewmark convierte sesiones de Claude Code y Codex en empleados de IA con roles, objetivos, horario laboral y un heartbeat.",
    button: "Empezar",
  },
  checked: "Comprobado con la documentación de revisión de código de Claude Code y la de Codex de OpenAI el 10 de noviembre de 2026.",
  disclaimer:
    "Crewmark es un producto independiente, sin relación con Anthropic, OpenAI ni GitHub y sin su respaldo. Los nombres de los productos son marcas de sus titulares.",
};
