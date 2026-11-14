import type { GuideCopy } from "@/components/landing/guide-article";

// es translation of /blog/claude-code-background-agents; the English master is
// src/content/blog/claude-code-background-agents.ts.
export const copy: GuideCopy = {
  meta: {
    title: "Claude Code en segundo plano: headless y --bg | Crewmark AI",
    description:
      "Claude Code en segundo plano: tareas en segundo plano, agent view con --bg, claude -p headless con cron, sesiones en la nube y los permisos de cada uno.",
  },
  breadcrumb: "Agentes de Claude Code en segundo plano",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-02" },
  hero: {
    kicker: "Blog · Claude Code",
    title: "Cómo ejecutar agentes de Claude Code en segundo plano",
    lead: "Un agente en segundo plano sigue trabajando mientras tú haces otra cosa: una larga ejecución de tests que mandaste al segundo plano, una sesión que iniciaste con --bg antes de cerrar el terminal o un trabajo headless con claude -p que cron lanza cada mañana. Claude Code tiene una herramienta para cada caso. Esta guía muestra cómo usarlas, qué mantiene en marcha a cada una y qué permisos necesita una ejecución sin supervisión.",
    cta: "Empezar",
    secondary: "Ir al modo headless",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "table",
      title: "Cinco formas de ejecutar Claude Code en segundo plano",
      text: ["Se diferencian en qué tiene que seguir en marcha y en quién inicia el trabajo."],
      headers: ["", "Se inicia con", "Sigue en marcha mientras", "Ideal para"],
      rows: [
        ["Tareas en segundo plano", "Ctrl+B, o Claude ejecuta un comando en segundo plano", "La sesión está abierta", "Builds y tests largos, subagentes, dentro de una conversación"],
        ["Agent view", "`claude --bg \"<prompt>\"`", "Tu ordenador está encendido (el terminal se puede cerrar)", "Varias sesiones que inicias ahora y revisas después"],
        ["Modo headless", "`claude -p \"<prompt>\"`, desde un script o cron", "El comando se está ejecutando", "Scripts, trabajos de cron, CI"],
        ["Sesiones en la nube", "`claude --cloud \"<task>\"`", "Las ejecutan los servidores de Anthropic (puedes cerrar el portátil)", "Tareas largas en un repositorio de GitHub"],
        ["Tareas programadas", "`/schedule`, la app de escritorio o `/loop`", "Depende del tipo: en la nube, con la app abierta o con la sesión abierta", "Trabajo recurrente; consulta [cómo hacer que Claude Code sea proactivo](/proactive-claude-code)"],
      ],
    },
    {
      kind: "text",
      title: "Tareas en segundo plano dentro de una sesión",
      text: [
        "Pulsa Ctrl+B mientras Claude ejecuta un comando Bash o un subagente para enviarlo al segundo plano (dos veces en tmux) y sigue hablando con Claude. Claude también puede iniciar por su cuenta un comando en segundo plano. Los subagentes que lanza Claude se ejecutan en segundo plano por defecto.",
        "Escribe `/tasks` para ver los shells y subagentes en marcha y revisarlos. En una sesión de terminal local, un comando en segundo plano no tiene límite de tiempo, pero se detiene cuando Claude Code se cierra. Para ejecutar varios agentes en paralelo, consulta [cómo ejecutar varios agentes de Claude Code](/blog/multiple-claude-code-agents).",
      ],
    },
    {
      kind: "text",
      title: "Agent view: sesiones que sobreviven al terminal",
      text: [
        "`claude --bg \"<prompt>\"` inicia una sesión en segundo plano y vuelve al momento; `/bg` manda al segundo plano la sesión en la que estás. Un proceso supervisor las ejecuta, así que cerrar el terminal no las detiene, pero apagar o reiniciar el ordenador sí, y una sesión inactiva sin nadie conectado se detiene al cabo de una hora aproximadamente.",
        "`claude agents` abre la agent view; `claude attach <id>`, `claude logs <id>` y `claude stop <id>` gestionan una sesión concreta. La agent view es una vista previa de investigación (research preview), así que los comandos pueden cambiar.",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Ejecuta Claude Code en modo headless con claude -p",
      steps: [
        {
          title: "Ejecuta un prompt y termina",
          text: "`-p` (o `--print`) ejecuta Claude Code sin la interfaz interactiva y termina cuando acaba, con el código de salida 0 si todo va bien. También puedes pasarle la entrada por una tubería.",
          code: 'claude -p "List the failing tests and why they fail"\ncat error.log | claude -p "Explain this error"',
        },
        {
          title: "Obtén una salida que un script pueda leer",
          text: "`--output-format json` devuelve el resultado con el ID de sesión y metadatos, incluido `total_cost_usd`, una estimación calculada en tu máquina. `stream-json` (con `--verbose`) emite los eventos a medida que ocurren.",
          code: "claude -p \"Summarize this repo\" --output-format json | jq -r '.result'",
        },
        {
          title: "Permite solo las herramientas que necesita",
          text: "En modo headless no hay nadie para aprobar una solicitud. Desde la v2.1.302, una ejecución sin modo definido empieza en Manual y deniega todo lo que necesitaría aprobación. Usa `--allowedTools` para lo que puede hacer y `--permission-mode dontAsk` para denegar el resto en lugar de esperar.",
          code: 'claude -p "Run the test suite and summarize failures" \\\n  --permission-mode dontAsk --allowedTools "Read,Bash(npm test)"',
        },
        {
          title: "Pon un límite a la ejecución",
          text: "`--max-turns` se detiene tras un número de turnos del agente, y `--max-budget-usd` al llegar a un coste estimado (puede pasarse un poco). Los dos funcionan solo con `-p`.",
          code: 'claude -p "Fix the lint errors" --max-turns 15 --max-budget-usd 3',
        },
        {
          title: "Continúa la misma conversación más tarde",
          text: "Guarda el ID de sesión de la salida JSON y pásalo a `--resume`, o usa `--continue` para la sesión más reciente del directorio.",
          code: "id=$(claude -p \"Start a code review of src/\" --output-format json | jq -r '.session_id')\nclaude -p \"Now check the tests too\" --resume \"$id\"",
        },
        {
          title: "Prográmalo con cron",
          text: "La documentación de Anthropic no incluye un ejemplo de cron; este usa solo flags documentados. Cron tiene un PATH mínimo, así que usa la ruta completa que da `which claude` y crea antes la carpeta de logs. No añadas `--bare` aquí: se salta el inicio de sesión de tu suscripción y necesita una clave de API.",
          code: '# crontab -e: los días laborables a las 9:00\n0 9 * * 1-5  cd /path/to/repo && /path/to/claude -p "Summarize yesterday\'s commits and list new TODO comments. Do not edit files." --permission-mode dontAsk --allowedTools "Read,Bash(git log *),Bash(git diff *)" --max-turns 10 --output-format json >> "$HOME/logs/claude-daily.log" 2>&1',
        },
      ],
      source: { label: "Fuente: documentación del modo headless de Anthropic", href: "https://code.claude.com/docs/en/headless" },
    },
    {
      kind: "text",
      title: "Permisos para ejecuciones sin supervisión",
      points: [
        "`dontAsk` más una lista `--allowedTools` es la opción más cerrada: deniega todo lo que no esté en la lista.",
        "`auto` deja que un clasificador revise cada acción en lugar de ti. Anthropic advierte que no garantiza la seguridad.",
        "`acceptEdits` aprueba las ediciones de archivos y los comandos de archivo sencillos, pero no otros comandos de shell.",
        "`bypassPermissions` se salta las solicitudes y las comprobaciones de seguridad. Anthropic indica que solo se use en contenedores o máquinas virtuales aislados y sin acceso a internet, ya que no ofrece protección frente a la inyección de prompts.",
        "Para reglas que se apliquen a todas las ejecuciones de un proyecto, pon `permissions.allow` y `permissions.deny` en `.claude/settings.json`. Las reglas de denegación siempre ganan.",
      ],
    },
    {
      kind: "text",
      title: "Opciones en la nube: cuando tu ordenador está apagado",
      points: [
        "Sesiones en la nube: `claude --cloud \"<task>\"` se ejecuta en la infraestructura de Anthropic a partir de tu rama de GitHub y sigue en marcha con el portátil cerrado. Envía instrucciones de seguimiento con `claude -p \"...\" --cloud <session-id>`.",
        "Tareas programadas en la nube: se crean con `/schedule` o en claude.ai/code y se ejecutan según un horario (como máximo una vez por hora), desde una llamada a la API o a partir de eventos de GitHub. Pro, Max, Ultra, Team y Enterprise; vista previa de investigación.",
        "GitHub Actions: `anthropics/claude-code-action@v1` con un disparador `schedule`. Un token OAuth de `claude setup-token` usa tu suscripción; una clave de API se factura por token.",
      ],
    },
    {
      kind: "steps",
      kicker: "Con Crewmark",
      title: "Dale a un agente en segundo plano un trabajo fijo",
      text: [
        "Las tareas en segundo plano, la agent view y cron inician trabajo que ya has decidido tú. Crewmark, en cambio, le da a una sesión de Claude Code un rol continuo: se despierta con un latido (heartbeat) durante su horario, toma la siguiente tarea de un tablero y te escribe cuando se bloquea.",
      ],
      steps: [
        {
          title: "Convierte una sesión en un empleado",
          text: "Elige un rol y un objetivo en cifras, y ejecuta en Claude Code el comando de configuración que te da Crewmark. Esa conversación se convierte en el empleado.",
        },
        {
          title: "Deja que el latido ponga en marcha el trabajo",
          text: "El daemon de Crewmark despierta la sesión cada 15, 30 o 60 minutos durante su horario, con la suscripción que ya pagas, y la deja tranquila fuera de él.",
        },
        {
          title: "Asigna tareas, responde a sus mensajes",
          text: "Añade el trabajo como tareas en el tablero; el empleado las toma, comenta sobre la marcha y te pregunta cuando necesita una revisión. Consulta [qué es un empleado de IA](/ai-employees).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Ejecuta Claude Code en modo headless con claude -p" },
  mid: {
    title: "¿Quieres que elija su siguiente tarea él solo?",
    text: "Crewmark despierta tu sesión de Claude Code con un latido y le pasa la siguiente tarea de un tablero, dentro del horario que definas.",
    button: "Empezar",
  },
  faq: {
    title: "Preguntas frecuentes sobre agentes de Claude Code en segundo plano",
    items: [
      {
        q: "¿Cómo ejecuto Claude Code en segundo plano?",
        a: "Dentro de una sesión, pulsa Ctrl+B para mandar al segundo plano un comando o subagente en marcha. Para iniciar una sesión entera en segundo plano, usa `claude --bg \"<prompt>\"`. Para scripts y cron, usa el modo headless: `claude -p \"<prompt>\"`.",
      },
      {
        q: "¿Qué es el modo headless de Claude Code?",
        a: "Ejecutar Claude Code con `-p` (o `--print`): recibe un prompt, trabaja sin la interfaz interactiva y termina, mostrando el resultado como texto, JSON o un flujo de eventos JSON.",
      },
      {
        q: "¿Un agente en segundo plano sigue funcionando si cierro el terminal?",
        a: "Las tareas en segundo plano dentro de una sesión se detienen cuando Claude Code se cierra. Las sesiones iniciadas con `--bg` siguen en marcha después de cerrar el terminal, hasta que se apaga el ordenador. Las sesiones en la nube y las tareas programadas en la nube siguen funcionando con el ordenador apagado.",
      },
      {
        q: "¿Qué modo de permisos debe usar una ejecución sin supervisión?",
        a: "Empieza con `--permission-mode dontAsk` y una lista `--allowedTools` con exactamente lo que necesita el trabajo. Usa `bypassPermissions` solo dentro de un contenedor o una máquina virtual aislados y sin acceso a internet.",
      },
      {
        q: "¿claude -p usa mi suscripción de Claude?",
        a: "Usa la cuenta con la que hayas iniciado sesión, salvo que pases `--bare`, que se salta el inicio de sesión y necesita una clave de API. La documentación de Anthropic no detalla cómo cuentan las ejecuciones headless para los límites de uso de un plan.",
      },
      {
        q: "¿Cómo reviso los agentes en segundo plano?",
        a: "Usa `/tasks` dentro de una sesión, `claude agents` para las sesiones iniciadas con `--bg`, y el archivo de log o la salida JSON para las ejecuciones headless.",
      },
    ],
  },
  cta: {
    title: "Dale a Claude Code un trabajo fijo.",
    text: "Crewmark convierte una sesión de Claude Code en un empleado de IA con un rol, un objetivo, un horario y un latido.",
    button: "Empezar",
  },
  checked: "Comprobado con la documentación de Claude Code de Anthropic el 2 de noviembre de 2026.",
  disclaimer:
    "Crewmark es un producto independiente, sin relación con Anthropic y sin su respaldo. Claude y Claude Code son marcas de Anthropic.",
};
