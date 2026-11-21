import type { GuideCopy } from "@/components/landing/guide-article";
import { motionSections, type MotionLabels, type MotionText } from "@/content/blog/opus-5-5-motion-graphics";

// es translation of /blog/opus-5-5-motion-graphics; the English master is src/content/blog/opus-5-5-motion-graphics.ts.
// Prompts stay in the makers' own words and are not translated.

const basePrompt = "make a dynamic 15-second motion graphics video that shows what an incredible motion designer you are";

const text: MotionText = {
  "claude-motion-reel": {
    title: "Claude, motion designer: un reel de 15 segundos a partir de una frase",
    text: "Un reel de portfolio: letras de partículas, curvas de easing bajo \"Timing is everything\", tipografía líquida y un cierre naranja que suma 899 fotogramas, 8 escenas y 1 keyframe. A partir de una frase en chino.",
  },
  "pelican-riding-a-bicycle": {
    title: "Un pelícano en bicicleta, hecho en serio",
    text: "Cansado de los pelícanos en SVG, el autor pidió el más detallado posible. Opus 5.5 escribió todo en Claude Code: una escena de Blender renderizada con Cycles, un renderizador de nubes en Rust para un cielo de 12K, unas 24.000 plumas, una bici con 36 radios y 92 eslabones, y la música. Sin modelos, texturas ni música prefabricados.",
  },
  "inference-startup-launch": {
    title: "Muda: el vídeo de lanzamiento de una startup de inferencia, en un minuto y por unos 2 $",
    text: "«La mayor parte de la inferencia es esperar. Ya no». Las cuadrículas de peticiones se encienden mientras sube el rendimiento y aparece la marca. Sin modelo de vídeo ni librerías extra: Claude animó una página web y la grabó con Playwright y ffmpeg.",
  },
  "typingmind-launch": {
    title: "TypingMind: un prompt en lugar de cuatro semanas con freelancers",
    text: "Opus leyó las páginas del producto, escribió el guion y animó un único chat que pregunta a varios modelos a la vez. Un prompt y casi una hora en Claude Code, sin skills instaladas.",
  },
  "notion-launch-it-picked": {
    title: "Un vídeo de lanzamiento de Notion, con el producto elegido por Opus",
    text: "Solo le pidieron elegir un SaaS conocido y hacer un vídeo de lanzamiento profesional: Opus eligió Notion, sacó recursos reales de la web y montó un vídeo pulido de funciones.",
  },
  "makermap-one-shape": {
    title: "MakerMap: una sola forma que se transforma en todo el producto",
    text: "Veinte segundos en los que una forma se convierte en el registro, un pin en el mapa, 3.393 makers sobre un globo, coincidencias y búsqueda. Los muelles, el cursor y el desenfoque son cálculo determinista en un solo archivo HTML.",
  },
  "distilbook-oppenheimer": {
    title: "Distilbook, con música al estilo de Oppenheimer",
    text: "Dos capítulos, Fisión y Fusión: miles de páginas doradas forman titulares, una cuenta atrás, una explosión, con música que Opus compuso a partir del tema de la película.",
  },
  "distilbook-film-strips": {
    title: "Distilbook: tiras de película que giran hacia un túnel",
    text: "Un arcoíris de tiras de película cruza la pantalla y se enrosca en un túnel luminoso, al estilo de un vídeo de referencia. La versión final no tiene ediciones manuales.",
  },
  "motionsites-1m-visitors": {
    title: "MotionSites llega al millón de visitas al mes",
    text: "Un vídeo de hito con un contador que sube hasta el millón. Hecho a la primera en cuatro minutos, con un solo cambio.",
  },
  "famewall-mascot": {
    title: "Famewall: encontró la mascota y la metió en el vídeo",
    text: "Un vídeo de lanzamiento para una herramienta de testimonios. Opus revisó los SVG del sitio, encontró su mascota y la incluyó sin que nadie se lo pidiera.",
  },
  "lumail-pricing": {
    title: "Lumail: email marketing que tu agente de IA puede manejar",
    text: "Cuadrículas de contactos que nunca abren un correo y una factura que no para de subir, y luego la propuesta. En menos de diez minutos, sin skills, solo el prompt.",
  },
  "founder-page-launch": {
    title: "founder.page: todas las funciones en 20 segundos",
    text: "Un vídeo de lanzamiento rápido y fiel a la marca, con contadores de ingresos y visitas. Hecho a la primera en Claude Code.",
  },
  "tanstack-ai-launch": {
    title: "TanStack AI: un vídeo de lanzamiento para desarrolladores",
    text: "Hecho con Opus 5.5 y Remotion a partir de un brief largo que pedía un vídeo premium digno de abrir una keynote.",
  },
  "sahi-trading-terminal": {
    title: "Una terminal de trading que se aleja hasta ser un punto en el espacio",
    text: "De un solo punto a gráficos, posiciones y una cadena de opciones; se aleja hasta que el escritorio es una mota en el espacio y vuelve a un móvil. Hecho a la primera.",
  },
  "aisa-one-key": {
    title: "AIsa: miles de claves de API se convierten en una",
    text: "Un enjambre de nombres de claves se reduce a una única llave naranja. Un prompt, a la primera.",
  },
  "flowdrive-showreel": {
    title: "Flowdrive: streaming en 4K, entregado en todas partes",
    text: "Un vídeo oscuro y editorial para un servicio de entrega de archivos: terreno en capas, un globo de puntos brillante y un dominio propio. Sin skills; con sonido.",
  },
  "matra-apple-style": {
    title: "Matra: un vídeo al estilo Apple para una app",
    text: "Treinta segundos en Remotion y React: tipografía SF Pro, un iPhone de titanio, subtítulos sincronizados palabra a palabra con una voz real y música.",
  },
  "no-hands-labs": {
    title: "No Hands Labs: empresas que se construyen solas",
    text: "Texto lima sobre negro y un 95 % en matriz de puntos para un estudio de empresas dirigidas por IA.",
  },
  "pen-designs-launch": {
    title: "norilu: delega el trabajo que siempre vuelve",
    text: "Opus leyó los diseños del autor mediante el MCP de pen.dev e hizo un vídeo de lanzamiento sereno. Un segundo prompt sin rodeos mejoró la música y el ritmo.",
  },
  "bento-surf": {
    title: "Bento.surf: un vídeo de producto de 40 segundos",
    text: "Un vídeo divertido y pensado para móvil de una página de enlaces, a partir de un solo prompt.",
  },
  quickemailverify: {
    title: "QuickEmailVerify: frena los rebotes antes de enviar",
    text: "Un vídeo de estilo SaaS para un verificador de correos, desde escribir una dirección hasta una lista limpia. Opus 5.5 con effort alto.",
  },
  "orbe-everyday-spending": {
    title: "Orbe: gastos del día a día en 3D isométrico",
    text: "Un vídeo vertical para una app de gastos: un supermercado, una gasolinera y un restaurante, cada uno registrando una compra. El autor dice que hizo falta más de un prompt.",
  },
  "winkz-pitch": {
    title: "Un vídeo de presentación para un negocio mayorista en Amazon",
    text: "Quince segundos para convencer a marcas, con contadores de protección de precio y compra por adelantado.",
  },
  "queryglow-launch": {
    title: "QueryGlow: un vídeo de lanzamiento al estilo de Anthropic",
    text: "Un vídeo tranquilo, con tipografía serif, para una herramienta de bases de datos autoalojada; el autor pidió en alemán algo «a lo Anthropic» y al final añadió música.",
  },
  "opus-1984-ad": {
    title: "Un anuncio de Opus 5.5 inspirado en el «1984» de Apple",
    text: "Alguien que corre con un martillo, filas de figuras grises y una cara gigante en la pantalla, todo hecho solo con código. Opus incluso comprobó los niveles de sonido.",
  },
  "paybox-brand-sting": {
    title: "PayBox: una cortinilla de marca a partir de un logo",
    text: "El agente leyó el logo, encontró la empresa, escribió el guion y construyó una cortinilla de diez segundos en una sola pasada.",
  },
  "paymentform-logo-reveal": {
    title: "PaymentForm: un logo hecho de fragmentos low-poly",
    text: "Un logo en alambre se rellena fragmento a fragmento, aparece el icono de la app y se escribe el nombre, con sonido.",
  },
  "opus-retro-launch": {
    title: "Un vídeo de lanzamiento retrofuturista de Opus 5.5",
    text: "Una cabeza de rayas luminosas con grano de película y efecto CRT, a partir de un prompt y una imagen de referencia.",
  },
  "psychedelic-showreel": {
    title: "Phosphene: un estudio de movimiento psicodélico",
    text: "Un ojo gigante, túneles giratorios y caleidoscopios, con imagen y sonido de Opus en effort extra alto: 90 minutos de render y 14 $ en total.",
  },
  "poster-breaks-out": {
    title: "Un cartel que rompe su propio marco",
    text: "Grandes letras rojas y azules atraviesan su cartel. Opus compuso la banda sonora y sincronizó cada golpe con el ritmo.",
  },
  "i-can": {
    title: "I CAN: desenfocar, repetir, renderizar, agrupar, curvar la luz",
    text: "Rótulos en negrita que hacen lo que dicen, a partir de un prompt de una línea.",
  },
  "light-speed-earth": {
    title: "Un segundo en la Tierra",
    text: "Sin ninguna indicación, Opus eligió el tema: todo lo que ocurre en un segundo, desde la luz dando vueltas a la Tierra hasta el nacimiento de cuatro bebés.",
  },
  "no-samples-showreel": {
    title: "Un showreel con música creada desde cero",
    text: "El autor no sabe nada de motion design. Opus escribió el código de cada fotograma y sintetizó la música, sin samples, en Cursor.",
  },
  "easing-explained": {
    title: "I make things move: Motion Designer Claude",
    text: "Tipografía que gira y encaja, una lección sobre curvas de easing y un cierre, a partir de un prompt de una línea en chino.",
  },
  "portfolio-film": {
    title: "El portfolio de un diseñador, convertido en vídeo",
    text: "Opus recorrió cada pantalla del portfolio del autor y su trabajo open source, e hizo un reel potente a la primera.",
  },
  "it-thinks-in-curves": {
    title: "Ritmo, tipografía, bucles: piensa en curvas",
    text: "Bucles cuadrados de tipografía en bloques de color y una curva de Bézier trazada en directo, sobre la idea de Opus de que escribe matemáticas en vez de keyframes.",
  },
  "who-are-you-opus": {
    title: "Hola, soy Claude: Opus 5.5 se presenta",
    text: "Diez segundos de tipografía: «leo cada palabra», «lo pienso bien», «lo digo claro», «construyo contigo».",
  },
  "madhav-about-me": {
    title: "Un vídeo de diez segundos sobre quien lo pidió",
    text: "Cuando le pidieron un vídeo con lo que supiera del autor, Opus hizo una pieza de partículas sobre su trabajo.",
  },
  "recursion-nine-styles": {
    title: "La recursión explicada en nueve géneros",
    text: "Cada explicación cambia a un estilo distinto, de un videojuego retro al cine negro. A la primera de verdad: escenas en React y SVG, música y sonido sintetizados en Python.",
  },
  "negroni-recipe": {
    title: "Un Negroni, paso a paso",
    text: "Una receta animada que llena el vaso ingrediente a ingrediente, renderizada en HTML a partir de una sola imagen.",
  },
  "history-of-ai": {
    title: "83 años de IA en menos de tres minutos",
    text: "Investigación, guion, animación y sonidos reales grabados: los 5.160 fotogramas los programó Claude a partir de un solo prompt.",
  },
  "how-llms-work-fable": {
    title: "Cómo funcionan los LLM, en motion graphics",
    text: "Tokens, embeddings, atención y capas del transformer, cada uno en su escena, de la prueba de Fable 5.2 de Matthew Berman.",
  },
  "white-russian-recipe": {
    title: "Un White Russian en estilo dibujado a mano",
    text: "Con un boceto y un prompt, un MP4 en 1080p unos 25 minutos después: un archivo HTML de SVG y JavaScript puro, sin librería de animación.",
  },
};

