function longestUniqueSubstring(str, k) {
  let start = 0
  let maxLength = 0
  let cache = {}

  for (let i = 0; i < str.length; i++) {
    let rightChar = str[i]

    if (!(rightChar in cache)) {
      cache[rightChar] = 0
    }
    cache[rightChar]++

    while(Object.keys(cache).length > k) {
      let leftChar = str[start]
      cache[leftChar] -= 1

      if (cache[leftChar] === 0) {
        delete cache[leftChar]
      }
      start++
    }
    maxLength = Math.max(maxLength, i - start + 1)
  }
  return maxLength
}

function longestUniqueSubstring(str) {
  let start = 0
  let maxLength = 0
  let cache = {}

  for (let i = 0; i < str.length; i++) {
    let letter = str[i]

    if (letter in cache) {
      start = Math.max(start, cache[letter] + 1)
    }
    cache[letter] = i
    maxLength = Math.max(maxLength, i - start + 1)
  }
  return maxLength
}

