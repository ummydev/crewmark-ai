import type { GuideCopy } from "@/components/landing/guide-article";

// Spanish translation of /pricing/factory; the English master is src/content/product-pricing/factory.ts.

export const copy: GuideCopy = {
  meta: {
    title: "Factory AI: precios (Free, Pro $20, Plus, Max y Teams)",
    description:
      "Precios de Factory AI: Free con tu inferencia, Pro $20, Plus $100 y Max $200 al mes, y Teams. Límites de uso, crédito Extra Usage y cómo se cobran los tokens.",
  },
  breadcrumb: "Precios de Factory",
  parent: { name: "Comparativas", href: "/compare" },
  hero: {
    kicker: "Precios · Factory",
    title: "Precios de Factory AI: planes de Droids, límites de uso y tokens",
    lead: "Factory crea los Droids, agentes de programación que se ejecutan en la Factory App, en la Droid CLI, en CI y en ordenadores en la nube alojados por Factory. Su plan Free cuesta $0 si aportas tu propia inferencia: inicias sesión con ChatGPT, GitHub Copilot u OpenRouter, o conectas tus propias claves de API. Los planes de pago van desde Pro, a $20 al mes, hasta Max, a $200 al mes, por persona, y Teams cuesta $60 al mes por equipo más $40 al mes por persona. Los planes de pago tienen límites de uso en ventanas móviles, y Extra Usage es crédito prepagado adicional. Aquí tienes los planes, cómo se facturan el uso y los tokens, y cómo se compara el precio con Devin, Claude Code, Codex y OpenCode.",
    cta: "Empezar",
    secondary: "Lo que pagas de verdad",
    secondaryHref: "#costs",
  },
  sections: [
    {
      kind: "table",
      id: "plans",
      title: "Planes y precios de Factory",
      text: [
        "Según la página de precios de [factory.com](https://factory.com) y la documentación de precios de Factory, comprobadas el 13 de noviembre de 2026. Precios en dólares estadounidenses tal como aparecen (“/mo”, al mes).",
      ],
      headers: ["Plan", "Precio", "Qué incluye"],
      rows: [
        [
          "Free",
          "$0/mes por persona",
          "Aportas tu propia inferencia: inicias sesión con ChatGPT, GitHub Copilot u OpenRouter, o conectas tus propias claves de API o un endpoint personalizado",
        ],
        [
          "Pro",
          "$20/mes por persona",
          "App de escritorio, CLI y SDK, todos los modelos disponibles; límites de uso en ventanas móviles de 5 horas, 7 días y 30 días",
        ],
        ["Plus", "$100/mes por persona", "Unas 5 veces el uso de Pro; los mismos límites en ventanas móviles"],
        ["Max", "$200/mes por persona", "Unas 10 veces el uso de Pro; los mismos límites en ventanas móviles"],
        ["Teams", "$60/mes por equipo más $40/mes por persona", "Hasta 10 puestos"],
        ["Business y Enterprise", "Contactar con ventas", "Opciones de despliegue on-premise en Enterprise"],
      ],
    },
    {
      kind: "text",
      id: "costs",
      title: "Lo que pagas de verdad por Factory",
      points: [
        "Inferencia en Free. El plan Free funciona con la inferencia que aportas: un inicio de sesión con ChatGPT, GitHub Copilot u OpenRouter, o tus propias claves de API o un endpoint personalizado. Los tokens los factura ese proveedor o ese plan.",
        "Standard Usage en los planes de pago. Pro, Plus y Max tienen cada uno límites de uso en ventanas móviles de 5 horas, 7 días y 30 días. Plus da unas 5 veces el uso de Pro, y Max unas 10 veces. El Standard Usage que no gastas no se acumula para el periodo siguiente.",
        "Extra Usage. Para más uso está Extra Usage, un crédito prepagado con un mínimo de $10 y sin caducidad.",
        "Las Missions necesitan Extra Usage. Las Missions, que planifican funcionalidades e hitos, necesitan Extra Usage activado y se pausan cuando alcanzan un límite de uso.",
        "Workstreams consume más tokens. Workstreams (beta), en Pro, Plus, Max y Teams, consume más tokens que una sola sesión. Todavía no está en Business ni en Enterprise.",
        "Modelos. Factory indica “todos los principales modelos de frontera y de pesos abiertos, incluidas las últimas versiones de GPT-5, Claude Opus y Sonnet, Gemini” (“all leading frontier and open-weight models, including the latest versions of GPT-5, Claude Opus and Sonnet, Gemini”), un grupo de modelos de pesos abiertos llamado “Droid Core”, y tus propias claves de API o modelos locales (BYOK).",
        "Puestos. Pro, Plus y Max tienen precio por persona. Teams tiene un máximo de 10 puestos; Business y Enterprise se contratan a través de ventas.",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Precios de Factory frente a otros agentes de programación",
      text: [
        "Precios de entrada según la página de precios de cada producto, comprobados el 13 de noviembre de 2026, en dólares estadounidenses.",
        "Cara a cara: [Factory vs Claude Code](/compare/factory-vs-claude-code). Más opciones en [alternativas a Factory](/alternatives/factory).",
      ],
      headers: ["Producto", "Precio desde", "Opción gratuita"],
      rows: [
        ["Factory", "Free $0 con tu propia inferencia; Pro $20/mes", "Sí: Free si aportas tu propia inferencia"],
        ["[Devin](/pricing/devin)", "Free $0; Pro $20/mes", "Sí: plan Free con una cuota ligera"],
        [
          "[Claude Code](/compare/factory-vs-claude-code)",
          "En Claude Pro, $20/mes o $17/mes con facturación anual",
          "No: no está en Claude Free; también sirven los créditos de API con pago por uso",
        ],
        [
          "Codex",
          "En ChatGPT Plus, $20/mes; o una clave de API de OpenAI a precios de API",
          "ChatGPT Free ($0) incluye GPT-6 Luna en la app de escritorio, “sujeto a despliegue gradual” (“subject to rollout”)",
        ],
        [
          "[OpenCode](/pricing/opencode)",
          "Agente gratis; OpenCode Go $10/mes, Go Plus $40/mes",
          "Sí: el agente (MIT) y modelos gratuitos con un límite diario de solicitudes",
        ],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Con Crewmark",
      title: "Quédate con la suscripción que ya tienes. Dale a tu agente un rol y un tablero.",
      text: [
        "Factory vende su propio agente con planes y límites de uso. Crewmark es un gestor de issues para un equipo de empleados de IA. Cada empleado es una conversación de Claude Code o Codex en tu propio ordenador, con un rol, objetivos en cifras y un horario laboral. Se despierta con un latido y toma issues de un tablero compartido. El uso del agente sigue corriendo por la suscripción de Claude o ChatGPT que ya pagas, sin una factura de tokens aparte.",
        "Los precios de Crewmark: Free a $0 (1 proyecto, hasta 3 empleados de IA, 1 persona). Pro a $5/mes y Team a $10/mes llegarán próximamente. La facturación aún no está implementada, así que hasta entonces todas las cuentas pueden usar Crewmark gratis. Es de código abierto (GPL-3.0) y se puede autoalojar.",
      ],
      steps: [
        {
          title: "Elige un rol",
          text: "Entre los [roles de empleados de IA](/ai-employees), como ingeniero de software, especialista SEO o analista de datos.",
        },
        {
          title: "Pon el trabajo en un tablero",
          text: "Asigna issues y haz que las habituales se repitan; el latido despierta al empleado para que tome la siguiente.",
        },
        {
          title: "Consulta los planes",
          text: "[Precios de Crewmark](/pricing), y trabajos con su configuración en [casos de uso de Claude Code](/use-cases/claude-code) y [casos de uso de Codex](/use-cases/codex).",
        },
      ],
    },
  ],
  mid: {
    title: "¿Ya pagas Claude o ChatGPT?",
    text: "Crewmark convierte tu Claude Code o Codex en empleados de IA con roles, un latido y un tablero compartido.",
    button: "Empezar",
  },
  faq: {
    title: "Preguntas frecuentes sobre los precios de Factory AI",
    items: [
      {
        q: "¿Factory AI es gratis?",
        a: "Sí, si aportas tu propia inferencia. El plan Free cuesta $0 por persona: inicias sesión con ChatGPT, GitHub Copilot u OpenRouter, o conectas tus propias claves de API o un endpoint personalizado.",
      },
      {
        q: "¿Cuánto cuesta Factory AI al mes?",
        a: "Por persona, Pro cuesta $20, Plus $100 y Max $200 al mes. Teams cuesta $60 al mes por equipo más $40 al mes por persona, para hasta 10 puestos. Business y Enterprise tienen precio a través de ventas.",
      },
      {
        q: "¿Cuál es el modelo de precios de Factory AI?",
        a: "Un plan por persona con Standard Usage sujeto a límites en ventanas móviles de 5 horas, 7 días y 30 días, más Extra Usage opcional: crédito prepagado con un mínimo de $10 que no caduca. El Standard Usage que no gastas no se acumula para el periodo siguiente.",
      },
      {
        q: "¿Cómo cobra Factory AI los tokens?",
        a: "En Free, los tokens los factura la cuenta o la clave de API que aportas. En Pro, Plus y Max, el uso de modelos se descuenta del Standard Usage de tu plan y de sus límites de uso, y Extra Usage es el crédito prepagado para usar más. Workstreams consume más tokens que una sola sesión.",
      },
      {
        q: "¿Factory AI tiene precios para empresas?",
        a: "Business y Enterprise se contratan a través de ventas, sin precio publicado. Enterprise ofrece opciones de despliegue on-premise. Teams, a $60 al mes más $40 por persona, tiene un máximo de 10 puestos.",
      },
      {
        q: "¿Factory AI es de código abierto?",
        a: "No. Ni la Droid CLI ni la Factory App publican código fuente o una licencia de código abierto; github.com/Factory-AI/factory contiene un README y documentación. Tienes opciones de código abierto en [alternativas a Factory](/alternatives/factory).",
      },
    ],
  },
  cta: {
    title: "Compara el precio. Después, dale un trabajo a tu agente.",
    text: "Crewmark convierte sesiones de Claude Code y Codex en empleados de IA con roles, objetivos, horario laboral y un latido.",
    button: "Empezar",
  },
  checked:
    "Comprobado con factory.com/pricing y la documentación de precios de Factory el 13 de noviembre de 2026. Los precios de los demás productos proceden de sus propias páginas de precios en la misma fecha.",
  disclaimer:
    "Crewmark es un producto independiente, sin relación con Factory ni con ninguna otra empresa mencionada en esta página y sin su respaldo. Los nombres de producto son marcas de sus respectivos titulares.",
};
