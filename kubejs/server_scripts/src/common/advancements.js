//priority:10

/*
    server_scripts/src/common/advancements.js
    書いた人:シェイル
    挑戦型称号のうち、「進捗」がトリガーになっているもの用
    ここでいっぺんに実装します
*/

PlayerEvents.advancement(event => {
    const { player, advancement } = event;

    WhatAdvancement('minecraft:nether/all_potions', global.TITLES.POTION);
    WhatAdvancement('minecraft:adventure/fall_from_world_height', global.TITLES.CAVE_CLIFF);
    WhatAdvancement('minecraft:adventure/spyglass_at_dragon', global.TITLES.PLANE);
    WhatAdvancement('minecraft:adventure/sniper_duel', global.TITLES.SNIPER);
    WhatAdvancement('lootr:100loot', global.TITLES.LOOTR);
    WhatAdvancement('farmersdelight:main/master_chef', global.TITLES.MASTERCHEF);
    WhatAdvancement('hexcasting:enlightenment', global.TITLES.HEX_INSIGHT);
    WhatAdvancement('hexcasting:creative_unlocker', global.TITLES.HEX_MASTER);
    WhatAdvancement('create:train_roadkill', global.TITLES.CREATE_ROADKILL);

    // 称号を付与するローカル関数
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

