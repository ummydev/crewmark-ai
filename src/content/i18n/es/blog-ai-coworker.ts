import type { GuideCopy } from "@/components/landing/guide-article";

// Spanish translation of /blog/ai-coworker; the English master is src/content/blog/ai-coworker.ts (the `en` value of aiCoworker).

export const copy: GuideCopy = {
  meta: {
    title: "Compañeros de trabajo de IA: Claude Cowork, Copilot, ChatGPT Work",
    description:
      "Comparamos Claude Cowork, Copilot Cowork, ChatGPT Work, Gemini, Meta Muse, Grok Bot y opciones de código abierto como OpenWorker, de Andrew Ng.",
  },
  breadcrumb: "Compañeros de trabajo de IA",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-13" },
  hero: {
    kicker: "Blog · Compañeros de trabajo de IA",
    title: "Compañeros de trabajo de IA comparados: qué hace cada uno, cuánto cuesta y qué te pregunta antes de actuar",
    lead: "Un compañero de trabajo de IA es un agente al que le encargas una tarea entera. Trabaja en tus archivos, apps y navegador, sigue adelante en segundo plano y te consulta antes de hacer algo arriesgado. En 2026, Anthropic, Microsoft, OpenAI, Google, Meta y xAI tienen cada uno el suyo, y hay otros de código abierto en GitHub, como OpenWorker, de Andrew Ng. Aquí tienes qué hace cada uno, quién puede usarlo, cuánto cuesta y dónde se ejecuta, según las páginas de cada proveedor.",
    cta: "Empezar",
    secondary: "Ver la tabla",
    secondaryHref: "#at-a-glance",
  },
  sections: [
    {
      kind: "text",
      id: "what-is",
      title: "¿Qué es un compañero de trabajo de IA?",
      text: [
        "Un chatbot responde. Un compañero de trabajo de IA asume una tarea con un resultado claro, como un informe, una presentación, una hoja de cálculo completada o una bandeja de entrada vacía, y hace los pasos por sí mismo. Los productos son muy distintos entre sí, pero comparten cuatro cosas:",
      ],
      points: [
        "Trabaja donde está tu trabajo: archivos, correo, calendario, apps conectadas y un navegador.",
        "Sigue adelante sin ti: en un ordenador en la nube, o en tu propia máquina mientras una app sigue abierta.",
        "Puede repetir: la mayoría ejecuta tareas según una programación o cuando pasa algo, como la llegada de un correo nuevo.",
        "Pregunta primero: enviar, publicar, comprar y borrar esperan a tu aprobación.",
      ],
    },
    {
      kind: "table",
      id: "at-a-glance",
      title: "Compañeros de trabajo de IA de un vistazo",
      text: [
        "Datos del sitio web, la página de precios, la documentación o el GitHub de cada proveedor, comprobados el 13 de noviembre de 2026. Precios en dólares estadounidenses. No es una clasificación.",
      ],
      headers: ["Compañero de trabajo de IA", "Creado por", "Quién puede usarlo", "Precio desde", "Dónde se ejecuta"],
      rows: [
        ["Claude Cowork", "Anthropic", "Planes de pago de Claude, no Free", "Claude Pro, $20/mes", "La nube de Anthropic; archivos locales y navegador a través de la app de escritorio"],
        ["Copilot Cowork", "Microsoft", "Cuentas profesionales o educativas con licencia de Microsoft 365 Copilot; cuentas personales en vista previa", "Copilot Credits a $0.01 cada uno, además de la licencia", "La nube de Microsoft, con tus archivos de OneDrive y SharePoint"],
        ["ChatGPT Work", "OpenAI", "Planes de ChatGPT; limitado en Free y Go, en la app de escritorio", "Acceso completo desde ChatGPT Plus, $20/mes", "La nube de OpenAI, o tu ordenador a través de la app de escritorio"],
        ["Tareas de Gemini (antes Spark)", "Google", "Google AI Pro o Ultra, adultos con cuenta personal; no disponible en el EEE, Suiza, el Reino Unido ni Nigeria", "Google AI Pro, $19.99/mes (EE. UU.)", "La nube de Google"],
        ["Meta Muse", "Meta", "EE. UU. y Canadá, mayores de 18 años; Singapur desde el 27 de octubre", "Gratis para la mayoría de los usos; hay suscripciones", "Un ordenador en la nube por usuario"],
        ["Grok Bot", "xAI", "Planes Premium, Super, Ultra, Teams y Enterprise", "Premium, $30/mes", "Un ordenador en la nube por Bot; Slack, Teams y llamadas"],
        ["Lindy", "Lindy", "Cualquier persona; prueba gratuita", "$29.99/mes por usuario activo", "La nube de Lindy; Slack, correo, iMessage, teléfono"],
        ["OpenWorker (código abierto)", "Andrew Ng", "Cualquier persona; app de escritorio en beta abierta", "Gratis; tu propia clave de modelo o un modelo local", "Tu ordenador (macOS, Windows)"],
        ["OpenBot (código abierto)", "CopilotKit", "Cualquier persona", "Gratis para proyectos personales; Business hasta $29/usuario/mes", "Tu portátil o tu clúster de Kubernetes"],
        ["Suparagent (código abierto)", "Anil-matcha en GitHub", "Cualquier persona", "Gratis si lo alojas tú; versión alojada desde $15/mes", "App de escritorio, tu servidor o alojado"],
        ["Crewmark", "Crewmark", "Cualquier persona", "Gratis: 1 proyecto, hasta 3 empleados de IA", "Tu ordenador, dentro de tu Claude Code o Codex"],
      ],
    },
    {
      kind: "text",
      id: "guides",
      title: "Guías de cada compañero de trabajo de IA",
      points: [
        "[Claude Cowork](/personal-agent/claude-cowork): planes, configuración, modos de aprobación y Cowork vs Claude Code.",
        "[Copilot Cowork](/personal-agent/copilot-cowork): licencias, Copilot Credits y configuración en Microsoft 365.",
        "[ChatGPT Work](/personal-agent/chatgpt-work): qué hace el modo Work, qué planes lo incluyen y qué relación tiene con Codex.",
        "[Cursor Projects](/personal-agent/cursor-projects): el agente coordinador de Cursor para trabajos de programación de mayor envergadura.",
        "[Lindy](/personal-agent/lindy): precios en créditos y cómo configurarlo.",
        "[OpenWorker](/personal-agent/openworker), [OpenBot](/personal-agent/openbot) y [Suparagent](/personal-agent/suparagent): los de código abierto, con su configuración desde GitHub.",
        "Cara a cara: [todas las comparativas](/compare), como [Claude Cowork vs Claude Code](/compare/claude-cowork-vs-claude-code) y [Copilot Cowork vs Copilot Studio](/compare/copilot-cowork-vs-copilot-studio).",
      ],
    },
    {
      kind: "text",
      id: "big-labs",
      title: "Los compañeros de trabajo de IA de los grandes laboratorios",
      points: [
        "Claude Cowork (Anthropic): trabajo que no es de programación en las apps de Claude, como investigación, documentos, hojas de cálculo, presentaciones y trabajo con archivos. Las tareas se ejecutan en la nube y siguen adelante con el portátil cerrado; puedes programarlas cada hora, cada día o cada semana con `/schedule`. Pregunta antes de actuar en el modo Manual, o hace una revisión de seguridad de cada acción en el modo Auto. Solo en planes de pago, desde Pro a $20 al mes.",
        "Copilot Cowork (Microsoft): tareas de varios pasos en Microsoft 365, como enviar correos, programar reuniones, editar archivos de Word, Excel y PowerPoint y publicar en Teams. Muestra un cuadro de aprobación antes de las acciones sensibles, ejecuta tareas programadas y activadas por eventos, y te deja elegir modelos GPT, Claude o Grok según la configuración del inquilino. Necesita una licencia de Microsoft 365 Copilot más el uso en Copilot Credits.",
        "ChatGPT Work (OpenAI): un modo Work en ChatGPT para tareas que terminan en algo que revisar, como presentaciones, hojas de cálculo y análisis. Comparte capacidades básicas y uso con Codex. Free y Go tienen acceso limitado en la app de escritorio; Plus ($20 al mes) y los planes superiores lo tienen en escritorio, web y móvil, con tareas programadas y disparadores por eventos.",
        "Tareas de Gemini (Google, antes Spark): un agente en la nube dentro de la app de Gemini que usa Gmail, Docs y otras apps de Google, funciona según una programación o cuando pasa algo, y siempre pregunta antes de enviar, borrar, comprar o mandar formularios. La página de ayuda de Google indica Google AI Pro o Ultra.",
        "Meta Muse: un agente personal basado en Muse Spark, el modelo de Meta, con su propio ordenador en la nube para cada usuario. Funciona según una programación y en respuesta a eventos, y no publica, envía ni gasta nada sin tu aprobación. Meta dice que es gratis para la mayor parte de lo que la gente necesita, con suscripciones para más.",
        "Grok Bot (xAI): Bots con su propio ordenador en la nube que inician sesión en tus herramientas, trabajan en Slack, Microsoft Teams y videollamadas, ejecutan rutinas y se pasan trabajo entre ellos. Incluido en los planes Premium ($30 al mes), Super y Ultra de xAI. Consulta [Grok Bot vs Claude Code](/compare/grok-bot-vs-claude-code).",
      ],
    },
    {
      kind: "text",
      id: "github",
      title: "Compañeros de trabajo de IA de código abierto en GitHub",
      text: [
        "Si prefieres ejecutar tu compañero de trabajo de IA por tu cuenta, con tus propias claves de modelo o un modelo local, estos son de código abierto:",
      ],
      points: [
        "[OpenWorker](https://github.com/andrewyng/openworker) (MIT, unas 19.000 estrellas): el \"compañero de trabajo de IA para tu trabajo diario\" (\"AI coworker for your everyday work\") de Andrew Ng, una app de escritorio para macOS y Windows en beta abierta. Se ejecuta en tu máquina con modelos de OpenAI, Anthropic, Gemini o locales, pide aprobación antes de actuar y puede programar resúmenes e informes.",
        "[OpenBot](https://github.com/CopilotKit/OpenBot) (MIT, unas 11.600 estrellas): el espacio de trabajo autoalojable de CopilotKit para compañeros de trabajo de IA, cada uno con su propio navegador, sus archivos y sus herramientas. Usa CopilotKit Intelligence, con licencia aparte. Consulta [OpenBot vs Grok Bot](/compare/openbot-vs-grok-bot).",
        "[Suparagent](https://github.com/Anil-matcha/suparagent) (Apache-2.0, unas 7.000 estrellas): \"un espacio de trabajo para compañeros de trabajo de IA\" (\"a workspace for AI coworkers\") que ejecuta agentes con nombre, con rutinas y aprobaciones, sobre motores que ya usas, como Claude Code, Codex o Gemini CLI.",
        "[ai-employees](https://github.com/markfulton/ai-employees) (MIT): ocho roles de negocio como carpetas de rutinas programadas que se ejecutan en el agente que ya usas.",
      ],
    },
    {
      kind: "text",
      id: "coding",
      title: "Un compañero de trabajo de IA para el código: Cursor Projects",
      text: ["La mayoría de los compañeros de trabajo de arriba se encargan de documentos, correo e investigación. Para el trabajo de software, Cursor añadió Projects:"],
      points: [
        "Un agente coordinador planifica un trabajo de mayor envergadura, como una funcionalidad, una migración o una app completa, lo delega a agentes que se ejecutan en paralelo en los Cloud Agents de Cursor y te trae el trabajo terminado para que lo revises.",
        "Cada Project se ejecuta en su propio ordenador en la nube, así que cerrar el portátil no lo detiene, y guarda notas compartidas, preferencias y un tablero de tareas que leen todos los agentes.",
        "Puede vigilar un canal de Slack, ejecutarse según una programación o seguir tus pull requests. En los Multiplayer Projects, cada miembro del equipo tiene un coordinador, y los coordinadores se escriben entre sí.",
        "Está en los planes de Cursor con Cloud Agents, desde Premium a $30 al mes, no en Free ni Plus. Consulta la [guía de Cursor Projects](/personal-agent/cursor-projects) y [Cursor Projects vs Grok Bot](/compare/cursor-projects-vs-grok-bot).",
      ],
    },
    {
      kind: "text",
      id: "free",
      title: "¿Hay algún compañero de trabajo de IA gratis?",
      points: [
        "Meta Muse: gratis para la mayor parte de lo que la gente necesita, según Meta.",
        "ChatGPT Work: acceso limitado en ChatGPT Free, en la app de escritorio.",
        "Código abierto: OpenWorker, OpenBot (proyectos personales) y Suparagent no cuestan nada; pagas a tu proveedor de modelos o usas un modelo local.",
        "Lindy: una prueba gratuita con $50 en créditos durante 7 días.",
        "Crewmark: gratis para 1 proyecto y hasta 3 empleados de IA, con la suscripción de Claude Code o Codex que ya tienes.",
        "Claude Cowork, las tareas de Gemini, Copilot Cowork y Grok Bot necesitan un plan de pago o una licencia.",
      ],
    },
    {
      kind: "steps",
      id: "how-to-choose",
      title: "Cómo elegir un compañero de trabajo de IA",
      steps: [
        { title: "Empieza por dónde está tu trabajo", text: "Microsoft 365 en el trabajo apunta a Copilot Cowork; Gmail y Google Docs, a Gemini; si ya pagas Claude o ChatGPT, Cowork o Work viene con el plan." },
        { title: "Decide dónde debe ejecutarse", text: "Los compañeros de trabajo en la nube siguen trabajando con el portátil cerrado. Los de código abierto mantienen tus datos, claves y archivos en tu máquina." },
        { title: "Comprueba cómo pide permiso", text: "Busca aprobaciones antes de enviar, publicar y gastar, y un registro de lo que ha hecho." },
        { title: "Prueba una tarea recurrente durante dos semanas", text: "Un informe semanal o una revisión diaria de la bandeja de entrada muestran rápido si te ahorra tiempo." },
      ],
    },
    {
      kind: "text",
      id: "coworker-vs-employee",
      title: "Compañero de trabajo de IA vs empleado de IA",
      text: [
        "Los términos se solapan. En la práctica, un compañero de trabajo de IA es algo a lo que le pasas tareas a medida que surgen, mientras que un empleado de IA tiene un rol fijo: una descripción del puesto, objetivos, un horario laboral y una cola de trabajo que asume por su cuenta. Las plataformas creadas en torno a esa segunda idea se comparan en [las mejores plataformas de empleados de IA](/blog/best-ai-employee-platforms).",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Con Crewmark",
      title: "Dale un trabajo fijo a tu agente de programación",
      text: [
        "Crewmark convierte tus propias sesiones de Claude Code o Codex en empleados de IA con un rol, objetivos en cifras, un horario laboral y un heartbeat. Cada uno toma la siguiente tarea de un tablero compartido y te pregunta en la propia tarea cuando necesita una decisión.",
      ],
      steps: [
        { title: "Elige un rol", text: "Entre los [roles de empleados de IA](/ai-employees), como un [especialista SEO de IA](/ai-employees/seo-specialist)." },
        { title: "Pon el trabajo en un tablero", text: "Asigna tareas y haz que las habituales se repitan; el heartbeat despierta al empleado para que tome la siguiente." },
        { title: "Mira lo que puede hacer", text: "Los trabajos, con la configuración para cada agente, están en [casos de uso de Claude Code](/use-cases/claude-code) y [casos de uso de Codex](/use-cases/codex)." },
      ],
    },
  ],
  howTo: { section: "how-to-choose", name: "Elegir un compañero de trabajo de IA" },
  mid: {
    title: "¿Quieres un compañero de trabajo de IA con un trabajo fijo?",
    text: "Crewmark le da a tu agente de Claude Code o Codex un rol, un heartbeat y un tablero compartido.",
    button: "Empezar",
  },
  faq: {
    title: "Preguntas frecuentes",
    items: [
      {
        q: "¿Qué es un compañero de trabajo de IA?",
        a: "Un agente al que le encargas una tarea entera. Trabaja en tus archivos, apps y navegador, sigue adelante en segundo plano, puede repetir tareas según una programación y pregunta antes de enviar, publicar, comprar o borrar.",
      },
      {
        q: "¿Cuál es el compañero de trabajo de IA de Andrew Ng?",
        a: "OpenWorker: una app de escritorio de código abierto para macOS y Windows, con licencia MIT, en github.com/andrewyng/openworker. Su README lo describe como \"un compañero de trabajo de IA para tu trabajo diario\" (\"an AI coworker for your everyday work\"). Se ejecuta en tu máquina con tu propia clave de modelo o un modelo local.",
      },
      {
        q: "¿Claude Cowork es gratis?",
        a: "No. Claude Cowork solo está en los planes de pago de Claude, desde Pro a $20 al mes (o $17 al mes con facturación anual). Claude Free no lo incluye.",
      },
      {
        q: "¿Cuánto cuesta Copilot Cowork?",
        a: "Necesita una licencia de Microsoft 365 Copilot, y su uso se factura en Copilot Credits: $0.01 por crédito con pago por uso, o un plan prepago de un año con descuentos del 5% al 20%.",
      },
      {
        q: "Claude Cowork vs Claude Code: ¿en qué se diferencian?",
        a: "Claude Cowork es para trabajo que no es de programación en las apps de Claude: investigación, documentos, hojas de cálculo, presentaciones y archivos. Claude Code es el agente de programación de Anthropic para tu repositorio. Anthropic dice que Cowork usa la misma arquitectura que Claude Code.",
      },
      {
        q: "¿Hay compañeros de trabajo de IA de código abierto en GitHub?",
        a: "Sí: OpenWorker (Andrew Ng, MIT), OpenBot (CopilotKit, MIT), Suparagent (Apache-2.0) y ai-employees (MIT), entre otros.",
      },
    ],
  },
  cta: {
    title: "Dale a tu IA un trabajo, no solo una tarea.",
    text: "Crewmark convierte las sesiones de Claude Code y Codex en empleados de IA con roles, objetivos, horario laboral y un heartbeat.",
    button: "Empezar",
  },
  checked: "Datos comprobados con el sitio web, la página de precios, la documentación o el GitHub de cada proveedor el 13 de noviembre de 2026.",
  disclaimer:
    "Crewmark es un producto independiente, sin afiliación ni respaldo de ninguna de las empresas mencionadas en esta página. Los nombres de los productos son marcas de sus titulares.",
};
