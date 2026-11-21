import type { GuideCopy } from "@/components/landing/guide-article";

// ko translation of /personal-agent/base44-superagent; the English master is src/content/personal-agents/base44-superagent.ts.

const docs = "https://docs.base44.com/superagents/creating-a-superagent";

const prompts = `매일 아침 7시에 읽지 않은 이메일, 오늘의 회의,
나를 멘션한 Slack 스레드를 요약해서 여기로 보내 줘.

Gmail로 새 잠재 고객의 이메일이 오면 개인 맞춤 후속 메일 초안을 쓰고
보내기 전에 나에게 물어봐. 3일 안에 답이 없으면 다른 방향으로 다시 시도해.

매주 금요일 오후 5시에 이번 주 영업, 고객 지원, 마케팅 숫자를 모아
Slack의 #weekly에 요약을 올려 줘.`;

export const copy: GuideCopy = {
  meta: {
    title: "Base44 Superagent: 가격, 크레딧, WhatsApp, 설정",
    description:
      "Base44 Superagent 정리: 이 개인 에이전트가 할 수 있는 일, 만드는 법, Base44 플랜과 Superagent의 메시지·연동 크레딧 사용 방식, WhatsApp·Telegram·Slack 연결, 워크플로, 예시, 다른 에이전트와의 비교까지.",
  },
  breadcrumb: "Base44 Superagent",
  parent: { name: "개인 에이전트", href: "/personal-agent" },
  hero: {
    kicker: "개인 에이전트 · Base44",
    title: "Base44 Superagent: 하는 일, 비용, 설정하는 법",
    lead: "Superagent는 Base44의 “24시간 내내 작업을 대신 실행하는 개인 AI 에이전트”예요. 브라우저나 WhatsApp, Telegram, Slack 등 채팅 앱에서 대화하고, 연결한 도구들을 오가며 일하고, 일정이나 트리거로 워크플로를 실행하고, 대화가 바뀌어도 기억하며, 전화까지 걸 수 있어요. 이 가이드에서는 할 수 있는 일, 만드는 법, 가격과 크레딧 구조, WhatsApp 연결법, 워크플로 예시, 다른 개인 에이전트와의 비교를 다뤄요.",
    cta: "시작하기",
    secondary: "가격과 크레딧",
    secondaryHref: "#pricing",
  },
  sections: [
    {
      kind: "text",
      title: "Base44 Superagent란",
      text: [
        "Base44는 AI 앱 빌더로 가장 잘 알려져 있어요. Superagent는 대화로 지시하는 별도의 개인 에이전트예요. “원하는 것을 설명하면, Superagent가 여러 도구에서 대신 행동해요.” 연결한 도구와 데이터에만 접근해요.",
      ],
      points: [
        "어디서든 채팅: 브라우저, WhatsApp, Telegram, Slack, iMessage, LINE. WhatsApp에서는 그룹 채팅에도 참여할 수 있어요.",
        "커넥터: Gmail, Google Calendar, Google Drive, Notion, GitHub, Slack 등과 내 MCP 서버. 공유 커넥터는 읽기 전용으로 설정할 수 있어요.",
        "워크플로: 일정에 따라, 또는 연결된 도구에서 무언가 일어났을 때 실행되는 작업.",
        "메모리: 지식, 작업 맥락, 메모리 로그를 대화 사이에 공유하거나 따로 둘 수 있어요.",
        "스킬과 목표: 재사용할 수 있는 지시와, 큰 결과를 일시 정지·재개할 수 있는 작업으로 나누는 `/goal`.",
        "음성: 말로 대화할 수 있고 데스크톱에서는 화면 공유도 돼요. 전화번호가 있으면 예약 워크플로가 전화를 걸 수 있어요.",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Base44 Superagent 만드는 법",
      steps: [
        {
          title: "Personal Agent 열기",
          text: "app.base44.com에 로그인하고 사이드바의 Explore 아래에서 Personal Agent를 클릭하세요(사이드바에 Apps와 Agent가 보이면 Agent 탭).",
        },
        {
          title: "대화할 곳 고르기",
          text: "브라우저라면 Continue here를, 아니면 WhatsApp, Telegram, iMessage를 고르세요. WhatsApp은 QR 코드를 스캔하거나 버튼으로 앱을 열어 미리 채워진 메시지를 보내고, Telegram은 미리 채워진 메시지를 보내거나 Start를 누르세요.",
        },
        {
          title: "도구 연결하기",
          text: "사이드바에서 Plugins를 열고 커넥터의 Connect를 클릭한 뒤, 공유 커넥터나 앱 사용자 커넥터를 고르세요. 에이전트가 보기만 하면 된다면 읽기 전용으로 설정하세요. 내 MCP 서버는 Add Connector로 추가하세요.",
        },
        {
          title: "할 일 설명하기",
          text: "원하는 일을 말하세요. 역할이나 프로젝트 맥락은 첫 메시지에 넣고, 항상 지켜야 할 규칙도 알려 주세요. 반복되는 일이라면 일정이나 트리거를 설명하면 워크플로를 만들어 줘요.",
          code: prompts,
        },
      ],
      source: { label: "출처: Base44 문서, Creating a Superagent", href: docs },
    },
    {
      kind: "table",
      id: "pricing",
      title: "Base44 Superagent 가격과 크레딧",
      text: [
        "Superagent는 Base44 워크스페이스의 크레딧으로 돌아가요. 아래는 2026년 11월 10일 기준 Base44 플랜으로, 연간 결제 가격이에요. 가격 페이지에는 연간 결제 시 20% 할인된다고 적혀 있고 월간 가격은 나와 있지 않아요.",
      ],
      headers: ["플랜", "가격(연간 결제)", "월 메시지 크레딧", "월 연동 크레딧"],
      rows: [
        ["Free", "$0", "25", "100"],
        ["Starter", "$16/월", "100", "2,000"],
        ["Builder", "$40/월", "250", "10,000"],
        ["Pro", "$80/월", "500", "20,000"],
        ["Elite", "$160/월", "1,200", "50,000"],
      ],
    },
    {
      kind: "text",
      id: "credits",
      title: "Superagent의 크레딧 사용 방식",
      points: [
        "메시지 크레딧: 에이전트가 처리하는 모든 메시지와 모든 워크플로 실행에 채팅과 똑같이 쓰여요. WhatsApp, Telegram, Slack, API, 자동화에서 온 메시지도 포함돼요.",
        "연동 크레딧: 이미지 생성, 파일 처리, 파일 업로드, 다운로드 링크 같은 작업에 쓰여요.",
        "크레딧은 정해진 주기로 채워지고, 쓰지 않은 크레딧은 초기화될 때 사라져요.",
        "워크스페이스 크레딧이 떨어지면 워크플로가 실행되지 않아요. 켜진 상태로 남아 있다가 크레딧이 돌아오면 재개되지만, 놓친 실행이 나중에 실행되지는 않아요.",
        "사용량은 Agent Settings > Credit usage에서 확인하세요. Superagent는 반복에 빠진 실행을 멈춰 크레딧 낭비를 막기도 해요.",
        "Free 플랜은 월 메시지 크레딧이 25개예요. 실행마다 메시지 크레딧을 쓰므로 매일 도는 워크플로 하나(월 약 30회)만으로도 부족해요. 매일 도는 워크플로라면 유료 플랜을 생각하세요.",
      ],
    },
    {
      kind: "steps",
      id: "workflows",
      title: "Base44 Superagent 워크플로와 예시",
      text: [
        "채팅에서 할 일을 설명하거나, Workflows를 열고 New Workflow를 클릭해 추천 워크플로를 채팅으로 보내세요. Superagent가 예약형인지 트리거형인지 판단하고 필요한 것을 물어봐요.",
      ],
      steps: [
        {
          title: "예약형",
          text: "정한 시각에 실행돼요. 읽지 않은 이메일, 회의, Slack 스레드를 담은 아침 브리핑, 내일 할 일 목록이 담긴 하루 마무리, 더 이른 예약이 있는지 치과에 매주 거는 전화(에이전트에 전화번호가 있다면) 같은 것이요.",
        },
        {
          title: "트리거형",
          text: "무언가 일어났을 때 실행돼요. Gmail의 새 이메일, Superagent 데이터의 변경, 연결된 도구의 활동이 계기가 돼요. 이메일이 24시간 동안 읽히지 않으면 알림을 주거나, 회의 30분 전마다 브리핑을 주는 식이에요.",
        },
        {
          title: "문제가 생기면",
          text: "여러 번 연속으로 실패한 워크플로는 스스로 일시 정지되고 Base44가 이메일을 보내요. Activity 탭을 확인하고 원인(흔히 연결이 끊긴 연동)을 고친 뒤 Resume을 클릭하고 Run Now로 테스트하세요.",
        },
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Base44 Superagent vs Meta Muse, Grok Bot, Claude Duet",
      headers: ["", "Base44 Superagent", "Meta Muse", "Grok Bot", "Claude Duet"],
      rows: [
        ["대화하는 곳", "브라우저, WhatsApp, Telegram, Slack, iMessage, LINE", "Muse 앱, muse.ai, WhatsApp", "데스크톱·휴대폰 앱, Slack, X", "Claude Duet 앱"],
        ["일정", "예약형·트리거형 워크플로", "알림과 반복 작업", "일정이나 트리거로 도는 루틴", "챙겨야 할 일을 먼저 알려 줌"],
        ["가격", "Base44 플랜 크레딧, 연간 결제 시 $16/월부터", "주간 한도 내 무료; Power $20/월", "X Premium 이상, SuperGrok, Cursor 플랜에 포함", "Claude Pro 이상에 포함, 대기자 명단"],
        ["가이드", "이 페이지", "[Meta Muse](/personal-agent/meta-muse)", "[Grok Bot](/personal-agent/grok-bot)", "[Claude Duet](/blog/claude-duet)"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Crewmark로",
      title: "심부름엔 Superagent를, 백로그엔 AI 직원을",
      text: [
        "Base44 Superagent는 한 사람의 도구와 채팅을 중심으로 만들어졌어요. Crewmark는 직무를 중심으로 만들어졌어요. 내 Claude Code나 Codex를 직무, 숫자로 된 목표, 근무 시간, 하트비트를 갖춘 AI 직원으로 바꾸고, 직원은 공유 보드에서 다음 이슈를 가져가요. 이미 쓰는 에이전트 플랜 외에 따로 살 크레딧은 없어요.",
      ],
      steps: [
        {
          title: "직무 고르기",
          text: "[AI 직원 직무](/ai-employees)에서 시작하세요. 엔지니어, SEO 전문가, 마케팅 에이전트, 소셜 미디어 매니저, 디자이너가 있어요.",
        },
        {
          title: "지금 쓰는 플랜으로 실행하기",
          text: "Crewmark는 내 Claude Code나 Codex 안에서 돌아가요. [가격](/pricing)을 참고하세요.",
        },
        {
          title: "더 많은 에이전트 비교하기",
          text: "[개인 AI 에이전트 비교](/personal-agent)와 [슈퍼에이전트란](/blog/superagent)을 참고하세요.",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Base44 Superagent 만들기" },
  mid: {
    title: "크레딧을 사지 않고 일을 맡길 에이전트가 필요하세요?",
    text: "Crewmark 직원은 이미 결제 중인 Claude Code나 Codex 플랜 안에서 돌아가고 공유 보드에서 일해요.",
    button: "시작하기",
  },
  faq: {
    title: "자주 묻는 질문",
    items: [
      {
        q: "Base44 Superagent는 무엇인가요?",
        a: "24시간 내내 작업을 대신 실행하는 Base44의 개인 AI 에이전트예요. 브라우저나 WhatsApp, Telegram, Slack 등 앱에서 대화하고, 연결한 도구를 오가며 일하고, 예약형·트리거형 워크플로를 실행해요.",
      },
      {
        q: "Base44 Superagent는 얼마인가요?",
        a: "Base44 플랜의 크레딧을 써요. 연간 결제 기준으로 Starter $16, Builder $40, Pro $80, Elite $160/월이고 메시지 크레딧은 100~1,200개예요. Free 플랜은 월 메시지 크레딧 25개예요.",
      },
      {
        q: "Base44 Superagent 크레딧은 어떻게 쓰이나요?",
        a: "처리하는 메시지와 워크플로 실행마다 메시지 크레딧을 쓰고, 이미지 생성이나 파일 처리 같은 작업은 연동 크레딧을 써요. 크레딧은 주기적으로 초기화되고, 쓰지 않은 크레딧은 사라지며, 크레딧이 없는 동안에는 워크플로가 실행되지 않아요.",
      },
      {
        q: "Base44 Superagent를 WhatsApp에 어떻게 연결하나요?",
        a: "만들 때 WhatsApp을 고르고 QR 코드를 스캔하거나 버튼으로 WhatsApp을 연 뒤, 미리 채워진 메시지를 보내세요. WhatsApp 번호를 연결해 그룹 채팅에서 일하게 할 수도 있어요.",
      },
      {
        q: "Base44 Superagent는 무엇을 할 수 있나요?",
        a: "밤사이 받은편지함 분류, 잠재 고객 후속 연락, 항공권 가격 감시, 식당 예약 후 친구에게 알리기, Slack에 주간 숫자 올리기, 캘린더 재배치, 프로젝트 WhatsApp 그룹 운영, 그리고 전화번호가 있다면 예약 전화까지 할 수 있어요.",
      },
      {
        q: "Base44 Superagent의 대안은 무엇인가요?",
        a: "Meta Muse(미국에서 무료), Grok Bot(업무용 에이전트 팀), ChatGPT dots와 Claude Duet(Pro 플랜 포함), Manus Cue, 오픈소스 OpenClaw나 Hermes Agent가 있어요. [개인 AI 에이전트 비교](/personal-agent)를 참고하세요.",
      },
    ],
  },
  cta: {
    title: "심부름은 Superagent에게, 직무는 AI 직원에게.",
    text: "Crewmark는 Claude Code와 Codex 세션을 직무, 목표, 근무 시간, 하트비트를 갖춘 AI 직원으로 바꿔 줘요.",
    button: "시작하기",
  },
  checked: "2026년 11월 10일에 Base44 문서, Superagents 페이지, 가격 페이지와 대조해 확인했습니다.",
  disclaimer:
    "Crewmark는 독립 제품으로, Base44, Wix, Meta, xAI, Anthropic과 제휴하거나 그 보증을 받지 않았습니다. 제품명은 각 소유자의 상표입니다.",
};
