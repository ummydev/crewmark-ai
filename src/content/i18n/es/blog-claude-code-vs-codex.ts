import type { GuideCopy } from "@/components/landing/guide-article";

// Spanish translation of /blog/claude-code-vs-codex; the English master is src/content/blog/claude-code-vs-codex.ts.

const claudeDocs = "https://code.claude.com/docs/en/overview";

export const copy: GuideCopy = {
  meta: {
    title: "Claude Code vs Codex (2026): precios, límites y funciones",
    description:
      "Claude Code vs OpenAI Codex en noviembre de 2026: modelos, planes y precios, límites de 5 horas y semanales, CLAUDE.md vs AGENTS.md, sandbox, subagentes, tareas programadas y cuál elegir.",
  },
  breadcrumb: "Claude Code vs Codex",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-05" },
  hero: {
    kicker: "Blog · Claude Code · Codex",
    title: "Claude Code vs Codex: ¿qué agente de programación deberías usar?",
    lead: "Claude Code es el agente de programación de Anthropic; Codex es el de OpenAI. Los dos leen tu repositorio, editan archivos, ejecutan comandos y funcionan desde una terminal, un IDE, una aplicación de escritorio, la web y el móvil. Se diferencian en modelos, planes, límites, valores por defecto y apertura. Esta comparación cubre cuánto cuesta cada uno, cómo funcionan sus límites de uso, cómo se comparan sus funciones y cuál encaja con cada tipo de trabajo, a noviembre de 2026.",
    cta: "Empezar",
    secondary: "Ir a la comparación",
    secondaryHref: "#compare",
  },
  sections: [
    {
      kind: "table",
      id: "compare",
      title: "Claude Code vs Codex de un vistazo",
      headers: ["", "Claude Code", "Codex"],
      rows: [
        ["Creado por", "Anthropic", "OpenAI"],
        ["Modelo por defecto", "Claude Opus 5.5; también Sonnet 5.5, Haiku 5.5 y Fable 5.1", "GPT-6.1 Sol; también GPT-6 Astra, GPT-6.1 Terra y GPT-6 Luna"],
        ["Dónde funciona", "Terminal, VS Code, JetBrains, aplicación de escritorio, claude.ai/code, apps móviles de Claude, Slack", "Terminal, VS Code, Cursor y Windsurf, aplicación de escritorio de ChatGPT, chatgpt.com/codex, app móvil de ChatGPT, Slack y Linear"],
        ["Plan más barato que lo incluye", "Claude Pro, $20/mes", "ChatGPT Free (limitado), luego Go a $8/mes y Plus a $20/mes"],
        ["Código abierto", "No: el repositorio es público, pero con todos los derechos reservados", "La CLI, el SDK y el App Server son de código abierto (Apache-2.0); la extensión del IDE y la nube no"],
        ["Archivo de instrucciones", "CLAUDE.md (lee AGENTS.md si no hay CLAUDE.md)", "AGENTS.md"],
        ["Sandbox", "Opcional para comandos de shell", "Activado por defecto"],
        ["Tareas programadas", "Tareas programadas en la nube (vista previa), tareas programadas de escritorio, `/loop`", "Tareas programadas en la aplicación de escritorio y en la nube"],
      ],
    },
    {
      kind: "table",
      title: "Precios: qué planes incluyen cada uno",
      text: [
        "Ambos vienen con la suscripción de chat de su creador, y ambos pueden funcionar con una clave de API, facturada por token. Los precios son mensuales, en dólares estadounidenses.",
      ],
      headers: ["Plan de Claude", "Precio", "Plan de ChatGPT", "Precio"],
      rows: [
        ["Free", "Sin Claude Code", "Free", "$0, solo GPT-6 Luna"],
        ["Pro", "$20 ($17 con pago anual)", "Go", "$8"],
        ["Max", "$100", "Plus", "$20"],
        ["Ultra", "$200", "Pro", "$100, $200 o $500"],
        ["Team", "$25 por puesto (Standard), $125 (Premium)", "Business", "$25 por usuario ($20 con pago anual)"],
        ["Enterprise", "$20 por puesto con pago anual, más uso a tarifas de API", "Enterprise, Edu", "Contactar con ventas"],
      ],
    },
    {
      kind: "text",
      title: "Límites de uso",
      text: [
        "Ambos usan una ventana móvil de 5 horas más límites semanales, y ambos comparten una sola cuota entre el chat y la programación. Ninguno publica las horas o mensajes exactos de cada plan.",
      ],
      points: [
        "Claude: Pro tiene un límite de 5 horas y un límite semanal. Max recibe 5 veces el uso de Pro. Ultra recibe 10 veces Pro por semana y, en cuentas verificadas, ningún límite de 5 horas. El chat de Claude, Claude Code y el IDE consumen del mismo fondo.",
        "Claude: si llegas al límite de 5 horas a mitad de una tarea, Claude Code puede terminar el paso en curso (una vez por semana en Pro, siempre en Max).",
        "Codex: OpenAI estima los mensajes locales por 5 horas en Plus según el modelo, desde 15–160 con GPT-6.1 Sol hasta 350–3,000 con GPT-6 Luna y 5–45 con GPT-6 Astra. ChatGPT Pro no tiene por ahora límite de 5 horas; pueden aplicarse límites semanales.",
        "Codex: las tareas en la nube y las revisiones de código en GitHub usan la misma cuota, y el modo rápido consume 2,5 veces más.",
        "Los dos permiten seguir más allá del límite: Claude con créditos de uso o una clave de API, Codex con créditos o una clave de API (la clave de API cubre la CLI, el SDK y el IDE, no las funciones en la nube).",
      ],
    },
    {
      kind: "table",
      title: "Funciones lado a lado",
      headers: ["Función", "Claude Code", "Codex"],
      rows: [
        ["Instrucciones del proyecto", "`CLAUDE.md`, `.claude/rules/`, memoria automática", "`AGENTS.md`, `AGENTS.override.md`, 32 KiB combinados por defecto"],
        ["Configuración", "`settings.json`", "`config.toml`"],
        ["Subagentes", "Sí, y agentes en segundo plano", "Sí: default, worker y explorer integrados, y agentes TOML personalizados"],
        ["Hooks", "Sí", "Sí, activados por defecto"],
        ["Skills, plugins, MCP", "Sí", "Sí"],
        ["Modo plan", "Sí (Shift+Tab)", "Sí"],
        ["Modos de permisos", "Manual, aceptar ediciones, plan, auto (revisado por un clasificador), bypass", "Pedir aprobación, aprobar por mí, acceso total, personalizado"],
        ["Sandbox", "Opcional: Seatbelt en macOS, bubblewrap en Linux; no en Windows nativo", "Activado por defecto, con un sandbox nativo de Windows"],
        ["Trabajo en paralelo", "Sesiones paralelas de escritorio y web, agentes en segundo plano", "Worktrees en la aplicación de escritorio, tareas en la nube"],
        ["Revisión de código", "`@claude review` en Team y Enterprise; `/code-review` en local en cualquier plan", "`@codex review` en GitHub; `/review` en la CLI"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Cómo elegir entre Claude Code y Codex",
      text: [
        "No hay un único ganador: cada empresa publica benchmarks donde su propio modelo lidera, y cambian con cada lanzamiento. Elige según lo que afecta a tu día a día.",
      ],
      steps: [
        {
          title: "Parte de la suscripción que ya pagas",
          text: "Si tienes Claude Pro o Max, Claude Code está incluido; si tienes ChatGPT Plus o Pro, también Codex. Probar los dos cuesta $40 al mes con los planes de entrada, y Codex funciona además con ChatGPT Free y Go, con límites menores.",
        },
        {
          title: "Ajusta los límites a cuánto trabajas",
          text: "Para sesiones largas todos los días, compara los planes superiores: Claude Ultra ($200) no tiene límite de 5 horas en cuentas verificadas, y ChatGPT Pro no lo tiene por ahora. Para un uso ocasional, bastan los planes de $20 de cualquiera de los dos.",
        },
        {
          title: "Decide cuánto quieres aislar en un sandbox",
          text: "Codex ejecuta los comandos en un sandbox por defecto, también en Windows. Claude Code pide permiso antes de actuar por defecto y ofrece un sandbox que activas tú, además de un modo auto donde un clasificador aprueba las acciones seguras.",
        },
        {
          title: "Revisa dónde trabaja tu equipo",
          text: "Claude Code tiene un plugin para JetBrains y funciona desde Slack; Codex se integra con Cursor, Windsurf, Slack y Linear. Ambos funcionan en VS Code, en la web y en el móvil.",
        },
        {
          title: "Mantén tus instrucciones portátiles",
          text: "Escribe las reglas del proyecto en AGENTS.md e impórtalo desde CLAUDE.md con `@AGENTS.md`; así los dos agentes leen el mismo archivo y cambiar no cuesta nada. Consulta la [guía de CLAUDE.md](/blog/claude-md).",
        },
      ],
      source: { label: "Fuentes: documentación de Claude Code y de Codex", href: claudeDocs },
    },
    {
      kind: "text",
      title: "¿Y Cursor, Gemini CLI y OpenCode?",
      text: [
        "Cursor es un editor con su propio agente, y también puede alojar las extensiones de Claude Code y Codex. Gemini CLI y OpenCode son agentes de terminal como estos dos; OpenCode es de código abierto y funciona con muchos proveedores de modelos. Todos leen AGENTS.md, así que la configuración portátil de arriba sirve para todos.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Con Crewmark",
      title: "Usa los dos: dale un rol a cada agente",
      text: [
        "Crewmark no te obliga a elegir. Convierte una sesión de Claude Code, Codex, DeepSeek Harness u OpenCode en un empleado de IA con un rol, una meta y un horario de trabajo, lo despierta con un heartbeat y le da issues de un tablero compartido. Un empleado puede funcionar con Claude Code y otro con Codex en el mismo proyecto.",
      ],
      steps: [
        {
          title: "Convierte una sesión en un empleado",
          text: "Elige un rol como ingeniero de software o especialista en SEO, escribe su meta como un número y ejecuta el comando de instalación en Claude Code o Codex.",
        },
        {
          title: "Deja que el heartbeat inicie el trabajo",
          text: "Durante su horario de trabajo, el empleado se despierta cada 15, 30 o 60 minutos en la misma conversación. Consulta [cómo hacer proactivo a Claude Code](/proactive-claude-code) y [cómo hacer proactivo a Codex](/proactive-codex).",
        },
        {
          title: "Asigna issues y responde a sus mensajes",
          text: "Pon el trabajo en el tablero; cada empleado toma lo que encaja con su rol, comenta sobre la marcha y te escribe cuando necesita una decisión. Lee [qué es un empleado de IA](/ai-employees).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Elegir entre Claude Code y Codex" },
  mid: {
    title: "¿Ya pagas Claude o ChatGPT?",
    text: "Crewmark convierte Claude Code y Codex en empleados de IA con un heartbeat y un tablero de issues, con el plan que ya tienes.",
    button: "Empezar",
  },
  faq: {
    title: "Preguntas frecuentes sobre Claude Code vs Codex",
    items: [
      {
        q: "¿Es Claude Code mejor que Codex?",
        a: "Ninguno es mejor para todos. Los dos son agentes capaces, con subagentes, hooks, skills, MCP y modo plan. Elige según la suscripción que tienes, los límites que necesitas, el sandbox por defecto que prefieres y las herramientas que usa tu equipo.",
      },
      {
        q: "¿Cuál es más barato, Claude Code o Codex?",
        a: "Codex tiene la entrada más barata: está incluido en ChatGPT Free (limitado) y en Go a $8 al mes. Claude Code empieza con Claude Pro a $20. A $20 al mes, Claude Pro y ChatGPT Plus incluyen su agente.",
      },
      {
        q: "¿Cuáles son los límites de uso de Claude Code y Codex?",
        a: "Ambos usan una ventana de 5 horas más límites semanales compartidos con el chat. Claude Max da 5 veces Pro y Ultra 10 veces Pro por semana. OpenAI estima 15–160 mensajes de GPT-6.1 Sol por 5 horas en Plus. Claude Ultra (verificado) y ChatGPT Pro no tienen por ahora límite de 5 horas.",
      },
      {
        q: "¿Qué modelos usan Claude Code y Codex?",
        a: "Claude Code usa por defecto Claude Opus 5.5, con Sonnet 5.5, Haiku 5.5 y Fable 5.1 disponibles. Codex usa por defecto GPT-6.1 Sol, con GPT-6 Astra, GPT-6.1 Terra y GPT-6 Luna disponibles.",
      },
      {
        q: "¿Codex es de código abierto? ¿Y Claude Code?",
        a: "La CLI de Codex es de código abierto bajo Apache-2.0; su extensión de IDE y la nube no. El repositorio de Claude Code es público pero no de código abierto: todos los derechos reservados, con uso bajo los términos comerciales de Anthropic.",
      },
      {
        q: "¿Pueden Claude Code y Codex compartir las mismas instrucciones?",
        a: "Sí. Escríbelas en AGENTS.md, que Codex lee, y pon `@AGENTS.md` en CLAUDE.md para que Claude Code lea el mismo archivo.",
      },
      {
        q: "¿Puedo usar Claude Code y Codex juntos?",
        a: "Sí. Muchos desarrolladores tienen ambos y cambian según la tarea. Con Crewmark, cada uno puede ser un empleado de IA con su propio rol, que toma issues del mismo tablero con un heartbeat.",
      },
    ],
  },
  cta: {
    title: "Pon a Claude Code y Codex en el mismo equipo.",
    text: "Crewmark convierte sesiones de Claude Code, Codex y DeepSeek Harness en empleados de IA con roles, metas, horarios de trabajo y un heartbeat.",
    button: "Empezar",
  },
  checked: "Comprobado con la documentación de Claude Code, claude.com/pricing, la documentación de Codex en learn.chatgpt.com y ambos repositorios de GitHub el 5 de noviembre de 2026.",
  disclaimer:
    "Crewmark es un producto independiente, sin relación con Anthropic ni OpenAI y sin su respaldo. Claude y Claude Code son marcas de Anthropic; ChatGPT y Codex son marcas de OpenAI.",
};
