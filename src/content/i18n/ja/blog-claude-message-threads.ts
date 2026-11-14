import type { GuideCopy } from "@/components/landing/guide-article";

// Japanese translation of /blog/claude-message-threads; the English master is src/content/blog/claude-message-threads.ts.

const docs = "https://platform.claude.com/docs/en/build-with-claude/message-threads";

const sdk = `import anthropic

client = anthropic.Anthropic()

# Create the helper. This call sends no request.
thread = client.beta.messages.thread(
    model="claude-opus-5-5",
    max_tokens=1024,
    cache_control={"type": "ephemeral"},
    system="You are a coding agent. Keep replies short.",
)

# Turn 1 creates the thread and sends the full conversation
thread.send({"role": "user", "content": "Read the failing test and explain it."})

# Turn 2 sends only the new message
reply = thread.send({"role": "user", "content": "Now fix it."})`;

const raw = `# Turn 1: the full conversation, plus
"thread": {"type": "create"}

# Every later turn: only the new messages, no system or tools, plus
"thread": {"type": "continue", "previous_message_id": "<id of the last response>"}

# On every request of the thread
anthropic-beta: message-threads-2026-08-12`;

export const copy: GuideCopy = {
  meta: {
    title: "Claude のメッセージスレッドとは？ | Crewmark AI",
    description:
      "Anthropic のメッセージスレッドは、Claude との会話を一度だけ送り、以降は新しい分だけを送る仕組みです。Claude Code への影響、ベータ API の使い方、5分の有効期限と制限を解説します。",
  },
  breadcrumb: "Claude メッセージスレッド",
  parent: { name: "ブログ", href: "/blog" },
  article: { published: "2026-11-04" },
  hero: {
    kicker: "ブログ · Claude",
    title: "Claude のメッセージスレッドとは？ 仕組みと使い方",
    lead: "メッセージスレッドは、2026年11月2日からパブリックベータで提供されている Claude API の機能です。毎ターン会話全体をアップロードする代わりに、エージェントは会話を一度だけ送り、その後は新しいメッセージだけを送ります。Anthropic によると、Claude Code のほとんどのユーザーですでに有効になっていて、50万〜100万トークンのリクエストでは最初のトークンが返るまでの時間の中央値が約35%短くなります。このガイドでは、何が変わり何が変わらないのか、自分のエージェントでの使い方、そして制限を説明します。",
    cta: "今すぐ始める",
    secondary: "設定方法へ移動",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "メッセージスレッドとは",
      text: [
        "スレッドを使わない場合、エージェントループの各ターンで会話全体が再びアップロードされ、API もそのすべてをもう一度検証してトークン化します。コーディングエージェントは1セッションで何百回もリクエストを送るため、会話が数十万トークンに達すると、この再送が Claude の回答の開始を遅らせます。スレッドを使うと、API がターンの間も会話を保持するので、処理の大半は新しいターン分だけで済みます。",
      ],
      points: [
        "最初のトークンが速くなる：Anthropic の計測では、50万〜100万トークンの Claude Code のリクエストで中央値が約35%短縮されました。会話が長いほど効果が大きくなります。",
        "リクエストが小さくなる：各ターンで送るのは、新しいメッセージ、ツールの結果、スクリーンショットだけです。",
        "トークンも料金も同じ：Claude は毎ターン会話全体を読むので、料金とレート制限は変わりません。",
        "短命：スレッドは最後のリクエストから5分で失効し、暗号化されたままメモリ上に保持され、ディスクには書き込まれません。",
        "対象：Claude API、Claude Platform on AWS、Claude Models on Google Cloud（Anthropic 管理）、Microsoft Foundry のすべてのモデル。",
      ],
    },
    {
      kind: "table",
      title: "スレッドあり・なしの違い",
      headers: ["", "スレッドなし", "スレッドあり"],
      rows: [
        ["各リクエストで送るもの", "会話全体、`system`、`tools`", "新しいメッセージと、直前のレスポンスの `id` だけ"],
        ["最初のトークンまでの時間", "会話が長くなるほど増える", "長い会話でも短く、安定する"],
        ["課金されるトークン", "毎ターン会話全体", "同じ"],
        ["料金とレート制限", "標準", "変わらない"],
        ["会話を保持するのは", "あなたのアプリ", "あなたのアプリ。加えて各リクエストの後5分間は API も保持"],
        ["ゼロデータ保持", "対象", "対象外"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "自分のエージェントでメッセージスレッドを使う方法",
      text: [
        "Claude Code ではすでに自動で行われています。Messages API で作ったエージェントでスレッドを使うなら、SDK のスレッドヘルパーが最短の方法です。",
      ],
      steps: [
        {
          title: "スレッドヘルパーを作る",
          text: "Messages リクエストと同じフィールドを渡します。ヘルパーは `message-threads-2026-08-12` ベータヘッダーを付け、最初のターンでスレッドを作成し、以降は新しいメッセージだけを送り、会話全体はメモリ上に保持します。",
          code: sdk,
        },
        {
          title: "または thread フィールドを自分で送る",
          text: "cURL や素の `create` 呼び出しでは、すべてのリクエストに `thread` を追加し、そのたびにベータヘッダーも送ります。続きは必ず最新のレスポンスの `id` から行います。それぞれの `id` から続けられるのは一度だけです。",
          code: raw,
        },
        {
          title: "モデルと設定は固定する",
          text: "`system` と `tools` は最初のリクエストにだけ入れます。`model`、`thinking`、`tool_choice`、トップレベルの `cache_control`、ベータヘッダーは毎ターン同じにしてください。変更すると `thread_fingerprint_mismatch` の 400 エラーが返ります。変えたいときは新しいスレッドを始めます。",
        },
        {
          title: "自分でも会話を保持し、404 ならやり直す",
          text: "スレッドはベストエフォートです。続きのリクエストが `thread_not_found` の 404 を返したとき（スレッドが失効した、直前のターンが保存されなかった、フォールバックのモデルが書き込んだ、など）は、会話全体を新しい create リクエストで送り直します。SDK のヘルパーは、これを一度だけ自動で行います。",
        },
        {
          title: "プロンプトキャッシュを有効にする",
          text: "スレッドがプロンプトを自動でキャッシュしてくれるわけではありません。すべてのリクエストでトップレベルの `cache_control` を送れば、各ターンで過去の会話をキャッシュから読めます。`thread` を含むリクエストに付けられるブレークポイントは最大4つです。",
        },
      ],
      source: { label: "出典：Anthropic のメッセージスレッドのドキュメント", href: docs },
    },
    {
      kind: "text",
      title: "制限と、スレッドが対応していないもの",
      points: [
        "Message Batches、トークンカウント、オンデマンドの compaction、コンテキスト編集とは併用できません（`keep: \"all\"` を指定した `clear_thinking_20251015` を除く）。",
        "HIPAA 対応の組織や Inference hooks を使う組織では利用できません。該当するリクエストは `thread_unsupported_request` の 400 エラーになります。",
        "ゼロデータ保持の対象外です。API はスレッドをメモリ上に保持し、最後の使用から1時間以内に削除します。",
        "スレッドを一覧・読み取り・削除する API はなく、スレッドは追記専用です。圧縮したいときは、自分で作った要約から新しいスレッドを始めます。",
        "拒否（refusal）が返ったら、そのスレッドは続けず、拒否につながったターンを除いた新しいスレッドを始めてください。",
        "1つのスレッドのすべてのリクエストで同じ API キーとワークスペースを使ってください。違うと続けられません。",
      ],
    },
    {
      kind: "text",
      title: "Claude Code ユーザーにとっての意味",
      text: [
        "何も変更する必要はありません。Anthropic によると、スレッドは Claude Code のほとんどのユーザーでデフォルトで有効です。効果が出るのは長いセッションで、大きな会話の深いところのターンでも、回答がより早く始まります。Claude は毎ターン会話全体を読むため、使用量は減りません。",
        "API ドキュメントによると、スレッドは最後のリクエストから5分で失効します。それより長く間を空けてセッションに戻ると、最初のリクエストは会話全体を再び送り、その後のターンは速くなります。スケジュールで起きる[自律的な Claude Code セッション](/proactive-claude-code)でも同じことが起こります。",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Crewmark なら",
      title: "長い Claude Code セッションを自律的に働かせよう",
      text: [
        "メッセージスレッドは長いセッションを速くし、Crewmark はそれを自律的にします。Claude Code、Codex、DeepSeek Harness、OpenCode のセッションに職種・目標・勤務時間を与え、ハートビートで同じ会話の中で起こすので、コンテキストを保ったままボードから次の issue を取ります。",
      ],
      steps: [
        {
          title: "セッションを社員にする",
          text: "ソフトウェアエンジニアや SEO 担当などの職種を選び、目標を数字で書いて、Claude Code でセットアップコマンドを実行します。",
        },
        {
          title: "ハートビートで仕事を始めさせる",
          text: "勤務時間中、社員は15分・30分・60分ごとに同じ会話の中で起きます。詳しくは [Claude Code を自律的に動かす方法](/proactive-claude-code)をご覧ください。[複数の Claude Code エージェント](/blog/multiple-claude-code-agents)のように、複数を並行して動かすこともできます。",
        },
        {
          title: "issue を割り当て、メッセージに返信する",
          text: "ボードに仕事を置くと、社員がそれを拾い、進めながらコメントし、判断が必要なときはメッセージを送ってきます。[AI 社員とは](/ai-employees)もご覧ください。",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "自分のエージェントで Claude のメッセージスレッドを使う" },
  mid: {
    title: "長い Claude Code セッションを動かしていますか？",
    text: "Crewmark は、職種・目標・issue のボードを与え、ハートビートでセッションを起こします。契約中のプランのままご利用いただけます。",
    button: "今すぐ始める",
  },
  faq: {
    title: "Claude のメッセージスレッドのよくある質問",
    items: [
      {
        q: "Claude のメッセージスレッドとは？",
        a: "2026年11月2日からパブリックベータで提供されている Claude API の機能で、ターンの間も会話を Anthropic 側で保持します。最初のリクエストで会話全体を送ってスレッドを作成し、以降のリクエストでは新しいメッセージと直前のレスポンスの `id` だけを送ります。",
      },
      {
        q: "メッセージスレッドで Claude Code は速くなる？",
        a: "長いセッションでは速くなります。Anthropic によると、スレッドは Claude Code のほとんどのユーザーでデフォルトで有効で、50万〜100万トークンのリクエストでは最初のトークンまでの時間の中央値が約35%短くなります。短い会話ではほとんど効果がありません。",
      },
      {
        q: "メッセージスレッドでトークンや費用は節約できる？",
        a: "できません。Claude は毎ターン会話全体を読むので、トークン使用量、料金、レート制限は変わりません。得られるのは、リクエストが小さくなることと、最初のトークンが速くなることです。コストを下げたいときは、プロンプトキャッシュを使ってください。",
      },
      {
        q: "スレッドはどのくらい続く？",
        a: "最後のリクエストから5分で失効し、レスポンスが保存されるたびに5分が数え直されます。API は最後の使用から1時間以内に削除します。その後は、会話全体を送り直して新しいスレッドを始めます。",
      },
      {
        q: "メッセージスレッドのベータヘッダーは？",
        a: "`anthropic-beta: message-threads-2026-08-12` で、スレッドのすべてのリクエストで送ります。SDK のスレッドヘルパーが自動で付けます。",
      },
      {
        q: "メッセージスレッドはゼロデータ保持の対象？",
        a: "対象外です。スレッドの内容はサーバー管理のキーで暗号化されてメモリ上に保持され、永続ストレージには書き込まれず、最後の使用から1時間以内に削除されます。HIPAA 対応の組織はスレッドを使えません。",
      },
      {
        q: "メッセージスレッドは Managed Agents のセッションスレッドと同じ？",
        a: "違います。メッセージスレッドは Messages API の機能で、セッションスレッドは Claude Managed Agents のものです。",
      },
    ],
  },
  cta: {
    title: "長い Claude Code セッションを、自律的に動かそう。",
    text: "Crewmark は、Claude Code、Codex、DeepSeek Harness のセッションを、職種・目標・勤務時間・ハートビートを持つ AI 社員に変えます。",
    button: "今すぐ始める",
  },
  checked: "2026年11月4日に Anthropic の発表と Claude Platform のドキュメントと照合しました。",
  disclaimer:
    "Crewmark は独立した製品であり、Anthropic とは提携しておらず、その承認も受けていません。Claude と Claude Code は Anthropic の商標です。",
};
