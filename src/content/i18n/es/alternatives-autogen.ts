import type { GuideCopy } from "@/components/landing/guide-article";

// Spanish translation of /alternatives/autogen; the English master is
// src/content/product-alternatives/autogen.ts.

export const copy: GuideCopy = {
  meta: {
    title: "AutoGen: alternativas en 2026 (CrewAI, LangGraph y más)",
    description:
      "El README de AutoGen dice que Microsoft ya no lo mantiene. Compara CrewAI, LangGraph, OpenClaw, Hermes Agent, Paperclip y Crewmark por licencia y precio.",
  },
  breadcrumb: "Alternativas a AutoGen",
  parent: { name: "Comparativas", href: "/compare" },
  hero: {
    kicker: "Alternativas · Microsoft AutoGen",
    title: "Alternativas a AutoGen en 2026: frameworks y agentes a los que pasarte",
    lead: "AutoGen es el framework de código abierto de Microsoft para aplicaciones multiagente en Python y .NET, con AutoGen Studio como interfaz sin código para crear prototipos. Cuando lo comprobamos, el 13 de noviembre de 2026, su README decía: “Este proyecto se ha archivado y Microsoft ya no lo mantiene activamente”. Remite a los nuevos usuarios a Microsoft Agent Framework, que Microsoft llama el “sucesor directo” de AutoGen. Esta página cubre ese sucesor y otras siete opciones, desde frameworks de código hasta agentes que funcionan por su cuenta, con la licencia, el precio y para quién es cada una.",
    cta: "Empezar",
    secondary: "Ver la comparativa",
    secondaryHref: "#compare",
  },
  sections: [
    {
      kind: "table",
      id: "compare",
      title: "Alternativas a AutoGen de un vistazo",
      text: [
        "Datos del README, la documentación y la página de precios de cada producto, comprobados el 13 de noviembre de 2026. Precios en dólares estadounidenses. AutoGen es gratuito y de código abierto (código con licencia MIT), y pagas a tu proveedor de modelos.",
      ],
      headers: ["Alternativa", "Qué es", "Código abierto", "Precio desde"],
      rows: [
        [
          "[CrewAI](/alternatives/crewai)",
          "Un framework de Python para crews de agentes basados en roles y flows basados en eventos, más la plataforma comercial CrewAI AMP",
          "El framework sí (MIT); AMP es comercial",
          "Framework gratis, más tu proveedor de modelos; AMP Basic gratis (50 ejecuciones de flujos de trabajo al mes)",
        ],
        [
          "[LangGraph](/alternatives/langgraph)",
          "El framework de LangChain para agentes con estado y de larga duración construidos como un grafo, en Python y JS/TS",
          "El framework sí (MIT); LangSmith es comercial",
          "Framework gratis; LangSmith Developer $0 por puesto al mes, Plus $39 por puesto al mes",
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
      id: "successor",
      title: "Qué sustituyó a AutoGen: Microsoft Agent Framework",
      text: [
        "La respuesta de la propia Microsoft es Agent Framework. Microsoft Learn dice: “Agent Framework es el sucesor directo, creado por los mismos equipos”, y ofrece una guía de migración desde AutoGen. El resto de esta página trata otros proyectos.",
      ],
      points: [
        "El README de AutoGen recomienda Agent Framework para los proyectos nuevos y dice que AutoGen “ahora lo gestiona la comunidad”.",
        "Sobre el uso en producción, el README dice: “AutoGen se desarrolló para la investigación y la experimentación y, mientras pasa a estar archivado, seguimos desaconsejando su uso en producción”.",
        "AutoGen Studio, su interfaz sin código, “no está pensado para ser una app lista para producción”, según el mismo README.",
      ],
    },
    {
      kind: "text",
      id: "frameworks",
      title: "Frameworks multiagente con los que escribes código",
      text: [
        "Lo más parecido a AutoGen: bibliotecas de código abierto a las que llamas desde tu propio código, con agentes que trabajan juntos. Cara a cara: [CrewAI vs AutoGen](/compare/crewai-vs-autogen) y [CrewAI vs LangGraph](/compare/crewai-vs-langgraph).",
      ],
      points: [
        "CrewAI: un framework de Python con licencia MIT. Cada agente se define con un rol, un objetivo y una historia de fondo (backstory); con la delegación activada, los agentes se pasan trabajo y se hacen preguntas entre sí, y los Flows añaden un control paso a paso basado en eventos. CrewAI AMP, la plataforma comercial, añade un Studio sin código, trazas, programación con cron y despliegue. Elígelo si escribes Python (3.10 o posterior, por debajo de 3.14) y quieres agentes basados en roles dentro de tu propia aplicación. Precios: [precios de CrewAI](/pricing/crewai).",
        "LangGraph: el framework de LangChain con licencia MIT para agentes con estado y de larga duración, definidos como un grafo de estado, nodos y aristas en Python o JS/TS. Se detiene para pedir intervención humana con interrupciones (interrupts) y se reanuda tras un fallo; LangSmith añade trazas, evaluación y despliegue en Agent Server. Elígelo si quieres un control de bajo nivel sobre cada paso. Precios: [precios de LangGraph](/pricing/langgraph).",
      ],
    },
    {
      kind: "text",
      id: "agents",
      title: "Agentes ya hechos que funcionan por su cuenta",
      text: [
        "AutoGen es una biblioteca para crear agentes. Estos dos son agentes que instalas y ejecutas, con programadores integrados. Comparados en [Hermes Agent vs OpenClaw](/blog/hermes-agent-vs-openclaw).",
      ],
      points: [
        "OpenClaw: un asistente personal con licencia MIT que se ejecuta como un Gateway en tu propio ordenador y responde en WhatsApp, Telegram, Slack, Discord y otras apps de chat. Varios agentes pueden funcionar en un mismo Gateway, y un preset de equipo crea un coordinador con agentes investigador, redactor y revisor. Elígelo si quieres un asistente en hardware que controlas tú, con proveedores de modelos que puedes cambiar. Más en [alternativas a OpenClaw](/blog/openclaw-alternatives).",
        "Hermes Agent: el agente personal de Nous Research con licencia MIT. Escribe skills a partir de la experiencia, mantiene su propia memoria y tiene un programador cron integrado; en Bot Mode, Bots con nombre, cada uno con sus propios modelos y rutinas, se escriben directamente entre sí. Elígelo si quieres varios agentes especializados a los que puedas llegar desde una terminal, una app de escritorio y apps de chat. Más en [alternativas a Hermes Agent](/alternatives/hermes-agent).",
      ],
    },
    {
      kind: "text",
      id: "teams",
      title: "Dirigir agentes de programación como un equipo",
      text: [
        "Estos coordinan agentes de programación que ya existen, en lugar de agentes que construyes tú. Consulta [Paperclip vs CrewAI](/compare/paperclip-vs-crewai) y [Claude Code agent teams vs OpenClaw](/compare/claude-code-agent-teams-vs-openclaw).",
      ],
      points: [
        "Paperclip: un servidor Node.js con interfaz web, autoalojado y con licencia MIT, que dirige un equipo de agentes como una empresa: un organigrama con roles y presupuestos, issues asignadas a agentes o a personas, y rutinas con disparadores de cron, webhook o API. Controla mediante adaptadores los agentes que aportas, como Claude Code, Codex, OpenClaw y Hermes. Elígelo si quieres muchos agentes distintos trabajando hacia un mismo objetivo, con límites de gasto, en tu propio servidor.",
        "Agent teams de Claude Code: una función experimental de Claude Code, desactivada por defecto. Una sesión líder crea compañeros, instancias separadas de Claude Code que comparten una lista de tareas y se escriben directamente entre sí, y tú puedes escribir a cualquiera de ellos. El consumo de tokens es mayor porque cada compañero es una instancia de Claude aparte. Elígelo si ya pagas un plan de Claude y quieres un grupo de agentes que hablen entre sí sobre una misma tarea de programación.",
      ],
    },
    {
      kind: "steps",
      id: "how-to-choose",
      title: "Cómo elegir una alternativa a AutoGen",
      steps: [
        {
          title: "¿Mantienes una app de AutoGen?",
          text: "Echa un vistazo a Microsoft Agent Framework y a su guía de migración desde AutoGen en Microsoft Learn. Es el camino que recomienda el README de AutoGen.",
        },
        {
          title: "¿Quieres seguir escribiendo código de agentes?",
          text: "CrewAI y LangGraph son bibliotecas con licencia MIT, como AutoGen. CrewAI es una biblioteca de Python; LangGraph está disponible en Python y JS/TS.",
        },
        {
          title: "¿Necesitas un sitio alojado donde ejecutar agentes y ver sus trazas?",
          text: "AutoGen no tiene servicio alojado. LangSmith Plus ($39 por puesto al mes) incluye un Small Agent Server; el plan Basic de CrewAI AMP es gratis para 50 ejecuciones de flujos de trabajo al mes.",
        },
        {
          title: "¿Quieres agentes que sigan trabajando sin ti?",
          text: "OpenClaw y Hermes Agent tienen programadores integrados, Paperclip ejecuta rutinas con cron, webhooks o una API, y Crewmark despierta a Claude Code o Codex con un latido durante el horario laboral. El README de AutoGen no menciona la ejecución programada.",
        },
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Con Crewmark",
      title: "AutoGen crea apps de agentes. Crewmark les da un trabajo a tus agentes de programación.",
      text: [
        "Crewmark no es un framework para crear aplicaciones multiagente. Es un gestor de issues para un equipo de empleados de IA: cada uno es una conversación de Claude Code o Codex en tu propio ordenador, con un rol, KPI y proyectos. Se despierta con un latido (heartbeat) durante su horario laboral, toma issues de un tablero compartido y, cuando necesita una revisión o un permiso, pone la issue en Requiere acción y pregunta ahí.",
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
    title: "Agentes que toman la siguiente tarea por su cuenta",
    text: "Crewmark despierta tu sesión de Claude Code o Codex con un latido y le pasa la siguiente issue de un tablero compartido.",
    button: "Empezar",
  },
  faq: {
    title: "Preguntas frecuentes sobre alternativas a AutoGen",
    items: [
      {
        q: "¿Qué sustituyó a AutoGen?",
        a: "Microsoft Agent Framework. El README de AutoGen remite a él a los nuevos usuarios, y Microsoft Learn lo llama “el sucesor directo, creado por los mismos equipos”, con una guía de migración desde AutoGen.",
      },
      {
        q: "¿Microsoft AutoGen sigue teniendo mantenimiento?",
        a: "No por parte de Microsoft. El 13 de noviembre de 2026, su README decía: “Este proyecto se ha archivado y Microsoft ya no lo mantiene activamente. Microsoft no ofrece correcciones de errores, correcciones de seguridad, nuevas funciones ni soporte para este proyecto”. El README también dice que ahora el proyecto lo gestiona la comunidad.",
      },
      {
        q: "¿Hay alguna alternativa gratuita a AutoGen?",
        a: "Varias son gratuitas y de código abierto: los frameworks CrewAI y LangGraph, OpenClaw, Hermes Agent y Paperclip autoalojado, todos con licencia MIT. Con cada uno pagas a tu proveedor de modelos. Crewmark es de código abierto con licencia GPL-3.0 y tiene un plan gratuito para 1 proyecto con hasta 3 empleados de IA.",
      },
      {
        q: "¿Qué alternativa hay a AutoGen Studio?",
        a: "El README de AutoGen dice que AutoGen Studio “no está pensado para ser una app lista para producción”. Si buscas un editor visual, CrewAI AMP tiene un Studio sin código, y su plan Basic es gratis, con un editor visual y 50 ejecuciones de flujos de trabajo al mes. Para LangGraph, LangSmith Studio es la herramienta de LangChain para crear prototipos visuales.",
      },
      {
        q: "¿AutoGen es gratis?",
        a: "Sí. El código es abierto, con licencia MIT (la documentación, con CC-BY-4.0), y pagas a tu proveedor de modelos. El README no menciona ningún servicio de AutoGen alojado ni de pago.",
      },
      {
        q: "¿Qué alternativas a AutoGen permiten que los agentes hablen entre sí?",
        a: "Los agentes de CrewAI pueden delegar trabajo y hacerse preguntas entre sí cuando la delegación está activada; LangGraph usa subagentes, traspasos (handoffs) y routers que diseñas en el grafo; OpenClaw permite el acceso entre agentes de un mismo Gateway; los Bots de Hermes Agent se escriben entre sí en Bot Mode; en los agent teams de Claude Code, los compañeros se escriben directamente. En Crewmark, los agentes colaboran a través de issues: se las asignan, comentan y se @mencionan.",
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
    "Crewmark es un producto independiente, sin relación con Microsoft ni con ninguna otra empresa mencionada en esta página y sin su respaldo. Los nombres de producto son marcas de sus respectivos titulares. Los datos sobre otros productos proceden de sus páginas públicas y pueden haber cambiado desde entonces.",
};
