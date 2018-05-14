const quickSort = array => {
  if (array.length <= 1) return array

  let a = []
  let b = []

  const pivot = array.pop()

  array.forEach(num => {
    if (num < pivot) {
      a.push(num)
    } else {
      b.push(num)
    }
  })

  return [...quickSort(a), pivot, ...quickSort(b)]
}

const unsorted = [8, 7, 3, 9, 5, 6, 2, 4, 1,]

console.log(quickSort(unsorted))
