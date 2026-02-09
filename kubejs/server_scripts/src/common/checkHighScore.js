//priority:80

/*
    server_scripts/src/common/checkHighScore.js
    書いた人:シェイル
    数値を比較して称号の更新を行う
*/

/**
 * 数値で記録更新をチェックし、必要なら称号を付け替える共通関数
 * @param {Internal.Server} server サーバーオブジェクト
 * @param {Internal.Player} player 操作対象のプレイヤー
 * @param {number} currentScore 今回のスコア
 * @param {any} titleData 付与する称号データ（titles.jsを参照）
 */
global.checkHighScore = (server, player, currentScore, titleData) => {
    // 永続データから今のトップ情報を取得.
    let topScore = server.persistentData[titleData.key + "_score"] || 0;

    // 負荷軽減のために削除
    // console.info(`[${titleData.key}] Score: ${currentScore} / Record: ${topScore}`);

    // least未満なら何もしない
    if (currentScore < titleData.least) return;

    if (currentScore <= topScore) return;

    // 負荷軽減のために移動
    let topPlayerName = server.persistentData[titleData.key + "_player"] || "";

    // 同一プレイヤーならスコア更新のみ.
    if (player.username === topPlayerName) {
        server.persistentData[titleData.key + "_score"] = currentScore;
        return;
    }

    // 旧チャンピオンからの剥奪.
    if (topPlayerName !== "") {
        let oldChamp = server.getPlayer(topPlayerName);
        if (oldChamp) {
            global.ApplyTitle(oldChamp, global.TITLES.NONE);
            // oldChamp.tell(Text.red(`${categoryName}世界一の座を奪われました！`));
        }
    }

    // 新チャンピオンへの付与.
    global.CheckTitleRank(player, titleData);

    // 記録の保存.
    server.persistentData[titleData.key + "_score"] = currentScore;
    server.persistentData[titleData.key + "_player"] = player.username;

    // 通知用変換.
    let prefix = titleData.display || "";

    // 全員通知.
    server.tell(Text.gold(`[速報] ${player.username} がスコア ${currentScore} で新「${prefix}」になりました！`));

};