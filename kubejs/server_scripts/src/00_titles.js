/*
    server_scripts/src/titles.js
    称号データ
*/

global.TITLES = {
    DIG_KING: {
        rank: 100,
        // Textオブジェクトとして定義。内部でリッチな装飾を持たせられる
        display: "§6[採掘王]§r"
    },
    PANDA: {
        rank: 200,
        // 以前の panda のような複雑な色分けもここなら楽です
        display: "§f[p§8a§fn§8d§fa] "
    },
    NONE: {
        rank: 0,
        display: Text.of("")
    }
};