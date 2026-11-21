import type { GuideCopy } from "@/components/landing/guide-article";

// Spanish translation of /blog/grok-bot-reviews; the English master is src/content/blog/grok-bot-reviews.ts (the `en` value of grokBotReviews).

const hn = {
  launch: "https://news.ycombinator.com/item?id=49261514",
  agentAccess: "https://news.ycombinator.com/item?id=50033517",
  throttled: "https://news.ycombinator.com/item?id=50345698",
  agenticSetup: "https://news.ycombinator.com/item?id=50366117",
};

export const copy: GuideCopy = {
  meta: {
    title: "Grok Bot: opiniones de los usuarios de Hacker News (2026)",
    description:
      "Opiniones sobre Grok Bot en 6 hilos de Hacker News, de agosto a noviembre de 2026: lo que gusta, quejas por límites de uso y seguridad, y qué usan en su lugar.",
  },
  breadcrumb: "Opiniones sobre Grok Bot",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-13" },
  hero: {
    kicker: "Blog · Opiniones",
    title: "Opiniones sobre Grok Bot: qué dicen los usuarios en Hacker News",
    lead: "Grok Bot es el conjunto de compañeros de equipo de IA alojados de xAI: Bots que tienen cada uno su propio ordenador en la nube, inician sesión en tus herramientas, trabajan en Slack y Microsoft Teams, ejecutan rutinas y se pasan trabajo entre ellos. Leímos 7 hilos de Hacker News sobre él, de agosto a noviembre de 2026, sus tres primeros meses; uno era la publicación de lanzamiento de una herramienta competidora, así que las cifras salen de los otros 6. Los usuarios cuentan que le encargan tareas reales sin escribir código. La queja que más apareció son los límites de uso, en 3 de los 6 hilos; la seguridad y el valor poco claro aparecieron en 2 cada uno.",
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
        "Leímos 7 hilos de Hacker News sobre Grok Bot el 13 de noviembre de 2026, una página cada vez. Uno de ellos era la publicación de lanzamiento de una herramienta de código abierto competidora, escrita por su creador, y no lo contamos para ningún tema, así que todas las cifras de esta página son sobre los otros 6. Grok Bot se lanzó en beta el 11 de agosto de 2026, así que todos son de sus tres primeros meses, de agosto a noviembre de 2026.",
      ],
      points: [
        "Un tema solo aparece si surgió en al menos 2 de los 6 hilos contados, y decimos en cuántos. Lo que se dijo en un solo comentario queda fuera.",
        "Uno de los 6 no trata solo de Grok Bot: es un hilo general en el que la gente describe sus configuraciones de IA, y usamos solo las menciones a Grok Bot. Otros dos hablan de la misma noticia, y el posterior enlaza al anterior, así que esa noticia cuenta una sola vez.",
        "También encontramos 17 hilos de Reddit con la búsqueda de Google, pero no pudimos abrir reddit.com, así que no los hemos leído ni resumido. Aparecen por título en [Más conversación en Reddit](#reddit).",
        "Es una muestra de la conversación pública, no una encuesta. Quienes publican sobre una herramienta suelen tener opiniones marcadas. Los meses se calculan a partir de la antigüedad de cada hilo y pueden variar en uno.",
        "No se pagó ni se solicitó nada: no publicamos, no pedimos opiniones ni contactamos con nadie. Los resúmenes están escritos con nuestras palabras, y la única cita está marcada y enlazada.",
      ],
    },
    {
      kind: "table",
      id: "at-a-glance",
      title: "Opiniones sobre Grok Bot de un vistazo",
      text: [
        "Lo que surgió en los 6 hilos de Hacker News que contamos (el séptimo, la publicación de lanzamiento de una herramienta competidora, no cuenta). Contamos hilos, no comentarios.",
      ],
      headers: ["Tema", "Qué dicen los usuarios", "Hilos"],
      rows: [
        ["Elogio: tareas sin código", "Investigación, correos y resúmenes periódicos delegados de principio a fin", "2 de 6"],
        ["Queja: límites de uso", "Los Bots siempre activos agotan el uso, y un hilo de noviembre habló de la limitación de Grok Bot", "3 de 6"],
        ["Queja: seguridad", "Inyección de prompts, y dar a los Bots datos de inicio de sesión y acceso a cuentas sensibles", "2 de 6"],
        ["Queja: valor poco claro", "Cuesta pensar en una tarea que encargarle, o se ve como una versión alojada de agentes de código abierto", "2 de 6"],
      ],
    },
    {
      kind: "text",
      id: "praise",
      title: "Lo que gusta a los usuarios",
      points: [
        `Tareas reales hechas sin programar (2 de 6 hilos). Los usuarios cuentan que le encargan cosas como encontrar un proveedor, enviar candidaturas de empleo y correos, y preparar resúmenes de sitios web y redes sociales. Hilos de Hacker News: [agosto de 2026](${hn.launch}), [noviembre de 2026](${hn.agenticSetup}).`,
      ],
    },
    {
      kind: "text",
      id: "complaints",
      title: "Quejas habituales",
      points: [
        `Límites de uso y consumo de tokens (3 de 6 hilos). Los usuarios dicen que los Bots siempre activos agotan rápido la bolsa de uso semanal. Un comentarista de Hacker News lo dijo así en agosto de 2026: "Los agentes perpetuos siempre activos usan MUCHOS tokens" ("Always on perpetual agents use a LOT of tokens") ([hilo](${hn.launch})). En noviembre de 2026, un hilo de Hacker News habló de la limitación de Grok Bot después de que los costes de xAI superaran sus ingresos por suscripciones, según dice el título del hilo. Hilos: [agosto de 2026](${hn.launch}), [noviembre de 2026](${hn.throttled}), [noviembre de 2026](${hn.agenticSetup}).`,
        `Seguridad y acceso a cuentas (2 de 6). A los usuarios les preocupa la inyección de prompts y dar a los Bots sus datos de inicio de sesión y acceso a cuentas sensibles sin límites firmes sobre a qué puede llegar cada Bot. Hilos: [agosto de 2026](${hn.launch}), [octubre de 2026](${hn.agentAccess}).`,
        `Valor poco claro (2 de 6). A algunos usuarios no se les ocurría ninguna tarea que encargarle; otros lo ven como una versión alojada de agentes de código abierto como OpenClaw. Hilos: [agosto de 2026](${hn.launch}), [noviembre de 2026](${hn.agenticSetup}).`,
      ],
    },
    {
      kind: "text",
      id: "switch",
      title: "A qué se cambia la gente",
      text: [
        "Estas opciones surgieron como recomendaciones en al menos 2 de los 6 hilos contados. Otras herramientas se mencionaron en un solo hilo cada una, así que aquí las dejamos fuera; nuestra página de [alternativas a Grok Bot](/alternatives/grok-bot) compara las opciones principales a partir de su propia documentación.",
      ],
      points: [
        `Hermes Agent (2 de 6). Recomendado en un hilo y mencionado como opción comparable en otro; los usuarios lo describen como más barato y más configurable, y con el modelo que tú elijas. Consulta [Grok Bot vs Hermes Agent](/compare/grok-bot-vs-hermes-agent) y [precios de Hermes Agent](/pricing/hermes-agent). Hilos: [agosto de 2026](${hn.launch}), [noviembre de 2026](${hn.agenticSetup}).`,
        `Tu propia configuración con Codex o Claude Code (2 de 6). Los usuarios dicen que Codex o Claude Code más unos cuantos scripts propios cubren buena parte del mismo trabajo por menos dinero. Consulta [Grok Bot vs Claude Code](/compare/grok-bot-vs-claude-code). Hilos: [agosto de 2026](${hn.launch}), [noviembre de 2026](${hn.agenticSetup}).`,
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
        "[Grok Bot just validated everything we've been building](https://www.reddit.com/r/AI_Agents/comments/1vnbg4z/grok_bot_just_validated_everything_weve_been/), r/AI_Agents, agosto de 2026",
        "[free and open sourced grok bots but better](https://www.reddit.com/r/AI_Agents/comments/1vxoura/free_and_open_sourced_grok_bots_but_better_cooler/), r/AI_Agents, septiembre de 2026",
        "[Grok Bot's own docs say all your bots share one computer](https://www.reddit.com/r/grok/comments/1w43c1v/grok_bots_own_docs_say_all_your_bots_share_one/), r/grok, septiembre de 2026",
        "[xAI owns Grok and X. Grok Bot still billed me X API credits](https://www.reddit.com/r/GrokBot/comments/1vxpdr3/xai_owns_grok_and_x_grok_bot_still_billed_me_x/), r/GrokBot, septiembre de 2026",
        "[Is Grok Bot worth it?](https://www.reddit.com/r/cursor/comments/1vvx2fg/is_grok_bot_worth_it/), r/cursor, septiembre de 2026",
        "[Any one tried Grok Bot? Is it garbage or just me?](https://www.reddit.com/r/cursor/comments/1vzg2wd/any_one_tried_grok_bot_is_it_garbage_or_just_me/), r/cursor, septiembre de 2026",
        "[PSA: Stay far away from Grok/bot/XAI](https://www.reddit.com/r/singularity/comments/1wpls8e/psa_trust_me_stay_far_away_from_grokbotxai/), r/singularity, octubre de 2026",
        "[Anyone compared Grok Bot usage limits across SuperGrok…](https://www.reddit.com/r/GrokBot/comments/1wqok58/anyone_compared_grok_bot_usage_limits_across/), r/GrokBot, octubre de 2026",
        "[xAI's new $30/mo Premium plan worth it?](https://www.reddit.com/r/GrokBot/comments/1x8xjd1/xais_new_30mo_premium_plan_worth_it_looking_for/), r/GrokBot, octubre de 2026",
        "[Grokbot alternative](https://www.reddit.com/r/GrokBot/comments/1wnayp2/grokbot_alternative/), r/GrokBot, octubre de 2026",
        "[Grok Bot vs. Muse: who actually wins?](https://www.reddit.com/r/AI_Agents/comments/1x56s72/grok_bot_vs_muse_who_actually_wins_20_hours_with/), r/AI_Agents, octubre de 2026",
        "[OpenBot feels a lot like Grok Bot, except it's free](https://www.reddit.com/r/SelfHostedAI/comments/1xgstht/openbot_feels_a_lot_like_grok_bot_except_its_free/), r/SelfHostedAI, octubre de 2026",
        "[Alternative to Grok bot](https://www.reddit.com/r/GrokBot/comments/1xp0dbt/alternative_to_grok_bot/), r/GrokBot, noviembre de 2026",
        "[Self-hosted open source alternative to Grok Bot?](https://www.reddit.com/r/SelfHosting/comments/1xpwnes/selfhosted_open_source_alternative_to_grok_bot/), r/SelfHosting, noviembre de 2026",
        "[Looking for Grokbot alternatives, is Mausbot legit?](https://www.reddit.com/r/GrokBot/comments/1xqjgru/looking_for_grokbot_alternatives_is_mausbot_legit/), r/GrokBot, noviembre de 2026",
        "[Found a Grok Bot alternative that works with my xAI plan](https://www.reddit.com/r/GrokBot/comments/1xsx979/found_a_grok_bot_alternative_that_works_with_my/), r/GrokBot, noviembre de 2026",
        "[After what just happened to Grok Bot, are we next?](https://www.reddit.com/r/MuseAgent/comments/1xtgaew/after_what_just_happened_to_grok_bot_are_we_next/), r/MuseAgent, noviembre de 2026",
      ],
    },
    {
      kind: "text",
      id: "facts",
      title: "Datos de Grok Bot para contrastar lo que se dice",
      text: [
        "De la página del producto y la publicación de lanzamiento de xAI, comprobados el 13 de noviembre de 2026. Más en nuestra [guía de Grok Bot](/personal-agent/grok-bot).",
      ],
      points: [
        "Qué es: compañeros de equipo de IA alojados de xAI. Cada Bot tiene su propio ordenador en la nube, inicia sesión en tus herramientas y apps, trabaja en Slack y Microsoft Teams, ejecuta rutinas según una programación y pasa trabajo a otros Bots.",
        "Lanzamiento: en beta el 11 de agosto de 2026; la página del producto dice ahora que ya no está en beta.",
        "Precio: incluido en los planes Premium ($30 al mes), Super ($100 al mes, 3,5 veces el uso de Premium) y Ultra ($200 al mes, 12 veces el uso de Premium) de xAI, con facturación mensual. Cada plan incluye uso semanal de Grok Bot, y el uso adicional se factura según el coste de los tokens. Los planes Teams y Enterprise se contratan a través de ventas.",
        "Licencia: no es de código abierto.",
        "Dónde se ejecuta: en la nube de xAI, así que los Bots siguen trabajando con el portátil cerrado. Accedes a ellos desde apps de escritorio y móviles, en Slack y Microsoft Teams, y en llamadas de Google Meet, Zoom o Teams.",
        "Modelos: los Bots están creados con Grok.",
        "Aprobaciones: los Bots te consultan cuando necesitan aprobación, y las acciones sensibles pueden pasar por Auto Review.",
        "Sitio oficial: [x.ai/bot](https://x.ai/bot).",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Con Crewmark",
      title: "Agentes en tu propio ordenador, con un trabajo fijo",
      text: [
        "Grok Bot ejecuta Bots en la nube de xAI con Grok. Crewmark lo enfoca de otra manera: tus propias sesiones de Claude Code o Codex, en tu ordenador y con la suscripción que ya pagas, se convierten en empleados de IA con un rol, objetivos y un horario laboral, y cada uno toma la siguiente issue de un tablero compartido. Las contrapartidas: tu ordenador tiene que estar encendido, por ahora los agentes se coordinan a través de issues (los mensajes directos entre agentes llegarán pronto) y no tiene integración propia con Slack. Es de código abierto con licencia GPL-3.0 y gratis para 1 proyecto y hasta 3 empleados de IA.",
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
        q: "¿Merece la pena Grok Bot?",
        a: "Depende de lo que le encargarías y de cuánto uso necesitas. En los 6 hilos de Hacker News que contamos, los usuarios describen tareas hechas sin código, como investigación, correos y resúmenes periódicos. La queja que más apareció son los límites de uso, en 3 de los 6; la seguridad y el valor poco claro aparecieron en 2 cada uno. Está incluido en el plan Premium de xAI a $30 al mes, con Super a $100 y Ultra a $200 para más uso.",
      },
      {
        q: "¿Cuáles son las quejas más habituales sobre Grok Bot?",
        a: "En los 6 hilos que contamos: límites de uso y consumo de tokens (3 de 6); seguridad, sobre todo la inyección de prompts y dar a los Bots datos de inicio de sesión y acceso a cuentas sensibles (2 de 6); y valor poco claro, de usuarios a los que no se les ocurría una tarea que encargarle o que lo ven como una versión alojada de agentes de código abierto (2 de 6).",
      },
      {
        q: "¿Es seguro Grok Bot?",
        a: "La seguridad surgió en 2 de los 6 hilos que contamos. A los usuarios les preocupa la inyección de prompts y dar a los Bots sus datos de inicio de sesión y acceso a cuentas sensibles sin límites firmes sobre a qué puede llegar cada Bot. La página del producto de xAI dice que los Bots te consultan cuando necesitan aprobación y que las acciones sensibles pueden pasar por Auto Review.",
      },
      {
        q: "¿Hay alguna opinión honesta sobre Grok Bot?",
        a: "Esta página no prueba Grok Bot directamente; resume lo que dijeron los usuarios en 6 hilos de Hacker News de sus tres primeros meses, con enlaces para que puedas leerlos. Los usuarios cuentan que le delegan tareas sin código. La queja más habitual son los límites de uso (3 de 6), seguida de la seguridad y el valor poco claro (2 de 6 cada uno). Aquí no se pagó ni se solicitó nada.",
      },
      {
        q: "¿Qué dicen los usuarios de Reddit sobre Grok Bot?",
        a: "No pudimos abrir Reddit, así que no hemos resumido esos hilos. A juzgar solo por sus títulos: siete piden o señalan alternativas, varias de ellas de código abierto o autoalojadas; tres preguntan si merece la pena, uno de ellos sobre el plan Premium de $30; dos tratan de límites de uso y facturación; uno lo compara con Muse, de Meta; uno, en r/MuseAgent, pregunta si lo que le pasó a Grok Bot podría pasarle a Muse; uno dice que su documentación muestra que todos tus Bots comparten un ordenador, mientras que la página del producto de xAI dice que cada Bot tiene el suyo (consulta [los datos](#facts)); uno advierte a la gente de que se mantenga lejos de xAI; y uno dice que Grok Bot validó lo que quien lo publica ha estado construyendo. Los 17 están enlazados en [Más conversación en Reddit](#reddit).",
      },
      {
        q: "¿Qué usa la gente en lugar de Grok Bot?",
        a: "En los 6 hilos que contamos, dos aparecieron más de una vez: Hermes Agent, que los usuarios describen como más barato y más configurable, y una configuración propia con Codex o Claude Code más tus propios scripts (2 de 6 cada uno). Nuestra página de [alternativas a Grok Bot](/alternatives/grok-bot) compara más opciones a partir de su propia documentación.",
      },
    ],
  },
  cta: {
    title: "Dale un trabajo fijo a tu agente de programación.",
    text: "Crewmark convierte las sesiones de Claude Code y Codex en empleados de IA con roles, objetivos, horario laboral y un heartbeat.",
    button: "Empezar",
  },
  checked:
    "Hilos leídos el 13 de noviembre de 2026. Datos del producto comprobados ese mismo día con la página del producto y la publicación de lanzamiento de xAI.",
  disclaimer:
    "Crewmark es un producto independiente, sin afiliación ni respaldo de xAI ni de ninguna de las empresas mencionadas en esta página. Las opiniones resumidas aquí son de los comentaristas de los hilos enlazados. Los nombres de los productos son marcas de sus titulares.",
};
