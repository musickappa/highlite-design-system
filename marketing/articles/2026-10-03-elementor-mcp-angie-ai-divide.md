# プロ向け「MCP」とコンシューマー炎上「Angie」― Elementorが見せた同一製品内のAI分裂

*Highliteトレンド記事 #077 | 2026-10-03 | テーマ: AIデザイン・AIサイト制作ツール*
*ソース: [Elementor公式「Introducing the Elementor MCP」](https://elementor.com/blog/elementor-mcp-launch/) / [Elementor公式「Webgate agency using the Elementor MCP on a production site」](https://elementor.com/blog/mcp-webgate-case-study/) / [ultimatewb.com「Elementor's "Angie" AI Is More Than Bloat」](https://www.ultimatewb.com/blog/13956/elementors-angie-ai-is-more-than-bloat-credits-subscriptions-and-a-growing-platform-problem/) / [theplusaddons.com「Disable Elementor AI: Remove Nag Banners & Angie」](https://theplusaddons.com/blog/remove-elementor-ai-nag-banners/) / [Elementor公式「MCP」](https://elementor.com/mcp/) / [Colorlib「Elementor Statistics 2026」](https://colorlib.com/wp/elementor-statistics/) + Web横断調査(直近30日中心)*

---

## 結論サマリー(3行)

1. 世界のWordPressサイトの3割超・2,100万サイトに導入されているElementorが、2026年9月23日に「Elementor MCP」を正式公開。Claude Code・Codex・Cursorなどのエージェントが、HTMLではなく"本物の"Elementor構造を直接編集できるようになった。
2. ほぼ同時期にエディタへ組み込まれたコンシューマー向けAI「Angie」はReddit等で「切る方法を教えろ」という反発を招き、クレジット課金の不透明さが火種になっている。
3. 同じ会社・同じ製品の中で「プロ向けの正確な自動化」と「押し付けがましいコンシューマーAI」が明暗を分けた構図は、Highliteが"AI活用"をどう見せるかを考える上で重要な教訓になる。

---

## 1. Elementor MCPとは何か ― AIエージェントが"本物の"構造を操作する

2026年9月23日、Elementorは正式にMCP(Model Context Protocol)連携を公開した。これはClaude Code、Claude Desktop、Codex、Cursorなどのコーディングエージェントを、WordPressサイトのElementor構造そのものに接続する仕組みだ。従来のAI生成ツールが出力するのは独立したHTMLだったが、MCPはサイトの既存テーマ・プラグイン・カスタムフィールド・Elementorのデザインシステム(クラスや変数、レスポンシブ設定)を理解した上で、編集可能な正式なElementor要素としてページを構築する。

重要なのは「MCPが作ったものは自動公開されない」という安全設計だ。生成結果は必ずElementorエディタ上でレビュー・修正でき、公開は人間の判断に委ねられる。AIエージェントが本番サイトに直接触れることへの不安に、最初から応える構造になっている。

## 2. Webgate代理店の実証 ― 既存の本番サイトを壊さずにAIを導入

Elementor公式が公開したケーススタディでは、制作会社Webgateが自社の本番サイト(数年分のElementor V3コンポーネントとグローバルスタイルが積み重なった複雑な環境)に、MCPとClaude Code・Codexを使ったAI開発ワークフローを試験導入した。目的は「サイトを作り直さずに、既存のV3設計を壊さずにAIファーストの開発フローへ移行できるか」という、実務の制作会社が直面する現実的な課題だった。結果としてWebgateは、ランディングページ制作や定型的な更新作業が加速し、複雑で歴史のあるサイトでもエージェント開発を段階的に導入できるモデルになり得ると結論づけている。これはプロ向けツールとしてのMCPが「おもちゃ」ではなく実務で機能することを示す具体例だ。

## 3. 同時に起きた「Angie」炎上 ― Reddit「切る方法を教えろ」

一方、コンシューマー向けに展開されたAIアシスタント「Angie」は評判が対照的だ。Angieはチャット形式でページ・ウィジェット・コードスニペットを生成できる無料プラグインだが、エディタ上部に常駐するボタンとして強制的に組み込まれたことへの反発が大きい。Reddit r/elementorには「Angieって誰だよ。Elementor、これはやりすぎだ。切ってくれ」という投稿が立ち、設定でAI機能を「無効化」してもAngieボタンやウィジェットの宣伝表示は消えないという指摘も相次いだ。

さらに火種になっているのがクレジット課金の仕組みだ。ultimatewb.comの分析によれば、AIが自身の操作ミスで技術的な問題を起こした際、まずセキュリティプラグインやサーバー設定のせいにして原因解決を後回しにしながらクレジットを消費し、結果的に有料アップグレードへ誘導するような挙動が報告されている。未使用クレジットは翌月に持ち越されず、非技術者ほど消費ペースを把握しづらいという使いにくさも指摘されている。

## 4. なぜ同じ会社でここまで差が出たのか

MCPは「プロが自分の意思で接続し、生成物を必ずレビューしてから公開する」設計。Angieは「エディタに最初から存在し、オプトアウトしても完全には消えない」設計。前者はユーザーの主導権を前提に、後者は利用率(≒課金率)の最大化を前提にしている。この設計思想の違いが、同じ会社の同じ製品群の中で「実務で評価されるAI」と「炎上するAI」を同時に生み出した。AIツールの成否は、モデルの性能そのものよりも「誰がコントロールを握っているか」という導入設計で決まるという好例だ。

## Highliteへの示唆

1. **「主導権はクライアントにある」を明示する** - MCPが評価された核心は「AIの生成物を人間が必ずレビューしてから公開する」構造にある。HighliteがAI活用を提案する際も、"AIが自動で全部やる"ではなく"AIが下書きし、最終判断は常にクライアント・Highliteにある"ことを明確に打ち出すべきだ。
2. **"強制感"のあるAI機能は信頼を壊す** - Angie炎上の本質は機能そのものではなく、オプトアウトできない・消費が分かりにくいという"押し付け感"だった。提案資料や実装でAI機能を使う際は、オン/オフの選択権とコストの見通しをセットで示すことが差別化になる。
3. **"実務で動いた"事例が何より強い説得材料** - Webgateのケーススタディが説得力を持つのは、複雑な既存サイトを壊さずに段階導入できたという具体性にある。Highlite自身のAI活用案件でも、既存サイトへの非破壊的な導入実績を事例化しておくことが、営業資料としての信頼性を高める。

---
