function uniquePairs(arr, k) {
  let cache = new Set(arr)
  let count = 0

  for (let i = 0; i < arr.length; i++) {
    let sum = arr[i] + k

    if (cache.has(sum) && arr[i] !== arr[i+1]) {
      count++
    }
  }
  return count
}
