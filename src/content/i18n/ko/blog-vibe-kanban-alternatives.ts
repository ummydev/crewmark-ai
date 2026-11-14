import type { GuideCopy } from "@/components/landing/guide-article";

// Korean translation of /blog/vibe-kanban-alternatives; the English master is src/content/blog/vibe-kanban-alternatives.ts.

const shutdown = "https://www.vibekanban.com/blog/shutdown";

const keep = `# Keep running the local, community-maintained app
npx vibe-kanban

# Find the worktrees it made, then push the branches you want to keep
git worktree list
cd <worktree path>
git add -A && git commit -m "WIP from Vibe Kanban"
git push -u origin HEAD`;

export const copy: GuideCopy = {
  meta: {
    title: "Vibe Kanban 종료 이후 대안 (2026 비교) | Crewmark AI",
    description:
      "Vibe Kanban 회사가 문을 닫으면서 클라우드 보드도 사라졌어요. 아직 되는 기능, issue를 지키는 방법, 그리고 보드에서 Claude Code와 Codex를 돌리는 대안 Paradev, Nimbalyst, Claude Squad, Kanban Code, Crewmark를 정리했어요.",
  },
  breadcrumb: "Vibe Kanban 대안",
  parent: { name: "블로그", href: "/blog" },
  article: { published: "2026-11-07" },
  hero: {
    kicker: "블로그 · AI 코딩 에이전트",
    title: "Vibe Kanban 대안: 이제 어디서 보드로 에이전트를 돌릴까",
    lead: "Vibe Kanban에서는 코딩 에이전트 작업을 칸반 이슈로 계획하고, 이슈마다 워크스페이스를 띄우고, diff를 리뷰한 뒤 풀 리퀘스트를 열 수 있었어요. Claude Code, Codex를 비롯해 에이전트 10종을 지원했죠. 2026년 4월 10일, 개발사 bloop가 회사를 닫는다고 발표했어요. 오픈소스 앱은 여전히 로컬에서 돌아가지만, 호스팅되던 이슈, 댓글, 프로젝트, 조직은 사라졌고 마지막 릴리스는 2026년 4월 24일이에요. 이 가이드에서는 아직 되는 것, 작업을 지키는 방법, 대안을 다뤄요.",
    cta: "시작하기",
    secondary: "대안 비교하기",
    secondaryHref: "#alternatives",
  },
  sections: [
    {
      kind: "text",
      title: "Vibe Kanban에 무슨 일이 있었나",
      text: [
        "bloop에 따르면 사용자 대부분이 무료 플랜이었고, 계속 밀고 나가고 싶은 비즈니스 모델을 찾지 못했다고 해요. 발표 후 30일 동안 원격 서비스가 유지됐고, 그 뒤 Vibe Kanban은 완전한 로컬 구조로 바뀌었어요. 프로젝트 페이지는 이제 데이터 내보내기로 연결돼요. 직전 30일 안에 결제된 청구서는 환불됐어요.",
      ],
      points: [
        "아직 되는 것: `npx vibe-kanban`으로 로컬 앱이 실행되고, 로컬 워크스페이스도 계속 동작해요. 코드는 Apache 2.0 오픈소스로 남아 커뮤니티가 관리해요.",
        "사라진 것: 팀이 함께 쓰던 호스팅 칸반 이슈, 댓글, 프로젝트, 조직.",
        "멈춰 가는 것: 2026년 4월 24일 v0.1.44 이후로 릴리스가 없어서, 새 에이전트 버전을 따라가지 못하고 있어요.",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "작업을 지키는 방법",
      steps: [
        {
          title: "데이터 내보내기",
          text: "최신 버전 앱을 열고 데이터 내보내기 기능을 쓰세요. 프로젝트 페이지에서도 바로 연결돼요.",
        },
        {
          title: "중요한 브랜치는 모두 푸시하기",
          text: "워크스페이스마다 자기 브랜치를 가진 git worktree였어요. 남기고 싶은 것은 커밋하고 푸시해서, 코드가 앱이 아니라 내 저장소에 남게 하세요.",
          code: keep,
        },
        {
          title: "열린 이슈를 공유된 곳으로 옮기기",
          text: "팀이 호스팅 보드를 썼다면, 무슨 내용이었는지 잊기 전에 GitHub Issues나 새로 고른 도구의 보드에 열린 이슈를 다시 만들어 두세요.",
        },
        {
          title: "새 도구에서 실제 작업 하나 돌려 보기",
          text: "아래 선택지를 비교하고, 전부 옮기기 전에 이슈 하나를 시작부터 풀 리퀘스트까지 돌려 보세요.",
        },
      ],
      source: { label: "출처: Vibe Kanban 종료 공지", href: shutdown },
    },
    {
      kind: "table",
      id: "alternatives",
      title: "Vibe Kanban 대안 비교",
      text: ["2026년 11월 7일 기준 각 프로젝트의 공식 사이트나 GitHub 저장소에 나온 정보예요."],
      headers: ["", "무엇인가", "에이전트", "플랫폼", "보드", "라이선스"],
      rows: [
        ["Vibe Kanban (커뮤니티)", "로컬 앱: 칸반 이슈, 이슈마다 워크스페이스, diff 리뷰, PR", "Claude Code, Codex, Gemini CLI, Copilot, Amp, Cursor, OpenCode 등", "`npx`로 실행, 원격은 Docker로", "있음, 지금은 로컬 전용", "Apache 2.0"],
        ["Paradev (구 Superset)", "여러 에이전트를 병렬로 돌리는 데스크톱 워크스페이스, 에이전트마다 worktree, 자동화와 클라우드 샌드박스", "Claude, Codex, Cursor Agent, OpenCode 및 모든 CLI 에이전트", "macOS, Linux는 실험적, Windows는 아직 미지원", "보드 언급 없음", "MIT"],
        ["Nimbalyst", "에이전트, 작업, 문서, 위키, 다이어그램, 코드를 한곳에 모은 비주얼 워크스페이스", "Claude Code, Codex", "macOS, Windows, Linux", "작업을 문서, 코드와 함께 관리", "오픈소스, 개인 무료"],
        ["Claude Squad", "터미널 앱: 에이전트마다 tmux 세션과 git worktree", "Claude Code, Codex, Gemini, Aider", "tmux와 gh 필요", "없음 (TUI 목록)", "AGPL-3.0"],
        ["Kanban Code", "Claude Code 세션용 칸반 보드, 카드마다 worktree", "Claude Code", "macOS 26 앱, Windows (Tauri)", "Backlog, In Progress, Waiting, In Review, Done", "Apache 2.0"],
        ["Crewmark", "AI 직원: 직무, 목표, 근무 시간을 가진 에이전트 세션이 하트비트로 다음 이슈를 가져감", "Claude Code, Codex, DeepSeek Harness, OpenCode", "웹 보드, 데몬은 macOS, Windows, Linux", "있음, 호스팅되고 팀과 공유", "상용"],
      ],
    },
    {
      kind: "text",
      title: "나에게 맞는 Vibe Kanban 대안",
      points: [
        "같은 앱을 그대로 쓰고 싶다면: 커뮤니티 버전을 로컬에서 계속 쓰면서, 관리되는 포크가 나오는지 저장소를 지켜보세요.",
        "주로 병렬 에이전트와 diff 리뷰에 썼다면: 유지보수되는 데스크톱 앱 중에서는 Paradev가 가장 가깝고, Mac과 Linux에서 돌아가요. Claude Code 자체의 `--worktree` 플래그로도 격리된 병렬 세션을 돌릴 수 있어요. [Claude Code worktree 가이드](/blog/claude-code-worktree)를 보세요.",
        "터미널에서 산다면: Claude Squad가 에이전트마다 tmux 세션과 worktree를 줘요.",
        "보드 자체가 필요하고 Claude Code만 쓴다면: Kanban Code가 세션이 시작되고, 기다리고, PR을 열 때마다 카드를 열 사이로 옮겨 줘요.",
        "팀과 호스팅 보드를 썼거나, 내가 시키지 않아도 에이전트가 이슈를 가져가길 원한다면: 그게 Crewmark예요(아래 참고). Conductor도 선택지였지만 [Meta에 합류하며 서비스를 정리하고 있어요](/blog/conductor-alternatives).",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Crewmark로",
      title: "Vibe Kanban은 카드마다 내가 시작하길 기다렸어요. Crewmark는 기다리지 않아요.",
      text: [
        "Vibe Kanban에서는 이슈를 쓰고 나서 에이전트를 직접 시작했어요. Crewmark는 보드를 호스팅해 팀과 공유하는 형태로 유지하고, Claude Code, Codex, DeepSeek Harness, OpenCode 세션을 AI 직원으로 바꿔요. 직원은 근무 시간 동안 하트비트로 깨어나 다음 이슈를 스스로 가져가요. 이미 결제한 요금제 그대로요.",
      ],
      steps: [
        {
          title: "저장소와 에이전트 가져오기",
          text: "프로젝트에서 셋업 명령어를 실행하세요. Vibe Kanban 워크스페이스처럼 직원마다 자기 세션과 체크아웃에서 일해요.",
        },
        {
          title: "보드 다시 만들기",
          text: "열린 이슈를 추가해 직원에게 배정하거나, 배정하지 않고 비어 있는 직원이 가져가게 두세요.",
        },
        {
          title: "하트비트로 일을 시작하게 하기",
          text: "15분, 30분, 60분마다 직원이 다음 이슈를 가져가고, 진행하면서 댓글을 남기고, 결정이 필요하면 메시지를 보내요. [AI 직원이란](/ai-employees)을 읽어 보세요.",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Vibe Kanban 종료 후 작업 지키기" },
  mid: {
    title: "호스팅 보드를 잃었나요? 보드는 그대로, 직원을 더하세요.",
    text: "Crewmark는 팀에 공유 보드를 주고, Claude Code와 Codex 직원이 하트비트로 다음 이슈를 가져가요.",
    button: "시작하기",
  },
  faq: {
    title: "Vibe Kanban 종료 FAQ",
    items: [
      {
        q: "Vibe Kanban이 종료되나요?",
        a: "문을 닫는 건 회사예요. bloop는 2026년 4월 10일 회사를 닫는다고 발표했어요. 오픈소스 앱은 로컬에서 돌아가는 커뮤니티 관리 프로젝트로 이어지고, 호스팅되던 이슈, 댓글, 프로젝트, 조직은 30일 뒤 삭제됐어요.",
      },
      {
        q: "Vibe Kanban은 아직 동작하나요?",
        a: "로컬에서는 돼요. `npx vibe-kanban`으로 여전히 실행되고 로컬 워크스페이스도 동작해요. 최신 릴리스가 2026년 4월 24일의 v0.1.44라서, 새 에이전트 버전은 지원되지 않을 수 있어요.",
      },
      {
        q: "Vibe Kanban 데이터는 어떻게 내보내나요?",
        a: "최신 버전 앱의 데이터 내보내기 기능을 쓰세요. 프로젝트 페이지에서도 바로 연결돼요. 워크스페이스 브랜치도 git 원격 저장소에 푸시해 두세요.",
      },
      {
        q: "가장 좋은 Vibe Kanban 대안은 무엇인가요?",
        a: "diff 리뷰가 있는 병렬 에이전트는 Paradev(구 Superset), Claude Code 세션 칸반은 Kanban Code, 터미널 워크플로는 Claude Squad, 에이전트가 스스로 이슈를 가져가는 공유 보드는 Crewmark예요.",
      },
      {
        q: "오픈소스 Vibe Kanban 대안이 있나요?",
        a: "네. Paradev(MIT), Claude Squad(AGPL-3.0), Kanban Code(Apache 2.0)가 오픈소스이고, Vibe Kanban 자체도 Apache 2.0 오픈소스로 남아 있어요.",
      },
      {
        q: "Windows용 Vibe Kanban 대안이 있나요?",
        a: "Nimbalyst는 Windows 다운로드를 제공하고, Kanban Code도 Windows 앱이 있어요. Crewmark 보드는 브라우저에서 돌아가고 데몬은 Windows에서 실행돼요. Paradev는 아직 Windows를 지원하지 않아요.",
      },
    ],
  },
  cta: {
    title: "에이전트에게 새 보드가 필요해요. 일자리도 함께 주세요.",
    text: "Crewmark는 Claude Code, Codex, DeepSeek Harness, OpenCode 세션을 직무, 목표, 근무 시간, 하트비트를 갖춘 AI 직원으로 바꿔 줘요.",
    button: "시작하기",
  },
  checked: "2026년 11월 7일에 Vibe Kanban의 README, 릴리스, 종료 공지와 각 대안의 공식 사이트나 저장소와 대조해 확인했어요.",
  disclaimer:
    "Crewmark는 독립 제품이며 bloop, Vibe Kanban, Paradev, Nimbalyst, Claude Squad, Kanban Code, Anthropic, OpenAI와 제휴 관계가 아니고 그들의 보증을 받지 않았어요. 제품 이름은 각 소유자의 상표예요.",
};
