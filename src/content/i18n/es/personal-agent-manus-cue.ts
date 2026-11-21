import type { GuideCopy } from "@/components/landing/guide-article";

// es translation of /personal-agent/manus-cue; the English master is
// src/content/personal-agents/manus-cue.ts.

const blog = "https://manus.im/blog/introducing-manus-2-0";

const prompts = `# Un agente para recados
Cada día laborable a las 8 de la mañana, revisa mi bandeja de entrada por si hay algo sobre la mudanza y
mándame un resumen breve. Pregúntame antes de responder a nadie.

# Un equipo pequeño con un objetivo (el propio ejemplo de Manus, como prompt)
Estamos organizando un offsite del equipo en marzo para 20 personas.
Que uno de vosotros investigue espacios cerca de Lisboa, otro lo convierta en una lista
de tres finalistas y otro prepare una presentación con una recomendación para que yo decida.`;

export const copy: GuideCopy = {
  meta: {
    title: "Manus Cue: código de invitación, cómo usarlo y precio",
    description:
      "Cue de Manus explicado: agentes personales con su propio correo, número de teléfono, cartera y ordenador. Cómo conseguir acceso con un código de invitación, cómo descargarlo, cómo usar agentes y chats de grupo, automatizaciones programadas y cuánto cuesta.",
  },
  breadcrumb: "Manus Cue",
  parent: { name: "Agentes personales", href: "/personal-agent" },
  hero: {
    kicker: "Agentes personales · Manus Cue",
    title: "Manus Cue: agentes personales con su propio correo, teléfono y cartera",
    lead: "Cue es una app independiente de Manus para tus agentes personales, lanzada en acceso anticipado con Manus 2.0 el 28 de septiembre de 2026. Lo que la distingue: cada agente tiene su propia dirección de correo, número de teléfono, cartera y ordenador, así que puede escribir a otras personas, atender tus llamadas y pagar dentro de un presupuesto que tú fijas. Esta guía explica cómo entrar con un código de invitación, cómo descargarla, cómo usar un agente o un equipo, las automatizaciones programadas, cuánto cuesta y las preguntas abiertas.",
    cta: "Empezar",
    secondary: "Conseguir acceso",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "Qué es Manus Cue",
      text: [
        "Manus describe Cue como “una nueva app independiente para tus agentes personales, en el móvil y en el escritorio”. Está construida sobre la misma infraestructura que Manus, pero es una app aparte, no un modo de Manus.",
      ],
      points: [
        "Su propia identidad: cada agente tiene una dirección de correo, un número de teléfono, una cartera y un ordenador.",
        "Llamadas: un agente puede atender tus llamadas y dejarte un resumen en Cue.",
        "Pagos: los agentes pueden pagar dentro de un presupuesto que tú fijas.",
        "Equipos: varios agentes pueden compartir un chat de grupo y un objetivo común, pasándose el trabajo entre ellos mientras tú marcas la dirección y tomas la decisión final.",
        "En el mundo real: en un restaurante, escanea un código QR para que tu agente pida por ti o te guarde el sitio en la cola.",
        "Un solo asistente también vale: quédate con un único agente para recados, recordatorios e investigación.",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Cómo conseguir Manus Cue",
      steps: [
        {
          title: "Consigue un código de invitación",
          text: "Cue está en acceso anticipado y necesita un código de invitación. En el lanzamiento, Manus ofreció el código MEETCUE a un número limitado de usuarios, por orden de llegada; no ha dicho si sigue funcionando. Todo el que entra recibe códigos extra para compartir, así que pídeselo a alguien que ya use Cue.",
        },
        {
          title: "Descarga la app desde Manus",
          text: "En Manus, abre la pestaña Agents (Cue!) de la barra lateral y escanea el código QR para descargar la app. Manus indica web, escritorio y móvil; en el lanzamiento, iOS estaba pendiente de la revisión de la App Store, así que compruébalo en la App Store antes de contar con ella.",
        },
        {
          title: "Inicia sesión con el código",
          text: "Introduce el código de invitación al iniciar sesión. Puede que Manus también te mande una copia por correo.",
        },
        {
          title: "Crea tu primer agente",
          text: "Empieza con un agente para recados o monta un equipo pequeño con un objetivo común. Di qué quieres que haga, el presupuesto que puede gastar y sobre qué debe preguntarte primero.",
          code: prompts,
        },
      ],
      source: { label: "Fuente: el post de lanzamiento de Manus 2.0 y Cue", href: blog },
    },
    {
      kind: "text",
      id: "automations",
      title: "Automatizaciones programadas y skills",
      points: [
        "Scheduled Automations: describe qué quieres que se haga y cuándo, y Cue lo configura.",
        "Los disparadores por eventos, como un correo nuevo o un mensaje de Slack, se describen para Manus Automations; Manus no dice que Cue los tenga todavía.",
        "Las skills que creaste o importaste en Manus no se trasladan automáticamente. Vuelve a configurarlas dentro de Cue.",
      ],
    },
    {
      kind: "table",
      id: "pricing",
      title: "Precio de Manus Cue",
      headers: ["", "Lo que dice Manus"],
      rows: [
        ["Acceso anticipado", "Gratis, con un código de invitación"],
        ["Después del acceso anticipado", "No anunciado"],
        ["Suscripción o créditos de Manus", "El post de lanzamiento no dice que un plan de Manus incluya Cue ni que Cue use créditos de Manus"],
        ["Pagos de los agentes", "Los agentes pagan desde su cartera dentro del presupuesto que fijes"],
      ],
    },
    {
      kind: "text",
      id: "questions",
      title: "Preguntas abiertas antes de darle tu número",
      points: [
        "A quién puede contactar un agente, y a qué puede comprometerte, no se describe en el post de lanzamiento. Fija un presupuesto y dile a cada agente qué debe preguntarte primero.",
        "Cómo sabe la persona al otro lado que está hablando con un agente tampoco se describe.",
        "No se han anunciado el precio después del acceso anticipado ni en qué países funciona Cue.",
        "Los agentes que envían mensajes y pagan desde una cartera pueden cometer errores que cuestan dinero; empieza con un presupuesto pequeño.",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Manus Cue vs Meta Muse y Grok Bot",
      headers: ["", "Manus Cue", "Meta Muse", "Grok Bot"],
      rows: [
        ["Identidad del agente", "Correo, número de teléfono, cartera y ordenador propios", "Actúa a través de tus cuentas conectadas", "Actúa como tú; sin cuenta propia"],
        ["Equipos de agentes", "Sí, chats de grupo con un objetivo común", "No se describe", "Sí, los Bots se pasan el trabajo"],
        ["Horarios", "Scheduled Automations", "Recordatorios y tareas recurrentes", "Rutinas con horario o disparador"],
        ["Acceso", "Acceso anticipado, código de invitación", "EE. UU., gratis con un límite semanal", "X Premium y superiores, SuperGrok, planes de Cursor"],
        ["Guía", "Esta página", "[Meta Muse](/personal-agent/meta-muse)", "[Grok Bot](/personal-agent/grok-bot)"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Con Crewmark",
      title: "Un equipo de agentes para tu trabajo, con el agente que ya usas",
      text: [
        "Cue le da a cada agente personal una identidad. Crewmark le da a cada agente de trabajo un puesto: convierte tu propio Claude Code o Codex en un empleado de IA con un rol, un objetivo en cifras, horario laboral y un heartbeat, que avanza por un tablero compartido con el resto de tu equipo.",
      ],
      steps: [
        {
          title: "Elige roles",
          text: "Empieza por los [roles de empleados de IA](/ai-employees): ingeniero, especialista SEO, agente de marketing, social media manager, diseñador.",
        },
        {
          title: "Pon el trabajo en un tablero",
          text: "Cada empleado toma la siguiente issue que se le asigna, comenta mientras trabaja y te escribe cuando se queda bloqueado.",
        },
        {
          title: "Compara agentes personales",
          text: "Consulta [agentes personales de IA comparados](/personal-agent).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Empezar con Manus Cue" },
  mid: {
    title: "¿Quieres un equipo de agentes en tu trabajo de verdad?",
    text: "Los empleados de Crewmark avanzan por un tablero compartido con un heartbeat, con el plan de Claude Code o Codex que ya pagas.",
    button: "Empezar",
  },
  faq: {
    title: "Preguntas frecuentes",
    items: [
      {
        q: "¿Qué es Manus Cue?",
        a: "Una app independiente de Manus para agentes personales, lanzada en acceso anticipado el 28 de septiembre de 2026. Cada agente tiene su propia dirección de correo, número de teléfono, cartera y ordenador, y varios agentes pueden trabajar juntos en un chat de grupo.",
      },
      {
        q: "¿Cómo consigo un código de invitación de Manus Cue?",
        a: "En el lanzamiento, Manus ofreció MEETCUE a un número limitado de usuarios, por orden de llegada. Todo el que consigue acceso recibe códigos de invitación extra para compartir, así que lo más seguro es pedírselo a alguien que ya use Cue.",
      },
      {
        q: "¿Cuánto cuesta Manus Cue?",
        a: "Es gratis durante el acceso anticipado con un código de invitación. Manus no ha anunciado el precio después, ni si una suscripción de Manus lo incluirá.",
      },
      {
        q: "¿Cómo descargo Manus Cue?",
        a: "Abre la pestaña Agents (Cue!) en la barra lateral de Manus y escanea el código QR. Manus indica web, escritorio y móvil; iOS estaba pendiente de la revisión de la App Store en el lanzamiento.",
      },
      {
        q: "¿Puede un agente de Cue hacer llamadas y pagos?",
        a: "Cada agente tiene su propio número de teléfono y cartera: puede atender tus llamadas y dejarte un resumen, enviar mensajes y pagar dentro de un presupuesto que tú fijas.",
      },
      {
        q: "¿Cue forma parte de Manus?",
        a: "Está construida sobre la misma infraestructura, pero es una app aparte. Las skills de Manus no se trasladan automáticamente, y Manus no dice que Cue use créditos de Manus.",
      },
    ],
  },
  cta: {
    title: "Los agentes personales hacen recados. Los empleados de IA sacan adelante tu backlog.",
    text: "Crewmark convierte sesiones de Claude Code y Codex en empleados de IA con roles, objetivos, horario laboral y un heartbeat.",
    button: "Empezar",
  },
  checked: "Comprobado con el post de lanzamiento de Manus 2.0 y el centro de ayuda de Manus el 10 de noviembre de 2026.",
  disclaimer:
    "Crewmark es un producto independiente, sin relación con Manus, Meta ni xAI y sin su respaldo. Los nombres de los productos son marcas de sus titulares.",
};
