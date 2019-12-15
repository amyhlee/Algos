function biggestSubarrayAvg(arr, k) {
  let results = []

  for (let i = 0; i < arr.length - k + 1; i++) {
    let avg = 0
    for (let j = i; j < i + k; j++) {
      avg += arr[j]
    }
    results.push(avg / k)
  }
  return Math.max(...results)
}


function biggestSubarrayAvgSlidingWindow(arr, k) {
  let results = []
  let start = 0
  let sum = 0

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]

    if (i >= k - 1) {
      results.push(sum / k)
      sum -= arr[start]
      start++
    }
  }
  return Math.max(...results)
}
