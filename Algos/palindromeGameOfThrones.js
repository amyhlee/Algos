// Complete the gameOfThrones function below to determine whether a given string can be rearranged into a palindrome. If it is possible, return YES, otherwise return NO.

function palindromeCheck(s) {
  let cache = {}
  let count = 0
  let check = true

  for (let i = 0; i < s.length; i++) {
    let char = s[i]
    if (!(char in cache)) {
      cache[char] = 1
    }else{
      cache[char]++
    }
  }
  if (s.length % 2 == 0) {
    for (let prop in cache) {
      if (cache.hasOwnProperty(prop) && cache[prop] % 2 != 0) {
        check = false
        break
      }
    }
  }
  if (s.length % 2 != 0) {
    for (let prop in cache) {
      if (cache[prop] % 2 != 0) {
        count++
      }
    }
  }
  check = count === 1

  if (check) {
    return 'YES'
  }else{
    return 'NO'
  }
}
