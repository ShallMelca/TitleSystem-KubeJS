//priority:0

/*
    server_scripts/src/recipe/cactus.js
    書いた人:シェイル
    サボテン
*/

ServerEvents.recipes(event => {
    event.shapeless(
        'minecraft:cactus',
        [
            'minecraft:sand',
            'minecraft:water_bucket'
        ]
    )
});