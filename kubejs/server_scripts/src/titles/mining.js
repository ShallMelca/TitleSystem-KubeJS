//priority:1

/*
    server_scripts/src/titles/mining.js
    書いた人:シェイル
    ランキング型
    採掘王
*/

BlockEvents.broken(event => {   // ブロックが破壊された時……
    if (!event.player) return;

    // 破壊されたブロックIDが石or深層岩でないなら終了
    if (event.block.id !== 'minecraft:stone' && event.block.id !== 'minecraft:deepslate') return;

    const { player, server } = event;   // 軽量化のために位置調整

    // 1. 現在のプレイヤーの合計採掘数を取得.
    let stone = player.stats.getBlocksMined('stone');
    let deepslate = player.stats.getBlocksMined('deepslate');
    let currentScore = stone + deepslate;

    global.checkHighScore(server, player, currentScore, global.TITLES.MINING);
});