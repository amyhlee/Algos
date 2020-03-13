// Find the longest repeating substring

function longestRepeating(str) {
  let start = 0
  let maxLength = 0

  for (let i = 0; i < str.length; i++) {
    if (str[start] !== str[i]) {
      start = i
    } else {
      maxLength = Math.max(maxLength, i - start + 1)
    }
  }
  return maxLength
}

// find the longest repeating substring that allows for k substitutions
// 'abccbbbbert' --> 7

function substitutingK(str, k) {
  let hash = {}
  let start = 0
  let maxLength = 0
  let maxRepeating = 0

  for (let i = 0; i < str.length; i++) {
    let rightChar = str[i]

    if (!(rightChar in hash)) {
      hash[rightChar] = 1
    } else {
      hash[rightChar]++
    }

    maxRepeating = Math.max(maxRepeating, hash[rightChar])

    if (i - start + 1 - maxRepeating > k) {
      let leftChar = str[start]
      hash[leftChar] -= 1
      start += 1
    }
    maxLength = Math.max(maxLength, i - start + 1)
  }
  return maxLength
}
