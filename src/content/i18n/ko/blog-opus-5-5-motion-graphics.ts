import type { GuideCopy } from "@/components/landing/guide-article";
import { motionSections, type MotionLabels, type MotionText } from "@/content/blog/opus-5-5-motion-graphics";

// ko translation of /blog/opus-5-5-motion-graphics; the English master is src/content/blog/opus-5-5-motion-graphics.ts.
// Prompts stay in the makers' own words and are not translated.

const basePrompt = "make a dynamic 15-second motion graphics video that shows what an incredible motion designer you are";

const text: MotionText = {
  "claude-motion-reel": {
    title: "모션 디자이너 Claude: 한 문장으로 만든 15초 릴",
    text: "포트폴리오 스타일의 릴. 파티클 글자, '타이밍이 전부다' 이징 곡선, 액체 같은 글자, 그리고 899프레임·8장면·키프레임 1개를 적은 주황색 엔드 카드. 프롬프트는 중국어 한 문장.",
  },
  "pelican-riding-a-bicycle": {
    title: "자전거 타는 펠리컨, 제대로 만들기",
    text: "SVG 펠리컨에 질린 제작자가 가장 정교한 버전을 요청했습니다. Opus 5.5가 Claude Code에서 모든 코드를 작성했습니다. Cycles로 렌더링한 Blender 장면, 12K 하늘을 만드는 Rust 구름 렌더러, 약 2만 4천 개의 깃털, 바큇살 36개와 체인 92마디의 자전거, 음악까지. 기성 모델, 텍스처, 음악은 쓰지 않았습니다.",
  },
  "inference-startup-launch": {
    title: "Muda: 추론 스타트업 런칭 영상, 1분 만에 약 2달러로",
    text: "\"추론은 대부분 기다림이었다. 이제는 아니다.\" 처리량이 오르면서 요청 그리드가 차례로 켜지고 마지막에 브랜드가 등장합니다. 영상 모델도 추가 라이브러리도 없이, Claude가 웹 페이지 애니메이션을 만들고 Playwright와 ffmpeg로 녹화했습니다.",
  },
  "typingmind-launch": {
    title: "TypingMind: 외주와 4주 주고받던 일을 프롬프트 하나로",
    text: "Opus가 제품 페이지를 읽고 대본을 쓴 뒤, 채팅창 하나로 여러 모델에 동시에 묻는 모습을 애니메이션으로 만들었습니다. 프롬프트 하나, Claude Code에서 1시간 가까이, skill은 설치하지 않았습니다.",
  },
  "notion-launch-it-picked": {
    title: "Opus가 직접 고른 제품, Notion 런칭 영상",
    text: "\"잘 알려진 SaaS를 골라 전문적인 런칭 영상을 만들어\"라고만 했더니 Opus가 Notion을 고르고, 웹에서 실제 자료를 가져와 세련된 기능 소개 영상으로 편집했습니다.",
  },
  "makermap-one-shape": {
    title: "MakerMap: 도형 하나가 제품 전체를 변형하며 지나간다",
    text: "20초 동안 도형 하나가 가입, 지도 핀, 지구 위 3,393명의 메이커, 매칭, 검색으로 차례로 바뀝니다. 스프링, 커서, 모션 블러는 모두 HTML 파일 하나 안의 결정론적 계산입니다.",
  },
  "distilbook-oppenheimer": {
    title: "오펜하이머풍 음악을 입힌 Distilbook",
    text: "'핵분열'과 '핵융합' 두 장으로 구성됩니다. 수많은 금빛 페이지가 제목으로 모이고, 카운트다운과 폭발이 이어집니다. 음악은 영화 테마를 참고해 Opus가 직접 작곡했습니다.",
  },
  "distilbook-film-strips": {
    title: "Distilbook: 필름 띠가 소용돌이치며 터널로",
    text: "무지개색 필름 띠가 화면을 가로질러 빛나는 터널로 감겨 들어갑니다. 참고 영상의 스타일을 따랐고, 최종본에 수작업 수정은 없습니다.",
  },
  "motionsites-1m-visitors": {
    title: "MotionSites, 월 방문자 100만 돌파",
    text: "카운터가 100만까지 치솟는 기념 영상. 4분 만에 한 번에 나왔고 수정은 한 곳뿐이었습니다.",
  },
  "famewall-mascot": {
    title: "Famewall: 마스코트를 스스로 찾아 넣었다",
    text: "고객 후기 수집 도구의 런칭 영상. Opus가 사이트의 SVG를 뒤져 마스코트를 찾아냈고, 시키지 않았는데도 영상에 넣었습니다.",
  },
  "lumail-pricing": {
    title: "Lumail: AI 에이전트가 직접 운영하는 이메일 마케팅",
    text: "메일을 열지 않는 연락처의 점 그리드와 계속 오르는 청구액을 보여 준 뒤 본론으로. skill 없이 프롬프트만으로 10분 안에 완성.",
  },
  "founder-page-launch": {
    title: "founder.page: 20초에 모든 기능을",
    text: "빠르고 브랜드에 맞는 런칭 영상, 실시간 매출과 방문자 카운터 포함. Claude Code에서 한 번에 완성.",
  },
  "tanstack-ai-launch": {
    title: "TanStack AI: 개발자 도구 런칭 필름",
    text: "Opus 5.5와 Remotion으로 제작. 키노트 오프닝에 쓸 만한 고급 런칭 필름을 요구하는 긴 브리프 하나에서 시작했습니다.",
  },
  "sahi-trading-terminal": {
    title: "우주의 한 점까지 줌아웃하는 트레이딩 터미널",
    text: "점 하나에서 차트, 포지션, 옵션 체인이 나타나고, 데스크톱이 우주의 점이 될 때까지 멀어졌다가 휴대폰 화면으로 돌아옵니다. 한 번에 완성.",
  },
  "aisa-one-key": {
    title: "AIsa: 수많은 API 키가 하나로",
    text: "쏟아지는 키 이름이 주황색 키 하나로 모입니다. 프롬프트 하나, 한 번에 완성.",
  },
  "flowdrive-showreel": {
    title: "Flowdrive: 4K 스트리밍, 어디로든 전송",
    text: "파일 전송 서비스의 어둡고 매거진 같은 영상. 겹겹의 지형, 빛나는 점 지구, 커스텀 도메인. skill 없이, 소리를 켜고 보세요.",
  },
  "matra-apple-style": {
    title: "Matra: 애플 스타일 앱 소개 영상",
    text: "Remotion과 React로 만든 30초 영상. SF Pro 서체, 티타늄 iPhone, 실제 목소리에 단어 단위로 맞춘 자막, 그리고 음악.",
  },
  "no-hands-labs": {
    title: "No Hands Labs: 스스로 만들어지는 회사",
    text: "검은 바탕의 라임색 글자와 도트 매트릭스 95%로 AI가 운영하는 회사를 만드는 스튜디오를 소개합니다.",
  },
  "pen-designs-launch": {
    title: "norilu: 계속 돌아오는 일을 맡기세요",
    text: "Opus가 pen.dev MCP로 작성자의 디자인을 읽고 차분한 런칭 영상을 만들었습니다. 직설적인 후속 지시 한 번에 음악과 템포가 훨씬 좋아졌습니다.",
  },
  "bento-surf": {
    title: "Bento.surf: 40초 제품 영상",
    text: "모바일 중심의 경쾌한 링크 페이지 소개 영상, 프롬프트 하나로.",
  },
  quickemailverify: {
    title: "QuickEmailVerify: 보내기 전에 반송을 막는다",
    text: "이메일 검증 도구의 SaaS 스타일 영상. 주소 입력부터 정리된 목록까지. Opus 5.5, effort high.",
  },
  "orbe-everyday-spending": {
    title: "Orbe: 아이소메트릭 3D로 보는 일상 지출",
    text: "지출 관리 앱의 세로 영상. 마트, 주유소, 식당에서 각각 결제가 기록됩니다. 작성자는 프롬프트가 하나만은 아니었다고 밝혔습니다.",
  },
  "winkz-pitch": {
    title: "아마존 도매 사업의 피치 영상",
    text: "브랜드를 향한 15초 피치. 가격 보호와 선매입 숫자가 함께 나옵니다.",
  },
  "queryglow-launch": {
    title: "QueryGlow: Anthropic 스타일 런칭 영상",
    text: "셀프 호스팅 데이터베이스 도구의 조용한 세리프체 영상. 작성자는 독일어로 \"Anthropic처럼\"을 요청했고 마지막에 음악을 더했습니다.",
  },
  "opus-1984-ad": {
    title: "애플 '1984'를 오마주한 Opus 5.5 광고",
    text: "망치를 들고 달리는 사람, 줄지어 앉은 회색 군중, 스크린 속 거대한 얼굴. 모두 코드로만 만들었고, Opus는 음량까지 확인했습니다.",
  },
  "paybox-brand-sting": {
    title: "PayBox: 로고 하나로 만든 브랜드 스팅",
    text: "에이전트가 로고를 읽고 회사를 찾아 시나리오를 쓴 뒤 10초짜리 스팅을 한 번에 만들었습니다.",
  },
  "paymentform-logo-reveal": {
    title: "PaymentForm: 로우폴리 조각으로 맞춰지는 로고",
    text: "와이어프레임 로고가 조각으로 하나씩 채워지고, 앱 아이콘이 내려앉고, 이름이 타이핑됩니다. 효과음 포함.",
  },
  "opus-retro-launch": {
    title: "레트로 퓨처리즘 Opus 5.5 런칭 영상",
    text: "빛나는 줄무늬 머리에 필름 그레인과 CRT 효과. 프롬프트 하나와 스타일 참고 이미지 한 장에서.",
  },
  "psychedelic-showreel": {
    title: "Phosphene: 사이키델릭 모션 습작",
    text: "거대한 눈, 회전하는 터널과 만화경. 영상과 사운드 모두 Opus가 effort xhigh로 만들었고, 렌더링 90분에 총 14달러.",
  },
  "poster-breaks-out": {
    title: "자기 틀을 깨고 나오는 포스터",
    text: "빨강과 파랑의 큰 글자가 포스터를 뚫고 나옵니다. 사운드트랙도 Opus가 작곡해 모든 타격음을 비트에 맞췄습니다.",
  },
  "i-can": {
    title: "I CAN: 흐리고, 반복하고, 렌더링하고, 무리 짓고, 빛을 굽히다",
    text: "적힌 대로 움직이는 굵은 타이틀 카드들. 프롬프트는 한 줄.",
  },
  "light-speed-earth": {
    title: "지구의 1초",
    text: "아무 방향도 주지 않자 Opus가 주제를 직접 골랐습니다. 빛이 지구를 도는 것부터 네 명의 아기가 태어나는 것까지, 1초 동안 일어나는 모든 일.",
  },
  "no-samples-showreel": {
    title: "음악까지 처음부터 합성한 쇼릴",
    text: "작성자는 모션 디자인을 전혀 모릅니다. Opus가 모든 프레임의 코드를 쓰고 샘플 없이 음악을 합성했습니다. Cursor에서 제작.",
  },
  "easing-explained": {
    title: "I make things move: 모션 디자이너 Claude",
    text: "회전하고 스냅되는 글자, 이징 곡선 설명, 엔드 카드. 프롬프트는 중국어 한 문장.",
  },
  "portfolio-film": {
    title: "디자이너 포트폴리오를 영상으로",
    text: "Opus가 작성자 포트폴리오의 모든 화면과 오픈소스 작업을 살펴보고 강렬한 릴을 한 번에 만들었습니다.",
  },
  "it-thinks-in-curves": {
    title: "리듬, 타이포, 루프: 곡선으로 생각한다",
    text: "색 블록 글자가 정사각형으로 반복되고 베지어 곡선이 실시간으로 그려집니다. 키프레임 대신 수식을 쓴다는 Opus의 말 그대로.",
  },
  "who-are-you-opus": {
    title: "Hi, I'm Claude: Opus 5.5의 자기소개",
    text: "10초짜리 글자 애니메이션. \"모든 단어를 읽어요\", \"깊이 생각해요\", \"솔직하게 말해요\", \"함께 만들어요\".",
  },
  "madhav-about-me": {
    title: "요청한 사람에 대한 10초 영상",
    text: "자기에 대해 아는 것으로 영상을 만들어 달라고 하자, Opus는 작성자의 일을 다룬 파티클 영상을 만들었습니다.",
  },
  "recursion-nine-styles": {
    title: "아홉 가지 장르로 설명하는 재귀",
    text: "설명이 한 단계 깊어질 때마다 스타일이 바뀌어, 레트로 게임에서 필름 누아르까지. 진짜 한 번에 나온 결과물로, 장면은 React와 SVG, 음악과 효과음은 Python으로 합성했습니다.",
  },
  "negroni-recipe": {
    title: "한 단계씩 만드는 네그로니",
    text: "재료를 하나씩 잔에 붓는 레시피 설명 영상. 이미지 한 장을 바탕으로 HTML로 렌더링했습니다.",
  },
  "history-of-ai": {
    title: "3분이 안 되는 AI의 83년",
    text: "자료 조사, 대본, 애니메이션, 실제 녹음까지. 5,160프레임 전부를 Claude가 프롬프트 하나로 코드를 써서 만들었습니다.",
  },
  "how-llms-work-fable": {
    title: "LLM의 작동 방식을 모션 그래픽으로",
    text: "토큰, 임베딩, 어텐션, 트랜스포머 레이어를 각각 한 장면으로. Matthew Berman의 Fable 5.2 테스트에서.",
  },
  "white-russian-recipe": {
    title: "손그림 스타일의 화이트 러시안",
    text: "스케치 한 장과 프롬프트 하나로 약 25분 뒤 1080p MP4가 나왔습니다. SVG와 순수 JavaScript로 된 HTML 파일 하나, 애니메이션 라이브러리 없이.",
  },
};

