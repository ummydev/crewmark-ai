import type { GuideCopy } from "@/components/landing/guide-article";

// Spanish translation of /blog/claude-code-mcp; the English master is src/content/blog/claude-code-mcp.ts.

const docs = "https://code.claude.com/docs/en/mcp";

const add = `# Servidor HTTP remoto (recomendado para servicios en la nube)
claude mcp add --transport http notion https://mcp.notion.com/mcp

# Con un bearer token
claude mcp add --transport http secure-api https://api.example.com/mcp \\
  --header "Authorization: Bearer your-token"

# Servidor stdio local: todo lo que va después de -- es el comando propio del servidor
claude mcp add --env AIRTABLE_API_KEY=YOUR_KEY --transport stdio airtable \\
  -- npx -y airtable-mcp-server`;

const manage = `claude mcp list            # todos los servidores configurados
claude mcp get notion      # los detalles de un servidor
claude mcp remove notion   # eliminarlo (ejecuta antes claude mcp logout notion para revocar los tokens)
claude mcp add-from-claude-desktop   # importar desde Claude Desktop (macOS, WSL)`;

const project = `{
  "mcpServers": {
    "api-server": {
      "type": "http",
      "url": "\${API_BASE_URL:-https://api.example.com}/mcp",
      "headers": {
        "Authorization": "Bearer \${API_KEY}"
      }
    }
  }
}`;

