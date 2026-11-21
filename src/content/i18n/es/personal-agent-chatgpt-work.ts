import type { GuideCopy } from "@/components/landing/guide-article";

// Spanish translation of /personal-agent/chatgpt-work; the English master is
// src/content/personal-agents/chatgpt-work.ts.

const docs = "https://learn.chatgpt.com/docs/get-started-with-work";

export const copy: GuideCopy = {
  meta: {
    title: "ChatGPT Work: qué hace el modo, precio, descarga y vs Codex",
    description:
      "ChatGPT Work explicado: en qué se diferencia el modo Work del Chat, qué planes lo incluyen y su precio, la app de escritorio, y Work vs Codex y Claude Cowork.",
  },
  breadcrumb: "ChatGPT Work",
  parent: { name: "Agentes personales", href: "/personal-agent" },
  hero: {
    kicker: "Agentes personales · OpenAI",
    title: "ChatGPT Work: qué hace el modo Work de OpenAI y cómo usarlo",
    lead: "ChatGPT Work es un modo de ChatGPT para encargar tareas con un resultado claro. Cambias de Chat a Work, describes lo que quieres recibir y ChatGPT planifica la tarea, usa tus archivos, plugins, la web, un navegador y código, y te devuelve trabajo para revisar, como una presentación, una hoja de cálculo, un documento o un análisis. Comparte sus capacidades básicas y sus límites de uso con Codex, el agente de programación de OpenAI. Aquí tienes qué hace, qué planes lo incluyen, cómo configurarlo, cómo te pregunta antes de actuar y cómo se compara con Codex, Claude Cowork y Copilot Cowork.",
    cta: "Empezar",
    secondary: "Configurarlo",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "Qué es ChatGPT Work",
      points: [
        "Un modo, no una app aparte: en ChatGPT cambias de Chat a Work. La recomendación de OpenAI es usar Chat para obtener respuestas y Work para completar tareas.",
        "Devuelve trabajo para revisar: presentaciones, hojas de cálculo, documentos, análisis y actualizaciones recurrentes, hechos a partir de tus archivos, plugins, la web, un navegador y código.",
        "Se ejecuta en la nube: en la web, las tareas se ejecutan en un entorno gestionado en la nube, en la infraestructura de OpenAI, y siguen adelante después de cerrar la app. En la app de escritorio también puedes elegir trabajar en local con tus archivos, apps y navegador, cuando está activado.",
        "Comparte su núcleo con Codex: OpenAI describe Work como las mismas capacidades básicas con una experiencia pensada para el trabajo diario. Deja fuera detalles técnicos como la salida de Git y de la shell y el panel de pull requests.",
        "Reparte el trabajo: ChatGPT puede pasar partes independientes de una tarea a subagentes, y puedes seguir su progreso.",
        "Repite trabajo: tareas programadas y, en la web y el móvil, tareas activadas por eventos de Gmail, Slack o GitHub.",
        "OpenAI lo presentó en su resumen de novedades (What's new) de la semana del 6 al 10 de julio de 2026.",
      ],
    },
    {
      kind: "table",
      id: "plans",
      title: "Precio de ChatGPT Work: qué planes lo incluyen",
      text: [
        "Precios de la documentación de precios de OpenAI el 13 de noviembre de 2026, en dólares estadounidenses. Work usa los mismos precios, créditos y límites de uso que Codex, y las tareas más largas o complejas pueden gastar más créditos.",
      ],
      headers: ["Plan", "Precio", "ChatGPT Work"],
      rows: [
        ["Free", "$0/mes", "Acceso limitado, solo en la app de escritorio; sin tareas programadas"],
        ["Go", "$8/mes", "Acceso limitado, solo en la app de escritorio; tareas programadas"],
        ["Plus", "$20/mes", "Escritorio, web y móvil; se pueden comprar créditos extra"],
        ["Pro", "Desde $100/mes (planes de $100, $200 o $500)", "Escritorio, web y móvil; se pueden comprar créditos extra"],
        ["Business (2+ usuarios)", "$20/usuario/mes con facturación anual, o $25 con facturación mensual", "Créditos compartidos del espacio de trabajo en acuerdos basados en créditos"],
        ["Enterprise y Edu", "Contactar con ventas", "Créditos compartidos del espacio de trabajo; los administradores controlan el acceso a Work, los plugins y el uso del navegador"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Cómo configurar ChatGPT Work",
      steps: [
        {
          title: "Elige dónde usarlo",
          text: "Work funciona en la web, en la app de escritorio de ChatGPT para macOS, Windows y Linux, y en ChatGPT para iOS y Android. En Free y Go, descarga la app de escritorio: en esos planes, Work solo está ahí.",
        },
        { title: "Cambia de Chat a Work", text: "Empieza una tarea en el modo Work y describe el resultado que quieres recibir, como un brief, una presentación, un análisis o una hoja de cálculo." },
        {
          title: "Dale fuentes",
          text: "Sube archivos o usa un proyecto, y conecta plugins como Slack, Google Drive, SharePoint, correo, calendarios, CRM y gestores de proyectos. En la app de escritorio también puede usar archivos locales, una extensión de navegador y Computer Use en macOS y Windows, en las regiones donde está disponible.",
        },
        {
          title: "Elige un modelo y cómo te pregunta",
          text: "La guía recomienda GPT-6 Astra para el trabajo exigente, GPT-6.1 Sol para el trabajo complejo a menor coste y Luna para las tareas más sencillas. En la app de escritorio, empieza con el modo de permisos Ask for approval.",
        },
        {
          title: "Haz que se repita",
          text: "Crea una tarea programada desde Chat o Work en la web o en la app de escritorio o, en la web y el móvil, actívala con un evento de Gmail, Slack o GitHub. Una misma tarea no puede combinar un disparador por evento con una programación horaria.",
        },
      ],
      source: { label: "Fuente: documentación de OpenAI, Get started with Work", href: docs },
    },
    {
      kind: "text",
      id: "safety",
      title: "Cómo te mantiene ChatGPT Work al mando",
      points: [
        "ChatGPT muestra su progreso y se detiene cuando necesita información o aprobación para acciones importantes; puedes responder preguntas o cambiar de rumbo a mitad de la tarea.",
        "En la app de escritorio, los modos de permisos son Ask for approval (el recomendado para empezar), Approve for me (las solicitudes aptas pasan a una revisión automática) y acceso completo donde esté disponible. Un sandbox fija límites de archivos y de red.",
        "Por defecto, el navegador en la nube pregunta antes de visitar un sitio web nuevo (Always ask, Auto approve o Always allow) y puede volver a preguntar antes de acciones con consecuencias.",
        "Una tarea en la nube no hereda los archivos, las apps, las sesiones del navegador ni el acceso a la red de tu ordenador, y el navegador en la nube no puede usar tus pestañas, extensiones, historial ni contraseñas guardadas locales.",
        "Los administradores del espacio de trabajo controlan el acceso a Work, los plugins, el uso del navegador y el acceso a la red. En los espacios de trabajo Enterprise y Edu, los plugins están desactivados por defecto y el acceso al navegador en la nube necesita que un administrador lo active.",
      ],
    },
    {
      kind: "table",
      id: "vs",
      title: "ChatGPT Work vs Codex, Claude Cowork y Copilot Cowork",
      text: [
        "Datos de la documentación y las páginas de precios de cada proveedor, comprobados el 13 de noviembre de 2026. Comparamos más compañeros de trabajo de IA en [herramientas de compañeros de trabajo de IA](/blog/ai-coworker). Para el trabajo de programación, consulta [Claude Code vs Codex](/blog/claude-code-vs-codex) y [casos de uso de Codex](/use-cases/codex); para el agente de Anthropic, la [guía de Claude Cowork](/personal-agent/claude-cowork).",
        "Cara a cara: [ChatGPT Work vs Codex](/compare/chatgpt-work-vs-codex), [Claude Cowork vs ChatGPT Work](/compare/claude-cowork-vs-chatgpt-work). Guías: [Claude Cowork](/personal-agent/claude-cowork), [Copilot Cowork](/personal-agent/copilot-cowork).",
      ],
      headers: ["", "ChatGPT Work", "Codex", "Claude Cowork", "Copilot Cowork"],
      rows: [
        ["Fabricante", "OpenAI", "OpenAI", "Anthropic", "Microsoft"],
        ["Pensado para", "Tareas que terminan en trabajo para revisar: presentaciones, hojas de cálculo, documentos, análisis", "Programación: inspecciona, edita y ejecuta código en un repositorio", "Trabajo del conocimiento que no es de programación", "Tareas de varios pasos en Microsoft 365"],
        ["Dónde se ejecuta", "La nube de OpenAI; en local en la app de escritorio cuando está activado", "CLI, extensión de IDE y app de escritorio de ChatGPT; Codex Cloud", "La nube de Anthropic; archivos locales a través de Claude Desktop", "La nube de Microsoft, con OneDrive y SharePoint"],
        ["Quién puede usarlo", "Planes de ChatGPT; limitado en Free y Go", "Planes de ChatGPT, o una clave de API de OpenAI (sin funciones en la nube)", "Planes de pago de Claude, Pro desde $20/mes", "Licencia de Microsoft 365 Copilot más Copilot Credits"],
        ["Uso", "Comparte precios, créditos y límites con Codex", "Comparte precios, créditos y límites con Work", "Consume los límites del plan más rápido que el chat", "Se factura por uso en Copilot Credits"],
        ["Trabajo recurrente", "Tareas programadas; eventos de Gmail, Slack y GitHub", "Tareas programadas en la app de ChatGPT y en la web", "Tareas programadas, de cada hora a cada semana, en la nube", "Prompts programados; eventos de correo, Teams y conectores"],
        ["Aprobaciones", "Ask for approval, Approve for me o acceso completo; un sandbox", "Ask for approval, Approve for me o acceso completo; un sandbox", "Modos Manual, Auto o Skip", "Cuadro de aprobación con vista previa antes de las acciones sensibles"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Con Crewmark",
      title: "Work para tus documentos. Crewmark para tu código.",
      text: [
        "ChatGPT Work toma una tarea y te devuelve algo para revisar. Crewmark convierte tus propias sesiones de Claude Code o Codex en empleados de IA con un rol, objetivos en cifras, horario laboral y un heartbeat, y cada uno toma issues de un tablero compartido, para que el trabajo de ingeniería, SEO y marketing de un repositorio se haga según un horario.",
      ],
      steps: [
        { title: "Elige un rol", text: "Empieza por los [roles de empleados de IA](/ai-employees), como ingeniero de software o especialista SEO." },
        { title: "Pon el trabajo en un tablero", text: "Asigna issues y haz que las habituales se repitan; el heartbeat despierta al empleado para que tome la siguiente." },
        { title: "Mira lo que puede hacer", text: "Los trabajos, con su configuración, están en [casos de uso de Codex](/use-cases/codex) y [casos de uso de Claude Code](/use-cases/claude-code)." },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Configurar ChatGPT Work" },
  mid: {
    title: "¿Quieres un compañero de trabajo de IA para tu código?",
    text: "Crewmark le da a tu Codex o Claude Code un rol, un heartbeat y un tablero compartido.",
    button: "Empezar",
  },
  faq: {
    title: "Preguntas frecuentes sobre ChatGPT Work",
    items: [
      {
        q: "¿Qué es ChatGPT Work?",
        a: "Un modo de ChatGPT para delegar tareas con un resultado claro. ChatGPT planifica la tarea, usa tus archivos, plugins, la web, un navegador y código, y te devuelve trabajo para revisar, como presentaciones, hojas de cálculo, documentos y análisis.",
      },
      {
        q: "ChatGPT Work vs Chat: ¿en qué se diferencian?",
        a: "Son dos modos de la misma app. OpenAI recomienda Chat para obtener respuestas y Work para completar tareas: Work planifica tareas de varios pasos, sigue adelante en la nube después de cerrar la app y se detiene para pedir aprobación en las acciones importantes.",
      },
      {
        q: "¿ChatGPT Work es gratis o necesito Plus?",
        a: "Free ($0) y Go ($8 al mes) tienen acceso limitado a Work solo en la app de escritorio. Plus ($20 al mes) y Pro (desde $100 al mes) tienen Work en escritorio, web y móvil, y pueden comprar créditos extra. Business cuesta $20 por usuario al mes con facturación anual; Enterprise y Edu van a través de ventas.",
      },
      {
        q: "ChatGPT Work vs Codex: ¿en qué se diferencian?",
        a: "Comparten capacidades básicas, ejecución, precios, créditos y límites de uso. Codex es el agente de programación de OpenAI, con una CLI, una extensión de IDE y tareas en la nube para repositorios; Work es la experiencia para el trabajo diario, sin detalles como la salida de Git y de la shell ni un panel de pull requests.",
      },
      {
        q: "¿Necesito descargar una app para ChatGPT Work?",
        a: "En Plus o Pro, no: Work también funciona en la web y en ChatGPT para iOS y Android. En Free y Go solo está en la app de escritorio de ChatGPT, que funciona en macOS, Windows y Linux. Trabajar con archivos locales, la extensión de navegador y Computer Use también requiere la app de escritorio.",
      },
      {
        q: "¿Pueden los estudiantes usar ChatGPT Work?",
        a: "En los planes Free y Go, Work viene con acceso limitado en la app de escritorio. Los espacios de trabajo de ChatGPT Edu usan Work con créditos compartidos del espacio de trabajo, y los administradores controlan el acceso a Work, los plugins y el uso del navegador; los precios de Edu se tratan con el equipo de ventas de OpenAI.",
      },
    ],
  },
  cta: {
    title: "Pásale los documentos a Work. Y dale también un trabajo a tus agentes de programación.",
    text: "Crewmark convierte sesiones de Codex y Claude Code en empleados de IA con roles, objetivos, horario laboral y un heartbeat.",
    button: "Empezar",
  },
  checked: "Comprobado con la documentación y las páginas de precios de ChatGPT Work y Codex de OpenAI el 13 de noviembre de 2026.",
  disclaimer:
    "Crewmark es un producto independiente, sin relación con OpenAI, Anthropic ni Microsoft y sin su respaldo. Los nombres de los productos son marcas de sus titulares.",
};
