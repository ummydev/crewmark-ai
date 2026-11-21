import type { GuideCopy } from "@/components/landing/guide-article";

// Spanish translation of /personal-agent/suparagent; the English master is
// src/content/personal-agents/suparagent.ts.

const repo = "https://github.com/Anil-matcha/suparagent";

export const copy: GuideCopy = {
  meta: {
    title: "Suparagent: compañeros de IA de código abierto, precios y guía",
    description:
      "Suparagent: espacio de código abierto para compañeros de IA sobre Claude Code, Codex, Gemini CLI o Cursor. Qué es, precios, configuración y comparativas.",
  },
  breadcrumb: "Suparagent",
  parent: { name: "Agentes personales", href: "/personal-agent" },
  hero: {
    kicker: "Agentes personales · Código abierto",
    title: "Suparagent: un espacio de trabajo de código abierto para compañeros de trabajo de IA",
    lead: "Suparagent es un “espacio de trabajo para compañeros de trabajo de IA” (“workspace for AI coworkers”) de código abierto. Creas agentes con nombre, cada uno con su trabajo, su espacio de trabajo, memoria, rutinas y ajustes de aprobación, y se ejecutan sobre un motor que ya usas, como Claude Code, Codex, Gemini CLI o Cursor. Funciona como app de escritorio o en tu propio servidor; un servicio alojado en suparagent.ai es un producto aparte. La app se llamaba Open Dots, después Open Duet, y adoptó el nombre Suparagent el 9 de noviembre de 2026, en la versión 0.8.5.",
    cta: "Empezar",
    secondary: "Configurarlo",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "Qué es Suparagent",
      points: [
        "Compañeros con nombre: cada agente tiene nombre, rol, motor, espacio de trabajo, memoria y ajustes de aprobación, con plantillas y skills para empezar.",
        "Motores que ya usas: Claude Code o Codex CLI, Gemini CLI, Google Gemini a través de Antigravity, Cursor, otros agentes de CLI mediante el Agent Client Protocol (ACP), OpenRouter, o APIs compatibles con OpenAI como Ollama o LM Studio. No incluye ningún modelo.",
        "Trabajo y programaciones: un tablero de tareas y un calendario para asignar trabajo, programar ejecuciones puntuales y revisar intentos, y rutinas que se ejecutan según una programación, por webhook o bajo demanda mientras el backend está en marcha.",
        "Equipos de agentes: un agente líder (Claude o Codex) delega en especialistas, y los agentes se coordinan en salas compartidas.",
        "Aprobaciones: Ask first, Accept edits, Approve for me (Claude, Codex y Cursor) y Plan only. Una rutina nunca aprueba una acción por sí sola, y una vista Today reúne aprobaciones, preguntas y resultados de rutinas.",
        `De código abierto con licencia Apache 2.0 en [github.com/Anil-matcha/suparagent](${repo}), con unas 7.050 estrellas el 13 de noviembre de 2026 en un repositorio creado en mayo de 2023. Es un proyecto temprano y en evolución: el servidor autoalojado, los ordenadores Docker, las herramientas de navegador y la vista previa nativa de escritorio para macOS son experimentales.`,
      ],
    },
    {
      kind: "table",
      id: "plans",
      title: "Precios de Suparagent",
      text: [
        "No se indica ninguna cuota de Suparagent para la app de escritorio ni para un servidor autoalojado. Planes alojados según el README el 13 de noviembre de 2026, en dólares estadounidenses. En todos los planes usas tu propia cuenta de un proveedor de IA.",
      ],
      headers: ["Plan", "Precio", "Incluye"],
      rows: [
        ["App de escritorio o servidor autoalojado", "Sin cuota de Suparagent indicada", "Tu propio motor; pagas a tu proveedor de modelos"],
        ["Alojado: Free preview", "$0", "Cómputo en sandbox facturado a tu cuenta de Boat"],
        ["Alojado: Starter", "$15/mes", "100 horas de cómputo, 51 GB"],
        ["Alojado: Standard", "$49/mes", "300 horas de cómputo, 51 GB"],
        ["Alojado: Pro", "$99/mes", "720 horas de cómputo, 111 GB"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Cómo configurar Suparagent",
      steps: [
        {
          title: "Elige dónde se ejecuta",
          text: "Ejecuta la app de escritorio desde una copia del código fuente (los instaladores de GitHub Releases son experimentales y no están firmados), monta un servidor Linux autoalojado o usa la app web alojada en suparagent.ai.",
        },
        {
          title: "Crea un agente",
          text: "Dale un nombre, un rol, un motor como Claude Code, Codex, Gemini CLI o Cursor, un espacio de trabajo y un modo de aprobación, o empieza desde una plantilla.",
        },
        {
          title: "Dale trabajo",
          text: "Asigna tareas en el tablero, o configura rutinas que se ejecuten según una programación, por webhook o bajo demanda; el backend tiene que seguir en marcha. Las aprobaciones, las preguntas y los resultados se reúnen en la vista Today.",
        },
      ],
      source: { label: "Fuente: README de Suparagent en GitHub", href: repo },
    },
    {
      kind: "table",
      id: "vs",
      title: "Suparagent vs OpenWorker, OpenBot y Claude Cowork",
      text: [
        "Datos del README de cada proyecto o de las páginas del propio proveedor, comprobados el 13 de noviembre de 2026, con el número de estrellas de GitHub de ese día. Comparamos más compañeros de trabajo de IA en [herramientas de compañeros de trabajo de IA](/blog/ai-coworker).",
        "Guías: [OpenWorker](/personal-agent/openworker), [OpenBot](/personal-agent/openbot), [Claude Cowork](/personal-agent/claude-cowork).",
      ],
      headers: ["", "Suparagent", "OpenWorker", "OpenBot", "Claude Cowork"],
      rows: [
        ["Fabricante", "Anil-matcha en GitHub", "Andrew Ng (andrewyng en GitHub)", "CopilotKit", "Anthropic"],
        ["Código abierto", "Apache 2.0; unas 7.050 estrellas", "MIT; unas 19.050 estrellas", "Plantilla MIT, CopilotKit Intelligence con licencia aparte; unas 11.652 estrellas", "No"],
        ["Dónde se ejecuta", "App de escritorio, servidor Linux autoalojado o app web alojada", "Tu ordenador (macOS, Windows); un pequeño servicio en la nube gestiona el inicio de sesión de los conectores", "App de escritorio (Mac, Windows, backend en Docker) o Kubernetes; versión alojada en acceso anticipado", "La nube de Anthropic; trabajo en local a través de Claude Desktop"],
        ["Modelos", "Motores como Claude Code, Codex, Gemini CLI y Cursor; no incluye modelo", "Tu propia clave de OpenAI, Anthropic, Gemini, OpenRouter y otros, o un modelo local", "OpenAI, Claude, Gemini o modelos abiertos; tus propios agentes mediante AG-UI", "Modelos de Claude"],
        ["Precio", "Sin cuota indicada para autoalojarlo; planes alojados de $0 a $99 al mes", "Sin precio indicado; usas tu propio modelo", "Gratis para proyectos personales; Business hasta $29 por usuario activo al mes", "Planes de pago de Claude; Pro cuesta $20 al mes"],
        ["Tablero de tareas", "Tablero de tareas y calendario", "No se indica", "No se indica", "Sin tablero de issues; una lista de tareas y una página Scheduled"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Con Crewmark",
      title: "Empleados de IA con objetivos, horario y un heartbeat",
      text: [
        "Suparagent ejecuta compañeros con nombre sobre el motor que elijas. Crewmark convierte tus propias sesiones de Claude Code o Codex en empleados de IA con un rol, objetivos en cifras, horario laboral y un heartbeat, y cada uno toma issues de un tablero compartido.",
      ],
      steps: [
        { title: "Elige un rol", text: "Empieza por los [roles de empleados de IA](/ai-employees) y fija los objetivos en cifras." },
        { title: "Pon el trabajo en un tablero", text: "Asigna issues en el tablero compartido; durante su horario laboral, el heartbeat despierta al empleado para que tome la siguiente." },
        { title: "Mira lo que puede hacer", text: "Los trabajos, con su configuración, están en [casos de uso de Claude Code](/use-cases/claude-code)." },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Configurar Suparagent" },
  mid: {
    title: "¿Quieres empleados de IA sobre los agentes de programación que ya usas?",
    text: "Crewmark le da a tus sesiones de Claude Code o Codex un rol, un horario laboral, un heartbeat y un tablero compartido.",
    button: "Empezar",
  },
  faq: {
    title: "Preguntas frecuentes sobre Suparagent",
    items: [
      {
        q: "¿Qué es Suparagent?",
        a: "Un espacio de trabajo de código abierto para compañeros de trabajo de IA. Creas agentes con nombre con un rol, memoria, rutinas y ajustes de aprobación, y se ejecutan sobre un motor que ya usas, como Claude Code, Codex, Gemini CLI o Cursor. Se llamaba Open Dots, después Open Duet, hasta el cambio de nombre del 9 de noviembre de 2026.",
      },
      {
        q: "¿Suparagent es gratis?",
        a: "El código es Apache 2.0, y no se indica ninguna cuota de Suparagent para la app de escritorio ni para un servidor autoalojado; pagas a tu proveedor de modelos. El README enumera planes alojados: Free preview a $0 (cómputo en sandbox facturado a tu cuenta de Boat), Starter a $15 al mes, Standard a $49 y Pro a $99.",
      },
      {
        q: "¿Con qué agentes de IA funciona Suparagent?",
        a: "Claude Code o Codex CLI, Gemini CLI, Google Gemini a través de Antigravity, Cursor, otros agentes de CLI mediante el Agent Client Protocol (ACP), OpenRouter y APIs compatibles con OpenAI como Ollama o LM Studio. El agente líder de un equipo tiene que ser Claude o Codex, y las apps conectadas solo funcionan con agentes de Claude y Codex.",
      },
    ],
  },
  cta: {
    title: "Dale un trabajo a tus agentes de programación, no solo un prompt.",
    text: "Crewmark convierte sesiones de Claude Code y Codex en empleados de IA con roles, objetivos, horario laboral y un heartbeat.",
    button: "Empezar",
  },
  checked:
    "Comprobado con el README, el changelog y la licencia de Suparagent en GitHub y con suparagent.ai el 13 de noviembre de 2026; los datos de la comparativa, con las páginas de cada producto el mismo día.",
  disclaimer:
    "Crewmark es un producto independiente, sin relación con el proyecto Suparagent ni con Vadoo Internet Services Private Limited y sin su respaldo. Los nombres de los productos son marcas de sus titulares.",
};
