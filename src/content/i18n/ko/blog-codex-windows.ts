import type { GuideCopy } from "@/components/landing/guide-article";

// Korean translation of /blog/codex-windows; the English master is src/content/blog/codex-windows.ts.

const appDocs = "https://learn.chatgpt.com/docs/windows/windows-app";
const sandboxDocs = "https://learn.chatgpt.com/docs/windows/windows-sandbox";
const wslDocs = "https://learn.chatgpt.com/docs/windows/wsl";

const cliInstall = `# Native Windows installer (run it in a new PowerShell window)
powershell -ExecutionPolicy ByPass -c "irm https://chatgpt.com/codex/install.ps1 | iex"

# Or with npm, if Node.js is installed
npm install -g @openai/codex

# Start Codex and sign in
codex`;

const tools = `winget install --id Git.Git
winget install --id OpenJS.NodeJS.LTS
winget install --id Python.Python.3.14
winget install --id Microsoft.DotNet.SDK.10
winget install --id GitHub.cli
gh auth login`;

const wslInstall = `# In PowerShell, run as administrator
wsl --install
wsl

# Inside WSL: the sandbox needs bubblewrap (apt or dnf), then install Codex
sudo apt install bubblewrap
curl -fsSL https://chatgpt.com/codex/install.sh | sh
codex`;

const mxcTest = `codex -c windows.sandbox=mxc sandbox --include-managed-config --permission-profile :workspace -- cmd.exe /d /c echo MXC_OK`;

const preferMxc = `# config.toml in your Codex home (%USERPROFILE%\\.codex)
[features]
prefer_mxc = true`;

const legacy = `# config.toml in your Codex home (%USERPROFILE%\\.codex)
[windows]
sandbox = "elevated"   # or "unelevated"`;

const provision = `codex sandbox setup --elevated --user 'DOMAIN\\alice' --codex-home 'C:\\Users\\alice\\.codex'`;

