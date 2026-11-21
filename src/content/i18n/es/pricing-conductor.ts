import type { GuideCopy } from "@/components/landing/guide-article";

// Spanish translation of /pricing/conductor; the English master is src/content/product-pricing/conductor.ts.

export const copy: GuideCopy = {
  meta: {
    title: "Conductor: precios (app de Mac gratis, planes en la nube y Meta)",
    description:
      "Conductor es gratis y el uso de modelos lo factura el proveedor de cada agente. Desde el 4 de noviembre de 2026 no admite registros y Conductor Cloud cierra.",
  },
  breadcrumb: "Precios de Conductor",
  parent: { name: "Comparativas", href: "/compare" },
  hero: {
    kicker: "Precios · Conductor",
    title: "Precios de Conductor: una app de Mac gratis, planes en la nube y lo que cambió el 4 de noviembre de 2026",
    lead: "“Conductor es de uso gratuito” (“Conductor is free to use.”). No factura ni revende el uso de modelos: Claude Code, Codex, OpenCode y Cursor funcionan con tus propias suscripciones o claves de API. Los workspaces en la nube requerían un plan Pro, Team o Enterprise, pero hoy no se publica ningún precio. El 4 de noviembre de 2026, Conductor anunció que se une a Meta y cerró los nuevos registros y las descargas. Aquí tienes lo que pagas, lo que ha cambiado y cómo se compara el precio con Vibe Kanban, Claude Squad, Cursor Projects y Crewmark.",
    cta: "Empezar",
    secondary: "Qué ha cambiado",
    secondaryHref: "#change",
  },
  sections: [
    {
      kind: "table",
      id: "plans",
      title: "Planes y precios de Conductor",
      text: [
        "Según conductor.build y su documentación, comprobados el 13 de noviembre de 2026. La página /pricing ahora redirige a la página de inicio, y no hay precios de planes publicados en ninguna parte del sitio.",
      ],
      headers: ["Plan", "Precio", "Qué incluye"],
      rows: [
        [
          "Conductor (app de Mac)",
          "De uso gratuito",
          "Claude Code, Codex y OpenCode (incluidos) y Cursor Agent en paralelo, cada uno en su propio worktree de git; revisión de diffs, checks, pull requests y merge",
        ],
        [
          "Pro",
          "Sin precio publicado; desde el 4 de noviembre de 2026, los usuarios de Pro conservan las funciones de Pro sin coste",
          "Workspaces en la nube y Routines (ejecuciones de agentes programadas o activadas desde GitHub)",
        ],
        ["Team (solo por invitación)", "Sin precio publicado", "Workspaces en la nube y Routines"],
        ["Enterprise", "Sin precio publicado", "Workspaces en la nube"],
        [
          "Uso de modelos",
          "Lo factura el proveedor de cada agente",
          "Tus suscripciones actuales (por ejemplo, Claude Pro o Max, o ChatGPT) o tus claves de API",
        ],
      ],
    },
    {
      kind: "text",
      id: "costs",
      title: "Lo que pagas de verdad por usar Conductor",
      points: [
        "Los proveedores de tus agentes. Conductor no factura ni revende el uso de modelos. Cada agente se factura a través de la cuenta de su proveedor o de su clave de API; Cursor Agent funciona a través de la API de Cursor.",
        "Un Mac. Conductor es solo para macOS y “todavía no está disponible para Windows ni Linux” (“not available for Windows or Linux yet.”). Los agentes se ejecutan directamente en tu máquina, con los permisos de tu cuenta de usuario y sin sandbox.",
        "Nada por la app en sí. La app local es de uso gratuito.",
        "Los workspaces en la nube requerían un plan Pro, Team o Enterprise. Desde el 4 de noviembre de 2026, los usuarios gratuitos no pueden mejorar su plan, los usuarios de Pro conservan las funciones de Pro sin coste y los suscriptores activos reciben un reembolso.",
      ],
    },
    {
      kind: "text",
      id: "change",
      title: "Qué cambió el 4 de noviembre de 2026",
      text: [
        "Conductor anunció que se une a Meta. El pie de página del sitio dice ahora “Conductor de Meta, © 2026 Meta” (“Conductor from Meta, © 2026 Meta.”). Las fechas que importan si lo usas o estabas a punto de hacerlo:",
      ],
      points: [
        "4 de noviembre de 2026: se cierran los nuevos registros y las descargas. Los usuarios gratuitos no pueden mejorar su plan, los usuarios de Pro conservan las funciones de Pro sin coste y los suscriptores activos reciben un reembolso.",
        "13 de noviembre de 2026: Conductor Cloud pasa a solo lectura.",
        "20 de noviembre de 2026: Conductor Cloud cierra y empieza el borrado de los datos de usuario en la nube.",
        "Hasta principios de 2027: la app local recibe nuevos modelos y correcciones de errores críticos, y después se retira. Todos los datos de usuario se borran cuando la app deja de funcionar.",
        "Si buscas algo a lo que cambiarte, consulta [alternativas a Conductor](/blog/conductor-alternatives).",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Precios de Conductor frente a herramientas similares",
      text: [
        "Precios según el sitio de cada producto, comprobados el 13 de noviembre de 2026. Con cualquiera de ellas, pagas además los agentes de programación o los modelos que ejecutes, salvo que algún plan de abajo los incluya.",
        "Cara a cara: [Vibe Kanban vs Conductor](/compare/vibe-kanban-vs-conductor), [Claude Squad vs Conductor](/compare/claude-squad-vs-conductor). Más opciones en [alternativas a Conductor](/blog/conductor-alternatives).",
      ],
      headers: ["Producto", "Precio desde", "Opción gratuita"],
      rows: [
        [
          "Conductor",
          "De uso gratuito; precios de los planes en la nube no publicados",
          "Sí, pero los nuevos registros y las descargas están cerrados desde el 4 de noviembre de 2026",
        ],
        [
          "[Vibe Kanban](/compare/vibe-kanban-vs-conductor)",
          "App local gratis; el anuncio de cierre de bloop del 10 de abril de 2026 dice que las suscripciones se cancelaron",
          "Sí: de código abierto (Apache-2.0), mantenido por la comunidad",
        ],
        [
          "[Claude Squad](/compare/claude-squad-vs-conductor)",
          "Gratis; sin plan de pago publicado",
          "Sí: de código abierto (AGPL-3.0)",
        ],
        [
          "[Cursor Projects](/personal-agent/cursor-projects)",
          "Cursor Premium $30/mes, o $300/año",
          "No: no está en Free, Plus ($8/mes) ni el antiguo Hobby",
        ],
        [
          "[Crewmark](/pricing)",
          "Gratis; Pro $5/mes y Team $10/mes próximamente",
          "Sí: 1 proyecto, hasta 3 empleados de IA, 1 persona",
        ],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Con Crewmark",
      title: "Conductor ejecuta agentes en paralelo. Crewmark les da un trabajo y un tablero.",
      text: [
        "Crewmark es un gestor de issues para un equipo de empleados de IA. Cada empleado es una conversación de Claude Code o Codex en tu propio ordenador, con un rol, objetivos y un horario laboral. Se despierta con un latido y toma issues de un tablero compartido. La CLI `crewmark` funciona en macOS, Linux y Windows, y los agentes usan la suscripción de Claude o ChatGPT que ya pagas.",
        "Los precios de Crewmark: Free a $0 (1 proyecto, hasta 3 empleados de IA, 1 persona). Pro a $5/mes y Team a $10/mes llegarán próximamente. La facturación aún no está implementada, así que hasta entonces todas las cuentas pueden usar Crewmark gratis. Es de código abierto (GPL-3.0) y se puede autoalojar.",
      ],
      steps: [
        {
          title: "Elige un rol",
          text: "Entre los [roles de empleados de IA](/ai-employees), como un ingeniero de software, con objetivos en cifras.",
        },
        {
          title: "Pon el trabajo en un tablero",
          text: "Asigna issues y haz que las habituales se repitan; el latido despierta al empleado para que tome la siguiente.",
        },
        {
          title: "Consulta los planes",
          text: "[Precios de Crewmark](/pricing), y lo que hacen los agentes con él en [casos de uso de Claude Code](/use-cases/claude-code) y [casos de uso de Codex](/use-cases/codex).",
        },
      ],
    },
  ],
  mid: {
    title: "¿Vas a dejar Conductor?",
    text: "Crewmark le da a tu Claude Code o Codex un rol, un latido y un tablero compartido, en macOS, Linux o Windows.",
    button: "Empezar",
  },
  faq: {
    title: "Preguntas frecuentes sobre los precios de Conductor",
    items: [
      {
        q: "¿Conductor es gratis?",
        a: "Sí. “Conductor es de uso gratuito”, y el uso de modelos lo factura el proveedor de cada agente. Eso sí, desde el 4 de noviembre de 2026 los nuevos registros y las descargas están cerrados.",
      },
      {
        q: "¿Cuánto cuesta Conductor?",
        a: "La app de Mac es gratis. Los workspaces en la nube requerían un plan Pro, Team (solo por invitación) o Enterprise, pero hoy no se publica ningún precio para estos planes, y la página /pricing redirige a la página de inicio.",
      },
      {
        q: "¿Conductor cobra comisiones por el uso de modelos?",
        a: "No. Conductor no factura ni revende el uso de modelos. Claude Code, Codex, OpenCode y Cursor Agent usan tus propias suscripciones, como Claude Pro o Max o ChatGPT, o tus claves de API.",
      },
      {
        q: "¿Conductor es de código abierto, o hay que comprar una licencia?",
        a: "Ninguna de las dos cosas. Conductor no es de código abierto (no publica repositorio de código fuente ni licencia), y la app es de uso gratuito, así que no hay precio de licencia.",
      },
      {
        q: "¿Qué pasa con mi suscripción a Conductor Pro?",
        a: "Desde el 4 de noviembre de 2026, los usuarios de Pro conservan las funciones de Pro sin coste y los suscriptores activos reciben un reembolso. Conductor Cloud pasa a solo lectura el 13 de noviembre y cierra el 20 de noviembre de 2026.",
      },
      {
        q: "¿Hasta cuándo seguirá funcionando la app de Conductor?",
        a: "La app local recibe nuevos modelos y correcciones de errores críticos hasta principios de 2027; después se retira, y todos los datos de usuario se borran cuando deja de funcionar. Consulta [alternativas a Conductor](/blog/conductor-alternatives).",
      },
    ],
  },
  cta: {
    title: "Que tus agentes sigan trabajando después de Conductor.",
    text: "Crewmark convierte sesiones de Claude Code y Codex en empleados de IA con roles, objetivos, horario laboral y un latido.",
    button: "Empezar",
  },
  checked:
    "Comprobado con conductor.build, su documentación, su registro de cambios y su anuncio, y con la página de precios de cada producto comparado, el 13 de noviembre de 2026.",
  disclaimer:
    "Crewmark es un producto independiente, sin relación con Conductor, Meta ni ninguna otra empresa mencionada en esta página y sin su respaldo. Los nombres de producto son marcas de sus respectivos titulares.",
};
