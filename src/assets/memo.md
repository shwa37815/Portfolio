# React + TypeScript 学習備忘録

## プロジェクト構成とファイルの役割
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

## TypeScript / React の知識

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

### ルーティング
`react-router-dom` を使用し、ページ全体をリロードしないSPA（シングルページアプリケーション）を実現。
- `<BrowserRouter>`: ルーティングを使うための大枠
- `<Routes>` と `<Route>`: URLと表示するコンポーネントを紐づける

  '''TypeScript 
  <Routes>
  <Route element="{<Home"/>} path="/" />
  <Route element="{<Skills"/>} path="/skills" />
</Routes>
  ```

  ## Markdown
  -プログラムとコンテンツを分離して管理・表示する仕組み
  -Viteの ?raw: .md ファイルを単なるテキストデータとしてインポートする。
  -`<react-markdown>`: 読み込んだテキストデータを動的にHTMLへ変換・描画する。

  ```TypeScript
  import memoText from '../../../memo.md?raw';
import ReactMarkdown from 'react-markdown';

// 画面に表示する
<ReactMarkdown>{memoText}</ReactMarkdown>
  ```

## CSS
### 基本のプロパティ
* **`display: flex;`
  要素を横並び（または縦並び）にする。
* **`justify-content`
   space-between;: 両端に配置して余白を均等に取る。
* **`align-items: center;`
   縦方向の中央に揃える。
* **`gap: 20px;` 
   並んだ要素の間に20pxの隙間を空ける。

### 装飾・アニメーション
* **`text-decoration: none;`
   リンクの下線を消す。
* **`transition: color 0.3s ease;`
   色の変化などをフワッとさせる。
* **`:hover`
   マウスが乗ったときのスタイルを指定する。
