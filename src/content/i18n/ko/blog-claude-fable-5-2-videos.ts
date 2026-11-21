import type { GuideCopy } from "@/components/landing/guide-article";
import { videoSections, type VideoLabels, type VideoText } from "@/content/blog/claude-fable-5-2-videos";

// ko translation of /blog/claude-fable-5-2-videos; the English master is src/content/blog/claude-fable-5-2-videos.ts.
// Prompts are not translated.

const text: VideoText = {
  "constructivist-chat-ui": {
    title: "형태가 바뀌는 구성주의 채팅 화면",
    text: "AI 연애 채팅 앱 화면을 구성주의 스타일로 다시 만들었습니다. 제비, 달의 위상, 인간이 아닌 눈, 나선 계단, 측량도와 편지 같은 채팅 화면.",
  },
  "art-history-cat": {
    title: "프롬프트 하나로 그린 4만 년 미술사",
    text: "같은 사람과 고양이를 시대마다 다시 그렸습니다. 고대 이집트 벽화부터 고흐, 몬드리안, 픽셀 아트, 2026년까지. 약 4,900줄의 코드, 이미지 모델 없음.",
  },
  "crystal-bud-flight": {
    title: "얼음 꽃봉오리, 그리고 보랏빛 꽃밭 위 비행",
    text: "서리 맺힌 꽃봉오리 뒤로 카메라가 초원, 설산, 보랏빛 꽃밭 위를 낮게 날아갑니다. 작성자는 30분 걸렸다고 합니다.",
  },
  "blender-island-rebuild": {
    title: "참고 이미지로 Blender에서 다시 지은 섬",
    text: "코드만으로 Blender를 다뤘습니다. 오브젝트 130개, 면 114만 개, 텍스처 없음, 도는 물레방아와 헤엄치는 물고기. 참고 이미지에 없던 부분은 Fable이 채웠습니다.",
  },
  "locomotive-robot-anime": {
    title: "90초 애니메이션 단편: 증기기관차가 로봇으로 변신",
    text: "프롬프트 하나로 만든 손그림 느낌의 2D 애니메이션. Fable이 Python으로 Blender에서 모든 컷을 만들고 렌더링한 뒤 프레임마다 선을 입혔고, 음악도 numpy로 한 음씩 썼습니다.",
  },
  "geonosis-battle-blender": {
    title: "Blender로 만든 스타워즈 전투",
    text: "작성자가 새 모델마다 돌리는 Blender 벤치마크. 경기장에서 천 대가 넘는 드로이드, 건십, 레이저가 맞붙습니다. 프롬프트 하나, 렌더링 20분 포함 1.5시간.",
  },
  "laundry-in-the-sun": {
    title: "오후 햇살 아래 널린 빨래",
    text: "햇살 가득한 들판의 빨랫줄에서 펄럭이는 옷을 두 사람이 바라봅니다. 옷의 주름, 천을 통과하는 빛, 카메라, 소리까지 모두 코드입니다.",
  },
  "fushimi-inari-travel-ad": {
    title: "가을 후시미 이나리 여행 광고",
    text: "교토 신사, 붉은 도리이 터널을 달리는 장면, 노을 속 타이틀 카드까지 20초. 음악까지 전부 코드로 만들었습니다.",
  },
  "rainy-tokyo-alley": {
    title: "영상 모델 없이 만든 비 오는 도쿄 골목",
    text: "비, 웅덩이, 네온 반사, 실제로 비치는 반사경, 읽을 수 있는 일본어 간판. Higgsfield가 올린 영상입니다.",
  },
  "pet-robot": {
    title: "집에서 만들 수 있는 반려 로봇",
    text: "아파트에서 만들 수 있는 로봇을 설계해 달라는 Matt Shumer에게 돌아온 건, 깨어나서 팔을 흔들고 공을 갖고 노는 동그란 반려 로봇이었습니다.",
  },
  "lighthouse-in-a-storm": {
    title: "폭풍 속 등대",
    text: "출렁이는 밤바다 위를 불빛이 훑고, 마침내 달 주위의 구름이 걷힙니다. effort high, 소리 포함.",
  },
  "piano-boy-short": {
    title: "생성 이미지가 하나도 없는 46초 단편",
    text: "피아노 치는 소년. 모든 프레임과 모든 음을 Fable이 쓴 코드가 그리고 연주했으며, 이미지나 영상 모델은 쓰지 않았습니다.",
  },
  "ufo-area-51": {
    title: "51구역에 착륙한 UFO",
    text: "한 문장 프롬프트로 three.js와 Remotion을 써서 만든 5컷 30초 영상. 모델 불러오기, 텍스처, 스톡 오디오 없이 4K로 렌더링했습니다.",
  },
  "spider-web-logo": {
    title: "거미가 거미줄에 Claude 로고를 짜 넣다",
    text: "달빛 아래 거미가 한 단계씩 거미줄을 치고, 새벽이 오기 전 한가운데에 Claude 로고를 엮어 넣습니다.",
  },
  istanbul: {
    title: "프롬프트로 지은 이스탄불",
    text: "하늘에서 본 도시 전체. 아야 소피아, 골든 혼, 보스포루스를 건너는 페리, 해 질 녘 스카이라인. Fable 5.2 Max, 약 46달러.",
  },
  "auric-voyage": {
    title: "Auric Voyage: 구름 바다 위의 황금 배",
    text: "볼류메트릭 구름 위를 떠가는 황금 범선. 낮과 밤이 바뀌고 갑판에도 오를 수 있습니다. Three.js만 사용, 약 38분·17달러.",
  },
  "pirate-ship": {
    title: "노을 속을 항해하는 해적선",
    text: "항적, 불 켜진 선실 창, 활짝 편 돛의 세 돛대 범선. 한 번에 완성, 약 1.5시간·3,500만 토큰.",
  },
  "voxel-pagoda": {
    title: "디테일 가득한 복셀 탑",
    text: "떠 있는 섬 위의 오층탑, 벚꽃, 연못, 밤이면 켜지는 등불.",
  },
  "voxel-paris-1888": {
    title: "1888년 파리, 건설 중인 에펠탑",
    text: "떠 있는 복셀 섬에서 크레인이 철골을 들어 올리고, 리벳공의 불꽃이 튀고, 증기선이 센강을 지나갑니다. 길고 정확한 프롬프트로 한 번에 완성.",
  },
  "night-tokyo-ramen-stall": {
    title: "비 오는 밤 도쿄의 라멘 포장마차",
    text: "PROMPT.md 하나, 빈 폴더, 수작업 수정 없이 20분·7달러. T 키를 누르면 비가 천천히 눈으로 바뀝니다.",
  },
  "floating-pixel-island": {
    title: "떠 있는 픽셀 섬",
    text: "마법사의 탑, 벚나무, 무지개, 비행선이 있는 픽셀 아트 섬이 반복 재생됩니다. effort extra high, 프롬프트 하나.",
  },
  "talking-village": {
    title: "모든 주민이 생각하는 유럽 마을",
    text: "주민들이 AI로 생각하고 서로 대화하는 3D 마을. Matthew Berman의 Fable 5.2 실험에서.",
  },
  "lighthouse-at-sunset": {
    title: "노을 속 사실적인 등대",
    text: "작성자가 늘 쓰는 등대 프롬프트를 Fable 5.2로. 줄무늬 등대, 돌아가는 불빛, 잔잔한 바다.",
  },
  "abyssal-landing-page": {
    title: "Abyssal: 바다 밑으로 스크롤되는 랜딩 페이지",
    text: "달빛 비치는 수면에서 빛나는 해파리를 지나, 등불 켜진 도시와 어둠 속 거대한 눈까지 스크롤로 내려갑니다. effort low로 제작.",
  },
  "liquid-glass-type": {
    title: "유리, 호박, 액체 금속 타이포그래피",
    text: "유리, 호박, 액체 금속 덩어리가 거대한 헤드라인 글자를 밀고 지나가며, 재질마다 색 구성이 바뀝니다.",
  },
  "car-configurator": {
    title: "effort medium으로 만든 자동차 컨피규레이터",
    text: "빨간 세단을 돌려 보고, 도색과 휠을 바꾸고, 빛줄기가 흐르는 출발 화면으로 전환합니다. 12분.",
  },
  "doomsday-earth": {
    title: "Doomsday Earth: 지구를 끝내는 여덟 가지 방법",
    text: "NASA 실제 지도와 도시 불빛으로 만든 지구, 그리고 소행성 충돌부터 사과처럼 지구를 먹는 신까지 여덟 가지 종말. 첫 시도에 완성.",
  },
  "virus-capsid": {
    title: "스스로 조립되는 바이러스 껍질",
    text: "HTML 파일 하나로 420개의 단백질 소단위가 T=7 껍질을 이룹니다. 먼저 오량체 12개, 이어 육량체 60개로, 실제 바이러스와 같은 기하 구조입니다.",
  },
  "drained-ocean": {
    title: "바닷물을 뺀 대서양",
    text: "NOAA 실제 해저 데이터로 만든 3D 플라이오버. 바다가 빠지자 몇 초 만에 영국이 유럽과 이어지고, 대서양 중앙 해령이 드러납니다.",
  },
  "deep-sea-dive": {
    title: "수면에서 수심 40미터까지",
    text: "깊이에 따라 햇빛, 물고기 떼, 손전등 빛이 달라지고, 옆에는 수심계가 있습니다. 전부 코드입니다.",
  },
  "pocket-black-hole": {
    title: "주머니 속 블랙홀",
    text: "화제가 될 만한 걸 만들어 달라는 요청에, Fable은 중력 렌즈로 휘어진 빛나는 강착 원반을 가진 인터랙티브 블랙홀을 만들었습니다.",
  },
  "galaxy-dive": {
    title: "나선 은하 속으로",
    text: "나선 은하 바깥에서 안으로, 광년 카운터가 줄어드는 가운데 날아 들어갑니다. 제작에 약 20분.",
  },
};

