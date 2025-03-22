// Description:
// Write a function that accepts an array of 10 integers (between 0 and 9), 
// that returns a string of those numbers in the form of a phone number.

// Example
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge.

// Don't forget the space after the closing parentheses!

// will i alaways get an array of 10 integers?
// what happens if the array is short, array has corrupted datatypes?
// need a guyard clause?

// pseudo
// i believe i can complete this with string interpolation alone
// return string with index positions in phone num format
// 
// 

// function createPhoneNumber(numbers){
//   return `(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`;
//   }

// function createPhoneNumber(numbers){
//   return `(${numbers.slice(0,3).join('')}) ${numbers.slice(3,6).join('')}-${numbers.slice(6,10).join('')}`
// }

function createPhoneNumber(numbers){
  let structure = "(xxx) xxx-xxxx"

  for(let i = 0; i < numbers.length; i++){
    let structure = structure.replace("x", numbers[i])
  }
  return structure
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))
