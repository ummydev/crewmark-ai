import type { GuideCopy } from "@/components/landing/guide-article";

// Korean translation of /blog/codex-linux; the English master is src/content/blog/codex-linux.ts.

const linuxAppDocs = "https://learn.chatgpt.com/docs/linux/linux-app";
const cliDocs = "https://learn.chatgpt.com/docs/codex/cli";
const sandboxingDocs = "https://learn.chatgpt.com/docs/sandboxing";
const remoteDocs = "https://learn.chatgpt.com/docs/remote-connections";
const cloudDocs = "https://learn.chatgpt.com/docs/cloud";

const appInstall = `# Ubuntu or Debian (ARM64: chatgpt_arm64.deb)
sudo apt install ./chatgpt_amd64.deb

# Fedora (ARM64: chatgpt.aarch64.rpm)
sudo dnf install ./chatgpt.x86_64.rpm

# Arch Linux: download install-arch.sh from
# https://persistent.oaistatic.com/codex-app-prod/linux/install-arch.sh
# then run it (it does a full system upgrade)
sudo bash install-arch.sh`;

const appUpdate = `# Ubuntu or Debian
sudo apt update
sudo apt install --only-upgrade chatgpt

# Fedora
sudo dnf upgrade --refresh chatgpt

# Arch Linux
sudo pacman -Syu`;

const bubblewrap = `# Ubuntu or Debian
sudo apt install bubblewrap

# Fedora
sudo dnf install bubblewrap

# Ubuntu 24.04, if Codex still warns: copy the bwrap-userns-restrict
# profile to /etc/apparmor.d/, then load it
sudo apt install apparmor-profiles apparmor-utils
sudo apparmor_parser -r /etc/apparmor.d/bwrap-userns-restrict`;

const headless = `# On the server, with device code login turned on in ChatGPT
codex login --device-auth

# Or forward the sign-in callback from your own computer, then sign in on the server
ssh -L 1455:localhost:1455 user@remote
codex login`;

const sshConfig = `# ~/.ssh/config on the Mac or PC running the ChatGPT desktop app
Host devbox
  HostName devbox.example.com
  User you
  IdentityFile ~/.ssh/id_ed25519`;

