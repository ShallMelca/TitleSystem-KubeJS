//priority:0

/*
    server_scripts/src/recipe/allay_spawnegg.js
    書いた人:シェイル
    アレイのスポーンエッグ
*/

ServerEvents.recipes(event => {
    event.shaped(
        'minecraft:allay_spawn_egg',
        [
            'CBC',
            'BEB',
            'CBC'
        ],
        {
            E: 'minecraft:egg',
            B: Item.of('hexcasting:battery', '{ "hexcasting:media": 200000L, "hexcasting:start_media": 200000L }').strongNBT(),
            C: 'hexcasting:charged_amethyst'
        }
    )
});