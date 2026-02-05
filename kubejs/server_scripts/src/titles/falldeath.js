//priority:1

/*
    server_scripts/src/titles/falldeath.js
    書いた人:シェイル
    現場猫 落下死5回以上
*/

EntityEvents.death('player', event => {
    if (!event.player) return;   // プレイヤー以外が死んだ場合無視.

    if (event.source.type().msgId() != 'fall') return;    // 早期リターンに変更

    const { player, server } = event;

    let playerfallDeathCount = server.persistentData[player.name + "_fallDeath"] || 0;
    playerfallDeathCount++;
    server.persistentData[player.name + "_fallDeath"] = playerfallDeathCount;

    global.checkHighScore(server, player, playerfallDeathCount, global.TITLES.GENBACAT.least, "fallDeath", global.TITLES.GENBACAT);

});