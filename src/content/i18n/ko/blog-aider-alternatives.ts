import type { GuideCopy } from "@/components/landing/guide-article";
import { plan } from "@/lib/pricing";

// ko translation of /blog/aider-alternatives; the English master is src/content/blog/aider-alternatives.ts.

const free = plan("free");
const pro = plan("pro");

const install = `# cecli, Aider의 커뮤니티 포크
curl -LsSf https://cecli.dev/install.sh | sh

# OpenCode
curl -fsSL https://opencode.ai/v2/install | bash

# Pi
curl -fsSL https://pi.dev/install.sh | sh

# Nanocoder (Ollama로 로컬 모델 실행)
npm install -g @nanocollective/nanocoder

# Codex CLI
npm install -g @openai/codex`;

const conventions = `# Aider는 --read로 규칙 파일을 불러옴
aider --read CONVENTIONS.md

# OpenCode와 Codex는 저장소 루트의 AGENTS.md를 읽음
mv CONVENTIONS.md AGENTS.md

# Claude Code는 CLAUDE.md를 읽음. 거기서 같은 파일을 가져오기
echo "@AGENTS.md" >> CLAUDE.md`;

export const copy: GuideCopy = {
  meta: {
    title: "Aider 대안 (2026): Aider는 끝났을까? 지금 쓸 도구",
    description:
      "Aider는 아직 유지보수되고 있을까? 마지막 릴리스, 마지막 커밋, 열린 이슈를 확인하고, 2026년 최고의 Aider 대안인 cecli 포크, OpenCode, Pi, Crush, Cline, Nanocoder, Codex CLI, Claude Code를 설치 명령과 함께 정리했어요.",
  },
  breadcrumb: "Aider 대안",
  parent: { name: "블로그", href: "/blog" },
  article: { published: "2026-11-10" },
  hero: {
    kicker: "블로그 · 코딩 에이전트",
    title: "2026년 Aider 대안: Aider는 끝났을까, 대신 무엇을 쓸까",
    lead: "Aider는 터미널 AI 페어 프로그래머의 원조였어요. 오픈 소스이고, 어떤 모델이든 쓸 수 있고, 저장소 지도를 만들고, 변경마다 git 커밋을 남겼죠. 지금도 설치하고 실행할 수 있고 GitHub 스타는 약 5만 개예요. 하지만 GitHub의 마지막 태그 릴리스는 2025년 8월, 마지막 커밋은 2026년 5월 22일이라서 새 모델을 따라가는 도구를 찾는 사용자가 많아요. 프로젝트의 현재 상태, Aider 방식에 가장 가까운 대안, 설정을 옮기는 법을 정리했어요.",
    cta: "시작하기",
    secondary: "Aider는 끝났을까?",
    secondaryHref: "#is-aider-dead",
  },
  sections: [
    {
      kind: "text",
      id: "is-aider-dead",
      title: "Aider는 끝났을까?",
      text: [
        "공식적으로는 아니에요. 저장소가 보관(archive) 처리되지 않았고 종료를 발표한 사람도 없어요. 하지만 공개된 신호를 보면 유지보수가 거의 멈춘 상태예요.",
      ],
      points: [
        "GitHub 마지막 태그 릴리스: v0.86.0, 2025년 8월 9일. PyPI의 마지막 패키지 aider-chat 0.86.2는 2026년 2월 12일에 올라왔어요.",
        "main 브랜치 마지막 커밋: 2026년 5월 22일, 새 Claude 모델 이름을 추가한 머지였어요.",
        "열린 이슈와 풀 리퀘스트가 약 1,960개예요.",
        "2026년 1월 한 사용자가 Aider의 앞날을 묻는 이슈를 열었어요. 한 답글은 사실상 1인 프로젝트이고 속도가 느려졌다고 했고, 메인테이너는 거기에 답하지 않았어요.",
        "README에는 아직도 Aider가 Claude 3.7 Sonnet, DeepSeek R1, o3-mini, GPT-4o에서 가장 잘 동작한다고 적혀 있어요.",
      ],
    },
    {
      kind: "text",
      title: "빠르게 고르기",
      points: [
        "Aider 그대로, 하지만 계속 업데이트되는 것: Aider의 커뮤니티 포크인 cecli.",
        "가장 인기 있는 오픈 소스 터미널 에이전트, 모델 자유: OpenCode, MIT, 스타 약 22만 6천 개.",
        "Aider의 미니멀한 정신: Pi, 직접 확장하는 작은 하네스, MIT, 스타 약 12만 1천 개.",
        "많은 Aider 사용자처럼 로컬 모델 우선: Ollama와 함께 쓰는 Nanocoder.",
        "코드 주석으로 변경을 요청하는 Aider의 watch 모드: VS Code와 JetBrains 안의 Cline이나 Kilo Code.",
        "어차피 ChatGPT나 Claude 구독이 있다면: Codex CLI나 Claude Code.",
        "입력할 때만이 아니라 정해진 일정에 따라 백로그를 처리하는 에이전트: Claude Code나 Codex 위에서 돌아가는 Crewmark.",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Aider 대안 비교",
      text: [
        "스타 수는 2026년 11월 10일 GitHub API 기준 반올림 값이고, “마지막 커밋”은 그날 main 브랜치의 최신 커밋이에요.",
      ],
      headers: ["도구", "라이선스", "언어", "모델", "비용", "잘 맞는 경우"],
      rows: [
        ["[Aider](https://github.com/Aider-AI/aider)", "Apache 2.0 (스타 ~5만)", "Python", "로컬을 포함해 거의 모든 모델", "무료, 모델 키는 직접", "기준점. 마지막 커밋 2026년 5월 22일"],
        ["[cecli](https://github.com/cecli-dev/cecli)", "Apache 2.0 (스타 ~420)", "Python", "Aider와 같음", "무료, 모델 키는 직접", "아직 업데이트되는 포크로 Aider에 가깝게 머물기"],
        ["[OpenCode](https://github.com/anomalyco/opencode)", "MIT (스타 ~22.6만)", "TypeScript", "모든 제공자, 로컬 모델", "일일 한도가 있는 무료 모델, Go 월 $10", "Plan·Build 모드와 데스크톱 앱을 갖춘 완전한 터미널 에이전트"],
        ["[Pi](https://github.com/earendil-works/pi)", "MIT (스타 ~12.1만)", "TypeScript", "내 구독이나 API 키", "무료", "도구와 스킬로 확장하는 미니멀한 하네스"],
        ["[Crush](https://github.com/charmbracelet/crush)", "FSL-1.1-MIT (스타 ~2.9만)", "Go", "대부분의 제공자, Ollama", "무료, 키는 직접", "LSP와 MCP를 갖춘 세련된 터미널 UI, 모든 플랫폼 지원"],
        ["[Cline](https://github.com/cline/cline)", "Apache 2.0 (스타 ~7.1만)", "TypeScript", "내 모델 키", "무료", "VS Code, JetBrains, 터미널에서 쓰는 에이전트"],
        ["[Kilo Code](https://github.com/Kilo-Org/kilocode)", "MIT (스타 ~2.8만)", "TypeScript", "500개 이상, 제공자 요금 그대로", "무료로 시작", "IDE 확장과 OpenCode에서 포크한 CLI"],
        ["[Nanocoder](https://github.com/Nano-Collective/nanocoder)", "MIT (스타 ~2.6천)", "TypeScript", "Ollama 또는 OpenAI 호환 API", "무료", "개인적이고 로컬 우선인 코딩"],
        ["[Codex CLI](https://github.com/openai/codex)", "Apache 2.0 (스타 ~13.4만)", "Rust", "OpenAI", "Free를 포함한 모든 ChatGPT 요금제, 또는 API 키", "빠른 네이티브 에이전트를 원하는 ChatGPT 사용자"],
        ["[Claude Code](https://code.claude.com/docs)", "독점", "-", "Anthropic", "Claude Pro 월 $20", "Claude 사용자"],
        ["[Plandex](https://github.com/plandex-ai/plandex)", "MIT (스타 ~1.6만)", "Go", "여러 제공자", "무료, 모델 키는 직접", "대형 프로젝트. 마지막 커밋 2025년 10월 3일"],
        ["[Crewmark](/pricing)", "독점", "-", "내 Claude Code나 Codex를 통해", `무료 요금제(프로젝트 ${free.projects}개, AI 직원 ${free.employees}명), Pro 월 $${pro.price} 출시 예정`, "직무, 근무 시간, 하트비트를 갖추고 보드에서 다음 이슈를 가져가는 에이전트"],
      ],
    },
    {
      kind: "steps",
      id: "open-source",
      title: "지금 설치할 수 있는 오픈 소스 Aider 대안",
      text: [
        "모두 명령 하나로 설치돼요. 스크립트를 셸로 파이프하기 전에 내용을 먼저 읽어 보세요.",
      ],
      steps: [
        {
          title: "cecli, Aider 포크",
          text: "cecli는 2025년 8월 Aider의 포크로 시작했고 지금도 업데이트돼요. 확장성과 맞춤 설정을 위해 만든 CLI 에이전트라고 스스로 소개하고, macOS, Linux, Windows에서 `cecli` 명령으로 설치되며, PyPI에도 cecli-dev로 올라와 있어요.",
          code: install,
        },
        {
          title: "OpenCode",
          text: "쓰임새로는 Aider에 가장 가까워요. 오픈 소스이고, 터미널이 먼저이고, 로컬을 포함한 200개 이상의 모델 제공자를 쓸 수 있어요. 전체 권한의 Build 에이전트 옆에 읽기 전용 Plan 에이전트, 서브에이전트, 베타 데스크톱 앱이 더해졌어요.",
        },
        {
          title: "Pi와 Nanocoder",
          text: "Pi는 핵심을 작게 유지하고 서브에이전트와 plan 모드를 일부러 뺐어요. 필요한 건 확장과 스킬로 더하면 돼요. Nanocoder는 비영리 단체가 Ollama 로컬 모델용으로 만든 도구로, plan 모드와 architect 모드가 있는데 architect 모드는 Aider 사용자에게 익숙할 거예요.",
        },
      ],
      source: { label: "출처: 각 프로젝트의 GitHub README", href: "https://github.com/cecli-dev/cecli" },
    },
    {
      kind: "steps",
      id: "migrate",
      title: "Aider에서 다른 에이전트로 옮기기",
      steps: [
        {
          title: "규칙 파일 옮기기",
          text: "Aider는 `--read`로 불러온 파일에서 코딩 규칙을 읽어요. OpenCode와 Codex는 저장소 루트의 `AGENTS.md`를 읽고, Claude Code는 `AGENTS.md`를 가져올 수 있는 `CLAUDE.md`를 읽어요. [Codex용 AGENTS.md](/blog/codex-agents-md)와 [CLAUDE.md](/blog/claude-md)를 참고하세요.",
          code: conventions,
        },
        {
          title: "커밋 방식 정하기",
          text: "Aider는 변경마다 생성된 메시지로 커밋해요. Claude Code, Codex, OpenCode는 기본적으로 커밋을 나에게 맡기니까, 변경이 끝나면 커밋을 요청하거나 커밋 규칙을 AGENTS.md에 적어 두세요.",
        },
        {
          title: "쓰던 모델 가져오기",
          text: "Aider를 DeepSeek이나 로컬 모델로 돌렸다면 OpenCode, Crush, Nanocoder, Pi 모두 내 키를 받고, 앞의 세 도구는 Ollama와도 연결돼요. 반대 방향은 [Claude Code와 DeepSeek](/blog/claude-code-deepseek)을 참고하세요.",
        },
      ],
    },
    {
      kind: "text",
      id: "vs",
      title: "Aider vs OpenCode, Claude Code, Pi, Cline",
      points: [
        "Aider vs OpenCode: 둘 다 오픈 소스이고 모델에 묶이지 않아요. OpenCode는 일주일에 커밋이 100개 넘게 올라오고 에이전트, 서브에이전트, MCP, 데스크톱 앱까지 갖췄어요. Aider는 더 단순하고 커밋을 대신해 줘요.",
        "Aider vs Claude Code: Claude Code는 비공개 소스이고 Anthropic 모델로 돌아가며, 월 $20인 Claude Pro부터 포함돼요. 새 Claude 기능을 가장 먼저 받아요. Aider는 무료이고 어떤 모델과도 써요.",
        "Aider vs Pi: 둘 다 일부러 작게 만들었어요. Pi는 활발히 개발 중이고 SDK, RPC 모드, 확장용 패키지 시스템이 있어요.",
        "Aider vs Cline: Cline은 주로 에디터 안에서 쓰고 CLI도 있어요. Aider는 터미널 우선이고 에디터 주석을 위한 watch 모드가 있어요.",
        "Aider vs Codex: Codex CLI는 Rust로 만든 오픈 소스이고 모든 ChatGPT 요금제에 포함되며, OpenAI 모델로 돌아가요.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Crewmark와 함께",
      title: "페어 프로그래머에서 백로그를 가진 팀원으로",
      text: [
        "Aider도, 여기 나온 모든 도구도 내 다음 메시지를 기다려요. Crewmark는 내 Claude Code나 Codex를 직무, 수치로 된 목표, 근무 시간, 하트비트를 갖춘 AI 직원으로 바꿔 줘요. 근무 시간에는 스스로 깨어나 보드에서 다음 이슈를 가져가고, 커밋하고 풀 리퀘스트를 열고, 결정이 필요하면 메시지를 보내요.",
      ],
      steps: [
        {
          title: "내 에이전트로 직원 채용하기",
          text: "Claude Code나 Codex 대화에서 설정 명령을 실행하면 그 대화가 직원이 돼요. [AI 소프트웨어 엔지니어](/ai-employees/software-engineer)를 참고하세요.",
        },
        {
          title: "근무 시간과 하트비트 주기",
          text: "정해 둔 시간 동안 15~240분마다 깨어나요. [Claude Code를 24시간 돌리는 법](/blog/run-claude-code-24-7)을 참고하세요.",
        },
        {
          title: "나머지도 비교하기",
          text: "다른 터미널 에이전트는 [OpenCode 대안](/blog/opencode-alternatives)을, 에디터는 [Cursor 대안](/blog/cursor-alternatives)을 보세요.",
        },
      ],
    },
  ],
  mid: {
    title: "프롬프트 사이에도 계속 일하는 에이전트가 필요하신가요?",
    text: "Crewmark 직원은 근무 시간 동안 하트비트에 맞춰 깨어나 보드에서 다음 이슈를 가져가요.",
    button: "시작하기",
  },
  faq: {
    title: "FAQ",
    items: [
      {
        q: "Aider는 끝났나요?",
        a: "보관 처리되지 않았고 지금도 설치하고 실행할 수 있어요. 하지만 마지막 GitHub 릴리스는 2025년 8월의 v0.86.0, 마지막 PyPI 릴리스는 2026년 2월, 마지막 커밋은 2026년 5월 22일이고, 2026년 1월에 앞날을 물은 질문에도 메인테이너의 답이 없어요.",
      },
      {
        q: "Aider는 아직 유지보수되나요?",
        a: "거의 안 돼요. 2026년 5월 22일 이후 커밋이 없고, 이슈와 풀 리퀘스트 약 1,960개가 열려 있으며, README는 여전히 2025년 초 모델을 권해요. 커뮤니티 포크인 cecli는 아직 업데이트되고 있어요.",
      },
      {
        q: "Aider 포크가 있나요?",
        a: "네. cecli는 2025년 8월에 시작된 Aider의 GitHub 포크로, Apache 2.0이고 `cecli` 명령으로 설치돼요. 스타 약 420개로 Aider보다 훨씬 작아요.",
      },
      {
        q: "Aider vs OpenCode, 2026년에는 어느 쪽이 나을까요?",
        a: "대부분은 OpenCode예요. Aider처럼 오픈 소스이고 모델에 묶이지 않지만, 거의 매일 업데이트되고 서브에이전트, MCP, 데스크톱 앱까지 있어요. Aider는 더 단순하고 변경마다 커밋해 줘요.",
      },
      {
        q: "Aider는 무료인가요?",
        a: "네. Aider는 Apache 2.0이고 무료예요. 모델 제공자 비용만 내면 되고, 로컬 모델을 쓰면 그마저 들지 않아요.",
      },
      {
        q: "가장 좋은 무료 Aider 대안은?",
        a: "OpenCode는 일일 한도가 있는 무료 모델을 제공하고, Nanocoder, Crush, OpenCode는 Ollama로 로컬 모델을 무료로 돌려요. Codex CLI는 무료 ChatGPT 계정으로도 써요.",
      },
    ],
  },
  cta: {
    title: "코딩 에이전트에 프롬프트만이 아니라 백로그를 맡기세요.",
    text: "Crewmark는 Claude Code와 Codex 세션을 직무, 목표, 근무 시간, 하트비트를 갖춘 AI 직원으로 바꿔 줘요.",
    button: "시작하기",
  },
  checked: "2026년 11월 10일에 각 프로젝트의 GitHub 저장소, README, 릴리스, PyPI, 공급사 가격 페이지와 대조해 확인했습니다.",
  disclaimer:
    "Crewmark는 독립 제품으로, Aider나 여기 소개한 어떤 프로젝트와도 제휴하거나 보증을 받지 않았습니다. 제품명은 각 소유자의 상표입니다.",
};
