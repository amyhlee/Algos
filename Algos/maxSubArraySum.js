function maxSubArraySum(arr, n) {
  let max = -Infinity

  if (num > arr.length) {
    return null
  }

  for (let i = 0; i < arr.length - n + 1; i++) {
    let tempSum = 0
    for (let j = 1; j < numbers; j++) {
      tempSum += arr[i + j]
    }
    max = Math.max(tempSum, max)
  }
  return max
}

function maxSubarraySum(arr, n) {
  if (num > arr.length) return null

  let max = 0
  let temp = 0

  for (let i = 0; i < num; i++) {
    max += arr[i]
  }
  temp = max
  for (let i = num; i < arr.length; i++) {
    temp = temp - arr[i - num] + arr[i]
    max = Math.max(temp, max)
  }
  return max
}
