import type { GuideCopy } from "@/components/landing/guide-article";

// es translation of /personal-agent/grok-bot; the English master is
// src/content/personal-agents/grok-bot.ts.

const docs = "https://docs.x.ai/grok-bot/get-started";

export const copy: GuideCopy = {
  meta: {
    title: "Grok Bot: qué es, cómo usarlo, planes y configuración",
    description:
      "Grok Bot de xAI explicado: qué hace el agente siempre activo, qué planes de X, SuperGrok y Cursor lo incluyen, la prueba gratis, cómo descargarlo en Mac, Windows, Linux y móviles, cómo configurar tu primer Bot y casos de uso.",
  },
  breadcrumb: "Grok Bot",
  parent: { name: "Agentes personales", href: "/personal-agent" },
  hero: {
    kicker: "Agentes personales · Grok Bot",
    title: "Grok Bot: qué hace el agente personal de xAI y cómo usarlo",
    lead: "Grok Bot es el agente siempre activo de xAI, que la empresa llama “tu compañero de equipo de IA proactivo”. Cada Bot trabaja en un ordenador en la nube con navegador, archivos y terminal, inicia sesión en las apps que usas, recuerda cómo te gusta que se hagan las cosas y sigue trabajando cuando cierras el portátil. Se abrió como beta temprana en agosto de 2026. Esta guía explica qué hace, qué planes lo incluyen, cómo configurar tu primer Bot, cómo funcionan las rutinas y las aprobaciones, y para qué lo usa la gente.",
    cta: "Empezar",
    secondary: "Configurarlo",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "Qué es Grok Bot",
      text: [
        "Grok Bot no es el chatbot Grok ni la cuenta @grok de X. Es un agente con su propio ordenador: puede usar apps y webs como lo haría una persona, escribir y ejecutar código y encargarse de trabajos de varios pasos, como montar una presentación, llevar una campaña, hacer una reserva o mantener un calendario sincronizado.",
      ],
      points: [
        "Un ordenador en la nube: tus Bots comparten una máquina persistente con navegador, sistema de archivos y terminal. Cada Bot tiene su propia pantalla, y puedes ver a cualquiera en directo.",
        "Varios Bots, un equipo: dale a cada Bot un trabajo; pueden escribirse y pasarse el trabajo, y tu primer Bot puede informarte sobre los demás.",
        "Apps: Gmail, Google Calendar, Google Drive, Slack, Notion, Granola, GitHub y más, además de cualquier servidor MCP o API. Usa los mismos servidores MCP, plugins y skills que Cursor.",
        "Memoria: cada Bot guarda sus propias notas sobre tus preferencias y un registro de trabajo con fechas; unos pocos datos, como tu nombre y tu zona horaria, los comparten todos tus Bots.",
        "Rutinas: los Bots ejecutan trabajos según un horario o cuando pasa algo, como una mención en Slack o un webhook. Consulta [rutinas de Grok Bot](/personal-agent/grok-bot-routines).",
        "Puedes hablar con él en el escritorio, en el móvil, en Slack y en X, por texto o por voz.",
      ],
    },
    {
      kind: "table",
      id: "plans",
      title: "Qué planes incluyen Grok Bot",
      text: [
        "Grok Bot funciona con una cuenta de Cursor. Estos son los planes que lo incluyen, según la página de planes de Grok Bot de Cursor; ni xAI ni Cursor publican un precio propio de Grok Bot ni su uso semanal en cifras.",
      ],
      headers: ["Plan", "Grok Bot", "Uso"],
      rows: [
        ["The X Subscription: Premium, Super, Ultra", "Incluido, plaza individual o de equipo", "Bolsa semanal compartida, mayor en Super y Ultra; uso extra con crédito prepago"],
        ["The X Subscription: Plus, Free", "No incluido", "-"],
        ["Planes antiguos de Cursor: Pro, Pro+, Ultra, Teams", "Incluido", "Uso semanal creciente de Pro a Ultra; después, uso bajo demanda si está activado"],
        ["SuperGrok, SuperGrok Plus, SuperGrok Heavy, X Premium+ vinculados", "Incluido a través de una cuenta vinculada", "Heavy es el que más tiene; una vinculación y un plan de Cursor no se suman"],
        ["SuperGrok Lite", "No incluido", "-"],
        ["Prueba gratis", "Un crédito de uso con un plazo de 7 días", "Lo consumen los pasos del agente y los tokens; no se recarga"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Cómo configurar Grok Bot",
      steps: [
        {
          title: "Descarga la app",
          text: "Descárgala desde x.ai/bot. Funciona en macOS (Apple silicon e Intel), Windows (x64 y Arm64) y Linux (x64 y Arm64), además de iPhone (iOS 18 o posterior) y Android (9 o posterior).",
        },
        {
          title: "Inicia sesión",
          text: "Elige Sign in y termina en el navegador; Grok Bot usa tu cuenta de Cursor, así que se aplica el SSO de tu empresa. Si tu acceso viene de SuperGrok o X Premium+, vincula tu cuenta de Grok en la página de bienvenida. Las cuentas con Privacy Mode (Legacy) tienen que cambiar antes, porque los Bots necesitan almacenamiento en la nube.",
        },
        {
          title: "Dale a tu primer Bot un trabajo",
          text: "La app crea un Bot llamado Grok Bot y abre un chat. Añade más con New Bot (Cmd/Ctrl+N). Dale a cada Bot un trabajo en su primer mensaje y pídele que recuerde cómo quieres que se haga. También puedes enseñarle una tarea grabándola una vez en el ordenador del Bot.",
        },
        {
          title: "Conecta apps y fija reglas",
          text: "Conecta las apps que necesita. Los inicios de sesión salen de su Vault, después de un gestor de contraseñas como 1Password y, si no, de un formulario seguro, y el Bot nunca ve la contraseña. Auto Review está activado por defecto y revisa las acciones antes de que se ejecuten; añade reglas de Ask first en Settings > General > Bot para todo lo que deba esperarte siempre.",
        },
      ],
      source: { label: "Fuente: documentación de Grok Bot de xAI, Get started", href: docs },
    },
    {
      kind: "text",
      id: "safety",
      title: "Cómo te mantiene Grok Bot al mando",
      points: [
        "Tarjetas de aprobación: cuando una acción necesita tu visto bueno, el Bot muestra una tarjeta y espera. En los ejemplos de xAI redacta respuestas de Slack y mensajes de Gmail para que los apruebes.",
        "Auto Review revisa las acciones antes de que un Bot ejecute comandos, use apps o actúe en su ordenador, y solo trata tus propios mensajes como instrucciones. xAI señala que reduce el riesgo del contenido dañino, pero no lo elimina.",
        "Un Bot no tiene cuenta propia; actúa como tú, así que cada acción remite a ti.",
        "Todos los Bots comparten un ordenador y sus sesiones iniciadas: si un Bot inicia sesión en una web, los demás también pueden usar esa sesión.",
        "Para el inicio de sesión único o las passkeys, elige Open computer y luego Take control, completa el paso y dile al Bot que continúe.",
      ],
    },
    {
      kind: "table",
      id: "use-cases",
      title: "Casos de uso de Grok Bot",
      text: ["Según la documentación de casos de uso de xAI. La mayoría preparan el trabajo y esperan tu aprobación antes de enviar nada."],
      headers: ["Caso de uso", "Qué hace el Bot"],
      rows: [
        ["Resumen matinal", "Resume los cambios de la noche en tus apps"],
        ["Gestor de la bandeja de entrada", "Ordena el correo sin leer por urgencia y redacta respuestas"],
        ["Coordinador de viajes", "Encuentra dos opciones de vuelo y hotel y te deja la reserva a ti"],
        ["Preparación de reuniones", "Escribe un brief de una página sobre los asistentes, las conversaciones anteriores y los temas abiertos"],
        ["Marketing de contenidos", "Redacta una newsletter y posts a partir del trabajo entregado en la semana"],
        ["Desarrollo de ventas", "Califica los leads entrantes según tu cliente ideal y redacta respuestas"],
        ["Inteligencia competitiva", "Informa cada semana de los lanzamientos y cambios de precio de la competencia"],
        ["Equipo de campaña", "Varios Bots sacan los datos de registros, redactan el contenido del lanzamiento y lo verifican"],
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Grok Bot vs Muse, Dots y Claude Duet",
      headers: ["", "Grok Bot", "Meta Muse", "ChatGPT dots", "Claude Duet"],
      rows: [
        ["Fabricante", "xAI", "Meta", "OpenAI", "Anthropic"],
        ["Dónde se ejecuta", "Un ordenador en la nube compartido por tus Bots", "Una VM en la nube dedicada por persona", "Su propio ordenador y navegador en la nube", "La app de Claude Duet"],
        ["Horarios", "Rutinas con horario, Slack, GitHub, correo o webhook", "Recordatorios y tareas recurrentes", "Recordatorios programados y comprobaciones recurrentes", "Viene a ti con lo que necesita atención"],
        ["Quién puede usarlo", "X Premium y superiores, SuperGrok, planes de Cursor", "EE. UU., gratis con límites; Power $20/mes", "ChatGPT Pro y Business Premium", "Claude Pro, Max, Ultra en EE. UU., lista de espera"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Con Crewmark",
      title: "Un compañero al estilo de Grok Bot para tu código",
      text: [
        "Grok Bot trabaja en tus apps; Crewmark trabaja en tu repositorio. Convierte tu propio Claude Code o Codex en un empleado de IA con un rol, un objetivo en cifras, horario laboral y un heartbeat: se despierta según su horario, toma la siguiente issue de un tablero, abre pull requests y te escribe cuando necesita una decisión.",
      ],
      steps: [
        {
          title: "Elige un rol",
          text: "Empieza por un [rol de empleado de IA](/ai-employees), como ingeniero de software o especialista SEO.",
        },
        {
          title: "Dale un horario y un heartbeat",
          text: "Se despierta cada 15 a 240 minutos durante el horario que fijes. Consulta [cómo ejecutar Claude Code 24/7](/blog/run-claude-code-24-7).",
        },
        {
          title: "Compara agentes personales",
          text: "Consulta [agentes personales de IA comparados](/personal-agent) y la [guía de Meta Muse](/personal-agent/meta-muse).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Configurar Grok Bot" },
  mid: {
    title: "¿Quieres un compañero proactivo para tu código?",
    text: "Los empleados de Crewmark se despiertan con un heartbeat, toman la siguiente issue de un tablero y abren pull requests.",
    button: "Empezar",
  },
  faq: {
    title: "Preguntas frecuentes",
    items: [
      {
        q: "¿Qué es Grok Bot?",
        a: "El agente siempre activo de xAI. Cada Bot trabaja en un ordenador en la nube, inicia sesión en tus apps, recuerda tus preferencias, ejecuta rutinas según un horario y sigue trabajando cuando cierras el portátil. No es el chatbot Grok ni la cuenta @grok de X.",
      },
      {
        q: "¿Cuánto cuesta Grok Bot?",
        a: "No tiene una tarifa propia: está incluido en los planes Premium, Super y Ultra de The X Subscription, en los planes antiguos Pro, Pro+, Ultra y Teams de Cursor, y en las suscripciones vinculadas de SuperGrok, SuperGrok Plus, SuperGrok Heavy y X Premium+. Los límites de uso cambian según el plan.",
      },
      {
        q: "¿Hay prueba gratis de Grok Bot?",
        a: "Sí, un crédito de uso con un plazo de 7 días. Lo consumen los pasos del agente y los tokens, no se recarga y nunca se convierte en un plan de pago; después, mejoras el plan o vinculas una cuenta.",
      },
      {
        q: "¿Grok Bot funciona en Windows, Linux y Android?",
        a: "Sí. La app de escritorio funciona en macOS, Windows y Linux (x64 y Arm64), y hay apps para iPhone (iOS 18+) y Android (9+).",
      },
      {
        q: "¿Puede Grok Bot ejecutar tareas según un horario?",
        a: "Sí, con rutinas: según un horario descrito con palabras, o cuando llega un mensaje de Slack, un evento de GitHub o Linear, un correo o un webhook. Consulta [rutinas de Grok Bot](/personal-agent/grok-bot-routines).",
      },
      {
        q: "Grok Bot vs Meta Muse: ¿cuál es mejor?",
        a: "Muse está pensado para las gestiones personales del día a día de cualquiera, con un nivel gratuito en EE. UU. Grok Bot está pensado para el trabajo: varios Bots como equipo, rutinas con disparadores y las herramientas de Cursor para código.",
      },
    ],
  },
  cta: {
    title: "Dale a tu agente de código un trabajo, no solo un prompt.",
    text: "Crewmark convierte sesiones de Claude Code y Codex en empleados de IA con roles, objetivos, horario laboral y un heartbeat.",
    button: "Empezar",
  },
  checked: "Comprobado con la documentación y las guías de Grok Bot de xAI y la página de planes de Grok Bot de Cursor el 10 de noviembre de 2026.",
  disclaimer:
    "Crewmark es un producto independiente, sin relación con xAI, SpaceX, X, Cursor, Meta, OpenAI ni Anthropic y sin su respaldo. Los nombres de los productos son marcas de sus titulares.",
};
