import type { GuideCopy } from "@/components/landing/guide-article";

// ko translation of /personal-agent/manus-cue; the English master is src/content/personal-agents/manus-cue.ts.

const blog = "https://manus.im/blog/introducing-manus-2-0";

const prompts = `# 심부름을 맡을 에이전트 하나
평일 매일 오전 8시에 이사와 관련된 메일이 있는지 받은편지함을 확인하고
짧은 요약을 보내 줘. 누군가에게 답장하기 전에는 먼저 물어봐.

# 목표 하나를 공유하는 작은 팀(Manus의 예시를 프롬프트로)
3월에 20명이 가는 팀 워크숍을 계획하고 있어.
한 명은 리스본 근처 장소를 조사하고, 한 명은 그걸 후보 세 곳으로 추리고,
한 명은 내가 결정할 수 있게 추천안이 담긴 덱 초안을 만들어 줘.`;

export const copy: GuideCopy = {
  meta: {
    title: "Manus Cue: 초대 코드, 사용법, 가격",
    description:
      "Manus의 Cue 정리: 자기만의 이메일, 전화번호, 지갑, 컴퓨터를 가진 개인 에이전트. 초대 코드로 이용하는 법, 다운로드 방법, 에이전트와 그룹 채팅 사용법, 예약 자동화, 비용까지 알아봐요.",
  },
  breadcrumb: "Manus Cue",
  parent: { name: "개인 에이전트", href: "/personal-agent" },
  hero: {
    kicker: "개인 에이전트 · Manus Cue",
    title: "Manus Cue: 자기만의 이메일, 전화번호, 지갑을 가진 개인 에이전트",
    lead: "Cue는 Manus가 내놓은 개인 에이전트용 독립 앱으로, 2026년 9월 28일 Manus 2.0과 함께 얼리 액세스로 출시됐어요. 차별점은 에이전트마다 자기 이메일 주소, 전화번호, 지갑, 컴퓨터를 갖는다는 거예요. 그래서 사람들에게 메시지를 보내고, 내 전화를 받고, 내가 정한 예산 안에서 결제할 수 있어요. 이 가이드에서는 초대 코드로 들어가는 법, 다운로드 방법, 에이전트 하나 또는 팀을 쓰는 법, 예약 자동화, 비용, 아직 답이 없는 질문들을 다뤄요.",
    cta: "시작하기",
    secondary: "이용 방법",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "Manus Cue란",
      text: [
        "Manus는 Cue를 “휴대폰과 데스크톱에서 쓰는, 개인 에이전트를 위한 새로운 독립 앱”이라고 소개해요. Manus와 같은 인프라 위에 만들어졌지만 Manus의 한 모드가 아니라 별개의 앱이에요.",
      ],
      points: [
        "자기만의 정체성: 에이전트마다 이메일 주소, 전화번호, 지갑, 컴퓨터가 있어요.",
        "통화: 에이전트가 내 전화를 받고 Cue에 요약을 남겨 줘요.",
        "결제: 에이전트는 내가 정한 예산 안에서 결제할 수 있어요.",
        "팀: 여러 에이전트가 그룹 채팅과 공동 목표를 공유하며 서로 일을 넘겨요. 방향을 정하고 최종 결정을 내리는 건 나예요.",
        "바깥에서도: 식당에서 QR 코드를 스캔하면 에이전트가 대신 주문하거나 줄을 서 줘요.",
        "비서 하나로도 충분해요: 심부름, 알림, 조사를 맡을 에이전트 하나만 둘 수도 있어요.",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Manus Cue 이용하는 법",
      steps: [
        {
          title: "초대 코드 받기",
          text: "Cue는 얼리 액세스 중이라 초대 코드가 필요해요. 출시 때 Manus는 선착순으로 일부 초기 사용자에게 MEETCUE 코드를 제공했는데, 지금도 작동하는지는 밝히지 않았어요. 들어간 사람은 모두 나눠 줄 추가 코드를 받으니, 이미 Cue를 쓰는 사람에게 부탁해 보세요.",
        },
        {
          title: "Manus에서 앱 내려받기",
          text: "Manus 사이드바에서 Agents (Cue!) 탭을 열고 QR 코드를 스캔해 앱을 내려받으세요. Manus는 웹, 데스크톱, 모바일을 지원한다고 밝혔지만, 출시 당시 iOS는 App Store 심사 중이었으니 믿기 전에 App Store를 확인하세요.",
        },
        {
          title: "코드로 로그인하기",
          text: "로그인할 때 초대 코드를 입력하세요. Manus가 이메일로 코드를 보내 주기도 해요.",
        },
        {
          title: "첫 에이전트 만들기",
          text: "심부름용 에이전트 하나로 시작하거나, 공동 목표를 가진 작은 팀을 꾸리세요. 무엇을 해 주길 원하는지, 쓸 수 있는 예산, 먼저 나에게 물어봐야 할 것을 말해 주세요.",
          code: prompts,
        },
      ],
      source: { label: "출처: Manus 2.0과 Cue 출시 글", href: blog },
    },
    {
      kind: "text",
      id: "automations",
      title: "예약 자동화와 스킬",
      points: [
        "Scheduled Automations: 무엇을 언제 할지 설명하면 Cue가 설정해 줘요.",
        "새 이메일이나 Slack 메시지 같은 이벤트 트리거는 Manus Automations에 대해 설명돼 있지만, Cue에도 있다고는 아직 밝히지 않았어요.",
        "Manus에서 만들거나 가져온 스킬은 자동으로 옮겨지지 않아요. Cue 안에서 다시 설정하세요.",
      ],
    },
    {
      kind: "table",
      id: "pricing",
      title: "Manus Cue 가격",
      headers: ["", "Manus의 설명"],
      rows: [
        ["얼리 액세스", "초대 코드가 있으면 무료"],
        ["얼리 액세스 이후", "발표되지 않음"],
        ["Manus 구독이나 크레딧", "출시 글에는 Manus 플랜에 Cue가 포함된다거나 Cue가 Manus 크레딧을 쓴다는 말이 없어요"],
        ["에이전트 결제", "에이전트는 내가 정한 예산 안에서 자기 지갑으로 결제해요"],
      ],
    },
    {
      kind: "text",
      id: "questions",
      title: "내 번호를 맡기기 전에 남은 질문들",
      points: [
        "에이전트가 누구에게 연락할 수 있는지, 나를 대신해 무엇을 약속할 수 있는지는 출시 글에 설명이 없어요. 예산을 정하고, 에이전트마다 먼저 물어볼 것을 알려 주세요.",
        "상대방이 에이전트와 이야기하고 있다는 걸 어떻게 아는지도 설명돼 있지 않아요.",
        "얼리 액세스 이후의 가격과 Cue를 쓸 수 있는 국가는 발표되지 않았어요.",
        "메시지를 보내고 지갑으로 결제하는 에이전트는 돈이 드는 실수를 할 수 있어요. 적은 예산으로 시작하세요.",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Manus Cue vs Meta Muse, Grok Bot",
      headers: ["", "Manus Cue", "Meta Muse", "Grok Bot"],
      rows: [
        ["에이전트 정체성", "자기 이메일, 전화번호, 지갑, 컴퓨터", "연결된 내 계정을 통해 행동", "나로서 행동; 자기 계정 없음"],
        ["에이전트 팀", "있음, 공동 목표를 가진 그룹 채팅", "설명 없음", "있음, Bot끼리 일을 넘김"],
        ["일정", "Scheduled Automations", "알림과 반복 작업", "일정이나 트리거로 도는 루틴"],
        ["이용", "얼리 액세스, 초대 코드", "미국, 주간 한도 내 무료", "X Premium 이상, SuperGrok, Cursor 플랜"],
        ["가이드", "이 페이지", "[Meta Muse](/personal-agent/meta-muse)", "[Grok Bot](/personal-agent/grok-bot)"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Crewmark로",
      title: "이미 쓰는 에이전트로 꾸리는 업무용 에이전트 팀",
      text: [
        "Cue는 개인 에이전트마다 정체성을 줘요. Crewmark는 업무 에이전트마다 일을 줘요. 내 Claude Code나 Codex를 직무, 숫자로 된 목표, 근무 시간, 하트비트를 갖춘 AI 직원으로 바꾸고, 나머지 팀과 공유 보드로 함께 일하게 해요.",
      ],
      steps: [
        {
          title: "직무 고르기",
          text: "[AI 직원 직무](/ai-employees)에서 시작하세요. 엔지니어, SEO 전문가, 마케팅 에이전트, 소셜 미디어 매니저, 디자이너가 있어요.",
        },
        {
          title: "일을 보드에 올리기",
          text: "직원은 배정된 다음 이슈를 가져가고, 일하면서 댓글을 남기고, 막히면 메시지를 보내요.",
        },
        {
          title: "개인 에이전트 비교하기",
          text: "[개인 AI 에이전트 비교](/personal-agent)를 참고하세요.",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Manus Cue 시작하기" },
  mid: {
    title: "실제 업무에 에이전트 팀이 필요하세요?",
    text: "Crewmark 직원은 이미 결제 중인 Claude Code나 Codex 플랜으로, 하트비트에 맞춰 공유 보드에서 일해요.",
    button: "시작하기",
  },
  faq: {
    title: "자주 묻는 질문",
    items: [
      {
        q: "Manus Cue는 무엇인가요?",
        a: "Manus가 만든 개인 에이전트용 독립 앱으로, 2026년 9월 28일 얼리 액세스로 출시됐어요. 에이전트마다 자기 이메일 주소, 전화번호, 지갑, 컴퓨터가 있고, 여러 에이전트가 그룹 채팅에서 함께 일할 수 있어요.",
      },
      {
        q: "Manus Cue 초대 코드는 어떻게 받나요?",
        a: "출시 때 Manus는 선착순으로 일부 초기 사용자에게 MEETCUE를 제공했어요. 이용 권한을 얻은 사람은 모두 나눠 줄 초대 코드를 추가로 받으니, 가장 확실한 방법은 기존 Cue 사용자에게 부탁하는 거예요.",
      },
      {
        q: "Manus Cue는 얼마인가요?",
        a: "얼리 액세스 기간에는 초대 코드가 있으면 무료예요. 그 이후 가격이나 Manus 구독에 포함될지는 발표되지 않았어요.",
      },
      {
        q: "Manus Cue는 어떻게 내려받나요?",
        a: "Manus 사이드바에서 Agents (Cue!) 탭을 열고 QR 코드를 스캔하세요. Manus는 웹, 데스크톱, 모바일을 지원한다고 밝혔고, 출시 당시 iOS는 App Store 심사 중이었어요.",
      },
      {
        q: "Cue 에이전트가 전화와 결제를 할 수 있나요?",
        a: "에이전트마다 자기 전화번호와 지갑이 있어요. 내 전화를 받고 요약을 남기고, 메시지를 보내고, 내가 정한 예산 안에서 결제할 수 있어요.",
      },
      {
        q: "Cue는 Manus의 일부인가요?",
        a: "같은 인프라 위에 만들어졌지만 별개의 앱이에요. Manus의 스킬은 자동으로 옮겨지지 않고, Cue가 Manus 크레딧을 쓴다는 설명도 없어요.",
      },
    ],
  },
  cta: {
    title: "개인 에이전트는 심부름을 하고, AI 직원은 백로그를 처리해요.",
    text: "Crewmark는 Claude Code와 Codex 세션을 직무, 목표, 근무 시간, 하트비트를 갖춘 AI 직원으로 바꿔 줘요.",
    button: "시작하기",
  },
  checked: "2026년 11월 10일에 Manus의 Manus 2.0 출시 글과 Help Center와 대조해 확인했습니다.",
  disclaimer:
    "Crewmark는 독립 제품으로, Manus, Meta, xAI와 제휴하거나 그 보증을 받지 않았습니다. 제품명은 각 소유자의 상표입니다.",
};