const labels: VideoLabels = {
  likes: "좋아요",
  views: "조회",
  prompt: "프롬프트 보기(작성자 원문)",
  open: "라이브로 열기",
  alt: (title) => `영상의 한 장면: ${title}`,
};

export const copy: GuideCopy = {
  meta: {
    title: "Claude Fable 5.2 영상: 코드로 만든 영상과 3D 장면 32편",
    description:
      "Claude Fable 5.2로 만든 영상. Blender로 렌더링한 애니메이션 단편, 하늘에서 본 이스탄불, 구름 바다 위의 황금 배, 랜딩 페이지와 과학 시각화까지. 영상 모델 없이 Fable이 코드를 씁니다. 작성자, 좋아요, 프롬프트 포함.",
  },
  breadcrumb: "Claude Fable 5.2 영상",
  parent: { name: "블로그", href: "/blog" },
  article: { published: "2026-11-12" },
  hero: {
    kicker: "블로그 · Claude Fable 5.2",
    title: "Claude Fable 5.2 영상: 전부 코드로 만든 영상과 3D 장면 32편",
    lead: "Claude Fable 5.2는 영상 모델처럼 영상을 생성하지 않습니다. Three.js, WebGL, Remotion, Blender의 Python으로 코드를 쓰고, 그 코드가 그린 것을 렌더링합니다. 공개 직후 며칠 동안 올라온 작품 중 가장 좋은 32편을 작성자, 수치, 공개된 경우 프롬프트와 함께 소개합니다.",
    cta: "시작하기",
    secondary: "보러 가기",
    secondaryHref: "#films",
  },
  sections: [
    {
      kind: "text",
      id: "how-it-works",
      title: "Fable 5.2는 영상을 어떻게 만드나",
      text: [
        "Fable 5.2로 영상을 생성한다는 건, 장면이나 단편을 요청해 모델, 카메라, 조명, 대개 음악까지 하나의 프로그램으로 통째로 짜게 하는 것입니다. MP4로 렌더링하는 작성자도 있고, 안을 돌아다닐 수 있는 웹 페이지로 공유하는 작성자도 있습니다.",
      ],
      points: [
        "0kncn의 90초 애니메이션은 Python으로 Blender에서 컷 하나하나를 만들었고, 음악은 numpy로 썼습니다.",
        "Marcel의 황금 배는 Blender도 외부 모델도 없는 순수 Three.js입니다. effort medium으로 약 38분·17달러.",
        "가장 많은 좋아요를 받은 Peter Gostev의 이스탄불은 Fable 5.2 Max로 약 46달러가 들었습니다.",
        "Dante의 UFO 영상은 한 문장 프롬프트로 three.js와 Remotion을 써서, 텍스처나 스톡 오디오 없이 만들었습니다.",
      ],
    },
    {
      kind: "steps",
      id: "make-one",
      title: "Claude Code에서 만드는 법",
      steps: [
        {
          title: "Fable 5.2로 Claude Code 시작",
          text: "Fable 5.2는 Pro 이상 요금제나 API가 필요합니다. 공유할 웹 페이지라면 빈 폴더로 충분하고, Blender를 쓰려면 Fable이 Python으로 다룰 수 있도록 Blender를 설치해 두세요.",
          code: "mkdir my-film && cd my-film\nclaude --model claude-fable-5-2",
        },
        {
          title: "장면을, 또는 단편을 컷별로 설명하기",
          text: "한 문장도 됩니다(\"make me a 30 second video of a UFO visiting Area 51 and greeting humans, ultra detailed, cinematic lighting\"). 아래 파리 1888처럼 길고 정확한 프롬프트라면 더 세밀하게 조절할 수 있습니다.",
        },
        {
          title: "렌더링하게 하거나, 라이브 페이지로 남기기",
          text: "해상도와 프레임 레이트를 정한 MP4를 요청하거나, 브라우저에서 열고 공유할 수 있는 HTML 페이지 하나로 만들어 달라고 할 수 있습니다.",
        },
      ],
    },
    ...videoSections(
      "ko",
      text,
      labels,
      {
        film: { title: "단편과 애니메이션", text: "카메라 워크, 이야기, 음악이 있는 짧은 영상." },
        world: { title: "3D 세계와 디오라마", text: "도시, 배, 섬. 몇몇은 안을 돌아다닐 수 있는 라이브 페이지입니다." },
        web: { title: "웹사이트와 인터랙티브 페이지", text: "스크롤하거나 클릭하면 움직이는 랜딩 페이지와 제품 페이지." },
        science: { title: "과학, 우주, 데이터", text: "은하, 블랙홀, 바이러스, 해저. 실제 데이터를 쓴 작품이 많습니다." },
      },
      "원본 게시물 보기",
    ),
    {
      kind: "text",
      id: "more",
      title: "Claude 작품 더 보기",
      text: [
        "영상마다 스크린샷 3장이 있는 전체 목록은 GitHub에 있습니다: [awesome-claude-fable-videos](https://github.com/ummydev/awesome-claude-fable-videos). Fable 5.2로 만든 게임은 [Claude Fable 5.2 게임](/blog/claude-fable-5-2-games), Opus 5.5로 만든 런칭 영상과 모션 그래픽은 [Opus 5.5 모션 그래픽](/blog/opus-5-5-motion-graphics)에서 볼 수 있습니다. 모델 자체의 변화는 [Claude Fable 5.2 가이드](/blog/claude-fable-5-2)를 참고하세요.",
      ],
    },
  ],
  howTo: { section: "make-one", name: "Claude Code에서 Claude Fable 5.2로 영상 만들기" },
  mid: {
    title: "Fable 5.2에게 지속적인 일을 맡기고 싶다면",
    text: "Crewmark 직원은 여러분의 Claude Code 위에서 일하며, 하트비트에 맞춰 깨어나 보드에서 다음 이슈를 가져갑니다.",
    button: "시작하기",
  },
  faq: {
    title: "자주 묻는 질문",
    items: [
      {
        q: "Claude Fable 5.2로 영상을 생성할 수 있나요?",
        a: "영상 모델과 같은 방식은 아닙니다. Three.js, WebGL, Remotion, Blender로 프레임마다 그리는 코드를 쓰고, MP4로 렌더링하거나 브라우저에서 바로 실행합니다. 그래서 글자, 로고, 세부가 선명합니다.",
      },
      {
        q: "어떤 도구를 쓰나요?",
        a: "가장 흔한 건 HTML 파일 하나에 담은 Three.js나 WebGL입니다. 영화식 편집에 Remotion을, Python으로 Blender를 다루거나, Python이나 numpy로 음악을 만든 경우도 있습니다.",
      },
      {
        q: "시간과 비용은 얼마나 드나요?",
        a: "약 20분·7달러(도쿄 라멘 포장마차)부터 1.5시간·3,500만 토큰(해적선), Fable 5.2 Max로 약 46달러(이스탄불)까지입니다.",
      },
      {
        q: "이 장면들을 직접 열어 볼 수 있나요?",
        a: "4편은 카드에 라이브 페이지 링크가 있습니다. 황금 배, 해적선, 블랙홀, 은하입니다. 나머지는 영상으로만 공개됐습니다.",
      },
      {
        q: "영상에는 Fable 5.2와 Opus 5.5 중 무엇을?",
        a: "둘 다 쓰입니다. 올라온 작품을 보면 Fable 5.2는 3D 세계와 단편에, Opus 5.5는 제품 런칭 영상과 모션 그래픽에 많이 쓰였고, 후자는 [Opus 5.5 모션 그래픽](/blog/opus-5-5-motion-graphics)에 모아 두었습니다.",
      },
    ],
  },
  cta: {
    title: "최신 모델에게 지속적인 일을 맡기세요.",
    text: "Crewmark는 Claude Code와 Codex 세션을 역할, 목표, 근무 시간, 하트비트를 갖춘 AI 직원으로 바꿉니다.",
    button: "시작하기",
  },
  checked: "모든 게시물과 프롬프트는 2026년 11월 11일과 12일에 X와 샤오훙수에서 확인했습니다. 좋아요와 조회수는 그 시점의 숫자입니다.",
  disclaimer:
    "영상과 프롬프트의 권리는 각 작성자에게 있으며, 모든 카드는 원본 게시물로 연결됩니다. Crewmark는 독립 제품으로 Anthropic과 제휴하거나 보증받지 않았습니다. Claude, Claude Fable, Claude Opus, Claude Code는 Anthropic의 상표입니다.",
};
