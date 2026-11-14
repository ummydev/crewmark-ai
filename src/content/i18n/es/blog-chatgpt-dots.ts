import type { GuideCopy } from "@/components/landing/guide-article";

// Spanish translation of /blog/chatgpt-dots; the English master is src/content/blog/chatgpt-dots.ts.

const announcement = "https://openai.com/index/introducing-dots/";

export const copy: GuideCopy = {
  meta: {
    title: "ChatGPT dots: qué son, cómo usarlos y precio | Crewmark AI",
    description:
      "Los dots de ChatGPT son los agentes siempre activos de OpenAI. Qué hacen, qué planes los incluyen, cómo configurarlos, sus reglas, límites y alternativas.",
  },
  breadcrumb: "ChatGPT dots",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-02" },
  hero: {
    kicker: "Blog · ChatGPT",
    title: "ChatGPT dots: qué son y cómo usarlos",
    lead: "Los dots son agentes siempre activos dentro de ChatGPT, anunciados en el OpenAI DevDay el 29 de septiembre de 2026. Cada dot tiene su propio ordenador en la nube y su propio navegador, se conecta a tus apps, aprende de tus comentarios y sigue trabajando en tus objetivos mientras no estás. Esta guía explica quién puede tener uno, cuánto cuesta, cómo configurarlo, las reglas que lo mantienen bajo control y lo que todavía no hace.",
    cta: "Empezar",
    secondary: "Ir a la configuración",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "Qué son los dots de ChatGPT",
      text: [
        "OpenAI describe los dots como «agentes siempre activos y notablemente capaces, creados para encargarse de todo». Un dot funciona con GPT-6 Astra y trabaja en su propio ordenador en la nube con su propio navegador, usando las apps que conectes. Hablas con él en ChatGPT en escritorio, web o móvil, en Slack y Teams, por voz en la app móvil y, en una beta en EE. UU. para Pro, por mensaje de texto.",
      ],
      points: [
        "Trabaja cuando tú no: con acceso de solo lectura a tus apps conectadas, busca formas de ayudarte, y ejecuta recordatorios programados y comprobaciones periódicas.",
        "Lleva varios proyectos a la vez y te informa con avances, preguntas y decisiones que necesitan de ti.",
        "Recuerda: empieza con tus memorias de ChatGPT y aprende tus preferencias a medida que trabajáis juntos.",
        "Escribe código delegando: un dot puede iniciar tareas de Codex, que cuentan para tus límites de Codex.",
        "Puedes verlo trabajar: abre el ordenador del dot en cualquier momento, toma el control y devuélveselo.",
      ],
    },
    {
      kind: "table",
      title: "Quién puede usar los dots y cuánto cuestan",
      text: [
        "Tu primer dot está incluido sin coste adicional en los planes de abajo. Durante el primer mes tras el lanzamiento, el uso de dots no contaba para los límites del plan; OpenAI dice que después publicará las condiciones de uso por plan, y no lo había hecho cuando lo comprobamos. Está anunciada la compra de más dots o de más trabajo por dot, todavía sin precios.",
      ],
      headers: ["Plan", "Dots", "Notas"],
      rows: [
        ["Free, Go, Plus, Business", "No", "No incluido"],
        ["Pro (Pro 100, Pro 200, Pro 500)", "Sí, en despliegue", "No disponible en el EEE, Suiza ni el Reino Unido"],
        ["Business Premium", "Sí, en despliegue", "Regiones compatibles, según la elegibilidad del espacio de trabajo"],
        ["Enterprise, Edu, Healthcare", "Beta", "Desactivado hasta que un administrador del espacio de trabajo lo active"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Cómo configurar tu primer dot",
      text: ["Debes tener 18 años o más. El despliegue es gradual, así que el acceso puede tardar unos días en llegar a tu cuenta."],
      steps: [
        {
          title: "Abre dots",
          text: "Ve a chatgpt.com/dots, o abre dots en la app de escritorio de ChatGPT, en la web de escritorio o en la app móvil de iOS o Android.",
        },
        {
          title: "Crea tu dot y ponle nombre",
          text: "Sigue la configuración inicial: dale un nombre, que se convierte en su identificador (@yourname-agentname), y elige un avatar. Puedes cambiar ambos más tarde desde su perfil.",
        },
        {
          title: "Conecta tus apps",
          text: "En el perfil del dot, abre Customize y luego Plugins, elige una app y revisa los permisos que pide. Conecta Slack desde el escritorio. Un dot puede usar una cuenta de correo personal que conectes, pero todavía no puede tener su propia dirección de correo.",
        },
        {
          title: "Define reglas personalizadas",
          text: "En Customize, Custom rules, elige para cada tipo de acción si el dot debe actuar sin preguntar, actuar solo si lo has aprobado de antemano en tu prompt, preguntar antes de actuar o pasarte el control a ti.",
        },
        {
          title: "Dale un objetivo",
          text: "Describe el resultado que quieres y comparte contexto; adjunta archivos con + y responde en el hilo para guiarlo. Pídele recordatorios o comprobaciones periódicas y gestiónalos en Scheduled.",
        },
        {
          title: "Síguelo, páusalo o elimínalo",
          text: "El perfil muestra el trabajo In progress, Scheduled y Completed. Pausa el dot desde el menú ••• cuando lo necesites. Eliminarlo borra sus memorias y tareas programadas, y no se puede deshacer.",
        },
      ],
      source: { label: "Fuente: anuncio de los dots de OpenAI", href: announcement },
    },
    {
      kind: "text",
      title: "Seguridad: lo que un dot hará y no hará por su cuenta",
      points: [
        "Cambiar una contraseña o enviar dinero siempre requiere que tomes el control y lo hagas tú.",
        "Borrar datos de forma permanente o instalar software puede requerir tu aprobación cada vez.",
        "Auto-review comprueba las acciones arriesgadas, como a quién va dirigido un correo, frente a tus instrucciones y reglas, y tus reglas personalizadas no pueden desactivarlo.",
        "Un dot puede comprar con una tarjeta guardada en la web de un comercio, pero solo con tu aprobación cada vez o con una aprobación específica por adelantado.",
        "Tu propio ordenador queda aparte salvo que lo conectes con Allow access en la app de escritorio de ChatGPT; está desactivado por defecto.",
        "OpenAI dice que sus protecciones contra la inyección de prompts reducen el riesgo, pero no lo eliminan, y que algunas acciones completadas no se pueden deshacer.",
      ],
    },
    {
      kind: "text",
      title: "Lo que los dots todavía no hacen",
      points: [
        "Tienes un dot principal; los equipos de dots se describen como una dirección futura.",
        "Un dot no tiene dirección de correo propia, no puede llamarte y no funciona en la web móvil.",
        "No hay webhooks ni disparadores de eventos para iniciarlo; trabaja a partir de tus mensajes, sus programaciones y su propia investigación de solo lectura.",
        "No puedes ver, editar ni borrar memorias individuales; eliminar el dot es la única forma de borrar lo que ha aprendido.",
        "Los usuarios de Plus no tienen dots, y los usuarios de Pro en el EEE, Suiza y el Reino Unido tampoco.",
      ],
    },
    {
      kind: "table",
      title: "ChatGPT dots vs Grok Bot vs Crewmark",
      text: [
        "xAI anunció Grok Bot en agosto de 2026 como «tu equipo de agentes siempre activos» con su propio ordenador. Crewmark sigue otro camino: en lugar de un agente nuevo en la nube de otro, convierte el agente de programación que ya usas en un empleado en tu propio ordenador.",
      ],
      headers: ["", "ChatGPT dots", "Grok Bot", "Crewmark"],
      rows: [
        ["Dónde se ejecuta", "Ordenador en la nube de OpenAI", "Su propio ordenador, según xAI", "Tu ordenador, dentro de Claude Code o Codex"],
        ["Modelo", "GPT-6 Astra", "Grok", "El que use tu Claude Code o Codex"],
        ["Cuántos", "Un dot principal", "Varios, que pueden escribirse entre sí", "Un empleado por rol, tantos como configures"],
        ["Qué lo pone a trabajar", "Tus mensajes, programaciones, su propia investigación", "Aprende rutinas viéndote trabajar", "Un latido (heartbeat) cada 15–60 minutos en horario laboral"],
        ["Cola de trabajo", "Hilos de conversación y Scheduled", "No documentado", "Tareas en un tablero kanban"],
        ["Objetivo", "Objetivos que describes", "No documentado", "Un KPI en números, como +10% de clics al mes"],
        ["Planes", "Pro, Business Premium, beta en Enterprise", "Planes SuperGrok y Cursor, beta", "Registro abierto; funciona con tu plan actual de Claude o ChatGPT"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Con Crewmark",
      title: "¿Ya pagas Claude Code o Codex? Haz que esté siempre activo",
      text: [
        "Si tu trabajo continuo está en un código o en una web, no necesitas un agente nuevo. Crewmark le da a la sesión de Claude Code o Codex que ya usas un rol, un objetivo y un horario, y la despierta con un latido (heartbeat) para que tome la siguiente tarea de un tablero.",
      ],
      steps: [
        {
          title: "Convierte una sesión en un empleado",
          text: "Elige un rol, como especialista SEO o ingeniero de software, escribe su objetivo como un número y ejecuta el comando de configuración en Claude Code o Codex.",
        },
        {
          title: "Deja que el latido lo mantenga trabajando",
          text: "Durante su horario, el empleado se despierta cada 15, 30 o 60 minutos en la misma conversación, así que recuerda lo que hizo; mira [cómo hacer proactivo Claude Code](/proactive-claude-code).",
        },
        {
          title: "Asigna tareas y responde a sus mensajes",
          text: "Pon el trabajo en el tablero; el empleado lo recoge, comenta sobre la marcha y te escribe cuando se bloquea. Lee [qué es un empleado de IA](/ai-employees).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Configura tu primer dot de ChatGPT" },
  mid: {
    title: "¿Quieres un agente siempre activo para tu código?",
    text: "Crewmark mantiene tu sesión de Claude Code o Codex trabajando con un latido, con el plan que ya pagas.",
    button: "Empezar",
  },
  faq: {
    title: "Preguntas frecuentes sobre ChatGPT dots",
    items: [
      {
        q: "¿Qué son los dots de ChatGPT?",
        a: "Agentes siempre activos en ChatGPT, anunciados el 29 de septiembre de 2026. Cada dot funciona con GPT-6 Astra con su propio ordenador en la nube y su propio navegador, se conecta a tus apps, aprende de tus comentarios y sigue trabajando en tus objetivos.",
      },
      {
        q: "¿Cuánto cuestan los dots de ChatGPT?",
        a: "Tu primer dot está incluido en Pro y Business Premium sin coste adicional. OpenAI planea vender más dots y más trabajo por dot, pero no ha publicado precios ni las condiciones de uso para después del mes de lanzamiento.",
      },
      {
        q: "¿Puedo usar dots con ChatGPT Plus?",
        a: "No. Los dots no están incluidos en Free, Go, Plus ni en el plan Business estándar. Se están desplegando en Pro y Business Premium, y están en beta para Enterprise, Edu y Healthcare.",
      },
      {
        q: "¿Cómo se usa un dot de ChatGPT?",
        a: "Abre chatgpt.com/dots, crea tu dot y ponle nombre, conecta apps en Customize, define reglas personalizadas sobre lo que puede hacer sin preguntar y dale un objetivo. Sigue su trabajo en su perfil, en In progress, Scheduled y Completed.",
      },
      {
        q: "¿Qué diferencia hay entre ChatGPT dots y Grok Bot?",
        a: "Ambos son agentes siempre activos con su propio ordenador. Un dot funciona con GPT-6 Astra y en el lanzamiento tienes uno; Grok Bot de xAI es un equipo de agentes que pueden escribirse entre sí, en beta para SuperGrok y algunos planes de Cursor.",
      },
      {
        q: "¿Los dots de ChatGPT pueden escribir código?",
        a: "Sí, delegando en Codex: un dot puede iniciar tareas de Codex en la nube, o tareas locales de Codex si conectas tu ordenador, y esas tareas cuentan para tus límites de Codex.",
      },
    ],
  },
  cta: {
    title: "Haz que el agente que ya usas esté siempre activo.",
    text: "Crewmark convierte las sesiones de Claude Code y Codex en empleados de IA con roles, objetivos, horarios y un latido.",
    button: "Empezar",
  },
  checked:
    "Comprobado con el anuncio, el centro de ayuda, las notas de versión y la página de precios de OpenAI el 2 de noviembre de 2026.",
  disclaimer:
    "Crewmark es un producto independiente, sin relación con OpenAI, xAI ni Anthropic y sin su respaldo. ChatGPT es una marca de OpenAI, Grok de xAI y Claude Code de Anthropic.",
};
