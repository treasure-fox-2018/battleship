// Your code here
let listShips = [
    {
      name: "Aircraft carrier",
      size: 5,
      symbol : "A"
      
    },
    {
      name: "Battleship",
      size: 4,
      symbol : "B"
      
    },
    {
      name: "Cruiser",
      size: 3,
      symbol : "C"
      
    },
    {
      name: "Destroyer",
      size: 2,
      symbol : "D"
      
    },
  ];



function warBoard(){
    let arrBoard = []
    for(let i =0;i<10;i++){
        let tempt = []
        for(let j=0;j<10;j++){
            tempt.push('-')
        }
        arrBoard.push(tempt)
    }
    return arrBoard
}

function ships(){
    let board = warBoard()
    let randomRow;
    let randomCol;
    let checkShip;
    let notL;
    let status;
    for(let i=0;i<listShips.length;i++){
        randomRow = Math.floor(Math.random() * 10)
        randomCol = Math.floor(Math.random() * 10)
        notL = Math.floor(Math.random()*2)
        status = false
        // while(!status){    
            for(let j=0;j<board.length;j++){
                    for(let k=0;k<board[j].length;k++){
                        if(randomRow == j && randomCol == k){
                            if(notL == 0){
                                // cek bawah
                                // console.log(randomRow,"====",randomCol)
                                if( j + listShips[i].size < board.length -1){
                                    var count =0
                                    for(let c =0;c<listShips[i].size;c++){
                                        if(board[j+c][k] == '-'){
                                            count++
                                        }
                                    }
                                    if(count == listShips[i].size){
                                        for(let l =0;l<listShips[i].size;l++){
                                            board[j+l][k] = listShips[i].symbol                          
                                        }
                                        status = true
                                    }
                                }
                                // cek atas
                                else if(j -listShips[i].size > 0){
                                    var count =0
                                    for(let c =0;c<listShips[i].size;c++){
                                        if(board[j-c][k] == '-'){
                                            count++
                                        }
                                    }
                                    if(count == listShips[i].size){
                                        for(let l =0;l<listShips[i].size;l++){
                                            board[j-l][k] = listShips[i].symbol                          
                                        }
                                        status = true
                                    }
                                }
                           
                            }
                            else{
                                //cek kanan
                                if(k+listShips[i].size < board.length -1){
                                    var count =0
                                    for(let c =0;c<listShips[i].size;c++){
                                        if(board[j][k+c] == '-'){
                                            count++
                                        }
                                    }
                                    if(count == listShips[i].size){
                                        for(let l =0;l<listShips[i].size;l++){
                                            board[j][k+l] = listShips[i].symbol   
                                                        
                                        }  
                                        status = true
                                    }
                                }
                                //cek kiri
                                else if(k -listShips[i].size > 0){
                                    var count =0
                                    for(let c =0;c<listShips[i].size;c++){
                                        if(board[j][k-c] == '-'){
                                            count++
                                        }
                                    }
                                    if(count == listShips[i].size){
                                        for(let l =0;l<listShips[i].size;l++){
                                            board[j][k-l] = listShips[i].symbol   
                                                        
                                        }  
                                        status = true
                                    }
                                }
                            }
                       
                        }
                    }
                // }      
            }
        // }
       
    }

    console.log(board)
}
ships()