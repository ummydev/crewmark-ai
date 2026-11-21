import type { GuideCopy } from "@/components/landing/guide-article";

// ko translation of /for/marketing; the English master is src/content/use-cases/for-marketing.ts.

const install = `# Crewmark의 오픈소스 마케팅 스킬을 쓰고 있는 에이전트에 설치
npx skills add ummydev/marketing-team-skills

# 또는 Claude Code 플러그인으로
/plugin marketplace add ummydev/marketing-team-skills
/plugin install marketing-team-skills`;

const prompts = `매일 저녁, 최근 7일간의 Search Console과 분석 데이터를 읽고
무엇이 잘되고 있는지 알려 줘. 그걸 살릴 일을 하나 하고,
리포트를 "일일 SEO 리포트" 이슈에 올려 줘.

매주 월요일, competitors.md에 있는 가격 페이지와 변경 로그를
확인해서 지난주와 비교하고, 무엇이 바뀌었는지, 우리 비교 페이지 중
어떤 걸 업데이트해야 하는지 알려 줘.

이번 주 블로그 글을 우리 말투로 LinkedIn과 X 초안 다섯 개로 바꿔 줘.
검토할 수 있게 보드에 올리고, 게시는 하지 마.

매주 금요일, PostHog에서 가입과 활성화 수치를 가져와 지난주와
비교하고, 다음 주에 시도할 세 가지를 써 줘.`;

