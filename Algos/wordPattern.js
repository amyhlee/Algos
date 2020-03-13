// Given an array of strings and a pattern, return true if all words match the pattern
// pattern = "abba", str = "dog cat cat dog" --> true

function wordPattern(str, pattern) {
  str = str.split(' ')

  let hash = {}
  let set = new Set ()

  if (str.length !== pattern.length) return false

  for (let i = 0; i < pattern.length; i++) {
    let char = pattern[i]

    if (!hash[char] && !set.has(str[i])) {
      hash[char] = str[i]
      set.add(str[i])
    }
  }

  for (let i = 0; i < pattern.length; i++) {
    if (hash[pattern[i]] !== str[i]) {
      return false
    }
  }
  return true
}

// Given an array of words and a pattern, return true if array matches the pattern
// ['mhmh', 'trtr', 'erer'], 'vbvb'  --> true

function match(words, pattern) {
  for (let i = 0; i < words.length; i++) {
    let word = words[i]
    const bool = helper(word, pattern)
    if (bool === false) return false
  }
  return true
}

function helper(string, pattern) {
  let hash = {}
  let set = new Set()

  string = string.split('')
  pattern = pattern.split('')

  if (pattern.length !== string.length) return false

  for (let i = 0; i < pattern.length; i++) {
    if (!hash[pattern[i]] && !set[string[i]]) {
      hash[pattern[i]] = string[i]
      set.add(string[i])
    }
  }
  for (let i = 0; i < pattern.length; i++) {
    if (hash[pattern[i]] !== string[i]) {
      return false
    }
  }
  return true
}
