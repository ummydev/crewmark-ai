import type { GuideCopy } from "@/components/landing/guide-article";

// Spanish translation of /personal-agent/openbot; the English master is
// src/content/personal-agents/openbot.ts.

const repo = "https://github.com/CopilotKit/OpenBot";

export const copy: GuideCopy = {
  meta: {
    title: "OpenBot: compañeros de IA de CopilotKit, precios y configuración",
    description:
      "OpenBot: espacio autoalojable de código abierto de CopilotKit para compañeros de IA. Precio de OpenBot for Business, configuración, GitHub y vs Grok Bot.",
  },
  breadcrumb: "OpenBot",
  parent: { name: "Agentes personales", href: "/personal-agent" },
  hero: {
    kicker: "Agentes personales · Código abierto",
    title: "OpenBot: el espacio de trabajo de código abierto de CopilotKit para compañeros de trabajo de IA",
    lead: "OpenBot es el espacio de trabajo de código abierto y autoalojable de CopilotKit para compañeros de trabajo de IA. Cada Bot tiene su propio ordenador, con navegador, archivos y herramientas, y trabaja con aprobaciones y un registro de actividad. Lo ejecutas como app de escritorio en tu portátil o en Kubernetes para un equipo, aportas tus propios modelos y puedes conectar mediante AG-UI agentes que ya hayas creado. Aquí tienes qué hace, cuánto cuesta OpenBot for Business, cómo configurarlo, cómo te mantiene al mando y cómo se compara con otros compañeros de trabajo de IA.",
    cta: "Empezar",
    secondary: "Configurarlo",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "Qué es OpenBot",
      points: [
        "Un ordenador por Bot: cada Bot tiene su propio navegador, sus archivos y sus herramientas, junto con conversaciones, rutinas, memoria, skills, apps, aprobaciones y actividad.",
        "Dónde se ejecuta: una app de escritorio para Mac y Windows con un backend en Docker en tu portátil, o Kubernetes mediante Helm para un equipo. Una versión alojada por CopilotKit está en acceso anticipado.",
        "Tus modelos: OpenAI, Claude, Gemini o modelos abiertos a través de un endpoint compatible con OpenAI. Pagas directamente a los proveedores de modelos.",
        "Tus agentes: usa los Bots integrados o conecta mediante AG-UI agentes que hayas creado con otros stacks.",
        "Routines: trabajo recurrente que ejecuta un worker de rutinas.",
        "Herramientas y frontends: herramientas MCP, y frontends para Mac, Windows, web, iOS, Android, Slack y Teams, algunos de ellos en acceso anticipado.",
      ],
    },
    {
      kind: "text",
      id: "github",
      title: "OpenBot en GitHub y CopilotKit Intelligence",
      text: [
        `El código está en [github.com/CopilotKit/OpenBot](${repo}). El repositorio se creó el 17 de agosto de 2026 y tenía unas 11.652 estrellas el 13 de noviembre de 2026.`,
      ],
      points: [
        "La plantilla de aplicación tiene licencia MIT, así que puedes autoalojarla y personalizarla.",
        "Usa CopilotKit Intelligence, que tiene su propia licencia: una licencia local gratuita en un portátil, y una licencia de prueba o de producción en Kubernetes.",
        "Para ejecutarlo en producción en Kubernetes se necesita una licencia de CopilotKit Intelligence más allá de la evaluación.",
      ],
    },
    {
      kind: "table",
      id: "plans",
      title: "Precios de OpenBot y OpenBot for Business",
      text: [
        "De open.bot/pricing el 13 de noviembre de 2026, en dólares estadounidenses. En todos los planes pagas directamente a los proveedores de modelos.",
      ],
      headers: ["Plan o licencia", "Precio"],
      rows: [
        ["Proyectos personales", "Gratis"],
        ["OpenBot for Business, pago por uso", "Hasta $29 por usuario activo al mes, más el 5% del gasto mensual en modelos por encima de $5.000"],
        ["Anual", "A medida"],
        ["CopilotKit Intelligence", "Licencia local gratuita en un portátil; licencia de prueba o de producción en Kubernetes"],
        ["Modelos", "Se pagan directamente a los proveedores de modelos"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Cómo configurar OpenBot",
      steps: [
        {
          title: "Elige dónde se ejecuta",
          text: "En tu portátil, la app de escritorio para Mac o Windows, que funciona con un backend en Docker. Para un equipo, Kubernetes mediante Helm. Una versión alojada por CopilotKit está en acceso anticipado.",
        },
        {
          title: "Conecta tus modelos",
          text: "Usa OpenAI, Claude, Gemini o modelos abiertos a través de un endpoint compatible con OpenAI. Pagas directamente a los proveedores.",
        },
        {
          title: "Elige un Bot o trae un agente",
          text: "Empieza con un Bot integrado, o conecta mediante AG-UI un agente que ya hayas creado. Cada Bot tiene su propio ordenador, con navegador, archivos y herramientas.",
        },
        {
          title: "Añade herramientas y rutinas",
          text: "Dale a los Bots herramientas MCP y configura Routines para el trabajo recurrente; las ejecuta un worker de rutinas.",
        },
        {
          title: "Úsalo donde trabajas",
          text: "Hay frontends para Mac, Windows, web, iOS, Android, Slack y Teams; algunos están en acceso anticipado.",
        },
      ],
      source: { label: "Fuente: README de OpenBot en GitHub", href: repo },
    },
    {
      kind: "text",
      id: "safety",
      title: "Cómo te mantiene OpenBot al mando",
      points: [
        "Aprobaciones: los Bots preguntan antes de actuar.",
        "Actividad: cada Bot guarda un registro de actividad.",
        "Edición para equipos: inicio de sesión corporativo, roles, permisos de herramientas y auditoría.",
        "Autoalojamiento: se ejecuta en tu portátil o en tu propio clúster de Kubernetes, con los proveedores de modelos que elijas.",
      ],
    },
    {
      kind: "table",
      id: "vs",
      title: "OpenBot vs OpenWorker, Suparagent y Claude Cowork",
      text: [
        "Datos del README de cada proyecto o de las páginas del propio proveedor, comprobados el 13 de noviembre de 2026, con el número de estrellas de GitHub de ese día. Comparamos más compañeros de trabajo de IA en [herramientas de compañeros de trabajo de IA](/blog/ai-coworker); para Grok Bot, consulta [OpenBot vs Grok Bot](/compare/openbot-vs-grok-bot).",
        "Guías: [OpenWorker](/personal-agent/openworker), [Suparagent](/personal-agent/suparagent), [Claude Cowork](/personal-agent/claude-cowork).",
      ],
      headers: ["", "OpenBot", "OpenWorker", "Suparagent", "Claude Cowork"],
      rows: [
        ["Fabricante", "CopilotKit", "Andrew Ng (andrewyng en GitHub)", "Anil-matcha en GitHub", "Anthropic"],
        ["Código abierto", "Plantilla MIT, CopilotKit Intelligence con licencia aparte; unas 11.652 estrellas", "MIT; unas 19.050 estrellas", "Apache 2.0; unas 7.050 estrellas", "No"],
        ["Dónde se ejecuta", "App de escritorio (Mac, Windows, backend en Docker) o Kubernetes; versión alojada en acceso anticipado", "Tu ordenador (macOS, Windows); un pequeño servicio en la nube gestiona el inicio de sesión de los conectores", "App de escritorio, servidor Linux autoalojado o app web alojada", "La nube de Anthropic; trabajo en local a través de Claude Desktop"],
        ["Modelos", "OpenAI, Claude, Gemini o modelos abiertos; tus propios agentes mediante AG-UI", "Tu propia clave de OpenAI, Anthropic, Gemini, OpenRouter y otros, o un modelo local", "Motores como Claude Code, Codex, Gemini CLI y Cursor; no incluye modelo", "Modelos de Claude"],
        ["Precio", "Gratis para proyectos personales; Business hasta $29 por usuario activo al mes", "Sin precio indicado; usas tu propio modelo", "Sin cuota indicada para autoalojarlo; planes alojados de $0 a $99 al mes", "Planes de pago de Claude; Pro cuesta $20 al mes"],
        ["Trabajo recurrente", "Routines, que ejecuta un worker de rutinas", "Resúmenes, informes y otras tareas repetibles programados", "Rutinas según una programación, por webhook o bajo demanda", "Cada hora, cada día, cada semana o en días laborables, en la nube"],
        ["Aprobaciones", "Antes de actuar; auditoría en la edición para equipos", "Activadas por defecto; modelo revisor opcional", "Ask first, Accept edits, Approve for me o Plan only", "Manual, Auto o Skip"],
        ["Tablero de tareas", "No se indica", "No se indica", "Tablero de tareas y calendario", "Sin tablero de issues; una lista de tareas y una página Scheduled"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Con Crewmark",
      title: "Bots en tu espacio de trabajo. Empleados de IA sobre tus agentes de programación.",
      text: [
        "OpenBot da a cada Bot su propio ordenador en un espacio de trabajo que alojas tú. Crewmark convierte tus propias sesiones de Claude Code o Codex en empleados de IA con un rol, objetivos en cifras, horario laboral y un heartbeat, y cada uno toma issues de un tablero compartido.",
      ],
      steps: [
        { title: "Elige un rol", text: "Empieza por los [roles de empleados de IA](/ai-employees) y fija los objetivos en cifras." },
        { title: "Pon el trabajo en un tablero", text: "Asigna issues en el tablero compartido; durante su horario laboral, el heartbeat despierta al empleado para que tome la siguiente." },
        { title: "Mira lo que puede hacer", text: "Los trabajos, con su configuración, están en [casos de uso de Claude Code](/use-cases/claude-code)." },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Configurar OpenBot" },
  mid: {
    title: "¿Quieres empleados de IA sobre los agentes de programación que ya usas?",
    text: "Crewmark le da a tus sesiones de Claude Code o Codex un rol, un horario laboral, un heartbeat y un tablero compartido.",
    button: "Empezar",
  },
  faq: {
    title: "Preguntas frecuentes sobre OpenBot",
    items: [
      {
        q: "¿Qué es OpenBot?",
        a: "El espacio de trabajo de código abierto y autoalojable de CopilotKit para compañeros de trabajo de IA. Cada Bot tiene su propio ordenador, con navegador, archivos y herramientas, además de aprobaciones y un registro de actividad. Se ejecuta como app de escritorio en tu portátil o en Kubernetes para un equipo, con los modelos que aportes.",
      },
      {
        q: "¿OpenBot es de CopilotKit?",
        a: "Sí. Está en github.com/CopilotKit/OpenBot. Usa CopilotKit Intelligence, que tiene una licencia aparte de la plantilla MIT de OpenBot, y conecta agentes existentes mediante AG-UI.",
      },
      {
        q: "¿OpenBot es gratis y de código abierto?",
        a: "La plantilla de aplicación tiene licencia MIT, y OpenBot es gratis para proyectos personales. CopilotKit Intelligence, que OpenBot usa, tiene una licencia local gratuita en un portátil y una licencia de prueba o de producción en Kubernetes. Pagas directamente a los proveedores de modelos.",
      },
      {
        q: "¿Cuánto cuesta OpenBot for Business?",
        a: "El pago por uso cuesta hasta $29 por usuario activo al mes, más el 5% del gasto mensual en modelos por encima de $5.000; el precio anual es a medida. Para ejecutarlo en producción en Kubernetes también se necesita una licencia de CopilotKit Intelligence más allá de la evaluación.",
      },
      {
        q: "OpenBot vs Grok Bot: ¿en qué se diferencian?",
        a: "OpenBot es de código abierto y autoalojable: lo ejecutas en tu portátil o en Kubernetes y aportas tus propios modelos o agentes. Para una comparativa cara a cara con Grok Bot, consulta [OpenBot vs Grok Bot](/compare/openbot-vs-grok-bot).",
      },
      {
        q: "¿Dónde está OpenBot en GitHub?",
        a: "En github.com/CopilotKit/OpenBot. El repositorio se creó el 17 de agosto de 2026 y tenía unas 11.652 estrellas el 13 de noviembre de 2026.",
      },
    ],
  },
  cta: {
    title: "Aloja tus Bots. Y dale también un trabajo a tus agentes de programación.",
    text: "Crewmark convierte sesiones de Claude Code y Codex en empleados de IA con roles, objetivos, horario laboral y un heartbeat.",
    button: "Empezar",
  },
  checked:
    "Comprobado con el README de OpenBot en GitHub y open.bot/pricing el 13 de noviembre de 2026; los datos de la comparativa, con las páginas de cada producto el mismo día.",
  disclaimer:
    "Crewmark es un producto independiente, sin relación con CopilotKit y sin su respaldo. Los nombres de los productos son marcas de sus titulares.",
};
