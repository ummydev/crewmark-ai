import type { GuideCopy } from "@/components/landing/guide-article";

// Japanese translation of /blog/claude-code-hooks; the English master is src/content/blog/claude-code-hooks.ts.

const docs = "https://code.claude.com/docs/en/hooks-guide";

const notify = `{
  "hooks": {
    "Notification": [
      {
        "matcher": "",
        "hooks": [
          {
            "type": "command",
            "command": "osascript -e 'display notification \\"Claude Code needs your attention\\" with title \\"Claude Code\\"'"
          }
        ]
      }
    ]
  }
}`;

const format = `{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Edit|Write",
        "hooks": [
          { "type": "command", "command": "jq -r '.tool_input.file_path' | xargs npx prettier --write" }
        ]
      }
    ]
  }
}`;

const block = `#!/bin/bash
# .claude/hooks/block-drop-table.sh。Bash の PreToolUse フックとして実行
INPUT=$(cat)
COMMAND=$(echo "$INPUT" | jq -r '.tool_input.command')

if echo "$COMMAND" | grep -q "drop table"; then
  echo "Blocked: dropping tables is not allowed" >&2  # Claude へのフィードバックになる
  exit 2                                               # 2 = 操作をブロック
fi

exit 0  # 判断なし：通常の権限フローが適用される`;

const stop = `{
  "hooks": {
    "Stop": [
      {
        "hooks": [
          {
            "type": "prompt",
            "prompt": "Check if all tasks are complete. If not, respond with {\\"ok\\": false, \\"reason\\": \\"what remains to be done\\"}."
          }
        ]
      }
    ]
  }
}`;

