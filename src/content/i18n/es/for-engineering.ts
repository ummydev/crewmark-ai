import type { GuideCopy } from "@/components/landing/guide-article";

// es translation of /for/engineering; the English master is src/content/use-cases/for-engineering.ts.

const prompts = `Dos veces al día, lee los errores de Sentry nuevos y recurrentes en producción,
registra los que no estén en el tablero con su impacto y una causa
probable, y abre una pull request para cualquier arreglo de una línea.

Revisa cada pull request marcada como lista para revisión según las reglas
de AGENTS.md. Solo comenta; nunca apruebes ni hagas merge.

Cada viernes, escribe las notas de versión a partir de las pull requests
fusionadas esta semana: qué ha cambiado para los usuarios, agrupado por área, con enlaces.

Toma la siguiente issue con la etiqueta "good first issue", trabaja en tu propio
git worktree y abre una pull request con tests.`;

export const copy: GuideCopy = {
  meta: {
    title: "Claude Code para equipos de ingeniería: empleados de IA que entregan",
    description:
      "Cómo usan los equipos de ingeniería Claude Code y Codex como empleados de IA: triaje de errores, revisión de código, de issues a pull requests, notas de versión y turnos de noche, según un horario. Roles, casos de uso, prompts para copiar y las reglas que dejan los merges en manos de personas.",
  },
  breadcrumb: "Claude Code para ingeniería",
  parent: { name: "Casos de uso", href: "/use-cases" },
  hero: {
    kicker: "Para equipos de ingeniería",
    title: "Claude Code para equipos de ingeniería: empleados de IA que toman la siguiente issue",
    lead: "La mayoría de los equipos usan Claude Code o Codex cuando alguien se sienta y le escribe un prompt. La gran ventaja está en darle trabajos fijos: hacer el triaje de los errores nuevos cada mañana, revisar cada pull request que esté lista, tomar la siguiente issue del tablero y abrir una pull request, escribir las notas de versión el viernes. Esta página explica qué trabajos de ingeniería delegar, cómo ejecutar varios agentes sin que se pisen, prompts para copiar y las reglas que dejan los merges en manos de personas.",
    cta: "Empezar",
    secondary: "Ver los trabajos",
    secondaryHref: "#jobs",
  },
  sections: [
    {
      kind: "table",
      id: "jobs",
      title: "Qué delegan los equipos de ingeniería en un empleado de IA",
      headers: ["Trabajo", "Frecuencia", "Guía"],
      rows: [
        ["Hacer el triaje de los errores nuevos de Sentry y arreglar los pequeños", "Dos veces al día", "[Triaje de errores de Sentry](/use-cases/sentry-error-triage)"],
        ["Revisar las pull requests que estén listas", "En cada PR", "[Revisión de código con IA en cada PR](/use-cases/pr-review)"],
        ["Tomar la siguiente issue y abrir una pull request", "Continua", "[Ingeniero de software de IA](/ai-employees/software-engineer)"],
        ["Avanzar con el backlog durante la noche", "Cada noche", "[Ejecutar Claude Code 24/7](/blog/run-claude-code-24-7), [tareas de larga duración en Codex](/blog/codex-long-running-tasks)"],
        ["Escribir notas de versión a partir de las pull requests fusionadas", "Semanal", "Prompt más abajo"],
        ["Mantener el tablero al día: estado, comentarios, enlaces", "En cada issue", "[Kanban para Claude Code](/blog/claude-code-kanban)"],
      ],
    },
    {
      kind: "steps",
      id: "prompts",
      title: "Prompts para copiar",
      text: ["Cada uno funciona como issue recurrente para un empleado de IA o como prompt puntual en Claude Code o Codex."],
      steps: [
        {
          title: "Cuatro trabajos, una frase cada uno",
          text: "Cambia los nombres y los horarios por los tuyos. Los dos primeros tienen guías completas con la configuración: [triaje de errores de Sentry](/use-cases/sentry-error-triage) y [revisión de código con IA](/use-cases/pr-review).",
          code: prompts,
        },
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Cómo configurar ingenieros de IA con Claude Code o Codex",
      steps: [
        {
          title: "Escribe las reglas una vez",
          text: "Pon los comandos de build y de tests, las convenciones y las reglas de revisión en CLAUDE.md o AGENTS.md, para que cada sesión empiece desde el mismo punto. Consulta [CLAUDE.md](/blog/claude-md) y [AGENTS.md para Codex](/blog/codex-agents-md).",
        },
        {
          title: "Dale a cada agente su propio worktree",
          text: "Dos agentes editando el mismo checkout se sobrescriben. Usa un git worktree por agente; consulta [worktrees en Claude Code](/blog/claude-code-worktree) y [ejecutar varios agentes de Claude Code](/blog/multiple-claude-code-agents).",
        },
        {
          title: "Conecta las herramientas que necesitan los trabajos",
          text: "GitHub con su CLI, Sentry con su servidor MCP alojado, tu gestor de tareas con su servidor MCP o su CLI. Cuando existan las dos opciones, mejor CLIs; gastan menos tokens.",
        },
        {
          title: "Deja los merges en manos de personas",
          text: "Los agentes abren pull requests y comentan; las personas aprueban y hacen merge. Cuando un empleado necesita una decisión, marca la issue como Requiere acción y pregunta.",
        },
      ],
    },
    {
      kind: "text",
      id: "expect",
      title: "Qué esperar",
      points: [
        "Lo que mejor sale son issues pequeñas y bien descritas: un bug con su stack trace, un test que falta, un cambio de texto en muchos archivos.",
        "Las funcionalidades grandes siguen necesitando a una persona que las divida en issues; los agentes son buenos con las piezas, no tanto con el plan.",
        "El uso sale de tu propio plan de Claude o ChatGPT; programa los trabajos pesados dentro del horario laboral o por la noche, dentro de tus límites.",
        "La carga de revisión se desplaza, no desaparece: más pull requests significa más que revisar, y por eso la revisión con IA está en esta lista.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Con Crewmark",
      title: "Ingenieros con un tablero, horario laboral y un heartbeat",
      text: [
        "Crewmark convierte tu propio Claude Code o Codex en empleados de IA: cada uno tiene un rol, un objetivo en cifras, horario laboral y un heartbeat, toma la siguiente issue de un tablero compartido, comenta mientras trabaja y abre pull requests para revisión.",
      ],
      steps: [
        {
          title: "Contrata el rol",
          text: "Empieza por el [ingeniero de software de IA](/ai-employees/software-engineer).",
        },
        {
          title: "Añade los trabajos fijos como issues recurrentes",
          text: "El triaje, la revisión y las notas de versión vuelven solos según su horario.",
        },
        {
          title: "Mira otros equipos",
          text: "Los equipos de marketing usan la misma configuración: [Claude Code para marketing](/for/marketing). Todos los trabajos están en [casos de uso](/use-cases).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Configurar ingenieros de IA con Claude Code o Codex" },
  mid: {
    title: "¿Quieres ingenieros que tomen la siguiente issue por sí mismos?",
    text: "Los empleados de Crewmark funcionan con tu Claude Code o Codex, se despiertan con un heartbeat y abren pull requests para revisión.",
    button: "Empezar",
  },
  faq: {
    title: "Preguntas frecuentes",
    items: [
      {
        q: "¿Cuáles son los mejores casos de uso de Claude Code para equipos de ingeniería?",
        a: "Trabajos que se repiten y tienen un final claro: triaje de errores, revisión de pull requests, bugs pequeños con stack trace, tests, notas de versión y mantener el tablero al día. Las funcionalidades grandes siguen necesitando a una persona que las planifique.",
      },
      {
        q: "¿Pueden varios agentes de Claude Code trabajar en un mismo repositorio?",
        a: "Sí, si cada uno tiene su propio git worktree y sus propias issues. Consulta [ejecutar varios agentes de Claude Code](/blog/multiple-claude-code-agents) y [agent teams](/blog/claude-code-agent-teams).",
      },
      {
        q: "¿Funciona con Codex?",
        a: "Sí. Los mismos trabajos y reglas funcionan con Codex; pon las reglas en AGENTS.md.",
      },
      {
        q: "¿Debería un agente de IA hacer merge de sus propias pull requests?",
        a: "No. Deja que abra pull requests y comente; la aprobación y el merge, en manos de personas.",
      },
      {
        q: "¿En qué se diferencia de Devin u otros agentes en la nube?",
        a: "Los agentes en la nube ejecutan cada tarea en la nube del proveedor cuando se la asignas. Crewmark ejecuta tu propio Claude Code o Codex con tu plan, con trabajos fijos según un horario. Consulta [alternativas a Devin](/blog/devin-alternatives).",
      },
    ],
  },
  cta: {
    title: "Dale a tu equipo de ingeniería empleados de IA que toman la siguiente issue.",
    text: "Crewmark convierte sesiones de Claude Code y Codex en empleados de IA con roles, objetivos, horario laboral y un heartbeat.",
    button: "Empezar",
  },
  checked: "Escrito el 10 de noviembre de 2026; los datos de las herramientas se comprobaron con la documentación de Sentry, Anthropic y OpenAI ese mismo día.",
  disclaimer:
    "Crewmark es un producto independiente, sin relación con Anthropic, OpenAI, GitHub ni Sentry y sin su respaldo. Los nombres de los productos son marcas de sus titulares.",
};
