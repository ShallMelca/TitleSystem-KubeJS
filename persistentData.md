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

<br>

# 新版
## 各ランキング称号について
* server.persistentData
  * .kings
    * .mining     (TITLES.MINING.key)
      * .score = (int)
      * .player = (str)
    * .seichi
      * .score
      * .player
    * ...

## 挑戦型称号について
* player.persistentData
  * .kings
    * .titles       (所持称号リスト)
      * [
      * "mining",    (TITLES.MINING.key)
      * "panda",     (TITLES.PANDA.key)
      * ...
      * ]
    * .current
      * = "mining"  (TITLES.MINING.key)
    * .data
      * .flags
        * .megatoncoin  (TITLES.MEGATONCOIN.key)
          * = bool
        * .panda        (TITLES.PANDA.key)
          * = bool
        * ...
      * .score
        * .monsterkill  (TITLES.HERO.key)
          * =int        (モンスターを倒した数)
        * .fallDeath
          * = int       (落下死の回数)
        * .lavaDeath
          * = int       (溶岩死の回数)
        * .farmer
          * = int       (種を植えた回数)
        * ...