import type { GuideCopy } from "@/components/landing/guide-article";

// Korean translation of /blog/claude-code-vs-codex; the English master is src/content/blog/claude-code-vs-codex.ts.

const claudeDocs = "https://code.claude.com/docs/en/overview";

export const copy: GuideCopy = {
  meta: {
    title: "Claude Code vs Codex 비교 (2026): 가격, 사용량 제한, 기능 | Crewmark",
    description:
      "2026년 11월 기준 Claude Code와 OpenAI Codex 비교: 모델, 요금제와 가격, 5시간·주간 한도, CLAUDE.md와 AGENTS.md, 샌드박스, 서브에이전트, 예약 작업, 선택 방법.",
  },
  breadcrumb: "Claude Code vs Codex",
  parent: { name: "블로그", href: "/blog" },
  article: { published: "2026-11-05" },
  hero: {
    kicker: "블로그 · Claude Code · Codex",
    title: "Claude Code vs Codex: 어떤 코딩 에이전트를 써야 할까",
    lead: "Claude Code는 Anthropic의 코딩 에이전트이고, Codex는 OpenAI의 코딩 에이전트예요. 둘 다 저장소를 읽고, 파일을 수정하고, 명령을 실행하며, 터미널, IDE, 데스크톱 앱, 웹, 휴대폰에서 쓸 수 있어요. 차이는 모델, 요금제, 한도, 기본 설정, 개방성에 있어요. 이 비교에서는 2026년 11월 기준으로 각각의 비용, 사용량 제한이 작동하는 방식, 기능 대응 관계, 어떤 작업에 어느 쪽이 맞는지를 다뤄요.",
    cta: "얼리 액세스 신청",
    secondary: "비교표로 이동",
    secondaryHref: "#compare",
  },
  sections: [
    {
      kind: "table",
      id: "compare",
      title: "Claude Code vs Codex 한눈에 보기",
      headers: ["", "Claude Code", "Codex"],
      rows: [
        ["만든 곳", "Anthropic", "OpenAI"],
        ["기본 모델", "Claude Opus 5.5. Sonnet 5.5, Haiku 5.5, Fable 5.1도 선택 가능", "GPT-6.1 Sol. GPT-6 Astra, GPT-6.1 Terra, GPT-6 Luna도 선택 가능"],
        ["실행 위치", "터미널, VS Code, JetBrains, 데스크톱 앱, claude.ai/code, Claude 모바일 앱, Slack", "터미널, VS Code, Cursor와 Windsurf, ChatGPT 데스크톱 앱, chatgpt.com/codex, ChatGPT 모바일 앱, Slack과 Linear"],
        ["포함된 가장 저렴한 요금제", "Claude Pro, 월 $20", "ChatGPT Free(제한적), 그다음 월 $8의 Go와 월 $20의 Plus"],
        ["오픈소스 여부", "아니요: 저장소는 공개되어 있지만 모든 권리를 보유", "CLI, SDK, App Server는 오픈소스(Apache-2.0). IDE 확장과 클라우드는 아님"],
        ["지침 파일", "CLAUDE.md(CLAUDE.md가 없으면 AGENTS.md를 읽음)", "AGENTS.md"],
        ["샌드박스", "셸 명령에 대해 직접 켜야 함", "기본으로 켜져 있음"],
        ["예약 작업", "클라우드 예약 작업(프리뷰), 데스크톱 예약 작업, `/loop`", "데스크톱 앱과 클라우드의 예약 작업"],
      ],
    },
    {
      kind: "table",
      title: "가격: 어떤 요금제에 포함될까",
      text: [
        "둘 다 각 회사의 채팅 구독에 포함되고, API 키로 바꿔서 토큰 단위로 과금되게 쓸 수도 있어요. 가격은 월 기준 미국 달러예요.",
      ],
      headers: ["Claude 요금제", "가격", "ChatGPT 요금제", "가격"],
      rows: [
        ["Free", "Claude Code 없음", "Free", "$0, GPT-6 Luna만"],
        ["Pro", "$20(연간 결제 시 $17)", "Go", "$8"],
        ["Max", "$100", "Plus", "$20"],
        ["Ultra", "$200", "Pro", "$100, $200 또는 $500"],
        ["Team", "좌석당 $25(Standard), $125(Premium)", "Business", "사용자당 $25(연간 결제 시 $20)"],
        ["Enterprise", "좌석당 $20(연간 결제), 그리고 API 요금으로 사용량 청구", "Enterprise, Edu", "영업팀에 문의"],
      ],
    },
    {
      kind: "text",
      title: "사용량 제한",
      text: [
        "둘 다 롤링 방식의 5시간 창과 주간 한도를 쓰고, 채팅과 코딩이 하나의 사용량을 함께 써요. 어느 쪽도 모든 요금제의 정확한 시간이나 메시지 수를 공개하지 않아요.",
      ],
      points: [
        "Claude: Pro에는 5시간 한도와 주간 한도가 있어요. Max는 Pro의 5배를 쓸 수 있어요. Ultra는 주당 Pro의 10배이고, 인증된 계정에는 5시간 한도가 없어요. Claude 채팅, Claude Code, IDE는 모두 같은 풀에서 차감돼요.",
        "Claude: 작업 도중 5시간 한도에 도달해도 Claude Code가 현재 단계를 마무리할 수 있어요(Pro는 주 1회, Max는 매번).",
        "Codex: OpenAI는 Plus의 5시간당 로컬 메시지 수를 모델별로 추정하는데, GPT-6.1 Sol은 15~160개, GPT-6 Luna는 350~3,000개, GPT-6 Astra는 5~45개예요. ChatGPT Pro에는 현재 5시간 한도가 없지만 주간 한도가 적용될 수 있어요.",
        "Codex: 클라우드 작업과 GitHub 코드 리뷰도 같은 사용량을 쓰고, 빠른 모드는 2.5배를 써요.",
        "둘 다 한도를 넘어서도 계속 쓸 수 있어요. Claude는 사용량 크레딧이나 API 키, Codex는 크레딧이나 API 키로요(API 키는 CLI, SDK, IDE에서 쓸 수 있고 클라우드 기능에서는 쓸 수 없어요).",
      ],
    },
    {
      kind: "table",
      title: "기능 비교",
      headers: ["기능", "Claude Code", "Codex"],
      rows: [
        ["프로젝트 지침", "`CLAUDE.md`, `.claude/rules/`, 자동 메모리", "`AGENTS.md`, `AGENTS.override.md`, 기본 합계 32 KiB"],
        ["설정", "`settings.json`", "`config.toml`"],
        ["서브에이전트", "있음, 백그라운드 에이전트도 있음", "있음: 기본 제공되는 default, worker, explorer와 커스텀 TOML 에이전트"],
        ["Hooks", "있음", "있음, 기본으로 켜짐"],
        ["Skills, 플러그인, MCP", "있음", "있음"],
        ["Plan 모드", "있음(Shift+Tab)", "있음"],
        ["권한 모드", "수동, 편집 허용, plan, auto(분류기가 확인), bypass", "승인 요청, 대신 승인, 전체 접근, 커스텀"],
        ["샌드박스", "직접 켜야 함: macOS는 Seatbelt, Linux는 bubblewrap, 네이티브 Windows는 미지원", "기본으로 켜져 있고, 네이티브 Windows 샌드박스도 포함"],
        ["병렬 작업", "병렬 데스크톱·웹 세션, 백그라운드 에이전트", "데스크톱 앱의 worktree, 클라우드 작업"],
        ["코드 리뷰", "Team과 Enterprise에서는 `@claude review`, 모든 요금제에서 로컬로 `/code-review`", "GitHub에서는 `@codex review`, CLI에서는 `/review`"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Claude Code와 Codex 중 고르는 방법",
      text: [
        "절대적인 승자는 없어요. 각 회사가 자사 모델이 앞서는 벤치마크를 공개하고, 그 결과는 릴리스마다 바뀌어요. 하루하루의 작업에 영향을 주는 기준으로 고르세요.",
      ],
      steps: [
        {
          title: "이미 내고 있는 구독에서 출발하기",
          text: "Claude Pro나 Max가 있다면 Claude Code가, ChatGPT Plus나 Pro가 있다면 Codex가 포함돼 있어요. 입문 요금제로 둘 다 써 보면 월 $40이에요. Codex는 ChatGPT Free와 Go에서도 더 작은 한도로 쓸 수 있어요.",
        },
        {
          title: "한도를 작업하는 시간에 맞추기",
          text: "매일 오래 쓴다면 최상위 요금제를 비교해 보세요. Claude Ultra($200)는 인증된 계정에 5시간 한도가 없고, ChatGPT Pro도 지금은 없어요. 가끔 쓰는 정도라면 어느 쪽이든 $20 요금제로 충분해요.",
        },
        {
          title: "얼마나 샌드박스로 막을지 정하기",
          text: "Codex는 기본으로 명령을 샌드박스에서 실행하고, Windows에서도 마찬가지예요. Claude Code는 기본으로 실행 전에 물어보고, 직접 켤 수 있는 샌드박스와 분류기가 안전한 동작을 승인하는 auto 모드를 제공해요.",
        },
        {
          title: "팀이 일하는 곳 확인하기",
          text: "Claude Code는 JetBrains 플러그인이 있고 Slack에서도 실행돼요. Codex는 Cursor, Windsurf, Slack, Linear와 연결돼요. 둘 다 VS Code, 웹, 모바일에서 동작해요.",
        },
        {
          title: "지침을 옮겨 다닐 수 있게 두기",
          text: "프로젝트 규칙은 AGENTS.md에 쓰고 CLAUDE.md에서 `@AGENTS.md`로 가져오세요. 그러면 두 에이전트가 같은 파일을 읽으니 갈아타는 데 드는 비용이 없어요. [CLAUDE.md 가이드](/blog/claude-md)를 참고하세요.",
        },
      ],
      source: { label: "출처: Claude Code 문서와 Codex 문서", href: claudeDocs },
    },
    {
      kind: "text",
      title: "Cursor, Gemini CLI, OpenCode는 어떨까",
      text: [
        "Cursor는 자체 에이전트를 가진 에디터이고, Claude Code와 Codex 확장도 올릴 수 있어요. Gemini CLI와 OpenCode는 이 둘과 같은 터미널 에이전트이고, OpenCode는 오픈소스로 여러 모델 제공업체와 함께 동작해요. 모두 AGENTS.md를 읽으니, 위에서 소개한 옮겨 다닐 수 있는 설정이 그대로 통해요.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Crewmark와 함께",
      title: "둘 다 쓰기: 에이전트마다 역할 주기",
      text: [
        "Crewmark는 하나만 고르라고 하지 않아요. Claude Code, Codex, DeepSeek Harness, OpenCode 세션을 역할, 목표, 근무 시간이 있는 AI 직원으로 바꾸고, 하트비트로 깨우고, 공유 보드의 issue를 맡겨요. 같은 프로젝트에서 한 직원은 Claude Code로, 다른 직원은 Codex로 일할 수 있어요.",
      ],
      steps: [
        {
          title: "세션을 직원으로 만들기",
          text: "소프트웨어 엔지니어나 SEO 담당자 같은 역할을 고르고, 목표를 숫자로 적은 다음, Claude Code나 Codex에서 설정 명령을 실행하세요.",
        },
        {
          title: "하트비트로 일 시작하기",
          text: "근무 시간 동안 직원은 15분, 30분, 60분마다 같은 대화에서 깨어나요. [Claude Code를 능동적으로 만드는 방법](/proactive-claude-code)과 [Codex를 능동적으로 만드는 방법](/proactive-codex)을 참고하세요.",
        },
        {
          title: "issue를 배정하고 메시지에 답하기",
          text: "보드에 일을 올려 두면 각 직원이 자기 역할에 맞는 것을 가져가고, 진행하면서 댓글을 남기고, 결정이 필요할 때 메시지를 보내요. [AI 직원이란](/ai-employees)도 읽어 보세요.",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Claude Code와 Codex 중 선택하기" },
  mid: {
    title: "이미 Claude나 ChatGPT를 쓰고 있나요?",
    text: "Crewmark는 지금 쓰는 요금제 그대로, Claude Code와 Codex를 하트비트와 issue 보드를 갖춘 AI 직원으로 만들어 줘요.",
    button: "얼리 액세스 신청",
  },
  faq: {
    title: "Claude Code vs Codex 자주 묻는 질문",
    items: [
      {
        q: "Claude Code가 Codex보다 나은가요?",
        a: "모두에게 더 나은 쪽은 없어요. 둘 다 서브에이전트, hooks, skills, MCP, plan 모드를 갖춘 뛰어난 에이전트예요. 이미 가진 구독, 필요한 한도, 원하는 샌드박스 기본값, 팀이 쓰는 도구를 기준으로 고르세요.",
      },
      {
        q: "Claude Code와 Codex 중 어느 쪽이 더 저렴한가요?",
        a: "시작 비용은 Codex가 더 낮아요. ChatGPT Free(제한적)와 월 $8의 Go에 포함돼 있어요. Claude Code는 $20의 Claude Pro부터 시작해요. 월 $20에서는 Claude Pro와 ChatGPT Plus 모두 각자의 에이전트를 포함해요.",
      },
      {
        q: "Claude Code와 Codex의 사용량 제한은 어떻게 되나요?",
        a: "둘 다 5시간 창과 채팅과 공유하는 주간 한도를 써요. Claude Max는 Pro의 5배, Ultra는 주당 Pro의 10배예요. OpenAI는 Plus에서 5시간당 GPT-6.1 Sol 메시지를 15~160개로 추정해요. Claude Ultra(인증된 계정)와 ChatGPT Pro에는 현재 5시간 한도가 없어요.",
      },
      {
        q: "Claude Code와 Codex는 어떤 모델을 쓰나요?",
        a: "Claude Code의 기본값은 Claude Opus 5.5이고 Sonnet 5.5, Haiku 5.5, Fable 5.1도 선택할 수 있어요. Codex의 기본값은 GPT-6.1 Sol이고 GPT-6 Astra, GPT-6.1 Terra, GPT-6 Luna도 선택할 수 있어요.",
      },
      {
        q: "Codex는 오픈소스인가요? Claude Code는요?",
        a: "Codex CLI는 Apache-2.0 오픈소스이고, IDE 확장과 클라우드는 아니에요. Claude Code의 저장소는 공개되어 있지만 오픈소스는 아니에요. 모든 권리를 보유하며 Anthropic의 상업 약관에 따라 사용해요.",
      },
      {
        q: "Claude Code와 Codex가 같은 지침을 공유할 수 있나요?",
        a: "네. Codex가 읽는 AGENTS.md에 지침을 쓰고 CLAUDE.md에 `@AGENTS.md`를 넣으면 Claude Code도 같은 파일을 읽어요.",
      },
      {
        q: "Claude Code와 Codex를 함께 쓸 수 있나요?",
        a: "네. 많은 개발자가 둘 다 두고 작업에 따라 바꿔 써요. Crewmark를 쓰면 각각이 자기 역할을 가진 AI 직원이 되어, 하트비트로 같은 보드에서 issue를 가져가요.",
      },
    ],
  },
  cta: {
    title: "Claude Code와 Codex를 한 팀으로.",
    text: "Crewmark는 Claude Code, Codex, DeepSeek Harness 세션을 역할, 목표, 근무 시간, 하트비트를 가진 AI 직원으로 바꿔요.",
    button: "얼리 액세스 신청",
  },
  checked: "2026년 11월 5일에 Claude Code 문서, claude.com/pricing, learn.chatgpt.com의 Codex 문서, 두 GitHub 저장소와 대조해 확인했어요.",
  disclaimer:
    "Crewmark는 독립 제품이며 Anthropic 또는 OpenAI와 제휴 관계가 아니고 그들의 보증을 받지 않았어요. Claude와 Claude Code는 Anthropic의 상표이고, ChatGPT와 Codex는 OpenAI의 상표예요.",
};
