import type { GuideCopy } from "@/components/landing/guide-article";

// Korean translation of /blog/claude-code-plan-mode; the English master is src/content/blog/claude-code-plan-mode.ts.

const docs = "https://code.claude.com/docs/en/permission-modes";

const enter = `# 플랜 모드로 세션 시작하기
claude --permission-mode plan

# 또는 세션 안에서 이 프롬프트만 계획하기
/plan 공개 API에 rate limiting 추가하기`;

const settings = `{
  "permissions": {
    "defaultMode": "plan"
  }
}`;

export const copy: GuideCopy = {
  meta: {
    title: "Claude Code 플랜 모드: 단축키, 작동 방식, auto 모드와 비교 | Crewmark",
    description:
      "Claude Code 플랜 모드(plan mode) 사용법: Shift+Tab 단축키와 /plan, 계획 중 Claude가 할 수 있는 일, 계획 승인, 기본값으로 설정하는 법, 그리고 auto, accept edits, manual 모드와의 비교.",
  },
  breadcrumb: "Claude Code 플랜 모드",
  parent: { name: "블로그", href: "/blog" },
  article: { published: "2026-11-06" },
  hero: {
    kicker: "블로그 · Claude Code",
    title: "Claude Code 플랜 모드: 작동 방식과 언제 쓰면 좋은지",
    lead: "플랜 모드(plan mode)는 Claude가 변경 사항을 조사하고 제안만 할 뿐 실제로 바꾸지는 않는 Claude Code 권한 모드예요. 파일을 읽고, 탐색을 위해 명령을 실행하고, 계획을 작성하지만, 내가 승인하기 전까지는 소스 코드를 편집하지 않아요. `Shift+Tab`을 눌러 모드를 순환하며 들어가거나, 프롬프트 앞에 `/plan`을 붙이면 돼요. 이 가이드에서는 들어가고 나오는 모든 방법, 계획 중에 허용되는 일, 승인 옵션, 기본값으로 만드는 법, 그리고 auto, accept edits, manual 모드와 어떻게 다른지 다뤄요.",
    cta: "얼리 액세스 신청",
    secondary: "단계로 이동",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "table",
      id: "modes",
      title: "플랜 모드 vs auto 모드 vs accept edits vs manual",
      text: [
        "플랜 모드는 Claude Code의 권한 모드 중 하나예요. 모드마다 편리함과 통제 사이의 균형이 달라요. 아래 표는 각 모드에서 Claude가 묻지 않고 할 수 있는 일을 정리한 거예요.",
      ],
      headers: ["모드", "묻지 않고 실행하는 것", "이럴 때 좋아요"],
      rows: [
        ["Manual(`default`)", "읽기만", "모든 동작을 검토할 때, 민감한 작업"],
        ["Accept edits(`acceptEdits`)", "읽기, 파일 편집, `mkdir`, `mv` 같은 흔한 파일 명령", "코드를 빠르게 고치고 나중에 `git diff`로 검토할 때"],
        ["Plan(`plan`)", "읽기, 그리고 auto 모드를 쓸 수 있으면 auto 모드 분류기가 승인한 탐색용 명령. 승인 전까지 편집 없음", "바꾸기 전에 코드베이스를 살펴보고 접근 방식을 합의할 때"],
        ["Auto(`auto`)", "전부, 백그라운드 안전 검사와 함께", "긴 작업, 확인 요청을 줄이고 싶을 때"],
        ["Don't ask(`dontAsk`)", "미리 허용한 도구만. 나머지는 모두 거부", "엄격하게 제한된 CI와 스크립트"],
        ["Bypass(`bypassPermissions`)", "전부", "격리된 컨테이너와 VM에서만"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Claude Code에서 플랜 모드 쓰는 법",
      steps: [
        {
          title: "플랜 모드로 들어가기",
          text: "터미널에서 `Shift+Tab`을 눌러 모드를 순환하다가 상태 표시줄에 `⏸ plan mode on`이 보이면 멈춰요. Manual에서 시작하면 accept edits, 그다음 plan 순서예요. 프롬프트 하나만 계획하려면 앞에 `/plan`을 붙이면 돼요. VS Code에서는 프롬프트 입력창 아래의 모드 표시를 클릭해 Plan을 고르고, 데스크톱 앱에서는 모드 선택기를 쓰세요.",
          code: enter,
        },
        {
          title: "변경 사항을 설명하고 Claude가 탐색하게 두기",
          text: "만들거나 고치고 싶은 걸 말해요. Claude는 코드를 읽고 명령을 실행해 조사한 다음 계획을 작성해요. auto 모드를 쓸 수 있으면 나에게 묻는 대신 분류기가 그 명령들을 검토하고, 그렇지 않으면 기본 제공 읽기 전용 명령 외에는 먼저 물어봐요.",
        },
        {
          title: "계획을 검토하고 수정하기",
          text: "Claude의 질문에 답하거나, 반대 의견을 내거나, `Ctrl+G`를 눌러 텍스트 편집기에서 계획을 열고 직접 고쳐요. 계획은 `~/.claude/plans/` 또는 `plansDirectory` 설정에 지정한 폴더에 파일로 저장돼요.",
        },
        {
          title: "승인하거나 계속 계획하기",
          text: "Claude가 구현하게 하려면 Yes, and use auto mode(승인하고 auto 모드 사용. auto 모드를 쓸 수 없으면 Yes, auto-accept edits, 즉 편집 자동 수락)를 고르세요. 편집을 하나씩 검토하려면 Yes, manually approve edits(편집을 직접 승인), 더 다듬으려면 No, keep planning(계속 계획)을 고르면 돼요. 승인하면 플랜 모드를 벗어나고, 세션 이름이 계획에 맞춰 붙어요.",
        },
        {
          title: "승인하지 않고 나가기",
          text: "`Shift+Tab`을 한 번 더 누르면 계획 없이 플랜 모드에서 나가요. 다음 변경을 계획하려면 다시 순환해 돌아오거나 프롬프트 앞에 `/plan`을 붙이세요.",
        },
      ],
      source: { label: "출처: Claude Code 문서, Choose a permission mode", href: docs },
    },
    {
      kind: "steps",
      id: "default",
      title: "플랜 모드를 기본값으로 만들기",
      text: [
        "세션 하나만이라면 `claude --permission-mode plan`으로 시작하세요. 한 프로젝트의 모든 터미널 세션에 적용하려면 `.claude/settings.json`에서 `defaultMode`를 `plan`으로 설정하고, 내 컴퓨터의 모든 프로젝트에 적용하려면 `~/.claude/settings.json`에 넣으세요.",
      ],
      steps: [
        {
          title: "설정에 추가하기",
          text: "VS Code 대화는 시작 모드를 프로젝트 설정에서 읽지 않아요. 대신 VS Code 사용자 설정에서 `claudeCode.initialPermissionMode`를 `plan`으로 설정하세요.",
          code: settings,
        },
      ],
    },
    {
      kind: "text",
      title: "플랜 모드가 제값을 하는 경우",
      points: [
        "여러 파일에 걸친 변경이나, 첫 아이디어가 자주 빗나가는 변경: 마이그레이션, 리팩터링, 프런트엔드와 백엔드에 걸친 새 기능.",
        "아직 잘 모르는 코드: 무언가 바꾸기 전에 Claude가 구조를 파악하고 접근 방식을 설명하게 하세요.",
        "실수 비용이 큰 곳: 데이터베이스 스키마, 인증, 결제, 공개 API.",
        "한 줄짜리 수정이나, 작업을 설명하는 말이 곧 계획인 경우엔 건너뛰세요. 그럴 땐 manual이나 accept edits 모드가 더 빨라요.",
        "깨끗한 컨텍스트와 함께 쓰기: `showClearContextOnPlanAccept`를 켜면 승인할 때 계획 단계의 대화도 지울 수 있어서, 구현이 계획만 가지고 시작돼요.",
      ],
    },
    {
      kind: "text",
      title: "주의할 점",
      points: [
        "플랜 모드가 막는 건 편집이지 모든 것이 아니에요. auto 모드를 쓸 수 있으면 승인된 셸 명령은 계획 중에도 실행되므로, 부작용이 있는 명령이 실행될 수 있어요.",
        "bypass permissions를 쓸 수 있는 상태로 시작한 대화형 터미널 세션에서는 플랜 모드의 차단이 강제되지 않아요. Claude는 편집하지 말라는 지시만 받아요.",
        "헤드리스 실행(`claude -p`), Agent SDK 세션, VS Code 채팅 패널에서는 플랜 모드의 차단이 유지돼요.",
        "VS Code에서 Plan을 고르면 그 대화에만 적용돼요. 새 대화는 평소의 시작 모드로 돌아가요.",
        "deny 규칙은 플랜 모드를 포함한 모든 모드에서 적용돼요. `/plan`, `/permissions` 등의 명령어는 [Claude Code 슬래시 명령어](/blog/claude-code-slash-commands)를 참고하세요.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Crewmark로",
      title: "플랜 모드는 Claude를 신중하게, Crewmark는 Claude가 계속 일하게 해요.",
      text: [
        "플랜 모드로 큰 변경의 주도권을 쥘 수 있지만, 세션은 여전히 내가 다음 일을 시작해 주길 기다려요. Crewmark는 Claude Code, Codex, DeepSeek Harness, OpenCode 세션을 직무, 목표, 근무 시간을 가진 AI 직원으로 바꾸고, 하트비트로 깨워서 보드의 다음 이슈를 가져가게 해요.",
      ],
      steps: [
        {
          title: "이슈 댓글로 올라오는 계획",
          text: "직원은 위험한 변경 전에 이슈에 계획을 올리고 내 승인을 기다릴 수 있어요. 터미널 대신 보드에서 승인하면 돼요.",
        },
        {
          title: "하트비트가 일을 시작하게 하기",
          text: "근무 시간 동안 직원은 15분, 30분, 60분마다 같은 대화에서 깨어나 다음 이슈를 가져가요. [Claude Code를 능동적으로 만드는 방법](/proactive-claude-code)을 참고하세요.",
        },
        {
          title: "여러 직원, 하나의 저장소",
          text: "직원마다 자기 [worktree](/blog/claude-code-worktree)와 직무를 주세요. [AI 직원이란](/ai-employees)도 읽어 보세요.",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Claude Code에서 플랜 모드 사용하기" },
  mid: {
    title: "계획은 승인했어요. 다음 작업은 누가 가져갈까요?",
    text: "Crewmark는 직무, 목표, 이슈 보드를 주고 하트비트로 Claude Code를 깨워요. 이미 결제한 요금제 그대로 쓸 수 있어요.",
    button: "얼리 액세스 신청",
  },
  faq: {
    title: "Claude Code 플랜 모드 FAQ",
    items: [
      {
        q: "Claude Code의 플랜 모드란 무엇인가요?",
        a: "Claude가 조사하고 계획을 작성하지만 소스 코드는 편집하지 않는 권한 모드예요. 계획을 승인하기 전까지 편집은 계속 막혀 있어요.",
      },
      {
        q: "플랜 모드 단축키는 무엇인가요?",
        a: "터미널에서 `Shift+Tab`으로 권한 모드를 순환하다가 상태 표시줄에 `⏸ plan mode on`이 보이면 멈추세요. 프롬프트 앞에 `/plan`을 붙이거나 `claude --permission-mode plan`으로 시작해도 돼요.",
      },
      {
        q: "플랜 모드와 auto 모드는 어떻게 다른가요?",
        a: "플랜 모드는 탐색하고 제안만 할 뿐 편집하지 않아요. auto 모드는 실제로 일을 해요. 백그라운드 안전 검사와 함께 편집하고 명령을 실행해요. 흔한 흐름은 먼저 계획한 다음 Yes, and use auto mode로 승인하는 거예요.",
      },
      {
        q: "플랜 모드와 accept edits는 어떻게 다른가요?",
        a: "accept edits는 Claude가 묻지 않고 파일을 바꾸고, 나는 나중에 검토해요. 플랜 모드는 계획을 승인하기 전까지 아무것도 바꾸지 않고, 승인한 뒤에 편집을 자동으로 수락할지 고를 수 있어요.",
      },
      {
        q: "VS Code나 데스크톱 앱에서 플랜 모드는 어떻게 쓰나요?",
        a: "VS Code에서는 프롬프트 입력창 아래의 모드 표시를 클릭해 Plan을 고르거나, `claudeCode.initialPermissionMode`를 `plan`으로 설정하세요. 데스크톱 앱에서는 모드 선택기에서 고르면 돼요.",
      },
      {
        q: "Claude Code 계획은 어디에 저장되나요?",
        a: "`plansDirectory` 설정으로 다른 폴더를 지정하지 않으면 `~/.claude/plans/`에 파일로 저장돼요. `Ctrl+G`를 누르면 현재 계획을 편집기에서 수정할 수 있어요.",
      },
      {
        q: "플랜 모드에서 어떻게 나가나요?",
        a: "계획을 승인하면 고른 모드로 바뀌어요. 승인하지 않고 나가려면 `Shift+Tab`을 누르세요.",
      },
    ],
  },
  cta: {
    title: "Claude Code가 계획하고, 만들고, 다음 이슈까지 가져가게 하세요.",
    text: "Crewmark는 Claude Code, Codex, DeepSeek Harness 세션을 직무, 목표, 근무 시간, 하트비트를 갖춘 AI 직원으로 바꿔 줘요.",
    button: "얼리 액세스 신청",
  },
  checked: "2026년 11월 6일에 Claude Code 문서(permission modes, settings)와 대조해 확인했습니다.",
  disclaimer:
    "Crewmark는 독립 제품으로, Anthropic과 제휴하거나 그 보증을 받지 않았습니다. Claude와 Claude Code는 Anthropic의 상표입니다.",
};
