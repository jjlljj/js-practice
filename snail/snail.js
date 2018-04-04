const matrix = [
  [ 1, 2, 3 ],
  [ 4, 5, 6 ],
  [ 7, 8, 9 ]
]
// snail(matrix) ==> [ 1, 2, 3, 6, 9, 8, 7, 4, 5 ]

// what is the recursive solution??

const snail = matrix => {
   let result = []

   while (array.length) {
     result = result.concat(array.shift())

     for (var i=0; i < array.length; i++) {
       result.push(array[i].pop())
     }

     result = result.concat((array.pop() || []).reverse())

     for (var i=array.length-1; i>= 0; i--) {
       result.push(array[i].shift())
     }
   }

   return result
 }


const snailRoot = matrix => {
  const root = matrix[0].length
  const length = root*root
  const path = []
  // find the recursive solution
}
