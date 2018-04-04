function gameOfLife(num) {
  let game = []
  for (let i = 0; i<num; i++) {
    let row = []
    for (let j = 0; j<num; j++) {
      let random = Math.floor(Math.random() + .65)
      row.push(random)
    }
    game.push(row)
  }
  return game
}

function playGame(game, num) {

  for (let i = 0; i < num; i++) {
    for (let j = 0; j <num; j++) {
      let neighbors = checkCells(game, i, j, num)
      let currentCell = game[i][j]
      game[i][j] = lifeOrDeath(neighbors, currentCell)
    }
  }

  console.log(game)
}

function checkCells(game, i, j, num) {
  const neighbors = []
  if (i > 0) {
    neighbors.push(game[i-1][j])
    neighbors.push(game[i-1][j-1] || 0)
    neighbors.push(game[i-1][j+1] || 0)
  }
  if (i < num-1) {
    neighbors.push(game[i+1][j])
    neighbors.push(game[i+1][j-1] || 0)
    neighbors.push(game[i+1][j+1] || 0)
  }
  neighbors.push(game[i][j-1] || 0)
  neighbors.push(game[i][j-1] || 0)
  
  return neighbors
}

function lifeOrDeath(neighbors, currentCell) {
  
  const liveNeighbors = neighbors.filter(neighbor => neighbor === 1).length
  const isAlive = currentCell === 1
  //live cell w fewer than two live neighbors dies

  if ( isAlive && liveNeighbors < 2 ) {
    return 0
  }

  // live cell with two or three live neighbors lives

  if ( isAlive && (liveNeighbors === 2 || liveNeighbors === 3) ) {
    return 1
  }

  // live cell with more than three live neighbors dies

  if ( isAlive && liveNeighbors > 3 ) {
    return 0
  } 

  // dead cell with exact three live neighbors lives

  if ( !isAlive && liveNeighbors === 3 ) {
    return 1
  }

  return currentCell
}

const game = gameOfLife(18)

setInterval(() => {
  playGame(game, 18)
},1000)

//console.log(playGame(15))
