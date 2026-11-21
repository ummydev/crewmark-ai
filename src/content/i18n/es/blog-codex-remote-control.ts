import type { GuideCopy } from "@/components/landing/guide-article";

// es translation of /blog/codex-remote-control; the English master is src/content/blog/codex-remote-control.ts.

const docs = "https://learn.chatgpt.com/docs/remote-connections";

const ssh = `# ~/.ssh/config en el ordenador que ejecuta la app de escritorio de ChatGPT
Host devbox
  HostName devbox.example.com
  User me

# Comprueba que funciona y luego inicia sesión en Codex en el host remoto
ssh devbox
codex   # debe estar en el PATH del shell de inicio del usuario remoto`;

export const copy: GuideCopy = {
  meta: {
    title: "Control remoto de Codex en ChatGPT: usa Codex desde tu móvil",
    description:
      "Controla Codex en tu Mac o PC con Windows desde la app de ChatGPT: configuración con código QR, hosts SSH, acceso 24/7 y soluciones si el control remoto falla.",
  },
  breadcrumb: "Control remoto de Codex",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-08" },
  hero: {
    kicker: "Blog · Codex",
    title: "Control remoto de Codex: usa el Codex de tu ordenador desde el móvil",
    lead: "Las conexiones remotas te permiten trabajar con chats de Codex que se ejecutan en tu Mac o PC con Windows desde la app de ChatGPT en el móvil. Tu repositorio, tus archivos, tus credenciales y tus herramientas se quedan en el ordenador; el móvil envía prompts y aprobaciones y te muestra los resultados. Esta guía explica cómo configurarlo, qué puedes hacer desde el móvil, qué necesita el ordenador, cómo arreglarlo cuando no funciona y cómo se compara con las tareas en la nube y con un empleado de IA que trabaja por su cuenta.",
    cta: "Empezar",
    secondary: "Configurarlo",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "Qué es el control remoto de Codex",
      text: [
        "OpenAI lo llama conexiones remotas (remote connections). Un ordenador que ejecuta la app de escritorio de ChatGPT pasa a ser un host; tu móvil, u otro escritorio, lo controla. La sesión usa los proyectos, chats, archivos, credenciales, permisos, plugins y herramientas locales del host, así que Codex funciona exactamente igual que si estuvieras sentado delante.",
      ],
      points: [
        "Hosts: la app de escritorio de ChatGPT en macOS y Windows. La documentación de OpenAI no incluye Linux como host.",
        "Móviles: la app de ChatGPT en iOS y Android, actualizada. Abre Codex en la app (en versiones antiguas se llama Remote).",
        "La conexión pasa por un relay seguro, así que el ordenador no necesita estar expuesto a internet.",
        "La configuración se hace en la app de escritorio; OpenAI indica que el acceso desde el móvil no se puede configurar desde la Codex CLI ni desde la extensión del IDE.",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Cómo configurar el control remoto de Codex",
      steps: [
        {
          title: "Actívalo en la app de escritorio",
          text: "En el ordenador, abre la app de escritorio de ChatGPT y ve a Settings > Connections > Control this Mac or PC. Selecciona Set up o Add, aprueba el acceso remoto y completa la verificación que te pida. La app muestra un código QR. En el mismo sitio puedes elegir mantener el ordenador despierto.",
        },
        {
          title: "Vincula tu móvil",
          text: "Escanea el código QR con el móvil; se abre ChatGPT. Confirma que es la misma cuenta y el mismo workspace, y completa el paso de MFA, SSO o passkey si lo hay. El ordenador aparece entonces en Codex. Un código QR vincula un móvil con un ordenador, así que vincula cada combinación que quieras.",
        },
        {
          title: "Trabaja desde el móvil",
          text: "Inicia un chat nuevo en uno de los proyectos del ordenador o abre uno existente. Envía mensajes de seguimiento, responde a las preguntas de Codex, aprueba comandos y revisa diffs, resultados de tests, salida del terminal y capturas de pantalla. Recibes una notificación cuando una tarea termina o te necesita.",
        },
        {
          title: "Opcional: controla una máquina remota por SSH",
          text: "La app de escritorio también puede abrir proyectos en un host SSH. Añade una entrada Host a ~/.ssh/config, comprueba que `ssh <alias>` funciona, instala Codex en ese host e inicia sesión, y luego añade el host en Settings > Connections y elige una carpeta de proyecto.",
          code: ssh,
        },
      ],
      source: { label: "Fuente: documentación de OpenAI sobre conexiones remotas", href: docs },
    },
    {
      kind: "text",
      id: "requirements",
      title: "Qué necesita el ordenador",
      points: [
        "Tiene que estar despierto, conectado, con sesión iniciada en la misma cuenta y workspace, y con la app de escritorio de ChatGPT abierta. La suspensión corta el acceso.",
        "Un portátil Mac sigue accesible con la tapa abierta y conectado a la corriente; con la tapa cerrada, necesita una pantalla externa.",
        "En Windows, mantén la sesión desbloqueada si Codex usa Computer Use, que se ejecuta en primer plano.",
        "Fuera de tu red, usa una VPN o una herramienta de red mesh en lugar de exponer el ordenador a internet.",
        "Puede que el administrador de tu workspace tenga que activar el acceso a Remote Control.",
        "No puedes pasar un chat a un entorno de Codex en la nube; para eso, inicia una tarea en la nube.",
      ],
    },
    {
      kind: "text",
      id: "windows-linux",
      title: "Control remoto en Windows y Linux",
      text: [
        "Los pasos de arriba son iguales en un Mac y en un PC con Windows, porque los dos pueden ser hosts. La diferencia está en Linux.",
      ],
      points: [
        "Windows: instala la app de escritorio de ChatGPT y activa Settings > Connections > Control this Mac or PC como se explica arriba. Si Codex usa Computer Use, trabaja en el escritorio activo: mueve el puntero, escribe y se pone en primer plano, y no puede ejecutarse en segundo plano. Mantén la sesión de Windows desbloqueada y conectada mientras trabaja, y usa el móvil para iniciar y revisar el trabajo mientras le cedes la pantalla del PC. La documentación de OpenAI también sugiere ejecutar la app de escritorio en una máquina virtual de Windows, para que Computer Use tome el control de la VM en lugar de tu escritorio. Más en [Codex en Windows](/blog/codex-windows).",
        "El uso con el ordenador bloqueado (locked use), que permite que una tarea de Computer Use iniciada desde el móvil siga ejecutándose después de que el ordenador se bloquee, es solo para macOS.",
        "Linux: OpenAI solo incluye macOS y Windows como hosts, así que controlar un ordenador Linux desde el móvil no está documentado, aunque ya hay una app de escritorio de ChatGPT para Linux en vista previa. Lo que sí funciona es una máquina Linux como host SSH: la app de escritorio en un Mac o PC con Windows abre proyectos en ella, y tu móvil controla ese Mac o PC. Más en [Codex en Linux](/blog/codex-linux) y [Codex en un VPS](/blog/codex-vps).",
      ],
    },
    {
      kind: "text",
      id: "troubleshooting",
      title: "¿El control remoto de Codex no funciona?",
      points: [
        "El ordenador no aparece en el móvil: comprueba que la app de escritorio está abierta, que “Allow other devices to connect” está activado, que ambas apps usan la misma cuenta y el mismo workspace y que las dos están actualizadas. Las vinculaciones sin usar desde el 8 de junio de 2026 hay que hacerlas de nuevo.",
        "Remote Control se desactivó al volver a iniciar sesión: cerrar sesión lo desactiva pero conserva la vinculación. Vuelve a activar Remote Control.",
        "Un error tras seleccionar Add: reinicia la app de escritorio en el ordenador y vuelve a intentarlo.",
        "No llega ninguna solicitud de aprobación: abre Codex en la app, confirma la cuenta y el workspace, vuelve a escanear el código QR y pide a tu administrador que confirme el acceso a Remote Control.",
        "Se desconecta una y otra vez: el ordenador se suspendió, perdió la red o cerró la app. Mantenlo despierto y conectado.",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "¿Control remoto, tareas en la nube o un empleado de IA?",
      text: [
        "El control remoto es una ventana al Codex de tu ordenador: espera a que le digas qué hacer a continuación. Los otros dos siguen trabajando sin ti.",
      ],
      headers: ["", "Quién inicia el trabajo", "Dónde se ejecuta", "¿Ordenador encendido?", "Ideal para"],
      rows: [
        ["Control remoto", "Tú, desde el móvil", "Tu Mac o PC con Windows", "Sí, despierto y conectado", "Dirigir el trabajo local cuando no estás en tu mesa"],
        ["Tarea de Codex Cloud", "Tú, una vez", "La nube de OpenAI", "No", "Delegar una tarea que solo necesita un repositorio"],
        ["Empleado de IA de Crewmark", "Un heartbeat, durante el horario laboral", "Tu ordenador, en tu propio Codex", "Sí", "Un trabajo permanente: la siguiente issue de un tablero, en cada turno"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Con Crewmark",
      title: "Echa un vistazo desde el móvil y deja que trabaje solo",
      text: [
        "Con el control remoto sigues decidiendo cada paso. Crewmark convierte tu Codex en un empleado de IA con un rol, un objetivo, horario laboral y un heartbeat: se despierta según un horario, toma la siguiente issue de un tablero y te escribe cuando necesita una decisión. El control remoto pasa a ser la forma de echar un vistazo desde el móvil.",
      ],
      steps: [
        {
          title: "Contrata a un empleado sobre tu Codex",
          text: "Ejecuta el comando de configuración en un chat de Codex; ese chat se convierte en el empleado y conserva su memoria entre despertares. Consulta [qué es un empleado de IA](/ai-employees).",
        },
        {
          title: "Dale horario laboral y un heartbeat",
          text: "Durante su turno, la CLI de crewmark pone en cola un mensaje en el mismo chat de Codex cada 15 a 240 minutos para que tome su siguiente issue. Consulta [tareas de larga duración en Codex](/blog/codex-long-running-tasks).",
        },
        {
          title: "Míralo desde el móvil cuando quieras",
          text: "Abre el chat del empleado desde Codex en la app de ChatGPT para verlo o dirigirlo, o simplemente responde a sus mensajes. Para la versión de Claude Code, consulta [Remote Control de Claude Code](/remote-claude-code).",
        },
      ],
    },
    {
      kind: "steps",
      id: "what-crewmark-adds",
      kicker: "Con Crewmark",
      title: "Lo que añade Crewmark",
      text: [
        "El control remoto te permite llegar a Codex desde cualquier sitio, pero Codex sigue trabajando solo cuando se lo pides. Crewmark convierte el Codex de tu ordenador en un empleado de IA con su propio trabajo y te da un tablero en crewmark.ai para seguirlo desde el móvil.",
      ],
      steps: [
        {
          title: "Un rol y un objetivo numérico",
          text: "Cada empleado es un chat de Codex en tu ordenador con un rol, como ingeniero de software o especialista SEO, además de KPI y proyectos. Los vuelve a leer con `crewmark me`, así que cada despertar empieza desde su trabajo y no desde un prompt en blanco. Consulta los [roles de empleados de IA](/ai-employees).",
        },
        {
          title: "Horario laboral y un heartbeat",
          text: "Elige su horario, solo entre semana o todos los días, en tu zona horaria; puede pasar de la medianoche. Durante ese horario, la CLI `crewmark` despierta el mismo chat de Codex a intervalos de entre 15 minutos y 24 horas, así que retoma el trabajo donde lo dejó.",
        },
        {
          title: "Sigue trabajando a través de issues",
          text: "Cada vez que se despierta, toma las issues que tiene asignadas en el tablero, trabaja en ellas y mantiene su estado al día. Cuando necesita una revisión, un permiso o información, pone la issue en Needs action y te pregunta allí.",
        },
        {
          title: "Háblale desde el móvil",
          text: "Abre crewmark.ai en el navegador del móvil y escribe al empleado en su registro de trabajo. El mensaje llega a su chat de Codex en tu ordenador, y responde allí.",
        },
        {
          title: "Un equipo en un solo tablero",
          text: "Contrata más empleados con roles distintos. Comparten un tablero, se asignan issues, comentan y se @mencionan entre sí, y cada una de esas acciones despierta al empleado al que afecta. Para la programación de tareas que trae Codex y en qué se diferencia de un heartbeat, consulta [Codex proactivo](/proactive-codex).",
        },
      ],
    },
    {
      kind: "table",
      id: "vs-chatgpt-app",
      title: "El control remoto de la app de ChatGPT vs Crewmark",
      text: [
        "La app de ChatGPT ya cubre mucho desde el móvil: puedes iniciar chats nuevos en los proyectos de tu ordenador, continuar los antiguos, responder preguntas, aprobar comandos, revisar diffs y resultados de tests, y recibir una notificación cuando una tarea termina o te necesita. Crewmark es para el trabajo que debe seguir adelante cuando no eres tú quien lo inicia.",
      ],
      headers: ["", "Control remoto de la app de ChatGPT", "Crewmark"],
      rows: [
        ["Qué es", "La app de ChatGPT en tu móvil controlando chats de Codex en tu Mac o PC con Windows", "Un equipo de empleados de IA, cada uno un chat de Codex o Claude Code en tu ordenador, con un tablero en crewmark.ai"],
        ["Quién inicia el trabajo", "Tú: inicias un chat o envías un mensaje de seguimiento desde el móvil", "Un heartbeat durante el horario laboral, o una issue que alguien asigna"],
        ["Desde el móvil", "Iniciar y continuar chats, aprobar acciones, revisar diffs, resultados de tests y capturas de pantalla, recibir notificaciones", "Escribir a un empleado en su registro de trabajo, crear y asignar issues, responder cuando una issue necesita tu intervención"],
        ["Cuando dejas de responder", "Codex termina la tarea, te avisa y espera tu siguiente prompt", "El empleado pasa a su siguiente issue y pregunta en la issue cuando se bloquea"],
        ["Seguimiento", "Chats en los proyectos del host", "Un tablero de issues con estados, prioridades, comentarios y KPI"],
        ["Un equipo de agentes", "Cambias tú entre hosts y chats", "Varios empleados con roles distintos en un mismo tablero, que se asignan issues y se @mencionan entre sí"],
        ["Objetivo y horario", "Ninguno más allá del chat", "Un objetivo numérico y un horario laboral para cada empleado"],
        ["Funciona con", "Tu Mac o PC con Windows, con tu plan de ChatGPT", "Tu ordenador, en tu propio Codex o Claude Code, con el plan que ya pagas"],
        ["Creado por", "OpenAI", "Crewmark (sin relación con OpenAI)"],
      ],
    },
    {
      kind: "text",
      id: "always-on",
      title: "Llega a Codex 24/7, desde cualquier sitio",
      text: [
        "El control remoto solo llega a un host que está despierto, conectado, con la sesión iniciada y con la app de escritorio de ChatGPT abierta. Si se suspende, pierde la red o la app se cierra, el móvil no puede llegar a él hasta que vuelva, y elegir Sleep tú mismo también corta el acceso. Para trabajo de larga duración, OpenAI sugiere un Mac o PC con Windows dedicado y siempre encendido, con tus proyectos, credenciales y herramientas instalados. Dos configuraciones te dan uno, y Codex cloud es una tercera opción:",
      ],
      points: [
        "Un Mac mini en casa como host. Evita que se suspenda, ejecuta la app de escritorio de ChatGPT con el control remoto activado y vincula tu móvil con él. Como es un Mac, también puede ejecutar Computer Use y tareas en el navegador a través de la extensión de Chrome, y con el uso con el ordenador bloqueado (locked use) una tarea de Computer Use puede seguir después de que se bloquee. Consulta [cómo configurar Codex en un Mac mini](/blog/codex-mac-mini).",
        "Un servidor Linux como host SSH. Instala la Codex CLI en el servidor e inicia sesión, y luego añádelo en Settings > Connections en la app de escritorio; los chats en sus proyectos ejecutan comandos y cambian archivos en el servidor. Tu móvil sigue conectándose al Mac o PC con Windows que ejecuta la app de escritorio, no al servidor, así que ese ordenador también tiene que seguir encendido. Un Mac mini en casa puede ser ese host. Consulta [cómo ejecutar Codex en un VPS](/blog/codex-vps).",
        "Codex cloud. En la app de ChatGPT, abre Codex y elige Cloud y un entorno. La tarea se ejecuta en la nube de OpenAI y sigue trabajando mientras tu ordenador está suspendido, pero solo ve lo que hay en su entorno en la nube: tus archivos locales, los procesos en ejecución, las sesiones iniciadas en el navegador y el acceso por VPN no están ahí. Tampoco se le puede pasar un chat de tu ordenador.",
        "Los empleados de Crewmark también se ejecutan en tu propio ordenador, así que se aplica la misma regla. En un Mac mini o un servidor siempre encendido, su horario laboral puede abarcar todos los días y pasar de la medianoche.",
      ],
    },
  ],
  howTo: { section: "how-to", name: "Configurar el control remoto de Codex" },
  mid: {
    title: "¿Quieres que Codex siga trabajando cuando no lo estás dirigiendo?",
    text: "Crewmark despierta a tu Codex con un heartbeat durante el horario laboral y le da la siguiente issue de un tablero.",
    button: "Empezar",
  },
  faq: {
    title: "Preguntas frecuentes sobre el control remoto de Codex",
    items: [
      {
        q: "¿Qué es el control remoto de ChatGPT?",
        a: "Es como mucha gente llama a las conexiones remotas de OpenAI: la app de ChatGPT en tu móvil, u otro Mac o PC con Windows, controla chats de Codex que se ejecutan en la app de escritorio de ChatGPT de un ordenador host. El host hace el trabajo; el móvil envía prompts y aprobaciones.",
      },
      {
        q: "¿Cómo activo el control remoto en ChatGPT?",
        a: "En el ordenador host, abre la app de escritorio de ChatGPT, ve a Settings > Connections > Control this Mac or PC y selecciona Set up o Add; luego escanea el código QR con la app de ChatGPT en el móvil. El host tiene que ser un Mac o PC con Windows que se mantenga despierto.",
      },
      {
        q: "¿Puedo controlar Codex desde el móvil?",
        a: "Sí. Activa Settings > Connections > Control this Mac or PC en la app de escritorio de ChatGPT, escanea el código QR con el móvil y el ordenador aparecerá en Codex en la app de ChatGPT, en iOS o Android.",
      },
      {
        q: "¿Puedo controlar en remoto la Codex CLI?",
        a: "El acceso desde el móvil solo se configura en la app de escritorio de ChatGPT; OpenAI indica que no se puede configurar desde la CLI ni desde la extensión del IDE. La CLI sí tiene un comando experimental `codex remote-control` (start, stop, pair), que OpenAI describe para clientes de control remoto gestionados y flujos de trabajo por SSH, pero la documentación no describe cómo vincular un móvil con una máquina que solo tiene la CLI. Para llegar a una máquina en la que trabajas por terminal, añádela como host SSH en la app de escritorio, con Codex instalado y la sesión iniciada allí.",
      },
      {
        q: "¿Funciona el control remoto de Codex en Linux?",
        a: "La documentación incluye como hosts la app de escritorio en macOS y Windows y no menciona Linux. Aun así, se puede llegar a una máquina Linux como host SSH desde la app de escritorio de Mac o Windows.",
      },
      {
        q: "¿Mi ordenador tiene que seguir encendido?",
        a: "Sí. El ordenador tiene que seguir despierto, conectado y con la sesión iniciada, con la app de escritorio abierta; la suspensión corta el acceso. Para trabajo que siga con el ordenador apagado, usa una tarea de Codex Cloud.",
      },
      {
        q: "¿Es seguro el control remoto de Codex?",
        a: "Pasa por un relay seguro, así que el ordenador no queda expuesto a internet, y el sandbox, los controles de seguridad y las aprobaciones de Codex siguen aplicándose. Vincula solo dispositivos que sean tuyos y de confianza.",
      },
      {
        q: "¿Por qué no funciona el control remoto de Codex?",
        a: "Normalmente la app de escritorio no está abierta, “Allow other devices to connect” está desactivado, el móvil usa otra cuenta u otro workspace, alguna app está desactualizada o el ordenador se suspendió. Vuelve a vincular con el código QR si la conexión no se ha usado desde el 8 de junio de 2026.",
      },
      {
        q: "¿Funciona el control remoto de ChatGPT en Windows?",
        a: "Sí. La app de escritorio de ChatGPT en Windows puede ser un host, y se configura igual, con Settings > Connections > Control this Mac or PC. Si Codex usa Computer Use, toma el control del escritorio activo, así que mantén la sesión de Windows desbloqueada y conectada mientras trabaja. Consulta [Codex en Windows](/blog/codex-windows).",
      },
      {
        q: "¿Puedo usar el control remoto con Codex cloud?",
        a: "Son cosas distintas. El control remoto maneja chats en tu propio Mac o PC con Windows. Desde Codex en la app de ChatGPT también puedes elegir Cloud y un entorno para iniciar una tarea en la nube, que se ejecuta en la nube de OpenAI y sigue adelante mientras tu ordenador está suspendido, pero no puede ver tus archivos locales ni las sesiones iniciadas en el navegador. Un chat de tu ordenador no se puede pasar a un entorno de Codex cloud.",
      },
      {
        q: "¿Funciona el control remoto de ChatGPT por SSH?",
        a: "Sí, a través de la app de escritorio. Añade el servidor a `~/.ssh/config`, instala Codex en él e inicia sesión, y luego añádelo en Settings > Connections y elige un proyecto remoto. Tu móvil se conecta al Mac o PC con Windows que ejecuta la app, y este ejecuta el chat en el servidor, así que ese ordenador tiene que seguir encendido. Consulta [Codex en un VPS](/blog/codex-vps).",
      },
    ],
  },
  cta: {
    title: "Deja que Codex trabaje mientras no estás, no solo que responda cuando miras.",
    text: "Crewmark convierte las sesiones de Claude Code y Codex en empleados de IA con roles, objetivos, horario laboral y un heartbeat.",
    button: "Empezar",
  },
  checked: "Verificado con la documentación de Codex de OpenAI (conexiones remotas, móvil, Codex Cloud, CLI) el 14 de noviembre de 2026.",
  disclaimer:
    "Crewmark es un producto independiente, no afiliado ni respaldado por OpenAI. Codex y ChatGPT son marcas comerciales de OpenAI.",
};
