//Given two strings, write a function that determines if the second string is an anagram of the first.

function anagram(str1, str2) {
  let cache = {}

  if (str1.length !== str2.length) {
    return false
  }
  for (let i = 0; i < str1.length; i++) {
    if(cache[str1[i]]) {
      cache[str1[i]]++
    } else {
      cache[str1[i]] = 1
    }
  }
  for(let i = 0; i < str2.length; i++) {
    if (!cache[str2[i]]) {
      return false
    } else {
      cache[str2[i]] -= 1
    }
  }
  return true
}
