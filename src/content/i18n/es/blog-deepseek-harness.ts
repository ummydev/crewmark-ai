import type { GuideCopy } from "@/components/landing/guide-article";

// Spanish translation of /blog/deepseek-harness; the English master is src/content/blog/deepseek-harness.ts.

const repo = "https://github.com/deepseek-ai/deepseek-harness";

const install = `# Ejecuta la interfaz web con Node.js
npx @deepseek-ai/dsh web
# luego abre http://127.0.0.1:3080

# O compílalo desde el código fuente
git clone https://github.com/deepseek-ai/deepseek-harness.git
cd deepseek-harness && pnpm install && pnpm run build && pnpm dsh web`;

const headless = `# Una tarea, sin interfaz, con un modo de permisos
dsh headless "Add tests for src/auth" --permission-mode workspace-write

# Emite los eventos como JSON, p. ej. para scripts
dsh headless "Summarize open TODOs" --json

# Añade un plugin a un perfil
dsh plugin --profile default add <package>`;

export const copy: GuideCopy = {
  meta: {
    title: "DeepSeek Harness: qué es, precios y vs Claude Code",
    description:
      "DeepSeek Harness (dsh) explicado: el harness de agentes open source de DeepSeek, app de escritorio y CLI, instalación, precios de la API de DeepSeek, plugins, el super-agent y su comparación con Claude Code, Codex y OpenCode.",
  },
  breadcrumb: "Guía de DeepSeek Harness",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-06" },
  hero: {
    kicker: "Blog · DeepSeek",
    title: "DeepSeek Harness: qué es, cómo instalarlo y cómo se compara",
    lead: "DeepSeek Harness (`dsh`) es el harness de agentes de código abierto de DeepSeek: una aplicación que ejecuta agentes de IA para tareas cotidianas, programación, investigación y trabajo en segundo plano, diseñada para que casi todo, desde las herramientas hasta la interfaz, sea un plugin. Tiene licencia MIT, está en vista previa para desarrolladores y es uno de los repositorios con más estrellas de GitHub, y las búsquedas sobre él han subido desde que apareció el prototipo Super-agent de DeepSeek el 31 de octubre de 2026. Esta guía explica qué es, la app de escritorio y la CLI, cómo instalarlo, cuánto cuesta, sus funciones principales y cómo se compara con Claude Code, Codex y OpenCode.",
    cta: "Empezar",
    secondary: "Ir a la instalación",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "table",
      id: "at-a-glance",
      title: "DeepSeek Harness de un vistazo",
      headers: ["", "DeepSeek Harness"],
      rows: [
        ["Creado por", "DeepSeek AI"],
        ["Qué es", "Un harness de agentes de código abierto con una arquitectura en la que «todo es un plugin», construido sobre el framework Cordis"],
        ["Licencia", "MIT; unas 275.000 estrellas en GitHub a 6 de noviembre de 2026"],
        ["Estado", "Vista previa para desarrolladores; DeepSeek advierte de cambios que rompen la compatibilidad, y todas las versiones están marcadas como prerelease (la última, v0.2.2-rc.1, del 4 de noviembre de 2026)"],
        ["Formas de usarlo", "App de escritorio (macOS con Apple silicon, Windows x64), interfaz web (`dsh web`), CLI headless y modos ACP y SDK"],
        ["Modelos por defecto", "`deepseek-flash` (DeepSeek-V4.1-Flash) y `deepseek-v4-pro`, cada uno con un contexto de 1.048.576 tokens"],
        ["Otros proveedores", "Anthropic, OpenAI, Kimi, GLM o cualquier endpoint compatible con OpenAI o Anthropic, incluido un servidor propio"],
        ["Precio", "Software gratuito; pagas el uso de la API de DeepSeek (o de otro proveedor)"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Cómo instalar y usar DeepSeek Harness",
      steps: [
        {
          title: "Elige escritorio o web",
          text: "Descarga la app de escritorio desde deepseek.com/en/harness para macOS (Apple silicon) o Windows (64 bits); en macOS también puede instalar un comando `dsh`. En cualquier equipo con Node.js, ejecuta la interfaz web con npx o compílalo desde el código fuente.",
          code: install,
        },
        {
          title: "Inicia sesión o añade una clave de API",
          text: "En el primer arranque, inicia sesión con tu cuenta de DeepSeek en el navegador o pega una clave de API de platform.deepseek.com en Settings → Models (Ajustes → Modelos). Las claves se guardan en `~/.dsh/.credentials.yaml` (`$DSH_HOME`).",
        },
        {
          title: "Dale instrucciones del proyecto",
          text: "DeepSeek Harness lee `AGENTS.md` o `CLAUDE.md` en tu proyecto (además de las variantes `.local.md`) y un `~/.dsh/AGENTS.md` global. Las instrucciones que ya escribiste para Claude Code o Codex sirven tal cual; consulta la [guía de CLAUDE.md](/blog/claude-md) y la [guía de AGENTS.md en Codex](/blog/codex-agents-md).",
        },
        {
          title: "Decide cuánto puede hacer",
          text: "Elige un modo de sandbox (`read-only`, `workspace-write` o `danger-full-access`) y una política de aprobación (`ask` o `never`). Las notas de seguridad de DeepSeek dicen que el harness es experimental, no ha pasado una auditoría de seguridad y el sandbox no garantiza aislamiento, así que empieza en solo lectura con el código que te importa.",
        },
        {
          title: "Ejecuta tareas en modo headless y añade plugins",
          text: "Usa `dsh headless` para tareas puntuales en scripts, `--resume` o `--session-id` para continuar una sesión y `dsh plugin` para añadir plugins como tareas programadas, subagentes o equipos de agentes.",
          code: headless,
        },
      ],
      source: { label: "Fuente: repositorio y documentación de DeepSeek Harness", href: repo },
    },
    {
      kind: "table",
      id: "pricing",
      title: "Precios de DeepSeek Harness: cuánto cuesta usarlo",
      text: [
        "El harness es gratuito y de código abierto. El uso se factura a través de la API de DeepSeek con estas tarifas, en dólares estadounidenses por millón de tokens (api-docs.deepseek.com, 6 de noviembre de 2026). Las tarifas fuera de hora punta son la mitad de las de hora punta; las horas punta son de 01:00 a 04:00 y de 06:00 a 10:00 UTC en días laborables, salvo festivos de China. DeepSeek no documenta ninguna cuota gratuita, así que «usarlo gratis» en la práctica significa software gratuito más el crédito de API que tengas.",
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
      title: "Funciones principales",
      points: [
        "Plugins para todo: herramientas, modelos, interfaces y comportamientos son plugins; se instalan por perfil o se crean pidiéndolo en el chat (\"Creator mode\", modo creador). Los plugins de la comunidad usan el topic de GitHub `dsh-plugin`.",
        "Entre los plugins oficiales y experimentales que enumera DeepSeek hay equipos de agentes, revisión de aprobaciones automáticas, tareas programadas, entrada por voz, una terminal, un bucle de agente y subagentes.",
        "Skills (carpetas `SKILL.md`), servidores MCP y hooks, incluido un puente experimental que ejecuta los hooks existentes de Claude Code.",
        "Subagentes dentro del proceso o respaldados por ACP, Codex, Claude Code u otro Harness.",
        "Sesiones que se pueden reanudar, compactación, modo headless con eventos JSON y un SDK para construir encima.",
        "El Super-agent: un bundle aparte con licencia MIT, dsh-superagent, hace que el harness actúe de forma proactiva en un repositorio de GitHub; DeepSeek lo llama prototipo de investigación. Consulta [DeepSeek Super-Agent explicado](/blog/deepseek-super-agent).",
        "El paper que suele enlazarse con él, \"A Programming Paradigm for Spatiotemporal Composability\" (arXiv, agosto de 2026), describe Cordis, el framework de base, no el harness en sí.",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "DeepSeek Harness vs Claude Code vs Codex vs OpenCode",
      text: [
        "DeepSeek no publica ninguna comparación; esta es nuestra lectura de la documentación de cada herramienta a 6 de noviembre de 2026. DeepSeek también documenta cómo usar sus modelos dentro de Claude Code, Codex y OpenCode, así que puedes combinarlos.",
      ],
      headers: ["", "DeepSeek Harness", "Claude Code", "Codex", "OpenCode"],
      rows: [
        ["Creado por", "DeepSeek", "Anthropic", "OpenAI", "Anomaly (código abierto)"],
        ["Licencia", "MIT", "Propietaria", "CLI Apache-2.0", "MIT"],
        ["Se paga con", "Uso de la API de DeepSeek (u otros proveedores)", "Plan de Claude desde $20/mes, o API", "Plan de ChatGPT (desde Free), o API", "Tus claves de API, o inicio de sesión con Copilot o ChatGPT"],
        ["Interfaces", "Escritorio (macOS, Windows), interfaz web, CLI headless", "Terminal, IDE, escritorio, web, móvil", "CLI, IDE, escritorio, web, móvil", "Terminal, escritorio, IDE, web"],
        ["Archivo de instrucciones", "AGENTS.md o CLAUDE.md", "CLAUDE.md (AGENTS.md como alternativa)", "AGENTS.md", "AGENTS.md"],
        ["Cómo ampliarlo", "Plugins para todo, skills, MCP, hooks", "Skills, plugins, MCP, hooks", "Skills, plugins, MCP, hooks", "Plugins, MCP"],
        ["Madurez", "Vista previa para desarrolladores, con cambios incompatibles previstos", "Disponible para todos", "Disponible para todos", "Código abierto activo"],
      ],
    },
    {
      kind: "text",
      title: "Preguntas que la gente busca",
      points: [
        "Linux: todavía no hay descarga de escritorio para Linux; en Linux, ejecuta la interfaz web con `npx @deepseek-ai/dsh web` o compílalo desde el código fuente.",
        "VS Code: DeepSeek no ofrece una extensión para VS Code; usa la interfaz de escritorio o web junto a tu editor, o usa los modelos de DeepSeek dentro de un agente de editor que DeepSeek documenta, como Claude Code o Codex.",
        "Ollama y modelos locales: no está documentado. El harness acepta un endpoint personalizado compatible con OpenAI o Anthropic para un servidor propio, que es la vía documentada para usar tus propios modelos.",
        "TUI: no incluye una interfaz de terminal por defecto; las opciones documentadas son un perfil personalizado o el plugin experimental de terminal.",
        "Paper: consulta el paper de Cordis más arriba; DeepSeek pide citar el harness como \"DeepSeek Harness: Everything is a Plugin\".",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Con Crewmark",
      title: "Dale a DeepSeek Harness un puesto, no solo una tarea",
      text: [
        "Crewmark es compatible con DeepSeek Harness, además de Claude Code, Codex y OpenCode. Convierte una sesión en un empleado de IA con un rol, un objetivo y un horario, y la despierta con un latido (heartbeat) para que tome la siguiente issue de un tablero compartido.",
      ],
      steps: [
        {
          title: "Elige DeepSeek Harness como agente",
          text: "Ejecuta el comando de configuración en tu proyecto; el empleado funciona en una sesión de DeepSeek Harness en tu equipo, facturada a tu cuenta de la API de DeepSeek.",
        },
        {
          title: "Dale un rol y un objetivo",
          text: "Un ingeniero de software, un especialista SEO, un growth marketer: cada uno con un número que mover. Lee [qué es un empleado de IA](/ai-employees).",
        },
        {
          title: "Deja que el latido inicie el trabajo",
          text: "Durante su horario se despierta cada 15, 30 o 60 minutos, toma la siguiente issue y te escribe cuando necesita una decisión. Compara enfoques en [qué es un superagent](/blog/superagent).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Instala y usa DeepSeek Harness" },
  mid: {
    title: "¿Usas DeepSeek Harness? Ponlo en el tablero.",
    text: "Crewmark despierta a DeepSeek Harness, Claude Code o Codex con un latido, con un rol, un objetivo y un tablero de issues.",
    button: "Empezar",
  },
  faq: {
    title: "Preguntas frecuentes sobre DeepSeek Harness",
    items: [
      {
        q: "¿Qué es DeepSeek Harness?",
        a: "Un harness de agentes de código abierto de DeepSeek AI (`dsh`, licencia MIT) para tareas cotidianas, programación, investigación y trabajo en segundo plano, construido en torno a plugins. Está en vista previa para desarrolladores.",
      },
      {
        q: "¿DeepSeek Harness es gratis?",
        a: "El software es gratuito y de código abierto. Para usarlo necesitas la API de un modelo, por defecto la de DeepSeek, que se factura por token; DeepSeek no documenta ninguna cuota gratuita.",
      },
      {
        q: "¿Cómo instalo DeepSeek Harness?",
        a: "Descarga la app de escritorio para macOS (Apple silicon) o Windows desde deepseek.com/en/harness, o ejecuta `npx @deepseek-ai/dsh web` con Node.js y abre http://127.0.0.1:3080.",
      },
      {
        q: "¿DeepSeek Harness funciona en Linux?",
        a: "No hay descarga de escritorio para Linux, pero la interfaz web y la CLI funcionan en Linux con npx o compilando desde el código fuente.",
      },
      {
        q: "DeepSeek Harness vs Claude Code: ¿cuál es mejor?",
        a: "Responden a necesidades distintas. DeepSeek Harness es de código abierto, barato por token con los modelos de DeepSeek y ampliable con plugins, pero está en vista previa para desarrolladores. Claude Code es un producto maduro incluido en los planes de Claude. Los modelos de DeepSeek también pueden funcionar dentro de Claude Code.",
      },
      {
        q: "¿DeepSeek Harness puede usar modelos de Claude o GPT?",
        a: "Sí. Incluye proveedores integrados para Anthropic, OpenAI, Kimi y GLM, y acepta cualquier endpoint compatible con OpenAI o Anthropic.",
      },
      {
        q: "¿Qué es el super agent de DeepSeek?",
        a: "dsh-superagent, un bundle prototipo de investigación para DeepSeek Harness publicado el 31 de octubre de 2026, que hace que actúe de forma proactiva en un repositorio de GitHub. Consulta [DeepSeek Super-Agent explicado](/blog/deepseek-super-agent).",
      },
    ],
  },
  cta: {
    title: "Convierte DeepSeek Harness en un empleado de IA.",
    text: "Crewmark convierte las sesiones de DeepSeek Harness, Claude Code, Codex y OpenCode en empleados de IA con roles, objetivos, horario laboral y un latido.",
    button: "Empezar",
  },
  checked: "Comprobado con deepseek.com, el repositorio deepseek-ai/deepseek-harness, la documentación de la API de DeepSeek y arXiv el 6 de noviembre de 2026.",
  disclaimer:
    "Crewmark es un producto independiente, sin relación con DeepSeek, Anthropic ni OpenAI y sin su respaldo. Los nombres de productos son marcas de sus propietarios.",
};
