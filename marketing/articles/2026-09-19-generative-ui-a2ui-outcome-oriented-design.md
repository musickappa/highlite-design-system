# 「ボタンの位置すら、AIがその場で決める」― Google「A2UI v0.9」が突きつける"生成UI"の現実、HNは「セキュリティ地獄」と警鐘

*Highliteトレンド記事 #063 | 2026-09-19 | テーマ: Webデザイン最新手法・UI/UXトレンド*
*ソース: [InfoQ「Google Releases A2UI v0.9: Portable, Framework-Agnostic Generative UI」](https://www.infoq.com/news/2026/07/google-a2ui-genui/) / [Google Developers Blog「A2UI v0.9: The New Standard for Portable, Framework-Agnostic Generative UI」](https://developers.googleblog.com/a2ui-v0-9-generative-ui/) / [CopilotKit Blog「A2UI v0.9: What's New in Google's Generative UI Spec」](https://www.copilotkit.ai/blog/a2ui-whats-new-in-google-generative-ui-spec) / [Nielsen Norman Group「Generative UI and Outcome-Oriented Design」](https://www.nngroup.com/articles/generative-ui/) / [Hacker News「What Is Generative UI?」](https://news.ycombinator.com/item?id=46138473) / [Hacker News「A2UI: A Protocol for Agent-Driven Interfaces」](https://news.ycombinator.com/item?id=46286407) / [Vercel Blog「Announcing v0: Generative UI」](https://vercel.com/blog/announcing-v0-generative-ui) + Web横断調査(直近30日中心)*

---

## 結論サマリー(3行)

1. Googleが2026年7月、AIエージェントが画面を"その場で"組み立てるための標準規格「A2UI v0.9」を公開。React・Flutter・Angular・Lit対応のレンダラーとPython製Agent SDKを揃え、MCPやWebSocketなど任意のトランスポート上でエージェントとフロントエンドをつなぐ設計にした。
2. これは「AIがデザインを一括生成するv0・Framer型」とは別物で、ユーザーの操作のたびに"既存デザインシステムの部品"を使って画面を再構成する仕組み。Nielsen Norman Groupは、これによりデザイナーの仕事が「画面を作る」から「AIが従う目標と制約を作る」へ移ると指摘する。
3. Hacker Newsの反応は歓迎と警戒が半々。「セキュリティバグとUIなりすまし攻撃を自ら招いている」「ボタンの位置はチャットボットが勝手に動かすものではない」という声が根強く、"生成UI"は技術的には離陸しても、信頼性の壁を越えられるかはまだ未知数だ。

---

## 1. 「毎回、事業者ごとに違う画面」というGoogleの賭け

2026年7月、Googleは開発者向けブログとInfoQで「A2UI v0.9」を発表した。これはAIエージェントが対話の中でユーザーインターフェースの意図をリアルタイムに宣言し、既存アプリの上にカード・表・フォーム・ダッシュボードなどを動的に組み立てるためのオープン規格だ。ポイントは、AIが勝手にゼロからデザインを発明するのではなく、「そのアプリがもともと持っているデザインシステムの部品」を使って画面を組むよう設計されている点にある。v0.9では公式レンダラーとしてReact・Flutter・Lit・Angularが揃い、バックエンドのエージェント側にはPython製のAgent SDKが新設された。通信方式もMCP・WebSocket・REST・AG-UI・A2Aなど「好きなものを使ってよい」という設計思想で、特定ベンダーへのロックインを避けつつ業界標準を狙う布陣だ。

## 2. デザイナーの仕事は「画面」から「目標と制約」へ

UXリサーチの老舗Nielsen Norman Group(NN/g)は、この流れを「Outcome-Oriented Design(結果志向デザイン)」という言葉で整理している。従来のUIデザインは「できるだけ多くの人が満足する、たった一つの画面」を作る仕事だった。しかし生成UIの世界では、ユーザーが「Q2の取引先請求を照合したい」と意図を伝えれば、AIがその場で異常値をハイライトした照合用テーブルを組み立てる、といった具合に画面そのものが利用者ごとに変わる。NN/gは、これによりデザイナーの役割は「個々の画面や小さなインタラクションを設計する」ことから「AIがどんな目標を追い、どんな制約の中で動くべきかを定義する」ことへ重心が移ると予測している。マイクロインタラクションの多くは、AIが文脈に応じて都度組み直すため、人間が事前にデザインする対象そのものが減っていく。

## 3. Hacker Newsは「歓迎」と「信頼できない」で真っ二つ

技術コミュニティの反応は一枚岩ではない。Hacker Newsの「What Is Generative UI?」スレッドでは、"開発者が何十年も達成できなかった「プラットフォームに依存しないUI」を、エージェントがいきなり実現してしまうかもしれない"という前向きな評価が上がる一方、A2UIを扱った別スレッドでは「LLMが出力したUIをなぜ信用できるのか。セキュリティバグ、UIなりすまし攻撃、ひどいユーザビリティを自分から招いているだけだ」という強い懸念が支持を集めた。「UIは明確で予測可能であるべきで、チャットボットがボタンを動かし回すべきではない」という指摘も繰り返し出ており、生成UIが解決しようとしている"退屈な画一デザイン問題"の裏側で、"操作するたびに画面が変わる不安"という新しい課題が生まれていることが分かる。

## 4. 「作る時に生成」と「使う時に生成」は別のトレンドだ

ここで整理しておきたいのが、v0やFramer AIのような既存のAIサイト制作ツールとの違いだ。v0は開発者がプロンプトを打ち込み、React+Tailwindのコードを一度だけ生成してNext.jsプロジェクトに組み込む「ビルド時生成」。FramerAIも同様に、公開前の一回のデザイン生成が主戦場になる。これに対しA2UIが狙うのは「実行時生成」、つまり公開後のアプリが、利用者の操作のたびにUIを組み替え続ける世界だ。中小企業のWebサイトで言えば、現在主流の生成AI型チャットボット(FAQやマニュアルを読み込ませて回答するRAG型)は「文字で答える」段階に留まっているが、次の段階として「回答と一緒に、その場に最適な入力フォームや比較表を組み立てて見せる」AIエージェント型への移行が、業界の議論ではすでに視野に入り始めている。

## Highliteへの示唆

1. **「作る時AI」と「使う時AI」を切り分けて提案する** ― 現在Highliteが提供しているAIデザイン支援は「ビルド時生成」の領域だが、A2UIのような「実行時生成」は次のフェーズの技術トレンドとして押さえておきたい。両者を混同せず、顧客には「今できること」と「これから来ること」を分けて説明できる状態を作る。
2. **既存デザインシステムの価値を再発見する** ― A2UIが「エージェントは既存のデザインシステムの部品を使う」設計を選んだことは示唆的だ。Highliteが提供するデザインシステム構築支援は、将来AIが画面を組み立てる際の"土台"としてそのまま資産価値を持つ。ここを顧客への訴求ポイントに加えられる。
3. **"AIが画面を動かす不安"への備えを商品に織り込む** ― HNの懸念は、AI導入を検討する中小企業経営者の不安とも重なる。「AIに任せても、操作性や表示は一定のルールの中でしか動かない」という安心設計・ガードレールの説明を、AIチャットボット等の提案資料にあらかじめ用意しておく価値がある。
