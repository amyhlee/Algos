function maxSubArraySum(arr, n) {
  let max = 0

  for (let i = 0; i < arr.length - n + 1; i++) {
    let tempSum = 0
    for (let j = 1; j < numbers; j++) {
      tempSum += arr[i + j]
    }
    max = Math.max(tempSum, max)
  }
  return max
}
