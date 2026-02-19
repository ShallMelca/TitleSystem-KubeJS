//priority:0

/*
    server_scripts/src/recipe/cocoa_beans.js
    書いた人:シェイル
    カカオ豆
*/

ServerEvents.recipes(event => {
    event.shapeless(
        'minecraft:cocoa_beans',
        [
            'minecraft:melon_seeds',
            '2x minecraft:sweet_berries'
        ]
    )
});