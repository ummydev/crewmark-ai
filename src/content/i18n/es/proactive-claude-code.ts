import type { GuideCopy } from "@/components/landing/guide-article";

// es translation of /proactive-claude-code; the English master is src/content/proactive-claude-code.ts.
export const copy: GuideCopy = {
  meta: {
    title: "Claude Code proactivo: /loop y tareas programadas | Crewmark",
    description:
      "Haz que Claude Code trabaje sin esperarte: Proactive output style, auto mode, /goal, /loop, tareas programadas y un latido que le da un trabajo fijo.",
  },
  breadcrumb: "Claude Code proactivo",
  hero: {
    kicker: "Claude Code proactivo",
    title: "Cómo hacer que Claude Code sea proactivo",
    lead: "Un agente de Claude Code proactivo no espera tu siguiente mensaje. Toma él mismo las decisiones rutinarias, sigue hasta terminar el trabajo, se despierta según un horario y reacciona cuando pasa algo. Claude Code trae una pieza integrada para cada una de estas cosas. Esta guía muestra cómo activarlas, dónde se queda corta cada una y cómo darle a Claude Code un trabajo fijo en lugar de un prompt puntual. La pieza que las funciones integradas dejan fuera es el latido (heartbeat): despertar la misma sesión a un ritmo fijo para que tome su siguiente tarea. Te enseñamos a montarlo a mano y cómo lo hace Crewmark por ti.",
    cta: "Acceso anticipado",
    secondary: "Ir a los pasos",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "Qué significa “proactivo” en Claude Code",
      text: [
        "Por defecto Claude Code es reactivo: tú escribes, él trabaja, se detiene y espera. Hacerlo proactivo requiere tres cosas distintas, y la mayoría de las guías solo cubren una.",
      ],
      points: [
        "Actúa sin preguntar por cada paso: un estilo de salida y un modo de permisos que le dejan tomar decisiones rutinarias.",
        "Empieza a trabajar por su cuenta: un bucle, un horario o un evento que inicia un turno sin que tú escribas.",
        "Sabe en qué trabajar a continuación: un objetivo o una cola de trabajo, para que cada vez que se despierte tenga algo útil que hacer.",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Paso a paso: cómo hacer que Claude Code sea proactivo",
      steps: [
        {
          title: "Activa el Proactive output style",
          text: "Esto es lo que la gente suele llamar “modo proactivo de Claude Code”. No es un modo, sino un estilo de salida integrado: Claude empieza a implementar en cuanto le das una tarea, hace suposiciones razonables en las decisiones rutinarias en lugar de preguntar y se salta la planificación salvo que le pidas un plan. Aun así te consulta antes de borrar datos o tocar sistemas compartidos o de producción, y no cambia tus solicitudes de permiso. También puedes elegirlo en Output style dentro de `/config`.",
          code: "/output-style Proactive",
        },
        {
          title: "Elige un modo de permisos para trabajar sin supervisión",
          text: "Un agente que se detiene en cada solicitud de permiso no es proactivo. El auto mode (modo automático) ejecuta las acciones con comprobaciones de seguridad en segundo plano en lugar de preguntar, y `acceptEdits` deja pasar las ediciones de archivos pero sigue preguntando por otros comandos. Reserva `bypassPermissions`, que se salta todas las comprobaciones, para contenedores y máquinas virtuales aislados.",
          code: "claude --permission-mode auto",
        },
        {
          title: "Haz que siga hasta terminar con /goal",
          text: "`/goal` recibe una condición. Después de cada turno, un modelo pequeño comprueba si se cumple y, si no, Claude inicia otro turno por sí solo. El objetivo se borra cuando se cumple. Escribe una condición que podrías comprobar tú mismo, como que pase un conjunto de tests.",
          code: "/goal all tests in test/auth pass and the lint step is clean",
        },
        {
          title: "Repite trabajo con /loop mientras la sesión está abierta",
          text: "`/loop` ejecuta un prompt a intervalos, o deja que Claude elija la espera después de cada ejecución si omites el intervalo. Vive en la sesión actual: la sesión tiene que seguir abierta, los bucles recurrentes caducan a los 7 días y las ejecuciones que se perdieron mientras estaba ocupada no se recuperan.",
          code: "/loop 30m check CI on my open PRs and fix anything that failed",
        },
        {
          title: "Prográmalo para cuando no estés delante del teclado",
          text: "Las tareas programadas de escritorio ejecutan una sesión nueva en tu ordenador según un horario, siempre que la app de escritorio de Claude esté abierta y el ordenador despierto. Las tareas programadas en la nube, creadas con `/schedule`, se ejecutan en la nube de Anthropic, así que tu ordenador puede estar apagado; se ejecutan como máximo una vez por hora y necesitan un plan Pro, Max, Ultra, Team o Enterprise. Para repositorios, la GitHub Action oficial puede ejecutar Claude Code con un horario cron.",
          code: '/schedule every weekday at 9am, triage new GitHub issues and label them\n\n# .github/workflows/claude.yml\non:\n  schedule:\n    - cron: "0 9 * * 1-5"',
        },
        {
          title: "Deja que los eventos lo despierten",
          text: "Channels envía eventos a una sesión en marcha: un mensaje de Telegram, Discord o iMessage, un fallo de CI o un webhook, para que Claude reaccione sin que abras el terminal. Los hooks ejecutan tus propios comandos en momentos del ciclo de vida de Claude, como antes de una llamada a una herramienta o al terminar un turno. Ambos necesitan que la sesión esté en marcha.",
          code: "claude --channels plugin:telegram@claude-plugins-official",
        },
      ],
      source: {
        label: "Fuente: documentación de Claude Code de Anthropic sobre tareas programadas",
        href: "https://code.claude.com/docs/en/scheduled-tasks",
      },
    },
    {
      kind: "steps",
      id: "heartbeat",
      kicker: "La pieza que falta",
      title: "Añade un latido: despierta la misma sesión para su siguiente tarea",
      text: [
        "Un latido es un aviso breve y regular a la misma conversación de Claude Code, por ejemplo cada 30 minutos durante el horario laboral, que dice: revisa tu trabajo y toma la siguiente tarea. A diferencia de una tarea programada, que inicia una sesión nueva con el mismo prompt cada vez, un latido mantiene viva una única conversación, así que el agente recuerda lo que hizo la última vez y toma el siguiente elemento de una cola. Esa es la diferencia entre un trabajo que se repite y un empleado que sigue trabajando.",
        "Claude Code no tiene un ajuste de latido, pero el modo headless puede reanudar una sesión, así que puedes montarlo a mano.",
      ],
      steps: [
        {
          title: "A mano: cron más claude -p --resume",
          text: "Inicia una sesión, guarda su ID y deja que cron la reanude a un ritmo fijo con un prompt de latido corto. Guarda la cola de trabajo en un archivo del repositorio, como TODO.md. Este ejemplo es nuestro y está hecho con flags documentados; la documentación de Anthropic no describe cómo montar un latido.",
          code: "# Una vez: inicia la sesión y guarda su ID\nclaude -p \"You own TODO.md. Each time I say heartbeat, take the next unchecked task, do it, tick it off.\" --output-format json | jq -r '.session_id' > ~/.heartbeat-session\n\n# crontab -e: cada 30 minutos, de 9:00 a 17:30 los días laborables\n*/30 9-17 * * 1-5  cd ~/my-app && claude -p \"heartbeat\" --resume \"$(cat ~/.heartbeat-session)\" --permission-mode auto >> ~/heartbeat.log 2>&1",
        },
        {
          title: "Lo que no cubre la versión casera",
          text: "Gestionas tú mismo el archivo de la cola y los horarios de cron, nada lo detiene fuera del horario laboral salvo que lo codifiques en cron, un latido que llega mientras estás usando la sesión choca contigo y no puedes ver, entre varios agentes, qué está haciendo cada uno.",
        },
        {
          title: "Con Crewmark: un latido integrado",
          text: "El daemon de Crewmark envía el latido a la propia conversación del empleado cada 15, 30 o 60 minutos durante su horario, espera si el agente está ocupado, y el tablero es la cola: en cada latido, el empleado toma su siguiente tarea e informa sobre ella. Los detalles están [más abajo](#crewmark).",
        },
      ],
    },
    {
      kind: "table",
      title: "Qué opción encaja",
      headers: ["Opción", "Empieza a trabajar solo", "El ordenador tiene que estar encendido", "Ideal para"],
      rows: [
        ["Proactive output style", "No, actúa más rápido una vez que se lo pides", "Sí", "Menos preguntas durante una tarea"],
        ["/goal", "Sí, el siguiente turno, hasta que se cumple la condición", "Sí", "Terminar una tarea sin tener que empujarlo"],
        ["/loop", "Sí, a intervalos, durante hasta 7 días", "Sí, con la sesión abierta", "Vigilar un despliegue, la CI o una PR"],
        ["Tareas programadas de escritorio", "Sí, según un horario", "Sí, despierto y con la app abierta", "Trabajos diarios con archivos locales"],
        ["Tareas programadas en la nube", "Sí, como máximo una vez por hora", "No", "Trabajos que solo necesitan un repositorio"],
        ["GitHub Actions", "Sí, con cron o eventos de GitHub", "No", "Mantenimiento de repositorios"],
        ["Channels", "Sí, cuando llega un evento", "Sí, con la sesión abierta", "Reaccionar a chats, CI y webhooks"],
        ["Latido a mano (cron + `claude -p --resume`)", "Sí, al ritmo de tu cron, en la misma sesión", "Sí", "Un agente que va completando un archivo TODO"],
        ["Latido de Crewmark", "Sí, cada 15–60 min en horario laboral, en la misma sesión", "Sí", "Agentes con pendientes, objetivos y horario"],
      ],
    },
    {
      kind: "text",
      title: "Lo que estas funciones siguen dejándote a ti",
      text: [
        "Cada función inicia un turno. Ninguna decide en qué debería estar trabajando el agente esta semana. En la práctica, eso deja huecos:",
      ],
      points: [
        "Un horario repite el mismo prompt. No toma la siguiente tarea de una lista de pendientes ni recuerda qué terminó la ejecución de ayer.",
        "No hay un tablero donde darle trabajo nuevo a Claude y ver qué está haciendo, qué ha terminado y dónde se ha atascado.",
        "No hay horario laboral ni metas: un bucle se ejecuta hasta que caduca, no hasta que se mueve una cifra.",
        "Con varios agentes, nada los coordina, así que cada uno necesita sus propios prompts y horarios.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Con Crewmark",
      title: "Dale a Claude Code un trabajo fijo",
      text: [
        "Crewmark convierte una conversación de Claude Code en un empleado de IA con un rol, un objetivo, un horario y un latido, y le da trabajo a través de un tablero. Funciona en tu Claude Code real, con el plan que ya pagas.",
      ],
      steps: [
        {
          title: "Contrata un empleado y conecta su conversación",
          text: "Elige un rol, como especialista SEO o ingeniero de software, y ejecuta en Claude Code el comando de configuración que te da Crewmark. Esa conversación se convierte en el empleado, así que conserva la memoria del trabajo entre un despertar y otro.",
        },
        {
          title: "Define un horario y un latido",
          text: "Un pequeño programa en segundo plano en tu ordenador, el daemon de Crewmark, envía el prompt de latido del empleado a esa misma conversación cada 15, 30 o 60 minutos durante su horario, y lo deja tranquilo fuera de él. Si llega un latido mientras el agente está ocupado, espera hasta que quede libre.",
        },
        {
          title: "Asigna tareas en el tablero",
          text: "Cuando asignas una tarea o la comentas, el aviso llega a la conversación del agente como un mensaje. Si la conversación está cerrada, Crewmark la reanuda con `claude -p --resume` en auto mode, así que el trabajo se recoge igualmente.",
        },
        {
          title: "Mídelo con una cifra",
          text: "Dale a cada empleado un KPI, como los clics de Search Console al mes. Planifica sus tareas para mover esa cifra, las mueve por el tablero, comenta su progreso y te escribe cuando necesita una decisión.",
        },
      ],
    },
    {
      kind: "text",
      title: "Úsalos juntos",
      text: [
        "Las funciones integradas y Crewmark se complementan. Activa el Proactive output style y el auto mode en la conversación del empleado para que cada latido haga trabajo real, usa `/goal` dentro de una tarea con un final claro y consulta su progreso desde el móvil con [Claude Code Remote Control](/remote-claude-code). Para trabajos puntuales que se ejecutan sin ti, consulta [cómo ejecutar agentes de Claude Code en segundo plano y en modo headless](/blog/claude-code-background-agents). ¿Usas Codex? Consulta [cómo hacer que Codex sea proactivo](/proactive-codex).",
      ],
    },
  ],
  howTo: { section: "how-to", name: "Cómo hacer que Claude Code sea proactivo" },
  mid: {
    title: "Olvídate del cron y de la sesión abierta",
    text: "Crewmark despierta tu sesión de Claude Code con un latido durante el horario laboral y le pasa la siguiente tarea de un tablero.",
    button: "Acceso anticipado",
  },
  faq: {
    title: "Preguntas frecuentes",
    items: [
      {
        q: "¿Qué es un latido (heartbeat) para Claude Code?",
        a: "Un aviso regular a la misma conversación de Claude Code, por ejemplo cada 30 minutos durante el horario laboral, que le dice al agente que revise su trabajo y tome la siguiente tarea. Como reanuda una sesión en lugar de iniciar una nueva, el agente recuerda el trabajo anterior. Puedes montarlo con cron y `claude -p --resume`; Crewmark lo trae integrado, con horario laboral y un tablero como cola.",
      },
      {
        q: "¿Claude Code tiene un modo proactivo?",
        a: "No como modo. Claude Code tiene un estilo de salida integrado llamado Proactive, que se activa con `/output-style Proactive` y hace que actúe en las decisiones rutinarias en lugar de preguntar. No cambia las solicitudes de permiso; para eso, combínalo con el auto mode.",
      },
      {
        q: "¿Cómo ejecuto Claude Code según un horario?",
        a: "Usa `/loop` mientras haya una sesión abierta, las tareas programadas de escritorio para trabajos en tu ordenador, `/schedule` para tareas programadas en la nube que se ejecutan con el ordenador apagado, o la GitHub Action de Claude Code con un disparador cron.",
      },
      {
        q: "¿/loop sigue funcionando después de cerrar Claude Code?",
        a: "No. Un bucle pertenece a su sesión, así que se detiene cuando la sesión termina, y los bucles recurrentes caducan a los 7 días. Para algo que sobreviva a la sesión, usa tareas programadas o un latido de Crewmark.",
      },
      {
        q: "¿Puede Claude Code trabajar con mi ordenador apagado?",
        a: "Las tareas programadas en la nube y GitHub Actions sí, porque se ejecutan en máquinas de otros. Todo lo que usa tus archivos locales, incluidas las tareas programadas de escritorio, Channels y Crewmark, necesita tu ordenador encendido.",
      },
      {
        q: "¿Es seguro dejar que Claude Code trabaje sin supervisión?",
        a: "Usa el auto mode en lugar de `bypassPermissions`, dale un repositorio en el que cada cambio pase por revisión y mantén las credenciales de producción fuera de su alcance. Crewmark añade un horario y un tablero, para que veas cada cambio que hizo y por qué.",
      },
      {
        q: "¿Crewmark gasta tokens adicionales?",
        a: "No. Los empleados funcionan dentro de tu propio Claude Code con la suscripción que ya tienes, así que no hay una segunda factura de tokens.",
      },
    ],
  },
  cta: {
    title: "Haz de Claude Code tu primer empleado de IA",
    text: "Dale un rol, un objetivo, un horario y un latido, y asígnale su primera tarea.",
    button: "Acceso anticipado",
  },
  checked: "Comprobado con la documentación de Claude Code de Anthropic el 2 de noviembre de 2026.",
  disclaimer:
    "Crewmark es un producto independiente, sin relación con Anthropic y sin su respaldo. Claude y Claude Code son marcas de Anthropic.",
};
