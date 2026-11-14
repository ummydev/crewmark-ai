import type { RoleData, RoleTemplate } from "@/content/roles/build";
import type { RoleSlug } from "@/i18n/roles";

// Spanish copy for the role pages (MC-143), translated from src/content/roles/en.ts. Role names follow the site's
// wording (ai-employees.ts, Landing.marketplace.presets) in the way people search for them in Spanish.

export const template: RoleTemplate = {
  kicker: "Empleados de IA · Rol",
  parent: "Empleados de IA",
  cta: "Empezar",
  secondary: "Copiar el brief del rol",
  doesTitle: (name) => `Qué hace un ${name}`,
  goalsTitle: "Objetivos que darle",
  goalsText:
    "Dale a un empleado de IA una cifra que mover, como harías con una nueva incorporación, y revísala cada semana. Elige una de estas para empezar.",
  goalsHeaders: ["Objetivo", "Cómo se mide", "Un buen primer objetivo"],
  routineTitle: "Su rutina diaria",
  howToTitle: (name) => `Cómo configurar un ${name} con Claude Code o Codex`,
  howToName: (name) => `Configurar un ${name}`,
  briefStep: {
    title: "Escribe el brief del rol",
    text: "Guárdalo como `CLAUDE.md` (Claude Code) o `AGENTS.md` (Codex) en el repositorio en el que trabaja el empleado, para que cada sesión empiece con su trabajo, su objetivo y sus reglas. Consulta la [guía de CLAUDE.md](/blog/claude-md).",
  },
  toolsTitle: "Dale las herramientas que necesita",
  approvalsTitle: "Decide qué necesita tu visto bueno",
  scheduleStep: {
    title: "Ponle un horario",
    text: "Un rol necesita un ritmo, no un único prompt. Usa `/loop` o tareas programadas para un prompt recurrente, o dale un horario de trabajo, un latido y un tablero de tareas; mira [cómo hacer proactivo a Claude Code](/proactive-claude-code).",
  },
  relatedTitle: "Guías relacionadas",
  crewmark: {
    kicker: "Con Crewmark",
    title: (name) => `Contrata un ${name} en lugar de programarlo tú`,
    text: (name) =>
      `Crewmark tiene un ${name} listo para contratar. Funciona en tu sesión de Claude Code, Codex, DeepSeek Harness u OpenCode, con la suscripción que ya pagas, se despierta con un latido en horario laboral, toma la siguiente tarea de un tablero compartido y te escribe cuando necesita una decisión.`,
    steps: [
      {
        title: "Elige el rol",
        text: "Sus habilidades, su objetivo y su horario vienen configurados. Cambia el objetivo por tu propia cifra.",
      },
      {
        title: "Conecta tu proyecto",
        text: "Ejecuta el comando de configuración en el repositorio o la carpeta en la que trabaja. Tiene su propia sesión y su propia copia del código.",
      },
      {
        title: "Revisa, no vigiles",
        text: "Comenta en sus tareas mientras trabaja y pregunta antes de cualquier cosa de tu lista de aprobaciones. Lee [qué es un empleado de IA](/ai-employees).",
      },
    ],
  },
  faqTitle: (name) => `Preguntas frecuentes sobre el ${name}`,
  ctaText:
    "Crewmark convierte sesiones de Claude Code, Codex, DeepSeek Harness y OpenCode en empleados de IA con roles, objetivos, horario de trabajo y un latido.",
  checked:
    "Páginas de roles escritas el 7 de noviembre de 2026 a partir de los roles del marketplace de Crewmark y de la documentación de cada agente.",
  disclaimer:
    "Crewmark es un producto independiente, sin afiliación ni respaldo de Anthropic ni de OpenAI. Claude, Claude Code y Codex son marcas de sus respectivos propietarios.",
};

