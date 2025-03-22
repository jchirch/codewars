// ROT13 is a simple letter substitution cipher that replaces a letter with 
// the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13. 
// If there are numbers or special characters included in the string, they should be returned as they are. 
// Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".


// case sensitive?

// result variable shoudl equal ""
// have an array a-z
//loop over message, if character matches char in array, push index position of char + 13 into result.
// if char doesnt match anything in alphabet array, psh character as is into result.

// indexOf() returns index of first eleemnt in array that satisfys condition, else returns -1

function rot13(message) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'
  const upperAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let result = ''

  for (let i = 0; i < message.length; i++) {
    let char = message[i]

    if (alphabet.includes(char)) {
      let newIndex = (alphabet.indexOf(char) + 13) % 26
      result += alphabet[newIndex]
    } else if (upperAlphabet.includes(char)) {
      let newIndex = (upperAlphabet.indexOf(char) + 13) % 26
      result += upperAlphabet[newIndex]
    } else {
      result += char
    }
  }
  return result
}
// console.log(rot13('?test')) // grfg
console.log(rot13('test')) // grfg