const labels: MotionLabels = {
  likes: "좋아요",
  views: "조회",
  prompt: "프롬프트 보기(원문)",
  alt: (title) => `영상의 한 장면: ${title}`,
};

export const copy: GuideCopy = {
  meta: {
    title: "Opus 5.5 모션 그래픽: 43가지 예시와 프롬프트",
    description:
      "Claude Opus 5.5로 만든 모션 그래픽 영상. 런칭 영상, 로고 애니메이션, 키네틱 타이포그래피, 설명 영상을 작성자의 프롬프트, 좋아요, 조회수와 함께 소개합니다. 모두가 따라 쓴 프롬프트와 Claude Code에서 만드는 법도 담았습니다.",
  },
  breadcrumb: "Opus 5.5 모션 그래픽",
  parent: { name: "블로그", href: "/blog" },
  article: { published: "2026-11-12" },
  hero: {
    kicker: "블로그 · Claude Opus 5.5",
    title: "Opus 5.5 모션 그래픽: 43가지 예시와 그 뒤의 프롬프트",
    lead: "Claude Opus 5.5가 나온 뒤 많은 사람이 모션 그래픽을 만들게 하고 결과를 올리고 있습니다. 런칭 영상, 로고 애니메이션, 키네틱 타이포그래피, 레시피 설명. 모두 Opus가 코드를 써서 MP4로 렌더링한 것입니다. 전부 보고 가장 좋은 43개를 골라 작성자의 프롬프트와 함께 정리했습니다.",
    cta: "시작하기",
    secondary: "예시 보기",
    secondaryHref: "#launch-films",
  },
  sections: [
    {
      kind: "text",
      id: "how-it-works",
      title: "Claude는 모션 그래픽 영상을 어떻게 만드나",
      text: [
        "영상 모델은 쓰지 않습니다. Opus는 애니메이션을 코드(SVG와 JavaScript로 된 웹 페이지, React나 [Remotion](https://www.remotion.dev) 프로젝트, 가끔 Three.js)로 작성하고, 헤드리스 브라우저로 한 프레임씩 넘기며 ffmpeg로 영상을 만듭니다. 음악과 효과음도 코드로 합성합니다.",
        "모든 프레임이 시간의 함수라서 루프가 정확히 이어지고, 소리가 원하는 프레임에 딱 맞습니다. 글자도 선명하고 정확해서 제품명, 가격, UI 문구가 틀리지 않습니다.",
      ],
      points: [
        "Deedy Das의 런칭 영상은 JavaScript, Playwright, ffmpeg만으로 만들었고 API 비용은 약 2달러였습니다.",
        "Ethan Mollick의 재귀 영상은 모든 장면을 React와 SVG로 그리고 음악은 Python으로 합성했습니다.",
        "Sarutobi Sasuke의 칵테일 설명 영상은 SVG와 순수 JavaScript로 된 HTML 파일 하나로, 애니메이션 라이브러리 없이 약 25분 만에 완성됐습니다.",
      ],
    },
    {
      kind: "steps",
      id: "make-one",
      title: "Claude Code에서 만드는 법",
      steps: [
        {
          title: "빈 폴더에서 Opus 5.5로 Claude Code 시작",
          text: "skill이나 플러그인을 하나도 설치하지 않았다는 작성자가 여럿입니다. Opus가 도구를 직접 고르고 필요한 것을 설치합니다.",
          code: "mkdir launch-film && cd launch-film\nclaude --model claude-opus-5-5",
        },
        {
          title: "프롬프트와 제품 정보를 주기",
          text: "사이트 주소를 붙이면 페이지를 읽고 대본까지 직접 씁니다. 로고 파일, 스크린샷, 참고 영상이 있으면 분위기를 맞추기 쉽습니다.",
          code: `${basePrompt} for https://your-site.com. Visit the pages first to learn about the product, then write the video content yourself. Go all out.`,
        },
        {
          title: "렌더링 맡기기",
          text: "길이와 effort에 따라 몇 분에서 한 시간 반까지 걸립니다. MP4가 저장된 위치를 알려 달라고 해 두세요.",
        },
        {
          title: "보고 나서 아쉬운 점을 분명히 말하기",
          text: "Sacha Arbonel의 첫 버전은 너무 빠르고 음악도 약했지만, 직설적인 후속 지시 한 번에 훨씬 좋아졌습니다. 템포를 늦추거나, 저작권 없는 음악으로 바꾸거나, 화면 비율을 바꿔 달라고 하세요.",
        },
      ],
    },
    {
      kind: "text",
      id: "the-prompt",
      title: "모두가 따라 쓴 프롬프트",
      text: [`아래 영상 상당수는 X에서 돌던 같은 짧은 프롬프트에서 시작합니다: \`${basePrompt}\`. 작성자들이 자주 덧붙인 것:`],
      points: [
        "제품이나 사이트: \"for <내 URL>\", 또는 \"먼저 페이지를 보고 제품을 이해한 다음, 영상 내용은 직접 써\".",
        "기준점: \"네 쇼릴처럼\", \"전력을 다해(go all out)\", \"고급 개발자 도구 런칭 필름\", \"애플 스타일\".",
        "분위기나 소리: \"사이키델릭하고 최면적으로\", 또는 \"오펜하이머 테마 음악을 참고하되 직접 작곡해\".",
        "금지 사항: \"AI가 만든 티가 나는 모서리 프레임과 작은 글자는 피해\".",
        "참고 자료: 로고, 이미지 한 장, 손그림 스케치, 따라 할 다른 영상.",
      ],
    },
    ...motionSections(
      "ko",
      text,
      labels,
      {
        launch: { title: "제품 런칭 영상", text: "실제 제품의 런칭 영상, 기념 영상, 피치. 대부분 프롬프트 하나로." },
        brand: { title: "로고 애니메이션과 브랜드 영상", text: "로고, 참고 이미지, 유명 광고에서 출발한 스팅과 광고." },
        showreel: { title: "쇼릴과 키네틱 타이포그래피", text: "모션 디자이너로서 실력을 뽐내는 Opus. 글자, 루프, 순수한 움직임." },
        explainer: { title: "설명 영상", text: "레시피, 역사, 컴퓨터 과학을 움직임으로 설명합니다." },
      },
      "원본 게시물 보기",
    ),
    {
      kind: "text",
      id: "more",
      title: "더 많은 영상",
      text: [
        "영상마다 스크린샷 3장과 모든 프롬프트를 담은 전체 목록은 GitHub에 있습니다: [awesome-claude-motion-video](https://github.com/ummydev/awesome-claude-motion-video).",
        "Claude 최신 모델로 만든 3D 세계와 단편은 GitHub의 [Claude Fable 5.2 영상 모음](https://github.com/ummydev/awesome-claude-fable-videos)에서, 새 모델의 변화와 Opus 5.5 비교는 [Claude Fable 5.2 가이드](/blog/claude-fable-5-2)에서 볼 수 있습니다.",
      ],
    },
  ],
  howTo: { section: "make-one", name: "Claude Code에서 Claude Opus 5.5로 모션 그래픽 영상 만들기" },
  mid: {
    title: "출시할 때마다 런칭 영상이 필요하다면",
    text: "Crewmark 직원은 여러분의 Claude Code 위에서 일합니다. 릴리스 노트를 넘기면 출시 준비하는 동안 영상을 렌더링해 둡니다.",
    button: "시작하기",
  },
  faq: {
    title: "자주 묻는 질문",
    items: [
      {
        q: "Claude Opus 5.5로 영상을 만들 수 있나요?",
        a: "네, 코드를 써서 만듭니다. 애니메이션을 웹 페이지나 Remotion 프로젝트로 만들고 한 프레임씩 MP4로 렌더링하며, 음악도 직접 합성합니다. 영상 모델처럼 화면을 생성하는 방식이 아니라서 글자, 숫자, UI가 선명합니다.",
      },
      {
        q: "skill, Remotion, After Effects가 필요한가요?",
        a: "필요 없습니다. skill 없이 평범한 Claude Code를 썼다는 작성자가 여럿입니다. 도구는 Opus가 직접 고르며, 보통 Playwright나 헤드리스 Chrome과 ffmpeg, 가끔 Remotion을 씁니다.",
      },
      {
        q: "시간과 비용은 얼마나 드나요?",
        a: "약 1분·2달러(Deedy Das)부터 effort xhigh로 렌더링 한 시간 반·14달러(monokern)까지입니다. 대부분은 프롬프트 하나로 몇 분에서 한 시간이 걸렸다고 했습니다.",
      },
      {
        q: "음악은 어디서 오나요?",
        a: "Opus가 보통 Python이나 JavaScript로 직접 작곡·합성하고 타격음을 컷에 맞춥니다. 저작권 없는 음악을 쓰라고 한 작성자도 있습니다.",
      },
      {
        q: "이 프롬프트를 써도 되나요?",
        a: "프롬프트는 작성자 본인의 것으로, 게시물에서 인용했습니다. 여러분의 제품으로 시험해 보세요. 영상 자체의 권리는 작성자에게 있습니다.",
      },
    ],
  },
  cta: {
    title: "영상 제작은 AI 직원에게.",
    text: "Crewmark는 Claude Code와 Codex 세션을 역할, 목표, 근무 시간, 하트비트를 갖춘 AI 직원으로 바꿉니다.",
    button: "시작하기",
  },
  checked: "좋아요, 조회수, 프롬프트는 2026년 11월 12일 X와 샤오훙수의 원본 게시물에서 하나씩 확인했습니다.",
  disclaimer:
    "영상과 프롬프트의 권리는 각 작성자에게 있으며, 모든 카드는 원본 게시물로 연결됩니다. Crewmark는 독립 제품으로 Anthropic과 제휴하거나 보증받지 않았습니다. Claude, Claude Opus, Claude Fable, Claude Code는 Anthropic의 상표입니다.",
};
