/*
    server_scripts/src/useful_cmds/annnouce_cfg.js
    書いた人: みっち
    チャット欄にopからの意思をわかりやすく伝えるためのオリジナルコマンド追加
    サウンドの名前が正しくないと
    「コマンドの実行中に予期せぬエラーが発生しました」が出るっぽい
*/

/**
 * @typedef {Object} AnnounceData
 * @property {string} cmd コマンドの名前
 * @property {string} help ヘルプで表示される文
 * @property {number} perm 実行に必要な権限レベル
 * @property {string} prefix 接頭辞. 最後に半角スペースを入れること推奨
 * @property {string} prefixColor 接頭辞の色
 * @property {boolean} boldPrefix 接頭辞を太字にするか
 * @property {string} sound 実行時になる音
 * @property {number} soundVolume 音の大きさ
 * @property {number} soundPitch 音の高さ
 */

global.AnnounceCmd = {
  list: [
    {
      cmd: "announce",
      help: "/announce <message> : 通常アナウンス",
      perm: 2, // OP以上
      prefix: "【ANNOUNCE】 ",
      prefixColor: "gold",
      boldPrefix: false,
      sound: null, // 例: "minecraft:entity.experience_orb.pickup"
      soundVolume: 1,
      soundPitch: 1
    },
    {
      cmd: "warn",
      help: "/warn <message> : 警告（赤）",
      perm: 2,
      prefix: "【WARN】 ",
      prefixColor: "red",
      boldPrefix: false,
      sound: null,
      soundVolume: 1,
      soundPitch: 1
    },
    {
      cmd: "event",
      help: "/event <message> : イベント告知（水色）",
      perm: 2,
      prefix: "【EVENT】 ",
      prefixColor: "aqua",
      boldPrefix: false,
      sound: null,
      soundVolume: 1,
      soundPitch: 1
    }
  ],

  // 共通のデフォルト（各コマンドで省略したいならここを使う設計にもできる）
  defaults: {
    messageColor: "white"
  }
}

