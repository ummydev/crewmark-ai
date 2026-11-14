import type { GuideCopy } from "@/components/landing/guide-article";

// Korean translation of /blog/ai-seo-agent; the English master is src/content/blog/ai-seo-agent.ts.

const indexnow = "https://www.indexnow.org/documentation";

const skill = `---
description: 오늘의 SEO 주제를 찾는다. SEO 작업 세션을 시작할 때마다 사용한다.
---

1. 독자들이 쓰는 제품의 변경 로그와 뉴스를 확인한다.
2. 후보마다 Google 자동완성 제안을 가져와
   사람들이 이미 입력하는 롱테일 변형을 적어 둔다.
3. 우리 제품과 관련 있고 검색 결과 첫 페이지에
   아직 좋은 답이 없는 주제만 남긴다.
4. 고른 주제, 이유, 탈락한 주제를
   docs/seo/log.md에 기록한 뒤 페이지 초안을 쓴다.`;

const claudeMd = `# SEO 규칙
- 사실은 공식 문서에서만 가져오고, 확인한 날짜를 적는다.
- 모든 페이지는 한 문장 정의로 시작하고, 이어서 단계,
  비교표, FAQ를 둔다.
- URL 하나에 메인 키워드 하나. 먼저 docs/seo/keywords.md를 확인한다.
- 배포 후: IndexNow에 알리고, 색인 생성을 요청하고, 기록한다.`;

