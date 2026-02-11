//priority 57

/*
    server_scripts/src/title_cmds/showTitle.js
    書いた人:みち
    所持称号表示コマンド /titles show
    OP権限者は他PLの所持称号を確認できる /titles show <PLname>
*/

ServerEvents.commandRegistry(event => {
  const { commands: Commands, arguments: Arguments } = event;

  event.register(
    Commands.literal("titles")
      .then(
        Commands.literal("show")
          // /titles show  (自分)
          .executes(ctx => {
            const player = ctx.source.player;   // コマンドの実行者
            if (!player) {
              ctx.source.sendFailure("このコマンドはプレイヤーから実行してください。");
              return 0;
            }

            // 取得済みの称号表示
            const keys = player.persistentData.kings.titles;
            let prefixText = [];
            for (let key of keys) {
                let title = Object.values(global.TITLES).find(t => t.key === key);
                prefixText.push(title.display);
            }
            player.tell(`称号リスト: ${prefixText}`);

            // 現在セットしている称号表示
            const currentKey = player.persistentData.kings.current;
            const currentPrefix = Object.values(global.TITLES).find(t => t.key === currentKey).display;
            player.tell(`現在の称号: ` + currentPrefix);

            return 1;
          })

          // /titles show <player>  (OP only)
          .then(
            Commands.argument("player", Arguments.PLAYER.create(event))
              .requires(src => src.hasPermission(2))
              .executes(ctx => {
                const sender = ctx.source.player;   // コマンドの実行者
                const target = Arguments.PLAYER.getResult(ctx, "player");   // 対象のプレイヤー

                // 対象の称号リスト取得
                const keys = target.persistentData.kings.titles;
                let prefixText = [];
                for (let key of keys) {
                    let title = Object.values(global.TITLES).find(t => t.key === key);
                    prefixText.push(title.display);
                }
                // 現在セットしている称号取得
                const currentKey = target.persistentData.kings.current;
                const currentPrefix = Object.values(global.TITLES).find(t => t.key === currentKey).display;

                //チャット欄に送信
                if (sender) {   // sender == trueなら実行者はプレイヤー
                    sender.tell(`プレイヤー名: ${target.name.string}`);
                    sender.tell(`称号リスト: ${prefixText}`);
                    sender.tell(`現在の称号: ${currentPrefix}`);
                } else {
                    console.info(`プレイヤー名: ${target.name.string}`);
                    console.info(`称号リスト: ${prefixText}`);
                    console.info(`現在の称号: ${currentPrefix}`);
                }

                return 1;
              })
          )
      )
  );
});

function safeTell(player, msg) {
  // tell には必ず string だけ
  try {
    player.tell(String(msg));
  } catch (e) {
    // tell が壊れててもログには残す
    console.log("[titles-debug] tell failed:", msg, e);
  }
};