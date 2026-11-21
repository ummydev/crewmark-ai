import type { GuideCopy } from "@/components/landing/guide-article";

// es translation of /blog/codex-long-running-tasks; the English master is src/content/blog/codex-long-running-tasks.ts.

const docs = "https://learn.chatgpt.com/docs/long-running-work";

const commands = `# Interactivo: planifica el resultado y luego dale a Codex un objetivo que compruebe él mismo
/plan
/goal all tests in test/auth pass and the lint step is clean

# Sin interfaz, desde un script o cron: deja que edite archivos del workspace
codex exec --sandbox workspace-write "Work through TODO.md in order"

# A la mañana siguiente, o en la siguiente ejecución de cron: continúa la misma sesión
codex exec resume --last "Continue with the next unchecked item in TODO.md"`;

export const copy: GuideCopy = {
  meta: {
    title: "Tareas de larga duración en Codex: ejecuta Codex toda la noche",
    description:
      "Cómo mantener OpenAI Codex trabajando durante horas o toda la noche: /goal y /plan, tareas en la nube, codex exec resume, mantener el Mac despierto, seguirlo desde el móvil, límites de uso y qué lo detiene.",
  },
  breadcrumb: "Tareas de larga duración en Codex",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-08" },
  hero: {
    kicker: "Blog · Codex",
    title: "Tareas de larga duración en Codex: cómo ejecutar Codex toda la noche o en segundo plano",
    lead: "Codex puede trabajar en una tarea durante horas y seguir mientras duermes, si tienes cubiertas cuatro cosas: un objetivo que pueda comprobar él mismo, un ordenador que no se suspenda (o una tarea en la nube), aprobaciones que no te esperen y margen suficiente en tu plan. Esta guía repasa las formas de ejecutar tareas largas en Codex, desde Goal mode hasta las tareas en la nube y `codex exec resume`, lo que no puede hacer cada una y cómo darle a Codex un turno de noche fijo.",
    cta: "Empezar",
    secondary: "Ejecutarlo de noche",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "table",
      id: "compare",
      title: "Formas de mantener Codex en marcha",
      text: [
        "Algunas mantienen un mismo chat, así que Codex conserva su contexto; otras empiezan de cero cada vez.",
      ],
      headers: ["Opción", "El ordenador puede suspenderse", "Mismo chat", "Cuándo se detiene", "Ideal para"],
      rows: [
        ["Goal mode (`/goal`)", "No, para trabajo local", "Sí", "Cuando se cumple el objetivo o necesita una decisión", "Una tarea con una meta clara"],
        ["Tarea de Codex Cloud", "Sí", "Sí", "Cuando termina la tarea; tú revisas y abres una pull request", "Delegar una tarea antes de irte a dormir"],
        ["Tarea programada en un chat", "No, para archivos locales: ordenador encendido y app abierta", "Sí", "Se ejecuta según su programación: cada pocos minutos, a diario o semanalmente", "Retomar el mismo trabajo a intervalos"],
        ["`codex exec` desde cron", "No", "Sí, con `codex exec resume`", "El ritmo de tu cron; lo montas tú", "Scripts y CI"],
        ["Heartbeat de Crewmark", "No", "Sí", "El horario laboral que fijes, incluso pasada la medianoche", "Un trabajo permanente tomado de un tablero, issue a issue"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Cómo ejecutar Codex toda la noche",
      steps: [
        {
          title: "Dale un objetivo que pueda comprobar",
          text: "En la app de escritorio, la CLI o la extensión del IDE, `/goal` inicia Goal mode: el texto del objetivo es a la vez el primer prompt y la meta. Si no tienes claro cómo se ve el trabajo terminado, `/plan` te hace preguntas y convierte el resultado en un objetivo con criterios medibles. Incluye una comprobación, como que pase una suite de tests.",
          code: commands,
        },
        {
          title: "Mantén el ordenador despierto o envíalo a la nube",
          text: "Para trabajo local en un Mac, activa “Prevent sleep while running” en la app de escritorio. Una tarea de Codex Cloud se ejecuta en su propio workspace y sigue trabajando mientras tu ordenador está suspendido; inicia una eligiendo Work in > Cloud y un entorno.",
        },
        {
          title: "Configura las aprobaciones para que no se pare a las 2 de la madrugada",
          text: "Un objetivo mantiene el mismo sandbox y la misma política de aprobaciones, y se pausa cuando necesita una decisión. Déjale editar el workspace con `--sandbox workspace-write`, o usa “Approve for me” para que un revisor se ocupe de las peticiones rutinarias. `--full-auto` ya no está soportado, y `danger-full-access` solo tiene sentido en un runner o contenedor aislado.",
        },
        {
          title: "Planifica los límites de uso",
          text: "Codex comparte la cuota de tu plan de ChatGPT: una ventana móvil de 5 horas más límites semanales, y las tareas en la nube consumen del mismo fondo. ChatGPT Pro no tiene ahora límite de 5 horas; pueden aplicarse límites semanales. Los créditos o una clave de API permiten que el trabajo local continúe. Consulta [Claude Code vs Codex](/blog/claude-code-vs-codex) para ver las cifras.",
        },
        {
          title: "Síguelo desde el móvil",
          text: "En la app de ChatGPT puedes seguir una tarea, aprobar comandos y revisar diffs, tanto en tareas en la nube como en un Mac o PC con Windows que hayas conectado en Settings > Connections. El ordenador conectado tiene que seguir despierto y conectado. Consulta [control remoto de Codex](/blog/codex-remote-control).",
        },
      ],
      source: { label: "Fuente: documentación de Codex de OpenAI sobre trabajo de larga duración", href: docs },
    },
    {
      kind: "text",
      id: "stops",
      title: "Qué detiene una tarea larga de Codex",
      points: [
        "Una decisión que solo puedes tomar tú. Goal mode se pausa en lugar de ampliar su propio acceso, así que revisa las aprobaciones antes de irte.",
        "La suspensión o una conexión perdida en trabajo local. OpenAI sugiere pausar el objetivo antes de cuando prevés perder la conexión y reanudarlo después.",
        "El límite de uso, hasta que se reinicie la ventana o añadas créditos.",
        "Dos chats editando los mismos archivos. Da a los chats en paralelo sus propios git worktrees.",
        "Quedarse sin trabajo. Cuando se cumple el objetivo, se detiene, que es lo que quieres; para una lista de tareas, guárdalas en un archivo que vaya recorriendo.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Con Crewmark",
      title: "Dale a Codex un turno de noche",
      text: [
        "Una tarea larga termina; un trabajo no. Crewmark convierte una conversación de Codex en un empleado de IA con horario laboral y un heartbeat, así que sigue tomando la siguiente issue de un tablero sin que tengas que ponerla en cola.",
      ],
      steps: [
        {
          title: "Fija el horario laboral",
          text: "El horario laboral puede pasar de la medianoche, así que funciona un turno de noche como de 22:00 a 07:00, solo entre semana o todos los días. Fuera de su horario, el empleado duerme y no toca tu plan.",
        },
        {
          title: "Elige el heartbeat",
          text: "Cada 15, 30, 60, 120 o 240 minutos durante su turno, la CLI de crewmark pone en cola un mensaje en la misma conversación de Codex con `codex queue --resume` y la inicia, para que el empleado tome su siguiente issue. Tu ordenador tiene que seguir encendido.",
        },
        {
          title: "Lee el tablero por la mañana",
          text: "Cada issue tiene sus comentarios y su registro de actividad, y lo que te necesita llega como un mensaje al que el empleado espera respuesta. Consulta [cómo hacer que Codex sea proactivo](/proactive-codex) y [qué es un empleado de IA](/ai-employees).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Ejecutar Codex toda la noche" },
  mid: {
    title: "¿Quieres que Codex haga el turno de noche todas las noches?",
    text: "Crewmark despierta a tu Codex con un heartbeat durante el horario que fijes y le da la siguiente issue de un tablero.",
    button: "Empezar",
  },
  faq: {
    title: "Preguntas frecuentes sobre las tareas de larga duración en Codex",
    items: [
      {
        q: "¿Puede Codex trabajar toda la noche?",
        a: "Sí. Dale un objetivo con `/goal`, mantén el Mac despierto con “Prevent sleep while running” (o usa una tarea de Codex Cloud, que sigue trabajando mientras tu ordenador duerme), configura las aprobaciones para que no te espere y revisa el resultado por la mañana.",
      },
      {
        q: "¿Cómo ejecuto Codex en segundo plano?",
        a: "Ejecuta `codex exec` sin la interfaz interactiva, desde un script, cron o CI, y continúa la misma sesión más tarde con `codex exec resume --last`. O inicia una tarea de Codex Cloud desde la web o la app de escritorio y cierra la ventana.",
      },
      {
        q: "¿Qué es Goal mode en Codex?",
        a: "Goal mode, que se inicia con `/goal`, mantiene a Codex trabajando hacia un objetivo que tú escribes; el texto del objetivo es a la vez el primer prompt y el criterio de finalización. Puedes pausarlo, reanudarlo, editarlo o borrarlo desde la fila de progreso de la app de escritorio.",
      },
      {
        q: "¿Codex sigue trabajando cuando mi ordenador está suspendido?",
        a: "Las tareas en la nube sí. El trabajo local necesita el ordenador despierto, algo que en un Mac resuelve la opción “Prevent sleep while running” de la app de escritorio; un ordenador conectado que controlas desde el móvil también tiene que seguir despierto y conectado.",
      },
      {
        q: "¿Una ejecución larga de Codex agotará mi límite de uso?",
        a: "Puede. Codex usa la ventana de 5 horas y los límites semanales de tu plan de ChatGPT, y las tareas en la nube consumen de la misma cuota. Reparte el trabajo entre ventanas con una programación o un heartbeat en lugar de una sola ráfaga larga.",
      },
      {
        q: "¿Es seguro ejecutar Codex sin supervisión?",
        a: "Mantén `--sandbox workspace-write` o “Approve for me” en tu propia máquina, usa `danger-full-access` solo en un runner o contenedor aislado y trabaja en un repositorio donde los cambios pasen por revisión.",
      },
    ],
  },
  cta: {
    title: "Dale a Codex un turno de noche.",
    text: "Crewmark convierte las sesiones de Claude Code y Codex en empleados de IA con roles, objetivos, horario laboral y un heartbeat.",
    button: "Empezar",
  },
  checked:
    "Verificado con la documentación de Codex de OpenAI (trabajo de larga duración, Codex Cloud, modo no interactivo, móvil, tareas programadas) el 8 de noviembre de 2026.",
  disclaimer:
    "Crewmark es un producto independiente, no afiliado ni respaldado por OpenAI. Codex y ChatGPT son marcas comerciales de OpenAI.",
};
