// Write an algorithm that takes an array and moves all of the zeros to the end, 
// preserving the order of the other elements.

// will i always get an array?
// guard clause for array length < 0

// iterate through array in for loop with index position i
// if arr[i] === 0, push arr[i] to back of the same array
// try push, if not splice(arr[i], arr.length-1)
// return array

// could be endless loop?
// try editing original array, if not reassign to variable and edit variable array

// function moveZeros(arr) {
//   if (arr.length <= 0) {return null}
//   let sorted = arr
//   for (let i = 0; i < sorted.length; i++) {
//     console.log("sorted[i]: ", sorted[i])
//     if (sorted[i] === 0) {
//       sorted.splice(sorted[sorted.length - 1], 0, sorted[i])
//       // sorted.push(sorted[i])
//     }
//     else {
//       continue
//     }
//   }
//   return sorted
// }

// filter 2 times, one selecting all zeros in array
// one selecting all non zeros in arrayt
// return combining the arrays

function moveZeros(arr){
 return arr.filter((el) => {return el !== 0}).concat(arr.filter((el) => { return el === 0}))
 

  // let zeros = arr.filter((el) => {
  //   return el === 0
  // })
  // let nonZeros = arr.filter((el) => {
  //   return el !== 0
  // })
  // return nonZeros.concat(zeros)
}

console.log(moveZeros([]))
console.log(moveZeros([1,2,0,1,0,1,0,3,0,1]))
console.log(moveZeros([false,1,0,1,2,0,1,3,"a"]))