export const copy: GuideCopy = {
  meta: {
    title: "Claude Code のフック（hooks）：イベントと例 | Crewmark AI",
    description:
      "Claude Code のフック（hooks）を解説。ライフサイクルイベント、設定場所、終了コードと JSON 出力、そして通知・自動フォーマット・コマンドのブロック・Stop フックのコピペで使える例を紹介します。",
  },
  breadcrumb: "Claude Code フックガイド",
  parent: { name: "ブログ", href: "/blog" },
  article: { published: "2026-11-06" },
  hero: {
    kicker: "ブログ · Claude Code",
    title: "Claude Code のフック（hooks）：イベント、例、仕組み",
    lead: "Claude Code のフック（hooks）は、セッション中の決まったタイミングで自動的に実行されるコマンドです。ツールの実行前、ファイルの編集後、Claude が応答を終えたとき、あなたの入力が必要になったときなどに動きます。CLAUDE.md の指示は Claude がたいてい従うものにすぎませんが、フックは必ず実行されます。だからこそ、ルールを強制したり雑務を自動化したりするのに向いています。このガイドでは、イベントの種類、フックの設定場所、終了コードと JSON で動作を制御する方法、すぐに使える 4 つの例、そして新しい prompt・agent・HTTP タイプのフックを説明します。",
    cta: "今すぐ始める",
    secondary: "例へ移動",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "table",
      id: "events",
      title: "Claude Code のフックイベント",
      text: [
        "リファレンスには 30 以上のイベントが載っています。ここでは多くのフックが使うものを挙げます。`matcher` を使うと、フックの対象を特定のツール、ファイル、ソースに絞り込めます。",
      ],
      headers: ["イベント", "発火するタイミング", "主な用途"],
      rows: [
        ["`SessionStart`", "セッションの開始時または再開時", "コンテキストの読み込み、環境のチェック"],
        ["`UserPromptSubmit`", "プロンプトを送信した後、Claude が見る前", "コンテキストの追加、機密性の高いプロンプトのブロック"],
        ["`PreToolUse`", "ツール呼び出しの実行前（ブロック可能）", "危険なコマンドのブロック、ファイルの保護"],
        ["`PermissionRequest`", "ツール呼び出しに権限の判断が必要なとき", "特定の確認を自動で許可・拒否"],
        ["`PostToolUse`", "ツール呼び出しが成功した後", "編集したファイルのフォーマット、lint、テスト"],
        ["`Notification`", "Claude Code が通知を送るとき", "Claude があなたを必要としたときのデスクトップ通知"],
        ["`SubagentStart`, `SubagentStop`", "サブエージェントの開始時・終了時", "委任した作業の記録やチェック"],
        ["`Stop`", "Claude が応答を終えたとき", "タスクが本当に終わったかの確認"],
        ["`PreCompact`, `PostCompact`", "コンテキスト圧縮の前後", "重要なコンテキストの保存や再注入"],
        ["`FileChanged`, `CwdChanged`", "監視中のファイルまたは作業ディレクトリが変わったとき", "環境の再読み込み、ファイルの再フォーマット"],
        ["`SessionEnd`", "セッションの終了時", "後片付け、ログの書き出し"],
      ],
    },
    {
      kind: "table",
      title: "フックを置く場所",
      headers: ["場所", "適用範囲", "共有"],
      rows: [
        ["`~/.claude/settings.json`", "自分のすべてのプロジェクト", "しない"],
        ["`.claude/settings.json`", "1 つのプロジェクト", "する（コミットする）"],
        ["`.claude/settings.local.json`", "1 つのプロジェクト", "しない（gitignore 済み）"],
        ["管理ポリシー設定（managed policy settings）", "組織全体", "管理者が管理"],
        ["プラグインの `hooks/hooks.json`", "プラグインが有効な間", "する（プラグインと一緒に）"],
        ["スキルまたはサブエージェントの frontmatter", "スキルが呼び出された後、またはサブエージェントの実行中", "する（ファイル内）"],
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Claude Code のフックの例をステップごとに",
      text: [
        "各ブロックを設定ファイルの `hooks` キーの下に追加します。ファイルにすでに `hooks` オブジェクトがある場合は、置き換えずにイベントを同じ階層のキーとして追加してください。`/hooks` を実行すると、Claude Code が読み込んだか確認できます。Claude にフックを書いてもらうこともできます。",
      ],
      steps: [
        {
          title: "Claude があなたを必要としたらデスクトップ通知を受け取る",
          text: "`~/.claude/settings.json` に `Notification` フックを追加します。この例は macOS の `osascript` を使っています。Linux では `notify-send`、Windows では PowerShell を使います。",
          code: notify,
        },
        {
          title: "Claude が編集したファイルをすべて自動フォーマットする",
          text: "`Edit|Write` にマッチする `PostToolUse` フックが、stdin の JSON から編集されたファイルのパスを `jq` で読み取り、Prettier を実行します。`.claude/settings.json` に置けばチームで共有できます。",
          code: format,
        },
        {
          title: "危険なコマンドをブロックする",
          text: "`Bash` に対する `PreToolUse` フックがこのスクリプトを実行します。終了コード 2 で呼び出しをブロックし、stderr に書いた内容は Claude へのフィードバックになるので、Claude は方針を変えられます。終了コード 0 は「判断なし」を意味し、通常の権限チェックがそのまま適用されます。",
          code: block,
        },
        {
          title: "タスクが終わるまで Claude に作業を続けさせる",
          text: "`prompt` タイプの `Stop` フックが、すべて終わったかをモデルに確認します。答えが `ok: false` なら、Claude は `reason` を次の指示として作業を続けます。これが Stop フックの定番の例です。",
          code: stop,
        },
      ],
      source: { label: "出典：Claude Code ドキュメント、Automate actions with hooks", href: docs },
    },
    {
      kind: "text",
      title: "フックが動作を決める仕組み",
      points: [
        "入力：各フックは、ツール名や `tool_input`、セッション ID、`cwd` などのイベント情報を JSON として stdin で受け取ります。",
        "終了コード 0：異議なし。`SessionStart` や `UserPromptSubmit` など一部のイベントでは、通常の stdout が Claude のコンテキストに追加されます。",
        "終了コード 2：イベントが許す場合はブロック。stderr はイベントに応じて Claude またはあなたに返されます。",
        "stdout への JSON 出力：より細かい制御。権限の判断を含む `hookSpecificOutput`、ツールの入力を書き換える `updatedInput`、`additionalContext` などです。",
        "その他の終了コード：フックで `onFailure: \"block\"` を設定していない限り、通常はブロックしないエラーとして扱われます。",
        "1 つのイベントにマッチした複数のフックは並列に実行されます。",
      ],
    },
    {
      kind: "table",
      title: "command・prompt・agent・HTTP フック",
      headers: ["タイプ", "実行されるもの", "デフォルトのタイムアウト"],
      rows: [
        ["`command`", "シェルコマンド", "10 分"],
        ["`http`", "イベントの JSON を URL に POST。レスポンスボディはコマンドの出力と同じように扱われる", "10 分"],
        ["`mcp_tool`", "設定済みの MCP サーバーのツール", "10 分"],
        ["`prompt`", "`ok` かどうかを答える 1 回のモデル呼び出し", "30 秒"],
        ["`agent`", "判断の前にファイルを読んだりツールを実行したりできるサブエージェント（実験的）", "60 秒"],
      ],
    },
    {
      kind: "text",
      title: "フックとスキルと CLAUDE.md の違い、その他の注意点",
      points: [
        "CLAUDE.md と[スキル](/blog/claude-code-skills)は Claude がたいてい従う指示で、フックは必ず実行されます。絶対に飛ばしてはいけないことはフックに書きましょう。",
        "`PostToolUse` ではすでに実行された操作を取り消せません。止めたいなら `PreToolUse` を使います。",
        "`Stop` はタスクの終わりだけでなく Claude が応答を終えるたびに発火し、ユーザーが中断したときには発火しません。",
        "フック自身はスラッシュコマンドを実行したりツールを呼び出したりできません。やり取りの手段は終了コード、stdout、stderr、JSON だけです。",
        "`\"disableAllHooks\": true` でフックを無効にできます。ただし管理フックは、管理設定側でも無効にしない限り実行されます。",
        "フックはあなたの Claude Code 環境の中だけで動きます。すべての Claude 製品にかかる組織全体のチェックは別の機能です：[Claude の inference hooks](/blog/claude-inference-hooks)。",
        "テスト出力をフィルタする PreToolUse フックは、[トークン使用量を減らす](/blog/reduce-claude-code-token-usage)最も効果的な方法の 1 つでもあります。",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Crewmark なら",
      title: "フックは Claude Code にルールを守らせ、Crewmark は Claude Code を働かせ続けます。",
      text: [
        "無人で動くエージェントを安全にするのがフックです。フォーマット、テスト、ガードレールが毎回実行されます。Crewmark は、Claude Code、Codex、DeepSeek Harness、OpenCode のセッションを、職種・目標・勤務時間を持つ AI 社員に変え、ハートビートで起こしてボードから次の issue を取らせます。プロジェクトのフックも有効な状態です。",
      ],
      steps: [
        {
          title: "フックをコミットする",
          text: "`.claude/settings.json` のフックは、あなたのセッションと同じように社員のセッションでも読み込まれるので、社員の編集はフォーマットされ、危険なコマンドはブロックされます。",
        },
        {
          title: "ハートビートで仕事を始めさせる",
          text: "勤務時間中、社員は15分、30分、60分ごとに同じ会話の中で起きます。[Claude Code を能動的にする方法](/proactive-claude-code)もご覧ください。",
        },
        {
          title: "あなたが必要なことにだけ答える",
          text: "社員は自分の issue にコメントし、判断が必要なときはメッセージを送ってきます。[AI 社員とは](/ai-employees)もご覧ください。",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Claude Code にフックを追加する" },
  mid: {
    title: "フックは毎回実行されます。あなたのエージェントは？",
    text: "Crewmark は、職種・目標・issue のボードを与え、ハートビートで Claude Code を起こします。契約中のプランのままご利用いただけます。",
    button: "今すぐ始める",
  },
  faq: {
    title: "Claude Code のフックのよくある質問",
    items: [
      {
        q: "Claude Code のフックとは何ですか？",
        a: "ツールの実行前や Claude が応答を終えたときなど、ライフサイクルイベントで Claude Code が自動的に実行する、ユーザー定義のコマンド、HTTP 呼び出し、モデルによるチェックです。Claude が指示を覚えていることに頼らず、確実な制御ができます。",
      },
      {
        q: "Claude Code のフックはどこで設定しますか？",
        a: "`~/.claude/settings.json`（すべてのプロジェクト）、`.claude/settings.json`（チームで共有）、`.claude/settings.local.json`（自分だけ）の `hooks` の下に書きます。プラグイン、スキル、サブエージェントもフックを持てます。`/hooks` を実行すると読み込まれているものを確認できます。",
      },
      {
        q: "フックでコマンドをブロックするには？",
        a: "`Bash` にマッチする `PreToolUse` フックを使います。stdin の JSON からコマンドを読み取り、ブロックするときは stderr に理由を書いて終了コード 2 で終了します。Claude はその理由を見て対応を変えます。",
      },
      {
        q: "Stop フックとは何ですか？",
        a: "Claude が応答を終えたときに発火する `Stop` イベントのフックです。prompt タイプの Stop フックなら、タスクが完了したかを確認し、終わっていなければ理由を添えて Claude を作業に戻せます。",
      },
      {
        q: "フックとスキルの違いは？",
        a: "スキルは、関係するときに Claude が読み込み、たいてい従う指示やファイルです。フックは、Claude の判断に関係なく、イベントが発火するたびに Claude Code が実行するコードです。",
      },
      {
        q: "フックが発火しないのはなぜですか？",
        a: "`/hooks` に表示されているか、イベント名と matcher の綴りが正確か、スクリプトに実行権限があるか、シェルのプロファイルの出力が JSON を壊していないかを確認してください。デバッグログを有効にして Claude Code を起動すると、各フックが何をしたかがわかります。",
      },
      {
        q: "Claude Code のフックと inference hooks は同じものですか？",
        a: "違います。Claude Code のフックは、あなたのマシン上であなたのセッションのために動きます。inference hooks は Claude Enterprise の機能で、Claude が動く前に組織内のすべてのプロンプトをセキュリティサーバーに送ります。",
      },
    ],
  },
  cta: {
    title: "ガードレールはフックに、仕事はボードから。",
    text: "Crewmark は、Claude Code、Codex、DeepSeek Harness のセッションを、職種・目標・勤務時間・ハートビートを持つ AI 社員に変えます。",
    button: "今すぐ始める",
  },
  checked: "2026年11月6日に Claude Code のドキュメント（フックガイド、フックリファレンス）と照合しました。",
  disclaimer:
    "Crewmark は独立した製品であり、Anthropic とは提携しておらず、その承認も受けていません。Claude と Claude Code は Anthropic の商標です。",
};
