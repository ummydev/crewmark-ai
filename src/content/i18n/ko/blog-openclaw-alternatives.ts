import type { GuideCopy } from "@/components/landing/guide-article";

// Korean translation of /blog/openclaw-alternatives; the English master is src/content/blog/openclaw-alternatives.ts.

const openclaw = "https://github.com/openclaw/openclaw";

const sandbox = `# OpenClaw: tools run on the host for the main session
# unless you configure sandboxing (docs: gateway/sandboxing)

# NanoClaw: one Docker container per session, by design
# Hermes Agent: optional Docker or Modal isolation
# ZeroClaw: Landlock, Bubblewrap, Seatbelt or Docker
# IronClaw: WASM sandbox, plus a Docker sandbox for jobs
# NemoClaw: runs OpenClaw or Hermes inside NVIDIA OpenShell`;

export const copy: GuideCopy = {
  meta: {
    title: "OpenClaw 대안: Hermes, NanoClaw 등 (2026) | Crewmark AI",
    description:
      "OpenClaw 대안을 각 프로젝트 문서를 바탕으로 비교했어요. Hermes Agent, NanoClaw, ZeroClaw, IronClaw, NVIDIA NemoClaw가 어떻게 돌아가는지, 어떤 모델과 구독을 지원하는지, 보안 모델은 어떤지, 그리고 Crewmark 같은 업무용 선택지가 더 잘 맞는 경우를 정리했어요.",
  },
  breadcrumb: "OpenClaw 대안",
  parent: { name: "블로그", href: "/blog" },
  article: { published: "2026-11-07" },
  hero: {
    kicker: "블로그 · AI 에이전트",
    title: "OpenClaw 대안: Hermes, NanoClaw, ZeroClaw, IronClaw 외",
    lead: "OpenClaw는 내 컴퓨터에서 돌아가는 오픈소스 AI 비서로, WhatsApp, Telegram, Slack, Discord 등 20개가 넘는 채널에서 답해 줘요. GitHub 스타가 약 394,000개로 가장 유명하지만 유일한 선택지는 아니에요. 대안을 찾는 이유는 보통 세 가지예요. 기본값부터 더 엄격한 보안, 다른 모델이나 구독, 더 가벼운 런타임이죠. 이 가이드는 주요 선택지를 각 프로젝트 문서를 바탕으로 비교하고, 개인 비서가 필요할 때와 팀 일을 대신하는 에이전트가 필요할 때를 구분해 설명해요.",
    cta: "시작하기",
    secondary: "대안 비교하기",
    secondaryHref: "#alternatives",
  },
  sections: [
    {
      kind: "text",
      title: "OpenClaw 한눈에 보기",
      text: [
        "OpenClaw는 Clawdbot으로 시작했고, Anthropic이 상표를 이유로 이름 변경을 요청하자 2026년 1월 하순 Moltbot을 거쳐 OpenClaw로 이름을 바꿨어요. 만든 사람은 Peter Steinberger인데, 이후 OpenAI에 합류했고 프로젝트는 2026년 7월 발표된 독립 재단 OpenClaw Foundation으로 옮겨졌어요. 재단은 OpenAI가 \"소유자가 아니라 후원자\"라고 밝혔어요. 최신 릴리스는 2026년 11월 5일에 나온 v2026.11.1이에요.",
      ],
      points: [
        "macOS, Linux, Windows, WSL2에서 로컬 Gateway 데몬으로 돌아가고, 데스크톱과 모바일 앱도 있어요.",
        "모델은 플러그인 방식이에요. Claude(API 키, 또는 같은 컴퓨터의 Claude Code 로그인 재사용), OpenAI와 Codex, Ollama 같은 로컬 모델을 지원해요.",
        "보안: 들어오는 메시지는 신뢰하지 않는 것으로 취급하고 모르는 발신자는 페어링을 거치게 해요. 하지만 샌드박스를 설정하지 않으면 메인 세션의 도구는 호스트에서 바로 실행돼요.",
        "보안 수정 내역을 공개해요. 2026년 1월 이후 보안 권고가 722건, 그중 14건이 치명적 등급이었고 모두 수정·공개됐어요. Trail of Bits 감사도 받았고 지적 사항은 모두 수정됐어요.",
      ],
    },
    {
      kind: "table",
      id: "alternatives",
      title: "OpenClaw 대안 비교",
      text: ["2026년 11월 7일 기준 각 프로젝트의 README, 공식 사이트, 문서와 GitHub API에 나온 정보예요. 스타 수는 반올림했어요."],
      headers: ["", "무엇인가", "실행 환경", "모델과 구독", "격리 방식", "라이선스, 스타"],
      rows: [
        ["OpenClaw", "채팅 앱에서 쓰는 개인 AI 비서", "macOS, Linux, Windows, WSL2, 모바일 앱", "Claude는 API 키 또는 로컬 Claude Code 로그인, ChatGPT/Codex OAuth, 로컬 모델", "기본은 호스트에서 실행, 샌드박스는 선택", "MIT, 약 394k"],
        ["Hermes Agent (Nous Research)", "학습 루프를 내장해 스스로 나아지는 에이전트", "Linux, macOS, Windows, WSL2, Android, 데스크톱 앱", "모든 제공업체. Claude 구독은 추가 사용량 크레딧이 있는 Max에서만 가능(Pro 불가). ChatGPT/Codex OAuth", "위험한 명령은 승인 필요, Docker나 Modal 선택", "MIT, 약 261k"],
        ["NanoClaw", "에이전트를 컨테이너에서 돌리는 가벼운 비서", "macOS, Linux, WSL2. Docker와 Claude Code 필요", "Claude는 API 키 또는 Claude Code를 통한 구독. Codex, OpenCode, Ollama는 skill로 지원", "세션마다 컨테이너 하나, 자격 증명은 컨테이너에 들어가지 않음", "MIT, 약 31k"],
        ["ZeroClaw", "Rust 바이너리 하나로 된 에이전트 런타임", "Linux, macOS, Windows, FreeBSD, Docker, Raspberry Pi 같은 보드", "Anthropic, OpenAI, Ollama 외 약 20곳, Codex 구독, setup-token으로 Claude Max", "기본적으로 감독 모드, OS 샌드박스", "MIT 또는 Apache 2.0, 약 33k"],
        ["IronClaw (NEAR AI)", "프라이버시와 보안에 집중한 비서", "macOS, Linux, Windows 또는 TEE 안의 NEAR AI Cloud", "제공업체 API 키(Anthropic, OpenAI, Gemini, Ollama 등)", "WASM 샌드박스, 자격 증명은 경계에서 주입", "MIT 또는 Apache 2.0, 약 13k. 클라우드는 월 0~200달러"],
        ["NVIDIA NemoClaw", "OpenClaw나 Hermes를 OpenShell 샌드박스에서 돌리는 보안 스택(알파)", "Linux와 DGX Spark 우선, Docker, Colima, Podman", "API로 NVIDIA Endpoints, OpenRouter, OpenAI, Anthropic, Gemini", "외부 통신을 제어하는 OpenShell 샌드박스", "Apache 2.0, 약 23k"],
        ["Crewmark", "일을 위한 AI 직원: 역할, 목표, 공유 보드", "호스팅 보드, 데몬은 macOS, Windows, Linux", "Claude Code, Codex, DeepSeek Harness, OpenCode 안에서 기존 요금제 그대로 실행", "직원마다 자기 세션과 체크아웃", "상용"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "OpenClaw 대안 고르는 법",
      steps: [
        {
          title: "무엇에 쓸지 정하기",
          text: "휴대폰으로 메시지를 보내는 개인 비서(OpenClaw, Hermes, NanoClaw, ZeroClaw, IronClaw)와 저장소에서 팀의 백로그를 처리하는 에이전트(Crewmark, 또는 여러 [Claude Code 에이전트](/blog/multiple-claude-code-agents))는 서로 다른 일이에요.",
        },
        {
          title: "도구를 어떻게 격리하는지 확인하기",
          text: "이게 가장 큰 차이예요. 에이전트가 다른 사람이 보낸 메시지를 읽게 된다면, 기본값부터 컨테이너나 OS 수준으로 격리하는 걸 고르세요.",
          code: sandbox,
        },
        {
          title: "누구 요금으로 돌아가는지 확인하기",
          text: "구독 지원은 제각각이에요. Claude Code 로그인이나 setup token을 재사용하는 것도 있고, Hermes는 추가 사용량 크레딧이 있는 Claude Max가 필요하며, API 키가 필요한 것도 있어요. 서드파티 사용에 관한 제공업체 약관도 확인하세요.",
        },
        {
          title: "플랫폼 확인하기",
          text: "Windows에서는 OpenClaw, Hermes, ZeroClaw, IronClaw를 네이티브로 설치할 수 있고, NanoClaw는 WSL2가 필요하며, NemoClaw는 Linux에서 먼저 테스트돼요. 아주 가볍게 돌리거나 하드웨어 보드에서 쓰려면 ZeroClaw예요.",
        },
        {
          title: "채널 하나, 최소 권한으로 시작하기",
          text: "채팅 앱 하나만 연결하고 내 계정만 허용한 뒤, 어떻게 동작하는지 보고 나서 권한을 넓히세요.",
        },
      ],
      source: { label: "출처: OpenClaw README", href: openclaw },
    },
    {
      kind: "text",
      title: "나에게 맞는 OpenClaw 대안",
      points: [
        "더 엄격하게 격리된 OpenClaw를 원한다면: NanoClaw(설계부터 컨테이너), 또는 NemoClaw로 OpenClaw 자체를 NVIDIA 샌드박스 안에서 돌리세요.",
        "배우면서 자기 skill을 개선하는 에이전트를 원한다면: Hermes Agent.",
        "작고 빠른 런타임이 필요하거나 보드에서 돌려야 한다면: ZeroClaw.",
        "프라이버시 기능과 관리형 클라우드 옵션을 원한다면: IronClaw.",
        "OpenClaw와 Claude Code 사이에서 고민한다면: OpenClaw는 채팅 중심 비서이고, Claude Code는 저장소에서 일하는 코딩 에이전트예요. 프롬프트 없이도 Claude Code가 계속 일하게 하려면 [Claude Code를 능동적으로 만드는 방법](/proactive-claude-code)을 보세요.",
        "이미 결제한 Claude Code나 Codex 요금제로, 공유 보드에서 팀의 일을 처리하는 에이전트를 원한다면: Crewmark(아래). [superagent 비교](/blog/superagent)도 참고하세요.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Crewmark로",
      title: "개인 비서가 아니라 AI 직원 팀",
      text: [
        "OpenClaw와 그 대안들은 내 메시지를 기다려요. Crewmark는 일을 위해 만들어졌어요. Claude Code, Codex, DeepSeek Harness, OpenCode 세션을 역할, 목표, 근무 시간이 있는 AI 직원으로 바꾸고, 하트비트로 깨워 공유 보드에서 다음 이슈를 가져가게 하며, 결정이 필요하면 메시지를 보내게 해요.",
      ],
      steps: [
        {
          title: "역할 고르기",
          text: "[SEO 전문가](/ai-employees/seo-specialist), [소프트웨어 엔지니어](/ai-employees/software-engineer), [마케팅 에이전트](/ai-employees/marketing-agent) 등이 있고, 각자의 목표는 언제든 바꿀 수 있어요.",
        },
        {
          title: "이미 쓰는 에이전트 연결하기",
          text: "자기 세션과 체크아웃에서, 이미 결제한 구독 그대로 돌아가요.",
        },
        {
          title: "일을 맡기고 승인하기",
          text: "보드를 채우면 직원이 다음 이슈를 가져가고, 승인 목록에 있는 일은 하기 전에 먼저 물어봐요. [AI 직원이란](/ai-employees)을 읽어 보세요.",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "OpenClaw 대안 고르기" },
  mid: {
    title: "대화만 하는 게 아니라 일하는 에이전트가 필요한가요?",
    text: "Crewmark는 Claude Code와 Codex를 AI 직원으로 돌려, 하트비트마다 보드에서 다음 이슈를 가져가게 해요.",
    button: "시작하기",
  },
  faq: {
    title: "OpenClaw 대안 FAQ",
    items: [
      {
        q: "가장 좋은 OpenClaw 대안은 무엇인가요?",
        a: "떠나는 이유에 따라 달라요. 컨테이너 격리는 NanoClaw, 스스로 나아지는 에이전트는 Hermes Agent, 작은 Rust 런타임은 ZeroClaw, 프라이버시 기능과 관리형 클라우드는 IronClaw, 개인 비서가 아니라 팀의 일을 하는 에이전트를 원한다면 Crewmark예요.",
      },
      {
        q: "오픈소스 OpenClaw 대안이 있나요?",
        a: "네. Hermes Agent(MIT), NanoClaw(MIT), ZeroClaw(MIT 또는 Apache 2.0), IronClaw(MIT 또는 Apache 2.0), NVIDIA NemoClaw(Apache 2.0) 모두 오픈소스예요.",
      },
      {
        q: "OpenClaw와 Hermes Agent는 뭐가 다른가요?",
        a: "둘 다 채팅 앱에서 쓰는 오픈소스 비서예요. Nous Research의 Hermes Agent는 자기 skill을 개선하는 학습 루프가 중심이고 컨테이너 격리를 선택할 수 있어요. OpenClaw는 커뮤니티가 더 크고 채널도 더 많아요. Claude 구독 규칙도 달라서, Hermes는 추가 사용량 크레딧이 있는 Claude Max가 필요해요.",
      },
      {
        q: "NanoClaw가 OpenClaw보다 안전한가요?",
        a: "NanoClaw는 설계상 모든 세션을 자기 컨테이너에서 돌리고 자격 증명은 그 밖에 둬요. OpenClaw는 샌드박스를 설정하지 않으면 메인 세션의 도구를 호스트에서 실행해요. 둘 다 잠글 수 있지만, NanoClaw는 처음부터 그렇게 시작해요.",
      },
      {
        q: "OpenClaw에서 내 Claude 구독을 쓸 수 있나요?",
        a: "OpenClaw 문서에는 Claude를 쓰는 두 가지 방법이 나와요. API 키, 또는 같은 컴퓨터의 Claude Code 로그인 재사용이에요. 문서는 제공업체 이름만으로는 사용량이 API로 청구되는지 구독으로 청구되는지 알 수 없다고도 경고해요.",
      },
      {
        q: "Windows용 OpenClaw 대안이 있나요?",
        a: "Hermes Agent는 Windows 데스크톱 앱이 있고, ZeroClaw와 IronClaw도 Windows에 네이티브로 설치돼요. OpenClaw 자체도 Windows와 WSL2를 지원하고, NanoClaw는 WSL2가 필요해요.",
      },
      {
        q: "NemoClaw는 무엇인가요?",
        a: "NVIDIA가 만든 알파 단계의 오픈소스 스택으로, OpenClaw, Hermes, LangChain Deep Agents를 NVIDIA OpenShell 샌드박스 안에서 돌려요. OpenClaw를 더 안전하게 돌리는 방법이지, OpenClaw를 대체하는 건 아니에요.",
      },
    ],
  },
  cta: {
    title: "팀의 백로그를 AI 에이전트에게 맡기세요.",
    text: "Crewmark는 Claude Code, Codex, DeepSeek Harness, OpenCode 세션을 역할, 목표, 근무 시간, 하트비트가 있는 AI 직원으로 바꿔요.",
    button: "시작하기",
  },
  checked: "2026년 11월 7일에 각 프로젝트의 README, 웹사이트, 문서나 블로그, 그리고 GitHub API와 대조해 확인했어요.",
  disclaimer:
    "Crewmark는 독립 제품이며 OpenClaw Foundation, Nous Research, NanoCo, ZeroClaw Labs, NEAR AI, NVIDIA, Anthropic, OpenAI와 제휴 관계가 아니고 그들의 보증을 받지 않았어요. 제품 이름은 각 소유자의 상표예요.",
};
