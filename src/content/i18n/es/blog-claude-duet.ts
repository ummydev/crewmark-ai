import type { GuideCopy } from "@/components/landing/guide-article";

// Spanish translation of /blog/claude-duet; the English master is src/content/blog/claude-duet.ts.

const announcement = "https://claude.com/resources/articles/claude-duet";

export const copy: GuideCopy = {
  meta: {
    title: "Claude Duet: el agente proactivo de Anthropic, lista de espera, acceso y límites | Crewmark",
    description:
      "Claude Duet es la app de agente proactivo de Anthropic, en vista previa de investigación desde el 21 de octubre de 2026. Qué hace, quién puede tenerlo, cómo unirse a la lista de espera, cuánto cuesta, sus límites de seguridad y cómo se compara.",
  },
  breadcrumb: "Claude Duet",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-05" },
  hero: {
    kicker: "Blog · Claude",
    title: "Claude Duet: qué es, quién puede tenerlo y cómo funciona",
    lead: "Claude Duet es una nueva app de Anthropic donde Claude trabaja como agente proactivo: te avisa de lo que necesita tu atención, hace las tareas que le encargas, sigue trabajando cuando te alejas y te consulta antes de actuar en tu nombre. Se abrió como vista previa de investigación con lista de espera el 21 de octubre de 2026, para suscriptores de Pro, Max y Ultra en EE. UU. Esta guía explica qué hace, cómo conseguir acceso, cuánto cuesta, sus límites de seguridad y cómo se compara.",
    cta: "Acceso anticipado",
    secondary: "Cómo conseguir acceso",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "Qué es Claude Duet",
      text: [
        "Un chat normal de Claude espera a que lo abras. Duet se adelanta: vigila las apps que conectas, envía un breve resumen matutino, se mantiene callado hasta que algo te necesita y te escribe cuando una tarea está lista o requiere una decisión. Anthropic lo creó para profesionales y dueños de pequeños negocios, sobre Claude Opus 5.5.",
      ],
      points: [
        "Resumen matutino: un breve resumen diario de lo más importante en tus apps conectadas.",
        "Un solo hilo: le escribes por texto o voz, como a un compañero, y mantiene una única conversación continua.",
        "Tu contexto de Claude: usa la memoria, las skills y las apps conectadas de tu cuenta de Claude desde el primer mensaje.",
        "Su propio ordenador en la nube: las tareas se ejecutan en una máquina virtual con su propio navegador, así que tu portátil y tu teléfono pueden estar apagados.",
        "Tareas pequeñas y grandes: programar reuniones, redactar respuestas, reclamar facturas impagadas, preparar la nómina para su revisión o crear paneles, previsiones, presentaciones y prototipos.",
        "Conectores: más de 6.000 conectores y plugins del Claude Marketplace, como Gmail, Slack, QuickBooks, Stripe, HubSpot, Docusign y Shopify.",
      ],
    },
    {
      kind: "table",
      title: "Claude Duet de un vistazo",
      headers: ["", "Claude Duet"],
      rows: [
        ["Anunciado", "21 de octubre de 2026, como vista previa de investigación"],
        ["Quién puede tenerlo", "Suscriptores de Pro, Max y Ultra en EE. UU., mediante lista de espera"],
        ["Team y Enterprise", "Aún no incluidos"],
        ["Dónde", "Apps independientes para iOS y Android, y claude.ai en un ordenador"],
        ["Precio", "Sin precio aparte: incluido en el plan, con los mismos límites de uso que el resto de Claude"],
        ["Modelo", "Claude Opus 5.5"],
        ["Cada cuánto revisa", "Cada pocas horas; tú eliges de qué quieres que te avise y con qué frecuencia"],
        ["API", "No anunciada"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Cómo conseguir Claude Duet y configurarlo",
      steps: [
        {
          title: "Comprueba que tu plan cumple los requisitos",
          text: "Necesitas un plan Pro, Max o Ultra en EE. UU. Los planes Team y Enterprise aún no forman parte de la vista previa.",
        },
        {
          title: "Únete a la lista de espera",
          text: "Regístrate en la página de Claude Duet, claude.com/product/claude-duet. Anthropic te envía un correo cuando Duet esté listo para tu cuenta.",
        },
        {
          title: "Abre la app",
          text: "Instala la app independiente de Claude Duet en iOS o Android, o úsala en claude.ai desde un ordenador. Es independiente de la app principal de Claude, pero comparte tu cuenta.",
        },
        {
          title: "Conecta las apps que debe vigilar",
          text: "Las apps que ya conectaste a Claude se trasladan, y si desactivas una en cualquiera de los dos sitios, se desactiva en ambos. Empieza por las pocas que importan, como tu bandeja de entrada, tu calendario y la facturación.",
        },
        {
          title: "Dile de qué quieres que te avise",
          text: "Define qué se considera urgente y con qué frecuencia quieres actualizaciones. Cada revisión en segundo plano consume los límites de tu plan, así que menos reglas, pero más precisas, duran más.",
        },
        {
          title: "Encárgale una tarea y aprueba sus acciones",
          text: "Escríbele como le escribirías a un colega. Lee y redacta por su cuenta, y luego te muestra la acción, los destinatarios y el contenido, y espera tu aprobación antes de enviar, pagar, firmar o eliminar nada.",
        },
      ],
      source: { label: "Fuente: el anuncio de Claude Duet de Anthropic", href: announcement },
    },
    {
      kind: "text",
      title: "Seguridad, privacidad y límites",
      points: [
        "Aprobaciones: antes de enviar un mensaje sensible, pagar o eliminar, te muestra exactamente lo que va a hacer y espera. Además, una comprobación aparte, ajena al modelo, valora si cada acción coincide con tu intención.",
        "Nunca permitido, ni con aprobación: operar con valores bursátiles, mover dinero entre cuentas o usar la cuenta de otra persona.",
        "Contraseñas: nunca ve tus contraseñas, cookies ni tokens de inicio de sesión. Las compras usan una tarjeta de un solo uso limitada a ese comercio y a ese importe.",
        "Datos sensibles: un clasificador bloquea el envío de números de tarjeta, números de cuenta bancaria y documentos de identidad oficiales; los datos de salud y finanzas solo se comparten cuando tú lo pides.",
        "Memoria: conserva tu historial de conversación y tu memoria hasta que los elimines o los restablezcas. Desconectar una app detiene el acceso nuevo, pero lo que ya aprendió permanece hasta que restableces su memoria.",
        "Vista previa temprana: Anthropic dice que puede malinterpretar un hilo, juzgar mal qué es urgente o perderse algo que llega entre revisiones, y que rinde menos en gestiones personales que en tareas de trabajo.",
      ],
    },
    {
      kind: "table",
      title: "Claude Duet frente a ChatGPT dots y Crewmark",
      text: [
        "Los tres son agentes que siguen trabajando sin que estés en el chat. Duet y [ChatGPT dots](/blog/chatgpt-dots) son asistentes para tus apps de negocio que se ejecutan en la nube de su creador; Crewmark despierta con un latido (heartbeat) al agente de programación que ya usas, como Claude Code o Codex, para que avance por un tablero de issues.",
      ],
      headers: ["", "Claude Duet", "ChatGPT dots", "Crewmark"],
      rows: [
        ["Se ejecuta en", "El ordenador en la nube de Anthropic", "El ordenador en la nube de OpenAI", "Tu ordenador, dentro de Claude Code, Codex, DeepSeek Harness u OpenCode"],
        ["Empieza a trabajar", "Tus mensajes y revisiones cada pocas horas", "Tus mensajes, programaciones y su propia investigación", "Un latido cada 15–60 minutos en horario laboral"],
        ["Mejor en", "Bandeja de entrada, calendario, facturas, resúmenes y paneles", "Investigación y tareas en tus apps conectadas", "Código, SEO y otro trabajo en un repositorio, un empleado por rol"],
        ["Cola de trabajo", "Un hilo continuo", "Hilos de conversación y Scheduled", "Issues en un tablero kanban"],
        ["Coste", "Incluido en Pro, Max y Ultra (EE. UU.)", "Planes Pro y Business Premium", "Acceso anticipado; funciona con el agente y el plan que ya tienes"],
        ["Estado", "Vista previa de investigación, lista de espera", "Despliegue progresivo", "Acceso anticipado"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Con Crewmark",
      title: "¿Quieres el mismo hábito proactivo para Claude Code?",
      text: [
        "Duet vigila tu bandeja de entrada y tus apps de negocio; Anthropic no lo describe trabajando en tu repositorio de código. Crewmark lleva la misma idea a los agentes de programación: da a una sesión de Claude Code, Codex, DeepSeek Harness u OpenCode un rol, un objetivo y un horario laboral, y la despierta con un latido en la misma conversación.",
      ],
      steps: [
        {
          title: "Convierte una sesión en un empleado",
          text: "Elige un rol, como ingeniero de software o especialista en SEO, escribe su objetivo como un número y ejecuta el comando de configuración en Claude Code.",
        },
        {
          title: "Deja que el latido inicie el trabajo",
          text: "Durante su horario laboral, el empleado se despierta cada 15, 30 o 60 minutos y retoma donde lo dejó; consulta [cómo hacer proactivo a Claude Code](/proactive-claude-code).",
        },
        {
          title: "Asigna issues y responde a sus mensajes",
          text: "Pon el trabajo en el tablero; el empleado lo toma, comenta sobre la marcha y te escribe cuando necesita una decisión. Lee [qué es un empleado de IA](/ai-employees).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Conseguir Claude Duet y configurarlo" },
  mid: {
    title: "¿Te gusta la idea de un agente que te escribe primero?",
    text: "Crewmark lo hace para Claude Code y Codex: un latido, horario laboral y un tablero de issues, con el plan que ya pagas.",
    button: "Acceso anticipado",
  },
  faq: {
    title: "Preguntas frecuentes sobre Claude Duet",
    items: [
      {
        q: "¿Qué es Claude Duet?",
        a: "Una app de Anthropic, en vista previa de investigación desde el 21 de octubre de 2026, donde Claude trabaja como agente proactivo. Vigila tus apps conectadas, envía un resumen matutino, hace tareas en su propio ordenador en la nube y pide aprobación antes de actuar en tu nombre.",
      },
      {
        q: "¿Cuándo se lanzó Claude Duet?",
        a: "Anthropic abrió la vista previa de investigación el 21 de octubre de 2026, con lista de espera. El acceso se despliega poco a poco, y Anthropic te envía un correo cuando esté listo para tu cuenta.",
      },
      {
        q: "¿Cómo consigo acceso a Claude Duet?",
        a: "Únete a la lista de espera en claude.com/product/claude-duet con un plan Pro, Max o Ultra en EE. UU. Después usa la app de Claude Duet en iOS o Android, o claude.ai en un ordenador.",
      },
      {
        q: "¿Está Claude Duet disponible para planes Team o Enterprise?",
        a: "Todavía no. La página de producto de Anthropic indica que los planes Team y Enterprise no están incluidos en la vista previa.",
      },
      {
        q: "¿Cuánto cuesta Claude Duet?",
        a: "No tiene un precio aparte. Está incluido en Pro, Max y Ultra y usa los mismos límites de uso que el resto de Claude; las revisiones en segundo plano y las tareas más grandes consumen más.",
      },
      {
        q: "¿Es seguro Claude Duet?",
        a: "Pregunta antes de enviar, pagar, firmar o eliminar, nunca ve tus contraseñas ni tus tokens de inicio de sesión, usa tarjetas de un solo uso para las compras y no puede operar con valores bursátiles ni mover dinero entre cuentas, ni siquiera con aprobación. Es una vista previa temprana, así que aún puede juzgar mal qué es urgente.",
      },
      {
        q: "¿Puede Claude Duet escribir código en mi repositorio?",
        a: "Puede crear prototipos y apps web en su propio ordenador en la nube, pero Anthropic no lo presenta como un agente de programación para tu repositorio. Para eso, la herramienta es Claude Code, y Crewmark hace proactivas las sesiones de Claude Code con un latido y un tablero de issues.",
      },
    ],
  },
  cta: {
    title: "Haz proactivas también tus sesiones de Claude Code.",
    text: "Crewmark convierte las sesiones de Claude Code, Codex y DeepSeek Harness en empleados de IA con roles, objetivos, horario laboral y un latido.",
    button: "Acceso anticipado",
  },
  checked: "Comprobado con el anuncio de Claude Duet de Anthropic, su página de producto y su artículo de seguridad el 5 de noviembre de 2026.",
  disclaimer:
    "Crewmark es un producto independiente, sin relación con Anthropic ni con OpenAI y sin su respaldo. Claude, Claude Duet y Claude Code son marcas de Anthropic, y ChatGPT, de OpenAI.",
};
