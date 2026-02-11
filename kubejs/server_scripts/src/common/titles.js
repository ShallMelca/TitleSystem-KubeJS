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
    FISHCOMP: {
        key: "fishcomp",
        isRanking: true,
        rank: 251,
        display: "§b[漁協組合] ",
        least: 32
    },
    PANDA: {
        key: "panda",
        isRanking: false,
        rank: 300,
        display: "§f[p§8a§fn§8d§fa]§r ",
        least: 5
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

    // 以下、NONEまで新規追加予定実績系称号
    POTION: {
        key: "potion",
        isRanking: false,
        rank: 1501,
        display: "§5[猛烈なカクテル]§r ",
        least: 0
    },
    CAVE_CLIFF: {
        key: "cave_cliff",
        isRanking: false,
        rank: 1502,
        display: "§5[洞窟と崖]§r ",
        least: 0
    },
    PLANE: {
        key: "plane",
        isRanking: false,
        rank: 1503,
        display: "§8[B-2 スピリット]§r ",
        least: 0
    },
    SNIPER: {
        key: "sniper",
        isRanking: false,
        rank: 1504,
        display: "§5[真のスナイパー]§r ",
        least: 0
    },
    LOOTR: {
        key: "lootr",
        isRanking: false,
        rank: 1505,
        display: "§e[ワンピース]§r ",
        least: 0
    },
    MASTERCHEF: {
        key: "masterchef",
        isRanking: false,
        rank: 1506,
        display: "§4[最高の料理人]§r ",
        least: 0
    },
    HEX_INSIGHT: {
        key: "hex_insight",
        isRanking: false,
        rank: 1600,
        display: "§d[識眼]§r ",
        least: 0
    },
    HEX_MASTER: {
        key: "hex_master",
        isRanking: false,
        rank: 1601,
        display: "§l§d[Hex Casting]§r ",
        least: 0
    },
    CREATE_ROADKILL: {
        key: "create_roadkill",
        isRanking: false,
        rank: 1602,
        display: "§4[鉄道の使い手]§r ",
        least: 0
    },
    CREATE_CARDBOARD: {
        key: "create_cardboard",
        isRanking: false,
        rank: 1603,
        display: "§8[スネーク]§r ",
        least: 0
    },
    CREATE_MASTER: {
        key: "create_master",
        isRanking: false,
        rank: 1604,
        display: "§l§e[Create]§r ",
        least: 0
    },
    MNA_F_COUNCIL: {
        key: "mna_f_council",
        isRanking: false,
        rank: 1605,
        display: "§9[古の魔法使い評議会]§r ",
        least: 0
    },
    MNA_F_DEMON: {
        key: "mna_f_demon",
        isRanking: false,
        rank: 1606,
        display: "§4[ネザーの悪魔]§r ",
        least: 0
    },
    MNA_F_FEY: {
        key: "mna_f_fey",
        isRanking: false,
        rank: 1607,
        display: "§d[妖精の宮廷]§r ",
        least: 0
    },
    MNA_F_UNDEAD: {
        key: "mna_f_undead",
        isRanking: false,
        rank: 1608,
        display: "§3[不死者のレギオン]§r ",
        least: 0
    },
    MNA_MASTER: {
        key: "mna_master",
        isRanking: false,
        rank: 1609,
        display: "§l§3[ManaAndArtifice]§r ",
        least: 0
    },
    NONE: {
        key: "none",
        isRanking: false,
        rank: 0,
        display: "",
        least: 0
    }
};