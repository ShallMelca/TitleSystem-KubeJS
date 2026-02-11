//priority:1

/*
    server_scripts/src/titles/farmer.js
    書いた人:シェイル
    ランキング型
    農業王
*/

BlockEvents.placed(event => {
    if (!event.block.hasTag('minecraft:maintains_farmland')) return;

    const { player } = event;
    if (!player.persistentData.kings) player.persistentData.kings = {};
    if (!player.persistentData.kings.data) player.persistentData.kings.data = {};
    const titleData = global.TITLES.FARMER;

    let data = player.persistentData.kings.data[titleData.key] || 0;
    data++;
    player.persistentData.kings.data[titleData.key] = data;

    global.checkHighScore(player, data, titleData);
})