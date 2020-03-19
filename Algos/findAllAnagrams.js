function allAnagrams(str) {
  let result = []
  if (str.length === 1) result.push(str)
  for (let i = 0; i < str.length; i++) {
    let char = str[i]
    let remaining = str.substring(0, i) + str.substring(i + 1)
    let permutation = allAnagrams(remaining)

    for (let j = 0; j < permutation.length; j++) {
      result.push(char + permutation[j])
    }
  }
  return result
}
