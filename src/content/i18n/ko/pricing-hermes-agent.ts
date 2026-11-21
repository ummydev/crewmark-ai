import type { GuideCopy } from "@/components/landing/guide-article";

// Korean translation of /pricing/hermes-agent; the English master is src/content/product-pricing/hermes-agent.ts.

export const copy: GuideCopy = {
  meta: {
    title: "Hermes Agent 가격: 무료 에이전트와 Nous Portal 요금제",
    description:
      "Hermes Agent는 MIT 라이선스로 무료예요. 선택 사항인 Nous Portal은 월 $0, $20, $100, $200이에요. 등급별 포함 내용과 추가로 드는 비용을 정리했어요.",
  },
  breadcrumb: "Hermes Agent 가격",
  parent: { name: "제품 비교", href: "/compare" },
  hero: {
    kicker: "가격 · Nous Research",
    title: "Hermes Agent 가격: 무료 에이전트와 선택 사항인 Nous Portal 구독",
    lead: "Hermes Agent는 무료예요. Nous Research가 MIT 라이선스로 공개하고, 비용은 모델 제공자에게 내요. Nous에서 모델을 받고 싶다면, 선택 사항인 Nous Portal에 네 가지 등급이 있어요. $0인 Free, 월 $20인 Plus, $100인 Super, $200인 Ultra이고, 유료 등급에는 클라우드 호스팅 에이전트가 포함돼요. 등급별 포함 내용, 추가로 드는 비용, 그리고 OpenClaw, OpenCode, OpenWorker, Grok Bot과 비교한 가격을 정리했어요.",
    cta: "시작하기",
    secondary: "요금제 보기",
    secondaryHref: "#plans",
  },
  sections: [
    {
      kind: "table",
      id: "plans",
      title: "Hermes Agent와 Nous Portal 요금제",
      text: [
        "hermes-agent.nousresearch.com과 portal.nousresearch.com에서 2026년 11월 13일에 확인했어요. 가격은 월 기준이고, 연간 가격은 표시되어 있지 않아요. 에이전트를 쓰는 데 Nous Portal 요금제는 필요 없어요.",
      ],
      headers: ["요금제", "가격", "포함 내용"],
      rows: [
        [
          "Hermes Agent",
          "무료, MIT 라이선스",
          "에이전트: 터미널 UI, 데스크톱 앱, 게이트웨이 하나로 연결하는 채팅 앱, 스킬, 메모리, cron 스케줄러, Bot Mode. 어떤 모델 제공자든 사용 가능",
        ],
        ["Nous Portal Free", "$0", "종량제. 무료 모델만"],
        ["Nous Portal Plus", "월 $20", "무료·유료 모델. 클라우드 호스팅 에이전트 1개(RAM 4 GB, 디스크 25 GB)"],
        [
          "Nous Portal Super",
          "월 $100",
          "Plus의 5배 사용량. 무료·유료 모델. 클라우드 호스팅 에이전트 1개(RAM 4 GB, 디스크 100 GB)",
        ],
        [
          "Nous Portal Ultra",
          "월 $200",
          "Plus의 10배 사용량. 무료·유료 모델. 클라우드 호스팅 에이전트 1개(RAM 8 GB, 디스크 100 GB)",
        ],
      ],
    },
    {
      kind: "text",
      id: "costs",
      title: "Hermes Agent를 실행할 때 실제로 내는 비용",
      points: [
        "모델 제공자. `hermes model`로 제공자를 바꿀 수 있어요. Nous Portal, OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, AWS Bedrock, Ollama Cloud, LM Studio, 커스텀 엔드포인트 등이요. API 키를 쓰면 그 제공자가 청구해요.",
        "Claude 구독은 추가 사용량을 구매한 Claude Max에서만 쓸 수 있어요. 문서에는 “Claude Pro 구독자는 이 방법을 쓸 수 없다”고 적혀 있어서, Pro에서는 API 키가 필요해요.",
        "ChatGPT/Codex 로그인은 디바이스 코드 방식으로 작동해요. 어떤 ChatGPT 요금제가 되는지, 사용량이 요금제 한도에 어떻게 반영되는지는 “현재 문서화되어 있지 않아요”.",
        "실행할 곳. Hermes Agent는 로컬이나 서버에 설치해요. README에는 “$5짜리 VPS, GPU 클러스터, 서버리스 인프라”가 예로 나와요. 터미널 백엔드는 로컬, Docker, SSH, Modal, Daytona, Vercel Sandbox 여섯 가지예요.",
        "또는 클라우드 호스팅 에이전트 1개가 포함된 Nous Portal 유료 등급(사양은 위 표 참고).",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Hermes Agent 가격 vs 비슷한 에이전트",
      text: [
        "각 제품의 사이트에서 2026년 11월 13일에 확인한 가격이에요.",
        "나란히 비교: [Hermes Agent vs OpenClaw](/blog/hermes-agent-vs-openclaw), [Hermes Agent vs Claude Code](/compare/hermes-agent-vs-claude-code), [Grok Bot vs Hermes Agent](/compare/grok-bot-vs-hermes-agent), [Multica vs Hermes Agent](/compare/multica-vs-hermes-agent). 더 많은 선택지는 [Hermes Agent 대안](/alternatives/hermes-agent)에서 볼 수 있어요.",
      ],
      headers: ["제품", "시작 가격", "무료 옵션"],
      rows: [
        [
          "Hermes Agent",
          "무료, 선택 사항인 Nous Portal Plus 월 $20",
          "있음: 에이전트(MIT)와 $0인 Nous Portal Free",
        ],
        ["[OpenClaw](/pricing/openclaw)", "무료. 모델 제공자 비용만 냄", "있음: 프로젝트 전체(MIT)"],
        [
          "[OpenCode](/pricing/opencode)",
          "에이전트 무료, OpenCode Go 월 $10, Go Plus 월 $40",
          "있음: 일일 요청 한도가 있는 무료 모델, 계정 불필요",
        ],
        [
          "[OpenWorker](/personal-agent/openworker)",
          "가격 표시 없음. 내 모델 키나 로컬 모델 사용",
          "있음: 앱(MIT)",
        ],
        [
          "[Grok Bot](/personal-agent/grok-bot)",
          "Premium 월 $30, Super $100, Ultra $200",
          "표시된 것 없음",
        ],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Crewmark로",
      title: "Hermes Agent는 개인 에이전트예요. Crewmark는 코딩 에이전트 팀을 운영해요.",
      text: [
        "Crewmark는 AI 직원 팀을 위한 이슈 트래커예요. 각 직원은 내 컴퓨터에 있는 Claude Code나 Codex 대화로, 직무, 목표, 근무 시간을 가져요. 하트비트에 맞춰 깨어나 공유 보드에서 이슈를 가져가요. 에이전트는 이미 결제하고 있는 Claude나 ChatGPT 구독으로 일하고, 토큰 비용이 따로 청구되지 않아요.",
        "Crewmark 가격: Free는 $0이에요(프로젝트 1개, AI 직원 최대 3명, 사용자 1명). 월 $5인 Pro와 월 $10인 Team은 출시 예정이에요. 결제 기능이 아직 없어서 그때까지는 모든 계정이 Crewmark를 무료로 쓸 수 있어요. 오픈 소스(GPL-3.0)이고 셀프 호스팅할 수 있어요.",
      ],
      steps: [
        { title: "직무 고르기", text: "[AI 직원 직무](/ai-employees)에서 고르고, 목표는 숫자로 정해요." },
        {
          title: "일을 보드에 올리기",
          text: "이슈를 배정하고 정기적인 이슈는 반복되게 설정해요. 하트비트가 직원을 깨워 다음 이슈를 가져가게 해요.",
        },
        {
          title: "요금제 보기",
          text: "[Crewmark 요금](/pricing)을 확인하고, 에이전트가 Crewmark로 하는 일은 [Claude Code 활용 사례](/use-cases/claude-code)와 [Codex 활용 사례](/use-cases/codex)에서 보세요.",
        },
      ],
    },
  ],
  mid: {
    title: "맡은 일을 계속하는 에이전트가 필요하세요?",
    text: "Crewmark는 내 Claude Code나 Codex에 직무, 하트비트, 공유 보드를 줘요.",
    button: "시작하기",
  },
  faq: {
    title: "Hermes Agent 가격 FAQ",
    items: [
      {
        q: "Hermes Agent는 무료인가요?",
        a: "네. 에이전트는 MIT 라이선스의 오픈 소스예요. 모델 제공자에게 비용을 내거나, 원하면 Nous Portal을 구독하면 돼요.",
      },
      {
        q: "Hermes Agent는 한 달에 얼마인가요?",
        a: "에이전트는 $0이에요. 선택 사항인 Nous Portal은 Free $0, Plus 월 $20, Super $100(Plus의 5배 사용량), Ultra $200(Plus의 10배 사용량)이에요. 연간 가격은 표시되어 있지 않아요.",
      },
      {
        q: "Hermes Agent를 쓰려면 Nous Portal 구독이 필요한가요?",
        a: "아니요. Nous Portal은 `hermes model`로 고를 수 있는 여러 제공자 중 하나예요. OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, AWS Bedrock, 로컬 모델, 커스텀 엔드포인트도 고를 수 있어요.",
      },
      {
        q: "내 Claude 구독으로 Hermes Agent를 쓸 수 있나요?",
        a: "추가 사용량을 구매한 Claude Max에서만 가능해요. 문서에 따르면 Claude Pro 구독자는 구독 방식을 쓸 수 없어서, Pro에서는 API 키가 필요해요.",
      },
      {
        q: "Hermes Agent 요금제에 호스팅이 포함되나요?",
        a: "Nous Portal 유료 등급에는 클라우드 호스팅 에이전트 1개가 포함돼요. Plus는 RAM 4 GB와 디스크 25 GB, Super는 4 GB와 100 GB, Ultra는 8 GB와 100 GB예요. 그 외에는 내 컴퓨터나 서버에서 실행해요.",
      },
      {
        q: "내 ChatGPT 구독으로 Hermes Agent를 쓸 수 있나요?",
        a: "ChatGPT/Codex 로그인은 디바이스 코드 방식으로 작동하지만, 문서에 따르면 어떤 ChatGPT 요금제가 되는지, 사용량이 요금제 한도에 어떻게 반영되는지는 현재 문서화되어 있지 않아요.",
      },
    ],
  },
  cta: {
    title: "코딩 에이전트에게 직무와 일정을 주세요.",
    text: "Crewmark는 Claude Code와 Codex 세션을 직무, 목표, 근무 시간, 하트비트를 갖춘 AI 직원으로 바꿔 줘요.",
    button: "시작하기",
  },
  checked:
    "2026년 11월 13일에 hermes-agent.nousresearch.com, portal.nousresearch.com, Hermes Agent 문서와 GitHub README, 그리고 비교한 각 제품의 가격 페이지와 대조해 확인했어요.",
  disclaimer:
    "Crewmark는 독립 제품이며, Nous Research를 비롯해 이 페이지에 나온 어떤 회사와도 제휴하거나 보증을 받지 않았어요. 제품명은 각 소유자의 상표예요.",
};
