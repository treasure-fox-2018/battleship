var alphabet = 'ABCDEFGHIJ';
var argv = process.argv;
var attacks = [];
for (let i = 2; i < argv.length; i++) {
  attacks.push(argv[i]);
}

var shipBoard = [];

for (let i = 1; i <= 10; i++) {
  var shipMap = [];
  for (let j = 0; j < 10; j++) {
    shipMap.push(``);
  }
  shipBoard.push(shipMap);
}

var shipsArr = [
                {type: 'AircraftCarrier', size: 5},
                {type: 'Battleship', size: 4},
                {type: 'Cruiser', size: 3},
                {type: 'Destroyer', size: 2}
               ];

for (let i = 0; i < shipsArr.length; i++) {
  var shipSize = shipsArr[i].size;
  var shipType = shipsArr[i].type;
}

var jumlahShip = shipsArr.length;




function print_board(){
  console.log('     A   B   C   D   E   F   G   H   I   J');
  console.log('   +---------------------------------------+ ');
  for (let l = 1; l < 10; l++) {
    console.log(` ${l} |${print_line().join('')}`);
    console.log(`   |---|---|---|---|---|---|---|---|---|---|`);
  }
  console.log(`${10} |${print_line().join('')}`);
  console.log('   +---------------------------------------+ ');
}

function print_line(){
  var blok = [];
  for (let i = 1; i <= 10; i++) {
    blok.push(`   |`);
  }
  return blok;
}

function ship_placement(){
  var indexRow = randomize();
  var indexCol = randomize();
    for (let i = 0; i < shipsArr.length; i++) {
      var target = shipBoard[randomize()][randomize()];
      if (shipBoard[indexRow][indexCol] === '' ) {
        if (checkUp(indexRow, indexCol, shipsArr[i].size)) {
          for (let j = 0; j < shipsArr[j].size ; j++) {
            shipBoard[indexRow-j][indexCol] += 'U';
          }
        }else if (checkDown(indexRow, indexCol, shipsArr[i].size)) {
          for (let j = 0; j < shipsArr[j].size ; j++) {
            shipBoard[indexRow+j][indexCol] += 'D';
          }
        }else if (checkLeft(indexRow, indexCol, shipsArr[i].size)) {
          for (let j = 0; j < shipsArr[j].size ; j++) {
            shipBoard[indexRow][indexCol-j] += 'L';
          }
        }else if (checkRight(indexRow, indexCol, shipsArr[i].size)) {
          for (let j = 0; j < shipsArr[j].size ; j++) {
            shipBoard[indexRow][indexCol+j] += 'R';
          }
        }
      }
    }
  return shipBoard;
}

function checkUp(indexR,indexC,shipLength){
  var checker = false;
  for (let i = 0; i < shipLength; i++) {
    if (shipBoard[indexR-i] === undefined) {
      checker = false
    }else if (shipBoard[indexR-i][indexC] === '') {
      checker = true;
    }
  }
  return checker;
}

function checkDown(indexR,indexC,shipLength){
  var checker = false;
  for (let i = 0; i < shipLength; i++) {
    if (shipBoard[indexR+i] === undefined) {
      checker = false
    }else if (shipBoard[indexR+i][indexC] === '') {
      checker = true;
    }
  }
  return checker;
}

function checkLeft(indexR,indexC,shipLength){
  var checker = false;
  for (let i = 0; i < shipLength; i++) {
    if (shipBoard[indexC-i] === undefined) {
      checker = false
    }else if (shipBoard[indexR][indexC-i] === '') {
      checker = true;
    }
  }
  return checker;
}

function checkRight(indexR,indexC,shipLength){
  var checker = false;
  for (let i = 0; i < shipLength; i++) {
    if (shipBoard[indexC+i] === undefined) {
      checker = false
    }else if (shipBoard[indexR][indexC+i] === '') {
      checker = true;
    }
  }
  return checker;
}


function randomize(){
  return Math.floor(Math.random()*shipBoard.length);
}

console.log(ship_placement());
