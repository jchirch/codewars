// 1, 246, 2, 123, 3, 82, 6, 41 are the divisors of number 246.

// Squaring these divisors we get: 1, 60516, 4, 15129, 9, 6724, 36, 1681.

// The sum of these squares is 84100 which is 290 * 290.

// Task
// Find all integers between m and n (m and n are integers with 1 <= m <= n) 
// such that the sum of their squared divisors is itself a square.

// We will return an array of subarrays or of tuples (in C an array of Pair) or a string.

// The subarrays (or tuples or Pairs) will have two elements: 
// first the number the squared divisors of which is a square 
// and then the sum of the squared divisors.

// Example:
// m =  1, n = 250 --> [[1, 1], [42, 2500], [246, 84100]]
// m = 42, n = 250 --> [[42, 2500], [246, 84100]]
// The form of the examples may change according to the language, see "Sample Tests".

// Note
// In Fortran - as in any other language - 
// the returned string is not permitted to contain any redundant trailing 
// whitespace: you can use dynamically allocated character strings.

// function listSquared(m, n) {
  // make a variable that loops over a number as long as number is < n.
  // if n % i === 0, it is divisible by n. push into container array
  // map over array, squaring them. return sum of mapped array.
  // helper meth= find if that sum is of itself a square. 

  //
  // iterate over squares, if isSquare(block eleement) returns true increment value[0]
  //

  // what do you want from me????
  // return tupleContainer, each value is an array of 2.
  //   //value[0] = the number that divisorsArray are divisors of?
  //   //value[1] = squareSum
  //.  // example: tC.push([counter, squareSum])

  function listSquared(m, n) {
    let tupleContainer = []

    for (let i = m; i < n; i++) {
      let divisors = []

      for (let j = 1; j <= i; j++) {
        if (i % j === 0) { divisors.push(j) }
      }

      let squares = divisors.map(num => num ** 2)
      let squareSum = squares.reduce((acc, num) => acc + num, 0)

      if (isSquare(squareSum)) {
        tupleContainer.push([i, squareSum])
      }
    }
    return tupleContainer
  }

  function isSquare(num) {
    const root = Math.sqrt(num);
    return Number.isInteger(root);
  }
// }

