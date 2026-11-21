import type { GuideCopy } from "@/components/landing/guide-article";

// ko translation of /use-cases/pr-review; the English master is src/content/use-cases/pr-review.ts.

const claudeDocs = "https://code.claude.com/docs/en/code-review-local";

const commands = `# Claude Code: 풀 리퀘스트를 리뷰하고 인라인 댓글 달기
/code-review 142 --comment

# Codex: GitHub의 PR 댓글에서 리뷰 요청하기
@codex review
@codex review for issues in the database migration`;

const rules = `## Code Review Rules
- billing/과 auth/에 새로 생긴 분기에 테스트가 없으면 짚어 주세요.
- 모든 SQL 마이그레이션에는 롤백이 있어야 해요. 없으면 말해 주세요.
- 포맷은 댓글로 달지 마세요. 린터가 맡아요.
- 승인도, 변경 요청도 하지 마세요. 댓글만 다세요.`;

export const copy: GuideCopy = {
  meta: {
    title: "Claude Code와 Codex로 모든 PR에 AI 코드 리뷰",
    description:
      "Claude Code와 Codex로 풀 리퀘스트에 AI 코드 리뷰를 받는 세 가지 방법: 인라인 댓글을 다는 /code-review, @codex review와 자동 리뷰, 그리고 보드의 모든 PR을 리뷰하는 AI 직원. 명령어, 복사해 쓸 리뷰 규칙, 한계를 정리했어요.",
  },
  breadcrumb: "모든 PR에 AI 코드 리뷰",
  parent: { name: "활용 사례", href: "/use-cases" },
  hero: {
    kicker: "활용 사례 · 엔지니어링",
    title: "Claude Code와 Codex로 모든 풀 리퀘스트에 AI 코드 리뷰",
    lead: "Claude Code와 Codex 모두 풀 리퀘스트를 리뷰하고 GitHub에 인라인 댓글을 남길 수 있어요. 리뷰를 직접 실행할 수도, 자동으로 시작되게 할 수도, 보드에 올라오는 것을 리뷰하는 일을 AI 직원에게 맡길 수도 있어요. 이 페이지에서는 각 방법의 명령어, 적어 둘 만한 리뷰 규칙, 리뷰어가 하지 않는 일, 그리고 리뷰를 기억날 때만 부탁하는 일이 아니라 상시 업무로 만드는 법을 다뤄요.",
    cta: "시작하기",
    secondary: "명령어 보기",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "table",
      id: "options",
      title: "풀 리퀘스트에 AI 리뷰를 받는 세 가지 방법",
      headers: ["방법", "시작 방식", "실행 위치", "적합한 경우"],
      rows: [
        ["Claude Code `/code-review`", "PR 번호와 함께 직접 실행하고, `--comment`로 인라인 댓글을 달아요", "내 Claude Code 세션, 모든 플랜", "머지 전에 내 브랜치나 PR 리뷰하기"],
        ["Claude Code Review (관리형)", "조직 Owner가 저장소에 켜면, 누구나 `@claude review` 댓글로 요청", "Anthropic의 서비스", "요청 시 리뷰를 원하는 Claude 플랜의 팀"],
        ["Codex 코드 리뷰", "PR 댓글에 `@codex review`, 또는 Codex 설정의 Automatic review", "OpenAI의 클라우드", "ChatGPT 플랜의 팀. GitHub에서 P0, P1 이슈를 짚어요"],
        ["AI 직원", "보드의 리뷰 이슈, 또는 배정된 모든 PR", "하트비트로 돌아가는 내 Claude Code나 Codex", "상시 업무: 모든 PR을 리뷰하고 후속 작업을 추적"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Claude Code나 Codex로 풀 리퀘스트 리뷰하는 법",
      steps: [
        {
          title: "Claude Code: /code-review 실행하기",
          text: "Claude Code 세션에서 `/code-review`는 내 브랜치 변경 사항의 버그를 찾아요. PR 번호를 넘기면 그 풀 리퀘스트를 리뷰하고, `--comment`를 붙이면 결과를 GitHub에 인라인 댓글로 올려요. `--fix`는 대신 내 작업 트리에 수정을 적용해요. `/review`는 별칭이에요.",
          code: commands,
        },
        {
          title: "Codex: @codex review 멘션하기",
          text: "풀 리퀘스트 댓글에 `@codex review`라고 쓰면 Codex가 👀로 반응하고 리뷰를 올려요. 원하면 뒤에 집중할 부분을 덧붙이세요. 요청 없이 리뷰받으려면 Codex 설정에서 Automatic review를 켜고 트리거를 고르세요.",
        },
        {
          title: "리뷰 규칙 적어 두기",
          text: "Codex는 코드에서 가장 가까운 AGENTS.md의 `## Code Review Rules` 섹션을 읽어요. Claude Code라면 같은 규칙을 CLAUDE.md에 넣으세요. 규칙이 있으면 리뷰가 일관되고, 린터가 이미 다루는 주제로 새지 않아요.",
          code: rules,
        },
      ],
      source: { label: "출처: Claude Code 문서, /code-review로 로컬에서 리뷰하기", href: claudeDocs },
    },
    {
      kind: "text",
      id: "limits",
      title: "AI 리뷰가 하지 않는 일",
      points: [
        "승인이나 차단: Claude의 관리형 Code Review는 풀 리퀘스트를 승인하거나 막지 않아요. 좋은 리뷰 브리프는 직원에게 댓글만 달라고 해요.",
        "변경을 책임지는 사람을 대신하기: 버그와 빠진 테스트는 잡아내지만, 제품과 디자인 판단은 사람에게 남아요.",
        "모든 것을 보기: GitHub의 Codex는 댓글을 집중시키려고 P0와 P1 이슈만 짚어요. 필요하면 특정 초점을 요청하세요.",
        "공짜: 리뷰는 플랜 사용량을 써요. 푸시할 때마다가 아니라 요청할 때나 ready-for-review일 때 리뷰하세요.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Crewmark로",
      title: "리뷰를 누군가의 업무로 만들기",
      text: [
        "명령어는 누군가 실행할 걸 기억할 때만 리뷰해요. AI 직원은 그게 업무라서 리뷰해요. Crewmark는 내 Claude Code나 Codex를 하트비트에 깨어나 리뷰를 기다리는 풀 리퀘스트를 맡아 댓글을 다는 엔지니어로 바꿔 줘요.",
      ],
      steps: [
        {
          title: "역할에서 시작하기",
          text: "[AI 소프트웨어 엔지니어](/ai-employees/software-engineer)의 브리프에 내 리뷰 규칙을 넣으세요.",
        },
        {
          title: "리뷰를 보드로 보내기",
          text: "리뷰 이슈를 배정하거나, ready로 표시된 열린 풀 리퀘스트를 모두 리뷰하는 반복 이슈를 추가하세요.",
        },
        {
          title: "엔지니어링의 다른 일",
          text: "[엔지니어링을 위한 Claude Code](/for/engineering)와 [Sentry 오류 분류](/use-cases/sentry-error-triage)를 참고하세요.",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Claude Code나 Codex로 풀 리퀘스트 리뷰하기" },
  mid: {
    title: "요청하지 않아도 모든 풀 리퀘스트가 리뷰되길 원하세요?",
    text: "내 Claude Code나 Codex에서 돌아가는 Crewmark 엔지니어가 하트비트에 맞춰 대기 중인 것을 리뷰해요.",
    button: "시작하기",
  },
  faq: {
    title: "자주 묻는 질문",
    items: [
      {
        q: "Claude Code로 풀 리퀘스트를 어떻게 리뷰하나요?",
        a: "Claude Code 세션에서 `/code-review <PR number> --comment`를 실행하면 결과가 GitHub에 인라인 댓글로 올라가요. `--comment` 없이 실행하면 세션 안에 보고하고, `--fix`는 수정을 로컬에 적용해요.",
      },
      {
        q: "Claude Code에서 /review와 /code-review는 같은 건가요?",
        a: "Claude Code 문서에는 `/review`가 `/code-review`의 별칭으로 나와 있어요.",
      },
      {
        q: "Codex가 풀 리퀘스트를 리뷰하게 하려면 어떻게 하나요?",
        a: "풀 리퀘스트에 `@codex review` 댓글을 달거나, Codex 설정에서 Automatic review를 켜서 내가 고른 트리거에 리뷰가 시작되게 하세요. 저장소에 코드 리뷰가 활성화돼 있어야 해요.",
      },
      {
        q: "AI 리뷰어에게 팀의 규칙을 줄 수 있나요?",
        a: "네. Codex는 AGENTS.md의 `## Code Review Rules` 섹션을 읽고, Claude Code라면 같은 규칙을 CLAUDE.md에 넣으면 돼요.",
      },
      {
        q: "AI가 풀 리퀘스트를 승인하거나 머지하나요?",
        a: "Claude의 관리형 Code Review는 승인하거나 막지 않고, 머지는 사람이 계속 해야 해요. AI 직원의 브리프에도 댓글만 달라고 써 두세요.",
      },
    ],
  },
  cta: {
    title: "누가 기억해서 부탁하지 않아도, 모든 풀 리퀘스트가 리뷰돼요.",
    text: "Crewmark는 Claude Code와 Codex 세션을 역할, 목표, 근무 시간, 하트비트를 갖춘 AI 직원으로 바꿔 줘요.",
    button: "시작하기",
  },
  checked: "2026년 11월 10일에 Claude Code의 코드 리뷰 문서와 OpenAI의 Codex 코드 리뷰 문서와 대조해 확인했습니다.",
  disclaimer:
    "Crewmark는 독립 제품으로, Anthropic, OpenAI, GitHub와 제휴하거나 그 보증을 받지 않았습니다. 제품명은 각 소유자의 상표입니다.",
};
