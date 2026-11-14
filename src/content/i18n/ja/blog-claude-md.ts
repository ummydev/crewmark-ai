import type { GuideCopy } from "@/components/landing/guide-article";

// Japanese translation of /blog/claude-md; the English master is src/content/blog/claude-md.ts.

const memory = "https://code.claude.com/docs/en/memory";

const example = `# Commands
- Install: pnpm install
- One test file: pnpm vitest run path/to/file.test.ts
- Typecheck: pnpm tsc --noEmit

# Conventions
- エラーは src/lib/errors.ts のヘルパーで投げる。生の文字列は投げない。
- src/legacy/ は今も稼働中だが、そのパターンは真似しない。

# Gotchas
- 統合テストには DATABASE_URL が必要（.env.example を参照）。`;

const rule = `---
paths: ["src/api/**/*.ts"]
---
- すべてのハンドラは src/api/schemas/ のスキーマで入力を検証する。`;

export const copy: GuideCopy = {
  meta: {
    title: "CLAUDE.md の書き方：置き場所・テンプレート | Crewmark AI",
    description:
      "Claude Code での CLAUDE.md の仕組み：ファイルの置き場所と読み込み順、インポートとルール、何を書くか、テンプレート、AGENTS.md との関係を解説します。",
  },
  breadcrumb: "CLAUDE.md ガイド",
  parent: { name: "ブログ", href: "/blog" },
  article: { published: "2026-11-05" },
  hero: {
    kicker: "ブログ · Claude Code",
    title: "CLAUDE.md：置き場所、書く内容、AGENTS.md との併用",
    lead: "CLAUDE.md は、Claude Code がセッションの開始時に毎回読み込む markdown の指示ファイルです。実行するコマンド、守る規約、避けるべき落とし穴をプロジェクトごとに書いておきます。このガイドでは、CLAUDE.md を置ける場所と読み込み順、インポートとルールファイル、書くべきこと・書かないほうがよいこと、短いテンプレート、AGENTS.md との関係を説明します。",
    cta: "今すぐ始める",
    secondary: "テンプレートへ移動",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "CLAUDE.md とは",
      text: [
        "Claude Code は、セッションを始めるたびに前回の記憶を持っていません。CLAUDE.md は、新しいチームメンバーに必要な背景を渡す手段です。起動時に読み込まれ、システムプロンプトの後にメッセージとして Claude に送られます。つまり強制される設定ではなく、あくまでコンテキストです。Claude は通常それに従いますが、必ず実行する、または絶対に起こさないことは hooks や権限ルールに置いてください。",
      ],
      points: [
        "ふつうの markdown で、必須項目はありません。見出しと短い箇条書きが最も効果的です。",
        "ファイルは上書きではなく結合されます。該当する CLAUDE.md はすべて読み込まれるため、矛盾する行があると Claude がどちらかを選びます。",
        "読み込まれた内容は `/context all` の Memory files で確認できます。",
      ],
    },
    {
      kind: "table",
      title: "CLAUDE.md の置き場所と読み込み順",
      text: [
        "Claude Code は、最も広い範囲から最も具体的な範囲の順に読み込むため、起動した場所に最も近いファイルが最後に読まれます。また、作業ディレクトリから上に向かってたどり、すべての親ディレクトリの CLAUDE.md を読み込みます。",
      ],
      headers: ["スコープ", "場所", "用途"],
      rows: [
        ["管理ポリシー", "`/Library/Application Support/ClaudeCode/CLAUDE.md`（macOS）、`/etc/claude-code/CLAUDE.md`（Linux）、`C:\\Program Files\\ClaudeCode\\CLAUDE.md`（Windows）", "組織が全開発者に設定するルール"],
        ["ユーザー", "`~/.claude/CLAUDE.md`", "すべてのプロジェクトで使う自分の好み"],
        ["プロジェクト", "`./CLAUDE.md` または `./.claude/CLAUDE.md`", "チームの指示。git にコミットする"],
        ["ローカル", "`./CLAUDE.local.md`", "1つのプロジェクトでの自分用メモ。.gitignore に追加する"],
        ["サブディレクトリ", "`some/dir/CLAUDE.md`", "Claude がそのディレクトリのファイルを読むか編集したときだけ読み込まれる"],
        ["ルール", "`.claude/rules/*.md` と `~/.claude/rules/`", "トピック別のファイル。`paths` の glob を付けると、一致するファイルのときだけ読み込まれる"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "効果のある CLAUDE.md の書き方",
      steps: [
        {
          title: "/init から始める",
          text: "プロジェクトで `/init` を実行します。Claude Code がコードベースを読んで、最初の CLAUDE.md を書きます。すでにある場合は、上書きせずに改善案を提案します。`.cursorrules` や Copilot の指示も取り込みます。",
        },
        {
          title: "Claude が自分では見つけられないことだけに絞る",
          text: "正確なビルド・テスト・lint のコマンド（1つのテストだけを実行する方法を含む）、コードが紛らわしい箇所、どこにも書かれていない決定、2回修正したことがあるものを残します。ファイルツリーや、リポジトリから読み取れるアーキテクチャは削ります。Anthropic は200行以内を勧めています。",
          code: example,
        },
        {
          title: "具体的に、ただし大声は出さない",
          text: "「コードを適切に整形する」ではなく「インデントは2スペース」と書きます。最新のドキュメントでは、IMPORTANT や全部大文字は古いアドバイスだとされています。Claude がルールを過剰に適用してしまうためです。ある行が守られ続けない場合は、ファイルを短くするか、そのルールを hook にしましょう。",
        },
        {
          title: "インポートとルールで分割する",
          text: "`@path/to/file` は別のファイルをインポートします（インポート元のファイルからの相対パスで、最大4階層）。バッククォート内の `@` はそのまま文字として扱われます。コードベースの一部だけに当てはまるルールは、`paths` の glob を付けて `.claude/rules/` に置くと、Claude が一致するファイルに触れたときだけ読み込まれます。",
          code: rule,
        },
        {
          title: "手順はスキルに移す",
          text: "リリースの切り方のような複数ステップのワークフローは、スキル（`.claude/skills/<name>/SKILL.md`）に置きます。スキルは関係があるときだけ読み込まれます。CLAUDE.md はあらゆるタスクで読まれるので、1行ごとに注意力を消費します。",
        },
        {
          title: "最新に保つ",
          text: "Claude が同じミスを繰り返したときやレビューで指摘があったときに1行足します。編集は `/memory` を使うか、Claude に更新を頼みます。ファイルが長くなりすぎたら、`/doctor` が削減案を出します。",
        },
      ],
      source: { label: "出典：Claude Code ドキュメント、How Claude remembers your project", href: memory },
    },
    {
      kind: "table",
      title: "CLAUDE.md と AGENTS.md の違い",
      text: [
        "AGENTS.md は、コーディングエージェント向けの指示のオープンな形式で、Codex、Cursor、Gemini CLI、GitHub Copilot のコーディングエージェント、opencode などが使っています。Claude Code も読み込めるようになりましたが、既定ではプロジェクトに CLAUDE.md がないときだけです。",
      ],
      headers: ["", "CLAUDE.md", "AGENTS.md"],
      rows: [
        ["読むもの", "Claude Code", "Codex、Cursor、Gemini CLI、Copilot、opencode など。Claude Code はフォールバックとして"],
        ["Claude Code が読むとき", "常に", "既定では、ツリー内に CLAUDE.md、`.claude/CLAUDE.md`、CLAUDE.local.md がないときだけ。`/config` で両方読むこともできる"],
        ["個人用ファイル", "`CLAUDE.local.md`", "Claude Code は読まない（`AGENTS.override.md` は Codex 用）"],
        ["インポート", "`@path`、最大4階層", "形式には存在しない"],
        ["パス単位のルール", "`.claude/rules/` と `paths`", "ディレクトリごとにネストした AGENTS.md ファイル"],
      ],
    },
    {
      kind: "text",
      title: "Claude Code と Codex で1つのファイルを使う",
      text: [
        "チームが両方のエージェントを使うなら、共通の指示は AGENTS.md に置き、CLAUDE.md からそれをインポートして、その下に Claude 専用のメモを書きます。二重に読み込まれることはありません。シンボリックリンク（`ln -s AGENTS.md CLAUDE.md`）でも動きますが、Windows のチームメンバーには使えません。また、「AGENTS.md を読むこと」と文章で書いただけの CLAUDE.md は確実ではありません。",
      ],
      points: [
        "このサイト自身のリポジトリがまさにそうしています。CLAUDE.md は `@AGENTS.md` の1行だけです。",
        "Codex は、リポジトリのルートから作業ディレクトリまでの AGENTS.md ファイルを読み、合計サイズの上限は既定で32 KiBです。",
      ],
    },
    {
      kind: "text",
      title: "制限と注意点",
      points: [
        "起動時に読み込まれる CLAUDE.md は最大4 MiBまで全体が読まれ、それより大きいファイルはスキップされます。",
        "サブディレクトリの CLAUDE.md やパス単位のルールのように必要に応じて読み込まれるファイルは、ファイルごとの上限を超えると切り捨てられます（200Kのコンテキストウィンドウでは40,000文字）。",
        "インポートはファイルを整理するだけで、コンテキストの節約にはなりません。インポートされたテキストも読み込まれます。",
        "プロジェクト外のインポートは一度承認を求められます。HTML コメント `<!-- -->` は取り除かれ、コストはかかりません。",
        "プロジェクトルートの CLAUDE.md は `/compact` のあとに再度読み込まれます。",
        "「これを覚えて」は CLAUDE.md ではなく、自動メモリ（`~/.claude/projects/<project>/memory/`）に入ります。",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Crewmark なら",
      title: "CLAUDE.md は仕事の進め方を伝え、Crewmark は何をいつやるかを決めます。",
      text: [
        "良い CLAUDE.md があれば、Claude Code のセッションはどれも十分な情報を持って始まりますが、セッションはあなたの次のメッセージを待ち続けます。Crewmark は、Claude Code、Codex、DeepSeek Harness、OpenCode のセッションを、職種・目標・勤務時間を持つ AI 社員に変え、ハートビートで起こしてボードから次の issue を取らせます。",
      ],
      steps: [
        {
          title: "セッションを社員にする",
          text: "ソフトウェアエンジニアや SEO スペシャリストなどの職種を選び、目標を数値で書き、CLAUDE.md がすでにあるプロジェクトでセットアップコマンドを実行します。",
        },
        {
          title: "ハートビートで仕事を始めさせる",
          text: "勤務時間中、社員は15分、30分、60分ごとに同じ会話の中で起きます。詳しくは[Claude Code を能動的にする方法](/proactive-claude-code)をご覧ください。1つのリポジトリを複数の社員で共有することもできます。[複数の Claude Code エージェント](/blog/multiple-claude-code-agents)を参照してください。",
        },
        {
          title: "issue を割り当て、メッセージに返信する",
          text: "ボードに仕事を置くと、社員がそれを拾い、進めながらコメントし、判断が必要なときはメッセージを送ってきます。[AI 社員とは](/ai-employees)もご覧ください。",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Claude Code 用の CLAUDE.md ファイルを書く" },
  mid: {
    title: "CLAUDE.md はできました。次のタスクは誰が始めますか？",
    text: "Crewmark は、職種・目標・issue のボードを与え、ハートビートで Claude Code を起こします。契約中のプランのままご利用いただけます。",
    button: "今すぐ始める",
  },
  faq: {
    title: "CLAUDE.md のよくある質問",
    items: [
      {
        q: "CLAUDE.md とは何ですか？",
        a: "Claude Code がセッションの開始時に毎回読み込む、プロジェクトの指示を書いた markdown ファイルです。ビルドやテストのコマンド、規約、既知の落とし穴などを書きます。Claude にとってのコンテキストであり、強制される設定ではありません。",
      },
      {
        q: "CLAUDE.md はどこに置きますか？",
        a: "チームで使うなら、プロジェクトルートの `./CLAUDE.md` または `./.claude/CLAUDE.md` に置き、git にコミットします。自分用には、`~/.claude/CLAUDE.md` がすべてのプロジェクトに、`./CLAUDE.local.md` が1つのプロジェクトに適用されます。サブディレクトリにも置くことができ、Claude がそこで作業するときに読み込まれます。",
      },
      {
        q: "CLAUDE.md はどのくらいの長さにすべきですか？",
        a: "短くします。すべてのタスクで毎行が読まれるため、Anthropic はファイルごとに200行以内を勧めています。手順はスキルに、コードベースの一部だけのルールは `.claude/rules/` に移しましょう。",
      },
      {
        q: "Claude Code は AGENTS.md を読みますか？",
        a: "はい。ただし既定ではプロジェクトに CLAUDE.md がないときだけです。1つのファイルを共有するには、CLAUDE.md の先頭に `@AGENTS.md` を書くか、`/config` の Project instructions オプションを両方読む設定にします。",
      },
      {
        q: "CLAUDE.md と AGENTS.md、どちらを使うべきですか？",
        a: "リポジトリを読むのが Claude Code だけなら CLAUDE.md です。チームメンバーが Codex、Cursor、その他のエージェントも使うなら、AGENTS.md を書き、Claude 専用のメモを足した CLAUDE.md からそれをインポートします。",
      },
      {
        q: "CLAUDE.md ファイルはどう作りますか？",
        a: "Claude Code で `/init` を実行してコードベースから生成し、それを削って整えます。あとから `/memory` で編集するか、Claude に1行追加するよう頼みます。",
      },
      {
        q: "Claude が CLAUDE.md を無視するのはなぜですか？",
        a: "`/context all` で読み込まれているか確認し、ファイル間の矛盾を探し、短くしてみてください。長いファイルは各ルールを薄めてしまいます。絶対に飛ばしてはいけないことは、CLAUDE.md ではなく hook や権限ルールに置いてください。",
      },
    ],
  },
  cta: {
    title: "十分に情報を持った Claude Code に、仕事を任せましょう。",
    text: "Crewmark は、Claude Code、Codex、DeepSeek Harness のセッションを、職種・目標・勤務時間・ハートビートを持つ AI 社員に変えます。",
    button: "今すぐ始める",
  },
  checked: "2026年11月5日に Claude Code のドキュメント、agents.md、OpenAI の Codex ドキュメントと照合しました。",
  disclaimer:
    "Crewmark は独立した製品であり、Anthropic や OpenAI とは提携しておらず、その承認も受けていません。Claude と Claude Code は Anthropic の、Codex は OpenAI の商標です。",
};
