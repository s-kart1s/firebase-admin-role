# Firebase Admin Role Management

このリポジトリでは、Firebase Admin SDK を使用して Firebase Authentication ユーザーのカスタムクレーム（例: 管理者ロール）を設定・確認するためのスクリプトを管理しています。

## 📁 含まれるスクリプト

### `setAdminRole.js`

指定した UID のユーザーに `admin` クレームを設定します。

#### 使用方法：

```bash
node setAdminRole.js <uid>
```

例：

```bash
node setAdminRole.js abc123def456
```

`checkUserRole.js`

指定した UID のユーザーが admin クレームを持っているかどうかを確認します。

使用方法：

```bash
node checkUserRole.js <uid>
```

例：

```bash
node checkUserRole.js abc123def456
```

## 🔧 事前準備

1. Firebase プロジェクトのサービスアカウントキーを取得し、プロジェクトルートに `serviceAccountKey.json` という名前で保存します。

2. 必要なパッケージをインストールします：

```bash
npm install firebase-admin
```
