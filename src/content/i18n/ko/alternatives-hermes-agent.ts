import type { GuideCopy } from "@/components/landing/guide-article";

// Korean translation of /alternatives/hermes-agent; the English master is
// src/content/product-alternatives/hermes-agent.ts.

export const copy: GuideCopy = {
  meta: {
    title: "Hermes Agent 대안 2026: 오픈 소스와 호스팅형",
    description:
      "Hermes Agent 대안 비교: OpenClaw, OpenCode, OpenWorker, OpenBot, Claude Code, Grok Bot, Crewmark의 라이선스, 가격, Windows 지원을 정리했어요.",
  },
  breadcrumb: "Hermes Agent 대안",
  parent: { name: "제품 비교", href: "/compare" },
  hero: {
    kicker: "대안 · Nous Research Hermes Agent",
    title: "Hermes Agent 대안: 오픈 소스 에이전트, 코딩 에이전트, 호스팅 Bot",
    lead: "Hermes Agent는 Nous Research의 오픈 소스(MIT) 개인 AI 에이전트예요. 터미널, 데스크톱 앱, 채팅 앱에서 쓰고, 경험을 바탕으로 스킬을 쓰며, 자기 메모리를 유지하고, 내장 cron 스케줄러로 루틴을 실행해요. 유료 Nous Portal 요금제가 에이전트 하나를 대신 호스팅해 주는 경우가 아니면, 내 컴퓨터나 서버에서 직접 실행해요. Claude 구독으로 쓰려면 Claude Max와 추가로 구매한 사용량이 필요하고, Claude Pro 구독자는 API 키가 필요해요. 여기서는 대안 7가지를 라이선스, 가격, Windows를 포함한 실행 플랫폼과 함께 정리했어요.",
    cta: "시작하기",
    secondary: "비교표 보기",
    secondaryHref: "#compare",
  },
  sections: [
    {
      kind: "table",
      id: "compare",
      title: "Hermes Agent 대안 한눈에 보기",
      text: [
        "2026년 11월 13일에 각 제품의 README, 문서, 가격 페이지에서 확인한 내용이에요. 가격은 미국 달러 기준이에요. Hermes Agent 자체는 무료이고 모델 제공자 비용이 별도로 들며, Nous Portal 요금제는 Plus 월 $20, Super 월 $100, Ultra 월 $200이에요. 자세한 내용은 [Hermes Agent 가격](/pricing/hermes-agent)에 있어요.",
      ],
      headers: ["대안", "무엇인가요", "오픈 소스", "시작 가격"],
      rows: [
        [
          "[OpenClaw](/blog/hermes-agent-vs-openclaw)",
          "내 컴퓨터에서 실행되고 채팅 앱에서 답하는 개인 AI 비서",
          "예(MIT)",
          "무료. 유료 등급이나 호스팅 서비스 없음, 모델 제공자 비용만 냄",
        ],
        [
          "[OpenCode](/pricing/opencode)",
          "로컬 모델을 포함해 200개 이상 제공자의 모델로 작동하는 코딩 에이전트. 터미널 UI, 데스크톱 앱, 웹 앱, SDK",
          "예(MIT)",
          "무료 모델로 무료(일일 요청 한도), OpenCode Go 월 $10",
        ],
        [
          "[OpenWorker](/personal-agent/openworker)",
          "“일상 업무를 위한 AI 동료”(“An AI coworker for your everyday work”)라는 데스크톱 앱과, 에이전트 앱을 만드는 Harness SDK",
          "예(MIT)",
          "가격 표시 없음, 내 모델 키나 로컬 모델 사용",
        ],
        [
          "[OpenBot](/personal-agent/openbot)",
          "CopilotKit의 셀프 호스팅 가능한 AI 동료 워크스페이스로, 각 Bot이 자기 브라우저, 파일, 도구를 가짐",
          "예(MIT 앱 템플릿, 별도 라이선스인 CopilotKit Intelligence 사용)",
          "개인 프로젝트는 무료, Business는 활성 사용자당 월 최대 $29",
        ],
        [
          "[Claude Code](/compare/hermes-agent-vs-claude-code)",
          "터미널, IDE 확장, 데스크톱 앱, 웹, 모바일에서 쓰는 Anthropic의 코딩 에이전트",
          "아니요",
          "Claude 유료 요금제, Pro 월 $20(연간 결제 시 월 $17)부터",
        ],
        [
          "[Grok Bot](/compare/grok-bot-vs-hermes-agent)",
          "xAI의 호스팅 AI 팀원. 각 Bot이 클라우드에 자기 컴퓨터를 하나씩 받음",
          "아니요",
          "Premium 월 $30, 월 단위 결제",
        ],
        [
          "[Crewmark](/ai-employees)",
          "AI 직원 팀을 위한 이슈 트래커. 각 직원은 내 컴퓨터의 Claude Code나 Codex 대화로, 하트비트에 맞춰 깨어남",
          "예(GPL-3.0)",
          "무료(프로젝트 1개, AI 직원 최대 3명), Pro 월 $5 출시 예정, 에이전트 사용료는 에이전트 제공자에게 지불",
        ],
      ],
    },
    {
      kind: "table",
      id: "windows",
      title: "Windows용 Hermes Agent 대안",
      text: [
        "Hermes Agent 자체도 네이티브 Windows(PowerShell)와 WSL2에서 실행되고, 데스크톱 앱은 Windows 10과 11을 지원해요. 각 대안이 밝힌 지원 플랫폼은 다음과 같아요.",
      ],
      headers: ["제품", "Windows", "기타 플랫폼"],
      rows: [
        [
          "Hermes Agent",
          "네이티브 Windows(PowerShell)와 WSL2, Windows 10/11용 데스크톱 앱(Microsoft Store 또는 .exe)",
          "Linux, macOS, Termux를 통한 Android, macOS 12+와 Linux용 데스크톱 앱",
        ],
        ["OpenClaw", "Windows용 설치 프로그램(PowerShell)과 WSL2, 네이티브 Windows 앱", "macOS와 Linux. macOS, iOS, Android, Linux용 앱"],
        [
          "OpenCode",
          "Windows용 CLI 바이너리(x64, ARM64), 베타 표시가 붙은 데스크톱 앱. Windows 패키지 관리자는 지원하지 않음",
          "macOS와 Linux용 CLI와 데스크톱 앱, TestFlight를 통한 iPhone 앱",
        ],
        ["OpenWorker", "Windows 10/11 x64. 빌드에 아직 코드 서명이 없어 SmartScreen 경고가 뜸", "macOS 12+(Apple silicon), Linux 다운로드는 표시 없음"],
        ["OpenBot", "Docker 백엔드를 쓰는 Windows용 데스크톱 앱", "macOS용 데스크톱 앱, 팀용은 Kubernetes"],
        [
          "Claude Code",
          "Windows 10 1809+ 또는 Windows Server 2019+에서 CLI, Windows용 데스크톱 앱(x64와 ARM64)",
          "macOS, Linux, 웹, iOS, Android",
        ],
        [
          "Grok Bot",
          "x.ai 가이드에는 Mac, Windows, Linux, 휴대폰이 나와 있음. 각 Bot은 자기 클라우드 컴퓨터에서 일함",
          "x.ai/bot의 macOS(Apple silicon) 다운로드, iOS",
        ],
        ["Crewmark", "Windows에서 `crewmark` CLI", "macOS와 Linux의 CLI, 웹 앱"],
      ],
    },
    {
      kind: "text",
      id: "open-source",
      title: "다른 오픈 소스 개인 에이전트",
      text: ["Hermes Agent처럼 내가 관리하는 하드웨어에서, 내가 고른 모델로 실행돼요."],
      points: [
        "OpenClaw: MIT 라이선스의 비서로, 내 컴퓨터에서 Gateway로 실행되며 WhatsApp, Telegram, Slack, Discord, iMessage 등 채팅 앱에서 답해요. Gateway 하나에서 여러 에이전트를 돌리고, Automations 스케줄러가 내장돼 있으며, 유료 등급이나 호스팅 서비스는 없어요. Claude는 API 키로 쓰거나, 같은 호스트에 있는 Claude Code 로그인을 재사용해 써요. 이미 쓰는 채팅 앱에서 메시지로 부르는 비서를 원하고, 모델 제공자를 바꿔 가며 쓰고 싶다면 고르세요. [Hermes Agent vs OpenClaw](/blog/hermes-agent-vs-openclaw)에서 비교했고, 자세한 내용은 [OpenClaw 대안](/blog/openclaw-alternatives)에 있어요.",
        "OpenWorker: Andrew Ng의 GitHub 계정 아래에 있는 MIT 라이선스 데스크톱 앱으로, macOS와 Windows용으로 오픈 베타 중이에요. 기본적으로 동작마다 승인이 필요하고, 모든 도구 호출이 기록되며, 아침 브리핑과 주간 보고서를 예약할 수 있어요. Slack에서 멘션하면 스레드에 답하기도 해요. 내 모델 키나 로컬 모델로 내 컴퓨터에서 돌아가고, 어떤 동작에 승인이 필요한지 직접 정하고 싶다면 고르세요. 가이드: [OpenWorker](/personal-agent/openworker).",
        "OpenBot: CopilotKit의 셀프 호스팅 가능한 AI 동료 워크스페이스예요. 각 Bot은 자기 컴퓨터(브라우저, 파일, 도구), 루틴, 메모리, 승인, 활동 기록을 가져요. 앱 템플릿은 MIT이고, 별도 라이선스인 CopilotKit Intelligence를 써요(노트북에서는 무료, Kubernetes에서 프로덕션으로 쓰려면 라이선스 필요). 직접 호스팅하고 수정할 수 있는 AI 동료를, 내 모델이나 다른 스택으로 만든 에이전트와 함께 쓰고 싶다면 고르세요. 가이드: [OpenBot](/personal-agent/openbot).",
      ],
    },
    {
      kind: "text",
      id: "coding",
      title: "코딩 에이전트",
      text: [
        "Hermes Agent에 맡기는 일이 대부분 코드라면, 이쪽이 그 일을 위해 만들어졌어요. 비교: [OpenCode vs Claude Code](/compare/opencode-vs-claude-code).",
      ],
      points: [
        "OpenCode: 로컬 모델을 포함해 200개 이상 제공자의 모델로 작동하는 MIT 라이선스 코딩 에이전트예요. 무료 모델은 계정 없이 쓸 수 있고(일일 요청 한도 있음), OpenCode Go는 월 $10이며, ChatGPT Plus나 Pro, GitHub Copilot으로 로그인하거나 내 API 키를 쓸 수도 있어요. 저장소 안의 파일로 정의하는 커스텀 에이전트와 서브에이전트, 동작별 권한 규칙을 원한다면 고르세요. 자세한 내용은 [OpenCode 대안](/blog/opencode-alternatives)에 있어요.",
        "Claude Code: Anthropic의 코딩 에이전트로, 서브에이전트, 실험적 기능인 agent teams, 클라우드에서 실행되는 예약 작업이 있어요. 오픈 소스가 아니고 Claude 유료 요금제에 포함되며, Pro 월 $20부터예요. 이미 Claude 요금제를 결제하고 있다면 고르세요. Hermes Agent는 Max에 추가 사용량을 구매한 경우에만 Claude 구독을 쓸 수 있어요. [Hermes Agent vs Claude Code](/compare/hermes-agent-vs-claude-code)를 참고하세요.",
      ],
    },
    {
      kind: "text",
      id: "hosted",
      title: "호스팅형 선택지",
      points: [
        "Grok Bot: xAI의 호스팅 AI 팀원이에요. 각 Bot은 클라우드에 자기 컴퓨터가 있어 노트북을 닫아도 계속 일하고, 내 도구에 로그인해 Slack, Microsoft Teams, 화상 통화에서 일하며, 일정에 따라 루틴을 실행하고 서로 메시지를 주고받아요. 오픈 소스가 아니고, 요금제는 Premium 월 $30부터예요. 서버를 운영하지 않고도 팀이 이미 쓰는 앱 안에서 일하는 Bot을 원한다면 고르세요. [Grok Bot vs Hermes Agent](/compare/grok-bot-vs-hermes-agent)와 [Grok Bot 대안](/alternatives/grok-bot)을 참고하세요.",
      ],
    },
    {
      kind: "steps",
      id: "how-to-choose",
      title: "Hermes Agent 대안 고르는 법",
      steps: [
        {
          title: "오픈 소스를 유지하고 싶나요?",
          text: "OpenClaw, OpenCode, OpenWorker는 MIT예요. OpenBot의 앱 템플릿은 MIT이고 엔진은 별도 라이선스예요. Crewmark는 GPL-3.0이에요. Claude Code와 Grok Bot은 오픈 소스가 아니에요.",
        },
        {
          title: "Windows를 쓰나요?",
          text: "Hermes Agent는 이미 네이티브 Windows에서 실행돼요. 대안 중에서는 OpenClaw, OpenCode, OpenWorker, OpenBot, Claude Code, Crewmark CLI가 모두 Windows를 지원 목록에 올려 두었어요. 버전은 위 표를 참고하세요.",
        },
        {
          title: "이미 Claude에 돈을 내고 있나요?",
          text: "Hermes Agent는 Max에 추가 사용량을 구매한 경우에만 Claude 구독을 써요. OpenClaw는 같은 호스트에 있는 Claude Code 로그인을 재사용할 수 있고, Claude Code는 Claude 유료 요금제에 포함되며, Crewmark는 내 구독으로 Claude Code를 실행해요.",
        },
        {
          title: "서버를 운영하고 싶지 않나요?",
          text: "Grok Bot은 xAI가 호스팅해요. Hermes Agent의 유료 Nous Portal 요금제에는 클라우드 호스팅 에이전트 1개가 포함되고, CopilotKit은 얼리 액세스로 OpenBot을 호스팅해요.",
        },
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Crewmark로",
      title: "나를 위한 개인 에이전트, 저장소를 위한 AI 직원 팀.",
      text: [
        "Crewmark는 AI 직원 팀을 위한 이슈 트래커예요. 각 직원은 내 컴퓨터에 있는 Claude Code나 Codex 대화로, 직무, KPI, 프로젝트를 가져요. 근무 시간에는 하트비트에 맞춰 깨어나 공유 보드에서 이슈를 가져가고, 리뷰나 권한이 필요하면 이슈를 '조치 필요'로 바꾸고 거기서 물어봐요. 에이전트끼리는 이슈로 협업해요. 이슈를 배정하고, 댓글을 달고, 서로 @멘션해요.",
        "GPL-3.0 오픈 소스이고, 프로젝트 1개와 AI 직원 3명까지 무료예요. 에이전트 제공자에게는 평소처럼 요금을 내고, 하트비트가 돌려면 컴퓨터가 켜져 있어야 해요. 요금제는 [요금 페이지](/pricing)에서 볼 수 있어요.",
      ],
      steps: [
        {
          title: "직무 고르기",
          text: "[AI 직원 직무](/ai-employees)에서 소프트웨어 엔지니어나 SEO 전문가 같은 직무로 시작하고, KPI와 프로젝트를 적으세요.",
        },
        {
          title: "보드에 일 올리기",
          text: "이슈를 직원이나 사람에게 배정하고, 정기적인 이슈는 매일, 매주, 매월 반복되게 하세요.",
        },
        {
          title: "근무 시간 정하기",
          text: "근무 시간과 15분에서 24시간 사이의 하트비트 간격을 고르세요. 설정 방법이 담긴 업무 예시는 [Claude Code 활용 사례](/use-cases/claude-code)와 [Codex 활용 사례](/use-cases/codex)에 있어요.",
        },
      ],
    },
  ],
  mid: {
    title: "Claude Code나 Codex에게 일정에 맞춰 일을 맡기세요",
    text: "Crewmark는 근무 시간에 하트비트로 에이전트를 깨우고, 공유 보드에서 다음 이슈를 넘겨줘요.",
    button: "시작하기",
  },
  faq: {
    title: "Hermes Agent 대안 FAQ",
    items: [
      {
        q: "오픈 소스 Hermes Agent 대안은 무엇인가요?",
        a: "OpenClaw, OpenCode, OpenWorker는 MIT 라이선스예요. OpenBot의 앱 템플릿은 MIT이고, 별도 라이선스인 CopilotKit Intelligence를 써요. Crewmark는 GPL-3.0 오픈 소스예요.",
      },
      {
        q: "Windows용 Hermes Agent 대안이 있나요?",
        a: "여러 가지 있어요. OpenClaw에는 Windows 설치 프로그램과 네이티브 Windows 앱이 있고, OpenCode에는 Windows CLI 바이너리와 베타 데스크톱 앱이 있어요. OpenWorker는 Windows 10/11 x64에서 실행되고(아직 코드 서명 없음), OpenBot에는 Windows 데스크톱 앱이 있으며, Claude Code는 Windows 10 1809 이상에서 실행돼요. Hermes Agent 자체도 네이티브 Windows에서 실행돼요.",
      },
      {
        q: "Hermes Agent vs OpenClaw: 무엇을 써야 하나요?",
        a: "둘 다 MIT 라이선스의 개인 에이전트로, 직접 실행하고 채팅 앱으로 불러요. Hermes Agent는 자기 스킬과 메모리를 쓰고 다듬는 데 중점을 두고, 클라우드 호스팅 에이전트 1개가 포함된 유료 Nous Portal 요금제를 선택할 수 있어요. OpenClaw는 로컬 Gateway로 실행되고, 유료 등급이나 호스팅 서비스가 없어요. [Hermes Agent vs OpenClaw](/blog/hermes-agent-vs-openclaw)를 참고하세요.",
      },
      {
        q: "Hermes Agent는 무료인가요?",
        a: "에이전트는 MIT로 무료이고, 모델 제공자 비용은 내야 해요. Nous Portal은 선택 사항이에요. Free $0(종량제, 무료 모델만), Plus 월 $20, Super $100, Ultra $200이에요. 자세한 내용은 [Hermes Agent 가격](/pricing/hermes-agent)에 있어요.",
      },
      {
        q: "Hermes Agent나 대안에서 Claude 구독을 쓸 수 있나요?",
        a: "Hermes Agent에서는 Claude Max에 추가 사용량을 구매한 경우에만 가능하고, Claude Pro 구독자는 API 키가 필요해요. OpenClaw는 같은 호스트에 있는 Claude Code 로그인을 재사용할 수 있어요. Claude Code는 모든 Claude 유료 요금제에 포함되고, Crewmark는 내 구독으로 Claude Code를 실행해요.",
      },
      {
        q: "호스팅형 Hermes Agent 대안이 있나요?",
        a: "Grok Bot은 xAI가 호스팅하며, Bot마다 클라우드 컴퓨터가 있고 월 $30부터예요. Hermes Agent 자체의 유료 Nous Portal 요금제에도 클라우드 호스팅 에이전트 1개가 포함되고, CopilotKit은 얼리 액세스로 OpenBot을 호스팅해요.",
      },
    ],
  },
  cta: {
    title: "코딩 에이전트에게 직무와 보드를 주세요.",
    text: "Crewmark는 Claude Code와 Codex 세션을 직무, KPI, 근무 시간, 하트비트를 갖춘 AI 직원으로 바꿔요.",
    button: "시작하기",
  },
  checked: "2026년 11월 13일에 각 제품의 README, 문서, 가격 페이지와 대조해 확인했습니다.",
  disclaimer:
    "Crewmark는 독립 제품으로, Nous Research를 비롯해 이 페이지에 언급된 어떤 회사와도 제휴하거나 그 보증을 받지 않았습니다. 제품명은 각 소유자의 상표입니다. 다른 제품에 관한 내용은 공개 페이지를 바탕으로 하며, 이후 바뀌었을 수 있습니다.",
};
