import type { GuideCopy } from "@/components/landing/guide-article";

// Spanish translation of /personal-agent/claude-cowork; the English master is
// src/content/personal-agents/claude-cowork.ts.

const help = "https://support.claude.com/en/articles/13345190-get-started-with-claude-cowork";

export const copy: GuideCopy = {
  meta: {
    title: "Claude Cowork: qué es, precios, configuración y vs Claude Code",
    description:
      "Claude Cowork: el agente de Anthropic para lo que no es programación, en las apps de Claude. Planes, nube, tareas programadas, aprobaciones y vs Claude Code.",
  },
  breadcrumb: "Claude Cowork",
  parent: { name: "Agentes personales", href: "/personal-agent" },
  hero: {
    kicker: "Agentes personales · Anthropic",
    title: "Claude Cowork: qué hace el compañero de trabajo de IA de Anthropic y cómo usarlo",
    lead: "Claude Cowork es el agente de Anthropic para el trabajo del conocimiento en las apps de Claude. Describes un resultado, como un informe de investigación, una hoja de cálculo, una presentación o una carpeta ordenada, y Claude planifica los pasos, los ejecuta en tus archivos, tus apps conectadas y un navegador, y te entrega el resultado. Las tareas se ejecutan en la nube de Anthropic y siguen adelante con el portátil cerrado. Aquí tienes qué hace, qué planes lo incluyen, cómo configurarlo, cómo te pregunta antes de actuar y en qué se diferencia de Claude Code.",
    cta: "Empezar",
    secondary: "Configurarlo",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "Qué es Claude Cowork",
      points: [
        "Un agente para trabajo que no es de programación: investigación, análisis, documentos, hojas de cálculo con fórmulas que funcionan, presentaciones y trabajo con archivos. Las propias preguntas frecuentes de Anthropic sitúan Cowork en este terreno y Claude Code en la ingeniería de software.",
        "Se ejecuta en la nube: las sesiones se ejecutan en un entorno aislado en los servidores de Anthropic y se guardan en tu cuenta de Claude. En Pro, Max y Ultra, las tareas nuevas se ejecutan en la nube desde el 6 de octubre de 2026.",
        "Llega a tu propio ordenador a través de Claude Desktop: los archivos locales, los conectores locales, el uso del navegador y el uso del ordenador necesitan la app de escritorio abierta en esa máquina.",
        "Repite trabajo: las tareas programadas se ejecutan cada hora, cada día, cada semana o en días laborables, cada una como una sesión propia en la nube.",
        "Forma parte de Claude: desde septiembre de 2026, Cowork se está integrando en las conversaciones normales de Claude.",
      ],
    },
    {
      kind: "table",
      id: "plans",
      title: "Precios de Claude Cowork: qué planes lo incluyen",
      text: [
        "Precios de claude.com/pricing el 13 de noviembre de 2026, en dólares estadounidenses y sin impuestos. Anthropic no publica cuánto uso de Cowork incluye cada plan; la tarjeta de Pro indica que Cowork consume los límites más rápido que el chat.",
      ],
      headers: ["Plan", "Precio", "Claude Cowork"],
      rows: [
        ["Free", "$0", "No incluido"],
        ["Pro", "$20/mes, o $17/mes con facturación anual ($200 al año)", "Incluido"],
        ["Max", "$100/mes", "Incluido"],
        ["Ultra", "$200/mes", "Incluido"],
        ["Team (de 2 a 150 personas)", "Puesto Standard: $20/mes con facturación anual o $25 con facturación mensual; puesto Premium: $100 o $125", "Incluido; web y móvil en beta"],
        ["Enterprise", "$20/puesto/mes con facturación anual, mínimo de 20 puestos, más el uso a tarifas de la API", "Incluido; sesiones en la nube, web y móvil desactivados hasta que un propietario los active"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Cómo configurar Claude Cowork",
      steps: [
        { title: "Contrata un plan de pago de Claude", text: "Pro, Max, Ultra, Team o Enterprise. En Enterprise, puede que un propietario tenga que activar Cowork." },
        { title: "Instala Claude Desktop si quieres trabajar en local", text: "Cowork también funciona en la web y en iOS y Android, pero los archivos locales, el uso del navegador y el uso del ordenador necesitan Claude Desktop para macOS o Windows (Linux está en beta)." },
        { title: "Describe el resultado, no los pasos", text: "Di qué quieres recibir y dónde están los materiales de partida: archivos, una app conectada como Google Drive, Gmail, Microsoft 365 o Slack, o la web." },
        { title: "Elige cómo te pregunta", text: "Elige Manual para aprobar cada acción, o Auto para que una revisión de seguridad apruebe las rutinarias. También puedes configurar cada herramienta de un conector como permitida siempre, con aprobación o bloqueada." },
        { title: "Conviértelo en una programación", text: "Escribe `/schedule` en una tarea, o usa la página Scheduled, y elige cada hora, cada día, cada semana, días laborables o bajo demanda." },
      ],
      source: { label: "Fuente: centro de ayuda de Anthropic, Get started with Claude Cowork", href: help },
    },
    {
      kind: "text",
      id: "safety",
      title: "Cómo te mantiene Claude Cowork al mando",
      points: [
        "Tres modos de aprobación: Manual pregunta antes de cada acción; Auto hace una revisión de seguridad de cada acción y bloquea las inseguras, y vuelve a preguntar si se topa una y otra vez con bloqueos; Skip no pregunta. Auto es el modo por defecto en Pro, Max, Ultra y Team, y Manual en Enterprise.",
        "Pregunta antes de borrar archivos de forma permanente, y el uso del ordenador pregunta antes de cada aplicación.",
        "Los administradores de Team y Enterprise pueden desactivar Auto y exigir aprobación para cada herramienta de conector con permisos de escritura.",
        "Puedes reorientar o detener una tarea a mitad de ejecución desde la app de escritorio, la web o tu teléfono.",
      ],
    },
    {
      kind: "table",
      id: "vs",
      title: "Claude Cowork vs Claude Code, ChatGPT Work y Copilot Cowork",
      text: [
        "Datos de las páginas de cada proveedor, comprobados el 13 de noviembre de 2026. Comparamos más compañeros de trabajo de IA en [herramientas de compañeros de trabajo de IA](/blog/ai-coworker).",
        "Cara a cara: [Claude Cowork vs Claude Code](/compare/claude-cowork-vs-claude-code), [Claude Cowork vs ChatGPT Work](/compare/claude-cowork-vs-chatgpt-work), [Copilot Cowork vs Claude Cowork](/compare/copilot-cowork-vs-claude-cowork), [Claude Cowork vs Grok Bot](/compare/claude-cowork-vs-grok-bot). Guías: [ChatGPT Work](/personal-agent/chatgpt-work), [Copilot Cowork](/personal-agent/copilot-cowork).",
      ],
      headers: ["", "Claude Cowork", "Claude Code", "ChatGPT Work", "Copilot Cowork"],
      rows: [
        ["Fabricante", "Anthropic", "Anthropic", "OpenAI", "Microsoft"],
        ["Pensado para", "Trabajo del conocimiento que no es de programación", "Ingeniería de software", "Tareas que terminan en algo que revisar", "Trabajo en Microsoft 365"],
        ["Dónde se ejecuta", "La nube de Anthropic; en local a través de Claude Desktop", "Tu máquina por defecto; sesiones en la nube en la web", "La nube de OpenAI, o tu ordenador a través de la app de escritorio", "La nube de Microsoft, con OneDrive y SharePoint"],
        ["Quién puede usarlo", "Planes de pago de Claude", "Planes de pago de Claude", "Planes de ChatGPT; limitado en Free y Go", "Licencia de Microsoft 365 Copilot más Copilot Credits"],
        ["Programaciones", "De cada hora a cada semana, en la nube", "Tareas programadas en la nube y de escritorio, `/loop`", "Tareas programadas y disparadores por eventos", "Prompts programados y tareas activadas por eventos"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Con Crewmark",
      title: "Cowork para tus documentos. Crewmark para tu código.",
      text: [
        "Claude Cowork se encarga del trabajo del conocimiento que le pasas. Crewmark convierte tu propio Claude Code o Codex en un empleado de IA con un rol, objetivos en cifras, horario laboral y un heartbeat, para que el trabajo de ingeniería, SEO y marketing de un repositorio se haga según un horario y quede registrado en un tablero.",
      ],
      steps: [
        { title: "Elige un rol", text: "Entre los [roles de empleados de IA](/ai-employees), como un [especialista SEO de IA](/ai-employees/seo-specialist)." },
        { title: "Pon el trabajo en un tablero", text: "Asigna issues y haz que las habituales se repitan; el heartbeat despierta al empleado para que tome la siguiente." },
        { title: "Mira lo que puede hacer", text: "Los trabajos, con su configuración, están en [casos de uso de Claude Code](/use-cases/claude-code)." },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Configurar Claude Cowork" },
  mid: {
    title: "¿Quieres un compañero de trabajo de IA para tu código?",
    text: "Crewmark le da a tu Claude Code o Codex un rol, un heartbeat y un tablero compartido.",
    button: "Empezar",
  },
  faq: {
    title: "Preguntas frecuentes sobre Claude Cowork",
    items: [
      {
        q: "¿Qué es Claude Cowork?",
        a: "El agente de Anthropic para el trabajo del conocimiento que no es de programación, en las apps de Claude. Describes un resultado y él ejecuta los pasos en tus archivos, tus apps conectadas y un navegador, y te devuelve archivos terminados, como documentos, hojas de cálculo y presentaciones.",
      },
      {
        q: "¿Cuánto cuesta Claude Cowork?",
        a: "Viene con los planes de pago de Claude: Pro a $20 al mes (o $17 al mes con facturación anual), Max a $100, Ultra a $200, y los puestos de Team y Enterprise. Claude Free no lo incluye.",
      },
      {
        q: "Claude Cowork vs Claude Code: ¿en qué se diferencian?",
        a: "Cowork es para trabajo del conocimiento, como investigación, documentos y hojas de cálculo, en las apps de Claude; Claude Code es el agente de Anthropic para ingeniería de software en tu repositorio. Anthropic dice que Cowork usa la misma arquitectura que Claude Code.",
      },
      {
        q: "¿Claude Cowork está disponible en Windows y en el móvil?",
        a: "Sí. Claude Desktop lo ejecuta en macOS y Windows (Linux en beta), y está en la web y en Claude para iOS y Android en Pro, Max, Ultra y Team. Los archivos locales, el uso del navegador y el uso del ordenador necesitan la app de escritorio.",
      },
      {
        q: "¿Claude Cowork puede ejecutar tareas según una programación?",
        a: "Sí, en todos los planes de pago. Usa `/schedule` en una tarea o la página Scheduled; cada ejecución es una sesión propia en la nube, así que tu ordenador puede estar apagado, salvo que la tarea necesite archivos locales.",
      },
      {
        q: "¿Claude Cowork funciona con el portátil cerrado?",
        a: "Las tareas en la nube sí: siguen ejecutándose en los servidores de Anthropic. El trabajo que necesita tus archivos locales, tus conectores locales o tu navegador deja de tener acceso a ellos hasta que vuelvas a abrir Claude Desktop.",
      },
    ],
  },
  cta: {
    title: "Pásale los documentos a Cowork. Y dale también un trabajo a tus agentes.",
    text: "Crewmark convierte sesiones de Claude Code y Codex en empleados de IA con roles, objetivos, horario laboral y un heartbeat.",
    button: "Empezar",
  },
  checked: "Comprobado con claude.com/product/cowork, claude.com/pricing y el centro de ayuda de Anthropic el 13 de noviembre de 2026.",
  disclaimer:
    "Crewmark es un producto independiente, sin relación con Anthropic, OpenAI ni Microsoft y sin su respaldo. Claude y Claude Code son marcas de Anthropic.",
};
