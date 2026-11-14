import type { GuideCopy } from "@/components/landing/guide-article";

// ja translation of /blog/claude-code-agent-teams; the English master is src/content/blog/claude-code-agent-teams.ts.

const docs = "https://code.claude.com/docs/en/agent-teams";

const enable = `// settings.json: agent teams are experimental and off by default
{
  "env": { "CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS": "1" }
}

// Optional: give each teammate its own split pane (tmux or iTerm2)
{
  "teammateMode": "auto"
}`;

const prompt = `Spawn three teammates to review PR #142:
- One focused on security implications
- One checking performance impact
- One validating test coverage
Have them each review and report findings.`;

export const copy: GuideCopy = {
  meta: {
    title: "Claude Code Agent Teams とサブエージェントの違い",
    description:
      "Claude Code の agent teams をドキュメントに沿って解説：サブエージェントとの違い、有効化とチームの始め方、tmux・iTerm2 の分割ペイン、チームの人数、トークンコストと制限、プロンプト例まで。",
  },
  breadcrumb: "Claude Code の agent teams",
  parent: { name: "ブログ", href: "/blog" },
  article: { published: "2026-11-07" },
  hero: {
    kicker: "ブログ · Claude Code",
    title: "Claude Code の agent teams とサブエージェントの違い：使い分けとチームの作り方",
    lead: "Agent teams を使うと、1 つの Claude Code セッションがチームリーダーとなり、チームメイトを起動できます。チームメイトはそれぞれ独自のコンテキストウィンドウを持つ別々の Claude Code インスタンスで、タスクリストを共有し、互いに直接メッセージを送り合います。サブエージェントはもっと軽量で、1 つのセッションの中で特定の仕事をこなし、要約を返すヘルパーです。Agent teams は実験的な機能で、デフォルトではオフです。このガイドでは Anthropic のドキュメントをもとに両者を比較し、チームの有効化と起動、tmux や iTerm2 のペインでのチームメイトの表示、よくある問題の避け方を説明します。",
    cta: "今すぐ始める",
    secondary: "チームを設定する",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "table",
      id: "compare",
      title: "Agent teams とサブエージェントの違い",
      text: [
        "どちらも別々のコンテキストウィンドウで並列に仕事をします。違いは誰が調整するかです。サブエージェントではメインのエージェントがすべてを管理し、チームではチームメイトが共有リストからタスクを引き受け、互いに話し合います。",
      ],
      headers: ["", "サブエージェント", "Agent teams"],
      rows: [
        ["何か", "1 つのセッションの中のヘルパー。`.claude/agents/` で定義するか、組み込みのもの（Explore、Plan、general-purpose）を使う", "リーダーのセッションと、チームメイトとして動く別々の Claude Code インスタンス"],
        ["コンテキスト", "独自のコンテキストウィンドウ。呼び出し元には要約だけが返る", "独自のコンテキストウィンドウ。完全に独立"],
        ["コミュニケーション", "呼び出し元に結果を返す（名前付きのサブエージェント同士はメッセージを送り合える）", "チームメイト同士が直接メッセージを送り合う。あなたもどのチームメイトにでもメッセージを送れる"],
        ["調整", "メインのエージェントがすべての仕事を管理", "引き受け・依存関係・メッセージを備えた共有タスクリスト"],
        ["向いている仕事", "結果だけが重要な、焦点の絞られたタスク", "議論が必要な仕事：レビュー、議論、レイヤーごとに分けた機能開発"],
        ["トークンコスト", "低め", "高め：チームメイトごとに別の Claude インスタンス"],
        ["ステータス", "一般提供", "実験的、デフォルトでオフ"],
      ],
    },
    {
      kind: "text",
      title: "Agent teams を使うべきとき（使うべきでないとき）",
      points: [
        "調査とレビュー：チームメイトが別々の角度から問題を調べ、互いの結論に異議を唱えます。",
        "新しいモジュールや機能：フロントエンド、バックエンド、テストのように、チームメイトごとに別の部分を担当します。",
        "仮説が競合するデバッグ：複数のチームメイトがそれぞれ自分の仮説を証明し、他の仮説を反証しようとします。",
        "順番に進める仕事、同じファイルの編集、依存関係の多いタスクには向きません。その場合は 1 つのセッションかサブエージェントを使いましょう。",
        "日常的な作業にも向きません。アクティブなチームメイトが増えるほどトークン使用量も増えます。",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Claude Code の agent team を設定する方法",
      steps: [
        {
          title: "Agent teams をオンにする",
          text: "環境変数、または settings.json の `env` ブロックで `CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS` を `1` に設定します。チームには対話型セッションが必要です。`-p`（および Agent SDK）では、Claude はチームメイトを起動しません。",
          code: enable,
        },
        {
          title: "チームを普通の言葉で説明する",
          text: "チームメイトの人数と、それぞれの担当を伝えます。Claude が共有タスクリストを作り、チームメイトを起動し、終わったら結果をまとめます。",
          code: prompt,
        },
        {
          title: "表示モードを選ぶ",
          text: "デフォルトはインプロセスモードで、どのターミナルでも動きます。チームメイトはプロンプトの下のパネルに表示され、矢印キーと Enter で開いてメッセージを送れます。タスクリストは `Ctrl+T` で表示します。分割ペインモードではチームメイトごとに専用のペインが使われ、tmux か、`it2` CLI を入れた iTerm2 が必要です。`teammateMode` を `auto` または `tmux` に設定するか、`claude --teammate-mode auto` で起動します。",
        },
        {
          title: "定義済みのロールを再利用する",
          text: "「using the security-reviewer agent type」でチームメイトを頼むと、`.claude/agents/` のサブエージェント定義を、そのツール・モデル・指示ごと再利用できます。",
        },
        {
          title: "舵を取り、最後に終了する",
          text: "チームメイトの様子を確認し、方向を修正しましょう。リーダーがチームメイトの仕事を自分で始めたら「wait for your teammates」と伝えます。終えるときは、リーダーにチームメイトを名前で指定して終了させます。チームのディレクトリはセッション終了時に片付けられます。",
        },
      ],
      source: { label: "出典：Claude Code のドキュメント「Agent teams」", href: docs },
    },
    {
      kind: "text",
      title: "ベストプラクティスと制限",
      points: [
        "まずはチームメイト 3〜5 人、1 人あたり 5〜6 タスク程度から始めましょう。焦点の定まった 3 人は、ばらばらな 5 人に勝ることがよくあります。",
        "チームメイトごとに別のファイル群を割り当てます。2 人が同じファイルを編集すると、互いに上書きしてしまいます。",
        "タスクの詳細は起動時のプロンプトに書きます。チームメイトは CLAUDE.md、MCP サーバー、skills を読み込みますが、リーダーの会話は引き継ぎません。",
        "hooks を品質ゲートに使えます。`TeammateIdle`、`TaskCreated`、`TaskCompleted` は終了コード 2 で仕事を差し戻せます。",
        "制限：1 つのセッションにチームは 1 つ、入れ子のチームは不可、リーダーは交代できない、`/resume` でインプロセスのチームメイトは戻らない、タスクのステータスが遅れることがある。",
        "分割ペインは VS Code の統合ターミナル、Windows Terminal、Ghostty では使えません。インプロセスモードはどこでも動きます。",
        "Agent teams をオンにすると、Claude が名前で呼んだサブエージェントがチームメイトとして起動することがあります。通常のサブエージェントに戻したい場合は、変数を `0` にしましょう。",
      ],
    },
    {
      kind: "text",
      title: "Agent teams と、Claude Code を並列で動かすほかの方法",
      text: [
        "Agent teams は、あなたが見守っている 1 つのタスクを 1 つのセッションの中で分担するものです。独立したタスクなら、[git worktrees](/blog/claude-code-worktree) で別々のセッションを動かすか、[バックグラウンドエージェント](/blog/claude-code-background-agents)として動かしましょう。全体の比較は[複数の Claude Code エージェント](/blog/multiple-claude-code-agents)を、コストを抑える方法は[Claude Code のトークン使用量を減らす方法](/blog/reduce-claude-code-token-usage)をご覧ください。",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Crewmark なら",
      title: "セッションが終わっても働き続けるチーム",
      text: [
        "Agent team は 1 つのセッションの中にしか存在せず、閉じれば止まります。Crewmark は Claude Code、Codex、DeepSeek Harness、OpenCode のセッションを、続いていく職種・目標・勤務時間を持つ AI 社員に変えます。社員はハートビートで起き、共有ボードから次の issue を取り、判断が必要なときはメッセージを送ってきます。",
      ],
      steps: [
        {
          title: "社員ごとに職種を与える",
          text: "[ソフトウェアエンジニア](/ai-employees/software-engineer)、レビュアー、[SEO スペシャリスト](/ai-employees/seo-specialist)：チームメイトとして起動していたロールを、ずっと残しておけます。",
        },
        {
          title: "1 つのボードで働く",
          text: "セッションのタスクリストの代わりに issue を使います。issue は再起動しても、何日、何週間たっても残ります。",
        },
        {
          title: "ハートビートで仕事を始める",
          text: "勤務時間中、15分、30分、60分ごとに。[AI 社員とは](/ai-employees)をご覧ください。",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Claude Code の agent team を設定する" },
  mid: {
    title: "セッションが終わっても続くチームが欲しいなら",
    text: "Crewmark は、すでに契約しているプランのまま、Claude Code の社員をハートビートで共有ボードから働かせ続けます。",
    button: "今すぐ始める",
  },
  faq: {
    title: "Claude Code の agent teams に関するよくある質問",
    items: [
      {
        q: "Claude Code の agent teams とは何ですか？",
        a: "1 つの Claude Code セッションが、別々の Claude Code インスタンスからなるチームを率いる実験的な機能です。チームメイトはそれぞれ独自のコンテキストウィンドウを持ち、タスクリストを共有し、互いやリーダーに直接メッセージを送ります。",
      },
      {
        q: "Agent teams とサブエージェントの違いは何ですか？",
        a: "サブエージェントは 1 つのセッションの中で動き、すべてを調整するメインのエージェントに要約を返します。Agent teams は別々のインスタンスで、共有タスクリストと直接のメッセージで自ら調整し、トークンコストはより高くなります。",
      },
      {
        q: "Claude Code で agent teams を有効にするには？",
        a: "環境変数または settings.json の env ブロックで CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS を 1 に設定し、対話型セッションで Claude にタスクのチームメイトを起動するよう頼みます。",
      },
      {
        q: "Agent teams に tmux は必要ですか？",
        a: "いいえ。デフォルトのインプロセスモードはどのターミナルでも動きます。tmux、または it2 CLI を入れた iTerm2 が必要なのは、チームメイトごとに分割ペインを使いたい場合だけです。",
      },
      {
        q: "チームメイトは何人がよいですか？",
        a: "Anthropic は、チームメイト 3〜5 人、1 人あたり 5〜6 タスク程度から始めることを勧めています。コストはチームメイトの数に比例し、人数が増えるほど調整の手間も増えます。",
      },
      {
        q: "Agent teams は VS Code で使えますか？",
        a: "インプロセスモードは、VS Code の統合ターミナルを含むどのターミナルでも動きます。分割ペインモードはそこではサポートされていません。",
      },
      {
        q: "サブエージェントを使いたいのに、Claude がチームメイトを起動するのはなぜですか？",
        a: "Agent teams が有効だと、Claude が名前で呼んだサブエージェントはチームメイトとして起動します。CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS を 0 にすれば、通常のサブエージェントに戻ります。",
      },
    ],
  },
  cta: {
    title: "Agent team を、常駐するチームに。",
    text: "Crewmark は、Claude Code、Codex、DeepSeek Harness、OpenCode のセッションを、職種・目標・勤務時間・ハートビートを持つ AI 社員に変えます。",
    button: "今すぐ始める",
  },
  checked: "2026年11月7日に Claude Code のドキュメント（Agent teams とサブエージェント）と照合しました。",
  disclaimer:
    "Crewmark は独立した製品であり、Anthropic とは提携しておらず、その承認も受けていません。Claude および Claude Code は Anthropic の商標です。",
};
