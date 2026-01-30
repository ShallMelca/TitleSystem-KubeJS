//priority:80

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
    let currentTitleId = player.persistentData.current_title_id || "NONE";
    let currentRank = global.TITLES[currentTitleId].rank;

    if (currentRank < nextTitle.rank) {
        global.ApplyTitle(player, nextTitle);
    }
}