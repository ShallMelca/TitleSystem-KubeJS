//priority:1

/*
    server_scripts/src/titles/hero.js
    書いた人:シェイル
    勇者
*/


EntityEvents.death(event => {
    // 攻撃者がプレイヤーでないなら即終了.
    if (!event.source.actual || !event.source.actual.isPlayer()) return;

    // 死んだのが「モンスター」かどうかを判定.
    if (!event.entity.isMonster()) return;

    const { source, server } = event;
    const player = source.actual;

    let currentKill = (player.persistentData.monsterkill || 0) + 1;
    player.persistentData.monsterkill = currentKill;

    global.checkHighScore(server, player, currentKill, global.TITLES.HERO);
});