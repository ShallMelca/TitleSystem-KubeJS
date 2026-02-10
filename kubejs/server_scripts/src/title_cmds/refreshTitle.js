//priority 55

/*
    server_scripts/src/title_cmds/refreshTitle.js
    書いた人:みち丸
    称号セットの手動実行 /titles refresh
    pData.kings.currentのkeyを参照して接頭辞を再読み込みする
*/

/**
 * keyから称号データを検索して, global.applyTitle()を実行する
 * @param {Internal.Player} player 
 * @param {Sting} key 
 */
global.selfModifyPrefix = (player, key) => {
    
}