# 「美しいけど読めない」― Appleも5ヶ月で後退したLiquid Glass、中小企業サイトが"今すぐ真似"してはいけない理由

*Highliteトレンド記事 #076 | 2026-10-02 | テーマ: Webデザイン最新手法・UI/UXトレンド*
*ソース: [TechCrunch「Apple is tweaking its controversial Liquid Glass design」](https://techcrunch.com/2026/06/08/apple-is-tweaking-its-controversial-liquid-glass-design/) / [applech2「macOS 27 Golden Gateを正式にリリース」](https://applech2.com/archives/20260915-macos-27-golden-gate-now-available.html) / [となりずむ「macOS 27でLiquid Glass再調整、透明度と角丸を見直し」](https://www.apple-hacks.com/entry/macos27-liquid-glass-transparency-sidebar-design) / [tbreak「Apple plans macOS 27 design tweaks to fix Liquid Glass readability issues」](https://tbreak.com/macos-27-liquid-glass-readability-fixes/) / [note・takumi「リキッドグラスは本当に使いやすいのか？アクセシビリティの視点から」](https://note.com/takumi_uchu/n/n1488a1b63706) / [grafit.agency「Why you shouldn't use the Liquid Glass effect on your website yet」](https://www.grafit.agency/blog/why-you-shouldnt-use-the-liquid-glass-effect-on-your-website-yet) / [soreiine.jp「リキッドグラス（Liquid Glass）をCSSで実装する」](https://soreiine.jp/magazine/design/liquid-glass-design/) / [mivibzzz「Apple's Liquid Glass Is Ugly — And It Might Change Web Design Forever」](https://mivibzzz.com/resources/web-development/apple-liquid-glass-ios-26-web-design-trend) + Web横断調査(直近30日中心)*

---

## 結論サマリー(3行)

1. Appleが2025年6月に鳴り物入りで発表した半透明UI「Liquid Glass」は、「読みにくい」「Windows Vistaみたい」という批判を1年以上浴び続け、2026年9月15日公開のmacOS 27 Golden Gateで透明度を細かく調整できるスライダーを追加するなど、事実上の路線修正に追い込まれた。
2. それでもWebデザイン業界では今、「リキッドグラス/グラスモーフィズム」が2026年の主要トレンドの一つとして紹介され続けている。だがbackdrop-filterの多用はWCAGが定めるコントラスト比4.5:1を割り込みやすく、モバイル端末のGPU負荷・バッテリー消費を増やす実害を伴う。
3. 中小企業サイトが見た目の流行だけを追ってガラス効果を全面導入すると、Apple自身が1年以上かけて修正している欠陥(読みにくさ・一貫性のなさ)をそのまま背負い込むリスクがある。「使うなら要所に1〜2箇所、背景コントラストを必ず担保」が現実的な落としどころだ。

---

## 1. Appleが自ら認めた「未完成デザイン」― Liquid Glassの1年

Liquid Glassは2025年6月のWWDCでiOS 26・macOS Tahoeなどの新しい統一デザイン言語として発表された。半透明のパネルが背景の色や動きを拾って揺らぐ、視覚的にはインパクトの強いUIだ。発表直後からReddit上の反応は割れ、「ガラスのように美しい」という声がある一方、「文字が読みにくい」「Windows Aero 2.0」「Vistaの再来」といった酷評も相次いだ。Appleは2025年秋のiOS 26.1で透明度を調整できるオプションを追加し、2026年3月のiOS 26.4でもさらにカスタマイズ機能を増やしている。

そして2026年9月15日、Appleは次期macOS「27 Golden Gate」を正式リリースした。目玉の一つが、Liquid Glassの透明度と色の濃さを「クリア〜不透明〜完全な色付き」まで細かく調整できるスライダーの追加だ。光の屈折もより均一になり、コントラストが引き上げられ、ツールバーの見た目も統一されたほか、角丸も控えめに戻された。国内メディアも「未完成だったUIをAppleが手直しした」と報じており、これは実質的に「鳴り物入りで発表した新デザインの欠陥を、1年以上かけて修正し続けている」ことの裏返しでもある。

## 2. Web業界は何周遅れでトレンド化しているか

興味深いのは、本家Appleが読みにくさの火消しに追われている最中に、Webデザイン業界では「リキッドグラス」「グラスモーフィズム」が2026年の主要トレンドの一つとして紹介され続けている点だ。国内外のデザイン系メディアはこぞって「触覚的UI」「ガラスのような質感」をCSSで再現する実装ガイドを公開しており、backdrop-filterプロパティを使えば比較的簡単にブラー+半透明の見た目を作れることも後押ししている。

だが実装系の記事を横断すると、警告のトーンも強まっている。ある海外エージェンシーのブログは「まだ自社サイトでLiquid Glass風エフェクトを使うべきではない」と題し、Appleほどの開発リソースを持たない一般サイトがこの効果を安全に実装するのは難しいと指摘する。

## 3. 実害:コントラスト崩壊とバッテリー消費

半透明ガラス表現が抱える問題は見た目の好みだけではない。ガラスパネルは背景によって見え方が大きく変わるため、明るい背景と暗い背景の両方でテストしないと、文字と背景のコントラスト比がWeb標準の4.5:1を容易に下回る。Reddit上の指摘でも「前景と背景が競合して可読性を損なう」「アクセシビリティ設定(モーション削減)を有効にするとコントラストが崩れる」という声が上がっており、低視力やモーション過敏のユーザーには負担が大きいデザインだという批判が根強い。

さらにbackdrop-filterによるぼかし処理はGPU負荷が高く、ガラス要素を重ねるほどモバイル端末の発熱・バッテリー消費が増える。目安として、ぼかし半径25pxを超えるとモバイルでの性能劣化が顕著になり、3〜5個程度のガラス要素なら最新端末への影響は軽微だが、10個を超えると中価格帯スマートフォンで体感できるカクつきが起きるとされる。Appleがシステム設定として「透明度を下げる」「モーションを減らす」機能を用意できるのに対し、個別のWebサイトはそうした逃げ道をユーザーに提供できない点も見落とされがちだ。

## 4. 「それでも使うなら」の現実的な実装ルール

トレンドとして完全に無視する必要はないが、本家が1年かけて直している最中の表現を、検証なしに全面展開するのはリスクが大きい。実務的には次のルールが現実的だ。

- ガラス効果はファーストビューのヒーロー要素やナビゲーションなど、**要所1〜2箇所に限定**する
- 背景には常に**不透明度の高いオーバーレイ**を敷き、コントラスト比4.5:1を明暗どちらの背景でも機械的にチェックする
- `backdrop-filter`を多用する場合は**ぼかし半径を抑え**、同一画面内で重ねるガラス要素の数を絞る
- `prefers-reduced-motion`・`prefers-reduced-transparency`相当のユーザー設定を尊重し、効果を弱めた代替スタイルを用意する

## Highliteへの示唆

1. **「流行っているから」で即採用しない姿勢を商品価値にする** - Apple自身が1年がかりで修正している表現を検証なしに顧客サイトへ適用するのはリスクが高い。「トレンドを見極めた上で、要所にだけ効果的に使う」判断力こそがプロの制作会社の価値であり、営業トークとして言語化できる。
2. **アクセシビリティ診断をオプションメニュー化する** - コントラスト比チェックやモーション設定への配慮は、中小企業の発注者自身は気づきにくいポイント。デザイン提案時に「WCAG準拠チェック」を付加価値サービスとして明示すれば差別化になる。
3. **パフォーマンス予算の説明材料として使う** - 「見た目を凝るほどモバイルのバッテリー消費・表示速度が悪化する」という具体例は、過剰な装飾提案を抑えたい場面で顧客を説得する材料になる。Highliteの軽量・高速なサイト設計方針の裏付けとしても使える。
