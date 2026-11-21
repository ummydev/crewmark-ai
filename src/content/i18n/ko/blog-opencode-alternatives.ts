import type { GuideCopy } from "@/components/landing/guide-article";
import { plan } from "@/lib/pricing";

// ko translation of /blog/opencode-alternatives; the English master is src/content/blog/opencode-alternatives.ts.

const free = plan("free");
const pro = plan("pro");

const install = `# Pi (macOS와 Linux. Windows는 PowerShell 설치 스크립트 제공)
curl -fsSL https://pi.dev/install.sh | sh

# Crush
brew install charmbracelet/tap/crush    # 또는: npm install -g @charmland/crush

# Kilo CLI (OpenCode의 포크)
npm install -g @kilocode/cli

# Nanocoder
npm install -g @nanocollective/nanocoder

# Freebuff (무료, 텍스트 광고로 운영)
npm install -g freebuff

# Codex CLI
npm install -g @openai/codex

# Goose CLI
curl -fsSL https://github.com/aaif-goose/goose/releases/download/stable/download_cli.sh | bash`;

const local = `# Ollama에서 돌아가는 모델로 Nanocoder 실행
nanocoder --provider ollama --model llama3.1

# Crush: crushrc에 Ollama 추가
provider add ollama --type ollama --base-url "http://localhost:11434/v1"
model add ollama/llama3.3 --name "Llama 3.3" --context-window 128000`;

