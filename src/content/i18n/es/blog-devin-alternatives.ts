import type { GuideCopy } from "@/components/landing/guide-article";
import { plan } from "@/lib/pricing";

// es translation of /blog/devin-alternatives; the English master is src/content/blog/devin-alternatives.ts.

const free = plan("free");
const pro = plan("pro");

const install = `# OpenHands Agent Canvas (necesita Node 24+ y uv)
npm install -g @openhands/agent-canvas
agent-canvas

# OpenCode
curl -fsSL https://opencode.ai/v2/install | bash

# mini-swe-agent (el sucesor de SWE-agent)
pip install uv && uvx mini-swe-agent

# Cline CLI
npm i -g cline

# Goose CLI
curl -fsSL https://github.com/aaif-goose/goose/releases/download/stable/download_cli.sh | bash`;

export const copy: GuideCopy = {
  meta: {
    title: "Alternativas a Devin (2026): open source, gratis y más baratas",
    description:
      "Las mejores alternativas a Devin AI en 2026, con los precios actuales de cada proveedor: agentes de código abierto que puedes instalar hoy (OpenHands, OpenCode, mini-swe-agent, Cline, Goose), agentes en la nube de OpenAI, Anthropic, Google y GitHub, y plataformas para equipos.",
  },
  breadcrumb: "Alternativas a Devin",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-10" },
  hero: {
    kicker: "Blog · Ingenieros de software de IA",
    title: "Las mejores alternativas a Devin en 2026: de código abierto, gratis y más baratas",
    lead: "Devin, de Cognition, es un ingeniero de software de IA autónomo: lo mencionas en Slack o Teams, le asignas un ticket de Linear o Jira o lo apuntas a una CI que falla, y trabaja en su propia máquina virtual y abre una pull request. En 2026 tiene un nivel gratuito y planes desde $20 al mes. Las alternativas se dividen en tres grupos: agentes de código abierto que ejecutas tú mismo, agentes en la nube de los creadores de modelos y plataformas para equipos. Cada una sirve a un perfil distinto; aquí verás a quién, con precios sacados de la web de cada proveedor.",
    cta: "Empezar",
    secondary: "Alternativas de código abierto",
    secondaryHref: "#open-source",
  },
  sections: [
    {
      kind: "text",
      title: "Elecciones rápidas",
      points: [
        "Lo quieres de código abierto y en tus propios servidores: OpenHands, el proyecto que empezó como OpenDevin y ahora es un centro de control autoalojado para agentes de programación.",
        "Vives en el terminal y quieres cualquier modelo: OpenCode, con licencia MIT y unas 226.000 estrellas en GitHub.",
        "Ya pagas ChatGPT o Claude: las tareas en la nube de OpenAI Codex o las sesiones en la nube de Claude Code, incluidas en planes desde $20 al mes.",
        "Tu equipo trabaja en GitHub: Copilot en la nube, asignado desde issues e incluido desde Copilot Pro a $10 al mes.",
        "Quieres agentes impulsados por tickets en toda la empresa: los Droids de Factory.",
        "Quieres un ingeniero de IA con un trabajo permanente sobre tu propio Claude Code o Codex: Crewmark.",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Comparativa de alternativas a Devin",
      text: [
        "Los precios son el plan más barato que incluye el agente, según la página de precios de cada proveedor el 10 de noviembre de 2026. Estrellas redondeadas, de la API de GitHub ese mismo día.",
      ],
      headers: ["Herramienta", "Código abierto", "Dónde se ejecuta", "Desde", "Ideal para"],
      rows: [
        ["[Devin](https://devin.ai)", "No", "Su propia VM en la nube por sesión; Devin Desktop y CLI en local", "Nivel gratuito; Pro $20/mes", "Equipos que quieren pasar tickets a un agente desde Slack, Teams o Jira"],
        ["[OpenHands](https://github.com/OpenHands/OpenHands)", "Sí, MIT (~93k estrellas)", "Tu portátil, Docker, una VM; también nube alojada", "Gratis autoalojado; Teams $500/mes", "Un agente al estilo Devin en tu propia infraestructura y con tus claves de modelo"],
        ["[OpenCode](https://github.com/anomalyco/opencode)", "Sí, MIT (~226k estrellas)", "Terminal, app de escritorio, SDK", "Modelos gratis incluidos; Go $10/mes", "Usuarios de terminal que quieren cualquiera de más de 200 proveedores de modelos"],
        ["[mini-swe-agent](https://github.com/SWE-agent/mini-swe-agent)", "Sí, MIT (~9.5k estrellas)", "CLI local", "Gratis (pagas el modelo)", "Investigación, benchmarks y corrección reproducible de issues"],
        ["[Cline](https://github.com/cline/cline)", "Sí, Apache 2.0 (~71k estrellas)", "CLI, VS Code, JetBrains, escritorio", "Gratis (pagas el modelo)", "Un agente de código abierto dentro de tu editor"],
        ["[Goose](https://github.com/aaif-goose/goose)", "Sí, Apache 2.0 (~56k estrellas)", "App de escritorio, CLI, API", "Gratis (pagas el modelo)", "Un solo agente para código y otras tareas, con extensiones MCP"],
        ["[OpenAI Codex](https://chatgpt.com/codex)", "Solo la CLI (Apache 2.0)", "La nube de OpenAI; CLI, IDE, escritorio", "ChatGPT Plus $20/mes", "Suscriptores de ChatGPT"],
        ["[Claude Code](https://code.claude.com/docs/en/claude-code-on-the-web)", "No", "VM gestionada por Anthropic por cada sesión en la nube; también en local", "Claude Pro $20/mes", "Usuarios de Claude Code que quieren que el trabajo siga con el portátil cerrado"],
        ["[Google Jules](https://jules.google)", "No", "VM en la nube de Google", "15 tareas/día en el plan base; Google AI Pro $19.99/mes", "Desarrolladores individuales con Gemini"],
        ["[GitHub Copilot en la nube](https://github.com/features/copilot/plans)", "No", "El sandbox en la nube de GitHub", "Copilot Pro $10/mes", "Equipos que ya están en GitHub"],
        ["[Cursor Cloud Agents](https://cursor.com/docs/cloud-agent)", "No", "Las VM en la nube de Cursor", "Premium $30/mes", "Equipos que ya trabajan en Cursor"],
        ["[Factory](https://factory.com)", "No", "Escritorio, CLI, web; agentes en la nube y locales", "Pro $20/mes", "Organizaciones de ingeniería que dirigen agentes desde tickets y chat"],
        ["[Crewmark](/pricing)", "Sí, GPL-3.0", "Tu ordenador, dentro de tu propio Claude Code o Codex", `Plan Free (${free.projects} proyecto, ${free.employees} empleados de IA); Pro $${pro.price}/mes próximamente`, "Equipos pequeños que quieren un ingeniero de IA con horario, con un plan que ya pagan"],
      ],
    },
    {
      kind: "steps",
      id: "open-source",
      title: "Alternativas de código abierto a Devin que puedes ejecutar hoy",
      text: [
        "Devin no es de código abierto. Estas sí, y cada una se instala con un solo comando. Pones tu propia clave del modelo, así que el software es gratis y pagas a tu proveedor de modelos. Lee el script antes de pasarlo a tu shell.",
      ],
      steps: [
        {
          title: "OpenHands (antes OpenDevin)",
          text: "Ahora se llama Agent Canvas: un centro de control autoalojado que ejecuta el agente de OpenHands, y también Claude Code, Codex, Gemini u OpenCode, en tu portátil, en Docker o en una VM, con automatizaciones para Slack, GitHub y Linear. Autoalojarlo es gratis; el plan Teams alojado cuesta $500 al mes para hasta 10 usuarios.",
          code: install,
        },
        {
          title: "OpenCode",
          text: "Un agente de terminal con licencia MIT que funciona con más de 200 proveedores de modelos, incluidos los locales, más una app de escritorio en beta. Incluye modelos gratis sin cuenta; OpenCode Go cuesta $10 al mes, y puedes iniciar sesión con una suscripción de ChatGPT o GitHub Copilot. Consulta [alternativas a OpenCode](/blog/opencode-alternatives) para agentes parecidos.",
        },
        {
          title: "SWE-agent y mini-swe-agent",
          text: "El agente de investigación de Princeton y Stanford que toma una issue de GitHub e intenta arreglarla. Su README dice ahora que mini-swe-agent lo ha sustituido, así que empieza por ahí. Gratis; solo pagas el modelo.",
        },
        {
          title: "Cline, Goose, Aider y Kilo Code",
          text: "Cline es un agente con licencia Apache para el terminal, VS Code y JetBrains con modos Plan y Act. Goose, ahora bajo la Agentic AI Foundation de la Linux Foundation, se ocupa de código y otras tareas mediante extensiones MCP. Aider y Kilo Code también son agentes de programación de código abierto populares; Devika, uno de los primeros clones de Devin de código abierto, no se actualiza desde septiembre de 2025.",
        },
      ],
      source: { label: "Fuente: OpenHands en GitHub", href: "https://github.com/OpenHands/OpenHands" },
    },
    {
      kind: "text",
      id: "cloud",
      title: "Agentes en la nube de los creadores de modelos",
      text: [
        "Si quieres el flujo de Devin de “asígnalo y olvídate” sin otro proveedor más, los creadores de modelos ya lo ofrecen dentro de planes que quizá ya tengas.",
      ],
      points: [
        "OpenAI Codex: tareas en la nube en chatgpt.com/codex, incluidas desde ChatGPT Plus a $20 al mes; las tareas en la nube consumen más de tu cuota, y una clave de API cubre la CLI y el IDE, pero no las funciones en la nube.",
        "Claude Code: sesiones en la nube desde claude.ai/code, la app de Claude o `claude --cloud`, cada una en una VM aislada gestionada por Anthropic, en los planes Pro ($20 al mes), Max, Ultra y Team, sin cargo aparte por la VM.",
        "Google Jules: clona tu repositorio en una VM en la nube y abre una pull request; 15 tareas al día en el plan base y 100 con Google AI Pro a $19.99 al mes.",
        "GitHub Copilot en la nube: asignas una issue y Copilot abre una pull request; incluido desde Copilot Pro a $10 al mes, con el uso facturado en GitHub AI Credits.",
        "Cursor Cloud Agents: se ejecutan en VM aisladas y se inician desde Cursor, la web, Slack o Linear; desde el plan Premium de $30 al mes.",
      ],
    },
    {
      kind: "text",
      id: "devin-pricing",
      title: "Cuánto cuesta Devin en 2026",
      text: [
        "Muchas listas siguen citando un plan de equipo de $500 y $2.25 por ACU. Hoy, en devin.ai, los planes de autoservicio no usan ACU; la facturación combina una cuota incluida con créditos bajo demanda, y solo Enterprise se factura en ACU.",
      ],
      points: [
        "Free: $0, con una cuota ligera.",
        "Pro: $20 al mes, con Devin Cloud incluido; el uso adicional, a precio de API.",
        "Max: $200 al mes.",
        "Teams: $80 al mes más $40 al mes por cada puesto de desarrollador completo, hasta 100 usuarios.",
        "Enterprise: a medida.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Con Crewmark",
      title: "Un ingeniero de IA con un trabajo permanente, sobre tu propio agente",
      text: [
        "Devin y los agentes en la nube esperan a que les asignes cada tarea. Crewmark convierte tu propio Claude Code o Codex en un ingeniero de software de IA con un rol, un objetivo en cifras, horario laboral y un heartbeat: durante su turno se despierta, toma la siguiente issue de un tablero, abre una pull request y te escribe cuando necesita una decisión. Funciona con la suscripción que ya pagas, en tu ordenador.",
      ],
      steps: [
        {
          title: "Contrata el rol de ingeniero de software",
          text: "Su briefing, su objetivo y su rutina vienen configurados; consulta el [ingeniero de software de IA](/ai-employees/software-engineer).",
        },
        {
          title: "Pon el trabajo en un tablero",
          text: "Asigna issues como lo harías a un compañero; el empleado mantiene al día el estado y los comentarios. Consulta [kanban para Claude Code](/blog/claude-code-kanban).",
        },
        {
          title: "Deja que siga",
          text: "Fija un horario laboral, incluso nocturno. Consulta [cómo ejecutar Claude Code 24/7](/blog/run-claude-code-24-7) y [tareas de larga duración en Codex](/blog/codex-long-running-tasks).",
        },
      ],
    },
  ],
  mid: {
    title: "¿Quieres un ingeniero al estilo Devin con el plan de Claude Code o Codex que ya tienes?",
    text: "Los empleados de Crewmark se despiertan con un heartbeat, avanzan por un tablero y abren pull requests.",
    button: "Empezar",
  },
  faq: {
    title: "Preguntas frecuentes sobre las alternativas a Devin",
    items: [
      {
        q: "¿Cuál es la mejor alternativa de código abierto a Devin?",
        a: "OpenHands, que empezó como OpenDevin, es la más parecida: una plataforma de agentes autoalojada que ejecutas con tus propias claves de modelo. Para un agente de terminal, OpenCode; para investigación y benchmarks, mini-swe-agent.",
      },
      {
        q: "¿OpenDevin es lo mismo que OpenHands?",
        a: "Sí. OpenDevin pasó a llamarse OpenHands, de All Hands AI. Tiene licencia MIT y ahora se distribuye como Agent Canvas, que también ejecuta Claude Code, Codex y otros agentes.",
      },
      {
        q: "¿Devin es gratis?",
        a: "Hay un nivel gratuito con una cuota ligera. Los planes de pago son Pro a $20 al mes, Max a $200 y Teams a $80 al mes más $40 por puesto de desarrollador, según devin.ai el 10 de noviembre de 2026.",
      },
      {
        q: "¿Devin sigue cobrando por ACU?",
        a: "Solo en Enterprise. Los planes de autoservicio combinan ahora una cuota incluida con créditos bajo demanda, así que la antigua cifra de $2.25 por ACU ya no se aplica a ellos.",
      },
      {
        q: "Devin vs Claude Code o Codex: ¿cuál debería usar?",
        a: "Si ya pagas Claude o ChatGPT, sus sesiones y tareas en la nube te dan el flujo de Devin de asignar y olvidarte sin coste adicional. Devin añade flujos con Slack, Teams, Jira y Linear pensados para equipos.",
      },
      {
        q: "¿Cuál es la alternativa más barata a Devin?",
        a: "Los agentes de código abierto no cuestan nada aparte del uso del modelo. Entre las opciones alojadas, GitHub Copilot Pro a $10 al mes incluye el agente en la nube, y Google Jules permite 15 tareas al día en su plan base.",
      },
    ],
  },
  cta: {
    title: "Dale a tu Claude Code o Codex un trabajo, no solo una tarea.",
    text: "Crewmark convierte las sesiones de Claude Code y Codex en empleados de IA con roles, objetivos, horario laboral y un heartbeat.",
    button: "Empezar",
  },
  checked:
    "Verificado con la web, la página de precios, la documentación y el repositorio de GitHub de cada producto el 10 de noviembre de 2026.",
  disclaimer:
    "Crewmark es un producto independiente, no afiliado ni respaldado por Cognition ni por ninguna empresa de la lista. Los nombres de productos son marcas comerciales de sus propietarios.",
};
