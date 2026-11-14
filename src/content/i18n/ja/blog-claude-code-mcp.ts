import type { GuideCopy } from "@/components/landing/guide-article";

// Japanese translation of /blog/claude-code-mcp; the English master is src/content/blog/claude-code-mcp.ts.

const docs = "https://code.claude.com/docs/en/mcp";

const add = `# Remote HTTP server (recommended for cloud services)
claude mcp add --transport http notion https://mcp.notion.com/mcp

# With a bearer token
claude mcp add --transport http secure-api https://api.example.com/mcp \\
  --header "Authorization: Bearer your-token"

# Local stdio server: everything after -- is the server's own command
claude mcp add --env AIRTABLE_API_KEY=YOUR_KEY --transport stdio airtable \\
  -- npx -y airtable-mcp-server`;

const manage = `claude mcp list            # every configured server
claude mcp get notion      # one server's details
claude mcp remove notion   # remove it (run claude mcp logout notion first to revoke tokens)
claude mcp add-from-claude-desktop   # import from Claude Desktop (macOS, WSL)`;

const project = `{
  "mcpServers": {
    "api-server": {
      "type": "http",
      "url": "\${API_BASE_URL:-https://api.example.com}/mcp",
      "headers": {
        "Authorization": "Bearer \${API_KEY}"
      }
    }
  }
}`;

