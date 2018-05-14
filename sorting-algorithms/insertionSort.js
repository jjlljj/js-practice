const insertionSort = array => {
  for (let i = 0; i < array.length; i++) {
    for (let j = i; j > 0; j--) {
      if (array[j] < array[j-1]) {
        [ array[j], array[j-1] ] = [ array[j-1], array[j] ]
      }
    }
  }
  return array
}

const unsorted = [8, 7, 3, 9, 5, 6, 2, 4, 1,]

console.log(insertionSort(unsorted))
