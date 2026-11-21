import type { GuideCopy } from "@/components/landing/guide-article";

// Spanish translation of /blog/openclaw-reviews; the English master is src/content/blog/openclaw-reviews.ts (the `en` value of openclawReviews).

const hn = {
  changingMyLife: "https://news.ycombinator.com/item?id=46931805",
  appleIntelligence: "https://news.ycombinator.com/item?id=46893970",
  personalComputer: "https://news.ycombinator.com/item?id=47129647",
  securityNightmare: "https://news.ycombinator.com/item?id=47479962",
  anthropicSubscriptions: "https://news.ycombinator.com/item?id=47633396",
  memory: "https://news.ycombinator.com/item?id=47721955",
  whoIsUsing: "https://news.ycombinator.com/item?id=47783940",
  grokBot: "https://news.ycombinator.com/item?id=49261514",
  agenticSetup: "https://news.ycombinator.com/item?id=50366117",
  saas: "https://news.ycombinator.com/item?id=50392586",
};

export const copy: GuideCopy = {
  meta: {
    title: "OpenClaw: opiniones de los usuarios de Hacker News (2026)",
    description:
      "Opiniones sobre OpenClaw en 10 hilos de Hacker News, de febrero a noviembre de 2026: qué les gusta a los usuarios, las quejas más comunes y a qué se cambian.",
  },
  breadcrumb: "Opiniones sobre OpenClaw",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-13" },
  hero: {
    kicker: "Blog · Opiniones",
    title: "Opiniones sobre OpenClaw: qué dicen los usuarios en Hacker News",
    lead: "OpenClaw es un asistente personal de IA de código abierto que se ejecuta en tu propio ordenador y te responde en apps de chat que ya usas, como WhatsApp, Telegram y Slack. Leímos 10 hilos de Hacker News sobre él, de febrero a noviembre de 2026. A los usuarios les gusta para pequeñas tareas personales y valoran que su memoria sea suya. Las quejas que más aparecieron son que se rompe a menudo y necesita mantenimiento (6 de los 10 hilos) y que su amplio acceso es un riesgo de seguridad (5 de 10).",
    cta: "Empezar",
    secondary: "Ver los temas",
    secondaryHref: "#at-a-glance",
  },
  sections: [
    {
      kind: "text",
      id: "method",
      title: "Cómo recopilamos estas opiniones",
      text: [
        "Leímos 10 hilos de Hacker News sobre OpenClaw el 13 de noviembre de 2026, una página cada vez. Van de febrero a noviembre de 2026, y 7 de ellos son de febrero a abril, cuando se concentró la mayor parte de la conversación. En los hilos más grandes, que llegan a varios cientos de comentarios, leímos los comentarios de primer nivel y los pasajes en torno a los temas clave, no todas las respuestas.",
      ],
      points: [
        "Un tema solo aparece si surgió en al menos 2 de los 10 hilos, y decimos en cuántos. Lo que se dijo en un solo comentario queda fuera.",
        "Uno de los hilos trata sobre Grok Bot; usamos sus comentarios que comparan Grok Bot con OpenClaw. Otro pregunta a la gente por sus configuraciones de IA en general; usamos las menciones a OpenClaw.",
        "También encontramos 9 hilos de Reddit con la búsqueda de Google, pero no pudimos abrir reddit.com, así que no los hemos leído ni resumido. Aparecen por título en [Más conversación en Reddit](#reddit).",
        "Es una muestra de la conversación pública, no una encuesta. Quienes publican sobre una herramienta suelen tener opiniones marcadas. Los meses se calculan a partir de la antigüedad de cada hilo y pueden variar en uno.",
        "No se pagó ni se solicitó nada: no publicamos, no pedimos opiniones ni contactamos con nadie. Los resúmenes están escritos con nuestras palabras, y la única cita está marcada y enlazada.",
      ],
    },
    {
      kind: "table",
      id: "at-a-glance",
      title: "Opiniones sobre OpenClaw de un vistazo",
      text: ["Lo que surgió en los 10 hilos de Hacker News que leímos. Contamos hilos, no comentarios."],
      headers: ["Tema", "Qué dicen los usuarios", "Hilos"],
      rows: [
        ["Elogio: útil para tareas personales", "Recordatorios, seguimientos, tareas de calendario y bots para chats de grupo, cuando funciona", "3 de 10"],
        ["Elogio: en tus apps de chat, con una memoria que es tuya", "Responde en apps como WhatsApp y guarda su memoria en archivos que puedes leer y editar", "2 de 10"],
        ["Elogio: hacia dónde van los asistentes", "Incluso los críticos ven en él lo que deberían haber sido los asistentes integrados", "2 de 10"],
        ["Queja: se rompe a menudo", "Las actualizaciones rompen cosas, y el mantenimiento lleva más tiempo del que ahorra", "6 de 10"],
        ["Queja: riesgo de seguridad", "Amplio acceso a tu ordenador y tus cuentas, y exposición a la inyección de prompts", "5 de 10"],
        ["Queja: más bombo que uso real", "Grandes promesas sin ejemplos concretos; tareas de demostración que parecen un espectáculo", "4 de 10"],
        ["Queja: coste y suscripciones", "El uso de modelos se acumula, y depende de las reglas de suscripción de otras empresas", "3 de 10"],
        ["Queja: necesita una máquina aparte y conocimientos", "Conviene ejecutarlo en otro ordenador, a cargo de alguien dispuesto a mantenerlo", "2 de 10"],
      ],
    },
    {
      kind: "text",
      id: "praise",
      title: "Lo que gusta a los usuarios",
      points: [
        `Útil para tareas personales, cuando funciona (3 de 10 hilos). Los usuarios cuentan que les envía recordatorios y seguimientos, se encarga de pequeñas tareas de calendario y gestiona bots para chats familiares o de grupo. Hilos de Hacker News: [abril de 2026](${hn.whoIsUsing}), [abril de 2026](${hn.memory}), [noviembre de 2026](${hn.agenticSetup}).`,
        `Vive en las apps de chat que ya usas, con una memoria que es tuya (2 de 10). A los usuarios les gusta escribirle desde apps como WhatsApp y que su memoria esté en archivos de su propia máquina que pueden leer y editar. Hilos: [abril de 2026](${hn.whoIsUsing}), [agosto de 2026](${hn.grokBot}).`,
        `Un anticipo de hacia dónde van los asistentes (2 de 10). Incluso los comentaristas que lo critican dicen que hace lo que deberían haber hecho los asistentes integrados en teléfonos y ordenadores, y esperan que la idea sobreviva a este proyecto. Hilos: [febrero de 2026](${hn.appleIntelligence}), [marzo de 2026](${hn.securityNightmare}).`,
      ],
    },
    {
      kind: "text",
      id: "complaints",
      title: "Quejas habituales",
      points: [
        `Se rompe a menudo y necesita mantenimiento constante (6 de 10 hilos). Los usuarios describen actualizaciones que rompen cosas, funciones que dejan de ir sin previo aviso y más tiempo dedicado a arreglarlo que a usarlo. Como lo expresó un comentarista de Hacker News en noviembre de 2026: "Con cada actualización se rompía algo, y pasaba más tiempo arreglando cosas" ("Every update something broke, and I spent more time fixing things") ([hilo](${hn.agenticSetup})). Hilos: [febrero de 2026](${hn.appleIntelligence}), [abril de 2026](${hn.whoIsUsing}), [abril de 2026](${hn.memory}), [agosto de 2026](${hn.grokBot}), [noviembre de 2026](${hn.agenticSetup}), [noviembre de 2026](${hn.saas}).`,
        `Su amplio acceso es un riesgo de seguridad (5 de 10). Los usuarios señalan que obtiene un acceso amplio a tu ordenador y tus cuentas y que se le puede manipular mediante inyección de prompts. El consejo habitual es ejecutarlo en una máquina aparte con cuentas aparte; algunos dicen que directamente no lo instales. Hilos: [febrero de 2026](${hn.personalComputer}), [febrero de 2026](${hn.appleIntelligence}), [febrero de 2026](${hn.changingMyLife}), [marzo de 2026](${hn.securityNightmare}), [abril de 2026](${hn.whoIsUsing}).`,
        `Más bombo que uso real (4 de 10). Los usuarios dicen que las publicaciones sobre OpenClaw prometen grandes cambios sin ejemplos concretos, y que sus tareas de demostración habituales, como reservar un vuelo o programar una reunión, parecen más teatro de productividad que tiempo ahorrado. Hilos: [febrero de 2026](${hn.changingMyLife}), [marzo de 2026](${hn.securityNightmare}), [abril de 2026](${hn.whoIsUsing}), [noviembre de 2026](${hn.agenticSetup}).`,
        `El coste, y la dependencia de las suscripciones de otras empresas (3 de 10). Los usuarios dicen que el uso de modelos que hay detrás se acumula. En abril de 2026, un hilo de Hacker News informó de que Anthropic ya no permitía usar las suscripciones de Claude Code con OpenClaw; los comentaristas sopesaron pagar precios de API frente a pasarse a otros proveedores de modelos. Hilos: [abril de 2026](${hn.whoIsUsing}), [abril de 2026](${hn.anthropicSubscriptions}), [abril de 2026](${hn.memory}).`,
        `Necesita una máquina aparte y conocimientos técnicos (2 de 10). Los usuarios dicen que conviene ejecutarlo en otro ordenador, a cargo de alguien que se sienta cómodo manteniéndolo, y algunos dueños de pequeñas empresas piden en su lugar una versión alojada y lista para usar. Hilos: [febrero de 2026](${hn.personalComputer}), [noviembre de 2026](${hn.saas}).`,
      ],
    },
    {
      kind: "text",
      id: "switch",
      title: "A qué se cambia la gente",
      text: [
        "Estas opciones surgieron como recomendaciones en al menos 2 de los 10 hilos. Otras herramientas se mencionaron en un solo hilo cada una, así que aquí las dejamos fuera; nuestra [guía de alternativas a OpenClaw](/blog/openclaw-alternatives) compara las opciones principales a partir de su propia documentación.",
      ],
      points: [
        `Hermes Agent (3 de 10). Los usuarios que se pasaron a él dicen que les funciona de forma más fiable. Consulta [Hermes Agent vs OpenClaw](/blog/hermes-agent-vs-openclaw) y [precios de Hermes Agent](/pricing/hermes-agent). Hilos: [abril de 2026](${hn.whoIsUsing}), [agosto de 2026](${hn.grokBot}), [noviembre de 2026](${hn.agenticSetup}).`,
        `Claude Code o Codex a secas, con skills y un buen \`CLAUDE.md\` (3 de 10). Varios usuarios cuentan que montaron grandes configuraciones de OpenClaw y volvieron a los agentes de programación que ya tenían. Consulta [OpenClaw vs Claude Code](/compare/openclaw-vs-claude-code) y [Claude Code vs Codex](/blog/claude-code-vs-codex). Hilos: [febrero de 2026](${hn.changingMyLife}), [abril de 2026](${hn.whoIsUsing}), [noviembre de 2026](${hn.agenticSetup}).`,
        `Claude Cowork (2 de 10). Recomendado como asistente alojado de Anthropic. Consulta nuestra [guía de Claude Cowork](/personal-agent/claude-cowork). Hilos: [abril de 2026](${hn.whoIsUsing}), [noviembre de 2026](${hn.agenticSetup}).`,
        `Tareas cron y tus propios scripts (2 de 10). Algunos usuarios dicen que la mayor parte de lo que hace OpenClaw podría ser un conjunto de scripts programados. Hilos: [abril de 2026](${hn.whoIsUsing}), [noviembre de 2026](${hn.agenticSetup}).`,
      ],
    },
    {
      kind: "text",
      id: "reddit",
      title: "Más conversación en Reddit",
      text: [
        "Enumeramos estos hilos de Reddit como lectura adicional. Los encontramos con la búsqueda de Google, pero no pudimos abrir reddit.com, así que no los hemos leído ni resumido, y ninguno de los temas anteriores se basa en ellos.",
      ],
      points: [
        "[OpenClaw is god-awful…](https://www.reddit.com/r/ArtificialInteligence/comments/1qrzxs7/openclaw_is_godawful_its_either_you_have_to_spend/), r/ArtificialInteligence, febrero de 2026",
        "[\"OpenClaw is useless\" is a confession, not a review](https://www.reddit.com/r/myclaw/comments/1qw9qx8/openclaw_is_useless_is_a_confession_not_a_review/), r/myclaw, febrero de 2026",
        "[I think openclaw is OVERHYPED. Just use skills](https://www.reddit.com/r/LocalLLaMA/comments/1rbjxpv/i_think_openclaw_is_overhyped_just_use_skills/), r/LocalLLaMA, marzo de 2026",
        "[Any good reason to stay with Openclaw?](https://www.reddit.com/r/openclaw/comments/1rcx7mg/any_good_reason_to_stay_with_openclaw/), r/openclaw, marzo de 2026",
        "[My honest take on OpenClaw after extensive testing](https://www.reddit.com/r/openclaw/comments/1s4pgat/my_honest_take_on_openclaw_after_extensive_testing/), r/openclaw, abril de 2026",
        "[Is it still worth building an OpenClaw personal agent…?](https://www.reddit.com/r/openclaw/comments/1tts8e9/is_it_still_worth_building_an_openclaw_personal/), r/openclaw, junio de 2026",
        "[Is OpenClaw still worth it now that I have Codex?](https://www.reddit.com/r/openclaw/comments/1u93to2/is_openclaw_still_worth_it_now_that_i_have_codex/), r/openclaw, julio de 2026",
        "[Is OpenClaw Dead?](https://www.reddit.com/r/openclaw/comments/1v2o94l/is_openclaw_dead/), r/openclaw, agosto de 2026",
        "[Rant / Review: OpenClaw is a massive waste of time](https://www.reddit.com/r/openclaw/comments/1xi2a21/rant_review_openclaw_is_a_massive_waste_of_time/), r/openclaw, octubre de 2026",
      ],
    },
    {
      kind: "text",
      id: "facts",
      title: "Datos de OpenClaw para contrastar lo que se dice",
      text: [
        "Del propio README, la documentación y el GitHub de OpenClaw, comprobados el 13 de noviembre de 2026. Más sobre el coste en nuestra página de [precios de OpenClaw](/pricing/openclaw).",
      ],
      points: [
        "Qué es: un asistente personal de IA de código abierto. Un Gateway se ejecuta en tu propio ordenador y te responde en apps de chat como WhatsApp, Telegram, Slack, Discord e iMessage; el estado, la memoria y las credenciales se quedan en tu hardware.",
        "Precio: gratis. Su README dice que el proyecto no tiene plan de pago, servicio alojado ni token. Pagas a tu proveedor de modelos.",
        "Licencia: MIT. Lo gestiona la OpenClaw Foundation, una organización independiente sin ánimo de lucro.",
        "Dónde se ejecuta: en tu propia máquina, con instaladores para macOS, Linux, Windows y WSL2, apps para macOS, iOS, Android, Windows y Linux, e instalaciones documentadas con Docker y Nix.",
        "Modelos: plugins para OpenAI, Anthropic, Google Gemini, OpenRouter, xAI, Ollama, LM Studio, vLLM y otros.",
        "Seguridad, según su propia documentación: las herramientas se ejecutan en el host en la sesión principal salvo que configures el sandboxing, y las aprobaciones de ejecución (exec approvals) están desactivadas por defecto.",
        "Programación: un programador integrado para tareas recurrentes y puntuales, además de disparadores por webhook y por Gmail.",
        "Nombres: pasó a llamarse OpenClaw el 30 de enero de 2026; antes se llamó, entre otros nombres, Clawdbot y Moltbot. Tiene 394.406 estrellas en GitHub a 13 de noviembre de 2026. Sitio oficial: [openclaw.ai](https://openclaw.ai).",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Con Crewmark",
      title: "Dale un trabajo fijo a Claude Code o Codex",
      text: [
        "Varios usuarios de estos hilos volvieron a Claude Code o Codex. Crewmark se apoya en ellos: convierte tus propias sesiones de Claude Code o Codex en empleados de IA con un rol, objetivos y un horario laboral, y cada uno toma la siguiente issue de un tablero compartido. No es un asistente personal en tus apps de chat: el trabajo pasa por issues, no tiene integración propia con Slack y los agentes se ejecutan en tu ordenador, que tiene que estar encendido. Es de código abierto con licencia GPL-3.0 y gratis para 1 proyecto y hasta 3 empleados de IA.",
      ],
      steps: [
        { title: "Elige un rol", text: "Empieza por los [roles de empleados de IA](/ai-employees), o escribe tu propio rol y tus objetivos." },
        {
          title: "Pon el trabajo en un tablero",
          text: "Asigna issues y haz que las habituales se repitan. Durante el horario laboral, un heartbeat despierta al empleado, desde cada 15 minutos hasta una vez al día, para que tome la siguiente.",
        },
        {
          title: "Responde cuando pregunte",
          text: "Cuando necesita una revisión, un permiso o información, pone la issue en Requiere acción y te pregunta ahí. Los trabajos, con la configuración para cada agente, están en [casos de uso de Claude Code](/use-cases/claude-code) y [casos de uso de Codex](/use-cases/codex).",
        },
      ],
    },
  ],
  mid: {
    title: "¿Quieres que tu agente de programación trabaje con un horario?",
    text: "Crewmark le da a Claude Code o Codex un rol, un heartbeat y un tablero compartido.",
    button: "Empezar",
  },
  faq: {
    title: "Preguntas frecuentes",
    items: [
      {
        q: "¿Merece la pena OpenClaw?",
        a: "Depende de cuánto mantenimiento estés dispuesto a asumir. En los 10 hilos de Hacker News que leímos, los usuarios a los que les gusta lo usan para tareas personales como recordatorios y tareas de calendario, desde apps de chat que ya usan. La queja más habitual, en 6 de los 10 hilos, es que se rompe a menudo y hay que arreglarlo constantemente. El software es gratis con licencia MIT; pagas los modelos que usa.",
      },
      {
        q: "¿Es seguro usar OpenClaw?",
        a: "La seguridad surgió en 5 de los 10 hilos. Los usuarios señalan su amplio acceso a tu ordenador y tus cuentas y la inyección de prompts, y aconsejan ejecutarlo en una máquina aparte con cuentas aparte. El propio README de OpenClaw dice que las herramientas se ejecutan en el host en la sesión principal salvo que configures el sandboxing, y sus aprobaciones de ejecución están desactivadas por defecto.",
      },
      {
        q: "¿Por qué dice la gente que OpenClaw está sobrevalorado?",
        a: "En 4 de los 10 hilos, los usuarios dicen que las publicaciones sobre él prometían grandes resultados sin ejemplos concretos, y que sus tareas de demostración parecen más teatro de productividad que tiempo ahorrado. Uno de los hilos de Reddit que enumeramos, de r/LocalLLaMA en marzo de 2026, tiene un título que lo llama sobrevalorado y propone usar skills en su lugar; no lo hemos leído.",
      },
      {
        q: "¿Qué usa la gente en lugar de OpenClaw?",
        a: "En los hilos que leímos: Hermes Agent y Claude Code o Codex a secas (3 hilos cada uno), y después Claude Cowork, y tareas cron con tus propios scripts (2 hilos cada uno). Nuestra [guía de alternativas a OpenClaw](/blog/openclaw-alternatives) compara las opciones a partir de su propia documentación.",
      },
      {
        q: "¿Qué dicen los usuarios de Reddit sobre OpenClaw?",
        a: "No pudimos abrir Reddit, así que no hemos resumido esos hilos. A juzgar solo por sus títulos: cuatro preguntan si OpenClaw todavía merece la pena, si vale la pena quedarse con él o si está muerto, uno de ellos ahora que quien lo publica tiene Codex; tres tienen títulos críticos, y uno de ellos propone usar skills en su lugar; uno, en r/myclaw, rebate que se le llame inútil; y uno es una valoración tras muchas pruebas. Los nueve están enlazados en [Más conversación en Reddit](#reddit).",
      },
      {
        q: "¿OpenClaw es gratis?",
        a: "Sí. Su README dice que el proyecto no tiene plan de pago, servicio alojado ni token, y tiene licencia MIT. Pagas a tu proveedor de modelos, y el coste surgió en 3 de los 10 hilos que leímos, entre ellos un hilo de abril de 2026 sobre que Anthropic ya no permitía usar con él las suscripciones de Claude Code. Consulta [precios de OpenClaw](/pricing/openclaw).",
      },
    ],
  },
  cta: {
    title: "Dale un trabajo fijo a tu agente de programación.",
    text: "Crewmark convierte las sesiones de Claude Code y Codex en empleados de IA con roles, objetivos, horario laboral y un heartbeat.",
    button: "Empezar",
  },
  checked:
    "Hilos leídos el 13 de noviembre de 2026. Datos del producto comprobados ese mismo día con el propio README, la documentación y el GitHub de OpenClaw.",
  disclaimer:
    "Crewmark es un producto independiente, sin afiliación ni respaldo de la OpenClaw Foundation ni de ninguna de las empresas mencionadas en esta página. Las opiniones resumidas aquí son de los comentaristas de los hilos enlazados. Los nombres de los productos son marcas de sus titulares.",
};
