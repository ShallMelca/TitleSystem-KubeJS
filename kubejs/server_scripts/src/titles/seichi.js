//priority:1

/*
    server_scripts/src/titles/mining.js
    書いた人:みっちー
    整地王
*/

BlockEvents.broken(event => {   // ブロックが破壊された時……
    const { player, block, server } = event;
    if (!player) return;

    // 破壊されたブロックIDが草ブロックor土or砂利でないなら終了
    if (block.id !== 'minecraft:grass_block' && block.id !== 'minecraft:dirt' &&block.id !== 'minecraft:gravel') return;

    // 1. 現在のプレイヤーの合計採掘数を取得.
    let grass = player.stats.getBlocksMined('grass_block');
    let dirt = player.stats.getBlocksMined('dirt');
    let gravel = player.stats.getBlocksMined('gravel');
    let currentScore = grass + dirt + gravel;

    global.checkHighScore(server, player, currentScore, global.TITLES.SEICHI.least, "seichi", global.TITLES.SEICHI);
});