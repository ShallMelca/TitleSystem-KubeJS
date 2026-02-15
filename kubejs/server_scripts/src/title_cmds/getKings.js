/*
    server_scripts/src/title_cmds/getKings.js
    書いた人:みち
    ランク型称号の一覧を見る
*/

// ServerEvents.commandRegistry(event => {
//   const { commands: Commands } = event;

//   event.register(
//     Commands.literal("titles")
//       .then(
//         Commands.literal("getKings")
//           .requires(src => src.hasPermission(2))
//           .executes(ctx => {
//             const sender = ctx.source.player;
//             const server = ctx.source.server;

//             /**TODO
//              * アナウンスに音追加
//              * キングを1人にするようにしたい
//              */
//           })
//       )
//   )
// })