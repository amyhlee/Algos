//Given an array A of strings made only from lowercase letters, return a list of all characters that show up in all strings within the list (including duplicates).  For example, if a character occurs 3 times in all strings but not 4 times, you need to include that character three times in the final answer.

// You may return the answer in any order.

function commonChars(arr) {
  if (arr.length < 2) {
    return arr.split('')
  }

  let res = helper(arr[0], arr[1])

  for (let i = 2; i < arr.length; i++) {
    res = helper(res, arr[i])
  }
  return res.split('')
}

function helper(str1, str2) {
  let result = ''
  let cache = {}

  for (let char of str1) {
    if (!(char in cache)) {
      cache[char] = 1
    } else {
      cache[char]
      ++
    }
  }
  for (let letter in str2) {
    if (cache[letter]) {
      result += letter
      cache[letter]--
    }
  }
  return result
}
