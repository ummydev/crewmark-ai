import type { GuideCopy } from "@/components/landing/guide-article";

// Korean translation of /blog/grok-bot-reviews; the English master is src/content/blog/grok-bot-reviews.ts.

const hn = {
  launch: "https://news.ycombinator.com/item?id=49261514",
  agentAccess: "https://news.ycombinator.com/item?id=50033517",
  throttled: "https://news.ycombinator.com/item?id=50345698",
  agenticSetup: "https://news.ycombinator.com/item?id=50366117",
};

export const copy: GuideCopy = {
  meta: {
    title: "Grok Bot 후기: Hacker News 사용자 평가 (2026)",
    description:
      "Hacker News 스레드 6개(2026년 8월~11월)로 본 Grok Bot 후기: 좋아하는 점, 사용량 한도와 보안 불만, 대신 쓰는 도구.",
  },
  breadcrumb: "Grok Bot 후기",
  parent: { name: "블로그", href: "/blog" },
  article: { published: "2026-11-13" },
  hero: {
    kicker: "블로그 · 후기",
    title: "Grok Bot 후기: Hacker News 사용자들은 뭐라고 할까",
    lead: "Grok Bot은 xAI의 호스팅 AI 팀원이에요. 각 Bot이 클라우드에 자기 컴퓨터를 하나씩 받아 내 도구에 로그인하고, Slack과 Microsoft Teams에서 일하며, 루틴을 실행하고 서로 일을 넘겨요. 출시 후 첫 3개월인 2026년 8월부터 11월까지 올라온 Grok Bot 관련 Hacker News 스레드 7개를 읽었어요. 그중 하나는 경쟁 도구의 출시 글이어서, 개수는 나머지 6개를 기준으로 셌어요. 사용자들은 코드를 쓰지 않고 실제 심부름을 맡긴다고 설명해요. 가장 많이 나온 불만은 사용량 한도로 스레드 6개 중 3개에서 나왔고, 보안과 불분명한 가치는 각각 2개에서 나왔어요.",
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
        "2026년 11월 13일에 Grok Bot에 관한 Hacker News 스레드 7개를 한 페이지씩 읽었어요. 그중 하나는 경쟁 오픈소스 도구를 만든 사람이 직접 올린 출시 글이라 어떤 주제에도 세지 않았고, 그래서 이 페이지의 모든 개수는 나머지 6개 기준이에요. Grok Bot은 2026년 8월 11일에 베타로 출시됐으니, 모든 스레드는 출시 후 첫 3개월인 2026년 8월부터 11월 사이에 올라온 거예요.",
      ],
      points: [
        "주제는 셈에 넣은 스레드 6개 중 적어도 2개에서 나온 것만 싣고, 몇 개에서 나왔는지 밝혀요. 댓글 하나에서만 나온 의견은 뺐어요.",
        "6개 중 하나는 Grok Bot만 다루지 않아요. 사람들이 자기 AI 사용 환경을 소개하는 일반 스레드라서 Grok Bot 언급만 썼어요. 다른 두 개는 같은 뉴스를 다루고 나중 스레드가 앞 스레드를 링크하므로, 그 뉴스는 한 번만 셌어요.",
        "Google 검색으로 Reddit 스레드 17개도 찾았지만 reddit.com을 열 수 없어서 읽거나 요약하지 않았어요. 제목만 [Reddit의 다른 논의](#reddit)에 실었어요.",
        "설문 조사가 아니라 공개된 논의의 표본이에요. 어떤 도구에 대해 글을 쓰는 사람은 의견이 강한 편이에요. 월은 각 스레드가 올라온 지 얼마나 지났는지로 계산해서 한 달쯤 어긋날 수 있어요.",
        "대가를 주거나 요청해서 받은 내용은 없어요. 저희는 글을 올리거나 후기를 부탁하거나 누군가에게 연락하지 않았어요. 요약은 저희 말로 썼고, 하나뿐인 인용은 따로 표시하고 링크를 달았어요.",
      ],
    },
    {
      kind: "table",
      id: "at-a-glance",
      title: "Grok Bot 후기 한눈에 보기",
      text: [
        "셈에 넣은 Hacker News 스레드 6개에서 나온 내용이에요(경쟁 도구의 출시 글인 일곱 번째 스레드는 세지 않았어요). 개수는 댓글이 아니라 스레드 기준이에요.",
      ],
      headers: ["주제", "사용자 의견", "스레드"],
      rows: [
        ["칭찬: 코드 없이 맡기는 심부름", "리서치, 이메일, 정기 요약을 처음부터 끝까지 맡김", "6개 중 2개"],
        ["불만: 사용량 한도", "항상 켜져 있는 Bot이 사용량을 빠르게 소진하고, 11월의 한 스레드는 Grok Bot 사용이 제한(스로틀링)된 일을 다룸", "6개 중 3개"],
        ["불만: 보안", "프롬프트 인젝션, 그리고 Bot에게 로그인 정보와 민감한 계정 접근 권한을 넘기는 문제", "6개 중 2개"],
        ["불만: 불분명한 가치", "맡길 일을 떠올리기 어렵거나, 오픈소스 에이전트의 호스팅 버전으로 봄", "6개 중 2개"],
      ],
    },
    {
      kind: "text",
      id: "praise",
      title: "사용자들이 좋아하는 점",
      points: [
        `코드 없이 실제 심부름을 해 줘요(스레드 6개 중 2개). 사용자들은 공급업체 찾기, 입사 지원서와 이메일 보내기, 웹사이트와 소셜 미디어 요약 만들기 같은 심부름을 맡긴다고 설명해요. Hacker News 스레드: [2026년 8월](${hn.launch}), [2026년 11월](${hn.agenticSetup}).`,
      ],
    },
    {
      kind: "text",
      id: "complaints",
      title: "자주 나온 불만",
      points: [
        `사용량 한도와 토큰 소모(스레드 6개 중 3개). 사용자들은 항상 켜져 있는 Bot이 주간 사용량을 금방 써 버린다고 말해요. 2026년 8월에 한 Hacker News 댓글 작성자는 이렇게 말했어요. “항상 켜져 있는 상시 에이전트는 토큰을 엄청나게 많이 쓴다”(“Always on perpetual agents use a LOT of tokens”) ([스레드](${hn.launch})). 2026년 11월에는 한 Hacker News 스레드에서, 스레드 제목대로라면 xAI의 비용이 구독 수입을 앞지른 뒤 Grok Bot 사용이 제한된 일을 논의했어요. 스레드: [2026년 8월](${hn.launch}), [2026년 11월](${hn.throttled}), [2026년 11월](${hn.agenticSetup}).`,
        `보안과 계정 접근(6개 중 2개). 사용자들은 프롬프트 인젝션, 그리고 각 Bot이 어디까지 접근할 수 있는지 확실한 제한 없이 Bot에게 로그인 정보와 민감한 계정 접근 권한을 넘기는 것을 걱정해요. 스레드: [2026년 8월](${hn.launch}), [2026년 10월](${hn.agentAccess}).`,
        `불분명한 가치(6개 중 2개). 맡길 일을 떠올리지 못한 사용자도 있고, OpenClaw 같은 오픈소스 에이전트의 호스팅 버전으로 보는 사용자도 있어요. 스레드: [2026년 8월](${hn.launch}), [2026년 11월](${hn.agenticSetup}).`,
      ],
    },
    {
      kind: "text",
      id: "switch",
      title: "사람들이 옮겨 가는 도구",
      text: [
        "셈에 넣은 스레드 6개 중 적어도 2개에서 추천으로 나온 것들이에요. 다른 도구는 각각 스레드 하나에서만 언급돼 여기서는 뺐어요. 주요 선택지를 각 도구의 문서를 바탕으로 비교한 내용은 [Grok Bot 대안](/alternatives/grok-bot) 페이지에 있어요.",
      ],
      points: [
        `Hermes Agent(6개 중 2개). 한 스레드에서는 추천됐고, 다른 스레드에서는 비슷한 선택지로 언급됐어요. 사용자들은 더 저렴하고 설정할 수 있는 게 많으며 모델을 직접 고를 수 있다고 설명해요. [Grok Bot vs Hermes Agent](/compare/grok-bot-vs-hermes-agent)와 [Hermes Agent 가격](/pricing/hermes-agent)을 참고하세요. 스레드: [2026년 8월](${hn.launch}), [2026년 11월](${hn.agenticSetup}).`,
        `Codex나 Claude Code로 직접 꾸린 환경(6개 중 2개). 사용자들은 Codex나 Claude Code에 직접 만든 스크립트 몇 개만 더하면 같은 일의 상당 부분을 더 적은 돈으로 할 수 있다고 말해요. [Grok Bot vs Claude Code](/compare/grok-bot-vs-claude-code)를 참고하세요. 스레드: [2026년 8월](${hn.launch}), [2026년 11월](${hn.agenticSetup}).`,
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
        "[Grok Bot just validated everything we've been building](https://www.reddit.com/r/AI_Agents/comments/1vnbg4z/grok_bot_just_validated_everything_weve_been/), r/AI_Agents, 2026년 8월",
        "[free and open sourced grok bots but better](https://www.reddit.com/r/AI_Agents/comments/1vxoura/free_and_open_sourced_grok_bots_but_better_cooler/), r/AI_Agents, 2026년 9월",
        "[Grok Bot's own docs say all your bots share one computer](https://www.reddit.com/r/grok/comments/1w43c1v/grok_bots_own_docs_say_all_your_bots_share_one/), r/grok, 2026년 9월",
        "[xAI owns Grok and X. Grok Bot still billed me X API credits](https://www.reddit.com/r/GrokBot/comments/1vxpdr3/xai_owns_grok_and_x_grok_bot_still_billed_me_x/), r/GrokBot, 2026년 9월",
        "[Is Grok Bot worth it?](https://www.reddit.com/r/cursor/comments/1vvx2fg/is_grok_bot_worth_it/), r/cursor, 2026년 9월",
        "[Any one tried Grok Bot? Is it garbage or just me?](https://www.reddit.com/r/cursor/comments/1vzg2wd/any_one_tried_grok_bot_is_it_garbage_or_just_me/), r/cursor, 2026년 9월",
        "[PSA: Stay far away from Grok/bot/XAI](https://www.reddit.com/r/singularity/comments/1wpls8e/psa_trust_me_stay_far_away_from_grokbotxai/), r/singularity, 2026년 10월",
        "[Anyone compared Grok Bot usage limits across SuperGrok…](https://www.reddit.com/r/GrokBot/comments/1wqok58/anyone_compared_grok_bot_usage_limits_across/), r/GrokBot, 2026년 10월",
        "[xAI's new $30/mo Premium plan worth it?](https://www.reddit.com/r/GrokBot/comments/1x8xjd1/xais_new_30mo_premium_plan_worth_it_looking_for/), r/GrokBot, 2026년 10월",
        "[Grokbot alternative](https://www.reddit.com/r/GrokBot/comments/1wnayp2/grokbot_alternative/), r/GrokBot, 2026년 10월",
        "[Grok Bot vs. Muse: who actually wins?](https://www.reddit.com/r/AI_Agents/comments/1x56s72/grok_bot_vs_muse_who_actually_wins_20_hours_with/), r/AI_Agents, 2026년 10월",
        "[OpenBot feels a lot like Grok Bot, except it's free](https://www.reddit.com/r/SelfHostedAI/comments/1xgstht/openbot_feels_a_lot_like_grok_bot_except_its_free/), r/SelfHostedAI, 2026년 10월",
        "[Alternative to Grok bot](https://www.reddit.com/r/GrokBot/comments/1xp0dbt/alternative_to_grok_bot/), r/GrokBot, 2026년 11월",
        "[Self-hosted open source alternative to Grok Bot?](https://www.reddit.com/r/SelfHosting/comments/1xpwnes/selfhosted_open_source_alternative_to_grok_bot/), r/SelfHosting, 2026년 11월",
        "[Looking for Grokbot alternatives, is Mausbot legit?](https://www.reddit.com/r/GrokBot/comments/1xqjgru/looking_for_grokbot_alternatives_is_mausbot_legit/), r/GrokBot, 2026년 11월",
        "[Found a Grok Bot alternative that works with my xAI plan](https://www.reddit.com/r/GrokBot/comments/1xsx979/found_a_grok_bot_alternative_that_works_with_my/), r/GrokBot, 2026년 11월",
        "[After what just happened to Grok Bot, are we next?](https://www.reddit.com/r/MuseAgent/comments/1xtgaew/after_what_just_happened_to_grok_bot_are_we_next/), r/MuseAgent, 2026년 11월",
      ],
    },
    {
      kind: "text",
      id: "facts",
      title: "주장을 확인할 때 참고할 Grok Bot 사실",
      text: [
        "2026년 11월 13일에 xAI의 제품 페이지와 출시 글에서 확인한 내용이에요. 더 자세한 내용은 [Grok Bot 가이드](/personal-agent/grok-bot)에 있어요.",
      ],
      points: [
        "무엇인가: xAI의 호스팅 AI 팀원이에요. 각 Bot이 클라우드에 자기 컴퓨터를 받아 내 도구와 앱에 로그인하고, Slack과 Microsoft Teams에서 일하며, 일정에 따라 루틴을 실행하고 다른 Bot에게 일을 넘겨요.",
        "출시: 2026년 8월 11일에 베타로 출시됐고, 제품 페이지에는 이제 베타를 벗어났다고 나와 있어요.",
        "가격: xAI의 Premium(월 $30), Super(월 $100, Premium 사용량의 3.5배), Ultra(월 $200, Premium 사용량의 12배) 요금제에 포함되고, 월 단위로 결제해요. 요금제마다 주간 Grok Bot 사용량이 포함되고, 추가 사용량은 토큰 비용으로 청구돼요. Teams와 Enterprise 요금제는 영업팀을 통해 구매해요.",
        "라이선스: 오픈소스가 아니에요.",
        "실행 위치: xAI 클라우드라서 노트북을 닫아도 Bot이 계속 일해요. 데스크톱과 모바일 앱, Slack과 Microsoft Teams, 그리고 Google Meet, Zoom, Teams 통화에서 Bot을 쓸 수 있어요.",
        "모델: Bot은 Grok으로 만들어졌어요.",
        "승인: Bot은 승인이 필요할 때 확인을 요청하고, 민감한 작업은 Auto Review를 거치게 할 수 있어요.",
        "공식 사이트: [x.ai/bot](https://x.ai/bot).",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Crewmark로",
      title: "내 컴퓨터에서 고정된 일을 맡는 에이전트",
      text: [
        "Grok Bot은 xAI 클라우드에서 Grok으로 Bot을 돌려요. Crewmark는 접근 방식이 달라요. 내 컴퓨터에서, 이미 내고 있는 구독으로 돌아가는 내 Claude Code나 Codex 세션이 직무, 목표, 근무 시간을 가진 AI 직원이 되고, 각 직원이 공유 보드에서 다음 이슈를 가져가요. 대신 감수할 점도 있어요. 컴퓨터가 켜져 있어야 하고, 지금은 에이전트들이 이슈로 협업하며(에이전트 간 직접 메시지는 출시 예정), Slack 연동은 내장돼 있지 않아요. GPL-3.0 오픈소스이고, 프로젝트 1개와 AI 직원 3명까지 무료예요.",
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
        q: "Grok Bot은 쓸 만한가요?",
        a: "무엇을 맡길지, 사용량이 얼마나 필요한지에 달려 있어요. 저희가 셈에 넣은 Hacker News 스레드 6개에서 사용자들은 리서치, 이메일, 정기 요약처럼 코드 없이 처리한 심부름을 설명해요. 가장 많이 나온 불만은 사용량 한도로 6개 중 3개에서 나왔고, 보안과 불분명한 가치는 각각 2개에서 나왔어요. xAI의 Premium 요금제(월 $30)에 포함되고, 사용량이 더 필요하면 Super($100)와 Ultra($200)가 있어요.",
      },
      {
        q: "Grok Bot에 대한 가장 흔한 불만은 무엇인가요?",
        a: "셈에 넣은 스레드 6개에서는 이런 불만이 나왔어요. 사용량 한도와 토큰 소모(6개 중 3개), 주로 프롬프트 인젝션과 Bot에게 로그인 정보와 민감한 계정 접근 권한을 넘기는 문제를 다룬 보안(6개 중 2개), 그리고 맡길 일을 떠올리지 못했거나 오픈소스 에이전트의 호스팅 버전으로 보는 사용자들이 말한 불분명한 가치(6개 중 2개)예요.",
      },
      {
        q: "Grok Bot은 안전한가요?",
        a: "보안은 셈에 넣은 스레드 6개 중 2개에서 나왔어요. 사용자들은 프롬프트 인젝션, 그리고 각 Bot이 어디까지 접근할 수 있는지 확실한 제한 없이 Bot에게 로그인 정보와 민감한 계정 접근 권한을 넘기는 것을 걱정해요. xAI의 제품 페이지에는 Bot이 승인이 필요할 때 확인을 요청하고, 민감한 작업은 Auto Review를 거치게 할 수 있다고 나와 있어요.",
      },
      {
        q: "솔직한 Grok Bot 후기가 있나요?",
        a: "이 페이지는 Grok Bot을 직접 테스트하지 않았어요. 출시 후 첫 3개월 동안 올라온 Hacker News 스레드 6개에서 사용자들이 한 말을 요약하고, 직접 읽어 볼 수 있게 링크를 달았어요. 사용자들은 코드 없이 심부름을 맡긴다고 설명해요. 가장 흔한 불만은 사용량 한도(6개 중 3개)이고, 보안과 불분명한 가치(각각 6개 중 2개)가 뒤를 이어요. 여기 실린 내용 중 대가를 주거나 요청해서 받은 것은 없어요.",
      },
      {
        q: "Reddit 사용자들은 Grok Bot을 어떻게 말하나요?",
        a: "Reddit은 열 수 없어서 그 스레드들은 요약하지 않았어요. 제목만 보면, 7개는 대안을 찾거나 알려 주고(그중 여러 개는 오픈소스나 셀프 호스팅), 3개는 쓸 만한지 묻고(그중 하나는 $30 Premium 요금제에 관한 것), 2개는 사용량 한도와 요금 청구에 관한 것이에요. 1개는 Meta의 Muse와 비교하고, 1개는 r/MuseAgent에서 Grok Bot에 일어난 일이 Muse에도 일어날 수 있는지 물어요. 1개는 Grok Bot 문서에 모든 Bot이 컴퓨터 한 대를 함께 쓴다고 나와 있다고 말하는데, xAI의 제품 페이지에는 Bot마다 자기 컴퓨터가 있다고 나와 있어요([사실 정리](#facts) 참고). 1개는 xAI를 멀리하라고 경고하고, 1개는 글쓴이가 만들어 온 것을 Grok Bot이 검증해 줬다고 말해요. 17개 모두 [Reddit의 다른 논의](#reddit)에 링크해 두었어요.",
      },
      {
        q: "Grok Bot 대신 무엇을 쓰나요?",
        a: "셈에 넣은 스레드 6개에서 두 번 이상 나온 것은 두 가지예요. 사용자들이 더 저렴하고 설정할 수 있는 게 많다고 설명하는 Hermes Agent, 그리고 Codex나 Claude Code에 직접 만든 스크립트를 더해 꾸린 환경이에요(각각 6개 중 2개). [Grok Bot 대안](/alternatives/grok-bot) 페이지에서 더 많은 선택지를 각 도구의 문서를 바탕으로 비교했어요.",
      },
    ],
  },
  cta: {
    title: "코딩 에이전트에게 고정된 일자리를 주세요.",
    text: "Crewmark는 Claude Code와 Codex 세션을 직무, 목표, 근무 시간, 하트비트를 갖춘 AI 직원으로 바꿔 줘요.",
    button: "시작하기",
  },
  checked: "2026년 11월 13일에 스레드를 읽었어요. 제품 정보는 같은 날 xAI의 제품 페이지와 출시 글과 대조해 확인했어요.",
  disclaimer:
    "Crewmark는 독립 제품이며, xAI나 이 페이지에 나온 어떤 회사와도 제휴하거나 보증을 받지 않았어요. 여기 요약한 의견은 링크된 스레드의 댓글 작성자들의 의견이에요. 제품명은 각 소유자의 상표예요.",
};
