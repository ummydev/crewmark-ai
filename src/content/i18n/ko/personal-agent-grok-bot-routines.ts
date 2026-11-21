import type { GuideCopy } from "@/components/landing/guide-article";

// ko translation of /personal-agent/grok-bot-routines; the English master is src/content/personal-agents/grok-bot-routines.ts.

const docs = "https://docs.x.ai/grok-bot/skills-routines-and-automations";

const prompts = `# 그 일을 맡을 Bot의 채팅에서 요청하세요
평일 매일 오전 7:00에 밤사이 온 Gmail을 정리하고,
급한 메일에는 답장 초안을 써서 목록을 보내 주는 루틴을 만들어 줘. 아무것도 보내지는 마.

매주 일요일 오후 6:00에 다음 주 Google 캘린더를 검토하고,
일정 충돌과 너무 빡빡한 날을 표시해서 월요일 계획을 메시지로 보내 주는 루틴을 만들어 줘.

평일 2시간마다 Slack의 #launch 채널에서 가격 관련 질문을 확인하고
내 승인을 받을 답변 초안을 써 주는 루틴을 만들어 줘.`;

const webhook = `# 루틴의 Webhook 섹션(데스크톱)에서 "POST to"와 "key"를 복사하세요
curl -X POST "https://<루틴의 POST to URL>" \\
  -H "Authorization: Bearer <key>" \\
  -H "Content-Type: application/json" \\
  -d '{"order": "1042", "status": "refund requested"}'

# 200 = 실행이 시작됨(결과는 Bot의 채팅에서 확인)
# 그 외 응답 = 실행이 시작되지 않음`;

