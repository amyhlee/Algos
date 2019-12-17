//Write a function called same which accepts two arrays. the function should return true if every value in the array has a corresponding value squared in the second array. the frequency of hte values must be the same.

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false
  }
  let cache = {}
  for (let i = 0; i < arr1.length; i++) {
    let value = arr1[i]

    if (value in cache) {
      cache[value]++
    } else {
      cache[value] = 1
    }

    let squared = Math.sqrt(arr2[i])
    if (squared in cache) {
      cache[squared]--
    } else {
      cache[squared] = -1
    }
  }

  for (let value in cache) {
    if (cache[value] !== 0) {
      return false
    }
  }
  return true
}
