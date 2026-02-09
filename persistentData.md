# 現在の保存状況(称号関係)

## 各ランキング称号について
スコア　　：`server.persistentData[titleKey + _score]`　　 checkHighScore.js
プレイヤー：`server.persistentData[titleKey + _player]`　　checkHighScore.js

## プレイヤーの現在の称号
`player.persistentData.current_title_id`　　applyTitle.js

## その他称号ごとのデータ
`server.persistentData.firstVoidOccurred`　　　　　　dropintovoid.js
`server.persistentData[player.name + "_fallDeath"]`　falldeath.js
`player.persistentData[player.name + "_seed"]`　　　  farmer.js
`player.persistentData.monsterkill`　　　　　　　　　hero.js
`server.persistentData[player.name + "_lavaDeath"]`　lava-swimming.js
`server.persistentData.firstBamboogetted`　　　　　　panda.js