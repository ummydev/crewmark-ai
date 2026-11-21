import type { GuideCopy } from "@/components/landing/guide-article";

// ko translation of /blog/claude-fable-5-2; the English master is src/content/blog/claude-fable-5-2.ts.

const docs = "https://platform.claude.com/docs/en/models/fable-5-2/whats-new-fable-5-2";

const claudeCode = `# Claude Code를 업데이트한 뒤 이 세션의 모델 고르기
claude update
/model                       # Claude Fable 5.2 선택

# 또는 처음부터 이 모델로 세션 시작
claude --model claude-fable-5-2

# Fable 5.2의 fast mode (Claude Code v2.1.321 이상)
/fast`;

const api = `# Claude API: 모델 ID 바꾸기
model = "claude-fable-5-1"  # 이전
model = "claude-fable-5-2"  # 이후

# 적응형 사고는 항상 켜져 있음. 깊이는 effort로 조절
# low | medium | high (기본값) | xhigh | max`;

export const copy: GuideCopy = {
  meta: {
    title: "Claude Fable 5.2: 벤치마크, 가격, Opus 5.5 비교",
    description:
      "2026년 11월 9일 출시된 Claude Fable 5.2: 새로워진 점, Anthropic 벤치마크, API 가격($8/$40)과 fast mode, 1M 컨텍스트, Fable 5.2 vs Opus 5.5·Fable 5.1·Mythos 5.2 비교, Claude Code에서 쓰는 법.",
  },
  breadcrumb: "Claude Fable 5.2",
  parent: { name: "블로그", href: "/blog" },
  article: { published: "2026-11-10" },
  hero: {
    kicker: "블로그 · Claude 모델",
    title: "Claude Fable 5.2: 새로워진 점, 벤치마크, 가격, 그리고 Opus 5.5와의 비교",
    lead: "Anthropic은 2026년 11월 9일 Claude Fable 5.2를 Claude Mythos 5.2와 함께 출시했어요. 둘은 같은 모델이고 안전장치만 달라요. Anthropic은 Fable 5.2를 기술 작업용으로 일반 제공되는 모델 중 가장 뛰어난 모델이라고 소개해요. Fable 5.1보다 빠르고 저렴하며, Anthropic의 코딩·에이전트 벤치마크 점수가 더 높고, fast mode도 새로 생겼어요. 이 글에서는 무엇이 바뀌었는지, 수치와 비용, Opus 5.5 대신 이 모델을 고를 때, Claude Code에서 쓰는 법을 정리해요.",
    cta: "시작하기",
    secondary: "Fable 5.2 vs Opus 5.5",
    secondaryHref: "#vs-opus",
  },
  sections: [
    {
      kind: "table",
      id: "at-a-glance",
      title: "Claude Fable 5.2 한눈에 보기",
      headers: ["", "Claude Fable 5.2"],
      rows: [
        ["출시일", "2026년 11월 9일 (6월 Fable 5, 9월 Fable 5.1에 이어)"],
        ["API 모델 ID", "`claude-fable-5-2`"],
        ["가격", "입력 토큰 100만 개당 $8, 출력 100만 개당 $40 (Fable 5.1: $10, $50)"],
        ["Fast mode", "출력 최대 2.5배 빠름, 100만 토큰당 입력 $16·출력 $80"],
        ["컨텍스트 창", "1M 토큰, 최대 출력 128K"],
        ["사고", "적응형 사고, 항상 켜짐. effort는 `low`, `medium`, `high`(기본값), `xhigh`, `max`"],
        ["학습 데이터 기준 시점", "2026년 6월"],
        ["속도", "Anthropic에 따르면 Fable 5.1보다 출력이 최대 30% 빠름"],
        ["사용 대상", "Claude Pro, Max, Ultra, Team, Enterprise. 모든 Claude API 고객. Amazon Bedrock, Google Cloud, Microsoft Foundry"],
      ],
    },
    {
      kind: "text",
      title: "Fable 5.2에서 새로워진 점",
      points: [
        "길고 어려운 기술 작업에 더 강해졌어요. Anthropic은 모호한 엔지니어링 작업을 며칠 동안 이어 가고, 서브에이전트 수백 개, 많게는 천 개 넘게 조율할 수 있다고 해요.",
        "더 저렴해요. 입력과 출력 모두 Fable 5.1보다 20% 싸고, 배치 처리는 절반 가격($4, $20)이에요.",
        "더 빨라요. 출력이 Fable 5.1보다 최대 30% 빠르고, 여기서 다시 최대 2.5배 빠른 fast mode를 두 배 가격에 쓸 수 있어요.",
        "로보틱스: Anthropic은 학습하지 않은 작업을 포함해 실제 로봇 제어가 크게 좋아졌다고 밝혔어요.",
        "안전장치: 사이버보안과 생물학 안전장치가 내장돼 있어요. 걸러진 사이버 질의는 Claude Opus 4.8로, 생물학 질의는 Claude Opus 5로 넘어가요.",
        "데이터 보존: Fable 모델은 기본적으로 안전 모니터링을 위해 30일 보존이 필요해요. 데이터 무보존(zero data retention)은 Anthropic의 승인이 있어야 해요.",
      ],
    },
    {
      kind: "table",
      id: "benchmarks",
      title: "Claude Fable 5.2 벤치마크",
      text: [
        "Anthropic의 Fable 페이지에서 가져온 수치이고, 따로 표시하지 않으면 안전장치를 켠 상태예요. 독립 테스트가 아니라 Anthropic이 직접 낸 수치예요.",
      ],
      headers: ["벤치마크", "Fable 5.2", "Fable 5.1", "Opus 5.5", "GPT-6 Astra", "Gemini 4 Carbon"],
      rows: [
        ["FrontierCode 2.0 (에이전트 코딩)", "49.1% (xhigh)", "32.4% (xhigh)", "45.5%", "42.8%", "41.1%"],
        ["FrontierSWE v2 (에이전트 코딩)", "69.9%", "56.3%", "62.3%", "65.5%", "61.2%"],
        ["Terminal-Bench-Science 0.1", "74.6%", "52.6%", "58.7%", "68.1%", "64.8%"],
        ["OSWorld 2.1 (컴퓨터 사용)", "89.3%", "83.5%", "87.2%", "79.5%", "81.5%"],
        ["AutomationBench (업무 워크플로)", "51.4%", "31.4%", "42.5%", "41.4%", "53.9%"],
        ["Remote Labor Index", "41.3%", "17.9%", "21.3%", "20.8%", "-"],
        ["Humanity's Last Exam (도구 사용)", "74.2%", "65.6%", "67.7%", "57.2%", "-"],
        ["RoboDojo Sim (로보틱스, Anthropic 측정)", "64.9%", "27.6%", "39.4%", "29.8%", "-"],
      ],
    },
    {
      kind: "table",
      id: "pricing",
      title: "Claude Fable 5.2 가격",
      text: [
        "2026년 11월 10일 Anthropic 문서 기준, 100만 토큰당 API 가격이에요. Claude 요금제에서는 Fable 5.2가 구독 사용량 안에 포함되고, Pro와 Team 표준 시트에서는 주간 한도의 최대 50%까지 쓸 수 있어요. Claude Code의 fast mode는 사용량 크레딧에서 청구돼요.",
      ],
      headers: ["모델", "입력", "출력", "캐시 읽기", "배치 (입력 / 출력)"],
      rows: [
        ["Claude Fable 5.2", "$8", "$40", "$0.20", "$4 / $20"],
        ["Claude Fable 5.2, fast mode", "$16", "$80", "-", "-"],
        ["Claude Fable 5.1", "$10", "$50", "$0.25", "$5 / $25"],
        ["Claude Opus 5.5", "$4", "$20", "$0.20", "$2 / $10"],
        ["Claude Sonnet 5.5", "$2", "$10", "$0.10", "$1 / $5"],
      ],
    },
    {
      kind: "text",
      id: "vs-opus",
      title: "Fable 5.2 vs Opus 5.5: 무엇을 써야 할까?",
      text: [
        "Anthropic은 대부분의 작업은 Opus 5.5로 시작하고, effort를 올린 Opus 5.5로도 부족할 때 Fable 5.2로 옮기라고 권해요.",
      ],
      points: [
        "가격: Fable 5.2는 토큰당 두 배 비싸고($8·$40 대 $4·$20), 기본 effort도 Opus 5.5의 `medium`보다 높은 `high`라서 요청마다 생각을 더 많이 하는 편이에요.",
        "성능: Anthropic 표에서 Fable 5.2는 에이전트 코딩(FrontierSWE v2에서 69.9% 대 62.3%), 과학, 장기 작업에서 Opus 5.5를 앞서요. 컴퓨터 사용에서는 차이가 더 작아요(OSWorld 2.1에서 89.3% 대 87.2%).",
        "작업당 비용: Anthropic에 따르면 `high` effort의 Fable 5.2는 FrontierCode 2.0에서 `max`의 Opus 5.5와 거의 같은 점수(45.3% 대 45.5%)를 작업당 약 절반 비용으로 냈어요. 그러니 어려운 작업에서는 꼭 더 비싼 선택이라고 할 수 없어요.",
        "대화 도중 모델 바꾸기: Fable 5.2의 사고 내용은 Fable 5.2와 Mythos 5.2만 읽을 수 있어서, 대화를 Fable 5.2에서 Opus 5.5로 옮기면 거기서 실행되는 턴에서는 그 추론이 사라져요.",
        "요약하면: 평소에는 Opus 5.5, 오래 도는 에이전트 작업이나 까다로운 버그, Opus에서 실패하는 일에는 Fable 5.2.",
      ],
    },
    {
      kind: "text",
      id: "vs-mythos",
      title: "Fable 5.2 vs Mythos 5.2, 그리고 Fable 5.1과의 비교",
      points: [
        "Mythos 5.2는 같은 모델이지만 사이버보안과 생물학 작업 제한이 더 적어요. Cyber Verification Program 같은 Anthropic 프로그램으로 검증된 조직만 쓸 수 있고, 가격은 같아요.",
        "Anthropic의 사이버·생물학 표에서는 Mythos 5.2가 안전장치를 켠 Fable 5.2보다 점수가 높아요. 그 밖의 모든 면에서는 같은 모델이에요.",
        "Fable 5.1과 비교하면 Fable 5.2는 더 싸고, 최대 30% 빠르고, Anthropic 표 전반에서 점수가 높아요. 예를 들어 FrontierCode 2.0에서 49.1% 대 32.4%, Remote Labor Index에서 41.3% 대 17.9%예요.",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Claude Code에서 Claude Fable 5.2 쓰는 법",
      steps: [
        {
          title: "업데이트하고 모델 고르기",
          text: "Claude Code를 업데이트한 다음 `/model`을 실행해 Claude Fable 5.2를 고르거나, `--model claude-fable-5-2`로 세션을 시작하세요. Claude 요금제라면 Pro, Max, Ultra, Team, Enterprise 중 하나가 필요해요.",
          code: claudeCode,
        },
        {
          title: "effort는 일단 high로 두기",
          text: "Anthropic은 대부분의 이득이 `high`에서 이미 나온다고 해요. 효과를 확인한 뒤 가장 어려운 장기 코딩 작업에 `xhigh`로 올리고, `max`는 시간과 토큰이 상관없는 드문 경우에만 쓰세요.",
        },
        {
          title: "속도가 중요할 때 fast mode 켜기",
          text: "Fable 5.2에서 `/fast`를 실행하세요(Claude Code v2.1.321 이상). 두 배 가격에 최대 2.5배 빨라져요. 구독 요금제에서는 요금제 한도가 아니라 사용량 크레딧에서 차감되고, Bedrock, Vertex, Foundry에서는 쓸 수 없어요.",
        },
        {
          title: "API를 직접 호출한다면 호환성이 깨지는 변경 확인하기",
          text: "적응형 사고는 항상 켜져 있고(`budget_tokens`와 `disabled`는 400을 반환), 강제 도구 사용은 지원되지 않으며, 이전 턴을 수정하면 사고 블록이 무효가 되고, 예전 `computer_20251124` 도구는 컴퓨터 사용 도구 세트로 바뀌었어요. Claude Code와 Agent SDK는 이걸 알아서 처리해요.",
          code: api,
        },
      ],
      source: { label: "출처: Anthropic 문서, What's new in Claude Fable 5.2", href: docs },
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Crewmark와 함께",
      title: "Fable 5.2에 오래 걸리는 일 맡기기",
      text: [
        "Fable 5.2는 몇 시간씩 이어지는 작업을 위해 만들어졌어요. Crewmark는 Claude Code 세션을 직무, 목표, 근무 시간, 하트비트를 갖춘 AI 직원으로 바꿔 줘요. 직원은 자기 세션에서 돌아가는 모델을 그대로 쓰니까, 가장 어려운 일에는 Fable 5.2를, 나머지에는 Opus 5.5를 배치할 수 있어요.",
      ],
      steps: [
        {
          title: "직무 고르기",
          text: "예를 들어 어려운 이슈가 쌓여 있다면 [AI 소프트웨어 엔지니어](/ai-employees/software-engineer)를 고르세요.",
        },
        {
          title: "세션에서 모델 설정하기",
          text: "직원의 Claude Code 대화에서 `/model`을 실행하고 Fable 5.2를 고르세요.",
        },
        {
          title: "맡겨 두기",
          text: "하트비트에 맞춰 깨어나 보드의 일을 처리해요. [Claude Code를 24시간 돌리는 법](/blog/run-claude-code-24-7)도 참고하세요.",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Claude Code에서 Claude Fable 5.2 쓰기" },
  mid: {
    title: "Fable 5.2가 가장 어려운 이슈를 정해진 일정에 따라 처리하게 하고 싶으신가요?",
    text: "Crewmark 직원은 내 Claude Code에서 돌아가고, 하트비트에 맞춰 깨어나 보드에서 다음 이슈를 가져가요.",
    button: "시작하기",
  },
  faq: {
    title: "FAQ",
    items: [
      {
        q: "Claude Fable 5.2는 언제 출시됐나요?",
        a: "2026년 11월 9일, Claude Mythos 5.2와 함께 나왔어요. Fable 5(2026년 6월 9일)와 Fable 5.1(2026년 9월 1일)에 이은 모델이에요.",
      },
      {
        q: "Claude Fable 5.2는 얼마인가요?",
        a: "API에서는 입력 토큰 100만 개당 $8, 출력 100만 개당 $40으로, Fable 5.1의 $10·$50보다 내려갔어요. Fast mode는 $16·$80, 배치는 $4·$20이에요. Claude 요금제에서는 Pro부터 포함되고, Pro와 Team 표준 시트에서는 주간 사용 한도의 최대 50%까지 쓸 수 있어요.",
      },
      {
        q: "Fable 5.2가 Opus 5.5보다 나은가요?",
        a: "Anthropic 벤치마크로는 에이전트 코딩, 과학, 장기 작업에서 그래요. 대신 토큰당 가격이 두 배이고, Anthropic은 여전히 대부분의 작업은 Opus 5.5로 시작하라고 권해요.",
      },
      {
        q: "Claude Fable 5.2의 컨텍스트 창은 얼마인가요?",
        a: "1M 토큰이고, 출력은 최대 128K 토큰이에요.",
      },
      {
        q: "Fable 5.2와 Mythos 5.2는 무엇이 다른가요?",
        a: "같은 모델이에요. Fable 5.2는 사이버보안과 생물학 안전장치가 있고 누구나 쓸 수 있어요. Mythos 5.2는 Anthropic 프로그램으로 검증된 조직용이에요.",
      },
      {
        q: "Claude Fable 5.2는 무료인가요?",
        a: "아니요. Anthropic은 Pro, Max, Ultra, Team, Enterprise 요금제와 API에서 제공한다고 밝히고 있고, Free 요금제는 목록에 없어요.",
      },
      {
        q: "Claude Fable 5.2 시스템 카드가 있나요?",
        a: "네. Anthropic이 “Claude Fable 5.2 and Claude Mythos 5.2 System Card”를 공개했고, Fable 페이지에서 링크돼 있어요.",
      },
    ],
  },
  cta: {
    title: "최신 모델에 상시 업무를 맡기세요.",
    text: "Crewmark는 Claude Code와 Codex 세션을 직무, 목표, 근무 시간, 하트비트를 갖춘 AI 직원으로 바꿔 줘요.",
    button: "시작하기",
  },
  checked: "2026년 11월 10일에 Anthropic의 Fable 페이지, 출시 글, Claude Platform 문서, Claude Code 문서와 대조해 확인했습니다.",
  disclaimer:
    "Crewmark는 독립 제품으로, Anthropic과 제휴하거나 Anthropic의 보증을 받지 않았습니다. Claude, Claude Fable, Claude Mythos, Claude Opus, Claude Code는 Anthropic의 상표입니다.",
};
