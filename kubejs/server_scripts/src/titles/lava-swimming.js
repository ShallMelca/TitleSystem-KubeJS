//priority:1

/*
    server_scripts/src/titles/lava-swimming.js
    書いた人:シェイル
    溶岩温泉愛好家 溶岩ダイブ死5回以上
*/

EntityEvents.death('player', event => {
    if (!event.player) return;   // プレイヤー以外が死んだ場合無視.

    if (event.source.type().msgId() != 'lava') return;    // 早期リターンに変更

    const { player, server } = event;    // ここで変数化

    let playerLavaDeathCount = server.persistentData[player.name + "_lavaDeath"] || 0;
    playerLavaDeathCount++;
    server.persistentData[player.name + "_lavaDeath"] = playerLavaDeathCount;

    global.checkHighScore(server, player, playerLavaDeathCount, global.TITLES.LAVADEATH.least, "lavaDeath", global.TITLES.LAVADEATH);

});