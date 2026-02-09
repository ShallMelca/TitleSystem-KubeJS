//priority:1000

/*
    server_scripts/src/common/changeSavetype.js
    書いた人:シェイル
    旧保存形式から新保存形式への移行を済ませる
    サーバー起動時にserver.persistantDataを
    プレイヤーログイン時にplayer.persistantDataを
    それぞれ一度のみ実行
*/

let file = "[changeSavetype] "

// server.persistantaData
ServerEvents.loaded(event => {
    const { server } = event;

    if (server.persistentData.isMoved) return;
    console.info(`${file}サーバーセーブデータを新形式に移行します`);

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
        console.info(`${file}${serverData[title.key + "_score"]} から ${serverData.kings.score[title.key]} へ移行しました`);
        console.info(`${file}${serverData[title.key + "_player"]} から ${serverData.kings.player[title.key]} へ移行しました`);

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

    console.info(`${file}プレイヤー ${player.name} (uuid:${player.uuid})さんに関するセーブデータを新形式に移行します`);

    playerData.isMoved = true;

    // 初期化
    if (!playerData.kings) playerData.kings = {};
    if (!playerData.kings.titles) playerData.kings.titles = {};
    if (!playerData.kings.data) playerData.kings.data = {};

    // 移行
    playerData.kings.data[global.TITLES.HERO.key] = playerData.monsterkill;
    console.info(`${file}${playerData.monsterkill} から ${playerData.kings.data[global.TITLES.HERO.key]} へ移行しました`);

    // なぜかserver側に保存していたものをplayer管轄に移動
    const keysToMigrate = ["fallDeath", "lavaDeath"];

    keysToMigrate.forEach(keyName => {
        // 旧形式のキー（PlayerName_fallDeath）を作成.
        let oldKey = player.name + "_" + keyName;

        if (serverData.contains(oldKey)) {
            // サーバー側から値を取得.
            let value = serverData[oldKey];

            // プレイヤー側のデータに保存.
            playerData.kings.data[keyName] = value; // fallDeath,lavaDeath共にkeyそのままなので大丈夫なはず...

            console.info(`${file}${serverData[oldKey]} から ${playerData.kings.data[keyName]} へ移行しました`);

            // サーバー側の古いデータを削除.
            serverData.remove(oldKey);
        }
    });

    // 種植え回数(農業王)
    if (playerData[player.name + "_seed"]) {
        playerData.kings.data[global.TITLES.FARMER.key] = playerData[player.name + "_seed"];
        console.info(`${file}${serverData[player.name + "_seed"]} から ${playerData.kings.data[global.TITLES.FARMER.key]} へ移行しました`);
        playerData.remove(`${player.name}_seed`);
    }

    // 唯一解除済の挑戦型であるpandaに対する処理
    if (playerData.current_title_id == "PANDA") {
        // 解放済リストに入れる
        let titleList = playerData.kings.titles;
        titleList.push(global.TITLES.PANDA.key);
        playerData.kings.titles = titleList;
    }

    playerData.kings.current_title_id == global.TITLES[playerData.current_title_id];
})