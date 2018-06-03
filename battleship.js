//BATTLE SHIP PLEASE RUN THIS JAVASCRIPT CODE IN NODE WITH PARAMETER OF BOM TABLE TARGET, 
//HOW TO RUN : node battleship.js B3
//B3 IS EXAMPLE OF TARGET BOM
//SHIP IN BOARD REPRESENTED BY 'O'
//IF HIT THE TARGET 'X' WILL BE DISPLAYED ON TARGET, ELSE '/'

var boardArr = []; //create global variable boardArr that can accessed by all function lol
var listColumnArr = ['A','B','C','D','E','F','G','H','I','J']
var arrUsedTable = [];
var bomb = process.argv[2];

function createArr () { //create empty 10x10 boardArray
  for (let i = 0 ; i < 10 ; i++) {
    if (boardArr[i] === undefined) {
      boardArr.push([]);
    }
    for (let j = 0 ; j < 10 ; j++) {
      boardArr[i].push(' ');  
    }
  }
}

function printBoard() { //print board with styling index and border
  console.log('     A   B   C   D   E   F   G   H   I   J  ');
  console.log('   +---------------------------------------+');
  for (let i = 0 ; i < boardArr.length ; i++) {
    let linePrint = " ";
    if (i === boardArr.length - 1) {
      linePrint = `${i+1} |`
    } else linePrint = ` ${i+1} |`;
    for (let j = 0 ; j < boardArr[i].length; j++) {
      linePrint += " " + boardArr[i][j] + " |";
    }
    console.log(linePrint)
    console.log('   |---|---|---|---|---|---|---|---|---|---|')
  }
  console.log('   +---------------------------------------+');
}

  function shuffleShip() {
    for (let i = 2 ; i <=5 ; i++) {
      let isShipCreated = false;
      while (isShipCreated === false) {
        isShipCreated = createShip(i);
      }
    }
    updateBoardArr(arrUsedTable);
  }


//create base position of ship
  function createShip(size) {
    let ships = ["A","B","C","D"];
    let shipCode = ships[size-2];
    let headRow = Math.floor(Math.random()*10);
    let headColumn = Math.floor(Math.random()*10);
    let head = [headRow,headColumn];
    if (isCrash(headRow,headColumn) === false) {
      arrUsedTable.push(head);
      for (let direction = 1 ; direction <= 4 ; direction++) {
         size -= 1;
         if (createTail(head,direction,size) === true) {
           return true;
         }
         size += 1;
      }
      arrUsedTable.pop();
      return false;
    } else return false;
    
  }

  //USING RECURSIVE FUNCTION TO CREATE TAIL
  function createTail(head,direction,size) {
    let tailSize = size;
    if (tailSize === 0 ) {
      return true;
    } else {
      let tailRow = head[0];
      let tailColumn = head[1];
      if (direction === 1) {
        tailColumn += 1;
      } else if (direction === 2) {
        tailRow += 1;
      } else if (direction === 3) {
        tailColumn -= 1;
      } else if (direction === 4) {
        tailRow -= 1;
      }
      let tail = [tailRow,tailColumn];
      if (isCrash(tailRow,tailColumn) === false) {
        tailSize -= 1;
        arrUsedTable.push(tail);
        if (createTail(tail, direction, tailSize) === true) {
          return true;
        }
        arrUsedTable.pop();
        return false;
      } else {
        return false;
      }
    }
  }

function isCrash(row,col) { //cek pada table row,col sudah ada ship apa belum pada createship awal
  
  if (row < 0 || row > 9 || col < 0 || col > 9) {
    return true;
  }
  if (checkIncludes([row,col],arrUsedTable) === false) {
    return false;
  }
  return true;
}

function checkIncludes(coordinate, arrayUsedCoordinate) {
  let strCoor = ""+coordinate[0]+coordinate[1];
  for (let i = 0 ; i < arrayUsedCoordinate.length; i++) {
    let strArrUsedCoor = "";
    for (let j = 0 ; j < arrayUsedCoordinate[i].length ; j++) {
      strArrUsedCoor += arrayUsedCoordinate[i][j];
    }
    if (strArrUsedCoor === strCoor) {
      return true;
    }
  }
  return false;
}

function updateBoardArr(tableArr) {
  for (let i = 0 ; i < tableArr.length; i++) {
    boardArr[tableArr[i][0]][tableArr[i][1]] = 'O';
  }
}


//====================================================================================

function checkHit() { //function untuk mengecek apakah input yg dimasukkan user mengenai ship atau tidak, jika iya maka tambahkan '/' pada ship yg kena, jika tidak 'X'
  let hit = false;  
  let indexRow = Number(bomb[1])-1;
  let indexColumn = bomb[0].charCodeAt()-65; 
  if (checkIncludes([indexRow,indexColumn],arrUsedTable)) {
    hit = true;
  } 
  if (hit === true ) { 
    boardArr[indexRow][indexColumn] = 'X';
    console.log("YOU HIT THE TARGET CAPTAIN !!!!")
  } else {
    boardArr[indexRow][indexColumn] = '/';
    console.log("YOU MISSED THE TARGET :(");
  }
}


//===RUN THE GAME===

createArr(); //create empty array
// createShip(2) //sample not yet finished

// //create sample hardcoded table contain ship , just for test
// boardArr[0][0] = 'A' ;
// arrUsedTable.push('A1');
// boardArr[1][0] = 'A';
// arrUsedTable.push('A2');

// boardArr[2][7] = 'B' ;
// arrUsedTable.push('H3');
// boardArr[3][7] = 'B';
// arrUsedTable.push('H4');
// boardArr[4][7] = 'B' ;
// arrUsedTable.push('H5');

// boardArr[9][1] = 'C';
// arrUsedTable.push('B10');
// boardArr[9][2] = 'C' ;
// arrUsedTable.push('C10');
// boardArr[9][3] = 'C';
// arrUsedTable.push('D10');
// boardArr[9][4] = 'C';
// arrUsedTable.push('E10');

// boardArr[2][1] = 'D';
// arrUsedTable.push('B3'); 
// boardArr[3][1] = 'D';
// arrUsedTable.push('B4');
// boardArr[4][1] = 'D' ;
// arrUsedTable.push('B5');
// boardArr[5][1] = 'D' 
// arrUsedTable.push('B6');
// boardArr[6][1] = 'D'
// arrUsedTable.push('B7');

shuffleShip(); //create shuffle ship position in board

console.log("BOMBED BOARD")
console.log("Your target is",bomb);
checkHit(); //check if the bom hit target or not, if hit write the bom target with 'X' , if not write '/' to TARGET
printBoard(); // print bombed board

