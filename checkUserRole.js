// checkUserRole.js
const admin = require("firebase-admin");
const serviceAccount = require("./serviceAccountKey.json");

// Firebase Admin SDK の初期化
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

// 引数の UID を取得
const uid = process.argv[2];
if (!uid) {
  console.error("エラー: UID を指定してください。");
  process.exit(1);
}

async function checkUserRole(uid) {
  try {
    const user = await admin.auth().getUser(uid);
    const claims = user.customClaims || {};

    if (claims.admin === true) {
      console.log(`${uid} は管理者です`);
    } else {
      console.log(`${uid} は一般ユーザーです`);
    }
  } catch (error) {
    console.error("ユーザー取得に失敗しました:", error);
  }
}

checkUserRole(uid);
