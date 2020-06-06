//Given a string s formed by digits ('0' - '9') and '#' . We want to map s to English lowercase characters as follows:

// Characters ('a' to 'i') are represented by ('1' to '9') respectively.
// Characters ('j' to 'z') are represented by ('10#' to '26#') respectively.
// Return the string formed after mapping.

// It's guaranteed that a unique mapping will always exist.

//JSON.stringify
const map = {"1":"a","2":"b","3":"c","4":"d","5":"e","6":"f","7":"g","8":"h","9":"i","10":"j","11":"k","12":"l","13":"m","14":"n","15":"o","16":"p","17":"q","18":"r","19":"s","20":"t","21":"u","22":"v","23":"w","24":"x","25":"y","26":"z"};

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

function freqAlphabets(s) {
  let result = ''

  for (let i = 0; i < s.length; i++) {
    if (s[i+2] === '#') {
      result += map[s[i-2] + s[i-1]]
    }else{
      result += map[s[i]]
    }
  }
  return result
}
