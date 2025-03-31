// Complete the solution so that it splits the string into pairs of two characters. 
// If the string contains an odd number of characters then it should replace 
// the missing second character of the final pair with an underscore ('_').

// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

// pseudo
// create container array, return container
// split strings and loop over. if split.string.length is even, proceed with iterating i + 2, pushing pairs into container
// if string.length is odd, iterate as long as length of string - 1, push pairs
// end of cycle, push stringarray.last, _ 

function solution(str) {
  let result = []
  let splitString = str.split('')

  function combo(arg1, arg2) {
    return arg1 + arg2
  }

  for (let i = 0; i < splitString.length; i += 2) {
    if (splitString[i + 1] != undefined) {
      result.push(combo(splitString[i], splitString[i + 1]))
    } else {
      result.push(combo(splitString[i], '_'))
    }
  }
  return result
}

console.log(solution('abcd'))
console.log(solution('abcde'))
console.log(solution(''))