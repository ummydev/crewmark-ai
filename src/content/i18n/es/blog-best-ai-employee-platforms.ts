import type { GuideCopy } from "@/components/landing/guide-article";

// Spanish translation of /blog/best-ai-employee-platforms; the English master is src/content/blog/best-ai-employee-platforms.ts.

export const copy: GuideCopy = {
  meta: {
    title: "Mejores plataformas de empleados de IA (2026) | Crewmark AI",
    description:
      "Comparamos Lindy, Sintra, Marblism, Artisan, Ema, Devin, el proyecto de código abierto ai-employees y Crewmark: roles, cómo empieza el trabajo, qué modelos usan, planes gratuitos y precios.",
  },
  breadcrumb: "Mejores plataformas de empleados de IA",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-06" },
  hero: {
    kicker: "Blog · Empleados de IA",
    title: "Las mejores plataformas de empleados de IA en 2026, comparadas",
    lead: "Una plataforma de empleados de IA te da agentes de IA configurados como personal: cada uno tiene un rol, trabaja hacia un objetivo y empieza a trabajar sin que tengas que pedírselo cada vez. Todos los productos de esta lista venden esa idea, pero se diferencian en qué trabajos cubren, cómo les llega el trabajo, con qué modelos funcionan y cómo cobran. Comparamos ocho, incluido el nuestro, usando solo lo que publica cada proveedor.",
    cta: "Empezar",
    secondary: "Ir a la comparativa",
    secondaryHref: "#compare",
  },
  sections: [
    {
      kind: "table",
      id: "compare",
      title: "Plataformas de empleados de IA de un vistazo",
      text: [
        "Los precios son los de los planes de entrada que figuraban en la página de precios de cada proveedor el 6 de noviembre de 2026, en dólares estadounidenses. Para saber qué es un empleado de IA y en qué se diferencia de un agente de IA, consulta [qué es un empleado de IA](/ai-employees).",
      ],
      headers: ["Plataforma", "Ideal para", "Cómo empieza el trabajo", "Funciona con", "Opción gratuita", "Pago desde"],
      rows: [
        ["Lindy", "Trabajo de oficina en unas 17 funciones: correo, calendario, ventas, soporte, selección de personal", "Programaciones (Routines), Slack e iMessage, llamadas telefónicas", "Los principales modelos que elige Lindy", "Gratis: $50 en créditos durante 7 días", "$49.99/mes por usuario (Team)"],
        ["Sintra", "Pequeñas empresas: más de 12 asistentes con nombre para soporte, textos, SEO, redes sociales y ventas", "Chateas con un asistente o lanzas una tarea con un clic", "Modelos de Sintra (basados en Claude Sonnet)", "Sin plan gratuito", "$48.50/mes, o menos con plan anual"],
        ["Marblism", "Pequeñas empresas: 7 roles, desde asistente hasta recepcionista y legal", "Fijas un objetivo; trabajan en él cada día y piden aprobación", "No se indica", "Sin plan gratuito", "$24/mes en plan anual, $44 mensual"],
        ["Artisan (Ava)", "Ventas outbound: un representante de desarrollo de negocio (BDR) con IA", "Autónomo, con reglas de aprobación y escalado", "No se indica", "No se indica", "Planes de créditos; reserva una demo"],
        ["Ema", "RR. HH., TI y finanzas en grandes empresas", "Teams, Slack o voz; más de 250 integraciones", "Combinación de más de 100 modelos de Ema", "Prueba gratuita", "Según resultados; sin precio publicado"],
        ["Devin", "Ingeniería de software", "@mención en Slack o Teams, tickets de Linear o Jira, flujos recurrentes", "Modelos de Devin (de varios proveedores)", "Plan gratuito con una cuota reducida", "$20/mes (Pro)"],
        ["ai-employees (código abierto)", "8 roles de negocio como carpetas de rutinas programadas", "Programaciones en el SCHEDULE.md de cada rol", "Tu propio agente: Claude Code, Codex, OpenCode y otros", "Gratis, licencia MIT", "Gratis"],
        ["Crewmark", "Cualquier rol que definas, sobre agentes de programación: ingeniería, SEO, marketing, diseño", "Un heartbeat despierta a cada empleado durante su horario laboral para tomar la siguiente tarea de un tablero", "Tu propia suscripción a Claude Code, Codex, DeepSeek Harness u OpenCode", "Sí: 1 proyecto, hasta 3 empleados", "5 $/mes (Pro, próximamente)"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Cómo elegir una plataforma de empleados de IA",
      steps: [
        {
          title: "Empieza por el trabajo, no por la herramienta",
          text: "Anota un rol y la cifra que debería mover, como reuniones agendadas, clics en Search Console o pull requests fusionadas. Las plataformas creadas para un solo trabajo (Artisan para ventas outbound, Devin para código) suelen superar a las generalistas en ese trabajo.",
        },
        {
          title: "Comprueba cómo empieza el trabajo",
          text: "Un asistente de chat te espera; un empleado de IA empieza por su cuenta. Busca programaciones, disparadores o un heartbeat, y un lugar donde asignar trabajo, como un tablero, tickets o un canal de Slack.",
        },
        {
          title: "Comprueba de quién son los modelos y quién paga la factura",
          text: "La mayoría de las plataformas revenden el uso de modelos en forma de créditos o licencias. Si ya pagas Claude Code o Codex, las herramientas que funcionan con esa suscripción (el proyecto de código abierto ai-employees, Crewmark) añaden poco o ningún coste de modelo.",
        },
        {
          title: "Comprueba cómo pide permiso antes de actuar",
          text: "Un empleado que envía correos, publica o gasta dinero debería preguntar primero. Busca aprobaciones, reglas de escalado y un registro de lo que ha hecho.",
        },
        {
          title: "Prueba un rol durante dos semanas",
          text: "Usa el plan gratuito o la prueba si existe, mide la cifra que anotaste y solo entonces añade más roles.",
        },
      ],
    },
    {
      kind: "text",
      title: "Las plataformas en detalle",
      points: [
        "Lindy: se vende como \"el compañero que rinde por encima de su precio\" (\"the teammate that punches above its price\"). Las Routines se ejecutan según una programación, puedes escribirle por Slack o iMessage, y \"Watch and Learn\" graba una tarea que le enseñas una sola vez. Precios: [lindy.ai/pricing](https://www.lindy.ai/pricing).",
        "Sintra: más de 12 asistentes con nombre, como Cassie para soporte, Seomi para SEO y Soshie para redes sociales, cada uno funciona como un chatbot con el que hablas. Un solo asistente cuesta $39/mes. Precios: [sintra.ai/pricing](https://sintra.ai/pricing).",
        "Marblism: siete empleados de IA (Eva, Sonny, Stan, Walter, Penny, Rachel y Linda) que, una vez fijas un objetivo, \"trabajan en él cada día, por su cuenta\" (\"work toward it every day, on their own\"); los planes incluyen 50 horas de trabajo de IA al mes. Precios: [marblism.com/pricing](https://www.marblism.com/pricing).",
        "Artisan: \"empleados de IA para equipos comerciales\" (\"AI employees for go-to-market teams\"). Ava encuentra leads, los enriquece, redacta los mensajes de prospección, gestiona las respuestas y agenda reuniones, con aprobaciones humanas. Consulta [artisan.co](https://www.artisan.co).",
        "Ema: un \"empleado de IA universal\" (\"Universal AI Employee\") que configuras describiendo su objetivo en lenguaje natural, para RR. HH., TI, finanzas y más. Consulta [ema.ai](https://www.ema.ai).",
        "Devin: \"el ingeniero de software autónomo de tu equipo\" (\"your team's autonomous software engineer\"). Le asignas un ticket y recibes una pull request; Max cuesta $200/mes y Teams $80/mes más $40 por licencia. Precios: [devin.ai/pricing](https://devin.ai/pricing).",
        "ai-employees: un proyecto de GitHub con licencia MIT en el que \"un empleado de IA es una carpeta de rutinas programadas que cubre un rol de negocio\" (\"an AI Employee is a folder of scheduled routines that covers one business role\"), ejecutado por el agente de programación que ya tienes. Consulta [github.com/markfulton/ai-employees](https://github.com/markfulton/ai-employees).",
        "Crewmark: convierte una sesión de Claude Code, Codex, DeepSeek Harness u OpenCode en un empleado con un rol, un objetivo, un horario laboral y un tablero de tareas; comenta sus tareas y te escribe cuando necesita una decisión. Consulta [cómo hacer que Claude Code sea proactivo](/proactive-claude-code).",
      ],
    },
    {
      kind: "text",
      title: "Empleados de IA gratis y de código abierto en GitHub",
      text: [
        "Hay planes gratuitos, pero son pequeños: Lindy da $50 en créditos durante siete días, Devin una cuota reducida y Ema una prueba. La vía del código abierto es gratis en dinero y se paga en tiempo de configuración: proyectos de GitHub como markfulton/ai-employees funcionan con una suscripción de agente que ya tienes, y con un plan Claude Pro o Max consumen los límites de tu plan en lugar de dólares extra.",
        "Si lo que comparas son frameworks de agentes de código abierto en lugar de empleados ya hechos, consulta nuestras comparativas con [CrewAI](/alternatives/crewai), [Paperclip](/alternatives/paperclip) y [Multica](/alternatives/multica).",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Con Crewmark",
      title: "Empleados de IA sobre el agente de programación que ya pagas",
      text: [
        "Crewmark es para equipos cuyo trabajo ya pasa por Claude Code o Codex. En lugar de comprar una IA nueva y sus créditos, le das un trabajo a tu agente actual.",
      ],
      steps: [
        {
          title: "Elige un rol y un objetivo",
          text: "Ingeniero de software, especialista SEO, growth marketer o uno que escribas tú, con un objetivo expresado en cifras.",
        },
        {
          title: "Conecta una sesión",
          text: "Ejecuta un comando de configuración en tu proyecto; el empleado trabaja en una sesión de Claude Code, Codex, DeepSeek Harness u OpenCode en tu máquina, con tu plan.",
        },
        {
          title: "Asigna tareas; el heartbeat hace el resto",
          text: "Durante el horario laboral, el empleado se despierta cada 15, 30 o 60 minutos, toma la siguiente tarea, comenta a medida que avanza y te escribe cuando necesita una decisión.",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Elegir una plataforma de empleados de IA" },
  mid: {
    title: "¿Ya pagas Claude Code o Codex?",
    text: "Crewmark lo convierte en empleados de IA con roles, objetivos, horario laboral y un tablero de tareas, sin una segunda factura de IA.",
    button: "Empezar",
  },
  faq: {
    title: "Preguntas frecuentes sobre plataformas de empleados de IA",
    items: [
      {
        q: "¿Cuál es la mejor plataforma de empleados de IA?",
        a: "Depende del trabajo. Para trabajo de oficina en muchas funciones, Lindy; para marketing y soporte en pequeñas empresas, Sintra o Marblism; para ventas outbound, Artisan; para RR. HH. y TI en grandes empresas, Ema; para código, Devin; y si ya usas Claude Code o Codex, el proyecto de código abierto ai-employees o Crewmark.",
      },
      {
        q: "¿Hay empleados de IA gratis?",
        a: "Algunas plataformas tienen planes gratuitos o pruebas pequeñas: Lindy ($50 en créditos durante 7 días), Devin (una cuota reducida) y Ema (una prueba). Los proyectos de código abierto como markfulton/ai-employees son gratuitos y funcionan con una suscripción de agente que ya tienes.",
      },
      {
        q: "¿Cuánto cuesta un empleado de IA?",
        a: "El 6 de noviembre de 2026, los planes de entrada iban de unos $20 al mes (Devin Pro) a $49.99 por usuario (Lindy Team), con precios a través del equipo de ventas para Artisan y Ema. Las herramientas que funcionan con tu propio plan de Claude Code o Codex añaden poco o ningún coste de modelo.",
      },
      {
        q: "¿Qué diferencia hay entre un empleado de IA y un agente de IA?",
        a: "Un agente de IA hace una tarea cuando se le pide. Un empleado de IA es un agente al que se le da un rol, un objetivo y un horario, de modo que empieza a trabajar por su cuenta y sigue adelante. Más en [qué es un empleado de IA](/ai-employees).",
      },
      {
        q: "¿Puede una pequeña empresa usar empleados de IA?",
        a: "Sí. Sintra y Marblism están pensadas para pequeñas empresas, con empleados con nombre para soporte, redes sociales, SEO y ventas, y precios de unos $24 a $49 al mes.",
      },
      {
        q: "¿Hay empleados de IA de código abierto en GitHub?",
        a: "Sí. markfulton/ai-employees (MIT) empaqueta 8 roles de negocio como rutinas programadas para Claude Code, Codex, OpenCode y otros agentes; otros proyectos son OpenCompany y eggent.",
      },
      {
        q: "¿Cómo contrato a un empleado de IA?",
        a: "Elige un rol y una cifra que deba mover, escoge una plataforma que empiece a trabajar por su cuenta y pregunte antes de hacer algo arriesgado, pruébala durante dos semanas y quédatela solo si la cifra se mueve.",
      },
    ],
  },
  cta: {
    title: "Dale un trabajo al agente que ya pagas.",
    text: "Crewmark convierte las sesiones de Claude Code, Codex y DeepSeek Harness en empleados de IA con roles, objetivos, horario laboral y un heartbeat.",
    button: "Empezar",
  },
  checked: "Comprobado con el sitio web y la página de precios de cada proveedor el 6 de noviembre de 2026. Los precios cambian; sigue los enlaces para ver los actuales.",
  disclaimer:
    "Crewmark es uno de los productos comparados. Los nombres de los productos son marcas de sus titulares; ningún proveedor ha revisado ni respaldado esta página.",
};
