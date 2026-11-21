import type { GuideCopy } from "@/components/landing/guide-article";

// Korean translation of /blog/claude-code-vps; the English master is src/content/blog/claude-code-vps.ts.

const docs = "https://code.claude.com/docs/en/remote-control";

const server = `# Start a tmux session, so the server keeps running after you close SSH
tmux new -s claude

# Inside tmux, from your project folder: run the Remote Control server and
# restart it whenever it exits (it gives up after ~10 minutes offline)
cd ~/my-project
while true; do claude remote-control; sleep 10; done

# Detach with Ctrl+B, then D. Reattach later with:
tmux attach -t claude`;

export const copy: GuideCopy = {
  meta: {
    title: "Claude Code VPS 설정: Linux 서버에서 24시간 돌리기",
    description:
      "Linux VPS·Ubuntu 서버에 Claude Code 설치, Remote Control 서버 모드 실행, tmux로 유지, 휴대폰으로 조종하는 법과 그 한계.",
  },
  breadcrumb: "VPS에서 Claude Code 돌리기",
  parent: { name: "블로그", href: "/blog" },
  article: { published: "2026-11-14" },
  hero: {
    kicker: "블로그 · Claude Code",
    title: "VPS에서 돌리는 Claude Code: Linux 서버에서 실행하고 휴대폰으로 조종하기",
    lead: "Remote Control을 쓰면 휴대폰의 Claude 앱으로 Claude Code를 조종할 수 있지만, Claude Code를 실행하는 컴퓨터가 켜져 있을 때만 가능해요. 빌린 Linux 서버, 즉 VPS는 꺼지지 않아요. 거기에 Claude Code를 설치하고 Remote Control을 서버 모드로 실행하면, 어디에 있든 휴대폰에서 그 세션을 열 수 있어요. 이 가이드에서는 Ubuntu, Debian 등 어떤 배포판에서든 설정하는 법, 계속 돌아가게 하는 법, 웹사이트 로그인을 위해 데스크톱을 추가하는 법, 그리고 [집에 둔 Mac mini](/blog/claude-code-mac-mini)와 비교해 Linux 서버가 못 하는 일을 다뤄요.",
    cta: "시작하기",
    secondary: "단계 보기",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      id: "what-you-need",
      title: "준비물",
      points: [
        "SSH로 접속할 수 있는 Linux 서버. DigitalOcean이나 OVHcloud 같은 업체에서 빌리면 돼요. Claude Code CLI는 어떤 배포판에서도 돌아가고, Claude Desktop에는 Ubuntu 22.04 이상 또는 Debian 12 이상이 필요해요.",
        "Claude Pro, Max, Ultra, Team, Enterprise 요금제. Remote Control은 API 키로 작동하지 않고, Team이나 Enterprise에서는 먼저 Owner가 켜야 해요.",
        "휴대폰의 Claude 앱(iOS 또는 Android), 또는 브라우저의 claude.ai/code.",
        "선택 사항으로, 로그인해야 하는 웹사이트가 Claude에게 필요할 때를 위한 서버의 데스크톱 환경과 원격 데스크톱.",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Linux VPS에 Claude Code 설정하는 법",
      steps: [
        {
          title: "서버 빌리고 접속하기",
          text: "DigitalOcean이나 OVHcloud 같은 업체에서 Linux 서버를 만들고 SSH로 접속하세요. Ubuntu 22.04+나 Debian 12+를 고르면 Claude Desktop도 선택지로 남아요. 다른 배포판에서는 CLI를 써요.",
        },
        {
          title: "Claude Code 설치하고 로그인하기",
          text: "Anthropic의 설치 스크립트로 Claude Code CLI를 설치하세요. 터미널에서 돌아가기 때문에(Anthropic은 지원 시스템으로 Ubuntu 20.04+와 Debian 10+ 등을 꼽아요) SSH로만 접속하는 헤드리스 서버에 잘 맞아요. Ubuntu 22.04+나 Debian 12+에서는 대신 apt로 Claude Desktop을 설치할 수 있는데, Linux에서는 베타예요([Linux용 Claude Desktop](https://code.claude.com/docs/en/desktop-linux) 참고). 그런 다음 `claude`를 실행하고 API 키가 아니라 Claude 계정으로 로그인하세요.",
          code: "curl -fsSL https://claude.ai/install.sh | bash",
        },
        {
          title: "Remote Control을 서버 모드로 시작하기",
          text: "프로젝트 폴더에서 `claude remote-control`을 실행하세요. 여러 Claude Code 세션을 한꺼번에 호스팅할 수 있는 서버가 시작되고, 각 세션을 휴대폰에서 열 수 있어요. `--chrome`을 붙이면 그 세션들에서 Chrome 통합이 켜져요. 대신 모든 대화형 세션이 연결되게 하려면 `~/.claude/settings.json`에서 `remoteControlAtStartup`을 true로 설정하세요.",
          code: server,
        },
        {
          title: "로그아웃한 뒤에도 계속 돌아가게 하기",
          text: "Remote Control은 claude 프로세스가 돌아가는 동안에만 작동해요. 터미널을 닫으면 그 세션들은 오프라인이 돼요. SSH 연결이 끊겨도 살아남도록 tmux나 screen 안에서, 또는 서비스로 실행하세요. 서버 모드는 네트워크 없이 약 10분이 지나도 종료되니, 위의 루프처럼 자동으로 다시 시작하게 하세요. 긴 실행에서의 권한 모드와 사용량 한도는 [Claude Code를 24시간 돌리는 법](/blog/run-claude-code-24-7)을 참고하세요.",
        },
        {
          title: "휴대폰에서 열기",
          text: "iOS나 Android의 Claude 앱, 또는 claude.ai/code를 열고 세션을 고르세요. Claude는 서버에서 실행되고, 휴대폰은 대화를 보여 주고 내 메시지를 보내요. 자세한 설정과 문제 해결은 [Remote Control 가이드](/remote-claude-code)에 있어요. Telegram에서 Claude Code에 메시지를 보내고 싶다면 [Claude Code channels](/blog/claude-code-channels)를 참고하세요.",
        },
      ],
      source: { label: "출처: Anthropic의 Remote Control 문서(영어)", href: docs },
    },
    {
      kind: "text",
      id: "desktop",
      title: "웹사이트 로그인을 위해 데스크톱 추가하기",
      text: [
        "SSH로 접속하는 서버에는 화면이 없어요. Claude에게 로그인해야 하는 사이트가 필요해지기 전까지는 괜찮아요. 원격 데스크톱을 추가하면 그 로그인은 내가 직접 하고, 브라우저는 Claude가 쓰게 할 수 있어요.",
      ],
      points: [
        "VPS에 데스크톱 환경과 원격 데스크톱 서버를 설치하고, 어딘가에 로그인해야 할 때 노트북에서 접속하세요.",
        "Google Chrome이나 Microsoft Edge에 Claude in Chrome 확장 프로그램을 설치하고, Claude가 쓸 사이트에 로그인하세요. Claude in Chrome은 Linux에서 작동하지만 WSL에서는 지원되지 않아요.",
        "세션이 그 브라우저를 쓸 수 있도록 `claude remote-control --chrome`으로 서버를 시작하세요.",
        "원격 데스크톱에는 Tailscale로 접속하세요. Tailscale은 내 기기들을 tailnet이라는 비공개 네트워크에 묶어, 그 기기끼리만 서로 접속할 수 있게 해요. [Tailscale 소개](https://tailscale.com/kb/1151/what-is-tailscale)를 참고하세요.",
        "Ubuntu나 Debian에 데스크톱이 있다면 CLI뿐 아니라 Claude Desktop도 선택지가 돼요.",
      ],
    },
    {
      kind: "text",
      id: "limits",
      title: "Linux 서버가 못 하는 일",
      text: [
        "이 중 하나라도 중요하다면 저희 창업자가 쓰는 구성인 [집에 둔 Mac mini](/blog/claude-code-mac-mini)를 쓰세요.",
      ],
      points: [
        "컴퓨터 사용 불가. Linux에서는 Claude가 앱과 화면을 조작할 수 없어요. CLI에서 컴퓨터 사용은 macOS 전용이고, Claude Desktop에서는 macOS와 Windows의 리서치 프리뷰예요.",
        "iOS 개발 불가. Xcode와 iOS Simulator는 macOS에서만 돌아가서, Linux 서버로는 iPhone 앱을 빌드하거나 실행할 수 없어요.",
        "기능이 적은 데스크톱 앱. Linux용 Claude Desktop은 Ubuntu와 Debian용 베타이고, 컴퓨터 사용, Cowork, 받아쓰기가 없어요.",
        "계속 떠 있어야 하는 프로세스. 다른 Remote Control 구성과 마찬가지로, 서버에서 claude가 돌아가는 동안에만 세션에 접속할 수 있어요.",
      ],
    },
    {
      kind: "table",
      id: "mac-mini-vs-vps",
      title: "Claude Code용 Mac mini vs Linux VPS",
      headers: ["", "집에 둔 Mac mini", "Linux VPS"],
      rows: [
        ["실행 위치", "집에 있는 내 Mac. 파일이 거기에 남음", "DigitalOcean이나 OVHcloud 같은 업체에서 빌린 서버"],
        ["휴대폰에서 Remote Control", "예: Claude Desktop 또는 CLI", "예: 어떤 배포판에서든 CLI, 또는 Ubuntu 22.04+와 Debian 12+에서 Claude Desktop(베타)"],
        ["컴퓨터 사용", "예: macOS의 CLI. Desktop은 Pro, Max, Ultra에서 리서치 프리뷰", "아니요"],
        ["iOS 개발(Xcode, iOS Simulator)", "예", "아니요: Mac 필요"],
        ["Claude in Chrome", "예", "예, Chrome 또는 Edge로"],
        ["원격 데스크톱", "Tailscale로 접속하는 Screen Sharing", "직접 추가하는 데스크톱 환경과 원격 데스크톱"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Crewmark와 함께",
      title: "서버에 고정 업무 맡기기",
      text: [
        "잠들지 않는 서버는 메시지를 보내면 언제든 답하지만, 보내지 않으면 기다려요. Crewmark는 그 위의 Claude Code 대화를 직무, 목표, 근무 시간, 하트비트를 갖춘 AI 직원으로 바꿔 줘요. 근무 시간 동안 macOS와 Windows뿐 아니라 Linux에서도 돌아가는 `crewmark` CLI가 직원을 깨워 공유 보드의 이슈를 처리하게 해요. 직원이 실행되는 컴퓨터는 계속 켜져 있어야 하는데, VPS가 바로 그래요.",
      ],
      steps: [
        {
          title: "직원 채용하기",
          text: "[AI 직원 직무](/ai-employees)에서 소프트웨어 엔지니어나 SEO 전문가 같은 직무를 고르고, 목표와 KPI를 적으세요.",
        },
        {
          title: "서버의 Claude Code 연결하기",
          text: "설정 링크를 VPS의 Claude Code 대화에 붙여 넣으세요. `crewmark` CLI가 설치되고 그 대화가 직원과 연결돼요. Codex도 쓸 수 있어요.",
        },
        {
          title: "근무 시간과 하트비트 정하기",
          text: "평일만 또는 매일로 정할 수 있고, 근무 시간은 자정을 넘겨도 되며, 15, 30, 60, 120, 240분마다 깨어나게 할 수 있어요.",
        },
        {
          title: "휴대폰에서 이슈 배정하기",
          text: "어느 브라우저에서든 crewmark.ai 보드에서 이슈를 만들고 배정하세요. 배정하면 직원이 바로 깨어나요. 리뷰나 결정이 필요하면 직원이 이슈를 Needs action으로 바꾸고 거기서 물어봐요. 맡길 만한 일은 [Claude Code 활용 사례](/use-cases/claude-code)에 있어요.",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Remote Control로 Linux VPS에 Claude Code 설정하기" },
  mid: {
    title: "메시지를 보내지 않을 때도 서버가 계속 일하게 하고 싶나요?",
    text: "Crewmark는 내가 정한 시간 동안 하트비트에 맞춰 Claude Code를 깨우고 보드에서 다음 이슈를 넘겨줘요.",
    button: "시작하기",
  },
  faq: {
    title: "FAQ",
    items: [
      {
        q: "VPS에서 Claude Code를 돌릴 수 있나요?",
        a: "네. Linux 서버에 Claude Code CLI를 설치하고, Pro, Max, Ultra, Team, Enterprise 요금제로 로그인한 뒤, 로그아웃해도 계속 돌아가도록 tmux 안에서 `claude remote-control`을 실행하세요. 그러면 휴대폰의 Claude 앱이나 claude.ai/code에서 그 세션을 열 수 있어요.",
      },
      {
        q: "Linux 서버에 Claude Code를 어떻게 설치하나요?",
        a: "Claude Code CLI를 설치하고 Claude 계정으로 로그인하세요. CLI는 SSH로 접속하는 헤드리스 서버를 포함해 어떤 배포판에서도 작동해요. Ubuntu 22.04+나 Debian 12+에서는 apt로 Claude Desktop도 설치할 수 있지만, Linux에서는 베타이고 컴퓨터 사용, Cowork, 받아쓰기가 없어요.",
      },
      {
        q: "Claude Code Remote Control은 Linux에서 작동하나요?",
        a: "네. 여러 세션을 호스팅하는 서버로 `claude remote-control`을 실행하거나, 세션 하나에서 `/remote-control`로 Remote Control을 켜세요. Pro, Max, Ultra, Team, Enterprise 요금제의 claude.ai 로그인이 필요하고, API 키는 지원되지 않아요.",
      },
      {
        q: "SSH를 닫은 뒤에도 서버에서 Claude Code를 계속 돌리려면 어떻게 하나요?",
        a: "tmux나 screen 안에서, 또는 서비스로 실행하세요. 터미널을 닫으면 claude 프로세스가 멈추고 그 Remote Control 세션들도 오프라인이 돼요. 서버 모드는 네트워크 없이 약 10분이 지나면 종료되니, 다시 시작해 주는 루프나 서비스로 감싸세요.",
      },
      {
        q: "Linux 서버에서 Claude Code가 컴퓨터 사용을 쓸 수 있나요?",
        a: "아니요. Linux에서는 CLI에서도 Claude Desktop에서도 컴퓨터 사용을 쓸 수 없어요. Claude in Chrome은 Linux에서 작동하니, Claude가 브라우저로 웹사이트를 쓰는 건 여전히 가능해요. 컴퓨터 사용이나 iOS 개발이 필요하다면 [집에 둔 Mac mini](/blog/claude-code-mac-mini) 같은 Mac을 쓰세요.",
      },
      {
        q: "VPS에서 Claude Code를 돌리려면 무엇이 필요한가요?",
        a: "SSH로 접속할 수 있는 Linux 서버, Remote Control이 포함된 Claude 요금제(Pro, Max, Ultra, Team, Enterprise), 그리고 휴대폰의 Claude 앱이에요. CLI는 어떤 배포판에서도 되고, Claude Desktop에는 Ubuntu 22.04+나 Debian 12+가 필요해요.",
      },
    ],
  },
  cta: {
    title: "서버에 일을 맡기세요.",
    text: "Crewmark는 Claude Code와 Codex 세션을 직무, 목표, 근무 시간, 하트비트를 갖춘 AI 직원으로 바꿔 줘요.",
    button: "시작하기",
  },
  checked:
    "2026년 11월 14일에 Anthropic의 Claude Code 문서(Remote Control, Linux용 Claude Desktop, 컴퓨터 사용, Chrome 통합), Tailscale 문서와 대조해 확인했습니다.",
  disclaimer:
    "Crewmark는 독립 제품으로, Anthropic이나 이 페이지에 언급된 어떤 회사와도 제휴하거나 그 보증을 받지 않았습니다. Claude와 Claude Code는 Anthropic의 상표입니다.",
};
