// Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
// haystack = "hello", needle = "ll"

function search(haystack, needle) {
  if (haystack === needle || needle.length === 0) return 0

  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[0]) {
      let temp = haystack.substring(i, i + needle.length)
      if (temp === needle) return i
    }
  }
  return -1
}


