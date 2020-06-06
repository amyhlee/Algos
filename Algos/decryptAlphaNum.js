//Given a string s formed by digits ('0' - '9') and '#' . We want to map s to English lowercase characters as follows:

// Characters ('a' to 'i') are represented by ('1' to '9') respectively.
// Characters ('j' to 'z') are represented by ('10#' to '26#') respectively.
// Return the string formed after mapping.

// It's guaranteed that a unique mapping will always exist.


function freqAlphabets(s) {
  let stack = []
  let result = ''

  for (let num of s) {
    if (num !== '#') {
      stack.push(num)
    }else{
      let digit = stack.pop()
      stack.push(map[stack.pop() + digit])
    }
  }
  for (let char of stack) {
    if (char <= '9') {
      result += map[char]
    }else{
      result += char
    }
  }
  return result
}
