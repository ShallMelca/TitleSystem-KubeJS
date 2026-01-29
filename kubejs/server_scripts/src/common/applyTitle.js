//priority:100

/*
    server_scripts/src/common/ApplyTitle.js
    書いた人:シェイル
    称号をセットするグローバル関数
 */

/**
 * プレイヤーに称号を付与する共通関数
 * @param {Internal.Player} player プレイヤーオブジェクト
 * @param {string} titleData 称号データ
 */
global.ApplyTitle = (player, titleData) => {
    const server = player.server;
    const teamName = `t_title_${player.username}`;

    let prefix = titleData.display || "";

    server.runCommandSilent(`team add ${teamName}`);
    server.runCommandSilent(`team modify ${teamName} prefix "${prefix}"`);
    server.runCommandSilent(`team join ${teamName} ${player.username}`);

    let titleKey = Object.keys(global.TITLES).find(key => global.TITLES[key] === titleData);
    if (titleKey) {
        player.persistentData.current_title_id = titleKey;
    }
};