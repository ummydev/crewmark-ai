import type { GuideCopy } from "@/components/landing/guide-article";

// ko translation of /for/engineering; the English master is src/content/use-cases/for-engineering.ts.

const prompts = `하루 두 번, 프로덕션에서 새로 생기거나 다시 발생한 Sentry 오류를 읽고
보드에 없는 것은 영향과 유력한 원인을 적어 이슈로 등록해 줘.
한 줄로 고칠 수 있는 건 풀 리퀘스트를 열어 줘.

리뷰 준비가 된 풀 리퀘스트는 모두 AGENTS.md의 규칙에 따라 리뷰해 줘.
코멘트만 달고, 승인이나 머지는 절대 하지 마.

매주 금요일, 이번 주에 머지된 풀 리퀘스트로 릴리스 노트를 써 줘.
사용자 입장에서 무엇이 바뀌었는지 영역별로 묶고 링크를 달아 줘.

"good first issue" 라벨이 붙은 다음 이슈를 가져가서 자기 git worktree에서
작업하고, 테스트와 함께 풀 리퀘스트를 열어 줘.`;

export const copy: GuideCopy = {
  meta: {
    title: "엔지니어링 팀을 위한 Claude Code: 결과를 내는 AI 직원",
    description:
      "엔지니어링 팀이 Claude Code와 Codex를 AI 직원으로 쓰는 법: 오류 분류, 코드 리뷰, 이슈에서 풀 리퀘스트까지, 릴리스 노트, 야간 근무를 일정에 맞춰요. 직무, 활용 사례, 복사해 쓸 프롬프트, 머지는 사람이 맡도록 지키는 규칙까지.",
  },
  breadcrumb: "엔지니어링을 위한 Claude Code",
  parent: { name: "활용 사례", href: "/use-cases" },
  hero: {
    kicker: "엔지니어링 팀을 위해",
    title: "엔지니어링 팀을 위한 Claude Code: 다음 이슈를 스스로 가져가는 AI 직원",
    lead: "대부분의 팀은 누군가 앉아서 프롬프트를 줄 때만 Claude Code나 Codex를 써요. 더 큰 효과는 상시 업무를 맡길 때 나와요. 매일 아침 새 오류를 분류하고, 준비된 풀 리퀘스트를 모두 리뷰하고, 보드에서 다음 이슈를 가져가 풀 리퀘스트를 열고, 금요일에는 릴리스 노트를 써요. 이 페이지에서는 어떤 엔지니어링 업무를 맡길지, 여러 에이전트가 서로 부딪히지 않게 돌리는 법, 복사해 쓸 프롬프트, 머지는 사람이 맡도록 지키는 규칙을 다뤄요.",
    cta: "시작하기",
    secondary: "맡길 일 보기",
    secondaryHref: "#jobs",
  },
  sections: [
    {
      kind: "table",
      id: "jobs",
      title: "엔지니어링 팀이 AI 직원에게 맡기는 일",
      headers: ["업무", "빈도", "가이드"],
      rows: [
        ["새 Sentry 오류 분류, 작은 건 수정", "하루 두 번", "[Sentry 오류 분류](/use-cases/sentry-error-triage)"],
        ["준비된 풀 리퀘스트 리뷰", "PR마다", "[모든 PR에 AI 코드 리뷰](/use-cases/pr-review)"],
        ["다음 이슈를 가져가 풀 리퀘스트 열기", "상시", "[AI 소프트웨어 엔지니어](/ai-employees/software-engineer)"],
        ["밤새 백로그 처리", "매일 밤", "[Claude Code 24시간 돌리기](/blog/run-claude-code-24-7), [Codex 장시간 작업](/blog/codex-long-running-tasks)"],
        ["머지된 풀 리퀘스트로 릴리스 노트 작성", "매주", "아래 프롬프트"],
        ["보드를 최신으로 유지: 상태, 코멘트, 링크", "이슈마다", "[Claude Code 칸반](/blog/claude-code-kanban)"],
      ],
    },
    {
      kind: "steps",
      id: "prompts",
      title: "복사해 쓸 프롬프트",
      text: ["모두 AI 직원의 반복 이슈로 쓸 수도 있고, Claude Code나 Codex에서 일회성 프롬프트로 쓸 수도 있어요."],
      steps: [
        {
          title: "업무 네 가지, 한 문장씩",
          text: "이름과 일정을 내 것으로 바꾸세요. 앞의 두 가지는 설정까지 담은 전체 가이드가 있어요: [Sentry 오류 분류](/use-cases/sentry-error-triage)와 [AI 코드 리뷰](/use-cases/pr-review).",
          code: prompts,
        },
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Claude Code나 Codex로 AI 엔지니어 꾸리는 법",
      steps: [
        {
          title: "규칙은 한 번만 쓰기",
          text: "빌드·테스트 명령, 컨벤션, 리뷰 규칙을 CLAUDE.md나 AGENTS.md에 적어 두면 모든 세션이 같은 출발점에서 시작해요. [CLAUDE.md](/blog/claude-md)와 [Codex용 AGENTS.md](/blog/codex-agents-md)를 참고하세요.",
        },
        {
          title: "에이전트마다 worktree 따로 주기",
          text: "에이전트 둘이 한 체크아웃을 고치면 서로 덮어써요. 에이전트마다 git worktree를 쓰세요. [Claude Code worktree](/blog/claude-code-worktree)와 [여러 Claude Code 에이전트 돌리기](/blog/multiple-claude-code-agents)를 참고하세요.",
        },
        {
          title: "업무에 필요한 도구 연결하기",
          text: "GitHub는 CLI로, Sentry는 호스팅 MCP 서버로, 이슈 트래커는 MCP 서버나 CLI로 연결하세요. 둘 다 있다면 CLI를 쓰세요. 토큰이 덜 들어요.",
        },
        {
          title: "머지는 사람이 맡기",
          text: "에이전트는 풀 리퀘스트를 열고 코멘트를 달고, 승인과 머지는 사람이 해요. 결정이 필요하면 직원이 이슈를 '조치 필요'로 표시하고 물어봐요.",
        },
      ],
    },
    {
      kind: "text",
      id: "expect",
      title: "기대할 수 있는 것",
      points: [
        "작고 설명이 잘된 이슈가 가장 잘 돼요. 스택 트레이스가 있는 버그, 빠진 테스트, 여러 파일에 걸친 문구 수정 같은 것들이요.",
        "큰 기능은 여전히 사람이 이슈로 쪼개야 해요. 에이전트는 조각에는 강하지만 계획에는 덜 강해요.",
        "사용량은 내 Claude나 ChatGPT 요금제에서 나가요. 무거운 업무는 한도 안에서 근무 시간이나 밤으로 일정을 잡으세요.",
        "리뷰 부담은 사라지지 않고 옮겨 가요. 풀 리퀘스트가 늘면 리뷰할 것도 늘어요. 그래서 AI 리뷰가 이 목록에 있어요.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Crewmark로",
      title: "보드, 근무 시간, 하트비트를 갖춘 엔지니어",
      text: [
        "Crewmark는 내 Claude Code나 Codex를 AI 직원으로 바꿔요. 직원마다 직무, 수치 목표, 근무 시간, 하트비트가 있고, 공유 보드에서 다음 이슈를 가져가 일하면서 코멘트를 달고, 리뷰용 풀 리퀘스트를 열어요.",
      ],
      steps: [
        {
          title: "직무 채용하기",
          text: "[AI 소프트웨어 엔지니어](/ai-employees/software-engineer)부터 시작하세요.",
        },
        {
          title: "상시 업무를 반복 이슈로 추가하기",
          text: "분류, 리뷰, 릴리스 노트가 각자의 일정에 맞춰 돌아와요.",
        },
        {
          title: "다른 팀도 보기",
          text: "마케팅 팀도 같은 설정을 써요: [마케팅을 위한 Claude Code](/for/marketing). 모든 업무는 [활용 사례](/use-cases)에 있어요.",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Claude Code나 Codex로 AI 엔지니어 꾸리기" },
  mid: {
    title: "다음 이슈를 스스로 가져가는 엔지니어가 필요하세요?",
    text: "Crewmark 직원은 내 Claude Code나 Codex에서 일하고, 하트비트에 맞춰 깨어나 리뷰용 풀 리퀘스트를 열어요.",
    button: "시작하기",
  },
  faq: {
    title: "자주 묻는 질문",
    items: [
      {
        q: "엔지니어링 팀에 가장 좋은 Claude Code 활용 사례는 뭔가요?",
        a: "반복되고 끝이 분명한 일이에요. 오류 분류, 풀 리퀘스트 리뷰, 스택 트레이스가 있는 작은 버그, 테스트, 릴리스 노트, 보드 최신 유지 등이요. 큰 기능은 여전히 사람이 계획해야 해요.",
      },
      {
        q: "Claude Code 에이전트 여러 개가 한 저장소에서 일할 수 있나요?",
        a: "네, 에이전트마다 git worktree와 이슈가 따로 있다면요. [여러 Claude Code 에이전트 돌리기](/blog/multiple-claude-code-agents)와 [agent teams](/blog/claude-code-agent-teams)를 참고하세요.",
      },
      {
        q: "Codex에서도 되나요?",
        a: "네. 같은 업무와 규칙이 Codex에서도 동작해요. 규칙은 AGENTS.md에 넣으세요.",
      },
      {
        q: "AI 에이전트가 자기 풀 리퀘스트를 머지해도 되나요?",
        a: "아니요. 풀 리퀘스트를 열고 코멘트를 다는 데까지만 맡기고, 승인과 머지는 사람이 하세요.",
      },
      {
        q: "Devin 같은 클라우드 에이전트와 뭐가 다른가요?",
        a: "클라우드 에이전트는 작업을 할당할 때마다 업체의 클라우드에서 실행해요. Crewmark는 내 요금제로 내 Claude Code나 Codex를 돌리고, 상시 업무를 일정에 맞춰 처리해요. [Devin 대안](/blog/devin-alternatives)을 참고하세요.",
      },
    ],
  },
  cta: {
    title: "다음 이슈를 가져가는 AI 직원을 엔지니어링 팀에 두세요.",
    text: "Crewmark는 Claude Code와 Codex 세션을 직무, 목표, 근무 시간, 하트비트를 갖춘 AI 직원으로 바꿔 줘요.",
    button: "시작하기",
  },
  checked: "2026년 11월 10일에 작성했고, 같은 날 도구 관련 사실을 Sentry, Anthropic, OpenAI 문서와 대조해 확인했습니다.",
  disclaimer:
    "Crewmark는 독립 제품으로, Anthropic, OpenAI, GitHub, Sentry와 제휴하거나 그 보증을 받지 않았습니다. 제품명은 각 소유자의 상표입니다.",
};
