// Your code here

function makeBoard(row,col){
	let boardGame = []
	for(let i = 0; i < row; i++){
		let boardGameCol = []
		for(let i = 0; i < col; i++){
			boardGameCol.push(' ')
		}

		boardGame.push(boardGameCol)
	}

	return boardGame
}

let col = 'ABCDEFGHIJ'
function checkingShip(){
	var enemnyRow = Mathfloor(Math.random()*10)
	var enemnyCol = col.substr(Math.floor(Math.random()),1)
	var boardGame = makeBoard(10,10)
	var position = playerGuess

	for(let i = 0; i < boardGame.length; i++){

		if(+position[i][1] === enemnyRow && +position[i][0] === i){
			for(let j = 0; j < position.length;j++){

				for(let k = 0; k < col.length; k++){

				if(position[0] === col[k] && col[k] === enemnyCol){
					boardGame[i][k] = 'X'
				} else position[0] !== col[k]{
							boardGame[i][k] = '/'
				}
				
			}
		}
	}
}

console.log(boardGame)

var argv = process.argv
var playerGuess = []
for(let i = 0; i < argv.length; i++){
	playerGuess.push(argv[i])
}