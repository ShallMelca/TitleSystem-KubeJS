//priority:0

/*
    server_scripts/src/recipe/sapling.js
    書いた人:シェイル
    苗木を変換する
*/

ServerEvents.recipes(event => {
    // 変換対象にする苗木のリスト
    const saplings = [
        'minecraft:oak_sapling',
        'minecraft:spruce_sapling',
        'minecraft:birch_sapling',
        'minecraft:jungle_sapling',
        'minecraft:acacia_sapling',
        'minecraft:dark_oak_sapling',
        'minecraft:cherry_sapling',
        'minecraft:mangrove_propagule'
    ]

    // 二重ループによる全パターンの生成
    saplings.forEach(input => {
        saplings.forEach(output => {
            // 入力と出力が同じアイテムでない場合のみレシピを登録
            if (input !== output) {
                event.stonecutting(output, input)
            }
        })
    })
});