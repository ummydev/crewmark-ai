import type { GuideCopy } from "@/components/landing/guide-article";

// ko translation of /use-cases/daily-seo-report; the English master is src/content/use-cases/daily-seo-report.ts.

const brief = `# 역할: SEO 리포터
반복 이슈 "Daily SEO report"로 매일 18:30에 실행돼요.

1. Search Console, 최근 7일: 노출, 클릭, 평균 순위.
   검색어 표와 페이지 표를 읽어요. 상위 10위 안의 검색어,
   노출이 늘고 있는 페이지, 노출은 있지만 클릭이 없는
   페이지를 적어 둬요.
2. 분석 도구, 최근 7일: 순방문자, 검색 유입 방문자,
   AI 어시스턴트 유입 방문자, 검색 유입 상위 랜딩 페이지.
3. 주간 목표와 비교: 노출 10,000, 클릭 500,
   순방문자 2,000.
4. 효과가 있는 것 하나를 골라 오늘 더 밀어붙여요
   (관련 페이지, FAQ, 내부 링크 또는 번역).
5. 리포트를 이슈에 댓글로 올리고, 내가 결정해야 할 일을
   적은 다음 이슈를 완료로 표시해요.

규칙
- Search Console과 분석 도구는 읽기 전용 권한만.
- 따옴표가 붙거나 -site: 목록이 긴 검색어는 무시해요:
  사람이 아니라 순위 추적 도구예요.`;

const schedule = `# SEO 직원에게 배정한 반복 이슈 (Crewmark CLI)
crewmark issues create --title "Daily SEO report" --assignee "<employee>" \\
  --repeat "daily at 18:30" --timezone America/New_York`;

