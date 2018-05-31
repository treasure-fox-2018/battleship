// Your code here
function board (num) {
  var mainBoard = []

  var dictionaryHuruf = 'ABCDEFGHIJKLMNOPRSTUVWXYZ'.split('');

  for (var i  = 0; i < num; i++) {
    var rowBoard = [];
    for (var j = 0; j < num; j++) {
      var columnBoard = ' ';
      rowBoard.push(columnBoard);
    }
    mainBoard.push(rowBoard)
  }
  var indexAngka = 1;
  for (var i = 0; i < num; i++) {
    
    var indexHuruf = 0;
    for (var j = 0; j < num; j++) {
      mainBoard[i][j] = `${dictionaryHuruf[indexHuruf]}${indexAngka}`;
      indexHuruf++;
    }
    indexAngka++;
    
    
  }
  

  return mainBoard

}

console.log(board(10))

// function createBoard () {
//   console.log('     A   B   C   D   E   F   G   H   I   J');
//   console.log('   +---------------------------------------+');
//   for (var i = 0; i <= 10; i++) {
//     if (i < 10) {
//       console.log(`${i}  |${print_line().join('')}`);
//       console.log('   |---|---|---|---|---|---|---|---|---|---|');
//     }
//     else {
//       console.log(`${i} |${print_line().join('')}`);
//       console.log('   |---|---|---|---|---|---|---|---|---|---|');
//     }
//   }
  
// }

// function print_line() {
//   var row = [];
//   for (var i = 0; i < 10; i++) {
//     row.push('   |');
//   }
//   return row
// }

// function shipPlacement () {
  
  
// }


// createBoard();