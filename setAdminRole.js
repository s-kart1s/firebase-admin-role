// Firebase Admin SDKを使用してユーザーにadminクレームを付与するスクリプト
const admin = require("firebase-admin");
const serviceAccount = require("./serviceAccountKey.json");

// Firebase Admin SDKの初期化
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

// コマンドライン引数から UID を取得
const uid = process.argv[2];
if (!uid) {
  console.error("エラー: UID を指定してください。");
  process.exit(1);
}

// adminクレームを付与
admin
  .auth()
  .setCustomUserClaims(uid, { admin: true })
  .then(() => {
    console.log(`ユーザー ${uid} に admin クレームを設定しました。`);
  })
  .catch((error) => {
    console.error("クレーム設定中にエラーが発生しました:", error);
  });
