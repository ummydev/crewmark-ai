import type { GuideCopy } from "@/components/landing/guide-article";

// Spanish translation of /blog/deepseek-super-agent; the English master is src/content/blog/deepseek-super-agent.ts.

const repo = "https://github.com/deepseek-ai/dsh-superagent-prototype";

export const copy: GuideCopy = {
  meta: {
    title: "DeepSeek Super-Agent: qué es y cómo usarlo | Crewmark AI",
    description:
      "El Super-Agent open source de DeepSeek: agente de programación proactivo para un repo de GitHub. Qué hace, qué necesita, cómo instalarlo y sus límites.",
  },
  breadcrumb: "DeepSeek Super-Agent",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-03" },
  hero: {
    kicker: "Blog · DeepSeek",
    title: "DeepSeek Super-Agent: qué es y cómo configurarlo",
    lead: "dsh-superagent es el agente de programación proactivo y de código abierto de DeepSeek para un repositorio de GitHub, publicado el 31 de octubre de 2026 con licencia MIT. Funciona sobre DeepSeek Harness, vigila GitHub y, opcionalmente, Feishu, y convierte las peticiones en pull requests, cada una trabajada en su propia sesión y su propio directorio. Esta guía explica qué hace, qué necesita, cómo configurarlo, qué significa «proactivo» en la práctica y cómo se compara.",
    cta: "Empezar",
    secondary: "Ir a la configuración",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "Qué es DeepSeek Super-Agent",
      text: [
        "El repositorio describe dsh-superagent como «un agente de programación proactivo para un repositorio de GitHub, empaquetado como un bundle para DeepSeek Harness». Cuando alguien de una lista de personas autorizadas le pide trabajo, abre un elemento de trabajo (un Ticket), lo trabaja en su propia sesión de agente y su propio directorio, y responde en la conversación original, por ejemplo con una pull request. Un panel web muestra solo lo que necesita a una persona.",
        "DeepSeek lo califica de prototipo de investigación, «no un producto oficial de DeepSeek». El código público difiere de la versión interna de DeepSeek, y algunos diseños del artículo de DeepSeek son direcciones futuras que el prototipo no implementa.",
      ],
      points: [
        "Fuentes: notificaciones de GitHub, issues y pull requests suscritos, cambios de CI y pull requests fusionadas o cerradas; chats de Feishu si los añades.",
        "Trabajo en paralelo: cada Ticket tiene su propia sesión de ejecución llamada `worker-<ticket id>` y su propio directorio, normalmente un checkout con `git worktree`, hasta un límite de concurrencia que tú fijas.",
        "Seguimiento: los comentarios posteriores en una issue o pull request llegan al Ticket que trabaja en ella, sin volver a mencionar al agente.",
        "Su regla para sí mismo: «exigir la menor atención humana posible y aportar el mayor valor posible». Confirma una petición una vez, guarda silencio mientras trabaja y solo vuelve a escribir con un resultado, una pregunta o un fallo.",
      ],
    },
    {
      kind: "table",
      title: "¿Es realmente proactivo? Los tres modos de aceptación",
      text: [
        "La prensa describe un agente que corrige errores antes de que lo pidas. La documentación es más prudente: una petición directa de una persona autorizada siempre funciona, pero el trabajo que nadie ha pedido necesita una regla escrita por tu equipo, y el modo por defecto solo registra lo que el agente habría hecho.",
      ],
      headers: ["Modo de aceptación", "Qué pasa con el trabajo que nadie ha pedido"],
      rows: [
        ["`off`", "Se ignora: solo las peticiones directas de personas autorizadas inician trabajo"],
        ["`observe` (por defecto)", "Se evalúa con tus reglas y se registra como «lo habría aceptado», pero no se inicia nada"],
        ["`auto`", "Se inicia cuando cumple al menos una de tus reglas"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Cómo configurar dsh-superagent",
      text: [
        "Necesitas Node.js 22.19+ o 24+, pnpm, git 2.32+, tmux, Python 3.8+, GitHub CLI 2.48+, DeepSeek Harness 0.2.1-alpha.2 o una versión 0.2 posterior, y un proveedor de modelos configurado en DeepSeek Harness. La configuración es larga, así que el repositorio hace que tu agente de programación te guíe paso a paso.",
      ],
      steps: [
        {
          title: "Instala DeepSeek Harness",
          text: "DeepSeek Harness (`dsh`) es el harness de agentes de código abierto de DeepSeek, en vista previa para desarrolladores. Ejecútalo una vez y configura un proveedor de modelos; la interfaz web se abre en `http://127.0.0.1:3080`.",
          code: "npx @deepseek-ai/dsh web",
        },
        {
          title: "Clona el repositorio y pasa SETUP.md a tu agente de programación",
          text: "En el checkout, pide a tu agente de programación que lea SETUP.md. Examina tu máquina, hace una pregunta por mensaje, muestra el plan completo una vez y solo entonces instala algo.",
          code: `git clone ${repo}.git\ncd dsh-superagent-prototype\n# luego pide a tu agente de programación:\n# Read SETUP.md in this repository and set up dsh-superagent with me.`,
        },
        {
          title: "Responde a las preguntas de configuración",
          text: "De dónde vienen las peticiones (solo GitHub, o también Feishu), qué repositorio, con qué cuenta de GitHub actúa el agente (una dedicada, nunca la tuya), qué usuarios pueden pedirle trabajo, desde qué clon hace checkout cada Ticket, a quién nombran sus commits como autor y si puede activar el auto-merge (la respuesta recomendada es no).",
        },
        {
          title: "Haz los pasos que solo puedes hacer tú",
          text: "Crea la cuenta de GitHub del agente, acepta la invitación al repositorio con esa cuenta e inicia sesión en su CLI. El agente nunca pide un secreto en el chat; te da los comandos exactos para ejecutar en tu propia terminal.",
        },
        {
          title: "Revisa los valores por defecto que aplica",
          text: "Un perfil de DeepSeek Harness aparte llamado `superagent` en el puerto 3082, ramas con el prefijo `agent/`, modo de aceptación `observe` y una comprobación cada hora que reinicia el agente si se ha detenido.",
        },
        {
          title: "Envíale la primera petición",
          text: "Desde una cuenta autorizada, comenta `@<agent login> <request>` en una issue. En el panel aparece un Ticket en aproximadamente un minuto; el agente acusa recibo, trabaja en su propio directorio y responde en el mismo hilo, normalmente con una pull request.",
        },
      ],
      source: { label: "Fuente: el repositorio dsh-superagent en GitHub", href: repo },
    },
    {
      kind: "text",
      title: "Seguridad: qué debes saber antes de ejecutarlo",
      points: [
        "Los workers se ejecutan con `danger-full-access` como tu usuario del sistema operativo. Pueden leer tu directorio personal y ejecutar cualquier programa por su ruta; los wrappers de cuenta eligen credenciales, pero no son una barrera de seguridad.",
        "Para aislarlo, la documentación de DeepSeek indica ejecutarlo con una cuenta de sistema operativo dedicada que tenga solo las credenciales del agente.",
        "Todo lo que escribe aparece en la cuenta de GitHub del agente, por eso la configuración recomienda una cuenta dedicada y una lista corta de personas autorizadas al empezar.",
        "Los mensajes y comentarios no pueden cambiar quién puede pedir trabajo: las listas de autorizados, las reglas y el modo de aceptación solo se cambian en el panel.",
        "Tras cada turno, el trabajo en segundo plano tiene como máximo 30 minutos para terminar antes de que se detengan sus tareas de shell y el Ticket pase a estado de espera.",
        "Es un prototipo de investigación, y DeepSeek Harness es una vista previa para desarrolladores en la que se esperan cambios incompatibles.",
      ],
    },
    {
      kind: "table",
      title: "DeepSeek Super-Agent vs ChatGPT dots vs Crewmark",
      text: [
        "Los tres son agentes que siguen trabajando sin que estés en el chat, pero empiezan el trabajo de forma distinta. Super-Agent espera una mención o una regla escrita por tu equipo; los [ChatGPT dots](/blog/chatgpt-dots) viven en la nube de OpenAI; Crewmark despierta con un horario al agente de programación que ya usas, incluido DeepSeek Harness.",
      ],
      headers: ["", "DeepSeek Super-Agent", "ChatGPT dots", "Crewmark"],
      rows: [
        ["Dónde se ejecuta", "Tu máquina, en DeepSeek Harness", "Ordenador en la nube de OpenAI", "Tu ordenador, dentro de DeepSeek Harness, Claude Code, Codex u OpenCode"],
        ["Qué inicia el trabajo", "Una @mención de una persona autorizada, o una regla en modo `auto`", "Tus mensajes, programaciones y su propia investigación", "Un latido (heartbeat) cada 15–60 minutos en horario laboral"],
        ["Cola de trabajo", "Tickets de GitHub y de hilos de Feishu", "Hilos de conversación y Scheduled", "Issues en un tablero kanban"],
        ["Alcance", "Un repositorio de GitHub por instalación", "Tus apps conectadas", "Un empleado por rol, como SEO o ingeniería"],
        ["Coste", "Gratis, licencia MIT; pagas a tu proveedor de modelos", "Planes Pro y Business Premium", "Registro abierto; funciona con el agente y el plan que ya tienes"],
        ["Estado", "Prototipo de investigación", "En despliegue", "Registro abierto"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Con Crewmark",
      title: "Haz proactiva tu sesión de DeepSeek Harness, Claude Code o Codex",
      text: [
        "Super-Agent necesita su propio perfil, sus cuentas y su configuración para cada repositorio. Crewmark funciona con el agente que ya ejecutas, incluido DeepSeek Harness: da a esa sesión un rol, un objetivo y un horario, y la despierta con un latido (heartbeat) para que tome la siguiente issue de un tablero, para cualquier tipo de trabajo, no solo un repositorio.",
      ],
      steps: [
        {
          title: "Convierte una sesión en un empleado",
          text: "Elige un rol, como ingeniero de software o especialista SEO, escribe su objetivo como un número y ejecuta el comando de configuración en DeepSeek Harness, Claude Code, Codex u OpenCode.",
        },
        {
          title: "Deja que el latido inicie el trabajo",
          text: "Durante su horario, el empleado se despierta cada 15, 30 o 60 minutos en la misma conversación y retoma donde lo dejó; mira [cómo hacer proactivo Claude Code](/proactive-claude-code).",
        },
        {
          title: "Asigna issues y responde a sus mensajes",
          text: "Pon el trabajo en el tablero; el empleado lo recoge, comenta sobre la marcha y te escribe cuando necesita una decisión. Lee [qué es un empleado de IA](/ai-employees).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Configura dsh-superagent de DeepSeek" },
  mid: {
    title: "¿Ya usas DeepSeek Harness, Claude Code o Codex?",
    text: "Crewmark hace proactiva esa sesión: un latido, horario laboral y un tablero de issues, con el plan que ya pagas.",
    button: "Empezar",
  },
  faq: {
    title: "Preguntas frecuentes sobre DeepSeek Super-Agent",
    items: [
      {
        q: "¿Qué es DeepSeek Super-Agent?",
        a: "dsh-superagent es un agente de programación proactivo y de código abierto para un repositorio de GitHub, publicado por DeepSeek el 31 de octubre de 2026 como prototipo de investigación con licencia MIT. Funciona sobre DeepSeek Harness, recibe peticiones de GitHub y, opcionalmente, de Feishu, y responde con pull requests.",
      },
      {
        q: "¿DeepSeek Super-Agent es gratis?",
        a: "El código es gratuito con licencia MIT. Funciona sobre DeepSeek Harness con un proveedor de modelos que configuras tú, así que pagas el uso del modelo. DeepSeek no ha anunciado una versión alojada.",
      },
      {
        q: "¿Dónde está DeepSeek Super-Agent en GitHub?",
        a: "En github.com/deepseek-ai/dsh-superagent-prototype. DeepSeek Harness, el harness de agentes sobre el que funciona, está en github.com/deepseek-ai/deepseek-harness.",
      },
      {
        q: "¿DeepSeek Super-Agent corrige errores sin que se lo pidan?",
        a: "Solo si lo permites. Las peticiones directas de personas autorizadas siempre funcionan, pero el trabajo no solicitado necesita una regla escrita por tu equipo, y el modo `observe` por defecto solo registra lo que habría hecho. Pasa a `auto` después de revisar esos registros.",
      },
      {
        q: "¿dsh-superagent funciona con Slack o Teams?",
        a: "No en este prototipo. Incluye GitHub y Feishu como fuentes; su cookbook explica cómo añadir otra fuente.",
      },
      {
        q: "¿Es seguro ejecutarlo?",
        a: "Sus workers se ejecutan con acceso total como tu usuario del sistema operativo y pueden leer tu directorio personal, así que la documentación de DeepSeek recomienda una cuenta de sistema operativo dedicada con solo las credenciales del agente, una cuenta de GitHub dedicada y una lista corta de personas autorizadas.",
      },
      {
        q: "¿Puedo usar Crewmark con DeepSeek Harness?",
        a: "Sí. Crewmark conecta DeepSeek Harness, Claude Code, Codex y OpenCode. Convierte una sesión en un empleado de IA que se despierta con un latido (heartbeat) durante su horario laboral y toma issues de un tablero, con el proveedor de modelos que ya usas.",
      },
    ],
  },
  cta: {
    title: "Haz proactivo al agente que ya usas.",
    text: "Crewmark convierte las sesiones de DeepSeek Harness, Claude Code y Codex en empleados de IA con roles, objetivos, horario laboral y un latido.",
    button: "Empezar",
  },
  checked: "Comprobado con los repositorios de dsh-superagent y DeepSeek Harness en GitHub el 3 de noviembre de 2026.",
  disclaimer:
    "Crewmark es un producto independiente, sin relación con DeepSeek, OpenAI ni Anthropic y sin su respaldo. DeepSeek es una marca de DeepSeek, ChatGPT de OpenAI y Claude Code de Anthropic.",
};
