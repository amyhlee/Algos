function smallestSubarraySum(arr, k) {
  let min = Infinity
  let sum = 0
  let start = 0

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]

    while (sum >= k) {
      min = Math.min(min, i - start + 1)
      sum -= arr[start]
      start++
    }
    if (min === Infinity) {
      return 0
    }
  }
  return 0
}
