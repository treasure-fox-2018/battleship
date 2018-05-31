// Your code here

function randomizeEnemyShipPosition() {

  var arrBoard = [
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
  ];

  var arrShipsLength = [2, 3, 4, 5]
  var arrShipsSymbol = ["D", "C", "B", "A"]

  for (var q = 0; q < arrShipsLength.length; q++) {
    var length = arrShipsLength[q];
    var symbol = arrShipsSymbol[q];

    var booleanShipExistence = false;
    // while (booleanShipExistence !== true) {

      var horizontalValues = "012345678";
      var horizontalIndex = +horizontalValues.charAt(Math.trunc(Math.random() * horizontalValues.length));
      var verticalValues = "0123456789";
      var verticalIndex = +verticalValues.charAt(Math.trunc(Math.random() * verticalValues.length));
      // var arrShipStartingPosition = [horizontalIndex, verticalIndex];
      // console.log(verticalIndex, horizontalIndex);

      var arrShipStackDirection = [ "Up", "Down", "Right", "Left"]
      var k = 0;
      while (k < arrShipStackDirection.length && booleanShipExistence !== true) {
        var currentDirection = arrShipStackDirection[k];
        if (currentDirection === "Up") {
          if (checkUp(verticalIndex, horizontalIndex, arrBoard, length)) {
            // console.log("Up");
            arrBoard = writeUp(arrBoard, verticalIndex, horizontalIndex, symbol, length);
            booleanShipExistence = true
          }
        } else if (currentDirection === "Down") {
          if (checkDown(verticalIndex, horizontalIndex, arrBoard, length)) {
            // console.log("Down");
            arrBoard = writeDown(arrBoard, verticalIndex, horizontalIndex, symbol, length);
            booleanShipExistence = true
          }
        } else if (currentDirection === "Right") {
          if (checkRight(verticalIndex, horizontalIndex, arrBoard, length)) {
            // console.log("Right");
            arrBoard = writeRight(arrBoard, verticalIndex, horizontalIndex, symbol, length);
            booleanShipExistence = true
          }
        } else if (currentDirection === "Left") {
          if (checkLeft(verticalIndex, horizontalIndex, arrBoard, length)) {
            // console.log("Left");
            arrBoard = writeLeft(arrBoard, verticalIndex, horizontalIndex, symbol, length);
            booleanShipExistence = true
          }
        }
        // console.log(k);
        k++;
      }
    // }
  }

  return arrBoard;

}

function writeUp(arrBoard, verticalIndex, horizontalIndex, symbol, length) {
  for (let i = 0; i < length; i++) {
    arrBoard[verticalIndex + i][horizontalIndex] += symbol;
  }
  return arrBoard;
}

function writeDown(arrBoard, verticalIndex, horizontalIndex, symbol, length) {
  for (let i = 0; i < length; i++) {
    arrBoard[verticalIndex - i][horizontalIndex] += symbol;
  }
  return arrBoard;
}

function writeRight(arrBoard, verticalIndex, horizontalIndex, symbol, length) {
  for (let i = 0; i < length; i++) {
    arrBoard[verticalIndex][horizontalIndex + i] += symbol;
  }
  return arrBoard;
}

function writeLeft(arrBoard, verticalIndex, horizontalIndex, symbol, length) {
  for (let i = 0; i < length; i++) {
    arrBoard[verticalIndex][horizontalIndex - i] += symbol;
  }
  return arrBoard;
}

function checkUp(indexY, indexX, arr, length) {
  for (let i = 0; i < length; i++) {
    if (arr[indexY + i] === undefined) {
      return false;
    }
    var inspector = arr[indexY + i][indexX];
    if (inspector !== "" || inspector === undefined) {
      // console.log("upFalse");
      return false;
    }
  }
  // console.log("upTrue");
  return true;
}

function checkDown(indexY, indexX, arr, length) {
  for (let i = 0; i < length; i++) {
    if (arr[indexY - i] === undefined) {
      return false;
    }
    var inspector = arr[indexY - i][indexX];
    if (inspector !== "" || inspector === undefined) {
      console.log("downFalse");
      return false;
    }
  }
  // console.log("downTrue");
  return true;
}

function checkRight(indexY, indexX, arr, length) {
  for (let i = 0; i < length; i++) {
    if (arr[indexX + i] === undefined) {
      return false;
    }
    var inspector = arr[indexY][indexX + i];
    if (inspector !== "" || inspector === undefined) {
      console.log("rightFalse");
      return false;
    }
  }
  // console.log("rightTrue");
  return true;
}

function checkLeft(indexY, indexX, arr, length) {
  for (let i = 0; i < length; i++) {
    if (arr[indexX - i] === undefined) {
      return false;
    }
    var inspector = arr[indexY][indexX - i];
    if (inspector !== "" || inspector === undefined) {
      console.log("leftFalse");
      return false;
    }
  }
  // console.log("leftTrue");
  return true;
}

// console.log(randomizeEnemyShipPosition());

function printBoardAndTarget(arr, target) {
  console.log(arr);
  console.log("     A   B   C   D   E   F   G   H   I   J" + "\n" + "   +---------------------------------------+");
  for (var i = 0; i < 10; i++) {
    var currentHorizontalArray = arr[i];
    if (i === 9) {
      var tempoStr = (i + 1) + " | ";
    } else {
      var tempoStr = " " + (i + 1) + " | ";
    }
    for (var j = 0; j < 9; j++) {
      if (currentHorizontalArray[j] !== "") {
        tempoStr += (currentHorizontalArray[j] + " | ")
      } else {
        tempoStr += (" " + " | ")
      }
    }
    console.log(tempoStr);
    console.log("   |---|---|---|---|---|---|---|---|---|---|");
  }

  var alphabet = "ABCDEGHIJ"

  var verticalIndex = linearSearch(target[0], alphabet);
  console.log(verticalIndex);
  var horizontalIndex = Number(target[1]);
  console.log(horizontalIndex);
  var arrayIndexTarget = arr[horizontalIndex][verticalIndex];
  console.log("-> " + arrayIndexTarget);

  if (arrayIndexTarget !== "") {
    return "X " + " you've hit -> " + arrayIndexTarget;
  } else {
    return "/ " + "you missed -> " + arrayIndexTarget;
  }
}

function linearSearch(target, values) {
  for (var q = 0; q < values.length; q++) {
    if (values[q] === target) {
      return q;
    }
  }
  return -1;
}

var input = process.argv;

console.log(printBoardAndTarget(randomizeEnemyShipPosition(), input[2]));
