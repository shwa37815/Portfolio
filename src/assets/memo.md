# React + TypeScript 学習備忘録

1. ## プロジェクト構成とファイルの役割
* **`.tsxとは`**
  TypeScript上でJSXを使用するためのファイル拡張子
　.tsではJSXの記述をサポートしていないためHTMLライクなUIを記述するためには必須なもの。


### src フォルダ（メインの開発場所）
これから実際にコードを書いていく最も重要な場所。
* **`src/main.tsx`**
  アプリの入り口。Reactを起動し、HTMLの画面に反映させる（マウントする）役割。
* **`src/App.tsx`**
  画面の大元となるコンポーネントパーツ。ここを起点にポートフォリオを作り込んでいく。
* **`src/index.css` / `App.css`**
  見た目を整えるデザイン（スタイルシート）ファイル。
* **`src/assets/`**
  コード内で読み込んで使う画像（ロゴなど）が入れられている場所。

### アプリの土台・裏側
* **`index.html`**
  Webブラウザが最初に読み込む、ただ一つのHTMLファイル。この空のHTMLの中に `src/` のコードが描画されていく。
* **`public/`**
  ブラウザのタブに表示されるアイコン（favicon）など、そのままの形で公開したいファイルを置く場所。
* **`node_modules/`**
  開発に必要な裏側のプログラムが大量に入っている。**原則として直接触らない。**

### 設定ファイル群
* **`package.json`**
  プロジェクトの「設計図」。インストールした機能のリストや、`npm run dev` のようなコマンドの設定が書かれている。
* **`vite.config.ts`**
  Vite（開発用ローカルサーバー・ビルドツール）の設定ファイル。
* **`tsconfig.json`**
  TypeScriptのチェックルールを決める設定ファイル。
* **`eslint.config.js`**
  選択したコードチェックツール（ESLint）の設定ファイル。
* **`.gitignore`**
  GitHubにコードをアップロードする際、「アップロードしないファイル（`node_modules`など）」を指定するリスト。

---

2. ##  TypeScript / React の必須知識

## TypeScript
###  アロー関数 (Arrow Function)
-関数（処理のまとまり）を短くシンプルに書くための、現代の標準的な書き方。

```javascript
// 従来の書き方
function hoge() {
  // 処理
}

// アロー関数
const hoge = () => {
  // 処理
}
```
### iframe
#### iframe（インラインフレーム）
  - Webページの中に別のWebページや動画、Googleマップなどの外部コンテンツを埋め込んで表示するためのHTML要素


### GoogleFormとの連携

お問い合わせの手段をGoogleFormを使って実装
埋め込むことで、ページ遷移を省略した。

- 手順
  1. 作成した Google フォームの右上にある 「その他」 ボタン（縦三点リーダ）をクリック。
  2. < > （HTML を埋め込む） のタブを選択。
  3. コード内の src="..." のURL部分だけ をコピー。

```TypeScript
・URL宣言
const googleFormUrl =...
・iframeで実装
<iframe
  src={googleFormUrl}
  ...
  ..
  .
>
```
