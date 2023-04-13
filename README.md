Web socketを使用した複数人対応のリアルタイムにデータをやり取りするWebアプリ。

## 環境構築
.envファイルをルートディレクトリに配置し、以下の内容を記述する。

```:.env
# === Webサーバー ===
# URL
CLIENT_HOST="ホスト名"
CLIENT_PORT="ポート"

# Mode
CLIENT_COMMAND="npm run dev"

# === APIサーバー ===
# URL
SERVER_HOST="ホスト名"
SERVER_PORT="ポート"
```

## 使用環境
### 全体
> Docker

### Web-Server
next.js
> node.js, react, HTML, CSS, SCSS, Javascript Typescript

### API-Server
express
> node.js, Javascript, Typescript

## 目標
<details><summary>API-ServerをGo言語で記述する</summary>

MySQLとWebページの通信を高速に行えるようにする。

</details>

<details><summary>MySQLを使用した情報の保存</summary>

ユーザー情報
```
ユーザー名
パスワード
```

チャットルームのデータ
```
チャットルーム名
アクセス権を持つユーザー名
```

チャットログ
```
送信者名
タイムスタンプ
テキスト
```

</details>
