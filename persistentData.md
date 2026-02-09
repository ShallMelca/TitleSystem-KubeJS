# 現在の保存状況(称号関係)

## 各ランキング称号について
スコア　　：`server.persistentData[titleKey + _score]`　　 checkHighScore.js<br>
プレイヤー：`server.persistentData[titleKey + _player]`　　checkHighScore.js<br>

## プレイヤーの現在の称号
`player.persistentData.current_title_id`　　applyTitle.js<br>

## その他称号ごとのデータ
`server.persistentData.firstVoidOccurred`　　　　　　dropintovoid.js<br>
`server.persistentData[player.name + "_fallDeath"]`　falldeath.js<br>
`player.persistentData[player.name + "_seed"]`　　　  farmer.js<br>
`player.persistentData.monsterkill`　　　　　　　　　hero.js<br>
`server.persistentData[player.name + "_lavaDeath"]`　lava-swimming.js<br>
`server.persistentData.firstBamboogetted`　　　　　　panda.js<br>