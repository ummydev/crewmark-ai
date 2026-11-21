import type { GuideCopy } from "@/components/landing/guide-article";

// Spanish translation of /alternatives/lindy; the English master is
// src/content/product-alternatives/lindy.ts.

export const copy: GuideCopy = {
  meta: {
    title: "Lindy AI: alternativas en 2026, opciones gratis y open source",
    description:
      "Alternativas a Lindy AI: Grok Bot, Claude Cowork, Copilot Cowork, ChatGPT Work, Relevance AI y OpenWorker y OpenBot, de código abierto, con opciones gratis.",
  },
  breadcrumb: "Alternativas a Lindy",
  parent: { name: "Comparativas", href: "/compare" },
  hero: {
    kicker: "Alternativas · Lindy",
    title: "Alternativas a Lindy AI: compañeros de trabajo de IA alojados, plataformas de agentes y asistentes de código abierto",
    lead: "Lindy es un asistente de IA alojado que trabaja con tu bandeja de entrada, tu calendario, tus reuniones y Slack, ejecuta rutinas recurrentes y pregunta antes de cualquier cosa con impacto externo. Se factura en créditos: empiezas con $50 en créditos gratuitos que duran 7 días y después pagas desde $29.99 al mes por usuario activo por 3.000 créditos. Los créditos mensuales no se acumulan, y se factura a cada usuario activo, incluidas las personas que solo @mencionan a Lindy en Slack. Aquí tienes 8 alternativas, alojadas y de código abierto, con lo que cuesta cada una.",
    cta: "Empezar",
    secondary: "Compáralas",
    secondaryHref: "#compare",
  },
  sections: [
    {
      kind: "table",
      id: "compare",
      title: "Alternativas a Lindy de un vistazo",
      text: [
        "Datos de las propias páginas, la documentación o el GitHub de cada proveedor, comprobados el 13 de noviembre de 2026. Precios en dólares estadounidenses. No es una clasificación.",
      ],
      headers: ["Alternativa", "Qué es", "Código abierto", "Precio desde"],
      rows: [
        [
          "[Lindy](/personal-agent/lindy) (como referencia)",
          "Un asistente de IA alojado para la bandeja de entrada, el calendario, las reuniones y Slack",
          "No",
          "$50 en créditos gratuitos durante 7 días; después, desde $29.99/mes por usuario activo por 3.000 créditos",
        ],
        [
          "[Grok Bot](/alternatives/grok-bot)",
          "Los compañeros de equipo de IA alojados de xAI, cada uno con su propio ordenador en la nube",
          "No",
          "Premium $30/mes",
        ],
        [
          "[Claude Cowork](/alternatives/claude-cowork)",
          "El agente de Anthropic para trabajo del conocimiento que no es de programación, en las apps de Claude",
          "No",
          "Claude Pro $20/mes, o $17/mes con facturación anual",
        ],
        [
          "[Copilot Cowork](/personal-agent/copilot-cowork)",
          "El agente de Microsoft para tareas de varios pasos en Microsoft 365",
          "No",
          "Licencia de Microsoft 365 Copilot más Copilot Credits a $0.01 cada uno",
        ],
        [
          "[ChatGPT Work](/personal-agent/chatgpt-work)",
          "El modo Work de OpenAI en ChatGPT, para tareas que terminan en algo que revisar",
          "No",
          "Free ($0) y Go ($8/mes): limitado, solo en la app de escritorio; Plus $20/mes",
        ],
        [
          "[Relevance AI](/alternatives/relevance-ai)",
          "Una plataforma low-code alojada para agentes de IA y equipos multiagente",
          "No",
          "Solo Enterprise, a través de ventas; plan Free retirado",
        ],
        [
          "[OpenWorker](/personal-agent/openworker)",
          "Una app de escritorio de compañero de trabajo de IA que se ejecuta en tu máquina",
          "Sí, MIT",
          "Sin precio publicado; tu propia clave de modelo o un modelo local",
        ],
        [
          "[OpenBot](/personal-agent/openbot)",
          "El espacio de trabajo autoalojable de CopilotKit para compañeros de trabajo de IA",
          "Sí, MIT (usa CopilotKit Intelligence, con licencia aparte)",
          "Gratis para proyectos personales; Business hasta $29 por usuario activo al mes",
        ],
        [
          "[Crewmark](/ai-employees)",
          "Un tablero de issues para empleados de IA que funcionan como Claude Code o Codex en tu ordenador",
          "Sí, GPL-3.0",
          "Gratis (1 proyecto, hasta 3 empleados de IA); Pro $5/mes, próximamente",
        ],
      ],
    },
    {
      kind: "text",
      id: "hosted",
      title: "Compañeros de trabajo de IA alojados de xAI, Anthropic, Microsoft y OpenAI",
      text: [
        "Como Lindy, se ejecutan en la nube del proveedor y reciben el trabajo en la conversación. Más de ellos, cara a cara, en [herramientas de compañeros de trabajo de IA](/blog/ai-coworker).",
      ],
      points: [
        "[Grok Bot](/alternatives/grok-bot) (xAI): Bots que tienen cada uno su propio ordenador en la nube, inician sesión en tus herramientas, trabajan en Slack y Microsoft Teams, ejecutan rutinas según una programación y se escriben entre sí. Entre los Bots ya hechos están Sales Outbound, Talent Scout y Chief of Staff. Está incluido en Premium ($30/mes), Super ($100/mes) y Ultra ($200/mes), con facturación mensual y el uso adicional cobrado según el coste de los tokens. Elígelo si quieres varios Bots con trabajos separados, también en Microsoft Teams. Consulta la [guía de Grok Bot](/personal-agent/grok-bot).",
        "[Claude Cowork](/personal-agent/claude-cowork) (Anthropic): describes un resultado y Claude se encarga de la investigación, los documentos, las hojas de cálculo con fórmulas que funcionan y las presentaciones en tus archivos, en apps conectadas como Gmail y Slack, y en un navegador. Las tareas programadas se ejecutan cada hora, cada día, cada semana o en días laborables en la nube. Viene con los planes de pago de Claude: Pro $20/mes ($17/mes con facturación anual), Max $100, Ultra $200, además de puestos de Team y Enterprise. Elígelo si quieres recibir archivos terminados en lugar de ayuda con la bandeja de entrada.",
        "[Copilot Cowork](/personal-agent/copilot-cowork) (Microsoft): envía correos, programa reuniones, edita archivos de Word, Excel y PowerPoint y publica en Teams, con un cuadro de aprobación antes de las acciones sensibles. Necesita una licencia de Microsoft 365 Copilot, y el uso se factura en Copilot Credits a $0.01 cada uno. Elígelo si tu empresa funciona con Outlook y Teams.",
        "[ChatGPT Work](/personal-agent/chatgpt-work) (OpenAI): un modo Work de ChatGPT para tareas que terminan en algo que revisar, con plugins para Slack, Google Drive, SharePoint, correo, calendarios y CRM, tareas programadas y disparadores de Gmail, Slack o GitHub en los planes aptos. Free y Go tienen acceso limitado en la app de escritorio; el acceso completo empieza con Plus a $20/mes. Elígelo si ya usas ChatGPT.",
      ],
    },
    {
      kind: "text",
      id: "platform",
      title: "Una plataforma de agentes para equipos: Relevance AI",
      points: [
        "[Relevance AI](/alternatives/relevance-ai): una plataforma low-code alojada en la que creas agentes especializados con sus propias instrucciones, herramientas y conocimiento, y los conectas en equipos multiagente que llama AI Workforce, para trabajo de ventas, soporte y operaciones. A 13 de noviembre de 2026, su página de precios solo muestra Enterprise, a través de ventas, y su documentación dice que el plan Free se ha retirado. Elígelo si tu empresa quiere varios agentes sin código y un equipo de despliegue del proveedor integrado con el tuyo. Consulta [Relevance AI vs Lindy](/compare/relevance-ai-vs-lindy) y [precios de Relevance AI](/pricing/relevance-ai).",
      ],
    },
    {
      kind: "text",
      id: "open-source",
      title: "Alternativas de código abierto a Lindy",
      text: [
        "Las dos se ejecutan en tu propio ordenador o servidor con el modelo que elijas, y ninguna factura en créditos: pagas directamente a tu proveedor de modelos.",
      ],
      points: [
        "[OpenWorker](/personal-agent/openworker): una app de escritorio de compañero de trabajo de IA con licencia MIT para macOS y Windows, en beta abierta. Trabaja con GitHub, Slack, correo y calendarios; cuando lo @mencionas en Slack, la tarea se ejecuta en tu escritorio y la respuesta vuelve al hilo. Puedes programar resúmenes matinales e informes semanales; las ejecuciones programadas nunca aprueban sus propias acciones, y sus solicitudes esperan en una bandeja de entrada. Usa una clave de OpenAI, Anthropic, Google Gemini u OpenRouter, o un modelo local. Elígelo si quieres ayuda de oficina al estilo de Lindy con tus claves guardadas en tu máquina.",
        "[OpenBot](/personal-agent/openbot) (CopilotKit): un espacio de trabajo autoalojable donde cada Bot tiene su propio navegador, sus archivos, sus herramientas, rutinas, memoria y aprobaciones. Funciona como app de escritorio para Mac y Windows o en Kubernetes para un equipo, con frontends para Slack y Teams, entre otros (algunos en acceso anticipado). Gratis para proyectos personales; OpenBot for Business cuesta hasta $29 por usuario activo al mes, más el 5% del gasto mensual en modelos por encima de $5.000. Elígelo si quieres alojar compañeros de trabajo de IA para un equipo en tu propia infraestructura.",
      ],
    },
    {
      kind: "steps",
      id: "how-to-choose",
      title: "Cómo elegir una alternativa a Lindy",
      steps: [
        {
          title: "Cuenta quién lo va a usar",
          text: "Lindy factura a cada usuario activo, incluidas las personas que solo lo @mencionan en Slack. Grok Bot tiene planes individuales desde $30/mes; Copilot Cowork necesita una licencia de Microsoft 365 Copilot y cobra por Copilot Credit; OpenWorker no publica precio y OpenBot es gratis para proyectos personales.",
        },
        {
          title: "Decide cómo quieres pagar el uso",
          text: "Los créditos mensuales de Lindy no se acumulan y las recargas cuestan $10 por cada 1.000 créditos. Grok Bot y los planes de Claude y ChatGPT son suscripciones con límites de uso. Con OpenWorker y OpenBot pagas directamente a tu proveedor de modelos.",
        },
        {
          title: "Elige según dónde se hace tu trabajo",
          text: "Slack y Microsoft Teams: Grok Bot. Microsoft 365: Copilot Cowork. Documentos y hojas de cálculo que te devuelve:Claude Cowork o ChatGPT Work. Muchos agentes para ventas o soporte: Relevance AI.",
        },
        {
          title: "Elige alojado o autoalojado",
          text: "Lindy, Grok Bot, Claude Cowork, Copilot Cowork, ChatGPT Work y Relevance AI son alojados. OpenWorker se ejecuta en tu escritorio, y OpenBot en tu portátil o en tu propio clúster de Kubernetes.",
        },
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Con Crewmark",
      title: "Crewmark: empleados de IA sobre el Claude Code o Codex que ya pagas",
      text: [
        "Crewmark no es un asistente para la bandeja de entrada como Lindy. Es un gestor de issues para un equipo de empleados de IA: cada uno es una conversación de Claude Code o Codex en tu propio ordenador con un rol, objetivos y un horario laboral. Se despierta con un latido (heartbeat), toma issues de un tablero compartido y mantiene su estado al día. Crewmark no factura el uso: los agentes funcionan con la suscripción de Claude o ChatGPT que ya pagas, y tu ordenador tiene que estar encendido para los latidos.",
        "El plan Free cubre 1 proyecto y hasta 3 empleados de IA. Pro ($5/mes) y Team ($10/mes) llegarán pronto; la facturación aún no está implementada, así que hasta entonces todas las cuentas pueden usar Crewmark gratis. Es de código abierto (GPL-3.0). Detalles en [precios de Crewmark](/pricing).",
      ],
      steps: [
        {
          title: "Elige un rol",
          text: "Dale a cada empleado un rol, objetivos y proyectos, por ejemplo un Especialista SEO o un Analista de datos. Consulta [roles de empleados de IA](/ai-employees).",
        },
        {
          title: "Pon el trabajo recurrente en el tablero",
          text: "Haz que las issues se repitan cada día, cada semana o cada mes; cuando una vence, se reabre y se avisa a su empleado. Un agente que necesita una revisión o un permiso pone la issue en Requiere acción y espera.",
        },
        {
          title: "Define el horario laboral",
          text: "El latido despierta a cada empleado con una frecuencia de entre 15 minutos y 24 horas durante su horario laboral. Los trabajos, con su configuración, están en [casos de uso de Claude Code](/use-cases/claude-code) y [casos de uso de Codex](/use-cases/codex).",
        },
      ],
    },
  ],
  mid: {
    title: "¿Prefieres no pagar por crédito?",
    text: "Crewmark ejecuta empleados de IA con la suscripción de Claude Code o Codex que ya tienes. Gratis para hasta 3 empleados.",
    button: "Empezar",
  },
  faq: {
    title: "Preguntas frecuentes sobre alternativas a Lindy",
    items: [
      {
        q: "¿Hay alguna alternativa gratuita a Lindy?",
        a: "Sí. ChatGPT Free ($0) incluye acceso limitado a ChatGPT Work en la app de escritorio. OpenWorker no publica precio y funciona con tu propia clave de modelo o un modelo local, y OpenBot es gratis para proyectos personales. El plan Free de Crewmark cubre 1 proyecto y hasta 3 empleados de IA. Lindy empieza con $50 en créditos que duran 7 días, una sola vez por compañero de equipo.",
      },
      {
        q: "¿Hay alguna alternativa de código abierto a Lindy?",
        a: "OpenWorker (MIT) y OpenBot (una plantilla de aplicación MIT sobre CopilotKit Intelligence, con licencia aparte) son de código abierto, igual que Crewmark (GPL-3.0). Lindy, Grok Bot, Claude Cowork, Copilot Cowork, ChatGPT Work y Relevance AI no lo son.",
      },
      {
        q: "Lindy vs Relevance AI: ¿en qué se diferencian?",
        a: "Lindy es un único asistente alojado para la bandeja de entrada, el calendario, las reuniones y Slack, que se factura por usuario activo en créditos. Relevance AI es una plataforma low-code para crear muchos agentes especializados y conectarlos en una Workforce; su página de precios solo muestra Enterprise, a través de ventas. Consulta [Relevance AI vs Lindy](/compare/relevance-ai-vs-lindy).",
      },
      {
        q: "¿Qué alternativa a Lindy funciona en Slack?",
        a: "Grok Bot trabaja en Slack y Microsoft Teams como un compañero más. Con OpenWorker, lo @mencionas en Slack y responde en el hilo. OpenBot tiene un frontend para Slack (algunos frontends están en acceso anticipado), ChatGPT Work tiene un plugin de Slack y disparadores de Slack en los planes aptos, y Claude Cowork tiene un conector de Slack.",
      },
      {
        q: "¿Hay alguna alternativa a Lindy que se ejecute en mi propio ordenador?",
        a: "OpenWorker ejecuta el bucle del agente en tu máquina y guarda allí las conversaciones y las claves de modelo. OpenBot funciona como app de escritorio para Mac y Windows, o en tu propio clúster de Kubernetes. Los agentes de Crewmark se ejecutan en tu ordenador, dentro de Claude Code o Codex.",
      },
      {
        q: "¿Por qué la gente busca alternativas a Lindy?",
        a: "Por los límites que indica Lindy: los créditos mensuales no se acumulan y, cuando se agotan, Lindy pausa las acciones que gastan créditos hasta el siguiente ciclo o una recarga ($10 por cada 1.000 créditos). Se factura a cada usuario activo, incluidas las personas que solo lo @mencionan en Slack. Los créditos gratuitos duran 7 días, y Microsoft Teams como lugar para usar Lindy todavía está por llegar.",
      },
    ],
  },
  cta: {
    title: "Dales a tus agentes un trabajo, no un saldo de créditos.",
    text: "Crewmark convierte sesiones de Claude Code y Codex en empleados de IA con roles, objetivos, horario laboral y un latido.",
    button: "Empezar",
  },
  checked: "Comprobado con las propias páginas, la documentación, los precios y el GitHub de cada producto el 13 de noviembre de 2026.",
  disclaimer:
    "Crewmark es un producto independiente, sin relación con Lindy, xAI, Anthropic, Microsoft, OpenAI, Relevance AI, CopilotKit ni los creadores de OpenWorker, y sin su respaldo. Los nombres de producto son marcas de sus respectivos titulares. Los datos sobre otros productos proceden de sus páginas públicas y pueden haber cambiado desde entonces.",
};
