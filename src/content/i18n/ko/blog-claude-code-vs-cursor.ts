import type { GuideCopy } from "@/components/landing/guide-article";

// Korean translation of /blog/claude-code-vs-cursor; the English master is src/content/blog/claude-code-vs-cursor.ts.

const cursorPricing = "https://cursor.com/pricing";

export const copy: GuideCopy = {
  meta: {
    title: "Claude Code vs Cursor 비교 (2026): 가격, 모델, 사용량 제한, 선택 방법 | Crewmark",
    description:
      "2026년 11월 기준 Claude Code와 Cursor 비교: SpaceX에 합류한 Cursor의 Grok 중심 새 요금제, 각각에서 Claude 모델을 쓰는 비용, 에이전트, CLI, 규칙, MCP, hooks, 선택 방법.",
  },
  breadcrumb: "Claude Code vs Cursor",
  parent: { name: "블로그", href: "/blog" },
  article: { published: "2026-11-06" },
  hero: {
    kicker: "블로그 · Claude Code",
    title: "2026년 Claude Code vs Cursor: 무엇이 바뀌었고, 어떤 걸 골라야 할까",
    lead: "Claude Code는 Anthropic의 코딩 에이전트예요. Claude 구독으로 터미널, IDE, 데스크톱 앱, 브라우저에서 실행돼요. Cursor는 자체 에이전트, CLI, 클라우드 에이전트를 갖춘 AI 코드 에디터예요. 올해 이 비교의 전제가 바뀌었어요. Cursor는 2026년 8월 SpaceX의 일부가 되었고, 요금제는 이제 Grok 모델 중심으로 짜여 있으며, Cursor에서 Claude 모델을 쓰면 API 정가로 따로 청구돼요. 이 가이드에서는 2026년 11월 6일 기준으로 가격, 모델, 한도, 기능을 비교하고, 어떻게 고를지 또는 둘을 함께 쓰는 방법을 알려 드려요.",
    cta: "얼리 액세스 신청",
    secondary: "비교표로 이동",
    secondaryHref: "#compare",
  },
  sections: [
    {
      kind: "table",
      id: "compare",
      title: "Claude Code vs Cursor 한눈에 보기",
      headers: ["", "Claude Code", "Cursor"],
      rows: [
        ["만든 곳", "Anthropic", "Cursor, 2026년 8월부터 SpaceX 소속"],
        ["어떤 도구인가", "터미널, IDE, 데스크톱, 웹, 모바일용 코딩 에이전트", "AI 코드 에디터, 그리고 CLI(`agent`), 클라우드 에이전트, 코드 리뷰"],
        ["주요 모델", "Claude Opus 5.5, Sonnet 5.5, Haiku 5.5, Fable 5.1", "Grok 4.5~4.7과 Composer 2.5. Claude, GPT, Gemini 등은 API 정가로 사용"],
        ["가장 저렴한 유료 요금제", "Claude Pro, 월 $20", "Plus, 월 $8, Grok 모델만"],
        ["Claude 모델 비용", "Claude 요금제 한도 안에 포함", "사용량에 따라 API 정가로 별도 청구(Premium 이상)"],
        ["프로젝트 지침", "`CLAUDE.md`, `.claude/rules/`. CLAUDE.md가 없으면 AGENTS.md를 읽음", "`.cursor/rules/*.mdc`, `AGENTS.md`, 사용자 규칙과 팀 규칙"],
        ["플랫폼", "macOS, Windows, Linux", "macOS, Windows, Linux"],
      ],
    },
    {
      kind: "table",
      title: "가격: Claude 요금제 vs Cursor 요금제",
      text: [
        "claude.com/pricing과 cursor.com/pricing에 나온 월 요금(미국 달러)이에요. Cursor 요금제에는 이제 타임라인 광고 감소 같은 X 기능도 포함되고, Grok과 함께 매주 초기화되는 AI 사용량 풀 하나를 공유해요.",
      ],
      headers: ["Claude 요금제", "가격", "Cursor 요금제", "가격"],
      rows: [
        ["Free", "Claude Code 없음", "Free", "$0, 에이전트 요청 제한적"],
        ["Pro", "$20(연간 결제 시 $17)", "Plus", "$8, Grok 모델만"],
        ["Max", "$100", "Premium", "$30: Plus의 4배 사용량, 클라우드 에이전트, 자동화, 코드 리뷰, 서드파티 모델을 API 가격으로"],
        ["Ultra", "$200", "Super", "$100: Plus의 15배 사용량"],
        ["Team", "좌석당 $25(Standard), $125(Premium)", "Ultra", "$200: Plus의 50배 사용량"],
        ["Enterprise", "좌석당 $20(연간 결제), 그리고 API 요금으로 사용량 청구", "Teams, Enterprise", "사용자당 $30부터, Enterprise는 별도 협의"],
      ],
    },
    {
      kind: "table",
      title: "기능 나란히 비교",
      headers: ["기능", "Claude Code", "Cursor"],
      rows: [
        ["터미널 에이전트", "`claude`, 헤드리스는 `-p`", "`agent` CLI, 프린트 모드는 `-p`"],
        ["Plan 모드", "있음(Shift+Tab, `/plan`)", "있음(Shift+Tab, `/plan`)"],
        ["클라우드 에이전트", "웹용 Claude Code, 클라우드 세션", "VM에서 도는 클라우드 에이전트(Premium 이상). 웹, iOS, GitHub, Slack, Linear, API에서 시작"],
        ["병렬 작업", "`--worktree`, 서브에이전트, 에이전트 뷰", "`/worktree`, 여러 모델에 걸친 `/best-of-n`"],
        ["자동화", "`/loop`, 데스크톱·클라우드 예약 작업", "cron, Git, Slack, Linear, webhook, Sentry, PagerDuty로 시작하는 자동화(Premium 이상)"],
        ["MCP", "있음: `claude mcp add`, `.mcp.json`", "있음: `.cursor/mcp.json`"],
        ["Hooks", "있음, `settings.json`에서 30개 이상의 이벤트", "있음, `hooks.json`에서 약 20개 이벤트. Claude Code hooks도 불러올 수 있음"],
        ["코드 리뷰", "로컬에서 `/code-review`, Team과 Enterprise에서는 `@claude review`", "GitHub, GitLab, Bitbucket, Azure DevOps에서 Bugbot"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Claude Code와 Cursor 중 고르는 방법",
      text: [
        "모든 면에서 더 나은 쪽은 없고, 공개된 벤치마크는 발표한 쪽에 유리하기 마련이에요. 하루 일과를 바꾸는 요소로 결정하세요.",
      ],
      steps: [
        {
          title: "어떤 모델에 돈을 낼지 정하기",
          text: "Claude 모델을 매일 쓰고 싶다면 Claude 요금제는 한도 안에서 포함해 줘요. Cursor에서는 요금제와 별도로 API 정가로 청구돼요. Grok과 Composer로 충분하다면 Cursor의 $8, $30 요금제가 Claude보다 저렴해요.",
        },
        {
          title: "어디서 일하고 싶은지 정하기",
          text: "Cursor는 에디터가 먼저예요. 인라인 편집, Tab 자동 완성, 에이전트가 한 창에 있어요. Claude Code는 에이전트가 먼저예요. 어느 터미널에서나 동작하고 VS Code, JetBrains, 데스크톱 앱, 웹, Slack에도 연결돼요.",
        },
        {
          title: "내가 없을 때 얼마나 돌아가야 하는지 확인하기",
          text: "둘 다 클라우드와 예약 실행을 지원해요. Cursor의 클라우드 에이전트와 자동화는 Premium 이상이 필요하고, Claude Code의 예약 작업과 클라우드 세션은 Claude 요금제에 포함돼요. [Claude Code를 능동적으로 만드는 방법](/proactive-claude-code)을 참고하세요.",
        },
        {
          title: "설정을 옮기기 쉽게 유지하기",
          text: "공유 규칙은 AGENTS.md에 쓰고(둘 다 읽어요) CLAUDE.md에서 가져오세요. Cursor는 Claude Code hooks도 불러올 수 있어요. 그러면 바꾸거나 섞어 쓰는 비용이 거의 들지 않아요. [CLAUDE.md 가이드](/blog/claude-md)를 참고하세요.",
        },
        {
          title: "아니면 둘 다 쓰기",
          text: "Anthropic의 VS Code 문서에 Cursor용 설치 링크가 있어서, Claude Code 확장을 Cursor 에디터 안에서 내 Claude 요금제로 실행할 수 있어요.",
        },
      ],
      source: { label: "출처: Claude Code 문서와 Cursor 가격 페이지", href: cursorPricing },
    },
    {
      kind: "text",
      title: "Cursor에서 Claude Code 확장을 쓰고 있다면",
      text: [
        "2026년 10월 29일 Cursor는 Anthropic이 빌드하지 않은 Anthropic.claude-code 확장의 악성 버전 2.1.312와 2.1.313이 Windows와 macOS용으로 Cursor 확장 마켓플레이스에 약 11시간 동안 올라와 있었다고 발표했어요. Cursor는 이를 삭제하고 마켓플레이스를 다시 구축한 뒤 확인 방법을 공개했어요. `authorized_keys`에 `svc-telemetry`라는 라벨의 SSH 키가 있다면 그 컴퓨터는 영향을 받은 거예요. 그날 확장을 설치하거나 업데이트했다면 Cursor의 보안 공지를 따르세요.",
      ],
    },
    {
      kind: "text",
      title: "Codex는요?",
      text: [
        "OpenAI의 Codex는 흔히 고르는 세 번째 선택지로, 무료 요금제부터 ChatGPT 요금제에 포함되고 Cursor 안에서도 실행돼요. [Claude Code vs Codex](/blog/claude-code-vs-codex)에서 비교해 보고, 여러 에이전트를 동시에 돌리려면 [Claude Code 오케스트레이션 도구](/blog/claude-code-orchestration-tools)를 참고하세요.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Crewmark로",
      title: "무엇을 고르든, 일을 맡기세요",
      text: [
        "에디터도 에이전트도 여전히 내 다음 프롬프트를 기다려요. Crewmark는 Claude Code, Codex, DeepSeek Harness, OpenCode 세션을 역할, 목표, 근무 시간이 있는 AI 직원으로 바꾸고, 하트비트로 깨워 보드에서 다음 issue를 가져가게 해요. 이미 내고 있는 구독 그대로요.",
      ],
      steps: [
        {
          title: "역할과 목표 고르기",
          text: "소프트웨어 엔지니어, 리뷰어, SEO 작가: 역할마다 숫자로 적은 목표가 있어요. [AI 직원이란](/ai-employees)을 읽어 보세요.",
        },
        {
          title: "하트비트로 일 시작하기",
          text: "근무 시간 동안 직원은 15분, 30분, 60분마다 같은 대화에서 깨어나 다음 issue를 가져가요.",
        },
        {
          title: "보드에서 검토하기",
          text: "일하면서 댓글을 남기고, 결정이 필요할 때 메시지를 보내요.",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Claude Code와 Cursor 중 선택하기" },
  mid: {
    title: "에이전트를 골랐나요? 이제 나를 기다리지 않고 일하게 하세요.",
    text: "Crewmark는 역할, 목표, issue 보드를 주고 하트비트로 Claude Code나 Codex를 깨워요.",
    button: "얼리 액세스 신청",
  },
  faq: {
    title: "Claude Code vs Cursor 자주 묻는 질문",
    items: [
      {
        q: "Claude Code가 Cursor보다 나은가요?",
        a: "일하는 방식에 따라 달라요. Claude Code는 구독에 Claude 모델이 포함되길 원하고, 어느 터미널이나 IDE에서도 동작하는 에이전트를 원하는 사람에게 맞아요. Cursor는 인라인 편집이 되는 AI 에디터를 원하고, Grok 모델로 충분하거나 다른 모델에 API 가격을 낼 수 있는 사람에게 맞아요.",
      },
      {
        q: "Cursor에서 Claude 모델을 쓸 수 있나요?",
        a: "네, Premium($30) 이상에서 쓸 수 있지만 Claude 같은 서드파티 모델은 사용량에 따라 API 정가로 따로 청구돼요. $8 Plus 요금제는 Grok 모델만 제공해요.",
      },
      {
        q: "Claude Code와 Cursor 중 어느 쪽이 더 저렴한가요?",
        a: "입문 요금제는 Cursor가 더 저렴하지만(월 $8, $30) Cursor에서 Claude를 쓰면 추가 비용이 들어요. 주로 Claude 모델을 쓴다면 Claude Pro($20)나 Max($100) 요금제가 API 가격을 내는 것보다 대개 저렴해요.",
      },
      {
        q: "Cursor는 이제 SpaceX 소속인가요?",
        a: "네. Cursor는 2026년 8월 14일 SpaceX에 인수되었다고 발표했어요. 4월에 시작된 절차가 마무리된 거예요. 요금제에는 이제 X 기능과 Grok 모델이 함께 제공돼요.",
      },
      {
        q: "Cursor 안에서 Claude Code를 실행할 수 있나요?",
        a: "네. Claude Code 확장은 Anthropic의 설치 링크로 Cursor에 설치되고, `claude` CLI는 Cursor 터미널에서 실행돼요. 공식 확장을 쓰고, Cursor의 10월 29일 보안 공지 이후 버전을 확인하세요.",
      },
      {
        q: "Claude Code와 Cursor가 설정을 공유하나요?",
        a: "일부는요. 둘 다 AGENTS.md를 읽고, 둘 다 MCP를 지원하며(설정 파일은 각자 따로), Cursor는 Claude Code hooks를 불러올 수 있어요. 그 밖의 규칙과 설정 파일은 따로예요.",
      },
      {
        q: "사용량 제한은 어떻게 되나요?",
        a: "Claude 요금제는 5시간 창과 Claude 채팅과 공유하는 주간 한도를 써요. Cursor 요금제는 Grok과 함께 매주 초기화되는 풀 하나를 공유하고, 그 크기는 Plus 요금제의 몇 배로 정해져요. 넘어가면 충전하거나 API로 청구돼요.",
      },
    ],
  },
  cta: {
    title: "코딩 에이전트를 멈추지 않는 팀원으로.",
    text: "Crewmark는 Claude Code, Codex, DeepSeek Harness 세션을 역할, 목표, 근무 시간, 하트비트를 가진 AI 직원으로 바꿔요.",
    button: "얼리 액세스 신청",
  },
  checked: "2026년 11월 6일에 Claude Code 문서, claude.com/pricing, cursor.com(가격, 문서, 변경 기록, 블로그)과 대조해 확인했어요.",
  disclaimer:
    "Crewmark는 독립 제품이며 Anthropic, Cursor 또는 SpaceX와 제휴 관계가 아니고 그들의 보증을 받지 않았어요. Claude와 Claude Code는 Anthropic의 상표이고, Cursor는 그 소유자의 상표예요.",
};
