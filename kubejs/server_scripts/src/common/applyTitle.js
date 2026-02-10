//priority:99

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
    const teamName = `t_title_${player.uuid}`;  // player.usernameからuuidへ変更
    const pData = player.persistentData.kings || (player.persistentData.kings = {});
    const titles = pData.titles || (pData.titles = {});

    // 更新処理
    let prefix = titleData.display || "";

    if (titleData.key != "none" && prefix == "") {
        console.error(`[ApplyTitle] ${titleData}からdisplayデータを取得できませんでした`);
    }

    server.runCommandSilent(`team add ${teamName}`);
    server.runCommandSilent(`team modify ${teamName} prefix "${prefix}"`);
    server.runCommandSilent(`team join ${teamName} ${player.username}`);

    // 現在の称号をデータに保存
    pData.current = titleData.key;
    titles.push(titleData.key);
};