const argv = process.argv
const coordinatX = argv[2]
const coordinatY = argv[3]
// console.log(coordinatX + coordinatY)

function gameBoardBattleShip() {
  var row = []
  var count = 1
  console.log('     A    B    C    D    E    F    G    H    I    J ')
  var abjad = 'ABCD'
  for (let i = 1; i <= 10; i++) {
    var col = []
    for (let j = 1; j <= 10; j++) {
      col.push(abjad.charAt(Math.floor(Math.random() * abjad.length)))
      // count++
    }
    row.push(col)
  }
  
  return row
}
console.log(gameBoardBattleShip())
function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if (new Date().getTime() - start > milliseconds) {
      break;
    }
  }
}

function coordinatGame() {
  let gameBoard = gameBoardBattleShip()
  console.log(`Coordinat ${coordinatX}${coordinatY}`)
  let check = gameBoard[coordinatX][coordinatY]
  console.log(check)

}
coordinatGame()
































