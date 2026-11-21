import type { GuideCopy } from "@/components/landing/guide-article";
import { plan } from "@/lib/pricing";

// es translation of /blog/aider-alternatives; the English master is src/content/blog/aider-alternatives.ts.

const free = plan("free");
const pro = plan("pro");

const install = `# cecli, un fork comunitario de Aider
curl -LsSf https://cecli.dev/install.sh | sh

# OpenCode
curl -fsSL https://opencode.ai/v2/install | bash

# Pi
curl -fsSL https://pi.dev/install.sh | sh

# Nanocoder (modelos locales mediante Ollama)
npm install -g @nanocollective/nanocoder

# Codex CLI
npm install -g @openai/codex`;

const conventions = `# Aider cargaba tus convenciones con --read
aider --read CONVENTIONS.md

# OpenCode y Codex leen AGENTS.md en la raíz del repositorio
mv CONVENTIONS.md AGENTS.md

# Claude Code lee CLAUDE.md; importa ahí el mismo archivo
echo "@AGENTS.md" >> CLAUDE.md`;

export const copy: GuideCopy = {
  meta: {
    title: "Alternativas a Aider (2026): ¿Aider está muerto? Qué usar ahora",
    description:
      "¿Aider sigue mantenido? Su última versión, su último commit y sus issues abiertas, y luego las mejores alternativas a Aider en 2026: el fork cecli, OpenCode, Pi, Crush, Cline, Nanocoder, Codex CLI y Claude Code, con comandos de instalación.",
  },
  breadcrumb: "Alternativas a Aider",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-10" },
  hero: {
    kicker: "Blog · Agentes de programación",
    title: "Alternativas a Aider en 2026: ¿está muerto Aider y qué usar en su lugar?",
    lead: "Aider fue el pair programmer de IA original en el terminal: código abierto, cualquier modelo, un mapa de tu repositorio y un commit de git por cada cambio. Todavía se instala y funciona, y tiene unas 50.000 estrellas en GitHub. Pero su última versión etiquetada en GitHub es de agosto de 2025 y su último commit, del 22 de mayo de 2026, así que muchos usuarios buscan algo que siga el ritmo de los modelos nuevos. Aquí verás en qué punto está el proyecto, las alternativas más parecidas a cómo funciona Aider y cómo trasladar tu configuración.",
    cta: "Empezar",
    secondary: "¿Está muerto Aider?",
    secondaryHref: "#is-aider-dead",
  },
  sections: [
    {
      kind: "text",
      id: "is-aider-dead",
      title: "¿Está muerto Aider?",
      text: [
        "Oficialmente no. El repositorio no está archivado y nadie ha anunciado su fin. Pero, según todas las señales públicas, apenas se mantiene:",
      ],
      points: [
        "Última versión etiquetada en GitHub: v0.86.0, 9 de agosto de 2025. El último paquete en PyPI, aider-chat 0.86.2, se subió el 12 de febrero de 2026.",
        "Último commit en la rama principal: 22 de mayo de 2026, un merge que añadía nombres de modelos de Claude más recientes.",
        "Unas 1.960 issues y pull requests abiertas.",
        "En enero de 2026 un usuario abrió una issue preguntando por el futuro de Aider. Una respuesta lo describe básicamente como un proyecto de una sola persona que ha perdido ritmo; el mantenedor no ha contestado allí.",
        "El README sigue diciendo que Aider funciona mejor con Claude 3.7 Sonnet, DeepSeek R1, o3-mini y GPT-4o.",
      ],
    },
    {
      kind: "text",
      title: "Elecciones rápidas",
      points: [
        "Aider, pero todavía actualizado: cecli, un fork comunitario de Aider.",
        "El agente de terminal de código abierto más popular, con cualquier modelo: OpenCode, MIT, unas 226.000 estrellas.",
        "El espíritu minimalista de Aider: Pi, un harness pequeño que amplías tú mismo, MIT, unas 121.000 estrellas.",
        "Modelos locales primero, como lo usaban muchos usuarios de Aider: Nanocoder, con Ollama.",
        "El modo watch de Aider, en el que pides cambios en comentarios del código: Cline o Kilo Code dentro de VS Code y JetBrains.",
        "Si ya pagas ChatGPT o Claude: Codex CLI o Claude Code.",
        "Un agente que avanza por un backlog con un horario, no solo cuando escribes: Crewmark, sobre Claude Code o Codex.",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Comparativa de alternativas a Aider",
      text: [
        "Estrellas redondeadas, de la API de GitHub el 10 de noviembre de 2026; “último commit” es el commit más reciente en la rama principal ese día.",
      ],
      headers: ["Herramienta", "Licencia", "Hecha con", "Modelos", "Cuánto cuesta", "Ideal para"],
      rows: [
        ["[Aider](https://github.com/Aider-AI/aider)", "Apache 2.0 (~50k estrellas)", "Python", "Casi cualquiera, incluidos locales", "Gratis; tu clave del modelo", "La referencia; último commit el 22 de mayo de 2026"],
        ["[cecli](https://github.com/cecli-dev/cecli)", "Apache 2.0 (~420 estrellas)", "Python", "Como Aider", "Gratis; tu clave del modelo", "Quedarte cerca de Aider con un fork que sigue actualizándose"],
        ["[OpenCode](https://github.com/anomalyco/opencode)", "MIT (~226k estrellas)", "TypeScript", "Cualquier proveedor, modelos locales", "Modelos gratis con límite diario; Go $10/mes", "Un agente de terminal completo con modos Plan y Build y una app de escritorio"],
        ["[Pi](https://github.com/earendil-works/pi)", "MIT (~121k estrellas)", "TypeScript", "Tu suscripción o clave de API", "Gratis", "Un harness mínimo que amplías con herramientas y skills"],
        ["[Crush](https://github.com/charmbracelet/crush)", "FSL-1.1-MIT (~29k estrellas)", "Go", "La mayoría de proveedores, Ollama", "Gratis; tu clave", "Una interfaz de terminal pulida con LSP y MCP, en todas las plataformas"],
        ["[Cline](https://github.com/cline/cline)", "Apache 2.0 (~71k estrellas)", "TypeScript", "Tu clave del modelo", "Gratis", "Un agente en VS Code, JetBrains o el terminal"],
        ["[Kilo Code](https://github.com/Kilo-Org/kilocode)", "MIT (~28k estrellas)", "TypeScript", "Más de 500, a la tarifa del proveedor", "Gratis para empezar", "Extensiones de IDE más una CLI derivada de OpenCode"],
        ["[Nanocoder](https://github.com/Nano-Collective/nanocoder)", "MIT (~2.6k estrellas)", "TypeScript", "Ollama o cualquier API compatible con OpenAI", "Gratis", "Programación privada y local primero"],
        ["[Codex CLI](https://github.com/openai/codex)", "Apache 2.0 (~134k estrellas)", "Rust", "OpenAI", "Cualquier plan de ChatGPT, incluido Free; o una clave de API", "Usuarios de ChatGPT que quieren un agente nativo y rápido"],
        ["[Claude Code](https://code.claude.com/docs)", "Propietaria", "-", "Anthropic", "Claude Pro $20/mes", "Usuarios de Claude"],
        ["[Plandex](https://github.com/plandex-ai/plandex)", "MIT (~16k estrellas)", "Go", "Varios proveedores", "Gratis; tu clave del modelo", "Proyectos grandes; último commit el 3 de octubre de 2025"],
        ["[Crewmark](/pricing)", "Propietaria", "-", "A través de tu Claude Code o Codex", `Plan Free (${free.projects} proyecto, ${free.employees} empleados de IA); Pro $${pro.price}/mes próximamente`, "Un agente con un rol, horario laboral y un heartbeat que toma la siguiente issue de un tablero"],
      ],
    },
    {
      kind: "steps",
      id: "open-source",
      title: "Alternativas de código abierto a Aider que puedes instalar hoy",
      text: [
        "Cada una se instala con un solo comando. Lee el script antes de pasarlo a tu shell.",
      ],
      steps: [
        {
          title: "cecli, el fork de Aider",
          text: "cecli nació como fork de Aider en agosto de 2025 y sigue actualizándose. Se describe como un agente de CLI pensado para la extensibilidad y la personalización, se instala como el comando `cecli` en macOS, Linux y Windows, y también está en PyPI como cecli-dev.",
          code: install,
        },
        {
          title: "OpenCode",
          text: "El más cercano a Aider en alcance: código abierto, terminal primero y cualquiera de más de 200 proveedores de modelos, incluidos los locales. Añade un agente Plan de solo lectura junto al agente Build con acceso completo, subagentes y una app de escritorio en beta.",
        },
        {
          title: "Pi y Nanocoder",
          text: "Pi mantiene el núcleo pequeño y prescinde a propósito de subagentes y modo plan; añades lo que necesites con extensiones y skills. Nanocoder lo desarrolla un colectivo sin ánimo de lucro para modelos locales mediante Ollama, con modos plan y architect, este último familiar para los usuarios de Aider.",
        },
      ],
      source: { label: "Fuente: el README de cada proyecto en GitHub", href: "https://github.com/cecli-dev/cecli" },
    },
    {
      kind: "steps",
      id: "migrate",
      title: "Cómo pasar de Aider a otro agente",
      steps: [
        {
          title: "Lleva contigo tu archivo de convenciones",
          text: "Aider lee las convenciones de código de un archivo que cargas con `--read`. OpenCode y Codex leen `AGENTS.md` en la raíz del repositorio, y Claude Code lee `CLAUDE.md`, que puede importar `AGENTS.md`. Consulta [AGENTS.md para Codex](/blog/codex-agents-md) y [CLAUDE.md](/blog/claude-md).",
          code: conventions,
        },
        {
          title: "Decide cómo quieres los commits",
          text: "Aider hace commit de cada cambio con un mensaje generado. Claude Code, Codex y OpenCode te dejan los commits a ti por defecto, así que pide un commit cuando un cambio esté terminado o escribe tu regla de commits en AGENTS.md.",
        },
        {
          title: "Trae tus modelos",
          text: "Si usabas Aider con DeepSeek o un modelo local, OpenCode, Crush, Nanocoder y Pi aceptan tus propias claves, y los tres primeros hablan con Ollama. Consulta [Claude Code con DeepSeek](/blog/claude-code-deepseek) para el caso contrario.",
        },
      ],
    },
    {
      kind: "text",
      id: "vs",
      title: "Aider vs OpenCode, Claude Code, Pi y Cline",
      points: [
        "Aider vs OpenCode: ambos son de código abierto y agnósticos respecto al modelo. OpenCode recibe más de 100 commits a la semana y añade agentes, subagentes, MCP y una app de escritorio; Aider es más sencillo y hace los commits por ti.",
        "Aider vs Claude Code: Claude Code es de código cerrado y ejecuta los modelos de Anthropic, incluido desde Claude Pro a $20 al mes; recibe antes que nadie las funciones nuevas de Claude. Aider es gratis y funciona con cualquier modelo.",
        "Aider vs Pi: ambos son pequeños a propósito. Pi está en desarrollo activo, con un SDK, modo RPC y un sistema de paquetes para extensiones.",
        "Aider vs Cline: Cline vive sobre todo en tu editor, aunque también tiene CLI; Aider es terminal primero, con un modo watch para comentarios en el editor.",
        "Aider vs Codex: Codex CLI es de código abierto, está escrito en Rust y se incluye en todos los planes de ChatGPT; ejecuta los modelos de OpenAI.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Con Crewmark",
      title: "De pair programmer a compañero con un backlog",
      text: [
        "Aider y todas las herramientas de esta lista esperan tu siguiente mensaje. Crewmark convierte tu propio Claude Code o Codex en un empleado de IA con un rol, un objetivo en cifras, horario laboral y un heartbeat: durante su turno se despierta, toma la siguiente issue de un tablero, hace commit, abre una pull request y te escribe cuando necesita una decisión.",
      ],
      steps: [
        {
          title: "Contrata a un empleado sobre tu agente",
          text: "Ejecuta el comando de configuración en una conversación de Claude Code o Codex; esa conversación se convierte en el empleado. Consulta el [ingeniero de software de IA](/ai-employees/software-engineer).",
        },
        {
          title: "Dale horario y un heartbeat",
          text: "Se despierta cada 15 a 240 minutos durante el horario que fijes. Consulta [cómo ejecutar Claude Code 24/7](/blog/run-claude-code-24-7).",
        },
        {
          title: "Compara el resto",
          text: "Para más agentes de terminal, consulta [alternativas a OpenCode](/blog/opencode-alternatives); para editores, [alternativas a Cursor](/blog/cursor-alternatives).",
        },
      ],
    },
  ],
  mid: {
    title: "¿Quieres un agente que siga trabajando entre tus prompts?",
    text: "Los empleados de Crewmark se despiertan con un heartbeat durante el horario laboral y toman la siguiente issue de un tablero.",
    button: "Empezar",
  },
  faq: {
    title: "Preguntas frecuentes sobre las alternativas a Aider",
    items: [
      {
        q: "¿Está muerto Aider?",
        a: "No está archivado y todavía se instala y funciona. Pero su última versión en GitHub fue la v0.86.0 en agosto de 2025, la última en PyPI en febrero de 2026 y su último commit el 22 de mayo de 2026, y una pregunta de enero de 2026 sobre su futuro no tiene respuesta del mantenedor.",
      },
      {
        q: "¿Aider sigue mantenido?",
        a: "Apenas. No hay commits desde el 22 de mayo de 2026, hay unas 1.960 issues y pull requests abiertas y el README sigue recomendando modelos de principios de 2025. cecli, un fork comunitario, sigue actualizándose.",
      },
      {
        q: "¿Existe un fork de Aider?",
        a: "Sí: cecli, un fork de Aider en GitHub iniciado en agosto de 2025, Apache 2.0, que se instala como el comando `cecli`. Es mucho más pequeño que Aider, con unas 420 estrellas.",
      },
      {
        q: "Aider vs OpenCode: ¿cuál es mejor en 2026?",
        a: "Para la mayoría, OpenCode: es de código abierto y agnóstico respecto al modelo como Aider, pero se actualiza casi a diario y añade subagentes, MCP y una app de escritorio. Aider es más sencillo y hace commit de cada cambio por ti.",
      },
      {
        q: "¿Aider es gratis?",
        a: "Sí. Aider es Apache 2.0 y gratuito; pagas a tu proveedor de modelos, o nada si usas un modelo local.",
      },
      {
        q: "¿Cuál es la mejor alternativa gratuita a Aider?",
        a: "OpenCode incluye modelos gratis con un límite diario; Nanocoder, Crush y OpenCode ejecutan modelos locales mediante Ollama sin coste; y Codex CLI funciona con una cuenta gratuita de ChatGPT.",
      },
    ],
  },
  cta: {
    title: "Dale a tu agente de programación un backlog, no solo un prompt.",
    text: "Crewmark convierte las sesiones de Claude Code y Codex en empleados de IA con roles, objetivos, horario laboral y un heartbeat.",
    button: "Empezar",
  },
  checked: "Verificado con el repositorio de GitHub, el README y las versiones de cada proyecto, PyPI y las páginas de precios de cada proveedor el 10 de noviembre de 2026.",
  disclaimer:
    "Crewmark es un producto independiente, no afiliado ni respaldado por Aider ni por ningún proyecto de la lista. Los nombres de productos son marcas comerciales de sus propietarios.",
};
