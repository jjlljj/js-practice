const buildDungeon = (size) => {

  const dungeon3d = []
  let prevI
  let prevJ

  for ( let l = 0; l < size; l++ ) {
    const dungeonArray = []
    let randomI = randomNum(size-1)
    while (randomI === prevI ) {
      randomI = randomNum(size-1)
    }
    let randomJ = randomNum(size-1)
    while (randomJ === prevJ) {
      randomJ = randomNum(size-1)
    }

    for ( let i = 0; i < size; i++ ) {
      let rowArray = []

      for ( let j = 0; j < size; j++ ) {
        if ( l > 0 && i === prevI && j === prevJ ) {
          rowArray.push('U')
        } else if ( i === randomI && j === randomJ && l !== size-1) {
          rowArray.push('D')
        } else {
          rowArray.push(buildCell( dungeonArray, size, i, j, rowArray ))
        }
      }

     dungeonArray.push(rowArray)
    }

    prevI = randomI
    prevJ = randomJ
      
    dungeon3d.push(dungeonArray)
  }

  return dungeon3d
}

const randomNum = (num) => {

  return Math.floor(Math.random()*num)
}

// generate an down stair at random index
// pass that index to next level, as upstair
// generate a new down stair at random index !== upstair
// dungeon3[l][i][j]

const buildCell = ( dungeonArray, size, i, j, rowArray ) => {
  const surroundingCells = []

  // const surroundingCells = lookAround()
  // conditional render of monsters

  if ( j > 0 ) {
    surroundingCells.push(rowArray[j-1])
  }
  if ( i > 0 ) {
    surroundingCells.push(dungeonArray[i-1][j])
    surroundingCells.push(dungeonArray[i-1][j-1])
    surroundingCells.push(dungeonArray[i-1][j+1])
  }

  const possibilities = [ ' ', ' ', ' ', 'M']

  if (surroundingCells.includes('M')) {
    possibilities.pop()
  } 
  const random = Math.floor(Math.random()*possibilities.length)
  return  possibilities[random] 
} 

console.log(buildDungeon(4))


// make it 3d
// each level needs a staircase to the level above, level below. 
//      top only needs stair down
//      bottom only stairs up
// staircases can't be stacked ( up/down within level)
//
// stairs need to align level to level
//
//
// no adjacently stacked monsters
