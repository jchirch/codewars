// A format for expressing an ordered list of integers is to use a comma 
// separated list of either

// individual integers
// or a range of integers denoted by the starting integer separated from the end integer 
// in the range by a dash, '-'. The range includes all integers in the interval including both endpoints. 
// It is not considered a range unless it spans at least 3 numbers. For example "12,13,15-17"
// Complete the solution so that it takes a list of integers in increasing order and returns 
// a correctly formatted string in the range format.

// Example:

// solution([-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);
// // returns "-10--8,-6,-3-1,3-5,7-11,14,15,17-20"

// pseudo
// have result container of just " "
// have some kind of container array inside loop
// loop over list.
// if indexposition + 1 equals the next index position add to temp array. 
// nested loop?
// some kind of until loop? until adding 1 to the index position does not equal the nex index position AND the temp container 
// has more than 3 elements in it, add first and last seperated by - to result string.

// https://www.codewars.com/kata/51ba717bb08c1cd60f00002f/train/javascript

function solution(list) {
  let result = []
  let start = list[0]
  let end = list[0]

  for (let i = 0; i <= list.length; i++) {
    // for (let j = i + 1; j < list.length; j ++){
    let tempRange = []
    if (list[i] + 1 === list[i + 1]) {
      console.log('list i: ', list[i]);
      tempRange.push(list[i])
      console.log('temprange : ', tempRange);

    }
    if (tempRange.length >= 3 && list[i] + 1 != list[j]) {
      console.log('temprange 0: ', tempRange[0]);
      result += tempRange[0]
      result += '-'
      result += tempRange[tempRange.length - 1]
    }

  }
  console.log('result: ', result);
  // }


  return result.join('')
}


console.log(solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20])) // "-6,-3-1,3-5,7-11,14,15,17-20")