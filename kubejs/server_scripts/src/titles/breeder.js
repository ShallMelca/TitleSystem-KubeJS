//priority:1

/*
    server_scripts/src/titles/breeder.js
    書いた人:シェイル
    酪農王
*/

PlayerEvents.tick(event => {
    if (event.player.age % 1200 !== 0) return;  // 毎分

    const { player, server } = event;

    try {
        let cullentScore = player.stats.getAnimalsBred() || 0;

        global.checkHighScore(server, player, cullentScore, global.TITLES.BREEDER);
    }
    catch (e) {
        console.error(`[breeder] error: ${e}`);
    }
});