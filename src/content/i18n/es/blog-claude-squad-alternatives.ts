import type { GuideCopy } from "@/components/landing/guide-article";

// Spanish translation of /blog/claude-squad-alternatives; the English master is src/content/blog/claude-squad-alternatives.ts.

const repo = "https://github.com/smtg-ai/claude-squad";

const usage = `# Claude Squad: Claude Code by default, or another agent with -p
cs
cs -p "codex"

# Claude Code on its own: one worktree and branch per session
claude --worktree fix-login
claude --worktree add-billing`;

export const copy: GuideCopy = {
  meta: {
    title: "Alternativas a Claude Squad (y Claude Squad vs Conductor)",
    description:
      "Qué hace Claude Squad, dónde se queda corto (solo tmux, sin Windows, tú inicias cada tarea) y las alternativas para ejecutar varios agentes de Claude Code o Codex: los worktrees de Claude Code, Paradev, Kanban Code, Conductor y Crewmark.",
  },
  breadcrumb: "Alternativas a Claude Squad",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-07" },
  hero: {
    kicker: "Blog · Agentes de programación con IA",
    title: "Alternativas a Claude Squad: otras formas de ejecutar varios agentes de programación a la vez",
    lead: "Claude Squad es una app de terminal de código abierto (AGPL-3.0) para ejecutar varios agentes de programación en paralelo: cada tarea tiene su propia sesión de tmux y su propio worktree de git, y revisas los cambios antes de hacer push. Funciona bien si vives en la terminal en macOS o Linux. La gente busca una alternativa cuando quiere una app gráfica, necesita Windows o quiere que los agentes tomen el trabajo sin tener que iniciarlos uno por uno. Esta guía compara las opciones, incluido Claude Squad vs Conductor.",
    cta: "Empezar",
    secondary: "Compara las alternativas",
    secondaryHref: "#alternatives",
  },
  sections: [
    {
      kind: "text",
      title: "Qué hace bien Claude Squad y dónde se queda corto",
      text: [
        "La última versión de Claude Squad es la v1.0.20, del 20 de agosto de 2026, y sigue mantenido. Ejecuta Claude Code por defecto y otros agentes de terminal con `-p`, como Codex o Aider.",
      ],
      points: [
        "Bien: una sesión de tmux y un worktree de git por tarea, así que los agentes nunca editan los mismos archivos.",
        "Bien: revisas el diff de cada instancia y haces checkout de su rama antes de hacer push.",
        "Bien: un modo experimental `-y` (auto-yes) acepta los prompts para que las tareas terminen en segundo plano.",
        "Límite: necesita tmux y GitHub CLI; el README no menciona Windows, donde tmux implica usar WSL.",
        "Límite: es una interfaz de terminal. No hay tablero ni una vista compartida para un equipo, y tú inicias cada tarea.",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Cómo ejecutar varios agentes en paralelo, con o sin Claude Squad",
      steps: [
        {
          title: "Dale a cada tarea su propio worktree",
          text: "Es la base de Claude Squad, y Claude Code ahora lo hace por sí mismo: `claude --worktree <name>` inicia una sesión en su propia rama y checkout. Consulta la [guía de worktrees de Claude Code](/blog/claude-code-worktree).",
          code: usage,
        },
        {
          title: "Elige cómo quieres vigilarlos",
          text: "Una lista en la terminal (Claude Squad), una app de escritorio (Paradev, o Conductor mientras dure) o un tablero kanban de sesiones (Kanban Code). Consulta [tableros kanban para Claude Code](/blog/claude-code-kanban).",
        },
        {
          title: "Decide quién inicia la siguiente tarea",
          text: "En todas estas opciones tú inicias cada sesión. Si quieres que los agentes tomen la siguiente issue por su cuenta, dales un horario o un heartbeat; consulta [cómo hacer que Claude Code sea proactivo](/proactive-claude-code).",
        },
        {
          title: "Revisa antes de hacer merge",
          text: "Sea lo que sea que ejecute los agentes, deja el merge en manos de una persona: lee cada diff, ejecuta las comprobaciones y luego haz merge.",
        },
      ],
      source: { label: "Fuente: README de Claude Squad", href: repo },
    },
    {
      kind: "table",
      id: "alternatives",
      title: "Alternativas a Claude Squad comparadas",
      text: ["Datos del sitio o repositorio de cada proyecto, comprobados en noviembre de 2026."],
      headers: ["", "Interfaz", "Agentes", "Plataformas", "Quién inicia las tareas", "Licencia"],
      rows: [
        ["Claude Squad", "Interfaz de terminal (tmux)", "Claude Code, Codex, Gemini, Aider", "Necesita tmux y gh; Windows mediante WSL", "Tú", "AGPL-3.0"],
        ["Claude Code por sí solo", "`claude --worktree`, sesiones en paralelo en la app de escritorio", "Claude Code", "macOS, Windows, Linux", "Tú (o un horario)", "Comercial (Anthropic)"],
        ["Paradev (antes Superset)", "App de escritorio, un worktree por tarea; automatizaciones", "Claude, Codex, Cursor Agent, OpenCode y cualquier agente CLI", "macOS; Linux experimental; aún sin Windows", "Tú, o una automatización", "MIT"],
        ["Kanban Code", "Tablero kanban de sesiones de Claude Code", "Claude Code", "App para macOS 26, app para Windows", "Tú", "Apache 2.0"],
        ["Conductor", "App de Mac para agentes en paralelo; se une a Meta, la nube termina el 20 de noviembre de 2026", "Claude Code, Codex, Cursor, OpenCode", "macOS", "Tú", "Comercial"],
        ["Crewmark", "Tablero alojado con empleados de IA que se despiertan con un heartbeat", "Claude Code, Codex, DeepSeek Harness, OpenCode", "Tablero web; daemon en macOS, Windows, Linux", "El empleado toma la siguiente issue", "Comercial"],
      ],
    },
    {
      kind: "text",
      title: "Claude Squad vs Conductor",
      text: [
        "Ambos ejecutan varios agentes en worktrees paralelos. Claude Squad es una app de terminal gratuita y de código abierto; Conductor era una app de Mac pulida con un flujo de revisión y workspaces en la nube. Conductor [se une a Meta](/blog/conductor-alternatives): los nuevos registros están cerrados, su nube se apaga el 20 de noviembre de 2026 y la app local solo recibe actualizaciones hasta principios de 2027. Si hoy tuvieras que elegir entre los dos, Claude Squad es el que sigue en desarrollo.",
      ],
    },
    {
      kind: "text",
      title: "Qué alternativa a Claude Squad te conviene",
      points: [
        "Solo usas Claude Code: prueba su flag integrado `--worktree` y las sesiones en paralelo de la app de escritorio antes de añadir otra herramienta.",
        "Quieres una app de escritorio para muchos agentes en un Mac: Paradev.",
        "Quieres ver las sesiones como tarjetas: Kanban Code, o lee [tableros kanban para Claude Code](/blog/claude-code-kanban).",
        "Usas Windows: la CLI y la app de escritorio de Claude Code funcionan de forma nativa; Claude Squad necesita WSL.",
        "Quieres que los agentes sigan trabajando sin que tú inicies cada tarea, con un tablero que comparte tu equipo: Crewmark (abajo). Consulta también [varios agentes de Claude Code](/blog/multiple-claude-code-agents).",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Con Crewmark",
      title: "De un squad que manejas tú a un equipo que trabaja por su cuenta",
      text: [
        "Claude Squad hace que ejecutar agentes en paralelo sea fácil, pero cada uno espera a que tú lo inicies. Crewmark convierte una sesión de Claude Code, Codex, DeepSeek Harness u OpenCode en un empleado de IA con un rol, un objetivo y un horario laboral. Se despierta con un heartbeat, toma la siguiente issue de un tablero compartido, trabaja en su propio checkout y te escribe cuando necesita una decisión, con la suscripción que ya pagas.",
      ],
      steps: [
        {
          title: "Conecta tu repositorio y tu agente",
          text: "Ejecuta el comando de configuración en el proyecto. Varios empleados pueden compartir un repositorio, cada uno en su propio checkout.",
        },
        {
          title: "Dale un rol a cada uno",
          text: "Un ingeniero, un revisor, un redactor SEO, cada uno con un objetivo. Consulta [roles de empleados de IA](/ai-employees).",
        },
        {
          title: "Llena el tablero y revisa",
          text: "Cada 15, 30 o 60 minutos durante el horario laboral, cada empleado toma la siguiente issue; tú revisas los pull requests y respondes preguntas.",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Ejecutar varios agentes de programación en paralelo" },
  mid: {
    title: "¿Cansado de iniciar cada agente tú mismo?",
    text: "Los empleados de IA de Crewmark toman la siguiente issue con cada heartbeat, con el plan de Claude Code o Codex que ya pagas.",
    button: "Empezar",
  },
  faq: {
    title: "Preguntas frecuentes sobre Claude Squad",
    items: [
      {
        q: "¿Qué es Claude Squad?",
        a: "Una app de terminal de código abierto (AGPL-3.0) de smtg-ai que ejecuta varios agentes de programación a la vez, cada uno en su propia sesión de tmux y su propio worktree de git, para que puedas revisar cada cambio antes de hacer push.",
      },
      {
        q: "¿Claude Squad funciona con Codex?",
        a: "Sí. Ejecútalo con `cs -p \"codex\"` después de configurar tu clave de API de OpenAI. También inicia Gemini y Aider, y Claude Code por defecto.",
      },
      {
        q: "¿Claude Squad funciona en Windows?",
        a: "Su README no menciona Windows y necesita tmux, así que en Windows tendrías que ejecutarlo en WSL. El flag `--worktree` de Claude Code y su app de escritorio funcionan en Windows de forma nativa.",
      },
      {
        q: "¿Claude Squad sigue mantenido?",
        a: "Sí. Su última versión es la v1.0.20, del 20 de agosto de 2026.",
      },
      {
        q: "¿Claude Squad o Conductor?",
        a: "Conductor se une a Meta y está cerrando, y su nube termina el 20 de noviembre de 2026. Claude Squad es de código abierto y sigue en desarrollo.",
      },
      {
        q: "¿Todavía necesito Claude Squad ahora que Claude Code tiene worktrees?",
        a: "No solo para aislar el trabajo: `claude --worktree` da a cada sesión su propia rama. Claude Squad sigue siendo útil si quieres una sola vista de terminal para gestionar muchas sesiones y agentes distintos de Claude Code.",
      },
    ],
  },
  cta: {
    title: "Dirige un equipo, no solo un squad.",
    text: "Crewmark convierte las sesiones de Claude Code, Codex, DeepSeek Harness y OpenCode en empleados de IA con roles, objetivos, horario laboral y un heartbeat.",
    button: "Empezar",
  },
  checked: "Comprobado con el README y las versiones de Claude Squad y con el sitio o repositorio de cada alternativa el 7 de noviembre de 2026.",
  disclaimer:
    "Crewmark es un producto independiente, sin afiliación ni respaldo de smtg-ai, Claude Squad, Paradev, Kanban Code, Conductor, Anthropic u OpenAI. Los nombres de productos son marcas comerciales de sus propietarios.",
};
