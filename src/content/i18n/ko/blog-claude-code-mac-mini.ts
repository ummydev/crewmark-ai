import type { GuideCopy } from "@/components/landing/guide-article";

// Korean translation of /blog/claude-code-mac-mini; the English master is src/content/blog/claude-code-mac-mini.ts.

const docs = "https://code.claude.com/docs/en/remote-control";

const remoteControl = `# Claude Code CLI: connect every new interactive session
# (add this to ~/.claude/settings.json)
{ "remoteControlAtStartup": true }

# Or run a Remote Control server that hosts several sessions at once;
# --chrome turns on Chrome integration in its sessions
claude remote-control --chrome`;

export const copy: GuideCopy = {
  meta: {
    title: "Claude Code Mac mini 설정: 휴대폰으로 24시간 돌리기",
    description:
      "집의 Mac mini에서 Claude Code 24시간 돌리기: 잠자기 끄기, Remote Control 켜기, 휴대폰으로 조종, Tailscale로 데스크톱 접속.",
  },
  breadcrumb: "Mac mini에서 Claude Code 돌리기",
  parent: { name: "블로그", href: "/blog" },
  article: { published: "2026-11-14" },
  hero: {
    kicker: "블로그 · Claude Code",
    title: "Mac mini에서 돌리는 Claude Code: 휴대폰으로 조종하는 상시 가동 서버",
    lead: "Remote Control을 쓰면 휴대폰의 Claude 앱으로 Claude Code를 조종할 수 있지만, Claude Code를 실행하는 컴퓨터가 켜져 있을 때만 가능해요. 그러니 꺼지지 않는 컴퓨터를 마련해 주세요. 저희 창업자는 집에 Mac mini를 상시 가동 서버로 두고 있어요. 거기서 Remote Control을 켠 Claude Code가 돌아가고, 휴대폰으로 그걸 조종하고, MacBook Air에서는 Tailscale과 원격 데스크톱으로 Mac mini의 데스크톱에 접속해요. 데이터는 모두 Mac mini에 남아요. 저희 창업자가 지금으로서는 가장 잘 맞는다고 보는 구성이고, 아래에서 만드는 방법을 알려 드릴게요.",
    cta: "시작하기",
    secondary: "단계 보기",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      id: "why-always-on",
      title: "Claude Code에 계속 켜져 있는 컴퓨터가 필요한 이유",
      text: [
        "가장 빨리 시작하는 방법은 이미 가진 컴퓨터를 쓰는 거예요. Claude 데스크톱 앱에는 Remote Control이 들어 있어요. 제어하려는 컴퓨터에서 Settings를 열고 Connect new sessions to Remote Control을 켠 뒤, 휴대폰의 Claude 앱에서 세션을 여세요. Claude는 계속 그 컴퓨터에서 실행되고, 휴대폰은 그 세션을 들여다보는 창이에요.",
        "문제는 그 컴퓨터가 켜져 있을 때만 된다는 거예요. 노트북을 닫으면 다시 깨어날 때까지 휴대폰에서 Claude Code에 닿을 수 없어요. 집에 계속 켜 둔 Mac mini가 이 한계를 없애 주고, 이 가이드의 나머지 부분에서 바로 그 구성을 만들어요.",
      ],
    },
    {
      kind: "text",
      id: "setup",
      title: "구성 한눈에 보기",
      points: [
        "집에 둔 Mac mini. 켜 두고 잠들지 않게 설정해요. 이게 서버예요. Claude Code, 저장소, 로그인 정보, 파일이 모두 여기에 있어요.",
        "Remote Control을 켠 Claude Code. Claude 데스크톱 앱이든 CLI든 괜찮아요.",
        "어디서든 그 세션을 열 수 있는 휴대폰의 Claude 앱(iOS 또는 Android), 또는 아무 브라우저에서 여는 claude.ai/code.",
        "Tailscale과 Screen Sharing. 노트북에서 Mac mini 앞에 앉아 있는 것처럼 그 데스크톱을 열 수 있어요.",
      ],
    },
    {
      kind: "text",
      id: "why-mac-mini",
      title: "Linux 서버가 아니라 Mac mini인 이유",
      text: [
        "빌린 Linux 서버도 계속 켜져 있고, 그 구성은 [VPS에서 Claude Code 돌리기](/blog/claude-code-vps)에 정리했어요. Mac은 Linux가 못 하는 것들을 더해 줘요.",
      ],
      points: [
        "컴퓨터 사용. Claude가 앱과 화면을 직접 조작하는 기능이에요. CLI에서는 macOS 전용이에요. Claude Desktop에서는 macOS와 Windows의 리서치 프리뷰로 Pro, Max, Ultra에서 쓸 수 있고(Team, Enterprise 제외) 앱이 실행 중이어야 해요. [Anthropic의 컴퓨터 사용 문서](https://code.claude.com/docs/en/computer-use)를 참고하세요.",
        "iOS 앱. Xcode와 iOS Simulator는 macOS에서만 돌아가므로, Claude Code로 iPhone 앱 작업을 한다면 서버는 Mac이어야 해요.",
        "완전한 데스크톱 앱. Linux용 Claude Desktop은 Ubuntu와 Debian용 베타이고, 컴퓨터 사용, Cowork, 받아쓰기가 없어요.",
        "집에 있는 내 데이터. 저장소, 브라우저 로그인, 파일이 업체의 서버가 아니라 내가 가진 머신에 남아요.",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Mac mini에 Claude Code 설정하는 법",
      steps: [
        {
          title: "Mac mini를 깨어 있게 하기",
          text: "System Settings > Energy에서 Prevent automatic sleeping when the display is off를 켜면 디스플레이가 꺼져도 Mac mini가 계속 돌아가요. Wake for network access도 켜 두면 공유 서비스를 위해 깨어날 수 있어요. [Apple의 잠자기 및 깨우기 설정 안내](https://support.apple.com/guide/mac-help/set-sleep-and-wake-settings-mchle41a6ccd/mac)를 참고하세요.",
        },
        {
          title: "Claude Code 설치하고 로그인하기",
          text: "Claude 데스크톱 앱이나 Claude Code CLI, 또는 둘 다 설치하고 Claude 계정으로 로그인하세요. Remote Control에는 Pro, Max, Ultra, Team, Enterprise 요금제가 필요해요. API 키로는 작동하지 않고, Team이나 Enterprise에서는 먼저 Owner가 켜야 해요.",
        },
        {
          title: "Remote Control 켜기",
          text: "데스크톱 앱에서 Settings > Code(또는 Settings > Claude Code)를 열고 Connect new sessions to Remote Control을 켜면, 새 세션을 모두 휴대폰에서 열 수 있어요. 세션 하나만이라면 Code 탭에 `/remote-control`이나 `/rc`를 입력하세요. CLI에서는 `~/.claude/settings.json`에서 `remoteControlAtStartup`을 true로 설정하거나, 여러 세션을 한꺼번에 호스팅하는 서버로 `claude remote-control`을 실행하세요.",
          code: remoteControl,
        },
        {
          title: "휴대폰에서 열기",
          text: "iOS나 Android의 Claude 앱, 또는 브라우저에서 claude.ai/code를 열고 세션을 고르세요. Claude는 계속 Mac mini에서 실행되고, 휴대폰은 메시지를 보내고 결과를 보여 줘요. 네트워크가 끊겨도 Mac mini가 다시 온라인이 되면 Claude Code가 자동으로 다시 연결돼요. 자세한 설정과 문제 해결은 [Remote Control 가이드](/remote-claude-code)에 있어요.",
        },
        {
          title: "Mac mini와 노트북을 Tailscale에 연결하기",
          text: "Mac mini와 작업할 노트북에 Tailscale을 설치하고 둘 다 같은 tailnet에 추가하세요. Tailscale은 암호화된 WireGuard 연결로 내 기기들 사이에 비공개 P2P 네트워크를 만들고, 같은 tailnet에 있는 기기끼리만 서로 접속할 수 있어요. [Tailscale 소개](https://tailscale.com/kb/1151/what-is-tailscale)를 참고하세요.",
        },
        {
          title: "Screen Sharing 켜기",
          text: "Mac mini에서 System Settings > General > Sharing을 열고 Screen Sharing을 켜세요. Remote Management와 동시에 켤 수 없으니, 켜져 있다면 먼저 끄세요. [Apple의 Screen Sharing 안내](https://support.apple.com/guide/mac-help/turn-screen-sharing-on-or-off-mh11848/mac)를 참고하세요.",
        },
        {
          title: "노트북에서 작업하기",
          text: "노트북에서 Screen Sharing으로 tailnet상의 Mac mini 이름이나 주소에 접속하세요. 그러면 Mac mini의 데스크톱이 열려요. 집에서든 다른 어디서든 그 브라우저로 웹사이트에 로그인하고, Xcode와 Simulator를 열고, Claude가 하는 일을 지켜볼 수 있어요. 저희 창업자는 MacBook Air에서 이렇게 일하고, 파일은 Mac mini를 떠나지 않아요.",
        },
      ],
      source: { label: "출처: Anthropic의 Remote Control 문서(영어)", href: docs },
    },
    {
      kind: "text",
      id: "keep-running",
      title: "계속 돌아가게 하는 것과 멈추게 하는 것",
      points: [
        "Claude Code 프로세스가 계속 돌아가야 해요. 데스크톱 앱을 종료하거나 터미널을 닫으면 세션이 오프라인이 되니, Mac mini에서 열어 두세요.",
        "잠자기와 네트워크 끊김은 복구돼요. 머신이 다시 온라인이 되면 Claude Code가 자동으로 다시 연결해요. 서버 모드(`claude remote-control`)는 덜 너그러워요. 네트워크 없이 약 10분이 지나면 종료되니 다시 시작하세요.",
        "Remote Control은 이미 실행 중인 세션을 조종해요. 스스로 일을 시작하지는 않아서, 작업이 끝나면 Claude는 다음 메시지를 기다려요.",
        "권한 확인 창과 사용량 한도도 긴 실행을 멈춰요. 권한 모드, `/goal`, 요금제 한도는 [Claude Code를 24시간 돌리는 법](/blog/run-claude-code-24-7)에서 다뤄요.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Crewmark와 함께",
      title: "늘 켜져 있는 Mac mini에 고정 업무 맡기기",
      text: [
        "늘 켜져 있는 Mac mini는 메시지를 보내면 언제든 답하지만, 보내지 않으면 기다려요. Crewmark는 그 위의 Claude Code 대화를 직무, 목표, 근무 시간, 하트비트를 갖춘 AI 직원으로 바꿔 줘요. 근무 시간 동안 `crewmark` CLI가 직원을 깨워 공유 보드의 이슈를 처리하게 해요. 직원이 실행되는 컴퓨터는 계속 켜져 있어야 하는데, Mac mini가 바로 그래요.",
      ],
      steps: [
        {
          title: "직원 채용하기",
          text: "[AI 직원 직무](/ai-employees)에서 소프트웨어 엔지니어나 SEO 전문가 같은 직무를 고르고, 목표와 KPI를 적으세요.",
        },
        {
          title: "Mac mini의 Claude Code 연결하기",
          text: "설정 링크를 Mac mini의 Claude Code 대화에 붙여 넣으세요. `crewmark` CLI가 설치되고 그 대화가 직원과 연결돼요. Codex도 쓸 수 있어요.",
        },
        {
          title: "근무 시간과 하트비트 정하기",
          text: "근무 시간을 평일만 또는 매일로 정하고, 직원이 깨어나는 주기를 15, 30, 60, 120, 240분 중에서 고르세요. 근무 시간은 자정을 넘길 수 있어서, 잠들지 않는 머신이라면 야간 근무도 돼요.",
        },
        {
          title: "휴대폰에서 이슈 배정하기",
          text: "어느 브라우저에서든 crewmark.ai 보드에서 이슈를 만들고 배정하세요. 배정하면 직원이 바로 깨어나요. 직원은 이슈마다 상태를 최신으로 유지하고, 리뷰나 결정이 필요하면 이슈를 Needs action으로 바꾸고 거기서 물어봐요. 맡길 만한 일은 [Claude Code 활용 사례](/use-cases/claude-code)에 있어요.",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Mac mini를 상시 가동 서버로 삼아 Claude Code 설정하기" },
  mid: {
    title: "메시지를 보내지 않을 때도 Mac mini가 계속 일하게 하고 싶나요?",
    text: "Crewmark는 내가 정한 시간 동안 하트비트에 맞춰 Claude Code를 깨우고 보드에서 다음 이슈를 넘겨줘요.",
    button: "시작하기",
  },
  faq: {
    title: "FAQ",
    items: [
      {
        q: "Mac mini에서 Claude Code를 24시간 돌릴 수 있나요?",
        a: "네, Mac mini가 깨어 있고 Claude Code 프로세스가 계속 돌아가는 한 가능해요. System Settings > Energy에서 Prevent automatic sleeping when the display is off를 켜고, Claude 데스크톱 앱을 열어 두거나(또는 CLI를 계속 실행하고), 휴대폰에서 접속할 수 있도록 Remote Control을 켜세요. 권한 확인 창과 사용량 한도는 그대로 적용돼요.",
      },
      {
        q: "Mac mini에 Claude Code를 어떻게 설정하나요?",
        a: "Energy 설정에서 Mac이 잠들지 않게 하고, Claude Code나 Claude 데스크톱 앱을 설치해 로그인하고, Connect new sessions to Remote Control을 켠(또는 `claude remote-control`을 실행한) 다음, 휴대폰의 Claude 앱에서 세션을 여세요. 노트북에서 그 데스크톱에 접속하려면 Tailscale과 Screen Sharing을 더하세요.",
      },
      {
        q: "iPhone에서 Mac mini의 Claude Code를 어떻게 쓰나요?",
        a: "Remote Control로 써요. Mac mini의 세션에서 Remote Control을 켜고, iPhone의 Claude 앱(또는 claude.ai/code)을 열어 세션을 고르세요. Claude는 Mac mini에서 실행되고, 휴대폰은 메시지를 보내고 결과를 보여 줘요. Pro, Max, Ultra, Team, Enterprise 요금제가 필요해요.",
      },
      {
        q: "Claude Code에 Tailscale이 필요한가요?",
        a: "Remote Control에는 필요 없어요. 세션은 Claude 앱에서 열거든요. Tailscale은 노트북에서 Screen Sharing으로 데스크톱을 여는 것처럼 Mac mini 자체에 접속할 때 써요. 내 기기들을 tailnet이라는 비공개 네트워크에 묶어서, 그 기기끼리만 서로 접속할 수 있게 해요.",
      },
      {
        q: "Mac mini에서 Claude Code로 iOS 앱을 만들 수 있나요?",
        a: "그걸 가능하게 하는 게 바로 Mac이에요. Xcode와 iOS Simulator는 macOS에서만 돌아가고, 그래서 이 구성은 Linux 서버가 아니라 Mac mini를 써요. 앱의 프로젝트 폴더에서 Mac mini의 Claude Code를 실행하고, Simulator를 직접 보고 싶을 때는 Screen Sharing으로 데스크톱을 여세요.",
      },
      {
        q: "Claude Code에는 Mac mini와 Linux VPS 중 무엇이 좋을까요?",
        a: "Claude Code에 터미널과 브라우저만 필요하다면 Linux VPS로 충분해요. CLI는 어떤 배포판에서도 돌아가고 Claude in Chrome도 Linux에서 작동해요. 컴퓨터 사용, Xcode와 Simulator를 쓰는 iOS 개발이 필요하거나 파일을 집에 있는 머신에 두고 싶다면 Mac mini를 고르세요. [VPS에서 Claude Code 돌리기](/blog/claude-code-vps)를 참고하세요.",
      },
    ],
  },
  cta: {
    title: "Mac mini에 일자리를 주세요.",
    text: "Crewmark는 Claude Code와 Codex 세션을 직무, 목표, 근무 시간, 하트비트를 갖춘 AI 직원으로 바꿔 줘요.",
    button: "시작하기",
  },
  checked:
    "2026년 11월 14일에 Anthropic의 Claude Code 문서(Remote Control, 컴퓨터 사용, Linux용 Claude Desktop), Apple 지원 문서, Tailscale 문서와 대조해 확인했습니다.",
  disclaimer:
    "Crewmark는 독립 제품으로, Anthropic, Apple, Tailscale과 제휴하거나 이들의 보증을 받지 않았습니다. Claude와 Claude Code는 Anthropic의 상표이고, Mac, Mac mini, Xcode는 Apple의 상표입니다.",
};