const labels: MotionLabels = {
  likes: "me gusta",
  views: "visualizaciones",
  prompt: "Ver el prompt (original)",
  alt: (title) => `Fotograma del vídeo: ${title}`,
};

export const copy: GuideCopy = {
  meta: {
    title: "Motion graphics con Opus 5.5: 43 ejemplos y sus prompts",
    description:
      "Vídeos de motion graphics hechos con Claude Opus 5.5: vídeos de lanzamiento, animaciones de logo, tipografía cinética y explicaciones, cada uno con el prompt de su autor, me gusta y visualizaciones. Además, el prompt que todos copiaron y cómo hacer uno en Claude Code.",
  },
  breadcrumb: "Motion graphics con Opus 5.5",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-12" },
  hero: {
    kicker: "Blog · Claude Opus 5.5",
    title: "Motion graphics con Opus 5.5: 43 ejemplos y los prompts que hay detrás",
    lead: "Desde que salió Claude Opus 5.5, mucha gente le pide motion graphics y publica el resultado: vídeos de lanzamiento, animaciones de logo, tipografía cinética, recetas explicadas. Opus escribe cada uno como código y lo renderiza a MP4. Los vimos todos y nos quedamos con los 43 mejores, cada uno con el prompt de su autor.",
    cta: "Empezar",
    secondary: "Ver los ejemplos",
    secondaryHref: "#launch-films",
  },
  sections: [
    {
      kind: "text",
      id: "how-it-works",
      title: "Cómo hace Claude un vídeo de motion graphics",
      text: [
        "No interviene ningún modelo de vídeo. Opus escribe la animación como código (una página HTML con SVG y JavaScript, un proyecto de React o [Remotion](https://www.remotion.dev), a veces Three.js), recorre un navegador headless fotograma a fotograma y pasa los fotogramas a ffmpeg. La música y los efectos de sonido también se sintetizan en código.",
        "Como cada fotograma es una función del tiempo, los bucles cierran a la perfección y el sonido cae en el fotograma exacto. Además, el texto sale nítido y real: nombres de producto, precios y textos de interfaz bien escritos.",
      ],
      points: [
        "El vídeo de lanzamiento de Deedy Das usó solo JavaScript, Playwright y ffmpeg, y costó unos 2 $ de API.",
        "El vídeo de Ethan Mollick sobre la recursión dibujó cada escena en React y SVG y sintetizó la música en Python.",
        "La receta animada de Sarutobi Sasuke es un archivo HTML de SVG y JavaScript puro, sin librería de animación, terminado en unos 25 minutos.",
      ],
    },
    {
      kind: "steps",
      id: "make-one",
      title: "Cómo hacer uno con Claude Code",
      steps: [
        {
          title: "Abre Claude Code con Opus 5.5 en una carpeta vacía",
          text: "Varios autores dijeron que no instalaron skills ni plugins: Opus elige sus propias herramientas e instala lo que necesita.",
          code: "mkdir launch-film && cd launch-film\nclaude --model claude-opus-5-5",
        },
        {
          title: "Dale el prompt y tu producto",
          text: "Añade tu web para que lea las páginas y escriba el guion. Un logo, una captura o un vídeo de referencia le ayudan a acertar con tu estilo.",
          code: `${basePrompt} for https://your-site.com. Visit the pages first to learn about the product, then write the video content yourself. Go all out.`,
        },
        {
          title: "Deja que renderice",
          text: "Cuenta con unos minutos o hasta hora y media, según la duración y el effort. Pídele que te diga dónde guarda el MP4.",
        },
        {
          title: "Míralo y di qué falla",
          text: "La primera versión de Sacha Arbonel iba demasiado rápida y la música flojeaba; un segundo mensaje sin rodeos la mejoró mucho. Pide un ritmo más lento, una canción libre de derechos u otro formato.",
        },
      ],
    },
    {
      kind: "text",
      id: "the-prompt",
      title: "El prompt que todos copiaron",
      text: [`Muchos de los vídeos de abajo parten del mismo prompt corto que circuló por X: \`${basePrompt}\`. Lo que los autores le añadieron:`],
      points: [
        "Tu producto o web: «for <tu url>», o «visita primero las páginas para entender el producto y luego escribe tú el contenido del vídeo».",
        "Una referencia: «como si fuera tu showreel», «dalo todo (go all out)», «un vídeo de lanzamiento premium para desarrolladores», «al estilo Apple».",
        "Un tono o un sonido: «psicodélico e hipnótico», o «inspírate en la música de Oppenheimer, pero compónla tú».",
        "Un límite: «evita los marcos y textos en las esquinas, que delatan que lo hizo una IA».",
        "Material de referencia: un logo, una imagen, un boceto a mano u otro vídeo que imitar.",
      ],
    },
    ...motionSections(
      "es",
      text,
      labels,
      {
        launch: { title: "Vídeos de lanzamiento de producto", text: "Lanzamientos, hitos y presentaciones de productos reales, casi todos con un solo prompt." },
        brand: { title: "Animaciones de logo y vídeos de marca", text: "Cortinillas y anuncios hechos a partir de un logo, una imagen de referencia o un anuncio famoso." },
        showreel: { title: "Showreels y tipografía cinética", text: "Opus luciéndose como motion designer: tipografía, bucles y movimiento puro." },
        explainer: { title: "Vídeos explicativos", text: "Recetas, historia e informática, explicadas en movimiento." },
      },
      "Ver la publicación original",
    ),
    {
      kind: "text",
      id: "more",
      title: "Más vídeos",
      text: [
        "La lista completa, con tres fotogramas por vídeo y todos los prompts, está en GitHub: [awesome-claude-motion-video](https://github.com/ummydev/awesome-claude-motion-video).",
        "Para mundos 3D y cortos hechos con el modelo más nuevo de Claude, mira la [colección de vídeos de Claude Fable 5.2 en GitHub](https://github.com/ummydev/awesome-claude-fable-videos), y nuestra [guía de Claude Fable 5.2](/blog/claude-fable-5-2) para ver qué cambió y cómo se compara con Opus 5.5.",
      ],
    },
  ],
  howTo: { section: "make-one", name: "Hacer un vídeo de motion graphics con Claude Opus 5.5 en Claude Code" },
  mid: {
    title: "¿Quieres un vídeo de lanzamiento cada vez que publicas?",
    text: "Un empleado de Crewmark trabaja en tu propio Claude Code: pásale las notas de la versión y renderiza el vídeo mientras tú preparas el lanzamiento.",
    button: "Empezar",
  },
  faq: {
    title: "Preguntas frecuentes",
    items: [
      {
        q: "¿Claude Opus 5.5 puede hacer vídeos?",
        a: "Sí, escribiendo código. Construye la animación como una página web o un proyecto de Remotion y la renderiza fotograma a fotograma a MP4, con música que sintetiza él mismo. No genera imágenes como un modelo de vídeo, por eso el texto, los números y la interfaz salen nítidos.",
      },
      {
        q: "¿Necesito una skill, Remotion o After Effects?",
        a: "No. Varios autores dijeron que usaron Claude Code sin skills: Opus eligió las herramientas, normalmente Playwright o Chrome headless más ffmpeg, a veces Remotion.",
      },
      {
        q: "¿Cuánto tarda y cuánto cuesta?",
        a: "Desde un minuto y unos 2 $ (Deedy Das) hasta hora y media de render y 14 $ con effort extra alto (monokern). La mayoría habló de un prompt y de unos minutos a una hora.",
      },
      {
        q: "¿De dónde sale la música?",
        a: "Normalmente Opus la compone y la sintetiza en código, en Python o JavaScript, y ajusta los golpes a los cortes. Algunos autores le pidieron usar una canción libre de derechos.",
      },
      {
        q: "¿Puedo usar estos prompts?",
        a: "Los prompts son de sus autores y están citados de sus publicaciones. Pruébalos con tu propio producto; los vídeos pertenecen a quienes los hicieron.",
      },
    ],
  },
  cta: {
    title: "Encarga el vídeo a un empleado de IA.",
    text: "Crewmark convierte sesiones de Claude Code y Codex en empleados de IA con puesto, objetivos, horario y heartbeat.",
    button: "Empezar",
  },
  checked: "Me gusta, visualizaciones y prompts comprobados en cada publicación original de X o Xiaohongshu el 12 de noviembre de 2026.",
  disclaimer:
    "Los vídeos y los prompts pertenecen a sus autores; cada tarjeta enlaza a la publicación original. Crewmark es un producto independiente, sin afiliación ni respaldo de Anthropic. Claude, Claude Opus, Claude Fable y Claude Code son marcas de Anthropic.",
};
