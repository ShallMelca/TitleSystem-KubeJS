/*
 * titleset.js
 * 称号をセットします
 */

/**
 * プレイヤーに称号を付与する共通関数
 * @param {Internal.Player} player プレイヤーオブジェクト
 * @param {string} titleData 称号データ
 */
global.applyTitle = (player, titleData) => {
    const server = player.server;
    const teamName = `t_title_${player.username}`;

    // titleData.display が文字列であることを前提とする.
    let prefix = titleData.display || "";

    server.runCommandSilent(`team add ${teamName}`);
    server.runCommandSilent(`team modify ${teamName} prefix "${prefix}"`);
    server.runCommandSilent(`team join ${teamName} ${player.username}`);

    let titleKey = Object.keys(global.TITLES).find(key => global.TITLES[key] === titleData);
    if (titleKey) {
        player.persistentData.current_title_id = titleKey;
    }
};