function board () {
  var mainBoard = []

  var dictionaryHuruf = 'ABCDEFGHIJKLMNOPRSTUVWXYZ'.split('');

  for (var i  = 0; i < 10; i++) {
    var rowBoard = [];
    for (var j = 0; j < 10; j++) {
      var columnBoard = ' ';
      rowBoard.push(columnBoard);
    }
    mainBoard.push(rowBoard)
  }
  // var indexAngka = 1;
  // for (var i = 0; i < 10; i++) {
    
  //   var indexHuruf = 0;
  //   for (var j = 0; j < 10; j++) {
  //     mainBoard[i][j] = `${dictionaryHuruf[indexHuruf]}${indexAngka}`;
  //     indexHuruf++;
  //   }
  //   indexAngka++; 
  // }
  return mainBoard;
}

var arena = board();

var ship = [{name : 'Aircraft carrier', size : 5, kode: 'A'},
            {name : 'Battleship', size : 4, kode: 'B'},
            {name : 'Cruiser', size : 3, kode: 'C'},
            {name : 'Destroyer', size : 2, kode: 'D'}]

function shipPlacement () {
  // for (var i = 0; i <= ship.length - 1; i++) {
  //   var panjangKapal = ship[i].size;
    size = 2;
    let indexRandomRow = random();
      if (arena[indexRandomRow - size][indexRandomRow] !== undefined) {
        while (size > 0) {
          arena[indexRandomRow-size][indexRandomRow] = 'A';
          size--;
        }    
      }
      else if (arena[indexRandomRow][indexRandomRow-size] !== undefined) {
        while (size > 0) {
          arena[indexRandomRow][indexRandomRow-size] = 'A';
          size--;
        }   
      }
      else if (arena[indexRandomRow][indexRandomRow+size] !== undefined) {
        while (size > 0) {
          arena[indexRandomRow][indexRandomRow+size] = 'A';
          size++;
        }   
      }
      else if (arena[indexRandomRow+size][indexRandomRow] !== undefined) {
        while (size > 0) {
          arena[indexRandomRow+size][indexRandomRow] = 'A';
          size++;
        }   
      }

        // else if (arena[random][])
    //   }
    // }
    
  // }
  return arena
}

console.log(shipPlacement())

function random () {
  return Math.floor(Math.random() * 10);
}