//priority:1000

/*
    server_scripts/src/common/changeSavetype.js
    書いた人:シェイル
    旧保存形式から新保存形式への移行を済ませる
    サーバー起動時にserver.persistantDataを移行
    プレイヤーログイン時にplayer.persistantDataを移行する
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

    // 移行.
    Object.values(global.TITLES).forEach(title => {
        // 実装済挑戦型はスルー.
        if (!title.isRanking) return;

        // データ取得
        let oldScore = serverData[title.key + "_score"];
        let oldPlayer = serverData[title.key + "_player"];

        // データ移行.
        let newData = {
            score: oldScore || 0,
            player: oldPlayer || "None"
        };
        serverData.kings[title.key] = newData;

        console.info(`${file}${title.key}: ${oldScore} -> ${newData.score} へ移行`);
        console.info(`${file}${title.key}: ${oldPlayer} -> ${newData.player} へ移行`);

        // 旧形式のデータを削除.
        serverData.remove(title.key + "_score");
        serverData.remove(title.key + "_player");
    });

    // 各プレイヤー依存に変えるため削除.
    serverData.remove("firstVoidOccurred");
    serverData.remove("firstBamboogetted");
    console.info(`${file} 移行完了`);
})


// player.persistantData
PlayerEvents.loggedIn(event => {
    if (event.player.persistentData.isMoved) return;

    const { server, player } = event;
    const playerData = player.persistentData;
    const serverData = server.persistentData;

    console.info(`${file}プレイヤー ${player.name} (uuid:${player.uuid}) に関するセーブデータを新形式に移行します`);

    playerData.isMoved = true;

    // 初期化.
    if (!playerData.kings) playerData.kings = {};
    if (!playerData.kings.titles) playerData.kings.titles = [];     // 所持称号配列.
    if (!playerData.kings.data) playerData.kings.data = {};
    if (!playerData.kings.data.flag) playerData.kings.data.flag = {};       // boolean
    if (!playerData.kings.data.score) playerData.kings.data.score = {};     // int

    // -----データ移行-----
    // HERO 敵討伐数データ.
    if (playerData.monsterkill) {
        playerData.kings.data.score[global.TITLES.HERO.key] = playerData.monsterkill;
        playerData.remove("monsterkill");
    }

    // なぜかserver側に保存していたものをplayer管轄に移動(fallDeath,lavaDeath).
    const keysToMigrate = ["fallDeath", "lavaDeath"];

    keysToMigrate.forEach(keyName => {
        let oldKey = player.name + "_" + keyName;

        if (serverData.contains(oldKey)) {
            let value = serverData[oldKey];
            playerData.kings.data.score[keyName] = value; // fallDeath,lavaDeath共にkeyそのままなので大丈夫なはず...
            console.info(`${file}${serverData[oldKey]} から ${playerData.kings.data.score[keyName]} へ移行しました`);

            // サーバー側の古いデータを削除.
            serverData.remove(oldKey);
        }
    });

    // 種植え回数(農業王用個人スコア)
    let oldFarmerkey = player.name + "_seed";
    if (playerData.contains(oldFarmerkey)) {
        playerData.kings.data.score[global.TITLES.FARMER.key] = playerData[oldFarmerkey];
        console.info(`${file}${serverData[oldFarmerkey]} から ${playerData.kings.data.score[global.TITLES.FARMER.key]} へ移行しました`);
        playerData.remove(oldFarmerkey);
    }

    let oldTitleId = playerData.current_title_id;

    // 唯一解除済の挑戦型であるpandaに対する処理.
    if (oldTitleId == "PANDA") {
        // 多重取得を防ぐためのboolean
        playerData.kings.data.flag.firstBambooGetted = true;
    }

    // 現在の称号オブジェクトを取得
    if (oldTitleId && global.TITLES[oldTitleId]) {
        let titleObj = global.TITLES[oldTitleId];

        // 新形式の「現在の称号（key）」を保存
        playerData.kings.current = titleObj.key;

        // 所持リストになければ追加
        let currentTitles = playerData.kings.titles;
        if (!currentTitles.contains(titleObj.key)) {
            currentTitles.push(titleObj.key);
            playerData.kings.titles = currentTitles; // 書き戻し
        }
    }

    // 旧形態の「現在の称号」を示すものを削除.
    playerData.remove("current_title_id");
    console.info(`${file}${player.name} の移行が正常に完了しました`);
})