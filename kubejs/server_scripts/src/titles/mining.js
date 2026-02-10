//priority:1

/*
    server_scripts/src/titles/mining.js
    書いた人:シェイル
    ランキング型:tick
    採掘王
*/

global.Mining = (player) => {
    // 1. 現在のプレイヤーの合計採掘数を取得.
    let stone = player.stats.getBlocksMined('stone');
    let deepslate = player.stats.getBlocksMined('deepslate');
    let currentScore = stone + deepslate;

    global.checkHighScore(player, currentScore, global.TITLES.MINING);
};