/*
    server_scripts/src/useful_cmds/titlesExplain.js
    書いた人: みっち
    称号関係のコマンドアナウンス
    
    手動実行コマンド /titles announce
    OP必要
*/

const titleAnnounce =
        Text.yellow("===称号システム===\n")
        .append(
            Text.of("- 称号を確認する /titles show\n")
                .hover(Text.of("使ってみる！"))
                .clickSuggestCommand("/titles show")
        )
        .append(
            Text.of("- 表示させる称号を選択する /titles choice\n")
                .hover(Text.of("使ってみる！"))
                .clickSuggestCommand("/titles choice")
        )
        .append(
            Text.of("- 称号を再表示させる /titles refresh\n")
                .hover(Text.of("消えてしまったとき用"))
                .clickSuggestCommand("/titles refresh")
        )
        .append(
            Text.of("~文字をクリックすると自動入力されます~")
        );

// ServerEvents.tick(event => {
//     const server = event.server;
//     const time = server.overworld
//     // 20分毎
//     if (event.server.overworld().getGameTime() % 24000 !== 0) return;

//     event.server.tell(titleAnnounce);
// })

ServerEvents.commandRegistry(event => {
  const { commands: Commands} = event;

  event.register(
    Commands.literal("titles")
      .then(
        Commands.literal("announce")
          .requires(src => src.hasPermission(2))
          .executes(ctx => {
            const server = ctx.source.server;

            server.tell(titleAnnounce);

            return 1;
          })
      )
  )
})