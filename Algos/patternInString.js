function matched(str, pattern) {
  let matched = 0
  let start = 0
  let cache = {}

  for (let i = 0; i < pattern.length; i++) {
    let char = pattern[i]

    if (!(char in cache)) {
      cache[char] = 1
    } else {
      cache[char]++
    }
  }

  for (let j = 0; j < str.length; j++) {
    let letter = str[j]

    if (letter in cache) {
      cache[letter]--

      if (cache[letter] === 0) {
        matched++
      }
    }
    if (matched === Object.keys(cache).length) return true

    if (j >= pattern.length - 1) {
      let leftChar = str[start]
      start++

      if (leftChar in cache) {
        if (cache[leftChar] === 0) {
          matched--
        }
        cache[leftChar]++
      }
    }
  }
  return false
}
