import type { GuideCopy } from "@/components/landing/guide-article";

// Korean translation of /blog/claude-code-skills; the English master is src/content/blog/claude-code-skills.ts.

const docs = "https://code.claude.com/docs/en/skills";

const first = `---
description: Summarizes uncommitted changes and flags anything risky. Use when the user asks what changed, wants a commit message, or asks to review their diff.
---

## 현재 변경 사항

!\`git diff HEAD\`

## 지시 사항

위 변경 사항을 두세 개의 글머리 기호로 요약하고, 빠진 오류 처리, 하드코딩된 값,
업데이트해야 할 테스트처럼 위험할 수 있는 부분을 나열해.`;

const reference = `---
description: API design conventions for this codebase. Use when writing or reviewing HTTP endpoints.
paths: ["src/api/**"]
---

API 엔드포인트를 작성할 때:
- RESTful한 이름과 복수형 리소스를 사용해
- 오류는 { error: { code, message } } 형태로 반환해
- 요청 본문은 src/api/schemas/의 스키마로 검증해`;

const layout = `release/
├── SKILL.md          # 단계와, 다른 파일을 언제 읽을지
├── checklist.md      # SKILL.md가 가리킬 때만 로드됨
└── scripts/
    └── bump.sh       # 실행만 되고 컨텍스트로 읽히지 않음`;

const fork = `---
description: Audit dependencies for known vulnerabilities and outdated majors
context: fork
agent: Explore
disable-model-invocation: true
---

패키지 매니저의 audit을 실행하고, high나 critical 결과를 수정 버전과 함께 모두 나열한 뒤
뒤처진 메이저 버전을 보고해. 파일은 바꾸지 마.`;

