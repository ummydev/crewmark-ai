import type { GuideCopy } from "@/components/landing/guide-article";

// ko translation of /skills/seo; the English master is src/content/skill-pages/seo.ts.

const corey = "https://github.com/coreyhaines31/marketingskills";

const install = `# Corey Haines의 marketingskills: SEO 스킬만 설치
npx skills add coreyhaines31/marketingskills --skill seo-audit ai-seo programmatic-seo schema site-architecture

# Claude SEO (Claude Code 안에서)
/plugin marketplace add AgriciDaniel/claude-seo
/plugin install claude-seo@agricidaniel-claude-seo
/seo setup

# 내 실제 Search Console 데이터 (Ian Nuttall의 seo, 호스팅 MCP)
claude mcp add --transport http seoskill https://seoskill.dev/mcp

# Addy Osmani의 Lighthouse 기반 SEO 스킬
npx skills add addyosmani/web-quality-skills --skill seo

# Marketing Team Skills (저희 제작): 매일 하는 SEO 루틴
npx skills add ummydev/marketing-team-skills`;

export const copy: GuideCopy = {
  meta: {
    title: "SEO용 Claude 스킬 추천: 감사·GEO·키워드 (2026)",
    description:
      "SEO와 AI 검색을 위한 최고의 Claude Code 스킬을 각 프로젝트 저장소를 바탕으로 비교해요. Corey Haines의 seo-audit와 ai-seo, Claude SEO, GEO-SEO Claude, Search Console MCP, SE Ranking 등과 설치 수, 설치 명령어까지 정리했어요.",
  },
  breadcrumb: "SEO 스킬",
  parent: { name: "Claude 스킬", href: "/skills" },
  hero: {
    kicker: "Claude 스킬 · SEO",
    title: "SEO를 위한 최고의 Claude 스킬",
    lead: "SEO 스킬은 Claude Code(또는 Codex, Cursor 등 에이전트)에게 검색 업무의 한 부분을 가르치는 SKILL.md 파일이에요. 사이트 감사, 페이지 기획, schema 작성, AI 검색에 인용되기 같은 일이죠. 종류는 두 가지예요. 방법 스킬은 키가 필요 없는 무료 체크리스트와 플레이북이에요. 데이터 스킬은 MCP 서버로 에이전트를 Search Console, DataForSEO, SE Ranking, Ahrefs에 연결해, 추측이 아니라 실제 숫자로 일하게 해요. 좋은 구성은 두 종류를 하나씩 갖추는 거예요. 2026년에 설치할 만한 스킬을 각 프로젝트 저장소를 바탕으로 정리했어요.",
    cta: "시작하기",
    secondary: "스킬 비교하기",
    secondaryHref: "#compare",
  },
  sections: [
    {
      kind: "text",
      title: "용도별 추천",
      points: [
        "무난한 시작: Corey Haines의 marketingskills. 그중 seo-audit, ai-seo, programmatic-seo는 skills.sh에서 가장 많이 설치된 SEO 스킬 세 개예요.",
        "명령어 하나로 전체 감사: Claude SEO. `/seo audit <url>`은 최대 17개의 전문 에이전트를 사이트 전체에 보내고 우선순위를 매긴 계획을 돌려줘요.",
        "AI 검색(GEO): 에이전시 스타일의 감사와 PDF 리포트가 필요하면 GEO-SEO Claude, CI에서 돌릴 수 있는 0–100점 준비도 점수가 필요하면 GEO Optimizer.",
        "내 숫자로 일하기: 무료 Search Console MCP 서버이자 CLI인 Ian Nuttall의 seo. 이미 SE Ranking을 유료로 쓰고 있다면 SE Ranking의 스킬.",
        "원칙대로 하는 테크니컬 SEO: Lighthouse 감사와 Google 가이드라인을 바탕으로 한 Addy Osmani의 seo 스킬.",
        "한 번이 아니라 매일 하는 SEO: Marketing Team Skills(저희 제작)는 새 사이트가 이길 수 있는 키워드 고르기, 키워드당 페이지 하나, 색인 요청, 일일 리포트까지 다뤄요.",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Claude Code용 SEO 스킬 비교",
      text: [
        "스타 수와 라이선스는 2026년 11월 8일 GitHub API 기준이며 반올림했어요. 스킬이 여러 개 든 저장소는 저장소 전체의 스타 수예요.",
      ],
      headers: ["스킬", "잘하는 일", "필요한 것", "스타", "라이선스"],
      rows: [
        ["[marketingskills](https://github.com/coreyhaines31/marketingskills) (Corey Haines): seo-audit, ai-seo, programmatic-seo, schema, site-architecture", "감사, AI 검색, 대량 페이지, schema를 방법론으로", "없음; skills CLI로 모든 에이전트", "~59k (저장소)", "MIT"],
        ["[Claude SEO](https://github.com/AgriciDaniel/claude-seo)", "병렬 에이전트로 전체 사이트 감사: 테크니컬, E-E-A-T, schema, GEO, 로컬", "Claude Code 1.0.33+; `/seo setup`이 자체 Python과 헤드리스 브라우저를 추가", "~27k", "MIT"],
        ["[GEO-SEO Claude](https://github.com/zubair-trabzada/geo-seo-claude)", "GEO 감사, AI 크롤러 점검, 고객용 PDF 리포트", "Python 3.10+, Git; 셸 스크립트로 설치", "~12k", "MIT"],
        ["[NotFair](https://github.com/nowork-studio/notfair-plugin)", "실시간 Search Console, GA4, Ads 데이터로 SEO, GEO, Google Ads", "NotFair 호스팅 MCP에 로그인", "~4.1k", "MIT"],
        ["[web-quality-skills: seo](https://github.com/addyosmani/web-quality-skills) (Addy Osmani)", "Lighthouse와 Google 검색 가이드라인에 따른 테크니컬·온페이지 SEO", "없음; 실시간 점검엔 Lighthouse 또는 Chrome DevTools MCP", "~3k (저장소)", "MIT"],
        ["[Claude Blog](https://github.com/AgriciDaniel/claude-blog)", "조사하고 사실 확인한 블로그 글, 전달 전에 점수 매김", "Python 3.11+", "~2.7k", "MIT"],
        ["[opc-skills: seo-geo](https://github.com/ReScienceLab/opc-skills)", "1인 창업자를 위한 빠른 SEO·GEO 점검과 schema", "Python 3", "~1.9k (저장소)", "Apache 2.0"],
        ["[GEO Optimizer](https://github.com/Auriti-Labs/geo-optimizer-skill)", "0–100점 AI 준비도 점수와 수정: robots.txt, llms.txt, JSON-LD", "Python 3.10+와 uv; 인용 점검엔 내 LLM 키", "~1.3k", "MIT"],
        ["[seo-ops](https://github.com/tigerless-labs/seo-ops)", "URL 하나에 대한 26가지 통과/실패 SEO·GEO 점검", "macOS 또는 Linux의 Python 3.9+", "~1k", "명시 안 됨"],
        ["[seo](https://github.com/iannuttall/seo) (Ian Nuttall)", "내 실제 Search Console, Analytics, Bing 데이터와 키워드 조사", "호스팅 MCP에 Google 로그인; 키워드엔 DataForSEO 또는 Ahrefs 키", "~600", "Apache 2.0"],
        ["[GEO Doctor](https://github.com/Fangx-AI/geo-doctor)", "중국 AI 어시스턴트(Doubao, DeepSeek)에 추천되기; 중국어와 영어", "Node 18+", "~470", "MIT"],
        ["[SE Ranking SEO skills](https://github.com/seranking/seo-skills)", "SE Ranking 데이터로 키워드 클러스터, 백링크 격차, AI 점유율", "SE Ranking 계정(14일 체험 후 유료)", "~200", "MIT"],
        ["[Marketing Team Skills](https://github.com/ummydev/marketing-team-skills) (저희 제작)", "새 사이트의 매일 SEO 업무: 키워드, 페이지, 색인 요청, 리포트; 숏폼 영상도", "없음; skills CLI로 모든 에이전트", "신규 (2026년 11월)", "MIT"],
      ],
    },
    {
      kind: "text",
      id: "installs",
      title: "가장 많이 설치된 SEO 스킬",
      text: [
        "skills CLI를 통한 설치 수로, 2026년 11월 8일 skills.sh 레지스트리 기준이에요. Claude SEO처럼 `/plugin install`로 설치하는 플러그인은 대부분 여기에 잡히지 않으니 최소치로 보세요.",
      ],
      points: [
        "seo-audit (marketingskills): 약 249,000",
        "ai-seo (marketingskills): 약 160,000",
        "programmatic-seo (marketingskills): 약 158,000",
        "site-architecture (marketingskills): 약 130,000",
        "schema (marketingskills): 약 86,000",
        "seo-geo (opc-skills): 약 56,000",
        "seo (Addy Osmani의 web-quality-skills): 약 54,000",
        "seo (Ian Nuttall): 약 24,000",
        "seo (Claude SEO의 메인 스킬): 약 10,000",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "SEO를 위한 Claude Code 설정법",
      steps: [
        {
          title: "방법 스킬 하나 설치하기",
          text: "marketingskills의 SEO 스킬이나 Claude SEO 중 하나만 고르세요. 둘 다 같은 감사를 다루기 때문에 서로 의견이 엇갈려요. Lighthouse 스타일의 테크니컬 점검을 더하고 싶을 때만 Addy Osmani의 스킬을 추가하세요.",
          code: install,
        },
        {
          title: "실제 데이터 연결하기",
          text: "데이터가 없으면 에이전트의 키워드 아이디어는 추측일 뿐이에요. Search Console(Ian Nuttall의 seo 또는 Claude SEO의 `/seo google`)을 연결하고, 검색량이 필요하면 DataForSEO, Ahrefs, SE Ranking 같은 키워드 소스도 연결하세요.",
        },
        {
          title: "감사한 뒤 순서대로 고치기",
          text: "내 사이트에 감사를 돌린 다음, 에이전트에게 상위 항목부터 고치고 같은 점검을 다시 돌리게 하세요. 색인과 순위 변화는 세션 안이 아니라 며칠에서 몇 주 뒤 Search Console에 나타나요.",
        },
        {
          title: "루틴으로 만들기",
          text: "SEO는 매주 같은 루프를 반복할 때 성과가 나요. 키워드를 고르고, 페이지를 쓰고, 색인에 올리고, 숫자를 읽어요. 이 루프를 CLAUDE.md나 스킬에 적어 두고 일정에 맞춰 돌리세요. [AI SEO 에이전트 만드는 법](/blog/ai-seo-agent)을 참고하세요.",
        },
      ],
      source: { label: "출처: Corey Haines의 marketingskills", href: corey },
    },
    {
      kind: "text",
      id: "ours",
      title: "crewmark.ai에서 저희 SEO 에이전트가 쓰는 것",
      text: [
        "Crewmark의 SEO는 AI 직원이 해요. [SEO 전문가 직무](/ai-employees/seo-specialist)를 맡은 Claude Code 세션이 하트비트에 맞춰 근무해요. 그 저장소에는 Corey Haines의 스킬 25개와 저희 Marketing Team Skills가 설치돼 있어요.",
      ],
      points: [
        "2026년 11월 7일, 에이전트가 crewmark.ai에 marketingskills의 감사 스킬을 돌렸어요. 감사 결과 사이트에 공개 가격 정보와 개인정보 처리방침 페이지가 없다는 점이 지적됐고, 다음 날 [가격 페이지](/pricing)가 공개됐어요.",
        "매일 Google 자동완성과 Search Console에서 키워드를 고르고(keyword-research), 키워드당 페이지 하나를 쓰고(seo-page), 새 URL을 IndexNow, Bing, Google에 제출하고(index-push), 일일 리포트를 올려요(seo-daily-report).",
        "사이트가 새로 생겨서 아직 보여 드릴 순위 결과는 없어요. 보여 드릴 만한 Search Console 숫자가 생기면 이 페이지에 추가할게요.",
      ],
    },
    {
      kind: "text",
      title: "설치 전에 알아 둘 점",
      points: [
        "데이터 스킬은 내 데이터를 어딘가로 보내요. Ian Nuttall의 seo, NotFair, Ryze는 각자의 호스팅 MCP 서버로 연결되고, SE Ranking과 DataForSEO는 크레딧 단위로 과금해요. README에 따르면 SE Ranking을 크게 돌리면 수천 크레딧이 들 수 있어요.",
        "GEO-SEO Claude와 Agentic SEO Skill은 `curl ... | bash`로 설치해요. Claude SEO의 README가 자기 설치 스크립트에 대해 권하듯, 스크립트를 내려받아 읽어 본 뒤 실행하세요.",
        "스킬이 링크를 사게 두지 마세요. Illyism의 seo-skills에는 작성자의 서비스에서 백링크를 사는 linkdr가 들어 있어요. 순위 신호를 넘기는 유료 링크는 Google의 스팸 정책 위반이에요.",
        "README에 나온 트래픽 증가 같은 성과 수치는 작성자 본인의 주장이에요. Claude SEO가 밝힌 12주 만의 Search Console 클릭 10.8K는 그들 자신의 사이트 기록이에요.",
        "무료 스킬 옆에서 뭔가를 파는 경우도 있어요. Claude SEO와 GEO-SEO Claude는 유료 커뮤니티를 홍보하고, GEO Optimizer에는 월 $19부터인 Pro 요금제가 있어요. 스킬 자체는 오픈소스예요.",
        "Anthropic은 SEO 스킬을 공개하지 않았어요. 여기 소개한 것 중 공식 스킬은 없어요.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Crewmark로",
      title: "스킬에 매일 일하는 SEO 전문가를 붙여 주세요",
      text: [
        "스킬은 한 세션을 SEO에 더 능숙하게 만들어요. Crewmark는 Claude Code나 Codex를 AI SEO 전문가로 바꿔요. 월 Search Console 클릭 10% 증가 같은 숫자 목표, 근무 시간, 써야 할 페이지가 쌓인 보드를 갖고, 하트비트로 깨어나 다음 이슈를 맡고, 승인이 필요하면 메시지를 보내요.",
      ],
      steps: [
        {
          title: "SEO 전문가 직무 채용하기",
          text: "브리프, 목표, 일일 루틴이 미리 설정돼 있어요. [AI SEO 전문가](/ai-employees/seo-specialist)와 [AI 마케팅 에이전트](/ai-employees/marketing-agent)를 참고하세요.",
        },
        {
          title: "SEO 스킬을 저장소에 설치하기",
          text: "직원은 다른 세션과 똑같이 `.claude/skills`의 스킬을 사용해요. [Marketing Team Skills](/skills)로 시작해 보세요.",
        },
        {
          title: "프롬프트 말고 페이지와 리포트 검토하기",
          text: "새 페이지를 승인하고 보드에서 일일 리포트를 읽으세요. [AI 직원이란](/ai-employees)도 읽어 보세요.",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "스킬로 SEO용 Claude Code 설정하기" },
  mid: {
    title: "이 스킬을 매일 돌리는 SEO 전문가가 필요하세요?",
    text: "Crewmark의 AI SEO 전문가는 하트비트에 맞춰 근무하며 페이지를 쓰고, 색인에 올리고, 매일 리포트해요.",
    button: "시작하기",
  },
  faq: {
    title: "Claude SEO 스킬 자주 묻는 질문",
    items: [
      {
        q: "SEO에 가장 좋은 Claude 스킬은 뭔가요?",
        a: "대부분의 사이트에는 skills.sh에서 가장 많이 설치된 SEO 스킬인 Corey Haines의 seo-audit, ai-seo, programmatic-seo가 좋아요. 병렬 에이전트로 전체 감사를 하려면 Claude SEO예요. Search Console MCP 같은 데이터 소스를 더해 에이전트가 실제 숫자로 일하게 하세요.",
      },
      {
        q: "공식 Claude SEO 스킬이 있나요?",
        a: "아니요. 2026년 11월 현재 Anthropic의 skills 저장소에는 SEO 스킬이 없어요. Claude SEO는 Agrici Daniel의 독립 오픈소스 프로젝트이고, Anthropic 제품이 아니에요.",
      },
      {
        q: "Claude SEO와 marketingskills는 뭐가 다른가요?",
        a: "Claude SEO는 감사용으로 만든 하나의 플러그인이에요. `/seo` 명령어 뒤에 하위 스킬 26개와 에이전트 19개가 있고, 자체 Python 도구와 헤드리스 브라우저를 써요. marketingskills는 마케팅 전반에 걸친 개별 방법 스킬 라이브러리라서 필요한 SEO 스킬만 설치하면 되고, 별도 설정이 필요 없어요.",
      },
      {
        q: "Claude Code로 키워드 조사를 할 수 있나요?",
        a: "키워드를 고르고 묶을 수는 있지만, 스스로 검색량을 볼 수는 없어요. 데이터 소스를 연결하세요. 이미 노출되는 검색어는 Search Console, 검색량은 DataForSEO, Ahrefs, SE Ranking으로 확인해요. Google 자동완성은 사람들이 무엇을 검색하는지는 보여 주지만 얼마나 검색하는지는 보여 주지 않아요.",
      },
      {
        q: "SEO 스킬과 GEO 스킬은 뭐가 다른가요?",
        a: "SEO 스킬은 Google과 Bing 순위를 노리고, GEO(생성형 엔진 최적화) 스킬은 ChatGPT, Perplexity, Gemini, Google AI 개요에 인용되는 것을 노려요. AI 크롤러 접근, llms.txt, 인용하기 좋은 답변 같은 점검을 하죠. 요즘은 대부분의 팩이 둘 다 해요.",
      },
      {
        q: "이 SEO 스킬들은 Codex와 Cursor에서도 쓸 수 있나요?",
        a: "대부분 쓸 수 있어요. skills CLI로 설치한 스킬은 Codex, Cursor 외 수십 개 에이전트에서 작동하고, Ian Nuttall의 seo 같은 MCP 기반 스킬은 원격 MCP 서버를 지원하는 모든 에이전트에 연결돼요.",
      },
    ],
  },
  cta: {
    title: "믿을 수 있는 스킬을 갖춘 SEO 전문가를 보드에 두세요.",
    text: "Crewmark는 Claude Code, Codex, DeepSeek Harness, OpenCode 세션을 직무, 목표, 근무 시간, 하트비트를 갖춘 AI 직원으로 바꿔 줘요.",
    button: "시작하기",
  },
  checked: "2026년 11월 8일에 각 스킬의 GitHub 저장소, GitHub API, skills.sh 레지스트리로 확인했습니다.",
  disclaimer:
    "Crewmark는 독립 제품으로, Anthropic이나 여기 소개한 스킬의 작성자와 제휴하거나 그 보증을 받지 않았습니다. 제품명은 각 소유자의 상표입니다.",
};
