import type { GuideCopy } from "@/components/landing/guide-article";

// Korean translation of /skills; the English master is src/content/skills-hub.ts.

const repo = "https://github.com/ummydev/marketing-team-skills";

const install = `# Every skill, into the agents you have installed
npx skills add ummydev/marketing-team-skills

# Or as a Claude Code plugin
/plugin marketplace add ummydev/marketing-team-skills
/plugin install marketing-team-skills`;

export const copy: GuideCopy = {
  meta: {
    title: "마케팅과 디자인을 위한 Claude 스킬 | Crewmark AI",
    description:
      "AI 마케팅 팀이 매일 쓰는 무료 오픈소스 Claude Code 스킬: 트렌드 키워드, SEO 페이지, 비교 페이지, 색인, AI 검색, 일일 리포트에 더해 최고의 디자인 스킬도 비교해요.",
  },
  breadcrumb: "Claude 스킬",
  hero: {
    kicker: "Claude 스킬",
    title: "AI 마케팅 팀이 만든 Claude 스킬",
    lead: "Marketing Team Skills는 Claude Code, Codex, Cursor에서 쓰는 무료 오픈소스 Agent Skills예요. Crewmark의 AI SEO 전문가가 매일 하는 단계를 그대로 담았어요. 키워드를 찾고, 페이지를 쓰고 번역하고, 색인되게 하고, 무엇이 움직였는지 보고해요. 각 스킬은 실제로 동작하는 명령어와 저희가 겪은 실수를 담은 SKILL.md예요. 아래에서 구성, 설치 방법, 그리고 작업별 최고의 스킬 가이드를 소개해요.",
    cta: "시작하기",
    secondary: "스킬 설치하기",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "table",
      id: "skills",
      title: "Marketing Team Skills 구성",
      text: ["버전 0.1은 온사이트 SEO를 다뤄요. 오프사이트 SEO, UGC 영상, 소셜 아웃리치가 다음 차례예요."],
      headers: ["스킬", "하는 일"],
      rows: [
        ["trend-keywords", "출시, 서비스 종료, 인수 직후 사람들이 막 검색하기 시작한 검색어를 찾아 당일에 페이지를 내보내요"],
        ["keyword-research", "새 사이트도 순위를 노릴 수 있는 키워드를 고르고 키워드 맵을 관리해요"],
        ["seo-page", "키워드 하나에 페이지 하나: 정의 먼저, 그다음 단계, 표, FAQ, 출처"],
        ["competitor-pages", "각 제품의 공식 문서를 바탕으로 대안 페이지와 비교(vs) 페이지를 만들어요"],
        ["programmatic-pages", "얇은 콘텐츠 없이 템플릿 페이지를 대량으로 만들어요"],
        ["multilingual-seo", "각 페이지를 여러 언어로 hreflang과 함께 내보내요"],
        ["index-push", "페이지가 크롤링되게 해요: IndexNow, Search Console, Bing"],
        ["ai-search", "ChatGPT, Claude, Perplexity가 인용할 수 있는 사이트로 만들어요"],
        ["seo-daily-report", "목표 대비 하루 마감 리포트를 써요"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "스킬 설치 방법",
      steps: [
        {
          title: "에이전트에 추가하기",
          text: "skills CLI로 Claude Code, Codex, Cursor 등 여러 에이전트에 설치할 수 있어요. Claude Code 플러그인으로 설치해도 돼요.",
          code: install,
        },
        {
          title: "역할 브리프 복사하기",
          text: "`roles/seo-specialist/CLAUDE.md`(Codex는 `AGENTS.md`)를 사이트 저장소에 넣고 목표를 채우면, 세션마다 하루 루틴을 알 수 있어요. [AI SEO 전문가](/ai-employees/seo-specialist)를 참고하세요.",
        },
        {
          title: "매일 실행하기",
          text: "`/loop`나 예약 작업을 쓰거나, 하트비트로 일하는 AI 직원으로 실행하세요. [Claude Code를 능동적으로 만드는 방법](/proactive-claude-code)을 참고하세요.",
        },
      ],
      source: { label: "출처: GitHub의 Marketing Team Skills", href: repo },
    },
    {
      kind: "text",
      id: "guides",
      title: "작업별 최고의 Claude 스킬",
      text: ["작업 종류마다 설치할 만한 스킬을 각 프로젝트 저장소를 바탕으로 비교했어요."],
      points: [
        "[웹사이트·UI 디자인을 위한 최고의 Claude 스킬](/skills/website-design): Anthropic의 frontend-design, Taste Skill, Impeccable, UI UX Pro Max, unslop 등.",
        "SEO 에이전트를 단계별로 만들려면 [AI SEO 에이전트: Claude Code로 만드는 법](/blog/ai-seo-agent)을, 스킬 전반은 [Claude Code 스킬](/blog/claude-code-skills)을 읽어 보세요.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Crewmark로",
      title: "스킬은 세션을 위해, 직원은 일을 위해",
      text: [
        "스킬은 세션이 특정 작업을 잘하게 해요. Crewmark는 Claude Code, Codex, DeepSeek Harness, OpenCode를 직무, 목표, 근무 시간을 가진 AI 직원으로 바꿔요. 직원은 하트비트로 깨어나 보드에서 다음 이슈를 가져가고, 설치한 스킬을 사용해요.",
      ],
      steps: [
        {
          title: "직무 고르기",
          text: "[SEO 전문가](/ai-employees/seo-specialist), [그로스 마케터](/ai-employees/marketing-agent), [UI 디자이너](/ai-employees/ui-designer) 등이 있어요.",
        },
        {
          title: "프로젝트 연결하기",
          text: "직원마다 자기 세션과 체크아웃에서, 이미 결제 중인 구독으로 일해요. [요금](/pricing)을 참고하세요.",
        },
        {
          title: "지켜보지 말고 검토만 하기",
          text: "일하면서 댓글을 남기고, 승인 목록에 있는 일은 하기 전에 먼저 물어봐요.",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Marketing Team Skills 설치하기" },
  mid: {
    title: "이 스킬을 매일 대신 돌려 줄 누군가가 필요하세요?",
    text: "Crewmark의 AI 직원은 이미 결제한 Claude Code나 Codex 요금제로, 하트비트에 맞춰 이 스킬들을 사용해요.",
    button: "시작하기",
  },
  faq: {
    title: "Claude 스킬 자주 묻는 질문",
    items: [
      {
        q: "Claude 스킬이 뭔가요?",
        a: "SKILL.md 파일이 든 폴더로, Claude Code, Claude.ai 등 에이전트에게 특정 작업을 하는 방법을 알려 줘요. 작업에 전체 스킬이 필요해지기 전까지는 짧은 설명만 로드돼요.",
      },
      {
        q: "Marketing Team Skills는 무료인가요?",
        a: "네. GitHub의 ummydev/marketing-team-skills에서 MIT 라이선스로 공개된 오픈소스예요.",
      },
      {
        q: "Codex와 Cursor에서도 쓸 수 있나요?",
        a: "네. skills CLI로 Codex, Cursor 등 Agent Skills를 지원하는 에이전트에 설치할 수 있고, Codex 플러그인 매니페스트도 있어요.",
      },
      {
        q: "다른 마케팅 스킬과 뭐가 다른가요?",
        a: "백과사전식이 아니라 실무용이에요. 각 스킬은 AI SEO 직원이 실제 운영 중인 사이트에서 돌리는 단계별 루틴이고, 스크립트와 저희가 겪은 함정도 담았어요. coreyhaines31/marketingskills 같은 폭넓은 라이브러리와 함께 쓰기 좋아요.",
      },
    ],
  },
  cta: {
    title: "이 스킬을 만든 팀을 채용하세요.",
    text: "Crewmark는 Claude Code, Codex, DeepSeek Harness, OpenCode 세션을 직무, 목표, 근무 시간, 하트비트를 갖춘 AI 직원으로 바꿔 줘요.",
    button: "시작하기",
  },
  checked: "스킬 목록은 2026년 11월 8일 기준 Marketing Team Skills v0.1입니다.",
  disclaimer:
    "Crewmark는 독립 제품으로, Anthropic이나 OpenAI와 제휴하거나 그 보증을 받지 않았습니다. Claude, Claude Code, Codex는 각 소유자의 상표입니다.",
};