export const copy: GuideCopy = {
  meta: {
    title: "Claude Code の MCP：サーバー追加と .mcp.json | Crewmark AI",
    description:
      "Claude Code で MCP サーバーを設定する方法。claude mcp add による HTTP・stdio サーバーの追加、local・project・user スコープ、設定ファイルの場所、環境変数を使う .mcp.json、OAuth とトラブルシューティングまで解説します。",
  },
  breadcrumb: "Claude Code MCP ガイド",
  parent: { name: "ブログ", href: "/blog" },
  article: { published: "2026-11-06" },
  hero: {
    kicker: "ブログ · Claude Code",
    title: "Claude Code の MCP：サーバーの追加方法と設定の保存場所",
    lead: "MCP（Model Context Protocol）サーバーは、Claude Code を Notion、GitHub、Sentry、データベース、自社 API などの外部ツールやデータにつなぎます。`claude mcp add` で追加し、自分専用にするかチームで共有するかをサーバーごとに選べば、Claude がそのツールを呼び出せるようになります。このガイドでは、HTTP と stdio サーバーの追加、3 つのスコープとその設定ファイル、環境変数を使う `.mcp.json`、OAuth でのサインイン、サーバーがつながらないときの確認ポイントを説明します。",
    cta: "今すぐ始める",
    secondary: "設定手順へ移動",
    secondaryHref: "#how-to",
  },
  sections: [
    {
      kind: "steps",
      id: "how-to",
      title: "Claude Code に MCP サーバーを追加する方法",
      steps: [
        {
          title: "トランスポートを選ぶ",
          text: "クラウドでホストされたリモートサーバーには HTTP を使います。これが推奨のトランスポートで、サーバーが非推奨の SSE トランスポートしか提供していない場合、Claude Code は SSE にフォールバックします。ローカルプロセスとして動くサーバーには stdio を使います。stdio では、`--` より後ろはすべてそのままサーバーに渡されます。",
          code: add,
        },
        {
          title: "スコープを選ぶ",
          text: "`--scope` を付けなければ、サーバーは local スコープになります（自分だけ、このプロジェクトだけ）。`--scope project` を付けるとチーム用に `.mcp.json` に書き込まれ、`--scope user` を付けると自分のすべてのプロジェクトで使えます。詳しくは下の表を参照してください。",
        },
        {
          title: "必要ならサインインする",
          text: "多くのリモートサーバーは OAuth を使います。Claude Code の中で `/mcp` を実行して認証するサーバーを選ぶか、シェルで `claude mcp login <name>` を実行します。ヘッドレスの `-p` 実行ではサインインフローを開けないので、先に対話モードでサインインしておきましょう。",
        },
        {
          title: "接続を確認する",
          text: "`/mcp` で各サーバーの状態とツールを確認し、シェルでは `claude mcp list` を実行します。そのうえで、ツール名を指定して Claude に使ってもらいます。",
        },
        {
          title: "サーバーを管理する",
          text: "コマンドラインからサーバーの一覧表示、詳細確認、削除、インポートができます。あまり使わないサーバーは削除せず、`/mcp` から無効化できます。",
          code: manage,
        },
      ],
      source: { label: "出典：Claude Code ドキュメント、Connect Claude Code to tools via MCP", href: docs },
    },
    {
      kind: "table",
      id: "scopes",
      title: "MCP のスコープと設定ファイルの場所",
      text: [
        "Claude Code は MCP の設定を次の場所に保存します。MCP の local スコープは `.claude/settings.local.json` ではなく `~/.claude.json` に保存される点に注意してください。",
      ],
      headers: ["スコープ", "読み込まれる場所", "共有", "保存場所"],
      rows: [
        ["local（デフォルト）", "このプロジェクトのみ", "しない", "`~/.claude.json` のプロジェクトのパスの下"],
        ["project", "このプロジェクトのみ", "する（コミットする）", "プロジェクトルートの `.mcp.json`"],
        ["user", "自分のすべてのプロジェクト", "しない", "`~/.claude.json` のトップレベル"],
        ["プラグイン（plugin）", "プラグインが有効な場所", "プラグインと一緒に", "プラグイン自身の設定"],
        ["claude.ai コネクタ（connectors）", "その claude.ai アカウントでサインインしたセッション", "アカウント単位", "claude.ai の設定"],
      ],
    },
    {
      kind: "steps",
      id: "mcp-json",
      title: ".mcp.json でサーバーを共有する",
      text: [
        "`.mcp.json` を使えば、チーム全員が同じサーバーを使えます。シークレットは環境変数でファイルの外に出しておきましょう。`${VAR}` は変数の値に展開され、`${VAR:-default}` は変数が未設定のときデフォルト値を使います。展開は `command`、`args`、`env`、`url`、`headers` で有効です。",
      ],
      steps: [
        {
          title: "シークレットの代わりに変数を参照する",
          text: "`.mcp.json` のプロジェクトサーバーは、初回に各メンバーへ承認を求めます。`claude mcp reset-project-choices` でその回答をリセットできます。`url` を持つ JSON エントリには、`http` などの `type` も必要です。",
          code: project,
        },
      ],
    },
    {
      kind: "text",
      title: "優先順位、コネクタ、その他の細かい点",
      points: [
        "同じサーバーが 2 回定義されている場合、Claude Code は 1 回だけ接続し、local、project、user、プラグイン、claude.ai コネクタの順で最初に見つかったものを使います。エントリはマージされません。組織の管理対象サーバーはこれらすべてより優先されます。",
        "claude.ai アカウントで Claude Code にサインインしていれば、claude.ai で追加したコネクタが自動で表示されます。",
        "Claude Code 自体も MCP サーバーになれます。`claude mcp serve` で、Claude Desktop などほかのクライアントにツールを公開できます。",
        "サーバーはスラッシュコマンドとして表示されるプロンプトを提供することもあります。[Claude Code のスラッシュコマンド](/blog/claude-code-slash-commands)を参照してください。",
        "リモートサーバーを削除すると、Claude Code が保存したトークンは消えますが、失効はしません。失効させるには、先に `claude mcp logout <name>` を実行します。",
      ],
    },
    {
      kind: "text",
      title: "MCP とトークン使用量",
      text: [
        "ツール定義はデフォルトで遅延読み込みされます。Claude がツールを使うまで、コンテキストに入るのはツール名とサーバーの説明だけなので、サーバーを多数並べても以前ほどコストはかかりません。それでもサーバーごとに少しずつ増えるので、使わないものは `/mcp` で無効化し、`gh`、`aws`、`gcloud` のような CLI があればそちらを優先しましょう。CLI ならツール一覧はまったく増えません。詳しくは [Claude Code のトークン使用量を減らす方法](/blog/reduce-claude-code-token-usage)をご覧ください。",
      ],
    },
    {
      kind: "text",
      title: "トラブルシューティング：サーバーがつながらないとき",
      points: [
        "認証が必要と表示される：`/mcp` を開いて Re-authenticate を選ぶか、`claude mcp login <name>` を実行します。",
        "\"has a url but no type\" と出る：JSON エントリに `\"type\": \"http\"`（または `sse`、`ws`）を追加します。type がないと Claude Code は stdio として扱います。",
        "stdio サーバーのフラグが消えた：サーバーのコマンドの前に `--` を置き、Claude Code が自分のフラグとして解釈しないようにします。",
        "`claude mcp list` に変数がないという警告が出る：その変数を設定するか、`:-default` でデフォルト値を与えます。",
        "プロジェクトサーバーが `claude -p` で読み込まれない：ヘッドレスでは承認プロンプトが出ないので、設定を確認するか、`--mcp-config` と `--strict-mcp-config` でサーバーを明示的に渡します。",
        "`claude mcp` で追加するサーバー名には、英字、数字、ハイフン、アンダースコアしか使えません。",
      ],
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Crewmark なら",
      title: "AI 社員にも、あなたと同じツールを",
      text: [
        "Claude Code が issue トラッカーやデータベース、分析ツールにアクセスする手段が MCP です。Crewmark は、Claude Code、Codex、DeepSeek Harness、OpenCode のセッションを、職種・目標・勤務時間を持つ AI 社員に変え、ハートビートで起こしてボードから次の issue を取らせます。プロジェクトの MCP サーバーも使える状態です。",
      ],
      steps: [
        {
          title: ".mcp.json をコミットする",
          text: "project スコープのサーバーは、あなたのセッションと同じように社員のセッションでも読み込まれます。OAuth が必要なサーバーは、一度だけ対話モードでサインインしておきます。",
        },
        {
          title: "ハートビートで仕事を始めさせる",
          text: "勤務時間中、社員は 15 分、30 分、60 分ごとに同じ会話の中で起きます。[Claude Code を能動的に動かす方法](/proactive-claude-code)を参照してください。",
        },
        {
          title: "職種ごとに必要なものだけを渡す",
          text: "SEO 担当の社員には Search Console を、プログラマーには GitHub と Sentry を。[AI 社員とは](/ai-employees)をお読みください。",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Claude Code に MCP サーバーを追加する" },
  mid: {
    title: "ツールはつながりました。あなたがいない間、誰が使いますか？",
    text: "Crewmark は、職種・目標・issue のボードを与え、ハートビートで Claude Code を起こします。契約中のプランのままご利用いただけます。",
    button: "今すぐ始める",
  },
  faq: {
    title: "Claude Code の MCP のよくある質問",
    items: [
      {
        q: "Claude Code に MCP サーバーを追加するには？",
        a: "リモートサーバーなら `claude mcp add --transport http <name> <url>`、ローカルサーバーなら `claude mcp add --transport stdio <name> -- <command>` を実行します。その後 Claude Code で `/mcp` を実行し、必要ならサインインして接続を確認します。",
      },
      {
        q: "Claude Code の MCP 設定ファイルはどこにありますか？",
        a: "local と user スコープのサーバーは `~/.claude.json` に保存されます（local はプロジェクトのパスの下）。project スコープのサーバーはプロジェクトルートの `.mcp.json` にあり、コミットできます。",
      },
      {
        q: "local、project、user スコープの違いは？",
        a: "local は 1 つのプロジェクトで自分だけ（デフォルト）、project は `.mcp.json` を通じてチームで共有、user はすべてのプロジェクトで自分だけです。",
      },
      {
        q: "API キーを .mcp.json に書かずに済ませるには？",
        a: "`command`、`args`、`env`、`url`、`headers` の中で `${VAR}` や `${VAR:-default}` で環境変数を参照し、各マシンで変数を設定します。",
      },
      {
        q: "Claude Desktop の MCP サーバーを Claude Code で使うには？",
        a: "`claude mcp add-from-claude-desktop` を実行し、インポートするサーバーを選びます。macOS と WSL で使えます。`--scope user` を付ければすべてのプロジェクトで使えるようになります。",
      },
      {
        q: "MCP サーバーはトークンを大量に使いますか？",
        a: "以前ほどではありません。ツール定義は Claude がツールを使うときにだけ読み込まれます。それでも各サーバーの名前と説明は加わるので、使わないものは無効化し、CLI があればそちらを優先しましょう。",
      },
      {
        q: "Claude Code を MCP サーバーとして使えますか？",
        a: "はい。`claude mcp serve` で stdio の MCP サーバーとして起動し、Claude Desktop などのクライアントから接続できます。",
      },
    ],
  },
  cta: {
    title: "ツールをつないだら、使いこなす社員も。",
    text: "Crewmark は、Claude Code、Codex、DeepSeek Harness のセッションを、職種・目標・勤務時間・ハートビートを持つ AI 社員に変えます。",
    button: "今すぐ始める",
  },
  checked: "2026年11月6日に Claude Code のドキュメント（MCP、コスト）と照合しました。",
  disclaimer:
    "Crewmark は独立した製品であり、Anthropic とは提携しておらず、その承認も受けていません。Claude と Claude Code は Anthropic の商標です。",
};
