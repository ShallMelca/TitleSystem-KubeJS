//priority:1

/*
    server_scripts/src/titles/walkmaster.js
    書いた人:シェイル
    サンポマスター
*/

PlayerEvents.tick(event => {
    if (event.player.age % 1200 !== 0) return;  // 毎分

    const { player, server } = event;

    try {
        let sprint = player.stats.getWalkDistance() || 0;
        let walk = player.stats.getSprintDistance() || 0;
        let cullentScore = (sprint + walk) / 100; // cmをmに変換

        global.checkHighScore(server, player, cullentScore, global.TITLES.WALKMASTER.least, "walkMaster", global.TITLES.WALKMASTER);
    }
    catch (e) {
        console.error(`[walkmaster] error: ${e}`);
    }
});