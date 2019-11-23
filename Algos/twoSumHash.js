function twoSumHash(arr) {
  let cache = {}

  for (let i = 0; i < arr.length; i++) {
    let diff = arr[i]
    cache[diff] = i
  }

  for (let i = 0; i < arr.length; i++) {
    if (cache.hasOwnProperty(diff) && cache[diff] !== i) {
      return [i, cache[diff]]
    }
  }
}
