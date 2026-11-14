import type { GuideCopy } from "@/components/landing/guide-article";

// Spanish translation of /blog/github-copilot-slack; the English master is src/content/blog/github-copilot-slack.ts.

const docs = "https://docs.github.com/en/copilot/how-tos/copilot-integrations/integrate-cloud-agent-with-slack";

const prompts = `@GitHub Add "Hello World" to the README in octo-org/octo-repo on the develop branch

@GitHub settings      # elige los repositorios predeterminados de este canal
@GitHub help          # lista los comandos`;

export const copy: GuideCopy = {
  meta: {
    title: "GitHub Copilot en Slack: configuración y alternativas",
    description:
      "@GitHub en Slack y Teams está disponible para todos desde el 6 de noviembre de 2026. Cómo configurarlo, qué hace el agente de Copilot desde un hilo de chat, permisos y límites, y cómo se compara con Claude Code en Slack.",
  },
  breadcrumb: "GitHub Copilot en Slack",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-07" },
  hero: {
    kicker: "Blog · Agentes de programación con IA",
    title: "GitHub Copilot en Slack: convierte un hilo de chat en una pull request",
    lead: "GitHub Copilot en Slack te permite mencionar a `@GitHub` en un hilo para que el agente en la nube de Copilot investigue un bug, abra issues, escriba el cambio y abra una pull request, usando la conversación como contexto. Pasó a estar disponible para todos en Slack y Microsoft Teams el 6 de noviembre de 2026. Esta guía explica cómo configurarlo, qué puede y qué no puede hacer, quién puede activarlo y cómo se compara con Claude Code en Slack y con un empleado de IA siempre activo.",
    cta: "Empezar",
    secondary: "Ir a la configuración",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "Qué hace @GitHub en Slack y Teams",
      points: [
        "Investiga, planifica, escribe código y abre issues y pull requests desde un hilo de chat, usando todo el hilo como contexto.",
        "Trabaja de forma asíncrona en un sandbox en la nube y publica un resumen con enlaces a lo que ha creado.",
        "Crea una issue, varias, o issues padre e hijas; trabaja en hasta 11 repositorios de la misma organización o cuenta.",
        "Permite elegir el modelo, usar servidores MCP configurados por los administradores del repositorio y Copilot Memory (en preview).",
        "Desde la versión del 6 de noviembre elige el repositorio a partir de tu mensaje, indica en cada issue y PR de qué conversación y usuario proviene, y en Teams muestra planes, diffs y vistas previas en un Canvas junto al chat.",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Cómo configurar GitHub Copilot en Slack",
      steps: [
        {
          title: "Comprueba que puedes usarlo",
          text: "Necesitas un plan de pago de Copilot y acceso de escritura a los repositorios que quieres modificar. En organizaciones y empresas, la política “Copilot in the cloud” está activada por defecto, pero un propietario puede desactivarla; en los repositorios de una empresa, un administrador instala la app y elige a qué repositorios puede acceder.",
        },
        {
          title: "Instala la app de GitHub para Slack",
          text: "Añade la integración de GitHub a tu workspace desde slack.github.com (para Teams, teams.github.com).",
        },
        {
          title: "Conecta tu cuenta",
          text: "Abre un mensaje directo con la app de GitHub, o escribe `@GitHub` en un hilo, y sigue las indicaciones para vincular tu cuenta de GitHub. `@GitHub help` muestra la lista de comandos.",
        },
        {
          title: "Define los repositorios predeterminados de un canal",
          text: "Ejecuta `@GitHub settings` en un canal para elegir un propietario y los repositorios; el primero pasa a ser el principal. Los mensajes directos no tienen repositorio predeterminado, así que indica el repositorio y la rama en el prompt.",
        },
        {
          title: "Pide el trabajo en lenguaje natural",
          text: "Menciona a `@GitHub` con la tarea, o responde con ella a una notificación de GitHub. Copilot lee el hilo, trabaja en la nube y responde con enlaces a la issue o a la pull request.",
          code: prompts,
        },
      ],
      source: { label: "Fuente: GitHub Docs, Integrate Copilot cloud agent with Slack", href: docs },
    },
    {
      kind: "text",
      title: "Permisos y límites",
      points: [
        "Solo quien tiene acceso de escritura a todos los repositorios seleccionados puede iniciar o dirigir una sesión; cualquiera en el hilo puede aportar.",
        "Los invitados y los colaboradores externos no pueden iniciar ni dirigir sesiones.",
        "En un mensaje directo, Copilot actúa con los permisos de tu cuenta vinculada; en un canal compartido, crea issues y PR con su identidad de app.",
        "Todo el hilo se guarda como contexto y queda almacenado en la pull request resultante, así que no compartas secretos en la conversación.",
        "El anuncio de GitHub no detalla cómo se facturan las sesiones desde Slack; revisa el uso de Copilot de tu plan antes de extenderlo a todo el equipo.",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "GitHub Copilot en Slack vs Claude Code en Slack vs un empleado de IA",
      headers: ["", "GitHub Copilot en Slack", "Claude Code en Slack", "Empleado de IA de Crewmark"],
      rows: [
        ["Cómo empieza el trabajo", "Mencionas a `@GitHub` o escribes a la app por mensaje directo", "Mencionas a `@Claude` en un canal del equipo", "Un heartbeat en horario laboral toma la siguiente issue; también puedes asignársela"],
        ["Dónde se ejecuta", "El sandbox en la nube de GitHub", "La nube de Anthropic (Claude Code on the web)", "Tu máquina, en Claude Code, Codex, DeepSeek Harness u OpenCode"],
        ["Qué entrega", "Issues y pull requests", "Pull requests y revisiones", "Trabajo en cualquier issue del tablero, con comentarios y mensajes para ti"],
        ["Planes", "Planes de pago de Copilot", "Pro, Max y Ultra, con Claude Code on the web activado", "La suscripción de agente que ya tienes"],
        ["Sigue trabajando sin ti", "No: una tarea por mención", "No: una tarea por mención", "Sí, durante su horario laboral"],
      ],
    },
    {
      kind: "text",
      title: "Cuándo basta con un bot de chat y cuándo no",
      text: [
        "Copilot en Slack es ideal para el momento en que llega un reporte de bug a un hilo: una mención y aparece una pull request. Aun así, es reactivo: no pasa nada hasta que alguien lo pide, y cada mención es una tarea. Si quieres un agente que avance por un backlog por su cuenta, con un rol y objetivos, echa un vistazo a los [empleados de IA](/ai-employees) y a [cómo hacer proactivo a Claude Code](/proactive-claude-code). Para más formas de ejecutar varios agentes, consulta las [herramientas de orquestación para Claude Code](/blog/claude-code-orchestration-tools).",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Con Crewmark",
      title: "De “mencionar al bot” a un empleado que toma la siguiente tarea",
      text: [
        "Crewmark convierte una sesión de Claude Code, Codex, DeepSeek Harness u OpenCode en un empleado de IA con un rol, un objetivo y un horario laboral. Se despierta con un heartbeat, toma la siguiente issue de un tablero compartido, comenta mientras trabaja y te escribe cuando necesita una decisión.",
      ],
      steps: [
        {
          title: "Asigna trabajo como lo harías en el chat",
          text: "Crea una issue y asígnala, desde cualquier navegador o desde tu móvil; el empleado se entera al instante.",
        },
        {
          title: "Deja que siga trabajando",
          text: "Entre tus mensajes, avanza por sus issues con un heartbeat de 15, 30 o 60 minutos.",
        },
        {
          title: "Quédate con Copilot para los arreglos rápidos",
          text: "No se pisan: usa `@GitHub` para peticiones puntuales en un hilo y un empleado para el backlog continuo.",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Configurar GitHub Copilot en Slack" },
  mid: {
    title: "¿Quieres un agente que no espere a que lo mencionen?",
    text: "Crewmark despierta a Claude Code o Codex con un heartbeat, con un rol, un objetivo y un tablero de issues.",
    button: "Empezar",
  },
  faq: {
    title: "Preguntas frecuentes sobre GitHub Copilot en Slack",
    items: [
      {
        q: "¿GitHub Copilot en Slack está disponible para todos?",
        a: "Sí. GitHub anunció que @GitHub en Slack y Teams está disponible para todos el 6 de noviembre de 2026.",
      },
      {
        q: "¿Cómo añado GitHub Copilot a Slack?",
        a: "Instala la app de GitHub para Slack desde slack.github.com y luego escribe a la app por mensaje directo o menciona a `@GitHub` en un hilo y vincula tu cuenta de GitHub. Usa `@GitHub settings` para definir los repositorios predeterminados de un canal.",
      },
      {
        q: "¿Qué plan necesito para usar Copilot en Slack?",
        a: "Un plan de pago de Copilot, además de acceso de escritura a los repositorios que debe modificar. Los propietarios de una organización pueden desactivar la política “Copilot in the cloud”, de la que depende.",
      },
      {
        q: "¿GitHub Copilot en Slack puede abrir pull requests?",
        a: "Sí. Investiga, escribe el cambio en un sandbox en la nube y abre la pull request; después publica en el hilo un resumen con enlaces.",
      },
      {
        q: "¿Funciona en Microsoft Teams?",
        a: "Sí. @GitHub también está disponible para todos en Teams, donde un Canvas muestra planes, cambios de código y vistas previas junto a la conversación.",
      },
      {
        q: "¿Quién puede activar Copilot en un canal de Slack?",
        a: "Solo quien tiene acceso de escritura a todos los repositorios seleccionados puede iniciar o dirigir una sesión. Los demás en el hilo pueden aportar; los invitados y los colaboradores externos no pueden activarlo.",
      },
      {
        q: "¿GitHub Copilot en Slack o Claude Code en Slack?",
        a: "Ambos convierten una mención en Slack en una tarea de programación en la nube. Copilot funciona con un plan de pago de Copilot y crea issues y PR; Claude Code en Slack requiere un plan Claude Pro, Max o Ultra con Claude Code on the web.",
      },
    ],
  },
  cta: {
    title: "Dale a tu equipo un compañero de IA que no espera a que se lo pidan.",
    text: "Crewmark convierte las sesiones de Claude Code, Codex, DeepSeek Harness y OpenCode en empleados de IA con roles, objetivos, horario laboral y un heartbeat.",
    button: "Empezar",
  },
  checked: "Comprobado con el registro de cambios de GitHub (6 de noviembre de 2026), GitHub Docs y la documentación de Claude Code de Anthropic el 7 de noviembre de 2026.",
  disclaimer:
    "Crewmark es un producto independiente, sin relación con GitHub, Microsoft, Slack ni Anthropic y sin su respaldo. Los nombres de los productos son marcas de sus titulares.",
};
