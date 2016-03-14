![paddle-app](paddle-icon.jpg)

# Paddle - Api 

### Player Model
*	playerId: Int
*	firstName: String
*	lastName: String
*	numberOfMatches: Int
*	totalLosses: Int
*	totalWins: Int
*	rank: Int
*	leagueId: Int

### Match Model
* 	mactchId: Int
*	winner: PlayerId or String
*	dateTime: Date
* 	loser: PlayerId or String
*	gameType: GameId

### Game Model
*	gameTypeId: Int
* 	gameTypeDescription: String
*	gameTypeName: String

### league Model
*	leagueId: Int
* 	leagueDescription: String
*	leagueCreatedDate: Date


