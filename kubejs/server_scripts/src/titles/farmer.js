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
    const pData = player.persistentData.kings || (player.persistentData.kings = {});
    const titleData = global.TITLES.FARMER;

    let data = pData.data[titleData.key] || 0;
    data++;
    pData.data[titleData.key] = data;

    global.checkHighScore(player, data, titleData);
})