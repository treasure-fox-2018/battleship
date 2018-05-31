"use strict"

function printBoard(input){
    var board = []
    for(let i=0; i<input; i++){
        var tmpBoard=[]
        for(let j=0; j<input; j++){
            tmpBoard.push(" ")
        }
        board.push(tmpBoard)
    }
    return board
}

// function random(input){
//     let board = printBoard(input)
//     var randomI = Math.floor((Math.random()* board.length))
//     var randomJ = Math.floor((Math.random()* board.length)) 
//     return `${randomI}${randomJ}`
// }

function shipBoard(input){
    let board = printBoard(input)
    var randomI
    var randomJ
    var size=[5,4,3,2]
    var ship=["A","B","C","D"]

    for(let z=0; z<ship.length; z++){
        randomI = Math.floor((Math.random()* board.length))
        randomJ = Math.floor((Math.random()* board.length)) 
        // console.log(randomI, randomJ)
        for(let i=0; i<board.length; i++){
            for(let j=0; j<board[i].length; j++){
                if(i === randomI && j === randomJ){
                    if(j+size[z] < board.length){
                        var count = 0
                        for(let x=0; x<size[z]; x++){
                            if(board[i][j+x] === " "){
                                count += 1
                            }
                        } 
                        if(count === size[z]){
                            for(let u=0; u<size[z]; u++){
                                board[i][j+u] = ship[z]
                            }
                        }
                        // console.log("====",count)
                        // console.log("xxxxx",board[i])
                        if(count < size[z]){
                            count = 0
                            for(let x=0; x<size[z]; x++){
                                if(board[i+x][j] === " "){
                                    count += 1
                                    if(count === size[z]){
                                        for(let u=0; u<size[z]; u++){
                                            // console.log("-------",board[i+u][j])
                                            board[i+u][j] = ship[z]
                                        }
                                    }
                                }
                            } 
                        } 
                    }

                } 
            }
        }
    }
    return board
}

var indexI = process.argv[2]
var indexJ = process.argv[3]
function battle(input){
    var boardBattle = shipBoard(input)
    var ship = 'ABCD'
    console.log("===============BEFORE===============")
    console.log(boardBattle)
    var count = 0
    for(let i=0; i<boardBattle.length; i++){
        for(let j=0; j<boardBattle[i].length; j++){
            // console.log(boardBattle[i][j])
            if(indexI === i && indexJ === j){
                if(ship.indexOf(boardBattle[i][j]) !== -1){
                    count +=1
                    boardBattle[i][j] = "X"
                    // console.log("======",count)
                } 
            }
        }
    }
    // console.log(count)
    if(count > 0){
        console.log(`has been destroyed!`)
        count = 0
    }
    else{
        console.log(`You Missed!`)
    }
    console.log("===============AFTER===============")
    return boardBattle
}

// console.log(shipBoard(10))
console.log(battle(10))