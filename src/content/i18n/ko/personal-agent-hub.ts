import type { GuideCopy } from "@/components/landing/guide-article";

// ko translation of /personal-agent; the English master is src/content/personal-agent-hub.ts.

export const copy: GuideCopy = {
  meta: {
    title: "개인 AI 에이전트 2026: Muse, Grok Bot, Dots 비교",
    description:
      "개인 AI 에이전트란 무엇이고 요즘 많이 찾는 제품은 무엇인지, 각 제조사의 공식 페이지를 바탕으로 비교해요: Meta Muse, Grok Bot, ChatGPT dots, Claude Duet, Manus Cue, Gemini 작업, Microsoft Autopilot, OpenClaw, Hermes Agent.",
  },
  breadcrumb: "개인 에이전트",
  hero: {
    kicker: "개인 에이전트",
    title: "2026년 개인 AI 에이전트: 무엇이고, 어떤 걸 써야 할까",
    lead: "개인 에이전트는 나와 대화만 하는 게 아니라 나를 위해 일하는 AI예요. 자기 컴퓨터나 브라우저를 갖고, 내 앱에 로그인하고, 내 취향을 기억하고, 앱을 닫아도 계속 일하다가 결정이 필요할 때 돌아와요. 최근 몇 달 사이 Meta, xAI, OpenAI, Anthropic, Google, Microsoft, Manus가 모두 하나씩 내놓았어요. 이 페이지에서는 이들의 공통점을 설명하고, 각 제조사의 공식 페이지를 바탕으로 비교하고, 제품별 가이드로 연결해 드려요.",
    cta: "시작하기",
    secondary: "비교해 보기",
    secondaryHref: "#compare",
  },
  sections: [
    {
      kind: "text",
      title: "개인 에이전트란",
      text: [
        "챗봇은 답하고 기다려요. 개인 에이전트는 목표를 받아 단계를 계획하고, 웹과 내 앱에서 직접 해내요. 내가 자리에 없을 때도요. 새로 나온 에이전트에는 다섯 가지 공통점이 있어요.",
      ],
      points: [
        "자기 컴퓨터: 사람처럼 클릭하고 입력하고 양식을 채우는 클라우드 머신이나 브라우저.",
        "내 앱: 이메일, 캘린더, 파일, 채팅을 내가 고른 권한으로.",
        "기억: 내 취향을 익혀서 같은 지시를 두 번 할 필요가 없어요.",
        "상시 작동: 예약 작업과 반복 작업, 앱을 닫은 뒤에도 이어지는 일.",
        "승인: 보내기, 구매 등 민감하다고 표시한 일 앞에서는 내 허락을 기다려요.",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "개인 AI 에이전트 비교",
      text: ["2026년 11월 10일 각 제조사의 공식 페이지 기준이에요. 이용 가능 범위가 빠르게 바뀌니 가입 전에 확인하세요."],
      headers: ["에이전트", "제조사", "용도", "이용 대상", "가장 저렴한 시작 방법"],
      rows: [
        ["[Meta Muse](/personal-agent/meta-muse)", "Meta", "일상 업무와 생활 잡무", "미국, 만 18세 이상, Meta 계정", "주간 한도 내 무료; Power 월 $20"],
        ["[Grok Bot](/personal-agent/grok-bot)", "xAI", "업무: 내 앱 안에서 일하는 Bot 팀", "X Premium, Super, Ultra; SuperGrok; Cursor 요금제", "무료 체험 크레딧"],
        ["[ChatGPT dots](/blog/chatgpt-dots)", "OpenAI", "ChatGPT 안에서 오래 이어지는 목표", "ChatGPT Pro와 Business Premium", "ChatGPT Pro"],
        ["[Claude Duet](/blog/claude-duet)", "Anthropic", "먼저 찾아오는 능동적인 Claude", "미국의 Claude Pro, Max, Ultra, 대기자 명단", "Claude Pro"],
        ["[Base44 Superagent](/personal-agent/base44-superagent)", "Base44", "WhatsApp, Telegram, Slack, 브라우저에서 쓰는 워크플로 포함 개인 에이전트", "Base44 계정이 있는 누구나", "Base44 요금제 크레딧; Starter 연간 결제 시 월 $16"],
        ["[Manus Cue](/personal-agent/manus-cue)", "Manus", "자기 이메일, 전화번호, 지갑, 컴퓨터를 가진 에이전트", "초대제 얼리 액세스", "얼리 액세스 기간 무료"],
        ["[Gemini 작업(Spark)](/personal-agent/gemini-spark)", "Google", "Gemini에서 심부름, 리서치, 파일 작업", "Google AI Pro 또는 Ultra, EEA·영국·스위스 제외", "Google AI Pro"],
        ["Microsoft Autopilot(Scout)", "Microsoft", "Microsoft 365와 Teams에서의 업무", "Frontier 조직, GitHub Copilot 라이선스 필요", "소속 조직을 통해"],
        ["[OpenClaw](/blog/openclaw-alternatives)", "오픈소스", "내 채팅 앱에서 쓰는 셀프 호스팅 어시스턴트", "누구나; 내 컴퓨터에서 실행", "무료; 모델 비용은 직접 부담"],
        ["[Hermes Agent](/blog/hermes-agent-vs-openclaw)", "Nous Research, 오픈소스", "스킬을 익히는 셀프 호스팅 에이전트", "누구나; 내 컴퓨터에서 실행", "무료; 모델 비용은 직접 부담"],
      ],
    },
    {
      kind: "text",
      id: "which",
      title: "어떤 개인 에이전트를 써야 할까요?",
      points: [
        "생활 잡무를 도와줄 에이전트가 필요하고 아직 돈은 내고 싶지 않다면: 미국에서 무료인 Meta Muse. [Meta Muse 활용 사례](/personal-agent/meta-muse-use-cases)를 참고하세요.",
        "업무를 일정에 맞춰 처리하는 에이전트 팀을 원한다면: 일정이나 트리거로 실행되는 루틴이 있는 Grok Bot. [Grok Bot 루틴](/personal-agent/grok-bot-routines)을 참고하세요.",
        "이미 ChatGPT Pro를 쓰고 있다면 ChatGPT dots. Claude Pro 이상이라면 대기자 명단을 통해 Claude Duet.",
        "Google 앱 위주로 생활한다면 Google AI Pro의 Gemini 작업. 회사에서 Microsoft 365를 쓴다면, 조직이 Frontier에 속해 있을 때 Autopilot.",
        "전화를 걸고 예산 안에서 결제까지 하는 에이전트를 원한다면: 얼리 액세스 중인 Manus Cue. [Manus Cue](/personal-agent/manus-cue)를 참고하세요.",
        "내 컴퓨터에서 내 모델로 돌리고 싶다면: 둘 다 오픈소스인 OpenClaw나 Hermes Agent.",
      ],
    },
    {
      kind: "table",
      id: "ai-coworkers",
      title: "업무용 AI 동료",
      text: [
        "잡무보다 업무를 위해 만들어진 에이전트로, 제품마다 가이드가 있어요. 2026년 11월 13일 각 제조사의 공식 페이지 기준이에요. 더 많은 내용은 [AI 동료 도구 비교](/blog/ai-coworker)에서 볼 수 있어요.",
      ],
      headers: ["AI 동료", "제조사", "용도", "가장 저렴한 시작 방법"],
      rows: [
        ["[Claude Cowork](/personal-agent/claude-cowork)", "Anthropic", "Claude 앱에서 리서치, 문서, 스프레드시트, 슬라이드", "Claude Pro, 월 $20"],
        ["[Copilot Cowork](/personal-agent/copilot-cowork)", "Microsoft", "Outlook, Teams, Office 파일을 오가는 여러 단계 작업", "Microsoft 365 Copilot 라이선스와 Copilot Credits"],
        ["[ChatGPT Work](/personal-agent/chatgpt-work)", "OpenAI", "발표 자료, 스프레드시트, 분석이 결과물인 작업", "ChatGPT Free는 데스크톱 앱에서 제한적; Plus 월 $20부터 전체 이용"],
        ["[Cursor Projects](/personal-agent/cursor-projects)", "Cursor", "여러 클라우드 코딩 에이전트를 돌리는 코디네이터 에이전트", "Cursor Premium, 월 $30"],
        ["[Lindy](/personal-agent/lindy)", "Lindy", "이메일, Slack, iMessage, 전화에서 일하는 비서", "무료 체험; 이후 활성 사용자당 월 $29.99"],
        ["[OpenWorker](/personal-agent/openworker)", "Andrew Ng, 오픈소스", "행동 전에 묻는 데스크톱 AI 동료", "무료; 내 모델 키 또는 로컬 모델"],
        ["[OpenBot](/personal-agent/openbot)", "CopilotKit, 오픈소스", "셀프 호스팅 AI 동료 워크스페이스", "개인 프로젝트는 무료"],
        ["[Suparagent](/personal-agent/suparagent)", "오픈소스", "Claude Code, Codex, Gemini CLI 위에서 루틴을 돌리는 이름 붙은 에이전트", "셀프 호스팅은 무료"],
      ],
    },
    {
      kind: "text",
      id: "safety",
      title: "계정을 맡기기 전에",
      points: [
        "작업에 필요한 것만 연결하고, 가능하면 읽기 전용 권한을 고르세요(Muse는 이메일을 읽기 전용으로 연결할 수 있어요).",
        "보내기, 구매, 공개되는 일에는 승인을 켜 두세요. Muse와 Gemini는 기본적으로 보내거나 사기 전에 물어봐요. Auto Review가 대부분의 작업을 그냥 진행시키는 Grok Bot에서는 Ask first 규칙을 추가하세요.",
        "로그인을 누가 함께 쓰는지 알아 두세요. Grok Bot들은 컴퓨터 한 대를 공유해서, 한 Bot이 로그인한 사이트를 다른 Bot도 쓸 수 있어요.",
        "사용 한도를 확인하세요. 백그라운드에서 일하는 에이전트는 내가 없는 동안에도 토큰을 써요.",
        "가끔 활동 기록을 읽어 보세요. 제조사들도 이 에이전트가 틀리거나 예상치 못한 행동을 할 수 있다고 경고해요.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Crewmark로",
      title: "생활은 개인 에이전트에게, 일은 AI 직원에게",
      text: [
        "개인 에이전트는 한 사람의 잡무를 중심으로 만들어졌어요. Crewmark는 직무를 중심으로 만들어졌어요. 내 Claude Code나 Codex를 직무, 숫자로 된 목표, 근무 시간, 하트비트를 갖춘 AI 직원으로 바꿔 줘요. 직원은 공유 보드에서 다음 이슈를 가져가고, 일하면서 댓글을 남기고, 막히면 메시지를 보내요.",
      ],
      steps: [
        {
          title: "직무 고르기",
          text: "[AI 직원 직무](/ai-employees)에서 시작하세요: 소프트웨어 엔지니어, SEO 전문가, 마케팅 에이전트, 소셜 미디어 매니저, 디자이너.",
        },
        {
          title: "지금 쓰는 요금제로 실행하기",
          text: "내 Claude Code나 Codex 안에서 일하니 별도의 토큰 청구서가 없어요. [가격](/pricing)을 참고하세요.",
        },
        {
          title: "계속 일하게 두기",
          text: "정해 둔 시간 동안 15분에서 240분마다 깨어나요. [Claude Code를 24시간 돌리는 법](/blog/run-claude-code-24-7)을 참고하세요.",
        },
      ],
    },
  ],
  mid: {
    title: "잡무가 아니라 직무가 있는 에이전트가 필요하세요?",
    text: "Crewmark 직원은 이미 결제 중인 Claude Code나 Codex 요금제로, 하트비트에 맞춰 공유 보드의 일을 처리해요.",
    button: "시작하기",
  },
  faq: {
    title: "자주 묻는 질문",
    items: [
      {
        q: "개인 AI 에이전트란 무엇인가요?",
        a: "답만 하는 게 아니라 나 대신 일을 하는 AI예요. 자기 컴퓨터나 브라우저를 갖고, 내 앱을 쓰고, 내 취향을 기억하고, 예약 작업과 백그라운드 작업을 실행하며, 민감한 일 앞에서는 먼저 물어봐요.",
      },
      {
        q: "2026년 최고의 개인 AI 에이전트는 무엇인가요?",
        a: "지금 어디에 있느냐에 따라 달라요. Meta Muse가 가장 쉽게 써 볼 수 있고(미국에서 무료), Grok Bot은 업무용 루틴이 가장 자세하며, ChatGPT dots와 Claude Duet은 Pro 요금제에 포함돼요. 셀프 호스팅을 원하면 OpenClaw나 Hermes Agent가 맞아요.",
      },
      {
        q: "무료 개인 AI 에이전트가 있나요?",
        a: "Meta Muse는 미국에서 주간 한도 내 무료이고, Grok Bot은 무료 체험 크레딧이 있으며, Manus Cue는 얼리 액세스 기간 동안 무료예요. OpenClaw와 Hermes Agent는 무료 오픈소스 소프트웨어예요(모델 비용은 직접 부담해요).",
      },
      {
        q: "Grok Bot, Muse, Dots는 뭐가 다른가요?",
        a: "Muse는 일상 업무를 위한 Meta의 에이전트로 무료로 시작할 수 있어요. Grok Bot은 업무를 위한 xAI의 에이전트로 여러 Bot과 루틴을 갖췄어요. ChatGPT dots는 ChatGPT 안에서 상시 작동하는 OpenAI의 에이전트로 Pro와 Business Premium에서 쓸 수 있어요.",
      },
      {
        q: "개인 에이전트와 AI 직원은 같은 건가요?",
        a: "꼭 그렇진 않아요. 개인 에이전트는 한 사람의 잡무를 위해 일해요. Crewmark가 말하는 AI 직원은 직무와 목표가 있고, 일정에 맞춰 팀 보드의 일을 처리하며, 함께 일하는 사람들에게 보고해요.",
      },
      {
        q: "개인 AI 에이전트는 안전한가요?",
        a: "승인, 격리된 머신, 활동 기록을 갖추고 만들어졌지만 제조사들도 실수할 수 있다고 말해요. 필요한 것만 연결하고, 보내기와 구매에는 승인을 켜 두고, 무엇을 했는지 검토하세요.",
      },
    ],
  },
  cta: {
    title: "잡무는 개인 에이전트에게. 직무는 AI 직원에게.",
    text: "Crewmark는 Claude Code와 Codex 세션을 직무, 목표, 근무 시간, 하트비트를 갖춘 AI 직원으로 바꿔 줘요.",
    button: "시작하기",
  },
  checked: "2026년 11월 10일에 각 제조사의 발표, 문서, 고객센터, 가격 페이지와 대조해 확인했습니다.",
  disclaimer:
    "Crewmark는 독립 제품으로, Meta, xAI, OpenAI, Anthropic, Manus, Google, Microsoft, OpenClaw, Nous Research와 제휴하거나 그 보증을 받지 않았습니다. 제품명은 각 소유자의 상표입니다.",
};
