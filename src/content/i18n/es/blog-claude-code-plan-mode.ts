import type { GuideCopy } from "@/components/landing/guide-article";

// Spanish translation of /blog/claude-code-plan-mode; the English master is src/content/blog/claude-code-plan-mode.ts.

const docs = "https://code.claude.com/docs/en/permission-modes";

const enter = `# Inicia una sesión en plan mode
claude --permission-mode plan

# O, dentro de una sesión, planifica solo este prompt
/plan añade límites de peticiones a la API pública`;

const settings = `{
  "permissions": {
    "defaultMode": "plan"
  }
}`;

export const copy: GuideCopy = {
  meta: {
    title: "Plan mode de Claude Code: atajo, cómo funciona y auto mode | Crewmark",
    description:
      "Cómo funciona el plan mode (modo plan) de Claude Code: el atajo Shift+Tab y /plan, qué puede hacer Claude mientras planifica, aprobar un plan, usarlo por defecto y la comparación con auto, accept edits y manual.",
  },
  breadcrumb: "Plan mode de Claude Code",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-06" },
  hero: {
    kicker: "Blog · Claude Code",
    title: "Plan mode de Claude Code: cómo funciona y cuándo usarlo",
    lead: "El plan mode (modo plan) es el modo de permisos de Claude Code en el que Claude investiga y propone cambios sin hacerlos: lee archivos, ejecuta comandos para explorar y escribe un plan, pero no toca tu código hasta que lo apruebas. Pulsa `Shift+Tab` para llegar a él o empieza un prompt con `/plan`. Esta guía cubre todas las formas de entrar y salir, qué se permite mientras planifica, las opciones para aprobar, cómo hacerlo el modo por defecto y cómo se compara con los modos auto, accept edits y manual.",
    cta: "Acceso anticipado",
    secondary: "Ir a los pasos",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "table",
      id: "modes",
      title: "Plan mode frente a auto mode, accept edits y manual",
      text: [
        "El modo plan es uno de los modos de permisos de Claude Code. Cada uno cambia comodidad por supervisión; la tabla muestra qué puede hacer Claude sin preguntarte en cada uno.",
      ],
      headers: ["Modo", "Se ejecuta sin preguntar", "Ideal para"],
      rows: [
        ["Manual (`default`)", "Solo lecturas", "Revisar cada acción, trabajo delicado"],
        ["Accept edits (`acceptEdits`)", "Lecturas, ediciones de archivos y comandos de archivos habituales como `mkdir` y `mv`", "Iterar sobre código que revisas después con `git diff`"],
        ["Plan (`plan`)", "Lecturas, más los comandos de exploración que aprueba el clasificador del auto mode, si está disponible. Ninguna edición hasta que apruebas", "Explorar un código y acordar un enfoque antes de cambiarlo"],
        ["Auto (`auto`)", "Todo, con comprobaciones de seguridad en segundo plano", "Tareas largas, menos confirmaciones"],
        ["Don't ask (`dontAsk`)", "Solo herramientas aprobadas de antemano; todo lo demás se deniega", "CI y scripts restringidos"],
        ["Bypass (`bypassPermissions`)", "Todo", "Solo contenedores y máquinas virtuales aisladas"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Cómo usar el plan mode en Claude Code",
      steps: [
        {
          title: "Entra en el modo plan",
          text: "En la terminal, pulsa `Shift+Tab` para recorrer los modos hasta que la barra de estado muestre `⏸ plan mode on`; desde Manual, el ciclo pasa por accept edits y luego por plan. O empieza un solo prompt con `/plan`. En VS Code, haz clic en el indicador de modo bajo el cuadro del prompt y elige Plan; en la app de escritorio, usa el selector de modo.",
          code: enter,
        },
        {
          title: "Describe el cambio y deja que Claude explore",
          text: "Pide lo que quieres construir o arreglar. Claude lee el código y ejecuta comandos para investigar, y después escribe un plan. Cuando el auto mode (modo automático) está disponible, un clasificador revisa esos comandos en lugar de preguntarte; si no, todo lo que vaya más allá de los comandos de solo lectura integrados pide confirmación antes.",
        },
        {
          title: "Revisa y edita el plan",
          text: "Responde a las preguntas de Claude, ponle pegas o pulsa `Ctrl+G` para abrir el plan en tu editor de texto y cambiarlo tú. Los planes se guardan como archivos en `~/.claude/plans/`, o en la carpeta que indique el ajuste `plansDirectory`.",
        },
        {
          title: "Aprueba o sigue planificando",
          text: "Elige Yes, and use auto mode (sí, y usar el modo automático), o Yes, auto-accept edits cuando el auto mode no está disponible, para que Claude lo implemente; Yes, manually approve edits para revisar cada edición; o No, keep planning para seguir planificando. Al aprobar se sale del modo plan y la sesión toma el nombre del plan.",
        },
        {
          title: "Sal sin aprobar",
          text: "Pulsa `Shift+Tab` otra vez para salir del modo plan sin plan. Para planificar el siguiente cambio, vuelve a recorrer los modos o empieza el prompt con `/plan`.",
        },
      ],
      source: { label: "Fuente: documentación de Claude Code, Choose a permission mode", href: docs },
    },
    {
      kind: "steps",
      id: "default",
      title: "Haz que el plan mode sea el modo por defecto",
      text: [
        "Para una sesión, inicia con `claude --permission-mode plan`. Para todas las sesiones de terminal de un proyecto, pon `defaultMode` en `plan` en `.claude/settings.json`; para todos los proyectos de tu máquina, ponlo en `~/.claude/settings.json`.",
      ],
      steps: [
        {
          title: "Añádelo a los ajustes",
          text: "Las conversaciones de VS Code no leen los ajustes del proyecto para el modo inicial: en su lugar, pon `claudeCode.initialPermissionMode` en `plan` en tus ajustes de usuario de VS Code.",
          code: settings,
        },
      ],
    },
    {
      kind: "text",
      title: "Cuándo merece la pena el plan mode",
      points: [
        "Cambios que tocan muchos archivos, o en los que la primera idea suele fallar: una migración, un refactor, una funcionalidad nueva entre front end y back end.",
        "Código que aún no conoces: deja que Claude lo recorra y te explique el enfoque antes de que cambie nada.",
        "Errores caros: esquemas de base de datos, autenticación, pagos, APIs públicas.",
        "Sáltatelo en arreglos de una línea y en tareas que describirías igual que el plan; ahí los modos manual o accept edits son más rápidos.",
        "Combínalo con un contexto limpio: con `showClearContextOnPlanAccept` activado, al aprobar también puedes borrar la conversación de planificación para que la implementación parta solo del plan.",
      ],
    },
    {
      kind: "text",
      title: "Trampas habituales",
      points: [
        "El modo plan bloquea las ediciones, no todo: con el auto mode disponible, los comandos de shell aprobados se ejecutan durante la planificación, así que un comando con efectos secundarios puede ejecutarse igualmente.",
        "En una sesión interactiva de terminal iniciada con bypass permissions disponible, los bloqueos del modo plan no se aplican; a Claude solo se le indica que no edite.",
        "Las ejecuciones headless (`claude -p`), las sesiones del Agent SDK y el panel de chat de VS Code mantienen los bloqueos del modo plan.",
        "Elegir Plan en VS Code solo afecta a esa conversación; las nuevas vuelven a tu modo inicial habitual.",
        "Las reglas de denegación siguen aplicándose en todos los modos, plan incluido. Consulta [comandos de barra de Claude Code](/blog/claude-code-slash-commands) para `/plan`, `/permissions` y otros comandos.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Con Crewmark",
      title: "El plan mode hace que Claude vaya con cuidado. Crewmark hace que siga trabajando.",
      text: [
        "El modo plan es la forma de seguir al mando de un cambio grande; aun así, la sesión espera a que tú empieces el siguiente. Crewmark convierte una sesión de Claude Code, Codex, DeepSeek Harness u OpenCode en un empleado de IA con un rol, un objetivo y un horario, y la despierta con un heartbeat para que tome la siguiente issue de un tablero.",
      ],
      steps: [
        {
          title: "Planes como comentarios en la issue",
          text: "Un empleado puede publicar su plan en la issue y esperar tu visto bueno antes de un cambio arriesgado, así que apruebas desde el tablero en lugar de desde la terminal.",
        },
        {
          title: "Deja que el heartbeat inicie el trabajo",
          text: "Durante su horario laboral el empleado se despierta cada 15, 30 o 60 minutos en la misma conversación y toma la siguiente issue; mira [cómo hacer proactivo a Claude Code](/proactive-claude-code).",
        },
        {
          title: "Varios empleados, un repositorio",
          text: "Da a cada uno su propio [worktree](/blog/claude-code-worktree) y su rol. Lee [qué es un empleado de IA](/ai-employees).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Usar el plan mode en Claude Code" },
  mid: {
    title: "Ya aprobaste el plan. ¿Quién toma la siguiente tarea?",
    text: "Crewmark despierta a Claude Code con un heartbeat, un rol, un objetivo y un tablero de issues, con el plan que ya pagas.",
    button: "Acceso anticipado",
  },
  faq: {
    title: "Preguntas frecuentes sobre el plan mode de Claude Code",
    items: [
      {
        q: "¿Qué es el plan mode en Claude Code?",
        a: "Un modo de permisos en el que Claude investiga y escribe un plan sin editar tu código. Las ediciones siguen bloqueadas hasta que apruebas el plan.",
      },
      {
        q: "¿Cuál es el atajo del plan mode?",
        a: "`Shift+Tab` recorre los modos de permisos en la terminal; para cuando la barra de estado muestre `⏸ plan mode on`. También puedes empezar un prompt con `/plan` o arrancar con `claude --permission-mode plan`.",
      },
      {
        q: "Plan mode frente a auto mode: ¿en qué se diferencian?",
        a: "El modo plan explora y propone sin editar. El auto mode hace el trabajo: edita y ejecuta comandos con comprobaciones de seguridad en segundo plano. Un flujo habitual es planificar primero y después aprobar con Yes, and use auto mode.",
      },
      {
        q: "¿Plan mode o accept edits?",
        a: "Accept edits deja que Claude cambie archivos sin preguntar, y tú revisas después. El modo plan no cambia nada hasta que apruebas un plan; tras aprobarlo puedes elegir aceptar las ediciones automáticamente.",
      },
      {
        q: "¿Cómo uso el plan mode en VS Code o en la app de escritorio?",
        a: "En VS Code, haz clic en el indicador de modo bajo el cuadro del prompt y elige Plan, o pon `claudeCode.initialPermissionMode` en `plan`. En la app de escritorio, elígelo en el selector de modo.",
      },
      {
        q: "¿Dónde se guardan los planes de Claude Code?",
        a: "Como archivos en `~/.claude/plans/`, salvo que indiques otra carpeta con el ajuste `plansDirectory`. Pulsa `Ctrl+G` para editar el plan actual en tu editor.",
      },
      {
        q: "¿Cómo salgo del plan mode?",
        a: "Aprueba el plan, lo que cambia al modo que elijas, o pulsa `Shift+Tab` para salir sin aprobar.",
      },
    ],
  },
  cta: {
    title: "Deja que Claude Code planifique, construya y tome la siguiente issue.",
    text: "Crewmark convierte las sesiones de Claude Code, Codex y DeepSeek Harness en empleados de IA con roles, objetivos, horarios y un heartbeat.",
    button: "Acceso anticipado",
  },
  checked: "Comprobado con la documentación de Claude Code (modos de permisos y ajustes) el 6 de noviembre de 2026.",
  disclaimer:
    "Crewmark es un producto independiente, sin relación con Anthropic y sin su respaldo. Claude y Claude Code son marcas de Anthropic.",
};
