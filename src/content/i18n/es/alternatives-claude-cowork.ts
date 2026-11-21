import type { GuideCopy } from "@/components/landing/guide-article";

// Spanish translation of /alternatives/claude-cowork; the English master is
// src/content/product-alternatives/claude-cowork.ts.

export const copy: GuideCopy = {
  meta: {
    title: "Claude Cowork: alternativas gratis y open source (2026)",
    description:
      "Alternativas a Claude Cowork: ChatGPT Work, Copilot Cowork, Gemini, Grok Bot, Lindy y las de código abierto OpenWorker, OpenBot y Suparagent, con precios.",
  },
  breadcrumb: "Alternativas a Claude Cowork",
  parent: { name: "Comparativas", href: "/compare" },
  hero: {
    kicker: "Alternativas · Claude Cowork",
    title: "Alternativas a Claude Cowork: compañeros de trabajo de IA de OpenAI, Microsoft, Google y xAI, y opciones de código abierto",
    lead: "Claude Cowork es el agente de Anthropic para trabajo que no es de programación en las apps de Claude: describes un resultado y se encarga de la investigación, los documentos, las hojas de cálculo y las presentaciones en tus archivos, tus apps y un navegador. Solo viene con los planes de pago de Claude, desde $20 al mes, y Anthropic dice que consume los límites del plan más rápido que el chat. Funciona con modelos de Claude, y en Pro, Max y Ultra las tareas nuevas se ejecutan en la nube de Anthropic desde el 6 de octubre de 2026, sin ningún ajuste para volver atrás. Esta página compara las alternativas de OpenAI, Microsoft, Google y xAI, un asistente alojado, apps de código abierto que ejecutas tú mismo y Crewmark, con lo que cuesta cada una.",
    cta: "Empezar",
    secondary: "Compáralas",
    secondaryHref: "#compare",
  },
  sections: [
    {
      kind: "table",
      id: "compare",
      title: "Alternativas a Claude Cowork de un vistazo",
      text: [
        "Datos de las propias páginas, la documentación o el GitHub de cada proveedor, comprobados el 13 de noviembre de 2026. Precios en dólares estadounidenses. No es una clasificación.",
      ],
      headers: ["Alternativa", "Qué es", "Código abierto", "Precio desde"],
      rows: [
        [
          "[Claude Cowork](/personal-agent/claude-cowork) (como referencia)",
          "El agente de Anthropic para trabajo del conocimiento que no es de programación, en las apps de Claude",
          "No",
          "Claude Pro $20/mes, o $17/mes con facturación anual; no en Free",
        ],
        [
          "[ChatGPT Work](/personal-agent/chatgpt-work)",
          "El modo Work de OpenAI en ChatGPT, para tareas que terminan en algo que revisar",
          "No",
          "Free ($0) y Go ($8/mes): limitado, solo en la app de escritorio; Plus $20/mes",
        ],
        [
          "[Copilot Cowork](/personal-agent/copilot-cowork)",
          "El agente de Microsoft para tareas de varios pasos en Microsoft 365",
          "No",
          "Licencia de Microsoft 365 Copilot más Copilot Credits a $0.01 cada uno",
        ],
        [
          "[Tareas de Gemini (antes Spark)](/personal-agent/gemini-spark)",
          "El agente en segundo plano de Google en la app de Gemini, que usa Gmail, Docs y otras apps de Google",
          "No",
          "Google AI Pro $19.99/mes (EE. UU.); sin acceso en el plan gratuito",
        ],
        [
          "[Grok Bot](/alternatives/grok-bot)",
          "Los compañeros de equipo de IA alojados de xAI, cada uno con su propio ordenador en la nube",
          "No",
          "Premium $30/mes",
        ],
        [
          "[Lindy](/alternatives/lindy)",
          "Un asistente de IA alojado para la bandeja de entrada, el calendario, las reuniones y Slack, que se factura en créditos",
          "No",
          "Gratis: $50 en créditos durante 7 días; después, desde $29.99/mes por usuario activo",
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
          "[Suparagent](/personal-agent/suparagent)",
          "Un espacio de trabajo para compañeros de trabajo de IA sobre Claude Code, Codex, Gemini CLI, Cursor y otros motores",
          "Sí, Apache-2.0",
          "Escritorio y autoalojado: no indica ninguna tarifa; pagas a tu proveedor de modelos",
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
      title: "Alternativas alojadas de OpenAI, Microsoft, Google y xAI",
      text: [
        "Estas cuatro funcionan de forma muy parecida a Claude Cowork: encargas una tarea en la app del proveedor y se ejecuta en su nube. Cara a cara: [Claude Cowork vs ChatGPT Work](/compare/claude-cowork-vs-chatgpt-work), [Copilot Cowork vs Claude Cowork](/compare/copilot-cowork-vs-claude-cowork), [Claude Cowork vs Grok Bot](/compare/claude-cowork-vs-grok-bot).",
      ],
      points: [
        "[ChatGPT Work](/personal-agent/chatgpt-work) (OpenAI): un modo Work de ChatGPT que planifica una tarea, usa tus archivos, plugins, la web, un navegador y código, y te devuelve presentaciones, hojas de cálculo, documentos o análisis. Comparte los límites de uso con Codex. Free y Go tienen acceso limitado a Work en la app de escritorio; Plus ($20/mes) y Pro (desde $100/mes) lo tienen en escritorio, web y móvil. Elígelo si quieres la alternativa de OpenAI a Claude Cowork, o una forma gratuita de probar un compañero de trabajo de IA.",
        "[Copilot Cowork](/personal-agent/copilot-cowork) (Microsoft): lleva a cabo tareas de varios pasos en Outlook, Teams, Word, Excel, PowerPoint, OneDrive y SharePoint, y muestra un cuadro de aprobación antes de las acciones sensibles. Necesita una licencia de Microsoft 365 Copilot, y el uso se factura en Copilot Credits a $0.01 cada uno, con pago por uso. No puede llegar a los archivos de tu dispositivo local. Elígelo si tu trabajo está en Microsoft 365 y tus administradores quieren límites de créditos por usuario o por grupo.",
        "[Tareas de Gemini](/personal-agent/gemini-spark) (Google, llamado Spark durante su beta): un agente en la nube dentro de la app de Gemini que usa Gmail, Docs, Drive y otras apps de Google y funciona según una programación o cuando pasa algo. El artículo de ayuda de Google dice que necesita Google AI Pro ($19.99/mes en EE. UU.) o Ultra (desde $99.99/mes). Solo funciona con cuentas personales de Google y no está disponible en el EEE, Suiza, el Reino Unido ni Nigeria. Elígelo si tu trabajo está en Gmail y en las demás apps de Google.",
        "[Grok Bot](/alternatives/grok-bot) (xAI): Bots alojados que tienen cada uno su propio ordenador en la nube, inician sesión en tus herramientas, trabajan en Slack y Microsoft Teams, ejecutan rutinas y se escriben entre sí. Está incluido en Premium ($30/mes), Super ($100/mes) y Ultra ($200/mes), con facturación mensual y el uso adicional cobrado según el coste de los tokens. Elígelo si quieres varios Bots con trabajos separados dentro de Slack, Teams y reuniones.",
      ],
    },
    {
      kind: "text",
      id: "assistant",
      title: "Un asistente alojado que se factura en créditos: Lindy",
      points: [
        "[Lindy](/alternatives/lindy): un único asistente alojado que se encarga de la bandeja de entrada, el calendario, las reuniones, la investigación, los informes y los seguimientos, y que se usa a través de Slack, el correo, iMessage, SMS, llamadas telefónicas y una extensión de Chrome en Gmail. Las rutinas se ejecutan según una programación o un evento, y todo lo que tiene impacto externo espera tu aprobación. Empieza con $50 en créditos gratuitos que duran 7 días; después se factura a cada usuario activo, desde $29.99/mes por 3.000 créditos. Elígelo si quieres un asistente ejecutivo al que puedas escribir por mensaje o @mencionar en Slack. Más en nuestra [guía de Lindy](/personal-agent/lindy).",
      ],
    },
    {
      kind: "text",
      id: "open-source",
      title: "Alternativas de código abierto a Claude Cowork",
      text: [
        "Estas tres se ejecutan en tu propio ordenador o servidor. Para uso personal, ninguna indica una tarifa: pagas a tu proveedor de modelos, o ejecutas un modelo local donde se admite.",
      ],
      points: [
        "[OpenWorker](/personal-agent/openworker): una app de escritorio de compañero de trabajo de IA con licencia MIT, en beta abierta. El bucle del agente, las conversaciones, los tokens de los conectores y las claves de modelo se quedan en tu máquina. Aportas una clave de OpenAI, Anthropic, Google Gemini u OpenRouter, o ejecutas un modelo local con Ollama, LM Studio, llama.cpp o vLLM. Las acciones requieren aprobación por defecto, y las ejecuciones programadas nunca aprueban sus propias acciones: sus solicitudes esperan en una bandeja de entrada. Funciona en macOS 12+ (Apple silicon) y Windows 10/11 x64; la versión para Windows aún no está firmada. Elígelo si quieres una alternativa local y de código abierto a Claude Cowork en Windows o Mac.",
        "[OpenBot](/personal-agent/openbot) (CopilotKit): un espacio de trabajo autoalojable donde cada Bot tiene su propio navegador, sus archivos y sus herramientas, con aprobaciones antes de actuar, rutinas y un registro de actividad. Funciona como app de escritorio para Mac y Windows (con un backend en Docker) o en Kubernetes para un equipo. La plantilla de aplicación es MIT; usa CopilotKit Intelligence, que tiene una licencia aparte y necesita una licencia para producción en Kubernetes. Gratis para proyectos personales; OpenBot for Business cuesta hasta $29 por usuario activo al mes. Elígelo si quieres autoalojar compañeros de trabajo de IA y aportar tus propios modelos o agentes. Consulta [OpenBot vs Grok Bot](/compare/openbot-vs-grok-bot).",
        "[Suparagent](/personal-agent/suparagent): un espacio de trabajo Apache-2.0 para compañeros de trabajo de IA con nombre, cada uno con un rol, un espacio de trabajo, memoria, rutinas y ajustes de aprobación, que funciona sobre un motor que ya usas, como Claude Code, Codex, Gemini CLI o Cursor. Tiene un tablero de tareas y un calendario, y un agente líder puede pasar trabajo a especialistas. Funciona como app de escritorio o como servidor Linux autoalojado; el servicio alojado de suparagent.ai es un producto aparte. El proyecto se describe como temprano y en evolución. Elígelo si quieres compañeros de trabajo con roles sobre el agente que ya pagas.",
      ],
    },
    {
      kind: "steps",
      id: "how-to-choose",
      title: "Cómo elegir una alternativa a Claude Cowork",
      steps: [
        {
          title: "Empieza por dónde está tu trabajo",
          text: "Microsoft 365 apunta a Copilot Cowork; Gmail y Google Docs, a las tareas de Gemini; ChatGPT, a ChatGPT Work; y Slack o iMessage, a Lindy o Grok Bot.",
        },
        {
          title: "Decide cuánto vas a pagar",
          text: "Opciones gratuitas: ChatGPT Work en ChatGPT Free (limitado, solo en la app de escritorio), los créditos de 7 días de Lindy, OpenWorker, OpenBot y Suparagent con tu propia clave de modelo, y el plan Free de Crewmark. Copilot Cowork cobra por Copilot Credit además de una licencia; las tareas de Gemini, Grok Bot y los planes de pago de ChatGPT son suscripciones mensuales.",
        },
        {
          title: "Elige la nube del proveedor o tu propio ordenador",
          text: "ChatGPT Work, Copilot Cowork, las tareas de Gemini, Grok Bot y Lindy se ejecutan en la nube del proveedor. OpenWorker guarda las conversaciones y las claves en tu máquina; OpenBot y Suparagent también pueden ejecutarse en tu propio servidor.",
        },
        {
          title: "Comprueba la plataforma",
          text: "En Windows: Copilot Cowork y ChatGPT Work tienen apps de escritorio para Windows, OpenWorker ofrece una versión para Windows 10/11 y la app de escritorio de OpenBot funciona en Windows. Las tareas de Gemini están en la web, una app para Mac y el móvil; Grok Bot indica apps para macOS (Apple silicon) e iOS.",
        },
      ],
    },
    {
      kind: "text",
      id: "community",
      title: "Qué dice la gente en Hacker News sobre las alternativas a Claude Cowork",
      text: [
        "El 13 de noviembre de 2026 leímos 5 hilos de Hacker News que hablan de Claude Cowork, de enero a noviembre de 2026, una página cada vez. Los hilos de Reddit solo se pudieron encontrar a través de resultados de búsqueda, así que los enumeramos por título y no los resumimos; es una muestra de la conversación pública, no una encuesta.",
      ],
      points: [
        "Preferir otro modo al modo agente de Cowork surgió en 2 de los hilos que leímos ([enero de 2026](https://news.ycombinator.com/item?id=46593022), [septiembre de 2026](https://news.ycombinator.com/item?id=49729412)). En el hilo de enero, los usuarios dicen que Claude Code hace el mismo trabajo con más control para quienes se manejan bien en una terminal; consulta [Claude Cowork vs Claude Code](/compare/claude-cowork-vs-claude-code). En el hilo de septiembre, los usuarios dicen que el chat normal les da mejores respuestas que un modo agente para preguntas de estrategia e investigación.",
        "En Reddit, aparecieron en los resultados de búsqueda hilos titulados [Any good alternatives to Claude Cowork?](https://www.reddit.com/r/claude/comments/1qj5kxg/any_good_alternatives_to_claude_cowork/) (r/claude), [Cowork alternative for Mistral](https://www.reddit.com/r/MistralAI/comments/1rg1rfe/cowork_alternative_for_mistral/) (r/MistralAI), [Is there any real alternative to Claude Cowork?](https://www.reddit.com/r/ChatGPTCoding/comments/1s582h8/is_there_any_real_alternative_to_claude_cowork/) (r/ChatGPTCoding) y [Any alternative to run Claude Cowork using LocalLLM](https://www.reddit.com/r/LocalLLM/comments/1s4erhl/any_alternative_to_run_claude_cowork_using/) (r/LocalLLM). Solo enumeramos los títulos; no hemos leído estos hilos.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Con Crewmark",
      title: "Crewmark: un equipo de empleados de IA sobre el Claude Code o Codex que ya usas",
      text: [
        "Crewmark es un tipo de herramienta distinto de Claude Cowork. Es un gestor de issues para un equipo de empleados de IA: cada uno es una conversación de Claude Code o Codex en tu propio ordenador con un rol, objetivos y un horario laboral. Se despierta con un latido (heartbeat), toma issues de un tablero compartido y mantiene su estado al día. Es de código abierto (GPL-3.0) y se puede autoalojar.",
        "El plan Free cubre 1 proyecto y hasta 3 empleados de IA. Pro ($5/mes) y Team ($10/mes) llegarán pronto; la facturación aún no está implementada, así que hasta entonces todas las cuentas pueden usar Crewmark gratis. El uso del agente se paga a tu proveedor de agentes, y tu ordenador tiene que estar encendido para los latidos. Detalles en [precios de Crewmark](/pricing).",
      ],
      steps: [
        {
          title: "Elige un rol",
          text: "Dale a cada empleado un rol, objetivos y proyectos; entre las opciones rápidas están Ingeniero de software, Especialista SEO y Analista de datos. Consulta [roles de empleados de IA](/ai-employees).",
        },
        {
          title: "Pon el trabajo en un tablero",
          text: "Asigna issues, define prioridades y haz que las habituales se repitan cada día, cada semana o cada mes. Cuando un agente necesita una revisión, un permiso o información, pone la issue en Requiere acción y te espera.",
        },
        {
          title: "Define el horario laboral",
          text: "El latido despierta a cada empleado con una frecuencia de entre 15 minutos y 24 horas durante su horario laboral. Los trabajos, con su configuración, están en [casos de uso de Claude Code](/use-cases/claude-code) y [casos de uso de Codex](/use-cases/codex).",
        },
      ],
    },
  ],
  mid: {
    title: "¿Ya pagas Claude o ChatGPT?",
    text: "Crewmark convierte tu Claude Code o Codex en empleados de IA con roles, un latido y un tablero compartido. Gratis para hasta 3 empleados.",
    button: "Empezar",
  },
  faq: {
    title: "Preguntas frecuentes sobre alternativas a Claude Cowork",
    items: [
      {
        q: "¿Hay alguna alternativa gratuita a Claude Cowork?",
        a: "Sí. ChatGPT Free ($0) incluye acceso limitado a ChatGPT Work en la app de escritorio. Lindy empieza con $50 en créditos que duran 7 días. OpenWorker no publica precio y funciona con tu propia clave de modelo o un modelo local, OpenBot es gratis para proyectos personales, y las versiones de escritorio y autoalojada de Suparagent no indican ninguna tarifa. El plan Free de Crewmark cubre 1 proyecto y hasta 3 empleados de IA. Claude Cowork no está en el plan Free de Claude.",
      },
      {
        q: "¿Hay alguna alternativa de código abierto a Claude Cowork?",
        a: "OpenWorker (MIT), OpenBot (una plantilla de aplicación MIT sobre CopilotKit Intelligence, con licencia aparte) y Suparagent (Apache-2.0) son de código abierto, igual que Crewmark (GPL-3.0). Claude Cowork no lo es, aunque el repositorio knowledge-work-plugins de Anthropic, con plugins para Cowork, es de código abierto con licencia Apache-2.0.",
      },
      {
        q: "¿Cuál es la alternativa de OpenAI a Claude Cowork?",
        a: "ChatGPT Work: un modo Work de ChatGPT para tareas que terminan en algo que revisar, como presentaciones, hojas de cálculo y análisis. Es limitado en Free y Go, en la app de escritorio, y completo desde Plus a $20/mes, y comparte los límites de uso con Codex. Consulta [Claude Cowork vs ChatGPT Work](/compare/claude-cowork-vs-chatgpt-work).",
      },
      {
        q: "¿Qué alternativas a Claude Cowork funcionan en Windows?",
        a: "Copilot Cowork (la app de escritorio de Microsoft Copilot para Windows y macOS), ChatGPT Work (la app de escritorio de ChatGPT para macOS, Windows y Linux), OpenWorker (Windows 10/11 x64, aún sin firmar) y OpenBot (una app de escritorio para Mac y Windows). Claude Cowork también funciona en Windows a través de Claude Desktop.",
      },
      {
        q: "¿Hay alguna alternativa a Claude Cowork que se ejecute en mi propio ordenador?",
        a: "OpenWorker ejecuta el bucle del agente en tu máquina y guarda allí las conversaciones, los tokens de los conectores y las claves de modelo; OpenBot y Suparagent funcionan como apps de escritorio o en tu propio servidor. Claude Cowork solo llega a los archivos locales a través de Claude Desktop, y en Pro, Max y Ultra sus tareas nuevas se ejecutan en la nube desde el 6 de octubre de 2026. Para tareas que solo se ejecutan en tu ordenador, Anthropic remite a Claude Code en la app de escritorio ([Claude Cowork vs Claude Code](/compare/claude-cowork-vs-claude-code)).",
      },
      {
        q: "¿Por qué la gente busca alternativas a Claude Cowork?",
        a: "Por los límites que indica Anthropic: Cowork necesita un plan de pago de Claude (Pro desde $20 al mes), consume los límites del plan más rápido que el chat, las sesiones no se pueden compartir con otras personas y, en Pro, Max y Ultra, las tareas nuevas se ejecutan en la nube sin ningún ajuste para volver atrás. Si tu trabajo está en Microsoft 365 o Gmail, Copilot Cowork y las tareas de Gemini se conectan directamente a esas apps.",
      },
    ],
  },
  cta: {
    title: "Dales a tus agentes un trabajo, no solo una tarea.",
    text: "Crewmark convierte sesiones de Claude Code y Codex en empleados de IA con roles, objetivos, horario laboral y un latido.",
    button: "Empezar",
  },
  checked: "Comprobado con las propias páginas, la documentación, los precios y el GitHub de cada producto el 13 de noviembre de 2026.",
  disclaimer:
    "Crewmark es un producto independiente, sin relación con Anthropic, OpenAI, Microsoft, Google, xAI, Lindy, CopilotKit ni los creadores de OpenWorker y Suparagent, y sin su respaldo. Los nombres de producto son marcas de sus respectivos titulares. Los datos sobre otros productos proceden de sus páginas públicas y pueden haber cambiado desde entonces.",
};