export const copy: GuideCopy = {
  meta: {
    title: "Codex Windows: 앱·CLI 설치, 샌드박스, WSL2",
    description:
      "Windows에서 ChatGPT 앱이나 CLI로 Codex 설치, Windows 샌드박스로 PowerShell 또는 WSL2에서 실행, 샌드박스 설정 실패 해결.",
  },
  breadcrumb: "Windows에서 Codex 쓰기",
  parent: { name: "블로그", href: "/blog" },
  article: { published: "2026-11-14" },
  hero: {
    kicker: "블로그 · Codex",
    title: "Windows에서 쓰는 Codex: 앱이나 CLI를 설치하고 샌드박스나 WSL2 고르기",
    lead: "Codex는 Windows에서 네이티브로 돌아가요. 2026년 7월 9일부터 Codex 앱은 ChatGPT 데스크톱 앱의 일부라서, ChatGPT를 설치하고 그 안에서 Codex로 전환하면 돼요. 터미널용 Codex CLI는 PowerShell 명령 하나로 설치돼요. 기본적으로 에이전트는 Windows 샌드박스 아래 PowerShell에서 실행되고, 대신 WSL2로 옮길 수도 있어요. 이 가이드에서는 다운로드와 설치, 세 가지 샌드박스 유형과 각각에 필요한 Windows 버전, 샌드박스 설정이 실패할 때 문서에 나온 해결법, Computer Use, 그리고 휴대폰으로 Windows PC를 제어하는 법을 다뤄요.",
    cta: "시작하기",
    secondary: "단계 보기",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      id: "what-to-install",
      title: "Windows에 어떤 Codex를 설치할까",
      points: [
        "창으로 쓰고 싶다면 ChatGPT 데스크톱 앱. Codex에는 Chat, Work와 나란히 자체 코딩 화면이 있고, worktree, 예약 작업, Git, 내장 브라우저, 파일 미리 보기, 플러그인, 스킬을 갖추고 있어요. 앱은 Free를 포함한 모든 ChatGPT 요금제에서 쓸 수 있어요.",
        "터미널에서 작업한다면 Codex CLI. PowerShell 스크립트나 npm으로 네이티브 설치돼요.",
        "에디터에서 작업한다면 IDE 확장. OpenAI는 앱, CLI와 함께 Windows에서 Codex를 네이티브로 쓰는 방법으로 이것을 꼽아요.",
        "Windows 11을 권장해요. 업데이트를 모두 마친 최신 Windows 10도 보장 없이 지원되며, ConPTY 때문에 버전 1809 이상이 필요해요. 그보다 오래된 Windows 10은 권장하지 않아요. `winget`을 쓸 수 있어야 해요.",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Windows에서 Codex 다운로드하고 설치하는 법",
      steps: [
        {
          title: "ChatGPT 데스크톱 앱 다운로드하기",
          text: "[OpenAI의 Windows 앱 페이지](https://learn.chatgpt.com/docs/windows/windows-app)에 있는 Microsoft Store 링크로 받거나, PowerShell에서 winget으로 설치하세요. ChatGPT를 열고 로그인한 뒤 Codex를 선택하세요.",
          code: "winget install --id 9PLM9XGG6VKS -s msstore",
        },
        {
          title: "또는 Codex CLI 설치하기",
          text: "새 PowerShell 창을 열고 OpenAI의 설치 프로그램을 실행하세요. 다시 실행하면 Codex가 업데이트돼요. Node.js가 설치돼 있다면 npm을 써도 돼요. CLI에서 `codex app`은 데스크톱 앱을 열고(필요하면 설치하고), `/app`은 현재 세션을 앱으로 옮겨요.",
          code: cliInstall,
        },
        {
          title: "로그인하기",
          text: "처음 실행할 때 Sign in with ChatGPT를 골라 내 요금제를 쓰거나, API 키로 로그인하세요. API 키는 표준 API 요금으로 청구돼요. Codex cloud에는 ChatGPT 로그인이 필요해요. 로그인되면 `codex login status`가 0으로 종료돼요.",
        },
        {
          title: "Codex가 호출할 도구 설치하기",
          text: "Codex는 PC에 설치된 것을 써요. OpenAI는 Git, Node.js, Python, .NET SDK, GitHub CLI를 모두 winget으로 설치한 뒤 GitHub에 로그인하라고 제안해요.",
          code: tools,
        },
        {
          title: "에이전트 실행 위치 고르기",
          text: "기본적으로 에이전트는 Windows 샌드박스 아래 PowerShell에서 네이티브로 실행돼요. 대신 WSL2에서 실행하려면 Settings를 열어 에이전트를 Windows native에서 WSL로 바꾸고 앱을 다시 시작하세요. 어느 모드든 입력창 아래에서 Ask for approval을 선택해야 샌드박스 보호를 받아요. 관리자 권한이 필요한 명령에는 Run as administrator로 앱을 시작하세요. 에이전트가 그 권한을 물려받아요. 통합 터미널로는 PowerShell, Command Prompt, Git Bash, WSL을 쓸 수 있어요.",
        },
      ],
      source: { label: "출처: OpenAI의 Codex 문서, Windows 앱", href: appDocs },
    },
    {
      kind: "table",
      id: "native-or-wsl",
      title: "네이티브 PowerShell이냐 WSL2냐?",
      text: [
        "OpenAI는 기본적으로 네이티브 샌드박스를 쓰고, Linux 네이티브 도구가 필요하거나, 이미 WSL2에서 일하고 있거나, 네이티브 옵션이 내 환경에 맞지 않을 때 WSL2를 고르라고 권해요. WSL1은 더 이상 지원되지 않아요. Codex 0.114까지는 작동했지만, 0.115부터 Linux 샌드박스가 `bubblewrap`을 쓰면서 WSL1 지원이 끝났어요.",
      ],
      headers: ["", "네이티브(PowerShell)", "WSL2"],
      rows: [
        ["샌드박스", "Windows 샌드박스: MXC, elevated, unelevated", "`bubblewrap`이 필요한 Linux 샌드박스"],
        ["CLI 설치", "PowerShell 설치 프로그램 또는 npm", "관리자 권한 PowerShell에서 `wsl --install`, 그다음 WSL 안에서 Linux 설치 스크립트"],
        ["데스크톱 앱에서", "기본값", "Settings에서 에이전트를 WSL로 바꾸고 앱 다시 시작"],
        ["프로젝트 위치", "Windows 드라이브. WSL에서는 `/mnt/<drive>/...`로 접근 가능", "속도를 위해 `/mnt/c`가 아니라 `~/code` 같은 Linux 홈 아래"],
        ["Codex 홈", "`%USERPROFILE%\\.codex`", "Linux 홈. 단, `CODEX_HOME`을 Windows 폴더로 지정하면 그 폴더"],
        ["고를 때", "기본으로", "Linux 네이티브 도구, 또는 이미 WSL2에 있는 워크플로"],
      ],
    },
    {
      kind: "steps",
      id: "wsl",
      title: "WSL2에서 Codex 실행하는 법",
      steps: [
        {
          title: "WSL2를 설치하고 그 안에 Codex 설치하기",
          text: "관리자 권한 PowerShell에서 `wsl --install`을 실행한 다음 `wsl`로 Linux 셸을 여세요. 그 안에서 샌드박스용 `bubblewrap`을 설치하고(`sudo apt install bubblewrap` 또는 `sudo dnf install bubblewrap`), Linux 설치 스크립트를 실행한 뒤 `codex`를 시작하세요.",
          code: wslInstall,
        },
        {
          title: "저장소는 Linux 홈에 두기",
          text: "`/mnt/c` 아래는 더 느리니 `~/code` 같은 폴더에 클론하세요. WSL의 VS Code가 Codex를 찾지 못하면 `which codex`로 위치를 확인하세요.",
        },
        {
          title: "Windows 앱과 설정 공유하기",
          text: "Windows 앱은 Codex 홈을 `%USERPROFILE%\\.codex`에 두고, WSL 안의 CLI는 Linux 홈을 써요. 하나로 공유하려면 WSL에서 `CODEX_HOME`을 Windows 폴더로 설정하세요.",
          code: "export CODEX_HOME=/mnt/c/Users/<windows-user>/.codex",
        },
        {
          title: "데스크톱 앱에서 WSL 프로젝트 열기",
          text: "Add new project를 선택하고(또는 Ctrl+O를 누르고) `\\\\wsl$\\`를 입력하세요. 에이전트가 네이티브로 남아 있다면, 프로젝트를 Windows 드라이브에 두고 WSL에서 `/mnt/<drive>/...`로 접근하는 편이 더 안정적이에요.",
        },
      ],
      source: { label: "출처: OpenAI의 Codex 문서, Windows와 WSL", href: wslDocs },
    },
    {
      kind: "table",
      id: "sandbox",
      title: "Codex Windows 샌드박스: MXC, elevated, unelevated",
      text: [
        "Windows 샌드박스 덕분에 Codex는 WSL이나 가상 머신 없이 PowerShell에서 네이티브로 실행되면서도, 명령과 그 하위 프로세스가 디스크와 네트워크에서 건드릴 수 있는 범위를 제한해요. 구현은 세 가지예요. 데스크톱 앱은 지원되는 기기의 개인용 계정에서 MXC를 자동으로 골라요.",
      ],
      headers: ["샌드박스", "작동 방식", "설정", "Windows 버전"],
      rows: [
        [
          "`mxc`(권장)",
          "Microsoft Execution Containers",
          "관리자 승인 설정, 추가 Windows 계정, 방화벽 규칙이 필요 없음",
          "Windows 11 24H2(빌드 26100.9278) 또는 25H2(빌드 26200.9278). Microsoft가 아직 Windows 11에 배포하는 중",
        ],
        [
          "`elevated`(레거시, 우선 대안)",
          "권한이 낮은 전용 샌드박스 사용자와 방화벽 규칙. 샌드박스 명령은 관리자 권한 없이 실행",
          "설정에 관리자 승인 필요",
          "문서에 별도 요구 사항 없음. 일반 지침 적용(Windows 11 권장, Windows 10 1809 이상은 보장 없이)",
        ],
        [
          "`unelevated`(레거시 대안)",
          "네트워크 격리가 더 약하고, 읽기 거부 경로 없음",
          "문서는 레거시 샌드박스 설정이 실패할 때 임시방편으로 제안",
          "문서에 별도 요구 사항 없음. 같은 일반 지침 적용",
        ],
      ],
    },
    {
      kind: "steps",
      id: "sandbox-setup",
      title: "Codex Windows 샌드박스 설정",
      steps: [
        {
          title: "내 PC에서 MXC가 되는지 확인하기",
          text: "Codex CLI 0.162.0 이상에서 이 테스트를 실행하세요. `MXC_OK`가 출력되고 종료 코드 0으로 끝나야 해요.",
          code: mxcTest,
        },
        {
          title: "CLI에서 MXC 우선 사용하기",
          text: "데스크톱 앱은 개인용 계정에서 이미 MXC를 우선해요. CLI에서나 기업 환경에서는 Codex 홈의 `config.toml`에서 켜세요.",
          code: preferMxc,
        },
        {
          title: "또는 레거시 샌드박스 고르기",
          text: "MXC를 쓸 수 없다면 `elevated`를, 마지막 대안으로 `unelevated`를 설정하세요. elevated 샌드박스는 설정에 관리자 승인이 필요해요. CLI에서는 `/setup-default-sandbox` 명령이 그 설정을 실행해요. 이 명령은 Windows에서, Codex가 기능이 제한된 restricted-token 샌드박스를 쓰고 있을 때만 나타나요.",
          code: legacy,
        },
        {
          title: "또는 IT가 미리 설정하게 하기",
          text: "관리자는 다른 사용자를 위해 elevated 샌드박스를 프로비저닝할 수 있어요. 나중에 레거시 샌드박스를 제거하려면 관리자 권한으로 `codex sandbox uninstall`을 실행하세요.",
          code: provision,
        },
      ],
      source: { label: "출처: OpenAI의 Codex 문서, Windows 샌드박스", href: sandboxDocs },
    },
    {
      kind: "text",
      id: "troubleshooting",
      title: "Codex Windows 샌드박스 설정이 실패했나요? 문서에 나온 해결법",
      text: [
        `OpenAI의 [Windows 샌드박스 페이지](${sandboxDocs})에 문제 해결 목록이 있어요. 거기서 다루는 내용을 문서의 제목 그대로 정리했어요.`,
      ],
      points: [
        "“My legacy sandbox setup failed”: 흔한 원인은 UAC나 관리자 확인 창을 거절한 경우, 또는 로컬 사용자와 그룹 만들기, 방화벽 변경, 샌드박스 사용자에게 로그온 권한 부여를 막는 정책이나 그 밖의 정책이에요. 다시 시도해 확인 창을 승인하거나, IT에 문의하거나, 그동안 `unelevated` 샌드박스를 쓰세요.",
        "“I see Windows error 1385”: Windows가 샌드박스 사용자에게 필요한 로그온 유형을 거부한 거예요. 샌드박스 사용자의 로그온 권한은 정책이 막을 수 있는 항목 중 하나라서, 관리되는 PC라면 IT에 문의하세요. MXC는 추가 Windows 계정을 만들지 않으므로, Windows 11 24H2나 25H2에서는 샌드박스 사용자에 의존하지 않아요.",
        "“Codex switched me to the unelevated sandbox”, “Codex warns that some folders are writable by Everyone”, “Sandboxed commands cannot reach the network”, “Sandboxing worked before and then stopped”은 그 페이지에 각각 별도 항목이 있어요.",
        "진단하려면 `CODEX_HOME/.sandbox/sandbox.log`를 읽으세요. `CODEX_HOME/.sandbox-secrets/` 폴더는 절대 다른 사람에게 보내지 마세요.",
        "“setup didn't finish”를 검색하셨나요? OpenAI 문서에는 그 문구로 된 항목이 없어요. 문서에 나온 가장 가까운 사례는 “My legacy sandbox setup failed”예요.",
        "PowerShell이 npm을 실행하지 않고 `npm.ps1 cannot be loaded because running scripts is disabled on this system.`이라고 나오면, 흔한 해결법은 `Set-ExecutionPolicy -ExecutionPolicy RemoteSigned`예요.",
      ],
    },
    {
      kind: "text",
      id: "computer-use",
      title: "Windows의 Computer Use는 화면을 차지해요",
      text: [
        "Computer Use를 쓰면 Codex가 포인터를 움직이고 입력해서 데스크톱 앱을 조작할 수 있어요. 데스크톱 앱에서는 macOS와 Windows에서, ChatGPT Work와 Codex로, 지원되는 지역에서 쓸 수 있어요. 켜려면 Settings > Computer use를 열고, Control 아래의 Any App을 찾아 Install을 선택하거나 스위치를 켜세요.",
      ],
      points: [
        "활성 데스크톱에서 실행되고 백그라운드에서는 작동하지 못해요. 작업이 돌아가는 동안 포인터를 움직이고, 입력하고, 창을 앞으로 가져오기 때문에 그동안 PC를 함께 쓸 수 없어요.",
        "자리를 비운 동안 일하게 하려면 PC를 잠그지 말고 온라인으로 둔 채 휴대폰에서 [원격 제어](/blog/codex-remote-control)로 확인하거나, 데스크톱 앱을 Windows 가상 머신 안에서 실행해 Computer Use가 내 화면 대신 VM을 차지하게 하세요.",
        "컴퓨터가 잠긴 뒤에도 작업을 계속하게 하는 잠금 상태 사용(locked use)은 macOS 전용이에요.",
        '앱 승인을 저장하려면 `$CODEX_HOME/config.toml`의 `[computer_use.windows]` 아래에 앱을 나열하세요. 예: `always_allowed_app_ids = ["mspaint.exe"]`.',
        "어느 시스템에서든 Computer Use는 터미널 앱이나 ChatGPT 자체를 자동화하거나, 관리자로 로그인하거나, 보안·개인정보 보호 확인 창을 승인할 수 없어요.",
      ],
    },
    {
      kind: "text",
      id: "remote-control",
      title: "휴대폰에서 Windows PC의 Codex 제어하기",
      text: [
        "Windows PC도 Mac처럼 원격 제어 호스트가 될 수 있어요. 휴대폰의 ChatGPT 앱은 프롬프트와 승인을 보내고, PC는 자기 프로젝트, 파일, 자격 증명, 도구로 명령을 실행해요. 전체 설정과 해결법은 [Codex 원격 제어](/blog/codex-remote-control)에 있어요.",
      ],
      points: [
        "PC에서 ChatGPT 데스크톱 앱을 열고 Settings > Connections > Control this Mac or PC로 가서 Set up이나 Add를 선택하세요. 휴대폰(iOS 또는 Android)으로 QR 코드를 스캔하세요.",
        "그러면 ChatGPT 앱의 Codex 아래에 PC가 나타나요. 이전 버전의 앱에서는 Remote라고 불러요.",
        "PC를 깨어 있고, 온라인이고, 로그인돼 있고, 데스크톱 앱이 실행 중인 상태로 두세요. 잠자기에 들어가거나 네트워크가 끊기면 다시 돌아올 때까지 원격 접근이 끊겨요. Computer Use를 쓰는 작업이라면 Windows 세션을 잠그지 마세요.",
        "OpenAI의 요금제 표에는 모바일 원격 제어가 Plus, Pro, Business, Enterprise에 있다고 나와 있고, API 키 로그인에는 없어요. ChatGPT 워크스페이스에서는 관리자가 먼저 Remote Control 접근을 켜야 할 수도 있어요.",
        "PC는 Linux 서버의 프로젝트를 SSH 호스트로 열 수도 있으니, 휴대폰으로 PC를 거쳐 서버의 Codex를 조종할 수 있어요. [VPS에서 Codex 돌리기](/blog/codex-vps)와 [Linux에서 Codex 쓰기](/blog/codex-linux)를 참고하세요. 대신 늘 켜져 있는 Mac을 쓰려면 [Mac mini에서 Codex 돌리기](/blog/codex-mac-mini)를 참고하세요.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Crewmark와 함께",
      title: "PC의 Codex에 고정 업무 맡기기",
      text: [
        "원격 제어와 Computer Use도 작업마다 내가 시작하길 기다려요. Crewmark는 Windows PC의 Codex 채팅을 직무, 목표, 근무 시간, 하트비트를 갖춘 AI 직원으로 바꿔 줘요. 근무 시간 동안 macOS와 Linux뿐 아니라 Windows에서도 돌아가는 `crewmark` CLI가 직원을 깨워 공유 보드에서 다음 이슈를 가져가게 해요. 그러려면 PC가 계속 켜져 있어야 해요.",
      ],
      steps: [
        {
          title: "직원 채용하기",
          text: "[AI 직원 직무](/ai-employees)에서 [소프트웨어 엔지니어](/ai-employees/software-engineer) 같은 직무를 고르고, 목표와 KPI를 적으세요.",
        },
        {
          title: "PC의 Codex 채팅 연결하기",
          text: "`crewmark` CLI로 PC의 Codex 채팅을 직원과 연결하세요. 그 대화가 직원이 돼요. Claude Code도 쓸 수 있어요.",
        },
        {
          title: "근무 시간과 하트비트 정하기",
          text: "평일만 또는 매일로, 내 시간대에 맞춰 정하고, 근무 시간은 자정을 넘겨도 돼요. 그 시간 동안 CLI가 15, 30, 60, 120, 240분마다 직원을 깨워요. [Codex 장시간 작업](/blog/codex-long-running-tasks)을 참고하세요.",
        },
        {
          title: "어디서든 이슈 배정하기",
          text: "어느 브라우저에서든 crewmark.ai 보드에서 이슈를 만들고 배정하세요. 배정하면 직원이 깨어나요. 리뷰나 결정이 필요하면 직원이 이슈를 Needs action으로 바꾸고 거기서 물어봐요. 맡길 만한 일은 [Codex 활용 사례](/use-cases/codex)에 있어요.",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Windows에서 Codex 다운로드하고 설치하기" },
  mid: {
    title: "프롬프트를 보내지 않을 때도 PC의 Codex가 계속 일하게 하고 싶나요?",
    text: "Crewmark는 내가 정한 시간 동안 하트비트에 맞춰 내 Codex를 깨우고 보드에서 다음 이슈를 넘겨줘요.",
    button: "시작하기",
  },
  faq: {
    title: "FAQ",
    items: [
      {
        q: "Windows에서 Codex 앱을 어떻게 다운로드하나요?",
        a: "Codex는 ChatGPT 데스크톱 앱의 일부예요. OpenAI의 Windows 앱 페이지에 있는 Microsoft Store 링크로 설치하거나 PowerShell에서 `winget install --id 9PLM9XGG6VKS -s msstore`를 실행한 뒤, ChatGPT를 열고 Codex를 선택하세요. 앱은 Free를 포함한 모든 ChatGPT 요금제에서 쓸 수 있어요.",
      },
      {
        q: "Windows에 Codex CLI를 어떻게 설치하나요?",
        a: '새 PowerShell 창을 열고 `powershell -ExecutionPolicy ByPass -c "irm https://chatgpt.com/codex/install.ps1 | iex"`를 실행하거나, Node.js가 있다면 `npm install -g @openai/codex`를 실행하세요. 그런 다음 `codex`를 실행하고 ChatGPT나 API 키로 로그인하세요. 설치 프로그램을 다시 실행하면 Codex가 업데이트돼요.',
      },
      {
        q: "Windows에서 Codex를 쓰려면 WSL이 필요한가요?",
        a: "아니요. Codex는 데스크톱 앱, CLI, IDE 확장 모두에서 Windows 샌드박스 아래 PowerShell로 네이티브 실행돼요. WSL2는 Linux 네이티브 도구나 이미 WSL2에 있는 워크플로를 위한 선택 사항이에요. WSL1은 Codex 0.115부터 지원되지 않아요.",
      },
      {
        q: "Codex Windows 샌드박스란 무엇인가요?",
        a: "Codex의 명령이 Windows에서 네이티브로 실행되는 동안 디스크와 네트워크에서 건드릴 수 있는 범위를 제한하는 기능이에요. 권장 구현은 MXC로, Windows 11 24H2나 25H2가 필요해요. `elevated`와 `unelevated`는 레거시 대안이에요. 데스크톱 앱은 지원되는 기기의 개인용 계정에서 MXC를 자동으로 골라요.",
      },
      {
        q: "Codex Windows 샌드박스 설정이 왜 실패했나요?",
        a: "OpenAI 문서에는 “setup didn't finish”라는 메시지가 없어요. 레거시 샌드박스 설정이 실패하는 원인으로는 UAC나 관리자 확인 창 거절, 또는 로컬 사용자와 그룹, 방화벽 변경, 샌드박스 사용자의 로그온 권한을 막는 정책을 꼽아요. 다시 시도해 확인 창을 승인하거나, IT에 문의하거나, 그동안 `unelevated`를 쓰세요. Windows 오류 1385는 샌드박스 사용자에게 필요한 로그온 유형이 거부됐다는 뜻이에요.",
      },
      {
        q: "휴대폰에서 Windows PC의 Codex를 제어할 수 있나요?",
        a: "네. PC의 ChatGPT 데스크톱 앱에서 Settings > Connections > Control this Mac or PC로 가서 iOS나 Android의 ChatGPT 앱으로 QR 코드를 스캔하고, PC를 깨어 있고, 온라인이고, 로그인된 상태로 두세요. Computer Use를 쓰는 작업이라면 PC를 잠그지 마세요.",
      },
    ],
  },
  cta: {
    title: "PC의 Codex에 일을 맡기세요.",
    text: "Crewmark는 Claude Code와 Codex 세션을 직무, 목표, 근무 시간, 하트비트를 갖춘 AI 직원으로 바꿔 줘요.",
    button: "시작하기",
  },
  checked:
    "2026년 11월 14일에 OpenAI의 Codex 문서(Windows 앱, Windows 샌드박스, WSL, CLI, 로그인, Computer Use, remote connections)와 대조해 확인했습니다.",
  disclaimer:
    "Crewmark는 독립 제품으로, OpenAI, Microsoft나 이 페이지에 언급된 어떤 회사와도 제휴하거나 그 보증을 받지 않았습니다. Codex와 ChatGPT는 OpenAI의 상표이고, Windows는 Microsoft의 상표입니다.",
};
