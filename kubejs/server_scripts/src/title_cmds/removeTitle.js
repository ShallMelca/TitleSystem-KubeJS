//priority 20

/*
    server_scripts/src/title_cmds/removeTitle.js
    書いた人:みち丸
    称号剥奪 /titles remove <playerName> <titleKey>
    対象のプレイヤーから対象の称号を剥奪する
    checkHighScoreに書いた処理のテスト用. OP必要
    
    称号重複整理 /titles unique <playerName>
    対象の所持する称号の重複を解除する. OP必要
    配列壊れるんで封印
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
                    const sender = ctx.source.player;
                    if (!sender) return 0;
                    
                    const targetPlayer = Arguments.PLAYER.getResult(ctx, "player");
                    const targetKey = Arguments.STRING.getResult(ctx, "titleKey");

                    // 対象を表示
                    let pData = targetPlayer.persistentData.kings;
                    const targetPrefix = Object.values(global.TITLES).find(t => t.key === targetKey).display;
                    sender.tell(`対象: ${targetPlayer.username}, 称号: ${targetPrefix}`);

                    for (let i=0; i<pData.titles.size(); i++) {
                        if (pData.titles.get(i) == targetKey) {
                            pData.titles.remove(i);
                            player.tell(`${i}番目の${targetPrefix}を剥奪しました`);
                            break;
                        }
                    }
                    // 実行後の結果を表示 (op権限が必要)
                    sender.runCommandSilent(`titles show ${targetPlayer}`);

                    return 1;
                  })
              )
          )
      )
  )
})


// ServerEvents.commandRegistry(event => {
//   const { commands: Commands, arguments: Arguments } = event;

//   event.register(
//     Commands.literal("titles")
//       .then(
//         Commands.literal("unique")
//           .then(
//             Commands.argument("player", Arguments.PLAYER.create(event))
//               .requires(src => src.hasPermission(2))
//               .executes(ctx => {
//                 const sender = ctx.source.player;
//                 if (!sender) return 0;  // 将来的にコンソールから実行できてもいいかも

//                 const targetPlayer = Arguments.PLAYER.getResult(ctx, "player");
//                 let pData = targetPlayer.persistentData.kings;

//                 // 整理した配列で元の配列を上書きする
//                 const oldTitles = pData.titles;
//                 let unique = [];

//                 for (let i=0; i<oldTitles.size(); i++) {
//                     let key = "" + oldTitles.get(i);
//                     // 重複チェック
//                     if (!unique.includes(key)) {
//                         unique.push(key.replace(/^"+|"+$/g, ""));
//                     }
//                 }
//                 // sender.tell(`old: ${oldTitles}, uni: ${unique}`);
//                 pData.titles = unique;

//                 sender.runCommandSilent(`titles show ${targetPlayer}`);
                
//                 return 1;
//               })
//           )
//       )
//     )
// })