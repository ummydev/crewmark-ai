import type { GuideCopy } from "@/components/landing/guide-article";

// Spanish translation of /blog/claude-code-orchestration-tools; the English master is src/content/blog/claude-code-orchestration-tools.ts.

const docs = "https://code.claude.com/docs/en/agents";

export const copy: GuideCopy = {
  meta: {
    title: "Mejores herramientas de orquestación para Claude Code en 2026 | Crewmark",
    description:
      "Cómo ejecutar varios agentes de Claude Code a la vez: las opciones integradas (subagents, agent view, agent teams, workflows) y 10 herramientas de orquestación comparadas, de Claude Squad y Orca a Paperclip, Multica y Crewmark.",
  },
  breadcrumb: "Herramientas de orquestación para Claude Code",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-06" },
  hero: {
    kicker: "Blog · Claude Code",
    title: "Las mejores herramientas de orquestación para Claude Code en 2026",
    lead: "Orquestar Claude Code significa ejecutar varios agentes de Claude Code a la vez y coordinarlos: darle a cada uno su propia copia del código, una tarea y una forma de informar de lo que hace. Claude Code ya hace buena parte de esto por sí mismo, y una ola de herramientas de código abierto y comerciales añade interfaces, tableros y programaciones por encima. Esta guía repasa primero las opciones integradas y después compara diez herramientas por interfaz, aislamiento, agentes compatibles y la pregunta más importante: ¿el agente empieza a trabajar por su cuenta o espera a que tú le escribas?",
    cta: "Acceso anticipado",
    secondary: "Ir a la comparativa",
    secondaryHref: "#compare",
  },
  sections: [
    {
      kind: "table",
      id: "built-in",
      title: "Integrado en Claude Code: cinco formas de ejecutar agentes en paralelo",
      text: [
        "Antes de instalar nada, comprueba si Claude Code ya cubre tu caso. En todas las opciones integradas los trabajadores son sesiones de Claude; los worktrees le dan a cada una su propio checkout (consulta la [guía de worktrees](/blog/claude-code-worktree)).",
      ],
      headers: ["Opción", "Qué te ofrece", "Estado"],
      rows: [
        ["Subagents (subagentes)", "Trabajadores dentro de una sesión que hacen una tarea secundaria en su propio contexto y devuelven un resumen", "Disponible"],
        ["Agent view (`claude agents`)", "Una sola pantalla para lanzar y supervisar sesiones en segundo plano, e intervenir cuando una te necesita", "Vista previa de investigación"],
        ["Agent teams (equipos de agentes)", "Varias sesiones con una lista de tareas y mensajería compartidas, dirigidas por una sesión líder", "Experimental, desactivado por defecto"],
        ["Dynamic workflows (flujos dinámicos)", "Un script que ejecuta muchos subagentes y contrasta sus resultados", "Disponible"],
        ["Projects (proyectos)", "Una conversación continua que lanza hilos en paralelo en la nube o en tu ordenador", "Beta pública en Pro, Max y Ultra"],
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Herramientas de orquestación para Claude Code comparadas",
      text: [
        "Las estrellas y las licencias son las de GitHub a 6 de noviembre de 2026. \"Empieza a trabajar por su cuenta\" significa que la herramienta puede darle a un agente su siguiente tarea sin que escribas un prompt, mediante un tablero, una programación o un heartbeat.",
      ],
      headers: ["Herramienta", "Interfaz", "Aislamiento", "Agentes", "Empieza a trabajar por su cuenta", "Licencia, estrellas"],
      rows: [
        ["Claude Squad", "Interfaz de terminal (`cs`)", "Una sesión de tmux y un git worktree por agente", "Claude Code, Codex, Gemini, Aider y otros", "No", "AGPL-3.0, ~9k"],
        ["Orca", "Escritorio, CLI, móvil, ejecución remota", "Un worktree por agente", "Claude Code, Codex y otros, con tus suscripciones", "No; un agente orquestador puede repartir el trabajo", "MIT, ~117k"],
        ["Ruflo (antes Claude Flow)", "Plugins de Claude Code, CLI y servidor MCP", "No se indica", "Claude Code, Codex, clientes MCP", "No; enjambres que arrancan con un prompt o una misión", "MIT, ~81k"],
        ["oh-my-claudecode", "Plugin de Claude Code (`/autopilot`)", "No se indica", "Claude Code", "No; el autopilot funciona después de que lo inicies", "MIT, ~41k"],
        ["Vibe Kanban", "Interfaz web con un tablero kanban", "Un espacio de trabajo y una rama por tarea", "Más de 10, incluidos Claude Code, Codex y Gemini CLI", "No; inicias un espacio de trabajo por issue. En retirada, mantenido por la comunidad", "Apache-2.0, ~29k"],
        ["opcode (antes Claudia)", "Interfaz gráfica de escritorio", "Procesos separados para los agentes en segundo plano", "Claude Code", "No", "AGPL-3.0, ~22k"],
        ["CloudCLI (Claude Code UI)", "Interfaz web y móvil", "Sandbox de Docker opcional", "Claude Code, Codex, Cursor CLI, OpenCode", "No", "AGPL-3.0, ~15k"],
        ["Conductor", "App para Mac", "Un espacio de trabajo y una rama por tarea", "Claude Code, Codex, Cursor, OpenCode", "No. Se une a Meta; la nube cierra el 20 de noviembre de 2026", "Código cerrado"],
        ["Paperclip", "Interfaz web: una \"empresa de IA\" con organigrama, objetivos y presupuestos", "Worktrees y sandboxes opcionales", "Claude Code, Codex, Gemini CLI, Cursor, OpenCode y más", "Sí: heartbeats programados, además de asignaciones y @menciones", "MIT, ~111k"],
        ["Multica", "Web, escritorio, CLI y API", "Un daemon en tu máquina", "Claude Code, Codex, Cursor, Copilot, OpenCode y más", "Sí: los agentes toman las issues asignadas; Autopilots con cron", "Multica License (código disponible), ~55k"],
        ["Crewmark", "Tablero web, CLI y un daemon en tu máquina", "Cada empleado en su propia sesión y checkout", "Claude Code, Codex, DeepSeek Harness, OpenCode", "Sí: un heartbeat durante el horario laboral toma la siguiente issue", "Acceso anticipado"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Cómo elegir una herramienta de orquestación para Claude Code",
      steps: [
        {
          title: "Prueba primero lo integrado",
          text: "Para unas pocas tareas en paralelo que lanzas tú mismo, puede que `claude --worktree` más agent view sea todo lo que necesitas. Para un cambio grande, `/batch` o un workflow lo reparte entre subagentes.",
        },
        {
          title: "Elige la interfaz que de verdad vas a mirar",
          text: "Quien vive en la terminal suele preferir Claude Squad; otros quieren una app de escritorio (Orca, opcode) o un tablero web (Vibe Kanban, Paperclip, Multica, Crewmark), que también funciona desde el móvil.",
        },
        {
          title: "Decide quién inicia la siguiente tarea",
          text: "La mayoría de las herramientas aceleran agentes que diriges tú. Si quieres que los agentes sigan trabajando entre tus prompts, busca un tablero con una programación o un heartbeat: Paperclip, Multica y Crewmark lo hacen.",
        },
        {
          title: "Comprueba el aislamiento y los agentes compatibles",
          text: "Los agentes en paralelo necesitan checkouts separados, normalmente git worktrees. Si tu equipo combina Claude Code con Codex u OpenCode, asegúrate de que la herramienta los ejecuta todos con las suscripciones que ya tienes.",
        },
        {
          title: "Comprueba la salud del proyecto",
          text: "Mira la licencia, los commits recientes y el estado: la empresa de Vibe Kanban lo está retirando, Conductor pasa a Meta y Crystal fue sustituido por una app nueva.",
        },
      ],
      source: { label: "Fuente: documentación de Claude Code, Run agents in parallel", href: docs },
    },
    {
      kind: "text",
      title: "Notas sobre cada herramienta",
      points: [
        "Claude Squad ([smtg-ai/claude-squad](https://github.com/smtg-ai/claude-squad)): una app de terminal que da a cada agente su propia sesión de tmux y su git worktree; `--autoyes` acepta los prompts automáticamente (experimental).",
        "Orca ([stablyai/orca](https://github.com/stablyai/orca)): ejecuta una flota de agentes de programación con tus propias suscripciones en el escritorio, el móvil o una máquina remota.",
        "Ruflo ([ruvnet/ruflo](https://github.com/ruvnet/ruflo)): un meta-harness de agentes para Claude Code y Codex con enjambres y memoria entre sesiones; `ruvnet/claude-flow` ahora redirige aquí.",
        "oh-my-claudecode ([Yeachan-Heo/oh-my-claudecode](https://github.com/Yeachan-Heo/oh-my-claudecode)): un plugin con flujos por etapas de planificación, desarrollo y QA dentro de Claude Code.",
        "Vibe Kanban ([BloopAI/vibe-kanban](https://github.com/BloopAI/vibe-kanban)): planifica issues en un tablero y lanza un espacio de trabajo con un agente para cada una; su README indica que se está retirando.",
        "opcode ([winfunc/opcode](https://github.com/winfunc/opcode)): una interfaz gráfica de escritorio para Claude Code con agentes personalizados, historial de sesiones, analítica de uso y checkpoints.",
        "CloudCLI ([siteboon/claudecodeui](https://github.com/siteboon/claudecodeui)): una interfaz web y móvil para tus sesiones, con shell, archivos y git; una versión de pago en la nube añade contenedores alojados.",
        "Conductor ([conductor.build](https://www.conductor.build)): consulta [alternativas a Conductor](/blog/conductor-alternatives) para ver las fechas de cierre y cómo trasladar tu trabajo.",
        "Paperclip ([paperclipai/paperclip](https://github.com/paperclipai/paperclip)) y Multica ([multica-ai/multica](https://github.com/multica-ai/multica)): lo más parecido a empleados de IA; consulta nuestras comparativas con [Paperclip](/alternatives/paperclip) y [Multica](/alternatives/multica).",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Con Crewmark",
      title: "Orquestación que sigue en marcha cuando dejas de escribir",
      text: [
        "Crewmark convierte cada sesión de Claude Code, Codex, DeepSeek Harness u OpenCode en un empleado de IA con un rol, un objetivo y un horario laboral, y lo despierta con un heartbeat para que tome la siguiente issue de un tablero compartido.",
      ],
      steps: [
        {
          title: "Un empleado por trabajo",
          text: "Un programador, un revisor, un redactor SEO: cada uno tiene su propia sesión, su checkout y un objetivo expresado como un número. Lee [qué es un empleado de IA](/ai-employees).",
        },
        {
          title: "Un tablero en lugar de una cuadrícula de terminales",
          text: "Asigna issues; cada empleado comenta mientras trabaja y te escribe cuando necesita una decisión.",
        },
        {
          title: "Un heartbeat en lugar de tu siguiente prompt",
          text: "Durante su horario laboral cada empleado se despierta cada 15, 30 o 60 minutos en la misma conversación; mira [cómo hacer proactivo a Claude Code](/proactive-claude-code).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Elegir una herramienta de orquestación para Claude Code" },
  mid: {
    title: "¿Cinco agentes en marcha y sigues escribiendo cada prompt?",
    text: "Crewmark le da a cada sesión de Claude Code un rol, un objetivo y un heartbeat, para que tome la siguiente issue sin ti.",
    button: "Acceso anticipado",
  },
  faq: {
    title: "Preguntas frecuentes sobre la orquestación de Claude Code",
    items: [
      {
        q: "¿Qué es la orquestación de Claude Code?",
        a: "Ejecutar varios agentes de Claude Code a la vez y coordinarlos: checkouts separados, tareas separadas y una forma de ver qué hace cada uno y fusionar los resultados.",
      },
      {
        q: "¿Claude Code puede orquestar agentes por sí solo?",
        a: "Sí. Subagents, agent view, agent teams (experimental), dynamic workflows y projects vienen integrados, y `--worktree` aísla las sesiones que ejecutas tú mismo.",
      },
      {
        q: "¿Cuál es la mejor herramienta de orquestación para Claude Code?",
        a: "Para trabajar en la terminal, Claude Squad; para una flota en el escritorio, Orca; para enjambres dentro de Claude Code, Ruflo; para agentes que siguen trabajando desde un tablero con una programación, Paperclip, Multica o Crewmark.",
      },
      {
        q: "¿Hay una interfaz gráfica para gestionar agentes de Claude Code?",
        a: "Sí: Orca y opcode son apps de escritorio; Vibe Kanban, CloudCLI, Paperclip y Multica tienen interfaz web; y la propia app de escritorio de Claude Code ejecuta sesiones en paralelo con un interruptor de Worktree.",
      },
      {
        q: "¿Qué herramientas permiten que los agentes empiecen a trabajar sin un prompt?",
        a: "De las comparadas aquí, Paperclip (heartbeats programados), Multica (issues asignadas y Autopilots con cron) y Crewmark (un heartbeat durante el horario laboral). El resto ejecuta los agentes que inicias tú.",
      },
      {
        q: "¿Son gratuitas estas herramientas?",
        a: "La mayoría son de código abierto y gratuitas si las alojas tú: MIT para Orca, Ruflo, oh-my-claudecode y Paperclip; AGPL-3.0 para Claude Squad, opcode y CloudCLI; Apache-2.0 para Vibe Kanban. Multica usa su propia licencia de código disponible; Conductor es de código cerrado.",
      },
      {
        q: "¿Qué uso en lugar de Conductor?",
        a: "Consulta [alternativas a Conductor](/blog/conductor-alternatives): el propio `--worktree` de Claude Code y su app de escritorio cubren lo esencial, y las herramientas de arriba añaden tableros, flotas o programaciones.",
      },
    ],
  },
  cta: {
    title: "Deja que tus agentes de Claude Code tomen solos su siguiente tarea.",
    text: "Crewmark convierte las sesiones de Claude Code, Codex y DeepSeek Harness en empleados de IA con roles, objetivos, horarios y un heartbeat.",
    button: "Acceso anticipado",
  },
  checked: "Comprobado con la documentación de Claude Code, el README o sitio web de cada proyecto y la API de GitHub el 6 de noviembre de 2026.",
  disclaimer:
    "Crewmark es una de las herramientas comparadas. Los nombres de los productos son marcas de sus titulares; ningún proyecto ha revisado ni respaldado esta página.",
};
