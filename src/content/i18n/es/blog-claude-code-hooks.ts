import type { GuideCopy } from "@/components/landing/guide-article";

// Spanish translation of /blog/claude-code-hooks; the English master is src/content/blog/claude-code-hooks.ts.

const docs = "https://code.claude.com/docs/en/hooks-guide";

const notify = `{
  "hooks": {
    "Notification": [
      {
        "matcher": "",
        "hooks": [
          {
            "type": "command",
            "command": "osascript -e 'display notification \\"Claude Code needs your attention\\" with title \\"Claude Code\\"'"
          }
        ]
      }
    ]
  }
}`;

const format = `{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Edit|Write",
        "hooks": [
          { "type": "command", "command": "jq -r '.tool_input.file_path' | xargs npx prettier --write" }
        ]
      }
    ]
  }
}`;

const block = `#!/bin/bash
# .claude/hooks/block-drop-table.sh, se ejecuta como hook PreToolUse sobre Bash
INPUT=$(cat)
COMMAND=$(echo "$INPUT" | jq -r '.tool_input.command')

if echo "$COMMAND" | grep -q "drop table"; then
  echo "Blocked: dropping tables is not allowed" >&2  # se convierte en el feedback para Claude
  exit 2                                               # 2 = bloquear la acción
fi

exit 0  # sin decisión: se aplica el flujo normal de permisos`;

const stop = `{
  "hooks": {
    "Stop": [
      {
        "hooks": [
          {
            "type": "prompt",
            "prompt": "Check if all tasks are complete. If not, respond with {\\"ok\\": false, \\"reason\\": \\"what remains to be done\\"}."
          }
        ]
      }
    ]
  }
}`;

