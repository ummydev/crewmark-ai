import type { GuideCopy } from "@/components/landing/guide-article";

// Spanish translation of /blog/conductor-alternatives; the English master is src/content/blog/conductor-alternatives.ts.

const announcement = "https://www.conductor.build/announcement";

const rescue = `# Encuentra los worktrees que Conductor creó para este repositorio
git worktree list

# En cada workspace que quieras conservar: haz commit y push de su rama
cd ~/conductor/workspaces/<repo>/<workspace>
git add -A && git commit -m "WIP from Conductor"
git push -u origin HEAD`;

export const copy: GuideCopy = {
  meta: {
    title: "Conductor se une a Meta: fechas de cierre y alternativas | Crewmark",
    description:
      "Conductor, la app de Mac para agentes de Claude Code y Codex en paralelo, se une a Meta. Las fechas de cierre, cómo guardar tus workspaces y las mejores alternativas a Conductor para Mac, Windows y Linux.",
  },
  breadcrumb: "Alternativas a Conductor",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-06" },
  hero: {
    kicker: "Blog · Agentes de programación con IA",
    title: "Conductor se une a Meta: qué pasa ahora y dónde ejecutar tus agentes",
    lead: "Conductor, la app de Mac que ejecuta agentes de Claude Code, Codex, Cursor y OpenCode en workspaces paralelos, anunció el 4 de noviembre de 2026 que se une a Meta. Ya no admite nuevos registros, Conductor Cloud pasa a solo lectura el 13 de noviembre y se apaga el 20 de noviembre, y la app local solo recibirá actualizaciones hasta principios de 2027. Esta guía repasa las fechas, cómo conservar tu trabajo y las alternativas que hacen lo mismo.",
    cta: "Acceso anticipado",
    secondary: "Guarda tus workspaces",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "Qué era Conductor y qué cambia",
      text: [
        "Conductor daba a cada tarea de programación su propio workspace: un worktree de git con su propia rama, archivos, terminal, diff y flujo de revisión, para que varios agentes pudieran trabajar a la vez en un mismo repositorio. Solo funcionaba en macOS, con Claude Code, Codex, Cursor y OpenCode, y añadió Conductor Cloud para workspaces que seguían en marcha lejos de tu Mac.",
        "Su fundador, Charlie Holtz, anunció que el equipo se une a Meta para construir \"la próxima interfaz\", y prometió algo nuevo para principios del año que viene. Meta confirmó el acuerdo a TechCrunch, pero no reveló sus condiciones.",
      ],
    },
    {
      kind: "table",
      title: "El calendario de cierre de Conductor",
      headers: ["Fecha", "Qué ocurre"],
      rows: [
        ["4 de noviembre de 2026", "No hay nuevos registros ni descargas. Los usuarios gratuitos no pueden pasar a Pro; los usuarios Pro conservan sus funciones sin coste. Los suscriptores activos reciben un reembolso."],
        ["13 de noviembre de 2026", "Los workspaces en la nube pasan a solo lectura: puedes leer los chats antiguos y exportar datos, pero no enviar mensajes."],
        ["20 de noviembre de 2026", "Conductor Cloud se apaga y empieza la eliminación de los datos de usuario en la nube."],
        ["Hasta principios de 2027", "La app local de Mac sigue recibiendo modelos nuevos y correcciones de errores críticos, y después se retira; todos los datos de usuario se eliminan cuando se apaga."],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Cómo conservar tu trabajo antes de los plazos",
      steps: [
        {
          title: "Pasa los workspaces en la nube a tu Mac antes del 13 de noviembre",
          text: "Haz clic derecho en cada workspace en la nube dentro de Conductor y elige Transfer to local (transferir a local). El workspace y sus chats se mueven a tu ordenador.",
        },
        {
          title: "Exporta tus datos antes del 20 de noviembre",
          text: "Ve a Settings → Account → Export data (Ajustes → Cuenta → Exportar datos) en Conductor para descargarlo todo, incluidos los chats que quieras guardar como notas o prompts.",
        },
        {
          title: "Haz push de cada rama que te importe",
          text: "Los workspaces locales son worktrees de git normales, por lo general en `~/conductor/workspaces/<repo>/<workspace>`, que comparten el historial de tu repositorio. Haz commit y push de sus ramas para que el trabajo sobreviva a la app.",
          code: rescue,
        },
        {
          title: "Llévate tus scripts de configuración",
          text: "Conductor guarda los scripts de configuración, ejecución y archivado de cada proyecto en `.conductor/settings.toml` o `.conductor/settings.local.toml`. Copia los comandos a tu README o a la configuración de tu próxima herramienta, y enumera archivos como `.env` en un `.worktreeinclude` si te pasas a los worktrees de Claude Code.",
        },
        {
          title: "Elige un sustituto y pruébalo con una tarea",
          text: "Compara las opciones de abajo y luego ejecuta una tarea real en la nueva herramienta antes de que termine tu acceso a Conductor Pro.",
        },
      ],
      source: { label: "Fuente: el anuncio de Conductor", href: announcement },
    },
    {
      kind: "table",
      id: "alternatives",
      title: "Alternativas a Conductor, comparadas",
      headers: ["", "Conductor", "Claude Code por sí solo", "App de Codex", "Crewmark"],
      rows: [
        ["Qué es", "App de Mac para agentes en paralelo en worktrees", "`claude --worktree`, sesiones en paralelo en la app de escritorio, agentes en segundo plano", "La app de escritorio de OpenAI con worktrees y tareas en la nube", "Empleados de IA: sesiones de agentes con roles, objetivos, horario laboral y un heartbeat"],
        ["Agentes", "Claude Code, Codex, Cursor, OpenCode", "Claude Code", "Codex", "Claude Code, Codex, DeepSeek Harness, OpenCode"],
        ["Plataformas", "macOS", "macOS, Windows, Linux", "App de escritorio y web", "macOS, Windows, Linux"],
        ["Aislamiento", "Un worktree de git por workspace", "Un worktree de git por sesión o subagente", "Worktrees", "Cada empleado en su propia sesión y checkout"],
        ["Quién inicia la siguiente tarea", "Tú", "Tú (o una programación)", "Tú (o una programación)", "El heartbeat: cada empleado se despierta y toma la siguiente issue"],
        ["Tablero de tareas", "Lista de workspaces", "No", "No", "Sí, con issues, comentarios y mensajes para ti"],
        ["Estado", "La nube termina el 20 de noviembre; la app local, a principios de 2027", "Activo", "Activo", "Acceso anticipado"],
      ],
    },
    {
      kind: "text",
      title: "Qué alternativa a Conductor te conviene",
      points: [
        "Usabas Conductor sobre todo con Claude Code: Claude Code ya hace por sí mismo lo esencial. `claude --worktree <name>` da a cada sesión su propio worktree y su rama, `.worktreeinclude` copia tu `.env` y la app de escritorio ejecuta sesiones en paralelo con un interruptor Worktree. Consulta la [guía de worktrees de Claude Code](/blog/claude-code-worktree).",
        "Usabas sobre todo Codex: la app de escritorio de Codex trae worktrees y tareas en la nube integrados; compara los dos agentes en [Claude Code vs Codex](/blog/claude-code-vs-codex).",
        "Necesitas Windows o Linux: Conductor nunca llegó a esas plataformas; la CLI de Claude Code y Crewmark funcionan en las tres.",
        "Combinabas agentes o quieres que sigan trabajando sin ti: para eso está Crewmark (abajo). Para ejecutar varios agentes a mano, consulta [varios agentes de Claude Code](/blog/multiple-claude-code-agents).",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Con Crewmark",
      title: "Conductor ponía a tus agentes uno al lado del otro. Crewmark les da un trabajo.",
      text: [
        "Conductor hacía fácil iniciar y revisar agentes en paralelo, pero cada workspace seguía esperando a que escribieras el siguiente prompt. Crewmark convierte una sesión de Claude Code, Codex, DeepSeek Harness u OpenCode en un empleado de IA con un rol, un objetivo y un horario laboral, y la despierta con un heartbeat para que tome la siguiente issue de un tablero, con la suscripción que ya pagas.",
      ],
      steps: [
        {
          title: "Trae tus repositorios y tus agentes",
          text: "Ejecuta el comando de configuración en cada proyecto. Varios empleados pueden compartir un repositorio, cada uno en su propio checkout, igual que tus workspaces de Conductor.",
        },
        {
          title: "Dale a cada uno un rol y un objetivo",
          text: "Un programador, un revisor, un redactor SEO: cada uno tiene un objetivo escrito como un número y un horario de trabajo. Lee [qué es un empleado de IA](/ai-employees).",
        },
        {
          title: "Deja que el heartbeat inicie el trabajo",
          text: "Cada 15, 30 o 60 minutos, el empleado se despierta en la misma conversación, toma la siguiente issue y te escribe cuando necesita una decisión; consulta [cómo hacer proactivo a Claude Code](/proactive-claude-code).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Conservar tu trabajo antes del cierre de Conductor" },
  mid: {
    title: "¿Dejas Conductor? No solo lo sustituyas: da un paso más.",
    text: "Crewmark ejecuta Claude Code, Codex y OpenCode como empleados de IA que se despiertan con un heartbeat y toman la siguiente issue por su cuenta.",
    button: "Acceso anticipado",
  },
  faq: {
    title: "Preguntas frecuentes sobre el cierre de Conductor",
    items: [
      {
        q: "¿Va a cerrar Conductor?",
        a: "En parte. Conductor se une a Meta. Conductor Cloud pasa a solo lectura el 13 de noviembre de 2026 y se apaga el 20 de noviembre. La app local de Mac sigue recibiendo modelos nuevos y correcciones críticas hasta principios de 2027, y después se retira.",
      },
      {
        q: "¿Meta compró Conductor?",
        a: "Sí. Conductor anunció el 4 de noviembre de 2026 que se une a Meta, y Meta confirmó la adquisición a TechCrunch. No se revelaron el precio ni las condiciones.",
      },
      {
        q: "¿Todavía puedo descargar Conductor o registrarme?",
        a: "No. Los nuevos registros y las descargas se detuvieron el 4 de noviembre de 2026, y los usuarios gratuitos ya no pueden pasar a Pro.",
      },
      {
        q: "¿Qué pasa con mis datos y mi suscripción?",
        a: "Los datos de usuario en la nube empiezan a eliminarse el 20 de noviembre, y todos los datos de usuario se eliminan cuando la app se apaga. Expórtalos desde Settings → Account → Export data. Los suscriptores activos reciben un reembolso, y los usuarios Pro conservan las funciones Pro sin coste hasta entonces.",
      },
      {
        q: "¿Cuál es la mejor alternativa a Conductor para Claude Code?",
        a: "El propio flag `--worktree` de Claude Code y las sesiones en paralelo de la app de escritorio cubren el trabajo en paralelo aislado. Para que las sesiones tomen trabajo por su cuenta, ejecútalas como empleados de Crewmark.",
      },
      {
        q: "¿Hay una alternativa a Conductor para Windows o Linux?",
        a: "Conductor solo existía para Mac. La CLI de Claude Code con `--worktree`, `git worktree` a secas y Crewmark funcionan en macOS, Windows y Linux.",
      },
      {
        q: "¿Seguirán funcionando mis workspaces de Conductor?",
        a: "Los workspaces locales son simples worktrees de git con ramas normales, así que el código se queda en tu repositorio pase lo que pase con la app. Haz commit y push de las ramas que quieras conservar.",
      },
    ],
  },
  cta: {
    title: "Tus agentes necesitan un nuevo hogar. Dales también un trabajo.",
    text: "Crewmark convierte las sesiones de Claude Code, Codex, DeepSeek Harness y OpenCode en empleados de IA con roles, objetivos, horario laboral y un heartbeat.",
    button: "Acceso anticipado",
  },
  checked: "Comprobado con el anuncio, el registro de cambios y la documentación de Conductor, y el artículo de TechCrunch, el 6 de noviembre de 2026.",
  disclaimer:
    "Crewmark es un producto independiente, sin relación con Conductor, Meta, Anthropic ni OpenAI y sin su respaldo. Conductor es una marca de su titular; Claude y Claude Code, de Anthropic, y Codex, de OpenAI.",
};
