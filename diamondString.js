// Jamie is a programmer, and James' girlfriend. 
// She likes diamonds, and wants a diamond string from James. Since James doesn't know 
// how to make this happen, he needs your help.

// Task
// You need to return a string that looks like a diamond shape when printed on the screen, 
// using asterisk (*) characters. Trailing spaces should be removed, 
// and every line must be terminated with a newline character (\n).

// Return null/nil/None/... if the input is an even number or negative, as 
// it is not possible to print a diamond of even or negative size.

// Examples
// A size 3 diamond:

//  *
// ***
//  *
// ...which would appear as a string of " *\n***\n *\n"

// A size 5 diamond:

//   *
//  ***
// *****
//  ***
//   *
// ...that is:

// "  *\n ***\n*****\n ***\n  *\n"

// guard clause, if n % 2 === 0 || n <= 0 return null
// have return string to += chars into
// can find the most consecutive ammount of *'s. if they are less than n, add 2 *s and /n
// if consecutive ammount is equal to n, n amount of *'s /n, then subtract 2 until asterics are 1.

// 2 for loops? one while i < n and one where i is === n? the less than n will run until it is ===, then the second loop triggers
// could make array of arrays then flatten? call function recursivley until length of main array === n


function diamond(n) {
  if (n % 2 === 0 || n <= 0) return console.log('cant be an even or negative! replace with null after development')
  let diamond = ''

  for (let i = 0; i < n; i += 2) {
    let stars = '*'.repeat(i)
    diamond += stars
  }
  diamond += '\n'

  for (let i = 0; i < n; i -= 2) {
    let stars = '*'.repeat(i)
    diamond -= stars
  }
  diamond += '\n'

  // do the same with whice length <= n

  return diamond
}

console.log(diamond(5))
// console.log(diamond(-5))
// console.log(diamond(4))

// did not finish