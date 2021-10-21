const emojis: { [key: string]: string } = {
    ":GMSadieSmile:": "<:GMSadieSmile:566395441990729738>",
    ":GMRayAngry:": "<:GMRayAngry:566398157152452644>",
    ":GMEliAngry:": "<:GMEliAngry:715792858736623626>",
    ":GMSadieAngry:": "<:GMSadieAngry:566402859629936650>",
    ":GMSadieFU:": "<:GMSadieFU:566405064491532321>",
    ":GMRayUninterested:": "<:GMRayUninterested:566409177082101821>",
    ":GMEliScared:": "<:GMEliScared:566411112937947153>",
    ":GMSadieExcited:": "<:GMSadieExcited:566414391193370638>",
    ":GMKrystalDevious:": "<:GMKrystalDevious:566416957054910521>",
    ":GMRayAstonished:": "<:GMRayAstonished:566419587776905216>",
    ":GMSadieTheSadist:": "<:GMSadieTheSadist:566422293870411776>",
    ":GMEliExcited:": "<:GMEliExcited:566424962425028609>",
    ":GMRayAnnoyed:": "<:GMRayAnnoyed:715808792616370217>",
    ":GMRayCrying:": "<:GMRayCrying:566752383724421131>",
    ":GMCerberusSmile:": "<:GMCerberusSmile:566753743488548864>",
    ":GMRayFakLeft:": "<:GMRayFakLeft:566755794247483422>",
    ":GMKrystal:": "<:GMKrystal:566758843481063425>",
    ":GMEliPopcorn1:": "<:GMEliPopcorn1:566766798243102720>",
    ":GMEliPopcorn2:": "<:GMEliPopcorn2:566766809555009536>",
    ":GMEliPopcorn3:": "<:GMEliPopcorn3:566766821458444298>",
    ":GMKayleeDrinking:": "<:GMKayleeDrinking:612793370041122843>",
    ":ESDiamondTongue:": "<:ESDiamondTongue:612808224348831745>",
    ":GMRayCrying2:": "<:GMRayCrying2:613169479370932244>",
    ":GMSadieTongue:": "<:GMSadieTongue:613169532189671465>",
    ":GMRayFakRight:": "<:GMRayFakRight:614285413384978432>",
    ":ESDiamondPerplexed:": "<:ESDiamondPerplexed:614743716854366208>",
    ":ESKainConfident:": "<:ESKainConfident:614743718398001163>",
    ":GTHariSmug:": "<:GTHariSmug:614743720960720897>",
    ":GTHariAngry:": "<:GTHariAngry:614743721631547392>",
    ":GTAngelListening:": "<:GTAngelListening:614743722814472192>",
    ":GTAngelScared:": "<:GTAngelScared:614743723351474176>",
    ":ESDiamondSmile:": "<:ESDiamondSmile:614743724752109568>",
    ":GTKikoSmug:": "<:GTKikoSmug:614743724836126721>",
    ":GTAngelAngry:": "<:GTAngelAngry:614743725465272348>",
    ":GTHariAnnoyed:": "<:GTHariAnnoyed:614743726337556480>",
    ":GTAngelSomber:": "<:GTAngelSomber:614743726337687552>",
    ":GTAndreaTongue:": "<:GTAndreaTongue:614743726668906506>",
    ":ESDiamondSmug:": "<:ESDiamondSmug:614743727117697036>",
    ":GTAngelNervous:": "<:GTAngelNervous:614743728141238293>",
    ":GTAngelHappy:": "<:GTAngelHappy:614743728959258683>",
    ":GTKairiConfident:": "<:GTKairiConfident:614743730351636480>",
    ":GTAngelScared2:": "<:GTAngelScared2:614743730649301003>",
    ":GTAngelSmile:": "<:GTAngelSmile:614743731123519522>",
    ":GTAngelWorried:": "<:GTAngelWorried:614743731203211304>",
    ":GMRayRelief:": "<:GMRayRelief:614792688432054274>",
    ":GMRayinternalscreaming:": "<:GMRayinternalscreaming:614792924349333514>",
    ":GMSadieHasAHeart:": "<:GMSadieHasAHeart:614917123667656707>",
    ":GMCerberusSmug:": "<:GMCerberusSmug:615731375852617728>",
    ":GMCerberusScared:": "<:GMCerberusScared:615733200018341908>",
    ":GMAnkiHappy:": "<:GMAnkiHappy:615733852870148126>",
    ":GMRayConfident:": "<:GMRayConfident:715785515734925383>",
    ":GMSadieTheSadist2:": "<:GMSadieTheSadist2:715786770414960671>",
    ":GMSadieCry:": "<:GMSadieCry:715801187844358145>",
    ":GMSadieScream:": "<:GMSadieScream:715801754897219656>",
    ":GMDragonConfused:": "<:GMDragonConfused:715801783682728006>",
    ":GMRayEffort:": "<:GMRayEffort:715803074223931412>",
    ":GMRayEhEh:": "<:GMRayEhEh:715805139104956426>",
    ":GMRayEw:": "<:GMRayEw:715807637949644882>",
    ":GMEliPlsntlySurprsd:": "<:GMEliPlsntlySurprsd:715809613949304843>",
    ":GMCrystal:": "<:GMCrystal:716026444920127599>",
    ":GMCerberusJump:": "<:GMCerberusJump:716026605897515032>",
    ":GMEliScared2:": "<:GMEliScared2:716026606220476437>",
    ":GMAnkiJump:": "<:GMAnkiJump:716026606333984848>",
    ":GMSadieDevious:": "<:GMSadieDevious:716026607189360731>",
    ":GMSadieSmug:": "<:GMSadieSmug:716027531345788958>",
    ":GMSadieCry2:": "<:GMSadieCry2:716029272065572947>",
    ":GMKrystalTongue:": "<:GMKrystalTongue:716029315183280188>",
    ":GMBelleNotificationNew:": "<:GMBelleNotificationNew:724792043880055094>",
    ":GMBelleAngry:": "<:GMBelleAngry:725497376932102194>",
    ":GMCrystalEw:": "<:GMCrystalEw:727080470248030208>",
    ":GMCerberyComputer:": "<:GMCerberyComputer:736401192003043367>",
    ":GMCrystalScared1:": "<:GMCrystalScared1:736412410470203433>",
    ":GMBelleSalty:": "<:GMBelleSalty:736415284021166170>",
    ":GMKayleeScared:": "<:GMKayleeScared:736416258668363866>",
    ":GMCrystalScared3:": "<:GMCrystalScared3:739581799734182071>",
    ":GMSadieExplain:": "<:GMSadieExplain:739586426630307901>",
    ":GMCrystalScared3FullBody:": "<:GMCrystalScared3FullBody:739590524855386193>",
    ":GMMinigun:": "<:GMMinigun:745080266598383659>",
    ":GMCrystalFacemask:": "<:GMCrystalFacemask:748522062858944514>",
    ":GMKrystalFacemask:": "<:GMKrystalFacemask:748522150734069782>",
    ":GMEliExplainFullBody:": "<:GMEliExplainFullBody:753955979715936376>",
    ":GMRayHappyFullBody:": "<:GMRayHappyFullBody:753956454507216916>",
    ":GMPopcorn:": "<:GMPopcorn:760338946273050675>",
    ":GMSadieSquint:": "<:GMSadieSquint:778489403555184654>",
    ":GMCrystalClear:": "<:GMCrystalClear:779392924437315655>",
    ":GMCrystalTwisted:": "<:GMCrystalTwisted:781219110796787742>",
    ":GMKatty:": "<:GMKatty:850431544279171133>",
    ":GMKattySmug:": "<:GMKattySmug:850431544559927366>",
    ":GMKattyLaugh:": "<:GMKattyLaugh:850431544731500604>",
    ":GMKattySmugConfidence:": "<:GMKattySmugConfidence:850431545949159464>",
    ":GMSadieAnnoyed:": "<:GMSadieAnnoyed:850431546556809257>",
    ":GMSadieHappy:": "<:GMSadieHappy:850431547823095859>",
    ":GMKattySmugLaugh:": "<:GMKattySmugLaugh:850431547903442994>",
    ":GMSadieMadTime:": "<:GMSadieMadTime:850431547928608819>",
    ":GMRayLove:": "<:GMRayLove:850431547961638972>",
    ":GMKattyUwu:": "<:GMKattyUwu:850431548099657738>",
    ":GMSadieEvilSmug:": "<:GMSadieEvilSmug:850431548134391829>",
    ":GMRayScared:": "<:GMRayScared:850431548599304285>",
    ":GMSadieISleep:": "<:GMSadieISleep:850431548633382972>",
    ":rock:": "<:stone:725123426687123516>",
    ":paper:": "<:paper:725123426452242482>",
    ":scissors:": "✂️",
}

export default emojis;