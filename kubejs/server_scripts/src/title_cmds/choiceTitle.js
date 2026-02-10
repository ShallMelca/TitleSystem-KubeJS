//priority 55

/*
    server_scripts/src/title_cmds/choiceTitle.js
    書いた人:みち
    称号選択コマンド /titles choice
*/

/**
 * クリックで称号を設定するメニューを呼び出すコマンド
 */
ServerEvents.commandRegistry(event => {
  const { commands: Commands } = event

  event.register(
    Commands.literal("titles")
      .then(
        Commands.literal("choice")
          .executes(ctx => {
            const player = ctx.source.player;   // コマンドの実行者
            if (!player) return 0;  // コンソール対策

            player.tell(`===設定したい称号をクリックしてください===`);

            const keys = player.persistentData.kings.titles;
            for (let key of keys) {
                let title = Object.values(global.TITLES).find(t => t.key === key);
                player.tell(
                    Text.of(`${title.display}`)
                        .clickRunCommand(`/titles set ${title.key}`)
                        .hover(Text.of(`${title.display}をセットする`))
                );
            }

            return 1;
          })
        )
    );
});


