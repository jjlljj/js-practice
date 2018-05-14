const mergeSort = array => {
  if ( array.length === 1 ) return array

  const left = array.slice(0, array.length/2)
  const right =  array.slice(array.length/2, array.length)

  return join(mergeSort(left), mergeSort(right))
}

const join = (left, right) => {
  let sorted = []

  while(left.length || right.length) {
    if (left[0] < right[0] || !right.length) {
      sorted = [...sorted, left.shift()]
    } else {
      sorted = [...sorted, right.shift()]
    }
  }

  return sorted
}

const unsorted = [8, 7, 3, 9, 5, 6, 2, 4, 1,]

console.log(mergeSort(unsorted))
