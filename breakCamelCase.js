// Complete the solution so that the function will break up camel casing, using a space between words.
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

// takes a string, returns mutated string if capital letter is found
// if no capital letter, return original string.

// build function to iterate over split string. use for loop
// if character uppercase equals character, insert space 1 index position to the left
// if capital letter is found, insert space 1 index position to the left.
// else return string

function solution(string) {
  let result = ""
  for (let i = 0; i < string.length; i++) {
    if (string[i].toUpperCase() === string[i]) {
      result += " " + string[i]
    }
    else 
    result += string[i]
  }
  return result
}

console.log(solution("camelCasingTest"))
console.log(solution("camelCasing"))
console.log(solution("identify"))
console.log(solution(""))