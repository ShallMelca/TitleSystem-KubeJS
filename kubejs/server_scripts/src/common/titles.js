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
        key: "mining",
        isRanking: true,
        rank: 100,
        display: "§6[採掘王]§r ",
        least: 128
    },
    SEICHI: {
        key: "seichi",
        isRanking: true,
        rank: 201,
        display: "§a[整地王]§r ",
        least: 64
    },
    BREEDER: {
        key: "breeder",
        isRanking: true,
        rank: 102,
        display: "§7[酪農王]§r ",
        least: 32
    },
    FARMER: {
        key: "farmer",
        isRanking: true,
        rank: 103,
        display: "§2[農業王]§r ",
        least: 32
    },
    WALKMASTER: {   // 取得者が結構いたので格下げ
        key: "walkMaster",
        isRanking: true,
        rank: 103,
        display: "§2[サンポマスター] ",
        least: 1024 // メートルです.
    },
    HERO: {
        key: "hero",
        isRanking: true,
        rank: 250,
        display: "§3[勇者] ",
        least: 64
    },
    FISHCOMP: { //未実装 魚を釣った回数
        key: "fishcomp",
        isRanking: true,
        rank: 251,
        display: "§b[漁協組合] ",
        least: 32
    },
    MNA_APP: {  //未実装
        key: "mna_app",
        isRanking: false,
        rank: 260,
        display: "§9[中級魔術師]§r ",
        least: 0
    },
    MNA_MASTER: {   //未実装
        key: "mna_master",
        isRanking: false,
        rank: 261,
        display: "§l§9[上級魔術師]§r",
        least: 0
    },
    HEX_MASTER: {    // 未実装 HexCastingの魔法詠唱回数
        key: "hex",
        isRanking: false,
        rank: 269,
        display: "§d[HexMaster]§r",
        least: 16
    },
    PANDA: {
        key: "panda",
        isRanking: false,
        rank: 300,
        display: "§f[p§8a§fn§8d§fa]§r ",
        least: 5
    },
    BELL: { //未実装 鐘を鳴らした回数
        key: "bell",
        isRanking: true,
        rank: 301,
        display: "§e[近所迷惑]§r ",
        least: 64
    },
    TRASHMAN: { //未実装
        key: "trash",
        isRanking: true,
        rank: 500,
        display: "§7[ポイ§8捨て§9常習犯]§r ",
        least: 32
    },
    LAVADEATH: {
        key: "lavaDeath",
        isRanking: true,
        rank: 550,
        display: "§c[溶§6岩§c温§6泉§c愛§6好§c家]§r ",
        least: 5
    },
    GENBACAT: {
        key: "fallDeath",
        isRanking: true,
        rank: 551,
        display: "§7[現場猫]§r ",
        least: 5
    },
    MEGATONCOIN: {
        key: "megatoncoin",
        isRanking: false,
        rank: 1500,
        display: "§d[メガトンコイン]§r ",
        least: 0    //CheckHighScore通らなそうなので参照されない...はず
    },
    NONE: {
        key: "none",
        isRanking: false,
        rank: 0,
        display: "",
        least: 0
    }
};