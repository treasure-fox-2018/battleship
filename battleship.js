// Your code here
const shipBoard = () => {
    let board = [];
    for(let z = 0; z < 10; z++){
        row = [];
        for(let k = 0; k < 10; k ++){
            row.push([]);
        }
        board.push(row);
    }
    return board;
}

const shipObjInsert = (fleetArr,name,size)=>{
    fleetArr.push({
        name : name,
        size : size
    })
}
const insertShip = (shipFleet,Board) => {
    for(let z = 0; z < shipFleet.length; z ++){
        let currentCoordinate = createCordinate(shipFleet[z].size);
        let isEmptyCheker = emptyCheker(Board, currentCoordinate,shipFleet[z].size)
          while(!isEmptyCheker){
              currentCoordinate = createCordinate(shipFleet[z].size);
          }  
        for(let k = 0; k < shipFleet[z].size; k++){
            Board[currentCoordinate[0]][currentCoordinate[1]] = shipFleet[z].name;
            currentCoordinate[1]++;
        }
    }
    return Board;

}

const emptyCheker = (board, cordinate,size)=>{
    let isEmpty = true;
    let temporaryCordinate = cordinate;
    for(let z = 0; z < size; z ++){
        if(board[temporaryCordinate[0]][temporaryCordinate[1]].length !== 0){
            return false;
        }
        temporaryCordinate[1]++;
    }
    return isEmpty;
}
const createCordinate = (size => {let cordinates = [];
    cordinates = [];
    let randomRow = Math.floor(Math.random() * (10 - size));
    let randomeColumn = Math.floor(Math.random() * (10 - size));
    cordinates.push(randomeColumn,randomRow);
    return cordinates
})
function hiroshimaNagasaki (row,column,currentBoard){
    if(row < 10 && column < 10){
        if(currentBoard[row][column] === '/'){
            console.log("this area has already been bombed")
        }
        else if(currentBoard[row][column].length === 0){
            currentBoard[row][column] = '/';
        }else{
            currentBoard[row][column] = 'X'
        }
    }
}
let board = shipBoard();
let fleet = [];
let argv = process.argv;
let bombedRow = Number(argv[2]);
let bombedColumn = Number(argv[3]);
shipObjInsert(fleet,'B',4);
shipObjInsert(fleet,'A',2);
shipObjInsert(fleet,'z',3)
const currentBoard = insertShip(fleet,board);
hiroshimaNagasaki(bombedRow,bombedColumn,currentBoard);
console.log(currentBoard);
for(let z = 0; z < fleet.length; z ++){
    let counter = 0;
    for(var k = 0; k < currentBoard.length; k ++){
        for(let b = 0; b < currentBoard[k].length; b ++){
            if(currentBoard[k][b] === fleet[z].name){
                counter++;
            }
        }
    }
    if(counter === 0){
        console.log(`ship ${fleet[z].name} has been sunked`)
    }
}