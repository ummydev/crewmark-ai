import type { GuideCopy } from "@/components/landing/guide-article";

// ja translation of /use-cases/pr-review; the English master is src/content/use-cases/pr-review.ts.

const claudeDocs = "https://code.claude.com/docs/en/code-review-local";

const commands = `# Claude Code：プルリクエストをレビューしてインラインコメントを投稿
/code-review 142 --comment

# Codex：GitHub の PR コメントでレビューを依頼
@codex review
@codex review for issues in the database migration`;

const rules = `## Code Review Rules
- billing/ と auth/ の新しい分岐にテストがなければ指摘する。
- SQL マイグレーションにはすべてロールバックが必要。なければそう指摘する。
- フォーマットにはコメントしない。リンターに任せる。
- 承認も変更要求もしない。コメントだけにする。`;

export const copy: GuideCopy = {
  meta: {
    title: "Claude Code と Codex で、すべての PR に AI コードレビュー",
    description:
      "Claude Code と Codex でプルリクエストに AI コードレビューを付ける 3 つの方法。インラインコメント付きの /code-review、@codex review と自動レビュー、そしてボード上のすべての PR をレビューする AI 社員。コマンド、コピーして使えるレビュールール、限界を紹介します。",
  },
  breadcrumb: "すべての PR に AI コードレビュー",
  parent: { name: "活用例", href: "/use-cases" },
  hero: {
    kicker: "活用例 · エンジニアリング",
    title: "Claude Code と Codex で、すべてのプルリクエストに AI コードレビュー",
    lead: "Claude Code も Codex も、プルリクエストをレビューして GitHub にインラインコメントを残せます。自分でレビューを実行することも、自動で始めることも、ボードに上がってきたものをレビューする仕事を AI 社員に任せることもできます。このページでは、それぞれのコマンド、書き留めておく価値のあるレビュールール、レビュアーがしないこと、そしてレビューを「思い出したときに頼むもの」ではなく決まった仕事にする方法を紹介します。",
    cta: "今すぐ始める",
    secondary: "コマンドを見る",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "table",
      id: "options",
      title: "プルリクエストに AI レビューを付ける 3 つの方法",
      headers: ["方法", "始まり方", "動く場所", "向いている用途"],
      rows: [
        ["Claude Code の `/code-review`", "PR 番号を付けて自分で実行。`--comment` でインラインコメントを投稿", "自分の Claude Code のセッション。どのプランでも", "マージ前に自分のブランチや PR をレビューする"],
        ["Claude Code Review（マネージド）", "組織の Owner がリポジトリで有効にする。誰でも `@claude review` とコメントできる", "Anthropic のサービス", "依頼に応じてレビューがほしい、Claude のプランを使うチーム"],
        ["Codex のコードレビュー", "PR コメントで `@codex review`、または Codex の設定で Automatic review", "OpenAI のクラウド", "ChatGPT のプランを使うチーム。GitHub で P0 と P1 の問題を指摘"],
        ["AI 社員", "ボード上のレビュー issue、または割り当てられたすべての PR", "自分の Claude Code や Codex で、ハートビートに合わせて", "決まった仕事として：すべての PR をレビューし、フォローアップも追跡"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Claude Code や Codex でプルリクエストをレビューする方法",
      steps: [
        {
          title: "Claude Code：/code-review を実行する",
          text: "Claude Code のセッションで `/code-review` を実行すると、ブランチの変更からバグを見つけます。PR 番号を渡すとそのプルリクエストをレビューし、`--comment` を付けると指摘を GitHub にインラインコメントとして投稿します。`--fix` を付けると、代わりに作業ツリーに修正を適用します。`/review` はエイリアスです。",
          code: commands,
        },
        {
          title: "Codex：@codex review とメンションする",
          text: "プルリクエストのコメントに `@codex review` と書くと、Codex が 👀 でリアクションしてレビューを投稿します。重点を置いてほしい点があれば、後ろに付け加えましょう。頼まずにレビューさせるには、Codex の設定で Automatic review をオンにしてトリガーを選びます。",
        },
        {
          title: "レビュールールを書き留める",
          text: "Codex は、コードに最も近い AGENTS.md の `## Code Review Rules` セクションを読みます。Claude Code では、同じルールを CLAUDE.md に書きます。ルールがあるとレビューが一貫し、リンターがすでに扱っている話題から外れずに済みます。",
          code: rules,
        },
      ],
      source: { label: "出典：Claude Code のドキュメント「/code-review でローカルにレビュー」", href: claudeDocs },
    },
    {
      kind: "text",
      id: "limits",
      title: "AI レビューがしないこと",
      points: [
        "承認やブロック：Claude のマネージドな Code Review はプルリクエストを承認もブロックもしません。良いレビューブリーフは、社員にコメントだけするよう指示します。",
        "変更の責任者の代わり：バグや足りないテストは見つけますが、プロダクトやデザインの判断は人に残ります。",
        "すべてを見ること：GitHub 上の Codex は、コメントを絞るため P0 と P1 の問題だけを指摘します。特定の重点が必要なときは、そう頼みましょう。",
        "無料であること：レビューはプランの利用量を使います。プッシュのたびではなく、依頼したときやレビュー可能になったときにレビューしましょう。",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Crewmark なら",
      title: "レビューを誰かの仕事にする",
      text: [
        "コマンドは、誰かが実行を思い出したときにだけレビューします。AI 社員は、それが仕事だからレビューします。Crewmark は、あなたの Claude Code や Codex を、ハートビートで起き、レビュー待ちのプルリクエストを拾ってコメントするエンジニアに変えます。",
      ],
      steps: [
        {
          title: "職種から始める",
          text: "[AI ソフトウェアエンジニア](/ai-employees/software-engineer)に、あなたのレビュールールをブリーフとして渡します。",
        },
        {
          title: "レビューをボードに流す",
          text: "レビューの issue を割り当てるか、レビュー可能になったすべてのオープンなプルリクエストをレビューする定期 issue を追加します。",
        },
        {
          title: "エンジニアリングのほかの仕事",
          text: "[エンジニアリングのための Claude Code](/for/engineering) と [Sentry のエラートリアージ](/use-cases/sentry-error-triage)をご覧ください。",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Claude Code や Codex でプルリクエストをレビューする" },
  mid: {
    title: "頼まなくても、すべてのプルリクエストをレビューしてほしいですか？",
    text: "あなたの Claude Code や Codex で動く Crewmark のエンジニアが、ハートビートに合わせて、待っているものをレビューします。",
    button: "今すぐ始める",
  },
  faq: {
    title: "よくある質問",
    items: [
      {
        q: "Claude Code でプルリクエストをレビューするには？",
        a: "Claude Code のセッションで `/code-review <PR number> --comment` を実行すると、指摘が GitHub にインラインコメントとして投稿されます。`--comment` を付けなければセッション内で報告し、`--fix` を付けるとローカルに修正を適用します。",
      },
      {
        q: "Claude Code の /review と /code-review は同じですか？",
        a: "Claude Code のドキュメントでは、`/review` は `/code-review` のエイリアスとされています。",
      },
      {
        q: "Codex にプルリクエストをレビューさせるには？",
        a: "プルリクエストに `@codex review` とコメントするか、Codex の設定で Automatic review をオンにして、選んだトリガーでレビューが始まるようにします。リポジトリでコードレビューを有効にしておく必要があります。",
      },
      {
        q: "AI レビュアーにチームのルールを渡せますか？",
        a: "はい。Codex は AGENTS.md の `## Code Review Rules` セクションを読みます。Claude Code では、同じルールを CLAUDE.md に書きます。",
      },
      {
        q: "AI がプルリクエストを承認したりマージしたりしますか？",
        a: "Claude のマネージドな Code Review は承認もブロックもしません。マージは人に残しておくべきです。AI 社員のブリーフには、コメントだけするよう書いておきましょう。",
      },
    ],
  },
  cta: {
    title: "誰も頼むのを思い出さなくても、すべてのプルリクエストがレビューされる。",
    text: "Crewmark は、Claude Code と Codex のセッションを、職種・目標・勤務時間・ハートビートを持つ AI 社員に変えます。",
    button: "今すぐ始める",
  },
  checked: "2026年11月10日に、Claude Code のコードレビューのドキュメントと、OpenAI の Codex コードレビューのドキュメントで確認しました。",
  disclaimer:
    "Crewmark は独立した製品であり、Anthropic、OpenAI、GitHub とは提携しておらず、その承認も受けていません。製品名は各所有者の商標です。",
};
