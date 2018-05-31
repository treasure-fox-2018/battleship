let ship = [{
  name: 'Cruiser',
  simbol: '@',
  num: 3

  }, {

  name: 'Destroyer',
  simbol: '*',
  num: 2


  }, {
  name: 'Aircraft',
  simbol: '=',
  num: 4

  }, {
  name: 'Battleship',
  simbol: '+',
  num: 5

  }]

function generateBoard() {
  var Boardgame = [];
  for (var i = 0; i < 10; i++) {
    var arr = [];
    for (var j = 0; j < 10; j++) {
      arr.push(' ');
    }
    Boardgame.push(arr);
  }


  //make first INIT for the SHIPS position (random pos)
  for (let i = 0; i < ship.length; i++) {
    generateShip(Boardgame, ship[i].simbol, ship[i].num)
  }


  return Boardgame
}



function generateShip(Boardgame, symbol, shipLength) {
  var horizontalTotal = 0
  var verticalTotal = 0
  var randomXY = Math.round(Math.random())


  while (horizontalTotal <= shipLength) {
    let ran = Math.floor(Math.random() * 10)
    randomPos = [ran, ran]
    var HorizonX = []
    var HorizonY = []
    for (let j = 0; j < shipLength; j++) {
      if (randomPos[0] + j <= 9 && randomPos[0] + j >= 0 && randomPos[1] <= 9 && randomPos[1] >= 0 && Boardgame[randomPos[0] + j][randomPos[1]] == " ") {
        HorizonX.push(randomPos[0] + j)
        HorizonY.push(randomPos[1])
        horizontalTotal++;
      } else {
        horizontalTotal = 0;
      }
    }
  }


  while (verticalTotal <= shipLength) {
    let ran = Math.floor(Math.random() * 10)
    randomPos = [ran, ran]
    var xvertical = []
    var yvertical = []
    for (let j = 0; j < shipLength; j++) {
      if (randomPos[0] <= 9 && randomPos[0] >= 0 && randomPos[1] + j <= 9 && randomPos[1] + j >= 0 && Boardgame[randomPos[0]][randomPos[1] + j] == " ") {
        xvertical.push(randomPos[0])
        yvertical.push(randomPos[1] + j)
        verticalTotal++
      } else {
        verticalTotal = 0
      }
    }
  }


  //random vertical OR horizontal 
  if (randomXY == 1) {
    for (let i = 0; i < HorizonX.length; i++) {
      Boardgame[HorizonX[i]][HorizonY[i]] = symbol
    }
  } else {
    for (let i = 0; i < xvertical.length; i++) {
      Boardgame[xvertical[i]][yvertical[i]] = symbol
    }
  }

}


console.log(generateBoard())
