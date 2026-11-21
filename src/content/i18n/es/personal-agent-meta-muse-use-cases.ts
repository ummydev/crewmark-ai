import type { GuideCopy } from "@/components/landing/guide-article";

// es translation of /personal-agent/meta-muse-use-cases; the English master is
// src/content/personal-agents/meta-muse-use-cases.ts.

const daily = `Cada día laborable a las 7 de la mañana, mándame un resumen: mi agenda de hoy,
los tres correos que más me necesitan y lo que vence esta semana.

Cada viernes a las 16:00, haz una lista de lo que dije que haría esta semana y no está hecho,
y redacta los correos de seguimiento para que yo los apruebe.`;

const marketing = `Cada lunes a las 9 de la mañana, revisa las páginas de precios de [competidor 1],
[competidor 2] y [competidor 3]. Dime qué ha cambiado desde la semana pasada,
con enlaces, y guarda un informe breve en mi Library.

Investiga las preguntas que hace la gente sobre [tu tema] en foros y en
resultados de búsqueda. Agrúpalas en 10 ideas de artículo, cada una con un título provisional.

Redacta tres versiones de un correo de lanzamiento para [producto] con mi tono,
usando las notas de este archivo. No envíes nada.`;

const money = `Averigua cuánto vale mi Honda Civic de 2019 con 60.000 millas,
redacta el anuncio y dime qué ofertas merece la pena contestar.

Mira mis tres últimas facturas de internet, busca un plan más barato de mi proveedor
o de la competencia y redacta el correo pidiéndoles que lo igualen.`;

