//priority:85

/*
    server_scripts/src/common/checkTitleRank.js
    書いた人:シェイル
    称号ランクの比較
*/

/**
 * 称号のランクを比較する
 * @param {Internal.Player} player プレイヤーオブジェクト
 * @param {any} nextTitle 次につけたい称号
 */
global.CheckTitleRank = (player, nextTitle) => {
    let currentTitleId = player.persistentData.kings.currnet || "NONE";

    if (global.TITLES[currentTitleId].rank < nextTitle.rank) {
        global.ApplyTitle(player, nextTitle);
    }
}