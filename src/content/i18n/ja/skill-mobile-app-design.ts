import type { GuideCopy } from "@/components/landing/guide-article";

// ja translation of /skills/mobile-app-design; the English master is src/content/skill-pages/mobile-app-design.ts.

const expo = "https://github.com/expo/skills";

const install = `# Expo 公式のスキル（Claude Code プラグイン）
/plugin install expo@claude-plugins-official

# Vercel の React Native ルール
npx skills add vercel-labs/agent-skills --skill vercel-react-native-skills

# SwiftUI Pro（Paul Hudson）
npx skills add https://github.com/twostraws/swiftui-agent-skill --skill swiftui-pro

# SwiftUI Expert（Antoine van der Lee）
/plugin marketplace add AvdLee/SwiftUI-Agent-Skill
/plugin install swiftui-expert@swiftui-expert-skill

# Flutter チームのスキル
npx skills add flutter/agent-plugins

# どのフレームワークでも使える Apple デザインレビュー
npx skills add dickwu/apple-design-skill

# React Native と Expo 向けの Mobile Taste Skill
/plugin marketplace add draftbit/mobile-taste-skill
/plugin install mobile-taste-skill`;

export const copy: GuideCopy = {
  meta: {
    title: "モバイルアプリのデザインと開発におすすめの Claude スキル",
    description:
      "2026 年のモバイルアプリ向けおすすめ Claude Code スキルをプラットフォーム別に紹介。React Native 向けの Expo と Vercel、iOS 向けの SwiftUI Pro と SwiftUI Expert、Flutter チームのスキル、Apple デザインレビューなどを、インストールコマンド付きで比較します。",
  },
  breadcrumb: "モバイルアプリのスキル",
  parent: { name: "Claude スキル", href: "/skills" },
  hero: {
    kicker: "Claude スキル · モバイルアプリ",
    title: "モバイルアプリのデザインと開発におすすめの Claude スキル",
    lead: "モバイルスキルとは、Claude Code（や Codex、Cursor などのエージェント）にスマートフォン向けの開発を教える SKILL.md ファイルです。プラットフォームのデザインルール、モデルの学習後に変わった API、SwiftUI や React Native、Flutter でエージェントがやりがちなミスを教えます。ほとんどは 1 つのプラットフォーム専用なので、自分がリリースするプラットフォームで選びましょう。ここでは 2026 年にインストールする価値のあるスキルを、プラットフォーム別に、各プロジェクトのリポジトリをもとに紹介します。",
    cta: "今すぐ始める",
    secondary: "スキルを比較する",
    secondaryHref: "#compare",
  },
  sections: [
    {
      kind: "text",
      title: "目的別のおすすめ",
      points: [
        "React Native と Expo：開発とリリースには Expo 公式のスキル、パフォーマンスには Vercel の react-native-skills か Callstack のスキル、AI っぽく見えない画面には Mobile Taste Skill。",
        "SwiftUI と iOS：モダンでアクセシブルな SwiftUI には Paul Hudson の SwiftUI Pro、状態管理とパフォーマンスには Antoine van der Lee の SwiftUI Expert、アイデアから App Store までには Claude Code Apple Skills。",
        "Flutter：アーキテクチャ、レイアウト、ルーティング、テストを扱う Flutter チーム自身のスキル。",
        "どのフレームワークでもデザインを：Apple Design Skill は SwiftUI、Flutter、React Native などのデザインを Apple のヒューマンインターフェイスガイドラインに照らしてレビューします。スタイル、配色、フォントを選ぶなら UI UX Pro Max。",
        "申請の前に：App Store Review が、プロジェクトを App Store と Google Play のルールに照らしてチェックします。",
        "アプリのように感じさせたい Web アプリ：Emil Kowalski の mobile-native が、スマートフォンで Web だとばれる CSS とメタタグを直します。",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "モバイルアプリのスキル比較",
      text: [
        "スター数とライセンスは 2026年11月8日時点の GitHub API の値で、概数です。複数のスキルを含むリポジトリでは、スター数はリポジトリ全体のものです。",
      ],
      headers: ["スキル", "プラットフォーム", "得意なこと", "スター", "ライセンス"],
      rows: [
        ["[UI UX Pro Max](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill)", "Web、モバイル、デスクトップ", "スタイル、配色、フォントの組み合わせ、UX ルール", "~147k", "MIT"],
        ["[mobile-native](https://github.com/emilkowalski/skills/tree/main/skills/mobile-native)（Emil Kowalski）", "モバイル Web、PWA", "Web アプリをスマートフォンでネイティブのように感じさせる", "~54k（リポジトリ）", "MIT"],
        ["[react-native-skills](https://github.com/vercel-labs/agent-skills/tree/main/skills/react-native-skills)（Vercel）", "React Native、Expo", "リスト、アニメーション、ナビゲーション、UI のパフォーマンスルール", "~34k（リポジトリ）", "MIT（README による）"],
        ["[SwiftUI Pro](https://github.com/twostraws/SwiftUI-Agent-Skill)（Paul Hudson）", "SwiftUI、iOS 26+", "LLM が SwiftUI でやりがちなミスの修正。アクセシビリティ", "~6.5k", "MIT"],
        ["[Expo skills](https://github.com/expo/skills)（Expo）", "React Native、Expo", "Expo アプリの開発、デザイン、リリース：ルーター、ネイティブ UI、アニメーション、EAS", "~4.1k", "MIT"],
        ["[SwiftUI Expert](https://github.com/AvdLee/SwiftUI-Agent-Skill)（Antoine van der Lee）", "SwiftUI、iOS、macOS", "状態管理、パフォーマンス、ナビゲーション、Liquid Glass。Instruments のトレースツール", "~3.9k", "MIT"],
        ["[Flutter agent plugins](https://github.com/flutter/agent-plugins)（Flutter チーム）", "Flutter", "アーキテクチャ、レスポンシブレイアウト、レイアウト修正、ルーティング、テスト、ローカライズ", "~3.2k", "BSD 3-Clause"],
        ["[Apple Design Skill](https://github.com/dickwu/apple-design-skill)", "SwiftUI、UIKit、Flutter、React Native、Tauri、Electron", "Apple のガイドライン 123 ページに照らしたデザインレビュー", "~3k", "記載なし"],
        ["[agent-skills](https://github.com/callstackincubator/agent-skills)（Callstack）", "React Native", "パフォーマンス、ナビゲーション、アップグレード、移行、実機でのテスト", "~1.7k", "MIT"],
        ["[Claude Code Apple Skills](https://github.com/rshankras/claude-code-apple-skills)", "iOS、macOS、watchOS、visionOS", "アイデアから App Store までの 165 スキル。うち 8 つがデザイン用", "~870", "MIT"],
        ["[Sleek](https://github.com/sleekdotdesign/agent-skills)", "React Native、HTML", "Sleek の AI サービスでデザインした画面を、コードで構築", "~600", "MIT"],
        ["[Mobile App UI Design](https://github.com/ceorkm/mobile-app-ui-design)", "任意（モックアップは React と Tailwind）", "有名アプリに学ぶデザインルール：色、8 ポイントグリッド、親指の届く範囲", "~500", "記載なし"],
        ["[Apple Skills](https://github.com/Prisma-Labs-Dev/apple-skills)（Prisma Labs）", "iOS 26+", "最新の Apple API：SwiftUI、UIKit、HIG、Liquid Glass、StoreKit", "~360", "MIT"],
        ["[App Store Review](https://github.com/devsemih/appstore-review-skill)", "任意", "申請前に App Store と Google Play のルールに照らしてアプリをチェック", "~100", "MIT"],
        ["[Mobile Taste Skill](https://github.com/draftbit/mobile-taste-skill)（Draftbit）", "React Native、Expo", "AI っぽく見えない画面、ナビゲーション、デザインシステム", "~10", "リポジトリを参照"],
      ],
    },
    {
      kind: "text",
      id: "installs",
      title: "最もインストールされているモバイルスキル",
      text: [
        "skills CLI 経由のインストール数で、2026年11月8日時点の skills.sh レジストリの値です。`/plugin install` で入れるプラグインはほとんどここに表れないため、最低値として見てください。",
      ],
      points: [
        "ui-ux-pro-max（Web とモバイル）：約 440,000",
        "vercel-react-native-skills：約 270,000",
        "mobile-native（Emil Kowalski）：約 116,000",
        "expo-dev-client（Expo のスキルで最も多い）：約 74,000",
        "flutter-apply-architecture-best-practices（Flutter チームのスキルで最も多い）：約 45,000",
        "swiftui-pro（Paul Hudson）：約 37,000",
        "swiftui-expert-skill（Antoine van der Lee）：約 36,000",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Claude Code をモバイルアプリ向けにセットアップする方法",
      steps: [
        {
          title: "プラットフォームで選ぶ：作るスキルを 1 つ、デザインするスキルを 1 つ",
          text: "Expo なら Expo のスキルと Mobile Taste Skill。SwiftUI なら SwiftUI Pro か SwiftUI Expert と Apple Design Skill。Flutter なら Flutter チームのスキルと Apple Design Skill か UI UX Pro Max。どちらもスタイルを決めたがるスキルを 2 つ入れると、ぶつかります。",
          code: install,
        },
        {
          title: "ブリーフと参考アプリを渡す",
          text: "誰のためのアプリか、重要な 3〜4 画面、好きな雰囲気のアプリを伝えます。Mobile Taste Skill は、コードを書く前に、エージェントにアプリの読み解き（種類、利用者、雰囲気）を決めさせ、ナビゲーションを設計させます。",
        },
        {
          title: "コードではなく、シミュレーターで確認する",
          text: "iOS シミュレーター、Android エミュレーター、Expo Go でアプリを動かし、複数のサイズで実際の画面を見ましょう。Callstack の agent-device スキルを使えば、エージェントがデバイスを操作して自分の仕事を確認できます。",
        },
        {
          title: "デザインシステムをリポジトリに保存する",
          text: "Mobile Taste Skill は MOBILE-DESIGN.md を書き出し、Expo には expo-design-system スキルがあります。結果をリポジトリに置いておけば、後のセッションやほかのエージェントも同じ色、書体、余白に従います。[CLAUDE.md ガイド](/blog/claude-md)もご覧ください。",
        },
      ],
      source: { label: "出典：Expo のエージェントスキル", href: expo },
    },
    {
      kind: "text",
      title: "インストール前に知っておきたいこと",
      points: [
        "Sleek を本格的に使うには有料アカウントが必要です。スキルの説明によると、無料アカウントでは約 1 回分のデザインに使える試用クレジットがもらえ、Pro は月額 $69 です。ブリーフはすべて sleek.design に送られます。",
        "Expo の EAS スキルは Expo のホスト型ビルドとアップデートのサービスを使います。また、どの Expo スキルも、Expo のエージェント CLI でフィードバックを送るようエージェントに求めます。",
        "SwiftUI Expert のトレースツールには Xcode の xctrace と Python 3 が必要です。手元のマシンで Instruments のトレースを記録・分析します。",
        "Claude Code Apple Skills はバージョンを固定せずに main ブランチを追っています。免責事項には、スキルは Claude Code の助けを借りて書かれ、不正確な内容を含む可能性があると書かれています。",
        "Emil Kowalski の mobile-native は、スマートフォン上の Web アプリと PWA 向けで、ネイティブアプリ向けではありません。",
        "どれも Apple や Google が作ったものではなく、App Store Review は審査の通過を約束できません。レジストリには、スターの少ないリポジトリにある Sleek の design-mobile-apps が約 130 万インストールとして載っていますが、この数字は確認できなかったため、上の一覧には含めていません。",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Crewmark なら",
      title: "スキルに、毎日働くアプリデザイナーを",
      text: [
        "スキルは 1 つのセッションのモバイル開発を良くします。Crewmark は Claude Code や Codex を AI アプリデザイナーに変えます。週に 3 画面を仕上げるといった目標、勤務時間、直すべき画面が並ぶボードを持ち、ハートビートで起きて、シミュレーターのスクリーンショット付きでプルリクエストを作成します。",
      ],
      steps: [
        {
          title: "アプリデザイナーの職種を雇う",
          text: "ブリーフ、目標、ルーティンは設定済みです。[AI アプリデザイナー](/ai-employees/app-designer)と[AI ソフトウェアエンジニア](/ai-employees/software-engineer)をご覧ください。",
        },
        {
          title: "モバイルスキルをリポジトリにインストールする",
          text: "社員はほかのセッションと同じように、`.claude/skills` のスキルを使います。Web や UI の仕事には、[Web サイトデザインにおすすめの Claude スキル](/skills/website-design)をご覧ください。",
        },
        {
          title: "プロンプトではなく、プルリクエストをレビューする",
          text: "気に入った画面は承認し、修正はボードで依頼します。[AI 社員とは](/ai-employees)もご覧ください。",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "スキルで Claude Code をモバイルアプリ開発向けにセットアップする" },
  mid: {
    title: "これらのスキルを毎日使うアプリデザイナーがほしいですか？",
    text: "Crewmark の AI アプリデザイナーは、ハートビートであなたのコードの中で働き、スクリーンショット付きのプルリクエストを作成します。",
    button: "今すぐ始める",
  },
  faq: {
    title: "Claude モバイルアプリスキルのよくある質問",
    items: [
      {
        q: "モバイルアプリのデザインに一番おすすめの Claude スキルは？",
        a: "プラットフォームによります。React Native と Expo なら Mobile Taste Skill と Expo 自身のスキル、SwiftUI なら SwiftUI Pro か SwiftUI Expert と Apple Design Skill、どのフレームワークでもビジュアル面には Apple Design Skill か UI UX Pro Max です。",
      },
      {
        q: "React Native や Expo の公式 Claude スキルはありますか？",
        a: "Expo が expo/skills を公開しており、claude-plugins-official のプラグインとしても使えます。Vercel と Callstack も React Native のスキルを公開しています。どれも Anthropic が作ったものではありません。",
      },
      {
        q: "SwiftUI と iOS に一番おすすめの Claude Code スキルは？",
        a: "Paul Hudson の SwiftUI Pro は iOS 26 と Swift 6.4、そして LLM が SwiftUI でやりがちなミスを対象にしています。Antoine van der Lee の SwiftUI Expert は状態管理、パフォーマンス、Liquid Glass を扱います。どちらもプラグインか skills CLI でインストールできます。",
      },
      {
        q: "Claude Code 向けの Flutter スキルはありますか？",
        a: "はい。Flutter チームが flutter/agent-plugins を公開しています。アーキテクチャ、レスポンシブレイアウト、レイアウト修正、ルーティング、ローカライズ、テストのスキルがあり、Dart と Flutter の MCP ツールも同梱しています。",
      },
      {
        q: "Claude Code でモバイルアプリの UI をデザインできますか？",
        a: "デザインスキルがあれば、ない場合よりずっと良くなります。スキルがプラットフォームのルールと方向性をもたらすからです。余白やタップ領域の問題はコードだけではわからないので、画面はシミュレーターかスマートフォンで確認しましょう。",
      },
      {
        q: "これらのモバイルスキルは Codex や Cursor でも使えますか？",
        a: "ほとんどは使えます。Expo、SwiftUI Pro、SwiftUI Expert、Apple Design Skill、Callstack のスキルは Codex や Cursor での使い方を記載しており、skills CLI は SKILL.md 形式のスキルを数十のエージェントにインストールできます。",
      },
    ],
  },
  cta: {
    title: "信頼できるスキルを持ったアプリデザイナーを、あなたのボードに。",
    text: "Crewmark は、Claude Code、Codex、DeepSeek Harness、OpenCode のセッションを、職種・目標・勤務時間・ハートビートを持つ AI 社員に変えます。",
    button: "今すぐ始める",
  },
  checked:
    "2026年11月8日に、各スキルの GitHub リポジトリ、GitHub API、skills.sh レジストリで確認しました。",
  disclaimer:
    "Crewmark は独立した製品であり、Anthropic、Apple、Google や掲載しているスキルの作者とは提携しておらず、その承認も受けていません。製品名は各所有者の商標です。",
};
