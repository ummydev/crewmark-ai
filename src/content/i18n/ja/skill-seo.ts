import type { GuideCopy } from "@/components/landing/guide-article";

// ja translation of /skills/seo; the English master is src/content/skill-pages/seo.ts.

const corey = "https://github.com/coreyhaines31/marketingskills";

const install = `# Corey Haines の marketingskills：SEO のスキルだけを入れる
npx skills add coreyhaines31/marketingskills --skill seo-audit ai-seo programmatic-seo schema site-architecture

# Claude SEO（Claude Code の中で）
/plugin marketplace add AgriciDaniel/claude-seo
/plugin install claude-seo@agricidaniel-claude-seo
/seo setup

# 実際の Search Console データ（Ian Nuttall の seo、ホスト型 MCP）
claude mcp add --transport http seoskill https://seoskill.dev/mcp

# Addy Osmani の Lighthouse ベースの SEO スキル
npx skills add addyosmani/web-quality-skills --skill seo

# Marketing Team Skills（私たちのもの）：毎日の SEO ルーティン
npx skills add ummydev/marketing-team-skills`;

export const copy: GuideCopy = {
  meta: {
    title: "SEO におすすめの Claude スキル（2026年版）：監査、GEO、キーワード",
    description:
      "SEO と AI 検索におすすめの Claude Code スキルを、各プロジェクトのリポジトリをもとに比較。Corey Haines の seo-audit と ai-seo、Claude SEO、GEO-SEO Claude、Search Console MCP、SE Ranking などを、インストール数とコマンド付きで紹介します。",
  },
  breadcrumb: "SEO のスキル",
  parent: { name: "Claude スキル", href: "/skills" },
  hero: {
    kicker: "Claude スキル · SEO",
    title: "SEO におすすめの Claude スキル",
    lead: "SEO スキルとは、Claude Code（や Codex、Cursor などのエージェント）に検索まわりの仕事の一部を教える SKILL.md ファイルです。サイトの監査、ページの企画、スキーマの作成、AI 検索で引用されることなどを扱います。種類は 2 つあります。メソッド型スキルは、キーが不要な無料のチェックリストや手順書です。データ型スキルは、MCP サーバーを通じてエージェントを Search Console、DataForSEO、SE Ranking、Ahrefs につなぎ、推測ではなく実際の数字で作業させます。良い構成は、それぞれ 1 つずつです。ここでは 2026 年にインストールする価値のあるスキルを、各プロジェクトのリポジトリをもとに紹介します。",
    cta: "今すぐ始める",
    secondary: "スキルを比較する",
    secondaryHref: "#compare",
  },
  sections: [
    {
      kind: "text",
      title: "目的別のおすすめ",
      points: [
        "無難な第一歩：Corey Haines の marketingskills。seo-audit、ai-seo、programmatic-seo は、skills.sh で最もインストールされている SEO スキルの上位 3 つです。",
        "1 つのコマンドでフル監査：Claude SEO。`/seo audit <url>` で最大 17 の専門エージェントがサイトを手分けして調べ、優先順位付きの計画を返します。",
        "AI 検索（GEO）：代理店のような監査と PDF レポートなら GEO-SEO Claude、CI で回せる 0–100 の対応度スコアなら GEO Optimizer。",
        "自分の数字で：無料の Search Console MCP サーバーと CLI である Ian Nuttall の seo。すでに SE Ranking に課金しているなら SE Ranking のスキル。",
        "教科書どおりのテクニカル SEO：Lighthouse の監査と Google のガイドラインをもとにした Addy Osmani の seo スキル。",
        "一度きりではなく毎日 SEO を回す：Marketing Team Skills（私たちのもの）。新しいサイトでも勝てるキーワードの選定、キーワードごとに 1 ページ、インデックス登録の送信、日報までをカバーします。",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Claude Code 向け SEO スキルの比較",
      text: [
        "スター数とライセンスは 2026年11月8日時点の GitHub API の値で、概数です。複数のスキルを含むリポジトリでは、スター数はリポジトリ全体のものです。",
      ],
      headers: ["スキル", "得意なこと", "必要なもの", "スター", "ライセンス"],
      rows: [
        ["[marketingskills](https://github.com/coreyhaines31/marketingskills)（Corey Haines）：seo-audit、ai-seo、programmatic-seo、schema、site-architecture", "監査、AI 検索、ページの量産、スキーマを手順として", "不要。skills CLI であらゆるエージェント", "~59k（リポジトリ）", "MIT"],
        ["[Claude SEO](https://github.com/AgriciDaniel/claude-seo)", "並列エージェントによるサイト全体の監査：テクニカル、E-E-A-T、スキーマ、GEO、ローカル", "Claude Code 1.0.33+。`/seo setup` で専用の Python とヘッドレスブラウザを追加", "~27k", "MIT"],
        ["[GEO-SEO Claude](https://github.com/zubair-trabzada/geo-seo-claude)", "GEO 監査、AI クローラーのチェック、クライアント向け PDF レポート", "Python 3.10+、Git。シェルスクリプトでインストール", "~12k", "MIT"],
        ["[NotFair](https://github.com/nowork-studio/notfair-plugin)", "Search Console、GA4、広告のライブデータにもとづく SEO、GEO、Google 広告", "NotFair のホスト型 MCP へのサインイン", "~4.1k", "MIT"],
        ["[web-quality-skills: seo](https://github.com/addyosmani/web-quality-skills)（Addy Osmani）", "Lighthouse と Google 検索のガイドラインにもとづくテクニカル SEO とページ内 SEO", "不要。ライブチェックには Lighthouse か Chrome DevTools MCP", "~3k（リポジトリ）", "MIT"],
        ["[Claude Blog](https://github.com/AgriciDaniel/claude-blog)", "調査とファクトチェック済みで、納品前に採点されるブログ記事", "Python 3.11+", "~2.7k", "MIT"],
        ["[opc-skills: seo-geo](https://github.com/ReScienceLab/opc-skills)", "ひとり創業者向けの手早い SEO・GEO チェックとスキーマ", "Python 3", "~1.9k（リポジトリ）", "Apache 2.0"],
        ["[GEO Optimizer](https://github.com/Auriti-Labs/geo-optimizer-skill)", "0–100 の AI 対応度スコアと修正：robots.txt、llms.txt、JSON-LD", "Python 3.10+ と uv。引用チェックには自分の LLM キー", "~1.3k", "MIT"],
        ["[seo-ops](https://github.com/tigerless-labs/seo-ops)", "1 つの URL に対する 26 項目の合否式 SEO・GEO チェック", "macOS か Linux 上の Python 3.9+", "~1k", "記載なし"],
        ["[seo](https://github.com/iannuttall/seo)（Ian Nuttall）", "実際の Search Console、アナリティクス、Bing のデータとキーワード調査", "ホスト型 MCP への Google サインイン。キーワードには DataForSEO か Ahrefs のキー", "~600", "Apache 2.0"],
        ["[GEO Doctor](https://github.com/Fangx-AI/geo-doctor)", "中国の AI アシスタント（Doubao、DeepSeek）に推薦されること。中国語と英語", "Node 18+", "~470", "MIT"],
        ["[SE Ranking SEO skills](https://github.com/seranking/seo-skills)", "SE Ranking のデータによるキーワードクラスター、被リンクのギャップ、AI での露出シェア", "SE Ranking のアカウント（14 日間の試用後は有料）", "~200", "MIT"],
        ["[Marketing Team Skills](https://github.com/ummydev/marketing-team-skills)（私たちのもの）", "新しいサイトの毎日の SEO 作業：キーワード、ページ、インデックス送信、レポート。ショート動画も", "不要。skills CLI であらゆるエージェント", "新規（2026年11月）", "MIT"],
      ],
    },
    {
      kind: "text",
      id: "installs",
      title: "最もインストールされている SEO スキル",
      text: [
        "skills CLI 経由のインストール数で、2026年11月8日時点の skills.sh レジストリの値です。Claude SEO のように `/plugin install` で入れるプラグインはほとんどここに表れないため、最低値として見てください。",
      ],
      points: [
        "seo-audit（marketingskills）：約 249,000",
        "ai-seo（marketingskills）：約 160,000",
        "programmatic-seo（marketingskills）：約 158,000",
        "site-architecture（marketingskills）：約 130,000",
        "schema（marketingskills）：約 86,000",
        "seo-geo（opc-skills）：約 56,000",
        "seo（Addy Osmani の web-quality-skills）：約 54,000",
        "seo（Ian Nuttall）：約 24,000",
        "seo（Claude SEO のメインスキル）：約 10,000",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Claude Code を SEO 向けにセットアップする方法",
      steps: [
        {
          title: "メソッド型スキルを 1 つ入れる",
          text: "marketingskills の SEO スキルか Claude SEO のどちらかを選び、両方は入れないでください。同じ監査を扱うので、意見がぶつかります。Lighthouse 式のテクニカルチェックも加えたい場合にだけ、Addy Osmani のスキルを追加しましょう。",
          code: install,
        },
        {
          title: "実際のデータをつなぐ",
          text: "データがなければ、エージェントのキーワード案は推測にすぎません。Search Console（Ian Nuttall の seo か Claude SEO の `/seo google`）をつなぎ、検索ボリュームが必要なら DataForSEO、Ahrefs、SE Ranking などのキーワードソースも接続します。",
        },
        {
          title: "監査してから、順番に直す",
          text: "自分のサイトで監査を実行し、上位の項目を直させてから同じチェックをもう一度走らせます。インデックスや順位の変化が Search Console に表れるのは数日から数週間後で、セッション中には見えません。",
        },
        {
          title: "ルーティンにする",
          text: "SEO は、同じループを毎週回すことで成果が出ます。キーワードを選び、ページを書き、インデックスに送り、数字を読む。このループを CLAUDE.md かスキルに書き、スケジュールで実行しましょう。[AI SEO エージェントの作り方](/blog/ai-seo-agent)もご覧ください。",
        },
      ],
      source: { label: "出典：Corey Haines の marketingskills", href: corey },
    },
    {
      kind: "text",
      id: "ours",
      title: "crewmark.ai で私たちの SEO エージェントが使っているもの",
      text: [
        "Crewmark 自身の SEO は AI 社員が担当しています。[SEO スペシャリストの職種](/ai-employees/seo-specialist)を持つ Claude Code のセッションで、ハートビートでシフト勤務しています。そのリポジトリには Corey Haines のスキルが 25 個と、私たちの Marketing Team Skills がインストールされています。",
      ],
      points: [
        "2026年11月7日、crewmark.ai で marketingskills の監査スキルを実行しました。監査はサイトに公開の料金ページとプライバシーページがないことを指摘し、翌日には[料金ページ](/pricing)を公開しました。",
        "毎日、Google のオートコンプリートと Search Console からキーワードを選び（keyword-research）、キーワードごとに 1 ページを書き（seo-page）、新しい URL を IndexNow、Bing、Google に送信し（index-push）、日報を投稿します（seo-daily-report）。",
        "サイトはまだ新しいため、順位の成果はまだお見せできません。見せる価値のある数字が出てきたら、Search Console の数値をこのページに追加します。",
      ],
    },
    {
      kind: "text",
      title: "インストール前に知っておきたいこと",
      points: [
        "データ型スキルはあなたのデータを外部に送ります。Ian Nuttall の seo、NotFair、Ryze はホスト型 MCP サーバー経由で接続し、SE Ranking と DataForSEO はクレジット単位で課金します。README によると、SE Ranking の大規模な実行では数千クレジットを消費することがあります。",
        "GEO-SEO Claude と Agentic SEO Skill は `curl ... | bash` でインストールします。Claude SEO の README が自身のインストーラーについて勧めているように、スクリプトをダウンロードして中身を読んでから実行しましょう。",
        "スキルにリンクを買わせないでください。Illyism の seo-skills には、作者のサービスから被リンクを購入する linkdr が含まれています。順位評価を渡す有料リンクは Google のスパムポリシーに違反します。",
        "README にあるトラフィック増加などの成果の数字は、作者自身の主張です。Claude SEO の「12 週間で Search Console のクリック 10.8K」は、自分たちのサイトでの数字です。",
        "無料のスキルの横で何かを販売しているものもあります。Claude SEO と GEO-SEO Claude は有料コミュニティを宣伝しており、GEO Optimizer には月額 $19 からの Pro プランがあります。スキル自体はオープンソースです。",
        "Anthropic は SEO スキルを公開していません。ここにあるものはどれも公式ではありません。",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Crewmark なら",
      title: "スキルに、毎日働く SEO スペシャリストを",
      text: [
        "スキルは 1 つのセッションの SEO を良くします。Crewmark は Claude Code や Codex を AI SEO スペシャリストに変えます。Search Console のクリックを毎月 10% 増やすといった数字の目標、勤務時間、書くべきページが並ぶボードを持ち、ハートビートで起きて次の issue に取りかかり、承認が必要なときはメッセージを送ってきます。",
      ],
      steps: [
        {
          title: "SEO スペシャリストの職種を雇う",
          text: "ブリーフ、目標、毎日のルーティンは設定済みです。[AI SEO スペシャリスト](/ai-employees/seo-specialist)と[AI マーケティングエージェント](/ai-employees/marketing-agent)をご覧ください。",
        },
        {
          title: "SEO スキルをリポジトリにインストールする",
          text: "社員はほかのセッションと同じように、`.claude/skills` のスキルを使います。まずは [Marketing Team Skills](/skills) から。",
        },
        {
          title: "プロンプトではなく、ページとレポートをレビューする",
          text: "新しいページを承認し、ボードで日報を読みます。[AI 社員とは](/ai-employees)もご覧ください。",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "スキルで Claude Code を SEO 向けにセットアップする" },
  mid: {
    title: "これらのスキルを毎日回す SEO スペシャリストがほしいですか？",
    text: "Crewmark の AI SEO スペシャリストはハートビートでシフト勤務し、ページを書き、インデックスに送信し、毎日レポートします。",
    button: "今すぐ始める",
  },
  faq: {
    title: "Claude SEO スキルのよくある質問",
    items: [
      {
        q: "SEO に一番おすすめの Claude スキルは？",
        a: "多くのサイトには、skills.sh で最もインストールされている Corey Haines の seo-audit、ai-seo、programmatic-seo です。並列エージェントによるフル監査なら Claude SEO。エージェントが実際の数字で作業できるよう、Search Console MCP などのデータソースも追加しましょう。",
      },
      {
        q: "公式の Claude SEO スキルはありますか？",
        a: "ありません。2026年11月時点で、Anthropic のスキルリポジトリに SEO スキルはありません。Claude SEO は Agrici Daniel による独立したオープンソースプロジェクトで、Anthropic の製品ではありません。",
      },
      {
        q: "Claude SEO と marketingskills の違いは？",
        a: "Claude SEO は監査のために作られた 1 つのプラグインで、`/seo` コマンドの裏に 26 のサブスキルと 19 のエージェント、専用の Python ツールとヘッドレスブラウザを備えています。marketingskills はマーケティング全般にわたる独立したメソッド型スキルのライブラリで、必要な SEO スキルだけをインストールでき、セットアップも不要です。",
      },
      {
        q: "Claude Code でキーワード調査はできますか？",
        a: "キーワードを選んでグループ分けすることはできますが、検索ボリュームは自分では見られません。データソースをつなぎましょう。すでに表示されているクエリには Search Console、ボリュームには DataForSEO、Ahrefs、SE Ranking です。Google のオートコンプリートでわかるのは何が検索されているかで、どれだけ検索されているかではありません。",
      },
      {
        q: "SEO スキルと GEO スキルの違いは？",
        a: "SEO スキルは Google や Bing での上位表示を狙います。GEO（生成エンジン最適化）スキルは、ChatGPT、Perplexity、Gemini、Google の AI による概要で引用されることを狙い、AI クローラーのアクセス、llms.txt、引用しやすい回答などをチェックします。今ではほとんどのパックが両方を扱います。",
      },
      {
        q: "これらの SEO スキルは Codex や Cursor でも使えますか？",
        a: "ほとんどは使えます。skills CLI でインストールしたスキルは Codex、Cursor をはじめ数十のエージェントで動き、Ian Nuttall の seo のような MCP ベースのものは、リモート MCP サーバーに対応したどのエージェントにもつながります。",
      },
    ],
  },
  cta: {
    title: "信頼できるスキルを持った SEO スペシャリストを、あなたのボードに。",
    text: "Crewmark は、Claude Code、Codex、DeepSeek Harness、OpenCode のセッションを、職種・目標・勤務時間・ハートビートを持つ AI 社員に変えます。",
    button: "今すぐ始める",
  },
  checked:
    "2026年11月8日に、各スキルの GitHub リポジトリ、GitHub API、skills.sh レジストリで確認しました。",
  disclaimer:
    "Crewmark は独立した製品であり、Anthropic や掲載しているスキルの作者とは提携しておらず、その承認も受けていません。製品名は各所有者の商標です。",
};
