function anagramSliding(str, pattern) {
  let start = 0
  let matched = 0
  let cache = {}
  let results = []

  for (let i = 0; i < pattern.length; i++) {
    let letter = pattern[i]

    if (!(letter in cache)) {
      cache[letter] = 1
    } else {
      cache[letter]++
    }
  }

  for (let j = 0; j < str.length; j++) {
    let right = str[j]

    if (right in cache) {
      cache[right]--
      if (cache[right] === 0) {
        matched++
      }
    }

    if (matched === Object.keys(cache).length) {
      results.push(start)
    }

    if (j >= pattern.length - 1) {
      let left = str[start]
      start++

      if (left in cache) {
        cache[left]--
        if (cache[left] === 0) {
          matched--
        }
        cache[left]++
      }
    }
  }
  return results
}
