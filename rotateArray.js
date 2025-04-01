// Create a function named "rotate" that takes an array and returns 
// a new one with the elements inside rotated n spaces.

// If n is greater than 0 it should rotate the array to the right. 
// If n is less than 0 it should rotate the array to the left. If n is 0, then it should return the array unchanged.

// Example:

// var data = [1, 2, 3, 4, 5];

// rotate(data, 1) // => [5, 1, 2, 3, 4]
// rotate(data, 2) // => [4, 5, 1, 2, 3]
// rotate(data, 3) // => [3, 4, 5, 1, 2]
// rotate(data, 4) // => [2, 3, 4, 5, 1]
// rotate(data, 5) // => [1, 2, 3, 4, 5]

// rotate(data, 0) // => [1, 2, 3, 4, 5]

// rotate(data, -1) // => [2, 3, 4, 5, 1]
// rotate(data, -2) // => [3, 4, 5, 1, 2]
// rotate(data, -3) // => [4, 5, 1, 2, 3]
// rotate(data, -4) // => [5, 1, 2, 3, 4]
// rotate(data, -5) // => [1, 2, 3, 4, 5]
// Furthermore the method should take ANY array of objects and perform this operation on them:

// rotate(['a', 'b', 'c'], 1)     // => ['c', 'a', 'b']
// rotate([1.0, 2.0, 3.0], 1)     // => [3.0, 1.0, 2.0]
// rotate([true, true, false], 1) // => [false, true, true]
// Finally the rotation shouldn't be limited by the indices available in the array. 
// Meaning that if we exceed the indices of the array it keeps rotating.

// Example:

// var data = [1, 2, 3, 4, 5]

// rotate(data, 7)     // => [4, 5, 1, 2, 3]
// rotate(data, 11)    // => [5, 1, 2, 3, 4]
// rotate(data, 12478) // => [3, 4, 5, 1, 2]

// notes on wrapping array:
// Assuming you have some index to track where you are in the array, to make it wrap use

// `index = (index + array.length) % array.length`

// So if there are 3 items in the array and index is -1, you'll get

// `(-1 + 3) % 3 = 2` // last index

// or if you reach past the end at index 3

// `(3 + 3) % 3 = 0` // back to start

// pseudo
// make a times loop "for n times do"
// inside loop change index position by increasing n times
// guard clause if n === 0 return array
// create result array
// 
// 
// 


function rotate(array, n) {
  if (n === 0) return array
  n = n % array.length
  if (n < 0) n += array.length
  
  return array.slice(-n).concat(array.slice(0, -n))
}

var data = [1, 2, 3, 4, 5];

console.log(rotate(data, 1))
console.log(rotate(data, 2))
console.log(rotate(data, 3))
console.log(rotate(data, 4))
console.log(rotate(data, 5))
console.log(rotate(data, 0))