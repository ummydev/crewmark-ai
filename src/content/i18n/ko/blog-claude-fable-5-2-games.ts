import type { GuideCopy } from "@/components/landing/guide-article";
import { gameSections, type GameLabels, type GameText } from "@/content/blog/claude-fable-5-2-games";

// ko translation of /blog/claude-fable-5-2-games; the English master is src/content/blog/claude-fable-5-2-games.ts.
// Game names and prompts are not translated.

const text: GameText = {
  saltline:
    "비에 젖은 컨테이너 항구를 무대로 한 FPS. 사람의 피드백 없이 약 8시간 만에 모델, 텍스처, 효과음을 전부 처음부터 만들었고 API 가격으로 약 550달러. 프롬프트는 거의 \"FPS도 하나 만들어 줘\" 수준이었습니다.",
  "what-the-water-keeps":
    "등불을 단 작은 배를 타고 물에 잠긴 도시, 눈 덮인 숲 등 8개의 꿈속 세계를 천천히 지나갑니다. Three.js로 제작. 모델은 Tripo 3D, 게임 음악은 Suno, 예고편 음악은 Fable이 작곡했습니다.",
  "oil-paint": "손으로 그린 듯한 가을 숲을 걷습니다. 프레임마다 약 150만 개의 붓질, 브라우저에서 200fps. 한 시간도 안 걸려 만들었고 소스도 공개돼 있습니다.",
  "starry-night-rider": "고흐의 '별이 빛나는 밤' 속 마을을 자전거로 달립니다. 하늘, 집, 돌길까지 모두 소용돌이치는 붓질로 그려졌습니다.",
  "mirror-earth": "지구 전체가 복셀로. 어디든 가고 무엇이든 부술 수 있으며, 날씨는 실제 지구와 실시간으로 맞춰집니다. Spawn에서 동작합니다.",
  "i-would-have-gotten-away-with-it":
    "Ethan Mollick이 만든 거꾸로 된 스쿠비 두. 당신은 유령 저택의 악당이 되어 참견쟁이 아이들을 겁줘 쫓아내야 합니다. 예고편, 음악, 효과음도 Fable이 만들었습니다.",
  "gilt-and-gutter": "금빛 아케이드 홀에서 벌이는 세련된 1대1 슈터. 자기 색과 같은 탄을 쏘면 총이 충전됩니다. 캐릭터 모델은 Tripo3D, 리깅과 애니메이션은 Fable.",
  tidewright: "폭풍 치는 밤바다를 항해하며 Thrumming 제도의 등대에 다시 불을 밝힙니다.",
  "the-clockmakers-heart": "톱니바퀴 퍼즐을 하나씩 풀어 잠든 태엽 거인을 깨우는, Fable 5.2의 초안.",
  "turbo-tails": "동물 드라이버 6명, 드리프트, 점프대, 아이템이 있는 3D 카트 레이싱. 친구와 함께 즐길 수 있습니다. 프롬프트는 모두 3개, 음악은 Suno로 만들어 Claude가 넣었습니다.",
  rifts: "히어로 12명, 세계를 넘나드는 균열, 보스전이 있는 오버워치풍 3대3 히어로 대전. Spawn에서 브라우저로 무료 플레이.",
  "memory-of-teresa-the-storm-spire": "촛불 켜진 돌방과 폭우 속 대성당 첨탑에서 벌이는 어두운 보스전. 한 번에 완성됐고 Spawn에서 무료로 즐길 수 있습니다.",
  "aidens-revenge": "Aiden이라는 아이가 구상하고 그린 1~4인용 픽셀 아트 벨트스크롤 액션. Fable 5.2로 하룻밤 만에 게임이 됐습니다.",
  "hogwarts-royale": "성 안뜰과 마법의 숲을 무대로 빗자루를 타는 마법 학교 배틀로얄. 프롬프트는 한 줄.",
  "party-royale": "60명이 즐기는 폴 가이즈풍 파티 게임. 가짜 문, 회전 발판, 멀티플레이까지 한 번에 완성.",
  fablecraft: "HTML 파일 하나에 담긴 무한 복셀 샌드박스. 블록을 놓고 부술 수 있고, 4K 그림자, 반사, 10청크 시야 거리. effort는 extra high, 프롬프트는 2개.",
  "street-brawler-ii": "여러 캐릭터, 필살기, 콤보, 스테이지를 갖춘 픽셀 아트 아케이드 격투 게임. 35분이 안 걸려 한 번에 생성.",
  "toy-room-adventure": "장난감 크기로 줄어들어 햇살 가득한 아이 방을 탐험합니다. Fable은 영화 캐릭터를 그대로 쓰기를 거절하고, 빛과 먼지, 장난감 눈높이의 디테일로 분위기만 재현했습니다.",
  "tokyo-night-gp": "젖어서 반짝이는 노면의 밤 도쿄를 라이벌 5명과 3바퀴 도는 three.js 레이싱. 프롬프트 하나, 30분, 20달러 요금제 주간 한도의 약 15%.",
  "samurai-duel": "붉은 달 아래 두 사무라이의 결투. 체력 바, 크리티컬, 출혈 효과까지, effort High로 프롬프트 하나에서.",
  "the-clockmakers-mansion": "로블록스 공포 게임. Fable이 MCP로 Roblox Studio 안에 유령 저택을 짓고 예고편까지 직접 편집했습니다.",
  "neon-coast": "분홍빛 노을의 GTA풍 해변 도시. 차에서 내려 걷고, 차를 타고 달리며, 미니맵과 수배 등급도 있습니다. 프롬프트 하나.",
  "mist-locked-gate":
    "눈 내린 산문에 등불이 켜진 무협 액션 게임. Claude Fable 5.2가 오후 한나절에 HTML 파일 하나로 만들었습니다.",
  "the-waking-river":
    "금빛 배를 타고 잠든 다섯 세계를 지나면, 지나간 자리부터 세계가 깨어납니다. 제작자는 전체 프롬프트를 PDF로 공개했습니다.",
  "cayley":
    "실제 날개 물리, 실존 기체 9대, 3D로 스트리밍되는 지구 전체를 갖춘 비행 시뮬레이터. 하룻밤에 만들었고 소스도 공개돼 있습니다.",
  "maad-maxxing":
    "매드맥스 스타일의 사막 차량 전투. three.js와 WebGPU로, 모델이나 텍스처 없이 전부 코드로 작성했습니다.",
  "lumenvale":
    "꽃의 골짜기에 잠든 일곱 신전을 깨우는 잔잔한 오픈 월드 판타지. 게임과 음악, 트레일러까지 Fable이 만들었습니다.",
  "danfo-run":
    "노란 단포를 몰고 라고스의 교통 체증을 뚫으며 승객을 태우고 실시간 순위표 정상을 노립니다. Fable 5.2 이전 작품으로, 개발 파트너는 Claude, 3D는 Three.js, 아트는 GPT입니다.",
};

