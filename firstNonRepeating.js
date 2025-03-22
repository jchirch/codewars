// Write a function named first_non_repeating_letter† that takes a string input, and 
// returns the first character that is not repeated anywhere in the string.

// For example, if given the input 'stress', the function should return 't', 
// since the letter t only occurs once in the string, and occurs first in the string.

// As an added challenge, upper- and lowercase letters are considered the same character, 
// but the function should return the correct case for the initial letter. 
// For example, the input 'sTreSS' should return 'T'.

// If a string contains all repeating characters, it should return an empty string ("");

// † Note: the function is called firstNonRepeatingLetter for historical reasons, 
// but your function should handle any Unicode character.

// convert string to array of characters. 
// nested iteration, external i loop starts at index position 0 of split array
// internal j loop is i + 1, loops through remainer of array.
// if array[j] === array[i], both lowercase, remove both elements with splice. splice i and splice j.
// scoot back i with i--
// break out of loop so it does not use original index after splicing.
// at the end of the loop, if array length is 0, return "", otherwise return first element in array


function firstNonRepeatingLetter(s) {
  let splitString = s.split('')
  
  for (let i = 0; i < splitString.length; i++){
    for (let j = i + 1; j < splitString.length; j++){
      if (splitString[i].toLowerCase() === splitString[j].toLowerCase()) {
        splitString.splice(j, 1)
        splitString.splice(i, 1)
        i--       
        break
      }
    }
  }
  return splitString.length === 0 ? "" : splitString[0]
}

console.log(firstNonRepeatingLetter('stress'))
console.log(firstNonRepeatingLetter('stReSs'))
console.log(firstNonRepeatingLetter('aAaAa'))
console.log(firstNonRepeatingLetter('moonmen'))