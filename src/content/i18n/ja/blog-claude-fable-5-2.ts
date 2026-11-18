import type { GuideCopy } from "@/components/landing/guide-article";

// ja translation of /blog/claude-fable-5-2; the English master is src/content/blog/claude-fable-5-2.ts.

const docs = "https://platform.claude.com/docs/en/models/fable-5-2/whats-new-fable-5-2";

const claudeCode = `# Claude Code を更新して、このセッションのモデルを選ぶ
claude update
/model                       # Claude Fable 5.2 を選択

# 最初から Fable 5.2 でセッションを開始する
claude --model claude-fable-5-2

# Fable 5.2 の高速モード（Claude Code v2.1.321 以降）
/fast`;

const api = `# Claude API：モデル ID を変更する
model = "claude-fable-5-1"  # 変更前
model = "claude-fable-5-2"  # 変更後

# Adaptive thinking は常にオン。思考の深さは effort で調整
# low | medium | high（デフォルト）| xhigh | max`;

export const copy: GuideCopy = {
  meta: {
    title: "Claude Fable 5.2：ベンチマーク、料金、Opus 5.5 との比較",
    description:
      "2026年11月9日にリリースされた Claude Fable 5.2 の新機能、Anthropic 公表のベンチマーク、API 料金（$8/$40）と高速モード、100万トークンのコンテキスト、Opus 5.5・Fable 5.1・Mythos 5.2 との比較、Claude Code での使い方。",
  },
  breadcrumb: "Claude Fable 5.2",
  parent: { name: "ブログ", href: "/blog" },
  article: { published: "2026-11-10" },
  hero: {
    kicker: "ブログ · Claude モデル",
    title: "Claude Fable 5.2：新機能、ベンチマーク、料金、Opus 5.5 との使い分け",
    lead: "Anthropic は 2026年11月9日に Claude Fable 5.2 をリリースしました。同時に発表された Claude Mythos 5.2 は、同じモデルに異なる安全対策を施したものです。Anthropic は Fable 5.2 を、技術的な作業向けに一般提供している中で最も高性能なモデルと位置づけています。Fable 5.1 より速く安くなり、Anthropic のコーディングやエージェントのベンチマークで高いスコアを出し、高速モードも加わりました。この記事では、変更点、数字、料金、Opus 5.5 ではなく Fable 5.2 を選ぶべき場面、Claude Code での使い方をまとめます。",
    cta: "今すぐ始める",
    secondary: "Fable 5.2 と Opus 5.5 の比較",
    secondaryHref: "#vs-opus",
  },
  sections: [
    {
      kind: "table",
      id: "at-a-glance",
      title: "Claude Fable 5.2 の概要",
      headers: ["", "Claude Fable 5.2"],
      rows: [
        ["リリース", "2026年11月9日（6月の Fable 5、9月の Fable 5.1 に続くモデル）"],
        ["API モデル ID", "`claude-fable-5-2`"],
        ["料金", "入力100万トークンあたり $8、出力100万トークンあたり $40（Fable 5.1 は $10 と $50）"],
        ["高速モード", "出力が最大 2.5 倍速く、入力 $16、出力 $80（100万トークンあたり）"],
        ["コンテキストウィンドウ", "100万トークン、最大出力 128K"],
        ["思考", "Adaptive thinking が常にオン。effort は `low`、`medium`、`high`（デフォルト）、`xhigh`、`max`"],
        ["知識のカットオフ", "2026年6月"],
        ["速度", "Anthropic によると、出力は Fable 5.1 より最大 30% 速い"],
        ["利用できる人", "Claude の Pro、Max、Ultra、Team、Enterprise プラン、すべての Claude API 利用者、Amazon Bedrock、Google Cloud、Microsoft Foundry"],
      ],
    },
    {
      kind: "text",
      title: "Fable 5.2 の新機能",
      points: [
        "長く難しい技術作業に強い：Anthropic によると、あいまいなエンジニアリング作業を何日も続け、数百から千を超えるサブエージェントを統率できます。",
        "安くなった：入力も出力も Fable 5.1 より 20% 安く、バッチ処理はさらに半額（$4 と $20）です。",
        "速くなった：出力は Fable 5.1 より最大 30% 速く、高速モードではさらに最大 2.5 倍速くなります（料金は 2 倍）。",
        "ロボティクス：学習していないタスクを含め、実機のロボット操作が大きく向上したと Anthropic は報告しています。",
        "安全対策：サイバーセキュリティと生物分野の安全対策が組み込まれています。フラグが立ったサイバー関連の質問は Claude Opus 4.8 に、生物関連は Claude Opus 5 に回されます。",
        "データ保持：Fable シリーズは安全監視のため既定で 30 日間のデータ保持が必要です。ゼロデータ保持には Anthropic の許可が必要です。",
      ],
    },
    {
      kind: "table",
      id: "benchmarks",
      title: "Claude Fable 5.2 のベンチマーク",
      text: ["Anthropic の Fable ページより。注記がない限り安全対策をオンにした結果です。Anthropic 自身の数字で、第三者による検証ではありません。"],
      headers: ["ベンチマーク", "Fable 5.2", "Fable 5.1", "Opus 5.5", "GPT-6 Astra", "Gemini 4 Carbon"],
      rows: [
        ["FrontierCode 2.0（エージェント型コーディング）", "49.1%（xhigh）", "32.4%（xhigh）", "45.5%", "42.8%", "41.1%"],
        ["FrontierSWE v2（エージェント型コーディング）", "69.9%", "56.3%", "62.3%", "65.5%", "61.2%"],
        ["Terminal-Bench-Science 0.1", "74.6%", "52.6%", "58.7%", "68.1%", "64.8%"],
        ["OSWorld 2.1（コンピューター操作）", "89.3%", "83.5%", "87.2%", "79.5%", "81.5%"],
        ["AutomationBench（業務ワークフロー）", "51.4%", "31.4%", "42.5%", "41.4%", "53.9%"],
        ["Remote Labor Index", "41.3%", "17.9%", "21.3%", "20.8%", "-"],
        ["Humanity's Last Exam（ツールあり）", "74.2%", "65.6%", "67.7%", "57.2%", "-"],
        ["RoboDojo Sim（ロボティクス、Anthropic 社内）", "64.9%", "27.6%", "39.4%", "29.8%", "-"],
      ],
    },
    {
      kind: "table",
      id: "pricing",
      title: "Claude Fable 5.2 の料金",
      text: [
        "100万トークンあたりの API 料金（2026年11月10日時点の Anthropic のドキュメントより）。Claude のプランでは、Fable 5.2 はサブスクリプションの利用枠を使います。Pro と Team の標準シートでは、週の利用上限の最大 50% まで使えます。Claude Code の高速モードは利用クレジットから支払われます。",
      ],
      headers: ["モデル", "入力", "出力", "キャッシュ読み取り", "バッチ（入力 / 出力）"],
      rows: [
        ["Claude Fable 5.2", "$8", "$40", "$0.20", "$4 / $20"],
        ["Claude Fable 5.2 高速モード", "$16", "$80", "-", "-"],
        ["Claude Fable 5.1", "$10", "$50", "$0.25", "$5 / $25"],
        ["Claude Opus 5.5", "$4", "$20", "$0.20", "$2 / $10"],
        ["Claude Sonnet 5.5", "$2", "$10", "$0.10", "$1 / $5"],
      ],
    },
    {
      kind: "text",
      id: "vs-opus",
      title: "Fable 5.2 と Opus 5.5、どちらを使うべきか",
      text: ["Anthropic 自身は、ほとんどの作業は Opus 5.5 から始め、effort を上げても Opus 5.5 で足りない場合に Fable 5.2 に移ることを勧めています。"],
      points: [
        "料金：Fable 5.2 はトークン単価が 2 倍（$8 と $40、Opus 5.5 は $4 と $20）で、デフォルトの effort も `high`（Opus 5.5 は `medium`）なので、1 回あたりの思考量も多くなりがちです。",
        "性能：Anthropic の表では、Fable 5.2 はエージェント型コーディング（FrontierSWE v2 で 69.9% 対 62.3%）、科学、長時間の作業で Opus 5.5 を上回ります。コンピューター操作では差が小さめです（OSWorld 2.1 で 89.3% 対 87.2%）。",
        "タスクあたりのコスト：Anthropic によると、`high` の Fable 5.2 は FrontierCode 2.0 で `max` の Opus 5.5 とほぼ同等（45.3% 対 45.5%）で、タスクあたりのコストは約半分です。難しいタスクでは必ずしも高くつくとは限りません。",
        "会話途中の切り替え：Fable 5.2 の思考ブロックを読めるのは Fable 5.2 と Mythos 5.2 だけです。会話を Fable 5.2 から Opus 5.5 に移すと、それ以降のターンでは推理の内容が失われます。",
        "目安：普段使いは Opus 5.5、長時間動くエージェント作業や手強いバグ、Opus でうまくいかない作業には Fable 5.2。",
      ],
    },
    {
      kind: "text",
      id: "vs-mythos",
      title: "Fable 5.2 と Mythos 5.2、Fable 5.1 との違い",
      points: [
        "Mythos 5.2 は同じモデルで、サイバーセキュリティと生物分野の制限が少ないものです。Cyber Verification Program など Anthropic の認証プログラムを通った組織だけが使え、料金は同じです。",
        "Anthropic のサイバー・生物分野のベンチマークでは、安全対策オンの Fable 5.2 より Mythos 5.2 のスコアが高くなっています。それ以外は同じモデルです。",
        "Fable 5.1 と比べると、Fable 5.2 は安く、最大 30% 速く、Anthropic の各ベンチマークで上回ります。たとえば FrontierCode 2.0 は 49.1% 対 32.4%、Remote Labor Index は 41.3% 対 17.9% です。",
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "Claude Code で Claude Fable 5.2 を使う方法",
      steps: [
        {
          title: "更新してモデルを選ぶ",
          text: "Claude Code を更新し、`/model` で Claude Fable 5.2 を選ぶか、`--model claude-fable-5-2` でセッションを開始します。Claude のプランでは Pro、Max、Ultra、Team、Enterprise が必要です。",
          code: claudeCode,
        },
        {
          title: "effort はまず high のまま",
          text: "Anthropic によると、性能向上の大部分は `high` ですでに得られます。最も難しい長時間のコーディング作業で効果を確認できたら `xhigh` に上げ、`max` は時間とトークンを気にしないまれな場面に取っておきます。",
        },
        {
          title: "速さが必要なら高速モード",
          text: "Fable 5.2 で `/fast` を実行します（Claude Code v2.1.321 以降）。最大 2.5 倍速く、料金は 2 倍です。サブスクリプションでは利用クレジットから支払われ、プランの上限には含まれません。Bedrock、Vertex、Foundry では使えません。",
        },
        {
          title: "API を使う場合は互換性のない変更を確認",
          text: "Adaptive thinking は常にオン（`budget_tokens` と `disabled` は 400 エラー）、ツールの強制呼び出しは非対応、以前のターンを編集すると思考ブロックが無効になり、旧 `computer_20251124` ツールはコンピューター操作ツールセットに置き換わりました。Claude Code と Agent SDK はこれらを自動で処理します。",
          code: api,
        },
      ],
      source: { label: "出典：Anthropic のドキュメント「What's new in Claude Fable 5.2」", href: docs },
    },
    {
      kind: "steps",
      id: "crewmark",
      kicker: "Crewmark なら",
      title: "Fable 5.2 に長期の仕事を任せる",
      text: [
        "Fable 5.2 は何時間も続く作業のためのモデルです。Crewmark は Claude Code のセッションを、役割・目標・勤務時間・ハートビートを持つ AI 社員に変えます。社員はそのセッションのモデルで動くので、最も難しい仕事は Fable 5.2 に、それ以外は Opus 5.5 に任せられます。",
      ],
      steps: [
        {
          title: "役割を選ぶ",
          text: "たとえば手強い issue を片付ける [AI ソフトウェアエンジニア](/ai-employees/software-engineer)。",
        },
        {
          title: "そのセッションでモデルを設定",
          text: "社員の Claude Code の会話で `/model` を実行し、Fable 5.2 を選びます。",
        },
        {
          title: "あとは任せる",
          text: "ハートビートで起動し、ボードの仕事を進めます。[Claude Code を自律的に動かす方法](/proactive-claude-code)も参照してください。",
        },
      ],
    },
  ],
  howTo: { section: "how-to", name: "Claude Code で Claude Fable 5.2 を使う" },
  mid: {
    title: "Fable 5.2 に最も難しい issue を定期的に片付けてほしいですか？",
    text: "Crewmark の社員はあなた自身の Claude Code で動き、ハートビートで起動して、ボードから次の issue を取ります。",
    button: "今すぐ始める",
  },
  faq: {
    title: "よくある質問",
    items: [
      {
        q: "Claude Fable 5.2 はいつリリースされましたか？",
        a: "2026年11月9日に Claude Mythos 5.2 と同時にリリースされました。その前は Fable 5（2026年6月9日）と Fable 5.1（2026年9月1日）です。",
      },
      {
        q: "Claude Fable 5.2 の料金は？",
        a: "API では入力100万トークンあたり $8、出力100万トークンあたり $40 で、Fable 5.1 の $10 と $50 から値下げされました。高速モードは $16 と $80、バッチは $4 と $20 です。Claude のプランでは Pro から使え、Pro と Team の標準シートでは週の利用上限の最大 50% まで使えます。",
      },
      {
        q: "Fable 5.2 は Opus 5.5 より優れていますか？",
        a: "Anthropic のベンチマークでは、エージェント型コーディング、科学、長時間の作業で上回ります。ただしトークン単価は 2 倍で、Anthropic はほとんどの作業について Opus 5.5 から始めることを勧めています。",
      },
      {
        q: "Claude Fable 5.2 のコンテキストウィンドウは？",
        a: "100万トークンで、最大出力は 128K トークンです。",
      },
      {
        q: "Fable 5.2 と Mythos 5.2 の違いは？",
        a: "同じモデルです。Fable 5.2 にはサイバーセキュリティと生物分野の安全対策があり、誰でも使えます。Mythos 5.2 は Anthropic の認証プログラムを通った組織向けです。",
      },
      {
        q: "Claude Fable 5.2 は無料で使えますか？",
        a: "いいえ。Anthropic は Pro、Max、Ultra、Team、Enterprise プランと API で提供しており、無料プランは含まれていません。",
      },
      {
        q: "Claude Fable 5.2 のシステムカードはありますか？",
        a: "はい。Anthropic は「Claude Fable 5.2 and Claude Mythos 5.2 System Card」を公開しており、Fable のページからリンクされています。",
      },
    ],
  },
  cta: {
    title: "最新のモデルに、継続的な仕事を。",
    text: "Crewmark は Claude Code と Codex のセッションを、役割・目標・勤務時間・ハートビートを持つ AI 社員に変えます。",
    button: "今すぐ始める",
  },
  checked: "2026年11月10日に Anthropic の Fable ページ、発表記事、Claude Platform のドキュメント、Claude Code のドキュメントで確認。",
  disclaimer:
    "Crewmark は独立した製品であり、Anthropic と提携・承認関係にはありません。Claude、Claude Fable、Claude Mythos、Claude Opus、Claude Code は Anthropic の商標です。",
};