const labels: GameLabels = {
  likes: "좋아요",
  views: "조회",
  prompt: "프롬프트 보기(작성자 원문)",
  play: "브라우저에서 플레이",
  trailer: "예고편과 스크린샷",
  source: "소스",
  alt: (name) => `${name}: 게임 스크린샷으로 만든 커버 아트`,
};

export const copy: GuideCopy = {
  meta: {
    title: "Claude Fable 5.2 게임: 플레이하거나 볼 수 있는 28개",
    description:
      "Claude Fable 5.2로 만든 게임. AAA급 비주얼의 FPS, 고흐 그림 속 자전거 여행, 복셀 지구, 카트 레이싱과 보스전 등 대부분 브라우저에서 플레이할 수 있습니다. 작성자, 플레이 링크, 좋아요, 공개된 경우 프롬프트까지.",
  },
  breadcrumb: "Claude Fable 5.2 게임",
  parent: { name: "블로그", href: "/blog" },
  article: { published: "2026-11-12" },
  hero: {
    kicker: "블로그 · Claude Fable 5.2",
    title: "Claude Fable 5.2 게임: 사람들이 만든 28개와 만드는 법",
    lead: "Anthropic이 Claude Fable 5.2를 공개한 뒤 며칠 동안 많은 사람이 이 모델로 만든 게임을 올렸습니다. 비 오는 FPS, 꿈속 세계를 지나는 작은 배, 복셀 지구, 카트 레이싱과 보스전. 모든 게시물을 열고 플레이 링크를 확인해 가장 보기 좋은 28개를 골랐습니다. 그중 20개는 브라우저에서 바로 플레이할 수 있습니다.",
    cta: "시작하기",
    secondary: "플레이하기",
    secondaryHref: "#play-now",
  },
  sections: [
    {
      kind: "text",
      id: "what-it-builds",
      title: "Fable 5.2는 어떤 게임을 만드나",
      text: [
        "대부분 JavaScript와 Three.js로 쓴 브라우저 게임이고, 열기만 하면 플레이할 수 있는 HTML 파일 하나인 경우가 많습니다. AI가 만든 게임을 호스팅하는 Spawn 같은 플랫폼 위에서, 또는 MCP로 Roblox Studio 안에서 만든 것도 있습니다. 코드와 셰이더, 많은 경우 음악과 예고편까지 Fable이 씁니다.",
      ],
      points: [
        "Felix Rieseberg의 Saltline은 사람의 피드백 없이 약 8시간이 걸렸고, 모델·텍스처·효과음을 모두 처음부터 만들었습니다.",
        "Fablecraft는 HTML 파일 하나에 담긴 무한 복셀 샌드박스로, 프롬프트는 \"make minecraft single file\"과 \"eh looks basic, make it hdr\" 두 개뿐입니다.",
        "Peter Yang의 Turbo Tails는 짧은 후속 지시 두 번으로 모바일 조작과 멀티플레이가 추가됐습니다.",
        "다른 도구를 섞은 작성자도 있습니다. 캐릭터 모델에 Tripo 3D, 음악에 Suno.",
      ],
    },
    {
      kind: "steps",
      id: "make-one",
      title: "Claude Code에서 Fable 5.2로 게임 만들기",
      steps: [
        {
          title: "빈 폴더에서 Fable 5.2로 Claude Code 시작",
          text: "Fable 5.2는 Pro 이상 요금제나 API가 필요합니다. effort를 높일수록 오래 걸리지만 대개 결과물도 좋아집니다.",
          code: "mkdir my-game && cd my-game\nclaude --model claude-fable-5-2",
        },
        {
          title: "게임을 한두 문장으로 설명하기",
          text: "짧은 프롬프트로 충분합니다. Matt Shumer의 Hogwarts Royale은 한 줄이었습니다. 바로 열고 공유하고 싶다면 Three.js를 쓴 HTML 파일 하나로 만들어 달라고 하세요.",
          code: "Create a three.js third-person game in a single HTML file: a toy-sized hero exploring a sunlit kids' bedroom, jumping across furniture to find hidden toys. Make it look polished.",
        },
        {
          title: "해 보고, 수정은 하나씩 요청하기",
          text: "Turbo Tails는 \"모바일에서 되게 해 줘\"(Let's make mobile work please), 이어서 \"가장 간단한 방법으로 멀티플레이를 추가해 줘\"(Ok let's add multiplayer the simplest way)로 조금씩 커졌습니다.",
        },
        {
          title: "공유하기",
          text: "폴더를 Vercel이나 Netlify 같은 정적 호스팅에 배포하거나, Saltline과 Tidewright처럼 Claude artifact로 게시하세요.",
        },
      ],
    },
    ...gameSections(
      "ko",
      text,
      labels,
      {
        playable: { title: "지금 플레이할 수 있는 게임", text: "브라우저에서 실행됩니다. 각 카드에서 게임, 작성자의 게시물, 예고편과 스크린샷 페이지로 갈 수 있습니다." },
        video: { title: "영상으로 공개된 게임", text: "아직 공개 빌드가 없습니다. 작성자의 게시물에서 플레이 영상을 보세요." },
      },
      "원본 게시물",
    ),
    {
      kind: "text",
      id: "more",
      title: "Claude 작품 더 보기",
      text: [
        "스크린샷과 프롬프트를 포함한 전체 목록은 GitHub에 있습니다: [awesome-claude-fable-games](https://github.com/ummydev/awesome-claude-fable-games). 단편과 3D 세계는 [awesome-claude-fable-videos](https://github.com/ummydev/awesome-claude-fable-videos), Opus 5.5로 만든 런칭 영상은 [Opus 5.5 모션 그래픽](/blog/opus-5-5-motion-graphics)에서 볼 수 있습니다. 모델 자체의 변화는 [Claude Fable 5.2 가이드](/blog/claude-fable-5-2)를 참고하세요.",
      ],
    },
  ],
  howTo: { section: "make-one", name: "Claude Code에서 Claude Fable 5.2로 브라우저 게임 만들기" },
  mid: {
    title: "Fable 5.2가 매일 기능을 내놓게 하고 싶다면",
    text: "Crewmark 직원은 여러분의 Claude Code 위에서 일하며, 하트비트에 맞춰 깨어나 보드에서 다음 이슈를 가져갑니다. 게임도 마찬가지입니다.",
    button: "시작하기",
  },
  faq: {
    title: "자주 묻는 질문",
    items: [
      {
        q: "Claude Fable 5.2로 게임을 만들 수 있나요?",
        a: "네. JavaScript와 Three.js로 플레이 가능한 브라우저 게임을 쓰며, HTML 파일 하나로 만드는 경우가 많고, MCP로 Roblox Studio 안에서 만들 수도 있습니다. 프롬프트 하나로 30분 만에 만든 게임부터 모든 에셋을 처음부터 만든 8시간짜리 FPS까지 사례가 있습니다.",
      },
      {
        q: "Claude Fable 5.2 게임은 어디서 플레이하나요?",
        a: "위 28개 중 20개는 브라우저에서 플레이할 수 있습니다. 작성자의 사이트, Claude artifact, Spawn 등입니다. 나머지는 플레이 영상만 공개됐습니다.",
      },
      {
        q: "시간과 비용은 얼마나 드나요?",
        a: "Tokyo Night GP는 프롬프트 하나, 30분, 20달러 요금제 주간 한도의 약 15%였습니다. Street Brawler II는 35분이 안 걸렸고, Saltline은 약 8시간, API 가격으로 약 550달러였습니다.",
      },
      {
        q: "영화나 게임 캐릭터를 그대로 베끼나요?",
        a: "항상 그렇지는 않습니다. 토이 스토리 게임을 요청받은 Fable은 저작권 있는 캐릭터 사용을 거절하고 화풍만 재현했습니다. Hogwarts Royale 같은 팬 매시업은 작성자 본인의 프로젝트입니다.",
      },
      {
        q: "프롬프트가 공개돼 있나요?",
        a: "작성자 5명이 공개했고, 위 카드에 원문으로 인용했습니다. 대부분 한두 문장으로 짧습니다.",
      },
    ],
  },
  cta: {
    title: "최신 모델에게 지속적인 일을 맡기세요.",
    text: "Crewmark는 Claude Code와 Codex 세션을 역할, 목표, 근무 시간, 하트비트를 갖춘 AI 직원으로 바꿉니다.",
    button: "시작하기",
  },
  checked: "모든 게시물, 플레이 링크, 프롬프트는 2026년 11월 11일에 확인했습니다. 좋아요와 조회수는 그 시점의 숫자입니다.",
  disclaimer:
    "게임, 커버, 프롬프트의 권리는 각 작성자에게 있으며, 모든 카드는 원본 게시물로 연결됩니다. 커버 아트는 각 게임의 스크린샷으로 생성했습니다. Crewmark는 독립 제품으로 Anthropic과 제휴하거나 보증받지 않았습니다. Claude, Claude Fable, Claude Code는 Anthropic의 상표이며, 그 밖의 게임과 캐릭터는 각 권리자에게 있습니다.",
};
