import type { GuideCopy } from "@/components/landing/guide-article";

// Spanish translation of /blog/hermes-agent-vs-openclaw; the English master is src/content/blog/hermes-agent-vs-openclaw.ts.

const hermes = "https://github.com/NousResearch/hermes-agent";

const install = `# OpenClaw (macOS, Linux, WSL2)
curl -fsSL https://openclaw.ai/install.sh | bash

# Hermes Agent (Linux, macOS, WSL2)
curl -fsSL https://hermes-agent.nousresearch.com/install.sh | bash

# Move an OpenClaw setup to Hermes: preview first
hermes import-agent openclaw --dry-run`;

export const copy: GuideCopy = {
  meta: {
    title: "Hermes Agent vs OpenClaw vs Claude Code: cuál usar (2026)",
    description:
      "Hermes Agent vs OpenClaw, y cómo se comparan ambos con Claude Code: para qué sirve cada uno, modelos y suscripciones, memoria y skills, seguridad y cómo migrar de OpenClaw a Hermes. A partir de la documentación de cada proyecto.",
  },
  breadcrumb: "Hermes Agent vs OpenClaw",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-07" },
  hero: {
    kicker: "Blog · Agentes de IA",
    title: "Hermes Agent vs OpenClaw vs Claude Code: ¿cuál necesitas?",
    lead: "OpenClaw y Hermes Agent son los dos agentes personales de IA de código abierto más grandes: ambos se ejecutan en tu propia máquina y te responden en Telegram, Slack, WhatsApp y otras apps de chat. OpenClaw tiene la comunidad más grande (unas 394.000 estrellas en GitHub); Hermes Agent, de Nous Research (unas 261.000), gira en torno a un bucle de aprendizaje que convierte la experiencia en skills. Claude Code es otro tipo de herramienta: un agente de programación que trabaja en tu repositorio. Esta guía compara los tres a partir de su propia documentación, para que elijas el adecuado, o la combinación adecuada.",
    cta: "Empezar",
    secondary: "Ver la comparación",
    secondaryHref: "#compare",
  },
  sections: [
    {
      kind: "text",
      title: "La respuesta corta",
      points: [
        "Elige OpenClaw si quieres la mayor variedad de canales e integraciones y la comunidad más grande: Discord, iMessage, Slack, Teams, Telegram, WhatsApp, Signal y más de 20 más.",
        "Elige Hermes Agent si quieres un asistente que aprenda: crea skills a partir de la experiencia, las mejora a medida que las usa y mantiene una memoria curada, con un programador cron integrado.",
        "Elige Claude Code para el trabajo de software en un repositorio: leer y cambiar código, ejecutar tests, abrir pull requests.",
        "¿Quieres que Claude Code o Codex sigan trabajando en una tarea sin que se lo pidas, desde un tablero de equipo? Eso es un empleado de IA; mira el final de esta página.",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Hermes Agent vs OpenClaw vs Claude Code",
      text: ["Según el README y la documentación de cada proyecto, y la API de GitHub, el 7 de noviembre de 2026."],
      headers: ["", "OpenClaw", "Hermes Agent", "Claude Code"],
      rows: [
        ["Creado por", "Peter Steinberger y la comunidad; OpenClaw Foundation", "Nous Research", "Anthropic"],
        ["Qué es", "Asistente personal de IA en tus apps de chat", "Agente personal que se mejora a sí mismo con un bucle de aprendizaje", "Agente de programación para tu repositorio"],
        ["Dónde hablas con él", "Más de 20 canales de chat, más Control UI, CLI y apps", "Telegram, Discord, Slack, WhatsApp, Signal, email, CLI; app de escritorio", "Terminal, IDE, app de escritorio; Remote Control desde tu móvil"],
        ["Modelos", "Intercambiables: Claude, OpenAI y Codex, modelos locales", "Cualquier proveedor: Nous Portal, OpenRouter, OpenAI, endpoints personalizados", "Modelos de Claude"],
        ["Suscripción de Claude", "Clave de API, o reutilizar una sesión de Claude Code en la misma máquina", "Solo Claude Max con uso adicional comprado; no Pro", "Incluido en los planes de Claude"],
        ["Memoria y skills", "Memoria local; skills y plugins compartidos en ClawHub", "Memoria curada por el agente; crea y mejora skills (estándar agentskills.io)", "CLAUDE.md, skills, hooks, subagentes"],
        ["Programación", "El Gateway se ejecuta como daemon", "Programador cron integrado", "`/loop` y tareas programadas"],
        ["Aislamiento", "Las herramientas se ejecutan en el host salvo que configures sandboxing", "Aprobación para comandos peligrosos; Docker o Modal opcional", "Modos y reglas de permisos; sandboxing"],
        ["Licencia, estrellas", "MIT, ~394k", "MIT, ~261k", "Comercial"],
      ],
    },
    {
      kind: "text",
      title: "Hermes Agent vs OpenClaw: las diferencias reales",
      points: [
        "Aprendizaje: la función estrella de Hermes es su bucle de aprendizaje; escribe skills después de tareas complejas y las refina. La fuerza de OpenClaw es la amplitud: más canales, plugins en ClawHub y apps nativas para escritorio y móvil.",
        "Seguridad por defecto: OpenClaw trata los mensajes entrantes como no confiables y empareja a los remitentes desconocidos, pero ejecuta las herramientas en el host en la sesión principal salvo que configures sandboxing. Hermes pide confirmación antes de comandos peligrosos por defecto y puede aislar las herramientas en Docker o Modal. OpenClaw publica abiertamente sus correcciones de seguridad: 722 avisos desde enero de 2026, todos los críticos corregidos.",
        "Suscripciones: OpenClaw puede reutilizar una sesión local de Claude Code; Hermes acepta una suscripción de Claude solo con Max y uso adicional comprado, y ambos admiten el inicio de sesión con ChatGPT/Codex.",
        "Gobernanza: OpenClaw lo dirige la OpenClaw Foundation, independiente, con OpenAI como donante; Hermes Agent lo desarrolla Nous Research.",
        "Cambio: Hermes tiene un importador de un solo comando para configuraciones de OpenClaw (persona, memorias, skills y ajustes de mensajería).",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Cómo probar ambos, o pasar de OpenClaw a Hermes",
      steps: [
        {
          title: "Instálalos uno al lado del otro",
          text: "Ambos se instalan con un solo comando y ejecutan su propio gateway, así que puedes probarlos en la misma máquina con cuentas de chat distintas.",
          code: install,
        },
        {
          title: "Conecta primero un solo canal",
          text: "Empieza con una sola app de chat y permite solo tu propia cuenta; ambos emparejan o filtran con lista de permitidos a los remitentes desconocidos.",
        },
        {
          title: "Previsualiza la migración",
          text: "`hermes import-agent openclaw --dry-run` muestra lo que se movería; añade `--migrate-secrets` solo si también quieres copiar tus claves de API.",
        },
        {
          title: "Decide el aislamiento antes de darle cuentas reales",
          text: "Activa el sandboxing de OpenClaw o el backend Docker de Hermes antes de que el agente lea mensajes de otras personas. Para una opción basada en contenedores desde el principio, mira [alternativas a OpenClaw](/blog/openclaw-alternatives).",
        },
      ],
      source: { label: "Fuente: README de Hermes Agent", href: hermes },
    },
    {
      kind: "text",
      title: "OpenClaw vs Claude Code, y Hermes vs Claude Code",
      text: [
        "Resuelven problemas distintos. OpenClaw y Hermes son asistentes a los que escribes: bandeja de entrada, calendario, investigación, recordatorios y tareas entre apps. Claude Code es donde se construye el software: lee tu código, edita archivos, ejecuta comandos y tests, y abre pull requests. Mucha gente usa ambos: un asistente de chat para el día a día y Claude Code (o Codex) para el trabajo en el repositorio. OpenClaw incluso puede reutilizar tu sesión de Claude Code en la misma máquina. Para que Claude Code trabaje con su propio horario, lee [cómo hacer que Claude Code sea proactivo](/proactive-claude-code); para ejecutar varios a la vez, mira [varios agentes de Claude Code](/blog/multiple-claude-code-agents).",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Con Crewmark",
      title: "Cuando quieres agentes con un trabajo, no asistentes",
      text: [
        "OpenClaw y Hermes responden cuando les escribes. Crewmark convierte Claude Code, Codex, DeepSeek Harness u OpenCode en empleados de IA: cada uno tiene un rol, un objetivo y un horario de trabajo, se despierta con un heartbeat, toma la siguiente issue de un tablero compartido y te escribe cuando necesita una decisión, con la suscripción que ya pagas.",
      ],
      steps: [
        {
          title: "Elige un rol",
          text: "Un [especialista SEO](/ai-employees/seo-specialist), un [ingeniero de software](/ai-employees/software-engineer), un [agente de marketing](/ai-employees/marketing-agent) y más.",
        },
        {
          title: "Conecta el agente que ya usas",
          text: "Cada empleado trabaja en su propia sesión y checkout.",
        },
        {
          title: "Llena el tablero",
          text: "Asigna issues; responde solo lo que te necesita. Lee [qué es un empleado de IA](/ai-employees).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Probar Hermes Agent y OpenClaw lado a lado" },
  mid: {
    title: "¿Necesitas agentes que saquen adelante un backlog?",
    text: "Crewmark ejecuta Claude Code y Codex como empleados de IA que toman la siguiente issue de tu tablero con un heartbeat.",
    button: "Empezar",
  },
  faq: {
    title: "Preguntas frecuentes sobre Hermes Agent vs OpenClaw",
    items: [
      {
        q: "¿Es Hermes Agent mejor que OpenClaw?",
        a: "Depende de lo que valores. Hermes Agent se centra en el aprendizaje (skills que crea y mejora) y pide confirmación antes de comandos peligrosos por defecto. OpenClaw tiene más canales, apps y plugins de la comunidad.",
      },
      {
        q: "¿Puedo pasar de OpenClaw a Hermes Agent?",
        a: "Sí. Hermes incluye `hermes import-agent openclaw`, que importa tu persona, memorias, skills y ajustes de mensajería; ejecútalo primero con `--dry-run`.",
      },
      {
        q: "¿Cuál funciona con mi suscripción de Claude?",
        a: "OpenClaw puede reutilizar una sesión de Claude Code en la misma máquina o usar una clave de API. Hermes Agent acepta una suscripción de Claude solo con Claude Max y uso adicional comprado; los usuarios de Pro necesitan una clave de API.",
      },
      {
        q: "¿Son gratis OpenClaw y Hermes Agent?",
        a: "Ambos son de código abierto con licencia MIT. Pagas por los modelos que usas; Nous Research también ofrece una suscripción opcional a Nous Portal para Hermes.",
      },
      {
        q: "OpenClaw vs Claude Code: ¿cuál debería usar?",
        a: "OpenClaw es un asistente personal en tus apps de chat; Claude Code es un agente de programación en tu repositorio. Se complementan, y OpenClaw puede reutilizar una sesión de Claude Code en la misma máquina.",
      },
      {
        q: "¿Hermes Agent vs Codex?",
        a: "Codex es el agente de programación de OpenAI para tu repositorio. Hermes es un agente personal de uso general que puede iniciar sesión con ChatGPT/Codex para usar modelos de OpenAI.",
      },
    ],
  },
  cta: {
    title: "Dale a tus agentes de programación un trabajo, no solo un chat.",
    text: "Crewmark convierte sesiones de Claude Code, Codex, DeepSeek Harness y OpenCode en empleados de IA con roles, objetivos, horario de trabajo y un heartbeat.",
    button: "Empezar",
  },
  checked: "Comprobado con los README y la documentación de OpenClaw y Hermes Agent, y con la API de GitHub, el 7 de noviembre de 2026.",
  disclaimer:
    "Crewmark es un producto independiente, sin afiliación ni respaldo de la OpenClaw Foundation, Nous Research, Anthropic ni OpenAI. Los nombres de productos son marcas registradas de sus propietarios.",
};
