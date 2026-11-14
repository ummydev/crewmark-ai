import type { GuideCopy } from "@/components/landing/guide-article";

// Spanish translation of /blog/claude-code-skills; the English master is src/content/blog/claude-code-skills.ts.

const docs = "https://code.claude.com/docs/en/skills";

const first = `---
description: Resume los cambios sin commit y señala lo que sea arriesgado. Úsala cuando el usuario pregunte qué cambió, quiera un mensaje de commit o pida revisar su diff.
---

## Cambios actuales

!\`git diff HEAD\`

## Instrucciones

Resume los cambios de arriba en dos o tres viñetas y después enumera los
riesgos, como manejo de errores ausente, valores fijos en el código o tests que actualizar.`;

const reference = `---
description: Convenciones de diseño de API de este código. Úsala al escribir o revisar endpoints HTTP.
paths: ["src/api/**"]
---

Al escribir endpoints de API:
- Usa nombres RESTful y recursos en plural
- Devuelve los errores como { error: { code, message } }
- Valida el cuerpo de la petición con los esquemas de src/api/schemas/`;

const layout = `release/
├── SKILL.md          # los pasos, y cuándo leer los demás archivos
├── checklist.md      # se carga solo cuando SKILL.md remite a él
└── scripts/
    └── bump.sh       # se ejecuta, no se lee en el contexto`;

const fork = `---
description: Audita las dependencias en busca de vulnerabilidades conocidas y versiones mayores desactualizadas
context: fork
agent: Explore
disable-model-invocation: true
---

Ejecuta la auditoría del gestor de paquetes, enumera cada hallazgo alto o crítico
con la versión que lo corrige e indica qué versiones mayores van por detrás. No cambies ningún archivo.`;

