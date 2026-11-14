import type { GuideCopy } from "@/components/landing/guide-article";

// Japanese translation of /blog/claude-code-kanban; the English master is src/content/blog/claude-code-kanban.ts.

const docs = "https://code.claude.com/docs/en/interactive-mode";

const setup = `// ~/.claude/settings.json: only needed if your model
// doesn't have the task tools by default
{
  "env": { "CLAUDE_CODE_ENABLE_TODO_TOOLS": "1" }
}

# Install the board, add its hooks once, then open it
npm install -g claude-code-kanban
claude-code-kanban --install
claude-code-kanban --open`;

const shared = `# Several sessions share one task list
CLAUDE_CODE_TASK_LIST_ID=my-project claude`;

export const copy: GuideCopy = {
  meta: {
    title: "Claude Code のカンバンボードとおすすめツール | Crewmark AI",
    description:
      "Claude Code にはタスクのチェックリスト（Ctrl+T）はあってもカンバンボードはありません。タスクリストの仕組み、ボードに載せる方法、Claude Code セッション向けのカンバンツール（claude-code-kanban、Kanban Code、Claudine、Vibe Kanban、Crewmark）を解説します。",
  },
  breadcrumb: "Claude Code のカンバンボード",
  parent: { name: "ブログ", href: "/blog" },
  article: { published: "2026-11-07" },
  hero: {
    kicker: "ブログ · Claude Code",
    title: "Claude Code のカンバンボード：タスクのチェックリストから本物のボードへ",
    lead: "Claude Code にカンバンボードは付いていません。あるのはタスクリスト、つまり Claude が複数ステップの作業のために書く ToDo チェックリストで、未着手・進行中・完了の状態で表示され、Ctrl+T で切り替えます。「Claude Code のカンバンボード」と呼ばれるものは、その上に作られた2種類のどちらかです。タスクリストをブラウザのボードに表示するものか、カード1枚が Claude Code のセッションまたは issue 1つに対応するボードです。このガイドでは、組み込みのタスクリスト、ボードの設定方法、それぞれの種類のツールを紹介します。",
    cta: "今すぐ始める",
    secondary: "ボードを設定する",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "Claude Code に組み込まれているもの：タスクリスト",
      text: [
        "タスクリストは、目の前の作業のための Claude 自身のチェックリストです。バックグラウンドタスクの一覧とは別物で、そちらは `/tasks` で実行中のシェルやサブエージェントを表示します。",
      ],
      points: [
        "`Ctrl+T` で表示・非表示を切り替えます。一度に表示されるのは最大5件です。",
        "タスクはコンテキストの圧縮後も残るので、長い作業でも Claude は計画を見失いません。",
        "Claude に「show me all tasks」（すべてのタスクを表示）や「clear all tasks」（すべてのタスクを消去）と頼めます。",
        "`CLAUDE_CODE_TASK_LIST_ID` を設定すると複数のセッションで1つのリストを共有できます。リストは `~/.claude/tasks/` 配下の名前付きディレクトリに保存されます。",
        "タスクツールは Opus 4.7、Sonnet 4.6、Haiku 4.5 とそれ以前のモデルでデフォルトで有効です。それ以外のモデルでは、`CLAUDE_CODE_ENABLE_TODO_TOOLS=1` を設定しない限りリストは空のままです。",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Claude Code のタスクをカンバンボードに載せる方法",
      text: [
        "ここでは claude-code-kanban を使います。Claude Code が書き出すタスクファイルを監視し、ブラウザに表示するオープンソースのボードです。",
      ],
      steps: [
        {
          title: "タスクツールが有効か確認する",
          text: "`Ctrl+T` を押してもチェックリストが一度も表示されないなら、お使いのモデルではタスクツールがデフォルトで有効になっていません。設定に環境変数を追加し、Claude Code を再起動します。",
          code: setup,
        },
        {
          title: "ボードとフックをインストールする",
          text: "`claude-code-kanban --install` は、フック付きの Claude Code プラグインを追加します。フックがないとボードにはタスクしか表示されず、リアルタイムのアクティビティや応答待ちのプロンプトは出ません。",
        },
        {
          title: "ボードを開いて作業を続ける",
          text: "Claude の作業に合わせてカードが Pending、In Progress、Completed と進み、Claude からの質問にもボード上で答えられます。待ち受けは 127.0.0.1 のみでログインもないため、自分のマシンだけで使いましょう。",
        },
        {
          title: "複数のセッションで1つのボードを共有する",
          text: "各セッションを同じタスクリスト ID で起動すれば、複数の Claude Code セッションが1つのリストを読み書きします。",
          code: shared,
        },
      ],
      source: { label: "出典：Claude Code ドキュメント、Interactive mode（Task list）", href: docs },
    },
    {
      kind: "table",
      id: "tools",
      title: "Claude Code 向けカンバンツールの比較",
      text: ["2026年11月7日時点の各プロジェクトの README または掲載ページの情報です。"],
      headers: ["ツール", "カードの単位", "動作環境", "エージェント", "ライセンス"],
      rows: [
        ["claude-code-kanban", "Claude のタスクリストのタスク1件", "ブラウザ（自分のマシン上）", "Claude Code", "MIT"],
        ["Kanban Code", "Claude Code のセッション1つ（専用の worktree 付き）。列は Backlog、In Progress、Waiting、In Review、Done", "macOS 26 アプリ、Windows アプリ", "Claude Code", "Apache 2.0"],
        ["Claudine", "Claude Code または Codex の会話1つ。状態、ブランチ、エラーを検出", "VS Code 拡張機能", "Claude Code、Codex", "MIT"],
        ["Vibe Kanban", "ワークスペースを立ち上げる issue 1つ。運営会社は解散、アプリはローカルで動作", "`npx vibe-kanban`", "Claude Code、Codex ほか多数", "Apache 2.0"],
        ["Crewmark", "AI 社員がハートビートで自分から引き受ける issue 1つ", "ホスティングされた Web のボード、チームで共有", "Claude Code、Codex、DeepSeek Harness、OpenCode", "商用"],
      ],
    },
    {
      kind: "text",
      title: "必要なボードの種類",
      points: [
        "1つのセッションの計画を見たいだけ：Claude Code 自身のタスクリスト（`Ctrl+T`）で足りるかもしれません。ブラウザで大きく見たいなら claude-code-kanban を追加しましょう。",
        "複数のセッションを並列で動かしていて、どれが自分を待っているのか分からなくなる：Kanban Code や Claudine のようなセッションボードなら、作業中・待機中・レビュー待ちがひと目で分かります。[複数の Claude Code エージェント](/blog/multiple-claude-code-agents)と [worktree ガイド](/blog/claude-code-worktree)もご覧ください。",
        "Vibe Kanban を使っていた：[Vibe Kanban の代替ツール](/blog/vibe-kanban-alternatives)をご覧ください。",
        "ボードに作業を回してほしい、つまりあなたがいなくてもエージェントが次のカードを取ってほしい：それが Crewmark の役割です（下記参照）。",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Crewmark なら",
      title: "Claude Code が次のカードを自分で取るカンバンボード",
      text: [
        "ここまでのツールはどれも Claude が何をしているかを見せてくれますが、セッションを開始するのも、カードを動かすのもあなたです。Crewmark は Claude Code、Codex、DeepSeek Harness、OpenCode のセッションを、職種・目標・勤務時間を持つ AI 社員に変えます。社員はハートビートで起き、共有ボードから次の issue を取り、作業しながらコメントし、判断が必要なときはメッセージを送ってきます。",
      ],
      steps: [
        {
          title: "プロジェクトとエージェントをつなぐ",
          text: "リポジトリでセットアップコマンドを実行します。社員は専用のセッションとチェックアウトで、契約中のプランのまま作業します。",
        },
        {
          title: "ボードを埋める",
          text: "チームメイトに頼むように issue を書き、社員に割り当てるか、手の空いた社員に任せます。",
        },
        {
          title: "開始する側からレビューする側へ",
          text: "勤務時間中、15分、30分、60分ごとに社員が次のカードを取ります。[Claude Code を自発的に動かす方法](/proactive-claude-code)と [AI 社員とは](/ai-employees)をご覧ください。",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Claude Code のタスクをカンバンボードに載せる" },
  mid: {
    title: "カードを自分で動かすのはもうやめましょう。",
    text: "Crewmark のボードは issue を Claude Code や Codex の社員に割り当て、社員はハートビートで起きて次の issue を取ります。",
    button: "今すぐ始める",
  },
  faq: {
    title: "Claude Code のカンバンに関するよくある質問",
    items: [
      {
        q: "Claude Code にカンバンボードはありますか？",
        a: "ありません。あるのはタスクリストで、未着手・進行中・完了の項目を並べたチェックリストを Ctrl+T で切り替えます。Claude Code 向けのカンバンボードは、タスクファイルやセッションファイルをもとに作られたサードパーティのツールです。",
      },
      {
        q: "Claude Code のタスクリストはどうやって見ますか？",
        a: "セッション中に Ctrl+T を押します。表示は最大5件なので、すべて見るには Claude に「show me all tasks」と頼みます。実行中のシェルやサブエージェントは /tasks で確認します。",
      },
      {
        q: "Claude Code のタスクリストが空なのはなぜですか？",
        a: "Claude がまだ複数ステップの作業を計画していないか、お使いのモデルでタスクツールがデフォルトで有効になっていないかのどちらかです。環境変数か設定で CLAUDE_CODE_ENABLE_TODO_TOOLS=1 を指定し、再起動してください。",
      },
      {
        q: "複数の Claude Code セッションで1つのタスクリストを共有できますか？",
        a: "できます。各セッションを同じ CLAUDE_CODE_TASK_LIST_ID で起動します（例：CLAUDE_CODE_TASK_LIST_ID=my-project claude）。リストは ~/.claude/tasks/ 配下に保存されます。",
      },
      {
        q: "Claude Code のカンバンプラグインはありますか？",
        a: "claude-code-kanban は、ブラウザのボードにデータを送るフック付きの Claude Code プラグインをインストールします。Claudine は VS Code 拡張機能、Kanban Code はデスクトップアプリです。",
      },
      {
        q: "Claude Code と Codex を一緒に扱えるカンバンボードはありますか？",
        a: "Claudine は Claude Code と Codex の両方の会話を読み取ります。Vibe Kanban は多くのエージェントに対応していますが、運営会社は解散しました。Crewmark のボードは issue を Claude Code、Codex、DeepSeek Harness、OpenCode の社員に割り当てます。",
      },
    ],
  },
  cta: {
    title: "Claude Code のボードを、それを回すチームに変えましょう。",
    text: "Crewmark は、Claude Code、Codex、DeepSeek Harness、OpenCode のセッションを、職種・目標・勤務時間・ハートビートを持つ AI 社員に変えます。",
    button: "今すぐ始める",
  },
  checked: "2026年11月7日に Claude Code のドキュメント（Interactive mode）、および各ツールの README または掲載ページと照合しました。",
  disclaimer:
    "Crewmark は独立した製品であり、Anthropic およびここで紹介したプロジェクトとは提携しておらず、その承認も受けていません。Claude および Claude Code は Anthropic の商標です。",
};
