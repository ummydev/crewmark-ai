import type { GuideCopy } from "@/components/landing/guide-article";

// ja translation of /personal-agent/meta-muse; the English master is src/content/personal-agents/meta-muse.ts.

const newsroom = "https://about.fb.com/news/2026/09/introducing-muse-personal-ai-agent/";

const prompts = `平日の毎朝 7 時に、短いブリーフィングを送って。今日の予定、
受信トレイの急ぎの用件、それに天気。

12 月最初の週末にシカゴへ行く $400 以下の便を 3 つ探して、
比較して。予約する前に必ず私に確認して。

車を売りたい。いくらで売れるか調べて、出品文を下書きして、
どのオファーに返事する価値があるか教えて。`;

export const copy: GuideCopy = {
  meta: {
    title: "Meta Muse とは：使い方と料金",
    description:
      "Meta のパーソナル AI エージェント Muse を解説。できること、入手方法と使い方、Free・Power（$20）・Maximum（$100）の各プラン、予定タスク、アプリ連携と支払い、プライバシー設定、ほかのエージェントとの比較を紹介します。",
  },
  breadcrumb: "Meta Muse",
  parent: { name: "パーソナルエージェント", href: "/personal-agent" },
  hero: {
    kicker: "パーソナルエージェント · Meta Muse",
    title: "Meta Muse：Meta のパーソナルエージェントにできること、使い方、料金",
    lead: "Muse は Meta のパーソナル AI エージェントで、2026年9月8日に米国で提供が始まりました。Meta によれば「質問に答えるだけでなく、実際に仕事をこなす」エージェントです。メールを送り、旅行を予約し、フォームを埋め、あなたに代わって交渉し、アプリを閉じたあとも作業を続け、メールの送信や購入など重要なことの前には確認します。このガイドでは、入手方法、使い方、プランとトークンの上限、予定タスク、プライバシー設定、そして Grok Bot、ChatGPT dots、Claude との比較を紹介します。",
    cta: "今すぐ始める",
    secondary: "使い方を見る",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "Meta Muse とは",
      text: [
        "Muse は Meta のモデル Muse Spark で動き、Meta が Muse Secure VM と呼ぶ専用のクラウドマシンの中で働きます。目標を計画に変えてバックグラウンドで進め、状況が変わったときや承認が必要なときに戻ってきます。",
      ],
      points: [
        "実行する：メールを送り、旅行を予約し、ブラウザを開き、フォームを埋め、交渉します。Meta の例には、車をより高く売る、請求額を下げる、トレーニング計画を調整する、などがあります。",
        "覚えている：一度話した細かいことから、あなたにとって大事なことを覚え、頼まれなくても提案します。たとえば、保存した Instagram のレシピリールを買い物リストに変える、といったことです。",
        "安全に買い物する：決済は Link by Stripe を通り、そのエージェントウォレットが使い捨てのカードを発行するので、Muse があなたの本当のカード番号を見ることはありません。",
        "いつもの場所で使える：Muse アプリ、Web の muse.ai、WhatsApp で使えます。次は Meta の AI グラスです。",
        "Facebook、Instagram、WhatsApp に入っているアシスタントの Meta AI や、Meta の開発者向け製品 Muse Code とは別物です。",
      ],
    },
    {
      kind: "table",
      id: "pricing",
      title: "Meta Muse の料金：Free、Power、Maximum",
      text: [
        "2026年11月10日時点の Meta ヘルプセンターによります。Muse とそのサブスクリプションは限定テスト中で、まだすべての地域では使えません。",
      ],
      headers: ["プラン", "料金", "週ごとの利用量"],
      rows: [
        ["Free", "$0", "無料の週ごとの利用上限（Meta は量を公表していません）。リセットを待つかアップグレード"],
        ["Power", "月額 $20", "週 500M Muse トークン"],
        ["Maximum", "月額 $100", "週 3B Muse トークン"],
        ["追加トークン", "別売り", "週ごとの割り当てに上乗せして購入"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Meta Muse の入手方法と使い方",
      text: [
        "18 歳以上（またはお住まいの地域の成年年齢以上）で、Muse が使える地域にいて（提供開始は米国）、Meta アカウントでサインインする必要があります。アカウントは Facebook、Instagram、メールアドレス、電話番号で作成できます。",
      ],
      steps: [
        {
          title: "アプリをダウンロードするか muse.ai を開く",
          text: "iOS か Android で Muse アプリを入れるか、muse.ai でサインインします。Meta は Windows や Mac のアプリを挙げていないので、パソコンではブラウザで muse.ai を使いましょう。",
        },
        {
          title: "してほしいことを伝える",
          text: "Muse はチャットタブで開きます。手順ではなく、ほしい結果を伝えましょう。最初にいくつか質問してくることもあります。返事を待たずに追加の依頼を送ることもでき、文脈を繰り返す必要もありません。",
          code: prompts,
        },
        {
          title: "必要なアプリをつなぐ",
          text: "Muse が使えるアプリと、それぞれのアクセス範囲を選びます。メールなら読み取りのみか、読み取りと送信か。決済時の Shop Pay と、既存のログインを使えるようにする 1Password にも近日対応予定です。",
        },
        {
          title: "承認し、確認し、ファイルを見つける",
          text: "Muse はメールの送信や購入など要注意の操作の前に確認し、実行したことと予定していることの監査ログを残します。作成したファイルは Library タブに保存されます。",
        },
      ],
      source: { label: "出典：Meta による Muse の発表", href: newsroom },
    },
    {
      kind: "text",
      id: "scheduled-tasks",
      title: "Muse のリマインダーと予定タスク",
      text: [
        "Muse には独立したスケジューラー画面はありません。リマインダーや定期タスクは頼むだけで設定でき、その動作は Meta のヘルプセンターで説明されています。",
      ],
      points: [
        "1 回だけ：何をいつリマインドしてほしいかを伝えると、正確な時刻を確認してくれます。",
        "定期：タスクと頻度を伝えます。たとえば「毎週月曜の朝 9 時に、勤務表の提出をリマインドして」。キャンセルするまで続き、そのたびに Muse からメッセージが届きます。",
        "一覧を見る：「どんなリマインダーがある？」と聞くか、上部のアシスタントアイコンをタップして「Upcoming」を開きます。",
        "変更・キャンセル：どれを、どう変えるかを伝えます。たとえば月曜のリマインダーを火曜に移す、など。",
        "時刻はあなたのタイムゾーンに従います。過ぎた時刻を選ぶと、Muse が別の時刻を提案します。",
        "毎日のルーティンのアイデアは [Meta Muse の活用例](/personal-agent/meta-muse-use-cases)にまとめています。",
      ],
    },
    {
      kind: "text",
      id: "privacy",
      title: "プライバシー：オプトアウトの方法と Meta に見えるもの",
      points: [
        "Muse は 1 人ずつ専用の Muse Secure VM で動き、ほかの人のエージェントからはアクセスできません。",
        "Muse がインターネットに送るものはすべて、別のエージェント Sentinel が承認する必要があり、必要に応じてあなたに確認します。",
        "Muse はあなたのパスワードや支払い方法を見られません。共有したログイン情報は安全なストレージに保存されます。",
        "会話と VM のデータは、Meta の広告システムとは共有されません。",
        "やり取りを Meta の AI の学習に使わせないようにオプトアウトでき、どのアプリも変更・切断でき、Muse に何かを忘れさせることもできます。",
        "Meta は今年後半に、あなただけが持つ鍵で暗号化される Muse Confidential VM を予定しています。",
      ],
    },
    {
      kind: "text",
      id: "not-working",
      title: "Meta Muse が使えない、うまく動かないときは",
      points: [
        "米国外にいる：Muse は米国で提供が始まり、ほかの地域では限定テスト中です。Meta はまだすべての地域では使えないとしています。",
        "18 歳未満：18 歳以上か、お住まいの国の成年年齢以上である必要があります。",
        "無料の上限に達した：週ごとの上限のリセットを待つか、Power か Maximum にアップグレードするか、追加トークンを購入します。",
        "音声モードがない：音声は一部の国でのみ使え、マイクへのアクセスが必要です。設定 > Voice and Avatar で変更できます。",
        "予期しないことをした：Meta は Muse が不正確だったり予期しない操作をしたりすることがあると注意しています。送信と購入の承認はオンのままにし、監査ログを確認しましょう。",
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Meta Muse と Grok Bot、ChatGPT dots、Claude Duet の比較",
      headers: ["", "Meta Muse", "Grok Bot", "ChatGPT dots", "Claude Duet"],
      rows: [
        ["提供元", "Meta", "xAI", "OpenAI", "Anthropic"],
        ["向いている用途", "日常のタスクと生活の雑務", "仕事：あなたのアプリで働く Bot のチーム", "ChatGPT の中で長期的な目標を進める", "自分から様子を確かめに来る能動的な Claude"],
        ["最も安い始め方", "週ごとの上限付きで無料", "無料の試用クレジット。X Premium 以上", "ChatGPT Pro", "Claude Pro、ウェイトリスト制"],
        ["スケジュール", "リマインダーと定期タスク", "スケジュール、Slack、メール、Webhook で動くルーティン", "予定リマインダーと定期チェック", "注意が必要なことを持ってやって来る"],
        ["ガイド", "このページ", "[Grok Bot](/personal-agent/grok-bot)", "[ChatGPT dots](/blog/chatgpt-dots)", "[Claude Duet](/blog/claude-duet)"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Crewmark なら",
      title: "用事は Muse に。では、バックログは誰が？",
      text: [
        "Muse は生活の雑務のために作られています。任せたい仕事がコードリポジトリやマーケティング計画の中にあるなら、Crewmark があなたの Claude Code や Codex を、職種、数字の目標、勤務時間、ハートビートを持つ AI 社員に変えます。社員はボードから次の issue を取り、判断が必要なときにメッセージを送ってきます。",
      ],
      steps: [
        {
          title: "職種を選ぶ",
          text: "SEO スペシャリストや SNS マネージャーなど、[AI 社員の職種](/ai-employees)から始めましょう。",
        },
        {
          title: "勤務時間とハートビートを与える",
          text: "設定した時間帯に、15〜240 分ごとに起きて働きます。[Claude Code を能動的に動かす方法](/proactive-claude-code)もご覧ください。",
        },
        {
          title: "パーソナルエージェントを比較する",
          text: "[パーソナル AI エージェントの比較](/personal-agent)をご覧ください。",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Meta Muse を使い始める" },
  mid: {
    title: "仕事のバックログを片付けてくれるエージェントがほしいですか？",
    text: "Crewmark の社員は、今お使いの Claude Code や Codex のプランで、ハートビートで起きてボードから次の issue に取りかかります。",
    button: "今すぐ始める",
  },
  faq: {
    title: "よくある質問",
    items: [
      {
        q: "Meta Muse とは何ですか？",
        a: "Meta のパーソナル AI エージェントで、2026年9月8日に米国で提供が始まり、Muse Spark モデルで動いています。専用のクラウドマシンから、あなたの代わりにメールを送り、旅行を予約し、フォームを埋め、買い物をし、要注意の操作の前には確認します。",
      },
      {
        q: "Meta Muse は無料ですか？",
        a: "はい、週ごとの利用上限付きで無料です。Power は月額 $20 で週 500M Muse トークン、Maximum は月額 $100 で週 3B で、追加トークンも購入できます。",
      },
      {
        q: "Meta Muse はどうすれば使えますか？",
        a: "iOS か Android で Muse アプリをダウンロードするか muse.ai にアクセスし、Meta アカウントでサインインします。18 歳以上（または成年年齢以上）で、Muse が使える地域にいる必要があります。提供開始は米国です。",
      },
      {
        q: "Meta Muse は Windows や Mac で使えますか？",
        a: "Meta が挙げているのは iOS と Android のアプリ、そして muse.ai です。Windows PC や Mac では、ブラウザで muse.ai を使いましょう。",
      },
      {
        q: "Muse にスケジュールでタスクを実行させられますか？",
        a: "はい。「毎週月曜の朝 9 時に、勤務表の提出をリマインドして」のように定期タスクを頼めば、キャンセルするまで続きます。一覧はアシスタントアイコンの「Upcoming」にあります。",
      },
      {
        q: "Meta は Muse での会話を広告に使いますか？",
        a: "Meta は、会話と VM のデータを広告システムとは共有しないとしています。やり取りを Meta の AI モデルの学習に使わせないようオプトアウトすることもできます。",
      },
    ],
  },
  cta: {
    title: "用事はパーソナルエージェントに。バックログは AI 社員に。",
    text: "Crewmark は、Claude Code と Codex のセッションを、職種・目標・勤務時間・ハートビートを持つ AI 社員に変えます。",
    button: "今すぐ始める",
  },
  checked: "2026年11月10日に、Meta による Muse の発表と Meta ヘルプセンターの記事で確認しました。",
  disclaimer:
    "Crewmark は独立した製品であり、Meta、xAI、OpenAI、Anthropic とは提携しておらず、その承認も受けていません。Muse、Meta、WhatsApp は Meta の商標です。",
};
