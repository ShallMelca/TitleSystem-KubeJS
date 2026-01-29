/*
    server_scripts/src/dig_king.js
    採掘王
*/

BlockEvents.broken(event => {
    const { player, block, server } = event;
    if (!player) return;

    if (block.id === 'minecraft:stone' || block.id === 'minecraft:deepslate') {
        // 1. 現在のプレイヤーの合計採掘数を取得.
        let stone = player.stats.getBlocksMined('stone');
        let deepslate = player.stats.getBlocksMined('deepslate');
        let currentScore = stone + deepslate;

        if( currentScore < 512) return;
        player.tell(`[dig_king] Score: ${currentScore} / Record: ${topScore}`);
        // 2. サーバー共有データから現在の「最高記録」と「保持者」を取得
        // 初回実行時は 0 と空の名前が入るようにします.
        let topScore = server.persistentData.mining_top_score || 0;
        let topPlayerName = server.persistentData.mining_top_player || "";

        // 3. 記録更新の判定.
        if (currentScore > topScore) {
            // 既に自分がチャンピオンなら、スコアだけ更新して終了.
            if (player.username === topPlayerName) {
                server.persistentData.mining_top_score = currentScore;
                return;
            }

            // --- 新チャンピオン誕生の処理 ---

            // A. 旧チャンピオンから称号を剥奪(もしオンラインなら)
            if (topPlayerName !== "") {
                let oldChamp = server.getPlayer(topPlayerName);
                if (oldChamp) {
                    global.applyTitle(oldChamp, global.TITLES.NONE); // 白（無称号）に戻す.
                    oldChamp.tell(Text.red("採掘世界一の座を奪われました！"));
                }
            }

            // B. 新チャンピオン（今のプレイヤー）に称号を付与.
            global.applyTitle(player, global.TITLES.DIG_KING);

            // C. サーバー記録を更新.
            server.persistentData.mining_top_score = currentScore;
            server.persistentData.mining_top_player = player.username;

            // D. 全員に通知.
            server.tell(Text.gold(`[速報] ${player.username} が合計採掘数 ${currentScore}個 で新「採掘王」になりました！`));
        }
    }
});