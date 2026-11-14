import type { GuideCopy } from "@/components/landing/guide-article";

// Korean translation of /blog/claude-code-mcp; the English master is src/content/blog/claude-code-mcp.ts.

const docs = "https://code.claude.com/docs/en/mcp";

const add = `# Remote HTTP server (recommended for cloud services)
claude mcp add --transport http notion https://mcp.notion.com/mcp

# With a bearer token
claude mcp add --transport http secure-api https://api.example.com/mcp \\
  --header "Authorization: Bearer your-token"

# Local stdio server: everything after -- is the server's own command
claude mcp add --env AIRTABLE_API_KEY=YOUR_KEY --transport stdio airtable \\
  -- npx -y airtable-mcp-server`;

const manage = `claude mcp list            # every configured server
claude mcp get notion      # one server's details
claude mcp remove notion   # remove it (run claude mcp logout notion first to revoke tokens)
claude mcp add-from-claude-desktop   # import from Claude Desktop (macOS, WSL)`;

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
    title: "Claude Code MCP: 서버 추가와 .mcp.json | Crewmark AI",
    description:
      "Claude Code에서 MCP 서버를 설정하는 방법: claude mcp add로 HTTP와 stdio 서버 추가하기, local·project·user 스코프, 설정 파일 위치, 환경 변수를 쓰는 .mcp.json, OAuth와 문제 해결까지.",
  },
  breadcrumb: "Claude Code MCP 가이드",
  parent: { name: "블로그", href: "/blog" },
  article: { published: "2026-11-06" },
  hero: {
    kicker: "블로그 · Claude Code",
    title: "Claude Code MCP: 서버 추가 방법과 설정이 저장되는 곳",
    lead: "MCP(Model Context Protocol) 서버는 Claude Code를 Notion, GitHub, Sentry, 데이터베이스, 직접 만든 API 같은 외부 도구와 데이터에 연결해요. `claude mcp add`로 추가하고, 서버마다 나만 쓸지 팀과 공유할지 정하면 Claude가 그 도구를 호출할 수 있어요. 이 가이드에서는 HTTP와 stdio 서버 추가, 세 가지 스코프(scope)와 그 뒤의 설정 파일, 환경 변수를 쓰는 `.mcp.json`, OAuth 로그인, 서버가 연결되지 않을 때 확인할 것을 다뤄요.",
    cta: "시작하기",
    secondary: "설정 방법으로 바로 가기",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "steps",
      id: "how-to",
      title: "Claude Code에 MCP 서버를 추가하는 방법",
      steps: [
        {
          title: "트랜스포트 고르기",
          text: "클라우드에서 호스팅되는 원격 서버에는 HTTP를 쓰세요. 권장 트랜스포트이고, 서버가 지원 중단된 SSE 트랜스포트만 제공하면 Claude Code가 SSE로 대체해요. 로컬 프로세스로 실행되는 서버에는 stdio를 쓰세요. stdio에서는 `--` 뒤의 내용이 모두 그대로 서버에 전달돼요.",
          code: add,
        },
        {
          title: "스코프 고르기",
          text: "`--scope`를 붙이지 않으면 서버는 local 스코프예요. 나만, 이 프로젝트에서만 쓴다는 뜻이에요. `--scope project`를 붙이면 팀용으로 `.mcp.json`에 기록되고, `--scope user`를 붙이면 내 모든 프로젝트에서 쓸 수 있어요. 아래 표를 참고하세요.",
        },
        {
          title: "필요하면 로그인하기",
          text: "원격 서버는 OAuth를 쓰는 경우가 많아요. Claude Code 안에서 `/mcp`를 실행해 인증할 서버를 고르거나, 셸에서 `claude mcp login <name>`을 실행하세요. 헤드리스 `-p` 실행에서는 로그인 흐름을 열 수 없으니 먼저 대화형으로 로그인해 두세요.",
        },
        {
          title: "연결됐는지 확인하기",
          text: "`/mcp`로 서버별 상태와 도구를 확인하고, 셸에서는 `claude mcp list`를 실행하세요. 그런 다음 Claude에게 도구 이름을 말해 사용해 달라고 하세요.",
        },
        {
          title: "서버 관리하기",
          text: "명령줄에서 서버를 나열하고, 자세히 보고, 제거하거나 가져올 수 있어요. 자주 안 쓰는 서버는 제거하는 대신 `/mcp`에서 비활성화하세요.",
          code: manage,
        },
      ],
      source: { label: "출처: Claude Code 문서, Connect Claude Code to tools via MCP", href: docs },
    },
    {
      kind: "table",
      id: "scopes",
      title: "MCP 스코프와 설정 파일 위치",
      text: [
        "Claude Code는 MCP 설정을 여기에 저장해요. MCP의 local 스코프는 `.claude/settings.local.json`이 아니라 `~/.claude.json`에 저장된다는 점에 주의하세요.",
      ],
      headers: ["스코프", "로드되는 곳", "공유", "저장 위치"],
      rows: [
        ["local(기본값)", "이 프로젝트만", "아니요", "`~/.claude.json`의 프로젝트 경로 아래"],
        ["project", "이 프로젝트만", "예, 커밋해요", "프로젝트 루트의 `.mcp.json`"],
        ["user", "내 모든 프로젝트", "아니요", "`~/.claude.json`의 최상위"],
        ["플러그인(plugin)", "플러그인이 활성화된 곳", "플러그인과 함께", "플러그인 자체 설정"],
        ["claude.ai 커넥터(connectors)", "해당 claude.ai 계정으로 로그인한 세션", "계정별", "claude.ai 설정"],
      ],
    },
    {
      kind: "steps",
      id: "mcp-json",
      title: ".mcp.json으로 서버 공유하기",
      text: [
        "`.mcp.json`을 쓰면 팀 전체가 같은 서버를 쓸 수 있어요. 비밀 값은 환경 변수로 파일 밖에 두세요. `${VAR}`는 변수 값으로 확장되고, `${VAR:-default}`는 변수가 설정되지 않았을 때 기본값을 써요. 확장은 `command`, `args`, `env`, `url`, `headers`에서 동작해요.",
      ],
      steps: [
        {
          title: "비밀 값 대신 변수를 참조하기",
          text: "Claude Code는 `.mcp.json`의 프로젝트 서버를 처음 쓸 때 사람마다 승인을 받아요. `claude mcp reset-project-choices`로 그 선택을 초기화할 수 있어요. `url`이 있는 JSON 항목에는 `http` 같은 `type`도 있어야 해요.",
          code: project,
        },
      ],
    },
    {
      kind: "text",
      title: "우선순위, 커넥터, 그 밖의 세부 사항",
      points: [
        "같은 서버가 두 번 정의되면 Claude Code는 한 번만 연결하고, local, project, user, 플러그인, claude.ai 커넥터 순서로 처음 찾은 것을 써요. 항목은 병합되지 않고, 조직의 관리형 서버가 이 모두보다 우선해요.",
        "claude.ai 계정으로 Claude Code에 로그인하면 claude.ai에서 추가한 커넥터가 자동으로 나타나요.",
        "Claude Code 자체도 MCP 서버가 될 수 있어요. `claude mcp serve`로 Claude Desktop 같은 다른 클라이언트에 도구를 제공해요.",
        "서버는 슬래시 명령으로 나타나는 프롬프트를 제공할 수도 있어요. [Claude Code 슬래시 명령](/blog/claude-code-slash-commands)을 참고하세요.",
        "원격 서버를 제거하면 Claude Code가 저장한 토큰은 삭제되지만 폐기되지는 않아요. 폐기하려면 먼저 `claude mcp logout <name>`을 실행하세요.",
      ],
    },
    {
      kind: "text",
      title: "MCP와 토큰 사용량",
      text: [
        "도구 정의는 기본적으로 지연 로드돼요. Claude가 도구를 쓰기 전까지 컨텍스트에는 도구 이름과 서버 안내만 들어가므로, 서버를 많이 등록해도 예전보다 비용이 적어요. 그래도 서버마다 조금씩은 더해지니 쓰지 않는 서버는 `/mcp`에서 비활성화하고, `gh`, `aws`, `gcloud`처럼 CLI가 있으면 CLI를 우선 쓰세요. CLI는 도구 목록을 전혀 늘리지 않아요. 자세한 내용은 [Claude Code 토큰 사용량 줄이는 방법](/blog/reduce-claude-code-token-usage)을 참고하세요.",
      ],
    },
    {
      kind: "text",
      title: "문제 해결: 서버가 연결되지 않을 때",
      points: [
        "인증이 필요하다고 표시될 때: `/mcp`를 열고 Re-authenticate를 고르거나 `claude mcp login <name>`을 실행하세요.",
        "\"has a url but no type\"이 나올 때: JSON 항목에 `\"type\": \"http\"`(또는 `sse`, `ws`)를 추가하세요. type이 없으면 Claude Code는 stdio로 취급해요.",
        "stdio 서버의 플래그가 사라졌을 때: 서버 명령 앞에 `--`를 넣어 Claude Code가 자기 플래그로 해석하지 않게 하세요.",
        "`claude mcp list`에 변수 누락 경고가 뜰 때: 그 변수를 설정하거나 `:-default`로 기본값을 주세요.",
        "프로젝트 서버가 `claude -p`에서 로드되지 않을 때: 헤드리스에서는 승인 프롬프트가 없으니 설정을 확인하거나, `--mcp-config`와 `--strict-mcp-config`로 서버를 명시적으로 넘기세요.",
        "`claude mcp`로 추가하는 서버 이름에는 영문자, 숫자, 하이픈, 밑줄만 쓸 수 있어요.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Crewmark로",
      title: "AI 직원에게도 내가 쓰는 도구를 그대로",
      text: [
        "Claude Code가 이슈 트래커, 데이터베이스, 분석 도구에 닿는 통로가 MCP예요. Crewmark는 Claude Code, Codex, DeepSeek Harness, OpenCode 세션을 직무, 목표, 근무 시간을 가진 AI 직원으로 바꾸고, 하트비트로 깨워서 보드의 다음 이슈를 가져가게 해요. 프로젝트의 MCP 서버도 쓸 수 있는 상태로요.",
      ],
      steps: [
        {
          title: ".mcp.json 커밋하기",
          text: "project 스코프 서버는 내 세션과 똑같이 직원의 세션에서도 로드돼요. OAuth가 필요한 서버는 한 번만 대화형으로 로그인해 두세요.",
        },
        {
          title: "하트비트로 일을 시작하게 하기",
          text: "근무 시간 동안 직원은 15분, 30분, 60분마다 같은 대화에서 깨어나요. [Claude Code를 능동적으로 만드는 방법](/proactive-claude-code)을 참고하세요.",
        },
        {
          title: "직무마다 필요한 것만 주기",
          text: "SEO 직원에게는 Search Console을, 프로그래머에게는 GitHub와 Sentry를 주세요. [AI 직원이란](/ai-employees)을 읽어 보세요.",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Claude Code에 MCP 서버 추가하기" },
  mid: {
    title: "도구는 연결했어요. 내가 없는 동안엔 누가 쓰나요?",
    text: "Crewmark는 직무, 목표, 이슈 보드를 주고 하트비트로 Claude Code를 깨워요. 이미 결제한 요금제 그대로 쓸 수 있어요.",
    button: "시작하기",
  },
  faq: {
    title: "Claude Code MCP 자주 묻는 질문",
    items: [
      {
        q: "Claude Code에 MCP 서버를 어떻게 추가하나요?",
        a: "원격 서버는 `claude mcp add --transport http <name> <url>`, 로컬 서버는 `claude mcp add --transport stdio <name> -- <command>`를 실행하세요. 그런 다음 Claude Code에서 `/mcp`를 실행해 필요하면 로그인하고 연결을 확인하세요.",
      },
      {
        q: "Claude Code MCP 설정 파일은 어디에 있나요?",
        a: "local과 user 스코프 서버는 `~/.claude.json`에 저장돼요(local은 프로젝트 경로 아래). project 스코프 서버는 프로젝트 루트의 `.mcp.json`에 있고, 커밋할 수 있어요.",
      },
      {
        q: "local, project, user 스코프는 어떻게 다른가요?",
        a: "local은 한 프로젝트에서 나만(기본값), project는 `.mcp.json`으로 팀과 공유, user는 모든 프로젝트에서 나만 쓰는 거예요.",
      },
      {
        q: "API 키를 .mcp.json에 넣지 않으려면 어떻게 하나요?",
        a: "`command`, `args`, `env`, `url`, `headers`에서 `${VAR}`나 `${VAR:-default}`로 환경 변수를 참조하고, 각 컴퓨터에서 변수를 설정하세요.",
      },
      {
        q: "Claude Desktop의 MCP 서버를 Claude Code에서 쓰려면?",
        a: "`claude mcp add-from-claude-desktop`을 실행하고 가져올 서버를 고르세요. macOS와 WSL에서 동작해요. `--scope user`를 붙이면 모든 프로젝트에서 쓸 수 있어요.",
      },
      {
        q: "MCP 서버는 토큰을 많이 쓰나요?",
        a: "예전보다는 적어요. 도구 정의는 Claude가 도구를 쓸 때만 로드돼요. 그래도 서버마다 이름과 안내가 더해지니, 안 쓰는 서버는 비활성화하고 CLI가 있으면 CLI를 우선 쓰세요.",
      },
      {
        q: "Claude Code를 MCP 서버로 쓸 수 있나요?",
        a: "네. `claude mcp serve`로 stdio MCP 서버로 실행하면 Claude Desktop 같은 다른 클라이언트가 연결할 수 있어요.",
      },
    ],
  },
  cta: {
    title: "도구는 연결됐으니, 이제 쓸 직원도.",
    text: "Crewmark는 Claude Code, Codex, DeepSeek Harness 세션을 직무, 목표, 근무 시간, 하트비트를 갖춘 AI 직원으로 바꿔 줘요.",
    button: "시작하기",
  },
  checked: "2026년 11월 6일에 Claude Code 문서(MCP, 비용)와 대조해 확인했습니다.",
  disclaimer:
    "Crewmark는 독립 제품으로, Anthropic과 제휴하거나 그 보증을 받지 않았습니다. Claude와 Claude Code는 Anthropic의 상표입니다.",
};
