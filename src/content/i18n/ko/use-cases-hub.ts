import type { GuideCopy } from "@/components/landing/guide-article";

// ko translation of /use-cases; the English master is src/content/use-cases-hub.ts.

export const copy: GuideCopy = {
  meta: {
    title: "Claude Code와 Codex로 하는 AI 직원 활용 사례",
    description:
      "Claude Code나 Codex 위의 AI 직원에게 맡길 수 있는 일을 팀별로 모았어요. 각각 복사해 쓸 직무 설명과 실행 일정이 함께 있어요: 일일 SEO 리포트, 주간 경쟁사 다이제스트 등.",
  },
  breadcrumb: "활용 사례",
  hero: {
    kicker: "활용 사례",
    title: "AI 직원 활용 사례: Claude Code와 Codex에 맡길 일",
    lead: "활용 사례 하나는 AI 직원이 일정에 맞춰 하는 일 하나예요. 무엇을 하는지, CLAUDE.md나 AGENTS.md에 복사할 직무 설명, 필요한 권한, 실행 방법을 담았어요. 보통 그 일을 맡는 팀별로 묶었고, 모두 Claude Code나 Codex에서 일회성 프롬프트로도 쓸 수 있어요.",
    cta: "시작하기",
    secondary: "활용 사례 둘러보기",
    secondaryHref: "#use-cases",
  },
  sections: [
    {
      kind: "table",
      id: "teams",
      title: "팀별",
      headers: ["팀", "맡기는 일"],
      rows: [
        ["[마케팅](/for/marketing)", "SEO 페이지와 리포트, 경쟁사 추적, 소셜 초안, 퍼널 검토"],
        ["[엔지니어링](/for/engineering)", "오류 분류, 풀 리퀘스트 리뷰, 이슈에서 풀 리퀘스트까지, 릴리스 노트"],
      ],
    },
    {
      kind: "table",
      id: "use-cases",
      title: "활용 사례",
      headers: ["활용 사례", "팀", "빈도"],
      rows: [
        ["[일일 SEO 리포트](/use-cases/daily-seo-report)", "마케팅", "매일"],
        ["[주간 경쟁사 다이제스트](/use-cases/weekly-competitor-digest)", "마케팅", "매주"],
        ["[Sentry 오류 분류](/use-cases/sentry-error-triage)", "엔지니어링", "하루 두 번"],
        ["[모든 PR에 AI 코드 리뷰](/use-cases/pr-review)", "엔지니어링", "PR마다"],
      ],
    },
    {
      kind: "text",
      id: "good-first-jobs",
      title: "처음 맡기기 좋은 일",
      points: [
        "반복되는 일: 매일이나 매주 하는 일이 설정 비용을 가장 빨리 뽑아요.",
        "끝이 분명한 일: 리포트 게시, 페이지 출시, 다이제스트 발송처럼요.",
        "확인하기 쉬운 일: 제대로 됐는지 1분이면 알 수 있어요.",
        "최종 결정은 내가: 게시, 지출, 공개되는 모든 것은 사람을 거쳐요.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Crewmark로",
      title: "이 중 무엇이든 AI 직원에게 맡기세요",
      text: [
        "Crewmark는 내 Claude Code나 Codex를 직무, 수치 목표, 근무 시간, 하트비트를 갖춘 AI 직원으로 바꿔요. 반복되는 일은 보드에서 반복 이슈가 돼요.",
      ],
      steps: [
        {
          title: "직무 고르기",
          text: "[AI 직원 직무](/ai-employees)에서 고르세요.",
        },
        {
          title: "일을 이슈로 추가하기",
          text: "매일, 매주 하는 일은 알아서 반복돼요. 때가 되면 직원이 하나씩 가져가요.",
        },
        {
          title: "물어볼 때 답하기",
          text: "결정이 필요하면 이슈를 '조치 필요'로 표시하고 물어봐요. 나머지는 모두 보드에 있어요.",
        },
      ],
    },
  ],
  mid: {
    title: "이런 일을 일정에 맞춰 끝내고 싶으세요?",
    text: "Crewmark 직원은 내 Claude Code나 Codex에서 일하며 보드에서 다음 일을 가져가요.",
    button: "시작하기",
  },
  faq: {
    title: "자주 묻는 질문",
    items: [
      {
        q: "AI 직원은 무엇을 할 수 있나요?",
        a: "파일, 웹, 내가 쓰는 도구로 할 수 있는 반복 업무예요. 분석 데이터로 쓰는 리포트, 사이트 페이지, 경쟁사 추적, 검토용 초안, 분류 작업 등이요. 목표를 향해 일하고 일정에 맞춰 보고해요.",
      },
      {
        q: "코딩 말고 Claude Code를 잘 쓰는 방법은 뭐가 있나요?",
        a: "마케팅이 가장 시작하기 쉬워요. SEO 페이지와 리포트, 경쟁사 다이제스트, 콘텐츠 초안이요. [마케팅을 위한 Claude Code](/for/marketing)를 보세요. 코드 작성 말고 엔지니어링 업무는 [엔지니어링을 위한 Claude Code](/for/engineering)를 참고하세요.",
      },
      {
        q: "Codex에서도 되나요?",
        a: "네. 모든 직무 설명은 Claude Code의 CLAUDE.md뿐 아니라 Codex의 AGENTS.md에서도 동작해요.",
      },
    ],
  },
  cta: {
    title: "일을 하나 고르세요. AI 직원에게 맡기세요.",
    text: "Crewmark는 Claude Code와 Codex 세션을 직무, 목표, 근무 시간, 하트비트를 갖춘 AI 직원으로 바꿔 줘요.",
    button: "시작하기",
  },
  checked: "2026년 11월 10일에 업데이트했습니다.",
  disclaimer:
    "Crewmark는 독립 제품으로, Anthropic이나 OpenAI와 제휴하거나 그 보증을 받지 않았습니다. Claude, Claude Code, Codex는 각 소유자의 상표입니다.",
};