export const copy: GuideCopy = {
  meta: {
    title: "Claude Code 스킬: 만드는 법, 예시, 모범 사례 | Crewmark AI",
    description:
      "Claude Code 스킬이 무엇이고 어떻게 로드되는지, SKILL.md로 만드는 법과 예시, 보조 파일, 서브에이전트에서 실행하기, 플러그인으로 설치하기, 모범 사례까지 정리했어요.",
  },
  breadcrumb: "Claude Code 스킬 가이드",
  parent: { name: "블로그", href: "/blog" },
  article: { published: "2026-11-06" },
  hero: {
    kicker: "블로그 · Claude Code",
    title: "Claude Code 스킬: 만드는 법과 예시, 모범 사례",
    lead: "Claude Code 스킬은 `SKILL.md` 파일이 든 폴더예요. 언제 쓰는지에 대한 설명과 따라야 할 지시 사항이 들어 있어요. Claude는 스킬이 필요해지기 전까지 설명만 보고 있다가, 필요할 때 전체를 로드해요. 그래서 긴 절차와 참고 자료를 곁에 두어도 메시지마다 비용을 치르지 않아요. 이 가이드에서는 스킬이 로드되는 방식, 첫 스킬 작성법, 예시, 보조 파일, 서브에이전트 스킬, 플러그인으로 스킬 설치하기, 그리고 Claude가 실제로 스킬을 쓰게 만드는 법을 다뤄요.",
    cta: "시작하기",
    secondary: "첫 스킬 만들기",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "Claude Code 스킬이란",
      text: [
        "같은 지시 사항이나 체크리스트, 여러 단계로 된 절차를 계속 채팅에 붙여 넣고 있다면, 또는 CLAUDE.md의 일부가 사실을 적은 글에서 절차로 커졌다면 스킬을 만들 때예요. 스킬은 다른 AI 도구도 읽는 개방형 Agent Skills 표준(agentskills.io)을 따르고, Claude Code는 여기에 실행 제어, 서브에이전트 실행, 프롬프트 안의 실시간 셸 출력 같은 기능을 더해요.",
      ],
      points: [
        "실행하는 방법은 두 가지예요. 요청이 `description`과 맞으면 Claude가 로드하거나, 직접 `/skill-name`을 입력해요.",
        "쓰기 전까지는 비용이 거의 들지 않아요. 컨텍스트에는 이름과 설명만 있고, 본문은 스킬이 실행될 때 로드돼요. 직접 실행할 때만 쓰도록 설정한 스킬은 설명조차 목록에 올라가지 않아요.",
        "커스텀 슬래시 명령어는 이제 스킬이에요. `.claude/commands/<name>.md`도 계속 동작하지만, 스킬 폴더에는 보조 파일도 담을 수 있어요. [Claude Code 슬래시 명령어](/blog/claude-code-slash-commands)를 참고하세요.",
        "Claude Code에는 `/simplify`, `/loop`, `/batch`, `/debug` 같은 번들 스킬도 함께 들어 있어요.",
      ],
    },
    {
      kind: "table",
      title: "스킬 vs CLAUDE.md vs 서브에이전트 vs 플러그인 vs MCP",
      headers: ["", "정체", "로드 시점", "용도"],
      rows: [
        ["CLAUDE.md", "프로젝트 지시 사항", "매 세션, 전체", "Claude가 항상 알아야 하는 사실과 컨벤션. [CLAUDE.md 가이드](/blog/claude-md) 참고"],
        ["스킬", "`SKILL.md`가 든 폴더", "설명은 항상, 본문은 쓸 때", "절차, 체크리스트, 참고 자료, 반복해서 쓰는 프롬프트"],
        ["서브에이전트", "자기 컨텍스트를 가진 별도 작업자", "Claude가 위임할 때", "세부 내용으로 대화를 채우면 안 되는 곁가지 작업"],
        ["플러그인", "스킬, 에이전트, 훅, MCP 서버를 묶은 패키지", "설치하고 활성화했을 때", "팀과 스킬 공유하기, 다른 사람의 스킬 설치하기"],
        ["MCP 서버", "외부 도구나 데이터 소스와의 연결", "연결했을 때", "데이터베이스나 이슈 트래커 같은 새 도구를 Claude에게 주기"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Claude Code 스킬 만드는 법",
      steps: [
        {
          title: "둘 위치 정하기",
          text: "나만 모든 프로젝트에서 쓸 스킬은 `~/.claude/skills/<name>/`에, 그 저장소에서 일하는 모두가 쓸 스킬은 저장소의 `.claude/skills/<name>/`에 두고 커밋하세요. 폴더 이름이 곧 명령어가 돼요. `summarize-changes`면 `/summarize-changes`예요.",
        },
        {
          title: "SKILL.md 작성하기: 설명 먼저, 그다음 지시 사항",
          text: "frontmatter는 파일 맨 위 `---` 줄 사이에 들어가요. 권장 항목은 `description` 하나뿐이에요. 용도와 사람들이 실제로 쓸 법한 말을 앞에 두세요. 그 아래에 지시 사항을 Markdown으로 쓰세요. `` !`command` ``로 시작하는 줄은 그 명령어를 먼저 실행하고 출력을 붙여 넣으므로, 스킬이 실제 상태를 바탕으로 동작해요.",
          code: first,
        },
        {
          title: "두 가지 방법으로 테스트하기",
          text: "커밋하지 않은 변경이 있는 git 프로젝트에서 `claude`를 시작하세요. \"뭘 바꿨어?\"라고 물어 Claude가 스스로 스킬을 쓰는지 확인하고, 이어서 `/summarize-changes`를 입력해 직접 실행해 보세요. 세션 중에 추가한 스킬은 자동으로 로드돼요. 보이지 않으면 `/reload-skills`를 실행하세요.",
        },
        {
          title: "누가 실행할 수 있는지 정하기",
          text: "배포나 메시지 전송처럼 부작용이 있는 스킬에는 `disable-model-invocation: true`를 추가해 나만 시작할 수 있게 하세요. Claude만 로드해야 하는 배경 지식에는 `user-invocable: false`를 추가하세요. 입력은 슬래시 명령어 가이드에서 본 것처럼 `$ARGUMENTS`로 넘겨요.",
        },
        {
          title: "공유하기",
          text: "`.claude/skills/`를 저장소에 커밋하거나, 여러 저장소나 팀에서 쓰려면 스킬을 플러그인으로 패키징하세요.",
        },
      ],
      source: { label: "출처: Claude Code 문서, Extend Claude with skills", href: docs },
    },
    {
      kind: "steps",
      id: "examples",
      title: "Claude Code 스킬 예시",
      steps: [
        {
          title: "맞는 파일일 때만 로드되는 참조 스킬",
          text: "참조 스킬에는 Claude가 작업하면서 적용할 컨벤션을 담아요. `paths`를 지정하면 glob에 맞는 파일을 다룰 때만 자동으로 로드돼요.",
          code: reference,
        },
        {
          title: "보조 파일이 있는 작업 스킬",
          text: "SKILL.md는 짧게 두고 나머지는 다른 파일을 가리키세요. Claude는 SKILL.md가 지시할 때만 `checklist.md`를 읽고, `bump.sh`는 읽지 않고 실행하므로, 세부 내용은 필요해질 때까지 비용이 들지 않아요.",
          code: layout,
        },
        {
          title: "자기 서브에이전트에서 실행되는 스킬",
          text: "`context: fork`는 스킬을 프롬프트로 삼아 서브에이전트(여기서는 읽기 전용인 Explore 타입)를 시작해요. 서브에이전트는 내 대화를 보지 못하므로 지시 사항만으로 완결되어야 해요. `background: false`를 설정하지 않으면 백그라운드에서 실행돼요.",
          code: fork,
        },
      ],
    },
    {
      kind: "text",
      title: "플러그인과 마켓플레이스에서 스킬 설치하기",
      text: [
        "다른 사람이 만든 스킬은 대개 플러그인에 담겨 와요. Claude Code는 대화형 세션을 처음 시작할 때 Anthropic의 공식 마켓플레이스(`claude-plugins-official`)를 등록해요. `/plugin`으로 둘러보거나, `/plugin install skill-creator@claude-plugins-official`처럼 바로 설치할 수 있어요. 팀이나 커뮤니티 마켓플레이스는 먼저 `/plugin marketplace add owner/repo`로 추가하세요.",
      ],
      points: [
        "플러그인 스킬의 이름은 `/plugin-name:skill-name` 형태예요.",
        "공식 마켓플레이스에는 플러그인마다 턴당 컨텍스트 비용과 호출할 때의 비용이 표시돼요.",
        "skill-creator 플러그인은 스킬 작성을 돕고, 스킬이 있을 때와 없을 때의 결과를 비교하는 평가도 실행해요.",
        "저장소나 플러그인의 스킬은 믿기 전에 먼저 읽어 보세요. `allowed-tools`는 스킬이 실행되는 턴의 도구를 미리 승인할 수 있어요.",
      ],
    },
    {
      kind: "text",
      title: "모범 사례, 그리고 Claude가 스킬을 무시할 때",
      points: [
        "설명은 매칭을 위해 쓰세요. 하는 일과 사용자가 쓰는 표현을 앞에 두세요. 목록에서는 설명과 `when_to_use`를 합쳐 1,536자에서 잘려요.",
        "가장 중요한 지시 사항은 위쪽에 두세요. 대화가 압축되면 Claude Code는 호출된 스킬의 앞부분만 남길 수 있어요. 다시 호출하면 복원돼요.",
        "스킬 파일은 이후 턴에서 다시 읽히지 않으므로, 작업 전체에 해당하는 지침(\"편집할 때마다 테스트를 실행해\")으로 쓰세요. 절대 건너뛰면 안 되는 규칙은 훅에 두세요.",
        "토큰 사용량을 줄이려면 절차를 CLAUDE.md에서 스킬로 옮기고, 직접 실행하는 스킬에는 `disable-model-invocation: true`를 설정하고, `/skill-doctor`로 컨텍스트를 쓰면서도 잘 쓰이지 않는 스킬을 확인하세요.",
        "실행되지 않나요? 설명에 맞는 키워드가 있는지 확인하고, \"쓸 수 있는 스킬이 뭐야?\"라고 물어보고, `claude plugin validate .claude/skills`를 실행해 파싱되지 않는 frontmatter를 찾으세요.",
        "너무 자주 실행되나요? 설명을 더 좁히거나, `disable-model-invocation: true`로 스킬을 수동 실행으로 바꾸세요.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Crewmark로",
      title: "스킬은 Claude Code에 방법을 가르치고, Crewmark는 매시간 할 일을 줘요.",
      text: [
        "스킬 라이브러리가 있으면 세션마다 유능해지지만, 여전히 내가 요청하기를 기다려요. Crewmark는 Claude Code, Codex, DeepSeek Harness, OpenCode 세션을 직무, 목표, 근무 시간을 가진 AI 직원으로 바꾸고, 하트비트로 깨워서 보드의 다음 이슈를 가져가게 해요. 프로젝트의 스킬도 로드된 상태로요.",
      ],
      steps: [
        {
          title: "스킬은 저장소에 두기",
          text: "직원의 세션은 내 세션처럼 `.claude/skills/`와 CLAUDE.md를 읽으므로, 릴리스 스킬이나 리뷰 체크리스트도 함께 따라가요.",
        },
        {
          title: "하트비트로 일을 시작하게 하기",
          text: "근무 시간 동안 직원은 15분, 30분, 60분마다 같은 대화에서 깨어나 다음 이슈를 가져가요. [Claude Code를 능동적으로 만드는 방법](/proactive-claude-code)을 참고하세요.",
        },
        {
          title: "이슈를 배정하고 메시지에 답하기",
          text: "보드에 일을 올리면 직원은 진행하면서 댓글을 남기고, 결정이 필요하면 메시지를 보내요. [AI 직원이란](/ai-employees)도 읽어 보세요.",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Claude Code 스킬 만들기" },
  mid: {
    title: "스킬은 준비됐어요. 내가 없는 동안 누가 실행할까요?",
    text: "Crewmark는 직무, 목표, 이슈 보드를 주고 하트비트로 Claude Code를 깨워요. 이미 결제한 요금제 그대로 쓸 수 있어요.",
    button: "시작하기",
  },
  faq: {
    title: "Claude Code 스킬 자주 묻는 질문",
    items: [
      {
        q: "Claude Code 스킬이란 무엇인가요?",
        a: "작업 지시 사항이나 참고 지식을 담은 `SKILL.md` 파일이 든 폴더예요. 요청이 설명과 맞으면 Claude가 로드하고, `/skill-name`으로 직접 실행할 수도 있어요.",
      },
      {
        q: "Claude Code 스킬은 어디에 두나요?",
        a: "모든 프로젝트에서 쓰는 개인 스킬은 `~/.claude/skills/<name>/SKILL.md`, 팀이 쓸 스킬은 저장소의 `.claude/skills/<name>/SKILL.md`, 또는 플러그인 안에 둬요.",
      },
      {
        q: "Claude Code가 내 스킬을 쓰게 하려면 어떻게 하나요?",
        a: "작업과 그 작업을 요청할 때 쓸 말을 설명에 적고, \"쓸 수 있는 스킬이 뭐야?\"라고 물어 스킬이 보이는지 확인하거나, `/skill-name`으로 직접 실행하세요.",
      },
      {
        q: "스킬과 서브에이전트는 무엇이 다른가요?",
        a: "스킬은 대화에 로드되는 지시 사항이고, 서브에이전트는 자기 컨텍스트를 가진 별도 작업자예요. `context: fork`를 설정한 스킬은 둘을 합친 것으로, 스킬을 프롬프트로 삼아 서브에이전트로 실행돼요.",
      },
      {
        q: "스킬과 플러그인은 무엇이 다른가요?",
        a: "플러그인은 스킬, 서브에이전트, 훅, MCP 서버를 묶어 공유하는 방식이에요. 플러그인을 설치하면 그 스킬을 쓸 수 있고, 플러그인 없이 내 `.claude/skills/`에 스킬을 써도 돼요.",
      },
      {
        q: "스킬은 토큰을 많이 쓰나요?",
        a: "컨텍스트에 계속 남는 건 설명뿐이고, 본문은 스킬이 실행될 때 로드돼요. 수동 전용으로 설정한 스킬은 설명조차 목록에 올라가지 않아요. 긴 절차를 CLAUDE.md에서 스킬로 옮기면 보통 토큰 사용량이 줄어요.",
      },
      {
        q: "Claude Code 스킬은 어디서 찾을 수 있나요?",
        a: "Anthropic의 공식 플러그인 마켓플레이스(`/plugin`이나 claude.com/marketplace에서 둘러볼 수 있어요), `/plugin marketplace add`로 추가하는 팀과 커뮤니티 마켓플레이스, 그리고 공개 GitHub 저장소에서 찾을 수 있어요.",
      },
    ],
  },
  cta: {
    title: "Claude Code 스킬을 정해진 일정에 맞춰 일하게 하세요.",
    text: "Crewmark는 Claude Code, Codex, DeepSeek Harness 세션을 직무, 목표, 근무 시간, 하트비트를 갖춘 AI 직원으로 바꿔 줘요.",
    button: "시작하기",
  },
  checked: "2026년 11월 6일에 Claude Code 문서(skills, plugins)와 대조해 확인했습니다.",
  disclaimer:
    "Crewmark는 독립 제품으로, Anthropic과 제휴하거나 그 보증을 받지 않았습니다. Claude와 Claude Code는 Anthropic의 상표입니다.",
};
