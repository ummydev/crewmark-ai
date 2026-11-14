import type { GuideCopy } from "@/components/landing/guide-article";

// Korean translation of /blog/deepseek-v4-1-flash; the English master is src/content/blog/deepseek-v4-1-flash.ts.

const card = "https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017";

const api = `curl https://api.deepseek.com/chat/completions \\
  -H "Authorization: Bearer $DEEPSEEK_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"model": "deepseek-flash", "messages": [{"role": "user", "content": "Hello"}]}'`;

export const copy: GuideCopy = {
  meta: {
    title: "DeepSeek V4.1 Flash(1017): 가격, V4 Pro 비교 | Crewmark AI",
    description:
      "DeepSeek-V4.1-Flash-1017 총정리: 2026년 10월 17일에 바뀐 점, API 가격, 1M 컨텍스트, Hugging Face 오픈 웨이트, DeepSeek이 공개한 벤치마크, 그리고 V4 Pro를 써야 할 때까지 정리했어요.",
  },
  breadcrumb: "DeepSeek V4.1 Flash",
  parent: { name: "블로그", href: "/blog" },
  article: { published: "2026-11-06" },
  hero: {
    kicker: "블로그 · DeepSeek",
    title: "DeepSeek V4.1 Flash(1017): 가격, 컨텍스트, 벤치마크, V4 Pro 비교",
    lead: "DeepSeek-V4.1-Flash-1017은 DeepSeek V4.1 Flash의 2026년 10월 17일 업데이트예요. V4.1 Flash는 DeepSeek 최신 아키텍처에서 가장 작은 모델로, 이미지를 이해하고 1M 토큰 컨텍스트를 지원해요. API의 `deepseek-flash`, DeepSeek 웹사이트와 앱, DeepSeek Harness의 기본 모델이 모두 이 모델이고, 웨이트는 MIT 라이선스로 공개돼 있어요. DeepSeek에 따르면 9월 버전보다 점수가 높고, 출력은 더 짧으며, 작업을 더 빨리 끝내요. 이 글에서는 어떤 모델인지, 비용은 얼마인지, V4 Pro와 어떻게 다른지, 어떻게 쓰는지 다뤄요.",
    cta: "시작하기",
    secondary: "가격으로 이동",
    secondaryHref: "#pricing",
  },
  sections: [
    {
      kind: "table",
      title: "DeepSeek V4.1 Flash 한눈에 보기",
      headers: ["", "DeepSeek-V4.1-Flash-1017"],
      rows: [
        ["출시", "V4.1 Flash는 2026년 9월 10일, 1017 업데이트는 2026년 10월 17일"],
        ["API 모델 이름", "`deepseek-flash`(예전 이름인 `deepseek-v4-flash`와 `deepseek-v4-flash-vision-exp`도 이 모델로 제공돼요)"],
        ["입력", "텍스트와 이미지"],
        ["컨텍스트 길이", "1M 토큰. DeepSeek은 `max_tokens`를 256K 이상으로 권장해요"],
        ["웨이트", "Hugging Face에 공개, MIT 라이선스"],
        ["사용처", "DeepSeek API, 웹사이트, 앱. DeepSeek Harness의 기본 모델"],
        ["최적화 대상", "DeepSeek에 따르면 DeepSeek Harness(v0.2.1-rc.1 이상), Tencent CodeBuddy와 WorkBuddy"],
      ],
    },
    {
      kind: "table",
      id: "pricing",
      title: "DeepSeek V4.1 Flash 가격과 V4 Pro 비교",
      text: [
        "2026년 11월 6일 기준 DeepSeek API 가격이며, 단위는 100만 토큰당 미국 달러예요. 비피크 요금은 평일 UTC 01:00–04:00과 06:00–10:00 외 시간대에 적용되고 피크 요금의 절반이에요. 1017 업데이트로 가격은 바뀌지 않았어요. DeepSeek의 Search API와 Fetch API는 각각 호출 1,000회당 $0.75예요.",
      ],
      headers: ["100만 토큰당", "Flash, 피크", "Flash, 비피크", "V4 Pro, 피크", "V4 Pro, 비피크"],
      rows: [
        ["입력, 캐시 적중", "$0.006", "$0.003", "$0.044", "$0.022"],
        ["입력, 캐시 미스", "$0.30", "$0.15", "$1.32", "$0.66"],
        ["출력", "$1.20", "$0.60", "$3.96", "$1.98"],
      ],
    },
    {
      kind: "table",
      id: "benchmarks",
      title: "DeepSeek V4.1 Flash 벤치마크(DeepSeek 발표 기준)",
      text: [
        "모델 카드에 실린 DeepSeek 자체 수치로, 1017 업데이트와 9월 V4.1 Flash를 비교해요. DeepSeek은 Terminal-Bench 4.0을 Claude Code 하네스로, DeepSWE를 Mini-SWE-V2로 실행했어요. 제조사 벤치마크는 자사 모델에 유리하기 마련이니, 갈아타기 전에 내 작업으로 직접 테스트해 보세요.",
      ],
      headers: ["벤치마크", "V4.1 Flash 1017", "V4.1 Flash(9월)"],
      rows: [
        ["Terminal-Bench 4.0", "42.3", "31.2"],
        ["DeepSWE v1.1", "77.0", "74.2"],
        ["ProgramBench", "29.1", "20.3"],
        ["NL2Repo-Bench", "68.2", "65.4"],
        ["Automation-Bench v1.0.6", "60.5", "54.8"],
        ["Agents' Last Exam", "35.4", "31.8"],
        ["HLE(도구 미사용)", "42.6", "36.8"],
      ],
    },
    {
      kind: "text",
      title: "V4.1 Flash vs V4 Pro: 무엇을 쓸까",
      points: [
        "V4 Pro(`deepseek-v4-pro`, 2026년 8월 13일 정식 출시)는 입력 토큰당 4.4배, 출력 토큰당 3.3배 비싸고 텍스트만 받아요. Flash는 이미지 입력도 지원해요.",
        "둘 다 1M 토큰 컨텍스트를 지원하고, 추론 강도(low, high, max)를 조절할 수 있어요.",
        "DeepSeek이 직접 내놓은 코딩 에이전트 구성은 기본이 Flash예요. DeepSeek Harness가 그렇고, DeepSeek이 권장하는 Claude Code 설정도 Sonnet과 Haiku를 Flash에, Opus만 V4 Pro에 매핑해요.",
        "실용적인 분담: 평소 에이전트 작업과 서브에이전트는 Flash, 어려운 작업이 Flash에서 계속 실패하면 V4 Pro.",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "DeepSeek V4.1 Flash 사용 방법",
      steps: [
        {
          title: "API로 쓰기",
          text: "platform.deepseek.com에서 API 키를 받고 모델 이름 `deepseek-flash`로 호출하세요. API는 OpenAI와 Anthropic 방식 모두와 호환돼요.",
          code: api,
        },
        {
          title: "코딩 에이전트에서 쓰기",
          text: "기본 모델로 쓰는 DeepSeek Harness에서 돌리거나, Claude Code나 Codex가 DeepSeek을 바라보게 하세요. [DeepSeek Harness 가이드](/blog/deepseek-harness)와 [Claude Code에서 DeepSeek 쓰기](/blog/claude-code-deepseek)를 참고하세요.",
        },
        {
          title: "오픈 웨이트로 로컬에서 쓰기",
          text: "Hugging Face에서 DeepSeek-V4.1-Flash-1017을 내려받으세요. 저장소에는 채팅 템플릿 대신 참조용 프롬프트 인코더와 추론 안내가 들어 있어요. DeepSeek은 temperature 1.0, top_p 1.0을 권장해요.",
        },
      ],
      source: { label: "출처: Hugging Face의 DeepSeek-V4.1-Flash-1017", href: card },
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Crewmark로",
      title: "저렴하고 유능한 모델이 백로그를 처리하게",
      text: [
        "Flash 가격이라면 에이전트를 하루 종일 일하게 해도 부담이 적어요. Crewmark는 DeepSeek Harness, Claude Code, Codex, OpenCode 세션을 직무, 목표, 근무 시간을 가진 AI 직원으로 바꾸고, 하트비트로 깨워 보드에서 다음 이슈를 가져가게 해요.",
      ],
      steps: [
        {
          title: "에이전트와 모델 고르기",
          text: "DeepSeek Harness는 기본으로 V4.1 Flash를 써요. Claude Code와 Codex는 DeepSeek 엔드포인트를 통해 쓸 수 있어요.",
        },
        {
          title: "직무와 목표 주기",
          text: "[AI 직원이란](/ai-employees)과 [슈퍼에이전트](/blog/superagent)와의 차이를 읽어 보세요.",
        },
        {
          title: "하트비트로 일을 시작하게 하기",
          text: "근무 시간 동안 15분, 30분, 60분마다 깨어나 다음 이슈를 가져가요. [Claude Code를 능동적으로 만드는 방법](/proactive-claude-code)을 참고하세요.",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "DeepSeek V4.1 Flash 사용하기" },
  mid: {
    title: "이렇게 저렴한 모델이라면 하루 종일 일해야죠.",
    text: "Crewmark는 직무, 목표, 이슈 보드를 주고 DeepSeek Harness, Claude Code, Codex를 하트비트로 깨워요.",
    button: "시작하기",
  },
  faq: {
    title: "DeepSeek V4.1 Flash 자주 묻는 질문",
    items: [
      {
        q: "DeepSeek V4.1 Flash 1017이 뭔가요?",
        a: "DeepSeek 최신 아키텍처에서 가장 작은 모델인 DeepSeek V4.1 Flash의 2026년 10월 17일 업데이트예요. 텍스트와 이미지를 받고, 1M 토큰 컨텍스트를 지원하며, `deepseek-flash`로 제공돼요.",
      },
      {
        q: "DeepSeek V4.1 Flash 가격은 얼마인가요?",
        a: "API 피크 시간대 기준으로 입력은 캐시 미스일 때 100만 토큰당 $0.30(캐시 적중 시 $0.006), 출력은 100만 토큰당 $1.20이에요. 비피크에는 절반이에요.",
      },
      {
        q: "DeepSeek V4.1 Flash의 컨텍스트 길이는 얼마인가요?",
        a: "1M 토큰이고, DeepSeek은 `max_tokens`를 최소 256K로 권장해요.",
      },
      {
        q: "DeepSeek V4.1 Flash는 오픈소스인가요?",
        a: "웨이트가 MIT 라이선스로 Hugging Face에 공개돼 있고, 참조용 프롬프트 인코더와 추론 안내도 함께 제공돼요.",
      },
      {
        q: "DeepSeek V4.1 Flash와 V4 Pro는 뭐가 다른가요?",
        a: "V4 Pro는 입력 토큰당 4.4배, 출력 토큰당 3.3배 비싸고 텍스트만 받아요. Flash는 이미지를 받고, DeepSeek 코딩 에이전트 구성의 기본 모델이에요. 둘 다 컨텍스트는 1M이에요.",
      },
      {
        q: "V4.1 Flash에서 1017로 바뀐 점은 무엇인가요?",
        a: "DeepSeek에 따르면 에이전트와 코딩 벤치마크 점수가 오르고, 출력이 짧아지고, 작업을 더 빨리 끝내요. 가격과 모델 이름은 그대로예요.",
      },
      {
        q: "Claude Code에서 DeepSeek V4.1 Flash를 쓸 수 있나요?",
        a: "네. DeepSeek은 Claude Code가 Anthropic 호환 엔드포인트와 `deepseek-flash`를 쓰도록 하는 환경 변수를 안내하고 있어요. [Claude Code에서 DeepSeek 쓰기](/blog/claude-code-deepseek)를 참고하세요.",
      },
    ],
  },
  cta: {
    title: "DeepSeek V4.1 Flash를 AI 직원으로 만드세요.",
    text: "Crewmark는 DeepSeek Harness, Claude Code, Codex, OpenCode 세션을 직무, 목표, 근무 시간, 하트비트를 갖춘 AI 직원으로 바꿔 줘요.",
    button: "시작하기",
  },
  checked: "2026년 11월 6일에 DeepSeek API 문서(변경 로그, 뉴스, 가격)와 Hugging Face 모델 카드와 대조해 확인했어요.",
  disclaimer:
    "Crewmark는 독립 제품이며 DeepSeek과 제휴 관계가 아니고 DeepSeek의 보증을 받지 않았어요. 벤치마크 수치는 DeepSeek 자체 발표예요. 제품 이름은 각 소유자의 상표예요.",
};
