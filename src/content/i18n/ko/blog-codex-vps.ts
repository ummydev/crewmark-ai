import type { GuideCopy } from "@/components/landing/guide-article";

// Korean translation of /blog/codex-vps; the English master is src/content/blog/codex-vps.ts.

const docs = "https://learn.chatgpt.com/docs/remote-connections";

const install = `# On the server: install the Codex CLI (run it again to update)
curl -fsSL https://chatgpt.com/codex/install.sh | sh
# or: npm install -g @openai/codex

# Codex's sandbox on Linux uses bubblewrap
sudo apt install bubblewrap   # Fedora: sudo dnf install bubblewrap`;

const login = `# Headless sign-in (beta; turn on device code login in ChatGPT first)
codex login --device-auth

# Or forward the browser callback from your computer, then run codex login
ssh -L 1455:localhost:1455 you@devbox.example.com

# Exits 0 once you're signed in
codex login status`;

const ssh = `# ~/.ssh/config on the Mac or PC running the ChatGPT desktop app
Host devbox
  HostName devbox.example.com
  User you
  IdentityFile ~/.ssh/id_ed25519

# Check it works before adding it in the app
ssh devbox`;

const tmux = `# On the server: run Codex inside tmux so it outlives your SSH connection
tmux new -s codex
cd ~/my-project
codex

# Detach with Ctrl+B, then D. Reattach later with:
tmux attach -t codex`;