export const copy: GuideCopy = {
  meta: {
    title: "Casos de uso de Meta Muse: prompts, rutinas e ideas",
    description:
      "Para qué usar Meta Muse, con prompts que puedes copiar: rutinas diarias y tareas recurrentes, investigación de marketing y SEO, gestiones de un pequeño negocio, ahorrar dinero, viajes y recados, además de consejos y lo que Muse no hará.",
  },
  breadcrumb: "Casos de uso de Meta Muse",
  parent: { name: "Agentes personales", href: "/personal-agent" },
  hero: {
    kicker: "Agentes personales · Meta Muse",
    title: "Casos de uso de Meta Muse: qué delegarle, con prompts que puedes copiar",
    lead: "Muse, el agente personal de Meta, hace más que responder: envía correos, reserva viajes, rellena formularios, compra cosas con tu aprobación, crea archivos y ejecuta tareas recurrentes con la app cerrada. Lo difícil es saber qué pedirle. Estos son los casos de uso que la propia Meta señala y los que mejor funcionan para una rutina diaria, la investigación de marketing y las gestiones de un pequeño negocio, cada uno con un prompt para empezar, además de lo que Muse no está pensado para hacer.",
    cta: "Empezar",
    secondary: "Rutinas diarias",
    secondaryHref: "#daily",
  },
  sections: [
    {
      kind: "text",
      title: "En qué destaca Muse",
      text: [
        "Los ejemplos de la propia Meta son personales y prácticos: vender un coche por más dinero, rebajar una factura, ajustar un plan de entrenamiento, convertir un reel de receta guardado en una lista de la compra, organizar una cena teniendo en cuenta las restricciones alimentarias de tus amigos. Tienen tres cosas en común, y los mejores casos de uso también.",
      ],
      points: [
        "Un objetivo, no una sola respuesta: Muse lo convierte en un plan y sigue trabajando en él en segundo plano.",
        "Trabajo en la web y en tus apps: correo, formularios, reservas y pagos, desde su propio navegador en la nube.",
        "Un punto en el que decides tú: vuelve para pedir aprobación antes de enviar o comprar, así sigues al mando de todo lo que importa.",
      ],
    },
    {
      kind: "steps",
      id: "daily",
      title: "Rutinas diarias con Muse",
      text: [
        "Muse ejecuta las tareas recurrentes que configuras pidiéndoselo. El centro de ayuda de Meta dice que se repiten hasta que las canceles, siguen tu zona horaria y llegan como mensajes en tu conversación.",
      ],
      steps: [
        {
          title: "Configura la rutina en un mensaje",
          text: "Di qué hacer, con qué frecuencia y cuándo, y qué quieres recibir. Muse confirma el horario antes de guardarlo.",
          code: daily,
        },
        {
          title: "Revisa lo programado",
          text: "Pregunta “¿Qué recordatorios tengo?” o toca el icono Assistant arriba y abre Upcoming.",
        },
        {
          title: "Ajústalo sobre la marcha",
          text: "Dile a Muse qué tarea cambiar, mover o cancelar, por ejemplo “Pasa mi revisión del viernes al jueves a las 15:00”.",
        },
      ],
    },
    {
      kind: "steps",
      id: "marketing",
      title: "Meta Muse para marketing y SEO",
      text: [
        "Muse es un agente personal, no una plataforma de marketing, pero la investigación y los primeros borradores le van bien: puede navegar, comparar, resumir y guardar archivos en tu Library, según un horario si quieres. La publicación, déjala en tus manos.",
      ],
      steps: [
        {
          title: "Vigila a la competencia cada semana",
          text: "Dale las páginas que revisar y el día para hacerlo; pídele qué ha cambiado, con enlaces.",
          code: marketing,
        },
        {
          title: "Convierte preguntas en ideas de contenido",
          text: "Pídele que recopile las preguntas que hace la gente sobre tu tema y las agrupe en ideas de artículo. Contrasta las ideas con una herramienta de palabras clave antes de escribir; Muse no muestra volúmenes de búsqueda.",
        },
        {
          title: "Redacta y luego aprueba",
          text: "Haz que redacte correos, posts o briefs a partir de tus notas con tu tono, y que no envíe nada sin ti. Meta no dice que Muse pueda publicar en redes sociales por ti.",
        },
      ],
    },
    {
      kind: "text",
      id: "small-business",
      title: "Meta Muse para un pequeño negocio",
      points: [
        "Triaje de la bandeja de entrada: una lista matinal de lo que te necesita, con borradores para el resto. Para el correo eliges solo lectura o lectura y envío.",
        "Comprobaciones de proveedores y precios: comparar presupuestos, seguir un precio y avisarte cuando baja.",
        "Formularios y reservas: rellenar inscripciones, solicitudes y reservas, y detenerse antes de enviar si se lo pides.",
        "Compras: Muse paga a través de Link de Stripe con una tarjeta de un solo uso y pregunta antes de comprar.",
        "Documentos: briefs, tablas comparativas e informes guardados en la pestaña Library.",
        "Ten en cuenta que es una herramienta de cuenta personal: la cuenta de Meta de una persona, no un espacio de trabajo compartido por un equipo.",
      ],
    },
    {
      kind: "steps",
      id: "money",
      title: "Ahorra dinero (o gana algo) con Muse",
      text: [
        "Dos de los ejemplos de lanzamiento de Meta tratan de dinero: vender un coche por más y rebajar una factura. Los dos funcionan porque Muse puede investigar, redactar y negociar, y te consulta antes de comprometerse.",
      ],
      steps: [
        {
          title: "Vende algo por más",
          text: "Pídele que ponga precio al artículo, redacte el anuncio y ordene las ofertas.",
          code: money,
        },
        {
          title: "Rebaja una factura",
          text: "Dale tu plan actual y pídele que encuentre uno mejor y redacte la solicitud.",
        },
        {
          title: "Vigila precios",
          text: "Pídele que revise el precio de un producto, un vuelo o un hotel según un horario y te avise cuando baje de una cifra.",
        },
      ],
    },
    {
      kind: "table",
      id: "more",
      title: "Más casos de uso de Meta Muse",
      headers: ["Caso de uso", "Prueba a pedir"],
      rows: [
        ["Viajes", "“Busca tres opciones de vuelo y hotel para [fechas] y no reserves hasta que yo elija una.”"],
        ["Recados", "“Convierte este reel de receta guardado en una lista de la compra para cuatro personas.”"],
        ["Eventos", "“Organiza una cena para seis el sábado; recuerda que Sam es vegetariano; redacta las invitaciones.”"],
        ["Salud y deporte", "“Ajusta mi plan de carrera; este mes solo puedo entrenar tres días a la semana.”"],
        ["Gestiones del hogar", "“Busca un fontanero cerca de mí con buenas reseñas que pueda venir esta semana, y redacta el mensaje.”"],
        ["Aprendizaje", "“Cada tarde a las 20:00, pregúntame cinco frases en inglés de esta semana.”"],
      ],
    },
    {
      kind: "text",
      id: "tips",
      title: "Consejos para obtener mejores resultados",
      points: [
        "Describe el resultado y los límites (presupuesto, fechas, qué no hacer), no cada paso.",
        "Di dónde debe parar: “redacta pero no envíes”, “compara pero no reserves”.",
        "Menciona tus preferencias una vez; Muse las recuerda entre conversaciones, y puedes decirle que las olvide.",
        "Conecta solo las apps que necesita una tarea, y elige el correo de solo lectura cuando basten los borradores.",
        "Vigila el límite semanal: la investigación larga gasta más tokens. Power ($20 al mes) tiene 500M de tokens a la semana.",
        "Revisa el registro de auditoría de lo que ha hecho y piensa hacer; Meta advierte que puede ser inexacto o hacer cosas inesperadas.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Con Crewmark",
      title: "Cuando el marketing es un trabajo, no un recado",
      text: [
        "Una revisión semanal de la competencia es un recado. Hacer crecer el tráfico de búsqueda es un trabajo: investigación de palabras clave, páginas, indexación y un informe frente a un objetivo, cada día. Crewmark convierte tu propio Claude Code o Codex en un empleado de IA para ese tipo de trabajo, con un rol, un objetivo en cifras, horario laboral y un heartbeat.",
      ],
      steps: [
        {
          title: "Contrata un rol de marketing",
          text: "Empieza por el [especialista SEO de IA](/ai-employees/seo-specialist) o el [agente de marketing de IA](/ai-employees/marketing-agent); cada uno viene con un brief, un objetivo y una rutina diaria.",
        },
        {
          title: "Dale las skills",
          text: "Nuestras [skills de marketing](/skills) de código abierto son las que ejecuta cada día nuestro propio agente de SEO.",
        },
        {
          title: "Lee su informe diario",
          text: "Se despierta con un heartbeat, avanza por un tablero y te escribe cuando necesita una decisión. Consulta la [guía de Meta Muse](/personal-agent/meta-muse) para la parte personal.",
        },
      ],
    },
  ],
  howTo: { section: "daily", name: "Configurar una rutina diaria en Meta Muse" },
  mid: {
    title: "¿Quieres el marketing hecho cada día, no solo investigado?",
    text: "Los empleados de SEO y marketing de IA de Crewmark avanzan por un tablero con un heartbeat e informan.",
    button: "Empezar",
  },
  faq: {
    title: "Preguntas frecuentes",
    items: [
      {
        q: "¿Para qué se usa mejor Meta Muse?",
        a: "Para objetivos que necesitan varios pasos en la web y en tus apps, con un punto en el que decides tú: vender algo, rebajar una factura, planificar un viaje o un evento, hacer triaje del correo y comprobaciones recurrentes como un resumen diario o una vigilancia semanal de precios.",
      },
      {
        q: "¿Puede Meta Muse ejecutar una tarea cada día?",
        a: "Sí. Pide una tarea recurrente con la hora, como “Cada día laborable a las 7 de la mañana, mándame un resumen”. Se repite hasta que la canceles, y la encontrarás en el icono Assistant, en Upcoming.",
      },
      {
        q: "¿Puedo usar Meta Muse para marketing o SEO?",
        a: "Para investigación y borradores, sí: revisiones de la competencia, ideas de contenido, borradores de correos y posts, guardados como archivos. No muestra volúmenes de búsqueda, y Meta no dice que pueda publicar en redes sociales, así que la publicación queda en tus manos.",
      },
      {
        q: "¿Meta Muse sirve para un pequeño negocio?",
        a: "Para las gestiones de una persona, como el triaje del correo, presupuestos, formularios, reservas y compras con aprobación. Funciona con una cuenta de Meta personal, no con un espacio de trabajo compartido por un equipo.",
      },
      {
        q: "¿Puede Meta Muse hacerme ganar dinero?",
        a: "Puede ayudar: entre los ejemplos de la propia Meta están vender un coche por más y rebajar una factura. Investiga, redacta y negocia, y te consulta antes de comprometerse.",
      },
      {
        q: "¿Qué prompts funcionan bien con Meta Muse?",
        a: "Los que indican el resultado, los límites y dónde parar, como “Busca tres vuelos por menos de $400 para estas fechas y pregúntame antes de reservar”. Los prompts de esta página son un punto de partida.",
      },
    ],
  },
  cta: {
    title: "Recados para Muse. Un trabajo para un empleado de IA.",
    text: "Crewmark convierte sesiones de Claude Code y Codex en empleados de IA con roles, objetivos, horario laboral y un heartbeat.",
    button: "Empezar",
  },
  checked: "Comprobado con el anuncio de Muse de Meta y los artículos del centro de ayuda de Meta el 10 de noviembre de 2026.",
  disclaimer:
    "Crewmark es un producto independiente, sin relación con Meta y sin su respaldo. Muse y Meta son marcas de Meta. Los prompts de esta página son ejemplos de Crewmark, no de Meta.",
};
