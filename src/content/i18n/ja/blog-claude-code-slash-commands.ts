import type { GuideCopy } from "@/components/landing/guide-article";

// Japanese translation of /blog/claude-code-slash-commands; the English master is src/content/blog/claude-code-slash-commands.ts.

const commands = "https://code.claude.com/docs/en/commands";

const skill = `---
description: Fix a GitHub issue by number, with a test
argument-hint: [issue-number]
disable-model-invocation: true
allowed-tools: Bash(gh issue view *)
---

Issue: !\`gh issue view $ARGUMENTS\`

CLAUDE.md の規約に従って、この issue を修正してください。
1. 問題を再現する失敗するテストを書く。
2. テストが通る最小限の変更を加える。
3. テストスイートを実行し、変更内容をまとめる。`;

const positional = `---
description: Migrate a component between frameworks
argument-hint: [component] [from] [to]
---

$0 コンポーネントを $1 から $2 に移行してください。
既存の動作をすべて保ち、テストが通る状態を維持すること。`;

export const copy: GuideCopy = {
  meta: {
    title: "Claude Code のスラッシュコマンド：早見表、カスタムコマンド、スキル | Crewmark",
    description:
      "Claude Code で覚えておきたいスラッシュコマンドの早見表と、引数付きのカスタムスラッシュコマンドの作り方、コマンドとスキルの関係を解説します。",
  },
  breadcrumb: "Claude Code スラッシュコマンド",
  parent: { name: "ブログ", href: "/blog" },
  article: { published: "2026-11-06" },
  hero: {
    kicker: "ブログ · Claude Code",
    title: "Claude Code のスラッシュコマンド：早見表と、自作コマンドの書き方",
    lead: "スラッシュコマンドは、`/init`、`/compact`、`/code-review` のように Claude Code のメッセージの先頭に入力するショートカットで、セッションを操作したり保存したプロンプトを実行したりします。このガイドでは、覚えておきたいコマンドを使う場面ごとにまとめた早見表を紹介し、引数付きのカスタムスラッシュコマンドの作り方と、スキルとの関係を説明します。",
    cta: "早期アクセスに登録",
    secondary: "カスタムコマンドへ移動",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "スラッシュコマンドのしくみ",
      text: [
        "Claude Code で `/` を入力すると使えるコマンドがすべて表示され、続けて入力すると一覧が絞り込まれます。コマンドとして扱われるのはメッセージの先頭にあるときだけで、名前のあとに書いたものはすべて引数になります。",
      ],
      points: [
        "組み込みコマンドは CLI に実装されているもので、`/clear`、`/model`、`/compact` などがあります。",
        "バンドルスキルは Claude Code に同梱され、Claude に渡すプロンプトとして動きます。`/simplify`、`/loop`、`/batch` などです。",
        "カスタムコマンドは自分で書くものです。`.claude/skills/` のスキルか、従来の `.claude/commands/` のファイルで作ります。プラグインや MCP サーバーが追加することもあります。",
        "Claude の応答中にコマンドを送ると、現在のターンのあとに実行されます。`/status` や `/usage` など一部はすぐに実行されます。",
        "すべてのコマンドが誰にでも表示されるわけではありません。プラットフォーム、プラン、組織のポリシーによって変わるものがあります。",
      ],
    },
    {
      kind: "table",
      id: "cheat-sheet",
      title: "Claude Code スラッシュコマンド早見表",
      text: ["よく使われるコマンドを、セッションで必要になる順に並べました。"],
      headers: ["場面", "コマンド", "内容"],
      rows: [
        ["セットアップ", "`/init`", "プロジェクト用の CLAUDE.md のひな形を書く"],
        ["セットアップ", "`/memory`", "CLAUDE.md ファイルを編集し、自動メモリをオン・オフする"],
        ["セットアップ", "`/mcp`", "MCP サーバーの接続を管理する"],
        ["セットアップ", "`/permissions`", "ツールの allow、ask、deny ルールを管理する"],
        ["セットアップ", "`/config`", "テーマ、モデル、出力スタイルなどの設定を開く"],
        ["タスク中", "`/plan`", "大きな変更の前にプランモードに切り替える"],
        ["タスク中", "`/model`、`/effort`", "モデルと、推論にかける量を変える"],
        ["タスク中", "`/context`", "コンテキストウィンドウを何が占めているかを表示する"],
        ["タスク中", "`/compact [instructions]`", "ここまでの会話を要約してコンテキストを空ける"],
        ["タスク中", "`/btw [question]`", "会話に追加せずに、ちょっとした質問をする"],
        ["タスク中", "`/goal`", "Claude が達成に向けて作業し続ける条件を設定する"],
        ["並列作業", "`/tasks`", "セッションのバックグラウンド作業とサブエージェントを一覧する"],
        ["並列作業", "`/background`", "セッションを切り離し、バックグラウンドエージェントとして動かす"],
        ["並列作業", "`/batch <instruction>`", "コードベース全体の変更を単位に分け、それぞれを専用の worktree で進める"],
        ["並列作業", "`/fork`", "会話を新しいバックグラウンドセッションにコピーする"],
        ["リリース前", "`/diff`", "作業ツリーの変更を表示する"],
        ["リリース前", "`/code-review`", "現在の差分や PR のバグをレビューする。`/review` は別名"],
        ["リリース前", "`/security-review`", "ブランチの変更に脆弱性がないか確認する"],
        ["セッションの合間", "`/clear`", "コンテキストを空にして新しい会話を始める"],
        ["セッションの合間", "`/resume`、`/rename`", "以前の会話に戻る。この会話に名前を付ける"],
        ["セッションの合間", "`/branch`、`/rewind`", "会話を分岐させる。コードと会話をチェックポイントまで巻き戻す"],
        ["自動化", "`/loop [interval] [prompt]`", "セッションが開いている間、プロンプトを繰り返す"],
        ["自動化", "`/schedule`", "クラウドのスケジュールタスクを作成・管理する"],
        ["困ったとき", "`/doctor`、`/debug`", "セットアップの問題を診断する。セッションのデバッグログを読む"],
        ["困ったとき", "`/usage`、`/status`", "コストとプランの上限を表示する（`/cost` と `/stats` は別名）。バージョン、モデル、アカウントを表示する"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "カスタムスラッシュコマンドの作り方",
      text: [
        "カスタムコマンドはスキルに統合されました。`.claude/commands/fix-issue.md` のファイルも `.claude/skills/fix-issue/SKILL.md` のスキルも、どちらも `/fix-issue` を作り、同じように動きます。補助ファイルを置けるため、新しいコマンドにはスキルの形式が推奨されています。",
      ],
      steps: [
        {
          title: "フォルダと SKILL.md を作る",
          text: "チーム全員で使うコマンドなら、リポジトリに `.claude/skills/<name>/SKILL.md` を作ってコミットします。自分だけがすべてのプロジェクトで使うなら `~/.claude/skills/<name>/SKILL.md` に置きます。フォルダ名がそのままコマンドになり、`fix-issue` なら `/fix-issue` です。",
        },
        {
          title: "frontmatter を書く",
          text: "`---` の行で囲んだ中に、`description`（Claude がスキルを使う場面の判断に使います）、メニューに想定する引数を表示する `argument-hint`、自分だけが起動すべきもの（デプロイなど副作用のあるもの）には `disable-model-invocation: true`、そのターンでツールを事前承認する `allowed-tools` を書きます。",
        },
        {
          title: "引数を使ってプロンプトを書く",
          text: "frontmatter の下に、指示を Markdown で書きます。`$ARGUMENTS` はコマンドのあとに入力したすべてに置き換わり、`$0`、`$1` など（または `$ARGUMENTS[0]`）で個々の引数を取り出せます。`` !`command` `` の行は、そのシェルコマンドを先に実行し、出力をプロンプトに貼り込みます。",
          code: skill,
        },
        {
          title: "実行する",
          text: "`/fix-issue 123` と入力します。セッション中に追加・変更したスキルは自動で読み込まれます。表示されない場合は `/reload-skills` を実行してください。`disable-model-invocation` がなければ、依頼内容が説明と一致したときに Claude が自分でスキルを実行することもあります。",
        },
        {
          title: "複数の要素を取るコマンドには位置引数を使う",
          text: "`/migrate-component SearchBar React Vue` を実行すると、`$0`、`$1`、`$2` に順に入ります。",
          code: positional,
        },
      ],
      source: { label: "出典：Claude Code ドキュメント、Commands と Skills", href: commands },
    },
    {
      kind: "table",
      title: "カスタムスラッシュコマンドの置き場所",
      headers: ["場所", "パス", "コマンド名"],
      rows: [
        ["個人", "`~/.claude/skills/<name>/SKILL.md`", "すべてのプロジェクトで `/<name>`"],
        ["プロジェクト", "`.claude/skills/<name>/SKILL.md`", "リポジトリの全員が `/<name>`"],
        ["従来のコマンドファイル", "`.claude/commands/<name>.md`", "`/<name>`。サブフォルダは接頭辞になる（例：`commands/frontend/component.md` → `/frontend:component`）"],
        ["プラグイン", "`<plugin>/skills/<name>/SKILL.md`", "`/<plugin>:<name>`"],
        ["MCP サーバー", "サーバーが公開するプロンプト", "`/` メニューに表示される"],
      ],
    },
    {
      kind: "table",
      title: "スラッシュコマンドとスキルの違い",
      text: [
        "統合されてからは、「どちらを使うか」よりも「どのファイル形式にするか」の問題です。スキルとコマンドファイルの名前が同じ場合は、スキルが優先されます。",
      ],
      headers: ["", "`.claude/commands/<name>.md`", "`.claude/skills/<name>/SKILL.md`"],
      rows: [
        ["`/<name>` を作る", "はい", "はい"],
        ["frontmatter", "`name` と `paths` 以外は同じ項目", "すべての項目"],
        ["補助ファイル（スクリプト、テンプレート）", "いいえ", "はい、スキルのフォルダに置ける"],
        ["Claude が自分で読み込める", "はい（`disable-model-invocation: true` でない限り）", "はい（`disable-model-invocation: true` でない限り）"],
        ["位置づけ", "引き続き動作する", "新規作成に推奨"],
      ],
    },
    {
      kind: "text",
      title: "ヒントと注意点",
      points: [
        "ターミナルのプロンプトではスキルを重ねられます。`/write-tests /fix-issue 123` は両方を読み込み、それぞれに `123` を渡します（最大6つ）。`claude -p` と Agent SDK では最初の1つだけが読み込まれます。",
        "覚えている組み込みコマンドがなくなっていることがあります。`/pr-comments`、`/vim`、`/ultraplan` は削除されました。`/help` かドキュメントで確認してください。",
        "`allowed-tools` が権限を与えるのはスキルを呼び出したターンだけですが、リポジトリのスキルは自分自身にツールを許可できます。見慣れないリポジトリで Claude Code を動かす前に、中身を読んでおきましょう。",
        "すべてのスキルの説明はコンテキストに入ります。`/skill-doctor` で、それぞれのコストと使用頻度を確認できます。長い手順は [CLAUDE.md](/blog/claude-md) ではなくスキルに置きましょう。",
        "`/loop` がプロンプトを繰り返すのは、セッションが開いている間だけです。仕事が自動で始まるようにするには、[Claude Code を能動的にする方法](/proactive-claude-code)をご覧ください。",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Crewmark なら",
      title: "スラッシュコマンドはあなたを速くし、Crewmark は Claude Code をあなたなしで動かします。",
      text: [
        "どのスラッシュコマンドも、入力するにはあなたがキーボードの前にいる必要があります。Crewmark は、Claude Code、Codex、DeepSeek Harness、OpenCode のセッションを、職種・目標・勤務時間を持つ AI 社員に変え、ハートビートで起こしてボードから次の issue を取らせます。使うのは、あなたが用意したのと同じスキルとコマンドです。",
      ],
      steps: [
        {
          title: "スキルはリポジトリに置いておく",
          text: "`.claude/skills/` と CLAUDE.md は、あなたのセッションと同じように社員のセッションでも読み込まれるので、`/fix-issue` も規約もそのまま引き継がれます。",
        },
        {
          title: "ハートビートで仕事を始めさせる",
          text: "勤務時間中、社員は15分、30分、60分ごとに同じ会話の中で起き、次の issue を取ります。複数の社員が1つのリポジトリを共有し、それぞれ専用の [worktree](/blog/claude-code-worktree) で作業することもできます。",
        },
        {
          title: "issue を割り当て、メッセージに答える",
          text: "ボードに仕事を置くと、社員は進捗をコメントし、判断が必要なときはメッセージを送ってきます。[AI 社員とは](/ai-employees)もご覧ください。",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Claude Code でカスタムスラッシュコマンドを作る" },
  mid: {
    title: "入力は自動化できました。次に何を入力するかは誰が決めますか？",
    text: "Crewmark は、職種・目標・issue のボードを与え、ハートビートで Claude Code を起こします。契約中のプランのままご利用いただけます。",
    button: "早期アクセスに登録",
  },
  faq: {
    title: "Claude Code のスラッシュコマンドのよくある質問",
    items: [
      {
        q: "Claude Code のスラッシュコマンドをすべて見るには？",
        a: "メッセージの先頭で `/` を入力するとメニューが開き、続けて入力すると絞り込めます。`/help` と `/skills` でも一覧でき、Claude Code ドキュメントの Commands ページに完全なリファレンスがあります。",
      },
      {
        q: "Claude Code でカスタムスラッシュコマンドを作るには？",
        a: "短い frontmatter とプロンプトを書いた `.claude/skills/<name>/SKILL.md`（すべてのプロジェクトで使うなら `~/.claude/skills/<name>/SKILL.md`）を作ります。これが `/<name>` になります。従来の `.claude/commands/<name>.md` ファイルも使えます。",
      },
      {
        q: "スラッシュコマンドに引数を渡すには？",
        a: "コマンド名のあとに入力します。プロンプトでは、`$ARGUMENTS` に入力したすべてが入り、`$0`、`$1` などに個々の引数が入ります。frontmatter に `argument-hint` を追加すると、想定する引数を表示できます。",
      },
      {
        q: "スラッシュコマンドとスキルの違いは何ですか？",
        a: "カスタムスラッシュコマンドはスキルに統合されました。どちらも `/name` を作り、同じように動きます。スキルは補助ファイル用のフォルダを持てる推奨の形式で、`.claude/commands/` のコマンドファイルも引き続き動作します。",
      },
      {
        q: "スラッシュコマンドは非推奨になったのですか？",
        a: "いいえ。`/name` の入力は、あらゆるコマンドやスキルを実行する方法です。変わったのはカスタムコマンドのファイル形式で、`.claude/commands/` も動きますがスキルが推奨されています。個別の組み込みコマンドのいくつかは削除されました。",
      },
      {
        q: "Claude はスラッシュコマンドを自分で実行できますか？",
        a: "はい。依頼内容がスキルの説明と一致すれば実行します。自分が入力したときだけ実行させたい場合は、frontmatter に `disable-model-invocation: true` を追加します。",
      },
      {
        q: "スラッシュコマンドはヘッドレスモードで使えますか？",
        a: "カスタムスキルは使えます。`-p` は対話セッションと同じようにスキルとカスタムコマンドを読み込むので、`claude -p \"/fix-issue 123\"` で実行できます。読み込まれるのはメッセージ内の最初のスキルだけで、`--bare` ではスキルの検出自体が行われません。",
      },
    ],
  },
  cta: {
    title: "Claude Code のスキルを実行する社員を。",
    text: "Crewmark は、Claude Code、Codex、DeepSeek Harness のセッションを、職種・目標・勤務時間・ハートビートを持つ AI 社員に変えます。",
    button: "早期アクセスに登録",
  },
  checked: "2026年11月6日に Claude Code のドキュメント（commands、skills）と照合しました。",
  disclaimer:
    "Crewmark は独立した製品であり、Anthropic とは提携しておらず、その承認も受けていません。Claude と Claude Code は Anthropic の商標です。",
};
