function biggestSubarrayAvg(arr, k) {
  let results = []

  for (let i = 0; i < arr.length - k + 1; i++) {
    let avg = 0
    for (let j = i; j < k; j++) {
      avg += arr[j]
    }
    results.push(avg / k)
  }
  return Math.max(...results)
}
