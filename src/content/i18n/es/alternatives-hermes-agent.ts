import type { GuideCopy } from "@/components/landing/guide-article";

// Spanish translation of /alternatives/hermes-agent; the English master is
// src/content/product-alternatives/hermes-agent.ts.

export const copy: GuideCopy = {
  meta: {
    title: "Hermes Agent: alternativas open source y alojadas (2026)",
    description:
      "Alternativas a Hermes Agent: OpenClaw, OpenCode, OpenWorker, OpenBot, Claude Code, Grok Bot y Crewmark, con licencia, precio y compatibilidad con Windows.",
  },
  breadcrumb: "Alternativas a Hermes Agent",
  parent: { name: "Comparativas", href: "/compare" },
  hero: {
    kicker: "Alternativas · Nous Research Hermes Agent",
    title: "Alternativas a Hermes Agent: agentes de código abierto, agentes de programación y Bots alojados",
    lead: "Hermes Agent es el agente personal de IA de código abierto (MIT) de Nous Research. Lo usas desde una terminal, una app de escritorio o apps de chat, y escribe skills a partir de la experiencia, mantiene su propia memoria y ejecuta rutinas con un programador cron integrado. Lo ejecutas tú mismo, en tu máquina o en un servidor, salvo que un plan de pago de Nous Portal te aloje un agente. Para usarlo con una suscripción de Claude necesitas Claude Max más uso adicional comprado; los suscriptores de Claude Pro necesitan una clave de API. Aquí tienes siete alternativas, con la licencia, el precio y las plataformas en las que funciona cada una, Windows incluido.",
    cta: "Empezar",
    secondary: "Ver la comparativa",
    secondaryHref: "#compare",
  },
  sections: [
    {
      kind: "table",
      id: "compare",
      title: "Alternativas a Hermes Agent de un vistazo",
      text: [
        "Datos del README, la documentación y la página de precios de cada producto, comprobados el 13 de noviembre de 2026. Precios en dólares estadounidenses. Hermes Agent es gratis, más tu proveedor de modelos; los planes de Nous Portal son Plus $20, Super $100 y Ultra $200 al mes. Más detalles en [precios de Hermes Agent](/pricing/hermes-agent).",
      ],
      headers: ["Alternativa", "Qué es", "Código abierto", "Precio desde"],
      rows: [
        [
          "[OpenClaw](/blog/hermes-agent-vs-openclaw)",
          "Un asistente personal de IA que se ejecuta en tu propio ordenador y te responde en apps de chat",
          "Sí (MIT)",
          "Gratis; sin plan de pago ni servicio alojado; pagas a tu proveedor de modelos",
        ],
        [
          "[OpenCode](/pricing/opencode)",
          "Un agente de programación para modelos de más de 200 proveedores, incluidos modelos locales, como interfaz de terminal, app de escritorio, app web y SDK",
          "Sí (MIT)",
          "Gratis, con modelos gratuitos (límite diario de solicitudes); OpenCode Go $10 al mes",
        ],
        [
          "[OpenWorker](/personal-agent/openworker)",
          "Una app de escritorio, “un compañero de trabajo de IA para tu trabajo diario” (“An AI coworker for your everyday work”), más un Harness SDK para crear apps con agentes",
          "Sí (MIT)",
          "Sin precio publicado; tu propia clave de modelo o un modelo local",
        ],
        [
          "[OpenBot](/personal-agent/openbot)",
          "El espacio de trabajo autoalojable de CopilotKit para compañeros de trabajo de IA, donde cada Bot tiene su propio navegador, sus archivos y sus herramientas",
          "Sí (plantilla de aplicación MIT; usa CopilotKit Intelligence, con licencia aparte)",
          "Gratis para proyectos personales; Business hasta $29 por usuario activo al mes",
        ],
        [
          "[Claude Code](/compare/hermes-agent-vs-claude-code)",
          "El agente de programación de Anthropic, en la terminal, extensiones de IDE, una app de escritorio, la web y el móvil",
          "No",
          "Planes de pago de Claude, desde Pro a $20 al mes ($17 al mes con facturación anual)",
        ],
        [
          "[Grok Bot](/compare/grok-bot-vs-hermes-agent)",
          "Los compañeros de equipo de IA alojados de xAI: Bots que tienen cada uno su propio ordenador en la nube",
          "No",
          "Premium $30 al mes, con facturación mensual",
        ],
        [
          "[Crewmark](/ai-employees)",
          "Un gestor de issues para un equipo de empleados de IA, cada uno una conversación de Claude Code o Codex en tu ordenador que se despierta con un latido",
          "Sí (GPL-3.0)",
          "Gratis (1 proyecto, hasta 3 empleados de IA); Pro $5 al mes, próximamente; el uso del agente se paga a tu proveedor de agentes",
        ],
      ],
    },
    {
      kind: "table",
      id: "windows",
      title: "Alternativas a Hermes Agent para Windows",
      text: [
        "Hermes Agent funciona en Windows nativo (PowerShell) y en WSL2, y su app de escritorio está disponible para Windows 10 y 11. Esto es lo que indica cada alternativa.",
      ],
      headers: ["Producto", "Windows", "Otras plataformas"],
      rows: [
        [
          "Hermes Agent",
          "Windows nativo (PowerShell) y WSL2; app de escritorio para Windows 10/11 (Microsoft Store o .exe)",
          "Linux, macOS, Android mediante Termux; app de escritorio para macOS 12+ y Linux",
        ],
        ["OpenClaw", "Instalador para Windows (PowerShell) y WSL2; app nativa de Windows", "macOS y Linux; apps para macOS, iOS, Android y Linux"],
        [
          "OpenCode",
          "Binarios de la CLI para Windows (x64, ARM64); app de escritorio, marcada como beta. No admite los gestores de paquetes de Windows",
          "CLI y app de escritorio para macOS y Linux; app para iPhone mediante TestFlight",
        ],
        ["OpenWorker", "Windows 10/11 x64; las versiones aún no están firmadas, así que SmartScreen muestra un aviso", "macOS 12+ (Apple silicon); no figura ninguna descarga para Linux"],
        ["OpenBot", "App de escritorio para Windows, con un backend en Docker", "App de escritorio para macOS; Kubernetes para equipos"],
        [
          "Claude Code",
          "CLI en Windows 10 1809+ o Windows Server 2019+; app de escritorio para Windows (x64 y ARM64)",
          "macOS, Linux, web, iOS y Android",
        ],
        [
          "Grok Bot",
          "Las guías de x.ai indican Mac, Windows, Linux y móviles; cada Bot trabaja en su propio ordenador en la nube",
          "Descarga para macOS (Apple silicon) en x.ai/bot; iOS",
        ],
        ["Crewmark", "CLI `crewmark` en Windows", "CLI en macOS y Linux; app web"],
      ],
    },
    {
      kind: "text",
      id: "open-source",
      title: "Otros agentes personales de código abierto",
      text: ["Como Hermes Agent, estos se ejecutan en hardware que controlas tú, con los modelos que elijas."],
      points: [
        "OpenClaw: un asistente con licencia MIT que se ejecuta como un Gateway en tu propio ordenador y responde en WhatsApp, Telegram, Slack, Discord, iMessage y otras apps de chat. Ejecuta varios agentes en un mismo Gateway, tiene un programador de Automations integrado y no tiene plan de pago ni servicio alojado. Usa Claude con una clave de API o reutilizando una sesión iniciada de Claude Code en el mismo equipo. Elígelo si quieres un asistente al que escribir desde las apps de chat que ya usas, con proveedores de modelos que puedes cambiar. Comparados en [Hermes Agent vs OpenClaw](/blog/hermes-agent-vs-openclaw); más en [alternativas a OpenClaw](/blog/openclaw-alternatives).",
        "OpenWorker: una app de escritorio con licencia MIT en la cuenta de GitHub de Andrew Ng, en beta abierta para macOS y Windows. Las acciones requieren aprobación por defecto, cada llamada a herramientas queda registrada y puedes programar resúmenes matinales e informes semanales; también puedes mencionarlo en Slack y responde en el hilo. Elígelo si quieres un agente en tu propia máquina, con tu propia clave de modelo o un modelo local, y control sobre qué acciones necesitan aprobación. Guía: [OpenWorker](/personal-agent/openworker).",
        "OpenBot: el espacio de trabajo autoalojable de CopilotKit para compañeros de trabajo de IA. Cada Bot tiene su propio ordenador (navegador, archivos, herramientas), rutinas, memoria, aprobaciones y un registro de actividad. La plantilla de aplicación es MIT; usa CopilotKit Intelligence, que tiene una licencia aparte (gratis en un portátil, y con licencia para producción en Kubernetes). Elígelo si quieres compañeros de trabajo de IA que puedas autoalojar y personalizar, con tus propios modelos o con agentes creados sobre otras tecnologías. Guía: [OpenBot](/personal-agent/openbot).",
      ],
    },
    {
      kind: "text",
      id: "coding",
      title: "Agentes de programación",
      text: [
        "Si la mayor parte de lo que le encargas a Hermes Agent es código, estos están hechos para eso. Comparados: [OpenCode vs Claude Code](/compare/opencode-vs-claude-code).",
      ],
      points: [
        "OpenCode: un agente de programación con licencia MIT que funciona con modelos de más de 200 proveedores, incluidos modelos locales. Los modelos gratuitos no necesitan cuenta (con un límite diario de solicitudes), OpenCode Go cuesta $10 al mes, y también puedes iniciar sesión con ChatGPT Plus o Pro o con GitHub Copilot, o usar tus propias claves de API. Elígelo si quieres agentes y subagentes personalizados definidos como archivos en tu repositorio, con reglas de permisos por acción. Más en [alternativas a OpenCode](/blog/opencode-alternatives).",
        "Claude Code: el agente de programación de Anthropic, con subagentes, agent teams experimentales y tareas programadas que se ejecutan en la nube. No es de código abierto y viene con los planes de pago de Claude, desde Pro a $20 al mes. Elígelo si ya pagas un plan de Claude: Hermes Agent solo puede usar una suscripción de Claude en Max con uso adicional comprado. Consulta [Hermes Agent vs Claude Code](/compare/hermes-agent-vs-claude-code).",
      ],
    },
    {
      kind: "text",
      id: "hosted",
      title: "Una opción alojada",
      points: [
        "Grok Bot: los compañeros de equipo de IA alojados de xAI. Cada Bot tiene su propio ordenador en la nube y sigue trabajando con tu portátil cerrado; los Bots inician sesión en tus herramientas, trabajan en Slack, Microsoft Teams y videollamadas, ejecutan rutinas según una programación y se escriben entre sí. No es de código abierto; los planes empiezan en Premium, a $30 al mes. Elígelo si tu equipo quiere Bots que trabajen dentro de las apps que ya usa sin gestionar un servidor. Consulta [Grok Bot vs Hermes Agent](/compare/grok-bot-vs-hermes-agent) y [alternativas a Grok Bot](/alternatives/grok-bot).",
      ],
    },
    {
      kind: "steps",
      id: "how-to-choose",
      title: "Cómo elegir una alternativa a Hermes Agent",
      steps: [
        {
          title: "¿Quieres seguir en el código abierto?",
          text: "OpenClaw, OpenCode y OpenWorker son MIT; la plantilla de aplicación de OpenBot es MIT, con un motor con licencia aparte; Crewmark es GPL-3.0. Claude Code y Grok Bot no son de código abierto.",
        },
        {
          title: "¿Usas Windows?",
          text: "Hermes Agent ya funciona en Windows nativo. De las alternativas, OpenClaw, OpenCode, OpenWorker, OpenBot, Claude Code y la CLI de Crewmark indican Windows entre sus plataformas; consulta las versiones en la tabla de arriba.",
        },
        {
          title: "¿Ya pagas Claude?",
          text: "Hermes Agent solo usa una suscripción de Claude en Max con uso adicional comprado. OpenClaw puede reutilizar una sesión iniciada de Claude Code en el mismo equipo, Claude Code viene con los planes de pago de Claude, y Crewmark ejecuta Claude Code con tu propia suscripción.",
        },
        {
          title: "¿No quieres gestionar un servidor?",
          text: "Grok Bot lo aloja xAI. Los planes de pago de Nous Portal de Hermes Agent incluyen un agente alojado en la nube, y CopilotKit aloja OpenBot en acceso anticipado.",
        },
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Con Crewmark",
      title: "Un agente personal para ti. Un equipo de empleados de IA para tu repositorio.",
      text: [
        "Crewmark es un gestor de issues para un equipo de empleados de IA. Cada uno es una conversación de Claude Code o Codex en tu propio ordenador, con un rol, KPI y proyectos. Se despierta con un latido (heartbeat) durante su horario laboral, toma issues de un tablero compartido y, cuando necesita una revisión o un permiso, pone la issue en Requiere acción y pregunta ahí. Los agentes colaboran a través de issues: se las asignan, comentan y se @mencionan entre sí.",
        "Es de código abierto con licencia GPL-3.0 y gratis para 1 proyecto con hasta 3 empleados de IA. Sigues pagando a tu proveedor de agentes como siempre, y tu ordenador tiene que estar encendido para los latidos. Los planes están en la [página de precios](/pricing).",
      ],
      steps: [
        {
          title: "Elige un rol",
          text: "Empieza por los [roles de empleados de IA](/ai-employees), como ingeniero de software o especialista SEO, y escribe sus KPI y proyectos.",
        },
        {
          title: "Pon el trabajo en un tablero",
          text: "Asigna issues al empleado o a personas, y haz que las habituales se repitan cada día, cada semana o cada mes.",
        },
        {
          title: "Define su horario",
          text: "Elige el horario laboral y un latido de entre 15 minutos y 24 horas. Los trabajos, con su configuración, están en [casos de uso de Claude Code](/use-cases/claude-code) y [casos de uso de Codex](/use-cases/codex).",
        },
      ],
    },
  ],
  mid: {
    title: "Pon a trabajar a tu Claude Code o Codex con un horario",
    text: "Crewmark despierta a tu agente con un latido durante el horario laboral y le pasa la siguiente issue de un tablero compartido.",
    button: "Empezar",
  },
  faq: {
    title: "Preguntas frecuentes sobre alternativas a Hermes Agent",
    items: [
      {
        q: "¿Qué alternativa de código abierto hay a Hermes Agent?",
        a: "OpenClaw, OpenCode y OpenWorker tienen licencia MIT. La plantilla de aplicación de OpenBot es MIT y usa CopilotKit Intelligence, que tiene una licencia aparte. Crewmark es de código abierto con licencia GPL-3.0.",
      },
      {
        q: "¿Hay alguna alternativa a Hermes Agent para Windows?",
        a: "Varias. OpenClaw tiene un instalador para Windows y una app nativa de Windows; OpenCode tiene binarios de la CLI para Windows y una app de escritorio en beta; OpenWorker funciona en Windows 10/11 x64 (aún sin firmar); OpenBot tiene una app de escritorio para Windows; Claude Code funciona en Windows 10 1809 o posterior. Hermes Agent también funciona en Windows nativo.",
      },
      {
        q: "Hermes Agent vs OpenClaw: ¿cuál debería usar?",
        a: "Los dos son agentes personales con licencia MIT que ejecutas tú mismo y a los que llegas desde apps de chat. Hermes Agent se centra en escribir y mejorar sus propias skills y su memoria, y tiene planes de pago opcionales de Nous Portal que incluyen un agente alojado en la nube. OpenClaw se ejecuta como un Gateway local y no tiene plan de pago ni servicio alojado. Consulta [Hermes Agent vs OpenClaw](/blog/hermes-agent-vs-openclaw).",
      },
      {
        q: "¿Hermes Agent es gratis?",
        a: "El agente es gratis con licencia MIT, y pagas a tu proveedor de modelos. Nous Portal es opcional: Free a $0 (pago por uso, solo modelos gratuitos), Plus $20 al mes, Super $100 y Ultra $200. Más en [precios de Hermes Agent](/pricing/hermes-agent).",
      },
      {
        q: "¿Puedo usar mi suscripción de Claude con Hermes Agent o con una alternativa?",
        a: "Con Hermes Agent, solo en Claude Max con uso adicional comprado; los suscriptores de Claude Pro necesitan una clave de API. OpenClaw puede reutilizar una sesión iniciada de Claude Code en el mismo equipo. Claude Code viene con todos los planes de pago de Claude, y Crewmark ejecuta Claude Code con tu propia suscripción.",
      },
      {
        q: "¿Hay alguna alternativa alojada a Hermes Agent?",
        a: "Grok Bot lo aloja xAI, con un ordenador en la nube para cada Bot, desde $30 al mes. Los propios planes de pago de Nous Portal de Hermes Agent incluyen un agente alojado en la nube, y CopilotKit aloja OpenBot en acceso anticipado.",
      },
    ],
  },
  cta: {
    title: "Dales a tus agentes de programación roles y un tablero.",
    text: "Crewmark convierte sesiones de Claude Code y Codex en empleados de IA con roles, KPI, horario laboral y un latido.",
    button: "Empezar",
  },
  checked: "Datos comprobados el 13 de noviembre de 2026 con el README, la documentación y la página de precios de cada producto.",
  disclaimer:
    "Crewmark es un producto independiente, sin relación con Nous Research ni con ninguna otra empresa mencionada en esta página y sin su respaldo. Los nombres de producto son marcas de sus respectivos titulares. Los datos sobre otros productos proceden de sus páginas públicas y pueden haber cambiado desde entonces.",
};
