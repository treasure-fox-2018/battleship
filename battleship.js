// Your code here

function board(size = 10) {
    var row = []
    for (let i = 0; i < size; i++) {
        var col = []
        for (let j = 0; j < size; j++) {
            col.push(' ')
        }        
        row.push(col)
    }
    return row
}

function randomShip(paramRandom){
    var randomRow = Math.ceil(Math.random()*(paramRandom-1))
    var randomCol = Math.ceil(Math.random()*(paramRandom-1))
    var random = [randomRow,randomCol]
    return random
}

function generateShip(param = 10) {
    // a = aircraft carrier // b = battleship // c = cruiser // d = destroyer
    var obj ={a:5,b:4,c:3,d:2}
    
    var displayBoard = board(param)
    var gameBoard = board(param)

    for(key in obj){
        var ship = obj[key]
        var statusShip = false
        while(statusShip==false){
            var random = randomShip(param)
            var rowShip = random[0]
            var colShip = random[1]
            if(gameBoard[rowShip][colShip]==' '){
                //print ship kebawah
                if(rowShip+ship<param){
                    var allEmpty = 0
                    for (let i = 0; i < ship; i++) {
                        var isiBoard = gameBoard[rowShip+i][colShip]
                        if(isiBoard == ' '){
                            allEmpty++
                        }
                    }
                    if (allEmpty==ship) {
                        for (let i = 0; i < ship; i++) {
                            var isiBoard = gameBoard[rowShip+i][colShip]
                            if(isiBoard == ' '){
                                gameBoard[rowShip+i][colShip] = `${key}`
                            }
                        }   
                        statusShip = true
                    }
                    // console.log("masuk kondisi 1");
                    
                }
                //print ship ke kanan
                else if(colShip+ship<param){
                    var allEmpty = 0
                    for (let i = 0; i < ship; i++) {
                        var isiBoard = gameBoard[rowShip][colShip+i]
                        if(isiBoard == ' '){
                            allEmpty++;
                        }
                    }
                    if(allEmpty==ship){
                        for (let i = 0; i < ship; i++) {
                            var isiBoard = gameBoard[rowShip][colShip+i]
                            if(isiBoard == ' '){
                                gameBoard[rowShip][colShip+i] = `${key}`
                            }
                        }
                        statusShip = true
                    }
                    // console.log("masuk kondisi 2");
                }
                //print ship keatas
                else if(rowShip-ship>0){
                    var allEmpty = 0
                    for (let i = 0; i < ship; i++) {
                        var isiBoard = gameBoard[rowShip-i][colShip]
                        if(isiBoard == ' '){
                            allEmpty++;
                        }
                    }
                    if (allEmpty==ship) {
                        for (let i = 0; i < ship; i++) {
                            var isiBoard = gameBoard[rowShip-i][colShip]
                            if(isiBoard == ' '){
                                gameBoard[rowShip-i][colShip] = `${key}`
                            }
                        }   
                        statusShip = true
                    }
                    // console.log("masuk kondisi 3");
                }
                //print ship ke kiri
                else if(colShip-ship>0){
                    var allEmpty = 0
                    for (let i = 0; i < ship; i++) {
                        var isiBoard = gameBoard[rowShip][colShip-i]
                        if(isiBoard == ' '){
                            allEmpty++
                        }
                    }
                    if (allEmpty==ship) {
                        for (let i = 0; i < ship; i++) {
                            var isiBoard = gameBoard[rowShip][colShip-i]
                            if(isiBoard == ' '){
                                gameBoard[rowShip][colShip-i] = `${key}`
                            }
                        }   
                        statusShip = true
                    }
                    // console.log("masuk kondisi 4");
                }
            }
        }
    }

    return gameBoard;
}

// generateShip(10)
function attack (attck){
    const argv = process.argv
    var param = 10
    var displayBoard = board(param)
    var gameBoard = generateShip()
    var attack = []

    if(argv[2]==undefined){
        console.log(displayBoard);         
        console.log("masukan nilai pada argv untuk melakukan attack");
    }
    else{

        for(let i = 2; i < argv.length;i++){
            attack.push(argv[i])
        }
    
        for(let i = 0;i < attack.length;i++){
            var idxRow = attack[i][0]
            var idxCol = attack[i][1]
            if(gameBoard[idxRow][idxCol]!==' '){
                displayBoard[idxRow][idxCol] = gameBoard[idxRow][idxCol]
            }
            else{
                displayBoard[idxRow][idxCol] = 'X'
            }
    
        }
        // console.log(gameBoard);
        console.log(displayBoard);    
    }
    
}

attack()
