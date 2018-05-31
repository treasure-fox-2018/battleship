// Your code here
function battleBoard(row,col){
  var arrBoard=[]
  var count = 0
  for(let i=0; i<row; i++){
    let arrRow=[];
    arrBoard.push(arrRow);
    for(let j=0; j<col; j++){
      arrRow.push(count)
      count++
    }
  }
  arrBoard.push(arrRow)
}

console.log(battleBoard(11,11))
