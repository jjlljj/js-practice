const bubbleSort = array => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j] > array[j+1]) {
        [ array[j], array[j+1] ] = [ array[j +1], array[j] ]  
      }
    }
  }

  return array
}

const unsorted = [8, 7, 3, 9, 5, 6, 2, 4, 1,]

console.log(bubbleSort(unsorted))
