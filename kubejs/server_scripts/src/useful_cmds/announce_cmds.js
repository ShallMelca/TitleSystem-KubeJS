/*
    server_scripts/src/useful_cmds/annnouce_cmds.js
    書いた人: みっち
    cfgからコマンド作成. 新規追加はcfgいじるだけでおk. なるべく触らないこと推奨
    /annhelpで全体のヘルプ表示
*/

ServerEvents.commandRegistry(event => {
  const { commands: Commands, arguments: Arguments } = event

  /* === 1) 設定の取得と最低限のバリデーション ===========================
     - cfg が未ロードだとこの時点で undefined になるので、分かりやすくログを出して中断する
     - list が配列であることだけ保証しておけば、以降は安全に forEach できる
  ===================================================================== */
  const cfgRoot = global.AnnounceCmd
  if (!cfgRoot || !Array.isArray(cfgRoot.list)) {
    console.error("[AnnounceCmd] config not found or invalid: global.AnnounceCmd.list")
    return
  }

  const defaults = cfgRoot.defaults ?? {}
  const messageColor = defaults.messageColor ?? "white"

  /* === 2) 実際にチャットへ流す処理（prefix / 本文 / sound） ==============
     - 送信フォーマットの責務をここに集約する（コマンドごとの差分は cfg の値だけ）
     - sound が null の場合は鳴らさない（cfg 側の設計どおり）
  ===================================================================== */
  function broadcast(server, c, msg) {
    const prefixText = c.prefix ?? ""
    const prefixColor = c.prefixColor ?? "white"

    // prefix 部分を作る（太字指定があれば反映）
    const prefix = Text.of(prefixText).color(prefixColor)
    if (c.boldPrefix) prefix.bold(true)

    // 本文を結合して全体送信
    server.tell(prefix.append(Text.of(msg).color(messageColor)))

    // 任意でサウンドを鳴らす（失敗してもコマンドを落とさない）
    if (c.sound) {
        const vol = Number.isFinite(c.soundVolume) ? c.soundVolume : 1
        const pit = Number.isFinite(c.soundPitch) ? c.soundPitch : 1

        try {
            server.players.forEach(p => {
            try {
                p.playNotifySound(c.sound, vol, pit)
            } catch (e) {
                console.warn(`[AnnounceCmd] playNotifySound failed for ${p.username} sound=${c.sound}: ${e}`)
            }
            })
        } catch (e) {
            console.warn(`[AnnounceCmd] sound block failed sound=${c.sound}: ${e}`)
        }
    }
  }

  /* === 3) 1コマンド分を cfg から登録する ================================
     - Brigadier のツリーを1つ作って event.register() する
     - 引数は「残り全部」を1引数として受け取る（スペース込み全文字列対応）
     - perm は cfg 指定を採用（未指定なら 2）
  ===================================================================== */
  function registerFromConfig(c) {
    if (!c || typeof c.cmd !== "string" || c.cmd.length === 0) {
      console.warn("[AnnounceCmd] skipped: invalid cmd in config:", c)
      return
    }

    event.register(
      Commands.literal(c.cmd)
        .requires(src => src.hasPermission((typeof c.perm === "number") ? c.perm : 2))
        .then(
          Commands.argument("message", Arguments.GREEDY_STRING.create(event))
            .executes(ctx => {
              const msg = Arguments.GREEDY_STRING.getResult(ctx, "message")
              broadcast(ctx.source.server, c, msg)
              return 1
            })
        )
    )
  }

  /* === 4) cfg.list を総なめで登録 =======================================
     - cfg 側にコマンドを追加したら自動で反映される
  ===================================================================== */
  cfgRoot.list.forEach(registerFromConfig)
})

