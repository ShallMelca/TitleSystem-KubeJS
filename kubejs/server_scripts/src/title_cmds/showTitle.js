//priority 57

/*
    server_scripts/src/title_cmds/showTitle.js
    書いた人:シェイル
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
            const player = ctx.source.player;
            if (!player) {
              ctx.source.sendFailure("このコマンドはプレイヤーから実行してください。");
              return 0;
            }

            // 取得済みの称号表示
            const keys = player.persistentData.kings.titles;
            let prefixText = [];
            for (let raw of keys) {
                let key = ("" + raw).trim();
                key = key.replace(/^"+|"+$/g, "");
                let title = Object.values(global.TITLES).find(t => t.key === key);
                prefixText.push(title.display);
            }
            player.tell(`取得済みの称号: ${prefixText}`);

            // 現在セットしている称号表示
            const currentKey = player.persistentData.kings.current.replace(/^"+|"+$/g, "");
            const currentPrefix = Object.values(global.TITLES).find(t => t.key === currentKey).display;
            player.tell(`現在の称号: ` + currentPrefix);

            return 1;
          })

          // /titles show <player>  (OP only)
          .then(
            Commands.argument("player", Arguments.PLAYER.create(event))
              .requires(src => src.hasPermission(2))
              .executes(ctx => {
                const target = Arguments.PLAYER.getResult(ctx, "player");

                // TODO: ここに「target の称号を表示する処理」を入れる
                // 例: target の称号を ctx.source に表示する

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
}