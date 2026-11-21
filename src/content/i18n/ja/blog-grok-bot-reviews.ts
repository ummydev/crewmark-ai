import type { GuideCopy } from "@/components/landing/guide-article";

// Japanese translation of /blog/grok-bot-reviews; the English master is src/content/blog/grok-bot-reviews.ts.

const hn = {
  launch: "https://news.ycombinator.com/item?id=49261514",
  agentAccess: "https://news.ycombinator.com/item?id=50033517",
  throttled: "https://news.ycombinator.com/item?id=50345698",
  agenticSetup: "https://news.ycombinator.com/item?id=50366117",
};

export const copy: GuideCopy = {
  meta: {
    title: "Grok Bot の評判：Hacker News ユーザーの声（2026）",
    description:
      "Hacker News の 6 件のスレッド（2026年8月〜11月）から Grok Bot の評判を整理。評価される点、利用枠とセキュリティへの不満、代わりに使われるもの。",
  },
  breadcrumb: "Grok Bot の評判",
  parent: { name: "ブログ", href: "/blog" },
  article: { published: "2026-11-13" },
  hero: {
    kicker: "ブログ · 評判",
    title: "Grok Bot の評判：Hacker News でユーザーが語っていること",
    lead: "Grok Bot は、xAI が提供するホスティング型の AI チームメイトです。各 Bot がクラウドに専用のコンピューターを持ち、あなたのツールにサインインし、Slack や Microsoft Teams の中で働き、ルーティンを実行し、互いに仕事を引き継ぎます。公開から最初の 3 か月にあたる2026年8月から11月までの、Grok Bot についての Hacker News のスレッドを 7 件読みました。そのうち 1 件は競合ツールのローンチ投稿だったため、件数は残りの 6 件から数えています。ユーザーは、コードを書かずに実際の用事を任せられると語っています。最も多く挙がった不満は利用枠で、6 件中 3 件で挙がりました。セキュリティと価値のわかりにくさは、それぞれ 2 件で挙がりました。",
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
        "2026年11月13日に、Grok Bot についての Hacker News のスレッドを 7 件、1 ページずつ読みました。そのうち 1 件は、競合するオープンソースツールの作者自身によるローンチ投稿だったため、どのテーマにも数えていません。そのため、このページの件数はすべて残りの 6 件が母数です。Grok Bot は2026年8月11日にベータとして公開されたので、どのスレッドも公開から最初の 3 か月、2026年8月から11月までのものです。",
      ],
      points: [
        "テーマとして挙げるのは、数えた 6 件のスレッドのうち少なくとも 2 件で話題になったものだけで、何件で挙がったかも記しています。1 件のコメントだけで出た意見は含めていません。",
        "6 件のうち 1 件は Grok Bot だけを扱うものではなく、自分の AI 環境を紹介し合う一般的なスレッドで、Grok Bot に触れた部分だけを使いました。ほかの 2 件は同じニュースを取り上げており、後のスレッドが前のスレッドにリンクしているため、そのニュースは 1 回として数えています。",
        "Google 検索で Reddit のスレッドも 17 件見つけましたが、reddit.com を開けなかったため、読んでおらず、要約もしていません。[Reddit でのその他の議論](#reddit)にタイトルを載せています。",
        "これは公開の場での議論から抜き出したもので、アンケート調査ではありません。ツールについて投稿する人は、強い意見を持っていることが多いものです。月は各スレッドの経過時間から割り出したもので、1 か月ずれていることがあります。",
        "報酬の支払いや依頼は一切していません。投稿も、レビューの依頼も、誰かへの連絡もしていません。要約は私たちの言葉で書いており、1 つだけある引用は、引用であることを明示してリンクしています。",
      ],
    },
    {
      kind: "table",
      id: "at-a-glance",
      title: "Grok Bot の評判早見表",
      text: [
        "数えた 6 件の Hacker News のスレッドで挙がったことです（7 件目の、競合ツールのローンチ投稿は数えていません）。件数はコメント数ではなくスレッド数です。",
      ],
      headers: ["テーマ", "ユーザーの声", "スレッド"],
      rows: [
        ["評価：コードなしで用事を任せられる", "リサーチ、メール、定期的なダイジェストを最初から最後まで任せる", "6 件中 2 件"],
        ["不満：利用枠", "常時稼働の Bot は利用枠を使い切りやすく、11月のスレッドでは Grok Bot の利用が絞られたことが話し合われた", "6 件中 3 件"],
        ["不満：セキュリティ", "プロンプトインジェクションと、Bot にログイン情報や重要なアカウントへのアクセスを渡すこと", "6 件中 2 件"],
        ["不満：価値がわかりにくい", "任せたいタスクが思いつかない、あるいはオープンソースのエージェントのホスティング版と見られている", "6 件中 2 件"],
      ],
    },
    {
      kind: "text",
      id: "praise",
      title: "ユーザーが気に入っている点",
      points: [
        `コードを書かずに実際の用事をこなす（6 件中 2 件のスレッド）。ユーザーは、仕入れ先を探す、求人への応募やメールを送る、Web サイトやソーシャルメディアのダイジェストをまとめる、といった用事を任せた様子を語っています。Hacker News のスレッド：[2026年8月](${hn.launch})、[2026年11月](${hn.agenticSetup})。`,
      ],
    },
    {
      kind: "text",
      id: "complaints",
      title: "よくある不満",
      points: [
        `利用枠とトークンの消費（6 件中 3 件のスレッド）。ユーザーは、常時稼働の Bot は週ごとの利用枠をすぐに使い切ると言います。2026年8月、ある Hacker News のコメント投稿者はこう書いています。「常時稼働し続けるエージェントは、トークンを大量に使う」（"Always on perpetual agents use a LOT of tokens"、[スレッド](${hn.launch})）。2026年11月の Hacker News のスレッドでは、Grok Bot の利用が絞られたことが話し合われました。スレッドのタイトルの表現では、xAI のコストがサブスクリプション収入を上回ったためとされています。スレッド：[2026年8月](${hn.launch})、[2026年11月](${hn.throttled})、[2026年11月](${hn.agenticSetup})。`,
        `セキュリティとアカウントへのアクセス（6 件中 2 件）。ユーザーは、プロンプトインジェクションや、各 Bot が触れられる範囲をしっかり制限しないまま Bot にログイン情報や重要なアカウントへのアクセスを渡すことを心配しています。スレッド：[2026年8月](${hn.launch})、[2026年10月](${hn.agentAccess})。`,
        `価値がわかりにくい（6 件中 2 件）。任せたいタスクが思いつかないというユーザーもいれば、OpenClaw のようなオープンソースのエージェントのホスティング版だと見るユーザーもいます。スレッド：[2026年8月](${hn.launch})、[2026年11月](${hn.agenticSetup})。`,
      ],
    },
    {
      kind: "text",
      id: "switch",
      title: "ユーザーの乗り換え先",
      text: [
        "以下は、数えた 6 件のスレッドのうち少なくとも 2 件で勧められていたものです。ほかのツールはそれぞれ 1 件のスレッドでしか名前が挙がらなかったため、ここでは省いています。主な選択肢は、各製品自身のドキュメントをもとに [Grok Bot の代替](/alternatives/grok-bot)のページで比較しています。",
      ],
      points: [
        `Hermes Agent（6 件中 2 件）。1 件のスレッドで勧められ、もう 1 件では同等の選択肢として名前が挙がりました。ユーザーは、より安く、設定の自由度が高く、モデルを選べると評しています。[Grok Bot vs Hermes Agent](/compare/grok-bot-vs-hermes-agent) と [Hermes Agent の料金](/pricing/hermes-agent)をご覧ください。スレッド：[2026年8月](${hn.launch})、[2026年11月](${hn.agenticSetup})。`,
        `Codex や Claude Code を使った自前の環境（6 件中 2 件）。ユーザーは、Codex や Claude Code に自作のスクリプトをいくつか組み合わせれば、同じ仕事の多くをより安く済ませられると言います。[Grok Bot vs Claude Code](/compare/grok-bot-vs-claude-code) をご覧ください。スレッド：[2026年8月](${hn.launch})、[2026年11月](${hn.agenticSetup})。`,
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
        "[Grok Bot just validated everything we've been building](https://www.reddit.com/r/AI_Agents/comments/1vnbg4z/grok_bot_just_validated_everything_weve_been/)、r/AI_Agents、2026年8月",
        "[free and open sourced grok bots but better](https://www.reddit.com/r/AI_Agents/comments/1vxoura/free_and_open_sourced_grok_bots_but_better_cooler/)、r/AI_Agents、2026年9月",
        "[Grok Bot's own docs say all your bots share one computer](https://www.reddit.com/r/grok/comments/1w43c1v/grok_bots_own_docs_say_all_your_bots_share_one/)、r/grok、2026年9月",
        "[xAI owns Grok and X. Grok Bot still billed me X API credits](https://www.reddit.com/r/GrokBot/comments/1vxpdr3/xai_owns_grok_and_x_grok_bot_still_billed_me_x/)、r/GrokBot、2026年9月",
        "[Is Grok Bot worth it?](https://www.reddit.com/r/cursor/comments/1vvx2fg/is_grok_bot_worth_it/)、r/cursor、2026年9月",
        "[Any one tried Grok Bot? Is it garbage or just me?](https://www.reddit.com/r/cursor/comments/1vzg2wd/any_one_tried_grok_bot_is_it_garbage_or_just_me/)、r/cursor、2026年9月",
        "[PSA: Stay far away from Grok/bot/XAI](https://www.reddit.com/r/singularity/comments/1wpls8e/psa_trust_me_stay_far_away_from_grokbotxai/)、r/singularity、2026年10月",
        "[Anyone compared Grok Bot usage limits across SuperGrok…](https://www.reddit.com/r/GrokBot/comments/1wqok58/anyone_compared_grok_bot_usage_limits_across/)、r/GrokBot、2026年10月",
        "[xAI's new $30/mo Premium plan worth it?](https://www.reddit.com/r/GrokBot/comments/1x8xjd1/xais_new_30mo_premium_plan_worth_it_looking_for/)、r/GrokBot、2026年10月",
        "[Grokbot alternative](https://www.reddit.com/r/GrokBot/comments/1wnayp2/grokbot_alternative/)、r/GrokBot、2026年10月",
        "[Grok Bot vs. Muse: who actually wins?](https://www.reddit.com/r/AI_Agents/comments/1x56s72/grok_bot_vs_muse_who_actually_wins_20_hours_with/)、r/AI_Agents、2026年10月",
        "[OpenBot feels a lot like Grok Bot, except it's free](https://www.reddit.com/r/SelfHostedAI/comments/1xgstht/openbot_feels_a_lot_like_grok_bot_except_its_free/)、r/SelfHostedAI、2026年10月",
        "[Alternative to Grok bot](https://www.reddit.com/r/GrokBot/comments/1xp0dbt/alternative_to_grok_bot/)、r/GrokBot、2026年11月",
        "[Self-hosted open source alternative to Grok Bot?](https://www.reddit.com/r/SelfHosting/comments/1xpwnes/selfhosted_open_source_alternative_to_grok_bot/)、r/SelfHosting、2026年11月",
        "[Looking for Grokbot alternatives, is Mausbot legit?](https://www.reddit.com/r/GrokBot/comments/1xqjgru/looking_for_grokbot_alternatives_is_mausbot_legit/)、r/GrokBot、2026年11月",
        "[Found a Grok Bot alternative that works with my xAI plan](https://www.reddit.com/r/GrokBot/comments/1xsx979/found_a_grok_bot_alternative_that_works_with_my/)、r/GrokBot、2026年11月",
        "[After what just happened to Grok Bot, are we next?](https://www.reddit.com/r/MuseAgent/comments/1xtgaew/after_what_just_happened_to_grok_bot_are_we_next/)、r/MuseAgent、2026年11月",
      ],
    },
    {
      kind: "text",
      id: "facts",
      title: "主張を確かめるための Grok Bot の基本情報",
      text: [
        "xAI の製品ページとローンチ時の投稿をもとに、2026年11月13日に確認しました。詳しくは [Grok Bot のガイド](/personal-agent/grok-bot)で。",
      ],
      points: [
        "概要：xAI のホスティング型 AI チームメイトです。各 Bot がクラウドに専用のコンピューターを持ち、あなたのツールやアプリにサインインし、Slack や Microsoft Teams の中で働き、スケジュールに沿ってルーティンを実行し、ほかの Bot に仕事を引き継ぎます。",
        "公開：2026年8月11日にベータとして公開されました。製品ページには、現在はベータを終えていると書かれています。",
        "料金：xAI の Premium（月 $30）、Super（月 $100、Premium の 3.5 倍の利用枠）、Ultra（月 $200、Premium の 12 倍の利用枠）プランに含まれ、月払いです。各プランに週ごとの Grok Bot の利用枠が含まれ、超過分はトークン費用で課金されます。Teams と Enterprise プランは営業経由です。",
        "ライセンス：オープンソースではありません。",
        "動く場所：xAI のクラウドなので、ノートパソコンを閉じても Bot は働き続けます。デスクトップアプリとモバイルアプリ、Slack と Microsoft Teams、そして Google Meet、Zoom、Teams の通話から使えます。",
        "モデル：Bot は Grok で作られています。",
        "承認：承認が必要なときは Bot が確認を求め、重要な操作は Auto Review に回せます。",
        "公式サイト：[x.ai/bot](https://x.ai/bot)。",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Crewmark なら",
      title: "自分のコンピューターで、常設の仕事を持つエージェントを",
      text: [
        "Grok Bot は、xAI のクラウドで Grok を使って Bot を動かします。Crewmark のアプローチは異なります。あなた自身のコンピューター上で、すでに支払っているサブスクリプションのまま動く Claude Code や Codex のセッションが、職種、目標、勤務時間を持つ AI 社員になり、それぞれが共有ボードから次の issue を取ります。トレードオフもあります。コンピューターは起動したままにしておく必要があり、エージェント同士の連携は今のところ issue を通じて行い（エージェント間のダイレクトメッセージは近日提供予定）、Slack との連携は組み込まれていません。GPL-3.0 のオープンソースで、1 プロジェクト、AI 社員 3 人までは無料です。",
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
        q: "Grok Bot は使う価値がありますか？",
        a: "何を任せたいか、どれだけの利用枠が必要かによります。数えた 6 件の Hacker News のスレッドでは、ユーザーは、リサーチ、メール、定期的なダイジェストなど、コードなしでこなせた用事について語っています。最も多く挙がった不満は利用枠で、6 件中 3 件でした。セキュリティと価値のわかりにくさは、それぞれ 2 件で挙がりました。xAI の Premium プラン（月 $30）に含まれ、より多くの利用枠がほしければ Super（$100）と Ultra（$200）があります。",
      },
      {
        q: "Grok Bot でよくある不満は？",
        a: "数えた 6 件のスレッドでは、利用枠とトークンの消費（6 件中 3 件）、主にプロンプトインジェクションと、Bot にログイン情報や重要なアカウントへのアクセスを渡すことに関するセキュリティ（6 件中 2 件）、そして任せたいタスクが思いつかない、あるいはオープンソースのエージェントのホスティング版だと見るユーザーからの、価値のわかりにくさ（6 件中 2 件）です。",
      },
      {
        q: "Grok Bot は安全ですか？",
        a: "セキュリティは、数えた 6 件中 2 件のスレッドで話題になりました。ユーザーは、プロンプトインジェクションや、各 Bot が触れられる範囲をしっかり制限しないまま Bot にログイン情報や重要なアカウントへのアクセスを渡すことを心配しています。xAI の製品ページには、承認が必要なときは Bot が確認を求め、重要な操作は Auto Review に回せると書かれています。",
      },
      {
        q: "Grok Bot の正直なレビューはありますか？",
        a: "このページでは Grok Bot そのものはテストしていません。公開から最初の 3 か月の 6 件の Hacker News のスレッドでユーザーが語ったことを、自分で読めるようリンク付きでまとめたものです。ユーザーは、コードなしで用事を任せられたと語っています。最も多い不満は利用枠（6 件中 3 件）で、セキュリティと価値のわかりにくさ（それぞれ 6 件中 2 件）が続きます。このページの内容は、報酬の支払いや依頼によるものではありません。",
      },
      {
        q: "Reddit のユーザーは Grok Bot について何と言っていますか？",
        a: "Reddit を開けなかったため、それらのスレッドは要約していません。タイトルだけから判断すると、7 件は代替を求めるか紹介するもので、そのうち何件かはオープンソースかセルフホストのものです。3 件は使う価値があるかを尋ねるもので、そのうち 1 件は $30 の Premium プランについてです。2 件は利用枠と請求について、1 件は Meta の Muse との比較です。r/MuseAgent の 1 件は、Grok Bot に起きたことが Muse にも起きうるかを尋ねています。1 件は、ドキュメントによるとすべての Bot が 1 台のコンピューターを共有していると述べていますが、xAI の製品ページには各 Bot が専用のコンピューターを持つと書かれています（[基本情報](#facts)を参照）。1 件は xAI に近づかないよう警告し、1 件は投稿者が作ってきたものの正しさを Grok Bot が裏付けたと述べています。17 件すべてを [Reddit でのその他の議論](#reddit)にリンクしています。",
      },
      {
        q: "Grok Bot の代わりに何が使われていますか？",
        a: "数えた 6 件のスレッドで複数回挙がったのは 2 つです。より安く設定の自由度が高いとユーザーが評する Hermes Agent と、Codex や Claude Code に自作のスクリプトを組み合わせた自前の環境です（それぞれ 6 件中 2 件）。[Grok Bot の代替](/alternatives/grok-bot)のページでは、各製品自身のドキュメントをもとに、より多くの選択肢を比較しています。",
      },
    ],
  },
  cta: {
    title: "コーディングエージェントに常設の仕事を。",
    text: "Crewmark は、Claude Code と Codex のセッションを、職種、目標、勤務時間、ハートビートを持つ AI 社員に変えます。",
    button: "今すぐ始める",
  },
  checked: "スレッドは2026年11月13日に読みました。製品の情報は、同じ日に xAI の製品ページとローンチ時の投稿と照合しました。",
  disclaimer:
    "Crewmark は独立した製品であり、xAI をはじめ、このページで名前を挙げたいずれの企業とも提携しておらず、その承認も受けていません。ここで要約した意見は、リンク先のスレッドのコメント投稿者のものです。製品名は各所有者の商標です。",
};
