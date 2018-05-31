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
    shipMap.push(`${alphabet[j]}${i}`);
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
  var target = shipBoard[randomize()][randomize()];
  if (shipBoard[indexRow][indexCol] !== '') {
    for (let i = 0; i < shipsArr.length; i++) {
      if (checkUp(indexRow, indexCol, shipsArr[i].size)) {
        for (let i = 0; i < shipsArr[i].size ; i++) {
          shipBoard[indexRow][indexCol+i] += 'asd';
        }
      }else if (checkDown(indexRow, indexCol, shipsArr[i].size)) {
        for (let i = 0; i < shipsArr[i].size ; i++) {
          shipBoard[indexRow][indexCol-i] += 'asd';
        }
      }else if (checkUp(indexRow, indexCol, shipsArr[i].size)) {
        for (let i = 0; i < shipsArr[i].size ; i++) {
          shipBoard[indexRow+i][indexCol] += 'asd';
        }
      }else if (checkUp(indexRow, indexCol, shipsArr[i].size)) {
        for (let i = 0; i < shipsArr[i].size ; i++) {
          shipBoard[indexRow-i][indexCol] += 'asd';
        }
      }
    }
  }
}

function checkUp(indexRow,indexCol,shipLength){
  for (let i = 0; i < shipLength; i++) {
    if (shipBoard[indexRow][indexCol+i] !== '' || shipBoard[indexRow][indexCol+i] !== undefined ) {
      return true;
    }
  }
  return false;
}

function checkDown(indexRow,indexCol,shipLength){
  for (let i = 0; i < shipLength; i++) {
    if (shipBoard[indexRow][indexCol-i] !== '' || shipBoard[indexRow][indexCol+i] !== undefined ) {
      return true;
    }
  }
  return false;
}

function checkLeft(indexRow,indexCol,shipLength){
  for (let i = 0; i < shipLength; i++) {
    if (shipBoard[indexRow-i][indexCol] !== '' || shipBoard[indexRow][indexCol+i] !== undefined ) {
      return true;
    }
  }
  return false;
}

function checkRight(indexRow,indexCol,shipLength){
  for (let i = 0; i < shipLength; i++) {
    if (shipBoard[indexRow+i][indexCol] !== '' || shipBoard[indexRow][indexCol+i] !== undefined ) {
      return true;
    }
  }
  return false;
}


function randomize(){
  return Math.floor(Math.random()*shipBoard.length);
}
