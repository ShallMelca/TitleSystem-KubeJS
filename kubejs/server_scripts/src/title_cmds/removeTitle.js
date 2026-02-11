//priority 20

/*
    server_scripts/src/title_cmds/removeTitle.js
    書いた人:みち丸
    称号剥奪 /titles remove <playerName> <titleKey>
    対象のプレイヤーから対象の称号を剥奪する
    checkHighScoreに書いた処理のテスト用
*/

ServerEvents.commandRegistry(event => {
  const { commands: Commands, arguments: Arguments } = event;

  event.register(
    Commands.literal("titles")
      .then(
        Commands.literal("remove")
          .then(
            Commands.argument("player", Arguments.PLAYER.create(event))
              .then(
                Commands.argument("titleKey", Arguments.STRING.create(event))
                  .requires(src => src.hasPermission(2))    // 権限レベル2が必要
                  .executes(ctx => {
                    const player = ctx.source.player;
                    if (!player) return 0;
                    
                    const targetPlayer = Arguments.PLAYER.getResult(ctx, "player");
                    const targetKey = Arguments.STRING.getResult(ctx, "titleKey");

                    // 対象を表示
                    let pData = player.persistentData.kings;
                    const targetPrefix = Object.values(global.TITLES).find(t => t.key === targetKey).display;
                    player.tell(`対象: ${targetPlayer.username}, 称号: ${targetPrefix}`);

                    for (let i=0; i<pData.titles.size(); i++) {
                        if (pData.titles.get(i) == targetKey) {
                            pData.titles.remove(i);
                            player.tell(`${i}番目の${targetPrefix}を剥奪しました`);
                            break;
                        }
                    }
                    // 実行後の結果を表示 (op権限が必要)
                    player.runCommandSilent(`titles show ${targetPlayer}`);

                    return 1;
                  })
              )
          )
      )
  )
})