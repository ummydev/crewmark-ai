import type { GuideCopy } from "@/components/landing/guide-article";

// Japanese translation of /blog/claude-inference-hooks; the English master is src/content/blog/claude-inference-hooks.ts.

const docs = "https://platform.claude.com/docs/en/manage-claude/inference-hooks";

const verdict = `// リクエストを許可する
{ "action": "allow" }

// 拒否する：deny_reason はユーザーに表示され（最大 500 文字）、
// reference_id はコンプライアンス用のアクティビティフィードにだけ記録される
{
  "action": "deny",
  "deny_reason": "このプロンプトには顧客のカード情報が含まれているようです。",
  "reference_id": "scan_01HXPT4R9V"
}`;

export const copy: GuideCopy = {
  meta: {
    title: "Claude の inference hooks：仕組みと設定方法 | Crewmark AI",
    description:
      "2026年11月5日に一般提供が始まった Claude の inference hooks（推論フック）は、すべてのプロンプトとツール呼び出しを自社のセキュリティサーバーに送り、許可か拒否かを判定させます。仕組み、設定手順、制限、Claude Code hooks との違いを解説します。",
  },
  breadcrumb: "Claude の inference hooks",
  parent: { name: "ブログ", href: "/blog" },
  article: { published: "2026-11-06" },
  hero: {
    kicker: "ブログ · Claude",
    title: "Claude の inference hooks：すべてのプロンプトの前に許可・拒否のチェック",
    lead: "inference hooks（推論フック）を使うと、Claude Enterprise の組織はすべてのプロンプト（必要ならすべてのツール呼び出しも）を自社のセキュリティサーバーに送り、許可（allow）か拒否（deny）かの判定を受けてから Claude を動かせます。2026年11月5日に一般提供が始まり、同時にベータ版のセキュリティセンター（security center）も発表されました。チェックは Anthropic のサーバー上で行われるため、一度の設定で claude.ai、Claude Code、Cowork などの Claude 製品をすべてカバーでき、社員の PC には何もインストールする必要がありません。このガイドでは、仕組み、設定方法、制限、そして Claude Code で自分で書く hooks との違いを説明します。",
    cta: "今すぐ始める",
    secondary: "設定手順へ移動",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "text",
      title: "inference hooks の仕組み",
      text: [
        "組織（またはそのセキュリティベンダー）が AI セキュリティサーバー、つまり HTTPS エンドポイントを運用します。誰かがプロンプトを送ると、Anthropic は会話のトランスクリプトを Standard Webhooks 方式で署名してそのエンドポイントに POST し、判定を待ちます。allow なら推論がそのまま進み、deny ならリクエストはモデルに届かず、ユーザーにはあなたが返した理由と、管理者があらかじめ設定した定型メッセージが表示されます。",
      ],
      points: [
        "イベントは2種類です。`prompt` は管理対象の推論リクエストの前に毎回、`tool_call` は Validate tool calls（ツール呼び出しの検証）がオンのとき、Claude の応答に含まれるツール呼び出しが実行される前に送られます。",
        "組織全体で設定は一度だけです。対象は claude.ai、Claude Desktop とモバイル、Claude Code（CLI を含む）、Cowork、Claude for Microsoft 365、Claude Tag、Claude in Chrome です。",
        "サーバーに届くのは、トランスクリプトのテキスト、ツール呼び出しとその結果、添付ファイルから抽出したテキストです。ファイルや画像の生データ、システムプロンプト、ツール定義は送られません。",
        "判定は allow か deny のみです。プロンプトの書き換えやマスキングには対応していません。",
        "拒否はすべて組織の Activity Feed（アクティビティフィード）に記録されます。",
      ],
    },
    {
      kind: "table",
      title: "inference hooks、Claude Code hooks、Compliance API の比較",
      text: [
        "名前は似ていますが、3つは別のツールです。Claude Code hooks はプロジェクトごと・ユーザーごとに設定し、開発者のマシンで動きます。inference hooks は組織が一度だけ設定し、Anthropic 側で動きます。",
      ],
      headers: ["", "Inference hooks", "Claude Code hooks", "Compliance API"],
      rows: [
        ["設定する人", "組織の Owner または Primary owner", "各開発者または各プロジェクト（`settings.json` に記述）", "セキュリティ・コンプライアンスチーム"],
        ["動く場所", "Anthropic のサーバーがあなたの HTTPS エンドポイントを呼ぶ", "開発者のマシン上のシェルコマンド", "あなたが Anthropic の API を呼ぶ"],
        ["タイミング", "推論の前と、ツール呼び出しの実行前", "PreToolUse、PostToolUse、Stop などのイベント時", "事後"],
        ["対象", "Enterprise 組織内のすべての Claude 製品", "その設定を持つ Claude Code セッション", "アクティビティ、チャット、ファイル、トランスクリプト"],
        ["ブロックできるか", "できる：許可または拒否", "できる（対応するイベントのみ）", "できない：監査とエクスポート"],
        ["プラン", "Claude Enterprise", "Claude Code の全ユーザー", "Claude Enterprise"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "inference hooks の設定方法",
      text: [
        "Owner または Primary owner のロール（Admin では足りません）と、443 番ポートで公開された HTTPS エンドポイントが必要です。ngrok などのトンネルはブロックされるので、テスト用サーバーも自分で管理するドメインに置いてください。",
      ],
      steps: [
        {
          title: "機能を許可する",
          text: "claude.ai で Organization settings → Data and privacy（組織設定 → データとプライバシー）を開き、Inference hooks の Allow for your organization（組織で許可）をオンにします。これだけでは検査は始まりません。Enforce verdicts（判定の適用）はオフのままです。",
        },
        {
          title: "エンドポイントを追加し、署名シークレットを保管する",
          text: "Configure（設定）をクリックし、`https://` で始まる URL を入力して保存します。初回の保存時に webhook の署名シークレットが一度だけ表示されます。サーバーはこれを使ってすべてのリクエストを検証するので、必ず保管してください。",
        },
        {
          title: "ヘッダーを追加してテストする",
          text: "サーバーが Anthropic からのリクエストを認証できるよう、静的ヘッダーを最大 16 個まで追加し、Test connection（接続テスト）をクリックします。合成プロンプトが送られ、判定結果と往復時間が表示されます。",
        },
        {
          title: "判定を HTTP 200 の JSON で返す",
          text: "すべてのリクエストに HTTP 200 と `action` を返します。200 以外のステータスは拒否ではなく、障害として扱われます。",
          code: verdict,
        },
        {
          title: "障害時の扱いとタイムアウトを決める",
          text: "Block the request（リクエストをブロック）はフェイルクローズ、Allow the request（リクエストを許可）はフェイルオープンです。判定のタイムアウトは 1〜10,000 ミリ秒で、デフォルトは 5,000 です。判定が遅れると到達不能とみなされます。失敗が続くとサーキットブレーカーが作動し、サーバーが回復するまで障害時の設定が適用されます。",
        },
        {
          title: "段階的に展開してから適用する",
          text: "まずは判定を送るだけで何もブロックしない Shadow mode（シャドーモード）で始め、一定の割合のリクエストだけを検査し、必要ならカスタムロールを除外してから Enforce verdicts をオンにします。変更はおよそ1分ですべてのサーバーに反映されます。",
        },
      ],
      source: { label: "出典：Claude Platform ドキュメント、Inference hooks", href: docs },
    },
    {
      kind: "text",
      title: "制限と注意点",
      points: [
        "Enterprise 限定です。Team、Pro、Max では使えず、Claude Platform（API）の組織や Amazon Bedrock、Google Cloud でも使えません。",
        "ドキュメントのスクリーンショットのような画像だけのコンテンツは検査されません。生データは一切送られないためです。",
        "拒否されたメッセージはトランスクリプトに残り、以降のメッセージのたびに再送されます。Claude Code では、`/rewind` でそのメッセージを持ち込んだプロンプトまで戻るか、`/clear` でやり直してください。",
        "Anthropic 自身のバックグラウンドのモデル呼び出しの一部は対象外です。たとえばホスト型の Claude Security のスキャン、GitHub のプルリクエストでの Code Review、スマートレポートなどです。Claude Code でローカルに `/code-review` を実行した場合は対象になります。",
        "音声モードではごく一部のツール呼び出しが送られないため、そこでは hooks を唯一の制御手段にしないでください。",
        "同じ発表では、Claude、Cowork、Claude Code の設定を Anthropic の推奨構成と比較するセキュリティセンター（ベータ）と、ベータ版の一元管理・アクセス制御も追加されました。",
      ],
    },
    {
      kind: "text",
      title: "自律的に動くエージェントにとって重要な理由",
      text: [
        "Claude Code が無人で、スケジュールに沿って、あるいはバックグラウンドで働くとき、送信前にプロンプトを一つひとつ読む人はいません。inference hooks があれば、エージェントがどこで動いていても、すべてのリクエストとツール呼び出しに会社として一つのインラインチェックをかけられます。シャドーモードを使えば、セキュリティチームは何かをブロックする前にポリシーを調整できます。1台のマシンでのプロジェクト単位のガードレールには、引き続き Claude Code 自身の hooks と権限ルールが使えます。権限モードについては [Claude Code のプランモード](/blog/claude-code-plan-mode) をご覧ください。",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Crewmark なら",
      title: "あなたがいない間も働く AI 社員にガードレールを",
      text: [
        "Crewmark は、Claude Code、Codex、DeepSeek Harness、OpenCode のセッションを、職種・目標・勤務時間を持つ AI 社員に変え、ハートビートで起こしてボードから次の issue を取らせます。Claude Enterprise プランなら、inference hooks はほかの人と同じように AI 社員のプロンプトもチェックします。",
      ],
      steps: [
        {
          title: "あなたの承認が必要なことを決める",
          text: "公開、マージ、支払いなどリスクのある操作の前には、各社員があなたに確認を求めます。承認は一つの受信箱から行えます。",
        },
        {
          title: "記録をボードに残す",
          text: "issue ごとに社員のコメントとステータスの変更が残るので、社員の作業内容をセキュリティチームのログと突き合わせて確認できます。",
        },
        {
          title: "ハートビートで仕事を始める",
          text: "勤務時間中、社員は同じ会話の中で 15 分、30 分、または 60 分ごとに起きます。[Claude Code をプロアクティブにする方法](/proactive-claude-code)と[AI 社員とは](/ai-employees)もご覧ください。",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Claude の inference hooks を設定する" },
  mid: {
    title: "セキュリティは整いました。次は Claude Code に仕事を。",
    text: "Crewmark は、職種・目標・issue のボードを与え、ハートビートで Claude Code を起こします。契約中のプランのままご利用いただけます。",
    button: "今すぐ始める",
  },
  faq: {
    title: "Claude の inference hooks よくある質問",
    items: [
      {
        q: "Claude の inference hooks とは何ですか？",
        a: "Claude Enterprise の機能で、各プロンプト（必要なら各ツール呼び出しも）を組織のセキュリティサーバーに送り、Claude が動く前に許可か拒否かを返してもらう仕組みです。2026年11月5日に一般提供が始まりました。",
      },
      {
        q: "inference hooks は Claude Code でも使えますか？",
        a: "はい。一度の設定で、CLI やデスクトップアプリの Claude Code を含め、Enterprise 組織内のすべての Claude 製品が対象になります。開発者のマシンには何もインストールする必要がありません。",
      },
      {
        q: "inference hooks と Claude Code hooks の違いは何ですか？",
        a: "Claude Code hooks は各開発者やプロジェクトが `settings.json` で設定するシェルコマンドで、PreToolUse などのイベント時にローカルで実行されます。inference hooks は組織が一度だけ設定し、すべての Claude 製品について推論の前に Anthropic のサーバー上で実行されます。",
      },
      {
        q: "inference hooks を使えるプランは？",
        a: "Claude Enterprise のみで、Owner または Primary owner が設定します。Claude Platform API の組織や、Amazon Bedrock、Google Cloud では使えません。",
      },
      {
        q: "inference hook で機密データをマスキングできますか？",
        a: "できません。判定は許可か拒否のみで、プロンプトの書き換えやマスキングには対応していません。",
      },
      {
        q: "セキュリティサーバーが落ちたらどうなりますか？",
        a: "障害時の設定によります。リクエストをブロックする（フェイルクローズ）か、検査せずに通す（フェイルオープン）かです。サーキットブレーカーは障害中のサーバーへの呼び出しを止め、回復するとリセットされます。",
      },
      {
        q: "Claude のセキュリティセンターとは何ですか？",
        a: "inference hooks と同時に発表された Organization settings 内のベータ版ページで、Claude、Cowork、Claude Code の設定を Anthropic の推奨構成と比較し、監査担当者向けのレポートを作成します。",
      },
    ],
  },
  cta: {
    title: "Claude Code で動く AI 社員を、あなたのガードレールの内側で。",
    text: "Crewmark は、Claude Code、Codex、DeepSeek Harness のセッションを、職種・目標・勤務時間・ハートビートを持つ AI 社員に変えます。",
    button: "今すぐ始める",
  },
  checked: "2026年11月6日に Anthropic の発表、Claude ヘルプセンター、Claude Platform のドキュメントと照合しました。",
  disclaimer:
    "Crewmark は独立した製品であり、Anthropic とは提携しておらず、その承認も受けていません。Claude と Claude Code は Anthropic の商標です。",
};
