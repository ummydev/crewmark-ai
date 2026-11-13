import type { GuideCopy } from "@/components/landing/guide-article";

// Spanish translation of /blog/claude-code-slash-commands; the English master is src/content/blog/claude-code-slash-commands.ts.

const commands = "https://code.claude.com/docs/en/commands";

const skill = `---
description: Corrige una issue de GitHub por su número, con un test
argument-hint: [issue-number]
disable-model-invocation: true
allowed-tools: Bash(gh issue view *)
---

Issue: !\`gh issue view $ARGUMENTS\`

Corrige esta issue siguiendo nuestras convenciones de CLAUDE.md.
1. Escribe un test que falle y la reproduzca.
2. Haz el cambio más pequeño que lo haga pasar.
3. Ejecuta la suite de tests y resume qué cambió.`;

const positional = `---
description: Migra un componente de un framework a otro
argument-hint: [component] [from] [to]
---

Migra el componente $0 de $1 a $2.
Conserva todo el comportamiento actual y que todos los tests sigan pasando.`;

export const copy: GuideCopy = {
  meta: {
    title: "Comandos de barra de Claude Code: guía rápida, comandos propios y skills | Crewmark",
    description:
      "Una guía rápida de los comandos de barra (slash commands) de Claude Code que vale la pena conocer, cómo crear los tuyos con argumentos y cómo se relacionan los comandos con las skills.",
  },
  breadcrumb: "Comandos de barra de Claude Code",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-06" },
  hero: {
    kicker: "Blog · Claude Code",
    title: "Comandos de barra de Claude Code: la guía rápida y cómo crear los tuyos",
    lead: "Los comandos de barra (slash commands) son los atajos que escribes al principio de un mensaje de Claude Code, como `/init`, `/compact` o `/code-review`, para controlar la sesión o ejecutar un prompt guardado. Aquí tienes un resumen de los comandos que vale la pena conocer, agrupados según cuándo los necesitas, y después explica cómo crear comandos de barra propios con argumentos y cómo se relacionan con las skills.",
    cta: "Acceso anticipado",
    secondary: "Ir a los comandos propios",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "Cómo funcionan los comandos de barra",
      text: [
        "Escribe `/` en Claude Code para ver todos los comandos que tienes disponibles, y sigue escribiendo para filtrar la lista. Un comando solo cuenta al principio de un mensaje; lo que va después de su nombre se convierte en sus argumentos.",
      ],
      points: [
        "Los comandos integrados están programados en la CLI, como `/clear`, `/model` y `/compact`.",
        "Las skills incluidas vienen con Claude Code y funcionan como prompts que se le pasan a Claude, como `/simplify`, `/loop` y `/batch`.",
        "Los comandos propios son los que escribes tú: skills en `.claude/skills/` o archivos antiguos en `.claude/commands/`. Los plugins y los servidores MCP pueden añadir más.",
        "Si envías un comando mientras Claude todavía responde, se ejecuta al terminar el turno actual; algunos, como `/status` y `/usage`, se ejecutan de inmediato.",
        "No todos los comandos aparecen para todo el mundo: algunos dependen de tu plataforma, tu plan o la política de tu organización.",
      ],
    },
    {
      kind: "table",
      id: "cheat-sheet",
      title: "Guía rápida de comandos de barra de Claude Code",
      text: ["Los comandos que más se usan, en el orden en que una sesión suele necesitarlos."],
      headers: ["Cuándo", "Comando", "Qué hace"],
      rows: [
        ["Al configurar", "`/init`", "Escribe un CLAUDE.md inicial para el proyecto"],
        ["Al configurar", "`/memory`", "Edita los archivos CLAUDE.md y activa o desactiva la memoria automática"],
        ["Al configurar", "`/mcp`", "Gestiona las conexiones con servidores MCP"],
        ["Al configurar", "`/permissions`", "Gestiona las reglas de permitir, preguntar y denegar para las herramientas"],
        ["Al configurar", "`/config`", "Abre los ajustes: tema, modelo, estilo de salida y más"],
        ["Durante una tarea", "`/plan`", "Pasa al modo plan antes de un cambio grande"],
        ["Durante una tarea", "`/model`, `/effort`", "Cambia el modelo y cuánto razonamiento usa"],
        ["Durante una tarea", "`/context`", "Muestra qué está llenando la ventana de contexto"],
        ["Durante una tarea", "`/compact [instructions]`", "Resume la conversación hasta ahora para liberar contexto"],
        ["Durante una tarea", "`/btw [question]`", "Hace una pregunta aparte sin añadirla a la conversación"],
        ["Durante una tarea", "`/goal`", "Fija una condición hacia la que Claude sigue trabajando"],
        ["En paralelo", "`/tasks`", "Lista el trabajo en segundo plano y los subagentes de la sesión"],
        ["En paralelo", "`/background`", "Separa la sesión para que siga como agente en segundo plano"],
        ["En paralelo", "`/batch <instruction>`", "Divide un cambio en todo el código en unidades, cada una en su propio worktree"],
        ["En paralelo", "`/fork`", "Copia la conversación en una nueva sesión en segundo plano"],
        ["Antes de publicar", "`/diff`", "Muestra los cambios de tu copia de trabajo"],
        ["Antes de publicar", "`/code-review`", "Revisa el diff actual o un PR en busca de bugs; `/review` es un alias"],
        ["Antes de publicar", "`/security-review`", "Busca vulnerabilidades en los cambios de la rama"],
        ["Entre sesiones", "`/clear`", "Empieza una conversación nueva con el contexto vacío"],
        ["Entre sesiones", "`/resume`, `/rename`", "Vuelve a una conversación anterior; le pone nombre a la actual"],
        ["Entre sesiones", "`/branch`, `/rewind`", "Ramifica la conversación; devuelve el código y la conversación a un checkpoint"],
        ["Automatización", "`/loop [interval] [prompt]`", "Repite un prompt mientras la sesión siga abierta"],
        ["Automatización", "`/schedule`", "Crea y gestiona tareas programadas en la nube"],
        ["Cuando te atascas", "`/doctor`, `/debug`", "Diagnostica problemas de configuración; lee el log de depuración de la sesión"],
        ["Cuando te atascas", "`/usage`, `/status`", "Muestra el coste y los límites del plan (`/cost` y `/stats` son alias); muestra la versión, el modelo y la cuenta"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Cómo crear un comando de barra propio",
      text: [
        "Los comandos propios se han fusionado con las skills. Un archivo en `.claude/commands/fix-issue.md` y una skill en `.claude/skills/fix-issue/SKILL.md` crean los dos `/fix-issue` y funcionan igual; para comandos nuevos se prefiere el formato de skill porque puede incluir archivos de apoyo.",
      ],
      steps: [
        {
          title: "Crea la carpeta y el SKILL.md",
          text: "Para un comando que reciba todo el equipo, crea `.claude/skills/<name>/SKILL.md` en el repositorio y haz commit. Para uno que solo uses tú en todos tus proyectos, ponlo en `~/.claude/skills/<name>/SKILL.md`. El nombre de la carpeta se convierte en el comando: `fix-issue` da `/fix-issue`.",
        },
        {
          title: "Escribe el frontmatter",
          text: "Entre líneas `---`, añade una `description` (Claude la usa para decidir cuándo aplica la skill), `argument-hint` para mostrar en el menú los argumentos esperados, `disable-model-invocation: true` si solo tú debes lanzarla (para todo lo que tenga efectos secundarios, como los despliegues) y `allowed-tools` para aprobar de antemano herramientas durante ese turno.",
        },
        {
          title: "Escribe el prompt, con argumentos",
          text: "Debajo del frontmatter, escribe las instrucciones en Markdown. `$ARGUMENTS` se sustituye por todo lo que se escribe después del comando; `$0`, `$1`, etc. (o `$ARGUMENTS[0]`) toman argumentos sueltos. Una línea con `` !`command` `` ejecuta antes ese comando de shell y pega su salida en el prompt.",
          code: skill,
        },
        {
          title: "Ejecútalo",
          text: "Escribe `/fix-issue 123`. Las skills que añades o cambias durante una sesión se cargan solas; si alguna no aparece, ejecuta `/reload-skills`. Sin `disable-model-invocation`, Claude también puede ejecutar la skill por su cuenta cuando tu petición coincide con su descripción.",
        },
        {
          title: "Usa argumentos posicionales para comandos de varias partes",
          text: "Ejecutar `/migrate-component SearchBar React Vue` rellena `$0`, `$1` y `$2` en orden.",
          code: positional,
        },
      ],
      source: { label: "Fuente: documentación de Claude Code, Commands y Skills", href: commands },
    },
    {
      kind: "table",
      title: "Dónde viven los comandos de barra propios",
      headers: ["Ubicación", "Ruta", "Nombre del comando"],
      rows: [
        ["Personal", "`~/.claude/skills/<name>/SKILL.md`", "`/<name>` en todos tus proyectos"],
        ["Proyecto", "`.claude/skills/<name>/SKILL.md`", "`/<name>` para todos en el repositorio"],
        ["Archivo de comando antiguo", "`.claude/commands/<name>.md`", "`/<name>`; una subcarpeta añade un prefijo, p. ej. `commands/frontend/component.md` → `/frontend:component`"],
        ["Plugin", "`<plugin>/skills/<name>/SKILL.md`", "`/<plugin>:<name>`"],
        ["Servidor MCP", "Prompts que expone el servidor", "Aparecen en el menú `/`"],
      ],
    },
    {
      kind: "table",
      title: "Comandos de barra frente a skills",
      text: [
        "Desde la fusión, la pregunta ya no es tanto \"cuál de los dos\" como \"qué formato de archivo\". Si una skill y un archivo de comando comparten nombre, gana la skill.",
      ],
      headers: ["", "`.claude/commands/<name>.md`", "`.claude/skills/<name>/SKILL.md`"],
      rows: [
        ["Crea `/<name>`", "Sí", "Sí"],
        ["Frontmatter", "Los mismos campos, salvo `name` y `paths`", "Todos los campos"],
        ["Archivos de apoyo (scripts, plantillas)", "No", "Sí, en la carpeta de la skill"],
        ["Claude puede cargarlo por su cuenta", "Sí, salvo con `disable-model-invocation: true`", "Sí, salvo con `disable-model-invocation: true`"],
        ["Estado", "Sigue funcionando", "Recomendado para lo nuevo"],
      ],
    },
    {
      kind: "text",
      title: "Consejos y trampas habituales",
      points: [
        "En el prompt de la terminal puedes encadenar skills: `/write-tests /fix-issue 123` carga las dos y pasa `123` a cada una, hasta seis. En `claude -p` y en el Agent SDK solo se carga la primera.",
        "Puede que ya no existan comandos integrados que recuerdas: `/pr-comments`, `/vim` y `/ultraplan` se han eliminado. Consulta `/help` o la documentación.",
        "`allowed-tools` concede permiso solo durante el turno que invoca la skill, y las skills de un repositorio pueden concederse herramientas a sí mismas, así que léelas antes de ejecutar Claude Code en un repositorio que no conoces.",
        "La descripción de cada skill ocupa contexto; `/skill-doctor` muestra cuánto cuesta cada una y con qué frecuencia se usa. Los procedimientos largos van en skills, no en [CLAUDE.md](/blog/claude-md).",
        "`/loop` repite un prompt solo mientras tu sesión está abierta. Para que el trabajo empiece solo, mira [cómo hacer proactivo a Claude Code](/proactive-claude-code).",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Con Crewmark",
      title: "Los comandos de barra te hacen más rápido. Crewmark hace que Claude Code empiece sin ti.",
      text: [
        "Cada comando de barra sigue necesitándote al teclado para escribirlo. Crewmark convierte una sesión de Claude Code, Codex, DeepSeek Harness u OpenCode en un empleado de IA con un rol, un objetivo y un horario, y la despierta con un heartbeat para que tome la siguiente issue de un tablero, con las mismas skills y comandos que ya has configurado.",
      ],
      steps: [
        {
          title: "Guarda tus skills en el repositorio",
          text: "Tu `.claude/skills/` y tu CLAUDE.md se cargan en la sesión del empleado igual que en la tuya, así que `/fix-issue` y tus convenciones van con él.",
        },
        {
          title: "Deja que el heartbeat inicie el trabajo",
          text: "Durante su horario laboral el empleado se despierta cada 15, 30 o 60 minutos en la misma conversación y toma la siguiente issue. Varios pueden compartir un repositorio, cada uno en su propio [worktree](/blog/claude-code-worktree).",
        },
        {
          title: "Asigna issues y responde a sus mensajes",
          text: "Pon el trabajo en el tablero; el empleado comenta a medida que avanza y te escribe cuando necesita una decisión. Lee [qué es un empleado de IA](/ai-employees).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Crear un comando de barra propio en Claude Code" },
  mid: {
    title: "Ya automatizaste lo que escribes. ¿Quién decide qué escribir después?",
    text: "Crewmark despierta a Claude Code con un heartbeat, un rol, un objetivo y un tablero de issues, con el plan que ya pagas.",
    button: "Acceso anticipado",
  },
  faq: {
    title: "Preguntas frecuentes sobre los comandos de barra de Claude Code",
    items: [
      {
        q: "¿Cómo veo todos los comandos de barra de Claude Code?",
        a: "Escribe `/` al principio de un mensaje para abrir el menú, y sigue escribiendo para filtrarlo. `/help` y `/skills` también los listan, y la página Commands de la documentación de Claude Code tiene la referencia completa.",
      },
      {
        q: "¿Cómo creo un comando de barra propio en Claude Code?",
        a: "Crea `.claude/skills/<name>/SKILL.md` (o `~/.claude/skills/<name>/SKILL.md` para todos tus proyectos) con un frontmatter breve y tu prompt. Se convierte en `/<name>`. Un archivo antiguo `.claude/commands/<name>.md` también funciona.",
      },
      {
        q: "¿Cómo paso argumentos a un comando de barra?",
        a: "Escríbelos después del nombre del comando. En el prompt, `$ARGUMENTS` contiene todo lo que escribiste, y `$0`, `$1`, etc. contienen argumentos sueltos. Añade `argument-hint` al frontmatter para mostrar qué se espera.",
      },
      {
        q: "¿Qué diferencia hay entre los comandos de barra y las skills?",
        a: "Los comandos de barra propios se han fusionado con las skills: los dos crean un `/name` y funcionan igual. Las skills añaden una carpeta para archivos de apoyo y son el formato recomendado; los archivos de comando en `.claude/commands/` siguen funcionando.",
      },
      {
        q: "¿Los comandos de barra están obsoletos?",
        a: "No. Escribir `/name` es la forma de ejecutar cualquier comando o skill. Lo que cambió es el formato de archivo de los propios: `.claude/commands/` sigue funcionando, pero se prefieren las skills. Se han eliminado algunos comandos integrados concretos.",
      },
      {
        q: "¿Claude puede ejecutar mi comando de barra por su cuenta?",
        a: "Sí, cuando tu petición coincide con la descripción de la skill. Añade `disable-model-invocation: true` a su frontmatter para que solo se ejecute cuando tú lo escribas.",
      },
      {
        q: "¿Los comandos de barra funcionan en modo headless?",
        a: "Las skills propias sí: `claude -p \"/fix-issue 123\"` ejecuta una, porque `-p` carga las skills y los comandos propios igual que una sesión interactiva. Solo se carga la primera skill del mensaje, y `--bare` omite por completo la detección de skills.",
      },
    ],
  },
  cta: {
    title: "Dale a tus skills de Claude Code un empleado que las ejecute.",
    text: "Crewmark convierte las sesiones de Claude Code, Codex y DeepSeek Harness en empleados de IA con roles, objetivos, horarios y un heartbeat.",
    button: "Acceso anticipado",
  },
  checked: "Comprobado con la documentación de Claude Code (commands y skills) el 6 de noviembre de 2026.",
  disclaimer:
    "Crewmark es un producto independiente, sin relación con Anthropic y sin su respaldo. Claude y Claude Code son marcas de Anthropic.",
};