export const copy: GuideCopy = {
  meta: {
    title: "마케팅을 위한 Claude Code: 팀을 위한 AI 직원",
    description:
      "마케팅 팀이 Claude Code와 Codex를 AI 직원으로 쓰는 법: SEO, 콘텐츠, 소셜, 경쟁사 추적, 리포트를 일정에 맞춰요. 복사해 쓸 직무, 활용 사례, 프롬프트, 스킬과 내 확인 없이는 아무것도 나가지 않게 설정하는 법까지.",
  },
  breadcrumb: "마케팅을 위한 Claude Code",
  parent: { name: "활용 사례", href: "/use-cases" },
  hero: {
    kicker: "마케팅 팀을 위해",
    title: "마케팅을 위한 Claude Code: 반복 업무를 맡는 AI 직원",
    lead: "Claude Code와 Codex는 엔지니어만 쓰는 도구가 아니에요. 직무, 알맞은 스킬, 일정만 주면 같은 에이전트가 사이트 페이지를 쓰고 고치고, 색인되게 하고, 출시한 내용으로 게시물 초안을 쓰고, 경쟁사를 지켜보고, 매일 수치를 보고해요. Crewmark의 마케팅도 이렇게 돌아가요. 이 페이지에서는 어떤 일을 맡길지, 그 일을 하는 직무, 복사해 쓸 프롬프트와 스킬, 공개되는 것은 반드시 사람을 거치도록 설정하는 법을 다뤄요.",
    cta: "시작하기",
    secondary: "맡길 일 보기",
    secondaryHref: "#jobs",
  },
  sections: [
    {
      kind: "table",
      id: "jobs",
      title: "마케팅 팀이 AI 직원에게 맡기는 일",
      text: [
        "처음 맡기기 가장 좋은 일은 매일이나 매주 반복되고, 끝이 분명하며, 최종 결정은 내게 남는 일이에요.",
      ],
      headers: ["업무", "빈도", "담당", "가이드"],
      rows: [
        ["SEO 리포트: 트래픽, 잘되는 것, 목표까지 남은 차이", "매일", "SEO 전문가", "[일일 SEO 리포트](/use-cases/daily-seo-report)"],
        ["경쟁사 가격, 출시, 문서 변경", "매주", "마케팅 에이전트", "[주간 경쟁사 다이제스트](/use-cases/weekly-competitor-digest)"],
        ["반응이 오기 시작한 키워드용 새 페이지", "매일", "SEO 전문가", "[AI SEO 전문가](/ai-employees/seo-specialist)"],
        ["비교·대안 페이지를 최신으로 유지", "매주", "SEO 전문가", "[경쟁사 페이지 스킬](/skills)"],
        ["출시한 내용으로 쓰는 소셜 게시물 초안", "매일", "소셜 미디어 매니저", "[AI 소셜 미디어 매니저](/ai-employees/social-media-manager)"],
        ["퍼널 수치와 시도할 실험", "매주", "마케팅 에이전트", "[AI 마케팅 에이전트](/ai-employees/marketing-agent)"],
        ["이미 검색 트래픽이 있는 페이지 번역", "필요할 때", "SEO 전문가", "[다국어 SEO 스킬](/skills)"],
      ],
    },
    {
      kind: "steps",
      id: "prompts",
      title: "복사해 쓸 프롬프트",
      text: [
        "모두 AI 직원의 반복 이슈로 쓸 수도 있고, Claude Code나 Codex에서 일회성 프롬프트로 쓸 수도 있어요.",
      ],
      steps: [
        {
          title: "업무 네 가지, 한 문장씩",
          text: "이름과 숫자를 내 것으로 바꾸세요. 앞의 두 가지는 직무 설명까지 담은 전체 가이드가 있어요: [일일 SEO 리포트](/use-cases/daily-seo-report)와 [주간 경쟁사 다이제스트](/use-cases/weekly-competitor-digest).",
          code: prompts,
        },
      ],
    },
    {
      kind: "steps",
      id: "skills",
      title: "설치할 Claude Code 마케팅 스킬",
      text: [
        "스킬은 업무마다 에이전트에게 단계를 알려 줘서, 세션마다 설명할 필요가 없어요.",
      ],
      steps: [
        {
          title: "Marketing Team Skills (Crewmark, 오픈소스)",
          text: "저희 SEO 직원이 매일 쓰는 스킬이에요. 트렌드 키워드, 키워드 리서치, 키워드당 페이지 하나, 경쟁사 페이지, 다국어 SEO, 페이지 색인, AI 검색, 일일 리포트에 짧은 영상 스킬까지 있어요. [Marketing Team Skills](/skills)를 참고하세요.",
          code: install,
        },
        {
          title: "더 많은 SEO·마케팅 스킬",
          text: "Corey Haines의 marketingskills(seo-audit, ai-seo, programmatic-seo 등), Claude SEO 등은 [SEO를 위한 최고의 Claude 스킬](/skills/seo)에서 비교했어요.",
        },
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "AI 직원으로 마케팅 팀 꾸리는 법",
      steps: [
        {
          title: "한 번에 한 직무씩 채용하기",
          text: "매주 시간이 가장 많이 드는 일부터 시작하세요. 직무 페이지마다 목표, 일과, 직무 설명이 있어요: [SEO 전문가](/ai-employees/seo-specialist), [마케팅 에이전트](/ai-employees/marketing-agent), [소셜 미디어 매니저](/ai-employees/social-media-manager).",
        },
        {
          title: "읽기 권한과 저장소 주기",
          text: "Search Console과 분석 도구의 읽기 전용 권한, 사이트 저장소, 페이지를 테스트할 로컬 미리보기가 필요해요. 둘 다 있다면 MCP 서버보다 CLI를 쓰세요. 토큰이 덜 들어요.",
        },
        {
          title: "일을 보드에 올리기",
          text: "반복 업무는 반복 이슈가 되고, 일회성 업무는 할당하는 이슈가 돼요. 직원은 근무 시간 동안 하트비트에 맞춰 깨어나 다음 이슈를 가져가요.",
        },
        {
          title: "공개되는 것은 사람이 맡기",
          text: "게시, 포스팅, 지출, 되돌릴 수 없는 일은 모두 사람을 거쳐요. 그런 일이 필요하면 직원이 이슈를 '조치 필요'로 표시하고 물어봐요.",
        },
      ],
    },
    {
      kind: "text",
      id: "results",
      title: "기대할 수 있는 것",
      points: [
        "SEO는 어떤 사이트든 몇 주가 걸려요. 첫 목표는 출시한 페이지 수와 노출수로 잡고, 그다음 클릭수로 가세요.",
        "저희 SEO 직원은 매일 페이지를 내보내요. 처음 몇 주 동안 노출수는 주 몇 회에서 수백 회로 늘었고 대부분 롱테일 페이지 덕분이었어요. “ai employee” 같은 넓은 검색어는 80위 밖에 머물렀어요.",
        "초안은 빠르지만 감각은 여전히 중요해요. 소셜 게시물과 브랜드 말투로 쓴 것은 나가기 전에 검토하세요.",
        "사용량은 내 Claude나 ChatGPT 요금제에서 나가니, 무거운 업무는 근무 시간 안으로 일정을 잡으세요.",
      ],
    },
  ],
  howTo: { section: "how-to", name: "Claude Code나 Codex에서 AI 직원으로 마케팅 팀 꾸리기" },
  mid: {
    title: "프롬프트 없이 이 일들을 매일 끝내고 싶으세요?",
    text: "Crewmark는 내 Claude Code나 Codex를 하트비트에 맞춰 깨어나 보드의 일을 처리하는 마케팅 직원으로 바꿔요.",
    button: "시작하기",
  },
  faq: {
    title: "자주 묻는 질문",
    items: [
      {
        q: "Claude Code로 마케팅을 할 수 있나요?",
        a: "네. 파일, 웹, 도구로 할 수 있는 일이라면요. 사이트 페이지 작성과 수정, 키워드 리서치, 경쟁사 추적, 분석 데이터 리포트, 게시물과 이메일 초안 등이요. 게시와 지출은 사람이 맡는 게 좋아요.",
      },
      {
        q: "가장 좋은 Claude Code 마케팅 스킬은 뭔가요?",
        a: "SEO와 그로스라면 Crewmark의 오픈소스 Marketing Team Skills와 Corey Haines의 marketingskills가 가장 완성도 높은 세트예요. 다른 스킬과 함께 [SEO를 위한 최고의 Claude 스킬](/skills/seo)에서 비교했어요.",
      },
      {
        q: "Claude Code 마케팅 플러그인이 있나요?",
        a: "Marketing Team Skills는 `/plugin marketplace add ummydev/marketing-team-skills`로 Claude Code 플러그인으로 설치하거나, `npx skills add`로 Claude Code, Codex 등 여러 에이전트에 설치할 수 있어요.",
      },
      {
        q: "마케팅에 Codex도 쓸 수 있나요?",
        a: "네. 직무 설명을 CLAUDE.md 대신 AGENTS.md에 넣으면 돼요. 스킬과 설정은 똑같아요.",
      },
      {
        q: "AI 마케팅 직원은 마케팅 자동화 도구와 뭐가 다른가요?",
        a: "자동화 도구는 내가 만든 단계를 실행해요. AI 직원은 목표를 기준으로 다음에 할 일을 정하고, 내 사이트와 도구에서 일한 뒤 일정에 맞춰 보고해요.",
      },
      {
        q: "제 확인 없이 소셜 미디어에 게시하나요?",
        a: "허용할 때만요. 검토용 초안을 권해요. 직원이 초안을 보드에 올리고 내 승인을 기다려요.",
      },
    ],
  },
  cta: {
    title: "하루도 빠짐없이 일하는 AI 직원을 마케팅 팀에 두세요.",
    text: "Crewmark는 Claude Code와 Codex 세션을 직무, 목표, 근무 시간, 하트비트를 갖춘 AI 직원으로 바꿔 줘요.",
    button: "시작하기",
  },
  checked: "2026년 11월 10일에 Crewmark 마케팅 직원들이 실제로 일하는 방식을 바탕으로 작성했습니다.",
  disclaimer:
    "Crewmark는 독립 제품으로, Anthropic이나 OpenAI와 제휴하거나 그 보증을 받지 않았습니다. Claude, Claude Code, Codex는 각 소유자의 상표입니다.",
};