export const copy: GuideCopy = {
  meta: {
    title: "AI SEO 에이전트: Claude Code로 만드는 법 | Crewmark AI",
    description:
      "AI SEO 에이전트가 할 수 있는 일, 실제로 돌아가는 일일 워크플로, Claude Code나 Codex로 만드는 법: CLAUDE.md 규칙, 스킬, MCP, IndexNow, 일정 실행까지. 이 사이트의 SEO를 맡은 에이전트의 실제 경험을 바탕으로 했어요.",
  },
  breadcrumb: "AI SEO 에이전트",
  parent: { name: "블로그", href: "/blog" },
  article: { published: "2026-11-07" },
  hero: {
    kicker: "블로그 · AI 직원",
    title: "AI SEO 에이전트: 매일 일하는 에이전트 만드는 법",
    lead: "AI SEO 에이전트는 Claude Code나 Codex 같은 코딩 에이전트에 오가닉 트래픽을 늘리는 일을 맡긴 거예요. 사람들이 검색하기 시작한 주제를 찾고, 페이지를 쓰고 번역해서 배포하고, 검색 엔진에 색인 생성을 요청하고, 무엇이 달라졌는지 확인해요. 이 사이트의 SEO도 Crewmark의 AI 직원이 이렇게 운영하고 있어요. 이 가이드에서는 그 직원이 따르는 워크플로, 정확성을 지켜 주는 규칙과 스킬, 필요한 도구, 그리고 직접 만드는 방법을 소개해요.",
    cta: "시작하기",
    secondary: "만드는 법으로 이동",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "AI SEO 에이전트가 할 수 있는 일",
      points: [
        "주제 찾기: 제품 변경 로그와 뉴스를 읽고, Google 자동완성과 Google 트렌드로 사람들이 이미 입력하는 질문을 확인해요.",
        "내 페이지끼리 경쟁(카니발리제이션) 피하기: URL 하나에 메인 키워드 하나인 키워드 맵을 두고, 쓰기 전에 확인해요.",
        "질문에 먼저 답하는 페이지 쓰기: 한 문장 정의, 단계, 비교표, FAQ. 이 구성은 페이지를 인용하는 AI 어시스턴트에도 잘 맞아요.",
        "번역하고 배포하기: 지원하는 모든 언어로 페이지를 만들고, 로컬에서 테스트한 뒤 배포를 넘겨요.",
        "색인되게 하기: IndexNow에 알리고, 사이트맵을 다시 제출하고, 색인 생성을 요청해요.",
        "측정하고 조정하기: Search Console과 애널리틱스를 읽고, 노출은 있는데 클릭이 없는 페이지의 제목을 고치거나 내부 링크를 더해요.",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Claude Code로 AI SEO 에이전트 만드는 법",
      steps: [
        {
          title: "규칙을 CLAUDE.md에 쓰기",
          text: "타협할 수 없는 규칙은 에이전트가 매 세션 읽는 곳에 두세요. 사실은 어디서 가져와도 되는지, 페이지는 어떻게 구성하는지, 배포할 때마다 무엇을 하는지요. [CLAUDE.md 가이드](/blog/claude-md)를 참고하세요.",
          code: claudeMd,
        },
        {
          title: "매일의 루틴을 스킬로 만들기",
          text: "`.claude/skills/`의 스킬에 단계별 루틴을 담아 두면 쓸 때만 로드돼요. 매 세션을 이 스킬로 시작하세요. [Claude Code 스킬](/blog/claude-code-skills)을 참고하세요.",
          code: skill,
        },
        {
          title: "키워드 맵과 로그를 저장소에 두기",
          text: "Markdown 파일 두 개가 큰 역할을 해요. `keywords.md`(키워드 → URL → 상태)는 두 페이지가 한 검색어를 두고 경쟁하는 걸 막고, `log.md`는 무엇을 왜 골랐는지 기록해서 다음 세션이 처음부터가 아니라 이어서 시작하게 해 줘요.",
        },
        {
          title: "필요한 도구 주기",
          text: "리서치용 웹 검색과 페치, 사이트 코드와 페이지를 테스트할 로컬 개발 서버, 애널리틱스용 MCP 서버나 CLI, 그리고 IndexNow용 스크립트가 필요해요. CLI가 있으면 CLI를 우선 쓰세요. 토큰이 덜 들어요. [Claude Code MCP](/blog/claude-code-mcp)를 참고하세요.",
        },
        {
          title: "위험한 단계 막기",
          text: "게시는 리뷰나 배포 담당자를 거쳐야 하고, 에이전트가 바로 내보내면 안 돼요. 절대 일어나면 안 되는 일에는 권한 규칙과 [훅](/blog/claude-code-hooks)을 쓰고, 비밀 값은 프롬프트와 파일에 넣지 마세요.",
        },
        {
          title: "일정에 맞춰 돌리기",
          text: "SEO는 꾸준한 결과물이 보상받는 일이라, 에이전트가 평일마다 스스로 시작해야 해요. 반복되는 프롬프트 하나라면 `/loop`나 예약 작업을 쓰고, 아니면 하트비트와 백로그를 주세요. [Claude Code를 능동적으로 만드는 방법](/proactive-claude-code)을 참고하세요.",
        },
      ],
      source: { label: "출처: IndexNow 문서", href: indexnow },
    },
    {
      kind: "table",
      title: "AI SEO 일일 워크플로",
      text: [
        "이 사이트를 맡은 AI SEO 직원이 매일 처리하는 체크리스트예요. 마지막에는 서면 보고서를 남겨요.",
      ],
      headers: ["단계", "에이전트가 하는 일", "결과물"],
      rows: [
        ["1. 찾기", "최근 1–3일의 변경 로그, 업체 블로그, GitHub, 뉴스를 훑고 자동완성과 트렌드 데이터를 가져옴", "후보 주제의 짧은 목록"],
        ["2. 검증", "주제가 제품과 관련 있는지, 수요가 늘고 있는지, 첫 페이지에 좋은 답이 없는지 확인", "고른 주제 하나와 기록된 이유"],
        ["3. 작성", "공식 출처만으로 초안을 쓰고 번역", "모든 언어로 된 페이지 하나씩"],
        ["4. 배포", "타입 체크, 로컬 렌더링, 배포 요청 생성", "사이트에 게시된 페이지"],
        ["5. 색인", "IndexNow에 알리고, 사이트맵을 다시 제출하고, Search Console과 Bing에서 색인 생성 요청", "검색 엔진에 알림 완료"],
        ["6. 보고", "트래픽, 목표와의 격차, 한 일을 기록", "팀에 보내는 일일 보고서"],
      ],
    },
    {
      kind: "text",
      title: "직접 운영하며 배운 것",
      points: [
        "쓰기 전에 수요를 확인하세요: 소셜 미디어에서 뜨거운 단어가 검색량은 작을 수 있어요. Google 트렌드에서 관련 검색어 하나가 모두가 이야기하던 단어보다 약 30배 더 검색된 적도 있어요.",
        "사실은 1차 출처에서만: 에이전트의 리서치 서브에이전트가 페이지를 잘못 읽을 때가 있어요. 의외의 내용을 게시하기 전에는 공식 출처를 다시 열어 확인하세요.",
        "새 사이트에서는 색인이 병목이에요: 색인 생성을 요청하면 새 페이지가 하루쯤 만에 Google에 올라갔지만, 일일 할당량은 금방 바닥나요.",
        "여러 언어는 페이지를 늘리지, 수고를 늘리지 않아요: 잘 구성된 영어 페이지 하나가 번역 단계 하나로 아홉 개가 돼요.",
        "몰아서보다 꾸준히: 목표는 요청하지 않아도 에이전트가 지키는 매일의 리듬이에요.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Crewmark로",
      title: "스크립트를 짜는 대신 AI SEO 전문가를 고용하세요",
      text: [
        "Crewmark에는 바로 고용할 수 있는 SEO 전문가가 있어요. 내 Claude Code, Codex, DeepSeek Harness, OpenCode 세션에서 돌아가고, 근무 시간에는 하트비트로 깨어나 보드에서 다음 이슈를 가져가고 결과를 보고해요. 이 사이트의 SEO도 이렇게 하고 있어요.",
      ],
      steps: [
        {
          title: "SEO 전문가 직무 고르기",
          text: "스킬, 목표, 일정이 이미 설정돼 있어요. 목표를 주간 Search Console 클릭 수처럼 내 숫자로 바꾸세요. 목표, 하루 일과, 역할 설명은 [AI SEO 전문가](/ai-employees/seo-specialist) 페이지에서 볼 수 있어요.",
        },
        {
          title: "프로젝트 연결하기",
          text: "사이트 저장소에서 설정 명령을 실행하면 페이지를 쓰고, 테스트하고, 배포 요청을 열 수 있게 돼요.",
        },
        {
          title: "지켜보지 말고 검토만",
          text: "자기 이슈에 댓글을 달고, 결정이 필요할 때 메시지를 보내요. [AI 직원이란](/ai-employees)을 읽고 [AI 직원 플랫폼 비교](/blog/best-ai-employee-platforms)도 확인해 보세요.",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Claude Code로 AI SEO 에이전트 만들기" },
  mid: {
    title: "SEO 에이전트, 직접 만들지 않고 쓰고 싶다면?",
    text: "Crewmark의 SEO 전문가는 내 Claude Code나 Codex에서 돌아가고, 하트비트로 깨어나 SEO 백로그를 처리해요.",
    button: "시작하기",
  },
  faq: {
    title: "AI SEO 에이전트 FAQ",
    items: [
      {
        q: "AI SEO 에이전트란 무엇인가요?",
        a: "AI 에이전트, 보통 Claude Code나 Codex 같은 코딩 에이전트에 오가닉 트래픽을 늘리는 지속적인 일을 맡긴 거예요. 주제를 찾고, 페이지를 쓰고 배포하고, 색인되게 하고, 결과를 측정해요.",
      },
      {
        q: "AI 에이전트가 혼자 SEO를 할 수 있나요?",
        a: "매일의 일은 대부분 가능해요. 리서치, 작성, 번역, 기술 점검, 색인 요청 같은 일이요. 게시, 계정, 되돌릴 수 없는 작업은 여전히 사람이나 배포 담당자를 거쳐야 해요.",
      },
      {
        q: "무료 AI SEO 에이전트가 있나요?",
        a: "이미 결제한 에이전트로 만들 수 있어요. 예를 들어 Claude 요금제의 Claude Code나 ChatGPT의 Codex에 Google 자동완성, Google 트렌드, Search Console, IndexNow 같은 무료 도구를 조합하면 돼요.",
      },
      {
        q: "AI SEO 에이전트에는 어떤 도구가 필요한가요?",
        a: "웹 검색과 페치, 사이트 코드에 대한 접근과 페이지를 테스트할 방법, Search Console과 애널리틱스 읽기 권한, 그리고 IndexNow 같은 검색 엔진 알림 수단이 필요해요.",
      },
      {
        q: "AI SEO 에이전트가 틀린 사실을 게시하지 않게 하려면?",
        a: "규칙에 공식 출처와 확인 날짜를 필수로 넣고, 의외의 주장을 게시하기 전에 출처를 다시 열어 보게 하고, 게시는 리뷰를 거치게 하세요.",
      },
      {
        q: "AI가 쓴 페이지도 순위에 오르나요?",
        a: "순위는 누가 썼는지가 아니라 얼마나 유용한지로 정해져요. 실제로 늘고 있는 질문에 가장 먼저 답하고, 단계와 비교가 정확한 페이지가 바로 AI SEO 에이전트가 만들어야 할 페이지예요.",
      },
      {
        q: "SEO에는 n8n과 코딩 에이전트 중 무엇을 써야 하나요?",
        a: "워크플로 도구는 정해진 파이프라인에 맞고, 코딩 에이전트는 저장소에 페이지를 쓰고 테스트하는 것처럼 판단과 코드 변경이 필요한 일에 맞아요.",
      },
    ],
  },
  cta: {
    title: "체크리스트를 절대 잊지 않는 SEO 팀원을 내 사이트에.",
    text: "Crewmark는 Claude Code, Codex, DeepSeek Harness, OpenCode 세션을 직무, 목표, 근무 시간, 하트비트를 갖춘 AI 직원으로 바꿔 줘요.",
    button: "시작하기",
  },
  checked: "워크플로는 이 사이트의 AI SEO 직원이 실제로 운영하는 방식이며, Claude Code와 IndexNow 세부 내용은 2026년 11월 7일에 각 문서와 대조해 확인했습니다.",
  disclaimer:
    "Crewmark는 독립 제품으로, Anthropic, OpenAI, Google과 제휴하거나 그 보증을 받지 않았습니다. 제품명은 각 소유자의 상표입니다.",
};
