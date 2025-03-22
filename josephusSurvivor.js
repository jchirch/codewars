// In this kata you have to correctly return who is the "survivor", ie: 
// the last element of a Josephus permutation.

// Basically you have to assume that n people are put into a circle and that they are 
// eliminated in steps of k elements, like this:

// n=7, k=3 => means 7 people in a circle
// one every 3 is eliminated until one remains
// [1,2,3,4,5,6,7] - initial sequence
// [1,2,4,5,6,7] => 3 is counted out
// [1,2,4,5,7] => 6 is counted out
// [1,4,5,7] => 2 is counted out
// [1,4,5] => 7 is counted out
// [1,4] => 5 is counted out
// [4] => 1 counted out, 4 is the last element - the survivor!
// The above link about the "base" kata description will give you a more thorough insight about the origin of this kind of permutation, but basically that's all that there is to know to solve this kata.

// Notes and tips: using the solution to the other kata to check your function may be helpful, 
// but as much larger numbers will be used, using an array/list to 
// compute the number of the survivor may be too slow; you may assume that 
// both n and k will always be >=1.

// pseudo
// make start array of 1 - n
// make container array called result
// while loop, while start array is > 0
// push index[2] into result array AND.
// startarray.splice(index position, num of elements)
// add 3 to index position and repeat.
// return last index position of result array

function josephusSurvivor(n,k){
  let range = []
  let index = 0

  for (let i = 1; i <= n; i++) {
    range.push(i)
  }

  while (range.length > 1) {
    index = (index + k - 1) % range.length
    range.splice(index, 1)
  }

  console.log("range: ", range) 
  return range[0]
}

console.log(josephusSurvivor(7,3))

  // while (result.length < n) {
  //   result.push(range[k-1])
  //   range.splice(range[k-1], 1)
  // }

  // for (let i = 2; range.length > 0; i + 3){
  //   console.log("range[i]: ", range[i])
  //   result.push(range[i])
  //   range.splice(range[i], 1)
  // }

  // for (let i = 0; i < range.length; i ++){
  //   let index = (index + k - 1) % range.length
  //   result.push(range[index])
  //   range.splice(index, 1)
  // }