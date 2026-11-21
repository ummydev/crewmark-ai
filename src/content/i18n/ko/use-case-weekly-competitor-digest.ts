import type { GuideCopy } from "@/components/landing/guide-article";

// ko translation of /use-cases/weekly-competitor-digest; the English master is src/content/use-cases/weekly-competitor-digest.ts.

const brief = `# 역할: 경쟁사 모니터링
반복 이슈 "Weekly competitor digest"로 매주 월요일 9:00에 실행돼요.

모니터링 목록: competitors.md (한 줄에 페이지 하나: 이름, URL, 페이지 종류).

1. competitors.md의 페이지를 하나씩 차례로 가져와요.
   공개 페이지만 봐요. 경쟁사 제품에는 절대 로그인하지 않아요.
2. 읽을 수 있는 텍스트를 competitors/<name>/<page>.md에 저장해요.
3. 지난주 사본과 비교해요(git diff). 날짜, 카운터,
   쿠키 배너는 무시해요.
4. 다이제스트를 써요: 무엇이 바뀌었는지 링크와 함께, 가격·플랜·한도는
   이전 문구와 새 문구를 그대로 적어요.
5. 우리가 할 일을 말해요: 업데이트할 비교 페이지, 출시에 대한
   대응, 또는 할 일 없음.
6. 스냅샷을 커밋하고, 다이제스트를 이슈에 올린 뒤 완료로 표시해요.`;

const watchlist = `# competitors.md
Acme | https://acme.com/pricing   | 가격
Acme | https://acme.com/changelog | 변경 로그
Acme | https://docs.acme.com/limits | 플랜 한도
Beta | https://beta.dev/pricing   | 가격
Beta | https://github.com/beta-dev/beta/releases | 릴리스`;

