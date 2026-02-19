//priority:0

/*
    server_scripts/src/recipe/hex_creative.js
    書いた人:シェイル
    HexCastingのクリエイティブアイテムのレシピを追加する
*/

ServerEvents.recipes(event => {
    event.shaped(
        'hexcasting:creative_unlocker',
        [
            'bBR',
            'BAB',
            'CBr'
        ],
        {
            A: 'hexcasting:akashic_record',
            B: Item.of('hexcasting:battery', '{ "hexcasting:media": 6400000L, "hexcasting:start_media": 6400000L }').strongNBT(),
            b: 'hexcasting:directrix/boolean',
            r: 'hexcasting:directrix/redstone',
            R: 'hexcasting:impetus/redstone',
            C: 'hexcasting:impetus/rightclick'
        }
    )
});