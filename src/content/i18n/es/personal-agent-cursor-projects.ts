import type { GuideCopy } from "@/components/landing/guide-article";

// Spanish translation of /personal-agent/cursor-projects; the English master is
// src/content/personal-agents/cursor-projects.ts.

const docs = "https://cursor.com/docs/agent/projects";

export const copy: GuideCopy = {
  meta: {
    title: "Cursor Projects: qué hace la función, precios y vs Grok Bot",
    description:
      "Cursor Projects: un coordinador planifica grandes trabajos de código y los delega en agentes en la nube. Planes, configuración, pruebas locales y vs Grok Bot.",
  },
  breadcrumb: "Cursor Projects",
  parent: { name: "Agentes personales", href: "/personal-agent" },
  hero: {
    kicker: "Agentes personales · Cursor",
    title: "Cursor Projects: cómo el agente coordinador planifica y delega los trabajos más grandes",
    lead: "Cursor Projects es una función de Cursor para trabajos de mayor envergadura, como una funcionalidad, una migración o una app completa. Chateas con un agente coordinador que no escribe código él mismo: planifica el trabajo, lo delega a agentes que se ejecutan en paralelo en los Cloud Agents de Cursor y te trae el trabajo terminado para que lo revises. Cada Project guarda archivos compartidos que leen todos sus agentes, y puede hacer trabajo recurrente sin que se lo pidas. Aquí tienes cómo funciona, qué planes lo incluyen, cómo configurarlo, dónde se ejecuta y cómo se compara con Grok Bot y Claude Code.",
    cta: "Empezar",
    secondary: "Configurarlo",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "Qué es Cursor Projects",
      points: [
        "Un coordinador y sus trabajadores: hablas con un agente coordinador, que crea agentes trabajadores, les pone nombre según su trabajo y los gestiona. El coordinador no escribe código él mismo; planifica el trabajo y lo delega a los trabajadores, que se ejecutan en paralelo.",
        "Se ejecuta en la nube: cada Project tiene su propio ordenador en la nube en los Cloud Agents de Cursor, así que cerrar el portátil no lo detiene.",
        "Archivos compartidos: un Project guarda preferencias, notas y flujos de trabajo que leen todos sus agentes. Un `notes.md` compartido registra lo que está en curso, en cola y terminado.",
        "Una lista de tareas y un tablero: cada Project tiene los suyos, y en los Multiplayer Projects los comparten todos los miembros.",
        "Trabajo recurrente: dile al coordinador que vigile un canal de Slack, que se ejecute según una programación o que siga tus pull requests, y actuará ante esas señales sin que se lo pidas.",
        "Pensado para trabajo que dura más que un chat: una funcionalidad con varias pull requests, una migración o un trabajo que se hace mientras no estás.",
      ],
    },
    {
      kind: "table",
      id: "plans",
      title: "Precios de Cursor Projects: qué planes lo incluyen",
      text: [
        "Los Projects se ejecutan en Cloud Agents, así que están en todos los planes de Cursor que tienen Cloud Agents. Precios de la página de ayuda sobre precios de Cursor el 13 de noviembre de 2026. Los planes de pago de Cursor incluyen una bolsa de uso para los modelos de Cursor (Grok y Composer).",
      ],
      headers: ["Plan", "Precio", "Cursor Projects"],
      rows: [
        ["Free", "-", "No incluido"],
        ["Plus", "$8/mes", "No incluido"],
        ["Premium", "$30/mes, o $300/año", "Incluido"],
        ["Super", "$100/mes", "Incluido"],
        ["Ultra", "$200/mes", "Incluido"],
        ["Teams", "$30, $100 o $200 por puesto/mes", "Incluido; los Multiplayer Projects necesitan una cuenta de equipo y Cursor 3.26.13 o posterior"],
        ["Enterprise", "-", "Incluido; necesita Cursor 3.21.9 o posterior"],
        ["Planes antiguos", "-", "Incluido en los planes de pago antiguos; no en el plan Hobby antiguo"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Cómo configurar Cursor Projects",
      steps: [
        {
          title: "Comprueba tu plan y tu ajuste de privacidad",
          text: "Necesitas un plan con Cloud Agents: Premium o superior, Teams, Enterprise (Cursor 3.21.9 o posterior) o un plan de pago antiguo. Los Projects no están disponibles con Privacy Mode (Legacy).",
        },
        { title: "Abre la Agents Window", text: "Los Projects están en la Agents Window de Cursor y se ejecutan en la nube." },
        {
          title: "Describe el trabajo grande",
          text: "Dile al coordinador qué construir, como una funcionalidad, una migración o una app completa, en tus repositorios de GitHub. Tú eliges el modelo del coordinador.",
        },
        {
          title: "Añade archivos compartidos",
          text: "Escribe preferencias, notas y flujos de trabajo para el Project; todos sus agentes los leen, y `notes.md` lleva la cuenta de lo que está en curso, en cola y terminado.",
        },
        {
          title: "Revisa el trabajo y hazlo recurrente",
          text: "El coordinador te trae el trabajo terminado para que lo revises. Pídele que vigile un canal de Slack, que se ejecute según una programación o que siga tus pull requests para que continúe sin que se lo pidas.",
        },
      ],
      source: { label: "Fuente: documentación de Cursor, Projects", href: docs },
    },
    {
      kind: "text",
      id: "safety",
      title: "Cómo te mantiene Cursor Projects al mando",
      points: [
        "Revisión: el coordinador te trae el trabajo terminado para que lo revises.",
        "Visibilidad: la lista de tareas y el tablero, y el `notes.md` compartido, muestran lo que está en curso, en cola y terminado.",
        "Separación: cada Project se ejecuta en su propio ordenador en la nube. El coordinador inicia un agente local cuando hay que probar algo en tu máquina.",
        "Equipos: en los Multiplayer Projects (cuenta de equipo, Cursor 3.26.13 o posterior), cada miembro tiene su propio coordinador, los coordinadores se escriben directamente entre sí y todos los miembros comparten el tablero.",
        "Privacidad: los Projects no están disponibles con Privacy Mode (Legacy).",
      ],
    },
    {
      kind: "text",
      id: "run-locally",
      title: "¿Cursor Projects se puede ejecutar en local?",
      text: [
        "No, no de principio a fin. La documentación de Cursor dice que un Project se ejecuta en su propio ordenador en la nube, así que cerrar el portátil no lo detiene, y la nube le permite ejecutar más agentes en paralelo de los que podría un portátil. Cuando hay que probar algo en tu máquina, el coordinador inicia un agente local para ejecutarlo allí.",
        "Las Self-Hosted Machines de Cursor trasladan la ejecución de herramientas a una máquina que gestionas tú: My Machines para el portátil, la devbox o la VM de una persona, y Team Pools en el plan Enterprise. Las ediciones de archivos, los comandos de terminal y otras llamadas a herramientas se ejecutan entonces en esa máquina, pero el bucle del agente, la inferencia y la planificación se quedan en la nube de Cursor, y el worker envía a Cursor el contenido que necesita el agente. (Documentación de Cursor, comprobada el 13 de noviembre de 2026.)",
        "Si quieres un equipo entero de agentes ejecutándose en tu propio ordenador, estas opciones funcionan así:",
      ],
      points: [
        "[Agent teams de Claude Code](/blog/claude-code-agent-teams): una función experimental de Claude Code, desactivada por defecto, en la que una sesión principal crea compañeros de equipo que comparten una lista de tareas y se escriben entre sí, todo dentro de tus propias sesiones de Claude Code.",
        "[Claude Squad](/compare/claude-squad-vs-conductor): una app de terminal de código abierto (AGPL-3.0) que ejecuta varios agentes de programación a la vez, cada uno en su propia sesión de tmux y su propio git worktree.",
        "[Vibe Kanban](/compare/vibe-kanban-vs-conductor): un tablero kanban de código abierto (Apache-2.0) para agentes de programación que se ejecuta en local en tu navegador o como app de escritorio; su comunidad lo mantiene desde que su empresa cerró en abril de 2026.",
        "[Crewmark](/ai-employees): de código abierto (GPL-3.0). Cada empleado de IA es una conversación de Claude Code o Codex en tu propio ordenador, con un rol y objetivos, y un heartbeat lo despierta para que tome la siguiente issue de un tablero compartido. El trabajo no se limita al código: roles como [especialista SEO](/ai-employees/seo-specialist) funcionan igual, y la app web se puede autoalojar.",
      ],
    },
    {
      kind: "table",
      id: "vs",
      title: "Cursor Projects vs Grok Bot y Claude Code",
      text: [
        "Datos de la documentación y las páginas de precios de cada proveedor, comprobados el 13 de noviembre de 2026. Comparamos más compañeros de trabajo de IA en [herramientas de compañeros de trabajo de IA](/blog/ai-coworker); consulta también la [guía de Grok Bot](/personal-agent/grok-bot) y [Grok Bot vs Claude Code](/compare/grok-bot-vs-claude-code).",
        "Cara a cara: [Cursor Projects vs Grok Bot](/compare/cursor-projects-vs-grok-bot). Guías: [Grok Bot](/personal-agent/grok-bot).",
      ],
      headers: ["", "Cursor Projects", "Grok Bot", "Claude Code"],
      rows: [
        ["Fabricante", "Cursor", "xAI", "Anthropic"],
        ["Pensado para", "Trabajo de programación grande: una funcionalidad, una migración, una app completa", "Compañeros de equipo de IA que trabajan en tus apps, Slack y Teams", "Programación: lee tu código, edita archivos y ejecuta comandos"],
        ["Varios agentes", "Un coordinador planifica y delega a agentes trabajadores en paralelo", "Los Bots se escriben entre sí y se coordinan en chats grupales", "Subagentes en una sesión; agent teams experimentales"],
        ["Dónde se ejecuta", "Los Cloud Agents de Cursor, un ordenador en la nube por Project; un agente local para las pruebas", "Nube: cada Bot tiene su propio ordenador", "Terminal, IDE y app de escritorio en tu máquina; sesiones en la nube en la web"],
        ["Tablero de tareas", "Una lista de tareas y un tablero, más un `notes.md` compartido", "No se indica; el trabajo se pasa en el chat, en hilos de Slack y en reuniones", "Sin tablero de issues; los agent teams comparten una lista de tareas"],
        ["Trabajo recurrente", "Vigila un canal de Slack, se ejecuta según una programación o sigue tus pull requests", "Rutinas según una programación", "Tareas programadas en la nube y de escritorio, `/loop`"],
        ["Precio", "Cursor Premium desde $30/mes", "Premium $30, Super $100 o Ultra $200 al mes", "Planes de pago de Claude, Pro desde $20/mes"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Con Crewmark",
      title: "Projects para un gran trabajo. Crewmark para roles fijos.",
      text: [
        "Cursor Projects coordina agentes en un trabajo de mayor envergadura. Crewmark convierte tus propias sesiones de Claude Code o Codex en empleados de IA con un rol, objetivos en cifras, horario laboral y un heartbeat, y cada uno toma issues de un tablero compartido, para que el trabajo de ingeniería, SEO y marketing de un repositorio se siga haciendo.",
      ],
      steps: [
        { title: "Elige un rol", text: "Empieza por los [roles de empleados de IA](/ai-employees), como ingeniero de software o especialista SEO." },
        { title: "Pon el trabajo en un tablero", text: "Asigna issues y haz que las habituales se repitan; el heartbeat despierta al empleado para que tome la siguiente." },
        { title: "Mira lo que puede hacer", text: "Los trabajos, con su configuración, están en [casos de uso de Claude Code](/use-cases/claude-code) y [casos de uso de Codex](/use-cases/codex)." },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Configurar Cursor Projects" },
  mid: {
    title: "¿Quieres agentes con un trabajo fijo?",
    text: "Crewmark le da a tu Claude Code o Codex un rol, un heartbeat y un tablero compartido.",
    button: "Empezar",
  },
  faq: {
    title: "Preguntas frecuentes sobre Cursor Projects",
    items: [
      {
        q: "¿Qué es Cursor Projects?",
        a: "Una función de Cursor para trabajos de mayor envergadura, como una funcionalidad, una migración o una app completa. Un agente coordinador planifica el trabajo, lo delega a agentes que se ejecutan en paralelo en los Cloud Agents de Cursor y te trae el trabajo terminado para que lo revises.",
      },
      {
        q: "¿Qué planes de Cursor incluyen Projects?",
        a: "Todos los planes con Cloud Agents: Premium ($30 al mes, o $300 al año) y superiores, Super ($100) y Ultra ($200), Teams ($30, $100 o $200 por puesto al mes), Enterprise y los planes de pago antiguos. Free, Plus ($8 al mes) y el plan Hobby antiguo no lo incluyen.",
      },
      {
        q: "¿Cursor Projects se ejecuta en local?",
        a: "No, se ejecuta en los Cloud Agents de Cursor, cada Project en su propio ordenador en la nube, así que cerrar el portátil no lo detiene. Cuando hay que probar algo en tu máquina, el coordinador inicia un agente local. Los Projects no están disponibles con Privacy Mode (Legacy).",
      },
      {
        q: "¿Cómo reviso lo que ha hecho Cursor Projects?",
        a: "El coordinador te trae el trabajo terminado para que lo revises. La lista de tareas y el tablero del Project y el `notes.md` compartido muestran lo que está en curso, en cola y terminado.",
      },
      {
        q: "¿Puede un equipo compartir un Cursor Project?",
        a: "Sí, con los Multiplayer Projects en una cuenta de equipo y Cursor 3.26.13 o posterior. Cada miembro tiene un coordinador, los coordinadores se escriben directamente entre sí y todos los miembros comparten la lista de tareas y el tablero.",
      },
      {
        q: "Cursor Projects vs Grok Bot: ¿en qué se diferencian?",
        a: "Cursor Projects es un espacio de trabajo de programación en Cursor: un coordinador delega un trabajo grande a agentes trabajadores en Cloud Agents. Grok Bot son los compañeros de equipo de IA alojados de xAI: Bots que tienen cada uno su propio ordenador en la nube, inician sesión en tus apps y trabajan en Slack y Microsoft Teams. Consulta la [guía de Grok Bot](/personal-agent/grok-bot).",
      },
    ],
  },
  cta: {
    title: "Coordina un gran trabajo en Projects. Y dale también un rol fijo a tus agentes.",
    text: "Crewmark convierte sesiones de Claude Code y Codex en empleados de IA con roles, objetivos, horario laboral y un heartbeat.",
    button: "Empezar",
  },
  checked: "Comprobado con la documentación de Projects, el centro de ayuda y la página de precios de Cursor el 13 de noviembre de 2026.",
  disclaimer:
    "Crewmark es un producto independiente, sin relación con Cursor, xAI ni Anthropic y sin su respaldo. Los nombres de los productos son marcas de sus titulares.",
};
