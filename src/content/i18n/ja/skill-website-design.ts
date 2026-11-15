import type { GuideCopy } from "@/components/landing/guide-article";

// Japanese translation of /skills/website-design; the English master is src/content/skill-pages/website-design.ts.

const anthropic = "https://github.com/anthropics/skills/tree/main/skills/frontend-design";

const install = `# Anthropic's official frontend-design (Claude Code)
/plugin install frontend-design@claude-plugins-official

# Taste Skill
npx skills add https://github.com/Leonxlnx/taste-skill --skill "design-taste-frontend"

# Impeccable
npx impeccable install

# UI UX Pro Max (Claude Code, Cursor, Codex and more)
npm install -g ui-ux-pro-max-cli && uipro init --ai claude

# unslop (Claude Code)
git clone https://github.com/heydamir/unslop
mkdir -p ~/.claude/skills && cp -r unslop/skills/unslop ~/.claude/skills/`;

export const copy: GuideCopy = {
  meta: {
    title: "Web・UI デザインにおすすめの Claude スキル（2026年版）",
    description:
      "Web サイトと UI デザインにおすすめの Claude Code スキルを、各プロジェクトのリポジトリをもとに比較。Anthropic の frontend-design、Taste Skill、Impeccable、UI UX Pro Max、unslop、Emil Kowalski のスキル、shadcn などを、インストールコマンド付きで紹介します。",
  },
  breadcrumb: "Web・UI デザインのスキル",
  parent: { name: "Claude スキル", href: "/skills" },
  hero: {
    kicker: "Claude スキル · デザイン",
    title: "Web サイト・UI デザインにおすすめの Claude スキル",
    lead: "デザインスキルとは、Claude Code（や Codex、Cursor などのエージェント）にデザインのやり方を教える SKILL.md ファイルです。どんな色や書体を選ぶか、AI っぽく見えるどの定番を避けるか、完成と言う前に結果をどう確かめるかを教えます。スキルがないと、エージェントはどれも同じようなグラデーションとカードのページを作りがちです。ここでは 2026 年にインストールする価値のあるスキルと、それぞれの得意分野、インストール方法を、各プロジェクトのリポジトリをもとに紹介します。",
    cta: "今すぐ始める",
    secondary: "スキルを比較する",
    secondaryHref: "#compare",
  },
  sections: [
    {
      kind: "text",
      title: "目的別のおすすめ",
      points: [
        "新しいランディングページやコーポレートサイト：Taste Skill。方向性を決め、実際の写真を使い、引き渡す前にブラウザで 4 つの幅でページを確認します。",
        "既存の UI を仕上げる：Impeccable（polish、critique、audit などのコマンドと、ルールベースの「AI っぽさ」検出器）か、unslop（余白、色、アイコン、文言、書体の順に直します）。",
        "Anthropic 公式の無難な定番：公式スキルの frontend-design は、ありきたりな AI デザインから離れるよう導きます。",
        "どのプラットフォームでもスタイル、配色、フォントを選ぶ：UI UX Pro Max。Web、モバイル、デスクトップ向けの検索できるデザインデータベースです。",
        "モーションと細部：Emil Kowalski のスキル。",
        "アクセシビリティと UX のルールでコードをレビューする：Vercel の web-design-guidelines。",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Web サイト・UI デザインのスキル比較",
      text: [
        "スター数とライセンスは 2026年11月8日時点の GitHub API の値で、概数です。複数のスキルを含むリポジトリでは、スター数はリポジトリ全体のものです。",
      ],
      headers: ["スキル", "得意なこと", "対応ツール", "スター", "ライセンス"],
      rows: [
        ["[frontend-design](https://github.com/anthropics/skills/tree/main/skills/frontend-design)（Anthropic）", "新しい UI に個性のあるデザインを。最初にトークン体系を設計", "Claude Code、Claude.ai", "~189k（リポジトリ）", "Apache 2.0"],
        ["[UI UX Pro Max](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill)", "Web、モバイル、デスクトップ向けのスタイル、配色、フォントの組み合わせ、UX ルール", "Claude Code、Cursor、Codex ほか約 20 種", "~147k", "MIT"],
        ["[Taste Skill](https://github.com/Leonxlnx/taste-skill)", "コーポレートサイトやマーケティングサイト。実際のブラウザで確認", "Claude Code、Codex、skills CLI", "~112k", "MIT"],
        ["[Impeccable](https://github.com/pbakaus/impeccable)", "既存 UI の批評と仕上げ。AI っぽさ検出器", "Claude Code、Codex、Cursor ほか", "~105k", "Apache 2.0"],
        ["[Emil Kowalski のスキル](https://github.com/emilkowalski/skills)", "アニメーション、仕上げ、コンポーネントの細部", "skills CLI であらゆるエージェント", "~54k", "MIT"],
        ["[web-design-guidelines](https://github.com/vercel-labs/agent-skills/tree/main/skills/web-design-guidelines)（Vercel）", "100 以上のアクセシビリティと UX のルールで UI コードを監査", "skills CLI であらゆるエージェント", "~34k（リポジトリ）", "MIT（README による）"],
        ["[shadcn](https://github.com/shadcn-ui/ui/tree/main/skills/shadcn)", "React アプリで shadcn/ui のコンポーネントを正しく使う", "skills CLI であらゆるエージェント", "~128k（リポジトリ）", "MIT"],
        ["[Huashu Design](https://github.com/alchaincyf/huashu-design)", "1 つのプロンプトからページ、アプリのプロトタイプ、スライド、モーションを生成。中国語で書かれている", "Claude Code、Cursor、Codex ほか", "~29k", "MIT"],
        ["[unslop](https://github.com/heydamir/unslop)", "AI っぽい UI を、一歩ずつデザインされたインターフェースに変える", "Claude Code、Codex", "~11k", "CC BY 4.0"],
        ["[Stitch スキル](https://github.com/google-labs-code/stitch-skills)（Google）", "Stitch でデザインし、React や React Native で構築", "Claude Code、Cursor、Codex。Stitch MCP が必要", "~9k", "Apache 2.0"],
        ["[Figma スキル](https://github.com/figma/mcp-server-guide)", "Figma のデザインをコードに。Figma 上のデザインシステム作成（ベータ）", "Claude Code、Cursor。Figma MCP が必要", "~2k", "Figma Developer Terms"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "デザインスキルのインストールと使い方",
      steps: [
        {
          title: "全部ではなく、1〜2 個だけ入れる",
          text: "それぞれが方向性を決めたがるスキル同士はぶつかります。デザインを担うものを 1 つ（frontend-design、Taste Skill、UI UX Pro Max）、必要ならレビューを担うものを 1 つ（Impeccable、unslop、web-design-guidelines）選びましょう。",
          code: install,
        },
        {
          title: "ブリーフを渡す",
          text: "ページの目的、誰のためのページか、好きなサイトを 1〜2 つ伝えます。多くのスキルは最初に方向性を尋ねてきます。結果の具体性は、ブリーフの具体性で決まります。",
        },
        {
          title: "自分の仕事を確認させる",
          text: "Taste Skill はページを 4 つの幅でレンダリングし、仕上げチェック（finish gate）を実行します。Impeccable の検出器は `npx impeccable detect src/` で 62 のルールを走らせます。こうしたチェックはオンのままにして、スクリーンショットも自分の目で確認しましょう。",
        },
        {
          title: "結果をデザインシステムとして保存する",
          text: "いくつかのスキルは DESIGN.md を書き出します（Impeccable、Taste Skill、Stitch）。これをリポジトリに置いておけば、後のセッションやほかのエージェントも同じ色、書体、余白に従います。[CLAUDE.md ガイド](/blog/claude-md)もご覧ください。",
        },
      ],
      source: { label: "出典：Anthropic の frontend-design スキル", href: anthropic },
    },
    {
      kind: "text",
      title: "インストール前に知っておきたいこと",
      points: [
        "フックを追加したり、エンジンをダウンロードしたりするスキルもあります。Impeccable はコマンドフックをインストールし、テレメトリーがデフォルトでオンです（`DO_NOT_TRACK=1` でオプトアウト）。Taste Skill は仕上げチェックを Stop フックとして実行し、Node 22+ と Chrome が必要です。",
        "README によると、Taste Skill のフルビルドには 30–45 分と数十万トークンかかることがあります。",
        "UI UX Pro Max には Python 3 が必要で、有料のプレミアム版も販売しています。オープンなスキル自体は MIT です。",
        "unslop は CC BY 4.0 です。文章を再利用するときは作者をクレジットしてください。同じ名前の、文章向けのリポジトリと混同しないようにしましょう。",
        "Stitch と Figma のスキルには、それぞれの MCP サーバーとアカウントが必要です。Figma のキャンバスへの書き込みはベータ版で、無料シートでは制限があります。",
        "私たちのチームでは、Crewmark 自身のプロダクト画面に Taste Skill を使い、unslop についての短い動画も作りました。姉妹プロジェクトの [pretty-ui](https://github.com/ummydev/pretty-ui) は、同じ目的の、より新しく小さなスキルです。",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Crewmark なら",
      title: "スキルに、毎日働くデザイナーを",
      text: [
        "スキルは 1 つのセッションのデザインを良くします。Crewmark は Claude Code や Codex を AI UI デザイナーに変えます。週に 3 画面を仕上げるといった目標、勤務時間、直すべき画面が並ぶボードを持ち、ハートビートで起きて、ビフォーアフターのスクリーンショット付きでプルリクエストを作成します。",
      ],
      steps: [
        {
          title: "UI デザイナーの職種を雇う",
          text: "役割ブリーフ、目標、ルーティンは設定済みです。[AI UI デザイナー](/ai-employees/ui-designer)と[AI アプリ UI デザイナー](/ai-employees/app-designer)をご覧ください。",
        },
        {
          title: "デザインスキルをリポジトリにインストールする",
          text: "社員はほかのセッションと同じように、`.claude/skills` のスキルを使います。",
        },
        {
          title: "プロンプトではなく、プルリクエストをレビューする",
          text: "気に入った画面は承認し、修正はボードで依頼します。[AI 社員とは](/ai-employees)もご覧ください。",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Claude のデザインスキルをインストールして使う" },
  mid: {
    title: "これらのスキルを毎日使うデザイナーがほしいですか？",
    text: "Crewmark の AI UI デザイナーは、ハートビートであなたのコードの中で働き、スクリーンショット付きのプルリクエストを作成します。",
    button: "今すぐ始める",
  },
  faq: {
    title: "Claude デザインスキルのよくある質問",
    items: [
      {
        q: "Web サイトのデザインに一番おすすめの Claude スキルは？",
        a: "新しいサイトなら Taste Skill か Anthropic の frontend-design、既存 UI の仕上げなら Impeccable か unslop、プラットフォームをまたいでスタイルや配色を選ぶなら UI UX Pro Max です。多くの人は、デザイン用とレビュー用を 1 つずつ入れています。",
      },
      {
        q: "公式の Claude デザインスキルはありますか？",
        a: "はい。Anthropic が anthropics/skills で frontend-design を公開しており、claude-plugins-official ではプラグインとしても提供しています。Apache 2.0 で、ありきたりな AI デザインの定番を避けることに重点を置いています。",
      },
      {
        q: "Claude Code にスキルをインストールするには？",
        a: "プラグインマーケットプレイス（`/plugin marketplace add owner/repo` のあと `/plugin install`）か skills CLI（`npx skills add owner/repo`）を使うか、スキルのフォルダを `.claude/skills/` にコピーします。",
      },
      {
        q: "これらのスキルは Codex や Cursor でも使えますか？",
        a: "ほとんどは使えます。UI UX Pro Max、Impeccable、Taste Skill、Huashu Design は Codex での使い方を記載しており、skills CLI は SKILL.md 形式のスキルを Cursor、Codex とほか約 75 のエージェントにインストールできます。",
      },
      {
        q: "Claude のデザインスキルは無料ですか？",
        a: "ここで紹介しているスキルはオープンソースです（MIT、Apache 2.0、CC BY 4.0）。周辺の製品には有料のものもあります。UI UX Pro Max のプレミアム版や、それぞれのアカウントが必要な Stitch と Figma です。",
      },
      {
        q: "Impeccable と Taste Skill の違いは？",
        a: "Taste Skill は新しいコーポレートサイトやマーケティングサイトを作り、実際のブラウザで確認します。Impeccable は既存のインターフェースに強く、批評・監査・仕上げのコマンドと、ルールベースの AI っぽさ検出器を備えています。",
      },
    ],
  },
  cta: {
    title: "信頼できるスキルを持ったデザイナーを、あなたのボードに。",
    text: "Crewmark は、Claude Code、Codex、DeepSeek Harness、OpenCode のセッションを、職種・目標・勤務時間・ハートビートを持つ AI 社員に変えます。",
    button: "今すぐ始める",
  },
  checked: "2026年11月8日に、各スキルの GitHub リポジトリと GitHub API で確認しました。",
  disclaimer:
    "Crewmark は独立した製品であり、Anthropic や掲載しているスキルの作者とは提携しておらず、その承認も受けていません。製品名は各所有者の商標です。",
};
