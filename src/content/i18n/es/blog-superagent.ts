import type { GuideCopy } from "@/components/landing/guide-article";

// Spanish translation of /blog/superagent; the English master is src/content/blog/superagent.ts.

const deepseek = "https://github.com/deepseek-ai/dsh-superagent-prototype";

export const copy: GuideCopy = {
  meta: {
    title: "¿Qué es un Superagent? DeepSeek, Base44 y ClickUp",
    description:
      "«Superagent» da nombre a varios productos de IA a la vez. Qué es un superagent, por qué el Super-agent de DeepSeek es tendencia y cómo se compara con Base44 Superagents, ClickUp Super Agents, Genspark y los proyectos open source de superagent-ai.",
  },
  breadcrumb: "Qué es un superagent",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-06" },
  hero: {
    kicker: "Blog · Agentes de IA",
    title: "¿Qué es un superagent? Todos los «Superagent» de 2026, comparados",
    lead: "Un superagent es un agente de IA que sigue trabajando por su cuenta: detecta el trabajo, asume tareas sin que tengas que pedirle cada paso, las ejecuta en segundo plano y solo vuelve a ti cuando necesita una decisión. La palabra está por todas partes este mes porque DeepSeek publicó como código abierto su prototipo Super-agent el 31 de octubre de 2026, pero varios productos ya usan ese nombre, desde Base44 y ClickUp hasta una herramienta de seguridad de código abierto. Esta guía explica la idea, qué es realmente cada uno y cómo elegir.",
    cta: "Empezar",
    secondary: "Ir a la comparativa",
    secondaryHref: "#compare",
  },
  sections: [
    {
      kind: "text",
      title: "Superagent: una definición",
      text: [
        "No hay un estándar, pero todos los productos que se venden como superagent comparten la misma idea: pasar de un asistente que responde cuando le preguntas a un agente que se hace cargo de un trabajo continuo.",
      ],
      points: [
        "Empieza a trabajar por sí mismo: a partir de una programación, un disparador, un mensaje o una tarea asignada, no solo de un prompt en el chat.",
        "Trabaja en segundo plano, a menudo en varias tareas a la vez, cada una en su propia sesión.",
        "Recuerda el contexto entre tareas y se conecta a las herramientas donde ocurre el trabajo, como GitHub, Slack, Gmail o un tablero de proyecto.",
        "Solo pide la atención de una persona cuando necesita una decisión o una aprobación.",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Todos los «Superagent», comparados",
      text: [
        "Datos tomados del sitio web o del repositorio de GitHub de cada fabricante el 6 de noviembre de 2026.",
      ],
      headers: ["Producto", "Creado por", "Qué es", "Cómo empieza el trabajo", "Precio"],
      rows: [
        ["DeepSeek Super-agent (dsh-superagent)", "El equipo de Harness de DeepSeek", "Un agente de programación proactivo para un repositorio de GitHub; un prototipo de investigación, no un producto oficial", "Peticiones en GitHub (y, opcionalmente, en Feishu) de personas autorizadas, o reglas que escribe el equipo", "Gratis, MIT; funciona sobre DeepSeek Harness"],
        ["Base44 Superagents", "Base44 (parte de Wix)", "Agentes sin código que describes en lenguaje natural, para tareas personales o de negocio", "Programaciones, disparadores, webhooks y apps de mensajería como WhatsApp, Telegram y Slack", "Usa los créditos del plan de Base44; plan Free y, después, desde $16/mes con facturación anual"],
        ["ClickUp Super Agents", "ClickUp", "Compañeros de IA dentro de un espacio de trabajo de ClickUp que clasifican, programan, informan y crean elementos", "@menciones, tareas asignadas, mensajes directos, programaciones y disparadores", "Disponible para todos los usuarios; el uso se factura en créditos de IA"],
        ["Genspark Super Agent", "Genspark", "Un agente de uso general para investigación, presentaciones, documentos y más", "Tu prompt", "Consulta genspark.ai"],
        ["superagent-ai/superagent", "Superagent (código abierto)", "Nació en 2023 como framework de agentes; hoy protege apps de IA frente a la inyección de prompts y las fugas de datos", "Se ejecuta en el pipeline de tu app", "Código abierto, MIT"],
        ["superagent-ai/grok-cli", "Comunidad, sin relación con xAI", "Un agente de programación de código abierto para la terminal que usa la API de Grok", "Tu prompt; subagentes y control remoto por Telegram", "Gratis, MIT; necesitas tu propia clave de la API de Grok"],
        ["Crewmark", "Crewmark", "Empleados de IA sobre Claude Code, Codex, DeepSeek Harness u OpenCode", "Un latido (heartbeat) durante el horario laboral toma la siguiente issue de un tablero", "Registro abierto; funciona con tu suscripción actual"],
      ],
    },
    {
      kind: "text",
      title: "Por qué todo el mundo busca «superagent» ahora: DeepSeek",
      text: [
        "El 31 de octubre de 2026, DeepSeek publicó un prototipo de investigación llamado dsh-superagent y un ensayo sobre cómo diseñar superagentes, y el repositorio superó unas 20.000 estrellas en GitHub en una semana. Convierte DeepSeek Harness en un agente que escucha GitHub, abre sus propios elementos de trabajo, ejecuta cada uno en una sesión aparte y responde con resultados como pull requests, mientras un panel web muestra lo que necesita a una persona. Su objetivo declarado es exigir la menor atención humana posible. Lee el análisis completo en [DeepSeek Super-Agent, explicado](/blog/deepseek-super-agent).",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Cómo elegir un superagent",
      steps: [
        {
          title: "Parte de dónde está el trabajo",
          text: "Si tu código está en GitHub, apunta al prototipo de DeepSeek o a un agente construido sobre Claude Code o Codex; si trabajas en ClickUp, a ClickUp Super Agents; para recados personales y mensajería, a Base44.",
        },
        {
          title: "Comprueba cómo empieza el trabajo",
          text: "Un superagent de verdad no espera a cada prompt. Busca programaciones, disparadores, tareas asignadas o un latido, y un lugar claro donde ver qué está haciendo.",
        },
        {
          title: "Comprueba qué puede hacer solo",
          text: "Prefiere agentes que pregunten antes de acciones arriesgadas, como fusionar, enviar o gastar, y que guarden un registro que puedas revisar. El prototipo de DeepSeek solo actúa ante peticiones o reglas escritas por el equipo.",
        },
        {
          title: "Comprueba de quién son los modelos y quién paga",
          text: "Los productos de espacio de trabajo cobran créditos además del plan; las herramientas de código abierto funcionan con tu propia clave de API o suscripción. Compáralo con las [mejores plataformas de empleados de IA](/blog/best-ai-employee-platforms).",
        },
        {
          title: "¿Prototipo o producto?",
          text: "DeepSeek dice que su Super-agent es solo de referencia. Para el trabajo diario, elige algo que tenga mantenimiento o construye sobre un agente en el que ya confías.",
        },
      ],
      source: { label: "Fuente: el repositorio dsh-superagent de DeepSeek", href: deepseek },
    },
    {
      kind: "text",
      title: "Superagent vs agente de IA vs empleado de IA",
      text: [
        "Un agente de IA completa la tarea que le das. Un superagent añade autonomía: detecta o recibe trabajo y sigue avanzando en segundo plano. Un empleado de IA va un paso más allá y le da a ese agente un puesto: un rol, un objetivo medido en cifras, un horario laboral y un tablero de trabajo, igual que harías al incorporar a una persona. Mira [qué es un empleado de IA](/ai-employees) y [cómo hacer proactivo Claude Code](/proactive-claude-code).",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Con Crewmark",
      title: "Un superagent con descripción del puesto",
      text: [
        "Crewmark convierte una sesión de Claude Code, Codex, DeepSeek Harness u OpenCode en un empleado de IA: se despierta con un latido durante el horario laboral, toma la siguiente issue de un tablero compartido, comenta mientras trabaja y te escribe cuando necesita una decisión, con la suscripción que ya pagas.",
      ],
      steps: [
        {
          title: "Elige el agente en el que confías",
          text: "Incluido DeepSeek Harness, el mismo entorno sobre el que está construido el Super-agent de DeepSeek.",
        },
        {
          title: "Dale un rol y un objetivo",
          text: "Ingeniero de software, especialista SEO, growth marketer: cada uno con una cifra que mover.",
        },
        {
          title: "Deja que el latido haga el resto",
          text: "Cada 15, 30 o 60 minutos durante el horario laboral toma la siguiente issue; tú solo respondes a lo que te necesita.",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Elegir un superagent" },
  mid: {
    title: "¿Quieres un superagent que trabaje en tu repo, con tu plan?",
    text: "Crewmark convierte Claude Code, Codex o DeepSeek Harness en empleados de IA que se despiertan con un latido y toman por sí mismos la siguiente issue.",
    button: "Empezar",
  },
  faq: {
    title: "Preguntas frecuentes sobre superagents",
    items: [
      {
        q: "¿Qué es un superagent?",
        a: "Un agente de IA que trabaja por su cuenta a lo largo del tiempo: inicia tareas a partir de disparadores, programaciones o peticiones, las ejecuta en segundo plano y solo pregunta a una persona cuando necesita una decisión.",
      },
      {
        q: "¿Qué es DeepSeek Super-agent?",
        a: "Un prototipo de investigación que DeepSeek publicó como código abierto el 31 de octubre de 2026 (dsh-superagent, MIT). Hace que DeepSeek Harness actúe de forma proactiva sobre un repositorio de GitHub. DeepSeek dice que es solo de referencia, no un producto oficial.",
      },
      {
        q: "¿DeepSeek Super-agent es gratis?",
        a: "Sí. El prototipo y DeepSeek Harness son de código abierto con licencia MIT; pagas el uso del modelo que hay detrás.",
      },
      {
        q: "¿Qué son los Base44 Superagents?",
        a: "Agentes de IA sin código de Base44 (parte de Wix) que describes en lenguaje natural. Funcionan con programaciones y disparadores, se conectan a Gmail, Drive, Notion, GitHub, Slack o servidores MCP, y usan los créditos de tu plan de Base44.",
      },
      {
        q: "¿Qué son los ClickUp Super Agents?",
        a: "Compañeros de IA en un espacio de trabajo de ClickUp, lanzados en diciembre de 2025, a los que puedes @mencionar, asignar tareas o poner en una programación. Están disponibles para todos los usuarios y consumen créditos de IA.",
      },
      {
        q: "¿Superagent en GitHub es lo mismo que el de DeepSeek?",
        a: "No. La organización superagent-ai no tiene relación: su repositorio superagent es hoy una herramienta de seguridad para IA, y grok-cli es un agente de programación de la comunidad para la API de Grok.",
      },
      {
        q: "¿Qué diferencia hay entre un superagent y un empleado de IA?",
        a: "Un superagent trabaja de forma autónoma en tareas. Un empleado de IA es un agente autónomo al que se le da un rol, un objetivo, un horario laboral y un tablero, de modo que su trabajo se organiza y se mide como el de un compañero de equipo.",
      },
    ],
  },
  cta: {
    title: "Convierte tu agente de programación en un superagent con un puesto.",
    text: "Crewmark convierte las sesiones de Claude Code, Codex, DeepSeek Harness y OpenCode en empleados de IA con roles, objetivos, horario laboral y un latido.",
    button: "Empezar",
  },
  checked: "Comprobado con el sitio web o el repositorio de GitHub de cada producto el 6 de noviembre de 2026.",
  disclaimer:
    "Crewmark es un producto independiente, sin relación con DeepSeek, Base44, Wix, ClickUp, Genspark ni los proyectos de superagent-ai y sin su respaldo. Los nombres de los productos son marcas de sus titulares.",
};
