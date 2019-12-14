function maxSubArraySum(arr, n) {
  let max = 0

  for (let i = 0; i < arr.length; i++) {
    let first = arr[i]
    let second = arr[i + 1]

    if (first + second > max) {
      max = first + second
    }
  }
  return max
}
