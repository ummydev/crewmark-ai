import type { GuideCopy } from "@/components/landing/guide-article";

// ja translation of /for/engineering; the English master is src/content/use-cases/for-engineering.ts.

const prompts = `1 日 2 回、本番環境で新しく発生したエラーと再発した Sentry のエラーを読んで、
ボードにまだないものを影響と考えられる原因付きで起票し、
1 行で直せるものはプルリクエストを作成して。

レビュー可能になったすべてのプルリクエストを、AGENTS.md のルールに照らしてレビューして。
コメントだけにして。承認やマージは絶対にしないで。

毎週金曜に、今週マージされたプルリクエストからリリースノートを書いて。
ユーザーにとって何が変わったかを、領域ごとにまとめて、リンクを付けて。

「good first issue」ラベルの付いた次の issue を取って、自分専用の
git worktree で作業し、テスト付きでプルリクエストを作成して。`;

export const copy: GuideCopy = {
  meta: {
    title: "エンジニアリングチームのための Claude Code：成果を出す AI 社員",
    description:
      "エンジニアリングチームが Claude Code や Codex を AI 社員として使う方法。エラーのトリアージ、コードレビュー、issue からプルリクエストまで、リリースノート、夜間シフトをスケジュールで回します。職種、活用例、コピーして使えるプロンプト、そしてマージの決定権を人に残すルールを紹介します。",
  },
  breadcrumb: "エンジニアリングのための Claude Code",
  parent: { name: "活用例", href: "/use-cases" },
  hero: {
    kicker: "エンジニアリングチーム向け",
    title: "エンジニアリングチームのための Claude Code：次の issue を自分で取る AI 社員",
    lead: "多くのチームは、誰かが座ってプロンプトを打つときに Claude Code や Codex を使っています。もっと大きな効果があるのは、決まった仕事を任せることです。毎朝新しいエラーをトリアージする、レビュー可能になったすべてのプルリクエストをレビューする、ボードから次の issue を取ってプルリクエストを作成する、金曜にリリースノートを書く。このページでは、任せるべきエンジニアリングの仕事、複数のエージェントがぶつからずに動く方法、コピーして使えるプロンプト、そしてマージを人に残すルールを紹介します。",
    cta: "今すぐ始める",
    secondary: "仕事を見る",
    secondaryHref: "#jobs",
  },
  sections: [
    {
      kind: "table",
      id: "jobs",
      title: "エンジニアリングチームが AI 社員に任せること",
      headers: ["仕事", "頻度", "ガイド"],
      rows: [
        ["新しい Sentry のエラーをトリアージし、小さいものは直す", "1 日 2 回", "[Sentry のエラートリアージ](/use-cases/sentry-error-triage)"],
        ["レビュー可能なプルリクエストをレビューする", "PR ごと", "[すべての PR に AI コードレビュー](/use-cases/pr-review)"],
        ["次の issue を取ってプルリクエストを作成する", "継続的に", "[AI ソフトウェアエンジニア](/ai-employees/software-engineer)"],
        ["夜の間にバックログを片付ける", "毎晩", "[Claude Code を 24 時間動かす](/blog/run-claude-code-24-7)、[Codex の長時間タスク](/blog/codex-long-running-tasks)"],
        ["マージされたプルリクエストからリリースノートを書く", "毎週", "下のプロンプト"],
        ["ボードを最新に保つ：ステータス、コメント、リンク", "issue ごと", "[Claude Code のカンバン](/blog/claude-code-kanban)"],
      ],
    },
    {
      kind: "steps",
      id: "prompts",
      title: "コピーして使えるプロンプト",
      text: ["どれも AI 社員の定期 issue としても、Claude Code や Codex での 1 回限りのプロンプトとしても使えます。"],
      steps: [
        {
          title: "4 つの仕事を、それぞれ一文で",
          text: "名前とスケジュールは自分のものに変えてください。最初の 2 つにはセットアップ付きの詳しいガイドがあります。[Sentry のエラートリアージ](/use-cases/sentry-error-triage)と [AI コードレビュー](/use-cases/pr-review)です。",
          code: prompts,
        },
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Claude Code や Codex で AI エンジニアをセットアップする方法",
      steps: [
        {
          title: "ルールは一度だけ書く",
          text: "ビルドとテストのコマンド、規約、レビューのルールを CLAUDE.md か AGENTS.md に書いておけば、どのセッションも同じ地点から始まります。[CLAUDE.md](/blog/claude-md) と [Codex の AGENTS.md](/blog/codex-agents-md) をご覧ください。",
        },
        {
          title: "エージェントごとに専用の worktree を",
          text: "2 つのエージェントが 1 つのチェックアウトを編集すると、互いに上書きしてしまいます。エージェントごとに git worktree を使いましょう。[Claude Code の worktree](/blog/claude-code-worktree) と[複数の Claude Code エージェントを動かす](/blog/multiple-claude-code-agents)をご覧ください。",
        },
        {
          title: "仕事に必要なツールをつなぐ",
          text: "GitHub は CLI で、Sentry はホスト型の MCP サーバーで、課題管理ツールは MCP サーバーか CLI でつなぎます。両方ある場合は CLI を選びましょう。トークンの消費が少なく済みます。",
        },
        {
          title: "マージは人に残す",
          text: "エージェントはプルリクエストを作成してコメントし、人が承認してマージします。判断が必要なとき、社員は issue を「要対応」にして質問してきます。",
        },
      ],
    },
    {
      kind: "text",
      id: "expect",
      title: "期待できること",
      points: [
        "うまくいくのは、小さくて説明のしっかりした issue です。スタックトレース付きのバグ、足りないテスト、多数のファイルにまたがる文言の変更など。",
        "大きな機能は、今も人が issue に分割する必要があります。エージェントは部品づくりは得意ですが、計画はそれほどではありません。",
        "利用量はあなた自身の Claude や ChatGPT のプランから消費されます。重い仕事は、上限の範囲内で勤務時間中か夜間に入れましょう。",
        "レビューの負荷は消えるのではなく移ります。プルリクエストが増えればレビューも増えるので、このリストに AI レビューが入っているのです。",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Crewmark なら",
      title: "ボード、勤務時間、ハートビートを持つエンジニア",
      text: [
        "Crewmark は、あなたの Claude Code や Codex を AI 社員に変えます。それぞれが職種、数字の目標、勤務時間、ハートビートを持ち、共有ボードから次の issue を取り、作業しながらコメントし、レビュー用にプルリクエストを作成します。",
      ],
      steps: [
        {
          title: "職種を雇う",
          text: "[AI ソフトウェアエンジニア](/ai-employees/software-engineer)から始めましょう。",
        },
        {
          title: "決まった仕事を定期 issue として追加する",
          text: "トリアージ、レビュー、リリースノートが、それぞれのスケジュールで自動的に戻ってきます。",
        },
        {
          title: "ほかのチームも見る",
          text: "マーケティングチームも同じ仕組みを使っています。[マーケティングのための Claude Code](/for/marketing) をご覧ください。すべての仕事は[活用例](/use-cases)にあります。",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Claude Code や Codex で AI エンジニアをセットアップする" },
  mid: {
    title: "次の issue を自分で取るエンジニアがほしいですか？",
    text: "Crewmark の社員はあなたの Claude Code や Codex で動き、ハートビートで起き、レビュー用にプルリクエストを作成します。",
    button: "今すぐ始める",
  },
  faq: {
    title: "よくある質問",
    items: [
      {
        q: "エンジニアリングチームにおすすめの Claude Code の活用例は？",
        a: "繰り返し発生し、終わりがはっきりしている仕事です。エラーのトリアージ、プルリクエストのレビュー、スタックトレース付きの小さなバグ、テスト、リリースノート、ボードを最新に保つことなど。大きな機能の計画には、今も人が必要です。",
      },
      {
        q: "複数の Claude Code エージェントが 1 つのリポジトリで作業できますか？",
        a: "はい。それぞれが専用の git worktree と専用の issue を持っていればできます。[複数の Claude Code エージェントを動かす](/blog/multiple-claude-code-agents)と[エージェントチーム](/blog/claude-code-agent-teams)をご覧ください。",
      },
      {
        q: "Codex でも使えますか？",
        a: "はい。同じ仕事とルールが Codex でも使えます。ルールは AGENTS.md に書きましょう。",
      },
      {
        q: "AI エージェントに自分のプルリクエストをマージさせるべきですか？",
        a: "いいえ。プルリクエストの作成とコメントは任せ、承認とマージは人に残しましょう。",
      },
      {
        q: "Devin などのクラウドエージェントとの違いは？",
        a: "クラウドエージェントは、あなたが割り当てたタスクをベンダーのクラウドで 1 つずつ実行します。Crewmark は、あなた自身の Claude Code や Codex をあなたのプランで動かし、決まった仕事をスケジュールでこなします。[Devin の代替](/blog/devin-alternatives)をご覧ください。",
      },
    ],
  },
  cta: {
    title: "エンジニアリングチームに、次の issue を自分で取る AI 社員を。",
    text: "Crewmark は、Claude Code と Codex のセッションを、職種・目標・勤務時間・ハートビートを持つ AI 社員に変えます。",
    button: "今すぐ始める",
  },
  checked: "2026年11月10日に書きました。ツールに関する事実は同日、Sentry、Anthropic、OpenAI のドキュメントで確認しました。",
  disclaimer:
    "Crewmark は独立した製品であり、Anthropic、OpenAI、GitHub、Sentry とは提携しておらず、その承認も受けていません。製品名は各所有者の商標です。",
};
