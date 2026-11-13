import type { GuideCopy } from "@/components/landing/guide-article";

// Korean translation of /blog/best-ai-employee-platforms; the English master is src/content/blog/best-ai-employee-platforms.ts.

export const copy: GuideCopy = {
  meta: {
    title: "2026 최고의 AI 직원 플랫폼: 8개 비교와 가격 | Crewmark",
    description:
      "Lindy, Sintra, Marblism, Artisan, Ema, Devin, 오픈소스 ai-employees 프로젝트, Crewmark를 비교했어요. 맡는 직무, 일이 시작되는 방식, 쓰는 모델, 무료 플랜과 가격까지 정리했어요.",
  },
  breadcrumb: "최고의 AI 직원 플랫폼",
  parent: { name: "블로그", href: "/blog" },
  article: { published: "2026-11-06" },
  hero: {
    kicker: "블로그 · AI 직원",
    title: "2026년 최고의 AI 직원 플랫폼 비교",
    lead: "AI 직원 플랫폼은 AI 에이전트를 직원처럼 세팅해 줘요. 각자 직무가 있고, 목표를 향해 일하며, 매번 지시하지 않아도 스스로 일을 시작하죠. 아래 제품들은 모두 이 개념을 내세우지만, 맡는 일, 일이 들어오는 방식, 쓰는 모델, 요금 방식은 저마다 달라요. 저희 제품을 포함해 8개를 각 업체가 공개한 정보만으로 비교했어요.",
    cta: "얼리 액세스 신청",
    secondary: "비교표로 이동",
    secondaryHref: "#compare",
  },
  sections: [
    {
      kind: "table",
      id: "compare",
      title: "AI 직원 플랫폼 한눈에 보기",
      text: [
        "가격은 2026년 11월 6일 기준 각 업체 가격 페이지에 나온 입문 플랜이며, 미국 달러 기준이에요. AI 직원이 무엇이고 AI 에이전트와 어떻게 다른지는 [AI 직원이란](/ai-employees)을 참고하세요.",
      ],
      headers: ["플랫폼", "이럴 때 적합", "일이 시작되는 방식", "사용 모델", "무료 옵션", "유료 시작가"],
      rows: [
        ["Lindy", "약 17개 직무에 걸친 사무 업무: 받은편지함, 캘린더, 영업, 고객 지원, 채용", "일정(Routines), Slack과 iMessage, 전화", "Lindy가 고른 주요 모델", "무료: 7일간 $50 크레딧", "사용자당 $49.99/월 (Team)"],
        ["Sintra", "소규모 비즈니스: 고객 지원, 카피, SEO, 소셜, 영업을 맡는 이름 붙은 도우미 12명 이상", "도우미와 채팅하거나 원클릭 작업 실행", "Sintra의 모델 (Claude Sonnet 기반)", "무료 플랜 없음", "$48.50/월, 연간 결제 시 더 저렴"],
        ["Marblism", "소규모 비즈니스: 비서부터 안내 데스크, 법무까지 7개 직무", "목표를 정하면 매일 그 목표를 향해 일하고 승인을 요청", "명시 안 됨", "무료 플랜 없음", "연간 결제 $24/월, 월간 결제 $44"],
        ["Artisan (Ava)", "아웃바운드 영업: AI 영업 개발 담당자(BDR)", "자율 실행, 승인과 에스컬레이션 규칙 포함", "명시 안 됨", "명시 안 됨", "크레딧 플랜, 데모 예약 필요"],
        ["Ema", "기업의 HR, IT, 재무", "Teams, Slack 또는 음성, 250개 이상의 연동", "Ema가 조합한 100개 이상의 모델", "무료 체험", "성과 기반, 비공개"],
        ["Devin", "소프트웨어 엔지니어링", "Slack이나 Teams에서 @멘션, Linear나 Jira 티켓, 반복 워크플로", "Devin의 모델 (여러 제공업체)", "사용량이 적은 무료 플랜", "$20/월 (Pro)"],
        ["ai-employees (오픈소스)", "예약된 루틴 폴더로 만든 8개 비즈니스 직무", "각 직무의 SCHEDULE.md에 적힌 일정", "내 에이전트: Claude Code, Codex, OpenCode 등", "무료, MIT 라이선스", "무료"],
        ["Crewmark", "코딩 에이전트 위에서 직접 정의한 모든 직무: 엔지니어링, SEO, 마케팅, 디자인", "근무 시간 동안 하트비트가 각 직원을 깨워 보드에서 다음 이슈를 가져가게 함", "내 Claude Code, Codex, DeepSeek Harness, OpenCode 구독", "얼리 액세스", "얼리 액세스"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "AI 직원 플랫폼 고르는 법",
      steps: [
        {
          title: "도구가 아니라 일에서 출발하세요",
          text: "직무 하나와 그 직무가 움직여야 할 숫자를 적어 보세요. 잡힌 미팅 수, Search Console 클릭 수, 머지된 pull request 수 같은 것이요. 한 가지 일에 특화된 플랫폼(아웃바운드 영업은 Artisan, 코드는 Devin)이 그 일에서는 보통 범용 플랫폼보다 나아요.",
        },
        {
          title: "일이 어떻게 시작되는지 확인하세요",
          text: "채팅 어시스턴트는 내가 말을 걸 때까지 기다리지만, AI 직원은 스스로 일을 시작해요. 일정, 트리거, 하트비트가 있는지, 그리고 보드, 티켓, Slack 채널처럼 일을 배정할 곳이 있는지 보세요.",
        },
        {
          title: "누구의 모델을 쓰고 누가 비용을 내는지 확인하세요",
          text: "대부분의 플랫폼은 모델 사용량을 크레딧이나 좌석으로 되팔아요. 이미 Claude Code나 Codex에 돈을 내고 있다면, 그 구독 위에서 돌아가는 도구(오픈소스 ai-employees 프로젝트, Crewmark)는 모델 비용이 거의 늘지 않아요.",
        },
        {
          title: "행동하기 전에 먼저 묻는지 확인하세요",
          text: "이메일을 보내거나, 글을 올리거나, 돈을 쓰는 직원이라면 먼저 물어봐야 해요. 승인, 에스컬레이션 규칙, 그리고 무엇을 했는지 남기는 로그가 있는지 보세요.",
        },
        {
          title: "직무 하나로 2주 동안 써 보세요",
          text: "무료 플랜이나 체험이 있으면 활용하고, 적어 둔 숫자를 측정한 다음에 직무를 늘리세요.",
        },
      ],
    },
    {
      kind: "text",
      title: "플랫폼별 자세히 보기",
      points: [
        "Lindy: '가격 이상으로 일하는 팀원'(\"the teammate that punches above its price\")을 내세워요. Routines는 일정에 따라 돌아가고, Slack이나 iMessage로 메시지를 보낼 수 있으며, 'Watch and Learn'은 한 번 보여 준 작업을 기록해요. 가격: [lindy.ai/pricing](https://www.lindy.ai/pricing).",
        "Sintra: 고객 지원 담당 Cassie, SEO 담당 Seomi, 소셜 미디어 담당 Soshie처럼 이름 붙은 도우미가 12명 이상 있고, 각각 대화하며 쓰는 챗봇으로 일해요. 도우미 한 명만 쓰면 $39/월이에요. 가격: [sintra.ai/pricing](https://sintra.ai/pricing).",
        "Marblism: AI 직원 7명(Eva, Sonny, Stan, Walter, Penny, Rachel, Linda)이 목표를 정하면 '매일 스스로 그 목표를 향해 일해요'(\"work toward it every day, on their own\"). 플랜에는 월 50시간 분량의 AI 작업이 포함돼요. 가격: [marblism.com/pricing](https://www.marblism.com/pricing).",
        "Artisan: 'GTM 팀을 위한 AI 직원'(\"AI employees for go-to-market teams\"). Ava가 리드를 찾고, 정보를 보강하고, 아웃리치 메시지를 쓰고, 답장을 처리하고, 미팅을 잡아요. 사람의 승인도 거쳐요. [artisan.co](https://www.artisan.co)를 참고하세요.",
        "Ema: '범용 AI 직원'(\"Universal AI Employee\")으로, 목표를 평범한 말로 설명하면 설정되고 HR, IT, 재무 등에 쓸 수 있어요. [ema.ai](https://www.ema.ai)를 참고하세요.",
        "Devin: '팀의 자율 소프트웨어 엔지니어'(\"your team's autonomous software engineer\"). 티켓을 배정하면 pull request가 돌아와요. Max는 $200/월, Teams는 $80/월에 좌석당 $40이 추가돼요. 가격: [devin.ai/pricing](https://devin.ai/pricing).",
        "ai-employees: MIT 라이선스 GitHub 프로젝트로, 'AI 직원은 하나의 비즈니스 직무를 맡는 예약된 루틴들의 폴더'(\"an AI Employee is a folder of scheduled routines that covers one business role\")라고 정의하며, 이미 쓰는 코딩 에이전트로 실행해요. [github.com/markfulton/ai-employees](https://github.com/markfulton/ai-employees)를 참고하세요.",
        "Crewmark: Claude Code, Codex, DeepSeek Harness, OpenCode 세션을 직무, 목표, 근무 시간, 이슈 보드를 가진 직원으로 바꿔요. 자기 이슈에 댓글을 달고, 결정이 필요하면 메시지를 보내요. [Claude Code를 능동적으로 만드는 법](/proactive-claude-code)을 참고하세요.",
      ],
    },
    {
      kind: "text",
      title: "무료 AI 직원, 그리고 GitHub의 오픈소스 AI 직원",
      text: [
        "무료 플랜은 있지만 규모가 작아요. Lindy는 7일간 $50 크레딧, Devin은 적은 사용량, Ema는 체험판을 줘요. 오픈소스는 돈은 들지 않지만 세팅 시간이 들어요. markfulton/ai-employees 같은 GitHub 프로젝트는 이미 가진 에이전트 구독으로 돌아가고, Claude Pro나 Max 플랜이라면 추가 비용 대신 플랜의 사용 한도를 써요.",
        "완성된 직원이 아니라 오픈소스 에이전트 프레임워크를 비교하고 있다면 [CrewAI](/alternatives/crewai), [Paperclip](/alternatives/paperclip), [Multica](/alternatives/multica)와의 비교를 보세요.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Crewmark로",
      title: "이미 돈을 내고 있는 코딩 에이전트로 AI 직원 만들기",
      text: [
        "Crewmark는 이미 Claude Code나 Codex로 일하는 팀을 위한 도구예요. 새 AI와 그 크레딧을 사는 대신, 지금 쓰는 에이전트에게 일자리를 주세요.",
      ],
      steps: [
        {
          title: "직무와 목표 고르기",
          text: "소프트웨어 엔지니어, SEO 전문가, 그로스 마케터, 또는 직접 작성한 직무를 고르고, 목표는 숫자로 적어요.",
        },
        {
          title: "세션 연결하기",
          text: "프로젝트에서 설정 명령어 하나만 실행하세요. 직원은 내 컴퓨터의 Claude Code, Codex, DeepSeek Harness, OpenCode 세션에서 내 플랜으로 일해요.",
        },
        {
          title: "이슈를 배정하면 나머지는 하트비트가 알아서",
          text: "근무 시간 동안 직원은 15분, 30분, 60분마다 깨어나 다음 이슈를 가져가고, 진행하며 댓글을 달고, 결정이 필요하면 메시지를 보내요.",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "AI 직원 플랫폼 고르기" },
  mid: {
    title: "이미 Claude Code나 Codex에 돈을 내고 계신가요?",
    text: "Crewmark는 그것을 직무, 목표, 근무 시간, 이슈 보드를 가진 AI 직원으로 바꿔 줘요. AI 청구서가 두 개로 늘지 않아요.",
    button: "얼리 액세스 신청",
  },
  faq: {
    title: "AI 직원 플랫폼 FAQ",
    items: [
      {
        q: "최고의 AI 직원 플랫폼은 무엇인가요?",
        a: "일에 따라 달라요. 여러 직무에 걸친 사무 업무는 Lindy, 소규모 비즈니스의 마케팅과 고객 지원은 Sintra나 Marblism, 아웃바운드 영업은 Artisan, 기업 HR과 IT는 Ema, 코드는 Devin이에요. 이미 Claude Code나 Codex를 쓰고 있다면 오픈소스 ai-employees 프로젝트나 Crewmark가 맞아요.",
      },
      {
        q: "무료 AI 직원이 있나요?",
        a: "작은 무료 플랜이나 체험판을 주는 플랫폼이 있어요. Lindy(7일간 $50 크레딧), Devin(적은 사용량), Ema(체험판)예요. markfulton/ai-employees 같은 오픈소스 프로젝트는 무료이고, 이미 가진 에이전트 구독으로 돌아가요.",
      },
      {
        q: "AI 직원 비용은 얼마인가요?",
        a: "2026년 11월 6일 기준 입문 플랜은 월 약 $20(Devin Pro)부터 사용자당 $49.99(Lindy Team)까지였고, Artisan과 Ema는 영업 상담을 통한 가격이에요. 내 Claude Code나 Codex 플랜으로 돌아가는 도구는 모델 비용이 거의 늘지 않아요.",
      },
      {
        q: "AI 직원과 AI 에이전트는 무엇이 다른가요?",
        a: "AI 에이전트는 요청받았을 때 작업을 해요. AI 직원은 직무, 목표, 일정을 받은 에이전트라서 스스로 일을 시작하고 계속 이어 가요. 자세한 내용은 [AI 직원이란](/ai-employees)에서 확인하세요.",
      },
      {
        q: "소규모 비즈니스도 AI 직원을 쓸 수 있나요?",
        a: "네. Sintra와 Marblism은 소규모 비즈니스를 위해 만들어졌고, 고객 지원, 소셜 미디어, SEO, 영업을 맡는 이름 붙은 직원이 있으며, 가격은 월 약 $24~$49예요.",
      },
      {
        q: "GitHub에 오픈소스 AI 직원이 있나요?",
        a: "네. markfulton/ai-employees(MIT)는 8개 비즈니스 직무를 Claude Code, Codex, OpenCode 등의 에이전트용 예약 루틴으로 묶어 두었어요. 그 밖에 OpenCompany와 eggent도 있어요.",
      },
      {
        q: "AI 직원은 어떻게 채용하나요?",
        a: "직무 하나와 움직여야 할 숫자를 정하고, 스스로 일을 시작하면서 위험한 행동 전에는 먼저 묻는 플랫폼을 골라 2주 동안 돌려 보세요. 숫자가 움직일 때만 계속 쓰면 돼요.",
      },
    ],
  },
  cta: {
    title: "이미 돈을 내고 있는 에이전트에게 일자리를 주세요.",
    text: "Crewmark는 Claude Code, Codex, DeepSeek Harness 세션을 직무, 목표, 근무 시간, 하트비트를 갖춘 AI 직원으로 바꿔 줘요.",
    button: "얼리 액세스 신청",
  },
  checked: "2026년 11월 6일에 각 업체의 웹사이트와 가격 페이지와 대조해 확인했어요. 가격은 바뀔 수 있으니 최신 가격은 링크에서 확인하세요.",
  disclaimer:
    "Crewmark는 비교 대상 제품 중 하나예요. 제품명은 각 소유자의 상표이며, 이 페이지는 어떤 업체의 검토나 보증도 받지 않았어요.",
};
