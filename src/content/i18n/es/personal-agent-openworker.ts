import type { GuideCopy } from "@/components/landing/guide-article";

// Spanish translation of /personal-agent/openworker; the English master is
// src/content/personal-agents/openworker.ts.

const repo = "https://github.com/andrewyng/openworker";

export const copy: GuideCopy = {
  meta: {
    title: "OpenWorker: el compañero de IA de Andrew Ng, configuración y SDK",
    description:
      "OpenWorker, el compañero de IA de código abierto de Andrew Ng en GitHub: app de escritorio con tu modelo, aprobaciones y programaciones, más un Harness SDK.",
  },
  breadcrumb: "OpenWorker",
  parent: { name: "Agentes personales", href: "/personal-agent" },
  hero: {
    kicker: "Agentes personales · Código abierto",
    title: "OpenWorker: el compañero de trabajo de IA de código abierto de Andrew Ng y cómo configurarlo",
    lead: "OpenWorker es una app de escritorio de código abierto que su README llama “un compañero de trabajo de IA para tu trabajo diario” (“an AI coworker for your everyday work”), más un Harness SDK en TypeScript y Rust para crear tus propias apps agénticas. El repositorio está en la cuenta de GitHub de Andrew Ng, usa la licencia MIT y tenía unas 19.050 estrellas el 13 de noviembre de 2026. La app se ejecuta en tu máquina con tu propia clave de modelo o un modelo local, pregunta antes de actuar y registra cada llamada a herramientas. Aquí tienes qué hace, cuánto cuesta, cómo configurarlo, cómo funcionan las aprobaciones y cómo se compara con OpenBot, Suparagent y Claude Cowork.",
    cta: "Empezar",
    secondary: "Configurarlo",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "Qué es OpenWorker",
      points: [
        "Una app de escritorio para el trabajo diario: investigar, escribir, revisar código y llevar a cabo tareas en tus herramientas. Está en beta abierta.",
        "Se ejecuta en tu máquina: el bucle del agente, las conversaciones, los tokens de los conectores y las claves de los modelos se quedan ahí. La única pieza en la nube es un pequeño servicio que hace de intermediario en el inicio de sesión OAuth de los conectores.",
        "Tú eliges el modelo: OpenAI, Anthropic, Google Gemini, OpenRouter y otros proveedores con tu propia clave, o modelos locales mediante Ollama, LM Studio, llama.cpp o vLLM. Su motor de agente está escrito en Python sobre aisuite, la biblioteca de Andrew Ng.",
        "Los compañeros especialistas traen las herramientas y las instrucciones para un trabajo concreto; los primeros son los de seguridad.",
        "Conectores: GitHub, Slack, correo y calendarios, entre más de 25, además de MCP. Menciona a @OpenWorker en Slack y la tarea se ejecuta en tu escritorio, con la respuesta en el hilo.",
        "Programaciones: los resúmenes matinales, los informes semanales y otras tareas repetibles se ejecutan según una programación, con transcripciones para revisar.",
      ],
    },
    {
      kind: "text",
      id: "github",
      title: "OpenWorker en GitHub y el Harness SDK",
      text: [
        `El código está en [github.com/andrewyng/openworker](${repo}). El repositorio se creó el 20 de julio de 2026, su LICENSE MIT nombra a Andrew Ng como titular de los derechos de autor y tenía unas 19.050 estrellas el 13 de noviembre de 2026.`,
      ],
      points: [
        "Harness SDK: un SDK en TypeScript y Rust, en el mismo repositorio, para crear tus propias apps agénticas de escritorio o web.",
        "Subagentes y equipos: el SDK admite ambos; no se indica para la app de escritorio.",
        "Despliegue: las apps creadas con el SDK pueden ejecutarse en Kubernetes en AWS, Azure o Google Cloud.",
        "Contribuciones: los mantenedores dicen que puede que no acepten pull requests de funciones que ya estén en desarrollo o fuera de sus planes.",
      ],
    },
    {
      kind: "table",
      id: "plans",
      title: "Precio y licencia de OpenWorker",
      text: [
        "Ni el README ni openworker.com indican un precio (comprobado el 13 de noviembre de 2026). Usas tu propia clave de modelo, que factura tu proveedor, o ejecutas un modelo local.",
      ],
      headers: ["Parte", "Qué pagas"],
      rows: [
        ["App de escritorio (beta abierta)", "Sin precio indicado; licencia MIT"],
        ["Harness SDK (TypeScript, Rust)", "Sin precio indicado; licencia MIT, mismo repositorio"],
        ["Modelo en la nube: OpenAI, Anthropic, Google Gemini, OpenRouter u otro proveedor", "Lo factura ese proveedor, con tu propia clave"],
        ["Modelo local: Ollama, LM Studio, llama.cpp o vLLM", "Se ejecuta en tu propia máquina"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Cómo configurar OpenWorker",
      steps: [
        {
          title: "Descarga la app de escritorio",
          text: "Funciona en macOS 12 o posterior con Apple silicon (firmada y notarizada) y en Windows 10 u 11 en x64. Las versiones para Windows todavía no están firmadas, así que SmartScreen muestra un aviso. No figura ninguna descarga para Linux.",
        },
        {
          title: "Añade un modelo",
          text: "Introduce tu propia clave de OpenAI, Anthropic, Google Gemini, OpenRouter u otro proveedor, o usa un modelo local mediante Ollama, LM Studio, llama.cpp o vLLM. Las claves se quedan en tu máquina.",
        },
        {
          title: "Conecta tus herramientas",
          text: "Añade conectores como GitHub, Slack, correo y calendarios, o servidores MCP. El inicio de sesión pasa por un pequeño servicio en la nube que hace de intermediario OAuth; los tokens se quedan en tu máquina.",
        },
        {
          title: "Decide qué necesita tu visto bueno",
          text: "Por defecto, las acciones esperan tu aprobación. Convierte las aprobaciones puntuales en reglas permanentes y listas de permitidos, o activa la aprobación automática, en la que decide un modelo revisor que te pasa la decisión cuando no está seguro.",
        },
        {
          title: "Programa el trabajo repetitivo",
          text: "Configura resúmenes matinales, informes semanales y otras tareas repetibles. Las ejecuciones desatendidas nunca se aprueban a sí mismas: sus preguntas esperan en una bandeja de entrada, y cada ejecución deja una transcripción para revisar.",
        },
      ],
      source: { label: "Fuente: README de OpenWorker en GitHub", href: repo },
    },
    {
      kind: "text",
      id: "safety",
      title: "Cómo te mantiene OpenWorker al mando: aprobaciones, revisión y auditoría",
      points: [
        "Aprobación por defecto: las acciones esperan tu visto bueno, y un conjunto de operaciones peligrosas siempre queda en manos de una persona.",
        "Reglas que vas acumulando: una aprobación puntual puede convertirse en una regla permanente o en una entrada de la lista de permitidos.",
        "Aprobación automática opcional: un modelo revisor se encarga de las aprobaciones, te pasa la decisión cuando no está seguro y tiene un cortacircuitos.",
        "Un registro de auditoría: cada llamada a herramientas queda registrada junto con cómo se aprobó, y la app marca las acciones en las que los datos salen de tu Mac (“Leaves this Mac”).",
        "Sandbox: los comandos pueden ejecutarse en un sandbox de NVIDIA OpenShell o en el sandbox integrado de macOS o Windows.",
        "Las ejecuciones programadas nunca se aprueban a sí mismas; todo lo que necesiten de ti espera en una bandeja de entrada.",
      ],
    },
    {
      kind: "table",
      id: "vs",
      title: "OpenWorker vs OpenBot, Suparagent y Claude Cowork",
      text: [
        "Datos del README de cada proyecto o de las páginas del propio proveedor, comprobados el 13 de noviembre de 2026, con el número de estrellas de GitHub de ese día. Comparamos más compañeros de trabajo de IA en [herramientas de compañeros de trabajo de IA](/blog/ai-coworker).",
        "Guías: [OpenBot](/personal-agent/openbot), [Suparagent](/personal-agent/suparagent), [Claude Cowork](/personal-agent/claude-cowork).",
      ],
      headers: ["", "OpenWorker", "OpenBot", "Suparagent", "Claude Cowork"],
      rows: [
        ["Fabricante", "Andrew Ng (andrewyng en GitHub)", "CopilotKit", "Anil-matcha en GitHub", "Anthropic"],
        ["Código abierto", "MIT; unas 19.050 estrellas", "Plantilla MIT, CopilotKit Intelligence con licencia aparte; unas 11.652 estrellas", "Apache 2.0; unas 7.050 estrellas", "No"],
        ["Dónde se ejecuta", "Tu ordenador (macOS, Windows); un pequeño servicio en la nube gestiona el inicio de sesión de los conectores", "App de escritorio (Mac, Windows, backend en Docker) o Kubernetes; versión alojada en acceso anticipado", "App de escritorio, servidor Linux autoalojado o app web alojada", "La nube de Anthropic; trabajo en local a través de Claude Desktop"],
        ["Modelos", "Tu propia clave de OpenAI, Anthropic, Gemini, OpenRouter y otros, o un modelo local", "OpenAI, Claude, Gemini o modelos abiertos; tus propios agentes mediante AG-UI", "Motores como Claude Code, Codex, Gemini CLI y Cursor; no incluye modelo", "Modelos de Claude"],
        ["Precio", "Sin precio indicado; usas tu propio modelo", "Gratis para proyectos personales; Business hasta $29 por usuario activo al mes", "Sin cuota indicada para autoalojarlo; planes alojados de $0 a $99 al mes", "Planes de pago de Claude; Pro cuesta $20 al mes"],
        ["Trabajo recurrente", "Resúmenes, informes y otras tareas repetibles programados", "Routines, que ejecuta un worker de rutinas", "Rutinas según una programación, por webhook o bajo demanda", "Cada hora, cada día, cada semana o en días laborables, en la nube"],
        ["Aprobaciones", "Activadas por defecto; modelo revisor opcional", "Antes de actuar; auditoría en la edición para equipos", "Ask first, Accept edits, Approve for me o Plan only", "Manual, Auto o Skip"],
        ["Tablero de tareas", "No se indica", "No se indica", "Tablero de tareas y calendario", "Sin tablero de issues; una lista de tareas y una página Scheduled"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Con Crewmark",
      title: "Un compañero en tu escritorio. Empleados de IA en un tablero.",
      text: [
        "OpenWorker es un compañero de trabajo de IA que ejecutas en tu propia máquina. Crewmark convierte tus propias sesiones de Claude Code o Codex en empleados de IA con un rol, objetivos en cifras, horario laboral y un heartbeat, y cada uno toma issues de un tablero compartido, para que el trabajo recurrente de ingeniería, SEO y marketing tenga quien lo recoja y quede registrado.",
      ],
      steps: [
        { title: "Elige un rol", text: "Empieza por los [roles de empleados de IA](/ai-employees) y fija los objetivos en cifras." },
        { title: "Pon el trabajo en un tablero", text: "Asigna issues en el tablero compartido; durante su horario laboral, el heartbeat despierta al empleado para que tome la siguiente." },
        { title: "Mira lo que puede hacer", text: "Los trabajos, con su configuración, están en [casos de uso de Claude Code](/use-cases/claude-code)." },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Configurar OpenWorker" },
  mid: {
    title: "¿Quieres empleados de IA que tomen issues de un tablero?",
    text: "Crewmark le da a tus sesiones de Claude Code o Codex un rol, un horario laboral, un heartbeat y un tablero compartido.",
    button: "Empezar",
  },
  faq: {
    title: "Preguntas frecuentes sobre OpenWorker",
    items: [
      {
        q: "¿Qué es OpenWorker?",
        a: "Una app de escritorio de código abierto que su README llama “un compañero de trabajo de IA para tu trabajo diario” (“an AI coworker for your everyday work”), más un Harness SDK para crear tus propias apps agénticas. Se ejecuta en tu máquina con tu propia clave de modelo o un modelo local, pide aprobación antes de actuar y puede ejecutar tareas según una programación. La app de escritorio está en beta abierta.",
      },
      {
        q: "¿OpenWorker es de Andrew Ng?",
        a: "El repositorio es github.com/andrewyng/openworker, en la cuenta de GitHub de Andrew Ng, y su LICENSE nombra a Andrew Ng como titular de los derechos de autor. El motor de la app está construido sobre aisuite, su biblioteca. El pie de página de openworker.com dice “© 2026 OpenWorker”.",
      },
      {
        q: "¿OpenWorker es gratis y de código abierto?",
        a: "Es de código abierto con licencia MIT, y ni el README ni openworker.com indican un precio. Usas tu propia clave de modelo, que factura tu proveedor, o ejecutas un modelo local mediante Ollama, LM Studio, llama.cpp o vLLM.",
      },
      {
        q: "¿Qué es el Harness SDK de OpenWorker?",
        a: "Un SDK en TypeScript y Rust, en el mismo repositorio, para crear tus propias apps agénticas de escritorio o web. Admite subagentes y equipos, y las apps creadas con él pueden ejecutarse en Kubernetes en AWS, Azure o Google Cloud.",
      },
      {
        q: "¿OpenWorker funciona en Mac, Windows y Linux?",
        a: "Funciona en macOS 12 o posterior con Apple silicon y en Windows 10 u 11 en x64. Las versiones para Windows todavía no están firmadas, así que SmartScreen muestra un aviso. No figura ninguna descarga para Linux.",
      },
      {
        q: "¿Qué limitaciones tiene OpenWorker?",
        a: "La app de escritorio está en beta abierta, las versiones para Windows todavía no están firmadas y los mantenedores dicen que puede que no acepten pull requests de funciones que ya estén en desarrollo o fuera de sus planes.",
      },
    ],
  },
  cta: {
    title: "Ten un compañero en tu escritorio. Y dale también un trabajo a tus agentes de programación.",
    text: "Crewmark convierte sesiones de Claude Code y Codex en empleados de IA con roles, objetivos, horario laboral y un heartbeat.",
    button: "Empezar",
  },
  checked:
    "Comprobado con el README de OpenWorker en GitHub y openworker.com el 13 de noviembre de 2026; los datos de la comparativa, con las páginas de cada producto el mismo día.",
  disclaimer:
    "Crewmark es un producto independiente, sin relación con Andrew Ng ni con OpenWorker y sin su respaldo. Los nombres de los productos son marcas de sus titulares.",
};
