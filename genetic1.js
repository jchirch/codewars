// A genetic algorithm is based in groups of chromosomes, called populations.
//  To start our population of chromosomes we need to generate random binary strings with a specified length.

// In this kata you have to implement a function generate that receives a length and has to return 
// a random binary strign with length characters.



// Example:
// Generate a chromosome with length of 4 generate(4) could return the chromosome 0010, 1110, 1111... 
// or any of 2^4 possibilities.

// Note: Some tests are random. If you think your algorithm is correct but the result fails, trying again should work.

const generate = length => {
  let result = []
 
  for (let i = 0; result.length <= length; i++) {
    let binary = [1, 0]
    let randomBinary = Math.floor(Math.random() * binary.length)
    result.push(binary[randomBinary])
  }
  return result
}

console.log(generate(16))