// Define a function that takes an integer argument and returns a logical value
//  true or false depending on if the integer is a prime.

// Per Wikipedia, a prime number ( or a prime )
//  is a natural number greater than 1 that has no positive divisors 
//  other than 1 and itself

// add guard clause to ensure number is greater than 1?
// will i always have whole number?

// pseudo
// use mondelo to see if number is odd. return false if even
// use mondelo to see if number is divisible by 3, 5
// 
// 
// 

function isPrime(num) {
  if (num <= 1) return false
  if (num <= 3) return true
  if (num % 2 === 0 || num % 3 === 0) return false
  for(let i = 5; i * i <= num; i++) {
    if (num % i === 0) return false
  }
  return true
}

console.log(isPrime(9)) //false
console.log(isPrime(5)) //true