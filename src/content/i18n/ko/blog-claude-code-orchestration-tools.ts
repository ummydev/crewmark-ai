import type { GuideCopy } from "@/components/landing/guide-article";

// Korean translation of /blog/claude-code-orchestration-tools; the English master is src/content/blog/claude-code-orchestration-tools.ts.

const docs = "https://code.claude.com/docs/en/agents";

export const copy: GuideCopy = {
  meta: {
    title: "2026 최고의 Claude Code 오케스트레이션 도구: 내장 기능과 앱 10개 비교 | Crewmark",
    description:
      "Claude Code 에이전트 여러 개를 동시에 돌리는 법. 내장 기능(Subagents, Agent view, Agent teams, 워크플로)과 Claude Squad, Orca부터 Paperclip, Multica, Crewmark까지 오케스트레이션 도구 10개를 비교해요.",
  },
  breadcrumb: "Claude Code 오케스트레이션 도구",
  parent: { name: "블로그", href: "/blog" },
  article: { published: "2026-11-06" },
  hero: {
    kicker: "블로그 · Claude Code",
    title: "2026년 최고의 Claude Code 오케스트레이션 도구",
    lead: "Claude Code 오케스트레이션은 Claude Code 에이전트 여러 개를 동시에 실행하고 조율하는 일이에요. 각 에이전트에 코드 사본, 작업, 결과를 보고할 방법을 하나씩 주는 거죠. 이제 Claude Code가 이 중 많은 부분을 직접 해 주고, 오픈소스와 상용 도구들이 그 위에 인터페이스, 보드, 일정을 더하고 있어요. 이 가이드는 먼저 내장 기능을 살펴본 뒤, 도구 10개를 인터페이스, 격리 방식, 지원 에이전트, 그리고 가장 중요한 질문으로 비교해요. 에이전트가 스스로 일을 시작하나요, 아니면 나를 기다리나요?",
    cta: "얼리 액세스 신청",
    secondary: "비교표로 이동",
    secondaryHref: "#compare",
  },
  sections: [
    {
      kind: "table",
      id: "built-in",
      title: "Claude Code 내장 기능: 에이전트를 병렬로 돌리는 다섯 가지 방법",
      text: [
        "무언가를 설치하기 전에 Claude Code만으로 충분한지 먼저 확인하세요. 모든 내장 기능에서 일하는 주체는 Claude 세션이고, worktree가 세션마다 별도의 체크아웃을 줘요([worktree 가이드](/blog/claude-code-worktree) 참고).",
      ],
      headers: ["기능", "할 수 있는 일", "상태"],
      rows: [
        ["Subagents(서브에이전트)", "한 세션 안의 작업자로, 자기 컨텍스트에서 곁가지 작업을 처리하고 요약을 돌려줘요", "사용 가능"],
        ["Agent view(`claude agents`)", "백그라운드 세션을 한 화면에서 배정하고 지켜보다가, 도움이 필요한 세션에 끼어들 수 있어요", "리서치 프리뷰"],
        ["Agent teams(에이전트 팀)", "여러 세션이 작업 목록과 메시지를 공유하고, 리더가 관리해요", "실험적, 기본값 꺼짐"],
        ["Dynamic workflows(동적 워크플로)", "많은 서브에이전트를 실행하고 결과를 교차 검증하는 스크립트", "사용 가능"],
        ["Projects(프로젝트)", "클라우드나 내 컴퓨터에서 병렬 스레드를 시작하는 하나의 지속적인 대화", "Pro, Max, Ultra 공개 베타"],
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Claude Code 오케스트레이션 도구 비교",
      text: [
        "스타 수와 라이선스는 2026년 11월 6일 GitHub 기준이에요. \"스스로 일을 시작함\"은 내가 프롬프트를 입력하지 않아도 도구가 보드, 일정, 하트비트를 통해 에이전트에게 다음 작업을 줄 수 있다는 뜻이에요.",
      ],
      headers: ["도구", "인터페이스", "격리", "에이전트", "스스로 일을 시작함", "라이선스, 스타"],
      rows: [
        ["Claude Squad", "터미널 UI(`cs`)", "에이전트마다 tmux 세션과 git worktree", "Claude Code, Codex, Gemini, Aider 등", "아니요", "AGPL-3.0, ~9k"],
        ["Orca", "데스크톱, CLI, 모바일, 원격 런타임", "에이전트마다 worktree", "Claude Code, Codex 등, 내 구독으로", "아니요. 오케스트레이터 에이전트가 작업을 나눌 수 있어요", "MIT, ~117k"],
        ["Ruflo(구 Claude Flow)", "Claude Code 플러그인, CLI, MCP 서버", "명시되지 않음", "Claude Code, Codex, MCP 클라이언트", "아니요. 프롬프트나 미션으로 움직이는 스웜", "MIT, ~81k"],
        ["oh-my-claudecode", "Claude Code 플러그인(`/autopilot`)", "명시되지 않음", "Claude Code", "아니요. autopilot은 내가 시작한 뒤에 실행돼요", "MIT, ~41k"],
        ["Vibe Kanban", "칸반 보드가 있는 웹 UI", "작업마다 워크스페이스와 브랜치", "Claude Code, Codex, Gemini CLI 등 10개 이상", "아니요. 이슈마다 내가 워크스페이스를 시작해요. 서비스 종료 중이며 커뮤니티가 유지보수", "Apache-2.0, ~29k"],
        ["opcode(구 Claudia)", "데스크톱 GUI", "백그라운드 에이전트는 별도 프로세스", "Claude Code", "아니요", "AGPL-3.0, ~22k"],
        ["CloudCLI(Claude Code UI)", "웹과 모바일 UI", "선택형 Docker 샌드박스", "Claude Code, Codex, Cursor CLI, OpenCode", "아니요", "AGPL-3.0, ~15k"],
        ["Conductor", "Mac 앱", "작업마다 워크스페이스와 브랜치", "Claude Code, Codex, Cursor, OpenCode", "아니요. Meta에 합류하며 클라우드는 2026년 11월 20일 종료", "비공개 소스"],
        ["Paperclip", "웹 UI: 조직도, 목표, 예산을 갖춘 \"AI 회사\"", "선택형 worktree와 샌드박스", "Claude Code, Codex, Gemini CLI, Cursor, OpenCode 등", "예: 예약된 하트비트, 배정과 @멘션", "MIT, ~111k"],
        ["Multica", "웹, 데스크톱, CLI, API", "내 컴퓨터에서 도는 데몬", "Claude Code, Codex, Cursor, Copilot, OpenCode 등", "예: 에이전트가 배정된 이슈를 가져가고, Autopilots는 cron으로 실행", "Multica License(소스 공개), ~55k"],
        ["Crewmark", "웹 보드, CLI, 내 컴퓨터에서 도는 데몬", "직원마다 자기 세션과 체크아웃", "Claude Code, Codex, DeepSeek Harness, OpenCode", "예: 근무 시간 중 하트비트가 다음 이슈를 가져가요", "얼리 액세스"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Claude Code 오케스트레이션 도구 고르는 법",
      steps: [
        {
          title: "내장 기능부터 써 보기",
          text: "직접 배정하는 병렬 작업 몇 개라면 `claude --worktree`와 Agent view만으로 충분할 수 있어요. 큰 변경 하나라면 `/batch`나 워크플로로 여러 서브에이전트에 나눠 맡기세요.",
        },
        {
          title: "실제로 들여다볼 인터페이스 고르기",
          text: "터미널을 좋아하는 사람은 Claude Squad를 선호하는 편이에요. 그렇지 않다면 데스크톱 앱(Orca, opcode)이나 웹 보드(Vibe Kanban, Paperclip, Multica, Crewmark)를 원하는데, 웹 보드는 휴대폰에서도 쓸 수 있어요.",
        },
        {
          title: "다음 작업을 누가 시작할지 정하기",
          text: "대부분의 도구는 내가 조종하는 에이전트를 더 빠르게 해 줄 뿐이에요. 프롬프트 사이에도 에이전트가 계속 일하길 원한다면 보드에 일정이나 하트비트가 더해진 도구를 찾으세요. Paperclip, Multica, Crewmark가 그렇게 해요.",
        },
        {
          title: "격리 방식과 지원 에이전트 확인하기",
          text: "병렬 에이전트에는 별도의 체크아웃이 필요하고, 보통 git worktree를 써요. 팀에서 Claude Code와 Codex나 OpenCode를 섞어 쓴다면, 도구가 기존 구독으로 모두 실행할 수 있는지 확인하세요.",
        },
        {
          title: "프로젝트 상태 확인하기",
          text: "라이선스, 최근 커밋, 상태를 살펴보세요. Vibe Kanban은 회사가 정리 중이고, Conductor는 Meta로 옮겨 가며, Crystal은 새 앱으로 대체됐어요.",
        },
      ],
      source: { label: "출처: Claude Code 문서, Run agents in parallel", href: docs },
    },
    {
      kind: "text",
      title: "도구별 메모",
      points: [
        "Claude Squad([smtg-ai/claude-squad](https://github.com/smtg-ai/claude-squad)): 에이전트마다 tmux 세션과 git worktree를 따로 주는 터미널 앱이에요. `--autoyes`는 확인 요청을 자동으로 수락해요(실험적).",
        "Orca([stablyai/orca](https://github.com/stablyai/orca)): 내 구독으로 데스크톱, 모바일, 원격 머신에서 코딩 에이전트 무리를 돌려요.",
        "Ruflo([ruvnet/ruflo](https://github.com/ruvnet/ruflo)): 스웜과 세션 간 메모리를 갖춘 Claude Code·Codex용 에이전트 메타 하네스예요. `ruvnet/claude-flow`는 이제 여기로 리디렉션돼요.",
        "oh-my-claudecode([Yeachan-Heo/oh-my-claudecode](https://github.com/Yeachan-Heo/oh-my-claudecode)): Claude Code 안에서 계획, 구현, QA를 단계별로 진행하는 워크플로 플러그인이에요.",
        "Vibe Kanban([BloopAI/vibe-kanban](https://github.com/BloopAI/vibe-kanban)): 보드에서 이슈를 계획하고 이슈마다 에이전트 워크스페이스를 시작해요. README에는 서비스를 종료 중이라고 적혀 있어요.",
        "opcode([winfunc/opcode](https://github.com/winfunc/opcode)): 커스텀 에이전트, 세션 기록, 사용량 분석, 체크포인트를 갖춘 Claude Code용 데스크톱 GUI예요.",
        "CloudCLI([siteboon/claudecodeui](https://github.com/siteboon/claudecodeui)): 셸, 파일, git을 갖춘 세션용 웹·모바일 UI예요. 유료 클라우드 버전은 호스팅 컨테이너를 더해 줘요.",
        "Conductor([conductor.build](https://www.conductor.build)): 종료 일정과 작업 이전 방법은 [Conductor 대안](/blog/conductor-alternatives)을 참고하세요.",
        "Paperclip([paperclipai/paperclip](https://github.com/paperclipai/paperclip))과 Multica([multica-ai/multica](https://github.com/multica-ai/multica)): AI 직원에 가장 가까운 두 도구예요. [Paperclip](/alternatives/paperclip), [Multica](/alternatives/multica) 비교도 참고하세요.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Crewmark로",
      title: "입력을 멈춰도 계속 돌아가는 오케스트레이션",
      text: [
        "Crewmark는 Claude Code, Codex, DeepSeek Harness, OpenCode 세션 하나하나를 직무, 목표, 근무 시간을 갖춘 AI 직원으로 바꾸고, 하트비트로 깨워 공유 보드에서 다음 이슈를 가져가게 해요.",
      ],
      steps: [
        {
          title: "일 하나에 직원 한 명",
          text: "프로그래머, 리뷰어, SEO 작가. 각자 자기 세션과 체크아웃, 숫자로 적힌 목표를 가져요. [AI 직원이란](/ai-employees)을 참고하세요.",
        },
        {
          title: "터미널 격자 대신 보드",
          text: "이슈를 배정하면 직원마다 일하면서 댓글을 남기고, 결정이 필요할 때 메시지를 보내요.",
        },
        {
          title: "다음 프롬프트 대신 하트비트",
          text: "근무 시간 동안 직원은 15분, 30분 또는 60분마다 같은 대화 안에서 깨어나요. [Claude Code를 능동적으로 만드는 법](/proactive-claude-code)을 참고하세요.",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Claude Code 오케스트레이션 도구 고르기" },
  mid: {
    title: "에이전트 다섯 개를 돌리면서 프롬프트는 여전히 하나하나 입력하나요?",
    text: "Crewmark는 Claude Code 세션마다 직무, 목표, 하트비트를 줘서, 내가 없어도 다음 이슈를 가져가게 해요.",
    button: "얼리 액세스 신청",
  },
  faq: {
    title: "Claude Code 오케스트레이션 FAQ",
    items: [
      {
        q: "Claude Code 오케스트레이션이란 무엇인가요?",
        a: "Claude Code 에이전트 여러 개를 동시에 실행하고 조율하는 일이에요. 별도의 체크아웃, 별도의 작업, 그리고 각 에이전트가 뭘 하는지 보고 결과를 병합할 방법이 필요해요.",
      },
      {
        q: "Claude Code만으로 에이전트를 오케스트레이션할 수 있나요?",
        a: "네. Subagents, Agent view, Agent teams(실험적), Dynamic workflows, Projects가 모두 내장돼 있고, `--worktree`로 직접 실행하는 세션도 격리할 수 있어요.",
      },
      {
        q: "가장 좋은 Claude Code 오케스트레이션 도구는 무엇인가요?",
        a: "터미널 워크플로라면 Claude Squad, 데스크톱에서 에이전트 무리를 돌리려면 Orca, Claude Code 안에서 스웜을 쓰려면 Ruflo, 보드에서 일정에 따라 계속 일하는 에이전트를 원하면 Paperclip, Multica, Crewmark예요.",
      },
      {
        q: "Claude Code 에이전트를 관리하는 GUI가 있나요?",
        a: "있어요. Orca와 opcode는 데스크톱 앱이고, Vibe Kanban, CloudCLI, Paperclip, Multica는 웹 UI가 있으며, Claude Code 자체 데스크톱 앱도 Worktree 스위치로 병렬 세션을 돌려요.",
      },
      {
        q: "프롬프트 없이 에이전트가 일을 시작하게 해 주는 도구는요?",
        a: "여기서 비교한 도구 중에서는 Paperclip(예약된 하트비트), Multica(배정된 이슈와 cron Autopilots), Crewmark(근무 시간 중 하트비트)예요. 나머지는 내가 시작한 에이전트를 실행해요.",
      },
      {
        q: "이 도구들은 무료인가요?",
        a: "대부분 오픈소스이고 무료로 셀프 호스팅할 수 있어요. Orca, Ruflo, oh-my-claudecode, Paperclip은 MIT, Claude Squad, opcode, CloudCLI는 AGPL-3.0, Vibe Kanban은 Apache-2.0이에요. Multica는 자체 소스 공개 라이선스를 쓰고, Conductor는 비공개 소스예요.",
      },
      {
        q: "Conductor 대신 무엇을 써야 하나요?",
        a: "[Conductor 대안](/blog/conductor-alternatives)을 참고하세요. 핵심 기능은 Claude Code 자체의 `--worktree`와 데스크톱 앱으로 충분하고, 위 도구들이 보드, 에이전트 무리, 일정을 더해 줘요.",
      },
    ],
  },
  cta: {
    title: "Claude Code 에이전트가 다음 작업을 스스로 가져가게 하세요.",
    text: "Crewmark는 Claude Code, Codex, DeepSeek Harness 세션을 직무, 목표, 근무 시간, 하트비트를 갖춘 AI 직원으로 바꿔 줘요.",
    button: "얼리 액세스 신청",
  },
  checked: "2026년 11월 6일에 Claude Code 문서, 각 프로젝트의 README 또는 웹사이트, GitHub API와 대조해 확인했어요.",
  disclaimer:
    "Crewmark는 비교 대상 도구 중 하나예요. 제품명은 각 소유자의 상표이며, 이 페이지는 어떤 프로젝트의 검토나 보증도 받지 않았어요.",
};
