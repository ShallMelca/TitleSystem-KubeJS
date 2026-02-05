//priority:1

/*
    server_scripts/src/titles/dropintovoid.js
    書いた人:シェイル
    メガトンコイン
*/

EntityEvents.death('player', event => {
    if (!event.player) return;   // プレイヤー以外が死んだ場合無視.

    if (event.source.type().msgId() != 'outOfWorld') return;    // 早期リターンに変更

    if (event.server.persistentData.firstVoidOccurred) return;  // 早期リターンに変更

    const { player, server } = event;    // ここで変数化

    server.persistentData.firstVoidOccurred = true;

    server.tell(Text.lightPurple(`${player.username} う　わ　あ　あ　あ　あ　あ　あ　あ　あ　あ　あ　あ　！`));
    global.CheckTitleRank(player, global.TITLES.MEGATONCOIN);
});