import type { GuideCopy } from "@/components/landing/guide-article";

// ko translation of /blog/gemini-4-hydrogen; the English master is src/content/blog/gemini-4-hydrogen.ts.

const blog = "https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-hydrogen/";

const api = `# Gemini API: 모델 코드는 gemini-4-hydrogen
curl "https://generativelanguage.googleapis.com/v1beta/models/gemini-4-hydrogen:generateContent" \\
  -H "x-goog-api-key: $GEMINI_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"contents": [{"parts": [{"text": "이 diff에서 실패하는 테스트를 찾아서 고쳐 줘"}]}]}'`;

export const copy: GuideCopy = {
  meta: {
    title: "Gemini 4 Hydrogen: 가격, 벤치마크, Argon 비교",
    description:
      "Google의 빠른 모델 Gemini 4 Hydrogen의 가격($1.50/$7.50), 1M 컨텍스트, 벤치마크, Argon·Carbon·3.8 Flash·Claude 비교를 정리했어요.",
  },
  breadcrumb: "Gemini 4 Hydrogen",
  parent: { name: "블로그", href: "/blog" },
  article: { published: "2026-11-13" },
  hero: {
    kicker: "블로그 · 새 모델",
    title: "Gemini 4 Hydrogen: 가격, 벤치마크, 다른 모델과의 비교",
    lead: "Google은 2026년 11월 12일 Gemini 4 Hydrogen을 출시했어요. 일상적인 코딩과 에이전트 작업을 위한 빠른 Gemini 4 모델로, 가격은 입력 토큰 100만 개당 $1.50, 출력 100만 개당 $7.50이고 1M 토큰 컨텍스트 전체에 같은 가격이 적용돼요. Google이 깊고 긴 추론용으로 두는 Gemini 4 Carbon과 Argon보다 아래에 자리하고, 대부분의 사람이 기본으로 쓰게 될 모델로서 Gemini 3.8 Flash를 대체해요. 이 글에서는 새로워진 점, Google이 공개한 수치, Argon·Carbon·3.8 Flash·Claude와의 가격 비교, 그리고 어디서 쓸 수 있는지 정리해요.",
    cta: "시작하기",
    secondary: "가격 보기",
    secondaryHref: "#pricing",
  },
  sections: [
    {
      kind: "table",
      id: "at-a-glance",
      title: "Gemini 4 Hydrogen 한눈에 보기",
      headers: ["", "Gemini 4 Hydrogen"],
      rows: [
        ["출시일", "2026년 11월 12일, Google"],
        ["모델 코드", "`gemini-4-hydrogen`"],
        ["용도", "코딩과 에이전트 워크플로의 빠른 실행"],
        ["컨텍스트", "입력 1M 토큰, 출력 최대 1M 토큰"],
        ["사고 수준", "low, medium, high(기본값), 그리고 새로 추가된 xhigh"],
        ["API 가격", "100만 토큰당 입력 $1.50, 출력 $7.50. 컨텍스트 길이와 상관없이 동일하고, Gemini API에 무료 등급 있음"],
        ["사용처", "Gemini API, Google AI Studio, Android Studio, Gemini for business, Gemini 앱, Google 검색, 그리고 유료 Google AI Pro·Ultra 구독자용 Google Antigravity"],
      ],
    },
    {
      kind: "text",
      id: "whats-new",
      title: "Gemini 4 Hydrogen에서 새로워진 점",
      points: [
        "Gemini 4 제품군의 빠른 모델이에요. Google은 Carbon과 Argon을 깊고 긴 추론용으로 두고, Hydrogen은 빠른 실행용으로 내세워요. 단독으로 쓰거나, 두 모델 옆에서 작업자(worker) 역할로 쓸 수 있어요.",
        "Google Antigravity의 Orchestrator는 한 세션 안에서 Carbon과 Hydrogen을 오가요. Google에 따르면 Terminal-Bench 4.0에서 Carbon에 가까운 성공률을 내면서 할당량은 24% 덜 쓰고 19% 더 빨리 끝냈어요.",
        "Google에 따르면 Gemini 3.8 Flash보다 크게 좋아졌어요. 기본 설정인 high에서 2.5배 빠르고, Terminal-Bench 4.1은 18.2%에서 57%로 올랐으며, 사실이 아닌 내용을 지어내는 경우는 5분의 1 미만으로 줄었어요.",
        "큰 저장소를 한꺼번에 탐색해요. 파일을 하나씩이 아니라 병렬로 읽고 검색해요. 파트너들은 3.8 Flash보다 2~2.8배 빠르고 토큰은 12%~23% 적게 쓰는 결과를 얻었어요.",
        "새로운 xhigh를 포함한 4단계 사고 수준이 있어서, 작업에 필요한 만큼의 추론에만 비용을 내면 돼요.",
        "에이전트 작업의 안전성: Google은 도구 사용과 코딩 평가에서 지시 범위를 넘는 행동(overreach)이 최대 81% 줄고, 의도에 어긋난 행동과 편법이 12분의 1로 줄었으며, 내부 에이전트 평가에서 정직성 비율이 96.7%였다고 밝혔어요.",
      ],
    },
    {
      kind: "table",
      id: "benchmarks",
      title: "Gemini 4 Hydrogen 벤치마크",
      text: [
        "Google이 발표에서 공개한 수치이고, 독립적인 결과는 앞으로 나올 거예요. Google이 비교 대상을 밝힌 경우 마지막 열에 적었어요.",
      ],
      headers: ["벤치마크", "Gemini 4 Hydrogen", "비교 대상"],
      rows: [
        ["Artificial Analysis Intelligence Index", "high에서 51, xhigh에서 54", "Gemini 4 Argon: 50"],
        ["Terminal-Bench 4.1", "57%", "Gemini 3.8 Flash: 18.2%"],
        ["HLE-Diamond", "58.8%", "동급 1위"],
        ["Vals Tax Agent Bench", "52.3%", "종합 1위"],
        ["Vals Legal Research Bench", "55.8%", "공동 1위"],
        ["Multimodal Knowledge Agent (MKA)", "53.4%", "Google에 따르면 다른 모델보다 높음"],
        ["Agents' Last Exam v1.1", "71.6%", "Google에 따르면 다른 모델보다 높음"],
        ["Agent Arena (arena.ai)", "5위", "실시간 순위"],
      ],
    },
    {
      kind: "table",
      id: "pricing",
      title: "Gemini 4 Hydrogen 가격",
      text: [
        "2026년 11월 13일 Google 가격 페이지 기준, 100만 토큰당 Gemini API 가격(미국 달러)이에요. 출력 가격에는 사고 토큰이 포함돼요. Carbon과 Argon은 11월 30일까지 출시 기념 가격이고 그 뒤에는 두 배가 돼요. 3.8 Flash 가격은 2027년 1월 1일에 두 배가 돼요. Claude 가격은 Anthropic 가격이며, [Claude Fable 5.2](/blog/claude-fable-5-2) 글에서 가져왔어요.",
      ],
      headers: ["모델", "입력", "출력", "배치 (입력 / 출력)", "무료 등급"],
      rows: [
        ["Gemini 4 Hydrogen", "$1.50", "$7.50", "$0.75 / $3.75", "있음"],
        ["Gemini 4 Argon", "11월 30일까지 $2.00, 이후 $4.00", "11월 30일까지 $10.00, 이후 $20.00", "$1.00 / $5.00, 이후 $2.00 / $10.00", "없음"],
        ["Gemini 4 Carbon", "11월 30일까지 $2.00, 이후 $4.00", "11월 30일까지 $10.00, 이후 $20.00", "$1.00 / $5.00, 이후 $2.00 / $10.00", "없음"],
        ["Gemini 3.8 Flash", "12월 31일까지 $0.75, 이후 $1.50", "12월 31일까지 $3.75, 이후 $7.50", "-", "있음"],
        ["Claude Sonnet 5.5", "$2", "$10", "$1 / $5", "-"],
        ["Claude Opus 5.5", "$4", "$20", "$2 / $10", "-"],
      ],
    },
    {
      kind: "text",
      id: "vs-argon-carbon",
      title: "Gemini 4 Hydrogen vs Argon vs Carbon",
      text: [
        "Google은 추론 깊이에 따라 역할을 나눠요. Carbon은 가장 뛰어난 추론 모델로, 복잡한 소프트웨어 엔지니어링, 깊이 있는 수학·과학, 여러 단계를 스스로 진행하는 에이전트용이에요. Argon은 효율적인 프런티어 모델로, Carbon보다 응답이 빠르고 토큰을 덜 써요. Hydrogen은 빠른 일상 코딩과 에이전트 작업용이고, Carbon이 전체를 조율하는 동안 작업자나 검증자로 돌릴 수도 있어요.",
        "가격으로 보면 Hydrogen은 지금도 Argon과 Carbon보다 싸고, 두 모델의 출시 기념 가격이 끝나는 12월 1일부터는 차이가 더 벌어져요. Google 수치로는 Artificial Analysis Intelligence Index에서도 Argon을 근소하게 앞서요(high에서 51 대 50). Gemini API에서 Carbon과 Argon에는 무료 등급이 없고, Hydrogen에는 있어요.",
      ],
    },
    {
      kind: "text",
      id: "vs-flash",
      title: "Gemini 4 Hydrogen vs Gemini 3.8 Flash",
      text: [
        "3.8 Flash를 쓰고 있다면, Google은 Hydrogen을 그 업그레이드로 내세워요. 기본 설정에서 더 빠르고, Terminal-Bench 4.1 점수는 세 배가 넘으며, 지어낸 내용도 훨씬 적어요. 12월 31일까지는 토큰당 가격이 3.8 Flash의 두 배지만, 2027년 1월 1일부터는 둘 다 같은 가격($1.50, $7.50)이 돼요. Google 파트너들은 작업당 토큰이 12%~23% 줄었다고 하니, 가격 차이의 일부는 여기서 상쇄돼요.",
      ],
    },
    {
      kind: "text",
      id: "vs-claude",
      title: "Gemini 4 Hydrogen vs Claude Sonnet 5.5, Opus 5.5",
      text: [
        "Google 발표는 Hydrogen을 Claude와 비교하지 않아서, 여기서는 비교할 수 있는 사실만 정리해요. 100만 토큰당 $1.50·$7.50인 Hydrogen의 정가는 Claude Sonnet 5.5($2·$10)보다 낮고 Opus 5.5($4·$20)보다는 훨씬 낮아요. 또 1M 토큰 컨텍스트에 출력도 최대 1M 토큰까지 지원해요. Claude Code와 Codex는 각자 회사의 모델로 돌아가기 때문에, 보통은 어떤 에이전트에서 일하느냐에 따라 모델이 정해져요. 두 에이전트 비교는 [Claude Code vs Codex](/blog/claude-code-vs-codex)를 참고하세요.",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Gemini 4 Hydrogen 사용법",
      steps: [
        {
          title: "Google AI Studio에서 써 보기",
          text: "AI Studio에서 Gemini 4 Hydrogen을 고르세요. 무료를 포함해 모든 AI Studio 등급에서 쓸 수 있어요.",
        },
        {
          title: "Gemini API로 호출하기",
          text: "모델 코드 `gemini-4-hydrogen`을 쓰세요. 사고 수준은 기본값인 high로 두고, 깊이보다 속도가 중요할 때 medium이나 low로 낮추세요.",
          code: api,
        },
        {
          title: "Google Antigravity에서 코딩하기",
          text: "유료 Google AI Pro와 Ultra 구독자는 Antigravity에서 쓸 수 있어요. 여기서는 Orchestrator가 한 세션 안에서 Carbon과 Hydrogen을 오갈 수 있어요.",
        },
        {
          title: "다른 에이전트에서 쓰기",
          text: "Gemini API 키를 받는 코딩 에이전트라면 모델 목록에 추가되는 대로 `gemini-4-hydrogen`을 호출할 수 있어요. 쓰고 있는 에이전트의 모델 목록을 확인하세요.",
        },
      ],
      source: { label: "출처: Google, Introducing Gemini 4 Hydrogen", href: blog },
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Crewmark와 함께",
      title: "빠른 모델은 절반일 뿐이에요. 나머지 절반은 맡길 일이에요.",
      text: [
        "모델은 계속 빨라지고 저렴해지지만, 그 모델을 쓰는 에이전트는 여전히 다음 프롬프트를 기다려요. Crewmark는 코딩 에이전트 세션을 직무, 숫자로 된 목표, 근무 시간, 하트비트를 갖춘 AI 직원으로 바꿔 줘서, 보드에서 다음 이슈를 스스로 가져가게 해요.",
      ],
      steps: [
        {
          title: "직무 고르기",
          text: "[AI 직원 역할](/ai-employees)에서 고르세요. 예를 들어 [AI 소프트웨어 엔지니어](/ai-employees/software-engineer)가 있어요.",
        },
        {
          title: "일을 보드에 올리기",
          text: "이슈를 배정하고, 정기적인 일은 반복되게 설정하고, 하트비트가 직원을 깨워 다음 일을 가져가게 하세요.",
        },
        {
          title: "무엇을 할 수 있는지 보기",
          text: "에이전트별 설정과 규칙이 담긴 업무는 [Claude Code 활용 사례](/use-cases/claude-code)와 [Codex 활용 사례](/use-cases/codex)에 있어요.",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Gemini 4 Hydrogen 쓰기" },
  mid: {
    title: "에이전트가 정해진 일정에 따라 이슈를 처리하게 하고 싶으신가요?",
    text: "Crewmark는 에이전트마다 직무, 하트비트, 공유 보드를 줘서 다음 일을 스스로 가져가게 해요.",
    button: "시작하기",
  },
  faq: {
    title: "FAQ",
    items: [
      {
        q: "Gemini 4 Hydrogen은 무엇인가요?",
        a: "2026년 11월 12일에 출시된, 일상적인 코딩과 에이전트 작업을 위한 Google의 빠른 Gemini 4 모델이에요. Gemini 4 Carbon과 Argon 아래 등급이고, 1M 토큰 컨텍스트에 출력은 최대 1M 토큰이에요.",
      },
      {
        q: "Gemini 4 Hydrogen은 얼마인가요?",
        a: "Gemini API에서 입력 토큰 100만 개당 $1.50, 출력 100만 개당 $7.50이고, 컨텍스트 길이와 상관없이 같아요. 배치는 $0.75·$3.75예요. 무료 등급이 있고, Gemini 앱에서는 누구나 쓸 수 있어요.",
      },
      {
        q: "Gemini 4 Hydrogen이 Argon보다 나은가요?",
        a: "Google은 두 모델을 다르게 자리매김해요. Argon과 Carbon은 깊고 긴 추론용, Hydrogen은 빠른 실행용이에요. Artificial Analysis Intelligence Index에서 Google은 기본 설정의 Hydrogen을 51, Argon을 50으로 발표했고, 가격은 Hydrogen이 더 싸요.",
      },
      {
        q: "Gemini 4 Hydrogen vs 3.8 Flash: 바꿔야 할까요?",
        a: "Google에 따르면 Hydrogen은 기본 설정에서 2.5배 빠르고, Terminal-Bench 4.1은 57%(3.8 Flash는 18.2%)이며, 지어낸 내용도 훨씬 적어요. 2026년 12월 31일까지는 토큰당 가격이 3.8 Flash의 두 배지만, 2027년 1월 1일부터는 둘 다 $1.50·$7.50이에요.",
      },
      {
        q: "Gemini 4 Hydrogen의 모델 코드는 무엇인가요?",
        a: "Gemini API와 Google AI Studio에서 `gemini-4-hydrogen`이에요.",
      },
      {
        q: "Gemini 4 Hydrogen 모델 카드는 어디 있나요?",
        a: "Google이 PDF로 공개했어요: [Gemini 4 Hydrogen 모델 카드](https://storage.googleapis.com/deepmind-media/Model-Cards/Gemini-4-Hydrogen-Model-Card.pdf).",
      },
    ],
  },
  cta: {
    title: "최신 모델에 상시 업무를 맡기세요.",
    text: "Crewmark는 코딩 에이전트 세션을 직무, 목표, 근무 시간, 하트비트를 갖춘 AI 직원으로 바꿔 줘요.",
    button: "시작하기",
  },
  checked: "2026년 11월 13일에 Google의 발표, Gemini API 가격 및 모델 페이지와 대조해 확인했습니다.",
  disclaimer:
    "Crewmark는 독립 제품으로, Google이나 Anthropic과 제휴하거나 이들의 보증을 받지 않았습니다. Gemini와 Claude는 각 소유자의 상표입니다.",
};
