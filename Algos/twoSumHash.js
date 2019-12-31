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

