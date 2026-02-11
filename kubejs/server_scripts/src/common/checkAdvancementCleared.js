//priority:10

/*
    server_scripts/src/common/checkAdvancementCleared.js
    書いた人:シェイル
    挑戦型称号のうち、「進捗」がトリガーになっているもの用
    すでにそのプレイヤーが達成していた場合一斉に付与
*/

PlayerEvents.loggedIn(event => {
    const { player, server } = event;

    // 新しい「進捗」トリガーの挑戦型実績が増えた場合は一応ここに進捗のIDを書き加えてください
    const advancementsData = [
        { id: 'minecraft:nether/all_potions', titles: global.TITLES.POTION },
        { id: 'minecraft:adventure/fall_from_world_height', titles: global.TITLES.CAVE_CLIFF },
        { id: 'minecraft:adventure/spyglass_at_dragon', titles: global.TITLES.PLANE },
        { id: 'minecraft:adventure/sniper_duel', titles: global.TITLES.SNIPER },
        { id: 'lootr:100loot', titles: global.TITLES.LOOTR },
        { id: 'farmersdelight:main/master_chef', titles: global.TITLES.MASTERCHEF },
        { id: 'hexcasting:enlightenment', titles: global.TITLES.HEX_INSIGHT },
        { id: 'hexcasting:creative_unlocker', titles: global.TITLES.HEX_MASTER },
        { id: 'create:train_roadkill', titles: global.TITLES.CREATE_ROADKILL }
    ];

    advancementsData.forEach(element => {
        WhatAdvancement(element);
    });

    function WhatAdvancement(elem) {
        if (player.persistentData.kings && player.persistentData.kings.flags) {
            if (player.persistentData.kings.flags[elem.titles.key]) return;
        }

        let adv = server.advancements.getAdvancement(elem.id);
        if (!adv) return;
        player.persistentData.kings.flags[elem.titles.key] = true;
        player.tell(`§o§l§cお§eめ§aで§bと§9う！§r §l貴方は、称号${elem.titles.display}§lを手に入れました！§r`);
        global.ApplyTitle(player, elem.titles);
    }
})