// A friend of mine takes the sequence of all numbers from 1 to n (where n > 0).
// Within that sequence, he chooses two numbers, a and b.
// He says that the product of a and b should be equal to the sum of all numbers 
// in the sequence, excluding a and b.
// Given a number n, could you tell me the numbers he excluded from the sequence?
// The function takes the parameter: n (n is always strictly greater than 0) 
// and returns an array or a string (depending on the language) of the form:

// [(a, b), ...] or [[a, b], ...] or {{a, b}, ...} or or [{a, b}, ...]
// with all (a, b) which are the possible removed numbers in the sequence 1 to n.

// [(a, b), ...] or [[a, b], ...] or {{a, b}, ...} or ... will be sorted in 
// increasing order of the "a".

// It happens that there are several possible (a, b). The function returns 
// an empty array (or an empty string) if no possible numbers are found 
// which will prove that my friend has not told the truth! 
// (Go: in this case return nil).

// Examples:
// removNb(26) should return [(15, 21), (21, 15)]
// or
// removNb(26) should return { {15, 21}, {21, 15} }
// or
// removeNb(26) should return [[15, 21], [21, 15]]
// or
// removNb(26) should return [ {15, 21}, {21, 15} ]
// or
// removNb(26) should return "15 21, 21 15"

// SUMMARY
// within the range of 1 - n, find 2 numbers, a and b.
// a * b should equal the sum of all numbers 1 theough n minus a & b.

// Pseudo
// find sum of all numbers in sequence. = (n(n+1))/2
// find a way to make array of all numbers 1-n, maybe spread?
// container array for answer
// store sum in variable
// iterate through with nested loops. external loop starting at index 1(0), internat starting at index i + 1
// if a * b === Sum - (a+b), push a b pair into container array.

// more conditionals. if container array.length = 0, return nil, else retrun array.

// function removeNb (n) {
//   let answer = []
//   let range = []
//   let sum = 0

//   for (let i = 1; i <= n; i++){
//     sum += i
//     range.push(i)
//   }

//   for (let i = 0; i <= range.length; i++) {
//     for (let j = i+1; j < range.length; j++){
//       if (range[i] * range[j] === sum - (range[i] + range[j])){
//         answer.push([range[i], range[j]])
//         answer.push([range[j], range[i]])
//       }
//     }
//   }

//   return answer
// }

// console.log(removeNb(26))

function removeNb (n) {
  let answer = []
  let sum = (n * (n+1)) / 2

  for (let i = 1; i <= n; i++){
    let j = (sum - i) / (i + 1)
    if (j % 1 === 0 && j <= i) {
      answer.push([i,j])
    }
  }
  return answer
}

console.log(removeNb(26))