import type { GuideCopy } from "@/components/landing/guide-article";

// Spanish translation of /blog/vibe-kanban-alternatives; the English master is src/content/blog/vibe-kanban-alternatives.ts.

const shutdown = "https://www.vibekanban.com/blog/shutdown";

const keep = `# Keep running the local, community-maintained app
npx vibe-kanban

# Find the worktrees it made, then push the branches you want to keep
git worktree list
cd <worktree path>
git add -A && git commit -m "WIP from Vibe Kanban"
git push -u origin HEAD`;

export const copy: GuideCopy = {
  meta: {
    title: "Alternativas a Vibe Kanban tras su cierre (2026)",
    description:
      "La empresa de Vibe Kanban cerró y su tablero en la nube ya no existe. Qué sigue funcionando, cómo conservar tus issues y las alternativas para ejecutar Claude Code y Codex desde un tablero: Paradev, Nimbalyst, Claude Squad, Kanban Code y Crewmark.",
  },
  breadcrumb: "Alternativas a Vibe Kanban",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-07" },
  hero: {
    kicker: "Blog · Agentes de programación con IA",
    title: "Alternativas a Vibe Kanban: dónde ejecutar tus agentes desde un tablero ahora",
    lead: "Vibe Kanban te permitía planificar el trabajo de los agentes de programación como issues de kanban, abrir un workspace para cada una, revisar el diff y abrir un pull request, con Claude Code, Codex y otros ocho agentes. El 10 de abril de 2026, bloop, la empresa detrás del proyecto, anunció su cierre. La app de código abierto sigue funcionando en local, pero las issues, comentarios, proyectos y organizaciones alojados desaparecieron, y la última versión salió el 24 de abril de 2026. Esta guía explica qué sigue funcionando, cómo conservar tu trabajo y cuáles son las alternativas.",
    cta: "Empezar",
    secondary: "Compara las alternativas",
    secondaryHref: "#alternatives",
  },
  sections: [
    {
      kind: "text",
      title: "Qué pasó con Vibe Kanban",
      text: [
        "bloop explicó que la mayoría de los usuarios estaban en planes gratuitos y que no encontró un modelo de negocio que quisiera seguir. Los servicios remotos siguieron activos 30 días después del anuncio y luego Vibe Kanban pasó a una arquitectura totalmente local; las páginas de proyecto ahora llevan a una exportación de datos. Se reembolsaron las facturas pagadas en los 30 días anteriores.",
      ],
      points: [
        "Sigue funcionando: `npx vibe-kanban` inicia la app local, y los workspaces locales siguen funcionando. El código sigue siendo de código abierto bajo Apache 2.0 y lo mantiene la comunidad.",
        "Ya no existe: las issues de kanban, comentarios, proyectos y organizaciones alojados que compartían los equipos.",
        "Cada vez más desactualizado: no ha habido ninguna versión desde la v0.1.44 del 24 de abril de 2026, así que no se incorporan las nuevas versiones de los agentes.",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Cómo conservar tu trabajo",
      steps: [
        {
          title: "Exporta tus datos",
          text: "Abre la última versión de la app y usa su exportación de datos. Las páginas de proyecto ahora llevan directamente a ella.",
        },
        {
          title: "Sube cada rama que te importe",
          text: "Cada workspace era un worktree de git en su propia rama. Haz commit y push de las que quieras conservar, para que el código viva en tu repositorio y no en la app.",
          code: keep,
        },
        {
          title: "Lleva las issues abiertas a un lugar compartido",
          text: "Si tu equipo usaba el tablero alojado, vuelve a crear las issues abiertas en GitHub Issues o en el tablero de la herramienta que elijas, antes de que alguien olvide de qué trataban.",
        },
        {
          title: "Prueba una tarea real en el reemplazo",
          text: "Compara las opciones de abajo y lleva una issue de principio a fin hasta el pull request antes de migrarlo todo.",
        },
      ],
      source: { label: "Fuente: el anuncio de cierre de Vibe Kanban", href: shutdown },
    },
    {
      kind: "table",
      id: "alternatives",
      title: "Alternativas a Vibe Kanban comparadas",
      text: ["Datos tomados del sitio o del repositorio de GitHub de cada proyecto el 7 de noviembre de 2026."],
      headers: ["", "Qué es", "Agentes", "Plataformas", "Tablero", "Licencia"],
      rows: [
        ["Vibe Kanban (comunidad)", "App local: issues de kanban, un workspace por issue, revisión de diffs, PR", "Claude Code, Codex, Gemini CLI, Copilot, Amp, Cursor, OpenCode y más", "Se ejecuta con `npx`; en remoto mediante Docker", "Sí, ahora solo en local", "Apache 2.0"],
        ["Paradev (antes Superset)", "Workspace de escritorio que ejecuta muchos agentes en paralelo, cada uno en su propio worktree; automatizaciones y sandboxes en la nube", "Claude, Codex, Cursor Agent, OpenCode y cualquier agente de CLI", "macOS; Linux experimental; todavía sin Windows", "No describe un tablero", "MIT"],
        ["Nimbalyst", "Workspace visual para agentes, tareas, documentos, wiki, diagramas y código", "Claude Code, Codex", "macOS, Windows, Linux", "Tareas junto a documentos y código", "Código abierto; gratis para particulares"],
        ["Claude Squad", "App de terminal: una sesión de tmux más un worktree de git por agente", "Claude Code, Codex, Gemini, Aider", "Requiere tmux y gh", "No (lista en TUI)", "AGPL-3.0"],
        ["Kanban Code", "Tablero kanban para sesiones de Claude Code con un worktree por tarjeta", "Claude Code", "App para macOS 26, Windows (Tauri)", "Backlog, In Progress, Waiting, In Review, Done", "Apache 2.0"],
        ["Crewmark", "Empleados de IA: sesiones de agentes con roles, objetivos, horario laboral y un heartbeat que toma la siguiente issue", "Claude Code, Codex, DeepSeek Harness, OpenCode", "Tablero web; daemon en macOS, Windows, Linux", "Sí, alojado y compartido con tu equipo", "Comercial"],
      ],
    },
    {
      kind: "text",
      title: "Qué alternativa a Vibe Kanban te conviene",
      points: [
        "Quieres la misma app, tal cual: sigue ejecutando la versión de la comunidad en local y vigila el repositorio por si aparece un fork mantenido.",
        "Sobre todo ejecutabas agentes en paralelo y revisabas diffs: Paradev es la app de escritorio mantenida más parecida, en Mac y Linux. El propio flag `--worktree` de Claude Code también cubre sesiones en paralelo aisladas; consulta la [guía de worktrees de Claude Code](/blog/claude-code-worktree).",
        "Vives en la terminal: Claude Squad da a cada agente una sesión de tmux y un worktree.",
        "Quieres el tablero en sí, solo para Claude Code: Kanban Code mueve las tarjetas entre columnas a medida que las sesiones empiezan, esperan y abren PR.",
        "Usabas el tablero alojado con un equipo, o quieres que los agentes tomen issues sin ti: eso es Crewmark (abajo). Conductor era otra opción, pero [se une a Meta y va a cerrar](/blog/conductor-alternatives).",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Con Crewmark",
      title: "Vibe Kanban esperaba a que iniciaras cada tarjeta. Crewmark no.",
      text: [
        "En Vibe Kanban escribías la issue y luego iniciabas el agente. Crewmark conserva el tablero, alojado y compartido, y convierte una sesión de Claude Code, Codex, DeepSeek Harness u OpenCode en un empleado de IA que se despierta con un heartbeat durante su horario laboral y toma la siguiente issue por su cuenta, con la suscripción que ya pagas.",
      ],
      steps: [
        {
          title: "Trae tu repositorio y tu agente",
          text: "Ejecuta el comando de configuración en el proyecto. Cada empleado trabaja en su propia sesión y checkout, igual que un workspace de Vibe Kanban.",
        },
        {
          title: "Vuelve a crear tu tablero",
          text: "Añade tus issues abiertas y asígnalas a un empleado, o déjalas sin asignar para quien esté libre.",
        },
        {
          title: "Deja que el heartbeat inicie el trabajo",
          text: "Cada 15, 30 o 60 minutos, el empleado toma la siguiente issue, comenta sobre la marcha y te escribe cuando necesita una decisión. Lee [qué es un empleado de IA](/ai-employees).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Conservar tu trabajo tras el cierre de Vibe Kanban" },
  mid: {
    title: "¿Perdiste tu tablero alojado? Conserva el tablero y añade empleados.",
    text: "Crewmark le da a tu equipo un tablero compartido donde empleados de Claude Code y Codex toman la siguiente issue con cada heartbeat.",
    button: "Empezar",
  },
  faq: {
    title: "Preguntas frecuentes sobre el cierre de Vibe Kanban",
    items: [
      {
        q: "¿Vibe Kanban va a cerrar?",
        a: "Su empresa, sí. bloop anunció el 10 de abril de 2026 que cerraba. La app de código abierto continúa como proyecto mantenido por la comunidad que se ejecuta en local; las issues, comentarios, proyectos y organizaciones alojados se eliminaron a los 30 días.",
      },
      {
        q: "¿Vibe Kanban sigue funcionando?",
        a: "En local, sí: `npx vibe-kanban` todavía lo inicia y los workspaces locales siguen funcionando. La última versión es la v0.1.44, del 24 de abril de 2026, así que puede que las versiones más nuevas de los agentes no sean compatibles.",
      },
      {
        q: "¿Cómo exporto mis datos de Vibe Kanban?",
        a: "Usa la exportación de datos de la última versión de la app; las páginas de proyecto ahora llevan a ella. Sube también las ramas de tus workspaces a tu remoto de git.",
      },
      {
        q: "¿Cuál es la mejor alternativa a Vibe Kanban?",
        a: "Para agentes en paralelo con revisión de diffs, Paradev (antes Superset). Para un kanban de sesiones de Claude Code, Kanban Code. Para trabajar en la terminal, Claude Squad. Para un tablero compartido donde los agentes toman las issues por su cuenta, Crewmark.",
      },
      {
        q: "¿Hay alguna alternativa de código abierto a Vibe Kanban?",
        a: "Sí: Paradev (MIT), Claude Squad (AGPL-3.0) y Kanban Code (Apache 2.0) son de código abierto, y el propio Vibe Kanban sigue siendo de código abierto bajo Apache 2.0.",
      },
      {
        q: "¿Hay alguna alternativa a Vibe Kanban para Windows?",
        a: "Nimbalyst tiene descarga para Windows y Kanban Code tiene una app para Windows. El tablero de Crewmark funciona en el navegador y su daemon se ejecuta en Windows. Paradev todavía no es compatible con Windows.",
      },
    ],
  },
  cta: {
    title: "Tus agentes necesitan un tablero nuevo. Dales también un trabajo.",
    text: "Crewmark convierte las sesiones de Claude Code, Codex, DeepSeek Harness y OpenCode en empleados de IA con roles, objetivos, horario laboral y un heartbeat.",
    button: "Empezar",
  },
  checked: "Comprobado con el README, las versiones y el anuncio de cierre de Vibe Kanban, y con el sitio o el repositorio de cada alternativa, el 7 de noviembre de 2026.",
  disclaimer:
    "Crewmark es un producto independiente, sin afiliación ni respaldo de bloop, Vibe Kanban, Paradev, Nimbalyst, Claude Squad, Kanban Code, Anthropic ni OpenAI. Los nombres de productos son marcas de sus respectivos propietarios.",
};
