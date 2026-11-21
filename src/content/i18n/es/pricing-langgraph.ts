import type { GuideCopy } from "@/components/landing/guide-article";

// Spanish translation of /pricing/langgraph; the English master is src/content/product-pricing/langgraph.ts.

export const copy: GuideCopy = {
  meta: {
    title: "LangGraph: precios (gratis, LangSmith Plus $39, Agent Server)",
    description:
      "Precios de LangGraph: framework MIT gratis. LangSmith Developer cuesta $0, Plus $39 por puesto al mes con un Agent Server, y cada servidor extra $1.00 por LSU.",
  },
  breadcrumb: "Precios de LangGraph",
  parent: { name: "Comparativas", href: "/compare" },
  hero: {
    kicker: "Precios · Frameworks de agentes",
    title: "Precios de LangGraph: el framework gratis, los planes de LangSmith y el coste de Agent Server",
    lead: "LangGraph es gratis: el framework es de código abierto con licencia MIT y se ejecuta dentro de tu propia aplicación. Lo que cuesta dinero es LangSmith, el producto comercial de LangChain para trazas, evaluación y despliegue. Developer cuesta $0 para un puesto, Plus cuesta $39 por puesto al mes con un Small Agent Server incluido, y Enterprise es a medida. Los Agent Servers adicionales se miden a $1.00 por LSU, y las llamadas a modelos las factura tu proveedor de modelos. Aquí tienes cada plan, lo que cuesta Agent Server y cómo se compara LangGraph con CrewAI, AutoGen, Relevance AI y Paperclip.",
    cta: "Empezar",
    secondary: "Lo que pagas de verdad",
    secondaryHref: "#costs",
  },
  sections: [
    {
      kind: "table",
      id: "plans",
      title: "Planes y precios de LangGraph y LangSmith",
      text: [
        "Según la página de precios de [langchain.com](https://www.langchain.com/langgraph) y la documentación de LangChain, comprobadas el 13 de noviembre de 2026. Precios en dólares estadounidenses; Developer y Plus se facturan mensualmente.",
      ],
      headers: ["Plan", "Precio", "Qué incluye"],
      rows: [
        [
          "Framework LangGraph (código abierto)",
          "Gratis, licencia MIT",
          "Una biblioteca de Python y JavaScript/TypeScript para agentes con estado, que se ejecuta dentro de tu propia aplicación",
        ],
        [
          "LangSmith Developer",
          "$0/puesto al mes",
          "1 puesto; hasta 5.000 trazas base/mes, después pago por uso; sin Agent Server",
        ],
        [
          "LangSmith Plus",
          "$39/puesto al mes",
          "Hasta 10.000 trazas base/mes, después pago por uso; “1 Small Agent Server incluido en alojamiento serverless sin coste” (“1 Small Agent Server included on serverless hosting at no charge”)",
        ],
        [
          "LangSmith Enterprise",
          "A medida, facturado anualmente por adelantado",
          "Añade opciones de despliegue autoalojado e híbrido",
        ],
        [
          "Agent Servers adicionales",
          "$1.00 por LSU, según consumo",
          "Cómputo de runtime 0.0675 LSU/vCPU-h, memoria de runtime 0.0090 LSU/GiB-h, cómputo de base de datos 0.177 LSU/vCPU-h, memoria de base de datos 0.025 LSU/GiB-h",
        ],
      ],
    },
    {
      kind: "text",
      id: "costs",
      title: "Lo que pagas de verdad por LangGraph",
      points: [
        "Tu proveedor de modelos. LangGraph llama a los modelos que use tu código, y “LangGraph no requiere LangChain” (“LangGraph does not require LangChain.”). Esas llamadas a modelos las factura tu proveedor.",
        "Trazas por encima de lo incluido. Developer incluye hasta 5.000 trazas base al mes y Plus hasta 10.000; por encima de eso, las trazas van con pago por uso.",
        "Puestos. Developer está limitado a 1 puesto. Plus cuesta $39 por puesto al mes.",
        "Agent Servers a partir del primero. Plus incluye 1 Small Agent Server en alojamiento serverless. Los siguientes se miden a $1.00 por LSU, así que el cómputo de runtime sale a $0.0675 por vCPU-hora y la memoria de runtime a $0.009 por GiB-hora; el cómputo de base de datos es de 0.177 LSU por vCPU-hora y la memoria de base de datos de 0.025 LSU por GiB-hora.",
        "Las tareas cron siguen ejecutándose. Agent Server admite tareas cron con la programación que definas. La documentación de LangChain recomienda borrar las que no uses, porque las ejecuciones recurrentes pueden generar cargos de API de LLM.",
        "Dónde se aloja. Cloud Agent Server está “totalmente gestionado por LangChain en AWS, Azure y GCP” (“Fully managed by LangChain on AWS, Azure, and GCP”). El despliegue autoalojado y el híbrido son opciones de Enterprise.",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Precios de LangGraph frente a otros frameworks y plataformas de agentes",
      text: [
        "Precios según la página de precios o el README de cada producto, comprobados el 13 de noviembre de 2026, en dólares estadounidenses. El README de AutoGen dice “Este proyecto se ha archivado y Microsoft ya no lo mantiene activamente” (“This project has been archived and is no longer actively maintained by Microsoft”), y Microsoft señala a Agent Framework como su sucesor directo. A 13 de noviembre de 2026, la documentación de Relevance AI dice que su plan Free se ha retirado para los nuevos registros y las cuentas existentes.",
        "Cara a cara: [CrewAI vs LangGraph](/compare/crewai-vs-langgraph). Más opciones en [alternativas a LangGraph](/alternatives/langgraph).",
      ],
      headers: ["Producto", "Precio desde", "Opción gratuita"],
      rows: [
        [
          "LangGraph",
          "Framework gratis; LangSmith Plus $39/puesto al mes",
          "Sí: el framework (MIT) y LangSmith Developer a $0 para 1 puesto",
        ],
        [
          "[CrewAI](/pricing/crewai)",
          "Framework gratis; AMP Basic gratis; Enterprise a medida",
          "Sí: el framework (MIT) y AMP Basic con 50 ejecuciones de flujos de trabajo/mes",
        ],
        [
          "[AutoGen](/alternatives/autogen)",
          "Gratis (código abierto); el README no menciona ningún servicio de pago",
          "Sí: código con licencia MIT; el README dice que está archivado y que Microsoft ya no lo mantiene activamente",
        ],
        [
          "[Relevance AI](/pricing/relevance-ai)",
          "Enterprise, precio a medida a través de ventas",
          "No: su documentación dice que el plan Free se ha retirado",
        ],
        [
          "[Paperclip](/alternatives/paperclip)",
          "Autoalojado gratis; sin precios publicados",
          "Sí: autoalojado (MIT); hay una versión en la nube en lista de espera",
        ],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Con Crewmark",
      title: "¿No estás creando una app de agentes? Dale un rol a Claude Code o Codex.",
      text: [
        "LangGraph sirve para crear agentes con estado en tu propio código. Crewmark es un gestor de issues para un equipo de empleados de IA, pensado para quienes ya usan Claude Code o Codex y quieren que sus agentes sigan adelante con un trabajo sin tener que darles un prompt cada vez. Cada empleado tiene un rol, objetivos en cifras y un horario laboral, se despierta con un latido y toma issues de un tablero compartido. El uso del agente sigue corriendo por la suscripción de Claude o ChatGPT que ya pagas.",
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
    title: "¿Ya usas Claude Code o Codex?",
    text: "Crewmark lo convierte en empleados de IA con roles, un latido y un tablero compartido. Gratis para 1 proyecto y hasta 3 empleados de IA.",
    button: "Empezar",
  },
  faq: {
    title: "Preguntas frecuentes sobre los precios de LangGraph",
    items: [
      {
        q: "¿LangGraph es gratis?",
        a: "Sí. El framework LangGraph es de código abierto con licencia MIT, para Python y JavaScript/TypeScript. LangSmith, el producto comercial de LangChain, también tiene un plan Developer a $0 para un puesto.",
      },
      {
        q: "¿Cuánto cuesta desplegar LangGraph en la nube?",
        a: "El despliegue se ejecuta en LangSmith Agent Server, totalmente gestionado por LangChain en AWS, Azure y GCP. LangSmith Plus ($39 por puesto al mes) incluye 1 Small Agent Server en alojamiento serverless sin coste, y los servidores adicionales se miden a $1.00 por LSU. El plan Developer no incluye Agent Server.",
      },
      {
        q: "Precio del servidor de LangGraph: ¿cuánto cuesta Agent Server?",
        a: "Agent Server (antes LangSmith Deployment) se mide en LSU a $1.00 por LSU: 0.0675 LSU por vCPU-hora de cómputo de runtime, 0.0090 por GiB-hora de memoria de runtime, 0.177 por vCPU-hora de cómputo de base de datos y 0.025 por GiB-hora de memoria de base de datos. Plus incluye un Small Agent Server sin coste.",
      },
      {
        q: "¿Qué incluye LangSmith Plus?",
        a: "$39 por puesto al mes, con facturación mensual: hasta 10.000 trazas base al mes, después pago por uso, y 1 Small Agent Server en alojamiento serverless sin coste.",
      },
      {
        q: "¿Hay precios de LangGraph para empresas?",
        a: "LangSmith Enterprise es a medida y se factura anualmente por adelantado. Los despliegues de Agent Server autoalojados e híbridos son opciones de Enterprise.",
      },
      {
        q: "¿Necesito LangSmith para usar LangGraph?",
        a: "El framework es una biblioteca MIT gratuita que se ejecuta dentro de tu propia aplicación. LangSmith es el producto comercial aparte de LangChain para trazas, evaluación y despliegue de agentes en Agent Server.",
      },
    ],
  },
  cta: {
    title: "Crea el grafo, o dales un trabajo a tus agentes.",
    text: "Crewmark convierte sesiones de Claude Code y Codex en empleados de IA con roles, objetivos, horario laboral y un latido.",
    button: "Empezar",
  },
  checked:
    "Comprobado con langchain.com/pricing y la documentación de LangGraph y LangSmith de LangChain el 13 de noviembre de 2026. Los precios de los demás productos proceden de sus propias páginas en la misma fecha.",
  disclaimer:
    "Crewmark es un producto independiente, sin relación con LangChain ni con ninguna otra empresa mencionada en esta página y sin su respaldo. Los nombres de producto son marcas de sus respectivos titulares.",
};
