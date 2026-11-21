import type { GuideCopy } from "@/components/landing/guide-article";

// es translation of /personal-agent/grok-bot-routines; the English master is
// src/content/personal-agents/grok-bot-routines.ts.

const docs = "https://docs.x.ai/grok-bot/skills-routines-and-automations";

const prompts = `# Pídeselo al Bot que debe encargarse del trabajo, en su chat
Configura una rutina para ordenar mi Gmail de la noche cada día laborable a las 7:00,
redactar respuestas a lo urgente y mandarme la lista. No envíes nada.

Configura una rutina cada domingo a las 18:00: revisa el Google Calendar de la semana que viene,
señala los conflictos y los días sobrecargados, y mándame un plan para el lunes.

Configura una rutina cada 2 horas los días laborables: revisa el canal #launch de Slack
por si hay preguntas sobre precios y redacta respuestas para que yo las apruebe.`;

const webhook = `# Copia "POST to" y "key" de la sección Webhook de la rutina (escritorio)
curl -X POST "https://<POST to URL from the routine>" \\
  -H "Authorization: Bearer <key>" \\
  -H "Content-Type: application/json" \\
  -d '{"order": "1042", "status": "refund requested"}'

# 200 = ha empezado una ejecución (mira el resultado en el chat del Bot)
# cualquier otra cosa = no ha empezado ninguna ejecución`;

