import type { GuideCopy } from "@/components/landing/guide-article";

// Japanese translation of /blog/codex-agents-md; the English master is src/content/blog/codex-agents-md.ts.

const docs = "https://learn.chatgpt.com/docs/agent-configuration/agents-md";

const global = `# ~/.codex/AGENTS.md

## Working agreements

- Always run \`npm test\` after modifying JavaScript files.
- Prefer \`pnpm\` when installing dependencies.
- Ask for confirmation before adding new production dependencies.`;

const project = `# AGENTS.md (repository root)

## Repository expectations

- Run \`npm run lint\` before opening a pull request.
- Document public utilities in \`docs/\` when you change behavior.

# services/payments/AGENTS.override.md

## Payments service rules

- Use \`make test-payments\` instead of \`npm test\`.
- Never rotate API keys without notifying the security channel.`;

const config = `# ~/.codex/config.toml
project_doc_fallback_filenames = ["TEAM_GUIDE.md", ".agents.md"]
project_doc_max_bytes = 65536`;

const review = `## Code Review Rules

### Experiment cohorts

- Do not filter treatment comparisons on post-exposure behavior.
  Safe path: build cohorts from assignment or exposure.`;

export const copy: GuideCopy = {
  meta: {
    title: "Codex の AGENTS.md：置き場所・読み込み順・例 | Crewmark AI",
    description:
      "Codex が AGENTS.md を読む仕組み：グローバルの ~/.codex、プロジェクトとネストしたファイル、AGENTS.override.md、読み込み順と 32 KiB の上限、フォールバックのファイル名、コードレビューのルール、例を解説します。",
  },
  breadcrumb: "Codex AGENTS.md ガイド",
  parent: { name: "ブログ", href: "/blog" },
  article: { published: "2026-11-06" },
  hero: {
    kicker: "ブログ · Codex",
    title: "Codex の AGENTS.md：置き場所、読み込み順、書く内容",
    lead: "AGENTS.md は、OpenAI の Codex が作業の前に読み込む指示ファイルです。ビルドやテストのコマンド、規約、ルールをプレーンな Markdown で書きます。Codex は `~/.codex` のグローバルファイルと、リポジトリのルートから作業中のフォルダまでのファイルを組み合わせて使います。このガイドでは、すべての置き場所、正確な読み込み順とサイズ上限、オーバーライド、フォールバックのファイル名、コードレビューのルール、そのまま使える例を説明します。",
    cta: "今すぐ始める",
    secondary: "設定手順へ移動",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "table",
      id: "order",
      title: "Codex が AGENTS.md を探す場所（読み込み順）",
      text: [
        "Codex は起動時に一度だけ指示のチェーンを組み立てます（ターミナル UI ではセッションごとに一度）。ファイルはこの表の上から順に連結されるため、作業ディレクトリに近い指示ほど後に来て優先されます。",
      ],
      headers: ["順番", "場所", "Codex が読むもの"],
      rows: [
        ["1. グローバル", "`~/.codex/`（または `$CODEX_HOME`）", "`AGENTS.override.md` があればそれ、なければ `AGENTS.md`。空でない最初の1つだけ"],
        ["2. プロジェクトルート", "通常は Git のルート", "`AGENTS.override.md`、なければ `AGENTS.md`、それもなければフォールバックのファイル名。最大1ファイル"],
        ["3. 下の各フォルダ", "ルートから Codex を起動した場所までのすべてのディレクトリ", "各ディレクトリで同じ確認をし、1ファイルずつ"],
        ["終了", "現在のディレクトリ", "その下のフォルダは読まれません"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Codex 用に AGENTS.md を設定する方法",
      steps: [
        {
          title: "グローバルの既定を作る",
          text: "`mkdir -p ~/.codex` を実行し、すべてのリポジトリで使いたい設定を `~/.codex/AGENTS.md` に書きます。Codex に指示の要約を頼んで、読み込まれたか確認しましょう。",
          code: global,
        },
        {
          title: "プロジェクトのファイルを追加し、ルールが違う場所はオーバーライドする",
          text: "共通の設定はリポジトリのルートの `AGENTS.md` に書きます。ルールが異なるフォルダには `AGENTS.override.md` を追加します。これはそのフォルダの `AGENTS.md` を置き換え、Codex は元のファイルを無視します。",
          code: project,
        },
        {
          title: "読み込まれたものを確認する",
          text: "対象のフォルダで Codex を起動し（例：`codex --cd services/payments`）、読み込んだ指示の出典を一覧にするよう頼みます。グローバルファイル、ルートのファイル、そのフォルダのファイルの順に表示されるはずです。",
        },
        {
          title: "既存のファイル名を使う、または上限を上げる",
          text: "リポジトリがすでに別のファイルに指示を書いているなら、`~/.codex/config.toml` の `project_doc_fallback_filenames` に追加します。合計サイズが `project_doc_max_bytes`（既定は 32 KiB）に達すると、Codex はそれ以上ファイルを追加しません。",
          code: config,
        },
        {
          title: "Codex のコードレビュー用ルールを追加する",
          text: "GitHub の `@codex review` 向けには、対象のコードに最も近い AGENTS.md に `## Code Review Rules` セクションを追加します。指摘すべきことと安全な代替策を書き、フォーマットや lint は CI に任せましょう。",
          code: review,
        },
      ],
      source: { label: "出典：Codex ドキュメント、Custom instructions with AGENTS.md", href: docs },
    },
    {
      kind: "text",
      title: "AGENTS.md のベストプラクティス",
      points: [
        "Codex が自分では把握できないことだけを書きます。正確なビルド・テスト・lint のコマンド（テストを1つだけ実行する方法も含む）、コードベースの落とし穴、どこにも書かれていない決定事項です。",
        "最も具体的なルールはコードの近くに置きます。`services/payments/` にネストした AGENTS.md のほうが、ルートの長いファイルにある決済のセクションより効果的です。",
        "32 KiB の予算に注意しましょう。ファイルはルートから順に追加され、残りは切り捨てられるので、長いファイルはネストしたファイルに分けるか、`project_doc_max_bytes` を上げます。",
        "一時的な変更にはグローバルでもフォルダ単位でも `AGENTS.override.md` を使い、削除すれば元に戻ります。",
        "空の AGENTS.md はスキップされ、そのディレクトリでは次のファイル名の確認に進みます。",
        "自動化用のユーザーには別の `CODEX_HOME` を使い、そのグローバル指示が自分のものと混ざらないようにします。",
      ],
    },
    {
      kind: "table",
      title: "Codex と Claude Code などにおける AGENTS.md の違い",
      text: [
        "AGENTS.md は多くのエージェントが読むオープンな形式なので、共有したい指示を置くのに最適です。Claude Code には独自のファイル CLAUDE.md があります。詳しくは [CLAUDE.md ガイド](/blog/claude-md)をご覧ください。",
      ],
      headers: ["", "Codex", "Claude Code"],
      rows: [
        ["メインのファイル", "`AGENTS.md`", "`CLAUDE.md`。CLAUDE.md がない場合のみ `AGENTS.md` を読む"],
        ["個人用・一時的なファイル", "`AGENTS.override.md`", "`CLAUDE.local.md`"],
        ["グローバルファイル", "`~/.codex/AGENTS.md`", "`~/.claude/CLAUDE.md`"],
        ["ネストしたフォルダ", "ルートから現在のディレクトリまで", "起動時に親ディレクトリ、サブフォルダは Claude がそこで作業するとき"],
        ["サイズ上限", "既定で合計 32 KiB", "ファイルごとの上限。200行以内が目安"],
        ["1つのファイルを共有", "ネイティブ対応", "CLAUDE.md の先頭に `@AGENTS.md` を書く"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Crewmark なら",
      title: "AGENTS.md は Codex にやり方を教え、Crewmark は次にやることを伝えます。",
      text: [
        "よい AGENTS.md があれば、どの Codex セッションも状況を把握した状態で始まりますが、セッションはあなたのプロンプトを待ったままです。Crewmark は Codex、Claude Code、DeepSeek Harness、OpenCode のセッションを、職種・目標・勤務時間を持つ AI 社員に変え、ハートビートで起こしてボードから次の issue を取らせます。",
      ],
      steps: [
        {
          title: "AGENTS.md はリポジトリに置いたままにする",
          text: "社員の Codex セッションもあなたのセッションと同じように読み込むので、規約やテストのコマンドもそのまま引き継がれます。",
        },
        {
          title: "ハートビートで仕事を始めさせる",
          text: "勤務時間中、社員は15分、30分、60分ごとに同じ会話の中で起きます。詳しくは[Codex を自律的に動かす方法](/proactive-codex)をご覧ください。",
        },
        {
          title: "1つのボードでエージェントを混在させる",
          text: "1つの AGENTS.md で Codex と Claude Code の社員を並行して動かせます。違いは [Claude Code と Codex の比較](/blog/claude-code-vs-codex)をご覧ください。",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Codex 用に AGENTS.md を設定する" },
  mid: {
    title: "Codex はルールを知りました。次のタスクは誰が渡しますか？",
    text: "Crewmark は、職種・目標・issue のボードを与え、ハートビートで Codex を起こします。契約中の ChatGPT プランのままご利用いただけます。",
    button: "今すぐ始める",
  },
  faq: {
    title: "Codex AGENTS.md のよくある質問",
    items: [
      {
        q: "Codex の AGENTS.md とは何ですか？",
        a: "Codex が作業の前に読み込む、指示を書いた Markdown ファイルです。プロジェクトのコマンド、規約、ルールを書きます。Codex はグローバルファイルとリポジトリのファイルを組み合わせて使います。",
      },
      {
        q: "Codex はどこで AGENTS.md を探しますか？",
        a: "まず `~/.codex`（または `$CODEX_HOME`）、次にプロジェクトのルートから Codex を起動したフォルダまでの各ディレクトリを探し、ディレクトリごとに最大1ファイルを読みます。",
      },
      {
        q: "AGENTS.md はどの順番で読み込まれますか？",
        a: "グローバル、プロジェクトルート、そして現在のディレクトリまでの各ネストしたフォルダの順です。この順で連結されるため、最も近いファイルが最後に来て優先されます。",
      },
      {
        q: "AGENTS.override.md とは何ですか？",
        a: "同じディレクトリで Codex が AGENTS.md の代わりに読むファイルで、グローバルにもフォルダにも置けます。共有ファイルを編集せずに、一時的なルールやチーム固有のルールを書くのに使います。",
      },
      {
        q: "AGENTS.md にサイズの上限はありますか？",
        a: "あります。合計サイズが `project_doc_max_bytes`（既定は 32 KiB）に達すると、Codex はそれ以上ファイルを追加しません。`~/.codex/config.toml` で上げるか、指示をネストしたファイルに分けましょう。",
      },
      {
        q: "Codex と Claude Code で1つのファイルを使えますか？",
        a: "はい。共通の指示は AGENTS.md に書き、CLAUDE.md の先頭に `@AGENTS.md` を置いて、その下に Claude 専用のメモを書きます。",
      },
      {
        q: "Codex のコードレビューは AGENTS.md を読みますか？",
        a: "はい。コードに最も近い AGENTS.md に `## Code Review Rules` セクションを追加すると、GitHub の `@codex review` がそれを適用します。",
      },
    ],
  },
  cta: {
    title: "十分に情報を持った Codex に、仕事を任せましょう。",
    text: "Crewmark は、Codex、Claude Code、DeepSeek Harness のセッションを、職種・目標・勤務時間・ハートビートを持つ AI 社員に変えます。",
    button: "今すぐ始める",
  },
  checked: "2026年11月6日に OpenAI の Codex ドキュメント（Custom instructions with AGENTS.md）と照合しました。",
  disclaimer:
    "Crewmark は独立した製品であり、OpenAI や Anthropic とは提携しておらず、その承認も受けていません。Codex は OpenAI の、Claude と Claude Code は Anthropic の商標です。",
};