export const copy: GuideCopy = {
  meta: {
    title: "Claude Code로 매일 SEO 리포트 받기: AI 직원 설정",
    description:
      "Claude Code나 Codex가 매일 SEO 리포트를 쓰게 하세요: Search Console과 분석 수치, 목표까지 남은 차이, 효과가 있는 것과 그에 맞춰 한 일 하나. 복사해 쓸 역할 브리프, 필요한 권한, 일정 설정법을 정리했어요.",
  },
  breadcrumb: "매일 SEO 리포트",
  parent: { name: "활용 사례", href: "/use-cases" },
  hero: {
    kicker: "활용 사례 · 마케팅",
    title: "Claude Code 위의 AI 직원이 매일 쓰는 SEO 리포트",
    lead: "매일 저녁, 내 Claude Code나 Codex에서 돌아가는 AI 직원이 Search Console과 분석 도구에서 최근 7일 데이터를 가져와 목표와 비교하고, 효과가 나기 시작한 검색어와 페이지를 찾아 한 가지를 더 밀어붙인 뒤, 팀이 일하는 곳에 리포트를 올려요. Crewmark의 SEO 직원이 매일 실제로 돌리는 루틴이에요. 아래에 복사해 쓸 브리프, 필요한 권한, 일정에 올리는 법을 정리했어요.",
    cta: "시작하기",
    secondary: "브리프 복사하기",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "리포트에 담기는 내용",
      points: [
        "검색: 최근 7일의 노출, 클릭, 평균 순위와 그 뒤에 있는 검색어와 페이지.",
        "효과가 있는 것: 상위 10위 안의 검색어, 노출이 늘고 있는 페이지, 그리고 노출은 있지만 클릭이 없는 페이지. 마지막은 대개 제목이나 내용이 검색 의도와 맞지 않는다는 뜻이에요.",
        "방문자: 순방문자, 검색 엔진 유입 방문자, ChatGPT와 Perplexity 같은 AI 어시스턴트 유입 방문자, 그리고 이들이 들어온 랜딩 페이지.",
        "목표까지의 차이: 이번 주 수치와 주간 목표 비교.",
        "오늘 한 일, 그리고 내가 내려야 할 결정.",
      ],
    },
    {
      kind: "table",
      id: "example",
      title: "예시: 2026년 11월 10일 저희 리포트",
      text: [
        "생긴 지 몇 주 된 사이트 crewmark.ai에 대해 Crewmark의 SEO 직원이 올린 리포트의 첫 부분이에요.",
      ],
      headers: ["지표", "최근 7일", "주간 목표"],
      rows: [
        ["Search Console 노출", "537 (이전 리포트의 309에서 증가)", "10,000"],
        ["Search Console 클릭", "2", "500"],
        ["순방문자", "93명, 그중 검색 유입 16명, AI 어시스턴트 유입 0명", "2,000"],
        ["효과가 있는 것", "“base44 superagent”가 4위인데 클릭 0: 개요 페이지로 들어오고 있었음", "-"],
        ["그에 맞춰 한 일", "같은 날 Base44 Superagent 전용 페이지 작성", "-"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Claude Code나 Codex에서 매일 SEO 리포트 설정하는 법",
      steps: [
        {
          title: "수치를 읽기 전용으로 볼 수 있게 하기",
          text: "Search Console은 읽기 전용 서비스 계정을 쓴 Search Console API, MCP 서버, 또는 내가 로그인해 둔 브라우저를 에이전트가 조작하는 방식 중 하나면 돼요. 분석 도구는 그 도구의 CLI, API, MCP 서버를 쓰세요. 저희 직원은 PostHog CLI를 써요. 읽기 권한만 있으면 충분해요.",
        },
        {
          title: "역할 브리프 복사하기",
          text: "Claude Code라면 CLAUDE.md에, Codex라면 AGENTS.md에 넣고 목표를 내 것으로 바꾸세요. 오픈소스 [Marketing Team Skills](/skills)에도 같은 단계로 된 seo-daily-report 스킬이 들어 있어요.",
          code: brief,
        },
        {
          title: "일정에 올리기",
          text: "리포트를 반복 이슈로 만들면 매일 같은 시간에 직원에게 다시 돌아오고, 오늘 리포트가 끝났는지도 한눈에 보여요.",
          code: schedule,
        },
        {
          title: "이미 일하는 곳에서 읽기",
          text: "리포트는 이슈의 댓글로 올라와요. 나에게 필요한 게 있으면 이슈를 Needs action으로 표시하고 물어봐요.",
        },
      ],
    },
    {
      kind: "text",
      id: "double-down",
      title: "리포트를 행동으로 바꾸기",
      text: [
        "수치를 설명하기만 하는 리포트로는 수치가 움직이지 않아요. 쓸모 있는 부분은 다음에 무엇을 할지 정한 규칙이고, 그 규칙은 브리프에 있어요.",
      ],
      points: [
        "상위 10위 안에 있거나 오르는 검색어: 관련 롱테일(같은 도구의 다른 용도, “vs”, 대안, 오류, 플랫폼)을 쓰고, FAQ를 더하고, 이미 방문자가 오는 페이지에서 링크를 걸거나, 이미 그 검색어를 찾는 언어로 번역하세요.",
        "노출은 있는데 클릭이 없음: 페이지가 검색과 맞지 않아요. 사람들이 쓰는 검색어로 제목을 바꾸거나 그 검색어용 페이지를 새로 쓰세요.",
        "50위 밖에 머무는 대표 키워드: 더 이상 시간을 쓰지 마세요. 새 사이트는 롱테일부터 이겨요.",
        "결정과 결과를 로그에 적어 두면 내일 리포트에서 효과가 있었는지 확인할 수 있어요.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Crewmark로",
      title: "리포트를 쓰는 SEO 직원 채용하기",
      text: [
        "리포트는 SEO 전문가의 하루 중 일부예요. Crewmark는 내 Claude Code나 Codex를 역할, 숫자로 된 목표, 근무 시간, 하트비트를 갖춘 그런 직원으로 바꿔 줘요.",
      ],
      steps: [
        {
          title: "역할에서 시작하기",
          text: "[AI SEO 전문가](/ai-employees/seo-specialist)는 목표, 일일 루틴, 브리프가 갖춰져 있어요.",
        },
        {
          title: "리포트를 반복 이슈로 추가하기",
          text: "하트비트에 깨어나 리포트 시간이 된 걸 보고 올려요.",
        },
        {
          title: "마케팅의 다른 일도 보기",
          text: "마케팅 팀을 위한 다른 일은 [마케팅을 위한 Claude Code](/for/marketing)에 있어요. 다음 활용 사례는 [주간 경쟁사 다이제스트](/use-cases/weekly-competitor-digest)예요.",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Claude Code나 Codex에서 매일 SEO 리포트 설정하기" },
  mid: {
    title: "리포트와 그 뒤의 일까지 매일 받고 싶으세요?",
    text: "Crewmark의 SEO 전문가는 내 Claude Code나 Codex에서 돌아가며 정해진 일정에 리포트를 올려요.",
    button: "시작하기",
  },
  faq: {
    title: "자주 묻는 질문",
    items: [
      {
        q: "Claude Code가 Google Search Console을 읽을 수 있나요?",
        a: "네. 서비스 계정을 쓴 Search Console API, Search Console용 MCP 서버, 또는 내가 로그인해 둔 브라우저를 조작하는 방식으로요. 읽기 전용 권한을 주세요.",
      },
      {
        q: "Claude Code로 매일 SEO 리포트를 예약하려면 어떻게 하나요?",
        a: "Claude Code는 스스로 시작하지 않아서 무언가가 깨워 줘야 해요. 반복 작업이나 하트비트를 쓰세요. [Claude Code를 능동적으로 만드는 법](/proactive-claude-code)을 참고하거나, 반복 이슈를 가진 Crewmark 직원으로 돌리면 돼요.",
      },
      {
        q: "매일 SEO 리포트에는 무엇이 들어가야 하나요?",
        a: "7일간의 노출, 클릭, 순위와 그 뒤의 검색어와 페이지, 상위 10위 안에 있거나 오르는 것, 검색과 AI 어시스턴트 유입 방문자, 목표까지의 차이, 오늘 한 일, 필요한 결정이에요.",
      },
      {
        q: "Codex에서도 되나요?",
        a: "네. 같은 브리프를 AGENTS.md에 넣으면 되고, 필요한 권한도 같아요.",
      },
      {
        q: "왜 하루가 아니라 7일을 보나요?",
        a: "Search Console 데이터는 하루이틀 늦게 들어오고 하루 단위로는 변동이 커요. 7일을 봐야 추세가 보이고, 매일 리포트는 그 추세를 매일 읽는 거예요.",
      },
    ],
  },
  cta: {
    title: "SEO 리포트와 리포트가 요구하는 일까지 매일 받으세요.",
    text: "Crewmark는 Claude Code와 Codex 세션을 역할, 목표, 근무 시간, 하트비트를 갖춘 AI 직원으로 바꿔 줘요.",
    button: "시작하기",
  },
  checked: "2026년 11월 10일, Crewmark의 SEO 직원이 매일 돌리는 루틴을 바탕으로 작성했습니다.",
  disclaimer:
    "Crewmark는 독립 제품으로, Anthropic, OpenAI, Google, PostHog와 제휴하거나 그 보증을 받지 않았습니다. 제품명은 각 소유자의 상표입니다.",
};
