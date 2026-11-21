import type { GuideCopy } from "@/components/landing/guide-article";

// es translation of /skills/mobile-app-design; the English master is src/content/skill-pages/mobile-app-design.ts.

const expo = "https://github.com/expo/skills";

const install = `# Las skills oficiales de Expo (plugin de Claude Code)
/plugin install expo@claude-plugins-official

# Las reglas de React Native de Vercel
npx skills add vercel-labs/agent-skills --skill vercel-react-native-skills

# SwiftUI Pro (Paul Hudson)
npx skills add https://github.com/twostraws/swiftui-agent-skill --skill swiftui-pro

# SwiftUI Expert (Antoine van der Lee)
/plugin marketplace add AvdLee/SwiftUI-Agent-Skill
/plugin install swiftui-expert@swiftui-expert-skill

# Las skills del equipo de Flutter
npx skills add flutter/agent-plugins

# Revisión de diseño según Apple para cualquier framework
npx skills add dickwu/apple-design-skill

# Mobile Taste Skill para React Native y Expo
/plugin marketplace add draftbit/mobile-taste-skill
/plugin install mobile-taste-skill`;

export const copy: GuideCopy = {
  meta: {
    title: "Mejores skills de Claude para diseño y desarrollo de apps móviles",
    description:
      "Las mejores skills de Claude Code para apps móviles en 2026, por plataforma: Expo y Vercel para React Native, SwiftUI Pro y SwiftUI Expert para iOS, las skills del equipo de Flutter, revisión de diseño según Apple y más, con comandos de instalación.",
  },
  breadcrumb: "Skills de apps móviles",
  parent: { name: "Skills de Claude", href: "/skills" },
  hero: {
    kicker: "Skills de Claude · Apps móviles",
    title: "Las mejores skills de Claude para diseño y desarrollo de apps móviles",
    lead: "Una skill móvil es un archivo SKILL.md que enseña a Claude Code (o a Codex, Cursor y otros agentes) a desarrollar para móviles: las reglas de diseño de la plataforma, las APIs que han cambiado desde que se entrenó el modelo y los errores que suelen cometer los agentes en SwiftUI, React Native o Flutter. La mayoría se centran en una plataforma, así que elige según aquella en la que publicas. Estas son las skills que vale la pena instalar en 2026, agrupadas por plataforma, según el repositorio de cada proyecto.",
    cta: "Empezar",
    secondary: "Comparar las skills",
    secondaryHref: "#compare",
  },
  sections: [
    {
      kind: "text",
      title: "Recomendaciones rápidas",
      points: [
        "React Native y Expo: las skills oficiales de Expo para desarrollar y publicar, react-native-skills de Vercel o las skills de Callstack para el rendimiento, y Mobile Taste Skill para pantallas que no parezcan hechas por IA.",
        "SwiftUI e iOS: SwiftUI Pro de Paul Hudson para un SwiftUI moderno y accesible, SwiftUI Expert de Antoine van der Lee para estado y rendimiento, y Claude Code Apple Skills para ir de la idea a la App Store.",
        "Flutter: las skills del propio equipo de Flutter para arquitectura, layouts, routing y tests.",
        "Diseño para cualquier framework: Apple Design Skill revisa un diseño según las Human Interface Guidelines de Apple, en SwiftUI, Flutter, React Native y más; UI UX Pro Max elige estilos, paletas y fuentes.",
        "Antes de enviarla: App Store Review comprueba un proyecto según las reglas de la App Store y Google Play.",
        "Una web app que debería sentirse como una app: mobile-native de Emil Kowalski corrige el CSS y las etiquetas meta que la delatan en el móvil.",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Skills de apps móviles comparadas",
      text: [
        "Estrellas y licencias de la API de GitHub a 8 de noviembre de 2026, redondeadas. En los repositorios con muchas skills, las estrellas son de todo el repositorio.",
      ],
      headers: ["Skill", "Plataforma", "Ideal para", "Estrellas", "Licencia"],
      rows: [
        ["[UI UX Pro Max](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill)", "Web, móvil, escritorio", "Estilos, paletas, pares de fuentes y reglas de UX", "~147k", "MIT"],
        ["[mobile-native](https://github.com/emilkowalski/skills/tree/main/skills/mobile-native) (Emil Kowalski)", "Web móvil, PWAs", "Hacer que una web app se sienta nativa en el móvil", "~54k (repo)", "MIT"],
        ["[react-native-skills](https://github.com/vercel-labs/agent-skills/tree/main/skills/react-native-skills) (Vercel)", "React Native, Expo", "Reglas de rendimiento para listas, animación, navegación y UI", "~34k (repo)", "MIT (según el README)"],
        ["[SwiftUI Pro](https://github.com/twostraws/SwiftUI-Agent-Skill) (Paul Hudson)", "SwiftUI, iOS 26+", "Corregir los errores que cometen los LLMs en SwiftUI; accesibilidad", "~6.5k", "MIT"],
        ["[Expo skills](https://github.com/expo/skills) (Expo)", "React Native, Expo", "Desarrollar, diseñar y publicar apps de Expo: router, UI nativa, animación, EAS", "~4.1k", "MIT"],
        ["[SwiftUI Expert](https://github.com/AvdLee/SwiftUI-Agent-Skill) (Antoine van der Lee)", "SwiftUI, iOS, macOS", "Estado, rendimiento, navegación y Liquid Glass; herramientas de trazas de Instruments", "~3.9k", "MIT"],
        ["[Flutter agent plugins](https://github.com/flutter/agent-plugins) (equipo de Flutter)", "Flutter", "Arquitectura, layouts responsive, arreglos de layout, routing, tests, localización", "~3.2k", "BSD 3-Clause"],
        ["[Apple Design Skill](https://github.com/dickwu/apple-design-skill)", "SwiftUI, UIKit, Flutter, React Native, Tauri, Electron", "Revisar un diseño según 123 páginas de directrices de Apple", "~3k", "No indicada"],
        ["[agent-skills](https://github.com/callstackincubator/agent-skills) (Callstack)", "React Native", "Rendimiento, navegación, actualizaciones, migración y pruebas en un dispositivo", "~1.7k", "MIT"],
        ["[Claude Code Apple Skills](https://github.com/rshankras/claude-code-apple-skills)", "iOS, macOS, watchOS, visionOS", "165 skills de la idea a la App Store, 8 de ellas de diseño", "~870", "MIT"],
        ["[Sleek](https://github.com/sleekdotdesign/agent-skills)", "React Native, HTML", "Pantallas diseñadas por el servicio de IA de Sleek y después construidas en código", "~600", "MIT"],
        ["[Mobile App UI Design](https://github.com/ceorkm/mobile-app-ui-design)", "Cualquiera (mockups en React y Tailwind)", "Reglas de diseño de apps conocidas: color, retícula de 8 puntos, zona del pulgar", "~500", "No indicada"],
        ["[Apple Skills](https://github.com/Prisma-Labs-Dev/apple-skills) (Prisma Labs)", "iOS 26+", "APIs actuales de Apple: SwiftUI, UIKit, HIG, Liquid Glass, StoreKit", "~360", "MIT"],
        ["[App Store Review](https://github.com/devsemih/appstore-review-skill)", "Cualquiera", "Comprobar una app según las reglas de la App Store y Google Play antes de enviarla", "~100", "MIT"],
        ["[Mobile Taste Skill](https://github.com/draftbit/mobile-taste-skill) (Draftbit)", "React Native, Expo", "Pantallas, navegación y un sistema de diseño que no parezcan generados por IA", "~10", "Ver el repo"],
      ],
    },
    {
      kind: "text",
      id: "installs",
      title: "Las skills móviles más instaladas",
      text: [
        "Instalaciones a través de la CLI de skills, según el registro de skills.sh a 8 de noviembre de 2026. Los plugins instalados con `/plugin install` casi no aparecen aquí, así que tómalas como un mínimo.",
      ],
      points: [
        "ui-ux-pro-max (web y móvil): unas 440.000",
        "vercel-react-native-skills: unas 270.000",
        "mobile-native (Emil Kowalski): unas 116.000",
        "expo-dev-client, la más instalada de las skills de Expo: unas 74.000",
        "flutter-apply-architecture-best-practices, la más instalada de las del equipo de Flutter: unas 45.000",
        "swiftui-pro (Paul Hudson): unas 37.000",
        "swiftui-expert-skill (Antoine van der Lee): unas 36.000",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Cómo configurar Claude Code para una app móvil",
      steps: [
        {
          title: "Elige por plataforma: una skill que construya y otra que diseñe",
          text: "Para Expo, las skills de Expo más Mobile Taste Skill; para SwiftUI, SwiftUI Pro o SwiftUI Expert más Apple Design Skill; para Flutter, las skills del equipo de Flutter más Apple Design Skill o UI UX Pro Max. Dos skills que quieran marcar el estilo a la vez se pelearán.",
          code: install,
        },
        {
          title: "Dale el brief y una app de referencia",
          text: "Di para quién es la app, las tres o cuatro pantallas que importan y una app cuya sensación te guste. Mobile Taste Skill hace que el agente se comprometa con una lectura de la app (tipo, público, sensación) y planifique la navegación antes de escribir código.",
        },
        {
          title: "Compruébalo en un simulador, no en el código",
          text: "Ejecuta la app en el iOS Simulator, un emulador de Android o Expo Go y mira pantallas reales en más de un tamaño. La skill agent-device de Callstack permite al agente manejar un dispositivo y comprobar su propio trabajo.",
        },
        {
          title: "Guarda el sistema de diseño en el repositorio",
          text: "Mobile Taste Skill escribe un MOBILE-DESIGN.md y Expo tiene una skill expo-design-system. Guarda el resultado en el repositorio para que las sesiones posteriores, y otros agentes, sigan los mismos colores, tipografía y espaciado. Consulta la [guía de CLAUDE.md](/blog/claude-md).",
        },
      ],
      source: { label: "Fuente: las agent skills de Expo", href: expo },
    },
    {
      kind: "text",
      title: "Qué saber antes de instalar",
      points: [
        "Sleek necesita una cuenta de pago para un uso real: las cuentas gratuitas reciben créditos de prueba para aproximadamente una ejecución de diseño, y Pro cuesta $69 al mes, según su skill. Cada brief se envía a sleek.design.",
        "Las skills de EAS de Expo usan los servicios alojados de builds y actualizaciones de Expo, y cada skill de Expo pide al agente que envíe feedback a través de la CLI de agentes de Expo.",
        "Las herramientas de trazas de SwiftUI Expert necesitan xctrace de Xcode y Python 3; graban y analizan trazas de Instruments en tu máquina.",
        "Claude Code Apple Skills sigue su rama main sin fijar versiones, y su propio aviso dice que las skills se escribieron con ayuda de Claude Code y pueden contener inexactitudes.",
        "mobile-native de Emil Kowalski es para web apps y PWAs en el móvil, no para apps nativas.",
        "Ninguna de estas la hacen Apple ni Google, y App Store Review no puede garantizar la aprobación. El registro también incluye design-mobile-apps de Sleek con unos 1,3 millones de instalaciones en un repositorio con pocas estrellas; no hemos podido verificar esa cifra, así que no está en la lista de arriba.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Con Crewmark",
      title: "Dales a las skills un diseñador de apps que trabaje cada día",
      text: [
        "Una skill hace que una sesión sea mejor en trabajo móvil. Crewmark convierte Claude Code o Codex en un diseñador de apps de IA con un objetivo, como tres pantallas pulidas a la semana, horario laboral y un tablero de pantallas por arreglar; se despierta con un heartbeat y abre pull requests con capturas del simulador.",
      ],
      steps: [
        {
          title: "Contrata el rol de diseñador de apps",
          text: "Su brief, su objetivo y su rutina vienen configurados; consulta el [diseñador de apps de IA](/ai-employees/app-designer) y el [ingeniero de software de IA](/ai-employees/software-engineer).",
        },
        {
          title: "Instala tus skills móviles en el repositorio",
          text: "El empleado usa las skills de `.claude/skills` como cualquier sesión. Para trabajo web y de UI, consulta [las mejores skills de Claude para diseño web](/skills/website-design).",
        },
        {
          title: "Revisa pull requests, no prompts",
          text: "Aprueba las pantallas que te gusten; pide cambios en el tablero. Lee [qué es un empleado de IA](/ai-employees).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Configurar Claude Code para trabajo en apps móviles con skills" },
  mid: {
    title: "¿Quieres un diseñador de apps que ejecute estas skills cada día?",
    text: "El diseñador de apps de IA de Crewmark trabaja en tu código con un heartbeat y abre pull requests con capturas.",
    button: "Empezar",
  },
  faq: {
    title: "Preguntas frecuentes sobre las skills de Claude para apps móviles",
    items: [
      {
        q: "¿Cuál es la mejor skill de Claude para diseñar apps móviles?",
        a: "Depende de la plataforma. Para React Native y Expo, Mobile Taste Skill con las propias skills de Expo; para SwiftUI, SwiftUI Pro o SwiftUI Expert con Apple Design Skill; para cualquier framework, Apple Design Skill o UI UX Pro Max para la parte visual.",
      },
      {
        q: "¿Hay una skill oficial de Claude para React Native o Expo?",
        a: "Expo publica expo/skills, también disponible como plugin en claude-plugins-official, y Vercel y Callstack publican skills de React Native. Ninguna la hace Anthropic.",
      },
      {
        q: "¿Cuál es la mejor skill de Claude Code para SwiftUI e iOS?",
        a: "SwiftUI Pro de Paul Hudson se centra en iOS 26 y Swift 6.4 y en los errores que cometen los LLMs en SwiftUI; SwiftUI Expert de Antoine van der Lee cubre estado, rendimiento y Liquid Glass. Las dos se instalan como plugins o con la CLI de skills.",
      },
      {
        q: "¿Hay una skill de Flutter para Claude Code?",
        a: "Sí. El equipo de Flutter publica flutter/agent-plugins, con skills de arquitectura, layouts responsive, arreglos de layout, routing, localización y tests, e incluye las herramientas MCP de Dart y Flutter.",
      },
      {
        q: "¿Puede Claude Code diseñar la UI de una app móvil?",
        a: "Con una skill de diseño lo hace mucho mejor que sin ella: la skill aporta las reglas de la plataforma y una dirección. Revisa las pantallas en un simulador o en un móvil, porque el código por sí solo no muestra los problemas de espaciado ni de áreas táctiles.",
      },
      {
        q: "¿Funcionan estas skills móviles con Codex y Cursor?",
        a: "La mayoría sí. Expo, SwiftUI Pro, SwiftUI Expert, Apple Design Skill y las skills de Callstack documentan Codex o Cursor, y la CLI de skills instala skills SKILL.md en decenas de agentes.",
      },
    ],
  },
  cta: {
    title: "Pon un diseñador de apps en tu tablero, con las skills en las que confías.",
    text: "Crewmark convierte sesiones de Claude Code, Codex, DeepSeek Harness y OpenCode en empleados de IA con roles, objetivos, horario laboral y un heartbeat.",
    button: "Empezar",
  },
  checked:
    "Comprobado con el repositorio de GitHub de cada skill, la API de GitHub y el registro de skills.sh el 8 de noviembre de 2026.",
  disclaimer:
    "Crewmark es un producto independiente, sin relación con Anthropic, Apple, Google ni los autores de las skills listadas y sin su respaldo. Los nombres de los productos son marcas de sus titulares.",
};
