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
