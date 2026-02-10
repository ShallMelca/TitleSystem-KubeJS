//priority:10

/*
    server_scripts/src/common/tick.js
    書いた人:シェイル
    毎分、ランキング型の一部称号データを更新する
 */


PlayerEvents.tick(event => {
    if (event.player.age % 1200 !== 0) return;  // 毎分

    const { player } = event;

    global.Breeder(player);
    global.Mining(player);
    global.WalkMaster(player);
    global.Seichi(player);
})