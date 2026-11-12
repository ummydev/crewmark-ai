import type { GuideCopy } from "@/components/landing/guide-article";

// es translation of /alternatives/<product>; the English master is src/content/alternatives.ts.

type Alternative = "paperclip" | "multica" | "crewai";

const others = (except: Alternative) =>
  [
    ["paperclip", "[Paperclip](/alternatives/paperclip): orquestación autoalojada y de código abierto para toda una empresa de agentes."],
    ["multica", "[Multica](/alternatives/multica): un tablero de tareas para CLI de agentes de programación, en la nube o autoalojado."],
    ["crewai", "[CrewAI](/alternatives/crewai): un framework de Python para crear flujos de trabajo multiagente con claves de API."],
  ]
    .filter(([slug]) => slug !== except)
    .map(([, text]) => text);

const newToIdea = "¿Te suena nuevo? Lee [qué es un empleado de IA](/ai-employees).";

const closing = (product: string) => ({
  title: `Prueba Crewmark como alternativa a ${product}.`,
  text: "Dale a tu agente de Claude Code o Codex un rol, un objetivo y un horario, y asígnale trabajo en un tablero.",
  button: "Acceso anticipado",
});

const mid = {
  title: "Contrata un empleado de IA con el plan que ya pagas",
  text: "Crewmark despierta tu sesión de Claude Code o Codex con un latido y le pasa la siguiente tarea de un tablero.",
  button: "Acceso anticipado",
};

const disclaimer = (owner: string) =>
  `Crewmark es un producto independiente, sin relación con ${owner} y sin su respaldo. Los nombres de producto son marcas de sus respectivos titulares. Los datos sobre otros productos proceden de su documentación pública y pueden haber cambiado desde entonces.`;

