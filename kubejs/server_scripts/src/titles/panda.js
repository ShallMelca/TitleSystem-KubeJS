//priority:1

/*
    server_scripts/src/titles/panda.js
    書いた人:シェイル
    挑戦型
    panda
*/

BlockEvents.broken(event => {   // ブロックが破壊された時...
    if (!event.player) return;

    if (event.player.persistentData.kings.flags[global.TITLES.PANDA.key]) return;  // 竹か判定より先に判定.

    // 破壊されたブロックIDが竹でないなら終了.
    if (event.block.id !== 'minecraft:bamboo') return;


    const { player, server } = event;    // ここで変数化.
    const pData = player.persistentData.kings || (player.persistentData.kings = {});
    const titleData = global.TITLES.PANDA;

    pData.flags[titleData.key] = true;

    server.tell(Text.lightPurple(`${player.username} 竹食ってる場合じゃねえ！`));
    global.CheckTitleRank(titleData);
});