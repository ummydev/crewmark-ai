import type { GuideCopy } from "@/components/landing/guide-article";

// es translation of /personal-agent/gemini-spark; the English master is
// src/content/personal-agents/gemini-spark.ts.

const help = "https://support.google.com/gemini/answer/17094507";

const prompts = `Cada mes, el día 3, revisa los extractos de mi tarjeta de crédito en Gmail
por si hay cuotas de suscripción nuevas u ocultas y mándame una lista.

Vigila el buzón del colegio de mi hijo por si hay plazos y manda un resumen diario
a mí y a mi pareja a las 19:00.

Resume en un Google Doc las notas de las reuniones de esta semana del correo y el chat
y redacta el correo de seguimiento. No lo envíes.`;

export const copy: GuideCopy = {
  meta: {
    title: "Gemini Spark (ahora tareas): cómo usarlo, planes y países",
    description:
      "Qué ha pasado con Gemini Spark: el agente personal 24/7 de Google ahora son las tareas de la app de Gemini. Quién puede usarlo (Google AI Pro o Ultra, en qué países), cómo activarlo, horarios, apps conectadas, límites y la app para Mac.",
  },
  breadcrumb: "Gemini Spark",
  parent: { name: "Agentes personales", href: "/personal-agent" },
  hero: {
    kicker: "Agentes personales · Gemini Spark",
    title: "Gemini Spark, ahora tareas en Gemini: cómo usar el agente personal de Google",
    lead: "Google anunció Gemini Spark el 19 de mayo de 2026 como “un agente personal de IA 24/7 diseñado para gestionar tareas de forma proactiva”: trabaja en la nube, sigue funcionando con el portátil cerrado o el móvil bloqueado y usa Gmail, Docs y tus otras apps de Google. El Spark de la beta ahora se llama tareas en la app de Gemini, y por eso parece que el botón de Spark ha desaparecido. Esta guía explica quién puede usarlo, cómo activarlo, los horarios, las apps conectadas, los límites y en qué destaca.",
    cta: "Empezar",
    secondary: "Activarlo",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "¿Qué ha pasado con Gemini Spark?",
      text: [
        "No se ha cerrado nada. El artículo de ayuda de Google ahora llama a la función tareas e indica que “antes se llamaba Spark en la beta”. Se inicia con la opción Task debajo del cuadro de texto de Gemini, y tus tareas y horarios siguen ahí.",
      ],
      points: [
        "Qué es: un agente que funciona con Gemini en la nube, construido sobre Gemini 3.5 y el harness Antigravity de Google en el lanzamiento.",
        "Qué hace: ordena tu bandeja de entrada, vigila precios de vuelos y hoteles, investiga con fuentes citadas, navega para comprar o reservar, y crea PDFs, Docs, Sheets y Slides.",
        "Cuándo trabaja: en segundo plano, según un horario o cuando pasa algo, y pregunta primero antes de acciones de alto riesgo como gastar dinero o enviar correos.",
      ],
    },
    {
      kind: "table",
      id: "who",
      title: "Quién puede usar las tareas de Gemini (Spark)",
      text: ["Según la ayuda de las apps de Gemini de Google el 10 de noviembre de 2026."],
      headers: ["Requisito", "Detalles"],
      rows: [
        ["Plan", "Google AI Pro o Ultra (Google AI Pro cuesta $19.99 al mes en EE. UU.)"],
        ["Cuenta", "Una cuenta de Google personal, mayor de 18 años; las cuentas de trabajo y de centros educativos aún no son compatibles"],
        ["Países", "Donde estén disponibles las apps de Gemini, excepto el Espacio Económico Europeo, Suiza, el Reino Unido y Nigeria"],
        ["Ajuste", "Keep Activity tiene que estar activado"],
        ["Dónde", "La app móvil de Gemini, la app de Gemini para Mac y la app web en gemini.google.com"],
        ["Plan gratuito", "No incluido"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Cómo usar las tareas de Gemini",
      steps: [
        {
          title: "Activa el modo tarea",
          text: "En gemini.google.com, haz clic en Task debajo del cuadro de texto y sigue los pasos en pantalla. Las tareas también funcionan en la app móvil de Gemini y en la app de Gemini para Mac.",
        },
        {
          title: "Conecta las apps que necesita",
          text: "Las tareas pueden usar Gmail, Calendar, Docs, Drive, Keep, Sheets, Slides y Tasks, Google Search, Flights, Hotels y Maps, Contacts, Photos y YouTube, además de apps personalizadas y de terceros. Entre los socios de lanzamiento de Google estaban Canva, OpenTable e Instacart.",
        },
        {
          title: "Describe el trabajo y cuándo hacerlo",
          text: "Pide un trabajo puntual o fija un horario: a una hora concreta o cuando pase algo. Abre el hilo de la tarea y su panel de trabajo para revisar permisos y horarios.",
          code: prompts,
        },
        {
          title: "Aprueba los pasos importantes",
          text: "Gemini pregunta antes de navegar por la web para una tarea (después de que des permiso a Chrome una vez), y antes de enviar mensajes, hacer compras, enviar formularios o iniciar sesión con Google. También se detiene antes de compartir información sensible como datos de salud, financieros o de identidad, aunque hayas elegido “Permitir siempre”.",
        },
      ],
      source: { label: "Fuente: la ayuda de las apps de Gemini de Google sobre las tareas", href: help },
    },
    {
      kind: "text",
      id: "limits",
      title: "Límites, horarios y cómo desactivarlo",
      points: [
        "Pueden ejecutarse hasta 15 tareas a la vez; un horario no se ejecutará si ya hay 15 en marcha.",
        "La ayuda de Google dice que los horarios no se ejecutan mientras el modo tarea está desactivado o tu dispositivo está apagado. Pausa o reanuda los horarios desde el hilo de la tarea o desde la página Scheduled de la app web.",
        "Los límites de uso se basan en el cómputo y son más altos en Ultra que en Pro.",
        "La navegación automática de Chrome solo funciona en escritorio.",
        "Desactívalo en la web en Settings > Task settings (“Use task mode to hand off work”), o en la app para Mac en Gemini > Settings > Tasks. Eso borra el navegador remoto y los datos de código; tus tareas, horarios y archivos se conservan, pero en pausa.",
      ],
    },
    {
      kind: "table",
      id: "use-cases",
      title: "Casos de uso de las tareas de Gemini",
      text: ["Los tres primeros son ejemplos de lanzamiento de la propia Google."],
      headers: ["Caso de uso", "Qué hace"],
      rows: [
        ["Revisión de suscripciones", "Revisa los extractos mensuales de la tarjeta por si hay cuotas de suscripción nuevas u ocultas"],
        ["Resumen del buzón del colegio", "Vigila los plazos y manda un resumen diario a ti y a tu pareja"],
        ["Seguimiento de reuniones", "Resume en un Doc las notas del correo y el chat y redacta el seguimiento"],
        ["Limpieza de la bandeja de entrada", "Archiva newsletters y te da de baja de listas"],
        ["Vigilancia de precios", "Vigila precios de vuelos y hoteles y te avisa cuando bajan"],
        ["Informe de investigación", "Investiga un tema con fuentes citadas y lo entrega como archivo"],
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Tareas de Gemini vs Meta Muse y Grok Bot",
      headers: ["", "Tareas de Gemini (Spark)", "Meta Muse", "Grok Bot"],
      rows: [
        ["Fabricante", "Google", "Meta", "xAI"],
        ["Forma más barata de entrar", "Google AI Pro", "Gratis en EE. UU., límite semanal", "Crédito de prueba gratis; X Premium y superiores"],
        ["Donde más destaca", "Gmail, Docs y las apps de Google", "Recados del día a día, WhatsApp", "Apps de trabajo, equipos de Bots"],
        ["Horarios", "A una hora o ante un evento", "Recordatorios y tareas recurrentes", "Rutinas con horario o disparador"],
        ["No disponible en", "EEE, Suiza, Reino Unido, Nigeria", "Fuera de EE. UU. (pruebas limitadas)", "-"],
        ["Guía", "Esta página", "[Meta Muse](/personal-agent/meta-muse)", "[Grok Bot](/personal-agent/grok-bot)"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Con Crewmark",
      title: "Un agente programado para tu trabajo, no solo para tu bandeja de entrada",
      text: [
        "Las tareas de Gemini se ocupan de las apps de Google de una persona. Crewmark convierte tu propio Claude Code o Codex en un empleado de IA con un rol, un objetivo en cifras, horario laboral y un heartbeat, que toma la siguiente issue de un tablero compartido e informa.",
      ],
      steps: [
        {
          title: "Elige un rol",
          text: "Empieza por un [rol de empleado de IA](/ai-employees), como especialista SEO o ingeniero de software.",
        },
        {
          title: "Fija un horario y un heartbeat",
          text: "Se despierta cada 15 a 240 minutos durante el horario que elijas. Consulta [tareas programadas de Codex](/proactive-codex).",
        },
        {
          title: "Compara agentes personales",
          text: "Consulta [agentes personales de IA comparados](/personal-agent).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Usar las tareas de Gemini" },
  mid: {
    title: "¿Quieres un agente que saque adelante el backlog de tu equipo?",
    text: "Los empleados de Crewmark se despiertan con un heartbeat y toman la siguiente issue de un tablero, con el plan de Claude Code o Codex que ya tienes.",
    button: "Empezar",
  },
  faq: {
    title: "Preguntas frecuentes",
    items: [
      {
        q: "¿Qué ha pasado con Gemini Spark?",
        a: "Google le ha cambiado el nombre. El Spark de la beta ahora se llama tareas en la app de Gemini: elige Task debajo del cuadro de texto. Tus tareas y horarios se mantienen.",
      },
      {
        q: "¿Gemini Spark es gratis?",
        a: "No. Las tareas necesitan una suscripción a Google AI Pro o Ultra en una cuenta de Google personal; Google AI Pro cuesta $19.99 al mes en EE. UU.",
      },
      {
        q: "¿Gemini Spark está disponible en el Reino Unido o en Europa?",
        a: "Todavía no. La ayuda de Google lo da por disponible donde estén las apps de Gemini, excepto el Espacio Económico Europeo, Suiza, el Reino Unido y Nigeria.",
      },
      {
        q: "¿Hay app de Gemini Spark para Mac?",
        a: "Sí, las tareas funcionan en la app de Gemini para Mac, además de en la app móvil y en gemini.google.com.",
      },
      {
        q: "¿Las tareas de Gemini pueden ejecutarse según un horario?",
        a: "Sí, a una hora concreta o cuando pasa algo. Pueden ejecutarse hasta 15 tareas a la vez, y los horarios se pausan mientras el modo tarea está desactivado.",
      },
      {
        q: "Gemini Spark vs Meta Muse: ¿cuál debería usar?",
        a: "Si tu vida gira en torno a Gmail y las apps de Google y pagas Google AI Pro, las tareas de Gemini. Si estás en EE. UU. y quieres algo gratis para empezar, Meta Muse.",
      },
    ],
  },
  cta: {
    title: "Agentes personales para tu bandeja de entrada. Empleados de IA para tu backlog.",
    text: "Crewmark convierte sesiones de Claude Code y Codex en empleados de IA con roles, objetivos, horario laboral y un heartbeat.",
    button: "Empezar",
  },
  checked: "Comprobado con el anuncio de Gemini Spark de Google y la ayuda de las apps de Gemini el 10 de noviembre de 2026.",
  disclaimer:
    "Crewmark es un producto independiente, sin relación con Google, Meta ni xAI y sin su respaldo. Gemini y Google son marcas de Google.",
};
