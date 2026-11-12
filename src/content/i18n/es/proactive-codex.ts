import type { GuideCopy } from "@/components/landing/guide-article";

// es translation of /proactive-codex; the English master is src/content/proactive-codex.ts.
export const copy: GuideCopy = {
  meta: {
    title: "Codex proactivo: tareas programadas y cron | Crewmark",
    description:
      "Haz que Codex y ChatGPT actúen sin esperarte: tareas programadas (antes Automations), codex exec con cron, la GitHub Action y un latido para trabajo fijo.",
  },
  breadcrumb: "Codex proactivo",
  hero: {
    kicker: "Codex proactivo",
    title: "Cómo hacer que Codex sea proactivo",
    lead: "Un agente de Codex proactivo no se queda esperando en un chat. Gestiona él mismo las aprobaciones rutinarias, se ejecuta según un horario, reacciona a una pull request o a un mensaje de Slack e informa de lo que ha hecho. OpenAI ofrece una pieza para cada una de estas cosas, y ChatGPT comparte algunas. Esta guía muestra cómo configurarlas, qué no puede hacer cada una y cómo darle a Codex un trabajo fijo en lugar de un prompt puntual. Lo que ninguna te da es un latido (heartbeat): despertar la misma conversación a un ritmo fijo para que tome su siguiente tarea. Explicamos la opción integrada que más se acerca y cómo lo añade Crewmark.",
    cta: "Acceso anticipado",
    secondary: "Ir a los pasos",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "Qué significa “proactivo” en Codex",
      text: [
        "De serie, Codex responde cuando le preguntas. Una configuración proactiva necesita tres cosas, y están en partes distintas del producto:",
      ],
      points: [
        "No se detiene en cada aprobación: un modo de permisos que deja pasar las acciones rutinarias.",
        "Empieza por su cuenta: una tarea programada, un disparador de eventos o un trabajo de cron que inicia el trabajo sin ti.",
        "Sabe qué hacer a continuación: una lista de pendientes y un objetivo, para que cada ejecución tenga trabajo útil.",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Paso a paso: cómo hacer que Codex sea proactivo",
      steps: [
        {
          title: "Elige un modo de permisos que no se detenga por todo",
          text: "En la CLI, escribe `/permissions`. “Approve for me” solo pregunta por las acciones detectadas como potencialmente inseguras, lo que encaja con el trabajo que no estás vigilando. “Full access” quita los límites sobre archivos e internet; resérvalo para máquinas aisladas. Si una guía antigua te dice que uses `--full-auto`, ese flag ya no es compatible: usa `--sandbox workspace-write` en su lugar.",
          code: "/permissions",
        },
        {
          title: "Crea una tarea programada (antes Automations)",
          text: "Lo que antes se llamaba Codex Automations ahora son las tareas programadas (Scheduled tasks). Pide una en un chat de Codex: di cuál es el trabajo, cuándo debe ejecutarse y si los resultados vuelven al mismo chat. Las tareas pueden ejecutarse cada pocos minutos, a diario o cada semana, y se gestionan en la vista Scheduled de la barra lateral. Una tarea que trabaja con archivos locales necesita el ordenador encendido y la app abierta; en un repositorio Git puede trabajar en un worktree aparte en segundo plano. La CLI de Codex no gestiona tareas programadas.",
          code: "Every weekday at 9am, check this repo for failing tests,\nfix what you can in a background worktree,\nand post a summary in this chat.",
        },
        {
          title: "Inicia tareas a partir de eventos",
          text: "En lugar de a una hora, una tarea puede empezar cuando ocurre algo: un nuevo mensaje de Gmail, un mensaje de Slack en los canales que elijas o actividad en una pull request de GitHub. Los disparadores de eventos se configuran desde ChatGPT en la web o el móvil, en los planes que lo permiten, y una tarea usa eventos o un horario, no ambos.",
        },
        {
          title: "Ejecuta Codex desde cron con codex exec",
          text: "`codex exec` ejecuta Codex sin la interfaz interactiva: el progreso va a stderr y solo el mensaje final a stdout, así que encaja en scripts y trabajos programados. Es de solo lectura salvo que pases `--sandbox workspace-write`. La documentación de OpenAI menciona los trabajos programados como uso, pero no da un ejemplo de cron; este es nuestro.",
          code: '# crontab -e: cada día laborable a las 9:00\n0 9 * * 1-5  cd ~/my-app && codex exec --sandbox workspace-write "Fix any failing tests and summarize what you changed" >> ~/codex-cron.log 2>&1',
        },
        {
          title: "Integra Codex en tu flujo de GitHub",
          text: "La GitHub Action `openai/codex-action` ejecuta Codex dentro de un workflow, y tú eliges sus disparadores. En las pull requests, comenta `@codex review` para pedir una revisión, o pide a `@codex` que arregle los fallos de CI. En Linear puedes asignar una tarea a Codex.",
          code: "# .github/workflows/codex.yml\nsteps:\n  - uses: openai/codex-action@v1\n    with:\n      prompt-file: .github/codex/prompts/review.md\n      openai-api-key: ${{ secrets.OPENAI_API_KEY }}",
        },
        {
          title: "Usa hooks para reaccionar dentro de una sesión",
          text: "Los hooks de Codex ejecutan tus comandos en momentos como el inicio de la sesión, antes y después de una llamada a una herramienta o cuando se detiene un turno. Reaccionan mientras Codex trabaja; no lo ponen en marcha. Para iniciar el trabajo, usa una tarea programada o un disparador de eventos.",
        },
      ],
      source: {
        label: "Fuente: documentación de Codex de OpenAI sobre tareas programadas",
        href: "https://learn.chatgpt.com/docs/automations",
      },
    },
    {
      kind: "steps",
      id: "heartbeat",
      kicker: "La pieza que falta",
      title: "Añade un latido: despierta la misma conversación para su siguiente tarea",
      text: [
        "Un latido es un aviso breve y regular a la misma conversación de Codex, por ejemplo cada 30 minutos durante el horario laboral, que dice: revisa tu trabajo y toma la siguiente tarea. Una tarea programada repite un prompt; un latido mantiene viva una única conversación, así que Codex recuerda lo que hizo la última vez y toma el siguiente elemento de una cola. Esa es la diferencia entre un trabajo que se repite y un empleado que sigue trabajando.",
      ],
      steps: [
        {
          title: "La opción integrada que más se acerca",
          text: "Una tarea programada de Codex puede devolver sus resultados al mismo chat, así que puedes escribir su prompt como un latido: “cada 30 minutos, revisa TODO.md, toma la siguiente tarea sin marcar y márcala como hecha”. Aun así, tienes que mantener tú el archivo de la cola, y el horario no sabe nada del horario laboral ni de otros agentes.",
        },
        {
          title: "Con Crewmark: un latido integrado",
          text: "El daemon de Crewmark pone en cola el latido en la propia conversación de Codex del empleado con `codex queue --resume` cada 15, 30 o 60 minutos durante su horario, y el tablero es la cola: en cada latido, el empleado toma su siguiente tarea e informa sobre ella. Los detalles están [más abajo](#crewmark).",
        },
      ],
    },
    {
      kind: "text",
      id: "chatgpt",
      title: "¿Y ChatGPT?",
      text: [
        "ChatGPT también puede escribirte primero. Las tareas programadas de ChatGPT te envían recordatorios, resúmenes periódicos y los resultados de lo que vigila, y las encontrarás en la página Scheduled de la barra lateral. Cuántas puedes tener y con qué frecuencia se ejecutan depende de tu plan. ChatGPT Pulse, que enviaba una actualización diaria proactiva, se retiró en junio de 2026; OpenAI recomienda usar en su lugar una tarea programada para el resumen diario.",
        "La diferencia con Codex: una tarea de ChatGPT trabaja con lo que ChatGPT tiene a su alcance, no con tu código. Para trabajar en un repositorio, usa las tareas programadas de Codex o `codex exec`.",
      ],
    },
    {
      kind: "table",
      title: "Qué opción encaja",
      headers: ["Opción", "Empieza a trabajar solo", "El ordenador tiene que estar encendido", "Ideal para"],
      rows: [
        ["Approve for me", "No, se detiene menos una vez que se lo pides", "Sí", "Menos interrupciones durante una tarea"],
        ["Tarea programada con archivos locales", "Sí, según un horario", "Sí, con la app abierta", "Trabajo diario en un repositorio"],
        ["Tarea programada en la web", "Sí, según un horario", "No", "Trabajo que no necesita tus archivos"],
        ["Tarea activada por eventos", "Sí, con actividad en Gmail, Slack o GitHub", "No", "Reaccionar a mensajes y PR"],
        ["codex exec + cron", "Sí, según tu horario de cron", "Sí", "Scripts que controlas de principio a fin"],
        ["GitHub Action de Codex", "Sí, con los disparadores del workflow", "No", "Revisiones y arreglos de CI"],
        ["Tarea programada de ChatGPT", "Sí, según un horario", "No", "Recordatorios y resúmenes"],
        ["Tarea programada como latido", "Sí, según un horario, con resultados en el mismo chat", "Sí, para archivos locales", "Un agente que va completando un archivo TODO"],
        ["Latido de Crewmark", "Sí, cada 15–60 min en horario laboral, en la misma conversación", "Sí", "Agentes con pendientes, objetivos y horario"],
      ],
    },
    {
      kind: "text",
      title: "Lo que estas funciones siguen dejándote a ti",
      text: ["Todas las opciones anteriores inician una ejecución. Ninguna decide en qué debería estar trabajando Codex esta semana:"],
      points: [
        "Una tarea programada repite un prompt. No toma el siguiente elemento de una lista de pendientes ni sabe qué dejó sin terminar la última ejecución.",
        "No hay un tablero compartido donde darle trabajo a Codex y ver qué está en curso, hecho o bloqueado.",
        "No hay horario laboral ni metas, así que no puedes pedirle que mueva una cifra antes de fin de mes.",
        "Usar Codex junto a Claude Code supone dos conjuntos separados de prompts, horarios y sitios donde mirar.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Con Crewmark",
      title: "Dale a Codex un trabajo fijo",
      text: [
        "Crewmark convierte una conversación de Codex en un empleado de IA con un rol, un objetivo, un horario y un latido, y le da trabajo a través del mismo tablero que tus empleados de Claude Code. Funciona en tu Codex real, con el plan de ChatGPT que ya pagas.",
      ],
      steps: [
        {
          title: "Contrata un empleado y conecta su conversación de Codex",
          text: "Elige un rol y ejecuta en Codex el comando de configuración que te da Crewmark. Esa conversación se convierte en el empleado, así que recuerda el trabajo entre un despertar y otro.",
        },
        {
          title: "Define un horario y un latido",
          text: "El daemon de Crewmark, un pequeño programa en segundo plano en tu ordenador, pone en cola el prompt de latido del empleado en esa conversación con `codex queue --resume` cada 15, 30 o 60 minutos durante su horario, y lo deja tranquilo fuera de él.",
        },
        {
          title: "Asigna tareas en el tablero",
          text: "Al asignar una tarea o comentarla, el aviso llega a esa misma conversación, así que Codex recoge el trabajo nuevo por su cuenta en lugar de esperar a que tú se lo pegues.",
        },
        {
          title: "Mídelo con una cifra",
          text: "Dale a cada empleado un KPI. Planifica sus tareas para mover esa cifra, las mueve por el tablero, comenta su progreso y te escribe cuando necesita una decisión.",
        },
      ],
    },
    {
      kind: "text",
      title: "Úsalos juntos",
      text: [
        "Deja las tareas programadas de Codex para pequeñas tareas recurrentes y usa Crewmark para el trabajo continuo: pon la conversación del empleado en “Approve for me” para que cada latido haga trabajo de verdad, y deja que las revisiones de pull requests sigan pasando por `@codex review`. ¿Usas Claude Code? Consulta [cómo hacer que Claude Code sea proactivo](/proactive-claude-code).",
      ],
    },
  ],
  howTo: { section: "how-to", name: "Cómo hacer que Codex sea proactivo" },
  mid: {
    title: "Dale a Codex un trabajo fijo, no un prompt programado",
    text: "Crewmark despierta tu conversación de Codex con un latido durante el horario laboral y le pasa la siguiente tarea de un tablero.",
    button: "Acceso anticipado",
  },
  faq: {
    title: "Preguntas frecuentes",
    items: [
      {
        q: "¿Qué es un latido (heartbeat) para Codex?",
        a: "Un aviso regular a la misma conversación de Codex, por ejemplo cada 30 minutos durante el horario laboral, que le dice que revise su trabajo y tome la siguiente tarea. Como continúa una única conversación, Codex recuerda el trabajo anterior. Lo que más se acerca es una tarea programada que devuelve los resultados al mismo chat; Crewmark trae el latido integrado, con horario laboral y un tablero como cola.",
      },
      {
        q: "¿Qué pasó con Codex Automations?",
        a: "Ahora se llaman tareas programadas (Scheduled tasks). Se crean pidiéndolas en un chat de Codex y se gestionan en la vista Scheduled de la app; la página de la documentación sigue en una URL que termina en /automations.",
      },
      {
        q: "¿Sigue funcionando codex --full-auto?",
        a: "No, `--full-auto` ya no es compatible. Usa `--sandbox workspace-write` para que Codex pueda editar archivos, o el modo de permisos “Approve for me” para que solo pregunte por las acciones que parecen inseguras.",
      },
      {
        q: "¿Cómo ejecuto Codex según un horario o con cron?",
        a: "En la app de Codex, pide una tarea programada. Desde tu propio programador, llama a `codex exec` desde un trabajo de cron y pasa `--sandbox workspace-write` si necesita cambiar archivos. En un repositorio también puedes ejecutar la GitHub Action de Codex desde un workflow.",
      },
      {
        q: "¿Puede ChatGPT escribirme de forma proactiva?",
        a: "Sí, mediante tareas programadas y tareas activadas por eventos. ChatGPT Pulse, la actualización diaria proactiva, se retiró en junio de 2026, y OpenAI sugiere en su lugar una tarea programada para el resumen diario.",
      },
      {
        q: "¿Codex sigue trabajando con mi ordenador apagado?",
        a: "Las tareas programadas en la web, los disparadores de eventos, las tareas de Codex en la nube y la GitHub Action, sí. Todo lo que trabaja con tus archivos locales, incluidas las tareas programadas locales, los trabajos de cron y Crewmark, necesita tu ordenador encendido.",
      },
      {
        q: "¿Crewmark gasta tokens adicionales?",
        a: "No. Los empleados funcionan dentro de tu propio Codex con el plan de ChatGPT que ya tienes, así que no hay una segunda factura de tokens.",
      },
    ],
  },
  cta: {
    title: "Haz de Codex tu primer empleado de IA",
    text: "Dale un rol, un objetivo, un horario y un latido, y asígnale su primera tarea.",
    button: "Acceso anticipado",
  },
  checked: "Comprobado con la documentación de Codex de OpenAI el 2 de noviembre de 2026.",
  disclaimer:
    "Crewmark es un producto independiente, sin relación con OpenAI y sin su respaldo. Codex y ChatGPT son marcas de OpenAI.",
};