export const copy: GuideCopy = {
  meta: {
    title: "Skills de Claude Code: cómo crearlas y ejemplos",
    description:
      "Qué son las skills de Claude Code, cómo se cargan, cómo crear una con SKILL.md, ejemplos, archivos de apoyo, skills en un subagente, instalarlas desde plugins y buenas prácticas.",
  },
  breadcrumb: "Guía de skills de Claude Code",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-06" },
  hero: {
    kicker: "Blog · Claude Code",
    title: "Skills de Claude Code: cómo crearlas, con ejemplos y buenas prácticas",
    lead: "Una skill de Claude Code es una carpeta con un archivo `SKILL.md`: una descripción de cuándo usarla y las instrucciones que hay que seguir. Claude solo ve las descripciones hasta que necesita una skill, y entonces la carga entera, así que puedes tener a mano procedimientos largos y material de referencia sin pagarlos en cada mensaje. Esta guía explica cómo se cargan las skills, cómo escribir la primera, ejemplos, archivos de apoyo, skills que se ejecutan en un subagente, cómo instalar skills desde plugins y cómo conseguir que Claude las use de verdad.",
    cta: "Empezar",
    secondary: "Crea tu primera skill",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "Qué son las skills de Claude Code",
      text: [
        "Crea una skill cuando te encuentres pegando una y otra vez en el chat las mismas instrucciones, la misma checklist o el mismo procedimiento de varios pasos, o cuando una parte de tu CLAUDE.md haya pasado de ser un dato a ser un procedimiento. Las skills siguen el estándar abierto Agent Skills (agentskills.io), que también leen otras herramientas de IA; Claude Code añade extras como el control de invocación, la ejecución en subagentes y la salida de shell en vivo dentro del prompt.",
      ],
      points: [
        "Dos formas de ejecutarla: Claude la carga cuando tu petición coincide con su `description`, o escribes `/skill-name`.",
        "Barata hasta que se usa: en el contexto solo están el nombre y la descripción; el cuerpo se carga cuando la skill se ejecuta. Una skill configurada para lanzarse solo a mano ni siquiera muestra su descripción.",
        "Los comandos de barra propios ahora son skills: `.claude/commands/<name>.md` sigue funcionando, pero una carpeta de skill también puede contener archivos de apoyo. Consulta [comandos de barra de Claude Code](/blog/claude-code-slash-commands).",
        "Claude Code también trae skills incluidas, como `/simplify`, `/loop`, `/batch` y `/debug`.",
      ],
    },
    {
      kind: "table",
      title: "Skills frente a CLAUDE.md, subagentes, plugins y MCP",
      headers: ["", "Qué es", "Cuándo se carga", "Para qué usarlo"],
      rows: [
        ["CLAUDE.md", "Instrucciones del proyecto", "En cada sesión, completo", "Datos y convenciones que Claude siempre necesita; mira la [guía de CLAUDE.md](/blog/claude-md)"],
        ["Skill", "Una carpeta con `SKILL.md`", "La descripción, siempre; el cuerpo, al usarla", "Procedimientos, checklists, material de referencia, prompts repetibles"],
        ["Subagente", "Un trabajador aparte con su propio contexto", "Cuando Claude delega", "Tareas secundarias cuyos detalles no deberían llenar tu conversación"],
        ["Plugin", "Un paquete de skills, agentes, hooks y servidores MCP", "Cuando está instalado y activado", "Compartir skills con un equipo o instalar las de otras personas"],
        ["Servidor MCP", "Una conexión con una herramienta o fuente de datos externa", "Cuando está conectado", "Dar a Claude herramientas nuevas, como una base de datos o un gestor de issues"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Cómo crear una skill de Claude Code",
      steps: [
        {
          title: "Elige dónde vive",
          text: "`~/.claude/skills/<name>/` para ti en todos tus proyectos; `.claude/skills/<name>/` en un repositorio, con commit, para todos los que trabajan en él. El nombre de la carpeta se convierte en el comando: `summarize-changes` da `/summarize-changes`.",
        },
        {
          title: "Escribe el SKILL.md: una descripción y luego las instrucciones",
          text: "El frontmatter va entre líneas `---` al principio del todo. Solo se recomienda `description`: pon primero el caso de uso y las palabras que la gente diría de verdad. Debajo, escribe las instrucciones en Markdown. Una línea que empieza con `` !`command` `` ejecuta antes ese comando y pega su salida, así que la skill trabaja con tu estado real.",
          code: first,
        },
        {
          title: "Pruébala de las dos formas",
          text: "Abre `claude` en un proyecto git con un cambio sin commit. Pregunta \"¿Qué he cambiado?\" para ver si Claude elige la skill por su cuenta, y después escribe `/summarize-changes` para ejecutarla directamente. Las skills que añades durante una sesión se cargan solas; ejecuta `/reload-skills` si alguna no aparece.",
        },
        {
          title: "Decide quién puede ejecutarla",
          text: "Añade `disable-model-invocation: true` a todo lo que tenga efectos secundarios, como despliegues o envío de mensajes, para que solo tú puedas lanzarla. Añade `user-invocable: false` al conocimiento de fondo que solo debe cargar Claude. Pasa datos con `$ARGUMENTS`, como se muestra en la guía de comandos de barra.",
        },
        {
          title: "Compártela",
          text: "Haz commit de `.claude/skills/` en el repositorio, o empaqueta las skills como un plugin para varios repositorios o equipos.",
        },
      ],
      source: { label: "Fuente: documentación de Claude Code, Extend Claude with skills", href: docs },
    },
    {
      kind: "steps",
      id: "examples",
      title: "Ejemplos de skills de Claude Code",
      steps: [
        {
          title: "Una skill de referencia que solo se carga con los archivos que coinciden",
          text: "Las skills de referencia contienen convenciones que Claude aplica mientras trabaja. `paths` limita la carga automática a los archivos que coinciden con los globs.",
          code: reference,
        },
        {
          title: "Una skill de tarea con archivos de apoyo",
          text: "Mantén el SKILL.md corto y remite al resto. Claude lee `checklist.md` solo cuando el SKILL.md se lo indica, y ejecuta `bump.sh` sin leerlo, así que los detalles no cuestan nada hasta que hacen falta.",
          code: layout,
        },
        {
          title: "Una skill que se ejecuta en su propio subagente",
          text: "`context: fork` inicia un subagente (aquí el tipo Explore, de solo lectura) con la skill como prompt. No ve tu conversación, así que las instrucciones deben entenderse por sí solas; se ejecuta en segundo plano salvo que pongas `background: false`.",
          code: fork,
        },
      ],
    },
    {
      kind: "text",
      title: "Instalar skills desde plugins y marketplaces",
      text: [
        "Las skills que escriben otras personas suelen llegar dentro de plugins. Claude Code registra el marketplace oficial de Anthropic (`claude-plugins-official`) la primera vez que inicias una sesión interactiva; explóralo con `/plugin` o instala directamente, por ejemplo `/plugin install skill-creator@claude-plugins-official`. Para un marketplace de un equipo o de la comunidad, añádelo antes con `/plugin marketplace add owner/repo`.",
      ],
      points: [
        "Las skills de un plugin se llaman `/plugin-name:skill-name`.",
        "El marketplace oficial muestra el coste de contexto de cada plugin por turno y al invocarlo.",
        "El plugin skill-creator ayuda a escribir una skill y ejecuta evals que comparan los resultados con ella y sin ella.",
        "Lee las skills de un repositorio o de un plugin antes de fiarte de ellas: `allowed-tools` puede aprobar de antemano herramientas durante el turno en que se ejecuta una skill.",
      ],
    },
    {
      kind: "text",
      title: "Buenas prácticas, y qué hacer cuando Claude ignora una skill",
      points: [
        "Escribe la descripción pensando en la coincidencia: empieza por la tarea y por las frases que dicen los usuarios. La descripción más `when_to_use` se corta a los 1.536 caracteres en el listado.",
        "Pon las instrucciones más importantes cerca del principio: después de compactar la conversación, Claude Code puede conservar solo el inicio de una skill invocada. Invócala de nuevo para restaurarla.",
        "Redacta las indicaciones para toda la tarea (\"ejecuta los tests después de cada edición\"), porque el archivo de la skill no se vuelve a leer en los turnos siguientes. Una regla que nunca debe saltarse va en un hook.",
        "Para reducir el uso de tokens, saca los procedimientos de CLAUDE.md y pásalos a skills, pon `disable-model-invocation: true` en las skills que lanzas a mano y revisa `/skill-doctor` para encontrar skills que cuestan contexto pero casi no se usan.",
        "¿No se activa? Comprueba que la descripción tiene las palabras clave adecuadas, pregunta \"¿Qué skills hay disponibles?\" y ejecuta `claude plugin validate .claude/skills` para encontrar frontmatter que no se puede analizar.",
        "¿Se activa demasiado? Haz la descripción más específica o pasa la skill a manual con `disable-model-invocation: true`.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Con Crewmark",
      title: "Las skills enseñan a Claude Code cómo hacerlo. Crewmark le da algo que hacer cada hora.",
      text: [
        "Una biblioteca de skills hace que cada sesión sea capaz, pero sigue esperando a que se lo pidas. Crewmark convierte una sesión de Claude Code, Codex, DeepSeek Harness u OpenCode en un empleado de IA con un rol, un objetivo y un horario, y la despierta con un heartbeat para que tome la siguiente issue de un tablero, con las skills de tu proyecto cargadas.",
      ],
      steps: [
        {
          title: "Guarda las skills en el repositorio",
          text: "La sesión del empleado lee `.claude/skills/` y CLAUDE.md igual que la tuya, así que una skill de release o una checklist de revisión van con él.",
        },
        {
          title: "Deja que el heartbeat inicie el trabajo",
          text: "Durante su horario laboral el empleado se despierta cada 15, 30 o 60 minutos en la misma conversación y toma la siguiente issue; mira [cómo hacer proactivo a Claude Code](/proactive-claude-code).",
        },
        {
          title: "Asigna issues y responde a sus mensajes",
          text: "Pon el trabajo en el tablero; el empleado comenta a medida que avanza y te escribe cuando necesita una decisión. Lee [qué es un empleado de IA](/ai-employees).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Crear una skill para Claude Code" },
  mid: {
    title: "Tus skills están listas. ¿Quién las ejecuta cuando no estás?",
    text: "Crewmark despierta a Claude Code con un heartbeat, un rol, un objetivo y un tablero de issues, con el plan que ya pagas.",
    button: "Empezar",
  },
  faq: {
    title: "Preguntas frecuentes sobre las skills de Claude Code",
    items: [
      {
        q: "¿Qué son las skills de Claude Code?",
        a: "Carpetas con un archivo `SKILL.md` que contienen las instrucciones de una tarea o un conjunto de conocimiento de referencia. Claude carga una cuando tu petición coincide con su descripción, o la ejecutas tú con `/skill-name`.",
      },
      {
        q: "¿Dónde se guardan las skills de Claude Code?",
        a: "En `~/.claude/skills/<name>/SKILL.md` para skills personales en todos tus proyectos, en `.claude/skills/<name>/SKILL.md` dentro de un repositorio para el equipo, o dentro de un plugin.",
      },
      {
        q: "¿Cómo hago que Claude Code use mi skill?",
        a: "Escribe una descripción que nombre la tarea y las palabras que usarías para pedirla, comprueba que la skill aparece cuando preguntas \"¿Qué skills hay disponibles?\", o ejecútala directamente con `/skill-name`.",
      },
      {
        q: "Skills frente a subagentes: ¿en qué se diferencian?",
        a: "Una skill son instrucciones que se cargan en una conversación; un subagente es un trabajador aparte con su propio contexto. Una skill con `context: fork` combina las dos cosas: se ejecuta como subagente con la skill como prompt.",
      },
      {
        q: "¿Skills o plugins?",
        a: "Un plugin es la forma de empaquetar y compartir skills, subagentes, hooks y servidores MCP. Instala un plugin para obtener sus skills, o escribe una skill en tu propio `.claude/skills/` sin necesidad de plugin.",
      },
      {
        q: "¿Las skills consumen muchos tokens?",
        a: "En el contexto solo permanecen sus descripciones; el cuerpo se carga cuando una skill se ejecuta, y las skills configuradas solo para uso manual ni siquiera muestran su descripción. Pasar los procedimientos largos de CLAUDE.md a skills suele reducir el uso de tokens.",
      },
      {
        q: "¿Dónde puedo encontrar skills de Claude Code?",
        a: "En el marketplace oficial de plugins de Anthropic (explóralo con `/plugin` o en claude.com/marketplace), en marketplaces de equipos y de la comunidad que añades con `/plugin marketplace add`, y en repositorios públicos de GitHub.",
      },
    ],
  },
  cta: {
    title: "Pon a trabajar tus skills de Claude Code con un horario.",
    text: "Crewmark convierte las sesiones de Claude Code, Codex y DeepSeek Harness en empleados de IA con roles, objetivos, horarios y un heartbeat.",
    button: "Empezar",
  },
  checked: "Comprobado con la documentación de Claude Code (skills y plugins) el 6 de noviembre de 2026.",
  disclaimer:
    "Crewmark es un producto independiente, sin relación con Anthropic y sin su respaldo. Claude y Claude Code son marcas de Anthropic.",
};
