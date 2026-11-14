import type { GuideCopy } from "@/components/landing/guide-article";

// Spanish translation of /blog/claude-code-deepseek; the English master is src/content/blog/claude-code-deepseek.ts.

const docs = "https://api-docs.deepseek.com/quick_start/agent_integrations/claude_code";

const env = `export ANTHROPIC_BASE_URL=https://api.deepseek.com/anthropic
export ANTHROPIC_AUTH_TOKEN=<your DeepSeek API Key>
export ANTHROPIC_MODEL=deepseek-flash[1m]
export ANTHROPIC_DEFAULT_OPUS_MODEL=deepseek-flash[1m]
export ANTHROPIC_DEFAULT_SONNET_MODEL=deepseek-flash[1m]
export ANTHROPIC_DEFAULT_HAIKU_MODEL=deepseek-flash
export CLAUDE_CODE_SUBAGENT_MODEL=deepseek-flash
export CLAUDE_CODE_EFFORT_LEVEL=max
export CLAUDE_CODE_AUTO_COMPACT_WINDOW=786432`;

const windows = `$env:ANTHROPIC_BASE_URL="https://api.deepseek.com/anthropic"
$env:ANTHROPIC_AUTH_TOKEN="<your DeepSeek API Key>"
$env:ANTHROPIC_MODEL="deepseek-flash[1m]"
$env:ANTHROPIC_DEFAULT_OPUS_MODEL="deepseek-flash[1m]"
$env:ANTHROPIC_DEFAULT_SONNET_MODEL="deepseek-flash[1m]"
$env:ANTHROPIC_DEFAULT_HAIKU_MODEL="deepseek-flash"
$env:CLAUDE_CODE_SUBAGENT_MODEL="deepseek-flash"
$env:CLAUDE_CODE_EFFORT_LEVEL="max"
$env:CLAUDE_CODE_AUTO_COMPACT_WINDOW="786432"`;

