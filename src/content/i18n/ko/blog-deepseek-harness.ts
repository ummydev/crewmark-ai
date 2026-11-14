import type { GuideCopy } from "@/components/landing/guide-article";

// Korean translation of /blog/deepseek-harness; the English master is src/content/blog/deepseek-harness.ts.

const repo = "https://github.com/deepseek-ai/deepseek-harness";

const install = `# Node.js로 Web UI 실행
npx @deepseek-ai/dsh web
# 그다음 http://127.0.0.1:3080 열기

# 또는 소스에서 빌드
git clone https://github.com/deepseek-ai/deepseek-harness.git
cd deepseek-harness && pnpm install && pnpm run build && pnpm dsh web`;

const headless = `# UI 없이 작업 하나를 권한 모드와 함께 실행
dsh headless "Add tests for src/auth" --permission-mode workspace-write

# 이벤트를 JSON으로 스트리밍(스크립트용 등)
dsh headless "Summarize open TODOs" --json

# 프로필에 플러그인 추가
dsh plugin --profile default add <package>`;

export const copy: GuideCopy = {
  meta: {
    title: "DeepSeek Harness란? 설치, 가격, Claude Code 비교",
    description:
      "DeepSeek Harness(dsh) 총정리: DeepSeek의 오픈소스 에이전트 하네스, 데스크톱 앱과 CLI, 설치 방법, DeepSeek API 가격, 플러그인과 Super-Agent, 그리고 Claude Code, Codex, OpenCode와의 비교까지.",
  },
  breadcrumb: "DeepSeek Harness 가이드",
  parent: { name: "블로그", href: "/blog" },
  article: { published: "2026-11-06" },
  hero: {
    kicker: "블로그 · DeepSeek",
    title: "DeepSeek Harness란? 설치 방법과 다른 도구와의 비교",
    lead: "DeepSeek Harness(`dsh`)는 DeepSeek의 오픈소스 에이전트 하네스예요. 일상 업무, 코딩, 리서치, 백그라운드 작업을 처리하는 AI 에이전트를 돌리는 앱으로, 도구부터 인터페이스까지 거의 모든 것이 플러그인으로 만들어졌어요. MIT 라이선스이고 개발자 프리뷰 단계이며, GitHub에서 스타가 가장 많은 저장소 중 하나예요. 2026년 10월 31일 DeepSeek의 Super-agent 프로토타입이 공개된 뒤로 검색량이 계속 늘고 있어요. 이 가이드에서는 DeepSeek Harness가 무엇인지, 데스크톱 앱과 CLI, 설치 방법, 비용, 주요 기능, 그리고 Claude Code, Codex, OpenCode와의 비교를 다뤄요.",
    cta: "시작하기",
    secondary: "설치 방법으로 이동",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "table",
      id: "at-a-glance",
      title: "DeepSeek Harness 한눈에 보기",
      headers: ["", "DeepSeek Harness"],
      rows: [
        ["만든 곳", "DeepSeek AI"],
        ["정체", "\"모든 것이 플러그인\"인 구조의 오픈소스 에이전트 하네스로, Cordis 프레임워크 위에 만들어졌어요"],
        ["라이선스", "MIT. 2026년 11월 6일 기준 GitHub 스타 약 275,000개"],
        ["상태", "개발자 프리뷰. DeepSeek은 호환성이 깨지는 변경이 있을 수 있다고 경고하며, 릴리스는 모두 프리릴리스로 표시돼요(최신 v0.2.2-rc.1, 2026년 11월 4일)"],
        ["사용 방식", "데스크톱 앱(macOS Apple 실리콘, Windows x64), Web UI(`dsh web`), 헤드리스 CLI, ACP 및 SDK 모드"],
        ["기본 모델", "`deepseek-flash`(DeepSeek-V4.1-Flash)와 `deepseek-v4-pro`, 둘 다 컨텍스트 1,048,576 토큰"],
        ["다른 제공자", "Anthropic, OpenAI, Kimi, GLM, 또는 셀프 호스팅 서버를 포함한 모든 OpenAI·Anthropic 호환 엔드포인트"],
        ["가격", "소프트웨어는 무료이고, DeepSeek API(또는 다른 제공자) 사용료만 내요"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "DeepSeek Harness 설치하고 사용하는 법",
      steps: [
        {
          title: "데스크톱과 웹 중 고르기",
          text: "deepseek.com/en/harness에서 macOS(Apple 실리콘)나 Windows(64비트)용 데스크톱 앱을 내려받으세요. macOS에서는 `dsh` 명령어도 함께 설치할 수 있어요. Node.js가 있는 컴퓨터라면 npx로 Web UI를 실행하거나 소스에서 빌드할 수 있어요.",
          code: install,
        },
        {
          title: "로그인하거나 API 키 추가하기",
          text: "처음 실행할 때 브라우저에서 DeepSeek 계정으로 로그인하거나, Settings → Models(설정 → 모델)에 platform.deepseek.com에서 받은 API 키를 붙여 넣으세요. 키는 `~/.dsh/.credentials.yaml`(`$DSH_HOME`)에 저장돼요.",
        },
        {
          title: "프로젝트 지침 주기",
          text: "DeepSeek Harness는 프로젝트의 `AGENTS.md` 또는 `CLAUDE.md`(그리고 `.local.md` 변형)와 전역 `~/.dsh/AGENTS.md`를 읽어요. Claude Code나 Codex용으로 써 둔 지침을 그대로 쓸 수 있어요. [CLAUDE.md 가이드](/blog/claude-md)와 [Codex AGENTS.md 가이드](/blog/codex-agents-md)를 참고하세요.",
        },
        {
          title: "어디까지 맡길지 정하기",
          text: "샌드박스 모드(`read-only`, `workspace-write`, `danger-full-access`)와 승인 정책(`ask` 또는 `never`)을 고르세요. DeepSeek의 안전 안내에 따르면 이 하네스는 실험 단계이고 보안 감사를 받지 않았으며, 샌드박스가 격리를 보장하지도 않아요. 중요한 코드에서는 read-only로 시작하세요.",
        },
        {
          title: "헤드리스로 작업 실행하고 플러그인 추가하기",
          text: "스크립트에서 일회성 작업을 돌릴 때는 `dsh headless`, 세션을 이어 갈 때는 `--resume`이나 `--session-id`, 예약 작업, 서브에이전트, 에이전트 팀 같은 플러그인을 추가할 때는 `dsh plugin`을 쓰세요.",
          code: headless,
        },
      ],
      source: { label: "출처: DeepSeek Harness 저장소와 문서", href: repo },
    },
    {
      kind: "table",
      id: "pricing",
      title: "DeepSeek Harness 가격: 실행하는 데 드는 비용",
      text: [
        "하네스 자체는 무료 오픈소스예요. 사용료는 DeepSeek API가 아래 요금으로 청구하며, 단위는 100만 토큰당 미국 달러예요(api-docs.deepseek.com, 2026년 11월 6일). 비피크 시간대 요금은 피크 요금의 절반이고, 피크 시간대는 평일 UTC 01:00–04:00과 06:00–10:00이에요(중국 공휴일 제외). DeepSeek은 무료 할당량을 안내하지 않으므로, \"무료로 쓴다\"는 건 사실상 무료 소프트웨어에 갖고 있는 API 크레딧을 더한 것을 뜻해요.",
      ],
      headers: ["100만 토큰당", "deepseek-flash, 피크", "deepseek-flash, 비피크", "deepseek-v4-pro, 피크", "deepseek-v4-pro, 비피크"],
      rows: [
        ["입력, 캐시 적중", "$0.006", "$0.003", "$0.044", "$0.022"],
        ["입력, 캐시 미스", "$0.30", "$0.15", "$1.32", "$0.66"],
        ["출력", "$1.20", "$0.60", "$3.96", "$1.98"],
      ],
    },
    {
      kind: "text",
      title: "주요 기능",
      points: [
        "모든 것이 플러그인: 도구, 모델, 인터페이스, 동작이 모두 플러그인이에요. 프로필별로 설치할 수 있고, 채팅으로 부탁해 새로 만들 수도 있어요(\"Creator mode\"). 커뮤니티 플러그인은 GitHub 토픽 `dsh-plugin`을 써요.",
        "DeepSeek이 소개하는 공식·실험 플러그인으로는 에이전트 팀, 자동 승인 검토, 예약 작업, 음성 입력, 터미널, 에이전트 루프, 서브에이전트가 있어요.",
        "Skills(`SKILL.md` 폴더), MCP 서버, hooks, 그리고 기존 Claude Code hooks를 실행하는 실험적 브리지도 있어요.",
        "서브에이전트는 같은 프로세스 안에서 돌릴 수도 있고, ACP, Codex, Claude Code 또는 다른 Harness를 백엔드로 쓸 수도 있어요.",
        "이어서 쓸 수 있는 세션, 컨텍스트 압축(compaction), JSON 이벤트를 내보내는 헤드리스 모드, 그 위에 무언가를 만들 수 있는 SDK.",
        "Super-agent: 별도의 MIT 번들인 dsh-superagent를 쓰면 하네스가 GitHub 저장소에서 능동적으로 일해요. DeepSeek은 이를 연구용 프로토타입이라고 불러요. [DeepSeek Super-Agent 해설](/blog/deepseek-super-agent)을 참고하세요.",
        "함께 자주 언급되는 논문 \"A Programming Paradigm for Spatiotemporal Composability\"(arXiv, 2026년 8월)는 하네스 자체가 아니라 그 바탕이 되는 Cordis 프레임워크를 다뤄요.",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "DeepSeek Harness vs Claude Code vs Codex vs OpenCode",
      text: [
        "DeepSeek은 비교 자료를 내지 않았어요. 아래는 2026년 11월 6일 기준 각 도구의 공식 문서를 저희가 정리한 내용이에요. DeepSeek은 Claude Code, Codex, OpenCode 안에서 자사 모델을 쓰는 방법도 안내하고 있어서 섞어 쓸 수도 있어요.",
      ],
      headers: ["", "DeepSeek Harness", "Claude Code", "Codex", "OpenCode"],
      rows: [
        ["만든 곳", "DeepSeek", "Anthropic", "OpenAI", "Anomaly(오픈소스)"],
        ["라이선스", "MIT", "독점", "CLI는 Apache-2.0", "MIT"],
        ["결제 방식", "DeepSeek API 사용료(또는 다른 제공자)", "월 $20부터인 Claude 요금제, 또는 API", "ChatGPT 요금제(Free 이상), 또는 API", "내 API 키, 또는 Copilot이나 ChatGPT 로그인"],
        ["인터페이스", "데스크톱(macOS, Windows), Web UI, 헤드리스 CLI", "터미널, IDE, 데스크톱, 웹, 모바일", "CLI, IDE, 데스크톱, 웹, 모바일", "터미널, 데스크톱, IDE, 웹"],
        ["지침 파일", "AGENTS.md 또는 CLAUDE.md", "CLAUDE.md(대체 파일로 AGENTS.md)", "AGENTS.md", "AGENTS.md"],
        ["확장 방식", "모든 것이 플러그인, skills, MCP, hooks", "Skills, 플러그인, MCP, hooks", "Skills, 플러그인, MCP, hooks", "플러그인, MCP"],
        ["성숙도", "개발자 프리뷰, 호환성이 깨지는 변경 예상", "정식 출시", "정식 출시", "활발한 오픈소스"],
      ],
    },
    {
      kind: "text",
      title: "자주 검색하는 질문",
      points: [
        "Linux: 아직 Linux용 데스크톱 앱은 없어요. Linux에서는 `npx @deepseek-ai/dsh web`으로 Web UI를 실행하거나 소스에서 빌드하세요.",
        "VS Code: DeepSeek은 VS Code 확장을 제공하지 않아요. 에디터 옆에 데스크톱 앱이나 Web UI를 띄워 두거나, DeepSeek이 사용법을 안내하는 Claude Code나 Codex 같은 에디터용 에이전트에서 DeepSeek 모델을 쓰세요.",
        "Ollama와 로컬 모델: 문서화되어 있지 않아요. 하네스는 셀프 호스팅 서버용으로 OpenAI·Anthropic 호환 커스텀 엔드포인트를 받으며, 이것이 자체 모델을 쓰는 공식 방법이에요.",
        "TUI: 기본으로 제공되는 터미널 UI는 없어요. 커스텀 프로필이나 실험적 터미널 플러그인이 문서에 나온 선택지예요.",
        "논문: 위의 Cordis 논문을 참고하세요. DeepSeek은 하네스 자체를 인용할 때 \"DeepSeek Harness: Everything is a Plugin\"으로 표기해 달라고 요청해요.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Crewmark로",
      title: "DeepSeek Harness에게 작업이 아니라 직무를 맡기세요",
      text: [
        "Crewmark는 Claude Code, Codex, OpenCode와 함께 DeepSeek Harness도 지원해요. 세션을 직무, 목표, 근무 시간을 가진 AI 직원으로 바꾸고, 하트비트로 깨워 공유 보드에서 다음 이슈를 가져가게 해요.",
      ],
      steps: [
        {
          title: "에이전트로 DeepSeek Harness 고르기",
          text: "프로젝트에서 설정 명령어를 실행하세요. 직원은 내 컴퓨터의 DeepSeek Harness 세션에서 돌아가고, 비용은 내 DeepSeek API 계정으로 청구돼요.",
        },
        {
          title: "직무와 목표 주기",
          text: "소프트웨어 엔지니어, SEO 전문가, 그로스 마케터처럼 각자 움직여야 할 숫자가 있어요. [AI 직원이란](/ai-employees)을 읽어 보세요.",
        },
        {
          title: "하트비트로 일을 시작하게 하기",
          text: "근무 시간 중에 15, 30, 60분마다 깨어나 다음 이슈를 가져가고, 결정이 필요하면 메시지를 보내요. 여러 방식의 비교는 [슈퍼에이전트란](/blog/superagent)에서 확인하세요.",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "DeepSeek Harness 설치하고 사용하기" },
  mid: {
    title: "DeepSeek Harness를 쓰고 있나요? 보드에 올려 보세요.",
    text: "Crewmark는 직무, 목표, 이슈 보드를 주고 DeepSeek Harness, Claude Code, Codex를 하트비트로 깨워요.",
    button: "시작하기",
  },
  faq: {
    title: "DeepSeek Harness 자주 묻는 질문",
    items: [
      {
        q: "DeepSeek Harness란 무엇인가요?",
        a: "DeepSeek AI의 오픈소스 에이전트 하네스(`dsh`, MIT 라이선스)로, 일상 업무, 코딩, 리서치, 백그라운드 작업을 위해 플러그인 중심으로 만들어졌어요. 현재 개발자 프리뷰 단계예요.",
      },
      {
        q: "DeepSeek Harness는 무료인가요?",
        a: "소프트웨어는 무료 오픈소스예요. 실행하려면 모델 API(기본값은 DeepSeek)를 쓰고 토큰 단위로 요금이 나가요. DeepSeek은 무료 할당량을 안내하지 않아요.",
      },
      {
        q: "DeepSeek Harness는 어떻게 설치하나요?",
        a: "deepseek.com/en/harness에서 macOS(Apple 실리콘)나 Windows용 데스크톱 앱을 내려받거나, Node.js 환경에서 `npx @deepseek-ai/dsh web`을 실행한 뒤 http://127.0.0.1:3080을 여세요.",
      },
      {
        q: "DeepSeek Harness는 Linux에서 되나요?",
        a: "Linux용 데스크톱 앱은 없지만, Web UI와 CLI는 npx나 소스 빌드로 Linux에서 실행돼요.",
      },
      {
        q: "DeepSeek Harness와 Claude Code, 뭐가 더 나을까요?",
        a: "용도가 달라요. DeepSeek Harness는 오픈소스이고 DeepSeek 모델로 쓰면 토큰당 비용이 저렴하며 플러그인으로 확장할 수 있지만, 아직 개발자 프리뷰예요. Claude Code는 Claude 요금제에 포함된 성숙한 제품이에요. DeepSeek 모델을 Claude Code 안에서 돌릴 수도 있어요.",
      },
      {
        q: "DeepSeek Harness에서 Claude나 GPT 모델을 쓸 수 있나요?",
        a: "네. Anthropic, OpenAI, Kimi, GLM 제공자가 내장되어 있고, 모든 OpenAI·Anthropic 호환 엔드포인트도 받아요.",
      },
      {
        q: "DeepSeek super agent란 무엇인가요?",
        a: "2026년 10월 31일에 공개된 DeepSeek Harness용 연구 프로토타입 번들 dsh-superagent로, 하네스가 GitHub 저장소에서 능동적으로 일하게 해요. [DeepSeek Super-Agent 해설](/blog/deepseek-super-agent)을 참고하세요.",
      },
    ],
  },
  cta: {
    title: "DeepSeek Harness를 AI 직원으로 만드세요.",
    text: "Crewmark는 DeepSeek Harness, Claude Code, Codex, OpenCode 세션을 직무, 목표, 근무 시간, 하트비트를 갖춘 AI 직원으로 바꿔 줘요.",
    button: "시작하기",
  },
  checked: "2026년 11월 6일에 deepseek.com, deepseek-ai/deepseek-harness 저장소, DeepSeek API 문서, arXiv와 대조해 확인했어요.",
  disclaimer:
    "Crewmark는 독립 제품이며 DeepSeek, Anthropic 또는 OpenAI와 제휴 관계가 아니고 그들의 보증을 받지 않았어요. 제품 이름은 각 소유자의 상표예요.",
};