export const roles: Record<RoleSlug, RoleData> = {
  "seo-specialist": {
    name: "especialista SEO con IA",
    meta: {
      title: "Especialista SEO con IA: un agente de SEO diario",
      description:
        "Qué hace un especialista SEO con IA, qué objetivos y rutina darle y un brief del rol para copiar en Claude Code o Codex. O contrata uno en Crewmark que se despierta con un latido y avanza tu backlog de SEO.",
    },
    breadcrumb: "Especialista SEO con IA",
    title: "Especialista SEO con IA: un agente de SEO que trabaja cada día",
    lead: "Un especialista SEO con IA es un agente de programación, como Claude Code o Codex, con el trabajo continuo de hacer crecer tu tráfico orgánico. Encuentra temas que la gente empieza a buscar, escribe y corrige páginas en el código de tu web, consigue que se indexen e informa de qué se ha movido, cada día laborable. Esta página explica qué hace, qué objetivos y rutina darle y un brief del rol que puedes copiar.",
    does: {
      text: "A diferencia de un prompt de SEO puntual, el especialista se hace cargo del trabajo: mantiene un mapa de palabras clave y un registro, así que cada sesión sigue donde se quedó la anterior.",
      points: [
        "Investigación de palabras clave: lee noticias de producto y changelogs, y luego revisa el autocompletado de Google, Trends y Search Console en busca de términos con demanda y resultados flojos.",
        "Escribe y actualiza páginas: una palabra clave principal por URL, primero una definición, luego pasos, una tabla comparativa y unas preguntas frecuentes.",
        "Corrige problemas on-page: títulos y descripciones, enlaces internos, redirecciones, datos estructurados y hreflang.",
        "Consigue que se indexen las páginas: avisa a IndexNow, reenvía el sitemap y solicita la indexación.",
        "Informa: tráfico, distancia al objetivo y lo que ha hecho, en una nota diaria breve.",
      ],
    },
    goals: [
      ["Clics en Search Console", "Clics semanales desde Google", "+10% al mes"],
      ["Impresiones", "Impresiones semanales en Search Console", "+20% al mes en una web nueva"],
      ["Páginas publicadas", "Páginas nuevas o reescritas en línea", "Una por día laborable"],
      ["Páginas indexadas", "Páginas válidas en el informe de indexación de páginas", "El 90% del sitemap"],
    ],
    routine: [
      "Revisa qué ha cambiado: lanzamientos nuevos en tu mercado, las consultas de ayer en Search Console y las páginas con impresiones pero sin clics.",
      "Elige un tema y anota por qué en el registro.",
      "Escribe o reescribe la página solo con fuentes oficiales y luego la traduce si tu web tiene más idiomas.",
      "La prueba en local y abre una solicitud de despliegue; no publica por su cuenta.",
      "Cuando está en línea, avisa a IndexNow y solicita la indexación, y luego actualiza el mapa de palabras clave.",
      "Antes de terminar, publica el informe diario.",
    ],
    brief: `# Rol: especialista SEO
Objetivo: +10% de clics en Search Console al mes.

## Cada día laborable
1. Revisa los lanzamientos nuevos de nuestro mercado y las consultas de ayer.
2. Elige un tema con demanda creciente y resultados flojos; anota por qué.
3. Escribe o corrige la página. Datos solo de fuentes oficiales.
4. Prueba en local y abre una solicitud de despliegue. Nunca publiques tú.
5. Tras el despliegue: IndexNow, solicitar indexación, actualizar keywords.md.
6. Publica un informe diario: tráfico, distancia al objetivo, qué hiciste.

## Reglas
- Una palabra clave principal por URL; consulta antes docs/seo/keywords.md.
- Pregunta antes de borrar páginas, cambiar redirecciones o tocar código
  fuera de las carpetas de contenido.`,
    tools: "Búsqueda y descarga web para investigar, el repositorio de la web y un servidor de desarrollo local para probar páginas, acceso de lectura a Search Console y a la analítica, y un script para IndexNow. Si existen ambos, mejor CLIs que servidores MCP: usan menos tokens.",
    approvals: "Publicar debería pasar por una persona o por quien se encarga de los despliegues. Pregunta también antes de borrar páginas, cambiar redirecciones, editar código fuera de las carpetas de contenido o tocar el DNS.",
    related:
      "Para montar paso a paso el mismo agente con skills y hooks, lee [Agente SEO con IA: cómo crear uno](/blog/ai-seo-agent). Para las piezas básicas, consulta [skills de Claude Code](/blog/claude-code-skills) y [hooks de Claude Code](/blog/claude-code-hooks).",
    mid: {
      title: "¿Quieres el especialista SEO sin tener que montarlo?",
      text: "El especialista SEO de Crewmark funciona en tu Claude Code o Codex, se despierta con un latido y avanza un backlog de SEO.",
    },
    faq: [
      {
        q: "¿Qué es un especialista SEO con IA?",
        a: "Un agente de IA, normalmente un agente de programación como Claude Code o Codex, con el trabajo continuo de hacer crecer el tráfico orgánico: investigar palabras clave, escribir y corregir páginas, conseguir que se indexen e informar de los resultados.",
      },
      {
        q: "¿Puede un agente de IA hacer SEO por su cuenta?",
        a: "La mayor parte del trabajo diario, sí: investigación, redacción, traducción, correcciones técnicas y solicitudes de indexación. Publicar, las redirecciones y todo lo irreversible deberían seguir pasando por una persona.",
      },
      {
        q: "¿En qué se diferencia de una herramienta de SEO?",
        a: "Una herramienta de SEO te muestra datos; el trabajo lo sigues haciendo tú. Un especialista SEO con IA hace el trabajo en el código de tu web y te informa, con un horario.",
      },
      {
        q: "¿Cuánto tarda un especialista SEO con IA en dar resultados?",
        a: "El SEO lleva semanas en cualquier web. Una web nueva suele necesitar unas semanas antes de que crezcan las impresiones; orienta el primer objetivo a páginas publicadas e impresiones, y después a clics.",
      },
      {
        q: "¿Hay algún agente de IA gratis para SEO?",
        a: "Puedes ejecutar uno sobre un agente que ya pagas, como Claude Code o Codex, con fuentes de datos gratuitas como el autocompletado de Google, Trends, Search Console e IndexNow.",
      },
    ],
    cta: "Dale a tu web un especialista SEO que nunca se salta la checklist.",
  },
  "marketing-agent": {
    name: "agente de marketing con IA",
    meta: {
      title: "Agente de marketing con IA autónomo: objetivos | Crewmark AI",
      description:
        "Un agente de marketing con IA (growth marketer) que lanza experimentos en todo tu embudo por su cuenta: qué hace, objetivos que darle, una rutina diaria y un brief del rol para Claude Code o Codex. O contrata uno en Crewmark.",
    },
    breadcrumb: "Agente de marketing con IA",
    title: "Agente de marketing con IA: un growth marketer que trabaja solo",
    lead: "Un agente de marketing con IA es un empleado de IA que se hace cargo de una cifra de crecimiento, como los registros de prueba, y trabaja en ella cada día: lee los datos de tu embudo, encuentra el paso más débil, escribe el cambio, lo lanza como experimento y se queda con lo que gana. Construido sobre un agente de programación como Claude Code o Codex, puede cambiar landing pages, emails y el tracking en tu propio código. Esta página explica qué hace, qué objetivos y rutina darle y un brief del rol que puedes copiar.",
    does: {
      text: "Trabaja como un growth marketer en una empresa pequeña: un embudo, una cifra, muchos experimentos pequeños.",
      points: [
        "Análisis del embudo: lee la analítica para ver dónde abandonan los visitantes entre la landing, el registro y la activación.",
        "Experimentos: escribe una hipótesis, hace el cambio en una página o un email y lee el resultado cuando hay suficiente tráfico.",
        "Textos: titulares, landing pages, textos de anuncios y emails de onboarding, en variantes para testear.",
        "Email de ciclo de vida: secuencias de bienvenida y de reactivación, escritas y conectadas en tu herramienta de email.",
        "Informe semanal: qué se ha testeado, qué ha ganado y qué viene después.",
      ],
    },
    goals: [
      ["Registros de prueba", "Registros por semana según la analítica", "+8% al mes"],
      ["Conversión de la landing", "Visitantes que se registran, por página", "+1 punto porcentual"],
      ["Activación", "Usuarios nuevos que completan la primera acción clave", "+5% al mes"],
      ["Experimentos lanzados", "Experimentos iniciados y analizados", "Dos por semana"],
    ],
    routine: [
      "Lee las cifras del embudo de ayer y cualquier experimento que ya tenga datos suficientes.",
      "Cierra los experimentos terminados: se queda con el ganador, revierte el perdedor y anota lo que ha aprendido.",
      "Elige el siguiente paso más débil del embudo y escribe una hipótesis.",
      "Hace el cambio en el código o en la herramienta de email, detrás de un flag o como variante cuando es posible.",
      "Pregunta antes de cualquier cosa que gaste dinero o llegue a clientes.",
      "Publica un informe breve en el tablero.",
    ],
    brief: `# Rol: growth marketer
Objetivo: +8% de registros de prueba al mes.

## Cada día laborable
1. Lee las cifras del embudo de ayer y los experimentos en curso.
2. Cierra los experimentos con datos suficientes: mantener, revertir, anotar por qué.
3. Elige el paso más débil del embudo; escribe una hipótesis.
4. Construye el cambio como variante; abre una solicitud de revisión.
5. Publica qué testeaste, qué ganó y qué viene después.

## Reglas
- Un cambio por experimento; no pares un test antes de tiempo.
- Pregunta antes de gastar dinero, enviar emails a clientes o cambiar precios.`,
    tools: "Acceso de lectura a tu analítica (de producto y web), el repositorio de la web y un servidor de desarrollo local, la API o CLI de tu herramienta de email, y una herramienta de experimentos o feature flags si tienes una.",
    approvals: "Pregunta antes de gastar dinero en anuncios, enviar emails a clientes, cambiar precios o planes, o publicar cualquier cosa con tu marca en un canal nuevo.",
    related:
      "Para que el agente empiece a trabajar por su cuenta, lee [cómo hacer proactivo a Claude Code](/proactive-claude-code) o a [Codex](/proactive-codex). Para comparar plataformas que ejecutan agentes como empleados, consulta [las mejores plataformas de empleados de IA](/blog/best-ai-employee-platforms).",
    mid: {
      title: "¿Un agente de marketing que trabaja mientras tú construyes?",
      text: "El growth marketer de Crewmark funciona en tu Claude Code o Codex, se despierta con un latido y avanza los experimentos de tu embudo.",
    },
    faq: [
      {
        q: "¿Qué es un agente de marketing con IA?",
        a: "Un agente de IA con un objetivo de marketing continuo, como los registros, que analiza tu embudo, escribe textos y lanza experimentos por su cuenta, y te informa de los resultados.",
      },
      {
        q: "¿Puede un agente de marketing con IA funcionar de forma autónoma?",
        a: "La investigación, la redacción y la construcción pueden ir con un horario, sin prompts. Gastar dinero, enviar emails a clientes y cambiar precios deberían esperar al sí de una persona.",
      },
      {
        q: "¿Le sirve un agente de marketing con IA a una pequeña empresa?",
        a: "Encaja en equipos pequeños con un producto y sin un marketer a tiempo completo: mantiene el trabajo del embudo cada día y tú revisas en lugar de hacerlo.",
      },
      {
        q: "¿Puedo crear un agente de marketing con IA con Claude?",
        a: "Sí. Claude Code con un brief del rol, acceso a tu analítica y al código de tu web, y un horario, lo cubre; el brief del rol de esta página es un punto de partida.",
      },
      {
        q: "¿Agente de marketing con IA o automatización de marketing?",
        a: "La automatización ejecuta flujos fijos que diseñas tú. Un agente de marketing con IA decide qué probar a continuación, lo construye y lee el resultado.",
      },
    ],
    cta: "Pon un growth marketer en tu embudo, con el agente que ya usas.",
  },
  "social-media-manager": {
    name: "community manager con IA",
    meta: {
      title: "Community manager con IA: publica y aprende | Crewmark AI",
      description:
        "Qué hace un community manager con IA, qué objetivos y rutina diaria darle y un brief del rol para Claude Code o Codex. Redacta, programa y responde, con tu aprobación antes de que nada se haga público.",
    },
    breadcrumb: "Community manager con IA",
    title: "Community manager con IA: un agente que redacta, programa y aprende",
    lead: "Un community manager con IA es un empleado de IA que mantiene activas tus cuentas: escribe publicaciones e hilos a partir de lo que lanza tu equipo, los programa, redacta respuestas a las menciones y aprende qué publicaciones funcionan. Construido sobre un agente de programación como Claude Code o Codex, trabaja a partir de tu changelog, tu documentación y tus notas. Como las publicaciones son públicas, él redacta y tú apruebas. Esta página explica qué hace, qué objetivos y rutina darle y un brief del rol que puedes copiar.",
    does: {
      text: "Su materia prima es tu propio trabajo: lanzamientos, documentación, artículos del blog y preguntas de clientes.",
      points: [
        "Convierte lanzamientos y artículos del blog en hilos para X y publicaciones para LinkedIn.",
        "Mantiene un calendario de contenido y programa las publicaciones aprobadas.",
        "Redacta respuestas a menciones y comentarios para que las apruebes.",
        "Lee las cifras de cada publicación y anota qué funciona.",
        "Repite lo que ha funcionado: formatos, horas y temas.",
      ],
    },
    goals: [
      ["Seguidores", "Seguidores netos nuevos al mes", "+5% al mes"],
      ["Publicaciones", "Publicaciones aprobadas que han salido", "Una por día laborable"],
      ["Interacción", "Respuestas, reposts y me gusta por publicación", "Al alza mes a mes"],
      ["Clics a la web", "Visitas desde redes sociales, en la analítica", "+10% al mes"],
    ],
    routine: [
      "Lee lo que se ha lanzado o escrito desde ayer.",
      "Redacta las publicaciones del día con tu tono y las añade al calendario para que las apruebes.",
      "Programa las publicaciones que has aprobado.",
      "Redacta respuestas a las menciones nuevas; pasa a una persona todo lo delicado.",
      "Lee las cifras de las publicaciones de ayer y anota qué funcionó.",
    ],
    brief: `# Rol: community manager
Objetivo: +5% de seguidores al mes.

## Cada día laborable
1. Lee los lanzamientos, artículos del blog y cambios en la documentación nuevos.
2. Redacta las publicaciones de hoy (hilo de X, post de LinkedIn) con nuestro tono.
3. Pon los borradores en el tablero para aprobación; programa los aprobados.
4. Redacta respuestas a las menciones nuevas; pasa las quejas a una persona.
5. Anota las cifras de ayer y qué funcionó.

## Reglas
- Nunca publiques ni respondas en público sin aprobación.
- Nada que no podamos respaldar con un enlace; nada sobre la competencia.`,
    tools: "Tu changelog, documentación y blog (el repositorio o una carpeta), la API o CLI de una herramienta de programación de publicaciones, acceso de lectura a la analítica de cada plataforma y un calendario o tablero compartido para los borradores.",
    approvals: "Al principio, cada publicación y respuesta pública necesita tu aprobación. Pregunta también antes de seguir o escribir a cuentas, entrar en hilos sobre la competencia o responder a quejas.",
    related:
      "Para ejecutar varios agentes en paralelo, consulta [varios agentes de Claude Code](/blog/multiple-claude-code-agents). Para saber qué convierte a un agente en un empleado, lee [qué es un empleado de IA](/ai-employees).",
    mid: {
      title: "¿Mantener tus cuentas activas sin escribir cada publicación?",
      text: "El community manager de Crewmark redacta a partir de lo que lanzas, programa lo que apruebas e informa de lo que funciona.",
    },
    faq: [
      {
        q: "¿Qué es un community manager con IA?",
        a: "Un agente de IA que lleva tus redes sociales en el día a día: redacta publicaciones a partir de tu trabajo, programa las aprobadas, redacta respuestas y sigue qué funciona.",
      },
      {
        q: "¿Debería un agente de IA publicar sin aprobación?",
        a: "Al principio, no. Las publicaciones son públicas y difíciles de retirar, así que empieza con borradores que apruebas tú, y relájalo solo para formatos de bajo riesgo cuando confíes en su tono.",
      },
      {
        q: "¿Puedo crear un community manager con IA con Claude?",
        a: "Sí: Claude Code con un brief del rol, acceso a tu contenido y a una herramienta de programación de publicaciones, y un horario diario. El brief del rol de esta página es un punto de partida.",
      },
      {
        q: "¿Hay algún community manager con IA gratis?",
        a: "Puedes ejecutar uno sobre un agente que ya pagas, como Claude Code o Codex. Las herramientas de programación y las APIs de las plataformas pueden tener sus propios costes.",
      },
      {
        q: "¿Sobre qué debería escribir un community manager con IA?",
        a: "Primero sobre tu propio material: lanzamientos, guías, preguntas de clientes y lecciones aprendidas. Es sobre lo que puede escribir con precisión.",
      },
    ],
    cta: "Dale a tus cuentas un community manager que escribe a partir de lo que lanzas.",
  },
  "software-engineer": {
    name: "ingeniero de software con IA",
    meta: {
      title: "Ingeniero de software con IA en Claude Code o Codex",
      description:
        "Un agente ingeniero de software con IA que toma tareas, abre pull requests con tests y pide revisión. Qué hace, objetivos que darle, una rutina diaria y un brief del rol para Claude Code o Codex.",
    },
    breadcrumb: "Ingeniero de software con IA",
    title: "Ingeniero de software con IA: un agente que toma tareas y abre pull requests",
    lead: "Un ingeniero de software con IA es un agente de programación, como Claude Code o Codex, con un puesto en tu equipo: toma tareas del tablero, trabaja en una rama en su propia copia del código, abre pull requests con tests y pide revisión, sin que tengas que darle un prompt para cada tarea. Esta página explica qué hace, qué objetivos y rutina darle y un brief del rol que puedes copiar.",
    does: {
      text: "Trabaja como un ingeniero junior o intermedio que nunca olvida la checklist: cambios pequeños, tests y una pull request clara.",
      points: [
        "Toma la siguiente tarea que esté lista, o la que tenga asignada.",
        "Trabaja en su propia rama y copia del código, así que nunca toca tu copia de trabajo.",
        "Escribe o actualiza tests y ejecuta las comprobaciones antes de pedir revisión.",
        "Abre una pull request que explica el cambio y cómo se ha probado.",
        "Responde a los comentarios de revisión y corrige lo que se le pide.",
      ],
    },
    goals: [
      ["Pull requests fusionadas", "Pull requests fusionadas por semana", "10 a la semana"],
      ["Tiempo de ciclo", "Horas desde que toma la tarea hasta que abre la PR", "Menos de un día laborable"],
      ["Rondas de revisión", "Rondas de cambios antes de fusionar", "Una o dos"],
      ["Bugs cerrados", "Tareas de bugs cerradas por semana", "Las que haya en el backlog"],
    ],
    routine: [
      "Revisa sus pull requests abiertas en busca de comentarios de revisión y los corrige primero.",
      "Toma la siguiente tarea que esté lista; si no está clara, pregunta en la propia tarea.",
      "Crea una rama, hace el cambio, lo prueba y ejecuta las comprobaciones en local.",
      "Abre la pull request y pasa la tarea a revisión.",
      "Repite hasta que acaba el horario de trabajo y luego publica lo que queda en curso.",
    ],
    brief: `# Rol: ingeniero de software
Objetivo: 10 pull requests fusionadas a la semana.

## Para cada tarea
1. Lee la tarea; pregunta en ella si algo no está claro.
2. Trabaja en una rama nueva en tu propia copia del código.
3. Escribe o actualiza tests; ejecuta lint, comprobación de tipos y tests.
4. Abre una PR: qué cambió, por qué y cómo lo probaste.
5. Responde a los comentarios de revisión antes de tomar trabajo nuevo.

## Reglas
- Nunca hagas push a main ni fusiones tu propia PR.
- Pregunta antes de migraciones de base de datos, actualizar dependencias o
  borrar código que no escribiste tú.`,
    tools: "El repositorio y su gestor de tareas, `gh` o la CLI de tu servicio de Git, los comandos de tests y lint del proyecto, y una copia del código o un git worktree aparte por tarea; consulta la [guía de worktrees de Claude Code](/blog/claude-code-worktree).",
    approvals: "Fusionar, desplegar, las migraciones de base de datos, las actualizaciones de dependencias y todo lo que toque secretos o datos de producción deberían esperar a una persona.",
    related:
      "Para Claude Code frente a Codex como motor, consulta [Claude Code vs Codex](/blog/claude-code-vs-codex). Para ejecutar varios ingenieros a la vez, lee [varios agentes de Claude Code](/blog/multiple-claude-code-agents) y [agentes en segundo plano de Claude Code](/blog/claude-code-background-agents).",
    mid: {
      title: "¿Sumar un ingeniero que toma la siguiente tarea él solo?",
      text: "El ingeniero de software de Crewmark funciona en tu Claude Code o Codex, toma tareas con un latido y abre pull requests para revisión.",
    },
    faq: [
      {
        q: "¿Qué es un agente ingeniero de software con IA?",
        a: "Un agente de programación, como Claude Code o Codex, que avanza tareas por su cuenta: crea una rama, cambia el código, prueba y abre pull requests para que las revise una persona.",
      },
      {
        q: "¿Cuál es el mejor agente ingeniero de software con IA?",
        a: "Depende del motor en el que confíes: Claude Code y Codex son los habituales, y cualquiera de los dos puede funcionar como ingeniero de software con IA con un brief del rol, su propia copia del código y un horario.",
      },
      {
        q: "¿Puede un ingeniero de software con IA fusionar su propio código?",
        a: "No debería. Deja fusionar y desplegar en manos de personas; que el agente abra pull requests y corrija los comentarios de revisión.",
      },
      {
        q: "¿En qué se diferencia de usar Claude Code yo mismo?",
        a: "Dejas de arrancar cada tarea. El agente toma la siguiente tarea del tablero en horario laboral y tú revisas pull requests en lugar de escribir prompts.",
      },
      {
        q: "¿Puedo tener varios ingenieros con IA en un mismo repositorio?",
        a: "Sí, si cada uno tiene su propia rama y copia del código, como un git worktree, para que sus cambios no choquen.",
      },
    ],
    cta: "Suma un ingeniero que convierte tareas en pull requests, con tu plan.",
  },
  "ui-designer": {
    name: "diseñador de UI con IA",
    meta: {
      title: "Diseñador de UI con IA: interfaces en tu código",
      description:
        "Un diseñador de UI con IA que convierte páginas a medio hacer en una interfaz coherente, con tu código y tus componentes. Qué hace, objetivos que darle, una rutina diaria y un brief del rol para Claude Code o Codex.",
    },
    breadcrumb: "Diseñador de UI con IA",
    title: "Diseñador de UI con IA: interfaces coherentes, en tu propio código",
    lead: "Un diseñador de UI con IA es un empleado de IA que mejora la interfaz de tu producto directamente en tu código: tipografía, espaciado, componentes, modo oscuro y accesibilidad. Construido sobre un agente de programación como Claude Code o Codex, trabaja en tu sistema de diseño en lugar de en un archivo de diseño aparte, comprueba su trabajo en un navegador y abre una pull request con capturas de antes y después. Esta página explica qué hace, qué objetivos y rutina darle y un brief del rol que puedes copiar.",
    does: {
      text: "Lo que entrega es código, así que un cambio está listo para salir en cuanto lo apruebas.",
      points: [
        "Revisa páginas en busca de tipografía, espaciado y color incoherentes, y los corrige con tus tokens de diseño.",
        "Convierte el marcado suelto en componentes compartidos.",
        "Añade y revisa el modo oscuro.",
        "Corrige problemas de accesibilidad: contraste, estados de foco, etiquetas y uso con teclado.",
        "Hace capturas de antes y después en anchos de escritorio y de móvil para la revisión.",
      ],
    },
    goals: [
      ["Pantallas pulidas", "Pantallas que pasan su checklist, por semana", "Tres a la semana"],
      ["Problemas de accesibilidad", "Problemas abiertos según una herramienta de auditoría", "A la baja cada semana"],
      ["Componentes compartidos", "Patrones sueltos sustituidos por componentes", "Dos a la semana"],
      ["Regresiones visuales", "Bugs de UI reportados tras sus cambios", "Cero"],
    ],
    routine: [
      "Elige la siguiente pantalla del tablero o de su lista de auditoría.",
      "Hace capturas en anchos de escritorio y de móvil, en modo claro y oscuro.",
      "La corrige con los tokens y componentes del sistema de diseño; crea un componente si un patrón se repite.",
      "La vuelve a comprobar en el navegador y ejecuta las comprobaciones de accesibilidad.",
      "Abre una pull request con capturas de antes y después.",
    ],
    brief: `# Rol: diseñador de UI
Objetivo: 3 pantallas pulidas a la semana.

## Para cada pantalla
1. Haz capturas: escritorio y móvil, claro y oscuro.
2. Corrige tipografía, espaciado y color solo con nuestros tokens.
3. Reutiliza componentes; extrae uno si un patrón se repite.
4. Revisa contraste, estados de foco y etiquetas.
5. Abre una PR con capturas de antes y después.

## Reglas
- Nada de colores, fuentes ni valores de espaciado nuevos fuera de los tokens.
- Pregunta antes de cambiar textos, layouts de flujos clave o la marca.`,
    tools: "El repositorio del front-end y un servidor de desarrollo local, un navegador que pueda manejar para hacer capturas, tus tokens de diseño y tu librería de componentes, y un verificador de accesibilidad.",
    approvals: "Pregunta antes de cambiar la marca (logo, colores, fuentes), los textos, el layout de los flujos de registro o de pago, o cualquier cosa que un cliente vaya a notar en una página que convierte.",
    related:
      "Para tener un diseñador junto a un ingeniero, consulta [varios agentes de Claude Code](/blog/multiple-claude-code-agents). Para que tome trabajo por su cuenta, lee [cómo hacer proactivo a Claude Code](/proactive-claude-code).",
    mid: {
      title: "¿Pulir tu interfaz sin un backlog de diseño?",
      text: "El diseñador de UI de Crewmark trabaja en tu código y tus componentes, y abre pull requests con capturas de antes y después.",
    },
    faq: [
      {
        q: "¿Qué es un diseñador de UI con IA?",
        a: "Un agente de IA que mejora la interfaz de un producto directamente en el código: tipografía, espaciado, componentes, modo oscuro y accesibilidad, comprobados en un navegador y enviados como pull requests.",
      },
      {
        q: "¿Sustituye un diseñador de UI con IA a Figma?",
        a: "No para explorar ideas nuevas. Sirve para el trabajo constante de hacer coherentes y accesibles las pantallas ya publicadas, que de todos modos ocurre en el código.",
      },
      {
        q: "¿Puede Claude Code hacer diseño de UI?",
        a: "Claude Code puede editar código de front-end y, con una herramienta de navegador, comprobar el resultado. Un brief del rol y unos tokens de diseño mantienen coherentes sus cambios.",
      },
      {
        q: "¿Cómo evito que un diseñador con IA cambie la marca?",
        a: "Limítalo a tus tokens de diseño en el brief del rol y pon la marca, los textos y los flujos clave en la lista de cosas que debe preguntar antes.",
      },
    ],
    cta: "Dale a tu interfaz un diseñador que trabaja en tu código.",
  },
  "app-designer": {
    name: "diseñador de apps con IA",
    meta: {
      title: "Diseñador de apps con IA: pantallas iOS y Android",
      description:
        "Un diseñador de apps con IA que diseña pantallas para iOS y Android en el código de tu app y las comprueba en el simulador. Qué hace, objetivos que darle, una rutina diaria y un brief del rol para Claude Code o Codex.",
    },
    breadcrumb: "Diseñador de apps con IA",
    title: "Diseñador de apps con IA: pantallas móviles, hechas y comprobadas en el simulador",
    lead: "Un diseñador de apps con IA es un empleado de IA que diseña y pule tus pantallas de iOS y Android en el propio código de la app, y luego las comprueba en el simulador o el emulador antes de pedir revisión. Construido sobre un agente de programación como Claude Code o Codex, sigue las convenciones de cada plataforma y tus componentes, y puede preparar las capturas para la App Store. Esta página explica qué hace, qué objetivos y rutina darle y un brief del rol que puedes copiar.",
    does: {
      text: "Diseña en el código de la app, así que lo que revisas es lo que se publica.",
      points: [
        "Maqueta pantallas nuevas y pule las existentes con tus componentes.",
        "Sigue las convenciones de iOS y Android: navegación, áreas seguras, Dynamic Type y zonas táctiles.",
        "Ejecuta la app en el simulador o el emulador y hace capturas de cada cambio.",
        "Revisa el modo oscuro, pantallas pequeñas y grandes, y las etiquetas de accesibilidad.",
        "Prepara las capturas para la App Store y Play Store.",
      ],
    },
    goals: [
      ["Pantallas entregadas", "Pantallas nuevas o rediseñadas fusionadas por semana", "Dos a la semana"],
      ["Pruebas en simulador", "Cambios con capturas en dispositivos pequeños y grandes", "Todos los cambios"],
      ["Accesibilidad", "Pantallas con etiquetas y soporte de Dynamic Type", "Todas las pantallas nuevas"],
      ["Capturas para tiendas", "Capturas actualizadas en cada versión", "Cada versión"],
    ],
    routine: [
      "Toma la siguiente pantalla del tablero.",
      "La construye o la ajusta con los componentes de la app.",
      "La ejecuta en el simulador en un dispositivo pequeño y uno grande, en modo claro y oscuro.",
      "Corrige lo que no cuadra y luego captura el resultado.",
      "Abre una pull request con las capturas.",
    ],
    brief: `# Rol: diseñador de UI de apps
Objetivo: 2 pantallas de app a la semana.

## Para cada pantalla
1. Constrúyela con nuestros componentes y las convenciones de la plataforma.
2. Ejecútala en el simulador: dispositivo pequeño y grande, claro y oscuro.
3. Revisa áreas seguras, Dynamic Type, zonas táctiles y etiquetas.
4. Abre una PR con capturas del simulador.

## Reglas
- No cambies la estructura de navegación ni el onboarding sin preguntar.
- No envíes builds a la App Store ni a Play Store.`,
    tools: "El repositorio de la app, Xcode y el simulador de iOS o Android Studio y un emulador en la máquina donde funciona, una forma de hacer capturas y tu librería de componentes.",
    approvals: "Pregunta antes de cambiar la navegación, el onboarding o las pantallas de pago, y nunca le dejes enviar builds ni editar las fichas de las tiendas por su cuenta.",
    related:
      "Para el ingeniero que conecta la lógica detrás de sus pantallas, consulta el [ingeniero de software con IA](/ai-employees/software-engineer). Para interfaces web, consulta el [diseñador de UI con IA](/ai-employees/ui-designer).",
    mid: {
      title: "¿Pulir las pantallas de tu app en piloto automático?",
      text: "El diseñador de UI de apps de Crewmark construye pantallas de iOS y Android en tu código y las comprueba en el simulador.",
    },
    faq: [
      {
        q: "¿Qué es un diseñador de apps con IA?",
        a: "Un agente de IA que diseña y pule pantallas de apps móviles en el propio código de la app y las comprueba en el simulador de iOS o el emulador de Android antes de pedir revisión.",
      },
      {
        q: "¿Puede un agente de IA diseñar pantallas de iOS?",
        a: "Un agente de programación como Claude Code o Codex puede escribir pantallas en SwiftUI o UIKit, ejecutar la app en el simulador y capturar el resultado, en un Mac con Xcode.",
      },
      {
        q: "¿Un diseñador de apps con IA es lo mismo que un generador de diseños de apps con IA?",
        a: "No. Un generador crea maquetas a partir de un prompt. Un diseñador de apps con IA trabaja en el código real de tu app, con tus componentes, y abre pull requests.",
      },
      {
        q: "¿Puede hacer las capturas para la App Store?",
        a: "Sí, desde el simulador. Enviarlas, igual que las builds, debería quedar en manos de una persona.",
      },
    ],
    cta: "Dale a tu app un diseñador que comprueba cada pantalla en el simulador.",
  },
};
