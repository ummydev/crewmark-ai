import type { GuideCopy } from "@/components/landing/guide-article";

// es translation of /personal-agent/meta-muse; the English master is
// src/content/personal-agents/meta-muse.ts.

const newsroom = "https://about.fb.com/news/2026/09/introducing-muse-personal-ai-agent/";

const prompts = `Cada día laborable a las 7 de la mañana, mándame un resumen breve: la agenda de hoy,
lo urgente de mi bandeja de entrada y el tiempo.

Busca tres vuelos a Chicago para el primer fin de semana de diciembre por menos de $400,
compáralos y pregúntame antes de reservar nada.

Quiero vender mi coche. Averigua cuánto vale, redacta el anuncio
y dime qué ofertas merece la pena contestar.`;

export const copy: GuideCopy = {
  meta: {
    title: "Meta Muse: qué es, cómo usarlo y precio",
    description:
      "El agente personal de IA Muse de Meta explicado: qué hace, cómo conseguirlo y usarlo, los planes Free, Power ($20) y Maximum ($100), tareas programadas, apps conectadas y pagos, ajustes de privacidad y cómo se compara.",
  },
  breadcrumb: "Meta Muse",
  parent: { name: "Agentes personales", href: "/personal-agent" },
  hero: {
    kicker: "Agentes personales · Meta Muse",
    title: "Meta Muse: qué hace el agente personal de Meta, cómo usarlo y cuánto cuesta",
    lead: "Muse es el agente personal de IA de Meta, lanzado en EE. UU. el 8 de septiembre de 2026. Meta dice que “no solo responde preguntas, sino que hace el trabajo de verdad”: envía correos, reserva viajes, rellena formularios y negocia por ti, sigue trabajando cuando cierras la app y pregunta antes de cualquier cosa importante, como enviar un correo o comprar algo. Esta guía explica cómo conseguirlo, cómo usarlo, los planes y los límites de tokens, las tareas programadas, los ajustes de privacidad y cómo se compara con Grok Bot, ChatGPT dots y Claude.",
    cta: "Empezar",
    secondary: "Cómo usarlo",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "Qué es Meta Muse",
      text: [
        "Muse funciona con Muse Spark, el modelo de Meta, dentro de una máquina en la nube dedicada que Meta llama Muse Secure VM. Convierte objetivos en planes y trabaja en ellos en segundo plano, y vuelve cuando algo cambia o cuando necesita tu aprobación.",
      ],
      points: [
        "Actúa: envía correos, reserva viajes, abre un navegador, rellena formularios y negocia. Entre los ejemplos de Meta están vender un coche por más dinero, rebajar una factura y ajustar un plan de entrenamiento.",
        "Recuerda: lo que te importa, a partir de detalles que mencionas una sola vez, y hace sugerencias sin que se las pidas, como convertir un reel de receta guardado en Instagram en una lista de la compra.",
        "Compra de forma segura: el pago pasa por Link de Stripe, cuya cartera para agentes crea una tarjeta de un solo uso para que Muse nunca vea el número real de tu tarjeta.",
        "Está donde estás tú: en la app de Muse, en la web en muse.ai y en WhatsApp; las gafas con IA de Meta serán las siguientes.",
        "No es lo mismo que Meta AI, el asistente de Facebook, Instagram y WhatsApp, ni que Muse Code, el producto de Meta para desarrolladores.",
      ],
    },
    {
      kind: "table",
      id: "pricing",
      title: "Precio de Meta Muse: Free, Power y Maximum",
      text: [
        "Según el centro de ayuda de Meta el 10 de noviembre de 2026. Muse y sus suscripciones están en pruebas limitadas y todavía no están disponibles en todas partes.",
      ],
      headers: ["Plan", "Precio", "Uso semanal"],
      rows: [
        ["Free", "$0", "Un límite de uso semanal gratuito (Meta no publica su tamaño); espera a que se renueve o mejora el plan"],
        ["Power", "$20 al mes", "500M de tokens de Muse a la semana"],
        ["Maximum", "$100 al mes", "3B de tokens de Muse a la semana"],
        ["Tokens extra", "Se venden aparte", "Compra más además de tu asignación semanal"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Cómo conseguir y usar Meta Muse",
      text: [
        "Tienes que tener 18 años o la mayoría de edad donde vivas, estar en un lugar donde Muse esté disponible (se lanzó en EE. UU.) e iniciar sesión con una cuenta de Meta. Puedes crearla con Facebook, Instagram, una dirección de correo o un número de teléfono.",
      ],
      steps: [
        {
          title: "Descárgalo o abre muse.ai",
          text: "Descarga la app de Muse en iOS o Android, o inicia sesión en muse.ai. Meta no indica una app para Windows o Mac, así que en un ordenador usa muse.ai en el navegador.",
        },
        {
          title: "Dile lo que necesitas",
          text: "Muse se abre en la pestaña Chat. Describe el resultado, no los pasos; puede que primero te haga algunas preguntas. Puedes mandar mensajes de seguimiento sin esperar y sin repetir el contexto.",
          code: prompts,
        },
        {
          title: "Conecta las apps que necesita",
          text: "Elige qué apps puede usar Muse y cuánto acceso tiene cada una; para el correo, solo lectura o lectura y envío. Próximamente: Shop Pay al pagar y 1Password para que pueda usar tus inicios de sesión.",
        },
        {
          title: "Aprueba, revisa y encuentra tus archivos",
          text: "Muse pregunta antes de acciones sensibles como enviar un correo o hacer una compra, y guarda un registro de auditoría de lo que ha hecho y de lo que piensa hacer. Los archivos que crea se guardan en la pestaña Library.",
        },
      ],
      source: { label: "Fuente: el anuncio de Muse de Meta", href: newsroom },
    },
    {
      kind: "text",
      id: "scheduled-tasks",
      title: "Recordatorios y tareas programadas en Muse",
      text: [
        "Muse no tiene una pantalla aparte para programar: los recordatorios y las tareas recurrentes se configuran pidiéndoselo, y el centro de ayuda de Meta explica cómo funcionan.",
      ],
      points: [
        "Una sola vez: dile a Muse qué tiene que recordarte y cuándo; te confirma la hora exacta.",
        "Recurrentes: describe la tarea y con qué frecuencia, por ejemplo “Cada lunes a las 9 de la mañana, recuérdame enviar mi hoja de horas”. Se ejecuta hasta que la canceles, y Muse te escribe cada vez.",
        "Encuéntralas: pregunta “¿Qué recordatorios tengo?” o toca el icono Assistant arriba y abre Upcoming.",
        "Cambiar o cancelar: di cuál y qué quieres cambiar, por ejemplo pasar un recordatorio del lunes al martes.",
        "Las horas siguen tu zona horaria; si eliges una hora que ya ha pasado, Muse te sugiere otra.",
        "Hay más ideas para rutinas diarias en [casos de uso de Meta Muse](/personal-agent/meta-muse-use-cases).",
      ],
    },
    {
      kind: "text",
      id: "privacy",
      title: "Privacidad: cómo excluirte y qué puede ver Meta",
      points: [
        "El Muse de cada persona funciona en su propia Muse Secure VM; los agentes de otras personas no pueden acceder a ella.",
        "Un agente aparte, Sentinel, tiene que aprobar todo lo que Muse envía a internet y te pregunta cuando hace falta.",
        "Muse no puede ver tus contraseñas ni tus métodos de pago; los inicios de sesión compartidos van a un almacenamiento seguro.",
        "Tus conversaciones y los datos de la VM no se comparten con los sistemas publicitarios de Meta.",
        "Puedes excluirte de que tus interacciones se usen para entrenar la IA de Meta, cambiar o desconectar cualquier app y decirle a Muse que olvide algo.",
        "Meta prevé una Muse Confidential VM a finales de este año, cifrada con una clave que solo tienes tú.",
      ],
    },
    {
      kind: "text",
      id: "not-working",
      title: "¿Meta Muse no está disponible o no funciona?",
      points: [
        "Fuera de EE. UU.: Muse se lanzó en EE. UU. y está en pruebas limitadas en otros lugares; Meta dice que todavía no está disponible en todas partes.",
        "Menores de 18: tienes que tener 18 años o la mayoría de edad en tu país.",
        "Has llegado al límite gratuito: espera a que se renueve el límite semanal, pásate a Power o Maximum, o compra tokens extra.",
        "No hay modo de voz: la voz solo está disponible en algunos países y necesita acceso al micrófono, que puedes cambiar en Settings > Voice and Avatar.",
        "Ha hecho algo inesperado: Meta advierte que Muse puede ser inexacto o hacer cosas inesperadas, así que mantén las aprobaciones activas para enviar y comprar, y revisa el registro de auditoría.",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Meta Muse vs Grok Bot, ChatGPT dots y Claude Duet",
      headers: ["", "Meta Muse", "Grok Bot", "ChatGPT dots", "Claude Duet"],
      rows: [
        ["Fabricante", "Meta", "xAI", "OpenAI", "Anthropic"],
        ["Pensado para", "Tareas del día a día y gestiones personales", "Trabajo: equipos de Bots en tus apps", "Objetivos de larga duración dentro de ChatGPT", "Un Claude proactivo que se pone en contacto contigo"],
        ["Forma más barata de entrar", "Gratis con un límite semanal", "Crédito de prueba gratis; X Premium y superiores", "ChatGPT Pro", "Claude Pro, con lista de espera"],
        ["Horarios", "Recordatorios y tareas recurrentes", "Rutinas con horarios, Slack, correo y webhooks", "Recordatorios programados y comprobaciones recurrentes", "Viene a ti con lo que necesita atención"],
        ["Guía", "Esta página", "[Grok Bot](/personal-agent/grok-bot)", "[ChatGPT dots](/blog/chatgpt-dots)", "[Claude Duet](/blog/claude-duet)"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Con Crewmark",
      title: "Muse hace tus recados. ¿Quién saca adelante tu backlog?",
      text: [
        "Muse está pensado para las gestiones personales. Si el trabajo que quieres delegar vive en un repositorio de código o en un plan de marketing, Crewmark convierte tu propio Claude Code o Codex en un empleado de IA con un rol, un objetivo en cifras, horario laboral y un heartbeat, que toma la siguiente issue de un tablero y te escribe cuando necesita una decisión.",
      ],
      steps: [
        {
          title: "Elige un rol",
          text: "Empieza por un [rol de empleado de IA](/ai-employees), como especialista SEO o social media manager.",
        },
        {
          title: "Dale un horario y un heartbeat",
          text: "Se despierta cada 15 a 240 minutos durante el horario que fijes. Consulta [cómo hacer que Claude Code sea proactivo](/proactive-claude-code).",
        },
        {
          title: "Compara agentes personales",
          text: "Consulta [agentes personales de IA comparados](/personal-agent).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Empezar con Meta Muse" },
  mid: {
    title: "¿Quieres un agente que saque adelante tu backlog de trabajo?",
    text: "Los empleados de Crewmark se despiertan con un heartbeat y toman la siguiente issue de un tablero, con el plan de Claude Code o Codex que ya tienes.",
    button: "Empezar",
  },
  faq: {
    title: "Preguntas frecuentes",
    items: [
      {
        q: "¿Qué es Meta Muse?",
        a: "El agente personal de IA de Meta, lanzado en EE. UU. el 8 de septiembre de 2026 y basado en el modelo Muse Spark. Envía correos, reserva viajes, rellena formularios y hace compras por ti desde su propia máquina en la nube, y pregunta antes de las acciones sensibles.",
      },
      {
        q: "¿Meta Muse es gratis?",
        a: "Sí, con un límite de uso semanal. Power cuesta $20 al mes por 500M de tokens de Muse a la semana y Maximum $100 al mes por 3B, y puedes comprar tokens extra.",
      },
      {
        q: "¿Cómo consigo Meta Muse?",
        a: "Descarga la app de Muse en iOS o Android o entra en muse.ai, e inicia sesión con una cuenta de Meta. Tienes que tener 18 años o la mayoría de edad y estar en un lugar donde Muse esté disponible; se lanzó en EE. UU.",
      },
      {
        q: "¿Puedo usar Meta Muse en Windows o Mac?",
        a: "Meta indica las apps de iOS y Android y muse.ai. En un PC con Windows o en un Mac, usa muse.ai en el navegador.",
      },
      {
        q: "¿Puede Muse hacer tareas según un horario?",
        a: "Sí. Pídele una tarea recurrente, como “Cada lunes a las 9 de la mañana, recuérdame enviar mi hoja de horas”; se ejecuta hasta que la canceles, y la encontrarás en el icono Assistant, en Upcoming.",
      },
      {
        q: "¿Usa Meta mis conversaciones con Muse para publicidad?",
        a: "Meta dice que las conversaciones y los datos de la VM no se comparten con sus sistemas publicitarios. También puedes excluirte de que tus interacciones se usen para entrenar los modelos de IA de Meta.",
      },
    ],
  },
  cta: {
    title: "Los agentes personales hacen recados. Los empleados de IA sacan adelante tu backlog.",
    text: "Crewmark convierte sesiones de Claude Code y Codex en empleados de IA con roles, objetivos, horario laboral y un heartbeat.",
    button: "Empezar",
  },
  checked: "Comprobado con el anuncio de Muse de Meta y los artículos del centro de ayuda de Meta el 10 de noviembre de 2026.",
  disclaimer:
    "Crewmark es un producto independiente, sin relación con Meta, xAI, OpenAI ni Anthropic y sin su respaldo. Muse, Meta y WhatsApp son marcas de Meta.",
};
