import type { GuideCopy } from "@/components/landing/guide-article";

// Korean translation of /blog/claude-code-kanban; the English master is src/content/blog/claude-code-kanban.ts.

const docs = "https://code.claude.com/docs/en/interactive-mode";

const setup = `// ~/.claude/settings.json: only needed if your model
// doesn't have the task tools by default
{
  "env": { "CLAUDE_CODE_ENABLE_TODO_TOOLS": "1" }
}

# Install the board, add its hooks once, then open it
npm install -g claude-code-kanban
claude-code-kanban --install
claude-code-kanban --open`;

const shared = `# Several sessions share one task list
CLAUDE_CODE_TASK_LIST_ID=my-project claude`;

export const copy: GuideCopy = {
  meta: {
    title: "Claude Code 칸반 보드: 내장 작업 목록과 추천 도구",
    description:
      "Claude Code에는 작업 체크리스트(Ctrl+T)는 있지만 칸반 보드는 없어요. 작업 목록이 어떻게 동작하는지, 보드에 올리는 방법, 그리고 Claude Code 세션용 칸반 도구 claude-code-kanban, Kanban Code, Claudine, Vibe Kanban, Crewmark를 정리했어요.",
  },
  breadcrumb: "Claude Code 칸반 보드",
  parent: { name: "블로그", href: "/blog" },
  article: { published: "2026-11-07" },
  hero: {
    kicker: "블로그 · Claude Code",
    title: "Claude Code 칸반 보드: 작업 체크리스트에서 진짜 보드로",
    lead: "Claude Code에는 칸반 보드가 없어요. 대신 작업 목록이 있어요. Claude가 여러 단계짜리 작업을 할 때 스스로 쓰는 할 일 체크리스트로, 대기, 진행 중, 완료 상태로 표시되고 Ctrl+T로 켜고 꺼요. 흔히 말하는 'Claude Code 칸반 보드'는 그 위에 만든 두 가지 중 하나예요. 작업 목록을 브라우저 보드로 보여 주는 도구, 또는 카드 하나가 Claude Code 세션이나 이슈 하나인 보드죠. 이 가이드에서는 내장 작업 목록, 보드 설정 방법, 그리고 종류별 도구를 다뤄요.",
    cta: "시작하기",
    secondary: "보드 설정하기",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "Claude Code에 내장된 것: 작업 목록",
      text: [
        "작업 목록은 눈앞의 작업을 위한 Claude 자신의 체크리스트예요. 백그라운드 작업 화면과는 달라요. 실행 중인 셸과 서브에이전트는 `/tasks`에서 보여 줘요.",
      ],
      points: [
        "`Ctrl+T`로 보이거나 숨겨요. 한 번에 최대 다섯 개까지 표시돼요.",
        "작업은 컨텍스트 압축 뒤에도 남아 있어서, 긴 작업에서도 Claude가 계획을 잃지 않아요.",
        "Claude에게 \"show me all tasks\"(모든 작업 보여 줘)나 \"clear all tasks\"(모든 작업 지워 줘)라고 요청할 수 있어요.",
        "`CLAUDE_CODE_TASK_LIST_ID`를 설정하면 여러 세션이 목록 하나를 함께 써요. 목록은 `~/.claude/tasks/` 아래 이름 붙은 디렉터리에 저장돼요.",
        "작업 도구는 Opus 4.7, Sonnet 4.6, Haiku 4.5와 그 이전 모델에서 기본으로 켜져 있어요. 다른 모델에서는 `CLAUDE_CODE_ENABLE_TODO_TOOLS=1`을 설정하지 않으면 목록이 계속 비어 있어요.",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Claude Code 작업을 칸반 보드에 올리는 방법",
      text: [
        "여기서는 claude-code-kanban을 써요. Claude Code가 쓰는 작업 파일을 지켜보다가 브라우저에 보여 주는 오픈소스 보드예요.",
      ],
      steps: [
        {
          title: "작업 도구가 켜져 있는지 확인하기",
          text: "`Ctrl+T`를 눌러도 체크리스트가 한 번도 안 보인다면, 쓰는 모델에 작업 도구가 기본으로 켜져 있지 않은 거예요. 설정에 환경 변수를 추가하고 Claude Code를 다시 시작하세요.",
          code: setup,
        },
        {
          title: "보드와 훅 설치하기",
          text: "`claude-code-kanban --install`은 훅이 들어 있는 Claude Code 플러그인을 추가해요. 훅이 없으면 보드에 작업만 보이고, 실시간 활동이나 응답을 기다리는 프롬프트는 안 보여요.",
        },
        {
          title: "보드를 열고 하던 일 계속하기",
          text: "Claude가 일하는 동안 카드가 Pending, In Progress, Completed로 움직이고, Claude의 질문에도 보드에서 바로 답할 수 있어요. 127.0.0.1에서만 열리고 로그인도 없으니 내 컴퓨터에서만 쓰세요.",
        },
        {
          title: "여러 세션에서 보드 하나 함께 쓰기",
          text: "모든 세션을 같은 작업 목록 ID로 시작하면, 여러 Claude Code 세션이 목록 하나를 읽고 업데이트해요.",
          code: shared,
        },
      ],
      source: { label: "출처: Claude Code 문서, Interactive mode (Task list)", href: docs },
    },
    {
      kind: "table",
      id: "tools",
      title: "Claude Code 칸반 도구 비교",
      text: ["2026년 11월 7일 기준 각 프로젝트의 README나 소개 페이지에 나온 정보예요."],
      headers: ["도구", "카드 하나는", "실행 위치", "에이전트", "라이선스"],
      rows: [
        ["claude-code-kanban", "Claude 작업 목록의 작업 하나", "브라우저, 내 컴퓨터에서", "Claude Code", "MIT"],
        ["Kanban Code", "자기 worktree를 가진 Claude Code 세션 하나, 열은 Backlog, In Progress, Waiting, In Review, Done", "macOS 26 앱, Windows 앱", "Claude Code", "Apache 2.0"],
        ["Claudine", "상태, 브랜치, 오류를 감지한 Claude Code 또는 Codex 대화 하나", "VS Code 확장", "Claude Code, Codex", "MIT"],
        ["Vibe Kanban", "워크스페이스를 띄우는 이슈 하나, 회사는 문을 닫았고 앱은 로컬에서 실행", "`npx vibe-kanban`", "Claude Code, Codex 외 다수", "Apache 2.0"],
        ["Crewmark", "AI 직원이 하트비트로 스스로 가져가는 이슈 하나", "호스팅 웹 보드, 팀과 공유", "Claude Code, Codex, DeepSeek Harness, OpenCode", "상용"],
      ],
    },
    {
      kind: "text",
      title: "나에게 필요한 보드는",
      points: [
        "세션 하나의 계획만 보고 싶다면: Claude Code 자체의 작업 목록(`Ctrl+T`)으로 충분할 수 있어요. 브라우저에서 크게 보고 싶다면 claude-code-kanban을 더하세요.",
        "여러 세션을 병렬로 돌리다가 어느 세션이 나를 기다리는지 놓친다면: Kanban Code나 Claudine 같은 세션 보드가 작업 중, 대기 중, 리뷰 준비된 세션을 보여 줘요. [여러 Claude Code 에이전트](/blog/multiple-claude-code-agents)와 [worktree 가이드](/blog/claude-code-worktree)도 보세요.",
        "Vibe Kanban을 썼다면: [Vibe Kanban 대안](/blog/vibe-kanban-alternatives)을 보세요.",
        "보드가 일을 굴려서, 내가 없어도 에이전트가 다음 카드를 가져가길 원한다면: 그게 Crewmark가 하는 일이에요(아래 참고).",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Crewmark로",
      title: "Claude Code가 다음 카드를 스스로 가져가는 칸반 보드",
      text: [
        "위 도구들은 모두 Claude가 무엇을 하는지 보여 주지만, 세션을 시작하고 카드를 옮기는 건 여전히 내 몫이에요. Crewmark는 Claude Code, Codex, DeepSeek Harness, OpenCode 세션을 직무, 목표, 근무 시간을 가진 AI 직원으로 바꿔요. 직원은 하트비트로 깨어나 공유 보드에서 다음 이슈를 가져가고, 일하면서 댓글을 남기고, 결정이 필요하면 메시지를 보내요.",
      ],
      steps: [
        {
          title: "프로젝트와 에이전트 연결하기",
          text: "저장소에서 셋업 명령어를 실행하세요. 직원은 자기 세션과 체크아웃에서, 이미 결제한 요금제 그대로 일해요.",
        },
        {
          title: "보드 채우기",
          text: "팀원에게 맡기듯 이슈를 쓰고, 직원에게 배정하거나 비어 있는 직원이 가져가게 두세요.",
        },
        {
          title: "시작하는 대신 리뷰하기",
          text: "근무 시간 동안 15분, 30분, 60분마다 직원이 다음 카드를 가져가요. [Claude Code를 능동적으로 만드는 방법](/proactive-claude-code)과 [AI 직원이란](/ai-employees)을 읽어 보세요.",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Claude Code 작업을 칸반 보드에 올리기" },
  mid: {
    title: "이제 카드를 직접 옮기지 마세요.",
    text: "Crewmark 보드는 이슈를 Claude Code와 Codex 직원에게 배정하고, 직원은 하트비트로 깨어나 다음 이슈를 가져가요.",
    button: "시작하기",
  },
  faq: {
    title: "Claude Code 칸반 FAQ",
    items: [
      {
        q: "Claude Code에 칸반 보드가 있나요?",
        a: "없어요. 대기, 진행 중, 완료 항목으로 된 체크리스트인 작업 목록이 있고, Ctrl+T로 켜고 꺼요. Claude Code용 칸반 보드는 작업 파일이나 세션 파일을 바탕으로 만든 서드파티 도구예요.",
      },
      {
        q: "Claude Code 작업 목록은 어떻게 보나요?",
        a: "세션에서 Ctrl+T를 누르세요. 최대 다섯 개까지 보이니, 전체 목록은 Claude에게 \"show me all tasks\"라고 요청하세요. 실행 중인 셸과 서브에이전트는 /tasks로 봐요.",
      },
      {
        q: "Claude Code 작업 목록이 왜 비어 있나요?",
        a: "Claude가 아직 여러 단계짜리 작업을 계획하지 않았거나, 쓰는 모델에 작업 도구가 기본으로 켜져 있지 않은 거예요. 환경 변수나 설정에 CLAUDE_CODE_ENABLE_TODO_TOOLS=1을 넣고 다시 시작하세요.",
      },
      {
        q: "여러 Claude Code 세션이 작업 목록 하나를 함께 쓸 수 있나요?",
        a: "네. 각 세션을 같은 CLAUDE_CODE_TASK_LIST_ID로 시작하세요. 예를 들어 CLAUDE_CODE_TASK_LIST_ID=my-project claude처럼요. 목록은 ~/.claude/tasks/ 아래에 저장돼요.",
      },
      {
        q: "Claude Code 칸반 플러그인이 있나요?",
        a: "claude-code-kanban은 브라우저 보드에 데이터를 보내는 훅이 들어 있는 Claude Code 플러그인을 설치해요. Claudine은 VS Code 확장이고, Kanban Code는 데스크톱 앱이에요.",
      },
      {
        q: "Claude Code와 Codex를 함께 쓰는 칸반 보드가 있나요?",
        a: "Claudine은 Claude Code와 Codex 대화를 모두 읽어요. Vibe Kanban은 여러 에이전트를 지원하지만 회사가 문을 닫았어요. Crewmark 보드는 이슈를 Claude Code, Codex, DeepSeek Harness, OpenCode 직원에게 배정해요.",
      },
    ],
  },
  cta: {
    title: "Claude Code 보드를, 그 보드를 굴리는 팀으로 바꾸세요.",
    text: "Crewmark는 Claude Code, Codex, DeepSeek Harness, OpenCode 세션을 직무, 목표, 근무 시간, 하트비트를 갖춘 AI 직원으로 바꿔 줘요.",
    button: "시작하기",
  },
  checked: "2026년 11월 7일에 Claude Code 문서(Interactive mode)와 각 도구의 README나 소개 페이지와 대조해 확인했어요.",
  disclaimer:
    "Crewmark는 독립 제품이며 Anthropic이나 여기 소개한 프로젝트와 제휴 관계가 아니고 그들의 보증을 받지 않았어요. Claude와 Claude Code는 Anthropic의 상표예요.",
};
