import type { GuideCopy } from "@/components/landing/guide-article";

// es translation of /personal-agent/base44-superagent; the English master is
// src/content/personal-agents/base44-superagent.ts.

const docs = "https://docs.base44.com/superagents/creating-a-superagent";

const prompts = `Cada mañana a las 7, resume mis correos sin leer, las reuniones de hoy
y los hilos de Slack en los que me mencionan. Mándalo aquí.

Cuando llegue a Gmail un correo de un lead nuevo, redacta un seguimiento personal
y pregúntame antes de enviarlo. Si no responde en tres días, prueba otro enfoque.

Cada viernes a las 17:00, saca las cifras de ventas, soporte y marketing de esta semana
y publica un resumen en #weekly en Slack.`;

export const copy: GuideCopy = {
  meta: {
    title: "Base44 Superagent: precio, créditos, WhatsApp y configuración",
    description:
      "Los Superagents de Base44 explicados: qué puede hacer el agente personal, cómo crear uno, los planes de Base44 y cómo usan los Superagents los créditos de mensajes y de integraciones, cómo conectar WhatsApp, Telegram y Slack, flujos de trabajo, ejemplos y cómo se compara.",
  },
  breadcrumb: "Base44 Superagent",
  parent: { name: "Agentes personales", href: "/personal-agent" },
  hero: {
    kicker: "Agentes personales · Base44",
    title: "Base44 Superagent: qué hace, cuánto cuesta y cómo configurarlo",
    lead: "Un Superagent es el “agente personal de IA que ejecuta tareas por ti 24/7” de Base44. Hablas con él en el navegador o en WhatsApp, Telegram, Slack y otras apps de chat; trabaja con las herramientas que conectes, ejecuta flujos de trabajo según un horario o un disparador, recuerda entre conversaciones e incluso puede hacer llamadas de teléfono. Esta guía explica qué puede hacer, cómo crear uno, cómo funcionan el precio y los créditos, cómo conectar WhatsApp, ejemplos de flujos de trabajo y cómo se compara con otros agentes personales.",
    cta: "Empezar",
    secondary: "Precio y créditos",
    secondaryHref: "#pricing",
  },
  sections: [
    {
      kind: "text",
      title: "Qué es un Base44 Superagent",
      text: [
        "Base44 es conocido sobre todo como creador de apps con IA. Su Superagent es un agente personal aparte que diriges conversando: “Describe lo que quieres y tu Superagent actúa por ti en tus herramientas”. Solo llega a las herramientas y los datos que conectes.",
      ],
      points: [
        "Chat en cualquier sitio: el navegador, WhatsApp, Telegram, Slack, iMessage y LINE. En WhatsApp puede unirse a chats de grupo.",
        "Conectores: Gmail, Google Calendar, Google Drive, Notion, GitHub, Slack y más, además de tu propio servidor MCP. Los conectores compartidos se pueden configurar como de solo lectura.",
        "Flujos de trabajo: trabajos que se ejecutan según un horario o cuando pasa algo en una herramienta conectada.",
        "Memoria: conocimiento, contexto de trabajo y un registro de memoria, compartidos entre conversaciones o separados.",
        "Skills y objetivos: instrucciones reutilizables, y `/goal` para dividir un resultado más grande en tareas que puedes pausar y reanudar.",
        "Voz: habla con él, con pantalla compartida en escritorio. Con un número de teléfono, los flujos programados pueden hacer llamadas.",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Cómo crear un Base44 Superagent",
      steps: [
        {
          title: "Abre Personal Agent",
          text: "Inicia sesión en app.base44.com y haz clic en Personal Agent, dentro de Explore en la barra lateral (o en la pestaña Agent, si tu barra lateral muestra Apps y Agent).",
        },
        {
          title: "Elige dónde hablar con él",
          text: "Elige Continue here para el navegador, o WhatsApp, Telegram o iMessage. Para WhatsApp, escanea el código QR o abre la app con el botón y envía el mensaje ya rellenado; para Telegram, envía el mensaje ya rellenado o pulsa Start.",
        },
        {
          title: "Conecta tus herramientas",
          text: "Abre Plugins en la barra lateral, haz clic en Connect en un conector, elige un conector compartido o de usuario de la app y configúralo como de solo lectura si el agente solo necesita mirar. Añade tu propio servidor MCP con Add Connector.",
        },
        {
          title: "Describe el trabajo",
          text: "Di qué quieres que haga; pon el contexto del rol o del proyecto en el primer mensaje y dale las reglas fijas que debe seguir siempre. Para el trabajo recurrente, describe el horario o el disparador y configurará un flujo de trabajo.",
          code: prompts,
        },
      ],
      source: { label: "Fuente: documentación de Base44, Creating a Superagent", href: docs },
    },
    {
      kind: "table",
      id: "pricing",
      title: "Precio y créditos de Base44 Superagent",
      text: [
        "Los Superagents funcionan con los créditos de tu workspace de Base44. Estos son los planes de Base44 tal como aparecían el 10 de noviembre de 2026, con facturación anual; la página de precios dice que la facturación anual ahorra un 20% y no indica precios mensuales.",
      ],
      headers: ["Plan", "Precio (facturación anual)", "Créditos de mensajes / mes", "Créditos de integraciones / mes"],
      rows: [
        ["Free", "$0", "25", "100"],
        ["Starter", "$16/mes", "100", "2.000"],
        ["Builder", "$40/mes", "250", "10.000"],
        ["Pro", "$80/mes", "500", "20.000"],
        ["Elite", "$160/mes", "1.200", "50.000"],
      ],
    },
    {
      kind: "text",
      id: "credits",
      title: "Cómo usan los créditos los Superagents",
      points: [
        "Créditos de mensajes: cada mensaje que procesa el agente y cada ejecución de un flujo de trabajo, igual que al chatear. Eso incluye los mensajes de WhatsApp, Telegram, Slack, la API y las automatizaciones.",
        "Créditos de integraciones: acciones como generar imágenes, procesar archivos, subir archivos y enlaces de descarga.",
        "Los créditos se renuevan según un calendario fijo, y los que no se usan caducan al renovarse.",
        "Cuando el workspace se queda sin créditos, los flujos de trabajo no pueden ejecutarse. Siguen activados y se reanudan cuando vuelven los créditos, pero las ejecuciones perdidas no se recuperan después.",
        "Revisa el uso en Agent Settings > Credit usage. Un Superagent también puede pausar ejecuciones que entran en bucle, para dejar de gastar créditos.",
        "El plan Free tiene 25 créditos de mensajes al mes. Cada ejecución gasta créditos de mensajes, así que un solo flujo diario (unas 30 ejecuciones al mes) ya necesita más; cuenta con un plan de pago para los flujos diarios.",
      ],
    },
    {
      kind: "steps",
      id: "workflows",
      title: "Flujos de trabajo y ejemplos de Base44 Superagent",
      text: [
        "Describe el trabajo en el chat, o abre Workflows, haz clic en New Workflow y envía uno de los sugeridos al chat. El Superagent determina si es programado o por disparador y pregunta lo que necesita.",
      ],
      steps: [
        {
          title: "Programados",
          text: "Se ejecutan a las horas que fijes: un resumen matinal de correos sin leer, reuniones e hilos de Slack; un cierre del día con la lista de tareas de mañana; una llamada semanal a la consulta del dentista para ver si hay una cita antes (si tu agente tiene número de teléfono).",
        },
        {
          title: "Por disparador",
          text: "Se ejecutan cuando pasa algo: un correo nuevo en Gmail, un cambio en los datos de tu Superagent o actividad en una herramienta conectada, como un recordatorio cuando un correo lleva 24 horas sin leer o un briefing 30 minutos antes de cada reunión.",
        },
        {
          title: "Cuando falla",
          text: "Un flujo de trabajo que falla varias veces seguidas se pausa solo y Base44 te avisa por correo. Revisa la pestaña Activity, corrige la causa (a menudo una integración desconectada), haz clic en Resume y después en Run Now para probarlo.",
        },
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Base44 Superagent vs Meta Muse, Grok Bot y Claude Duet",
      headers: ["", "Base44 Superagent", "Meta Muse", "Grok Bot", "Claude Duet"],
      rows: [
        ["Dónde hablas con él", "Navegador, WhatsApp, Telegram, Slack, iMessage, LINE", "App de Muse, muse.ai, WhatsApp", "Apps de escritorio y móvil, Slack, X", "La app de Claude Duet"],
        ["Horarios", "Flujos programados y por disparador", "Recordatorios y tareas recurrentes", "Rutinas con horario o disparador", "Viene a ti con lo que necesita atención"],
        ["Precio", "Créditos del plan de Base44, desde $16/mes con facturación anual", "Gratis con un límite semanal; Power $20/mes", "Incluido en X Premium y superiores, SuperGrok, planes de Cursor", "Incluido en Claude Pro y superiores, con lista de espera"],
        ["Guía", "Esta página", "[Meta Muse](/personal-agent/meta-muse)", "[Grok Bot](/personal-agent/grok-bot)", "[Claude Duet](/blog/claude-duet)"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Con Crewmark",
      title: "Un Superagent para tus recados, un empleado de IA para tu backlog",
      text: [
        "Un Base44 Superagent gira en torno a las herramientas y los chats de una persona. Crewmark gira en torno a un trabajo: convierte tu propio Claude Code o Codex en un empleado de IA con un rol, un objetivo en cifras, horario laboral y un heartbeat, que toma la siguiente issue de un tablero compartido, sin créditos que comprar aparte del plan de agente que ya tienes.",
      ],
      steps: [
        {
          title: "Elige un rol",
          text: "Empieza por un [rol de empleado de IA](/ai-employees): ingeniero, especialista SEO, agente de marketing, social media manager, diseñador.",
        },
        {
          title: "Ejecútalo con el plan que ya tienes",
          text: "Crewmark funciona dentro de tu propio Claude Code o Codex. Consulta los [precios](/pricing).",
        },
        {
          title: "Compara más agentes",
          text: "Consulta [agentes personales de IA comparados](/personal-agent) y [qué es un superagente](/blog/superagent).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Crear un Base44 Superagent" },
  mid: {
    title: "¿Quieres un agente con un trabajo, sin comprar créditos?",
    text: "Los empleados de Crewmark funcionan dentro del plan de Claude Code o Codex que ya pagas y avanzan por un tablero compartido.",
    button: "Empezar",
  },
  faq: {
    title: "Preguntas frecuentes",
    items: [
      {
        q: "¿Qué es un Base44 Superagent?",
        a: "El agente personal de IA de Base44 que ejecuta tareas por ti 24/7. Chateas con él en el navegador o en WhatsApp, Telegram, Slack y otras apps; trabaja con las herramientas que conectes y ejecuta flujos de trabajo programados o por disparador.",
      },
      {
        q: "¿Cuánto cuesta un Base44 Superagent?",
        a: "Usa los créditos de tu plan de Base44. Con facturación anual, los planes son Starter $16, Builder $40, Pro $80 y Elite $160 al mes, con de 100 a 1.200 créditos de mensajes; el plan Free tiene 25 créditos de mensajes al mes.",
      },
      {
        q: "¿Cómo funcionan los créditos de Base44 Superagent?",
        a: "Cada mensaje que procesa y cada ejecución de un flujo de trabajo gasta créditos de mensajes; acciones como generar imágenes y procesar archivos gastan créditos de integraciones. Los créditos se renuevan según un calendario, los que no se usan caducan y los flujos dejan de ejecutarse mientras no te quedan.",
      },
      {
        q: "¿Cómo conecto un Base44 Superagent a WhatsApp?",
        a: "Al crearlo, elige WhatsApp y escanea el código QR o abre WhatsApp con el botón, y después envía el mensaje ya rellenado. También puedes conectar un número de WhatsApp para que pueda trabajar en chats de grupo.",
      },
      {
        q: "¿Qué puede hacer un Base44 Superagent?",
        a: "Ordenar tu bandeja de entrada durante la noche, hacer seguimiento de leads, vigilar precios de vuelos, reservar en un restaurante y avisar a un amigo, publicar las cifras semanales en Slack, reorganizar tu calendario, llevar el grupo de WhatsApp de un proyecto y, con un número de teléfono, hacer llamadas programadas.",
      },
      {
        q: "¿Qué alternativas hay a los Base44 Superagents?",
        a: "Meta Muse (gratis en EE. UU.), Grok Bot (para equipos de agentes en el trabajo), ChatGPT dots y Claude Duet (con los planes Pro), Manus Cue, y OpenClaw o Hermes Agent, de código abierto. Consulta [agentes personales de IA comparados](/personal-agent).",
      },
    ],
  },
  cta: {
    title: "Recados para un Superagent. Un trabajo para un empleado de IA.",
    text: "Crewmark convierte sesiones de Claude Code y Codex en empleados de IA con roles, objetivos, horario laboral y un heartbeat.",
    button: "Empezar",
  },
  checked: "Comprobado con la documentación de Base44, su página de Superagents y su página de precios el 10 de noviembre de 2026.",
  disclaimer:
    "Crewmark es un producto independiente, sin relación con Base44, Wix, Meta, xAI ni Anthropic y sin su respaldo. Los nombres de los productos son marcas de sus titulares.",
};
