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
    const playerData = player.persistentData.kings || (player.persistentData.kings = {});
    const titlePlayerDatas = playerData.data || (playerData.data = {});
    const titleData = global.TITLES.GENBACAT;

    let playerfallDeathCount = titlePlayerDatas[titleData.key] || 0;
    playerfallDeathCount++;
    titlePlayerDatas[titleData.key] = playerfallDeathCount;

    global.checkHighScore(player, playerfallDeathCount, titleData);
});