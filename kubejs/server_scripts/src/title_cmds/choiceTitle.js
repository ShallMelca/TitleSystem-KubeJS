//priority 55

/*
    server_scripts/src/title_cmds/choiceTitle.js
    書いた人:みち
    称号選択コマンド /titles choice
    称号設定コマンド /titles set <称号key>
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


/**
 * 称号を設定するコマンド
 * 引数 global.TITLES[xx].key
 */
ServerEvents.commandRegistry(event => {
  const { commands: Commands, arguments: Arguments } = event;

  event.register(
    Commands.literal("titles")
      .then(
        Commands.literal("set")
          .then(
            Commands.argument("titleKey", Arguments.STRING.create(event))
              .executes(ctx => {
                const player = ctx.source.player;
                if (!player) return 0;
                const setKey = Arguments.STRING.getResult(ctx, "titleKey");

                let pData = player.persistentData.kings;
                if (setKey == pData.current) {
                    let currentPrefix = Object.values(global.TITLES).find(t => t.key === pData.current).display;
                    player.tell(`既に${currentPrefix}を設定しています`)
                    return 0;
                }
                pData.current = setKey;
                let currentPrefix = Object.values(global.TITLES).find(t => t.key === pData.current).display;

                // team prefix更新処理
                global.selfModifyPrefix(player, pData.current);

                player.tell(`称号を設定しました\n現在の称号: ${currentPrefix}`);

                return 1;
              })
          )
          
      )
  );
});