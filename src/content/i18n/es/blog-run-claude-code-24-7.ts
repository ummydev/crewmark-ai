import type { GuideCopy } from "@/components/landing/guide-article";

// es translation of /blog/run-claude-code-24-7; the English master is src/content/blog/run-claude-code-24-7.ts.

const docs = "https://code.claude.com/docs/en/claude-code-on-the-web";

const overnight = `# Mantén un Mac despierto mientras Claude Code trabaja (puede volver a suspenderse cuando claude termine)
caffeinate -i claude --permission-mode auto

# O pasa la tarea a una sesión en la nube, que sigue ejecutándose con el portátil cerrado
claude --cloud "Execute the migration plan in docs/migration-plan.md"

# Pon en cola el siguiente paso en esa sesión en la nube desde cualquier máquina
claude -p "When that's done, update the changelog" --cloud <session-id>`;

export const copy: GuideCopy = {
  meta: {
    title: "¿Puede Claude Code funcionar 24/7? Ejecútalo de noche, sin supervisión",
    description:
      "Cómo mantener Claude Code trabajando toda la noche o a todas horas: modos de permisos, /goal, mantener la máquina despierta, sesiones en la nube, tareas programadas, límites de uso y qué lo detiene.",
  },
  breadcrumb: "Ejecutar Claude Code 24/7",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-08" },
  hero: {
    kicker: "Blog · Claude Code",
    title: "¿Puede Claude Code funcionar 24/7? Cómo ejecutarlo de noche y sin supervisión",
    lead: "Sí, con límites. Claude Code no tiene un reloj propio que lo detenga, pero hay cuatro cosas que sí lo hacen: la sesión termina o el ordenador se suspende, se para en una solicitud de permiso, alcanza el límite de uso de tu plan o termina y no tiene nada más que hacer. Cada una tiene solución. Esta guía repasa las formas de mantener Claude Code trabajando mientras duermes, lo que no puede hacer cada una y cómo darle un turno de noche fijo.",
    cta: "Empezar",
    secondary: "Ejecutarlo de noche",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "table",
      id: "compare",
      title: "Formas de mantener Claude Code en marcha",
      text: [
        "Algunas mantienen una misma conversación, así que Claude recuerda lo que hizo; otras inician una sesión nueva cada vez con el mismo prompt.",
      ],
      headers: ["Opción", "El ordenador puede estar apagado", "Misma conversación", "Cuándo se detiene", "Ideal para"],
      rows: [
        ["Sesión en la nube (`claude --cloud`, claude.ai/code)", "Sí", "Sí", "Se detiene tras un periodo de inactividad; la VM se recupera", "Una tarea larga que delegas antes de irte a dormir"],
        ["Tareas programadas en la nube (`/schedule`)", "Sí", "No, una sesión nueva en cada ejecución", "Como máximo cada hora; Pro, Max, Ultra, Team o Enterprise", "Trabajos repetitivos que solo necesitan un repositorio"],
        ["Tareas programadas en el escritorio", "No: app abierta, ordenador despierto", "No, una sesión nueva en cada ejecución", "Solo mientras la máquina está despierta", "Trabajos nocturnos sobre archivos locales"],
        ["`/loop`", "No: sesión abierta", "Sí", "Termina con la sesión; los bucles recurrentes caducan a los 7 días", "Vigilar la CI o un despliegue durante unas horas"],
        ["cron + `claude -p --resume`", "No", "Sí", "El ritmo de tu cron; lo montas tú", "Un agente que va recorriendo un archivo TODO"],
        ["Heartbeat de Crewmark", "No", "Sí", "El horario laboral que fijes, incluso pasada la medianoche", "Un trabajo permanente tomado de un tablero, issue a issue"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Cómo ejecutar Claude Code toda la noche",
      steps: [
        {
          title: "Elige un modo de permisos que no se pare en cada solicitud",
          text: "Una sesión esperando en una solicitud de permiso a las 2 de la madrugada no hace nada hasta la mañana. El modo auto ejecuta acciones con comprobaciones de seguridad en segundo plano en lugar de preguntar. Reserva `bypassPermissions`, que se salta todas las comprobaciones, para contenedores y VM aislados.",
          code: overnight,
        },
        {
          title: "Dale una meta",
          text: "`/goal` acepta una condición, como que pase una suite de tests; después de cada turno Claude la comprueba y empieza otro turno por su cuenta hasta que se cumple. Para una noche más larga, deja un archivo TODO o un plan escrito en el repositorio y dile que lo recorra en orden.",
        },
        {
          title: "Mantén la máquina despierta o lleva el trabajo a la nube",
          text: "Una sesión local necesita el ordenador encendido y el proceso claude en ejecución. En un Mac, `caffeinate -i` lo mantiene despierto mientras Claude Code trabaja; en un servidor, ejecuta claude dentro de tmux o screen para que sobreviva al cierre del terminal. Una sesión en la nube sigue ejecutándose después de cerrar el portátil.",
        },
        {
          title: "Planifica los límites de uso",
          text: "Los planes de Claude usan una ventana móvil de 5 horas más un límite semanal, compartidos con el chat. Max tiene 5 veces el uso de Pro; Ultra tiene 10 veces el de Pro por semana y, en cuentas verificadas, ningún límite de 5 horas. Si se alcanza el límite a mitad de tarea, Claude Code puede terminar el paso actual (una vez por semana en Pro, siempre en Max). Los créditos de uso o una clave de API le permiten seguir. Consulta [cómo reducir el consumo de tokens de Claude Code](/blog/reduce-claude-code-token-usage).",
        },
        {
          title: "Síguelo desde el móvil",
          text: "Remote Control te permite ver una sesión local desde la app de Claude o un navegador, y las sesiones en la nube aparecen en la pestaña Code de la app. Si Claude hizo una pregunta durante la noche, respóndela al despertarte y seguirá adelante. Consulta [Remote Control de Claude Code](/remote-claude-code).",
        },
      ],
      source: { label: "Fuente: documentación de Claude Code de Anthropic sobre sesiones en la nube", href: docs },
    },
    {
      kind: "text",
      id: "stops",
      title: "Qué detiene a Claude Code durante la noche",
      points: [
        "El terminal se cierra o el ordenador se suspende. Una sesión de Remote Control se reconecta cuando la máquina despierta, pero no se trabaja mientras está suspendida.",
        "Una solicitud de permiso que nadie responde. El modo auto evita la mayoría.",
        "El límite de uso. La sesión espera a que se reinicie la ventana, salvo que añadas créditos o una clave de API.",
        "La inactividad en la nube. Las sesiones en la nube se detienen tras un rato sin actividad, también mientras esperan a que apruebes una llamada a una herramienta MCP. Al reabrirla se recupera la conversación, pero no los comandos de shell, los subagentes ni un `/loop` que siguieran en marcha.",
        "Quedarse sin trabajo. Cuando se cumple el objetivo o la lista TODO queda vacía, se detiene, que es lo que quieres.",
        "Una sesión muy larga. Claude Code compacta el contexto automáticamente, así que los primeros detalles solo sobreviven como resumen. Guarda el plan en un archivo, no solo en el chat.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Con Crewmark",
      title: "Dale a Claude Code un turno de noche",
      text: [
        "Trabajar toda la noche es fácil de empezar y difícil de mantener: alguien tiene que poner en cola la siguiente tarea cada mañana. Crewmark convierte una conversación de Claude Code en un empleado de IA con horario laboral y un heartbeat, así que sigue tomando trabajo de un tablero por su cuenta.",
      ],
      steps: [
        {
          title: "Fija el horario laboral",
          text: "El horario laboral puede pasar de la medianoche, así que funciona un turno de noche como de 22:00 a 07:00, solo entre semana o todos los días. Fuera de su horario, el empleado duerme y no toca tu plan.",
        },
        {
          title: "Elige el heartbeat",
          text: "Durante su turno, la CLI de crewmark despierta la misma conversación cada 15, 30, 60, 120 o 240 minutos para que tome la siguiente issue. Si la conversación estaba cerrada, Crewmark la reanuda con `claude -p --resume` en modo auto. Tu ordenador tiene que seguir encendido.",
        },
        {
          title: "Lee el tablero por la mañana",
          text: "Cada issue tiene sus comentarios y su registro de actividad, y lo que te necesita llega como un mensaje al que el empleado espera respuesta. Consulta [cómo hacer que Claude Code sea proactivo](/proactive-claude-code) y [qué es un empleado de IA](/ai-employees); para Codex, lee [tareas de larga duración en Codex](/blog/codex-long-running-tasks).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Ejecutar Claude Code toda la noche" },
  mid: {
    title: "¿Quieres que Claude Code haga el turno de noche todas las noches?",
    text: "Crewmark despierta a tu Claude Code con un heartbeat durante el horario que fijes y le da la siguiente issue de un tablero.",
    button: "Empezar",
  },
  faq: {
    title: "Preguntas frecuentes sobre ejecutar Claude Code 24/7",
    items: [
      {
        q: "¿Puede Claude Code funcionar 24/7?",
        a: "Sí, siempre que algo lo mantenga en marcha: una sesión en la nube o una tarea programada en la nube con el ordenador apagado, o una sesión local en una máquina que no se suspenda, con un modo de permisos que no se pare en cada solicitud. Los límites de uso siguen aplicándose, así que el trabajo a todas horas necesita un plan con margen, o créditos.",
      },
      {
        q: "¿Puedo dejar Claude Code funcionando toda la noche?",
        a: "Sí. Inícialo en modo auto con un objetivo claro o un archivo TODO, mantén la máquina despierta (o usa `claude --cloud`) y revisa el resultado por la mañana. Lo que te necesite estará esperando como una pregunta.",
      },
      {
        q: "¿Claude Code sigue funcionando cuando cierro el portátil?",
        a: "Una sesión local no: necesita el ordenador encendido y el proceso claude en ejecución, y una sesión de Remote Control termina cuando se cierra su terminal. Una sesión en la nube sí sigue funcionando, y puedes revisarla desde la app de Claude.",
      },
      {
        q: "¿Hay un modo sin supervisión en Claude Code?",
        a: "No con ese nombre. Las ejecuciones sin supervisión combinan un modo de permisos que no pregunta (el modo auto, o `bypassPermissions` en un contenedor aislado) con el modo headless, `claude -p`, o una sesión en la nube.",
      },
      {
        q: "¿Ejecutar Claude Code toda la noche agotará mi límite de uso?",
        a: "Puede. Todos los planes de Claude comparten una ventana de 5 horas y un límite semanal entre el chat y Claude Code; Ultra elimina el límite de 5 horas en cuentas verificadas. Reparte el trabajo entre ventanas con un heartbeat o una programación en lugar de una sola ráfaga larga.",
      },
      {
        q: "¿Es seguro dejar Claude Code funcionando sin supervisión?",
        a: "Usa el modo auto en lugar de `bypassPermissions` en tu propia máquina, trabaja en un repositorio donde cada cambio pase por revisión y mantén fuera de su alcance las credenciales de producción. Las sesiones en la nube se ejecutan en VM aisladas con acceso a la red limitado por defecto.",
      },
    ],
  },
  cta: {
    title: "Dale a Claude Code un turno de noche.",
    text: "Crewmark convierte las sesiones de Claude Code y Codex en empleados de IA con roles, objetivos, horario laboral y un heartbeat.",
    button: "Empezar",
  },
  checked: "Verificado con la documentación de Claude Code (sesiones en la nube, tareas programadas, Remote Control) el 8 de noviembre de 2026.",
  disclaimer:
    "Crewmark es un producto independiente, no afiliado ni respaldado por Anthropic. Claude y Claude Code son marcas comerciales de Anthropic.",
};
