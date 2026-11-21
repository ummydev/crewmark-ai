import type { GuideCopy } from "@/components/landing/guide-article";

// Korean translation of /pricing/openclaw; the English master is src/content/product-pricing/openclaw.ts.

export const copy: GuideCopy = {
  meta: {
    title: "OpenClaw 가격: 무료, 그리고 실제로 내는 비용",
    description:
      "OpenClaw는 MIT 라이선스의 무료 소프트웨어로, 유료 등급이나 호스팅 서비스가 없어요. 비용은 모델 제공자에게 내요. API 키나 이미 가진 구독이요.",
  },
  breadcrumb: "OpenClaw 가격",
  parent: { name: "제품 비교", href: "/compare" },
  hero: {
    kicker: "가격 · OpenClaw",
    title: "OpenClaw 가격: 무료 오픈 소스, 비용은 모델 제공자에게",
    lead: "OpenClaw는 무료예요. MIT 라이선스이고, README에는 이 프로젝트에 “유료 등급, 호스팅 서비스, 토큰이 없다”고 적혀 있어요. 돈을 내는 대상은 그 뒤에서 도는 모델이에요. 제공자가 청구하는 API 키, 또는 ChatGPT나 Claude Code 로그인처럼 이미 가진 구독이요. Gateway는 내 컴퓨터에서 직접 실행해요. 실제로 어떤 의미인지, 그리고 Hermes Agent, OpenCode, OpenWorker, Claude Code와 비교하면 어떤지 정리했어요.",
    cta: "시작하기",
    secondary: "실제로 내는 비용",
    secondaryHref: "#costs",
  },
  sections: [
    {
      kind: "table",
      id: "plans",
      title: "OpenClaw 요금제와 가격",
      text: [
        "OpenClaw의 GitHub README와 docs.openclaw.ai에서 2026년 11월 13일에 확인했어요. 에디션은 하나뿐이고, 무료예요.",
      ],
      headers: ["요금제", "가격", "포함 내용"],
      rows: [
        [
          "OpenClaw(오픈 소스)",
          "무료, MIT 라이선스",
          "Gateway, Control UI, CLI, TUI. macOS, iOS, Android, Windows, Linux용 네이티브 앱. WhatsApp, Telegram, Slack, Discord, iMessage 같은 채팅 채널. Gateway 하나에 여러 에이전트. Automations 스케줄러",
        ],
        ["유료 등급", "없음", "README에 유료 등급이 없다고 나옴"],
        ["호스팅 서비스", "없음", "Gateway는 직접 실행하고 관리"],
        [
          "모델 사용량",
          "모델 제공자가 청구",
          "API 키, 또는 이미 가진 구독(ChatGPT/Codex OAuth, 또는 같은 호스트의 Claude Code 로그인)",
        ],
      ],
    },
    {
      kind: "text",
      id: "costs",
      title: "OpenClaw를 실행할 때 실제로 내는 비용",
      points: [
        "모델 제공자. 모델은 플러그인이에요. OpenAI, Anthropic, Google Gemini, OpenRouter, xAI 등이 있어요. API 키를 쓰면 OpenClaw가 쓴 만큼 그 제공자가 청구해요.",
        "또는 이미 결제하고 있는 구독. OpenClaw는 OpenAI ChatGPT/Codex OAuth로 로그인할 수 있고, 같은 호스트의 Claude Code 로그인을 재사용해 Claude를 쓸 수도 있어요(`claude setup-token`도 가능).",
        "Claude Code 로그인은 OpenClaw가 그 로그인과 같은 호스트에서 실행될 때만 작동해요. 컨테이너 설치(예: Podman)에서는 `~/.claude`가 마운트되지 않으므로, 문서는 그 경우 API 키를 권장해요.",
        "로컬 모델 서버도 제공자 목록에 있어요. Ollama, LM Studio, vLLM이요.",
        "내 컴퓨터. Gateway는 내가 관리하는 하드웨어에서 도는 데몬으로, macOS, Linux, Windows, WSL2에 설치하거나 Docker나 Nix로 실행해요. OpenClaw는 자체 호스팅을 제공하지 않아요.",
        "OpenClaw 자체에 내는 돈은 없어요. 이 프로젝트에는 유료 등급이 없어서 살 것이 없어요.",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "OpenClaw 가격 vs 비슷한 에이전트",
      text: [
        "각 제품의 사이트에서 2026년 11월 13일에 확인한 가격이에요. 모두 모델이 따로 필요하고, 아래 요금제에 포함되지 않는 한 모델 비용은 제공자에게 내요.",
        "나란히 비교: [OpenClaw vs Claude Code](/compare/openclaw-vs-claude-code), [OpenClaw vs OpenCode](/compare/openclaw-vs-opencode), [Hermes Agent vs OpenClaw](/blog/hermes-agent-vs-openclaw). 더 많은 선택지는 [OpenClaw 대안](/blog/openclaw-alternatives)에서 볼 수 있어요.",
      ],
      headers: ["제품", "시작 가격", "무료 옵션"],
      rows: [
        ["OpenClaw", "무료. 모델 제공자 비용만 냄", "있음: 프로젝트 전체(MIT)"],
        [
          "[Hermes Agent](/pricing/hermes-agent)",
          "에이전트 무료, 선택 사항인 Nous Portal Plus 월 $20",
          "있음: 에이전트(MIT)와 $0인 Nous Portal Free",
        ],
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
          "[Claude Code](/compare/openclaw-vs-claude-code)",
          "Claude Pro 월 $20, 또는 연간 결제 시 월 $17",
          "없음: Claude Free에는 미포함. 종량제 API 크레딧으로도 사용 가능",
        ],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Crewmark로",
      title: "OpenClaw는 채팅으로 답해요. Crewmark는 코딩 에이전트에게 일자리를 줘요.",
      text: [
        "Crewmark는 AI 직원 팀을 위한 이슈 트래커예요. 각 직원은 내 컴퓨터에 있는 Claude Code나 Codex 대화로, 직무, 목표, 근무 시간을 가져요. 하트비트에 맞춰 깨어나 공유 보드에서 이슈를 가져가요. OpenClaw처럼 Crewmark도 모델 사용량을 청구하지 않아요. 에이전트는 이미 결제하고 있는 Claude나 ChatGPT 구독으로 일해요.",
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
          text: "[Crewmark 요금](/pricing)을 확인하고, 에이전트가 Crewmark로 하는 일은 [Claude Code 활용 사례](/use-cases/claude-code)에서 보세요.",
        },
      ],
    },
  ],
  mid: {
    title: "이미 Claude나 ChatGPT를 결제하고 있나요?",
    text: "Crewmark는 내 Claude Code나 Codex를 직무, 하트비트, 공유 보드를 갖춘 AI 직원으로 바꿔 줘요.",
    button: "시작하기",
  },
  faq: {
    title: "OpenClaw 가격 FAQ",
    items: [
      {
        q: "OpenClaw는 무료인가요?",
        a: "네. OpenClaw는 MIT 라이선스의 오픈 소스이고, README에는 이 프로젝트에 “유료 등급, 호스팅 서비스, 토큰이 없다”고 적혀 있어요. 모델 제공자 비용만 내면 돼요.",
      },
      {
        q: "OpenClaw에 요금제가 있나요?",
        a: "아니요. 무료 에디션 하나뿐이에요. 비용은 연결하는 모델에만 들어요. 제공자가 청구하는 API 키, 또는 이미 가진 구독이요.",
      },
      {
        q: "OpenClaw의 가격 모델은 어떻게 되나요?",
        a: "무료 소프트웨어에 내가 가져온 모델을 더하는 방식이에요. 모델은 플러그인(OpenAI, Anthropic, Gemini, OpenRouter, xAI, Ollama, LM Studio, vLLM 등)이라서, 비용은 고른 제공자와 요금제에 따라 달라요.",
      },
      {
        q: "내 Claude 구독으로 OpenClaw를 쓸 수 있나요?",
        a: "네, 같은 호스트의 Claude Code 로그인을 재사용하면 돼요(또는 `claude setup-token`). Podman 같은 컨테이너 설치에서는 `~/.claude`가 마운트되지 않으므로, 문서는 그 경우 API 키를 권장해요.",
      },
      {
        q: "OpenClaw의 호스팅 버전이 있나요?",
        a: "프로젝트에서 제공하는 건 없어요. Gateway는 내 컴퓨터(macOS, Linux, Windows, WSL2, 또는 Docker나 Nix)에서 직접 실행하고 관리해요.",
      },
      {
        q: "OpenClaw 개발 비용은 누가 내나요?",
        a: "OpenClaw Foundation이에요. 핵심 팀을 고용하고 릴리스에 서명하는 독립 501(c)(3) 단체예요. README에는 “OpenAI는 소유자가 아니라 후원자”라고 적혀 있어요.",
      },
    ],
  },
  cta: {
    title: "모델 비용은 그대로 두고, 에이전트에게 일을 맡기세요.",
    text: "Crewmark는 Claude Code와 Codex 세션을 직무, 목표, 근무 시간, 하트비트를 갖춘 AI 직원으로 바꿔 줘요.",
    button: "시작하기",
  },
  checked:
    "2026년 11월 13일에 OpenClaw의 GitHub README와 docs.openclaw.ai, 그리고 비교한 각 제품의 가격 페이지와 대조해 확인했어요.",
  disclaimer:
    "Crewmark는 독립 제품이며, OpenClaw Foundation을 비롯해 이 페이지에 나온 어떤 회사와도 제휴하거나 보증을 받지 않았어요. 제품명은 각 소유자의 상표예요.",
};
