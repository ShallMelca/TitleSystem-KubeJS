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
    const playerData = player.persistentData.kings || (player.persistentData.kings = {});
    const titlePlayerDatas = playerData.data || (playerData.data = {});
    const titleData = global.TITLES.FARMER;

    let data = titlePlayerDatas[titleData.key] || 0;
    data++;
    titlePlayerDatas[titleData.key] = data;

    global.checkHighScore(player, data, titleData);
})