import type { GuideCopy } from "@/components/landing/guide-article";

// Spanish translation of /blog/claude-code-vs-cursor; the English master is src/content/blog/claude-code-vs-cursor.ts.

const cursorPricing = "https://cursor.com/pricing";

export const copy: GuideCopy = {
  meta: {
    title: "Claude Code vs Cursor (2026): precios, modelos y límites",
    description:
      "Claude Code vs Cursor en noviembre de 2026: los nuevos planes de Cursor centrados en Grok tras unirse a SpaceX, cuánto cuestan los modelos de Claude en cada uno, agentes, CLI, reglas, MCP, hooks y cómo elegir.",
  },
  breadcrumb: "Claude Code vs Cursor",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-06" },
  hero: {
    kicker: "Blog · Claude Code",
    title: "Claude Code vs Cursor en 2026: qué ha cambiado y cuál elegir",
    lead: "Claude Code es el agente de programación de Anthropic: funciona en tu terminal, tu IDE, la aplicación de escritorio o el navegador con una suscripción de Claude. Cursor es un editor de código con IA que tiene su propio agente, una CLI y agentes en la nube. La comparación cambió este año: Cursor pasó a formar parte de SpaceX en agosto de 2026, sus planes ahora giran en torno a los modelos Grok y los modelos de Claude en Cursor se facturan aparte, al precio de lista de la API. Esta guía compara precios, modelos, límites y funciones a 6 de noviembre de 2026, y explica cómo elegir o cómo usar los dos.",
    cta: "Empezar",
    secondary: "Ir a la comparación",
    secondaryHref: "#compare",
  },
  sections: [
    {
      kind: "table",
      id: "compare",
      title: "Claude Code vs Cursor de un vistazo",
      headers: ["", "Claude Code", "Cursor"],
      rows: [
        ["Creado por", "Anthropic", "Cursor, parte de SpaceX desde agosto de 2026"],
        ["Qué es", "Un agente de programación para terminal, IDE, escritorio, web y móvil", "Un editor de código con IA, más una CLI (`agent`), agentes en la nube y revisión de código"],
        ["Modelos principales", "Claude Opus 5.5, Sonnet 5.5, Haiku 5.5, Fable 5.1", "Grok 4.5 a 4.7 y Composer 2.5; Claude, GPT, Gemini y otros al precio de lista de la API"],
        ["Plan de pago más barato", "Claude Pro, $20/mes", "Plus, $8/mes, solo modelos Grok"],
        ["Coste de los modelos de Claude", "Incluido en los límites de tu plan de Claude", "Se factura aparte por uso, al precio de lista de la API (Premium y superiores)"],
        ["Instrucciones del proyecto", "`CLAUDE.md`, `.claude/rules/`; lee AGENTS.md si no hay CLAUDE.md", "`.cursor/rules/*.mdc`, `AGENTS.md`, reglas de usuario y de equipo"],
        ["Plataformas", "macOS, Windows, Linux", "macOS, Windows, Linux"],
      ],
    },
    {
      kind: "table",
      title: "Precios: planes de Claude vs planes de Cursor",
      text: [
        "Precios mensuales en dólares estadounidenses, según claude.com/pricing y cursor.com/pricing. Los planes de Cursor ahora incluyen también funciones de X, como menos anuncios en el timeline, y comparten con Grok una única cuota de uso de IA que se renueva cada semana.",
      ],
      headers: ["Plan de Claude", "Precio", "Plan de Cursor", "Precio"],
      rows: [
        ["Free", "Sin Claude Code", "Free", "$0, solicitudes al agente limitadas"],
        ["Pro", "$20 ($17 con pago anual)", "Plus", "$8, solo modelos Grok"],
        ["Max", "$100", "Premium", "$30: 4 veces el uso de Plus, agentes en la nube, automatizaciones, revisión de código, modelos de terceros a precio de API"],
        ["Ultra", "$200", "Super", "$100: 15 veces el uso de Plus"],
        ["Team", "$25 por puesto (Standard), $125 (Premium)", "Ultra", "$200: 50 veces el uso de Plus"],
        ["Enterprise", "$20 por puesto con pago anual, más uso a tarifas de API", "Teams, Enterprise", "Desde $30 por usuario; Enterprise a medida"],
      ],
    },
    {
      kind: "table",
      title: "Funciones lado a lado",
      headers: ["Función", "Claude Code", "Cursor"],
      rows: [
        ["Agente en la terminal", "`claude`, con modo headless `-p`", "CLI `agent`, con modo print `-p`"],
        ["Modo plan", "Sí (Shift+Tab, `/plan`)", "Sí (Shift+Tab, `/plan`)"],
        ["Agentes en la nube", "Claude Code en la web, sesiones en la nube", "Agentes en la nube en VM (Premium y superiores), que se lanzan desde la web, iOS, GitHub, Slack, Linear o la API"],
        ["Trabajo en paralelo", "`--worktree`, subagentes, vista de agentes", "`/worktree`, `/best-of-n` con varios modelos"],
        ["Automatizaciones", "`/loop`, tareas programadas de escritorio y en la nube", "Automatizaciones por cron, Git, Slack, Linear, webhooks, Sentry, PagerDuty (Premium y superiores)"],
        ["MCP", "Sí: `claude mcp add`, `.mcp.json`", "Sí: `.cursor/mcp.json`"],
        ["Hooks", "Sí, más de 30 eventos en `settings.json`", "Sí, unos 20 eventos en `hooks.json`; puede cargar hooks de Claude Code"],
        ["Revisión de código", "`/code-review` en local; `@claude review` en Team y Enterprise", "Bugbot en GitHub, GitLab, Bitbucket y Azure DevOps"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Cómo elegir entre Claude Code y Cursor",
      text: [
        "Ninguno es mejor en todo, y los benchmarks publicados favorecen a quien los publica. Decide según lo que cambia tu día a día.",
      ],
      steps: [
        {
          title: "Decide qué modelos quieres pagar",
          text: "Si quieres usar modelos de Claude todos los días, un plan de Claude los incluye dentro de sus límites; en Cursor se facturan aparte del plan, al precio de lista de la API. Si te basta con Grok y Composer, los planes de $8 y $30 de Cursor son más baratos que los de Claude.",
        },
        {
          title: "Decide dónde quieres trabajar",
          text: "Cursor es ante todo un editor: ediciones en línea, autocompletado con Tab y el agente en una sola ventana. Claude Code es ante todo un agente: funciona desde cualquier terminal y se integra con VS Code, JetBrains, la aplicación de escritorio, la web y Slack.",
        },
        {
          title: "Valora cuánto debe funcionar sin ti",
          text: "Los dos funcionan en la nube y de forma programada. Los agentes en la nube y las automatizaciones de Cursor requieren Premium o superior; las tareas programadas y las sesiones en la nube de Claude Code vienen con los planes de Claude. Consulta [cómo hacer proactivo a Claude Code](/proactive-claude-code).",
        },
        {
          title: "Mantén tu configuración portátil",
          text: "Escribe las reglas compartidas en AGENTS.md (los dos lo leen) e impórtalo desde CLAUDE.md; Cursor además puede cargar hooks de Claude Code. Así cambiar o combinarlos cuesta poco. Consulta la [guía de CLAUDE.md](/blog/claude-md).",
        },
        {
          title: "O usa los dos",
          text: "La documentación de VS Code de Anthropic incluye un enlace de instalación para Cursor, así que la extensión de Claude Code funciona dentro del editor Cursor, con tu plan de Claude.",
        },
      ],
      source: { label: "Fuentes: documentación de Claude Code y precios de Cursor", href: cursorPricing },
    },
    {
      kind: "text",
      title: "Si usas la extensión de Claude Code en Cursor",
      text: [
        "El 29 de octubre de 2026, Cursor informó de que las versiones maliciosas 2.1.312 y 2.1.313 de la extensión Anthropic.claude-code, que no había creado Anthropic, estuvieron disponibles en el marketplace de extensiones de Cursor durante unas 11 horas, para Windows y macOS. Cursor las retiró, reconstruyó el marketplace y publicó una comprobación: si en tu `authorized_keys` hay una clave SSH con la etiqueta `svc-telemetry`, la máquina se vio afectada. Si instalaste o actualizaste la extensión ese día, sigue el aviso de seguridad de Cursor.",
      ],
    },
    {
      kind: "text",
      title: "¿Y Codex?",
      text: [
        "Codex, de OpenAI, es la tercera opción habitual: viene incluido en los planes de ChatGPT desde el gratuito y también funciona dentro de Cursor. Compáralo en [Claude Code vs Codex](/blog/claude-code-vs-codex) y consulta las [herramientas de orquestación para Claude Code](/blog/claude-code-orchestration-tools) para ejecutar varios agentes a la vez.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Con Crewmark",
      title: "Elijas el que elijas, dale un trabajo",
      text: [
        "Los editores y los agentes siguen esperando tu siguiente prompt. Crewmark convierte una sesión de Claude Code, Codex, DeepSeek Harness u OpenCode en un empleado de IA con un rol, una meta y un horario de trabajo, y la despierta con un heartbeat para que tome la siguiente issue de un tablero, con la suscripción que ya pagas.",
      ],
      steps: [
        {
          title: "Elige un rol y una meta",
          text: "Ingeniero de software, revisor, redactor SEO: cada uno tiene una meta escrita como un número. Lee [qué es un empleado de IA](/ai-employees).",
        },
        {
          title: "Deja que el heartbeat inicie el trabajo",
          text: "Durante su horario de trabajo, el empleado se despierta cada 15, 30 o 60 minutos en la misma conversación y toma la siguiente issue.",
        },
        {
          title: "Revisa en el tablero",
          text: "Comenta sobre la marcha y te escribe cuando necesita una decisión.",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Elegir entre Claude Code y Cursor" },
  mid: {
    title: "¿Ya elegiste tu agente? Ahora deja que trabaje sin esperarte.",
    text: "Crewmark despierta a Claude Code o Codex con un heartbeat, un rol, una meta y un tablero de issues.",
    button: "Empezar",
  },
  faq: {
    title: "Preguntas frecuentes sobre Claude Code vs Cursor",
    items: [
      {
        q: "¿Es Claude Code mejor que Cursor?",
        a: "Depende de cómo trabajes. Claude Code encaja con quien quiere los modelos de Claude incluidos en una suscripción y un agente que funcione desde cualquier terminal o IDE. Cursor encaja con quien quiere un editor con IA y ediciones en línea, y no tiene problema en usar modelos Grok o pagar precios de API por los demás.",
      },
      {
        q: "¿Puedo usar modelos de Claude en Cursor?",
        a: "Sí, en Premium ($30) y superiores, pero los modelos de terceros como Claude se facturan aparte por uso, al precio de lista de la API. El plan Plus de $8 solo ofrece modelos Grok.",
      },
      {
        q: "¿Cuál es más barato, Claude Code o Cursor?",
        a: "Los planes de entrada de Cursor son más baratos ($8 y $30 al mes), pero usar Claude en Cursor cuesta aparte. Si usas sobre todo modelos de Claude, un plan Claude Pro ($20) o Max ($100) suele salir más barato que pagar precios de API.",
      },
      {
        q: "¿Cursor pertenece ahora a SpaceX?",
        a: "Sí. Cursor anunció el 14 de agosto de 2026 que había sido adquirido por SpaceX, culminando un proceso que empezó en abril. Sus planes ahora incluyen funciones de X y modelos Grok.",
      },
      {
        q: "¿Puedo ejecutar Claude Code dentro de Cursor?",
        a: "Sí. La extensión de Claude Code se instala en Cursor con el enlace de instalación de Anthropic, y la CLI `claude` funciona en la terminal de Cursor. Usa la extensión oficial y comprueba su versión tras el aviso de seguridad de Cursor del 29 de octubre.",
      },
      {
        q: "¿Claude Code y Cursor comparten configuración?",
        a: "En parte. Los dos leen AGENTS.md, los dos admiten MCP (cada uno con su propio archivo de configuración) y Cursor puede cargar hooks de Claude Code. Por lo demás, los archivos de reglas y de ajustes son independientes.",
      },
      {
        q: "¿Y los límites de uso?",
        a: "Los planes de Claude usan una ventana de 5 horas más límites semanales compartidos con el chat de Claude. Los planes de Cursor comparten con Grok una cuota que se renueva cada semana, dimensionada como múltiplos del plan Plus, con recargas o facturación a precio de API cuando se agota.",
      },
    ],
  },
  cta: {
    title: "Convierte tu agente de programación en un compañero que no se detiene.",
    text: "Crewmark convierte sesiones de Claude Code, Codex y DeepSeek Harness en empleados de IA con roles, metas, horarios de trabajo y un heartbeat.",
    button: "Empezar",
  },
  checked: "Comprobado con la documentación de Claude Code, claude.com/pricing y cursor.com (precios, documentación, changelog y blog) el 6 de noviembre de 2026.",
  disclaimer:
    "Crewmark es un producto independiente, sin relación con Anthropic, Cursor ni SpaceX y sin su respaldo. Claude y Claude Code son marcas de Anthropic; Cursor, de su propietario.",
};
