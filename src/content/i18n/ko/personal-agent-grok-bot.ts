import type { GuideCopy } from "@/components/landing/guide-article";

// ko translation of /personal-agent/grok-bot; the English master is src/content/personal-agents/grok-bot.ts.

const docs = "https://docs.x.ai/grok-bot/get-started";

export const copy: GuideCopy = {
  meta: {
    title: "Grok Bot이란? 사용법, 요금제, 설정 정리",
    description:
      "xAI의 Grok Bot을 정리했어요: 상시 작동하는 에이전트가 하는 일, 어떤 X·SuperGrok·Cursor 요금제에 포함되는지, 무료 체험, Mac·Windows·Linux·휴대폰에서 내려받는 법, 첫 Bot 설정하기, 활용 사례까지.",
  },
  breadcrumb: "Grok Bot",
  parent: { name: "개인 에이전트", href: "/personal-agent" },
  hero: {
    kicker: "개인 에이전트 · Grok Bot",
    title: "Grok Bot: xAI의 개인 에이전트가 하는 일과 쓰는 법",
    lead: "Grok Bot은 xAI가 “능동적인 AI 팀원”이라고 부르는 상시 작동 에이전트예요. 각 Bot은 브라우저, 파일, 터미널이 있는 클라우드 컴퓨터에서 일하고, 내가 쓰는 앱에 로그인하고, 내가 일하는 방식을 기억하며, 노트북을 덮어도 계속 일해요. 2026년 8월에 얼리 베타로 공개됐어요. 이 가이드에서는 Grok Bot이 하는 일, 포함된 요금제, 첫 Bot 설정하기, 루틴과 승인이 작동하는 방식, 사람들이 어디에 쓰는지를 다뤄요.",
    cta: "시작하기",
    secondary: "설정하기",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "Grok Bot이란",
      text: [
        "Grok Bot은 Grok 챗봇도, X의 @grok 계정도 아니에요. 자기 컴퓨터를 가진 에이전트예요. 사람처럼 앱과 웹사이트를 쓰고, 코드를 작성하고 실행하며, 발표 자료 만들기, 캠페인 운영, 예약하기, 캘린더 동기화 같은 여러 단계의 일을 처리해요.",
      ],
      points: [
        "클라우드 컴퓨터: 내 Bot들은 브라우저, 파일 시스템, 터미널이 있는 영구 머신 한 대를 함께 써요. Bot마다 자기 화면이 있고, 어느 Bot이든 실시간으로 지켜볼 수 있어요.",
        "여러 Bot, 하나의 팀: Bot마다 일을 하나씩 맡기세요. Bot끼리 메시지를 주고받고 일을 넘길 수 있으며, 첫 Bot이 다른 Bot들의 상황을 보고할 수 있어요.",
        "앱: Gmail, Google Calendar, Google Drive, Slack, Notion, Granola, GitHub 등과 모든 MCP 서버나 API. Cursor와 같은 MCP 서버, 플러그인, 스킬을 써요.",
        "기억: Bot마다 내 취향에 관한 메모와 날짜별 작업 기록을 따로 남겨요. 이름과 시간대 같은 몇 가지 사실은 모든 Bot이 공유해요.",
        "루틴: Bot은 일정에 맞춰, 또는 Slack 멘션이나 웹훅 같은 일이 생길 때 작업을 실행해요. [Grok Bot 루틴](/personal-agent/grok-bot-routines)을 참고하세요.",
        "데스크톱, 휴대폰, Slack, X에서 텍스트나 음성으로 부를 수 있어요.",
      ],
    },
    {
      kind: "table",
      id: "plans",
      title: "Grok Bot이 포함된 요금제",
      text: [
        "Grok Bot은 Cursor 계정에서 돌아가요. 아래는 Cursor의 Grok Bot 요금제 페이지에 나온, Grok Bot이 포함된 요금제예요. xAI와 Cursor 모두 Grok Bot 자체의 가격이나 주간 사용량을 숫자로 밝히지 않아요.",
      ],
      headers: ["요금제", "Grok Bot", "사용량"],
      rows: [
        ["The X Subscription: Premium, Super, Ultra", "포함, 개인 또는 팀 시트", "공유 주간 한도, Super와 Ultra는 더 큼; 초과분은 선불 크레딧으로"],
        ["The X Subscription: Plus, Free", "미포함", "-"],
        ["기존 Cursor 요금제: Pro, Pro+, Ultra, Teams", "포함", "Pro에서 Ultra로 갈수록 주간 사용량 증가; 켜 두면 이후 온디맨드 사용"],
        ["연결된 SuperGrok, SuperGrok Plus, SuperGrok Heavy, X Premium+", "계정 연결로 포함", "Heavy가 가장 많음; 연결과 Cursor 요금제는 합산되지 않음"],
        ["SuperGrok Lite", "미포함", "-"],
        ["무료 체험", "7일 기간의 사용 크레딧", "에이전트 단계와 토큰으로 소진; 충전되지 않음"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Grok Bot 설정하는 법",
      steps: [
        {
          title: "앱 내려받기",
          text: "x.ai/bot에서 받으세요. macOS(Apple silicon과 Intel), Windows(x64와 Arm64), Linux(x64와 Arm64), 그리고 iPhone(iOS 18 이상)과 Android(9 이상)에서 돌아가요.",
        },
        {
          title: "로그인하기",
          text: "Sign in을 누르고 브라우저에서 마무리하세요. Grok Bot은 Cursor 계정을 쓰기 때문에 회사 SSO가 적용돼요. SuperGrok이나 X Premium+로 이용한다면 온보딩 페이지에서 Grok 계정을 연결하세요. Privacy Mode (Legacy)를 쓰는 계정은 Bot에 클라우드 저장소가 필요해서 먼저 전환해야 해요.",
        },
        {
          title: "첫 Bot에게 일 하나 맡기기",
          text: "앱이 Grok Bot이라는 Bot을 만들고 채팅을 열어요. New Bot(Cmd/Ctrl+N)으로 더 추가할 수 있어요. 첫 메시지에서 Bot마다 일을 하나씩 맡기고, 원하는 작업 방식을 기억해 달라고 하세요. Bot의 컴퓨터에서 한 번 녹화해서 작업을 가르칠 수도 있어요.",
        },
        {
          title: "앱 연결하고 규칙 정하기",
          text: "필요한 앱을 연결하세요. 로그인 정보는 Vault, 그다음 1Password 같은 비밀번호 관리자, 그다음 보안 양식 순서로 가져오고, Bot은 비밀번호를 보지 못해요. Auto Review는 기본으로 켜져 있어 실행 전에 작업을 확인해요. 항상 나를 기다려야 할 일은 Settings > General > Bot에서 Ask first 규칙을 추가하세요.",
        },
      ],
      source: { label: "출처: xAI의 Grok Bot 문서, Get started", href: docs },
    },
    {
      kind: "text",
      id: "safety",
      title: "Grok Bot에서 주도권을 지키는 방법",
      points: [
        "승인 카드: 내 허락이 필요한 작업이면 Bot이 카드를 띄우고 기다려요. xAI의 예시에서는 Slack 답장과 Gmail 메시지 초안을 승인받도록 보여 줘요.",
        "Auto Review는 Bot이 명령을 실행하거나, 앱을 쓰거나, 컴퓨터에서 행동하기 전에 작업을 확인하고, 내 메시지만 지시로 취급해요. xAI는 유해한 콘텐츠로 인한 위험을 줄여 주지만 없애지는 못한다고 밝혀요.",
        "Bot에게는 자기 계정이 없어요. 나로서 행동하므로 모든 작업이 나에게로 이어져요.",
        "모든 Bot이 컴퓨터 한 대와 그 로그인을 공유해요. 한 Bot이 사이트에 로그인하면 다른 Bot도 그 로그인을 쓸 수 있어요.",
        "SSO나 패스키는 Open computer, Take control을 차례로 누르고 직접 마친 뒤 Bot에게 계속하라고 말하세요.",
      ],
    },
    {
      kind: "table",
      id: "use-cases",
      title: "Grok Bot 활용 사례",
      text: ["xAI의 활용 사례 문서에서 가져왔어요. 대부분 초안을 만들고, 무엇이든 보내기 전에 승인을 기다려요."],
      headers: ["활용 사례", "Bot이 하는 일"],
      rows: [
        ["아침 브리핑", "밤사이 내 앱에서 바뀐 것을 요약"],
        ["받은편지함 관리", "읽지 않은 이메일을 급한 순으로 정리하고 답장 초안 작성"],
        ["여행 코디네이터", "항공편과 호텔 옵션을 두 개씩 찾고 예약은 나에게 맡김"],
        ["회의 준비", "참석자, 지난 논의, 진행 중인 스레드를 한 장짜리 브리프로 작성"],
        ["콘텐츠 마케터", "그 주에 출시한 내용으로 뉴스레터와 게시물 초안 작성"],
        ["영업 개발", "인바운드 리드를 이상적인 고객 기준으로 선별하고 답장 초안 작성"],
        ["경쟁사 분석", "경쟁사의 출시와 가격 변화를 매주 보고"],
        ["캠페인 팀", "여러 Bot이 가입 데이터를 가져오고, 출시 콘텐츠 초안을 쓰고, 사실을 확인"],
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Grok Bot vs Muse, Dots, Claude Duet",
      headers: ["", "Grok Bot", "Meta Muse", "ChatGPT dots", "Claude Duet"],
      rows: [
        ["제조사", "xAI", "Meta", "OpenAI", "Anthropic"],
        ["실행 환경", "내 Bot들이 공유하는 클라우드 컴퓨터", "사람마다 전용 클라우드 VM", "자기 클라우드 컴퓨터와 브라우저", "Claude Duet 앱"],
        ["예약", "일정, Slack, GitHub, 이메일, 웹훅으로 실행되는 루틴", "리마인더와 반복 작업", "예약 리마인더와 반복 확인", "챙겨야 할 일을 들고 먼저 찾아와요"],
        ["이용 대상", "X Premium 이상, SuperGrok, Cursor 요금제", "미국, 한도 내 무료; Power 월 $20", "ChatGPT Pro와 Business Premium", "미국의 Claude Pro, Max, Ultra, 대기자 명단"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Crewmark로",
      title: "내 코드를 위한 Grok Bot 같은 팀원",
      text: [
        "Grok Bot은 내 앱에서 일하고, Crewmark는 내 저장소에서 일해요. 내 Claude Code나 Codex를 직무, 숫자로 된 목표, 근무 시간, 하트비트를 갖춘 AI 직원으로 바꿔 줘요. 직원은 일정에 맞춰 깨어나 보드에서 다음 이슈를 가져가고, 풀 리퀘스트를 열고, 결정이 필요하면 메시지를 보내요.",
      ],
      steps: [
        {
          title: "직무 고르기",
          text: "소프트웨어 엔지니어나 SEO 전문가 같은 [AI 직원 직무](/ai-employees)에서 시작하세요.",
        },
        {
          title: "근무 시간과 하트비트 정하기",
          text: "정해 둔 시간 동안 15분에서 240분마다 깨어나요. [Claude Code를 24시간 돌리는 법](/blog/run-claude-code-24-7)을 참고하세요.",
        },
        {
          title: "개인 에이전트 비교하기",
          text: "[개인 AI 에이전트 비교](/personal-agent)와 [Meta Muse 가이드](/personal-agent/meta-muse)를 참고하세요.",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Grok Bot 설정하기" },
  mid: {
    title: "내 코드베이스를 위한 능동적인 팀원이 필요하세요?",
    text: "Crewmark 직원은 하트비트에 맞춰 깨어나 보드에서 다음 이슈를 가져가고 풀 리퀘스트를 열어요.",
    button: "시작하기",
  },
  faq: {
    title: "자주 묻는 질문",
    items: [
      {
        q: "Grok Bot이란 무엇인가요?",
        a: "xAI의 상시 작동 에이전트예요. 각 Bot은 클라우드 컴퓨터에서 일하고, 내 앱에 로그인하고, 내 취향을 기억하고, 일정에 맞춰 루틴을 실행하며, 노트북을 덮어도 계속 일해요. Grok 챗봇이나 X의 @grok 계정과는 달라요.",
      },
      {
        q: "Grok Bot은 얼마인가요?",
        a: "따로 가격표가 있지 않아요. The X Subscription의 Premium, Super, Ultra 요금제, 기존 Cursor의 Pro, Pro+, Ultra, Teams 요금제, 그리고 연결된 SuperGrok, SuperGrok Plus, SuperGrok Heavy, X Premium+ 구독에 포함돼요. 사용 한도는 요금제마다 달라요.",
      },
      {
        q: "Grok Bot 무료 체험이 있나요?",
        a: "네, 7일 기간의 사용 크레딧이 있어요. 에이전트 단계와 토큰으로 소진되고, 충전되지 않으며, 유료 요금제로 자동 전환되지 않아요. 끝나면 업그레이드하거나 계정을 연결하세요.",
      },
      {
        q: "Grok Bot은 Windows, Linux, Android에서 되나요?",
        a: "네. 데스크톱 앱은 macOS, Windows, Linux(x64와 Arm64)에서 돌아가고, iPhone(iOS 18+)과 Android(9+)용 앱도 있어요.",
      },
      {
        q: "Grok Bot이 예약된 일정에 따라 작업할 수 있나요?",
        a: "네, 루틴으로요. 평소 말로 정한 일정에 맞춰, 또는 Slack 메시지, GitHub나 Linear 이벤트, 이메일, 웹훅이 들어올 때 실행돼요. [Grok Bot 루틴](/personal-agent/grok-bot-routines)을 참고하세요.",
      },
      {
        q: "Grok Bot vs Meta Muse: 어느 쪽이 더 좋나요?",
        a: "Muse는 누구나 쓰는 일상 잡무용으로 만들어졌고, 미국에서는 무료 등급이 있어요. Grok Bot은 업무용으로 만들어졌어요. 여러 Bot으로 이루어진 팀, 트리거가 있는 루틴, 코드 작업을 위한 Cursor의 도구를 갖췄어요.",
      },
    ],
  },
  cta: {
    title: "코딩 에이전트에게 프롬프트만 말고 직무를 주세요.",
    text: "Crewmark는 Claude Code와 Codex 세션을 직무, 목표, 근무 시간, 하트비트를 갖춘 AI 직원으로 바꿔 줘요.",
    button: "시작하기",
  },
  checked: "2026년 11월 10일에 xAI의 Grok Bot 문서와 가이드, Cursor의 Grok Bot 요금제 페이지와 대조해 확인했습니다.",
  disclaimer:
    "Crewmark는 독립 제품으로, xAI, SpaceX, X, Cursor, Meta, OpenAI, Anthropic과 제휴하거나 그 보증을 받지 않았습니다. 제품명은 각 소유자의 상표입니다.",
};
