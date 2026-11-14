import type { GuideCopy } from "@/components/landing/guide-article";

// es translation of /blog/claude-code-agent-teams; the English master is
// src/content/blog/claude-code-agent-teams.ts.

const docs = "https://code.claude.com/docs/en/agent-teams";

const enable = `// settings.json: agent teams are experimental and off by default
{
  "env": { "CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS": "1" }
}

// Optional: give each teammate its own split pane (tmux or iTerm2)
{
  "teammateMode": "auto"
}`;

const prompt = `Spawn three teammates to review PR #142:
- One focused on security implications
- One checking performance impact
- One validating test coverage
Have them each review and report findings.`;

export const copy: GuideCopy = {
  meta: {
    title: "Claude Code agent teams vs subagentes | Crewmark AI",
    description:
      "Los agent teams de Claude Code explicados desde la documentación: en qué se diferencian de los subagentes, cómo activarlos e iniciar uno, paneles de tmux e iTerm2, tamaño del equipo, coste en tokens y límites, con prompts de ejemplo.",
  },
  breadcrumb: "Agent teams de Claude Code",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-07" },
  hero: {
    kicker: "Blog · Claude Code",
    title: "Agent teams de Claude Code vs subagentes: cuándo usar cada uno y cómo montar un equipo",
    lead: "Los agent teams permiten que una sesión de Claude Code actúe como líder de equipo y cree compañeros: instancias separadas de Claude Code, cada una con su propia ventana de contexto, que comparten una lista de tareas y se escriben directamente. Los subagentes son más ligeros: ayudantes dentro de una sesión que hacen un trabajo concreto y devuelven un resumen. Los agent teams son experimentales y vienen desactivados por defecto. Esta guía compara ambos según la documentación de Anthropic y luego muestra cómo activar los equipos, iniciar uno, ver a los compañeros en paneles de tmux o iTerm2 y evitar los problemas habituales.",
    cta: "Empezar",
    secondary: "Montar un equipo",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "table",
      id: "compare",
      title: "Agent teams vs subagentes",
      text: [
        "Ambos ejecutan trabajo en paralelo en ventanas de contexto separadas. La diferencia está en quién coordina: con subagentes, el agente principal lo gestiona todo; en un equipo, los compañeros toman tareas de una lista compartida y hablan entre sí.",
      ],
      headers: ["", "Subagentes", "Agent teams"],
      rows: [
        ["Qué son", "Ayudantes dentro de una sesión, definidos en `.claude/agents/` o integrados (Explore, Plan, general-purpose)", "Una sesión líder más instancias separadas de Claude Code como compañeros"],
        ["Contexto", "Ventana de contexto propia; solo vuelve un resumen a quien lo llamó", "Ventana de contexto propia; totalmente independientes"],
        ["Comunicación", "Devuelven un resultado a quien los llamó (los subagentes con nombre pueden escribirse entre sí)", "Los compañeros se escriben directamente; tú puedes escribir a cualquiera"],
        ["Coordinación", "El agente principal gestiona todo el trabajo", "Lista de tareas compartida con asignación, dependencias y mensajes"],
        ["Ideal para", "Tareas concretas en las que solo importa el resultado", "Trabajo que requiere debate: revisiones, discusiones, funciones repartidas por capa"],
        ["Coste en tokens", "Menor", "Mayor: cada compañero es una instancia de Claude aparte"],
        ["Estado", "Disponibilidad general", "Experimental, desactivado por defecto"],
      ],
    },
    {
      kind: "text",
      title: "Cuándo usar agent teams (y cuándo no)",
      points: [
        "Investigación y revisión: los compañeros analizan un problema desde distintos ángulos y luego cuestionan los hallazgos de los demás.",
        "Módulos o funciones nuevas: cada compañero se encarga de una pieza distinta, como frontend, backend y tests.",
        "Depuración con hipótesis en competencia: varios compañeros intentan demostrar su teoría y refutar las de los demás.",
        "No para trabajo secuencial, ediciones de los mismos archivos ni tareas con muchas dependencias: ahí usa una sola sesión o subagentes.",
        "No para trabajo rutinario: el consumo de tokens crece con cada compañero activo.",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Cómo montar un agent team de Claude Code",
      steps: [
        {
          title: "Activa los agent teams",
          text: "Pon `CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS` a `1` en tu entorno o en el bloque `env` de settings.json. Los equipos necesitan una sesión interactiva; con `-p` (y con el Agent SDK) Claude no crea compañeros.",
          code: enable,
        },
        {
          title: "Describe el equipo con tus palabras",
          text: "Indica cuántos compañeros quieres y qué hace cada uno. Claude crea la lista de tareas compartida, los lanza y sintetiza sus hallazgos cuando terminan.",
          code: prompt,
        },
        {
          title: "Elige un modo de visualización",
          text: "El modo in-process es el predeterminado y funciona en cualquier terminal: los compañeros aparecen en un panel bajo el prompt; usa las flechas y Enter para abrir uno y escribirle, y `Ctrl+T` para la lista de tareas. Los paneles divididos dan a cada compañero su propio panel y requieren tmux o iTerm2 con la CLI `it2`; pon `teammateMode` en `auto` o `tmux`, o inicia con `claude --teammate-mode auto`.",
        },
        {
          title: "Reutiliza los roles que ya definiste",
          text: "Pide un compañero “usando el tipo de agente security-reviewer” para reutilizar una definición de subagente de `.claude/agents/`, con sus herramientas, modelo e instrucciones.",
        },
        {
          title: "Dirige y luego cierra",
          text: "Revisa cómo van los compañeros, redirígelos y di “espera a tus compañeros” si el líder empieza a hacer su trabajo. Para terminar, pide al líder que cierre a un compañero por su nombre; los directorios del equipo se limpian cuando termina la sesión.",
        },
      ],
      source: { label: "Fuente: documentación de Claude Code, Agent teams", href: docs },
    },
    {
      kind: "text",
      title: "Buenas prácticas y limitaciones",
      points: [
        "Empieza con 3–5 compañeros y unas 5–6 tareas por cabeza; tres compañeros enfocados suelen rendir más que cinco dispersos.",
        "Da a cada compañero un conjunto de archivos distinto: dos compañeros que editan el mismo archivo se sobrescriben.",
        "Pon los detalles de la tarea en el prompt de creación: los compañeros cargan CLAUDE.md, los servidores MCP y las skills, pero no la conversación del líder.",
        "Usa hooks como controles de calidad: `TeammateIdle`, `TaskCreated` y `TaskCompleted` pueden devolver el trabajo con el código de salida 2.",
        "Límites: un equipo por sesión, sin equipos anidados, el líder no puede cambiar, `/resume` no recupera a los compañeros in-process y el estado de las tareas puede ir con retraso.",
        "Los paneles divididos no funcionan en el terminal integrado de VS Code, Windows Terminal ni Ghostty; el modo in-process funciona en todas partes.",
        "Con los agent teams activados, un subagente que Claude nombra puede lanzarse como compañero; pon la variable a `0` si quieres recuperar los subagentes normales.",
      ],
    },
    {
      kind: "text",
      title: "Agent teams vs otras formas de ejecutar Claude Code en paralelo",
      text: [
        "Los agent teams reparten una tarea que estás siguiendo, dentro de una sola sesión. Para tareas independientes, ejecuta sesiones separadas en [git worktrees](/blog/claude-code-worktree) o como [agentes en segundo plano](/blog/claude-code-background-agents); para una comparación completa, lee [varios agentes de Claude Code](/blog/multiple-claude-code-agents). Para contener el coste, consulta [cómo reducir el consumo de tokens de Claude Code](/blog/reduce-claude-code-token-usage).",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Con Crewmark",
      title: "Un equipo que sigue trabajando cuando termina la sesión",
      text: [
        "Un agent team vive dentro de una sesión y se detiene cuando la cierras. Crewmark convierte las sesiones de Claude Code, Codex, DeepSeek Harness u OpenCode en empleados de IA con roles, objetivos y horarios laborales duraderos: cada uno se despierta con un heartbeat, toma la siguiente issue de un tablero compartido y te escribe cuando necesita una decisión.",
      ],
      steps: [
        {
          title: "Da un rol a cada empleado",
          text: "Un [ingeniero de software](/ai-employees/software-engineer), un revisor, un [especialista en SEO](/ai-employees/seo-specialist): los roles que crearías como compañeros, pero para siempre.",
        },
        {
          title: "Trabaja desde un solo tablero",
          text: "Las issues sustituyen a la lista de tareas de la sesión y sobreviven a reinicios, días y semanas.",
        },
        {
          title: "Deja que el heartbeat inicie el trabajo",
          text: "Cada 15, 30 o 60 minutos durante el horario laboral; consulta [qué es un empleado de IA](/ai-employees).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Montar un agent team de Claude Code" },
  mid: {
    title: "¿Quieres un equipo que no termine con la sesión?",
    text: "Crewmark mantiene a empleados de Claude Code trabajando desde un tablero compartido con un heartbeat, con el plan que ya pagas.",
    button: "Empezar",
  },
  faq: {
    title: "Preguntas frecuentes sobre los agent teams de Claude Code",
    items: [
      {
        q: "¿Qué son los agent teams de Claude Code?",
        a: "Una función experimental en la que una sesión de Claude Code lidera un equipo de instancias separadas de Claude Code. Los compañeros tienen su propia ventana de contexto, comparten una lista de tareas y se escriben directamente entre sí y con el líder.",
      },
      {
        q: "¿Qué diferencia hay entre los agent teams y los subagentes?",
        a: "Los subagentes trabajan dentro de una sesión y devuelven un resumen al agente principal, que lo coordina todo. Los agent teams son instancias separadas que se coordinan solas mediante una lista de tareas compartida y mensajes directos, con un mayor coste en tokens.",
      },
      {
        q: "¿Cómo activo los agent teams en Claude Code?",
        a: "Pon CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS a 1 en tu entorno o en el bloque env de settings.json y luego pide a Claude, en una sesión interactiva, que cree compañeros para una tarea.",
      },
      {
        q: "¿Los agent teams necesitan tmux?",
        a: "No. El modo in-process predeterminado funciona en cualquier terminal. tmux, o iTerm2 con la CLI it2, solo hace falta si quieres que cada compañero tenga su propio panel dividido.",
      },
      {
        q: "¿Cuántos compañeros debo usar?",
        a: "Anthropic recomienda empezar con 3 a 5 compañeros y unas 5 a 6 tareas por cabeza. El coste crece con cada compañero, y más compañeros suponen más esfuerzo de coordinación.",
      },
      {
        q: "¿Funcionan los agent teams en VS Code?",
        a: "El modo in-process funciona en cualquier terminal, incluido el terminal integrado de VS Code. El modo de paneles divididos no es compatible allí.",
      },
      {
        q: "¿Por qué Claude crea compañeros cuando yo quería subagentes?",
        a: "Con los agent teams activados, un subagente que Claude nombra se lanza como compañero. Pon CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS a 0 para recuperar los subagentes normales.",
      },
    ],
  },
  cta: {
    title: "Convierte tu agent team en un equipo permanente.",
    text: "Crewmark convierte las sesiones de Claude Code, Codex, DeepSeek Harness y OpenCode en empleados de IA con roles, objetivos, horario laboral y un heartbeat.",
    button: "Empezar",
  },
  checked: "Verificado con la documentación de Claude Code (Agent teams y Subagents) el 7 de noviembre de 2026.",
  disclaimer:
    "Crewmark es un producto independiente, no afiliado ni respaldado por Anthropic. Claude y Claude Code son marcas comerciales de Anthropic.",
};
