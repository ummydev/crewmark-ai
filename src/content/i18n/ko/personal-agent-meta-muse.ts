import type { GuideCopy } from "@/components/landing/guide-article";

// ko translation of /personal-agent/meta-muse; the English master is src/content/personal-agents/meta-muse.ts.

const newsroom = "https://about.fb.com/news/2026/09/introducing-muse-personal-ai-agent/";

const prompts = `평일마다 오전 7시에 짧은 브리핑을 보내 줘: 오늘 일정,
받은편지함에서 급한 것, 그리고 날씨.

12월 첫째 주말에 시카고로 가는 $400 이하 항공편 세 개를 찾아서
비교해 주고, 예약하기 전에 꼭 물어봐 줘.

내 차를 팔고 싶어. 시세를 알아보고, 판매 글 초안을 쓰고,
어떤 제안에 답할 만한지 알려 줘.`;

export const copy: GuideCopy = {
  meta: {
    title: "Meta Muse란? 사용법과 요금제 정리",
    description:
      "Meta의 개인 AI 에이전트 Muse를 정리했어요: 할 수 있는 일, 시작하고 쓰는 법, Free·Power($20)·Maximum($100) 요금제, 예약 작업, 앱 연결과 결제, 개인정보 설정, 다른 에이전트와의 비교까지.",
  },
  breadcrumb: "Meta Muse",
  parent: { name: "개인 에이전트", href: "/personal-agent" },
  hero: {
    kicker: "개인 에이전트 · Meta Muse",
    title: "Meta Muse: Meta의 개인 에이전트가 하는 일, 쓰는 법, 가격",
    lead: "Muse는 2026년 9월 8일 미국에서 출시된 Meta의 개인 AI 에이전트예요. Meta는 Muse가 질문에 답하는 데 그치지 않고 실제로 일을 해낸다고 말해요. 이메일을 보내고, 여행을 예약하고, 양식을 채우고, 대신 협상하며, 앱을 닫아도 계속 일하고, 이메일 발송이나 구매처럼 중요한 일 앞에서는 먼저 물어봐요. 이 가이드에서는 시작하는 법, 쓰는 법, 요금제와 토큰 한도, 예약 작업, 개인정보 설정, 그리고 Grok Bot, ChatGPT dots, Claude와의 비교를 다뤄요.",
    cta: "시작하기",
    secondary: "사용법 보기",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "Meta Muse란",
      text: [
        "Muse는 Meta의 모델 Muse Spark로 작동하며, Meta가 Muse Secure VM이라고 부르는 전용 클라우드 머신 안에서 돌아가요. 목표를 계획으로 바꿔 백그라운드에서 처리하고, 상황이 바뀌거나 승인이 필요할 때 돌아와요.",
      ],
      points: [
        "직접 행동해요: 이메일 보내기, 여행 예약, 브라우저 열기, 양식 채우기, 협상. Meta가 든 예시로는 차를 더 비싸게 팔기, 요금 낮추기, 운동 계획 조정하기가 있어요.",
        "기억해요: 한 번 말한 내용에서 나에게 중요한 것을 기억하고, 묻지 않아도 제안해요. 저장해 둔 Instagram 레시피 릴스를 장보기 목록으로 바꿔 주는 식이에요.",
        "안전하게 결제해요: 결제는 Link by Stripe를 거치고, 에이전트 지갑이 일회용 카드를 만들어서 Muse는 실제 카드 번호를 보지 못해요.",
        "내가 있는 곳에 있어요: Muse 앱, 웹(muse.ai), WhatsApp에서 쓸 수 있고, 다음은 Meta의 AI 안경이에요.",
        "Facebook, Instagram, WhatsApp 안의 어시스턴트인 Meta AI나, Meta의 개발자용 제품 Muse Code와는 다른 제품이에요.",
      ],
    },
    {
      kind: "table",
      id: "pricing",
      title: "Meta Muse 요금제: Free, Power, Maximum",
      text: [
        "2026년 11월 10일 Meta 고객센터 기준이에요. Muse와 구독은 제한적으로 테스트 중이라 아직 모든 지역에서 쓸 수는 없어요.",
      ],
      headers: ["요금제", "가격", "주간 사용량"],
      rows: [
        ["Free", "$0", "무료 주간 사용 한도(Meta는 크기를 공개하지 않아요). 초기화를 기다리거나 업그레이드"],
        ["Power", "월 $20", "주 500M Muse 토큰"],
        ["Maximum", "월 $100", "주 3B Muse 토큰"],
        ["추가 토큰", "별도 판매", "주간 할당량 외에 추가 구매"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Meta Muse 시작하고 쓰는 법",
      text: [
        "만 18세 이상이거나 거주지의 성년 연령이어야 하고, Muse를 쓸 수 있는 지역(미국에서 출시)에 있어야 하며, Meta 계정으로 로그인해야 해요. 계정은 Facebook, Instagram, 이메일 주소, 전화번호로 만들 수 있어요.",
      ],
      steps: [
        {
          title: "앱을 내려받거나 muse.ai 열기",
          text: "iOS나 Android에서 Muse 앱을 받거나 muse.ai에 로그인하세요. Meta는 Windows나 Mac 앱을 안내하지 않으니, 컴퓨터에서는 브라우저로 muse.ai를 쓰세요.",
        },
        {
          title: "필요한 일 말하기",
          text: "Muse는 Chat 탭에서 열려요. 단계가 아니라 원하는 결과를 설명하세요. 먼저 몇 가지를 물어볼 수도 있어요. 답을 기다리지 않고, 맥락을 반복하지 않고도 이어서 말할 수 있어요.",
          code: prompts,
        },
        {
          title: "필요한 앱 연결하기",
          text: "Muse가 쓸 앱과 각 앱의 권한을 고르세요. 이메일은 읽기 전용 또는 읽기와 보내기 중에서 고를 수 있어요. 곧 결제 시 Shop Pay와, 기존 로그인을 쓸 수 있도록 1Password가 추가돼요.",
        },
        {
          title: "승인하고, 검토하고, 파일 찾기",
          text: "Muse는 이메일 발송이나 구매 같은 민감한 일 앞에서 먼저 묻고, 한 일과 할 일을 감사 기록으로 남겨요. 만든 파일은 Library 탭에 저장돼요.",
        },
      ],
      source: { label: "출처: Meta의 Muse 발표", href: newsroom },
    },
    {
      kind: "text",
      id: "scheduled-tasks",
      title: "Muse의 리마인더와 예약 작업",
      text: [
        "Muse에는 별도의 예약 화면이 없어요. 말로 부탁해서 리마인더와 반복 작업을 설정하고, 작동 방식은 Meta 고객센터에 나와 있어요.",
      ],
      points: [
        "한 번만: 무엇을 언제 알려 줄지 말하면 Muse가 정확한 시간을 확인해 줘요.",
        "반복: 작업과 주기를 설명하세요. 예를 들어 “매주 월요일 오전 9시에 근무 시간표 제출하라고 알려 줘”. 취소할 때까지 실행되고, 매번 Muse가 메시지를 보내요.",
        "찾기: “내 리마인더 뭐 있어?”라고 묻거나, 위쪽 Assistant 아이콘을 눌러 Upcoming을 여세요.",
        "바꾸거나 취소하기: 어떤 것을 어떻게 바꿀지 말하세요. 월요일 리마인더를 화요일로 옮기는 식이에요.",
        "시간은 내 시간대를 따라요. 이미 지난 시간을 고르면 Muse가 다른 시간을 제안해요.",
        "일상 루틴 아이디어는 [Meta Muse 활용 사례](/personal-agent/meta-muse-use-cases)에 더 있어요.",
      ],
    },
    {
      kind: "text",
      id: "privacy",
      title: "개인정보: 거부하는 법과 Meta가 볼 수 있는 것",
      points: [
        "각자의 Muse는 자기만의 Muse Secure VM에서 돌아가요. 다른 사람의 에이전트는 접근할 수 없어요.",
        "별도의 에이전트 Sentinel이 Muse가 인터넷으로 보내는 모든 것을 승인해야 하고, 필요하면 나에게 물어봐요.",
        "Muse는 내 비밀번호나 결제 수단을 볼 수 없어요. 공유한 로그인은 보안 저장소에 들어가요.",
        "대화와 VM 데이터는 Meta의 광고 시스템과 공유되지 않아요.",
        "내 상호작용이 Meta AI 학습에 쓰이지 않도록 거부할 수 있고, 어떤 앱이든 권한을 바꾸거나 연결을 끊을 수 있으며, Muse에게 무언가를 잊으라고 할 수 있어요.",
        "Meta는 올해 안에 나만 가진 키로 암호화되는 Muse Confidential VM을 내놓을 계획이에요.",
      ],
    },
    {
      kind: "text",
      id: "not-working",
      title: "Meta Muse를 쓸 수 없거나 작동하지 않나요?",
      points: [
        "미국 밖: Muse는 미국에서 출시됐고 다른 곳에서는 제한적으로 테스트 중이에요. Meta는 아직 모든 지역에서 쓸 수는 없다고 말해요.",
        "만 18세 미만: 만 18세 이상이거나 거주국의 성년 연령이어야 해요.",
        "무료 한도 초과: 주간 한도가 초기화되길 기다리거나, Power나 Maximum으로 업그레이드하거나, 추가 토큰을 사세요.",
        "음성 모드가 없음: 음성은 일부 국가에서만 쓸 수 있고 마이크 권한이 필요해요. Settings > Voice and Avatar에서 바꿀 수 있어요.",
        "예상치 못한 행동을 함: Meta는 Muse가 부정확하거나 예상치 못한 행동을 할 수 있다고 경고해요. 보내기와 구매에는 승인을 켜 두고 감사 기록을 확인하세요.",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Meta Muse vs Grok Bot, ChatGPT dots, Claude Duet",
      headers: ["", "Meta Muse", "Grok Bot", "ChatGPT dots", "Claude Duet"],
      rows: [
        ["제조사", "Meta", "xAI", "OpenAI", "Anthropic"],
        ["용도", "일상 업무와 생활 잡무", "업무: 내 앱 안의 Bot 팀", "ChatGPT 안에서 오래 이어지는 목표", "먼저 말을 거는 능동적인 Claude"],
        ["가장 저렴한 시작 방법", "주간 한도 내 무료", "무료 체험 크레딧; X Premium 이상", "ChatGPT Pro", "Claude Pro, 대기자 명단"],
        ["예약", "리마인더와 반복 작업", "일정, Slack, 이메일, 웹훅으로 실행되는 루틴", "예약 리마인더와 반복 확인", "챙겨야 할 일을 들고 먼저 찾아와요"],
        ["가이드", "이 페이지", "[Grok Bot](/personal-agent/grok-bot)", "[ChatGPT dots](/blog/chatgpt-dots)", "[Claude Duet](/blog/claude-duet)"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Crewmark로",
      title: "잡무는 Muse가 처리해요. 백로그는 누가 처리하나요?",
      text: [
        "Muse는 생활 잡무를 위해 만들어졌어요. 맡기고 싶은 일이 코드 저장소나 마케팅 계획 안에 있다면, Crewmark가 내 Claude Code나 Codex를 직무, 숫자로 된 목표, 근무 시간, 하트비트를 갖춘 AI 직원으로 바꿔 줘요. 직원은 보드에서 다음 이슈를 가져가고, 결정이 필요하면 메시지를 보내요.",
      ],
      steps: [
        {
          title: "직무 고르기",
          text: "SEO 전문가나 소셜 미디어 매니저 같은 [AI 직원 직무](/ai-employees)에서 시작하세요.",
        },
        {
          title: "근무 시간과 하트비트 정하기",
          text: "정해 둔 시간 동안 15분에서 240분마다 깨어나요. [Claude Code를 능동적으로 만드는 법](/proactive-claude-code)을 참고하세요.",
        },
        {
          title: "개인 에이전트 비교하기",
          text: "[개인 AI 에이전트 비교](/personal-agent)를 참고하세요.",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Meta Muse 시작하기" },
  mid: {
    title: "업무 백로그를 처리해 줄 에이전트가 필요하세요?",
    text: "Crewmark 직원은 지금 쓰는 Claude Code나 Codex 요금제로, 하트비트에 맞춰 깨어나 보드에서 다음 이슈를 가져가요.",
    button: "시작하기",
  },
  faq: {
    title: "자주 묻는 질문",
    items: [
      {
        q: "Meta Muse란 무엇인가요?",
        a: "2026년 9월 8일 미국에서 출시된 Meta의 개인 AI 에이전트로, Muse Spark 모델로 작동해요. 자기 클라우드 머신에서 이메일 발송, 여행 예약, 양식 작성, 구매를 대신해 주고, 민감한 일 앞에서는 먼저 물어봐요.",
      },
      {
        q: "Meta Muse는 무료인가요?",
        a: "네, 주간 사용 한도 안에서 무료예요. Power는 월 $20에 주 500M Muse 토큰, Maximum은 월 $100에 주 3B이고, 추가 토큰도 살 수 있어요.",
      },
      {
        q: "Meta Muse는 어떻게 시작하나요?",
        a: "iOS나 Android에서 Muse 앱을 내려받거나 muse.ai로 가서 Meta 계정으로 로그인하세요. 만 18세 이상이거나 성년 연령이어야 하고, Muse를 쓸 수 있는 지역에 있어야 해요. 미국에서 출시됐어요.",
      },
      {
        q: "Windows나 Mac에서 Meta Muse를 쓸 수 있나요?",
        a: "Meta는 iOS·Android 앱과 muse.ai를 안내해요. Windows PC나 Mac에서는 브라우저로 muse.ai를 쓰세요.",
      },
      {
        q: "Muse가 예약된 일정에 따라 작업할 수 있나요?",
        a: "네. “매주 월요일 오전 9시에 근무 시간표 제출하라고 알려 줘”처럼 반복 작업을 부탁하세요. 취소할 때까지 실행되고, Assistant 아이콘의 Upcoming에서 찾을 수 있어요.",
      },
      {
        q: "Meta가 내 Muse 대화를 광고에 쓰나요?",
        a: "Meta는 대화와 VM 데이터를 광고 시스템과 공유하지 않는다고 말해요. 내 상호작용이 Meta AI 모델 학습에 쓰이지 않도록 거부할 수도 있어요.",
      },
    ],
  },
  cta: {
    title: "잡무는 개인 에이전트가. 백로그는 AI 직원이.",
    text: "Crewmark는 Claude Code와 Codex 세션을 직무, 목표, 근무 시간, 하트비트를 갖춘 AI 직원으로 바꿔 줘요.",
    button: "시작하기",
  },
  checked: "2026년 11월 10일에 Meta의 Muse 발표와 Meta 고객센터 문서와 대조해 확인했습니다.",
  disclaimer:
    "Crewmark는 독립 제품으로, Meta, xAI, OpenAI, Anthropic과 제휴하거나 그 보증을 받지 않았습니다. Muse, Meta, WhatsApp은 Meta의 상표입니다.",
};
