import type { GuideCopy } from "@/components/landing/guide-article";

// ja translation of /for/marketing; the English master is src/content/use-cases/for-marketing.ts.

const install = `# Crewmark のオープンソースのマーケティングスキルを、今使っているエージェントに
npx skills add ummydev/marketing-team-skills

# または Claude Code のプラグインとして
/plugin marketplace add ummydev/marketing-team-skills
/plugin install marketing-team-skills`;

const prompts = `毎晩、Search Console とアナリティクスの直近 7 日分を読んで、
何がうまくいっているかを教えて、それを伸ばすことを 1 つやって、
「Daily SEO report」の issue にレポートを投稿して。

毎週月曜に、competitors.md にある料金ページと変更履歴のページを確認して、
先週と差分を取り、何が変わったか、私たちのどの比較ページを
更新すべきかを教えて。

今週のブログ記事を、私たちの口調で LinkedIn と X の下書き 5 本にして。
レビュー用にボードに置いて。公開はしないで。

毎週金曜に、PostHog から登録数とアクティベーションを取得して、
先週と比べ、来週試すことを 3 つ書いて。`;

export const copy: GuideCopy = {
  meta: {
    title: "マーケティングのための Claude Code：チームに AI 社員を",
    description:
      "マーケティングチームが Claude Code や Codex を AI 社員として使う方法。SEO、コンテンツ、SNS、競合の追跡、レポートをスケジュールで回します。職種、活用例、コピーして使えるプロンプトとスキル、そしてあなたなしでは何も外に出ないセットアップ方法を紹介します。",
  },
  breadcrumb: "マーケティングのための Claude Code",
  parent: { name: "活用例", href: "/use-cases" },
  hero: {
    kicker: "マーケティングチーム向け",
    title: "マーケティングのための Claude Code：繰り返しの仕事をこなす AI 社員",
    lead: "Claude Code と Codex はエンジニアだけのものではありません。職種、適切なスキル、スケジュールを与えれば、同じエージェントがサイトのページを書いて直し、インデックスに登録させ、リリースしたものから投稿を下書きし、競合を見張り、毎日数字を報告します。Crewmark 自身のマーケティングもこうして回っています。このページでは、任せるべき仕事、それを担う職種、コピーして使えるプロンプトとスキル、そして公開されるものが必ず人を通るセットアップ方法を紹介します。",
    cta: "今すぐ始める",
    secondary: "仕事を見る",
    secondaryHref: "#jobs",
  },
  sections: [
    {
      kind: "table",
      id: "jobs",
      title: "マーケティングチームが AI 社員に任せること",
      text: [
        "最初の仕事に向いているのは、毎日や毎週繰り返し、終わりがはっきりしていて、最終判断があなたに残るものです。",
      ],
      headers: ["仕事", "頻度", "担当", "ガイド"],
      rows: [
        ["SEO レポート：流入、うまくいっていること、目標との差", "毎日", "SEO スペシャリスト", "[毎日の SEO 日報](/use-cases/daily-seo-report)"],
        ["競合の料金、リリース、ドキュメントの変更", "毎週", "マーケティングエージェント", "[毎週の競合ダイジェスト](/use-cases/weekly-competitor-digest)"],
        ["伸び始めたキーワードのための新しいページ", "毎日", "SEO スペシャリスト", "[AI SEO スペシャリスト](/ai-employees/seo-specialist)"],
        ["比較ページと代替ページを最新に保つ", "毎週", "SEO スペシャリスト", "[競合ページのスキル](/skills)"],
        ["リリースしたものから SNS の投稿を下書き", "毎日", "SNS マネージャー", "[AI SNS マネージャー](/ai-employees/social-media-manager)"],
        ["ファネルの数字と試すべき実験", "毎週", "マーケティングエージェント", "[AI マーケティングエージェント](/ai-employees/marketing-agent)"],
        ["すでに検索流入があるページの翻訳", "必要に応じて", "SEO スペシャリスト", "[多言語 SEO のスキル](/skills)"],
      ],
    },
    {
      kind: "steps",
      id: "prompts",
      title: "コピーして使えるプロンプト",
      text: [
        "どれも AI 社員の定期 issue としても、Claude Code や Codex での 1 回限りのプロンプトとしても使えます。",
      ],
      steps: [
        {
          title: "4 つの仕事を、それぞれ一文で",
          text: "名前と数字は自分のものに変えてください。最初の 2 つには役割ブリーフ付きの詳しいガイドがあります。[毎日の SEO 日報](/use-cases/daily-seo-report)と[毎週の競合ダイジェスト](/use-cases/weekly-competitor-digest)です。",
          code: prompts,
        },
      ],
    },
    {
      kind: "steps",
      id: "skills",
      title: "インストールしたい Claude Code のマーケティングスキル",
      text: [
        "スキルは仕事ごとの手順をエージェントに与えるので、セッションのたびに説明する必要がなくなります。",
      ],
      steps: [
        {
          title: "Marketing Team Skills（Crewmark、オープンソース）",
          text: "私たち自身の SEO 社員が毎日使っているスキルです。トレンドキーワード、キーワード調査、キーワードごとに 1 ページ、競合ページ、多言語 SEO、ページのインデックス登録、AI 検索、日報に加え、ショート動画のスキルもあります。[Marketing Team Skills](/skills) をご覧ください。",
          code: install,
        },
        {
          title: "そのほかの SEO・マーケティングスキル",
          text: "Corey Haines の marketingskills（seo-audit、ai-seo、programmatic-seo など）、Claude SEO などは、[SEO におすすめの Claude スキル](/skills/seo)で比較しています。",
        },
      ],
    },
    {
      kind: "steps",
      id: "how-to",
      title: "AI 社員のマーケティングチームを作る方法",
      steps: [
        {
          title: "職種は 1 つずつ雇う",
          text: "毎週いちばん時間を取られている仕事から始めましょう。各職種のページに、目標、毎日のルーティン、ブリーフがあります。[SEO スペシャリスト](/ai-employees/seo-specialist)、[マーケティングエージェント](/ai-employees/marketing-agent)、[SNS マネージャー](/ai-employees/social-media-manager)。",
        },
        {
          title: "読み取り権限とリポジトリを渡す",
          text: "Search Console とアナリティクスへの読み取り専用のアクセス、サイトのリポジトリ、ページを試すためのローカルプレビューを用意します。CLI と MCP サーバーの両方がある場合は CLI を選びましょう。トークンの消費が少なく済みます。",
        },
        {
          title: "仕事をボードに載せる",
          text: "繰り返しの仕事は定期 issue に、1 回限りの仕事は割り当てる issue にします。各社員は勤務時間中、ハートビートで起きて次の issue に取りかかります。",
        },
        {
          title: "外に出るものには必ず人を通す",
          text: "公開、投稿、支出、取り返しのつかないことはすべて人を通します。それが必要になると、社員は issue を「要対応」にして質問してきます。",
        },
      ],
    },
    {
      kind: "text",
      id: "results",
      title: "期待できること",
      points: [
        "SEO はどんなサイトでも数週間かかります。最初の目標は公開ページ数と表示回数に置き、その次にクリック数を狙いましょう。",
        "私たち自身の SEO 社員は毎日ページを公開しています。最初の数週間で、表示回数は週に数回から数百回に増えました。ほとんどはロングテールのページからで、「ai employee」のような広いキーワードは 80 位より下のままでした。",
        "下書きは速いですが、センスは依然として大事です。SNS の投稿やブランドの口調で書かれたものは、外に出る前にレビューしましょう。",
        "利用量はあなた自身の Claude や ChatGPT のプランから消費されるので、重い仕事は勤務時間内に入れましょう。",
      ],
    },
  ],
  howTo: { section: "how-to", name: "Claude Code や Codex で AI 社員のマーケティングチームを作る" },
  mid: {
    title: "プロンプトなしで、これらの仕事を毎日こなしてほしいですか？",
    text: "Crewmark は、あなたの Claude Code や Codex を、ハートビートで起きてボードの仕事を進めるマーケティング社員に変えます。",
    button: "今すぐ始める",
  },
  faq: {
    title: "よくある質問",
    items: [
      {
        q: "Claude Code でマーケティングはできますか？",
        a: "はい。ファイル、Web、ツールを通じてできる仕事ならできます。サイトのページの作成と修正、キーワード調査、競合の追跡、アナリティクスからのレポート、投稿やメールの下書きなどです。公開と支出は人に残しておくべきです。",
      },
      {
        q: "おすすめの Claude Code マーケティングスキルは？",
        a: "SEO とグロースなら、Crewmark のオープンソースの Marketing Team Skills と Corey Haines の marketingskills が、最も充実したセットの 2 つです。ほかのものも含めて [SEO におすすめの Claude スキル](/skills/seo)で比較しています。",
      },
      {
        q: "Claude Code のマーケティングプラグインはありますか？",
        a: "Marketing Team Skills は `/plugin marketplace add ummydev/marketing-team-skills` で Claude Code のプラグインとして、または `npx skills add` で Claude Code、Codex などのエージェントにインストールできます。",
      },
      {
        q: "マーケティングに Codex も使えますか？",
        a: "はい。役割ブリーフを CLAUDE.md ではなく AGENTS.md に書くだけで、スキルもセットアップも同じです。",
      },
      {
        q: "AI マーケティング社員とマーケティングオートメーションツールの違いは？",
        a: "オートメーションツールは、あなたが組んだ手順を実行します。AI 社員は目標に照らして次に何をするかを自分で決め、あなたのサイトとツールで仕事をし、スケジュールに沿って報告します。",
      },
      {
        q: "私なしで SNS に投稿しますか？",
        a: "あなたが許可した場合だけです。おすすめはレビュー用の下書きです。社員は下書きをボードに置き、あなたの OK を待ちます。",
      },
    ],
  },
  cta: {
    title: "マーケティングチームに、1 日も休まない AI 社員を。",
    text: "Crewmark は、Claude Code と Codex のセッションを、職種・目標・勤務時間・ハートビートを持つ AI 社員に変えます。",
    button: "今すぐ始める",
  },
  checked: "2026年11月10日に、Crewmark 自身のマーケティング社員の働き方をもとに書きました。",
  disclaimer:
    "Crewmark は独立した製品であり、Anthropic や OpenAI とは提携しておらず、その承認も受けていません。Claude、Claude Code、Codex は各所有者の商標です。",
};
