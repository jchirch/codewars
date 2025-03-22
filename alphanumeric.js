// In this example you have to validate if a user input string is alphanumeric. 
// The given string is not nil/null/NULL/None, so you don't have to check that.

// The string has the following conditions to be alphanumeric:

// At least one character ("" is not valid)
// Allowed characters are uppercase / lowercase latin letters and digits from 0 to 9
// No whitespaces / underscore

// guard clause ensuring the character is > 1
// implement a regex?
// [a-zA-z] will match any character from a to z or A to Z.

function alphanumeric(string){
  console.log("string length: ", string.length)
  if (string.length <= 1) return false
  let regex = new RegExp(/^[A-Za-z0-9]+$/)
  if (regex.test(string) === true) {
    return true
  }
  return false
}

// found this online, super clean: return string.match(/^[A-Za-z0-9]+$/) ? true : false;


console.log(alphanumeric("M")) //false
console.log(alphanumeric("Mazinkaiser")) //true
console.log(alphanumeric("hello world_")) //false
console.log(alphanumeric("PassW0rd"))//true
console.log(alphanumeric("     ")) //false