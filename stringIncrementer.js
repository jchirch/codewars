// Your job is to write a function which increments a string, to create a new string.

// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.
// Examples:

// foo -> foo1

// foobar23 -> foobar24

// foo0042 -> foo0043

// foo9 -> foo10

// foo099 -> foo100

// Attention: If the number has leading zeros the amount of digits should be considered.

// pseudocode
// split string and save as variable.
// conditional logic guard clause. if sring does not end with number, push 1. join and return
// iterate through split string, pushing letters to string container array
// must stop at block variable when type is integer. if integer, push into integer container array.
// join container array, += 1, then merge num container to end of string container. return new joined string
// 

function incrementString (strng) {
  let splitString = strng.split('')
  let stringContainer = []
  let numContainer = []

  if (!(typeof splitString[splitString.length - 1] === 'number')) {
    splitString.push('1')
    return splitString.join('')
  }

  splitString.forEach((char) => {
    if (typeof char === 'string') {
      stringContainer.push(char)
    }
    if (typeof char === 'number') {
      numContainer.push(char)
    }
  })
  console.log('numContainer: ', numContainer)
  let increment = (parseInt(numContainer.join(''), 10)) 
  increment += 1
  console.log('increment', increment)
  console.log('numContainer incremented: ', numContainer)

  // return 'condition not met'
}

console.log(incrementString('hey789'))
console.log(incrementString('hey0'))
console.log(incrementString('hey01'))
console.log(incrementString('hey'))