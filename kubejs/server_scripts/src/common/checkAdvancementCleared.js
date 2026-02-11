//priority:10

/*
    server_scripts/src/common/checkAdvancementCleared.js
    書いた人:シェイル
    挑戦型称号のうち、「進捗」がトリガーになっているもの用
    すでにそのプレイヤーが達成していた場合一斉に付与
*/

PlayerEvents.loggedIn(event => {
    const { player } = event;

    // 新しい「進捗」トリガーの挑戦型実績が増えた場合は一応ここに進捗のIDを書き加えてください
    const advancementsData = {
        Potion: { id: 'minecraft:nether/all_potions', titles: global.TITLES.POTION },
        Cave_cliff: { id: 'minecraft:adventure/fall_from_world_height', titles: global.TITLES.CAVE_CLIFF },
        Plane: { id: 'minecraft:adventure/spyglass_at_dragon', titles: global.TITLES.PLANE },
        Sniper: { id: 'minecraft:adventure/sniper_duel', titles: global.TITLES.SNIPER },
        Lootr: { id: 'lootr:100loot', titles: global.TITLES.LOOTR },
        Masterchef: { id: 'farmersdelight:main/master_chef', titles: global.TITLES.MASTERCHEF },
        Hex_insight: { id: 'hexcasting:enlightenment', titles: global.TITLES.HEX_INSIGHT },
        Hex_master: { id: 'hexcasting:creative_unlocker', titles: global.TITLES.HEX_MASTER },
        Create_roadkill: { id: 'create:train_roadkill', titles: global.TITLES.CREATE_ROADKILL }
    };

    advancementsData.forEach(element => {
        WhatAdvancement(element.id, element.titles);
    });

    function WhatAdvancement(adv_id, titleData) {
        if (player.persistentData.kings && player.persistentData.kings.flags) {
            if (player.persistentData.kings.flags[titleData.key]) return;
        }

        if (advancement.getId() != adv_id) return;

        player.persistentData.kings.flags[titleData.key] = true;
        player.tell(`§o§l§cお§eめ§aで§bと§9う！§r §l貴方は、称号${titleData.display}§lを手に入れました！§r`);
        global.ApplyTitle(player, titleData);
    }
})