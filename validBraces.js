// Write a function that takes a string of braces, and determines if the order 
// of the braces is valid. It should return true if the string is valid, and 
// false if it's invalid.

// All input strings will be nonempty, and will only consist of parentheses, 
// brackets and curly braces: ()[]{}.

// pseudo
// split string into array to iterate over, save to variable
// iterate over array. have 6 containers for each single brace.
// if length of each pair does not equal length of matching pair, return false
// 
// then, find index position of each left half, ensure it is less than index position of right half

// function validBraces(braces){
//   let leftRound = []
//   let rightRound = []
//   let leftBracket = []
//   let rightBracket = []
//   let leftCurly = []
//   let rightCurly = []
//   let splitBraces = braces.split('')

//   splitBraces.forEach((char) => {
//     if (char === '(') {leftRound.push(char)}
//     if (char === ')') {rightRound.push(char)}
//     if (char === '[') {leftBracket.push(char)}
//     if (char === ']') {rightBracket.push(char)}
//     if (char === '{') {leftCurly.push(char)}
//     if (char === '}') {rightCurly.push(char)}
//   })

//   if (leftRound.length != rightRound.length) return false
//   if (leftBracket.length != rightBracket.length) return false
//   if (leftCurly.length != rightCurly.length) return false


// }

// function validBraces(braces){
//   let counter = {}
//   let splitBraces = braces.split('')

//   splitBraces.forEach((char) => {
//     if (!(char in counter)) {
//       counter[char] = 0
//     }
//     if (char in counter) {
//       counter[char] += 1
//     }
//   })

//   for(let key in counter) {
//     if (counter[key] % 2 != 0) {
//       return false
//     }
//   }
//   return true
// }

// split and iterate
// maybe use recursive function?
// if left side, push

// could not solve, looked up answer:

function validBraces(braces) {
  let stack = [];
  let pairs = {
    ')': '(',
    ']': '[',
    '}': '{'
  };

  for (let char of braces) {
    if (char === '(' || char === '[' || char === '{') {
      stack.push(char); // Push opening braces onto the stack
    } else {
      if (stack.length === 0 || stack.pop() !== pairs[char]) {
        return false; // Mismatch or extra closing brace
      }
    }
  }

  return stack.length === 0; // Stack should be empty if all braces are valid
}