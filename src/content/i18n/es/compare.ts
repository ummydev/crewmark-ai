import type { CompareBundle } from "@/content/compare/types";

// Spanish translation of the comparison pages (MC-387); the English master is src/content/compare/en.ts.

export const copy: CompareBundle = {
  ui: {
    kicker: "Comparativa",
    hubName: "Comparativas",
    cta: "Empezar",
    secondary: "Ver la tabla",
    shortTitle: "{a} vs {b} en una línea cada uno",
    tableTitle: "{a} vs {b} vs Crewmark de un vistazo",
    rows: {
      category: "Qué es",
      openSource: "Código abierto",
      pricing: "Precio",
      runs: "Dónde se ejecuta",
      agents: "Agentes y modelos",
      board: "Tablero de tareas",
      schedule: "Trabajo programado",
      talk: "Agentes que hablan entre sí",
    },
    differencesTitle: "Principales diferencias entre {a} y {b}",
    pickTitle: "Elige {x} si",
    crewmarkTitle: "Dónde encaja Crewmark",
    crewmarkText:
      "Crewmark trabaja en una capa distinta de la de ambos. No sustituye a tu agente de programación: le da un trabajo. Cada empleado de IA es una conversación de Claude Code o Codex en tu propio ordenador, con un rol, objetivos y un horario laboral.",
    crewmarkPoints: [
      "Un latido despierta a cada empleado durante su horario laboral, desde cada 15 minutos hasta una vez al día, para que tome la siguiente issue.",
      "Un tablero compartido con estados, prioridades, comentarios y @menciones; asignar, comentar o mencionar despierta al agente al que afecta.",
      "De código abierto con licencia GPL-3.0, y gratis para 1 proyecto y hasta 3 empleados de IA.",
      "Los mensajes directos entre agentes y una cadena de reporte llegarán próximamente.",
    ],
    sourcesTitle: "Cómo lo comprobamos",
    sourcesText:
      "Cada dato de esta página procede del sitio, la página de precios, la documentación o el repositorio de GitHub de cada producto, comprobados el 13 de noviembre de 2026. Los precios y los planes cambian, así que consulta la página del proveedor antes de comprar. Sitios oficiales:",
    relatedTitle: "Más comparativas",
    moreTitle: "Alternativas y precios",
    alternativesLabel: "Alternativas a {x}",
    pricingLabel: "Precios de {x}",
    midTitle: "¿Quieres que tus agentes trabajen con un horario?",
    midText:
      "Crewmark da a Claude Code y Codex un rol, un latido y un tablero compartido, para que tomen el siguiente trabajo por su cuenta.",
    midButton: "Empezar",
    faqTitle: "Preguntas frecuentes",
    crewmarkFaq: {
      q: "¿Crewmark es una alternativa a {a} y {b}?",
      a: "Cubre otra parte del trabajo. Crewmark no trae un agente propio: convierte Claude Code o Codex en empleados de IA con roles, un latido y un tablero compartido. Según para qué uses {a} y {b}, puede funcionar junto a ellos o encargarse de la parte que planifica y hace el seguimiento del trabajo de los agentes.",
    },
    ctaTitle: "Dale un trabajo a tus agentes de Claude Code y Codex, no solo un prompt.",
    ctaText:
      "Crewmark convierte sesiones de Claude Code y Codex en empleados de IA con roles, objetivos, horario laboral y un latido.",
    ctaButton: "Empezar",
    checked:
      "Datos comprobados con el sitio, la página de precios, la documentación o el GitHub de cada producto el 13 de noviembre de 2026.",
    disclaimer:
      "Crewmark es un producto independiente, sin relación con ninguna empresa mencionada en esta página y sin su respaldo. Los nombres de producto son marcas de sus respectivos titulares. Los datos sobre otros productos proceden de sus sitios y su documentación públicos en la fecha indicada arriba.",
    hub: {
      meta: {
        title: "Compara herramientas de agentes de IA: 30 comparativas",
        description:
          "Herramientas de agentes de IA cara a cara: Paperclip, Multica, CrewAI, OpenClaw, Hermes Agent, Claude Code, Codex, Conductor y más, con datos de cada proveedor.",
      },
      breadcrumb: "Comparativas",
      title: "Herramientas de agentes de IA comparadas, cara a cara",
      lead: "Cada comparativa pone dos herramientas una junto a otra, con Crewmark como tercera columna, usando solo datos del sitio, la página de precios, la documentación o el GitHub de cada proveedor. No hay puntuaciones ni ganadores: solo qué es cada una, cuánto cuesta y qué hace, para que elijas la que mejor te encaje.",
      tableTitle: "Todas las comparativas",
      tableHeaders: ["Comparativa", "En resumen"],
      productsTitle: "Productos incluidos",
      moreTitle: "Páginas de alternativas y precios",
      productsHeaders: ["Producto", "Qué es", "Código abierto"],
      midTitle: "¿Quieres que tus agentes trabajen con un horario?",
      ctaTitle: "Dale un trabajo a tus agentes de Claude Code y Codex, no solo un prompt.",
      faq: [
        {
          q: "¿Cómo se hacen estas comparativas?",
          a: "A partir del sitio, la página de precios, la documentación y el repositorio de GitHub de cada producto, comprobados en la fecha que aparece al final de cada página. No puntuamos ni clasificamos productos.",
        },
        {
          q: "¿Por qué aparece Crewmark en todas las páginas?",
          a: "Crewmark es nuestro producto, así que aparece como tercera columna como referencia. Trabaja en una capa distinta de la de la mayoría de estas herramientas: convierte Claude Code o Codex en empleados de IA con roles, un latido y un tablero compartido.",
        },
        {
          q: "¿Los precios están actualizados?",
          a: "Eran correctos en la fecha indicada. Los proveedores cambian a menudo sus precios y planes, así que consulta su página de precios antes de comprar.",
        },
      ],
    },
  },

  products: {
    paperclip: {
      name: "Paperclip",
      href: "https://paperclip.ing",
      what: "un servidor autoalojado con app web que dirige un equipo de agentes de IA como una empresa, con organigrama, presupuestos y tareas, y que controla los agentes que tú aportas, como Claude Code, Codex u OpenClaw.",
      category: "Orquestación multiagente (“empresa de IA”)",
      openSource: "Sí, MIT",
      pricing: "La versión autoalojada es gratis; no hay precios publicados; versión en la nube en lista de espera",
      runs: "Servidor Node.js autoalojado con Postgres, o Docker",
      agents: "Los agentes que aportas mediante adaptadores: Claude Code, Codex, OpenClaw, Cursor, Gemini CLI, OpenCode y más",
      board: "Sí: issues vinculadas a objetivos y proyectos, asignadas a agentes o personas",
      schedule: "Sí: latidos, y Routines con cron, webhooks o disparadores por API",
      talk: "Mediante hilos de tareas y delegación a lo largo del organigrama",
    },
    multica: {
      name: "Multica",
      href: "https://multica.ai",
      what: "un espacio de trabajo donde asignas issues a agentes de programación de IA como si fueran compañeros de equipo, mientras un daemon en tu máquina ejecuta las CLI de agentes que ya tienes.",
      category: "Tablero de issues para personas y agentes de programación",
      openSource: "Código fuente disponible (Apache 2.0 con condiciones adicionales)",
      pricing: "Autoalojamiento gratis dentro de tu organización; precios de la nube no publicados",
      runs: "Nube, autoalojado (Docker o Helm) o app de escritorio; los agentes se ejecutan en un daemon que controlas tú",
      agents: "29 CLI de agentes, entre ellas Claude Code, Codex, Cursor Agent, OpenCode y Hermes",
      board: "Sí: vistas de tablero y de lista, con agentes como responsables",
      schedule: "Sí: Autopilots con cron, webhooks o ejecución manual",
      talk: "Sí: en los squads, un agente líder @menciona a los miembros para pasarles trabajo",
    },
    linear: {
      name: "Linear",
      href: "https://linear.app",
      what: "un gestor de issues alojado para equipos de producto que también te permite delegar issues en su propio Linear Agent y en agentes de terceros como Cursor, Codex y Devin.",
      category: "Gestor de issues con plataforma de agentes",
      openSource: "No",
      pricing:
        "Free $0; Basic $10 y Business $16 por usuario/mes, con facturación anual; créditos de IA para el agente de programación y Loops",
      runs: "Nube",
      agents:
        "Linear Agent; un agente de programación en la nube basado en Claude Code o Codex; agentes de terceros instalados como miembros",
      board: "Sí: issues, proyectos, ciclos e iniciativas",
      schedule: "Sí: Loops, según una programación o por eventos",
      talk: "No se indica",
    },
    openclaw: {
      name: "OpenClaw",
      href: "https://openclaw.ai",
      what: "un asistente personal de IA de código abierto que se ejecuta en tu propio ordenador y te responde en apps de chat como WhatsApp, Telegram y Slack.",
      category: "Asistente personal de IA (autoalojado)",
      openSource: "Sí, MIT",
      pricing: "Gratis; sin plan de pago ni servicio alojado; pagas a tu proveedor de modelos",
      runs: "Un Gateway local en tu propia máquina; instalación con Docker y Nix",
      agents: "Proveedores de modelos como plugins: Anthropic, OpenAI, Gemini, OpenRouter, Ollama y otros",
      board: "No (se eliminaron su registro de Tasks y TaskFlow)",
      schedule: "Sí: un programador de Automations integrado, además de webhooks",
      talk: "Sí: varios agentes por Gateway con acceso entre agentes, y un preset de equipo con un coordinador",
    },
    "hermes-agent": {
      name: "Hermes Agent",
      href: "https://hermes-agent.nousresearch.com",
      what: "el agente personal de IA de código abierto de Nous Research, que se usa desde una terminal, una app de escritorio o apps de chat, y que escribe y mejora sus propias skills a partir de la experiencia.",
      category: "Agente personal de IA (autoalojado)",
      openSource: "Sí, MIT",
      pricing: "Agente gratis; Nous Portal opcional: Free, Plus $20, Super $100, Ultra $200 al mes",
      runs: "Tu máquina o un servidor; los planes de pago de Portal incluyen un agente alojado en la nube",
      agents: "Cualquier proveedor de modelos: Nous Portal, OpenRouter, OpenAI, Anthropic, Gemini, modelos locales y más",
      board: "No",
      schedule: "Sí: un programador cron integrado, y rutinas por Bot",
      talk: "Sí: subagentes, y en Bot Mode los Bots con nombre se escriben entre sí",
    },
    "relevance-ai": {
      name: "Relevance AI",
      href: "https://relevanceai.com",
      what: "una plataforma low-code alojada para crear agentes de IA y conectarlos en equipos multiagente, que llama AI Workforce, para trabajo de ventas, soporte y operaciones.",
      category: "Plataforma de agentes de IA (“AI Workforce”)",
      openSource: "No",
      pricing: "La página pública de precios solo muestra Enterprise, a través de ventas",
      runs: "Nube",
      agents: "Sus propios agentes, creados en un editor sin código; cualquier LLM con créditos, o tu propia clave",
      board: "Sin tablero de issues; historial de tareas y un Activity Center",
      schedule: "Sí: tareas programadas y disparadores desde apps",
      talk: "Sí: los agentes conectados en un lienzo se pasan trabajo entre sí",
    },
    lindy: {
      name: "Lindy",
      href: "https://www.lindy.ai",
      what: "un asistente de IA alojado que trabaja con tu bandeja de entrada, tu calendario, tus reuniones y Slack, ejecuta rutinas recurrentes y pregunta antes de hacer cualquier cosa con impacto externo.",
      category: "Asistente de IA (“empleado de IA”)",
      openSource: "No",
      pricing: "Gratis: $50 en créditos durante 7 días; desde $29.99/mes por usuario activo por 3.000 créditos",
      runs: "Nube; se usa desde Slack, correo electrónico, iMessage, teléfono y una extensión de Chrome",
      agents: "Su propio asistente; elige un modelo para cada tarea, o lo eliges tú",
      board: "No; le das tareas en la conversación",
      schedule: "Sí: Routines, según una programación o un evento",
      talk: "No se indica (una sola instancia de Lindy por espacio de trabajo)",
    },
    crewai: {
      name: "CrewAI",
      href: "https://crewai.com",
      what: "un framework de Python de código abierto para crear crews de agentes basados en roles y flows paso a paso, más una plataforma comercial, CrewAI AMP, para desplegarlos y ejecutarlos.",
      category: "Framework multiagente (Python) y plataforma",
      openSource: "El framework sí, MIT; la plataforma AMP es comercial",
      pricing: "Framework gratis; AMP Basic gratis (50 ejecuciones/mes); Enterprise a medida",
      runs: "Una biblioteca en tu código; AMP en la nube de CrewAI o en tu propia infraestructura",
      agents: "LLM por API (OpenAI por defecto; admite otros proveedores y modelos locales)",
      board: "No; las tareas se definen en código",
      schedule: "En AMP: programación con cron; no se indica para el framework por sí solo",
      talk: "Sí: los agentes delegan y se hacen preguntas entre sí; un agente manager en modo jerárquico",
    },
    langgraph: {
      name: "LangGraph",
      href: "https://www.langchain.com/langgraph",
      what: "el framework de código abierto de LangChain para crear agentes con estado y de larga duración como un grafo de estado, nodos y aristas en código, desplegados a través de LangSmith.",
      category: "Framework de orquestación de agentes (Python, JS)",
      openSource: "El framework sí, MIT; LangSmith es comercial",
      pricing: "Framework gratis; LangSmith Developer $0, Plus $39/puesto/mes, Enterprise a medida",
      runs: "Dentro de tu aplicación; Agent Server en la nube de LangChain, o autoalojado en Enterprise",
      agents: "Los modelos a los que llame tu código",
      board: "No",
      schedule: "En Agent Server: tareas cron; no se indica para la biblioteca por sí sola",
      talk: "Sí, según lo diseñes en tu grafo: subagentes, traspasos (handoffs), routers",
    },
    autogen: {
      name: "AutoGen",
      href: "https://microsoft.github.io/autogen/",
      what: "el framework de código abierto de Microsoft para aplicaciones multiagente en Python y .NET. Su README dice ahora que está archivado y que Microsoft ya no lo mantiene, y remite a Microsoft Agent Framework.",
      category: "Framework multiagente (Python, .NET)",
      openSource: "Sí: código MIT, documentación CC-BY-4.0",
      pricing: "Gratis; sin servicio alojado",
      runs: "Una biblioteca en tu código; AutoGen Studio se ejecuta en local",
      agents: "Clientes de modelos para OpenAI y Azure; Anthropic, Ollama y Gemini marcados como experimentales",
      board: "No",
      schedule: "No se indica",
      talk: "Sí: chats grupales, equipos selector y swarm, paso de mensajes",
    },
    conductor: {
      name: "Conductor",
      href: "https://www.conductor.build",
      what: "una app de Mac que ejecuta agentes de Claude Code, Codex, Cursor y OpenCode en paralelo, cada uno en su propio worktree de git. Anunció el 4 de noviembre de 2026 que se une a Meta y cerró los nuevos registros y las descargas.",
      category: "Ejecutor de agentes de programación en paralelo (app de Mac)",
      openSource: "No",
      pricing: "De uso gratuito; hoy no hay precios publicados de planes en la nube",
      runs: "App de Mac; Conductor Cloud en solo lectura desde el 13 de noviembre y cerrado el 20 de noviembre de 2026",
      agents: "Claude Code, Codex, OpenCode y Cursor Agent, con tus propias suscripciones o claves",
      board: "Sin tablero de issues; una lista de workspaces, que pueden empezar desde una issue de GitHub o Linear",
      schedule: "Routines solo en la nube, que terminan con la nube",
      talk: "Muestra los mensajes entre agentes cuando los agent teams de Claude Code están activados",
    },
    "claude-squad": {
      name: "Claude Squad",
      href: "https://github.com/smtg-ai/claude-squad",
      what: "una app de terminal de código abierto que ejecuta varios agentes de programación a la vez, cada uno en su propia sesión de tmux y su propio worktree de git, para que trabajen en ramas separadas.",
      category: "Ejecutor de agentes de programación en paralelo (terminal)",
      openSource: "Sí, AGPL-3.0",
      pricing: "Gratis",
      runs: "Tu terminal; necesita tmux y la CLI de GitHub",
      agents: "Claude Code por defecto; Codex, Gemini, Aider o cualquier programa en su configuración",
      board: "No; una lista de instancias con vistas previas y diffs",
      schedule: "No se indica",
      talk: "No se indica",
    },
    "vibe-kanban": {
      name: "Vibe Kanban",
      href: "https://www.vibekanban.com",
      what: "un tablero kanban para el trabajo de agentes de programación donde cada issue tiene un workspace con un worktree de git y el agente que elijas. Su empresa, bloop, cerró en abril de 2026, y el proyecto sigue como código abierto, mantenido por su comunidad.",
      category: "Tablero kanban y ejecutor de agentes de programación en paralelo",
      openSource: "Sí, Apache-2.0",
      pricing: "App local gratis; las suscripciones de pago terminaron en abril de 2026",
      runs: "En local en tu navegador o como app de escritorio; su parte en la nube se puede autoalojar",
      agents: "Claude Code, Codex, Gemini CLI, GitHub Copilot, Amp, Cursor, OpenCode y otros",
      board: "Sí: issues kanban con prioridades y etiquetas (requiere iniciar sesión)",
      schedule: "No se indica",
      talk: "No se indica",
    },
    "claude-code": {
      name: "Claude Code",
      href: "https://code.claude.com/docs/en/overview",
      what: "el agente de programación de Anthropic: lee tu código, edita archivos y ejecuta comandos, desde la terminal, extensiones de IDE, una app de escritorio y la web.",
      category: "Agente de programación",
      openSource: "No (repositorio público, todos los derechos reservados)",
      pricing: "En los planes de pago de Claude: Pro $20/mes, Max $100, Ultra $200; Team y Enterprise por puesto",
      runs: "Terminal, extensiones de IDE, app de escritorio, web y móvil",
      agents: "Su propio agente con modelos de Claude",
      board: "Sin tablero de issues; los agent teams comparten una lista de tareas",
      schedule: "Sí: tareas programadas en la nube, tareas programadas de escritorio y `/loop`",
      talk: "En los agent teams experimentales, los compañeros se escriben entre sí; los subagentes informan de vuelta",
    },
    "claude-code-agent-teams": {
      name: "Claude Code agent teams",
      href: "https://code.claude.com/docs/en/agent-teams",
      what: "una función experimental de Claude Code, desactivada por defecto, en la que una sesión líder crea compañeros: instancias separadas de Claude Code que comparten una lista de tareas y se escriben entre sí.",
      category: "Modo multiagente de un agente de programación",
      openSource: "No (forma parte de Claude Code)",
      pricing: "Viene con Claude Code en los planes de pago de Claude",
      runs: "Tus sesiones de Claude Code",
      agents: "Instancias de Claude Code con modelos de Claude",
      board: "Una lista de tareas compartida de la que los compañeros toman tareas, con dependencias",
      schedule: "No forma parte de los agent teams; Claude Code tiene tareas programadas por separado",
      talk: "Sí: los compañeros se escriben entre sí, y tú puedes escribir a cualquiera de ellos",
    },
    codex: {
      name: "Codex",
      href: "https://learn.chatgpt.com/docs/codex/cli",
      what: "el agente de programación de OpenAI, en una CLI de terminal, una extensión de IDE, la app de escritorio de ChatGPT y la nube, incluido en los planes de ChatGPT o usado con una clave de API.",
      category: "Agente de programación",
      openSource: "En parte: CLI, SDK y App Server son Apache-2.0; la extensión de IDE y la nube no",
      pricing: "En los planes de ChatGPT desde Plus a $20/mes, o con una clave de API de OpenAI",
      runs: "Terminal, extensión de IDE, app de escritorio de ChatGPT y Codex Cloud",
      agents: "Su propio agente con modelos de OpenAI",
      board: "Sin tablero de issues; toma issues de Linear en los planes de pago",
      schedule: "Sí: tareas programadas en la app de escritorio de ChatGPT y en la web",
      talk: "Subagentes: un agente principal crea agentes y recoge sus resultados",
    },
    opencode: {
      name: "OpenCode",
      href: "https://opencode.ai",
      what: "un agente de programación de código abierto que funciona con modelos de más de 200 proveedores, incluidos modelos locales, como interfaz de terminal, app de escritorio, app web y SDK.",
      category: "Agente de programación",
      openSource: "Sí, MIT",
      pricing: "Agente gratis, con modelos gratuitos; OpenCode Go $10/mes, Go Plus $40/mes",
      runs: "Terminal, app de escritorio, app web y SDK en tu máquina",
      agents: "Su propio agente; más de 200 proveedores de modelos, incluidos modelos locales",
      board: "No se indica",
      schedule: "Programaciones experimentales que hay que activar (desde octubre de 2026)",
      talk: "Los subagentes informan al agente principal",
    },
    devin: {
      name: "Devin",
      href: "https://devin.ai",
      what: "el ingeniero de software de IA de Cognition: escribe, ejecuta y prueba código y abre pull requests, en sesiones en la nube con su propia máquina virtual y en local mediante Devin Desktop y Devin CLI.",
      category: "Ingeniero de software de IA",
      openSource: "No",
      pricing: "Free $0; Pro $20/mes; Max $200/mes; Teams $80/mes más $40 por puesto de desarrollador",
      runs: "Una VM en la nube por sesión; Devin Desktop y CLI en local",
      agents: "Su propio agente; SWE-2 de Cognition más modelos de frontera de varios laboratorios",
      board: "Sin tablero propio; toma tickets de Linear, Jira y GitHub",
      schedule: "Sí: Automations, según una programación o por eventos",
      talk: "Sí: una sesión coordinadora lanza Devins hijos y les escribe",
    },
    factory: {
      name: "Factory",
      href: "https://factory.com",
      what: "agentes de programación llamados Droids que se ejecutan en una app de escritorio, en una CLI, sin interfaz (headless) en CI y en ordenadores en la nube alojados por Factory.",
      category: "Plataforma de agentes de programación (Droids)",
      openSource: "No",
      pricing: "Gratis con tu propia inferencia; Pro $20/mes; Plus $100/mes; planes superiores",
      runs: "App de escritorio y CLI en local; Droid Computers en la nube; headless en CI",
      agents: "Su propio agente con modelos de frontera y de pesos abiertos, o tus propias claves",
      board: "Sin tablero general; toma issues de Linear y Jira; Workstreams (beta) enumera tareas",
      schedule: "Sí: Automations según una programación, Slack, GitHub o webhooks",
      talk: "Sí, en Workstreams (beta): un orquestador cuyos agentes le informan",
    },
    "grok-bot": {
      name: "Grok Bot",
      href: "https://x.ai/bot",
      what: "los compañeros de equipo de IA alojados de xAI: Bots que tienen cada uno su propio ordenador en la nube, inician sesión en tus herramientas, trabajan en Slack y Microsoft Teams, ejecutan rutinas y se pasan trabajo entre sí.",
      category: "Compañeros de trabajo de IA (alojados)",
      openSource: "No",
      pricing: "Premium $30, Super $100, Ultra $200 al mes, con uso semanal incluido; Teams y Enterprise a través de ventas",
      runs: "Un ordenador en la nube por Bot; apps de escritorio y móviles; en Slack, Teams y videollamadas",
      agents: "Sus propios Bots, creados con Grok",
      board: "No se indica; el trabajo se pasa en el chat, en hilos y en reuniones",
      schedule: "Sí: rutinas según una programación, y flujos de trabajo que aprende observándote",
      talk: "Sí: los Bots se escriben entre sí y se coordinan en chats grupales",
    },
    openbot: {
      name: "OpenBot",
      href: "https://open.bot",
      what: "el espacio de trabajo de código abierto y autoalojable de CopilotKit para compañeros de trabajo de IA, donde cada Bot tiene su propio navegador, sus archivos y sus herramientas, y tú aportas tus propios modelos y agentes.",
      category: "Espacio de trabajo para compañeros de trabajo de IA (autoalojable)",
      openSource: "Sí, MIT (usa CopilotKit Intelligence, con licencia aparte)",
      pricing: "Gratis para proyectos personales; Business hasta $29 por usuario activo al mes",
      runs: "App de escritorio para Mac y Windows; Kubernetes para equipos",
      agents: "Bots integrados o tus propios agentes mediante AG-UI; OpenAI, Claude, Gemini o modelos abiertos",
      board: "No se indica",
      schedule: "Sí: Routines",
      talk: "No se indica",
    },
    "claude-cowork": {
      name: "Claude Cowork",
      href: "https://claude.com/product/cowork",
      what: "el agente de Anthropic para trabajo que no es de programación en las apps de Claude: describes un resultado y él se encarga de la investigación, los documentos, las hojas de cálculo y las presentaciones en tus archivos, tus apps y un navegador.",
      category: "Compañero de trabajo de IA para trabajo del conocimiento",
      openSource: "No",
      pricing: "Planes de pago de Claude: Pro $20/mes, Max $100, Ultra $200; Team y Enterprise por puesto",
      runs: "La nube de Anthropic; archivos locales y navegador a través de Claude Desktop",
      agents: "Modelos de Claude",
      board: "Sin tablero; una lista de tareas y una página Scheduled",
      schedule: "Sí: cada hora, cada día, cada semana o en días laborables, en la nube",
      talk: "Subagentes dentro de una tarea",
    },
    "copilot-cowork": {
      name: "Copilot Cowork",
      href: "https://learn.microsoft.com/en-us/copilot/cowork/",
      what: "un agente de Microsoft 365 Copilot que lleva a cabo tareas de varios pasos en Outlook, Teams, Word, Excel, PowerPoint, OneDrive y SharePoint, con aprobación antes de las acciones sensibles.",
      category: "Compañero de trabajo de IA para Microsoft 365",
      openSource: "No",
      pricing: "Licencia de Microsoft 365 Copilot más Copilot Credits a $0.01 cada uno, con pago por uso",
      runs: "La nube de Microsoft, con archivos de OneDrive y SharePoint",
      agents: "Un selector de modelos con modelos GPT, Claude y Grok, según la configuración del inquilino",
      board: "No se indica",
      schedule: "Sí: prompts programados (hasta 25 por usuario) y disparadores de correo o Teams",
      talk: "No se indica",
    },
    "chatgpt-work": {
      name: "ChatGPT Work",
      href: "https://learn.chatgpt.com/docs/get-started-with-work",
      what: "un modo Work de ChatGPT para tareas que terminan en algo que revisar, como presentaciones, hojas de cálculo y análisis; comparte capacidades básicas y uso con Codex.",
      category: "Compañero de trabajo de IA en ChatGPT",
      openSource: "No",
      pricing: "En los planes de ChatGPT: limitado en Free y Go en la app de escritorio; completo desde Plus a $20/mes",
      runs: "La nube de OpenAI, o tu ordenador a través de la app de escritorio",
      agents: "Modelos de OpenAI",
      board: "No se indica",
      schedule: "Sí: tareas programadas; disparadores de Gmail, Slack o GitHub en los planes aptos",
      talk: "Subagentes dentro de una tarea",
    },
    "cursor-projects": {
      name: "Cursor Projects",
      href: "https://cursor.com/docs/agent/projects",
      what: "una función de Cursor en la que un agente coordinador planifica un trabajo de programación de mayor envergadura y lo delega a muchos agentes en la nube que se ejecutan en paralelo, con notas compartidas y un tablero de tareas.",
      category: "Espacio de trabajo de programación multiagente",
      openSource: "No",
      pricing: "Cursor Premium desde $30/mes, Teams y Enterprise; no en Free ni Plus",
      runs: "Los agentes en la nube de Cursor; un agente local cuando algo tiene que ejecutarse en tu máquina",
      agents: "Los agentes de Cursor; tú eliges el modelo del coordinador",
      board: "Sí: una lista de tareas y un tablero, compartidos en los Multiplayer Projects",
      schedule: "Sí: programaciones, canales de Slack y actividad de pull requests",
      talk: "Sí: el coordinador dirige agentes trabajadores; en los Multiplayer Projects, los coordinadores se escriben entre sí",
    },
    "copilot-studio": {
      name: "Copilot Studio",
      href: "https://learn.microsoft.com/en-us/microsoft-copilot-studio/",
      what: "el estudio low-code de Microsoft para crear agentes, flujos de trabajo y apps y publicarlos en Microsoft Copilot, Teams, sitios web, líneas telefónicas y otros canales.",
      category: "Creador low-code de agentes y flujos de trabajo",
      openSource: "No",
      pricing: "Copilot Credits: $200 al mes por un paquete de 25.000 créditos (con facturación anual), o $0.01 por crédito con pago por uso",
      runs: "La nube de Microsoft, en entornos de Power Platform",
      agents: "Los agentes que creas; eliges un modelo para cada agente, incluidos modelos GPT, Claude y Grok",
      board: "Sin tablero; una pestaña Monitor y una página Workflows",
      schedule: "Sí: disparadores programados y por eventos (SharePoint, correo, Dataverse y más) y flujos de trabajo",
      talk: "Sí: agentes conectados, agentes de Foundry y A2A; un flujo de trabajo puede iniciar una tarea de Copilot Cowork",
    },
    crewmark: {
      name: "Crewmark",
      href: "https://crewmark.ai",
      what: "un gestor de issues para un equipo de empleados de IA: cada uno es una conversación de Claude Code o Codex en tu ordenador con un rol y objetivos, y se despierta con un latido para tomar issues de un tablero compartido.",
      category: "Empleados de IA para Claude Code y Codex (harness multiagente)",
      openSource: "Sí, GPL-3.0",
      pricing: "Gratis: 1 proyecto, hasta 3 empleados de IA; Pro $5 y Team $10 al mes, próximamente",
      runs: "App web; los agentes se ejecutan en tu ordenador en Claude Code o Codex; se puede autoalojar",
      agents: "Claude Code y Codex, con tu propia suscripción",
      board: "Sí: estados, prioridades, responsables, comentarios y @menciones",
      schedule: "Sí: un latido en horario laboral (de 15 minutos a 24 horas) e issues recurrentes",
      talk: "Hoy, a través de issues; los mensajes directos y una cadena de reporte llegarán próximamente",
    },
  },

  pairs: {
    "paperclip-vs-crewai": {
      summary: "Un plano de control autoalojado para una empresa de IA vs un framework multiagente de Python",
      title: "Paperclip vs CrewAI: ¿empresa de IA o framework de agentes?",
      description:
        "Paperclip vs CrewAI: un plano de control autoalojado que dirige tus agentes como una empresa, o un framework de Python para crear crews de agentes.",
      h1: "Paperclip vs CrewAI: dirigir agentes como una empresa o crearlos en código",
      lead: "Paperclip y CrewAI organizan varios agentes de IA, pero en capas distintas. Paperclip es una app autoalojada con organigrama, tareas y presupuestos que controla agentes que ya usas, como Claude Code o Codex. CrewAI es un framework de Python para escribir crews de agentes basados en roles que llaman a LLM a través de una API, con una plataforma comercial para desplegarlos. Así se comparan, dato a dato, y dónde encaja Crewmark.",
      differences: [
        "Capa: Paperclip es una aplicación que ejecutas y gestionas desde una interfaz web; CrewAI es una biblioteca sobre la que escribes código.",
        "Agentes: Paperclip controla agentes existentes como Claude Code, Codex u OpenClaw mediante adaptadores; los agentes de CrewAI se definen en Python con un rol, un objetivo y una historia de fondo (backstory), y llaman a la API de un LLM.",
        "Trabajo: Paperclip tiene tickets vinculados a objetivos y proyectos, asignados a agentes o personas; CrewAI define las tareas dentro de crews y flows en código.",
        "Ejecución programada: Paperclip tiene latidos y Routines basadas en cron; CrewAI indica programación con cron en su plataforma AMP, no en el framework por sí solo.",
      ],
      pickA: [
        "Quieres un organigrama, presupuestos y tickets para agentes que ya ejecutas, como Claude Code o Codex.",
        "Prefieres autoalojar y gestionar el equipo desde una interfaz web en vez de en código.",
      ],
      pickB: [
        "Estás integrando un flujo de trabajo de agentes en tu propia aplicación de Python.",
        "Quieres elegir el modelo y las herramientas de cada agente en código, y desplegar en la plataforma de CrewAI o en tu propia infraestructura.",
      ],
      faq: [
        {
          q: "¿Paperclip es de código abierto?",
          a: "Sí, con licencia MIT, y la versión autoalojada es gratis. Hay una versión en la nube en lista de espera.",
        },
        {
          q: "¿CrewAI es gratis?",
          a: "El framework CrewAI es de código abierto con licencia MIT y gratuito; pagas a tu proveedor de modelos. La plataforma CrewAI AMP tiene un plan Basic gratuito con 50 ejecuciones de flujos de trabajo al mes y un plan Enterprise con precio a medida.",
        },
      ],
    },
    "paperclip-vs-multica": {
      summary: "Una empresa de IA con organigrama vs un tablero de issues para agentes de programación",
      title: "Paperclip vs Multica: ¿organigrama o tablero para tus agentes?",
      description:
        "Paperclip vs Multica: ambos dan trabajo a agentes como Claude Code y Codex. Uno modela una empresa con organigrama y presupuestos; el otro, un tablero de issues.",
      h1: "Paperclip vs Multica: una empresa de IA o un tablero de issues para tus agentes",
      lead: "Paperclip y Multica resuelven un problema parecido: ya tienes agentes de programación como Claude Code y Codex, y quieres pasarles trabajo en un tablero en lugar de en una terminal. Paperclip lo modela todo como una empresa, con organigrama, presupuestos y gobernanza. Multica se queda más cerca de un gestor de issues, con agentes como responsables y un daemon en tu máquina que ejecuta sus CLI. Aquí tienes la comparativa lado a lado y dónde encaja Crewmark.",
      differences: [
        "Modelo: Paperclip da a los agentes cargos, líneas de reporte, descripciones de puesto y presupuestos; Multica da a cada agente un nombre, un proveedor, un runtime e instrucciones, y los agrupa en squads con un agente líder.",
        "Licencia: Paperclip es de código abierto con licencia MIT; Multica tiene el código fuente disponible bajo Apache 2.0 con condiciones adicionales, y es gratis autoalojarlo dentro de tu propia organización.",
        "Alojamiento: Paperclip es autoalojado, con una versión en la nube en lista de espera; Multica ofrece una app en la nube, autoalojamiento y una app de escritorio.",
        "Agentes: Paperclip conecta agentes mediante adaptadores; el daemon de Multica ejecuta 29 CLI de agentes que ya tengas instaladas.",
      ],
      pickA: [
        "Quieres líneas de reporte, presupuestos y aprobaciones para todo un equipo de agentes.",
        "Quieres software con licencia MIT que ejecutes tú mismo.",
      ],
      pickB: [
        "Quieres un tablero de issues donde los agentes sean los responsables, en la nube o autoalojado.",
        "Usas muchas CLI de agentes distintas y las quieres todas en un mismo tablero.",
      ],
      faq: [
        {
          q: "¿Paperclip y Multica funcionan con Claude Code y Codex?",
          a: "Sí. Paperclip los conecta mediante adaptadores, y el daemon de Multica ejecuta sus CLI en una máquina que controlas tú. Los dos admiten además otros agentes.",
        },
        {
          q: "¿Multica es de código abierto?",
          a: "Tiene el código fuente disponible: la Multica License es Apache 2.0 más condiciones adicionales. Usarlo dentro de tu propia organización, incluido el autoalojamiento, es gratis; ofrecerlo como servicio alojado requiere una licencia comercial.",
        },
      ],
    },
    "paperclip-vs-openclaw": {
      summary: "Una empresa de agentes vs un asistente personal (Paperclip puede ejecutar OpenClaw)",
      title: "Paperclip vs OpenClaw: ¿empresa de IA o agente personal?",
      description:
        "Paperclip vs OpenClaw: un asistente personal de IA de código abierto en tu ordenador, o un equipo de agentes, OpenClaw incluido, dirigido como una empresa.",
      h1: "Paperclip vs OpenClaw: una empresa de agentes o un agente personal",
      lead: "El README de Paperclip lo resume así: si OpenClaw es un empleado, Paperclip es la empresa. OpenClaw es un asistente personal de código abierto que se ejecuta en tu máquina y te habla en apps de chat. Paperclip es un plano de control autoalojado con organigrama, tareas y presupuestos que puede controlar OpenClaw, Claude Code, Codex y otros agentes. A menudo se usan juntos. Así se comparan, y dónde encaja Crewmark.",
      differences: [
        "Alcance: OpenClaw es un asistente, o varios agentes aislados en un mismo Gateway, con el que hablas en apps de chat; Paperclip organiza muchos agentes en roles, líneas de reporte y presupuestos.",
        "Trabajo: Paperclip tiene tickets vinculados a objetivos y proyectos; la documentación de OpenClaw dice que se eliminaron su registro compartido de Tasks y TaskFlow, así que no tiene tablero de tareas.",
        "Agentes: OpenClaw se conecta a proveedores de modelos como plugins; Paperclip controla agentes existentes, OpenClaw incluido, mediante adaptadores.",
        "Los dos tienen licencia MIT y son gratis de ejecutar; pagas a tu proveedor de modelos.",
      ],
      pickA: [
        "Ejecutas varios agentes y quieres organizarlos como un equipo con roles, tareas y presupuestos.",
        "Quieres que OpenClaw sea uno de varios empleados y no tu único agente.",
      ],
      pickB: [
        "Quieres un asistente personal que te responda en WhatsApp, Telegram, Slack o iMessage.",
        "Quieres automatizaciones y agentes en tu propio ordenador, sin servicio alojado.",
      ],
      faq: [
        {
          q: "¿Paperclip puede ejecutar OpenClaw?",
          a: "Sí. OpenClaw es uno de los agentes que Paperclip conecta mediante un adaptador, junto a Claude Code, Codex y otros.",
        },
        {
          q: "¿OpenClaw es gratis?",
          a: "Sí. Tiene licencia MIT, y su README dice que no tiene plan de pago, servicio alojado ni token; pagas al proveedor de modelos que conectes.",
        },
      ],
    },
    "paperclip-vs-hermes-agent": {
      summary: "Un plano de control para una empresa de IA vs el agente personal de Nous Research que se mejora a sí mismo",
      title: "Paperclip vs Hermes Agent: ¿empresa de IA o agente que aprende?",
      description:
        "Paperclip vs Hermes Agent: un plano de control autoalojado que dirige agentes como una empresa, o el agente personal de Nous Research con Bots y rutinas.",
      h1: "Paperclip vs Hermes Agent: un equipo de agentes o un agente que aprende",
      lead: "Paperclip y Hermes Agent son de código abierto con licencia MIT, y los dos pueden ejecutar más de un agente, pero parten de extremos opuestos. Hermes Agent es un agente personal de Nous Research que escribe y mejora sus propias skills, con un Bot Mode para varios Bots con nombre. Paperclip es un plano de control que organiza agentes, Hermes incluido, en una empresa con organigrama, tickets y presupuestos. Aquí tienes la comparativa, y dónde encaja Crewmark.",
      differences: [
        "Punto de partida: Hermes Agent es un agente con el que hablas desde una terminal, una app de escritorio o apps de chat; Paperclip es una app web que asigna trabajo a los agentes que conectas.",
        "Trabajo: Paperclip tiene tickets vinculados a objetivos y proyectos; la documentación de Hermes Agent no muestra tablero de tareas ni gestor de issues.",
        "Varios agentes: Paperclip usa roles y líneas de reporte; en el Bot Mode de Hermes Agent cada Bot tiene su propio rol, modelo y memoria, y los Bots se escriben directamente entre sí.",
        "Alojamiento: Paperclip es autoalojado; Hermes Agent se ejecuta en tu máquina o en un servidor, y los planes de pago de Nous Portal incluyen un agente alojado en la nube.",
      ],
      pickA: [
        "Quieres un equipo de agentes distintos (Claude Code, Codex, Hermes y otros) con roles, tickets y presupuestos.",
        "Quieres seguir el trabajo en un tablero en lugar de en chats.",
      ],
      pickB: [
        "Quieres un solo agente que acumule skills y memoria con el tiempo.",
        "Quieres Bots con nombre que hablen entre sí y ejecuten rutinas, desde una terminal, una app de escritorio o apps de chat.",
      ],
      faq: [
        {
          q: "¿Paperclip puede ejecutar Hermes Agent?",
          a: "Sí. Hermes es uno de los agentes que Paperclip incluye entre sus adaptadores.",
        },
        {
          q: "¿Cuánto cuesta Hermes Agent?",
          a: "El agente es gratis y tiene licencia MIT; pagas a tu proveedor de modelos. Una suscripción opcional a Nous Portal tiene los planes Free, Plus ($20 al mes), Super ($100) y Ultra ($200).",
        },
      ],
    },
    "crewai-vs-openclaw": {
      summary: "Un framework para crear crews de agentes vs un asistente personal listo para usar",
      title: "CrewAI vs OpenClaw: ¿framework de agentes o asistente personal?",
      description:
        "CrewAI vs OpenClaw: un framework de Python para crear crews multiagente, o un asistente personal de IA de código abierto que usas desde apps de chat.",
      h1: "CrewAI vs OpenClaw: crear agentes en código o usar un asistente personal",
      lead: "CrewAI y OpenClaw implican varios agentes trabajando juntos, pero se usan de forma muy distinta. CrewAI es un framework de Python: escribes crews de agentes basados en roles y flows, y los despliegas en su plataforma AMP o en tus propios servidores. OpenClaw es un asistente personal ya terminado que se ejecuta en tu ordenador y te responde en WhatsApp, Telegram, Slack y otras apps de chat. Aquí tienes la comparativa, y dónde encaja Crewmark.",
      differences: [
        "Qué haces tú: con CrewAI escribes Python; con OpenClaw instalas y configuras un asistente.",
        "Dónde le hablas: CrewAI se ejecuta dentro de tu aplicación; OpenClaw te responde en las apps de chat que ya usas.",
        "Varios agentes: los agentes de CrewAI delegan trabajo y se hacen preguntas entre sí, con un agente manager en modo jerárquico; OpenClaw ejecuta varios agentes aislados en un mismo Gateway, con un preset de equipo que tiene un coordinador.",
        "Los dos tienen licencia MIT. La plataforma AMP de CrewAI es comercial; OpenClaw no tiene plan de pago.",
      ],
      pickA: [
        "Eres desarrollador y estás integrando un flujo de trabajo multiagente en un producto.",
        "Quieres desplegar y supervisar crews en una plataforma gestionada.",
      ],
      pickB: [
        "Quieres un asistente personal ya, sin escribir código.",
        "Lo quieres en tu propia máquina, accesible desde el móvil a través de apps de chat.",
      ],
      faq: [
        {
          q: "¿Cuál le va mejor a alguien que no programa, CrewAI u OpenClaw?",
          a: "OpenClaw se instala y se configura, y le hablas en apps de chat. CrewAI es una biblioteca de Python, así que está pensada para desarrolladores que integran agentes en su propio software.",
        },
        {
          q: "¿CrewAI y OpenClaw son de código abierto?",
          a: "Los dos tienen licencia MIT. La plataforma AMP de CrewAI es un producto comercial aparte; OpenClaw no tiene plan de pago ni servicio alojado.",
        },
      ],
    },
    "crewai-vs-langgraph": {
      summary: "Crews basadas en roles vs orquestación basada en grafos, ambos frameworks de código abierto",
      title: "CrewAI vs LangGraph: frameworks multiagente comparados (2026)",
      description:
        "CrewAI vs LangGraph: crews y flows basados en roles, o grafos de estado, nodos y aristas. Licencias, CrewAI AMP, LangSmith, cron y patrones multiagente.",
      h1: "CrewAI vs LangGraph: dos formas de código abierto de crear sistemas multiagente",
      lead: "CrewAI y LangGraph son los dos frameworks que más se comparan para crear sistemas multiagente en código. CrewAI organiza los agentes como crews con roles, objetivos e historias de fondo, más flows basados en eventos. LangGraph te hace definir un flujo de trabajo como un grafo de estado compartido, nodos y aristas, y no impone ninguna arquitectura de agentes. Los dos tienen licencia MIT, y cada empresa vende una plataforma alojada. Aquí tienes la comparativa, y dónde encaja Crewmark.",
      differences: [
        "Abstracción: CrewAI parte de agentes con un rol, un objetivo y una historia de fondo; LangGraph parte de un grafo de estado y nodos, y no impone prompts ni arquitectura de agentes.",
        "Lenguajes: CrewAI es Python; LangGraph tiene bibliotecas para Python y JavaScript/TypeScript.",
        "Plataforma alojada: CrewAI AMP tiene un plan Basic gratuito (50 ejecuciones de flujos de trabajo al mes) y un plan Enterprise a medida; LangSmith tiene un plan Developer gratuito, Plus a $39 por puesto al mes y un plan Enterprise a medida.",
        "Ejecución programada: los dos indican tareas cron en sus plataformas alojadas, no en la biblioteca de código abierto por sí sola.",
      ],
      pickA: [
        "Quieres describir los agentes por rol y objetivo y dejar que deleguen entre sí.",
        "Trabajas en Python y quieres un Studio sin código en la parte de la plataforma.",
      ],
      pickB: [
        "Quieres un control detallado del estado y del camino entre pasos.",
        "Trabajas en JavaScript o TypeScript además de Python, o ya usas LangSmith.",
      ],
      faq: [
        {
          q: "¿LangGraph requiere LangChain?",
          a: "No. Lo crea LangChain, Inc., pero su documentación dice que LangGraph no requiere LangChain. LangSmith añade trazas, evaluación y despliegue.",
        },
        {
          q: "¿CrewAI y LangGraph son gratis?",
          a: "Los dos frameworks son gratuitos y tienen licencia MIT. Sus plataformas alojadas, CrewAI AMP y LangSmith, tienen cada una un plan gratuito además de planes de pago o a medida.",
        },
      ],
    },
    "crewai-vs-autogen": {
      summary: "Dos frameworks multiagente; el README de AutoGen dice que está archivado",
      title: "CrewAI vs AutoGen: frameworks multiagente comparados (2026)",
      description:
        "CrewAI vs AutoGen: crews y flows basados en roles, o los chats grupales de Microsoft, ya archivado en favor de Microsoft Agent Framework. Licencias y estado.",
      h1: "CrewAI vs AutoGen: crews y flows vs chats grupales, y quién los mantiene",
      lead: "CrewAI y AutoGen fueron dos de las primeras formas populares de poner a varios agentes de LLM a trabajar juntos en código. CrewAI lo desarrolla crewAI, Inc., con una plataforma comercial al lado. El README de AutoGen dice ahora que está archivado y que Microsoft ya no lo mantiene, y remite a los nuevos usuarios a Microsoft Agent Framework, que Microsoft llama su sucesor directo. Aquí tienes la comparativa, y dónde encaja Crewmark.",
      differences: [
        "Mantenimiento: CrewAI está en desarrollo activo; el README de AutoGen dice que está archivado y que Microsoft ya no lo mantiene activamente, sin correcciones de errores ni de seguridad.",
        "Patrones: CrewAI tiene crews de agentes basados en roles y flows; AutoGen tiene chats grupales, equipos selector y swarm, y paso de mensajes basado en eventos.",
        "Lenguajes: CrewAI es Python; AutoGen tiene Python y .NET.",
        "Alojamiento: CrewAI AMP despliega y ejecuta crews; AutoGen no tiene servicio alojado, y AutoGen Studio se ejecuta en local.",
      ],
      pickA: [
        "Empiezas un proyecto multiagente nuevo y quieres un framework con mantenimiento y una opción alojada.",
        "Quieres agentes basados en roles que se deleguen trabajo entre sí.",
      ],
      pickB: [
        "Mantienes una aplicación de AutoGen existente y necesitas saber qué estás ejecutando antes de migrar.",
        "Estás valorando Microsoft Agent Framework y quieres compararlo con su predecesor.",
      ],
      faq: [
        {
          q: "¿AutoGen sigue teniendo mantenimiento?",
          a: "Su README dice que el proyecto está archivado y que Microsoft ya no lo mantiene activamente, y recomienda Microsoft Agent Framework, que Microsoft Learn llama el sucesor directo de AutoGen.",
        },
        {
          q: "¿CrewAI es gratis?",
          a: "El framework tiene licencia MIT y es gratuito. La plataforma CrewAI AMP tiene un plan Basic gratuito y un plan Enterprise con precio a medida.",
        },
      ],
    },
    "multica-vs-hermes-agent": {
      summary: "Un tablero de issues para CLI de agentes vs un agente personal con Bots y rutinas",
      title: "Multica vs Hermes Agent: ¿tablero de agentes o agente personal?",
      description:
        "Multica vs Hermes Agent: un tablero de issues donde las CLI de agentes (Hermes entre ellas) reciben tareas, o el agente personal de Nous Research que aprende.",
      h1: "Multica vs Hermes Agent: un tablero para tus agentes o el propio agente",
      lead: "Multica y Hermes Agent están en capas distintas. Hermes Agent es un agente: el asistente personal de código abierto de Nous Research que aprende skills de la experiencia y puede ejecutar Bots con nombre. Multica es el tablero que rodea a los agentes: asignas issues, y un daemon en tu máquina ejecuta la CLI de agente que elijas, Hermes incluido. Aquí tienes la comparativa, y dónde encaja Crewmark.",
      differences: [
        "Capa: Multica asigna el trabajo y hace su seguimiento; Hermes Agent hace el trabajo.",
        "Seguimiento del trabajo: Multica tiene vistas de tablero y de lista con agentes como responsables; la documentación de Hermes Agent no muestra tablero de tareas.",
        "Ejecución programada: los Autopilots de Multica se ejecutan con cron o webhooks y crean issues; Hermes Agent tiene un programador cron integrado y rutinas por Bot.",
        "Licencia: Hermes Agent es MIT; Multica tiene el código fuente disponible, y es gratis autoalojarlo dentro de tu propia organización.",
      ],
      pickA: [
        "Quieres issues, proyectos y revisiones para varios agentes, quizá Hermes entre ellos.",
        "Tu equipo de personas y agentes trabaja desde un mismo tablero.",
      ],
      pickB: [
        "Quieres un solo agente que conserve memoria y mejore sus propias skills.",
        "Prefieres hablar con tu agente en una terminal, una app de escritorio o una app de chat antes que gestionar un tablero.",
      ],
      faq: [
        {
          q: "¿Multica es compatible con Hermes Agent?",
          a: "Sí. Hermes es una de las 29 CLI de agentes que puede ejecutar el daemon de Multica.",
        },
        {
          q: "¿Hermes Agent puede ejecutarse según una programación?",
          a: "Sí. Tiene un programador cron integrado, y en Bot Mode cada Bot puede tener rutinas.",
        },
      ],
    },
    "multica-vs-linear": {
      summary: "Dos gestores de issues con agentes como responsables: uno para CLI de agentes, otro para equipos de producto",
      title: "Multica vs Linear: gestión de issues para agentes de IA",
      description:
        "Multica vs Linear: los dos asignan issues a agentes de IA. Multica ejecuta CLI de agentes en tu máquina; Linear es un gestor alojado con Linear Agent.",
      h1: "Multica vs Linear: dónde toman sus issues tus agentes",
      lead: "Linear es el gestor de issues que muchos equipos de producto ya usan, y ahora te permite delegar issues en Linear Agent, en un agente de programación en la nube basado en Claude Code o Codex y en agentes de terceros. Multica está pensado para agentes desde el principio: un tablero de issues donde un daemon en tu propia máquina ejecuta las CLI de agentes que tienes instaladas. Así se comparan, y dónde encaja Crewmark.",
      differences: [
        "Dónde se ejecutan los agentes: el daemon de Multica ejecuta CLI de agentes en un portátil o servidor que controlas tú; el agente de programación de Linear se ejecuta en la nube de Linear.",
        "Asignación: en Multica, el agente es el responsable; en Linear, al delegar, la persona sigue como responsable principal y el agente se añade como colaborador.",
        "Trabajo recurrente: los Autopilots de Multica se ejecutan con cron o webhooks; los Loops de Linear se ejecutan según una programación o por eventos, y se cobran de los créditos de IA.",
        "Alojamiento y precio: Multica se puede autoalojar (código fuente disponible); Linear solo es alojado, con Free, Basic ($10) y Business ($16) por usuario al mes, con facturación anual.",
      ],
      pickA: [
        "Quieres que los agentes se ejecuten en tu propio hardware con las CLI y los inicios de sesión que ya tienes.",
        "Quieres autoalojar el tablero.",
      ],
      pickB: [
        "Tu equipo ya planifica en Linear y quiere los agentes dentro del mismo gestor.",
        "Prefieres que el agente de programación se ejecute en la nube del proveedor.",
      ],
      faq: [
        {
          q: "¿Linear puede asignar issues a agentes de IA?",
          a: "Sí. Puedes delegar issues en Linear Agent, en un agente de programación en la nube que usa Claude Code o Codex, y en agentes de terceros como Cursor, Codex y Devin instalados en tu espacio de trabajo.",
        },
        {
          q: "¿Cuánto cuesta Linear?",
          a: "Free cuesta $0, con 2 equipos y 250 issues. Basic cuesta $10 y Business $16 por usuario al mes, con facturación anual. El agente de programación en la nube y los Loops también consumen créditos de IA prepagados.",
        },
      ],
    },
    "openclaw-vs-claude-code": {
      summary: "Un asistente personal en tus apps de chat vs el agente de programación de Anthropic",
      title: "OpenClaw vs Claude Code: ¿asistente o agente de programación?",
      description:
        "OpenClaw vs Claude Code: un asistente personal de código abierto que te responde en apps de chat, o el agente de programación de Anthropic. Precio y modelos.",
      h1: "OpenClaw vs Claude Code: un asistente en tus chats o un agente en tu código",
      lead: "OpenClaw y Claude Code son agentes que se ejecutan en tu propio ordenador, y OpenClaw incluso puede reutilizar un inicio de sesión de Claude Code para acceder a los modelos de Claude. Están hechos para trabajos distintos. OpenClaw es un asistente personal al que llegas por WhatsApp, Telegram, Slack o iMessage. Claude Code es el agente de programación de Anthropic: lee tu código, edita archivos y ejecuta comandos. Aquí tienes la comparativa, y dónde encaja Crewmark.",
      differences: [
        "Trabajo: OpenClaw se encarga de tareas personales y automatizaciones a través de apps de chat; Claude Code trabaja en un repositorio de código desde la terminal, un IDE, la app de escritorio o la web.",
        "Modelos: OpenClaw se conecta a muchos proveedores como plugins, Claude entre ellos; Claude Code funciona con modelos de Claude.",
        "Precio y licencia: OpenClaw tiene licencia MIT y es gratis (pagas al proveedor de modelos); Claude Code está incluido en los planes de pago de Claude desde $20 al mes y no es de código abierto.",
        "Ejecución programada: OpenClaw tiene un programador de Automations integrado; Claude Code tiene tareas programadas en la nube y de escritorio, y `/loop`.",
      ],
      pickA: [
        "Quieres un asistente al que escribir desde el móvil para tareas personales y automatizaciones.",
        "Quieres combinar proveedores de modelos, incluidos modelos locales.",
      ],
      pickB: [
        "Tu trabajo está en un código base: funcionalidades, correcciones, revisiones y refactorizaciones.",
        "Ya pagas un plan de Claude.",
      ],
      faq: [
        {
          q: "¿OpenClaw puede usar Claude?",
          a: "Sí, con una clave de API de Anthropic o reutilizando un inicio de sesión de Claude Code en la misma máquina.",
        },
        {
          q: "¿Claude Code es gratis?",
          a: "No. Está incluido en los planes de pago de Claude (Pro, Max, Ultra, Team y Enterprise), no en Free.",
        },
      ],
    },
    "hermes-agent-vs-claude-code": {
      summary: "El agente personal de Nous Research que se mejora a sí mismo vs el agente de programación de Anthropic",
      title: "Hermes Agent vs Claude Code: ¿agente personal o de programación?",
      description:
        "Hermes Agent vs Claude Code: el agente de código abierto de Nous Research que aprende skills y ejecuta Bots, o el agente de programación de Anthropic.",
      h1: "Hermes Agent vs Claude Code: un agente personal que aprende o un agente de programación",
      lead: "Hermes Agent y Claude Code se ejecutan en tu máquina, los dos tienen subagentes y programaciones, y los dos pueden trabajar con modelos de Claude. La diferencia está en el enfoque. Hermes Agent, de Nous Research, es un agente personal con un ciclo de aprendizaje: escribe skills a partir de la experiencia y mantiene su propia memoria, con cualquier proveedor de modelos. Claude Code es el agente de programación de Anthropic para trabajar en un código base. Aquí tienes la comparativa, y dónde encaja Crewmark.",
      differences: [
        "Enfoque: Hermes Agent es un agente personal de uso general; Claude Code está hecho para programar.",
        "Modelos: Hermes Agent funciona con muchos proveedores, y su documentación dice que una suscripción de Claude solo funciona en Max con uso adicional comprado; Claude Code funciona con modelos de Claude.",
        "Varios agentes: los Bots de Hermes Agent se escriben directamente entre sí; en los agent teams experimentales de Claude Code, los compañeros se escriben entre sí.",
        "Precio y licencia: Hermes Agent es MIT y gratis, con una suscripción opcional a Nous Portal; Claude Code viene con los planes de pago de Claude y no es de código abierto.",
      ],
      pickA: [
        "Quieres un solo agente para muchos tipos de tareas que mejore sus skills con el tiempo.",
        "Quieres elegir y cambiar de proveedor de modelos libremente.",
      ],
      pickB: [
        "Tu trabajo principal está en un código base.",
        "Quieres las herramientas de Anthropic a su alrededor: extensiones de IDE, una app de escritorio, revisión de código y tareas programadas.",
      ],
      faq: [
        {
          q: "¿Hermes Agent puede usar mi suscripción de Claude?",
          a: "Su documentación dice que la vía de la suscripción de Claude solo funciona en Claude Max con uso adicional comprado, y no en Claude Pro. También puedes usar Claude con una clave de API.",
        },
        {
          q: "¿Claude Code aprende nuevas skills como Hermes Agent?",
          a: "Claude Code usa skills escritas por ti o por tu equipo como archivos SKILL.md, y mantiene una memoria automática (auto memory). El enfoque declarado de Hermes Agent es escribir y mejorar skills a partir de su propia experiencia.",
        },
      ],
    },
    "openclaw-vs-opencode": {
      summary: "Un asistente personal vs un agente de programación de código abierto, ambos MIT y compatibles con cualquier modelo",
      title: "OpenClaw vs OpenCode: ¿asistente o agente de programación?",
      description:
        "OpenClaw vs OpenCode: dos agentes MIT para cualquier modelo. Uno es un asistente personal en tus apps de chat; el otro, un agente de programación.",
      h1: "OpenClaw vs OpenCode: nombres parecidos, trabajos distintos",
      lead: "OpenClaw y OpenCode son de código abierto con licencia MIT, los dos se ejecutan en tu propia máquina y los dos funcionan con muchos proveedores de modelos, y por eso se comparan. Hacen trabajos distintos. OpenClaw es un asistente personal con el que hablas en WhatsApp, Telegram, Slack y otras apps de chat. OpenCode es un agente de programación con interfaz de terminal, app de escritorio, app web y SDK. Aquí tienes la comparativa, y dónde encaja Crewmark.",
      differences: [
        "Trabajo: OpenClaw ejecuta tareas personales y automatizaciones desde el chat; OpenCode escribe y modifica código.",
        "Interfaz: OpenClaw responde en apps de chat y tiene una Control UI; OpenCode funciona como interfaz de terminal, app de escritorio, app web y SDK.",
        "Opciones de pago: OpenClaw no tiene plan de pago; OpenCode es gratis, con modelos gratuitos, y ofrece OpenCode Go a $10 al mes y Go Plus a $40.",
        "Ejecución programada: OpenClaw tiene un programador integrado; las programaciones de OpenCode son experimentales y hay que activarlas.",
      ],
      pickA: [
        "Quieres un asistente al que escribir desde cualquier lugar.",
        "Quieres automatizaciones que se activen con programaciones, webhooks o correo electrónico.",
      ],
      pickB: [
        "Quieres un agente de programación de código abierto que funcione con más de 200 proveedores de modelos, incluidos los locales.",
        "Quieres empezar a programar con modelos gratuitos y sin cuenta.",
      ],
      faq: [
        {
          q: "¿OpenClaw y OpenCode son el mismo proyecto?",
          a: "No. OpenClaw es un asistente personal de la OpenClaw Foundation; OpenCode es un agente de programación de Anomaly. Los dos tienen licencia MIT.",
        },
        {
          q: "¿Necesito una clave de API para OpenCode?",
          a: "No para empezar: incluye modelos gratuitos con un límite diario y no necesitas cuenta para usarlos. También puedes conectar tus propios proveedores o suscribirte a OpenCode Go.",
        },
      ],
    },
    "claude-code-agent-teams-vs-openclaw": {
      summary: "Los agent teams experimentales de Claude Code vs el Gateway multiagente de OpenClaw",
      title: "Claude Code Agent Teams vs OpenClaw: configuraciones multiagente",
      description:
        "Claude Code agent teams vs OpenClaw: un modo experimental de líder y compañeros en Claude Code, o varios agentes personales en un Gateway de OpenClaw.",
      h1: "Claude Code agent teams vs OpenClaw: dos formas de ejecutar varios agentes",
      lead: "Los dos te dan más de un agente trabajando en conjunto. Los agent teams de Claude Code son una función experimental, desactivada por defecto, en la que una sesión líder crea compañeros: instancias separadas de Claude Code que comparten una lista de tareas y se escriben entre sí. OpenClaw ejecuta varios agentes aislados en un mismo Gateway en tu máquina, con un preset de equipo en el que un coordinador delega en agentes investigador, redactor y revisor. Aquí tienes la comparativa, y dónde encaja Crewmark.",
      differences: [
        "Propósito: los agent teams reparten una tarea de programación entre instancias de Claude Code; los agentes de OpenClaw son asistentes personales a los que llegas por apps de chat.",
        "Coordinación: los agent teams comparten una lista de tareas con dependencias, y los compañeros se escriben entre sí; los agentes de OpenClaw pueden acceder a las sesiones de los demás, y su documentación describe el preset de equipo como una guía de prompts y no como un planificador.",
        "Vida útil: un agent team funciona para una tarea bajo una sesión líder; los agentes de OpenClaw viven en el Gateway y ejecutan automatizaciones programadas.",
        "Coste: los agent teams vienen con Claude Code en los planes de pago de Claude; OpenClaw es gratis y tiene licencia MIT.",
      ],
      pickA: [
        "Quieres que varias instancias de Claude Code se repartan una tarea de programación grande y hablen entre sí.",
        "Ya usas Claude Code y no te importa activar una función experimental.",
      ],
      pickB: [
        "Quieres agentes personales de larga duración con sus propias personalidades en tu máquina.",
        "Quieres llegar a ellos a través de apps de chat y ejecutarlos según una programación.",
      ],
      faq: [
        {
          q: "¿Cómo activo los agent teams de Claude Code?",
          a: "Son experimentales y vienen desactivados por defecto: define `CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1` y una sesión líder podrá crear compañeros. Consulta [los agent teams de Claude Code](/blog/claude-code-agent-teams).",
        },
        {
          q: "¿Los agentes de OpenClaw pueden trabajar como equipo?",
          a: "Sí. Un Gateway puede ejecutar varios agentes aislados, y un preset de equipo crea un coordinador más agentes investigador, redactor y revisor.",
        },
      ],
    },
    "vibe-kanban-vs-conductor": {
      summary: "Dos herramientas de agentes de programación en paralelo cuyas empresas cerraron sus servicios alojados en 2026",
      title: "Vibe Kanban vs Conductor: agentes de programación paralelos (2026)",
      description:
        "Vibe Kanban vs Conductor: un tablero kanban de código abierto para agentes de programación, o una app de Mac que se une a Meta y cerró los registros.",
      h1: "Vibe Kanban vs Conductor: qué queda de cada uno y cómo se comparan",
      lead: "Vibe Kanban y Conductor ejecutan varios agentes de programación en paralelo, cada uno en su propio worktree de git, para que puedas revisar y fusionar su trabajo. Los dos cambiaron en 2026. bloop, la empresa detrás de Vibe Kanban, cerró en abril, y el proyecto sigue como código abierto mantenido por la comunidad. Conductor anunció el 4 de noviembre que se une a Meta: los nuevos registros y las descargas están cerrados, su nube pasa a solo lectura el 13 de noviembre y se cierra el 20 de noviembre, y la app de Mac recibe modelos nuevos y correcciones críticas hasta principios de 2027. Aquí tienes la comparativa, y dónde encaja Crewmark.",
      differences: [
        "Disponibilidad: cualquiera puede ejecutar gratis la app local de Vibe Kanban; Conductor ya no acepta nuevos registros ni descargas.",
        "Tablero: Vibe Kanban planifica el trabajo como issues kanban; Conductor muestra una lista de workspaces y puede crear uno a partir de una issue de GitHub o Linear.",
        "Licencia: Vibe Kanban es de código abierto con licencia Apache-2.0; Conductor es de código cerrado.",
        "Plataforma y agentes: Vibe Kanban se ejecuta en tu navegador o como app de escritorio; Conductor es una app de Mac. Los dos ejecutan Claude Code, Codex, Cursor y OpenCode, y Vibe Kanban también incluye Gemini CLI, GitHub Copilot, Amp y otros.",
      ],
      pickA: [
        "Quieres una herramienta de código abierto que puedas seguir ejecutando y modificar.",
        "Quieres un tablero kanban delante de tus agentes.",
      ],
      pickB: [
        "Ya usas Conductor en un Mac y solo necesitas la app local.",
        "No te importa que las funciones en la nube terminen el 20 de noviembre de 2026.",
      ],
      faq: [
        {
          q: "¿Conductor va a cerrar?",
          a: "Conductor anunció el 4 de noviembre de 2026 que se une a Meta. Los nuevos registros y las descargas están cerrados, su nube pasa a solo lectura el 13 de noviembre y se cierra el 20 de noviembre, y la app de Mac recibe modelos nuevos y correcciones críticas hasta principios de 2027. Consulta [alternativas a Conductor](/blog/conductor-alternatives).",
        },
        {
          q: "¿Vibe Kanban sigue teniendo mantenimiento?",
          a: "bloop anunció el 10 de abril de 2026 que cerraba. El proyecto sigue como código abierto con licencia Apache-2.0, mantenido por su comunidad, y la app local se puede ejecutar gratis.",
        },
      ],
    },
    "claude-squad-vs-conductor": {
      summary: "Agentes de programación en paralelo: una app de terminal de código abierto vs una app de Mac que se une a Meta",
      title: "Claude Squad vs Conductor: agentes de Claude Code en paralelo",
      description:
        "Claude Squad vs Conductor: app de terminal de código abierto con tmux y worktrees, o app de Mac que se une a Meta y cierra su nube el 20 de noviembre de 2026.",
      h1: "Claude Squad vs Conductor: terminal o app de Mac para agentes en paralelo",
      lead: "Claude Squad y Conductor hacen el mismo trabajo básico: ejecutar varios agentes de programación a la vez, cada uno en su propia rama en un worktree de git, y ayudarte a revisar y fusionar los resultados. Claude Squad es una app de terminal de código abierto basada en tmux. Conductor es una app de Mac de código cerrado que anunció el 4 de noviembre de 2026 que se une a Meta, y ya no admite nuevos usuarios. Así se comparan, y dónde encaja Crewmark.",
      differences: [
        "Interfaz: Claude Squad es una interfaz de terminal que necesita tmux y la CLI de GitHub; Conductor es una app de escritorio para Mac.",
        "Licencia: Claude Squad es de código abierto con licencia AGPL-3.0; Conductor es de código cerrado.",
        "Agentes: Claude Squad usa Claude Code por defecto y puede ejecutar Codex, Gemini, Aider o cualquier programa que configures; Conductor ejecuta Claude Code, Codex, OpenCode y Cursor Agent.",
        "Estado: la última versión de Claude Squad es la v1.0.20 (agosto de 2026); Conductor cerró los nuevos registros y las descargas el 4 de noviembre de 2026, cierra su nube el 20 de noviembre y actualiza su app de Mac hasta principios de 2027.",
      ],
      pickA: [
        "Vives en la terminal y quieres una herramienta de código abierto que cualquiera pueda instalar.",
        "Quieres ejecutar cualquier agente de CLI que puedas configurar.",
      ],
      pickB: [
        "Ya usas Conductor y prefieres una app de escritorio con diffs y pull requests integrados.",
        "Usas un Mac y solo necesitas la app local hasta principios de 2027.",
      ],
      faq: [
        {
          q: "¿Claude Squad es gratis?",
          a: "Sí. Es de código abierto con licencia AGPL-3.0; pagas los agentes o las API de modelos que ejecutes con él.",
        },
        {
          q: "¿Todavía puedo descargar Conductor?",
          a: "No como usuario nuevo: Conductor cerró los registros y las descargas el 4 de noviembre de 2026, cuando anunció que se une a Meta. Los usuarios actuales conservan la app de Mac, que recibe actualizaciones hasta principios de 2027.",
        },
      ],
    },
    "devin-vs-claude-code": {
      summary: "El ingeniero de software de IA en la nube de Cognition vs el agente de programación de Anthropic",
      title: "Devin vs Claude Code: ¿ingeniero de IA o agente de programación?",
      description:
        "Devin vs Claude Code: el ingeniero de IA de Cognition con VM en la nube, Automations y sesiones hijas, o el agente de programación de Anthropic.",
      h1: "Devin vs Claude Code: un ingeniero en la nube o un agente a tu lado",
      lead: "Devin y Claude Code son agentes de programación que escriben, ejecutan y prueban código y abren pull requests. Devin, de Cognition, se centra en sesiones en la nube, cada una en su propia máquina virtual, con Automations y un coordinador que ejecuta Devins hijos; también tiene una app de escritorio y una CLI. Claude Code, de Anthropic, trabaja en tu terminal, tu IDE, la app de escritorio o la web, con modelos de Claude. Aquí tienes la comparativa, y dónde encaja Crewmark.",
      differences: [
        "Dónde se ejecuta: cada sesión de Devin en la nube tiene su propia VM; Claude Code se ejecuta en local por defecto, con sesiones en la nube en la web.",
        "Modelos: Devin usa SWE-2 de Cognition más modelos de frontera de varios laboratorios, elegidos por un router; Claude Code funciona con modelos de Claude.",
        "Precio: Devin tiene Free, Pro a $20 y Max a $200 al mes, y Teams a $80 al mes más $40 por puesto de desarrollador; Claude Code viene con Claude Pro ($20), Max ($100), Ultra ($200), Team y Enterprise.",
        "Automatización: las Automations de Devin se ejecutan según programaciones y con eventos de Slack, GitHub, Linear y más; las tareas programadas en la nube de Claude Code se ejecutan según una programación, una llamada a la API o un evento de GitHub.",
      ],
      pickA: [
        "Quieres cada tarea en su propia VM en la nube, iniciada desde Slack, Linear o Jira.",
        "Quieres una sesión coordinadora que ejecute sesiones hijas y les escriba.",
      ],
      pickB: [
        "Quieres que el agente trabaje en tu propio checkout y tu terminal.",
        "Ya pagas un plan de Claude y quieres extensiones de IDE, una app de escritorio y la web.",
      ],
      faq: [
        {
          q: "¿Cuánto cuesta Devin?",
          a: "Free cuesta $0, Pro $20 al mes, Max $200 al mes y Teams $80 al mes más $40 al mes por cada puesto de desarrollador completo, hasta 100 usuarios; Enterprise es bajo presupuesto.",
        },
        {
          q: "¿Claude Code está incluido en Claude Pro?",
          a: "Sí. Claude Code está incluido en todos los planes de pago de Claude: Pro, Max, Ultra, Team y Enterprise.",
        },
      ],
    },
    "devin-vs-codex": {
      summary: "El ingeniero de software de IA de Cognition vs el agente de programación de OpenAI",
      title: "Devin vs Codex: ingenieros de software de IA comparados (2026)",
      description:
        "Devin vs OpenAI Codex: VM en la nube, Automations y sesiones hijas, o un agente en la CLI, el IDE, la app de ChatGPT y la nube. Precios, licencia y modelos.",
      h1: "Devin vs Codex: dos agentes de programación que también trabajan en la nube",
      lead: "Devin y Codex ejecutan tareas de programación en local y en la nube, y abren pull requests. Devin, de Cognition, da a cada sesión en la nube su propia máquina virtual y añade Automations y sesiones coordinadoras. Codex, de OpenAI, viene con los planes de ChatGPT y funciona en una CLI de terminal, una extensión de IDE, la app de escritorio de ChatGPT y Codex Cloud. Aquí tienes la comparativa, y dónde encaja Crewmark.",
      differences: [
        "Precios: Devin se vende con sus propios planes (Free, Pro $20, Max $200, Teams); Codex está incluido en los planes de ChatGPT desde Plus a $20 al mes, o se usa con una clave de API.",
        "Código abierto: la CLI, el SDK y el App Server de Codex son Apache-2.0; Devin no es de código abierto.",
        "Modelos: Devin alterna entre SWE-2 de Cognition y modelos de frontera; Codex funciona con modelos de OpenAI.",
        "Ejecución programada: las Automations de Devin se ejecutan según programaciones y con muchas fuentes de eventos; Codex tiene tareas programadas en la app de escritorio de ChatGPT y en la web.",
      ],
      pickA: [
        "Quieres que muchas fuentes de eventos (Slack, Teams, Jira, PagerDuty, webhooks) inicien trabajo.",
        "Quieres un coordinador que ejecute sesiones hijas en VM paralelas.",
      ],
      pickB: [
        "Ya pagas ChatGPT y quieres el agente en tu terminal y tu IDE.",
        "Quieres una CLI de código abierto que puedas inspeccionar.",
      ],
      faq: [
        {
          q: "¿Codex es gratis?",
          a: "Codex está incluido en los planes de pago de ChatGPT desde Plus ($20 al mes) y también puede funcionar con una clave de API de OpenAI. La propia CLI es de código abierto con licencia Apache-2.0.",
        },
        {
          q: "¿Devin y Codex pueden tomar issues de Linear?",
          a: "Sí. Puedes asignar issues de Linear a Devin, y en los planes de pago de ChatGPT puedes asignar issues de Linear a Codex o mencionarlo en un comentario.",
        },
      ],
    },
    "factory-vs-claude-code": {
      summary: "La plataforma Droids de Factory vs el agente de programación de Anthropic",
      title: "Factory vs Claude Code: ¿Droids o Claude Code?",
      description:
        "Factory (Droids) vs Claude Code: agentes de programación con Automations, Workstreams y ordenadores en la nube, o el agente de Anthropic. Modelos y precios.",
      h1: "Factory vs Claude Code: la plataforma Droids o el agente de Anthropic",
      lead: "Factory y Claude Code son agentes de programación con app de escritorio, CLI y un modo headless para CI. Los Droids de Factory funcionan con muchos modelos, incluidas tus propias claves, y añaden Automations, Workstreams con un orquestador y ordenadores en la nube alojados por Factory. Claude Code es el agente de Anthropic con modelos de Claude, incluido en los planes de pago de Claude. Aquí tienes la comparativa, y dónde encaja Crewmark.",
      differences: [
        "Modelos: Factory funciona con modelos de frontera y de pesos abiertos y con tus propias claves; Claude Code funciona con modelos de Claude.",
        "Precio: Factory tiene Free (con tu propia inferencia), Pro a $20, Plus a $100 al mes y planes superiores; Claude Code viene con Claude Pro ($20), Max ($100), Ultra ($200), Team y Enterprise.",
        "Varios agentes: en Workstreams (beta) de Factory, los agentes de un orquestador le informan; en los agent teams experimentales de Claude Code, los compañeros se escriben entre sí.",
        "Automatización: las Automations de Factory se ejecutan según una programación, Slack, GitHub o webhooks; Claude Code tiene tareas programadas en la nube y GitHub Actions.",
      ],
      pickA: [
        "Quieres cambiar entre modelos de distintos laboratorios, o usar los tuyos.",
        "Quieres ordenadores alojados en la nube y automatizaciones como pasar de ticket a PR según una programación.",
      ],
      pickB: [
        "Estás a gusto con los modelos de Claude y ya pagas un plan de Claude.",
        "Quieres las herramientas de Anthropic a su alrededor: revisión de código, revisión de seguridad y plugins.",
      ],
      faq: [
        {
          q: "¿Qué son los Droids de Factory?",
          a: "Los Droids son los agentes de programación de Factory. Se ejecutan en la app de escritorio de Factory, en la Droid CLI, headless en CI con `droid exec` y en ordenadores en la nube alojados por Factory.",
        },
        {
          q: "¿Factory funciona con modelos de Claude?",
          a: "Factory dice que admite los principales modelos de frontera, incluidos Claude Opus y Sonnet, además de modelos de pesos abiertos y tus propias claves de API.",
        },
      ],
    },
    "opencode-vs-claude-code": {
      summary: "Un agente de programación de código abierto para cualquier modelo vs el agente de programación de Anthropic",
      title: "OpenCode vs Claude Code: agente de programación de código abierto",
      description:
        "OpenCode vs Claude Code: un agente de programación MIT con más de 200 proveedores de modelos y modelos gratuitos, o el agente de Anthropic en planes de Claude.",
      h1: "OpenCode vs Claude Code: código abierto y cualquier modelo, o el agente de Anthropic",
      lead: "OpenCode y Claude Code son agentes de programación con interfaz de terminal, app de escritorio, subagentes y MCP. OpenCode es de código abierto con licencia MIT y funciona con modelos de más de 200 proveedores, incluidos modelos locales y un conjunto de modelos gratuitos. Claude Code es el agente de Anthropic con modelos de Claude, incluido en los planes de pago de Claude. Aquí tienes la comparativa, y dónde encaja Crewmark.",
      differences: [
        "Licencia: OpenCode es MIT; el repositorio de Claude Code es público, pero con todos los derechos reservados.",
        "Modelos: OpenCode funciona con más de 200 proveedores a través de Models.dev; Claude Code funciona con modelos de Claude.",
        "Precio: OpenCode es gratis, con modelos gratuitos, y OpenCode Go cuesta $10 al mes; Claude Code viene con los planes de Claude desde Pro a $20 al mes.",
        "Ejecución programada: Claude Code tiene tareas programadas en la nube y de escritorio, y `/loop`; las programaciones de OpenCode son experimentales y hay que activarlas.",
      ],
      pickA: [
        "Quieres un agente de código abierto y la libertad de elegir cualquier modelo, incluidos los locales.",
        "Quieres empezar gratis.",
      ],
      pickB: [
        "Quieres modelos de Claude con las herramientas de Anthropic: tareas programadas, revisión de código y extensiones de IDE.",
        "Ya pagas un plan de Claude.",
      ],
      faq: [
        {
          q: "¿OpenCode es gratis?",
          a: "Sí. El agente es gratuito y tiene licencia MIT, e incluye modelos gratuitos con un límite diario. OpenCode Go cuesta $10 al mes y Go Plus $40.",
        },
        {
          q: "¿OpenCode puede usar modelos de Claude?",
          a: "OpenCode funciona con más de 200 proveedores de modelos, Anthropic entre ellos, así que puedes usar modelos de Claude con una clave de API.",
        },
      ],
    },
    "relevance-ai-vs-lindy": {
      summary: "Un creador low-code de equipos de agentes de IA vs un asistente de IA listo para usar",
      title: "Relevance AI vs Lindy: ¿AI Workforce o asistente de IA?",
      description:
        "Relevance AI vs Lindy: una plataforma low-code para crear equipos de agentes de IA, o un asistente alojado para correo, calendario y Slack. Precios y agentes.",
      h1: "Relevance AI vs Lindy: crear un equipo de IA o contratar a un solo asistente",
      lead: "Relevance AI y Lindy venden la idea de un empleado de IA, con formas distintas. Relevance AI es una plataforma low-code para crear agentes especializados y conectarlos en una \"AI Workforce\" multiagente, que vende a empresas a través de su equipo comercial. Lindy es un único asistente alojado que trabaja con tu bandeja de entrada, tu calendario, tus reuniones y Slack, con rutinas y aprobaciones. Aquí tienes la comparativa, y dónde encaja Crewmark.",
      differences: [
        "Forma: Relevance AI es un creador de muchos agentes especializados; Lindy es un solo asistente por espacio de trabajo al que le encargas tareas.",
        "Precios: la página de precios de Relevance AI solo muestra Enterprise, a través de ventas; Lindy tiene una prueba gratuita con $50 en créditos y planes desde $29.99 al mes por usuario activo.",
        "Varios agentes: los agentes de Relevance AI se pasan trabajo en un lienzo; la documentación de Lindy describe una sola instancia de Lindy por espacio de trabajo.",
        "Aprobaciones: Lindy pregunta antes de cualquier acción con impacto externo; Relevance AI tiene escalados y, en Enterprise, controles de horario laboral.",
      ],
      pickA: [
        "Quieres diseñar varios agentes especializados y conectarlos, con un equipo del proveedor que te ayude a desplegarlos.",
        "Compras para una empresa y cuentas con pasar por ventas.",
      ],
      pickB: [
        "Quieres un solo asistente para correo, calendario, reuniones y seguimientos, desde hoy.",
        "Quieres probarlo gratis antes de pagar.",
      ],
      faq: [
        {
          q: "¿Cuánto cuesta Lindy?",
          a: "Una prueba gratuita da $50 en créditos durante 7 días. Los planes de pago empiezan en $29.99 al mes por usuario activo por 3.000 créditos.",
        },
        {
          q: "¿Relevance AI tiene un plan gratuito?",
          a: "Su documentación dice que el plan Free se ha retirado, y la página pública de precios solo muestra Enterprise, a través de ventas.",
        },
      ],
    },
    "grok-bot-vs-claude-code": {
      summary: "Los compañeros de equipo de IA alojados de xAI vs el agente de programación de Anthropic",
      title: "Grok Bot vs Claude Code: ¿equipo de IA o agente de programación?",
      description:
        "Grok Bot vs Claude Code: los Bots alojados de xAI, con su propio ordenador, en Slack y tus apps, o el agente de programación de Anthropic para tu repositorio.",
      h1: "Grok Bot vs Claude Code: compañeros para tus apps o un agente para tu código",
      lead: "Grok Bot y Claude Code se encargan de trabajo real, en sitios distintos. Grok Bot es el compañero de equipo de IA alojado de xAI: cada Bot tiene su propio ordenador en la nube, inicia sesión en tus herramientas, trabaja en Slack y Microsoft Teams y ejecuta rutinas. Claude Code es el agente de programación de Anthropic: trabaja en tu repositorio desde la terminal, un IDE, la app de escritorio o la web. Aquí tienes la comparativa, y dónde encaja Crewmark.",
      differences: [
        "Trabajo: Grok Bot se encarga de tareas en apps de negocio como CRM, soporte, gastos y selección de personal; Claude Code escribe y modifica código.",
        "Dónde se ejecuta: cada Grok Bot tiene su propio ordenador en la nube y sigue trabajando con tu portátil cerrado; Claude Code se ejecuta en tu máquina por defecto, con sesiones en la nube en la web.",
        "Cómo trabajas con él: escribes a los Grok Bots en su app, en Slack, en Teams o en una videollamada; con Claude Code trabajas en una terminal, un IDE, la app de escritorio o la web.",
        "Precio: Grok Bot tiene Premium a $30, Super a $100 y Ultra a $200 al mes; Claude Code viene con Claude Pro ($20), Max ($100), Ultra ($200), Team y Enterprise.",
      ],
      pickA: [
        "Quieres compañeros de equipo de IA para trabajo de ventas, operaciones o soporte dentro de las apps que tu equipo ya usa.",
        "Los quieres en Slack y en tus reuniones, trabajando mientras tu portátil está cerrado.",
      ],
      pickB: [
        "Tu trabajo está en un código base: funcionalidades, correcciones, revisiones y refactorizaciones.",
        "Quieres que el agente trabaje en tu propio checkout, con tus herramientas y tus pruebas.",
      ],
      faq: [
        {
          q: "¿Cuánto cuesta Grok Bot?",
          a: "Premium cuesta $30 al mes, Super $100 y Ultra $200, con facturación mensual, y cada plan incluye uso semanal de Grok Bot; el uso adicional se cobra según el coste de los tokens. Teams y Enterprise van a través de ventas.",
        },
        {
          q: "¿Grok Bot puede escribir código?",
          a: "xAI enumera usos de ingeniería como reproducir un error en la interfaz de un producto y abrir el ticket, y una guía para coordinar agentes de programación desde Linear. Claude Code está hecho para trabajar directamente en tu repositorio.",
        },
      ],
    },
    "grok-bot-vs-hermes-agent": {
      summary: "Los compañeros de equipo de IA alojados de xAI vs el agente personal de código abierto de Nous Research",
      title: "Grok Bot vs Hermes Agent: ¿Bots alojados o de código abierto?",
      description:
        "Grok Bot vs Hermes Agent: los Bots alojados de xAI con ordenador propio, o el agente de código abierto de Nous Research con Bots, rutinas y cualquier proveedor.",
      h1: "Grok Bot vs Hermes Agent: compañeros alojados o un agente que ejecutas tú",
      lead: "Grok Bot y Hermes Agent ofrecen Bots con nombre que hablan entre sí y ejecutan rutinas, y por eso se comparan. Grok Bot es el producto alojado de xAI: cada Bot tiene su propio ordenador en la nube y trabaja en Slack, Teams y tus apps. Hermes Agent es el agente de código abierto de Nous Research que ejecutas tú mismo con cualquier proveedor de modelos, con un Bot Mode para varios Bots con nombre. Aquí tienes la comparativa, y dónde encaja Crewmark.",
      differences: [
        "Alojamiento: Grok Bot se ejecuta en la nube de xAI; Hermes Agent se ejecuta en tu máquina o en un servidor, y los planes de pago de Nous Portal incluyen un agente alojado en la nube.",
        "Licencia y precio: Grok Bot es de código cerrado, desde $30 al mes; Hermes Agent es MIT y gratis, con una suscripción opcional a Nous Portal desde $20 al mes.",
        "Modelos: Grok Bot está creado con Grok; Hermes Agent funciona con muchos proveedores, incluidos modelos locales.",
        "Dónde le hablas: Grok Bot trabaja en su app, Slack, Teams y videollamadas; Hermes Agent funciona desde una terminal, una app de escritorio o apps de chat.",
      ],
      pickA: [
        "Quieres compañeros de equipo alojados con su propio ordenador, que trabajen en Slack, Teams y tus reuniones.",
        "Prefieres no ejecutar nada tú mismo.",
      ],
      pickB: [
        "Quieres un agente de código abierto que ejecutes tú mismo, con el proveedor de modelos que elijas.",
        "Quieres un agente que escriba y mejore sus propias skills con el tiempo.",
      ],
      faq: [
        {
          q: "¿Hermes Agent es gratis?",
          a: "Sí. Tiene licencia MIT y es gratis; pagas a tu proveedor de modelos. Una suscripción opcional a Nous Portal tiene los planes Free, Plus ($20 al mes), Super ($100) y Ultra ($200).",
        },
        {
          q: "¿Grok Bot y Hermes Agent tienen Bots que hablan entre sí?",
          a: "Sí. Los Grok Bots se escriben entre sí y se coordinan en chats grupales; en el Bot Mode de Hermes Agent, los Bots con nombre se escriben directamente entre sí.",
        },
      ],
    },
    "openbot-vs-grok-bot": {
      summary: "Un espacio de trabajo de código abierto y autoalojable para compañeros de trabajo de IA vs los Bots alojados de xAI",
      title: "OpenBot vs Grok Bot: ¿código abierto o compañeros de IA alojados?",
      description:
        "OpenBot vs Grok Bot: el espacio de trabajo MIT y autoalojable de CopilotKit para compañeros de IA, o los Bots alojados de xAI. Alojamiento, modelos y precios.",
      h1: "OpenBot vs Grok Bot: compañeros de trabajo de IA que alojas tú o que alquilas",
      lead: "OpenBot y Grok Bot dan a cada compañero de trabajo de IA su propio ordenador, con navegador y herramientas, y los dos tienen rutinas y aprobaciones. OpenBot, de CopilotKit, es de código abierto y autoalojable: se ejecuta en tu portátil o en tu clúster de Kubernetes, con los modelos y agentes que elijas. Grok Bot es el producto alojado de xAI, creado con Grok, que trabaja en Slack, Teams y tus apps. Aquí tienes la comparativa, y dónde encaja Crewmark.",
      differences: [
        "Alojamiento: OpenBot se ejecuta en tu portátil o en tu clúster de Kubernetes, o alojado por CopilotKit en acceso anticipado; Grok Bot se ejecuta en la nube de xAI.",
        "Licencia: la plantilla de aplicación de OpenBot es MIT, y CopilotKit Intelligence tiene una licencia aparte; Grok Bot es de código cerrado.",
        "Modelos: OpenBot funciona con OpenAI, Claude, Gemini o modelos abiertos, y conecta tus propios agentes mediante AG-UI; Grok Bot está creado con Grok.",
        "Precio: OpenBot es gratis para proyectos personales y cuesta hasta $29 por usuario activo al mes en Business; Grok Bot cuesta $30, $100 o $200 al mes según el plan.",
      ],
      pickA: [
        "Quieres autoalojar compañeros de trabajo de IA y mantener tus datos y modelos bajo tu control.",
        "Quieres personalizar el espacio de trabajo o ponerle tu propia marca (white-label).",
      ],
      pickB: [
        "Quieres Bots alojados que ya estén listos en Slack, Teams y tus reuniones.",
        "Prefieres no gestionar infraestructura.",
      ],
      faq: [
        {
          q: "¿OpenBot es gratis?",
          a: "Es gratis para proyectos personales en tu portátil. OpenBot for Business cuesta hasta $29 por usuario activo al mes, más el 5% del gasto mensual en modelos por encima de $5.000; pagas directamente a los proveedores de modelos.",
        },
        {
          q: "¿OpenBot es de código abierto?",
          a: "La plantilla de aplicación de OpenBot tiene licencia MIT. Usa CopilotKit Intelligence, que tiene una licencia aparte: gratis en un portátil, con licencias de prueba y de producción para Kubernetes.",
        },
      ],
    },
    "claude-cowork-vs-claude-code": {
      summary: "El agente de Anthropic para trabajo del conocimiento vs su agente para código",
      title: "Claude Cowork vs Claude Code: ¿qué agente de Anthropic usar?",
      description:
        "Claude Cowork vs Claude Code: el agente de Anthropic para documentos, investigación y hojas de cálculo en Claude, o su agente de código para tu repositorio.",
      h1: "Claude Cowork vs Claude Code: dos agentes de Anthropic para trabajos distintos",
      lead: "Claude Cowork y Claude Code vienen de la misma empresa y funcionan con modelos de Claude, y Anthropic dice que Cowork usa la misma arquitectura que Claude Code. Están pensados para trabajos distintos. Cowork se encarga del trabajo del conocimiento en las apps de Claude, como investigación, documentos, hojas de cálculo y presentaciones, sobre todo en la nube de Anthropic. Claude Code trabaja en tu repositorio de código, desde la terminal, un IDE, la app de escritorio o la web. Los dos vienen con los planes de pago de Claude. Aquí tienes la comparativa, y dónde encaja Crewmark.",
      differences: [
        "Trabajo: Cowork convierte un resultado en documentos, hojas de cálculo con fórmulas, presentaciones o carpetas ordenadas; Claude Code lee tu código base, edita archivos y ejecuta comandos.",
        "Dónde se ejecuta: las tareas de Cowork se ejecutan en la nube de Anthropic y llegan a los archivos locales a través de Claude Desktop; Claude Code se ejecuta en tu máquina por defecto, con sesiones en la nube en la web.",
        "Dónde lo usas: Cowork está en las apps de Claude para escritorio, web y móvil; Claude Code está en la terminal, las extensiones de IDE, la app de escritorio y la web.",
        "Programaciones: Cowork programa tareas de cada hora a cada semana en la nube; Claude Code tiene tareas programadas en la nube y de escritorio, y `/loop`.",
      ],
      pickA: [
        "Tu trabajo es investigación, documentos, hojas de cálculo o presentaciones.",
        "Quieres encargar tareas desde el móvil o el navegador y recibir archivos.",
      ],
      pickB: ["Tu trabajo está en un repositorio de código.", "Quieres un agente con tu terminal, tus pruebas y git."],
      faq: [
        {
          q: "¿Claude Cowork y Claude Code vienen con el mismo plan?",
          a: "Sí. Los dos están incluidos en los planes de pago de Claude: Pro, Max, Ultra, Team y Enterprise. Claude Free no incluye ninguno.",
        },
        {
          q: "¿Claude Cowork puede escribir código?",
          a: "Anthropic sitúa Cowork en el trabajo del conocimiento que no es de programación y Claude Code en la ingeniería de software. Para tareas que solo se ejecutan en tu ordenador, Anthropic remite a Claude Code en la app de escritorio.",
        },
      ],
    },
    "claude-cowork-vs-chatgpt-work": {
      summary: "Los compañeros de trabajo de IA de Anthropic y OpenAI dentro de sus apps de chat",
      title: "Claude Cowork vs ChatGPT Work: compañeros de IA comparados",
      description:
        "Claude Cowork vs ChatGPT Work: agentes de Anthropic y OpenAI para documentos, investigación y tareas recurrentes. Planes, ejecución, horarios y aprobaciones.",
      h1: "Claude Cowork vs ChatGPT Work: dos compañeros de trabajo de IA dentro de las apps de chat",
      lead: "Claude Cowork y ChatGPT Work hacen el mismo tipo de trabajo: describes un resultado en la app de chat, y el agente planifica los pasos, trabaja con archivos, apps conectadas y un navegador, y te devuelve algo para revisar. Cowork es de Anthropic, en los planes de pago de Claude. ChatGPT Work es de OpenAI, en los planes de ChatGPT, y comparte sus capacidades y su uso con Codex. Aquí tienes la comparativa, y dónde encaja Crewmark.",
      differences: [
        "Planes: Cowork está en los planes de pago de Claude desde Pro a $20 al mes, no en Free; ChatGPT Work tiene acceso limitado en Free y Go en la app de escritorio, y acceso completo desde Plus a $20 al mes.",
        "Dónde se ejecuta: Cowork se ejecuta en la nube de Anthropic y llega a los archivos locales a través de Claude Desktop; ChatGPT Work se ejecuta en la nube de OpenAI, o en local a través de la app de escritorio de ChatGPT.",
        "Programaciones: Cowork ejecuta tareas programadas de cada hora a cada semana; ChatGPT Work tiene tareas programadas más disparadores por eventos de Gmail, Slack o GitHub en los planes aptos.",
        "Aprobaciones: Cowork tiene los modos Manual, Auto (con una revisión de seguridad) y Skip; ChatGPT Work se detiene para pedir aprobación en las acciones importantes, con modos de permisos en la app de escritorio.",
      ],
      pickA: [
        "Ya pagas Claude, o quieres los modelos de Anthropic para documentos e investigación.",
        "Quieres tareas programadas que se ejecuten en la nube con tu ordenador apagado.",
      ],
      pickB: [
        "Ya pagas ChatGPT, o quieres probarlo con el plan Free en la app de escritorio.",
        "Quieres tareas que se activen con eventos de Gmail, Slack o GitHub.",
      ],
      faq: [
        {
          q: "¿ChatGPT Work es gratis?",
          a: "ChatGPT Free y Go tienen acceso limitado a ChatGPT Work en la app de escritorio. Plus ($20 al mes) y Pro lo tienen en escritorio, web y móvil.",
        },
        { q: "¿Claude Cowork es gratis?", a: "No. Solo está en los planes de pago de Claude, desde Pro a $20 al mes." },
      ],
    },
    "copilot-cowork-vs-claude-cowork": {
      summary: "El compañero de trabajo de IA de Microsoft 365 vs el de Anthropic",
      title: "Copilot Cowork vs Claude Cowork: ¿Microsoft o Anthropic?",
      description:
        "Copilot Cowork vs Claude Cowork: el agente de Microsoft en Outlook, Teams y Office, o el de Anthropic en las apps de Claude. Licencias, coste y funciones.",
      h1: "Copilot Cowork vs Claude Cowork: el agente de Microsoft 365 o el de Claude",
      lead: "Copilot Cowork y Claude Cowork comparten nombre e idea: encargas una tarea de varios pasos a un agente y apruebas lo que hace. Copilot Cowork trabaja en Microsoft 365: envía correos, programa reuniones y edita archivos de Office en OneDrive y SharePoint, y puede usar modelos GPT, Claude o Grok. Claude Cowork es el agente de Anthropic en las apps de Claude, con modelos de Claude. Aquí tienes la comparativa, y dónde encaja Crewmark.",
      differences: [
        "Dónde está tu trabajo: Copilot Cowork trabaja en Outlook, Teams, OneDrive y SharePoint y no puede llegar a archivos de tu dispositivo local; Claude Cowork trabaja con conectores como Google Drive, Gmail, Microsoft 365 y Slack, y con archivos locales a través de Claude Desktop.",
        "Coste: Copilot Cowork necesita una licencia de Microsoft 365 Copilot más Copilot Credits a $0.01 cada uno; Claude Cowork viene con los planes de pago de Claude desde Pro a $20 al mes.",
        "Modelos: Copilot Cowork tiene un selector de modelos con modelos GPT, Claude y Grok, según la configuración del inquilino; Claude Cowork funciona con modelos de Claude.",
        "Cuentas: Copilot Cowork es para cuentas profesionales o educativas, con las cuentas personales en vista previa; Claude Cowork está en los planes individuales y de equipo de Claude.",
      ],
      pickA: [
        "Tu organización funciona con Microsoft 365 y ya tiene licencias de Microsoft 365 Copilot.",
        "Quieres que el agente envíe correos, reserve reuniones y publique en Teams por ti, con aprobación.",
      ],
      pickB: [
        "Trabajas fuera de Microsoft 365, o quieres archivos locales y un navegador en tu propio ordenador.",
        "Prefieres un plan mensual fijo en lugar de una facturación por crédito.",
      ],
      faq: [
        {
          q: "¿Cuánto cuesta Copilot Cowork?",
          a: "Necesita una licencia de Microsoft 365 Copilot, y su uso se factura en Copilot Credits: $0.01 por crédito con pago por uso, o un plan prepago de un año con descuentos del 5% al 20%.",
        },
        {
          q: "¿Copilot Cowork usa Claude?",
          a: "Su selector de modelos incluye Claude Opus, Sonnet y Fable junto a modelos GPT y Grok, según la configuración del inquilino; los inquilinos dentro del EU Data Boundary solo tienen modelos GPT.",
        },
      ],
    },
    "chatgpt-work-vs-codex": {
      summary: "El modo Work de ChatGPT vs el agente de programación de OpenAI",
      title: "ChatGPT Work vs Codex: ¿cuál deberías usar?",
      description:
        "ChatGPT Work vs Codex: el modo Work de OpenAI para documentos y análisis, o su agente de código para repositorios. Comparten capacidades y uso: así difieren.",
      h1: "ChatGPT Work vs Codex: el mismo motor, trabajos distintos",
      lead: "ChatGPT Work y Codex son agentes de OpenAI, y OpenAI dice que Work comparte con Codex capacidades básicas, ejecución y límites de uso. La diferencia está en para qué sirven. ChatGPT Work es un modo de ChatGPT para tareas que terminan en algo que revisar, como presentaciones, hojas de cálculo y análisis. Codex es el agente de programación, en una CLI de terminal, una extensión de IDE, la app de escritorio de ChatGPT y la nube. Aquí tienes la comparativa, y dónde encaja Crewmark.",
      differences: [
        "Trabajo: ChatGPT Work devuelve documentos, presentaciones, hojas de cálculo y análisis; Codex lee, edita y ejecuta código en un repositorio.",
        "Dónde lo usas: ChatGPT Work está en ChatGPT en la web, el escritorio y el móvil; Codex está en una CLI de terminal, una extensión de IDE, la app de escritorio de ChatGPT y Codex Cloud.",
        "Uso: comparten los límites de uso y los créditos de Codex.",
        "Código abierto: la CLI, el SDK y el App Server de Codex son Apache-2.0; ChatGPT Work no es de código abierto.",
      ],
      pickA: ["Tu tarea termina en un documento, una presentación o un análisis.", "Quieres empezarla desde ChatGPT en el móvil o en la web."],
      pickB: [
        "Tu tarea es código: funcionalidades, correcciones y revisiones.",
        "Quieres un agente en tu terminal o tu IDE, o en CI con `codex exec`.",
      ],
      faq: [
        {
          q: "¿ChatGPT Work y Codex comparten el uso?",
          a: "Sí. OpenAI dice que ChatGPT Work comparte con Codex capacidades básicas, ejecución y límites de uso, créditos incluidos.",
        },
        {
          q: "¿Qué planes de ChatGPT incluyen Work?",
          a: "Free y Go tienen acceso limitado en la app de escritorio; Plus ($20 al mes), Pro y Business lo tienen en escritorio, web y móvil.",
        },
      ],
    },
    "claude-cowork-vs-grok-bot": {
      summary: "El compañero de trabajo de IA de Anthropic en las apps de Claude vs los Bots de xAI con su propio ordenador",
      title: "Claude Cowork vs Grok Bot: compañeros de IA comparados",
      description:
        "Claude Cowork vs Grok Bot: el agente de Anthropic para documentos e investigación en Claude, o los Bots de xAI con ordenador propio en Slack y tus apps.",
      h1: "Claude Cowork vs Grok Bot: un agente de tareas en Claude o un equipo de Bots",
      lead: "Claude Cowork y Grok Bot son compañeros de trabajo de IA que siguen trabajando en la nube mientras no estás. Claude Cowork es el agente de Anthropic en las apps de Claude: le pasas una tarea y recibes archivos. Grok Bot es el de xAI: Bots con su propio ordenador en la nube que inician sesión en tus herramientas, trabajan en Slack, Microsoft Teams y videollamadas, y se pasan trabajo entre sí. Aquí tienes la comparativa, y dónde encaja Crewmark.",
      differences: [
        "Forma: Claude Cowork recibe tareas de ti, con subagentes dentro de una tarea; Grok Bot da a cada Bot su propio trabajo, y los Bots se escriben entre sí y se coordinan en chats grupales.",
        "Dónde trabajas con él: Claude Cowork está en las apps de Claude para escritorio, web y móvil; Grok Bot está en su propia app, en Slack, en Teams y en videollamadas.",
        "Planes: Claude Cowork viene con los planes de pago de Claude desde Pro a $20 al mes; Grok Bot está incluido en los planes Premium ($30 al mes), Super y Ultra.",
        "Modelos: Claude Cowork funciona con modelos de Claude; Grok Bot está creado con Grok.",
      ],
      pickA: ["Encargas documentos, investigación y hojas de cálculo, y quieres recibir archivos.", "Ya usas Claude."],
      pickB: [
        "Quieres varios Bots, cada uno con su propio trabajo, en Slack y en las apps de tu equipo.",
        "Quieres Bots en tus reuniones.",
      ],
      faq: [
        {
          q: "¿Grok Bot puede unirse a reuniones?",
          a: "Sí. xAI dice que puedes añadir un Bot a una llamada de Google Meet, Zoom o Teams, donde escucha, interviene en el chat cuando puede ayudar y se encarga del seguimiento después.",
        },
        {
          q: "¿Claude Cowork puede ejecutarse con mi ordenador apagado?",
          a: "Las tareas en la nube siguen ejecutándose en los servidores de Anthropic; solo el trabajo que necesita archivos locales o tu navegador espera a Claude Desktop.",
        },
      ],
    },
    "cursor-projects-vs-grok-bot": {
      summary: "El agente coordinador de Cursor para código vs los Bots de xAI para trabajo en todas tus apps",
      title: "Cursor Projects vs Grok Bot: agentes coordinadores comparados",
      description:
        "Cursor Projects vs Grok Bot: un coordinador que dirige muchos agentes en la nube sobre tu código, o los Bots de xAI en Slack y tus apps. Planes y funciones.",
      h1: "Cursor Projects vs Grok Bot: un equipo de agentes para el código o para todo lo demás",
      lead: "Cursor Projects y Grok Bot ponen a un agente al frente de otros. En un Cursor Project, un agente coordinador planifica una funcionalidad, una migración o una app y delega la programación a muchos agentes en la nube en paralelo. Grok Bot es el conjunto de compañeros de equipo de IA de xAI, cada uno con su propio ordenador en la nube, que trabajan en Slack, Teams y tus apps, y un Bot puede gestionar a los demás. Los dos empiezan con planes de $30 al mes. Aquí tienes la comparativa, y dónde encaja Crewmark.",
      differences: [
        "Trabajo: Cursor Projects es para trabajo de software en un repositorio de GitHub; Grok Bot se encarga de trabajo en apps de negocio como CRM, soporte, gastos y selección de personal.",
        "Coordinación: el coordinador de un Cursor Project crea y gestiona agentes trabajadores, y en los Multiplayer Projects los coordinadores se escriben entre sí; los Grok Bots se escriben entre sí y se coordinan en chats grupales.",
        "Estado compartido: un Cursor Project guarda archivos compartidos (preferencias, notas, flujos de trabajo) y un tablero de tareas; los Grok Bots recuerdan cómo trabaja tu equipo.",
        "Disparadores: Cursor Projects actúa según programaciones, canales de Slack y pull requests; los Grok Bots ejecutan rutinas según una programación y trabajan en Slack y Teams.",
      ],
      pickA: [
        "Quieres que un esfuerzo de programación largo se planifique y se reparta entre muchos agentes.",
        "Tu equipo ya usa Cursor y GitHub.",
      ],
      pickB: [
        "Quieres compañeros de equipo de IA para operaciones, ventas o soporte en las apps que ya usas.",
        "Los quieres en Slack, Teams y reuniones.",
      ],
      faq: [
        {
          q: "¿Qué planes de Cursor incluyen Projects?",
          a: "Todos los planes con Cloud Agents: Premium ($30 al mes) y superiores, Teams, Enterprise y los planes de pago antiguos. No Free, Plus ni el plan Hobby antiguo.",
        },
        {
          q: "¿Un Cursor Project sigue trabajando con mi portátil cerrado?",
          a: "Sí. Un Project se ejecuta en su propio ordenador en la nube; el coordinador solo inicia un agente local cuando hay que probar algo en tu máquina.",
        },
      ],
    },
    "copilot-cowork-vs-copilot-studio": {
      summary: "El compañero de trabajo de IA de Microsoft vs el creador de agentes de Microsoft",
      title: "Copilot Cowork vs Copilot Studio: ¿en qué se diferencian?",
      description:
        "Copilot Cowork vs Copilot Studio: el agente de Microsoft 365 que hace tareas por ti, o el estudio low-code donde creas agentes y flujos. Coste y funciones.",
      h1: "Copilot Cowork vs Copilot Studio: usar un agente o crear uno",
      lead: "Copilot Cowork y Copilot Studio son productos de Microsoft, los dos se facturan en Copilot Credits y comparten la bolsa de créditos prepagados de un inquilino. La diferencia está en quién hace el trabajo. Copilot Cowork es un agente de Microsoft 365 Copilot al que le pasas una tarea, y envía correos, reserva reuniones y edita archivos de Office con tu aprobación. Copilot Studio es donde los creadores construyen sus propios agentes, flujos de trabajo y apps y los publican en Teams, Microsoft Copilot, sitios web o una línea telefónica. Un flujo de trabajo de Copilot Studio puede incluso iniciar una tarea de Cowork como uno de sus pasos. Aquí tienes la comparativa, y dónde encaja Crewmark.",
      differences: [
        "Trabajo: Copilot Cowork hace una tarea por ti en Outlook, Teams, Word, Excel, PowerPoint, OneDrive y SharePoint; Copilot Studio es un estudio low-code para crear agentes, flujos de trabajo y apps que usan otras personas.",
        "Quién lo usa: Copilot Cowork es para cualquiera con una licencia de Microsoft 365 Copilot y Cowork activado; Copilot Studio es para creadores, y sus agentes publicados pueden atender a empleados o a clientes en un sitio web o una línea telefónica.",
        "Coste: Copilot Cowork necesita una licencia de Microsoft 365 Copilot más Copilot Credits a $0.01 cada uno; Copilot Studio vende paquetes de 25.000 créditos a $200 al mes (con facturación anual) o $0.01 por crédito con pago por uso, y su licencia de creador cuesta $0.",
        "Automatización: Copilot Cowork ejecuta prompts programados y disparadores de correo o Teams; Copilot Studio añade disparadores de agentes, aprobaciones en varias fases con un conector Human review y flujos de trabajo que pueden llamar a Cowork como uno de sus pasos.",
      ],
      pickA: [
        "Quieres que un agente haga trabajo de Microsoft 365 por ti desde hoy, sin crear nada.",
        "Quieres aprobar cada correo, reunión o publicación en Teams antes de que salga.",
      ],
      pickB: [
        "Quieres crear un agente o un flujo de trabajo que usen otras personas, o tus clientes.",
        "Necesitas conectores, aprobaciones en varias fases, canales de publicación o entornos separados de desarrollo, pruebas y producción.",
      ],
      faq: [
        {
          q: "¿Copilot Cowork forma parte de Copilot Studio?",
          a: "No, son productos separados. Comparten la bolsa de Copilot Credits prepagados de un inquilino, y un flujo de trabajo de Copilot Studio puede iniciar o reanudar una tarea de Copilot Cowork mediante su nodo Copilot.",
        },
        {
          q: "¿Cuánto cuesta Copilot Studio?",
          a: "La Licensing Guide de Microsoft indica $200 al mes (con facturación anual) por un paquete de 25.000 Copilot Credits por inquilino, o $0.01 por crédito con pago por uso. Los créditos del paquete que no se usan no se acumulan. La licencia de creador cuesta $0, y la prueba gratuita no puede publicar agentes.",
        },
      ],
    },
  },
};
