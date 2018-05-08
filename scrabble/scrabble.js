//Given a random set of 7 Scrabble tiles, and a fixed position, what word in the English dictionary will result in the most points.

//Your code should take three inputs: a list of 7 random letters, a constant letter, and the position in the result word where that constant letter exists. For example:

//best_scrabble_word('AJDUKWP', 'C', 3)

//Using the 7 random letters, you must find which word in the English dictionary will calculate the high points, with a restriction that the letter 'C' is in the 3rd position. In this scenario, perhaps the words JACK, DUCK, and PUCK are all found, but your code will need to also load the point values for each letter. In this example, JACK is work the most points.

//Edge case: if a SPACE character is given in the list of 7 tiles, it is a wildcard that can be any letter in a word, but you do not receive points for that letter.

//English-language editions of Scrabble contain 100 letter tiles, in the following distribution:

//2 blank tiles (scoring 0 points)
//1 point: E, A, I, L, N, O, R, S, T, U
//2 points: D, G
//3 points: B, C, M, P
//4 points: F, H, V, W, Y
//5 points: K
//8 points: J, X
//10 points: Q, Z
//Use /usr/share/dict/words on your system to do English word lookups.

const fs = require('fs');
const dictionary = fs.readFileSync('/usr/share/dict/words').toString().trim().split('\n')
const charVal = { e: 1, a: 1, i: 1, l: 1, n: 1, o: 1, r: 1, s: 1, t: 1, u:1, d: 2, g: 2, b: 3, c: 3, m: 3, p: 3, f: 4, h: 4, v: 4, w: 4, y:4, k: 5, j: 8, x: 8, q: 10, z:10  }

function best_scrabble_word(chars, char, pos) {
  if ( char ) {
    chars += char.toLowerCase()
  }
  chars.replace(/\s/g, '.')
  const regExp = new RegExp("^[" + chars.toLowerCase() + "]+$", "i", "g")
  const possibleWords = dictionary.filter(word => word.match(regExp) && word.length <= chars.length)

  if (char && pos) {
    const wordsWithPosition = possibleWords.filter(word =>  word[parseInt(pos)-1] == char.toLowerCase())
    return best_word(wordsWithPosition)
  }
  return best_word(possibleWords)
}

function best_word(words) {
  return words.map(word => {
    return { word, score: score_word(word) }
  }).sort((a, b) => a.score > b.score)[0]
}

function score_word(word) {
  return word.toLowerCase().split('').reduce((score, char) => {
    return score + charVal[char]
  }, 0)

}

console.log(best_scrabble_word('ajdukwp', 'C', '3'))
