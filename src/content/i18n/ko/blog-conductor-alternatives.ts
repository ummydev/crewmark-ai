import type { GuideCopy } from "@/components/landing/guide-article";

// Korean translation of /blog/conductor-alternatives; the English master is src/content/blog/conductor-alternatives.ts.

const announcement = "https://www.conductor.build/announcement";

const rescue = `# 이 저장소에 Conductor가 만든 worktree 찾기
git worktree list

# 남기고 싶은 워크스페이스마다 브랜치를 커밋하고 푸시하기
cd ~/conductor/workspaces/<repo>/<workspace>
git add -A && git commit -m "WIP from Conductor"
git push -u origin HEAD`;

export const copy: GuideCopy = {
  meta: {
    title: "Conductor, Meta 합류: 종료 일정과 추천 대안 | Crewmark",
    description:
      "Claude Code와 Codex 에이전트를 병렬로 돌리는 Mac 앱 Conductor가 Meta에 합류해요. 종료 일정, 워크스페이스 저장 방법, Mac·Windows·Linux에서 쓸 수 있는 Conductor 대안을 정리했어요.",
  },
  breadcrumb: "Conductor 대안",
  parent: { name: "블로그", href: "/blog" },
  article: { published: "2026-11-06" },
  hero: {
    kicker: "블로그 · AI 코딩 에이전트",
    title: "Conductor가 Meta에 합류해요: 앞으로 일어날 일, 그리고 에이전트를 옮길 곳",
    lead: "Claude Code, Codex, Cursor, OpenCode 에이전트를 병렬 워크스페이스에서 돌리는 Mac 앱 Conductor가 2026년 11월 4일 Meta 합류를 발표했어요. 신규 가입은 이미 막혔고, Conductor Cloud는 11월 13일에 읽기 전용이 된 뒤 11월 20일에 종료되며, 로컬 앱은 2027년 초까지만 업데이트돼요. 이 가이드에서는 일정, 작업을 지키는 방법, 같은 일을 해 주는 대안을 다뤄요.",
    cta: "얼리 액세스 신청",
    secondary: "워크스페이스 저장하기",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "Conductor는 무엇이었고, 무엇이 바뀌나",
      text: [
        "Conductor는 코딩 작업마다 전용 워크스페이스를 줬어요. 각각 자체 브랜치, 파일, 터미널, diff, 리뷰 흐름을 가진 git worktree라서 여러 에이전트가 한 저장소에서 동시에 일할 수 있었죠. macOS 전용이었고 Claude Code, Codex, Cursor, OpenCode를 지원했으며, Mac을 떠나도 워크스페이스가 계속 돌아가는 Conductor Cloud도 추가했어요.",
        "창업자 Charlie Holtz는 팀이 Meta에 합류해 \"다음 인터페이스\"를 만든다고 발표하며, 내년 초에 새로운 것을 내놓겠다고 예고했어요. Meta는 TechCrunch에 인수를 확인했지만 조건은 공개하지 않았어요.",
      ],
    },
    {
      kind: "table",
      title: "Conductor 종료 일정",
      headers: ["날짜", "일어나는 일"],
      rows: [
        ["2026년 11월 4일", "신규 가입과 다운로드 중단. 무료 사용자는 업그레이드할 수 없고, Pro 사용자는 Pro 기능을 무료로 계속 써요. 활성 구독자는 환불받아요."],
        ["2026년 11월 13일", "클라우드 워크스페이스가 읽기 전용이 돼요. 이전 채팅을 읽고 데이터를 내보낼 수는 있지만 메시지는 보낼 수 없어요."],
        ["2026년 11월 20일", "Conductor Cloud가 종료되고 클라우드 사용자 데이터 삭제가 시작돼요."],
        ["2027년 초까지", "로컬 Mac 앱은 새 모델 지원과 치명적인 버그 수정을 계속 받다가 종료돼요. 종료 시 모든 사용자 데이터가 삭제돼요."],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "마감 전에 작업을 지키는 방법",
      steps: [
        {
          title: "11월 13일 전에 클라우드 워크스페이스를 Mac으로 옮기기",
          text: "Conductor에서 클라우드 워크스페이스마다 마우스 오른쪽 버튼을 클릭하고 Transfer to local(로컬로 옮기기)을 선택하세요. 워크스페이스와 채팅이 내 컴퓨터로 옮겨져요.",
        },
        {
          title: "11월 20일 전에 데이터 내보내기",
          text: "Conductor의 Settings → Account → Export data(데이터 내보내기)에서 메모나 프롬프트로 남기고 싶은 채팅까지 모두 내려받으세요.",
        },
        {
          title: "중요한 브랜치는 모두 푸시하기",
          text: "로컬 워크스페이스는 평범한 git worktree로, 보통 `~/conductor/workspaces/<repo>/<workspace>`에 있고 저장소의 히스토리를 공유해요. 브랜치를 커밋하고 푸시해 두면 앱이 사라져도 작업은 남아요.",
          code: rescue,
        },
        {
          title: "셋업 스크립트 옮기기",
          text: "Conductor는 프로젝트별 setup, run, archive 스크립트를 `.conductor/settings.toml`이나 `.conductor/settings.local.toml`에 저장해요. 명령어를 README나 다음 도구의 셋업으로 복사하고, Claude Code worktree로 옮긴다면 `.env` 같은 파일을 `.worktreeinclude`에 적어 두세요.",
        },
        {
          title: "대체 도구를 고르고 작업 하나로 시험해 보기",
          text: "아래 선택지를 비교한 다음, Conductor Pro를 쓸 수 없게 되기 전에 새 도구에서 실제 작업 하나를 돌려 보세요.",
        },
      ],
      source: { label: "출처: Conductor 발표", href: announcement },
    },
    {
      kind: "table",
      id: "alternatives",
      title: "Conductor 대안 비교",
      headers: ["", "Conductor", "Claude Code 단독", "Codex 앱", "Crewmark"],
      rows: [
        ["무엇인가", "worktree에서 병렬 에이전트를 돌리는 Mac 앱", "`claude --worktree`, 데스크톱 앱의 병렬 세션, 백그라운드 에이전트", "worktree와 클라우드 작업을 갖춘 OpenAI의 데스크톱 앱", "AI 직원: 직무, 목표, 근무 시간, 하트비트를 가진 에이전트 세션"],
        ["에이전트", "Claude Code, Codex, Cursor, OpenCode", "Claude Code", "Codex", "Claude Code, Codex, DeepSeek Harness, OpenCode"],
        ["플랫폼", "macOS", "macOS, Windows, Linux", "데스크톱 앱과 웹", "macOS, Windows, Linux"],
        ["격리 방식", "워크스페이스마다 git worktree 하나", "세션이나 서브에이전트마다 git worktree 하나", "worktree", "직원마다 자기 세션과 체크아웃"],
        ["다음 작업을 시작하는 쪽", "나", "나(또는 일정)", "나(또는 일정)", "하트비트: 직원이 깨어나 다음 이슈를 가져가요"],
        ["작업 보드", "워크스페이스 목록", "없음", "없음", "있음. 이슈, 댓글, 나에게 보내는 메시지 포함"],
        ["상태", "클라우드는 11월 20일 종료, 로컬은 2027년 초까지", "제공 중", "제공 중", "얼리 액세스"],
      ],
    },
    {
      kind: "text",
      title: "나에게 맞는 Conductor 대안",
      points: [
        "Conductor를 주로 Claude Code와 썼다면: 이제 그 핵심은 Claude Code가 직접 해요. `claude --worktree <name>`은 세션마다 자기 worktree와 브랜치를 주고, `.worktreeinclude`는 `.env`를 복사하며, 데스크톱 앱은 Worktree 스위치로 병렬 세션을 돌려요. [Claude Code worktree 가이드](/blog/claude-code-worktree)를 보세요.",
        "주로 Codex를 썼다면: Codex 데스크톱 앱에는 worktree와 클라우드 작업이 내장돼 있어요. 두 에이전트 비교는 [Claude Code vs Codex](/blog/claude-code-vs-codex)를 보세요.",
        "Windows나 Linux가 필요하다면: Conductor는 끝내 그쪽을 지원하지 않았어요. Claude Code CLI와 Crewmark는 세 플랫폼 모두에서 돌아가요.",
        "여러 에이전트를 섞어 썼거나, 내가 없어도 계속 일하게 하고 싶다면: 바로 Crewmark가 하는 일이에요(아래 참고). 여러 에이전트를 직접 돌리는 방법은 [여러 Claude Code 에이전트](/blog/multiple-claude-code-agents)를 보세요.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Crewmark로",
      title: "Conductor는 에이전트를 나란히 돌렸고, Crewmark는 에이전트에게 일을 맡겨요.",
      text: [
        "Conductor 덕분에 병렬 에이전트를 시작하고 리뷰하기는 쉬워졌지만, 워크스페이스는 여전히 내가 다음 프롬프트를 입력할 때까지 기다렸어요. Crewmark는 Claude Code, Codex, DeepSeek Harness, OpenCode 세션을 직무, 목표, 근무 시간을 가진 AI 직원으로 바꾸고, 하트비트로 깨워서 보드의 다음 이슈를 가져가게 해요. 이미 결제한 요금제 그대로요.",
      ],
      steps: [
        {
          title: "저장소와 에이전트 가져오기",
          text: "프로젝트마다 셋업 명령어를 실행하세요. Conductor 워크스페이스처럼 여러 직원이 한 저장소를 공유하면서 각자 자기 체크아웃에서 일할 수 있어요.",
        },
        {
          title: "직원마다 직무와 목표 주기",
          text: "프로그래머, 리뷰어, SEO 작가처럼 각자 숫자로 적힌 목표와 근무 시간을 가져요. [AI 직원이란](/ai-employees)을 읽어 보세요.",
        },
        {
          title: "하트비트로 일을 시작하게 하기",
          text: "15분, 30분, 60분마다 직원이 같은 대화에서 깨어나 다음 이슈를 가져가고, 결정이 필요하면 메시지를 보내요. [Claude Code를 능동적으로 만드는 방법](/proactive-claude-code)을 참고하세요.",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Conductor 종료 전에 작업 지키기" },
  mid: {
    title: "Conductor를 떠나나요? 대체만 하지 말고 업그레이드하세요.",
    text: "Crewmark는 Claude Code, Codex, OpenCode를 하트비트로 깨어나 다음 이슈를 스스로 가져가는 AI 직원으로 돌려요.",
    button: "얼리 액세스 신청",
  },
  faq: {
    title: "Conductor 종료 자주 묻는 질문",
    items: [
      {
        q: "Conductor가 서비스를 종료하나요?",
        a: "일부는 그래요. Conductor는 Meta에 합류해요. Conductor Cloud는 2026년 11월 13일에 읽기 전용이 되고 11월 20일에 종료돼요. 로컬 Mac 앱은 2027년 초까지 새 모델 지원과 치명적인 수정을 받다가 종료돼요.",
      },
      {
        q: "Meta가 Conductor를 인수했나요?",
        a: "네. Conductor는 2026년 11월 4일 Meta 합류를 발표했고, Meta도 TechCrunch에 인수를 확인했어요. 금액과 조건은 공개되지 않았어요.",
      },
      {
        q: "아직 Conductor를 다운로드하거나 가입할 수 있나요?",
        a: "아니요. 신규 가입과 다운로드는 2026년 11월 4일에 중단됐고, 무료 사용자는 더 이상 Pro로 업그레이드할 수 없어요.",
      },
      {
        q: "내 데이터와 구독은 어떻게 되나요?",
        a: "클라우드 사용자 데이터는 11월 20일부터 삭제되기 시작하고, 앱이 종료되면 모든 사용자 데이터가 삭제돼요. Settings → Account → Export data에서 내보내세요. 활성 구독자는 환불받고, Pro 사용자는 그때까지 Pro 기능을 무료로 써요.",
      },
      {
        q: "Claude Code에 가장 좋은 Conductor 대안은 무엇인가요?",
        a: "격리된 병렬 작업은 Claude Code 자체의 `--worktree` 플래그와 데스크톱 앱의 병렬 세션으로 충분해요. 세션이 스스로 일을 가져가게 하려면 Crewmark 직원으로 돌리세요.",
      },
      {
        q: "Windows나 Linux용 Conductor 대안이 있나요?",
        a: "Conductor 자체는 Mac 전용이었어요. `--worktree`를 쓰는 Claude Code CLI, 순수 `git worktree`, Crewmark는 모두 macOS, Windows, Linux에서 돌아가요.",
      },
      {
        q: "Conductor 워크스페이스는 계속 쓸 수 있나요?",
        a: "로컬 워크스페이스는 평범한 브랜치를 가진 순수 git worktree라서, 앱이 어떻게 되든 코드는 저장소에 남아요. 남기고 싶은 브랜치는 커밋하고 푸시하세요.",
      },
    ],
  },
  cta: {
    title: "에이전트에게 새 보금자리가 필요해요. 일자리도 함께 주세요.",
    text: "Crewmark는 Claude Code, Codex, DeepSeek Harness, OpenCode 세션을 직무, 목표, 근무 시간, 하트비트를 갖춘 AI 직원으로 바꿔 줘요.",
    button: "얼리 액세스 신청",
  },
  checked: "2026년 11월 6일에 Conductor의 발표, changelog, 문서와 TechCrunch 보도와 대조해 확인했어요.",
  disclaimer:
    "Crewmark는 독립 제품이며 Conductor, Meta, Anthropic, OpenAI와 제휴 관계가 아니고 그들의 보증을 받지 않았어요. Conductor는 해당 소유자의 상표이고, Claude와 Claude Code는 Anthropic의 상표, Codex는 OpenAI의 상표예요.",
};
