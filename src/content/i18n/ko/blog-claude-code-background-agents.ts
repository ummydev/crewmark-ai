import type { GuideCopy } from "@/components/landing/guide-article";

// Korean translation of /blog/claude-code-background-agents; the English master is
// src/content/blog/claude-code-background-agents.ts.
export const copy: GuideCopy = {
  meta: {
    title: "Claude Code 백그라운드 에이전트·헤드리스 모드 | Crewmark",
    description:
      "Claude Code 백그라운드 실행: 백그라운드 작업, --bg, cron으로 돌리는 claude -p, 클라우드 세션, 예약 작업과 권한.",
  },
  breadcrumb: "Claude Code 백그라운드 에이전트",
  parent: { name: "블로그", href: "/blog" },
  article: { published: "2026-11-02" },
  hero: {
    kicker: "블로그 · Claude Code",
    title: "Claude Code 백그라운드 에이전트 실행하는 방법",
    lead: "백그라운드 에이전트는 내가 다른 일을 하는 동안에도 계속 일해요. 백그라운드로 보낸 긴 테스트 실행, --bg로 시작하고 터미널을 닫아 버린 세션, 매일 아침 cron이 시작하는 헤드리스 claude -p 작업 같은 것이죠. Claude Code에는 각각을 위한 도구가 있어요. 이 가이드에서는 사용 방법, 각각을 계속 돌아가게 하는 조건, 그리고 지켜보지 않는 실행에 필요한 권한을 설명해요.",
    cta: "얼리 액세스 신청",
    secondary: "헤드리스 모드로 바로 가기",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "table",
      title: "Claude Code를 백그라운드에서 실행하는 다섯 가지 방법",
      text: ["무엇이 계속 실행 중이어야 하는지, 그리고 누가 일을 시작하는지가 다릅니다."],
      headers: ["", "시작 방법", "계속 실행되는 조건", "적합한 용도"],
      rows: [
        ["백그라운드 작업", "Ctrl+B, 또는 Claude가 명령을 백그라운드로 실행", "세션이 열려 있는 동안", "한 대화 안에서 긴 빌드와 테스트, 서브에이전트"],
        ["Agent view", "`claude --bg \"<prompt>\"`", "컴퓨터가 켜져 있는 동안(터미널은 닫아도 됨)", "지금 시작하고 나중에 확인할 여러 세션"],
        ["헤드리스 모드", "스크립트나 cron에서 `claude -p \"<prompt>\"`", "명령이 실행되는 동안", "스크립트, cron 작업, CI"],
        ["클라우드 세션", "`claude --cloud \"<task>\"`", "Anthropic 서버가 실행하는 동안(노트북을 닫아도 됨)", "GitHub 저장소에서 하는 긴 작업"],
        ["예약 작업", "`/schedule`, 데스크톱 앱, `/loop`", "종류에 따라: 클라우드, 앱이 열린 상태, 세션이 열린 상태", "반복 업무. [Claude Code를 능동적으로 쓰는 법](/proactive-claude-code) 참고"],
      ],
    },
    {
      kind: "text",
      title: "세션 안의 백그라운드 작업",
      text: [
        "Claude가 Bash 명령이나 서브에이전트를 실행하는 동안 Ctrl+B를 누르면(tmux에서는 두 번) 백그라운드로 보내고 Claude와 계속 대화할 수 있어요. Claude가 스스로 명령을 백그라운드에서 시작하기도 해요. Claude가 만드는 서브에이전트는 기본적으로 백그라운드에서 실행돼요.",
        "`/tasks`를 입력하면 실행 중인 셸과 서브에이전트 목록을 보고 상태를 확인할 수 있어요. 로컬 터미널 세션에서 백그라운드 명령에는 시간 제한이 없지만, Claude Code가 종료되면 함께 멈춰요. 여러 에이전트를 나란히 돌리려면 [Claude Code 에이전트 여러 개 실행하는 법](/blog/multiple-claude-code-agents)을 보세요.",
      ],
    },
    {
      kind: "text",
      title: "Agent view: 터미널보다 오래 사는 세션",
      text: [
        "`claude --bg \"<prompt>\"`는 백그라운드에서 세션을 시작하고 바로 돌아오고, `/bg`는 지금 있는 세션을 백그라운드로 옮겨요. 감독(supervisor) 프로세스가 이 세션들을 실행하므로 터미널을 닫아도 멈추지 않지만, 컴퓨터를 끄거나 재시작하면 멈춰요. 연결되지 않은 채 유휴 상태인 세션은 약 1시간 후 중지돼요.",
        "`claude agents`는 agent view를 열고, `claude attach <id>`, `claude logs <id>`, `claude stop <id>`로 세션 하나를 관리해요. Agent view는 리서치 프리뷰라서 명령이 바뀔 수 있어요.",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "claude -p로 Claude Code를 헤드리스로 실행하기",
      steps: [
        {
          title: "프롬프트 하나를 실행하고 종료하기",
          text: "`-p`(또는 `--print`)는 대화형 화면 없이 Claude Code를 실행하고, 끝나면 종료해요. 성공하면 종료 코드는 0이에요. 파이프로 입력을 넘길 수도 있어요.",
          code: 'claude -p "List the failing tests and why they fail"\ncat error.log | claude -p "Explain this error"',
        },
        {
          title: "스크립트가 읽을 수 있는 출력 받기",
          text: "`--output-format json`은 결과를 세션 ID와 메타데이터와 함께 돌려줘요. 여기에는 내 컴퓨터에서 계산한 추정치인 `total_cost_usd`도 들어 있어요. `stream-json`(`--verbose`와 함께)은 이벤트가 일어나는 대로 스트리밍해요.",
          code: "claude -p \"Summarize this repo\" --output-format json | jq -r '.result'",
        },
        {
          title: "필요한 도구만 허용하기",
          text: "헤드리스 모드에서는 프롬프트를 승인해 줄 사람이 없어요. v2.1.302부터는 모드를 지정하지 않은 실행이 Manual로 시작해 승인이 필요한 모든 것을 거부해요. 허용할 것은 `--allowedTools`로 지정하고, 나머지는 기다리지 말고 거부하도록 `--permission-mode dontAsk`를 쓰세요.",
          code: 'claude -p "Run the test suite and summarize failures" \\\n  --permission-mode dontAsk --allowedTools "Read,Bash(npm test)"',
        },
        {
          title: "실행에 상한 두기",
          text: "`--max-turns`는 정해진 에이전트 턴 수가 지나면 멈추고, `--max-budget-usd`는 추정 비용에 도달하면 멈춰요(조금 넘을 수 있어요). 둘 다 `-p`에서만 작동해요.",
          code: 'claude -p "Fix the lint errors" --max-turns 15 --max-budget-usd 3',
        },
        {
          title: "나중에 같은 대화 이어 가기",
          text: "JSON 출력에서 세션 ID를 저장해 `--resume`에 넘기거나, 해당 디렉터리의 가장 최근 세션이라면 `--continue`를 쓰세요.",
          code: "id=$(claude -p \"Start a code review of src/\" --output-format json | jq -r '.session_id')\nclaude -p \"Now check the tests too\" --resume \"$id\"",
        },
        {
          title: "cron으로 일정에 맞춰 실행하기",
          text: "Anthropic 문서에는 cron 예시가 없어요. 아래 예시는 문서화된 플래그만 써요. cron의 PATH는 최소한이라 `which claude`로 확인한 전체 경로를 쓰고, 로그 폴더를 먼저 만들어 두세요. 여기에 `--bare`는 붙이지 마세요. 구독 로그인을 건너뛰고 API 키가 필요해져요.",
          code: '# crontab -e: 평일 9:00\n0 9 * * 1-5  cd /path/to/repo && /path/to/claude -p "Summarize yesterday\'s commits and list new TODO comments. Do not edit files." --permission-mode dontAsk --allowedTools "Read,Bash(git log *),Bash(git diff *)" --max-turns 10 --output-format json >> "$HOME/logs/claude-daily.log" 2>&1',
        },
      ],
      source: { label: "출처: Anthropic의 헤드리스 모드 문서(영어)", href: "https://code.claude.com/docs/en/headless" },
    },
    {
      kind: "text",
      title: "지켜보지 않는 실행을 위한 권한",
      points: [
        "`dontAsk`와 `--allowedTools` 목록을 함께 쓰는 것이 가장 단단히 잠근 선택이에요. 목록에 없는 건 모두 거부해요.",
        "`auto`는 내가 아니라 분류기가 각 작업을 검토하게 해요. Anthropic은 이것이 안전을 보장하지는 않는다고 밝혀요.",
        "`acceptEdits`는 파일 수정과 간단한 파일 명령은 승인하지만, 다른 셸 명령은 승인하지 않아요.",
        "`bypassPermissions`는 프롬프트와 안전 검사를 건너뛰어요. 프롬프트 인젝션을 전혀 막아 주지 않으므로, Anthropic은 인터넷 접속이 없는 격리된 컨테이너나 VM에서만 쓰라고 해요.",
        "프로젝트의 모든 실행에 적용할 규칙은 `.claude/settings.json`의 `permissions.allow`와 `permissions.deny`에 두세요. deny 규칙이 항상 우선해요.",
      ],
    },
    {
      kind: "text",
      title: "클라우드 옵션: 컴퓨터가 꺼져 있을 때",
      points: [
        "클라우드 세션: `claude --cloud \"<task>\"`는 GitHub 브랜치를 바탕으로 Anthropic 인프라에서 실행되고, 노트북을 닫아도 계속돼요. 후속 요청은 `claude -p \"...\" --cloud <session-id>`로 보내세요.",
        "클라우드 예약 작업: `/schedule`이나 claude.ai/code에서 만들고, 일정(최소 1시간 간격), API 호출, GitHub 이벤트로 실행돼요. Pro, Max, Ultra, Team, Enterprise 대상이며 리서치 프리뷰예요.",
        "GitHub Actions: `schedule` 트리거와 함께 `anthropics/claude-code-action@v1`을 쓰세요. `claude setup-token`으로 받은 OAuth 토큰은 구독을 쓰고, API 키는 토큰 단위로 과금돼요.",
      ],
    },
    {
      kind: "steps",
      kicker: "Crewmark로",
      title: "백그라운드 에이전트에게 고정 업무를 주세요",
      text: [
        "백그라운드 작업, agent view, cron은 모두 내가 이미 정해 둔 일을 시작할 뿐이에요. Crewmark는 Claude Code 세션에 계속 이어지는 직무를 줘요. 근무 시간 동안 하트비트에 맞춰 깨어나 보드에서 다음 이슈를 가져가고, 막히면 메시지를 보내요.",
      ],
      steps: [
        {
          title: "세션을 직원으로 바꾸세요",
          text: "직무와 숫자로 된 목표를 정하고, Crewmark가 주는 설정 명령을 Claude Code에서 실행하세요. 그 대화가 직원이 돼요.",
        },
        {
          title: "하트비트가 일을 시작하게 하세요",
          text: "Crewmark 데몬은 이미 결제 중인 구독으로 근무 시간 동안 15, 30, 60분마다 세션을 깨우고, 근무 시간 밖에는 건드리지 않아요.",
        },
        {
          title: "이슈를 배정하고 메시지에 답하세요",
          text: "보드에 이슈로 업무를 추가하세요. 직원이 가져가서 진행하며 댓글을 남기고, 검토가 필요하면 물어봐요. [AI 직원이란 무엇인지](/ai-employees)도 참고하세요.",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "claude -p로 Claude Code를 헤드리스로 실행하기" },
  mid: {
    title: "다음 작업을 스스로 고르게 하고 싶나요?",
    text: "Crewmark는 정해 둔 근무 시간 동안 하트비트에 맞춰 Claude Code 세션을 깨우고, 보드에서 다음 이슈를 넘겨줘요.",
    button: "얼리 액세스 신청",
  },
  faq: {
    title: "Claude Code 백그라운드 에이전트 FAQ",
    items: [
      {
        q: "Claude Code를 백그라운드에서 실행하려면 어떻게 하나요?",
        a: "세션 안에서는 Ctrl+B를 눌러 실행 중인 명령이나 서브에이전트를 백그라운드로 보내세요. 세션 전체를 백그라운드에서 시작하려면 `claude --bg \"<prompt>\"`를 쓰세요. 스크립트와 cron에는 헤드리스 모드 `claude -p \"<prompt>\"`를 쓰세요.",
      },
      {
        q: "Claude Code 헤드리스 모드란 무엇인가요?",
        a: "`-p`(또는 `--print`)로 Claude Code를 실행하는 거예요. 프롬프트를 받아 대화형 화면 없이 작업하고 종료하며, 결과를 텍스트, JSON, JSON 이벤트 스트림으로 출력해요.",
      },
      {
        q: "터미널을 닫아도 백그라운드 에이전트가 계속 실행되나요?",
        a: "세션 안의 백그라운드 작업은 Claude Code가 종료되면 멈춰요. `--bg`로 시작한 세션은 터미널을 닫아도 컴퓨터가 꺼질 때까지 계속 실행돼요. 클라우드 세션과 클라우드 예약 작업은 컴퓨터가 꺼져 있어도 계속 실행돼요.",
      },
      {
        q: "지켜보지 않는 실행에는 어떤 권한 모드를 써야 하나요?",
        a: "`--permission-mode dontAsk`와 작업에 꼭 필요한 것만 담은 `--allowedTools` 목록으로 시작하세요. `bypassPermissions`는 인터넷 접속이 없는 격리된 컨테이너나 VM 안에서만 쓰세요.",
      },
      {
        q: "claude -p는 내 Claude 구독을 쓰나요?",
        a: "로그인한 방식을 그대로 써요. 단, `--bare`를 넘기면 로그인을 건너뛰고 API 키가 필요해요. 헤드리스 실행이 요금제 사용 한도에 어떻게 계산되는지는 Anthropic 문서에 명시되어 있지 않아요.",
      },
      {
        q: "백그라운드 에이전트 상태는 어떻게 확인하나요?",
        a: "세션 안에서는 `/tasks`, `--bg`로 시작한 세션은 `claude agents`, 헤드리스 실행은 로그 파일이나 JSON 출력으로 확인하세요.",
      },
    ],
  },
  cta: {
    title: "Claude Code에게 고정 업무를 주세요.",
    text: "Crewmark는 Claude Code 세션을 직무, 목표, 근무 시간, 하트비트를 갖춘 AI 직원으로 바꿔 줘요.",
    button: "얼리 액세스 신청",
  },
  checked: "2026년 11월 2일에 Anthropic의 Claude Code 문서와 대조해 확인했습니다.",
  disclaimer:
    "Crewmark는 독립 제품으로, Anthropic과 제휴하거나 Anthropic의 보증을 받지 않았습니다. Claude와 Claude Code는 Anthropic의 상표입니다.",
};