export const copy: GuideCopy = {
  meta: {
    title: "Rutinas de Grok Bot: horarios, webhooks y soluciones",
    description:
      "Cómo configurar rutinas de Grok Bot: horarios descritos con palabras, zonas horarias, ejecuciones de prueba, disparadores por webhook y Slack, los límites (50 rutinas, 5 minutos, 300 ejecuciones por hora) y qué revisar cuando una rutina no se ejecuta.",
  },
  breadcrumb: "Rutinas de Grok Bot",
  parent: { name: "Agentes personales", href: "/personal-agent" },
  hero: {
    kicker: "Agentes personales · Grok Bot",
    title: "Rutinas de Grok Bot: cómo programar un Bot, dispararlo con un webhook y arreglarlo",
    lead: "Una rutina le dice a un Grok Bot cuándo ejecutar un trabajo: según un horario, como cada día laborable a las 8:00, o cuando pasa algo, como una mención en Slack o una llamada a un webhook. Como los Bots trabajan en un ordenador en la nube, las rutinas se ejecutan con el portátil cerrado. Esta guía explica cómo crear una rutina en el escritorio y en el móvil, cómo redactar horarios que funcionen, los webhooks y los disparadores por eventos, los límites, ideas de rutinas sacadas de los ejemplos de xAI y qué revisar cuando una rutina no se ejecuta.",
    cta: "Empezar",
    secondary: "Crear una rutina",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "Qué es una rutina de Grok Bot",
      text: [
        "En palabras de xAI, una rutina “le dice a un Bot cuándo ejecutar un flujo de trabajo: según un horario o cuando pasa algo”. Pertenece a un Bot, usa la memoria y las skills de ese Bot y publica sus resultados en el chat del Bot.",
      ],
      points: [
        "Horarios: frases sencillas como “every weekday at 8:00 AM” o “every 2 hours”, en la zona horaria configurada en Settings.",
        "Eventos: un disparador de Slack; un evento de GitHub, Linear, Sentry o PagerDuty; un correo a la dirección propia del Bot; o una llamada a un webhook.",
        "Una rutina nueva no se ejecuta al crearla. Espera a su siguiente hora programada; usa Test para ejecutarla ya.",
        "Las rutinas se ejecutan en el ordenador en la nube del Bot, así que siguen funcionando con el portátil cerrado.",
        "Cada ejecución, incluidas las de prueba, consume tu uso de Grok Bot.",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Cómo crear una rutina en Grok Bot",
      steps: [
        {
          title: "Pídeselo al Bot que debe encargarse del trabajo",
          text: "En el escritorio, abre el chat de ese Bot y describe el trabajo y cuándo debe ejecutarse. Di de dónde sale la información, qué resultado quieres, qué necesita tu aprobación y qué hacer si falta una fuente. En el móvil, abre el perfil del Bot, toca Add routine en Routines y completa el mensaje que empieza por “Set up a routine to”.",
          code: prompts,
        },
        {
          title: "Revisa “When to run” y la zona horaria",
          text: "Abre la rutina y lee When to run para confirmar el horario guardado; si está mal, elige Edit y describe la corrección. La zona horaria está en Settings, en Bot, en el campo Timezone. La detección automática usa la zona de tu ordenador, así que elige una fija si el trabajo corresponde a otro lugar.",
        },
        {
          title: "Pruébala una vez",
          text: "En el escritorio, abre la rutina y elige Test. Muestra Running… hasta que termina la ejecución, y el resultado aparece en el chat del Bot. Las pruebas hacen trabajo real, como cambiar archivos o usar webs, así que deja todo lo que escriba o envíe detrás de tu aprobación. Si una rutina no tiene botón Test, pídele al Bot que haga el trabajo una vez en el chat con datos seguros.",
        },
        {
          title: "Pausar, reanudar o borrar",
          text: "En el escritorio, haz clic en el nombre del Bot, abre Details y usa el interruptor de la fila de la rutina, o abre la rutina y elige Pause o Resume. En el móvil, abre la rutina desde el perfil del Bot y desactiva Active; desliza la fila para borrarla. Borrar no se puede deshacer.",
        },
      ],
      source: { label: "Fuente: documentación de Grok Bot de xAI, Skills and routines", href: docs },
    },
    {
      kind: "steps",
      id: "webhook",
      title: "Cómo disparar una rutina con un webhook",
      text: [
        "Un webhook permite que otro servicio inicie una rutina, por ejemplo tu tienda cuando se solicita un reembolso, o un formulario cuando alguien se registra.",
      ],
      steps: [
        {
          title: "Añade el disparador",
          text: "Pídele al Bot que añada un disparador de webhook a la rutina.",
        },
        {
          title: "Copia la URL y la clave",
          text: "En el escritorio, abre la rutina y busca su sección Webhook: POST to (la URL), key (el secreto) y header (la cabecera Authorization completa). Haz clic en un campo para copiarlo.",
          code: webhook,
        },
        {
          title: "Envía un POST y lee la respuesta",
          text: "Envía un HTTP POST con la clave como `Authorization: Bearer <key>`. Puedes incluir un cuerpo JSON; el Bot lo recibe junto con las instrucciones de la rutina. Un 200 significa que ha empezado una ejecución, no que haya terminado. Cualquier otra respuesta significa que no ha empezado ninguna: comprueba que la rutina no esté en pausa y que usas la clave actual.",
        },
      ],
    },
    {
      kind: "text",
      id: "events",
      title: "Disparadores de Slack, GitHub y otros eventos",
      points: [
        "Slack: se activa cuando mencionan al Bot, cuando aparece una palabra o frase, cuando alguien reacciona a un mensaje o con cualquier mensaje, en un canal o en todo Slack. Conecta antes Slack en la cuenta de Cursor a la que pertenece el Bot.",
        "GitHub, Linear, Sentry y PagerDuty: inicia una rutina a partir de un evento en esas herramientas; estos disparadores funcionan a través de las integraciones de la cuenta de Cursor y puede que necesiten su propia conexión.",
        "Correo: una rutina puede empezar con un correo enviado a la dirección propia del Bot.",
        "Solo la actividad nueva inicia una ejecución. Mantén los disparadores acotados: vigilar cada mensaje de un canal con mucho movimiento consume el uso muy rápido.",
      ],
    },
    {
      kind: "table",
      id: "limits",
      title: "Límites de las rutinas de Grok Bot",
      headers: ["Límite", "Valor"],
      rows: [
        ["Rutinas por Bot", "Hasta 50"],
        ["Horario más corto", "5 minutos entre ejecuciones"],
        ["Ejecuciones por hora, todas las rutinas juntas", "Hasta 300"],
        ["Ejecuciones por hora, una rutina", "Hasta 200"],
        ["Historial de ejecuciones guardado", "Las 20 ejecuciones más recientes por rutina"],
        ["Por encima de un límite de frecuencia", "La ejecución falla con “Automation run rate limit exceeded”"],
        ["Tras una ausencia larga", "Grok Bot puede preguntarte si mantener las rutinas en marcha, y las pausa si no respondes"],
      ],
    },
    {
      kind: "text",
      id: "not-working",
      title: "¿Las rutinas de Grok Bot no funcionan? Qué revisar",
      points: [
        "Nunca se ha ejecutado: una rutina nueva espera a su siguiente hora programada. Elige Test para ejecutarla ya.",
        "Está en pausa: en el escritorio el interruptor de la fila está apagado; en el móvil Active está desactivado. Grok Bot también puede pausar rutinas por su cuenta cuando llevas tiempo sin aparecer.",
        "Hora equivocada: lee When to run y después revisa el Timezone en Settings > Bot. La detección automática sigue al ordenador en el que estás.",
        "Un disparador de Slack no se activó: el mensaje tiene que ser nuevo, estar en el canal vigilado y contener la frase que coincide.",
        "El webhook no inició una ejecución: cualquier respuesta distinta de 200 significa que no. Comprueba que la rutina no esté en pausa y que la clave sea la actual.",
        "Una ejecución falló por un límite de frecuencia: acota el disparador o amplía el horario y vuelve a ejecutarla con Test o enviando de nuevo el webhook. xAI también recoge como problema conocido los fallos por un límite compartido de Grok Bot; esos no se reintentan automáticamente.",
        "Se ha acabado el uso: cada ejecución consume tu uso semanal. Pausa las rutinas que no necesites y amplía los horarios. En The X Subscription, el uso extra sale del crédito prepago; en los planes antiguos de Cursor, del uso bajo demanda si está activado.",
        "“Sync failed”: la documentación de rutinas de xAI no describe este error. Abre la rutina, revisa su horario y su disparador, y ejecuta Test; si sigue fallando, contacta con el soporte de Grok Bot desde la app.",
      ],
    },
    {
      kind: "table",
      id: "ideas",
      title: "Ideas de rutinas sacadas de los ejemplos de xAI",
      text: ["Salen de los casos de uso de la documentación de xAI; cada una prepara el trabajo y espera tu aprobación antes de que salga nada."],
      headers: ["Rutina", "Cuándo", "Qué hace"],
      rows: [
        ["Resumen matinal", "Cada mañana", "Resume los cambios de la noche en tus apps y redacta un post para el equipo"],
        ["Gestor de la bandeja de entrada", "Por la noche", "Ordena Gmail por urgencia y redacta respuestas a los hilos urgentes sin enviarlas"],
        ["La semana que viene", "Domingo por la tarde", "Revisa Google Calendar, señala conflictos y manda un plan para el lunes"],
        ["Notas de reuniones", "Cada tarde", "Saca las tareas con sus responsables de las notas de Granola y redacta un post de Slack"],
        ["Actualizaciones de proyecto", "Los viernes", "Redacta actualizaciones de avance en Notion y las añade tras tu aprobación"],
        ["Equipo de campaña", "Lunes, 9:00", "Saca los datos de registros, redacta el contenido del lanzamiento y lo contrasta con las cifras"],
        ["Inteligencia competitiva", "Semanal", "Informa de los lanzamientos y cambios de precio de la competencia, con enlaces"],
        ["Cierre de mes", "Día 1 de cada mes", "Cuadra facturas, concilia gastos y lista las excepciones para su visto bueno"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Con Crewmark",
      title: "Rutinas también para tu agente de código",
      text: [
        "Las rutinas de Grok Bot encajan con el trabajo que vive en Gmail, Slack y Notion. Si el trabajo vive en un repositorio de código, Crewmark le da a tu propio Claude Code o Codex el mismo ritmo: un empleado de IA con un rol, un objetivo en cifras, horario laboral y un heartbeat que lo despierta para tomar la siguiente issue de un tablero.",
      ],
      steps: [
        {
          title: "Contrata un empleado en tu agente",
          text: "Ejecuta el comando de configuración en una conversación de Claude Code o Codex; esa conversación se convierte en el empleado. Consulta [qué es un empleado de IA](/ai-employees).",
        },
        {
          title: "Fija un horario y un heartbeat",
          text: "Se despierta cada 15 a 240 minutos durante el horario que elijas, incluso de noche. Consulta [cómo hacer que Claude Code sea proactivo](/proactive-claude-code) y [tareas programadas de Codex](/proactive-codex).",
        },
        {
          title: "Compara agentes personales",
          text: "Consulta la [guía de Grok Bot](/personal-agent/grok-bot) y [agentes personales de IA comparados](/personal-agent).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Crear una rutina de Grok Bot" },
  mid: {
    title: "¿Quieres la misma rutina para un agente de código?",
    text: "Crewmark despierta tu Claude Code o Codex con un heartbeat durante el horario laboral y le entrega la siguiente issue.",
    button: "Empezar",
  },
  faq: {
    title: "Preguntas frecuentes",
    items: [
      {
        q: "¿Cómo programo una rutina en Grok Bot?",
        a: "Pídele al Bot que debe encargarse del trabajo, en su chat, que configure una rutina y dile cuándo, por ejemplo “every weekday at 8:00 AM”. En el móvil, abre el perfil del Bot y toca Add routine. Después abre la rutina y revisa When to run y tu zona horaria.",
      },
      {
        q: "¿Por qué no se ejecuta mi rutina de Grok Bot?",
        a: "Normalmente está esperando su primera hora programada, está en pausa o la zona horaria no es la correcta. Ejecuta Test para comprobar que funciona, asegúrate de que Active está activado y lee When to run. Las llamadas al webhook que no reciben un 200 no inician ninguna ejecución.",
      },
      {
        q: "¿Cómo disparo una rutina de Grok Bot con un webhook?",
        a: "Pídele al Bot que añada un disparador de webhook, copia la URL y la clave de la sección Webhook de la rutina en el escritorio y envía un HTTP POST con `Authorization: Bearer <key>`. Un cuerpo JSON se le pasa al Bot.",
      },
      {
        q: "¿Con qué frecuencia puede ejecutarse una rutina de Grok Bot?",
        a: "Como mucho cada cinco minutos. Cada rutina puede ejecutarse hasta 200 veces por hora y todas juntas hasta 300, y un Bot puede tener hasta 50 rutinas.",
      },
      {
        q: "¿Se ejecutan las rutinas con el ordenador apagado?",
        a: "Sí. Los Bots trabajan en un ordenador en la nube, así que las ejecuciones programadas y por disparador siguen con el portátil cerrado, y el Bot te avisa cuando termina.",
      },
      {
        q: "¿Las rutinas de Grok Bot consumen uso?",
        a: "Sí. Cada ejecución, incluidas las de Test, consume tu uso de Grok Bot, y los horarios frecuentes o los disparadores de Slack con mucho movimiento son lo que más gasta.",
      },
    ],
  },
  cta: {
    title: "Dale a tu agente de código un horario y un trabajo.",
    text: "Crewmark convierte sesiones de Claude Code y Codex en empleados de IA con roles, objetivos, horario laboral y un heartbeat.",
    button: "Empezar",
  },
  checked: "Comprobado con la documentación de Grok Bot de xAI y la página de planes de Grok Bot de Cursor el 10 de noviembre de 2026.",
  disclaimer:
    "Crewmark es un producto independiente, sin relación con xAI, SpaceX, X ni Cursor y sin su respaldo. Grok es una marca de su titular.",
};
