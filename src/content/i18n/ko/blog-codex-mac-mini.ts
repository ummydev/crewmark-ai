import type { GuideCopy } from "@/components/landing/guide-article";

// Korean translation of /blog/codex-mac-mini; the English master is src/content/blog/codex-mac-mini.ts.

const docs = "https://learn.chatgpt.com/docs/remote-connections";

const install = `# Codex CLI on macOS (either one; the script also updates it)
curl -fsSL https://chatgpt.com/codex/install.sh | sh
brew install --cask codex

# Open the ChatGPT desktop app, installing it if it's missing
codex app

# Sign in to the CLI with your ChatGPT account
codex login`;

export const copy: GuideCopy = {
  meta: {
    title: "Codex Mac mini 설정: 휴대폰으로 24시간 돌리기",
    description:
      "Mac mini에서 Codex 24시간 돌리기: ChatGPT 앱·CLI 설치, 잠자기 끄기, 원격 제어 켜기, 휴대폰 페어링, Computer Use 추가.",
  },
  breadcrumb: "Mac mini에서 Codex 돌리기",
  parent: { name: "블로그", href: "/blog" },
  article: { published: "2026-11-14" },
  hero: {
    kicker: "블로그 · Codex",
    title: "Mac mini에서 돌리는 Codex: 휴대폰으로 조종하는 상시 가동 호스트",
    lead: "원격 제어를 쓰면 휴대폰의 ChatGPT 앱에서 Codex를 쓸 수 있지만, Codex를 실행하는 컴퓨터가 깨어 있고 온라인일 때만 가능해요. 노트북을 닫으면 휴대폰에서 연결이 끊겨요. 오래 걸리는 작업에는 OpenAI가 전용 상시 가동 Mac을 제안하는데, 집에 둔 Mac mini가 딱 맞아요. 계속 켜져 있고, 프로젝트, 로그인 정보, 도구를 내가 가진 머신에 두며, Computer Use와 브라우저 작업도 돌릴 수 있어요. 이 가이드에서는 Mac mini에 Codex를 설치하고, 잠들지 않게 하고, 원격 제어를 설정하고, 휴대폰을 페어링하고, 노트북에서 그 데스크톱에 접속하는 법을 다뤄요.",
    cta: "시작하기",
    secondary: "단계 보기",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      id: "why-mac-mini",
      title: "Codex 호스트로 Mac mini를 쓰는 이유",
      text: [
        "휴대폰은 Codex를 실행하지 않아요. 프롬프트, 승인, 후속 메시지를 보낼 뿐이고, 나머지는 모두 호스트가 제공해요. 프로젝트, 채팅, 파일, 자격 증명, 플러그인, MCP 서버, 스킬, Computer Use, 브라우저, 로컬 도구까지요. 그래서 휴대폰에서 Codex가 무엇을 할 수 있는지, 애초에 연결이 되는지는 호스트가 정해요. 잠들지 않는 Mac mini는 좋은 호스트예요.",
      ],
      points: [
        "계속 켜져 있어요. 호스트가 잠자기에 들어가거나, 네트워크가 끊기거나, 앱이 닫히면 다시 돌아올 때까지 원격 접근이 끊겨요.",
        "Computer Use와 브라우저 작업. ChatGPT 데스크톱 앱은 macOS와 Windows에서 Computer Use를 실행하고, Linux 프리뷰에는 아직 없어요. Windows에서는 Computer Use가 활성 데스크톱을 차지하고 세션이 잠겨 있지 않아야 해요. Mac에는 잠금 상태 사용(locked use)이 있어서, 휴대폰에서 시작한 Computer Use 작업이 Mac이 잠긴 뒤에도 실행될 수 있어요.",
        "iOS 앱. Xcode와 iOS Simulator는 macOS에서만 돌아가므로, Codex로 iPhone 앱 작업을 한다면 호스트는 Mac이어야 해요.",
        "집에 있는 내 데이터. 저장소, 브라우저 로그인, 자격 증명이 내가 가진 머신에 남고, 호스트가 접근할 수 있으니 로그인된 웹사이트와 데스크톱 앱도 쓸 수 있어요.",
        "서버를 위한 거점. 같은 데스크톱 앱으로 Linux 서버를 SSH 호스트로 추가할 수 있으니, 채팅은 서버에서 돌리고 휴대폰은 늘 켜져 있는 Mac mini에 연결하면 돼요.",
      ],
    },
    {
      kind: "text",
      id: "what-you-need",
      title: "준비물",
      points: [
        "켜 두고 인터넷에 계속 연결해 둘 수 있는 Mac mini.",
        "Codex에 접근할 수 있는 ChatGPT 계정. OpenAI의 요금제 표에는 모바일 원격 제어가 Plus, Pro, Business, Enterprise에 있다고 나와 있고, API 키로는 쓸 수 없어요. ChatGPT 워크스페이스에서는 관리자가 먼저 Remote Control 접근을 켜야 할 수도 있어요.",
        "휴대폰의 최신 ChatGPT 앱(iOS 또는 Android). Mac mini와 같은 계정, 같은 워크스페이스로 로그인돼 있어야 해요.",
        "선택 사항으로, 어디서든 Mac mini의 데스크톱에 접속하기 위해 Mac mini와 노트북에 설치할 Tailscale.",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Mac mini에 Codex 설정하는 법",
      steps: [
        {
          title: "ChatGPT 데스크톱 앱과 Codex CLI 설치하기",
          text: "2026년 7월 9일부터 Codex는 ChatGPT 데스크톱 앱 안에 Chat, Work와 나란히 들어 있어요. macOS용 앱을 설치하고, 휴대폰에서 쓰는 계정과 워크스페이스로 로그인한 뒤 Codex를 선택하세요. Codex CLI는 선택 사항이지만 SSH로 접속할 때 편해요. OpenAI의 스크립트나 Homebrew로 설치하고, `codex`를 실행해 Sign in with ChatGPT를 고르세요. `codex app`은 데스크톱 앱을 열고, 없으면 설치해요.",
          code: install,
        },
        {
          title: "Mac mini를 깨어 있게 하기",
          text: "System Settings > Energy에서 Prevent automatic sleeping when the display is off를 켜면 디스플레이가 꺼져도 Mac mini가 계속 돌아가요. Wake for network access를 켜 두면 공유 서비스를 위해 깨어날 수 있어요([Apple의 잠자기 및 깨우기 설정 안내](https://support.apple.com/guide/mac-help/set-sleep-and-wake-settings-mchle41a6ccd/mac) 참고). 그런 다음 데스크톱 앱에서 Settings > General > Prevent sleep while running을 켜면, 자리를 비운 동안에도 로컬 채팅이 계속돼요.",
        },
        {
          title: "원격 제어 켜기",
          text: "데스크톱 앱에서 Settings > Connections > Control this Mac or PC를 열고 Set up이나 Add를 선택하세요. 원격 접근을 승인하고 필요한 인증을 마치면 앱에 QR 코드가 나타나요. Settings > Connections에서는 컴퓨터를 깨어 있게 할지 정하고, Computer Use를 켜고, Chrome 확장 프로그램을 설치하고, 연결된 기기를 관리할 수도 있어요.",
        },
        {
          title: "휴대폰 페어링하기",
          text: "휴대폰으로 QR 코드를 스캔하면 ChatGPT가 열려요. 계정과 워크스페이스를 확인하고 MFA, SSO, 패스키 단계를 마치세요. 그러면 ChatGPT 앱의 Codex(이전 버전에서는 Remote) 아래에 Mac mini가 나타나고, 그 프로젝트에서 채팅을 시작하고, 명령을 승인하고, diff를 검토할 수 있어요. QR 코드 하나는 휴대폰 하나와 호스트 하나를 페어링하니, 쓸 휴대폰마다 페어링하세요. 노트북에서도 제어하려면, 그 옵션이 있는 경우 노트북에서 Settings > Connections > Control other devices를 쓰세요.",
        },
        {
          title: "Computer Use와 Chrome 확장 프로그램 켜기",
          text: "브라우저 작업과 데스크톱 작업을 하려면 호스트에 둘 다 있어야 해요. Codex를 선택한 상태에서 Settings > Computer use를 열고, Control 아래의 Any App을 찾아 Install을 선택하거나 스위치를 켜고, Settings > Connections에서 Chrome 확장 프로그램을 설치하세요. Computer Use는 일부 지역에서만 쓸 수 있어요. 휴대폰에서 시작한 Computer Use 작업이 Mac이 잠긴 동안에도 실행되게 하려면 Settings > Computer Use에서 잠금 상태 사용(locked use)을 켜세요. Apple 인증 플러그인이 설치되고, 진행 중인 Computer Use 턴에서만 잠금을 풀며, 누군가 Mac mini의 키보드나 포인터를 쓰면 다시 잠가요.",
        },
        {
          title: "코드가 서버에 있다면 SSH 호스트 추가하기",
          text: "Settings > Connections에서는 `~/.ssh/config`에 있는 Linux 서버를 SSH 호스트로 추가할 수도 있어요. 그다음 그 서버의 프로젝트 폴더를 고르세요. 그 프로젝트의 채팅은 서버에서 실행되고, 휴대폰은 계속 Mac mini에 연결돼요. 설정 방법은 [VPS에서 Codex 돌리기](/blog/codex-vps)에 있어요.",
        },
        {
          title: "Tailscale과 Screen Sharing으로 Mac mini의 데스크톱에 접속하기",
          text: "Mac mini와 노트북에 Tailscale을 설치하고 둘 다 같은 tailnet에 추가하세요. tailnet은 암호화된 WireGuard 연결로 내 기기끼리만 서로 접속할 수 있는 비공개 네트워크예요([Tailscale 소개](https://tailscale.com/kb/1151/what-is-tailscale) 참고). Mac mini에서 System Settings > General > Sharing > Screen Sharing을 켜세요. Remote Management와 동시에 켤 수는 없어요. 그런 다음 노트북에서 tailnet상의 Mac mini 이름으로 접속해 웹사이트에 로그인하거나, Computer Use가 승인할 수 없는 보안·개인정보 보호 확인 창에 답하거나, Codex가 일하는 모습을 지켜보세요([Apple의 Screen Sharing 안내](https://support.apple.com/guide/mac-help/turn-screen-sharing-on-or-off-mh11848/mac) 참고).",
        },
      ],
      source: { label: "출처: OpenAI 문서, remote connections", href: docs },
    },
    {
      kind: "text",
      id: "keep-running",
      title: "연결을 유지하는 것과 끊는 것",
      points: [
        "Mac mini는 깨어 있고, 온라인이고, 같은 계정과 워크스페이스에 로그인돼 있고, 데스크톱 앱이 열려 있어야 해요. 잠자기에 들어가거나, 네트워크가 끊기거나, 앱이 닫히면 다시 돌아올 때까지 휴대폰에서 연결할 수 없어요. 직접 Sleep을 선택해도 접근이 끊겨요.",
        "데스크톱 앱에서 로그아웃하면 Remote Control이 꺼지지만 페어링은 남아요. 다시 로그인한 뒤 Remote Control을 다시 켜세요.",
        "Add를 선택한 뒤 오류가 나면 Mac mini에서 데스크톱 앱을 다시 시작하고 다시 시도하세요. 2026년 6월 8일 이후 쓰지 않은 페어링은 두 앱을 모두 업데이트하고 다시 페어링해야 해요.",
        "원격 제어는 스스로 일을 시작하지 않아요. 작업이 끝나면 Codex는 알림을 보내고 다음 프롬프트를 기다려요. 예약 작업처럼 내가 없어도 일을 시작하는 방법은 [Codex를 능동적으로 만드는 방법](/proactive-codex)과 [Codex 장시간 작업](/blog/codex-long-running-tasks)을 참고하세요.",
        "더 많은 해결법은 [Codex 원격 제어](/blog/codex-remote-control#troubleshooting)에 있어요.",
      ],
    },
    {
      kind: "text",
      id: "other-setups",
      title: "Codex에 계속 연결해 두는 다른 방법",
      points: [
        "Linux 서버를 SSH 호스트로 쓰면 Codex는 서버에서 돌아가지만, 휴대폰은 여전히 데스크톱 앱을 실행하는 Mac이나 Windows PC에 연결되므로 그 컴퓨터도 켜져 있어야 해요. Mac mini가 그 역할을 할 수 있어요. [VPS에서 Codex 돌리기](/blog/codex-vps)를 참고하세요.",
        "Codex cloud는 OpenAI 클라우드에서 작업을 실행하고, 컴퓨터가 잠들어도 계속 일해요. 클라우드 환경만 볼 수 있어서 로컬 파일, 브라우저 로그인, VPN 접근은 거기에 없어요.",
        "Claude Code라면 같은 상시 가동 Mac mini 구성이 [Mac mini에서 Claude Code 돌리기](/blog/claude-code-mac-mini)에, Anthropic판 원격 제어는 [Claude Code Remote Control](/remote-claude-code)에 있어요.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Crewmark와 함께",
      title: "늘 켜져 있는 Mac mini에 고정 업무 맡기기",
      text: [
        "늘 켜져 있는 Mac mini는 휴대폰에서 메시지를 보내면 언제든 답하지만, 보내지 않으면 기다려요. Crewmark는 그 위의 Codex 채팅을 직무, 숫자 목표, 근무 시간, 하트비트를 갖춘 AI 직원으로 바꿔 줘요. 근무 시간 동안 `crewmark` CLI가 직원을 깨워 공유 보드의 이슈를 처리하게 해요. 직원이 실행되는 컴퓨터는 계속 켜져 있어야 하는데, Mac mini가 바로 그래요.",
      ],
      steps: [
        {
          title: "직원 채용하기",
          text: "[AI 직원 직무](/ai-employees)에서 소프트웨어 엔지니어나 SEO 전문가 같은 직무를 고르고, 목표와 KPI를 적으세요.",
        },
        {
          title: "Mac mini의 Codex 연결하기",
          text: "설정 링크를 Mac mini의 Codex 채팅에 붙여 넣으세요. `crewmark` CLI가 설치되고 그 채팅이 직원과 연결돼요. Claude Code도 쓸 수 있어요.",
        },
        {
          title: "근무 시간과 하트비트 정하기",
          text: "근무 시간을 평일만 또는 매일로 정하고, 직원이 깨어나는 주기를 15, 30, 60, 120, 240분 중에서 고르세요. 근무 시간은 자정을 넘길 수 있어서, 잠들지 않는 머신이라면 야간 근무도 돼요. 깨어날 때마다 같은 Codex 채팅으로 들어가므로 하던 일을 이어서 해요.",
        },
        {
          title: "휴대폰에서 이슈 배정하고 대화하기",
          text: "휴대폰 브라우저로 crewmark.ai를 열어 이슈를 만들고 배정하거나, 직원의 Work 로그에 메시지를 쓰세요. 직원은 거기서 답해요. 이슈를 배정하면 직원이 바로 깨어나고, 리뷰나 결정이 필요하면 직원이 이슈를 Needs action으로 바꾸고 거기서 물어봐요. 맡길 만한 일은 [Codex 활용 사례](/use-cases/codex)에 있어요.",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Mac mini를 상시 가동 호스트로 삼아 Codex 설정하기" },
  mid: {
    title: "메시지를 보내지 않을 때도 Mac mini가 계속 일하게 하고 싶나요?",
    text: "Crewmark는 내가 정한 시간 동안 하트비트에 맞춰 Codex를 깨우고 보드에서 다음 이슈를 넘겨줘요.",
    button: "시작하기",
  },
  faq: {
    title: "FAQ",
    items: [
      {
        q: "Mac mini에서 Codex를 24시간 돌릴 수 있나요?",
        a: "네, Mac mini가 깨어 있고, 온라인이고, ChatGPT 데스크톱 앱이 열린 채 로그인돼 있는 한 가능해요. System Settings > Energy에서 Prevent automatic sleeping when the display is off를, 앱의 Settings > General에서 Prevent sleep while running을 켠 다음, 휴대폰에서 접속할 수 있도록 원격 제어를 설정하세요. 다른 무언가가 일을 시작하지 않는 한, Codex는 작업이 끝날 때마다 다음 프롬프트를 기다려요.",
      },
      {
        q: "Mac mini에 Codex를 어떻게 설치하나요?",
        a: "macOS용 ChatGPT 데스크톱 앱을 설치하고 앱에서 Codex를 선택하세요. 터미널에서 쓰려면 `curl -fsSL https://chatgpt.com/codex/install.sh | sh`나 `brew install --cask codex`로 Codex CLI를 설치하고, `codex`를 실행해 Sign in with ChatGPT를 고르세요. `codex app`은 데스크톱 앱을 열고, 없으면 설치해요.",
      },
      {
        q: "iPhone에서 Mac mini의 Codex를 어떻게 쓰나요?",
        a: "Mac mini의 데스크톱 앱에서 Settings > Connections > Control this Mac or PC를 열고 Set up이나 Add를 선택한 뒤, iPhone으로 QR 코드를 스캔하세요. 그러면 ChatGPT 앱의 Codex 아래에 Mac mini가 나타나고, 거기서 채팅을 시작하고, 명령을 승인하고, diff를 검토할 수 있어요. Android의 ChatGPT 앱도 돼요.",
      },
      {
        q: "Mac에서 Codex를 쓰기 위한 최소 요구 사항은 무엇인가요?",
        a: "Codex CLI는 GitHub에 있는 OpenAI 설치 가이드에 macOS 12 이상, 최소 RAM 4 GB, 권장 RAM 8 GB라고 나와 있어요. 저희가 확인한 OpenAI 문서에는 ChatGPT 데스크톱 앱의 요구 사항이 따로 나와 있지 않아요. 원격 제어에는 계정의 Codex 접근 권한과 휴대폰의 최신 ChatGPT 앱도 필요해요.",
      },
      {
        q: "Codex 원격 제어에 Tailscale이 필요한가요?",
        a: "아니요. 원격 제어는 OpenAI의 보안 릴레이를 거치므로 Mac mini가 공용 인터넷에 노출되지 않아요. Tailscale은 집 밖의 노트북에서 Screen Sharing으로 데스크톱을 열거나 SSH로 접속하는 것처럼 Mac mini 자체에 접속할 때 써요. OpenAI 문서는 내 네트워크 밖의 머신에 접속할 때 VPN이나 메시 네트워크를 권장해요.",
      },
      {
        q: "Codex에는 Mac mini와 Linux VPS 중 무엇이 좋을까요?",
        a: "Codex에 터미널만 있으면 된다면 Linux 서버로 충분해요. CLI는 Linux에서 돌아가고, 데스크톱 앱은 SSH로 서버의 프로젝트를 열 수 있어요. 하지만 휴대폰은 여전히 데스크톱 앱을 실행하는 Mac이나 Windows PC에 연결되니, 어차피 그 컴퓨터는 켜져 있어야 해요. Computer Use, Chrome 확장 프로그램을 통한 브라우저 작업, iOS 개발이 필요하거나 파일을 집에 두고 싶다면 Mac mini를 고르세요. [VPS에서 Codex 돌리기](/blog/codex-vps)를 참고하세요.",
      },
    ],
  },
  cta: {
    title: "Mac mini에 일자리를 주세요.",
    text: "Crewmark는 Codex와 Claude Code 세션을 직무, 목표, 근무 시간, 하트비트를 갖춘 AI 직원으로 바꿔 줘요.",
    button: "시작하기",
  },
  checked:
    "2026년 11월 14일에 OpenAI 문서(remote connections, Computer Use, Codex CLI, 설정, 요금제), Apple 지원 문서, Tailscale 문서와 대조해 확인했습니다.",
  disclaimer:
    "Crewmark는 독립 제품으로, OpenAI, Apple, Tailscale과 제휴하거나 이들의 보증을 받지 않았습니다. Codex와 ChatGPT는 OpenAI의 상표이고, Mac, Mac mini, Xcode는 Apple의 상표입니다.",
};
