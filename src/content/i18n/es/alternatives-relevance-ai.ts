import type { GuideCopy } from "@/components/landing/guide-article";

// Spanish translation of /alternatives/relevance-ai; the English master is
// src/content/product-alternatives/relevance-ai.ts.

export const copy: GuideCopy = {
  meta: {
    title: "Relevance AI: alternativas open source y alojadas (2026)",
    description:
      "Relevance AI retiró su plan Free y solo muestra Enterprise. Compara CrewAI, LangGraph, AutoGen, Paperclip, OpenBot, Lindy y Crewmark, con precios.",
  },
  breadcrumb: "Alternativas a Relevance AI",
  parent: { name: "Comparativas", href: "/compare" },
  hero: {
    kicker: "Alternativas · Relevance AI",
    title: "Alternativas a Relevance AI: frameworks de agentes de código abierto, equipos de agentes autoalojados y asistentes alojados",
    lead: "Relevance AI es una plataforma low-code alojada para crear agentes de IA y conectarlos en equipos multiagente que llama AI Workforce, para trabajo de ventas, soporte y operaciones. A 13 de noviembre de 2026, su documentación dice que el plan Free se ha retirado tanto para los nuevos registros como para las cuentas existentes, y su página de precios muestra un solo plan, Enterprise, a través de ventas. No es de código abierto y no indica ninguna opción de autoalojamiento. Esta página cubre 7 alternativas: frameworks de código abierto, equipos de agentes autoalojados, un asistente alojado y Crewmark, con lo que cuesta cada una.",
    cta: "Empezar",
    secondary: "Compáralas",
    secondaryHref: "#compare",
  },
  sections: [
    {
      kind: "table",
      id: "compare",
      title: "Alternativas a Relevance AI de un vistazo",
      text: [
        "Datos de las propias páginas, la documentación o el GitHub de cada proveedor, comprobados el 13 de noviembre de 2026. Precios en dólares estadounidenses, salvo cuando el proveedor no da ninguno. No es una clasificación.",
      ],
      headers: ["Alternativa", "Qué es", "Código abierto", "Precio desde"],
      rows: [
        [
          "[Relevance AI](/pricing/relevance-ai) (como referencia)",
          "Una plataforma low-code alojada para agentes de IA y Workforces multiagente",
          "No",
          "Solo Enterprise, a través de ventas; plan Free retirado",
        ],
        [
          "[CrewAI](/alternatives/crewai)",
          "Un framework de Python para crews de agentes basados en roles, más la plataforma CrewAI AMP",
          "El framework sí, MIT; AMP es comercial",
          "Framework gratis; AMP Basic gratis (50 ejecuciones de flujos de trabajo al mes)",
        ],
        [
          "[LangGraph](/alternatives/langgraph)",
          "El framework de LangChain para agentes con estado y de larga duración construidos como grafos en código",
          "El framework sí, MIT; LangSmith es comercial",
          "Framework gratis; LangSmith Developer $0, Plus $39/puesto/mes",
        ],
        [
          "[AutoGen](/alternatives/autogen)",
          "El framework multiagente de Microsoft para Python y .NET; su README dice que está archivado",
          "Sí: código MIT, documentación CC-BY-4.0",
          "Gratis; sin servicio alojado",
        ],
        [
          "[Paperclip](/alternatives/paperclip)",
          "Un servidor autoalojado que dirige los agentes que aportas como una empresa, con organigrama y presupuestos",
          "Sí, MIT",
          "Autoalojado gratis; versión en la nube en lista de espera",
        ],
        [
          "[OpenBot](/personal-agent/openbot)",
          "El espacio de trabajo autoalojable de CopilotKit para compañeros de trabajo de IA",
          "Sí, MIT (usa CopilotKit Intelligence, con licencia aparte)",
          "Gratis para proyectos personales; Business hasta $29 por usuario activo al mes",
        ],
        [
          "[Lindy](/alternatives/lindy)",
          "Un asistente de IA alojado para la bandeja de entrada, el calendario, las reuniones y Slack, que se factura en créditos",
          "No",
          "$50 en créditos gratuitos durante 7 días; después, desde $29.99/mes por usuario activo",
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
      id: "frameworks",
      title: "Frameworks de agentes de código abierto (escribes tú el código)",
      text: [
        "Sustituyen el editor de Relevance AI por una biblioteca: defines agentes y flujos de trabajo en código y pagas a tu proveedor de modelos. CrewAI y LangGraph tienen además plataformas comerciales para desplegar lo que construyes. Cara a cara: [CrewAI vs LangGraph](/compare/crewai-vs-langgraph), [CrewAI vs AutoGen](/compare/crewai-vs-autogen).",
      ],
      points: [
        "[CrewAI](/alternatives/crewai): un framework de Python con licencia MIT para crews de agentes, cada uno definido con un rol, un objetivo y una historia de fondo (backstory), más Flows basados en eventos para el control paso a paso. Los agentes pueden delegar trabajo y hacerse preguntas entre sí. Su plataforma comercial, CrewAI AMP, tiene un plan Basic gratuito con un editor visual, un copiloto de IA y 50 ejecuciones de flujos de trabajo al mes, y un plan Enterprise con precio a medida que puede desplegarse en tu propia VPC. Elígelo si quieres equipos multiagente basados en roles en Python, con un editor sin código disponible. Precios: [precios de CrewAI](/pricing/crewai).",
        "[LangGraph](/alternatives/langgraph): el framework de LangChain con licencia MIT para agentes con estado y de larga duración, escritos como un grafo de estado, nodos y aristas en Python o JavaScript. Tiene ejecución duradera y pausas para la intervención humana (human-in-the-loop). LangSmith añade trazas, evaluación y despliegue: Developer $0 (1 puesto, sin Agent Server), Plus $39/puesto/mes con un Agent Server pequeño incluido, Enterprise a medida. Elígelo si quieres un control de bajo nivel sobre cada paso. Precios: [precios de LangGraph](/pricing/langgraph).",
        "[AutoGen](/alternatives/autogen): el framework de código abierto de Microsoft para apps multiagente en Python y .NET, con chats grupales, traspasos (handoffs) y AutoGen Studio para crear prototipos sin código. Su README dice que el proyecto “se ha archivado y Microsoft ya no lo mantiene activamente” y remite a los nuevos usuarios a Microsoft Agent Framework, que Microsoft llama el sucesor directo de AutoGen. Elígelo solo si mantienes una app de AutoGen existente o quieres estudiar sus patrones.",
      ],
    },
    {
      kind: "text",
      id: "self-hosted",
      title: "Equipos de agentes autoalojados (sin código de framework)",
      text: [
        "Como Relevance AI, te dan un equipo de agentes que gestionas desde una app web o de escritorio, pero los ejecutas en tu propia máquina o en tus servidores. Consulta [Paperclip vs CrewAI](/compare/paperclip-vs-crewai).",
      ],
      points: [
        "[Paperclip](/alternatives/paperclip): un servidor Node.js con interfaz web, con licencia MIT, que dirige un equipo de agentes de IA como una empresa. Defines un objetivo, construyes un organigrama con roles, líneas de reporte y presupuestos, y asignas issues a los agentes que aportas, como Claude Code, Codex u OpenClaw. Las rutinas crean tareas recurrentes a partir de disparadores de cron, webhook o API, y las aprobaciones y los topes estrictos de presupuesto mantienen a una persona al mando. Por ahora solo es autoalojado; hay una versión en la nube en lista de espera. Elígelo si quieres coordinar muchos agentes distintos hacia un mismo objetivo y limitar su gasto.",
        "[OpenBot](/personal-agent/openbot) (CopilotKit): un espacio de trabajo autoalojable donde cada Bot tiene su propio navegador, sus archivos y sus herramientas, con rutinas, aprobaciones y un registro de actividad. Funciona como app de escritorio para Mac y Windows o en Kubernetes para un equipo, con inicio de sesión corporativo, roles, permisos de herramientas y auditoría en la edición para equipos. Aportas OpenAI, Claude, Gemini o modelos abiertos, o tus propios agentes mediante AG-UI. Gratis para proyectos personales; OpenBot for Business cuesta hasta $29 por usuario activo al mes, más el 5% del gasto mensual en modelos por encima de $5.000. Elígelo si quieres compañeros de trabajo de IA con aprobaciones y un registro de auditoría en tu propia infraestructura.",
      ],
    },
    {
      kind: "text",
      id: "hosted",
      title: "Un asistente alojado: Lindy",
      points: [
        "[Lindy](/alternatives/lindy): un único asistente de IA alojado en lugar de un equipo que construyes tú. Se encarga de la bandeja de entrada, el calendario, las reuniones, la investigación, los informes y los seguimientos a través de Slack, el correo, iMessage, SMS, llamadas telefónicas y una extensión de Chrome en Gmail, ejecuta rutinas según una programación o un evento y espera tu aprobación antes de cualquier cosa con impacto externo. Empieza con $50 en créditos gratuitos que duran 7 días y después factura a cada usuario activo desde $29.99/mes por 3.000 créditos. Elígelo si quieres un asistente ya hecho en el que puedas registrarte por tu cuenta. Consulta [Relevance AI vs Lindy](/compare/relevance-ai-vs-lindy).",
      ],
    },
    {
      kind: "steps",
      id: "how-to-choose",
      title: "Cómo elegir una alternativa a Relevance AI",
      steps: [
        {
          title: "Decide si vas a escribir código",
          text: "CrewAI, LangGraph y AutoGen son bibliotecas que programas. Paperclip, OpenBot y Lindy son apps que configuras. El plan Basic gratuito de CrewAI AMP añade un editor visual si quieres algo intermedio.",
        },
        {
          title: "Decide dónde se ejecuta",
          text: "Relevance AI y Lindy son alojados. Paperclip por ahora solo es autoalojado; OpenBot funciona en tu portátil o en Kubernetes; los frameworks se ejecutan en tu propio código, con CrewAI AMP y LangSmith como plataformas alojadas opcionales.",
        },
        {
          title: "Comprueba en qué puedes registrarte hoy",
          text: "La página pública de precios de Relevance AI solo muestra Enterprise, a través de ventas. CrewAI AMP Basic y LangSmith Developer son planes gratuitos, Lindy empieza con créditos gratuitos y sin tarjeta de crédito, OpenBot es gratis para proyectos personales, y la versión autoalojada de Paperclip no necesita cuenta de Paperclip.",
        },
        {
          title: "Comprueba que el framework tenga mantenimiento",
          text: "El README de AutoGen dice que Microsoft ya no lo mantiene y desaconseja su uso en producción mientras pasa a estar archivado. Para los proyectos nuevos, Microsoft remite a Microsoft Agent Framework.",
        },
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Con Crewmark",
      title: "Crewmark: un equipo de empleados de IA sobre Claude Code o Codex",
      text: [
        "Crewmark tiene un alcance más acotado que Relevance AI. No crea agentes: le da un trabajo al Claude Code o Codex que ya usas. Cada empleado de IA es una conversación de Claude Code o Codex en tu propio ordenador con un rol, objetivos y un horario laboral. Se despierta con un latido (heartbeat), toma issues de un tablero compartido y mantiene su estado al día. Los agentes se asignan issues entre sí, comentan y se @mencionan, y cada evento despierta al agente al que afecta.",
        "Es de código abierto (GPL-3.0) y se puede autoalojar. El plan Free cubre 1 proyecto y hasta 3 empleados de IA; Pro ($5/mes) y Team ($10/mes) llegarán pronto, y la facturación aún no está implementada, así que hasta entonces todas las cuentas pueden usar Crewmark gratis. El uso del agente se paga a tu proveedor de agentes, y tu ordenador tiene que estar encendido para los latidos. Detalles en [precios de Crewmark](/pricing).",
      ],
      steps: [
        {
          title: "Elige un rol",
          text: "Dale a cada empleado un rol, objetivos y proyectos, por ejemplo un Especialista SEO o un Ingeniero de software. Consulta [roles de empleados de IA](/ai-employees).",
        },
        {
          title: "Pon el trabajo en un tablero",
          text: "Asigna issues con estados y prioridades, y haz que las habituales se repitan. Cuando un agente necesita una revisión, un permiso o información, pone la issue en Requiere acción y espera.",
        },
        {
          title: "Define el horario laboral",
          text: "El latido despierta a cada empleado con una frecuencia de entre 15 minutos y 24 horas durante su horario laboral. Los trabajos, con su configuración, están en [casos de uso de Claude Code](/use-cases/claude-code) y [casos de uso de Codex](/use-cases/codex).",
        },
      ],
    },
  ],
  mid: {
    title: "¿Quieres agentes con los que empezar hoy?",
    text: "Crewmark convierte tu Claude Code o Codex en empleados de IA con roles, un latido y un tablero compartido. Gratis para hasta 3 empleados.",
    button: "Empezar",
  },
  faq: {
    title: "Preguntas frecuentes sobre alternativas a Relevance AI",
    items: [
      {
        q: "¿Hay alguna alternativa de código abierto a Relevance AI?",
        a: "Sí. CrewAI y LangGraph son frameworks con licencia MIT, y el código de AutoGen es MIT, aunque su README dice que está archivado. Paperclip (MIT) y OpenBot (una plantilla de aplicación MIT sobre CopilotKit Intelligence, con licencia aparte) son apps autoalojadas para dirigir equipos de agentes, y Crewmark es GPL-3.0. Relevance AI no es de código abierto.",
      },
      {
        q: "¿Relevance AI tiene un plan gratuito?",
        a: "No. A 13 de noviembre de 2026, su documentación dice que el plan Free se ha retirado tanto para los nuevos registros como para las cuentas existentes, y su página de precios muestra un solo plan, Enterprise, con precio a medida a través de ventas. Detalles en [precios de Relevance AI](/pricing/relevance-ai).",
      },
      {
        q: "¿Hay alguna alternativa gratuita a Relevance AI?",
        a: "Los frameworks CrewAI, LangGraph y AutoGen son gratuitos; pagas a tu proveedor de modelos. El plan Basic de CrewAI AMP es gratis con 50 ejecuciones de flujos de trabajo al mes, y el plan Developer de LangSmith cuesta $0 para 1 puesto. Paperclip es gratis si lo autoalojas, OpenBot es gratis para proyectos personales, Lindy empieza con $50 en créditos durante 7 días, y el plan Free de Crewmark cubre hasta 3 empleados de IA.",
      },
      {
        q: "¿Hay alguna alternativa sin código a Relevance AI?",
        a: "El plan Basic gratuito de CrewAI AMP incluye un editor visual y un copiloto de IA. Lindy se configura en la conversación, sin editor. AutoGen Studio es una interfaz sin código para crear prototipos, pero su README dice que no está pensado para ser una app lista para producción.",
      },
      {
        q: "¿Puedo autoalojar una alternativa a Relevance AI?",
        a: "Sí. Paperclip funciona como un proceso de Node.js o una imagen de Docker, OpenBot en tu portátil o en Kubernetes, y Crewmark desde su repositorio (Node.js, PostgreSQL e inicio de sesión con Google). Los frameworks CrewAI, LangGraph y AutoGen se ejecutan en tu propio código; CrewAI AMP Enterprise puede desplegarse en tu propia VPC, y el Agent Server autoalojado de LangSmith es una opción de Enterprise. Relevance AI no indica ninguna opción de autoalojamiento.",
      },
      {
        q: "Relevance AI vs Lindy: ¿en qué se diferencian?",
        a: "Relevance AI es una plataforma para crear muchos agentes especializados y conectarlos en una Workforce, que se vende a través del equipo comercial. Lindy es un único asistente ya hecho para la bandeja de entrada, el calendario, las reuniones y Slack, que se factura por usuario activo en créditos desde $29.99/mes. Consulta [Relevance AI vs Lindy](/compare/relevance-ai-vs-lindy).",
      },
    ],
  },
  cta: {
    title: "Dales a tus agentes un trabajo sin pasar por ventas.",
    text: "Crewmark convierte sesiones de Claude Code y Codex en empleados de IA con roles, objetivos, horario laboral y un latido.",
    button: "Empezar",
  },
  checked: "Comprobado con las propias páginas, la documentación, los precios y el GitHub de cada producto el 13 de noviembre de 2026.",
  disclaimer:
    "Crewmark es un producto independiente, sin relación con Relevance AI, crewAI, LangChain, Microsoft, Paperclip Labs, CopilotKit ni Lindy, y sin su respaldo. Los nombres de producto son marcas de sus respectivos titulares. Los datos sobre otros productos proceden de sus páginas públicas y pueden haber cambiado desde entonces.",
};
