//priority:1

/*
    server_scripts/src/titles/falldeath.js
    書いた人:シェイル
    現場猫 落下死5回以上
*/

EntityEvents.death('player', event => {
    if (!event.entity.isPlayer()) return;   // プレイヤー以外が死んだ場合無視.

    const { player, server, source } = event;

    if (source.type().msgId() == 'fall') {
        let playerfallDeathCount = server.persistentData[player.name + "_fallDeath"] || 0;
        playerfallDeathCount++;
        server.persistentData[player.name + "_fallDeath"] = playerfallDeathCount;

        global.checkHighScore(server, player, playerfallDeathCount, 5, "fallDeath", global.TITLES.GENBACAT);
    }
});