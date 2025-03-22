// Longest Repeating Character Replacement
// You are given a string s consisting of only uppercase english characters and an integer k. 
// You can choose up to k characters of the string and replace them with any other uppercase English character.

// After performing at most k replacements, return the length of the longest substring which contains only one distinct character.

// Example 1:

// Input: s = "XYYX", k = 2

// Output: 4
// Explanation: Either replace the 'X's with 'Y's, or replace the 'Y's with 'X's.

// Example 2:

// Input: s = "AAABABB", k = 1

// Output: 5
// Constraints:

// 1 <= s.length <= 1000
// 0 <= k <= s.length

function characterReplacement(s, k){
  let longestSubstring = 0
  let secondLongest = 0 // where do i increment this?
  let replacementCounter = 0
  for(let i = 0; i < s.length; i++){
    for(let j = i + 1; j <= s.length; j++){
      if (s[i] !== s[j] && replacementCounter < k) {
        console.log('s before: ', s)
        // s.replace(s[j], s[i])
        s[j] = s[i]
        console.log('s after: ', s)

        longestSubstring += 1
        replacementCounter += 1
      } else {
        longestSubstring += 1
      }
      console.log('this is i: ', s[i])
      console.log('this is j: ', s[j])
      if (secondLongest > longestSubstring) { longestSubstring = secondLongest}
    }
  }
  return longestSubstring
}

// input s = string of uppercase letters, k is amount of times you can replace

// ---Keep replacement ammount correct
// have a counter of times replaced
// everytime a replacement happends, increment counter
// while loop as long as counter < k, you can replace characters

// have longest substring counter
// have replacement counter
// have nested for loop, the first loops through the index position, the second loops from the index position of the external loop
// if value of i === i+1 keep looping, increment substring container
// if value of i !== i+1, i+1 = i (may need to splice if replacement doenst work), whenever splicing, increment longest substring container AND replacement container
// return substring longest container



console.log(characterReplacement('XYYX', 2)) // 4