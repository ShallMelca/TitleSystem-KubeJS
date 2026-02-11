//priority:1

/*
    server_scripts/src/titles/falldeath.js
    書いた人:シェイル
    ランキング型
    現場猫 落下死5回以上
*/

EntityEvents.death('player', event => {
    if (!event.player) return;   // プレイヤー以外が死んだ場合無視.

    if (event.source.type().msgId() != 'fall') return;    // 早期リターンに変更

    const { player } = event;
    if (!player.persistentData.kings) player.persistentData.kings = {};
    if (!player.persistentData.kings.data) player.persistentData.kings.data = {};
    const titleData = global.TITLES.GENBACAT;

    let playerfallDeathCount = player.persistentData.kings.data[titleData.key] || 0;
    playerfallDeathCount++;
    player.persistentData.kings.data[titleData.key] = playerfallDeathCount;

    global.checkHighScore(player, playerfallDeathCount, titleData);
});