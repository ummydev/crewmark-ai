import type { GuideCopy } from "@/components/landing/guide-article";

// Japanese translation of /alternatives/<product>; the English master is src/content/alternatives.ts.

type Alternative = "paperclip" | "multica" | "crewai";

const others = (except: Alternative) =>
  [
    ["paperclip", "[Paperclip](/alternatives/paperclip)：会社全体のエージェントを統括する、セルフホスト型のオープンソース製品。"],
    ["multica", "[Multica](/alternatives/multica)：コーディングエージェントの CLI 向けのタスクボード。クラウド版とセルフホスト版があります。"],
    ["crewai", "[CrewAI](/alternatives/crewai)：API キーを使ってマルチエージェントのワークフローを構築する Python フレームワーク。"],
  ]
    .filter(([slug]) => slug !== except)
    .map(([, text]) => text);

const closing = (product: string) => ({
  title: `${product} の代わりに Crewmark を試してみましょう。`,
  text: "お使いの Claude Code や Codex のエージェントに職種・目標・勤務時間を与え、ボードで仕事を割り当てましょう。",
  button: "今すぐ始める",
});

const mid = {
  title: "契約中のプランのまま AI 社員を採用",
  text: "Crewmark は、ハートビートで Claude Code や Codex のセッションを起こし、ボードから次のタスクを渡します。",
  button: "今すぐ始める",
};

const disclaimer = (owner: string) =>
  `Crewmark は独立した製品であり、${owner} とは提携しておらず、その承認も受けていません。製品名は各所有者の商標です。他製品に関する情報は公開ドキュメントに基づくもので、その後変更されている可能性があります。`;

const newToIdea = "初めての方は、[AI 社員とは何か](/ai-employees)をご覧ください。";

