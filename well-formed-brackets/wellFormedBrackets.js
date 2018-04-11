function bracket (string) {
  const array = string.split('')
  const bracketMap = { "}": "{", "]": "[", ")": "(" }
  const lefts = [ "[", "{", "(" ]
  let popped = []

  while( array.length ) {
    let current = array.shift()

    if (lefts.includes(current)) {
      popped.push(current)
    } else {
      let idx = popped.indexOf(bracketMap[current])
      popped.splice(idx, 1)
      if (idx === undefined) return false
    }
  }
  if (popped.length) return false
  return true
}

console.log(bracket('{{[]}}'))
