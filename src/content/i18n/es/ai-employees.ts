import type { GuideCopy } from "@/components/landing/guide-article";

// es translation of /ai-employees; the English master is src/content/ai-employees.ts.
export const copy: GuideCopy = {
  meta: {
    title: "¿Qué es un empleado de IA? Ejemplos | Crewmark AI",
    description:
      "Un empleado de IA es un agente con rol, objetivo y horario que toma trabajo de un tablero. Diferencias con un agente de IA, ejemplos y cómo contratarlo.",
  },
  breadcrumb: "Empleados de IA",
  hero: {
    kicker: "Empleados de IA",
    title: "¿Qué es un empleado de IA?",
    lead: "Un empleado de IA es un agente de IA al que le das un trabajo en lugar de un prompt: un rol, un objetivo medido en cifras, un horario y un sitio donde recibir tareas. Se despierta solo, toma la siguiente tarea, informa de su progreso y te pregunta cuando se atasca, como haría una persona recién contratada. Esta guía explica en qué se diferencia de un agente de IA o de un chatbot, muestra ejemplos por rol y te acompaña paso a paso para contratar el primero.",
    cta: "Empezar",
    secondary: "Ver ejemplos",
    secondaryHref: "#examples",
  },
  sections: [
    {
      kind: "text",
      title: "Empleado de IA: definición",
      text: [
        "Un empleado de IA es un agente de IA autónomo preparado para hacer un trabajo continuo, no una tarea suelta. Tiene las mismas piezas que un puesto ocupado por una persona:",
      ],
      points: [
        "Un rol, como especialista SEO o ingeniero de software, que decide en qué trabaja y qué herramientas usa.",
        "Un objetivo en cifras, como un 10% más de clics en Search Console al mes, hacia el que planifica su trabajo.",
        "Un horario y un latido (heartbeat): se despierta según un calendario durante su turno y duerme fuera de él.",
        "Una cola de trabajo, normalmente un tablero de tareas, donde le asignas trabajo y ves su estado.",
        "Una forma de contactarte: pide revisiones, permisos y datos que le faltan en lugar de adivinar.",
      ],
    },
    {
      kind: "table",
      id: "vs-ai-agent",
      title: "Empleado de IA vs. agente de IA vs. chatbot",
      text: [
        "Los tres términos se solapan y cada proveedor los usa a su manera. La diferencia útil es quién inicia el trabajo y cuánto dura.",
      ],
      headers: ["", "Chatbot", "Agente de IA", "Empleado de IA"],
      rows: [
        ["Empieza a trabajar", "Cuando le envías un mensaje", "Cuando le das una tarea", "Por su cuenta, según un horario"],
        ["Alcance", "Una respuesta", "Una tarea, muchos pasos", "Un rol continuo"],
        ["Usa herramientas", "Rara vez", "Sí: archivos, código, navegador, API", "Sí, las mismas que el agente sobre el que funciona"],
        ["Se mide por", "La respuesta", "Si la tarea está hecha", "Un objetivo o KPI a lo largo de semanas"],
        ["Memoria entre ejecuciones", "El historial del chat", "Normalmente ninguna", "Sus tareas, comentarios y notas"],
        ["Cuando se atasca", "Te espera", "Se detiene o adivina", "Te escribe y pasa a otro trabajo"],
      ],
    },
    {
      kind: "text",
      id: "examples",
      title: "Ejemplos de empleados de IA por rol",
      text: [
        "Los empleados de IA funcionan mejor en trabajos cuyo resultado se puede comprobar y cuyo objetivo se puede contar. Seis roles que funcionan bien hoy:",
      ],
      points: [
        "[Especialista SEO](/ai-employees/seo-specialist): encuentra palabras clave que faltan, corrige títulos y enlaces internos, envía sitemaps e informa de qué ha cambiado. Objetivo: clics en Search Console.",
        "[Especialista en crecimiento](/ai-employees/marketing-agent): analiza el embudo, monta tests A/B, redacta textos de anuncios y se queda con las variantes que ganan. Objetivo: registros de prueba.",
        "[Community manager](/ai-employees/social-media-manager): redacta y programa publicaciones, responde a las menciones y aprende qué publicaciones funcionan. Objetivo: seguidores o interacción.",
        "[Ingeniero de software](/ai-employees/software-engineer): toma bugs, abre pull requests con tests y pide revisión. Objetivo: pull requests fusionadas.",
        "[Diseñador de UI](/ai-employees/ui-designer): ordena tipografía, espaciado y componentes en tu código real y revisa el modo oscuro y la accesibilidad. Objetivo: pantallas entregadas.",
        "[Diseñador de UI de apps](/ai-employees/app-designer): diseña pantallas para iOS y Android y las comprueba en el simulador. Objetivo: pantallas de app entregadas.",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Cómo contratar a tu primer empleado de IA",
      steps: [
        {
          title: "Elige un trabajo que tenga una cifra",
          text: "Empieza por un rol cuyos resultados puedas contar y comprobar, como SEO o corrección de bugs. Escribe el objetivo como lo harías para una persona: “un 10% más de clics en Search Console al mes”, no “ayudar con el SEO”.",
        },
        {
          title: "Elige el agente sobre el que funciona",
          text: "Un empleado de IA necesita debajo un agente capaz de leer archivos, ejecutar comandos y usar herramientas. Hoy los más potentes son Claude Code y Codex, y puede funcionar con una suscripción que ya pagas, así que no hay una factura de tokens aparte.",
        },
        {
          title: "Define un horario y un latido",
          text: "Decide cuándo está de servicio y cada cuánto se despierta, por ejemplo cada 30 minutos de 9:00 a 18:00 los días laborables. El latido es lo que lo hace proactivo; mira cómo hacerlo a mano en [Claude Code](/proactive-claude-code) o en [Codex](/proactive-codex), o ejecuta un trabajo puntual con [Claude Code en modo headless](/blog/claude-code-background-agents).",
        },
        {
          title: "Dale un tablero, no un chat",
          text: "Asígnale el trabajo como tareas con estado, prioridad y comentarios. En cada latido el empleado toma la siguiente, la va actualizando y deja un registro que puedes revisar después.",
        },
        {
          title: "Decide qué necesita tu visto bueno",
          text: "Haz una lista de las acciones que puede hacer solo y de las que debe consultarte, como publicar, fusionar, gastar dinero o tocar producción. Apruébalas desde una sola bandeja.",
        },
        {
          title: "Revísalo cada semana frente al objetivo",
          text: "Mira la cifra, lee lo que ha entregado y ajusta su lista de pendientes, como en la reunión individual que tendrías con una persona. Añade un segundo empleado solo cuando el primero esté dando resultados.",
        },
      ],
    },
    {
      kind: "text",
      title: "Cuánto cuesta un empleado de IA",
      text: [
        "Hay dos modelos habituales. Algunas plataformas cobran por empleado y mes y ejecutan el modelo por ti. Otras, como Crewmark, ejecutan el empleado dentro de un agente al que ya estás suscrito, como Claude Code o Codex, así que el coste es el plan que ya tienes.",
        "En cualquier caso cuesta mucho menos que una contratación a tiempo completo, pero no sale gratis en tiempo: cuenta con dedicar unos minutos al día a responder preguntas y revisar su trabajo, sobre todo las primeras semanas.",
        "Para ver precios, planes gratuitos y cómo empieza el trabajo en ocho plataformas lado a lado, consulta [las mejores plataformas de empleados de IA comparadas](/blog/best-ai-employee-platforms).",
      ],
    },
    {
      kind: "text",
      title: "Lo que los empleados de IA no pueden hacer (todavía)",
      points: [
        "Asumir una decisión. Proponen, y una persona responsable sigue aprobando todo lo que tenga riesgo.",
        "Trabajar sin acceso. Un empleado de IA es tan útil como las herramientas, cuentas y contexto que le des.",
        "Sustituir el criterio en trabajos poco definidos. Los roles con objetivos difusos, muchas reuniones o trato con personas siguen necesitando gente.",
        "Funcionar con el ordenador apagado, si trabaja con archivos locales. Las configuraciones en la nube pueden; las locales, no.",
      ],
    },
    {
      kind: "steps",
      kicker: "Con Crewmark",
      title: "Contrata un empleado de IA en Crewmark",
      text: [
        "Crewmark convierte tu agente de Claude Code o Codex en un empleado de IA: un rol, un objetivo, un horario y un latido, con el trabajo asignado en un tablero compartido.",
      ],
      steps: [
        {
          title: "Elige un rol en el Marketplace",
          text: "Los empleados listos para usar llegan con sus habilidades, su objetivo y su horario ya configurados: especialista SEO, especialista en crecimiento, community manager, ingeniero de software, diseñador de UI y diseñador de UI de apps.",
        },
        {
          title: "Conecta el agente que ya pagas",
          text: "Ejecuta el comando de configuración en Claude Code, Codex, DeepSeek Harness u OpenCode. Esa conversación se convierte en el empleado y conserva su memoria entre un despertar y otro.",
        },
        {
          title: "Asígnale tareas y responde a sus mensajes",
          text: "Se despierta con su latido, toma la siguiente tarea, comenta mientras trabaja y te escribe cuando necesita una revisión o un permiso. También puedes seguirlo desde el móvil; consulta [Claude Code Remote Control](/remote-claude-code).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Cómo contratar a tu primer empleado de IA" },
  mid: {
    title: "Contrata uno sin una nueva factura de tokens",
    text: "Crewmark le da a tu agente de Claude Code o Codex un rol, un objetivo y un horario, y lo hace funcionar con el plan que ya pagas.",
    button: "Empezar",
  },
  faq: {
    title: "Preguntas frecuentes sobre empleados de IA",
    items: [
      {
        q: "¿Qué es un empleado de IA?",
        a: "Un agente de IA preparado para hacer un trabajo continuo: tiene un rol, un objetivo en cifras, un horario y una cola de trabajo, empieza por su cuenta según un horario y pregunta a una persona cuando se atasca.",
      },
      {
        q: "¿Qué diferencia hay entre un empleado de IA y un agente de IA?",
        a: "Un agente de IA hace una tarea cuando se la pides. Un empleado de IA es un agente con un rol fijo: empieza a trabajar por su cuenta, mantiene una lista de pendientes y se mide por un objetivo a lo largo de semanas.",
      },
      {
        q: "¿Puede un empleado de IA sustituir a un empleado humano?",
        a: "En trabajos acotados y medibles, como correcciones de SEO o bugs rutinarios, puede encargarse de gran parte de la ejecución. Las decisiones, las relaciones y los problemas poco claros siguen necesitando a una persona, y alguien tiene que revisar su trabajo.",
      },
      {
        q: "¿En qué trabajos son buenos los empleados de IA?",
        a: "En trabajos con resultados comprobables y un objetivo que se pueda contar: SEO, experimentos de crecimiento, publicaciones en redes, corrección de bugs, pulido de UI y pantallas de apps.",
      },
      {
        q: "¿Cuánto cuesta un empleado de IA?",
        a: "Depende del modelo: algunas plataformas cobran por empleado y mes, mientras que Crewmark ejecuta los empleados con el plan de Claude Code o Codex que ya pagas, sin factura de tokens adicional.",
      },
      {
        q: "¿Es seguro darle acceso a un empleado de IA?",
        a: "Dale solo el acceso que necesita su rol y exige tu aprobación para publicar, fusionar, pagar y hacer cambios en producción. Una buena configuración registra cada paso para que puedas revisarlo.",
      },
    ],
  },
  cta: {
    title: "Contrata a tu primer empleado de IA.",
    text: "Dale a tu agente de Claude Code o Codex un rol, un objetivo y un horario, y asígnale trabajo en un tablero.",
    button: "Empezar",
  },
  checked: "Última revisión: 2 de noviembre de 2026.",
  disclaimer:
    "Crewmark es un producto independiente, sin relación con Anthropic ni OpenAI y sin su respaldo. Claude Code es una marca de Anthropic; Codex es una marca de OpenAI.",
};
