import type { GuideCopy } from "@/components/landing/guide-article";

// es translation of /blog/multiple-claude-code-agents; the English master is
// src/content/blog/multiple-claude-code-agents.ts.
export const copy: GuideCopy = {
  meta: {
    title: "Claude Code multiagente: subagentes y worktrees",
    description:
      "Varios agentes de Claude Code a la vez: subagentes, sesiones en paralelo en git worktrees, sesiones con --bg y agent teams experimentales, sin conflictos.",
  },
  breadcrumb: "Varios agentes de Claude Code",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-02" },
  hero: {
    kicker: "Blog · Claude Code",
    title: "Cómo ejecutar varios agentes de Claude Code a la vez",
    lead: "Claude Code puede trabajar en varias cosas al mismo tiempo, de cuatro formas distintas: subagentes dentro de una conversación, sesiones independientes cada una en su propio git worktree, sesiones en segundo plano que inicias con --bg y los agent teams experimentales, cuyos agentes se escriben entre sí. Esta guía muestra cómo configurar cada una, cuál elegir y cómo evitar que los agentes en paralelo se pisen el trabajo.",
    cta: "Empezar",
    secondary: "Ir a los worktrees",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "table",
      title: "Cuatro formas de ejecutar agentes de Claude Code en paralelo",
      headers: ["", "Qué se ejecuta en paralelo", "¿Archivos separados?", "Ideal para"],
      rows: [
        ["Subagentes", "Trabajadores dentro de una conversación, cada uno con su propio contexto", "No, salvo que se configuren con `isolation: worktree`", "Investigación, revisiones y tareas secundarias que devuelven un informe"],
        ["Sesiones en worktrees", "Sesiones completas, cada una en su propio git worktree", "Sí, una rama para cada una", "Varias funciones o correcciones a la vez"],
        ["Sesiones en segundo plano", "Sesiones iniciadas con `claude --bg`, gestionadas en la agent view", "Sí, un worktree para cada una por defecto", "Lanzar tareas ahora y revisarlas después"],
        ["Agent teams", "Una sesión líder más compañeros que comparten una lista de tareas", "No: reparte los archivos entre los compañeros", "Trabajo en el que los agentes necesitan hablar entre sí"],
      ],
    },
    {
      kind: "steps",
      title: "Subagentes: ayudantes en paralelo dentro de una sesión",
      text: [
        "Un subagente tiene su propia ventana de contexto, su propio prompt de sistema y sus propias herramientas. No ve tu conversación y solo devuelve su resumen, lo que mantiene pequeño el contexto de la sesión principal. Claude Code incluye algunos integrados, como Explore (solo lectura) y Plan, y puedes añadir los tuyos.",
      ],
      steps: [
        {
          title: "Define un subagente",
          text: "Crea un archivo Markdown en `.claude/agents/` (compartido con el proyecto) o en `~/.claude/agents/` (solo para ti). Solo son obligatorios `name` y `description`; `tools` limita lo que puede usar y `model` elige el modelo.",
          code: `---
name: code-reviewer
description: Reviews code for quality and best practices
tools: Read, Glob, Grep
model: sonnet
---

You are a code reviewer. When invoked, analyze the code and give
specific, actionable feedback on quality, security and best practices.`,
        },
        {
          title: "Deja que Claude ejecute varios a la vez",
          text: "Pide el trabajo en paralelo, por ejemplo: “revisa en paralelo los módulos de auth, billing y search”. Los subagentes que lanza Claude empiezan en segundo plano por defecto, hasta 20 a la vez, e informan cuando terminan. Escribe `/tasks` para verlos.",
        },
        {
          title: "Dale su propio worktree a cada subagente que edita archivos",
          text: "Añade `isolation: worktree` al frontmatter del subagente, o pide a Claude que use worktrees para sus agentes. Así cada uno edita una copia temporal del repositorio, que se elimina si no hizo cambios.",
        },
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Ejecuta sesiones de Claude Code en paralelo en git worktrees",
      text: [
        "Para todas las opciones, ajustes y soluciones, consulta la [guía completa de worktrees en Claude Code](/blog/claude-code-worktree).",
      ],
      steps: [
        {
          title: "Ignora la carpeta de worktrees",
          text: "Claude Code crea los worktrees en `.claude/worktrees/`, en la raíz del repositorio. El repositorio necesita al menos un commit.",
          code: 'echo ".claude/worktrees/" >> .gitignore',
        },
        {
          title: "Inicia una sesión por tarea",
          text: "En cada terminal, ejecuta `claude --worktree` (o `-w`) con un nombre distinto. Cada una tiene su propia carpeta y una rama llamada `worktree-<name>`, basada en la rama por defecto.",
          code: "# terminal 1\nclaude --worktree feature-auth\n\n# terminal 2\nclaude --worktree bugfix-login",
        },
        {
          title: "Copia los archivos sin seguimiento que necesites",
          text: "Un worktree nuevo solo tiene los archivos con seguimiento en git. Enumera archivos como `.env` en un archivo `.worktreeinclude` (con sintaxis de gitignore) y Claude Code los copiará.",
          code: ".env\n.env.local",
        },
        {
          title: "Fusiona y limpia",
          text: "Cuando termina una sesión, un worktree sin cambios se elimina junto con su rama; uno con cambios te pregunta si quieres conservarlo. Fusiona las ramas como harías con cualquier otra. Las ejecuciones headless con `-p` no preguntan, así que elimínalas con `git worktree remove`.",
        },
        {
          title: "O usa la app de escritorio",
          text: "Pulsa Cmd+N (Ctrl+N en Windows) para abrir una sesión nueva y activa Worktree antes de iniciarla; viene desactivado por defecto. Las sesiones pueden colocarse una al lado de otra en vista dividida.",
        },
      ],
      source: { label: "Fuente: documentación de worktrees de Anthropic", href: "https://code.claude.com/docs/en/worktrees" },
    },
    {
      kind: "text",
      title: "Sesiones en segundo plano con --bg y agent view",
      text: [
        "`claude --bg \"<prompt>\"` inicia una sesión en segundo plano y vuelve al momento, así que puedes iniciar varias seguidas. Cada una pasa a su propio worktree antes de editar nada. `claude agents` las lista; `claude logs <id>`, `claude attach <id>` y `claude stop <id>` gestionan una concreta.",
        "Siguen en marcha después de cerrar el terminal, pero no después de apagar el ordenador. La agent view es una vista previa de investigación (research preview). Para saber más sobre ejecuciones sin supervisión, consulta [cómo ejecutar agentes de Claude Code en segundo plano](/blog/claude-code-background-agents).",
      ],
    },
    {
      kind: "text",
      title: "Agent teams: agentes que hablan entre sí",
      text: [
        "Los agent teams son experimentales y vienen desactivados por defecto. Actívalos con `CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1` en tu shell o en el bloque `env` de settings.json, y luego pide a Claude que “cree tres compañeros” para una tarea. Los compañeros comparten una lista de tareas y se escriben entre sí; aparecen en el terminal, o en paneles divididos con tmux o iTerm2.",
      ],
      points: [
        "Solo en sesiones interactivas: `-p` y el Agent SDK no crean compañeros.",
        "Un equipo por sesión, sin equipos anidados, y `/resume` no restaura a los compañeros que se ejecutan dentro del proceso.",
        "Los compañeros comparten un mismo checkout, así que dale a cada uno un conjunto de archivos distinto.",
        "Cuestan mucho más: según la documentación de Anthropic, un equipo usa aproximadamente 7 veces los tokens de una sola sesión cuando los compañeros trabajan en plan mode.",
      ],
    },
    {
      kind: "text",
      title: "Evita que los agentes en paralelo se pisen el trabajo",
      points: [
        "Si dos agentes pueden tocar los mismos archivos, dale a cada uno su propio worktree. Una sesión en un worktree no puede editar el checkout principal, y sus subagentes tampoco.",
        "En un agent team, reparte el trabajo por archivos: dos compañeros que editan el mismo archivo se sobrescriben.",
        "Todos los subagentes y sesiones consumen de los mismos límites de uso, así que ejecutar varios multiplica el consumo. Usa `model: haiku` para los subagentes sencillos.",
        "Los agentes que ejecutan los mismos tests o el mismo servidor de desarrollo pueden chocar en los puertos; dale a cada uno su propio puerto.",
      ],
    },
    {
      kind: "steps",
      kicker: "Con Crewmark",
      title: "Convierte agentes en paralelo en un equipo con trabajos fijos",
      text: [
        "Los worktrees y los agent teams dividen una tarea que estás vigilando. Crewmark ejecuta varias sesiones de Claude Code o Codex como empleados con sus propios roles, objetivos y horarios, y les da trabajo en un único tablero.",
      ],
      steps: [
        {
          title: "Un empleado por rol",
          text: "Un especialista SEO, un ingeniero de software y un diseñador de UI viven cada uno en su propia conversación, con sus propias instrucciones y su objetivo.",
        },
        {
          title: "Un tablero para todos",
          text: "Asigna las tareas al empleado que encaje. Cada uno se despierta con su latido (heartbeat), toma su siguiente tarea y comenta sobre la marcha, así que ves quién está haciendo qué.",
        },
        {
          title: "Te preguntan a ti, no entre ellos",
          text: "Cuando un empleado necesita una revisión o un permiso, te escribe y pasa a otra cosa. Lee [qué es un empleado de IA](/ai-employees).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Ejecuta sesiones de Claude Code en paralelo en git worktrees" },
  mid: {
    title: "¿Ejecutas varios agentes cada día?",
    text: "Crewmark le da a cada sesión de Claude Code un rol, un objetivo y un horario, y reúne todo su trabajo en un único tablero.",
    button: "Empezar",
  },
  faq: {
    title: "Preguntas frecuentes sobre varios agentes de Claude Code",
    items: [
      {
        q: "¿Puedo ejecutar varios agentes de Claude Code al mismo tiempo?",
        a: "Sí. Claude puede ejecutar subagentes en paralelo dentro de una sesión, puedes ejecutar varias sesiones en git worktrees separados con `claude --worktree`, iniciar sesiones en segundo plano con `claude --bg` o probar los agent teams experimentales.",
      },
      {
        q: "¿Qué diferencia hay entre los subagentes y los agent teams?",
        a: "Los subagentes hacen una tarea y devuelven un resumen a la sesión que los lanzó. Los agent teams son instancias separadas de Claude Code que comparten una lista de tareas y se escriben directamente entre sí; son experimentales y gastan más tokens.",
      },
      {
        q: "¿Cuántos subagentes pueden ejecutarse a la vez?",
        a: "Hasta 20 a la vez por defecto. `CLAUDE_CODE_MAX_CONCURRENT_SUBAGENTS` cambia el límite. Los subagentes también pueden lanzar los suyos, hasta tres niveles de profundidad por defecto.",
      },
      {
        q: "¿Cómo evito que los agentes en paralelo editen los mismos archivos?",
        a: "Pon cada uno en su propio git worktree: `claude --worktree <name>` para las sesiones, `isolation: worktree` para los subagentes. Las sesiones en segundo plano iniciadas con `--bg` reciben uno automáticamente. Los agent teams comparten un checkout, así que asigna archivos a cada compañero.",
      },
      {
        q: "¿Ejecutar varios agentes cuesta más?",
        a: "Sí. Cada subagente y cada sesión envía sus propias solicitudes, que cuentan para los mismos límites de uso, así que ejecutar varios a la vez multiplica el consumo.",
      },
      {
        q: "¿Dónde se guardan los worktrees de Claude Code?",
        a: "En `.claude/worktrees/<name>/`, en la raíz del repositorio, en una rama llamada `worktree-<name>`. Añade esa carpeta a `.gitignore`.",
      },
    ],
  },
  cta: {
    title: "Dirige un equipo de agentes de Claude Code con trabajos fijos.",
    text: "Crewmark convierte las sesiones de Claude Code y Codex en empleados de IA con roles, objetivos y horarios, en un único tablero.",
    button: "Empezar",
  },
  checked: "Comprobado con la documentación de Claude Code de Anthropic el 2 de noviembre de 2026.",
  disclaimer:
    "Crewmark es un producto independiente, sin relación con Anthropic y sin su respaldo. Claude y Claude Code son marcas de Anthropic.",
};
