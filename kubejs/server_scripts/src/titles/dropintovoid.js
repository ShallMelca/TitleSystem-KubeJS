//priority:1

/*
    server_scripts/src/titles/dropintovoid.js
    書いた人:シェイル
    メガトンコイン
*/

EntityEvents.death('player', event => {
    if (!event.entity.isPlayer()) return;   // プレイヤー以外が死んだ場合無視.

    const { player, server, source } = event;

    if (source.type().msgId() == 'outOfWorld') {

        if (!server.persistentData.firstVoidOccurred) {

            server.persistentData.firstVoidOccurred = true;

            server.tell(Text.lightPurple(`${player.username} う　わ　あ　あ　あ　あ　あ　あ　あ　あ　あ　あ　あ　！`));
            global.CheckTitleRank(player, global.TITLES.MEGATONCOIN);
        }
    }
});