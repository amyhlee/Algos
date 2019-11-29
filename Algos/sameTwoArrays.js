//Write a function called same, which accepts two arrays. The function should return true if every value in the array has its corresponding value squared in the second array. The frequency of values must be the same

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false
  }
  let cache = {}

  for (let i = 0; i < arr1.length; i++) {
    if (cache[arr1[i]]) {
      cache[arr1[i]]++
    }
  }
  for (let i = 0; i < arr2.length; i++) {
    if (!cache[arr2[i]]) {
      return false
    } else if (cache[arr2[i]] === 0) {
      return false
    } else {
      cache[arr2[i]]--
    }
  }
  return true
}
