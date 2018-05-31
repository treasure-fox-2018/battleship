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
    let pos = randomCoordinates(ship);
    console.log(pos);
    if (pos.direction === 'right') {
      for (let j = pos.y; j < pos.endCoord; j++) {
        board[pos.x][j] = ship.alias;
      }
    } else if (pos.direction === 'left') {
      for (let j = pos.y; j > pos.endCoord; j--) {
        board[pos.x][j] = ship.alias;
      }
    } else if (pos.direction === 'down') {
      for (let j = pos.x; j < pos.endCoord; j++) {
        board[j][pos.y] = ship.alias;
      }
    } else if (pos.direction === 'up') {
      for (let j = pos.x; j > pos.endCoord; j--) {
        board[j][pos.y] = ship.alias;
      }
    }
  }
  return board;
}
// coordinates
function randomCoordinates(ship) {
  // returns x, y, endCoord, direction
  let x = 0, y = 0;
  let directions = ['right', 'left', 'up', 'down'];

  let direction = directions[Math.floor(Math.random() * directions.length)]
  x = Math.floor(Math.random() * 10);
  y = Math.floor(Math.random() * 10);

  if (direction === 'right') {
    endCoord = y + ship.size
  } else if (direction === 'left') {
    endCoord = y - ship.size
  } else if (direction === 'up') {
    endCoord = x + ship.size
  } else if (direction === 'down') {
    endCoord = x - ship.size
  }

  return {x, y, endCoord, direction}
}

// console.log(generateBoard(10))
console.log(generateShip(ships))