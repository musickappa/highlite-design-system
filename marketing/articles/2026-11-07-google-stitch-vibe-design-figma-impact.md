# GoogleのAI UIツール「Stitch」刷新でFigma株が急落 ― "バイブデザイン"は現場でどう評価されているか

*Highliteトレンド記事 #111 | 2026-11-07 | テーマ: AIデザイン・AIサイト制作ツール*
*ソース: [Fast Company「Figma takes a hit as Google doubles down on 'vibe design'」](https://www.fastcompany.com/91512139/google-doubles-down-on-vibe-design) / [The Register「Google offers 'vibe design' tool that you can shout at to create a UI」](https://www.theregister.com/2026/03/19/google_stitch_vibe_design_update/) / [TechRadar「Google unveils new 'vibe design' tool」](https://www.techradar.com/pro/google-unveils-new-vibe-design-tool-to-help-anyone-design-a-high-fidelity-ui-using-natural-language) / [Neowin「Google updates Stitch with vibe design and infinite AI canvas」](https://www.neowin.net/news/google-updates-stitch-with-vibe-design-and-infinite-ai-canvas/) / [devtools.shingoirie.com「Google Stitchは使えるか。モック作成で見えた限界」](https://devtools.shingoirie.com/blog/google-stitch-mock-limit-review/) / [Zenn「Google Stitch」(matsubokkuri)](https://zenn.dev/matsubokkuri/articles/google-stitch) / [issoh.co.jp「Google Stitchとは?使い方・料金・商用利用まで解説【2026年最新】」](https://www.issoh.co.jp/tech/details/8062/) + Web横断調査(直近30日中心)*

---

## 結論サマリー(3行)

1. Googleは2026年3月、AI UI生成ツール「Stitch」を「AI-native software design canvas」として大幅刷新。発表直後にFigma株(NYSE: FIG)が約4%下落したとFast Companyが報じ、UIデザイン市場の勢力図に揺れが出ている。
2. 一方、日本語圏の実務者レビューは一致して「アイデア出し・モック作成には強いが、本番品質のUI生成では既存の生成AIと決定的な差は出ない」と評価。"バイブデザイン"は置き換えではなく下書き工程の加速装置というのが現場感覚。
3. 注目すべきは「DESIGN.md」という発想 — ブランドの色・タイポグラフィ・余白をMarkdownでAIへの"絶対制約"として渡す仕組み。AIに自由に作らせるのではなく、ルールを守らせて量産する方向への転換点になり得る。

---

## 1. GoogleがStitchを刷新、Figma株が報道直後に急落

2026年3月18日、Google LabsはAI UIデザインツール「Stitch」の大型アップデートを発表した。プロダクトマネージャーのRustin Banks氏は公式ブログ「The Keyword」で「Stitchを"AI-native software design canvas(AIネイティブなソフトウェア設計キャンバス)"へと進化させている」と位置付けを明言している。

この発表はデザインツール市場に即座に波及した。Fast Companyによれば、発表後にFigma株(NYSE: FIG)が約4%下落。SNS上では「当日8%安、2025年8月のIPO時点から80%安」という投資関係者の指摘も飛んだが、これは個人の見立てであり、裏付けは確認できていない。それでも「GoogleのAIがFigmaの牙城であるUIデザイン領域に直接切り込んできた」という受け止めが市場に広がったことは間違いない。

## 2. 新機能の核心:Vibe Design、Agent Manager、そして「DESIGN.md」

今回の刷新の柱は3つ。

- **Vibe Design**: 自然言語やスケッチ画像、さらには声で指示するだけでUIを生成する機能。The Registerは「怒鳴ればUIができる("shout at it")」と評した。
- **Agent Manager**: 複数のデザイン案を並行して検討するための管理機能。プロジェクト全体を横断して推論する専用の「デザインエージェント」も新設された(Neowin)。
- **DESIGN.md**: 色・タイポグラフィ・余白などデザインシステムをプレーンなMarkdownファイルに記述し、Stitchにプロンプトを送るたびにGeminiへ文脈として渡す仕組み。レビュー記事では「モデルはその値を"提案"ではなく"固定制約"として扱う」と紹介されている。Gitで差分管理できる点も開発者には扱いやすい。

さらにSDKとMCPサーバーが公開され、Claude Code・Cursor・Gemini CLI・Antigravityといった他のコーディングツールとStitchを連携できるようになった。料金面は現時点で有料プランはなく、ベータとして無料公開中。1日あたりのクレジット制限(目安として約400デザインクレジット+15リデザインクレジット)があるとissoh.co.jpは解説している。

## 3. 現場の声:「アイデア出しは強いが、本番品質はまだ」

日本語圏の実務者レビューは評価が揺れていない。devtools.shingoirie.comの検証記事は「Webページ単体の生成では、ClaudeやGPTでプロンプトを叩いて出したものと決定的な差は出にくい」とし、ピクセル単位の調整やブランドらしい仕上がりには向かず、初期のアイデア出しに使うのが現実的だと結論づけている。

Zennに投稿されたmatsubokkuri氏の比較記事はさらに辛口で、UI単体の生成品質については「圧倒的にv0が良い。機能のアイデアも広げてくれる」と評価。一方でStitchは「サービス全体の設計まで考えてくれる」点に独自の価値があるとしている。つまり「見た目の精度」ではなく「構造を考える相棒」としての評価が定着しつつある。

## 4. Figma MakeとStitch、立ち位置の違い

比較記事群を横断すると、両者の違いは「どこで作業するか」に集約される。Figma Makeはデザイナーが使い慣れたFigmaの編集環境内で動き、生成後も図形を手でつかんで動かせる。対してStitchはスタンドアロンの生成AI優先設計で、デザイントークン単位での編集に強みがあるとする評価もある。一方でFigmaは数千規模のプラグインエコシステムとリアルタイム共同編集という業界標準の強みを持ち、Stitchは現時点では単一ユーザー中心の「実験的(Experimental)」な提供段階にあるとされる。生成されたコードも「完成品ではなく出発点」であり、公開前の実装・動作確認は依然として人の手が必要だ。

## 5. Highliteへの示唆

1. **"下書きツール"としての正しい期待値設定**: StitchもFigma Makeも、現場評価は「本番品質の自動生成」ではなく「構想・ワイヤーフレームの高速化」。顧客への提案時も「AIが完成品を作る」ではなく「AIで試作数を増やし、プロが仕上げる」という説明が実態に合う。
2. **DESIGN.mdの発想は提案資料に使える**: ブランドルールをAIへの"固定制約"として渡す考え方は、Highliteが提供する「AI+人の磨き込み」パッケージの技術的根拠として言語化しやすい。ガバナンスの効いたAI活用を訴求する材料になる。
3. **大手の無料ベータ参入は価格競争の予兆**: Googleが無料ベータでUIデザイン生成に参入したことは、低価格帯のサイト制作市場がさらに圧迫されるシグナル。Highliteは「構造設計・ブランド一貫性・運用改善」など、AIの下書きだけでは埋まらない工程に価値の軸を明確に移す必要がある。
