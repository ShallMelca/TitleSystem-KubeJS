//priority:1000

/*
    server_scripts/src/common/changeSavetype.js
    書いた人:シェイル
    旧保存形式から新保存形式への移行を済ませる
    サーバー起動時にserver.persistantDataを
    プレイヤーログイン時にplayer.persistantDataを
    それぞれ一度のみ実行
*/

// server.persistantaData
ServerEvents.loaded(event => {
    const { server } = event;

    if (server.persistentData.isMoved) return;

    const serverData = server.persistentData;

    serverData.isMoved = true;

    // 初期化.
    if (!serverData.kings) serverData.kings = {};
    if (serverData.kings.score) serverData.kings.score = {};
    if (!serverData.kings.player) serverData.kings.player = {};

    // 移行.
    Object.values(global.TITLES).forEach(title => {
        // 実装済挑戦型はスルー.
        if (!title.isRanking) return;

        // データ移行.
        serverData.kings.score[title.key] = serverData[title.key + "_score"];
        serverData.kings.player[title.key] = serverData[title.key + "_player"];

        // 旧形式のデータを削除.
        serverData.remove(title.key + "_score");
        serverData.remove(title.key + "_player");
    });

    // 各プレイヤー依存に変えるため削除.
    serverData.remove("firstVoidOccurred");
    serverData.remove("firstBamboogetted");
})


// player.persistantData
PlayerEvents.loggedIn(event => {
    if (event.player.persistentData.isMoved) return;

    const { server, player } = event;
    const playerData = player.persistentData;
    const serverData = server.persistentData;

    playerData.isMoved = true;

    // 初期化
    if (!playerData.kings) playerData.kings = {};
    if (!playerData.kings.titles) playerData.kings.titles = {};
    if (!playerData.kings.data) playerData.kings.data = {};

    // 移行
    playerData.kings.data[global.TITLES.HERO.key] = playerData.monsterkill;

    const keysToMigrate = ["fallDeath", "lavaDeath"];

    keysToMigrate.forEach(keyName => {
        // 旧形式のキー（PlayerName_fallDeath）を作成.
        let oldKey = player.username + "_" + keyName;

        if (serverData.contains(oldKey)) {
            // サーバー側から値を取得.
            let value = serverData[oldKey];

            // プレイヤー側のデータに保存.
            playerData.kings.data[keyName] = value; // fallDeath,lavaDeath共にkeyそのままなので大丈夫なはず...

            // サーバー側の古いデータを削除.
            serverData.remove(oldKey);
        }
    });

    if (playerData.current_title_id == "PANDA") {
        playerData.kings.titles += global.TITLES.PANDA.key;
    }

})