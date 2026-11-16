# Figmaが"キャンバスそのもの"をAIエージェントに開放 ― 創業者本人が認める「MCPは未完成」、現場検証が示す過信禁物のリアル

*Highliteトレンド記事 #121 | 2026-11-17 | テーマ: AIデザイン・AIサイト制作ツール*
*ソース: [Figma公式ブログ「Agents, meet the Figma canvas」](https://www.figma.com/blog/the-figma-canvas-is-now-open-to-agents/) / [TechCrunch「Figma announces new features to define how agents work on its platform」](https://techcrunch.com/2026/10/14/figma-announces-new-features-to-define-how-agents-work-on-its-platform/) / [TechCrunch「Figma co-founder Dylan Field thinks MCP is not a perfect protocol」](https://techcrunch.com/2026/10/20/figma-co-founder-dylan-field-thinks-mcp-is-not-a-perfect-protocol/) / [Bitovi「Figma just opened the canvas to agents. Here's what actually happens」](https://bitovi.com/blog/figma-just-opened-the-canvas-to-agents.-heres-what-actually-happens) / [Figmaコミュニティフォーラム「Figma's approach breaks the core promise of MCP」](https://forum.figma.com/report-a-problem-6/figma-s-approach-breaks-the-core-promise-of-mcp-52507) / [Koi.ai「Command injection flaw in Framelink Figma MCP server puts nearly 1 million downloads at risk」](https://koi.ai/blog/command-injection-flaw-in-framelink-figma-mcp-server-puts-nearly-1-million-downloads-at-risk) + Web横断調査(直近30日中心)*

---

## 結論サマリー(3行)

1. Figmaは2026年10月、MCP(Model Context Protocol)経由でAIエージェントがFigmaファイルを直接編集できる新機能「use_figma」を公開し、Claude CodeやCodexなど外部ツールがキャンバス上でコンポーネントを作成・改修できるようになった。新規MCPパートナーも20社追加された。
2. その直後、共同創業者兼CEOのDylan Field氏自身が「MCPは完璧なプロトコルではない」「frontier labs(大手AI企業)に有利な設計になっている」と公言し、無制限な開放はデータ乱用やセキュリティリスクを高めると警鐘を鳴らした。
3. 実際にエージェントを現場検証したBitoviやデザインシステムチームからは「リンクされたデザインシステムを明示的に指示しないと無視する」など過信できない実態が報告され、コミュニティフォーラムでも「MCP本来の約束を破っている」との批判が続いている。

---

## 1. Figmaが"エージェントの遊び場"をキャンバスに開いた

Figmaは2026年10月14日、インドで開催したConfig India(ベンガルール)で、AIエージェントをデザインキャンバスに直接参加させる新機能を発表した。新しいMCPサーバーの`use_figma`ツールを使うことで、Claude CodeやCodexといった外部のAIコーディングエージェントが、Figmaファイル内のコンポーネントを自分で作成・編集できるようになった。あわせて、マークダウンで書いた指示書「スキル」でエージェントの振る舞いを制御する仕組みも導入され、OpenCode、Dia、Meta Muse、Sarvam AIなど新規20社とのMCP連携も発表された。コードレイヤー機能もオープンベータとして全プランに展開され、デザインツールが"人が操作する画面"から"AIも書き込める共同作業空間"へと踏み出した節目といえる。

## 2. 創業者自身が「MCPは不完全」と認めた

発表からわずか1週間後の10月20日、Dylan Field氏はメディア向けブリーフィングで、自社が推進してきたMCPについて「完璧なプロトコルではない」「改善の余地はたくさんある」と述べたとTechCrunchが報じた。同氏はMCPの設計が「frontier labs(最先端のAI開発企業)に有利になっている」とも指摘。さらに、企業データへの無制限なアクセスを許せばデータ乱用やセキュリティリスクが高まるとの懸念を語り、「ほとんどの利用者に悪用の意図はないが、Figmaは長期的に利用者を守るため、あらゆるシナリオを想定しなければならない」とした。自社の看板機能を推進する立場のCEOが、その基盤技術の未成熟さを公に認めた点は珍しく、業界内でも話題になった。

## 3. コミュニティは「約束違反」「閉鎖的」と反発

Figma公式コミュニティフォーラムのスレッド「Figma's approach breaks the core promise of MCP」では、Figmaが事前承認したクライアントのみを許可リスト方式で接続させている点に対し、「どのクライアントでもどのサーバーにも繋がる」のがMCP本来の約束のはずだと批判が投稿され、議論が続いている。Figma側は「ベータ期間中は意図的に対応クライアントを絞っている」と回答しているが、ユーザーからは「ローカルMCPサーバーがUI上で隠されている」「有料プラン限定機能にされるのでは」といった不満も出ている。さらに、Figma公式ではないサードパーティ製の「Framelink」Figma MCPサーバーでは、コマンドインジェクションの脆弱性(CVE-2025-53967)がダウンロード数約100万件規模で見つかったと報告されており(Koi.ai)、エージェント連携が広がるほど周辺エコシステムのセキュリティ管理が課題になることを示している。

## 4. 現場検証:「指示しないと設計システムを無視する」

Figmaの認定サービスパートナーであるBitoviは、公開直後にエージェントを構造化されたテストケースで検証した。デザインシステムを参照した上でのコンポーネント新規作成、リンクされたコンポーネントを使った画面構築、Figma Makeで作った出力を本番品質に整える作業などを試したところ、「リンクされたデザインシステムがあっても、明示的に使うよう指示しない限りエージェントは無視する」という挙動が確認された。Figma側はこれに対し「スキル」機能で既存のデザインシステムを拡張させる使い方を推奨している。別のデザインシステムチームによる数週間規模の実運用テストでも、「単発のプロンプトで本番品質のデザインシステムが生成されるわけではない」「デザインシステムを壊すこともあるため、まず複製して検証すべき」という結論が報告されており、"任せきり"には現時点でリスクが伴う。

## Highliteへの示唆

1. **「AIエージェント任せ」のリスクを説明できる専門家として立つ** - Figmaの創業者自身が認めた通り、AIエージェントへのツール開放は発展途上で、セキュリティやデザインシステム破壊のリスクが現実に報告されている。Highliteは「AI連携は使うが、人が最終チェックする」運用を具体的な工程として提示することで、導入に迷う中小企業の不安に応えられる。
2. **デザインシステムの"土台"整備を提案の入口にする** - Bitoviの検証が示す通り、AIエージェントの効果はリンクされたデザインシステムの有無と指示の質に左右される。中小企業の多くはそもそもデザインシステムが整っていないため、「AI活用の前にまず土台を整える」提案がそのまま受注につながる。
3. **最新ツールの"翻訳"コンテンツとしての価値** - Figma・Adobe・Canvaなど主要ツールが相次いでAIエージェント化を進める一方、現場の実態(過信できない点・セキュリティ懸念)まで把握している中小企業は少ない。こうした動向を噛み砕いて伝える記事・セミナーは、信頼構築とリード獲得の両方に効く。

---

*余談: Figmaコミュニティフォーラムでは、許可リスト方式への批判と並んで「ベータだから仕方ない」という擁護コメントも一定数見られる。ただ、創業者自身が『frontier labsに有利』と言い切った以上、中小のツール開発者やエージェンシーが同じ土俵で戦えるかという視点は、今後も注視する価値がある。*
