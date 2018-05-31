// BATTLE SHIP PLEASE RUN THIS JAVASCRIPT CODE IN NODE WITH PARAMETER OF BOM TABLE TARGET, EXAMPLE : node battleship.js B3



var boardArr = []; //create global variable boardArr that can accessed by all function lol
var listColumnArr = ['A','B','C','D','E','F','G','H','I','J']
var arrUsedTable = [];
var bomb = process.argv[2];
var countBombedShip = 0;

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
//====================== THIS FUNCTION NOT USED AND NOT FINISH YET =================
function createShip(size) {
  //create base position of ship
  let randomRow = Math.floor(Math.random()*10);
  let randomCol = Math.floor(Math.random()*10);
  while (bentrok(randomRow,randomCol) === true) {
    console.log("lala")
    randomRow = Math.floor(Math.random()*10);
    randomCol = Math.floor(Math.random()*10);
  }
  arrUsedTable.push(''+randomRow+listColumnArr[randomCol]);
  boardArr[randomRow][randomCol] = listColumnArr[size-1];
  
}

function bentrok(row,col) { //cek pada table row,col sudah ada ship apa belum pada createship awal
  for (let i = 0 ; i < arrUsedTable.length ; i ++) {
    if (''+row+''+col === arrUsedTable[i]) {
      return true
    }
  }
  return false;
}
//====================================================================================

function checkHit() { //function untuk mengecek apakah inputyg dimasukkan user mengenai ship atau tidak, jika iya maka tambahkan '/' pada ship yg kena, jika tidak 'X'
  let hit = false;  
  let indexRow = Number(bomb[1])-1;
  let indexColumn = bomb[0].charCodeAt()-65; 
  for (let i = 0 ; i < arrUsedTable.length; i++) {
    if (arrUsedTable[i] == bomb) {
      hit = true;
      countBombedShip++;
    } 
  }
  if (hit === true ) { 
    boardArr[indexRow][indexColumn] = 'X';
    console.log("you hit the target")
  } else boardArr[indexRow][indexColumn] = '/';
}

createArr(); //create empty array
// createShip(2) //sample not yet finished

//create sample hardcoded table contain ship , just for test
boardArr[0][0] = 'A' ;
arrUsedTable.push('A1');
boardArr[1][0] = 'A';
arrUsedTable.push('A2');

boardArr[2][7] = 'B' ;
arrUsedTable.push('H3');
boardArr[3][7] = 'B';
arrUsedTable.push('H4');
boardArr[4][7] = 'B' ;
arrUsedTable.push('H5');

boardArr[9][1] = 'C';
arrUsedTable.push('B10');
boardArr[9][2] = 'C' ;
arrUsedTable.push('C10');
boardArr[9][3] = 'C';
arrUsedTable.push('D10');
boardArr[9][4] = 'C';
arrUsedTable.push('E10');

boardArr[2][1] = 'D';
arrUsedTable.push('B3'); 
boardArr[3][1] = 'D';
arrUsedTable.push('B4');
boardArr[4][1] = 'D' ;
arrUsedTable.push('B5');
boardArr[5][1] = 'D' 
arrUsedTable.push('B6');
boardArr[6][1] = 'D'
arrUsedTable.push('B7');


console.log("BOARD AWAL");
printBoard(); //test print default board

console.log("BOMBED BOARD")
checkHit(); //check if the bom hit target or not, if hit write the bom target with 'X' , if not write '/' to TARGET
printBoard(); // print bombed board
