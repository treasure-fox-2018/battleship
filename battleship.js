// Your code here
const row = +process.argv[2]
const col = +process.argv[3]


function boardGame() {
    var dict = 'abcdefghij'
    var board = []
    for (let i = 0; i < row; i++) {
        var boardCol = []
        for (let j = 0; j < col; j++) {
            boardCol.push(`${dict[j]}${i+1}`)
        }
        board.push(boardCol)
    }
    return board
}

console.log(boardGame());
