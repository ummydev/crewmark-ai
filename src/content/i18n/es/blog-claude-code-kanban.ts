import type { GuideCopy } from "@/components/landing/guide-article";

// Spanish translation of /blog/claude-code-kanban; the English master is src/content/blog/claude-code-kanban.ts.

const docs = "https://code.claude.com/docs/en/interactive-mode";

const setup = `// ~/.claude/settings.json: only needed if your model
// doesn't have the task tools by default
{
  "env": { "CLAUDE_CODE_ENABLE_TODO_TOOLS": "1" }
}

# Install the board, add its hooks once, then open it
npm install -g claude-code-kanban
claude-code-kanban --install
claude-code-kanban --open`;

const shared = `# Several sessions share one task list
CLAUDE_CODE_TASK_LIST_ID=my-project claude`;

export const copy: GuideCopy = {
  meta: {
    title: "Claude Code kanban: tablero y herramientas | Crewmark AI",
    description:
      "Claude Code tiene una lista de tareas (Ctrl+T), pero no un tablero kanban. Cómo funciona la lista de tareas, cómo llevarla a un tablero y las herramientas kanban para sesiones de Claude Code: claude-code-kanban, Kanban Code, Claudine, Vibe Kanban y Crewmark.",
  },
  breadcrumb: "Tablero kanban para Claude Code",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-07" },
  hero: {
    kicker: "Blog · Claude Code",
    title: "Tablero kanban para Claude Code: de la lista de tareas a un tablero de verdad",
    lead: "Claude Code no incluye un tablero kanban. Tiene una lista de tareas: una checklist que Claude escribe para el trabajo de varios pasos, con tareas pendientes, en curso y completadas, que se muestra u oculta con Ctrl+T. Un \"tablero kanban para Claude Code\" es una de dos cosas construidas encima: un tablero que muestra esa lista de tareas en tu navegador, o un tablero donde cada tarjeta es una sesión o issue completa de Claude Code. Esta guía cubre la lista de tareas integrada, cómo montar un tablero y las herramientas de cada tipo.",
    cta: "Empezar",
    secondary: "Monta un tablero",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "Lo que Claude Code trae integrado: la lista de tareas",
      text: [
        "La lista de tareas es la propia checklist de Claude para el trabajo que tiene delante. No es la vista de tareas en segundo plano: `/tasks` muestra en cambio las shells y los subagentes en ejecución.",
      ],
      points: [
        "Pulsa `Ctrl+T` para mostrarla u ocultarla. Muestra hasta cinco tareas a la vez.",
        "Las tareas sobreviven a la compactación del contexto, así que Claude conserva su plan en los trabajos largos.",
        "Pídele a Claude \"show me all tasks\" o \"clear all tasks\".",
        "Define `CLAUDE_CODE_TASK_LIST_ID` para compartir una lista entre sesiones; se guarda en un directorio con nombre dentro de `~/.claude/tasks/`.",
        "Las herramientas de tareas vienen activadas por defecto en Opus 4.7, Sonnet 4.6, Haiku 4.5 y modelos anteriores. En otros modelos la lista se queda vacía salvo que definas `CLAUDE_CODE_ENABLE_TODO_TOOLS=1`.",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Cómo llevar las tareas de Claude Code a un tablero kanban",
      text: [
        "Usamos claude-code-kanban, un tablero de código abierto que vigila los archivos de tareas que escribe Claude Code y los muestra en tu navegador.",
      ],
      steps: [
        {
          title: "Comprueba que las herramientas de tareas están activadas",
          text: "Si Claude nunca muestra una checklist con `Ctrl+T`, tu modelo no tiene las herramientas de tareas por defecto. Añade la variable de entorno a tu configuración y reinicia Claude Code.",
          code: setup,
        },
        {
          title: "Instala el tablero y sus hooks",
          text: "`claude-code-kanban --install` añade un plugin de Claude Code con hooks. Sin los hooks, el tablero solo muestra tareas, sin actividad en vivo ni avisos pendientes.",
        },
        {
          title: "Ábrelo y sigue trabajando",
          text: "Las tarjetas avanzan por Pending, In Progress y Completed a medida que Claude trabaja, y puedes responder a las preguntas de Claude desde el tablero. Solo escucha en 127.0.0.1, sin inicio de sesión, así que mantenlo en tu propia máquina.",
        },
        {
          title: "Comparte un tablero entre sesiones",
          text: "Inicia cada sesión con el mismo ID de lista de tareas, para que varias sesiones de Claude Code lean y actualicen una sola lista.",
          code: shared,
        },
      ],
      source: { label: "Fuente: documentación de Claude Code, Interactive mode (Task list)", href: docs },
    },
    {
      kind: "table",
      id: "tools",
      title: "Herramientas kanban para Claude Code comparadas",
      text: ["Datos tomados del README o de la ficha de cada proyecto el 7 de noviembre de 2026."],
      headers: ["Herramienta", "Qué es una tarjeta", "Dónde se ejecuta", "Agentes", "Licencia"],
      rows: [
        ["claude-code-kanban", "Una tarea de la lista de tareas de Claude", "Navegador, en tu máquina", "Claude Code", "MIT"],
        ["Kanban Code", "Una sesión de Claude Code, con su propio worktree; columnas Backlog, In Progress, Waiting, In Review, Done", "App para macOS 26; app para Windows", "Claude Code", "Apache 2.0"],
        ["Claudine", "Una conversación de Claude Code o Codex, con estado, rama y errores detectados", "Extensión de VS Code", "Claude Code, Codex", "MIT"],
        ["Vibe Kanban", "Una issue para la que abres un workspace; la empresa cerró y la app funciona en local", "`npx vibe-kanban`", "Claude Code, Codex y muchos más", "Apache 2.0"],
        ["Crewmark", "Una issue que un empleado de IA toma por su cuenta, con un heartbeat", "Tablero web alojado, compartido con un equipo", "Claude Code, Codex, DeepSeek Harness, OpenCode", "Comercial"],
      ],
    },
    {
      kind: "text",
      title: "Qué tipo de tablero necesitas",
      points: [
        "Quieres seguir el plan de una sesión: puede que te baste con la propia lista de tareas de Claude Code (`Ctrl+T`); añade claude-code-kanban para verla más grande en el navegador.",
        "Ejecutas varias sesiones en paralelo y pierdes de vista cuál te necesita: un tablero de sesiones como Kanban Code o Claudine muestra cuáles están trabajando, esperando o listas para revisar. Consulta [varios agentes de Claude Code](/blog/multiple-claude-code-agents) y la [guía de worktrees](/blog/claude-code-worktree).",
        "Usabas Vibe Kanban: consulta las [alternativas a Vibe Kanban](/blog/vibe-kanban-alternatives).",
        "Quieres que el tablero dirija el trabajo, para que los agentes tomen la siguiente tarjeta sin ti: para eso está Crewmark (abajo).",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Con Crewmark",
      title: "Un tablero kanban donde Claude Code toma la siguiente tarjeta por su cuenta",
      text: [
        "Todas las herramientas anteriores te muestran lo que hace Claude; tú sigues iniciando cada sesión y moviendo cada tarjeta. Crewmark convierte una sesión de Claude Code, Codex, DeepSeek Harness u OpenCode en un empleado de IA con un rol, un objetivo y un horario laboral. Se despierta con un heartbeat, toma la siguiente issue de un tablero compartido, comenta sobre la marcha y te escribe cuando necesita una decisión.",
      ],
      steps: [
        {
          title: "Conecta tu proyecto y tu agente",
          text: "Ejecuta el comando de configuración en el repositorio; el empleado trabaja en su propia sesión y checkout, con la suscripción que ya pagas.",
        },
        {
          title: "Llena el tablero",
          text: "Escribe las issues como lo harías para un compañero, y asígnalas o déjalas para quien esté libre.",
        },
        {
          title: "Revisa en lugar de iniciar",
          text: "Cada 15, 30 o 60 minutos durante el horario laboral, el empleado toma la siguiente tarjeta. Lee [cómo hacer que Claude Code sea proactivo](/proactive-claude-code) y [qué es un empleado de IA](/ai-employees).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Llevar las tareas de Claude Code a un tablero kanban" },
  mid: {
    title: "Deja de mover las tarjetas tú mismo.",
    text: "El tablero de Crewmark asigna issues a empleados de Claude Code y Codex que se despiertan con un heartbeat y toman la siguiente.",
    button: "Empezar",
  },
  faq: {
    title: "Preguntas frecuentes sobre kanban en Claude Code",
    items: [
      {
        q: "¿Claude Code tiene un tablero kanban?",
        a: "No. Tiene una lista de tareas, una checklist de elementos pendientes, en curso y completados que se muestra u oculta con Ctrl+T. Los tableros kanban para Claude Code son herramientas de terceros construidas sobre sus archivos de tareas o de sesión.",
      },
      {
        q: "¿Cómo veo la lista de tareas de Claude Code?",
        a: "Pulsa Ctrl+T en una sesión. Muestra hasta cinco tareas; pídele a Claude \"show me all tasks\" para ver la lista completa. Para las shells y los subagentes en ejecución, usa /tasks.",
      },
      {
        q: "¿Por qué está vacía mi lista de tareas de Claude Code?",
        a: "O Claude todavía no ha planificado trabajo de varios pasos, o tu modelo no tiene las herramientas de tareas por defecto. Define CLAUDE_CODE_ENABLE_TODO_TOOLS=1 en tu entorno o tu configuración y reinicia.",
      },
      {
        q: "¿Pueden varias sesiones de Claude Code compartir una lista de tareas?",
        a: "Sí. Inicia cada una con el mismo CLAUDE_CODE_TASK_LIST_ID, por ejemplo CLAUDE_CODE_TASK_LIST_ID=my-project claude; la lista se guarda en ~/.claude/tasks/.",
      },
      {
        q: "¿Existe un plugin kanban para Claude Code?",
        a: "claude-code-kanban instala un plugin de Claude Code con hooks que alimentan su tablero en el navegador. Claudine es una extensión de VS Code, y Kanban Code es una app de escritorio.",
      },
      {
        q: "¿Hay un tablero kanban para Claude Code y Codex a la vez?",
        a: "Claudine lee conversaciones tanto de Claude Code como de Codex. Vibe Kanban admite muchos agentes, pero su empresa cerró. El tablero de Crewmark asigna issues a empleados de Claude Code, Codex, DeepSeek Harness y OpenCode.",
      },
    ],
  },
  cta: {
    title: "Convierte tu tablero de Claude Code en un equipo que lo trabaja.",
    text: "Crewmark convierte las sesiones de Claude Code, Codex, DeepSeek Harness y OpenCode en empleados de IA con roles, objetivos, horario laboral y un heartbeat.",
    button: "Empezar",
  },
  checked: "Comprobado con la documentación de Claude Code (Interactive mode) y con el README o la ficha de cada herramienta el 7 de noviembre de 2026.",
  disclaimer:
    "Crewmark es un producto independiente, sin afiliación ni respaldo de Anthropic ni de los proyectos mencionados aquí. Claude y Claude Code son marcas de Anthropic.",
};
