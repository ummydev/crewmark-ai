import type { GuideCopy } from "@/components/landing/guide-article";

// Korean translation of /blog/github-copilot-slack; the English master is src/content/blog/github-copilot-slack.ts.

const docs = "https://docs.github.com/en/copilot/how-tos/copilot-integrations/integrate-cloud-agent-with-slack";

const prompts = `@GitHub Add "Hello World" to the README in octo-org/octo-repo on the develop branch

@GitHub settings      # 이 채널의 기본 저장소 고르기
@GitHub help          # 명령어 목록 보기`;

export const copy: GuideCopy = {
  meta: {
    title: "GitHub Copilot Slack 연동: 설정과 대안 | Crewmark AI",
    description:
      "Slack과 Teams의 @GitHub가 2026년 11월 6일 정식 출시됐어요. 설정 방법, 채팅 스레드에서 Copilot 에이전트가 하는 일, 권한과 제한, Claude Code in Slack과의 비교를 정리했어요.",
  },
  breadcrumb: "Slack의 GitHub Copilot",
  parent: { name: "블로그", href: "/blog" },
  article: { published: "2026-11-07" },
  hero: {
    kicker: "블로그 · AI 코딩 에이전트",
    title: "Slack의 GitHub Copilot: 채팅 스레드를 풀 리퀘스트로 바꾸기",
    lead: "Slack의 GitHub Copilot을 쓰면 스레드에서 `@GitHub`를 멘션하는 것만으로 Copilot의 클라우드 에이전트가 대화를 맥락 삼아 버그를 조사하고, 이슈를 만들고, 변경 사항을 작성해 풀 리퀘스트까지 열어 줘요. 2026년 11월 6일 Slack과 Microsoft Teams에서 정식 출시됐어요. 이 가이드에서는 설정 방법, 할 수 있는 일과 없는 일, 누가 호출할 수 있는지, 그리고 Claude Code in Slack이나 늘 일하는 AI 직원과 어떻게 다른지 다뤄요.",
    cta: "시작하기",
    secondary: "설정 방법으로 이동",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "Slack과 Teams에서 @GitHub가 하는 일",
      points: [
        "채팅 스레드에서 조사하고, 계획하고, 코드를 작성하고, 이슈와 풀 리퀘스트를 열어요. 스레드 전체가 맥락으로 쓰여요.",
        "클라우드 샌드박스에서 비동기로 일하고, 만든 결과물의 링크와 함께 요약을 올려요.",
        "이슈를 하나, 여러 개, 또는 상위·하위 이슈로 만들 수 있고, 같은 조직이나 계정이 소유한 저장소를 최대 11개까지 넘나들며 작업해요.",
        "모델 선택, 저장소 관리자가 설정한 MCP 서버, Copilot Memory(프리뷰)를 지원해요.",
        "11월 6일 릴리스부터는 메시지를 보고 저장소를 고르고, 이슈와 PR마다 어떤 대화와 사용자에게서 왔는지 남겨요. Teams에서는 채팅 옆 Canvas에 계획, diff, 미리보기를 보여 줘요.",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Slack에서 GitHub Copilot 설정하는 방법",
      steps: [
        {
          title: "사용할 수 있는지 확인하기",
          text: "유료 Copilot 요금제와, 변경하려는 저장소에 대한 쓰기 권한이 필요해요. 조직과 엔터프라이즈에서는 \"Copilot in the cloud\" 정책이 기본으로 켜져 있지만 소유자가 끌 수 있어요. 엔터프라이즈 소유 저장소라면 관리자가 앱을 설치하고 앱이 접근할 저장소를 골라요.",
        },
        {
          title: "Slack용 GitHub 앱 설치하기",
          text: "slack.github.com에서 워크스페이스에 GitHub 연동을 추가하세요(Teams는 teams.github.com).",
        },
        {
          title: "계정 연결하기",
          text: "GitHub 앱과 DM을 열거나 스레드에 `@GitHub`를 입력한 뒤, 안내에 따라 GitHub 계정을 연결하세요. `@GitHub help`로 명령어 목록을 볼 수 있어요.",
        },
        {
          title: "채널의 기본 저장소 정하기",
          text: "채널에서 `@GitHub settings`를 실행해 소유자와 저장소를 고르세요. 첫 번째 저장소가 기본 저장소가 돼요. DM에는 기본값이 없으니 프롬프트에 저장소와 브랜치를 적어 주세요.",
        },
        {
          title: "평소 말투로 일 맡기기",
          text: "작업 내용과 함께 `@GitHub`를 멘션하거나, GitHub 알림에 답장으로 요청하세요. Copilot이 스레드를 읽고 클라우드에서 작업한 뒤 이슈나 풀 리퀘스트 링크로 답해요.",
          code: prompts,
        },
      ],
      source: { label: "출처: GitHub Docs, Integrate Copilot cloud agent with Slack", href: docs },
    },
    {
      kind: "text",
      title: "권한과 제한",
      points: [
        "선택한 모든 저장소에 쓰기 권한이 있는 사람만 세션을 시작하거나 방향을 바꿀 수 있어요. 스레드의 누구나 의견을 보탤 수 있어요.",
        "게스트와 외부 협업자는 세션을 시작하거나 방향을 바꿀 수 없어요.",
        "DM에서는 Copilot이 연결된 내 계정의 권한으로 움직이고, 공유 채널에서는 앱 ID로 이슈와 PR을 만들어요.",
        "스레드 전체가 맥락으로 수집돼 생성된 풀 리퀘스트에 저장되니, 대화에 비밀 정보를 올리지 마세요.",
        "GitHub 발표에는 Slack 세션의 과금 방식이 나와 있지 않아요. 널리 도입하기 전에 요금제의 Copilot 사용량을 확인하세요.",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Slack의 GitHub Copilot vs Claude Code in Slack vs AI 직원",
      headers: ["", "Slack의 GitHub Copilot", "Claude Code in Slack", "Crewmark AI 직원"],
      rows: [
        ["일이 시작되는 방식", "`@GitHub` 멘션 또는 앱에 DM", "팀 채널에서 `@Claude` 멘션", "근무 시간 중 하트비트가 다음 이슈를 가져가요. 직접 배정할 수도 있어요"],
        ["실행 위치", "GitHub의 클라우드 샌드박스", "Anthropic의 클라우드(웹용 Claude Code)", "내 컴퓨터의 Claude Code, Codex, DeepSeek Harness, OpenCode"],
        ["결과물", "이슈와 풀 리퀘스트", "풀 리퀘스트와 리뷰", "보드의 어떤 이슈든 작업하고, 댓글과 나에게 보내는 메시지를 남겨요"],
        ["요금제", "유료 Copilot 요금제", "Pro, Max, Ultra(웹용 Claude Code 활성화 필요)", "이미 쓰고 있는 에이전트 구독"],
        ["내가 없어도 계속 일하나", "아니요: 멘션 한 번에 작업 하나", "아니요: 멘션 한 번에 작업 하나", "예, 근무 시간 내내"],
      ],
    },
    {
      kind: "text",
      title: "채팅 봇으로 충분할 때와 부족할 때",
      text: [
        "Slack의 Copilot은 버그 제보가 스레드에 올라온 순간에 빛나요. 멘션 한 번이면 풀 리퀘스트가 따라오죠. 그래도 여전히 수동적이에요. 누군가 요청하기 전에는 아무 일도 일어나지 않고, 멘션 한 번은 작업 하나예요. 직무와 목표를 갖고 백로그를 스스로 처리하는 에이전트를 원한다면 [AI 직원](/ai-employees)과 [Claude Code를 능동적으로 만드는 방법](/proactive-claude-code)을 보세요. 여러 에이전트를 돌리는 다른 방법은 [Claude Code 오케스트레이션 도구](/blog/claude-code-orchestration-tools)에 정리했어요.",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Crewmark로",
      title: "\"봇을 @하기\"에서 다음 작업을 스스로 가져가는 직원으로",
      text: [
        "Crewmark는 Claude Code, Codex, DeepSeek Harness, OpenCode 세션을 직무, 목표, 근무 시간을 가진 AI 직원으로 바꿔 줘요. 하트비트로 깨어나 공유 보드에서 다음 이슈를 가져가고, 일하면서 댓글을 남기고, 결정이 필요하면 메시지를 보내요.",
      ],
      steps: [
        {
          title: "채팅하듯 일 배정하기",
          text: "어떤 브라우저나 휴대폰에서든 이슈를 만들고 배정하세요. 직원이 바로 알아채요.",
        },
        {
          title: "계속 일하게 두기",
          text: "내가 메시지를 보내지 않는 사이에도 15분, 30분, 60분 하트비트로 자기 이슈를 처리해요.",
        },
        {
          title: "빠른 수정은 Copilot에게 맡기기",
          text: "둘은 충돌하지 않아요. 스레드에서 한 번 하는 요청은 `@GitHub`로, 꾸준히 쌓이는 백로그는 직원에게 맡기세요.",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Slack에서 GitHub Copilot 설정하기" },
  mid: {
    title: "멘션을 기다리지 않는 에이전트가 필요한가요?",
    text: "Crewmark는 직무, 목표, 이슈 보드를 갖춘 Claude Code나 Codex를 하트비트로 깨워요.",
    button: "시작하기",
  },
  faq: {
    title: "Slack의 GitHub Copilot FAQ",
    items: [
      {
        q: "Slack의 GitHub Copilot은 정식 출시됐나요?",
        a: "네. GitHub는 2026년 11월 6일 Slack과 Teams의 @GitHub 정식 출시를 발표했어요.",
      },
      {
        q: "GitHub Copilot을 Slack에 추가하려면 어떻게 하나요?",
        a: "slack.github.com에서 Slack용 GitHub 앱을 설치한 뒤, 앱에 DM을 보내거나 스레드에서 `@GitHub`를 멘션해 GitHub 계정을 연결하세요. 채널의 기본 저장소는 `@GitHub settings`로 정해요.",
      },
      {
        q: "Slack에서 Copilot을 쓰려면 어떤 요금제가 필요한가요?",
        a: "유료 Copilot 요금제와, 변경할 저장소에 대한 쓰기 권한이 필요해요. 조직 소유자는 이 기능이 의존하는 \"Copilot in the cloud\" 정책을 끌 수 있어요.",
      },
      {
        q: "Slack의 GitHub Copilot이 풀 리퀘스트를 열 수 있나요?",
        a: "네. 조사하고, 클라우드 샌드박스에서 변경 사항을 작성해 풀 리퀘스트를 연 뒤, 스레드에 링크가 담긴 요약을 올려요.",
      },
      {
        q: "Microsoft Teams에서도 되나요?",
        a: "네. @GitHub는 Teams에서도 정식 출시됐고, 대화 옆 Canvas에 계획, 코드 변경, 미리보기를 보여 줘요.",
      },
      {
        q: "Slack 채널에서 누가 Copilot을 호출할 수 있나요?",
        a: "선택한 모든 저장소에 쓰기 권한이 있는 사람만 세션을 시작하거나 방향을 바꿀 수 있어요. 스레드의 다른 사람은 의견을 보탤 수 있고, 게스트와 외부 협업자는 호출할 수 없어요.",
      },
      {
        q: "Slack의 GitHub Copilot과 Claude Code in Slack, 무엇이 다른가요?",
        a: "둘 다 Slack 멘션 하나를 클라우드 코딩 작업으로 바꿔요. Copilot은 유료 Copilot 요금제로 쓰고 이슈와 PR을 만들어요. Claude Code in Slack은 웹용 Claude Code가 켜진 Claude Pro, Max, Ultra 요금제가 필요해요.",
      },
    ],
  },
  cta: {
    title: "요청을 기다리지 않는 AI 팀원을 팀에 들이세요.",
    text: "Crewmark는 Claude Code, Codex, DeepSeek Harness, OpenCode 세션을 직무, 목표, 근무 시간, 하트비트를 갖춘 AI 직원으로 바꿔 줘요.",
    button: "시작하기",
  },
  checked: "2026년 11월 7일에 GitHub의 changelog(2026년 11월 6일), GitHub Docs, Anthropic의 Claude Code 문서와 대조해 확인했어요.",
  disclaimer:
    "Crewmark는 독립 제품이며 GitHub, Microsoft, Slack, Anthropic과 제휴 관계가 아니고 그들의 보증을 받지 않았어요. 제품 이름은 각 소유자의 상표예요.",
};
