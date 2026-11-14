import type { GuideCopy } from "@/components/landing/guide-article";

// Spanish translation of /blog/claude-md; the English master is src/content/blog/claude-md.ts.

const memory = "https://code.claude.com/docs/en/memory";

const example = `# Comandos
- Instalar: pnpm install
- Un solo archivo de test: pnpm vitest run path/to/file.test.ts
- Typecheck: pnpm tsc --noEmit

# Convenciones
- Lanza los errores con los helpers de src/lib/errors.ts, nunca con strings sueltos.
- src/legacy/ sigue en uso, pero no copies sus patrones.

# Trampas
- Los tests de integración necesitan DATABASE_URL (ver .env.example).`;

const rule = `---
paths: ["src/api/**/*.ts"]
---
- Cada handler valida su entrada con el esquema de src/api/schemas/.`;

export const copy: GuideCopy = {
  meta: {
    title: "CLAUDE.md: ubicación, plantilla y AGENTS.md | Crewmark AI",
    description:
      "Cómo funciona CLAUDE.md en Claude Code: dónde van los archivos y en qué orden se cargan, imports, reglas, qué escribir en él, una plantilla y su relación con AGENTS.md.",
  },
  breadcrumb: "Guía de CLAUDE.md",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-05" },
  hero: {
    kicker: "Blog · Claude Code",
    title: "CLAUDE.md: dónde va, qué escribir y cómo convive con AGENTS.md",
    lead: "CLAUDE.md es un archivo markdown de instrucciones que Claude Code lee al inicio de cada sesión: los comandos que ejecutar, las convenciones que seguir y las trampas que evitar en tu proyecto. Esta guía cubre todos los lugares donde puede vivir un CLAUDE.md y el orden en que se cargan, los imports y los archivos de reglas, qué debe y qué no debe llevar, una plantilla breve y su relación con AGENTS.md.",
    cta: "Empezar",
    secondary: "Ir a la plantilla",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "Qué es CLAUDE.md",
      text: [
        "Claude Code empieza cada sesión sin recordar la anterior. CLAUDE.md es la forma de darle el contexto que necesitaría un compañero nuevo: se lee al arrancar y se envía a Claude como un mensaje después del system prompt. Eso lo convierte en contexto, no en configuración obligatoria. Claude suele seguirlo, pero lo que deba ocurrir siempre o nunca pertenece a los hooks o a las reglas de permisos.",
      ],
      points: [
        "Markdown plano, sin campos obligatorios: funcionan mejor los encabezados y las viñetas cortas.",
        "Los archivos se combinan, no se sobrescriben: se carga cada CLAUDE.md que aplique, así que si hay líneas contradictorias Claude elige una.",
        "Comprueba qué se cargó con `/context all`, en Memory files.",
      ],
    },
    {
      kind: "table",
      title: "Dónde van los archivos CLAUDE.md y en qué orden se cargan",
      text: [
        "Claude Code los carga del más general al más específico, así que el archivo más cercano a donde lo iniciaste se lee el último. Además sube desde tu directorio de trabajo y carga el CLAUDE.md de cada directorio padre.",
      ],
      headers: ["Ámbito", "Ubicación", "Para qué sirve"],
      rows: [
        ["Política gestionada", "`/Library/Application Support/ClaudeCode/CLAUDE.md` (macOS), `/etc/claude-code/CLAUDE.md` (Linux), `C:\\Program Files\\ClaudeCode\\CLAUDE.md` (Windows)", "Reglas que una organización fija para todos sus desarrolladores"],
        ["Usuario", "`~/.claude/CLAUDE.md`", "Tus preferencias personales en todos los proyectos"],
        ["Proyecto", "`./CLAUDE.md` o `./.claude/CLAUDE.md`", "Las instrucciones del equipo, versionadas en git"],
        ["Local", "`./CLAUDE.local.md`", "Tus notas para un proyecto; añádelo a .gitignore"],
        ["Subdirectorio", "`some/dir/CLAUDE.md`", "Se carga solo cuando Claude lee o edita un archivo de ese directorio"],
        ["Reglas", "`.claude/rules/*.md` y `~/.claude/rules/`", "Archivos por tema; con un glob `paths` se cargan solo para los archivos que coinciden"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Cómo escribir un CLAUDE.md que funcione",
      steps: [
        {
          title: "Empieza con /init",
          text: "Ejecuta `/init` en tu proyecto. Claude Code lee el código y escribe un CLAUDE.md inicial; si ya existe uno, propone mejoras en lugar de sobrescribirlo. También recoge `.cursorrules` y las instrucciones de Copilot.",
        },
        {
          title: "Déjalo en lo que Claude no puede averiguar solo",
          text: "Conserva los comandos exactos de build, test y lint (incluido cómo ejecutar un solo test), los lugares donde el código engaña, las decisiones que no están escritas en ningún sitio y todo lo que hayas tenido que corregir dos veces. Quita los árboles de archivos y la arquitectura que Claude puede leer en el repositorio. Anthropic recomienda no pasar de 200 líneas.",
          code: example,
        },
        {
          title: "Sé específico, sin gritar",
          text: "Escribe \"Usa indentación de 2 espacios\", no \"Formatea bien el código\". La documentación actual dice que IMPORTANT y las MAYÚSCULAS son un consejo anticuado: hacen que Claude aplique una regla en exceso. Si una línea se sigue pasando por alto, acorta el archivo o convierte la regla en un hook.",
        },
        {
          title: "Divídelo con imports y reglas",
          text: "`@path/to/file` importa otro archivo (relativo al archivo que importa, hasta cuatro niveles de profundidad); una `@` dentro de comillas invertidas se queda literal. Las reglas que valen para una parte del código van en `.claude/rules/` con un glob `paths`, de modo que se cargan solo cuando Claude toca archivos que coinciden.",
          code: rule,
        },
        {
          title: "Pasa los procedimientos a skills",
          text: "Los flujos de varios pasos, como preparar un release, van en una skill (`.claude/skills/<name>/SKILL.md`), que se carga solo cuando es relevante. CLAUDE.md se lee en cada tarea, así que cada línea cuesta atención.",
        },
        {
          title: "Mantenlo al día",
          text: "Añade una línea cuando Claude repita un error o una revisión detecte algo, y edita el archivo con `/memory` o pidiéndole a Claude que lo actualice. `/doctor` propone recortes cuando el archivo crece demasiado.",
        },
      ],
      source: { label: "Fuente: documentación de Claude Code, How Claude remembers your project", href: memory },
    },
    {
      kind: "table",
      title: "CLAUDE.md frente a AGENTS.md",
      text: [
        "AGENTS.md es un formato abierto de instrucciones para agentes de programación, usado por Codex, Cursor, Gemini CLI, el agente de código de GitHub Copilot, opencode y muchos más. Claude Code ahora también lo lee, pero por defecto solo cuando el proyecto no tiene CLAUDE.md.",
      ],
      headers: ["", "CLAUDE.md", "AGENTS.md"],
      rows: [
        ["Lo leen", "Claude Code", "Codex, Cursor, Gemini CLI, Copilot, opencode y otros; Claude Code como alternativa"],
        ["Cuándo lo lee Claude Code", "Siempre", "Por defecto solo si no hay CLAUDE.md, `.claude/CLAUDE.md` ni CLAUDE.local.md en el árbol; `/config` puede leer ambos"],
        ["Archivo personal", "`CLAUDE.local.md`", "Claude Code no lo lee (`AGENTS.override.md` es de Codex)"],
        ["Imports", "`@path`, hasta cuatro niveles", "Ninguno en el formato"],
        ["Reglas por ruta", "`.claude/rules/` con `paths`", "Archivos AGENTS.md anidados por directorio"],
      ],
    },
    {
      kind: "text",
      title: "Un solo archivo para Claude Code y Codex",
      text: [
        "Si tu equipo usa ambos agentes, deja las instrucciones compartidas en AGENTS.md y haz que CLAUDE.md lo importe, con las notas solo para Claude debajo. Nunca se carga dos veces. Un symlink (`ln -s AGENTS.md CLAUDE.md`) también sirve, pero no para quienes trabajan en Windows, y un CLAUDE.md que solo diga \"lee AGENTS.md\" con palabras no es fiable.",
      ],
      points: [
        "El propio repositorio de este sitio hace exactamente eso: su CLAUDE.md es la única línea `@AGENTS.md`.",
        "Codex lee los archivos AGENTS.md desde la raíz del repositorio hasta tu directorio de trabajo y limita su tamaño combinado a 32 KiB por defecto.",
      ],
    },
    {
      kind: "text",
      title: "Límites y trampas",
      points: [
        "Un CLAUDE.md que se carga al arrancar se lee entero hasta 4 MiB; si es más grande, se omite.",
        "Los archivos que se cargan bajo demanda, como los CLAUDE.md de subdirectorios y las reglas por ruta, se recortan al pasar un límite por archivo (40.000 caracteres con una ventana de contexto de 200K).",
        "Los imports organizan un archivo pero no ahorran contexto: el texto importado se carga igualmente.",
        "Los imports fuera del proyecto piden aprobación una vez; los comentarios HTML `<!-- -->` se eliminan y no cuestan nada.",
        "El CLAUDE.md de la raíz del proyecto se vuelve a leer después de `/compact`.",
        "\"Recuerda esto\" va a la auto memory (`~/.claude/projects/<project>/memory/`), no a CLAUDE.md.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Con Crewmark",
      title: "CLAUDE.md dice cómo trabajar. Crewmark dice en qué trabajar y cuándo.",
      text: [
        "Un buen CLAUDE.md hace que cada sesión de Claude Code empiece bien informada, pero la sesión sigue esperando tu próximo mensaje. Crewmark convierte una sesión de Claude Code, Codex, DeepSeek Harness u OpenCode en un empleado de IA con un rol, un objetivo y un horario, y la despierta con un heartbeat para que tome la siguiente issue de un tablero.",
      ],
      steps: [
        {
          title: "Convierte una sesión en un empleado",
          text: "Elige un rol, como ingeniero de software o especialista SEO, escribe su objetivo como un número y ejecuta el comando de configuración en tu proyecto, donde ya vive tu CLAUDE.md.",
        },
        {
          title: "Deja que el heartbeat inicie el trabajo",
          text: "Durante su horario laboral el empleado se despierta cada 15, 30 o 60 minutos en la misma conversación; mira [cómo hacer proactivo a Claude Code](/proactive-claude-code). Varios pueden compartir un repositorio, como en [varios agentes de Claude Code](/blog/multiple-claude-code-agents).",
        },
        {
          title: "Asigna issues y responde a sus mensajes",
          text: "Pon el trabajo en el tablero; el empleado lo toma, comenta sobre la marcha y te escribe cuando necesita una decisión. Lee [qué es un empleado de IA](/ai-employees).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Escribir un archivo CLAUDE.md para Claude Code" },
  mid: {
    title: "Tu CLAUDE.md está listo. ¿Quién empieza la siguiente tarea?",
    text: "Crewmark despierta a Claude Code con un heartbeat, un rol, un objetivo y un tablero de issues, con el plan que ya pagas.",
    button: "Empezar",
  },
  faq: {
    title: "Preguntas frecuentes sobre CLAUDE.md",
    items: [
      {
        q: "¿Qué es CLAUDE.md?",
        a: "Un archivo markdown con instrucciones del proyecto que Claude Code lee al inicio de cada sesión, como comandos de build y test, convenciones y trampas conocidas. Es contexto para Claude, no configuración obligatoria.",
      },
      {
        q: "¿Dónde pongo CLAUDE.md?",
        a: "Para un equipo, en la raíz del proyecto como `./CLAUDE.md` o `./.claude/CLAUDE.md`, versionado en git. Para ti, `~/.claude/CLAUDE.md` se aplica a todos los proyectos y `./CLAUDE.local.md` a uno. Los subdirectorios pueden tener el suyo, que se carga cuando Claude trabaja en ellos.",
      },
      {
        q: "¿Qué extensión debe tener CLAUDE.md?",
        a: "Corta. Anthropic recomienda menos de 200 líneas por archivo, porque cada línea se lee en cada tarea. Pasa los procedimientos a skills y las reglas de una parte del código a `.claude/rules/`.",
      },
      {
        q: "¿Claude Code lee AGENTS.md?",
        a: "Sí, pero por defecto solo cuando el proyecto no tiene CLAUDE.md. Para compartir un solo archivo, pon `@AGENTS.md` al inicio de CLAUDE.md, o ajusta la opción Project instructions en `/config` para leer ambos.",
      },
      {
        q: "¿CLAUDE.md o AGENTS.md: cuál debo usar?",
        a: "Si solo Claude Code lee tu repositorio, CLAUDE.md. Si tus compañeros también usan Codex, Cursor u otro agente, escribe AGENTS.md e impórtalo desde un CLAUDE.md que añada las notas solo para Claude.",
      },
      {
        q: "¿Cómo creo un archivo CLAUDE.md?",
        a: "Ejecuta `/init` en Claude Code para generar uno a partir de tu código y luego recórtalo. Edítalo más adelante con `/memory` o pidiéndole a Claude que añada una línea.",
      },
      {
        q: "¿Por qué Claude ignora mi CLAUDE.md?",
        a: "Comprueba que se cargó con `/context all`, busca contradicciones entre archivos y acórtalo: los archivos largos diluyen cada regla. Lo que nunca deba omitirse va en un hook o en una regla de permisos, no en CLAUDE.md.",
      },
    ],
  },
  cta: {
    title: "Dale un trabajo a tu Claude Code bien informado.",
    text: "Crewmark convierte las sesiones de Claude Code, Codex y DeepSeek Harness en empleados de IA con roles, objetivos, horarios y un heartbeat.",
    button: "Empezar",
  },
  checked: "Comprobado con la documentación de Claude Code, agents.md y la documentación de Codex de OpenAI el 5 de noviembre de 2026.",
  disclaimer:
    "Crewmark es un producto independiente, sin relación con Anthropic ni OpenAI y sin su respaldo. Claude y Claude Code son marcas de Anthropic, y Codex de OpenAI.",
};
