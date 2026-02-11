//priority:1

/*
    server_scripts/src/titles/fishcomp.js
    書いた人:シェイル
    ランキング型:tick
    漁協組合
*/

global.FishComp = (player) => {
    try {
        let cullentScore = player.stats.getFishCaught() || 0;

        global.checkHighScore(player, cullentScore, global.TITLES.FISHCOMP);
    }
    catch (e) {
        console.error(`[fishcomp] error: ${e}`);
    }
}
