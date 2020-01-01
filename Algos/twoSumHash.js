function twoSumHash(arr, target) {
  let cache = {}

  for (let i = 0; i < arr.length; i++) {
    let num = arr[i]
    cache[num] = i
  }

  for (let i = 0; i < arr.length; i++) {
    let diff = target - arr[i]
    if (cache.hasOwnProperty(diff) && cache[diff] !== i) {
      return [i, cache[diff]]
    }
  }
}

// Return the indices of the pair that equal target sum

function pairSumHashIndex(arr, target) {
  let cache = {}

  for (let i = 0; i < arr.length; i++) {
    let diff = target - arr[i]

    if (diff in cache) {
      return [cache[diff], i]
    }
    cache[arr[i]] = i
  }
  return [-1, -1]
}
