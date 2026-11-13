import type { GuideCopy } from "@/components/landing/guide-article";

// Japanese translation of /blog/claude-code-skills; the English master is src/content/blog/claude-code-skills.ts.

const docs = "https://code.claude.com/docs/en/skills";

const first = `---
description: Summarizes uncommitted changes and flags anything risky. Use when the user asks what changed, wants a commit message, or asks to review their diff.
---

## 現在の変更

!\`git diff HEAD\`

## 指示

上の変更を2〜3個の箇条書きでまとめ、エラー処理の漏れ、ハードコードされた値、
更新が必要なテストなど、リスクになりそうな点を挙げてください。`;

const reference = `---
description: API design conventions for this codebase. Use when writing or reviewing HTTP endpoints.
paths: ["src/api/**"]
---

API エンドポイントを書くとき：
- RESTful な名前と複数形のリソース名を使う
- エラーは { error: { code, message } } の形で返す
- リクエストボディは src/api/schemas/ のスキーマで検証する`;

const layout = `release/
├── SKILL.md          # 手順と、ほかのファイルを読むタイミング
├── checklist.md      # SKILL.md が指示したときだけ読み込まれる
└── scripts/
    └── bump.sh       # 実行されるだけで、コンテキストには読み込まれない`;

const fork = `---
description: Audit dependencies for known vulnerabilities and outdated majors
context: fork
agent: Explore
disable-model-invocation: true
---

パッケージマネージャーの audit を実行し、high または critical の指摘をすべて
修正バージョンとともに挙げ、遅れているメジャーバージョンを報告してください。ファイルは変更しないこと。`;

