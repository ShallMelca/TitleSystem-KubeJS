//priority:1

/*
    server_scripts/src/titles/panda.js
    書いた人:シェイル
    挑戦型
    panda
*/

BlockEvents.broken(event => {   // ブロックが破壊された時...
    if (!event.player) return;

    const pd = event.player.persistentData;
    if (pd.kings && pd.kings.flags) {
        if (pd.kings.flags[global.TITLES.MEGATONCOIN.key]) return;
    }

    // 破壊されたブロックIDが竹でないなら終了.
    if (event.block.id !== 'minecraft:bamboo') return;


    const { player, server } = event;    // ここで変数化.
    if (!player.persistentData.kings) player.persistentData.kings = {};
    if (!player.persistentData.kings.flags) player.persistentData.kings.flags = {};
    const titleData = global.TITLES.PANDA;

    player.persistentData.kings.flags[titleData.key] = true;

    server.tell(Text.lightPurple(`${player.username} 竹食ってる場合じゃねえ！`));
    global.CheckTitleRank(player, titleData);
});