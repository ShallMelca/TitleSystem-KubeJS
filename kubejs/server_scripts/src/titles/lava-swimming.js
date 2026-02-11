//priority:1

/*
    server_scripts/src/titles/lava-swimming.js
    書いた人:シェイル
    挑戦型
    溶岩温泉愛好家 溶岩ダイブ死5回以上
*/

EntityEvents.death('player', event => {
    if (!event.player) return;   // プレイヤー以外が死んだ場合無視.

    if (event.source.type().msgId() != 'lava') return;    // 早期リターンに変更

    const { player } = event;    // ここで変数化
    if (!player.persistentData.kings) player.persistentData.kings = {};
    if (!player.persistentData.kings.data) player.persistentData.kings.data = {};
    const titleData = global.TITLES.LAVADEATH;

    let playerLavaDeathCount = player.persistentData.kings.data[titleData.key] || 0;
    playerLavaDeathCount++;
    player.persistentData.kings.data[titleData.key] = playerLavaDeathCount;

    global.checkHighScore(player, playerLavaDeathCount, titleData);

});