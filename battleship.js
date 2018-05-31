// Your code here
function createBoard(){
    var b = ''
    var b1 = '     A     B     C     D     E     F     G     H     I     J   ' //63 
    var b2 = '  +-----------------------------------------------------------+'
    var b3 = '1 |     |     |     |     |     |     |     |     |     |     |'
    var b4 = '  |-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|'
    var b5 = '2 |-----|'
    var alphabet = 'ABCDEFGHIJ'
    var indexAlpha = 0
    var indexRows = 1
    var mainBoardArr = []
    var childBoard = []
    for(var i = 0; i < 10;i++){
        for(var j = 0; j <= 63; j++){    
            if(i === 0){
                if(j % 6 === 0 && j !== 0){
                    childBoard.push(alphabet[indexAlpha])
                    indexAlpha++
                }else{
                    childBoard.push(' ')
                }
            }else if(i === 1){
                if(j === 3 || j === 63){
                    childBoard.push('+')
                }else if(j > 3){
                    childBoard.push('-')
                }else {
                    childBoard.push(' ')
                }
            }else if(i % 2 === 0 && i !== 0){
                if(j === 1){
                    childBoard.push(indexRows)
                    indexRows++
                }else{
                childBoard.push(' ')
                }
            }
        }
        mainBoardArr.push(childBoard.join(''))
        childBoard = []
    }
    console.log(mainBoardArr);   
}


function placeShip(){
    
}
console.log(createBoard());
