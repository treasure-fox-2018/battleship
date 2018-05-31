function generateBoard() {
    var makeCol = [];
    for (let i = 0; i < 10; i++) {
        var makeRow = [];
        for (let j = 0; j < 10; j++) {
            makeRow.push(' ');
        }
        makeCol.push(makeRow);
    }
    return makeCol;
}
// console.log(generateBoard());


function callCol() {
    var randomCol = (Math.floor(Math.random() * 5));
    var result = [];
    for (let i = 0; i < 10; i++) {
        if (i === randomCol) {
            return i;
        }
    }
}

function callRow() {
    var randomRow = (Math.floor(Math.random() * 5));
    var result = [];
    for (let i = 0; i < 10; i++) {
        if (i === randomRow) {
            return i;
        }
    }
}

function generateShip(onBoard) {
    var ships = [2, 3, 4, 5];
    var codeShip = ['%', '@', '&', '*'];

    for (let i = 0; i < ships.length; i++) {
        var isThere = true;
        var row = callRow();
        var col = callCol();
        if (onBoard[row][col] === ' ') {
            // console.log(row, col); //coordinates
            var fill = true;
            for (let j = 0; j < ships.length; j++) {
                if (onBoard[row][col+j] !== ' ' && onBoard[row+j][col] !== ' ') {
                    fill = false;
                }
            }
            if (fill === true) {
                if (col = Math.floor(Math.random * 4)) {
                    for (let j = 0; j < ships[i]; j++) {
                        onBoard[row][col+j] = codeShip[i];
                        isThere = false;
                    }
                } else {
                    for (let j = 0; j < ships[i]; j++) {
                        onBoard[row+j][col] = codeShip[i];
                        isThere = false;
                    }
                }
            }
        }
    }
    return onBoard;
}
let onBoard = generateBoard();
let ship = generateShip(onBoard);
generateShip(onBoard);