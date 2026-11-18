# スクロール連動アニメーションが"4大ブラウザ共通機能"に ― Firefox 159のBaseline到達で、JS不要のCSSモーションが本番投入可能に

*Highliteトレンド記事 #123 | 2026-11-19 | テーマ: Webデザイン最新手法・UI/UXトレンド*
*ソース: [web.dev「New to the web platform in October」(2026-10-29公開)](https://web.dev/blog/web-platform-10-2026) / [MDN「Firefox 159 release notes for developers」](https://developer.mozilla.org/en-US/Firefox/Releases/159) / [Mozilla dev-platform「Intent to Ship: Scroll-driven Animations」](https://groups.google.com/a/mozilla.org/g/dev-platform/c/uLZPrpA5Ic0) / [Chrome Developers「Animate elements on scroll with Scroll-driven animations」](https://developer.chrome.com/articles/scroll-driven-animations) / [Chrome Developers「Scroll-triggered animations」](https://developer.chrome.com/blog/scroll-triggered-animations) / [caniuse「Scroll-driven animations」](https://caniuse.com/wf-scroll-driven-animations) + Web横断調査(直近30日中心)*

---

## 結論サマリー(3行)

1. 2026年10月27日リリースのFirefox 159が「スクロール連動アニメーション(CSS `animation-timeline: scroll()` / `view()`)」をデフォルト有効化し、Chrome・Edge・Safariに続いてBaseline「Newly available」入りした。
2. これでJavaScriptのscrollイベント監視なしに、CSSだけで"スクロールに応じて要素が動く"演出が主要4ブラウザで本番投入可能になった。ブラウザがコンポジタースレッドで処理するため、メインスレッドを塞がずパフォーマンスへの悪影響も小さい。
3. 中小企業サイトにとっては「重いJSアニメーションライブラリへの依存を減らしつつ、見栄えのある動きを安く実装できる」好機。Highliteの提案で"軽量・高速・今っぽい"を同時に訴求できる。

---

## 1. Firefox 159がついに「フラグなし」でスクロール連動アニメーションを有効化

スクロールに応じて要素のフェードイン・拡大縮小・回転などを行う「スクロール連動アニメーション(Scroll-driven Animations)」は、2023年7月のChrome 115・Edge 115から非フラグ対応が始まり、2025年にSafari 26が追随していた。残る大きな壁がFirefoxだった。

Mozillaのエンジニア、Boris Chiouは2026年9月25日、Mozillaのdev-platformメーリングリストに「Intent to Ship: Scroll-driven Animations」を投稿し、Firefox 159でのデフォルト有効化を正式に表明。予定どおり2026年10月27日リリースのFirefox 159でこれが実現し、MDNのリリースノートにも「scroll-driven animations are now enabled by default」と明記された。

この変化はweb.devの月次まとめ「New to the web platform in October」(2026年10月29日公開)でも「Scroll-driven animations become Baseline」として紹介されており、Web標準上の節目として扱われている。

## 2. 何が変わるのか ― JSのscrollイベント + requestAnimationFrameが不要に

これまでスクロール連動の演出を実装するには、JavaScriptで`scroll`イベントを監視し、`requestAnimationFrame`で座標を計算してスタイルを書き換える、という負荷の高い実装が一般的だった。

CSSの`animation-timeline: scroll()`(スクロール位置そのものをタイムラインにする)と`animation-timeline: view()`(要素がビューポートに入ってから出るまでをタイムラインにする)を使えば、この処理をブラウザ側に委譲できる。ブラウザはこれをメインスレッドではなくコンポジタースレッドで解決するため、スクロール中のJS実行によるカク付きやメインスレッドブロックが起きにくい。

実装面での注意点として、現時点でも`@supports`を使った段階的実装(プログレッシブエンハンスメント)が推奨されている。未対応環境ではアニメーションなしでもコンテンツが正しく表示される設計にしておく必要がある。

## 3. 次に来るのは「スクロールトリガー型」アニメーション

スクロール連動アニメーション(進捗に応じて動く)とは別に、Chrome Developersのブログでは「スクロールトリガーアニメーション(`timeline-trigger`)」がChrome 145で導入される予定と案内されている。これは特定のスクロール位置を"トリガー"として、時間ベースのアニメーションを再生する仕組みで、進捗追従型とは用途が異なる。

さらにFirefoxにとってスクロール連動アニメーションは「Interop 2026」の優先項目に指定されており、Mozillaが今後も継続的に対応を深めていく姿勢を示している。つまりこの分野は一度の対応で終わらず、2026年を通じて段階的に拡張が続く領域だ。

## 4. アクセシビリティとのセット運用が前提

動きのあるUIは、めまいや乗り物酔いに似た症状を引き起こす利用者がいることが知られており、WCAGの観点では`prefers-reduced-motion`メディアクエリとの併用が実務上の前提になる。スクロール連動アニメーションを軽量に実装できるようになったからこそ、「動きを増やす」ではなく「動きを適切に制御する」設計判断の重要性がむしろ高まっている。

## Highliteへの示唆

1. **"軽量・高速・今っぽい"を同時に訴求できる技術的根拠ができた** ― 従来はGSAPなどの重量級JSライブラリに依存していたスクロール演出を、CSSのみで代替できる場面が増えた。提案書やLPで「表示速度を落とさずに動きのある体験を実装できる」ことを具体的な技術根拠として説明できる。
2. **低予算の中小企業サイトでも"体験の質"を上げやすくなった** ― 専用のJS実装やライブラリ導入コストが不要になった分、これまで予算的に難しかった中小企業のコーポレートサイトやLPにも、違和感のないスクロール演出を標準メニューとして組み込みやすくなる。
3. **`prefers-reduced-motion`対応をセット販売の標準仕様にする** ― 動きの実装を増やすタイミングは、アクセシビリティ配慮を標準装備にする良い機会でもある。「動きも配慮も両立したサイト」をHighliteの品質基準として明文化し、他社との差別化ポイントにできる。
