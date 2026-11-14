import type { GuideCopy } from "@/components/landing/guide-article";

// Japanese translation of /blog/claude-code-vs-cursor; the English master is src/content/blog/claude-code-vs-cursor.ts.

const cursorPricing = "https://cursor.com/pricing";

export const copy: GuideCopy = {
  meta: {
    title: "Claude Code vs Cursor 比較（2026）：料金・選び方",
    description:
      "2026年11月時点の Claude Code と Cursor を比較：SpaceX 傘下になった Cursor の Grok 中心の新プラン、それぞれで Claude モデルを使う費用、エージェント、CLI、ルール、MCP、hooks、選び方。",
  },
  breadcrumb: "Claude Code vs Cursor",
  parent: { name: "ブログ", href: "/blog" },
  article: { published: "2026-11-06" },
  hero: {
    kicker: "ブログ · Claude Code",
    title: "2026年の Claude Code vs Cursor：何が変わり、どちらを選ぶべきか",
    lead: "Claude Code は Anthropic のコーディングエージェントで、Claude の購読プランのまま、ターミナル、IDE、デスクトップアプリ、ブラウザで動きます。Cursor は独自のエージェント、CLI、クラウドエージェントを備えた AI コードエディタです。今年、この比較の前提が変わりました。Cursor は2026年8月に SpaceX の一員となり、プランは Grok モデルを中心に組み直され、Cursor で Claude モデルを使うと API の定価で別途課金されます。このガイドでは、2026年11月6日時点の料金、モデル、制限、機能を比較し、どちらを選ぶか、あるいは両方をどう使うかを説明します。",
    cta: "今すぐ始める",
    secondary: "比較表へ移動",
    secondaryHref: "#compare",
  },
  sections: [
    {
      kind: "table",
      id: "compare",
      title: "Claude Code と Cursor の早見表",
      headers: ["", "Claude Code", "Cursor"],
      rows: [
        ["開発元", "Anthropic", "Cursor（2026年8月から SpaceX の一員）"],
        ["どんなツールか", "ターミナル、IDE、デスクトップ、ウェブ、モバイルで使えるコーディングエージェント", "AI コードエディタ。CLI（`agent`）、クラウドエージェント、コードレビューも"],
        ["主なモデル", "Claude Opus 5.5、Sonnet 5.5、Haiku 5.5、Fable 5.1", "Grok 4.5〜4.7 と Composer 2.5。Claude、GPT、Gemini などは API の定価で利用"],
        ["最安の有料プラン", "Claude Pro、月額 $20", "Plus、月額 $8、Grok モデルのみ"],
        ["Claude モデルの費用", "Claude プランの制限内に含まれる", "API の定価で使った分だけ別途課金（Premium 以上）"],
        ["プロジェクトの指示", "`CLAUDE.md`、`.claude/rules/`。CLAUDE.md がなければ AGENTS.md を読む", "`.cursor/rules/*.mdc`、`AGENTS.md`、ユーザールールとチームルール"],
        ["対応 OS", "macOS、Windows、Linux", "macOS、Windows、Linux"],
      ],
    },
    {
      kind: "table",
      title: "料金：Claude のプランと Cursor のプラン",
      text: [
        "料金は claude.com/pricing と cursor.com/pricing に掲載の月額（米ドル）です。Cursor のプランには現在、タイムライン広告の削減などの X の機能も含まれ、Grok と共通の、毎週リセットされる AI 利用枠を使います。",
      ],
      headers: ["Claude のプラン", "料金", "Cursor のプラン", "料金"],
      rows: [
        ["Free", "Claude Code は含まれない", "Free", "$0、エージェントのリクエスト数に制限あり"],
        ["Pro", "$20（年払いは $17）", "Plus", "$8、Grok モデルのみ"],
        ["Max", "$100", "Premium", "$30：Plus の4倍の利用枠、クラウドエージェント、オートメーション、コードレビュー、他社モデルを API 料金で"],
        ["Ultra", "$200", "Super", "$100：Plus の15倍の利用枠"],
        ["Team", "1席あたり $25（Standard）、$125（Premium）", "Ultra", "$200：Plus の50倍の利用枠"],
        ["Enterprise", "1席あたり $20（年払い）、加えて API 料金での従量課金", "Teams、Enterprise", "1ユーザーあたり $30 から。Enterprise は個別見積もり"],
      ],
    },
    {
      kind: "table",
      title: "機能の比較",
      headers: ["機能", "Claude Code", "Cursor"],
      rows: [
        ["ターミナルのエージェント", "`claude`。ヘッドレスは `-p`", "`agent` CLI。プリントモードは `-p`"],
        ["Plan モード", "あり（Shift+Tab、`/plan`）", "あり（Shift+Tab、`/plan`）"],
        ["クラウドエージェント", "ウェブ版 Claude Code、クラウドセッション", "VM 上のクラウドエージェント（Premium 以上）。ウェブ、iOS、GitHub、Slack、Linear、API から起動"],
        ["並行作業", "`--worktree`、サブエージェント、エージェントビュー", "`/worktree`、複数モデルでの `/best-of-n`"],
        ["オートメーション", "`/loop`、デスクトップとクラウドのスケジュールタスク", "cron、Git、Slack、Linear、webhook、Sentry、PagerDuty をきっかけに動くオートメーション（Premium 以上）"],
        ["MCP", "あり：`claude mcp add`、`.mcp.json`", "あり：`.cursor/mcp.json`"],
        ["Hooks", "あり。`settings.json` で30以上のイベント", "あり。`hooks.json` で約20のイベント。Claude Code の hooks も読み込める"],
        ["コードレビュー", "ローカルで `/code-review`。Team と Enterprise では `@claude review`", "Bugbot（GitHub、GitLab、Bitbucket、Azure DevOps に対応）"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Claude Code と Cursor の選び方",
      text: [
        "すべてにおいて優れている方はありません。公開されているベンチマークも、発表した側に有利になりがちです。日々の仕事を左右するポイントで決めましょう。",
      ],
      steps: [
        {
          title: "どのモデルにお金を払うか決める",
          text: "Claude モデルを毎日使いたいなら、Claude のプランなら制限内で使えます。Cursor ではプラン料金とは別に API の定価で課金されます。Grok と Composer で十分なら、Cursor の $8 と $30 のプランのほうが Claude より安く済みます。",
        },
        {
          title: "どこで作業したいか決める",
          text: "Cursor はまずエディタです。インライン編集、Tab 補完、エージェントがひとつのウィンドウにそろっています。Claude Code はまずエージェントです。どのターミナルからでも動き、VS Code、JetBrains、デスクトップアプリ、ウェブ、Slack にもつながります。",
        },
        {
          title: "あなたがいなくても動かしたい範囲を確認する",
          text: "どちらもクラウドやスケジュールで動かせます。Cursor のクラウドエージェントとオートメーションには Premium 以上が必要です。Claude Code のスケジュールタスクとクラウドセッションは Claude のプランに含まれます。[Claude Code を自律的に動かす方法](/proactive-claude-code)をご覧ください。",
        },
        {
          title: "設定を持ち運べるようにしておく",
          text: "共通のルールは AGENTS.md に書き（両方が読みます）、CLAUDE.md からインポートしましょう。Cursor は Claude Code の hooks も読み込めます。そうすれば乗り換えも併用も手間がかかりません。[CLAUDE.md ガイド](/blog/claude-md)をご覧ください。",
        },
        {
          title: "あるいは両方使う",
          text: "Anthropic の VS Code ドキュメントには Cursor 用のインストールリンクがあり、Claude Code 拡張を Cursor エディタの中で、Claude のプランのまま動かせます。",
        },
      ],
      source: { label: "出典：Claude Code のドキュメントと Cursor の料金ページ", href: cursorPricing },
    },
    {
      kind: "text",
      title: "Cursor で Claude Code 拡張を使っている場合",
      text: [
        "2026年10月29日、Cursor は、Anthropic がビルドしたものではない Anthropic.claude-code 拡張の悪意あるバージョン 2.1.312 と 2.1.313 が、Windows と macOS 向けに Cursor の拡張マーケットプレイスで約11時間公開されていたと報告しました。Cursor はそれらを削除し、マーケットプレイスを再構築したうえで、確認方法を公開しています。`authorized_keys` に `svc-telemetry` というラベルの SSH キーがあれば、そのマシンは影響を受けています。その日に拡張をインストールまたは更新した場合は、Cursor のセキュリティ告知に従ってください。",
      ],
    },
    {
      kind: "text",
      title: "Codex は？",
      text: [
        "OpenAI の Codex は3つ目のよくある選択肢で、無料プランから ChatGPT の各プランに含まれ、Cursor の中でも動きます。比較は [Claude Code と Codex の比較](/blog/claude-code-vs-codex)を、複数のエージェントを同時に動かすなら [Claude Code のオーケストレーションツール](/blog/claude-code-orchestration-tools)をご覧ください。",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Crewmark なら",
      title: "どちらを選んでも、仕事を与えよう",
      text: [
        "エディタもエージェントも、結局はあなたの次のプロンプトを待っています。Crewmark は、Claude Code、Codex、DeepSeek Harness、OpenCode のセッションを、職種・目標・勤務時間を持つ AI 社員に変え、ハートビートで起こしてボードから次の issue を取らせます。いま払っている購読プランのままです。",
      ],
      steps: [
        {
          title: "職種と目標を選ぶ",
          text: "ソフトウェアエンジニア、レビュアー、SEO ライター。どの職種にも数字で書いた目標があります。[AI 社員とは](/ai-employees)をお読みください。",
        },
        {
          title: "ハートビートで仕事を始めさせる",
          text: "勤務時間中、社員は15分・30分・60分ごとに同じ会話の中で起き、次の issue を取ります。",
        },
        {
          title: "ボードで確認する",
          text: "作業しながらコメントを残し、判断が必要なときはメッセージを送ってきます。",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Claude Code と Cursor のどちらを選ぶか" },
  mid: {
    title: "エージェントは決まりましたか？次は、あなたを待たずに働かせましょう。",
    text: "Crewmark は、職種・目標・issue のボードを与え、ハートビートで Claude Code や Codex を起こします。",
    button: "今すぐ始める",
  },
  faq: {
    title: "Claude Code と Cursor のよくある質問",
    items: [
      {
        q: "Claude Code は Cursor より優れている？",
        a: "働き方によります。Claude Code は、購読プランに Claude モデルが含まれていてほしい人や、どのターミナルや IDE でも動くエージェントがほしい人に向いています。Cursor は、インライン編集ができる AI エディタがほしく、Grok モデルで満足できる人、またはほかのモデルに API 料金を払ってもよい人に向いています。",
      },
      {
        q: "Cursor で Claude モデルは使える？",
        a: "Premium（$30）以上なら使えますが、Claude などの他社モデルは API の定価で使った分だけ別途課金されます。$8 の Plus プランは Grok モデルのみです。",
      },
      {
        q: "Claude Code と Cursor、安いのはどちら？",
        a: "入門プランは Cursor のほうが安い（月額 $8 と $30）ですが、Cursor で Claude を使うと追加費用がかかります。主に Claude モデルを使うなら、Claude Pro（$20）や Max（$100）のほうが、API 料金を払うより安く済むことがほとんどです。",
      },
      {
        q: "Cursor は今 SpaceX のもの？",
        a: "はい。Cursor は2026年8月14日、SpaceX による買収が完了したと発表しました。4月に始まった手続きの完了です。プランには現在、X の機能と Grok モデルが付いています。",
      },
      {
        q: "Cursor の中で Claude Code を動かせる？",
        a: "できます。Claude Code 拡張は Anthropic のインストールリンクから Cursor に入れられ、`claude` CLI は Cursor のターミナルで動きます。公式の拡張を使い、Cursor の10月29日のセキュリティ告知を踏まえてバージョンを確認してください。",
      },
      {
        q: "Claude Code と Cursor で設定を共有できる？",
        a: "一部はできます。どちらも AGENTS.md を読み、どちらも MCP に対応していて（設定ファイルはそれぞれ別）、Cursor は Claude Code の hooks を読み込めます。それ以外のルールや設定ファイルは別々です。",
      },
      {
        q: "利用制限はどうなっている？",
        a: "Claude のプランは、5時間枠と、Claude のチャットと共有する週間制限を使います。Cursor のプランは、Grok と共通の毎週リセットされる利用枠を使い、その大きさは Plus プランの何倍かで決まります。超えた分は追加購入か API 課金になります。",
      },
    ],
  },
  cta: {
    title: "コーディングエージェントを、働き続けるチームメイトに。",
    text: "Crewmark は、Claude Code、Codex、DeepSeek Harness のセッションを、職種・目標・勤務時間・ハートビートを持つ AI 社員に変えます。",
    button: "今すぐ始める",
  },
  checked: "2026年11月6日に Claude Code のドキュメント、claude.com/pricing、cursor.com（料金、ドキュメント、変更履歴、ブログ）と照合しました。",
  disclaimer:
    "Crewmark は独立した製品であり、Anthropic、Cursor、SpaceX とは提携しておらず、その承認も受けていません。Claude と Claude Code は Anthropic の商標、Cursor はその所有者の商標です。",
};
