//priority:1

/*
    server_scripts/src/titles/hero.js
    書いた人:シェイル
    ランキング型
    勇者
*/


EntityEvents.death(event => {
    // 攻撃者がプレイヤーでないなら即終了.
    if (!event.source.actual || !event.source.actual.isPlayer()) return;

    // 死んだのが「モンスター」かどうかを判定.
    if (!event.entity.isMonster()) return;

    const { source } = event;
    if (!source.player.persistentData.kings) source.player.persistentData.kings = {};
    if (!source.player.persistentData.kings.data) source.player.persistentData.kings.data = {};
    const player = source.actual;

    let currentKill = (player.persistentData.kings.data.monsterkill || 0) + 1;
    player.persistentData.kings.data.monsterkill = currentKill;

    global.checkHighScore(player, currentKill, global.TITLES.HERO);
});