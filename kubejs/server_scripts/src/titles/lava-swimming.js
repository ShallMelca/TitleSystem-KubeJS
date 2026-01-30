//priority:1

/*
    server_scripts/src/titles/lava-swimming.js
    書いた人:シェイル
    溶岩温泉愛好家 溶岩ダイブ死5回以上
*/

EntityEvents.death('player', event => {
    if (!event.entity.isPlayer()) return;   // プレイヤー以外が死んだ場合無視.

    const { player, server, source } = event;

    if (source.type().msgId() == 'lava') {
        let playerLavaDeathCount = server.persistentData[player.name + "_lavaDeath"] || 0;
        playerLavaDeathCount++;

        global.checkHighScore(server, player, playerLavaDeathCount, 5, "lavaDeath", global.TITLES.LAVADEATH);
    }
});