import type { GuideCopy } from "@/components/landing/guide-article";

// Japanese translation of /blog/claude-duet; the English master is src/content/blog/claude-duet.ts.

const announcement = "https://claude.com/resources/articles/claude-duet";

export const copy: GuideCopy = {
  meta: {
    title: "Claude Duet とは？ Anthropic の自律型エージェントのウェイトリスト・利用条件・制限 | Crewmark",
    description:
      "Claude Duet は、2026年10月21日からリサーチプレビューが始まった Anthropic の自律型エージェントアプリです。できること、利用できる人、ウェイトリストへの参加方法、料金、安全面の制限、他サービスとの比較を解説します。",
  },
  breadcrumb: "Claude Duet",
  parent: { name: "ブログ", href: "/blog" },
  article: { published: "2026-11-05" },
  hero: {
    kicker: "ブログ · Claude",
    title: "Claude Duet とは？ 利用できる人と仕組み",
    lead: "Claude Duet は Anthropic の新しいアプリで、Claude が自律型エージェントとして働きます。注意が必要なことを向こうから知らせ、任せたタスクをこなし、あなたが離れている間も作業を続け、あなたに代わって行動する前に確認を取ります。2026年10月21日に、ウェイトリスト制のリサーチプレビューとして、米国の Pro、Max、Ultra の購読者向けに公開されました。このガイドでは、できること、利用方法、料金、安全面の制限、他サービスとの比較を説明します。",
    cta: "早期アクセスに登録",
    secondary: "利用方法",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "Claude Duet とは",
      text: [
        "通常の Claude のチャットは、あなたが開くまで待っています。Duet は先に連絡してきます。連携したアプリを見守り、短い朝のブリーフを送り、用事がないときは静かにして、タスクが終わったときや判断が必要なときにメッセージを送ります。Anthropic は、専門職や小規模事業主向けに、Claude Opus 5.5 をベースに作りました。",
      ],
      points: [
        "朝のブリーフ：連携したアプリ全体から、最も重要なことを毎日短くまとめます。",
        "1つのスレッド：同僚に話しかけるようにテキストか音声でメッセージを送ると、1つの会話が続いていきます。",
        "あなたの Claude のコンテキスト：最初のメッセージから、Claude アカウントのメモリ、スキル、連携アプリを使います。",
        "専用のクラウドコンピューター：タスクは専用のブラウザーを持つ仮想マシンで実行されるので、ノート PC やスマートフォンの電源は切っていても大丈夫です。",
        "小さなタスクも大きなタスクも：会議の調整、返信の下書き、未払い請求書の督促、確認用の給与計算の準備、ダッシュボード・予測・スライド・プロトタイプの作成など。",
        "コネクター：Claude Marketplace にある6,000以上のコネクターとプラグイン。Gmail、Slack、QuickBooks、Stripe、HubSpot、Docusign、Shopify などがあります。",
      ],
    },
    {
      kind: "table",
      title: "Claude Duet の概要",
      headers: ["", "Claude Duet"],
      rows: [
        ["発表", "2026年10月21日、リサーチプレビューとして"],
        ["利用できる人", "米国の Pro、Max、Ultra の購読者。ウェイトリスト経由"],
        ["Team と Enterprise", "まだ対象外"],
        ["利用場所", "単体の iOS・Android アプリと、パソコンの claude.ai"],
        ["料金", "単独の料金はなし：プランに含まれ、Claude の他の機能と同じ使用量制限を使う"],
        ["モデル", "Claude Opus 5.5"],
        ["確認の頻度", "数時間ごと。通知してほしい内容と頻度は自分で選べる"],
        ["API", "発表されていない"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Claude Duet を利用して設定する方法",
      steps: [
        {
          title: "プランが対象か確認する",
          text: "米国の Pro、Max、Ultra のいずれかのプランが必要です。Team と Enterprise のプランは、まだプレビューの対象外です。",
        },
        {
          title: "ウェイトリストに参加する",
          text: "claude.com/product/claude-duet の Claude Duet のページで登録します。お使いのアカウントで Duet が使えるようになると、Anthropic からメールが届きます。",
        },
        {
          title: "アプリを開く",
          text: "iOS または Android に単体の Claude Duet アプリをインストールするか、パソコンの claude.ai で使います。メインの Claude アプリとは別ですが、アカウントは共通です。",
        },
        {
          title: "見守らせたいアプリを連携する",
          text: "すでに Claude に連携しているアプリは引き継がれ、どちらかでオフにすると両方でオフになります。まずは受信トレイ、カレンダー、請求書など、大事なものを少数から始めましょう。",
        },
        {
          title: "知らせてほしい内容を伝える",
          text: "何を緊急とみなすか、更新をどのくらいの頻度で受け取りたいかを設定します。バックグラウンドの確認はそのたびにプランの上限を消費するので、ルールを少なく絞るほど長持ちします。",
        },
        {
          title: "タスクを任せ、その操作を承認する",
          text: "同僚にメッセージを送るように話しかけます。読み取りや下書きは自分で行い、送信・支払い・署名・削除の前には、操作、宛先、内容を見せて承認を待ちます。",
        },
      ],
      source: { label: "出典：Anthropic の Claude Duet の発表", href: announcement },
    },
    {
      kind: "text",
      title: "安全性、プライバシー、制限",
      points: [
        "承認：重要なメッセージの送信、支払い、削除の前に、何をするのかを正確に見せて待ちます。モデルとは別の仕組みが、各操作があなたの意図に合っているかも判断します。",
        "承認があっても許可されないこと：証券の売買、口座間の資金移動、他人のアカウントの使用。",
        "パスワード：パスワード、cookie、サインイントークンは見ません。購入には、その店舗と金額に限定した使い捨てカードを使います。",
        "機密データ：分類器がカード番号、銀行口座番号、公的な ID の共有をブロックします。健康や金融の情報は、あなたが求めたときだけ共有されます。",
        "メモリ：会話履歴とメモリは、削除またはリセットするまで保持されます。アプリの連携を解除すると新たなアクセスは止まりますが、すでに学んだ内容はメモリをリセットするまで残ります。",
        "初期のプレビュー：Anthropic によると、スレッドを読み違えたり、緊急度を見誤ったり、確認と確認の間に届いたものを見逃したりすることがあり、仕事のタスクより個人的な用事のほうが苦手です。",
      ],
    },
    {
      kind: "table",
      title: "Claude Duet vs ChatGPT dots vs Crewmark",
      text: [
        "3つとも、あなたがチャットにいなくても働き続けるエージェントです。Duet と [ChatGPT dots](/blog/chatgpt-dots) は、各社のクラウドで動く、業務アプリ向けのアシスタントです。Crewmark は、Claude Code や Codex など、すでに動かしているコーディングエージェントをハートビートで起こし、ボード上の issue をこなさせます。",
      ],
      headers: ["", "Claude Duet", "ChatGPT dots", "Crewmark"],
      rows: [
        ["動く場所", "Anthropic のクラウドコンピューター", "OpenAI のクラウドコンピューター", "あなたのコンピューター上の Claude Code、Codex、DeepSeek Harness、OpenCode の中"],
        ["作業の始まり方", "あなたのメッセージと数時間ごとの確認", "あなたのメッセージ、スケジュール、自分で行うリサーチ", "勤務時間中の15〜60分ごとのハートビート"],
        ["得意なこと", "受信トレイ、カレンダー、請求書、ブリーフ、ダッシュボード", "連携したアプリをまたぐリサーチとタスク", "コード、SEO など、リポジトリでの仕事。職種ごとに1人の社員"],
        ["作業キュー", "1つの継続スレッド", "会話スレッドと Scheduled", "カンバンボード上の issue"],
        ["費用", "米国の Pro、Max、Ultra に含まれる", "Pro と Business Premium プラン", "早期アクセス。すでにお持ちのエージェントとプランで動く"],
        ["状況", "リサーチプレビュー、ウェイトリスト", "順次提供中", "早期アクセス"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Crewmark なら",
      title: "Claude Code でも同じ自律性がほしい？",
      text: [
        "Duet が見守るのは受信トレイと業務アプリで、Anthropic はコードリポジトリで作業するとは説明していません。Crewmark は同じ発想をコーディングエージェントに持ち込みます。Claude Code、Codex、DeepSeek Harness、OpenCode のセッションに職種・目標・勤務時間を与え、ハートビートで同じ会話の中で起こします。",
      ],
      steps: [
        {
          title: "セッションを社員にする",
          text: "ソフトウェアエンジニアや SEO 担当などの職種を選び、目標を数字で書いて、Claude Code でセットアップコマンドを実行します。",
        },
        {
          title: "ハートビートで仕事を始めさせる",
          text: "勤務時間中、社員は15分・30分・60分ごとに起きて、前回の続きから再開します。詳しくは [Claude Code を自律的に動かす方法](/proactive-claude-code)をご覧ください。",
        },
        {
          title: "issue を割り当て、メッセージに返信する",
          text: "ボードに仕事を置くと、社員がそれを拾い、進めながらコメントし、判断が必要なときはメッセージを送ってきます。[AI 社員とは](/ai-employees)もご覧ください。",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Claude Duet を利用して設定する" },
  mid: {
    title: "向こうから連絡してくるエージェントが気に入りましたか？",
    text: "Crewmark は Claude Code と Codex で、それを実現します。ハートビート、勤務時間、issue のボードを使い、契約中のプランのままご利用いただけます。",
    button: "早期アクセスに登録",
  },
  faq: {
    title: "Claude Duet のよくある質問",
    items: [
      {
        q: "Claude Duet とは？",
        a: "2026年10月21日からリサーチプレビュー中の Anthropic のアプリで、Claude が自律型エージェントとして働きます。連携したアプリを見守り、朝のブリーフを送り、専用のクラウドコンピューターでタスクをこなし、あなたに代わって行動する前に承認を求めます。",
      },
      {
        q: "Claude Duet はいつリリースされた？",
        a: "Anthropic は2026年10月21日に、ウェイトリスト付きでリサーチプレビューを開始しました。アクセスは段階的に広がり、お使いのアカウントで使えるようになると Anthropic からメールが届きます。",
      },
      {
        q: "Claude Duet を利用するには？",
        a: "米国の Pro、Max、Ultra のいずれかのプランで、claude.com/product/claude-duet からウェイトリストに参加します。その後は、iOS または Android の Claude Duet アプリか、パソコンの claude.ai で使います。",
      },
      {
        q: "Claude Duet は Team や Enterprise のプランでも使える？",
        a: "まだ使えません。Anthropic のプロダクトページには、Team と Enterprise のプランはプレビューの対象外と書かれています。",
      },
      {
        q: "Claude Duet の料金は？",
        a: "単独の料金はありません。Pro、Max、Ultra に含まれ、Claude の他の機能と同じ使用量制限を使います。バックグラウンドの確認や大きなタスクは、より多く消費します。",
      },
      {
        q: "Claude Duet は安全？",
        a: "送信、支払い、署名、削除の前に確認を取り、パスワードやサインイントークンは見ず、購入には使い捨てカードを使い、承認があっても証券の売買や口座間の資金移動はできません。初期のプレビューなので、緊急度を見誤ることはあります。",
      },
      {
        q: "Claude Duet は自分のリポジトリでコードを書ける？",
        a: "専用のクラウドコンピューターでプロトタイプや Web アプリは作れますが、Anthropic はあなたのリポジトリ向けのコーディングエージェントとしては位置づけていません。その用途には Claude Code を使い、Crewmark はハートビートと issue のボードで Claude Code のセッションを自律的にします。",
      },
    ],
  },
  cta: {
    title: "Claude Code のセッションも、自律的に動かそう。",
    text: "Crewmark は、Claude Code、Codex、DeepSeek Harness のセッションを、職種・目標・勤務時間・ハートビートを持つ AI 社員に変えます。",
    button: "早期アクセスに登録",
  },
  checked: "2026年11月5日に Anthropic の Claude Duet の発表、プロダクトページ、安全性に関する記事と照合しました。",
  disclaimer:
    "Crewmark は独立した製品であり、Anthropic や OpenAI とは提携しておらず、その承認も受けていません。Claude、Claude Duet、Claude Code は Anthropic の商標、ChatGPT は OpenAI の商標です。",
};
