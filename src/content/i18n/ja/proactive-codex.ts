import type { GuideCopy } from "@/components/landing/guide-article";

// Japanese translation of /proactive-codex; the English master is src/content/proactive-codex.ts.
export const copy: GuideCopy = {
  meta: {
    title: "Codex を自律的に動かす方法：定期実行・cron・ハートビート | Crewmark",
    description:
      "指示を待たずに Codex と ChatGPT を動かす：Scheduled tasks（旧 Automations）、codex exec と cron、GitHub Action、ハートビート。",
  },
  breadcrumb: "Codex を自律的に動かす",
  hero: {
    kicker: "自律的に動く Codex",
    title: "Codex を自律的に動かす方法",
    lead: "自律的に動く Codex のエージェントは、チャットでじっと待ってはいません。定型的な承認は自分でこなし、スケジュールどおりに動き、プルリクエストや Slack のメッセージに反応し、結果を報告します。OpenAI はそれぞれに対応する機能を提供しており、一部は ChatGPT とも共通です。このガイドでは、それらの設定方法、それぞれにできないこと、そして単発のプロンプトではなく継続的な仕事を Codex に与える方法を紹介します。どの機能にもないのがハートビート、つまり同じ会話を一定のリズムで起こして次のタスクを取らせる仕組みです。最も近い組み込みの方法と、Crewmark がハートビートを加える方法も紹介します。",
    cta: "早期アクセスに登録",
    secondary: "手順へ移動",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "Codex にとって「自律的」とは",
      text: [
        "初期状態の Codex は、聞かれたときに答えるだけです。自律的に動かすには 3 つの要素が必要で、それぞれ製品の別々の場所にあります。",
      ],
      points: [
        "承認のたびに止まらない：定型的な操作を通す権限モード。",
        "自分で動き出す：あなたなしで仕事を始めるスケジュールタスク、イベントトリガー、cron ジョブ。",
        "次に何をすべきかわかっている：バックログと目標。これがあるから、実行のたびに有益な仕事ができます。",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "手順：Codex を自律的に動かす",
      steps: [
        {
          title: "いちいち止まらない権限モードを選ぶ",
          text: "CLI で `/permissions` と入力します。「Approve for me」は、潜在的に危険と判定された操作についてだけ確認を求めるので、見ていない間の仕事に向いています。「Full access」はファイルとインターネットへの制限をなくすので、隔離されたマシン用にとっておきましょう。古いガイドに `--full-auto` を使うよう書かれていても、このフラグはもうサポートされていません。代わりに `--sandbox workspace-write` を使ってください。",
          code: "/permissions",
        },
        {
          title: "スケジュールタスクを作る（旧 Automations）",
          text: "以前 Codex Automations と呼ばれていた機能は、現在は Scheduled tasks（スケジュールタスク）になっています。Codex のチャットで作成を頼みましょう。どんな仕事か、いつ実行するか、結果を同じチャットに返すかを伝えます。タスクは数分ごと、毎日、毎週のいずれかで実行でき、サイドバーの Scheduled ビューで管理します。ローカルのファイルを扱うタスクは、パソコンの電源が入っていてアプリが動いている必要があります。Git リポジトリでは、別のバックグラウンド worktree で作業させることもできます。Codex CLI ではスケジュールタスクを管理できません。",
          code: "Every weekday at 9am, check this repo for failing tests,\nfix what you can in a background worktree,\nand post a summary in this chat.",
        },
        {
          title: "イベントでタスクを起動する",
          text: "時刻の代わりに、何かが起きたときにタスクを始めることもできます。新しい Gmail のメッセージ、指定したチャンネルでの Slack のメッセージ、GitHub のプルリクエストでの動きなどです。イベントトリガーは、対象プランの Web 版またはモバイル版の ChatGPT から設定します。1 つのタスクで使えるのはイベントかスケジュールのどちらか一方で、両方は使えません。",
        },
        {
          title: "codex exec で cron から Codex を実行する",
          text: "`codex exec` は対話型の画面なしで Codex を実行します。進捗は stderr に、最終メッセージだけが stdout に出力されるので、スクリプトや定期ジョブに向いています。`--sandbox workspace-write` を渡さない限り読み取り専用です。OpenAI のドキュメントは用途の 1 つに定期ジョブを挙げていますが、cron の例は載っていません。以下は私たちが用意した例です。",
          code: '# crontab -e：平日の毎朝 9:00\n0 9 * * 1-5  cd ~/my-app && codex exec --sandbox workspace-write "Fix any failing tests and summarize what you changed" >> ~/codex-cron.log 2>&1',
        },
        {
          title: "GitHub のワークフローに Codex を組み込む",
          text: "GitHub Action の `openai/codex-action` は、ワークフローの中で Codex を実行し、トリガーは自由に選べます。プルリクエストで `@codex review` とコメントすればレビューを、`@codex` に頼めば CI の失敗の修正をしてくれます。Linear では、タスクを Codex に割り当てることもできます。",
          code: "# .github/workflows/codex.yml\nsteps:\n  - uses: openai/codex-action@v1\n    with:\n      prompt-file: .github/codex/prompts/review.md\n      openai-api-key: ${{ secrets.OPENAI_API_KEY }}",
        },
        {
          title: "hooks でセッション内の出来事に反応する",
          text: "Codex の hooks は、セッションの開始時、ツール呼び出しの前後、ターンの終了時などに、あなたのコマンドを実行します。Codex の作業中に反応するもので、Codex を起動するものではありません。仕事を始めさせるには、スケジュールタスクかイベントトリガーを使いましょう。",
        },
      ],
      source: {
        label: "出典：OpenAI の Codex ドキュメント（スケジュールタスク）",
        href: "https://learn.chatgpt.com/docs/automations",
      },
    },
    {
      kind: "steps",
      id: "heartbeat",
      kicker: "足りないピース",
      title: "ハートビートを追加する：同じ会話を起こして次のタスクへ",
      text: [
        "ハートビート（heartbeat）とは、勤務時間中の 30 分ごとなど、同じ Codex の会話に定期的に送る短い合図です。「作業を確認して、次のタスクに取りかかって」と伝えます。スケジュールタスクは 1 つのプロンプトを繰り返しますが、ハートビートは 1 つの会話を続けるので、Codex は前回やったことを覚えていて、キューから次の項目を取ります。これが、同じ仕事を繰り返すジョブと、働き続ける社員の違いです。",
      ],
      steps: [
        {
          title: "最も近い組み込みの方法",
          text: "Codex のスケジュールタスクは結果を同じチャットに返せるので、プロンプトをハートビートのように書くことができます。たとえば「30 分ごとに TODO.md を確認し、未完了の次のタスクに取りかかってチェックを付ける」といった具合です。ただしキューのファイルは自分で管理する必要があり、スケジュールは勤務時間もほかのエージェントのことも知りません。",
        },
        {
          title: "Crewmark なら：ハートビートが組み込み済み",
          text: "Crewmark のデーモンは、勤務時間中に 15 分・30 分・60 分ごとに、`codex queue --resume` で社員自身の Codex の会話にハートビートをキューイングします。ボードがそのままキューになり、ハートビートのたびに社員は次のタスクを取って報告します。詳しくは[後述](#crewmark)します。",
        },
      ],
    },
    {
      kind: "text",
      id: "chatgpt",
      title: "ChatGPT はどうか",
      text: [
        "ChatGPT も、自分から連絡してくることができます。ChatGPT のスケジュールタスクは、リマインダー、定期的なブリーフィング、監視している物事の結果を送ってくれます。サイドバーの Scheduled ページにあります。作成できる数と実行頻度はプランによって異なります。毎日自発的に更新情報を届けていた ChatGPT Pulse は 2026年6月に終了し、OpenAI は代わりに毎日のブリーフィング用のスケジュールタスクを案内しています。",
        "Codex との違いは、ChatGPT のタスクが扱えるのは ChatGPT が届く範囲のものであり、あなたのコードベースではないという点です。リポジトリでの仕事には、Codex のスケジュールタスクか `codex exec` を使いましょう。",
      ],
    },
    {
      kind: "table",
      title: "どの方法が合うか",
      headers: ["方法", "自分で仕事を始めるか", "パソコンの電源が必要か", "向いている用途"],
      rows: [
        ["Approve for me", "いいえ。頼んだ後に止まる回数が減る", "はい", "タスク中の中断を減らす"],
        ["ローカルのファイルを扱うスケジュールタスク", "はい。スケジュールどおり", "はい（アプリを起動したまま）", "リポジトリでの毎日の仕事"],
        ["Web 上のスケジュールタスク", "はい。スケジュールどおり", "いいえ", "あなたのファイルを必要としない仕事"],
        ["イベントトリガーのタスク", "はい。Gmail、Slack、GitHub の動きで", "いいえ", "メッセージや PR への反応"],
        ["codex exec + cron", "はい。cron のスケジュールで", "はい", "最初から最後まで自分で制御するスクリプト"],
        ["Codex GitHub Action", "はい。ワークフローのトリガーで", "いいえ", "レビューと CI の修正"],
        ["ChatGPT のスケジュールタスク", "はい。スケジュールどおり", "いいえ", "リマインダーとブリーフィング"],
        ["ハートビートとしてのスケジュールタスク", "はい。スケジュールどおり、結果は同じチャットに", "はい（ローカルのファイルの場合）", "TODO ファイルを順に進める 1 体のエージェント"],
        ["Crewmark のハートビート", "はい。勤務時間中に 15〜60 分ごと、同じ会話の中で", "はい", "バックログ、目標、勤務時間を持つエージェント"],
      ],
    },
    {
      kind: "text",
      title: "それでも、あなたの手に残ること",
      text: ["上のどの方法も実行を始めるだけです。今週 Codex が何に取り組むべきかを決めてくれるものはありません。"],
      points: [
        "スケジュールタスクは 1 つのプロンプトを繰り返すだけです。バックログから次の項目を取ることも、前回の実行で何が終わらなかったかを知ることもありません。",
        "Codex に仕事を渡し、進行中・完了・ブロック中のものを確認できる共有のボードがありません。",
        "勤務時間も目標もないので、月末までにある数字を動かすよう頼むことはできません。",
        "Codex と Claude Code を並べて使うと、プロンプト、スケジュール、確認する場所がそれぞれ 2 つずつになります。",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Crewmark なら",
      title: "Codex に継続的な仕事を与える",
      text: [
        "Crewmark は、Codex の会話を、職種・目標・勤務時間・ハートビートを持つ AI 社員に変え、Claude Code の社員と同じボードを通じて仕事を渡します。本物の Codex の中で、すでに契約している ChatGPT のプランを使って動きます。",
      ],
      steps: [
        {
          title: "社員を採用し、その Codex の会話を接続する",
          text: "職種を選び、Crewmark が表示するセットアップ用のコマンドを Codex で実行します。その会話がそのまま社員になるので、起動と起動の間も仕事を覚えています。",
        },
        {
          title: "勤務時間とハートビートを設定する",
          text: "パソコン上で動く小さなバックグラウンドプログラムである Crewmark のデーモンが、勤務時間中は 15 分・30 分・60 分ごとに `codex queue --resume` で社員のハートビートのプロンプトをその会話にキューイングし、時間外はそっとしておきます。",
        },
        {
          title: "ボードでタスクを割り当てる",
          text: "タスクを割り当てたりコメントしたりすると、その知らせが同じ会話に届きます。あなたが貼り付けるのを待たずに、Codex が自分で新しい仕事を拾います。",
        },
        {
          title: "数字で評価する",
          text: "各社員に KPI を与えます。社員はその数字に向けてタスクを計画し、ボード上で動かし、進捗をコメントし、判断が必要なときはあなたにメッセージを送ります。",
        },
      ],
    },
    {
      kind: "text",
      title: "組み合わせて使う",
      text: [
        "小さな定型作業には Codex 自身のスケジュールタスクを使い、継続的な仕事には Crewmark を使いましょう。社員の会話を「Approve for me」に設定すればハートビートのたびに仕事が進み、プルリクエストのレビューは引き続き `@codex review` で回せます。Claude Code をお使いなら、[Claude Code を自律的に動かす方法](/proactive-claude-code)をどうぞ。",
      ],
    },
  ],
  howTo: { section: "how-to", name: "Codex を自律的に動かす" },
  mid: {
    title: "定期実行のプロンプトではなく、継続的な仕事を Codex に",
    text: "Crewmark は、勤務時間中にハートビートで Codex の会話を起こし、ボードから次のタスクを渡します。",
    button: "早期アクセスに登録",
  },
  faq: {
    title: "よくある質問",
    items: [
      {
        q: "Codex のハートビートとは何ですか？",
        a: "勤務時間中の 30 分ごとなど、同じ Codex の会話に定期的に送る合図で、作業を確認して次のタスクに取りかかるよう伝えます。1 つの会話を続けるので、Codex は以前の仕事を覚えています。最も近いのは、同じチャットに結果を返すスケジュールタスクです。Crewmark には勤務時間とキューとしてのボードを含めてハートビートが組み込まれています。",
      },
      {
        q: "Codex Automations はどうなりましたか？",
        a: "現在は Scheduled tasks（スケジュールタスク）という名前になっています。Codex のチャットで頼んで作成し、アプリの Scheduled ビューで管理します。ドキュメントのページは今も /automations で終わる URL にあります。",
      },
      {
        q: "codex --full-auto はまだ使えますか？",
        a: "いいえ。`--full-auto` はもうサポートされていません。Codex にファイルを編集させるには `--sandbox workspace-write` を、危険そうな操作だけ確認させるには権限モード「Approve for me」を使いましょう。",
      },
      {
        q: "Codex をスケジュールや cron で実行するには？",
        a: "Codex アプリでは、スケジュールタスクの作成を頼みます。自分のスケジューラーからは cron ジョブで `codex exec` を呼び出し、ファイルを変更させる場合は `--sandbox workspace-write` を渡します。リポジトリなら、ワークフローから Codex GitHub Action を実行することもできます。",
      },
      {
        q: "ChatGPT から自発的にメッセージを送ってもらえますか？",
        a: "はい。スケジュールタスクとイベントトリガーのタスクで可能です。毎日自発的に更新情報を届けていた ChatGPT Pulse は 2026年6月に終了し、OpenAI は代わりに毎日のブリーフィング用のスケジュールタスクを勧めています。",
      },
      {
        q: "パソコンの電源が切れていても Codex は動きますか？",
        a: "Web のスケジュールタスク、イベントトリガー、Codex のクラウドタスク、GitHub Action は動きます。ローカルのスケジュールタスク、cron ジョブ、Crewmark など、ローカルのファイルを扱うものはパソコンの電源が必要です。",
      },
      {
        q: "Crewmark を使うと追加のトークン代がかかりますか？",
        a: "いいえ。社員はお手持ちの Codex の中で、すでに契約している ChatGPT のプランを使って動くので、トークン代を二重に払うことはありません。",
      },
    ],
  },
  cta: {
    title: "Codex を最初の AI 社員に",
    text: "職種、目標、勤務時間、ハートビートを与えて、最初のタスクを割り当てましょう。",
    button: "早期アクセスに登録",
  },
  checked: "2026年11月2日に OpenAI の Codex ドキュメントと照合しました。",
  disclaimer:
    "Crewmark は独立した製品であり、OpenAI とは提携しておらず、その承認も受けていません。Codex および ChatGPT は OpenAI の商標です。",
};
