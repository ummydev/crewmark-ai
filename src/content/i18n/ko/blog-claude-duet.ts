import type { GuideCopy } from "@/components/landing/guide-article";

// Korean translation of /blog/claude-duet; the English master is src/content/blog/claude-duet.ts.

const announcement = "https://claude.com/resources/articles/claude-duet";

export const copy: GuideCopy = {
  meta: {
    title: "Claude Duet란? Anthropic의 선제적 에이전트 대기자 명단·이용 조건·제한 | Crewmark",
    description:
      "Claude Duet는 2026년 10월 21일부터 리서치 프리뷰로 공개된 Anthropic의 선제적 에이전트 앱이에요. 할 수 있는 일, 이용 가능한 사람, 대기자 명단 참여 방법, 비용, 안전 제한, 다른 서비스와의 비교를 정리했어요.",
  },
  breadcrumb: "Claude Duet",
  parent: { name: "블로그", href: "/blog" },
  article: { published: "2026-11-05" },
  hero: {
    kicker: "블로그 · Claude",
    title: "Claude Duet란 무엇이고, 누가 쓸 수 있고, 어떻게 동작할까",
    lead: "Claude Duet는 Claude가 선제적 에이전트로 일하는 Anthropic의 새 앱이에요. 주의가 필요한 일을 먼저 알려 주고, 맡긴 작업을 처리하고, 자리를 비운 사이에도 계속 일하고, 대신 행동하기 전에 먼저 확인을 받아요. 2026년 10월 21일에 대기자 명단 방식의 리서치 프리뷰로 열렸고, 미국의 Pro, Max, Ultra 구독자가 대상이에요. 이 가이드에서는 할 수 있는 일, 이용 방법, 비용, 안전 제한, 다른 서비스와의 비교를 다뤄요.",
    cta: "얼리 액세스 신청",
    secondary: "이용 방법",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "Claude Duet란",
      text: [
        "일반 Claude 채팅은 내가 열어야 시작돼요. Duet는 먼저 다가와요. 연결한 앱을 지켜보고, 짧은 아침 브리프를 보내고, 할 일이 없으면 조용히 있다가, 작업이 끝났거나 결정이 필요할 때 메시지를 보내요. Anthropic은 전문직 종사자와 소규모 사업주를 위해 Claude Opus 5.5를 기반으로 만들었어요.",
      ],
      points: [
        "아침 브리프: 연결한 앱 전반에서 가장 중요한 내용을 매일 짧게 요약해 줘요.",
        "하나의 스레드: 동료에게 말하듯 텍스트나 음성으로 메시지를 보내면, 하나의 대화가 계속 이어져요.",
        "내 Claude 컨텍스트: 첫 메시지부터 내 Claude 계정의 메모리, 스킬, 연결된 앱을 사용해요.",
        "전용 클라우드 컴퓨터: 작업은 자체 브라우저가 있는 가상 머신에서 실행되므로 노트북과 휴대폰이 꺼져 있어도 돼요.",
        "작은 작업부터 큰 작업까지: 회의 일정 잡기, 답장 초안 작성, 미결제 청구서 독촉, 검토용 급여 준비, 대시보드·예측·슬라이드·프로토타입 제작 등.",
        "커넥터: Claude Marketplace의 6,000개가 넘는 커넥터와 플러그인. Gmail, Slack, QuickBooks, Stripe, HubSpot, Docusign, Shopify 등이 있어요.",
      ],
    },
    {
      kind: "table",
      title: "Claude Duet 한눈에 보기",
      headers: ["", "Claude Duet"],
      rows: [
        ["발표", "2026년 10월 21일, 리서치 프리뷰로"],
        ["이용 가능 대상", "미국의 Pro, Max, Ultra 구독자, 대기자 명단을 통해"],
        ["Team과 Enterprise", "아직 포함되지 않음"],
        ["이용 위치", "독립 iOS·Android 앱과 컴퓨터의 claude.ai"],
        ["가격", "별도 가격 없음: 요금제에 포함되며 Claude의 다른 기능과 같은 사용량 제한을 써요"],
        ["모델", "Claude Opus 5.5"],
        ["확인 주기", "몇 시간마다. 어떤 내용을 얼마나 자주 알릴지 직접 선택"],
        ["API", "발표되지 않음"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Claude Duet를 이용하고 설정하는 방법",
      steps: [
        {
          title: "요금제가 대상인지 확인하기",
          text: "미국의 Pro, Max, Ultra 요금제 중 하나가 필요해요. Team과 Enterprise 요금제는 아직 프리뷰에 포함되지 않아요.",
        },
        {
          title: "대기자 명단에 참여하기",
          text: "claude.com/product/claude-duet의 Claude Duet 페이지에서 신청해요. 내 계정에서 Duet를 쓸 수 있게 되면 Anthropic이 이메일로 알려 줘요.",
        },
        {
          title: "앱 열기",
          text: "iOS나 Android에 독립 Claude Duet 앱을 설치하거나, 컴퓨터의 claude.ai에서 사용해요. 메인 Claude 앱과는 별개지만 같은 계정을 써요.",
        },
        {
          title: "지켜볼 앱 연결하기",
          text: "이미 Claude에 연결한 앱은 그대로 이어지고, 한쪽에서 끄면 양쪽에서 모두 꺼져요. 받은편지함, 캘린더, 청구서처럼 중요한 몇 가지부터 시작하세요.",
        },
        {
          title: "알림 받고 싶은 내용 알려 주기",
          text: "무엇을 긴급으로 볼지, 업데이트를 얼마나 자주 받을지 설정해요. 백그라운드 확인은 그때마다 요금제 한도를 쓰므로, 규칙을 적고 날카롭게 둘수록 오래 가요.",
        },
        {
          title: "작업을 맡기고 그 동작을 승인하기",
          text: "동료에게 메시지를 보내듯 말을 걸어요. 읽기와 초안 작성은 스스로 하고, 보내기·결제·서명·삭제 전에는 동작, 수신자, 내용을 보여 주고 승인을 기다려요.",
        },
      ],
      source: { label: "출처: Anthropic의 Claude Duet 발표", href: announcement },
    },
    {
      kind: "text",
      title: "안전, 개인정보, 제한",
      points: [
        "승인: 민감한 메시지를 보내거나 결제하거나 삭제하기 전에 무엇을 할지 정확히 보여 주고 기다려요. 모델과 별개의 검사가 각 동작이 내 의도와 맞는지도 판단해요.",
        "승인해도 절대 허용되지 않는 것: 증권 거래, 계좌 간 자금 이동, 다른 사람의 계정 사용.",
        "비밀번호: 비밀번호, 쿠키, 로그인 토큰은 절대 보지 않아요. 구매에는 해당 판매처와 금액으로 제한된 일회용 카드를 써요.",
        "민감한 데이터: 분류기가 카드 번호, 은행 계좌 번호, 정부 발급 신분증 번호의 공유를 막아요. 건강과 금융 정보는 내가 요청할 때만 공유해요.",
        "메모리: 내가 삭제하거나 초기화할 때까지 대화 기록과 메모리를 보관해요. 앱 연결을 끊으면 새로운 접근은 멈추지만, 이미 알게 된 내용은 메모리를 초기화할 때까지 남아요.",
        "초기 프리뷰: Anthropic에 따르면 스레드를 잘못 읽거나, 무엇이 긴급한지 잘못 판단하거나, 확인과 확인 사이에 도착한 내용을 놓칠 수 있고, 업무보다 개인적인 심부름에 더 약해요.",
      ],
    },
    {
      kind: "table",
      title: "Claude Duet vs ChatGPT dots vs Crewmark",
      text: [
        "세 가지 모두 내가 채팅에 없어도 계속 일하는 에이전트예요. Duet와 [ChatGPT dots](/blog/chatgpt-dots)는 각 회사의 클라우드에서 돌아가는, 업무 앱을 위한 어시스턴트예요. Crewmark는 Claude Code나 Codex처럼 이미 쓰고 있는 코딩 에이전트를 하트비트로 깨워서 보드의 issue를 처리하게 해요.",
      ],
      headers: ["", "Claude Duet", "ChatGPT dots", "Crewmark"],
      rows: [
        ["실행 위치", "Anthropic의 클라우드 컴퓨터", "OpenAI의 클라우드 컴퓨터", "내 컴퓨터, Claude Code, Codex, DeepSeek Harness, OpenCode 안에서"],
        ["작업 시작 방식", "내 메시지와 몇 시간마다 하는 확인", "내 메시지, 일정, 스스로 하는 리서치", "근무 시간 중 15~60분마다 하트비트"],
        ["강점", "받은편지함, 캘린더, 청구서, 브리프, 대시보드", "연결한 앱 전반의 리서치와 작업", "코드, SEO 등 리포지토리의 작업, 직무당 직원 한 명"],
        ["작업 대기열", "하나의 이어지는 스레드", "대화 스레드와 Scheduled", "칸반 보드의 issue"],
        ["비용", "Pro, Max, Ultra에 포함(미국)", "Pro와 Business Premium 요금제", "얼리 액세스, 이미 쓰는 에이전트와 요금제로 실행"],
        ["상태", "리서치 프리뷰, 대기자 명단", "순차 제공 중", "얼리 액세스"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Crewmark와 함께",
      title: "Claude Code에도 같은 선제적 습관을 원한다면?",
      text: [
        "Duet가 지켜보는 것은 받은편지함과 업무 앱이고, Anthropic은 코드 리포지토리에서 일한다고 설명하지 않아요. Crewmark는 같은 발상을 코딩 에이전트에 가져와요. Claude Code, Codex, DeepSeek Harness, OpenCode 세션에 직무, 목표, 근무 시간을 주고 하트비트로 같은 대화 안에서 깨워요.",
      ],
      steps: [
        {
          title: "세션을 직원으로 만들기",
          text: "소프트웨어 엔지니어나 SEO 담당 같은 직무를 고르고, 목표를 숫자로 적은 뒤, Claude Code에서 설정 명령을 실행해요.",
        },
        {
          title: "하트비트로 일 시작하게 하기",
          text: "근무 시간 중에 직원이 15분, 30분, 60분마다 깨어나 하던 일을 이어서 해요. [Claude Code를 선제적으로 만드는 방법](/proactive-claude-code)을 참고하세요.",
        },
        {
          title: "issue를 배정하고 메시지에 답하기",
          text: "보드에 일을 올리면 직원이 가져가서, 진행하며 댓글을 남기고, 결정이 필요할 때 메시지를 보내요. [AI 직원이란](/ai-employees)도 읽어 보세요.",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Claude Duet 이용하고 설정하기" },
  mid: {
    title: "먼저 메시지를 보내 주는 에이전트가 마음에 드시나요?",
    text: "Crewmark는 Claude Code와 Codex에서 이를 해 줘요. 하트비트, 근무 시간, issue 보드를 쓰고, 이미 결제 중인 요금제 그대로 쓸 수 있어요.",
    button: "얼리 액세스 신청",
  },
  faq: {
    title: "Claude Duet 자주 묻는 질문",
    items: [
      {
        q: "Claude Duet란 무엇인가요?",
        a: "2026년 10월 21일부터 리서치 프리뷰 중인 Anthropic의 앱으로, Claude가 선제적 에이전트로 일해요. 연결한 앱을 지켜보고, 아침 브리프를 보내고, 전용 클라우드 컴퓨터에서 작업을 처리하며, 대신 행동하기 전에 승인을 요청해요.",
      },
      {
        q: "Claude Duet는 언제 출시됐나요?",
        a: "Anthropic은 2026년 10월 21일에 대기자 명단과 함께 리서치 프리뷰를 열었어요. 접근 권한은 점진적으로 확대되고, 내 계정에서 쓸 수 있게 되면 Anthropic이 이메일로 알려 줘요.",
      },
      {
        q: "Claude Duet는 어떻게 이용하나요?",
        a: "미국의 Pro, Max, Ultra 요금제로 claude.com/product/claude-duet에서 대기자 명단에 참여해요. 그런 다음 iOS나 Android의 Claude Duet 앱이나 컴퓨터의 claude.ai를 쓰면 돼요.",
      },
      {
        q: "Claude Duet를 Team이나 Enterprise 요금제에서도 쓸 수 있나요?",
        a: "아직은 아니에요. Anthropic의 제품 페이지에는 Team과 Enterprise 요금제가 프리뷰에 포함되지 않는다고 나와 있어요.",
      },
      {
        q: "Claude Duet는 얼마인가요?",
        a: "별도 가격은 없어요. Pro, Max, Ultra에 포함되고 Claude의 다른 기능과 같은 사용량 제한을 쓰며, 백그라운드 확인과 큰 작업은 더 많이 소모해요.",
      },
      {
        q: "Claude Duet는 안전한가요?",
        a: "보내기, 결제, 서명, 삭제 전에 먼저 묻고, 비밀번호나 로그인 토큰은 보지 않으며, 구매에는 일회용 카드를 쓰고, 승인해도 증권 거래나 계좌 간 자금 이동은 할 수 없어요. 초기 프리뷰라서 무엇이 긴급한지 잘못 판단할 수는 있어요.",
      },
      {
        q: "Claude Duet가 내 리포지토리에서 코드를 쓸 수 있나요?",
        a: "전용 클라우드 컴퓨터에서 프로토타입과 웹 앱은 만들 수 있지만, Anthropic은 내 리포지토리용 코딩 에이전트로 내세우지 않아요. 그 용도에는 Claude Code를 쓰고, Crewmark는 하트비트와 issue 보드로 Claude Code 세션을 선제적으로 만들어요.",
      },
    ],
  },
  cta: {
    title: "Claude Code 세션도 선제적으로 일하게 만드세요.",
    text: "Crewmark는 Claude Code, Codex, DeepSeek Harness 세션을 직무, 목표, 근무 시간, 하트비트를 가진 AI 직원으로 바꿔 줘요.",
    button: "얼리 액세스 신청",
  },
  checked: "2026년 11월 5일에 Anthropic의 Claude Duet 발표, 제품 페이지, 안전 관련 글과 대조해 확인했어요.",
  disclaimer:
    "Crewmark는 독립 제품이며 Anthropic 또는 OpenAI와 제휴하거나 승인을 받은 관계가 아니에요. Claude, Claude Duet, Claude Code는 Anthropic의 상표이고, ChatGPT는 OpenAI의 상표예요.",
};
