import type { GuideCopy } from "@/components/landing/guide-article";

// Korean translation of /blog/claude-squad-alternatives; the English master is src/content/blog/claude-squad-alternatives.ts.

const repo = "https://github.com/smtg-ai/claude-squad";

const usage = `# Claude Squad: Claude Code by default, or another agent with -p
cs
cs -p "codex"

# Claude Code on its own: one worktree and branch per session
claude --worktree fix-login
claude --worktree add-billing`;

export const copy: GuideCopy = {
  meta: {
    title: "Claude Squad 대안과 Conductor 비교 | Crewmark AI",
    description:
      "Claude Squad로 할 수 있는 것과 한계(tmux 전용, Windows 미지원, 모든 작업을 직접 시작), 그리고 여러 Claude Code나 Codex 에이전트를 돌리는 대안: Claude Code 자체 worktree, Paradev, Kanban Code, Conductor, Crewmark.",
  },
  breadcrumb: "Claude Squad 대안",
  parent: { name: "블로그", href: "/blog" },
  article: { published: "2026-11-07" },
  hero: {
    kicker: "블로그 · AI 코딩 에이전트",
    title: "Claude Squad 대안: 여러 코딩 에이전트를 동시에 돌리는 다른 방법",
    lead: "Claude Squad는 여러 코딩 에이전트를 나란히 돌리는 오픈소스 터미널 앱(AGPL-3.0)이에요. 작업마다 tmux 세션과 git worktree가 따로 생기고, 푸시하기 전에 변경 사항을 리뷰할 수 있어요. macOS나 Linux 터미널에서 일한다면 잘 맞아요. 대안을 찾는 건 보통 그래픽 앱을 원하거나, Windows가 필요하거나, 에이전트를 하나하나 시작하지 않아도 알아서 일을 가져가길 원할 때예요. 이 가이드에서는 Claude Squad와 Conductor 비교를 포함해 선택지를 비교해요.",
    cta: "시작하기",
    secondary: "대안 비교하기",
    secondaryHref: "#alternatives",
  },
  sections: [
    {
      kind: "text",
      title: "Claude Squad가 잘하는 것과 한계",
      text: [
        "Claude Squad의 최신 릴리스는 2026년 8월 20일에 나온 v1.0.20이고, 지금도 관리되고 있어요. 기본으로 Claude Code를 실행하고, `-p`로 Codex나 Aider 같은 다른 터미널 에이전트도 실행할 수 있어요.",
      ],
      points: [
        "장점: 작업마다 tmux 세션 하나와 git worktree 하나를 줘서, 에이전트끼리 같은 파일을 건드리지 않아요.",
        "장점: 푸시하기 전에 인스턴스별 diff를 보고 해당 브랜치를 체크아웃할 수 있어요.",
        "장점: 실험적인 `-y`(auto-yes) 모드가 프롬프트를 자동으로 수락해서, 작업을 백그라운드에서 끝낼 수 있어요.",
        "한계: tmux와 GitHub CLI가 필요해요. README에 Windows 언급이 없고, Windows에서 tmux를 쓰려면 WSL을 거쳐야 해요.",
        "한계: 터미널 UI예요. 보드도, 팀이 함께 보는 화면도 없고, 모든 작업을 직접 시작해야 해요.",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "여러 에이전트를 병렬로 돌리는 방법 (Claude Squad가 있든 없든)",
      steps: [
        {
          title: "작업마다 worktree를 따로 주기",
          text: "이게 Claude Squad의 핵심인데, 이제 Claude Code도 직접 해요. `claude --worktree <name>`은 별도의 브랜치와 체크아웃에서 세션을 시작해요. [Claude Code worktree 가이드](/blog/claude-code-worktree)를 보세요.",
          code: usage,
        },
        {
          title: "지켜볼 방식 고르기",
          text: "터미널 목록(Claude Squad), 데스크톱 앱(Paradev, 종료 전까지의 Conductor), 세션 칸반 보드(Kanban Code) 중에서 골라요. [Claude Code 칸반 보드](/blog/claude-code-kanban)를 보세요.",
        },
        {
          title: "다음 작업을 누가 시작할지 정하기",
          text: "이 도구들은 모두 세션을 내가 시작해야 해요. 에이전트가 다음 이슈를 알아서 가져가게 하려면 일정이나 하트비트를 주세요. [Claude Code를 주도적으로 일하게 하는 방법](/proactive-claude-code)을 보세요.",
        },
        {
          title: "머지하기 전에 리뷰하기",
          text: "무엇으로 에이전트를 돌리든 머지는 사람이 하세요. diff를 하나씩 읽고, 검사를 돌린 다음 머지해요.",
        },
      ],
      source: { label: "출처: Claude Squad README", href: repo },
    },
    {
      kind: "table",
      id: "alternatives",
      title: "Claude Squad 대안 비교",
      text: ["2026년 11월에 확인한 각 프로젝트의 공식 사이트나 저장소 정보예요."],
      headers: ["", "인터페이스", "에이전트", "플랫폼", "작업을 시작하는 쪽", "라이선스"],
      rows: [
        ["Claude Squad", "터미널 UI (tmux)", "Claude Code, Codex, Gemini, Aider", "tmux와 gh 필요, Windows는 WSL로", "나", "AGPL-3.0"],
        ["Claude Code 자체", "`claude --worktree`, 데스크톱 앱의 병렬 세션", "Claude Code", "macOS, Windows, Linux", "나 (또는 일정)", "상용 (Anthropic)"],
        ["Paradev (구 Superset)", "데스크톱 앱, 작업마다 worktree, 자동화", "Claude, Codex, Cursor Agent, OpenCode 및 모든 CLI 에이전트", "macOS, Linux는 실험적, Windows는 아직 미지원", "나, 또는 자동화", "MIT"],
        ["Kanban Code", "Claude Code 세션용 칸반 보드", "Claude Code", "macOS 26 앱, Windows 앱", "나", "Apache 2.0"],
        ["Conductor", "병렬 에이전트용 Mac 앱. Meta에 합류하며 클라우드는 2026년 11월 20일 종료", "Claude Code, Codex, Cursor, OpenCode", "macOS", "나", "상용"],
        ["Crewmark", "하트비트로 깨어나는 AI 직원이 있는 호스팅 보드", "Claude Code, Codex, DeepSeek Harness, OpenCode", "웹 보드, 데몬은 macOS, Windows, Linux", "직원이 다음 이슈를 가져감", "상용"],
      ],
    },
    {
      kind: "text",
      title: "Claude Squad vs Conductor",
      text: [
        "둘 다 병렬 worktree에서 여러 에이전트를 돌려요. Claude Squad는 무료 오픈소스 터미널 앱이고, Conductor는 리뷰 흐름과 클라우드 워크스페이스를 갖춘 완성도 높은 Mac 앱이었어요. Conductor는 [Meta에 합류](/blog/conductor-alternatives)하면서 신규 가입을 닫았고, 클라우드는 2026년 11월 20일에 종료되며, 로컬 앱 업데이트도 2027년 초까지만 이어져요. 지금 둘 중에 고른다면 계속 개발되는 쪽은 Claude Squad예요.",
      ],
    },
    {
      kind: "text",
      title: "나에게 맞는 Claude Squad 대안",
      points: [
        "Claude Code만 쓴다면: 도구를 더하기 전에 기본 `--worktree` 플래그와 데스크톱 앱의 병렬 세션부터 써 보세요.",
        "Mac에서 여러 에이전트를 다루는 데스크톱 앱이 필요하다면: Paradev.",
        "세션을 카드로 보고 싶다면: Kanban Code. [Claude Code 칸반 보드](/blog/claude-code-kanban)도 읽어 보세요.",
        "Windows를 쓴다면: Claude Code의 CLI와 데스크톱 앱은 네이티브로 돌아가요. Claude Squad는 WSL이 필요해요.",
        "작업마다 직접 시작하지 않아도 에이전트가 계속 일하고, 팀이 함께 보는 보드도 원한다면: Crewmark(아래 참고). [여러 Claude Code 에이전트](/blog/multiple-claude-code-agents)도 보세요.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Crewmark로",
      title: "내가 지휘하는 분대에서, 알아서 일하는 팀으로",
      text: [
        "Claude Squad로 병렬 에이전트를 쉽게 돌릴 수 있지만, 하나하나가 내가 시작하길 기다려요. Crewmark는 Claude Code, Codex, DeepSeek Harness, OpenCode 세션을 직무, 목표, 근무 시간을 가진 AI 직원으로 바꿔요. 직원은 하트비트로 깨어나 공유 보드에서 다음 이슈를 가져가고, 자기 체크아웃에서 일하며, 결정이 필요하면 메시지를 보내요. 이미 결제 중인 구독 그대로 쓸 수 있어요.",
      ],
      steps: [
        {
          title: "저장소와 에이전트 연결하기",
          text: "프로젝트에서 설정 명령을 실행하세요. 여러 직원이 한 저장소를 함께 쓰고, 각자 자기 체크아웃에서 일해요.",
        },
        {
          title: "직원마다 직무 주기",
          text: "엔지니어, 리뷰어, SEO 작가처럼 각자 목표를 줘요. [AI 직원 직무](/ai-employees)를 보세요.",
        },
        {
          title: "보드를 채우고 리뷰하기",
          text: "근무 시간 동안 직원마다 15분, 30분, 60분마다 다음 이슈를 가져가요. 나는 풀 리퀘스트를 리뷰하고 질문에 답하면 돼요.",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "여러 코딩 에이전트를 병렬로 돌리기" },
  mid: {
    title: "에이전트를 매번 직접 시작하는 게 지겹나요?",
    text: "Crewmark의 AI 직원은 하트비트로 다음 이슈를 가져가요. 이미 결제 중인 Claude Code나 Codex 플랜 그대로요.",
    button: "시작하기",
  },
  faq: {
    title: "Claude Squad FAQ",
    items: [
      {
        q: "Claude Squad는 무엇인가요?",
        a: "smtg-ai가 만든 오픈소스 터미널 앱(AGPL-3.0)이에요. 여러 코딩 에이전트를 각각 별도의 tmux 세션과 git worktree에서 동시에 돌리고, 푸시 전에 변경 사항을 하나씩 리뷰할 수 있어요.",
      },
      {
        q: "Claude Squad는 Codex와 함께 쓸 수 있나요?",
        a: "네. OpenAI API 키를 설정한 뒤 `cs -p \"codex\"`로 실행하면 돼요. Gemini와 Aider도 실행할 수 있고, 기본은 Claude Code예요.",
      },
      {
        q: "Claude Squad는 Windows에서 돌아가나요?",
        a: "README에 Windows 언급이 없고 tmux가 필요해서, Windows에서는 WSL에서 돌려야 해요. Claude Code 자체의 `--worktree` 플래그와 데스크톱 앱은 Windows에서 네이티브로 돌아가요.",
      },
      {
        q: "Claude Squad는 아직 관리되고 있나요?",
        a: "네. 최신 릴리스는 2026년 8월 20일에 나온 v1.0.20이에요.",
      },
      {
        q: "Claude Squad와 Conductor 중 무엇을 고를까요?",
        a: "Conductor는 Meta에 합류하며 서비스를 정리하고 있고, 클라우드는 2026년 11월 20일에 끝나요. Claude Squad는 오픈소스이고 계속 개발되고 있어요.",
      },
      {
        q: "Claude Code에 worktree가 생겼는데 Claude Squad가 아직 필요한가요?",
        a: "격리만 필요하다면 아니에요. `claude --worktree`로 세션마다 별도 브랜치를 쓸 수 있어요. 하지만 터미널 화면 하나에서 여러 세션을 관리하거나 Claude Code 외의 에이전트를 쓰고 싶다면 Claude Squad가 여전히 유용해요.",
      },
    ],
  },
  cta: {
    title: "분대가 아니라 팀을 굴리세요.",
    text: "Crewmark는 Claude Code, Codex, DeepSeek Harness, OpenCode 세션을 직무, 목표, 근무 시간, 하트비트를 가진 AI 직원으로 바꿔요.",
    button: "시작하기",
  },
  checked: "2026년 11월 7일에 Claude Squad의 README와 릴리스, 각 대안의 공식 사이트나 저장소와 대조해 확인했어요.",
  disclaimer:
    "Crewmark는 독립 제품이며 smtg-ai, Claude Squad, Paradev, Kanban Code, Conductor, Anthropic, OpenAI와 제휴 관계가 아니고 그들의 보증을 받지 않았어요. 제품 이름은 각 소유자의 상표예요.",
};
