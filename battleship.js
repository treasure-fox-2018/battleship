// Your code here
function battleBoard(row,col){
  var arrBoard=[]
  var count = 1
  var countRow = 0
  var countAlpha = 0
  var strAlpha = " ABCDEFGHIJ"
  for(let i=0; i<row; i++){
    let arrRow=[];
    arrBoard.push(arrRow);
    for(let j=0; j<col; j++){
      arrRow.push(" ")
    }
    arrBoard[0][i]=countRow
    countRow++
    arrRow[0]=strAlpha[countAlpha]
    countAlpha++
  }
  return arrBoard
}
console.log(battleBoard(11,11))
