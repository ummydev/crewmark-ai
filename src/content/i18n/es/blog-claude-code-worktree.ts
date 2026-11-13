import type { GuideCopy } from "@/components/landing/guide-article";

// Spanish translation of /blog/claude-code-worktree; the English master is src/content/blog/claude-code-worktree.ts.

const docs = "https://code.claude.com/docs/en/worktrees";

const start = `# Dos sesiones aisladas, cada una en su propia terminal
claude --worktree feature-auth
claude --worktree fix-flaky-test

# Crea un worktree a partir del pull request 1234 (pon el # entre comillas)
claude --worktree "#1234"

# Deja los worktrees fuera de git status
echo ".claude/worktrees/" >> .gitignore`;

const settings = `{
  "worktree": {
    "baseRef": "head",
    "symlinkDirectories": ["node_modules"],
    "sparsePaths": [".claude", "packages/web"]
  }
}`;

const manual = `git worktree add ../app-feature-a -b feature-a
cd ../app-feature-a && claude
git worktree list
git worktree remove ../app-feature-a`;

export const copy: GuideCopy = {
  meta: {
    title: "Worktrees en Claude Code: --worktree, flujo, limpieza y ajustes | Crewmark",
    description:
      "Cómo funcionan los git worktrees en Claude Code: claude --worktree, dónde se crean, la rama base, .worktreeinclude para los .env, la limpieza, los subagentes aislados y los ajustes.",
  },
  breadcrumb: "Guía de worktrees en Claude Code",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-06" },
  hero: {
    kicker: "Blog · Claude Code",
    title: "Worktrees en Claude Code: sesiones en paralelo sin conflictos de edición",
    lead: "Un worktree de Claude Code es un directorio de trabajo de git aparte, con sus propios archivos y su propia rama, que comparte el historial de tu repositorio. Inicia una sesión con `claude --worktree <name>` y Claude edita allí en lugar de en tu checkout, así que dos o tres sesiones pueden trabajar a la vez sin tocar los archivos de las demás. Esta guía cubre el flag, dónde se crean los worktrees, de qué rama parten, cómo llevar los archivos `.env` a ellos, la limpieza, los subagentes y los ajustes.",
    cta: "Acceso anticipado",
    secondary: "Ir al flujo de trabajo",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "Qué es un worktree en Claude Code",
      text: [
        "Git admite worktrees desde hace años: `git worktree add` hace checkout de una rama en un segundo directorio, respaldado por los mismos datos de `.git`. Claude Code se apoya en eso. Con `--worktree` (o `-w`) crea el worktree por ti, inicia la sesión dentro, bloquea las ediciones que acabarían en tu checkout principal y te ofrece limpiarlo al salir.",
        "Los worktrees aíslan archivos, nada más. Para repartir una tarea entre varios trabajadores dentro de una misma conversación, usa subagentes; para comparar las opciones, mira [varios agentes de Claude Code](/blog/multiple-claude-code-agents).",
      ],
      points: [
        "Ubicación por defecto: `.claude/worktrees/<name>/`, en la raíz del repositorio.",
        "Nombre de rama por defecto: `worktree-<name>`. Si no das un nombre, Claude Code elige uno, como `bright-running-fox`.",
        "Compartido con tu checkout: el directorio `.git` (así los commits y las ramas se ven desde todas partes), los plugins del proyecto y las aprobaciones de permisos de \"no volver a preguntar\".",
        "No compartido: todo lo que esté en .gitignore, como `.env`, `node_modules` y los artefactos de build. Un worktree es un checkout recién hecho.",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "El flujo con worktrees, paso a paso",
      steps: [
        {
          title: "Ignora la carpeta de worktrees",
          text: "Añade `.claude/worktrees/` a `.gitignore`, para que los archivos de los worktrees no aparezcan como sin seguimiento en tu checkout principal. Si nunca has ejecutado Claude en este repositorio, ejecuta `claude` una vez antes para aceptar el aviso de confianza del espacio de trabajo; hasta entonces, las ejecuciones interactivas con `--worktree` se cierran.",
        },
        {
          title: "Inicia una sesión por tarea",
          text: "Ejecuta `claude --worktree <name>` en una terminal para cada tarea. Si lo vuelves a ejecutar con un nombre que ya existe, reabre ese worktree en lugar de crear uno nuevo. También puedes pedirle a Claude a mitad de sesión que \"trabaje en un worktree\", y se mueve a uno con la herramienta `EnterWorktree`.",
          code: start,
        },
        {
          title: "Lleva contigo los archivos sin seguimiento",
          text: "Enumera los archivos ignorados por git que necesita el proyecto, como `.env` y `.env.local`, en un archivo `.worktreeinclude` en la raíz del repositorio, con la sintaxis de `.gitignore`. Claude Code copia los archivos que coinciden en cada worktree que crea, incluidos los de subagentes y los de la app de escritorio. Después instala las dependencias en el worktree, o configúralo en los ajustes: este ejemplo parte de tu trabajo actual, reutiliza un único `node_modules` y solo hace checkout del paquete web.",
          code: settings,
        },
        {
          title: "Deja trabajar a las sesiones",
          text: "Mientras una sesión está aislada, Claude Code rechaza las ediciones de archivos que apuntan al checkout principal, los comandos cuyo directorio de trabajo es el checkout principal y los comandos de git redirigidos hacia él (`git -C`, `--git-dir`, `GIT_DIR`). No controla lo que escribe un comando de shell normal como `cp`, así que los permisos y el sandbox siguen importando.",
        },
        {
          title: "Revisa y fusiona como cualquier rama",
          text: "Cada worktree es una rama normal. Haz commit y push desde dentro, abre un pull request y revísalo como harías con el de un compañero. Como todos los worktrees comparten `.git`, la rama se ve desde tu checkout principal al instante.",
        },
        {
          title: "Sal y limpia",
          text: "Al salir, Claude Code revisa el worktree. Uno limpio de una sesión sin nombre se elimina automáticamente junto con su rama; una sesión con nombre pregunta antes. Si hay cambios, archivos sin seguimiento o commits nuevos, pregunta si quieres conservar o eliminar el worktree, e imprime un comando `claude --worktree <name> --resume` para volver más tarde.",
        },
      ],
      source: { label: "Fuente: documentación de Claude Code, Run parallel sessions with worktrees", href: docs },
    },
    {
      kind: "table",
      title: "Ajustes de worktree en Claude Code",
      text: [
        "Todos van bajo `worktree` en un archivo de ajustes (`~/.claude/settings.json`, `.claude/settings.json` o `.claude/settings.local.json`).",
      ],
      headers: ["Ajuste", "Qué hace", "Por defecto"],
      rows: [
        ["`worktree.baseRef`", "`\"fresh\"` parte de la rama por defecto del remoto (`origin/main`); `\"head\"` parte de tu HEAD local, incluidos los commits sin subir", "`\"fresh\"`"],
        ["`worktree.symlinkDirectories`", "Enlaza con symlinks directorios como `node_modules` desde el checkout principal en lugar de duplicarlos", "Ninguno"],
        ["`worktree.sparsePaths`", "Hace checkout solo de los directorios indicados (más los archivos de la raíz) con sparse-checkout; incluye `.claude`", "Todo el árbol"],
        ["`worktree.bgIsolation`", "`\"worktree\"` hace que las sesiones en segundo plano editen solo dentro de un worktree; `\"none\"` les deja editar la copia de trabajo", "`\"worktree\"`"],
        ["Ubicación de los worktrees (app de escritorio)", "Settings > Code define una carpeta propia para las sesiones locales; las conexiones SSH tienen la suya", "`.claude/worktrees/`"],
        ["`.worktreeinclude` (archivo, no ajuste)", "Copia los archivos ignorados por git que coinciden en cada worktree nuevo", "Ninguno"],
      ],
    },
    {
      kind: "table",
      title: "Worktree de Claude Code frente a rama y a git worktree",
      headers: ["", "Cambiar de rama", "`git worktree add` + `claude`", "`claude --worktree`"],
      rows: [
        ["Archivos separados en disco", "No: un directorio, una rama cada vez", "Sí", "Sí"],
        ["Varias sesiones a la vez", "No: se sobrescriben entre sí", "Sí", "Sí"],
        ["Dónde se crea", "Tu checkout", "Donde elijas", "`.claude/worktrees/<name>/`, o la ruta de un hook"],
        ["Parte de", "La rama a la que cambias", "Cualquier rama existente o nueva", "`origin/<default>`, tu HEAD o un PR"],
        ["Copia `.env`", "No hace falta", "No", "Sí, con `.worktreeinclude`"],
        ["Bloquea ediciones fuera de él", "No", "No", "Sí"],
        ["Limpieza", "Ninguna", "`git worktree remove`", "Se ofrece al salir"],
      ],
    },
    {
      kind: "steps",
      id: "git-worktree",
      title: "Hacerlo a mano con git worktree",
      text: [
        "Usa git directamente cuando quieras una rama concreta que ya existe o una carpeta fuera del repositorio; `worktree.baseRef` no puede apuntar a una rama. Claude Code sigue compartiendo los plugins y las aprobaciones de permisos con estos worktrees.",
      ],
      steps: [
        {
          title: "Crea el worktree, inicia Claude y elimínalo al terminar",
          text: "Sustituye `feature-a` por el nombre de una rama nueva, o quita `-b` para hacer checkout de una rama que ya existe.",
          code: manual,
        },
      ],
    },
    {
      kind: "text",
      title: "Subagentes y sesiones en segundo plano en worktrees",
      points: [
        "Pídele a Claude que \"use worktrees para sus agentes\", o añade `isolation: worktree` al frontmatter de un subagente personalizado en `.claude/agents/`, y cada subagente edita en su propio worktree temporal.",
        "El worktree de un subagente sin cambios se elimina cuando el subagente termina. Uno con cambios se queda hasta que una limpieza periódica pueda eliminarlo sin perder trabajo, pasados `cleanupPeriodDays`.",
        "Las sesiones en segundo plano (`claude --bg`) editan solo dentro de un worktree por defecto; inicia una con `claude --bg --worktree` o pon `worktree.bgIsolation` en `\"none\"`.",
        "En la app de escritorio, activa Worktree bajo el cuadro de texto antes de iniciar una sesión.",
      ],
    },
    {
      kind: "text",
      title: "Limpieza de worktrees y problemas comunes",
      points: [
        "Las ejecuciones con `claude -p --worktree` no muestran el aviso al salir, así que dejan sus worktrees atrás. Elimínalos con `git worktree remove`, después de `git worktree unlock` si git dice que está bloqueado.",
        "`Can only use --worktree in a git repository`: ejecuta `git init` y haz un primer commit, o configura un hook `WorktreeCreate` para SVN, Perforce o Mercurial.",
        "Los archivos de Git LFS aparecen como archivos puntero cuando LFS se instaló con `--local`: ejecuta `git lfs pull` dentro del worktree.",
        "Claude Code no crea un worktree cuando `.claude` o `.claude/worktrees` es un symlink.",
        "Los hooks mantienen `${CLAUDE_PROJECT_DIR}` apuntando al checkout principal; lee el campo `cwd` de la entrada del hook para obtener la ruta del worktree.",
        "Un worktree con base `\"fresh\"` y sin commits propios, o cuyo PR ya se fusionó, se restablece a la rama por defecto cuando lo reabres por su nombre.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Con Crewmark",
      title: "Los worktrees mantienen las sesiones separadas. Crewmark las mantiene ocupadas.",
      text: [
        "Los worktrees resuelven el problema de las colisiones, pero cada sesión sigue parada hasta que escribes. Crewmark convierte una sesión de Claude Code, Codex, DeepSeek Harness u OpenCode en un empleado de IA con un rol, un objetivo y un horario, y la despierta con un heartbeat para que tome la siguiente issue de un tablero.",
      ],
      steps: [
        {
          title: "Un empleado por worktree",
          text: "Dale a cada empleado su propio worktree y su rol, por ejemplo un programador y un revisor en el mismo repositorio, como en [varios agentes de Claude Code](/blog/multiple-claude-code-agents).",
        },
        {
          title: "Deja que el heartbeat inicie el trabajo",
          text: "Durante su horario laboral cada empleado se despierta cada 15, 30 o 60 minutos en la misma conversación; mira [cómo hacer proactivo a Claude Code](/proactive-claude-code).",
        },
        {
          title: "Asigna issues y revisa las ramas",
          text: "Pon el trabajo en el tablero; cada empleado toma una issue, hace commit en su propia rama y te escribe cuando necesita una decisión. Lee [qué es un empleado de IA](/ai-employees).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Ejecutar sesiones de Claude Code en paralelo en git worktrees" },
  mid: {
    title: "Tres worktrees, tres sesiones. ¿Quién les dice qué toca ahora?",
    text: "Crewmark despierta cada sesión de Claude Code con un heartbeat, un rol, un objetivo y un tablero de issues, con el plan que ya pagas.",
    button: "Acceso anticipado",
  },
  faq: {
    title: "Preguntas frecuentes sobre los worktrees de Claude Code",
    items: [
      {
        q: "¿Qué es un worktree en Claude Code?",
        a: "Un directorio de trabajo de git aparte, con sus propios archivos y su propia rama, que comparte el historial de tu repositorio. `claude --worktree <name>` crea uno y ejecuta la sesión dentro, así que las sesiones en paralelo no editan los mismos archivos.",
      },
      {
        q: "¿Dónde pone Claude Code los worktrees?",
        a: "En `.claude/worktrees/<name>/`, en la raíz del repositorio, en una rama llamada `worktree-<name>`. La app de escritorio te deja elegir otra carpeta en Settings, y un hook `WorktreeCreate` puede ponerlos en cualquier sitio.",
      },
      {
        q: "¿De qué rama parte un worktree de Claude Code?",
        a: "Por defecto, de la rama por defecto del remoto, normalmente `origin/main`. Pon `worktree.baseRef` en `\"head\"` para partir de tu HEAD local, pasa `\"#1234\"` para empezar desde un pull request o crea el worktree con `git worktree add` para cualquier otra rama.",
      },
      {
        q: "¿Por qué falta mi archivo .env en el worktree?",
        a: "Un worktree es un checkout recién hecho, así que los archivos ignorados por git no están. Enuméralos en un archivo `.worktreeinclude` en la raíz del repositorio y Claude Code los copia en cada worktree nuevo.",
      },
      {
        q: "¿Cómo limpio los worktrees de Claude Code?",
        a: "Al salir de una sesión se te ofrece eliminar su worktree, y los que están limpios y sin nombre se eliminan solos. Los worktrees de ejecuciones con `-p` se quedan: lístalos con `git worktree list` y elimínalos con `git worktree remove`.",
      },
      {
        q: "Worktree o rama: ¿cuál es la diferencia?",
        a: "Una rama es una línea de commits; un worktree es un directorio donde se hace checkout de una rama. Cambiar de rama cambia los archivos de tu único directorio, mientras que los worktrees dan a cada rama su propio directorio, así que pueden trabajar varias sesiones a la vez.",
      },
      {
        q: "¿Los subagentes pueden usar worktrees?",
        a: "Sí. Pídele a Claude que use worktrees para sus agentes, o añade `isolation: worktree` al frontmatter de un subagente personalizado. Cada uno recibe un worktree temporal que se elimina si no hace cambios.",
      },
    ],
  },
  cta: {
    title: "Dale a cada worktree un empleado que sepa qué hacer después.",
    text: "Crewmark convierte las sesiones de Claude Code, Codex y DeepSeek Harness en empleados de IA con roles, objetivos, horarios y un heartbeat.",
    button: "Acceso anticipado",
  },
  checked: "Comprobado con la documentación de Claude Code (worktrees, ajustes, referencia de la CLI y app de escritorio) el 6 de noviembre de 2026.",
  disclaimer:
    "Crewmark es un producto independiente, sin relación con Anthropic y sin su respaldo. Claude y Claude Code son marcas de Anthropic.",
};
