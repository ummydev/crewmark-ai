import type { GuideCopy } from "@/components/landing/guide-article";

// Japanese translation of /blog/claude-code-orchestration-tools; the English master is src/content/blog/claude-code-orchestration-tools.ts.

const docs = "https://code.claude.com/docs/en/agents";

export const copy: GuideCopy = {
  meta: {
    title: "Claude Code オーケストレーションツール比較 2026",
    description:
      "複数の Claude Code エージェントを同時に動かす方法。組み込み機能（Subagents、Agent view、Agent teams、ワークフロー）と、Claude Squad や Orca から Paperclip、Multica、Crewmark まで 10 のオーケストレーションツールを比較します。",
  },
  breadcrumb: "Claude Code オーケストレーションツール",
  parent: { name: "ブログ", href: "/blog" },
  article: { published: "2026-11-06" },
  hero: {
    kicker: "ブログ · Claude Code",
    title: "2026年のおすすめ Claude Code オーケストレーションツール",
    lead: "Claude Code のオーケストレーションとは、複数の Claude Code エージェントを同時に動かし、連携させることです。それぞれにコードのコピー、タスク、結果を報告する手段を与えます。いまでは Claude Code 自体がその多くをこなし、さらにオープンソースや商用のツールが次々と登場して、インターフェース、ボード、スケジュールを上乗せしています。このガイドでは、まず組み込みの選択肢を紹介し、次に 10 のツールをインターフェース、分離の仕組み、対応エージェント、そして最も重要な問い、つまり「エージェントが自分で仕事を始めるのか、あなたを待つのか」で比較します。",
    cta: "今すぐ始める",
    secondary: "比較表へ移動",
    secondaryHref: "#compare",
  },
  sections: [
    {
      kind: "table",
      id: "built-in",
      title: "Claude Code の組み込み機能：エージェントを並列に動かす 5 つの方法",
      text: [
        "何かをインストールする前に、Claude Code だけで足りるか確認しましょう。どの組み込み機能でも作業者は Claude のセッションで、worktree によって各セッションが専用のチェックアウトを持ちます（[worktree ガイド](/blog/claude-code-worktree)を参照）。",
      ],
      headers: ["機能", "できること", "状態"],
      rows: [
        ["Subagents（サブエージェント）", "1 つのセッション内の作業者。別のコンテキストで脇道のタスクをこなし、要約を返す", "提供中"],
        ["Agent view（`claude agents`）", "バックグラウンドのセッションを 1 画面で振り分け・監視し、必要なときに介入できる", "リサーチプレビュー"],
        ["Agent teams（エージェントチーム）", "複数のセッションがタスクリストとメッセージを共有し、リーダーが取りまとめる", "実験的、既定でオフ"],
        ["Dynamic workflows（動的ワークフロー）", "多数のサブエージェントを動かし、結果を照合するスクリプト", "提供中"],
        ["Projects（プロジェクト）", "クラウドまたは手元のコンピューターで並列スレッドを始められる、継続的な 1 つの会話", "Pro、Max、Ultra でパブリックベータ"],
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Claude Code オーケストレーションツールの比較",
      text: [
        "スター数とライセンスは 2026年11月6日時点の GitHub のものです。「自分で仕事を始める」とは、ボード、スケジュール、ハートビートを通じて、あなたがプロンプトを打たなくてもツールがエージェントに次のタスクを渡せることを指します。",
      ],
      headers: ["ツール", "インターフェース", "分離", "対応エージェント", "自分で仕事を始める", "ライセンス、スター数"],
      rows: [
        ["Claude Squad", "ターミナル UI（`cs`）", "エージェントごとに tmux セッションと git worktree", "Claude Code、Codex、Gemini、Aider など", "いいえ", "AGPL-3.0、~9k"],
        ["Orca", "デスクトップ、CLI、モバイル、リモートランタイム", "エージェントごとに worktree", "Claude Code、Codex など（自分のサブスクリプションで）", "いいえ。オーケストレーターエージェントが作業を分割可能", "MIT、~117k"],
        ["Ruflo（旧 Claude Flow）", "Claude Code プラグイン、CLI、MCP サーバー", "記載なし", "Claude Code、Codex、MCP クライアント", "いいえ。プロンプトやミッションで動くスウォーム", "MIT、~81k"],
        ["oh-my-claudecode", "Claude Code プラグイン（`/autopilot`）", "記載なし", "Claude Code", "いいえ。autopilot はあなたが開始してから動く", "MIT、~41k"],
        ["Vibe Kanban", "カンバンボード付きの Web UI", "タスクごとにワークスペースとブランチ", "Claude Code、Codex、Gemini CLI など 10 以上", "いいえ。issue ごとにあなたがワークスペースを開始。提供終了に向かっており、コミュニティが保守", "Apache-2.0、~29k"],
        ["opcode（旧 Claudia）", "デスクトップ GUI", "バックグラウンドエージェントは別プロセス", "Claude Code", "いいえ", "AGPL-3.0、~22k"],
        ["CloudCLI（Claude Code UI）", "Web とモバイルの UI", "Docker サンドボックス（任意）", "Claude Code、Codex、Cursor CLI、OpenCode", "いいえ", "AGPL-3.0、~15k"],
        ["Conductor", "Mac アプリ", "タスクごとにワークスペースとブランチ", "Claude Code、Codex、Cursor、OpenCode", "いいえ。Meta に合流し、クラウドは 2026年11月20日に終了", "クローズドソース"],
        ["Paperclip", "Web UI：組織図、目標、予算を持つ「AI 企業」", "worktree とサンドボックス（任意）", "Claude Code、Codex、Gemini CLI、Cursor、OpenCode など", "はい：スケジュールされたハートビート、割り当て、@メンション", "MIT、~111k"],
        ["Multica", "Web、デスクトップ、CLI、API", "手元のマシンで動くデーモン", "Claude Code、Codex、Cursor、Copilot、OpenCode など", "はい：エージェントが割り当てられた issue を拾い、Autopilots は cron で動く", "Multica License（ソース公開）、~55k"],
        ["Crewmark", "Web ボード、CLI、手元のマシンで動くデーモン", "社員ごとに専用のセッションとチェックアウト", "Claude Code、Codex、DeepSeek Harness、OpenCode", "はい：勤務時間中のハートビートで次の issue を取る", "登録受付中"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Claude Code オーケストレーションツールの選び方",
      steps: [
        {
          title: "まず組み込み機能を試す",
          text: "自分で振り分ける並列タスクが数個なら、`claude --worktree` と Agent view だけで足りるかもしれません。1 つの大きな変更なら、`/batch` やワークフローでサブエージェントに分割できます。",
        },
        {
          title: "実際に見続けるインターフェースを選ぶ",
          text: "ターミナル派は Claude Squad を好む傾向があります。それ以外の人はデスクトップアプリ（Orca、opcode）か Web ボード（Vibe Kanban、Paperclip、Multica、Crewmark）を選ぶことが多く、Web ボードはスマートフォンからも使えます。",
        },
        {
          title: "次のタスクを誰が始めるか決める",
          text: "ほとんどのツールは、あなたが操作するエージェントを速くするものです。プロンプトとプロンプトの間もエージェントに仕事を続けてほしいなら、ボードとスケジュールまたはハートビートの組み合わせを探しましょう。Paperclip、Multica、Crewmark がこれに当たります。",
        },
        {
          title: "分離の仕組みと対応エージェントを確認する",
          text: "並列エージェントには別々のチェックアウトが必要で、通常は git worktree を使います。チームで Claude Code と Codex や OpenCode を併用しているなら、既存のサブスクリプションのまますべてを動かせるか確認してください。",
        },
        {
          title: "プロジェクトの健全性を確認する",
          text: "ライセンス、最近のコミット、ステータスを見ましょう。Vibe Kanban は開発元が提供終了を進めており、Conductor は Meta に移り、Crystal は新しいアプリに置き換えられました。",
        },
      ],
      source: { label: "出典：Claude Code ドキュメント、Run agents in parallel", href: docs },
    },
    {
      kind: "text",
      title: "各ツールのメモ",
      points: [
        "Claude Squad（[smtg-ai/claude-squad](https://github.com/smtg-ai/claude-squad)）：エージェントごとに専用の tmux セッションと git worktree を用意するターミナルアプリ。`--autoyes` で確認を自動承認できます（実験的）。",
        "Orca（[stablyai/orca](https://github.com/stablyai/orca)）：自分のサブスクリプションで、デスクトップ、モバイル、リモートマシン上にコーディングエージェントの一団を走らせます。",
        "Ruflo（[ruvnet/ruflo](https://github.com/ruvnet/ruflo)）：Claude Code と Codex 向けのエージェントメタハーネスで、スウォームとセッションをまたぐ記憶を備えます。`ruvnet/claude-flow` は現在ここにリダイレクトされます。",
        "oh-my-claudecode（[Yeachan-Heo/oh-my-claudecode](https://github.com/Yeachan-Heo/oh-my-claudecode)）：計画、実装、QA の段階的なワークフローを Claude Code 内で動かすプラグイン。",
        "Vibe Kanban（[BloopAI/vibe-kanban](https://github.com/BloopAI/vibe-kanban)）：ボードで issue を計画し、issue ごとにエージェントのワークスペースを開始します。README には提供終了に向かっていると書かれています。",
        "opcode（[winfunc/opcode](https://github.com/winfunc/opcode)）：カスタムエージェント、セッション履歴、利用状況の分析、チェックポイントを備えた Claude Code のデスクトップ GUI。",
        "CloudCLI（[siteboon/claudecodeui](https://github.com/siteboon/claudecodeui)）：シェル、ファイル、git 付きでセッションを扱える Web とモバイルの UI。有料のクラウド版ではホスト型コンテナが加わります。",
        "Conductor（[conductor.build](https://www.conductor.build)）：終了日と作業の移行方法は [Conductor の代替ツール](/blog/conductor-alternatives)をご覧ください。",
        "Paperclip（[paperclipai/paperclip](https://github.com/paperclipai/paperclip)）と Multica（[multica-ai/multica](https://github.com/multica-ai/multica)）：AI 社員に最も近い 2 つ。[Paperclip](/alternatives/paperclip) と [Multica](/alternatives/multica) との比較もご覧ください。",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Crewmark なら",
      title: "入力をやめても止まらないオーケストレーション",
      text: [
        "Crewmark は、Claude Code、Codex、DeepSeek Harness、OpenCode の各セッションを、職種・目標・勤務時間を持つ AI 社員に変え、ハートビートで起こして共有ボードから次の issue を取らせます。",
      ],
      steps: [
        {
          title: "仕事ごとに社員を 1 人",
          text: "プログラマー、レビュアー、SEO ライター。それぞれが専用のセッション、チェックアウト、数値で書かれた目標を持ちます。[AI 社員とは](/ai-employees)をご覧ください。",
        },
        {
          title: "ターミナルの格子ではなくボードで",
          text: "issue を割り当てると、各社員は作業しながらコメントし、判断が必要なときはあなたにメッセージを送ります。",
        },
        {
          title: "次のプロンプトの代わりにハートビート",
          text: "勤務時間中、各社員は 15 分、30 分、または 60 分ごとに同じ会話の中で起きます。[Claude Code をプロアクティブにする方法](/proactive-claude-code)をご覧ください。",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Claude Code オーケストレーションツールを選ぶ" },
  mid: {
    title: "エージェントを 5 つ動かしているのに、プロンプトは毎回手入力？",
    text: "Crewmark は各 Claude Code セッションに職種、目標、ハートビートを与えるので、あなたがいなくても次の issue を取ります。",
    button: "今すぐ始める",
  },
  faq: {
    title: "Claude Code オーケストレーションのよくある質問",
    items: [
      {
        q: "Claude Code のオーケストレーションとは何ですか？",
        a: "複数の Claude Code エージェントを同時に動かし、連携させることです。別々のチェックアウト、別々のタスク、そして各エージェントの作業状況を見て結果をマージする手段が必要です。",
      },
      {
        q: "Claude Code だけでエージェントをオーケストレーションできますか？",
        a: "はい。Subagents、Agent view、Agent teams（実験的）、Dynamic workflows、Projects はすべて組み込みで、`--worktree` を使えば自分で動かすセッションも分離できます。",
      },
      {
        q: "おすすめの Claude Code オーケストレーションツールは？",
        a: "ターミナル中心なら Claude Squad、デスクトップでエージェントの一団を動かすなら Orca、Claude Code 内でスウォームを動かすなら Ruflo、ボードからスケジュールで仕事を続けるエージェントが欲しいなら Paperclip、Multica、Crewmark です。",
      },
      {
        q: "Claude Code エージェントを管理する GUI はありますか？",
        a: "あります。Orca と opcode はデスクトップアプリ、Vibe Kanban、CloudCLI、Paperclip、Multica は Web UI を持ち、Claude Code 自身のデスクトップアプリも Worktree スイッチで並列セッションを動かせます。",
      },
      {
        q: "プロンプトなしでエージェントが仕事を始められるツールは？",
        a: "ここで比較したものでは、Paperclip（スケジュールされたハートビート）、Multica（割り当てられた issue と cron で動く Autopilots）、Crewmark（勤務時間中のハートビート）です。それ以外は、あなたが開始したエージェントを動かすツールです。",
      },
      {
        q: "これらのツールは無料ですか？",
        a: "ほとんどがオープンソースで、無料でセルフホストできます。Orca、Ruflo、oh-my-claudecode、Paperclip は MIT、Claude Squad、opcode、CloudCLI は AGPL-3.0、Vibe Kanban は Apache-2.0 です。Multica は独自のソース公開ライセンスで、Conductor はクローズドソースです。",
      },
      {
        q: "Conductor の代わりに何を使えばいいですか？",
        a: "[Conductor の代替ツール](/blog/conductor-alternatives)をご覧ください。中核の機能は Claude Code 自身の `--worktree` とデスクトップアプリでまかなえ、上記のツールがボード、エージェントの一団、スケジュールを加えます。",
      },
    ],
  },
  cta: {
    title: "Claude Code エージェントに、次のタスクを自分で取らせましょう。",
    text: "Crewmark は、Claude Code、Codex、DeepSeek Harness のセッションを、職種・目標・勤務時間・ハートビートを持つ AI 社員に変えます。",
    button: "今すぐ始める",
  },
  checked: "2026年11月6日に Claude Code のドキュメント、各プロジェクトの README またはウェブサイト、GitHub API と照合しました。",
  disclaimer:
    "Crewmark は比較対象のツールの 1 つです。製品名は各所有者の商標であり、このページはどのプロジェクトのレビューや承認も受けていません。",
};
