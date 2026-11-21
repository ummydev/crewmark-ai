import type { GuideCopy } from "@/components/landing/guide-article";

// es translation of /blog/claude-code-channels; the English master is src/content/blog/claude-code-channels.ts.

const docs = "https://code.claude.com/docs/en/channels";

const telegram = `# En Claude Code: instala el plugin oficial (elige el ámbito de usuario)
/plugin install telegram@claude-plugins-official

# Guarda el token que te dio BotFather
/telegram:configure <token>

# Reinicia Claude Code con el canal activado
claude --channels plugin:telegram@claude-plugins-official

# Escribe a tu bot y vincúlalo con el código que te responda
/telegram:access pair <code>
/telegram:access policy allowlist`;

export const copy: GuideCopy = {
  meta: {
    title: "Channels de Claude Code: configurar Telegram, Discord e iMessage",
    description:
      "Cómo funcionan los channels de Claude Code y cómo configurar los plugins oficiales de Telegram, Discord e iMessage: comandos, vinculación, listas de remitentes permitidos, requisitos, por qué los channels no aparecen disponibles, y Slack.",
  },
  breadcrumb: "Channels de Claude Code",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-08" },
  hero: {
    kicker: "Blog · Claude Code",
    title: "Channels de Claude Code: escribe a Claude Code desde Telegram, Discord o iMessage",
    lead: "Los channels envían mensajes a una sesión de Claude Code que ya se está ejecutando en tu ordenador, así que puedes escribirle desde el móvil y recibir la respuesta en el mismo chat mientras el trabajo se hace sobre tus archivos reales. Telegram, Discord e iMessage tienen plugins oficiales. Esta guía explica cómo funcionan los channels, cómo configurar cada uno, cómo evitar que entren desconocidos, por qué a veces no aparecen y cómo se comparan con Remote Control y Claude en Slack.",
    cta: "Empezar",
    secondary: "Configurar Telegram",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "Qué son los channels de Claude Code",
      text: [
        "Un channel es un servidor MCP que envía eventos a tu sesión de Claude Code en ejecución. Puede ser bidireccional: Claude lee el mensaje y responde por el mismo channel, como un puente de chat. Los eventos solo llegan mientras la sesión está abierta.",
      ],
      points: [
        "Plugins de channel oficiales: Telegram, Discord e iMessage, más fakechat, un chat de demostración en localhost.",
        "Cada uno es un plugin de claude-plugins-official y necesita Bun instalado.",
        "También puedes crear tu propio channel, por ejemplo un receptor de webhooks para fallos de CI o alertas de errores.",
        "Los channels son una research preview: el flag `--channels` no aparece en `claude --help` y su sintaxis puede cambiar.",
        "En el terminal ves el mensaje entrante y una confirmación como “sent”; el texto de la respuesta aparece en la app de chat.",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Cómo configurar el channel de Telegram",
      steps: [
        {
          title: "Crea un bot",
          text: "En Telegram, abre BotFather, envía `/newbot`, ponle al bot un nombre y un nombre de usuario que termine en “bot”, y copia el token.",
          code: telegram,
        },
        {
          title: "Instala y configura el plugin",
          text: "En Claude Code, ejecuta `/plugin install telegram@claude-plugins-official` y elige el ámbito de usuario. Si no encuentra el marketplace, añádelo con `/plugin marketplace add anthropics/claude-plugins-official`. Luego guarda el token con `/telegram:configure <token>`, o define `TELEGRAM_BOT_TOKEN` antes de iniciar Claude Code.",
        },
        {
          title: "Reinicia con el channel activado",
          text: "Sal e inicia Claude Code de nuevo con `--channels plugin:telegram@claude-plugins-official`. Puedes pasar varios plugins de channel, separados por espacios.",
        },
        {
          title: "Vincúlalo y ciérralo",
          text: "Envía cualquier mensaje a tu bot; te responderá con un código de vinculación. Apruébalo con `/telegram:access pair <code>` y luego ejecuta `/telegram:access policy allowlist` para que solo tu cuenta pueda llegar a la sesión.",
        },
      ],
      source: { label: "Fuente: documentación de Claude Code de Anthropic sobre channels", href: docs },
    },
    {
      kind: "text",
      id: "discord-imessage",
      title: "Discord e iMessage",
      points: [
        "Discord: crea una aplicación en el Discord Developer Portal, copia el token del bot, activa Message Content Intent e invita al bot con el scope `bot`. Luego `/plugin install discord@claude-plugins-official`, `/discord:configure <token>`, reinicia con `--channels plugin:discord@claude-plugins-official`, envía un DM al bot y vincúlalo con `/discord:access pair <code>`.",
        "iMessage: solo en macOS, sin bot ni token. Lee tu base de datos de Mensajes, así que da a tu terminal acceso total al disco. Instala `imessage@claude-plugins-official`, reinicia con `--channels plugin:imessage@claude-plugins-official` y envíate un mensaje a ti mismo. Añade a otras personas con `/imessage:access allow <teléfono o email del Apple ID>`.",
        "Slack: no es un channel. Claude en Slack inicia una sesión en la nube a partir de una mención a @Claude en lugar de enviar mensajes a tu sesión local.",
        "WhatsApp y otras apps: no hay plugin de channel oficial; tendrías que crear el tuyo con la referencia de channels.",
      ],
    },
    {
      kind: "text",
      id: "not-working",
      title: "¿Los channels no están disponibles o no funcionan?",
      points: [
        "Tu tipo de cuenta: los channels requieren iniciar sesión con claude.ai o una clave de API de Console. No funcionan a través de Amazon Bedrock, Agent Platform de Google Cloud ni Microsoft Foundry.",
        "Tu organización: en Claude Team y Enterprise, los channels están bloqueados hasta que un Owner los activa en Organization settings > Claude Code > Channels. Un aviso al iniciar lo indica. Las cuentas Pro, Max y Ultra sin organización se saltan esta comprobación.",
        "El plugin no está aprobado: durante la preview, `--channels` solo acepta plugins de la lista permitida de Anthropic (o de tu organización). Cualquier otro arranca sin el channel, y el aviso al iniciar te dice por qué.",
        "El bot no responde: Claude Code tiene que estar ejecutándose con `--channels`; el bot solo puede responder mientras el channel está activo.",
        "Se detiene a mitad de tarea: una solicitud de permiso pausa la sesión hasta que alguien responde. Algunos channels pueden reenviar la solicitud a tu móvil.",
      ],
    },
    {
      kind: "text",
      id: "security",
      title: "Mantén fuera a los desconocidos",
      points: [
        "Cada channel oficial mantiene una lista de remitentes permitidos; los mensajes de cualquier otra persona se descartan sin aviso. Telegram y Discord te añaden mediante la vinculación; iMessage deja pasar tus propios mensajes.",
        "Solo los servidores indicados en `--channels` pueden enviar mensajes; estar en `.mcp.json` no basta.",
        "Si un channel reenvía solicitudes de permiso, cualquiera de su lista permitida puede aprobar o denegar el uso de herramientas en tu sesión. Añade solo a personas a las que confiarías eso.",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Channels vs Remote Control vs Claude en Slack",
      headers: ["", "Qué hace", "Dónde se ejecuta", "Ideal para"],
      rows: [
        ["Channels", "Envía mensajes de chat, alertas y webhooks a tu sesión abierta", "Tu ordenador", "Escribir a la sesión desde el móvil; reaccionar a la CI y a alertas"],
        ["[Remote Control](/remote-claude-code)", "Controlas tu sesión local desde claude.ai o la app de Claude", "Tu ordenador", "Dirigir el trabajo en curso cuando no estás en tu mesa"],
        ["Claude en Slack", "Una mención a @Claude inicia una sesión en la nube", "La nube de Anthropic", "Iniciar tareas desde una conversación del equipo"],
        ["Hook de notificación", "Ejecuta tu comando, como una alerta de escritorio, cuando Claude te necesita", "Tu ordenador", "Saber cuándo termina un turno o necesita tu respuesta"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Con Crewmark",
      title: "Deja que Claude Code te escriba, no solo que te responda",
      text: [
        "Un channel es una forma de hablar con una sesión que has dejado en marcha. Crewmark convierte esa sesión en un empleado de IA: se despierta con un heartbeat durante el horario laboral, toma la siguiente issue de un tablero y te escribe en Crewmark cuando está bloqueado, sin que tengas que escribirle tú primero.",
      ],
      steps: [
        {
          title: "Contrata a un empleado sobre tu Claude Code",
          text: "Ejecuta el comando de configuración en una conversación de Claude Code; esa conversación se convierte en el empleado. Consulta [qué es un empleado de IA](/ai-employees).",
        },
        {
          title: "Dale horario y un heartbeat",
          text: "Elige su horario laboral y cada cuánto se despierta, de 15 a 240 minutos. Consulta [cómo hacer que Claude Code sea proactivo](/proactive-claude-code).",
        },
        {
          title: "Responde cuando te necesite",
          text: "Las decisiones llegan como mensajes directos; una respuesta y sigue adelante. Para trabajo nocturno, consulta [cómo ejecutar Claude Code 24/7](/blog/run-claude-code-24-7).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Configurar el channel de Telegram de Claude Code" },
  mid: {
    title: "¿Quieres que Claude Code acuda a ti cuando esté bloqueado?",
    text: "Los empleados de Crewmark se despiertan con un heartbeat, avanzan por un tablero y te escriben cuando necesitan una decisión.",
    button: "Empezar",
  },
  faq: {
    title: "Preguntas frecuentes sobre los channels de Claude Code",
    items: [
      {
        q: "¿Qué son los channels de Claude Code?",
        a: "Servidores MCP que envían eventos a una sesión de Claude Code que ya se está ejecutando: mensajes de chat de Telegram, Discord o iMessage, o webhooks de CI y monitorización. Claude puede responder por el mismo channel. Son una research preview.",
      },
      {
        q: "¿Hay un plugin oficial de Telegram para Claude Code?",
        a: "Sí: `telegram@claude-plugins-official`. Instálalo con `/plugin install`, guarda tu token de BotFather con `/telegram:configure`, inicia Claude Code con `--channels plugin:telegram@claude-plugins-official` y vincula tu cuenta con el código que te envía el bot.",
      },
      {
        q: "¿Puedo usar los channels de Claude Code con Slack o WhatsApp?",
        a: "No hay channel oficial para ninguno de los dos. Para Slack, Claude en Slack inicia sesiones en la nube a partir de una mención a @Claude. Para otras apps puedes crear tu propio channel con la referencia de channels.",
      },
      {
        q: "¿Por qué los channels de Claude Code no están disponibles?",
        a: "Normalmente porque inicias sesión a través de Bedrock, Google Cloud o Foundry, tu organización de Team o Enterprise no los ha activado, o el plugin no está en la lista aprobada. El aviso al iniciar indica el motivo.",
      },
      {
        q: "¿Funcionan los channels con el ordenador apagado?",
        a: "No. Los eventos solo llegan mientras la sesión está abierta en tu ordenador, así que para una configuración siempre activa ejecuta Claude Code en un proceso en segundo plano o en un terminal persistente, en una máquina que no se suspenda.",
      },
      {
        q: "¿Cómo recibo una notificación cuando Claude Code termina?",
        a: "Añade un hook `Notification` o `Stop` que lance una alerta de escritorio, como `osascript` en macOS. Consulta [hooks de Claude Code](/blog/claude-code-hooks). Para enterarte en el móvil, pide a Claude que responda por un channel cuando termine.",
      },
    ],
  },
  cta: {
    title: "De responder mensajes a trabajar su propia cola.",
    text: "Crewmark convierte las sesiones de Claude Code y Codex en empleados de IA con roles, objetivos, horario laboral y un heartbeat.",
    button: "Empezar",
  },
  checked: "Verificado con la documentación de Claude Code sobre channels el 8 de noviembre de 2026.",
  disclaimer:
    "Crewmark es un producto independiente, no afiliado ni respaldado por Anthropic. Claude y Claude Code son marcas comerciales de Anthropic; Telegram, Discord e iMessage son marcas comerciales de sus propietarios.",
};
