// Your code here

var boardArr = [];

for (let i = 0 ; i < 10 ; i++) {
  if (boardArr[i] === undefined) {
    boardArr.push([]);
  }
  for (let j = 0 ; j < 10 ; j++) {
    boardArr[i].push('x');  
  }
}

function printBoard() {
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

printBoard();
