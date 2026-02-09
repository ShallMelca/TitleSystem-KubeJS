//priority:1

/*
    server_scripts/src/titles/seichi.js
    書いた人:みっちー
    ランキング型
    整地王
*/

BlockEvents.broken(event => {   // ブロックが破壊された時……
    if (!event.player) return;  // 軽量化のために位置調整

    // 破壊されたブロックIDが草ブロックor土or砂利でないなら終了
    // 軽量化のために位置調整
    if (event.block.id !== 'minecraft:grass_block' && event.block.id !== 'minecraft:dirt' && event.block.id !== 'minecraft:gravel') return;

    // 軽量化のために位置調整
    const { player, server } = event;

    // 1. 現在のプレイヤーの合計採掘数を取得.
    let grass = player.stats.getBlocksMined('grass_block');
    let dirt = player.stats.getBlocksMined('dirt');
    let gravel = player.stats.getBlocksMined('gravel');
    let currentScore = grass + dirt + gravel;

    global.checkHighScore(server, player, currentScore, global.TITLES.SEICHI);
});