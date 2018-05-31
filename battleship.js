var comInputs = process.argv;
var mainBoard = [];
var countLoop = 0;

function start(comInputs) {
    console.log(generateBoard(comInputs[2]));
    console.log();
}

console.log(generateBoard(comInputs[2]));
// console.log(countLoop);

function generateBoard(dimensions) {
    for (let i = 0; i < dimensions; i++) {
        mainBoard.push(generaterowBoard(dimensions));
        // console.log('    |---|---|---|---|---|---|---|---|---|---|')
        // countRow += 1;
    }

    createEnemyShips();

    return mainBoard;
}

function generaterowBoard(dimensionBoard) {
    let rowBoard = [];
    for (var i = 0; i < dimensionBoard; i++) {
          rowBoard.push(' ')

          // kondisi jika perlu memperindah board
          // // jika col = 0
          // if (i === 0) {
          //     rowBoard.push(countRow+' [] ');
          // } else if (i === dimensionBoard-1) {
          //     // jika col = 9
          //     rowBoard.push('[]');
          // } else {
          //     // jika selain yang di atas
          //     rowBoard.push('[] ');
          // }
    }
    return rowBoard;
    // return rowBoard;

}

function createEnemyShips() {
    let classOfShips = [5, 4, 3, 3, 2];

    for (let i = 0; i < classOfShips.length; i++) {
        createShip(classOfShips[i]);
    }

    return mainBoard;
}

function createShip(shipLength) {
    countLoop += 1;
    let row = generateRandomNum(10);
    let col = generateRandomNum(10);
    let fleets = 'abcd';
    let createWay = generateRandomNum(3)
    let shipType = fleets[createWay];

    if (mainBoard[row][col] !== ' ') {
        createShip(shipLength);
    } else {
        if (createWay === 0) {              // diagonal ke kanan
            wayRight(row, col, shipType, shipLength);
        } else if (createWay === 1) {        // diagonal ke kiri
            wayLeft(row, col, shipType, shipLength);
        } else if (createWay === 2) {       // vertikal ke atas
            wayUp(row, col, shipType, shipLength);
        } else if (createWay === 3) {       // vertikal ke bawah
            wayDown(row, col, shipType, shipLength);
        }
    }
}


function wayUp(row, col, shipType, shipLength) {
    for (let i = 0; i < shipLength; i++) {
        if (row-shipLength+1 < 0 || mainBoard[row-i][col] === undefined) {
            createShip(shipLength);
        } else { //jika ketemu undefined pada mainBoard[row][col]
            mainBoard[row-i][col] = shipType;
        }
    }
    // console.log('up '+shipType);
}

function wayDown(row, col, shipType, shipLength) {
    for (let i = 0; i < shipLength; i++) {
        if (row+shipLength-1 > 10 || mainBoard[row+i][col] === undefined) {
            createShip(shipLength);
        } else { //jika ketemu undefined pada mainBoard[row][col]
            mainBoard[row][row+i] = shipType;
        }
    }
    // console.log('down '+shipType);
}

function wayLeft(row, col, shipType, shipLength) {
    for (let i = 0; i < shipLength; i++) {
        if (col-shipLength+1 <0 || mainBoard[row][col-i] === undefined) {
            createShip(shipLength);
        } else { //jika ketemu undefined pada mainBoard[row][col]
            mainBoard[row][col-i] = shipType;
        }
    }
    // console.log('left '+shipType);
}

function wayRight(row, col, shipType, shipLength) {
    for (let i = 0; i < shipLength; i++) {
        if ( col+shipLength-1 > 10 || mainBoard[row][col+i] === undefined) {
            createShip(shipLength);
        } else { //jika ketemu undefined pada mainBoard[row][col]
            mainBoard[row][col+i] = shipType;
        }
    }
    // console.log('right '+shipType);
}

function generateRandomNum(max) {
    let randomNum = Math.floor((Math.random() * max) + 0);
    return randomNum;
}

// console.log(generateRow());



//