export const copy: GuideCopy = {
  meta: {
    title: "Grok Bot 루틴: 일정, 웹훅, 문제 해결",
    description:
      "Grok Bot 루틴 설정법: 일상 언어로 쓰는 일정, 시간대, 테스트 실행, 웹훅과 Slack 트리거, 제한(루틴 50개, 5분, 시간당 300회), 루틴이 실행되지 않을 때 확인할 점까지 정리했어요.",
  },
  breadcrumb: "Grok Bot 루틴",
  parent: { name: "개인 에이전트", href: "/personal-agent" },
  hero: {
    kicker: "개인 에이전트 · Grok Bot",
    title: "Grok Bot 루틴: Bot 일정 잡기, 웹훅으로 실행하기, 문제 해결하기",
    lead: "루틴은 Grok Bot 하나에게 언제 일을 할지 알려 줘요. 평일 매일 오전 8:00처럼 일정에 맞춰, 또는 Slack 멘션이나 웹훅 호출처럼 무언가 일어났을 때요. Bot은 클라우드 컴퓨터에서 일하기 때문에 노트북을 닫아도 루틴이 실행돼요. 이 가이드에서는 데스크톱과 휴대폰에서 루틴을 만드는 법, 잘 통하는 일정 표현, 웹훅과 이벤트 트리거, 제한, xAI 예시에서 나온 루틴 아이디어, 루틴이 실행되지 않을 때 확인할 점을 다뤄요.",
    cta: "시작하기",
    secondary: "루틴 만들기",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "Grok Bot 루틴이란",
      text: [
        "xAI의 설명에 따르면 루틴은 “Bot 하나에게 언제 워크플로를 실행할지 알려 주는 것으로, 일정에 따르거나 무언가 일어났을 때 실행돼요.” 루틴은 Bot 하나에 속하고, 그 Bot의 메모리와 스킬을 쓰며, 결과를 Bot의 채팅에 올려요.",
      ],
      points: [
        "일정: “every weekday at 8:00 AM”이나 “every 2 hours” 같은 일상 표현으로, 설정에 지정한 시간대를 따라요.",
        "이벤트: Slack 트리거, GitHub·Linear·Sentry·PagerDuty 이벤트, Bot 전용 주소로 온 이메일, 웹훅 호출.",
        "새 루틴은 만들 때 바로 실행되지 않아요. 다음 예정 시각을 기다려요. 지금 실행하려면 Test를 쓰세요.",
        "루틴은 Bot의 클라우드 컴퓨터에서 실행되므로 노트북을 닫아도 계속 돌아가요.",
        "테스트를 포함한 모든 실행이 Grok Bot 사용량을 써요.",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Grok Bot에서 루틴 만드는 법",
      steps: [
        {
          title: "그 일을 맡을 Bot에게 요청하기",
          text: "데스크톱에서는 그 Bot의 채팅을 열고 할 일과 실행 시점을 설명하세요. 입력은 어디서 오는지, 어떤 결과를 원하는지, 무엇에 내 승인이 필요한지, 출처가 없을 때는 어떻게 할지도 말해 주세요. 휴대폰에서는 Bot 프로필을 열고 Routines 아래의 Add routine을 탭한 뒤 “Set up a routine to”로 시작하는 메시지를 완성하세요.",
          code: prompts,
        },
        {
          title: "“When to run”과 시간대 확인하기",
          text: "루틴을 열고 When to run에서 저장된 일정을 확인하세요. 틀렸다면 Edit을 고르고 고칠 내용을 설명하세요. 시간대는 설정의 Bot 아래 Timezone 필드에 있어요. 자동 감지는 컴퓨터의 시간대를 쓰므로, 일이 다른 지역 기준이라면 고정된 시간대를 고르세요.",
        },
        {
          title: "한 번 테스트하기",
          text: "데스크톱에서 루틴을 열고 Test를 고르세요. 실행이 끝날 때까지 Running…이 표시되고, 결과는 Bot의 채팅에 나타나요. 테스트도 파일을 바꾸거나 사이트를 쓰는 등 실제로 일을 하므로, 무언가를 쓰거나 보내는 작업은 내 승인을 거치게 하세요. Test 버튼이 없는 루틴이라면 안전한 입력으로 채팅에서 Bot에게 한 번 해 보라고 하세요.",
        },
        {
          title: "일시 정지, 재개, 삭제",
          text: "데스크톱에서는 Bot 이름을 클릭해 Details를 열고 루틴 행의 스위치를 쓰거나, 루틴을 열어 Pause나 Resume을 고르세요. 휴대폰에서는 Bot 프로필에서 루틴을 열어 Active를 끄고, 행을 스와이프하면 삭제할 수 있어요. 삭제는 되돌릴 수 없어요.",
        },
      ],
      source: { label: "출처: xAI Grok Bot 문서, Skills and routines", href: docs },
    },
    {
      kind: "steps",
      id: "webhook",
      title: "웹훅으로 루틴 실행하는 법",
      text: [
        "웹훅을 쓰면 다른 서비스가 루틴을 시작할 수 있어요. 예를 들어 환불 요청이 들어오면 쇼핑몰이, 누군가 가입하면 신청서가 루틴을 시작하게 할 수 있어요.",
      ],
      steps: [
        {
          title: "트리거 추가하기",
          text: "Bot에게 루틴에 웹훅 트리거를 추가해 달라고 하세요.",
        },
        {
          title: "URL과 키 복사하기",
          text: "데스크톱에서 루틴을 열고 Webhook 섹션을 찾으세요. POST to(URL), key(비밀 키), header(전체 Authorization 헤더)가 있어요. 필드를 클릭하면 복사돼요.",
          code: webhook,
        },
        {
          title: "POST를 보내고 응답 읽기",
          text: "키를 `Authorization: Bearer <key>`로 넣어 HTTP POST를 보내세요. JSON 본문을 넣을 수 있고, Bot은 루틴의 지시와 함께 그 본문을 받아요. 200은 실행이 끝났다는 뜻이 아니라 시작됐다는 뜻이에요. 다른 응답은 실행이 시작되지 않았다는 뜻이니, 루틴이 일시 정지돼 있지 않은지, 현재 키를 쓰고 있는지 확인하세요.",
        },
      ],
    },
    {
      kind: "text",
      id: "events",
      title: "Slack, GitHub 등 이벤트 트리거",
      points: [
        "Slack: 채널 하나 또는 Slack 전체에서 Bot이 멘션될 때, 특정 단어나 문구가 나올 때, 누군가 메시지에 반응할 때, 또는 모든 메시지에 실행돼요. 먼저 Bot을 소유한 Cursor 계정에 Slack을 연결하세요.",
        "GitHub, Linear, Sentry, PagerDuty: 이 도구들의 이벤트로 루틴을 시작해요. 이 트리거는 Cursor 계정 연동을 거치므로 따로 연결이 필요할 수 있어요.",
        "이메일: Bot 전용 주소로 온 이메일로 루틴을 시작할 수 있어요.",
        "새 활동만 실행을 시작해요. 트리거는 좁게 잡으세요. 바쁜 채널의 모든 메시지를 지켜보면 사용량이 빠르게 줄어요.",
      ],
    },
    {
      kind: "table",
      id: "limits",
      title: "Grok Bot 루틴 제한",
      headers: ["제한", "값"],
      rows: [
        ["Bot당 루틴 수", "최대 50개"],
        ["가장 짧은 일정", "실행 간격 5분"],
        ["시간당 실행 횟수(모든 루틴 합계)", "최대 300회"],
        ["시간당 실행 횟수(루틴 하나)", "최대 200회"],
        ["보관되는 실행 기록", "루틴당 최근 20회"],
        ["속도 제한을 넘으면", "“Automation run rate limit exceeded”로 실행 실패"],
        ["오래 접속하지 않으면", "Grok Bot이 루틴을 계속 실행할지 묻고, 답하지 않으면 일시 정지해요"],
      ],
    },
    {
      kind: "text",
      id: "not-working",
      title: "Grok Bot 루틴이 안 돌아가나요? 확인할 점",
      points: [
        "한 번도 실행되지 않았다: 새 루틴은 다음 예정 시각을 기다려요. 지금 실행하려면 Test를 고르세요.",
        "일시 정지돼 있다: 데스크톱에서는 행 스위치가, 휴대폰에서는 Active가 꺼져 있어요. 오래 접속하지 않으면 Grok Bot이 직접 루틴을 일시 정지하기도 해요.",
        "시간이 틀리다: When to run을 읽고 설정 > Bot의 Timezone을 확인하세요. 자동 감지는 지금 쓰는 컴퓨터를 따라요.",
        "Slack 트리거가 작동하지 않았다: 메시지가 새것이어야 하고, 지켜보는 채널에 있어야 하며, 일치하는 문구가 들어 있어야 해요.",
        "웹훅이 실행을 시작하지 않았다: 200이 아닌 응답은 시작되지 않았다는 뜻이에요. 루틴이 일시 정지돼 있지 않은지, 키가 최신인지 확인하세요.",
        "속도 제한으로 실행이 실패했다: 트리거를 좁히거나 일정 간격을 넓힌 뒤, Test나 웹훅 재전송으로 다시 실행하세요. xAI는 Grok Bot 공용 한도로 인한 실패도 알려진 문제로 올려 두었고, 이런 실패는 자동으로 재시도되지 않아요.",
        "사용량이 바닥났다: 모든 실행이 주간 사용량을 써요. 필요 없는 루틴은 일시 정지하고 일정 간격을 넓히세요. The X Subscription에서는 추가 사용량이 선불 크레딧에서, 기존 Cursor 플랜에서는 켜 두었다면 온디맨드 사용량에서 나가요.",
        "“Sync failed”: xAI의 루틴 문서에는 이 오류 설명이 없어요. 루틴을 열어 일정과 트리거를 확인하고 Test를 실행하세요. 계속 실패하면 앱에서 Grok Bot 지원팀에 문의하세요.",
      ],
    },
    {
      kind: "table",
      id: "ideas",
      title: "xAI 예시에서 나온 루틴 아이디어",
      text: ["xAI 문서의 사용 사례에서 가져왔어요. 모두 초안을 만든 뒤, 무언가 내보내기 전에 내 승인을 기다려요."],
      headers: ["루틴", "시점", "하는 일"],
      rows: [
        ["아침 브리핑", "매일 아침", "밤사이 여러 앱에서 바뀐 것을 요약하고 팀 게시글 초안 작성"],
        ["받은편지함 관리", "밤사이", "Gmail을 급한 순서로 정리하고, 급한 스레드에 보내지 않은 답장 초안 작성"],
        ["다음 주 준비", "일요일 저녁", "Google 캘린더를 검토해 충돌을 표시하고 월요일 계획 전송"],
        ["회의록", "매일 저녁", "Granola 노트에서 담당자가 정해진 할 일을 뽑아 Slack 게시글 초안 작성"],
        ["프로젝트 업데이트", "매주 금요일", "Notion 진행 상황 업데이트 초안을 쓰고 승인 후 추가"],
        ["캠페인 팀", "월요일 오전 9시", "가입 데이터를 가져와 출시 콘텐츠 초안을 쓰고 숫자와 대조해 사실 확인"],
        ["경쟁사 동향", "매주", "경쟁사의 출시와 가격 변경을 링크와 함께 보고"],
        ["월말 결산", "매월 1일", "청구서를 맞추고 비용을 대사한 뒤 승인할 예외 항목 정리"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Crewmark로",
      title: "코딩 에이전트에도 루틴을",
      text: [
        "Grok Bot 루틴은 Gmail, Slack, Notion에 있는 일에 잘 맞아요. 일이 코드 저장소에 있다면, Crewmark가 내 Claude Code나 Codex에 같은 리듬을 줘요. 직무, 숫자로 된 목표, 근무 시간, 그리고 깨어나서 보드의 다음 이슈를 가져가게 하는 하트비트를 갖춘 AI 직원이에요.",
      ],
      steps: [
        {
          title: "내 에이전트로 직원 채용하기",
          text: "Claude Code나 Codex 대화에서 설정 명령어를 실행하면 그 대화가 직원이 돼요. [AI 직원이란](/ai-employees)을 참고하세요.",
        },
        {
          title: "근무 시간과 하트비트 정하기",
          text: "정한 시간 동안 15분에서 240분마다, 밤에도 깨어나요. [Claude Code를 능동적으로 만드는 법](/proactive-claude-code)과 [Codex 예약 작업](/proactive-codex)을 참고하세요.",
        },
        {
          title: "개인 에이전트 비교하기",
          text: "[Grok Bot 가이드](/personal-agent/grok-bot)와 [개인 AI 에이전트 비교](/personal-agent)를 참고하세요.",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Grok Bot 루틴 만들기" },
  mid: {
    title: "코딩 에이전트에도 같은 루틴이 필요하세요?",
    text: "Crewmark는 근무 시간 동안 하트비트에 맞춰 Claude Code나 Codex를 깨우고 다음 이슈를 건네줘요.",
    button: "시작하기",
  },
  faq: {
    title: "자주 묻는 질문",
    items: [
      {
        q: "Grok Bot에서 루틴 일정은 어떻게 잡나요?",
        a: "그 일을 맡을 Bot의 채팅에서 루틴을 만들어 달라고 하고, “every weekday at 8:00 AM”처럼 시점을 말하세요. 휴대폰에서는 Bot 프로필을 열고 Add routine을 탭하세요. 그다음 루틴을 열어 When to run과 시간대를 확인하세요.",
      },
      {
        q: "Grok Bot 루틴이 왜 실행되지 않나요?",
        a: "대개 첫 예정 시각을 기다리고 있거나, 일시 정지돼 있거나, 시간대가 틀린 경우예요. Test로 작동하는지 확인하고, Active가 켜져 있는지 보고, When to run을 읽어 보세요. 200을 받지 못한 웹훅 호출은 실행을 시작하지 않아요.",
      },
      {
        q: "웹훅으로 Grok Bot 루틴을 실행하려면 어떻게 하나요?",
        a: "Bot에게 웹훅 트리거를 추가해 달라고 한 뒤, 데스크톱에서 루틴의 Webhook 섹션에 있는 URL과 키를 복사해 `Authorization: Bearer <key>`로 HTTP POST를 보내세요. JSON 본문은 Bot에 전달돼요.",
      },
      {
        q: "Grok Bot 루틴은 얼마나 자주 실행할 수 있나요?",
        a: "최소 5분 간격이에요. 루틴 하나는 시간당 최대 200회, 모든 루틴을 합쳐 최대 300회 실행할 수 있고, Bot 하나에 루틴을 최대 50개 둘 수 있어요.",
      },
      {
        q: "컴퓨터가 꺼져 있어도 루틴이 실행되나요?",
        a: "네. Bot은 클라우드 컴퓨터에서 일하므로 노트북을 닫아도 예약 실행과 트리거 실행이 계속되고, 끝나면 Bot이 알려 줘요.",
      },
      {
        q: "Grok Bot 루틴도 사용량을 쓰나요?",
        a: "네. Test 실행을 포함한 모든 실행이 Grok Bot 사용량을 쓰고, 잦은 일정이나 바쁜 Slack 트리거가 가장 빨리 써요.",
      },
    ],
  },
  cta: {
    title: "코딩 에이전트에게 일정과 일을 주세요.",
    text: "Crewmark는 Claude Code와 Codex 세션을 직무, 목표, 근무 시간, 하트비트를 갖춘 AI 직원으로 바꿔 줘요.",
    button: "시작하기",
  },
  checked: "2026년 11월 10일에 xAI의 Grok Bot 문서와 Cursor의 Grok Bot 플랜 페이지와 대조해 확인했습니다.",
  disclaimer:
    "Crewmark는 독립 제품으로, xAI, SpaceX, X, Cursor와 제휴하거나 그 보증을 받지 않았습니다. Grok은 해당 소유자의 상표입니다.",
};
