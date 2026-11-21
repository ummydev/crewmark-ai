import type { GuideCopy } from "@/components/landing/guide-article";

// ko translation of /personal-agent/gemini-spark; the English master is src/content/personal-agents/gemini-spark.ts.

const help = "https://support.google.com/gemini/answer/17094507";

const prompts = `매달 3일에 Gmail에서 신용카드 명세서를 확인해
새로 생겼거나 숨어 있는 구독 요금을 찾아 목록을 보내 줘.

아이 학교 메일함에서 마감일을 지켜보다가
매일 저녁 7시에 나와 배우자에게 요약을 보내 줘.

이번 주 이메일과 채팅의 회의 메모를 Google 문서로 요약하고
후속 이메일 초안을 써 줘. 보내지는 마.`;

export const copy: GuideCopy = {
  meta: {
    title: "Gemini Spark(현 tasks): 사용법, 플랜, 이용 국가",
    description:
      "Gemini Spark는 어떻게 됐을까: Google의 24시간 개인 에이전트가 이제 Gemini 앱의 tasks가 됐어요. 누가 쓸 수 있는지(Google AI Pro 또는 Ultra, 이용 국가), 켜는 법, 일정, 연결 앱, 제한, Mac 앱까지 정리했어요.",
  },
  breadcrumb: "Gemini Spark",
  parent: { name: "개인 에이전트", href: "/personal-agent" },
  hero: {
    kicker: "개인 에이전트 · Gemini Spark",
    title: "Gemini Spark, 이제 Gemini의 tasks: Google 개인 에이전트 사용법",
    lead: "Google은 2026년 5월 19일 Gemini Spark를 “작업을 능동적으로 관리하도록 설계된 24시간 개인 AI 에이전트”로 발표했어요. 클라우드에서 일하므로 노트북을 닫거나 휴대폰을 잠가도 계속 돌아가고, Gmail, Docs 등 Google 앱을 써요. 베타 때의 Spark는 이제 Gemini 앱에서 tasks라고 불려요. Spark 버튼이 사라진 것처럼 보이는 이유예요. 이 가이드에서는 누가 쓸 수 있는지, 켜는 법, 일정, 연결 앱, 제한, 잘하는 일을 다뤄요.",
    cta: "시작하기",
    secondary: "켜는 법",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "Gemini Spark는 어떻게 됐나요?",
      text: [
        "종료된 건 없어요. Google 도움말은 이제 이 기능을 tasks라고 부르며 “베타에서는 Spark라고 불렸다”고 적고 있어요. Gemini 입력창 아래의 Task 옵션으로 시작하면 되고, 기존 작업과 일정도 그대로 있어요.",
      ],
      points: [
        "정체: 클라우드의 Gemini에서 돌아가는 에이전트로, 출시 당시 Gemini 3.5와 Google의 Antigravity 하네스를 기반으로 했어요.",
        "하는 일: 받은편지함 정리, 항공권·호텔 가격 모니터링, 출처를 단 조사, 쇼핑이나 예약을 위한 웹 탐색, PDF·Docs·Sheets·Slides 만들기.",
        "일하는 시점: 백그라운드에서, 일정에 따라 또는 무언가 일어났을 때 일하고, 돈을 쓰거나 이메일을 보내는 등 중요한 행동 전에는 먼저 물어봐요.",
      ],
    },
    {
      kind: "table",
      id: "who",
      title: "Gemini tasks(Spark)를 쓸 수 있는 사람",
      text: ["2026년 11월 10일 Google Gemini 앱 도움말 기준이에요."],
      headers: ["조건", "내용"],
      rows: [
        ["플랜", "Google AI Pro 또는 Ultra(미국에서 Google AI Pro는 월 $19.99)"],
        ["계정", "만 18세 이상의 개인 Google 계정; 직장·학교 계정은 아직 지원 안 됨"],
        ["국가", "Gemini 앱을 쓸 수 있는 모든 곳, 단 유럽경제지역(EEA), 스위스, 영국, 나이지리아 제외"],
        ["설정", "Keep Activity가 켜져 있어야 함"],
        ["사용처", "Gemini 모바일 앱, Mac용 Gemini 앱, gemini.google.com 웹 앱"],
        ["무료 플랜", "포함되지 않음"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Gemini tasks 사용법",
      steps: [
        {
          title: "작업 모드 켜기",
          text: "gemini.google.com에서 입력창 아래의 Task를 클릭하고 화면 안내를 따르세요. tasks는 Gemini 모바일 앱과 Mac용 Gemini 앱에서도 돼요.",
        },
        {
          title: "필요한 앱 연결하기",
          text: "tasks는 Gmail, Calendar, Docs, Drive, Keep, Sheets, Slides, Tasks, Google 검색, Flights, Hotels, Maps, Contacts, Photos, YouTube와 맞춤·서드파티 앱을 쓸 수 있어요. Google의 출시 파트너로는 Canva, OpenTable, Instacart가 있었어요.",
        },
        {
          title: "할 일과 시점 설명하기",
          text: "일회성 작업을 맡기거나 일정을 정하세요. 정해진 시각에, 또는 무언가 일어났을 때 실행돼요. 작업 스레드와 작업 패널을 열어 권한과 일정을 확인하세요.",
          code: prompts,
        },
        {
          title: "중요한 단계 승인하기",
          text: "Gemini는 작업을 위해 웹을 탐색하기 전(Chrome 권한을 한 번 주고 나면), 그리고 메시지 전송, 구매, 양식 제출, Google로 로그인하기 전에 물어봐요. 건강, 금융, 신분증 정보 같은 민감한 정보를 공유하기 전에도, “항상 허용”을 골랐더라도 멈춰요.",
        },
      ],
      source: { label: "출처: Google Gemini 앱 도움말의 tasks 문서", href: help },
    },
    {
      kind: "text",
      id: "limits",
      title: "제한, 일정, 끄는 법",
      points: [
        "작업은 동시에 최대 15개까지 실행돼요. 이미 15개가 돌고 있으면 일정이 실행되지 않아요.",
        "Google 도움말에 따르면 작업 모드가 꺼져 있거나 기기가 꺼져 있으면 일정이 실행되지 않아요. 일정은 작업 스레드나 웹 앱의 Scheduled 페이지에서 일시 정지하거나 재개하세요.",
        "사용 한도는 컴퓨팅 기준이고, Pro보다 Ultra가 높아요.",
        "Chrome 자동 탐색은 데스크톱에서만 돼요.",
        "웹에서는 설정 > Task settings(“Use task mode to hand off work”)에서, Mac 앱에서는 Gemini > Settings > Tasks에서 끌 수 있어요. 그러면 원격 브라우저와 코드 데이터가 삭제되고, 작업·일정·파일은 남지만 일시 정지돼요.",
      ],
    },
    {
      kind: "table",
      id: "use-cases",
      title: "Gemini tasks 활용 사례",
      text: ["앞의 세 가지는 Google이 출시 때 든 예시예요."],
      headers: ["활용 사례", "하는 일"],
      rows: [
        ["구독 점검", "매달 카드 명세서에서 새로 생겼거나 숨어 있는 구독 요금을 찾아요"],
        ["학교 메일 요약", "마감일을 지켜보고 나와 배우자에게 매일 요약을 보내요"],
        ["회의 후속 조치", "이메일과 채팅의 메모를 문서로 요약하고 후속 메일 초안을 써요"],
        ["받은편지함 정리", "뉴스레터를 보관하고 메일링 리스트 구독을 해지해요"],
        ["가격 감시", "항공권과 호텔 가격을 지켜보다가 내려가면 알려 줘요"],
        ["조사 보고서", "출처를 단 조사를 하고 파일로 정리해요"],
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Gemini tasks vs Meta Muse, Grok Bot",
      headers: ["", "Gemini tasks (Spark)", "Meta Muse", "Grok Bot"],
      rows: [
        ["만든 곳", "Google", "Meta", "xAI"],
        ["가장 싸게 시작하는 법", "Google AI Pro", "미국에서 무료, 주간 한도", "무료 체험 크레딧; X Premium 이상"],
        ["가장 강한 분야", "Gmail, Docs, Google 앱", "일상 심부름, WhatsApp", "업무 앱, Bot 팀"],
        ["일정", "정해진 시각 또는 이벤트", "알림과 반복 작업", "일정이나 트리거로 도는 루틴"],
        ["이용 불가 지역", "EEA, 스위스, 영국, 나이지리아", "미국 외(제한적 테스트)", "-"],
        ["가이드", "이 페이지", "[Meta Muse](/personal-agent/meta-muse)", "[Grok Bot](/personal-agent/grok-bot)"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Crewmark로",
      title: "받은편지함만이 아니라 업무를 위한 예약 에이전트",
      text: [
        "Gemini tasks는 한 사람의 Google 앱을 돌봐요. Crewmark는 내 Claude Code나 Codex를 직무, 숫자로 된 목표, 근무 시간, 하트비트를 갖춘 AI 직원으로 바꿔요. 직원은 공유 보드에서 다음 이슈를 가져가고 결과를 보고해요.",
      ],
      steps: [
        {
          title: "직무 고르기",
          text: "SEO 전문가나 소프트웨어 엔지니어 같은 [AI 직원 직무](/ai-employees)에서 시작하세요.",
        },
        {
          title: "근무 시간과 하트비트 정하기",
          text: "정한 시간 동안 15분에서 240분마다 깨어나요. [Codex 예약 작업](/proactive-codex)을 참고하세요.",
        },
        {
          title: "개인 에이전트 비교하기",
          text: "[개인 AI 에이전트 비교](/personal-agent)를 참고하세요.",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Gemini tasks 사용하기" },
  mid: {
    title: "팀의 백로그를 처리하는 에이전트가 필요하세요?",
    text: "Crewmark 직원은 지금 쓰는 Claude Code나 Codex 플랜으로, 하트비트에 맞춰 깨어나 보드의 다음 이슈를 가져가요.",
    button: "시작하기",
  },
  faq: {
    title: "자주 묻는 질문",
    items: [
      {
        q: "Gemini Spark는 어떻게 됐나요?",
        a: "Google이 이름을 바꿨어요. 베타 때의 Spark는 이제 Gemini 앱에서 tasks라고 불려요. 입력창 아래의 Task를 고르세요. 기존 작업과 일정은 그대로 이어져요.",
      },
      {
        q: "Gemini Spark는 무료인가요?",
        a: "아니요. tasks는 개인 Google 계정에서 Google AI Pro 또는 Ultra 구독이 필요해요. 미국에서 Google AI Pro는 월 $19.99예요.",
      },
      {
        q: "영국이나 유럽에서도 Gemini Spark를 쓸 수 있나요?",
        a: "아직은 안 돼요. Google 도움말에 따르면 Gemini 앱을 쓸 수 있는 모든 곳에서 되지만, 유럽경제지역, 스위스, 영국, 나이지리아는 제외예요.",
      },
      {
        q: "Gemini Spark Mac 앱이 있나요?",
        a: "네. tasks는 Mac용 Gemini 앱에서도 되고, 모바일 앱과 gemini.google.com에서도 돼요.",
      },
      {
        q: "Gemini tasks를 일정에 맞춰 실행할 수 있나요?",
        a: "네. 정해진 시각이나 무언가 일어났을 때 실행돼요. 동시에 최대 15개까지 실행되고, 작업 모드가 꺼져 있으면 일정이 일시 정지돼요.",
      },
      {
        q: "Gemini Spark와 Meta Muse 중 무엇을 써야 하나요?",
        a: "생활이 Gmail과 Google 앱 중심이고 Google AI Pro를 결제하고 있다면 Gemini tasks를, 미국에 있고 무료로 시작하고 싶다면 Meta Muse를 쓰세요.",
      },
    ],
  },
  cta: {
    title: "받은편지함엔 개인 에이전트를, 백로그엔 AI 직원을.",
    text: "Crewmark는 Claude Code와 Codex 세션을 직무, 목표, 근무 시간, 하트비트를 갖춘 AI 직원으로 바꿔 줘요.",
    button: "시작하기",
  },
  checked: "2026년 11월 10일에 Google의 Gemini Spark 발표와 Gemini 앱 도움말과 대조해 확인했습니다.",
  disclaimer:
    "Crewmark는 독립 제품으로, Google, Meta, xAI와 제휴하거나 그 보증을 받지 않았습니다. Gemini와 Google은 Google의 상표입니다.",
};
