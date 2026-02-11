//priority:1

/*
    server_scripts/src/titles/dropintovoid.js
    書いた人:シェイル
    挑戦型
    メガトンコイン
*/

EntityEvents.death('player', event => {
    if (!event.player) return;   // プレイヤー以外が死んだ場合無視.

    const pd = event.player.persistentData;
    if (pd.kings && pd.kings.flags) {
        if (pd.kings.flags[global.TITLES.MEGATONCOIN.key]) return;
    }

    if (event.source.type().msgId() != 'outOfWorld') return;    // 早期リターンに変更.

    const { player, server } = event;    // ここで変数化
    if (!player.persistentData.kings) player.persistentData.kings = {};
    if (!player.persistentData.kings.flags) player.persistentData.kings.flags = {};

    player.persistentData.kings.flags[global.TITLES.MEGATONCOIN.key] = true;

    server.tell(Text.lightPurple(`${player.username} う　わ　あ　あ　あ　あ　あ　あ　あ　あ　あ　あ　あ　！`));
    global.CheckTitleRank(player, global.TITLES.MEGATONCOIN);
});