// Complete the theLoveLetterMystery function in the editor below. It should return the integer representing the minimum number of operations needed to make the string a palindrome.
// abcd → abcc → abcb → abca → abba //4

function changes(s) {
  let count = 0
  let left = 0
  let right = s.length - 1
  let map = {}
  let alpha = 'abcdefghijklmnopqrstuvwxyz'
  let index = 1

  for (let i = 0; i < alpha.length; i++) {
    map[alpha[i]] = index
    index++
  }

  while(left < right) {
    if (s[left] != s[right]) {
      count += Math.abs(map[s[left]] - map[s[right]])
      left++
      right--
    }else{
      left++
      right--
    }
  }
  return count
}
