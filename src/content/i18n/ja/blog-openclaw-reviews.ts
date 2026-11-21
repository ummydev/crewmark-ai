import type { GuideCopy } from "@/components/landing/guide-article";

// Japanese translation of /blog/openclaw-reviews; the English master is src/content/blog/openclaw-reviews.ts.

const hn = {
  changingMyLife: "https://news.ycombinator.com/item?id=46931805",
  appleIntelligence: "https://news.ycombinator.com/item?id=46893970",
  personalComputer: "https://news.ycombinator.com/item?id=47129647",
  securityNightmare: "https://news.ycombinator.com/item?id=47479962",
  anthropicSubscriptions: "https://news.ycombinator.com/item?id=47633396",
  memory: "https://news.ycombinator.com/item?id=47721955",
  whoIsUsing: "https://news.ycombinator.com/item?id=47783940",
  grokBot: "https://news.ycombinator.com/item?id=49261514",
  agenticSetup: "https://news.ycombinator.com/item?id=50366117",
  saas: "https://news.ycombinator.com/item?id=50392586",
};

export const copy: GuideCopy = {
  meta: {
    title: "OpenClaw の評判：Hacker News ユーザーの声（2026）",
    description:
      "Hacker News の 10 件のスレッド（2026年2月〜11月）から OpenClaw の評判を整理。評価される点、多い不満、乗り換え先。",
  },
  breadcrumb: "OpenClaw の評判",
  parent: { name: "ブログ", href: "/blog" },
  article: { published: "2026-11-13" },
  hero: {
    kicker: "ブログ · 評判",
    title: "OpenClaw の評判：Hacker News でユーザーが語っていること",
    lead: "OpenClaw は、自分のコンピューターで動き、WhatsApp、Telegram、Slack など普段使っているチャットアプリで返事をくれる、オープンソースの個人向け AI アシスタントです。2026年2月から11月までの、OpenClaw についての Hacker News のスレッドを 10 件読みました。ユーザーは、ちょっとした個人的な用事に便利な点と、記憶を自分で持てる点を気に入っています。最も多く挙がった不満は、よく壊れて手入れが必要なこと（10 件中 6 件）と、広いアクセス権がセキュリティ上のリスクになること（10 件中 5 件）です。",
    cta: "今すぐ始める",
    secondary: "テーマを見る",
    secondaryHref: "#at-a-glance",
  },
  sections: [
    {
      kind: "text",
      id: "method",
      title: "レビューの集め方",
      text: [
        "2026年11月13日に、OpenClaw についての Hacker News のスレッドを 10 件、1 ページずつ読みました。時期は2026年2月から11月までで、そのうち 7 件は、議論が最も盛んだった2月から4月のものです。コメントが数百件に及ぶ大きなスレッドでは、すべての返信ではなく、トップレベルのコメントと、主要な話題の前後の部分を読みました。",
      ],
      points: [
        "テーマとして挙げるのは、10 件のスレッドのうち少なくとも 2 件で話題になったものだけで、何件で挙がったかも記しています。1 件のコメントだけで出た意見は含めていません。",
        "スレッドの 1 つは Grok Bot についてのもので、Grok Bot と OpenClaw を比べたコメントを使いました。もう 1 つは AI 環境全般について尋ねるスレッドで、OpenClaw に触れた部分を使いました。",
        "Google 検索で Reddit のスレッドも 9 件見つけましたが、reddit.com を開けなかったため、読んでおらず、要約もしていません。[Reddit でのその他の議論](#reddit)にタイトルを載せています。",
        "これは公開の場での議論から抜き出したもので、アンケート調査ではありません。ツールについて投稿する人は、強い意見を持っていることが多いものです。月は各スレッドの経過時間から割り出したもので、1 か月ずれていることがあります。",
        "報酬の支払いや依頼は一切していません。投稿も、レビューの依頼も、誰かへの連絡もしていません。要約は私たちの言葉で書いており、1 つだけある引用は、引用であることを明示してリンクしています。",
      ],
    },
    {
      kind: "table",
      id: "at-a-glance",
      title: "OpenClaw の評判早見表",
      text: ["読んだ 10 件の Hacker News のスレッドで挙がったことです。件数はコメント数ではなくスレッド数です。"],
      headers: ["テーマ", "ユーザーの声", "スレッド"],
      rows: [
        ["評価：個人的な用事に便利", "リマインダー、フォローアップ、カレンダーの作業、グループチャットの Bot（うまく動けば）", "10 件中 3 件"],
        ["評価：チャットアプリで使え、記憶を自分で持てる", "WhatsApp などのアプリで返事をし、記憶を自分で読んで編集できるファイルに保存する", "10 件中 2 件"],
        ["評価：アシスタントの向かう先", "批判的な人でさえ、内蔵のアシスタントが本来あるべきだった姿をそこに見ている", "10 件中 2 件"],
        ["不満：よく壊れる", "アップデートで不具合が出て、手入れに節約できる以上の時間がかかる", "10 件中 6 件"],
        ["不満：セキュリティ上のリスク", "コンピューターやアカウントへの広いアクセス権と、プロンプトインジェクションへの弱さ", "10 件中 5 件"],
        ["不満：実用より先行する誇大宣伝", "具体例のない大きな主張。見せ物のようなデモタスク", "10 件中 4 件"],
        ["不満：費用とサブスクリプション", "モデルの利用料がかさみ、他社のサブスクリプションの規約に左右される", "10 件中 3 件"],
        ["不満：予備のマシンとスキルが必要", "保守をいとわない人が、別のコンピューターで動かすのが一番", "10 件中 2 件"],
      ],
    },
    {
      kind: "text",
      id: "praise",
      title: "ユーザーが気に入っている点",
      points: [
        `うまく動けば、個人的な用事に便利（10 件中 3 件のスレッド）。ユーザーは、リマインダーやフォローアップを送る、ちょっとしたカレンダーの作業をこなす、家族やグループチャット向けの Bot を動かす、といった使い方を語っています。Hacker News のスレッド：[2026年4月](${hn.whoIsUsing})、[2026年4月](${hn.memory})、[2026年11月](${hn.agenticSetup})。`,
        `普段使っているチャットアプリの中にいて、記憶を自分で持てる（10 件中 2 件）。ユーザーは、WhatsApp などのアプリからメッセージを送れること、そして記憶が自分のマシン上の、読んで編集できるファイルに保存されることを気に入っています。スレッド：[2026年4月](${hn.whoIsUsing})、[2026年8月](${hn.grokBot})。`,
        `アシスタントの行く先を垣間見せる（10 件中 2 件）。批判的なコメント投稿者でさえ、スマートフォンやコンピューターに内蔵されたアシスタントが本来やるべきだったことをやっていると言い、このアイデアはこのプロジェクトより長く残ると見ています。スレッド：[2026年2月](${hn.appleIntelligence})、[2026年3月](${hn.securityNightmare})。`,
      ],
    },
    {
      kind: "text",
      id: "complaints",
      title: "よくある不満",
      points: [
        `よく壊れ、絶えず手入れが必要（10 件中 6 件のスレッド）。ユーザーは、アップデートで何かが壊れる、機能が予告なく動かなくなる、使うより直すほうに時間がかかる、と語っています。2026年11月、ある Hacker News のコメント投稿者はこう書いています。「アップデートのたびに何かが壊れ、直すことにより多くの時間を費やしていた」（"Every update something broke, and I spent more time fixing things"、[スレッド](${hn.agenticSetup})）。スレッド：[2026年2月](${hn.appleIntelligence})、[2026年4月](${hn.whoIsUsing})、[2026年4月](${hn.memory})、[2026年8月](${hn.grokBot})、[2026年11月](${hn.agenticSetup})、[2026年11月](${hn.saas})。`,
        `広いアクセス権がセキュリティ上のリスクになる（10 件中 5 件）。ユーザーは、OpenClaw がコンピューターやアカウントに広くアクセスでき、プロンプトインジェクションで操られうると指摘しています。よくある助言は、別のマシンで別のアカウントを使って動かすことで、そもそもインストールしないよう勧める人もいます。スレッド：[2026年2月](${hn.personalComputer})、[2026年2月](${hn.appleIntelligence})、[2026年2月](${hn.changingMyLife})、[2026年3月](${hn.securityNightmare})、[2026年4月](${hn.whoIsUsing})。`,
        `実用より先行する誇大宣伝（10 件中 4 件）。ユーザーは、OpenClaw についての投稿は具体例なしに大きな変化を約束していて、フライトの予約や会議の設定といったおなじみのデモタスクは、時間の節約というより生産性を演じるパフォーマンスに見える、と言います。スレッド：[2026年2月](${hn.changingMyLife})、[2026年3月](${hn.securityNightmare})、[2026年4月](${hn.whoIsUsing})、[2026年11月](${hn.agenticSetup})。`,
        `費用と、他社のサブスクリプションへの依存（10 件中 3 件）。ユーザーは、裏で動くモデルの利用料がかさむと言います。2026年4月の Hacker News のスレッドでは、Anthropic が Claude Code のサブスクリプションを OpenClaw で使うことを認めなくなったと報告され、コメント投稿者たちは API 料金を払うか、ほかのモデルプロバイダーに移るかを比べていました。スレッド：[2026年4月](${hn.whoIsUsing})、[2026年4月](${hn.anthropicSubscriptions})、[2026年4月](${hn.memory})。`,
        `予備のマシンと技術的なスキルが必要（10 件中 2 件）。ユーザーは、保守に慣れた人が別のコンピューターで動かすのが一番だと言い、小規模事業者の中には、代わりにホスティング型ですぐに使えるバージョンを求める人もいます。スレッド：[2026年2月](${hn.personalComputer})、[2026年11月](${hn.saas})。`,
      ],
    },
    {
      kind: "text",
      id: "switch",
      title: "ユーザーの乗り換え先",
      text: [
        "以下は、10 件のスレッドのうち少なくとも 2 件で勧められていたものです。ほかのツールはそれぞれ 1 件のスレッドでしか名前が挙がらなかったため、ここでは省いています。主な選択肢は、各ツール自身のドキュメントをもとに [OpenClaw の代替ツールのガイド](/blog/openclaw-alternatives)で比較しています。",
      ],
      points: [
        `Hermes Agent（10 件中 3 件）。乗り換えたユーザーは、自分の環境ではより安定して動くと言います。[Hermes Agent vs OpenClaw](/blog/hermes-agent-vs-openclaw) と [Hermes Agent の料金](/pricing/hermes-agent)をご覧ください。スレッド：[2026年4月](${hn.whoIsUsing})、[2026年8月](${hn.grokBot})、[2026年11月](${hn.agenticSetup})。`,
        `スキルと良い \`CLAUDE.md\` を備えた、素の Claude Code や Codex（10 件中 3 件）。大がかりな OpenClaw の環境を作ったあと、すでに持っていたコーディングエージェントに戻ったというユーザーが何人もいます。[OpenClaw vs Claude Code](/compare/openclaw-vs-claude-code) と [Claude Code vs Codex](/blog/claude-code-vs-codex) をご覧ください。スレッド：[2026年2月](${hn.changingMyLife})、[2026年4月](${hn.whoIsUsing})、[2026年11月](${hn.agenticSetup})。`,
        `Claude Cowork（10 件中 2 件）。Anthropic のホスティング型アシスタントとして勧められています。[Claude Cowork のガイド](/personal-agent/claude-cowork)をご覧ください。スレッド：[2026年4月](${hn.whoIsUsing})、[2026年11月](${hn.agenticSetup})。`,
        `cron ジョブと自作のスクリプト（10 件中 2 件）。OpenClaw がすることのほとんどは、スケジュールで動くスクリプトの組み合わせで済むと言うユーザーもいます。スレッド：[2026年4月](${hn.whoIsUsing})、[2026年11月](${hn.agenticSetup})。`,
      ],
    },
    {
      kind: "text",
      id: "reddit",
      title: "Reddit でのその他の議論",
      text: [
        "以下の Reddit のスレッドは、参考として載せています。Google 検索で見つけましたが、reddit.com を開けなかったため、読んでおらず、要約もしていません。上のテーマはいずれもこれらに基づいていません。",
      ],
      points: [
        "[OpenClaw is god-awful…](https://www.reddit.com/r/ArtificialInteligence/comments/1qrzxs7/openclaw_is_godawful_its_either_you_have_to_spend/)、r/ArtificialInteligence、2026年2月",
        "[\"OpenClaw is useless\" is a confession, not a review](https://www.reddit.com/r/myclaw/comments/1qw9qx8/openclaw_is_useless_is_a_confession_not_a_review/)、r/myclaw、2026年2月",
        "[I think openclaw is OVERHYPED. Just use skills](https://www.reddit.com/r/LocalLLaMA/comments/1rbjxpv/i_think_openclaw_is_overhyped_just_use_skills/)、r/LocalLLaMA、2026年3月",
        "[Any good reason to stay with Openclaw?](https://www.reddit.com/r/openclaw/comments/1rcx7mg/any_good_reason_to_stay_with_openclaw/)、r/openclaw、2026年3月",
        "[My honest take on OpenClaw after extensive testing](https://www.reddit.com/r/openclaw/comments/1s4pgat/my_honest_take_on_openclaw_after_extensive_testing/)、r/openclaw、2026年4月",
        "[Is it still worth building an OpenClaw personal agent…?](https://www.reddit.com/r/openclaw/comments/1tts8e9/is_it_still_worth_building_an_openclaw_personal/)、r/openclaw、2026年6月",
        "[Is OpenClaw still worth it now that I have Codex?](https://www.reddit.com/r/openclaw/comments/1u93to2/is_openclaw_still_worth_it_now_that_i_have_codex/)、r/openclaw、2026年7月",
        "[Is OpenClaw Dead?](https://www.reddit.com/r/openclaw/comments/1v2o94l/is_openclaw_dead/)、r/openclaw、2026年8月",
        "[Rant / Review: OpenClaw is a massive waste of time](https://www.reddit.com/r/openclaw/comments/1xi2a21/rant_review_openclaw_is_a_massive_waste_of_time/)、r/openclaw、2026年10月",
      ],
    },
    {
      kind: "text",
      id: "facts",
      title: "主張を確かめるための OpenClaw の基本情報",
      text: [
        "OpenClaw 自身の README、ドキュメント、GitHub をもとに、2026年11月13日に確認しました。費用については [OpenClaw の料金](/pricing/openclaw)のページで詳しく紹介しています。",
      ],
      points: [
        "概要：オープンソースの個人向け AI アシスタントです。Gateway が自分のコンピューターで動き、WhatsApp、Telegram、Slack、Discord、iMessage などのチャットアプリで返事をします。状態、記憶、認証情報はあなたのハードウェアに置かれます。",
        "料金：無料です。README によると、このプロジェクトには有料プラン、ホスティングサービス、トークンはありません。支払うのはモデルプロバイダーへの料金です。",
        "ライセンス：MIT。独立した非営利団体である OpenClaw Foundation が運営しています。",
        "動く場所：自分のマシン上です。macOS、Linux、Windows、WSL2 向けのインストーラーと、macOS、iOS、Android、Windows、Linux 向けのアプリがあり、Docker と Nix でのインストール方法もドキュメントにあります。",
        "モデル：OpenAI、Anthropic、Google Gemini、OpenRouter、xAI、Ollama、LM Studio、vLLM などのプラグイン。",
        "セキュリティ（OpenClaw 自身のドキュメントより）：サンドボックスを設定しない限り、メインセッションのツールはホスト上で実行され、exec の承認はデフォルトでオフです。",
        "スケジュール：定期実行と 1 回限りのジョブのためのスケジューラーを内蔵し、Webhook と Gmail のトリガーもあります。",
        "名前：2026年1月30日に OpenClaw に改名されました。以前の名前には Clawdbot や Moltbot があります。GitHub のスターは2026年11月13日時点で 394,406 です。公式サイト：[openclaw.ai](https://openclaw.ai)。",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Crewmark なら",
      title: "Claude Code や Codex に常設の仕事を",
      text: [
        "これらのスレッドでは、Claude Code や Codex に戻ったユーザーが何人もいました。Crewmark はその上に成り立っています。あなた自身の Claude Code や Codex のセッションを、職種、目標、勤務時間を持つ AI 社員に変え、それぞれが共有ボードから次の issue を取ります。チャットアプリで使う個人アシスタントではありません。仕事は issue を通じて進み、Slack との連携は組み込まれておらず、エージェントはあなたのコンピューターで動くため、コンピューターは起動したままにしておく必要があります。GPL-3.0 のオープンソースで、1 プロジェクト、AI 社員 3 人までは無料です。",
      ],
      steps: [
        { title: "職種を選ぶ", text: "[AI 社員の職種](/ai-employees)から始めるか、職種と目標を自分で書きます。" },
        {
          title: "仕事をボードに載せる",
          text: "issue を割り当て、定期的なものは繰り返すよう設定します。勤務時間中は、15 分ごとから 1 日 1 回までの間隔でハートビートが社員を起こし、次の issue に取りかからせます。",
        },
        {
          title: "質問されたら答える",
          text: "レビュー、許可、情報が必要になると、社員は issue を「要対応」にして、そこであなたに質問します。エージェントごとのセットアップ付きの仕事の例は、[Claude Code の活用例](/use-cases/claude-code)と [Codex の活用例](/use-cases/codex)にあります。",
        },
      ],
    },
  ],
  mid: {
    title: "コーディングエージェントをスケジュールで動かしたいですか？",
    text: "Crewmark は、あなたの Claude Code や Codex に、職種、ハートビート、共有ボードを与えます。",
    button: "今すぐ始める",
  },
  faq: {
    title: "よくある質問",
    items: [
      {
        q: "OpenClaw は使う価値がありますか？",
        a: "どれだけの手入れを受け入れられるかによります。読んだ 10 件の Hacker News のスレッドでは、OpenClaw を気に入っているユーザーは、すでに使っているチャットアプリから、リマインダーやカレンダーの作業といった個人的な用事に使っています。最も多い不満は、10 件中 6 件で挙がった、よく壊れて絶えず修正が必要になることです。ソフトウェアは MIT ライセンスで無料で、使うモデルの料金を支払います。",
      },
      {
        q: "OpenClaw は安全に使えますか？",
        a: "セキュリティは 10 件中 5 件のスレッドで話題になりました。ユーザーは、コンピューターやアカウントへの広いアクセス権とプロンプトインジェクションを指摘し、別のマシンで別のアカウントを使って動かすよう勧めています。OpenClaw 自身の README には、サンドボックスを設定しない限りメインセッションのツールはホスト上で実行され、exec の承認はデフォルトでオフだと書かれています。",
      },
      {
        q: "OpenClaw が誇大宣伝だと言われるのはなぜですか？",
        a: "10 件中 4 件のスレッドで、ユーザーは、OpenClaw についての投稿が具体例なしに大きな成果を約束していたこと、そしてそのデモタスクが時間の節約というより生産性を演じるパフォーマンスに見えることを挙げています。このページに載せている Reddit のスレッドのうち、2026年3月の r/LocalLLaMA の 1 件は、タイトルで OpenClaw を誇大宣伝と呼び、代わりにスキルを勧めています。このスレッドは読んでいません。",
      },
      {
        q: "OpenClaw の代わりに何が使われていますか？",
        a: "読んだスレッドでは、Hermes Agent と素の Claude Code や Codex（それぞれ 3 件）、続いて Claude Cowork と、cron ジョブと自作のスクリプト（それぞれ 2 件）です。[OpenClaw の代替ツールのガイド](/blog/openclaw-alternatives)では、各ツール自身のドキュメントをもとに選択肢を比較しています。",
      },
      {
        q: "Reddit のユーザーは OpenClaw について何と言っていますか？",
        a: "Reddit を開けなかったため、それらのスレッドは要約していません。タイトルだけから判断すると、4 件は OpenClaw がまだ使う価値があるか、使い続ける価値があるか、もう終わったのかを尋ねるもので、そのうち 1 件は投稿者が Codex を手にした今どうか、というものです。3 件は批判的なタイトルで、そのうち 1 件は代わりにスキルを使うよう勧めています。r/myclaw の 1 件は、役に立たないという評価に反論しています。残る 1 件は、じっくり試したうえでのレビューです。9 件すべてを [Reddit でのその他の議論](#reddit)にリンクしています。",
      },
      {
        q: "OpenClaw は無料ですか？",
        a: "はい。README によると、このプロジェクトには有料プラン、ホスティングサービス、トークンはなく、MIT ライセンスです。支払うのはモデルプロバイダーへの料金で、費用は読んだ 10 件中 3 件のスレッドで話題になりました。その中には、Anthropic が Claude Code のサブスクリプションを OpenClaw で使うことを認めなくなったという2026年4月のスレッドも含まれます。[OpenClaw の料金](/pricing/openclaw)をご覧ください。",
      },
    ],
  },
  cta: {
    title: "コーディングエージェントに常設の仕事を。",
    text: "Crewmark は、Claude Code と Codex のセッションを、職種、目標、勤務時間、ハートビートを持つ AI 社員に変えます。",
    button: "今すぐ始める",
  },
  checked: "スレッドは2026年11月13日に読みました。製品の情報は、同じ日に OpenClaw 自身の README、ドキュメント、GitHub と照合しました。",
  disclaimer:
    "Crewmark は独立した製品であり、OpenClaw Foundation をはじめ、このページで名前を挙げたいずれの企業とも提携しておらず、その承認も受けていません。ここで要約した意見は、リンク先のスレッドのコメント投稿者のものです。製品名は各所有者の商標です。",
};
