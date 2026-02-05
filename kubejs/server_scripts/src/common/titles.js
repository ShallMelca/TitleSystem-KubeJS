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
 * @property {number} least 追加：称号に必要な最低値。
 */
global.TITLES = {
    MINING: {
        rank: 100,
        display: "§6[採掘王]§r ",
        least: 128
    },
    SEICHI: {
        rank: 101,
        display: "§a[整地王]§r",
        least: 64
    },
    LAVADEATH: {
        rank: 150,
        display: "§c[溶§6岩§c温§6泉§c愛§6好§c家]§r ",
        least: 5
    },
    GENBACAT: {
        rank: 151,
        display: "§7[現場猫]§r ",
        least: 5
    },
    HERO: {
        rank: 250,
        dispaly: "§3[勇者] ",
        least: 64
    },
    FISHCOMP: {
        rank: 251,
        display: "§b[漁協組合] ",
        least: 32
    },
    WALKMASTER: {
        rank: 252,
        display: "§2[サンポマスター] ",
        least: 1024 // メートルです.
    },
    PANDA: {
        rank: 300,
        display: "§f[p§8a§fn§8d§fa]§r ",
        least: 5
    },
    TRASHMAN: {
        rank: 500,
        display: "§x§7§7§8§8§9§9[ポイ捨て常習犯]",
        least: 32
    },
    MEGATONCOIN: {
        rank: 1500, //ここマジで適当に決めた.
        display: "§d[メガトンコイン]§r ",
        least: 0    //CheckHighScore通らなそうなので参照されない...はず
    },
    NONE: {
        rank: 0,
        display: "",
        least: 0
    }
};