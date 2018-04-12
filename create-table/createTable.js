function createTable(num) {
  const table = []
  const width = num + num - 1

  for (let h = 0; h < num; h++) {
    let row = []

    for (let w = 0; w < width; w++){

      if (w >= 2*num-h || w < h) {
        cell = '-'
      } else if (w % 2 === 0 && h % 2 === 0) {
        cell = '0'
      } else if (w % 2 === 1 && h % 2 === 1) {
        cell = '0'
      } else {
        cell = '-'
      }
      row.push(cell)
    }

    table.push(row)
  }

  return table
}

console.log(createTable(5))
