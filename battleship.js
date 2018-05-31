
// Your code here
function randowPlace(num){
    var number = 0;
    while(number === 0){
        number = Math.floor(Math.random()*num) 
    }
   return  number;
}

function generateRandomAlp(num1, num2){
    var label = '*abcdefghijklmnopqrstuvwxyz'
    var row = num1;
    var col = num2;
    var arr = [];
    
    for(let a=0; a<=row; a++){
        arr.push([]) ;
        for(let b=0; b<=col; b++){
            arr[a].push(" ");
          if(a===0){
            arr[a][b] = label[b];
          }
        }
    }

    for(let a=0; a< arr.length; a++){
        if(a>0){
            arr[a][0] = a;
        }    
    }
    return(arr);
}
//function clearRevVert & clearRevHorz
function clearVertical(row, col, size){
        for(let a=0; a < size; a++){
          if(row+a > theBoard.length-1 ||theBoard[row+a][col] !== ' '){
            return false;
          }  
        }
        return true;
    }

function clearRevVertical(row, col, size){
        for(let a=0; a < size; a++){
          if(row-a < 1 ||theBoard[row-a][col] !== ' '){
            return false;
          }  
        }
        return true;
    }
    
function clearHorizontal(row, col, size){
         for(let a=0; a< size; a++){
          if(col+a > theBoard.length-1 ||theBoard[row][col+a] !== ' '){
            return false;
          }  
        }
        return true;
    }

function clearRevHorizontal(row, col, size){
        for(let a=0; a< size; a++){
         if(col+a < 1 ||theBoard[row][col-a] !== ' '){
           return false;
         }  
       }
       return true;
   }
//function printShipRevVert & printShipRevVert
function printShipVert (row, col, size, ship){
    for(let a=0; a<size; a++ ){
        theBoard[row+a][col] = ship;       
    }
}

function printShipRevVert (row, col, size, ship){
    for(let a=0; a<size; a++ ){
        theBoard[row-a][col] = ship;       
    }
}

function printShipHorz (row, col, size, ship){
    for(let a=0; a<size; a++ ){
        theBoard[row][col+a] = ship;       
    }
}

function printShipRevHorz (row, col, size, ship){
    for(let a=0; a<size; a++ ){
        theBoard[row][col-a] = ship;       
    }
}

function showTheShip(){
  
    for(let a=0; a<ship.length;a++){
      console.log(ship[a])
        var row = randowPlace(9);
        var col = randowPlace(9);
        var shipGen = ship[a]; 
        
        if(clearVertical(row, col, shipGen.size)){
            printShipVert(row, col, shipGen.size, shipGen.name);
        }
        
        if(clearRevVertical(row, col, shipGen.size)){
            printShipRevVert(row, col, shipGen.size, shipGen.name);
        }

        if(clearHorizontal(row, col, shipGen.size)){
            printShipHorz(row, col, shipGen.size, shipGen.name);
        }

        if(clearRevHorizontal(row, col, shipGen.size)){
            printShipRevHorz(row, col, shipGen.size, shipGen.name);
        }
    }
    
    return theBoard;
}

//===============end of function======================================//


var theBoard = generateRandomAlp(10,10);

var AC = {}
    AC.name = 'AC';
    AC.size = 5;
    AC.counter = 0;
    

var B = {}
    B.name = 'B';
    B.size = 4;
    B.counter = 0;
    
    
var C = {}
    C.name = 'C'
    C.size = 3;
    C.counter = 0;
    

var D = {}
    D.name = 'D';
    D.size = 2;
    D.counter = 0;
        
    var ship = [AC, B, C, D ];
    
    console.log('\n')
    console.log(showTheShip());
    console.log('\n');
    
//shoots    
var argv = process.argv;
let shoots = argv.slice(2, argv.length)
let results = []
for(let a = 0; a < shoots.length; a++ ){
    var rowPlayer = shoots[a][0];
    var colPlayer = shoots[a][1];
    var resultOfShoot = checkTarget(rowPlayer, findCol(colPlayer));
    results.push(resultOfShoot)
}



function findCol(colPlayer){
    var labelPlay = '*abcdefghijklmnopqrstuvwxyz'
    for(let a=0; a<labelPlay.length; a++){
        if(colPlayer===labelPlay[a]){
            return a;
        }
    }
}

function checkTarget(row, col){
    var tempShip = theBoard[row][col]
    if(theBoard[row][col]!==' '){
        let tempShip = theBoard[row][col]
        theBoard[row][col] = 'X';
        console.log ('shoot at : ' +row+ ' ' + col + ', kamu berhasil menembak SHIP ' + tempShip);
        return tempShip;
    }else{
        theBoard[row][col] = '/';
        console.log('shoot at : ' +row+' ' + col + ' ' + ', tidak kena ');
        return 'zonk';
    }
}
function theResultsofShoots(shoots){
    let ship = ['AC','B','C','D']
    for(let a = 0; a < shoots.length; a++ ){
        let idxTarget = ship.indexOf(shoots[a]) 
        if(idxTarget!= -1){
            ship.splice(idxTarget, 1)
        }
    }
    console.log(`left ship : ${ship}`)
    return ship.length === 0 ? 'YOU WIN' : 'YOU LOSE, cupuuu!';
}
console.log(theBoard)
console.log(`your shoots : ${results.join(', ')}`)
console.log(theResultsofShoots(results))
