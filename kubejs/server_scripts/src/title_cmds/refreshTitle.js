//priority 55

/*
    server_scripts/src/title_cmds/refreshTitle.js
    書いた人:みち丸
    称号セットの手動実行 /titles refresh
    pData.kings.currentのkeyを参照して接頭辞を再読み込みする
*/

/**
 * 補助関数
 * keyから称号データを検索して, global.applyTitle()を実行する
 * @param {Internal.Player} player 
 * @param {Sting} key 
 */
global.selfModifyPrefix = (player, key) => {
    const title = Object.values(global.TITLES).find(t => t.key === key);
    global.ApplyTitle(player, title);
}

ServerEvents.commandRegistry(event => {
    const { commands: Commands, arguments: Arguments } = event;

    event.register(
      Commands.literal("titles")
        .then(
          Commands.literal("refresh")
            .executes(ctx => {
              const player = ctx.source.player;
              if (!player) return 0;

              const pData = player.persistentData.kings;
              global.selfModifyPrefix(player, pData.current);

              player.tell("称号を付け直しました");

              return 1;
            })
        )      
    
    )
})