export const copy: GuideCopy = {
  meta: {
    title: "Codex VPS 설정: 설치, 로그인, SSH 연결",
    description:
      "Linux VPS에 Codex CLI 설치, 디바이스 코드로 로그인, ChatGPT 데스크톱 앱에 서버를 SSH 호스트로 추가하고 휴대폰에서 접속하는 법.",
  },
  breadcrumb: "VPS에서 Codex 돌리기",
  parent: { name: "블로그", href: "/blog" },
  article: { published: "2026-11-14" },
  hero: {
    kicker: "블로그 · Codex",
    title: "VPS에서 돌리는 Codex: Linux 서버에 설치하고 SSH로 연결하기",
    lead: "빌린 Linux 서버, 즉 VPS는 잠들지 않고, Codex CLI는 Linux에서 돌아가요. 제대로 알아야 할 부분은 휴대폰에서 그 서버에 닿는 방법이에요. ChatGPT 앱은 서버에 직접 연결하지 않아요. Mac이나 Windows PC의 ChatGPT 데스크톱 앱에 연결하고, 그 앱이 SSH로 서버에서 채팅을 실행해요. 이 가이드에서는 서버에 Codex를 설치하고 로그인하는 법, SSH 호스트로 추가하는 법, 휴대폰으로 제어하는 법, tmux를 쓰는 터미널 전용 구성, 서버를 안전하게 지키는 법, 그리고 서버를 아예 돌리고 싶지 않을 때 쓸 수 있는 Codex cloud를 다뤄요.",
    cta: "시작하기",
    secondary: "단계 보기",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      id: "how-it-works",
      title: "VPS의 Codex는 이렇게 맞물려요",
      text: ["세 대의 머신이 관여하고, 각자 맡은 일이 하나씩 있어요."],
      points: [
        "Linux 서버가 Codex를 실행해요. 그 서버 프로젝트의 채팅은 서버의 의존성, 보안 정책, 컴퓨팅 자원으로 거기서 명령을 실행하고, 파일을 읽고, 변경 사항을 써요. 데스크톱 앱이 SSH로 원격 사용자의 로그인 셸에서 Codex를 시작해요.",
        "Mac이나 Windows PC가 ChatGPT 데스크톱 앱을 실행하고, 이 앱이 SSH 연결을 유지해요. 휴대폰이 통신하는 호스트가 바로 이 컴퓨터라서, 이것도 깨어 있고 온라인이어야 해요.",
        "휴대폰은 ChatGPT 앱을 실행하고 원격 제어로 그 호스트를 제어해요. 프롬프트와 승인을 보내고, diff, 터미널 출력, 알림을 보여 줘요.",
        "OpenAI 문서에는 원격 제어 호스트로 macOS와 Windows만 나와 있어서, 휴대폰을 Linux 서버와 직접 페어링하는 방법은 문서에 없어요. 대신 휴대폰을 Mac이나 PC와 페어링하세요. [늘 켜져 있는 Mac mini](/blog/codex-mac-mini)라면 가장 좋아요.",
      ],
    },
    {
      kind: "text",
      id: "what-you-need",
      title: "준비물",
      points: [
        "SSH로 접속할 수 있는 Linux 서버. GitHub에 있는 Codex CLI 설치 가이드에는 Ubuntu 20.04+ 또는 Debian 10+, 최소 RAM 4 GB, 권장 RAM 8 GB라고 나와 있고, 릴리스 빌드는 x86_64용과 ARM64용이 있어요.",
        "서버를 SSH 호스트로 추가할, ChatGPT 데스크톱 앱이 설치된 Mac이나 Windows PC. 휴대폰에서 서버에 접속하려면 이 컴퓨터가 계속 켜져 있어야 해요.",
        "Codex를 쓸 ChatGPT 계정. OpenAI의 요금제 표에 따르면 SSH 원격 연결은 Plus, Pro, Business, Enterprise와 API 키로 쓸 수 있고, 모바일 원격 제어는 Plus, Pro, Business, Enterprise에서 쓸 수 있지만 API 키로는 쓸 수 없어요.",
        "휴대폰의 ChatGPT 앱(iOS 또는 Android).",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Linux VPS에 Codex 설정하는 법",
      steps: [
        {
          title: "서버 빌리고 SSH 확인하기",
          text: "Linux 서버를 만들고, 데스크톱 앱을 실행할 Mac이나 PC에서 SSH로 로그인할 수 있는지 확인하세요. 키 기반 로그인을 쓰고, root가 아니라 Codex에 필요한 권한만 있는 계정을 쓰세요.",
        },
        {
          title: "서버에 Codex CLI 설치하기",
          text: "서버에서 OpenAI의 설치 스크립트를 실행하세요. 나중에 같은 명령으로 업데이트하고, npm도 쓸 수 있어요. Codex의 샌드박스를 위해 bubblewrap을 설치하세요. PATH에 `bwrap`이 없으면 Codex는 비특권 사용자 네임스페이스가 필요한 번들 헬퍼로 대신하고, 시작할 때 경고를 띄워요. Ubuntu 24.04에서는 `bwrap-userns-restrict` AppArmor 프로필을 로드할 때까지 경고가 계속될 수 있어요.",
          code: install,
        },
        {
          title: "헤드리스 서버에서 로그인하기",
          text: "서버에는 브라우저가 없으니 디바이스 코드 로그인을 쓰세요. `codex login --device-auth`를 실행하거나 Sign in with Device Code를 고르고 안내를 따르세요. 베타 기능이고, 먼저 ChatGPT 보안 설정에서 직접 또는 워크스페이스 관리자가 디바이스 코드 로그인을 켜야 해요. 쓸 수 없다면 `ssh -L 1455:localhost:1455`로 로그인 콜백을 포워딩하고 서버에서 `codex login`을 실행하거나, 로그인된 컴퓨터에서 `~/.codex/auth.json`을 복사하고 그 파일을 비밀번호처럼 다루세요.",
          code: login,
        },
        {
          title: "SSH 설정에 서버 추가하기",
          text: "Mac이나 PC의 `~/.ssh/config`에 Host 항목을 추가하고 `ssh devbox`가 되는지 확인하세요. Codex는 그 파일에서 구체적인 호스트 별칭을 읽고, 패턴만 있는 항목은 무시해요. 데스크톱 앱은 원격 사용자의 로그인 셸에서 Codex를 시작하므로, `codex`가 거기의 PATH에 있어야 해요.",
          code: ssh,
        },
        {
          title: "데스크톱 앱에서 SSH 호스트로 추가하기",
          text: "ChatGPT 데스크톱 앱에서 Settings > Connections를 열고 SSH 호스트를 추가하거나 켠 다음, 서버의 프로젝트 폴더를 고르세요. 그 프로젝트의 채팅은 서버에서 명령을 실행하고, 파일을 읽고, 변경 사항을 써요.",
        },
        {
          title: "휴대폰에서 제어하기",
          text: "같은 Mac이나 PC에서 Settings > Connections > Control this Mac or PC를 열고 Set up이나 Add를 선택한 뒤, ChatGPT 앱으로 QR 코드를 스캔하세요. 휴대폰에서 Codex를 열고, 그 컴퓨터와 서버의 프로젝트를 고르고, 채팅을 시작하세요. 채팅은 Mac이나 PC를 거쳐 서버에서 실행되니 그 컴퓨터를 깨어 있고 온라인인 상태로 두세요. [집에 둔 Mac mini](/blog/codex-mac-mini)가 그 역할을 할 수 있어요. 자세한 설정과 해결법은 [Codex 원격 제어](/blog/codex-remote-control)에 있어요.",
        },
      ],
      source: { label: "출처: OpenAI 문서, remote connections와 SSH 호스트", href: docs },
    },
    {
      kind: "steps",
      id: "terminal-only",
      title: "터미널만: SSH로 접속해 tmux 안에서 Codex CLI 쓰기",
      text: [
        "터미널만 있으면 된다면 데스크톱 앱은 건너뛰어도 돼요. 서버에 SSH로 접속해 tmux 안에서 Codex CLI를 실행하고 분리(detach)하세요. 연결을 끊어도 Codex는 계속 돌아가고, SSH로 접속할 수 있는 어느 컴퓨터에서든 다시 붙을 수 있어요.",
      ],
      steps: [
        {
          title: "tmux 안에서 Codex 시작하기",
          text: "tmux가 없다면 배포판 패키지로 설치하고, 세션을 시작한 뒤 프로젝트 폴더에서 `codex`를 실행하세요.",
          code: tmux,
        },
        {
          title: "이 구성이 못 하는 일 알아 두기",
          text: "이 구성은 휴대폰과 연결되지 않아요. OpenAI에 따르면 모바일 설정은 데스크톱 앱에서 시작하고, CLI에서는 설정할 수 없어요. CLI에는 실험적인 `codex remote-control` 명령이 있고, 문서는 이를 관리형 원격 제어 클라이언트와 SSH 워크플로에 연결하지만, CLI만 돌리는 서버와 휴대폰을 페어링하는 방법은 설명하지 않아요.",
        },
      ],
    },
    {
      kind: "text",
      id: "security",
      title: "서버를 안전하게 지키기",
      points: [
        "다른 SSH 서버처럼 다루세요. 신뢰할 수 있는 키와 최소 권한 계정을 쓰고, 공용 인터넷에서 인증 없이 열려 있는 서비스는 두지 마세요.",
        "Codex의 앱 서버를 노출하지 마세요. `codex app-server --listen`과 `codex --remote`는 주로 개발과 디버깅용이고, OpenAI는 공유 네트워크나 공용 네트워크에서 app-server 전송 계층을 열지 말라고 경고해요.",
        "서버의 네트워크 밖에서 접속하려면 VPN이나 Tailscale 같은 메시 네트워크를 쓰세요. Tailscale은 암호화된 WireGuard 링크로 내 기기끼리만 연결해요.",
        "`~/.codex/auth.json`은 비공개로 두세요. OpenAI는 이 파일을 비밀번호처럼 다루라고 해요.",
        "샌드박스 설정, 보안 통제, 승인은 로컬에서와 마찬가지로 서버의 채팅에도 적용되고, Linux에서 샌드박스를 쓰려면 bubblewrap이 필요해요.",
      ],
    },
    {
      kind: "text",
      id: "handoff",
      title: "내 컴퓨터와 서버 사이에서 채팅 옮기기",
      text: [
        "데스크톱 앱은 채팅을 Git 상태와 함께 내 컴퓨터와 연결된 SSH 호스트 사이에서 넘길(hand off) 수 있어요. 양쪽 모두 같은 Git 저장소의 프로젝트가 저장돼 있어야 해요. 채팅 하단에서 지금 실행 중인 위치를 고르고, 대상 호스트를 선택하고(This computer를 고르면 다시 가져와요), 검토한 뒤 Hand off를 선택하세요. Codex는 그쪽에 worktree를 만들거나 재사용해요. 아직 실행 중인 응답은 중단되고, 채팅을 Codex cloud로 넘길 수는 없어요.",
      ],
    },
    {
      kind: "text",
      id: "codex-cloud",
      title: "서버 없이: Codex cloud",
      points: [
        "Codex cloud는 OpenAI 클라우드에서 코딩 작업을 실행해요. 작업마다 자체 작업 공간이 생기고, 컴퓨터가 잠들어 있어도 계속 일해요.",
        "웹, 데스크톱 앱(Work in > Cloud), 휴대폰의 ChatGPT 앱(Codex를 열고 Cloud와 환경 선택)에서 시작하세요. 기본 환경을 쓰면 저장소를 고르지 않고 시작할 수 있고, Codex가 연결된 GitHub나 GitLab 계정의 저장소를 체크아웃할 수 있어요.",
        "클라우드 작업은 자기 클라우드 환경만 봐요. 로컬 파일, 실행 중인 프로세스, 브라우저 로그인, VPN 접근은 넘어가지 않아요. 재사용할 구성은 Work in > Cloud > Select environment > Create environment에서 만들어요.",
        "API 키가 아니라 ChatGPT 로그인이 필요해요. 터미널에서는 `codex cloud`가 클라우드 채팅 선택 화면을 열고, `codex cloud exec`가 작업을 제출해요.",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Mac mini 호스트 vs Linux SSH 호스트 vs Codex cloud",
      headers: ["", "Mac mini 호스트", "Linux SSH 호스트", "Codex cloud"],
      rows: [
        ["Codex 실행 위치", "Mac mini의 ChatGPT 데스크톱 앱 안", "서버. Mac이나 PC의 데스크톱 앱이 SSH로 시작", "OpenAI 클라우드, 작업마다 작업 공간 하나"],
        ["휴대폰이 연결되는 곳", "Mac mini", "데스크톱 앱을 실행하는 Mac이나 Windows PC", "OpenAI 클라우드: Codex를 열고 Cloud 선택"],
        ["켜져 있어야 하는 것", "Mac mini", "서버와 Mac이나 PC", "내 기기는 없음"],
        ["파일, 로그인, VPN", "Mac mini에 있는 모든 것", "서버에 있는 것", "클라우드 환경뿐. 로컬 파일, 브라우저 로그인, VPN 접근은 넘어가지 않음"],
        ["잘 맞는 경우", "Computer Use, Chrome 확장 프로그램을 통한 브라우저 작업, iOS 개발, 집에 두는 파일", "서버의 컴퓨팅 자원과 의존성을 쓰는 터미널 작업", "저장소만 있으면 되는 코딩 작업"],
        ["요금제(OpenAI 표 기준)", "모바일 원격 제어: Plus, Pro, Business, Enterprise", "SSH 연결: 그 요금제들과 API 키. 휴대폰으로 호스트를 제어하려면 여전히 그 요금제 중 하나가 필요", "Plus, Pro, Business, Enterprise. API 키로는 불가"],
        ["설정", "데스크톱 앱, 잠자기 방지 설정, 원격 제어", "서버의 CLI, SSH 설정, 데스크톱 앱의 SSH 호스트", "클라우드 환경 고르거나 만들기"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Crewmark와 함께",
      title: "서버에 고정 업무 맡기기",
      text: [
        "잠들지 않는 서버도 다음 프롬프트를 기다리기는 마찬가지예요. Crewmark는 그 위의 Codex 채팅을 직무, 숫자 목표, 근무 시간, 하트비트를 갖춘 AI 직원으로 바꿔 줘요. 근무 시간 동안 macOS와 Windows뿐 아니라 Linux에서도 돌아가는 `crewmark` CLI가 직원을 깨워 공유 보드의 이슈를 처리하게 해요. 직원이 실행되는 컴퓨터는 계속 켜져 있어야 하는데, VPS가 바로 그래요.",
      ],
      steps: [
        {
          title: "직원 채용하기",
          text: "[AI 직원 직무](/ai-employees)에서 소프트웨어 엔지니어나 SEO 전문가 같은 직무를 고르고, 목표와 KPI를 적으세요.",
        },
        {
          title: "서버의 Codex 연결하기",
          text: "설정 링크를 서버의 Codex 채팅에 붙여 넣으세요. `crewmark` CLI가 설치되고 그 채팅이 직원과 연결돼요. Claude Code도 쓸 수 있어요. [VPS에서 Claude Code 돌리기](/blog/claude-code-vps)를 참고하세요.",
        },
        {
          title: "근무 시간과 하트비트 정하기",
          text: "평일만 또는 매일로 정할 수 있고, 근무 시간은 자정을 넘겨도 되며, 15, 30, 60, 120, 240분마다 깨어나게 할 수 있어요. 깨어날 때마다 같은 Codex 채팅으로 들어가므로 하던 일을 이어서 해요. Codex 자체의 예약 기능과의 비교는 [Codex를 능동적으로 만드는 방법](/proactive-codex)에 있어요.",
        },
        {
          title: "휴대폰에서 이슈 배정하고 대화하기",
          text: "휴대폰 브라우저로 crewmark.ai를 열어 이슈를 만들고 배정하거나, 직원의 Work 로그에 메시지를 쓰세요. 메시지는 서버의 Codex 채팅으로 전달되고, 직원은 거기서 답해요. 이슈를 배정하면 직원이 바로 깨어나고, 리뷰나 결정이 필요하면 직원이 이슈를 Needs action으로 바꾸고 거기서 물어봐요. 맡길 만한 일은 [Codex 활용 사례](/use-cases/codex)에 있어요.",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Linux VPS를 SSH 호스트로 삼아 Codex 설정하기" },
  mid: {
    title: "프롬프트를 보내지 않을 때도 서버가 계속 일하게 하고 싶나요?",
    text: "Crewmark는 내가 정한 시간 동안 하트비트에 맞춰 Codex를 깨우고 보드에서 다음 이슈를 넘겨줘요.",
    button: "시작하기",
  },
  faq: {
    title: "FAQ",
    items: [
      {
        q: "VPS에서 Codex를 돌릴 수 있나요?",
        a: "네. Codex CLI는 Linux에서 돌아가요. `curl -fsSL https://chatgpt.com/codex/install.sh | sh`로 설치하고 `codex login --device-auth`로 로그인한 다음, SSH로 접속해 tmux 안에서 쓰거나, Mac이나 Windows PC의 ChatGPT 데스크톱 앱에서 서버를 SSH 호스트로 추가하세요. 그 컴퓨터는 휴대폰으로 제어할 수 있어요.",
      },
      {
        q: "브라우저 없이 VPS에서 Codex에 어떻게 로그인하나요?",
        a: "`codex login --device-auth`를 실행하거나 Sign in with Device Code를 고르고 안내를 따르세요. 베타 기능이고, ChatGPT 보안 설정에서 직접 또는 워크스페이스 관리자가 켜야 해요. 그 밖에는 `ssh -L 1455:localhost:1455 user@server`로 콜백을 포워딩하고 거기서 `codex login`을 실행하거나, 로그인된 컴퓨터에서 `~/.codex/auth.json`을 복사하세요.",
      },
      {
        q: "Codex를 VPS에 어떻게 연결하나요?",
        a: "ChatGPT 데스크톱 앱을 실행하는 Mac이나 PC의 `~/.ssh/config`에 서버를 추가하고 `ssh <alias>`가 되는지 확인하세요. 서버에 `codex`가 설치돼 있고, 로그인돼 있고, 원격 사용자 로그인 셸의 PATH에 있는지 확인한 다음, Settings > Connections에서 호스트를 추가하고 원격 프로젝트 폴더를 고르세요.",
      },
      {
        q: "휴대폰에서 VPS의 Codex를 제어할 수 있나요?",
        a: "네, Mac이나 Windows PC를 거쳐서요. 휴대폰은 그 컴퓨터의 ChatGPT 데스크톱 앱을 제어하고, 앱이 SSH로 서버에서 채팅을 실행하므로, 그 컴퓨터는 깨어 있고 온라인이어야 해요. 휴대폰을 Linux 서버나 CLI만과 직접 페어링하는 방법은 OpenAI 문서에 나와 있지 않아요.",
      },
      {
        q: "ChatGPT 데스크톱 앱이 Linux 서버에서 돌아가나요?",
        a: "Linux용 ChatGPT 데스크톱 앱이 프리뷰로 있어요. Ubuntu, Debian, Fedora, Arch Linux의 데스크톱 버전용이고, 아직 Computer Use는 없어요. OpenAI 문서는 데스크톱 환경이 없는 서버는 다루지 않고, Linux는 원격 제어 호스트로 나와 있지 않아요. VPS에서는 Codex CLI를 쓰세요.",
      },
      {
        q: "VPS에서 Codex를 돌려도 안전한가요?",
        a: "다른 SSH 서버처럼 다루세요. 키 기반 로그인과 최소 권한 계정을 쓰고, 인증 없이 공개된 리스너는 두지 마세요. Codex의 앱 서버를 공용 네트워크에 노출하지 말고, 외부에서 서버에 접속할 때는 VPN이나 메시 네트워크를 쓰고, `~/.codex/auth.json`은 비공개로 두고, 샌드박스가 작동하도록 bubblewrap을 설치하세요.",
      },
    ],
  },
  cta: {
    title: "서버에 일을 맡기세요.",
    text: "Crewmark는 Codex와 Claude Code 세션을 직무, 목표, 근무 시간, 하트비트를 갖춘 AI 직원으로 바꿔 줘요.",
    button: "시작하기",
  },
  checked:
    "2026년 11월 14일에 OpenAI 문서(remote connections, Codex CLI, 인증, 샌드박스, Linux 앱, Codex cloud, 요금제), GitHub의 Codex README와 설치 가이드, Tailscale 문서와 대조해 확인했습니다.",
  disclaimer:
    "Crewmark는 독립 제품으로, OpenAI나 이 페이지에 언급된 어떤 회사와도 제휴하거나 그 보증을 받지 않았습니다. Codex와 ChatGPT는 OpenAI의 상표입니다.",
};