export const copy: GuideCopy = {
  meta: {
    title: "Cómo usar DeepSeek V4 en Claude Code: configuración",
    description:
      "Usa Claude Code con los modelos de DeepSeek: las variables de entorno que DeepSeek documenta para deepseek-flash y deepseek-v4-pro, el mapeo de modelos, la búsqueda web, los precios y la configuración en Codex.",
  },
  breadcrumb: "Claude Code con DeepSeek",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-06" },
  hero: {
    kicker: "Blog · DeepSeek",
    title: "Cómo usar los modelos de DeepSeek en Claude Code",
    lead: "La API de DeepSeek habla el protocolo de Anthropic, así que Claude Code puede funcionar con los modelos de DeepSeek si lo apuntas a `https://api.deepseek.com/anthropic` con una clave de API de DeepSeek. DeepSeek documenta la configuración exacta: `deepseek-flash` (DeepSeek-V4.1-Flash) con un contexto de 1M de tokens para casi todo el trabajo, y `deepseek-v4-pro` detrás del nombre Opus. Esta guía explica la configuración en macOS, Linux y Windows, cómo se mapean los nombres de los modelos de Claude, cuánto cuesta y cómo hacer lo mismo en Codex.",
    cta: "Empezar",
    secondary: "Ir a la configuración",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "steps",
      id: "how-to",
      title: "Cómo configurar Claude Code con DeepSeek",
      steps: [
        {
          title: "Consigue una clave de API de DeepSeek",
          text: "Créala en platform.deepseek.com, en API keys, y añade saldo a la cuenta; el uso se factura por token.",
        },
        {
          title: "Instala Claude Code si aún no lo tienes",
          text: "La guía de DeepSeek lo instala con npm: Node.js 18 o posterior, Git for Windows en Windows, y después `npm install -g @anthropic-ai/claude-code` y `claude --version` para comprobarlo.",
        },
        {
          title: "Define las variables de entorno (macOS y Linux)",
          text: "Apuntan Claude Code al endpoint compatible con Anthropic de DeepSeek, usan `deepseek-flash` con su contexto de 1M para el modelo principal y los subagentes, y suben el nivel de esfuerzo y la ventana de compactación automática. Ponlas en el perfil de tu shell para conservarlas.",
          code: env,
        },
        {
          title: "O en Windows (PowerShell)",
          text: "La misma configuración como variables de entorno de PowerShell para la sesión actual.",
          code: windows,
        },
        {
          title: "Inicia Claude Code en tu proyecto",
          text: "Entra en el proyecto con `cd` y ejecuta `claude`. Todo lo demás, como CLAUDE.md, skills, hooks y servidores MCP, se configura como siempre.",
        },
      ],
      source: { label: "Fuente: documentación de la API de DeepSeek, Integrate with Claude Code", href: docs },
    },
    {
      kind: "table",
      title: "Cómo se mapean los nombres de modelos de Claude a los de DeepSeek",
      text: [
        "Cuando Claude Code (o la app de escritorio de Claude) envía un nombre de modelo de Claude al endpoint de DeepSeek, DeepSeek lo mapea así. Por eso la configuración de arriba fija todas las variables de modelo en `deepseek-flash`: si no, todo lo que pida Opus se factura a precios de V4 Pro.",
      ],
      headers: ["Nombre de modelo que envía Claude Code", "Modelo de DeepSeek que se usa", "Notas"],
      rows: [
        ["`claude-opus-*`", "`deepseek-v4-pro`", "Se factura a precios de V4 Pro"],
        ["`claude-sonnet-*`, `claude-haiku-*`", "`deepseek-flash`", "DeepSeek-V4.1-Flash; acepta imágenes"],
        ["`deepseek-flash[1m]`", "`deepseek-flash` con un contexto de 1.048.576 tokens", "Como en las variables recomendadas por DeepSeek"],
      ],
    },
    {
      kind: "table",
      id: "cost",
      title: "Cuánto cuesta",
      text: [
        "Precios de la API de DeepSeek en dólares estadounidenses por millón de tokens a 6 de noviembre de 2026. Las tarifas fuera de hora punta (fuera de 01:00–04:00 y 06:00–10:00 UTC en días laborables) son la mitad de las de hora punta. La búsqueda web de Claude Code también funciona con la API de DeepSeek, pero cada búsqueda añade tokens del modelo para resumir los resultados y se factura según la Search API de DeepSeek.",
      ],
      headers: ["Por 1M de tokens", "deepseek-flash, hora punta", "deepseek-flash, fuera de punta", "deepseek-v4-pro, hora punta", "deepseek-v4-pro, fuera de punta"],
      rows: [
        ["Entrada, acierto de caché", "$0.006", "$0.003", "$0.044", "$0.022"],
        ["Entrada, fallo de caché", "$0.30", "$0.15", "$1.32", "$0.66"],
        ["Salida", "$1.20", "$0.60", "$3.96", "$1.98"],
      ],
    },
    {
      kind: "text",
      title: "Usar DeepSeek en Codex",
      text: [
        "DeepSeek también es compatible con Codex, a través de la Responses API. Su guía ofrece un script de configuración que hace una copia de seguridad de `~/.codex/config.toml`, escribe un catálogo `~/.codex/models.json` con `deepseek-flash` y `deepseek-v4-pro` y añade un proveedor DeepSeek; con una sola configuración quedan cubiertos la CLI de Codex, la app de escritorio de ChatGPT y la extensión de VS Code. Lee el script antes de ejecutarlo, o sigue los pasos manuales de la misma guía. El script desactiva la búsqueda web integrada, que solo está disponible con `deepseek-v4-pro`. Para los archivos de instrucciones propios de Codex, consulta la [guía de AGENTS.md en Codex](/blog/codex-agents-md).",
      ],
    },
    {
      kind: "text",
      title: "Claude Code con DeepSeek vs DeepSeek Harness",
      points: [
        "Claude Code con DeepSeek: conservas la interfaz y las costumbres de Claude Code, incluidos CLAUDE.md, skills, hooks y plugins, y pagas los precios por token de DeepSeek en lugar de un plan de Claude.",
        "DeepSeek Harness: la app de agentes de código abierto de la propia DeepSeek, construida en torno a plugins, con app de escritorio e interfaz web; también puede ejecutar Claude Code o Codex como subagentes. Consulta la [guía de DeepSeek Harness](/blog/deepseek-harness).",
        "En ambos casos, los modelos son los mismos `deepseek-flash` y `deepseek-v4-pro`, facturados por DeepSeek.",
        "Para volver a los modelos de Anthropic, elimina las variables (o abre una shell nueva sin ellas) e inicia sesión en Claude Code como siempre.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Con Crewmark",
      title: "Modelos baratos, trabajando todo el día",
      text: [
        "Con los precios de DeepSeek, mantener ocupados a los agentes de Claude Code o DeepSeek Harness sale asequible. Crewmark convierte esas sesiones en empleados de IA con un rol, un objetivo y un horario, y despierta a cada uno con un latido (heartbeat) para que tome la siguiente issue de un tablero.",
      ],
      steps: [
        {
          title: "Usa la configuración que ya tienes",
          text: "Un empleado funciona en una sesión de Claude Code, Codex, DeepSeek Harness u OpenCode en tu equipo, con tu entorno y tus claves.",
        },
        {
          title: "Deja que el latido inicie el trabajo",
          text: "Durante su horario se despierta cada 15, 30 o 60 minutos en la misma conversación y toma la siguiente issue; consulta [cómo hacer proactivo a Claude Code](/proactive-claude-code).",
        },
        {
          title: "Mantén la factura bajo control",
          text: "El horario y una issue cada vez hacen que el consumo sea previsible; consulta [cómo reducir el consumo de tokens de Claude Code](/blog/reduce-claude-code-token-usage).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Usa los modelos de DeepSeek en Claude Code" },
  mid: {
    title: "Claude Code con DeepSeek sale barato. Déjalo trabajar más.",
    text: "Crewmark despierta a Claude Code, Codex o DeepSeek Harness con un latido, con un rol, un objetivo y un tablero de issues.",
    button: "Empezar",
  },
  faq: {
    title: "Preguntas frecuentes sobre Claude Code con DeepSeek",
    items: [
      {
        q: "¿Claude Code puede usar los modelos de DeepSeek?",
        a: "Sí. La API de DeepSeek es compatible con Anthropic en `https://api.deepseek.com/anthropic`. Define `ANTHROPIC_BASE_URL` con esa dirección y `ANTHROPIC_AUTH_TOKEN` con tu clave de API de DeepSeek, como muestra la guía de DeepSeek.",
      },
      {
        q: "¿Qué modelo de DeepSeek debo usar en Claude Code?",
        a: "La guía de DeepSeek usa `deepseek-flash` (DeepSeek-V4.1-Flash) con un contexto de 1M para todos los roles. `deepseek-v4-pro` se usa cuando una petición pide un modelo Opus, a precios más altos.",
      },
      {
        q: "¿Cuánto cuesta Claude Code con DeepSeek?",
        a: "Solo el uso de la API de DeepSeek: para `deepseek-flash`, $0.30 por millón de tokens de entrada con fallo de caché y $1.20 por millón de tokens de salida en hora punta, la mitad fuera de punta, y mucho menos para la entrada en caché.",
      },
      {
        q: "¿Funciona la búsqueda web en Claude Code con DeepSeek?",
        a: "Sí. DeepSeek admite la herramienta de búsqueda web de Claude Code; cada búsqueda añade tokens del modelo para resumir los resultados y se factura según la Search API de DeepSeek.",
      },
      {
        q: "¿Necesito una suscripción de Claude?",
        a: "No. Con estas variables, Claude Code envía las peticiones a DeepSeek y factura a tu cuenta de DeepSeek en lugar de a un plan de Claude.",
      },
      {
        q: "¿También puedo usar DeepSeek en Codex?",
        a: "Sí. DeepSeek documenta una configuración para Codex a través de la Responses API, con un script o editando a mano `~/.codex/config.toml` y `~/.codex/models.json`.",
      },
      {
        q: "¿Claude Code con DeepSeek o DeepSeek Harness?",
        a: "Si te gustan las herramientas y el flujo de trabajo de Claude Code, quédate con él y cambia el modelo. Si quieres la app de la propia DeepSeek, basada en plugins y con interfaz de escritorio, prueba DeepSeek Harness.",
      },
    ],
  },
  cta: {
    title: "Pon a tu agente con DeepSeek a trabajar con horario.",
    text: "Crewmark convierte las sesiones de Claude Code, Codex, DeepSeek Harness y OpenCode en empleados de IA con roles, objetivos, horario laboral y un latido.",
    button: "Empezar",
  },
  checked: "Comprobado con la documentación de la API de DeepSeek (integraciones con Claude Code y Codex, precios) el 6 de noviembre de 2026.",
  disclaimer:
    "Crewmark es un producto independiente, sin relación con DeepSeek, Anthropic ni OpenAI y sin su respaldo. Claude y Claude Code son marcas de Anthropic; Codex, de OpenAI.",
};
