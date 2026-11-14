import type { GuideCopy } from "@/components/landing/guide-article";

// Korean translation of /blog/chatgpt-dots; the English master is src/content/blog/chatgpt-dots.ts.

const announcement = "https://openai.com/index/introducing-dots/";

export const copy: GuideCopy = {
  meta: {
    title: "ChatGPT dots란? 사용법·가격 총정리 | Crewmark AI",
    description:
      "ChatGPT dots는 OpenAI의 상시 가동 에이전트예요. 할 수 있는 일, 이용 가능한 요금제, 설정 방법, 맞춤 규칙, 한계, 비교까지 정리했어요.",
  },
  breadcrumb: "ChatGPT dots",
  parent: { name: "블로그", href: "/blog" },
  article: { published: "2026-11-02" },
  hero: {
    kicker: "블로그 · ChatGPT",
    title: "ChatGPT dots란 무엇이고 어떻게 쓸까",
    lead: "dots는 ChatGPT 안에서 늘 켜져 있는 에이전트로, 2026년 9월 29일 OpenAI DevDay에서 발표됐어요. 각 dot은 자기만의 클라우드 컴퓨터와 브라우저를 갖고, 내 앱에 연결되며, 피드백으로 배우고, 내가 자리를 비운 동안에도 목표를 향해 계속 일해요. 이 가이드에서는 누가 쓸 수 있는지, 비용은 얼마인지, 설정 방법, dot을 통제하는 규칙, 그리고 아직 못 하는 일을 다뤄요.",
    cta: "시작하기",
    secondary: "설정 방법으로 이동",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "ChatGPT dots란",
      text: [
        "OpenAI는 dots를 “모든 일을 처리하도록 만든, 놀라울 만큼 유능하고 늘 켜져 있는 에이전트”라고 불러요. dot은 GPT-6 Astra로 동작하고, 자기 클라우드 컴퓨터에서 자기 브라우저로, 내가 연결한 앱을 써서 일해요. 데스크톱·웹·모바일의 ChatGPT, Slack과 Teams, 모바일 앱의 음성으로 대화할 수 있고, Pro 대상 미국 beta에서는 문자 메시지로도 대화할 수 있어요.",
      ],
      points: [
        "내가 없어도 일해요: 연결된 앱에 읽기 전용으로 접근해 도울 거리를 찾고, 예약된 리마인더와 정기 점검을 실행해요.",
        "여러 프로젝트를 동시에 진행하고, 진행 상황과 질문, 내가 내려야 할 결정을 알려 줘요.",
        "기억해요: ChatGPT 메모리를 가진 채로 시작하고, 함께 일하면서 내 취향을 익혀요.",
        "코드는 위임해서 써요: dot은 Codex 작업을 시작할 수 있고, 이 작업은 Codex 사용 한도에 포함돼요.",
        "지켜볼 수 있어요: 언제든 dot의 컴퓨터를 열어 직접 조작하다가 다시 dot에게 넘길 수 있어요.",
      ],
    },
    {
      kind: "table",
      title: "누가 dots를 쓸 수 있고, 비용은 얼마일까",
      text: [
        "아래 요금제에는 첫 번째 dot이 추가 비용 없이 포함돼요. 출시 후 첫 한 달 동안 dots 사용량은 요금제 한도에 포함되지 않았어요. OpenAI는 그 이후의 요금제별 사용 조건을 공개하겠다고 했지만, 저희가 확인했을 때는 아직 공개되지 않았어요. dot 추가 구매나 dot당 작업량 추가는 발표됐지만 가격은 아직 없어요.",
      ],
      headers: ["요금제", "dots", "비고"],
      rows: [
        ["Free, Go, Plus, Business", "없음", "포함되지 않음"],
        ["Pro(Pro 100, Pro 200, Pro 500)", "있음, 순차 제공 중", "EEA, 스위스, 영국 제외"],
        ["Business Premium", "있음, 순차 제공 중", "지원 지역 한정, 워크스페이스 자격에 따라 다름"],
        ["Enterprise, Edu, Healthcare", "Beta", "워크스페이스 관리자가 켜기 전까지 꺼져 있음"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "첫 dot 설정하는 방법",
      text: ["만 18세 이상이어야 해요. 순차적으로 제공되기 때문에 내 계정에서 쓸 수 있기까지 며칠이 걸릴 수 있어요."],
      steps: [
        {
          title: "dots 열기",
          text: "chatgpt.com/dots로 가거나, ChatGPT 데스크톱 앱, 데스크톱 웹, iOS 또는 Android 모바일 앱에서 dots를 여세요.",
        },
        {
          title: "dot 만들고 이름 붙이기",
          text: "온보딩을 따라 이름을 정하면 그게 핸들(@내이름-에이전트이름)이 되고, 아바타도 골라요. 둘 다 나중에 프로필에서 바꿀 수 있어요.",
        },
        {
          title: "앱 연결하기",
          text: "dot의 프로필에서 Customize, Plugins 순으로 열고 앱을 골라 요청하는 권한을 확인하세요. Slack은 데스크톱에서 연결해요. dot은 내가 연결한 개인 이메일 계정을 쓸 수 있지만, 아직 자기 이메일 주소는 가질 수 없어요.",
        },
        {
          title: "맞춤 규칙 정하기",
          text: "Customize의 Custom rules에서 작업 종류마다 dot이 묻지 않고 실행할지, 프롬프트에서 미리 승인한 경우에만 실행할지, 실행 전에 물어볼지, 나에게 넘길지를 고르세요.",
        },
        {
          title: "목표 주기",
          text: "원하는 결과를 설명하고 맥락을 공유하세요. 파일은 +로 첨부하고, 스레드에 답장해서 방향을 잡아 주면 돼요. 리마인더나 정기 점검을 부탁할 수 있고, Scheduled에서 관리해요.",
        },
        {
          title: "지켜보기, 일시 정지, 삭제",
          text: "프로필에 In progress, Scheduled, Completed 작업이 표시돼요. 필요하면 ••• 메뉴에서 dot을 일시 정지하세요. 삭제하면 메모리와 예약 작업이 지워지고 되돌릴 수 없어요.",
        },
      ],
      source: { label: "출처: OpenAI의 dots 발표", href: announcement },
    },
    {
      kind: "text",
      title: "안전: dot이 스스로 하는 일과 하지 않는 일",
      points: [
        "비밀번호 변경이나 송금은 항상 내가 직접 넘겨받아 해야 해요.",
        "데이터 영구 삭제나 소프트웨어 설치는 매번 내 승인이 필요할 수 있어요.",
        "Auto-review가 이메일 수신자 같은 위험한 작업을 내 지시와 규칙에 비춰 점검하고, 맞춤 규칙으로는 이걸 끌 수 없어요.",
        "dot은 쇼핑몰 사이트에 저장된 카드로 구매할 수 있지만, 매번 내 승인을 받거나 미리 구체적으로 승인받아야 해요.",
        "ChatGPT 데스크톱 앱의 Allow access로 연결하지 않는 한 내 컴퓨터는 분리돼 있어요. 기본값은 꺼짐이에요.",
        "OpenAI는 프롬프트 인젝션 방어가 위험을 줄이지만 없애지는 못하며, 이미 완료된 일부 작업은 되돌릴 수 없다고 말해요.",
      ],
    },
    {
      kind: "text",
      title: "dots가 아직 못 하는 일",
      points: [
        "주 dot은 하나뿐이에요. 여러 dot으로 이뤄진 팀은 앞으로의 방향으로 소개돼 있어요.",
        "dot은 자기 이메일 주소가 없고, 나에게 전화할 수 없으며, 모바일 웹에서는 동작하지 않아요.",
        "dot을 시작시키는 webhook이나 이벤트 트리거가 없어요. 내 메시지, 예약 일정, 그리고 dot 자신의 읽기 전용 조사를 바탕으로 일해요.",
        "개별 메모리를 보거나 수정하거나 지울 수 없어요. 배운 내용을 지우는 유일한 방법은 dot을 삭제하는 거예요.",
        "Plus 사용자는 dots를 쓸 수 없고, EEA, 스위스, 영국의 Pro 사용자도 마찬가지예요.",
      ],
    },
    {
      kind: "table",
      title: "ChatGPT dots vs Grok Bot vs Crewmark",
      text: [
        "xAI는 2026년 8월 자기 컴퓨터를 가진 “늘 켜져 있는 에이전트 팀”으로 Grok Bot을 발표했어요. Crewmark는 다른 길을 가요. 누군가의 클라우드에 새 에이전트를 두는 대신, 이미 쓰고 있는 코딩 에이전트를 내 컴퓨터에서 일하는 직원으로 바꿔요.",
      ],
      headers: ["", "ChatGPT dots", "Grok Bot", "Crewmark"],
      rows: [
        ["실행 위치", "OpenAI의 클라우드 컴퓨터", "자기 컴퓨터(xAI 설명 기준)", "내 컴퓨터, Claude Code나 Codex 안"],
        ["모델", "GPT-6 Astra", "Grok", "내 Claude Code나 Codex가 쓰는 모델"],
        ["개수", "주 dot 1개", "여러 개, 서로 메시지 주고받기 가능", "직무당 직원 1명, 원하는 만큼 설정"],
        ["일을 시작하는 방식", "내 메시지, 예약 일정, 자체 조사", "내가 일하는 모습을 보고 루틴을 학습", "근무 시간 중 15~60분마다 하트비트"],
        ["업무 대기열", "대화 스레드와 Scheduled", "공개된 정보 없음", "칸반 보드의 이슈"],
        ["목표", "내가 설명한 목표", "공개된 정보 없음", "숫자로 정한 KPI, 예: 월 클릭 수 +10%"],
        ["요금제", "Pro, Business Premium, Enterprise beta", "SuperGrok과 Cursor 요금제, beta", "누구나 가입 가능, 기존 Claude나 ChatGPT 요금제로 실행"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Crewmark로",
      title: "이미 Claude Code나 Codex를 쓰고 있다면? 늘 켜 두세요",
      text: [
        "늘 돌아가야 하는 일이 코드베이스나 웹사이트에 있다면 새 에이전트는 필요 없어요. Crewmark는 이미 쓰고 있는 Claude Code나 Codex 세션에 직무, 목표, 근무 시간을 주고, 하트비트로 깨워 보드에서 다음 이슈를 가져가게 해요.",
      ],
      steps: [
        {
          title: "세션을 직원으로 바꾸기",
          text: "SEO 전문가나 소프트웨어 엔지니어 같은 직무를 고르고, 목표를 숫자로 적은 뒤, Claude Code나 Codex에서 설정 명령을 실행하세요.",
        },
        {
          title: "하트비트로 계속 일하게 하기",
          text: "근무 시간 동안 직원은 15, 30, 60분마다 같은 대화에서 깨어나서 자기가 한 일을 기억해요. [Claude Code를 먼저 일하게 만드는 방법](/proactive-claude-code)도 참고하세요.",
        },
        {
          title: "이슈를 맡기고 메시지에 답하기",
          text: "보드에 일을 올리면 직원이 가져가서 진행하며 댓글을 달고, 막히면 메시지를 보내요. [AI 직원이란](/ai-employees)도 읽어 보세요.",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "첫 ChatGPT dot 설정하기" },
  mid: {
    title: "코드베이스를 위한 상시 가동 에이전트가 필요하세요?",
    text: "Crewmark는 이미 결제한 요금제 그대로, Claude Code나 Codex 세션을 하트비트로 계속 일하게 해요.",
    button: "시작하기",
  },
  faq: {
    title: "ChatGPT dots 자주 묻는 질문",
    items: [
      {
        q: "ChatGPT dots란 무엇인가요?",
        a: "2026년 9월 29일 발표된, ChatGPT 안에서 늘 켜져 있는 에이전트예요. 각 dot은 GPT-6 Astra로 동작하고 자기 클라우드 컴퓨터와 브라우저를 가지며, 내 앱에 연결되고, 피드백으로 배우고, 목표를 향해 계속 일해요.",
      },
      {
        q: "ChatGPT dots는 얼마인가요?",
        a: "Pro와 Business Premium에는 첫 번째 dot이 추가 비용 없이 포함돼요. OpenAI는 dot 추가와 dot당 작업량 추가를 판매할 계획이지만, 가격도 출시 첫 달 이후의 사용 조건도 아직 공개하지 않았어요.",
      },
      {
        q: "ChatGPT Plus에서 dots를 쓸 수 있나요?",
        a: "아니요. Free, Go, Plus, 일반 Business 요금제에는 dots가 포함되지 않아요. Pro와 Business Premium에는 순차 제공 중이고, Enterprise, Edu, Healthcare에서는 beta예요.",
      },
      {
        q: "ChatGPT dot은 어떻게 쓰나요?",
        a: "chatgpt.com/dots를 열고, dot을 만들어 이름을 붙이고, Customize에서 앱을 연결하고, 묻지 않고 해도 되는 일을 맞춤 규칙으로 정한 다음, 목표를 주세요. 진행 상황은 프로필의 In progress, Scheduled, Completed에서 확인해요.",
      },
      {
        q: "ChatGPT dots와 Grok Bot은 뭐가 다른가요?",
        a: "둘 다 자기 컴퓨터를 가진 상시 가동 에이전트예요. dot은 GPT-6 Astra로 동작하고 출시 시점에는 하나만 쓸 수 있어요. xAI의 Grok Bot은 서로 메시지를 주고받는 에이전트 팀으로, SuperGrok과 일부 Cursor 요금제에서 beta로 제공돼요.",
      },
      {
        q: "ChatGPT dots로 코드를 짤 수 있나요?",
        a: "네, Codex에 위임해서요. dot은 Codex 클라우드 작업을 시작할 수 있고, 내 컴퓨터를 연결했다면 로컬 Codex 작업도 시작할 수 있어요. 둘 다 Codex 사용 한도에 포함돼요.",
      },
    ],
  },
  cta: {
    title: "지금 쓰는 에이전트를 늘 켜 두세요.",
    text: "Crewmark는 Claude Code와 Codex 세션을 직무, 목표, 근무 시간, 하트비트를 갖춘 AI 직원으로 바꿔 줘요.",
    button: "시작하기",
  },
  checked: "2026년 11월 2일에 OpenAI의 발표, 도움말 센터, 릴리스 노트, 가격 페이지와 대조해 확인했습니다.",
  disclaimer:
    "Crewmark는 독립 제품으로, OpenAI, xAI, Anthropic과 제휴하거나 이들의 보증을 받지 않았습니다. ChatGPT는 OpenAI의, Grok은 xAI의, Claude Code는 Anthropic의 상표입니다.",
};
