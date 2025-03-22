function likes(names) {
  if (names.length === 0) return `no one likes this`
  if (names.length === 1) return `${names[0]} likes this`
  if (names.length === 2) return `${names[0]} and ${names[1]} like this`
  if (names.length === 3) return `${names[0]}, ${names[1]} and ${names[2]} like this`
  if (names.length >= 4) return `${names[0]}, ${names[1]} and ${(names.length - 2)} others like this`
}

// iterate over names have conditional logic based on length of array
// guard clause if array length is 0, return no one likes this
// stacked if statements based on length of array. interpolate names based on index positions
// if array length is greater than or equal to 4, interpolate first 2 index positions of array
//then "length - 2" other like this.
// return `hey ${names[0]} how are u`