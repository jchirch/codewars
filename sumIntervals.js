// Write a function called sumIntervals/sum_intervals that accepts an array of intervals, 
// and returns the sum of all the interval lengths. Overlapping intervals should only be counted once.

// Intervals
// Intervals are represented by a pair of integers in the form of an array. 
// The first value of the interval will always be less than the second value. 
// Interval example: [1, 5] is an interval from 1 to 5. The length of this interval is 4.

// need to make a container
// if statement, if index position 1 of 1 array1 is > index position 0 of  array2, find difference array2[1]-array1[0]
//else: below code
// loop over intervals as long as length of intervals > i
// find difference in intervals[i][1]-intervals[i][0]
//return sum of differences

function sumIntervals(intervals) {
  let counter = 0
  if (x){

  }

  for (let i = 0; i < intervals.length; i++){
    counter += (intervals[i][1]-intervals[i][0])
  }
  return counter
}

console.log(sumIntervals([[1,5]])) // 4
console.log(sumIntervals([[1,5],[6,10]])) //8