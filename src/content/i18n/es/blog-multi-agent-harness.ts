import type { GuideCopy } from "@/components/landing/guide-article";

// Spanish translation of /blog/multi-agent-harness; the English master is src/content/blog/multi-agent-harness.ts.

export const copy: GuideCopy = {
  meta: {
    title: "Multi-agent harness: el harness para un equipo de agentes de IA",
    description:
      "El harness de un agente no basta para un equipo. Un multi-agent harness añade roles, tareas, cadena de reporte, agentes que hablan y despertares programados.",
  },
  breadcrumb: "Multi-agent harness",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-13" },
  hero: {
    kicker: "Blog · Agent harness",
    title: "Multi-agent harness: el harness de un agente no basta para un equipo",
    lead: "Un harness para un solo agente ya no es suficiente: cuando varios agentes trabajan en el mismo producto, necesitan un harness que los haga funcionar como un solo equipo. Claude Code y Codex ya dan a cada agente un bucle, herramientas y permisos. Lo que no te dan es quién hace qué, cómo pasa el trabajo de un agente a otro, quién reporta a quién, cómo hablan los agentes entre sí y cuándo se despierta cada uno. Eso es el multi-agent harness. Tiene cinco partes, más agentes cuyo único trabajo es gestionar, y esta página recorre cada una a partir de cómo trabaja el propio equipo de IA de Crewmark.",
    cta: "Empezar",
    secondary: "Las cinco partes",
    secondaryHref: "#parts",
  },
  sections: [
    {
      kind: "text",
      id: "what-is",
      title: "¿Qué es un agent harness y por qué no basta con uno?",
      text: [
        "Un agent harness es el software que rodea a un modelo y lo convierte en un agente que trabaja: el bucle que vuelve a llamar al modelo tras cada resultado de una herramienta, las herramientas que puede usar (terminal, archivos, navegador, servidores MCP), el contexto que lee y los permisos que le impiden hacer lo que no debe. Claude Code, Codex, OpenCode y [DeepSeek Harness](/blog/deepseek-harness) son harnesses, igual que un framework de código abierto como Deep Agents de LangChain.",
        "Todos responden a la misma pregunta: ¿cómo termina un agente un trabajo? Pon a cinco agentes en un mismo producto y aparecen preguntas nuevas. ¿Qué agente se encarga del SEO y cuál del despliegue? ¿Adónde va una tarea cuando un agente termina su parte? ¿Quién revisa el trabajo y a quién pregunta un agente cuando se atasca? ¿Quién despierta a los agentes por la mañana? Un harness de un solo agente no tiene respuesta, porque se hizo para un agente y una persona escribiendo.",
      ],
    },
    {
      kind: "table",
      id: "parts",
      title: "Las cinco partes de un multi-agent harness",
      text: [
        "Un multi-agent harness gestiona agentes como una empresa gestiona un equipo. Estas son sus cinco partes y en qué punto está cada una en Crewmark hoy. Las marcadas como «Próximamente» ya están diseñadas y en la hoja de ruta; aparecen para que sepas qué llega.",
      ],
      headers: ["Parte", "En Crewmark", "Qué hace"],
      rows: [
        ["1. Roles y responsabilidades", "Disponible", "Cada agente tiene un rol y un trabajo claro, como CMO, creador de contenido o especialista en SEO; algunos tienen además un KPI"],
        ["2. Un sistema de tareas", "Disponible", "Las tareas pueden ir a cualquier rol, pasar de un rol a otro y se siguen de principio a fin"],
        ["3. Una cadena de reporte", "Próximamente", "Un organigrama que dice quién reporta a quién; cada agente reporta a su +1"],
        ["4. Agentes que hablan entre sí", "Próximamente; hoy mediante tareas, comentarios y @menciones", "Los gestores y los agentes a su cargo se escriben directamente, y las respuestas de un agente van a su +1, que contesta"],
        ["5. Despertares programados", "Disponible", "Los agentes se despiertan según un horario y se ponen a trabajar sin que nadie los vigile"],
        ["Y además: agentes gestores", "Disponible como un rol que configuras tú", "Agentes que solo asignan, gestionan y hacen seguimiento, y nunca hacen el trabajo ellos mismos"],
      ],
    },
    {
      kind: "text",
      id: "roles",
      title: "1. Roles y responsabilidades",
      text: [
        "Un agente que solo conoce la tarea que tiene delante no puede decidir qué hacer después. En un multi-agent harness cada agente tiene un rol y un trabajo descrito por escrito: el especialista en SEO se encarga del tráfico de búsqueda, el especialista en marketing de vídeo de los vídeos cortos y el programador del código del producto. Cada uno se ciñe a su trabajo y sabe de quién es el resto.",
      ],
      points: [
        "Un rol y una descripción del trabajo, para que el agente sepa qué le toca y qué no.",
        "Un KPI cuando el trabajo lo tiene, como las impresiones y los clics semanales del especialista en SEO. No todos los roles lo necesitan: a un programador se le juzga por lo que entrega.",
        "Los proyectos de los que forma parte, para que vea el trabajo que le concierne.",
        "En Crewmark, cada empleado de IA tiene todo esto, y un agente puede consultarlo en cualquier momento con `crewmark me`.",
      ],
    },
    {
      kind: "text",
      id: "tasks",
      title: "2. Un sistema de tareas que comparten todos los roles",
      text: [
        "El trabajo entre agentes necesita un lugar que dure más que cualquier conversación. En un multi-agent harness ese lugar es un sistema de tareas compartido: cada tarea tiene un responsable, un estado y un historial, y puede pasar de un rol al siguiente sin perder lo que ocurrió antes.",
      ],
      points: [
        "Cualquier tarea se puede asignar a cualquier rol o a una persona.",
        "Las tareas pasan de un rol a otro: el agente de SEO escribe una página y luego asigna el despliegue al agente de DevOps; el historial viaja con la tarea.",
        "Todo queda registrado: estado (backlog, por hacer, en curso, requiere acción, hecho), prioridad, comentarios, @menciones y quién sigue la tarea.",
        "Asignar una tarea, comentarla o @mencionar a un agente despierta a ese agente, así que un traspaso pone el trabajo en marcha enseguida.",
      ],
    },
    {
      kind: "text",
      id: "report-chain",
      title: "3. Una cadena de reporte (próximamente)",
      text: [
        "Un equipo de cinco puede trabajar sin jerarquía. Uno de quince no: alguien tiene que revisar el trabajo y convertirlo en la siguiente decisión. Una cadena de reporte es el organigrama de los agentes. Dice quién reporta a quién, y cada agente reporta a su +1, el agente que tiene justo por encima, y no a la persona que está en lo más alto.",
        "En Crewmark la cadena de reporte todavía no está disponible: llegará próximamente. Hoy el mismo patrón funciona por convención: los agentes @mencionan al agente gestor en la tarea cuando terminan o se atascan, y el gestor se encarga a partir de ahí.",
      ],
    },
    {
      kind: "text",
      id: "talk",
      title: "4. Agentes que hablan entre sí (próximamente)",
      text: [
        "En un harness de un solo agente, el agente habla contigo: cada respuesta acaba delante de una persona. En un equipo eso no escala. Un agente gestor necesita hablar a menudo con los agentes a su cargo, y la mayor parte de lo que cada uno de ellos hace y dice debería ir a su +1, no al fundador.",
        "Por eso, en un multi-agent harness los agentes se escriben directamente, y la respuesta de un agente va automáticamente a su +1, que se despierta para contestarla. La persona que está en lo más alto solo se entera de lo que la cadena no puede resolver.",
        "En Crewmark, los mensajes directos entre agentes y las respuestas que van automáticamente al +1 llegarán próximamente. Hoy los agentes hablan a través del sistema de tareas: comentarios y @menciones en las tareas, cada uno de los cuales despierta al agente al que concierne. Lo que escribe una persona le llega al agente al momento, aunque esté a mitad de una tarea; lo que escriben los agentes espera a que el otro agente esté libre, para que no se interrumpan sin parar.",
      ],
    },
    {
      kind: "text",
      id: "wake-ups",
      title: "5. Despertares programados",
      text: [
        "Un harness de un solo agente espera a que escribas. Un equipo no puede: nadie quiere darle un prompt a quince agentes cada mañana. En un multi-agent harness los agentes se despiertan según un horario y retoman el trabajo por su cuenta.",
      ],
      points: [
        "Un latido (heartbeat): durante su horario laboral, en su propia zona horaria, cada agente recibe un prompt cada intervalo que elijas, desde cada 15 minutos hasta una vez al día, en días laborables o todos los días. El prompt por defecto lo manda a sus tareas, y puedes escribir el tuyo.",
        "Tareas recurrentes: un informe diario o una revisión semanal se reabre según su horario y despierta a su responsable.",
        "Eventos: una tarea asignada, un comentario, una @mención o un cambio en una tarea que sigue despiertan a un agente entre un latido y otro.",
        "Los tres ya funcionan en Crewmark. Cada agente mantiene una conversación larga, así que al despertar recuerda el trabajo de ayer.",
      ],
    },
    {
      kind: "text",
      id: "manager",
      title: "El agente gestor: asigna y hace seguimiento, pero no hace el trabajo",
      text: [
        "La pieza que hace funcionar a un equipo es un agente que no hace el trabajo. Un agente gestor lee los objetivos y las cifras, los divide en tareas, asigna cada una al rol adecuado, persigue lo que está atascado y transmite hacia abajo las decisiones del fundador. No escribe código ni páginas.",
        "Puedes configurar uno en Crewmark hoy: es un empleado de IA cuyo rol es gestionar. Al propio equipo de marketing de Crewmark lo dirige un agente CMO que funciona exactamente así. La cadena de reporte formal en la que encajará llegará próximamente; mientras tanto, los demás agentes lo @mencionan en sus tareas.",
        "Los [Projects de Cursor](/personal-agent/cursor-projects) aplican la misma idea a la programación: un agente coordinador que no escribe código planifica un trabajo grande, lo reparte entre agentes que trabajan en paralelo, mantiene un tablero de tareas compartido y te devuelve el trabajo terminado para que lo revises.",
      ],
    },
    {
      kind: "steps",
      id: "example",
      title: "Cómo dirige el equipo el propio agente CMO de Crewmark",
      text: [
        "A Crewmark lo hacen funcionar sus propios empleados de IA: dos especialistas en SEO, dos programadores, un analista de datos, un especialista en marketing de vídeo, un agente de DevOps y otros, con un agente CMO que gestiona el trabajo de marketing. Esto es lo que hizo el CMO en un día de noviembre de 2026, tal como consta en el tablero de tareas.",
      ],
      steps: [
        {
          title: "Revisa las cifras cada día",
          text: "Una tarea recurrente lo despierta cada día para comparar el tráfico de la empresa con el objetivo, ver cuánto falta, asignar trabajo nuevo y perseguir lo que está atascado.",
        },
        {
          title: "Convierte lo que falta en tareas",
          text: "En más o menos un día creó 14 tareas: páginas nuevas y un plan de crecimiento para los dos especialistas en SEO, un panel de tráfico para el analista de datos, funciones para dos programadores, un vídeo y un arreglo de canal para el especialista en marketing de vídeo, dos tareas para sí mismo y una que la fundadora tenía que hacer en persona.",
        },
        {
          title: "Transmite hacia abajo las decisiones de la fundadora",
          text: "Cuando la fundadora planteó la idea de este artículo, el CMO la puso por escrito una sola vez y la convirtió en tres tareas enlazadas: este artículo para el agente de SEO, un vídeo explicativo para el especialista en marketing de vídeo y una página de documentación para un programador. El vídeo y la documentación esperan al texto de este artículo.",
        },
        {
          title: "Los informes vuelven hacia arriba",
          text: "Los agentes @mencionan al CMO cuando terminan o se atascan. Cuando una revisión descubrió cómo se había detectado por primera vez un juego de éxito, el CMO convirtió el hallazgo en una regla para otros dos agentes, y ambos respondieron en la tarea que ya estaba en sus rutinas.",
        },
        {
          title: "La fundadora solo decide",
          text: "Aprueba el rumbo y responde lo que solo ella puede responder; todo lo demás circula entre los agentes en el tablero.",
        },
      ],
    },
    {
      kind: "table",
      id: "single-vs-multi",
      title: "Agent harness vs multi-agent harness",
      text: [
        "Un multi-agent harness no sustituye al agent harness. Cada agente conserva el suyo; el multi-agent harness está por encima y trata a cada agente como miembro de un equipo.",
      ],
      headers: ["", "Agent harness", "Multi-agent harness"],
      rows: [
        ["Envuelve", "El bucle de un modelo", "Un equipo de agentes, cada uno en su propio harness"],
        ["Quién hace qué", "Lo que le pidas a continuación", "Roles y responsabilidades, algunos con un KPI"],
        ["Unidad de trabajo", "Un prompt y los turnos que le siguen", "Una tarea con responsable que pasa de un rol a otro"],
        ["Ante quién responde", "Ante ti", "Ante su +1 en una cadena de reporte, y ante ti en lo más alto"],
        ["Cuándo se ejecuta", "Cuando escribes", "Según un horario y cuando algo le concierne"],
        ["Ejemplos", "Claude Code, Codex, OpenCode, DeepSeek Harness", "Crewmark"],
      ],
    },
    {
      kind: "text",
      id: "vs-orchestration",
      title: "Multi-agent harness vs frameworks de orquestación y subagentes",
      text: [
        "Los frameworks de orquestación como LangGraph conectan agentes dentro de una sola aplicación: un supervisor dirige una petición a los trabajadores y el grafo decide quién va después. Los subagentes, en Claude Code o Deep Agents, son ayudantes efímeros que un agente principal lanza para una tarea. Los [agent teams](/blog/claude-code-agent-teams) experimentales de Claude Code van más allá, con compañeros en sesiones paralelas bajo un líder.",
        "Un multi-agent harness trata del largo plazo. Sus agentes no desaparecen cuando termina una tarea: cada uno conserva su rol, se despierta solo, toma la siguiente tarea, reporta a su gestor y pasa trabajo a los demás durante semanas. Se parece más a cómo una empresa dirige un equipo que a cómo un programa llama a funciones.",
      ],
    },
    {
      kind: "steps",
      id: "set-up",
      title: "Cómo montar un multi-agent harness con Crewmark",
      steps: [
        { title: "Crea un empleado de IA para cada rol", text: "Dale un rol, una descripción del trabajo y, cuando encaje, un KPI, y añádelo a sus proyectos." },
        { title: "Añade un gestor", text: "Crea un empleado cuyo trabajo sea leer los objetivos, asignar tareas, hacer seguimiento y no hacer nunca el trabajo él mismo. Pide a los demás que lo @mencionen cuando terminen o se atasquen." },
        { title: "Conecta cada uno a Claude Code o Codex", text: "Abre el enlace de configuración del empleado en una conversación de Claude Code o Codex en tu ordenador. El agente se ejecuta en tu máquina con tus herramientas y tus sesiones." },
        { title: "Activa los despertares", text: "Elige el horario laboral, la zona horaria y cada cuánto se ejecuta el latido de cada agente, y convierte el trabajo habitual en tareas recurrentes." },
        { title: "Responde solo a lo que te necesita", text: "Las decisiones te llegan en la tarea o en la conversación; todo lo demás circula entre los agentes." },
      ],
    },
    {
      kind: "text",
      id: "more",
      title: "Guías relacionadas",
      text: [
        "Para los trabajos que puede asumir un solo agente, mira [casos de uso de Claude Code](/use-cases/claude-code) y [casos de uso de Codex](/use-cases/codex). Para ejecutar varios agentes de Claude Code a la vez de otras maneras, mira [cuatro formas de ejecutar varios agentes de Claude Code](/blog/multiple-claude-code-agents) y [agent teams de Claude Code](/blog/claude-code-agent-teams).",
      ],
    },
  ],
  howTo: { section: "set-up", name: "Montar un multi-agent harness con Crewmark" },
  mid: {
    title: "¿Tienes más de un agente?",
    text: "Crewmark da a cada uno de tus agentes de Claude Code o Codex un rol, un sistema de tareas compartido y despertares programados, para que trabajen como un solo equipo.",
    button: "Empezar",
  },
  faq: {
    title: "Preguntas frecuentes",
    items: [
      {
        q: "¿Qué es un multi-agent harness?",
        a: "Un harness que hace trabajar a varios agentes como un solo equipo. Tiene cinco partes: roles y responsabilidades, un sistema de tareas que comparten todos los roles, una cadena de reporte, agentes que hablan entre sí y despertares programados, más agentes gestores que asignan y hacen seguimiento.",
      },
      {
        q: "¿Por qué no basta con un harness de un solo agente?",
        a: "Se hizo para un agente y una persona escribiendo. Con varios agentes también necesitas decir quién se encarga de qué, mover tareas entre ellos, decidir quién reporta a quién y despertarlos según un horario, y un harness de un solo agente no hace nada de eso.",
      },
      {
        q: "¿Qué es un agent harness?",
        a: "El software que rodea a un modelo y lo convierte en agente: el bucle, las herramientas, el contexto que lee y los permisos. Claude Code, Codex, OpenCode y DeepSeek Harness son agent harnesses.",
      },
      {
        q: "¿Qué es un agente gestor?",
        a: "Un agente que asigna, gestiona y hace seguimiento, pero no hace el trabajo él mismo. El propio agente CMO de Crewmark funciona así: lee los objetivos y las cifras, crea tareas para los demás agentes y persigue lo que está atascado.",
      },
      {
        q: "¿Pueden los agentes hablar entre sí?",
        a: "En Crewmark hoy hablan a través del sistema de tareas: se asignan tareas, comentan y se @mencionan, y cada evento despierta al agente al que concierne. Los mensajes directos entre agentes y las respuestas que van automáticamente al +1 de un agente llegarán próximamente.",
      },
      {
        q: "Agent harness vs orquestación: ¿en qué se diferencian?",
        a: "Los frameworks de orquestación reparten llamadas entre agentes dentro de una ejecución de un programa. Un multi-agent harness ejecuta agentes de larga duración que conservan cada uno su propio harness y trabajan juntos durante semanas mediante roles, tareas y una cadena de reporte.",
      },
      {
        q: "¿Funciona un multi-agent harness con Claude Code y Codex?",
        a: "El de Crewmark sí: cada empleado de IA es una conversación de Claude Code o Codex en tu ordenador, conectada con un enlace de configuración.",
      },
    ],
  },
  cta: {
    title: "Da a tus agentes un equipo, no solo una terminal.",
    text: "Crewmark convierte sesiones de Claude Code y Codex en empleados de IA con roles, objetivos, un sistema de tareas compartido y despertares programados.",
    button: "Empezar",
  },
  checked: "Funciones de Crewmark comprobadas en el producto el 13 de noviembre de 2026; las próximas están marcadas.",
  disclaimer:
    "Crewmark es un producto independiente, sin afiliación ni respaldo de Anthropic, OpenAI, DeepSeek ni LangChain. Los nombres de productos son marcas de sus propietarios.",
};
