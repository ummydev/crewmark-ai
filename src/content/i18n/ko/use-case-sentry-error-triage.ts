import type { GuideCopy } from "@/components/landing/guide-article";

// ko translation of /use-cases/sentry-error-triage; the English master is src/content/use-cases/sentry-error-triage.ts.

const docs = "https://docs.sentry.io/ai/mcp/";

const connect = `# Claude Code: Sentry가 호스팅하는 MCP 서버를 추가한 뒤 OAuth로 로그인
claude mcp add --transport http sentry https://mcp.sentry.dev/mcp

# Codex: mcp-remote 브리지를 통해
codex mcp add sentry -- npx -y mcp-remote@latest https://mcp.sentry.dev/mcp`;

const brief = `# 역할: 오류 분류
반복 이슈 "Sentry triage"로 평일 9:00와 14:00에 실행돼요.

1. Sentry에서 프로덕션 환경의 미해결 이슈 중 지난 실행 이후
   처음 발생했거나 재발한 것을 나열해요.
2. 각각에 대해 보드에 이미 이슈가 있는지 확인해요(Sentry 이슈 ID로
   검색). 있으면 새 발생 횟수를 댓글로 달아요.
3. 없으면 이슈를 열어요: 오류에서 딴 제목, 영향받은 사용자와 이벤트 수,
   처음과 마지막 발생 시각, 상위 스택 프레임, 문제가 시작된 릴리스,
   그리고 원인에 대한 최선의 추측(추측이라고 표시).
4. 우선순위: 가입, 결제, 데이터를 막으면 Urgent, 세션의 1% 이상에
   영향을 주면 High, 그 밖에는 Medium.
5. 수정이 작고 명확하면 다음 이슈로 맡아 테스트와 함께
   풀 리퀘스트를 열어요. 머지는 하지 않아요.
6. Sentry에서 직접 해결, 무시, 삭제는 절대 하지 않아요.`;

