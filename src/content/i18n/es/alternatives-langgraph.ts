import type { GuideCopy } from "@/components/landing/guide-article";

// Spanish translation of /alternatives/langgraph; the English master is
// src/content/product-alternatives/langgraph.ts.

export const copy: GuideCopy = {
  meta: {
    title: "LangGraph: alternativas en 2026 (CrewAI, AutoGen y más)",
    description:
      "Alternativas a LangGraph: CrewAI, AutoGen, OpenClaw, Hermes Agent, Paperclip, agent teams de Claude Code y Crewmark, por licencia, precio y para quién son.",
  },
  breadcrumb: "Alternativas a LangGraph",
  parent: { name: "Comparativas", href: "/compare" },
  hero: {
    kicker: "Alternativas · LangChain LangGraph",
    title: "Alternativas a LangGraph en 2026: frameworks, agentes ya hechos y equipos de agentes",
    lead: "LangGraph es el framework de código abierto (MIT) de LangChain para agentes con estado y de larga duración: defines un flujo de trabajo como un grafo de estado, nodos y aristas, en Python o JS/TS. Es de bajo nivel por diseño y “no impone prompts ni arquitectura de agentes”. En LangSmith, la plataforma de LangChain, el plan gratuito Developer tiene un puesto y no incluye Agent Server, y el despliegue autoalojado es exclusivo de Enterprise. Si quieres agentes definidos por rol, un agente ya hecho en lugar de una biblioteca o un equipo de agentes de programación, aquí tienes siete opciones con la licencia, el precio y para quién es cada una.",
    cta: "Empezar",
    secondary: "Ver la comparativa",
    secondaryHref: "#compare",
  },
  sections: [
    {
      kind: "table",
      id: "compare",
      title: "Alternativas a LangGraph de un vistazo",
      text: [
        "Datos del README, la documentación y la página de precios de cada producto, comprobados el 13 de noviembre de 2026. Precios en dólares estadounidenses. LangGraph es gratis con licencia MIT; LangSmith Plus cuesta $39 por puesto al mes. Más detalles en [precios de LangGraph](/pricing/langgraph).",
      ],
      headers: ["Alternativa", "Qué es", "Código abierto", "Precio desde"],
      rows: [
        [
          "[CrewAI](/compare/crewai-vs-langgraph)",
          "Un framework de Python para crews de agentes basados en roles y flows basados en eventos, más la plataforma comercial CrewAI AMP",
          "El framework sí (MIT); AMP es comercial",
          "Framework gratis, más tu proveedor de modelos; AMP Basic gratis (50 ejecuciones de flujos de trabajo al mes)",
        ],
        [
          "[AutoGen](/alternatives/autogen)",
          "El framework multiagente de Microsoft en Python y .NET; su README dice que está archivado y que Microsoft ya no lo mantiene",
          "Sí (código MIT, documentación CC-BY-4.0)",
          "Gratis, más tu proveedor de modelos; sin servicio alojado",
        ],
        [
          "[OpenClaw](/blog/openclaw-alternatives)",
          "Un asistente personal de IA que se ejecuta en tu propio ordenador y te responde en apps de chat",
          "Sí (MIT)",
          "Gratis; sin plan de pago ni servicio alojado; pagas a tu proveedor de modelos",
        ],
        [
          "[Hermes Agent](/alternatives/hermes-agent)",
          "El agente personal de Nous Research que escribe y mejora sus propias skills, y que se usa desde una terminal, una app de escritorio o apps de chat",
          "Sí (MIT)",
          "Agente gratis, más tu proveedor de modelos; Nous Portal Plus opcional por $20 al mes",
        ],
        [
          "[Paperclip](/alternatives/paperclip)",
          "Un servidor autoalojado con interfaz web que dirige los agentes que aportas (Claude Code, Codex, OpenClaw y otros) como una empresa, con organigrama, presupuestos y tareas",
          "Sí (MIT)",
          "La versión autoalojada es gratis; no hay precios publicados; versión en la nube en lista de espera",
        ],
        [
          "[Agent teams de Claude Code](/blog/claude-code-agent-teams)",
          "Una función experimental de Claude Code en la que una sesión líder crea compañeros que comparten una lista de tareas y se escriben entre sí",
          "No",
          "Viene con Claude Code en los planes de pago de Claude, desde Pro a $20 al mes ($17 al mes con facturación anual)",
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
      kind: "text",
      id: "frameworks",
      title: "Otros frameworks de agentes",
      text: [
        "Bibliotecas a las que llamas desde tu propio código, como LangGraph. Cara a cara: [CrewAI vs LangGraph](/compare/crewai-vs-langgraph) y [CrewAI vs AutoGen](/compare/crewai-vs-autogen).",
      ],
      points: [
        "CrewAI: un framework de Python con licencia MIT. LangGraph no tiene un concepto de rol integrado; en CrewAI, cada agente se define con un rol, un objetivo y una historia de fondo (backstory). Con la delegación activada, los agentes se pasan trabajo y se hacen preguntas entre sí, y los Flows añaden un control paso a paso basado en eventos, con estado y ramificaciones. CrewAI AMP añade un Studio sin código, trazas, programación con cron y despliegue. Elígelo si escribes Python (3.10 o posterior, por debajo de 3.14) y quieres agentes organizados por rol. Precios: [precios de CrewAI](/pricing/crewai).",
        "AutoGen: el framework multiagente de Microsoft con licencia MIT, en Python y .NET, con chats grupales y equipos selector y swarm. El 13 de noviembre de 2026, su README decía que el proyecto “se ha archivado y Microsoft ya no lo mantiene activamente”, desaconsejaba su uso en producción y remitía a los nuevos usuarios a Microsoft Agent Framework, su sucesor. Elígelo si mantienes una app de AutoGen existente o quieres estudiar patrones multiagente. Más en [alternativas a AutoGen](/alternatives/autogen).",
      ],
    },
    {
      kind: "text",
      id: "agents",
      title: "Agentes ya hechos en lugar de una biblioteca",
      text: [
        "Con LangGraph, el agente lo construyes tú. Estos dos son agentes que instalas y ejecutas, cada uno con un programador integrado. Comparados en [Hermes Agent vs OpenClaw](/blog/hermes-agent-vs-openclaw).",
      ],
      points: [
        "OpenClaw: un asistente personal con licencia MIT que se ejecuta como un Gateway en tu propio ordenador y responde en WhatsApp, Telegram, Slack, Discord y otras apps de chat. Ejecuta varios agentes en un mismo Gateway, tiene un programador de Automations integrado, y el proyecto no tiene plan de pago ni servicio alojado. Elígelo si quieres un asistente en hardware que controlas tú, con proveedores de modelos que puedes cambiar. Más en [alternativas a OpenClaw](/blog/openclaw-alternatives).",
        "Hermes Agent: el agente personal de Nous Research con licencia MIT. Escribe skills a partir de la experiencia, mantiene su propia memoria y ejecuta rutinas con un programador cron integrado; en Bot Mode, Bots con nombre y con sus propios modelos se escriben directamente entre sí. Elígelo si quieres un agente que mejore sus propias skills con el tiempo y al que puedas llegar desde una terminal, una app de escritorio y apps de chat. Más en [alternativas a Hermes Agent](/alternatives/hermes-agent).",
      ],
    },
    {
      kind: "text",
      id: "teams",
      title: "Coordinar los agentes de programación que ya usas",
      text: [
        "Si los agentes que quieres coordinar son agentes de programación como Claude Code o Codex, estos los dirigen como un equipo. Consulta [Paperclip vs CrewAI](/compare/paperclip-vs-crewai) y [Claude Code agent teams vs OpenClaw](/compare/claude-code-agent-teams-vs-openclaw).",
      ],
      points: [
        "Paperclip: un servidor Node.js con interfaz web, autoalojado y con licencia MIT, que dirige agentes como una empresa: un organigrama con roles y presupuestos, issues asignadas a agentes o a personas, aprobaciones, y rutinas con disparadores de cron, webhook o API. Dice que “no es un framework de agentes”: controla mediante adaptadores los agentes que aportas, como Claude Code, Codex y OpenClaw. Elígelo si quieres muchos agentes trabajando hacia un mismo objetivo, con límites de gasto, en tu propio servidor.",
        "Agent teams de Claude Code: una función experimental de Claude Code, desactivada por defecto. Una sesión líder crea compañeros, instancias separadas de Claude Code que comparten una lista de tareas con dependencias y se escriben directamente entre sí. Elígelo si ya pagas un plan de Claude y quieres varias instancias de Claude Code trabajando en una misma tarea de programación.",
      ],
    },
    {
      kind: "steps",
      id: "how-to-choose",
      title: "Cómo elegir una alternativa a LangGraph",
      steps: [
        {
          title: "¿Necesitas un control de bajo nivel sobre cada paso?",
          text: "Para eso está hecho LangGraph. Si buscas un punto de partida de más alto nivel, su README remite a Deep Agents, que está construido sobre LangGraph y añade subagentes.",
        },
        {
          title: "¿Quieres agentes definidos por rol?",
          text: "Los agentes de CrewAI tienen un rol, un objetivo y una historia de fondo; Paperclip tiene un organigrama con cargos y descripciones de puesto; Crewmark da a cada empleado de IA un rol, KPI y proyectos.",
        },
        {
          title: "¿Necesitas ejecuciones programadas?",
          text: "LangGraph tiene tareas cron en LangSmith Agent Server, pero no se indican para la biblioteca por sí sola. CrewAI tiene programación con cron en AMP. OpenClaw y Hermes Agent tienen programadores integrados, Paperclip ejecuta rutinas y Crewmark tiene un latido e issues recurrentes.",
        },
        {
          title: "¿Vigilas los costes?",
          text: "Los frameworks de código abierto son gratuitos, y pagas las llamadas al modelo. Las tareas cron de LangGraph envían la misma entrada en cada ejecución, y la documentación de LangChain recomienda borrar las que no se usen porque las ejecuciones recurrentes pueden generar cargos de API del LLM. Paperclip tiene presupuestos con topes estrictos; Crewmark usa tu propia suscripción de Claude Code o Codex.",
        },
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Con Crewmark",
      title: "LangGraph integra agentes en tu app. Crewmark dirige tus agentes de programación como un equipo.",
      text: [
        "Crewmark no es un framework, y no escribes ningún grafo. Es un gestor de issues para un equipo de empleados de IA: cada uno es una conversación de Claude Code o Codex en tu propio ordenador, con un rol, KPI y proyectos. Se despierta con un latido (heartbeat) durante su horario laboral, toma issues de un tablero compartido y, cuando necesita una revisión o un permiso, pone la issue en Requiere acción y pregunta ahí.",
        "Es de código abierto con licencia GPL-3.0 y gratis para 1 proyecto con hasta 3 empleados de IA. Sigues pagando a tu proveedor de agentes como siempre, y tu ordenador tiene que estar encendido para los latidos. Los planes están en la [página de precios](/pricing).",
      ],
      steps: [
        {
          title: "Elige un rol",
          text: "Empieza por los [roles de empleados de IA](/ai-employees), como ingeniero de software o analista de datos, y escribe sus KPI y proyectos.",
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
    title: "Un equipo de agentes sin escribir un grafo",
    text: "Crewmark despierta tu sesión de Claude Code o Codex con un latido y le pasa la siguiente issue de un tablero compartido.",
    button: "Empezar",
  },
  faq: {
    title: "Preguntas frecuentes sobre alternativas a LangGraph",
    items: [
      {
        q: "¿Cuáles son las alternativas de código abierto a LangGraph?",
        a: "El framework de CrewAI, AutoGen (cuyo README dice que está archivado y que Microsoft ya no lo mantiene), OpenClaw, Hermes Agent y Paperclip tienen licencia MIT. Crewmark es de código abierto con licencia GPL-3.0. Claude Code, que ejecuta los agent teams, no es de código abierto.",
      },
      {
        q: "¿LangGraph es gratis?",
        a: "El framework es gratis con licencia MIT. LangSmith, la plataforma de LangChain, tiene un plan Developer a $0 por puesto al mes (1 puesto, hasta 5k trazas base al mes y después pago por uso, sin Agent Server), Plus a $39 por puesto al mes con un Small Agent Server incluido, y Enterprise con precio a medida. Más en [precios de LangGraph](/pricing/langgraph).",
      },
      {
        q: "LangGraph vs CrewAI: ¿en qué se diferencian?",
        a: "LangGraph es de bajo nivel: construyes un grafo de estado, nodos y aristas, y no tiene un concepto de rol integrado. CrewAI define cada agente por su rol, objetivo e historia de fondo y los agrupa en crews, con Flows para el control paso a paso. Los dos frameworks tienen licencia MIT. CrewAI es un framework de Python; LangGraph está disponible en Python y JS/TS. Consulta [CrewAI vs LangGraph](/compare/crewai-vs-langgraph).",
      },
      {
        q: "¿Necesito LangChain para usar LangGraph?",
        a: "No. La documentación de LangChain dice que “LangGraph no requiere LangChain”. Los ejemplos suelen usar integraciones de modelos de LangChain, pero LangGraph funciona con cualquier modelo al que llame tu código.",
      },
      {
        q: "¿AutoGen sigue siendo una alternativa a LangGraph en 2026?",
        a: "Su README dice que el proyecto “se ha archivado y Microsoft ya no lo mantiene activamente” y desaconseja su uso en producción. Microsoft remite a los nuevos usuarios a Microsoft Agent Framework, al que llama el sucesor directo de AutoGen. Consulta [alternativas a AutoGen](/alternatives/autogen).",
      },
      {
        q: "¿Qué alternativas a LangGraph ejecutan agentes según una programación?",
        a: "OpenClaw (Automations), Hermes Agent (un programador cron integrado), Paperclip (rutinas con cron, webhooks o una API) y Crewmark (un latido en horario laboral e issues recurrentes). CrewAI programa en su plataforma AMP, y Claude Code tiene tareas programadas aparte de los agent teams. LangGraph, por su parte, ejecuta tareas cron en LangSmith Agent Server.",
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
    "Crewmark es un producto independiente, sin relación con LangChain ni con ninguna otra empresa mencionada en esta página y sin su respaldo. Los nombres de producto son marcas de sus respectivos titulares. Los datos sobre otros productos proceden de sus páginas públicas y pueden haber cambiado desde entonces.",
};
