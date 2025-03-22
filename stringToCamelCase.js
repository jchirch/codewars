// Complete the method/function so that it converts dash/underscore 
// delimited words into camel casing. 
// The first word within the output should be capitalized only if 
// the original word was capitalized 
// (known as Upper Camel Case, also often referred to as Pascal case). 
// The next words should be always capitalized.

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"

// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

// "The_Stealth-Warrior" gets converted to "TheStealthWarrior"

function toCamelCase(str){
  let splitString = str.split("")
  for (let i = 0; i < splitString.length; i++){
    if (splitString[i] === '-' || splitString[i] === '_') {
      splitString[i+1] = splitString[i+1].toUpperCase()
      splitString.splice(i, 1)
    }
  }
  return splitString.join('')
}

// clarifying - will i always get a string? can i always account for - or _? do i need to build a guard clause?
// 
// pseudo
// convert string to array with split
// loop over split string
// if i is - or _, the next index position is capitalized
// join the mutated string and return
// 

console.log(toCamelCase("the-stealth-warrior")) // "theStealthWarrior"
console.log(toCamelCase("The_Stealth_Warrior")) // "TheStealthWarrior"
console.log(toCamelCase("The_Stealth-Warrior")) // "TheStealthWarrior"