export const copy: Record<Alternative, GuideCopy> = {
  paperclip: {
    meta: {
      title: "Alternativa a Paperclip AI: Crewmark vs Paperclip | Crewmark",
      description:
        "¿Buscas una alternativa a Paperclip? Compara Crewmark y Paperclip en alojamiento, agentes, latidos, objetivos y configuración, y elige la mejor opción.",
    },
    breadcrumb: "Alternativa a Paperclip",
    hero: {
      kicker: "Alternativa a Paperclip",
      title: "Crewmark vs Paperclip",
      lead: "Paperclip y Crewmark convierten agentes de programación como Claude Code y Codex en un equipo que toma trabajo según un horario. Paperclip es un servidor de código abierto que ejecutas tú mismo para orquestar toda una empresa de agentes; Crewmark es un tablero alojado donde cada agente es un empleado con un rol, un objetivo numérico y un horario. Así se comparan.",
      cta: "Acceso anticipado",
      secondary: "Ver la comparativa",
      secondaryHref: "#compare",
    },
    sections: [
      {
        kind: "text",
        title: "Qué es Paperclip",
        text: [
          "Paperclip es un servidor Node.js con interfaz en React, con licencia MIT, que según su descripción “orquesta un equipo de agentes de IA para dirigir un negocio”. Defines un objetivo de empresa, construyes un organigrama con roles, líneas de reporte y presupuestos, y contratas agentes mediante adaptadores para Claude Code, Codex, Cursor, Gemini CLI, OpenCode, OpenClaw y otros.",
          "Los agentes se despiertan por tareas asignadas, seguimientos o latidos (heartbeats) opcionales con temporizador; las rutinas se ejecutan con cron o webhooks; y los presupuestos, las aprobaciones y las aprobaciones de contratación mantienen a una persona al mando. Hoy es autoalojado, con una versión en la nube en lista de espera.",
        ],
      },
      {
        kind: "table",
        id: "compare",
        title: "Crewmark vs Paperclip de un vistazo",
        headers: ["", "Paperclip", "Crewmark"],
        rows: [
          ["Alojamiento", "Autoalojado (Node.js 24+ o Docker); nube en lista de espera", "App web alojada, más un pequeño daemon en tu ordenador"],
          ["Licencia", "Código abierto, MIT", "Comercial, en acceso anticipado"],
          ["Agentes", "Claude Code, Codex, Cursor, Gemini CLI, OpenCode, OpenClaw y más, o claves de API", "Claude Code, Codex, DeepSeek Harness y OpenCode"],
          ["Unidad de trabajo", "Tareas vinculadas a objetivos de empresa y de proyecto", "Tareas en un tablero kanban"],
          ["Estructura", "Organigrama: roles, líneas de reporte, presupuestos", "Empleados: rol, KPI numérico, horario"],
          ["Cuándo se despiertan los agentes", "Trabajo asignado, mensajes, latidos opcionales con temporizador, rutinas", "Un latido cada 15, 30 o 60 minutos durante el horario"],
          ["Control del gasto", "Presupuestos por empresa, por agente y por proyecto", "Funciona con tu suscripción actual; duerme fuera de su horario"],
          ["Cuando se bloquea", "Flujos de aprobación y comentarios", "Un mensaje directo para ti, y pasa a otra cosa"],
        ],
      },
      {
        kind: "text",
        title: "¿Cuál deberías elegir?",
        points: [
          "Elige Paperclip si quieres código abierto que puedas alojar y modificar tú mismo, necesitas presupuestos y un organigrama para muchos agentes, o usas agentes que Crewmark no admite, como Cursor o Gemini CLI.",
          "Elige Crewmark si prefieres no gestionar un servidor, quieres que cada agente se mida con una cifra (clics, registros, PR fusionadas) y se ciña a un horario, y quieres un único tablero donde los agentes te escriben cuando se bloquean.",
        ],
      },
      {
        kind: "steps",
        id: "how-to",
        title: "Cómo pasar de Paperclip a Crewmark",
        steps: [
          {
            title: "Exporta lo que quieras conservar",
            text: "Paperclip exporta una empresa en Markdown legible: los agentes con sus roles e instrucciones, las habilidades y, opcionalmente, proyectos, rutinas y tareas. No incluye secretos, aprobaciones ni el historial de costes.",
          },
          {
            title: "Recrea cada agente como empleado",
            text: "En Crewmark, elige el rol más parecido, pega las instrucciones del agente y convierte su objetivo en una cifra que pueda seguir, como “+10% de clics en Search Console al mes”.",
          },
          {
            title: "Conecta el mismo agente",
            text: "Ejecuta el comando de configuración en la conversación de Claude Code o Codex donde quieras que viva el empleado. Seguirá usando la suscripción que ya pagas.",
          },
          {
            title: "Lleva las tareas abiertas al tablero",
            text: "Vuelve a crear las tareas abiertas y asígnalas. Define un horario y un latido, y el empleado las tomará en su siguiente despertar.",
          },
        ],
      },
      { kind: "text", title: "Otras alternativas", points: [...others("paperclip"), newToIdea] },
    ],
    howTo: { section: "how-to", name: "Cómo pasar de Paperclip a Crewmark" },
    mid,
    faq: {
      title: "Preguntas frecuentes sobre alternativas a Paperclip",
      items: [
        {
          q: "¿Paperclip es gratis?",
          a: "La versión autoalojada es gratuita y de código abierto con licencia MIT. Paperclip no ha publicado los precios de su versión en la nube, que está en lista de espera.",
        },
        {
          q: "¿Cuál es la principal diferencia entre Crewmark y Paperclip?",
          a: "Paperclip es un servidor autoalojado para dirigir una empresa de agentes con organigrama y presupuestos. Crewmark está alojado y trata a cada agente como un empleado con un objetivo numérico, un horario y un latido.",
        },
        {
          q: "¿Los dos funcionan con Claude Code y Codex?",
          a: "Sí. Los dos controlan el Claude Code y el Codex reales. Paperclip también admite Cursor, Gemini CLI y otros agentes; Crewmark también admite DeepSeek Harness y OpenCode.",
        },
        {
          q: "¿Puedo alojar Crewmark yo mismo?",
          a: "No. Crewmark es una app alojada; solo el daemon que despierta a tus agentes se ejecuta en tu ordenador.",
        },
      ],
    },
    cta: closing("Paperclip"),
    checked: "Comprobado con el README, la documentación y la web de Paperclip el 2 de noviembre de 2026.",
    disclaimer: disclaimer("Paperclip Labs"),
  },
  multica: {
    meta: {
      title: "Alternativa a Multica: Crewmark vs Multica | Crewmark",
      description:
        "¿Buscas una alternativa a Multica? Compara Crewmark y Multica en agentes, horarios, objetivos, licencia y configuración, y elige la mejor para tu equipo.",
    },
    breadcrumb: "Alternativa a Multica",
    hero: {
      kicker: "Alternativa a Multica",
      title: "Crewmark vs Multica",
      lead: "Multica y Crewmark te permiten asignar tareas a agentes de programación como Claude Code y Codex como si fueran compañeros de equipo. Multica es un espacio de trabajo para equipos de software, disponible en la nube o autoalojado; Crewmark trata a cada agente como un empleado con un objetivo numérico, un horario y un latido (heartbeat) que lo despierta por su cuenta. Así se comparan.",
      cta: "Acceso anticipado",
      secondary: "Ver la comparativa",
      secondaryHref: "#compare",
    },
    sections: [
      {
        kind: "text",
        title: "Qué es Multica",
        text: [
          "Multica es un espacio de trabajo de código disponible (source-available) donde, según su descripción, “asignas trabajo a agentes de programación de IA igual que se lo asignarías a un compañero”. No incluye un modelo propio: un daemon controla las CLI de agentes en las que ya tienes la sesión iniciada, 26 en total, entre ellas Claude Code, Codex, Cursor Agent, Copilot CLI, OpenCode y DeepSeek Harness.",
          "Los agentes toman tareas de un tablero, el trabajo pasa a revisión y una bandeja de entrada te avisa cuando un agente necesita una decisión. Los Autopilots crean tareas con un horario cron o mediante webhooks, los squads reparten el trabajo a través de un líder, y se conecta con Slack, Feishu, DingTalk, WeCom y Telegram.",
        ],
      },
      {
        kind: "table",
        id: "compare",
        title: "Crewmark vs Multica de un vistazo",
        headers: ["", "Multica", "Crewmark"],
        rows: [
          ["Alojamiento", "En la nube, o autoalojado con Docker o Helm", "App web alojada, más un pequeño daemon en tu ordenador"],
          ["Licencia", "Código disponible (Apache 2.0 con condiciones); alojarlo para terceros requiere una licencia comercial", "Comercial, en acceso anticipado"],
          ["Agentes", "26 CLI de agentes, entre ellas Claude Code, Codex, Cursor y DeepSeek Harness", "Claude Code, Codex, DeepSeek Harness y OpenCode"],
          ["Unidad de trabajo", "Tareas en un tablero, squads, chat y canales", "Tareas en un tablero kanban"],
          ["Trabajo programado", "Los Autopilots crean tareas con cron o webhooks", "Un latido despierta a cada empleado cada 15, 30 o 60 minutos"],
          ["Objetivos", "No se indican por agente", "Un KPI numérico por empleado, p. ej. +10% de clics al mes"],
          ["Horario", "No se indica", "Se define por empleado; fuera de él, duerme"],
          ["Cuando se bloquea", "Bandeja de entrada y puntos de revisión", "Un mensaje directo para ti, y pasa a otra cosa"],
        ],
      },
      {
        kind: "text",
        title: "¿Cuál deberías elegir?",
        points: [
          "Elige Multica si necesitas alojarlo tú mismo, quieres la mayor variedad de CLI de agentes o trabajas en Feishu, DingTalk o WeCom.",
          "Elige Crewmark si quieres agentes que empiecen a trabajar según su propio horario sin que tengas que crearles tareas, que se midan con una cifra y que se ciñan a un horario para no agotar tu plan de madrugada.",
        ],
      },
      {
        kind: "steps",
        id: "how-to",
        title: "Cómo pasar de Multica a Crewmark",
        steps: [
          {
            title: "Haz una lista de tus agentes y tareas abiertas",
            text: "Apunta las instrucciones de cada agente y las tareas que siguen abiertas. La CLI y la API de Multica pueden listarlas.",
          },
          {
            title: "Recrea cada agente como empleado",
            text: "En Crewmark, elige el rol más parecido, pega las instrucciones y dale un objetivo en cifras, además de un horario y un latido.",
          },
          {
            title: "Conecta la misma CLI de agente",
            text: "Ejecuta el comando de configuración en la conversación de Claude Code, Codex, DeepSeek Harness u OpenCode donde deba vivir el empleado. Seguirá usando la sesión que ya tienes iniciada.",
          },
          {
            title: "Sustituye los Autopilots por latidos",
            text: "En lugar de un trabajo de cron que crea tareas, pon el trabajo recurrente en la lista de pendientes del empleado. Revisa el tablero en cada latido y toma la siguiente.",
          },
        ],
      },
      { kind: "text", title: "Otras alternativas", points: [...others("multica"), newToIdea] },
    ],
    howTo: { section: "how-to", name: "Cómo pasar de Multica a Crewmark" },
    mid,
    faq: {
      title: "Preguntas frecuentes sobre alternativas a Multica",
      items: [
        {
          q: "¿Multica es de código abierto?",
          a: "Es de código disponible: la Multica License es Apache 2.0 con condiciones adicionales. Usarlo dentro de tu propia organización, incluido alojarlo tú mismo, es gratis; ofrecerlo como servicio alojado a terceros requiere una licencia comercial.",
        },
        {
          q: "¿Cuál es la principal diferencia entre Crewmark y Multica?",
          a: "Los dos ponen agentes de programación en un tablero de tareas. Crewmark añade una estructura de empleado: un objetivo numérico, un horario y un latido que despierta a cada agente por su cuenta para tomar la siguiente tarea.",
        },
        {
          q: "¿Los dos usan mi sesión actual de Claude Code o Codex?",
          a: "Sí. Los dos controlan la CLI del agente en la que ya tienes la sesión iniciada, así que el trabajo se hace con tu plan actual.",
        },
        {
          q: "¿Puedo alojar Crewmark yo mismo?",
          a: "No. Crewmark es una app alojada; solo el daemon que despierta a tus agentes se ejecuta en tu ordenador.",
        },
      ],
    },
    cta: closing("Multica"),
    checked: "Comprobado con el README, la documentación, la licencia y la web de Multica el 2 de noviembre de 2026.",
    disclaimer: disclaimer("Index Labs"),
  },
  crewai: {
    meta: {
      title: "Alternativa sin código a CrewAI: comparativa | Crewmark",
      description:
        "¿Buscas una alternativa a CrewAI? Compara Crewmark y CrewAI en programación, modelos, precios y asignación de trabajo, y elige la mejor para tu equipo.",
    },
    breadcrumb: "Alternativa a CrewAI",
    hero: {
      kicker: "Alternativa a CrewAI",
      title: "Crewmark vs CrewAI",
      lead: "CrewAI es un framework de Python para crear flujos de trabajo multiagente, con una plataforma comercial por encima. Crewmark no es un framework: convierte el agente de Claude Code o Codex que ya usas en un empleado de IA y le da trabajo en un tablero, sin escribir código y sin factura de API. Así se comparan.",
      cta: "Acceso anticipado",
      secondary: "Ver la comparativa",
      secondaryHref: "#compare",
    },
    sections: [
      {
        kind: "text",
        title: "Qué es CrewAI",
        text: [
          "CrewAI es un framework de Python de código abierto con licencia MIT, pensado, según su descripción, “para crear flujos de trabajo multiagente listos para producción”. Defines agentes con un rol, un objetivo, una historia de fondo (backstory), herramientas y un LLM, y luego los combinas en crews y flows basados en eventos. Por defecto los agentes usan la API de OpenAI, y admite otros proveedores y modelos locales.",
          "CrewAI AMP añade un editor visual, un copiloto de IA, programación con cron, intervención humana (human-in-the-loop), trazas y despliegue en la nube de CrewAI o en tu propia infraestructura.",
        ],
      },
      {
        kind: "table",
        id: "compare",
        title: "Crewmark vs CrewAI de un vistazo",
        headers: ["", "CrewAI", "Crewmark"],
        rows: [
          ["Qué es", "Un framework de Python más una plataforma para desplegar flujos de trabajo", "Un tablero de empleados de IA que funcionan en tu agente de programación"],
          ["Hay que programar", "Sí para el framework (Python 3.10–3.13); un editor visual en la plataforma", "No: elige un rol y ejecuta un comando de configuración"],
          ["Modelos", "Claves de API: OpenAI por defecto, otros proveedores y modelos locales", "Claude Code, Codex, DeepSeek Harness u OpenCode, con tu plan actual"],
          ["Capacidades del agente", "Las herramientas que defines en código", "Todo lo que puede hacer el agente de programación: archivos, terminal, navegador, MCP"],
          ["Unidad de trabajo", "Tareas dentro de un crew o un flow", "Tareas en un tablero kanban"],
          ["Programación", "Programación con cron en la plataforma", "Un latido cada 15, 30 o 60 minutos durante el horario"],
          ["Objetivos", "Un campo de objetivo en el prompt de cada agente", "Un KPI numérico por empleado, con seguimiento en el tiempo"],
          ["Precios", "Plan gratuito con 50 ejecuciones al mes; Enterprise a medida", "Acceso anticipado; sin coste extra de tokens además de tu plan"],
        ],
      },
      {
        kind: "text",
        title: "¿Cuál deberías elegir?",
        points: [
          "Elige CrewAI si eres desarrollador y estás integrando un flujo de trabajo multiagente en tu propio producto, necesitas un control preciso de cada paso o necesitas un despliegue empresarial con SSO y tu propia VPC.",
          "Elige Crewmark si no quieres escribir ni mantener código de agentes, ya pagas Claude Code o Codex y quieres agentes que hagan trabajos continuos como SEO o corrección de bugs e informen en un tablero.",
        ],
      },
      {
        kind: "steps",
        id: "how-to",
        title: "Cómo pasar de CrewAI a Crewmark",
        steps: [
          {
            title: "Asigna un rol a cada agente",
            text: "Toma el rol y el objetivo de cada agente de CrewAI y elige el rol de Crewmark más parecido. Su backstory se convierte en las instrucciones del empleado.",
          },
          {
            title: "Convierte el objetivo en una cifra",
            text: "En CrewAI, el objetivo es una frase en el prompt. En Crewmark, escribe en su lugar lo que medirías, como “10 pull requests fusionadas a la semana”.",
          },
          {
            title: "Conecta un agente de programación",
            text: "Ejecuta el comando de configuración en Claude Code o Codex. El empleado usa las herramientas propias de ese agente, así que la mayor parte del código de herramientas personalizadas sobra.",
          },
          {
            title: "Convierte el trabajo en tareas",
            text: "Pon como tareas en el tablero el trabajo que antes ejecutaba tu crew, y define un horario y un latido para que el empleado las tome por su cuenta.",
          },
        ],
      },
      { kind: "text", title: "Otras alternativas", points: [...others("crewai"), newToIdea] },
    ],
    howTo: { section: "how-to", name: "Cómo pasar de CrewAI a Crewmark" },
    mid,
    faq: {
      title: "Preguntas frecuentes sobre alternativas a CrewAI",
      items: [
        {
          q: "¿CrewAI es gratis?",
          a: "El framework es de código abierto con licencia MIT, pero pagas los tokens a tu proveedor de modelos. La plataforma alojada tiene un plan Basic gratuito con 50 ejecuciones de flujos de trabajo al mes y un plan Enterprise con precio a medida.",
        },
        {
          q: "¿Necesito programar para usar Crewmark?",
          a: "No. Eliges un rol, escribes el objetivo y ejecutas un comando de configuración en Claude Code o Codex. El trabajo se asigna como tareas en un tablero.",
        },
        {
          q: "¿Puede CrewAI usar Claude Code o Codex como agente?",
          a: "Los agentes de CrewAI son llamadas a un LLM con las herramientas que defines, así que usan las API de los modelos en lugar de ejecutarse dentro de Claude Code o Codex. Los empleados de Crewmark se ejecutan dentro del agente de programación real.",
        },
        {
          q: "¿Cuál es una buena alternativa de código abierto a CrewAI?",
          a: "Si quieres código abierto y agentes basados en CLI de programación, echa un vistazo a [Paperclip](/alternatives/paperclip). Crewmark no es de código abierto; es una app alojada.",
        },
      ],
    },
    cta: closing("CrewAI"),
    checked: "Comprobado con el README, la documentación y la página de precios de CrewAI el 2 de noviembre de 2026.",
    disclaimer: disclaimer("CrewAI"),
  },
};
