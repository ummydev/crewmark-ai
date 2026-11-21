import type { GuideCopy } from "@/components/landing/guide-article";

// Korean translation of /blog/openclaw-reviews; the English master is src/content/blog/openclaw-reviews.ts.

const hn = {
  changingMyLife: "https://news.ycombinator.com/item?id=46931805",
  appleIntelligence: "https://news.ycombinator.com/item?id=46893970",
  personalComputer: "https://news.ycombinator.com/item?id=47129647",
  securityNightmare: "https://news.ycombinator.com/item?id=47479962",
  anthropicSubscriptions: "https://news.ycombinator.com/item?id=47633396",
  memory: "https://news.ycombinator.com/item?id=47721955",
  whoIsUsing: "https://news.ycombinator.com/item?id=47783940",
  grokBot: "https://news.ycombinator.com/item?id=49261514",
  agenticSetup: "https://news.ycombinator.com/item?id=50366117",
  saas: "https://news.ycombinator.com/item?id=50392586",
};

export const copy: GuideCopy = {
  meta: {
    title: "OpenClaw 후기: Hacker News 사용자 평가 (2026)",
    description:
      "Hacker News 스레드 10개(2026년 2월~11월)로 본 OpenClaw 후기: 좋아하는 점, 가장 흔한 불만, 대신 옮겨 가는 도구.",
  },
  breadcrumb: "OpenClaw 후기",
  parent: { name: "블로그", href: "/blog" },
  article: { published: "2026-11-13" },
  hero: {
    kicker: "블로그 · 후기",
    title: "OpenClaw 후기: Hacker News 사용자들은 뭐라고 할까",
    lead: "OpenClaw는 내 컴퓨터에서 돌아가는 오픈소스 개인 AI 비서로, WhatsApp, Telegram, Slack처럼 이미 쓰는 채팅 앱에서 답해 줘요. 2026년 2월부터 11월까지 올라온 OpenClaw 관련 Hacker News 스레드 10개를 읽었어요. 사용자들은 자잘한 개인 업무에 쓰기 좋고 메모리를 직접 소유할 수 있다는 점을 좋아해요. 가장 많이 나온 불만은 자주 고장 나서 계속 손봐야 한다는 점(스레드 10개 중 6개)과 넓은 접근 권한이 보안 위험이라는 점(10개 중 5개)이에요.",
    cta: "시작하기",
    secondary: "주제별로 보기",
    secondaryHref: "#at-a-glance",
  },
  sections: [
    {
      kind: "text",
      id: "method",
      title: "후기를 모은 방법",
      text: [
        "2026년 11월 13일에 OpenClaw에 관한 Hacker News 스레드 10개를 한 페이지씩 읽었어요. 스레드는 2026년 2월부터 11월 사이에 올라왔고, 그중 7개는 논의가 가장 활발했던 2월부터 4월 사이의 것이에요. 댓글이 수백 개에 이르는 큰 스레드에서는 모든 답글이 아니라 최상위 댓글과 주요 주제를 다룬 부분을 읽었어요.",
      ],
      points: [
        "주제는 스레드 10개 중 적어도 2개에서 나온 것만 싣고, 몇 개에서 나왔는지 밝혀요. 댓글 하나에서만 나온 의견은 뺐어요.",
        "스레드 하나는 Grok Bot에 관한 것이라 Grok Bot과 OpenClaw를 비교한 댓글을 썼어요. 다른 하나는 사람들에게 AI 사용 환경 전반을 묻는 스레드라 그중 OpenClaw 언급만 썼어요.",
        "Google 검색으로 Reddit 스레드 9개도 찾았지만 reddit.com을 열 수 없어서 읽거나 요약하지 않았어요. 제목만 [Reddit의 다른 논의](#reddit)에 실었어요.",
        "설문 조사가 아니라 공개된 논의의 표본이에요. 어떤 도구에 대해 글을 쓰는 사람은 의견이 강한 편이에요. 월은 각 스레드가 올라온 지 얼마나 지났는지로 계산해서 한 달쯤 어긋날 수 있어요.",
        "대가를 주거나 요청해서 받은 내용은 없어요. 저희는 글을 올리거나 후기를 부탁하거나 누군가에게 연락하지 않았어요. 요약은 저희 말로 썼고, 하나뿐인 인용은 따로 표시하고 링크를 달았어요.",
      ],
    },
    {
      kind: "table",
      id: "at-a-glance",
      title: "OpenClaw 후기 한눈에 보기",
      text: ["저희가 읽은 Hacker News 스레드 10개에서 나온 내용이에요. 개수는 댓글이 아니라 스레드 기준이에요."],
      headers: ["주제", "사용자 의견", "스레드"],
      rows: [
        ["칭찬: 개인 업무에 편리함", "제대로 작동할 때는 알림, 후속 연락, 캘린더 작업, 그룹 채팅 봇", "10개 중 3개"],
        ["칭찬: 쓰던 채팅 앱에서, 내가 소유하는 메모리로", "WhatsApp 같은 앱에서 답하고, 메모리를 내가 읽고 고칠 수 있는 파일로 보관함", "10개 중 2개"],
        ["칭찬: 비서가 나아갈 방향", "비판하는 사람들도 기본 탑재 비서가 이랬어야 했다고 봄", "10개 중 2개"],
        ["불만: 자주 고장 남", "업데이트하면 뭔가 고장 나고, 유지 관리에 드는 시간이 아끼는 시간보다 많음", "10개 중 6개"],
        ["불만: 보안 위험", "내 컴퓨터와 계정에 대한 넓은 접근 권한, 프롬프트 인젝션에 노출", "10개 중 5개"],
        ["불만: 실제 쓰임보다 앞선 과장", "구체적인 예 없는 큰 주장, 보여 주기 같은 데모 작업", "10개 중 4개"],
        ["불만: 비용과 구독", "모델 사용료가 쌓이고, 다른 회사의 구독 규칙에 좌우됨", "10개 중 3개"],
        ["불만: 여분의 컴퓨터와 기술이 필요함", "유지 관리를 마다하지 않는 사람이 별도 컴퓨터에서 돌리는 게 가장 좋음", "10개 중 2개"],
      ],
    },
    {
      kind: "text",
      id: "praise",
      title: "사용자들이 좋아하는 점",
      points: [
        `제대로 작동할 때는 개인 업무에 편리해요(스레드 10개 중 3개). 사용자들은 OpenClaw가 알림과 후속 연락을 보내고, 자잘한 캘린더 작업을 처리하고, 가족이나 그룹 채팅용 봇을 돌린다고 설명해요. Hacker News 스레드: [2026년 4월](${hn.whoIsUsing}), [2026년 4월](${hn.memory}), [2026년 11월](${hn.agenticSetup}).`,
        `이미 쓰는 채팅 앱 안에 있고, 메모리를 내가 소유해요(10개 중 2개). 사용자들은 WhatsApp 같은 앱에서 메시지를 보낼 수 있고, 메모리를 자기 컴퓨터의 파일로 보관해 직접 읽고 고칠 수 있다는 점을 좋아해요. 스레드: [2026년 4월](${hn.whoIsUsing}), [2026년 8월](${hn.grokBot}).`,
        `비서가 나아갈 방향을 엿볼 수 있어요(10개 중 2개). OpenClaw를 비판하는 댓글 작성자들도 휴대폰과 컴퓨터에 기본으로 들어 있는 비서가 했어야 할 일을 OpenClaw가 한다고 말하고, 이 아이디어가 이 프로젝트보다 오래갈 거라고 봐요. 스레드: [2026년 2월](${hn.appleIntelligence}), [2026년 3월](${hn.securityNightmare}).`,
      ],
    },
    {
      kind: "text",
      id: "complaints",
      title: "자주 나온 불만",
      points: [
        `자주 고장 나고 계속 손봐야 해요(스레드 10개 중 6개). 사용자들은 업데이트하면 뭔가 고장 나고, 기능이 예고 없이 작동을 멈추고, 쓰는 시간보다 고치는 시간이 더 길다고 설명해요. 2026년 11월에 한 Hacker News 댓글 작성자는 이렇게 말했어요. “업데이트할 때마다 뭔가 고장 났고, 고치는 데 더 많은 시간을 썼다”(“Every update something broke, and I spent more time fixing things”) ([스레드](${hn.agenticSetup})). 스레드: [2026년 2월](${hn.appleIntelligence}), [2026년 4월](${hn.whoIsUsing}), [2026년 4월](${hn.memory}), [2026년 8월](${hn.grokBot}), [2026년 11월](${hn.agenticSetup}), [2026년 11월](${hn.saas}).`,
        `넓은 접근 권한이 보안 위험이에요(10개 중 5개). 사용자들은 OpenClaw가 내 컴퓨터와 계정에 폭넓게 접근하고, 프롬프트 인젝션으로 조종될 수 있다고 지적해요. 흔히 나오는 조언은 별도 컴퓨터에서 별도 계정으로 돌리라는 것이고, 아예 설치하지 말라는 사람도 있어요. 스레드: [2026년 2월](${hn.personalComputer}), [2026년 2월](${hn.appleIntelligence}), [2026년 2월](${hn.changingMyLife}), [2026년 3월](${hn.securityNightmare}), [2026년 4월](${hn.whoIsUsing}).`,
        `실제 쓰임보다 앞선 과장(10개 중 4개). 사용자들은 OpenClaw에 관한 글들이 구체적인 예 없이 큰 변화를 약속하고, 항공편 예약이나 회의 일정 잡기 같은 흔한 데모 작업은 시간을 아껴 주기보다 보여 주기식 생산성에 가깝다고 말해요. 스레드: [2026년 2월](${hn.changingMyLife}), [2026년 3월](${hn.securityNightmare}), [2026년 4월](${hn.whoIsUsing}), [2026년 11월](${hn.agenticSetup}).`,
        `비용, 그리고 다른 회사 구독에 기대는 문제(10개 중 3개). 사용자들은 그 뒤에서 쓰이는 모델 사용료가 쌓인다고 말해요. 2026년 4월 한 Hacker News 스레드는 Anthropic이 Claude Code 구독을 OpenClaw에 더 이상 쓰지 못하게 했다고 전했고, 댓글 작성자들은 API 가격을 내는 것과 다른 모델 제공자로 옮기는 것을 저울질했어요. 스레드: [2026년 4월](${hn.whoIsUsing}), [2026년 4월](${hn.anthropicSubscriptions}), [2026년 4월](${hn.memory}).`,
        `여분의 컴퓨터와 기술이 필요해요(10개 중 2개). 사용자들은 유지 관리에 익숙한 사람이 별도 컴퓨터에서 돌리는 게 가장 좋다고 말하고, 일부 소규모 사업자는 대신 호스팅되는 완성형 버전을 원해요. 스레드: [2026년 2월](${hn.personalComputer}), [2026년 11월](${hn.saas}).`,
      ],
    },
    {
      kind: "text",
      id: "switch",
      title: "사람들이 옮겨 가는 도구",
      text: [
        "스레드 10개 중 적어도 2개에서 추천으로 나온 것들이에요. 다른 도구는 각각 스레드 하나에서만 언급돼 여기서는 뺐어요. 주요 선택지를 각 도구의 문서를 바탕으로 비교한 내용은 [OpenClaw 대안 가이드](/blog/openclaw-alternatives)에 있어요.",
      ],
      points: [
        `Hermes Agent(10개 중 3개). Hermes Agent로 옮긴 사용자들은 자기 환경에서 더 안정적으로 돌아간다고 말해요. [Hermes Agent vs OpenClaw](/blog/hermes-agent-vs-openclaw)와 [Hermes Agent 가격](/pricing/hermes-agent)을 참고하세요. 스레드: [2026년 4월](${hn.whoIsUsing}), [2026년 8월](${hn.grokBot}), [2026년 11월](${hn.agenticSetup}).`,
        `skill과 잘 쓴 \`CLAUDE.md\`를 곁들인 Claude Code나 Codex 그대로(10개 중 3개). 여러 사용자가 OpenClaw로 큰 환경을 꾸렸다가 원래 쓰던 코딩 에이전트로 돌아갔다고 말해요. [OpenClaw vs Claude Code](/compare/openclaw-vs-claude-code)와 [Claude Code vs Codex](/blog/claude-code-vs-codex)를 참고하세요. 스레드: [2026년 2월](${hn.changingMyLife}), [2026년 4월](${hn.whoIsUsing}), [2026년 11월](${hn.agenticSetup}).`,
        `Claude Cowork(10개 중 2개). Anthropic의 호스팅 비서로 추천됐어요. [Claude Cowork 가이드](/personal-agent/claude-cowork)를 참고하세요. 스레드: [2026년 4월](${hn.whoIsUsing}), [2026년 11월](${hn.agenticSetup}).`,
        `cron 작업과 직접 만든 스크립트(10개 중 2개). OpenClaw가 하는 일 대부분은 예약된 스크립트 몇 개로 대신할 수 있다고 말하는 사용자도 있어요. 스레드: [2026년 4월](${hn.whoIsUsing}), [2026년 11월](${hn.agenticSetup}).`,
      ],
    },
    {
      kind: "text",
      id: "reddit",
      title: "Reddit의 다른 논의",
      text: [
        "더 읽어 볼 만한 Reddit 스레드를 모았어요. Google 검색으로 찾았지만 reddit.com을 열 수 없어서 읽거나 요약하지 않았고, 위의 주제 중 이 스레드에 기댄 것은 없어요.",
      ],
      points: [
        "[OpenClaw is god-awful…](https://www.reddit.com/r/ArtificialInteligence/comments/1qrzxs7/openclaw_is_godawful_its_either_you_have_to_spend/), r/ArtificialInteligence, 2026년 2월",
        "[\"OpenClaw is useless\" is a confession, not a review](https://www.reddit.com/r/myclaw/comments/1qw9qx8/openclaw_is_useless_is_a_confession_not_a_review/), r/myclaw, 2026년 2월",
        "[I think openclaw is OVERHYPED. Just use skills](https://www.reddit.com/r/LocalLLaMA/comments/1rbjxpv/i_think_openclaw_is_overhyped_just_use_skills/), r/LocalLLaMA, 2026년 3월",
        "[Any good reason to stay with Openclaw?](https://www.reddit.com/r/openclaw/comments/1rcx7mg/any_good_reason_to_stay_with_openclaw/), r/openclaw, 2026년 3월",
        "[My honest take on OpenClaw after extensive testing](https://www.reddit.com/r/openclaw/comments/1s4pgat/my_honest_take_on_openclaw_after_extensive_testing/), r/openclaw, 2026년 4월",
        "[Is it still worth building an OpenClaw personal agent…?](https://www.reddit.com/r/openclaw/comments/1tts8e9/is_it_still_worth_building_an_openclaw_personal/), r/openclaw, 2026년 6월",
        "[Is OpenClaw still worth it now that I have Codex?](https://www.reddit.com/r/openclaw/comments/1u93to2/is_openclaw_still_worth_it_now_that_i_have_codex/), r/openclaw, 2026년 7월",
        "[Is OpenClaw Dead?](https://www.reddit.com/r/openclaw/comments/1v2o94l/is_openclaw_dead/), r/openclaw, 2026년 8월",
        "[Rant / Review: OpenClaw is a massive waste of time](https://www.reddit.com/r/openclaw/comments/1xi2a21/rant_review_openclaw_is_a_massive_waste_of_time/), r/openclaw, 2026년 10월",
      ],
    },
    {
      kind: "text",
      id: "facts",
      title: "주장을 확인할 때 참고할 OpenClaw 사실",
      text: [
        "2026년 11월 13일에 OpenClaw의 README, 문서, GitHub에서 확인한 내용이에요. 비용은 [OpenClaw 가격](/pricing/openclaw) 페이지에 더 자세히 있어요.",
      ],
      points: [
        "무엇인가: 오픈소스 개인 AI 비서예요. Gateway가 내 컴퓨터에서 돌아가며 WhatsApp, Telegram, Slack, Discord, iMessage 같은 채팅 앱에서 답하고, 상태, 메모리, 자격 증명은 내 하드웨어에 남아요.",
        "가격: 무료예요. README에는 이 프로젝트에 유료 등급, 호스팅 서비스, 토큰이 없다고 나와 있어요. 비용은 모델 제공자에게 내요.",
        "라이선스: MIT. 독립 비영리 단체인 OpenClaw Foundation이 운영해요.",
        "실행 위치: 내 컴퓨터예요. macOS, Linux, Windows, WSL2용 설치 프로그램과 macOS, iOS, Android, Windows, Linux용 앱이 있고, Docker와 Nix로 설치하는 방법도 문서에 나와 있어요.",
        "모델: OpenAI, Anthropic, Google Gemini, OpenRouter, xAI, Ollama, LM Studio, vLLM 등을 위한 플러그인이 있어요.",
        "보안(자체 문서 기준): 샌드박스를 설정하지 않으면 메인 세션의 도구는 호스트에서 실행되고, exec 승인은 기본적으로 꺼져 있어요.",
        "예약: 반복 작업과 일회성 작업을 위한 스케줄러가 내장돼 있고, 웹훅과 Gmail 트리거도 있어요.",
        "이름: 2026년 1월 30일에 OpenClaw로 이름을 바꿨고, 이전 이름으로는 Clawdbot과 Moltbot이 있어요. 2026년 11월 13일 기준 GitHub 스타는 394,406개예요. 공식 사이트: [openclaw.ai](https://openclaw.ai).",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Crewmark로",
      title: "Claude Code나 Codex에게 고정된 일자리를 주세요",
      text: [
        "이 스레드들에서 여러 사용자가 Claude Code나 Codex로 돌아갔어요. Crewmark는 그 위에서 돌아가요. 내 Claude Code나 Codex 세션을 직무, 목표, 근무 시간을 가진 AI 직원으로 바꾸고, 각 직원이 공유 보드에서 다음 이슈를 가져가요. 채팅 앱 속 개인 비서는 아니에요. 일은 이슈로 진행되고, Slack 연동은 내장돼 있지 않으며, 에이전트는 내 컴퓨터에서 돌아가므로 컴퓨터가 켜져 있어야 해요. GPL-3.0 오픈소스이고, 프로젝트 1개와 AI 직원 3명까지 무료예요.",
      ],
      steps: [
        { title: "직무 고르기", text: "[AI 직원 직무](/ai-employees)에서 시작하거나, 직무와 목표를 직접 써 보세요." },
        {
          title: "일을 보드에 올리기",
          text: "이슈를 배정하고 정기적인 이슈는 반복되게 설정해요. 근무 시간에는 하트비트가 15분마다에서 하루 한 번까지 정한 간격으로 직원을 깨워 다음 이슈를 가져가게 해요.",
        },
        {
          title: "물어보면 답하기",
          text: "리뷰, 권한, 정보가 필요하면 직원이 이슈를 '조치 필요'로 바꾸고 거기서 물어봐요. 에이전트별 설정 방법이 담긴 업무 예시는 [Claude Code 활용 사례](/use-cases/claude-code)와 [Codex 활용 사례](/use-cases/codex)에 있어요.",
        },
      ],
    },
  ],
  mid: {
    title: "코딩 에이전트가 일정에 맞춰 일하게 하고 싶나요?",
    text: "Crewmark는 Claude Code나 Codex에게 직무, 하트비트, 공유 보드를 줘요.",
    button: "시작하기",
  },
  faq: {
    title: "자주 묻는 질문",
    items: [
      {
        q: "OpenClaw는 쓸 만한가요?",
        a: "유지 관리를 얼마나 감수할 수 있느냐에 달려 있어요. 저희가 읽은 Hacker News 스레드 10개에서 OpenClaw를 좋아하는 사용자들은 이미 쓰는 채팅 앱에서 알림이나 캘린더 작업 같은 개인 업무에 써요. 가장 흔한 불만은 스레드 10개 중 6개에서 나온, 자주 고장 나서 계속 고쳐야 한다는 점이에요. 소프트웨어는 MIT 라이선스로 무료이고, 쓰는 모델 비용은 내야 해요.",
      },
      {
        q: "OpenClaw는 안전한가요?",
        a: "보안은 스레드 10개 중 5개에서 나왔어요. 사용자들은 내 컴퓨터와 계정에 대한 넓은 접근 권한과 프롬프트 인젝션을 지적하고, 별도 컴퓨터에서 별도 계정으로 돌리라고 조언해요. OpenClaw의 README에도 샌드박스를 설정하지 않으면 메인 세션의 도구가 호스트에서 실행되고, exec 승인은 기본적으로 꺼져 있다고 나와 있어요.",
      },
      {
        q: "OpenClaw가 과대평가됐다는 말은 왜 나오나요?",
        a: "스레드 10개 중 4개에서 사용자들은 OpenClaw에 관한 글들이 구체적인 예 없이 큰 성과를 약속했고, 데모 작업은 시간을 아껴 주기보다 보여 주기식 생산성에 가깝다고 말해요. 저희가 목록에 올린 Reddit 스레드 중 2026년 3월 r/LocalLLaMA의 스레드 하나는 제목에서 OpenClaw가 과대평가됐다며 대신 skill을 쓰라고 하는데, 저희는 읽지 않았어요.",
      },
      {
        q: "OpenClaw 대신 무엇을 쓰나요?",
        a: "저희가 읽은 스레드에서는 Hermes Agent와 Claude Code나 Codex 그대로 쓰기(각각 스레드 3개), 그다음 Claude Cowork, 그리고 cron 작업과 직접 만든 스크립트(각각 스레드 2개)가 나왔어요. [OpenClaw 대안 가이드](/blog/openclaw-alternatives)에서 각 도구의 문서를 바탕으로 선택지를 비교했어요.",
      },
      {
        q: "Reddit 사용자들은 OpenClaw를 어떻게 말하나요?",
        a: "Reddit은 열 수 없어서 그 스레드들은 요약하지 않았어요. 제목만 보면, 4개는 OpenClaw가 아직 쓸 만한지, 계속 쓸 이유가 있는지, 죽었는지를 묻고(그중 하나는 글쓴이에게 이제 Codex가 있는데도 쓸 만한지 물어요), 3개는 비판적인 제목이며(그중 하나는 대신 skill을 쓰라고 해요), 1개는 r/myclaw에서 쓸모없다는 평가에 반박하고, 1개는 오래 테스트해 본 뒤에 쓴 후기예요. 9개 모두 [Reddit의 다른 논의](#reddit)에 링크해 두었어요.",
      },
      {
        q: "OpenClaw는 무료인가요?",
        a: "네. README에는 이 프로젝트에 유료 등급, 호스팅 서비스, 토큰이 없다고 나와 있고, MIT 라이선스예요. 비용은 모델 제공자에게 내는데, 저희가 읽은 스레드 10개 중 3개에서 비용 이야기가 나왔어요. 그중에는 Anthropic이 Claude Code 구독을 OpenClaw에 더 이상 쓰지 못하게 했다는 2026년 4월 스레드도 있어요. [OpenClaw 가격](/pricing/openclaw)을 참고하세요.",
      },
    ],
  },
  cta: {
    title: "코딩 에이전트에게 고정된 일자리를 주세요.",
    text: "Crewmark는 Claude Code와 Codex 세션을 직무, 목표, 근무 시간, 하트비트를 갖춘 AI 직원으로 바꿔 줘요.",
    button: "시작하기",
  },
  checked: "2026년 11월 13일에 스레드를 읽었어요. 제품 정보는 같은 날 OpenClaw의 README, 문서, GitHub와 대조해 확인했어요.",
  disclaimer:
    "Crewmark는 독립 제품이며, OpenClaw Foundation이나 이 페이지에 나온 어떤 회사와도 제휴하거나 보증을 받지 않았어요. 여기 요약한 의견은 링크된 스레드의 댓글 작성자들의 의견이에요. 제품명은 각 소유자의 상표예요.",
};
