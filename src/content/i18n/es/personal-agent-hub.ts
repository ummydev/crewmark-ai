import type { GuideCopy } from "@/components/landing/guide-article";

// es translation of /personal-agent; the English master is src/content/personal-agent-hub.ts.

export const copy: GuideCopy = {
  meta: {
    title: "Agentes personales de IA 2026: Muse, Grok Bot y Dots comparados",
    description:
      "Qué es un agente personal de IA y los que más se buscan, comparados a partir de las páginas de cada fabricante: Meta Muse, Grok Bot, ChatGPT dots, Claude Duet, Manus Cue, las tareas de Gemini, Microsoft Autopilot, OpenClaw y Hermes Agent.",
  },
  breadcrumb: "Agentes personales",
  hero: {
    kicker: "Agentes personales",
    title: "Agentes personales de IA en 2026: qué son y cuál usar",
    lead: "Un agente personal es una IA que trabaja para ti, no solo contigo: tiene su propio ordenador o navegador, inicia sesión en tus apps, recuerda tus preferencias, sigue trabajando cuando cierras la app y vuelve cuando necesita una decisión. En los últimos meses Meta, xAI, OpenAI, Anthropic, Google, Microsoft y Manus han lanzado el suyo. Esta página explica qué tienen en común, los compara a partir de las páginas de cada fabricante y enlaza a nuestras guías de cada uno.",
    cta: "Empezar",
    secondary: "Compararlos",
    secondaryHref: "#compare",
  },
  sections: [
    {
      kind: "text",
      title: "Qué es un agente personal",
      text: [
        "Un chatbot responde y espera. Un agente personal toma un objetivo, planifica los pasos y los ejecuta en la web y en tus apps, a menudo mientras no estás. Los nuevos comparten cinco rasgos.",
      ],
      points: [
        "Su propio ordenador: una máquina en la nube o un navegador donde hace clic, escribe y rellena formularios como una persona.",
        "Tus apps: correo, calendario, archivos y chat, con los accesos que tú elijas.",
        "Memoria: aprende tus preferencias y no necesita las mismas instrucciones dos veces.",
        "Siempre activo: tareas programadas y recurrentes, y trabajo que continúa cuando cierras la app.",
        "Aprobaciones: se detiene para pedir tu visto bueno antes de enviar, comprar o cualquier otra cosa que marques como sensible.",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Agentes personales de IA comparados",
      text: ["A partir de las páginas de cada fabricante el 10 de noviembre de 2026. La disponibilidad cambia rápido; compruébala antes de registrarte."],
      headers: ["Agente", "Fabricante", "Pensado para", "Quién puede usarlo", "Forma más barata de entrar"],
      rows: [
        ["[Meta Muse](/personal-agent/meta-muse)", "Meta", "Tareas del día a día y gestiones personales", "EE. UU., mayores de 18, cuenta de Meta", "Gratis con un límite semanal; Power $20/mes"],
        ["[Grok Bot](/personal-agent/grok-bot)", "xAI", "Trabajo: un equipo de Bots en tus apps", "X Premium, Super, Ultra; SuperGrok; planes de Cursor", "Crédito de prueba gratis"],
        ["[ChatGPT dots](/blog/chatgpt-dots)", "OpenAI", "Objetivos de larga duración dentro de ChatGPT", "ChatGPT Pro y Business Premium", "ChatGPT Pro"],
        ["[Claude Duet](/blog/claude-duet)", "Anthropic", "Un Claude proactivo que viene a ti", "Claude Pro, Max, Ultra en EE. UU., con lista de espera", "Claude Pro"],
        ["[Base44 Superagent](/personal-agent/base44-superagent)", "Base44", "Un agente personal en WhatsApp, Telegram, Slack o el navegador, con flujos de trabajo", "Cualquiera con una cuenta de Base44", "Créditos del plan de Base44; Starter $16/mes con facturación anual"],
        ["[Manus Cue](/personal-agent/manus-cue)", "Manus", "Agentes con su propio correo, teléfono, cartera y ordenador", "Acceso anticipado por invitación", "Gratis durante el acceso anticipado"],
        ["[Tareas de Gemini (Spark)](/personal-agent/gemini-spark)", "Google", "Recados, investigación y archivos desde Gemini", "Google AI Pro o Ultra, fuera del EEE, el Reino Unido y Suiza", "Google AI Pro"],
        ["Microsoft Autopilot (Scout)", "Microsoft", "Trabajo en Microsoft 365 y Teams", "Organizaciones de Frontier, con licencia de GitHub Copilot", "A través de tu organización"],
        ["[OpenClaw](/blog/openclaw-alternatives)", "Código abierto", "Un asistente autoalojado en tus apps de chat", "Cualquiera; se ejecuta en tu ordenador", "Gratis; pagas el modelo"],
        ["[Hermes Agent](/blog/hermes-agent-vs-openclaw)", "Nous Research, código abierto", "Un agente autoalojado que aprende skills", "Cualquiera; se ejecuta en tu ordenador", "Gratis; pagas el modelo"],
      ],
    },
    {
      kind: "text",
      id: "which",
      title: "¿Qué agente personal deberías usar?",
      points: [
        "Quieres ayuda con las gestiones personales y todavía no quieres pagar: Meta Muse, gratis en EE. UU. Consulta [casos de uso de Meta Muse](/personal-agent/meta-muse-use-cases).",
        "Quieres un equipo de agentes en tareas de trabajo, según un horario: Grok Bot, con rutinas que se ejecutan según un horario o un disparador. Consulta [rutinas de Grok Bot](/personal-agent/grok-bot-routines).",
        "Ya pagas ChatGPT Pro: ChatGPT dots. Con Claude Pro o superior: Claude Duet, con lista de espera.",
        "Vives en las apps de Google: las tareas de Gemini con Google AI Pro. En Microsoft 365 en el trabajo: Autopilot, si tu organización está en Frontier.",
        "Quieres un agente que pueda hacer llamadas y pagar dentro de un presupuesto: Manus Cue, en acceso anticipado. Consulta [Manus Cue](/personal-agent/manus-cue).",
        "Lo quieres en tu propia máquina con tu propio modelo: OpenClaw o Hermes Agent, los dos de código abierto.",
      ],
    },
    {
      kind: "table",
      id: "ai-coworkers",
      title: "Compañeros de trabajo de IA para tu trabajo",
      text: [
        "Agentes pensados para tareas de trabajo más que para recados, con una guía de cada uno. A partir de las páginas de cada fabricante el 13 de noviembre de 2026; más en [compañeros de trabajo de IA comparados](/blog/ai-coworker).",
      ],
      headers: ["Compañero de trabajo de IA", "Fabricante", "Pensado para", "Forma más barata de entrar"],
      rows: [
        ["[Claude Cowork](/personal-agent/claude-cowork)", "Anthropic", "Investigación, documentos, hojas de cálculo y presentaciones en las apps de Claude", "Claude Pro, $20/mes"],
        ["[Copilot Cowork](/personal-agent/copilot-cowork)", "Microsoft", "Tareas de varios pasos en Outlook, Teams y archivos de Office", "Licencia de Microsoft 365 Copilot más Copilot Credits"],
        ["[ChatGPT Work](/personal-agent/chatgpt-work)", "OpenAI", "Tareas que terminan en una presentación, una hoja de cálculo o un análisis", "Limitado en ChatGPT Free, en la app de escritorio; completo desde Plus, $20/mes"],
        ["[Cursor Projects](/personal-agent/cursor-projects)", "Cursor", "Un agente coordinador que dirige muchos agentes de programación en la nube", "Cursor Premium, $30/mes"],
        ["[Lindy](/personal-agent/lindy)", "Lindy", "Un asistente en el correo, Slack, iMessage y el teléfono", "Prueba gratis; después, $29.99/mes por usuario activo"],
        ["[OpenWorker](/personal-agent/openworker)", "Andrew Ng, código abierto", "Un compañero de trabajo de IA de escritorio que pregunta antes de actuar", "Gratis; tu propia clave de modelo o un modelo local"],
        ["[OpenBot](/personal-agent/openbot)", "CopilotKit, código abierto", "Un espacio de trabajo autoalojado para compañeros de trabajo de IA", "Gratis para proyectos personales"],
        ["[Suparagent](/personal-agent/suparagent)", "Código abierto", "Agentes con nombre y rutinas sobre Claude Code, Codex o Gemini CLI", "Gratis si lo alojas tú"],
      ],
    },
    {
      kind: "text",
      id: "safety",
      title: "Antes de entregar tus cuentas",
      points: [
        "Conecta solo lo que necesite una tarea, y prefiere el acceso de solo lectura cuando se ofrezca (Muse te deja elegir correo de solo lectura).",
        "Mantén las aprobaciones activas para enviar, comprar y todo lo público. Muse y Gemini preguntan antes de enviar o comprar por defecto; en Grok Bot, donde Auto Review deja pasar la mayoría de las acciones, añade reglas de Ask first.",
        "Sabe quién más puede usar una sesión iniciada: los Bots de Grok comparten un mismo ordenador, así que una web en la que inicia sesión un Bot queda abierta para los demás.",
        "Revisa los límites de uso: los agentes que trabajan en segundo plano gastan tokens mientras no estás.",
        "Lee el registro de actividad de vez en cuando; los fabricantes advierten que estos agentes pueden equivocarse o hacer cosas inesperadas.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Con Crewmark",
      title: "Agentes personales para tu vida, empleados de IA para tu trabajo",
      text: [
        "Los agentes personales giran en torno a los recados de una persona. Crewmark gira en torno a un trabajo: convierte tu propio Claude Code o Codex en un empleado de IA con un rol, un objetivo en cifras, horario laboral y un heartbeat, que toma la siguiente issue de un tablero compartido, comenta mientras trabaja y te escribe cuando se queda bloqueado.",
      ],
      steps: [
        {
          title: "Elige un rol",
          text: "Empieza por un [rol de empleado de IA](/ai-employees): ingeniero de software, especialista SEO, agente de marketing, social media manager o diseñador.",
        },
        {
          title: "Ejecútalo con el plan que ya tienes",
          text: "Funciona dentro de tu propio Claude Code o Codex, así que no hay una factura de tokens aparte. Consulta los [precios](/pricing).",
        },
        {
          title: "Deja que siga",
          text: "Se despierta cada 15 a 240 minutos durante el horario que fijes. Consulta [cómo ejecutar Claude Code 24/7](/blog/run-claude-code-24-7).",
        },
      ],
    },
  ],
  mid: {
    title: "¿Quieres un agente con un trabajo, no solo con recados?",
    text: "Los empleados de Crewmark avanzan por un tablero compartido con un heartbeat, con el plan de Claude Code o Codex que ya pagas.",
    button: "Empezar",
  },
  faq: {
    title: "Preguntas frecuentes",
    items: [
      {
        q: "¿Qué es un agente personal de IA?",
        a: "Una IA que hace tareas por ti en lugar de limitarse a responder: tiene su propio ordenador o navegador, usa tus apps, recuerda tus preferencias, ejecuta trabajo programado y en segundo plano, y pregunta antes de las acciones sensibles.",
      },
      {
        q: "¿Cuál es el mejor agente personal de IA en 2026?",
        a: "Depende de dónde estés ya. Meta Muse es el más fácil de probar (gratis en EE. UU.), Grok Bot tiene las rutinas más detalladas para el trabajo, ChatGPT dots y Claude Duet vienen con los planes Pro, y OpenClaw o Hermes Agent encajan con quien quiere autoalojarlo.",
      },
      {
        q: "¿Hay algún agente personal de IA gratis?",
        a: "Meta Muse es gratis en EE. UU. con un límite semanal, Grok Bot tiene un crédito de prueba gratis, Manus Cue es gratis durante el acceso anticipado, y OpenClaw y Hermes Agent son software libre de código abierto (pagas el modelo).",
      },
      {
        q: "Grok Bot vs Muse vs Dots: ¿en qué se diferencian?",
        a: "Muse es el agente de Meta para tareas del día a día, gratis para empezar. Grok Bot es el agente de xAI para el trabajo, con varios Bots y rutinas. ChatGPT dots son los agentes siempre activos de OpenAI dentro de ChatGPT, en Pro y Business Premium.",
      },
      {
        q: "¿Un agente personal es lo mismo que un empleado de IA?",
        a: "No exactamente. Un agente personal trabaja para una persona en sus recados. Un empleado de IA, en el sentido de Crewmark, tiene un rol y un objetivo, avanza por el tablero de un equipo según un horario e informa a las personas con las que trabaja.",
      },
      {
        q: "¿Es seguro usar agentes personales de IA?",
        a: "Están hechos con aprobaciones, máquinas aisladas y registros de actividad, pero los fabricantes dicen que pueden equivocarse. Conecta solo lo que necesites, mantén las aprobaciones activas para enviar y comprar, y revisa lo que han hecho.",
      },
    ],
  },
  cta: {
    title: "Recados para tu agente personal. Un trabajo para un empleado de IA.",
    text: "Crewmark convierte sesiones de Claude Code y Codex en empleados de IA con roles, objetivos, horario laboral y un heartbeat.",
    button: "Empezar",
  },
  checked: "Comprobado con los anuncios, la documentación, el centro de ayuda y las páginas de precios de cada fabricante el 10 de noviembre de 2026.",
  disclaimer:
    "Crewmark es un producto independiente, sin relación con Meta, xAI, OpenAI, Anthropic, Manus, Google, Microsoft, OpenClaw ni Nous Research y sin su respaldo. Los nombres de los productos son marcas de sus titulares.",
};
