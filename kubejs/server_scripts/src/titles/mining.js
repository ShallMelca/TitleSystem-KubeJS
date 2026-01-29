//priority:1

/*
    server_scripts/src/titles/mining.js
    書いた人:シェイル
    採掘王
*/

BlockEvents.broken(event => {   // ブロックが破壊された時……
    const { player, block, server } = event;
    if (!player) return;

    // 破壊されたブロックIDが石or深層岩でないなら終了
    if (block.id !== 'minecraft:stone' && block.id !== 'minecraft:deepslate') return;

    // 1. 現在のプレイヤーの合計採掘数を取得.
    let stone = player.stats.getBlocksMined('stone');
    let deepslate = player.stats.getBlocksMined('deepslate');
    let currentScore = stone + deepslate;

    global.checkHighScore(server, player, currentScore, 2, "mining", global.TITLES.MINING);
});