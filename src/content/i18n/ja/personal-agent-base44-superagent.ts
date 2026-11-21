import type { GuideCopy } from "@/components/landing/guide-article";

// ja translation of /personal-agent/base44-superagent; the English master is src/content/personal-agents/base44-superagent.ts.

const docs = "https://docs.base44.com/superagents/creating-a-superagent";

const prompts = `毎朝 7 時に、未読のメール、今日の会議、
私がメンションされた Slack のスレッドをまとめて、ここに送って。

Gmail に新しいリードからメールが届いたら、その人に合わせたフォローアップを下書きして、
送る前に私に確認して。3 日返信がなければ、別の切り口でもう一度送って。

毎週金曜の午後 5 時に、今週の売上、サポート、マーケティングの数字を集めて、
Slack の #weekly にまとめを投稿して。`;

export const copy: GuideCopy = {
  meta: {
    title: "Base44 Superagent：料金、クレジット、WhatsApp、セットアップ",
    description:
      "Base44 の Superagent を解説。パーソナルエージェントにできること、作り方、Base44 のプランと Superagent によるメッセージクレジット・インテグレーションクレジットの消費、WhatsApp・Telegram・Slack との接続、ワークフロー、活用例、ほかのエージェントとの比較を紹介します。",
  },
  breadcrumb: "Base44 Superagent",
  parent: { name: "パーソナルエージェント", href: "/personal-agent" },
  hero: {
    kicker: "パーソナルエージェント · Base44",
    title: "Base44 Superagent：できること、料金、セットアップ方法",
    lead: "Superagent は、Base44 の「24 時間 365 日あなたのためにタスクをこなすパーソナル AI エージェント」です。ブラウザや、WhatsApp、Telegram、Slack などのチャットアプリで話しかけると、接続したツールをまたいで働き、スケジュールやトリガーでワークフローを実行し、会話をまたいで記憶し、電話をかけることもできます。このガイドでは、できること、作り方、料金とクレジットの仕組み、WhatsApp との接続方法、ワークフローの例、ほかのパーソナルエージェントとの比較を紹介します。",
    cta: "今すぐ始める",
    secondary: "料金とクレジット",
    secondaryHref: "#pricing",
  },
  sections: [
    {
      kind: "text",
      title: "Base44 Superagent とは",
      text: [
        "Base44 は AI アプリビルダーとしてよく知られています。Superagent はそれとは別の、会話で指示するパーソナルエージェントです。Base44 は「してほしいことを伝えれば、Superagent があなたのツールをまたいで行動します」と説明しています。アクセスできるのは、あなたが接続したツールとデータだけです。",
      ],
      points: [
        "どこでもチャット：ブラウザ、WhatsApp、Telegram、Slack、iMessage、LINE。WhatsApp ではグループチャットにも参加できます。",
        "コネクター：Gmail、Google カレンダー、Google ドライブ、Notion、GitHub、Slack などに加え、自分の MCP サーバーも。共有コネクターは読み取り専用に設定できます。",
        "ワークフロー：スケジュールで、または接続したツールで何かが起きたときに実行される仕事。",
        "記憶：ナレッジ、作業中の文脈、メモリーログ。会話をまたいで共有することも、分けておくこともできます。",
        "スキルとゴール：再利用できる指示と、大きな成果を一時停止・再開できるタスクに分ける `/goal`。",
        "音声：話しかけることができ、デスクトップでは画面共有も使えます。電話番号があれば、予定ワークフローで電話をかけられます。",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Base44 Superagent の作り方",
      steps: [
        {
          title: "Personal Agent を開く",
          text: "app.base44.com にログインし、サイドバーの Explore の下にある「Personal Agent」をクリックします（サイドバーに Apps と Agent が表示されている場合は Agent タブ）。",
        },
        {
          title: "話しかける場所を選ぶ",
          text: "ブラウザなら「Continue here」、または WhatsApp、Telegram、iMessage を選びます。WhatsApp では QR コードを読み取るかボタンでアプリを開き、入力済みのメッセージを送ります。Telegram では入力済みのメッセージを送るか「Start」を押します。",
        },
        {
          title: "ツールを接続する",
          text: "サイドバーの「Plugins」を開き、コネクターの「Connect」をクリックし、共有コネクターかアプリユーザーのコネクターかを選びます。エージェントが見るだけでよいなら読み取り専用にしましょう。自分の MCP サーバーは「Add Connector」で追加します。",
        },
        {
          title: "仕事の内容を伝える",
          text: "してほしいことを伝えます。役割やプロジェクトの文脈は最初のメッセージに入れ、常に守るべきルールも伝えましょう。繰り返しの仕事なら、スケジュールかトリガーを伝えればワークフローを設定してくれます。",
          code: prompts,
        },
      ],
      source: { label: "出典：Base44 ドキュメント「Creating a Superagent」", href: docs },
    },
    {
      kind: "table",
      id: "pricing",
      title: "Base44 Superagent の料金とクレジット",
      text: [
        "Superagent は Base44 ワークスペースのクレジットで動きます。以下は 2026年11月10日時点の Base44 のプランで、年払いの料金です。料金ページには年払いで 20% お得とあり、月払いの料金は載っていません。",
      ],
      headers: ["プラン", "料金（年払い）", "メッセージクレジット / 月", "インテグレーションクレジット / 月"],
      rows: [
        ["Free", "$0", "25", "100"],
        ["Starter", "$16/月", "100", "2,000"],
        ["Builder", "$40/月", "250", "10,000"],
        ["Pro", "$80/月", "500", "20,000"],
        ["Elite", "$160/月", "1,200", "50,000"],
      ],
    },
    {
      kind: "text",
      id: "credits",
      title: "Superagent のクレジット消費の仕組み",
      points: [
        "メッセージクレジット：エージェントが処理するすべてのメッセージと、すべてのワークフローの実行で、チャットと同じように消費します。WhatsApp、Telegram、Slack、API、オートメーションからのメッセージも含みます。",
        "インテグレーションクレジット：画像生成、ファイル処理、ファイルのアップロード、ダウンロードリンクなどの操作で消費します。",
        "クレジットは決まったスケジュールで補充され、使わなかった分はリセット時に失効します。",
        "ワークスペースのクレジットが尽きると、ワークフローは実行できません。オンのまま残り、クレジットが戻ると再開しますが、実行できなかった分があとで実行されることはありません。",
        "利用状況は Agent Settings > Credit usage で確認できます。Superagent はループしている実行を一時停止して、クレジットの無駄遣いを止めることもできます。",
        "Free プランのメッセージクレジットは月 25 です。実行のたびにメッセージクレジットを使うので、毎日 1 つのワークフロー（月に約 30 回の実行）だけでもそれを超えます。毎日のワークフローには有料プランを考えましょう。",
      ],
    },
    {
      kind: "steps",
      id: "workflows",
      title: "Base44 Superagent のワークフローと例",
      text: [
        "チャットで仕事の内容を伝えるか、「Workflows」を開いて「New Workflow」をクリックし、提案されたワークフローをチャットに送ります。Superagent が、スケジュール型かトリガー型かを判断し、必要なことを尋ねてきます。",
      ],
      steps: [
        {
          title: "スケジュール型",
          text: "設定した時刻に実行されます。未読メール、会議、Slack のスレッドをまとめる朝のブリーフィング、明日の ToDo リスト付きの 1 日の締めくくり、早い予約枠がないか毎週歯科医院に電話で確認する（エージェントに電話番号がある場合）、などです。",
        },
        {
          title: "トリガー型",
          text: "何かが起きたときに実行されます。Gmail への新着メール、Superagent のデータの変化、接続したツールでの動きなどです。たとえば、メールが 24 時間未読のままならリマインドする、各会議の 30 分前にブリーフを送る、といったものです。",
        },
        {
          title: "うまく動かないとき",
          text: "何度か続けて失敗したワークフローは自動で一時停止し、Base44 からメールが届きます。Activity タブを確認し、原因（多くは接続が切れたインテグレーション）を直して「Resume」をクリックし、「Run Now」でテストしましょう。",
        },
      ],
    },
    {
      kind: "table",
      id: "compare",
      title: "Base44 Superagent と Meta Muse、Grok Bot、Claude Duet の比較",
      headers: ["", "Base44 Superagent", "Meta Muse", "Grok Bot", "Claude Duet"],
      rows: [
        ["話しかける場所", "ブラウザ、WhatsApp、Telegram、Slack、iMessage、LINE", "Muse アプリ、muse.ai、WhatsApp", "デスクトップとスマートフォンのアプリ、Slack、X", "Claude Duet アプリ"],
        ["スケジュール", "スケジュール型とトリガー型のワークフロー", "リマインダーと定期タスク", "スケジュールやトリガーで動くルーティン", "注意が必要なことを持ってやって来る"],
        ["料金", "Base44 プランのクレジット。年払いで $16/月から", "週ごとの上限付きで無料。Power は $20/月", "X Premium 以上、SuperGrok、Cursor のプランに含まれる", "Claude Pro 以上に含まれる。ウェイトリスト制"],
        ["ガイド", "このページ", "[Meta Muse](/personal-agent/meta-muse)", "[Grok Bot](/personal-agent/grok-bot)", "[Claude Duet](/blog/claude-duet)"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Crewmark なら",
      title: "用事には Superagent を、バックログには AI 社員を",
      text: [
        "Base44 Superagent は、1 人のツールとチャットを中心に作られています。Crewmark は仕事を中心に作られています。あなたの Claude Code や Codex を、職種、数字の目標、勤務時間、ハートビートを持つ AI 社員に変え、共有ボードから次の issue を取らせます。すでにお持ちのエージェントのプラン以外に、クレジットを買う必要はありません。",
      ],
      steps: [
        {
          title: "職種を選ぶ",
          text: "[AI 社員の職種](/ai-employees)から始めましょう。エンジニア、SEO スペシャリスト、マーケティングエージェント、SNS マネージャー、デザイナーがあります。",
        },
        {
          title: "今のプランで動かす",
          text: "Crewmark はあなたの Claude Code や Codex の中で動きます。[料金](/pricing)をご覧ください。",
        },
        {
          title: "ほかのエージェントと比較する",
          text: "[パーソナル AI エージェントの比較](/personal-agent)と [Superagent とは](/blog/superagent)をご覧ください。",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Base44 Superagent を作る" },
  mid: {
    title: "クレジットを買わずに、仕事を任せられるエージェントがほしいですか？",
    text: "Crewmark の社員は、すでに支払っている Claude Code や Codex のプランの中で動き、共有ボードの仕事を進めます。",
    button: "今すぐ始める",
  },
  faq: {
    title: "よくある質問",
    items: [
      {
        q: "Base44 Superagent とは何ですか？",
        a: "24 時間 365 日あなたのためにタスクをこなす、Base44 のパーソナル AI エージェントです。ブラウザや WhatsApp、Telegram、Slack などのアプリでチャットでき、接続したツールをまたいで働き、スケジュール型やトリガー型のワークフローを実行します。",
      },
      {
        q: "Base44 Superagent の料金はいくらですか？",
        a: "Base44 のプランのクレジットを使います。年払いのプランは Starter が月額 $16、Builder が $40、Pro が $80、Elite が $160 で、メッセージクレジットは 100〜1,200 です。Free プランのメッセージクレジットは月 25 です。",
      },
      {
        q: "Base44 Superagent のクレジットはどう使われますか？",
        a: "処理するメッセージ 1 件ごと、ワークフローの実行 1 回ごとにメッセージクレジットを使い、画像生成やファイル処理などの操作にはインテグレーションクレジットを使います。クレジットはスケジュールでリセットされ、使わなかった分は失効し、クレジットが尽きている間はワークフローが実行されません。",
      },
      {
        q: "Base44 Superagent を WhatsApp につなぐには？",
        a: "作成時に WhatsApp を選び、QR コードを読み取るかボタンで WhatsApp を開いて、入力済みのメッセージを送ります。WhatsApp の番号を接続して、グループチャットで働かせることもできます。",
      },
      {
        q: "Base44 Superagent に何ができますか？",
        a: "夜の間の受信トレイの仕分け、リードへのフォローアップ、航空券の価格の見張り、レストランを予約して友人に伝える、毎週の数字を Slack に投稿する、カレンダーの組み替え、プロジェクトの WhatsApp グループの運営、そして電話番号があれば予定どおりの電話もできます。",
      },
      {
        q: "Base44 Superagent の代わりになるものは？",
        a: "Meta Muse（米国では無料）、Grok Bot（仕事でエージェントのチームを使うなら）、ChatGPT dots と Claude Duet（Pro プランに付属）、Manus Cue、そしてオープンソースの OpenClaw や Hermes Agent です。[パーソナル AI エージェントの比較](/personal-agent)をご覧ください。",
      },
    ],
  },
  cta: {
    title: "用事は Superagent に。仕事は AI 社員に。",
    text: "Crewmark は、Claude Code と Codex のセッションを、職種・目標・勤務時間・ハートビートを持つ AI 社員に変えます。",
    button: "今すぐ始める",
  },
  checked: "2026年11月10日に、Base44 のドキュメント、Superagents ページ、料金ページで確認しました。",
  disclaimer:
    "Crewmark は独立した製品であり、Base44、Wix、Meta、xAI、Anthropic とは提携しておらず、その承認も受けていません。製品名は各所有者の商標です。",
};
