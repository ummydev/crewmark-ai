import type { GuideCopy } from "@/components/landing/guide-article";

// Japanese translation of /personal-agent/copilot-cowork; the English master is
// src/content/personal-agents/copilot-cowork.ts.

const getStarted = "https://learn.microsoft.com/en-us/copilot/cowork/get-started";

export const copy: GuideCopy = {
  meta: {
    title: "Copilot Cowork：料金、クレジット、ライセンスを解説",
    description:
      "Copilot Cowork を解説。Microsoft 365 のエージェントの機能、Copilot Credits の料金、ライセンス、スキル、設定、Claude Cowork との違い。",
  },
  breadcrumb: "Copilot Cowork",
  parent: { name: "パーソナルエージェント", href: "/personal-agent" },
  hero: {
    kicker: "パーソナルエージェント · Microsoft",
    title: "Copilot Cowork：Microsoft 365 向けの Microsoft のエージェントにできることと課金の仕組み",
    lead: "Copilot Cowork は、Microsoft 365 をまたいで複数ステップのタスクをこなす、Microsoft 365 Copilot のエージェントです。メールの送信、会議の設定、Word・Excel・PowerPoint・PDF ファイルの作成と編集、Teams への投稿、OneDrive と SharePoint のファイル管理、組織内の検索、ディープリサーチを行い、重要な操作の前には承認を求めます。2026年6月に、職場または学校のアカウント向けに一般提供が始まりました。このガイドでは、できること、ライセンスと Copilot Credits の仕組み、セットアップ方法、承認の仕組み、Claude Cowork、Claude Code、Codex との比較を紹介します。",
    cta: "今すぐ始める",
    secondary: "セットアップする",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "Copilot Cowork とは、何に使うのか",
      text: [
        "Microsoft は Cowork を、Microsoft 365 をまたいであなたの代わりに複数ステップのタスクを実行するエージェント型のシステムと説明しています。想定される用途には、あるテーマを調べてドキュメントを書き、1 つの会話の中で関係者にメールで送ること、定期的なブリーフィングやレポート、届いたメールや Teams のメッセージに反応するタスクがあります。",
      ],
      points: [
        "Microsoft のクラウドの隔離された環境で動きます。ファイルは OneDrive と SharePoint に作成され、そこから読み込まれます。ローカルのデバイス上のファイルにはアクセスできません。",
        "ブラウザを使える：Web 版の Cowork では、ブラウザのタスクはあなたのデバイス上の非表示の Microsoft Edge タブで、既存のサインイン状態のまま実行されます。",
        "複数のメーカーのモデルを使う：デフォルトで Auto に設定されたモデルピッカーで、テナントの設定に応じて GPT、Claude、Grok のモデルを選べます。EU データ境界（EU Data Boundary）内のテナントでは GPT モデルのみです。",
        "スキルとプラグイン：OneDrive に `SKILL.md` ファイルとして最大 50 個のカスタムスキルを追加できます。職種や業界向けのプラグインには Cowork 用の Accounting、Finance、Capital Markets があり、ほかのプラグインとコネクタは Dynamics 365、Jira、Salesforce、ServiceNow、SAP ERP、Workday HCM、Zendesk、MCP アプリに対応します。",
        "仕事を繰り返す：普通の言葉で書く、ユーザーあたり最大 25 件のスケジュールされたプロンプトに加え、条件に合うメールが届いたときや Teams にメッセージが投稿されたときに動くイベント駆動のタスクがあります。",
        "タスクを追跡する：Tasks ビューでは In progress、Needs input、Done、Failed で絞り込め、Automations ページにはスケジュールとイベント駆動のタスクが並び、Projects（2026年10月）では関連するタスク、指示、ファイルをまとめておけます。",
      ],
    },
    {
      kind: "table",
      id: "plans",
      title: "Copilot Cowork の料金、クレジット、ライセンス",
      text: [
        "Microsoft Learn、Microsoft サポート、Microsoft の Copilot Credits Guide（2026年11月）をもとに、2026年11月13日に確認した情報です（米ドル）。Cowork は、Microsoft 365 Copilot ライセンスに加えて、Copilot Credits で利用量に応じて課金されます。タスクごとの決まったクレジット消費量はなく、使うモデル、実行時間、コンテキスト、ツールによって変わります。",
      ],
      headers: ["項目", "料金または要件"],
      rows: [
        ["Microsoft 365 Copilot ライセンス", "職場または学校のアカウントで必要で、ユーザーに割り当てる。価格は Cowork のドキュメントに記載なし"],
        ["Copilot Credits の従量課金", "1 Copilot Credit あたり $0.01。月ごとに後払いで請求"],
        ["Copilot Credit Pre-Purchase Plan（P3）", "前払いの 1 年間のプール。割引は 5%（300,000 クレジット）から 20%（300,000,000 クレジット）まで。未使用のクレジットは期間終了時に失効"],
        ["管理者による設定", "Cowork の有効化、従量課金のオン、Cowork を選択した支出ポリシー。管理者はユーザー単位またはグループ単位でクレジットの上限を設定可能"],
        ["個人の Microsoft アカウント", "プレビュー中。対象の Microsoft 365 サブスクリプションが必要。価格は記載なし"],
        ["教育機関", "教職員は利用可能。学生は対象外"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Copilot Cowork のセットアップ方法",
      steps: [
        {
          title: "ライセンスを用意する",
          text: "職場または学校のアカウントでは、自分に割り当てられた Microsoft 365 Copilot ライセンスが必要です。個人アカウントはプレビュー中で、対象の Microsoft 365 サブスクリプションが必要です。",
        },
        {
          title: "管理者にオンにしてもらう",
          text: "管理者が Cowork を有効にし、従量課金をオンにして、Cowork を選択した支出ポリシーでアクセスを付与します。ブラウザを使うには、Cowork Browsing の有効化も必要です。",
        },
        {
          title: "仕事をする場所で Cowork を開く",
          text: "Web（Edge または Chrome を推奨）、Windows と macOS 向けの Microsoft Copilot デスクトップアプリ、iOS と Android 向けのモバイルアプリ、または Outlook や Teams の中で使えます。",
        },
        {
          title: "タスクを伝える",
          text: "たとえば、あるテーマを調べてドキュメントを書き、必要な人にメールで送るよう頼みます。モデルは Auto のままにするか自分で選びます。推論の強さ（reasoning effort）はデフォルトで Medium です。",
        },
        {
          title: "スキルと自動化を追加する",
          text: "カスタムスキルを `SKILL.md` ファイルとして OneDrive に置き、スケジュールされたプロンプトを普通の言葉で書くか、条件に合うメールや Teams のメッセージが届いたときにタスクが動くよう設定します。",
        },
      ],
      source: { label: "出典：Microsoft Learn「Copilot Cowork get started」", href: getStarted },
    },
    {
      kind: "text",
      id: "safety",
      title: "Copilot Cowork で主導権を保つ仕組み",
      points: [
        "メールの送信、Teams への投稿、会議の設定など重要な操作の前には、Cowork がプレビュー付きの承認ダイアログを表示します。中リスクと高リスクの操作にはリスクレベルが表示されます。",
        "1 回だけ承認する、その会話の残りで同様の操作の確認を省く（メールと Teams では、宛先、ドメイン、常に、のいずれかの範囲）、キャンセルする、から選べます。",
        "イベント駆動のタスクはデフォルトで「下書きして承認」になり、どのタスクも一時停止、再開、キャンセルできます。",
        "OneDrive や SharePoint のファイルやフォルダは削除できず、CAPTCHA、パスワード、MFA コード、アカウントの変更ではブラウザの操作をあなたに戻します。",
        "管理者は支出ポリシーでアクセスを管理し、ユーザー単位またはグループ単位でクレジットの上限を設定し、Anthropic のものを含むモデルファミリーをオフにできます。",
      ],
    },
    {
      kind: "table",
      id: "vs",
      title: "Copilot Cowork と Claude Cowork、Claude Code、Codex の比較",
      text: [
        "2026年11月13日に確認した各ベンダー自身のドキュメントと料金ページの情報です。ほかの AI の同僚は [AI の同僚ツールの比較](/blog/ai-coworker)で比べています。[Claude Cowork のガイド](/personal-agent/claude-cowork)と [Claude Code vs Codex](/blog/claude-code-vs-codex) もご覧ください。",
        "並べて比較：[Copilot Cowork vs Claude Cowork](/compare/copilot-cowork-vs-claude-cowork)、[Copilot Cowork vs Copilot Studio](/compare/copilot-cowork-vs-copilot-studio)。ガイド：[Claude Cowork](/personal-agent/claude-cowork)。",
      ],
      headers: ["", "Copilot Cowork", "Claude Cowork", "Claude Code", "Codex"],
      rows: [
        ["提供元", "Microsoft", "Anthropic", "Anthropic", "OpenAI"],
        ["用途", "Microsoft 365 をまたぐ複数ステップのタスク", "コーディング以外のナレッジワーク", "コーディング：コードベースを読み、ファイルを編集し、コマンドを実行", "コーディング：リポジトリのコードを調べ、編集し、実行"],
        ["動く場所", "Microsoft のクラウド。OneDrive と SharePoint を使用。ローカルのファイルは不可", "Anthropic のクラウド。ローカルのファイルは Claude Desktop 経由", "自分のマシン上のターミナル、IDE、デスクトップアプリ。Web ではクラウドセッション", "CLI、IDE 拡張機能、ChatGPT デスクトップアプリ。Codex Cloud"],
        ["モデル", "テナントの設定に応じて GPT、Claude、Grok のモデル", "Claude モデル", "Claude モデル", "OpenAI モデル"],
        ["支払い方法", "Microsoft 365 Copilot ライセンスと Copilot Credits", "Claude の有料プラン、Pro は $20/月から", "Claude の有料プラン、Pro は $20/月から。または API クレジット", "Plus（$20/月）などの ChatGPT プラン。または OpenAI の API キー"],
        ["繰り返しの仕事", "スケジュールされたプロンプト。メール、Teams、コネクタのイベント", "毎時〜毎週のスケジュールタスク、クラウドで", "クラウドとデスクトップのスケジュールタスク、`/loop`", "スケジュールタスク。Gmail、Slack、GitHub のイベント"],
        ["承認", "重要な操作の前にプレビュー付きの承認ダイアログ", "Manual、Auto、Skip のモード", "`default` から `bypassPermissions` までの権限モード", "Ask for approval、Approve for me、フルアクセス"],
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Crewmark なら",
      title: "Microsoft 365 には Cowork を。リポジトリには Crewmark を。",
      text: [
        "Copilot Cowork は、Outlook、Teams、OneDrive、SharePoint をまたいでタスクを進めます。Crewmark は、あなたの Claude Code や Codex のセッションを、職種、数字の目標、勤務時間、ハートビートを持つ AI 社員に変えます。それぞれが共有ボードから issue を取るので、リポジトリでのエンジニアリング、SEO、マーケティングの仕事がスケジュールどおりに進み続けます。",
      ],
      steps: [
        { title: "職種を選ぶ", text: "ソフトウェアエンジニアや SEO スペシャリストなど、[AI 社員の職種](/ai-employees)から始めましょう。" },
        { title: "仕事をボードに載せる", text: "issue を割り当て、定期的なものは繰り返すよう設定します。ハートビートが社員を起こし、次の issue に取りかからせます。" },
        { title: "できることを見る", text: "セットアップ付きの仕事の例は、[Claude Code の活用例](/use-cases/claude-code)と [Codex の活用例](/use-cases/codex)にあります。" },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Copilot Cowork をセットアップする" },
  mid: {
    title: "コードベースのための AI の同僚がほしいですか？",
    text: "Crewmark は、あなたの Claude Code や Codex に、職種、ハートビート、共有ボードを与えます。",
    button: "今すぐ始める",
  },
  faq: {
    title: "Copilot Cowork のよくある質問",
    items: [
      {
        q: "Copilot Cowork とは何ですか？",
        a: "Microsoft 365 をまたいで複数ステップのタスクをこなす、Microsoft 365 Copilot のエージェントです。メールの送信、会議の設定、Word・Excel・PowerPoint・PDF ファイルの作成と編集、Teams への投稿、OneDrive と SharePoint のファイル管理、組織内の検索、ディープリサーチを行います。重要な操作の前には承認を求めます。",
      },
      {
        q: "Copilot Cowork の料金はいくらですか？",
        a: "利用量は、Microsoft 365 Copilot ライセンスに加えて Copilot Credits で課金されます。従量課金は 1 クレジット $0.01 で、月ごとに後払いで請求されます。1 年間の Pre-Purchase Plan では 5% から 20% の割引があります。タスクごとのクレジット消費量は、使うモデル、実行時間、コンテキスト、ツールによって変わります。",
      },
      {
        q: "Copilot Cowork に必要なライセンスは？",
        a: "職場または学校のアカウントでは、自分に割り当てられた Microsoft 365 Copilot ライセンス、Cowork の有効化、管理者による従量課金のオン、そして Cowork を選択した支出ポリシーが必要です。個人の Microsoft アカウントはプレビュー中で、対象の Microsoft 365 サブスクリプションが必要です。教育機関では、教職員は使えますが、学生は使えません。",
      },
      {
        q: "Copilot Cowork にログインするには？",
        a: "アクセス権のあるアカウントでサインインします。職場または学校のアカウント（一般提供）か、個人の Microsoft アカウント（プレビュー）です。Cowork は Web、Windows と macOS 向けの Microsoft Copilot デスクトップアプリ、iOS と Android 向けのモバイルアプリ、そして Outlook と Teams の中で使えます。",
      },
      {
        q: "Copilot Cowork と Microsoft 365 Copilot の違いは？",
        a: "Copilot Cowork は Microsoft 365 Copilot の中のエージェントです。Cowork の利用量はライセンスとは別に Copilot Credits で課金されるため、使うには Microsoft 365 Copilot ライセンスに加えて従量課金が必要です。",
      },
      {
        q: "Copilot Cowork と Claude Cowork の違いは？",
        a: "Copilot Cowork は Microsoft 365 をまたいで働き、ファイルは OneDrive と SharePoint に置き、ローカルのファイルには届かず、ライセンスに加えて Copilot Credits で課金されます。Claude Cowork は Claude のアプリで動く Anthropic のエージェントで、Pro の月 $20 からの Claude の有料プランに含まれ、Claude Desktop 経由でローカルのファイルを扱えます。なお、Copilot Cowork のモデルピッカーにも、テナントの設定によって Claude モデルが含まれます。",
      },
    ],
  },
  cta: {
    title: "Microsoft 365 のタスクは Cowork に。コーディングエージェントにも仕事を。",
    text: "Crewmark は、Claude Code と Codex のセッションを、職種・目標・勤務時間・ハートビートを持つ AI 社員に変えます。",
    button: "今すぐ始める",
  },
  checked:
    "2026年11月13日に、Microsoft Learn の Copilot Cowork ドキュメント、Microsoft の Copilot Credits Guide、Microsoft サポートで確認しました。",
  disclaimer:
    "Crewmark は独立した製品であり、Microsoft、Anthropic、OpenAI とは提携しておらず、その承認も受けていません。製品名は各所有者の商標です。",
};
