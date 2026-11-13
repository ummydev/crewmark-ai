import type { GuideCopy } from "@/components/landing/guide-article";

// Spanish translation of /blog/cursor-alternatives; the English master is src/content/blog/cursor-alternatives.ts.

const copilot = "https://github.com/features/copilot/plans";

export const copy: GuideCopy = {
  meta: {
    title: "Alternativas a Cursor en 2026: 10 opciones gratis, open source y más baratas | Crewmark",
    description:
      "Cursor se unió a SpaceX y sus planes ahora giran en torno a Grok. Comparamos diez alternativas: Claude Code, Codex, GitHub Copilot, Devin Desktop (Windsurf), Zed, Cline, Kilo Code, OpenCode, Antigravity y Junie, con precios y planes gratuitos.",
  },
  breadcrumb: "Alternativas a Cursor",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-06" },
  hero: {
    kicker: "Blog · Herramientas de programación con IA",
    title: "Las mejores alternativas a Cursor en 2026",
    lead: "Cursor pasó a formar parte de SpaceX en agosto de 2026 y sus planes ahora giran en torno a Grok: el plan Plus de $8 solo ofrece modelos Grok, y Claude, GPT o Gemini se pagan aparte, al precio de lista de la API, a partir del plan de $30. Si no es lo que contrataste, hay buenas alternativas: agentes que vienen con la suscripción que ya tienes, editores con su propia IA y herramientas open source en las que usas tu propia clave. Aquí tienes diez, comparadas por lo que son, planes gratuitos, precios y modelos, a 6 de noviembre de 2026.",
    cta: "Acceso anticipado",
    secondary: "Ir a la comparación",
    secondaryHref: "#compare",
  },
  sections: [
    {
      kind: "table",
      id: "compare",
      title: "Alternativas a Cursor comparadas",
      text: [
        "Los precios de entrada son los planes individuales de pago más baratos que figuran en la página de cada proveedor, en dólares estadounidenses al mes. \"Modelos de Claude\" indica si puedes usar los modelos de Anthropic en la herramienta, incluidos o con tu propia clave.",
      ],
      headers: ["Herramienta", "Tipo", "Opción gratuita", "De pago desde", "Modelos de Claude", "Open source"],
      rows: [
        ["Claude Code", "Agente: terminal, IDE, escritorio, web", "No", "$20 (Claude Pro)", "Incluidos", "No"],
        ["OpenAI Codex", "Agente: CLI, IDE, escritorio, nube", "Sí, ChatGPT Free", "$8 (ChatGPT Go)", "No", "La CLI es Apache-2.0"],
        ["GitHub Copilot", "Extensión para la mayoría de los IDE, CLI", "Sí, 2000 autocompletados al mes", "$10 (Pro)", "Sí; Opus desde Pro+ ($39)", "No"],
        ["Devin Desktop (antes Windsurf)", "IDE", "Sí", "$20 (Pro)", "Sí", "No"],
        ["Zed", "Editor nativo", "Sí, con tus propias claves", "$10 (Pro)", "Con tu propia clave o un agente externo", "Sí"],
        ["Cline", "Extensión de VS Code y CLI", "Gratis; pagas el uso del modelo", "Sin plan individual", "Con tu propia clave", "Apache-2.0"],
        ["Kilo Code", "Extensión de VS Code y JetBrains, CLI", "Sí", "$19 (Kilo Pass Starter)", "Mediante su gateway o tu propia clave", "MIT"],
        ["OpenCode", "Agente de terminal, escritorio, IDE", "Sí", "No publicado", "Con tu propia clave; inicia sesión con Copilot o ChatGPT", "MIT"],
        ["Google Antigravity", "IDE agéntico, CLI", "Sí", "Business desde $30 por puesto", "En los planes de pago", "No"],
        ["JetBrains Junie", "Agente en los IDE de JetBrains, CLI", "Sí, Junie Lite", "AI Pro, a $8.33 según su página", "Sí, o con tu propia clave", "No"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Cómo elegir una alternativa a Cursor",
      steps: [
        {
          title: "Parte de la suscripción que ya pagas",
          text: "Claude Pro o Max incluyen Claude Code; cualquier plan de ChatGPT incluye Codex; muchas empresas ya tienen GitHub Copilot. Usar lo que ya pagas suele salir más barato que una herramienta nueva más facturas de API.",
        },
        {
          title: "Decide entre editor o agente",
          text: "Si quieres la sensación de Cursor (un editor con ediciones en línea y autocompletado con Tab), mira Devin Desktop, Zed, Copilot en VS Code o Antigravity. Si sobre todo delegas tareas a un agente, Claude Code, Codex y OpenCode funcionan desde cualquier terminal y editor.",
        },
        {
          title: "Si quieres algo gratis u open source",
          text: "Cline, Kilo Code, OpenCode y Zed son open source y gratuitos con tu propia clave de API; solo pagas al proveedor del modelo por lo que usas.",
        },
        {
          title: "Comprueba de dónde salen tus modelos",
          text: "Si quieres usar Claude a diario, una herramienta que lo incluye en un plan (Claude Code, Copilot, Devin Desktop, Junie) evita sorpresas por tokens. Las herramientas con tu propia clave te dan cualquier modelo a precio de lista.",
        },
        {
          title: "Llévate tus reglas",
          text: "Muchas de estas herramientas leen AGENTS.md, así que dejar `.cursor/rules` es básicamente copiar tus reglas en un solo archivo. Consulta la [guía de CLAUDE.md](/blog/claude-md) para usar un mismo archivo con varios agentes.",
        },
      ],
      source: { label: "Fuente: planes de GitHub Copilot y el sitio de cada proveedor", href: copilot },
    },
    {
      kind: "text",
      title: "Notas sobre cada alternativa",
      points: [
        "Claude Code: el agente de Anthropic, incluido en Claude Pro ($20, o $17 con pago anual), Max ($100) y Ultra ($200); también funciona con una clave de API. Compáralo en [Claude Code vs Cursor](/blog/claude-code-vs-cursor).",
        "OpenAI Codex: incluido en todos los planes de ChatGPT, desde Free (GPT-6 Luna) y Go ($8) hasta Plus ($20) y Pro (desde $100). Consulta [Claude Code vs Codex](/blog/claude-code-vs-codex).",
        "GitHub Copilot: Free, Pro ($10), Pro+ ($39) y Max ($100); funciona en VS Code, Visual Studio, JetBrains, Xcode, Neovim, Eclipse y Zed, con Claude, GPT, Gemini y otros modelos.",
        "Devin Desktop: el nuevo nombre de Windsurf, de Cognition; windsurf.com ahora redirige allí. Free, Pro ($20) y Max ($200).",
        "Zed: un editor nativo y rápido para macOS, Windows y Linux; gratis con tus propias claves o con agentes externos como Claude Code y Codex, y Pro a $10 para modelos alojados.",
        "Cline: una extensión de VS Code y una CLI open source; gratis, solo pagas la inferencia con tus propias claves.",
        "Kilo Code: open source (MIT), ahora propiedad de Anaconda; gratis con tus propias claves o con modelos gratuitos, y Kilo Pass desde $19.",
        "OpenCode: un agente de terminal open source con más de 75 proveedores de modelos; gratis, y puede iniciar sesión con una suscripción de Copilot o ChatGPT que ya tengas.",
        "Google Antigravity: el IDE agéntico y la CLI de Google, gratis para particulares; los planes de pago añaden Gemini 4 Argon y modelos de Claude.",
        "JetBrains Junie: el agente de programación de JetBrains en sus IDE y como CLI, con un nivel Lite gratuito y los planes AI Pro y Ultimate.",
        "No incluidos: Roo Code (su repositorio de GitHub está archivado), Gemini CLI (el uso personal pasó a Antigravity CLI en junio de 2026) y Aider (sin versiones nuevas desde agosto de 2025).",
      ],
    },
    {
      kind: "text",
      title: "Qué ha cambiado en Cursor",
      text: [
        "Cursor anunció el 14 de agosto de 2026 que SpaceX había completado su adquisición. Su página de precios ahora muestra Free, Plus ($8, solo modelos Grok), Premium ($30, con agentes en la nube, automatizaciones, revisión de código y modelos de terceros facturados por uso al precio de lista de la API), Super ($100) y Ultra ($200), junto con funciones de X como menos anuncios en el timeline. El uso es una única cuota compartida con Grok que se renueva cada semana. Si te quedas con Cursor, puedes seguir usando la extensión o la CLI de Claude Code dentro de él con tu plan de Claude.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Con Crewmark",
      title: "¿Cambias de herramienta? Dale un trabajo a la nueva.",
      text: [
        "Elijas el agente que elijas, seguirá esperando tu siguiente prompt. Crewmark convierte una sesión de Claude Code, Codex, DeepSeek Harness u OpenCode en un empleado de IA con un rol, una meta y un horario de trabajo, y la despierta con un heartbeat para que tome la siguiente issue de un tablero, con la suscripción que ya pagas.",
      ],
      steps: [
        {
          title: "Elige un rol y una meta",
          text: "Ingeniero de software, revisor, redactor SEO: cada empleado tiene una meta escrita como un número. Lee [qué es un empleado de IA](/ai-employees).",
        },
        {
          title: "Deja que el heartbeat inicie el trabajo",
          text: "Durante su horario de trabajo se despierta cada 15, 30 o 60 minutos y toma la siguiente issue; consulta [cómo hacer proactivo a Claude Code](/proactive-claude-code).",
        },
        {
          title: "Ejecuta varios a la vez",
          text: "Dale a cada uno su propio worktree y su rol; consulta las [herramientas de orquestación para Claude Code](/blog/claude-code-orchestration-tools).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Elegir una alternativa a Cursor" },
  mid: {
    title: "¿Dejas Cursor por Claude Code, Codex u OpenCode?",
    text: "Crewmark los convierte en empleados de IA que se despiertan con un heartbeat y toman la siguiente issue por sí mismos.",
    button: "Acceso anticipado",
  },
  faq: {
    title: "Preguntas frecuentes sobre alternativas a Cursor",
    items: [
      {
        q: "¿Cuál es la mejor alternativa a Cursor?",
        a: "Si tienes un plan de Claude, Claude Code; con ChatGPT, Codex; para un editor parecido a Cursor, Devin Desktop (antes Windsurf) o Copilot en VS Code; para algo gratis y open source, Cline, Kilo Code, OpenCode o Zed con tu propia clave.",
      },
      {
        q: "¿Hay alguna alternativa gratuita a Cursor?",
        a: "Sí. Cline, Kilo Code, OpenCode y Zed son gratis con tu propia clave de API, Copilot tiene un plan gratuito con 2000 autocompletados al mes, Codex funciona con ChatGPT Free, y Antigravity y Devin Desktop tienen planes gratuitos.",
      },
      {
        q: "¿Qué alternativas open source a Cursor existen?",
        a: "Cline (Apache-2.0), Kilo Code (MIT), OpenCode (MIT) y Zed son open source; la CLI de Codex también lo es (Apache-2.0).",
      },
      {
        q: "¿Por qué cambiaron los precios de Cursor?",
        a: "Tras la adquisición de Cursor por SpaceX (anunciada el 14 de agosto de 2026), sus planes pasaron a los modelos Grok y a una oferta que incluye X: Plus, a $8, solo ofrece Grok, y los modelos de terceros como Claude se pagan aparte, al precio de lista de la API, a partir de Premium ($30).",
      },
      {
        q: "¿Qué pasó con Windsurf?",
        a: "Windsurf ahora se llama Devin Desktop y lo desarrolla Cognition; windsurf.com redirige a devin.ai/desktop.",
      },
      {
        q: "¿Cuál es la alternativa a Cursor más barata?",
        a: "Las herramientas con tu propia clave (Cline, OpenCode, Kilo Code, Zed) no cuestan nada aparte del uso del modelo. Entre los planes, Codex empieza en $8 con ChatGPT Go y Copilot Pro en $10; si quieres Claude incluido, Claude Pro cuesta $20.",
      },
      {
        q: "¿Puedo conservar mis reglas de Cursor?",
        a: "En su mayoría, sí. Ponlas en AGENTS.md, que leen Codex, Copilot, OpenCode y otros; Claude Code lo lee mediante un import `@AGENTS.md` en CLAUDE.md.",
      },
    ],
  },
  cta: {
    title: "Nuevo agente de programación, la misma suscripción y, ahora, con un trabajo.",
    text: "Crewmark convierte sesiones de Claude Code, Codex, DeepSeek Harness y OpenCode en empleados de IA con roles, metas, horarios de trabajo y un heartbeat.",
    button: "Acceso anticipado",
  },
  checked: "Comprobado con cursor.com y el sitio web, la página de precios o el repositorio de GitHub de cada alternativa el 6 de noviembre de 2026.",
  disclaimer:
    "Crewmark es un producto independiente, sin relación con Cursor, SpaceX ni ninguno de los proveedores mencionados y sin su respaldo. Los nombres de productos son marcas de sus respectivos titulares.",
};
