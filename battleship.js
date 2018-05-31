// Your code here
function createTable () {
  var mainTable = []
  for (var i = 0; i < 10; i++) {
    var subTable = []
    for (var j = 0; j < 10; j++) {
      subTable.push('')
    }
    mainTable.push(subTable)
  } 
  return mainTable
}

console.log(createTable())

function startPoinX() {
  return Math.floor(Math.random() * 9)
}

function startPoinY() {
  return Math.floor(Math.random() * 8)
}
console.log('x:',startPoinX(), 'y:', startPoinY())

let x = startPoinX()
let y = startPoinY()
var table = createTable()

function patternAircraft() {
  var aircraft = 'A'
  var countA = 5
  for (var i = 0; i < table.length; i++) {
    for (var j = 0; j < table[i].length; j++) {
      if (table[i][j] === table[x][y]) {
        table[i][j] = '*'
        checkRight()
        checkLeft()
        checkUp()
        checkDown()
      }
    }
  }
  return createTable()[x][y]
}
console.log(patternAircraft())

function checkRight () {
  if (createTable()[x+1][y] === '') {
    if (createTable()[x+2][y] === '') {
      if (createTable()[x+3][y] === '') {
        if (createTable()[x+4][y] === '') {
          // for ()
        }
      }
    }
  }
}

function checkLeft () {
  if (createTable()[x-1][y] === '') {
    if (createTable()[x-2][y] === '') {
      if (createTable()[x-3][y] === '') {
        if (createTable()[x-4][y] === '') {
          // for ()
        }
      }
    }
  }
}

function checkUp () {
  if (createTable()[x][y-1] === '') {
    if (createTable()[x][y-2] === '') {
      if (createTable()[x][y-3] === '') {
        if (createTable()[x][y-4] === '') {
          // for ()
        }
      }
    }
  }
}

function checkDown () {
  if (createTable()[x][y+1] === '') {
    if (createTable()[x][y+2] === '') {
      if (createTable()[x][y+3] === '') {
        if (createTable()[x][y+4] === '') {
          // for ()
        }
      }
    }
  }
}

function patternBattleship() {
  var battleship = 'B'
}

function patternCruisher() {
  var cruisher = 'C'
}

function patternDestroy() {
  var destroy = 'D'
}


function board () {
  var mainArr = []
  for (var i = 0; i < 20; i++) {
    var subArr = []
    for (var j = 0; j < 41; j ++) {
      if (i % 2 !== 0) {
        if (j === 0 || j === 40) {
          subArr.push('|')
        } else if (j % 4 === 0) {
          subArr.push('|')
        } else {
          subArr.push('-')
        }
      } else {
        if (j === 0 || j === 40) {
          subArr.push('|')
        } else if (j % 4 === 0) {
          subArr.push('|')
        } else {
          subArr.push(' ')
        }
      }
    }
    var join = subArr.join('')
    mainArr.push(join)
  }
  return mainArr.join('\n')
}
// console.log('  A   B   C   D   E   F   G   H   I   J')
// console.log('+---------------------------------------+')
// console.log(`${board()}`)
// console.log('+---------------------------------------+')