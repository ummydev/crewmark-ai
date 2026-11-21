import type { GuideCopy } from "@/components/landing/guide-article";

// Spanish translation of /alternatives/factory; the English master is
// src/content/product-alternatives/factory.ts.

export const copy: GuideCopy = {
  meta: {
    title: "Factory AI: alternativas 2026, agentes de programación comparados",
    description:
      "Alternativas a Factory AI: Devin, Claude Code, Codex, OpenCode (código abierto), Cursor Projects y Conductor, con precios, límites y para quién es cada una.",
  },
  breadcrumb: "Alternativas a Factory",
  parent: { name: "Comparativas", href: "/compare" },
  hero: {
    kicker: "Alternativas · Factory",
    title: "Alternativas a Factory AI: Devin, Claude Code, Codex, OpenCode y más, comparados",
    lead: "Factory crea los Droids, agentes de programación que se ejecutan en la Factory App de tu escritorio, en la Droid CLI, sin interfaz (headless) en CI y en ordenadores en la nube alojados por Factory. Los planes individuales van desde Free (con tu propia inferencia) hasta $200 al mes. Pro, Plus y Max tienen límites de uso en ventanas móviles de 5 horas, 7 días y 30 días, Teams está limitado a 10 puestos, y la Droid CLI y la Factory App no tienen licencia de código abierto. Aquí tienes 7 alternativas, de Devin y Claude Code a OpenCode, de código abierto, con lo que cuesta cada una.",
    cta: "Empezar",
    secondary: "Compáralas",
    secondaryHref: "#compare",
  },
  sections: [
    {
      kind: "table",
      id: "compare",
      title: "Alternativas a Factory de un vistazo",
      text: [
        "Datos de las propias páginas, la documentación o el GitHub de cada proveedor, comprobados el 13 de noviembre de 2026. Precios en dólares estadounidenses. No es una clasificación. Los planes de Factory están en [precios de Factory](/pricing/factory).",
      ],
      headers: ["Alternativa", "Qué es", "Código abierto", "Precio desde"],
      rows: [
        [
          "[Factory](/pricing/factory) (como referencia)",
          "Droids: agentes de programación en una app de escritorio, una CLI, CI y ordenadores en la nube alojados por Factory",
          "No",
          "Free $0/mes con tu propia inferencia; Pro $20/mes",
        ],
        [
          "[Devin](/pricing/devin)",
          "El ingeniero de software de IA de Cognition: una VM en la nube por sesión, más Devin Desktop y Devin CLI",
          "No",
          "Free $0 (cuota reducida); Pro $20/mes",
        ],
        [
          "[Claude Code](/compare/factory-vs-claude-code)",
          "El agente de programación de Anthropic en la terminal, el IDE, la app de escritorio, la web y el móvil",
          "No (repositorio público, todos los derechos reservados)",
          "En los planes de pago de Claude: Pro $20/mes, o $17/mes con facturación anual",
        ],
        [
          "[Codex](/blog/claude-code-vs-codex)",
          "El agente de programación de OpenAI: CLI, extensión de IDE, app de escritorio de ChatGPT y Codex Cloud",
          "En parte: CLI, SDK y App Server son Apache-2.0",
          "En los planes de ChatGPT desde Plus a $20/mes, o con una clave de API de OpenAI",
        ],
        [
          "[OpenCode](/pricing/opencode)",
          "Un agente de programación para más de 200 proveedores de modelos, incluidos modelos locales",
          "Sí, MIT",
          "Gratis, con modelos gratuitos; OpenCode Go $10/mes",
        ],
        [
          "[Cursor Projects](/personal-agent/cursor-projects)",
          "Un agente coordinador que planifica el trabajo de programación y ejecuta agentes en la nube de Cursor en paralelo",
          "No",
          "Cursor Premium $30/mes, o $300/año",
        ],
        [
          "[Conductor](/pricing/conductor)",
          "Una app de Mac que ejecuta Claude Code, Codex, Cursor y OpenCode en paralelo en worktrees de git",
          "No",
          "De uso gratuito; cerrado a nuevos registros y descargas desde el 4 de noviembre de 2026",
        ],
        [
          "[Crewmark](/ai-employees)",
          "Un tablero de issues para empleados de IA que funcionan como Claude Code o Codex en tu ordenador",
          "Sí, GPL-3.0",
          "Gratis (1 proyecto, hasta 3 empleados de IA); Pro $5/mes, próximamente",
        ],
      ],
    },
    {
      kind: "text",
      id: "cloud",
      title: "Agentes de programación en la nube como los Droids",
      text: [
        "Como los Droid Computers de Factory, ejecutan agentes en la nube del proveedor, así que el trabajo sigue con tu portátil cerrado.",
      ],
      points: [
        "[Devin](/pricing/devin) (Cognition): un ingeniero de software de IA que escribe, ejecuta y prueba código y abre pull requests, con cada sesión en la nube en su propia máquina virtual, más Devin Desktop y Devin CLI en local. Toma tickets de Linear y Jira, ejecuta Automations según una programación o por eventos, y una sesión coordinadora puede lanzar Devins hijos y escribirles. Free $0 (cuota reducida), Pro $20/mes, Max $200/mes; Teams cuesta “$80/mes por el plan de equipo + $40/mes por cada puesto de desarrollador completo”, hasta 100 usuarios. Elígelo si quieres pasarle tickets a un agente y recibir pull requests, con planes de equipo de más de 10 puestos. Más: [alternativas a Devin](/blog/devin-alternatives), [Devin vs Claude Code](/compare/devin-vs-claude-code).",
        "[Cursor Projects](/personal-agent/cursor-projects): una función de Cursor en la que un agente coordinador planifica una funcionalidad, una migración o una app completa, la delega a agentes que se ejecutan en paralelo en los Cloud Agents de Cursor y te trae el trabajo terminado para que lo revises. Un Project tiene un tablero de tareas y notas compartidas, y puede actuar según una programación, un canal de Slack o tus pull requests. Está en Cursor Premium ($30/mes, o $300/año) y superiores, Teams y Enterprise, no en Free ni Plus. Elígelo si ya trabajas en Cursor y quieres un coordinador que dirija muchos agentes en la nube.",
      ],
    },
    {
      kind: "text",
      id: "labs",
      title: "Agentes de programación de Anthropic y OpenAI",
      text: [
        "El plan Free de Factory puede funcionar con un inicio de sesión de ChatGPT o con tus propias claves de API. Si ya pagas a Anthropic u OpenAI, sus propios agentes de programación vienen con esos planes. Cara a cara: [Factory vs Claude Code](/compare/factory-vs-claude-code), [Claude Code vs Codex](/blog/claude-code-vs-codex), [ChatGPT Work vs Codex](/compare/chatgpt-work-vs-codex).",
      ],
      points: [
        "[Claude Code](/compare/factory-vs-claude-code) (Anthropic): lee tu código base, edita archivos y ejecuta comandos desde la terminal, extensiones de IDE, una app de escritorio, la web y las apps móviles de Claude, con modelos de Claude. Ejecuta tareas programadas en la nube, tareas programadas de escritorio y `/loop`, y tiene subagentes y agent teams experimentales. Está en los planes de pago de Claude, no en Free: Pro $20/mes ($17/mes con facturación anual), Max $100, Ultra $200, y puestos de Team para entre 2 y 150 personas. Elígelo si ya pagas Claude.",
        "[Codex](/blog/claude-code-vs-codex) (OpenAI): un agente de programación en una CLI de terminal, una extensión de IDE, la app de escritorio de ChatGPT y Codex Cloud, con `codex exec` para scripts y CI. La CLI, el SDK y el App Server son de código abierto con licencia Apache-2.0. Está en los planes de ChatGPT desde Plus a $20/mes, Pro desde $100/mes y Business desde $20/usuario/mes con facturación anual, o con una clave de API de OpenAI (solo CLI, SDK y extensión de IDE). Elígelo si ya pagas ChatGPT o quieres una CLI de código abierto. Consulta [Devin vs Codex](/compare/devin-vs-codex).",
      ],
    },
    {
      kind: "text",
      id: "open-source",
      title: "Una alternativa de código abierto a Factory: OpenCode",
      points: [
        "[OpenCode](/pricing/opencode): un agente de programación con licencia MIT que funciona con más de 200 proveedores de modelos, incluidos modelos locales, como interfaz de terminal, app de escritorio, app web y SDK. Puedes empezar con modelos gratuitos que no necesitan cuenta (con un límite diario de solicitudes), iniciar sesión con ChatGPT Plus o Pro o con GitHub Copilot, usar tus propias claves de API, o pagar OpenCode Go ($10/mes) o Go Plus ($40/mes). Los agentes y subagentes personalizados son archivos en tu repositorio, con reglas de permitir, preguntar o denegar para cada acción. Las ejecuciones programadas son experimentales y hay que activarlas. Elígelo si quieres un agente de código abierto que puedas conectar a casi cualquier modelo. Más: [alternativas a OpenCode](/blog/opencode-alternatives), [OpenCode vs Claude Code](/compare/opencode-vs-claude-code).",
      ],
    },
    {
      kind: "text",
      id: "parallel",
      title: "Varios agentes en paralelo: Conductor",
      points: [
        "[Conductor](/pricing/conductor): una app de Mac que ejecuta agentes de Claude Code, Codex, Cursor y OpenCode en paralelo, cada tarea en su propio worktree de git, y te ayuda a revisar el diff, abrir una pull request y hacer merge. El 4 de noviembre de 2026 anunció que se une a Meta: los nuevos registros y las descargas están cerrados, Conductor Cloud pasa a solo lectura el 13 de noviembre de 2026 y cierra el 20 de noviembre de 2026, y la app local recibirá nuevos modelos y correcciones de errores críticos hasta principios de 2027. Elígelo solo si ya lo tienes instalado en tu Mac. Más: [alternativas a Conductor](/blog/conductor-alternatives), [Vibe Kanban vs Conductor](/compare/vibe-kanban-vs-conductor).",
      ],
    },
    {
      kind: "steps",
      id: "how-to-choose",
      title: "Cómo elegir una alternativa a Factory",
      steps: [
        {
          title: "Decide dónde se ejecuta el agente",
          text: "Devin y Cursor Projects se ejecutan en la nube del proveedor, como los Droid Computers. Claude Code y Codex se ejecutan en tu máquina y en su propia nube. OpenCode se ejecuta en tu máquina. Conductor se ejecuta en local en un Mac.",
        },
        {
          title: "Cuenta los puestos",
          text: "Factory Teams está limitado a 10 puestos. Devin Teams llega hasta 100 usuarios, el plan Team de Claude Code cubre de 2 a 150 personas, Codex Business empieza en 2 usuarios y Cursor Teams se cobra por puesto.",
        },
        {
          title: "Comprueba cómo se limita el uso",
          text: "Pro, Plus y Max de Factory tienen límites en ventanas móviles de 5 horas, 7 días y 30 días, más Extra Usage prepagado. Devin usa cuotas diarias y/o semanales más créditos prepagados. Claude Code comparte los límites de 5 horas y semanales con el chat de Claude. Los modelos gratuitos de OpenCode tienen un límite diario de solicitudes.",
        },
        {
          title: "Decide si necesitas código abierto",
          text: "OpenCode es MIT y la CLI de Codex es Apache-2.0. Factory, Devin, Claude Code, Cursor Projects y Conductor no publican ninguna licencia de código abierto para el producto en sí.",
        },
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Con Crewmark",
      title: "Crewmark: dale a Claude Code o Codex un rol y un horario",
      text: [
        "Crewmark no es un agente de programación. Es un gestor de issues para un equipo de empleados de IA: cada uno es una conversación de Claude Code o Codex en tu propio ordenador con un rol, objetivos y un horario laboral. Se despierta con un latido (heartbeat), toma issues de un tablero compartido y mantiene su estado al día, con la suscripción de agente que ya pagas. Tu ordenador tiene que estar encendido para los latidos.",
        "Es de código abierto (GPL-3.0) y se puede autoalojar. El plan Free cubre 1 proyecto y hasta 3 empleados de IA; Pro ($5/mes) y Team ($10/mes) llegarán pronto, y la facturación aún no está implementada, así que hasta entonces todas las cuentas pueden usar Crewmark gratis. El uso del agente se paga a tu proveedor de agentes. Detalles en [precios de Crewmark](/pricing).",
      ],
      steps: [
        {
          title: "Elige un rol",
          text: "Dale a cada empleado un rol, objetivos y proyectos, por ejemplo un Ingeniero de software. Consulta [roles de empleados de IA](/ai-employees).",
        },
        {
          title: "Pon el trabajo en un tablero",
          text: "Asigna issues con estados y prioridades, y haz que las habituales se repitan. Los agentes se asignan issues y se @mencionan entre sí; cuando uno necesita una revisión o un permiso, pone la issue en Requiere acción y espera.",
        },
        {
          title: "Define el horario laboral",
          text: "El latido despierta a cada empleado con una frecuencia de entre 15 minutos y 24 horas durante su horario laboral. Los trabajos, con su configuración, están en [casos de uso de Claude Code](/use-cases/claude-code) y [casos de uso de Codex](/use-cases/codex).",
        },
      ],
    },
  ],
  mid: {
    title: "¿Ya pagas Claude Code o Codex?",
    text: "Crewmark les da roles, un latido y un tablero compartido, para que sigan trabajando sin esperar un prompt. Gratis para hasta 3 empleados.",
    button: "Empezar",
  },
  faq: {
    title: "Preguntas frecuentes sobre alternativas a Factory",
    items: [
      {
        q: "¿Hay alguna alternativa gratuita a Factory AI?",
        a: "OpenCode es gratis, con modelos gratuitos que no necesitan cuenta (límite diario de solicitudes). Devin tiene un plan Free con una cuota reducida. El plan Free de Crewmark cubre 1 proyecto y hasta 3 empleados de IA. Factory tiene un plan Free a $0/mes si aportas tu propia inferencia: inicia sesión con ChatGPT, GitHub Copilot u OpenRouter, o conecta tus propias claves de API.",
      },
      {
        q: "¿Hay alguna alternativa de código abierto a los Droids de Factory?",
        a: "OpenCode (MIT) es un agente de programación totalmente de código abierto, y la CLI, el SDK y el App Server de Codex son Apache-2.0. Crewmark (GPL-3.0) también es de código abierto, aunque ejecuta Claude Code o Codex en lugar de un agente propio. Factory no publica ninguna licencia de código abierto para la Droid CLI ni para la Factory App; su repositorio github.com/Factory-AI/factory solo contiene un README y documentación.",
      },
      {
        q: "Factory vs Devin: ¿en qué se diferencian?",
        a: "Los dos se ejecutan en la nube y en local, toman issues de Linear y Jira y ejecutan automatizaciones. Los Droids de Factory se ejecutan en la Factory App, la Droid CLI, CI y los Droid Computers; Devin ejecuta cada sesión en la nube en su propia VM, más Devin Desktop y Devin CLI. Los dos tienen Pro a $20/mes. Factory Teams cuesta $60/mes por equipo más $40/mes por persona, hasta 10 puestos; Devin Teams cuesta “$80/mes por el plan de equipo + $40/mes por cada puesto de desarrollador completo”, hasta 100 usuarios.",
      },
      {
        q: "Factory vs Claude Code: ¿en qué se diferencian?",
        a: "Claude Code es el propio agente de Anthropic con modelos de Claude, incluido en los planes de pago de Claude. Los Droids de Factory funcionan con GPT-5, Claude Opus y Sonnet, Gemini y modelos de pesos abiertos, o con tus propias claves, y añaden Droid Computers alojados, delegación desde Slack, Linear y Jira, y automatizaciones programadas. Consulta [Factory vs Claude Code](/compare/factory-vs-claude-code).",
      },
      {
        q: "¿Puedo usar mi suscripción de ChatGPT en lugar de pagar Factory?",
        a: "Codex viene con los planes de ChatGPT desde Plus a $20/mes. OpenCode te permite iniciar sesión con ChatGPT Plus o Pro, y los planes Pro, Max y Teams de Devin pueden usar un plan de ChatGPT vinculado para el uso de modelos GPT. El propio plan Free de Factory también te permite iniciar sesión con ChatGPT. Crewmark ejecuta Codex con tu suscripción de ChatGPT.",
      },
      {
        q: "¿Qué alternativa a Factory ejecuta varios agentes en paralelo?",
        a: "La sesión coordinadora de Devin lanza Devins hijos y les escribe. Cursor Projects ejecuta un coordinador con agentes trabajadores en la nube de Cursor. Claude Code tiene subagentes y agent teams experimentales, Codex lanza subagentes en paralelo y OpenCode puede iniciar varios agentes en el mismo proyecto. Crewmark dirige un equipo de empleados de IA desde un único tablero compartido.",
      },
    ],
  },
  cta: {
    title: "Dales a tus agentes de programación un trabajo, no solo un prompt.",
    text: "Crewmark convierte sesiones de Claude Code y Codex en empleados de IA con roles, objetivos, horario laboral y un latido.",
    button: "Empezar",
  },
  checked: "Comprobado con las propias páginas, la documentación, los precios y el GitHub de cada producto el 13 de noviembre de 2026.",
  disclaimer:
    "Crewmark es un producto independiente, sin relación con Factory, Cognition, Anthropic, OpenAI, Anomaly, Cursor, Conductor ni Meta, y sin su respaldo. Los nombres de producto son marcas de sus respectivos titulares. Los datos sobre otros productos proceden de sus páginas públicas y pueden haber cambiado desde entonces.",
};