export const copy: GuideCopy = {
  meta: {
    title: "Claude Code MCP: añadir servidores y .mcp.json | Crewmark AI",
    description:
      "Cómo configurar servidores MCP en Claude Code: claude mcp add para servidores HTTP y stdio, los ámbitos local, project y user, dónde está el archivo de configuración, .mcp.json con variables de entorno, OAuth y solución de problemas.",
  },
  breadcrumb: "Guía de MCP en Claude Code",
  parent: { name: "Blog", href: "/blog" },
  article: { published: "2026-11-06" },
  hero: {
    kicker: "Blog · Claude Code",
    title: "MCP en Claude Code: cómo añadir servidores y dónde está la configuración",
    lead: "Los servidores MCP (Model Context Protocol) conectan Claude Code con herramientas y datos externos, como Notion, GitHub, Sentry, una base de datos o tu propia API. Los añades con `claude mcp add`, decides si cada uno es solo para ti o se comparte con el equipo, y a partir de ahí Claude puede llamar a sus herramientas. Esta guía cubre cómo añadir servidores HTTP y stdio, los tres ámbitos y los archivos de configuración que hay detrás, `.mcp.json` con variables de entorno, el inicio de sesión con OAuth y qué revisar cuando un servidor no conecta.",
    cta: "Empezar",
    secondary: "Ir a la configuración",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "steps",
      id: "how-to",
      title: "Cómo añadir un servidor MCP a Claude Code",
      steps: [
        {
          title: "Elige el transporte",
          text: "Usa HTTP para servidores remotos alojados en la nube; es el transporte recomendado, y Claude Code recurre al transporte SSE, ya obsoleto, cuando un servidor solo ofrece ese. Usa stdio para servidores que se ejecutan como un proceso local. En stdio, todo lo que va después de `--` se pasa tal cual al servidor.",
          code: add,
        },
        {
          title: "Elige un ámbito",
          text: "Sin `--scope`, un servidor es local: solo para ti y solo en este proyecto. Añade `--scope project` para escribirlo en `.mcp.json` y compartirlo con el equipo, o `--scope user` para todos tus proyectos. Consulta la tabla de abajo.",
        },
        {
          title: "Inicia sesión si el servidor lo pide",
          text: "Muchos servidores remotos usan OAuth. Ejecuta `/mcp` dentro de Claude Code y elige el servidor para autenticarte, o `claude mcp login <name>` en tu terminal. Las ejecuciones sin interfaz con `-p` no pueden abrir el flujo de inicio de sesión, así que inicia sesión primero de forma interactiva.",
        },
        {
          title: "Comprueba que se ha conectado",
          text: "Ejecuta `/mcp` para ver el estado y las herramientas de cada servidor, y `claude mcp list` en tu terminal. Después pídele a Claude que use la herramienta por su nombre.",
        },
        {
          title: "Gestiona tus servidores",
          text: "Lista, inspecciona, elimina o importa servidores desde la línea de comandos. Si usas uno muy poco, desactívalo desde `/mcp` en lugar de eliminarlo.",
          code: manage,
        },
      ],
      source: { label: "Fuente: documentación de Claude Code, Connect Claude Code to tools via MCP", href: docs },
    },
    {
      kind: "table",
      id: "scopes",
      title: "Ámbitos de MCP y ubicación de los archivos de configuración",
      text: [
        "Aquí es donde Claude Code guarda la configuración de MCP. Ten en cuenta que el ámbito \"local\" de MCP vive en `~/.claude.json`, no en `.claude/settings.local.json`.",
      ],
      headers: ["Ámbito", "Se carga en", "Compartido", "Se guarda en"],
      rows: [
        ["Local (por defecto)", "Solo este proyecto", "No", "`~/.claude.json`, bajo la ruta del proyecto"],
        ["Project", "Solo este proyecto", "Sí, haz commit", "`.mcp.json` en la raíz del proyecto"],
        ["User", "Todos tus proyectos", "No", "`~/.claude.json`, en el nivel superior"],
        ["Plugin", "Donde esté activado el plugin", "Con el plugin", "La configuración propia del plugin"],
        ["Conectores de claude.ai", "Sesiones iniciadas con esa cuenta de claude.ai", "Por cuenta", "Tu configuración de claude.ai"],
      ],
    },
    {
      kind: "steps",
      id: "mcp-json",
      title: "Comparte servidores con .mcp.json",
      text: [
        "`.mcp.json` permite que todo el equipo use los mismos servidores. Deja los secretos fuera con variables de entorno: `${VAR}` se sustituye por el valor de la variable, y `${VAR:-default}` usa un valor por defecto cuando no está definida. La expansión funciona en `command`, `args`, `env`, `url` y `headers`.",
      ],
      steps: [
        {
          title: "Usa variables en lugar de secretos",
          text: "Claude Code pide a cada persona que apruebe los servidores de proyecto de `.mcp.json` la primera vez; `claude mcp reset-project-choices` restablece esas respuestas. Una entrada JSON con `url` también necesita un `type`, como `http`.",
          code: project,
        },
      ],
    },
    {
      kind: "text",
      title: "Precedencia, conectores y otros detalles",
      points: [
        "Cuando el mismo servidor está definido dos veces, Claude Code se conecta una sola vez, usando el primero de: local, project, user, plugin, conector de claude.ai. Las entradas no se combinan; los servidores gestionados de una organización tienen prioridad sobre todos ellos.",
        "Si inicias sesión en Claude Code con una cuenta de claude.ai, los conectores que añadiste en claude.ai aparecen automáticamente.",
        "Claude Code también puede ser un servidor MCP: `claude mcp serve` expone sus herramientas a otro cliente, como Claude Desktop.",
        "Los servidores también pueden ofrecer prompts que aparecen como comandos de barra; consulta [los comandos de barra de Claude Code](/blog/claude-code-slash-commands).",
        "Eliminar un servidor remoto borra los tokens que Claude Code guardó, pero no los revoca; para eso, ejecuta antes `claude mcp logout <name>`.",
      ],
    },
    {
      kind: "text",
      title: "MCP y consumo de tokens",
      text: [
        "Las definiciones de herramientas se cargan de forma diferida por defecto: solo los nombres de las herramientas y las instrucciones del servidor ocupan contexto hasta que Claude usa una herramienta, así que una lista larga de servidores cuesta menos que antes. Aun así, cada servidor añade algo, de modo que desactiva en `/mcp` los que no uses y prefiere una CLI como `gh`, `aws` o `gcloud` cuando exista, ya que no añade ninguna lista de herramientas. Más en [cómo reducir el consumo de tokens de Claude Code](/blog/reduce-claude-code-token-usage).",
      ],
    },
    {
      kind: "text",
      title: "Solución de problemas: cuando un servidor no conecta",
      points: [
        "Aparece como pendiente de autenticación: abre `/mcp` y elige Re-authenticate, o ejecuta `claude mcp login <name>`.",
        "\"has a url but no type\": añade `\"type\": \"http\"` (o `sse` o `ws`) a la entrada JSON; sin tipo, Claude Code la trata como stdio.",
        "Las opciones de un servidor stdio desaparecieron: pon `--` antes del comando del servidor para que Claude Code no las interprete como suyas.",
        "Aviso de variable ausente en `claude mcp list`: define la variable o dale un valor `:-default`.",
        "Un servidor de proyecto nunca se carga con `claude -p`: sin interfaz no hay aviso de aprobación, así que revisa tu configuración o pasa los servidores explícitamente con `--mcp-config` y `--strict-mcp-config`.",
        "Los nombres de servidor añadidos con `claude mcp` solo pueden contener letras, números, guiones y guiones bajos.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Con Crewmark",
      title: "Dale a tus empleados de IA las mismas herramientas que usas tú",
      text: [
        "MCP es la forma en que Claude Code llega a tu gestor de issues, tu base de datos o tu analítica. Crewmark convierte una sesión de Claude Code, Codex, DeepSeek Harness u OpenCode en un empleado de IA con un rol, un objetivo y un horario, y la despierta con un heartbeat para que tome la siguiente issue de un tablero, con los servidores MCP de tu proyecto disponibles.",
      ],
      steps: [
        {
          title: "Haz commit de .mcp.json",
          text: "Los servidores con ámbito de proyecto se cargan en la sesión del empleado igual que en la tuya; para los servidores que necesitan OAuth, inicia sesión una vez de forma interactiva.",
        },
        {
          title: "Deja que el heartbeat inicie el trabajo",
          text: "Durante su horario, el empleado se despierta cada 15, 30 o 60 minutos en la misma conversación; consulta [cómo hacer que Claude Code sea proactivo](/proactive-claude-code).",
        },
        {
          title: "Dale a cada rol solo lo que necesita",
          text: "Un empleado de SEO recibe Search Console; un programador, GitHub y Sentry. Lee [qué es un empleado de IA](/ai-employees).",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Añadir un servidor MCP a Claude Code" },
  mid: {
    title: "Ya conectaste las herramientas. ¿Quién las usa mientras no estás?",
    text: "Crewmark despierta a Claude Code con un heartbeat, un rol, un objetivo y un tablero de issues, con el plan que ya pagas.",
    button: "Empezar",
  },
  faq: {
    title: "Preguntas frecuentes sobre MCP en Claude Code",
    items: [
      {
        q: "¿Cómo añado un servidor MCP a Claude Code?",
        a: "Ejecuta `claude mcp add --transport http <name> <url>` para un servidor remoto, o `claude mcp add --transport stdio <name> -- <command>` para uno local. Después ejecuta `/mcp` en Claude Code para iniciar sesión si hace falta y comprobar que se ha conectado.",
      },
      {
        q: "¿Dónde está el archivo de configuración de MCP de Claude Code?",
        a: "Los servidores con ámbito local y user se guardan en `~/.claude.json` (los locales, bajo la ruta del proyecto). Los servidores con ámbito de proyecto están en `.mcp.json`, en la raíz del proyecto, y puedes hacer commit de ese archivo.",
      },
      {
        q: "¿Qué diferencia hay entre los ámbitos local, project y user?",
        a: "Local es solo para ti en un proyecto (el valor por defecto), project se comparte con el equipo a través de `.mcp.json`, y user es solo para ti en todos tus proyectos.",
      },
      {
        q: "¿Cómo dejo las claves de API fuera de .mcp.json?",
        a: "Usa variables de entorno con `${VAR}` o `${VAR:-default}` en `command`, `args`, `env`, `url` o `headers`, y define las variables en cada máquina.",
      },
      {
        q: "¿Cómo uso en Claude Code mis servidores MCP de Claude Desktop?",
        a: "Ejecuta `claude mcp add-from-claude-desktop` y elige los servidores que quieres importar. Funciona en macOS y WSL; añade `--scope user` para tenerlos disponibles en todos tus proyectos.",
      },
      {
        q: "¿Los servidores MCP consumen muchos tokens?",
        a: "Menos que antes: las definiciones de herramientas solo se cargan cuando Claude usa una herramienta. Aun así, cada servidor añade nombres e instrucciones, así que desactiva los que no uses y prefiere las CLI cuando existan.",
      },
      {
        q: "¿Puede Claude Code funcionar como servidor MCP?",
        a: "Sí. `claude mcp serve` lo inicia como un servidor MCP stdio al que pueden conectarse otros clientes, como Claude Desktop.",
      },
    ],
  },
  cta: {
    title: "Herramientas conectadas, y un empleado que las use.",
    text: "Crewmark convierte las sesiones de Claude Code, Codex y DeepSeek Harness en empleados de IA con roles, objetivos, horarios y un heartbeat.",
    button: "Empezar",
  },
  checked: "Comprobado con la documentación de Claude Code (MCP y costes) el 6 de noviembre de 2026.",
  disclaimer:
    "Crewmark es un producto independiente, sin relación con Anthropic y sin su respaldo. Claude y Claude Code son marcas de Anthropic.",
};
