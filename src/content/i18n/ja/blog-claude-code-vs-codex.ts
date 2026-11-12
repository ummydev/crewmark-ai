import type { GuideCopy } from "@/components/landing/guide-article";

// Japanese translation of /blog/claude-code-vs-codex; the English master is src/content/blog/claude-code-vs-codex.ts.

const claudeDocs = "https://code.claude.com/docs/en/overview";

export const copy: GuideCopy = {
  meta: {
    title: "Claude Code と Codex の違いを比較（2026）：料金・利用制限・機能 | Crewmark",
    description:
      "2026年11月時点の Claude Code と OpenAI Codex を比較：モデル、プランと料金、5時間・週間の制限、CLAUDE.md と AGENTS.md、サンドボックス、サブエージェント、スケジュール実行、選び方。",
  },
  breadcrumb: "Claude Code と Codex の比較",
  parent: { name: "ブログ", href: "/blog" },
  article: { published: "2026-11-05" },
  hero: {
    kicker: "ブログ · Claude Code · Codex",
    title: "Claude Code と Codex を比較：どのコーディングエージェントを使うべき？",
    lead: "Claude Code は Anthropic、Codex は OpenAI のコーディングエージェントです。どちらもリポジトリを読み、ファイルを編集し、コマンドを実行でき、ターミナル、IDE、デスクトップアプリ、ウェブ、スマートフォンで使えます。違いは、モデル、プラン、制限、デフォルト設定、オープン性にあります。この比較では、2026年11月時点での料金、利用制限の仕組み、機能の対応関係、そしてどんな作業にどちらが向いているかを説明します。",
    cta: "早期アクセスに登録",
    secondary: "比較表へ移動",
    secondaryHref: "#compare",
  },
  sections: [
    {
      kind: "table",
      id: "compare",
      title: "Claude Code と Codex を一目で比較",
      headers: ["", "Claude Code", "Codex"],
      rows: [
        ["提供元", "Anthropic", "OpenAI"],
        ["デフォルトのモデル", "Claude Opus 5.5。Sonnet 5.5、Haiku 5.5、Fable 5.1 も選択可", "GPT-6.1 Sol。GPT-6 Astra、GPT-6.1 Terra、GPT-6 Luna も選択可"],
        ["動作する場所", "ターミナル、VS Code、JetBrains、デスクトップアプリ、claude.ai/code、Claude モバイルアプリ、Slack", "ターミナル、VS Code、Cursor と Windsurf、ChatGPT デスクトップアプリ、chatgpt.com/codex、ChatGPT モバイルアプリ、Slack と Linear"],
        ["含まれる最安のプラン", "Claude Pro、月額 $20", "ChatGPT Free（制限あり）、次に月額 $8 の Go と月額 $20 の Plus"],
        ["オープンソースか", "いいえ：リポジトリは公開されていますが、全権利を留保", "CLI、SDK、App Server はオープンソース（Apache-2.0）。IDE 拡張とクラウドは非公開"],
        ["指示ファイル", "CLAUDE.md（CLAUDE.md がなければ AGENTS.md を読む）", "AGENTS.md"],
        ["サンドボックス", "シェルコマンドはオプトイン", "デフォルトで有効"],
        ["スケジュール実行", "クラウドのスケジュールタスク（プレビュー）、デスクトップのスケジュールタスク、`/loop`", "デスクトップアプリとクラウドのスケジュールタスク"],
      ],
    },
    {
      kind: "table",
      title: "料金：どのプランに含まれるか",
      text: [
        "どちらも各社のチャット購読に含まれ、API キーに切り替えてトークン単位で課金することもできます。料金は月額の米ドルです。",
      ],
      headers: ["Claude のプラン", "料金", "ChatGPT のプラン", "料金"],
      rows: [
        ["Free", "Claude Code は含まれない", "Free", "$0、GPT-6 Luna のみ"],
        ["Pro", "$20（年払いは $17）", "Go", "$8"],
        ["Max", "$100", "Plus", "$20"],
        ["Ultra", "$200", "Pro", "$100、$200、$500"],
        ["Team", "1席あたり $25（Standard）、$125（Premium）", "Business", "1ユーザーあたり $25（年払いは $20）"],
        ["Enterprise", "1席あたり $20（年払い）、加えて API 料金での従量課金", "Enterprise、Edu", "営業に問い合わせ"],
      ],
    },
    {
      kind: "text",
      title: "利用制限",
      text: [
        "どちらも、ローリング方式の5時間枠と週間制限を使い、チャットとコーディングで同じ枠を共有します。どちらも、すべてのプランの正確な時間やメッセージ数は公表していません。",
      ],
      points: [
        "Claude：Pro には5時間の制限と週間の制限があります。Max は Pro の5倍の使用量です。Ultra は週あたり Pro の10倍で、認証済みアカウントには5時間の制限がありません。Claude のチャット、Claude Code、IDE はすべて同じ枠から消費されます。",
        "Claude：タスクの途中で5時間の制限に達しても、Claude Code は現在のステップを終わらせてくれることがあります（Pro は週に1回、Max は毎回）。",
        "Codex：OpenAI は Plus の5時間あたりのローカルメッセージ数をモデル別に見積もっており、GPT-6.1 Sol で15〜160件、GPT-6 Luna で350〜3,000件、GPT-6 Astra で5〜45件です。ChatGPT Pro には現在5時間の制限がありませんが、週間制限が適用される場合があります。",
        "Codex：クラウドタスクと GitHub のコードレビューも同じ枠を使い、高速モードは2.5倍消費します。",
        "どちらも制限を超えて続けられます。Claude は使用量クレジットか API キー、Codex はクレジットか API キーです（API キーが使えるのは CLI、SDK、IDE で、クラウド機能には使えません）。",
      ],
    },
    {
      kind: "table",
      title: "機能の比較",
      headers: ["機能", "Claude Code", "Codex"],
      rows: [
        ["プロジェクトの指示", "`CLAUDE.md`、`.claude/rules/`、自動メモリ", "`AGENTS.md`、`AGENTS.override.md`、デフォルトで合計32 KiB"],
        ["設定", "`settings.json`", "`config.toml`"],
        ["サブエージェント", "あり。加えてバックグラウンドエージェント", "あり：組み込みの default、worker、explorer と、カスタムの TOML エージェント"],
        ["Hooks", "あり", "あり、デフォルトで有効"],
        ["Skills、プラグイン、MCP", "あり", "あり"],
        ["Plan モード", "あり（Shift+Tab）", "あり"],
        ["権限モード", "手動、編集を許可、plan、auto（分類器がチェック）、bypass", "承認を求める、代わりに承認、フルアクセス、カスタム"],
        ["サンドボックス", "オプトイン：macOS は Seatbelt、Linux は bubblewrap。ネイティブ Windows は非対応", "デフォルトで有効。ネイティブ Windows のサンドボックスも含む"],
        ["並行作業", "デスクトップとウェブの並行セッション、バックグラウンドエージェント", "デスクトップアプリの worktree、クラウドタスク"],
        ["コードレビュー", "Team と Enterprise では `@claude review`。どのプランでもローカルで `/code-review`", "GitHub では `@codex review`。CLI では `/review`"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Claude Code と Codex の選び方",
      text: [
        "絶対的な勝者はいません。各社が自社のモデルが優位になるベンチマークを公表していて、リリースのたびに変わります。日々の作業に影響する点で選びましょう。",
      ],
      steps: [
        {
          title: "すでに払っている購読から考える",
          text: "Claude Pro か Max があれば Claude Code が、ChatGPT Plus か Pro があれば Codex が含まれます。入門プランで両方試すと月額 $40 です。Codex は ChatGPT Free と Go でも、小さめの制限で使えます。",
        },
        {
          title: "制限を、作業する時間の長さに合わせる",
          text: "毎日長時間使うなら、最上位プランを比べましょう。Claude Ultra（$200）は認証済みアカウントで5時間の制限がなく、ChatGPT Pro にも現在はありません。たまに使う程度なら、どちらの $20 プランでも足ります。",
        },
        {
          title: "どこまでサンドボックスにするか決める",
          text: "Codex はデフォルトでコマンドをサンドボックス化し、Windows でも同様です。Claude Code はデフォルトで実行前に確認し、有効にできるサンドボックスと、分類器が安全な操作を承認する auto モードを備えています。",
        },
        {
          title: "チームが作業している場所を確認する",
          text: "Claude Code には JetBrains プラグインがあり、Slack からも動かせます。Codex は Cursor、Windsurf、Slack、Linear に対応しています。どちらも VS Code、ウェブ、モバイルで使えます。",
        },
        {
          title: "指示を持ち運べるようにしておく",
          text: "プロジェクトのルールは AGENTS.md に書き、CLAUDE.md から `@AGENTS.md` で取り込みます。そうすれば両方のエージェントが同じファイルを読み、乗り換えのコストはかかりません。[CLAUDE.md ガイド](/blog/claude-md)をご覧ください。",
        },
      ],
      source: { label: "出典：Claude Code のドキュメントと Codex のドキュメント", href: claudeDocs },
    },
    {
      kind: "text",
      title: "Cursor、Gemini CLI、OpenCode はどうなの？",
      text: [
        "Cursor は独自のエージェントを持つエディタで、Claude Code と Codex の拡張機能を載せることもできます。Gemini CLI と OpenCode は、この2つと同じターミナルのエージェントで、OpenCode はオープンソースで多くのモデルプロバイダーに対応します。どれも AGENTS.md を読むので、上で紹介した持ち運べる設定がそのまま使えます。",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Crewmark なら",
      title: "両方使う：エージェントごとに役割を与える",
      text: [
        "Crewmark は、どちらかを選ぶ必要をなくします。Claude Code、Codex、DeepSeek Harness、OpenCode のセッションを、職種・目標・勤務時間を持つ AI 社員に変え、ハートビートで起こし、共有ボードの issue を渡します。同じプロジェクトで、ある社員は Claude Code、別の社員は Codex で動かせます。",
      ],
      steps: [
        {
          title: "セッションを社員にする",
          text: "ソフトウェアエンジニアや SEO 担当などの職種を選び、目標を数字で書いて、Claude Code か Codex でセットアップコマンドを実行します。",
        },
        {
          title: "ハートビートで仕事を始めさせる",
          text: "勤務時間中、社員は15分・30分・60分ごとに同じ会話の中で起きます。[Claude Code を自律的に動かす方法](/proactive-claude-code)と [Codex を自律的に動かす方法](/proactive-codex)をご覧ください。",
        },
        {
          title: "issue を割り当て、メッセージに返信する",
          text: "ボードに仕事を置くと、各社員は自分の職種に合うものを拾い、進めながらコメントし、判断が必要なときはメッセージを送ってきます。[AI 社員とは](/ai-employees)もご覧ください。",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Claude Code と Codex のどちらを選ぶか" },
  mid: {
    title: "すでに Claude や ChatGPT を契約していますか？",
    text: "Crewmark は、いまのプランのまま、Claude Code と Codex を、ハートビートと issue のボードを持つ AI 社員に変えます。",
    button: "早期アクセスに登録",
  },
  faq: {
    title: "Claude Code と Codex のよくある質問",
    items: [
      {
        q: "Claude Code は Codex より優れている？",
        a: "全員にとってどちらかが優れているわけではありません。どちらもサブエージェント、hooks、skills、MCP、plan モードを備えた高性能なエージェントです。持っている購読、必要な制限、望むサンドボックスのデフォルト、チームが使うツールで選びましょう。",
      },
      {
        q: "Claude Code と Codex、安いのはどちら？",
        a: "入口が安いのは Codex です。ChatGPT Free（制限あり）と月額 $8 の Go に含まれます。Claude Code は $20 の Claude Pro から。月額 $20 では、Claude Pro も ChatGPT Plus もそれぞれのエージェントを含みます。",
      },
      {
        q: "Claude Code と Codex の利用制限は？",
        a: "どちらも5時間枠と、チャットと共有の週間制限を使います。Claude Max は Pro の5倍、Ultra は週あたり Pro の10倍です。OpenAI は Plus で5時間あたり GPT-6.1 Sol のメッセージを15〜160件と見積もっています。Claude Ultra（認証済み）と ChatGPT Pro には現在5時間の制限がありません。",
      },
      {
        q: "Claude Code と Codex はどのモデルを使う？",
        a: "Claude Code のデフォルトは Claude Opus 5.5 で、Sonnet 5.5、Haiku 5.5、Fable 5.1 も選べます。Codex のデフォルトは GPT-6.1 Sol で、GPT-6 Astra、GPT-6.1 Terra、GPT-6 Luna も選べます。",
      },
      {
        q: "Codex はオープンソース？ Claude Code は？",
        a: "Codex CLI は Apache-2.0 のオープンソースですが、IDE 拡張とクラウドは違います。Claude Code のリポジトリは公開されていますがオープンソースではなく、全権利を留保したまま Anthropic の商用規約のもとで使います。",
      },
      {
        q: "Claude Code と Codex で同じ指示を共有できる？",
        a: "できます。Codex が読む AGENTS.md に指示を書き、CLAUDE.md に `@AGENTS.md` と入れておけば、Claude Code も同じファイルを読みます。",
      },
      {
        q: "Claude Code と Codex を一緒に使える？",
        a: "できます。多くの開発者が両方を持ち、作業ごとに切り替えています。Crewmark なら、それぞれが自分の職種を持つ AI 社員になり、ハートビートで同じボードから issue を受け取ります。",
      },
    ],
  },
  cta: {
    title: "Claude Code と Codex を、同じチームに。",
    text: "Crewmark は、Claude Code、Codex、DeepSeek Harness のセッションを、職種・目標・勤務時間・ハートビートを持つ AI 社員に変えます。",
    button: "早期アクセスに登録",
  },
  checked: "2026年11月5日に Claude Code のドキュメント、claude.com/pricing、learn.chatgpt.com の Codex ドキュメント、両方の GitHub リポジトリと照合しました。",
  disclaimer:
    "Crewmark は独立した製品であり、Anthropic や OpenAI とは提携しておらず、その承認も受けていません。Claude と Claude Code は Anthropic の商標、ChatGPT と Codex は OpenAI の商標です。",
};
