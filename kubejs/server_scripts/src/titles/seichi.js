//priority:1

/*
    server_scripts/src/titles/seichi.js
    書いた人:みっちー
    ランキング型:tick
    整地王
*/

global.Seichi = (player) => {
    const titleData = global.TITLES.SEICHI;

    // 1. 現在のプレイヤーの合計採掘数を取得.
    let grass = player.stats.getBlocksMined('grass_block');
    let dirt = player.stats.getBlocksMined('dirt');
    let gravel = player.stats.getBlocksMined('gravel');
    let currentScore = grass + dirt + gravel;

    global.checkHighScore(player, currentScore, titleData);
};