export const copy: GuideCopy = {
  meta: {
    title: "Codex Linux: 데스크톱 앱, CLI 설치, 샌드박스",
    description:
      "Linux에 Codex 설치: Ubuntu·Debian·Fedora·Arch용 ChatGPT 앱 프리뷰 또는 CLI와 bubblewrap, 헤드리스 로그인, SSH 호스트.",
  },
  breadcrumb: "Linux에서 Codex 쓰기",
  parent: { name: "블로그", href: "/blog" },
  article: { published: "2026-11-14" },
  hero: {
    kicker: "블로그 · Codex",
    title: "Linux에서 쓰는 Codex: 데스크톱 앱 프리뷰, CLI, 그리고 Linux가 아직 못 하는 일",
    lead: "Linux 머신에서 Codex를 돌리는 방법은 두 가지예요. Codex가 들어 있는 ChatGPT 데스크톱 앱은 2026년 8월부터 Linux에서 프리뷰로 제공되며, x64와 ARM64의 Ubuntu, Debian, Fedora, Arch를 지원해요. Codex CLI는 명령 하나로 설치되고, 샌드박스에 `bubblewrap`을 써요. 이 가이드에서는 두 가지 설치 방법, 헤드리스 서버에서 로그인하는 법, Linux에 아직 없는 것(Computer Use, 그리고 휴대폰으로 Linux 호스트 제어하기), 그래도 Linux 머신을 Mac이나 PC 데스크톱 앱의 SSH 호스트로 쓰는 법, 그리고 Codex cloud를 다뤄요.",
    cta: "시작하기",
    secondary: "단계 보기",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      id: "options",
      title: "Linux에서 어떤 Codex를 쓸까",
      points: [
        "ChatGPT 데스크톱 앱(프리뷰): Chat, Work와 나란히 Codex가 있는 창이에요. Linux에서 Codex GUI는 바로 이거예요. OpenAI 가이드는 데스크톱 Linux를 다루니, 데스크톱이 없는 서버에서는 CLI를 쓰세요.",
        "Codex CLI: 터미널에서 돌아가요. 데스크톱에서도, SSH로 접속하는 헤드리스 서버에서도 돼요.",
        "IDE 확장: 에디터를 떠나고 싶지 않다면 VS Code, Cursor, Windsurf용이 있어요.",
        "Codex cloud: 작업이 OpenAI 서버에서 실행되니 내 기기를 켜 둘 필요가 없어요. 아래 [Codex cloud](#cloud)를 참고하세요.",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Linux에 Codex 데스크톱 앱 설치하는 법",
      steps: [
        {
          title: "배포판과 아키텍처 확인하기",
          text: "프리뷰는 Ubuntu 24.04 LTS와 26.04 LTS, Debian 13, Fedora 43과 44, 그리고 업데이트를 모두 마친 최신 Arch Linux를 지원해요. 다른 배포판도 될 수 있지만 공식 지원은 아니에요. 패키지는 x64용과 ARM64용이 있어요. `uname -m`을 실행해서 `x86_64`가 나오면 x64, `aarch64`나 `arm64`가 나오면 ARM64예요.",
          code: "uname -m",
        },
        {
          title: "패키지 다운로드하고 설치하기",
          text: `배포판과 아키텍처에 맞는 패키지를 받고([OpenAI의 Linux 앱 가이드](${linuxAppDocs}) 참고), 저장한 폴더에서 설치하세요. Arch에서는 OpenAI의 설치 스크립트가 전체 시스템 업그레이드도 함께 실행해요.`,
          code: appInstall,
        },
        {
          title: "열어서 Codex 선택하기",
          text: "애플리케이션 메뉴에서 ChatGPT를 열거나 터미널에서 `chatgpt`를 실행하고, 로그인한 뒤 Codex를 선택하세요. Wayland에서는 XWayland를 쓸 수 있으면 그걸 써요. 네이티브 Wayland는 실험적이고, `chatgpt --ozone-platform=wayland`로 강제할 수 있어요.",
        },
        {
          title: "업데이트하기",
          text: "업데이트는 패키지 관리자로 받아요.",
          code: appUpdate,
        },
        {
          title: "긴 채팅 계속 돌리기",
          text: "macOS와 Linux에 있는 Settings > General > Prevent sleep while running을 켜면, 컴퓨터를 떠나 있는 동안에도 로컬 채팅이 계속돼요.",
        },
      ],
      source: { label: "출처: OpenAI의 Codex 문서, Linux용 ChatGPT 앱", href: linuxAppDocs },
    },
    {
      kind: "steps",
      id: "cli",
      title: "Linux에 Codex CLI 설치하는 법",
      steps: [
        {
          title: "설치 스크립트 실행하기",
          text: "같은 명령으로 Codex를 설치하고 업데이트해요. 설치된 릴리스가 지원하면 `codex update`로도 업데이트를 적용할 수 있어요. Node.js가 설치돼 있다면 `npm install -g @openai/codex`도 돼요. OpenAI는 x86_64와 aarch64용 Linux 빌드를 배포해요.",
          code: "curl -fsSL https://chatgpt.com/codex/install.sh | sh",
        },
        {
          title: "샌드박스용 bubblewrap 설치하기",
          text: `Codex의 Linux 샌드박스에는 \`bubblewrap\`이 필요해요. PATH에 \`bwrap\`이 없으면 Codex는 비특권 사용자 네임스페이스가 필요한 번들 헬퍼로 대신하고, 시작할 때 경고를 띄워요. Ubuntu 25.04에서는 패키지로 설치한 bubblewrap이 그대로 작동하지만, Ubuntu 24.04에서는 \`bwrap-userns-restrict\` AppArmor 프로필을 로드할 때까지 경고가 계속될 수 있어요([OpenAI의 샌드박스 문서](${sandboxingDocs}) 참고).`,
          code: bubblewrap,
        },
        {
          title: "로그인하기",
          text: "`codex`를 실행하고 Sign in with ChatGPT를 골라 내 요금제를 쓰거나, API 키로 로그인하세요. API 키는 표준 API 요금으로 청구돼요. Codex cloud에는 ChatGPT 로그인이 필요해요. 로그인되면 `codex login status`가 0으로 종료돼요.",
        },
        {
          title: "헤드리스 서버에서는 디바이스 코드로 로그인하기",
          text: "머신에 브라우저가 없다면 Sign in with Device Code를 고르거나 베타 기능인 `codex login --device-auth`를 실행하세요. 디바이스 코드 로그인은 먼저 ChatGPT 보안 설정에서 직접 또는 워크스페이스 관리자가 켜야 해요. 다른 방법도 두 가지 있어요. 브라우저 로그인이 된 컴퓨터에서 `~/.codex/auth.json`을 복사하고 그 파일을 비밀번호처럼 다루거나, SSH로 로그인 콜백을 포워딩하고 서버에서 `codex login`을 실행하세요.",
          code: headless,
        },
      ],
      source: { label: "출처: OpenAI의 Codex 문서, Codex CLI", href: cliDocs },
    },
    {
      kind: "text",
      id: "computer-use",
      title: "Linux에는 아직 Computer Use가 없어요",
      text: [
        "Computer Use를 쓰면 Codex가 포인터를 움직이고 입력해서 데스크톱 앱을 조작할 수 있어요. 데스크톱 앱의 Linux 프리뷰에는 이 기능이 없고, OpenAI의 Linux 가이드에는 향후 릴리스에서 추가된다고 나와 있어요. 지금은 macOS와 Windows의 데스크톱 앱에서 돌아가요.",
      ],
      points: [
        "터미널에서 하는 일은 Linux에서도 그대로 돌아가요. Codex는 `bubblewrap` 샌드박스 안에서 명령을 실행하고 파일을 편집해요.",
        "데스크톱 앱이 필요한 작업에는 Mac이나 Windows PC를 쓰세요. Windows에서는 Computer Use가 작업하는 동안 화면을 차지해요. [Windows에서 Codex 쓰기](/blog/codex-windows)를 참고하세요. 늘 켜져 있는 Mac이라면 [Mac mini에서 Codex 돌리기](/blog/codex-mac-mini)를 참고하세요.",
      ],
    },
    {
      kind: "steps",
      id: "ssh",
      title: "Mac이나 PC의 데스크톱 앱에서 Linux 머신 쓰기",
      text: [
        "OpenAI의 remote connections 문서는 ChatGPT 휴대폰 앱이 제어할 수 있는 호스트로 Mac과 Windows 컴퓨터만 꼽기 때문에, 휴대폰으로 Linux 데스크톱 앱을 제어하는 방법은 문서에 없어요. 그래도 Linux 머신은 SSH 호스트가 될 수 있어요. Mac이나 Windows PC의 데스크톱 앱이 그 머신의 프로젝트를 열고, Codex는 거기서 명령을 실행하고, 파일을 읽고, 변경 사항을 써요. 그런 다음 그 Mac이나 PC를 거쳐 휴대폰으로 조종하면 돼요.",
      ],
      steps: [
        {
          title: "SSH 설정에 Linux 머신 추가하기",
          text: "데스크톱 앱을 실행하는 Mac이나 PC의 `~/.ssh/config`에 호스트를 추가하세요. Codex는 그 파일에서 구체적인 호스트 별칭을 읽고, 패턴만 있는 항목은 무시해요. 그 컴퓨터에서 `ssh devbox`가 되는지 확인하세요. 다른 SSH 접근과 똑같이 다루세요. 신뢰할 수 있는 키와 최소 권한 계정을 쓰고, 공용 네트워크에서 인증 없이 열려 있는 것은 두지 말고, 내 네트워크 밖의 머신에 접속할 때는 VPN이나 메시 네트워킹 도구를 쓰세요.",
          code: sshConfig,
        },
        {
          title: "Linux 머신에 Codex 설치하고 로그인하기",
          text: "앱은 SSH로 원격 머신의 원격 사용자 로그인 셸에서 Codex를 시작하므로, `codex`가 거기의 PATH에 있어야 해요. 위의 스크립트로 설치하고 로그인하세요. 헤드리스 서버에서는 `codex login --device-auth`를 쓰세요.",
        },
        {
          title: "데스크톱 앱에서 호스트 추가하기",
          text: "Settings > Connections로 가서 SSH 호스트를 추가하거나 켜고, 그 호스트의 프로젝트 폴더를 고르세요. 같은 Git 저장소가 양쪽에 프로젝트로 저장돼 있다면, 채팅 하단에서 내 컴퓨터와 Linux 호스트 사이에 채팅을 넘길 수 있어요.",
        },
        {
          title: "휴대폰에서 제어하기",
          text: "[Codex 원격 제어](/blog/codex-remote-control)에 나온 대로 휴대폰을 Mac이나 PC와 페어링하세요. 휴대폰은 그 컴퓨터와 통신하고(그 컴퓨터는 켜져 있어야 해요), 실제 작업은 Codex가 Linux 머신에서 해요. 빌린 서버라면 [VPS에서 Codex 돌리기](/blog/codex-vps)를 참고하세요.",
        },
      ],
      source: { label: "출처: OpenAI의 Codex 문서, remote connections", href: remoteDocs },
    },
    {
      kind: "text",
      id: "cloud",
      title: "아니면 Codex cloud에 작업 맡기기",
      text: [
        `머신을 아예 켜 두고 싶지 않다면 [Codex cloud](${cloudDocs})가 OpenAI 서버에서 작업을 실행해요. 작업마다 자체 작업 공간이 생기고, 컴퓨터가 잠들어도 계속돼요.`,
      ],
      points: [
        "웹이나 데스크톱 앱에서 Work in > Cloud로, 또는 ChatGPT 모바일 앱의 Codex에서 작업을 시작하세요. Linux 터미널에서는 `codex cloud`가 클라우드 채팅 선택 화면을 열고, `codex cloud exec`가 작업을 제출하고, `codex cloud list`가 최근 작업을 보여 줘요.",
        "ChatGPT 로그인이 필요하고 API 키로는 쓸 수 없어요. OpenAI의 요금제 표에는 Plus, Pro, Business, Enterprise에서 쓸 수 있다고 나와 있어요.",
        "클라우드 작업은 자기 클라우드 환경만 봐요. 내 머신의 로컬 파일, 실행 중인 프로세스, 브라우저 로그인, VPN 접근은 넘어가지 않고, 내 컴퓨터의 채팅을 클라우드 작업으로 넘길 수도 없어요.",
        "재사용할 구성은 Work in > Cloud > Select environment > Create environment에서 환경으로 만드세요. 공용 인터넷 전체에 접근하게 하거나 허용 목록을 쓸 수 있어요.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Crewmark와 함께",
      title: "Linux 머신의 Codex에 고정 업무 맡기기",
      text: [
        "데스크톱 앱, CLI, SSH 모두 다음 작업을 내가 시작하길 기다려요. Crewmark는 Linux 머신의 Codex 채팅을 직무, 목표, 근무 시간, 하트비트를 갖춘 AI 직원으로 바꿔 줘요. 근무 시간 동안 macOS와 Windows뿐 아니라 Linux에서도 돌아가는 `crewmark` CLI가 직원을 깨워 공유 보드에서 다음 이슈를 가져가게 해요. 머신은 계속 켜져 있어야 하는데, Linux 서버라면 어차피 그래요.",
      ],
      steps: [
        {
          title: "직원 채용하기",
          text: "[AI 직원 직무](/ai-employees)에서 [소프트웨어 엔지니어](/ai-employees/software-engineer) 같은 직무를 고르고, 목표와 KPI를 적으세요.",
        },
        {
          title: "머신의 Codex 채팅 연결하기",
          text: "`crewmark` CLI로 Linux 데스크톱이나 서버의 Codex 채팅을 직원과 연결하세요. 그 대화가 직원이 돼요. Claude Code도 쓸 수 있어요.",
        },
        {
          title: "근무 시간과 하트비트 정하기",
          text: "평일만 또는 매일로, 내 시간대에 맞춰 정하고, 근무 시간은 자정을 넘겨도 돼요. 그 시간 동안 CLI가 15, 30, 60, 120, 240분마다 직원을 깨워요. [Codex를 능동적으로 만드는 방법](/proactive-codex)을 참고하세요.",
        },
        {
          title: "어느 브라우저에서든 이슈 배정하기",
          text: "crewmark.ai 보드에서 이슈를 만들고 배정하세요. 배정하면 직원이 깨어나요. 리뷰나 결정이 필요하면 직원이 이슈를 Needs action으로 바꾸고 거기서 물어봐요. 맡길 만한 일은 [Codex 활용 사례](/use-cases/codex)에 있어요.",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Linux에 ChatGPT 데스크톱 앱을 설치하고 Codex 쓰기" },
  mid: {
    title: "프롬프트를 보내지 않을 때도 Linux의 Codex가 계속 일하게 하고 싶나요?",
    text: "Crewmark는 내가 정한 시간 동안 하트비트에 맞춰 내 Codex를 깨우고 보드에서 다음 이슈를 넘겨줘요.",
    button: "시작하기",
  },
  faq: {
    title: "FAQ",
    items: [
      {
        q: "Linux용 Codex GUI가 있나요?",
        a: "네. Codex가 들어 있는 ChatGPT 데스크톱 앱이 Linux에서 프리뷰로 제공되며, x64와 ARM64의 Ubuntu 24.04와 26.04, Debian 13, Fedora 43과 44, Arch Linux를 지원해요. 에디터를 떠나고 싶지 않다면 Codex IDE 확장을 VS Code, Cursor, Windsurf에서 쓸 수 있어요.",
      },
      {
        q: "Linux용 Codex 데스크톱 앱은 어떻게 다운로드하나요?",
        a: "OpenAI의 Linux 앱 가이드에 나온 대로 내 아키텍처에 맞는 .deb(Ubuntu, Debian)나 .rpm(Fedora) 패키지를 받아 `sudo apt install ./chatgpt_amd64.deb`나 `sudo dnf install ./chatgpt.x86_64.rpm`으로 설치하세요. Arch에서는 OpenAI의 `install-arch.sh` 스크립트를 실행하세요. 그런 다음 ChatGPT를 열거나 `chatgpt`를 실행하고 Codex를 선택하세요.",
      },
      {
        q: "Linux에 Codex CLI를 어떻게 설치하나요?",
        a: "`curl -fsSL https://chatgpt.com/codex/install.sh | sh`나 `npm install -g @openai/codex`를 실행하세요. 샌드박스용 `bubblewrap`을 설치한 다음(`sudo apt install bubblewrap` 또는 `sudo dnf install bubblewrap`), `codex`를 실행하고 로그인하세요.",
      },
      {
        q: "Codex Computer Use가 Linux에서 되나요?",
        a: "아직 안 돼요. 데스크톱 앱의 Linux 프리뷰에는 Computer Use가 없고, OpenAI는 향후 릴리스에서 추가한다고 해요. 지금은 macOS와 Windows의 데스크톱 앱에서 쓸 수 있어요.",
      },
      {
        q: "헤드리스 Linux 서버에서 Codex에 어떻게 로그인하나요?",
        a: "ChatGPT 보안 설정에서 디바이스 코드 로그인을 켜고(또는 워크스페이스 관리자에게 요청하고), 베타 기능인 `codex login --device-auth`를 실행하세요. 로그인된 컴퓨터에서 `~/.codex/auth.json`을 복사하거나, `ssh -L 1455:localhost:1455 user@remote`로 접속해 서버에서 `codex login`을 실행해도 돼요.",
      },
      {
        q: "휴대폰에서 Linux의 Codex를 제어할 수 있나요?",
        a: "직접은 안 돼요. OpenAI 문서는 원격 제어 호스트로 Mac과 Windows 컴퓨터만 꼽아요. Mac이나 Windows PC의 ChatGPT 데스크톱 앱에서 Linux 머신을 SSH 호스트로 추가한 다음, 휴대폰의 ChatGPT 앱으로 그 컴퓨터를 제어하세요. Codex는 Linux 머신에서 실행돼요.",
      },
    ],
  },
  cta: {
    title: "Linux 머신의 Codex에 일을 맡기세요.",
    text: "Crewmark는 Claude Code와 Codex 세션을 직무, 목표, 근무 시간, 하트비트를 갖춘 AI 직원으로 바꿔 줘요.",
    button: "시작하기",
  },
  checked:
    "2026년 11월 14일에 OpenAI의 Codex 문서(Linux용 ChatGPT 앱, CLI, 로그인, 샌드박스, Computer Use, remote connections, Codex cloud)와 대조해 확인했습니다.",
  disclaimer:
    "Crewmark는 독립 제품으로, OpenAI나 이 페이지에 언급된 어떤 회사와도 제휴하거나 그 보증을 받지 않았습니다. Codex와 ChatGPT는 OpenAI의 상표입니다.",
};