export const copy: GuideCopy = {
  meta: {
    title: "Claude Code のスキル：作り方、例、ベストプラクティス | Crewmark",
    description:
      "Claude Code のスキルとは何か、どう読み込まれるか、SKILL.md での作り方と例、補助ファイル、サブエージェントでの実行、プラグインからのインストール、ベストプラクティスまで解説します。",
  },
  breadcrumb: "Claude Code スキルガイド",
  parent: { name: "ブログ", href: "/blog" },
  article: { published: "2026-11-06" },
  hero: {
    kicker: "ブログ · Claude Code",
    title: "Claude Code のスキル：作り方と例、ベストプラクティス",
    lead: "Claude Code のスキルは、`SKILL.md` ファイルを入れたフォルダです。中身は、いつ使うかの説明と、従うべき指示です。Claude は必要になるまで説明だけを見ていて、必要になったときに全体を読み込みます。そのため、長い手順や参考資料を手元に置いておいても、メッセージのたびにコストがかかることはありません。このガイドでは、スキルの読み込まれ方、最初のスキルの書き方、例、補助ファイル、サブエージェントで動くスキル、プラグインからのインストール、そして Claude に実際に使わせるコツを説明します。",
    cta: "早期アクセスに登録",
    secondary: "最初のスキルを作る",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "Claude Code のスキルとは",
      text: [
        "同じ指示やチェックリスト、複数ステップの手順を何度もチャットに貼り付けているとき、あるいは CLAUDE.md の一部が事実の記述から手順へと膨らんできたときが、スキルを作るタイミングです。スキルはオープンな Agent Skills 標準（agentskills.io）に準拠しており、ほかの AI ツールも読み込めます。Claude Code はそこに、起動の制御、サブエージェントでの実行、プロンプトへのシェル出力の埋め込みといった機能を加えています。",
      ],
      points: [
        "実行方法は2つあります。依頼内容が `description` と一致したときに Claude が読み込むか、自分で `/skill-name` と入力します。",
        "使うまではほとんどコストがかかりません。コンテキストに入るのは名前と説明だけで、本文はスキルの実行時に読み込まれます。手動でのみ実行するよう設定したスキルは、説明すら一覧に載りません。",
        "カスタムスラッシュコマンドはスキルになりました。`.claude/commands/<name>.md` も引き続き動きますが、スキルのフォルダには補助ファイルも置けます。詳しくは [Claude Code のスラッシュコマンド](/blog/claude-code-slash-commands)をご覧ください。",
        "Claude Code には `/simplify`、`/loop`、`/batch`、`/debug` などのバンドルスキルも同梱されています。",
      ],
    },
    {
      kind: "table",
      title: "スキル、CLAUDE.md、サブエージェント、プラグイン、MCP の違い",
      headers: ["", "正体", "読み込まれるタイミング", "用途"],
      rows: [
        ["CLAUDE.md", "プロジェクトの指示", "毎セッション、全文", "Claude が常に知っておくべき事実と規約。[CLAUDE.md ガイド](/blog/claude-md)を参照"],
        ["スキル", "`SKILL.md` を入れたフォルダ", "説明は常に、本文は使うときに", "手順、チェックリスト、参考資料、繰り返し使うプロンプト"],
        ["サブエージェント", "独自のコンテキストを持つ別の作業者", "Claude が委任したとき", "詳細で会話を埋めたくない脇道のタスク"],
        ["プラグイン", "スキル、エージェント、フック、MCP サーバーのパッケージ", "インストールして有効にしたとき", "チームとのスキル共有、他人のスキルの導入"],
        ["MCP サーバー", "外部ツールやデータソースへの接続", "接続したとき", "データベースや issue トラッカーなど、新しいツールを Claude に与える"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Claude Code のスキルの作り方",
      steps: [
        {
          title: "置き場所を決める",
          text: "自分がすべてのプロジェクトで使うなら `~/.claude/skills/<name>/`、そのリポジトリで作業する全員で使うなら、リポジトリの `.claude/skills/<name>/` に置いてコミットします。フォルダ名がそのままコマンドになり、`summarize-changes` なら `/summarize-changes` です。",
        },
        {
          title: "SKILL.md を書く：まず説明、次に指示",
          text: "frontmatter はファイルの一番上、`---` の行で囲んだ中に書きます。推奨されている項目は `description` だけです。用途と、ユーザーが実際に口にしそうな言葉を先頭に書きましょう。その下に、指示を Markdown で書きます。`` !`command` `` で始まる行は、そのコマンドを先に実行して出力を貼り込むので、スキルが実際の状態をもとに動けます。",
          code: first,
        },
        {
          title: "両方の方法で試す",
          text: "未コミットの変更がある git プロジェクトで `claude` を起動します。「何を変更した？」と聞いて Claude が自分でスキルを使うかを確かめ、次に `/summarize-changes` と入力して直接実行します。セッション中に追加したスキルは自動で読み込まれます。表示されない場合は `/reload-skills` を実行してください。",
        },
        {
          title: "誰が実行できるかを決める",
          text: "デプロイやメッセージ送信など副作用のあるものには `disable-model-invocation: true` を追加し、自分だけが起動できるようにします。Claude だけが読み込むべき背景知識には `user-invocable: false` を追加します。入力を渡すには、スラッシュコマンドのガイドで紹介したとおり `$ARGUMENTS` を使います。",
        },
        {
          title: "共有する",
          text: "`.claude/skills/` をリポジトリにコミットするか、複数のリポジトリやチームで使うならスキルをプラグインとしてパッケージします。",
        },
      ],
      source: { label: "出典：Claude Code ドキュメント、Extend Claude with skills", href: docs },
    },
    {
      kind: "steps",
      id: "examples",
      title: "Claude Code のスキルの例",
      steps: [
        {
          title: "一致するファイルのときだけ読み込まれる参照スキル",
          text: "参照スキルには、Claude が作業中に適用する規約を書きます。`paths` を指定すると、自動で読み込まれるのは glob に一致するファイルを扱うときだけになります。",
          code: reference,
        },
        {
          title: "補助ファイルを持つタスクスキル",
          text: "SKILL.md は短くまとめ、残りはほかのファイルを指し示します。Claude は SKILL.md の指示があったときだけ `checklist.md` を読み、`bump.sh` は読まずに実行するので、詳細は必要になるまでコストがかかりません。",
          code: layout,
        },
        {
          title: "専用のサブエージェントで動くスキル",
          text: "`context: fork` は、スキルをプロンプトとしてサブエージェント（ここでは読み取り専用の Explore タイプ）を起動します。サブエージェントはあなたの会話を見られないので、指示はそれだけで完結している必要があります。`background: false` を設定しない限り、バックグラウンドで実行されます。",
          code: fork,
        },
      ],
    },
    {
      kind: "text",
      title: "プラグインとマーケットプレイスからスキルをインストールする",
      text: [
        "他人が書いたスキルは、たいていプラグインに入って届きます。Claude Code は初めて対話セッションを起動したときに Anthropic の公式マーケットプレイス（`claude-plugins-official`）を登録します。`/plugin` で一覧を見るか、`/plugin install skill-creator@claude-plugins-official` のように直接インストールできます。チームやコミュニティのマーケットプレイスは、先に `/plugin marketplace add owner/repo` で追加します。",
      ],
      points: [
        "プラグインのスキルは `/plugin-name:skill-name` という名前になります。",
        "公式マーケットプレイスでは、各プラグインのターンごとのコンテキストコストと、呼び出したときのコストが表示されます。",
        "skill-creator プラグインはスキルの作成を手伝い、スキルがある場合とない場合の結果を比べる評価も実行します。",
        "リポジトリやプラグインのスキルは、信頼する前に中身を読みましょう。`allowed-tools` は、スキルが実行されるターンのツールを事前承認できます。",
      ],
    },
    {
      kind: "text",
      title: "ベストプラクティスと、Claude がスキルを使わないとき",
      points: [
        "説明はマッチングのために書きます。仕事の内容とユーザーが使う言い回しを先頭に置きましょう。一覧では、説明と `when_to_use` を合わせて1,536文字で切り詰められます。",
        "最も重要な指示は上のほうに書きます。会話が圧縮されると、Claude Code は呼び出したスキルの冒頭だけを残すことがあります。その場合はもう一度呼び出せば元に戻ります。",
        "スキルのファイルは後のターンで読み直されないので、タスク全体に関わる指示（「編集のたびにテストを実行する」など）として書きましょう。絶対に省略してはいけないルールはフックに置きます。",
        "トークン使用量を減らすには、手順を CLAUDE.md からスキルに移し、手動で実行するスキルには `disable-model-invocation: true` を設定し、`/skill-doctor` でコンテキストを使うわりにあまり使われていないスキルを確認します。",
        "起動しない場合は、説明に適切なキーワードがあるかを確認し、「使えるスキルは？」と聞き、`claude plugin validate .claude/skills` を実行して解析できない frontmatter を探します。",
        "起動しすぎる場合は、説明を絞り込むか、`disable-model-invocation: true` で手動実行に切り替えます。",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Crewmark なら",
      title: "スキルは Claude Code にやり方を教え、Crewmark は毎時間やるべき仕事を与えます。",
      text: [
        "スキルのライブラリがあれば各セッションは有能になりますが、それでもあなたの依頼を待っています。Crewmark は、Claude Code、Codex、DeepSeek Harness、OpenCode のセッションを、職種・目標・勤務時間を持つ AI 社員に変え、ハートビートで起こしてボードから次の issue を取らせます。プロジェクトのスキルも読み込まれた状態です。",
      ],
      steps: [
        {
          title: "スキルはリポジトリに置いておく",
          text: "社員のセッションは、あなたのセッションと同じように `.claude/skills/` と CLAUDE.md を読み込むので、リリース用のスキルやレビューのチェックリストもそのまま引き継がれます。",
        },
        {
          title: "ハートビートで仕事を始めさせる",
          text: "勤務時間中、社員は15分、30分、60分ごとに同じ会話の中で起き、次の issue を取ります。[Claude Code を能動的にする方法](/proactive-claude-code)もご覧ください。",
        },
        {
          title: "issue を割り当て、メッセージに答える",
          text: "ボードに仕事を置くと、社員は進捗をコメントし、判断が必要なときはメッセージを送ってきます。[AI 社員とは](/ai-employees)もご覧ください。",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Claude Code のスキルを作る" },
  mid: {
    title: "スキルは準備できました。あなたがいない間、誰が実行しますか？",
    text: "Crewmark は、職種・目標・issue のボードを与え、ハートビートで Claude Code を起こします。契約中のプランのままご利用いただけます。",
    button: "早期アクセスに登録",
  },
  faq: {
    title: "Claude Code のスキルのよくある質問",
    items: [
      {
        q: "Claude Code のスキルとは何ですか？",
        a: "タスクの指示や参考知識をまとめた `SKILL.md` ファイルを入れたフォルダです。依頼内容が説明と一致すると Claude が読み込み、`/skill-name` で自分で実行することもできます。",
      },
      {
        q: "Claude Code のスキルはどこに置きますか？",
        a: "すべてのプロジェクトで使う個人用のスキルは `~/.claude/skills/<name>/SKILL.md`、チームで使うならリポジトリの `.claude/skills/<name>/SKILL.md`、またはプラグインの中に置きます。",
      },
      {
        q: "Claude Code に自分のスキルを使わせるには？",
        a: "タスクと、それを頼むときに使う言葉を説明に書きます。「使えるスキルは？」と聞いてスキルが表示されるかを確認するか、`/skill-name` で直接実行します。",
      },
      {
        q: "スキルとサブエージェントの違いは？",
        a: "スキルは会話に読み込まれる指示で、サブエージェントは独自のコンテキストを持つ別の作業者です。`context: fork` を設定したスキルは両者を組み合わせたもので、スキルをプロンプトとしてサブエージェントとして実行されます。",
      },
      {
        q: "スキルとプラグインの違いは？",
        a: "プラグインは、スキル、サブエージェント、フック、MCP サーバーをパッケージにして共有するための形式です。プラグインをインストールすればそのスキルが使えますし、プラグインなしで自分の `.claude/skills/` にスキルを書くこともできます。",
      },
      {
        q: "スキルはトークンを多く使いますか？",
        a: "コンテキストに常に入っているのは説明だけで、本文はスキルの実行時に読み込まれます。手動専用に設定したスキルは説明すら一覧に載りません。長い手順を CLAUDE.md からスキルに移すと、たいていトークン使用量は減ります。",
      },
      {
        q: "Claude Code のスキルはどこで見つけられますか？",
        a: "Anthropic の公式プラグインマーケットプレイス（`/plugin` または claude.com/marketplace で閲覧できます）、`/plugin marketplace add` で追加するチームやコミュニティのマーケットプレイス、そして公開されている GitHub リポジトリで見つかります。",
      },
    ],
  },
  cta: {
    title: "Claude Code のスキルを、スケジュールどおりに動かしましょう。",
    text: "Crewmark は、Claude Code、Codex、DeepSeek Harness のセッションを、職種・目標・勤務時間・ハートビートを持つ AI 社員に変えます。",
    button: "早期アクセスに登録",
  },
  checked: "2026年11月6日に Claude Code のドキュメント（skills、plugins）と照合しました。",
  disclaimer:
    "Crewmark は独立した製品であり、Anthropic とは提携しておらず、その承認も受けていません。Claude と Claude Code は Anthropic の商標です。",
};
