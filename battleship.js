// Your code here
// ship data
let ships = [
  { name: 'Aircraft carrier', size: 5, alias: 'A' }, 
  { name: 'Battleship', size: 4, alias: 'B' }, 
  { name: 'Cruiser', size: 3, alias: 'C' }, 
  { name: 'Destroyer', size: 2, alias: 'D' }
]
// generate board
function generateBoard(len) {
  let board = [];
  for (let i = 0; i < len; i++) {
    board.push([])
    for (let j = 0; j < len; j++) {
      board[i].push(' ')
    }
  }
  return board;
}
// generate ship
function generateShip(ships) {
  let board = generateBoard(10);
  for (let i = 0; i < ships.length; i++) {
    let ship = ships[i];
    for (let j = 0; j < ship.size; j++) {
      board[i][j] = ship.alias;
    }
  }
  return board;
}
// coordinates

// console.log(generateBoard(10))
console.log(generateShip(ships))