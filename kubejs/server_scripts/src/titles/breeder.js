//priority:1

/*
    server_scripts/src/titles/breeder.js
    書いた人:シェイル
    ランキング型:tick
    酪農王
*/

global.Breeder = (player) => {
    if (player.age % 1200 !== 0) return;  // 毎分

    try {
        let cullentScore = player.stats.getAnimalsBred() || 0;

        global.checkHighScore(player, cullentScore, global.TITLES.BREEDER);
    }
    catch (e) {
        console.error(`[breeder] error: ${e}`);
    }
}