export const copy: GuideCopy = {
  meta: {
    title: "Claude Code로 매주 경쟁사 추적하기: 가격과 출시",
    description:
      "Claude Code나 Codex가 매주 경쟁사의 가격 페이지, 변경 로그, 문서를 확인하고 지난주와 비교해 무엇이 바뀌었고 무엇을 해야 하는지 알려 주게 하세요. 복사해 쓸 역할 브리프와 모니터링 목록, 일정 설정법을 정리했어요.",
  },
  breadcrumb: "주간 경쟁사 다이제스트",
  parent: { name: "활용 사례", href: "/use-cases" },
  hero: {
    kicker: "활용 사례 · 마케팅",
    title: "Claude Code 위의 AI 직원이 보내는 주간 경쟁사 다이제스트",
    lead: "가격은 바뀌고, 플랜 이름은 달라지고, 기능은 조용히 출시돼요. 그리고 대부분의 팀은 고객에게서 그 소식을 들어요. 내 Claude Code나 Codex에서 돌아가는 AI 직원은 매주 경쟁사의 공개 페이지를 읽고, 각 페이지의 사본을 저장소에 보관하고, 지난주 사본과 비교해 정확히 무엇이 바뀌었는지 링크와 이전·새 문구로 알려 주고, 어떻게 대응할지도 제안해요. 브리프, 모니터링 목록 형식, 일정 설정법을 소개할게요.",
    cta: "시작하기",
    secondary: "브리프 복사하기",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "뉴스 피드보다 스냅샷이 나은 이유",
      text: [
        "가격 변경은 블로그 글로 알려지는 일이 드물어요. 각 페이지의 텍스트를 저장해 비교하면 조용한 변경도 잡아내요. 한도가 낮아지거나, 플랜 이름이 바뀌거나, 무료 등급이 사라지는 것 같은 변화요.",
      ],
      points: [
        "정확해요: 다이제스트가 이전 문구와 새 문구를 인용하니 무엇이 바뀌었는지 논쟁할 필요가 없어요.",
        "저렴해요: 저장소 안의 일반 텍스트를 git으로 버전 관리하면 되고, 스크래핑 서비스가 필요 없어요.",
        "추적할 수 있어요: 모든 경쟁사 가격 페이지의 이력이 git log에 남아요.",
        "내 페이지를 정직하게 지켜 줘요: 비교 페이지는 금방 낡아요. 예를 들어 devin.ai가 셀프서브 플랜을 할당량과 크레딧 방식으로 바꾼 뒤에도 많은 Devin 목록이 여전히 $500 플랜과 ACU당 가격을 인용했어요. 저희 [Devin 대안](/blog/devin-alternatives) 페이지에서도 짚었던 부분이에요.",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "주간 경쟁사 다이제스트 설정하는 법",
      steps: [
        {
          title: "모니터링 목록 쓰기",
          text: "공개 페이지마다 한 줄씩 써요: 가격, 변경 로그나 릴리스, 문서의 플랜 한도, 그리고 경쟁사가 나에 대해 쓴 비교 페이지.",
          code: watchlist,
        },
        {
          title: "역할 브리프 복사하기",
          text: "Claude Code라면 CLAUDE.md에, Codex라면 AGENTS.md에 넣으세요. 웹 가져오기(web fetch)만 있으면 되고, 브라우저에서만 렌더링되는 페이지가 있다면 브라우저 도구를 주세요.",
          code: brief,
        },
        {
          title: "매주 일정에 올리기",
          text: "반복 이슈로 만드세요. 예를 들어 `--repeat \"weekly on mon at 9:00\"`로 만들어 마케팅이나 SEO 직원에게 배정하면 돼요.",
        },
        {
          title: "다이제스트대로 움직이기",
          text: "다이제스트가 비교 페이지 업데이트를 권하면, 같은 직원이 그 일을 다음 이슈로 맡아 풀 리퀘스트를 열 수 있어요.",
        },
      ],
    },
    {
      kind: "table",
      id: "what-to-watch",
      title: "무엇을 지켜볼지, 그리고 왜",
      headers: ["페이지", "변경이 보통 뜻하는 것"],
      rows: [
        ["가격", "새 플랜, 가격 변경, 무료 등급 종료: 같은 주에 내 비교 표를 업데이트하세요"],
        ["변경 로그나 릴리스", "내가 내세우던 차이를 메우는 기능, 또는 경쟁사가 진출하려는 새 시장"],
        ["한도에 관한 문서", "할당량이 줄거나 늘었음. 가격 변경의 첫 신호인 경우가 많아요"],
        ["경쟁사의 비교 페이지", "나와 비교해 어떻게 포지셔닝하는지. 내 페이지에서 사실로 답하세요"],
        ["채용 페이지", "특정 지역의 영업 인력이나 새 제품군을 위한 채용"],
      ],
    },
    {
      kind: "text",
      id: "rules",
      title: "기본 규칙",
      points: [
        "공개 페이지만 보세요. 데이터를 모으려고 경쟁사 제품에 로그인하거나 체험 계정을 쓰지 마세요.",
        "일주일에 한 번, 보통 속도로 한 번에 한 페이지씩 가져오세요. 크롤링이 아니라 읽는 거예요.",
        "추측하지 말고 인용하세요. 페이지가 모호하면 다이제스트에 그렇다고 쓰고 링크를 걸어요.",
        "공개되는 일에는 사람을 두세요. 내 비교 페이지의 변경은 검토를 거쳐요.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Crewmark로",
      title: "마케팅 직원에게 모니터링 맡기기",
      text: [
        "다이제스트는 이미 내 비교 페이지를 맡고 있는 AI 직원의 주간 이슈예요. Crewmark는 내 Claude Code나 Codex에 근무 시간과 하트비트와 함께 그 일을 줘요.",
      ],
      steps: [
        {
          title: "역할에서 시작하기",
          text: "[AI 마케팅 에이전트](/ai-employees/marketing-agent)나 [AI SEO 전문가](/ai-employees/seo-specialist)로 시작하세요.",
        },
        {
          title: "주간 이슈 추가하기",
          text: "매주 월요일마다 돌아오고, 직원이 다이제스트를 올린 뒤 업데이트할 페이지에 대한 후속 이슈를 열어요.",
        },
        {
          title: "마케팅의 다른 일도 보기",
          text: "[마케팅을 위한 Claude Code](/for/marketing)와 [매일 SEO 리포트](/use-cases/daily-seo-report)를 참고하세요.",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Claude Code나 Codex에서 주간 경쟁사 다이제스트 설정하기" },
  mid: {
    title: "매주 월요일 경쟁사 변화를 받아 보고 싶으세요?",
    text: "내 Claude Code나 Codex에서 돌아가는 Crewmark 직원이 확인하고, 비교하고, 보고한 뒤 내 페이지까지 업데이트해요.",
    button: "시작하기",
  },
  faq: {
    title: "자주 묻는 질문",
    items: [
      {
        q: "Claude Code로 경쟁사 가격을 추적할 수 있나요?",
        a: "네. 공개 가격 페이지를 가져와 텍스트를 저장소에 저장하고, 지난주 사본과 비교한 뒤 변경 사항을 요약할 수 있어요. 반복 작업이나 AI 직원으로 매주 돌리세요.",
      },
      {
        q: "경쟁사 웹사이트를 모니터링해도 법적으로 괜찮나요?",
        a: "공개 페이지를 읽는 건 일반적인 경쟁 조사예요. 각 사이트의 이용 약관과 robots 규칙을 지키고, 보통 속도로 가져오고, 데이터를 모으려고 경쟁사 제품에 로그인하지 마세요.",
      },
      {
        q: "웹사이트 변경 감지 도구를 쓰면 안 되나요?",
        a: "써도 돼요. 차이는 그다음이에요. 직원은 그 변경이 나에게 무슨 의미인지 설명하고, 같은 주에 내 비교 페이지까지 업데이트할 수 있어요.",
      },
      {
        q: "경쟁사를 몇 곳까지 지켜볼 수 있나요?",
        a: "플랜 사용량이 허락하는 만큼이요. 수십 개 페이지를 매주 한 번 도는 건 작은 작업이에요. 경쟁사 3–5곳과 그들의 가격, 변경 로그, 한도 페이지부터 시작하세요.",
      },
    ],
  },
  cta: {
    title: "경쟁사가 무엇을 바꿨는지 고객보다 먼저 아세요.",
    text: "Crewmark는 Claude Code와 Codex 세션을 역할, 목표, 근무 시간, 하트비트를 갖춘 AI 직원으로 바꿔 줘요.",
    button: "시작하기",
  },
  checked: "2026년 11월 10일, 저희 비교 페이지를 쓰고 업데이트하는 Crewmark의 SEO 직원이 작성했습니다.",
  disclaimer:
    "Crewmark는 독립 제품으로, Anthropic이나 OpenAI와 제휴하거나 그 보증을 받지 않았습니다. 제품명은 각 소유자의 상표입니다.",
};
