import type { GuideCopy } from "@/components/landing/guide-article";

// Japanese translation of /blog/multiple-claude-code-agents; the English master is
// src/content/blog/multiple-claude-code-agents.ts.

const subagent = `---
name: code-reviewer
description: Reviews code for quality and best practices
tools: Read, Glob, Grep
model: sonnet
---

You are a code reviewer. When invoked, analyze the code and give
specific, actionable feedback on quality, security and best practices.`;

export const copy: GuideCopy = {
  meta: {
    title: "Claude Code の並列実行：サブエージェント・worktree・agent teams | Crewmark",
    description:
      "複数の Claude Code を同時に動かす：サブエージェント、git worktree の並列セッション、--bg、実験的な agent teams。編集の衝突も防げます。",
  },
  breadcrumb: "複数の Claude Code エージェント",
  parent: { name: "ブログ", href: "/blog" },
  article: { published: "2026-11-02" },
  hero: {
    kicker: "ブログ · Claude Code",
    title: "複数の Claude Code エージェントを同時に動かす方法",
    lead: "Claude Code は、4 つの方法で複数の仕事を同時に進められます。1 つの会話の中のサブエージェント、それぞれの git worktree で動く別々のセッション、--bg で始めるバックグラウンドセッション、そして互いにメッセージをやり取りする実験的な agent teams です。このガイドでは、それぞれの設定方法、どれを選ぶべきか、そして並列のエージェントが互いの仕事を上書きしないようにする方法を説明します。",
    cta: "早期アクセスに登録",
    secondary: "worktree へ移動",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "table",
      title: "Claude Code のエージェントを並列で動かす 4 つの方法",
      headers: ["", "並列で動くもの", "ファイルは分かれるか", "向いている用途"],
      rows: [
        ["サブエージェント", "1 つの会話の中のワーカー。それぞれ独自のコンテキストを持つ", "いいえ（`isolation: worktree` を設定した場合を除く）", "結果を報告してくる調査、レビュー、サイドタスク"],
        ["worktree のセッション", "それぞれ専用の git worktree で動く完全なセッション", "はい。ブランチも 1 つずつ", "複数の機能や修正を同時に進める"],
        ["バックグラウンドセッション", "`claude --bg` で始め、agent view で管理するセッション", "はい。デフォルトで worktree が 1 つずつ", "今タスクを投げて、後で確認する"],
        ["Agent teams", "リーダーのセッションと、タスクリストを共有するチームメイト", "いいえ：チームメイト間でファイルを分担する", "エージェント同士の会話が必要な仕事"],
      ],
    },
    {
      kind: "steps",
      title: "サブエージェント：1 つのセッションの中の並列ヘルパー",
      text: [
        "サブエージェントは、独自のコンテキストウィンドウ、システムプロンプト、ツールを持ちます。あなたの会話は見えず、戻ってくるのは要約だけなので、メインのセッションのコンテキストを小さく保てます。Claude Code には Explore（読み取り専用）や Plan といった組み込みのサブエージェントがあり、自分で追加することもできます。",
      ],
      steps: [
        {
          title: "サブエージェントを定義する",
          text: "`.claude/agents/`（プロジェクトで共有）または `~/.claude/agents/`（自分だけ）に Markdown ファイルを作ります。必須なのは `name` と `description` だけです。`tools` で使えるツールを制限し、`model` でモデルを選びます。",
          code: subagent,
        },
        {
          title: "Claude に複数を同時に動かしてもらう",
          text: "「auth、billing、search の各モジュールを並列でレビューして」のように、並列で頼みます。Claude が起動するサブエージェントはデフォルトでバックグラウンドで始まり、同時に最大 20 個まで動き、終わると報告してきます。`/tasks` と入力すると一覧を確認できます。",
        },
        {
          title: "ファイルを編集するサブエージェントには専用の worktree を",
          text: "サブエージェントのフロントマターに `isolation: worktree` を追加するか、エージェントに worktree を使うよう Claude に頼みます。そうすると、各サブエージェントはリポジトリの一時的なコピーを編集し、変更がなければそのコピーは削除されます。",
        },
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "git worktree で Claude Code のセッションを並列に動かす",
      text: [
        "オプション、設定、トラブル対処のすべては [Claude Code worktree ガイド](/blog/claude-code-worktree) にまとめています。",
      ],
      steps: [
        {
          title: "worktree のフォルダーを無視する",
          text: "Claude Code は、リポジトリのルートの `.claude/worktrees/` に worktree を作ります。リポジトリには少なくとも 1 つのコミットが必要です。",
          code: 'echo ".claude/worktrees/" >> .gitignore',
        },
        {
          title: "タスクごとにセッションを 1 つ始める",
          text: "各ターミナルで、別々の名前を付けて `claude --worktree`（または `-w`）を実行します。それぞれに専用のフォルダーと、デフォルトブランチをもとにした `worktree-<name>` という名前のブランチが作られます。",
          code: "# ターミナル 1\nclaude --worktree feature-auth\n\n# ターミナル 2\nclaude --worktree bugfix-login",
        },
        {
          title: "必要な未追跡ファイルをコピーする",
          text: "新しい worktree には追跡されているファイルしかありません。`.env` のようなファイルを `.worktreeinclude` ファイル（gitignore と同じ書式）に書いておくと、Claude Code がコピーしてくれます。",
          code: ".env\n.env.local",
        },
        {
          title: "マージして片付ける",
          text: "セッションが終わると、変更のない worktree はブランチごと削除され、変更のある worktree は残すかどうかを聞かれます。ブランチはほかのブランチと同じようにマージします。ヘッドレスの `-p` 実行では確認が出ないので、`git worktree remove` で削除してください。",
        },
        {
          title: "デスクトップアプリを使う方法も",
          text: "Cmd+N（Windows では Ctrl+N）で新しいセッションを開き、始める前に Worktree をオンにします（デフォルトはオフです）。セッションは分割ビューで並べて表示できます。",
        },
      ],
      source: { label: "出典：Anthropic の worktree のドキュメント", href: "https://code.claude.com/docs/en/worktrees" },
    },
    {
      kind: "text",
      title: "--bg と agent view によるバックグラウンドセッション",
      text: [
        "`claude --bg \"<prompt>\"` はバックグラウンドでセッションを始めてすぐに戻るので、続けていくつも始められます。各セッションは、何かを編集する前に専用の worktree に移ります。`claude agents` で一覧を表示し、`claude logs <id>`、`claude attach <id>`、`claude stop <id>` で個々のセッションを管理します。",
        "ターミナルを閉じても動き続けますが、パソコンをシャットダウンすると止まります。Agent view はリサーチプレビューです。無人での実行について詳しくは、[Claude Code のバックグラウンドエージェントを動かす方法](/blog/claude-code-background-agents)をご覧ください。",
      ],
    },
    {
      kind: "text",
      title: "Agent teams：互いに会話するエージェント",
      text: [
        "Agent teams は実験的な機能で、デフォルトではオフです。シェルまたは settings.json の `env` ブロックで `CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1` を設定してオンにし、タスクについて Claude に「チームメイトを 3 人起動して」と頼みます。チームメイトはタスクリストを共有し、互いにメッセージを送り合います。ターミナルに表示されるほか、tmux や iTerm2 では分割ペインに表示されます。",
      ],
      points: [
        "対話型セッション専用です。`-p` と Agent SDK ではチームメイトを起動できません。",
        "1 つのセッションにつきチームは 1 つで、入れ子のチームは作れません。また、インプロセスのチームメイトは `/resume` で復元されません。",
        "チームメイトは 1 つのチェックアウトを共有するので、それぞれに別のファイル群を担当させましょう。",
        "コストははるかに高くなります。Anthropic のドキュメントによると、チームメイトがプランモードで動く場合、チームは単一のセッションのおよそ 7 倍のトークンを使います。",
      ],
    },
    {
      kind: "text",
      title: "並列のエージェントが互いの仕事を上書きしないようにする",
      points: [
        "2 つのエージェントが同じファイルに触れる可能性があるなら、それぞれに専用の worktree を与えましょう。worktree 内のセッションはメインのチェックアウトを編集できず、そのサブエージェントも同様です。",
        "Agent teams では、ファイル単位で仕事を分けます。2 人のチームメイトが 1 つのファイルを編集すると、互いに上書きしてしまいます。",
        "すべてのサブエージェントとセッションは同じ利用上限を消費するので、複数動かすと使用量も何倍にもなります。簡単なサブエージェントには `model: haiku` を使いましょう。",
        "同じテストや開発サーバーを動かすエージェント同士はポートが衝突することがあるので、それぞれに別のポートを割り当てましょう。",
      ],
    },
    {
      kind: "steps",
      kicker: "Crewmark なら",
      title: "並列のエージェントを、仕事を持つチームに",
      text: [
        "worktree や agent teams は、あなたが見守っている 1 つのタスクを分担するものです。Crewmark は、複数の Claude Code や Codex のセッションを、それぞれの職種・目標・勤務時間を持つ社員として動かし、1 つのボードで仕事を渡します。",
      ],
      steps: [
        {
          title: "職種ごとに社員を 1 人",
          text: "SEO スペシャリスト、ソフトウェアエンジニア、UI デザイナーが、それぞれ自分の指示と目標を持って、自分の会話の中で働きます。",
        },
        {
          title: "全員で 1 つのボード",
          text: "タスクは適任の社員に割り当てます。各社員はハートビートで起動して次のタスクを取り、作業しながらコメントするので、誰が何をしているかがわかります。",
        },
        {
          title: "相談先は互いではなく、あなた",
          text: "レビューや権限が必要になると、社員はあなたにメッセージを送り、次の仕事に移ります。[AI 社員とは何か](/ai-employees)もご覧ください。",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "git worktree で Claude Code のセッションを並列に動かす" },
  mid: {
    title: "毎日複数のエージェントを動かしているなら",
    text: "Crewmark は、Claude Code の各セッションに職種・目標・勤務時間を与え、すべての仕事を 1 つのボードにまとめます。",
    button: "早期アクセスに登録",
  },
  faq: {
    title: "複数の Claude Code エージェントに関するよくある質問",
    items: [
      {
        q: "複数の Claude Code エージェントを同時に動かせますか？",
        a: "はい。Claude は 1 つのセッションの中でサブエージェントを並列に動かせます。ほかにも、`claude --worktree` で別々の git worktree に複数のセッションを動かす、`claude --bg` でバックグラウンドセッションを始める、実験的な agent teams を試す、といった方法があります。",
      },
      {
        q: "サブエージェントと agent teams の違いは何ですか？",
        a: "サブエージェントはタスクをこなし、起動元のセッションに要約を報告します。Agent teams は、タスクリストを共有して互いに直接メッセージを送り合う別々の Claude Code インスタンスで、実験的な機能であり、より多くのトークンを消費します。",
      },
      {
        q: "サブエージェントは同時にいくつ動かせますか？",
        a: "デフォルトでは同時に最大 20 個です。上限は `CLAUDE_CODE_MAX_CONCURRENT_SUBAGENTS` で変更できます。サブエージェントがさらに自分のサブエージェントを起動することもでき、デフォルトでは 3 階層までです。",
      },
      {
        q: "並列のエージェントが同じファイルを編集しないようにするには？",
        a: "それぞれを専用の git worktree に入れます。セッションなら `claude --worktree <name>`、サブエージェントなら `isolation: worktree` です。`--bg` で始めたバックグラウンドセッションには自動で worktree が割り当てられます。Agent teams は 1 つのチェックアウトを共有するので、チームメイトごとにファイルを割り当てましょう。",
      },
      {
        q: "複数のエージェントを動かすとコストは増えますか？",
        a: "はい。各サブエージェントとセッションはそれぞれリクエストを送り、それらは同じ利用上限に計上されるので、複数を同時に動かすと使用量も何倍にもなります。",
      },
      {
        q: "Claude Code の worktree はどこに保存されますか？",
        a: "リポジトリのルートの `.claude/worktrees/<name>/` に、`worktree-<name>` という名前のブランチで保存されます。このフォルダーを `.gitignore` に追加しましょう。",
      },
    ],
  },
  cta: {
    title: "仕事を持つ Claude Code エージェントのチームを動かしましょう。",
    text: "Crewmark は、Claude Code や Codex のセッションを、職種・目標・勤務時間を持つ AI 社員に変え、1 つのボードで管理します。",
    button: "早期アクセスに登録",
  },
  checked: "2026年11月2日に Anthropic の Claude Code ドキュメントと照合しました。",
  disclaimer:
    "Crewmark は独立した製品であり、Anthropic とは提携しておらず、その承認も受けていません。Claude および Claude Code は Anthropic の商標です。",
};
