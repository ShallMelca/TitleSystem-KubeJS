//priority:1

/*
    server_scripts/src/titles/walkmaster.js
    書いた人:シェイル
    ランキング型:tick
    サンポマスター
*/

global.WalkMaster = (player) => {
    try {
        let sprint = player.stats.getWalkDistance() || 0;
        let walk = player.stats.getSprintDistance() || 0;
        let cullentScore = (sprint + walk) / 100; // cmをmに変換

        global.checkHighScore(player, cullentScore, global.TITLES.WALKMASTER);
    }
    catch (e) {
        console.error(`[walkmaster] error: ${e}`);
    }
};