export const copy: GuideCopy = {
  meta: {
    title: "Hooks de Claude Code: eventos, ejemplos y cómo funcionan | Crewmark",
    description:
      "Los hooks de Claude Code explicados: eventos del ciclo de vida, dónde se configuran, códigos de salida y salida JSON, y ejemplos listos para copiar: notificaciones, formateo automático, bloqueo de comandos y hooks Stop.",
  },
  breadcrumb: "Guía de hooks de Claude Code",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-06" },
  hero: {
    kicker: "Blog · Claude Code",
    title: "Hooks de Claude Code: eventos, ejemplos y cómo funcionan",
    lead: "Los hooks de Claude Code son comandos que se ejecutan automáticamente en puntos fijos de una sesión: antes de que se ejecute una herramienta, después de editar un archivo, cuando Claude termina, cuando necesita tu respuesta. A diferencia de las instrucciones de CLAUDE.md, que Claude suele seguir, un hook se ejecuta siempre, así que es la forma de imponer reglas y automatizar tareas repetitivas. Esta guía cubre los eventos, dónde se configuran los hooks, cómo los códigos de salida y el JSON controlan lo que pasa, cuatro ejemplos listos para usar y los tipos de hook más nuevos: prompt, agent y HTTP.",
    cta: "Acceso anticipado",
    secondary: "Ir a los ejemplos",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "table",
      id: "events",
      title: "Eventos de hooks de Claude Code",
      text: [
        "La referencia enumera más de treinta eventos. Estos son los que usa la mayoría de los hooks; un `matcher` limita un hook a ciertas herramientas, archivos u orígenes.",
      ],
      headers: ["Evento", "Cuándo se dispara", "Uso habitual"],
      rows: [
        ["`SessionStart`", "Una sesión empieza o se reanuda", "Cargar contexto, comprobar el entorno"],
        ["`UserPromptSubmit`", "Envías un prompt, antes de que Claude lo vea", "Añadir contexto, bloquear prompts sensibles"],
        ["`PreToolUse`", "Antes de que se ejecute una llamada a herramienta; puede bloquearla", "Bloquear comandos peligrosos, proteger archivos"],
        ["`PermissionRequest`", "Una llamada a herramienta necesita una decisión de permisos", "Aprobar o denegar automáticamente ciertas solicitudes"],
        ["`PostToolUse`", "Después de que una llamada a herramienta termina bien", "Formatear, pasar el linter o probar los archivos editados"],
        ["`Notification`", "Claude Code envía una notificación", "Alertas de escritorio cuando Claude te necesita"],
        ["`SubagentStart`, `SubagentStop`", "Un subagente empieza o termina", "Registrar o revisar el trabajo delegado"],
        ["`Stop`", "Claude termina de responder", "Comprobar que la tarea está realmente terminada"],
        ["`PreCompact`, `PostCompact`", "Alrededor de la compactación del contexto", "Guardar o reinyectar el contexto clave"],
        ["`FileChanged`, `CwdChanged`", "Cambia un archivo vigilado o el directorio de trabajo", "Recargar el entorno, reformatear archivos"],
        ["`SessionEnd`", "La sesión termina", "Limpiar, escribir un registro"],
      ],
    },
    {
      kind: "table",
      title: "Dónde poner los hooks",
      headers: ["Ubicación", "Alcance", "Compartido"],
      rows: [
        ["`~/.claude/settings.json`", "Todos tus proyectos", "No"],
        ["`.claude/settings.json`", "Un proyecto", "Sí, haz commit"],
        ["`.claude/settings.local.json`", "Un proyecto", "No, está en el gitignore"],
        ["Configuración de políticas administradas", "Toda la organización", "Controlado por el administrador"],
        ["`hooks/hooks.json` de un plugin", "Mientras el plugin está activado", "Sí, con el plugin"],
        ["Frontmatter de una skill o un subagente", "Una vez invocada la skill, o mientras se ejecuta el subagente", "Sí, en el archivo"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Ejemplos de hooks de Claude Code, paso a paso",
      text: [
        "Añade cada bloque bajo la clave `hooks` de un archivo de configuración; si el archivo ya tiene un objeto `hooks`, añade el evento como una clave hermana en lugar de reemplazarlo. Ejecuta `/hooks` para confirmar que Claude Code lo cargó. También puedes pedirle a Claude que escriba el hook por ti.",
      ],
      steps: [
        {
          title: "Recibe una notificación de escritorio cuando Claude te necesite",
          text: "Un hook `Notification` en `~/.claude/settings.json`. Este usa `osascript` en macOS; usa `notify-send` en Linux o PowerShell en Windows.",
          code: notify,
        },
        {
          title: "Formatea automáticamente cada archivo que edite Claude",
          text: "Un hook `PostToolUse` con el matcher `Edit|Write` lee la ruta editada del JSON recibido por stdin con `jq` y ejecuta Prettier sobre ella. Ponlo en `.claude/settings.json` para que lo comparta todo el equipo.",
          code: format,
        },
        {
          title: "Bloquea un comando peligroso",
          text: "Un hook `PreToolUse` sobre `Bash` ejecuta este script. El código de salida 2 bloquea la llamada, y lo que escribas en stderr se convierte en el feedback para Claude, que así puede cambiar de rumbo. Salir con 0 significa que no hay decisión, así que se siguen aplicando los permisos normales.",
          code: block,
        },
        {
          title: "Mantén a Claude trabajando hasta terminar la tarea",
          text: "Un hook `Stop` de tipo `prompt` le pregunta a un modelo si todo está terminado. Si responde `ok: false`, Claude sigue trabajando con el `reason` como su siguiente instrucción. Es el ejemplo clásico de hook Stop.",
          code: stop,
        },
      ],
      source: { label: "Fuente: documentación de Claude Code, Automate actions with hooks", href: docs },
    },
    {
      kind: "text",
      title: "Cómo deciden los hooks lo que pasa",
      points: [
        "Entrada: cada hook recibe el evento como JSON por stdin, por ejemplo el nombre de la herramienta y `tool_input`, el ID de sesión y `cwd`.",
        "Salida 0: sin objeciones. En algunos eventos, como `SessionStart` y `UserPromptSubmit`, el stdout en texto plano se añade al contexto de Claude.",
        "Salida 2: bloquear, cuando el evento lo permite. El stderr vuelve a Claude o a ti, según el evento.",
        "JSON por stdout: control más fino, como `hookSpecificOutput` con una decisión de permisos, `updatedInput` para reescribir la entrada de una herramienta, o `additionalContext`.",
        "Otros códigos de salida: normalmente un error que no bloquea, salvo que el hook defina `onFailure: \"block\"`.",
        "Los hooks que coinciden con un mismo evento se ejecutan en paralelo.",
      ],
    },
    {
      kind: "table",
      title: "Hooks de tipo command, prompt, agent y HTTP",
      headers: ["Tipo", "Qué se ejecuta", "Tiempo límite por defecto"],
      rows: [
        ["`command`", "Un comando de shell", "10 minutos"],
        ["`http`", "Un POST del JSON del evento a una URL; el cuerpo de la respuesta funciona como la salida de un comando", "10 minutos"],
        ["`mcp_tool`", "Una herramienta de un servidor MCP configurado", "10 minutos"],
        ["`prompt`", "Una única llamada al modelo que responde `ok` o no", "30 segundos"],
        ["`agent`", "Un subagente que puede leer archivos y ejecutar herramientas antes de decidir (experimental)", "60 segundos"],
      ],
    },
    {
      kind: "text",
      title: "Hooks vs. skills vs. CLAUDE.md, y otros detalles a tener en cuenta",
      points: [
        "CLAUDE.md y las [skills](/blog/claude-code-skills) son instrucciones que Claude suele seguir; los hooks se ejecutan siempre. Pon en un hook todo lo que nunca deba saltarse.",
        "`PostToolUse` no puede deshacer una acción que ya se ejecutó; usa `PreToolUse` para impedirla.",
        "`Stop` se dispara cada vez que Claude termina una respuesta, no solo al final de una tarea, y no cuando el usuario la interrumpe.",
        "Los hooks no pueden ejecutar slash commands ni llamar a herramientas por sí mismos; solo responden mediante códigos de salida, stdout, stderr o JSON.",
        "`\"disableAllHooks\": true` desactiva los hooks; los hooks administrados se siguen ejecutando salvo que la configuración administrada también los desactive.",
        "Los hooks son locales a tu configuración de Claude Code. Las comprobaciones a nivel de organización en todos los productos de Claude son otra función: los [inference hooks de Claude](/blog/claude-inference-hooks).",
        "Un hook PreToolUse que filtra la salida de los tests es también una de las mejores formas de [reducir el uso de tokens](/blog/reduce-claude-code-token-usage).",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Con Crewmark",
      title: "Los hooks mantienen a Claude Code a raya. Crewmark lo mantiene trabajando.",
      text: [
        "Los hooks son lo que hace seguro a un agente sin supervisión: el formateo, los tests y las protecciones se ejecutan siempre. Crewmark convierte una sesión de Claude Code, Codex, DeepSeek Harness u OpenCode en un empleado de IA con un rol, un objetivo y un horario, y la despierta con un heartbeat para que tome la siguiente issue de un tablero, con los hooks de tu proyecto en su sitio.",
      ],
      steps: [
        {
          title: "Haz commit de tus hooks",
          text: "Los hooks de `.claude/settings.json` se cargan en la sesión del empleado igual que en la tuya, así que sus ediciones se formatean y sus comandos arriesgados se bloquean.",
        },
        {
          title: "Deja que el heartbeat inicie el trabajo",
          text: "Durante su horario, el empleado se despierta cada 15, 30 o 60 minutos en la misma conversación; consulta [cómo hacer que Claude Code sea proactivo](/proactive-claude-code).",
        },
        {
          title: "Responde solo a lo que te necesita",
          text: "Comenta en sus issues y te escribe cuando necesita una decisión. Lee [qué es un empleado de IA](/ai-employees).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Añadir hooks a Claude Code" },
  mid: {
    title: "Tus hooks se ejecutan siempre. ¿Y tu agente?",
    text: "Crewmark despierta a Claude Code con un heartbeat, un rol, un objetivo y un tablero de issues, con el plan que ya pagas.",
    button: "Acceso anticipado",
  },
  faq: {
    title: "Preguntas frecuentes sobre los hooks de Claude Code",
    items: [
      {
        q: "¿Qué son los hooks de Claude Code?",
        a: "Comandos, llamadas HTTP o comprobaciones con un modelo, definidos por el usuario, que Claude Code ejecuta automáticamente en eventos del ciclo de vida, como antes de que se ejecute una herramienta o cuando Claude termina. Dan un control determinista en lugar de depender de que Claude recuerde una instrucción.",
      },
      {
        q: "¿Dónde se configuran los hooks de Claude Code?",
        a: "Bajo `hooks` en `~/.claude/settings.json` (todos los proyectos), `.claude/settings.json` (compartido con el equipo) o `.claude/settings.local.json` (solo para ti). Los plugins, las skills y los subagentes también pueden incluir hooks. Ejecuta `/hooks` para ver cuáles están cargados.",
      },
      {
        q: "¿Cómo bloqueo un comando con un hook?",
        a: "Usa un hook `PreToolUse` con el matcher `Bash`. Lee el comando del JSON recibido por stdin y sal con el código 2 y un motivo en stderr para bloquearlo; Claude ve el motivo y se ajusta.",
      },
      {
        q: "¿Qué es un hook Stop?",
        a: "Un hook en el evento `Stop`, que se dispara cuando Claude termina de responder. Un hook Stop de tipo prompt puede comprobar si la tarea está completa y, si no lo está, devolver a Claude al trabajo con un motivo.",
      },
      {
        q: "Hooks vs. skills: ¿cuál es la diferencia?",
        a: "Las skills son instrucciones y archivos que Claude carga cuando son relevantes y que suele seguir. Los hooks son código que Claude Code ejecuta cada vez que se dispara un evento, decida lo que decida Claude.",
      },
      {
        q: "¿Por qué no se dispara mi hook?",
        a: "Comprueba que aparece en `/hooks`, que el nombre del evento y el matcher están escritos exactamente igual, que el script es ejecutable y que la salida del perfil de tu shell no está corrompiendo su JSON. Inicia Claude Code con un registro de depuración para ver qué hizo cada hook.",
      },
      {
        q: "¿Los hooks de Claude Code son lo mismo que los inference hooks?",
        a: "No. Los hooks de Claude Code se ejecutan en tu máquina para tus sesiones. Los inference hooks son una función de Claude Enterprise que envía cada prompt de la organización a un servidor de seguridad antes de que Claude se ejecute.",
      },
    ],
  },
  cta: {
    title: "Protecciones en los hooks, trabajo desde un tablero.",
    text: "Crewmark convierte las sesiones de Claude Code, Codex y DeepSeek Harness en empleados de IA con roles, objetivos, horarios y un heartbeat.",
    button: "Acceso anticipado",
  },
  checked: "Comprobado con la documentación de Claude Code (guía de hooks y referencia de hooks) el 6 de noviembre de 2026.",
  disclaimer:
    "Crewmark es un producto independiente, sin relación con Anthropic y sin su respaldo. Claude y Claude Code son marcas de Anthropic.",
};
