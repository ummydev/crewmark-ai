import type { GuideCopy } from "@/components/landing/guide-article";

// Spanish translation of /alternatives/grok-bot; the English master is
// src/content/product-alternatives/grok-bot.ts.

export const copy: GuideCopy = {
  meta: {
    title: "Grok Bot: alternativas open source, gratis y alojadas (2026)",
    description:
      "Alternativas a Grok Bot: Claude Cowork, Copilot Cowork, ChatGPT Work, Lindy, OpenBot, OpenWorker, Hermes Agent y Crewmark, comparadas por licencia y precio.",
  },
  breadcrumb: "Alternativas a Grok Bot",
  parent: { name: "Comparativas", href: "/compare" },
  hero: {
    kicker: "Alternativas · xAI Grok Bot",
    title: "Alternativas a Grok Bot: compañeros de equipo de IA de código abierto, gratis y alojados",
    lead: "Grok Bot es el conjunto de “compañeros de equipo de IA” alojados de xAI: Bots que tienen cada uno su propio ordenador en la nube, inician sesión en tus herramientas y apps, trabajan en Slack y Microsoft Teams, ejecutan rutinas y se pasan trabajo entre sí. Se lanzó en beta el 11 de agosto de 2026 y ya ha salido de la beta. No es de código abierto, y los planes empiezan en Premium, a $30 al mes, con Teams y Enterprise a través de ventas. Aquí tienes ocho alternativas, desde los compañeros de trabajo de IA de Claude, ChatGPT y Microsoft 365 hasta proyectos de código abierto en GitHub, con la licencia, el precio y para quién es cada una.",
    cta: "Empezar",
    secondary: "Ver la comparativa",
    secondaryHref: "#compare",
  },
  sections: [
    {
      kind: "table",
      id: "compare",
      title: "Alternativas a Grok Bot de un vistazo",
      text: [
        "Datos del sitio, la documentación y la página de precios de cada producto, comprobados el 13 de noviembre de 2026. Precios en dólares estadounidenses. Grok Bot: Premium $30, Super $100 y Ultra $200 al mes, con facturación mensual, uso semanal incluido y el uso adicional cobrado según el coste de los tokens. Más en nuestra [guía de Grok Bot](/personal-agent/grok-bot).",
      ],
      headers: ["Alternativa", "Qué es", "Código abierto", "Precio desde"],
      rows: [
        [
          "[Claude Cowork](/compare/claude-cowork-vs-grok-bot)",
          "El agente de Anthropic para trabajo que no es de programación en las apps de Claude: investigación, documentos, hojas de cálculo y presentaciones",
          "No",
          "Planes de pago de Claude, desde Pro a $20 al mes ($17 al mes con facturación anual); no en Free",
        ],
        [
          "[Copilot Cowork](/personal-agent/copilot-cowork)",
          "Un agente de Microsoft 365 Copilot para tareas de varios pasos en Outlook, Teams, Word, Excel, PowerPoint, OneDrive y SharePoint",
          "No",
          "Licencia de Microsoft 365 Copilot más Copilot Credits a $0.01 cada uno, con pago por uso y facturación mensual",
        ],
        [
          "[ChatGPT Work](/personal-agent/chatgpt-work)",
          "Un modo Work de ChatGPT para tareas que terminan en algo que revisar, como presentaciones, hojas de cálculo y análisis",
          "No",
          "Limitado en Free ($0) y Go ($8 al mes) en la app de escritorio; completo desde Plus a $20 al mes",
        ],
        [
          "[Lindy](/personal-agent/lindy)",
          "Un asistente alojado para la bandeja de entrada, el calendario, las reuniones y los seguimientos, compartido con tu equipo en Slack",
          "No",
          "Gratis: $50 en créditos durante 7 días; $29.99 al mes por usuario activo por 3.000 créditos",
        ],
        [
          "[OpenBot](/compare/openbot-vs-grok-bot)",
          "El espacio de trabajo autoalojable de CopilotKit para compañeros de trabajo de IA, donde cada Bot tiene su propio navegador, sus archivos y sus herramientas",
          "Sí (plantilla de aplicación MIT; usa CopilotKit Intelligence, con licencia aparte)",
          "Gratis para proyectos personales; Business hasta $29 por usuario activo al mes",
        ],
        [
          "[OpenWorker](/personal-agent/openworker)",
          "Una app de escritorio, “un compañero de trabajo de IA para tu trabajo diario” (“An AI coworker for your everyday work”), que se ejecuta en tu máquina con aprobaciones y un registro de auditoría",
          "Sí (MIT)",
          "Sin precio publicado; tu propia clave de modelo o un modelo local",
        ],
        [
          "[Hermes Agent](/compare/grok-bot-vs-hermes-agent)",
          "El agente personal de Nous Research, con Bots que tienen sus propios modelos y rutinas y se escriben entre sí",
          "Sí (MIT)",
          "Agente gratis, más tu proveedor de modelos; Nous Portal Plus opcional por $20 al mes",
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
      id: "big-vendors",
      title: "Compañeros de trabajo de IA de Anthropic, Microsoft y OpenAI",
      text: [
        "Alojados, como Grok Bot, e incluidos en planes que muchos equipos ya tienen. Los tres se comparan en [herramientas de compañeros de trabajo de IA](/blog/ai-coworker).",
      ],
      points: [
        "Claude Cowork: el agente de Anthropic para el trabajo del conocimiento. Describes un resultado y se encarga de la investigación, los documentos, las hojas de cálculo y las presentaciones en tus archivos, tus apps conectadas y un navegador. Las tareas se ejecutan en la nube de Anthropic y siguen adelante con tu portátil cerrado, y las tareas programadas se ejecutan cada hora, cada día, cada semana o en días laborables. Elígelo si ya pagas Claude y quieres que el trabajo de varios pasos te llegue en forma de archivos. Consulta [Claude Cowork vs Grok Bot](/compare/claude-cowork-vs-grok-bot) y [alternativas a Claude Cowork](/alternatives/claude-cowork).",
        "Copilot Cowork: un agente de Microsoft 365 Copilot que envía correos, programa reuniones, edita archivos de Word, Excel y PowerPoint y publica en Teams, con un cuadro de aprobación antes de las acciones sensibles. Su selector de modelos incluye modelos GPT, Claude y Grok, según la configuración del inquilino. Elígelo si tu trabajo está en Outlook, Teams, OneDrive y SharePoint. Guía: [Copilot Cowork](/personal-agent/copilot-cowork).",
        "ChatGPT Work: un modo Work de ChatGPT que planifica una tarea, usa tus archivos, plugins, la web, un navegador y código, y te devuelve algo para revisar. Comparte los límites de uso con Codex; Plus ($20 al mes) y Pro (desde $100 al mes) lo tienen en escritorio, web y móvil. Elígelo si una tarea tiene un resultado claro y varias fuentes o pasos. Guía: [ChatGPT Work](/personal-agent/chatgpt-work).",
      ],
    },
    {
      kind: "text",
      id: "assistant",
      title: "Un asistente alojado para el trabajo de oficina",
      points: [
        "Lindy: un asistente compartido en lugar de varios Bots. Se encarga de la bandeja de entrada, el calendario, las reuniones, la investigación y los seguimientos, y lo usas desde Slack, el correo, iMessage, llamadas telefónicas y una extensión de Chrome en Gmail. Todo lo que tiene impacto externo, como enviar un correo, espera tu aprobación, y las rutinas se ejecutan según una programación o un evento. Cada usuario activo ocupa un puesto de pago, incluidas las personas que solo lo @mencionan en Slack. Elígelo si tu equipo quiere un asistente al que pueda @mencionar en Slack para informes, investigación y actualizaciones del CRM. Guía: [Lindy](/personal-agent/lindy); más en [alternativas a Lindy](/alternatives/lindy).",
      ],
    },
    {
      kind: "text",
      id: "open-source",
      title: "Alternativas de código abierto a Grok Bot en GitHub",
      text: ["Los ejecutas tú mismo y aportas tus propias claves de modelo. Las cifras de estrellas son de GitHub, a 13 de noviembre de 2026."],
      points: [
        "OpenBot (`github.com/CopilotKit/OpenBot`, 11.652 estrellas): como en Grok Bot, cada Bot tiene su propio ordenador, con navegador, archivos y herramientas, además de rutinas, aprobaciones y un registro de actividad. Funciona como app de escritorio para Mac y Windows o en Kubernetes para un equipo, y conecta tus propios agentes mediante AG-UI. Elígelo si quieres compañeros de trabajo de IA que puedas autoalojar y personalizar con licencia MIT. Consulta [OpenBot vs Grok Bot](/compare/openbot-vs-grok-bot).",
        "OpenWorker (`github.com/andrewyng/openworker`, 19.050 estrellas): una app de escritorio en beta abierta para macOS y Windows. Las acciones requieren aprobación por defecto, cada llamada a herramientas queda registrada, las tareas programadas cubren cosas como resúmenes matinales e informes semanales, y puedes mencionarlo en Slack y recibir la respuesta en el hilo. Elígelo si quieres un agente en tu propia máquina, también con un modelo local. Guía: [OpenWorker](/personal-agent/openworker).",
        "Hermes Agent (`github.com/NousResearch/hermes-agent`, 262.923 estrellas): el agente personal de Nous Research. Su Bot Mode convierte perfiles en Bots con nombre, cada uno con su propio chat, rol, modelo, memoria, skills y avatar, que se escriben directamente entre sí. Responde en Telegram, Discord, Slack, WhatsApp, Signal y correo electrónico. Elígelo si quieres varios Bots especializados en tu propia máquina o servidor. Consulta [Grok Bot vs Hermes Agent](/compare/grok-bot-vs-hermes-agent).",
      ],
    },
    {
      kind: "steps",
      id: "how-to-choose",
      title: "Cómo elegir una alternativa a Grok Bot",
      steps: [
        {
          title: "Empieza por lo que ya pagas",
          text: "Un plan de pago de Claude incluye Claude Cowork; los planes de ChatGPT incluyen Work (limitado en Free y Go); Copilot Cowork necesita una licencia de Microsoft 365 Copilot más Copilot Credits.",
        },
        {
          title: "Decide dónde se ejecuta",
          text: "Grok Bot, Claude Cowork, Copilot Cowork, ChatGPT Work y Lindy se ejecutan en la nube del proveedor. OpenWorker se ejecuta en tu máquina, OpenBot en tu portátil o en Kubernetes, y Hermes Agent en tu máquina o en un servidor.",
        },
        {
          title: "Mira dónde se comunica tu equipo",
          text: "Grok Bot trabaja en Slack, Microsoft Teams y llamadas. En Slack también puedes usar Lindy, OpenWorker, Hermes Agent y los conectores o plugins de Claude Cowork y ChatGPT Work. Copilot Cowork trabaja en Outlook y Teams.",
        },
        {
          title: "Fíjate en cómo pide permiso antes de actuar",
          text: "Grok Bot te consulta cuando necesita aprobación y puede pasar las acciones sensibles por Auto Review. Lindy espera tu aprobación en todo lo que tiene impacto externo, OpenWorker exige aprobación para las acciones por defecto, Claude Cowork tiene los modos Manual y Auto, y Copilot Cowork muestra un cuadro de aprobación.",
        },
      ],
    },
    {
      kind: "text",
      id: "community",
      title: "Qué dice la gente en Hacker News sobre las alternativas a Grok Bot",
      text: [
        "El 13 de noviembre de 2026 leímos 7 hilos de Hacker News que hablan de Grok Bot, de agosto a noviembre de 2026, una página cada vez. Los hilos de Reddit solo se pudieron encontrar a través de resultados de búsqueda, así que los enumeramos por título y no los resumimos; es una muestra de la conversación pública, no una encuesta.",
      ],
      points: [
        "Las quejas por los límites de uso surgieron en 3 de los hilos que leímos ([agosto de 2026](https://news.ycombinator.com/item?id=49261514), [noviembre de 2026](https://news.ycombinator.com/item?id=50345698), [noviembre de 2026](https://news.ycombinator.com/item?id=50366117)). Los usuarios dicen que los Bots que funcionan todo el tiempo agotan rápido la bolsa de uso semanal, y los hilos de noviembre hablan de los límites más bajos de Grok Bot.",
        "Los agentes de código abierto que ejecutas tú mismo surgieron en 2 de los hilos que leímos ([agosto de 2026](https://news.ycombinator.com/item?id=49261514), [noviembre de 2026](https://news.ycombinator.com/item?id=50366117)). Los usuarios mencionaron [Hermes Agent](/alternatives/hermes-agent) en ambos y OpenClaw en el de agosto; en ese hilo describen los dos como más configurables que un bot alojado, y algunos dicen que OpenClaw necesita arreglos frecuentes. Consulta [Grok Bot vs Hermes Agent](/compare/grok-bot-vs-hermes-agent) y [Hermes Agent vs OpenClaw](/blog/hermes-agent-vs-openclaw).",
        "Montar tu propia configuración surgió en 2 de los hilos que leímos ([agosto de 2026](https://news.ycombinator.com/item?id=49261514), [noviembre de 2026](https://news.ycombinator.com/item?id=50366117)): un agente de programación como Claude Code o Codex más unos cuantos scripts, o modelos a través de OpenRouter. Los usuarios de esos hilos dicen que una configuración así cubre la mayor parte del trabajo por mucho menos dinero. Consulta [Grok Bot vs Claude Code](/compare/grok-bot-vs-claude-code).",
        "Las dudas sobre lo que aporta Grok Bot surgieron en 2 de los hilos que leímos ([agosto de 2026](https://news.ycombinator.com/item?id=49261514), [noviembre de 2026](https://news.ycombinator.com/item?id=50366117)). Algunos usuarios dicen que no se les ocurre ninguna tarea que encargarle, y otros lo ven como una versión alojada de agentes de código abierto como OpenClaw, con un navegador añadido.",
        "En Reddit, aparecieron en los resultados de búsqueda hilos titulados [Alternative to Grok bot](https://www.reddit.com/r/GrokBot/comments/1xp0dbt/alternative_to_grok_bot/) (r/GrokBot), [Grokbot alternative](https://www.reddit.com/r/GrokBot/comments/1wnayp2/grokbot_alternative/) (r/GrokBot) y [Is Grok Bot worth it?](https://www.reddit.com/r/cursor/comments/1vvx2fg/is_grok_bot_worth_it/) (r/cursor). Solo enumeramos los títulos; no hemos leído estos hilos.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Con Crewmark",
      title: "Bots para tus apps. Empleados de IA para tu código base.",
      text: [
        "Crewmark es un gestor de issues para un equipo de empleados de IA. Cada uno es una conversación de Claude Code o Codex en tu propio ordenador, con un rol, KPI y proyectos. Se despierta con un latido (heartbeat) durante su horario laboral, toma issues de un tablero compartido y, cuando necesita una revisión o un permiso, pone la issue en Requiere acción y pregunta ahí. No tiene integración propia con Slack, GitHub ni Linear: los agentes usan las herramientas y las sesiones iniciadas de su propio ordenador.",
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
    title: "¿Quieres compañeros de equipo de IA para tu código base?",
    text: "Crewmark le da a tu Claude Code o Codex un rol, un latido y un tablero compartido.",
    button: "Empezar",
  },
  faq: {
    title: "Preguntas frecuentes sobre alternativas a Grok Bot",
    items: [
      {
        q: "¿Hay alguna alternativa de código abierto a Grok Bot?",
        a: "Sí. La plantilla de aplicación de OpenBot es MIT (usa CopilotKit Intelligence, que tiene una licencia aparte), y OpenWorker y Hermes Agent son MIT. Crewmark es de código abierto con licencia GPL-3.0. Grok Bot no es de código abierto.",
      },
      {
        q: "¿Hay alguna alternativa gratuita a Grok Bot?",
        a: "OpenBot es gratis para proyectos personales; OpenWorker no publica precio y funciona con tu propia clave de modelo o un modelo local; Hermes Agent es gratis, más tu proveedor de modelos. ChatGPT Work tiene acceso limitado en el plan Free, en la app de escritorio; el plan Free de Lindy da $50 en créditos durante 7 días, y Crewmark es gratis para 1 proyecto con hasta 3 empleados de IA. Claude Cowork no está en el plan Free de Claude.",
      },
      {
        q: "¿Qué alternativas a Grok Bot están en GitHub?",
        a: "OpenBot (`github.com/CopilotKit/OpenBot`, 11.652 estrellas), OpenWorker (`github.com/andrewyng/openworker`, 19.050 estrellas), Hermes Agent (`github.com/NousResearch/hermes-agent`, 262.923 estrellas) y Crewmark (`github.com/ummydev/crewmark-ai`). Las cifras de estrellas son del 13 de noviembre de 2026.",
      },
      {
        q: "¿Claude es una alternativa a Grok Bot?",
        a: "Claude Cowork, en las apps de Claude, es el agente de Anthropic para el trabajo del conocimiento: ejecuta tareas en la nube de Anthropic y según una programación, y viene con los planes de pago de Claude desde Pro a $20 al mes. Para código, Claude Code es el agente de programación de Anthropic. Consulta [Claude Cowork vs Grok Bot](/compare/claude-cowork-vs-grok-bot) y [Grok Bot vs Claude Code](/compare/grok-bot-vs-claude-code).",
      },
      {
        q: "¿Cuánto cuesta Grok Bot?",
        a: "Premium cuesta $30 al mes, Super $100 al mes (3,5 veces el uso de Premium) y Ultra $200 al mes (12 veces el uso de Premium), con facturación mensual. El uso semanal de Grok Bot está incluido, y el uso adicional se cobra según el coste de los tokens. Teams y Enterprise van a través de ventas.",
      },
      {
        q: "¿Qué alternativas a Grok Bot funcionan en Slack?",
        a: "Lindy trabaja como un compañero de equipo más en Slack; OpenWorker responde cuando lo mencionas en un hilo de Slack; Hermes Agent se conecta a Slack a través de su gateway; Claude Cowork y ChatGPT Work se conectan a Slack como conector o plugin; OpenBot incluye Slack entre sus frontends, algunos en acceso anticipado.",
      },
    ],
  },
  cta: {
    title: "Dales a tus agentes de programación un trabajo, no solo un chat.",
    text: "Crewmark convierte sesiones de Claude Code y Codex en empleados de IA con roles, KPI, horario laboral y un latido.",
    button: "Empezar",
  },
  checked: "Datos comprobados el 13 de noviembre de 2026 con el sitio, la documentación y la página de precios de cada producto.",
  disclaimer:
    "Crewmark es un producto independiente, sin relación con xAI ni con ninguna otra empresa mencionada en esta página y sin su respaldo. Los nombres de producto son marcas de sus respectivos titulares. Los datos sobre otros productos proceden de sus páginas públicas y pueden haber cambiado desde entonces.",
};
