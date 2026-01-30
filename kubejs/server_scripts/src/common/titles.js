//priority:100

/*
    server_scripts/src/common/titles.js
    書いた人:シェイル
    称号データ。rankの値は雑に決めたやつなのでもっと細かく書き直してほしい気持ちがある
*/

/**
 * @typedef {Object} TitleData
 * @property {number} rank 称号の優先度（高いほど上位）
 * @property {string} display ゲーム内で表示される名前（§コード）
 */

/**
 * 登録されている称号の全リスト
 * @type {Object.<string, TitleData>}
 */
global.TITLES = {
    MINING: {
        rank: 100,
        display: "§6[採掘王]§r "
    },
    PANDA: {
        rank: 200,
        display: "§f[p§8a§fn§8d§fa]§r "
    },
    MEGATONCOIN: {
        rank: 1500,  //ここマジで適当に決めた.
        display: "§d[メガトンコイン]§r "
    },
    LAVADEATH: {
        rank: 101,
        display: "§c[溶§6岩§c温§6泉§c愛§6好§c家]§r "
    },
    GENBACAT: {
        rank: 102,
        display: "§7[現場猫]§r "
    },
    NONE: {
        rank: 0,
        display: ""
    }
};