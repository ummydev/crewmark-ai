import type { GuideCopy } from "@/components/landing/guide-article";

// Japanese translation of /blog/claude-squad-alternatives; the English master is src/content/blog/claude-squad-alternatives.ts.

const repo = "https://github.com/smtg-ai/claude-squad";

const usage = `# Claude Squad: Claude Code by default, or another agent with -p
cs
cs -p "codex"

# Claude Code on its own: one worktree and branch per session
claude --worktree fix-login
claude --worktree add-billing`;

export const copy: GuideCopy = {
  meta: {
    title: "Claude Squad の代替ツールと Conductor との比較 | Crewmark AI",
    description:
      "Claude Squad でできること、足りないところ（tmux 専用、Windows 非対応、タスクはすべて自分で開始）、そして複数の Claude Code や Codex エージェントを動かす代替ツール（Claude Code 標準の worktree、Paradev、Kanban Code、Conductor、Crewmark）を解説します。",
  },
  breadcrumb: "Claude Squad の代替ツール",
  parent: { name: "ブログ", href: "/blog" },
  article: { published: "2026-11-07" },
  hero: {
    kicker: "ブログ · AI コーディングエージェント",
    title: "Claude Squad の代替ツール：複数のコーディングエージェントを同時に動かすほかの方法",
    lead: "Claude Squad は、複数のコーディングエージェントを並べて動かすためのオープンソースのターミナルアプリ（AGPL-3.0）です。タスクごとに専用の tmux セッションと git worktree が用意され、プッシュ前に変更をレビューできます。macOS や Linux のターミナルで作業する人には使いやすいツールです。代替ツールが探されるのは、GUI のアプリが欲しいとき、Windows で使いたいとき、あるいはエージェントを1つずつ起動しなくても仕事を始めてほしいときです。このガイドでは、Claude Squad と Conductor の比較も含めて選択肢を比べます。",
    cta: "今すぐ始める",
    secondary: "代替ツールを比較する",
    secondaryHref: "#alternatives",
  },
  sections: [
    {
      kind: "text",
      title: "Claude Squad の得意なことと、その限界",
      text: [
        "Claude Squad の最新リリースは2026年8月20日の v1.0.20 で、今もメンテナンスされています。デフォルトでは Claude Code を動かし、`-p` を使えば Codex や Aider などほかのターミナルエージェントも動かせます。",
      ],
      points: [
        "良い点：タスクごとに tmux セッションと git worktree が1つずつ割り当てられ、エージェント同士が同じファイルを編集することはありません。",
        "良い点：プッシュ前に各インスタンスの diff を確認し、そのブランチをチェックアウトできます。",
        "良い点：実験的な `-y`（auto-yes）モードでプロンプトを自動承認し、タスクをバックグラウンドで最後まで進められます。",
        "限界：tmux と GitHub CLI が必要です。README に Windows の記載はなく、Windows で tmux を使うには WSL が必要です。",
        "限界：ターミナル UI です。ボードもチームで共有できるビューもなく、タスクはすべて自分で開始します。",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "複数のエージェントを並列で動かす方法（Claude Squad あり・なし）",
      steps: [
        {
          title: "タスクごとに専用の worktree を用意する",
          text: "これが Claude Squad の中核ですが、今は Claude Code 自体でもできます。`claude --worktree <name>` で、専用のブランチとチェックアウトでセッションが始まります。[Claude Code の worktree ガイド](/blog/claude-code-worktree)をご覧ください。",
          code: usage,
        },
        {
          title: "見守り方を選ぶ",
          text: "ターミナルの一覧（Claude Squad）、デスクトップアプリ（Paradev、終了までの Conductor）、セッションのカンバンボード（Kanban Code）があります。[Claude Code のカンバンボード](/blog/claude-code-kanban)をご覧ください。",
        },
        {
          title: "次のタスクを誰が始めるか決める",
          text: "どのツールでも、セッションを開始するのはあなたです。エージェントに次の issue を自分で取らせたいなら、スケジュールかハートビートを与えます。[Claude Code を自発的に動かす方法](/proactive-claude-code)をご覧ください。",
        },
        {
          title: "マージ前にレビューする",
          text: "何でエージェントを動かすにしても、マージは人が行いましょう。diff を1つずつ読み、チェックを実行してからマージします。",
        },
      ],
      source: { label: "出典：Claude Squad の README", href: repo },
    },
    {
      kind: "table",
      id: "alternatives",
      title: "Claude Squad の代替ツール比較",
      text: ["各プロジェクトの公式サイトまたはリポジトリの情報で、2026年11月に確認しました。"],
      headers: ["", "インターフェース", "エージェント", "プラットフォーム", "タスクを始める人", "ライセンス"],
      rows: [
        ["Claude Squad", "ターミナル UI（tmux）", "Claude Code、Codex、Gemini、Aider", "tmux と gh が必要、Windows は WSL 経由", "あなた", "AGPL-3.0"],
        ["Claude Code 単体", "`claude --worktree`、デスクトップアプリでの並列セッション", "Claude Code", "macOS、Windows、Linux", "あなた（またはスケジュール）", "商用（Anthropic）"],
        ["Paradev（旧 Superset）", "デスクトップアプリ、タスクごとに worktree、オートメーション", "Claude、Codex、Cursor Agent、OpenCode、任意の CLI エージェント", "macOS、Linux は実験的、Windows は未対応", "あなた、またはオートメーション", "MIT"],
        ["Kanban Code", "Claude Code セッションのカンバンボード", "Claude Code", "macOS 26 アプリ、Windows アプリ", "あなた", "Apache 2.0"],
        ["Conductor", "並列エージェント用の Mac アプリ。Meta に合流し、クラウドは2026年11月20日に終了", "Claude Code、Codex、Cursor、OpenCode", "macOS", "あなた", "商用"],
        ["Crewmark", "ハートビートで起きる AI 社員がいるホスティング版ボード", "Claude Code、Codex、DeepSeek Harness、OpenCode", "Web ボード、デーモンは macOS、Windows、Linux", "社員が次の issue を取る", "商用"],
      ],
    },
    {
      kind: "text",
      title: "Claude Squad と Conductor の比較",
      text: [
        "どちらも並列の worktree で複数のエージェントを動かします。Claude Squad は無料のオープンソースのターミナルアプリ、Conductor はレビューフローとクラウドワークスペースを備えた洗練された Mac アプリでした。Conductor は [Meta に合流](/blog/conductor-alternatives)し、新規登録を締め切りました。クラウドは2026年11月20日に終了し、ローカルアプリのアップデートも2027年初めまでです。今どちらかを選ぶなら、開発が続いているのは Claude Squad です。",
      ],
    },
    {
      kind: "text",
      title: "あなたに合う Claude Squad の代替ツール",
      points: [
        "Claude Code だけを使う：ツールを増やす前に、標準の `--worktree` フラグとデスクトップアプリの並列セッションを試しましょう。",
        "Mac で多数のエージェントを扱うデスクトップアプリが欲しい：Paradev。",
        "セッションをカードで見たい：Kanban Code。[Claude Code のカンバンボード](/blog/claude-code-kanban)もご覧ください。",
        "Windows を使っている：Claude Code の CLI とデスクトップアプリはネイティブで動きます。Claude Squad には WSL が必要です。",
        "タスクを1つずつ起動しなくてもエージェントに働き続けてほしい、チームで共有するボードも欲しい：Crewmark（下記）。[複数の Claude Code エージェント](/blog/multiple-claude-code-agents)もご覧ください。",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Crewmark なら",
      title: "あなたが指揮する部隊から、自分で動くチームへ",
      text: [
        "Claude Squad なら並列エージェントを手軽に動かせますが、どのエージェントもあなたの開始を待ちます。Crewmark は、Claude Code、Codex、DeepSeek Harness、OpenCode のセッションを、職種・目標・勤務時間を持つ AI 社員に変えます。社員はハートビートで起き、共有ボードから次の issue を取り、専用のチェックアウトで作業し、判断が必要なときはメッセージを送ってきます。契約中のプランのままご利用いただけます。",
      ],
      steps: [
        {
          title: "リポジトリとエージェントをつなぐ",
          text: "プロジェクトでセットアップコマンドを実行します。複数の社員が1つのリポジトリを共有し、それぞれ専用のチェックアウトで作業できます。",
        },
        {
          title: "社員ごとに職種を決める",
          text: "エンジニア、レビュアー、SEO ライターなど、それぞれに目標を持たせます。[AI 社員の職種](/ai-employees)をご覧ください。",
        },
        {
          title: "ボードを埋めてレビューする",
          text: "勤務時間中、各社員は15分、30分、60分ごとに次の issue を取ります。あなたはプルリクエストをレビューし、質問に答えます。",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "複数のコーディングエージェントを並列で動かす" },
  mid: {
    title: "エージェントを毎回自分で起動するのに疲れていませんか？",
    text: "Crewmark の AI 社員は、ハートビートで次の issue を取ります。契約中の Claude Code や Codex のプランのままで使えます。",
    button: "今すぐ始める",
  },
  faq: {
    title: "Claude Squad に関するよくある質問",
    items: [
      {
        q: "Claude Squad とは何ですか？",
        a: "smtg-ai が公開しているオープンソースのターミナルアプリ（AGPL-3.0）です。複数のコーディングエージェントを、それぞれ専用の tmux セッションと git worktree で同時に動かし、プッシュ前に変更を1つずつレビューできます。",
      },
      {
        q: "Claude Squad は Codex で使えますか？",
        a: "使えます。OpenAI API キーを設定したうえで `cs -p \"codex\"` で起動します。Gemini や Aider も起動でき、デフォルトは Claude Code です。",
      },
      {
        q: "Claude Squad は Windows で使えますか？",
        a: "README に Windows の記載はなく、tmux が必要なので、Windows では WSL で動かすことになります。Claude Code 標準の `--worktree` フラグとデスクトップアプリは Windows でネイティブに動きます。",
      },
      {
        q: "Claude Squad は今もメンテナンスされていますか？",
        a: "はい。最新リリースは2026年8月20日の v1.0.20 です。",
      },
      {
        q: "Claude Squad と Conductor のどちらを選ぶべきですか？",
        a: "Conductor は Meta に合流してサービスを縮小しており、クラウドは2026年11月20日に終了します。Claude Squad はオープンソースで、開発が続いています。",
      },
      {
        q: "Claude Code に worktree がある今も Claude Squad は必要ですか？",
        a: "分離だけが目的なら不要です。`claude --worktree` で各セッションに専用のブランチを用意できます。1つのターミナル画面で多数のセッションを管理したい場合や、Claude Code 以外のエージェントを使う場合には、Claude Squad が今も役立ちます。",
      },
    ],
  },
  cta: {
    title: "部隊ではなく、チームを動かしましょう。",
    text: "Crewmark は、Claude Code、Codex、DeepSeek Harness、OpenCode のセッションを、職種・目標・勤務時間・ハートビートを持つ AI 社員に変えます。",
    button: "今すぐ始める",
  },
  checked: "2026年11月7日に Claude Squad の README とリリース、および各代替ツールの公式サイトまたはリポジトリと照合しました。",
  disclaimer:
    "Crewmark は独立した製品であり、smtg-ai、Claude Squad、Paradev、Kanban Code、Conductor、Anthropic、OpenAI とは提携しておらず、その承認も受けていません。製品名は各所有者の商標です。",
};
