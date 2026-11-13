import type { GuideCopy } from "@/components/landing/guide-article";

// Japanese translation of /blog/claude-code-worktree; the English master is src/content/blog/claude-code-worktree.ts.

const docs = "https://code.claude.com/docs/en/worktrees";

const start = `# 独立した2つのセッションを、それぞれ別のターミナルで
claude --worktree feature-auth
claude --worktree fix-flaky-test

# プルリクエスト 1234 から worktree を作る（# は引用符で囲む）
claude --worktree "#1234"

# worktree を git status に出さない
echo ".claude/worktrees/" >> .gitignore`;

const settings = `{
  "worktree": {
    "baseRef": "head",
    "symlinkDirectories": ["node_modules"],
    "sparsePaths": [".claude", "packages/web"]
  }
}`;

const manual = `git worktree add ../app-feature-a -b feature-a
cd ../app-feature-a && claude
git worktree list
git worktree remove ../app-feature-a`;

export const copy: GuideCopy = {
  meta: {
    title: "Claude Code の worktree：--worktree、ワークフロー、後片付け、設定 | Crewmark",
    description:
      "Claude Code で git worktree を使う方法：claude --worktree、worktree の作成場所、ベースブランチ、.env を渡す .worktreeinclude、後片付け、サブエージェントの分離、設定を解説します。",
  },
  breadcrumb: "Claude Code worktree ガイド",
  parent: { name: "ブログ", href: "/blog" },
  article: { published: "2026-11-06" },
  hero: {
    kicker: "ブログ · Claude Code",
    title: "Claude Code の worktree：編集の衝突なしに並列セッションを動かす",
    lead: "Claude Code の worktree は、リポジトリの履歴を共有しながら、独自のファイルとブランチを持つ別の git 作業ディレクトリです。`claude --worktree <name>` でセッションを始めると、Claude はあなたのチェックアウトではなくそこで編集するので、2つ、3つのセッションが互いのファイルに触れずに同時に作業できます。このガイドでは、フラグ、worktree の作成場所、起点になるブランチ、`.env` ファイルの持ち込み方、後片付け、サブエージェント、設定を説明します。",
    cta: "早期アクセスに登録",
    secondary: "ワークフローへ移動",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "Claude Code の worktree とは",
      text: [
        "git は以前から worktree に対応しています。`git worktree add` は、同じ `.git` のデータを使って、ブランチを2つ目のディレクトリにチェックアウトします。Claude Code はこれを土台にしています。`--worktree`（または `-w`）を付けると、worktree を作成し、その中でセッションを開始し、メインのチェックアウトへの編集をブロックし、終了時に後片付けを提案します。",
        "worktree が分離するのはファイルだけです。1つの会話の中でタスクを複数の作業者に分けるならサブエージェントを使います。選択肢の比較は[複数の Claude Code エージェント](/blog/multiple-claude-code-agents)をご覧ください。",
      ],
      points: [
        "既定の場所：リポジトリルートの `.claude/worktrees/<name>/`。",
        "既定のブランチ名：`worktree-<name>`。名前を省略すると、Claude Code が `bright-running-fox` のような名前を付けます。",
        "チェックアウトと共有されるもの：`.git` ディレクトリ（コミットやブランチはどこからでも見えます）、プロジェクトスコープのプラグイン、「今後確認しない」の権限承認。",
        "共有されないもの：`.env`、`node_modules`、ビルド成果物など、gitignore されたものすべて。worktree はまっさらなチェックアウトです。",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "worktree のワークフローを順を追って",
      steps: [
        {
          title: "worktree フォルダを無視する",
          text: "`.gitignore` に `.claude/worktrees/` を追加し、worktree のファイルがメインのチェックアウトで未追跡として表示されないようにします。このリポジトリで Claude をまだ一度も実行していない場合は、先に `claude` を1回実行してワークスペースの信頼確認を承認してください。承認するまで、対話型の `--worktree` 実行は終了してしまいます。",
        },
        {
          title: "タスクごとにセッションを1つ始める",
          text: "タスクごとに1つのターミナルで `claude --worktree <name>` を実行します。既存の名前でもう一度実行すると、新しく作らずにその worktree を開き直します。セッションの途中で Claude に「worktree で作業して」と頼むこともでき、Claude は `EnterWorktree` ツールで自分を worktree に移します。",
          code: start,
        },
        {
          title: "未追跡のファイルも持ち込む",
          text: "`.env` や `.env.local` など、プロジェクトに必要な gitignore 済みのファイルを、リポジトリルートの `.worktreeinclude` ファイルに `.gitignore` の書式で列挙します。Claude Code は、サブエージェントやデスクトップの worktree も含め、作成するすべての worktree に一致するファイルをコピーします。そのうえで worktree 内で依存関係をインストールするか、設定で準備します。この例は、今の作業から分岐し、`node_modules` を1つだけ使い回し、web パッケージだけをチェックアウトします。",
          code: settings,
        },
        {
          title: "セッションに作業させる",
          text: "セッションが分離されている間、Claude Code は、メインのチェックアウトを対象にしたファイル編集、メインのチェックアウトを作業ディレクトリにしたコマンド、そこへ向け直した git コマンド（`git -C`、`--git-dir`、`GIT_DIR`）を拒否します。ただし `cp` のような普通のシェルコマンドが書き込む先までは追跡しないので、権限とサンドボックスは引き続き重要です。",
        },
        {
          title: "普通のブランチと同じようにレビューしてマージする",
          text: "各 worktree は普通のブランチです。その中でコミットしてプッシュし、プルリクエストを作り、チームメンバーのものと同じようにレビューします。すべての worktree が `.git` を共有しているので、ブランチはメインのチェックアウトからもすぐに見えます。",
        },
        {
          title: "終了して後片付けする",
          text: "終了すると、Claude Code は worktree を確認します。名前のないセッションで変更のない worktree は、ブランチごと自動で削除されます。名前付きのセッションでは先に確認されます。変更、未追跡ファイル、新しいコミットがある場合は、worktree を残すか削除するかを尋ね、あとで戻るための `claude --worktree <name> --resume` コマンドを表示します。",
        },
      ],
      source: { label: "出典：Claude Code ドキュメント、Run parallel sessions with worktrees", href: docs },
    },
    {
      kind: "table",
      title: "Claude Code の worktree 設定",
      text: [
        "いずれも設定ファイル（`~/.claude/settings.json`、`.claude/settings.json`、`.claude/settings.local.json`）の `worktree` の下に書きます。",
      ],
      headers: ["設定", "内容", "既定値"],
      rows: [
        ["`worktree.baseRef`", "`\"fresh\"` はリモートの既定ブランチ（`origin/main`）から分岐し、`\"head\"` はプッシュしていないコミットも含めてローカルの HEAD から分岐する", "`\"fresh\"`"],
        ["`worktree.symlinkDirectories`", "`node_modules` などのディレクトリを複製せず、メインのチェックアウトからシンボリックリンクする", "なし"],
        ["`worktree.sparsePaths`", "sparse-checkout で、列挙したディレクトリ（とルートのファイル）だけをチェックアウトする。`.claude` を含めること", "ツリー全体"],
        ["`worktree.bgIsolation`", "`\"worktree\"` ではバックグラウンドセッションは worktree の中だけを編集し、`\"none\"` では作業コピーも編集できる", "`\"worktree\"`"],
        ["worktree の場所（デスクトップアプリ）", "Settings > Code でローカルセッション用のフォルダを指定できる。SSH 接続は別に設定する", "`.claude/worktrees/`"],
        ["`.worktreeinclude`（設定ではなくファイル）", "一致する gitignore 済みのファイルを新しい worktree ごとにコピーする", "なし"],
      ],
    },
    {
      kind: "table",
      title: "Claude Code の worktree、ブランチ、git worktree の違い",
      headers: ["", "ブランチの切り替え", "`git worktree add` + `claude`", "`claude --worktree`"],
      rows: [
        ["ディスク上で別のファイル", "いいえ：1つのディレクトリに一度に1ブランチ", "はい", "はい"],
        ["複数セッションを同時に", "いいえ：互いに上書きしてしまう", "はい", "はい"],
        ["作成場所", "自分のチェックアウト", "好きな場所", "`.claude/worktrees/<name>/`、または hook が指定するパス"],
        ["起点", "切り替え先のブランチ", "既存または新規の任意のブランチ", "`origin/<default>`、自分の HEAD、または PR"],
        ["`.env` のコピー", "不要", "いいえ", "はい（`.worktreeinclude` を使用）"],
        ["外部への編集をブロック", "いいえ", "いいえ", "はい"],
        ["後片付け", "なし", "`git worktree remove`", "終了時に提案される"],
      ],
    },
    {
      kind: "steps",
      id: "git-worktree",
      title: "git worktree で手動で行う",
      text: [
        "特定の既存ブランチを使いたいときや、リポジトリの外のフォルダに置きたいときは、素の git を使います。`worktree.baseRef` ではブランチ名を指定できないためです。こうして作った worktree でも、Claude Code はプラグインと権限承認を共有します。",
      ],
      steps: [
        {
          title: "worktree を作り、Claude を起動し、終わったら削除する",
          text: "`feature-a` を新しいブランチ名に置き換えるか、`-b` を外して既存のブランチをチェックアウトします。",
          code: manual,
        },
      ],
    },
    {
      kind: "text",
      title: "worktree でのサブエージェントとバックグラウンドセッション",
      points: [
        "Claude に「エージェントには worktree を使って」と頼むか、`.claude/agents/` にあるカスタムサブエージェントの frontmatter に `isolation: worktree` を追加すると、各サブエージェントは専用の一時的な worktree で編集します。",
        "変更のないサブエージェントの worktree は、サブエージェントの終了時に削除されます。変更のあるものは、`cleanupPeriodDays` の経過後、作業を失わずに削除できるようになるまで定期的なクリーンアップで残されます。",
        "バックグラウンドセッション（`claude --bg`）は、既定では worktree の中だけを編集します。`claude --bg --worktree` で始めるか、`worktree.bgIsolation` を `\"none\"` に設定してください。",
        "デスクトップアプリでは、セッションを始める前にプロンプト欄の下にある Worktree をオンにします。",
      ],
    },
    {
      kind: "text",
      title: "worktree の後片付けとよくある問題",
      points: [
        "`claude -p --worktree` の実行には終了時の確認がないため、worktree が残ります。`git worktree remove` で削除してください。git がロックされていると言う場合は、先に `git worktree unlock` を実行します。",
        "`Can only use --worktree in a git repository`：`git init` を実行して最初のコミットを作るか、SVN、Perforce、Mercurial 向けに `WorktreeCreate` hook を設定します。",
        "LFS を `--local` でインストールしていると、Git LFS のファイルがポインタファイルとして表示されます。worktree の中で `git lfs pull` を実行してください。",
        "`.claude` または `.claude/worktrees` がシンボリックリンクの場合、Claude Code は worktree を作成しません。",
        "hooks の `${CLAUDE_PROJECT_DIR}` はメインのチェックアウトを指したままです。worktree のパスは hook 入力の `cwd` フィールドから取得します。",
        "ベースが `\"fresh\"` で独自のコミットがない worktree や、PR がマージされた worktree は、名前を指定して開き直すと既定ブランチにリセットされます。",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Crewmark なら",
      title: "worktree はセッションを分け、Crewmark はセッションを働かせ続けます。",
      text: [
        "worktree で衝突の問題は解決しますが、各セッションはあなたが入力するまで待ったままです。Crewmark は、Claude Code、Codex、DeepSeek Harness、OpenCode のセッションを、職種・目標・勤務時間を持つ AI 社員に変え、ハートビートで起こしてボードから次の issue を取らせます。",
      ],
      steps: [
        {
          title: "worktree ごとに社員を1人",
          text: "各社員に専用の worktree と職種を与えます。たとえば同じリポジトリでプログラマーとレビュアーを置く構成です。[複数の Claude Code エージェント](/blog/multiple-claude-code-agents)もご覧ください。",
        },
        {
          title: "ハートビートで仕事を始めさせる",
          text: "勤務時間中、社員は15分、30分、60分ごとに同じ会話の中で起きます。詳しくは[Claude Code を能動的にする方法](/proactive-claude-code)をご覧ください。",
        },
        {
          title: "issue を割り当て、ブランチをレビューする",
          text: "ボードに仕事を置くと、各社員が issue を取り、自分のブランチにコミットし、判断が必要なときはメッセージを送ってきます。[AI 社員とは](/ai-employees)もご覧ください。",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "git worktree で Claude Code のセッションを並列に動かす" },
  mid: {
    title: "worktree が3つ、セッションが3つ。次の仕事は誰が指示しますか？",
    text: "Crewmark は、職種・目標・issue のボードを与え、ハートビートで Claude Code の各セッションを起こします。契約中のプランのままご利用いただけます。",
    button: "早期アクセスに登録",
  },
  faq: {
    title: "Claude Code の worktree のよくある質問",
    items: [
      {
        q: "Claude Code の worktree とは何ですか？",
        a: "リポジトリの履歴を共有しながら、独自のファイルとブランチを持つ別の git 作業ディレクトリです。`claude --worktree <name>` で作成し、その中でセッションを動かすので、並列のセッションが同じファイルを編集することはありません。",
      },
      {
        q: "Claude Code は worktree をどこに作りますか？",
        a: "リポジトリルートの `.claude/worktrees/<name>/` に、`worktree-<name>` という名前のブランチで作ります。デスクトップアプリでは Settings で別のフォルダを選べ、`WorktreeCreate` hook を使えばどこにでも置けます。",
      },
      {
        q: "Claude Code の worktree はどのブランチから始まりますか？",
        a: "既定ではリモートの既定ブランチ（通常は `origin/main`）です。ローカルの HEAD から分岐するには `worktree.baseRef` を `\"head\"` に設定し、プルリクエストから始めるには `\"#1234\"` を渡します。それ以外のブランチなら `git worktree add` で worktree を作ってください。",
      },
      {
        q: "worktree に .env ファイルがないのはなぜですか？",
        a: "worktree はまっさらなチェックアウトなので、gitignore されたファイルは入っていません。リポジトリルートの `.worktreeinclude` ファイルに列挙すれば、Claude Code が新しい worktree ごとにコピーします。",
      },
      {
        q: "Claude Code の worktree はどう後片付けしますか？",
        a: "セッションを終了すると worktree の削除が提案され、変更のない名前なしの worktree は自動で削除されます。`-p` 実行の worktree は残るので、`git worktree list` で一覧し、`git worktree remove` で削除します。",
      },
      {
        q: "worktree とブランチの違いは何ですか？",
        a: "ブランチはコミットの系列で、worktree はブランチをチェックアウトしたディレクトリです。ブランチを切り替えると1つのディレクトリのファイルが変わりますが、worktree なら各ブランチが専用のディレクトリを持つので、複数のセッションを同時に動かせます。",
      },
      {
        q: "サブエージェントは worktree を使えますか？",
        a: "はい。Claude にエージェントで worktree を使うよう頼むか、カスタムサブエージェントの frontmatter に `isolation: worktree` を追加します。それぞれが一時的な worktree を持ち、変更がなければ削除されます。",
      },
    ],
  },
  cta: {
    title: "worktree ごとに、次にやることがわかっている社員を。",
    text: "Crewmark は、Claude Code、Codex、DeepSeek Harness のセッションを、職種・目標・勤務時間・ハートビートを持つ AI 社員に変えます。",
    button: "早期アクセスに登録",
  },
  checked: "2026年11月6日に Claude Code のドキュメント（worktrees、settings、CLI reference、desktop）と照合しました。",
  disclaimer:
    "Crewmark は独立した製品であり、Anthropic とは提携しておらず、その承認も受けていません。Claude と Claude Code は Anthropic の商標です。",
};
