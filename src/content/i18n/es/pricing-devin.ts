import type { GuideCopy } from "@/components/landing/guide-article";

// Spanish translation of /pricing/devin; the English master is src/content/product-pricing/devin.ts.

export const copy: GuideCopy = {
  meta: {
    title: "Devin: precios 2026 (Free, Pro $20, Max $200 y Teams)",
    description:
      "Precios de Devin: Free a $0, Pro a $20 al mes, Max a $200, Teams y Enterprise. Cuotas, créditos bajo demanda, puestos y cómo se compara su precio.",
  },
  breadcrumb: "Precios de Devin",
  parent: { name: "Comparativas", href: "/compare" },
  hero: {
    kicker: "Precios · Cognition",
    title: "Precios de Devin: cada plan, y lo que pagas por encima",
    lead: "Devin, el ingeniero de software de IA de Cognition, tiene un plan Free a $0 con una cuota ligera. Pro cuesta $20 al mes y Max $200 al mes, ambos para un usuario. Teams figura como “$80/mes por el plan de equipo + $40/mes por cada puesto de desarrollador completo” (“$80/month for team plan + $40/mo per full dev seat”), y Enterprise se contrata a través de ventas. Cada plan de autoservicio incluye una cuota diaria y/o semanal; cuando la superas, pagas con créditos bajo demanda prepagados. Aquí tienes los planes, los costes extra y cómo se compara el precio de Devin con Factory, Claude Code, Codex, Cursor Projects y Crewmark.",
    cta: "Empezar",
    secondary: "Lo que pagas de verdad",
    secondaryHref: "#costs",
  },
  sections: [
    {
      kind: "table",
      id: "plans",
      title: "Planes y precios de Devin",
      text: [
        "Según la página de precios de [devin.ai](https://devin.ai) y la documentación de facturación de Devin, comprobadas el 13 de noviembre de 2026. Precios en dólares estadounidenses.",
      ],
      headers: ["Plan", "Precio", "Qué incluye"],
      rows: [
        ["Free", "$0", "Una cuota ligera y disponibilidad limitada de modelos"],
        [
          "Pro",
          "$20 al mes",
          "Devin Cloud, todos los modelos disponibles, uso adicional a precios de API; un usuario",
        ],
        ["Max", "$200 al mes", "Cuotas más altas; un usuario"],
        [
          "Teams",
          "“$80/mes por el plan de equipo + $40/mes por cada puesto de desarrollador completo” (“$80/month for team plan + $40/mo per full dev seat”)",
          "Hasta 100 usuarios; un “modo gratuito” (“Free mode”, SWE-2) con hasta 2 sesiones en la nube simultáneas por miembro",
        ],
        ["Enterprise", "“Hablemos” (“Let's talk”)", "VPC y despliegue dedicado"],
      ],
    },
    {
      kind: "text",
      id: "costs",
      title: "Lo que pagas de verdad por Devin",
      points: [
        "Primero, una cuota. Los planes de autoservicio de Devin usan una cuota diaria y/o semanal.",
        "Después, créditos prepagados. El uso por encima de la cuota se descuenta de créditos bajo demanda prepagados. En Pro, el uso adicional se factura a precios de API.",
        "Tu plan de ChatGPT para los modelos GPT. Pro, Max y Teams pueden usar un plan de ChatGPT vinculado para el uso de modelos GPT.",
        "Modelos según el plan. Free tiene una disponibilidad limitada de modelos; Pro tiene todos los modelos disponibles. Devin usa SWE-2 de Cognition más “modelos de frontera de OpenAI, Claude, Gemini y SpaceXAI, además de los principales modelos de código abierto” (“frontier models from OpenAI, Claude, Gemini, and SpaceXAI, plus leading open source models”), y un enrutador Adaptive elige un modelo para cada tarea.",
        "Puestos. Pro y Max son planes de un solo usuario. Teams admite hasta 100 miembros, y a los equipos más grandes se les remite a Enterprise.",
        "Créditos en Teams. En Teams, las Automations se detienen cuando se agotan los créditos bajo demanda compartidos.",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Precios de Devin frente a otros agentes de programación",
      text: [
        "Precios de entrada según la página de precios de cada producto, comprobados el 13 de noviembre de 2026, en dólares estadounidenses. En los planes que no incluyen el uso de modelos, ese uso lo pagas a tu proveedor de modelos.",
        "Cara a cara: [Devin vs Claude Code](/compare/devin-vs-claude-code), [Devin vs Codex](/compare/devin-vs-codex). Más opciones en [alternativas a Devin](/blog/devin-alternatives).",
      ],
      headers: ["Producto", "Precio desde", "Opción gratuita"],
      rows: [
        ["Devin", "Free $0; Pro $20/mes", "Sí: plan Free con una cuota ligera"],
        [
          "[Factory](/pricing/factory)",
          "Free $0 con tu propia inferencia; Pro $20/mes",
          "Sí: Free si aportas tu propia inferencia",
        ],
        [
          "[Claude Code](/compare/devin-vs-claude-code)",
          "En Claude Pro, $20/mes o $17/mes con facturación anual",
          "No: no está en Claude Free; también sirven los créditos de API con pago por uso",
        ],
        [
          "[Codex](/compare/devin-vs-codex)",
          "En ChatGPT Plus, $20/mes; o una clave de API de OpenAI a precios de API",
          "ChatGPT Free ($0) incluye GPT-6 Luna en la app de escritorio, “sujeto a despliegue gradual” (“subject to rollout”)",
        ],
        [
          "[Cursor Projects](/personal-agent/cursor-projects)",
          "Cursor Premium $30/mes, o $300/año",
          "No: no está en Free, Plus ni el antiguo Hobby",
        ],
        [
          "[Crewmark](/pricing)",
          "Free $0; Pro $5/mes próximamente",
          "Sí: 1 proyecto, hasta 3 empleados de IA; el uso del agente se paga a tu proveedor",
        ],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Con Crewmark",
      title: "¿Ya pagas Claude Code o Codex? Dale un trabajo y un tablero.",
      text: [
        "Devin es un agente propio que se factura por la cuota del plan y por créditos. Crewmark es un gestor de issues para un equipo de empleados de IA. Cada empleado es una conversación de Claude Code o Codex en tu propio ordenador, con un rol, objetivos en cifras y un horario laboral. Se despierta con un latido y toma issues de un tablero compartido. El uso del agente sigue corriendo por la suscripción de Claude o ChatGPT que ya pagas.",
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
    title: "Preguntas frecuentes sobre los precios de Devin",
    items: [
      {
        q: "¿Devin es gratis?",
        a: "Hay un plan Free a $0 con una cuota ligera y disponibilidad limitada de modelos. Pro, a $20 al mes, añade Devin Cloud y todos los modelos disponibles.",
      },
      {
        q: "¿Cuánto cuesta Devin al mes?",
        a: "Pro cuesta $20 al mes y Max $200 al mes, ambos para un usuario. Teams figura como “$80/mes por el plan de equipo + $40/mes por cada puesto de desarrollador completo”, para hasta 100 usuarios. Enterprise aparece como “Hablemos”. Los precios están en dólares estadounidenses.",
      },
      {
        q: "¿Cuál es el modelo de precios de Devin?",
        a: "Un plan con una cuota diaria y/o semanal, más créditos bajo demanda prepagados para el uso que la supere. En Pro, el uso adicional se factura a precios de API. Teams añade una tarifa de equipo y una tarifa por cada puesto de desarrollador completo.",
      },
      {
        q: "¿Cómo funcionan los planes Teams y Enterprise de Devin?",
        a: "Teams admite hasta 100 miembros, y sus Automations se detienen cuando se agotan los créditos bajo demanda compartidos. A los equipos más grandes se les remite a Enterprise, que tiene precio a través de ventas y ofrece VPC y despliegue dedicado.",
      },
      {
        q: "¿Puedo usar mi plan de ChatGPT con Devin?",
        a: "Sí, en Pro, Max y Teams. Un plan de ChatGPT vinculado cubre el uso de modelos GPT.",
      },
      {
        q: "¿Devin es de código abierto?",
        a: "No. Devin no publica código fuente ni una licencia de código abierto; github.com/CognitionAI/devin-cli contiene paquetes de instalación, documentación y scripts. Tienes opciones de código abierto en [alternativas a Devin](/blog/devin-alternatives).",
      },
    ],
  },
  cta: {
    title: "Compara el precio. Después, dale un trabajo a tu agente.",
    text: "Crewmark convierte sesiones de Claude Code y Codex en empleados de IA con roles, objetivos, horario laboral y un latido.",
    button: "Empezar",
  },
  checked:
    "Comprobado con devin.ai/pricing y la documentación de facturación de Devin el 13 de noviembre de 2026. Los precios de los demás productos proceden de sus propias páginas de precios en la misma fecha.",
  disclaimer:
    "Crewmark es un producto independiente, sin relación con Cognition ni con ninguna otra empresa mencionada en esta página y sin su respaldo. Los nombres de producto son marcas de sus respectivos titulares.",
};
