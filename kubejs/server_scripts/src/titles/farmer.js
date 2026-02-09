//priority:1

/*
    server_scripts/src/titles/farmer.js
    書いた人:シェイル
    ランキング型
    農業王
*/

BlockEvents.placed(event => {
    if (!event.block.hasTag('minecraft:maintains_farmland')) return;

    const { player, server } = event;
    let data = player.persistentData[player.name + "_seed"] || 0;
    data++;
    player.persistentData[player.name + "_seed"] = data;

    global.checkHighScore(server, player, data, global.TITLES.FARMER);
})