export const copy: GuideCopy = {
  meta: {
    title: "Claude Code나 Codex로 매일 Sentry 오류 분류하기",
    description:
      "Claude Code나 Codex 위의 AI 직원이 하루 두 번 새 Sentry 오류를 읽고, 스택·영향·추정 원인과 함께 보드에 이슈로 올리고, 작은 것은 수정 풀 리퀘스트까지 열게 하세요. 복사해 쓸 Sentry MCP 설정과 역할 브리프를 정리했어요.",
  },
  breadcrumb: "Sentry 오류 분류",
  parent: { name: "활용 사례", href: "/use-cases" },
  hero: {
    kicker: "활용 사례 · 엔지니어링",
    title: "Claude Code나 Codex 위의 AI 직원이 하는 Sentry 오류 분류",
    lead: "Sentry에는 누가 읽는 속도보다 빠르게 새 오류가 쌓여요. 내 Claude Code나 Codex에서 돌아가는 AI 직원은 정해진 일정에 Sentry를 확인하고, 이미 보드에 있는 건 건너뛰고, 새 오류마다 스택 트레이스, 영향받은 사용자, 추정 원인을 담아 이슈로 올리고, 작은 수정은 직접 맡아 검토용 풀 리퀘스트를 열어요. Sentry MCP 서버 연결법, 복사해 쓸 브리프, 안전하게 지키는 규칙을 소개할게요.",
    cta: "시작하기",
    secondary: "Sentry 연결하기",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "직원이 하는 일",
      points: [
        "지난 실행 이후 새로 생겼거나 재발한 미해결 Sentry 이슈를 읽어요.",
        "보드와 대조해 중복을 걸러요. 시끄러운 오류에는 새 이슈 열 개가 아니라 댓글 하나가 달려요.",
        "쓸모 있는 이슈를 올려요: 영향, 처음과 마지막 발생 시각, 시작된 릴리스, 상위 스택 프레임, 그리고 추측이라고 분명히 표시한 추정 원인.",
        "가입이나 결제를 막는 건 무엇이든 긴급처럼, 내가 정한 규칙에 따라 우선순위를 매겨요.",
        "명확한 건 고쳐요: null 체크, 빠진 번역 키, 잘못된 리디렉션 같은 것들이요. 테스트와 함께 풀 리퀘스트를 열고 검토를 기다려요.",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Claude Code나 Codex에서 Sentry 분류 설정하는 법",
      steps: [
        {
          title: "Sentry MCP 서버 연결하기",
          text: "Sentry는 mcp.sentry.dev에 OAuth를 쓰는 MCP 서버를 호스팅해서, 설치할 것도 붙여 넣을 토큰도 없어요. 서버를 추가하고 에이전트를 시작한 다음, 요청이 오면 Sentry에 로그인하세요. 에이전트가 Sentry의 이슈, 오류, 프로젝트, Seer 분석을 볼 수 있게 돼요.",
          code: connect,
        },
        {
          title: "역할 브리프 복사하기",
          text: "오류가 나오는 저장소의 CLAUDE.md(Claude Code)나 AGENTS.md(Codex)에 넣으세요. 그래야 각 스택 프레임 뒤의 코드를 읽을 수 있어요.",
          code: brief,
        },
        {
          title: "일정에 올리기",
          text: "분류를 반복 이슈로 만드세요. 예를 들어 `--repeat \"weekdays at 9:00\"`로 만들고, 오류가 많다면 오후에 하나 더 두세요.",
        },
        {
          title: "수정 검토하기",
          text: "수정 풀 리퀘스트는 평소 검토 절차를 거쳐요. 직원이 영향이나 담당자를 확신하지 못하면 이슈를 Needs action으로 표시하고 물어봐요.",
        },
      ],
      source: { label: "출처: Sentry MCP 서버 문서", href: docs },
    },
    {
      kind: "text",
      id: "rules",
      title: "안전하게 지키는 규칙",
      points: [
        "Sentry는 읽고, 보드에 쓰기. Sentry에서 해결, 무시, 삭제하는 일은 사람에게 남겨 두세요.",
        "프로덕션만: 프로덕션 환경을 가리키게 해서 스테이징의 잡음은 올리지 않게 하세요.",
        "추측은 추측: 각 이슈의 원인은 누군가 확인하기 전까지 가설로 표시해요.",
        "머지 금지: 수정은 테스트가 붙은 풀 리퀘스트로만, 직접 푸시는 절대 안 돼요.",
        "개인 정보: Sentry 이벤트에는 사용자 정보가 들어 있을 수 있어요. 이슈에는 이메일이나 IP 대신 횟수와 ID만 남기세요.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Crewmark로",
      title: "내 오류로 하루를 시작하는 엔지니어",
      text: [
        "분류는 AI 소프트웨어 엔지니어에게 자연스러운 반복 이슈예요. Crewmark는 내 Claude Code나 Codex를 근무 시간과 하트비트를 갖춘 그런 직원으로 바꿔 줘요.",
      ],
      steps: [
        {
          title: "역할에서 시작하기",
          text: "[AI 소프트웨어 엔지니어](/ai-employees/software-engineer)는 보드에서 이슈를 맡아 풀 리퀘스트를 열어요.",
        },
        {
          title: "분류를 반복 이슈로 추가하기",
          text: "때가 되면 분류를 돌리고, 그다음 자기가 올린 이슈를 차례로 처리해요.",
        },
        {
          title: "엔지니어링의 다른 일",
          text: "[엔지니어링을 위한 Claude Code](/for/engineering)와 [모든 풀 리퀘스트에 AI 코드 리뷰](/use-cases/pr-review)를 참고하세요.",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Claude Code나 Codex에서 Sentry 오류 분류 설정하기" },
  mid: {
    title: "스탠드업 전에 새 오류는 올라가 있고 작은 건 고쳐져 있길 원하세요?",
    text: "내 Claude Code나 Codex에서 돌아가는 Crewmark 엔지니어가 정해진 일정에 Sentry를 분류하고 수정 풀 리퀘스트를 열어요.",
    button: "시작하기",
  },
  faq: {
    title: "자주 묻는 질문",
    items: [
      {
        q: "Sentry를 Claude Code에 어떻게 연결하나요?",
        a: "`claude mcp add --transport http sentry https://mcp.sentry.dev/mcp`를 실행하고 Claude Code를 시작한 뒤, 요청이 오면 OAuth로 Sentry에 로그인하세요. 서버는 Sentry가 호스팅해서 설치할 게 없어요.",
      },
      {
        q: "Sentry MCP 서버는 Codex에서도 되나요?",
        a: "네, mcp-remote 브리지를 통해서요: `codex mcp add sentry -- npx -y mcp-remote@latest https://mcp.sentry.dev/mcp`.",
      },
      {
        q: "에이전트가 Sentry 이슈를 해결 처리할 수 있나요?",
        a: "허용할 수는 있지만 권하지 않아요. 이슈 등록과 수정은 맡기고, 해결과 무시는 사람이 해야 실수로 무언가가 묻히지 않아요.",
      },
      {
        q: "분류는 얼마나 자주 돌려야 하나요?",
        a: "대부분의 팀은 평일 하루 두 번이면 충분하고, 출시 기간에는 매시간 실행을 더하세요. 실행할 때마다 에이전트 플랜 사용량을 쓰니 몇 분마다 돌리지는 마세요.",
      },
      {
        q: "이슈는 어디로 가나요?",
        a: "팀이 일을 관리하는 곳이면 어디든요. Crewmark에서는 직원이 일하는 바로 그 보드로 가고, 아니라면 Linear나 GitHub 같은 트래커의 MCP 서버나 CLI를 쓰세요.",
      },
    ],
  },
  cta: {
    title: "커피를 마시기도 전에 오류는 올라가 있고, 작은 건 고쳐져 있어요.",
    text: "Crewmark는 Claude Code와 Codex 세션을 역할, 목표, 근무 시간, 하트비트를 갖춘 AI 직원으로 바꿔 줘요.",
    button: "시작하기",
  },
  checked: "2026년 11월 10일에 Sentry MCP 서버 문서와 대조해 확인했습니다.",
  disclaimer:
    "Crewmark는 독립 제품으로, Sentry, Anthropic, OpenAI와 제휴하거나 그 보증을 받지 않았습니다. 제품명은 각 소유자의 상표입니다.",
};
