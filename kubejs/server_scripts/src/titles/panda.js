//priority:1

/*
    server_scripts/src/titles/panda.js
    書いた人:シェイル
    挑戦型
    panda
*/

BlockEvents.broken(event => {   // ブロックが破壊された時...
    if (!event.player) return;

    if (event.server.persistentData.firstBamboogetted) return;  // 竹か判定より先に判定.

    // 破壊されたブロックIDが竹でないなら終了.
    if (event.block.id !== 'minecraft:bamboo') return;


    const { player, server } = event;    // ここで変数化.

    server.persistentData.firstBamboogetted = true;

    server.tell(Text.lightPurple(`${player.username} 竹食ってる場合じゃねえ！`));
    global.CheckTitleRank(player, global.TITLES.PANDA);
});