export const copy: GuideCopy = {
  meta: {
    title: "OpenCode 대안 (2026): 무료, 오픈 소스, 로컬",
    description:
      "2026년 최고의 OpenCode 대안: 오픈 소스 터미널 에이전트(Pi, Crush, Kilo CLI, Goose, Cline, Nanocoder), API 키 없는 무료 옵션, Rust·Windows용 선택지, 로컬 LLM, GUI, 그리고 Claude Code, Codex, Copilot CLI.",
  },
  breadcrumb: "OpenCode 대안",
  parent: { name: "블로그", href: "/blog" },
  article: { published: "2026-11-10" },
  hero: {
    kicker: "블로그 · 코딩 에이전트",
    title: "2026년 최고의 OpenCode 대안: 무료, 오픈 소스, 로컬",
    lead: "OpenCode는 GitHub 스타 약 22만 6천 개로 가장 많은 스타를 받은 오픈 소스 코딩 에이전트 중 하나예요. 어떤 모델 제공자와도 쓸 수 있는 MIT 라이선스 터미널 에이전트이고, 베타 데스크톱 앱도 있어요. 그래도 다른 도구를 찾는 이유는 몇 가지예요. 내 워크플로에 맞게 고칠 수 있는 더 작은 하네스, Go나 Rust 단일 바이너리, 더 나은 로컬 모델 지원, 터미널 대신 앱, API 키가 필요 없는 무료 옵션, 또는 회사가 이미 비용을 내는 에이전트. 경우별 대안을 각 프로젝트 페이지에 나온 라이선스, 설치 명령, 가격과 함께 정리했어요.",
    cta: "시작하기",
    secondary: "설치 명령",
    secondaryHref: "#open-source",
  },
  sections: [
    {
      kind: "text",
      title: "빠르게 고르기",
      points: [
        "직접 다듬는 미니멀한 에이전트: Pi, MIT 라이선스, 스타 약 12만 1천 개.",
        "Windows와 Android까지 어디서나 돌아가는 세련된 터미널 앱: Charm의 Crush.",
        "IDE와 클라우드 에이전트를 두른 OpenCode: OpenCode의 포크인 Kilo CLI.",
        "API 키 없이 무료: 텍스트 광고로 운영되는 Freebuff.",
        "로컬 모델 우선: 비영리 단체가 만든 Nanocoder.",
        "Rust로 작성: Codex CLI나 Goose.",
        "이미 Claude, ChatGPT, Copilot에 돈을 내고 있다면: Claude Code, Codex CLI, GitHub Copilot CLI.",
        "입력할 때만이 아니라 정해진 일정에 따라 계속 일하는 에이전트: Claude Code나 Codex 위에서 돌아가는 Crewmark.",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "OpenCode 대안 비교",
      text: [
        "스타 수는 2026년 11월 10일 GitHub API 기준 반올림 값이에요. 비용은 시작하는 데 필요한 금액이고, 오픈 소스 에이전트는 대부분 무료라서 모델 제공자 비용만 내면 돼요.",
      ],
      headers: ["도구", "라이선스", "언어", "실행 환경", "비용", "잘 맞는 경우"],
      rows: [
        ["[OpenCode](https://github.com/anomalyco/opencode)", "MIT (스타 ~22.6만)", "TypeScript", "터미널, 데스크톱 앱(베타)", "일일 한도가 있는 무료 모델, Go 월 $10, Go Plus 월 $40", "기준점: 모든 제공자, 로컬 모델, Plan·Build 에이전트"],
        ["[Pi](https://github.com/earendil-works/pi)", "MIT (스타 ~12.1만)", "TypeScript", "macOS, Linux, Windows, SDK와 RPC", "무료, 내 구독이나 API 키", "내 도구와 스킬로 확장하는 미니멀한 하네스"],
        ["[Crush](https://github.com/charmbracelet/crush)", "FSL-1.1-MIT (스타 ~2.9만)", "Go", "모든 터미널: macOS, Linux, Windows, Android, BSD", "무료, 내 키나 Charm의 Hyper 모델", "LSP와 MCP를 갖춘 세련된 터미널 UI"],
        ["[Kilo CLI](https://github.com/Kilo-Org/kilocode)", "MIT (스타 ~2.8만)", "TypeScript", "CLI, VS Code, JetBrains, 클라우드", "무료로 시작, 500개 이상 모델을 제공자 요금 그대로(수수료 없음)", "OpenCode 엔진에 IDE 확장과 코드 리뷰를 더한 것"],
        ["[Goose](https://github.com/aaif-goose/goose)", "Apache 2.0 (스타 ~5.6만)", "Rust", "데스크톱 앱, CLI, API", "무료, 모델 키는 직접", "MCP 확장으로 코드와 다른 업무를 함께 하는 에이전트"],
        ["[Cline](https://github.com/cline/cline)", "Apache 2.0 (스타 ~7.1만)", "TypeScript", "CLI, VS Code, JetBrains, SDK", "무료, 모델 키는 직접", "에디터와 터미널에서 쓰는 오픈 소스 에이전트"],
        ["[Nanocoder](https://github.com/Nano-Collective/nanocoder)", "MIT (스타 ~2.6천)", "TypeScript", "터미널", "무료, 로컬 모델이나 OpenAI 호환 API", "Ollama로 하는 개인적이고 로컬 우선인 코딩"],
        ["[Freebuff](https://github.com/CodebuffAI/freebuff)", "Apache 2.0 (스타 ~1.4만)", "TypeScript", "CLI, 데스크톱, 웹, 클라우드", "텍스트 광고로 무료, API 키 불필요", "돈을 내거나 모델에 가입하지 않고 코딩 에이전트 써 보기"],
        ["[Qwen Code](https://github.com/QwenLM/qwen-code)", "Apache 2.0 (스타 ~2.9만)", "TypeScript", "터미널", "Qwen Plus나 Pro 구독, 또는 API 키", "Qwen 모델 사용자"],
        ["[Codex CLI](https://github.com/openai/codex)", "Apache 2.0 (스타 ~13.4만)", "Rust", "터미널, IDE와 데스크톱도 지원", "Free를 포함한 모든 ChatGPT 요금제(Go는 월 $8), 또는 API 키", "빠른 네이티브 바이너리를 원하는 ChatGPT 구독자"],
        ["[Claude Code](https://code.claude.com/docs)", "독점", "-", "터미널, IDE, 데스크톱, 웹", "Claude Pro 월 $20", "Anthropic이 직접 만든 에이전트를 원하는 Claude 사용자"],
        ["[GitHub Copilot CLI](https://github.com/github/copilot-cli)", "독점", "-", "macOS, Linux, Windows", "Copilot 요금제, Pro는 월 $10", "이미 Copilot 비용을 내는 팀"],
        ["[Aider](https://github.com/Aider-AI/aider)", "Apache 2.0 (스타 ~5만)", "Python", "터미널", "무료, 모델 키는 직접", "git 중심 페어 프로그래밍. 2026년 5월 22일 이후 커밋 없음([Aider 대안](/blog/aider-alternatives) 참고)"],
        ["[Crewmark](/pricing)", "독점", "-", "내 컴퓨터, 내 Claude Code나 Codex 안에서", `무료 요금제(프로젝트 ${free.projects}개, AI 직원 ${free.employees}명), Pro 월 $${pro.price} 출시 예정`, "직무, 근무 시간, 하트비트를 갖추고 보드에서 다음 이슈를 가져가는 에이전트"],
      ],
    },
    {
      kind: "steps",
      id: "open-source",
      title: "지금 설치할 수 있는 오픈 소스 OpenCode 대안",
      text: [
        "모두 명령 하나로 설치돼요. 스크립트를 셸로 파이프하기 전에 내용을 먼저 읽어 보세요.",
      ],
      steps: [
        {
          title: "Pi",
          text: "미니멀하고 확장 가능한 에이전트 하네스예요. 적당한 기본값을 갖췄지만 서브에이전트와 plan 모드는 일부러 뺐어요. 확장, 스킬, 프롬프트 템플릿으로 더하거나 Pi에게 만들어 달라고 하면 돼요. `/login`으로 구독이나 API 키를 연결하세요. Pi에는 권한 시스템이 없으니 경계가 필요하면 컨테이너나 샌드박스에서 돌리세요. 문서에 세 가지 방법이 나와 있어요.",
          code: install,
        },
        {
          title: "Crush",
          text: "Charm이 Go로 만든 터미널 에이전트예요. 언어 서버에서 컨텍스트를 읽고, http, stdio, sse로 MCP 서버를 붙이고, 세션 도중에 모델을 바꿀 수 있어요. Homebrew, npm, winget, scoop, apt, pkg로 설치되고, README에는 Windows(PowerShell과 WSL), Android, BSD 계열이 나와 있어요. 라이선스는 FSL-1.1-MIT로, 오픈 소스가 아니라 소스 공개 라이선스예요.",
        },
        {
          title: "Kilo CLI",
          text: "Kilo의 README에 따르면 CLI는 OpenCode의 포크예요. 그 위에 VS Code와 JetBrains 확장, 클라우드 에이전트, 자동 풀 리퀘스트 리뷰, 작업 도중 바꿀 수 있는 500개 이상의 모델을 더했어요. MIT 라이선스예요.",
        },
        {
          title: "Goose, Cline, Nanocoder",
          text: "Goose는 데스크톱 앱과 CLI를 갖춘 Rust 에이전트로, 지금은 Linux Foundation 산하 Agentic AI Foundation에 속해 있어요. Cline은 CLI, 에디터 확장, SDK로 쓸 수 있어요. Nanocoder는 Nano Collective가 만든 로컬 우선 터미널 에이전트로, normal, auto-accept, yolo, plan, architect 모드가 있고, 브랜치를 리뷰하거나 풀 리퀘스트를 별도 워크트리에 체크아웃하는 명령도 있어요.",
        },
      ],
      source: { label: "출처: 각 프로젝트의 GitHub README", href: "https://github.com/earendil-works/pi" },
    },
    {
      kind: "text",
      id: "free",
      title: "무료 모델을 쓸 수 있는 OpenCode 대안",
      text: [
        "OpenCode 자체에도 일일 요청 한도가 있는 무료 모델이 있어서, Go 한도를 다 쓰면 그쪽으로 넘어갈 수 있어요. 다른 무료 도구를 원한다면:",
      ],
      points: [
        "Freebuff: 구독, 크레딧, API 키가 필요 없어요. 포함된 모델 비용은 텍스트 광고로 충당하고 기본 모델은 DeepSeek V4.1 Flash예요. 추천과 바운티로 하루 무료 이용 시간을 늘릴 수 있어요.",
        "로컬 모델: Nanocoder, Crush, Goose, OpenCode 모두 Ollama와 연결되니, 비용은 내 하드웨어뿐이에요.",
        "Google 무료 티어: Gemini CLI에는 이제 없어요. README에 따르면 무료 개인 계정과 Google AI Pro·Ultra는 2026년 6월 18일 Antigravity CLI(`agy`)로 옮겨 갔어요.",
        "Codex CLI: 오픈 소스이고 무료 ChatGPT 계정으로 써요.",
        "내 키로 쓰는 오픈 소스 에이전트: Pi, Kilo CLI, Cline, Goose는 도구 자체가 무료이고 모델 비용만 내면 돼요.",
      ],
    },
    {
      kind: "steps",
      id: "local",
      title: "로컬 LLM용 OpenCode 대안",
      text: [
        "OpenCode를 쓰는 이유가 내 컴퓨터에서 모델을 돌리는 거라면, 이 두 도구는 로컬 모델을 가장 우선으로 다뤄요.",
      ],
      steps: [
        {
          title: "Nanocoder",
          text: "Ollama 로컬 모델이나 OpenRouter 같은 OpenAI 호환 API용으로 만들어졌어요. 제공자와 모델을 플래그로 넘기거나, `nanocoder run`으로 비대화형으로 실행하세요.",
          code: local,
        },
        {
          title: "Crush",
          text: "Windows를 포함해 모든 플랫폼에서 똑같이 동작하는 Bash 비슷한 설정 파일 `crushrc`에 Ollama를 제공자로 추가한 다음, 받아 둔 모델을 등록하세요.",
        },
      ],
    },
    {
      kind: "text",
      id: "by-need",
      title: "Rust, Windows, Android, GUI",
      points: [
        "Rust: Codex CLI와 Goose 모두 Rust로 작성됐어요. Crush는 Go 단일 바이너리예요.",
        "Windows: Crush(winget, scoop, npm), Pi(PowerShell 설치 스크립트), GitHub Copilot CLI(winget), OpenCode 데스크톱 앱 모두 네이티브로 돌아가요.",
        "Android: Crush의 README는 지원하는 터미널에 Android를 포함해요.",
        "GUI: macOS, Windows, Linux용 OpenCode 데스크톱 앱(베타), Goose Desktop, 설치된 Claude Code와 Codex도 돌릴 수 있는 Freebuff Desktop, 그리고 VS Code와 JetBrains 안의 Kilo나 Cline.",
        "OpenCode Go는 오픈 웨이트 모델용으로 월 $10이에요(Go Plus는 $40). 프런티어 모델 구독 하나를 원한다면 Codex는 월 $8인 ChatGPT Go에 포함되고, Copilot Pro는 $10, Claude Pro는 $20이에요.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Crewmark와 함께",
      title: "내가 입력하지 않아도 에이전트가 일하게 하고 싶을 때",
      text: [
        "이 목록의 모든 도구는 내 다음 프롬프트를 기다려요. Crewmark는 내 Claude Code나 Codex를 직무, 수치로 된 목표, 근무 시간, 하트비트를 갖춘 AI 직원으로 바꿔 줘요. 근무 시간에는 스스로 깨어나 보드에서 다음 이슈를 가져가고, 결정이 필요하면 메시지를 보내요. 이미 내고 있는 요금제로 내 컴퓨터에서 돌아가요.",
      ],
      steps: [
        {
          title: "내 에이전트로 직원 채용하기",
          text: "Claude Code나 Codex 대화에서 설정 명령을 실행하면 그 대화가 직원이 돼요. [AI 직원이란](/ai-employees)을 참고하세요.",
        },
        {
          title: "근무 시간과 하트비트 주기",
          text: "정해 둔 시간 동안, 밤에도 15~240분마다 깨어나요. [Claude Code를 24시간 돌리는 법](/blog/run-claude-code-24-7)과 [Codex 장시간 작업](/blog/codex-long-running-tasks)을 참고하세요.",
        },
        {
          title: "물어볼 때 답하기",
          text: "결정할 일은 메시지로 오고, 나머지는 모두 보드에 있어요. 더 많은 에이전트 비교는 [Cursor 대안](/blog/cursor-alternatives)과 [Devin 대안](/blog/devin-alternatives)을 보세요.",
        },
      ],
    },
  ],
  mid: {
    title: "프롬프트 사이에도 계속 일하는 코딩 에이전트가 필요하신가요?",
    text: "Crewmark 직원은 근무 시간 동안 하트비트에 맞춰 깨어나 보드에서 다음 이슈를 가져가요.",
    button: "시작하기",
  },
  faq: {
    title: "FAQ",
    items: [
      {
        q: "OpenCode의 가장 좋은 오픈 소스 대안은?",
        a: "직접 확장하는 작은 하네스를 원하면 Pi, 모든 플랫폼에서 돌아가는 세련된 터미널 앱이면 Crush, IDE 확장을 두른 OpenCode 엔진이면 Kilo CLI예요. Goose와 Cline도 Apache 라이선스의 탄탄한 선택지예요.",
      },
      {
        q: "Kilo CLI는 OpenCode 기반인가요?",
        a: "네. Kilo의 README에 따르면 Kilo CLI는 OpenCode의 포크이고, VS Code·JetBrains 확장, 클라우드 에이전트, 코드 리뷰 등 Kilo 플랫폼과 함께 동작하도록 확장됐어요.",
      },
      {
        q: "OpenCode의 무료 대안이 있나요?",
        a: "Freebuff는 API 키 없이 무료이고 텍스트 광고로 운영돼요. Nanocoder, Crush, Goose, OpenCode 자체도 Ollama 로컬 모델로 무료로 쓸 수 있어요. Gemini CLI의 무료 티어는 2026년 6월 Antigravity CLI로 옮겨 갔어요.",
      },
      {
        q: "Rust로 만든 OpenCode 대안이 있나요?",
        a: "OpenAI의 Codex CLI와 Goose 모두 Rust로 작성됐고 Apache 2.0 라이선스예요. Crush는 Go로 작성된 단일 바이너리예요.",
      },
      {
        q: "Crush는 오픈 소스인가요?",
        a: "Crush의 코드는 소스 공개 라이선스인 FSL-1.1-MIT로 공개돼 있어요. OpenCode, Pi, Kilo CLI, Nanocoder는 MIT이고, Goose, Cline, Codex CLI, Qwen Code, Freebuff는 Apache 2.0이에요.",
      },
      {
        q: "OpenCode vs Claude Code, 무엇을 써야 할까요?",
        a: "OpenCode는 로컬 모델을 포함해 어떤 제공자와도 쓸 수 있고 오픈 소스예요. Claude Code는 Anthropic이 직접 만든 비공개 소스 에이전트로, 월 $20인 Claude Pro부터 포함돼요. 어차피 Claude에 돈을 낸다면 Claude Code가 기능을 먼저 받고, 모델을 자주 바꾼다면 OpenCode나 Pi가 더 잘 맞아요.",
      },
    ],
  },
  cta: {
    title: "코딩 에이전트에 프롬프트만이 아니라 일을 맡기세요.",
    text: "Crewmark는 Claude Code와 Codex 세션을 직무, 목표, 근무 시간, 하트비트를 갖춘 AI 직원으로 바꿔 줘요.",
    button: "시작하기",
  },
  checked: "2026년 11월 10일에 각 프로젝트의 GitHub 저장소와 README, opencode.ai, 공급사 가격 페이지와 대조해 확인했습니다.",
  disclaimer:
    "Crewmark는 독립 제품으로, OpenCode나 여기 소개한 어떤 프로젝트와도 제휴하거나 보증을 받지 않았습니다. 제품명은 각 소유자의 상표입니다.",
};
