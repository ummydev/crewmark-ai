import type { GuideCopy } from "@/components/landing/guide-article";

// Spanish translation of /blog/codex-agents-md; the English master is src/content/blog/codex-agents-md.ts.

const docs = "https://learn.chatgpt.com/docs/agent-configuration/agents-md";

const global = `# ~/.codex/AGENTS.md

## Working agreements

- Always run \`npm test\` after modifying JavaScript files.
- Prefer \`pnpm\` when installing dependencies.
- Ask for confirmation before adding new production dependencies.`;

const project = `# AGENTS.md (repository root)

## Repository expectations

- Run \`npm run lint\` before opening a pull request.
- Document public utilities in \`docs/\` when you change behavior.

# services/payments/AGENTS.override.md

## Payments service rules

- Use \`make test-payments\` instead of \`npm test\`.
- Never rotate API keys without notifying the security channel.`;

const config = `# ~/.codex/config.toml
project_doc_fallback_filenames = ["TEAM_GUIDE.md", ".agents.md"]
project_doc_max_bytes = 65536`;

const review = `## Code Review Rules

### Experiment cohorts

- Do not filter treatment comparisons on post-exposure behavior.
  Safe path: build cohorts from assignment or exposure.`;

export const copy: GuideCopy = {
  meta: {
    title: "AGENTS.md en Codex: ubicación, orden de carga y ejemplos",
    description:
      "Cómo lee Codex AGENTS.md: el archivo global en ~/.codex, los del proyecto y las carpetas, AGENTS.override.md, el orden de carga, el límite de 32 KiB, reglas de code review y ejemplos.",
  },
  breadcrumb: "Guía de AGENTS.md en Codex",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-06" },
  hero: {
    kicker: "Blog · Codex",
    title: "AGENTS.md en Codex: dónde va, en qué orden se carga y qué escribir",
    lead: "AGENTS.md es el archivo de instrucciones que Codex de OpenAI lee antes de ponerse a trabajar: tus comandos de build y de tests, tus convenciones y tus reglas, en Markdown sin más. Codex combina un archivo global en `~/.codex` con los archivos de tu repositorio, desde la raíz hasta la carpeta en la que trabajas. Esta guía cubre todas las ubicaciones, el orden de carga exacto y el límite de tamaño, los overrides, los nombres de archivo alternativos, las reglas de code review y ejemplos que puedes copiar.",
    cta: "Empezar",
    secondary: "Ir a la configuración",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "table",
      id: "order",
      title: "Dónde busca Codex AGENTS.md, en orden de carga",
      text: [
        "Codex construye la cadena de instrucciones una sola vez al arrancar (en la interfaz de terminal, una vez por sesión). Los archivos se unen de arriba abajo según esta tabla, así que las instrucciones más cercanas a tu directorio de trabajo llegan después y prevalecen.",
      ],
      headers: ["Orden", "Ubicación", "Qué lee Codex"],
      rows: [
        ["1. Global", "`~/.codex/` (o `$CODEX_HOME`)", "`AGENTS.override.md` si existe, si no `AGENTS.md`; solo el primero que no esté vacío"],
        ["2. Raíz del proyecto", "Normalmente la raíz de Git", "`AGENTS.override.md`, si no `AGENTS.md`, si no un nombre alternativo; como mucho un archivo"],
        ["3. Cada carpeta hacia abajo", "Cada directorio desde la raíz hasta donde iniciaste Codex", "La misma comprobación en cada directorio, un archivo por directorio"],
        ["Fin", "Tu directorio actual", "Las carpetas por debajo no se leen"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Cómo configurar AGENTS.md para Codex",
      steps: [
        {
          title: "Crea los valores globales por defecto",
          text: "Ejecuta `mkdir -p ~/.codex` y escribe en `~/.codex/AGENTS.md` las preferencias que quieras en todos los repositorios. Para comprobar que se ha cargado, pide a Codex que resuma sus instrucciones.",
          code: global,
        },
        {
          title: "Añade un archivo de proyecto y overrides donde los equipos difieran",
          text: "Pon un `AGENTS.md` en la raíz del repositorio para la configuración común. En una carpeta con reglas distintas, añade `AGENTS.override.md`: sustituye al `AGENTS.md` de esa carpeta, que Codex pasa a ignorar.",
          code: project,
        },
        {
          title: "Comprueba qué se ha cargado",
          text: "Inicia Codex en la carpeta que te interesa, por ejemplo `codex --cd services/payments`, y pídele que enumere las fuentes de instrucciones que ha cargado. Debería listar el archivo global, luego el de la raíz y luego el de la carpeta.",
        },
        {
          title: "Reutiliza un nombre de archivo existente o sube el límite",
          text: "Si tu repositorio ya guarda las instrucciones en otro archivo, añádelo a `project_doc_fallback_filenames` en `~/.codex/config.toml`. Codex deja de añadir archivos cuando el tamaño combinado alcanza `project_doc_max_bytes`, 32 KiB por defecto.",
          code: config,
        },
        {
          title: "Añade reglas para el code review de Codex",
          text: "Para `@codex review` en GitHub, añade una sección `## Code Review Rules` al AGENTS.md más cercano al código que regula. Indica qué debe señalar y cuál es la alternativa segura; deja el formato y el lint a la CI.",
          code: review,
        },
      ],
      source: { label: "Fuente: documentación de Codex, Custom instructions with AGENTS.md", href: docs },
    },
    {
      kind: "text",
      title: "Buenas prácticas para AGENTS.md",
      points: [
        "Limítate a lo que Codex no puede deducir: los comandos exactos de build, tests y lint (incluido cómo ejecutar un solo test), las trampas del código y las decisiones que no están escritas en ningún sitio.",
        "Pon las reglas más específicas cerca del código: un AGENTS.md anidado en `services/payments/` es mejor que un archivo raíz largo con una sección de pagos.",
        "Vigila el presupuesto de 32 KiB: los archivos se añaden desde la raíz hacia abajo y el resto se corta, así que divide los archivos largos en otros anidados o sube `project_doc_max_bytes`.",
        "Usa `AGENTS.override.md` para cambios temporales, globales o en una sola carpeta, y bórralo para volver atrás.",
        "Un AGENTS.md vacío se omite y la búsqueda en ese directorio pasa al siguiente nombre de archivo.",
        "Usa un `CODEX_HOME` aparte para los usuarios de automatización, para que sus instrucciones globales no se mezclen con las tuyas.",
      ],
    },
    {
      kind: "table",
      title: "AGENTS.md en Codex vs Claude Code y otros",
      text: [
        "AGENTS.md es un formato abierto que leen muchos agentes, lo que lo convierte en el mejor sitio para las instrucciones que quieres compartir. Claude Code tiene su propio archivo, CLAUDE.md; consulta la [guía de CLAUDE.md](/blog/claude-md) para los detalles.",
      ],
      headers: ["", "Codex", "Claude Code"],
      rows: [
        ["Archivo principal", "`AGENTS.md`", "`CLAUDE.md`; lee `AGENTS.md` solo si no hay CLAUDE.md"],
        ["Archivo personal o temporal", "`AGENTS.override.md`", "`CLAUDE.local.md`"],
        ["Archivo global", "`~/.codex/AGENTS.md`", "`~/.claude/CLAUDE.md`"],
        ["Carpetas anidadas", "De la raíz al directorio actual", "Las superiores al arrancar; las subcarpetas cuando Claude trabaja en ellas"],
        ["Límite de tamaño", "32 KiB combinados por defecto", "Límites por archivo; mejor por debajo de 200 líneas"],
        ["Compartir un archivo", "Nativo", "Pon `@AGENTS.md` al principio de CLAUDE.md"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Con Crewmark",
      title: "AGENTS.md le dice a Codex cómo. Crewmark le dice qué toca después.",
      text: [
        "Un buen AGENTS.md hace que cada sesión de Codex empiece bien informada, pero la sesión sigue esperando tu prompt. Crewmark convierte una sesión de Codex, Claude Code, DeepSeek Harness u OpenCode en un empleado de IA con un rol, un objetivo y un horario, y la despierta con un heartbeat para que tome la siguiente issue de un tablero.",
      ],
      steps: [
        {
          title: "Deja AGENTS.md en el repositorio",
          text: "La sesión de Codex del empleado lo lee igual que la tuya, así que las convenciones y los comandos de tests vienen incluidos.",
        },
        {
          title: "Deja que el heartbeat inicie el trabajo",
          text: "Durante su horario laboral el empleado se despierta cada 15, 30 o 60 minutos en la misma conversación; mira [cómo hacer proactivo a Codex](/proactive-codex).",
        },
        {
          title: "Combina agentes en un mismo tablero",
          text: "Un solo AGENTS.md puede servir a empleados de Codex y de Claude Code a la vez; compáralos en [Claude Code vs Codex](/blog/claude-code-vs-codex).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Configurar AGENTS.md para Codex" },
  mid: {
    title: "Codex conoce tus reglas. ¿Quién le da la siguiente tarea?",
    text: "Crewmark despierta a Codex con un heartbeat, un rol, un objetivo y un tablero de issues, con el plan de ChatGPT que ya pagas.",
    button: "Empezar",
  },
  faq: {
    title: "Preguntas frecuentes sobre AGENTS.md en Codex",
    items: [
      {
        q: "¿Qué es AGENTS.md en Codex?",
        a: "Un archivo Markdown con instrucciones que Codex lee antes de cualquier trabajo: comandos, convenciones y reglas de tu proyecto. Codex combina un archivo global con los archivos de tu repositorio.",
      },
      {
        q: "¿Dónde busca Codex AGENTS.md?",
        a: "Primero en `~/.codex` (o `$CODEX_HOME`) y luego en cada directorio desde la raíz del proyecto hasta la carpeta donde iniciaste Codex, leyendo como mucho un archivo por directorio.",
      },
      {
        q: "¿En qué orden se cargan los archivos AGENTS.md?",
        a: "Primero el global, luego el de la raíz del proyecto y después cada carpeta anidada hasta el directorio actual. Se unen en ese orden, así que el archivo más cercano va al final y tiene prioridad.",
      },
      {
        q: "¿Qué es AGENTS.override.md?",
        a: "Un archivo que Codex lee en lugar de AGENTS.md en el mismo directorio, ya sea a nivel global o en una carpeta. Úsalo para reglas temporales o propias de un equipo sin tocar el archivo compartido.",
      },
      {
        q: "¿Hay un límite de tamaño para AGENTS.md?",
        a: "Sí: Codex deja de añadir archivos cuando el tamaño combinado alcanza `project_doc_max_bytes`, 32 KiB por defecto. Súbelo en `~/.codex/config.toml` o reparte las instrucciones en archivos anidados.",
      },
      {
        q: "¿Puedo usar un solo archivo para Codex y Claude Code?",
        a: "Sí. Guarda las instrucciones comunes en AGENTS.md y añade `@AGENTS.md` al principio de CLAUDE.md, con las notas solo para Claude debajo.",
      },
      {
        q: "¿El code review de Codex lee AGENTS.md?",
        a: "Sí. Añade una sección `## Code Review Rules` al AGENTS.md más cercano al código y `@codex review` en GitHub la aplicará.",
      },
    ],
  },
  cta: {
    title: "Dale un trabajo a tu Codex bien informado.",
    text: "Crewmark convierte las sesiones de Codex, Claude Code y DeepSeek Harness en empleados de IA con roles, objetivos, horarios y un heartbeat.",
    button: "Empezar",
  },
  checked: "Comprobado con la documentación de Codex de OpenAI (Custom instructions with AGENTS.md) el 6 de noviembre de 2026.",
  disclaimer:
    "Crewmark es un producto independiente, sin relación con OpenAI ni Anthropic y sin su respaldo. Codex es una marca de OpenAI, y Claude y Claude Code de Anthropic.",
};