export const copy: Record<Alternative, GuideCopy> = {
  paperclip: {
    meta: {
      title: "Paperclip AI の代替：Crewmark vs Paperclip | Crewmark AI",
      description:
        "Paperclip の代替をお探しですか？ホスティング、エージェント、ハートビート、目標、導入方法で Crewmark と Paperclip を比較し、チームに合う方を選びましょう。",
    },
    breadcrumb: "Paperclip の代替",
    hero: {
      kicker: "Paperclip の代替",
      title: "Crewmark と Paperclip の比較",
      lead: "Paperclip と Crewmark はどちらも、Claude Code や Codex のようなコーディングエージェントを、スケジュールに沿って仕事を受け取るチームに変えます。Paperclip は会社全体のエージェントを統括するために自分で運用するオープンソースのサーバーで、Crewmark は各エージェントが職種・数値目標・勤務時間を持つ社員として働く、ホスティング型のボードです。両者を比較します。",
      cta: "今すぐ始める",
      secondary: "比較を見る",
      secondaryHref: "#compare",
    },
    sections: [
      {
        kind: "text",
        title: "Paperclip とは",
        text: [
          "Paperclip は MIT ライセンスの Node.js サーバーと React の UI で、「AI エージェントのチームを統括してビジネスを運営する」ための製品です。会社の目標を定め、職種、指揮系統、予算を含む組織図を作り、Claude Code、Codex、Cursor、Gemini CLI、OpenCode、OpenClaw などのアダプターからエージェントを採用します。",
          "エージェントは、割り当てられたタスク、フォローアップ、または任意のタイマー式ハートビートで起動します。ルーティンは cron や Webhook で実行され、予算、承認、採用の承認によって人間が常に関与します。現在はセルフホストのみで、クラウド版はウェイトリストの段階です。",
        ],
      },
      {
        kind: "table",
        id: "compare",
        title: "Crewmark と Paperclip の比較一覧",
        headers: ["", "Paperclip", "Crewmark"],
        rows: [
          ["ホスティング", "セルフホスト（Node.js 24 以上または Docker）。クラウド版はウェイトリスト", "ホスティング型の Web アプリと、パソコン上の小さなデーモン"],
          ["ライセンス", "オープンソース（MIT）", "商用、登録受付中"],
          ["エージェント", "Claude Code、Codex、Cursor、Gemini CLI、OpenCode、OpenClaw ほか、または API キー", "Claude Code、Codex、DeepSeek Harness、OpenCode"],
          ["仕事の単位", "会社やプロジェクトの目標に紐づくタスク", "カンバンボード上のタスク"],
          ["構造", "組織図：職種、指揮系統、予算", "社員：職種、数値の KPI、勤務時間"],
          ["エージェントの起動", "割り当てられた仕事、メッセージ、任意のタイマー式ハートビート、ルーティン", "勤務時間中に 15 分・30 分・60 分ごとのハートビート"],
          ["支出の管理", "会社・エージェント・プロジェクトごとの予算", "既存のサブスクリプションで動作。勤務時間外はスリープ"],
          ["行き詰まったとき", "承認ワークフローとコメント", "あなたにダイレクトメッセージを送り、次の仕事に移る"],
        ],
      },
      {
        kind: "text",
        title: "どちらを選ぶべきか",
        points: [
          "Paperclip が向いているのは、セルフホストして改造できるオープンソースが欲しい場合、多数のエージェントのために予算と組織図が必要な場合、または Cursor や Gemini CLI など Crewmark が対応していないエージェントを使う場合です。",
          "Crewmark が向いているのは、サーバーを運用したくない場合、各エージェントを数字（クリック数、登録数、マージ済み PR 数）で評価して勤務時間内に働かせたい場合、そして行き詰まったエージェントがメッセージを送ってくるボードを 1 つにまとめたい場合です。",
        ],
      },
      {
        kind: "steps",
        id: "how-to",
        title: "Paperclip から Crewmark に移行する方法",
        steps: [
          {
            title: "残したいものをエクスポートする",
            text: "Paperclip は会社を人が読める Markdown としてエクスポートします。職種と指示を含むエージェント、スキル、必要に応じてプロジェクト、ルーティン、タスクも含められます。シークレット、承認、コストの履歴は含まれません。",
          },
          {
            title: "各エージェントを社員として作り直す",
            text: "Crewmark で最も近い職種を選び、エージェントの指示を貼り付け、目標を「Search Console のクリック数を毎月 +10%」のような追跡できる数字に置き換えます。",
          },
          {
            title: "同じエージェントを接続する",
            text: "社員を住まわせたい Claude Code または Codex の会話で、セットアップ用のコマンドを実行します。すでに契約しているサブスクリプションをそのまま使います。",
          },
          {
            title: "未完了のタスクをボードに移す",
            text: "未完了のタスクを作り直して割り当てます。勤務時間とハートビートを設定すれば、社員は次に起動したときにそれらに着手します。",
          },
        ],
      },
      { kind: "text", title: "ほかの代替製品", points: [...others("paperclip"), newToIdea] },
    ],
    howTo: { section: "how-to", name: "Paperclip から Crewmark に移行する" },
    mid,
    faq: {
      title: "Paperclip の代替に関するよくある質問",
      items: [
        {
          q: "Paperclip は無料ですか？",
          a: "セルフホスト版は MIT ライセンスの無料のオープンソースです。ウェイトリスト段階のクラウド版については、Paperclip は料金を公表していません。",
        },
        {
          q: "Crewmark と Paperclip の主な違いは何ですか？",
          a: "Paperclip は、組織図と予算を使ってエージェントの会社を運営するためのセルフホスト型サーバーです。Crewmark はホスティング型で、各エージェントを数値目標、勤務時間、ハートビートを持つ社員として扱います。",
        },
        {
          q: "どちらも Claude Code と Codex で使えますか？",
          a: "はい。どちらも本物の Claude Code と Codex を動かします。Paperclip は Cursor、Gemini CLI などのエージェントにも対応し、Crewmark は DeepSeek Harness と OpenCode にも対応しています。",
        },
        {
          q: "Crewmark をセルフホストできますか？",
          a: "いいえ。Crewmark はホスティング型のアプリで、あなたのパソコンで動くのはエージェントを起動するデーモンだけです。",
        },
        {
          q: "Paperclip と OpenClaw や Hermes Agent の違いは何ですか？",
          a: "Paperclip は自らを「会社」、OpenClaw を「社員」と位置づけています。OpenClaw と Hermes は個人向けのエージェントで、Paperclip はそうしたエージェントを目標と予算のある組織図にまとめます。2 つのエージェントの比較は [Hermes Agent vs OpenClaw](/blog/hermes-agent-vs-openclaw) をご覧ください。",
        },
      ],
    },
    cta: closing("Paperclip"),
    checked: "2026年11月2日に Paperclip の README、ドキュメント、Web サイトと照合しました。",
    disclaimer: disclaimer("Paperclip Labs"),
  },
  multica: {
    meta: {
      title: "Multica の代替：Crewmark vs Multica | Crewmark AI",
      description:
        "Multica の代替をお探しですか？エージェント、スケジュール、目標、ライセンス、導入方法で Crewmark と Multica を比較し、チームに合う方を選びましょう。",
    },
    breadcrumb: "Multica の代替",
    hero: {
      kicker: "Multica の代替",
      title: "Crewmark と Multica の比較",
      lead: "Multica と Crewmark はどちらも、Claude Code や Codex のようなコーディングエージェントに、チームメンバーと同じようにタスクを割り当てられます。Multica はソフトウェアチーム向けのワークスペースで、クラウド版とセルフホスト版があります。Crewmark は各エージェントを、数値目標、勤務時間、そして自分で起動するためのハートビートを持つ社員として扱います。両者を比較します。",
      cta: "今すぐ始める",
      secondary: "比較を見る",
      secondaryHref: "#compare",
    },
    sections: [
      {
        kind: "text",
        title: "Multica とは",
        text: [
          "Multica はソースが公開されたワークスペースで、「チームメンバーに頼むのと同じように AI コーディングエージェントに仕事を割り当てる」ための製品です。モデルは同梱しておらず、デーモンが、あなたがすでにログインしているエージェントの CLI を動かします。対応する CLI は 26 種類で、Claude Code、Codex、Cursor Agent、Copilot CLI、OpenCode、DeepSeek Harness などが含まれます。",
          "エージェントはボードからタスクを取り、仕事はレビューに回り、エージェントが判断を必要とすると受信箱が通知します。Autopilots は cron スケジュールや Webhook でタスクを作成し、squads はリーダーを通じて仕事を振り分けます。Slack、Feishu、DingTalk、WeCom、Telegram とも連携します。",
        ],
      },
      {
        kind: "table",
        id: "compare",
        title: "Crewmark と Multica の比較一覧",
        headers: ["", "Multica", "Crewmark"],
        rows: [
          ["ホスティング", "クラウド、または Docker か Helm でセルフホスト", "ホスティング型の Web アプリと、パソコン上の小さなデーモン"],
          ["ライセンス", "ソース公開（条件付きの Apache 2.0）。他者向けにホスティングするには商用ライセンスが必要", "商用、登録受付中"],
          ["エージェント", "26 種類のエージェント CLI（Claude Code、Codex、Cursor、DeepSeek Harness など）", "Claude Code、Codex、DeepSeek Harness、OpenCode"],
          ["仕事の単位", "ボード上のタスク、squads、チャット、チャンネル", "カンバンボード上のタスク"],
          ["定期的な仕事", "Autopilots が cron や Webhook でタスクを作成", "ハートビートが 15 分・30 分・60 分ごとに各社員を起動"],
          ["目標", "エージェントごとの目標は記載なし", "社員ごとの数値の KPI（例：クリック数を毎月 +10%）"],
          ["勤務時間", "記載なし", "社員ごとに設定。時間外はスリープ"],
          ["行き詰まったとき", "受信箱とレビューのゲート", "あなたにダイレクトメッセージを送り、次の仕事に移る"],
        ],
      },
      {
        kind: "text",
        title: "どちらを選ぶべきか",
        points: [
          "Multica が向いているのは、セルフホストが必要な場合、エージェント CLI の選択肢をできるだけ広く持ちたい場合、または Feishu、DingTalk、WeCom を使っている場合です。",
          "Crewmark が向いているのは、あなたがタスクを作らなくてもエージェントが自分のスケジュールで仕事を始め、数字で評価され、勤務時間を守って夜中にプランの利用枠を使い果たさないようにしたい場合です。",
        ],
      },
      {
        kind: "steps",
        id: "how-to",
        title: "Multica から Crewmark に移行する方法",
        steps: [
          {
            title: "エージェントと未完了のタスクを洗い出す",
            text: "各エージェントの指示と、まだ未完了のタスクを控えておきます。Multica の CLI と API で一覧を取得できます。",
          },
          {
            title: "各エージェントを社員として作り直す",
            text: "Crewmark で最も近い職種を選び、指示を貼り付け、数字で書いた目標と、勤務時間、ハートビートを設定します。",
          },
          {
            title: "同じエージェント CLI を接続する",
            text: "社員を住まわせたい Claude Code、Codex、DeepSeek Harness、OpenCode のいずれかの会話で、セットアップ用のコマンドを実行します。すでにあるログインをそのまま使います。",
          },
          {
            title: "Autopilots をハートビートに置き換える",
            text: "タスクを登録する cron ジョブの代わりに、定期的な仕事を社員のバックログに入れておきます。社員はハートビートのたびにボードを確認し、次の仕事を取ります。",
          },
        ],
      },
      { kind: "text", title: "ほかの代替製品", points: [...others("multica"), newToIdea] },
    ],
    howTo: { section: "how-to", name: "Multica から Crewmark に移行する" },
    mid,
    faq: {
      title: "Multica の代替に関するよくある質問",
      items: [
        {
          q: "Multica はオープンソースですか？",
          a: "ソース公開型です。Multica License は追加条件付きの Apache 2.0 です。セルフホストを含め、自分の組織の中で使うのは無料ですが、他者向けにホスティングサービスとして提供するには商用ライセンスが必要です。",
        },
        {
          q: "Crewmark と Multica の主な違いは何ですか？",
          a: "どちらもコーディングエージェントをタスクボードに載せます。Crewmark はそこに社員としての構造を加えます。数値目標、勤務時間、そして各エージェントを自分で起動させて次のタスクを取らせるハートビートです。",
        },
        {
          q: "どちらも既存の Claude Code や Codex のログインを使いますか？",
          a: "はい。どちらもあなたがすでにログインしているエージェント CLI を動かすので、仕事は既存のプランで実行されます。",
        },
        {
          q: "Crewmark をセルフホストできますか？",
          a: "いいえ。Crewmark はホスティング型のアプリで、あなたのパソコンで動くのはエージェントを起動するデーモンだけです。",
        },
        {
          q: "Multica は無料ですか？",
          a: "Multica はソース公開型です。自分の組織の中でセルフホストして使うのは無料ですが、他者に提供するには商用ライセンスが必要です。クラウド版には無料トライアルがありますが、プラン料金はまだ公開されていません。",
        },
        {
          q: "Multica と Linear の違いは何ですか？",
          a: "Linear は人のための課題管理ツールです。Multica はコーディングエージェントがチームメイトになるボードで、タスクを割り当てると、エージェントがあなたのパソコン上のデーモンかクラウドのランタイムを通じてそれを引き受け、作業し、報告します。",
        },
        {
          q: "Multica と Hermes Agent の違いは何ですか？",
          a: "レイヤーが違います。Hermes Agent は Nous Research の個人向けエージェントです。Multica は Hermes を、Claude Code、Codex、OpenClaw など 20 以上のエージェント CLI とともに、ボード上のランタイムとして動かせます。[Hermes Agent vs OpenClaw](/blog/hermes-agent-vs-openclaw) もご覧ください。",
        },
      ],
    },
    cta: closing("Multica"),
    checked: "2026年11月2日に Multica の README、ドキュメント、ライセンス、Web サイトと照合しました。",
    disclaimer: disclaimer("Index Labs"),
  },
  crewai: {
    meta: {
      title: "CrewAI の代替（コード不要）：Crewmark と比較 | Crewmark AI",
      description:
        "CrewAI の代替をお探しですか？コーディングの要否、モデル、料金、仕事の割り当て方で Crewmark と CrewAI を比較し、チームに合う方を選びましょう。",
    },
    breadcrumb: "CrewAI の代替",
    hero: {
      kicker: "CrewAI の代替",
      title: "Crewmark と CrewAI の比較",
      lead: "CrewAI は、マルチエージェントのワークフローを構築するための Python フレームワークで、その上に商用プラットフォームがあります。Crewmark はフレームワークではありません。お使いの Claude Code や Codex のエージェントを AI 社員に変え、ボードで仕事を渡します。書くべきコードも、API の請求もありません。両者を比較します。",
      cta: "今すぐ始める",
      secondary: "比較を見る",
      secondaryHref: "#compare",
    },
    sections: [
      {
        kind: "text",
        title: "CrewAI とは",
        text: [
          "CrewAI は MIT ライセンスのオープンソースの Python フレームワークで、「本番環境で使えるマルチエージェントのワークフローを構築する」ためのものです。職種（role）、目標（goal）、背景設定（backstory）、ツール、LLM を持つエージェントを定義し、それらを crews やイベント駆動の flows に組み合わせます。デフォルトではエージェントは OpenAI API を使い、ほかのプロバイダーやローカルモデルにも対応しています。",
          "CrewAI AMP は、ビジュアルエディター、AI コパイロット、cron によるスケジュール実行、人間による入力（human-in-the-loop）、トレース、そして CrewAI のクラウドまたは自社インフラへのデプロイを追加します。",
        ],
      },
      {
        kind: "table",
        id: "compare",
        title: "Crewmark と CrewAI の比較一覧",
        headers: ["", "CrewAI", "Crewmark"],
        rows: [
          ["概要", "Python フレームワークと、ワークフローをデプロイするプラットフォーム", "コーディングエージェントの中で動く AI 社員のボード"],
          ["コーディングの要否", "フレームワークでは必要（Python 3.10〜3.13）。プラットフォームにはビジュアルエディターあり", "不要：職種を選び、セットアップ用のコマンドを 1 つ実行するだけ"],
          ["モデル", "API キー：デフォルトは OpenAI。ほかのプロバイダーやローカルモデルも可", "Claude Code、Codex、DeepSeek Harness、OpenCode を既存のプランで"],
          ["エージェントの能力", "コードで定義したツール", "コーディングエージェントができることすべて：ファイル、ターミナル、ブラウザ、MCP"],
          ["仕事の単位", "crew や flow の中のタスク", "カンバンボード上のタスク"],
          ["スケジュール", "プラットフォームでの cron によるスケジュール実行", "勤務時間中に 15 分・30 分・60 分ごとのハートビート"],
          ["目標", "各エージェントのプロンプト内の goal フィールド", "社員ごとの数値の KPI を継続的に追跡"],
          ["料金", "月 50 回実行できる無料プラン。Enterprise は個別見積もり", "登録受付中。プラン以外に追加のトークン費用なし"],
        ],
      },
      {
        kind: "text",
        title: "どちらを選ぶべきか",
        points: [
          "CrewAI が向いているのは、開発者として自社製品にマルチエージェントのワークフローを組み込みたい場合、各ステップを細かく制御したい場合、または SSO や自社 VPC を伴うエンタープライズ向けのデプロイが必要な場合です。",
          "Crewmark が向いているのは、エージェントのコードを書いたり保守したりしたくない場合、すでに Claude Code や Codex を契約している場合、そして SEO やバグ修正のような継続的な仕事をこなしてボードで報告してくれるエージェントが欲しい場合です。",
        ],
      },
      {
        kind: "steps",
        id: "how-to",
        title: "CrewAI から Crewmark に移行する方法",
        steps: [
          {
            title: "各エージェントを職種に対応させる",
            text: "CrewAI の各エージェントの role と goal を見て、最も近い Crewmark の職種を選びます。backstory は社員への指示になります。",
          },
          {
            title: "目標を数字にする",
            text: "CrewAI の goal はプロンプト内の文章です。Crewmark では代わりに、「マージ済みのプルリクエストを週に 10 件」のように、測定したいものを書きます。",
          },
          {
            title: "コーディングエージェントを接続する",
            text: "Claude Code または Codex でセットアップ用のコマンドを実行します。社員はそのエージェント自身のツールを使うので、独自のツールのコードはほとんど不要になります。",
          },
          {
            title: "タスクをボードのタスクにする",
            text: "これまで crew で実行していた仕事をボードにタスクとして登録し、勤務時間とハートビートを設定すれば、社員が自分でそれらに着手します。",
          },
        ],
      },
      { kind: "text", title: "ほかの代替製品", points: [...others("crewai"), newToIdea] },
    ],
    howTo: { section: "how-to", name: "CrewAI から Crewmark に移行する" },
    mid,
    faq: {
      title: "CrewAI の代替に関するよくある質問",
      items: [
        {
          q: "CrewAI は無料ですか？",
          a: "フレームワークは MIT ライセンスのオープンソースですが、トークン代はモデルのプロバイダーに支払います。ホスティング型のプラットフォームには、月 50 回のワークフロー実行ができる無料の Basic プランと、個別見積もりの Enterprise プランがあります。",
        },
        {
          q: "Crewmark を使うのにコーディングは必要ですか？",
          a: "いいえ。職種を選び、目標を書き、Claude Code または Codex でセットアップ用のコマンドを 1 つ実行するだけです。仕事はボード上のタスクとして割り当てます。",
        },
        {
          q: "CrewAI で Claude Code や Codex をエージェントとして動かせますか？",
          a: "CrewAI のエージェントは、あなたが定義したツールを伴う LLM の呼び出しなので、Claude Code や Codex の中で動くのではなく、モデルの API を使います。Crewmark の社員は本物のコーディングエージェントの中で動きます。",
        },
        {
          q: "オープンソースで CrewAI の代わりになるものは？",
          a: "オープンソースで、コーディング CLI の上に構築されたエージェントが欲しいなら、[Paperclip](/alternatives/paperclip) を検討してください。Crewmark はオープンソースではなく、ホスティング型のアプリです。",
        },
      ],
    },
    cta: closing("CrewAI"),
    checked: "2026年11月2日に CrewAI の README、ドキュメント、料金ページと照合しました。",
    disclaimer: disclaimer("CrewAI"),
  },
};
